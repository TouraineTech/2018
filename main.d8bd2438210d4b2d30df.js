!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s="lVK7")}({"162o":function(t,e,n){function i(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new i(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new i(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n("mypn"),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},"1bBo":function(t,e,n){/*! lozad.js - v1.0.2 - 2017-09-10
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2017 Apoorv Saxena; Licensed MIT */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){t.dataset.loaded=!0}var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},n={rootMargin:"0px",threshold:0,load:function(t){t.src=t.dataset.src}},i=function(t){return"true"===t.dataset.loaded},r=function(e){return function(n,i){n.forEach(function(n){n.intersectionRatio>0&&(i.unobserve(n.target),e(n.target),t(n.target))})}};return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".lozad",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e({},n,s),c=a.rootMargin,l=a.threshold,u=a.load,h=void 0;return window.IntersectionObserver&&(h=new IntersectionObserver(r(u),{rootMargin:c,threshold:l})),{observe:function(){var e=[].filter.call(document.querySelectorAll(o),function(t){return!i(t)});if(!h)return void e.forEach(function(e){u(e),t(e)});e.forEach(function(t){h.observe(t)})}}}})},"290O":function(t,e,n){"use strict";function i(){var t=this;a&&clearTimeout(a),a=setTimeout(r,s,t)}function r(t){t.next()}var o=function(t){return t&&t.__esModule?t:{default:t}}(n("l/7M")),s=5e3,a=(new o.default({selector:".news-previews-list",perPage:1,draggable:!0,loop:!0,onInit:i,onChange:i}),null)},B0rZ:function(t,e){var n=document.querySelector("#nav-trigger");n&&document.body.addEventListener("click",function(t){"nav-open"!==t.target.id&&"nav-trigger"!==t.target.id&&(n.checked=!1)})},DuR2:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},Huw6:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function o(t){if(h===clearTimeout)return clearTimeout(t);if((h===i||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){p&&f&&(p=!1,f.length?m=f.concat(m):g=-1,m.length&&a())}function a(){if(!p){var t=r(s);p=!0;for(var e=m.length;e;){for(f=m,m=[];++g<e;)f&&f[g].run();g=-1,e=m.length}f=null,p=!1,o(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,h,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{h="function"==typeof clearTimeout?clearTimeout:i}catch(t){h=i}}();var f,m=[],p=!1,g=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||p||r(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},PeNW:function(t,e,n){"use strict";function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Promise.all(e.map(function(t){return new Promise(function(e,n){var i=s("script");i.src=t,i.async=!0,i.onload=e,i.onerror=n,o.appendChild(i)})}))}Object.defineProperty(e,"__esModule",{value:!0}),e.lazyScripts=i;var r,o=document.head||document.getElementsByTagName("head")[0],s=(r=document).createElement.bind(r)},"XnR/":function(t,e){},j7Il:function(t,e,n){"use strict";function i(){return(0,o.lazyScripts)("https://www.google-analytics.com/analytics.js").then(function(){var t=window.ga;if(!t)return r();t("create","UA-106348061-1","auto"),t("send","pageview")}).catch(r)}function r(){console.warn("google analytics weren't loaded")}Object.defineProperty(e,"__esModule",{value:!0}),e.initializeGA=i;var o=n("PeNW")},jWbN:function(t,e){},ju79:function(t,e,n){(function(e){!function(n){function i(){}function r(t,e){return function(){t.apply(e,arguments)}}function o(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(t,this)}function s(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,o._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?a:c)(e.promise,t._value);var i;try{i=n(t._value)}catch(t){return void c(e.promise,t)}a(e.promise,i)})}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof o)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void h(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&o._immediateFn(function(){t._handled||o._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)s(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function h(t,e){var n=!1;try{t(function(t){n||(n=!0,a(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){var n=new this.constructor(i);return s(this,new u(t,e,n)),n},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function i(o,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){i(o,t)},n)}e[o]=s,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,o=0;o<e.length;o++)i(o,e[o])})},o.resolve=function(t){return t&&"object"==typeof t&&t.constructor===o?t:new o(function(e){e(t)})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){for(var i=0,r=t.length;i<r;i++)t[i].then(e,n)})},o._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},o._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},o._setImmediateFn=function(t){o._immediateFn=t},o._setUnhandledRejectionFn=function(t){o._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=o:n.Promise||(n.Promise=o)}(this)}).call(e,n("162o").setImmediate)},"l/7M":function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(e){var n=this;if(i(this,t),this.config=t.mergeSettings(e),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.startIndex,this.transformProperty=t.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler"].forEach(function(t){n[t]=n[t].bind(n)}),this.init()}return o(t,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null},this.selector.addEventListener("touchstart",this.touchstartHandler,{passive:!0}),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler,{passive:!0}),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.style.cursor="auto",this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler)}},{key:"init",value:function(){this.attachEvents(),this.resolveSlidesNumber(),this.selector.style.overflow="hidden",this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var t=document.createDocumentFragment(),e=0;e<this.innerElements.length;e++){var n=document.createElement("div");n.style.cssFloat="left",n.style.float="left",n.style.width=100/this.innerElements.length+"%",n.appendChild(this.innerElements[e]),t.appendChild(n)}this.sliderFrame.appendChild(t),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent(),this.config.onInit.call(this)}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===r(this.config.perPage)){this.perPage=1;for(var t in this.config.perPage)window.innerWidth>=t&&(this.perPage=this.config.perPage[t])}}},{key:"prev",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments[1];if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;0===this.currentSlide&&this.config.loop?this.currentSlide=this.innerElements.length-this.perPage:this.currentSlide=Math.max(this.currentSlide-t,0),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),e&&e.call(this))}}},{key:"next",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments[1];if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;this.currentSlide===this.innerElements.length-this.perPage&&this.config.loop?this.currentSlide=0:this.currentSlide=Math.min(this.currentSlide+t,this.innerElements.length-this.perPage),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),e&&e.call(this))}}},{key:"goTo",value:function(t,e){if(!(this.innerElements.length<=this.perPage)){var n=this.currentSlide;this.currentSlide=Math.min(Math.max(t,0),this.innerElements.length-this.perPage),n!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),e&&e.call(this))}}},{key:"slideToCurrent",value:function(){this.sliderFrame.style[this.transformProperty]="translate3d(-"+this.currentSlide*(this.selectorWidth/this.perPage)+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var t=this.drag.endX-this.drag.startX,e=Math.abs(t),n=this.config.multipleDrag?Math.ceil(e/(this.selectorWidth/this.perPage)):1;t>0&&e>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(n):t<0&&e>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(n),this.slideToCurrent()}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length-this.perPage),this.slideToCurrent()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null}}},{key:"touchstartHandler",value:function(t){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(t.target.nodeName)||(t.stopPropagation(),this.pointerDown=!0,this.drag.startX=t.touches[0].pageX,this.drag.startY=t.touches[0].pageY)}},{key:"touchendHandler",value:function(t){t.stopPropagation(),this.pointerDown=!1,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(t){t.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-t.touches[0].pageY)<Math.abs(this.drag.startX-t.touches[0].pageX)),this.pointerDown&&this.drag.letItGo&&(t.preventDefault(),this.drag.endX=t.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mousedownHandler",value:function(t){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(t.target.nodeName)||(t.preventDefault(),t.stopPropagation(),this.pointerDown=!0,this.drag.startX=t.pageX)}},{key:"mouseupHandler",value:function(t){t.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(t){t.preventDefault(),this.pointerDown&&(this.drag.endX=t.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+-1*(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))+"px, 0, 0)")}},{key:"mouseleaveHandler",value:function(t){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=t.pageX,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.updateAfterDrag(),this.clearDrag())}},{key:"updateFrame",value:function(){this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var t=document.createDocumentFragment(),e=0;e<this.innerElements.length;e++){var n=document.createElement("div");n.style.cssFloat="left",n.style.float="left",n.style.width=100/this.innerElements.length+"%",n.appendChild(this.innerElements[e]),t.appendChild(n)}this.sliderFrame.appendChild(t),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"remove",value:function(t,e){if(t<0||t>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");t<this.currentSlide&&this.currentSlide--,this.innerElements.splice(t,1),this.updateFrame(),e&&e.call(this)}},{key:"insert",value:function(t,e,n){if(e<0||e>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(t))throw new Error("The same item in a carousel? Really? Nope 😭");var i=e<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=i?this.currentSlide+1:this.currentSlide,this.innerElements.splice(e,0,t),this.updateFrame(),n&&n.call(this)}},{key:"prepend",value:function(t,e){this.insert(t,0),e&&e.call(this)}},{key:"append",value:function(t,e){this.insert(t,this.innerElements.length+1),e&&e.call(this)}},{key:"destroy",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments[1];if(this.detachEvents(),t){for(var n=document.createDocumentFragment(),i=0;i<this.innerElements.length;i++)n.appendChild(this.innerElements[i]);this.selector.innerHTML="",this.selector.appendChild(n),this.selector.removeAttribute("style")}e&&e.call(this)}}],[{key:"mergeSettings",value:function(t){var e={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,onInit:function(){},onChange:function(){}},n=t;for(var i in n)e[i]=n[i];return e}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),t}();e.default=s,t.exports=e.default}])})},lVK7:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}n("jWbN"),n("XnR/");var r=i(n("ju79")),o=n("j7Il");n("p3C9");var s=i(n("1bBo"));n("B0rZ"),n("290O"),window.Promise||(window.Promise=r.default),document.addEventListener("DOMContentLoaded",function(){(0,o.initializeGA)(),(0,s.default)().observe()})},mypn:function(t,e,n){(function(t,e){!function(t,n){"use strict";function i(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var i={callback:t,args:e};return l[c]=i,a(c),c++}function r(t){delete l[t]}function o(t){var e=t.callback,i=t.args;switch(i.length){case 0:e();break;case 1:e(i[0]);break;case 2:e(i[0],i[1]);break;case 3:e(i[0],i[1],i[2]);break;default:e.apply(n,i)}}function s(t){if(u)setTimeout(s,0,t);else{var e=l[t];if(e){u=!0;try{o(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var a,c=1,l={},u=!1,h=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){a=function(t){e.nextTick(function(){s(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&s(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){s(t.data)},a=function(e){t.port2.postMessage(e)}}():h&&"onreadystatechange"in h.createElement("script")?function(){var t=h.documentElement;a=function(e){var n=h.createElement("script");n.onreadystatechange=function(){s(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){a=function(t){setTimeout(s,0,t)}}(),d.setImmediate=i,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n("DuR2"),n("Huw6"))},p3C9:function(t,e){!function(t,e){"use strict";function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||u(),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,i=this.intersectionRect,r=i.width*i.height;this.intersectionRatio=n?r/n:this.isIntersecting?1:0}function i(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=o(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function r(){return t.performance&&performance.now&&performance.now()}function o(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}function s(t,e,n,i){"function"==typeof t.addEventListener?t.addEventListener(e,n,i||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function a(t,e,n,i){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,i||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function c(t,e){var n=Math.max(t.top,e.top),i=Math.min(t.bottom,e.bottom),r=Math.max(t.left,e.left),o=Math.min(t.right,e.right),s=o-r,a=i-n;return s>=0&&a>=0&&{top:n,bottom:i,left:r,right:o,width:s,height:a}}function l(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):u()}function u(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function h(t,e){for(var n=e;n;){if(n==t)return!0;n=d(n)}return!1}function d(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)return void("isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}));var f=[];i.prototype.THROTTLE_TIMEOUT=100,i.prototype.POLL_INTERVAL=null,i.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},i.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},i.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},i.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},i.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},i.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},i.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},i.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,a(t,"resize",this._checkForIntersections,!0),a(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},i.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():u();this._observationTargets.forEach(function(i){var o=i.element,s=l(o),a=this._rootContainsTarget(o),c=i.entry,u=t&&a&&this._computeTargetAndRootIntersection(o,e),h=i.entry=new n({time:r(),target:o,boundingClientRect:s,rootBounds:e,intersectionRect:u});c?t&&a?this._hasCrossedThreshold(c,h)&&this._queuedEntries.push(h):c&&c.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},i.prototype._computeTargetAndRootIntersection=function(n,i){if("none"!=t.getComputedStyle(n).display){for(var r=l(n),o=r,s=d(n),a=!1;!a;){var u=null,h=1==s.nodeType?t.getComputedStyle(s):{};if("none"==h.display)return;if(s==this.root||s==e?(a=!0,u=i):s!=e.body&&s!=e.documentElement&&"visible"!=h.overflow&&(u=l(s)),u&&!(o=c(u,o)))break;s=d(s)}return o}},i.prototype._getRootRect=function(){var t;if(this.root)t=l(this.root);else{var n=e.documentElement,i=e.body;t={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(t)},i.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},i.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,i=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==i)for(var r=0;r<this.thresholds.length;r++){var o=this.thresholds[r];if(o==n||o==i||o<n!=o<i)return!0}},i.prototype._rootIsInDom=function(){return!this.root||h(e,this.root)},i.prototype._rootContainsTarget=function(t){return h(this.root||e,t)},i.prototype._registerInstance=function(){f.indexOf(this)<0&&f.push(this)},i.prototype._unregisterInstance=function(){var t=f.indexOf(this);-1!=t&&f.splice(t,1)},t.IntersectionObserver=i,t.IntersectionObserverEntry=n}(window,document)}});
//# sourceMappingURL=main.d8bd2438210d4b2d30df.js.map