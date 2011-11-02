Behavior Plugin: Behavior.BS.Popup.FormRequest
===================================

If you are using the [Behavior.FormRequest](http://mootools.net/docs/more/Forms/Form.Request) plugin from MooTools More, this plugin for Bootstrap's Popup behavior will allow you to have forms inside of the popup. Note that you should construct your Popup html with the form wrapping both the content and the footer to ensure that your buttons are part of the form.

### Example

	<div data-behavior="BS.Popup" class="modal hide" id="demoPopup">
		<form action="/some/url" data-behavior="FormRequest">
			<div class="modal-header">
				<a href="#" class="close">×</a>
				<h3>Modal Heading</h3>
			</div>
			<div class="modal-body">
				<p>One fine body...</p>
			</div>
			<div class="modal-footer">
				<input class="btn primary dismiss" name="submit" value="OK"/>
				<a href="#" class="btn secondary dismiss">Cancel</a>
			</div>
		</form>
	</div>

### Options

* closeOnSuccess - (*boolean*) if `true` - the default - the popup will close when the form is sent successfully (i.e. the AJAX request does not experience a server side error like a 404 or 500). Note that this will occur also if the user clicks a button that has the CSS class `dimiss`, but it's useful to set anyway if the user submits by hitting enter.