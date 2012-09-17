/*
---

name: Behavior.BS.FormValidator

description: Integrates FormValidator behavior into Bootstrap.

license: MIT-style license.

authors: [Aaron Newton]

requires:
 - More/Fx.Reveal
 - More-Behaviors/Behavior.FormValidator

provides: [Behavior.BS.FormValidator]

...
*/

Behavior.addGlobalPlugin("FormValidator", "BS.FormValidator", {
	setup: function(element, api, instance){
		var original = {
			showError: instance.options.showError,
			hideError: instance.options.hideError
		};
		instance.setOptions({
			showError: function(){},
			hideError: function(){}
		});
		instance.warningPrefix = '';
		instance.errorPrefix = '';
		instance.addEvents({
			showAdvice: function(field, advice, className){
				var cls = field.hasClass('warning') || field.hasClass('warn-' + className) ? 'warn' : 'error',
				    inputParent = field.getParent('.controls'),
				    clearfixParent = inputParent ? inputParent.getParent('.control-group') : null;
				if (!inputParent || !clearfixParent){
					original.showError(advice);
				} else {
					field.addClass(cls);
					var help = inputParent.getElement('div.advice');
					if (!help){
						inputParent.getElements('span.help-inline').setStyle('display', 'none');
						help = new Element('span.help-inline.advice.auto-created', {
							html: (field.hasClass('warning') ? 'Suggestion: ' : '') + advice.get('html')
						}).hide().inject(field, 'after');
					}
					help.set('html', (field.hasClass('warning') ? 'Suggestion: ' : '') + advice.get('html')).reveal();
					help.removeClass('hide');
					help.set('title', advice.get('html'));
					clearfixParent.addClass(cls);
				}
			},
			hideAdvice: function(field, advice, className){
				var cls = field.hasClass('warnOnly') || field.hasClass('warn-' + className) ? 'warn' : 'error',
				    inputParent = field.getParent('.controls'),
				    clearfixParent = inputParent ? inputParent.getParent('.control-group') : null;
				if (!inputParent || !clearfixParent){
					original.hideError(advice);
				} else {
					field.removeClass(cls);
					var help = inputParent.getElement('.advice');
					inputParent.getElements('.help-inline, .help-block').dissolve().getLast().get('reveal').chain(function(){
						if (help.hasClass('auto-created')) help.destroy();
						else help.set('html', '');
					});
					clearfixParent.removeClass(cls);
				}
			}
		});
	}
});