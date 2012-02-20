Behavior Filter: Behavior.BS.Tooltip
===================================

A behavior filter to instantiate [Bootstrap](http://twitter.github.com/bootstrap/#popovers) simple tips.

### Demo / Fancy Docs

[http://anutron.github.com/mootools-bootstrap/#popover](http://anutron.github.com/mootools-bootstrap/#popover)

### Note

Previously this filter was called "BS.Twipsy"; that name still works for backwards compatibility.

### Example

	<a data-behavior="BS.Tooltip" title="A Title"
		data-tooltip-options="
			'location':'left',
			'offset': -10
		">hover for tip</a>

### Options

* content - (*string*) The content of the popup. If not defined, will attempt to read it from the element's `title` property.
* location - (*string*) The location of the tip: `above`, `below`, `left`, or `right`. Defaults to `above`.
* animate - (*boolean*) If true the tip will fade in. Defaults to `true`.
* delayIn - (*number*) The time in milliseconds that the tip should delay from showing. Defaults to `200`.
* delayOut - (*number*) The time in milliseconds that the tip should delay from hiding. Defaults to `0`.
* offset - (*number* or *object*) The offset of the tip. If a number, will be used for the y offset for `top` and `bottom` located tips, x for `left` and `right` located tips. If an object, should contain `.y` and/or `.x` numerical values. Defaults to `10`.
* trigger - (*string*) The event type to attach to the target element to show the tip. Choose from `hover`, `focus`, or `manual`.
* onOverflow - (*boolean*) Only show the tip if the element's content is overflown (i.e. it's scroll-height or scroll-width is greater than the height or width of the element). Defaults to `false`.