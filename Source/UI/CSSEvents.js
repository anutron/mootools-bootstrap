/*
---
description: CSSEvents

license: MIT-style

requires: [Core/DomReady]

provides: [CSSEvents]
...
*/

window.addEvent('domready', function(){

	Browser.Features.cssTransition = (function () {
		var thisBody = document.body || document.documentElement
			, thisStyle = thisBody.style
			, support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined
		return support
	})()

	// set CSS transition event type
	if ( Browser.Features.cssTransition ) {
		Browser.Features.transitionEnd = "TransitionEnd"
		if ( Browser.Engine.webkit ) {
			Browser.Features.transitionEnd = "webkitTransitionEnd"
		} else if ( Browser.Engine.gecko ) {
			Browser.Features.transitionEnd = "transitionend"
		} else if ( Browser.Engine.presto ) {
			Browser.Features.transitionEnd = "oTransitionEnd"
		}
	}

});