(()=>{var j=7;var cr=16;var qr=256,Rr=512;var jr=8448;function $r(r,e){return r?(r._L&e)===e:!1}function x(r){return $r(r,j|cr)}var pr=class{constructor(){this._L=qr}};var lr=class extends pr{constructor(){super(...arguments);this._L=jr}};var Br=new lr;var H=class{constructor(e){this._L=Rr,this.subscribe=e}};var _=mr(r=>{r()});function mr(r){return new H(r)}var Ci=Symbol();var U=function(){return U=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r},U.apply(this,arguments)},V=function(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;for(var n=Array(r),i=0,e=0;e<t;e++)for(var o=arguments[e],u=0,s=o.length;u<s;u++,i++)n[i]=o[u];return n},T=function(r){return r},Z=function(r){return{_tag:"Left",value:r}},N=function(r){return{_tag:"Right",value:r}},re=function(r,e,t){return t._tag==="Left"?r(t.value):e(t.value)};var rr={Equivalence:{Equivalence:"Equivalence",Iso:"Iso",Lens:"Lens",Prism:"Prism",Traversal:"Traversal",Getter:"Getter",AffineFold:"AffineFold",Fold:"Fold",Setter:"Setter"},Iso:{Equivalence:"Iso",Iso:"Iso",Lens:"Lens",Prism:"Prism",Traversal:"Traversal",Getter:"Getter",AffineFold:"AffineFold",Fold:"Fold",Setter:"Setter"},Lens:{Equivalence:"Lens",Iso:"Lens",Lens:"Lens",Prism:"Prism",Traversal:"Traversal",Getter:"Getter",AffineFold:"AffineFold",Fold:"Fold",Setter:"Setter"},Prism:{Equivalence:"Prism",Iso:"Prism",Lens:"Prism",Prism:"Prism",Traversal:"Traversal",Getter:"AffineFold",AffineFold:"AffineFold",Fold:"Fold",Setter:"Setter"},Traversal:{Equivalence:"Traversal",Iso:"Traversal",Lens:"Traversal",Prism:"Traversal",Traversal:"Traversal",Getter:"Fold",AffineFold:"Fold",Fold:"Fold",Setter:"Setter"},Getter:{Equivalence:"Getter",Iso:"Getter",Lens:"Getter",Prism:"AffineFold",Traversal:"Fold",Getter:"Getter",AffineFold:"AffineFold",Fold:"Fold",Setter:void 0},AffineFold:{Equivalence:"AffineFold",Iso:"AffineFold",Lens:"AffineFold",Prism:"AffineFold",Traversal:"Fold",Getter:"AffineFold",AffineFold:"AffineFold",Fold:"Fold",Setter:void 0},Fold:{Equivalence:"Fold",Iso:"Fold",Lens:"Fold",Prism:"Fold",Traversal:"Fold",Getter:"Fold",AffineFold:"Fold",Fold:"Fold",Setter:void 0},Setter:{Equivalence:void 0,Iso:void 0,Lens:void 0,Prism:void 0,Traversal:void 0,Getter:void 0,AffineFold:void 0,Fold:void 0,Setter:void 0}},F=function(r,e){var t=e;return t._tag=r,t},xr=function(r){return r._removable=!0,r};function p(r,e,t){switch(arguments.length){case 2:{var n=function(o,u){return r(o,e(o,u))};return n._tag=rr[r._tag][e._tag],n._removable=e._removable||!1,n}default:{var i=rr[r._tag][e._tag],n=function(u,s){return r(u,e(u,t(u,s)))};return n._tag=rr[i][t._tag],n._removable=t._removable||!1,n}}}var ee=F("Equivalence",function(r,e){return e}),er=function(r,e){return F("Iso",function(t,n){return t.dimap(r,e,n)})},g=function(r,e){return F("Lens",function(t,n){return t.dimap(function(i){return[r(i),i]},e,t.first(n))})},tr=function(r,e){return F("Prism",function(t,n){return t.dimap(r,function(i){return re(T,e,i)},t.right(n))})},nr=F("Traversal",function(r,e){return r.dimap(T,T,r.wander(e))}),te=function(r){return F("Getter",function(e,t){return e.dimap(r,T,t)})};var Sr=function(r){return g(function(e){return e[r]},function(e){var t,n=e[0],i=e[1];return U(U({},i),(t={},t[r]=n,t))})},ne=function(r){return g(function(e){for(var t={},n=0,i=r;n<i.length;n++){var o=i[n];t[o]=e[o]}return t},function(e){for(var t=e[0],n=e[1],i=U({},n),o=0,u=r;o<u.length;o++){var s=u[o];delete i[s]}return Object.assign(i,t)})},or=function(r){return tr(function(e){return r(e)?N(e):Z(e)},T)},D=Symbol("__no_match__"),Er=or(function(r){return r!==D}),wr=Symbol("__remove_me__"),ir=function(r){return xr(p(g(function(e){return 0<=r&&r<e.length?e[r]:D},function(e){var t=e[0],n=e[1];if(t===D)return n;if(t===wr)return typeof n=="string"?n.substring(0,r)+n.substring(r+1):V(n.slice(0,r),n.slice(r+1));if(typeof n=="string")return r===0?t+n.substring(1):r===n.length?n.substring(0,r-1)+t:n.substring(0,r)+t+n.substring(r+1);var i=n.slice();return i[r]=t,i}),Er))},oe=tr(function(r){return r===void 0?Z(void 0):N(r)},T),ie=function(r){return tr(function(e){return r(e)?N(e):Z(e)},T)},se=g(function(r){return r[0]},function(r){var e=r[0],t=r[1];return[e,t[1]]}),ue=function(r){return xr(p(g(function(e){var t=e.findIndex(r);return t===-1?[D,-1]:[e[t],t]},function(e){var t=e[0],n=t[0],i=t[1],o=e[1];if(n===D)return o;if(n===wr)return V(o.slice(0,i),o.slice(i+1));var u=o.slice();return u[i]=n,u}),se,Er))},ae=function(r){return g(function(e){var t=e.map(function(n,i){return r(n)?i:null}).filter(function(n){return n!=null});return t.map(function(n){return e[n]})},function(e){for(var t=e[0],n=e[1],i=n.map(function(c,m){return r(c)?m:null}).filter(function(c){return c!=null}),o=n.slice(),u=0,s=0,a=i;s<a.length;s++){var f=a[s];o[f]=t[u],u++}return o})},fe=function(r){return g(function(e){return e===void 0?r:e},function(e){var t=e[0],n=e[1];return t})},ce=g(function(r){},function(r){var e=r[0],t=r[1];return e===void 0?t:V([e],t)}),pe=g(function(r){},function(r){var e=r[0],t=r[1];return e===void 0?t:V(t,[e])}),le=p(er(function(r){return r.split("")},function(r){return r.join("")}),nr),me=p(er(function(r){return r.split(/\b/)},function(r){return r.join("")}),nr,or(function(r){return!/\s+/.test(r)})),he=function(){function r(e){this._ref=e}return Object.defineProperty(r.prototype,"_tag",{get:function(){return this._ref._tag},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"_removable",{get:function(){return this._ref._removable},enumerable:!1,configurable:!0}),r.prototype.compose=function(e){return new r(p(this._ref,e._ref))},r.prototype.iso=function(e,t){return new r(p(this._ref,er(e,t)))},r.prototype.prop=function(e){return new r(p(this._ref,Sr(e)))},r.prototype.path=function(e){return new r(e.reduce(function(t,n){return p(t,Sr(n))},this._ref))},r.prototype.pick=function(e){return new r(p(this._ref,ne(e)))},r.prototype.filter=function(e){return new r(p(this._ref,ae(e)))},r.prototype.valueOr=function(e){return new r(p(this._ref,fe(e)))},r.prototype.optional=function(){return new r(p(this._ref,oe))},r.prototype.guard_=function(){var e=this;return function(t){return e.guard(t)}},r.prototype.guard=function(e){return new r(p(this._ref,ie(e)))},r.prototype.at=function(e){return new r(p(this._ref,ir(e)))},r.prototype.head=function(){return new r(p(this._ref,ir(0)))},r.prototype.index=function(e){return new r(p(this._ref,ir(e)))},r.prototype.find=function(e){return new r(p(this._ref,ue(e)))},r.prototype.elems=function(){return new r(p(this._ref,nr))},r.prototype.to=function(e){return new r(p(this._ref,te(e)))},r.prototype.when=function(e){return new r(p(this._ref,or(e)))},r.prototype.chars=function(){return new r(p(this._ref,le))},r.prototype.words=function(){return new r(p(this._ref,me))},r.prototype.prependTo=function(){return new r(p(this._ref,ce))},r.prototype.appendTo=function(){return new r(p(this._ref,pe))},r}();var ve=new he(ee);function G(r){return x(r)}function q(r,e){return r.forEach(e)}var I=function(){return I=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r},I.apply(this,arguments)},b=function(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],n=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},k=function(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var n=t.call(r),i,o=[],u;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(s){u={error:s}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(u)throw u.error}}return o},de=function(){for(var r=[],e=0;e<arguments.length;e++)r=r.concat(k(arguments[e]));return r},_r=[];function Tr(r,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var i=t.flatMap(sr);if(e?e.children&&delete e.children:e={},typeof r=="function"){var o=r;_r.push({});var u=o(I(I({},e),{children:i})),s=_r.pop();return G(u)?W([z()],be(Or(s),Ar(u))):s.unmountCallbacks||s.mountCallbacks||s.scope?W(L(R(u)),Or(s)):u}else{if(typeof r=="string")return ye(r,e,i);throw console.error("Unexpected createElement call with arguments",arguments),Error("Unknown type "+r)}}function be(r,e){return function(t){var n=r(t),i=e(t);return function(){i(),n()}}}var Or=function(r){return function(e){var t,n;if(r.scope&&(r.mountsController=e),r.mountCallbacks)try{for(var i=b(r.mountCallbacks),o=i.next();!o.done;o=i.next()){var u=o.value;u()}}catch(s){t={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return function(){var s,a;if(r.unmountCallbacks)try{for(var f=b(r.unmountCallbacks),c=f.next();!c.done;c=f.next()){var m=c.value;m()}}catch(l){s={error:l}}finally{try{c&&!c.done&&(a=f.return)&&a.call(f)}finally{if(s)throw s.error}}}}};function sr(r){return r instanceof Array?r.flatMap(sr):[r]}function ye(r,e,t){var n,i,o=document.createElement(r),u=!1,s=function(h,y){h==="contentEditable"&&(u=!0),G(y)?ur(o,function(){var w=q(y,function(Dr){Pr(o,h,Dr)});ar(o,w)}):Pr(o,h,y)};try{for(var a=b(Object.entries(e||{})),f=a.next();!f.done;f=a.next()){var c=k(f.value,2),m=c[0],l=c[1];s(m,l)}}catch(h){n={error:h}}finally{try{f&&!f.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}return u?ge(o,t):(t||[]).map(R).flatMap(L).forEach(function(h){return o.appendChild(h)}),o}function ge(r,e){if(!(!e||e.length==0)){if(e.length!=1)throw Error("contentEditable elements expected to contain zero to one child");var t=e[0];if(!G(t))throw Error("contentEditable element must have an Observable<string> as child");var n=t;W([r],function(i){return q(n,function(o){if(typeof o!="string")throw Error("Value for contentEditable is not string: "+o+" is a "+typeof o+".");o!==r.textContent&&(r.textContent=o)})})}}function z(){var r=document.createTextNode("");return r._h_id=xe++,r}var xe=1;function R(r){if(r instanceof Array)return r.flatMap(R);if(typeof r=="string"||typeof r=="number")return document.createTextNode(r.toString());if(r===null||r===!1)return z();if(G(r))return W([z()],Ar(r));if(Se(r))return r;throw Error(r+" is not a valid element")}var Ar=function(r){return function(e){return q(r,function(t){var n=e.currentElements.slice(),i=sr(t).flatMap(R).flatMap(L);i.length===0&&(i=[z()]),Cr(e,n,i)})}};function Se(r){return r instanceof Element||r instanceof Text}function Pr(r,e,t){if(e==="ref"){if(typeof t!="function")throw Error("Expecting ref prop to be a function, got "+t);var n=t;ur(r,function(){return n(r)});return}if(e.startsWith("on"))e=e.toLowerCase(),e=e==="ondoubleclick"?"ondblclick":e,r[e]=t;else if(e==="style"){var i=Object.entries(t).filter(function(o){var u=k(o,2),s=u[0],a=u[1];return s!==""}).map(function(o){var u=k(o,2),s=u[0],a=u[1];return Ee(s)+": "+a+";"}).join(`
`);r.setAttribute("style",i)}else e==="className"?r.setAttribute("class",t):e in r?r[e]=t:r.setAttribute(e,t)}function Ee(r){return r.split("").map(function(e){return e==e.toUpperCase()?"-"+e.toLowerCase():e}).join("")}function we(r){var e=r;return e.__h}function E(r){var e=r;if(!e.__h){var t={};e.__h=t}return e.__h}function Fr(r,e){var t=R(r);return Cr(null,[e],t),t}function Ir(r){var e,t,n,i,o=E(r);if(!o.mounted){if(o.unmounted)throw new Error("Component re-mount not supported");if(o.mounted=!0,o.onMounts)try{for(var u=b(o.onMounts),s=u.next();!s.done;s=u.next()){var a=s.value;a()}}catch(l){e={error:l}}finally{try{s&&!s.done&&(t=u.return)&&t.call(u)}finally{if(e)throw e.error}}try{for(var f=b(r.childNodes),c=f.next();!c.done;c=f.next()){var m=c.value;Ir(m)}}catch(l){n={error:l}}finally{try{c&&!c.done&&(i=f.return)&&i.call(f)}finally{if(n)throw n.error}}}}function Lr(r){var e,t,n,i,o=E(r);if(!!o.mounted){if(o.onUnmounts)try{for(var u=b(o.onUnmounts),s=u.next();!s.done;s=u.next()){var a=s.value;a()}}catch(l){e={error:l}}finally{try{s&&!s.done&&(t=u.return)&&t.call(u)}finally{if(e)throw e.error}}try{for(var f=b(r.childNodes),c=f.next();!c.done;c=f.next()){var m=c.value;Lr(m)}}catch(l){n={error:l}}finally{try{c&&!c.done&&(i=f.return)&&i.call(f)}finally{if(n)throw n.error}}o.mounted=!1,o.unmounted=!0}}function ur(r,e){if(typeof e!="function")throw Error("not a function: "+e);var t=E(r);t.onMounts||(t.onMounts=[]),t.onMounts.push(e)}function ar(r,e){if(typeof e!="function")throw Error("not a function: "+e);var t=E(r);t.onUnmounts||(t.onUnmounts=[]),!t.onUnmounts.includes(e)&&t.onUnmounts.push(e)}function _e(r,e){var t=we(r);if(!(t===void 0||!t.onUnmounts)){for(var n=0;n<t.onUnmounts.length;n++)if(t.onUnmounts[n]===e){t.onUnmounts.splice(n,1);return}}}function Mr(r,e){var t,n,i;try{for(var o=b(r),u=o.next();!u.done;u=o.next()){var s=u.value,a=E(s),f=(i=a.controllers)===null||i===void 0?void 0:i.indexOf(e);if(f===void 0||f<0)throw Error("Controller not attached to "+s);e.unsub&&_e(s,e.unsub)}}catch(c){t={error:c}}finally{try{u&&!u.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}}function W(r,e,t){var n=I(I({},t),{currentElements:r});return fr(r,n,e),r}function fr(r,e,t,n){for(var i=function(u){var s=r[u],a=E(s);if(a.controllers?a.controllers.includes(e)||a.controllers.push(e):a.controllers=[e],u==0){if(t){if(a.mounted)throw Error("Unexpected: Component already mounted");ur(s,function(){var f=t(e);e.unsub=f,s=e.currentElements[0],ar(s,e.unsub)})}e.unsub&&!n&&ar(s,e.unsub)}},o=0;o<r.length;o++)i(o)}function Oe(r,e,t){var n,i,o=-1,u=-1;if(e.length===0)throw Error("Empty list of nodes");try{for(var s=b(e),a=s.next();!a.done;a=s.next()){var f=a.value,c=r.currentElements.indexOf(f);if(c<0)throw Error("Element not found: "+M(f));if(u>=0&&c!=u+1)throw Error("Non-consecutive nodes "+e);o<0&&(o=c),u=c}}catch(m){n={error:m}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}if(o<0||u<0)throw Error("Assertion failed");r.onReplace&&r.onReplace(e,t),Mr(e,r),r.currentElements=de(r.currentElements.slice(0,o),t,r.currentElements.slice(u+1)),fr(r.currentElements,r)}function Te(r,e,t){var n,i;if(!!r){var o=E(e[0]).controllers;if(!o)throw new Error("Assertion failed: Controllers not found for "+M(e[0]));for(var u=o.indexOf(r),s=o.slice(u+1),a=1;a<e.length;a++){var f=E(e[a]).controllers||[],c=f.indexOf(r);if(c<0)throw new Error("Controller "+r+" not found in "+M(e[a]));var m=f.slice(c+1);if(!Ae(s,m))throw new Error("Assertion failed: controller array of "+M(e[a])+" ("+f+", replacer index "+c+") not equal to that of "+M(e[0])+" ("+o+").")}try{for(var l=b(s),h=l.next();!h.done;h=l.next()){var y=h.value;Oe(y,e,t)}}catch(w){n={error:w}}finally{try{h&&!h.done&&(i=l.return)&&i.call(l)}finally{if(n)throw n.error}}}}function Ae(r,e){if(r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}function Pe(r,e){if(r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(!(r[t]instanceof Text&&e[t]instanceof Text&&r[t].textContent&&r[t].textContent===e[t].textContent))return!1;return!0}function Cr(r,e,t){var n,i,o,u,s=L(e),a=L(t);if(!Pe(s,a)){if(r&&(r.currentElements=a,Mr(s,r),fr(a,r)),s.length===0)throw new Error("Cannot replace zero nodes");if(a.length===0)throw new Error("Cannot replace with zero nodes");s[0].parentElement.replaceChild(a[0],s[0]);for(var f=1;f<s.length;f++)s[f].remove();for(var f=1;f<a.length;f++)a[f-1].after(a[f]);Te(r,s,a);try{for(var c=b(s),m=c.next();!m.done;m=c.next()){var l=m.value;Lr(l)}}catch(w){n={error:w}}finally{try{m&&!m.done&&(i=c.return)&&i.call(c)}finally{if(n)throw n.error}}try{for(var h=b(a),y=h.next();!y.done;y=h.next()){var l=y.value;Ir(l)}}catch(w){o={error:w}}finally{try{y&&!y.done&&(u=h.return)&&u.call(h)}finally{if(o)throw o.error}}}}function L(r){return r instanceof Array?r.flatMap(L):[r]}function M(r){return r instanceof Array?r.map(M).join(",")||"[]":r instanceof Element?r.outerHTML:r.textContent||(r._h_id!=null?"<placeholder "+r._h_id+">":"<empty text node>")}var K=Tr;var Ce=()=>K("h1",null,"Harmaja"),Ur=Ce;Fr(K(Ur,null),document.getElementById("harmaja-mount"));})();
//# sourceMappingURL=bundle.js.map