/*
---

name: Behavior.BS.FormValidator

description: Integrates FormValidator behavior into Bootstrap.

license: MIT-style license.

authors: [Aaron Newton]

requires:
 - More-Behaviors/Behavior.FormValidator

provides: [Behavior.BS.FormValidator]

...
*/

Behavior.addGlobalPlugin("FormValidator", "BS.FormValidator", {
	setup: function(element, api, instance){
		var original = {
			showError: instance.showError,
			hideError: instance.hideError
		};
		instance.setOptions({
			showError: function(){},
			hideError: function(){}
		});
		instance.warningPrefix = '';
		instance.errorPrefix = '';
		instance.addEvents({
			showAdvice: function(field, advice, className){
				var inputParent = field.getParent('.input'),
				    clearfixParent = inputParent.getParent('.clearfix');
				if (!inputParent || !clearfixParent){
					original.showError(advice);
				} else {
					field.addClass('error');
					var help = inputParent.getElement('div.show-advice');
					if (!help){
						help = new Element('span.help-inline', {
							html: advice.get('html')
						}).inject(inputParent);
					}
					help.removeClass('hide');
					help.set('title', advice.get('html'));
					clearfixParent.addClass('error');
				}
			},
			hideAdvice: function(field, advice, className){
				var inputParent = field.getParent('.input'),
				    clearfixParent = inputParent.getParent('.clearfix');
				if (!inputParent || !clearfixParent){
					original.hideError(advice);
				} else {
					field.removeClass('error');
					inputParent.getElement('div.help-inline').addClass('hide');
					clearfixParent.removeClass('error');
				}
			}
		});
	}
});