/*
---

name: Behavior.Popup.Specs

requires:
 - Bootstrap/Behavior.BS.Popup
 - Behavior-Tests/Behavior.SpecsHelpers

provides: [Behavior.Popup.Specs]

...
*/
(function(){

	var str = '<div style="visibility: hidden;">\
	<div style="visibility: hidden" data-behavior="BS.Popup" data-bs-popup-animate="false" class="modal" id="demoPopup">\
	  <div class="modal-header">\
	    <a href="#" class="close">&times;</a>\
	    <h3>Modal Heading</h3>\
	  </div>\
	  <div class="modal-body">\
	    <p>One fine body...</p>\
	  </div>\
	  <div class="modal-footer">\
	    <a href="#" class="btn primary">Primary</a>\
	    <a href="#" class="btn secondary">Secondary</a>\
	  </div>\
	</div></div>';
	Behavior.addFilterTest({
		filterName: 'BS.Popup',
		desc: 'Creates an instance of Bootstrap.Popup',
		content: str,
		returns: Bootstrap.Popup,
		expect: function(element, instance){
			expect($$('.modal')[0].isDisplayed()).toBe(true);
			expect($$('.modal-backdrop')[0].isDisplayed()).toBe(true);
			instance.hide();
			expect($$('.modal')[0].isDisplayed()).toBe(false);
			expect($$('.modal-backdrop').length).toBe(0);
		}
	});
	Behavior.addFilterTest({
		filterName: 'BS.Popup',
		desc: 'Creates an instance of Bootstrap.Popup',
		content: str,
		returns: Bootstrap.Popup,
		multiplier: 10,
		specs: false
	});

})();