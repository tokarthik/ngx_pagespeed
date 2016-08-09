(function(){var h,k=k||{},l=this;function aa(){}
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function p(a){return"string"==typeof a}var ba="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function da(a,b,c){return a.call.apply(a.bind,arguments)}function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return q.apply(null,arguments)}var fa=Date.now||function(){return+new Date};function r(a,b){function c(){}c.prototype=b.prototype;a.X=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Z=function(a,c,f){for(var g=Array(arguments.length-2),n=2;n<arguments.length;n++)g[n-2]=arguments[n];return b.prototype[c].apply(a,g)}};function t(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}r(t,Error);t.prototype.name="CustomError";function ga(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var ha=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function u(a,b){return a<b?-1:a>b?1:0};function v(a,b){b.unshift(a);t.call(this,ga.apply(null,b));b.shift()}r(v,t);v.prototype.name="AssertionError";function ia(a,b){throw new v("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var ja=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function ka(a){var b;a:{b=la;for(var c=a.length,d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:p(a)?a.charAt(b):a[b]};var w;a:{var ma=l.navigator;if(ma){var na=ma.userAgent;if(na){w=na;break a}}w=""};var oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<oa.length;f++)c=oa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var qa=-1!=w.indexOf("Opera"),x=-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"),ra=-1!=w.indexOf("Edge"),y=-1!=w.indexOf("Gecko")&&!(-1!=w.toLowerCase().indexOf("webkit")&&-1==w.indexOf("Edge"))&&!(-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"))&&-1==w.indexOf("Edge"),z=-1!=w.toLowerCase().indexOf("webkit")&&-1==w.indexOf("Edge");function sa(){var a=l.document;return a?a.documentMode:void 0}var A;
a:{var B="",C=function(){var a=w;if(y)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ra)return/Edge\/([\d\.]+)/.exec(a);if(x)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(z)return/WebKit\/(\S+)/.exec(a);if(qa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();C&&(B=C?C[1]:"");if(x){var F=sa();if(null!=F&&F>parseFloat(B)){A=String(F);break a}}A=B}var ta={};
function G(a){var b;if(!(b=ta[a])){b=0;for(var c=ha(String(A)).split("."),d=ha(String(a)).split("."),e=Math.max(c.length,d.length),f=0;!b&&f<e;f++){var g=c[f]||"",n=d[f]||"",M=RegExp("(\\d*)(\\D*)","g"),mb=RegExp("(\\d*)(\\D*)","g");do{var D=M.exec(g)||["","",""],E=mb.exec(n)||["","",""];if(0==D[0].length&&0==E[0].length)break;b=u(0==D[1].length?0:parseInt(D[1],10),0==E[1].length?0:parseInt(E[1],10))||u(0==D[2].length,0==E[2].length)||u(D[2],E[2])}while(!b)}b=ta[a]=0<=b}return b}
var ua=l.document,va=ua&&x?sa()||("CSS1Compat"==ua.compatMode?parseInt(A,10):5):void 0;var wa;(wa=!x)||(wa=9<=Number(va));var xa=wa,ya=x&&!G("9");!z||G("528");y&&G("1.9b")||x&&G("8")||qa&&G("9.5")||z&&G("528");y&&!G("8")||x&&G("9");function za(){0!=Aa&&(this[ba]||(this[ba]=++ca));this.F=this.F;this.S=this.S}var Aa=0;za.prototype.F=!1;function H(a,b){this.type=a;this.a=this.target=b}H.prototype.b=function(){};function Ba(a){Ba[" "](a);return a}Ba[" "]=aa;function I(a,b){H.call(this,a?a.type:"");this.f=this.state=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&y)try{Ba(c.nodeName)}catch(d){}this.state=a.state;this.f=a;a.defaultPrevented&&this.b()}}r(I,H);I.prototype.b=function(){I.X.b.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ya)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var J="closure_listenable_"+(1E6*Math.random()|0),Ca=0;function Da(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.v=!!d;this.w=e;++Ca;this.o=this.u=!1}function Ea(a){a.o=!0;a.listener=null;a.a=null;a.src=null;a.w=null};function Fa(a){this.src=a;this.a={};this.b=0}function Ga(a,b,c,d,e){var f=b.toString();b=a.a[f];b||(b=a.a[f]=[],a.b++);var g=Ha(b,c,d,e);-1<g?(a=b[g],a.u=!1):(a=new Da(c,a.src,f,!!d,e),a.u=!1,b.push(a));return a}function Ia(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ja(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(Ea(b),a.a[c].length||(delete a.a[c],a.b--))}}function Ha(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.o&&f.listener==b&&f.v==!!c&&f.w==d)return e}return-1};var Ja="closure_lm_"+(1E6*Math.random()|0),Ka={},La=0;
function K(a,b,c,d,e){if("array"==m(b))for(var f=0;f<b.length;f++)K(a,b[f],c,d,e);else if(c=Ma(c),a&&a[J])Ga(a.f,String(b),c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=L(a);g||(a[Ja]=g=new Fa(a));c=Ga(g,b,c,d,e);if(!c.a){d=Na();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Oa(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");La++}}}
function Na(){var a=Pa,b=xa?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Qa(a,b,c,d,e){if("array"==m(b))for(var f=0;f<b.length;f++)Qa(a,b[f],c,d,e);else(c=Ma(c),a&&a[J])?(a=a.f,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Ha(f,c,d,e),-1<c&&(Ea(f[c]),Array.prototype.splice.call(f,c,1),f.length||(delete a.a[b],a.b--)))):a&&(a=L(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Ha(b,c,!!d,e)),(c=-1<a?b[a]:null)&&Ra(c))}
function Ra(a){if("number"!=typeof a&&a&&!a.o){var b=a.src;if(b&&b[J])Ia(b.f,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.v):b.detachEvent&&b.detachEvent(Oa(c),d);La--;(c=L(b))?(Ia(c,a),c.b||(c.src=null,b[Ja]=null)):Ea(a)}}}function Oa(a){return a in Ka?Ka[a]:Ka[a]="on"+a}function Sa(a,b,c,d){var e=!0;if(a=L(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.v==c&&!f.o&&(f=Ta(f,d),e=e&&!1!==f)}return e}
function Ta(a,b){var c=a.listener,d=a.w||a.src;a.u&&Ra(a);return c.call(d,b)}
function Pa(a,b){if(a.o)return!0;if(!xa){var c;if(!(c=b))a:{c=["window","event"];for(var d=l,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new I(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(!e.keyCode)try{e.keyCode=-1;break a}catch(M){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.a;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;0<=g;g--){c.a=e[g];var n=Sa(e[g],f,!0,c),d=d&&n}for(g=0;g<e.length;g++)c.a=e[g],n=Sa(e[g],f,!1,c),d=
d&&n}return d}return Ta(a,new I(b,this))}function L(a){a=a[Ja];return a instanceof Fa?a:null}var Ua="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ma(a){if("function"==m(a))return a;a[Ua]||(a[Ua]=function(b){return a.handleEvent(b)});return a[Ua]};function N(){za.call(this);this.f=new Fa(this);this.P=this}r(N,za);N.prototype[J]=!0;N.prototype.removeEventListener=function(a,b,c,d){Qa(this,a,b,c,d)};function O(a,b){var c=a.P,d=b,e=d.type||d;if(p(d))d=new H(d,c);else if(d instanceof H)d.target=d.target||c;else{var f=d,d=new H(e,c);pa(d,f)}c=d.a=c;Va(c,e,!0,d);Va(c,e,!1,d)}
function Va(a,b,c,d){b=a.f.a[String(b)];if(!b)return;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.o&&g.v==c){var n=g.listener,M=g.w||g.src;g.u&&Ia(a.f,g);e=!1!==n.call(M,d)&&e}}};function Wa(a,b,c){if("function"==m(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)};function Xa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};function P(a,b){this.b={};this.a=[];this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof P)e=a.D(),d=a.U();else{var c=[],f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)this.set(e[c],d[c])}}h=P.prototype;h.U=function(){Ya(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};h.D=function(){Ya(this);return this.a.concat()};
h.clear=function(){this.b={};this.f=this.a.length=0};function Ya(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.b,a)?this.b[a]:b};
h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.b,a)||(this.f++,this.a.push(a));this.b[a]=b};h.forEach=function(a,b){for(var c=this.D(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new P(this)};function Za(a,b,c,d,e){this.reset(a,b,c,d,e)}Za.prototype.a=null;var $a=0;Za.prototype.reset=function(a,b,c,d,e){"number"==typeof e||$a++;d||fa();this.b=b;delete this.a};function ab(a){this.g=a;this.b=this.f=this.a=null}function Q(a,b){this.name=a;this.value=b}Q.prototype.toString=function(){return this.name};var bb=new Q("SEVERE",1E3),cb=new Q("CONFIG",700),db=new Q("FINE",500);function eb(a){if(a.f)return a.f;if(a.a)return eb(a.a);ia("Root logger has no level set.");return null}
ab.prototype.log=function(a,b,c){if(a.value>=eb(this).value)for("function"==m(b)&&(b=b()),a=new Za(a,String(b),this.g),c&&(a.a=c),c="log:"+a.b,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;)c=c.a};var fb={},R=null;
function gb(a){R||(R=new ab(""),fb[""]=R,R.f=cb);var b;if(!(b=fb[a])){b=new ab(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=gb(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;fb[a]=b}return b};function S(a,b){a&&a.log(db,b,void 0)};function hb(){}hb.prototype.a=null;function ib(a){var b;(b=a.a)||(b={},jb(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var kb;function lb(){}r(lb,hb);function nb(a){return(a=jb(a))?new ActiveXObject(a):new XMLHttpRequest}function jb(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}kb=new lb;var ob=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function T(a){N.call(this);this.R=new P;this.C=a||null;this.b=!1;this.B=this.c=null;this.a=this.O=this.l="";this.g=this.H=this.j=this.G=!1;this.i=0;this.m=null;this.J=pb;this.A=this.L=!1}r(T,N);var pb="",qb=T.prototype,rb=gb("goog.net.XhrIo");qb.h=rb;var sb=/^https?$/i,tb=["POST","PUT"];
function ub(a,b){if(a.c)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);a.l=b;a.a="";a.O="GET";a.G=!1;a.b=!0;a.c=a.C?nb(a.C):nb(kb);a.B=a.C?ib(a.C):ib(kb);a.c.onreadystatechange=q(a.I,a);try{S(a.h,U(a,"Opening Xhr")),a.H=!0,a.c.open("GET",String(b),!0),a.H=!1}catch(f){S(a.h,U(a,"Error opening Xhr: "+f.message));vb(a,f);return}var c=a.R.clone(),d=ka(c.D()),e=l.FormData&&!1;!(0<=ja(tb,"GET"))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
c.forEach(function(a,b){this.c.setRequestHeader(b,a)},a);a.J&&(a.c.responseType=a.J);"withCredentials"in a.c&&a.c.withCredentials!==a.L&&(a.c.withCredentials=a.L);try{wb(a),0<a.i&&(a.A=xb(a.c),S(a.h,U(a,"Will abort after "+a.i+"ms if incomplete, xhr2 "+a.A)),a.A?(a.c.timeout=a.i,a.c.ontimeout=q(a.K,a)):a.m=Wa(a.K,a.i,a)),S(a.h,U(a,"Sending request")),a.j=!0,a.c.send(""),a.j=!1}catch(f){S(a.h,U(a,"Send error: "+f.message)),vb(a,f)}}
function xb(a){return x&&G(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function la(a){return"content-type"==a.toLowerCase()}T.prototype.K=function(){"undefined"!=typeof k&&this.c&&(this.a="Timed out after "+this.i+"ms, aborting",S(this.h,U(this,this.a)),O(this,"timeout"),this.c&&this.b&&(S(this.h,U(this,"Aborting")),this.b=!1,this.g=!0,this.c.abort(),this.g=!1,O(this,"complete"),O(this,"abort"),yb(this)))};function vb(a,b){a.b=!1;a.c&&(a.g=!0,a.c.abort(),a.g=!1);a.a=b;zb(a);yb(a)}
function zb(a){a.G||(a.G=!0,O(a,"complete"),O(a,"error"))}T.prototype.I=function(){this.F||(this.H||this.j||this.g?Ab(this):this.T())};T.prototype.T=function(){Ab(this)};
function Ab(a){if(a.b&&"undefined"!=typeof k)if(a.B[1]&&4==V(a)&&2==W(a))S(a.h,U(a,"Local request error detected and ignored"));else if(a.j&&4==V(a))Wa(a.I,0,a);else if(O(a,"readystatechange"),4==V(a)){S(a.h,U(a,"Request complete"));a.b=!1;try{if(Bb(a))O(a,"complete"),O(a,"success");else{var b;try{b=2<V(a)?a.c.statusText:""}catch(c){S(a.h,"Can not get status: "+c.message),b=""}a.a=b+" ["+W(a)+"]";zb(a)}}finally{yb(a)}}}
function yb(a){if(a.c){wb(a);var b=a.c,c=a.B[0]?aa:null;a.c=null;a.B=null;O(a,"ready");try{b.onreadystatechange=c}catch(d){(a=a.h)&&a.log(bb,"Problem encountered resetting onreadystatechange: "+d.message,void 0)}}}function wb(a){a.c&&a.A&&(a.c.ontimeout=null);"number"==typeof a.m&&(l.clearTimeout(a.m),a.m=null)}
function Bb(a){var b=W(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=!b)a=String(a.l).match(ob)[1]||null,!a&&l.self&&l.self.location&&(a=l.self.location.protocol,a=a.substr(0,a.length-1)),b=!sb.test(a?a.toLowerCase():"");c=b}return c}function V(a){return a.c?a.c.readyState:0}function W(a){try{return 2<V(a)?a.c.status:-1}catch(b){return-1}}function U(a,b){return b+" ["+a.O+" "+a.l+" "+W(a)+"]"};function Cb(a){this.b=a||new T;this.a=[];a=document.getElementById("stat").textContent.split("\n");for(var b=0;b<a.length;++b){var c=a[b].split(":");2>c.length||this.a.push({name:c[0].trim(),value:c[1].trim()})}this.j=this.a.length;this.m={statsName:0};this.s={statsName:0};this.i="";this.l=this.f=this.g=!1;a=document.createElement("div");a.style.overflow="hidden";a.style.clear="both";b=document.createElement("div");b.id="ui-div";b.innerHTML='<table id="ui-table" border=1 style="float:left; border-collapse: collapse;border-color:silver;"><tr valign="center"><td>Auto refresh (every 5 seconds): <input type="checkbox" id="auto-refresh" '+
(this.g?"checked":"")+'></td><td>&nbsp;&nbsp;&nbsp;&nbsp;Filter: <input id="text-filter" type="text" size="70"></td></tr></table>';a.appendChild(b);b=document.createElement("div");b.id="num";b.className="pagespeed-show-number";a.appendChild(b);document.body.insertBefore(a,document.getElementById("stat"));Db(this)}h=Cb.prototype;h.Y=function(){this.g=!this.g};h.N=function(){this.f=!this.f;Eb(this)};h.W=function(a){this.i=a.value;Eb(this)};
function Db(a,b){document.getElementById("num").textContent="The number of statistics: "+(void 0!=b?b:a.a.length).toString()+"/"+a.j}h.error=function(){var a=this.a;if("array"!=m(a))for(var b=a.length-1;0<=b;b--)delete a[b];this.j=a.length=0;Db(this);document.getElementById("stat").textContent="Sorry, failed to update the statistics. Please wait and try again later."};
function Eb(a){a.f?Fb(a):a.a.sort(Gb);var b;var c=a.a,d=c.length;if(0<d){b=Array(d);for(var e=0;e<d;e++)b[e]=c[e]}else b=[];if(a.i)for(e=b.length-1;0<=e;--e)b[e].name&&-1!=b[e].name.toLowerCase().indexOf(a.i.toLowerCase())||b.splice(e,1);Db(a,b.length);c=document.createElement("table");for(e=0;e<b.length;++e){var f=c.insertRow(-1),d=f.insertCell(0);d.textContent=b[e].name;d.className="pagespeed-stats-name";d=f.insertCell(1);d.textContent=b[e].value;d.className="pagespeed-stats-value";d=f.insertCell(2);
d.textContent=a.s[b[e].name].toString();d.className="pagespeed-stats-number-of-changes"}b=c.createTHead().insertRow(0);d=b.insertCell(0);d.innerHTML='Name <input type="checkbox" id="sort-alpha" title="Sort in alphabetical order."'+(a.f?"":"checked")+">";d.className="pagespeed-stats-first-column";b.insertCell(1).textContent="Value";d=b.insertCell(2);d.innerHTML='Number of changes <input type="checkbox" id="sort-freq" title="Sort by the number of changes(descending order)."'+(a.f?"checked":"")+">";
d.title="How many times the value changes during the auto-refresh.\nThe number of changes only accumulates when auto-refresh is on.";d.className="pagespeed-stats-third-column";d=document.getElementById("stat");d.innerHTML="";d.appendChild(c);K(document.getElementById("sort-freq"),"change",q(a.N,a));K(document.getElementById("sort-alpha"),"change",q(a.N,a))}function Gb(a,b){return a.name>b.name?1:a.name<b.name?-1:0}
function Fb(a){a.a.sort(q(function(a,c){var d=this.s[a.name],e=this.s[c.name];return e!=d?e-d:Gb(a,c)},a))}h.M=function(){if(!this.b.c&&(!this.l||this.g)){this.l=!0;var a=location.pathname,b=a.lastIndexOf("/",a.length-2);ub(this.b,0<b?a.substring(0,b)+"/stats_json":a+"/stats_json")}};
h.V=function(){if(Bb(this.b)){var a;var b=this.b;a=b.c?Xa(b.c.responseText):void 0;b=a.variables;a=a.maxlength;if("object"!=m(b)||"number"!=m(a))this.error();else{a=[];for(var c in b)if("_"!=c[c.length-1]){var d=c.replace(/-/g,"_");"_"==d[0]&&(d=d.substring(1));a.push({name:d,value:b[c].toString()});var e=b[c],f=this.s[d];void 0==f?this.s[d]=e?1:0:e!=this.m[d]&&(this.s[d]=f+1);this.m[d]=e}this.a=a;this.j=a.length;Eb(this)}}else c=this.b,console.log(p(c.a)?c.a:String(c.a)),this.error()};
function Hb(){K(window,"load",function(){var a=new Cb,b=document.getElementById("text-filter");K(b,"keyup",q(a.W,a,b));K(document.getElementById("auto-refresh"),"change",q(a.Y,a));setInterval(q(a.M,a),5E3);K(a.b,"complete",q(a.V,a));a.M()})}var X=["pagespeed","Statistics","Start"],Y=l;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Hb?Y[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Hb;})();
