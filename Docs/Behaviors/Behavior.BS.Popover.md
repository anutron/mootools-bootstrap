Behavior Filter: Behavior.BS.Popover
===================================

A behavior filter to instantiate [Bootstrap](http://twitter.github.com/bootstrap/#popovers) popovers.

### Demo / Fancy Docs

[http://anutron.github.com/mootools-bootstrap/#alerts](http://anutron.github.com/mootools-bootstrap/#popovers)

### Example

	<a data-behavior="BS.Popover" title="A Title"
		data-popover-content="And here's some amazing content. It's very engaging. right?">
		hover for popover</a>

### Options

* title - (*string*) The title of the popup. If not defined, will attempt to read it from the element's `title` property.
* cloneTitle - (*string*) Selector, relative to the target element, for the element to be used for the `title` of the popover.
* content - (*string*) The content of the popover.
* cloneContent - (*string*) Selector, relative to the target element, for the element to be used for the `content` of the popover.
* location - (*string*) The location of the tip: `above`, `below`, `left`, or `right`. Defaults to `above`.
* animate - (*boolean*) If true the tip will fade in. Defaults to `true`.
* delayIn - (*number*) The time in milliseconds that the tip should delay from showing. Defaults to `200`.
* delayOut - (*number*) The time in milliseconds that the tip should delay from hiding. Defaults to `0`.
* offset - (*number* or *object*) The offset of the tip. If a number, will be used for the y offset for `top` and `bottom` located tips, x for `left` and `right` located tips. If an object, should contain `.y` and/or `.x` numerical values. Defaults to `10`.
* trigger - (*string*) The event type to attach to the target element to show the tip. Choose from `hover`, `focus`, or `manual`.
* cssClass - (*string*) Optional css class to add to the popup.
* arrowClass - (*string*) Optional css class to add to the popup arrow element.
* closeOnClickOut - (*boolean*) if `true`, hides the tip when the user clicks anywhere that isn't the tip (only useful if you aren't using `hover` for the trigger)