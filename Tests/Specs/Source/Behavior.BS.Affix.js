/*
---

name: Behavior.BS.Affix.Specs

license: MIT-style license.

requires:
 - Bootstrap/Behavior.BS.Affix
 - Behavior-Tests/Behavior.SpecsHelpers

provides: [Behavior.BS.Affix.Specs]

...
*/
(function(){

	var str = '<div style="visibility: hidden;" data-behavior="BS.Affix" data-bs-affix-top="10" data-bs-affix-bottom="20">I stick around!</div>';
	Behavior.addFilterTest({
		filterName: 'BS.Affix',
		desc: 'Creates an instance of Bootstrap.Affix',
		content: str,
		returns: Bootstrap.Affix,
		expect: function(element, instance){
			Bootstrap.Affix.onScroll.apply(window, [0]);
			expect(instance.pinned).toBe(false);
			Bootstrap.Affix.onScroll.apply(window, [15]);
			expect(instance.pinned).toBe(true);
			Bootstrap.Affix.onScroll.apply(window, [25]);
			expect(instance.pinned).toBe(false);
		}
	});
	Behavior.addFilterTest({
		filterName: 'BS.Affix',
		desc: 'Creates an instance of Bootstrap.Affix',
		content: str,
		returns: Bootstrap.Affix,
		multiplier: 10,
		specs: false
	});

})();