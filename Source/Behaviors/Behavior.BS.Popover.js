/*
---

name: Behavior.BS.Popover

description: Instantiates Bootstrap.Popover based on HTML markup.

license: MIT-style license.

requires:
 - /Bootstrap.Popover
 - Behavior/Behavior
 - More/Object.Extras

provides: [Behavior.BS.Popover]

...
*/
Behavior.addGlobalFilters({
	'BS.Popover': {
		defaults: {
			location: 'right', //below, left, right
			animate: true,
			delayIn: 200,
			delayOut: 0,
			fallback: '',
			offset: 10,
			title: 'title', //element property
			trigger: 'hover' //focus, manual
		},
		delayUntil: 'mouseover,focus',
		returns: Bootstrap.Popover,
		setup: function(el, api){
			var options = Object.cleanValues(
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
			);
			if (api.get('content')) options.getContent = Function.from(api.get('content'));
			var tip = new Bootstrap.Popover(el, options);
			if (api.event) tip._enter();
			api.onCleanup(tip.destroy.bind(tip));
			return tip;
		}
	}
});