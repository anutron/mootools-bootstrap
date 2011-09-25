/*
---

name: Behavior.BS.Tabs.Specs

license: MIT-style license.

requires:
 - Bootstrap/Behavior.BS.Tabs
 - Behavior-Tests/Behavior.SpecsHelpers

provides: [Behavior.BS.Tabs.Specs]

...
*/

(function(){

	var str = '<ul class="tabs" data-behavior="BS.Tabs">\
	  <li class="active"><a>Home</a></li>\
	  <li><a>Profile</a></li>\
	  <li><a>Messages</a></li>\
	  <li><a>Settings</a></li>\
	</ul>\
	<div id="my-tab-content" class="tab-content">\
	  <div class="active" id="home">\
	    ...\
	  </div>\
	  <div id="profile">\
	    ...\
	  </div>\
	  <div id="messages">\
	    ...\
	  </div>\
	  <div id="settings">\
	    ...\
	  </div>\
	</div>';
	Behavior.addFilterTest({
		filterName: 'BS.Tabs',
		desc: 'Creates an instance of Bootstrap.Tabs',
		content: str,
		returns: TabSwapper
	});
	Behavior.addFilterTest({
		filterName: 'BS.Tabs',
		desc: 'Creates an instance of Bootstrap.Tabs',
		content: str,
		returns: TabSwapper,
		multiplier: 10,
		specs: false
	});

})();