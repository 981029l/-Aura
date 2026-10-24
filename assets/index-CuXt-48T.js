(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ys(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const xe={},Jt=[],kt=()=>{},Wi=()=>!1,pr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),mr=e=>e.startsWith("onUpdate:"),je=Object.assign,ws=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Da=Object.prototype.hasOwnProperty,ce=(e,t)=>Da.call(e,t),Q=Array.isArray,Gt=e=>jn(e)==="[object Map]",er=e=>jn(e)==="[object Set]",Vs=e=>jn(e)==="[object Date]",te=e=>typeof e=="function",Ce=e=>typeof e=="string",ct=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Ki=e=>(he(e)||te(e))&&te(e.then)&&te(e.catch),Yi=Object.prototype.toString,jn=e=>Yi.call(e),ja=e=>jn(e).slice(8,-1),Xi=e=>jn(e)==="[object Object]",ks=e=>Ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zn=ys(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Na=/-\w/g,Ye=hr(e=>e.replace(Na,t=>t.slice(1).toUpperCase())),Ba=/\B([A-Z])/g,tn=hr(e=>e.replace(Ba,"-$1").toLowerCase()),gr=hr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rr=hr(e=>e?`on${gr(e)}`:""),wt=(e,t)=>!Object.is(e,t),Er=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Zi=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Ga=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Hs;const br=()=>Hs||(Hs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function st(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ce(r)?Ua(r):st(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ce(e)||he(e))return e}const Va=/;(?![^(]*\))/g,Ha=/:([^]+)/,qa=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Ua(e){const t={};return e.replace(qa,n=>n.startsWith("/*")?"":n).split(Va).forEach(n=>{if(n){const r=n.split(Ha);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function W(e){let t="";if(Ce(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const r=W(e[n]);r&&(t+=r+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Wa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Ka=ys(Wa);function Ji(e){return!!e||e===""}function Ya(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let s=0;r&&s<e.length;s++)r=xr(e[s],t[s],n);return r}function qs(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),s=new Uint8Array(r.length);for(const i of e){let a=-1;for(let o=0;o<r.length;o++)if(!s[o]&&xr(i,r[o],n)){a=o;break}if(a<0)return!1;s[a]=1}return!0}function Xa(e,t,n){let r=Gt(e),s=Gt(t);if(r||s||(r=er(e),s=er(t),r||s))return r&&s?qs(e,t,n):!1;const i=Object.keys(e).length,a=Object.keys(t).length;if(i!==a)return!1;for(const o in e){const l=e.hasOwnProperty(o),u=t.hasOwnProperty(o);if(l&&!u||!l&&u||!xr(e[o],t[o],n))return!1}return String(e)===String(t)}function Us(e,t,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(e)||i.has(t))return s.get(e)===t&&i.get(t)===e;s.set(e,t),i.set(t,e);const a=r(e,t,n);return s.delete(e),i.delete(t),a}function xr(e,t,n){if(e===t)return!0;let r=Vs(e),s=Vs(t);return r||s?r&&s?e.getTime()===t.getTime():!1:(r=ct(e),s=ct(t),r||s?e===t:(r=Q(e),s=Q(t),r||s?r&&s?Us(e,t,n,Ya):!1:(r=he(e),s=he(t),r||s?!r||!s?!1:Us(e,t,n,Xa):String(e)===String(t))))}const Qi=e=>!!(e&&e.__v_isRef===!0),Ae=e=>Ce(e)?e:e==null?"":Q(e)||he(e)&&(e.toString===Yi||!te(e.toString))?Qi(e)?Ae(e.value):JSON.stringify(e,eo,2):String(e),eo=(e,t)=>Qi(t)?eo(e,t.value):Gt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Fr(r,i)+" =>"]=s,n),{})}:er(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Fr(n))}:ct(t)?Fr(t):he(t)&&!Q(t)&&!Xi(t)?String(t):t,Fr=(e,t="")=>{var n;return ct(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class Za{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Te&&(Te.active?(this.parent=Te,this.index=(Te.scopes||(Te.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){++this._on===1&&(this.prevScope=Te,Te=this)}off(){if(this._on>0&&--this._on===0){if(Te===this)Te=this.prevScope;else{let t=Te;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ja(){return Te}let ve;const Pr=new WeakSet;class to{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Te&&(Te.active?Te.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pr.has(this)&&(Pr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ro(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ws(this),so(this);const t=ve,n=lt;ve=this,lt=!0;try{return this.fn()}finally{io(this),ve=t,lt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)As(t);this.deps=this.depsTail=void 0,Ws(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zr(this)&&this.run()}get dirty(){return Zr(this)}}let no=0,An,Cn;function ro(e,t=!1){if(e.flags|=8,t){e.next=Cn,Cn=e;return}e.next=An,An=e}function _s(){no++}function zs(){if(--no>0)return;if(Cn){let t=Cn;for(Cn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;An;){let t=An;for(An=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function so(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function io(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),As(r),Qa(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Zr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(oo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function oo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Pn)||(e.globalVersion=Pn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Zr(e))))return;e.flags|=2;const t=e.dep,n=ve,r=lt;ve=e,lt=!0;try{so(e);const s=e.fn(e._value);(t.version===0||wt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ve=n,lt=r,io(e),e.flags&=-3}}function As(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)As(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Qa(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let lt=!0;const ao=[];function At(){ao.push(lt),lt=!1}function Ct(){const e=ao.pop();lt=e===void 0?!0:e}function Ws(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ve;ve=void 0;try{t()}finally{ve=n}}}let Pn=0;class el{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ve||!lt||ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ve)n=this.activeLink=new el(ve,this),ve.deps?(n.prevDep=ve.depsTail,ve.depsTail.nextDep=n,ve.depsTail=n):ve.deps=ve.depsTail=n,lo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ve.depsTail,n.nextDep=void 0,ve.depsTail.nextDep=n,ve.depsTail=n,ve.deps===n&&(ve.deps=r)}return n}trigger(t){this.version++,Pn++,this.notify(t)}notify(t){_s();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{zs()}}}function lo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)lo(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Jr=new WeakMap,en=Symbol(""),Qr=Symbol(""),Mn=Symbol("");function Ge(e,t,n){if(lt&&ve){let r=Jr.get(e);r||Jr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Cs),s.map=r,s.key=n),s.track()}}function It(e,t,n,r,s,i){const a=Jr.get(e);if(!a){Pn++;return}const o=l=>{l&&l.trigger()};if(_s(),t==="clear")a.forEach(o);else{const l=Q(e),u=l&&ks(n);if(l&&n==="length"){const c=Number(r);a.forEach((f,p)=>{(p==="length"||p===Mn||!ct(p)&&p>=c)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),u&&o(a.get(Mn)),t){case"add":l?u&&o(a.get("length")):(o(a.get(en)),Gt(e)&&o(a.get(Qr)));break;case"delete":l||(o(a.get(en)),Gt(e)&&o(a.get(Qr)));break;case"set":Gt(e)&&o(a.get(en));break}}zs()}function on(e){const t=pe(e);return t===e||(Ge(t,"iterate",Mn),et(e))?t:St(e)?Vt(e)?t.map(n=>qt(tt(n))):t.map(qt):t.map(tt)}function vr(e){return Ge(e=pe(e),"iterate",Mn),e}function xt(e,t){return St(e)?qt(Vt(e)?tt(t):t):tt(t)}const tl={__proto__:null,[Symbol.iterator](){return Mr(this,Symbol.iterator,e=>xt(this,e))},concat(...e){return on(this).concat(...e.map(t=>Q(t)?on(t):t))},entries(){return Mr(this,"entries",e=>(e[1]=xt(this,e[1]),e))},every(e,t){return Rt(this,"every",e,t,void 0,arguments)},filter(e,t){return Rt(this,"filter",e,t,n=>n.map(r=>xt(this,r)),arguments)},find(e,t){return Rt(this,"find",e,t,n=>xt(this,n),arguments)},findIndex(e,t){return Rt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Rt(this,"findLast",e,t,n=>xt(this,n),arguments)},findLastIndex(e,t){return Rt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Rt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ir(this,"includes",e)},indexOf(...e){return Ir(this,"indexOf",e)},join(e){return on(this).join(e)},lastIndexOf(...e){return Ir(this,"lastIndexOf",e)},map(e,t){return Rt(this,"map",e,t,void 0,arguments)},pop(){return bn(this,"pop")},push(...e){return bn(this,"push",e)},reduce(e,...t){return Ys(this,"reduce",e,t)},reduceRight(e,...t){return Ys(this,"reduceRight",e,t)},shift(){return bn(this,"shift")},some(e,t){return Rt(this,"some",e,t,void 0,arguments)},splice(...e){return bn(this,"splice",e)},toReversed(){return on(this).toReversed()},toSorted(e){return on(this).toSorted(e)},toSpliced(...e){return on(this).toSpliced(...e)},unshift(...e){return bn(this,"unshift",e)},values(){return Mr(this,"values",e=>xt(this,e))}};function Mr(e,t,n){const r=vr(e),s=r[t],i=s.call(r);if(r!==e&&!et(e)){if(i[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(i));return a.next=()=>Ks(i.next(),n),s!==co[t]&&Object.defineProperties(a,{return:{get(){const o=i.return;return typeof o=="function"?o.bind(i):o}},throw:{get(){const o=i.throw;return typeof o=="function"?o.bind(i):o}}}),a}i._next=i.next,i.next=()=>Ks(i._next(),n)}return i}function Ks(e,t){return e.done||(e.value=t(e.value)),e}const co=Array.prototype;function Rt(e,t,n,r,s,i){const a=vr(e),o=a!==e&&!et(e),l=a[t];if(l!==co[t]){const f=l.apply(e,i);return o?tt(f):f}let u=n;a!==e&&(o?u=function(f,p){return n.call(this,xt(e,f),p,e)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,e)}));const c=l.call(a,u,r);return o&&s?s(c):c}function Ys(e,t,n,r){const s=vr(e),i=s!==e&&!et(e);let a=n,o=!1;s!==e&&(i?(o=r.length===0,a=function(u,c,f){return o&&(o=!1,u=xt(e,u)),n.call(this,u,xt(e,c),f,e)}):n.length>3&&(a=function(u,c,f){return n.call(this,u,c,f,e)}));const l=s[t](a,...r);return o?xt(e,l):l}function Ir(e,t,n){const r=pe(e);Ge(r,"iterate",Mn);const s=r[t](...n);return(s===-1||s===!1)&&Es(n[0])?(n[0]=pe(n[0]),r[t](...n)):s}function bn(e,t,n=[]){At(),_s();const r=pe(e)[t].apply(e,n);return zs(),Ct(),r}const nl=ys("__proto__,__v_isRef,__isVue"),uo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ct));function rl(e){ct(e)||(e=String(e));const t=pe(this);return Ge(t,"has",e),t.hasOwnProperty(e)}class fo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?pl:go:i?ho:mo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=Q(t);if(!s){let l;if(a&&(l=tl[n]))return l;if(n==="hasOwnProperty")return rl}const o=Reflect.get(t,n,He(t)?t:r);if((ct(n)?uo.has(n):nl(n))||(s||Ge(t,"get",n),i))return o;if(He(o)){const l=a&&ks(n)?o:o.value;return s&&he(l)?ts(l):l}return he(o)?s?ts(o):yr(o):o}}class po extends fo{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];const a=Q(t)&&ks(n);if(!this._isShallow){const u=St(i);if(!et(r)&&!St(r)&&(i=pe(i),r=pe(r)),!a&&He(i)&&!He(r))return u||(i.value=r),!0}const o=a?Number(n)<t.length:ce(t,n),l=Reflect.set(t,n,r,He(t)?t:s);return t===pe(s)&&l&&(o?wt(r,i)&&It(t,"set",n,r):It(t,"add",n,r)),l}deleteProperty(t,n){const r=ce(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&It(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!ct(n)||!uo.has(n))&&Ge(t,"has",n),r}ownKeys(t){return Ge(t,"iterate",Q(t)?"length":en),Reflect.ownKeys(t)}}class sl extends fo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const il=new po,ol=new sl,al=new po(!0);const es=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function ll(e,t,n){return function(...r){const s=this.__v_raw,i=pe(s),a=Gt(i),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,u=s[e](...r),c=n?es:t?qt:tt;return!t&&Ge(i,"iterate",l?Qr:en),je(Object.create(u),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:o?[c(f[0]),c(f[1])]:c(f),done:p}}})}}function Hn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function cl(e,t){const n={get(s){const i=this.__v_raw,a=pe(i),o=pe(s);e||(wt(s,o)&&Ge(a,"get",s),Ge(a,"get",o));const{has:l}=Vn(a),u=t?es:e?qt:tt;if(l.call(a,s))return u(i.get(s));if(l.call(a,o))return u(i.get(o));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Ge(pe(s),"iterate",en),s.size},has(s){const i=this.__v_raw,a=pe(i),o=pe(s);return e||(wt(s,o)&&Ge(a,"has",s),Ge(a,"has",o)),s===o?i.has(s):i.has(s)||i.has(o)},forEach(s,i){const a=this,o=a.__v_raw,l=pe(o),u=t?es:e?qt:tt;return!e&&Ge(l,"iterate",en),o.forEach((c,f)=>s.call(i,u(c),u(f),a))}};return je(n,e?{add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear")}:{add(s){const i=pe(this),a=Vn(i),o=pe(s),l=!t&&!et(s)&&!St(s)?o:s;return a.has.call(i,l)||wt(s,l)&&a.has.call(i,s)||wt(o,l)&&a.has.call(i,o)||(i.add(l),It(i,"add",l,l)),this},set(s,i){!t&&!et(i)&&!St(i)&&(i=pe(i));const a=pe(this),{has:o,get:l}=Vn(a);let u=o.call(a,s);u||(s=pe(s),u=o.call(a,s));const c=l.call(a,s);return a.set(s,i),u?wt(i,c)&&It(a,"set",s,i):It(a,"add",s,i),this},delete(s){const i=pe(this),{has:a,get:o}=Vn(i);let l=a.call(i,s);l||(s=pe(s),l=a.call(i,s)),o&&o.call(i,s);const u=i.delete(s);return l&&It(i,"delete",s,void 0),u},clear(){const s=pe(this),i=s.size!==0,a=s.clear();return i&&It(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ll(s,e,t)}),n}function Ss(e,t){const n=cl(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_isShallow"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const ul={get:Ss(!1,!1)},dl={get:Ss(!1,!0)},fl={get:Ss(!0,!1)};const mo=new WeakMap,ho=new WeakMap,go=new WeakMap,pl=new WeakMap;function ml(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yr(e){return St(e)?e:Rs(e,!1,il,ul,mo)}function bo(e){return Rs(e,!1,al,dl,ho)}function ts(e){return Rs(e,!0,ol,fl,go)}function Rs(e,t,n,r,s){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=s.get(e);if(i)return i;const a=ml(ja(e));if(a===0)return e;const o=new Proxy(e,a===2?r:n);return s.set(e,o),o}function Vt(e){return St(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function St(e){return!!(e&&e.__v_isReadonly)}function et(e){return!!(e&&e.__v_isShallow)}function Es(e){return e?!!e.__v_raw:!1}function pe(e){const t=e&&e.__v_raw;return t?pe(t):e}function hl(e){return!ce(e,"__v_skip")&&Object.isExtensible(e)&&Zi(e,"__v_skip",!0),e}const tt=e=>he(e)?yr(e):e,qt=e=>he(e)?ts(e):e;function He(e){return e?e.__v_isRef===!0:!1}function ke(e){return xo(e,!1)}function gl(e){return xo(e,!0)}function xo(e,t){return He(e)?e:new bl(e,t)}class bl{constructor(t,n){this.dep=new Cs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:pe(t),this._value=n?t:tt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||et(t)||St(t);t=r?t:pe(t),wt(t,n)&&(this._rawValue=t,this._value=r?t:tt(t),this.dep.trigger())}}function V(e){return He(e)?e.value:e}const xl={get:(e,t,n)=>t==="__v_raw"?e:V(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return He(s)&&!He(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function vo(e){return Vt(e)?e:new Proxy(e,xl)}class vl{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Cs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return ro(this,!0),!0}get value(){const t=this.dep.track();return oo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function yl(e,t,n=!1){let r,s;return te(e)?r=e:(r=e.get,s=e.set),new vl(r,s,n)}const qn={},tr=new WeakMap;let Zt;function wl(e,t=!1,n=Zt){if(n){let r=tr.get(n);r||tr.set(n,r=[]),r.push(e)}}function kl(e,t,n=xe){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:o,call:l}=n,u=v=>s?v:et(v)||s===!1||s===0?Ot(v,1):Ot(v);let c,f,p,b,I=!1,z=!1;if(He(e)?(f=()=>e.value,I=et(e)):Vt(e)?(f=()=>u(e),I=!0):Q(e)?(z=!0,I=e.some(v=>Vt(v)||et(v)),f=()=>e.map(v=>{if(He(v))return v.value;if(Vt(v))return u(v);if(te(v))return l?l(v,2):v()})):te(e)?t?f=l?()=>l(e,2):e:f=()=>{if(p){At();try{p()}finally{Ct()}}const v=Zt;Zt=c;try{return l?l(e,3,[b]):e(b)}finally{Zt=v}}:f=kt,t&&s){const v=f,A=s===!0?1/0:s;f=()=>Ot(v(),A)}const O=Ja(),T=()=>{c.stop(),O&&O.active&&ws(O.effects,c)};if(i&&t){const v=t;t=(...A)=>{try{return v(...A)}finally{T()}}}let g=z?new Array(e.length).fill(qn):qn;const x=v=>{if(!(!(c.flags&1)||!c.dirty&&!v))if(t){const A=c.run();if(v||s||I||(z?A.some((F,$)=>wt(F,g[$])):wt(A,g))){const F=Zt;At();try{p&&p(),Zt=c;const $=[A,g===qn?void 0:z&&g[0]===qn?[]:g,b];g=A,l?l(t,3,$):t(...$)}finally{Zt=F,Ct()}}}else c.run()};return o&&o(x),c=new to(f),c.scheduler=a?()=>a(x,!1):x,b=v=>wl(v,!1,c),p=c.onStop=()=>{const v=tr.get(c);if(v){if(l)l(v,4);else for(const A of v)A();tr.delete(c)}},t?r?x(!0):g=c.run():a?a(x.bind(null,!0),!0):c.run(),T.pause=c.pause.bind(c),T.resume=c.resume.bind(c),T.stop=T,T}function Ot(e,t=1/0,n){if(t<=0||!he(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,He(e))Ot(e.value,t,n);else if(Q(e))for(let r=0;r<e.length;r++)Ot(e[r],t,n);else if(er(e)||Gt(e))e.forEach(r=>{Ot(r,t,n)});else if(Xi(e)){for(const r in e)Ot(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ot(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nn(e,t,n,r){try{return r?e(...r):e()}catch(s){wr(s,t,n)}}function ut(e,t,n,r){if(te(e)){const s=Nn(e,t,n,r);return s&&Ki(s)&&s.catch(i=>{wr(i,t,n)}),s}if(Q(e)){const s=[];for(let i=0;i<e.length;i++)s.push(ut(e[i],t,n,r));return s}}function wr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||xe;if(t){let o=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,l,u)===!1)return}o=o.parent}if(i){At(),Nn(i,null,10,[e,l,u]),Ct();return}}_l(e,n,s,r,a)}function _l(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Ke=[];let ot=-1;const vt=[];let Nt=null,an=0;const yo=Promise.resolve();let nr=null;function wo(e){const t=nr||yo;return e?t.then(this?e.bind(this):e):t}function zl(e){let t=ot+1,n=Ke.length;for(;t<n;){const r=t+n>>>1,s=Ke[r],i=In(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Fs(e){if(!(e.flags&1)){const t=In(e),n=Ke[Ke.length-1];!n||!(e.flags&2)&&t>=In(n)?Ke.push(e):Ke.splice(zl(t),0,e),e.flags|=1,ko()}}function ko(){nr||(nr=yo.then(Ao))}function Al(e){if(!Q(e))Nt&&e.id===-1?Nt.splice(an+1,0,e):e.flags&1||(vt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)vt.push(e[t]);ko()}function _o(e,t,n,r=ot+1){for(;r<Ke.length;r++){const s=Ke[r];if(s&&s.flags&2){if(e&&s.id!==e.uid||t!==void 0&&!(s.id>=t))continue;Ke.splice(r,1),r=e?r-1:ot,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function zo(e,t,n=0){if(vt.length){let r=vt,s=0;if(t){r=[];for(let a=0;a<vt.length;a++){const o=vt[a];(o.i!==void 0?!o.i||o.i.uid<n:t.has(o))?vt[s++]=o:r.push(o)}}const i=[...new Set(r)].sort((a,o)=>In(a)-In(o));if(vt.length=s,Nt){for(let a=0;a<i.length;a++)Nt.push(i[a]);return}for(Nt=i,an=0;an<Nt.length;an++){const a=Nt[an];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Nt=null,an=0}}let Or=!1;function Cl(e,t){if(Or){e();return}const n=t===void 0?void 0:new Set(vt);e(),Or=!0;try{_o(void 0,t),zo(void 0,n,t)}finally{Or=!1}}const In=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ao(e){try{for(ot=0;ot<Ke.length;ot++){const t=Ke[ot];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Nn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ot<Ke.length;ot++){const t=Ke[ot];t&&(t.flags&=-2)}ot=-1,Ke.length=0,zo(),nr=null,(Ke.length||vt.length)&&Ao()}}let De=null,Co=null;function rr(e){const t=De;return De=e,Co=e&&e.type.__scopeId||null,t}function ne(e,t=De,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&ar(-1);const i=rr(t),a=Tt.length;let o;try{o=e(...s)}finally{for(let l=Tt.length;l>a;l--)Os();rr(i),r._d&&ar(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $r(e,t){if(De===null)return e;const n=Cr(De),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,o,l=xe]=t[s];i&&(te(i)&&(i={mounted:i,updated:i}),i.deep&&Ot(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function Kt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];i&&(o.oldValue=i[a].value);let l=o.dir[r];l&&(At(),ut(l,n,8,[e.el,o,e,t]),Ct())}}function Xn(e,t){if(Ve){let n=Ve.provides;const r=Ve.parent&&Ve.parent.provides;r===n&&(n=Ve.provides=Object.create(r)),n[e]=t}}function _t(e,t,n=!1){const r=ea();if(r||un){let s=un?un._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&te(t)?t.call(r&&r.proxy):t}}const Sl=Symbol.for("v-scx"),Rl=()=>_t(Sl);function Ht(e,t,n){return So(e,t,n)}function So(e,t,n=xe){const{immediate:r,deep:s,flush:i,once:a}=n,o=je({},n),l=t&&r||!t&&i!=="post";let u;if(Tn){if(i==="sync"){const b=Rl();u=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=kt,b.resume=kt,b.pause=kt,b}}const c=Ve;o.call=(b,I,z)=>ut(b,c,I,z);let f=!1;i==="post"?o.scheduler=b=>{b.i=c,Xe(b,c&&c.suspense)}:i!=="sync"&&(f=!0,o.scheduler=(b,I)=>{I?b():Fs(b)}),o.augmentJob=b=>{t&&(b.flags|=4),f&&(b.flags|=2,c&&(b.id=c.uid,b.i=c))};const p=kl(e,t,o);return Tn&&(u?u.push(p):l&&p()),p}function El(e,t,n){const r=this.proxy,s=Ce(e)?e.includes(".")?Ro(r,e):()=>r[e]:e.bind(r,r);let i;te(t)?i=t:(i=t.handler,n=t);const a=Gn(this),o=So(s,i.bind(r),n);return a(),o}function Ro(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Fl=Symbol("_vte"),kr=e=>e.__isTeleport,Tr=Symbol("_leaveCb");function Pl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==nt){t=n;break}}return t}function Eo(e){if(!Ps(e))return kr(e.type)&&e.children?Pl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&te(n.default))return n.default()}}function sr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;sr(kr(n.type)&&Eo(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===_e&&Q(e.children)){const n=Do(e.children,!1);n&&sr(n,t)}}function ns(e){if(e.component)return ns(e.component.subTree);if(e.type===_e){const t=Q(e.children)&&Do(e.children,!1);return t?ns(t):void 0}if(e.type!==nt)return e}function ye(e,t){return te(e)?je({name:e.name},t,{setup:e}):e}function Fo(){const e=ea();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Po(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Xs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const ir=new WeakMap;function Sn(e,t,n,r,s=!1){if(Q(e)){e.forEach((z,O)=>Sn(z,t&&(Q(t)?t[O]:t),n,r,s));return}if(cn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Sn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Cr(r.component):r.el,a=s?null:i,{i:o,r:l}=e,u=t&&t.r,c=o.refs===xe?o.refs={}:o.refs,f=o.setupState,p=pe(f),b=f===xe?Wi:z=>Xs(c,z)?!1:ce(p,z),I=(z,O)=>!(O&&Xs(c,O));if(u!=null&&u!==l){if(Zs(t),Ce(u))c[u]=null,b(u)&&(f[u]=null);else if(He(u)){const z=t;I(u,z.k)&&(u.value=null),z.k&&(c[z.k]=null)}}if(te(l))Nn(l,o,12,[a,c]);else{const z=Ce(l),O=He(l);if(z||O){const T=()=>{if(e.f){const g=z?b(l)?f[l]:c[l]:I()||!e.k?l.value:c[e.k];if(s)Q(g)&&ws(g,i);else if(Q(g))g.includes(i)||g.push(i);else if(z)c[l]=[i],b(l)&&(f[l]=c[l]);else{const x=[i];I(l,e.k)&&(l.value=x),e.k&&(c[e.k]=x)}}else z?(c[l]=a,b(l)&&(f[l]=a)):O&&(I(l,e.k)&&(l.value=a),e.k&&(c[e.k]=a))};if(a){const g=()=>{T(),ir.delete(e)};g.id=-1,ir.set(e,g),Xe(g,n)}else Zs(e),T()}}}function Zs(e){const t=ir.get(e);t&&(t.flags|=8,ir.delete(e))}br().requestIdleCallback;br().cancelIdleCallback;const cn=e=>!!e.type.__asyncLoader,Ps=e=>e.type.__isKeepAlive;function Ml(e,t){Mo(e,"a",t)}function Il(e,t){Mo(e,"da",t)}function Mo(e,t,n=Ve){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(_r(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Ps(s.parent.vnode)&&Ol(r,t,n,s),s=s.parent}}function Ol(e,t,n,r){const s=_r(t,e,r,!0);rn(()=>{ws(r[t],s)},n)}function _r(e,t,n=Ve,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{At();const o=Gn(n),l=ut(t,n,e,a);return o(),Ct(),l});return r?s.unshift(i):s.push(i),i}}const Lt=e=>(t,n=Ve)=>{(!Tn||e==="sp")&&_r(e,(...r)=>t(...r),n)},$l=Lt("bm"),nn=Lt("m"),Tl=Lt("bu"),Ll=Lt("u"),Dl=Lt("bum"),rn=Lt("um"),jl=Lt("sp"),Nl=Lt("rtg"),Bl=Lt("rtc");function Gl(e,t=Ve){_r("ec",e,t)}const Vl="components";function Bn(e,t){return ql(Vl,e,!0,t)||e}const Hl=Symbol.for("v-ndc");function ql(e,t,n=!0,r=!1){const s=De||Ve;if(s){const i=s.type;{const o=Rc(i,!1);if(o&&(o===t||o===Ye(t)||o===gr(Ye(t))))return i}const a=Js(s[e]||i[e],t)||Js(s.appContext[e],t);return!a&&r?i:a}}function Js(e,t){return e&&(e[t]||e[Ye(t)]||e[gr(Ye(t))])}function $t(e,t,n,r){let s;const i=n,a=Q(e);if(a||Ce(e)){const o=a&&Vt(e);let l=!1,u=!1;o&&(l=!et(e),u=St(e),e=vr(e)),s=new Array(e.length);for(let c=0,f=e.length;c<f;c++)s[c]=t(l?u?qt(tt(e[c])):tt(e[c]):e[c],c,void 0,i)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)s=[];else{s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i)}else if(he(e))if(e[Symbol.iterator])s=Array.from(e,(o,l)=>t(o,l,void 0,i));else{const o=Object.keys(e);s=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];s[l]=t(e[c],c,l,i)}}else s=[];return s}function zt(e,t,n,r,s,i){if(n==null&&(n={}),De.ce||De.parent&&cn(De.parent)&&De.parent.ce){const u=n,c=Object.keys(u).length>0;return t!=="default"&&(u.name=t),G(),rt(_e,null,[E("slot",u,r&&r())],c?-2:64)}let a=e[t];a&&a._c&&(a._d=!1);const o=Tt.length;G();let l;try{const u=a&&Io(a(n)),c=n.key||i||u&&u.key;l=rt(_e,{key:(c&&!ct(c)?c:`_${t}`)+(!u&&r?"_fb":"")},u||(r?r():[]),u&&e._===1?64:-2)}catch(u){for(let c=Tt.length;c>o;c--)Os();throw u}finally{a&&a._c&&(a._d=!0)}return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function Io(e){return e.some(t=>dn(t)?!(t.type===nt||t.type===_e&&!Io(t.children)):!0)?e:null}const rs=e=>e?ta(e)?Cr(e):rs(e.parent):null,Rn=je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>rs(e.parent),$root:e=>rs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>$o(e),$forceUpdate:e=>e.f||(e.f=()=>{Fs(e.update)}),$nextTick:e=>e.n||(e.n=wo.bind(e.proxy)),$watch:e=>El.bind(e)}),Lr=(e,t)=>e!==xe&&!e.__isScriptSetup&&ce(e,t),Ul={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:o,appContext:l}=e;if(t[0]!=="$"){const p=a[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Lr(r,t))return a[t]=1,r[t];if(s!==xe&&ce(s,t))return a[t]=2,s[t];if(ce(i,t))return a[t]=3,i[t];if(n!==xe&&ce(n,t))return a[t]=4,n[t];ss&&(a[t]=0)}}const u=Rn[t];let c,f;if(u)return t==="$attrs"&&Ge(e.attrs,"get",""),u(e);if((c=o.__cssModules)&&(c=c[t]))return c;if(n!==xe&&ce(n,t))return a[t]=4,n[t];if(f=l.config.globalProperties,ce(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Lr(s,t)?(s[t]=n,!0):r!==xe&&ce(r,t)?(r[t]=n,!0):ce(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:i,type:a}},o){let l;return!!(n[o]||e!==xe&&o[0]!=="$"&&ce(e,o)||Lr(t,o)||ce(i,o)||ce(r,o)||ce(Rn,o)||ce(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ce(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Qs(e){return Q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ss=!0;function Wl(e){const t=$o(e),n=e.proxy,r=e.ctx;ss=!1,t.beforeCreate&&ei(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:p,beforeUpdate:b,updated:I,activated:z,deactivated:O,beforeDestroy:T,beforeUnmount:g,destroyed:x,unmounted:v,render:A,renderTracked:F,renderTriggered:$,errorCaptured:S,serverPrefetch:j,expose:re,inheritAttrs:ue,components:Se,directives:Be,filters:Qe}=t;if(u&&Kl(u,r,null),a)for(const se in a){const J=a[se];te(J)&&(r[se]=J.bind(n))}if(s){const se=s.call(n,n);he(se)&&(e.data=yr(se))}if(ss=!0,i)for(const se in i){const J=i[se],we=te(J)?J.bind(n,n):te(J.get)?J.get.bind(n,n):kt,H=!te(J)&&te(J.set)?J.set.bind(n):kt,Oe=Re({get:we,set:H});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:de=>Oe.value=de})}if(o)for(const se in o)Oo(o[se],r,n,se);if(l){const se=te(l)?l.call(n):l;Reflect.ownKeys(se).forEach(J=>{Xn(J,se[J])})}c&&ei(c,e,"c");function le(se,J){Q(J)?J.forEach(we=>se(we.bind(n))):J&&se(J.bind(n))}if(le($l,f),le(nn,p),le(Tl,b),le(Ll,I),le(Ml,z),le(Il,O),le(Gl,S),le(Bl,F),le(Nl,$),le(Dl,g),le(rn,v),le(jl,j),Q(re))if(re.length){const se=e.exposed||(e.exposed={});re.forEach(J=>{Object.defineProperty(se,J,{get:()=>n[J],set:we=>n[J]=we,enumerable:!0})})}else e.exposed||(e.exposed={});A&&e.render===kt&&(e.render=A),ue!=null&&(e.inheritAttrs=ue),Se&&(e.components=Se),Be&&(e.directives=Be),j&&Po(e)}function Kl(e,t,n=kt){Q(e)&&(e=is(e));for(const r in e){const s=e[r];let i;he(s)?"default"in s?i=_t(s.from||r,s.default,!0):i=_t(s.from||r):i=_t(s),He(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function ei(e,t,n){ut(Q(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oo(e,t,n,r){let s=r.includes(".")?Ro(n,r):()=>n[r];if(Ce(e)){const i=t[e];te(i)&&Ht(s,i)}else if(te(e))Ht(s,e.bind(n));else if(he(e))if(Q(e))e.forEach(i=>Oo(i,t,n,r));else{const i=te(e.handler)?e.handler.bind(n):t[e.handler];te(i)&&Ht(s,i,e)}}function $o(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,o=i.get(t);let l;return o?l=o:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(u=>or(l,u,a,!0)),or(l,t,a)),he(t)&&i.set(t,l),l}function or(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&or(e,i,n,!0),s&&s.forEach(a=>or(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=Yl[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const Yl={data:ti,props:ni,emits:ni,methods:kn,computed:kn,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:kn,directives:kn,watch:Zl,provide:ti,inject:Xl};function ti(e,t){return t?e?function(){return je(te(e)?e.call(this,this):e,te(t)?t.call(this,this):t)}:t:e}function Xl(e,t){return kn(is(e),is(t))}function is(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ue(e,t){return e?[...new Set([].concat(e,t))]:t}function kn(e,t){return e?je(Object.create(null),e,t):t}function ni(e,t){return e?Q(e)&&Q(t)?[...new Set([...e,...t])]:je(Object.create(null),Qs(e),Qs(t??{})):t}function Zl(e,t){if(!e)return t;if(!t)return e;const n=je(Object.create(null),e);for(const r in t)n[r]=Ue(e[r],t[r]);return n}function To(){return{app:null,config:{isNativeTag:Wi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jl=0;function Ql(e,t){return function(r,s=null){te(r)||(r=je({},r)),s!=null&&!he(s)&&(s=null);const i=To(),a=new WeakSet,o=[];let l=!1;const u=i.app={_uid:Jl++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Fc,get config(){return i.config},set config(c){},use(c,...f){return a.has(c)||(c&&te(c.install)?(a.add(c),c.install(u,...f)):te(c)&&(a.add(c),c(u,...f))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,f){return f?(i.components[c]=f,u):i.components[c]},directive(c,f){return f?(i.directives[c]=f,u):i.directives[c]},mount(c,f,p){if(!l){const b=u._ceVNode||E(r,s);return b.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(b,c,p),l=!0,u._container=c,c.__vue_app__=u,Cr(b.component)}},onUnmount(c){o.push(c)},unmount(){l&&(ut(o,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,f){return i.provides[c]=f,u},runWithContext(c){const f=un;un=u;try{return c()}finally{un=f}}};return u}}let un=null;const ec=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ye(t)}Modifiers`]||e[`${tn(t)}Modifiers`];function tc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||xe;let s=n;const i=t.startsWith("update:"),a=i&&ec(r,t.slice(7));a&&(a.trim&&(s=n.map(c=>Ce(c)?c.trim():c)),a.number&&(s=s.map(Ga)));let o,l=r[o=Rr(t)]||r[o=Rr(Ye(t))];!l&&i&&(l=r[o=Rr(tn(t))]),l&&ut(l,e,6,s);const u=r[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,ut(u,e,6,s)}}const nc=new WeakMap;function Lo(e,t,n=!1){const r=n?nc:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},o=!1;if(!te(e)){const l=u=>{const c=Lo(u,t,!0);c&&(o=!0,je(a,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(he(e)&&r.set(e,null),null):(Q(i)?i.forEach(l=>a[l]=null):je(a,i),he(e)&&r.set(e,a),a)}function zr(e,t){return!e||!pr(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ce(e,t[0].toLowerCase()+t.slice(1))||ce(e,tn(t))||ce(e,t))}function ri(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:p,setupState:b,ctx:I,inheritAttrs:z}=e,O=rr(e);let T,g;try{if(n.shapeFlag&4){const v=s||r,A=v;T=yt(u.call(A,v,c,f,b,p,I)),g=o}else{const v=t;T=yt(v.length>1?v(f,{attrs:o,slots:a,emit:l}):v(f,null)),g=t.props?o:rc(o)}}catch(v){Tt.length=0,wr(v,e,1),T=E(nt)}let x=T;if(g&&z!==!1){const v=Object.keys(g),{shapeFlag:A}=x;v.length&&A&7&&(i&&v.some(mr)&&(g=sc(g,i)),x=fn(x,g,!1,!0))}if(n.dirs&&(x=fn(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition){const v=kr(x.type)&&Eo(x)||x;sr(v,n.transition)}return T=x,rr(O),T}function Do(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(dn(s)){if(s.type!==nt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const rc=e=>{let t;for(const n in e)(n==="class"||n==="style"||pr(n))&&((t||(t={}))[n]=e[n]);return t},sc=(e,t)=>{const n={};for(const r in e)(!mr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ic(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:o,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?si(r,a,u):!!a;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const p=c[f];if(jo(a,r,p)&&!zr(u,p))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?si(r,a,u):!0:!!a;return!1}function si(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!ce(e,i)||jo(t,e,i)&&!zr(n,i))return!0}return!1}function jo(e,t,n){const r=e[n],s=t[n];return n==="style"&&he(r)&&he(s)?!xr(r,s):r!==s}function oc({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const No={},Bo=()=>Object.create(No),Go=e=>Object.getPrototypeOf(e)===No;function ac(e,t,n,r=!1){const s={},i=Bo();e.propsDefaults=Object.create(null),Vo(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:bo(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function lc(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,o=pe(s),[l]=e.propsOptions;let u=!1;if((r||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let p=c[f];if(zr(e.emitsOptions,p))continue;const b=t[p];if(l)if(ce(i,p))b!==i[p]&&(i[p]=b,u=!0);else{const I=Ye(p);s[I]=os(l,o,I,b,e,!1)}else b!==i[p]&&(i[p]=b,u=!0)}}}else{Vo(e,t,s,i)&&(u=!0);let c;for(const f in o)(!t||!ce(t,f)&&((c=tn(f))===f||!ce(t,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(s[f]=os(l,o,f,void 0,e,!0)):delete s[f]);if(i!==o)for(const f in i)(!t||!ce(t,f))&&(delete i[f],u=!0)}u&&It(e.attrs,"set","")}function Vo(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(zn(l))continue;const u=t[l];let c;s&&ce(s,c=Ye(l))?!i||!i.includes(c)?n[c]=u:(o||(o={}))[c]=u:zr(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,a=!0)}if(i){const l=pe(n),u=o||xe;for(let c=0;c<i.length;c++){const f=i[c];n[f]=os(s,l,f,u[f],e,!ce(u,f))}}return a}function os(e,t,n,r,s,i){const a=e[n];if(a!=null){const o=ce(a,"default");if(o&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&te(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const c=Gn(s);r=u[n]=l.call(null,t),c()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!o?r=!1:a[1]&&(r===""||r===tn(n))&&(r=!0))}return r}const cc=new WeakMap;function Ho(e,t,n=!1){const r=n?cc:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},o=[];let l=!1;if(!te(e)){const c=f=>{l=!0;const[p,b]=Ho(f,t,!0);je(a,p),b&&o.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return he(e)&&r.set(e,Jt),Jt;if(Q(i))for(let c=0;c<i.length;c++){const f=Ye(i[c]);ii(f)&&(a[f]=xe)}else if(i)for(const c in i){const f=Ye(c);if(ii(f)){const p=i[c],b=a[f]=Q(p)||te(p)?{type:p}:je({},p),I=b.type;let z=!1,O=!0;if(Q(I))for(let T=0;T<I.length;++T){const g=I[T],x=te(g)&&g.name;if(x==="Boolean"){z=!0;break}else x==="String"&&(O=!1)}else z=te(I)&&I.name==="Boolean";b[0]=z,b[1]=O,(z||ce(b,"default"))&&o.push(f)}}const u=[a,o];return he(e)&&r.set(e,u),u}function ii(e){return e[0]!=="$"&&!zn(e)}const Ms=e=>e==="_"||e==="_ctx"||e==="$stable",Is=e=>Q(e)?e.map(yt):[yt(e)],uc=(e,t,n)=>{if(t._n)return t;const r=ne((...s)=>Is(t(...s)),n);return r._c=!1,r},qo=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ms(s))continue;const i=e[s];if(te(i))t[s]=uc(s,i,r);else if(i!=null){const a=Is(i);t[s]=()=>a}}},Uo=(e,t)=>{const n=Is(t);e.slots.default=()=>n},Wo=(e,t,n)=>{for(const r in t)(n||!Ms(r))&&(e[r]=t[r])},dc=(e,t,n)=>{const r=e.slots=Bo();if(e.vnode.shapeFlag&32){const s=t._;s?(Wo(r,t,n),n&&Zi(r,"_",s,!0)):qo(t,r)}else t&&Uo(e,t)},fc=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=xe;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:Wo(s,t,n):(i=!t.$stable,qo(t,s)),a=t}else t&&(Uo(e,t),a={default:1});if(i)for(const o in s)!Ms(o)&&a[o]==null&&delete s[o]},Xe=bc;function pc(e){return mc(e)}function mc(e,t){const n=br();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:p,setScopeId:b=kt,insertStaticContent:I}=e,z=(d,h,y,w=null,k=null,C=null,M=void 0,D=null,L=!!h.dynamicChildren)=>{if(d===h)return;d&&!xn(d,h)&&(w=_(d),de(d,k,C,!0),d=null),h.patchFlag===-2&&(L=!1,h.dynamicChildren=null),h.dynamicChildren&&d&&d.dynamicChildren&&d.dynamicChildren.hasOnce&&(h.dynamicChildren===Jt&&(h.dynamicChildren=[]),h.dynamicChildren.hasOnce=!0);const{type:R,ref:X,shapeFlag:N}=h;switch(R){case Ar:O(d,h,y,w);break;case nt:T(d,h,y,w);break;case Zn:d==null&&g(h,y,w,M);break;case _e:Se(d,h,y,w,k,C,M,D,L);break;default:N&1?A(d,h,y,w,k,C,M,D,L):N&6?Be(d,h,y,w,k,C,M,D,L):(N&64||N&128)&&R.process(d,h,y,w,k,C,M,D,L,P)}X!=null&&k?Sn(X,d&&d.ref,C,h||d,!h):X==null&&d&&d.ref!=null&&Sn(d.ref,null,C,d,!0)},O=(d,h,y,w)=>{if(d==null)r(h.el=o(h.children),y,w);else{const k=h.el=d.el;h.children!==d.children&&u(k,h.children)}},T=(d,h,y,w)=>{d==null?r(h.el=l(h.children||""),y,w):h.el=d.el},g=(d,h,y,w)=>{[d.el,d.anchor]=I(d.children,h,y,w,d.el,d.anchor)},x=({el:d,anchor:h},y,w)=>{let k;for(;d&&d!==h;)k=p(d),r(d,y,w),d=k;r(h,y,w)},v=({el:d,anchor:h})=>{let y;for(;d&&d!==h;)y=p(d),s(d),d=y;s(h)},A=(d,h,y,w,k,C,M,D,L)=>{if(h.type==="svg"?M="svg":h.type==="math"&&(M="mathml"),d==null)F(h,y,w,k,C,M,D,L);else{const R=d.el&&d.el._isVueCE?d.el:null;try{R&&R._beginPatch(),j(d,h,k,C,M,D,L)}finally{R&&R._endPatch()}}},F=(d,h,y,w,k,C,M,D)=>{let L,R;const{props:X,shapeFlag:N,transition:Z,dirs:ee}=d;if(L=d.el=a(d.type,C,X&&X.is,X),N&8?c(L,d.children):N&16&&S(d.children,L,null,w,k,Dr(d,C),M,D),ee&&Kt(d,null,w,"created"),$(L,d,d.scopeId,M,w),X){for(const be in X)be!=="value"&&!zn(be)&&i(L,be,null,X[be],C,w);"value"in X&&i(L,"value",null,X.value,C),(R=X.onVnodeBeforeMount)&&ht(R,w,d)}ee&&Kt(d,null,w,"beforeMount");const ae=hc(k,Z);ae&&Z.beforeEnter(L),r(L,h,y),((R=X&&X.onVnodeMounted)||ae||ee)&&Xe(()=>{try{R&&ht(R,w,d),ae&&Z.enter(L),ee&&Kt(d,null,w,"mounted")}finally{}},k)},$=(d,h,y,w,k)=>{if(y&&b(d,y),w)for(let C=0;C<w.length;C++)b(d,w[C]);if(k){let C=k.subTree;if(h===C||Xo(C.type)&&(C.ssContent===h||C.ssFallback===h)){const M=k.vnode;$(d,M,M.scopeId,M.slotScopeIds,k.parent)}}},S=(d,h,y,w,k,C,M,D,L=0)=>{for(let R=L;R<d.length;R++){const X=d[R]=D?Mt(d[R]):yt(d[R]);z(null,X,h,y,w,k,C,M,D)}},j=(d,h,y,w,k,C,M)=>{const D=h.el=d.el;let{patchFlag:L,dynamicChildren:R,dirs:X}=h;L|=d.patchFlag&16;const N=d.props||xe,Z=h.props||xe;let ee;if(y&&Yt(y,!1),(ee=Z.onVnodeBeforeUpdate)&&ht(ee,y,h,d),X&&Kt(h,d,y,"beforeUpdate"),y&&Yt(y,!0),R&&(!d.dynamicChildren||d.dynamicChildren.length!==R.length)&&(L=0,M=!1,R=null),(N.innerHTML&&Z.innerHTML==null||N.textContent&&Z.textContent==null)&&c(D,""),R?re(d.dynamicChildren,R,D,y,w,Dr(h,k),C):M||J(d,h,D,null,y,w,Dr(h,k),C,!1),L>0){if(L&16)ue(D,N,Z,y,k);else if(L&2&&N.class!==Z.class&&i(D,"class",null,Z.class,k),L&4&&i(D,"style",N.style,Z.style,k),L&8){const ae=h.dynamicProps;for(let be=0;be<ae.length;be++){const ge=ae[be],Pe=N[ge],$e=Z[ge];($e!==Pe||ge==="value")&&i(D,ge,Pe,$e,k,y)}}L&1&&d.children!==h.children&&c(D,h.children)}else!M&&R==null&&ue(D,N,Z,y,k);((ee=Z.onVnodeUpdated)||X)&&Xe(()=>{ee&&ht(ee,y,h,d),X&&Kt(h,d,y,"updated")},w)},re=(d,h,y,w,k,C,M)=>{for(let D=0;D<h.length;D++){const L=d[D],R=h[D],X=L.el||as(L),N=X&&(L.type===_e||!xn(L,R)||L.shapeFlag&198)?f(X):y;z(L,R,N,null,w,k,C,M,!0)}},ue=(d,h,y,w,k)=>{if(h!==y){if(h!==xe)for(const C in h)!zn(C)&&!(C in y)&&i(d,C,h[C],null,k,w);for(const C in y){if(zn(C))continue;const M=y[C],D=h[C];M!==D&&C!=="value"&&i(d,C,D,M,k,w)}"value"in y&&i(d,"value",h.value,y.value,k)}},Se=(d,h,y,w,k,C,M,D,L)=>{const R=h.el=d?d.el:o(""),X=h.anchor=d?d.anchor:o("");let{patchFlag:N,dynamicChildren:Z,slotScopeIds:ee}=h;ee&&(D=D?D.concat(ee):ee),d==null?(r(R,y,w),r(X,y,w),S(h.children||[],y,X,k,C,M,D,L)):N>0&&N&64&&Z&&d.dynamicChildren&&d.dynamicChildren.length===Z.length?(re(d.dynamicChildren,Z,y,k,C,M,D),(h.key!=null||k&&h===k.subTree)&&Ko(d,h,!0)):J(d,h,y,X,k,C,M,D,L)},Be=(d,h,y,w,k,C,M,D,L)=>{h.slotScopeIds=D,d==null?h.shapeFlag&512?k.ctx.activate(h,y,w,M,L):Qe(h,y,w,k,C,M,L):qe(d,h,L)},Qe=(d,h,y,w,k,C,M)=>{const D=d.component=_c(d,w,k);if(Ps(d)&&(D.ctx.renderer=P),zc(D,!1,M),D.asyncDep){if(k&&k.registerDep(D,le,M,C),!d.el){const L=D.subTree=E(nt);T(null,L,h,y),d.placeholder=L.el}}else le(D,d,h,y,k,C,M)},qe=(d,h,y)=>{const w=h.component=d.component;if(ic(d,h,y))if(w.asyncDep&&!w.asyncResolved){h.el=d.el,h.placeholder=d.placeholder,se(w,h,y);return}else w.next=h,w.update();else h.el=d.el,h.placeholder=d.placeholder,w.vnode=h},le=(d,h,y,w,k,C,M)=>{const D=()=>{if(d.isMounted){let{next:N,bu:Z,u:ee,parent:ae,vnode:be}=d;{const pt=Yo(d);if(pt){N&&(N.el=be.el,se(d,N,M)),pt.asyncDep.then(()=>{Xe(()=>{d.isUnmounted||R()},k)});return}}let ge=N,Pe;Yt(d,!1),N?(N.el=be.el,se(d,N,M)):N=be,Z&&Er(Z),(Pe=N.props&&N.props.onVnodeBeforeUpdate)&&ht(Pe,ae,N,be),Yt(d,!0);const $e=ri(d),ft=d.subTree;d.subTree=$e,z(ft,$e,f(ft.el),_(ft),d,k,C),N.el=$e.el,ge===null&&oc(d,$e.el),ee&&Xe(ee,k),(Pe=N.props&&N.props.onVnodeUpdated)&&Xe(()=>ht(Pe,ae,N,be),k)}else{let N;const{el:Z,props:ee}=h,{bm:ae,m:be,parent:ge,root:Pe,type:$e}=d,ft=cn(h);Yt(d,!1),ae&&Er(ae),!ft&&(N=ee&&ee.onVnodeBeforeMount)&&ht(N,ge,h),Yt(d,!0);{Pe.ce&&Pe.ce._hasShadowRoot()&&Pe.ce._injectChildStyle($e,d.parent?d.parent.type:void 0);const pt=d.subTree=ri(d);z(null,pt,y,w,d,k,C),h.el=pt.el}if(be&&Xe(be,k),!ft&&(N=ee&&ee.onVnodeMounted)){const pt=h;Xe(()=>ht(N,ge,pt),k)}(h.shapeFlag&256||ge&&cn(ge.vnode)&&ge.vnode.shapeFlag&256)&&d.a&&Xe(d.a,k),d.isMounted=!0,h=y=w=null}};d.scope.on();const L=d.effect=new to(D);d.scope.off();const R=d.update=L.run.bind(L),X=d.job=L.runIfDirty.bind(L);X.i=d,X.id=d.uid,L.scheduler=()=>Fs(X),Yt(d,!0),R()},se=(d,h,y)=>{h.component=d;const w=d.vnode.props;d.vnode=h,d.next=null,lc(d,h.props,w,y),fc(d,h.children,y),At(),_o(d),Ct()},J=(d,h,y,w,k,C,M,D,L=!1)=>{const R=d&&d.children,X=d?d.shapeFlag:0,N=h.children,{patchFlag:Z,shapeFlag:ee}=h;if(Z>0){if(Z&128){H(R,N,y,w,k,C,M,D,L);return}else if(Z&256){we(R,N,y,w,k,C,M,D,L);return}}ee&8?(X&16&&oe(R,k,C),N!==R&&c(y,N)):X&16?ee&16?H(R,N,y,w,k,C,M,D,L):oe(R,k,C,!0):(X&8&&c(y,""),ee&16&&S(N,y,w,k,C,M,D,L))},we=(d,h,y,w,k,C,M,D,L)=>{d=d||Jt,h=h||Jt;const R=d.length,X=h.length,N=Math.min(R,X);let Z;for(Z=0;Z<N;Z++){const ee=h[Z]=L?Mt(h[Z]):yt(h[Z]);z(d[Z],ee,y,null,k,C,M,D,L)}R>X?oe(d,k,C,!0,!1,N):S(h,y,w,k,C,M,D,L,N)},H=(d,h,y,w,k,C,M,D,L)=>{let R=0;const X=h.length;let N=d.length-1,Z=X-1;for(;R<=N&&R<=Z;){const ee=d[R],ae=h[R]=L?Mt(h[R]):yt(h[R]);if(xn(ee,ae))z(ee,ae,y,null,k,C,M,D,L);else break;R++}for(;R<=N&&R<=Z;){const ee=d[N],ae=h[Z]=L?Mt(h[Z]):yt(h[Z]);if(xn(ee,ae))z(ee,ae,y,null,k,C,M,D,L);else break;N--,Z--}if(R>N){if(R<=Z){const ee=Z+1,ae=ee<X?h[ee].el:w;for(;R<=Z;)z(null,h[R]=L?Mt(h[R]):yt(h[R]),y,ae,k,C,M,D,L),R++}}else if(R>Z)for(;R<=N;)de(d[R],k,C,!0),R++;else{const ee=R,ae=R,be=new Map;for(R=ae;R<=Z;R++){const Ze=h[R]=L?Mt(h[R]):yt(h[R]);Ze.key!=null&&be.set(Ze.key,R)}let ge,Pe=0;const $e=Z-ae+1;let ft=!1,pt=0;const gn=new Array($e);for(R=0;R<$e;R++)gn[R]=0;for(R=ee;R<=N;R++){const Ze=d[R];if(Pe>=$e){de(Ze,k,C,!0);continue}let mt;if(Ze.key!=null)mt=be.get(Ze.key);else for(ge=ae;ge<=Z;ge++)if(gn[ge-ae]===0&&xn(Ze,h[ge])){mt=ge;break}mt===void 0?de(Ze,k,C,!0):(gn[mt-ae]=R+1,mt>=pt?pt=mt:ft=!0,z(Ze,h[mt],y,null,k,C,M,D,L),Pe++)}const Ns=ft?gc(gn):Jt;for(ge=Ns.length-1,R=$e-1;R>=0;R--){const Ze=ae+R,mt=h[Ze],Bs=h[Ze+1],Gs=Ze+1<X?Bs.el||as(Bs):w;gn[R]===0?z(null,mt,y,Gs,k,C,M,D,L):ft&&(ge<0||R!==Ns[ge]?Oe(mt,y,Gs,2):ge--)}}},Oe=(d,h,y,w,k=null)=>{const{el:C,type:M,transition:D,children:L,shapeFlag:R}=d;if(R&6){Oe(d.component.subTree,h,y,w);return}if(R&128){d.suspense.move(h,y,w);return}if(R&64){M.move(d,h,y,P);return}if(M===_e){r(C,h,y);for(let N=0;N<L.length;N++)Oe(L[N],h,y,w);r(d.anchor,h,y);return}if(M===Zn){x(d,h,y);return}if(w!==2&&R&1&&D)if(w===0)D.persisted&&!C[Tr]?r(C,h,y):(D.beforeEnter(C),r(C,h,y),Xe(()=>D.enter(C),k));else{const{leave:N,delayLeave:Z,afterLeave:ee}=D,ae=()=>{d.ctx.isUnmounted?s(C):r(C,h,y)},be=()=>{const ge=C._isLeaving||!!C[Tr];C._isLeaving&&C[Tr](!0),D.persisted&&!ge?ae():N(C,()=>{ae(),ee&&ee()})};Z?Z(C,ae,be):be()}else r(C,h,y)},de=(d,h,y,w=!1,k=!1)=>{const{type:C,props:M,ref:D,children:L,dynamicChildren:R,shapeFlag:X,patchFlag:N,dirs:Z,cacheIndex:ee,memo:ae}=d;if((N===-2||R&&R.hasOnce)&&(k=!1),D!=null&&(At(),Sn(D,null,y,d,!0),Ct()),ee!=null&&(!d.ctx||d.ctx===h)&&(h.renderCache[ee]=void 0),X&256){h.ctx.deactivate(d);return}const be=X&1&&Z,ge=!cn(d);let Pe;if(ge&&(Pe=M&&M.onVnodeBeforeUnmount)&&ht(Pe,h,d),X&6)me(d.component,y,w);else{if(X&128){d.suspense.unmount(y,w);return}be&&Kt(d,null,h,"beforeUnmount"),X&64?d.type.remove(d,h,y,P,w):R&&!R.hasOnce&&(C!==_e||N>0&&N&64)?oe(R,h,y,!1,!0):(C===_e&&N&384||!k&&X&16)&&oe(L,h,y),w&&it(d)}const $e=ae!=null&&ee==null;(ge&&(Pe=M&&M.onVnodeUnmounted)||be||$e)&&Xe(()=>{Pe&&ht(Pe,h,d),be&&Kt(d,null,h,"unmounted"),$e&&(d.el=null)},y)},it=d=>{const{type:h,el:y,anchor:w,transition:k}=d,C=h===_e;if(C&&!k){Fe(y,w);return}if(h===Zn){v(d),k&&!k.persisted&&k.afterLeave&&k.afterLeave();return}const M=C?ns(d):d,D=()=>{C?f(y)&&Fe(y,w):s(y),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(M&&M.shapeFlag&1&&k&&!k.persisted){const{leave:L,delayLeave:R}=k,X=M.el,N=()=>L(X,D);R?R(X,D,N):N()}else D()},Fe=(d,h)=>{let y;for(;d!==h;)y=p(d),s(d),d=y;s(h)},me=(d,h,y)=>{const{bum:w,scope:k,job:C,subTree:M,um:D,m:L,a:R}=d;oi(L),oi(R),w&&Er(w),k.stop(),C?(C.flags|=8,de(M,d,h,y)):d.vnode.el&&M&&(M.transition=d.vnode.transition,de(M,d,h,y)),D&&Xe(D,h),Xe(()=>{d.isUnmounted=!0},h)},oe=(d,h,y,w=!1,k=!1,C=0)=>{for(let M=C;M<d.length;M++)de(d[M],h,y,w,k)},_=d=>{if(d.shapeFlag&6)return _(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),y=h&&h[Fl];return y?p(y):h},B=(d,h,y)=>{const w=d&&h._vnode?void 0:d&&d.component?d.component.uid:kc();Cl(()=>{d==null?h._vnode&&de(h._vnode,null,null,!0):z(h._vnode||null,d,h,null,null,null,y),h._vnode=d},w)},P={p:z,um:de,m:Oe,r:it,mt:Qe,mc:S,pc:J,pbc:re,n:_,o:e};return{render:B,hydrate:void 0,createApp:Ql(B)}}function Dr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Yt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function hc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ko(e,t,n=!1){const r=e.children,s=t.children;if(Q(r)&&Q(s))for(let i=0;i<r.length;i++){const a=r[i];let o=s[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[i]=Mt(s[i]),o.el=a.el),!n&&o.patchFlag!==-2&&Ko(a,o)),o.type===Ar&&(o.patchFlag===-1&&(o=s[i]=Mt(o)),o.el=a.el),o.type===nt&&!o.el&&(o.el=a.el)}}function gc(e){const t=e.slice(),n=[0];let r,s,i,a,o;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)o=i+a>>1,e[n[o]]<u?i=o+1:a=o;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Yo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Yo(t)}function oi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function as(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?as(t.subTree):null}const Xo=e=>e.__isSuspense;function bc(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):Al(e)}const _e=Symbol.for("v-fgt"),Ar=Symbol.for("v-txt"),nt=Symbol.for("v-cmt"),Zn=Symbol.for("v-stc"),Tt=[];let Je=null;function G(e=!1){Tt.push(Je=e?null:[])}function Os(){Tt.pop(),Je=Tt[Tt.length-1]||null}let On=1;function ar(e,t=!1){On+=e,e<0&&Je&&t&&(Je.hasOnce=!0)}function Zo(e){return e.dynamicChildren=On>0?Je||Jt:null,Os(),On>0&&Je&&Je.push(e),e}function K(e,t,n,r,s,i){return Zo(m(e,t,n,r,s,i,!0))}function rt(e,t,n,r,s){return Zo(E(e,t,n,r,s,!0))}function dn(e){return e?e.__v_isVNode===!0:!1}function xn(e,t){return e.type===t.type&&e.key===t.key}const Jo=({key:e})=>e??null,Jn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ce(e)||He(e)||te(e)?{i:De,r:e,k:t,f:!!n}:e:null);function m(e,t=null,n=null,r=0,s=null,i=e===_e?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jo(t),ref:t&&Jn(t),scopeId:Co,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:De};return o?(lr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Ce(n)?8:16),On>0&&!a&&Je&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Je.push(l),l}const E=xc;function xc(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Hl)&&(e=nt),dn(e)){const o=fn(e,t,!0);return n&&lr(o,n),On>0&&!i&&Je&&(o.shapeFlag&6?Je[Je.indexOf(e)]=o:Je.push(o)),o.patchFlag=-2,o}if(Ec(e)&&(e=e.__vccOpts),t){t=vc(t);let{class:o,style:l}=t;o&&!Ce(o)&&(t.class=W(o)),he(l)&&(Es(l)&&!Q(l)&&(l=je({},l)),t.style=st(l))}const a=Ce(e)?1:Xo(e)?128:kr(e)?64:he(e)?4:te(e)?2:0;return m(e,t,n,r,s,a,i,!0)}function vc(e){return e?Es(e)||Go(e)?je({},e):e:null}function fn(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:o,transition:l}=e,u=t?yc(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Jo(u),ref:t&&t.ref?n&&i?Q(i)?i.concat(Jn(t)):[i,Jn(t)]:Jn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&fn(e.ssContent),ssFallback:e.ssFallback&&fn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&r&&sr(c,l.clone(c)),c}function Le(e=" ",t=0){return E(Ar,null,e,t)}function ls(e,t){const n=E(Zn,null,e);return n.staticCount=t,n}function pn(e="",t=!1){return t?(G(),rt(nt,null,e)):E(nt,null,e)}function yt(e){return e==null||typeof e=="boolean"?E(nt):Q(e)?E(_e,null,e.slice()):dn(e)?Mt(e):E(Ar,null,String(e))}function Mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:fn(e)}function lr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),lr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Go(t)?t._ctx=De:s===3&&De&&(De.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(te(t)){if(r&65){lr(e,{default:t});return}t={default:t,_ctx:De},n=32}else t=String(t),r&64?(n=16,t=[Le(t)]):n=8;e.children=t,e.shapeFlag|=n}function yc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=W([t.class,r.class]));else if(s==="style")t.style=st([t.style,r.style]);else if(pr(s)){const i=t[s],a=r[s];a&&i!==a&&!(Q(i)&&i.includes(a))?t[s]=i?[].concat(i,a):a:a==null&&i==null&&!mr(s)&&(t[s]=a)}else s!==""&&(t[s]=r[s])}return t}function ht(e,t,n,r=null){ut(e,t,7,[n,r])}const wc=To();let Qo=0;function kc(){return Qo}function _c(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||wc,i={uid:Qo++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Za(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ho(r,s),emitsOptions:Lo(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=tc.bind(null,i),e.ce&&e.ce(i),i}let Ve=null;const ea=()=>Ve||De;let cr,$n;{const e=br(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};cr=t("__VUE_INSTANCE_SETTERS__",n=>Ve=n),$n=t("__VUE_SSR_SETTERS__",n=>Tn=n)}const Gn=e=>{const t=Ve;return cr(e),e.scope.on(),()=>{e.scope.off(),cr(t)}},ai=()=>{Ve&&Ve.scope.off(),cr(null)};function ta(e){return e.vnode.shapeFlag&4}let Tn=!1;function zc(e,t=!1,n=!1){t&&$n(t);const{props:r,children:s}=e.vnode,i=ta(e);ac(e,r,i,t),dc(e,s,n||t);const a=i?Ac(e,t):void 0;return t&&$n(!1),a}function Ac(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ul);const{setup:r}=n;if(r){At();const s=e.setupContext=r.length>1?Sc(e):null,i=Gn(e),a=Nn(r,e,0,[e.props,s]),o=Ki(a);if(Ct(),i(),(o||e.sp)&&!cn(e)&&Po(e),o){if(a.then(ai,ai),t)return a.then(l=>{$n(!0);try{li(e,l,t)}finally{$n(!1)}}).catch(l=>{wr(l,e,0)});e.asyncDep=a}else li(e,a)}else na(e)}function li(e,t,n){te(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=vo(t)),na(e)}function na(e,t,n){const r=e.type;e.render||(e.render=r.render||kt);{const s=Gn(e);At();try{Wl(e)}finally{Ct(),s()}}}const Cc={get(e,t){return Ge(e,"get",""),e[t]}};function Sc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Cc),slots:e.slots,emit:e.emit,expose:t}}function Cr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(vo(hl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Rn)return Rn[n](e)},has(t,n){return n in t||n in Rn}})):e.proxy}function Rc(e,t=!0){return te(e)?e.displayName||e.name:e.name||t&&e.__name}function Ec(e){return te(e)&&"__vccOpts"in e}const Re=(e,t)=>yl(e,t,Tn);function Ln(e,t,n){try{ar(-1);const r=arguments.length;return r===2?he(t)&&!Q(t)?dn(t)?E(e,null,[t]):E(e,t):E(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&dn(n)&&(n=[n]),E(e,t,n))}finally{ar(1)}}const Fc="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cs;const ci=typeof window<"u"&&window.trustedTypes;if(ci)try{cs=ci.createPolicy("vue",{createHTML:e=>e})}catch{}const ra=cs?e=>cs.createHTML(e):e=>e,Pc="http://www.w3.org/2000/svg",Mc="http://www.w3.org/1998/Math/MathML",Pt=typeof document<"u"?document:null,ui=Pt&&Pt.createElement("template"),Ic={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Pt.createElementNS(Pc,e):t==="mathml"?Pt.createElementNS(Mc,e):n?Pt.createElement(e,{is:n}):Pt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Pt.createTextNode(e),createComment:e=>Pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ui.innerHTML=ra(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const o=ui.content;if(r==="svg"||r==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Oc=Symbol("_vtc");function $c(e,t,n){const r=e[Oc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ur=Symbol("_vod"),sa=Symbol("_vsh"),jr={name:"show",beforeMount(e,{value:t},{transition:n}){e[ur]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):vn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),vn(e,!0),r.enter(e)):r.leave(e,()=>{vn(e,!1)}):vn(e,t))},beforeUnmount(e,{value:t}){vn(e,t)}};function vn(e,t){e.style.display=t?e[ur]:"none",e[sa]=!t}const Tc=Symbol(""),Lc=/(?:^|;)\s*display\s*:/;function Dc(e,t,n){const r=e.style,s=Ce(n);let i=!1;if(n&&!s){if(t)if(Ce(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&_n(r,o,"")}else for(const a in t)n[a]==null&&_n(r,a,"");for(const a in n){a==="display"&&(i=!0);const o=n[a];o!=null?Nc(e,a,!Ce(t)&&t?t[a]:void 0,o)||_n(r,a,o):_n(r,a,"")}}else if(s){if(t!==n){const a=r[Tc];a&&(n+=";"+a),r.cssText=n,i=Lc.test(n)}}else t&&e.removeAttribute("style");ur in e&&((!s||t!==n)&&(e[ur]=i?r.display:""),e[sa]&&(r.display="none"))}const Un=/\s*!important$/;function _n(e,t,n){if(Q(n))n.forEach(r=>_n(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))Un.test(n)?e.setProperty(t,n.replace(Un,""),"important"):e.setProperty(t,n);else{const r=jc(e,t);Un.test(n)?e.setProperty(tn(r),n.replace(Un,""),"important"):e[r]=n}}const di=["Webkit","Moz","ms"],Nr={};function jc(e,t){const n=Nr[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return Nr[t]=r;r=gr(r);for(let s=0;s<di.length;s++){const i=di[s]+r;if(i in e)return Nr[t]=i}return t}function Nc(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ce(r)&&n===r}const fi="http://www.w3.org/1999/xlink";function pi(e,t,n,r,s,i=Ka(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(fi,t.slice(6,t.length)):e.setAttributeNS(fi,t,n):n==null||i&&!Ji(n)?e.removeAttribute(t):e.setAttribute(t,i?"":ct(n)?String(n):n)}function mi(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ra(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=Ji(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Bc(e,t,n,r){e.addEventListener(t,n,r)}function Gc(e,t,n,r){e.removeEventListener(t,n,r)}const hi=Symbol("_vei");function Vc(e,t,n,r,s=null){const i=e[hi]||(e[hi]={}),a=i[t];if(r&&a)a.value=r;else{const[o,l]=Uc(t);if(r){const u=i[t]=Yc(r,s);Bc(e,o,u,l)}else a&&(Gc(e,o,a,l),i[t]=void 0)}}const Hc=/(Once|Passive|Capture)$/,qc=/^on:?(?:Once|Passive|Capture)$/;function Uc(e){let t,n;for(;(n=e.match(Hc))&&!qc.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):tn(e.slice(2)),t]}let Br=0;const Wc=Promise.resolve(),Kc=()=>Br||(Wc.then(()=>Br=0),Br=Date.now());function Yc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(Q(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const a=s.slice(),o=[r];for(let l=0;l<a.length&&!r._stopped;l++){const u=a[l];u&&ut(u,t,5,o)}}else ut(s,t,5,[r])};return n.value=e,n.attached=Kc(),n}const gi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Xc=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?$c(e,r,a):t==="style"?Dc(e,n,r):pr(t)?mr(t)||Vc(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Zc(e,t,r,a))?(mi(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&pi(e,t,r,a,i,t!=="value")):e._isVueCE&&(Jc(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ce(r)))?mi(e,Ye(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),pi(e,t,r,a))};function Zc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&gi(t)&&te(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return gi(t)&&Ce(n)?!1:t in e}function Jc(e,t){const n=e._def.props;if(!n)return!1;const r=Ye(t);return Array.isArray(n)?n.some(s=>Ye(s)===r):Object.keys(n).some(s=>Ye(s)===r)}const Qc=je({patchProp:Xc},Ic);let bi;function eu(){return bi||(bi=pc(Qc))}const tu=((...e)=>{const t=eu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=ru(r);if(!s)return;const i=t._component;!te(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,nu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function nu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ru(e){return Ce(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:r,iconNode:s,name:i,class:a,...o},{slots:l})=>Ln("svg",{...Wn,width:e||Wn.width,height:e||Wn.height,stroke:r||Wn.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${su(i??"icon")}`],...o},[...s.map(u=>Ln(...u)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(e,t)=>(n,{slots:r})=>Ln(iu,{...n,iconNode:t,name:e},r);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=Ee("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=Ee("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=Ee("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=Ee("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=Ee("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=Ee("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=Ee("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=Ee("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=Ee("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=Ee("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=Ee("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=Ee("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=Ee("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=Ee("RepeatIcon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=Ee("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=Ee("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=Ee("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=Ee("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=Ee("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=Ee("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=Ee("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),yu=ye({__name:"ThemeToggle",setup(e){const t=ke(!0);function n(){t.value=!t.value,t.value?(document.documentElement.classList.add("dark"),localStorage.setItem("aura-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("aura-theme","light"))}return nn(()=>{const r=localStorage.getItem("aura-theme");r?t.value=r==="dark":t.value=window.matchMedia("(prefers-color-scheme: dark)").matches,t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),(r,s)=>(G(),K("button",{type:"button",class:"relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"切换亮色 / 暗色模式",onClick:n},[t.value?(G(),rt(V(bu),{key:0,class:"h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400"})):(G(),rt(V(pu),{key:1,class:"h-4 w-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-indigo-600"}))]))}}),wu={class:"sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80 transition-colors"},ku={class:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"},_u={class:"flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md shadow-blue-500/20 text-white transition-transform duration-300 group-hover:scale-105"},zu={class:"hidden md:flex items-center gap-6 text-sm font-medium"},Au={class:"flex items-center gap-3"},Cu={href:"https://github.com",target:"_blank",rel:"noopener noreferrer",class:"flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"GitHub 仓库"},Su=ye({__name:"Header",setup(e){return(t,n)=>{const r=Bn("router-link");return G(),K("header",wu,[m("div",ku,[E(r,{to:"/",class:"flex items-center gap-2.5 group"},{default:ne(()=>[m("div",_u,[E(V(at),{class:"h-5 w-5"})]),n[0]||(n[0]=m("div",{class:"flex flex-col"},[m("div",{class:"flex items-center gap-1.5"},[m("span",{class:"text-lg font-black tracking-tight text-zinc-900 dark:text-white"},[Le(" Aura"),m("span",{class:"text-blue-600 dark:text-blue-400"},"UI")]),m("span",{class:"rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300"}," Vue 3.5 ")]),m("span",{class:"text-[10px] text-zinc-400"},"动效原子代码库")],-1))]),_:1}),m("nav",zu,[E(r,{to:"/",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:ne(()=>[...n[1]||(n[1]=[Le(" 官网首页 ",-1)])]),_:1}),E(r,{to:"/docs/border-beam",class:"inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:ne(()=>[E(V(ds),{class:"h-4 w-4"}),n[2]||(n[2]=m("span",null,"组件库 (8)",-1))]),_:1}),n[3]||(n[3]=m("a",{href:"#features",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}," 核心特性 ",-1))]),m("div",Au,[E(yu),m("a",Cu,[E(V(uu),{class:"h-4 w-4"})]),E(r,{to:"/docs/border-beam",class:"hidden sm:inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"},{default:ne(()=>[...n[4]||(n[4]=[Le(" 浏览代码 ",-1)])]),_:1})])])])}}}),Ru={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50 transition-colors"},Eu={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Fu={class:"flex flex-col md:flex-row items-center justify-between gap-6"},Pu={class:"flex items-center gap-3"},Mu={class:"flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"},Iu={class:"flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"},Ou={class:"inline-flex items-center gap-1"},$u=ye({__name:"Footer",setup(e){return(t,n)=>(G(),K("footer",Ru,[m("div",Eu,[m("div",Fu,[m("div",Pu,[m("div",Mu,[E(V(at),{class:"h-4 w-4"})]),n[0]||(n[0]=m("div",null,[m("p",{class:"text-sm font-bold text-zinc-900 dark:text-zinc-100"}," Aura UI (Vue 3) "),m("p",{class:"text-xs text-zinc-500 dark:text-zinc-400"}," 对标 Magic UI / Aceternity UI，属于 Vue 3 的动效原子代码库 ")],-1))]),m("div",Iu,[n[3]||(n[3]=m("span",null,"采用 MIT 协议开源，完全支持 Copy & Paste 即用",-1)),n[4]||(n[4]=m("span",null,"•",-1)),m("span",Ou,[n[1]||(n[1]=Le(" Built with ",-1)),E(V(du),{class:"h-3 w-3 text-red-500 fill-red-500"}),n[2]||(n[2]=Le(" for Vue 3 ecosystem ",-1))])])])])]))}}),Tu={class:"min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-200"},Lu={class:"flex-1"},Du=ye({__name:"App",setup(e){return(t,n)=>{const r=Bn("router-view");return G(),K("div",Tu,[E(Su),m("div",Lu,[E(r)]),E($u)])}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ln=typeof document<"u";function aa(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ju(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&aa(e.default)}const fe=Object.assign;function Gr(e,t){const n={};for(const r in t){const s=t[r];n[r]=dt(s)?s.map(e):e(s)}return n}const En=()=>{},dt=Array.isArray;function vi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const la=/#/g,Nu=/&/g,Bu=/\//g,Gu=/=/g,Vu=/\?/g,ca=/\+/g,Hu=/%5B/g,qu=/%5D/g,ua=/%5E/g,Uu=/%60/g,da=/%7B/g,Wu=/%7C/g,fa=/%7D/g,Ku=/%20/g;function $s(e){return e==null?"":encodeURI(""+e).replace(Wu,"|").replace(Hu,"[").replace(qu,"]")}function Yu(e){return $s(e).replace(da,"{").replace(fa,"}").replace(ua,"^")}function ps(e){return $s(e).replace(ca,"%2B").replace(Ku,"+").replace(la,"%23").replace(Nu,"%26").replace(Uu,"`").replace(da,"{").replace(fa,"}").replace(ua,"^")}function Xu(e){return ps(e).replace(Gu,"%3D")}function Zu(e){return $s(e).replace(la,"%23").replace(Vu,"%3F")}function Ju(e){return Zu(e).replace(Bu,"%2F")}function Dn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Qu=/\/$/,ed=e=>e.replace(Qu,"");function Vr(e,t,n="/"){let r,s={},i="",a="";const o=t.indexOf("#");let l=t.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(r=t.slice(0,l),i=t.slice(l,o>0?o:t.length),s=e(i.slice(1))),o>=0&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=sd(r??t,n),{fullPath:r+i+a,path:r,query:s,hash:Dn(a)}}function td(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function yi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function nd(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mn(t.matched[r],n.matched[s])&&pa(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function pa(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!rd(e[n],t[n]))return!1;return!0}function rd(e,t){return dt(e)?wi(e,t):dt(t)?wi(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function wi(e,t){return dt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function sd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ms=(function(e){return e.pop="pop",e.push="push",e})({}),Hr=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function id(e){if(!e)if(ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ed(e)}const od=/^[^#]+#/;function ad(e,t){return e.replace(od,"#")+t}function ld(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Sr=()=>({left:window.scrollX,top:window.scrollY});function cd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ld(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ki(e,t){return(history.state?history.state.position-t:-1)+e}const hs=new Map;function ud(e,t){hs.set(e,t)}function dd(e){const t=hs.get(e);return hs.delete(e),t}function fd(e){return typeof e=="string"||e&&typeof e=="object"}function ma(e){return typeof e=="string"||typeof e=="symbol"}let ze=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ha=Symbol("");ze.MATCHER_NOT_FOUND+"",ze.NAVIGATION_GUARD_REDIRECT+"",ze.NAVIGATION_ABORTED+"",ze.NAVIGATION_CANCELLED+"",ze.NAVIGATION_DUPLICATED+"";function hn(e,t){return fe(new Error,{type:e,[ha]:!0},t)}function Et(e,t){return e instanceof Error&&ha in e&&(t==null||!!(e.type&t))}const pd=["params","query","hash"];function md(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of pd)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function hd(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(ca," "),i=s.indexOf("="),a=Dn(i<0?s:s.slice(0,i)),o=i<0?null:Dn(s.slice(i+1));if(a in t){let l=t[a];dt(l)||(l=t[a]=[l]),l.push(o)}else t[a]=o}return t}function _i(e){let t="";for(let n in e){const r=e[n];if(n=Xu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(dt(r)?r.map(s=>s&&ps(s)):[r&&ps(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function gd(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=dt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const bd=Symbol(""),zi=Symbol(""),Ts=Symbol(""),Ls=Symbol(""),gs=Symbol("");function yn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Bt(e,t,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const u=p=>{p===!1?l(hn(ze.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?l(p):fd(p)?l(hn(ze.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(a&&r.enterCallbacks[s]===a&&typeof p=="function"&&a.push(p),o())},c=i(()=>e.call(r&&r.instances[s],t,n,u));let f=Promise.resolve(c);e.length<3&&(f=f.then(u)),f.catch(p=>l(p))})}function qr(e,t,n,r,s=i=>i()){const i=[];for(const a of e)for(const o in a.components){let l=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(aa(l)){const u=(l.__vccOpts||l)[t];u&&i.push(Bt(u,n,r,a,o,s))}else{let u=l();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=ju(c)?c.default:c;a.mods[o]=c,a.components[o]=f;const p=(f.__vccOpts||f)[t];return p&&Bt(p,n,r,a,o,s)()}))}}return i}function xd(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const o=t.matched[a];o&&(e.matched.find(u=>mn(u,o))?r.push(o):n.push(o));const l=e.matched[a];l&&(t.matched.find(u=>mn(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let vd=()=>location.protocol+"//"+location.host;function ga(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,o=s.slice(a);return o[0]!=="/"&&(o="/"+o),yi(o,"")}return yi(n,e)+r+s}function yd(e,t,n,r){let s=[],i=[],a=null;const o=({state:p})=>{const b=ga(e,location),I=n.value,z=t.value;let O=0;if(p){if(n.value=b,t.value=p,a&&a===I){a=null;return}O=z?p.position-z.position:0}else r(b);s.forEach(T=>{T(n.value,I,{delta:O,type:ms.pop,direction:O?O>0?Hr.forward:Hr.back:Hr.unknown})})};function l(){a=n.value}function u(p){s.push(p);const b=()=>{const I=s.indexOf(p);I>-1&&s.splice(I,1)};return i.push(b),b}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(fe({},p.state,{scroll:Sr()}),"")}}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:f}}function Ai(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Sr():null}}function wd(e){const{history:t,location:n}=window,r={value:ga(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:vd()+e+l;try{t[c?"replaceState":"pushState"](u,"",p),s.value=u}catch(b){console.error(b),n[c?"replace":"assign"](p)}}function a(l,u){i(l,fe({},t.state,Ai(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function o(l,u){const c=fe({},s.value,t.state,{forward:l,scroll:Sr()});i(c.current,c,!0),i(l,fe({},Ai(r.value,l,null),{position:c.position+1},u),!1),r.value=l}return{location:r,state:s,push:o,replace:a}}function kd(e){e=id(e);const t=wd(e),n=yd(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=fe({location:"",base:e,go:r,createHref:ad.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Qt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ie=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ie||{});const _d={type:Qt.Static,value:""},zd=/[a-zA-Z0-9_]/;function Ad(e){if(!e)return[[]];if(e==="/")return[[_d]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${u}": ${b}`)}let n=Ie.Static,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let o=0,l,u="",c="";function f(){u&&(n===Ie.Static?i.push({type:Qt.Static,value:u}):n===Ie.Param||n===Ie.ParamRegExp||n===Ie.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Qt.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==Ie.ParamRegExp){r=n,n=Ie.EscapeNext;continue}switch(n){case Ie.Static:l==="/"?(u&&f(),a()):l===":"?(f(),n=Ie.Param):p();break;case Ie.EscapeNext:p(),n=r;break;case Ie.Param:l==="("?n=Ie.ParamRegExp:zd.test(l)?p():(f(),n=Ie.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Ie.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=Ie.ParamRegExpEnd:c+=l;break;case Ie.ParamRegExpEnd:f(),n=Ie.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:t("Unknown state");break}}return n===Ie.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),a(),s}const Ci="[^/]+?",Cd={sensitive:!1,strict:!1,start:!0,end:!0};var We=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(We||{});const Sd=/[.+*?^${}()[\]/\\]/g;function Rd(e,t){const n=fe({},Cd,t),r=[];let s=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[We.Root];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let b=We.Segment+(n.sensitive?We.BonusCaseSensitive:0);if(p.type===Qt.Static)f||(s+="/"),s+=p.value.replace(Sd,"\\$&"),b+=We.Static;else if(p.type===Qt.Param){const{value:I,repeatable:z,optional:O,regexp:T}=p;i.push({name:I,repeatable:z,optional:O});const g=T||Ci;if(g!==Ci){b+=We.BonusCustomRegExp;try{`${g}`}catch(v){throw new Error(`Invalid custom RegExp for param "${I}" (${g}): `+v.message)}}let x=z?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;f||(x=O&&u.length<2?`(?:/${x})`:"/"+x),O&&(x+="?"),s+=x,b+=We.Dynamic,O&&(b+=We.BonusOptional),z&&(b+=We.BonusRepeatable),g===".*"&&(b+=We.BonusWildcard)}c.push(b)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=We.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function o(u){const c=u.match(a),f={};if(!c)return null;for(let p=1;p<c.length;p++){const b=c[p]||"",I=i[p-1];f[I.name]=b&&I.repeatable?b.split("/"):b}return f}function l(u){let c="",f=!1;for(const p of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const b of p)if(b.type===Qt.Static)c+=b.value;else if(b.type===Qt.Param){const{value:I,repeatable:z,optional:O}=b,T=I in u?u[I]:"";if(dt(T)&&!z)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const g=dt(T)?T.join("/"):T;if(!g)if(O)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);c+=g}}return c||"/"}return{re:a,score:r,keys:i,parse:o,stringify:l}}function Ed(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===We.Static+We.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===We.Static+We.Segment?1:-1:0}function ba(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Ed(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Si(r))return 1;if(Si(s))return-1}return s.length-r.length}function Si(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Fd={strict:!1,end:!0,sensitive:!1};function Pd(e,t,n){const r=Rd(Ad(e.path),n),s=fe(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Md(e,t){const n=[],r=new Map;t=vi(Fd,t);function s(f){return r.get(f)}function i(f,p,b){const I=!b,z=Ei(f);z.aliasOf=b&&b.record;const O=vi(t,f),T=[z];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const A of v)T.push(Ei(fe({},z,{components:b?b.record.components:z.components,path:A,aliasOf:b?b.record:z})))}let g,x;for(const v of T){const{path:A}=v;if(p&&A[0]!=="/"){const F=p.record.path,$=F[F.length-1]==="/"?"":"/";v.path=p.record.path+(A&&$+A)}if(g=Pd(v,p,O),b?b.alias.push(g):(x=x||g,x!==g&&x.alias.push(g),I&&f.name&&!Fi(g)&&a(f.name)),xa(g)&&l(g),z.children){const F=z.children;for(let $=0;$<F.length;$++)i(F[$],g,b&&b.children[$])}b=b||g}return x?()=>{a(x)}:En}function a(f){if(ma(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(a),p.alias.forEach(a))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return n}function l(f){const p=$d(f,n);n.splice(p,0,f),f.record.name&&!Fi(f)&&r.set(f.record.name,f)}function u(f,p){let b,I={},z,O;if("name"in f&&f.name){if(b=r.get(f.name),!b)throw hn(ze.MATCHER_NOT_FOUND,{location:f});O=b.record.name,I=fe(Ri(p.params,b.keys.filter(x=>!x.optional).concat(b.parent?b.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),f.params&&Ri(f.params,b.keys.map(x=>x.name))),z=b.stringify(I)}else if(f.path!=null)z=f.path,b=n.find(x=>x.re.test(z)),b&&(I=b.parse(z),O=b.record.name);else{if(b=p.name?r.get(p.name):n.find(x=>x.re.test(p.path)),!b)throw hn(ze.MATCHER_NOT_FOUND,{location:f,currentLocation:p});O=b.record.name,I=fe({},p.params,f.params),z=b.stringify(I)}const T=[];let g=b;for(;g;)T.unshift(g.record),g=g.parent;return{name:O,path:z,params:I,matched:T,meta:Od(T)}}e.forEach(f=>i(f));function c(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:a,clearRoutes:c,getRoutes:o,getRecordMatcher:s}}function Ri(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ei(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Id(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Id(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Fi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Od(e){return e.reduce((t,n)=>fe(t,n.meta),{})}function $d(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;ba(e,t[i])<0?r=i:n=i+1}const s=Td(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Td(e){let t=e;for(;t=t.parent;)if(xa(t)&&ba(e,t)===0)return t}function xa({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Pi(e){const t=_t(Ts),n=_t(Ls),r=Re(()=>{const l=V(e.to);return t.resolve(l)}),s=Re(()=>{const{matched:l}=r.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const p=f.findIndex(mn.bind(null,c));if(p>-1)return p;const b=Mi(l[u-2]);return u>1&&Mi(c)===b&&f[f.length-1].path!==b?f.findIndex(mn.bind(null,l[u-2])):p}),i=Re(()=>s.value>-1&&Bd(n.params,r.value.params)),a=Re(()=>s.value>-1&&s.value===n.matched.length-1&&pa(n.params,r.value.params));function o(l={}){if(Nd(l)){const u=t[V(e.replace)?"replace":"push"](V(e.to)).catch(En);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Re(()=>r.value.href),isActive:i,isExactActive:a,navigate:o}}function Ld(e){return e.length===1?e[0]:e}const Dd=ye({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Pi,setup(e,{slots:t}){const n=yr(Pi(e)),{options:r}=_t(Ts),s=Re(()=>({[Ii(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ii(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Ld(t.default(n));return e.custom?i:Ln("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),jd=Dd;function Nd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Bd(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!dt(s)||s.length!==r.length||r.some((i,a)=>i.valueOf()!==s[a].valueOf()))return!1}return!0}function Mi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ii=(e,t,n)=>e??t??n,Gd=ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=_t(gs),s=Re(()=>e.route||r.value),i=_t(zi,0),a=Re(()=>{let u=V(i);const{matched:c}=s.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),o=Re(()=>s.value.matched[a.value]);Xn(zi,Re(()=>a.value+1)),Xn(bd,o),Xn(gs,s);const l=ke();return Ht(()=>[l.value,o.value,e.name],([u,c,f],[p,b,I])=>{c&&(c.instances[f]=u,b&&b!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=b.leaveGuards),c.updateGuards.size||(c.updateGuards=b.updateGuards))),u&&c&&(!b||!mn(c,b)||!p)&&(c.enterCallbacks[f]||[]).forEach(z=>z(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,f=o.value,p=f&&f.components[c];if(!p)return Oi(n.default,{Component:p,route:u});const b=f.props[c],I=b?b===!0?u.params:typeof b=="function"?b(u):b:null,O=Ln(p,fe({},I,t,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Oi(n.default,{Component:O,route:u})||O}}});function Oi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Vd=Gd;function Hd(e){const t=Md(e.routes,e),n=e.parseQuery||hd,r=e.stringifyQuery||_i,s=e.history,i=yn(),a=yn(),o=yn(),l=gl(Dt);let u=Dt;ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Gr.bind(null,_=>""+_),f=Gr.bind(null,Ju),p=Gr.bind(null,Dn);function b(_,B){let P,Y;return ma(_)?(P=t.getRecordMatcher(_),Y=B):Y=_,t.addRoute(Y,P)}function I(_){const B=t.getRecordMatcher(_);B&&t.removeRoute(B)}function z(){return t.getRoutes().map(_=>_.record)}function O(_){return!!t.getRecordMatcher(_)}function T(_,B){if(B=fe({},B||l.value),typeof _=="string"){const w=Vr(n,_,B.path),k=t.resolve({path:w.path},B),C=s.createHref(w.fullPath);return fe(w,k,{params:p(k.params),hash:Dn(w.hash),redirectedFrom:void 0,href:C})}let P;if(_.path!=null)P=fe({},_,{path:Vr(n,_.path,B.path).path});else{const w=fe({},_.params);for(const k in w)w[k]==null&&delete w[k];P=fe({},_,{params:f(w)}),B.params=f(B.params)}const Y=t.resolve(P,B),d=_.hash||"";Y.params=c(p(Y.params));const h=td(r,fe({},_,{hash:Yu(d),path:Y.path})),y=s.createHref(h);return fe({fullPath:h,hash:d,query:r===_i?gd(_.query):_.query||{}},Y,{redirectedFrom:void 0,href:y})}function g(_){return typeof _=="string"?Vr(n,_,l.value.path):fe({},_)}function x(_,B){if(u!==_)return hn(ze.NAVIGATION_CANCELLED,{from:B,to:_})}function v(_){return $(_)}function A(_){return v(fe(g(_),{replace:!0}))}function F(_,B){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:Y}=P;let d=typeof Y=="function"?Y(_,B):Y;return typeof d=="string"&&(d=d.includes("?")||d.includes("#")?d=g(d):{path:d},d.params={}),fe({query:_.query,hash:_.hash,params:d.path!=null?{}:_.params},d)}}function $(_,B){const P=u=T(_),Y=l.value,d=_.state,h=_.force,y=_.replace===!0,w=F(P,Y);if(w)return $(fe(g(w),{state:typeof w=="object"?fe({},d,w.state):d,force:h,replace:y}),B||P);const k=P;k.redirectedFrom=B;let C;return!h&&nd(r,Y,P)&&(C=hn(ze.NAVIGATION_DUPLICATED,{to:k,from:Y}),Oe(Y,Y,!0,!1)),(C?Promise.resolve(C):re(k,Y)).catch(M=>Et(M)?Et(M,ze.NAVIGATION_GUARD_REDIRECT)?M:H(M):J(M,k,Y)).then(M=>{if(M){if(Et(M,ze.NAVIGATION_GUARD_REDIRECT))return $(fe({replace:y},g(M.to),{state:typeof M.to=="object"?fe({},d,M.to.state):d,force:h}),B||k)}else M=Se(k,Y,!0,y,d);return ue(k,Y,M),M})}function S(_,B){const P=x(_,B);return P?Promise.reject(P):Promise.resolve()}function j(_){const B=Fe.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(_):_()}function re(_,B){let P;const[Y,d,h]=xd(_,B);P=qr(Y.reverse(),"beforeRouteLeave",_,B);for(const w of Y)w.leaveGuards.forEach(k=>{P.push(Bt(k,_,B))});const y=S.bind(null,_,B);return P.push(y),oe(P).then(()=>{P=[];for(const w of i.list())P.push(Bt(w,_,B));return P.push(y),oe(P)}).then(()=>{P=qr(d,"beforeRouteUpdate",_,B);for(const w of d)w.updateGuards.forEach(k=>{P.push(Bt(k,_,B))});return P.push(y),oe(P)}).then(()=>{P=[];for(const w of h)if(w.beforeEnter)if(dt(w.beforeEnter))for(const k of w.beforeEnter)P.push(Bt(k,_,B));else P.push(Bt(w.beforeEnter,_,B));return P.push(y),oe(P)}).then(()=>(_.matched.forEach(w=>w.enterCallbacks={}),P=qr(h,"beforeRouteEnter",_,B,j),P.push(y),oe(P))).then(()=>{P=[];for(const w of a.list())P.push(Bt(w,_,B));return P.push(y),oe(P)}).catch(w=>Et(w,ze.NAVIGATION_CANCELLED)?w:Promise.reject(w))}function ue(_,B,P){o.list().forEach(Y=>j(()=>Y(_,B,P)))}function Se(_,B,P,Y,d){const h=x(_,B);if(h)return h;const y=B===Dt,w=ln?history.state:{};P&&(Y||y?s.replace(_.fullPath,fe({scroll:y&&w&&w.scroll},d)):s.push(_.fullPath,d)),l.value=_,Oe(_,B,P,y),H()}let Be;function Qe(){Be||(Be=s.listen((_,B,P)=>{if(!me.listening)return;const Y=T(_),d=F(Y,me.currentRoute.value);if(d){$(fe(d,{replace:!0,force:!0}),Y).catch(En);return}u=Y;const h=l.value;ln&&ud(ki(h.fullPath,P.delta),Sr()),re(Y,h).catch(y=>Et(y,ze.NAVIGATION_ABORTED|ze.NAVIGATION_CANCELLED)?y:Et(y,ze.NAVIGATION_GUARD_REDIRECT)?($(fe(g(y.to),{force:!0}),Y).then(w=>{Et(w,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&!P.delta&&P.type===ms.pop&&s.go(-1,!1)}).catch(En),Promise.reject()):(P.delta&&s.go(-P.delta,!1),J(y,Y,h))).then(y=>{y=y||Se(Y,h,!1),y&&(P.delta&&!Et(y,ze.NAVIGATION_CANCELLED)?s.go(-P.delta,!1):P.type===ms.pop&&Et(y,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),ue(Y,h,y)}).catch(En)}))}let qe=yn(),le=yn(),se;function J(_,B,P){H(_);const Y=le.list();return Y.length?Y.forEach(d=>d(_,B,P)):console.error(_),Promise.reject(_)}function we(){return se&&l.value!==Dt?Promise.resolve():new Promise((_,B)=>{qe.add([_,B])})}function H(_){return se||(se=!_,Qe(),qe.list().forEach(([B,P])=>_?P(_):B()),qe.reset()),_}function Oe(_,B,P,Y){const{scrollBehavior:d}=e;if(!ln||!d)return Promise.resolve();const h=!P&&dd(ki(_.fullPath,0))||(Y||!P)&&history.state&&history.state.scroll||null;return wo().then(()=>d(_,B,h)).then(y=>y&&cd(y)).catch(y=>J(y,_,B))}const de=_=>s.go(_);let it;const Fe=new Set,me={currentRoute:l,listening:!0,addRoute:b,removeRoute:I,clearRoutes:t.clearRoutes,hasRoute:O,getRoutes:z,resolve:T,options:e,push:v,replace:A,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:i.add,beforeResolve:a.add,afterEach:o.add,onError:le.add,isReady:we,install(_){_.component("RouterLink",jd),_.component("RouterView",Vd),_.config.globalProperties.$router=me,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>V(l)}),ln&&!it&&l.value===Dt&&(it=!0,v(s.location).catch(Y=>{}));const B={};for(const Y in Dt)Object.defineProperty(B,Y,{get:()=>l.value[Y],enumerable:!0});_.provide(Ts,me),_.provide(Ls,bo(B)),_.provide(gs,l);const P=_.unmount;Fe.add(_),_.unmount=function(){Fe.delete(_),Fe.size<1&&(u=Dt,Be&&Be(),Be=null,l.value=Dt,it=!1,se=!1),P()}}};function oe(_){return _.reduce((B,P)=>B.then(()=>j(P)),Promise.resolve())}return me}function qd(e){return _t(Ls)}function va(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=va(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ud(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=va(e))&&(r&&(r+=" "),r+=t);return r}const Wd=(e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Kd=(e,t)=>({classGroupId:e,validator:t}),ya=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),dr="-",$i=[],Yd="arbitrary..",Xd=e=>{const t=Jd(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:a=>{if(a.startsWith("[")&&a.endsWith("]"))return Zd(a);const o=a.split(dr),l=o[0]===""&&o.length>1?1:0;return wa(o,l,t)},getConflictingClassGroupIds:(a,o)=>{if(o){const l=r[a],u=n[a];return l?u?Wd(u,l):l:u||$i}return n[a]||$i}}},wa=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const s=e[t],i=n.nextPart.get(s);if(i){const u=wa(e,t+1,i);if(u)return u}const a=n.validators;if(a===null)return;const o=t===0?e.join(dr):e.slice(t).join(dr),l=a.length;for(let u=0;u<l;u++){const c=a[u];if(c.validator(o))return c.classGroupId}},Zd=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?Yd+r:void 0})(),Jd=e=>{const{theme:t,classGroups:n}=e;return Qd(n,t)},Qd=(e,t)=>{const n=ya();for(const r in e){const s=e[r];Ds(s,n,r,t)}return n},Ds=(e,t,n,r)=>{const s=e.length;for(let i=0;i<s;i++){const a=e[i];ef(a,t,n,r)}},ef=(e,t,n,r)=>{if(typeof e=="string"){tf(e,t,n);return}if(typeof e=="function"){nf(e,t,n,r);return}rf(e,t,n,r)},tf=(e,t,n)=>{const r=e===""?t:ka(t,e);r.classGroupId=n},nf=(e,t,n,r)=>{if(sf(e)){Ds(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Kd(n,e))},rf=(e,t,n,r)=>{const s=Object.entries(e),i=s.length;for(let a=0;a<i;a++){const[o,l]=s[a];Ds(l,ka(t,o),n,r)}},ka=(e,t)=>{let n=e;const r=t.split(dr),s=r.length;for(let i=0;i<s;i++){const a=r[i];let o=n.nextPart.get(a);o||(o=ya(),n.nextPart.set(a,o)),n=o}return n},sf=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,of=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const s=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(i){let a=n[i];if(a!==void 0)return a;if((a=r[i])!==void 0)return s(i,a),a},set(i,a){i in n?n[i]=a:s(i,a)}}},bs="!",Ti=":",af=[],Li=(e,t,n,r,s)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:s}),lf=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=s=>{const i=[];let a=0,o=0,l=0,u;const c=s.length;for(let z=0;z<c;z++){const O=s[z];if(a===0&&o===0){if(O===Ti){i.push(s.slice(l,z)),l=z+1;continue}if(O==="/"){u=z;continue}}O==="["?a++:O==="]"?a--:O==="("?o++:O===")"&&o--}const f=i.length===0?s:s.slice(l);let p=f,b=!1;f.endsWith(bs)?(p=f.slice(0,-1),b=!0):f.startsWith(bs)&&(p=f.slice(1),b=!0);const I=u&&u>l?u-l:void 0;return Li(i,b,p,I)};if(t){const s=t+Ti,i=r;r=a=>a.startsWith(s)?i(a.slice(s.length)):Li(af,!1,a,void 0,!0)}if(n){const s=r;r=i=>n({className:i,parseClassName:s})}return r},cf=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{t.set(n,1e6+r)}),n=>{const r=[];let s=[];for(let i=0;i<n.length;i++){const a=n[i],o=a[0]==="[",l=t.has(a);o||l?(s.length>0&&(s.sort(),r.push(...s),s=[]),r.push(a)):s.push(a)}return s.length>0&&(s.sort(),r.push(...s)),r}},uf=e=>({cache:of(e.cacheSize),parseClassName:lf(e),sortModifiers:cf(e),postfixLookupClassGroupIds:df(e),...Xd(e)}),df=e=>{const t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let r=0;r<n.length;r++)t[n[r]]=!0;return t},ff=/\s+/,pf=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s,sortModifiers:i,postfixLookupClassGroupIds:a}=t,o=[],l=e.trim().split(ff);let u="";for(let c=l.length-1;c>=0;c-=1){const f=l[c],{isExternal:p,modifiers:b,hasImportantModifier:I,baseClassName:z,maybePostfixModifierPosition:O}=n(f);if(p){u=f+(u.length>0?" "+u:u);continue}let T=!!O,g;if(T){const $=z.substring(0,O);g=r($);const S=g&&a[g]?r(z):void 0;S&&S!==g&&(g=S,T=!1)}else g=r(z);if(!g){if(!T){u=f+(u.length>0?" "+u:u);continue}if(g=r(z),!g){u=f+(u.length>0?" "+u:u);continue}T=!1}const x=b.length===0?"":b.length===1?b[0]:i(b).join(":"),v=I?x+bs:x,A=v+g;if(o.indexOf(A)>-1)continue;o.push(A);const F=s(g,T);for(let $=0;$<F.length;++$){const S=F[$];o.push(v+S)}u=f+(u.length>0?" "+u:u)}return u},mf=(...e)=>{let t=0,n,r,s="";for(;t<e.length;)(n=e[t++])&&(r=_a(n))&&(s&&(s+=" "),s+=r);return s},_a=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=_a(e[r]))&&(n&&(n+=" "),n+=t);return n},hf=(e,...t)=>{let n,r,s,i;const a=l=>{const u=t.reduce((c,f)=>f(c),e());return n=uf(u),r=n.cache.get,s=n.cache.set,i=o,o(l)},o=l=>{const u=r(l);if(u)return u;const c=pf(l,n);return s(l,c),c};return i=a,(...l)=>i(mf(...l))},gf=[],Me=e=>{const t=n=>n[e]||gf;return t.isThemeGetter=!0,t.themeKey=e,t},za=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Aa=/^\((?:(\w[\w-]*):)?(.+)\)$/i,bf=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,xf=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,vf=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,yf=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,wf=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,kf=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,jt=e=>bf.test(e),ie=e=>!!e&&!Number.isNaN(Number(e)),gt=e=>!!e&&Number.isInteger(Number(e)),Ur=e=>e.endsWith("%")&&ie(e.slice(0,-1)),Ft=e=>xf.test(e),Ca=()=>!0,_f=e=>vf.test(e)&&!yf.test(e),js=()=>!1,zf=e=>wf.test(e),Af=e=>kf.test(e),Cf=e=>!q(e)&&!U(e),Sf=e=>e.startsWith("@container")&&(e[10]==="/"&&e[11]!==void 0||e[11]==="s"&&e[16]!==void 0&&e.startsWith("-size/",10)||e[11]==="n"&&e[18]!==void 0&&e.startsWith("-normal/",10)),Rf=e=>Ut(e,Ea,js),q=e=>za.test(e),Xt=e=>Ut(e,Fa,_f),Di=e=>Ut(e,Tf,ie),Ef=e=>Ut(e,Ma,Ca),Ff=e=>Ut(e,Pa,js),ji=e=>Ut(e,Sa,js),Pf=e=>Ut(e,Ra,Af),Kn=e=>Ut(e,Ia,zf),U=e=>Aa.test(e),wn=e=>sn(e,Fa),Mf=e=>sn(e,Pa),Ni=e=>sn(e,Sa),If=e=>sn(e,Ea),Of=e=>sn(e,Ra),Yn=e=>sn(e,Ia,!0),$f=e=>sn(e,Ma,!0),Ut=(e,t,n)=>{const r=za.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},sn=(e,t,n=!1)=>{const r=Aa.exec(e);return r?r[1]?t(r[1]):n:!1},Sa=e=>e==="position"||e==="percentage",Ra=e=>e==="image"||e==="url",Ea=e=>e==="length"||e==="size"||e==="bg-size",Fa=e=>e==="length",Tf=e=>e==="number",Pa=e=>e==="family-name",Ma=e=>e==="number"||e==="weight",Ia=e=>e==="shadow",Lf=()=>{const e=Me("color"),t=Me("font"),n=Me("text"),r=Me("font-weight"),s=Me("tracking"),i=Me("leading"),a=Me("breakpoint"),o=Me("container"),l=Me("spacing"),u=Me("radius"),c=Me("shadow"),f=Me("inset-shadow"),p=Me("text-shadow"),b=Me("drop-shadow"),I=Me("blur"),z=Me("perspective"),O=Me("aspect"),T=Me("ease"),g=Me("animate"),x=()=>["auto","avoid","all","avoid-page","page","left","right","column"],v=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],A=()=>[...v(),U,q],F=()=>["auto","hidden","clip","visible","scroll"],$=()=>["auto","contain","none"],S=()=>[U,q,l],j=()=>[jt,"full","auto",...S()],re=()=>[gt,"none","subgrid",U,q],ue=()=>["auto",{span:["full",gt,U,q]},gt,U,q],Se=()=>[gt,"auto",U,q],Be=()=>["auto","min","max","fr",U,q],Qe=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],qe=()=>["start","end","center","stretch","center-safe","end-safe"],le=()=>["auto",...S()],se=()=>[jt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...S()],J=()=>[o,jt,"screen","full","dvw","lvw","svw","min","max","fit",...S()],we=()=>[jt,"screen","full","lh","dvh","lvh","svh","min","max","fit",...S()],H=()=>[e,U,q],Oe=()=>[...v(),Ni,ji,{position:[U,q]}],de=()=>["no-repeat",{repeat:["","x","y","space","round"]}],it=()=>["auto","cover","contain",If,Rf,{size:[U,q]}],Fe=()=>[Ur,wn,Xt],me=()=>["","none","full",u,U,q],oe=()=>["",ie,wn,Xt],_=()=>["solid","dashed","dotted","double"],B=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],P=()=>[ie,Ur,Ni,ji],Y=()=>["","none",I,U,q],d=()=>["none",ie,U,q],h=()=>["none",ie,U,q],y=()=>[ie,U,q],w=()=>[jt,"full",...S()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ft],breakpoint:[Ft],color:[Ca],container:[Ft],"drop-shadow":[Ft],ease:["in","out","in-out"],font:[Cf],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ft],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ft],shadow:[Ft],spacing:["px",ie],text:[Ft],"text-shadow":[Ft],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",jt,q,U,O]}],container:["container"],"container-type":[{"@container":["","normal","size",U,q]}],"container-named":[Sf],columns:[{columns:[ie,"auto",q,U,o]}],"break-after":[{"break-after":x()}],"break-before":[{"break-before":x()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:A()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:$()}],"overscroll-x":[{"overscroll-x":$()}],"overscroll-y":[{"overscroll-y":$()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:j()}],"inset-x":[{"inset-x":j()}],"inset-y":[{"inset-y":j()}],start:[{"inset-s":j(),start:j()}],end:[{"inset-e":j(),end:j()}],"inset-bs":[{"inset-bs":j()}],"inset-be":[{"inset-be":j()}],top:[{top:j()}],right:[{right:j()}],bottom:[{bottom:j()}],left:[{left:j()}],visibility:["visible","invisible","collapse"],z:[{z:[gt,"auto",U,q]}],basis:[{basis:[jt,"full","auto",o,...S()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ie,jt,"auto","initial","none",q]}],grow:[{grow:["",ie,U,q]}],shrink:[{shrink:["",ie,U,q]}],order:[{order:[gt,"first","last","none",U,q]}],"grid-cols":[{"grid-cols":re()}],"col-start-end":[{col:ue()}],"col-start":[{"col-start":Se()}],"col-end":[{"col-end":Se()}],"grid-rows":[{"grid-rows":re()}],"row-start-end":[{row:ue()}],"row-start":[{"row-start":Se()}],"row-end":[{"row-end":Se()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Be()}],"auto-rows":[{"auto-rows":Be()}],gap:[{gap:S()}],"gap-x":[{"gap-x":S()}],"gap-y":[{"gap-y":S()}],"justify-content":[{justify:[...Qe(),"normal"]}],"justify-items":[{"justify-items":[...qe(),"normal"]}],"justify-self":[{"justify-self":["auto",...qe()]}],"align-content":[{content:["normal",...Qe()]}],"align-items":[{items:[...qe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...qe(),{baseline:["","last"]}]}],"place-content":[{"place-content":Qe()}],"place-items":[{"place-items":[...qe(),"baseline"]}],"place-self":[{"place-self":["auto",...qe()]}],p:[{p:S()}],px:[{px:S()}],py:[{py:S()}],ps:[{ps:S()}],pe:[{pe:S()}],pbs:[{pbs:S()}],pbe:[{pbe:S()}],pt:[{pt:S()}],pr:[{pr:S()}],pb:[{pb:S()}],pl:[{pl:S()}],m:[{m:le()}],mx:[{mx:le()}],my:[{my:le()}],ms:[{ms:le()}],me:[{me:le()}],mbs:[{mbs:le()}],mbe:[{mbe:le()}],mt:[{mt:le()}],mr:[{mr:le()}],mb:[{mb:le()}],ml:[{ml:le()}],"space-x":[{"space-x":S()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":S()}],"space-y-reverse":["space-y-reverse"],size:[{size:se()}],"inline-size":[{inline:["auto",...J()]}],"min-inline-size":[{"min-inline":["auto",...J()]}],"max-inline-size":[{"max-inline":["none",...J()]}],"block-size":[{block:["auto",...we()]}],"min-block-size":[{"min-block":["auto",...we()]}],"max-block-size":[{"max-block":["none",...we()]}],w:[{w:[o,"screen",...se()]}],"min-w":[{"min-w":[o,"screen","none",...se()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[a]},...se()]}],h:[{h:["screen","lh",...se()]}],"min-h":[{"min-h":["screen","lh","none",...se()]}],"max-h":[{"max-h":["screen","lh","none",...se()]}],"font-size":[{text:["base",n,wn,Xt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,$f,Ef]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ur,q]}],"font-family":[{font:[Mf,Ff,t]}],"font-features":[{"font-features":[q]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,U,q]}],"line-clamp":[{"line-clamp":[ie,"none",U,Di]}],leading:[{leading:["none",i,...S()]}],"list-image":[{"list-image":["none",U,q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",U,q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:H()}],"text-color":[{text:H()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[..._(),"wavy"]}],"text-decoration-thickness":[{decoration:[ie,"from-font","auto",U,Xt]}],"text-decoration-color":[{decoration:H()}],"underline-offset":[{"underline-offset":[ie,"auto",U,q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:S()}],"tab-size":[{tab:[gt,U,q]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",U,q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",U,q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Oe()}],"bg-repeat":[{bg:de()}],"bg-size":[{bg:it()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},gt,U,q],radial:["",U,q],conic:["",gt,U,q]},Of,Pf]}],"bg-color":[{bg:H()}],"gradient-from-pos":[{from:Fe()}],"gradient-via-pos":[{via:Fe()}],"gradient-to-pos":[{to:Fe()}],"gradient-from":[{from:H()}],"gradient-via":[{via:H()}],"gradient-to":[{to:H()}],rounded:[{rounded:me()}],"rounded-s":[{"rounded-s":me()}],"rounded-e":[{"rounded-e":me()}],"rounded-t":[{"rounded-t":me()}],"rounded-r":[{"rounded-r":me()}],"rounded-b":[{"rounded-b":me()}],"rounded-l":[{"rounded-l":me()}],"rounded-ss":[{"rounded-ss":me()}],"rounded-se":[{"rounded-se":me()}],"rounded-ee":[{"rounded-ee":me()}],"rounded-es":[{"rounded-es":me()}],"rounded-tl":[{"rounded-tl":me()}],"rounded-tr":[{"rounded-tr":me()}],"rounded-br":[{"rounded-br":me()}],"rounded-bl":[{"rounded-bl":me()}],"border-w":[{border:oe()}],"border-w-x":[{"border-x":oe()}],"border-w-y":[{"border-y":oe()}],"border-w-s":[{"border-s":oe()}],"border-w-e":[{"border-e":oe()}],"border-w-bs":[{"border-bs":oe()}],"border-w-be":[{"border-be":oe()}],"border-w-t":[{"border-t":oe()}],"border-w-r":[{"border-r":oe()}],"border-w-b":[{"border-b":oe()}],"border-w-l":[{"border-l":oe()}],"divide-x":[{"divide-x":oe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":oe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[..._(),"hidden","none"]}],"divide-style":[{divide:[..._(),"hidden","none"]}],"border-color":[{border:H()}],"border-color-x":[{"border-x":H()}],"border-color-y":[{"border-y":H()}],"border-color-s":[{"border-s":H()}],"border-color-e":[{"border-e":H()}],"border-color-bs":[{"border-bs":H()}],"border-color-be":[{"border-be":H()}],"border-color-t":[{"border-t":H()}],"border-color-r":[{"border-r":H()}],"border-color-b":[{"border-b":H()}],"border-color-l":[{"border-l":H()}],"divide-color":[{divide:H()}],"outline-style":[{outline:[..._(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ie,U,q]}],"outline-w":[{outline:["",ie,wn,Xt]}],"outline-color":[{outline:H()}],shadow:[{shadow:["","inner","none",c,Yn,Kn]}],"shadow-color":[{shadow:H()}],"inset-shadow":[{"inset-shadow":["none",f,Yn,Kn]}],"inset-shadow-color":[{"inset-shadow":H()}],"ring-w":[{ring:oe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:H()}],"ring-offset-w":[{"ring-offset":[ie,Xt]}],"ring-offset-color":[{"ring-offset":H()}],"inset-ring-w":[{"inset-ring":oe()}],"inset-ring-color":[{"inset-ring":H()}],"text-shadow":[{"text-shadow":["none",p,Yn,Kn]}],"text-shadow-color":[{"text-shadow":H()}],opacity:[{opacity:[ie,U,q]}],"mix-blend":[{"mix-blend":[...B(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":B()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ie]}],"mask-image-linear-from-pos":[{"mask-linear-from":P()}],"mask-image-linear-to-pos":[{"mask-linear-to":P()}],"mask-image-linear-from-color":[{"mask-linear-from":H()}],"mask-image-linear-to-color":[{"mask-linear-to":H()}],"mask-image-t-from-pos":[{"mask-t-from":P()}],"mask-image-t-to-pos":[{"mask-t-to":P()}],"mask-image-t-from-color":[{"mask-t-from":H()}],"mask-image-t-to-color":[{"mask-t-to":H()}],"mask-image-r-from-pos":[{"mask-r-from":P()}],"mask-image-r-to-pos":[{"mask-r-to":P()}],"mask-image-r-from-color":[{"mask-r-from":H()}],"mask-image-r-to-color":[{"mask-r-to":H()}],"mask-image-b-from-pos":[{"mask-b-from":P()}],"mask-image-b-to-pos":[{"mask-b-to":P()}],"mask-image-b-from-color":[{"mask-b-from":H()}],"mask-image-b-to-color":[{"mask-b-to":H()}],"mask-image-l-from-pos":[{"mask-l-from":P()}],"mask-image-l-to-pos":[{"mask-l-to":P()}],"mask-image-l-from-color":[{"mask-l-from":H()}],"mask-image-l-to-color":[{"mask-l-to":H()}],"mask-image-x-from-pos":[{"mask-x-from":P()}],"mask-image-x-to-pos":[{"mask-x-to":P()}],"mask-image-x-from-color":[{"mask-x-from":H()}],"mask-image-x-to-color":[{"mask-x-to":H()}],"mask-image-y-from-pos":[{"mask-y-from":P()}],"mask-image-y-to-pos":[{"mask-y-to":P()}],"mask-image-y-from-color":[{"mask-y-from":H()}],"mask-image-y-to-color":[{"mask-y-to":H()}],"mask-image-radial":[{"mask-radial":[U,q]}],"mask-image-radial-from-pos":[{"mask-radial-from":P()}],"mask-image-radial-to-pos":[{"mask-radial-to":P()}],"mask-image-radial-from-color":[{"mask-radial-from":H()}],"mask-image-radial-to-color":[{"mask-radial-to":H()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":v()}],"mask-image-conic-pos":[{"mask-conic":[ie]}],"mask-image-conic-from-pos":[{"mask-conic-from":P()}],"mask-image-conic-to-pos":[{"mask-conic-to":P()}],"mask-image-conic-from-color":[{"mask-conic-from":H()}],"mask-image-conic-to-color":[{"mask-conic-to":H()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Oe()}],"mask-repeat":[{mask:de()}],"mask-size":[{mask:it()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",U,q]}],filter:[{filter:["","none",U,q]}],blur:[{blur:Y()}],brightness:[{brightness:[ie,U,q]}],contrast:[{contrast:[ie,U,q]}],"drop-shadow":[{"drop-shadow":["","none",b,Yn,Kn]}],"drop-shadow-color":[{"drop-shadow":H()}],grayscale:[{grayscale:["",ie,U,q]}],"hue-rotate":[{"hue-rotate":[ie,U,q]}],invert:[{invert:["",ie,U,q]}],saturate:[{saturate:[ie,U,q]}],sepia:[{sepia:["",ie,U,q]}],"backdrop-filter":[{"backdrop-filter":["","none",U,q]}],"backdrop-blur":[{"backdrop-blur":Y()}],"backdrop-brightness":[{"backdrop-brightness":[ie,U,q]}],"backdrop-contrast":[{"backdrop-contrast":[ie,U,q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ie,U,q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ie,U,q]}],"backdrop-invert":[{"backdrop-invert":["",ie,U,q]}],"backdrop-opacity":[{"backdrop-opacity":[ie,U,q]}],"backdrop-saturate":[{"backdrop-saturate":[ie,U,q]}],"backdrop-sepia":[{"backdrop-sepia":["",ie,U,q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":S()}],"border-spacing-x":[{"border-spacing-x":S()}],"border-spacing-y":[{"border-spacing-y":S()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",U,q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ie,"initial",U,q]}],ease:[{ease:["linear","initial",T,U,q]}],delay:[{delay:[ie,U,q]}],animate:[{animate:["none",g,U,q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[z,U,q]}],"perspective-origin":[{"perspective-origin":A()}],rotate:[{rotate:d()}],"rotate-x":[{"rotate-x":d()}],"rotate-y":[{"rotate-y":d()}],"rotate-z":[{"rotate-z":d()}],scale:[{scale:h()}],"scale-x":[{"scale-x":h()}],"scale-y":[{"scale-y":h()}],"scale-z":[{"scale-z":h()}],"scale-3d":["scale-3d"],skew:[{skew:y()}],"skew-x":[{"skew-x":y()}],"skew-y":[{"skew-y":y()}],transform:[{transform:[U,q,"","none","gpu","cpu"]}],"transform-origin":[{origin:A()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:w()}],"translate-x":[{"translate-x":w()}],"translate-y":[{"translate-y":w()}],"translate-z":[{"translate-z":w()}],"translate-none":["translate-none"],zoom:[{zoom:[gt,U,q]}],accent:[{accent:H()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:H()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",U,q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":H()}],"scrollbar-track-color":[{"scrollbar-track":H()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":S()}],"scroll-mx":[{"scroll-mx":S()}],"scroll-my":[{"scroll-my":S()}],"scroll-ms":[{"scroll-ms":S()}],"scroll-me":[{"scroll-me":S()}],"scroll-mbs":[{"scroll-mbs":S()}],"scroll-mbe":[{"scroll-mbe":S()}],"scroll-mt":[{"scroll-mt":S()}],"scroll-mr":[{"scroll-mr":S()}],"scroll-mb":[{"scroll-mb":S()}],"scroll-ml":[{"scroll-ml":S()}],"scroll-p":[{"scroll-p":S()}],"scroll-px":[{"scroll-px":S()}],"scroll-py":[{"scroll-py":S()}],"scroll-ps":[{"scroll-ps":S()}],"scroll-pe":[{"scroll-pe":S()}],"scroll-pbs":[{"scroll-pbs":S()}],"scroll-pbe":[{"scroll-pbe":S()}],"scroll-pt":[{"scroll-pt":S()}],"scroll-pr":[{"scroll-pr":S()}],"scroll-pb":[{"scroll-pb":S()}],"scroll-pl":[{"scroll-pl":S()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",U,q]}],fill:[{fill:["none",...H()]}],"stroke-w":[{stroke:[ie,wn,Xt,Di]}],stroke:[{stroke:["none",...H()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["start","end","right","left"],"inset-y":["inset-bs","inset-be","top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["ps","pe","pr","pl"],py:["pbs","pbe","pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["ms","me","mr","ml"],my:["mbs","mbe","mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-s","border-w-e","border-w-r","border-w-l"],"border-w-y":["border-w-bs","border-w-be","border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-s","border-color-e","border-color-r","border-color-l"],"border-color-y":["border-color-bs","border-color-be","border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-ms","scroll-me","scroll-mr","scroll-ml"],"scroll-my":["scroll-mbs","scroll-mbe","scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-ps","scroll-pe","scroll-pr","scroll-pl"],"scroll-py":["scroll-pbs","scroll-pbe","scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Df=hf(Lf);function Ne(...e){return Df(Ud(e))}const jf=ye({__name:"BorderBeam",props:{borderWidth:{default:1.5},size:{default:80},duration:{default:6},colorFrom:{default:"#ffaa40"},colorTo:{default:"#9c40ff"},delay:{default:0},reverse:{type:Boolean,default:!1},borderRadius:{default:16},class:{}},setup(e){const t=e,n=Re(()=>{const r=typeof t.borderRadius=="number"?`${t.borderRadius}px`:t.borderRadius;return{"--size":`${t.size}px`,"--duration":`${t.duration}s`,"--border-width":`${t.borderWidth}px`,"--color-from":t.colorFrom,"--color-to":t.colorTo,"--delay":`-${t.delay}s`,"--direction":t.reverse?"reverse":"normal","--radius":r}});return(r,s)=>(G(),K("div",{style:st(n.value),class:W(V(Ne)("pointer-events-none absolute inset-0 rounded-[inherit] border-beam-mask",t.class))},[...s[0]||(s[0]=[m("div",{class:"border-beam-element"},null,-1)])],6))}}),Wt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},xs=Wt(jf,[["__scopeId","data-v-b6b8cf00"]]),Nf={class:"relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-white"},Bf=ye({__name:"ShimmerButton",props:{shimmerColor:{default:"#38bdf8"},shimmerSize:{default:"0.12em"},shimmerDuration:{default:"2.5s"},borderRadius:{default:"9999px"},class:{}},setup(e){const t=e,n=Re(()=>({"--shimmer-color":t.shimmerColor,"--shimmer-size":t.shimmerSize,"--speed":t.shimmerDuration,"--radius":t.borderRadius}));return(r,s)=>(G(),K("button",{style:st(n.value),class:W(V(Ne)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white transition-all duration-300 active:scale-95","border border-white/10 [border-radius:var(--radius)]","bg-zinc-900/90 shadow-md hover:shadow-lg hover:shadow-sky-500/20 dark:bg-black/90",t.class))},[s[0]||(s[0]=m("div",{class:"shimmer-spin-container pointer-events-none absolute -inset-[100%] [aspect-ratio:1] [border-radius:inherit]"},[m("div",{class:"shimmer-spin-gradient h-full w-full animate-shimmer-spin"})],-1)),s[1]||(s[1]=m("div",{class:"absolute [inset:var(--shimmer-size)] [border-radius:inherit] bg-zinc-950/95 transition-colors duration-300 group-hover:bg-zinc-900/95"},null,-1)),m("span",Nf,[zt(r.$slots,"default",{},void 0,!0)])],6))}}),fr=Wt(Bf,[["__scopeId","data-v-6b251134"]]),Gf=ye({__name:"ShinyText",props:{text:{},duration:{default:2.5},variant:{default:"white"},class:{}},setup(e){const t=e,n=Re(()=>({"--duration":`${t.duration}s`}));return(r,s)=>(G(),K("span",{style:st(n.value),class:W(V(Ne)("shiny-text-root inline-block font-bold bg-clip-text text-transparent",t.variant==="white"&&"shiny-variant-white",t.variant==="cyber"&&"shiny-variant-cyber",t.class))},[zt(r.$slots,"default",{},()=>[Le(Ae(t.text),1)],!0)],6))}}),Fn=Wt(Gf,[["__scopeId","data-v-e31e48eb"]]),Vf=ye({__name:"RetroGrid",props:{angle:{default:65},cellSize:{default:60},opacity:{default:.5},lightLineColor:{default:"#94a3b8"},darkLineColor:{default:"#38bdf8"},mask:{type:Boolean,default:!0},maskClass:{},class:{}},setup(e){const t=e,n=Re(()=>({"--grid-angle":`${t.angle}deg`,"--cell-size":`${t.cellSize}px`,"--opacity":t.opacity.toString(),"--light-line":t.lightLineColor,"--dark-line":t.darkLineColor}));return(r,s)=>(G(),K("div",{style:st(n.value),class:W(V(Ne)("pointer-events-none absolute h-full w-full overflow-hidden opacity-[var(--opacity)] [perspective:200px]",t.class))},[m("div",{class:W(V(Ne)("absolute inset-0 [transform:rotateX(var(--grid-angle))]",t.mask&&"retro-grid-horizon-mask"))},[...s[0]||(s[0]=[m("div",{class:"retro-grid-plane animate-retro-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]"},null,-1)])],2)],6))}}),vs=Wt(Vf,[["__scopeId","data-v-c9f1f78f"]]),Oa=ye({__name:"BentoGrid",props:{class:{}},setup(e){const t=e;return(n,r)=>(G(),K("div",{class:W(V(Ne)("grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",t.class))},[zt(n.$slots,"default")],2))}}),Hf={class:"relative z-0 h-44 w-full overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"},qf={class:"relative z-10 flex flex-col gap-2 pt-4"},Uf={class:"flex items-center gap-2.5"},Wf={class:"text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},Kf={class:"text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"},Yf={key:0,class:"mt-3 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400"},Xf=ye({__name:"BentoCard",props:{name:{},description:{},class:{},href:{},cta:{},spotlightRadius:{default:300}},setup(e){const t=e,n=ke(0),r=ke(0),s=ke(!1);function i(a){const o=a.currentTarget.getBoundingClientRect();n.value=a.clientX-o.left,r.value=a.clientY-o.top}return(a,o)=>{const l=Bn("router-link");return G(),K("div",{class:W(V(Ne)("group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300","border border-zinc-200 bg-white/70 shadow-sm backdrop-blur-md hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10",t.class)),onMousemove:i,onMouseenter:o[0]||(o[0]=u=>s.value=!0),onMouseleave:o[1]||(o[1]=u=>s.value=!1)},[m("div",{class:"pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",style:st({background:`radial-gradient(${t.spotlightRadius}px circle at ${n.value}px ${r.value}px, var(--spotlight-color), transparent 80%)`})},null,4),m("div",Hf,[zt(a.$slots,"background",{},void 0,!0)]),m("div",qf,[m("div",Uf,[zt(a.$slots,"icon",{},void 0,!0),m("h3",Wf,Ae(t.name),1)]),m("p",Kf,Ae(t.description),1),t.cta||a.$slots.cta?(G(),K("div",Yf,[zt(a.$slots,"cta",{},()=>[t.href?(G(),rt(l,{key:0,to:t.href,class:"inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"},{default:ne(()=>[Le(Ae(t.cta)+" ",1),o[2]||(o[2]=m("span",{"aria-hidden":"true"},"→",-1))]),_:1},8,["to"])):pn("",!0)],!0)])):pn("",!0)])],34)}}}),bt=Wt(Xf,[["__scopeId","data-v-df52e991"]]),Zf=ye({__name:"Marquee",props:{duration:{default:30},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},repeat:{default:4},class:{}},setup(e){const t=e,n=Re(()=>({"--duration":`${t.duration}s`}));return(r,s)=>(G(),K("div",{style:st(n.value),class:W(V(Ne)("group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",t.vertical?"flex-col":"flex-row",t.class))},[(G(!0),K(_e,null,$t(t.repeat,i=>(G(),K("div",{key:i,class:W(V(Ne)("flex shrink-0 justify-around [gap:var(--gap)]",t.vertical?"flex-col animate-marquee-vertical":"flex-row animate-marquee",t.pauseOnHover&&"group-hover:[animation-play-state:paused]",t.reverse&&"[animation-direction:reverse]"))},[zt(r.$slots,"default",{},void 0,!0)],2))),128))],6))}}),Qn=Wt(Zf,[["__scopeId","data-v-2ea856f7"]]),Jf={"aria-hidden":"true",class:"pointer-events-none h-full w-full fill-neutral-400/60 dark:fill-neutral-600/60 transition-colors"},Qf=["id","width","height","x","y"],ep=["cx","cy","r"],tp=["fill"],$a=ye({__name:"DotPattern",props:{width:{default:20},height:{default:20},x:{default:0},y:{default:0},cx:{default:1},cy:{default:1},cr:{default:1},glow:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=Fo(),r=ke(-9999),s=ke(-9999);function i(o){if(!t.glow)return;const l=o.currentTarget.getBoundingClientRect();r.value=o.clientX-l.left,s.value=o.clientY-l.top}function a(){r.value=-9999,s.value=-9999}return(o,l)=>(G(),K("div",{class:W(V(Ne)("absolute inset-0 h-full w-full overflow-hidden",t.glow?"pointer-events-auto":"pointer-events-none",t.class)),onMousemove:i,onMouseleave:a},[(G(),K("svg",Jf,[m("defs",null,[m("pattern",{id:V(n),width:t.width,height:t.height,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:t.x,y:t.y},[m("circle",{cx:t.cx,cy:t.cy,r:t.cr},null,8,ep)],8,Qf)]),m("rect",{width:"100%",height:"100%",fill:`url(#${V(n)})`},null,8,tp)])),t.glow?(G(),K("div",{key:0,class:"absolute inset-0 transition-opacity duration-300",style:st({background:`radial-gradient(200px circle at ${r.value}px ${s.value}px, rgba(59, 130, 246, 0.15), transparent 80%)`})},null,4)):pn("",!0)],34))}}),np={class:"relative z-10 h-full w-full"},Ta=ye({__name:"InteractiveParticles",props:{quantity:{default:50},speed:{default:.6},maxRadius:{default:2},mouseRadius:{default:100},color:{},connectLines:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=ke(null);let r=null,s=[];const i={x:-9999,y:-9999};function a(f,p){s=[];for(let b=0;b<t.quantity;b++)s.push({x:Math.random()*f,y:Math.random()*p,vx:(Math.random()-.5)*t.speed,vy:(Math.random()-.5)*t.speed,size:Math.random()*t.maxRadius+.8,baseAlpha:Math.random()*.5+.2,alpha:Math.random()*.5+.2})}function o(){const f=n.value;if(!f)return;const p=window.devicePixelRatio||1,b=f.getBoundingClientRect();f.width=b.width*p,f.height=b.height*p;const I=f.getContext("2d");I&&I.scale(p,p),a(b.width,b.height)}function l(f){const p=n.value;if(!p)return;const b=p.getBoundingClientRect();i.x=f.clientX-b.left,i.y=f.clientY-b.top}function u(){i.x=-9999,i.y=-9999}function c(){const f=n.value;if(!f)return;const p=f.getContext("2d");if(!p)return;const b=f.getBoundingClientRect(),I=b.width,z=b.height;p.clearRect(0,0,I,z);const T=document.documentElement.classList.contains("dark")?"255, 255, 255":"59, 130, 246",g=t.color||T;for(let x=0;x<s.length;x++){const v=s[x];v.x+=v.vx,v.y+=v.vy,(v.x<0||v.x>I)&&(v.vx*=-1),(v.y<0||v.y>z)&&(v.vy*=-1);const A=i.x-v.x,F=i.y-v.y,$=Math.sqrt(A*A+F*F);if($<t.mouseRadius){const S=(t.mouseRadius-$)/t.mouseRadius;v.x-=A/$*S*2,v.y-=F/$*S*2,v.alpha=Math.min(v.baseAlpha+.4,.9)}else v.alpha=v.baseAlpha;if(p.beginPath(),p.arc(v.x,v.y,v.size,0,Math.PI*2),p.fillStyle=g.startsWith("#")?g:`rgba(${g}, ${v.alpha})`,p.fill(),t.connectLines)for(let S=x+1;S<s.length;S++){const j=s[S],re=Math.hypot(v.x-j.x,v.y-j.y);if(re<80){p.beginPath(),p.moveTo(v.x,v.y),p.lineTo(j.x,j.y);const ue=(1-re/80)*.15;p.strokeStyle=`rgba(${T}, ${ue})`,p.lineWidth=.6,p.stroke()}}}r=requestAnimationFrame(c)}return nn(()=>{o(),window.addEventListener("resize",o),c()}),rn(()=>{window.removeEventListener("resize",o),r!==null&&cancelAnimationFrame(r)}),Ht(()=>t.quantity,()=>{const f=n.value;if(f){const p=f.getBoundingClientRect();a(p.width,p.height)}}),(f,p)=>(G(),K("div",{class:W(V(Ne)("relative h-full w-full overflow-hidden",t.class)),onMousemove:l,onMouseleave:u},[m("canvas",{ref_key:"canvasRef",ref:n,class:"pointer-events-none absolute inset-0 h-full w-full"},null,512),m("div",np,[zt(f.$slots,"default")])],34))}}),rp={class:"relative overflow-hidden"},sp={class:"relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center overflow-hidden"},ip={class:"relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200"},op={class:"relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"},ap={class:"relative z-10 mt-12 w-full max-w-2xl text-left"},lp={class:"relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/80"},cp={class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"},up={class:"border-y border-zinc-200/80 bg-zinc-50/50 py-6 dark:border-zinc-800/80 dark:bg-zinc-950/40"},dp={class:"mx-auto max-w-7xl px-4 text-center"},fp={id:"features",class:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"},pp={class:"relative h-full w-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50/40 to-transparent dark:from-zinc-900/60 dark:to-transparent"},mp={class:"relative flex h-32 w-56 flex-col justify-between rounded-xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-md backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95"},hp={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-50/50 to-blue-50/20 border border-blue-100/50 dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800"},gp={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50/30 to-white dark:from-zinc-950 dark:to-zinc-900"},bp={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-50/30 to-transparent dark:from-zinc-900/50 dark:to-transparent"},xp={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"},vp={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50"},yp={class:"relative h-full w-full flex flex-col justify-center overflow-hidden rounded-xl p-3 bg-zinc-50/60 dark:bg-zinc-900/40"},wp={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-20 dark:border-zinc-800/80 dark:bg-zinc-950/40"},kp={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},_p={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},zp={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},Ap={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400"},Cp={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},Sp={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400"},Rp={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},Ep={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400"},Fp=ye({__name:"HomeView",setup(e){const t=["Vue 3.5+","TypeScript","Tailwind CSS","Composition API","Vite 6","HTML5 Canvas","Web Animations API","Zero-Config"],n=ke(!1);function r(){navigator.clipboard.writeText("npm i @vueuse/core clsx tailwind-merge"),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}return(s,i)=>{const a=Bn("router-link");return G(),K("div",rp,[m("section",sp,[E(vs,{angle:65,opacity:.45}),m("div",ip,[E(V(at),{class:"h-3.5 w-3.5 text-blue-500"}),E(Fn,{text:"Vue 3 的动效原子代码库现已上线"}),i[0]||(i[0]=m("span",{class:"rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] text-blue-600 dark:text-blue-400"}," v1.0 ",-1))]),i[5]||(i[5]=m("h1",{class:"relative z-10 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight"},[Le(" 专属于 Vue 3 的 "),m("span",{class:"block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400"}," 高阶动效原子库 ")],-1)),i[6]||(i[6]=m("p",{class:"relative z-10 mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400"},[Le(" 不再重复造普通表单，全面对标 Magic UI 与 Aceternity UI。"),m("br",{class:"hidden sm:inline"}),Le(" 面向 "),m("strong",null,"AI 官网、SaaS 营销页、酷炫个人主页"),Le("，提供 60fps 单文件即用的动效积木。 ")],-1)),m("div",op,[E(a,{to:"/docs/border-beam"},{default:ne(()=>[E(fr,{"shimmer-color":"#60a5fa",class:"h-12 px-8 text-base"},{default:ne(()=>[i[1]||(i[1]=m("span",null,"立即浏览组件",-1)),E(V(ia),{class:"h-4 w-4"})]),_:1})]),_:1}),m("button",{type:"button",class:"inline-flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-800",onClick:r},[n.value?(G(),rt(V(oa),{key:0,class:"h-4 w-4 text-emerald-500"})):(G(),rt(V(us),{key:1,class:"h-4 w-4 text-zinc-400"})),m("span",null,Ae(n.value?"已复制依赖指令":"复制基础依赖指令"),1)])]),m("div",ap,[m("div",lp,[E(xs,{size:90,duration:6,"color-from":"#38bdf8","color-to":"#a855f7","border-width":2,"border-radius":16}),i[4]||(i[4]=ls('<div class="mb-4 flex items-center justify-between border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60"><div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-rose-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span><span class="ml-2 font-mono text-xs text-zinc-400">components/BorderBeam.vue</span></div><div class="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Zero-Config / 粘贴即跑</span></div></div>',1)),m("div",cp,[i[3]||(i[3]=ls('<div class="space-y-1 text-zinc-600 dark:text-zinc-300"><p><span class="text-purple-500">&lt;template&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;div</span> <span class="text-amber-500">class=</span><span class="text-emerald-500">&quot;relative rounded-2xl&quot;</span><span class="text-blue-500">&gt;</span></p><p class="pl-8"><span class="text-blue-500">&lt;BorderBeam</span> <span class="text-amber-500">:duration=</span><span class="text-emerald-500">&quot;5&quot;</span> <span class="text-amber-500">:border-width=</span><span class="text-emerald-500">&quot;2&quot;</span> <span class="text-blue-500">/&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;/div&gt;</span></p><p><span class="text-purple-500">&lt;/template&gt;</span></p></div>',1)),E(a,{to:"/docs/border-beam",class:"shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"},{default:ne(()=>[...i[2]||(i[2]=[Le(" 浏览全部 8 款动效 → ",-1)])]),_:1})])])])]),m("section",up,[m("div",dp,[i[8]||(i[8]=m("p",{class:"mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase"}," 原生融合的技术栈与动效标准 ",-1)),E(Qn,{duration:25,"pause-on-hover":!0},{default:ne(()=>[(G(),K(_e,null,$t(t,o=>m("div",{key:o,class:"flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-5 py-2 text-xs font-bold text-zinc-700 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300"},[i[7]||(i[7]=m("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),m("span",null,Ae(o),1)])),64))]),_:1})])]),m("section",fp,[i[21]||(i[21]=m("div",{class:"text-center max-w-3xl mx-auto mb-16 space-y-4"},[m("h2",{class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"}," 首期 8 个爆款动效，为你装配就绪 "),m("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 每一个组件都经过精心打磨，在移动端与桌面端保持 60fps 满帧性能，同时支持 Clean Light 与 Deep Dark 双模自适应。 ")],-1)),E(Oa,null,{default:ne(()=>[E(bt,{name:"Border Beam",description:"现代 CSS 路径动画，高光激光沿圆角边框飞速流转，AI 推理与核心 VIP 的视觉焦点",cta:"查看详情与代码",href:"/docs/border-beam"},{icon:ne(()=>[E(V(at),{class:"h-5 w-5 text-sky-500"})]),background:ne(()=>[m("div",pp,[m("div",mp,[E(xs,{size:65,duration:3.5,"color-from":"#06b6d4","color-to":"#6366f1","border-width":2,"border-radius":12}),i[9]||(i[9]=m("div",{class:"flex items-center justify-between"},[m("div",{class:"flex items-center gap-2"},[m("span",{class:"relative flex h-2 w-2"},[m("span",{class:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),m("span",{class:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]),m("span",{class:"text-xs font-bold text-zinc-800 dark:text-zinc-200"},"AI 推理状态")]),m("span",{class:"rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-sky-600 dark:text-sky-400"},"360° 流动")],-1)),i[10]||(i[10]=m("div",{class:"space-y-1.5"},[m("div",{class:"h-2 w-4/5 rounded-full bg-zinc-200 dark:bg-zinc-700"}),m("div",{class:"h-2 w-3/5 rounded-full bg-gradient-to-r from-sky-500/40 to-indigo-500/40"})],-1))])])]),_:1}),E(bt,{name:"Interactive Particles",description:"原生 Canvas 2D 粒子引擎，支持鼠标悬浮动态引力排斥、微线互联与 60fps 满帧性能",cta:"查看详情与代码",href:"/docs/interactive-particles"},{icon:ne(()=>[E(V(fs),{class:"h-5 w-5 text-amber-500"})]),background:ne(()=>[m("div",hp,[E(Ta,{quantity:38,speed:.75,"mouse-radius":85,"connect-lines":!0,class:"absolute inset-0 h-full w-full"}),i[11]||(i[11]=m("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[m("div",{class:"flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1 text-xs font-mono font-medium text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900/60 dark:bg-zinc-900/80 dark:text-blue-400"},[m("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"}),m("span",null,"悬浮鼠标即刻磁吸交互")])],-1))])]),_:1}),E(bt,{name:"Retro Grid",description:"3D 倾斜无限延展赛博网格，原生区分明暗模式线条色彩，渲染极具科技纵深感的背景",cta:"查看详情与代码",href:"/docs/retro-grid"},{icon:ne(()=>[E(V(ds),{class:"h-5 w-5 text-indigo-500"})]),background:ne(()=>[m("div",gp,[E(vs,{angle:65,opacity:.85,"cell-size":34,"light-line-color":"#6366f1","dark-line-color":"#38bdf8"}),i[12]||(i[12]=m("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[m("span",{class:"rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-xs backdrop-blur-md dark:border-indigo-900/80 dark:bg-zinc-900/90 dark:text-indigo-400"}," 3D 空间动态透视 ")],-1))])]),_:1}),E(bt,{name:"Shimmer Button",description:"360° 旋转锥形流光高光外圈，适配核心 CTA 与付费引导，鼠标悬停即刻聚光",cta:"查看详情与代码",href:"/docs/shimmer-button"},{icon:ne(()=>[E(V(at),{class:"h-5 w-5 text-pink-500"})]),background:ne(()=>[m("div",bp,[E(fr,{"shimmer-color":"#ec4899","shimmer-duration":"2.4s",class:"shadow-lg"},{default:ne(()=>[E(V(at),{class:"h-4 w-4 text-pink-400"}),i[13]||(i[13]=m("span",null,"360° 旋转光晕按钮",-1))]),_:1}),i[14]||(i[14]=m("span",{class:"mt-3 text-[11px] font-mono text-zinc-400"},"悬停查看高光边缘旋转",-1))])]),_:1}),E(bt,{name:"Shiny Text",description:"金属质感微光划过文字，2.5s 线性平滑连续循环，高亮 Hero 标题与特色特性",cta:"查看详情与代码",href:"/docs/shiny-text"},{icon:ne(()=>[E(V(at),{class:"h-5 w-5 text-amber-500"})]),background:ne(()=>[m("div",xp,[i[15]||(i[15]=m("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"},null,-1)),E(Fn,{text:"✨ Metallic Shiny Sheen",class:"relative z-10 text-xl font-black tracking-tight",speed:2.2}),i[16]||(i[16]=m("p",{class:"relative z-10 mt-2 text-xs font-mono text-zinc-400"},"高对比连续金属质感流动",-1))])]),_:1}),E(bt,{name:"Dot Pattern",description:"极简矢量波点底纹，支持鼠标实时光晕跟随聚光灯，轻量零性能损耗",cta:"查看详情与代码",href:"/docs/dot-pattern"},{icon:ne(()=>[E(V(gu),{class:"h-5 w-5 text-emerald-500"})]),background:ne(()=>[m("div",vp,[E($a,{width:16,height:16,cr:1.2,glow:!0}),i[17]||(i[17]=m("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[m("span",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}," 移动鼠标点亮光晕 ")],-1))])]),_:1}),E(bt,{name:"Marquee",description:"纯 CSS 硬件加速无限无缝滚动跑马灯，支持鼠标悬浮暂停、反向循环与变速",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/marquee"},{icon:ne(()=>[E(V(mu),{class:"h-5 w-5 text-blue-500"})]),background:ne(()=>[m("div",yp,[E(Qn,{duration:16,"pause-on-hover":!0},{default:ne(()=>[(G(),K(_e,null,$t(["GPT-4o","Claude 3.5","DeepSeek-V3","Llama 3.3","Gemini 1.5"],o=>m("div",{key:o,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[i[18]||(i[18]=m("span",{class:"h-1.5 w-1.5 rounded-full bg-emerald-500"},null,-1)),m("span",null,Ae(o),1)])),64))]),_:1}),E(Qn,{duration:20,reverse:!0,"pause-on-hover":!0,class:"mt-2.5"},{default:ne(()=>[(G(),K(_e,null,$t(["Vue 3.5","TypeScript","Tailwind CSS","Zero-Config","Canvas 2D"],o=>m("div",{key:o,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[i[19]||(i[19]=m("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),m("span",null,Ae(o),1)])),64))]),_:1})])]),_:1}),E(bt,{name:"Bento Grid",description:"现代 SaaS 模块化栅格系统，卡片集成鼠标跟随 Spotlight 径向聚光灯流光",cta:"查看详情与代码",href:"/docs/bento-grid"},{icon:ne(()=>[E(V(ds),{class:"h-5 w-5 text-purple-500"})]),background:ne(()=>[...i[20]||(i[20]=[m("div",{class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent"},[m("div",{class:"grid grid-cols-2 gap-2 w-full max-w-[200px]"},[m("div",{class:"h-12 rounded-lg border border-purple-300/40 bg-purple-500/10 dark:border-purple-500/30 dark:bg-purple-500/20 flex items-center justify-center text-[10px] font-mono text-purple-600 dark:text-purple-300"}," Col 1 "),m("div",{class:"h-12 rounded-lg border border-blue-300/40 bg-blue-500/10 dark:border-blue-500/30 dark:bg-blue-500/20 flex items-center justify-center text-[10px] font-mono text-blue-600 dark:text-blue-300"}," Col 2 "),m("div",{class:"col-span-2 h-10 rounded-lg border border-indigo-300/40 bg-indigo-500/10 dark:border-indigo-500/30 dark:bg-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-600 dark:text-indigo-300"}," Span 2 · 动态聚光灯 ")])],-1)])]),_:1})]),_:1})]),m("section",wp,[m("div",kp,[m("div",_p,[m("div",zp,[m("div",Ap,[E(V(us),{class:"h-5 w-5"})]),i[22]||(i[22]=m("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," Copy & Paste 模式 ",-1)),i[23]||(i[23]=m("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不是封闭的黑盒 npm 库。代码完全属于你，复制进你的项目 `src/components/ui` 即可按需自定义与扩展。 ",-1))]),m("div",Cp,[m("div",Sp,[E(V(fs),{class:"h-5 w-5"})]),i[24]||(i[24]=m("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 单文件自包含（Zero-Config） ",-1)),i[25]||(i[25]=m("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 动画关键帧与路径封装在组件内，完全无需在 tailwind.config.js 中配置复杂的 keyframes，避免配置遗漏。 ",-1))]),m("div",Rp,[m("div",Ep,[E(V(at),{class:"h-5 w-5"})]),i[26]||(i[26]=m("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 真·明暗双模自适应 ",-1)),i[27]||(i[27]=m("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不仅在深黑背景下流光溢彩，更对纯白、浅灰背景做针对性调优，确保在任何业务场景下都有高级质感。 ",-1))])])])])])}}}),Wr=[{id:"border-beam",name:"BorderBeam",title:"Border Beam（跑马流光渐变边框）",category:"Effect",description:"沿着容器圆角边框匀速流动的彩色流光光束。大模型生成状态、VIP 特权卡片、核心功能高亮的科技感标配。",componentFilename:"BorderBeam.vue",componentCode:`<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface BorderBeamProps {
  borderWidth?: number
  size?: number
  duration?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
  reverse?: boolean
  borderRadius?: number | string
  class?: string
}

const props = withDefaults(defineProps<BorderBeamProps>(), {
  borderWidth: 1.5,
  size: 80,
  duration: 6,
  colorFrom: '#ffaa40',
  colorTo: '#9c40ff',
  delay: 0,
  reverse: false,
  borderRadius: 16,
})

const styleObj = computed(() => {
  const radius =
    typeof props.borderRadius === 'number'
      ? \`\${props.borderRadius}px\`
      : props.borderRadius
  return {
    '--size': \`\${props.size}px\`,
    '--duration': \`\${props.duration}s\`,
    '--border-width': \`\${props.borderWidth}px\`,
    '--color-from': props.colorFrom,
    '--color-to': props.colorTo,
    '--delay': \`-\${props.delay}s\`,
    '--direction': props.reverse ? 'reverse' : 'normal',
    '--radius': radius,
  } as Record<string, string>
})
<\/script>

<template>
  <div
    :style="styleObj"
    :class="
      cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] border-beam-mask',
        props.class
      )
    "
  >
    <div class="border-beam-element" />
  </div>
</template>

<style scoped>
.border-beam-mask {
  border-width: var(--border-width);
  border-style: solid;
  border-color: transparent;
  mask-clip: padding-box, border-box;
  mask-composite: intersect;
  mask-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
  -webkit-mask-clip: padding-box, border-box;
  -webkit-mask-composite: source-in, xor;
  -webkit-mask-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
}

.border-beam-element {
  position: absolute;
  aspect-ratio: 1 / 1;
  width: var(--size);
  offset-path: rect(0 auto auto 0 round var(--size));
  background: linear-gradient(to left, var(--color-from), var(--color-to), transparent);
  filter: drop-shadow(0 0 10px var(--color-from));
  animation: border-beam-anim var(--duration) linear infinite;
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}

@keyframes border-beam-anim {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
</style>`,usageCode:`<script setup lang="ts">
import BorderBeam from '@/components/ui/BorderBeam.vue'
<\/script>

<template>
  <!-- 容器必须具备 relative 和 overflow-hidden，圆角由容器自行决定 -->
  <div class="relative flex h-64 w-80 flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
    <span class="text-2xl font-bold">AI 智能分析引擎</span>
    <p class="mt-2 text-center text-xs text-zinc-500">正在实时生成语义向量流...</p>
    
    <!-- 引入流光光束 -->
    <BorderBeam :size="180" :duration="8" color-from="#38bdf8" color-to="#a855f7" />
  </div>
</template>`,propsList:[{name:"size",type:"number",default:"80",description:"光束在边框上延伸的长度尺寸 (px)"},{name:"duration",type:"number",default:"6",description:"光束绕边框一周所需的时间 (秒)"},{name:"borderWidth",type:"number",default:"1.5",description:"流光边框的粗细 (px)"},{name:"colorFrom",type:"string",default:"'#ffaa40'",description:"流光起始渐变颜色"},{name:"colorTo",type:"string",default:"'#9c40ff'",description:"流光结束渐变颜色"},{name:"delay",type:"number",default:"0",description:"动效延迟启动秒数"},{name:"reverse",type:"boolean",default:"false",description:"是否逆时针方向流动"},{name:"borderRadius",type:"number | string",default:"16",description:"容器圆角半径，确保转角轨迹与容器完全重合不突兀"}]},{id:"bento-grid",name:"BentoGrid",title:"Bento Grid（便当盒栅格布局）",category:"Layout",description:"苹果官网风靡全球的模块化栅格布局。每个卡片内置鼠标跟随径向渐变光晕（Spotlight）与 Hover 悬浮展开效果。",componentFilename:"BentoGrid.vue",componentCode:`<!-- BentoGrid.vue 容器 -->
<script setup lang="ts">
import { cn } from '@/lib/utils'

interface BentoGridProps {
  class?: string
}

const props = defineProps<BentoGridProps>()
<\/script>

<template>
  <div :class="cn('grid w-full grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[22rem]', props.class)">
    <slot />
  </div>
</template>`,usageCode:`<script setup lang="ts">
import BentoGrid from '@/components/ui/BentoGrid.vue'
import BentoCard from '@/components/ui/BentoCard.vue'
import { Cpu, ShieldCheck, Zap } from 'lucide-vue-next'
<\/script>

<template>
  <BentoGrid class="max-w-4xl mx-auto">
    <!-- 普通单列卡片 -->
    <BentoCard
      name="AI 神经网络加速"
      description="毫秒级生成多模态视觉与上下文理解"
      cta="了解架构"
      href="#"
    >
      <template #icon><Cpu class="h-5 w-5 text-blue-500" /></template>
    </BentoCard>

    <!-- 跨 2 列宽卡片 -->
    <BentoCard
      name="全球分布式节点"
      description="就近命中边缘节点，网络抖动降低 90%"
      class="md:col-span-2"
      cta="查看节点分布"
      href="#"
    >
      <template #icon><Zap class="h-5 w-5 text-amber-500" /></template>
    </BentoCard>
  </BentoGrid>
</template>`,propsList:[{name:"name",type:"string",default:"-",description:"BentoCard 卡片标题"},{name:"description",type:"string",default:"-",description:"BentoCard 卡片描述文字"},{name:"cta",type:"string",default:"''",description:"底部按钮引导文案"},{name:"href",type:"string",default:"''",description:"跳转链接地址"},{name:"spotlightRadius",type:"number",default:"300",description:"鼠标 Hover 聚光灯半径 (px)"}]},{id:"interactive-particles",name:"InteractiveParticles",title:"Interactive Particles（鼠标磁吸粒子光效背景）",category:"Background",description:"采用原生 Canvas 2D 渲染的高性能动态粒子背景。支持物理引力排斥、粒子间柔和连线与 60fps 丝滑运行。",componentFilename:"InteractiveParticles.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { cn } from '@/lib/utils'

interface ParticleProps {
  quantity?: number
  speed?: number
  maxRadius?: number
  mouseRadius?: number
  color?: string
  connectLines?: boolean
  class?: string
}

const props = withDefaults(defineProps<ParticleProps>(), {
  quantity: 50,
  speed: 0.6,
  maxRadius: 2,
  mouseRadius: 100,
  connectLines: true,
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrameId: number | null = null

interface Particle {
  x: number; y: number; vx: number; vy: number; size: number; baseAlpha: number; alpha: number;
}
let particles: Particle[] = []
const mouse = { x: -9999, y: -9999 }

function initParticles(width: number, height: number) {
  particles = []
  for (let i = 0; i < props.quantity; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * props.speed,
      vy: (Math.random() - 0.5) * props.speed,
      size: Math.random() * props.maxRadius + 0.8,
      baseAlpha: Math.random() * 0.5 + 0.2,
      alpha: Math.random() * 0.5 + 0.2,
    })
  }
}

function resizeCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  const ctx = canvas.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)
  initParticles(rect.width, rect.height)
}

function handleMouseMove(e: MouseEvent) {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top
}

function handleMouseLeave() {
  mouse.x = -9999
  mouse.y = -9999
}

function render() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const rect = canvas.getBoundingClientRect()
  const width = rect.width
  const height = rect.height
  ctx.clearRect(0, 0, width, height)

  const isDark = document.documentElement.classList.contains('dark')
  const defaultColor = isDark ? '255, 255, 255' : '59, 130, 246'
  const rgbColor = props.color || defaultColor

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    p.x += p.vx
    p.y += p.vy
    if (p.x < 0 || p.x > width) p.vx *= -1
    if (p.y < 0 || p.y > height) p.vy *= -1

    const dx = mouse.x - p.x
    const dy = mouse.y - p.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < props.mouseRadius) {
      const force = (props.mouseRadius - dist) / props.mouseRadius
      p.x -= (dx / dist) * force * 2
      p.y -= (dy / dist) * force * 2
      p.alpha = Math.min(p.baseAlpha + 0.4, 0.9)
    } else {
      p.alpha = p.baseAlpha
    }

    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fillStyle = rgbColor.startsWith('#') ? rgbColor : \`rgba(\${rgbColor}, \${p.alpha})\`
    ctx.fill()

    if (props.connectLines) {
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j]
        const lineDist = Math.hypot(p.x - p2.x, p.y - p2.y)
        if (lineDist < 80) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          const lineAlpha = (1 - lineDist / 80) * 0.15
          ctx.strokeStyle = \`rgba(\${defaultColor}, \${lineAlpha})\`
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }
    }
  }
  animationFrameId = requestAnimationFrame(render)
}

onMounted(() => {
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  render()
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  if (animationFrameId !== null) cancelAnimationFrame(animationFrameId)
})
<\/script>

<template>
  <div :class="cn('relative h-full w-full overflow-hidden', props.class)" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <canvas ref="canvasRef" class="pointer-events-none absolute inset-0 h-full w-full" />
    <div class="relative z-10 h-full w-full"><slot /></div>
  </div>
</template>`,usageCode:`<script setup lang="ts">
import InteractiveParticles from '@/components/ui/InteractiveParticles.vue'
<\/script>

<template>
  <div class="relative h-[450px] w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black">
    <InteractiveParticles :quantity="60" :mouse-radius="120" :connect-lines="true">
      <div class="flex h-full flex-col items-center justify-center text-center p-6">
        <h1 class="text-4xl font-extrabold tracking-tight">移动鼠标体验引力磁吸</h1>
        <p class="mt-3 text-zinc-500">粒子在接近鼠标时将产生动态微引力与连线发光</p>
      </div>
    </InteractiveParticles>
  </div>
</template>`,propsList:[{name:"quantity",type:"number",default:"50",description:"画板粒子总数量"},{name:"speed",type:"number",default:"0.6",description:"粒子漫游的基础运动速度"},{name:"mouseRadius",type:"number",default:"100",description:"鼠标斥力感应范围 (px)"},{name:"connectLines",type:"boolean",default:"true",description:"粒子接近时是否绘制连接线"},{name:"color",type:"string",default:"''",description:"自定义粒子色彩（如 59, 130, 246 或 #38bdf8）"}]},{id:"retro-grid",name:"RetroGrid",title:"Retro Grid（复古科技网格）",category:"Background",description:"3D 透视角度倾斜平移的无限赛博网格。原生支持明暗双模自适应线条，搭配顶部渐变柔和融入背景。",componentFilename:"RetroGrid.vue",componentCode:`<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface RetroGridProps {
  angle?: number
  cellSize?: number
  opacity?: number
  lightLineColor?: string
  darkLineColor?: string
  class?: string
}

const props = withDefaults(defineProps<RetroGridProps>(), {
  angle: 65,
  cellSize: 60,
  opacity: 0.5,
  lightLineColor: '#cbd5e1',
  darkLineColor: '#334155',
})

const styleObj = computed(() => {
  return {
    '--grid-angle': \`\${props.angle}deg\`,
    '--cell-size': \`\${props.cellSize}px\`,
    '--opacity': props.opacity.toString(),
    '--light-line': props.lightLineColor,
    '--dark-line': props.darkLineColor,
  } as Record<string, string>
})
<\/script>

<template>
  <div :style="styleObj" :class="cn('pointer-events-none absolute h-full w-full overflow-hidden opacity-[var(--opacity)] [perspective:200px]', props.class)">
    <div :class="cn('absolute inset-0 [transform:rotateX(var(--grid-angle))]', props.mask && 'retro-grid-horizon-mask')">
      <div class="retro-grid-plane animate-retro-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]" />
    </div>
  </div>
</template>

<style scoped>
.retro-grid-horizon-mask {
  mask-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 18%, rgba(0, 0, 0, 1) 38%, rgba(0, 0, 0, 1) 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 18%, rgba(0, 0, 0, 1) 38%, rgba(0, 0, 0, 1) 85%, transparent 100%);
}
.retro-grid-plane {
  background-image: linear-gradient(to right, var(--light-line) 1px, transparent 1.5px), linear-gradient(to bottom, var(--light-line) 1px, transparent 1.5px);
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}
:global(.dark) .retro-grid-plane {
  background-image: linear-gradient(to right, var(--dark-line) 1px, transparent 1.5px), linear-gradient(to bottom, var(--dark-line) 1px, transparent 1.5px);
}
.animate-retro-grid {
  animation: retro-grid-anim 15s linear infinite;
}
@keyframes retro-grid-anim {
  0% { transform: translateY(0); }
  100% { transform: translateY(var(--cell-size)); }
}
</style>`,usageCode:`<script setup lang="ts">
import RetroGrid from '@/components/ui/RetroGrid.vue'
<\/script>

<template>
  <div class="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
    <span class="pointer-events-none z-10 whitespace-pre-wrap text-center text-5xl font-extrabold tracking-tighter">
      Retro Grid
    </span>
    <RetroGrid :angle="65" />
  </div>
</template>`,propsList:[{name:"angle",type:"number",default:"65",description:"网格 3D 旋转倾角 (度)"},{name:"cellSize",type:"number",default:"60",description:"单个网格单元格大小 (px)"},{name:"opacity",type:"number",default:"0.5",description:"网格整体不透明度 (0 ~ 1)"},{name:"lightLineColor",type:"string",default:"'#cbd5e1'",description:"亮色模式下的线条颜色"},{name:"darkLineColor",type:"string",default:"'#334155'",description:"暗色模式下的线条颜色"}]},{id:"dot-pattern",name:"DotPattern",title:"Dot Pattern（复古科技波点底纹）",category:"Background",description:"极客感十足的矢量 SVG 波点纹理。支持开启鼠标感应聚光灯图层，鼠标掠过时光晕浮现。",componentFilename:"DotPattern.vue",componentCode:`<script setup lang="ts">
import { useId, ref } from 'vue'
import { cn } from '@/lib/utils'

interface DotPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  glow?: boolean
  class?: string
}

const props = withDefaults(defineProps<DotPatternProps>(), {
  width: 20,
  height: 20,
  x: 0,
  y: 0,
  cx: 1,
  cy: 1,
  cr: 1,
  glow: false,
})

const id = useId()
const mouseX = ref(-9999)
const mouseY = ref(-9999)

function handleMouseMove(e: MouseEvent) {
  if (!props.glow) return
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}

function handleMouseLeave() {
  mouseX.value = -9999
  mouseY.value = -9999
}
<\/script>

<template>
  <div :class="cn('pointer-events-none absolute inset-0 h-full w-full overflow-hidden', props.class)" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <svg aria-hidden="true" class="h-full w-full fill-neutral-400/60 dark:fill-neutral-700/60 transition-colors">
      <defs>
        <pattern :id="id" :width="props.width" :height="props.height" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" :x="props.x" :y="props.y">
          <circle :cx="props.cx" :cy="props.cy" :r="props.cr" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" :fill="\`url(#\${id})\`" />
    </svg>
    <div v-if="props.glow" class="absolute inset-0 transition-opacity duration-300" :style="{ background: \`radial-gradient(200px circle at \${mouseX}px \${mouseY}px, rgba(59, 130, 246, 0.15), transparent 80%)\` }" />
  </div>
</template>`,usageCode:`<script setup lang="ts">
import DotPattern from '@/components/ui/DotPattern.vue'
<\/script>

<template>
  <div class="relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-8">
    <p class="z-10 text-xl font-bold tracking-tight">SVG 矢量科技波点</p>
    <DotPattern :width="16" :height="16" :cr="1" :glow="true" />
  </div>
</template>`,propsList:[{name:"width",type:"number",default:"20",description:"波点水平间距 (px)"},{name:"height",type:"number",default:"20",description:"波点垂直间距 (px)"},{name:"cr",type:"number",default:"1",description:"波点圆点半径 (px)"},{name:"glow",type:"boolean",default:"false",description:"是否开启鼠标跟随发光效果"}]},{id:"shiny-text",name:"ShinyText",title:"Shiny Text（微光划过文字）",category:"Text",description:"纯 CSS 硬件加速的金属微光划过动效。自动兼顾亮色（深灰+纯黑高光）与暗色（中灰+纯白高光），字迹永远清晰。",componentFilename:"ShinyText.vue",componentCode:`<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface ShinyTextProps {
  text?: string
  duration?: number
  variant?: 'white' | 'cyber'
  class?: string
}

const props = withDefaults(defineProps<ShinyTextProps>(), {
  duration: 2.5,
  variant: 'white',
})

const styleObj = computed(() => {
  return {
    '--duration': \`\${props.duration}s\`,
  } as Record<string, string>
})
<\/script>

<template>
  <span
    :style="styleObj"
    :class="
      cn(
        'shiny-text-root inline-block font-bold bg-clip-text text-transparent',
        props.variant === 'white' && 'shiny-variant-white',
        props.variant === 'cyber' && 'shiny-variant-cyber',
        props.class
      )
    "
  >
    <slot>{{ props.text }}</slot>
  </span>
</template>

<style scoped>
.shiny-text-root {
  background-size: 200% 100%;
  animation: shiny-continuous var(--duration) linear infinite;
  -webkit-background-clip: text;
  background-clip: text;
}
.shiny-variant-white {
  background-image: linear-gradient(110deg, #9ca3af 20%, #09090b 50%, #9ca3af 80%);
}
:global(.dark) .shiny-variant-white {
  background-image: linear-gradient(110deg, rgba(255,255,255,0.4) 20%, #ffffff 50%, rgba(255,255,255,0.4) 80%);
  filter: drop-shadow(0 0 8px rgba(255,255,255,0.2));
}
.shiny-variant-cyber {
  background-image: linear-gradient(110deg, #6366f1 20%, #06b6d4 50%, #6366f1 80%);
}
:global(.dark) .shiny-variant-cyber {
  background-image: linear-gradient(110deg, rgba(99,102,241,0.5) 15%, #38bdf8 45%, #ffffff 50%, #ec4899 55%, rgba(99,102,241,0.5) 85%);
  filter: drop-shadow(0 0 12px rgba(56,189,248,0.3));
}
@keyframes shiny-continuous {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>`,usageCode:`<script setup lang="ts">
import ShinyText from '@/components/ui/ShinyText.vue'
<\/script>

<template>
  <div class="flex flex-col items-center gap-4">
    <div class="rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 px-4 py-1.5 text-xs">
      ✨ <ShinyText text="全新 Aura UI Vue 3.5 动效库发布" />
    </div>
    
    <h1 class="text-4xl font-extrabold tracking-tight">
      Empower Your <ShinyText text="AI Next-Gen" class="text-4xl font-extrabold" /> SaaS
    </h1>
  </div>
</template>`,propsList:[{name:"text",type:"string",default:"''",description:"展示文本内容（也可使用默认 Slot）"},{name:"duration",type:"number",default:"3.5",description:"微光划过一周的秒数"},{name:"variant",type:"'white' | 'cyber'",default:"'white'",description:"流光配色：纯白光刃 (white) 或赛博蓝紫霓虹 (cyber)"}]},{id:"shimmer-button",name:"ShimmerButton",title:"Shimmer Button（微光流转科技按钮）",category:"Button",description:"专为 Hero 区域最高转化率打造的 CTA 按钮。边缘环绕 360° 旋转光晕，内置磨砂衬底与按压回弹触感。",componentFilename:"ShimmerButton.vue",componentCode:`<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface ShimmerButtonProps {
  shimmerColor?: string
  shimmerSize?: string
  shimmerDuration?: string
  borderRadius?: string
  class?: string
}

const props = withDefaults(defineProps<ShimmerButtonProps>(), {
  shimmerColor: '#38bdf8',
  shimmerSize: '0.12em',
  shimmerDuration: '2.5s',
  borderRadius: '9999px',
})

const styleObj = computed(() => {
  return {
    '--shimmer-color': props.shimmerColor,
    '--shimmer-size': props.shimmerSize,
    '--speed': props.shimmerDuration,
    '--radius': props.borderRadius,
  } as Record<string, string>
})
<\/script>

<template>
  <button :style="styleObj" :class="cn('group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white transition-all duration-300 active:scale-95', 'border border-white/10 [border-radius:var(--radius)]', 'bg-zinc-900/90 shadow-md hover:shadow-lg hover:shadow-sky-500/20 dark:bg-black/90', props.class)">
    <div class="shimmer-spin-container pointer-events-none absolute -inset-[100%] [aspect-ratio:1] [border-radius:inherit]">
      <div class="shimmer-spin-gradient h-full w-full animate-shimmer-spin" />
    </div>
    <div class="absolute [inset:var(--shimmer-size)] [border-radius:inherit] bg-zinc-950/95 transition-colors duration-300 group-hover:bg-zinc-900/95" />
    <span class="relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-white">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.shimmer-spin-container {
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
.shimmer-spin-gradient {
  background: conic-gradient(from 0deg, transparent 0 340deg, var(--shimmer-color) 360deg);
}
.animate-shimmer-spin {
  animation: shimmer-spin-anim var(--speed) linear infinite;
}
@keyframes shimmer-spin-anim {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>`,usageCode:`<script setup lang="ts">
import ShimmerButton from '@/components/ui/ShimmerButton.vue'
import { ArrowRight } from 'lucide-vue-next'
<\/script>

<template>
  <div class="flex items-center gap-4">
    <ShimmerButton shimmer-color="#38bdf8">
      <span>立即获取代码</span>
      <ArrowRight class="h-4 w-4" />
    </ShimmerButton>
    
    <ShimmerButton shimmer-color="#ec4899" shimmer-duration="3.5s">
      <span>开始免费试用</span>
    </ShimmerButton>
  </div>
</template>`,propsList:[{name:"shimmerColor",type:"string",default:"'#38bdf8'",description:"旋转微光的颜色"},{name:"shimmerSize",type:"string",default:"'0.12em'",description:"微光边缘厚度"},{name:"shimmerDuration",type:"string",default:"'2.5s'",description:"360 度旋转耗时"},{name:"borderRadius",type:"string",default:"'9999px'",description:"按钮圆角大小"}]},{id:"marquee",name:"Marquee",title:"Marquee（无限平滑滚动的合作伙伴 Logo 墙）",category:"Layout",description:"纯 CSS 硬件加速的无限平滑跑马灯。内置鼠标悬浮暂停、反向滚动、多份克隆自适应大屏，不掉帧卡顿。",componentFilename:"Marquee.vue",componentCode:`<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  duration?: number
  reverse?: boolean
  pauseOnHover?: boolean
  vertical?: boolean
  repeat?: number
  class?: string
}

const props = withDefaults(defineProps<MarqueeProps>(), {
  duration: 30,
  reverse: false,
  pauseOnHover: true,
  vertical: false,
  repeat: 4,
})

const styleObj = computed(() => {
  return {
    '--duration': \`\${props.duration}s\`,
  } as Record<string, string>
})
<\/script>

<template>
  <div :style="styleObj" :class="cn('group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]', props.vertical ? 'flex-col' : 'flex-row', props.class)">
    <div v-for="i in props.repeat" :key="i" :class="cn('flex shrink-0 justify-around [gap:var(--gap)]', props.vertical ? 'flex-col animate-marquee-vertical' : 'flex-row animate-marquee', props.pauseOnHover && 'group-hover:[animation-play-state:paused]', props.reverse && '[animation-direction:reverse]')">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee-anim var(--duration) linear infinite;
}
.animate-marquee-vertical {
  animation: marquee-vertical-anim var(--duration) linear infinite;
}
@keyframes marquee-anim {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - var(--gap))); }
}
@keyframes marquee-vertical-anim {
  from { transform: translateY(0); }
  to { transform: translateY(calc(-100% - var(--gap))); }
}
</style>`,usageCode:`<script setup lang="ts">
import Marquee from '@/components/ui/Marquee.vue'

const logos = ['OpenAI', 'Anthropic', 'Google Cloud', 'NVIDIA', 'Vercel', 'Supabase', 'DeepSeek']
<\/script>

<template>
  <div class="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 py-8">
    <Marquee :duration="20" :pause-on-hover="true">
      <div
        v-for="logo in logos"
        :key="logo"
        class="flex h-12 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-6 font-bold text-zinc-700 dark:text-zinc-300"
      >
        {{ logo }}
      </div>
    </Marquee>

    <!-- 左右渐变遮罩，使滚动自然融入边缘 -->
    <div class="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-black" />
    <div class="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-black" />
  </div>
</template>`,propsList:[{name:"duration",type:"number",default:"30",description:"跑马灯循环一周秒数"},{name:"pauseOnHover",type:"boolean",default:"true",description:"鼠标悬停时是否暂停动画"},{name:"reverse",type:"boolean",default:"false",description:"是否反向滚动"},{name:"vertical",type:"boolean",default:"false",description:"是否为垂直滚动"},{name:"repeat",type:"number",default:"4",description:"克隆渲染份数，防止大屏空白"}]},{id:"meteors",name:"Meteors",title:"Meteors（赛博流星雨）",category:"Effect",description:"纯 CSS 现代流星雨划过动效，带流光长尾羽翼与随机间隔延迟，暗黑科技卡片与首屏神级点缀。",componentFilename:"Meteors.vue",componentCode:`<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface MeteorsProps {
  number?: number
  angle?: number
  minDelay?: number
  maxDelay?: number
  minDuration?: number
  maxDuration?: number
  class?: string
}

const props = withDefaults(defineProps<MeteorsProps>(), {
  number: 20,
  angle: 215,
  minDelay: 0.2,
  maxDelay: 1.2,
  minDuration: 2,
  maxDuration: 8,
})

const meteorStyles = computed(() => {
  return Array.from({ length: props.number }).map(() => {
    const top = Math.floor(Math.random() * 100)
    const left = Math.floor(Math.random() * 100)
    const delay = (Math.random() * (props.maxDelay - props.minDelay) + props.minDelay).toFixed(2)
    const duration = (Math.random() * (props.maxDuration - props.minDuration) + props.minDuration).toFixed(2)
    return {
      top: \`\${top}%\`,
      left: \`\${left}%\`,
      animationDelay: \`\${delay}s\`,
      animationDuration: \`\${duration}s\`,
    }
  })
})
<\/script>

<template>
  <div :class="cn('pointer-events-none absolute inset-0 overflow-hidden', props.class)">
    <span
      v-for="(style, index) in meteorStyles"
      :key="index"
      :style="{ ...style, '--angle': \`\${props.angle}deg\` }"
      class="meteor-streak animate-meteor absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[var(--angle)] dark:bg-sky-400"
    />
  </div>
</template>

<style scoped>
.meteor-streak::before {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 1px;
  background: linear-gradient(90deg, #64748b, transparent);
}
:global(.dark) .meteor-streak::before {
  background: linear-gradient(90deg, #38bdf8, transparent);
}
.animate-meteor {
  animation: meteor-anim var(--duration, 5s) linear infinite;
  will-change: transform, opacity;
}
@keyframes meteor-anim {
  0% { transform: rotate(var(--angle, 215deg)) translateX(0); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: rotate(var(--angle, 215deg)) translateX(-500px); opacity: 0; }
}
</style>`,usageCode:`<script setup lang="ts">
import Meteors from '@/components/ui/Meteors.vue'
<\/script>

<template>
  <div class="relative flex h-64 w-96 flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-xl">
    <Meteors :number="25" />
    <span class="text-xs font-mono text-sky-500 font-semibold tracking-wider uppercase">Meteor Shower</span>
    <h3 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100">AI 宇宙算力池已就绪</h3>
    <p class="text-xs text-zinc-500 dark:text-zinc-400">流星从深空划过，为卡片注入源源不断的能量。</p>
  </div>
</template>`,propsList:[{name:"number",type:"number",default:"20",description:"流星数量"},{name:"angle",type:"number",default:"215",description:"流星划落的倾角（度）"},{name:"minDelay",type:"number",default:"0.2",description:"最小动画延迟秒数"},{name:"maxDelay",type:"number",default:"1.2",description:"最大动画延迟秒数"},{name:"minDuration",type:"number",default:"2",description:"最快单颗流星飞过耗时（秒）"},{name:"maxDuration",type:"number",default:"8",description:"最慢单颗流星飞过耗时（秒）"}]},{id:"ripple",name:"Ripple",title:"Ripple（同心声波涟漪）",category:"Effect",description:"由中心向外周循环脉冲扩散的多层同心圆涟漪，适配 AI 语音交互录音、雷达声呐扫描与核心头像高亮。",componentFilename:"Ripple.vue",componentCode:`<script setup lang="ts">
import { cn } from '@/lib/utils'

interface RippleProps {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
  class?: string
}

const props = withDefaults(defineProps<RippleProps>(), {
  mainCircleSize: 210,
  mainCircleOpacity: 0.24,
  numCircles: 8,
})
<\/script>

<template>
  <div :class="cn('pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]', props.class)">
    <div
      v-for="i in props.numCircles"
      :key="i"
      :style="{
        width: \`\${props.mainCircleSize + (i - 1) * 70}px\`,
        height: \`\${props.mainCircleSize + (i - 1) * 70}px\`,
        opacity: Math.max(0.04, props.mainCircleOpacity - (i - 1) * 0.025),
        animationDelay: \`\${(i - 1) * 0.06}s\`,
        borderStyle: i === props.numCircles ? 'dashed' : 'solid',
        borderWidth: '1px',
      }"
      class="animate-ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-500/40 bg-blue-500/5 shadow-[0_0_16px_rgba(59,130,246,0.1)] dark:border-sky-400/30 dark:bg-sky-400/5"
    />
  </div>
</template>

<style scoped>
.animate-ripple {
  animation: ripple-pulse 3.6s ease-in-out infinite;
  will-change: transform;
}
@keyframes ripple-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(0.9); }
}
</style>`,usageCode:`<script setup lang="ts">
import Ripple from '@/components/ui/Ripple.vue'
import { Mic } from 'lucide-vue-next'
<\/script>

<template>
  <div class="relative flex h-80 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
    <Ripple :main-circle-size="160" :num-circles="7" />
    <div class="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30">
      <Mic class="h-7 w-7" />
    </div>
    <p class="relative z-10 mt-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">正在聆听语音指令...</p>
  </div>
</template>`,propsList:[{name:"mainCircleSize",type:"number",default:"210",description:"中心最内层圆环直径 (px)"},{name:"mainCircleOpacity",type:"number",default:"0.24",description:"中心圆环不透明度"},{name:"numCircles",type:"number",default:"8",description:"同心波纹总环数"}]},{id:"number-ticker",name:"NumberTicker",title:"Number Ticker（平滑数字计数器）",category:"Text",description:"采用高阶 easeOutExpo 缓动曲线的平滑数字翻牌器，进入视口自动起跑，SaaS 核心关键业务指标必备。",componentFilename:"NumberTicker.vue",componentCode:`<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface NumberTickerProps {
  value: number
  direction?: 'up' | 'down'
  duration?: number
  delay?: number
  decimalPlaces?: number
  class?: string
}

const props = withDefaults(defineProps<NumberTickerProps>(), {
  direction: 'up',
  duration: 2,
  delay: 0,
  decimalPlaces: 0,
})

const spanRef = ref<HTMLSpanElement | null>(null)
const displayValue = ref<string>('0')
let animationFrameId: number | null = null
let observer: IntersectionObserver | null = null
let hasAnimated = false

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: props.decimalPlaces,
    maximumFractionDigits: props.decimalPlaces,
  }).format(num)
}

function startAnimation() {
  if (hasAnimated) return
  hasAnimated = true

  const startVal = props.direction === 'down' ? props.value : 0
  const endVal = props.direction === 'down' ? 0 : props.value
  const durationMs = props.duration * 1000
  let startTime: number | null = null

  setTimeout(() => {
    function animate(currentTime: number) {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const easedProgress = easeOutExpo(progress)

      const current = startVal + (endVal - startVal) * easedProgress
      displayValue.value = formatNumber(current)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        displayValue.value = formatNumber(endVal)
      }
    }
    animationFrameId = requestAnimationFrame(animate)
  }, props.delay * 1000)
}

onMounted(() => {
  displayValue.value = formatNumber(props.direction === 'down' ? props.value : 0)
  if (spanRef.value) {
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startAnimation()
        if (observer) observer.disconnect()
      }
    }, { threshold: 0.1 })
    observer.observe(spanRef.value)
  } else {
    startAnimation()
  }
})

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  if (observer) observer.disconnect()
})
<\/script>

<template>
  <span ref="spanRef" :class="cn('inline-block tabular-nums tracking-wider', props.class)">
    {{ displayValue }}
  </span>
</template>`,usageCode:`<script setup lang="ts">
import NumberTicker from '@/components/ui/NumberTicker.vue'
<\/script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
    <div class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 text-center">
      <div class="text-4xl font-black text-blue-600 dark:text-sky-400">
        <NumberTicker :value="99.99" :decimal-places="2" />%
      </div>
      <p class="mt-2 text-xs text-zinc-500">SLA 生产高可用性</p>
    </div>
    <div class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 text-center">
      <div class="text-4xl font-black text-indigo-600 dark:text-indigo-400">
        <NumberTicker :value="10000000" />+
      </div>
      <p class="mt-2 text-xs text-zinc-500">每日处理 Token 数量</p>
    </div>
    <div class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 text-center">
      <div class="text-4xl font-black text-emerald-600 dark:text-emerald-400">
        <NumberTicker :value="12" />ms
      </div>
      <p class="mt-2 text-xs text-zinc-500">端到端流式推理延迟</p>
    </div>
  </div>
</template>`,propsList:[{name:"value",type:"number",default:"-",description:"目标跳动数字"},{name:"direction",type:"'up' | 'down'",default:"'up'",description:"递增跳动或倒计跳动"},{name:"duration",type:"number",default:"2",description:"动画时长（秒）"},{name:"delay",type:"number",default:"0",description:"动画启动延迟（秒）"},{name:"decimalPlaces",type:"number",default:"0",description:"保留小数位数"}]},{id:"animated-beam",name:"AnimatedBeam",title:"Animated Beam（多节点能量光束）",category:"Effect",description:"Magic UI 最具标志性的连线动效，在两个 DOM 节点之间自动计算贝塞尔曲线轨道，并驱动光球能量脉冲流动。",componentFilename:"AnimatedBeam.vue",componentCode:`<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, useId, type Ref } from 'vue'
import { cn } from '@/lib/utils'

interface AnimatedBeamProps {
  containerRef?: Ref<HTMLElement | null>
  fromRef?: Ref<HTMLElement | null>
  toRef?: Ref<HTMLElement | null>
  curvature?: number
  reverse?: boolean
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  duration?: number
  delay?: number
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
  class?: string
}

const props = withDefaults(defineProps<AnimatedBeamProps>(), {
  curvature: 0,
  reverse: false,
  pathColor: '#94a3b8',
  pathWidth: 2,
  pathOpacity: 0.2,
  gradientStartColor: '#38bdf8',
  gradientStopColor: '#6366f1',
  duration: 3,
  delay: 0,
  startXOffset: 0,
  startYOffset: 0,
  endXOffset: 0,
  endYOffset: 0,
})

const id = useId()
const pathD = ref<string>('')
const svgDimensions = ref<{ width: number; height: number }>({ width: 0, height: 0 })

function updatePath() {
  const container = props.containerRef?.value
  const fromEl = props.fromRef?.value
  const toEl = props.toRef?.value
  if (!container || !fromEl || !toEl) return

  const containerRect = container.getBoundingClientRect()
  const fromRect = fromEl.getBoundingClientRect()
  const toRect = toEl.getBoundingClientRect()

  svgDimensions.value = { width: containerRect.width, height: containerRect.height }

  const startX = fromRect.left - containerRect.left + fromRect.width / 2 + props.startXOffset
  const startY = fromRect.top - containerRect.top + fromRect.height / 2 + props.startYOffset
  const endX = toRect.left - containerRect.left + toRect.width / 2 + props.endXOffset
  const endY = toRect.top - containerRect.top + toRect.height / 2 + props.endYOffset

  const midX = (startX + endX) / 2
  const midY = (startY + endY) / 2
  const controlY = midY - props.curvature

  if (props.curvature === 0) {
    pathD.value = \`M \${startX},\${startY} L \${endX},\${endY}\`
  } else {
    pathD.value = \`M \${startX},\${startY} Q \${midX},\${controlY} \${endX},\${endY}\`
  }
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  updatePath()
  window.addEventListener('resize', updatePath)
  if (props.containerRef?.value) {
    resizeObserver = new ResizeObserver(() => updatePath())
    resizeObserver.observe(props.containerRef.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updatePath)
  if (resizeObserver) resizeObserver.disconnect()
})

watch([() => props.containerRef?.value, () => props.fromRef?.value, () => props.toRef?.value, () => props.curvature], () => {
  updatePath()
})
<\/script>

<template>
  <svg
    :width="svgDimensions.width"
    :height="svgDimensions.height"
    :viewBox="\`0 0 \${svgDimensions.width} \${svgDimensions.height}\`"
    :class="cn('pointer-events-none absolute inset-0 h-full w-full select-none overflow-visible', props.class)"
  >
    <path :d="pathD" fill="none" :stroke="props.pathColor" :stroke-width="props.pathWidth" :stroke-opacity="props.pathOpacity" stroke-linecap="round" />
    <path :d="pathD" fill="none" :stroke="\`url(#beam-gradient-\${id})\`" :stroke-width="props.pathWidth" stroke-linecap="round" />
    <defs>
      <linearGradient :id="\`beam-gradient-\${id}\`" gradientUnits="userSpaceOnUse">
        <stop offset="0%" :stop-color="props.gradientStartColor" stop-opacity="0" />
        <stop offset="50%" :stop-color="props.gradientStartColor" stop-opacity="1" />
        <stop offset="100%" :stop-color="props.gradientStopColor" stop-opacity="0" />
        <animate attributeName="x1" :from="props.reverse ? '100%' : '-50%'" :to="props.reverse ? '-50%' : '100%'" :dur="\`\${props.duration}s\`" :begin="\`\${props.delay}s\`" repeatCount="indefinite" />
        <animate attributeName="x2" :from="props.reverse ? '150%' : '0%'" :to="props.reverse ? '0%' : '150%'" :dur="\`\${props.duration}s\`" :begin="\`\${props.delay}s\`" repeatCount="indefinite" />
      </linearGradient>
    </defs>
  </svg>
</template>`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import AnimatedBeam from '@/components/ui/AnimatedBeam.vue'
import { User, Sparkles, Database } from 'lucide-vue-next'

const containerRef = ref<HTMLDivElement | null>(null)
const userRef = ref<HTMLDivElement | null>(null)
const aiRef = ref<HTMLDivElement | null>(null)
const dbRef = ref<HTMLDivElement | null>(null)
<\/script>

<template>
  <div ref="containerRef" class="relative flex h-64 w-full items-center justify-between px-16 border rounded-2xl bg-zinc-950">
    <div ref="userRef" class="z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-white">
      <User class="h-6 w-6" />
    </div>
    <div ref="aiRef" class="z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/50">
      <Sparkles class="h-7 w-7" />
    </div>
    <div ref="dbRef" class="z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-white">
      <Database class="h-6 w-6" />
    </div>

    <AnimatedBeam :container-ref="containerRef" :from-ref="userRef" :to-ref="aiRef" :duration="2.5" />
    <AnimatedBeam :container-ref="containerRef" :from-ref="aiRef" :to-ref="dbRef" :duration="2.5" :delay="0.5" />
  </div>
</template>`,propsList:[{name:"containerRef",type:"Ref<HTMLElement | null>",default:"-",description:"相对定位的父级容器 Ref"},{name:"fromRef",type:"Ref<HTMLElement | null>",default:"-",description:"连线起始节点 Ref"},{name:"toRef",type:"Ref<HTMLElement | null>",default:"-",description:"连线目标节点 Ref"},{name:"curvature",type:"number",default:"0",description:"曲线弧度弯曲量（0 为直线）"},{name:"reverse",type:"boolean",default:"false",description:"是否反向流动"},{name:"duration",type:"number",default:"3",description:"单颗能量球飞过耗时（秒）"},{name:"gradientStartColor",type:"string",default:"'#38bdf8'",description:"能量球高光起始颜色"},{name:"gradientStopColor",type:"string",default:"'#6366f1'",description:"能量球高光收尾颜色"}]},{id:"lamp-effect",name:"LampEffect",title:"Lamp Effect（极光天顶聚光灯）",category:"Layout",description:"Aceternity UI 镇馆之宝，两道对称的极光天锥从天花板投下，营造大模型新品发布会般尊贵大气的 Hero 视觉舞台。",componentFilename:"LampEffect.vue",componentCode:`<script setup lang="ts">
import { cn } from '@/lib/utils'

interface LampProps {
  glowColor?: string
  class?: string
}

const props = withDefaults(defineProps<LampProps>(), {
  glowColor: '#06b6d4',
})
<\/script>

<template>
  <div :class="cn('relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-2xl z-0', props.class)">
    <div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
      <div
        style="background-image: conic-gradient(var(--conic-position), var(--tw-gradient-stops));"
        class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
      >
        <div class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
      </div>

      <div
        style="background-image: conic-gradient(var(--conic-position), var(--tw-gradient-stops));"
        class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
      >
        <div class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
      </div>

      <div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl" />
      <div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
      <div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" />
      <div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl" />
      <div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
      <div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-950" />
    </div>

    <div class="relative z-50 -translate-y-32 flex flex-col items-center px-5 text-center">
      <slot />
    </div>
  </div>
</template>`,usageCode:`<script setup lang="ts">
import LampEffect from '@/components/ui/LampEffect.vue'
<\/script>

<template>
  <LampEffect>
    <h1 class="bg-gradient-to-br from-slate-200 to-slate-500 bg-clip-text text-center text-4xl font-black tracking-tight text-transparent md:text-7xl">
      Next-Gen AI Platform <br /> Built for Builders
    </h1>
    <p class="mt-4 max-w-lg text-sm text-slate-400">
      天顶聚光灯优雅划破黑夜，将全世界的视线汇聚在你的旗舰产品之上。
    </p>
  </LampEffect>
</template>`,propsList:[{name:"glowColor",type:"string",default:"'#06b6d4'",description:"聚光灯主色调"}]},{id:"flickering-grid",name:"FlickeringGrid",title:"Flickering Grid（呼吸噪波微光网格）",category:"Background",description:"Canvas 2D 原生微闪烁网格，每个小方格独立呼吸微光，营造赛博黑客帝国与智能矩阵氛围。",componentFilename:"FlickeringGrid.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { cn } from '@/lib/utils'

interface FlickeringGridProps {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  maxOpacity?: number
  class?: string
}

const props = withDefaults(defineProps<FlickeringGridProps>(), {
  squareSize: 4,
  gridGap: 4,
  flickerChance: 0.3,
  maxOpacity: 0.3,
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrameId: number | null = null
let squares: Float32Array = new Float32Array(0)
let cols = 0
let rows = 0

function initGrid(width: number, height: number) {
  cols = Math.floor(width / (props.squareSize + props.gridGap))
  rows = Math.floor(height / (props.squareSize + props.gridGap))
  squares = new Float32Array(cols * rows)
  for (let i = 0; i < squares.length; i++) {
    squares[i] = Math.random() * props.maxOpacity
  }
}

function resizeCanvas() {
  const container = containerRef.value
  const canvas = canvasRef.value
  if (!container || !canvas) return

  const dpr = window.devicePixelRatio || 1
  const rect = container.getBoundingClientRect()
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  const ctx = canvas.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)
  initGrid(rect.width, rect.height)
}

function render() {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const rect = container.getBoundingClientRect()
  ctx.clearRect(0, 0, rect.width, rect.height)

  const isDark = document.documentElement.classList.contains('dark')
  const defaultRgb = isDark ? '148, 163, 184' : '100, 116, 139'
  const rgb = props.color || defaultRgb

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c
      if (Math.random() < props.flickerChance) {
        squares[idx] = Math.random() * props.maxOpacity
      }
      const opacity = squares[idx]
      ctx.fillStyle = rgb.startsWith('#') ? rgb : \`rgba(\${rgb}, \${opacity})\`
      const x = c * (props.squareSize + props.gridGap)
      const y = r * (props.squareSize + props.gridGap)
      ctx.fillRect(x, y, props.squareSize, props.squareSize)
    }
  }
  animationFrameId = requestAnimationFrame(render)
}

onMounted(() => {
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  render()
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
<\/script>

<template>
  <div ref="containerRef" :class="cn('pointer-events-none relative h-full w-full overflow-hidden', props.class)">
    <canvas ref="canvasRef" class="absolute inset-0 h-full w-full" />
  </div>
</template>`,usageCode:`<script setup lang="ts">
import FlickeringGrid from '@/components/ui/FlickeringGrid.vue'
<\/script>

<template>
  <div class="relative flex h-80 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-6">
    <FlickeringGrid :square-size="4" :grid-gap="6" :flicker-chance="0.4" :max-opacity="0.35" class="absolute inset-0" />
    <div class="relative z-10 text-center">
      <h3 class="text-3xl font-black text-zinc-900 dark:text-zinc-100">矩阵呼吸微光</h3>
      <p class="mt-2 text-xs font-mono text-zinc-500">轻量级 Canvas 2D 粒子阵列，60fps 满帧性能</p>
    </div>
  </div>
</template>`,propsList:[{name:"squareSize",type:"number",default:"4",description:"单个小方格尺寸 (px)"},{name:"gridGap",type:"number",default:"4",description:"小方块之间的间距 (px)"},{name:"flickerChance",type:"number",default:"0.3",description:"每帧方块明暗呼吸的概率"},{name:"maxOpacity",type:"number",default:"0.3",description:"方块闪烁的最大透明度"},{name:"color",type:"string",default:"自适应",description:"方块颜色 (HEX 或 RGB 字符串)"}]}];var Bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kr={exports:{}},Gi;function Mp(){return Gi||(Gi=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=(function(r){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,a={},o={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function g(x){return x instanceof l?new l(x.type,g(x.content),x.alias):Array.isArray(x)?x.map(g):x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++i}),g.__id},clone:function g(x,v){v=v||{};var A,F;switch(o.util.type(x)){case"Object":if(F=o.util.objId(x),v[F])return v[F];A={},v[F]=A;for(var $ in x)x.hasOwnProperty($)&&(A[$]=g(x[$],v));return A;case"Array":return F=o.util.objId(x),v[F]?v[F]:(A=[],v[F]=A,x.forEach(function(S,j){A[j]=g(S,v)}),A);default:return x}},getLanguage:function(g){for(;g;){var x=s.exec(g.className);if(x)return x[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,x){g.className=g.className.replace(RegExp(s,"gi"),""),g.classList.add("language-"+x)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(A){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(A.stack)||[])[1];if(g){var x=document.getElementsByTagName("script");for(var v in x)if(x[v].src==g)return x[v]}return null}},isActive:function(g,x,v){for(var A="no-"+x;g;){var F=g.classList;if(F.contains(x))return!0;if(F.contains(A))return!1;g=g.parentElement}return!!v}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(g,x){var v=o.util.clone(o.languages[g]);for(var A in x)v[A]=x[A];return v},insertBefore:function(g,x,v,A){A=A||o.languages;var F=A[g],$={};for(var S in F)if(F.hasOwnProperty(S)){if(S==x)for(var j in v)v.hasOwnProperty(j)&&($[j]=v[j]);v.hasOwnProperty(S)||($[S]=F[S])}var re=A[g];return A[g]=$,o.languages.DFS(o.languages,function(ue,Se){Se===re&&ue!=g&&(this[ue]=$)}),$},DFS:function g(x,v,A,F){F=F||{};var $=o.util.objId;for(var S in x)if(x.hasOwnProperty(S)){v.call(x,S,x[S],A||S);var j=x[S],re=o.util.type(j);re==="Object"&&!F[$(j)]?(F[$(j)]=!0,g(j,v,null,F)):re==="Array"&&!F[$(j)]&&(F[$(j)]=!0,g(j,v,S,F))}}},plugins:{},highlightAll:function(g,x){o.highlightAllUnder(document,g,x)},highlightAllUnder:function(g,x,v){var A={callback:v,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",A),A.elements=Array.prototype.slice.apply(A.container.querySelectorAll(A.selector)),o.hooks.run("before-all-elements-highlight",A);for(var F=0,$;$=A.elements[F++];)o.highlightElement($,x===!0,A.callback)},highlightElement:function(g,x,v){var A=o.util.getLanguage(g),F=o.languages[A];o.util.setLanguage(g,A);var $=g.parentElement;$&&$.nodeName.toLowerCase()==="pre"&&o.util.setLanguage($,A);var S=g.textContent,j={element:g,language:A,grammar:F,code:S};function re(Se){j.highlightedCode=Se,o.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,o.hooks.run("after-highlight",j),o.hooks.run("complete",j),v&&v.call(j.element)}if(o.hooks.run("before-sanity-check",j),$=j.element.parentElement,$&&$.nodeName.toLowerCase()==="pre"&&!$.hasAttribute("tabindex")&&$.setAttribute("tabindex","0"),!j.code){o.hooks.run("complete",j),v&&v.call(j.element);return}if(o.hooks.run("before-highlight",j),!j.grammar){re(o.util.encode(j.code));return}if(x&&r.Worker){var ue=new Worker(o.filename);ue.onmessage=function(Se){re(Se.data)},ue.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))}else re(o.highlight(j.code,j.grammar,j.language))},highlight:function(g,x,v){var A={code:g,grammar:x,language:v};if(o.hooks.run("before-tokenize",A),!A.grammar)throw new Error('The language "'+A.language+'" has no grammar.');return A.tokens=o.tokenize(A.code,A.grammar),o.hooks.run("after-tokenize",A),l.stringify(o.util.encode(A.tokens),A.language)},tokenize:function(g,x){var v=x.rest;if(v){for(var A in v)x[A]=v[A];delete x.rest}var F=new f;return p(F,F.head,g),c(g,F,x,F.head,0),I(F)},hooks:{all:{},add:function(g,x){var v=o.hooks.all;v[g]=v[g]||[],v[g].push(x)},run:function(g,x){var v=o.hooks.all[g];if(!(!v||!v.length))for(var A=0,F;F=v[A++];)F(x)}},Token:l};r.Prism=o;function l(g,x,v,A){this.type=g,this.content=x,this.alias=v,this.length=(A||"").length|0}l.stringify=function g(x,v){if(typeof x=="string")return x;if(Array.isArray(x)){var A="";return x.forEach(function(re){A+=g(re,v)}),A}var F={type:x.type,content:g(x.content,v),tag:"span",classes:["token",x.type],attributes:{},language:v},$=x.alias;$&&(Array.isArray($)?Array.prototype.push.apply(F.classes,$):F.classes.push($)),o.hooks.run("wrap",F);var S="";for(var j in F.attributes)S+=" "+j+'="'+(F.attributes[j]||"").replace(/"/g,"&quot;")+'"';return"<"+F.tag+' class="'+F.classes.join(" ")+'"'+S+">"+F.content+"</"+F.tag+">"};function u(g,x,v,A){g.lastIndex=x;var F=g.exec(v);if(F&&A&&F[1]){var $=F[1].length;F.index+=$,F[0]=F[0].slice($)}return F}function c(g,x,v,A,F,$){for(var S in v)if(!(!v.hasOwnProperty(S)||!v[S])){var j=v[S];j=Array.isArray(j)?j:[j];for(var re=0;re<j.length;++re){if($&&$.cause==S+","+re)return;var ue=j[re],Se=ue.inside,Be=!!ue.lookbehind,Qe=!!ue.greedy,qe=ue.alias;if(Qe&&!ue.pattern.global){var le=ue.pattern.toString().match(/[imsuy]*$/)[0];ue.pattern=RegExp(ue.pattern.source,le+"g")}for(var se=ue.pattern||ue,J=A.next,we=F;J!==x.tail&&!($&&we>=$.reach);we+=J.value.length,J=J.next){var H=J.value;if(x.length>g.length)return;if(!(H instanceof l)){var Oe=1,de;if(Qe){if(de=u(se,we,g,Be),!de||de.index>=g.length)break;var oe=de.index,it=de.index+de[0].length,Fe=we;for(Fe+=J.value.length;oe>=Fe;)J=J.next,Fe+=J.value.length;if(Fe-=J.value.length,we=Fe,J.value instanceof l)continue;for(var me=J;me!==x.tail&&(Fe<it||typeof me.value=="string");me=me.next)Oe++,Fe+=me.value.length;Oe--,H=g.slice(we,Fe),de.index-=we}else if(de=u(se,0,H,Be),!de)continue;var oe=de.index,_=de[0],B=H.slice(0,oe),P=H.slice(oe+_.length),Y=we+H.length;$&&Y>$.reach&&($.reach=Y);var d=J.prev;B&&(d=p(x,d,B),we+=B.length),b(x,d,Oe);var h=new l(S,Se?o.tokenize(_,Se):_,qe,_);if(J=p(x,d,h),P&&p(x,J,P),Oe>1){var y={cause:S+","+re,reach:Y};c(g,x,v,J.prev,we,y),$&&y.reach>$.reach&&($.reach=y.reach)}}}}}}function f(){var g={value:null,prev:null,next:null},x={value:null,prev:g,next:null};g.next=x,this.head=g,this.tail=x,this.length=0}function p(g,x,v){var A=x.next,F={value:v,prev:x,next:A};return x.next=F,A.prev=F,g.length++,F}function b(g,x,v){for(var A=x.next,F=0;F<v&&A!==g.tail;F++)A=A.next;x.next=A,A.prev=x,g.length-=F}function I(g){for(var x=[],v=g.head.next;v!==g.tail;)x.push(v.value),v=v.next;return x}if(!r.document)return r.addEventListener&&(o.disableWorkerMessageHandler||r.addEventListener("message",function(g){var x=JSON.parse(g.data),v=x.language,A=x.code,F=x.immediateClose;r.postMessage(o.highlight(A,o.languages[v],v)),F&&r.close()},!1)),o;var z=o.util.currentScript();z&&(o.filename=z.src,z.hasAttribute("data-manual")&&(o.manual=!0));function O(){o.manual||o.highlightAll()}if(!o.manual){var T=document.readyState;T==="loading"||T==="interactive"&&z&&z.defer?document.addEventListener("DOMContentLoaded",O):window.requestAnimationFrame?window.requestAnimationFrame(O):window.setTimeout(O,16)}return o})(t);e.exports&&(e.exports=n),typeof Bi<"u"&&(Bi.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(s,i){var a={};a["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var l={};l[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:o},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,s){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:n.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(r){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",s=function(z,O){return"✖ Error "+z+" while fetching file: "+O},i="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",l="loading",u="loaded",c="failed",f="pre[data-src]:not(["+o+'="'+u+'"]):not(['+o+'="'+l+'"])';function p(z,O,T){var g=new XMLHttpRequest;g.open("GET",z,!0),g.onreadystatechange=function(){g.readyState==4&&(g.status<400&&g.responseText?O(g.responseText):g.status>=400?T(s(g.status,g.statusText)):T(i))},g.send(null)}function b(z){var O=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(z||"");if(O){var T=Number(O[1]),g=O[2],x=O[3];return g?x?[T,Number(x)]:[T,void 0]:[T,T]}}n.hooks.add("before-highlightall",function(z){z.selector+=", "+f}),n.hooks.add("before-sanity-check",function(z){var O=z.element;if(O.matches(f)){z.code="",O.setAttribute(o,l);var T=O.appendChild(document.createElement("CODE"));T.textContent=r;var g=O.getAttribute("data-src"),x=z.language;if(x==="none"){var v=(/\.(\w+)$/.exec(g)||[,"none"])[1];x=a[v]||v}n.util.setLanguage(T,x),n.util.setLanguage(O,x);var A=n.plugins.autoloader;A&&A.loadLanguages(x),p(g,function(F){O.setAttribute(o,u);var $=b(O.getAttribute("data-range"));if($){var S=F.split(/\r\n?|\n/g),j=$[0],re=$[1]==null?S.length:$[1];j<0&&(j+=S.length),j=Math.max(0,Math.min(j-1,S.length)),re<0&&(re+=S.length),re=Math.max(0,Math.min(re,S.length)),F=S.slice(j,re).join(`
`),O.hasAttribute("data-start")||O.setAttribute("data-start",String(j+1))}T.textContent=F,n.highlightElement(T)},function(F){O.setAttribute(o,c),T.textContent=F})}}),n.plugins.fileHighlight={highlight:function(O){for(var T=(O||document).querySelectorAll(f),g=0,x;x=T[g++];)n.highlightElement(x)}};var I=!1;n.fileHighlight=function(){I||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),I=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(Kr)),Kr.exports}var Ip=Mp();const Yr=Pp(Ip);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var Vi={},Hi;function Op(){return Hi||(Hi=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),Vi}Op();Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};s["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:s},Prism.languages.insertBefore("markup","cdata",i)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);const $p={class:"relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800 text-zinc-100 shadow-sm"},Tp={class:"flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5 text-xs text-zinc-400"},Lp={class:"font-mono"},Dp={class:"max-h-[480px] overflow-auto p-4 text-xs font-mono leading-relaxed"},jp={class:"!m-0 !p-0 !bg-transparent"},Np=["innerHTML"],qi=ye({__name:"CodeBlock",props:{code:{},language:{default:"html"},filename:{}},setup(e){const t=e,n=ke(!1),r=Re(()=>{const i=Yr.languages[t.language]||Yr.languages.markup;return Yr.highlight(t.code.trim(),i,t.language)});async function s(){try{await navigator.clipboard.writeText(t.code.trim()),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(i){console.error("Failed to copy",i)}}return(i,a)=>(G(),K("div",$p,[m("div",Tp,[m("span",Lp,Ae(t.filename||t.language.toUpperCase()),1),m("button",{type:"button",class:"inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",onClick:s},[n.value?(G(),rt(V(oa),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(G(),rt(V(us),{key:1,class:"h-3.5 w-3.5"})),m("span",null,Ae(n.value?"已复制！":"复制代码"),1)])]),m("div",Dp,[m("pre",jp,[m("code",{innerHTML:r.value},null,8,Np)])])]))}}),Bp={class:"space-y-4"},Gp={class:"space-y-1"},Vp={class:"text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},Hp={class:"text-sm text-zinc-500 dark:text-zinc-400"},qp={class:"overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-sm transition-colors"},Up={class:"flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 bg-zinc-50/80 px-4 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/60"},Wp={class:"flex items-center gap-1 rounded-lg bg-zinc-200/60 p-1 dark:bg-zinc-800/60 text-xs font-medium"},Kp={key:0,class:"flex items-center gap-2 text-xs"},Yp={class:"flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-0.5"},Xp={class:"relative"},Zp={class:"p-4"},Jp={class:"p-4"},Qp={key:0,class:"mt-8 space-y-3"},em={class:"overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800"},tm={class:"w-full text-left text-xs"},nm={class:"divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono"},rm={class:"px-4 py-2.5 font-bold text-blue-600 dark:text-blue-400"},sm={class:"px-4 py-2.5 text-pink-600 dark:text-pink-400"},im={class:"px-4 py-2.5 text-zinc-500"},om={class:"px-4 py-2.5 font-sans text-zinc-600 dark:text-zinc-300"},am=ye({__name:"ComponentPreview",props:{title:{},description:{},componentCode:{},usageCode:{},componentFilename:{},propsList:{}},setup(e){const t=e,n=ke("preview"),r=ke("default"),s=ke(0),i=ke(!0);let a=null;nn(()=>{i.value=document.documentElement.classList.contains("dark"),a=new MutationObserver(()=>{i.value=document.documentElement.classList.contains("dark")}),a.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}),rn(()=>{a==null||a.disconnect()});const o=Re(()=>r.value==="dark"?!0:r.value==="light"?!1:i.value);function l(){s.value++}return(u,c)=>(G(),K("div",Bp,[m("div",Gp,[m("h2",Vp,Ae(t.title),1),m("p",Hp,Ae(t.description),1)]),m("div",qp,[m("div",Up,[m("div",Wp,[m("button",{type:"button",class:W(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="preview"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:c[0]||(c[0]=f=>n.value="preview")},[E(V(cu),{class:"h-3.5 w-3.5"}),c[6]||(c[6]=m("span",null,"实时效果",-1))],2),m("button",{type:"button",class:W(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="component"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:c[1]||(c[1]=f=>n.value="component")},[E(V(xi),{class:"h-3.5 w-3.5"}),m("span",null,"组件源码 ("+Ae(t.componentFilename)+")",1)],2),m("button",{type:"button",class:W(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="usage"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:c[2]||(c[2]=f=>n.value="usage")},[E(V(xi),{class:"h-3.5 w-3.5"}),c[7]||(c[7]=m("span",null,"业务调用 (Usage.vue)",-1))],2)]),n.value==="preview"?(G(),K("div",Kp,[c[8]||(c[8]=m("span",{class:"text-zinc-400"},"视窗底色：",-1)),m("div",Yp,[m("button",{type:"button",class:W(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="default"?"bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:c[3]||(c[3]=f=>r.value="default")}," 自适应 ",2),m("button",{type:"button",class:W(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="light"?"bg-white text-zinc-900 shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:c[4]||(c[4]=f=>r.value="light")}," 亮白 ",2),m("button",{type:"button",class:W(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="dark"?"bg-black text-white shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:c[5]||(c[5]=f=>r.value="dark")}," 暗黑 ",2)]),m("button",{type:"button",class:"inline-flex items-center gap-1 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",title:"重新触发动效",onClick:l},[E(V(hu),{class:"h-3.5 w-3.5"})])])):pn("",!0)]),m("div",Xp,[$r(m("div",{class:W(["relative flex min-h-[360px] w-full items-center justify-center p-8 transition-colors duration-200",o.value?"dark bg-zinc-950 text-zinc-100":"bg-zinc-100/70 text-zinc-900"])},[(G(),K("div",{key:s.value,class:"w-full flex items-center justify-center"},[zt(u.$slots,"default",{isDark:o.value})]))],2),[[jr,n.value==="preview"]]),$r(m("div",Zp,[E(qi,{code:t.componentCode,filename:t.componentFilename,language:"html"},null,8,["code","filename"])],512),[[jr,n.value==="component"]]),$r(m("div",Jp,[E(qi,{code:t.usageCode,filename:"UsageExample.vue",language:"html"},null,8,["code"])],512),[[jr,n.value==="usage"]])])]),t.propsList&&t.propsList.length>0?(G(),K("div",Qp,[c[10]||(c[10]=m("h3",{class:"text-base font-semibold text-zinc-900 dark:text-zinc-100"}," Props 属性参考 ",-1)),m("div",em,[m("table",tm,[c[9]||(c[9]=m("thead",{class:"border-b border-zinc-200 bg-zinc-50/80 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"},[m("tr",null,[m("th",{class:"px-4 py-2.5"},"属性名"),m("th",{class:"px-4 py-2.5"},"类型"),m("th",{class:"px-4 py-2.5"},"默认值"),m("th",{class:"px-4 py-2.5"},"说明")])],-1)),m("tbody",nm,[(G(!0),K(_e,null,$t(t.propsList,f=>(G(),K("tr",{key:f.name,class:"text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40"},[m("td",rm,Ae(f.name),1),m("td",sm,Ae(f.type),1),m("td",im,Ae(f.default),1),m("td",om,Ae(f.description),1)]))),128))])])])])):pn("",!0)]))}}),lm=ye({__name:"Meteors",props:{number:{default:20},angle:{default:215},minDelay:{default:.2},maxDelay:{default:1.2},minDuration:{default:2},maxDuration:{default:8},class:{}},setup(e){const t=e,n=Re(()=>Array.from({length:t.number}).map(()=>{const r=Math.floor(Math.random()*100),s=Math.floor(Math.random()*100),i=(Math.random()*(t.maxDelay-t.minDelay)+t.minDelay).toFixed(2),a=(Math.random()*(t.maxDuration-t.minDuration)+t.minDuration).toFixed(2);return{top:`${r}%`,left:`${s}%`,animationDelay:`${i}s`,animationDuration:`${a}s`}}));return(r,s)=>(G(),K("div",{class:W(V(Ne)("pointer-events-none absolute inset-0 overflow-hidden",t.class))},[(G(!0),K(_e,null,$t(n.value,(i,a)=>(G(),K("span",{key:a,style:st({...i,"--angle":`${t.angle}deg`}),class:"meteor-streak animate-meteor absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[var(--angle)] dark:bg-sky-400"},null,4))),128))],2))}}),cm=Wt(lm,[["__scopeId","data-v-62dcc44a"]]),um=ye({__name:"Ripple",props:{mainCircleSize:{default:210},mainCircleOpacity:{default:.24},numCircles:{default:8},class:{}},setup(e){const t=e;return(n,r)=>(G(),K("div",{class:W(V(Ne)("pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",t.class))},[(G(!0),K(_e,null,$t(t.numCircles,s=>(G(),K("div",{key:s,style:st({width:`${t.mainCircleSize+(s-1)*70}px`,height:`${t.mainCircleSize+(s-1)*70}px`,opacity:Math.max(.04,t.mainCircleOpacity-(s-1)*.025),animationDelay:`${(s-1)*.06}s`,borderStyle:s===t.numCircles?"dashed":"solid",borderWidth:"1px"}),class:"animate-ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-500/40 bg-blue-500/5 shadow-[0_0_16px_rgba(59,130,246,0.1)] dark:border-sky-400/30 dark:bg-sky-400/5"},null,4))),128))],2))}}),dm=Wt(um,[["__scopeId","data-v-98c398f7"]]),Xr=ye({__name:"NumberTicker",props:{value:{},direction:{default:"up"},duration:{default:2},delay:{default:0},decimalPlaces:{default:0},class:{}},setup(e){const t=e,n=ke(null),r=ke("0");let s=null,i=null,a=!1;function o(c){return c===1?1:1-Math.pow(2,-10*c)}function l(c){return new Intl.NumberFormat("en-US",{minimumFractionDigits:t.decimalPlaces,maximumFractionDigits:t.decimalPlaces}).format(c)}function u(){if(a)return;a=!0;const c=t.direction==="down"?t.value:0,f=t.direction==="down"?0:t.value,p=t.duration*1e3;let b=null;setTimeout(()=>{function I(z){b||(b=z);const O=z-b,T=Math.min(O/p,1),g=o(T),x=c+(f-c)*g;r.value=l(x),T<1?s=requestAnimationFrame(I):r.value=l(f)}s=requestAnimationFrame(I)},t.delay*1e3)}return nn(()=>{r.value=l(t.direction==="down"?t.value:0),n.value?(i=new IntersectionObserver(c=>{c[0].isIntersecting&&(u(),i&&i.disconnect())},{threshold:.1}),i.observe(n.value)):u()}),rn(()=>{s&&cancelAnimationFrame(s),i&&i.disconnect()}),Ht(()=>t.value,()=>{a=!1,u()}),(c,f)=>(G(),K("span",{ref_key:"spanRef",ref:n,class:W(V(Ne)("inline-block tabular-nums tracking-wider",t.class))},Ae(r.value),3))}}),fm=["width","height","viewBox"],pm=["d","stroke","stroke-width","stroke-opacity"],mm=["d","stroke","stroke-width"],hm=["id"],gm=["stop-color"],bm=["stop-color"],xm=["stop-color"],vm=["from","to","dur","begin"],ym=["from","to","dur","begin"],Ui=ye({__name:"AnimatedBeam",props:{containerRef:{},fromRef:{},toRef:{},curvature:{default:0},reverse:{type:Boolean,default:!1},pathColor:{default:"#94a3b8"},pathWidth:{default:2},pathOpacity:{default:.2},gradientStartColor:{default:"#38bdf8"},gradientStopColor:{default:"#6366f1"},duration:{default:3},delay:{default:0},startXOffset:{default:0},startYOffset:{default:0},endXOffset:{default:0},endYOffset:{default:0},class:{}},setup(e){const t=e,n=Fo(),r=ke(""),s=ke({width:0,height:0});function i(l){return l?"value"in l?l.value:l instanceof HTMLElement?l:null:null}function a(){const l=i(t.containerRef),u=i(t.fromRef),c=i(t.toRef);if(!l||!u||!c)return;const f=l.getBoundingClientRect(),p=u.getBoundingClientRect(),b=c.getBoundingClientRect();s.value={width:f.width,height:f.height};const I=p.left-f.left+p.width/2+t.startXOffset,z=p.top-f.top+p.height/2+t.startYOffset,O=b.left-f.left+b.width/2+t.endXOffset,T=b.top-f.top+b.height/2+t.endYOffset,g=(I+O)/2,x=(z+T)/2,v=g,A=x-t.curvature;t.curvature===0?r.value=`M ${I},${z} L ${O},${T}`:r.value=`M ${I},${z} Q ${v},${A} ${O},${T}`}let o=null;return nn(()=>{a(),window.addEventListener("resize",a);const l=i(t.containerRef);l&&(o=new ResizeObserver(()=>a()),o.observe(l))}),rn(()=>{window.removeEventListener("resize",a),o&&o.disconnect()}),Ht([()=>i(t.containerRef),()=>i(t.fromRef),()=>i(t.toRef),()=>t.curvature],()=>{a()}),(l,u)=>(G(),K("svg",{width:s.value.width,height:s.value.height,viewBox:`0 0 ${s.value.width} ${s.value.height}`,class:W(V(Ne)("pointer-events-none absolute inset-0 h-full w-full select-none overflow-visible",t.class))},[m("path",{d:r.value,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-opacity":t.pathOpacity,"stroke-linecap":"round"},null,8,pm),m("path",{d:r.value,fill:"none",stroke:`url(#beam-gradient-${V(n)})`,"stroke-width":t.pathWidth,"stroke-linecap":"round"},null,8,mm),m("defs",null,[m("linearGradient",{id:`beam-gradient-${V(n)}`,gradientUnits:"userSpaceOnUse"},[m("stop",{offset:"0%","stop-color":t.gradientStartColor,"stop-opacity":"0"},null,8,gm),m("stop",{offset:"50%","stop-color":t.gradientStartColor,"stop-opacity":"1"},null,8,bm),m("stop",{offset:"100%","stop-color":t.gradientStopColor,"stop-opacity":"0"},null,8,xm),m("animate",{attributeName:"x1",from:t.reverse?"100%":"-50%",to:t.reverse?"-50%":"100%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,vm),m("animate",{attributeName:"x2",from:t.reverse?"150%":"0%",to:t.reverse?"0%":"150%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,ym)],8,hm)])],10,fm))}}),wm={class:"relative z-50 -translate-y-32 flex flex-col items-center px-5 text-center"},km=ye({__name:"LampEffect",props:{glowColor:{default:"#06b6d4"},class:{}},setup(e){const t=e;return(n,r)=>(G(),K("div",{class:W(V(Ne)("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-2xl z-0",t.class))},[r[0]||(r[0]=ls(`<div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"><div class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div><div class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"></div></div><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"><div class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"></div><div class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div></div><div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl"></div><div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div><div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div><div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></div><div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div><div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-950"></div></div>`,1)),m("div",wm,[zt(n.$slots,"default")])],2))}}),_m=ye({__name:"FlickeringGrid",props:{squareSize:{default:4},gridGap:{default:4},flickerChance:{default:.3},color:{},maxOpacity:{default:.3},class:{}},setup(e){const t=e,n=ke(null),r=ke(null);let s=null,i=new Float32Array(0),a=0,o=0;function l(f,p){a=Math.floor(f/(t.squareSize+t.gridGap)),o=Math.floor(p/(t.squareSize+t.gridGap)),i=new Float32Array(a*o);for(let b=0;b<i.length;b++)i[b]=Math.random()*t.maxOpacity}function u(){const f=n.value,p=r.value;if(!f||!p)return;const b=window.devicePixelRatio||1,I=f.getBoundingClientRect();p.width=I.width*b,p.height=I.height*b;const z=p.getContext("2d");z&&z.scale(b,b),l(I.width,I.height)}function c(){const f=r.value,p=n.value;if(!f||!p)return;const b=f.getContext("2d");if(!b)return;const I=p.getBoundingClientRect();b.clearRect(0,0,I.width,I.height);const O=document.documentElement.classList.contains("dark")?"148, 163, 184":"100, 116, 139",T=t.color||O;for(let g=0;g<o;g++)for(let x=0;x<a;x++){const v=g*a+x;Math.random()<t.flickerChance&&(i[v]=Math.random()*t.maxOpacity);const A=i[v];b.fillStyle=T.startsWith("#")?T:`rgba(${T}, ${A})`;const F=x*(t.squareSize+t.gridGap),$=g*(t.squareSize+t.gridGap);b.fillRect(F,$,t.squareSize,t.squareSize)}s=requestAnimationFrame(c)}return nn(()=>{u(),window.addEventListener("resize",u),c()}),rn(()=>{window.removeEventListener("resize",u),s&&cancelAnimationFrame(s)}),Ht([()=>t.squareSize,()=>t.gridGap],()=>{u()}),(f,p)=>(G(),K("div",{ref_key:"containerRef",ref:n,class:W(V(Ne)("pointer-events-none relative h-full w-full overflow-hidden",t.class))},[m("canvas",{ref_key:"canvasRef",ref:r,class:"absolute inset-0 h-full w-full"},null,512)],2))}}),zm={class:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"},Am={class:"flex flex-col md:flex-row gap-8"},Cm={class:"w-full md:w-64 shrink-0"},Sm={class:"sticky top-24 rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-xs backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70"},Rm={class:"space-y-1"},Em={class:"mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 px-2"},Fm={class:"flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100"},Pm={class:"min-w-0 flex-1"},Mm={class:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white mb-3 shadow-md shadow-blue-500/20"},Im={key:1,class:"w-full max-w-2xl"},Om={class:"flex h-full flex-col items-center justify-center p-6 text-center"},$m={key:5,class:"flex flex-col items-center gap-6 py-8"},Tm={class:"text-center"},Lm={class:"text-center mt-2"},Dm={key:6,class:"flex flex-wrap items-center justify-center gap-4 py-8"},jm={class:"relative z-10 flex items-center justify-between"},Nm={class:"relative z-10 flex flex-col items-center gap-3"},Bm={class:"flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30"},Gm={key:10,class:"grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl py-6"},Vm={class:"text-4xl font-black text-blue-600 dark:text-sky-400"},Hm={class:"text-4xl font-black text-indigo-600 dark:text-indigo-400"},qm={class:"text-4xl font-black text-emerald-600 dark:text-emerald-400"},Um={key:12,class:"w-full"},Wm={class:"relative z-10 text-center"},Km={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400 mb-3"},Ym=ye({__name:"DocsView",setup(e){const t=ke(null),n=ke(null),r=ke(null),s=ke(null),i=qd(),a=Re(()=>i.params.id||"border-beam"),o=Re(()=>Wr.find(u=>u.id===a.value)||Wr[0]),l=["OpenAI","Anthropic","Google","NVIDIA","DeepSeek","Vercel"];return(u,c)=>{const f=Bn("router-link");return G(),K("div",zm,[m("div",Am,[m("aside",Cm,[m("div",Sm,[c[3]||(c[3]=m("div",{class:"mb-3 px-2 flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider"},[m("span",null,"动效原子组件"),m("span",{class:"rounded bg-blue-100 dark:bg-blue-950/80 px-1.5 py-0.2 text-[10px] text-blue-600 dark:text-blue-400 font-bold"}," 14 个 ")],-1)),m("nav",Rm,[(G(!0),K(_e,null,$t(V(Wr),p=>(G(),rt(f,{key:p.id,to:`/docs/${p.id}`,class:W(["flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors",a.value===p.id?"bg-blue-600 text-white font-semibold shadow-xs":"text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"])},{default:ne(()=>[m("span",null,Ae(p.name),1),m("span",{class:W(["text-[10px] rounded px-1.5 py-0.5",a.value===p.id?"bg-blue-700/80 text-blue-100":"bg-zinc-100 dark:bg-zinc-900 text-zinc-400"])},Ae(p.category),3)]),_:2},1032,["to","class"]))),128))]),m("div",Em,[m("div",Fm,[E(V(xu),{class:"h-3.5 w-3.5 text-blue-500"}),c[0]||(c[0]=m("span",null,"基础依赖安装",-1))]),c[1]||(c[1]=m("p",{class:"mt-1 text-[11px] text-zinc-400"},"组件依赖轻量样式与工具库：",-1)),c[2]||(c[2]=m("div",{class:"mt-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-300 break-all select-all"}," npm i @vueuse/core clsx tailwind-merge ",-1))])])]),m("main",Pm,[(G(),rt(am,{key:o.value.id,title:o.value.title,description:o.value.description,"component-code":o.value.componentCode,"usage-code":o.value.usageCode,"component-filename":o.value.componentFilename,"props-list":o.value.propsList},{default:ne(({isDark:p})=>[o.value.id==="border-beam"?(G(),K("div",{key:0,class:W(["relative flex h-64 w-80 flex-col items-center justify-center rounded-2xl border p-6 shadow-md transition-colors duration-200",p?"border-zinc-800 bg-zinc-900 text-zinc-100 shadow-black/40":"border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/50"])},[m("div",Mm,[E(V(at),{class:"h-6 w-6"})]),m("h4",{class:W(["text-lg font-bold",p?"text-white":"text-zinc-900"])}," Border Beam Demo ",2),m("p",{class:W(["mt-1 text-center text-xs",p?"text-zinc-400":"text-zinc-500"])}," 流光平滑环绕圆角容器边缘 ",2),E(xs,{size:180,duration:8,"color-from":"#38bdf8","color-to":"#a855f7"})],2)):o.value.id==="bento-grid"?(G(),K("div",Im,[E(Oa,{class:"auto-rows-[16rem]"},{default:ne(()=>[E(bt,{name:"AI 向量引擎",description:"毫秒级生成多模态视觉理解",cta:"了解详情",href:"#",class:W(p?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900")},{icon:ne(()=>[E(V(au),{class:"h-5 w-5 text-blue-500"})]),_:1},8,["class"]),E(bt,{name:"全球边缘节点加速",description:"降低网络抖动，就近命中就近计算",class:W(["md:col-span-2",p?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900"]),cta:"查看分布",href:"#"},{icon:ne(()=>[E(V(fs),{class:"h-5 w-5 text-amber-500"})]),_:1},8,["class"])]),_:2},1024)])):o.value.id==="interactive-particles"?(G(),K("div",{key:2,class:W(["relative h-[360px] w-full rounded-2xl border overflow-hidden transition-colors duration-200",p?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[E(Ta,{quantity:60,"mouse-radius":120,"connect-lines":!0,color:p?"255, 255, 255":"59, 130, 246"},{default:ne(()=>[m("div",Om,[m("h3",{class:W(["text-2xl font-bold tracking-tight",p?"text-white":"text-zinc-900"])}," 移动光标体验引力感应 ",2),m("p",{class:W(["mt-2 text-xs",p?"text-zinc-400":"text-zinc-500"])}," Canvas 2D 60fps 满帧运行，动态引力排斥与光效连线 ",2)])]),_:2},1032,["color"])],2)):o.value.id==="retro-grid"?(G(),K("div",{key:3,class:W(["relative flex h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",p?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[m("span",{class:W(["z-10 text-4xl font-extrabold tracking-tighter",p?"text-white":"text-zinc-900"])}," Retro Synthwave Grid ",2),E(vs,{angle:65,"dark-line-color":"#334155","light-line-color":"#cbd5e1"})],2)):o.value.id==="dot-pattern"?(G(),K("div",{key:4,class:W(["relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border p-8 transition-colors duration-200",p?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[m("p",{class:W(["z-10 text-xl font-bold",p?"text-white":"text-zinc-900"])}," SVG 矢量波点底纹 (含发光聚光灯) ",2),E($a,{width:18,height:18,cr:1.2,glow:!0})],2)):o.value.id==="shiny-text"?(G(),K("div",$m,[m("div",{class:W(["rounded-full border px-5 py-2 text-xs font-medium shadow-sm transition-colors",p?"border-zinc-800 bg-zinc-900/90 text-zinc-300":"border-zinc-200 bg-zinc-100 text-zinc-700"])},[c[4]||(c[4]=Le(" ✨ ",-1)),E(Fn,{text:"Aura UI v1.0 全新微光发布",duration:2.5})],2),m("div",Tm,[E(Fn,{text:"Next-Gen AI Intelligence",class:"text-4xl sm:text-5xl font-black tracking-tight",duration:2.5}),m("p",{class:W(["mt-2 text-xs sm:text-sm",p?"text-zinc-500":"text-zinc-400"])}," 持续流淌的宽幅金属微光，肉眼清晰可观赏，绝无突兀停滞 ",2)]),m("div",Lm,[E(Fn,{text:"Cyberpunk Motion Primitives",variant:"cyber",class:"text-3xl sm:text-4xl font-extrabold tracking-tight",duration:3}),m("p",{class:W(["mt-1 text-xs",p?"text-zinc-500":"text-zinc-400"])}," 赛博霓虹蓝紫粒子流光，高频荡漾 ",2)])])):o.value.id==="shimmer-button"?(G(),K("div",Dm,[E(fr,{"shimmer-color":"#38bdf8"},{default:ne(()=>[c[5]||(c[5]=m("span",null,"立即获取代码",-1)),E(V(ia),{class:"h-4 w-4"})]),_:1}),E(fr,{"shimmer-color":"#ec4899","shimmer-duration":"3.5s"},{default:ne(()=>[...c[6]||(c[6]=[m("span",null,"Pink Shimmer",-1)])]),_:1})])):o.value.id==="marquee"?(G(),K("div",{key:7,class:W(["relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border py-6 transition-colors duration-200",p?"border-zinc-800 bg-black/60":"border-zinc-200 bg-zinc-50/80"])},[E(Qn,{duration:20,"pause-on-hover":!0},{default:ne(()=>[(G(),K(_e,null,$t(l,b=>m("div",{key:b,class:W(["flex h-12 items-center justify-center rounded-xl border px-6 font-bold text-xs shadow-xs transition-colors duration-200",p?"border-zinc-800 bg-zinc-900 text-zinc-200":"border-zinc-200 bg-white text-zinc-800"])},Ae(b),3)),64))]),_:2},1024),m("div",{class:W(["pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r",p?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2),m("div",{class:W(["pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l",p?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2)],2)):o.value.id==="meteors"?(G(),K("div",{key:8,class:W(["relative flex h-80 w-full max-w-lg flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-2xl transition-colors duration-200",p?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-slate-900 text-white"])},[E(cm,{number:30}),m("div",jm,[c[7]||(c[7]=m("span",{class:"rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20"}," Meteor Shower ",-1)),E(V(at),{class:"h-5 w-5 text-sky-400"})]),c[8]||(c[8]=m("div",{class:"relative z-10 space-y-2"},[m("h3",{class:"text-3xl font-black tracking-tight text-white"}," 赛博深空流星雨 "),m("p",{class:"text-xs text-zinc-400 leading-relaxed"}," 流星带有 50px 渐变光尾与随机延迟，全硬件加速流畅穿梭，卡片与 Hero 背景的氛围杀器。 ")],-1))],2)):o.value.id==="ripple"?(G(),K("div",{key:9,class:W(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",p?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[E(dm,{"main-circle-size":160,"num-circles":7}),m("div",Nm,[m("div",Bm,[E(V(fu),{class:"h-7 w-7"})]),c[9]||(c[9]=m("div",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-mono text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300"}," AI 智能语音拾音中... ",-1))])],2)):o.value.id==="number-ticker"?(G(),K("div",Gm,[m("div",{class:W(["rounded-2xl border p-6 text-center shadow-xs transition-colors",p?"border-zinc-800 bg-zinc-900":"border-zinc-200 bg-white"])},[m("div",Vm,[E(Xr,{value:99.99,"decimal-places":2}),c[10]||(c[10]=Le("% ",-1))]),c[11]||(c[11]=m("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"SLA 生产高可用性",-1))],2),m("div",{class:W(["rounded-2xl border p-6 text-center shadow-xs transition-colors",p?"border-zinc-800 bg-zinc-900":"border-zinc-200 bg-white"])},[m("div",Hm,[E(Xr,{value:1e7}),c[12]||(c[12]=Le("+ ",-1))]),c[13]||(c[13]=m("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"每日处理 Token 数量",-1))],2),m("div",{class:W(["rounded-2xl border p-6 text-center shadow-xs transition-colors",p?"border-zinc-800 bg-zinc-900":"border-zinc-200 bg-white"])},[m("div",qm,[E(Xr,{value:12}),c[14]||(c[14]=Le("ms ",-1))]),c[15]||(c[15]=m("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"端到端流式推理延迟",-1))],2)])):o.value.id==="animated-beam"?(G(),K("div",{key:11,class:W(["relative flex h-72 w-full max-w-xl items-center justify-between px-12 rounded-2xl border transition-colors duration-200",p?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"]),ref_key:"beamContainerRef",ref:t},[m("div",{ref_key:"beamUserRef",ref:n,class:W(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",p?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[E(V(vu),{class:"h-6 w-6 text-blue-500"})],2),m("div",{ref_key:"beamAiRef",ref:r,class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/40"},[E(V(at),{class:"h-8 w-8"})],512),m("div",{ref_key:"beamDbRef",ref:s,class:W(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",p?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[E(V(lu),{class:"h-6 w-6 text-indigo-500"})],2),E(Ui,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.4},null,8,["container-ref","from-ref","to-ref"]),E(Ui,{"container-ref":t.value,"from-ref":r.value,"to-ref":s.value,duration:2.4,delay:.6},null,8,["container-ref","from-ref","to-ref"])],2)):o.value.id==="lamp-effect"?(G(),K("div",Um,[E(km,{class:"min-h-[420px]"},{default:ne(()=>[...c[16]||(c[16]=[m("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-5xl font-black tracking-tight text-transparent"}," Next-Gen AI Platform ",-1),m("p",{class:"mt-3 max-w-md text-xs sm:text-sm text-slate-400"}," 双向极光天灯破晓而下，为旗舰级 AI 与 SaaS 官网赋予大模型发布会视觉。 ",-1)])]),_:1})])):o.value.id==="flickering-grid"?(G(),K("div",{key:13,class:W(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border p-6 transition-colors duration-200",p?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[E(_m,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),m("div",Wm,[m("div",Km,[E(V(ou),{class:"h-3.5 w-3.5"}),c[17]||(c[17]=m("span",null,"Canvas 2D 智能矩阵",-1))]),m("h3",{class:W(["text-3xl font-black tracking-tight",p?"text-white":"text-zinc-900"])}," 呼吸噪波微光网格 ",2),m("p",{class:W(["mt-2 text-xs font-mono",p?"text-zinc-400":"text-zinc-500"])}," 微型粒子矩阵异步平滑呼吸闪烁，零 CPU 占用，极客感拉满 ",2)])],2)):pn("",!0)]),_:1},8,["title","description","component-code","usage-code","component-filename","props-list"]))])])])}}}),Xm=Hd({history:kd(),routes:[{path:"/",name:"home",component:Fp},{path:"/docs/:id?",name:"docs",component:Ym},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(e,t,n){return n||{top:0}}}),La=tu(Du);La.use(Xm);La.mount("#app");
