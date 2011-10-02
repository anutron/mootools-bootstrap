/*
---

name: Behavior.BS.Popover.Specs

license: MIT-style license.

requires:
 - Bootstrap/Behavior.BS.Popover
 - Behavior-Tests/Behavior.SpecsHelpers

provides: [Behavior.BS.Popover.Specs]

...
*/
(function(){

	var str = '<div style="visibility: hidden;"><a href="#" data-bs-popover-animate="false" class="btn danger" data-behavior="BS.Popover" title="A Title" data-content="The content">hover for popover</a></div>';
	Behavior.addFilterTest({
		filterName: 'BS.Popover',
		desc: 'Creates an instance of Bootstrap.Popover',
		content: str,
		returns: Bootstrap.Popover,
		expect: function(element, instance){
			instance._makeTip().setStyle('visibility', 'hidden'); //hide in test UI
			element.fireEvent('mouseenter');
			waits(instance.options.delayIn + 10);
			runs(function(){
				expect(instance.visible).toBe(true);
				expect(instance._makeTip().getParent()).toBeDefined();
			});
			waits(1000);
			runs(function(){
				element.fireEvent('mouseleave');
			});
			waits(instance.options.delayOut + 100);
			runs(function(){
				instance.hide();
				expect(instance.visible).toBe(false);
				expect(instance._makeTip().getParent()).toBeNull();
			});
		}
	});
	Behavior.addFilterTest({
		filterName: 'BS.Popover',
		desc: 'Creates an instance of Bootstrap.Popover',
		content: str,
		returns: Bootstrap.Popover,
		multiplier: 10,
		specs: false
	});

})();