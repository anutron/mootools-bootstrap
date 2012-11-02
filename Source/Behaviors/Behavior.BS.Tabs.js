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

	// start with the base options from the tabs behavior
	var tabs = Object.clone(Behavior.getFilter('Tabs'));

	// customizing it here for Bootstrap, we start by duplicationg the other behavior
	Behavior.addGlobalFilters({
		'BS.Tabs': tabs.config
	});

	// set custom defaults specific to bootstrap
	Behavior.setFilterDefaults('BS.Tabs', {
		'tabs-selector': 'a:not(.dropdown-toggle)',
		'sections-selector': '+.tab-content >',
		'selectedClass': 'active',
		smooth: false,
		smoothSize: false
	});

	// this plugin configures tabswapper to use bootstrap specific DOM structures
	Behavior.addGlobalPlugin('BS.Tabs', 'BS.Tabs.CSS', function(el, api, instance){
		// whenever the tabswapper activates a tab
		instance.addEvent('active', function(index, section, tab){
			// get the things in the tabs element that are active and remove that class
			el.getElements('.active').removeClass('active');
			// get the parent LI for the tab and add active to it
			tab.getParent('li').addClass('active');
			// handle the possibility of a dropdown in the tab.
			var dropdown = tab.getParent('.dropdown');
			if (dropdown) dropdown.addClass('active');
		});
		// invoke the event for startup
		var now = instance.now;
		var tab = instance.tabs[now];
		var section = tab.retrieve('section');
		instance.fireEvent('active', [now, section, tab]);

	});

	// this plugin makes links that have #href targets select their target tabs
	Behavior.addGlobalPlugin('BS.Tabs', 'BS.Tabs.TargetLinks', function(el, api, instance){
		// get the element to delegate clicks to - defaults to the container
		var target = el;
		var tabAPI = new BehaviorAPI(el, 'BS.Tabs');
		if (tabAPI.get('delegationTarget')) target = el.getElement(tabAPI.get('delegationTarget'));
		if (!target) api.fail('Could not find delegation target for tabs');

		//find all the sections
		var sections = instance.tabs.map(function(tab){
			return tab.retrieve('section');
		});

		// delegate watching click events for any element with an #href
		target.addEvent('click:relay([href^=#])', function(event, link){
			if (link.get('href') == "#") return;
			// attempt to find the target for the link within the page
			var target = el.getElement(link.get('href'));
			// if the target IS a tab, do nothing; valid targets are *sections*
			if (instance.tabs.contains(target)) return;
			// if no target was found at all, warn
			if (!target) api.warn('Could not switch tab; no section found for ' + link.get('href'));
			// if the target is a section, show it.
			if (sections.contains(target)) {
				event.preventDefault();
				instance.show(sections.indexOf(target));
			}
		});
		// whenever the instance activates a tab, find any related #href links and add `active-section-link` to the appropriate ones
		instance.addEvent('active', function(index, section, tab){
			document.body.getElements('.active-section-link').removeClass('active-section-link');
			// if there's a "group controller" go select it.
			if (tab.get('data-tab-group')) {
				document.id(tab.get('data-tab-group')).addClass('active-section-link');
			}
		});

				// invoke the event for startup
		var now = instance.now;
		var tab = instance.tabs[now];
		var section = tab.retrieve('section');
		instance.fireEvent('active', [now, section, tab]);

	});

})();