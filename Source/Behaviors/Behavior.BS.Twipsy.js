/*
---

name: Behavior.BS.Twipsy

description: Instantiates Bootstrap.Twipsy based on HTML markup.

license: MIT-style license.

requires:
 - /Bootstrap.Twipsy
 - Behavior/Behavior
 - More/Object.Extras

provides: [Behavior.BS.Twipsy]

...
*/
Behavior.addGlobalFilters({
	'BS.Twipsy': {
		defaults: {
			location: 'above', //below, left, right
			animate: true,
			delayIn: 200,
			delayOut: 0,
			offset: 0,
			trigger: 'hover' //focus, manual
		},
		delayUntil: 'mouseover,focus',
		returns: Bootstrap.Twipsy,
		setup: function(el, api){
			var options = Object.cleanValues(
				api.getAs({
					location: String,
					animate: Boolean,
					delayIn: Number,
					delayOut: Number,
					fallback: String,
					override: String,
					html: Boolean,
					offset: Number,
					trigger: String
				})
			);
			options.getTitle = Function.from(api.get('content') || element.get('title'));
			var tip = new Bootstrap.Twipsy(el, options);
			api.onCleanup(tip.destroy.bind(tip));
			if (api.event) tip.show();
			return tip;
		}
	}
});