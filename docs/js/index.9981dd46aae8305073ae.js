!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!w[e]||!y[e])return;for(var t in y[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(x[t]=n[t]);0==--g&&0===b&&E()}(e,t),n&&n(e,t)};var t,r=!0,o="9981dd46aae8305073ae",i=1e4,a={},c=[],s=[];function d(e){var n=C[e];if(!n)return _;var r=function(r){return n.hot.active?(C[r]?-1===C[r].parents.indexOf(e)&&C[r].parents.push(e):(c=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),_(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return _[e]},set:function(n){_[e]=n}}};for(var i in _)Object.prototype.hasOwnProperty.call(_,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===l&&f("prepare"),b++,_.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===l&&(v[e]||k(e),0===b&&0===g&&E())}},r.t=function(e,n){return 1&n&&(e=r(e)),_.t(e,-2&n)},r}function p(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:j,apply:R,status:function(e){if(!e)return l;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:a[e]};return t=void 0,n}var u=[],l="idle";function f(e){l=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var h,x,m,g=0,b=0,v={},y={},w={};function O(e){return+e+""===e?+e:e}function j(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(n=i,n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=_.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}})).then(function(e){if(!e)return f("idle"),null;y={},v={},w=e.c,m=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});x={};return k(0),"prepare"===l&&0===b&&0===g&&E(),n});var n}function k(e){w[e]?(y[e]=!0,g++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=_.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):v[e]=!0}function E(){f("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return R(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in x)Object.prototype.hasOwnProperty.call(x,t)&&n.push(O(t));e.resolve(n)}}function R(n){if("ready"!==l)throw new Error("apply() is only allowed in ready status");var t,r,i,s,d;function p(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((s=C[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<s.parents.length;c++){var d=s.parents[c],p=C[d];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([d]),moduleId:i,parentId:d};-1===n.indexOf(d)&&(p.hot._acceptedDependencies[i]?(t[d]||(t[d]=[]),u(t[d],[i])):(delete t[d],n.push(d),r.push({chain:a.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},g=[],b={},v=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var y in x)if(Object.prototype.hasOwnProperty.call(x,y)){var j;d=O(y);var k=!1,E=!1,R=!1,D="";switch((j=x[y]?p(d):{type:"disposed",moduleId:y}).chain&&(D="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(k=new Error("Aborted because of self decline: "+j.moduleId+D));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+D));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(k=new Error("Aborted because "+d+" is not accepted"+D));break;case"accepted":n.onAccepted&&n.onAccepted(j),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),R=!0;break;default:throw new Error("Unexception type "+j.type)}if(k)return f("abort"),Promise.reject(k);if(E)for(d in b[d]=x[d],u(g,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,d)&&(h[d]||(h[d]=[]),u(h[d],j.outdatedDependencies[d]));R&&(u(g,[j.moduleId]),b[d]=v)}var I,M=[];for(r=0;r<g.length;r++)d=g[r],C[d]&&C[d].hot._selfAccepted&&M.push({module:d,errorHandler:C[d].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var U,A,S=g.slice();S.length>0;)if(d=S.pop(),s=C[d]){var H={},P=s.hot._disposeHandlers;for(i=0;i<P.length;i++)(t=P[i])(H);for(a[d]=H,s.hot.active=!1,delete C[d],delete h[d],i=0;i<s.children.length;i++){var L=C[s.children[i]];L&&((I=L.parents.indexOf(d))>=0&&L.parents.splice(I,1))}}for(d in h)if(Object.prototype.hasOwnProperty.call(h,d)&&(s=C[d]))for(A=h[d],i=0;i<A.length;i++)U=A[i],(I=s.children.indexOf(U))>=0&&s.children.splice(I,1);for(d in f("apply"),o=m,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var T=null;for(d in h)if(Object.prototype.hasOwnProperty.call(h,d)&&(s=C[d])){A=h[d];var B=[];for(r=0;r<A.length;r++)if(U=A[r],t=s.hot._acceptedDependencies[U]){if(-1!==B.indexOf(t))continue;B.push(t)}for(r=0;r<B.length;r++){t=B[r];try{t(A)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:A[r],error:e}),n.ignoreErrored||T||(T=e)}}}for(r=0;r<M.length;r++){var N=M[r];d=N.module,c=[d];try{_(d)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),n.ignoreErrored||T||(T=t),T||(T=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||T||(T=e)}}return T?(f("fail"),Promise.reject(T)):(f("idle"),new Promise(function(e){e(g)}))}var C={};function _(n){if(C[n])return C[n].exports;var t=C[n]={i:n,l:!1,exports:{},hot:p(n),parents:(s=c,c=[],s),children:[]};return e[n].call(t.exports,t,t.exports,d(n)),t.l=!0,t.exports}_.m=e,_.c=C,_.d=function(e,n,t){_.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,n){if(1&n&&(e=_(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(_.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)_.d(t,r,function(n){return e[n]}.bind(null,r));return t},_.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(n,"a",n),n},_.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},_.p="./",_.h=function(){return o},d(4)(_.s=4)}([function(e,n,t){(e.exports=t(6)(!1)).push([e.i,"html, body {\n  height: 100%;\n  margin: 0;\n  border: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.markdown-container {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 20px;\n  background: #fff;\n  opacity: .9; }\n\n@media screen and (max-width: 1024px) {\n  .markdown-container {\n    opacity: 1; } }\n\n#bgContainer {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: -1; }\n\n#output {\n  width: 100%;\n  height: 100%; }\n",""])},function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},function(e,n){e.exports='<h1 id="-">模版示例</h1>\n<p>仅用作示例</p>\n<h1 id="-">个人信息</h1>\n<ul>\n<li>** / 男 / 1995</li>\n<li>** / <strong>（**</strong>专业）</li>\n<li>工作年限：2年</li>\n<li>在线简历(gitpage): **** // gitpage是为了告诉面试官访问慢不是我的锅  ┑(￣Д ￣)┍</li>\n<li>技术博客(gitpage)：<a href="http://www.zpblogs.com/myBlogs/">http://www.zpblogs.com/myBlogs/</a></li>\n<li>Github: <a href="https://github.com/Richard-Choooou">https://github.com/Richard-Choooou</a></li>\n<li>期望职位：web前端程序员</li>\n<li>期望薪资：税前月薪 ** K（武汉）** K（北上广深）</li>\n<li>当前所在城市： 武汉</li>\n<li>期望城市：武汉</li>\n</ul>\n<hr>\n<h1 id="-">联系方式</h1>\n<ul>\n<li>Email: <a href="mailto:2264746084@qq.com">2264746084@qq.com</a></li>\n<li>微信：zpIsBest（子物）</li>\n</ul>\n<hr>\n<h1 id="-">自我评价</h1>\n<p>虽然工作时间不长，但是过往的工作经历以及平时自我学习使我的技能得到了磨炼。能够独立承担起WEB前端项目的构建，熟练使用<strong>js（ES6）</strong>、<strong>css(scss)</strong>、<strong>html(5)</strong> 等基本技能进行项目开发，使用 <strong>webpack</strong> <strong>gulp</strong>等构建工具提升项目的开发效率以及性能优化。熟悉 <strong>VUE</strong> 技术栈，能够将前端项目的规范与性能再提升一个档次。同时对于其它技术栈也有探索与实践，可根据不同业务需求进行多方位的技术选型。爱好开源，有自己的开源项目，同时多次给知名开源库element-ui提交过PR。</p>\n<hr>\n<h1 id="-">工作经历</h1>\n<h2 id="xxxxxx-2018-8-">xxxxxx公司 （2018年8月 ~ 至今）</h2>\n<h3 id="xxxxx-">xxxxx系统</h3>\n<p>xxxxxxxxx</p>\n<p>解决了xxxx等问题。</p>\n<p>在此项目中，我主要负责xxxxx。</p>\n<h3 id="xxxxx-">xxxxx系统</h3>\n<p>xxxxxxxx</p>\n<p>在此项目中，我主要负责xxxxxxx。</p>\n<h2 id="xxxxxx-2016-9-2018-8-">xxxxxx公司 （2016年9月-2018年8月）</h2>\n<h3 id="xxxxx-">xxxxx商城</h3>\n<p>xxxxxx</p>\n<p>我主要负责xxxxxxxx开发。</p>\n<h3 id="xxxxxxx-">xxxxxxx系统</h3>\n<p>xxxxxxxxxx。</p>\n<p>我主要负责xxxxxxx开发。</p>\n<h3 id="xxxx-">xxxx系统</h3>\n<p>该系统xxxxxxx完成开发。</p>\n<p>其中xxxxxxx。</p>\n<p>我主要负责xxxxxxx。</p>\n<hr>\n<h1 id="-">开源项目</h1>\n<h2 id="-">图片压缩跨平台客户端工具</h2>\n<p>基于electron react开发</p>\n<p>地址<a href="https://github.com/Richard-Choooou/image-compress">https://github.com/Richard-Choooou/image-compress</a></p>\n<h2 id="-">多玩囧图个人版（微信小程序）</h2>\n<p>为优化多玩图库移动端而生，平均每月1200累计访问人数。</p>\n<p>扫码体验</p>\n<p><img src="https://user-images.githubusercontent.com/23492006/50738344-d0e42c00-120d-11e9-9838-f4c583b2b27e.jpg" alt="gh_ec2f445d137e_258"></p>\n<p>地址<a href="https://github.com/Richard-Choooou/duowanImageBase-WXMircoApp">https://github.com/Richard-Choooou/duowanImageBase-WXMircoApp</a></p>\n<h2 id="npm-">NPM库</h2>\n<h3 id="webpack-markdown-pdf-plugin">webpack-markdown-pdf-plugin</h3>\n<p>一个将markdown文件转换为pdf的webpack plugin</p>\n<p>地址<a href="https://github.com/Richard-Choooou/webpack-markdown-pdf-plugin">https://github.com/Richard-Choooou/webpack-markdown-pdf-plugin</a></p>\n<h3 id="sticky-list-headers">sticky-list-headers</h3>\n<p>一个滚动列表导航吸顶的工具库</p>\n<p>地址<a href="https://github.com/Richard-Choooou/sticky-list-headers">https://github.com/Richard-Choooou/sticky-list-headers</a></p>\n<h3 id="best-calendar">best-calendar</h3>\n<p>一个封装日历算法的工具库，使用此库可以很方便的得到日历数据,随意定制日历</p>\n<p>地址<a href="https://github.com/Richard-Choooou/best-timeTool">https://github.com/Richard-Choooou/best-timeTool</a></p>\n<h3 id="drag-area">drag-area</h3>\n<p>一个可拖拽定位区域的工具库，类似于淘宝后台的页面定制功能</p>\n<p>地址<a href="https://github.com/Richard-Choooou/drag-area">https://github.com/Richard-Choooou/drag-area</a></p>\n<h1 id="-">公司技术分享相关讲义</h1>\n<p>xxxxxxx<a href="https://www.baidu.com">点此查看</a></p>\n<p>xxxxxxx<a href="https://www.baidu.com">点此查看</a></p>\n<p>xxxxxxx<a href="https://www.baidu.com">点此查看</a></p>\n'},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),i=t(2),a=t.n(i),c=t(3),s=t.n(c);t(5);document.getElementById("markdownContainer").innerHTML=s.a;var d=new Victor("bgContainer","output"),p=function(){function e(){o()(this,e),this.a=1}return a()(e,[{key:"getName",value:function(){return this.a}}]),e}();(new p).getName(),(new p).getName(),d([["#002c4a","#005584"],["#35ac03","#3f4303"]][Math.ceil(2*Math.random())-1]).set()},function(e,n,t){var r=t(0);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=t(7)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(0,function(){var n=t(0);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(n)}),e.hot.dispose(function(){i()})},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),s=null,d=0,p=[],u=t(8);function l(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],n))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(b(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:c}}}}function f(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function h(e,n){var t=c(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),p.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,t);t.insertBefore(n,o)}}function x(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=p.indexOf(e);n>=0&&p.splice(n,1)}function m(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return g(n,e.attrs),h(e,n),n}function g(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function b(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var a=d++;t=s||(s=m(n)),r=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(n,e.attrs),h(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,t,n),o=function(){x(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){x(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=f(e,n);return l(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var a=t[o];(c=i[a.id]).refs--,r.push(c)}e&&l(f(e,n),n);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var v,y=(v=[],function(e,n){return v[e]=n,v.filter(Boolean).join("\n")});function w(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);