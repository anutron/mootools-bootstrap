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
			fallback: '',
			offset: 0,
			title: 'title', //element property
			trigger: 'hover' //focus, manual
		},
		delayUntil: 'mouseover,focus',
		returns: Bootstrap.Twipsy,
		setup: function(el, api){
			var tip = new Bootstrap.Twipsy(el,
				Object.cleanValues(
					api.getAs({
						location: String,
						animate: Boolean,
						delayIn: Number,
						delayOut: Number,
						fallback: String,
						html: Boolean,
						offset: Number,
						title: String,
						trigger: String
					})
				)
			);
			api.onCleanup(tip.destroy.bind(tip));
			if (api.event) tip.show();
			return tip;
		}
	}
});