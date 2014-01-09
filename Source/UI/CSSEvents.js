/*
---

name: CSSEvents

license: MIT-style

authors: [Aaron Newton]

requires: [Core/DomReady]

provides: CSSEvents
...
*/

Browser.Features.getCSSTransition = function(){
	Browser.Features.transitionEnd = (function(){
		var el = document.createElement('tmp');

		var transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd'
		, 'MozTransition'    : 'transitionend'
		, 'OTransition'      : 'oTransitionEnd otransitionend'
		, 'transition'       : 'transitionend'
		};

		for (var name in transEndEventNames) {
			if (el.style[name] !== undefined) {
				return transEndEventNames[name];
			}
		}
	})();
	Browser.Features.cssTransition = !!Browser.Features.transitionEnd;

	Browser.Features.getCSSTransition = Function.from(Browser.Features.transitionEnd);
	return Browser.Features.transitionEnd;
};

window.addEvent("domready", Browser.Features.getCSSTransition);