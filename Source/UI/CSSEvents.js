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
	Browser.Features.cssTransition = (function () {
		var thisBody = document.body || document.documentElement
			, thisStyle = thisBody.style
			, support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
		return support;
	})();

	// set CSS transition event type
	if ( Browser.Features.cssTransition ) {
		Browser.Features.transitionEnd = "TransitionEnd";
		if ( Browser.Engine.webkit ) {
			Browser.Features.transitionEnd = "webkitTransitionEnd";
		} else if ( Browser.Engine.gecko ) {
			Browser.Features.transitionEnd = "transitionend";
		} else if ( Browser.Engine.presto ) {
			Browser.Features.transitionEnd = "oTransitionEnd";
		}
	}
	Browser.Features.getCSSTransition = Function.from(Browser.Features.transitionEnd);
};

window.addEvent("domready", Browser.Features.getCSSTransition);