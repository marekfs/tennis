module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/tennis/",e(e.s="QfWi")}({"810C":function(t,n,e){"use strict";(function(t){var r=e("QRet");function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,_,i,u=[],c=!0,a=!1;try{if(_=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=_.call(e)).done)&&(u.push(r.value),u.length!==n);c=!0);}catch(t){a=!0,o=t}finally{try{if(!c&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(a)throw o}}return u}}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return _(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}n.a=function(){var n=new Date("2023-03-05T10:00:00.0000-05:00"),e=new Date,_=o(Object(r.b)(n.getTime()-e.getTime()),2),i=_[0],u=_[1],c=o(Object(r.b)(i.days),2),a=c[0],f=c[1],l=o(Object(r.b)(i.hours),2),s=l[0],h=l[1],p=o(Object(r.b)(i.minutes),2),v=p[0],d=p[1],m=o(Object(r.b)(i.seconds),2),b=m[0],y=m[1],x=function(t){y(Math.floor(t%6e4/1e3)),d(Math.floor(t%36e5/6e4)),h(Math.floor(t%36e6/6e4)),f(Math.floor(t/864e5)),u(t-1e3)};return Object(r.a)((function(){x(i)}),[]),Object(r.a)((function(){var t=setInterval((function(){x(i)}),1e3);return function(){return clearInterval(t)}}),[a,s,v,i,b]),t("div",{class:"flex flex-col mx-auto justify-center bg-blue-500 h-screen"},t("div",{class:"column-1"},t("h1",{class:"font-sans text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center"},"Countdown to Tennis Season"),t("h1",{class:"font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center"},"".concat(a,"D ").concat(s,"H ").concat(v,"m").concat(b,"s"))))}}).call(this,e("HteQ").h)},HteQ:function(t,n){t.exports=require("preact")},QRet:function(t,n,e){"use strict";e.d(n,"a",(function(){return b})),e.d(n,"b",(function(){return m}));var r,o,_,i,u=e("HteQ"),c=0,a=[],f=[],l=u.options.__b,s=u.options.__r,h=u.options.diffed,p=u.options.__c,v=u.options.unmount;function d(t,n){u.options.__h&&u.options.__h(o,t,c||n),c=0;var e=o.__H||(o.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({__V:f}),e.__[t]}function m(t){return c=1,function(t,n,e){var _=d(r++,2);if(_.t=t,!_.__c&&(_.__=[e?e(n):S(void 0,n),function(t){var n=_.__N?_.__N[0]:_.__[0],e=_.t(n,t);n!==e&&(_.__N=[e,_.__[1]],_.__c.setState({}))}],_.__c=o,!o.u)){o.u=!0;var i=o.shouldComponentUpdate;o.shouldComponentUpdate=function(t,n,e){if(!_.__c.__H)return!0;var r=_.__c.__H.__.filter((function(t){return t.__c}));if(r.every((function(t){return!t.__N})))return!i||i.call(this,t,n,e);var o=!1;return r.forEach((function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(o=!0)}})),!(!o&&_.__c.props===t)&&(!i||i.call(this,t,n,e))}}return _.__N||_.__}(S,t)}function b(t,n){var e=d(r++,3);!u.options.__s&&O(e.__H,n)&&(e.__=t,e.i=n,o.__H.__h.push(e))}function y(){for(var t;t=a.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(n){t.__H.__h=[],u.options.__e(n,t.__v)}}u.options.__b=function(t){o=null,l&&l(t)},u.options.__r=function(t){s&&s(t),r=0;var n=(o=t.__c).__H;n&&(_===o?(n.__h=[],o.__h=[],n.__.forEach((function(t){t.__N&&(t.__=t.__N),t.__V=f,t.__N=t.i=void 0}))):(n.__h.forEach(g),n.__h.forEach(j),n.__h=[])),_=o},u.options.diffed=function(t){h&&h(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==a.push(n)&&i===u.options.requestAnimationFrame||((i=u.options.requestAnimationFrame)||H)(y)),n.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.__V!==f&&(t.__=t.__V),t.i=void 0,t.__V=f}))),_=o=null},u.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(g),t.__h=t.__h.filter((function(t){return!t.__||j(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],u.options.__e(e,t.__v)}})),p&&p(t,n)},u.options.unmount=function(t){v&&v(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach((function(t){try{g(t)}catch(t){n=t}})),e.__H=void 0,n&&u.options.__e(n,e.__v))};var x="function"==typeof requestAnimationFrame;function H(t){var n,e=function(){clearTimeout(r),x&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);x&&(n=requestAnimationFrame(e))}function g(t){var n=o,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),o=n}function j(t){var n=o;t.__c=t.__(),o=n}function O(t,n){return!t||t.length!==n.length||n.some((function(n,e){return n!==t[e]}))}function S(t,n){return"function"==typeof n?n(t):n}},QfWi:function(t,n,e){"use strict";e.r(n);var r=e("ugae");n.default=r.a},ugae:function(t,n,e){"use strict";(function(t){var r=e("810C");n.a=function(){return t("div",{id:"app"},t(r.a,null))}}).call(this,e("HteQ").h)}});
//# sourceMappingURL=ssr-bundle.js.map