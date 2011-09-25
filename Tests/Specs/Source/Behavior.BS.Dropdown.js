/*
---

name: Behavior.BS.Dropdown.Specs

license: MIT-style license.

requires:
 - Bootstrap/Behavior.BS.Dropdown
 - Behavior-Tests/Behavior.SpecsHelpers

provides: [Behavior.BS.Dropdown.Specs]

...
*/
(function(){

	var str = '<ul data-behavior="BS.Dropdown">\
      <li class="menu">\
        <a id="menu1" href="#" class="menu">Menu1</a>\
        <ul class="menu-dropdown">\
          <li><a id="menu1-item1">item1</a></li>\
          <li><a>item2</a></li>\
          <li><a>item3</a></li>\
        </ul>\
      </li>\
      <li class="menu">\
        <a id="menu2" href="#" class="menu">Menu2</a>\
        <ul class="menu-dropdown">\
          <li><a id="menu2-item1">item1</a></li>\
          <li><a>item2</a></li>\
          <li><a>item3</a></li>\
        </ul>\
      </li>\
    </ul>';
	Behavior.addFilterTest({
		filterName: 'BS.Dropdown',
		desc: 'Creates an instance of Bootstrap.Dropdown',
		content: str,
		returns: Bootstrap.Dropdown,
		expect: function(element, instance){
			var menus = element.getElements('li.menu');
			instance._handle({
				preventDefault: function(){},
				target: element.getElement('#menu1')
			});
			expect(menus[0].hasClass('open')).toBe(true);
			instance._handle({
				preventDefault: function(){},
				target: element.getElement('#menu2')
			});
			expect(menus[0].hasClass('open')).toBe(false);
			expect(menus[1].hasClass('open')).toBe(true);
		}
	});
	Behavior.addFilterTest({
		filterName: 'BS.Dropdown',
		desc: 'Creates an instance of Bootstrap.Dropdown',
		content: str,
		returns: Bootstrap.Dropdown,
		multiplier: 10,
		specs: false
	});

})();