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
* rearrangeDOM - (*boolean*) If `true` the `TabSwapper` class will gather sections and tabs together into shared parent elements. Defaults to `false`.
* preventDefault - (*boolean*) If `true` (the default), clicks on tabs have the default behavior of their events ignored (i.e. if the tab is a link, the browser won't follow it).
* selectedClass - (*string*) If set, will apply the supplied classname to the selected tab. Defaults to `tabSelected`.
* initPanel - (*integer*) If set, the initial tab displayed will be this index.
* cookieName - (*stirng*) If set, the tab state will be stored in a cookie.
* delegationTarget - (*string*; optional) if set, this is the element that will have a click delegator attached to it to watch for any #href clicks. These will in turn allow you to change tabs when a link anywhere within that delegation target reference a section by id.
* hash - (*string*) Specifies the key to store store the tab state in the location string (for example: a value of `tab` will put `#tab=some-section` in the query string). This make it possible to reload the page and use the back button. If you give IDs to your tabs or sections, those will be used in the query string. Otherwise the index of the section is used.