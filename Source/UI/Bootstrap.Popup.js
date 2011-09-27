/*
---

name: Popup

description: A simple Popup class for the Twitter Bootstrap CSS framework.

license: MIT-style license.

requires:
 - More/Mask
 - More/Elements.From
 - More/Element.Position
 - More/Element.Delegation
 - More/Element.Shortcuts
 - Core/Fx.Tween
 - Core/Fx.Transitions

provides: [Bootstrap.Popup]

...
*/

Bootstrap.Popup = new Class({

	Implements: [Options, Events],

	options: {
		persist: true,
		closeOnClickOut: true,
		closeOnEsc: true,
		mask: true,
		animate: true
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
			}.bind(this)
		};
	},

	show: function(){
		this.element.addEvent('click:relay(.close)', this.bound.hide);
		this.mask();
		if (this.options.closeOnEsc) document.addEvent('keyup', this.bound.keyMonitor)
		if (this.options.animate){
			this._slideIn();
		} else {
			this.element.show();
			this.fireEvent('show', this.element);
		}
	},

	mask: function(){
		if (this.options.mask){
			if (!this._mask){
				this._mask = new Element('div.modal-backdrop', {
					events: {
						click: this.bound.hide
					}
				}).inject(document.body);
			}
			if (this.options.animate){
				var to = this._mask.getStyle('opacity');
				this._mask.setStyle('opacity', 0);
				this._mask.show();
				console.log('tween to: ', to);
				this._mask.tween('opacity', 0, to);
			} else {
				this._mask.show();
			}
		} else if (this.options.closeOnClickOut) {
			document.body.addEvent('click', this.bound.hide);
		}
	},

	destroy: function(){
		this._mask.destroy();
		this.fireEvent('destroy', this.element);
		this.element.destroy();
		this._mask = null;
		this.destroyed = true;
	},

	hide: function(event){
		if (event) event.preventDefault();
		document.body.removeEvent('click', this.bound.hide);
		document.removeEvent('keyup', this.bound.keyMonitor);
		this.element.removeEvent('click:relay(.close)', this.bound.hide);

		if (this.options.animate) this._slideOut();
		else this._afterHide();
		return;
	},

	// PRIVATE

	_slideIn: function(){
		var top = this.element.show().getStyle('top').toFloat(),
		    topMargin = this.element.getStyle('margin-top').toInt();
		if (top < 0) top = 0;
		if (top + topMargin < 0) top = -topMargin;
		this.element.setStyle('top', - this.element.getSize().y);
		this.fireEvent('animate', this.element);
		if (!this.fx) this.fx = new Fx.Tween(this.element);
		this.fx.setOptions({
			transition: 'back:out'
		}).start('top', top).chain(function(){
			this.fireEvent('show', this.element);
		}.bind(this));
	},

	_slideOut: function(){
		var demasked, slidOut;
		if (this._mask) {
			var o = this._mask.getStyle('opacity');
			this._mask.fade('out').get('tween').chain(function(){
				this._mask.setStyle('opacity', o);
				demasked = true;
				if (demasked && slidOut) this._afterHide();
			}.bind(this));
		}
		var top = this.element.getStyle('top').toFloat();
		this.fx.setOptions({
			transition: 'back:in'
		}).start('top', - this.element.getSize().y).chain(function(){
			this.element.setStyle('top', top);
			slidOut = true;
			if (demasked && slidOut) this._afterHide();
		});
	},

	_afterHide: function(){
		if (!this.options.persist){
			this.destroy();
		} else {
			if (this._mask) this._mask.hide();
			this.element.hide();
		}
		this.fireEvent('hide', this.element);
	}

});