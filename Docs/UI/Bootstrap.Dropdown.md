Class: Bootstrap.Dropdown {#Bootstrap-Dropdown}
=============================

Creates a simple dropdown menu that works with the [Bootstrap](http://twitter.github.com/bootstrap/#navigation) formatted dropdowns.

### Implements

- [Options][]
- [Events][]


Bootstrap.Dropdown Method: constructor
-----------------------------

### Syntax

	new Bootstrap.Dropdown(element[, options]);

### Arguments

1. element - (*mixed*) A string of the id for an Element or an Element that *contains* one or more dropdown menus.
2. options - (*object*, optional) a key/value object of options

### Events

* show - (*function*) The function to apply when a menu element is displayed. Passed the element that is displayed
* hide - (*function*) The function to apply when the menu is hidden. Passed an Elements array of the hidden items (typically only one).

### Example HTML

	<ul>
		<li class="menu">
			<a href="#" class="menu">Menu2</a>
			<ul class="menu-dropdown">
				<li><a>item1</a></li>
				<li><a>item2</a></li>
				<li><a>item3</a></li>
			</ul>
		</li>
	</ul>

Bootstrap.Dropdown Method: show {#Bootstrap-Dropdown:show}
------------------------------------------------

Shows the specified menu item.

### Syntax

	myDropdown.show(element);

### Arguments

1. element - (DOM element or id) The submenu item to show (a `ul.menu-dropdown` element).

### Returns

* (*object*) This [Bootstrap.Dropdown][] instance.

Bootstrap.Dropdown Method: hideAll {#Bootstrap-Dropdown:hideAll}
------------------------------------------------

Hides any displayed menus.

### Syntax

	myDropdown.hideAll();

### Returns

* (*object*) This [Bootstrap.Dropdown][] instance.

Bootstrap.Dropdown Method: destroy {#Bootstrap-Dropdown:destroy}
------------------------------------------------

Hides all the menu items and detaches the event listeners. Does not remove anything from the DOM.

### Syntax

	myDropdown.destroy();

### Returns

* (*object*) This [Bootstrap.Dropdown][] instance.

[Bootstrap.Dropdown]: #Bootstrap-Dropdown
[Options]: http;//mootools.net/core/Class/Class.Extras#Options
[Events]: http;//mootools.net/core/Class/Class.Extras#Events