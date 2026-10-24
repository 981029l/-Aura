(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _s(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ve={},Jt=[],kt=()=>{},Yi=()=>!1,br=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xr=e=>e.startsWith("onUpdate:"),je=Object.assign,zs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ua=Object.prototype.hasOwnProperty,ce=(e,t)=>Ua.call(e,t),ee=Array.isArray,Gt=e=>Nn(e)==="[object Map]",sr=e=>Nn(e)==="[object Set]",Us=e=>Nn(e)==="[object Date]",ne=e=>typeof e=="function",Ce=e=>typeof e=="string",ut=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Xi=e=>(he(e)||ne(e))&&ne(e.then)&&ne(e.catch),Zi=Object.prototype.toString,Nn=e=>Zi.call(e),Wa=e=>Nn(e).slice(8,-1),Ji=e=>Nn(e)==="[object Object]",As=e=>Ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zn=_s(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ka=/-\w/g,Xe=vr(e=>e.replace(Ka,t=>t.slice(1).toUpperCase())),Ya=/\B([A-Z])/g,tn=vr(e=>e.replace(Ya,"-$1").toLowerCase()),yr=vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mr=vr(e=>e?`on${yr(e)}`:""),wt=(e,t)=>!Object.is(e,t),Ir=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Qi=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Xa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ws;const wr=()=>Ws||(Ws=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ot(e){if(ee(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ce(r)?el(r):ot(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ce(e)||he(e))return e}const Za=/;(?![^(]*\))/g,Ja=/:([^]+)/,Qa=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function el(e){const t={};return e.replace(Qa,n=>n.startsWith("/*")?"":n).split(Za).forEach(n=>{if(n){const r=n.split(Ja);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function W(e){let t="";if(Ce(e))t=e;else if(ee(e))for(let n=0;n<e.length;n++){const r=W(e[n]);r&&(t+=r+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const tl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",nl=_s(tl);function eo(e){return!!e||e===""}function rl(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let s=0;r&&s<e.length;s++)r=kr(e[s],t[s],n);return r}function Ks(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),s=new Uint8Array(r.length);for(const i of e){let a=-1;for(let o=0;o<r.length;o++)if(!s[o]&&kr(i,r[o],n)){a=o;break}if(a<0)return!1;s[a]=1}return!0}function sl(e,t,n){let r=Gt(e),s=Gt(t);if(r||s||(r=sr(e),s=sr(t),r||s))return r&&s?Ks(e,t,n):!1;const i=Object.keys(e).length,a=Object.keys(t).length;if(i!==a)return!1;for(const o in e){const l=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(l&&!c||!l&&c||!kr(e[o],t[o],n))return!1}return String(e)===String(t)}function Ys(e,t,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(e)||i.has(t))return s.get(e)===t&&i.get(t)===e;s.set(e,t),i.set(t,e);const a=r(e,t,n);return s.delete(e),i.delete(t),a}function kr(e,t,n){if(e===t)return!0;let r=Us(e),s=Us(t);return r||s?r&&s?e.getTime()===t.getTime():!1:(r=ut(e),s=ut(t),r||s?e===t:(r=ee(e),s=ee(t),r||s?r&&s?Ys(e,t,n,rl):!1:(r=he(e),s=he(t),r||s?!r||!s?!1:Ys(e,t,n,sl):String(e)===String(t))))}const to=e=>!!(e&&e.__v_isRef===!0),Ae=e=>Ce(e)?e:e==null?"":ee(e)||he(e)&&(e.toString===Zi||!ne(e.toString))?to(e)?Ae(e.value):JSON.stringify(e,no,2):String(e),no=(e,t)=>to(t)?no(e,t.value):Gt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Or(r,i)+" =>"]=s,n),{})}:sr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Or(n))}:ut(t)?Or(t):he(t)&&!ee(t)&&!Ji(t)?String(t):t,Or=(e,t="")=>{var n;return ut(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Le;class il{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Le&&(Le.active?(this.parent=Le,this.index=(Le.scopes||(Le.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){if(this._on>0&&--this._on===0){if(Le===this)Le=this.prevScope;else{let t=Le;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ol(){return Le}let ye;const Tr=new WeakSet;class ro{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&(Le.active?Le.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tr.has(this)&&(Tr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||io(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xs(this),oo(this);const t=ye,n=ct;ye=this,ct=!0;try{return this.fn()}finally{ao(this),ye=t,ct=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Rs(t);this.deps=this.depsTail=void 0,Xs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){es(this)&&this.run()}get dirty(){return es(this)}}let so=0,An,Cn;function io(e,t=!1){if(e.flags|=8,t){e.next=Cn,Cn=e;return}e.next=An,An=e}function Cs(){so++}function Ss(){if(--so>0)return;if(Cn){let t=Cn;for(Cn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;An;){let t=An;for(An=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function oo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ao(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Rs(r),al(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function es(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(lo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function lo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Mn)||(e.globalVersion=Mn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!es(e))))return;e.flags|=2;const t=e.dep,n=ye,r=ct;ye=e,ct=!0;try{oo(e);const s=e.fn(e._value);(t.version===0||wt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ye=n,ct=r,ao(e),e.flags&=-3}}function Rs(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Rs(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function al(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ct=!0;const co=[];function At(){co.push(ct),ct=!1}function Ct(){const e=co.pop();ct=e===void 0?!0:e}function Xs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ye;ye=void 0;try{t()}finally{ye=n}}}let Mn=0;class ll{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Es{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ye||!ct||ye===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ye)n=this.activeLink=new ll(ye,this),ye.deps?(n.prevDep=ye.depsTail,ye.depsTail.nextDep=n,ye.depsTail=n):ye.deps=ye.depsTail=n,uo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ye.depsTail,n.nextDep=void 0,ye.depsTail.nextDep=n,ye.depsTail=n,ye.deps===n&&(ye.deps=r)}return n}trigger(t){this.version++,Mn++,this.notify(t)}notify(t){Cs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ss()}}}function uo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)uo(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ts=new WeakMap,en=Symbol(""),ns=Symbol(""),In=Symbol("");function Ge(e,t,n){if(ct&&ye){let r=ts.get(e);r||ts.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Es),s.map=r,s.key=n),s.track()}}function It(e,t,n,r,s,i){const a=ts.get(e);if(!a){Mn++;return}const o=l=>{l&&l.trigger()};if(Cs(),t==="clear")a.forEach(o);else{const l=ee(e),c=l&&As(n);if(l&&n==="length"){const u=Number(r);a.forEach((f,m)=>{(m==="length"||m===In||!ut(m)&&m>=u)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(In)),t){case"add":l?c&&o(a.get("length")):(o(a.get(en)),Gt(e)&&o(a.get(ns)));break;case"delete":l||(o(a.get(en)),Gt(e)&&o(a.get(ns)));break;case"set":Gt(e)&&o(a.get(en));break}}Ss()}function on(e){const t=pe(e);return t===e||(Ge(t,"iterate",In),nt(e))?t:St(e)?Vt(e)?t.map(n=>qt(rt(n))):t.map(qt):t.map(rt)}function _r(e){return Ge(e=pe(e),"iterate",In),e}function xt(e,t){return St(e)?qt(Vt(e)?rt(t):t):rt(t)}const cl={__proto__:null,[Symbol.iterator](){return $r(this,Symbol.iterator,e=>xt(this,e))},concat(...e){return on(this).concat(...e.map(t=>ee(t)?on(t):t))},entries(){return $r(this,"entries",e=>(e[1]=xt(this,e[1]),e))},every(e,t){return Rt(this,"every",e,t,void 0,arguments)},filter(e,t){return Rt(this,"filter",e,t,n=>n.map(r=>xt(this,r)),arguments)},find(e,t){return Rt(this,"find",e,t,n=>xt(this,n),arguments)},findIndex(e,t){return Rt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Rt(this,"findLast",e,t,n=>xt(this,n),arguments)},findLastIndex(e,t){return Rt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Rt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Lr(this,"includes",e)},indexOf(...e){return Lr(this,"indexOf",e)},join(e){return on(this).join(e)},lastIndexOf(...e){return Lr(this,"lastIndexOf",e)},map(e,t){return Rt(this,"map",e,t,void 0,arguments)},pop(){return bn(this,"pop")},push(...e){return bn(this,"push",e)},reduce(e,...t){return Js(this,"reduce",e,t)},reduceRight(e,...t){return Js(this,"reduceRight",e,t)},shift(){return bn(this,"shift")},some(e,t){return Rt(this,"some",e,t,void 0,arguments)},splice(...e){return bn(this,"splice",e)},toReversed(){return on(this).toReversed()},toSorted(e){return on(this).toSorted(e)},toSpliced(...e){return on(this).toSpliced(...e)},unshift(...e){return bn(this,"unshift",e)},values(){return $r(this,"values",e=>xt(this,e))}};function $r(e,t,n){const r=_r(e),s=r[t],i=s.call(r);if(r!==e&&!nt(e)){if(i[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(i));return a.next=()=>Zs(i.next(),n),s!==fo[t]&&Object.defineProperties(a,{return:{get(){const o=i.return;return typeof o=="function"?o.bind(i):o}},throw:{get(){const o=i.throw;return typeof o=="function"?o.bind(i):o}}}),a}i._next=i.next,i.next=()=>Zs(i._next(),n)}return i}function Zs(e,t){return e.done||(e.value=t(e.value)),e}const fo=Array.prototype;function Rt(e,t,n,r,s,i){const a=_r(e),o=a!==e&&!nt(e),l=a[t];if(l!==fo[t]){const f=l.apply(e,i);return o?rt(f):f}let c=n;a!==e&&(o?c=function(f,m){return n.call(this,xt(e,f),m,e)}:n.length>2&&(c=function(f,m){return n.call(this,f,m,e)}));const u=l.call(a,c,r);return o&&s?s(u):u}function Js(e,t,n,r){const s=_r(e),i=s!==e&&!nt(e);let a=n,o=!1;s!==e&&(i?(o=r.length===0,a=function(c,u,f){return o&&(o=!1,c=xt(e,c)),n.call(this,c,xt(e,u),f,e)}):n.length>3&&(a=function(c,u,f){return n.call(this,c,u,f,e)}));const l=s[t](a,...r);return o?xt(e,l):l}function Lr(e,t,n){const r=pe(e);Ge(r,"iterate",In);const s=r[t](...n);return(s===-1||s===!1)&&Ms(n[0])?(n[0]=pe(n[0]),r[t](...n)):s}function bn(e,t,n=[]){At(),Cs();const r=pe(e)[t].apply(e,n);return Ss(),Ct(),r}const ul=_s("__proto__,__v_isRef,__isVue"),po=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ut));function dl(e){ut(e)||(e=String(e));const t=pe(this);return Ge(t,"has",e),t.hasOwnProperty(e)}class mo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?wl:xo:i?bo:go).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=ee(t);if(!s){let l;if(a&&(l=cl[n]))return l;if(n==="hasOwnProperty")return dl}const o=Reflect.get(t,n,He(t)?t:r);if((ut(n)?po.has(n):ul(n))||(s||Ge(t,"get",n),i))return o;if(He(o)){const l=a&&As(n)?o:o.value;return s&&he(l)?ss(l):l}return he(o)?s?ss(o):zr(o):o}}class ho extends mo{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];const a=ee(t)&&As(n);if(!this._isShallow){const c=St(i);if(!nt(r)&&!St(r)&&(i=pe(i),r=pe(r)),!a&&He(i)&&!He(r))return c||(i.value=r),!0}const o=a?Number(n)<t.length:ce(t,n),l=Reflect.set(t,n,r,He(t)?t:s);return t===pe(s)&&l&&(o?wt(r,i)&&It(t,"set",n,r):It(t,"add",n,r)),l}deleteProperty(t,n){const r=ce(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&It(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!ut(n)||!po.has(n))&&Ge(t,"has",n),r}ownKeys(t){return Ge(t,"iterate",ee(t)?"length":en),Reflect.ownKeys(t)}}class fl extends mo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const pl=new ho,ml=new fl,hl=new ho(!0);const rs=e=>e,Hn=e=>Reflect.getPrototypeOf(e);function gl(e,t,n){return function(...r){const s=this.__v_raw,i=pe(s),a=Gt(i),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=s[e](...r),u=n?rs:t?qt:rt;return!t&&Ge(i,"iterate",l?ns:en),je(Object.create(c),{next(){const{value:f,done:m}=c.next();return m?{value:f,done:m}:{value:o?[u(f[0]),u(f[1])]:u(f),done:m}}})}}function qn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function bl(e,t){const n={get(s){const i=this.__v_raw,a=pe(i),o=pe(s);e||(wt(s,o)&&Ge(a,"get",s),Ge(a,"get",o));const{has:l}=Hn(a),c=t?rs:e?qt:rt;if(l.call(a,s))return c(i.get(s));if(l.call(a,o))return c(i.get(o));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Ge(pe(s),"iterate",en),s.size},has(s){const i=this.__v_raw,a=pe(i),o=pe(s);return e||(wt(s,o)&&Ge(a,"has",s),Ge(a,"has",o)),s===o?i.has(s):i.has(s)||i.has(o)},forEach(s,i){const a=this,o=a.__v_raw,l=pe(o),c=t?rs:e?qt:rt;return!e&&Ge(l,"iterate",en),o.forEach((u,f)=>s.call(i,c(u),c(f),a))}};return je(n,e?{add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear")}:{add(s){const i=pe(this),a=Hn(i),o=pe(s),l=!t&&!nt(s)&&!St(s)?o:s;return a.has.call(i,l)||wt(s,l)&&a.has.call(i,s)||wt(o,l)&&a.has.call(i,o)||(i.add(l),It(i,"add",l,l)),this},set(s,i){!t&&!nt(i)&&!St(i)&&(i=pe(i));const a=pe(this),{has:o,get:l}=Hn(a);let c=o.call(a,s);c||(s=pe(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,i),c?wt(i,u)&&It(a,"set",s,i):It(a,"add",s,i),this},delete(s){const i=pe(this),{has:a,get:o}=Hn(i);let l=a.call(i,s);l||(s=pe(s),l=a.call(i,s)),o&&o.call(i,s);const c=i.delete(s);return l&&It(i,"delete",s,void 0),c},clear(){const s=pe(this),i=s.size!==0,a=s.clear();return i&&It(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=gl(s,e,t)}),n}function Fs(e,t){const n=bl(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_isShallow"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const xl={get:Fs(!1,!1)},vl={get:Fs(!1,!0)},yl={get:Fs(!0,!1)};const go=new WeakMap,bo=new WeakMap,xo=new WeakMap,wl=new WeakMap;function kl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zr(e){return St(e)?e:Ps(e,!1,pl,xl,go)}function vo(e){return Ps(e,!1,hl,vl,bo)}function ss(e){return Ps(e,!0,ml,yl,xo)}function Ps(e,t,n,r,s){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=s.get(e);if(i)return i;const a=kl(Wa(e));if(a===0)return e;const o=new Proxy(e,a===2?r:n);return s.set(e,o),o}function Vt(e){return St(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function St(e){return!!(e&&e.__v_isReadonly)}function nt(e){return!!(e&&e.__v_isShallow)}function Ms(e){return e?!!e.__v_raw:!1}function pe(e){const t=e&&e.__v_raw;return t?pe(t):e}function _l(e){return!ce(e,"__v_skip")&&Object.isExtensible(e)&&Qi(e,"__v_skip",!0),e}const rt=e=>he(e)?zr(e):e,qt=e=>he(e)?ss(e):e;function He(e){return e?e.__v_isRef===!0:!1}function be(e){return yo(e,!1)}function zl(e){return yo(e,!0)}function yo(e,t){return He(e)?e:new Al(e,t)}class Al{constructor(t,n){this.dep=new Es,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:pe(t),this._value=n?t:rt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||nt(t)||St(t);t=r?t:pe(t),wt(t,n)&&(this._rawValue=t,this._value=r?t:rt(t),this.dep.trigger())}}function N(e){return He(e)?e.value:e}const Cl={get:(e,t,n)=>t==="__v_raw"?e:N(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return He(s)&&!He(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function wo(e){return Vt(e)?e:new Proxy(e,Cl)}class Sl{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Es(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return io(this,!0),!0}get value(){const t=this.dep.track();return lo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Rl(e,t,n=!1){let r,s;return ne(e)?r=e:(r=e.get,s=e.set),new Sl(r,s,n)}const Un={},ir=new WeakMap;let Zt;function El(e,t=!1,n=Zt){if(n){let r=ir.get(n);r||ir.set(n,r=[]),r.push(e)}}function Fl(e,t,n=ve){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:o,call:l}=n,c=v=>s?v:nt(v)||s===!1||s===0?Ot(v,1):Ot(v);let u,f,m,b,I=!1,A=!1;if(He(e)?(f=()=>e.value,I=nt(e)):Vt(e)?(f=()=>c(e),I=!0):ee(e)?(A=!0,I=e.some(v=>Vt(v)||nt(v)),f=()=>e.map(v=>{if(He(v))return v.value;if(Vt(v))return c(v);if(ne(v))return l?l(v,2):v()})):ne(e)?t?f=l?()=>l(e,2):e:f=()=>{if(m){At();try{m()}finally{Ct()}}const v=Zt;Zt=u;try{return l?l(e,3,[b]):e(b)}finally{Zt=v}}:f=kt,t&&s){const v=f,C=s===!0?1/0:s;f=()=>Ot(v(),C)}const O=ol(),$=()=>{u.stop(),O&&O.active&&zs(O.effects,u)};if(i&&t){const v=t;t=(...C)=>{try{return v(...C)}finally{$()}}}let g=A?new Array(e.length).fill(Un):Un;const x=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(t){const C=u.run();if(v||s||I||(A?C.some((F,T)=>wt(F,g[T])):wt(C,g))){const F=Zt;At();try{m&&m(),Zt=u;const T=[C,g===Un?void 0:A&&g[0]===Un?[]:g,b];g=C,l?l(t,3,T):t(...T)}finally{Zt=F,Ct()}}}else u.run()};return o&&o(x),u=new ro(f),u.scheduler=a?()=>a(x,!1):x,b=v=>El(v,!1,u),m=u.onStop=()=>{const v=ir.get(u);if(v){if(l)l(v,4);else for(const C of v)C();ir.delete(u)}},t?r?x(!0):g=u.run():a?a(x.bind(null,!0),!0):u.run(),$.pause=u.pause.bind(u),$.resume=u.resume.bind(u),$.stop=$,$}function Ot(e,t=1/0,n){if(t<=0||!he(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,He(e))Ot(e.value,t,n);else if(ee(e))for(let r=0;r<e.length;r++)Ot(e[r],t,n);else if(sr(e)||Gt(e))e.forEach(r=>{Ot(r,t,n)});else if(Ji(e)){for(const r in e)Ot(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ot(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bn(e,t,n,r){try{return r?e(...r):e()}catch(s){Ar(s,t,n)}}function dt(e,t,n,r){if(ne(e)){const s=Bn(e,t,n,r);return s&&Xi(s)&&s.catch(i=>{Ar(i,t,n)}),s}if(ee(e)){const s=[];for(let i=0;i<e.length;i++)s.push(dt(e[i],t,n,r));return s}}function Ar(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||ve;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,l,c)===!1)return}o=o.parent}if(i){At(),Bn(i,null,10,[e,l,c]),Ct();return}}Pl(e,n,s,r,a)}function Pl(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Ye=[];let lt=-1;const vt=[];let Nt=null,an=0;const ko=Promise.resolve();let or=null;function _o(e){const t=or||ko;return e?t.then(this?e.bind(this):e):t}function Ml(e){let t=lt+1,n=Ye.length;for(;t<n;){const r=t+n>>>1,s=Ye[r],i=On(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Is(e){if(!(e.flags&1)){const t=On(e),n=Ye[Ye.length-1];!n||!(e.flags&2)&&t>=On(n)?Ye.push(e):Ye.splice(Ml(t),0,e),e.flags|=1,zo()}}function zo(){or||(or=ko.then(So))}function Il(e){if(!ee(e))Nt&&e.id===-1?Nt.splice(an+1,0,e):e.flags&1||(vt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)vt.push(e[t]);zo()}function Ao(e,t,n,r=lt+1){for(;r<Ye.length;r++){const s=Ye[r];if(s&&s.flags&2){if(e&&s.id!==e.uid||t!==void 0&&!(s.id>=t))continue;Ye.splice(r,1),r=e?r-1:lt,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Co(e,t,n=0){if(vt.length){let r=vt,s=0;if(t){r=[];for(let a=0;a<vt.length;a++){const o=vt[a];(o.i!==void 0?!o.i||o.i.uid<n:t.has(o))?vt[s++]=o:r.push(o)}}const i=[...new Set(r)].sort((a,o)=>On(a)-On(o));if(vt.length=s,Nt){for(let a=0;a<i.length;a++)Nt.push(i[a]);return}for(Nt=i,an=0;an<Nt.length;an++){const a=Nt[an];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Nt=null,an=0}}let Dr=!1;function Ol(e,t){if(Dr){e();return}const n=t===void 0?void 0:new Set(vt);e(),Dr=!0;try{Ao(void 0,t),Co(void 0,n,t)}finally{Dr=!1}}const On=e=>e.id==null?e.flags&2?-1:1/0:e.id;function So(e){try{for(lt=0;lt<Ye.length;lt++){const t=Ye[lt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Bn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;lt<Ye.length;lt++){const t=Ye[lt];t&&(t.flags&=-2)}lt=-1,Ye.length=0,Co(),or=null,(Ye.length||vt.length)&&So()}}let De=null,Ro=null;function ar(e){const t=De;return De=e,Ro=e&&e.type.__scopeId||null,t}function J(e,t=De,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&dr(-1);const i=ar(t),a=$t.length;let o;try{o=e(...s)}finally{for(let l=$t.length;l>a;l--)Ls();ar(i),r._d&&dr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function jr(e,t){if(De===null)return e;const n=Fr(De),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,o,l=ve]=t[s];i&&(ne(i)&&(i={mounted:i,updated:i}),i.deep&&Ot(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function Kt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];i&&(o.oldValue=i[a].value);let l=o.dir[r];l&&(At(),dt(l,n,8,[e.el,o,e,t]),Ct())}}function Zn(e,t){if(Ve){let n=Ve.provides;const r=Ve.parent&&Ve.parent.provides;r===n&&(n=Ve.provides=Object.create(r)),n[e]=t}}function _t(e,t,n=!1){const r=na();if(r||un){let s=un?un._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ne(t)?t.call(r&&r.proxy):t}}const Tl=Symbol.for("v-scx"),$l=()=>_t(Tl);function Ht(e,t,n){return Eo(e,t,n)}function Eo(e,t,n=ve){const{immediate:r,deep:s,flush:i,once:a}=n,o=je({},n),l=t&&r||!t&&i!=="post";let c;if(Ln){if(i==="sync"){const b=$l();c=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=kt,b.resume=kt,b.pause=kt,b}}const u=Ve;o.call=(b,I,A)=>dt(b,u,I,A);let f=!1;i==="post"?o.scheduler=b=>{b.i=u,Ze(b,u&&u.suspense)}:i!=="sync"&&(f=!0,o.scheduler=(b,I)=>{I?b():Is(b)}),o.augmentJob=b=>{t&&(b.flags|=4),f&&(b.flags|=2,u&&(b.id=u.uid,b.i=u))};const m=Fl(e,t,o);return Ln&&(c?c.push(m):l&&m()),m}function Ll(e,t,n){const r=this.proxy,s=Ce(e)?e.includes(".")?Fo(r,e):()=>r[e]:e.bind(r,r);let i;ne(t)?i=t:(i=t.handler,n=t);const a=Vn(this),o=Eo(s,i.bind(r),n);return a(),o}function Fo(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Dl=Symbol("_vte"),Cr=e=>e.__isTeleport,Nr=Symbol("_leaveCb");function jl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==st){t=n;break}}return t}function Po(e){if(!Os(e))return Cr(e.type)&&e.children?jl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ne(n.default))return n.default()}}function lr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;lr(Cr(n.type)&&Po(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===_e&&ee(e.children)){const n=No(e.children,!1);n&&lr(n,t)}}function is(e){if(e.component)return is(e.component.subTree);if(e.type===_e){const t=ee(e.children)&&No(e.children,!1);return t?is(t):void 0}if(e.type!==st)return e}function we(e,t){return ne(e)?je({name:e.name},t,{setup:e}):e}function Mo(){const e=na();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Io(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Qs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const cr=new WeakMap;function Sn(e,t,n,r,s=!1){if(ee(e)){e.forEach((A,O)=>Sn(A,t&&(ee(t)?t[O]:t),n,r,s));return}if(cn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Sn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Fr(r.component):r.el,a=s?null:i,{i:o,r:l}=e,c=t&&t.r,u=o.refs===ve?o.refs={}:o.refs,f=o.setupState,m=pe(f),b=f===ve?Yi:A=>Qs(u,A)?!1:ce(m,A),I=(A,O)=>!(O&&Qs(u,O));if(c!=null&&c!==l){if(ei(t),Ce(c))u[c]=null,b(c)&&(f[c]=null);else if(He(c)){const A=t;I(c,A.k)&&(c.value=null),A.k&&(u[A.k]=null)}}if(ne(l))Bn(l,o,12,[a,u]);else{const A=Ce(l),O=He(l);if(A||O){const $=()=>{if(e.f){const g=A?b(l)?f[l]:u[l]:I()||!e.k?l.value:u[e.k];if(s)ee(g)&&zs(g,i);else if(ee(g))g.includes(i)||g.push(i);else if(A)u[l]=[i],b(l)&&(f[l]=u[l]);else{const x=[i];I(l,e.k)&&(l.value=x),e.k&&(u[e.k]=x)}}else A?(u[l]=a,b(l)&&(f[l]=a)):O&&(I(l,e.k)&&(l.value=a),e.k&&(u[e.k]=a))};if(a){const g=()=>{$(),cr.delete(e)};g.id=-1,cr.set(e,g),Ze(g,n)}else ei(e),$()}}}function ei(e){const t=cr.get(e);t&&(t.flags|=8,cr.delete(e))}wr().requestIdleCallback;wr().cancelIdleCallback;const cn=e=>!!e.type.__asyncLoader,Os=e=>e.type.__isKeepAlive;function Nl(e,t){Oo(e,"a",t)}function Bl(e,t){Oo(e,"da",t)}function Oo(e,t,n=Ve){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Sr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Os(s.parent.vnode)&&Gl(r,t,n,s),s=s.parent}}function Gl(e,t,n,r){const s=Sr(t,e,r,!0);rn(()=>{zs(r[t],s)},n)}function Sr(e,t,n=Ve,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{At();const o=Vn(n),l=dt(t,n,e,a);return o(),Ct(),l});return r?s.unshift(i):s.push(i),i}}const Lt=e=>(t,n=Ve)=>{(!Ln||e==="sp")&&Sr(e,(...r)=>t(...r),n)},Vl=Lt("bm"),nn=Lt("m"),Hl=Lt("bu"),ql=Lt("u"),Ul=Lt("bum"),rn=Lt("um"),Wl=Lt("sp"),Kl=Lt("rtg"),Yl=Lt("rtc");function Xl(e,t=Ve){Sr("ec",e,t)}const Zl="components";function Gn(e,t){return Ql(Zl,e,!0,t)||e}const Jl=Symbol.for("v-ndc");function Ql(e,t,n=!0,r=!1){const s=De||Ve;if(s){const i=s.type;{const o=$c(i,!1);if(o&&(o===t||o===Xe(t)||o===yr(Xe(t))))return i}const a=ti(s[e]||i[e],t)||ti(s.appContext[e],t);return!a&&r?i:a}}function ti(e,t){return e&&(e[t]||e[Xe(t)]||e[yr(Xe(t))])}function Tt(e,t,n,r){let s;const i=n,a=ee(e);if(a||Ce(e)){const o=a&&Vt(e);let l=!1,c=!1;o&&(l=!nt(e),c=St(e),e=_r(e)),s=new Array(e.length);for(let u=0,f=e.length;u<f;u++)s[u]=t(l?c?qt(rt(e[u])):rt(e[u]):e[u],u,void 0,i)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)s=[];else{s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i)}else if(he(e))if(e[Symbol.iterator])s=Array.from(e,(o,l)=>t(o,l,void 0,i));else{const o=Object.keys(e);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=t(e[u],u,l,i)}}else s=[];return s}function zt(e,t,n,r,s,i){if(n==null&&(n={}),De.ce||De.parent&&cn(De.parent)&&De.parent.ce){const c=n,u=Object.keys(c).length>0;return t!=="default"&&(c.name=t),V(),it(_e,null,[k("slot",c,r&&r())],u?-2:64)}let a=e[t];a&&a._c&&(a._d=!1);const o=$t.length;V();let l;try{const c=a&&To(a(n)),u=n.key||i||c&&c.key;l=it(_e,{key:(u&&!ut(u)?u:`_${t}`)+(!c&&r?"_fb":"")},c||(r?r():[]),c&&e._===1?64:-2)}catch(c){for(let u=$t.length;u>o;u--)Ls();throw c}finally{a&&a._c&&(a._d=!0)}return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function To(e){return e.some(t=>dn(t)?!(t.type===st||t.type===_e&&!To(t.children)):!0)?e:null}const os=e=>e?ra(e)?Fr(e):os(e.parent):null,Rn=je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>os(e.parent),$root:e=>os(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Lo(e),$forceUpdate:e=>e.f||(e.f=()=>{Is(e.update)}),$nextTick:e=>e.n||(e.n=_o.bind(e.proxy)),$watch:e=>Ll.bind(e)}),Br=(e,t)=>e!==ve&&!e.__isScriptSetup&&ce(e,t),ec={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:o,appContext:l}=e;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Br(r,t))return a[t]=1,r[t];if(s!==ve&&ce(s,t))return a[t]=2,s[t];if(ce(i,t))return a[t]=3,i[t];if(n!==ve&&ce(n,t))return a[t]=4,n[t];as&&(a[t]=0)}}const c=Rn[t];let u,f;if(c)return t==="$attrs"&&Ge(e.attrs,"get",""),c(e);if((u=o.__cssModules)&&(u=u[t]))return u;if(n!==ve&&ce(n,t))return a[t]=4,n[t];if(f=l.config.globalProperties,ce(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Br(s,t)?(s[t]=n,!0):r!==ve&&ce(r,t)?(r[t]=n,!0):ce(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:i,type:a}},o){let l;return!!(n[o]||e!==ve&&o[0]!=="$"&&ce(e,o)||Br(t,o)||ce(i,o)||ce(r,o)||ce(Rn,o)||ce(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ce(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ni(e){return ee(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let as=!0;function tc(e){const t=Lo(e),n=e.proxy,r=e.ctx;as=!1,t.beforeCreate&&ri(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:m,beforeUpdate:b,updated:I,activated:A,deactivated:O,beforeDestroy:$,beforeUnmount:g,destroyed:x,unmounted:v,render:C,renderTracked:F,renderTriggered:T,errorCaptured:R,serverPrefetch:j,expose:re,inheritAttrs:ue,components:Se,directives:Be,filters:tt}=t;if(c&&nc(c,r,null),a)for(const se in a){const Q=a[se];ne(Q)&&(r[se]=Q.bind(n))}if(s){const se=s.call(n,n);he(se)&&(e.data=zr(se))}if(as=!0,i)for(const se in i){const Q=i[se],ke=ne(Q)?Q.bind(n,n):ne(Q.get)?Q.get.bind(n,n):kt,H=!ne(Q)&&ne(Q.set)?Q.set.bind(n):kt,Oe=Re({get:ke,set:H});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:de=>Oe.value=de})}if(o)for(const se in o)$o(o[se],r,n,se);if(l){const se=ne(l)?l.call(n):l;Reflect.ownKeys(se).forEach(Q=>{Zn(Q,se[Q])})}u&&ri(u,e,"c");function le(se,Q){ee(Q)?Q.forEach(ke=>se(ke.bind(n))):Q&&se(Q.bind(n))}if(le(Vl,f),le(nn,m),le(Hl,b),le(ql,I),le(Nl,A),le(Bl,O),le(Xl,R),le(Yl,F),le(Kl,T),le(Ul,g),le(rn,v),le(Wl,j),ee(re))if(re.length){const se=e.exposed||(e.exposed={});re.forEach(Q=>{Object.defineProperty(se,Q,{get:()=>n[Q],set:ke=>n[Q]=ke,enumerable:!0})})}else e.exposed||(e.exposed={});C&&e.render===kt&&(e.render=C),ue!=null&&(e.inheritAttrs=ue),Se&&(e.components=Se),Be&&(e.directives=Be),j&&Io(e)}function nc(e,t,n=kt){ee(e)&&(e=ls(e));for(const r in e){const s=e[r];let i;he(s)?"default"in s?i=_t(s.from||r,s.default,!0):i=_t(s.from||r):i=_t(s),He(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function ri(e,t,n){dt(ee(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function $o(e,t,n,r){let s=r.includes(".")?Fo(n,r):()=>n[r];if(Ce(e)){const i=t[e];ne(i)&&Ht(s,i)}else if(ne(e))Ht(s,e.bind(n));else if(he(e))if(ee(e))e.forEach(i=>$o(i,t,n,r));else{const i=ne(e.handler)?e.handler.bind(n):t[e.handler];ne(i)&&Ht(s,i,e)}}function Lo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,o=i.get(t);let l;return o?l=o:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(c=>ur(l,c,a,!0)),ur(l,t,a)),he(t)&&i.set(t,l),l}function ur(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&ur(e,i,n,!0),s&&s.forEach(a=>ur(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=rc[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const rc={data:si,props:ii,emits:ii,methods:kn,computed:kn,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:kn,directives:kn,watch:ic,provide:si,inject:sc};function si(e,t){return t?e?function(){return je(ne(e)?e.call(this,this):e,ne(t)?t.call(this,this):t)}:t:e}function sc(e,t){return kn(ls(e),ls(t))}function ls(e){if(ee(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ue(e,t){return e?[...new Set([].concat(e,t))]:t}function kn(e,t){return e?je(Object.create(null),e,t):t}function ii(e,t){return e?ee(e)&&ee(t)?[...new Set([...e,...t])]:je(Object.create(null),ni(e),ni(t??{})):t}function ic(e,t){if(!e)return t;if(!t)return e;const n=je(Object.create(null),e);for(const r in t)n[r]=Ue(e[r],t[r]);return n}function Do(){return{app:null,config:{isNativeTag:Yi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oc=0;function ac(e,t){return function(r,s=null){ne(r)||(r=je({},r)),s!=null&&!he(s)&&(s=null);const i=Do(),a=new WeakSet,o=[];let l=!1;const c=i.app={_uid:oc++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Dc,get config(){return i.config},set config(u){},use(u,...f){return a.has(u)||(u&&ne(u.install)?(a.add(u),u.install(c,...f)):ne(u)&&(a.add(u),u(c,...f))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,f){return f?(i.components[u]=f,c):i.components[u]},directive(u,f){return f?(i.directives[u]=f,c):i.directives[u]},mount(u,f,m){if(!l){const b=c._ceVNode||k(r,s);return b.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(b,u,m),l=!0,c._container=u,u.__vue_app__=c,Fr(b.component)}},onUnmount(u){o.push(u)},unmount(){l&&(dt(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,f){return i.provides[u]=f,c},runWithContext(u){const f=un;un=c;try{return u()}finally{un=f}}};return c}}let un=null;const lc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Xe(t)}Modifiers`]||e[`${tn(t)}Modifiers`];function cc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ve;let s=n;const i=t.startsWith("update:"),a=i&&lc(r,t.slice(7));a&&(a.trim&&(s=n.map(u=>Ce(u)?u.trim():u)),a.number&&(s=s.map(Xa)));let o,l=r[o=Mr(t)]||r[o=Mr(Xe(t))];!l&&i&&(l=r[o=Mr(tn(t))]),l&&dt(l,e,6,s);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,dt(c,e,6,s)}}const uc=new WeakMap;function jo(e,t,n=!1){const r=n?uc:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},o=!1;if(!ne(e)){const l=c=>{const u=jo(c,t,!0);u&&(o=!0,je(a,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(he(e)&&r.set(e,null),null):(ee(i)?i.forEach(l=>a[l]=null):je(a,i),he(e)&&r.set(e,a),a)}function Rr(e,t){return!e||!br(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ce(e,t[0].toLowerCase()+t.slice(1))||ce(e,tn(t))||ce(e,t))}function oi(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:m,setupState:b,ctx:I,inheritAttrs:A}=e,O=ar(e);let $,g;try{if(n.shapeFlag&4){const v=s||r,C=v;$=yt(c.call(C,v,u,f,b,m,I)),g=o}else{const v=t;$=yt(v.length>1?v(f,{attrs:o,slots:a,emit:l}):v(f,null)),g=t.props?o:dc(o)}}catch(v){$t.length=0,Ar(v,e,1),$=k(st)}let x=$;if(g&&A!==!1){const v=Object.keys(g),{shapeFlag:C}=x;v.length&&C&7&&(i&&v.some(xr)&&(g=fc(g,i)),x=fn(x,g,!1,!0))}if(n.dirs&&(x=fn(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition){const v=Cr(x.type)&&Po(x)||x;lr(v,n.transition)}return $=x,ar(O),$}function No(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(dn(s)){if(s.type!==st||s.children==="v-if"){if(n)return;n=s}}else return}return n}const dc=e=>{let t;for(const n in e)(n==="class"||n==="style"||br(n))&&((t||(t={}))[n]=e[n]);return t},fc=(e,t)=>{const n={};for(const r in e)(!xr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function pc(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ai(r,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const m=u[f];if(Bo(a,r,m)&&!Rr(c,m))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?ai(r,a,c):!0:!!a;return!1}function ai(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!ce(e,i)||Bo(t,e,i)&&!Rr(n,i))return!0}return!1}function Bo(e,t,n){const r=e[n],s=t[n];return n==="style"&&he(r)&&he(s)?!kr(r,s):r!==s}function mc({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Go={},Vo=()=>Object.create(Go),Ho=e=>Object.getPrototypeOf(e)===Go;function hc(e,t,n,r=!1){const s={},i=Vo();e.propsDefaults=Object.create(null),qo(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:vo(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function gc(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,o=pe(s),[l]=e.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let m=u[f];if(Rr(e.emitsOptions,m))continue;const b=t[m];if(l)if(ce(i,m))b!==i[m]&&(i[m]=b,c=!0);else{const I=Xe(m);s[I]=cs(l,o,I,b,e,!1)}else b!==i[m]&&(i[m]=b,c=!0)}}}else{qo(e,t,s,i)&&(c=!0);let u;for(const f in o)(!t||!ce(t,f)&&((u=tn(f))===f||!ce(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=cs(l,o,f,void 0,e,!0)):delete s[f]);if(i!==o)for(const f in i)(!t||!ce(t,f))&&(delete i[f],c=!0)}c&&It(e.attrs,"set","")}function qo(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(zn(l))continue;const c=t[l];let u;s&&ce(s,u=Xe(l))?!i||!i.includes(u)?n[u]=c:(o||(o={}))[u]=c:Rr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,a=!0)}if(i){const l=pe(n),c=o||ve;for(let u=0;u<i.length;u++){const f=i[u];n[f]=cs(s,l,f,c[f],e,!ce(c,f))}}return a}function cs(e,t,n,r,s,i){const a=e[n];if(a!=null){const o=ce(a,"default");if(o&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ne(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=Vn(s);r=c[n]=l.call(null,t),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!o?r=!1:a[1]&&(r===""||r===tn(n))&&(r=!0))}return r}const bc=new WeakMap;function Uo(e,t,n=!1){const r=n?bc:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},o=[];let l=!1;if(!ne(e)){const u=f=>{l=!0;const[m,b]=Uo(f,t,!0);je(a,m),b&&o.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return he(e)&&r.set(e,Jt),Jt;if(ee(i))for(let u=0;u<i.length;u++){const f=Xe(i[u]);li(f)&&(a[f]=ve)}else if(i)for(const u in i){const f=Xe(u);if(li(f)){const m=i[u],b=a[f]=ee(m)||ne(m)?{type:m}:je({},m),I=b.type;let A=!1,O=!0;if(ee(I))for(let $=0;$<I.length;++$){const g=I[$],x=ne(g)&&g.name;if(x==="Boolean"){A=!0;break}else x==="String"&&(O=!1)}else A=ne(I)&&I.name==="Boolean";b[0]=A,b[1]=O,(A||ce(b,"default"))&&o.push(f)}}const c=[a,o];return he(e)&&r.set(e,c),c}function li(e){return e[0]!=="$"&&!zn(e)}const Ts=e=>e==="_"||e==="_ctx"||e==="$stable",$s=e=>ee(e)?e.map(yt):[yt(e)],xc=(e,t,n)=>{if(t._n)return t;const r=J((...s)=>$s(t(...s)),n);return r._c=!1,r},Wo=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ts(s))continue;const i=e[s];if(ne(i))t[s]=xc(s,i,r);else if(i!=null){const a=$s(i);t[s]=()=>a}}},Ko=(e,t)=>{const n=$s(t);e.slots.default=()=>n},Yo=(e,t,n)=>{for(const r in t)(n||!Ts(r))&&(e[r]=t[r])},vc=(e,t,n)=>{const r=e.slots=Vo();if(e.vnode.shapeFlag&32){const s=t._;s?(Yo(r,t,n),n&&Qi(r,"_",s,!0)):Wo(t,r)}else t&&Ko(e,t)},yc=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=ve;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:Yo(s,t,n):(i=!t.$stable,Wo(t,s)),a=t}else t&&(Ko(e,t),a={default:1});if(i)for(const o in s)!Ts(o)&&a[o]==null&&delete s[o]},Ze=Ac;function wc(e){return kc(e)}function kc(e,t){const n=wr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:m,setScopeId:b=kt,insertStaticContent:I}=e,A=(d,h,y,w=null,_=null,S=null,M=void 0,D=null,L=!!h.dynamicChildren)=>{if(d===h)return;d&&!xn(d,h)&&(w=z(d),de(d,_,S,!0),d=null),h.patchFlag===-2&&(L=!1,h.dynamicChildren=null),h.dynamicChildren&&d&&d.dynamicChildren&&d.dynamicChildren.hasOnce&&(h.dynamicChildren===Jt&&(h.dynamicChildren=[]),h.dynamicChildren.hasOnce=!0);const{type:E,ref:X,shapeFlag:B}=h;switch(E){case Er:O(d,h,y,w);break;case st:$(d,h,y,w);break;case Jn:d==null&&g(h,y,w,M);break;case _e:Se(d,h,y,w,_,S,M,D,L);break;default:B&1?C(d,h,y,w,_,S,M,D,L):B&6?Be(d,h,y,w,_,S,M,D,L):(B&64||B&128)&&E.process(d,h,y,w,_,S,M,D,L,P)}X!=null&&_?Sn(X,d&&d.ref,S,h||d,!h):X==null&&d&&d.ref!=null&&Sn(d.ref,null,S,d,!0)},O=(d,h,y,w)=>{if(d==null)r(h.el=o(h.children),y,w);else{const _=h.el=d.el;h.children!==d.children&&c(_,h.children)}},$=(d,h,y,w)=>{d==null?r(h.el=l(h.children||""),y,w):h.el=d.el},g=(d,h,y,w)=>{[d.el,d.anchor]=I(d.children,h,y,w,d.el,d.anchor)},x=({el:d,anchor:h},y,w)=>{let _;for(;d&&d!==h;)_=m(d),r(d,y,w),d=_;r(h,y,w)},v=({el:d,anchor:h})=>{let y;for(;d&&d!==h;)y=m(d),s(d),d=y;s(h)},C=(d,h,y,w,_,S,M,D,L)=>{if(h.type==="svg"?M="svg":h.type==="math"&&(M="mathml"),d==null)F(h,y,w,_,S,M,D,L);else{const E=d.el&&d.el._isVueCE?d.el:null;try{E&&E._beginPatch(),j(d,h,_,S,M,D,L)}finally{E&&E._endPatch()}}},F=(d,h,y,w,_,S,M,D)=>{let L,E;const{props:X,shapeFlag:B,transition:Z,dirs:te}=d;if(L=d.el=a(d.type,S,X&&X.is,X),B&8?u(L,d.children):B&16&&R(d.children,L,null,w,_,Gr(d,S),M,D),te&&Kt(d,null,w,"created"),T(L,d,d.scopeId,M,w),X){for(const xe in X)xe!=="value"&&!zn(xe)&&i(L,xe,null,X[xe],S,w);"value"in X&&i(L,"value",null,X.value,S),(E=X.onVnodeBeforeMount)&&gt(E,w,d)}te&&Kt(d,null,w,"beforeMount");const ae=_c(_,Z);ae&&Z.beforeEnter(L),r(L,h,y),((E=X&&X.onVnodeMounted)||ae||te)&&Ze(()=>{try{E&&gt(E,w,d),ae&&Z.enter(L),te&&Kt(d,null,w,"mounted")}finally{}},_)},T=(d,h,y,w,_)=>{if(y&&b(d,y),w)for(let S=0;S<w.length;S++)b(d,w[S]);if(_){let S=_.subTree;if(h===S||Jo(S.type)&&(S.ssContent===h||S.ssFallback===h)){const M=_.vnode;T(d,M,M.scopeId,M.slotScopeIds,_.parent)}}},R=(d,h,y,w,_,S,M,D,L=0)=>{for(let E=L;E<d.length;E++){const X=d[E]=D?Mt(d[E]):yt(d[E]);A(null,X,h,y,w,_,S,M,D)}},j=(d,h,y,w,_,S,M)=>{const D=h.el=d.el;let{patchFlag:L,dynamicChildren:E,dirs:X}=h;L|=d.patchFlag&16;const B=d.props||ve,Z=h.props||ve;let te;if(y&&Yt(y,!1),(te=Z.onVnodeBeforeUpdate)&&gt(te,y,h,d),X&&Kt(h,d,y,"beforeUpdate"),y&&Yt(y,!0),E&&(!d.dynamicChildren||d.dynamicChildren.length!==E.length)&&(L=0,M=!1,E=null),(B.innerHTML&&Z.innerHTML==null||B.textContent&&Z.textContent==null)&&u(D,""),E?re(d.dynamicChildren,E,D,y,w,Gr(h,_),S):M||Q(d,h,D,null,y,w,Gr(h,_),S,!1),L>0){if(L&16)ue(D,B,Z,y,_);else if(L&2&&B.class!==Z.class&&i(D,"class",null,Z.class,_),L&4&&i(D,"style",B.style,Z.style,_),L&8){const ae=h.dynamicProps;for(let xe=0;xe<ae.length;xe++){const ge=ae[xe],Pe=B[ge],$e=Z[ge];($e!==Pe||ge==="value")&&i(D,ge,Pe,$e,_,y)}}L&1&&d.children!==h.children&&u(D,h.children)}else!M&&E==null&&ue(D,B,Z,y,_);((te=Z.onVnodeUpdated)||X)&&Ze(()=>{te&&gt(te,y,h,d),X&&Kt(h,d,y,"updated")},w)},re=(d,h,y,w,_,S,M)=>{for(let D=0;D<h.length;D++){const L=d[D],E=h[D],X=L.el||us(L),B=X&&(L.type===_e||!xn(L,E)||L.shapeFlag&198)?f(X):y;A(L,E,B,null,w,_,S,M,!0)}},ue=(d,h,y,w,_)=>{if(h!==y){if(h!==ve)for(const S in h)!zn(S)&&!(S in y)&&i(d,S,h[S],null,_,w);for(const S in y){if(zn(S))continue;const M=y[S],D=h[S];M!==D&&S!=="value"&&i(d,S,D,M,_,w)}"value"in y&&i(d,"value",h.value,y.value,_)}},Se=(d,h,y,w,_,S,M,D,L)=>{const E=h.el=d?d.el:o(""),X=h.anchor=d?d.anchor:o("");let{patchFlag:B,dynamicChildren:Z,slotScopeIds:te}=h;te&&(D=D?D.concat(te):te),d==null?(r(E,y,w),r(X,y,w),R(h.children||[],y,X,_,S,M,D,L)):B>0&&B&64&&Z&&d.dynamicChildren&&d.dynamicChildren.length===Z.length?(re(d.dynamicChildren,Z,y,_,S,M,D),(h.key!=null||_&&h===_.subTree)&&Xo(d,h,!0)):Q(d,h,y,X,_,S,M,D,L)},Be=(d,h,y,w,_,S,M,D,L)=>{h.slotScopeIds=D,d==null?h.shapeFlag&512?_.ctx.activate(h,y,w,M,L):tt(h,y,w,_,S,M,L):qe(d,h,L)},tt=(d,h,y,w,_,S,M)=>{const D=d.component=Pc(d,w,_);if(Os(d)&&(D.ctx.renderer=P),Mc(D,!1,M),D.asyncDep){if(_&&_.registerDep(D,le,M,S),!d.el){const L=D.subTree=k(st);$(null,L,h,y),d.placeholder=L.el}}else le(D,d,h,y,_,S,M)},qe=(d,h,y)=>{const w=h.component=d.component;if(pc(d,h,y))if(w.asyncDep&&!w.asyncResolved){h.el=d.el,h.placeholder=d.placeholder,se(w,h,y);return}else w.next=h,w.update();else h.el=d.el,h.placeholder=d.placeholder,w.vnode=h},le=(d,h,y,w,_,S,M)=>{const D=()=>{if(d.isMounted){let{next:B,bu:Z,u:te,parent:ae,vnode:xe}=d;{const mt=Zo(d);if(mt){B&&(B.el=xe.el,se(d,B,M)),mt.asyncDep.then(()=>{Ze(()=>{d.isUnmounted||E()},_)});return}}let ge=B,Pe;Yt(d,!1),B?(B.el=xe.el,se(d,B,M)):B=xe,Z&&Ir(Z),(Pe=B.props&&B.props.onVnodeBeforeUpdate)&&gt(Pe,ae,B,xe),Yt(d,!0);const $e=oi(d),pt=d.subTree;d.subTree=$e,A(pt,$e,f(pt.el),z(pt),d,_,S),B.el=$e.el,ge===null&&mc(d,$e.el),te&&Ze(te,_),(Pe=B.props&&B.props.onVnodeUpdated)&&Ze(()=>gt(Pe,ae,B,xe),_)}else{let B;const{el:Z,props:te}=h,{bm:ae,m:xe,parent:ge,root:Pe,type:$e}=d,pt=cn(h);Yt(d,!1),ae&&Ir(ae),!pt&&(B=te&&te.onVnodeBeforeMount)&&gt(B,ge,h),Yt(d,!0);{Pe.ce&&Pe.ce._hasShadowRoot()&&Pe.ce._injectChildStyle($e,d.parent?d.parent.type:void 0);const mt=d.subTree=oi(d);A(null,mt,y,w,d,_,S),h.el=mt.el}if(xe&&Ze(xe,_),!pt&&(B=te&&te.onVnodeMounted)){const mt=h;Ze(()=>gt(B,ge,mt),_)}(h.shapeFlag&256||ge&&cn(ge.vnode)&&ge.vnode.shapeFlag&256)&&d.a&&Ze(d.a,_),d.isMounted=!0,h=y=w=null}};d.scope.on();const L=d.effect=new ro(D);d.scope.off();const E=d.update=L.run.bind(L),X=d.job=L.runIfDirty.bind(L);X.i=d,X.id=d.uid,L.scheduler=()=>Is(X),Yt(d,!0),E()},se=(d,h,y)=>{h.component=d;const w=d.vnode.props;d.vnode=h,d.next=null,gc(d,h.props,w,y),yc(d,h.children,y),At(),Ao(d),Ct()},Q=(d,h,y,w,_,S,M,D,L=!1)=>{const E=d&&d.children,X=d?d.shapeFlag:0,B=h.children,{patchFlag:Z,shapeFlag:te}=h;if(Z>0){if(Z&128){H(E,B,y,w,_,S,M,D,L);return}else if(Z&256){ke(E,B,y,w,_,S,M,D,L);return}}te&8?(X&16&&oe(E,_,S),B!==E&&u(y,B)):X&16?te&16?H(E,B,y,w,_,S,M,D,L):oe(E,_,S,!0):(X&8&&u(y,""),te&16&&R(B,y,w,_,S,M,D,L))},ke=(d,h,y,w,_,S,M,D,L)=>{d=d||Jt,h=h||Jt;const E=d.length,X=h.length,B=Math.min(E,X);let Z;for(Z=0;Z<B;Z++){const te=h[Z]=L?Mt(h[Z]):yt(h[Z]);A(d[Z],te,y,null,_,S,M,D,L)}E>X?oe(d,_,S,!0,!1,B):R(h,y,w,_,S,M,D,L,B)},H=(d,h,y,w,_,S,M,D,L)=>{let E=0;const X=h.length;let B=d.length-1,Z=X-1;for(;E<=B&&E<=Z;){const te=d[E],ae=h[E]=L?Mt(h[E]):yt(h[E]);if(xn(te,ae))A(te,ae,y,null,_,S,M,D,L);else break;E++}for(;E<=B&&E<=Z;){const te=d[B],ae=h[Z]=L?Mt(h[Z]):yt(h[Z]);if(xn(te,ae))A(te,ae,y,null,_,S,M,D,L);else break;B--,Z--}if(E>B){if(E<=Z){const te=Z+1,ae=te<X?h[te].el:w;for(;E<=Z;)A(null,h[E]=L?Mt(h[E]):yt(h[E]),y,ae,_,S,M,D,L),E++}}else if(E>Z)for(;E<=B;)de(d[E],_,S,!0),E++;else{const te=E,ae=E,xe=new Map;for(E=ae;E<=Z;E++){const Je=h[E]=L?Mt(h[E]):yt(h[E]);Je.key!=null&&xe.set(Je.key,E)}let ge,Pe=0;const $e=Z-ae+1;let pt=!1,mt=0;const gn=new Array($e);for(E=0;E<$e;E++)gn[E]=0;for(E=te;E<=B;E++){const Je=d[E];if(Pe>=$e){de(Je,_,S,!0);continue}let ht;if(Je.key!=null)ht=xe.get(Je.key);else for(ge=ae;ge<=Z;ge++)if(gn[ge-ae]===0&&xn(Je,h[ge])){ht=ge;break}ht===void 0?de(Je,_,S,!0):(gn[ht-ae]=E+1,ht>=mt?mt=ht:pt=!0,A(Je,h[ht],y,null,_,S,M,D,L),Pe++)}const Vs=pt?zc(gn):Jt;for(ge=Vs.length-1,E=$e-1;E>=0;E--){const Je=ae+E,ht=h[Je],Hs=h[Je+1],qs=Je+1<X?Hs.el||us(Hs):w;gn[E]===0?A(null,ht,y,qs,_,S,M,D,L):pt&&(ge<0||E!==Vs[ge]?Oe(ht,y,qs,2):ge--)}}},Oe=(d,h,y,w,_=null)=>{const{el:S,type:M,transition:D,children:L,shapeFlag:E}=d;if(E&6){Oe(d.component.subTree,h,y,w);return}if(E&128){d.suspense.move(h,y,w);return}if(E&64){M.move(d,h,y,P);return}if(M===_e){r(S,h,y);for(let B=0;B<L.length;B++)Oe(L[B],h,y,w);r(d.anchor,h,y);return}if(M===Jn){x(d,h,y);return}if(w!==2&&E&1&&D)if(w===0)D.persisted&&!S[Nr]?r(S,h,y):(D.beforeEnter(S),r(S,h,y),Ze(()=>D.enter(S),_));else{const{leave:B,delayLeave:Z,afterLeave:te}=D,ae=()=>{d.ctx.isUnmounted?s(S):r(S,h,y)},xe=()=>{const ge=S._isLeaving||!!S[Nr];S._isLeaving&&S[Nr](!0),D.persisted&&!ge?ae():B(S,()=>{ae(),te&&te()})};Z?Z(S,ae,xe):xe()}else r(S,h,y)},de=(d,h,y,w=!1,_=!1)=>{const{type:S,props:M,ref:D,children:L,dynamicChildren:E,shapeFlag:X,patchFlag:B,dirs:Z,cacheIndex:te,memo:ae}=d;if((B===-2||E&&E.hasOnce)&&(_=!1),D!=null&&(At(),Sn(D,null,y,d,!0),Ct()),te!=null&&(!d.ctx||d.ctx===h)&&(h.renderCache[te]=void 0),X&256){h.ctx.deactivate(d);return}const xe=X&1&&Z,ge=!cn(d);let Pe;if(ge&&(Pe=M&&M.onVnodeBeforeUnmount)&&gt(Pe,h,d),X&6)me(d.component,y,w);else{if(X&128){d.suspense.unmount(y,w);return}xe&&Kt(d,null,h,"beforeUnmount"),X&64?d.type.remove(d,h,y,P,w):E&&!E.hasOnce&&(S!==_e||B>0&&B&64)?oe(E,h,y,!1,!0):(S===_e&&B&384||!_&&X&16)&&oe(L,h,y),w&&at(d)}const $e=ae!=null&&te==null;(ge&&(Pe=M&&M.onVnodeUnmounted)||xe||$e)&&Ze(()=>{Pe&&gt(Pe,h,d),xe&&Kt(d,null,h,"unmounted"),$e&&(d.el=null)},y)},at=d=>{const{type:h,el:y,anchor:w,transition:_}=d,S=h===_e;if(S&&!_){Fe(y,w);return}if(h===Jn){v(d),_&&!_.persisted&&_.afterLeave&&_.afterLeave();return}const M=S?is(d):d,D=()=>{S?f(y)&&Fe(y,w):s(y),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(M&&M.shapeFlag&1&&_&&!_.persisted){const{leave:L,delayLeave:E}=_,X=M.el,B=()=>L(X,D);E?E(X,D,B):B()}else D()},Fe=(d,h)=>{let y;for(;d!==h;)y=m(d),s(d),d=y;s(h)},me=(d,h,y)=>{const{bum:w,scope:_,job:S,subTree:M,um:D,m:L,a:E}=d;ci(L),ci(E),w&&Ir(w),_.stop(),S?(S.flags|=8,de(M,d,h,y)):d.vnode.el&&M&&(M.transition=d.vnode.transition,de(M,d,h,y)),D&&Ze(D,h),Ze(()=>{d.isUnmounted=!0},h)},oe=(d,h,y,w=!1,_=!1,S=0)=>{for(let M=S;M<d.length;M++)de(d[M],h,y,w,_)},z=d=>{if(d.shapeFlag&6)return z(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=m(d.anchor||d.el),y=h&&h[Dl];return y?m(y):h},G=(d,h,y)=>{const w=d&&h._vnode?void 0:d&&d.component?d.component.uid:Fc();Ol(()=>{d==null?h._vnode&&de(h._vnode,null,null,!0):A(h._vnode||null,d,h,null,null,null,y),h._vnode=d},w)},P={p:A,um:de,m:Oe,r:at,mt:tt,mc:R,pc:Q,pbc:re,n:z,o:e};return{render:G,hydrate:void 0,createApp:ac(G)}}function Gr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Yt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function _c(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Xo(e,t,n=!1){const r=e.children,s=t.children;if(ee(r)&&ee(s))for(let i=0;i<r.length;i++){const a=r[i];let o=s[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[i]=Mt(s[i]),o.el=a.el),!n&&o.patchFlag!==-2&&Xo(a,o)),o.type===Er&&(o.patchFlag===-1&&(o=s[i]=Mt(o)),o.el=a.el),o.type===st&&!o.el&&(o.el=a.el)}}function zc(e){const t=e.slice(),n=[0];let r,s,i,a,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)o=i+a>>1,e[n[o]]<c?i=o+1:a=o;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Zo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zo(t)}function ci(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function us(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?us(t.subTree):null}const Jo=e=>e.__isSuspense;function Ac(e,t){t&&t.pendingBranch?ee(e)?t.effects.push(...e):t.effects.push(e):Il(e)}const _e=Symbol.for("v-fgt"),Er=Symbol.for("v-txt"),st=Symbol.for("v-cmt"),Jn=Symbol.for("v-stc"),$t=[];let et=null;function V(e=!1){$t.push(et=e?null:[])}function Ls(){$t.pop(),et=$t[$t.length-1]||null}let Tn=1;function dr(e,t=!1){Tn+=e,e<0&&et&&t&&(et.hasOnce=!0)}function Qo(e){return e.dynamicChildren=Tn>0?et||Jt:null,Ls(),Tn>0&&et&&et.push(e),e}function K(e,t,n,r,s,i){return Qo(p(e,t,n,r,s,i,!0))}function it(e,t,n,r,s){return Qo(k(e,t,n,r,s,!0))}function dn(e){return e?e.__v_isVNode===!0:!1}function xn(e,t){return e.type===t.type&&e.key===t.key}const ea=({key:e})=>e??null,Qn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ce(e)||He(e)||ne(e)?{i:De,r:e,k:t,f:!!n}:e:null);function p(e,t=null,n=null,r=0,s=null,i=e===_e?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ea(t),ref:t&&Qn(t),scopeId:Ro,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:De};return o?(fr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Ce(n)?8:16),Tn>0&&!a&&et&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&et.push(l),l}const k=Cc;function Cc(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Jl)&&(e=st),dn(e)){const o=fn(e,t,!0);return n&&fr(o,n),Tn>0&&!i&&et&&(o.shapeFlag&6?et[et.indexOf(e)]=o:et.push(o)),o.patchFlag=-2,o}if(Lc(e)&&(e=e.__vccOpts),t){t=Sc(t);let{class:o,style:l}=t;o&&!Ce(o)&&(t.class=W(o)),he(l)&&(Ms(l)&&!ee(l)&&(l=je({},l)),t.style=ot(l))}const a=Ce(e)?1:Jo(e)?128:Cr(e)?64:he(e)?4:ne(e)?2:0;return p(e,t,n,r,s,a,i,!0)}function Sc(e){return e?Ms(e)||Ho(e)?je({},e):e:null}function fn(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:o,transition:l}=e,c=t?Rc(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&ea(c),ref:t&&t.ref?n&&i?ee(i)?i.concat(Qn(t)):[i,Qn(t)]:Qn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&fn(e.ssContent),ssFallback:e.ssFallback&&fn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&r&&lr(u,l.clone(u)),u}function Te(e=" ",t=0){return k(Er,null,e,t)}function ds(e,t){const n=k(Jn,null,e);return n.staticCount=t,n}function pn(e="",t=!1){return t?(V(),it(st,null,e)):k(st,null,e)}function yt(e){return e==null||typeof e=="boolean"?k(st):ee(e)?k(_e,null,e.slice()):dn(e)?Mt(e):k(Er,null,String(e))}function Mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:fn(e)}function fr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ee(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),fr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Ho(t)?t._ctx=De:s===3&&De&&(De.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(ne(t)){if(r&65){fr(e,{default:t});return}t={default:t,_ctx:De},n=32}else t=String(t),r&64?(n=16,t=[Te(t)]):n=8;e.children=t,e.shapeFlag|=n}function Rc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=W([t.class,r.class]));else if(s==="style")t.style=ot([t.style,r.style]);else if(br(s)){const i=t[s],a=r[s];a&&i!==a&&!(ee(i)&&i.includes(a))?t[s]=i?[].concat(i,a):a:a==null&&i==null&&!xr(s)&&(t[s]=a)}else s!==""&&(t[s]=r[s])}return t}function gt(e,t,n,r=null){dt(e,t,7,[n,r])}const Ec=Do();let ta=0;function Fc(){return ta}function Pc(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Ec,i={uid:ta++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new il(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uo(r,s),emitsOptions:jo(r,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:r.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=cc.bind(null,i),e.ce&&e.ce(i),i}let Ve=null;const na=()=>Ve||De;let pr,$n;{const e=wr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};pr=t("__VUE_INSTANCE_SETTERS__",n=>Ve=n),$n=t("__VUE_SSR_SETTERS__",n=>Ln=n)}const Vn=e=>{const t=Ve;return pr(e),e.scope.on(),()=>{e.scope.off(),pr(t)}},ui=()=>{Ve&&Ve.scope.off(),pr(null)};function ra(e){return e.vnode.shapeFlag&4}let Ln=!1;function Mc(e,t=!1,n=!1){t&&$n(t);const{props:r,children:s}=e.vnode,i=ra(e);hc(e,r,i,t),vc(e,s,n||t);const a=i?Ic(e,t):void 0;return t&&$n(!1),a}function Ic(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ec);const{setup:r}=n;if(r){At();const s=e.setupContext=r.length>1?Tc(e):null,i=Vn(e),a=Bn(r,e,0,[e.props,s]),o=Xi(a);if(Ct(),i(),(o||e.sp)&&!cn(e)&&Io(e),o){if(a.then(ui,ui),t)return a.then(l=>{$n(!0);try{di(e,l,t)}finally{$n(!1)}}).catch(l=>{Ar(l,e,0)});e.asyncDep=a}else di(e,a)}else sa(e)}function di(e,t,n){ne(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=wo(t)),sa(e)}function sa(e,t,n){const r=e.type;e.render||(e.render=r.render||kt);{const s=Vn(e);At();try{tc(e)}finally{Ct(),s()}}}const Oc={get(e,t){return Ge(e,"get",""),e[t]}};function Tc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Oc),slots:e.slots,emit:e.emit,expose:t}}function Fr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(wo(_l(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Rn)return Rn[n](e)},has(t,n){return n in t||n in Rn}})):e.proxy}function $c(e,t=!0){return ne(e)?e.displayName||e.name:e.name||t&&e.__name}function Lc(e){return ne(e)&&"__vccOpts"in e}const Re=(e,t)=>Rl(e,t,Ln);function Dn(e,t,n){try{dr(-1);const r=arguments.length;return r===2?he(t)&&!ee(t)?dn(t)?k(e,null,[t]):k(e,t):k(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&dn(n)&&(n=[n]),k(e,t,n))}finally{dr(1)}}const Dc="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fs;const fi=typeof window<"u"&&window.trustedTypes;if(fi)try{fs=fi.createPolicy("vue",{createHTML:e=>e})}catch{}const ia=fs?e=>fs.createHTML(e):e=>e,jc="http://www.w3.org/2000/svg",Nc="http://www.w3.org/1998/Math/MathML",Pt=typeof document<"u"?document:null,pi=Pt&&Pt.createElement("template"),Bc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Pt.createElementNS(jc,e):t==="mathml"?Pt.createElementNS(Nc,e):n?Pt.createElement(e,{is:n}):Pt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Pt.createTextNode(e),createComment:e=>Pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{pi.innerHTML=ia(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const o=pi.content;if(r==="svg"||r==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Gc=Symbol("_vtc");function Vc(e,t,n){const r=e[Gc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const mr=Symbol("_vod"),oa=Symbol("_vsh"),Vr={name:"show",beforeMount(e,{value:t},{transition:n}){e[mr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):vn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),vn(e,!0),r.enter(e)):r.leave(e,()=>{vn(e,!1)}):vn(e,t))},beforeUnmount(e,{value:t}){vn(e,t)}};function vn(e,t){e.style.display=t?e[mr]:"none",e[oa]=!t}const Hc=Symbol(""),qc=/(?:^|;)\s*display\s*:/;function Uc(e,t,n){const r=e.style,s=Ce(n);let i=!1;if(n&&!s){if(t)if(Ce(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&_n(r,o,"")}else for(const a in t)n[a]==null&&_n(r,a,"");for(const a in n){a==="display"&&(i=!0);const o=n[a];o!=null?Kc(e,a,!Ce(t)&&t?t[a]:void 0,o)||_n(r,a,o):_n(r,a,"")}}else if(s){if(t!==n){const a=r[Hc];a&&(n+=";"+a),r.cssText=n,i=qc.test(n)}}else t&&e.removeAttribute("style");mr in e&&((!s||t!==n)&&(e[mr]=i?r.display:""),e[oa]&&(r.display="none"))}const Wn=/\s*!important$/;function _n(e,t,n){if(ee(n))n.forEach(r=>_n(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))Wn.test(n)?e.setProperty(t,n.replace(Wn,""),"important"):e.setProperty(t,n);else{const r=Wc(e,t);Wn.test(n)?e.setProperty(tn(r),n.replace(Wn,""),"important"):e[r]=n}}const mi=["Webkit","Moz","ms"],Hr={};function Wc(e,t){const n=Hr[t];if(n)return n;let r=Xe(t);if(r!=="filter"&&r in e)return Hr[t]=r;r=yr(r);for(let s=0;s<mi.length;s++){const i=mi[s]+r;if(i in e)return Hr[t]=i}return t}function Kc(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ce(r)&&n===r}const hi="http://www.w3.org/1999/xlink";function gi(e,t,n,r,s,i=nl(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(hi,t.slice(6,t.length)):e.setAttributeNS(hi,t,n):n==null||i&&!eo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":ut(n)?String(n):n)}function bi(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ia(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=eo(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Yc(e,t,n,r){e.addEventListener(t,n,r)}function Xc(e,t,n,r){e.removeEventListener(t,n,r)}const xi=Symbol("_vei");function Zc(e,t,n,r,s=null){const i=e[xi]||(e[xi]={}),a=i[t];if(r&&a)a.value=r;else{const[o,l]=eu(t);if(r){const c=i[t]=ru(r,s);Yc(e,o,c,l)}else a&&(Xc(e,o,a,l),i[t]=void 0)}}const Jc=/(Once|Passive|Capture)$/,Qc=/^on:?(?:Once|Passive|Capture)$/;function eu(e){let t,n;for(;(n=e.match(Jc))&&!Qc.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):tn(e.slice(2)),t]}let qr=0;const tu=Promise.resolve(),nu=()=>qr||(tu.then(()=>qr=0),qr=Date.now());function ru(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ee(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const a=s.slice(),o=[r];for(let l=0;l<a.length&&!r._stopped;l++){const c=a[l];c&&dt(c,t,5,o)}}else dt(s,t,5,[r])};return n.value=e,n.attached=nu(),n}const vi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,su=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?Vc(e,r,a):t==="style"?Uc(e,n,r):br(t)?xr(t)||Zc(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):iu(e,t,r,a))?(bi(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&gi(e,t,r,a,i,t!=="value")):e._isVueCE&&(ou(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ce(r)))?bi(e,Xe(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),gi(e,t,r,a))};function iu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&vi(t)&&ne(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return vi(t)&&Ce(n)?!1:t in e}function ou(e,t){const n=e._def.props;if(!n)return!1;const r=Xe(t);return Array.isArray(n)?n.some(s=>Xe(s)===r):Object.keys(n).some(s=>Xe(s)===r)}const au=je({patchProp:su},Bc);let yi;function lu(){return yi||(yi=wc(au))}const cu=((...e)=>{const t=lu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=du(r);if(!s)return;const i=t._component;!ne(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,uu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function uu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function du(e){return Ce(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:r,iconNode:s,name:i,class:a,...o},{slots:l})=>Dn("svg",{...Kn,width:e||Kn.width,height:e||Kn.height,stroke:r||Kn.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${fu(i??"icon")}`],...o},[...s.map(c=>Dn(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(e,t)=>(n,{slots:r})=>Dn(pu,{...n,iconNode:t,name:e},r);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=Ee("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=Ee("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=Ee("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=Ee("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=Ee("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=Ee("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=Ee("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=Ee("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=Ee("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=Ee("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=Ee("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=Ee("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=Ee("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=Ee("RepeatIcon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=Ee("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=Ee("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=Ee("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=Ee("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=Ee("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=Ee("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=Ee("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),zu=we({__name:"ThemeToggle",setup(e){const t=be(!0);function n(){t.value=!t.value,t.value?(document.documentElement.classList.add("dark"),localStorage.setItem("aura-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("aura-theme","light"))}return nn(()=>{const r=localStorage.getItem("aura-theme");r?t.value=r==="dark":t.value=window.matchMedia("(prefers-color-scheme: dark)").matches,t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),(r,s)=>(V(),K("button",{type:"button",class:"relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"切换亮色 / 暗色模式",onClick:n},[t.value?(V(),it(N(ku),{key:0,class:"h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400"})):(V(),it(N(xu),{key:1,class:"h-4 w-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-indigo-600"}))]))}}),Au={class:"sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80 transition-colors"},Cu={class:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"},Su={class:"flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md shadow-blue-500/20 text-white transition-transform duration-300 group-hover:scale-105"},Ru={class:"hidden md:flex items-center gap-6 text-sm font-medium"},Eu={class:"flex items-center gap-3"},Fu={href:"https://github.com",target:"_blank",rel:"noopener noreferrer",class:"flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"GitHub 仓库"},Pu=we({__name:"Header",setup(e){return(t,n)=>{const r=Gn("router-link");return V(),K("header",Au,[p("div",Cu,[k(r,{to:"/",class:"flex items-center gap-2.5 group"},{default:J(()=>[p("div",Su,[k(N(Qe),{class:"h-5 w-5"})]),n[0]||(n[0]=p("div",{class:"flex flex-col"},[p("div",{class:"flex items-center gap-1.5"},[p("span",{class:"text-lg font-black tracking-tight text-zinc-900 dark:text-white"},[Te(" Aura"),p("span",{class:"text-blue-600 dark:text-blue-400"},"UI")]),p("span",{class:"rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300"}," Vue 3.5 ")]),p("span",{class:"text-[10px] text-zinc-400"},"动效原子代码库")],-1))]),_:1}),p("nav",Ru,[k(r,{to:"/",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:J(()=>[...n[1]||(n[1]=[Te(" 官网首页 ",-1)])]),_:1}),k(r,{to:"/docs/border-beam",class:"inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:J(()=>[k(N(er),{class:"h-4 w-4"}),n[2]||(n[2]=p("span",null,"组件库 (14)",-1))]),_:1}),n[3]||(n[3]=p("a",{href:"#features",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}," 核心特性 ",-1))]),p("div",Eu,[k(zu),p("a",Fu,[k(N(gu),{class:"h-4 w-4"})]),k(r,{to:"/docs/border-beam",class:"hidden sm:inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"},{default:J(()=>[...n[4]||(n[4]=[Te(" 浏览代码 ",-1)])]),_:1})])])])}}}),Mu={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50 transition-colors"},Iu={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Ou={class:"flex flex-col md:flex-row items-center justify-between gap-6"},Tu={class:"flex items-center gap-3"},$u={class:"flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"},Lu={class:"flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"},Du={class:"inline-flex items-center gap-1"},ju=we({__name:"Footer",setup(e){return(t,n)=>(V(),K("footer",Mu,[p("div",Iu,[p("div",Ou,[p("div",Tu,[p("div",$u,[k(N(Qe),{class:"h-4 w-4"})]),n[0]||(n[0]=p("div",null,[p("p",{class:"text-sm font-bold text-zinc-900 dark:text-zinc-100"}," Aura UI (Vue 3) "),p("p",{class:"text-xs text-zinc-500 dark:text-zinc-400"}," 对标 Magic UI / Aceternity UI，属于 Vue 3 的动效原子代码库 ")],-1))]),p("div",Lu,[n[3]||(n[3]=p("span",null,"采用 MIT 协议开源，完全支持 Copy & Paste 即用",-1)),n[4]||(n[4]=p("span",null,"•",-1)),p("span",Du,[n[1]||(n[1]=Te(" Built with ",-1)),k(N(bu),{class:"h-3 w-3 text-red-500 fill-red-500"}),n[2]||(n[2]=Te(" for Vue 3 ecosystem ",-1))])])])])]))}}),Nu={class:"min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-200"},Bu={class:"flex-1"},Gu=we({__name:"App",setup(e){return(t,n)=>{const r=Gn("router-view");return V(),K("div",Nu,[k(Pu),p("div",Bu,[k(r)]),k(ju)])}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ln=typeof document<"u";function da(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Vu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&da(e.default)}const fe=Object.assign;function Ur(e,t){const n={};for(const r in t){const s=t[r];n[r]=ft(s)?s.map(e):e(s)}return n}const En=()=>{},ft=Array.isArray;function ki(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const fa=/#/g,Hu=/&/g,qu=/\//g,Uu=/=/g,Wu=/\?/g,pa=/\+/g,Ku=/%5B/g,Yu=/%5D/g,ma=/%5E/g,Xu=/%60/g,ha=/%7B/g,Zu=/%7C/g,ga=/%7D/g,Ju=/%20/g;function Ds(e){return e==null?"":encodeURI(""+e).replace(Zu,"|").replace(Ku,"[").replace(Yu,"]")}function Qu(e){return Ds(e).replace(ha,"{").replace(ga,"}").replace(ma,"^")}function gs(e){return Ds(e).replace(pa,"%2B").replace(Ju,"+").replace(fa,"%23").replace(Hu,"%26").replace(Xu,"`").replace(ha,"{").replace(ga,"}").replace(ma,"^")}function ed(e){return gs(e).replace(Uu,"%3D")}function td(e){return Ds(e).replace(fa,"%23").replace(Wu,"%3F")}function nd(e){return td(e).replace(qu,"%2F")}function jn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const rd=/\/$/,sd=e=>e.replace(rd,"");function Wr(e,t,n="/"){let r,s={},i="",a="";const o=t.indexOf("#");let l=t.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(r=t.slice(0,l),i=t.slice(l,o>0?o:t.length),s=e(i.slice(1))),o>=0&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=ld(r??t,n),{fullPath:r+i+a,path:r,query:s,hash:jn(a)}}function id(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _i(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function od(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mn(t.matched[r],n.matched[s])&&ba(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ba(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!ad(e[n],t[n]))return!1;return!0}function ad(e,t){return ft(e)?zi(e,t):ft(t)?zi(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function zi(e,t){return ft(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ld(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let bs=(function(e){return e.pop="pop",e.push="push",e})({}),Kr=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function cd(e){if(!e)if(ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),sd(e)}const ud=/^[^#]+#/;function dd(e,t){return e.replace(ud,"#")+t}function fd(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Pr=()=>({left:window.scrollX,top:window.scrollY});function pd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=fd(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ai(e,t){return(history.state?history.state.position-t:-1)+e}const xs=new Map;function md(e,t){xs.set(e,t)}function hd(e){const t=xs.get(e);return xs.delete(e),t}function gd(e){return typeof e=="string"||e&&typeof e=="object"}function xa(e){return typeof e=="string"||typeof e=="symbol"}let ze=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const va=Symbol("");ze.MATCHER_NOT_FOUND+"",ze.NAVIGATION_GUARD_REDIRECT+"",ze.NAVIGATION_ABORTED+"",ze.NAVIGATION_CANCELLED+"",ze.NAVIGATION_DUPLICATED+"";function hn(e,t){return fe(new Error,{type:e,[va]:!0},t)}function Et(e,t){return e instanceof Error&&va in e&&(t==null||!!(e.type&t))}const bd=["params","query","hash"];function xd(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of bd)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function vd(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(pa," "),i=s.indexOf("="),a=jn(i<0?s:s.slice(0,i)),o=i<0?null:jn(s.slice(i+1));if(a in t){let l=t[a];ft(l)||(l=t[a]=[l]),l.push(o)}else t[a]=o}return t}function Ci(e){let t="";for(let n in e){const r=e[n];if(n=ed(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ft(r)?r.map(s=>s&&gs(s)):[r&&gs(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function yd(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ft(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const wd=Symbol(""),Si=Symbol(""),js=Symbol(""),Ns=Symbol(""),vs=Symbol("");function yn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Bt(e,t,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=m=>{m===!1?l(hn(ze.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?l(m):gd(m)?l(hn(ze.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),o())},u=i(()=>e.call(r&&r.instances[s],t,n,c));let f=Promise.resolve(u);e.length<3&&(f=f.then(c)),f.catch(m=>l(m))})}function Yr(e,t,n,r,s=i=>i()){const i=[];for(const a of e)for(const o in a.components){let l=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(da(l)){const c=(l.__vccOpts||l)[t];c&&i.push(Bt(c,n,r,a,o,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=Vu(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const m=(f.__vccOpts||f)[t];return m&&Bt(m,n,r,a,o,s)()}))}}return i}function kd(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const o=t.matched[a];o&&(e.matched.find(c=>mn(c,o))?r.push(o):n.push(o));const l=e.matched[a];l&&(t.matched.find(c=>mn(c,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let _d=()=>location.protocol+"//"+location.host;function ya(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,o=s.slice(a);return o[0]!=="/"&&(o="/"+o),_i(o,"")}return _i(n,e)+r+s}function zd(e,t,n,r){let s=[],i=[],a=null;const o=({state:m})=>{const b=ya(e,location),I=n.value,A=t.value;let O=0;if(m){if(n.value=b,t.value=m,a&&a===I){a=null;return}O=A?m.position-A.position:0}else r(b);s.forEach($=>{$(n.value,I,{delta:O,type:bs.pop,direction:O?O>0?Kr.forward:Kr.back:Kr.unknown})})};function l(){a=n.value}function c(m){s.push(m);const b=()=>{const I=s.indexOf(m);I>-1&&s.splice(I,1)};return i.push(b),b}function u(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(fe({},m.state,{scroll:Pr()}),"")}}function f(){for(const m of i)m();i=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function Ri(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Pr():null}}function Ad(e){const{history:t,location:n}=window,r={value:ya(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=e.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:_d()+e+l;try{t[u?"replaceState":"pushState"](c,"",m),s.value=c}catch(b){console.error(b),n[u?"replace":"assign"](m)}}function a(l,c){i(l,fe({},t.state,Ri(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),r.value=l}function o(l,c){const u=fe({},s.value,t.state,{forward:l,scroll:Pr()});i(u.current,u,!0),i(l,fe({},Ri(r.value,l,null),{position:u.position+1},c),!1),r.value=l}return{location:r,state:s,push:o,replace:a}}function Cd(e){e=cd(e);const t=Ad(e),n=zd(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=fe({location:"",base:e,go:r,createHref:dd.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Qt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ie=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ie||{});const Sd={type:Qt.Static,value:""},Rd=/[a-zA-Z0-9_]/;function Ed(e){if(!e)return[[]];if(e==="/")return[[Sd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${c}": ${b}`)}let n=Ie.Static,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let o=0,l,c="",u="";function f(){c&&(n===Ie.Static?i.push({type:Qt.Static,value:c}):n===Ie.Param||n===Ie.ParamRegExp||n===Ie.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Qt.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function m(){c+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==Ie.ParamRegExp){r=n,n=Ie.EscapeNext;continue}switch(n){case Ie.Static:l==="/"?(c&&f(),a()):l===":"?(f(),n=Ie.Param):m();break;case Ie.EscapeNext:m(),n=r;break;case Ie.Param:l==="("?n=Ie.ParamRegExp:Rd.test(l)?m():(f(),n=Ie.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Ie.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Ie.ParamRegExpEnd:u+=l;break;case Ie.ParamRegExpEnd:f(),n=Ie.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===Ie.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),f(),a(),s}const Ei="[^/]+?",Fd={sensitive:!1,strict:!1,start:!0,end:!0};var Ke=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ke||{});const Pd=/[.+*?^${}()[\]/\\]/g;function Md(e,t){const n=fe({},Fd,t),r=[];let s=n.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[Ke.Root];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const m=c[f];let b=Ke.Segment+(n.sensitive?Ke.BonusCaseSensitive:0);if(m.type===Qt.Static)f||(s+="/"),s+=m.value.replace(Pd,"\\$&"),b+=Ke.Static;else if(m.type===Qt.Param){const{value:I,repeatable:A,optional:O,regexp:$}=m;i.push({name:I,repeatable:A,optional:O});const g=$||Ei;if(g!==Ei){b+=Ke.BonusCustomRegExp;try{`${g}`}catch(v){throw new Error(`Invalid custom RegExp for param "${I}" (${g}): `+v.message)}}let x=A?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;f||(x=O&&c.length<2?`(?:/${x})`:"/"+x),O&&(x+="?"),s+=x,b+=Ke.Dynamic,O&&(b+=Ke.BonusOptional),A&&(b+=Ke.BonusRepeatable),g===".*"&&(b+=Ke.BonusWildcard)}u.push(b)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=Ke.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let m=1;m<u.length;m++){const b=u[m]||"",I=i[m-1];f[I.name]=b&&I.repeatable?b.split("/"):b}return f}function l(c){let u="",f=!1;for(const m of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const b of m)if(b.type===Qt.Static)u+=b.value;else if(b.type===Qt.Param){const{value:I,repeatable:A,optional:O}=b,$=I in c?c[I]:"";if(ft($)&&!A)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const g=ft($)?$.join("/"):$;if(!g)if(O)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);u+=g}}return u||"/"}return{re:a,score:r,keys:i,parse:o,stringify:l}}function Id(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Ke.Static+Ke.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ke.Static+Ke.Segment?1:-1:0}function wa(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Id(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Fi(r))return 1;if(Fi(s))return-1}return s.length-r.length}function Fi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Od={strict:!1,end:!0,sensitive:!1};function Td(e,t,n){const r=Md(Ed(e.path),n),s=fe(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function $d(e,t){const n=[],r=new Map;t=ki(Od,t);function s(f){return r.get(f)}function i(f,m,b){const I=!b,A=Mi(f);A.aliasOf=b&&b.record;const O=ki(t,f),$=[A];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const C of v)$.push(Mi(fe({},A,{components:b?b.record.components:A.components,path:C,aliasOf:b?b.record:A})))}let g,x;for(const v of $){const{path:C}=v;if(m&&C[0]!=="/"){const F=m.record.path,T=F[F.length-1]==="/"?"":"/";v.path=m.record.path+(C&&T+C)}if(g=Td(v,m,O),b?b.alias.push(g):(x=x||g,x!==g&&x.alias.push(g),I&&f.name&&!Ii(g)&&a(f.name)),ka(g)&&l(g),A.children){const F=A.children;for(let T=0;T<F.length;T++)i(F[T],g,b&&b.children[T])}b=b||g}return x?()=>{a(x)}:En}function a(f){if(xa(f)){const m=r.get(f);m&&(r.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&r.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return n}function l(f){const m=jd(f,n);n.splice(m,0,f),f.record.name&&!Ii(f)&&r.set(f.record.name,f)}function c(f,m){let b,I={},A,O;if("name"in f&&f.name){if(b=r.get(f.name),!b)throw hn(ze.MATCHER_NOT_FOUND,{location:f});O=b.record.name,I=fe(Pi(m.params,b.keys.filter(x=>!x.optional).concat(b.parent?b.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),f.params&&Pi(f.params,b.keys.map(x=>x.name))),A=b.stringify(I)}else if(f.path!=null)A=f.path,b=n.find(x=>x.re.test(A)),b&&(I=b.parse(A),O=b.record.name);else{if(b=m.name?r.get(m.name):n.find(x=>x.re.test(m.path)),!b)throw hn(ze.MATCHER_NOT_FOUND,{location:f,currentLocation:m});O=b.record.name,I=fe({},m.params,f.params),A=b.stringify(I)}const $=[];let g=b;for(;g;)$.unshift(g.record),g=g.parent;return{name:O,path:A,params:I,matched:$,meta:Dd($)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:s}}function Pi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Mi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ld(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ld(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ii(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Dd(e){return e.reduce((t,n)=>fe(t,n.meta),{})}function jd(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;wa(e,t[i])<0?r=i:n=i+1}const s=Nd(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Nd(e){let t=e;for(;t=t.parent;)if(ka(t)&&wa(e,t)===0)return t}function ka({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Oi(e){const t=_t(js),n=_t(Ns),r=Re(()=>{const l=N(e.to);return t.resolve(l)}),s=Re(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const m=f.findIndex(mn.bind(null,u));if(m>-1)return m;const b=Ti(l[c-2]);return c>1&&Ti(u)===b&&f[f.length-1].path!==b?f.findIndex(mn.bind(null,l[c-2])):m}),i=Re(()=>s.value>-1&&qd(n.params,r.value.params)),a=Re(()=>s.value>-1&&s.value===n.matched.length-1&&ba(n.params,r.value.params));function o(l={}){if(Hd(l)){const c=t[N(e.replace)?"replace":"push"](N(e.to)).catch(En);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:Re(()=>r.value.href),isActive:i,isExactActive:a,navigate:o}}function Bd(e){return e.length===1?e[0]:e}const Gd=we({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Oi,setup(e,{slots:t}){const n=zr(Oi(e)),{options:r}=_t(js),s=Re(()=>({[$i(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$i(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Bd(t.default(n));return e.custom?i:Dn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Vd=Gd;function Hd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qd(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ft(s)||s.length!==r.length||r.some((i,a)=>i.valueOf()!==s[a].valueOf()))return!1}return!0}function Ti(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const $i=(e,t,n)=>e??t??n,Ud=we({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=_t(vs),s=Re(()=>e.route||r.value),i=_t(Si,0),a=Re(()=>{let c=N(i);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=Re(()=>s.value.matched[a.value]);Zn(Si,Re(()=>a.value+1)),Zn(wd,o),Zn(vs,s);const l=be();return Ht(()=>[l.value,o.value,e.name],([c,u,f],[m,b,I])=>{u&&(u.instances[f]=c,b&&b!==u&&c&&c===m&&(u.leaveGuards.size||(u.leaveGuards=b.leaveGuards),u.updateGuards.size||(u.updateGuards=b.updateGuards))),c&&u&&(!b||!mn(u,b)||!m)&&(u.enterCallbacks[f]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=s.value,u=e.name,f=o.value,m=f&&f.components[u];if(!m)return Li(n.default,{Component:m,route:c});const b=f.props[u],I=b?b===!0?c.params:typeof b=="function"?b(c):b:null,O=Dn(m,fe({},I,t,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Li(n.default,{Component:O,route:c})||O}}});function Li(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wd=Ud;function Kd(e){const t=$d(e.routes,e),n=e.parseQuery||vd,r=e.stringifyQuery||Ci,s=e.history,i=yn(),a=yn(),o=yn(),l=zl(Dt);let c=Dt;ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ur.bind(null,z=>""+z),f=Ur.bind(null,nd),m=Ur.bind(null,jn);function b(z,G){let P,Y;return xa(z)?(P=t.getRecordMatcher(z),Y=G):Y=z,t.addRoute(Y,P)}function I(z){const G=t.getRecordMatcher(z);G&&t.removeRoute(G)}function A(){return t.getRoutes().map(z=>z.record)}function O(z){return!!t.getRecordMatcher(z)}function $(z,G){if(G=fe({},G||l.value),typeof z=="string"){const w=Wr(n,z,G.path),_=t.resolve({path:w.path},G),S=s.createHref(w.fullPath);return fe(w,_,{params:m(_.params),hash:jn(w.hash),redirectedFrom:void 0,href:S})}let P;if(z.path!=null)P=fe({},z,{path:Wr(n,z.path,G.path).path});else{const w=fe({},z.params);for(const _ in w)w[_]==null&&delete w[_];P=fe({},z,{params:f(w)}),G.params=f(G.params)}const Y=t.resolve(P,G),d=z.hash||"";Y.params=u(m(Y.params));const h=id(r,fe({},z,{hash:Qu(d),path:Y.path})),y=s.createHref(h);return fe({fullPath:h,hash:d,query:r===Ci?yd(z.query):z.query||{}},Y,{redirectedFrom:void 0,href:y})}function g(z){return typeof z=="string"?Wr(n,z,l.value.path):fe({},z)}function x(z,G){if(c!==z)return hn(ze.NAVIGATION_CANCELLED,{from:G,to:z})}function v(z){return T(z)}function C(z){return v(fe(g(z),{replace:!0}))}function F(z,G){const P=z.matched[z.matched.length-1];if(P&&P.redirect){const{redirect:Y}=P;let d=typeof Y=="function"?Y(z,G):Y;return typeof d=="string"&&(d=d.includes("?")||d.includes("#")?d=g(d):{path:d},d.params={}),fe({query:z.query,hash:z.hash,params:d.path!=null?{}:z.params},d)}}function T(z,G){const P=c=$(z),Y=l.value,d=z.state,h=z.force,y=z.replace===!0,w=F(P,Y);if(w)return T(fe(g(w),{state:typeof w=="object"?fe({},d,w.state):d,force:h,replace:y}),G||P);const _=P;_.redirectedFrom=G;let S;return!h&&od(r,Y,P)&&(S=hn(ze.NAVIGATION_DUPLICATED,{to:_,from:Y}),Oe(Y,Y,!0,!1)),(S?Promise.resolve(S):re(_,Y)).catch(M=>Et(M)?Et(M,ze.NAVIGATION_GUARD_REDIRECT)?M:H(M):Q(M,_,Y)).then(M=>{if(M){if(Et(M,ze.NAVIGATION_GUARD_REDIRECT))return T(fe({replace:y},g(M.to),{state:typeof M.to=="object"?fe({},d,M.to.state):d,force:h}),G||_)}else M=Se(_,Y,!0,y,d);return ue(_,Y,M),M})}function R(z,G){const P=x(z,G);return P?Promise.reject(P):Promise.resolve()}function j(z){const G=Fe.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(z):z()}function re(z,G){let P;const[Y,d,h]=kd(z,G);P=Yr(Y.reverse(),"beforeRouteLeave",z,G);for(const w of Y)w.leaveGuards.forEach(_=>{P.push(Bt(_,z,G))});const y=R.bind(null,z,G);return P.push(y),oe(P).then(()=>{P=[];for(const w of i.list())P.push(Bt(w,z,G));return P.push(y),oe(P)}).then(()=>{P=Yr(d,"beforeRouteUpdate",z,G);for(const w of d)w.updateGuards.forEach(_=>{P.push(Bt(_,z,G))});return P.push(y),oe(P)}).then(()=>{P=[];for(const w of h)if(w.beforeEnter)if(ft(w.beforeEnter))for(const _ of w.beforeEnter)P.push(Bt(_,z,G));else P.push(Bt(w.beforeEnter,z,G));return P.push(y),oe(P)}).then(()=>(z.matched.forEach(w=>w.enterCallbacks={}),P=Yr(h,"beforeRouteEnter",z,G,j),P.push(y),oe(P))).then(()=>{P=[];for(const w of a.list())P.push(Bt(w,z,G));return P.push(y),oe(P)}).catch(w=>Et(w,ze.NAVIGATION_CANCELLED)?w:Promise.reject(w))}function ue(z,G,P){o.list().forEach(Y=>j(()=>Y(z,G,P)))}function Se(z,G,P,Y,d){const h=x(z,G);if(h)return h;const y=G===Dt,w=ln?history.state:{};P&&(Y||y?s.replace(z.fullPath,fe({scroll:y&&w&&w.scroll},d)):s.push(z.fullPath,d)),l.value=z,Oe(z,G,P,y),H()}let Be;function tt(){Be||(Be=s.listen((z,G,P)=>{if(!me.listening)return;const Y=$(z),d=F(Y,me.currentRoute.value);if(d){T(fe(d,{replace:!0,force:!0}),Y).catch(En);return}c=Y;const h=l.value;ln&&md(Ai(h.fullPath,P.delta),Pr()),re(Y,h).catch(y=>Et(y,ze.NAVIGATION_ABORTED|ze.NAVIGATION_CANCELLED)?y:Et(y,ze.NAVIGATION_GUARD_REDIRECT)?(T(fe(g(y.to),{force:!0}),Y).then(w=>{Et(w,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&!P.delta&&P.type===bs.pop&&s.go(-1,!1)}).catch(En),Promise.reject()):(P.delta&&s.go(-P.delta,!1),Q(y,Y,h))).then(y=>{y=y||Se(Y,h,!1),y&&(P.delta&&!Et(y,ze.NAVIGATION_CANCELLED)?s.go(-P.delta,!1):P.type===bs.pop&&Et(y,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),ue(Y,h,y)}).catch(En)}))}let qe=yn(),le=yn(),se;function Q(z,G,P){H(z);const Y=le.list();return Y.length?Y.forEach(d=>d(z,G,P)):console.error(z),Promise.reject(z)}function ke(){return se&&l.value!==Dt?Promise.resolve():new Promise((z,G)=>{qe.add([z,G])})}function H(z){return se||(se=!z,tt(),qe.list().forEach(([G,P])=>z?P(z):G()),qe.reset()),z}function Oe(z,G,P,Y){const{scrollBehavior:d}=e;if(!ln||!d)return Promise.resolve();const h=!P&&hd(Ai(z.fullPath,0))||(Y||!P)&&history.state&&history.state.scroll||null;return _o().then(()=>d(z,G,h)).then(y=>y&&pd(y)).catch(y=>Q(y,z,G))}const de=z=>s.go(z);let at;const Fe=new Set,me={currentRoute:l,listening:!0,addRoute:b,removeRoute:I,clearRoutes:t.clearRoutes,hasRoute:O,getRoutes:A,resolve:$,options:e,push:v,replace:C,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:i.add,beforeResolve:a.add,afterEach:o.add,onError:le.add,isReady:ke,install(z){z.component("RouterLink",Vd),z.component("RouterView",Wd),z.config.globalProperties.$router=me,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>N(l)}),ln&&!at&&l.value===Dt&&(at=!0,v(s.location).catch(Y=>{}));const G={};for(const Y in Dt)Object.defineProperty(G,Y,{get:()=>l.value[Y],enumerable:!0});z.provide(js,me),z.provide(Ns,vo(G)),z.provide(vs,l);const P=z.unmount;Fe.add(z),z.unmount=function(){Fe.delete(z),Fe.size<1&&(c=Dt,Be&&Be(),Be=null,l.value=Dt,at=!1,se=!1),P()}}};function oe(z){return z.reduce((G,P)=>G.then(()=>j(P)),Promise.resolve())}return me}function Yd(e){return _t(Ns)}function _a(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=_a(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Xd(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=_a(e))&&(r&&(r+=" "),r+=t);return r}const Zd=(e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Jd=(e,t)=>({classGroupId:e,validator:t}),za=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),hr="-",Di=[],Qd="arbitrary..",ef=e=>{const t=nf(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:a=>{if(a.startsWith("[")&&a.endsWith("]"))return tf(a);const o=a.split(hr),l=o[0]===""&&o.length>1?1:0;return Aa(o,l,t)},getConflictingClassGroupIds:(a,o)=>{if(o){const l=r[a],c=n[a];return l?c?Zd(c,l):l:c||Di}return n[a]||Di}}},Aa=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const s=e[t],i=n.nextPart.get(s);if(i){const c=Aa(e,t+1,i);if(c)return c}const a=n.validators;if(a===null)return;const o=t===0?e.join(hr):e.slice(t).join(hr),l=a.length;for(let c=0;c<l;c++){const u=a[c];if(u.validator(o))return u.classGroupId}},tf=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?Qd+r:void 0})(),nf=e=>{const{theme:t,classGroups:n}=e;return rf(n,t)},rf=(e,t)=>{const n=za();for(const r in e){const s=e[r];Bs(s,n,r,t)}return n},Bs=(e,t,n,r)=>{const s=e.length;for(let i=0;i<s;i++){const a=e[i];sf(a,t,n,r)}},sf=(e,t,n,r)=>{if(typeof e=="string"){of(e,t,n);return}if(typeof e=="function"){af(e,t,n,r);return}lf(e,t,n,r)},of=(e,t,n)=>{const r=e===""?t:Ca(t,e);r.classGroupId=n},af=(e,t,n,r)=>{if(cf(e)){Bs(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Jd(n,e))},lf=(e,t,n,r)=>{const s=Object.entries(e),i=s.length;for(let a=0;a<i;a++){const[o,l]=s[a];Bs(l,Ca(t,o),n,r)}},Ca=(e,t)=>{let n=e;const r=t.split(hr),s=r.length;for(let i=0;i<s;i++){const a=r[i];let o=n.nextPart.get(a);o||(o=za(),n.nextPart.set(a,o)),n=o}return n},cf=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,uf=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const s=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(i){let a=n[i];if(a!==void 0)return a;if((a=r[i])!==void 0)return s(i,a),a},set(i,a){i in n?n[i]=a:s(i,a)}}},ys="!",ji=":",df=[],Ni=(e,t,n,r,s)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:s}),ff=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=s=>{const i=[];let a=0,o=0,l=0,c;const u=s.length;for(let A=0;A<u;A++){const O=s[A];if(a===0&&o===0){if(O===ji){i.push(s.slice(l,A)),l=A+1;continue}if(O==="/"){c=A;continue}}O==="["?a++:O==="]"?a--:O==="("?o++:O===")"&&o--}const f=i.length===0?s:s.slice(l);let m=f,b=!1;f.endsWith(ys)?(m=f.slice(0,-1),b=!0):f.startsWith(ys)&&(m=f.slice(1),b=!0);const I=c&&c>l?c-l:void 0;return Ni(i,b,m,I)};if(t){const s=t+ji,i=r;r=a=>a.startsWith(s)?i(a.slice(s.length)):Ni(df,!1,a,void 0,!0)}if(n){const s=r;r=i=>n({className:i,parseClassName:s})}return r},pf=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{t.set(n,1e6+r)}),n=>{const r=[];let s=[];for(let i=0;i<n.length;i++){const a=n[i],o=a[0]==="[",l=t.has(a);o||l?(s.length>0&&(s.sort(),r.push(...s),s=[]),r.push(a)):s.push(a)}return s.length>0&&(s.sort(),r.push(...s)),r}},mf=e=>({cache:uf(e.cacheSize),parseClassName:ff(e),sortModifiers:pf(e),postfixLookupClassGroupIds:hf(e),...ef(e)}),hf=e=>{const t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let r=0;r<n.length;r++)t[n[r]]=!0;return t},gf=/\s+/,bf=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s,sortModifiers:i,postfixLookupClassGroupIds:a}=t,o=[],l=e.trim().split(gf);let c="";for(let u=l.length-1;u>=0;u-=1){const f=l[u],{isExternal:m,modifiers:b,hasImportantModifier:I,baseClassName:A,maybePostfixModifierPosition:O}=n(f);if(m){c=f+(c.length>0?" "+c:c);continue}let $=!!O,g;if($){const T=A.substring(0,O);g=r(T);const R=g&&a[g]?r(A):void 0;R&&R!==g&&(g=R,$=!1)}else g=r(A);if(!g){if(!$){c=f+(c.length>0?" "+c:c);continue}if(g=r(A),!g){c=f+(c.length>0?" "+c:c);continue}$=!1}const x=b.length===0?"":b.length===1?b[0]:i(b).join(":"),v=I?x+ys:x,C=v+g;if(o.indexOf(C)>-1)continue;o.push(C);const F=s(g,$);for(let T=0;T<F.length;++T){const R=F[T];o.push(v+R)}c=f+(c.length>0?" "+c:c)}return c},xf=(...e)=>{let t=0,n,r,s="";for(;t<e.length;)(n=e[t++])&&(r=Sa(n))&&(s&&(s+=" "),s+=r);return s},Sa=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Sa(e[r]))&&(n&&(n+=" "),n+=t);return n},vf=(e,...t)=>{let n,r,s,i;const a=l=>{const c=t.reduce((u,f)=>f(u),e());return n=mf(c),r=n.cache.get,s=n.cache.set,i=o,o(l)},o=l=>{const c=r(l);if(c)return c;const u=bf(l,n);return s(l,u),u};return i=a,(...l)=>i(xf(...l))},yf=[],Me=e=>{const t=n=>n[e]||yf;return t.isThemeGetter=!0,t.themeKey=e,t},Ra=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ea=/^\((?:(\w[\w-]*):)?(.+)\)$/i,wf=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,kf=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,zf=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,Af=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Cf=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,jt=e=>wf.test(e),ie=e=>!!e&&!Number.isNaN(Number(e)),bt=e=>!!e&&Number.isInteger(Number(e)),Xr=e=>e.endsWith("%")&&ie(e.slice(0,-1)),Ft=e=>kf.test(e),Fa=()=>!0,Sf=e=>_f.test(e)&&!zf.test(e),Gs=()=>!1,Rf=e=>Af.test(e),Ef=e=>Cf.test(e),Ff=e=>!q(e)&&!U(e),Pf=e=>e.startsWith("@container")&&(e[10]==="/"&&e[11]!==void 0||e[11]==="s"&&e[16]!==void 0&&e.startsWith("-size/",10)||e[11]==="n"&&e[18]!==void 0&&e.startsWith("-normal/",10)),Mf=e=>Ut(e,Ia,Gs),q=e=>Ra.test(e),Xt=e=>Ut(e,Oa,Sf),Bi=e=>Ut(e,Nf,ie),If=e=>Ut(e,$a,Fa),Of=e=>Ut(e,Ta,Gs),Gi=e=>Ut(e,Pa,Gs),Tf=e=>Ut(e,Ma,Ef),Yn=e=>Ut(e,La,Rf),U=e=>Ea.test(e),wn=e=>sn(e,Oa),$f=e=>sn(e,Ta),Vi=e=>sn(e,Pa),Lf=e=>sn(e,Ia),Df=e=>sn(e,Ma),Xn=e=>sn(e,La,!0),jf=e=>sn(e,$a,!0),Ut=(e,t,n)=>{const r=Ra.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},sn=(e,t,n=!1)=>{const r=Ea.exec(e);return r?r[1]?t(r[1]):n:!1},Pa=e=>e==="position"||e==="percentage",Ma=e=>e==="image"||e==="url",Ia=e=>e==="length"||e==="size"||e==="bg-size",Oa=e=>e==="length",Nf=e=>e==="number",Ta=e=>e==="family-name",$a=e=>e==="number"||e==="weight",La=e=>e==="shadow",Bf=()=>{const e=Me("color"),t=Me("font"),n=Me("text"),r=Me("font-weight"),s=Me("tracking"),i=Me("leading"),a=Me("breakpoint"),o=Me("container"),l=Me("spacing"),c=Me("radius"),u=Me("shadow"),f=Me("inset-shadow"),m=Me("text-shadow"),b=Me("drop-shadow"),I=Me("blur"),A=Me("perspective"),O=Me("aspect"),$=Me("ease"),g=Me("animate"),x=()=>["auto","avoid","all","avoid-page","page","left","right","column"],v=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],C=()=>[...v(),U,q],F=()=>["auto","hidden","clip","visible","scroll"],T=()=>["auto","contain","none"],R=()=>[U,q,l],j=()=>[jt,"full","auto",...R()],re=()=>[bt,"none","subgrid",U,q],ue=()=>["auto",{span:["full",bt,U,q]},bt,U,q],Se=()=>[bt,"auto",U,q],Be=()=>["auto","min","max","fr",U,q],tt=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],qe=()=>["start","end","center","stretch","center-safe","end-safe"],le=()=>["auto",...R()],se=()=>[jt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...R()],Q=()=>[o,jt,"screen","full","dvw","lvw","svw","min","max","fit",...R()],ke=()=>[jt,"screen","full","lh","dvh","lvh","svh","min","max","fit",...R()],H=()=>[e,U,q],Oe=()=>[...v(),Vi,Gi,{position:[U,q]}],de=()=>["no-repeat",{repeat:["","x","y","space","round"]}],at=()=>["auto","cover","contain",Lf,Mf,{size:[U,q]}],Fe=()=>[Xr,wn,Xt],me=()=>["","none","full",c,U,q],oe=()=>["",ie,wn,Xt],z=()=>["solid","dashed","dotted","double"],G=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],P=()=>[ie,Xr,Vi,Gi],Y=()=>["","none",I,U,q],d=()=>["none",ie,U,q],h=()=>["none",ie,U,q],y=()=>[ie,U,q],w=()=>[jt,"full",...R()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ft],breakpoint:[Ft],color:[Fa],container:[Ft],"drop-shadow":[Ft],ease:["in","out","in-out"],font:[Ff],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ft],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ft],shadow:[Ft],spacing:["px",ie],text:[Ft],"text-shadow":[Ft],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",jt,q,U,O]}],container:["container"],"container-type":[{"@container":["","normal","size",U,q]}],"container-named":[Pf],columns:[{columns:[ie,"auto",q,U,o]}],"break-after":[{"break-after":x()}],"break-before":[{"break-before":x()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:C()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:j()}],"inset-x":[{"inset-x":j()}],"inset-y":[{"inset-y":j()}],start:[{"inset-s":j(),start:j()}],end:[{"inset-e":j(),end:j()}],"inset-bs":[{"inset-bs":j()}],"inset-be":[{"inset-be":j()}],top:[{top:j()}],right:[{right:j()}],bottom:[{bottom:j()}],left:[{left:j()}],visibility:["visible","invisible","collapse"],z:[{z:[bt,"auto",U,q]}],basis:[{basis:[jt,"full","auto",o,...R()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ie,jt,"auto","initial","none",q]}],grow:[{grow:["",ie,U,q]}],shrink:[{shrink:["",ie,U,q]}],order:[{order:[bt,"first","last","none",U,q]}],"grid-cols":[{"grid-cols":re()}],"col-start-end":[{col:ue()}],"col-start":[{"col-start":Se()}],"col-end":[{"col-end":Se()}],"grid-rows":[{"grid-rows":re()}],"row-start-end":[{row:ue()}],"row-start":[{"row-start":Se()}],"row-end":[{"row-end":Se()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Be()}],"auto-rows":[{"auto-rows":Be()}],gap:[{gap:R()}],"gap-x":[{"gap-x":R()}],"gap-y":[{"gap-y":R()}],"justify-content":[{justify:[...tt(),"normal"]}],"justify-items":[{"justify-items":[...qe(),"normal"]}],"justify-self":[{"justify-self":["auto",...qe()]}],"align-content":[{content:["normal",...tt()]}],"align-items":[{items:[...qe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...qe(),{baseline:["","last"]}]}],"place-content":[{"place-content":tt()}],"place-items":[{"place-items":[...qe(),"baseline"]}],"place-self":[{"place-self":["auto",...qe()]}],p:[{p:R()}],px:[{px:R()}],py:[{py:R()}],ps:[{ps:R()}],pe:[{pe:R()}],pbs:[{pbs:R()}],pbe:[{pbe:R()}],pt:[{pt:R()}],pr:[{pr:R()}],pb:[{pb:R()}],pl:[{pl:R()}],m:[{m:le()}],mx:[{mx:le()}],my:[{my:le()}],ms:[{ms:le()}],me:[{me:le()}],mbs:[{mbs:le()}],mbe:[{mbe:le()}],mt:[{mt:le()}],mr:[{mr:le()}],mb:[{mb:le()}],ml:[{ml:le()}],"space-x":[{"space-x":R()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":R()}],"space-y-reverse":["space-y-reverse"],size:[{size:se()}],"inline-size":[{inline:["auto",...Q()]}],"min-inline-size":[{"min-inline":["auto",...Q()]}],"max-inline-size":[{"max-inline":["none",...Q()]}],"block-size":[{block:["auto",...ke()]}],"min-block-size":[{"min-block":["auto",...ke()]}],"max-block-size":[{"max-block":["none",...ke()]}],w:[{w:[o,"screen",...se()]}],"min-w":[{"min-w":[o,"screen","none",...se()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[a]},...se()]}],h:[{h:["screen","lh",...se()]}],"min-h":[{"min-h":["screen","lh","none",...se()]}],"max-h":[{"max-h":["screen","lh","none",...se()]}],"font-size":[{text:["base",n,wn,Xt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,jf,If]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Xr,q]}],"font-family":[{font:[$f,Of,t]}],"font-features":[{"font-features":[q]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,U,q]}],"line-clamp":[{"line-clamp":[ie,"none",U,Bi]}],leading:[{leading:["none",i,...R()]}],"list-image":[{"list-image":["none",U,q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",U,q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:H()}],"text-color":[{text:H()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...z(),"wavy"]}],"text-decoration-thickness":[{decoration:[ie,"from-font","auto",U,Xt]}],"text-decoration-color":[{decoration:H()}],"underline-offset":[{"underline-offset":[ie,"auto",U,q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"tab-size":[{tab:[bt,U,q]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",U,q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",U,q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Oe()}],"bg-repeat":[{bg:de()}],"bg-size":[{bg:at()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},bt,U,q],radial:["",U,q],conic:["",bt,U,q]},Df,Tf]}],"bg-color":[{bg:H()}],"gradient-from-pos":[{from:Fe()}],"gradient-via-pos":[{via:Fe()}],"gradient-to-pos":[{to:Fe()}],"gradient-from":[{from:H()}],"gradient-via":[{via:H()}],"gradient-to":[{to:H()}],rounded:[{rounded:me()}],"rounded-s":[{"rounded-s":me()}],"rounded-e":[{"rounded-e":me()}],"rounded-t":[{"rounded-t":me()}],"rounded-r":[{"rounded-r":me()}],"rounded-b":[{"rounded-b":me()}],"rounded-l":[{"rounded-l":me()}],"rounded-ss":[{"rounded-ss":me()}],"rounded-se":[{"rounded-se":me()}],"rounded-ee":[{"rounded-ee":me()}],"rounded-es":[{"rounded-es":me()}],"rounded-tl":[{"rounded-tl":me()}],"rounded-tr":[{"rounded-tr":me()}],"rounded-br":[{"rounded-br":me()}],"rounded-bl":[{"rounded-bl":me()}],"border-w":[{border:oe()}],"border-w-x":[{"border-x":oe()}],"border-w-y":[{"border-y":oe()}],"border-w-s":[{"border-s":oe()}],"border-w-e":[{"border-e":oe()}],"border-w-bs":[{"border-bs":oe()}],"border-w-be":[{"border-be":oe()}],"border-w-t":[{"border-t":oe()}],"border-w-r":[{"border-r":oe()}],"border-w-b":[{"border-b":oe()}],"border-w-l":[{"border-l":oe()}],"divide-x":[{"divide-x":oe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":oe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...z(),"hidden","none"]}],"divide-style":[{divide:[...z(),"hidden","none"]}],"border-color":[{border:H()}],"border-color-x":[{"border-x":H()}],"border-color-y":[{"border-y":H()}],"border-color-s":[{"border-s":H()}],"border-color-e":[{"border-e":H()}],"border-color-bs":[{"border-bs":H()}],"border-color-be":[{"border-be":H()}],"border-color-t":[{"border-t":H()}],"border-color-r":[{"border-r":H()}],"border-color-b":[{"border-b":H()}],"border-color-l":[{"border-l":H()}],"divide-color":[{divide:H()}],"outline-style":[{outline:[...z(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ie,U,q]}],"outline-w":[{outline:["",ie,wn,Xt]}],"outline-color":[{outline:H()}],shadow:[{shadow:["","inner","none",u,Xn,Yn]}],"shadow-color":[{shadow:H()}],"inset-shadow":[{"inset-shadow":["none",f,Xn,Yn]}],"inset-shadow-color":[{"inset-shadow":H()}],"ring-w":[{ring:oe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:H()}],"ring-offset-w":[{"ring-offset":[ie,Xt]}],"ring-offset-color":[{"ring-offset":H()}],"inset-ring-w":[{"inset-ring":oe()}],"inset-ring-color":[{"inset-ring":H()}],"text-shadow":[{"text-shadow":["none",m,Xn,Yn]}],"text-shadow-color":[{"text-shadow":H()}],opacity:[{opacity:[ie,U,q]}],"mix-blend":[{"mix-blend":[...G(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":G()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ie]}],"mask-image-linear-from-pos":[{"mask-linear-from":P()}],"mask-image-linear-to-pos":[{"mask-linear-to":P()}],"mask-image-linear-from-color":[{"mask-linear-from":H()}],"mask-image-linear-to-color":[{"mask-linear-to":H()}],"mask-image-t-from-pos":[{"mask-t-from":P()}],"mask-image-t-to-pos":[{"mask-t-to":P()}],"mask-image-t-from-color":[{"mask-t-from":H()}],"mask-image-t-to-color":[{"mask-t-to":H()}],"mask-image-r-from-pos":[{"mask-r-from":P()}],"mask-image-r-to-pos":[{"mask-r-to":P()}],"mask-image-r-from-color":[{"mask-r-from":H()}],"mask-image-r-to-color":[{"mask-r-to":H()}],"mask-image-b-from-pos":[{"mask-b-from":P()}],"mask-image-b-to-pos":[{"mask-b-to":P()}],"mask-image-b-from-color":[{"mask-b-from":H()}],"mask-image-b-to-color":[{"mask-b-to":H()}],"mask-image-l-from-pos":[{"mask-l-from":P()}],"mask-image-l-to-pos":[{"mask-l-to":P()}],"mask-image-l-from-color":[{"mask-l-from":H()}],"mask-image-l-to-color":[{"mask-l-to":H()}],"mask-image-x-from-pos":[{"mask-x-from":P()}],"mask-image-x-to-pos":[{"mask-x-to":P()}],"mask-image-x-from-color":[{"mask-x-from":H()}],"mask-image-x-to-color":[{"mask-x-to":H()}],"mask-image-y-from-pos":[{"mask-y-from":P()}],"mask-image-y-to-pos":[{"mask-y-to":P()}],"mask-image-y-from-color":[{"mask-y-from":H()}],"mask-image-y-to-color":[{"mask-y-to":H()}],"mask-image-radial":[{"mask-radial":[U,q]}],"mask-image-radial-from-pos":[{"mask-radial-from":P()}],"mask-image-radial-to-pos":[{"mask-radial-to":P()}],"mask-image-radial-from-color":[{"mask-radial-from":H()}],"mask-image-radial-to-color":[{"mask-radial-to":H()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":v()}],"mask-image-conic-pos":[{"mask-conic":[ie]}],"mask-image-conic-from-pos":[{"mask-conic-from":P()}],"mask-image-conic-to-pos":[{"mask-conic-to":P()}],"mask-image-conic-from-color":[{"mask-conic-from":H()}],"mask-image-conic-to-color":[{"mask-conic-to":H()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Oe()}],"mask-repeat":[{mask:de()}],"mask-size":[{mask:at()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",U,q]}],filter:[{filter:["","none",U,q]}],blur:[{blur:Y()}],brightness:[{brightness:[ie,U,q]}],contrast:[{contrast:[ie,U,q]}],"drop-shadow":[{"drop-shadow":["","none",b,Xn,Yn]}],"drop-shadow-color":[{"drop-shadow":H()}],grayscale:[{grayscale:["",ie,U,q]}],"hue-rotate":[{"hue-rotate":[ie,U,q]}],invert:[{invert:["",ie,U,q]}],saturate:[{saturate:[ie,U,q]}],sepia:[{sepia:["",ie,U,q]}],"backdrop-filter":[{"backdrop-filter":["","none",U,q]}],"backdrop-blur":[{"backdrop-blur":Y()}],"backdrop-brightness":[{"backdrop-brightness":[ie,U,q]}],"backdrop-contrast":[{"backdrop-contrast":[ie,U,q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ie,U,q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ie,U,q]}],"backdrop-invert":[{"backdrop-invert":["",ie,U,q]}],"backdrop-opacity":[{"backdrop-opacity":[ie,U,q]}],"backdrop-saturate":[{"backdrop-saturate":[ie,U,q]}],"backdrop-sepia":[{"backdrop-sepia":["",ie,U,q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":R()}],"border-spacing-x":[{"border-spacing-x":R()}],"border-spacing-y":[{"border-spacing-y":R()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",U,q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ie,"initial",U,q]}],ease:[{ease:["linear","initial",$,U,q]}],delay:[{delay:[ie,U,q]}],animate:[{animate:["none",g,U,q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,U,q]}],"perspective-origin":[{"perspective-origin":C()}],rotate:[{rotate:d()}],"rotate-x":[{"rotate-x":d()}],"rotate-y":[{"rotate-y":d()}],"rotate-z":[{"rotate-z":d()}],scale:[{scale:h()}],"scale-x":[{"scale-x":h()}],"scale-y":[{"scale-y":h()}],"scale-z":[{"scale-z":h()}],"scale-3d":["scale-3d"],skew:[{skew:y()}],"skew-x":[{"skew-x":y()}],"skew-y":[{"skew-y":y()}],transform:[{transform:[U,q,"","none","gpu","cpu"]}],"transform-origin":[{origin:C()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:w()}],"translate-x":[{"translate-x":w()}],"translate-y":[{"translate-y":w()}],"translate-z":[{"translate-z":w()}],"translate-none":["translate-none"],zoom:[{zoom:[bt,U,q]}],accent:[{accent:H()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:H()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",U,q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":H()}],"scrollbar-track-color":[{"scrollbar-track":H()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mbs":[{"scroll-mbs":R()}],"scroll-mbe":[{"scroll-mbe":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pbs":[{"scroll-pbs":R()}],"scroll-pbe":[{"scroll-pbe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",U,q]}],fill:[{fill:["none",...H()]}],"stroke-w":[{stroke:[ie,wn,Xt,Bi]}],stroke:[{stroke:["none",...H()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["start","end","right","left"],"inset-y":["inset-bs","inset-be","top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["ps","pe","pr","pl"],py:["pbs","pbe","pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["ms","me","mr","ml"],my:["mbs","mbe","mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-s","border-w-e","border-w-r","border-w-l"],"border-w-y":["border-w-bs","border-w-be","border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-s","border-color-e","border-color-r","border-color-l"],"border-color-y":["border-color-bs","border-color-be","border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-ms","scroll-me","scroll-mr","scroll-ml"],"scroll-my":["scroll-mbs","scroll-mbe","scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-ps","scroll-pe","scroll-pr","scroll-pl"],"scroll-py":["scroll-pbs","scroll-pbe","scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Gf=vf(Bf);function Ne(...e){return Gf(Xd(e))}const Vf=we({__name:"BorderBeam",props:{borderWidth:{default:1.5},size:{default:80},duration:{default:6},colorFrom:{default:"#ffaa40"},colorTo:{default:"#9c40ff"},delay:{default:0},reverse:{type:Boolean,default:!1},borderRadius:{default:16},class:{}},setup(e){const t=e,n=Re(()=>{const r=typeof t.borderRadius=="number"?`${t.borderRadius}px`:t.borderRadius;return{"--size":`${t.size}px`,"--duration":`${t.duration}s`,"--border-width":`${t.borderWidth}px`,"--color-from":t.colorFrom,"--color-to":t.colorTo,"--delay":`-${t.delay}s`,"--direction":t.reverse?"reverse":"normal","--radius":r}});return(r,s)=>(V(),K("div",{style:ot(n.value),class:W(N(Ne)("pointer-events-none absolute inset-0 rounded-[inherit] border-beam-mask",t.class))},[...s[0]||(s[0]=[p("div",{class:"border-beam-element"},null,-1)])],6))}}),Wt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},ws=Wt(Vf,[["__scopeId","data-v-b6b8cf00"]]),Hf={class:"relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-white"},qf=we({__name:"ShimmerButton",props:{shimmerColor:{default:"#38bdf8"},shimmerSize:{default:"0.12em"},shimmerDuration:{default:"2.5s"},borderRadius:{default:"9999px"},class:{}},setup(e){const t=e,n=Re(()=>({"--shimmer-color":t.shimmerColor,"--shimmer-size":t.shimmerSize,"--speed":t.shimmerDuration,"--radius":t.borderRadius}));return(r,s)=>(V(),K("button",{style:ot(n.value),class:W(N(Ne)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white transition-all duration-300 active:scale-95","border border-white/10 [border-radius:var(--radius)]","bg-zinc-900/90 shadow-md hover:shadow-lg hover:shadow-sky-500/20 dark:bg-black/90",t.class))},[s[0]||(s[0]=p("div",{class:"shimmer-spin-container pointer-events-none absolute -inset-[100%] [aspect-ratio:1] [border-radius:inherit]"},[p("div",{class:"shimmer-spin-gradient h-full w-full animate-shimmer-spin"})],-1)),s[1]||(s[1]=p("div",{class:"absolute [inset:var(--shimmer-size)] [border-radius:inherit] bg-zinc-950/95 transition-colors duration-300 group-hover:bg-zinc-900/95"},null,-1)),p("span",Hf,[zt(r.$slots,"default",{},void 0,!0)])],6))}}),Fn=Wt(qf,[["__scopeId","data-v-6b251134"]]),Uf=we({__name:"ShinyText",props:{text:{},duration:{default:2.5},variant:{default:"white"},class:{}},setup(e){const t=e,n=Re(()=>({"--duration":`${t.duration}s`}));return(r,s)=>(V(),K("span",{style:ot(n.value),class:W(N(Ne)("shiny-text-root inline-block font-bold bg-clip-text text-transparent",t.variant==="white"&&"shiny-variant-white",t.variant==="cyber"&&"shiny-variant-cyber",t.class))},[zt(r.$slots,"default",{},()=>[Te(Ae(t.text),1)],!0)],6))}}),Pn=Wt(Uf,[["__scopeId","data-v-31108f82"]]),Wf=we({__name:"RetroGrid",props:{angle:{default:65},cellSize:{default:60},opacity:{default:.5},lightLineColor:{default:"#94a3b8"},darkLineColor:{default:"#38bdf8"},mask:{type:Boolean,default:!0},maskClass:{},class:{}},setup(e){const t=e,n=Re(()=>({"--grid-angle":`${t.angle}deg`,"--cell-size":`${t.cellSize}px`,"--opacity":t.opacity.toString(),"--light-line":t.lightLineColor,"--dark-line":t.darkLineColor}));return(r,s)=>(V(),K("div",{style:ot(n.value),class:W(N(Ne)("pointer-events-none absolute h-full w-full overflow-hidden opacity-[var(--opacity)] [perspective:200px]",t.class))},[p("div",{class:W(N(Ne)("absolute inset-0 [transform:rotateX(var(--grid-angle))]",t.mask&&"retro-grid-horizon-mask"))},[...s[0]||(s[0]=[p("div",{class:"retro-grid-plane animate-retro-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]"},null,-1)])],2)],6))}}),ks=Wt(Wf,[["__scopeId","data-v-2d20ad14"]]),Da=we({__name:"BentoGrid",props:{class:{}},setup(e){const t=e;return(n,r)=>(V(),K("div",{class:W(N(Ne)("grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",t.class))},[zt(n.$slots,"default")],2))}}),Kf={class:"relative z-0 h-44 w-full overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"},Yf={class:"relative z-10 flex flex-col gap-2 pt-4"},Xf={class:"flex items-center gap-2.5"},Zf={class:"text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},Jf={class:"text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"},Qf={key:0,class:"mt-3 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400"},ep=we({__name:"BentoCard",props:{name:{},description:{},class:{},href:{},cta:{},spotlightRadius:{default:300}},setup(e){const t=e,n=be(0),r=be(0),s=be(!1);function i(a){const o=a.currentTarget.getBoundingClientRect();n.value=a.clientX-o.left,r.value=a.clientY-o.top}return(a,o)=>{const l=Gn("router-link");return V(),K("div",{class:W(N(Ne)("group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300","border border-zinc-200 bg-white/70 shadow-sm backdrop-blur-md hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10",t.class)),onMousemove:i,onMouseenter:o[0]||(o[0]=c=>s.value=!0),onMouseleave:o[1]||(o[1]=c=>s.value=!1)},[p("div",{class:"pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",style:ot({background:`radial-gradient(${t.spotlightRadius}px circle at ${n.value}px ${r.value}px, var(--spotlight-color), transparent 80%)`})},null,4),p("div",Kf,[zt(a.$slots,"background",{},void 0,!0)]),p("div",Yf,[p("div",Xf,[zt(a.$slots,"icon",{},void 0,!0),p("h3",Zf,Ae(t.name),1)]),p("p",Jf,Ae(t.description),1),t.cta||a.$slots.cta?(V(),K("div",Qf,[zt(a.$slots,"cta",{},()=>[t.href?(V(),it(l,{key:0,to:t.href,class:"inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"},{default:J(()=>[Te(Ae(t.cta)+" ",1),o[2]||(o[2]=p("span",{"aria-hidden":"true"},"→",-1))]),_:1},8,["to"])):pn("",!0)],!0)])):pn("",!0)])],34)}}}),We=Wt(ep,[["__scopeId","data-v-f7ebca2d"]]),tp=we({__name:"Marquee",props:{duration:{default:30},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},repeat:{default:4},class:{}},setup(e){const t=e,n=Re(()=>({"--duration":`${t.duration}s`}));return(r,s)=>(V(),K("div",{style:ot(n.value),class:W(N(Ne)("group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",t.vertical?"flex-col":"flex-row",t.class))},[(V(!0),K(_e,null,Tt(t.repeat,i=>(V(),K("div",{key:i,class:W(N(Ne)("flex shrink-0 justify-around [gap:var(--gap)]",t.vertical?"flex-col animate-marquee-vertical":"flex-row animate-marquee",t.pauseOnHover&&"group-hover:[animation-play-state:paused]",t.reverse&&"[animation-direction:reverse]"))},[zt(r.$slots,"default",{},void 0,!0)],2))),128))],6))}}),nr=Wt(tp,[["__scopeId","data-v-2ea856f7"]]),np={"aria-hidden":"true",class:"pointer-events-none h-full w-full fill-neutral-400/60 dark:fill-neutral-600/60 transition-colors"},rp=["id","width","height","x","y"],sp=["cx","cy","r"],ip=["fill"],ja=we({__name:"DotPattern",props:{width:{default:20},height:{default:20},x:{default:0},y:{default:0},cx:{default:1},cy:{default:1},cr:{default:1},glow:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=Mo(),r=be(-9999),s=be(-9999);function i(o){if(!t.glow)return;const l=o.currentTarget.getBoundingClientRect();r.value=o.clientX-l.left,s.value=o.clientY-l.top}function a(){r.value=-9999,s.value=-9999}return(o,l)=>(V(),K("div",{class:W(N(Ne)("absolute inset-0 h-full w-full overflow-hidden",t.glow?"pointer-events-auto":"pointer-events-none",t.class)),onMousemove:i,onMouseleave:a},[(V(),K("svg",np,[p("defs",null,[p("pattern",{id:N(n),width:t.width,height:t.height,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:t.x,y:t.y},[p("circle",{cx:t.cx,cy:t.cy,r:t.cr},null,8,sp)],8,rp)]),p("rect",{width:"100%",height:"100%",fill:`url(#${N(n)})`},null,8,ip)])),t.glow?(V(),K("div",{key:0,class:"absolute inset-0 transition-opacity duration-300",style:ot({background:`radial-gradient(200px circle at ${r.value}px ${s.value}px, rgba(59, 130, 246, 0.15), transparent 80%)`})},null,4)):pn("",!0)],34))}}),op={class:"relative z-10 h-full w-full"},Na=we({__name:"InteractiveParticles",props:{quantity:{default:50},speed:{default:.6},maxRadius:{default:2},mouseRadius:{default:100},color:{},connectLines:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=be(null);let r=null,s=[];const i={x:-9999,y:-9999};function a(f,m){s=[];for(let b=0;b<t.quantity;b++)s.push({x:Math.random()*f,y:Math.random()*m,vx:(Math.random()-.5)*t.speed,vy:(Math.random()-.5)*t.speed,size:Math.random()*t.maxRadius+.8,baseAlpha:Math.random()*.5+.2,alpha:Math.random()*.5+.2})}function o(){const f=n.value;if(!f)return;const m=window.devicePixelRatio||1,b=f.getBoundingClientRect();f.width=b.width*m,f.height=b.height*m;const I=f.getContext("2d");I&&I.scale(m,m),a(b.width,b.height)}function l(f){const m=n.value;if(!m)return;const b=m.getBoundingClientRect();i.x=f.clientX-b.left,i.y=f.clientY-b.top}function c(){i.x=-9999,i.y=-9999}function u(){const f=n.value;if(!f)return;const m=f.getContext("2d");if(!m)return;const b=f.getBoundingClientRect(),I=b.width,A=b.height;m.clearRect(0,0,I,A);const $=document.documentElement.classList.contains("dark")?"255, 255, 255":"59, 130, 246",g=t.color||$;for(let x=0;x<s.length;x++){const v=s[x];v.x+=v.vx,v.y+=v.vy,(v.x<0||v.x>I)&&(v.vx*=-1),(v.y<0||v.y>A)&&(v.vy*=-1);const C=i.x-v.x,F=i.y-v.y,T=Math.sqrt(C*C+F*F);if(T<t.mouseRadius){const R=(t.mouseRadius-T)/t.mouseRadius;v.x-=C/T*R*2,v.y-=F/T*R*2,v.alpha=Math.min(v.baseAlpha+.4,.9)}else v.alpha=v.baseAlpha;if(m.beginPath(),m.arc(v.x,v.y,v.size,0,Math.PI*2),m.fillStyle=g.startsWith("#")?g:`rgba(${g}, ${v.alpha})`,m.fill(),t.connectLines)for(let R=x+1;R<s.length;R++){const j=s[R],re=Math.hypot(v.x-j.x,v.y-j.y);if(re<80){m.beginPath(),m.moveTo(v.x,v.y),m.lineTo(j.x,j.y);const ue=(1-re/80)*.15;m.strokeStyle=`rgba(${$}, ${ue})`,m.lineWidth=.6,m.stroke()}}}r=requestAnimationFrame(u)}return nn(()=>{o(),window.addEventListener("resize",o),u()}),rn(()=>{window.removeEventListener("resize",o),r!==null&&cancelAnimationFrame(r)}),Ht(()=>t.quantity,()=>{const f=n.value;if(f){const m=f.getBoundingClientRect();a(m.width,m.height)}}),(f,m)=>(V(),K("div",{class:W(N(Ne)("relative h-full w-full overflow-hidden",t.class)),onMousemove:l,onMouseleave:c},[p("canvas",{ref_key:"canvasRef",ref:n,class:"pointer-events-none absolute inset-0 h-full w-full"},null,512),p("div",op,[zt(f.$slots,"default")])],34))}}),ap=we({__name:"Meteors",props:{number:{default:20},angle:{default:215},minDelay:{default:.2},maxDelay:{default:1.2},minDuration:{default:2},maxDuration:{default:8},class:{}},setup(e){const t=e,n=Re(()=>Array.from({length:t.number}).map(()=>{const r=Math.floor(Math.random()*100),s=Math.floor(Math.random()*100),i=(Math.random()*(t.maxDelay-t.minDelay)+t.minDelay).toFixed(2),a=(Math.random()*(t.maxDuration-t.minDuration)+t.minDuration).toFixed(2);return{top:`${r}%`,left:`${s}%`,animationDelay:`${i}s`,animationDuration:`${a}s`}}));return(r,s)=>(V(),K("div",{class:W(N(Ne)("pointer-events-none absolute inset-0 overflow-hidden",t.class))},[(V(!0),K(_e,null,Tt(n.value,(i,a)=>(V(),K("span",{key:a,style:ot({...i,"--angle":`${t.angle}deg`}),class:"animate-meteor absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[var(--angle)] dark:bg-sky-400 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-slate-500 before:to-transparent dark:before:from-sky-400"},null,4))),128))],2))}}),Ba=Wt(ap,[["__scopeId","data-v-7d09918c"]]),lp=we({__name:"Ripple",props:{mainCircleSize:{default:210},mainCircleOpacity:{default:.24},numCircles:{default:8},class:{}},setup(e){const t=e;return(n,r)=>(V(),K("div",{class:W(N(Ne)("pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",t.class))},[(V(!0),K(_e,null,Tt(t.numCircles,s=>(V(),K("div",{key:s,style:ot({width:`${t.mainCircleSize+(s-1)*70}px`,height:`${t.mainCircleSize+(s-1)*70}px`,opacity:Math.max(.04,t.mainCircleOpacity-(s-1)*.025),animationDelay:`${(s-1)*.06}s`,borderStyle:s===t.numCircles?"dashed":"solid",borderWidth:"1px"}),class:"animate-ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-500/40 bg-blue-500/5 shadow-[0_0_16px_rgba(59,130,246,0.1)] dark:border-sky-400/30 dark:bg-sky-400/5"},null,4))),128))],2))}}),Ga=Wt(lp,[["__scopeId","data-v-98c398f7"]]),rr=we({__name:"NumberTicker",props:{value:{},direction:{default:"up"},duration:{default:2},delay:{default:0},decimalPlaces:{default:0},class:{}},setup(e){const t=e,n=be(null),r=be("0");let s=null,i=null,a=!1;function o(u){return u===1?1:1-Math.pow(2,-10*u)}function l(u){return new Intl.NumberFormat("en-US",{minimumFractionDigits:t.decimalPlaces,maximumFractionDigits:t.decimalPlaces}).format(u)}function c(){if(a)return;a=!0;const u=t.direction==="down"?t.value:0,f=t.direction==="down"?0:t.value,m=t.duration*1e3;let b=null;setTimeout(()=>{function I(A){b||(b=A);const O=A-b,$=Math.min(O/m,1),g=o($),x=u+(f-u)*g;r.value=l(x),$<1?s=requestAnimationFrame(I):r.value=l(f)}s=requestAnimationFrame(I)},t.delay*1e3)}return nn(()=>{r.value=l(t.direction==="down"?t.value:0),n.value?(i=new IntersectionObserver(u=>{u[0].isIntersecting&&(c(),i&&i.disconnect())},{threshold:.1}),i.observe(n.value)):c()}),rn(()=>{s&&cancelAnimationFrame(s),i&&i.disconnect()}),Ht(()=>t.value,()=>{a=!1,c()}),(u,f)=>(V(),K("span",{ref_key:"spanRef",ref:n,class:W(N(Ne)("inline-block tabular-nums tracking-wider",t.class))},Ae(r.value),3))}}),cp=["width","height","viewBox"],up=["d","stroke","stroke-width","stroke-opacity"],dp=["d","stroke","stroke-width"],fp=["id"],pp=["stop-color"],mp=["stop-color"],hp=["stop-color"],gp=["from","to","dur","begin"],bp=["from","to","dur","begin"],gr=we({__name:"AnimatedBeam",props:{containerRef:{},fromRef:{},toRef:{},curvature:{default:0},reverse:{type:Boolean,default:!1},pathColor:{default:"#94a3b8"},pathWidth:{default:2},pathOpacity:{default:.2},gradientStartColor:{default:"#38bdf8"},gradientStopColor:{default:"#6366f1"},duration:{default:3},delay:{default:0},startXOffset:{default:0},startYOffset:{default:0},endXOffset:{default:0},endYOffset:{default:0},class:{}},setup(e){const t=e,n=Mo(),r=be(""),s=be({width:0,height:0});function i(l){return l?"value"in l?l.value:l instanceof HTMLElement?l:null:null}function a(){const l=i(t.containerRef),c=i(t.fromRef),u=i(t.toRef);if(!l||!c||!u)return;const f=l.getBoundingClientRect(),m=c.getBoundingClientRect(),b=u.getBoundingClientRect();s.value={width:f.width,height:f.height};const I=m.left-f.left+m.width/2+t.startXOffset,A=m.top-f.top+m.height/2+t.startYOffset,O=b.left-f.left+b.width/2+t.endXOffset,$=b.top-f.top+b.height/2+t.endYOffset,g=(I+O)/2,x=(A+$)/2,v=g,C=x-t.curvature;t.curvature===0?r.value=`M ${I},${A} L ${O},${$}`:r.value=`M ${I},${A} Q ${v},${C} ${O},${$}`}let o=null;return nn(()=>{a(),window.addEventListener("resize",a);const l=i(t.containerRef);l&&(o=new ResizeObserver(()=>a()),o.observe(l))}),rn(()=>{window.removeEventListener("resize",a),o&&o.disconnect()}),Ht([()=>i(t.containerRef),()=>i(t.fromRef),()=>i(t.toRef),()=>t.curvature],()=>{a()}),(l,c)=>(V(),K("svg",{width:s.value.width,height:s.value.height,viewBox:`0 0 ${s.value.width} ${s.value.height}`,class:W(N(Ne)("pointer-events-none absolute inset-0 h-full w-full select-none overflow-visible",t.class))},[p("path",{d:r.value,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-opacity":t.pathOpacity,"stroke-linecap":"round"},null,8,up),p("path",{d:r.value,fill:"none",stroke:`url(#beam-gradient-${N(n)})`,"stroke-width":t.pathWidth,"stroke-linecap":"round"},null,8,dp),p("defs",null,[p("linearGradient",{id:`beam-gradient-${N(n)}`,gradientUnits:"userSpaceOnUse"},[p("stop",{offset:"0%","stop-color":t.gradientStartColor,"stop-opacity":"0"},null,8,pp),p("stop",{offset:"50%","stop-color":t.gradientStartColor,"stop-opacity":"1"},null,8,mp),p("stop",{offset:"100%","stop-color":t.gradientStopColor,"stop-opacity":"0"},null,8,hp),p("animate",{attributeName:"x1",from:t.reverse?"100%":"-50%",to:t.reverse?"-50%":"100%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,gp),p("animate",{attributeName:"x2",from:t.reverse?"150%":"0%",to:t.reverse?"0%":"150%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,bp)],8,fp)])],10,cp))}}),xp={class:"relative z-50 -translate-y-32 flex flex-col items-center px-5 text-center"},Va=we({__name:"LampEffect",props:{glowColor:{default:"#06b6d4"},class:{}},setup(e){const t=e;return(n,r)=>(V(),K("div",{class:W(N(Ne)("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-2xl z-0",t.class))},[r[0]||(r[0]=ds(`<div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"><div class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div><div class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"></div></div><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"><div class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"></div><div class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div></div><div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl"></div><div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div><div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div><div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></div><div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div><div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-950"></div></div>`,1)),p("div",xp,[zt(n.$slots,"default")])],2))}}),Ha=we({__name:"FlickeringGrid",props:{squareSize:{default:4},gridGap:{default:4},flickerChance:{default:.3},color:{},maxOpacity:{default:.3},class:{}},setup(e){const t=e,n=be(null),r=be(null);let s=null,i=new Float32Array(0),a=0,o=0;function l(f,m){a=Math.floor(f/(t.squareSize+t.gridGap)),o=Math.floor(m/(t.squareSize+t.gridGap)),i=new Float32Array(a*o);for(let b=0;b<i.length;b++)i[b]=Math.random()*t.maxOpacity}function c(){const f=n.value,m=r.value;if(!f||!m)return;const b=window.devicePixelRatio||1,I=f.getBoundingClientRect();m.width=I.width*b,m.height=I.height*b;const A=m.getContext("2d");A&&A.scale(b,b),l(I.width,I.height)}function u(){const f=r.value,m=n.value;if(!f||!m)return;const b=f.getContext("2d");if(!b)return;const I=m.getBoundingClientRect();b.clearRect(0,0,I.width,I.height);const O=document.documentElement.classList.contains("dark")?"148, 163, 184":"100, 116, 139",$=t.color||O;for(let g=0;g<o;g++)for(let x=0;x<a;x++){const v=g*a+x;Math.random()<t.flickerChance&&(i[v]=Math.random()*t.maxOpacity);const C=i[v];b.fillStyle=$.startsWith("#")?$:`rgba(${$}, ${C})`;const F=x*(t.squareSize+t.gridGap),T=g*(t.squareSize+t.gridGap);b.fillRect(F,T,t.squareSize,t.squareSize)}s=requestAnimationFrame(u)}return nn(()=>{c(),window.addEventListener("resize",c),u()}),rn(()=>{window.removeEventListener("resize",c),s&&cancelAnimationFrame(s)}),Ht([()=>t.squareSize,()=>t.gridGap],()=>{c()}),(f,m)=>(V(),K("div",{ref_key:"containerRef",ref:n,class:W(N(Ne)("pointer-events-none relative h-full w-full overflow-hidden",t.class))},[p("canvas",{ref_key:"canvasRef",ref:r,class:"absolute inset-0 h-full w-full"},null,512)],2))}}),vp={class:"relative overflow-hidden"},yp={class:"relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center overflow-hidden"},wp={class:"relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200"},kp={class:"relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"},_p={class:"relative z-10 mt-12 w-full max-w-2xl text-left"},zp={class:"relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/80"},Ap={class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"},Cp={class:"border-y border-zinc-200/80 bg-zinc-50/50 py-6 dark:border-zinc-800/80 dark:bg-zinc-950/40"},Sp={class:"mx-auto max-w-7xl px-4 text-center"},Rp={id:"features",class:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"},Ep={class:"relative h-full w-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50/40 to-transparent dark:from-zinc-900/60 dark:to-transparent"},Fp={class:"relative flex h-32 w-56 flex-col justify-between rounded-xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-md backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95"},Pp={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-50/50 to-blue-50/20 border border-blue-100/50 dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800"},Mp={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50/30 to-white dark:from-zinc-950 dark:to-zinc-900"},Ip={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-50/30 to-transparent dark:from-zinc-900/50 dark:to-transparent"},Op={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"},Tp={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50"},$p={class:"relative h-full w-full flex flex-col justify-center overflow-hidden rounded-xl p-3 bg-zinc-50/60 dark:bg-zinc-900/40"},Lp={class:"relative h-full w-full overflow-hidden rounded-xl bg-slate-950 p-4"},Dp={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center"},jp={class:"relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40"},Np={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent flex flex-col items-center justify-center p-4"},Bp={class:"text-4xl font-black text-emerald-600 dark:text-emerald-400"},Gp={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4"},Vp={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"},Hp={class:"mt-8 flex items-center justify-center gap-4"},qp={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-20 dark:border-zinc-800/80 dark:bg-zinc-950/40"},Up={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Wp={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},Kp={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},Yp={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400"},Xp={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},Zp={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400"},Jp={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},Qp={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400"},em=we({__name:"HomeView",setup(e){const t=be(null),n=be(null),r=be(null),s=be(null),i=["Vue 3.5+","TypeScript","Tailwind CSS","Composition API","Vite 6","HTML5 Canvas","Web Animations API","Zero-Config"],a=be(!1);function o(){navigator.clipboard.writeText("npm i @vueuse/core clsx tailwind-merge"),a.value=!0,setTimeout(()=>{a.value=!1},2e3)}return(l,c)=>{const u=Gn("router-link");return V(),K("div",vp,[p("section",yp,[k(ks,{angle:65,opacity:.45}),p("div",wp,[k(N(Qe),{class:"h-3.5 w-3.5 text-blue-500"}),k(Pn,{text:"Vue 3 的动效原子代码库现已上线"}),c[0]||(c[0]=p("span",{class:"rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] text-blue-600 dark:text-blue-400"}," v1.0 ",-1))]),c[5]||(c[5]=p("h1",{class:"relative z-10 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight"},[Te(" 专属于 Vue 3 的 "),p("span",{class:"block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400"}," 高阶动效原子库 ")],-1)),c[6]||(c[6]=p("p",{class:"relative z-10 mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400"},[Te(" 不再重复造普通表单，全面对标 Magic UI 与 Aceternity UI。"),p("br",{class:"hidden sm:inline"}),Te(" 面向 "),p("strong",null,"AI 官网、SaaS 营销页、酷炫个人主页"),Te("，提供 60fps 单文件即用的动效积木。 ")],-1)),p("div",kp,[k(u,{to:"/docs/border-beam"},{default:J(()=>[k(Fn,{"shimmer-color":"#60a5fa",class:"h-12 px-8 text-base"},{default:J(()=>[c[1]||(c[1]=p("span",null,"立即浏览组件",-1)),k(N(ps),{class:"h-4 w-4"})]),_:1})]),_:1}),p("button",{type:"button",class:"inline-flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-800",onClick:o},[a.value?(V(),it(N(la),{key:0,class:"h-4 w-4 text-emerald-500"})):(V(),it(N(ms),{key:1,class:"h-4 w-4 text-zinc-400"})),p("span",null,Ae(a.value?"已复制依赖指令":"复制基础依赖指令"),1)])]),p("div",_p,[p("div",zp,[k(ws,{size:90,duration:6,"color-from":"#38bdf8","color-to":"#a855f7","border-width":2,"border-radius":16}),c[4]||(c[4]=ds('<div class="mb-4 flex items-center justify-between border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60"><div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-rose-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span><span class="ml-2 font-mono text-xs text-zinc-400">components/BorderBeam.vue</span></div><div class="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Zero-Config / 粘贴即跑</span></div></div>',1)),p("div",Ap,[c[3]||(c[3]=ds('<div class="space-y-1 text-zinc-600 dark:text-zinc-300"><p><span class="text-purple-500">&lt;template&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;div</span> <span class="text-amber-500">class=</span><span class="text-emerald-500">&quot;relative rounded-2xl&quot;</span><span class="text-blue-500">&gt;</span></p><p class="pl-8"><span class="text-blue-500">&lt;BorderBeam</span> <span class="text-amber-500">:duration=</span><span class="text-emerald-500">&quot;5&quot;</span> <span class="text-amber-500">:border-width=</span><span class="text-emerald-500">&quot;2&quot;</span> <span class="text-blue-500">/&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;/div&gt;</span></p><p><span class="text-purple-500">&lt;/template&gt;</span></p></div>',1)),k(u,{to:"/docs/border-beam",class:"shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"},{default:J(()=>[...c[2]||(c[2]=[Te(" 浏览全部 8 款动效 → ",-1)])]),_:1})])])])]),p("section",Cp,[p("div",Sp,[c[8]||(c[8]=p("p",{class:"mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase"}," 原生融合的技术栈与动效标准 ",-1)),k(nr,{duration:25,"pause-on-hover":!0},{default:J(()=>[(V(),K(_e,null,Tt(i,f=>p("div",{key:f,class:"flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-5 py-2 text-xs font-bold text-zinc-700 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300"},[c[7]||(c[7]=p("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),p("span",null,Ae(f),1)])),64))]),_:1})])]),p("section",Rp,[c[25]||(c[25]=p("div",{class:"text-center max-w-3xl mx-auto mb-16 space-y-4"},[p("h2",{class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"}," 全面对标顶流 · 14 款高阶动效全装配 "),p("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 每一个组件都经过精心打磨，在移动端与桌面端保持 60fps 满帧性能，全部开箱即用，支持 Clean Light 与 Deep Dark 双模自适应。 ")],-1)),k(Da,null,{default:J(()=>[k(We,{name:"Border Beam",description:"现代 CSS 路径动画，高光激光沿圆角边框飞速流转，AI 推理与核心 VIP 的视觉焦点",cta:"查看详情与代码",href:"/docs/border-beam"},{icon:J(()=>[k(N(Qe),{class:"h-5 w-5 text-sky-500"})]),background:J(()=>[p("div",Ep,[p("div",Fp,[k(ws,{size:65,duration:3.5,"color-from":"#06b6d4","color-to":"#6366f1","border-width":2,"border-radius":12}),c[9]||(c[9]=p("div",{class:"flex items-center justify-between"},[p("div",{class:"flex items-center gap-2"},[p("span",{class:"relative flex h-2 w-2"},[p("span",{class:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),p("span",{class:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]),p("span",{class:"text-xs font-bold text-zinc-800 dark:text-zinc-200"},"AI 推理状态")]),p("span",{class:"rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-sky-600 dark:text-sky-400"},"360° 流动")],-1)),c[10]||(c[10]=p("div",{class:"space-y-1.5"},[p("div",{class:"h-2 w-4/5 rounded-full bg-zinc-200 dark:bg-zinc-700"}),p("div",{class:"h-2 w-3/5 rounded-full bg-gradient-to-r from-sky-500/40 to-indigo-500/40"})],-1))])])]),_:1}),k(We,{name:"Interactive Particles",description:"原生 Canvas 2D 粒子引擎，支持鼠标悬浮动态引力排斥、微线互联与 60fps 满帧性能",cta:"查看详情与代码",href:"/docs/interactive-particles"},{icon:J(()=>[k(N(tr),{class:"h-5 w-5 text-amber-500"})]),background:J(()=>[p("div",Pp,[k(Na,{quantity:38,speed:.75,"mouse-radius":85,"connect-lines":!0,class:"absolute inset-0 h-full w-full"}),c[11]||(c[11]=p("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[p("div",{class:"flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1 text-xs font-mono font-medium text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900/60 dark:bg-zinc-900/80 dark:text-blue-400"},[p("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"}),p("span",null,"悬浮鼠标即刻磁吸交互")])],-1))])]),_:1}),k(We,{name:"Retro Grid",description:"3D 倾斜无限延展赛博网格，原生区分明暗模式线条色彩，渲染极具科技纵深感的背景",cta:"查看详情与代码",href:"/docs/retro-grid"},{icon:J(()=>[k(N(er),{class:"h-5 w-5 text-indigo-500"})]),background:J(()=>[p("div",Mp,[k(ks,{angle:65,opacity:.85,"cell-size":34,"light-line-color":"#6366f1","dark-line-color":"#38bdf8"}),c[12]||(c[12]=p("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[p("span",{class:"rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-xs backdrop-blur-md dark:border-indigo-900/80 dark:bg-zinc-900/90 dark:text-indigo-400"}," 3D 空间动态透视 ")],-1))])]),_:1}),k(We,{name:"Shimmer Button",description:"360° 旋转锥形流光高光外圈，适配核心 CTA 与付费引导，鼠标悬停即刻聚光",cta:"查看详情与代码",href:"/docs/shimmer-button"},{icon:J(()=>[k(N(Qe),{class:"h-5 w-5 text-pink-500"})]),background:J(()=>[p("div",Ip,[k(Fn,{"shimmer-color":"#ec4899","shimmer-duration":"2.4s",class:"shadow-lg"},{default:J(()=>[k(N(Qe),{class:"h-4 w-4 text-pink-400"}),c[13]||(c[13]=p("span",null,"360° 旋转光晕按钮",-1))]),_:1}),c[14]||(c[14]=p("span",{class:"mt-3 text-[11px] font-mono text-zinc-400"},"悬停查看高光边缘旋转",-1))])]),_:1}),k(We,{name:"Shiny Text",description:"金属质感微光划过文字，2.5s 线性平滑连续循环，高亮 Hero 标题与特色特性",cta:"查看详情与代码",href:"/docs/shiny-text"},{icon:J(()=>[k(N(Qe),{class:"h-5 w-5 text-amber-500"})]),background:J(()=>[p("div",Op,[c[15]||(c[15]=p("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"},null,-1)),k(Pn,{text:"✨ Metallic Shiny Sheen",class:"relative z-10 text-xl font-black tracking-tight",speed:2.2}),c[16]||(c[16]=p("p",{class:"relative z-10 mt-2 text-xs font-mono text-zinc-400"},"高对比连续金属质感流动",-1))])]),_:1}),k(We,{name:"Dot Pattern",description:"极简矢量波点底纹，支持鼠标实时光晕跟随聚光灯，轻量零性能损耗",cta:"查看详情与代码",href:"/docs/dot-pattern"},{icon:J(()=>[k(N(wu),{class:"h-5 w-5 text-emerald-500"})]),background:J(()=>[p("div",Tp,[k(ja,{width:16,height:16,cr:1.2,glow:!0}),c[17]||(c[17]=p("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[p("span",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}," 移动鼠标点亮光晕 ")],-1))])]),_:1}),k(We,{name:"Marquee",description:"纯 CSS 硬件加速无限无缝滚动跑马灯，支持鼠标悬浮暂停、反向循环与变速",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/marquee"},{icon:J(()=>[k(N(vu),{class:"h-5 w-5 text-blue-500"})]),background:J(()=>[p("div",$p,[k(nr,{duration:16,"pause-on-hover":!0},{default:J(()=>[(V(),K(_e,null,Tt(["GPT-4o","Claude 3.5","DeepSeek-V3","Llama 3.3","Gemini 1.5"],f=>p("div",{key:f,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[c[18]||(c[18]=p("span",{class:"h-1.5 w-1.5 rounded-full bg-emerald-500"},null,-1)),p("span",null,Ae(f),1)])),64))]),_:1}),k(nr,{duration:20,reverse:!0,"pause-on-hover":!0,class:"mt-2.5"},{default:J(()=>[(V(),K(_e,null,Tt(["Vue 3.5","TypeScript","Tailwind CSS","Zero-Config","Canvas 2D"],f=>p("div",{key:f,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[c[19]||(c[19]=p("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),p("span",null,Ae(f),1)])),64))]),_:1})])]),_:1}),k(We,{name:"Bento Grid",description:"现代 SaaS 模块化栅格系统，卡片集成鼠标跟随 Spotlight 径向聚光灯流光",cta:"查看详情与代码",href:"/docs/bento-grid"},{icon:J(()=>[k(N(er),{class:"h-5 w-5 text-purple-500"})]),background:J(()=>[...c[20]||(c[20]=[p("div",{class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent"},[p("div",{class:"grid grid-cols-2 gap-2 w-full max-w-[200px]"},[p("div",{class:"h-12 rounded-lg border border-purple-300/40 bg-purple-500/10 dark:border-purple-500/30 dark:bg-purple-500/20 flex items-center justify-center text-[10px] font-mono text-purple-600 dark:text-purple-300"}," Col 1 "),p("div",{class:"h-12 rounded-lg border border-blue-300/40 bg-blue-500/10 dark:border-blue-500/30 dark:bg-blue-500/20 flex items-center justify-center text-[10px] font-mono text-blue-600 dark:text-blue-300"}," Col 2 "),p("div",{class:"col-span-2 h-10 rounded-lg border border-indigo-300/40 bg-indigo-500/10 dark:border-indigo-500/30 dark:bg-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-600 dark:text-indigo-300"}," Span 2 · 动态聚光灯 ")])],-1)])]),_:1}),k(We,{name:"Meteors",description:"纯 CSS 赛博流星雨划过，带 50px 渐变光尾与随机延迟，暗黑科技卡片与首屏氛围杀器",cta:"查看详情与代码",href:"/docs/meteors"},{icon:J(()=>[k(N(Qe),{class:"h-5 w-5 text-sky-400"})]),background:J(()=>[p("div",Lp,[k(Ba,{number:20}),c[21]||(c[21]=p("div",{class:"flex h-full flex-col justify-end"},[p("span",{class:"text-xs font-mono text-sky-400 font-bold"},"215° 斜掠流星轨迹")],-1))])]),_:1}),k(We,{name:"Ripple",description:"由中心向外周循环脉冲扩散的多层同心圆涟漪，适配 AI 语音拾音、雷达声呐与核心头像高亮",cta:"查看详情与代码",href:"/docs/ripple"},{icon:J(()=>[k(N(hs),{class:"h-5 w-5 text-blue-500"})]),background:J(()=>[p("div",Dp,[k(Ga,{"main-circle-size":110,"num-circles":6}),p("div",jp,[k(N(hs),{class:"h-6 w-6"})])])]),_:1}),k(We,{name:"Number Ticker",description:"采用 easeOutExpo 缓动曲线的平滑数字翻牌器，进入视口自动起跑，SaaS 核心关键业务指标必备",cta:"查看详情与代码",href:"/docs/number-ticker"},{icon:J(()=>[k(N(aa),{class:"h-5 w-5 text-emerald-500"})]),background:J(()=>[p("div",Np,[p("div",Bp,[k(rr,{value:99.99,"decimal-places":2}),c[22]||(c[22]=Te("% ",-1))]),c[23]||(c[23]=p("p",{class:"mt-2 text-xs font-mono text-zinc-500"},"SLA 生产高可用性指标",-1))])]),_:1}),k(We,{name:"Animated Beam",description:"Magic UI 标志性连线动效，在多个 DOM 节点间实时计算贝塞尔曲线，驱动 SVG 能量光球脉冲流动",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/animated-beam"},{icon:J(()=>[k(N(tr),{class:"h-5 w-5 text-indigo-500"})]),background:J(()=>[p("div",{ref_key:"homeBeamContainer",ref:t,class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 flex items-center justify-between px-8"},[p("div",{ref_key:"homeBeamUser",ref:n,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-blue-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-blue-400"},[k(N(ua),{class:"h-5 w-5"})],512),p("div",{ref_key:"homeBeamAi",ref:r,class:"z-10 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/40"},[k(N(Qe),{class:"h-6 w-6"})],512),p("div",{ref_key:"homeBeamDb",ref:s,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400"},[k(N(ca),{class:"h-5 w-5"})],512),k(gr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.2},null,8,["container-ref","from-ref","to-ref"]),k(gr,{"container-ref":t.value,"from-ref":r.value,"to-ref":s.value,duration:2.2,delay:.5},null,8,["container-ref","from-ref","to-ref"])],512)]),_:1}),k(We,{name:"Flickering Grid",description:"Canvas 2D 原生微闪烁网格，每个小方格独立呼吸微光，营造赛博黑客帝国与智能矩阵氛围",cta:"查看详情与代码",href:"/docs/flickering-grid"},{icon:J(()=>[k(N(er),{class:"h-5 w-5 text-sky-500"})]),background:J(()=>[p("div",Gp,[k(Ha,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),c[24]||(c[24]=p("div",{class:"relative z-10 flex h-full items-center justify-center"},[p("span",{class:"rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-500 dark:text-sky-400 font-bold"}," 60FPS 矩阵微闪 ")],-1))])]),_:1})]),_:1})]),p("section",Vp,[k(Va,{class:"min-h-[460px]"},{default:J(()=>[c[27]||(c[27]=p("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-6xl font-black tracking-tight text-transparent"}," 为极致审美而生的动效原子 ",-1)),c[28]||(c[28]=p("p",{class:"mt-4 max-w-lg text-sm text-slate-400"}," 全面对标 Magic UI 与 Aceternity UI，支持单文件复制即用，零侵入无外部复杂构建负担。 ",-1)),p("div",Hp,[k(u,{to:"/docs/lamp-effect"},{default:J(()=>[k(Fn,{"shimmer-color":"#38bdf8",class:"h-11 px-6 text-sm"},{default:J(()=>[c[26]||(c[26]=p("span",null,"探索 Lamp Effect",-1)),k(N(ps),{class:"h-4 w-4"})]),_:1})]),_:1})])]),_:1})]),p("section",qp,[p("div",Up,[p("div",Wp,[p("div",Kp,[p("div",Yp,[k(N(ms),{class:"h-5 w-5"})]),c[29]||(c[29]=p("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," Copy & Paste 模式 ",-1)),c[30]||(c[30]=p("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不是封闭的黑盒 npm 库。代码完全属于你，复制进你的项目 `src/components/ui` 即可按需自定义与扩展。 ",-1))]),p("div",Xp,[p("div",Zp,[k(N(tr),{class:"h-5 w-5"})]),c[31]||(c[31]=p("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 单文件自包含（Zero-Config） ",-1)),c[32]||(c[32]=p("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 动画关键帧与路径封装在组件内，完全无需在 tailwind.config.js 中配置复杂的 keyframes，避免配置遗漏。 ",-1))]),p("div",Jp,[p("div",Qp,[k(N(Qe),{class:"h-5 w-5"})]),c[33]||(c[33]=p("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 真·明暗双模自适应 ",-1)),c[34]||(c[34]=p("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不仅在深黑背景下流光溢彩，更对纯白、浅灰背景做针对性调优，确保在任何业务场景下都有高级质感。 ",-1))])])])])])}}}),Zr=[{id:"border-beam",name:"BorderBeam",title:"Border Beam（跑马流光渐变边框）",category:"Effect",description:"沿着容器圆角边框匀速流动的彩色流光光束。大模型生成状态、VIP 特权卡片、核心功能高亮的科技感标配。",componentFilename:"BorderBeam.vue",componentCode:`<script setup lang="ts">
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
:global(.dark .retro-grid-plane) {
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
:global(.dark .shiny-variant-white) {
  background-image: linear-gradient(110deg, rgba(255,255,255,0.4) 20%, #ffffff 50%, rgba(255,255,255,0.4) 80%);
  filter: drop-shadow(0 0 8px rgba(255,255,255,0.2));
}
.shiny-variant-cyber {
  background-image: linear-gradient(110deg, #6366f1 20%, #06b6d4 50%, #6366f1 80%);
}
:global(.dark .shiny-variant-cyber) {
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
:global(.dark .meteor-streak::before) {
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
</template>`,propsList:[{name:"squareSize",type:"number",default:"4",description:"单个小方格尺寸 (px)"},{name:"gridGap",type:"number",default:"4",description:"小方块之间的间距 (px)"},{name:"flickerChance",type:"number",default:"0.3",description:"每帧方块明暗呼吸的概率"},{name:"maxOpacity",type:"number",default:"0.3",description:"方块闪烁的最大透明度"},{name:"color",type:"string",default:"自适应",description:"方块颜色 (HEX 或 RGB 字符串)"}]}];var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jr={exports:{}},qi;function nm(){return qi||(qi=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=(function(r){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,a={},o={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function g(x){return x instanceof l?new l(x.type,g(x.content),x.alias):Array.isArray(x)?x.map(g):x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++i}),g.__id},clone:function g(x,v){v=v||{};var C,F;switch(o.util.type(x)){case"Object":if(F=o.util.objId(x),v[F])return v[F];C={},v[F]=C;for(var T in x)x.hasOwnProperty(T)&&(C[T]=g(x[T],v));return C;case"Array":return F=o.util.objId(x),v[F]?v[F]:(C=[],v[F]=C,x.forEach(function(R,j){C[j]=g(R,v)}),C);default:return x}},getLanguage:function(g){for(;g;){var x=s.exec(g.className);if(x)return x[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,x){g.className=g.className.replace(RegExp(s,"gi"),""),g.classList.add("language-"+x)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(C){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(g){var x=document.getElementsByTagName("script");for(var v in x)if(x[v].src==g)return x[v]}return null}},isActive:function(g,x,v){for(var C="no-"+x;g;){var F=g.classList;if(F.contains(x))return!0;if(F.contains(C))return!1;g=g.parentElement}return!!v}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(g,x){var v=o.util.clone(o.languages[g]);for(var C in x)v[C]=x[C];return v},insertBefore:function(g,x,v,C){C=C||o.languages;var F=C[g],T={};for(var R in F)if(F.hasOwnProperty(R)){if(R==x)for(var j in v)v.hasOwnProperty(j)&&(T[j]=v[j]);v.hasOwnProperty(R)||(T[R]=F[R])}var re=C[g];return C[g]=T,o.languages.DFS(o.languages,function(ue,Se){Se===re&&ue!=g&&(this[ue]=T)}),T},DFS:function g(x,v,C,F){F=F||{};var T=o.util.objId;for(var R in x)if(x.hasOwnProperty(R)){v.call(x,R,x[R],C||R);var j=x[R],re=o.util.type(j);re==="Object"&&!F[T(j)]?(F[T(j)]=!0,g(j,v,null,F)):re==="Array"&&!F[T(j)]&&(F[T(j)]=!0,g(j,v,R,F))}}},plugins:{},highlightAll:function(g,x){o.highlightAllUnder(document,g,x)},highlightAllUnder:function(g,x,v){var C={callback:v,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),o.hooks.run("before-all-elements-highlight",C);for(var F=0,T;T=C.elements[F++];)o.highlightElement(T,x===!0,C.callback)},highlightElement:function(g,x,v){var C=o.util.getLanguage(g),F=o.languages[C];o.util.setLanguage(g,C);var T=g.parentElement;T&&T.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(T,C);var R=g.textContent,j={element:g,language:C,grammar:F,code:R};function re(Se){j.highlightedCode=Se,o.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,o.hooks.run("after-highlight",j),o.hooks.run("complete",j),v&&v.call(j.element)}if(o.hooks.run("before-sanity-check",j),T=j.element.parentElement,T&&T.nodeName.toLowerCase()==="pre"&&!T.hasAttribute("tabindex")&&T.setAttribute("tabindex","0"),!j.code){o.hooks.run("complete",j),v&&v.call(j.element);return}if(o.hooks.run("before-highlight",j),!j.grammar){re(o.util.encode(j.code));return}if(x&&r.Worker){var ue=new Worker(o.filename);ue.onmessage=function(Se){re(Se.data)},ue.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))}else re(o.highlight(j.code,j.grammar,j.language))},highlight:function(g,x,v){var C={code:g,grammar:x,language:v};if(o.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=o.tokenize(C.code,C.grammar),o.hooks.run("after-tokenize",C),l.stringify(o.util.encode(C.tokens),C.language)},tokenize:function(g,x){var v=x.rest;if(v){for(var C in v)x[C]=v[C];delete x.rest}var F=new f;return m(F,F.head,g),u(g,F,x,F.head,0),I(F)},hooks:{all:{},add:function(g,x){var v=o.hooks.all;v[g]=v[g]||[],v[g].push(x)},run:function(g,x){var v=o.hooks.all[g];if(!(!v||!v.length))for(var C=0,F;F=v[C++];)F(x)}},Token:l};r.Prism=o;function l(g,x,v,C){this.type=g,this.content=x,this.alias=v,this.length=(C||"").length|0}l.stringify=function g(x,v){if(typeof x=="string")return x;if(Array.isArray(x)){var C="";return x.forEach(function(re){C+=g(re,v)}),C}var F={type:x.type,content:g(x.content,v),tag:"span",classes:["token",x.type],attributes:{},language:v},T=x.alias;T&&(Array.isArray(T)?Array.prototype.push.apply(F.classes,T):F.classes.push(T)),o.hooks.run("wrap",F);var R="";for(var j in F.attributes)R+=" "+j+'="'+(F.attributes[j]||"").replace(/"/g,"&quot;")+'"';return"<"+F.tag+' class="'+F.classes.join(" ")+'"'+R+">"+F.content+"</"+F.tag+">"};function c(g,x,v,C){g.lastIndex=x;var F=g.exec(v);if(F&&C&&F[1]){var T=F[1].length;F.index+=T,F[0]=F[0].slice(T)}return F}function u(g,x,v,C,F,T){for(var R in v)if(!(!v.hasOwnProperty(R)||!v[R])){var j=v[R];j=Array.isArray(j)?j:[j];for(var re=0;re<j.length;++re){if(T&&T.cause==R+","+re)return;var ue=j[re],Se=ue.inside,Be=!!ue.lookbehind,tt=!!ue.greedy,qe=ue.alias;if(tt&&!ue.pattern.global){var le=ue.pattern.toString().match(/[imsuy]*$/)[0];ue.pattern=RegExp(ue.pattern.source,le+"g")}for(var se=ue.pattern||ue,Q=C.next,ke=F;Q!==x.tail&&!(T&&ke>=T.reach);ke+=Q.value.length,Q=Q.next){var H=Q.value;if(x.length>g.length)return;if(!(H instanceof l)){var Oe=1,de;if(tt){if(de=c(se,ke,g,Be),!de||de.index>=g.length)break;var oe=de.index,at=de.index+de[0].length,Fe=ke;for(Fe+=Q.value.length;oe>=Fe;)Q=Q.next,Fe+=Q.value.length;if(Fe-=Q.value.length,ke=Fe,Q.value instanceof l)continue;for(var me=Q;me!==x.tail&&(Fe<at||typeof me.value=="string");me=me.next)Oe++,Fe+=me.value.length;Oe--,H=g.slice(ke,Fe),de.index-=ke}else if(de=c(se,0,H,Be),!de)continue;var oe=de.index,z=de[0],G=H.slice(0,oe),P=H.slice(oe+z.length),Y=ke+H.length;T&&Y>T.reach&&(T.reach=Y);var d=Q.prev;G&&(d=m(x,d,G),ke+=G.length),b(x,d,Oe);var h=new l(R,Se?o.tokenize(z,Se):z,qe,z);if(Q=m(x,d,h),P&&m(x,Q,P),Oe>1){var y={cause:R+","+re,reach:Y};u(g,x,v,Q.prev,ke,y),T&&y.reach>T.reach&&(T.reach=y.reach)}}}}}}function f(){var g={value:null,prev:null,next:null},x={value:null,prev:g,next:null};g.next=x,this.head=g,this.tail=x,this.length=0}function m(g,x,v){var C=x.next,F={value:v,prev:x,next:C};return x.next=F,C.prev=F,g.length++,F}function b(g,x,v){for(var C=x.next,F=0;F<v&&C!==g.tail;F++)C=C.next;x.next=C,C.prev=x,g.length-=F}function I(g){for(var x=[],v=g.head.next;v!==g.tail;)x.push(v.value),v=v.next;return x}if(!r.document)return r.addEventListener&&(o.disableWorkerMessageHandler||r.addEventListener("message",function(g){var x=JSON.parse(g.data),v=x.language,C=x.code,F=x.immediateClose;r.postMessage(o.highlight(C,o.languages[v],v)),F&&r.close()},!1)),o;var A=o.util.currentScript();A&&(o.filename=A.src,A.hasAttribute("data-manual")&&(o.manual=!0));function O(){o.manual||o.highlightAll()}if(!o.manual){var $=document.readyState;$==="loading"||$==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",O):window.requestAnimationFrame?window.requestAnimationFrame(O):window.setTimeout(O,16)}return o})(t);e.exports&&(e.exports=n),typeof Hi<"u"&&(Hi.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(s,i){var a={};a["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var l={};l[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:o},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,s){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:n.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(r){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",s=function(A,O){return"✖ Error "+A+" while fetching file: "+O},i="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",l="loading",c="loaded",u="failed",f="pre[data-src]:not(["+o+'="'+c+'"]):not(['+o+'="'+l+'"])';function m(A,O,$){var g=new XMLHttpRequest;g.open("GET",A,!0),g.onreadystatechange=function(){g.readyState==4&&(g.status<400&&g.responseText?O(g.responseText):g.status>=400?$(s(g.status,g.statusText)):$(i))},g.send(null)}function b(A){var O=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if(O){var $=Number(O[1]),g=O[2],x=O[3];return g?x?[$,Number(x)]:[$,void 0]:[$,$]}}n.hooks.add("before-highlightall",function(A){A.selector+=", "+f}),n.hooks.add("before-sanity-check",function(A){var O=A.element;if(O.matches(f)){A.code="",O.setAttribute(o,l);var $=O.appendChild(document.createElement("CODE"));$.textContent=r;var g=O.getAttribute("data-src"),x=A.language;if(x==="none"){var v=(/\.(\w+)$/.exec(g)||[,"none"])[1];x=a[v]||v}n.util.setLanguage($,x),n.util.setLanguage(O,x);var C=n.plugins.autoloader;C&&C.loadLanguages(x),m(g,function(F){O.setAttribute(o,c);var T=b(O.getAttribute("data-range"));if(T){var R=F.split(/\r\n?|\n/g),j=T[0],re=T[1]==null?R.length:T[1];j<0&&(j+=R.length),j=Math.max(0,Math.min(j-1,R.length)),re<0&&(re+=R.length),re=Math.max(0,Math.min(re,R.length)),F=R.slice(j,re).join(`
`),O.hasAttribute("data-start")||O.setAttribute("data-start",String(j+1))}$.textContent=F,n.highlightElement($)},function(F){O.setAttribute(o,u),$.textContent=F})}}),n.plugins.fileHighlight={highlight:function(O){for(var $=(O||document).querySelectorAll(f),g=0,x;x=$[g++];)n.highlightElement(x)}};var I=!1;n.fileHighlight=function(){I||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),I=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(Jr)),Jr.exports}var rm=nm();const Qr=tm(rm);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var Ui={},Wi;function sm(){return Wi||(Wi=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),Ui}sm();Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};s["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:s},Prism.languages.insertBefore("markup","cdata",i)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);const im={class:"relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800 text-zinc-100 shadow-sm"},om={class:"flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5 text-xs text-zinc-400"},am={class:"font-mono"},lm={class:"max-h-[480px] overflow-auto p-4 text-xs font-mono leading-relaxed"},cm={class:"!m-0 !p-0 !bg-transparent"},um=["innerHTML"],Ki=we({__name:"CodeBlock",props:{code:{},language:{default:"html"},filename:{}},setup(e){const t=e,n=be(!1),r=Re(()=>{const i=Qr.languages[t.language]||Qr.languages.markup;return Qr.highlight(t.code.trim(),i,t.language)});async function s(){try{await navigator.clipboard.writeText(t.code.trim()),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(i){console.error("Failed to copy",i)}}return(i,a)=>(V(),K("div",im,[p("div",om,[p("span",am,Ae(t.filename||t.language.toUpperCase()),1),p("button",{type:"button",class:"inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",onClick:s},[n.value?(V(),it(N(la),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(V(),it(N(ms),{key:1,class:"h-3.5 w-3.5"})),p("span",null,Ae(n.value?"已复制！":"复制代码"),1)])]),p("div",lm,[p("pre",cm,[p("code",{innerHTML:r.value},null,8,um)])])]))}}),dm={class:"space-y-4"},fm={class:"space-y-1"},pm={class:"text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},mm={class:"text-sm text-zinc-500 dark:text-zinc-400"},hm={class:"overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-sm transition-colors"},gm={class:"flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 bg-zinc-50/80 px-4 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/60"},bm={class:"flex items-center gap-1 rounded-lg bg-zinc-200/60 p-1 dark:bg-zinc-800/60 text-xs font-medium"},xm={key:0,class:"flex items-center gap-2 text-xs"},vm={class:"flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-0.5"},ym={class:"relative"},wm={class:"p-4"},km={class:"p-4"},_m={key:0,class:"mt-8 space-y-3"},zm={class:"overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800"},Am={class:"w-full text-left text-xs"},Cm={class:"divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono"},Sm={class:"px-4 py-2.5 font-bold text-blue-600 dark:text-blue-400"},Rm={class:"px-4 py-2.5 text-pink-600 dark:text-pink-400"},Em={class:"px-4 py-2.5 text-zinc-500"},Fm={class:"px-4 py-2.5 font-sans text-zinc-600 dark:text-zinc-300"},Pm=we({__name:"ComponentPreview",props:{title:{},description:{},componentCode:{},usageCode:{},componentFilename:{},propsList:{}},setup(e){const t=e,n=be("preview"),r=be("default"),s=be(0),i=be(!0);let a=null;nn(()=>{i.value=document.documentElement.classList.contains("dark"),a=new MutationObserver(()=>{i.value=document.documentElement.classList.contains("dark")}),a.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}),rn(()=>{a==null||a.disconnect()});const o=Re(()=>r.value==="dark"?!0:r.value==="light"?!1:i.value);function l(){s.value++}return(c,u)=>(V(),K("div",dm,[p("div",fm,[p("h2",pm,Ae(t.title),1),p("p",mm,Ae(t.description),1)]),p("div",hm,[p("div",gm,[p("div",bm,[p("button",{type:"button",class:W(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="preview"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[0]||(u[0]=f=>n.value="preview")},[k(N(hu),{class:"h-3.5 w-3.5"}),u[6]||(u[6]=p("span",null,"实时效果",-1))],2),p("button",{type:"button",class:W(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="component"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[1]||(u[1]=f=>n.value="component")},[k(N(wi),{class:"h-3.5 w-3.5"}),p("span",null,"组件源码 ("+Ae(t.componentFilename)+")",1)],2),p("button",{type:"button",class:W(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="usage"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[2]||(u[2]=f=>n.value="usage")},[k(N(wi),{class:"h-3.5 w-3.5"}),u[7]||(u[7]=p("span",null,"业务调用 (Usage.vue)",-1))],2)]),n.value==="preview"?(V(),K("div",xm,[u[8]||(u[8]=p("span",{class:"text-zinc-400"},"视窗底色：",-1)),p("div",vm,[p("button",{type:"button",class:W(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="default"?"bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[3]||(u[3]=f=>r.value="default")}," 自适应 ",2),p("button",{type:"button",class:W(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="light"?"bg-white text-zinc-900 shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[4]||(u[4]=f=>r.value="light")}," 亮白 ",2),p("button",{type:"button",class:W(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="dark"?"bg-black text-white shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[5]||(u[5]=f=>r.value="dark")}," 暗黑 ",2)]),p("button",{type:"button",class:"inline-flex items-center gap-1 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",title:"重新触发动效",onClick:l},[k(N(yu),{class:"h-3.5 w-3.5"})])])):pn("",!0)]),p("div",ym,[jr(p("div",{class:W(["relative flex min-h-[360px] w-full items-center justify-center overflow-hidden p-8 transition-colors duration-200",o.value?"dark bg-black text-zinc-100":"bg-zinc-100/80 text-zinc-900"])},[(V(),K("div",{key:s.value,class:"w-full flex items-center justify-center"},[zt(c.$slots,"default",{isDark:o.value})]))],2),[[Vr,n.value==="preview"]]),jr(p("div",wm,[k(Ki,{code:t.componentCode,filename:t.componentFilename,language:"html"},null,8,["code","filename"])],512),[[Vr,n.value==="component"]]),jr(p("div",km,[k(Ki,{code:t.usageCode,filename:"UsageExample.vue",language:"html"},null,8,["code"])],512),[[Vr,n.value==="usage"]])])]),t.propsList&&t.propsList.length>0?(V(),K("div",_m,[u[10]||(u[10]=p("h3",{class:"text-base font-semibold text-zinc-900 dark:text-zinc-100"}," Props 属性参考 ",-1)),p("div",zm,[p("table",Am,[u[9]||(u[9]=p("thead",{class:"border-b border-zinc-200 bg-zinc-50/80 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"},[p("tr",null,[p("th",{class:"px-4 py-2.5"},"属性名"),p("th",{class:"px-4 py-2.5"},"类型"),p("th",{class:"px-4 py-2.5"},"默认值"),p("th",{class:"px-4 py-2.5"},"说明")])],-1)),p("tbody",Cm,[(V(!0),K(_e,null,Tt(t.propsList,f=>(V(),K("tr",{key:f.name,class:"text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40"},[p("td",Sm,Ae(f.name),1),p("td",Rm,Ae(f.type),1),p("td",Em,Ae(f.default),1),p("td",Fm,Ae(f.description),1)]))),128))])])])])):pn("",!0)]))}}),Mm={class:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"},Im={class:"flex flex-col md:flex-row gap-8"},Om={class:"w-full md:w-64 shrink-0"},Tm={class:"sticky top-24 rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-xs backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70"},$m={class:"space-y-1"},Lm={class:"mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 px-2"},Dm={class:"flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100"},jm={class:"min-w-0 flex-1"},Nm={class:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white mb-3 shadow-md shadow-blue-500/20"},Bm={key:1,class:"w-full max-w-2xl"},Gm={class:"flex h-full flex-col items-center justify-center p-6 text-center"},Vm={key:5,class:"flex flex-col items-center gap-6 py-8"},Hm={class:"text-center"},qm={class:"text-center mt-2"},Um={key:6,class:"flex flex-wrap items-center justify-center gap-4 py-8"},Wm={class:"relative z-10 flex items-center justify-between"},Km={class:"relative z-10 flex flex-col items-center gap-3"},Ym={class:"flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30"},Xm={key:10,class:"grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl py-6"},Zm={class:"text-2xl sm:text-3xl font-black text-sky-500 dark:text-sky-400 whitespace-nowrap"},Jm={class:"text-2xl sm:text-3xl font-black text-indigo-500 dark:text-indigo-400 whitespace-nowrap"},Qm={class:"text-2xl sm:text-3xl font-black text-emerald-500 dark:text-emerald-400 whitespace-nowrap"},eh={key:12,class:"w-full"},th={class:"relative z-10 text-center"},nh={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400 mb-3"},rh=we({__name:"DocsView",setup(e){const t=be(null),n=be(null),r=be(null),s=be(null),i=Yd(),a=Re(()=>i.params.id||"border-beam"),o=Re(()=>Zr.find(c=>c.id===a.value)||Zr[0]),l=["OpenAI","Anthropic","Google","NVIDIA","DeepSeek","Vercel"];return(c,u)=>{const f=Gn("router-link");return V(),K("div",Mm,[p("div",Im,[p("aside",Om,[p("div",Tm,[u[3]||(u[3]=p("div",{class:"mb-3 px-2 flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider"},[p("span",null,"动效原子组件"),p("span",{class:"rounded bg-blue-100 dark:bg-blue-950/80 px-1.5 py-0.2 text-[10px] text-blue-600 dark:text-blue-400 font-bold"}," 14 个 ")],-1)),p("nav",$m,[(V(!0),K(_e,null,Tt(N(Zr),m=>(V(),it(f,{key:m.id,to:`/docs/${m.id}`,class:W(["flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors",a.value===m.id?"bg-blue-600 text-white font-semibold shadow-xs":"text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"])},{default:J(()=>[p("span",null,Ae(m.name),1),p("span",{class:W(["text-[10px] rounded px-1.5 py-0.5",a.value===m.id?"bg-blue-700/80 text-blue-100":"bg-zinc-100 dark:bg-zinc-900 text-zinc-400"])},Ae(m.category),3)]),_:2},1032,["to","class"]))),128))]),p("div",Lm,[p("div",Dm,[k(N(_u),{class:"h-3.5 w-3.5 text-blue-500"}),u[0]||(u[0]=p("span",null,"基础依赖安装",-1))]),u[1]||(u[1]=p("p",{class:"mt-1 text-[11px] text-zinc-400"},"组件依赖轻量样式与工具库：",-1)),u[2]||(u[2]=p("div",{class:"mt-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-300 break-all select-all"}," npm i @vueuse/core clsx tailwind-merge ",-1))])])]),p("main",jm,[(V(),it(Pm,{key:o.value.id,title:o.value.title,description:o.value.description,"component-code":o.value.componentCode,"usage-code":o.value.usageCode,"component-filename":o.value.componentFilename,"props-list":o.value.propsList},{default:J(({isDark:m})=>[o.value.id==="border-beam"?(V(),K("div",{key:0,class:W(["relative flex h-64 w-80 flex-col items-center justify-center rounded-2xl border p-6 shadow-md transition-colors duration-200",m?"border-zinc-800 bg-zinc-900 text-zinc-100 shadow-black/40":"border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/50"])},[p("div",Nm,[k(N(Qe),{class:"h-6 w-6"})]),p("h4",{class:W(["text-lg font-bold",m?"text-white":"text-zinc-900"])}," Border Beam Demo ",2),p("p",{class:W(["mt-1 text-center text-xs",m?"text-zinc-400":"text-zinc-500"])}," 流光平滑环绕圆角容器边缘 ",2),k(ws,{size:180,duration:8,"color-from":"#38bdf8","color-to":"#a855f7"})],2)):o.value.id==="bento-grid"?(V(),K("div",Bm,[k(Da,{class:"auto-rows-[16rem]"},{default:J(()=>[k(We,{name:"AI 向量引擎",description:"毫秒级生成多模态视觉理解",cta:"了解详情",href:"#",class:W(m?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900")},{icon:J(()=>[k(N(mu),{class:"h-5 w-5 text-blue-500"})]),_:1},8,["class"]),k(We,{name:"全球边缘节点加速",description:"降低网络抖动，就近命中就近计算",class:W(["md:col-span-2",m?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900"]),cta:"查看分布",href:"#"},{icon:J(()=>[k(N(tr),{class:"h-5 w-5 text-amber-500"})]),_:1},8,["class"])]),_:2},1024)])):o.value.id==="interactive-particles"?(V(),K("div",{key:2,class:W(["relative h-[360px] w-full rounded-2xl border overflow-hidden transition-colors duration-200",m?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[k(Na,{quantity:60,"mouse-radius":120,"connect-lines":!0,color:m?"255, 255, 255":"59, 130, 246"},{default:J(()=>[p("div",Gm,[p("h3",{class:W(["text-2xl font-bold tracking-tight",m?"text-white":"text-zinc-900"])}," 移动光标体验引力感应 ",2),p("p",{class:W(["mt-2 text-xs",m?"text-zinc-400":"text-zinc-500"])}," Canvas 2D 60fps 满帧运行，动态引力排斥与光效连线 ",2)])]),_:2},1032,["color"])],2)):o.value.id==="retro-grid"?(V(),K("div",{key:3,class:W(["relative flex h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",m?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[p("span",{class:W(["z-10 text-4xl font-extrabold tracking-tighter",m?"text-white":"text-zinc-900"])}," Retro Synthwave Grid ",2),k(ks,{angle:65,"dark-line-color":"#334155","light-line-color":"#cbd5e1"})],2)):o.value.id==="dot-pattern"?(V(),K("div",{key:4,class:W(["relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border p-8 transition-colors duration-200",m?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[p("p",{class:W(["z-10 text-xl font-bold",m?"text-white":"text-zinc-900"])}," SVG 矢量波点底纹 (含发光聚光灯) ",2),k(ja,{width:18,height:18,cr:1.2,glow:!0})],2)):o.value.id==="shiny-text"?(V(),K("div",Vm,[p("div",{class:W(["rounded-full border px-5 py-2 text-xs font-medium shadow-sm transition-colors",m?"border-zinc-800 bg-zinc-900/90 text-zinc-300":"border-zinc-200 bg-zinc-100 text-zinc-700"])},[u[4]||(u[4]=Te(" ✨ ",-1)),k(Pn,{text:"Aura UI v1.0 全新微光发布",duration:2.5})],2),p("div",Hm,[k(Pn,{text:"Next-Gen AI Intelligence",class:"text-4xl sm:text-5xl font-black tracking-tight",duration:2.5}),p("p",{class:W(["mt-2 text-xs sm:text-sm",m?"text-zinc-500":"text-zinc-400"])}," 持续流淌的宽幅金属微光，肉眼清晰可观赏，绝无突兀停滞 ",2)]),p("div",qm,[k(Pn,{text:"Cyberpunk Motion Primitives",variant:"cyber",class:"text-3xl sm:text-4xl font-extrabold tracking-tight",duration:3}),p("p",{class:W(["mt-1 text-xs",m?"text-zinc-500":"text-zinc-400"])}," 赛博霓虹蓝紫粒子流光，高频荡漾 ",2)])])):o.value.id==="shimmer-button"?(V(),K("div",Um,[k(Fn,{"shimmer-color":"#38bdf8"},{default:J(()=>[u[5]||(u[5]=p("span",null,"立即获取代码",-1)),k(N(ps),{class:"h-4 w-4"})]),_:1}),k(Fn,{"shimmer-color":"#ec4899","shimmer-duration":"3.5s"},{default:J(()=>[...u[6]||(u[6]=[p("span",null,"Pink Shimmer",-1)])]),_:1})])):o.value.id==="marquee"?(V(),K("div",{key:7,class:W(["relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border py-6 transition-colors duration-200",m?"border-zinc-800 bg-black/60":"border-zinc-200 bg-zinc-50/80"])},[k(nr,{duration:20,"pause-on-hover":!0},{default:J(()=>[(V(),K(_e,null,Tt(l,b=>p("div",{key:b,class:W(["flex h-12 items-center justify-center rounded-xl border px-6 font-bold text-xs shadow-xs transition-colors duration-200",m?"border-zinc-800 bg-zinc-900 text-zinc-200":"border-zinc-200 bg-white text-zinc-800"])},Ae(b),3)),64))]),_:2},1024),p("div",{class:W(["pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r",m?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2),p("div",{class:W(["pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l",m?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2)],2)):o.value.id==="meteors"?(V(),K("div",{key:8,class:W(["relative flex h-80 w-full max-w-lg flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-2xl transition-colors duration-200",m?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-slate-900 text-white"])},[k(Ba,{number:30}),p("div",Wm,[u[7]||(u[7]=p("span",{class:"rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20"}," Meteor Shower ",-1)),k(N(Qe),{class:"h-5 w-5 text-sky-400"})]),u[8]||(u[8]=p("div",{class:"relative z-10 space-y-2"},[p("h3",{class:"text-3xl font-black tracking-tight text-white"}," 赛博深空流星雨 "),p("p",{class:"text-xs text-zinc-400 leading-relaxed"}," 流星带有 50px 渐变光尾与随机延迟，全硬件加速流畅穿梭，卡片与 Hero 背景的氛围杀器。 ")],-1))],2)):o.value.id==="ripple"?(V(),K("div",{key:9,class:W(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",m?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[k(Ga,{"main-circle-size":160,"num-circles":7}),p("div",Km,[p("div",Ym,[k(N(hs),{class:"h-7 w-7"})]),u[9]||(u[9]=p("div",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-mono text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300"}," AI 智能语音拾音中... ",-1))])],2)):o.value.id==="number-ticker"?(V(),K("div",Xm,[p("div",{class:W(["rounded-2xl border p-5 sm:p-6 text-center shadow-xs transition-colors",m?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[p("div",Zm,[k(rr,{value:99.99,"decimal-places":2}),u[10]||(u[10]=Te("% ",-1))]),u[11]||(u[11]=p("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"SLA 生产高可用性",-1))],2),p("div",{class:W(["rounded-2xl border p-5 sm:p-6 text-center shadow-xs transition-colors",m?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[p("div",Jm,[k(rr,{value:1e7}),u[12]||(u[12]=Te("+ ",-1))]),u[13]||(u[13]=p("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"每日处理 Token 数量",-1))],2),p("div",{class:W(["rounded-2xl border p-5 sm:p-6 text-center shadow-xs transition-colors",m?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[p("div",Qm,[k(rr,{value:12}),u[14]||(u[14]=Te("ms ",-1))]),u[15]||(u[15]=p("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"端到端流式推理延迟",-1))],2)])):o.value.id==="animated-beam"?(V(),K("div",{key:11,class:W(["relative flex h-72 w-full max-w-xl items-center justify-between px-12 rounded-2xl border transition-colors duration-200",m?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"]),ref_key:"beamContainerRef",ref:t},[p("div",{ref_key:"beamUserRef",ref:n,class:W(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",m?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[k(N(ua),{class:"h-6 w-6 text-blue-500"})],2),p("div",{ref_key:"beamAiRef",ref:r,class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/40"},[k(N(Qe),{class:"h-8 w-8"})],512),p("div",{ref_key:"beamDbRef",ref:s,class:W(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",m?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[k(N(ca),{class:"h-6 w-6 text-indigo-500"})],2),k(gr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.4},null,8,["container-ref","from-ref","to-ref"]),k(gr,{"container-ref":t.value,"from-ref":r.value,"to-ref":s.value,duration:2.4,delay:.6},null,8,["container-ref","from-ref","to-ref"])],2)):o.value.id==="lamp-effect"?(V(),K("div",eh,[k(Va,{class:"min-h-[420px]"},{default:J(()=>[...u[16]||(u[16]=[p("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-5xl font-black tracking-tight text-transparent"}," Next-Gen AI Platform ",-1),p("p",{class:"mt-3 max-w-md text-xs sm:text-sm text-slate-400"}," 双向极光天灯破晓而下，为旗舰级 AI 与 SaaS 官网赋予大模型发布会视觉。 ",-1)])]),_:1})])):o.value.id==="flickering-grid"?(V(),K("div",{key:13,class:W(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border p-6 transition-colors duration-200",m?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(Ha,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),p("div",th,[p("div",nh,[k(N(aa),{class:"h-3.5 w-3.5"}),u[17]||(u[17]=p("span",null,"Canvas 2D 智能矩阵",-1))]),p("h3",{class:W(["text-3xl font-black tracking-tight",m?"text-white":"text-zinc-900"])}," 呼吸噪波微光网格 ",2),p("p",{class:W(["mt-2 text-xs font-mono",m?"text-zinc-400":"text-zinc-500"])}," 微型粒子矩阵异步平滑呼吸闪烁，零 CPU 占用，极客感拉满 ",2)])],2)):pn("",!0)]),_:1},8,["title","description","component-code","usage-code","component-filename","props-list"]))])])])}}}),sh=Kd({history:Cd(),routes:[{path:"/",name:"home",component:em},{path:"/docs/:id?",name:"docs",component:rh},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(e,t,n){return n||{top:0}}}),qa=cu(Gu);qa.use(sh);qa.mount("#app");
