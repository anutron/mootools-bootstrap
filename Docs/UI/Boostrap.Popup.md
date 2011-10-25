Class: Bootstrap.Popup {#Bootstrap-Popup}
=============================

Creates a popup dialogue that works with [Bootstrap](http://twitter.github.com/bootstrap/#navigation).

### Implements

- [Options][]
- [Events][]

Bootstrap.Popover Method: constructor
-----------------------------

### Syntax

	new Bootstrap.Popover(element[, options]);

### Arguments

1. element - (*mixed*) A string of the id for an Element or an Element of the popup.
2. options - (*object*, optional) a key/value object of options

### Options

* persist - (*boolean*) When `true` (the default) the popup is not destroyed when it is closed.
* closeOnClickOut - (*boolean*) If `true` (the default) the popup is closed when the user clicks outside of it.
* closeOnEsc - (*boolean*) When `true` (the default) the popup is closed when the user hits escape.
* mask - (*boolean*) When `true` (the default) a mask is placed below the popup element.
* animate - (*boolean*) When `true` (the default) the mask and the window are displayed with a transition effect.

### Events

* show - (*function*) Fired when the popup is displayed.
* hide - (*function*) Fired when the popup is hidden.
* animate - (*function*) Fired when the transition effect is started. Passed as its argument `true` if the popup is being displayed, `false` if being hidden.

### Note

Any element in your content with the class `.close` or `.dismiss` will close the popup. The reason for both is that Bootstrap provides styles for .close elements (the *x* in the upper right corner) that you may not want applied to your element.

By default, the default behavior for the click event on these elements is NOT stopped (so if they are submit buttons or actual links with `href` properties, those actions will occur). Add the class `stopEvent` to have the class call `Event.preventDefault` for you.


Bootstrap.Popup Method: show {#Bootstrap-Popup:show}
------------------------------------------------

Show the dialogue.

### Syntax

	myPopup.show();

### Returns

* (*object*) This [Bootstrap.Popup][] instance.

Bootstrap.Popup Method: hide {#Bootstrap-Popup:hide}
------------------------------------------------

Hide the dialogue.

### Syntax

	myPopup.hide();

### Returns

* (*object*) This [Bootstrap.Popup][] instance.

Bootstrap.Popup Method: destroy {#Bootstrap-Popup:destroy}
------------------------------------------------

Destroys the dialogue element and detaches the event listeners.

### Syntax

	myPopup.destroy();

### Returns

* (*object*) This [Bootstrap.Popup][] instance.

[Options]: http;//mootools.net/core/Class/Class.Extras#Options
[Events]: http;//mootools.net/core/Class/Class.Extras#Events