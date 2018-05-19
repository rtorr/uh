!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=1)}([function(e,t,r){"use strict";function n(){}function o(e){try{return e.then}catch(e){return m=e,v}}function i(e,t){try{return e(t)}catch(e){return m=e,v}}function a(e,t,r){try{e(t,r)}catch(e){return m=e,v}}function s(e){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof e)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,e!==n&&y(e,this)}function u(e,t,r){return new e.constructor(function(o,i){var a=new s(n);a.then(o,i),c(e,new p(t,r,a))})}function c(e,t){for(;3===e._83;)e=e._18;if(s._47&&s._47(e),0===e._83)return 0===e._75?(e._75=1,void(e._38=t)):1===e._75?(e._75=2,void(e._38=[e._38,t])):void e._38.push(t);f(e,t)}function f(e,t){b(function(){var r=1===e._83?t.onFulfilled:t.onRejected;if(null===r)return void(1===e._83?l(t.promise,e._18):h(t.promise,e._18));var n=i(r,e._18);n===v?h(t.promise,m):l(t.promise,n)})}function l(e,t){if(t===e)return h(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"===typeof t||"function"===typeof t)){var r=o(t);if(r===v)return h(e,m);if(r===e.then&&t instanceof s)return e._83=3,e._18=t,void d(e);if("function"===typeof r)return void y(r.bind(t),e)}e._83=1,e._18=t,d(e)}function h(e,t){e._83=2,e._18=t,s._71&&s._71(e,t),d(e)}function d(e){if(1===e._75&&(c(e,e._38),e._38=null),2===e._75){for(var t=0;t<e._38.length;t++)c(e,e._38[t]);e._38=null}}function p(e,t,r){this.onFulfilled="function"===typeof e?e:null,this.onRejected="function"===typeof t?t:null,this.promise=r}function y(e,t){var r=!1,n=a(e,function(e){r||(r=!0,l(t,e))},function(e){r||(r=!0,h(t,e))});r||n!==v||(r=!0,h(t,m))}var b=r(4),m=null,v={};e.exports=s,s._47=null,s._71=null,s._44=n,s.prototype.then=function(e,t){if(this.constructor!==s)return u(this,e,t);var r=new s(n);return c(this,new p(e,t,r)),r}},function(e,t,r){r(2),e.exports=r(9)},function(e,t,r){"use strict";"undefined"===typeof Promise&&(r(3).enable(),window.Promise=r(6)),r(7),Object.assign=r(8)},function(e,t,r){"use strict";function n(){c=!1,s._47=null,s._71=null}function o(e){function t(t){(e.allRejections||a(l[t].error,e.whitelist||u))&&(l[t].displayId=f++,e.onUnhandled?(l[t].logged=!0,e.onUnhandled(l[t].displayId,l[t].error)):(l[t].logged=!0,i(l[t].displayId,l[t].error)))}function r(t){l[t].logged&&(e.onHandled?e.onHandled(l[t].displayId,l[t].error):l[t].onUnhandled||(console.warn("Promise Rejection Handled (id: "+l[t].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+l[t].displayId+".")))}e=e||{},c&&n(),c=!0;var o=0,f=0,l={};s._47=function(e){2===e._83&&l[e._56]&&(l[e._56].logged?r(e._56):clearTimeout(l[e._56].timeout),delete l[e._56])},s._71=function(e,r){0===e._75&&(e._56=o++,l[e._56]={displayId:null,error:r,timeout:setTimeout(t.bind(null,e._56),a(r,u)?100:2e3),logged:!1})}}function i(e,t){console.warn("Possible Unhandled Promise Rejection (id: "+e+"):"),((t&&(t.stack||t))+"").split("\n").forEach(function(e){console.warn("  "+e)})}function a(e,t){return t.some(function(t){return e instanceof t})}var s=r(0),u=[ReferenceError,TypeError,RangeError],c=!1;t.disable=n,t.enable=o},function(e,t,r){"use strict";(function(t){function r(e){a.length||(i(),s=!0),a[a.length]=e}function n(){for(;u<a.length;){var e=u;if(u+=1,a[e].call(),u>c){for(var t=0,r=a.length-u;t<r;t++)a[t]=a[t+u];a.length-=u,u=0}}a.length=0,u=0,s=!1}function o(e){return function(){function t(){clearTimeout(r),clearInterval(n),e()}var r=setTimeout(t,0),n=setInterval(t,50)}}e.exports=r;var i,a=[],s=!1,u=0,c=1024,f="undefined"!==typeof t?t:self,l=f.MutationObserver||f.WebKitMutationObserver;i="function"===typeof l?function(e){var t=1,r=new l(e),n=document.createTextNode("");return r.observe(n,{characterData:!0}),function(){t=-t,n.data=t}}(n):o(n),r.requestFlush=i,r.makeRequestCallFromTimer=o}).call(t,r(5))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";function n(e){var t=new o(o._44);return t._83=1,t._18=e,t}var o=r(0);e.exports=o;var i=n(!0),a=n(!1),s=n(null),u=n(void 0),c=n(0),f=n("");o.resolve=function(e){if(e instanceof o)return e;if(null===e)return s;if(void 0===e)return u;if(!0===e)return i;if(!1===e)return a;if(0===e)return c;if(""===e)return f;if("object"===typeof e||"function"===typeof e)try{var t=e.then;if("function"===typeof t)return new o(t.bind(e))}catch(e){return new o(function(t,r){r(e)})}return n(e)},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,r){function n(a,s){if(s&&("object"===typeof s||"function"===typeof s)){if(s instanceof o&&s.then===o.prototype.then){for(;3===s._83;)s=s._18;return 1===s._83?n(a,s._18):(2===s._83&&r(s._18),void s.then(function(e){n(a,e)},r))}var u=s.then;if("function"===typeof u){return void new o(u.bind(s)).then(function(e){n(a,e)},r)}}t[a]=s,0===--i&&e(t)}if(0===t.length)return e([]);for(var i=t.length,a=0;a<t.length;a++)n(a,t[a])})},o.reject=function(e){return new o(function(t,r){r(e)})},o.race=function(e){return new o(function(t,r){e.forEach(function(e){o.resolve(e).then(t,r)})})},o.prototype.catch=function(e){return this.then(null,e)}},function(e,t){!function(e){"use strict";function t(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!==typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return m.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function a(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function s(e){var t=new FileReader,r=a(t);return t.readAsArrayBuffer(e),r}function u(e){var t=new FileReader,r=a(t);return t.readAsText(e),r}function c(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function f(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"===typeof e)this._bodyText=e;else if(m.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(m.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(m.arrayBuffer&&m.blob&&w(e))this._bodyArrayBuffer=f(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!g(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(e)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(e){var t=e.toUpperCase();return _.indexOf(t)>-1?t:e}function d(e,t){t=t||{};var r=t.body;if(e instanceof d){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=h(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function y(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function b(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var m={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(e){return e&&DataView.prototype.isPrototypeOf(e)},g=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];this.map[e]=o?o+","+n:n},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=r(n)},o.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},l.call(d.prototype),l.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var P=[301,302,303,307,308];b.redirect=function(e,t){if(-1===P.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=d,e.Response=b,e.fetch=function(e,t){return new Promise(function(r,n){var o=new d(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;r(new b(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send("undefined"===typeof o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!==typeof self?self:this)},function(e,t,r){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,s,u=n(e),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var f in r)i.call(r,f)&&(u[f]=r[f]);if(o){s=o(r);for(var l=0;l<s.length;l++)a.call(r,s[l])&&(u[s[l]]=r[s[l]])}}return u}},function(e,t,r){"use strict";function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){e.forEach(function(e){switch(p.save(),p.globalAlpha=.1,p.beginPath(),p.moveTo(u(y),u(b)),p.lineTo(u(y),u(b)),p.lineTo(u(y),u(b)),p.lineWidth=.5,p.strokeStyle=c(),p.stroke(),p.restore(),p.save(),e.nodeType){case"fill":p.globalAlpha=.3,e.props.fillStyle&&(p.fillStyle=e.props.fillStyle),p.fillRect(e.props.x,e.props.y,e.props.width,e.props.height);break;case"circle":e.props.fillStyle&&(p.fillStyle=e.props.fillStyle),p.globalAlpha=.3;var t=new Path2D;t.arc(e.props.x,e.props.y,e.props.width,e.props.height,2*Math.PI),p.fill(t)}if(p.restore(),e.children)return window.requestAnimationFrame(function(t){return a(e.children)})})}function s(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];if(e.prototype instanceof w){return new e(t,Array.from(n)).render()}return new w(e,t,Array.from(n))}function u(e){return Math.floor(Math.random()*Math.floor(e))}function c(){return m[u(10)]}Object.defineProperty(t,"__esModule",{value:!0});var f=r(10),l=r.n(f),h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),d=document.createElement("canvas"),p=d.getContext("2d"),y=(window.devicePixelRatio,p.webkitBackingStorePixelRatio||p.mozBackingStorePixelRatio||p.msBackingStorePixelRatio||p.oBackingStorePixelRatio||p.backingStorePixelRatio,document.body.clientWidth),b=document.body.clientHeight;p.canvas.width=8*y,p.canvas.height=8*b,d.style.width=y+"px",d.style.height=b+"px";var m=l()({count:10,hue:"purple"});console.log(y,b);var v=c();document.body.style="margin: 0; padding: 0; overflow:hidden; background:"+v+";",document.getElementById("root").appendChild(d),p.scale(8,8),console.log(8),p.save(),p.fillStyle=v,p.fillRect(0,0,p.canvas.width,p.canvas.height),p.restore();var w=function(){function e(t,r,n){i(this,e),this.nodeType="container",this.state={},this.props=r,t&&(this.nodeType=t),n&&(this.children=n),this._componentDidMount()}return h(e,[{key:"setState",value:function(e){this.state=e(this.state),this._render()}},{key:"_render",value:function(){var e=this;window.requestAnimationFrame(function(t){return a([e.render()])})}},{key:"render",value:function(){return this.children}},{key:"_componentDidMount",value:function(){this.mounded=!0,this.componentDidMount()}},{key:"componentDidMount",value:function(){}}]),e}(),g={createElement:s},_=function(e){function t(){var e,r,o,a;i(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return r=o=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={wat:0},a=r,n(o,a)}return o(t,e),h(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.setState(function(e){return{wat:e.wat+1}})},0)}},{key:"render",value:function(){return g.createElement("fragment",null)}}]),t}(w);!function(e){window.requestAnimationFrame(function(t){return a([e])})}(g.createElement("container",null,g.createElement(_,null)))},function(e,t,r){(function(e){!function(r,n){var o=n();"object"===typeof e&&e&&e.exports&&(t=e.exports=o),t.randomColor=o}(0,function(){function e(e){var t=i(e.hue),r=u(t);return r<0&&(r=360+r),r}function t(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return u([0,100]);var r=a(e),n=r[0],o=r[1];switch(t.luminosity){case"bright":n=55;break;case"dark":n=o-10;break;case"light":o=55}return u([n,o])}function r(e,t,r){var n=o(e,t),i=100;switch(r.luminosity){case"dark":i=n+20;break;case"light":n=(i+n)/2;break;case"random":n=0,i=100}return u([n,i])}function n(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return d(e);case"hsl":var r=d(e);return"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)";case"hsla":var n=d(e),o=t.alpha||Math.random();return"hsla("+n[0]+", "+n[1]+"%, "+n[2]+"%, "+o+")";case"rgbArray":return l(e);case"rgb":return"rgb("+l(e).join(", ")+")";case"rgba":var i=l(e),o=t.alpha||Math.random();return"rgba("+i.join(", ")+", "+o+")";default:return c(e)}}function o(e,t){for(var r=s(e).lowerBounds,n=0;n<r.length-1;n++){var o=r[n][0],i=r[n][1],a=r[n+1][0],u=r[n+1][1];if(t>=o&&t<=a){var c=(u-i)/(a-o);return c*t+(i-c*o)}}return 0}function i(e){if("number"===typeof parseInt(e)){var t=parseInt(e);if(t<360&&t>0)return[t,t]}if("string"===typeof e)if(b[e]){var r=b[e];if(r.hueRange)return r.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var n=h(e)[0];return[n,n]}return[0,360]}function a(e){return s(e).saturationRange}function s(e){e>=334&&e<=360&&(e-=360);for(var t in b){var r=b[t];if(r.hueRange&&e>=r.hueRange[0]&&e<=r.hueRange[1])return b[t]}return"Color not found"}function u(e){if(null===y)return Math.floor(e[0]+Math.random()*(e[1]+1-e[0]));var t=e[1]||1,r=e[0]||0;y=(9301*y+49297)%233280;var n=y/233280;return Math.floor(r+n*(t-r))}function c(e){function t(e){var t=e.toString(16);return 1==t.length?"0"+t:t}var r=l(e);return"#"+t(r[0])+t(r[1])+t(r[2])}function f(e,t,r){var n=r[0][0],o=r[r.length-1][0],i=r[r.length-1][1],a=r[0][1];b[e]={hueRange:t,lowerBounds:r,saturationRange:[n,o],brightnessRange:[i,a]}}function l(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var r=e[1]/100,n=e[2]/100,o=Math.floor(6*t),i=6*t-o,a=n*(1-r),s=n*(1-i*r),u=n*(1-(1-i)*r),c=256,f=256,l=256;switch(o){case 0:c=n,f=u,l=a;break;case 1:c=s,f=n,l=a;break;case 2:c=a,f=n,l=u;break;case 3:c=a,f=s,l=n;break;case 4:c=u,f=a,l=n;break;case 5:c=n,f=a,l=s}return[Math.floor(255*c),Math.floor(255*f),Math.floor(255*l)]}function h(e){e=e.replace(/^#/,""),e=3===e.length?e.replace(/(.)/g,"$1$1"):e;var t=parseInt(e.substr(0,2),16)/255,r=parseInt(e.substr(2,2),16)/255,n=parseInt(e.substr(4,2),16)/255,o=Math.max(t,r,n),i=o-Math.min(t,r,n),a=o?i/o:0;switch(o){case t:return[(r-n)/i%6*60||0,a,o];case r:return[60*((n-t)/i+2)||0,a,o];case n:return[60*((t-r)/i+4)||0,a,o]}}function d(e){var t=e[0],r=e[1]/100,n=e[2]/100,o=(2-r)*n;return[t,Math.round(r*n/(o<1?o:2-o)*1e4)/100,o/2*100]}function p(e){for(var t=0,r=0;r!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);r++)t+=e.charCodeAt(r);return t}var y=null,b={};!function(){f("monochrome",null,[[0,0],[100,0]]),f("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),f("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),f("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),f("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),f("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),f("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),f("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}();var m=function(o){if(o=o||{},void 0!==o.seed&&null!==o.seed&&o.seed===parseInt(o.seed,10))y=o.seed;else if("string"===typeof o.seed)y=p(o.seed);else{if(void 0!==o.seed&&null!==o.seed)throw new TypeError("The seed value must be an integer or string");y=null}var i,a,s;if(null!==o.count&&void 0!==o.count){var u=o.count,c=[];for(o.count=null;u>c.length;)y&&o.seed&&(o.seed+=1),c.push(m(o));return o.count=u,c}return i=e(o),a=t(i,o),s=r(i,a,o),n([i,a,s],o)};return m})}).call(t,r(11)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}]);
