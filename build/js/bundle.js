parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"bLSJ":[function(require,module,exports) {
!function(){"use strict";if("undefined"!=typeof window&&window.addEventListener){var e,t,n,o=Object.create(null),i=function(){clearTimeout(t),t=setTimeout(e,100)},r=function(){},u=function(){var e;window.addEventListener("resize",i,!1),window.addEventListener("orientationchange",i,!1),window.MutationObserver?((e=new MutationObserver(i)).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),r=function(){try{e.disconnect(),window.removeEventListener("resize",i,!1),window.removeEventListener("orientationchange",i,!1)}catch(t){}}):(document.documentElement.addEventListener("DOMSubtreeModified",i,!1),r=function(){document.documentElement.removeEventListener("DOMSubtreeModified",i,!1),window.removeEventListener("resize",i,!1),window.removeEventListener("orientationchange",i,!1)})},s=function(e){function t(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a")).href=e,t.protocol.replace(/:/g,"")+t.host}var n,o,i;return window.XMLHttpRequest&&(n=new XMLHttpRequest,o=t(location),i=t(e),n=void 0===n.withCredentials&&""!==i&&i!==o?XDomainRequest||void 0:XMLHttpRequest),n},d="http://www.w3.org/1999/xlink";e=function(){var e,t,n,i,a,l,c,h,f,m,w=0;function v(){0===(w-=1)&&(r(),u())}function b(e){return function(){!0!==o[e.base]&&(e.useEl.setAttributeNS(d,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function E(e){return function(){var t,n=document.body,o=document.createElement("x");e.onload=null,o.innerHTML=e.responseText,(t=o.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",n.insertBefore(t,n.firstChild)),v()}}function g(e){return function(){e.onerror=null,e.ontimeout=null,v()}}for(r(),f=document.getElementsByTagName("use"),a=0;a<f.length;a+=1){try{t=f[a].getBoundingClientRect()}catch(L){t=!1}e=(h=(i=f[a].getAttribute("href")||f[a].getAttributeNS(d,"href")||f[a].getAttribute("xlink:href"))&&i.split?i.split("#"):["",""])[0],n=h[1],l=t&&0===t.left&&0===t.right&&0===t.top&&0===t.bottom,t&&0===t.width&&0===t.height&&!l?(f[a].hasAttribute("href")&&f[a].setAttributeNS(d,"xlink:href",i),e.length&&(!0!==(m=o[e])&&setTimeout(b({useEl:f[a],base:e,hash:n}),0),void 0===m&&void 0!==(c=s(e))&&(m=new c,o[e]=m,m.onload=E(m),m.onerror=g(m),m.ontimeout=g(m),m.open("GET",e),m.send(),w+=1))):l?e.length&&o[e]&&setTimeout(b({useEl:f[a],base:e,hash:n}),0):void 0===o[e]?o[e]=!0:o[e].onload&&(o[e].abort(),delete o[e].onload,o[e]=!0)}f="",w+=1,v()},n=function(){window.removeEventListener("load",n,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",n,!1):n()}}();
},{}],"tzzM":[function(require,module,exports) {
"use strict";function e(e){var o,r=e.Symbol;return"function"==typeof r?r.observable?o=r.observable:(o=r("observable"),r.observable=o):o="@@observable",o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"eO8H":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3];Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var d,o=t(require("./ponyfill.js"));function t(e){return e&&e.__esModule?e:{default:e}}d="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof module?module:Function("return this")();var u=(0,o.default)(d),n=u;exports.default=n;
},{"./ponyfill.js":"tzzM"}],"ZXTf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.applyMiddleware=w,exports.bindActionCreators=p,exports.combineReducers=f,exports.compose=b,exports.createStore=i,exports.__DO_NOT_USE__ActionTypes=void 0;var e=t(require("symbol-observable"));function t(e){return e&&e.__esModule?e:{default:e}}var r=function(){return Math.random().toString(36).substring(7).split("").join(".")},n={INIT:"@@redux/INIT"+r(),REPLACE:"@@redux/REPLACE"+r(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+r()}};function o(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function i(t,r,u){var c;if("function"==typeof r&&"function"==typeof u||"function"==typeof u&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof r&&void 0===u&&(u=r,r=void 0),void 0!==u){if("function"!=typeof u)throw new Error("Expected the enhancer to be a function.");return u(i)(t,r)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var a=t,s=r,f=[],d=f,p=!1;function l(){d===f&&(d=f.slice())}function h(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function y(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return l(),d.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,l();var r=d.indexOf(e);d.splice(r,1),f=null}}}function b(e){if(!o(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,s=a(s,e)}finally{p=!1}for(var t=f=d,r=0;r<t.length;r++){(0,t[r])()}return e}return b({type:n.INIT}),(c={dispatch:b,subscribe:y,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");a=e,b({type:n.REPLACE})}})[e.default]=function(){var t,r=y;return(t={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(h())}return t(),{unsubscribe:r(t)}}})[e.default]=function(){return this},t},c}function u(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}function c(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function a(e,t,r,i){var u=Object.keys(t),c=r&&r.type===n.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===u.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!o(e))return"The "+c+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following keys: "'+u.join('", "')+'"';var a=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)&&!i[e]});return a.forEach(function(e){i[e]=!0}),r&&r.type===n.REPLACE?void 0:a.length>0?"Unexpected "+(a.length>1?"keys":"key")+' "'+a.join('", "')+'" found in '+c+'. Expected to find one of the known reducer keys instead: "'+u.join('", "')+'". Unexpected keys will be ignored.':void 0}function s(e){Object.keys(e).forEach(function(t){var r=e[t];if(void 0===r(void 0,{type:n.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:n.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+n.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}function f(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"==typeof e[o]&&(r[o]=e[o])}var i,u=Object.keys(r);try{s(r)}catch(a){i=a}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},a=0;a<u.length;a++){var s=u[a],f=r[s],d=e[s],p=f(d,t);if(void 0===p){var l=c(s,t);throw new Error(l)}o[s]=p,n=n||p!==d}return(n=n||u.length!==Object.keys(e).length)?o:e}}function d(e,t){return function(){return t(e.apply(this,arguments))}}function p(e,t){if("function"==typeof e)return d(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var n in e){var o=e[n];"function"==typeof o&&(r[n]=d(o,t))}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function w(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map(function(e){return e(o)});return y({},r,{dispatch:n=b.apply(void 0,i)(r.dispatch)})}}}function v(){}exports.__DO_NOT_USE__ActionTypes=n;
},{"symbol-observable":"eO8H"}],"hgt7":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof e&&e.amd?e(["exports"],r):r(t.reduxLogger=t.reduxLogger||{})}(this,function(e){"use strict";function r(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function c(e,t,r){c.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function u(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function l(e){var t=void 0===e?"undefined":j(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function f(e,t,r,n,s,d,p){p=p||[];var g=(s=s||[]).slice(0);if(void 0!==d){if(n){if("function"==typeof n&&n(g,d))return;if("object"===(void 0===n?"undefined":j(n))){if(n.prefilter&&n.prefilter(g,d))return;if(n.normalize){var h=n.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===l(e)&&"regexp"===l(t)&&(e=e.toString(),t=t.toString());var v=void 0===e?"undefined":j(e),y=void 0===t?"undefined":j(t),b="undefined"!==v||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==y||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new i(g,t));else if(!m&&b)r(new a(g,e));else if(l(e)!==l(t))r(new o(g,e,t));else if("date"===l(e)&&e-t!=0)r(new o(g,e,t));else if("object"===v&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new o(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?r(new c(g,w,new a(void 0,e[w]))):f(e[w],t[w],r,n,g,w,p);for(;w<t.length;)r(new c(g,w,new i(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(o,i){var a=S.indexOf(o);a>=0?(f(e[o],t[o],r,n,g,o,p),S=u(S,a)):f(e[o],void 0,r,n,g,o,p)}),S.forEach(function(e){f(void 0,t[e],r,n,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||r(new o(g,e,t)))}function s(e,t,r,n){return n=n||[],f(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":delete i[n.path[o]];break;case"E":case"N":i[n.path[o]]=n.rhs}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":t=u(t,r);break;case"E":case"N":t[r]=n.rhs}return t}(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e){return"color: "+A[e].color+"; font-weight: bold"}function g(e,t,r,n){var o=s(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=function(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}(e);r.log.apply(r,["%c "+A[t].text,p(t)].concat(k(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function h(e,t,r,n){switch(void 0===e?"undefined":j(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,k(r)):e[n];case"function":return e(t);default:return e}}function v(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?function(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(t):o,a=t.collapsed,c=t.colors,u=t.level,l=t.diff,f=void 0===t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,v=o.action,y=o.prevState,b=o.error,m=o.took,w=o.nextState,S=e[s+1];S&&(w=S.prevState,m=S.started-d);var j=n(v),k="function"==typeof a?a(function(){return w},v,o):a,E=x(p),A=c.title?"color: "+c.title(j)+";":"",D=["color: gray; font-weight: lighter;"];D.push(A),t.timestamp&&D.push("color: gray; font-weight: lighter;"),t.duration&&D.push("color: gray; font-weight: lighter;");var O=i(j,E,m);try{k?c.title&&f?r.groupCollapsed.apply(r,["%c "+O].concat(D)):r.groupCollapsed(O):c.title&&f?r.group.apply(r,["%c "+O].concat(D)):r.group(O)}catch(e){r.log(O)}var N=h(u,j,[y],"prevState"),P=h(u,j,[j],"action"),C=h(u,j,[b,y],"error"),F=h(u,j,[w],"nextState");if(N)if(c.prevState){var L="color: "+c.prevState(y)+"; font-weight: bold";r[N]("%c prev state",L,y)}else r[N]("prev state",y);if(P)if(c.action){var T="color: "+c.action(j)+"; font-weight: bold";r[P]("%c action    ",T,j)}else r[P]("action    ",j);if(b&&C)if(c.error){var M="color: "+c.error(b,y)+"; font-weight: bold;";r[C]("%c error     ",M,b)}else r[C]("error     ",b);if(F)if(c.nextState){var _="color: "+c.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&g(y,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},D,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,c=t.diffPredicate;if(void 0===r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var f={};u.push(f),f.started=S.now(),f.startedTime=new Date,f.prevState=n(r()),f.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){f.error=o(e)}else s=e(l);f.took=S.now()-f.started,f.nextState=n(r());var d=t.diff&&"function"==typeof c?c(r,l):t.diff;if(v(u,Object.assign({},t,{diff:d})),u.length=0,f.error)throw f.error;return s}}}}var b,m,w=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},x=function(e){return w(e.getHours(),2)+":"+w(e.getMinutes(),2)+":"+w(e.getSeconds(),2)+"."+w(e.getMilliseconds(),3)},S="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},E=[];b="object"===(void 0===t?"undefined":j(t))&&t?t:"undefined"!=typeof window?window:{},(m=b.DeepDiff)&&E.push(function(){void 0!==m&&b.DeepDiff===s&&(b.DeepDiff=m,m=void 0)}),r(o,n),r(i,n),r(a,n),r(c,n),Object.defineProperties(s,{diff:{value:s,enumerable:!0},observableDiff:{value:f,enumerable:!0},applyDiff:{value:function(e,t,r){e&&t&&f(e,t,function(n){r&&!r(e,t,n)||d(e,t,n)})},enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:function(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":case"E":i[n.path[o]]=n.lhs;break;case"N":delete i[n.path[o]]}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":case"E":t[r]=n.lhs;break;case"N":t=u(t,r)}return t}(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==m},enumerable:!0},noConflict:{value:function(){return E&&(E.forEach(function(e){e()}),E=null),s},enumerable:!0}});var A={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},D={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?y()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=D,e.createLogger=y,e.logger=O,e.default=O,Object.defineProperty(e,"__esModule",{value:!0})});
},{}],"Bhrx":[function(require,module,exports) {
"use strict";function t(t){return function(e){var r=e.dispatch,n=e.getState;return function(e){return function(u){return"function"==typeof u?u(r,n,t):e(u)}}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t();e.withExtraArgument=t;var r=e;exports.default=r;
},{}],"ttd7":[function(require,module,exports) {
"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function t(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?e(Object(n),!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return i(e)||c(e)||a(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function c(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function i(e){if(Array.isArray(e))return u(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.checkToDo=exports.deleteToDo=exports.addToDo=void 0;var s={todos:[{todo:"Make your first todo",checked:!1}]};if(localStorage.getItem("toedoe2")){var d=JSON.parse(localStorage.getItem("toedoe2"));s.todos=o(d.state)}var p="ADD_TODO",l="DELETE_TODO",f="CHECK_TODO",y=function(e){return{type:p,payload:e}};exports.addToDo=y;var b=function(e){return{type:l,payload:e}};exports.deleteToDo=b;var O=function(e){return{type:f,payload:e}};exports.checkToDo=O;var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,r=arguments.length>1?arguments[1]:void 0,n=r.type,a=r.payload;switch(n){case p:return t(t({},e),{},{todos:[].concat(o(e.todos),[{todo:a,checked:!1}])});case l:var c=o(e.todos);return c.splice(a,1),t(t({},e),{},{todos:o(c)});case f:var i=o(e.todos);return i[a].checked=!i[a].checked,t(t({},e),{},{todos:o(i)});default:return t({},e)}},g=v;exports.default=g;
},{}],"tIDN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("redux"),r=d(require("redux-logger")),t=d(require("redux-thunk")),u=d(require("./todoList"));function d(e){return e&&e.__esModule?e:{default:e}}var a=(0,e.createStore)(u.default,(0,e.applyMiddleware)(r.default,t.default)),l=a;exports.default=l;
},{"redux":"ZXTf","redux-logger":"hgt7","redux-thunk":"Bhrx","./todoList":"ttd7"}],"YBDu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("../redux/store")),t=require("../redux/todoList");function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function n(t){s(this,n),r(this,"saveToPersist",function(){localStorage.setItem("toedoe2",JSON.stringify({state:e.default.getState().todos}))}),this._holder=t,this._formRef=null,this._inputRef=null,this._listRef=null,this.init(),this.render(),this.setupEvents(),e.default.subscribe(this.render.bind(this))}return o(n,[{key:"init",value:function(){this._holder.innerHTML='\n            <h1 class="logo">Toedoe2</h1>\n            <form action="" class="todoApp__form">\n                <input type="text" class="todoApp__form__input todoApp__form__input--error" autofocus placeholder="Enter an activity.." />\n                <button type="submit" class="todoApp__form__button">\n                    <svg class="icon icon-bin">\n                        <use xlink:href="./icons/symbol-defs.svg#icon-plus"></use>\n                    </svg>\n                </button>\n            </form>\n            <div class="todoApp__list-holder">\n                <ul class="todoApp__list">\n                    NO TODO\'S!\n                </ul>\n            </div>\n        ',this._formRef=this._holder.querySelector(".todoApp__form"),this._inputRef=this._formRef.querySelector("input"),this._listRef=this._holder.querySelector(".todoApp__list")}},{key:"setupEvents",value:function(){var n=this;this._formRef.addEventListener("submit",function(s){s.preventDefault(),e.default.dispatch((0,t.addToDo)(n._inputRef.value)),n._inputRef.value=""}),this._listRef.addEventListener("click",function(n){n.target.classList.contains("icn--check")&&e.default.dispatch((0,t.checkToDo)(n.target.parentElement.dataset.index)),n.target.classList.contains("icn--remove")&&e.default.dispatch((0,t.deleteToDo)(n.target.parentElement.dataset.index))})}},{key:"render",value:function(){var t=e.default.getState().todos;t&&(this._listRef.innerHTML=t.map(function(e,t){var n="";return e.checked&&(n="todoApp__list__item--checked"),'\n                <li class="todoApp__list__item '.concat(n,'" data-index="').concat(t,'">\n                    <div class="textwrap"><span class="text">').concat(e.todo,'</span></div>\n                    <span href="#" class="icn icn--remove"><svg class="icon icon-bin">\n                        <use xlink:href="./icons/symbol-defs.svg#icon-bin"></use>\n                    </svg></span>\n                    <span href="#" class="icn icn--check"><svg class="icon icon-checkmark">\n                        <use xlink:href="./icons/symbol-defs.svg#icon-checkmark"></use>\n                    </svg></span>\n                </li> ')}).join("")),this.saveToPersist()}}]),n}(),c=function(e){return new a(e)};exports.default=c;
},{"../redux/store":"tIDN","../redux/todoList":"ttd7"}],"Focm":[function(require,module,exports) {
"use strict";require("./../../icons/svgxuse");var e=o(require("./components/ToDoList"));function o(e){return e&&e.__esModule?e:{default:e}}var r=document.querySelector(".todoApp");(0,e.default)(r);
},{"./../../icons/svgxuse":"bLSJ","./components/ToDoList":"YBDu"}]},{},["Focm"], null)