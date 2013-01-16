/*
---

name: Behavior.BS.Popover

description: Instantiates Bootstrap.Popover based on HTML markup.

license: MIT-style license.

authors: [Aaron Newton]

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
			contentElement: null,
			cloneContent: false,
			titleElement: null,
			cloneTitle: false,
		  onOverflow: false,
			location: 'right', //below, left, right
			animate: true,
			delayIn: 200,
			delayOut: 0,
			offset: 10,
			trigger: 'hover' //focus, manual
		},
		delayUntil: 'mouseover,focus',
		returns: Bootstrap.Popover,
		setup: function(el, api){
			var options = Object.cleanValues(
				api.getAs({
					onOverflow: Boolean,
					location: String,
					animate: Boolean,
					delayIn: Number,
					delayOut: Number,
					html: Boolean,
					offset: Number,
					trigger: String
				})
			);

			var getter = function(which){
				if (api.get(which + 'Element')) {
					var target = el.getElement(api.get(which + 'Element'));
					if (!target) api.fail('could not find ' + which + ' for popup');
					if (api.get('clone' + which.capitalize())) target = target.clone(true, true);
					return target.setStyle('display', 'block');
				} else {
					return api.get(which) || el.get(which);
				}
			};

			options.getContent = getter.pass('content');
			options.getTitle = getter.pass('title');
			var tip = new Bootstrap.Popover(el, options);
			if (api.event) tip._enter();
			api.onCleanup(tip.destroy.bind(tip));
			return tip;
		}
	}
});