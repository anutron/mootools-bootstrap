/*
---

name: Behavior.Popup

description: Creates a bootstrap popup based on HTML markup.

license: MIT-style license.

requires:
 - Behavior/Behavior
 - More/Object.Extras
 - Bootstrap.Popup

provides: [Behavior.BS.Popup]

...
*/

Behavior.addGlobalFilters({
	'BS.Popup': {
		options: {
			hide: false,
			animate: true,
			closeOnEsc: true,
			closeOnClickOut: true,
			mask: true
		},
		returns: Bootstrap.Popup,
		setup: function(el, api){
			var popup = new Bootstrap.Popup(el,
				Object.cleanValues(
					api.getAs({
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
			if (!el.hasClass('hide') && !api.getAs(Boolean, 'hide')) {
				popup.show();
			}
			return popup;
		}
	}
});