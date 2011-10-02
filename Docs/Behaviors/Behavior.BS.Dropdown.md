Behavior Filter: Behavior.BS.Dropdown
===================================

A behavior filter to instantiate [Bootstrap](http://twitter.github.com/bootstrap/#navigation) dropdowns.

### Demo / Fancy Docs

[http://anutron.github.com/mootools-bootstrap/#dropdown](http://anutron.github.com/mootools-bootstrap/#dropdown)

### Example

	<ul data-behavior="BS.Dropdown">
		<li class="menu">
			<a href="#" class="menu">Menu2</a>
			<ul class="menu-dropdown">
				<li><a>item1</a></li>
				<li><a>item2</a></li>
				<li><a>item3</a></li>
			</ul>
		</li>
	</ul>

### Note

You can have numerous menus inside the container. Technically you could assign it to the document body but that's not the intended behavior.