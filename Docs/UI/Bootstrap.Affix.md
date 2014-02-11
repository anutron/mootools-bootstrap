Class: Bootstrap.Affix {#Bootstrap-Affix}
=============================

Implements the basic functionality of [Bootstrap](http://anutron.github.com/mootools-bootstrap/#tooltip) Affix which adds a class to an element when it is above, in, and below a given scroll range.

### Implements

- [Options][]
- [Events][]

Bootstrap.Affix Method: constructor
-----------------------------

### Syntax

	new Bootstrap.Affix(element[, options]);

### Arguments

1. element - (*mixed*) A string of the id for an Element or an Element that should be changed when the window scrolls.
2. options - (*object*, optional) a key/value object of options

### Options

* top - (*number*) The distance from the top that the user must scroll before the affix class is added and the affix-top class is removed. Defaults to 0.
* bottom - (*number*) The distance from the top that the user must scroll before the affix class is removed and the affix-bottom class is added. Specify a negative number to have it measure from the bottom of the window height.
* classNames - (*object*) The class names to apply in the various states. Defaults to `top: "affix-top", bottom: "affix-bottom", affixed: "affix"`. These should be defined in your CSS as you like. You can also manually affix location for the element using the events listed below.
* monitor - (*element*) The element that is monitored for scrolls; defaults to the `window`.
* persist - (*boolean*) If `true`, the class never leaves the `affixed` state.
* affixAtElement - (*object*) If specified, allows you to define an element that the user scrolls to instead of a fixed offset. See below.

### Events

* pin - (*function*) Fired when the element is below the top and above the bottom (i.e. it is within the scroll boundaries).
* unPin - (*function*) Fired when the element is out of scroll range. If it is below the bottom of the range, this event is passed a boolean `true`.

## Using affixAtElement

The `affixAtElement` option allows you to specify an element or elements that define the boundary for the center class (the `affixed` class). You can specify a different element for the "top" and for the "bottom". If you define only a value for the top then the class uses that element for the bottom as well. Using this functionality you can, for example, have an element that represents the top of the affixed area and another for the bottom or you can use the same element, effectively saying "when this element is visible add this class to my element".

Because the `Affix` class is not limited to only the affixed behavior (you can add any class you like), you could have some element change color when the user scrolls another into view.

### Example:

	var myAffix = new Bootstrap.affix(element, {
		affixAtElement: {
			top: {
				element: document.id('someTarget')
			}
		}
	});

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

Bootstrap.Affix Method: refresh {#Bootstrap-Affix:refresh}
------------------------------------------------

Re-measures the locations of the top/bottom elements in the `affixAtElement` option (if defined);

### Syntax

	myAffix.refresh();

### Returns

* (*object*) This [Bootstrap.Affix][] instance.

### Note

`Bootstrap.Affix` automatically calls refresh whenever the window is resized.

Bootstrap.Affix Method: attach {#Bootstrap-Affix:attach}
------------------------------------------------

Attach scroll listeners (enable the instance).

### Syntax

	myAffix.attach();

### Returns

* (*object*) This Bootstrap.Affix instance.

Bootstrap.Affix Method: detach {#Bootstrap-Affix:detach}
------------------------------------------------

Detaches the scroll listeners (disables the instance).

### Syntax

	myAffix.detach();

### Returns

* (*object*) This Bootstrap.Affix instance.

Bootstrap.Affix Method: pin {#Bootstrap-Affix:pin}
------------------------------------------------

Fires the pin event and adds the pinned-state class.

### Syntax

	myAffix.pin();

### Returns

* (*object*) This Bootstrap.Affix instance.

Bootstrap.Affix Method: unpin {#Bootstrap-Affix:unpin}
------------------------------------------------

Fires the unPin event and adds the unpinned-state class.

### Syntax

	myAffix.unpin([isBottom]);

### Arguments

1. isBottom - (*boolean*) if `true` adds the bottom-state class. Otherwise the top.

### Returns

* (*object*) This Bootstrap.Affix instance.

[Options]: http;//mootools.net/core/Class/Class.Extras#Options
[Events]: http;//mootools.net/core/Class/Class.Extras#Events