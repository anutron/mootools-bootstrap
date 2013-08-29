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
			var affix = new Bootstrap.Affix(el,
				Object.cleanValues(
					api.getAs({
						top: Number,
						bottom: Number,
						classNames: Object
					})
				)
			);

			api.onCleanup(affix.detach.bind(affix));

			return affix;
		}
	}
});