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

### Events

* pin - (*function*) Fired when the element is below the top and above the bottom (i.e. it is within the scroll boundaries).
* unPin - (*function*) Fired when the element is out of scroll range. If it is below the bottom of the range, this event is passed a boolean `true`.

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