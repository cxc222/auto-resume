!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!v[e]||!w[e])return;for(var r in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(f[r]=n[r]);0==--m&&0===b&&k()}(e,r),n&&n(e,r)};var r,t=!0,o="7529ef47545b7b8b610f",i=1e4,c={},a=[],d=[];function p(e){var n=E[e];if(!n)return P;var t=function(t){return n.hot.active?(E[t]?-1===E[t].parents.indexOf(e)&&E[t].parents.push(e):(a=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),a=[]),P(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(n){P[e]=n}}};for(var i in P)Object.prototype.hasOwnProperty.call(P,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,o(i));return t.e=function(e){return"ready"===u&&h("prepare"),b++,P.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===u&&(y[e]||j(e),0===b&&0===m&&k())}},t.t=function(e,n){return 1&n&&(e=t(e)),P.t(e,-2&n)},t}function s(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:_,apply:D,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:c[e]};return r=void 0,n}var l=[],u="idle";function h(e){u=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var x,f,g,m=0,b=0,y={},w={},v={};function O(e){return+e+""===e?+e:e}function _(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return t=e,h("check"),(n=i,n=n||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,i=P.p+""+o+".hot-update.json";t.open("GET",i,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+i+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;w={},y={},v=e.c,g=e.h,h("prepare");var n=new Promise(function(e,n){x={resolve:e,reject:n}});f={};return j(0),"prepare"===u&&0===b&&0===m&&k(),n});var n}function j(e){v[e]?(w[e]=!0,m++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=P.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):y[e]=!0}function k(){h("ready");var e=x;if(x=null,e)if(t)Promise.resolve().then(function(){return D(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in f)Object.prototype.hasOwnProperty.call(f,r)&&n.push(O(r));e.resolve(n)}}function D(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var r,t,i,d,p;function s(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,c=o.chain;if((d=E[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var a=0;a<d.parents.length;a++){var p=d.parents[a],s=E[p];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([p]),moduleId:i,parentId:p};-1===n.indexOf(p)&&(s.hot._acceptedDependencies[i]?(r[p]||(r[p]=[]),l(r[p],[i])):(delete r[p],n.push(p),t.push({chain:c.concat([p]),id:p})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function l(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var x={},m=[],b={},y=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var w in f)if(Object.prototype.hasOwnProperty.call(f,w)){var _;p=O(w);var j=!1,k=!1,D=!1,H="";switch((_=f[w]?s(p):{type:"disposed",moduleId:w}).chain&&(H="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+_.moduleId+H));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+H));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(j=new Error("Aborted because "+p+" is not accepted"+H));break;case"accepted":n.onAccepted&&n.onAccepted(_),k=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),D=!0;break;default:throw new Error("Unexception type "+_.type)}if(j)return h("abort"),Promise.reject(j);if(k)for(p in b[p]=f[p],l(m,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,p)&&(x[p]||(x[p]=[]),l(x[p],_.outdatedDependencies[p]));D&&(l(m,[_.moduleId]),b[p]=y)}var R,I=[];for(t=0;t<m.length;t++)p=m[t],E[p]&&E[p].hot._selfAccepted&&I.push({module:p,errorHandler:E[p].hot._selfAccepted});h("dispose"),Object.keys(v).forEach(function(e){!1===v[e]&&function(e){delete installedChunks[e]}(e)});for(var C,M,A=m.slice();A.length>0;)if(p=A.pop(),d=E[p]){var q={},S=d.hot._disposeHandlers;for(i=0;i<S.length;i++)(r=S[i])(q);for(c[p]=q,d.hot.active=!1,delete E[p],delete x[p],i=0;i<d.children.length;i++){var U=E[d.children[i]];U&&((R=U.parents.indexOf(p))>=0&&U.parents.splice(R,1))}}for(p in x)if(Object.prototype.hasOwnProperty.call(x,p)&&(d=E[p]))for(M=x[p],i=0;i<M.length;i++)C=M[i],(R=d.children.indexOf(C))>=0&&d.children.splice(R,1);for(p in h("apply"),o=g,b)Object.prototype.hasOwnProperty.call(b,p)&&(e[p]=b[p]);var B=null;for(p in x)if(Object.prototype.hasOwnProperty.call(x,p)&&(d=E[p])){M=x[p];var T=[];for(t=0;t<M.length;t++)if(C=M[t],r=d.hot._acceptedDependencies[C]){if(-1!==T.indexOf(r))continue;T.push(r)}for(t=0;t<T.length;t++){r=T[t];try{r(M)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:p,dependencyId:M[t],error:e}),n.ignoreErrored||B||(B=e)}}}for(t=0;t<I.length;t++){var X=I[t];p=X.module,a=[p];try{P(p)}catch(e){if("function"==typeof X.errorHandler)try{X.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:p,error:r,originalError:e}),n.ignoreErrored||B||(B=r),B||(B=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:p,error:e}),n.ignoreErrored||B||(B=e)}}return B?(h("fail"),Promise.reject(B)):(h("idle"),new Promise(function(e){e(m)}))}var E={};function P(n){if(E[n])return E[n].exports;var r=E[n]={i:n,l:!1,exports:{},hot:s(n),parents:(d=a,a=[],d),children:[]};return e[n].call(r.exports,r,r.exports,p(n)),r.l=!0,r.exports}P.m=e,P.c=E,P.d=function(e,n,r){P.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,n){if(1&n&&(e=P(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(P.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)P.d(r,t,function(n){return e[n]}.bind(null,t));return r},P.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(n,"a",n),n},P.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},P.p="./",P.h=function(){return o},p(1)(P.s=1)}([function(e,n){e.exports='<h1 id="-">模版示例</h1>\n<h1 id="-">个人信息</h1>\n<ul>\n<li>** / 男 / 1995</li>\n<li>** / <strong>（**</strong>专业）</li>\n<li>工作年限：2年</li>\n<li>在线简历(gitpage): **** // gitpage是为了告诉面试官访问慢不是我的锅  ┑(￣Д ￣)┍</li>\n<li>技术博客(gitpage)：<a href="http://www.zpblogs.com/myBlogs/">http://www.zpblogs.com/myBlogs/</a></li>\n<li>Github: <a href="https://github.com/Richard-Choooou">https://github.com/Richard-Choooou</a></li>\n<li>期望职位：web前端程序员</li>\n<li>期望薪资：税前月薪 ** K（武汉）** K（北上广深）</li>\n<li>当前所在城市： 武汉</li>\n<li>期望城市：武汉</li>\n</ul>\n<hr>\n<h1 id="-">联系方式</h1>\n<ul>\n<li>Email: <a href="mailto:2264746084@qq.com">2264746084@qq.com</a></li>\n<li>微信：zpIsBest（子物）</li>\n</ul>\n<hr>\n<h1 id="-">自我评价</h1>\n<p>虽然工作时间不长，但是过往的工作经历以及平时自我学习使我的技能得到了磨炼。能够独立承担起WEB前端项目的构建，熟练使用<strong>js（ES6）</strong>、<strong>css(scss)</strong>、<strong>html(5)</strong> 等基本技能进行项目开发，使用 <strong>webpack</strong> <strong>gulp</strong>等构建工具提升项目的开发效率以及性能优化。熟悉 <strong>VUE</strong> 技术栈，能够将前端项目的规范与性能再提升一个档次。同时对于其它技术栈也有探索与实践，可根据不同业务需求进行多方位的技术选型。爱好开源，有自己的开源项目，同时多次给知名开源库element-ui提交过PR。</p>\n<hr>\n<h1 id="-">工作经历</h1>\n<h2 id="xxxxxx-2018-8-">xxxxxx公司 （2018年8月 ~ 至今）</h2>\n<h3 id="xxxxx-">xxxxx系统</h3>\n<p>xxxxxxxxx</p>\n<p>解决了xxxx等问题。</p>\n<p>在此项目中，我主要负责xxxxx。</p>\n<h3 id="xxxxx-">xxxxx系统</h3>\n<p>xxxxxxxx</p>\n<p>在此项目中，我主要负责xxxxxxx。</p>\n<h2 id="xxxxxx-2016-9-2018-8-">xxxxxx公司 （2016年9月-2018年8月）</h2>\n<h3 id="xxxxx-">xxxxx商城</h3>\n<p>xxxxxx</p>\n<p>我主要负责xxxxxxxx开发。</p>\n<h3 id="xxxxxxx-">xxxxxxx系统</h3>\n<p>xxxxxxxxxx。</p>\n<p>我主要负责xxxxxxx开发。</p>\n<h3 id="xxxx-">xxxx系统</h3>\n<p>该系统xxxxxxx完成开发。</p>\n<p>其中xxxxxxx。</p>\n<p>我主要负责xxxxxxx。</p>\n<hr>\n<h1 id="-">开源项目</h1>\n<h2 id="-">图片压缩跨平台客户端工具</h2>\n<p>基于electron react开发</p>\n<p>地址<a href="https://github.com/Richard-Choooou/image-compress">https://github.com/Richard-Choooou/image-compress</a></p>\n<h2 id="-">多玩囧图个人版（微信小程序）</h2>\n<p>为优化多玩图库移动端而生，平均每月1200累计访问人数。</p>\n<p>扫码体验</p>\n<p><img src="https://user-images.githubusercontent.com/23492006/50738344-d0e42c00-120d-11e9-9838-f4c583b2b27e.jpg" alt="gh_ec2f445d137e_258"></p>\n<p>地址<a href="https://github.com/Richard-Choooou/duowanImageBase-WXMircoApp">https://github.com/Richard-Choooou/duowanImageBase-WXMircoApp</a></p>\n<h2 id="npm-">NPM库</h2>\n<h3 id="webpack-markdown-pdf-plugin">webpack-markdown-pdf-plugin</h3>\n<p>一个将markdown文件转换为pdf的webpack plugin</p>\n<p>地址<a href="https://github.com/Richard-Choooou/webpack-markdown-pdf-plugin">https://github.com/Richard-Choooou/webpack-markdown-pdf-plugin</a></p>\n<h3 id="sticky-list-headers">sticky-list-headers</h3>\n<p>一个滚动列表导航吸顶的工具库</p>\n<p>地址<a href="https://github.com/Richard-Choooou/sticky-list-headers">https://github.com/Richard-Choooou/sticky-list-headers</a></p>\n<h3 id="best-calendar">best-calendar</h3>\n<p>一个封装日历算法的工具库，使用此库可以很方便的得到日历数据,随意定制日历</p>\n<p>地址<a href="https://github.com/Richard-Choooou/best-timeTool">https://github.com/Richard-Choooou/best-timeTool</a></p>\n<h3 id="drag-area">drag-area</h3>\n<p>一个可拖拽定位区域的工具库，类似于淘宝后台的页面定制功能</p>\n<p>地址<a href="https://github.com/Richard-Choooou/drag-area">https://github.com/Richard-Choooou/drag-area</a></p>\n<h1 id="-">公司技术分享相关讲义</h1>\n<p>xxxxxxx<a href="https://www.baidu.com">点此查看</a></p>\n<p>xxxxxxx<a href="https://www.baidu.com">点此查看</a></p>\n<p>xxxxxxx<a href="https://www.baidu.com">点此查看</a></p>\n'},function(e,n,r){"use strict";r.r(n);var t=r(0),o=r.n(t);$("#markdownContainer").html(o.a)}]);