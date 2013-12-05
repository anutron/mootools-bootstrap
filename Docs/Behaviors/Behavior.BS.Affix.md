Behavior Filter: Behavior.BS.Affix
===================================

A behavior filter to instantiate [Bootstrap](http://twitter.github.com/bootstrap/#affix) Affix functionality.

### Demo / Fancy Docs

[http://anutron.github.com/mootools-bootstrap/#affix](http://anutron.github.com/mootools-bootstrap/#affix)


### Example

	<a data-behavior="BS.Affix"
		data-affix-options="
			'top': 10
		">I stick around!</a>

### Options

* top - (*number*) The distance from the top that the user must scroll before the affix class is added and the affix-top class is removed. Defaults to 0.
* bottom - (*number*) The distance from the top that the user must scroll before the affix class is removed and the affix-bottom class is added. Specify a negative number to have it measure from the bottom of the window height.
* classNames - (*object*) The class names to apply in the various states. Defaults to `top: "affix-top", bottom: "affix-bottom", affixed: "affix"`. These should be defined in your CSS as you like. You can also manually affix location for the element using the events listed below.
* monitor - (*element*) The element that is monitored for scrolls; defaults to the `window`.
