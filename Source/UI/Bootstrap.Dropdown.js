/*
---

name: Bootstrap.Dropdown

description: A simple dropdown menu that works with the Twitter Bootstrap css framework.

license: MIT-style license.

requires:
 - /Bootstrap
 - Core/Element.Event
 - More/Element.Shortcuts

provides: Bootstrap.Dropdown

...
*/
Bootstrap.Dropdown = new Class({

	Implements: [Options, Events],

	options: {
		/*
			onShow: function(element){},
			onHide: function(elements){}
		*/
	},

	initialize: function(container){
		this.element = document.id(container);
		this.boundHandle = this._handle.bind(this);
		document.id(document.body).addEvent('click', this.boundHandle);
	},

	hideAll: function(){
		var els = this.element.getElements('li.open').removeClass('open');
		this.fireEvent('hide', els);
		return this;
	},

	show: function(subMenu){
		this.hideAll();
		this.fireEvent('show', subMenu);
		subMenu.addClass('open');
		return this;
	},

	destroy: function(){
		this.hideAll();
		document.body.removeEvent('click', this.boundHandle);
	},

	// PRIVATE

	_handle: function(e){
		this.hideAll();
		if (this.element.contains(e.target) && (e.target.match('a.menu') || e.target.getParent('a.menu'))) {
			e.preventDefault();
			e.target.getParent('li').toggleClass('open');
		}
	}
});