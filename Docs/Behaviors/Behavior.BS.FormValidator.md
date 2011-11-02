Behavior Plugin: Behavior.BS.FormValidator
===================================

If you are using the [FormValidator.Inline](http://mootools.net/docs/more/Forms/Form.Validator.Inline) plugin from MooTools More (and it's corresponding [Behavior.FormValidator](https://github.com/anutron/more-behaviors/blob/master/Docs/Forms/Behavior.FormValidator.md)), this plugin for Bootstrap's Popup behavior will inject the validation feedback using Bootstrap's DOM structure. This assumes you're are using that structure of course. If not it falls back to the default behavior in FormValidator.Inline

### Example

	<form action="/some/url" data-behavior="FormValidator">
		<div class="clearfix">
			<label for="example">
			<div class="input">
				<input type="text" id="example" name="example" data-validators="required"/>
			</div>
		</div>
	</form>

There are no options for this plugin; see [Behavior.FormValidator](https://github.com/anutron/more-behaviors/blob/master/Docs/Forms/Behavior.FormValidator.md).