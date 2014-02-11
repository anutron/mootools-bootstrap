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
					options.affixAtElement.top.element = el.getElement(options.affixAtElement.top.element);
					if (!options.affixAtElement.top.element) api.warn('could not find affixAtElement.top element!');
				}
				if (options.affixAtElement.bottom && options.affixAtElement.bottom.element){
					options.affixAtElement.bottom.element = el.getElement(options.affixAtElement.bottom.element);
					if (!options.affixAtElement.bottom.element) api.warn('could not find affixAtElement.bottom element!');
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

			api.onCleanup(function(){
				affix.detach();
				api.removeEvents(events);
			});

			return affix;
		}
	}
});