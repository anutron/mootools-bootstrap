/*
---

name: Behavior.BS.Tabs

description: Instantiates Bootstrap.Tabs based on HTML markup.

license: MIT-style license.

authors: [Aaron Newton]

requires:
 - Behavior/Behavior
 - Clientcide/Behavior.Tabs

provides: [Behavior.BS.Tabs]

...
*/
(function(){

	var tabs = Object.clone(Behavior.getFilter('Tabs'));

	Behavior.addGlobalFilters({
		'BS.Tabs': tabs.config
	});

	Behavior.setFilterDefaults('BS.Tabs', {
		'tabs-selector': 'a:not(.dropdown-toggle)',
		'sections-selector': '+.tab-content >',
		'selectedClass': 'active',
		smooth: false,
		smoothSize: false
	});

	Behavior.addGlobalPlugin('BS.Tabs', 'BS.Tabs.CSS', function(el, api, instance){
		instance.addEvent('active', function(index, section, tab){
			el.getElements('.active').removeClass('active');
			tab.getParent('li').addClass('active');
			var dropdown = tab.getParent('.dropdown');
			if (dropdown) dropdown.addClass('active');
		});
		var now = instance.now;
		var tab = instance.tabs[now];
		var section = tab.retrieve('section');
		instance.fireEvent('active', [now, section, tab]);

		var sections = instance.tabs.map(function(tab){
			return tab.retrieve('section');
		});

		el.addEvent('click:relay(a[href^=#])', function(event, link){
			if (link.get('href') == "#") return;
			var target = el.getElement(link.get('href'));
			if (instance.tabs.contains(target)) return;
			if (!target) api.warn('Could not switch tab; no section found for ' + link.get('href'));
			if (sections.contains(target)) {
				event.preventDefault();
				instance.show(sections.indexOf(target));
			}
		});

	});

})();