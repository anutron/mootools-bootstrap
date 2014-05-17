Class: Bootstrap.Popover {#Bootstrap-Popover}
=============================

Creates a large tool tip that works with [Bootstrap](http://twitter.github.com/bootstrap/#navigation).

### Extends

- [Bootstrap.Tooltip][]

Bootstrap.Popover Method: constructor
-----------------------------

### Syntax

	new Bootstrap.Popover(element[, options]);

### Arguments

1. element - (*mixed*) A string of the id for an Element or an Element that is the target of the popover.
2. options - (*object*, optional) a key/value object of options

### Options

* all the options available for [Bootstrap.Tooltip][] plus:
* location - (*string*) same as for [Bootstrap.Tooltip][] except defaults to `right`.
* offset - (*object* or *number*) same as for [Bootstrap.Tooltip][] except defaults to `10`.
* getContent - (*function*) A function that returns the tip *content*. By default, it retrieves the value of the `content` option from the target element.
* getTitle - (*function*) A function that returns the tip *title*. By default, it retrieves the value of the `title` option from the target element.
* content - (*string*) The element property to use for the tip value. Defaults to `data-content`.
* cssClass - (*string*) Optional css class to add to the popup.
* arrowClass - (*string*) Optional css class to add to the popup arrow element.
* closeOnClickOut - (*boolean*) if `true`, hides the tip when the user clicks anywhere that isn't the tip (only useful if you aren't using `hover` for the trigger)

### Events

* see [Bootstrap.Tooltip][]

### Methods

* see [Bootstrap.Tooltip][]

[Bootstrap.Tooltip]: Bootstrap.Tooltip.md