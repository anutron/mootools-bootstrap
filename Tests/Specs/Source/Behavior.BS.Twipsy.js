/*
---

name: Behavior.BS.Twipsy.Specs

license: MIT-style license.

requires:
 - Bootstrap/Behavior.BS.Twipsy
 - Behavior-Tests/Behavior.SpecsHelpers

provides: [Behavior.BS.Twipsy.Specs]

...
*/
(function(){

	var str = '<div style="visibility: hidden;"><a href="#" data-bs-twipsy-animate="false" class="btn danger" data-behavior="BS.Twipsy" title="A Title">hover for popover</a></div>';
	Behavior.addFilterTest({
		filterName: 'BS.Twipsy',
		desc: 'Creates an instance of Bootstrap.Twipsy',
		content: str,
		returns: Bootstrap.Twipsy,
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
		filterName: 'BS.Twipsy',
		desc: 'Creates an instance of Bootstrap.Twipsy',
		content: str,
		returns: Bootstrap.Twipsy,
		multiplier: 10,
		specs: false
	});

})();