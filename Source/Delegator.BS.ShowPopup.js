/*
---

name: Delegator.BS.ShowPopup

description: Shows a hidden popup.

license: MIT-style license.

requires:
 - Behavior/Delegator
 - Behavior/Behavior

provides: [Delegator.BS.ShowPopup]

...
*/

(function(){



	Delegator.register('click', 'BS.showPopup', {

		require: ['target'],
		handler: function(event, link, api){
			var target = link.getElement(api.get('target'));
			event.preventDefault();
			if (!target) api.fail('Could not find target element to activate: ', api.get('target'));
			api.getBehavior().apply(target);
			target.getBehaviorResult('BS.Popup').show();
		}

	});



/*
	Delegator.register('click', 'Popover', {
		defaults: {
			template: '<div class="popover {position}"><div class="arrow"></div><div class="inner"><h3 class="title">{title}</h3><div class="content"><p>{alt}</p> <a class="btn close primary right">Close</a></div></div></div>',
			mask: true,
			position: 'auto'
		},
		handler: function(event, link, api){
			event.preventDefault();
			var template,
					templateElement = api.get('templateElement');
			if (templateElement) template = element.getElement(templateElement).get('html');
			if (!template) template = api.get('template');

			var pos = api.get('position');
			if (pos == 'auto'){
					if (link.getParent('.column1')) {
							pos = 'right';
					} else {
							pos = 'left'
					}
			};

			var position, edge;
			switch(pos){
				case 'above':
					position = 'centerTop';
					edge = 'centerBottom'
					break;
				case 'below':
					position = 'centerBottom';
					edge = 'centerTop'
					break;
				case 'left':
					position = 'centerLeft';
					edge = 'centerRight'
					break;
				case 'right':
					position = 'centerRight';
					edge = 'centerLeft'
					break;
			}

			var content = Elements.from(template.substitute({
				title: link.get('title'),
				alt: link.get('alt'),
				position: pos
			}))[0];

			var coords = show(content, {
				relativeTo: link,
				position: position,
				edge: edge,
				returnPos: true
			}, api.getAs(Boolean, 'mask'));
			if (pos == 'right') {
				delete coords.left;
				coords.right = 75;
			} else {
				coords.left = 75;
			}
			content.setStyles(coords);
		}
	});*/


})();