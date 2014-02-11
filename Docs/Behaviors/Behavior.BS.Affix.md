Behavior Filter: Behavior.BS.Affix
===================================

A behavior filter to instantiate [Bootstrap](http://twitter.github.com/bootstrap/#affix) Affix functionality.

### Demo / Fancy Docs

[http://anutron.github.com/mootools-bootstrap/#affix](http://anutron.github.com/mootools-bootstrap/#affix)


### Example

	<a data-behavior="BS.Affix"
		data-bs-affix-options="
			'top': 10
		">I stick around!</a>

### Options

* top - (*number*) The distance from the top that the user must scroll before the affix class is added and the affix-top class is removed. Defaults to 0.
* bottom - (*number*) The distance from the top that the user must scroll before the affix class is removed and the affix-bottom class is added. Specify a negative number to have it measure from the bottom of the window height.
* classNames - (*object*) The class names to apply in the various states. Defaults to `top: "affix-top", bottom: "affix-bottom", affixed: "affix"`. These should be defined in your CSS as you like. You can also manually affix location for the element using the events listed below.
* monitor - (*element*) The element that is monitored for scrolls; defaults to the `window`.
* persist - (*boolean*) If `true`, the class never leaves the `affixed` state.
* affixAtElement - (*object*) If specified, allows you to define an element that the user scrolls to instead of a fixed offset. See docs for [Bootstrap.Affix][] and notes below.

## Using affixAtElement

The `affixAtElement` option allows you to specify an element or elements that define the boundary for the center class (the `affixed` class). You can specify a different element for the "top" and for the "bottom". If you define only a value for the top then the class uses that element for the bottom as well. Using this functionality you can, for example, have an element that represents the top of the affixed area and another for the bottom or you can use the same element, effectively saying "when this element is visible add this class to my element".

Because the `Affix` class is not limited to only the affixed behavior (you can add any class you like), you could have some element change color when the user scrolls another into view.

Note that unlike the options signature in `Bootstrap.Affix`, the element options here are selectors relative to the element with the behavior filter upon it.

### Example:

	<div data-behavior="BS.Affix"
		data-bs-affix-options="
			'affixAtElement': {
				'top': {
					'element': 'span.foo'
				}
			}
		">...</div>

This example configures the behavior to add the `affixed` class (the default) to our div whenever the element `span.foo` is scrolled into view. When that element is scrolled past, the `affix-bottom` class (the default) is substituted.

### Defaults

The default values for the `affixAtElement` option are as follows:

	affixAtElement: {
		top: {
			element: null,
			edge: 'top',
			offset: 0
		},
		bottom: {
			element: null,
			edge: 'bottom',
			offset: 0
		}
	}

If you specify a top and/or a bottom the class will measure their positions on startup and use that for the top/bottom boundaries for the center `affix` class.

### Note

The `refresh` method (that re-calculates the locations of these elements) is called whenever any other filter fires the `ammendDom`, `destroyDom`, or `display:layout` events.