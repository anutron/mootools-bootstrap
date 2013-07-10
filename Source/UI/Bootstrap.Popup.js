/*
---

name: Popup

description: A simple Popup class for the Twitter Bootstrap CSS framework.

authors: [Aaron Newton]

license: MIT-style license.

requires:
 - Core/Element.Delegation
 - Core/Fx.Tween
 - Core/Fx.Transitions
 - More/Mask
 - More/Elements.From
 - More/Element.Position
 - More/Element.Shortcuts
 - More/Events.Pseudos
 - /CSSEvents
 - /Bootstrap

provides: [Bootstrap.Popup]

...
*/

Bootstrap.Popup = new Class({

	Implements: [Options, Events],

	options: {
		/*
			onShow: function(){},
			onHide: function(){},
			animate: function(){},
			destroy: function(){},
		*/
		persist: true,
		closeOnClickOut: true,
		closeOnEsc: true,
		mask: true,
		animate: true,
		changeDisplayValue: true
	},

	initialize: function(element, options){
		this.element = document.id(element).store('Bootstrap.Popup', this);
		this.setOptions(options);
		this.bound = {
			hide: this.hide.bind(this),
			bodyClick: function(e){
				if (!this.element.contains(e.target)){
					this.hide();
				}
			}.bind(this),
			keyMonitor: function(e){
				if (e.key == 'esc') this.hide();
			}.bind(this),
			animationEnd: this._animationEnd.bind(this)
		};
		if ((this.element.hasClass('fade') && this.element.hasClass('in')) ||
		    (!this.element.hasClass('hide') && !this.element.hasClass('fade'))){
			if (this.element.hasClass('fade')) this.element.removeClass('in');
			this.show();
		}
	},

	toElement: function(){
		return this.element;
	},

	_checkAnimate: function(){
		var check = this.options.animate !== false && Browser.Features.getCSSTransition() && (this.options.animate || this.element.hasClass('fade'));
		if (!check) {
			this.element.removeClass('fade').addClass('hide');
			if (this._mask) this._mask.removeClass('fade').addClass('hide');
		} else if (check) {
			this.element.addClass('fade').removeClass('hide');
			if (this._mask) this._mask.addClass('fade').removeClass('hide');
		}
		return check;
	},

	show: function(){
		if (this.visible || this.animating) return;
		this.element.addEvent('click:relay(.close, .dismiss)', this.bound.hide);
		if (this.options.closeOnEsc) document.addEvent('keyup', this.bound.keyMonitor);
		this._makeMask();
		if (this._mask) this._mask.inject(document.body);
		this.animating = true;
		if (this.options.changeDisplayValue) this.element.show();
		if (this._checkAnimate()){
			this.element.offsetWidth; // force reflow
			this.element.addClass('in');
			if (this._mask) this._mask.addClass('in');
		} else {
			this.element.show();
			if (this._mask) this._mask.show();
		}
		this.visible = true;
		this._watch();
	},

	_watch: function(){
		if (this._checkAnimate()) this.element.addEventListener(Browser.Features.getCSSTransition(), this.bound.animationEnd);
		else this._animationEnd();
	},

	_animationEnd: function(){
		if (Browser.Features.getCSSTransition()) this.element.removeEventListener(Browser.Features.getCSSTransition(), this.bound.animationEnd);
		this.animating = false;
		if (this.visible){
			this.fireEvent('show', this.element);
		} else {
			this.fireEvent('hide', this.element);
			if (this.options.changeDisplayValue) this.element.hide();
			if (!this.options.persist){
				this.destroy();
			} else if (this._mask) {
				this._mask.dispose();
			}
		}
	},

	destroy: function(){
		if (this._mask) this._mask.destroy();
		this.fireEvent('destroy', this.element);
		this.element.destroy();
		this._mask = null;
		this.destroyed = true;
	},

	hide: function(event, clicked){
		if (clicked) {
			var immediateParentPopup = clicked.getParent('[data-behavior~=BS.Popup]');
			if (immediateParentPopup && immediateParentPopup != this.element) return;
		}
		if (!this.visible || this.animating) return;
		this.animating = true;
		if (event && clicked && clicked.hasClass('stopEvent')){
			event.preventDefault();
		}
		document.id(document.body).removeEvent('click', this.bound.hide);
		document.removeEvent('keyup', this.bound.keyMonitor);
		this.element.removeEvent('click:relay(.close, .dismiss)', this.bound.hide);

		if (this._checkAnimate()){
			this.element.removeClass('in');
			if (this._mask) this._mask.removeClass('in');
		} else {
			this.element.hide();
			if (this._mask) this._mask.hide();
		}
		this.visible = false;
		this._watch();
	},

	// PRIVATE

	_makeMask: function(){
		if (this.options.mask){
			if (!this._mask){
				this._mask = new Element('div.modal-backdrop');
				if (this._checkAnimate()) this._mask.addClass('fade');
			}
		}
		if (this.options.closeOnClickOut){
			if (this._mask) this._mask.addEvent('click', this.bound.hide);
			else document.id(document.body).addEvent('click', this.bound.hide);
		}
	}

});