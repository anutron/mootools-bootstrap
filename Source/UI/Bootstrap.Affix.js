/*
---

name: Bootstrap.Affix

description: A MooTools implementation of Affix from Bootstrap; allows you to peg an element to a fixed position after scrolling.

authors: [Aaron Newton]

license: MIT-style license.

requires:
 - Core/Element.Dimensions
 - More/Object.Extras
 - /Bootstrap

provides: [Bootstrap.Affix]

...
*/

Bootstrap.Affix = new Class({

	Implements: [Options, Events],

	options: {
		// onPin: function(){},
		// onUnPin: function(isBottom){},
		top: 0,
		bottom: null,
		classNames: {
			top: "affix-top",
			bottom: "affix-bottom",
			affixed: "affix"
		}
	},

	initialize: function(element, options){
		this.element = document.id(element);
		this.setOptions(options);
		this.element.addClass(this.options.classNames.top);
		this.attach();
	},

	attach: function(){
		Bootstrap.Affix.register(this);
		return this;
	},

	detach: function(){
		Bootstrap.Affix.drop(this);
		return this;
	},

	pinned: false,

	pin: function(){
		this.pinned = true;
		this._reset();
		this.element.addClass(this.options.classNames.affixed);
		this.fireEvent('pin');
		return this;
	},

	unpin: function(isBottom){
		this._reset();
		this.element.addClass(this.options.classNames[isBottom ? 'bottom' : 'top']);
		this.pinned = false;
		this.fireEvent('unPin', [isBottom]);
		return this;
	},

	_reset: function(){
		this.element.removeClass(this.options.classNames.affixed)
								.removeClass(this.options.classNames.top)
								.removeClass(this.options.classNames.bottom);
		return this;
	}

});

Bootstrap.Affix.registered = [];

Bootstrap.Affix.register = function(instance){
	if (!Bootstrap.Affix.attached) Bootstrap.Affix.attach();
	Bootstrap.Affix.registered.push(instance);
	Bootstrap.Affix.onScroll();
};

Bootstrap.Affix.drop = function(instance){
	Bootstrap.Affix.registered.erase(instance);
	if (Bootstrap.Affix.registered.length == 0) Bootstrap.Affix.detach();
};

Bootstrap.Affix.attach = function(){
	window.addEvent('scroll', Bootstrap.Affix.onScroll);
	Bootstrap.Affix.attached = true;
};

Bootstrap.Affix.detach = function(){
	window.removeEvent('scroll', Bootstrap.Affix.onScroll);
	Bootstrap.Affix.attached = false;
};

Bootstrap.Affix.onScroll = function(_y){
	var y = _y || window.getScroll().y,
	inSize;
	for (var i = 0; i < Bootstrap.Affix.registered.length; i++){
		var instance = Bootstrap.Affix.registered[i];
		var bottom = instance.options.bottom,
		top = instance.options.top;
		if (bottom && bottom < 0){
			if (winSize == null) winSize = window.getSize().y;
			bottom = winSize + bottom;
		}

		// if we've scrolled above the top line, unpin
		if (y < top && instance.pinned) instance.unpin();
		// if we've scrolled past the bottom line, unpin
		else if (bottom && bottom < y && y > top && instance.pinned) instance.unpin(true);
		else if (y > top && (!bottom || (bottom && y < bottom)) && !instance.pinned) instance.pin();

	}
};