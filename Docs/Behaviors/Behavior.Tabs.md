Behavior Filter: Behavior.BS.Tabs
===================================

A behavior filter to instantiate [Bootstrap](http://twitter.github.com/bootstrap/#tabs) tabs.

### Demo / Fancy Docs

[http://anutron.github.com/mootools-bootstrap/#tabs](http://anutron.github.com/mootools-bootstrap/#tabs)

### Example

	<ul class="tabs" data-behavior="BS.Tabs">
		<li><a>Home</a></li>
		<li><a>Profile</a></li>
		<li><a>Messages</a></li>
		<li><a>Settings</a></li>
	</ul>
	<div id="my-tab-content" class="tab-content">
		<div id="home">
			...
		</div>
		<div id="profile">
			...
		</div>
		<div id="messages">
			...
		</div>
		<div id="settings">
			...
		</div>
	</div>

### Options

* tabs-selector - (*string*) A selector that finds the tab elements relative to the container. Defaults to `>li`.
* sections-selector - (*string*) A selector that finds the corresponding sections from the container. Defaults to `+.tab-content > div` (i.e. the child div of the sibling from the container that matches `.tab-content`).
* smooth - (*boolean*) If `true` the tabs will switch with an opacity transition. Defaults to `false`.
* smoothSize - (*boolean*) If `true` the tabs will switch with a height transition. Defaults to `false`.