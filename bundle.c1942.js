!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(e){return t[e]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/tennis/",e(e.s="mdyV")}({"810C":function(t,e,n){"use strict";(function(t){function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,_,i,l=[],u=!0,c=!1;try{if(_=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=_.call(n)).done)&&(l.push(o.value),l.length!==e);u=!0);}catch(t){c=!0,r=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw r}}return l}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var _=n("QRet");e.a=function(){var e=new Date("2023-03-05T10:00:00.0000-05:00"),n=new Date,r=o(Object(_.b)(e.getTime()-n.getTime()),2),i=r[0],l=r[1],u=o(Object(_.b)(i.days),2),c=u[0],a=u[1],s=o(Object(_.b)(i.hours),2),f=s[0],h=s[1],d=o(Object(_.b)(i.minutes),2),p=d[0],v=d[1],y=o(Object(_.b)(i.seconds),2),m=y[0],b=y[1],g=function(t){b((t%6e4/1e3).toFixed(0)),v(Math.floor(t/6e4)%60),h(Math.floor(t/36e5)%24),a(Math.floor(t/864e5)),l(t-1e3)};return Object(_.a)((function(){g(i)}),[]),Object(_.a)((function(){var t=setInterval((function(){g(i)}),1e3);return function(){return clearInterval(t)}}),[c,f,p,i,m]),t("h1",{class:"font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center"},"".concat(c,"D ").concat(f,"H ").concat(p,"m ").concat(m,"s"))}}).call(this,n("hosL").h)},Fhz1:function(t,e){"use strict";e.a=[{text:'"Nobody beats Vitas Gerulaitis 17 times in a row."',author:"Vitas Gerulaitis"},{text:'"The depressing thing about tennis is that no matter how good I get, I\'ll never be as good as a wall."',author:"Mitch Hedberg"},{text:'"Whoever said, "It\'s not whether you win or lose that counts," probably lost."',author:"Martina Navratilova"},{text:'"Though your game is hardly the best, you can fray your opponent\'s nerves by methodically bouncing the ball at least ten times before your serves."',author:"Arnold J. Zarett"},{text:'"Tennis: a racquet sport in which two players compete to see who has the shortest temper, the worst memory, the poorest eyesight, and the slowest watch."',author:"Anonymous"},{text:'"In tennis, the addict moves about a hard rectangle and seeks to ambush a fuzzy ball with a modified snow-shoe."',author:"Elliot Chaze"},{text:'"Tennis?"',author:"Marek Siekierski"},{text:'"You can call me Uncle Tennis."',author:"Josh Howald"},{text:'"Tennis is an addiction that once it has truly hooked a man will not let him go."',author:"Russell Lynes"},{text:'"No one is more serious about his game than a weekend tennis player."',author:"Jimmy Cannon"},{text:'"I play Cinderella tennis. That is I don\'t quite get to the ball."',author:"Larry Adler"},{text:'"If you see a tennis player as if he is working hard, that means he isn\'t very good."',author:"Helen Wills Moody"}]},LqRQ:function(t,e,n){"use strict";(function(t){var o=n("Fhz1"),r=o.a[Math.floor(Math.random()*o.a.length)];e.a=function(){return t("div",{class:"pt-10"},t("h1",{class:"font-sans font-extralight text-xl md:text-2xl lg:text-3xl text-yellow-200 text-center"},r.text),t("h1",{class:"font-sans font-extralight text-xl md:text-2xl lg:text-3xl text-yellow-200 pt-2 text-center"},"- ".concat(r.author)))}}).call(this,n("hosL").h)},QRet:function(t,e,n){"use strict";function o(t,e){v.options.__h&&v.options.__h(h,t,y||e),y=0;var n=h.__H||(h.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:b}),n.__[t]}function r(t){return y=1,function(t,e,n){var r=o(f++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):s(void 0,e),function(t){var e=r.__N?r.__N[0]:r.__[0],n=r.t(e,t);e!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=h,!h.u)){h.u=!0;var _=h.shouldComponentUpdate;h.shouldComponentUpdate=function(t,e,n){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(t){return t.__c}));if(o.every((function(t){return!t.__N})))return!_||_.call(this,t,e,n);var i=!1;return o.forEach((function(t){if(t.__N){var e=t.__[0];t.__=t.__N,t.__N=void 0,e!==t.__[0]&&(i=!0)}})),!(!i&&r.__c.props===t)&&(!_||_.call(this,t,e,n))}}return r.__N||r.__}(s,t)}function _(t,e){var n=o(f++,3);!v.options.__s&&a(n.__H,e)&&(n.__=t,n.i=e,h.__H.__h.push(n))}function i(){for(var t;t=m.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(u),t.__H.__h.forEach(c),t.__H.__h=[]}catch(e){t.__H.__h=[],v.options.__e(e,t.__v)}}function l(t){var e,n=function(){clearTimeout(o),S&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);S&&(e=requestAnimationFrame(n))}function u(t){var e=h,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),h=e}function c(t){var e=h;t.__c=t.__(),h=e}function a(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function s(t,e){return"function"==typeof e?e(t):e}n.d(e,"a",(function(){return _})),n.d(e,"b",(function(){return r}));var f,h,d,p,v=n("hosL"),y=0,m=[],b=[],g=v.options.__b,x=v.options.__r,k=v.options.diffed,w=v.options.__c,C=v.options.unmount;v.options.__b=function(t){h=null,g&&g(t)},v.options.__r=function(t){x&&x(t),f=0;var e=(h=t.__c).__H;e&&(d===h?(e.__h=[],h.__h=[],e.__.forEach((function(t){t.__N&&(t.__=t.__N),t.__V=b,t.__N=t.i=void 0}))):(e.__h.forEach(u),e.__h.forEach(c),e.__h=[])),d=h},v.options.diffed=function(t){k&&k(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==m.push(e)&&p===v.options.requestAnimationFrame||((p=v.options.requestAnimationFrame)||l)(i)),e.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.__V!==b&&(t.__=t.__V),t.i=void 0,t.__V=b}))),d=h=null},v.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(u),t.__h=t.__h.filter((function(t){return!t.__||c(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],v.options.__e(n,t.__v)}})),w&&w(t,e)},v.options.unmount=function(t){C&&C(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{u(t)}catch(t){e=t}})),n.__H=void 0,e&&v.options.__e(e,n.__v))};var S="function"==typeof requestAnimationFrame},QfWi:function(t,e,n){"use strict";n.r(e);var o=n("ugae");e.default=o.a},hosL:function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t){var e=t.parentNode;e&&e.removeChild(t)}function _(t,e,n){var o,r,_,l={};for(_ in e)"key"==_?o=e[_]:"ref"==_?r=e[_]:l[_]=e[_];if(arguments.length>2&&(l.children=arguments.length>3?O.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(_ in t.defaultProps)void 0===l[_]&&(l[_]=t.defaultProps[_]);return i(t,l,o,r,null)}function i(t,e,n,o,r){var _={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++L:r};return null==r&&null!=j.vnode&&j.vnode(_),_}function l(){return{current:null}}function u(t){return t.children}function c(t,e){this.props=t,this.context=e}function a(t,e){if(null==e)return t.__?a(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?a(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function f(t){(!t.__d&&(t.__d=!0)&&I.push(t)&&!h.__r++||D!==j.debounceRendering)&&((D=j.debounceRendering)||setTimeout)(h)}function h(){for(var t;h.__r=I.length;)t=I.sort((function(t,e){return t.__v.__b-e.__v.__b})),I=[],t.some((function(t){var e,n,r,_,i,l;t.__d&&(i=(_=(e=t).__v).__e,(l=e.__P)&&(n=[],(r=o({},_)).__v=_.__v+1,k(l,_,r,e.__n,void 0!==l.ownerSVGElement,null!=_.__h?[i]:null,n,null==i?a(_):i,_.__h),w(n,_),_.__e!=i&&s(_)))}))}function d(t,e,n,o,r,_,l,c,s,f){var h,d,v,m,b,g,x,w=o&&o.__k||F,C=w.length;for(n.__k=[],h=0;h<e.length;h++)if(null!=(m=n.__k[h]=null==(m=e[h])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?i(null,m,null,null,m):Array.isArray(m)?i(u,{children:m},null,null,null):m.__b>0?i(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=w[h])||v&&m.key==v.key&&m.type===v.type)w[h]=void 0;else for(d=0;d<C;d++){if((v=w[d])&&m.key==v.key&&m.type===v.type){w[d]=void 0;break}v=null}k(t,m,v=v||W,r,_,l,c,s,f),b=m.__e,(d=m.ref)&&v.ref!=d&&(x||(x=[]),v.ref&&x.push(v.ref,null,m),x.push(d,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&m.__k===v.__k?m.__d=s=p(m,s,t):s=y(t,m,v,w,b,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=t&&(s=a(v))}for(n.__e=g,h=C;h--;)null!=w[h]&&T(w[h],w[h]);if(x)for(h=0;h<x.length;h++)S(x[h],x[++h],x[++h])}function p(t,e,n){for(var o,r=t.__k,_=0;r&&_<r.length;_++)(o=r[_])&&(o.__=t,e="function"==typeof o.type?p(o,e,n):y(n,o,o,r,o.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function y(t,e,n,o,r,_){var i,l,u;if(void 0!==e.__d)i=e.__d,e.__d=void 0;else if(null==n||r!=_||null==r.parentNode)t:if(null==_||_.parentNode!==t)t.appendChild(r),i=null;else{for(l=_,u=0;(l=l.nextSibling)&&u<o.length;u+=1)if(l==r)break t;t.insertBefore(r,_),i=_}return void 0!==i?i:r.nextSibling}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||R.test(e)?n:n+"px"}function b(t,e,n,o,r){var _;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof o&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||m(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||m(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])_=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?o||t.addEventListener(e,_?x:g,_):t.removeEventListener(e,_?x:g,_);else if("dangerouslySetInnerHTML"!==e){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null==n||!1===n&&-1==e.indexOf("-")?t.removeAttribute(e):t.setAttribute(e,n))}}function g(t){this.l[t.type+!1](j.event?j.event(t):t)}function x(t){this.l[t.type+!0](j.event?j.event(t):t)}function k(t,e,n,r,_,i,l,a,s){var f,h,p,v,y,m,b,g,x,k,w,S,T,H,E,N=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(s=n.__h,a=e.__e=n.__e,e.__h=null,i=[a]),(f=j.__b)&&f(e);try{t:if("function"==typeof N){if(g=e.props,x=(f=N.contextType)&&r[f.__c],k=f?x?x.props.value:f.__:r,n.__c?b=(h=e.__c=n.__c).__=h.__E:("prototype"in N&&N.prototype.render?e.__c=h=new N(g,k):(e.__c=h=new c(g,k),h.constructor=N,h.render=A),x&&x.sub(h),h.props=g,h.state||(h.state={}),h.context=k,h.__n=r,p=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=N.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=o({},h.__s)),o(h.__s,N.getDerivedStateFromProps(g,h.__s))),v=h.props,y=h.state,p)null==N.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==N.getDerivedStateFromProps&&g!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,k),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,k)||e.__v===n.__v){for(h.props=g,h.state=h.__s,e.__v!==n.__v&&(h.__d=!1),h.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),w=0;w<h._sb.length;w++)h.__h.push(h._sb[w]);h._sb=[],h.__h.length&&l.push(h);break t}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,k),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(v,y,m)}))}if(h.context=k,h.props=g,h.__v=e,h.__P=t,S=j.__r,T=0,"prototype"in N&&N.prototype.render){for(h.state=h.__s,h.__d=!1,S&&S(e),f=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,S&&S(e),f=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++T<25);h.state=h.__s,null!=h.getChildContext&&(r=o(o({},r),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(m=h.getSnapshotBeforeUpdate(v,y)),E=null!=f&&f.type===u&&null==f.key?f.props.children:f,d(t,Array.isArray(E)?E:[E],e,n,r,_,i,l,a,s),h.base=e.__e,e.__h=null,h.__h.length&&l.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==i&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=C(n.__e,e,n,r,_,i,l,s);(f=j.diffed)&&f(e)}catch(t){e.__v=null,(s||null!=i)&&(e.__e=a,e.__h=!!s,i[i.indexOf(a)]=null),j.__e(t,e,n)}}function w(t,e){j.__c&&j.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){j.__e(t,e.__v)}}))}function C(t,e,n,o,_,i,l,u){var c,s,f,h=n.props,p=e.props,v=e.type,y=0;if("svg"===v&&(_=!0),null!=i)for(;y<i.length;y++)if((c=i[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){t=c,i[y]=null;break}if(null==t){if(null===v)return document.createTextNode(p);t=_?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,p.is&&p),i=null,u=!1}if(null===v)h===p||u&&t.data===p||(t.data=p);else{if(i=i&&O.call(t.childNodes),s=(h=n.props||W).dangerouslySetInnerHTML,f=p.dangerouslySetInnerHTML,!u){if(null!=i)for(h={},y=0;y<t.attributes.length;y++)h[t.attributes[y].name]=t.attributes[y].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(t,e,n,o,r){var _;for(_ in n)"children"===_||"key"===_||_ in e||b(t,_,null,n[_],o);for(_ in e)r&&"function"!=typeof e[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===e[_]||b(t,_,e[_],n[_],o)}(t,p,h,_,u),f)e.__k=[];else if(y=e.props.children,d(t,Array.isArray(y)?y:[y],e,n,o,_&&"foreignObject"!==v,i,l,i?i[0]:n.__k&&a(n,0),u),null!=i)for(y=i.length;y--;)null!=i[y]&&r(i[y]);u||("value"in p&&void 0!==(y=p.value)&&(y!==t.value||"progress"===v&&!y||"option"===v&&y!==h.value)&&b(t,"value",y,h.value,!1),"checked"in p&&void 0!==(y=p.checked)&&y!==t.checked&&b(t,"checked",y,h.checked,!1))}return t}function S(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){j.__e(t,n)}}function T(t,e,n){var o,_;if(j.unmount&&j.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||S(o,null,e)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){j.__e(t,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(_=0;_<o.length;_++)o[_]&&T(o[_],e,n||"function"!=typeof t.type);n||null==t.__e||r(t.__e),t.__=t.__e=t.__d=void 0}function A(t,e,n){return this.constructor(t,n)}function H(t,e,n){var o,r,i;j.__&&j.__(t,e),r=(o="function"==typeof n)?null:n&&n.__k||e.__k,i=[],k(e,t=(!o&&n||e).__k=_(u,null,[t]),r||W,W,void 0!==e.ownerSVGElement,!o&&n?[n]:r?null:e.firstChild?O.call(e.childNodes):null,i,!o&&n?n:r?r.__e:e.firstChild,o),w(i,t)}function E(t,e){H(t,e,E)}function N(t,e,n){var r,_,l,u=o({},t.props);for(l in e)"key"==l?r=e[l]:"ref"==l?_=e[l]:u[l]=e[l];return arguments.length>2&&(u.children=arguments.length>3?O.call(arguments,2):n),i(t.type,u,r||t.key,_||t.ref,null)}function M(t,e){var n={__c:e="__cC"+U++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,o;return this.getChildContext||(n=[],(o={})[e]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(f)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"Component",(function(){return c})),n.d(e,"Fragment",(function(){return u})),n.d(e,"cloneElement",(function(){return N})),n.d(e,"createContext",(function(){return M})),n.d(e,"createElement",(function(){return _})),n.d(e,"createRef",(function(){return l})),n.d(e,"h",(function(){return _})),n.d(e,"hydrate",(function(){return E})),n.d(e,"isValidElement",(function(){return P})),n.d(e,"options",(function(){return j})),n.d(e,"render",(function(){return H})),n.d(e,"toChildArray",(function(){return v}));var O,j,L,P,I,D,U,W={},F=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;O=F.slice,j={__e:function(t,e,n,o){for(var r,_,i;e=e.__;)if((r=e.__c)&&!r.__)try{if((_=r.constructor)&&null!=_.getDerivedStateFromError&&(r.setState(_.getDerivedStateFromError(t)),i=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(t,o||{}),i=r.__d),i)return r.__E=r}catch(e){t=e}throw t}},L=0,P=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof t&&(t=t(o({},n),this.props)),t&&o(n,t),null!=t&&this.__v&&(e&&this._sb.push(e),f(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),f(this))},c.prototype.render=u,I=[],h.__r=0,U=0},mdyV:function(t,e,n){"use strict";n.r(e);var o=n("hosL"),r=o.h,_=o.render,i=o.hydrate,l=function(t){return t&&t.default?t.default:t},u=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(u(n.p)+"sw.js"),"function"==typeof l(n("QfWi"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=l(n("QfWi")),e={},o=document.querySelector('[type="__PREACT_CLI_DATA__"]');o&&(e=JSON.parse(decodeURI(o.innerHTML)).preRenderData||e);var a={preRenderData:e},s=e.url?u(e.url):"";(i&&s===u(location.pathname)?i:_)(r(t,{CLI_DATA:a}),document.body,c)}()}},ugae:function(t,e,n){"use strict";(function(t){var o=n("810C"),r=n("LqRQ");e.a=function(){return t("div",{id:"app"},t("div",{class:"flex flex-col mx-auto justify-center bg-blue-500 h-screen px-5"},t("div",{class:"column-1"},t("h1",{class:"font-sans font-bold italic text-3xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center"},"Countdown to Tennis Season"),t(o.a,null),t(r.a,null))))}}).call(this,n("hosL").h)}});
//# sourceMappingURL=bundle.c1942.js.map