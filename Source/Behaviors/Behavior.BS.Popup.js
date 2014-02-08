/*
---

name: Behavior.Popup

description: Creates a bootstrap popup based on HTML markup.

license: MIT-style license.

authors: [Aaron Newton]

requires:
 - Behavior/Behavior
 - More/Object.Extras
 - Bootstrap.Popup

provides: [Behavior.BS.Popup]

...
*/

Behavior.addGlobalFilters({
	'BS.Popup': {
		defaults: {
			focusOnShow: "input[type=text], select, textarea",
			hide: false,
			animate: true,
			closeOnEsc: true,
			closeOnClickOut: true,
			mask: true,
			persist: true
		},
		returns: Bootstrap.Popup,
		setup: function(el, api){
			if (api.get('moveElementTo')) el.inject(api.getElement('moveElementTo'));
			var showNow = (!el.hasClass('hide') && !el.hasClass('hidden') && !api.getAs(Boolean, 'hide') && (!el.hasClass('in') && !el.hasClass('fade')))
			var popup = new Bootstrap.Popup(el,
				Object.cleanValues(
					api.getAs({
						persist: Boolean,
						animate: Boolean,
						closeOnEsc: Boolean,
						closeOnClickOut: Boolean,
						mask: Boolean
					})
				)
			);
			popup.addEvent('destroy', function(){
				api.cleanup(el);
			});
			if (api.get('focusOnShow')) {
				popup.addEvent('show', function(){
					var input = document.id(popup).getElement(api.get('focusOnShow'));
					if (input) input[input.get('tag') == 'select' ? 'focus' : 'select']();
				});
			}

			if (showNow) popup.show();

			return popup;
		}
	}
});