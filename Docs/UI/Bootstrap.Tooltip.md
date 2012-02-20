Class: Bootstrap.Tooltip {#Bootstrap-Tooltip}
=============================

Creates a simple tool tip that works with [Bootstrap](http://anutron.github.com/mootools-bootstrap/#tooltip).

### Implements

- [Options][]
- [Events][]

### Note

Previously this Class was called "Bootstrap.Twipsy"; that name still works for backwards compatibility.

Bootstrap.Tooltip Method: constructor
-----------------------------

### Syntax

	new Bootstrap.Tooltip(element[, options]);

### Arguments

1. element - (*mixed*) A string of the id for an Element or an Element that is the target of the tip.
2. options - (*object*, optional) a key/value object of options

### Options

* location - (*string*) The location of the tip: `above`, `below`, `left`, or `right`. Defaults to `above`.
* animate - (*boolean*) If true the tip will fade in. Defaults to `true`.
* delayIn - (*number*) The time in milliseconds that the tip should delay from showing. Defaults to `200`.
* delayOut - (*number*) The time in milliseconds that the tip should delay from hiding. Defaults to `0`.
* fallback - (*string*) The tip value if no `title` value is set on the target element.
* override - (*string*) The tip value used instead of the `title` value of the target element.
* offset - (*number* or *object*) The offset of the tip. If a number, will be used for the y offset for `top` and `bottom` located tips, x for `left` and `right` located tips. If an object, should contain `.y` and/or `.x` numerical values. Defaults to `0`.
* title - (*string*) The element property to use for the tip value. Defaults to `title`.
* trigger - (*string*) The event type to attach to the target element to show the tip. Choose from `hover`, `focus`, or `manual`.
* onOverflow - (*boolean*) Only show the tip if the element's content is overflown (i.e. it's scroll-height or scroll-width is greater than the height or width of the element). Defaults to `false`.
* getContent - (*function*) A function that returns the tip value. By default, it retrieves the value of the `title` option from the target element.

### Events

* show - (*function*) The function to apply when the tip element is displayed. Passed the element that is displayed. Note that if a CSS transition is used this is fired when that transition *starts*.
* hide - (*function*) The function to apply when the tip element is hidden. Passed the element that is displayed. Note that if a CSS transition is used this is fired when that transition *starts*.
* complete -  (*function*) The function to apply after the CSS transition. Passed `true` as its argument if the tip is visible, `false` if hidden.

Bootstrap.Tooltip Method: show {#Bootstrap-Tooltip:show}
------------------------------------------------

Show the tip.

### Syntax

	myTip.show();

### Returns

* (*object*) This [Bootstrap.Tooltip][] instance.

Bootstrap.Tooltip Method: hide {#Bootstrap-Tooltip:hide}
------------------------------------------------

Hide the tip.

### Syntax

	myTip.hide();

### Returns

* (*object*) This [Bootstrap.Tooltip][] instance.

Bootstrap.Tooltip Method: destroy {#Bootstrap-Tooltip:destroy}
------------------------------------------------

Destroys the tip element and detaches the event listeners.

### Syntax

	myTip.destroy();

### Returns

* (*object*) This [Bootstrap.Tooltip][] instance.

[Bootstrap.Tooltip]: #Bootstrap-Tooltip
[Options]: http;//mootools.net/core/Class/Class.Extras#Options
[Events]: http;//mootools.net/core/Class/Class.Extras#Events