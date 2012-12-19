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

(function(){

	var getFieldDetails = function(field, advice, className){
		var cls = field.hasClass('warning') || field.hasClass('warn-' + className) ? 'warn' : 'error',
		    inputParent = field.getParent('.controls, .control-group');
		var clearfixParent;
		if (inputParent){
			if (inputParent.hasClass('control-group')) clearfixParent = inputParent;
			else clearfixParent = inputParent.getParent('.control-group');
		}

		return {
			cls: cls,
			inputParent: inputParent,
			clearfixParent: clearfixParent
		}
	};

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
			instance.errorPrefix = '';
			instance.addEvents({
				showAdvice: function(field, advice, className){
					var fieldDetails = getFieldDetails(field, advice, className);
					if (!fieldDetails.inputParent || !fieldDetails.clearfixParent){
						original.showError(advice);
					} else {
						field.addClass(fieldDetails.cls);
						var help = fieldDetails.inputParent.getElement('div.advice');
						if (!help){
							fieldDetails.inputParent.getElements('span.help-inline').setStyle('display', 'none');
							var closestParent = field.getParent();
							help = new Element('span.help-inline.advice.auto-created', {
								html: (field.hasClass('warning') ? 'Suggestion: ' : '') + advice.get('html')
							}).hide().inject(closestParent.hasClass('input-append') ? closestParent  : field, 'after');
						}
						help.set('html', (field.hasClass('warning') ? 'Suggestion: ' : '') + advice.get('html')).reveal();
						help.removeClass('hide');
						help.set('title', advice.get('html'));
						fieldDetails.clearfixParent.addClass(fieldDetails.cls);
					}
				},
				hideAdvice: function(field, advice, className){
					var fieldDetails = getFieldDetails(field, advice, className);
					if (!fieldDetails.inputParent || !fieldDetails.clearfixParent){
						original.hideError(advice);
					} else {
						field.removeClass(fieldDetails.cls);
						var help = fieldDetails.inputParent.getElement('.advice');
						fieldDetails.inputParent.getElements('.help-inline, .help-block').dissolve().getLast().get('reveal').chain(function(){
							if (help.hasClass('auto-created')) help.destroy();
							else help.set('html', '');
						});
						fieldDetails.clearfixParent.removeClass(fieldDetails.cls);
					}
				}
			});
		}
	});

})();
