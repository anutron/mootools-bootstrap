Behavior Filter: Behavior.BS.Popup
===================================

A behavior filter to instantiate [Bootstrap](http://twitter.github.com/bootstrap/#popovers) popups.

### Demo / Fancy Docs

[http://anutron.github.com/mootools-bootstrap/#modal](http://anutron.github.com/mootools-bootstrap/#modal)

### Example

	<!-- this button will show the popup below it -->
	<button data-trigger="BS.showPopup" data-bs-showpopup-target="!body #demoPopup"
			class="btn">Launch Modal</button>

	<div data-behavior="BS.Popup" class="modal hide" id="demoPopup">
		<div class="modal-header">
			<a href="#" class="close">×</a>
			<h3>Modal Heading</h3>
		</div>
		<div class="modal-body">
			<p>One fine body...</p>
		</div>
		<div class="modal-footer">
			<a href="#" class="btn primary">Primary</a>
			<a href="#" class="btn secondary">Secondary</a>
		</div>
	</div>

### Options

* persist - (*boolean*) When `true` (the default) the popup is not destroyed when it is closed.
* closeOnClickOut - (*boolean*) If `true` (the default) the popup is closed when the user clicks outside of it.
* closeOnEsc - (*boolean*) When `true` (the default) the popup is closed when the user hits escape.
* mask - (*boolean*) When `true` (the default) a mask is placed below the popup element.
* animate - (*boolean*) When `true` (the default) the mask and the window are displayed with a transition effect.
* hide - (*boolean*) When `true` the popup is not displayed. Use the `BS.showPopup` delegator to show it. Defaults to `false`.
