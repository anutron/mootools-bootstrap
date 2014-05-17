/*
---

name: Bootstrap.Popover

description: A simple tooltip (yet larger than Bootstrap.Tooltip) implementation that works with the Twitter Bootstrap css framework.

authors: [Aaron Newton]

license: MIT-style license.

requires:
 - /Bootstrap.Tooltip

provides: Bootstrap.Popover

...
*/

Bootstrap.Popover = new Class({

	Extends: Bootstrap.Tooltip,

	options: {
		// cssClass: '',
		// arrowClass: '',
		location: 'right',
		offset: Bootstrap.version == 2 ? 10 : 0,
		getTitle: function(el){
			return el.get(this.options.title);
		},
		content: 'data-content',
		getContent: function(el){
			return el.get(this.options.content);
		},
		closeOnClickOut: true
	},

	_makeTip: function(){
		if (!this.tip){
			var title = this.options.getTitle.apply(this, [this.element]) || this.options.fallback;
			var content = this.options.getContent.apply(this, [this.element]);

			var inner = new Element('div.popover-inner');


			if (title) {
				var titleWrapper = new Element('h3.popover-title');
				if (typeOf(title) == "element") titleWrapper.adopt(title);
				else titleWrapper.set('html', title);
				inner.adopt(titleWrapper);
			} else {
				inner.addClass('no-title');
			}

			if (typeOf(content) != "element") content = new Element('p', { html: content});
			inner.adopt(new Element('div.popover-content').adopt(content));
			var arrow = new Element('div.arrow');
			this.tip = new Element('div.popover').addClass(this.options.location)
				 .adopt(arrow)
				 .adopt(inner);
			if (this.options.cssClass) this.tip.addClass(this.options.cssClass);
			if (this.options.arrowClass) arrow.addClass(this.options.arrowClass);
			if (this.options.animate) this.tip.addClass('fade');
			if (Browser.Features.cssTransition && this.tip.addEventListener){
				this.tip.addEventListener(Browser.Features.transitionEnd, this.bound.complete);
			}
			this.element.set('alt', '').set('title', '');
		}
		return this.tip;
	},

	_attach: function(method){
		this.parent.apply(this, arguments);
		// add close on click out support
		if (this.options.closeOnClickOut){
			this.bound.closeOnClickOut = this.bound.closeOnClickOut || this._closeOnClickOut.bind(this);
			this.bound.closeOnClickOutMonitors = this.bound.closeOnClickOutMonitors || {
				// when the tip is shown, we monitor the document body for clicks "out" to close the tip
				show: function(){
					(function(){
						document.body.addEvent('click', this.bound.closeOnClickOut);
					}).delay(1, this);
				}.bind(this),
				// when the tip is hidden, we remove our monitor
				hide: function(){
					(function(){
						document.body.removeEvent('click', this.bound.closeOnClickOut);
					}).delay(1, this);
				}.bind(this)
			};
			this[method || 'addEvents'](this.bound.closeOnClickOutMonitors);
		}
	},

	// when the user clicks an element that isn't the tip or isn't in the tip, hide it
	_closeOnClickOut: function(e){
		if (this.visible && e.target != this.tip && !this.tip.hasChild(e.target)) this.hide();
	}

});