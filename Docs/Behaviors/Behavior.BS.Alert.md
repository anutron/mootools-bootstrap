Behavior Filter: Behavior.BS.Alert
===================================

Alerts in [Boostrap](http://twitter.github.com/bootstrap/#alerts) have a simple behavior to close them. This filter is here only to set the dependency graph to include Delegator.Nix from [More Behaviors](https://github.com/anutron/more-behaviors).

### Demo / Fancy Docs

[http://anutron.github.com/mootools-bootstrap/#alerts](http://anutron.github.com/mootools-bootstrap/#alerts)

### Example

	<div class="alert-message warning fade in" data-alert="alert">
		<a class="close" href="#" data-trigger="nix" data-nix-options="
			'target': '!div.alert-message'
		">×</a>
		<p><strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.</p>
	</div>
