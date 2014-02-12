/*
---

name: Behavior.BS.Affix

description: Markup invocation for Bootstrap.Affix class.

license: MIT-style license.

authors: [Aaron Newton]

requires:
 - Behavior/Behavior
 - /Bootstrap.Affix

provides: [Behavior.BS.Affix]

...
*/

Behavior.addGlobalFilters({
	'BS.Affix': {

		requires: ['top'],

		setup: function(el, api){
			var options = Object.cleanValues(
				api.getAs({
					top: Number,
					bottom: Number,
					classNames: Object,
					affixAtElement: Object,
					persist: Boolean
				})
			);

			options.monitor = api.get('monitor') ? api.getElement('monitor') : window;

			if (options.affixAtElement){
				if (options.affixAtElement.top && options.affixAtElement.top.element){
					var topEl = options.affixAtElement.top.element;
					options.affixAtElement.top.element = topEl == 'self' ? el : el.getElement(topEl);
					if (!options.affixAtElement.top.element) api.warn('could not find affixAtElement.top element!', topEl, el);
				}
				if (options.affixAtElement.bottom && options.affixAtElement.bottom.element){
					bottomEl = options.affixAtElement.bottom.element;
					options.affixAtElement.bottom.element = bottomEl == 'self' ? el : el.getElement(bottomEl);
					if (!options.affixAtElement.bottom.element) api.warn('could not find affixAtElement.bottom element!', bottomEl, el);
				}
			}

			var affix = new Bootstrap.Affix(el, options);

			var refresh = affix.refresh.bind(affix),
					events = {
						'layout:display': refresh,
						'ammendDom': refresh,
						'destroyDom': refresh
					};

			api.addEvents(events);
			window.addEvent('load', refresh);
			api.addEvent('apply:once', refresh);

			api.onCleanup(function(){
				affix.detach();
				api.removeEvents(events);
			});

			return affix;
		}
	}
});