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
		// monitor: window,
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
		Bootstrap.Affix.register(this, this.options.monitor);
		return this;
	},

	detach: function(){
		Bootstrap.Affix.drop(this, this.options.monitor);
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

Bootstrap.Affix.register = function(instance, monitor){
	monitor = monitor || window;
	if (!monitor.retrieve('Bootstrap.Affix.attached')) Bootstrap.Affix.attach(monitor);
	monitor.retrieve('Bootstrap.Affix.registered', []).push(instance);
	Bootstrap.Affix.onScroll.apply(monitor);
};

Bootstrap.Affix.drop = function(instance, monitor){
	monitor.retrieve('Bootstrap.Affix.registered', []).erase(instance);
	if (monitor.retrieve('Bootstrap.Affix.registered').length == 0) Bootstrap.Affix.detach(monitor);
};

Bootstrap.Affix.attach = function(monitor){
	monitor.addEvent('scroll', Bootstrap.Affix.onScroll);
	monitor.store('Bootstrap.Affix.attached', true);
};

Bootstrap.Affix.detach = function(monitor){
	monitor = monitor || window;
	monitor.removeEvent('scroll', Bootstrap.Affix.onScroll);
	monitor.store('Bootstrap.Affix.attached', false);
};

Bootstrap.Affix.onScroll = function(_y){
	var monitor = this,
			y = _y || monitor.getScroll().y,
			size;
	var registered = monitor.retrieve('Bootstrap.Affix.registered');
	for (var i = 0; i < registered.length; i++){
		var instance = registered[i];
		var bottom = instance.options.bottom,
		top = instance.options.top;
		if (bottom && bottom < 0){
			if (size == null) size = monitor.getSize().y;
			bottom = size + bottom;
		}

		// if we've scrolled above the top line, unpin
		if (y < top && instance.pinned) instance.unpin();
		// if we've scrolled past the bottom line, unpin
		else if (bottom && bottom < y && y > top && instance.pinned) instance.unpin(true);
		else if (y > top && (!bottom || (bottom && y < bottom)) && !instance.pinned) instance.pin();

	}
};