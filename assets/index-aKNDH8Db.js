(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const $e={},fn=[],Mt=()=>{},qi=()=>!1,Gr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ur=e=>e.startsWith("onUpdate:"),He=Object.assign,ro=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Yl=Object.prototype.hasOwnProperty,ke=(e,t)=>Yl.call(e,t),ie=Array.isArray,Qt=e=>ir(e)==="[object Map]",Rr=e=>ir(e)==="[object Set]",To=e=>ir(e)==="[object Date]",de=e=>typeof e=="function",Oe=e=>typeof e=="string",yt=e=>typeof e=="symbol",Se=e=>e!==null&&typeof e=="object",Wi=e=>(Se(e)||de(e))&&de(e.then)&&de(e.catch),Xi=Object.prototype.toString,ir=e=>Xi.call(e),Zl=e=>ir(e).slice(8,-1),Ki=e=>ir(e)==="[object Object]",so=e=>Oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Vn=no(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Jl=/-\w/g,st=qr(e=>e.replace(Jl,t=>t.slice(1).toUpperCase())),Ql=/\B([A-Z])/g,bn=qr(e=>e.replace(Ql,"-$1").toLowerCase()),Wr=qr(e=>e.charAt(0).toUpperCase()+e.slice(1)),as=qr(e=>e?`on${Wr(e)}`:""),It=(e,t)=>!Object.is(e,t),yr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Yi=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},oo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ec=e=>{const t=Oe(e)?Number(e):NaN;return isNaN(t)?e:t};let Io;const Xr=()=>Io||(Io=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ie(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Oe(r)?sc(r):Ie(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(Oe(e)||Se(e))return e}const tc=/;(?![^(]*\))/g,nc=/:([^]+)/,rc=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function sc(e){const t={};return e.replace(rc,n=>n.startsWith("/*")?"":n).split(tc).forEach(n=>{if(n){const r=n.split(nc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function j(e){let t="";if(Oe(e))t=e;else if(ie(e))for(let n=0;n<e.length;n++){const r=j(e[n]);r&&(t+=r+" ")}else if(Se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const oc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",ic=no(oc);function Zi(e){return!!e||e===""}function ac(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let s=0;r&&s<e.length;s++)r=Kr(e[s],t[s],n);return r}function Mo(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),s=new Uint8Array(r.length);for(const o of e){let i=-1;for(let a=0;a<r.length;a++)if(!s[a]&&Kr(o,r[a],n)){i=a;break}if(i<0)return!1;s[i]=1}return!0}function lc(e,t,n){let r=Qt(e),s=Qt(t);if(r||s||(r=Rr(e),s=Rr(t),r||s))return r&&s?Mo(e,t,n):!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),p=t.hasOwnProperty(a);if(l&&!p||!l&&p||!Kr(e[a],t[a],n))return!1}return String(e)===String(t)}function $o(e,t,n,r){n||(n=[new Map,new Map]);const[s,o]=n;if(s.has(e)||o.has(t))return s.get(e)===t&&o.get(t)===e;s.set(e,t),o.set(t,e);const i=r(e,t,n);return s.delete(e),o.delete(t),i}function Kr(e,t,n){if(e===t)return!0;let r=To(e),s=To(t);return r||s?r&&s?e.getTime()===t.getTime():!1:(r=yt(e),s=yt(t),r||s?e===t:(r=ie(e),s=ie(t),r||s?r&&s?$o(e,t,n,ac):!1:(r=Se(e),s=Se(t),r||s?!r||!s?!1:$o(e,t,n,lc):String(e)===String(t))))}const Ji=e=>!!(e&&e.__v_isRef===!0),U=e=>Oe(e)?e:e==null?"":ie(e)||Se(e)&&(e.toString===Xi||!de(e.toString))?Ji(e)?U(e.value):JSON.stringify(e,Qi,2):String(e),Qi=(e,t)=>Ji(t)?Qi(e,t.value):Qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],o)=>(n[ls(r,o)+" =>"]=s,n),{})}:Rr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ls(n))}:yt(t)?ls(t):Se(t)&&!ie(t)&&!Ki(t)?String(t):t,ls=(e,t="")=>{var n;return yt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let We;class cc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&We&&(We.active?(this.parent=We,this.index=(We.scopes||(We.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=We;try{return We=this,t()}finally{We=n}}}on(){++this._on===1&&(this.prevScope=We,We=this)}off(){if(this._on>0&&--this._on===0){if(We===this)We=this.prevScope;else{let t=We;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dc(){return We}let Pe;const cs=new WeakSet;class ea{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,We&&(We.active?We.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cs.has(this)&&(cs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||na(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eo(this),ra(this);const t=Pe,n=xt;Pe=this,xt=!0;try{return this.fn()}finally{sa(this),Pe=t,xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)lo(t);this.deps=this.depsTail=void 0,Eo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ms(this)&&this.run()}get dirty(){return Ms(this)}}let ta=0,Hn,Gn;function na(e,t=!1){if(e.flags|=8,t){e.next=Gn,Gn=e;return}e.next=Hn,Hn=e}function io(){ta++}function ao(){if(--ta>0)return;if(Gn){let t=Gn;for(Gn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Hn;){let t=Hn;for(Hn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function ra(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function sa(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),lo(r),uc(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ms(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(oa(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function oa(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Yn)||(e.globalVersion=Yn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ms(e))))return;e.flags|=2;const t=e.dep,n=Pe,r=xt;Pe=e,xt=!0;try{ra(e);const s=e.fn(e._value);(t.version===0||It(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Pe=n,xt=r,sa(e),e.flags&=-3}}function lo(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)lo(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function uc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let xt=!0;const ia=[];function Et(){ia.push(xt),xt=!1}function Pt(){const e=ia.pop();xt=e===void 0?!0:e}function Eo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Pe;Pe=void 0;try{t()}finally{Pe=n}}}let Yn=0;class pc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class co{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Pe||!xt||Pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Pe)n=this.activeLink=new pc(Pe,this),Pe.deps?(n.prevDep=Pe.depsTail,Pe.depsTail.nextDep=n,Pe.depsTail=n):Pe.deps=Pe.depsTail=n,aa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Pe.depsTail,n.nextDep=void 0,Pe.depsTail.nextDep=n,Pe.depsTail=n,Pe.deps===n&&(Pe.deps=r)}return n}trigger(t){this.version++,Yn++,this.notify(t)}notify(t){io();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ao()}}}function aa(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)aa(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const $s=new WeakMap,hn=Symbol(""),Es=Symbol(""),Zn=Symbol("");function Ye(e,t,n){if(xt&&Pe){let r=$s.get(e);r||$s.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new co),s.map=r,s.key=n),s.track()}}function Vt(e,t,n,r,s,o){const i=$s.get(e);if(!i){Yn++;return}const a=l=>{l&&l.trigger()};if(io(),t==="clear")i.forEach(a);else{const l=ie(e),p=l&&so(n);if(l&&n==="length"){const u=Number(r);i.forEach((d,m)=>{(m==="length"||m===Zn||!yt(m)&&m>=u)&&a(d)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),p&&a(i.get(Zn)),t){case"add":l?p&&a(i.get("length")):(a(i.get(hn)),Qt(e)&&a(i.get(Es)));break;case"delete":l||(a(i.get(hn)),Qt(e)&&a(i.get(Es)));break;case"set":Qt(e)&&a(i.get(hn));break}}ao()}function yn(e){const t=we(e);return t===e||(Ye(t,"iterate",Zn),pt(e))?t:Ft(e)?en(e)?t.map(n=>tn(ft(n))):t.map(tn):t.map(ft)}function Yr(e){return Ye(e=we(e),"iterate",Zn),e}function At(e,t){return Ft(e)?tn(en(e)?ft(t):t):ft(t)}const fc={__proto__:null,[Symbol.iterator](){return ds(this,Symbol.iterator,e=>At(this,e))},concat(...e){return yn(this).concat(...e.map(t=>ie(t)?yn(t):t))},entries(){return ds(this,"entries",e=>(e[1]=At(this,e[1]),e))},every(e,t){return Lt(this,"every",e,t,void 0,arguments)},filter(e,t){return Lt(this,"filter",e,t,n=>n.map(r=>At(this,r)),arguments)},find(e,t){return Lt(this,"find",e,t,n=>At(this,n),arguments)},findIndex(e,t){return Lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Lt(this,"findLast",e,t,n=>At(this,n),arguments)},findLastIndex(e,t){return Lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return us(this,"includes",e)},indexOf(...e){return us(this,"indexOf",e)},join(e){return yn(this).join(e)},lastIndexOf(...e){return us(this,"lastIndexOf",e)},map(e,t){return Lt(this,"map",e,t,void 0,arguments)},pop(){return En(this,"pop")},push(...e){return En(this,"push",e)},reduce(e,...t){return Fo(this,"reduce",e,t)},reduceRight(e,...t){return Fo(this,"reduceRight",e,t)},shift(){return En(this,"shift")},some(e,t){return Lt(this,"some",e,t,void 0,arguments)},splice(...e){return En(this,"splice",e)},toReversed(){return yn(this).toReversed()},toSorted(e){return yn(this).toSorted(e)},toSpliced(...e){return yn(this).toSpliced(...e)},unshift(...e){return En(this,"unshift",e)},values(){return ds(this,"values",e=>At(this,e))}};function ds(e,t,n){const r=Yr(e),s=r[t],o=s.call(r);if(r!==e&&!pt(e)){if(o[Symbol.toStringTag]==="Array Iterator"){const i=Object.create(Object.getPrototypeOf(o));return i.next=()=>Po(o.next(),n),s!==la[t]&&Object.defineProperties(i,{return:{get(){const a=o.return;return typeof a=="function"?a.bind(o):a}},throw:{get(){const a=o.throw;return typeof a=="function"?a.bind(o):a}}}),i}o._next=o.next,o.next=()=>Po(o._next(),n)}return o}function Po(e,t){return e.done||(e.value=t(e.value)),e}const la=Array.prototype;function Lt(e,t,n,r,s,o){const i=Yr(e),a=i!==e&&!pt(e),l=i[t];if(l!==la[t]){const d=l.apply(e,o);return a?ft(d):d}let p=n;i!==e&&(a?p=function(d,m){return n.call(this,At(e,d),m,e)}:n.length>2&&(p=function(d,m){return n.call(this,d,m,e)}));const u=l.call(i,p,r);return a&&s?s(u):u}function Fo(e,t,n,r){const s=Yr(e),o=s!==e&&!pt(e);let i=n,a=!1;s!==e&&(o?(a=r.length===0,i=function(p,u,d){return a&&(a=!1,p=At(e,p)),n.call(this,p,At(e,u),d,e)}):n.length>3&&(i=function(p,u,d){return n.call(this,p,u,d,e)}));const l=s[t](i,...r);return a?At(e,l):l}function us(e,t,n){const r=we(e);Ye(r,"iterate",Zn);const s=r[t](...n);return(s===-1||s===!1)&&fo(n[0])?(n[0]=we(n[0]),r[t](...n)):s}function En(e,t,n=[]){Et(),io();const r=we(e)[t].apply(e,n);return ao(),Pt(),r}const mc=no("__proto__,__v_isRef,__isVue"),ca=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(yt));function gc(e){yt(e)||(e=String(e));const t=we(this);return Ye(t,"has",e),t.hasOwnProperty(e)}class da{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?Cc:ma:o?fa:pa).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=ie(t);if(!s){let l;if(i&&(l=fc[n]))return l;if(n==="hasOwnProperty")return gc}const a=Reflect.get(t,n,Je(t)?t:r);if((yt(n)?ca.has(n):mc(n))||(s||Ye(t,"get",n),o))return a;if(Je(a)){const l=i&&so(n)?a:a.value;return s&&Se(l)?Fs(l):l}return Se(a)?s?Fs(a):Zr(a):a}}class ua extends da{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];const i=ie(t)&&so(n);if(!this._isShallow){const p=Ft(o);if(!pt(r)&&!Ft(r)&&(o=we(o),r=we(r)),!i&&Je(o)&&!Je(r))return p||(o.value=r),!0}const a=i?Number(n)<t.length:ke(t,n),l=Reflect.set(t,n,r,Je(t)?t:s);return t===we(s)&&l&&(a?It(r,o)&&Vt(t,"set",n,r):Vt(t,"add",n,r)),l}deleteProperty(t,n){const r=ke(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Vt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!yt(n)||!ca.has(n))&&Ye(t,"has",n),r}ownKeys(t){return Ye(t,"iterate",ie(t)?"length":hn),Reflect.ownKeys(t)}}class hc extends da{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const bc=new ua,xc=new hc,vc=new ua(!0);const Ps=e=>e,dr=e=>Reflect.getPrototypeOf(e);function yc(e,t,n){return function(...r){const s=this.__v_raw,o=we(s),i=Qt(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,p=s[e](...r),u=n?Ps:t?tn:ft;return!t&&Ye(o,"iterate",l?Es:hn),He(Object.create(p),{next(){const{value:d,done:m}=p.next();return m?{value:d,done:m}:{value:a?[u(d[0]),u(d[1])]:u(d),done:m}}})}}function ur(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function wc(e,t){const n={get(s){const o=this.__v_raw,i=we(o),a=we(s);e||(It(s,a)&&Ye(i,"get",s),Ye(i,"get",a));const{has:l}=dr(i),p=t?Ps:e?tn:ft;if(l.call(i,s))return p(o.get(s));if(l.call(i,a))return p(o.get(a));o!==i&&o.get(s)},get size(){const s=this.__v_raw;return!e&&Ye(we(s),"iterate",hn),s.size},has(s){const o=this.__v_raw,i=we(o),a=we(s);return e||(It(s,a)&&Ye(i,"has",s),Ye(i,"has",a)),s===a?o.has(s):o.has(s)||o.has(a)},forEach(s,o){const i=this,a=i.__v_raw,l=we(a),p=t?Ps:e?tn:ft;return!e&&Ye(l,"iterate",hn),a.forEach((u,d)=>s.call(o,p(u),p(d),i))}};return He(n,e?{add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear")}:{add(s){const o=we(this),i=dr(o),a=we(s),l=!t&&!pt(s)&&!Ft(s)?a:s;return i.has.call(o,l)||It(s,l)&&i.has.call(o,s)||It(a,l)&&i.has.call(o,a)||(o.add(l),Vt(o,"add",l,l)),this},set(s,o){!t&&!pt(o)&&!Ft(o)&&(o=we(o));const i=we(this),{has:a,get:l}=dr(i);let p=a.call(i,s);p||(s=we(s),p=a.call(i,s));const u=l.call(i,s);return i.set(s,o),p?It(o,u)&&Vt(i,"set",s,o):Vt(i,"add",s,o),this},delete(s){const o=we(this),{has:i,get:a}=dr(o);let l=i.call(o,s);l||(s=we(s),l=i.call(o,s)),a&&a.call(o,s);const p=o.delete(s);return l&&Vt(o,"delete",s,void 0),p},clear(){const s=we(this),o=s.size!==0,i=s.clear();return o&&Vt(s,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=yc(s,e,t)}),n}function uo(e,t){const n=wc(e,t);return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_isShallow"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,o)}const kc={get:uo(!1,!1)},zc={get:uo(!1,!0)},_c={get:uo(!0,!1)};const pa=new WeakMap,fa=new WeakMap,ma=new WeakMap,Cc=new WeakMap;function Sc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zr(e){return Ft(e)?e:po(e,!1,bc,kc,pa)}function ga(e){return po(e,!1,vc,zc,fa)}function Fs(e){return po(e,!0,xc,_c,ma)}function po(e,t,n,r,s){if(!Se(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=s.get(e);if(o)return o;const i=Sc(Zl(e));if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function en(e){return Ft(e)?en(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function pt(e){return!!(e&&e.__v_isShallow)}function fo(e){return e?!!e.__v_raw:!1}function we(e){const t=e&&e.__v_raw;return t?we(t):e}function Ac(e){return!ke(e,"__v_skip")&&Object.isExtensible(e)&&Yi(e,"__v_skip",!0),e}const ft=e=>Se(e)?Zr(e):e,tn=e=>Se(e)?Fs(e):e;function Je(e){return e?e.__v_isRef===!0:!1}function X(e){return ha(e,!1)}function Rc(e){return ha(e,!0)}function ha(e,t){return Je(e)?e:new Tc(e,t)}class Tc{constructor(t,n){this.dep=new co,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:we(t),this._value=n?t:ft(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||pt(t)||Ft(t);t=r?t:we(t),It(t,n)&&(this._rawValue=t,this._value=r?t:ft(t),this.dep.trigger())}}function S(e){return Je(e)?e.value:e}const Ic={get:(e,t,n)=>t==="__v_raw"?e:S(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function ba(e){return en(e)?e:new Proxy(e,Ic)}class Mc{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new co(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Pe!==this)return na(this,!0),!0}get value(){const t=this.dep.track();return oa(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function $c(e,t,n=!1){let r,s;return de(e)?r=e:(r=e.get,s=e.set),new Mc(r,s,n)}const pr={},Tr=new WeakMap;let un;function Ec(e,t=!1,n=un){if(n){let r=Tr.get(n);r||Tr.set(n,r=[]),r.push(e)}}function Pc(e,t,n=$e){const{immediate:r,deep:s,once:o,scheduler:i,augmentJob:a,call:l}=n,p=y=>s?y:pt(y)||s===!1||s===0?Ht(y,1):Ht(y);let u,d,m,g,A=!1,k=!1;if(Je(e)?(d=()=>e.value,A=pt(e)):en(e)?(d=()=>p(e),A=!0):ie(e)?(k=!0,A=e.some(y=>en(y)||pt(y)),d=()=>e.map(y=>{if(Je(y))return y.value;if(en(y))return p(y);if(de(y))return l?l(y,2):y()})):de(e)?t?d=l?()=>l(e,2):e:d=()=>{if(m){Et();try{m()}finally{Pt()}}const y=un;un=u;try{return l?l(e,3,[g]):e(g)}finally{un=y}}:d=Mt,t&&s){const y=d,I=s===!0?1/0:s;d=()=>Ht(y(),I)}const T=dc(),$=()=>{u.stop(),T&&T.active&&ro(T.effects,u)};if(o&&t){const y=t;t=(...I)=>{try{return y(...I)}finally{$()}}}let b=k?new Array(e.length).fill(pr):pr;const x=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(t){const I=u.run();if(y||s||A||(k?I.some((P,N)=>It(P,b[N])):It(I,b))){const P=un;Et();try{m&&m(),un=u;const N=[I,b===pr?void 0:k&&b[0]===pr?[]:b,g];b=I,l?l(t,3,N):t(...N)}finally{un=P,Pt()}}}else u.run()};return a&&a(x),u=new ea(d),u.scheduler=i?()=>i(x,!1):x,g=y=>Ec(y,!1,u),m=u.onStop=()=>{const y=Tr.get(u);if(y){if(l)l(y,4);else for(const I of y)I();Tr.delete(u)}},t?r?x(!0):b=u.run():i?i(x.bind(null,!0),!0):u.run(),$.pause=u.pause.bind(u),$.resume=u.resume.bind(u),$.stop=$,$}function Ht(e,t=1/0,n){if(t<=0||!Se(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Je(e))Ht(e.value,t,n);else if(ie(e))for(let r=0;r<e.length;r++)Ht(e[r],t,n);else if(Rr(e)||Qt(e))e.forEach(r=>{Ht(r,t,n)});else if(Ki(e)){for(const r in e)Ht(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ht(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ar(e,t,n,r){try{return r?e(...r):e()}catch(s){Jr(s,t,n)}}function mt(e,t,n,r){if(de(e)){const s=ar(e,t,n,r);return s&&Wi(s)&&s.catch(o=>{Jr(o,t,n)}),s}if(ie(e)){const s=[];for(let o=0;o<e.length;o++)s.push(mt(e[o],t,n,r));return s}}function Jr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||$e;if(t){let a=t.parent;const l=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,p)===!1)return}a=a.parent}if(o){Et(),ar(o,null,10,[e,l,p]),Pt();return}}Fc(e,n,s,r,i)}function Fc(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const rt=[];let bt=-1;const Rt=[];let Yt=null,wn=0;const xa=Promise.resolve();let Ir=null;function mo(e){const t=Ir||xa;return e?t.then(this?e.bind(this):e):t}function Lc(e){let t=bt+1,n=rt.length;for(;t<n;){const r=t+n>>>1,s=rt[r],o=Jn(s);o<e||o===e&&s.flags&2?t=r+1:n=r}return t}function go(e){if(!(e.flags&1)){const t=Jn(e),n=rt[rt.length-1];!n||!(e.flags&2)&&t>=Jn(n)?rt.push(e):rt.splice(Lc(t),0,e),e.flags|=1,va()}}function va(){Ir||(Ir=xa.then(ka))}function Oc(e){if(!ie(e))Yt&&e.id===-1?Yt.splice(wn+1,0,e):e.flags&1||(Rt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Rt.push(e[t]);va()}function ya(e,t,n,r=bt+1){for(;r<rt.length;r++){const s=rt[r];if(s&&s.flags&2){if(e&&s.id!==e.uid||t!==void 0&&!(s.id>=t))continue;rt.splice(r,1),r=e?r-1:bt,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function wa(e,t,n=0){if(Rt.length){let r=Rt,s=0;if(t){r=[];for(let i=0;i<Rt.length;i++){const a=Rt[i];(a.i!==void 0?!a.i||a.i.uid<n:t.has(a))?Rt[s++]=a:r.push(a)}}const o=[...new Set(r)].sort((i,a)=>Jn(i)-Jn(a));if(Rt.length=s,Yt){for(let i=0;i<o.length;i++)Yt.push(o[i]);return}for(Yt=o,wn=0;wn<Yt.length;wn++){const i=Yt[wn];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}Yt=null,wn=0}}let ps=!1;function jc(e,t){if(ps){e();return}const n=t===void 0?void 0:new Set(Rt);e(),ps=!0;try{ya(void 0,t),wa(void 0,n,t)}finally{ps=!1}}const Jn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ka(e){try{for(bt=0;bt<rt.length;bt++){const t=rt[bt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ar(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;bt<rt.length;bt++){const t=rt[bt];t&&(t.flags&=-2)}bt=-1,rt.length=0,wa(),Ir=null,(rt.length||Rt.length)&&ka()}}let Xe=null,za=null;function Mr(e){const t=Xe;return Xe=e,za=e&&e.type.__scopeId||null,t}function J(e,t=Xe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Fr(-1);const o=Mr(t),i=Gt.length;let a;try{a=e(...s)}finally{for(let l=Gt.length;l>i;l--)vo();Mr(o),r._d&&Fr(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function wr(e,t){if(Xe===null)return e;const n=ss(Xe),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,i,a,l=$e]=t[s];o&&(de(o)&&(o={mounted:o,updated:o}),o.deep&&Ht(i),r.push({dir:o,instance:n,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function on(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let l=a.dir[r];l&&(Et(),mt(l,n,8,[e.el,a,e,t]),Pt())}}function kr(e,t){if(Ze){let n=Ze.provides;const r=Ze.parent&&Ze.parent.provides;r===n&&(n=Ze.provides=Object.create(r)),n[e]=t}}function $t(e,t,n=!1){const r=yo();if(r||Cn){let s=Cn?Cn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&de(t)?t.call(r&&r.proxy):t}}const Dc=Symbol.for("v-scx"),Bc=()=>$t(Dc);function vt(e,t,n){return _a(e,t,n)}function _a(e,t,n=$e){const{immediate:r,deep:s,flush:o,once:i}=n,a=He({},n),l=t&&r||!t&&o!=="post";let p;if(nr){if(o==="sync"){const g=Bc();p=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Mt,g.resume=Mt,g.pause=Mt,g}}const u=Ze;a.call=(g,A,k)=>mt(g,u,A,k);let d=!1;o==="post"?a.scheduler=g=>{g.i=u,ot(g,u&&u.suspense)}:o!=="sync"&&(d=!0,a.scheduler=(g,A)=>{A?g():go(g)}),a.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const m=Pc(e,t,a);return nr&&(p?p.push(m):l&&m()),m}function Nc(e,t,n){const r=this.proxy,s=Oe(e)?e.includes(".")?Ca(r,e):()=>r[e]:e.bind(r,r);let o;de(t)?o=t:(o=t.handler,n=t);const i=cr(this),a=_a(s,o.bind(r),n);return i(),a}function Ca(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Vc=Symbol("_vte"),Qr=e=>e.__isTeleport,ut=Symbol("_leaveCb"),Pn=Symbol("_enterCb");function Hc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return at(()=>{e.isMounted=!0}),$a(()=>{e.isUnmounting=!0}),e}const dt=[Function,Array],Sa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dt,onEnter:dt,onAfterEnter:dt,onEnterCancelled:dt,onBeforeLeave:dt,onLeave:dt,onAfterLeave:dt,onLeaveCancelled:dt,onBeforeAppear:dt,onAppear:dt,onAfterAppear:dt,onAppearCancelled:dt},Gc={name:"BaseTransition",props:Sa,setup(e,{slots:t}){const n=yo(),r=Hc();return()=>{const s=t.default&&Ta(t.default(),!0),o=s&&s.length?Aa(s):n.subTree?be():void 0;if(!o)return;const i=we(e),{mode:a}=i;if(r.isLeaving)return fs(o);const l=$r(o);if(!l)return fs(o);let p=Ls(l,i,r,n,d=>p=d);l.type!==Ke&&An(l,p);let u=n.subTree&&$r(n.subTree);if(u&&u.type!==Ke&&!pn(u,l)&&Qn(n.subTree)){let d=Ls(u,i,r,n);if(An(u,d),a==="out-in"&&l.type!==Ke)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},fs(o);a==="in-out"&&l.type!==Ke?d.delayLeave=(m,g,A)=>{const k=Ra(r,u);k[String(u.key)]=u,m[ut]=()=>{g(),m[ut]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{A(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function Aa(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ke){t=n;break}}return t}const Uc=Gc;function Ra(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ls(e,t,n,r,s){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:g,onAfterLeave:A,onLeaveCancelled:k,onBeforeAppear:T,onAppear:$,onAfterAppear:b,onAppearCancelled:x}=t,y=String(e.key),I=Ra(n,e),P=(O,ee)=>{O&&mt(O,r,9,ee)},N=(O,ee)=>{const oe=ee[1];P(O,ee),ie(O)?O.every(G=>G.length<=1)&&oe():O.length<=1&&oe()},L={mode:i,persisted:a,beforeEnter(O){let ee=l;if(!n.isMounted)if(o)ee=T||l;else return;O[ut]&&O[ut](!0);const oe=I[y];if(oe&&pn(e,oe)){let G=oe.el[ut];if(!G){const ue=Qn(oe);G=ue&&ue.el[ut]}G&&G()}P(ee,[O])},enter(O){if(I[y]===e)return;let ee=p,oe=u,G=d;if(!n.isMounted)if(o)ee=$||p,oe=b||u,G=x||d;else return;let ue=!1;O[Pn]=Le=>{ue||(ue=!0,Le?P(G,[O]):P(oe,[O]),L.delayedLeave&&L.delayedLeave(),O[Pn]=void 0)};const Ae=O[Pn].bind(null,!1);ee?N(ee,[O,Ae]):Ae()},leave(O,ee){const oe=String(e.key);if(O[Pn]&&O[Pn](!0),n.isUnmounting)return ee();P(m,[O]);let G=!1;O[ut]=Ae=>{G||(G=!0,ee(),Ae?P(k,[O]):P(A,[O]),O[ut]=void 0,I[oe]===e&&delete I[oe])};const ue=O[ut].bind(null,!1);I[oe]=e,g?N(g,[O,ue]):ue()},clone(O){const ee=Ls(O,t,n,r,s);return s&&s(ee),ee}};return L}function fs(e){if(es(e))return e=nn(e),e.children=null,e}function $r(e){if(!es(e))return Qr(e.type)&&e.children?Aa(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&de(n.default))return n.default()}}function An(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;An(Qr(n.type)&&$r(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===pe&&ie(e.children)){const n=Na(e.children,!1);n&&An(n,t)}}function Ta(e,t=!1,n){let r=[],s=0;for(let o=0;o<e.length;o++){let i=e[o];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===pe?(i.patchFlag&128&&s++,r=r.concat(Ta(i.children,t,a))):(t||i.type!==Ke)&&r.push(a!=null?nn(i,{key:a}):i)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function Qn(e){if(e.component)return Qn(e.component.subTree);if(e.type===pe){const t=ie(e.children)&&Na(e.children,!1);return t?Qn(t):void 0}if(e.type!==Ke)return e}function fe(e,t){return de(e)?He({name:e.name},t,{setup:e}):e}function ho(){const e=yo();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Ia(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Lo(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Er=new WeakMap;function Un(e,t,n,r,s=!1){if(ie(e)){e.forEach((k,T)=>Un(k,t&&(ie(t)?t[T]:t),n,r,s));return}if(_n(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Un(e,t,n,r.component.subTree);return}const o=r.shapeFlag&4?ss(r.component):r.el,i=s?null:o,{i:a,r:l}=e,p=t&&t.r,u=a.refs===$e?a.refs={}:a.refs,d=a.setupState,m=we(d),g=d===$e?qi:k=>Lo(u,k)?!1:ke(m,k),A=(k,T)=>!(T&&Lo(u,T));if(p!=null&&p!==l){if(Oo(t),Oe(p))u[p]=null,g(p)&&(d[p]=null);else if(Je(p)){const k=t;A(p,k.k)&&(p.value=null),k.k&&(u[k.k]=null)}}if(de(l))ar(l,a,12,[i,u]);else{const k=Oe(l),T=Je(l);if(k||T){const $=()=>{if(e.f){const b=k?g(l)?d[l]:u[l]:A()||!e.k?l.value:u[e.k];if(s)ie(b)&&ro(b,o);else if(ie(b))b.includes(o)||b.push(o);else if(k)u[l]=[o],g(l)&&(d[l]=u[l]);else{const x=[o];A(l,e.k)&&(l.value=x),e.k&&(u[e.k]=x)}}else k?(u[l]=i,g(l)&&(d[l]=i)):T&&(A(l,e.k)&&(l.value=i),e.k&&(u[e.k]=i))};if(i){const b=()=>{$(),Er.delete(e)};b.id=-1,Er.set(e,b),ot(b,n)}else Oo(e),$()}}}function Oo(e){const t=Er.get(e);t&&(t.flags|=8,Er.delete(e))}Xr().requestIdleCallback;Xr().cancelIdleCallback;const _n=e=>!!e.type.__asyncLoader,es=e=>e.type.__isKeepAlive;function qc(e,t){Ma(e,"a",t)}function Wc(e,t){Ma(e,"da",t)}function Ma(e,t,n=Ze){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ts(t,r,n),n){let s=n.parent;for(;s&&s.parent;)es(s.parent.vnode)&&Xc(r,t,n,s),s=s.parent}}function Xc(e,t,n,r){const s=ts(t,e,r,!0);gt(()=>{ro(r[t],s)},n)}function ts(e,t,n=Ze,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{Et();const a=cr(n),l=mt(t,n,e,i);return a(),Pt(),l});return r?s.unshift(o):s.push(o),o}}const qt=e=>(t,n=Ze)=>{(!nr||e==="sp")&&ts(e,(...r)=>t(...r),n)},Kc=qt("bm"),at=qt("m"),Yc=qt("bu"),Zc=qt("u"),$a=qt("bum"),gt=qt("um"),Jc=qt("sp"),Qc=qt("rtg"),ed=qt("rtc");function td(e,t=Ze){ts("ec",e,t)}const Ea="components";function lr(e,t){return Fa(Ea,e,!0,t)||e}const Pa=Symbol.for("v-ndc");function Ut(e){return Oe(e)?Fa(Ea,e,!1)||e:e||Pa}function Fa(e,t,n=!0,r=!1){const s=Xe||Ze;if(s){const o=s.type;{const a=jd(o,!1);if(a&&(a===t||a===st(t)||a===Wr(st(t))))return o}const i=jo(s[e]||o[e],t)||jo(s.appContext[e],t);return!i&&r?o:i}}function jo(e,t){return e&&(e[t]||e[st(t)]||e[Wr(st(t))])}function je(e,t,n,r){let s;const o=n,i=ie(e);if(i||Oe(e)){const a=i&&en(e);let l=!1,p=!1;a&&(l=!pt(e),p=Ft(e),e=Yr(e)),s=new Array(e.length);for(let u=0,d=e.length;u<d;u++)s[u]=t(l?p?tn(ft(e[u])):ft(e[u]):e[u],u,void 0,o)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)s=[];else{s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,o)}else if(Se(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,o));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,p=a.length;l<p;l++){const u=a[l];s[l]=t(e[u],u,l,o)}}else s=[];return s}function it(e,t,n,r,s,o){if(n==null&&(n={}),Xe.ce||Xe.parent&&_n(Xe.parent)&&Xe.parent.ce){const p=o!=null&&n.key==null?He({},n,{key:o}):n,u=Object.keys(p).length>0;return t!=="default"&&(p.name=t),w(),ye(pe,null,[v("slot",p,r&&r())],u?-2:64)}let i=e[t];i&&i._c&&(i._d=!1);const a=Gt.length;w();let l;try{const p=i&&La(i(n)),u=n.key||o||p&&p.key;l=ye(pe,{key:(u&&!yt(u)?u:`_${t}`)+(!p&&r?"_fb":"")},p||(r?r():[]),p&&e._===1?64:-2)}catch(p){for(let u=Gt.length;u>a;u--)vo();throw p}finally{i&&i._c&&(i._d=!0)}return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function La(e){return e.some(t=>Rn(t)?!(t.type===Ke||t.type===pe&&!La(t.children)):!0)?e:null}const Os=e=>e?rl(e)?ss(e):Os(e.parent):null,qn=He(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Os(e.parent),$root:e=>Os(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ja(e),$forceUpdate:e=>e.f||(e.f=()=>{go(e.update)}),$nextTick:e=>e.n||(e.n=mo.bind(e.proxy)),$watch:e=>Nc.bind(e)}),ms=(e,t)=>e!==$e&&!e.__isScriptSetup&&ke(e,t),nd={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:l}=e;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(ms(r,t))return i[t]=1,r[t];if(s!==$e&&ke(s,t))return i[t]=2,s[t];if(ke(o,t))return i[t]=3,o[t];if(n!==$e&&ke(n,t))return i[t]=4,n[t];js&&(i[t]=0)}}const p=qn[t];let u,d;if(p)return t==="$attrs"&&Ye(e.attrs,"get",""),p(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==$e&&ke(n,t))return i[t]=4,n[t];if(d=l.config.globalProperties,ke(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return ms(s,t)?(s[t]=n,!0):r!==$e&&ke(r,t)?(r[t]=n,!0):ke(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:o,type:i}},a){let l;return!!(n[a]||e!==$e&&a[0]!=="$"&&ke(e,a)||ms(t,a)||ke(o,a)||ke(r,a)||ke(qn,a)||ke(s.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ke(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Do(e){return ie(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let js=!0;function rd(e){const t=ja(e),n=e.proxy,r=e.ctx;js=!1,t.beforeCreate&&Bo(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:l,inject:p,created:u,beforeMount:d,mounted:m,beforeUpdate:g,updated:A,activated:k,deactivated:T,beforeDestroy:$,beforeUnmount:b,destroyed:x,unmounted:y,render:I,renderTracked:P,renderTriggered:N,errorCaptured:L,serverPrefetch:O,expose:ee,inheritAttrs:oe,components:G,directives:ue,filters:Ae}=t;if(p&&sd(p,r,null),i)for(const ae in i){const C=i[ae];de(C)&&(r[ae]=C.bind(n))}if(s){const ae=s.call(n,n);Se(ae)&&(e.data=Zr(ae))}if(js=!0,o)for(const ae in o){const C=o[ae],Ee=de(C)?C.bind(n,n):de(C.get)?C.get.bind(n,n):Mt,F=!de(C)&&de(C.set)?C.set.bind(n):Mt,re=Ce({get:Ee,set:F});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>re.value,set:he=>re.value=he})}if(a)for(const ae in a)Oa(a[ae],r,n,ae);if(l){const ae=de(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(C=>{kr(C,ae[C])})}u&&Bo(u,e,"c");function ge(ae,C){ie(C)?C.forEach(Ee=>ae(Ee.bind(n))):C&&ae(C.bind(n))}if(ge(Kc,d),ge(at,m),ge(Yc,g),ge(Zc,A),ge(qc,k),ge(Wc,T),ge(td,L),ge(ed,P),ge(Qc,N),ge($a,b),ge(gt,y),ge(Jc,O),ie(ee))if(ee.length){const ae=e.exposed||(e.exposed={});ee.forEach(C=>{Object.defineProperty(ae,C,{get:()=>n[C],set:Ee=>n[C]=Ee,enumerable:!0})})}else e.exposed||(e.exposed={});I&&e.render===Mt&&(e.render=I),oe!=null&&(e.inheritAttrs=oe),G&&(e.components=G),ue&&(e.directives=ue),O&&Ia(e)}function sd(e,t,n=Mt){ie(e)&&(e=Ds(e));for(const r in e){const s=e[r];let o;Se(s)?"default"in s?o=$t(s.from||r,s.default,!0):o=$t(s.from||r):o=$t(s),Je(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function Bo(e,t,n){mt(ie(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oa(e,t,n,r){let s=r.includes(".")?Ca(n,r):()=>n[r];if(Oe(e)){const o=t[e];de(o)&&vt(s,o)}else if(de(e))vt(s,e.bind(n));else if(Se(e))if(ie(e))e.forEach(o=>Oa(o,t,n,r));else{const o=de(e.handler)?e.handler.bind(n):t[e.handler];de(o)&&vt(s,o,e)}}function ja(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(p=>Pr(l,p,i,!0)),Pr(l,t,i)),Se(t)&&o.set(t,l),l}function Pr(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&Pr(e,o,n,!0),s&&s.forEach(i=>Pr(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=od[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const od={data:No,props:Vo,emits:Vo,methods:Bn,computed:Bn,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:Bn,directives:Bn,watch:ad,provide:No,inject:id};function No(e,t){return t?e?function(){return He(de(e)?e.call(this,this):e,de(t)?t.call(this,this):t)}:t:e}function id(e,t){return Bn(Ds(e),Ds(t))}function Ds(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function et(e,t){return e?[...new Set([].concat(e,t))]:t}function Bn(e,t){return e?He(Object.create(null),e,t):t}function Vo(e,t){return e?ie(e)&&ie(t)?[...new Set([...e,...t])]:He(Object.create(null),Do(e),Do(t??{})):t}function ad(e,t){if(!e)return t;if(!t)return e;const n=He(Object.create(null),e);for(const r in t)n[r]=et(e[r],t[r]);return n}function Da(){return{app:null,config:{isNativeTag:qi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ld=0;function cd(e,t){return function(r,s=null){de(r)||(r=He({},r)),s!=null&&!Se(s)&&(s=null);const o=Da(),i=new WeakSet,a=[];let l=!1;const p=o.app={_uid:ld++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:Bd,get config(){return o.config},set config(u){},use(u,...d){return i.has(u)||(u&&de(u.install)?(i.add(u),u.install(p,...d)):de(u)&&(i.add(u),u(p,...d))),p},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),p},component(u,d){return d?(o.components[u]=d,p):o.components[u]},directive(u,d){return d?(o.directives[u]=d,p):o.directives[u]},mount(u,d,m){if(!l){const g=p._ceVNode||v(r,s);return g.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),e(g,u,m),l=!0,p._container=u,u.__vue_app__=p,ss(g.component)}},onUnmount(u){a.push(u)},unmount(){l&&(mt(a,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return o.provides[u]=d,p},runWithContext(u){const d=Cn;Cn=p;try{return u()}finally{Cn=d}}};return p}}let Cn=null;const dd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${st(t)}Modifiers`]||e[`${bn(t)}Modifiers`];function ud(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||$e;let s=n;const o=t.startsWith("update:"),i=o&&dd(r,t.slice(7));i&&(i.trim&&(s=n.map(u=>Oe(u)?u.trim():u)),i.number&&(s=s.map(oo)));let a,l=r[a=as(t)]||r[a=as(st(t))];!l&&o&&(l=r[a=as(bn(t))]),l&&mt(l,e,6,s);const p=r[a+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,mt(p,e,6,s)}}const pd=new WeakMap;function Ba(e,t,n=!1){const r=n?pd:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!de(e)){const l=p=>{const u=Ba(p,t,!0);u&&(a=!0,He(i,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(Se(e)&&r.set(e,null),null):(ie(o)?o.forEach(l=>i[l]=null):He(i,o),Se(e)&&r.set(e,i),i)}function ns(e,t){return!e||!Gr(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ke(e,t[0].toLowerCase()+t.slice(1))||ke(e,bn(t))||ke(e,t))}function Ho(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:i,attrs:a,emit:l,render:p,renderCache:u,props:d,data:m,setupState:g,ctx:A,inheritAttrs:k}=e,T=Mr(e);let $,b;try{if(n.shapeFlag&4){const y=s||r,I=y;$=Tt(p.call(I,y,u,d,g,m,A)),b=a}else{const y=t;$=Tt(y.length>1?y(d,{attrs:a,slots:i,emit:l}):y(d,null)),b=t.props?a:fd(a)}}catch(y){Gt.length=0,Jr(y,e,1),$=v(Ke)}let x=$;if(b&&k!==!1){const y=Object.keys(b),{shapeFlag:I}=x;y.length&&I&7&&(o&&y.some(Ur)&&(b=md(b,o)),x=nn(x,b,!1,!0))}if(n.dirs&&(x=nn(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition){const y=Qr(x.type)&&$r(x)||x;An(y,n.transition)}return $=x,Mr(T),$}function Na(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(Rn(s)){if(s.type!==Ke||s.children==="v-if"){if(n)return;n=s}}else return}return n}const fd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Gr(n))&&((t||(t={}))[n]=e[n]);return t},md=(e,t)=>{const n={};for(const r in e)(!Ur(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gd(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:l}=t,p=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Go(r,i,p):!!i;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(Va(i,r,m)&&!ns(p,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Go(r,i,p):!0:!!i;return!1}function Go(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(!ke(e,o)||Va(t,e,o)&&!ns(n,o))return!0}return!1}function Va(e,t,n){const r=e[n],s=t[n];return n==="style"&&Se(r)&&Se(s)?!Kr(r,s):r!==s}function hd({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Ha={},Ga=()=>Object.create(Ha),Ua=e=>Object.getPrototypeOf(e)===Ha;function bd(e,t,n,r=!1){const s={},o=Ga();e.propsDefaults=Object.create(null),qa(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:ga(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function xd(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=we(s),[l]=e.propsOptions;let p=!1;if((r||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(ns(e.emitsOptions,m))continue;const g=t[m];if(l)if(ke(o,m))g!==o[m]&&(o[m]=g,p=!0);else{const A=st(m);s[A]=Bs(l,a,A,g,e,!1)}else g!==o[m]&&(o[m]=g,p=!0)}}}else{qa(e,t,s,o)&&(p=!0);let u;for(const d in a)(!t||!ke(t,d)&&((u=bn(d))===d||!ke(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Bs(l,a,d,void 0,e,!0)):delete s[d]);if(o!==a)for(const d in o)(!t||!ke(t,d))&&(delete o[d],p=!0)}p&&Vt(e.attrs,"set","")}function qa(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(Vn(l))continue;const p=t[l];let u;s&&ke(s,u=st(l))?!o||!o.includes(u)?n[u]=p:(a||(a={}))[u]=p:ns(e.emitsOptions,l)||(!(l in r)||p!==r[l])&&(r[l]=p,i=!0)}if(o){const l=we(n),p=a||$e;for(let u=0;u<o.length;u++){const d=o[u];n[d]=Bs(s,l,d,p[d],e,!ke(p,d))}}return i}function Bs(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=ke(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&de(l)){const{propsDefaults:p}=s;if(n in p)r=p[n];else{const u=cr(s);r=p[n]=l.call(null,t),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===bn(n))&&(r=!0))}return r}const vd=new WeakMap;function Wa(e,t,n=!1){const r=n?vd:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let l=!1;if(!de(e)){const u=d=>{l=!0;const[m,g]=Wa(d,t,!0);He(i,m),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return Se(e)&&r.set(e,fn),fn;if(ie(o))for(let u=0;u<o.length;u++){const d=st(o[u]);Uo(d)&&(i[d]=$e)}else if(o)for(const u in o){const d=st(u);if(Uo(d)){const m=o[u],g=i[d]=ie(m)||de(m)?{type:m}:He({},m),A=g.type;let k=!1,T=!0;if(ie(A))for(let $=0;$<A.length;++$){const b=A[$],x=de(b)&&b.name;if(x==="Boolean"){k=!0;break}else x==="String"&&(T=!1)}else k=de(A)&&A.name==="Boolean";g[0]=k,g[1]=T,(k||ke(g,"default"))&&a.push(d)}}const p=[i,a];return Se(e)&&r.set(e,p),p}function Uo(e){return e[0]!=="$"&&!Vn(e)}const bo=e=>e==="_"||e==="_ctx"||e==="$stable",xo=e=>ie(e)?e.map(Tt):[Tt(e)],yd=(e,t,n)=>{if(t._n)return t;const r=J((...s)=>xo(t(...s)),n);return r._c=!1,r},Xa=(e,t,n)=>{const r=e._ctx;for(const s in e){if(bo(s))continue;const o=e[s];if(de(o))t[s]=yd(s,o,r);else if(o!=null){const i=xo(o);t[s]=()=>i}}},Ka=(e,t)=>{const n=xo(t);e.slots.default=()=>n},Ya=(e,t,n)=>{for(const r in t)(n||!bo(r))&&(e[r]=t[r])},wd=(e,t,n)=>{const r=e.slots=Ga();if(e.vnode.shapeFlag&32){const s=t._;s?(Ya(r,t,n),n&&Yi(r,"_",s,!0)):Xa(t,r)}else t&&Ka(e,t)},kd=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=$e;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:Ya(s,t,n):(o=!t.$stable,Xa(t,s)),i=t}else t&&(Ka(e,t),i={default:1});if(o)for(const a in s)!bo(a)&&i[a]==null&&delete s[a]},ot=Ad;function zd(e){return _d(e)}function _d(e,t){const n=Xr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:l,setText:p,setElementText:u,parentNode:d,nextSibling:m,setScopeId:g=Mt,insertStaticContent:A}=e,k=(f,h,z,R=null,M=null,D=null,H=void 0,W=null,q=!!h.dynamicChildren)=>{if(f===h)return;f&&!pn(f,h)&&(R=E(f),he(f,M,D,!0),f=null),h.patchFlag===-2&&(q=!1,h.dynamicChildren=null),h.dynamicChildren&&f&&f.dynamicChildren&&f.dynamicChildren.hasOnce&&(h.dynamicChildren===fn&&(h.dynamicChildren=[]),h.dynamicChildren.hasOnce=!0);const{type:B,ref:ne,shapeFlag:K}=h;switch(B){case rs:T(f,h,z,R);break;case Ke:$(f,h,z,R);break;case zr:f==null&&b(h,z,R,H);break;case pe:G(f,h,z,R,M,D,H,W,q);break;default:K&1?I(f,h,z,R,M,D,H,W,q):K&6?ue(f,h,z,R,M,D,H,W,q):(K&64||K&128)&&B.process(f,h,z,R,M,D,H,W,q,V)}ne!=null&&M?Un(ne,f&&f.ref,D,h||f,!h):ne==null&&f&&f.ref!=null&&Un(f.ref,null,D,f,!0)},T=(f,h,z,R)=>{if(f==null)r(h.el=a(h.children),z,R);else{const M=h.el=f.el;h.children!==f.children&&p(M,h.children)}},$=(f,h,z,R)=>{f==null?r(h.el=l(h.children||""),z,R):h.el=f.el},b=(f,h,z,R)=>{[f.el,f.anchor]=A(f.children,h,z,R,f.el,f.anchor)},x=({el:f,anchor:h},z,R)=>{let M;for(;f&&f!==h;)M=m(f),r(f,z,R),f=M;r(h,z,R)},y=({el:f,anchor:h})=>{let z;for(;f&&f!==h;)z=m(f),s(f),f=z;s(h)},I=(f,h,z,R,M,D,H,W,q)=>{if(h.type==="svg"?H="svg":h.type==="math"&&(H="mathml"),f==null)P(h,z,R,M,D,H,W,q);else{const B=f.el&&f.el._isVueCE?f.el:null;try{B&&B._beginPatch(),O(f,h,M,D,H,W,q)}finally{B&&B._endPatch()}}},P=(f,h,z,R,M,D,H,W)=>{let q,B;const{props:ne,shapeFlag:K,transition:se,dirs:ce}=f;if(q=f.el=i(f.type,D,ne&&ne.is,ne),K&8?u(q,f.children):K&16&&L(f.children,q,null,R,M,gs(f,D),H,W),ce&&on(f,null,R,"created"),N(q,f,f.scopeId,H,R),ne){for(const Me in ne)Me!=="value"&&!Vn(Me)&&o(q,Me,null,ne[Me],D,R);"value"in ne&&o(q,"value",null,ne.value,D),(B=ne.onVnodeBeforeMount)&&Ct(B,R,f)}ce&&on(f,null,R,"beforeMount");const ve=Cd(M,se);ve&&se.beforeEnter(q),r(q,h,z),((B=ne&&ne.onVnodeMounted)||ve||ce)&&ot(()=>{try{B&&Ct(B,R,f),ve&&se.enter(q),ce&&on(f,null,R,"mounted")}finally{}},M)},N=(f,h,z,R,M)=>{if(z&&g(f,z),R)for(let D=0;D<R.length;D++)g(f,R[D]);if(M){let D=M.subTree;if(h===D||Qa(D.type)&&(D.ssContent===h||D.ssFallback===h)){const H=M.vnode;N(f,H,H.scopeId,H.slotScopeIds,M.parent)}}},L=(f,h,z,R,M,D,H,W,q=0)=>{for(let B=q;B<f.length;B++){const ne=f[B]=W?Nt(f[B]):Tt(f[B]);k(null,ne,h,z,R,M,D,H,W)}},O=(f,h,z,R,M,D,H)=>{const W=h.el=f.el;let{patchFlag:q,dynamicChildren:B,dirs:ne}=h;q|=f.patchFlag&16;const K=f.props||$e,se=h.props||$e;let ce;if(z&&an(z,!1),(ce=se.onVnodeBeforeUpdate)&&Ct(ce,z,h,f),ne&&on(h,f,z,"beforeUpdate"),z&&an(z,!0),B&&(!f.dynamicChildren||f.dynamicChildren.length!==B.length)&&(q=0,H=!1,B=null),(K.innerHTML&&se.innerHTML==null||K.textContent&&se.textContent==null)&&u(W,""),B?ee(f.dynamicChildren,B,W,z,R,gs(h,M),D):H||C(f,h,W,null,z,R,gs(h,M),D,!1),q>0){if(q&16)oe(W,K,se,z,M);else if(q&2&&K.class!==se.class&&o(W,"class",null,se.class,M),q&4&&o(W,"style",K.style,se.style,M),q&8){const ve=h.dynamicProps;for(let Me=0;Me<ve.length;Me++){const Te=ve[Me],Ne=K[Te],qe=se[Te];(qe!==Ne||Te==="value")&&o(W,Te,Ne,qe,M,z)}}q&1&&f.children!==h.children&&u(W,h.children)}else!H&&B==null&&oe(W,K,se,z,M);((ce=se.onVnodeUpdated)||ne)&&ot(()=>{ce&&Ct(ce,z,h,f),ne&&on(h,f,z,"updated")},R)},ee=(f,h,z,R,M,D,H)=>{for(let W=0;W<h.length;W++){const q=f[W],B=h[W],ne=q.el||Ns(q),K=ne&&(q.type===pe||!pn(q,B)||q.shapeFlag&198)?d(ne):z;k(q,B,K,null,R,M,D,H,!0)}},oe=(f,h,z,R,M)=>{if(h!==z){if(h!==$e)for(const D in h)!Vn(D)&&!(D in z)&&o(f,D,h[D],null,M,R);for(const D in z){if(Vn(D))continue;const H=z[D],W=h[D];H!==W&&D!=="value"&&o(f,D,W,H,M,R)}"value"in z&&o(f,"value",h.value,z.value,M)}},G=(f,h,z,R,M,D,H,W,q)=>{const B=h.el=f?f.el:a(""),ne=h.anchor=f?f.anchor:a("");let{patchFlag:K,dynamicChildren:se,slotScopeIds:ce}=h;ce&&(W=W?W.concat(ce):ce),f==null?(r(B,z,R),r(ne,z,R),L(h.children||[],z,ne,M,D,H,W,q)):K>0&&K&64&&se&&f.dynamicChildren&&f.dynamicChildren.length===se.length?(ee(f.dynamicChildren,se,z,M,D,H,W),(h.key!=null||M&&h===M.subTree)&&Za(f,h,!0)):C(f,h,z,ne,M,D,H,W,q)},ue=(f,h,z,R,M,D,H,W,q)=>{h.slotScopeIds=W,f==null?h.shapeFlag&512?M.ctx.activate(h,z,R,H,q):Ae(h,z,R,M,D,H,q):Le(f,h,q)},Ae=(f,h,z,R,M,D,H)=>{const W=f.component=Ed(f,R,M);if(es(f)&&(W.ctx.renderer=V),Pd(W,!1,H),W.asyncDep){if(M&&M.registerDep(W,ge,H,D),!f.el){const q=W.subTree=v(Ke);$(null,q,h,z),f.placeholder=q.el}}else ge(W,f,h,z,M,D,H)},Le=(f,h,z)=>{const R=h.component=f.component;if(gd(f,h,z))if(R.asyncDep&&!R.asyncResolved){h.el=f.el,h.placeholder=f.placeholder,ae(R,h,z);return}else R.next=h,R.update();else h.el=f.el,h.placeholder=f.placeholder,R.vnode=h},ge=(f,h,z,R,M,D,H)=>{const W=()=>{if(f.isMounted){let{next:K,bu:se,u:ce,parent:ve,vnode:Me}=f;{const zt=Ja(f);if(zt){K&&(K.el=Me.el,ae(f,K,H)),zt.asyncDep.then(()=>{ot(()=>{f.isUnmounted||B()},M)});return}}let Te=K,Ne;an(f,!1),K?(K.el=Me.el,ae(f,K,H)):K=Me,se&&yr(se),(Ne=K.props&&K.props.onVnodeBeforeUpdate)&&Ct(Ne,ve,K,Me),an(f,!0);const qe=Ho(f),kt=f.subTree;f.subTree=qe,k(kt,qe,d(kt.el),E(kt),f,M,D),K.el=qe.el,Te===null&&hd(f,qe.el),ce&&ot(ce,M),(Ne=K.props&&K.props.onVnodeUpdated)&&ot(()=>Ct(Ne,ve,K,Me),M)}else{let K;const{el:se,props:ce}=h,{bm:ve,m:Me,parent:Te,root:Ne,type:qe}=f,kt=_n(h);an(f,!1),ve&&yr(ve),!kt&&(K=ce&&ce.onVnodeBeforeMount)&&Ct(K,Te,h),an(f,!0);{Ne.ce&&Ne.ce._hasShadowRoot()&&Ne.ce._injectChildStyle(qe,f.parent?f.parent.type:void 0);const zt=f.subTree=Ho(f);k(null,zt,z,R,f,M,D),h.el=zt.el}if(Me&&ot(Me,M),!kt&&(K=ce&&ce.onVnodeMounted)){const zt=h;ot(()=>Ct(K,Te,zt),M)}(h.shapeFlag&256||Te&&_n(Te.vnode)&&Te.vnode.shapeFlag&256)&&f.a&&ot(f.a,M),f.isMounted=!0,h=z=R=null}};f.scope.on();const q=f.effect=new ea(W);f.scope.off();const B=f.update=q.run.bind(q),ne=f.job=q.runIfDirty.bind(q);ne.i=f,ne.id=f.uid,q.scheduler=()=>go(ne),an(f,!0),B()},ae=(f,h,z)=>{h.component=f;const R=f.vnode.props;f.vnode=h,f.next=null,xd(f,h.props,R,z),kd(f,h.children,z),Et(),ya(f),Pt()},C=(f,h,z,R,M,D,H,W,q=!1)=>{const B=f&&f.children,ne=f?f.shapeFlag:0,K=h.children,{patchFlag:se,shapeFlag:ce}=h;if(se>0){if(se&128){F(B,K,z,R,M,D,H,W,q);return}else if(se&256){Ee(B,K,z,R,M,D,H,W,q);return}}ce&8?(ne&16&&xe(B,M,D),K!==B&&u(z,K)):ne&16?ce&16?F(B,K,z,R,M,D,H,W,q):xe(B,M,D,!0):(ne&8&&u(z,""),ce&16&&L(K,z,R,M,D,H,W,q))},Ee=(f,h,z,R,M,D,H,W,q)=>{f=f||fn,h=h||fn;const B=f.length,ne=h.length,K=Math.min(B,ne);let se;for(se=0;se<K;se++){const ce=h[se]=q?Nt(h[se]):Tt(h[se]);k(f[se],ce,z,null,M,D,H,W,q)}B>ne?xe(f,M,D,!0,!1,K):L(h,z,R,M,D,H,W,q,K)},F=(f,h,z,R,M,D,H,W,q)=>{let B=0;const ne=h.length;let K=f.length-1,se=ne-1;for(;B<=K&&B<=se;){const ce=f[B],ve=h[B]=q?Nt(h[B]):Tt(h[B]);if(pn(ce,ve))k(ce,ve,z,null,M,D,H,W,q);else break;B++}for(;B<=K&&B<=se;){const ce=f[K],ve=h[se]=q?Nt(h[se]):Tt(h[se]);if(pn(ce,ve))k(ce,ve,z,null,M,D,H,W,q);else break;K--,se--}if(B>K){if(B<=se){const ce=se+1,ve=ce<ne?h[ce].el:R;for(;B<=se;)k(null,h[B]=q?Nt(h[B]):Tt(h[B]),z,ve,M,D,H,W,q),B++}}else if(B>se)for(;B<=K;)he(f[B],M,D,!0),B++;else{const ce=B,ve=B,Me=new Map;for(B=ve;B<=se;B++){const lt=h[B]=q?Nt(h[B]):Tt(h[B]);lt.key!=null&&Me.set(lt.key,B)}let Te,Ne=0;const qe=se-ve+1;let kt=!1,zt=0;const $n=new Array(qe);for(B=0;B<qe;B++)$n[B]=0;for(B=ce;B<=K;B++){const lt=f[B];if(Ne>=qe){he(lt,M,D,!0);continue}let _t;if(lt.key!=null)_t=Me.get(lt.key);else for(Te=ve;Te<=se;Te++)if($n[Te-ve]===0&&pn(lt,h[Te])){_t=Te;break}_t===void 0?he(lt,M,D,!0):($n[_t-ve]=B+1,_t>=zt?zt=_t:kt=!0,k(lt,h[_t],z,null,M,D,H,W,q),Ne++)}const So=kt?Sd($n):fn;for(Te=So.length-1,B=qe-1;B>=0;B--){const lt=ve+B,_t=h[lt],Ao=h[lt+1],Ro=lt+1<ne?Ao.el||Ns(Ao):R;$n[B]===0?k(null,_t,z,Ro,M,D,H,W,q):kt&&(Te<0||B!==So[Te]?re(_t,z,Ro,2):Te--)}}},re=(f,h,z,R,M=null)=>{const{el:D,type:H,transition:W,children:q,shapeFlag:B}=f;if(B&6){re(f.component.subTree,h,z,R);return}if(B&128){f.suspense.move(h,z,R);return}if(B&64){H.move(f,h,z,V);return}if(H===pe){r(D,h,z);for(let K=0;K<q.length;K++)re(q[K],h,z,R);r(f.anchor,h,z);return}if(H===zr){x(f,h,z);return}if(R!==2&&B&1&&W)if(R===0)W.persisted&&!D[ut]?r(D,h,z):(W.beforeEnter(D),r(D,h,z),ot(()=>W.enter(D),M));else{const{leave:K,delayLeave:se,afterLeave:ce}=W,ve=()=>{f.ctx.isUnmounted?s(D):r(D,h,z)},Me=()=>{const Te=D._isLeaving||!!D[ut];D._isLeaving&&D[ut](!0),W.persisted&&!Te?ve():K(D,()=>{ve(),ce&&ce()})};se?se(D,ve,Me):Me()}else r(D,h,z)},he=(f,h,z,R=!1,M=!1)=>{const{type:D,props:H,ref:W,children:q,dynamicChildren:B,shapeFlag:ne,patchFlag:K,dirs:se,cacheIndex:ce,memo:ve}=f;if((K===-2||B&&B.hasOnce)&&(M=!1),W!=null&&(Et(),Un(W,null,z,f,!0),Pt()),ce!=null&&(!f.ctx||f.ctx===h)&&(h.renderCache[ce]=void 0),ne&256){h.ctx.deactivate(f);return}const Me=ne&1&&se,Te=!_n(f);let Ne;if(Te&&(Ne=H&&H.onVnodeBeforeUnmount)&&Ct(Ne,h,f),ne&6)Re(f.component,z,R);else{if(ne&128){f.suspense.unmount(z,R);return}Me&&on(f,null,h,"beforeUnmount"),ne&64?f.type.remove(f,h,z,V,R):B&&!B.hasOnce&&(D!==pe||K>0&&K&64)?xe(B,h,z,!1,!0):(D===pe&&K&384||!M&&ne&16)&&xe(q,h,z),R&&ht(f)}const qe=ve!=null&&ce==null;(Te&&(Ne=H&&H.onVnodeUnmounted)||Me||qe)&&ot(()=>{Ne&&Ct(Ne,h,f),Me&&on(f,null,h,"unmounted"),qe&&(f.el=null)},z)},ht=f=>{const{type:h,el:z,anchor:R,transition:M}=f,D=h===pe;if(D&&!M){Be(z,R);return}if(h===zr){y(f),M&&!M.persisted&&M.afterLeave&&M.afterLeave();return}const H=D?Qn(f):f,W=()=>{D?d(z)&&Be(z,R):s(z),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(H&&H.shapeFlag&1&&M&&!M.persisted){const{leave:q,delayLeave:B}=M,ne=H.el,K=()=>q(ne,W);B?B(ne,W,K):K()}else W()},Be=(f,h)=>{let z;for(;f!==h;)z=m(f),s(f),f=z;s(h)},Re=(f,h,z)=>{const{bum:R,scope:M,job:D,subTree:H,um:W,m:q,a:B}=f;qo(q),qo(B),R&&yr(R),M.stop(),D?(D.flags|=8,he(H,f,h,z)):f.vnode.el&&H&&(H.transition=f.vnode.transition,he(H,f,h,z)),W&&ot(W,h),ot(()=>{f.isUnmounted=!0},h)},xe=(f,h,z,R=!1,M=!1,D=0)=>{for(let H=D;H<f.length;H++)he(f[H],h,z,R,M)},E=f=>{if(f.shapeFlag&6)return E(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=m(f.anchor||f.el),z=h&&h[Vc];return z?m(z):h},Y=(f,h,z)=>{const R=f&&h._vnode?void 0:f&&f.component?f.component.uid:$d();jc(()=>{f==null?h._vnode&&he(h._vnode,null,null,!0):k(h._vnode||null,f,h,null,null,null,z),h._vnode=f},R)},V={p:k,um:he,m:re,r:ht,mt:Ae,mc:L,pc:C,pbc:ee,n:E,o:e};return{render:Y,hydrate:void 0,createApp:cd(Y)}}function gs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function an({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Cd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Za(e,t,n=!1){const r=e.children,s=t.children;if(ie(r)&&ie(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=Nt(s[o]),a.el=i.el),!n&&a.patchFlag!==-2&&Za(i,a)),a.type===rs&&(a.patchFlag===-1&&(a=s[o]=Nt(a)),a.el=i.el),a.type===Ke&&!a.el&&(a.el=i.el)}}function Sd(e){const t=e.slice(),n=[0];let r,s,o,i,a;const l=e.length;for(r=0;r<l;r++){const p=e[r];if(p!==0){if(s=n[n.length-1],e[s]<p){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<p?o=a+1:i=a;p<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function Ja(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ja(t)}function qo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ns(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Ns(t.subTree):null}const Qa=e=>e.__isSuspense;function Ad(e,t){t&&t.pendingBranch?ie(e)?t.effects.push(...e):t.effects.push(e):Oc(e)}const pe=Symbol.for("v-fgt"),rs=Symbol.for("v-txt"),Ke=Symbol.for("v-cmt"),zr=Symbol.for("v-stc"),Gt=[];let ct=null;function w(e=!1){Gt.push(ct=e?null:[])}function vo(){Gt.pop(),ct=Gt[Gt.length-1]||null}let er=1;function Fr(e,t=!1){er+=e,e<0&&ct&&t&&(ct.hasOnce=!0)}function el(e){return e.dynamicChildren=er>0?ct||fn:null,vo(),er>0&&ct&&ct.push(e),e}function _(e,t,n,r,s,o){return el(c(e,t,n,r,s,o,!0))}function ye(e,t,n,r,s){return el(v(e,t,n,r,s,!0))}function Rn(e){return e?e.__v_isVNode===!0:!1}function pn(e,t){return e.type===t.type&&e.key===t.key}const tl=({key:e})=>e??null,_r=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Oe(e)||Je(e)||de(e)?{i:Xe,r:e,k:t,f:!!n}:e:null);function c(e,t=null,n=null,r=0,s=null,o=e===pe?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&tl(t),ref:t&&_r(t),scopeId:za,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xe};return a?(Lr(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=Oe(n)?8:16),er>0&&!i&&ct&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&ct.push(l),l}const v=Rd;function Rd(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===Pa)&&(e=Ke),Rn(e)){const a=nn(e,t,!0);return n&&Lr(a,n),er>0&&!o&&ct&&(a.shapeFlag&6?ct[ct.indexOf(e)]=a:ct.push(a)),a.patchFlag=-2,a}if(Dd(e)&&(e=e.__vccOpts),t){t=Td(t);let{class:a,style:l}=t;a&&!Oe(a)&&(t.class=j(a)),Se(l)&&(fo(l)&&!ie(l)&&(l=He({},l)),t.style=Ie(l))}const i=Oe(e)?1:Qa(e)?128:Qr(e)?64:Se(e)?4:de(e)?2:0;return c(e,t,n,r,s,i,o,!0)}function Td(e){return e?fo(e)||Ua(e)?He({},e):e:null}function nn(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:i,children:a,transition:l}=e,p=t?Id(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&tl(p),ref:t&&t.ref?n&&o?ie(o)?o.concat(_r(t)):[o,_r(t)]:_r(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&nn(e.ssContent),ssFallback:e.ssFallback&&nn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&r&&An(u,l.clone(u)),u}function Ve(e=" ",t=0){return v(rs,null,e,t)}function Vs(e,t){const n=v(zr,null,e);return n.staticCount=t,n}function be(e="",t=!1){return t?(w(),ye(Ke,null,e)):v(Ke,null,e)}function Tt(e){return e==null||typeof e=="boolean"?v(Ke):ie(e)?v(pe,null,e.slice()):Rn(e)?Nt(e):v(rs,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:nn(e)}function Lr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ie(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Lr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Ua(t)?t._ctx=Xe:s===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(de(t)){if(r&65){Lr(e,{default:t});return}t={default:t,_ctx:Xe},n=32}else t=String(t),r&64?(n=16,t=[Ve(t)]):n=8;e.children=t,e.shapeFlag|=n}function Id(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=j([t.class,r.class]));else if(s==="style")t.style=Ie([t.style,r.style]);else if(Gr(s)){const o=t[s],i=r[s];i&&o!==i&&!(ie(o)&&o.includes(i))?t[s]=o?[].concat(o,i):i:i==null&&o==null&&!Ur(s)&&(t[s]=i)}else s!==""&&(t[s]=r[s])}return t}function Ct(e,t,n,r=null){mt(e,t,7,[n,r])}const Md=Da();let nl=0;function $d(){return nl}function Ed(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Md,o={uid:nl++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wa(r,s),emitsOptions:Ba(r,s),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:r.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ud.bind(null,o),e.ce&&e.ce(o),o}let Ze=null;const yo=()=>Ze||Xe;let Or,tr;{const e=Xr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};Or=t("__VUE_INSTANCE_SETTERS__",n=>Ze=n),tr=t("__VUE_SSR_SETTERS__",n=>nr=n)}const cr=e=>{const t=Ze;return Or(e),e.scope.on(),()=>{e.scope.off(),Or(t)}},Wo=()=>{Ze&&Ze.scope.off(),Or(null)};function rl(e){return e.vnode.shapeFlag&4}let nr=!1;function Pd(e,t=!1,n=!1){t&&tr(t);const{props:r,children:s}=e.vnode,o=rl(e);bd(e,r,o,t),wd(e,s,n||t);const i=o?Fd(e,t):void 0;return t&&tr(!1),i}function Fd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,nd);const{setup:r}=n;if(r){Et();const s=e.setupContext=r.length>1?Od(e):null,o=cr(e),i=ar(r,e,0,[e.props,s]),a=Wi(i);if(Pt(),o(),(a||e.sp)&&!_n(e)&&Ia(e),a){if(i.then(Wo,Wo),t)return i.then(l=>{tr(!0);try{Xo(e,l,t)}finally{tr(!1)}}).catch(l=>{Jr(l,e,0)});e.asyncDep=i}else Xo(e,i)}else sl(e)}function Xo(e,t,n){de(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Se(t)&&(e.setupState=ba(t)),sl(e)}function sl(e,t,n){const r=e.type;e.render||(e.render=r.render||Mt);{const s=cr(e);Et();try{rd(e)}finally{Pt(),s()}}}const Ld={get(e,t){return Ye(e,"get",""),e[t]}};function Od(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ld),slots:e.slots,emit:e.emit,expose:t}}function ss(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ba(Ac(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qn)return qn[n](e)},has(t,n){return n in t||n in qn}})):e.proxy}function jd(e,t=!0){return de(e)?e.displayName||e.name:e.name||t&&e.__name}function Dd(e){return de(e)&&"__vccOpts"in e}const Ce=(e,t)=>$c(e,t,nr);function Tn(e,t,n){try{Fr(-1);const r=arguments.length;return r===2?Se(t)&&!ie(t)?Rn(t)?v(e,null,[t]):v(e,t):v(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rn(n)&&(n=[n]),v(e,t,n))}finally{Fr(1)}}const Bd="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hs;const Ko=typeof window<"u"&&window.trustedTypes;if(Ko)try{Hs=Ko.createPolicy("vue",{createHTML:e=>e})}catch{}const ol=Hs?e=>Hs.createHTML(e):e=>e,Nd="http://www.w3.org/2000/svg",Vd="http://www.w3.org/1998/Math/MathML",Bt=typeof document<"u"?document:null,Yo=Bt&&Bt.createElement("template"),Hd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Bt.createElementNS(Nd,e):t==="mathml"?Bt.createElementNS(Vd,e):n?Bt.createElement(e,{is:n}):Bt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Bt.createTextNode(e),createComment:e=>Bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{Yo.innerHTML=ol(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Yo.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Wt="transition",Fn="animation",rr=Symbol("_vtc"),il={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gd=He({},Sa,il),Ud=e=>(e.displayName="Transition",e.props=Gd,e),xn=Ud((e,{slots:t})=>Tn(Uc,qd(e),t)),ln=(e,t=[])=>{ie(e)?e.forEach(n=>n(...t)):e&&e(...t)},Zo=e=>e?ie(e)?e.some(t=>t.length>1):e.length>1:!1;function qd(e){const t={};for(const G in e)G in il||(t[G]=e[G]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:p=i,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,A=Wd(s),k=A&&A[0],T=A&&A[1],{onBeforeEnter:$,onEnter:b,onEnterCancelled:x,onLeave:y,onLeaveCancelled:I,onBeforeAppear:P=$,onAppear:N=b,onAppearCancelled:L=x}=t,O=(G,ue,Ae,Le)=>{G._enterCancelled=Le,cn(G,ue?u:a),cn(G,ue?p:i),Ae&&Ae()},ee=(G,ue)=>{G._isLeaving=!1,cn(G,d),cn(G,g),cn(G,m),ue&&ue()},oe=G=>(ue,Ae)=>{const Le=G?N:b,ge=()=>O(ue,G,Ae);ln(Le,[ue,ge]),Jo(()=>{cn(ue,G?l:o),Ot(ue,G?u:a),Zo(Le)||Qo(ue,r,k,ge)})};return He(t,{onBeforeEnter(G){ln($,[G]),Ot(G,o),Ot(G,i)},onBeforeAppear(G){ln(P,[G]),Ot(G,l),Ot(G,p)},onEnter:oe(!1),onAppear:oe(!0),onLeave(G,ue){G._isLeaving=!0;const Ae=()=>ee(G,ue);Ot(G,d),G._enterCancelled?(Ot(G,m),ni(G)):(ni(G),Ot(G,m)),Jo(()=>{G._isLeaving&&(cn(G,d),Ot(G,g),Zo(y)||Qo(G,r,T,Ae))}),ln(y,[G,Ae])},onEnterCancelled(G){O(G,!1,void 0,!0),ln(x,[G])},onAppearCancelled(G){O(G,!0,void 0,!0),ln(L,[G])},onLeaveCancelled(G){ee(G),ln(I,[G])}})}function Wd(e){if(e==null)return null;if(Se(e))return[hs(e.enter),hs(e.leave)];{const t=hs(e);return[t,t]}}function hs(e){return ec(e)}function Ot(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[rr]||(e[rr]=new Set)).add(t)}function cn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[rr];n&&(n.delete(t),n.size||(e[rr]=void 0))}function Jo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Xd=0;function Qo(e,t,n,r){const s=e._endId=++Xd,o=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(o,n);const{type:i,timeout:a,propCount:l}=Kd(e,t);if(!i)return r();const p=i+"end";let u=0;const d=()=>{e.removeEventListener(p,m),o()},m=g=>{g.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),e.addEventListener(p,m)}function Kd(e,t){const n=window.getComputedStyle(e),r=A=>(n[A]||"").split(", "),s=r(`${Wt}Delay`),o=r(`${Wt}Duration`),i=ei(s,o),a=r(`${Fn}Delay`),l=r(`${Fn}Duration`),p=ei(a,l);let u=null,d=0,m=0;t===Wt?i>0&&(u=Wt,d=i,m=o.length):t===Fn?p>0&&(u=Fn,d=p,m=l.length):(d=Math.max(i,p),u=d>0?i>p?Wt:Fn:null,m=u?u===Wt?o.length:l.length:0);const g=u===Wt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Wt}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:g}}function ei(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ti(n)+ti(e[r])))}function ti(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ni(e){return(e?e.ownerDocument:document).body.offsetHeight}function Yd(e,t,n){const r=e[rr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const jr=Symbol("_vod"),al=Symbol("_vsh"),bs={name:"show",beforeMount(e,{value:t},{transition:n}){e[jr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Ln(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Ln(e,!0),r.enter(e)):r.leave(e,()=>{Ln(e,!1)}):Ln(e,t))},beforeUnmount(e,{value:t}){Ln(e,t)}};function Ln(e,t){e.style.display=t?e[jr]:"none",e[al]=!t}const Zd=Symbol(""),Jd=/(?:^|;)\s*display\s*:/;function Qd(e,t,n){const r=e.style,s=Oe(n);let o=!1;if(n&&!s){if(t)if(Oe(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Nn(r,a,"")}else for(const i in t)n[i]==null&&Nn(r,i,"");for(const i in n){i==="display"&&(o=!0);const a=n[i];a!=null?tu(e,i,!Oe(t)&&t?t[i]:void 0,a)||Nn(r,i,a):Nn(r,i,"")}}else if(s){if(t!==n){const i=r[Zd];i&&(n+=";"+i),r.cssText=n,o=Jd.test(n)}}else t&&e.removeAttribute("style");jr in e&&((!s||t!==n)&&(e[jr]=o?r.display:""),e[al]&&(r.display="none"))}const fr=/\s*!important$/;function Nn(e,t,n){if(ie(n))n.forEach(r=>Nn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))fr.test(n)?e.setProperty(t,n.replace(fr,""),"important"):e.setProperty(t,n);else{const r=eu(e,t);fr.test(n)?e.setProperty(bn(r),n.replace(fr,""),"important"):e[r]=n}}const ri=["Webkit","Moz","ms"],xs={};function eu(e,t){const n=xs[t];if(n)return n;let r=st(t);if(r!=="filter"&&r in e)return xs[t]=r;r=Wr(r);for(let s=0;s<ri.length;s++){const o=ri[s]+r;if(o in e)return xs[t]=o}return t}function tu(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Oe(r)&&n===r}const si="http://www.w3.org/1999/xlink";function oi(e,t,n,r,s,o=ic(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(si,t.slice(6,t.length)):e.setAttributeNS(si,t,n):n==null||o&&!Zi(n)?e.removeAttribute(t):e.setAttribute(t,o?"":yt(n)?String(n):n)}function ii(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ol(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Zi(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(s||t)}function kn(e,t,n,r){e.addEventListener(t,n,r)}function nu(e,t,n,r){e.removeEventListener(t,n,r)}const ai=Symbol("_vei");function ru(e,t,n,r,s=null){const o=e[ai]||(e[ai]={}),i=o[t];if(r&&i)i.value=r;else{const[a,l]=iu(t);if(r){const p=o[t]=cu(r,s);kn(e,a,p,l)}else i&&(nu(e,a,i,l),o[t]=void 0)}}const su=/(Once|Passive|Capture)$/,ou=/^on:?(?:Once|Passive|Capture)$/;function iu(e){let t,n;for(;(n=e.match(su))&&!ou.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):bn(e.slice(2)),t]}let vs=0;const au=Promise.resolve(),lu=()=>vs||(au.then(()=>vs=0),vs=Date.now());function cu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ie(s)){const o=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{o.call(r),r._stopped=!0};const i=s.slice(),a=[r];for(let l=0;l<i.length&&!r._stopped;l++){const p=i[l];p&&mt(p,t,5,a)}}else mt(s,t,5,[r])};return n.value=e,n.attached=lu(),n}const li=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,du=(e,t,n,r,s,o)=>{const i=s==="svg";t==="class"?Yd(e,r,i):t==="style"?Qd(e,n,r):Gr(t)?Ur(t)||ru(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):uu(e,t,r,i))?(ii(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&oi(e,t,r,i,o,t!=="value")):e._isVueCE&&(pu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Oe(r)))?ii(e,st(t),r,o,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),oi(e,t,r,i))};function uu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&li(t)&&de(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return li(t)&&Oe(n)?!1:t in e}function pu(e,t){const n=e._def.props;if(!n)return!1;const r=st(t);return Array.isArray(n)?n.some(s=>st(s)===r):Object.keys(n).some(s=>st(s)===r)}const ci=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ie(t)?n=>yr(t,n):t};function fu(e){e.target.composing=!0}function di(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const mr=Symbol("_assign"),gr=Symbol("_initialValue");function ys(e,t,n){return t&&(e=e.trim()),n&&(e=oo(e)),e}const mu={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e.parentNode&&(e.type==="text"?e[gr]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[gr]=e.defaultValue.replace(/\r\n?/g,`
`))),e[mr]=ci(s);const o=r||s.props&&s.props.type==="number";kn(e,t?"change":"input",i=>{i.target.composing||e[mr](ys(e.value,n,o))}),(n||o)&&kn(e,"change",()=>{e.value=ys(e.value,n,o)}),t||(kn(e,"compositionstart",fu),kn(e,"compositionend",di),kn(e,"change",di))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const s=t??"",o=e[gr];delete e[gr],o!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==o?e[mr](ys(e.value,n,r)):e.value=s},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},i){if(e[mr]=ci(i),e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?oo(e.value):e.value,l=t??"";if(a===l)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===l)||(e.value=l)}},gu=["ctrl","shift","alt","meta"],hu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>gu.some(n=>e[`${n}Key`]&&!t.includes(n))},Dr=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((s,...o)=>{for(let i=0;i<t.length;i++){const a=hu[t[i]];if(a&&a(s,t))return}return e(s,...o)}))},bu=He({patchProp:du},Hd);let ui;function xu(){return ui||(ui=zd(bu))}const vu=((...e)=>{const t=xu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=wu(r);if(!s)return;const o=t._component;!de(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const i=n(s,!1,yu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t});function yu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function wu(e){return Oe(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:r,iconNode:s,name:o,class:i,...a},{slots:l})=>Tn("svg",{...hr,width:e||hr.width,height:e||hr.height,stroke:r||hr.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${ku(o??"icon")}`],...a},[...s.map(p=>Tn(...p)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(e,t)=>(n,{slots:r})=>Tn(zu,{...n,iconNode:t,name:e},r);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=le("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=le("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=le("ArrowUpIcon",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=le("BellIcon",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=le("BookmarkIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=le("BotIcon",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=le("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=le("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=le("ChevronsLeftRightIcon",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=le("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=le("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=le("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=le("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=le("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=le("CompassIcon",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=le("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=le("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=le("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=le("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=le("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=le("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=le("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=le("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=le("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=le("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=le("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=le("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=le("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=le("PaletteIcon",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=le("PaperclipIcon",[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=le("PinIcon",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=le("RepeatIcon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=le("RocketIcon",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=le("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=le("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=le("SettingsIcon",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=le("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=le("SmilePlusIcon",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=le("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=le("SquareIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=le("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=le("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=le("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=le("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=le("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=le("WrenchIcon",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=le("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=le("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Wu=fe({__name:"ThemeToggle",setup(e){const t=X(!0);function n(){t.value=!t.value,t.value?(document.documentElement.classList.add("dark"),localStorage.setItem("aura-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("aura-theme","light"))}return at(()=>{const r=localStorage.getItem("aura-theme");r?t.value=r==="dark":t.value=window.matchMedia("(prefers-color-scheme: dark)").matches,t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),(r,s)=>(w(),_("button",{type:"button",class:"relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"切换亮色 / 暗色模式",onClick:n},[t.value?(w(),ye(S(Gu),{key:0,class:"h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400"})):(w(),ye(S(Eu),{key:1,class:"h-4 w-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-indigo-600"}))]))}}),Xu={class:"relative inline-flex items-center"},Ku={key:0,class:"absolute right-0 top-full mt-2 w-44 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-xl backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 select-none space-y-0.5"},Yu=["onClick"],Zu={class:"flex items-center gap-2"},Ju=fe({__name:"AccentToggle",setup(e){const t=[{id:"blue",name:"极客蓝",color:"#3b82f6"},{id:"violet",name:"科技紫",color:"#8b5cf6"},{id:"green",name:"矩阵绿",color:"#10b981"},{id:"amber",name:"琥珀金",color:"#f59e0b"},{id:"orange",name:"活力橙",color:"#f97316"},{id:"coral",name:"珊瑚粉",color:"#f43f5e"},{id:"rose",name:"玫瑰红",color:"#ec4899"},{id:"neutral",name:"钛金灰",color:"#71717a"}],n=X("blue"),r=X(!1);function s(o){n.value=o,document.documentElement.setAttribute("data-accent",o),localStorage.setItem("aura-accent",o),r.value=!1}return at(()=>{const o=localStorage.getItem("aura-accent")||"blue";s(o)}),(o,i)=>{var a;return w(),_("div",Xu,[c("button",{type:"button",onClick:i[0]||(i[0]=l=>r.value=!r.value),class:"flex h-9 items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 text-xs font-semibold text-zinc-700 shadow-xs transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer",title:"切换 8 大 Accent 主题色彩"},[v(S(Pu),{class:"h-3.5 w-3.5 text-blue-500"}),c("span",{class:"h-2.5 w-2.5 rounded-full shadow-2xs",style:Ie({backgroundColor:(a=t.find(l=>l.id===n.value))==null?void 0:a.color})},null,4),i[1]||(i[1]=c("span",{class:"hidden sm:inline text-[11px] font-mono"},"Accent",-1))]),v(xn,{name:"accent-pop"},{default:J(()=>[r.value?(w(),_("div",Ku,[i[2]||(i[2]=c("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," Design Token 强调色 ",-1)),(w(),_(pe,null,je(t,l=>c("button",{key:l.id,type:"button",onClick:p=>s(l.id),class:j(["flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer",n.value===l.id?"bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white font-bold":"text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800/60"])},[c("div",Zu,[c("span",{class:"h-3 w-3 rounded-full shadow-xs",style:Ie({backgroundColor:l.color})},null,4),c("span",null,U(l.name),1)]),n.value===l.id?(w(),ye(S(rn),{key:0,class:"h-3 w-3 text-blue-500"})):be("",!0)],10,Yu)),64))])):be("",!0)]),_:1})])}}}),Qe=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Qu=Qe(Ju,[["__scopeId","data-v-5501f3de"]]),Xs=[{id:"tactile-actions",name:"触觉反馈与原子操作套件",englishName:"Tactile & Actions Suite",description:"长按蓄力物理确认、原地渐变二次确认、物理微压与矢量形变操作矩阵",badgeColor:"text-rose-500 bg-rose-500/10 border-rose-500/20",iconName:"Zap"},{id:"ai-native",name:"AI 原生与智能体套件",englishName:"AI & Agent Suite",description:"面向大模型工作流、思考链路、代码终端与指令交互的原生动效矩阵",badgeColor:"text-sky-500 bg-sky-500/10 border-sky-500/20",iconName:"Bot"},{id:"interactive-nav",name:"交互与高阶导航套件",englishName:"Interactive & Navigation",description:"以余弦物理、流体胶囊指示器与视口裁切驱动的极佳手感交互",badgeColor:"text-blue-500 bg-blue-500/10 border-blue-500/20",iconName:"Compass"},{id:"space-3d",name:"空间与 3D 纵深套件",englishName:"3D Space & Atmosphere",description:"同心公转轨道、赛博网格、极光破晓天灯与粒子微光氛围",badgeColor:"text-indigo-500 bg-indigo-500/10 border-indigo-500/20",iconName:"Globe"},{id:"borders-cards",name:"流光卡片与微光边框套件",englishName:"Borders & Bento Cards",description:"沿着圆角边框流动的渐变光束与多维信息科技网格便当盒",badgeColor:"text-purple-500 bg-purple-500/10 border-purple-500/20",iconName:"Layers"},{id:"kinetic-typography",name:"文字与动态排版套件",englishName:"Kinetic Typography",description:"连续金属扫光、平滑毫秒数值翻滚与无限无缝平滑跑马灯",badgeColor:"text-emerald-500 bg-emerald-500/10 border-emerald-500/20",iconName:"Sparkles"}],Jt=[{id:"border-beam",name:"BorderBeam",title:"Border Beam（跑马流光渐变边框）",category:"Effect",suiteId:"borders-cards",description:"沿着容器圆角边框匀速流动的彩色流光光束。大模型生成状态、VIP 特权卡片、核心功能高亮的科技感标配。",componentFilename:"BorderBeam.vue",componentCode:`<script setup lang="ts">
import { computed, useId } from 'vue'
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
  glow?: boolean
  class?: string
}

const props = withDefaults(defineProps<BorderBeamProps>(), {
  borderWidth: 2,
  size: 20,
  duration: 6,
  colorFrom: '#38bdf8',
  colorTo: '#a855f7',
  delay: 0,
  reverse: false,
  borderRadius: 16,
  glow: true,
})

const id = useId()

const radius = computed(() => {
  if (typeof props.borderRadius === 'number') {
    return props.borderRadius
  }
  const parsed = parseFloat(props.borderRadius)
  return isNaN(parsed) ? 16 : parsed
})

const dashLength = computed(() => {
  if (props.size > 50) return 18
  return Math.min(Math.max(props.size, 5), 80)
})

const dashArray = computed(() => {
  return \`\${dashLength.value} \${100 - dashLength.value}\`
})

const animStyle = computed(() => ({
  animationDuration: \`\${props.duration}s\`,
  animationDelay: \`-\${props.delay}s\`,
  animationDirection: props.reverse ? 'reverse' : 'normal',
}))
<\/script>

<template>
  <div
    :class="
      cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] overflow-visible',
        props.class
      )
    "
  >
    <svg class="h-full w-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient :id="\`border-beam-grad-\${id}\`" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :stop-color="props.colorFrom" />
          <stop offset="100%" :stop-color="props.colorTo" />
        </linearGradient>
      </defs>

      <!-- 霓虹外泛光柔性图层 -->
      <rect
        v-if="props.glow"
        pathLength="100"
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        :rx="radius"
        :ry="radius"
        fill="none"
        :stroke="\`url(#border-beam-grad-\${id})\`"
        :stroke-width="props.borderWidth * 2"
        :stroke-dasharray="dashArray"
        stroke-linecap="round"
        opacity="0.45"
        class="border-beam-svg-motion blur-[3px]"
        :style="animStyle"
      />

      <!-- 核心纯正矢量描边（100% 顺滑贴合圆角弧线） -->
      <rect
        pathLength="100"
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        :rx="radius"
        :ry="radius"
        fill="none"
        :stroke="\`url(#border-beam-grad-\${id})\`"
        :stroke-width="props.borderWidth"
        :stroke-dasharray="dashArray"
        stroke-linecap="round"
        class="border-beam-svg-motion"
        :style="animStyle"
      />
    </svg>
  </div>
</template>

<style scoped>
.border-beam-svg-motion {
  animation: border-beam-stroke linear infinite;
  will-change: stroke-dashoffset;
}

@keyframes border-beam-stroke {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -100; }
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
</template>`,propsList:[{name:"size",type:"number",default:"80",description:"光束在边框上延伸的长度尺寸 (px)"},{name:"duration",type:"number",default:"6",description:"光束绕边框一周所需的时间 (秒)"},{name:"borderWidth",type:"number",default:"1.5",description:"流光边框的粗细 (px)"},{name:"colorFrom",type:"string",default:"'#ffaa40'",description:"流光起始渐变颜色"},{name:"colorTo",type:"string",default:"'#9c40ff'",description:"流光结束渐变颜色"},{name:"delay",type:"number",default:"0",description:"动效延迟启动秒数"},{name:"reverse",type:"boolean",default:"false",description:"是否逆时针方向流动"},{name:"borderRadius",type:"number | string",default:"16",description:"容器圆角半径，确保转角轨迹与容器完全重合不突兀"}]},{id:"bento-grid",name:"BentoGrid",title:"Bento Grid（便当盒栅格布局）",category:"Layout",suiteId:"borders-cards",description:"苹果官网风靡全球的模块化栅格布局。每个卡片内置鼠标跟随径向渐变光晕（Spotlight）与 Hover 悬浮展开效果。",componentFilename:"BentoGrid.vue",componentCode:`<!-- BentoGrid.vue 容器 -->
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
</template>`,propsList:[{name:"name",type:"string",default:"-",description:"BentoCard 卡片标题"},{name:"description",type:"string",default:"-",description:"BentoCard 卡片描述文字"},{name:"cta",type:"string",default:"''",description:"底部按钮引导文案"},{name:"href",type:"string",default:"''",description:"跳转链接地址"},{name:"spotlightRadius",type:"number",default:"300",description:"鼠标 Hover 聚光灯半径 (px)"}]},{id:"interactive-particles",name:"InteractiveParticles",title:"Interactive Particles（鼠标磁吸粒子光效背景）",category:"Background",suiteId:"interactive-nav",description:"采用原生 Canvas 2D 渲染的高性能动态粒子背景。支持物理引力排斥、粒子间柔和连线与 60fps 丝滑运行。",componentFilename:"InteractiveParticles.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"quantity",type:"number",default:"50",description:"画板粒子总数量"},{name:"speed",type:"number",default:"0.6",description:"粒子漫游的基础运动速度"},{name:"mouseRadius",type:"number",default:"100",description:"鼠标斥力感应范围 (px)"},{name:"connectLines",type:"boolean",default:"true",description:"粒子接近时是否绘制连接线"},{name:"color",type:"string",default:"''",description:"自定义粒子色彩（如 59, 130, 246 或 #38bdf8）"}]},{id:"retro-grid",name:"RetroGrid",title:"Retro Grid（复古科技网格）",category:"Background",suiteId:"space-3d",description:"3D 透视角度倾斜平移的无限赛博网格。原生支持明暗双模自适应线条，搭配顶部渐变柔和融入背景。",componentFilename:"RetroGrid.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"angle",type:"number",default:"65",description:"网格 3D 旋转倾角 (度)"},{name:"cellSize",type:"number",default:"60",description:"单个网格单元格大小 (px)"},{name:"opacity",type:"number",default:"0.5",description:"网格整体不透明度 (0 ~ 1)"},{name:"lightLineColor",type:"string",default:"'#cbd5e1'",description:"亮色模式下的线条颜色"},{name:"darkLineColor",type:"string",default:"'#334155'",description:"暗色模式下的线条颜色"}]},{id:"dot-pattern",name:"DotPattern",title:"Dot Pattern（复古科技波点底纹）",category:"Background",suiteId:"space-3d",description:"极客感十足的矢量 SVG 波点纹理。支持开启鼠标感应聚光灯图层，鼠标掠过时光晕浮现。",componentFilename:"DotPattern.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"width",type:"number",default:"20",description:"波点水平间距 (px)"},{name:"height",type:"number",default:"20",description:"波点垂直间距 (px)"},{name:"cr",type:"number",default:"1",description:"波点圆点半径 (px)"},{name:"glow",type:"boolean",default:"false",description:"是否开启鼠标跟随发光效果"}]},{id:"shiny-text",name:"ShinyText",title:"Shiny Text（微光划过文字）",category:"Text",suiteId:"kinetic-typography",description:"纯 CSS 硬件加速的金属微光划过动效。自动兼顾亮色（深灰+纯黑高光）与暗色（中灰+纯白高光），字迹永远清晰。",componentFilename:"ShinyText.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"text",type:"string",default:"''",description:"展示文本内容（也可使用默认 Slot）"},{name:"duration",type:"number",default:"3.5",description:"微光划过一周的秒数"},{name:"variant",type:"'white' | 'cyber'",default:"'white'",description:"流光配色：纯白光刃 (white) 或赛博蓝紫霓虹 (cyber)"}]},{id:"shimmer-button",name:"ShimmerButton",title:"Shimmer Button（微光流转科技按钮）",category:"Button",suiteId:"borders-cards",description:"专为 Hero 区域最高转化率打造的 CTA 按钮。边缘环绕 360° 旋转光晕，内置磨砂衬底与按压回弹触感。",componentFilename:"ShimmerButton.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"shimmerColor",type:"string",default:"'#38bdf8'",description:"旋转微光的颜色"},{name:"shimmerSize",type:"string",default:"'0.12em'",description:"微光边缘厚度"},{name:"shimmerDuration",type:"string",default:"'2.5s'",description:"360 度旋转耗时"},{name:"borderRadius",type:"string",default:"'9999px'",description:"按钮圆角大小"}]},{id:"marquee",name:"Marquee",title:"Marquee（无限平滑滚动的合作伙伴 Logo 墙）",category:"Layout",suiteId:"kinetic-typography",description:"纯 CSS 硬件加速的无限平滑跑马灯。内置鼠标悬浮暂停、反向滚动、多份克隆自适应大屏，不掉帧卡顿。",componentFilename:"Marquee.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"duration",type:"number",default:"30",description:"跑马灯循环一周秒数"},{name:"pauseOnHover",type:"boolean",default:"true",description:"鼠标悬停时是否暂停动画"},{name:"reverse",type:"boolean",default:"false",description:"是否反向滚动"},{name:"vertical",type:"boolean",default:"false",description:"是否为垂直滚动"},{name:"repeat",type:"number",default:"4",description:"克隆渲染份数，防止大屏空白"}]},{id:"meteors",name:"Meteors",title:"Meteors（赛博流星雨）",category:"Effect",suiteId:"space-3d",description:"纯 CSS 现代流星雨划过动效，带流光长尾羽翼与随机间隔延迟，暗黑科技卡片与首屏神级点缀。",componentFilename:"Meteors.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"number",type:"number",default:"20",description:"流星数量"},{name:"angle",type:"number",default:"215",description:"流星划落的倾角（度）"},{name:"minDelay",type:"number",default:"0.2",description:"最小动画延迟秒数"},{name:"maxDelay",type:"number",default:"1.2",description:"最大动画延迟秒数"},{name:"minDuration",type:"number",default:"2",description:"最快单颗流星飞过耗时（秒）"},{name:"maxDuration",type:"number",default:"8",description:"最慢单颗流星飞过耗时（秒）"}]},{id:"ripple",name:"Ripple",title:"Ripple（同心声波涟漪）",category:"Effect",suiteId:"space-3d",description:"由中心向外周循环脉冲扩散的多层同心圆涟漪，适配 AI 语音交互录音、雷达声呐扫描与核心头像高亮。",componentFilename:"Ripple.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"mainCircleSize",type:"number",default:"210",description:"中心最内层圆环直径 (px)"},{name:"mainCircleOpacity",type:"number",default:"0.24",description:"中心圆环不透明度"},{name:"numCircles",type:"number",default:"8",description:"同心波纹总环数"}]},{id:"number-ticker",name:"NumberTicker",title:"Number Ticker（平滑数字计数器）",category:"Text",suiteId:"kinetic-typography",description:"采用高阶 easeOutExpo 缓动曲线的平滑数字翻牌器，进入视口自动起跑，SaaS 核心关键业务指标必备。",componentFilename:"NumberTicker.vue",componentCode:`<script setup lang="ts">
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
    <div class="rounded-xl border border-zinc-200 dark:border-zinc-800 px-4 py-6 text-center">
      <div class="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 dark:text-sky-400 tracking-tight whitespace-nowrap">
        <NumberTicker :value="99.99" :decimal-places="2" />%
      </div>
      <p class="mt-2 text-xs text-zinc-500">SLA 生产高可用性</p>
    </div>
    <div class="rounded-xl border border-zinc-200 dark:border-zinc-800 px-4 py-6 text-center">
      <div class="text-xl sm:text-2xl lg:text-3xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight whitespace-nowrap">
        <NumberTicker :value="10000000" />+
      </div>
      <p class="mt-2 text-xs text-zinc-500">每日处理 Token 数量</p>
    </div>
    <div class="rounded-xl border border-zinc-200 dark:border-zinc-800 px-4 py-6 text-center">
      <div class="text-xl sm:text-2xl lg:text-3xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight whitespace-nowrap">
        <NumberTicker :value="12" />ms
      </div>
      <p class="mt-2 text-xs text-zinc-500">端到端流式推理延迟</p>
    </div>
  </div>
</template>`,propsList:[{name:"value",type:"number",default:"-",description:"目标跳动数字"},{name:"direction",type:"'up' | 'down'",default:"'up'",description:"递增跳动或倒计跳动"},{name:"duration",type:"number",default:"2",description:"动画时长（秒）"},{name:"delay",type:"number",default:"0",description:"动画启动延迟（秒）"},{name:"decimalPlaces",type:"number",default:"0",description:"保留小数位数"}]},{id:"animated-beam",name:"AnimatedBeam",title:"Animated Beam（多节点能量光束）",category:"Effect",suiteId:"borders-cards",description:"Magic UI 最具标志性的连线动效，在两个 DOM 节点之间自动计算贝塞尔曲线轨道，并驱动光球能量脉冲流动。",componentFilename:"AnimatedBeam.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"containerRef",type:"Ref<HTMLElement | null>",default:"-",description:"相对定位的父级容器 Ref"},{name:"fromRef",type:"Ref<HTMLElement | null>",default:"-",description:"连线起始节点 Ref"},{name:"toRef",type:"Ref<HTMLElement | null>",default:"-",description:"连线目标节点 Ref"},{name:"curvature",type:"number",default:"0",description:"曲线弧度弯曲量（0 为直线）"},{name:"reverse",type:"boolean",default:"false",description:"是否反向流动"},{name:"duration",type:"number",default:"3",description:"单颗能量球飞过耗时（秒）"},{name:"gradientStartColor",type:"string",default:"'#38bdf8'",description:"能量球高光起始颜色"},{name:"gradientStopColor",type:"string",default:"'#6366f1'",description:"能量球高光收尾颜色"}]},{id:"lamp-effect",name:"LampEffect",title:"Lamp Effect（极光天顶聚光灯）",category:"Layout",suiteId:"space-3d",description:"Aceternity UI 镇馆之宝，两道对称的极光天锥从天花板投下，营造大模型新品发布会般尊贵大气的 Hero 视觉舞台。",componentFilename:"LampEffect.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"glowColor",type:"string",default:"'#06b6d4'",description:"聚光灯主色调"}]},{id:"flickering-grid",name:"FlickeringGrid",title:"Flickering Grid（呼吸噪波微光网格）",category:"Background",suiteId:"space-3d",description:"Canvas 2D 原生微闪烁网格，每个小方格独立呼吸微光，营造赛博黑客帝国与智能矩阵氛围。",componentFilename:"FlickeringGrid.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"squareSize",type:"number",default:"4",description:"单个小方格尺寸 (px)"},{name:"gridGap",type:"number",default:"4",description:"小方块之间的间距 (px)"},{name:"flickerChance",type:"number",default:"0.3",description:"每帧方块明暗呼吸的概率"},{name:"maxOpacity",type:"number",default:"0.3",description:"方块闪烁的最大透明度"},{name:"color",type:"string",default:"自适应",description:"方块颜色 (HEX 或 RGB 字符串)"}]},{id:"dock",name:"Dock",title:"Dock（macOS 鱼眼放大交互栏）",category:"Interactive",suiteId:"interactive-nav",description:"基于余弦物理平滑衰减算法（Cosine Smooth Falloff）的仿 macOS 桌面底座交互栏。鼠标悬浮自然鱼眼无级平滑放大、气泡 Tooltip 自动跟随，支持方向底座与自由插槽定制。",componentFilename:"Dock.vue",componentCode:`<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'

export interface DockItem {
  id: string | number
  label?: string
  icon?: any
  onClick?: () => void
  href?: string
}

interface DockProps {
  items?: DockItem[]
  /** 默认图标尺寸 (px)，默认 44 */
  iconSize?: number
  /** 最大鱼眼放大尺寸 (px)，默认 68 */
  iconMagnification?: number
  /** 鼠标感应影响半径 (px)，默认 120 */
  iconDistance?: number
  /** 悬浮底座方向：bottom / top */
  direction?: 'bottom' | 'top' | 'middle'
  class?: string
}

const props = withDefaults(defineProps<DockProps>(), {
  iconSize: 44,
  iconMagnification: 68,
  iconDistance: 120,
  direction: 'bottom',
})

const dockRef = ref<HTMLDivElement | null>(null)
const mouseX = ref<number | null>(null)
const activeTooltip = ref<string | null>(null)

function handleMouseMove(e: MouseEvent) {
  mouseX.value = e.clientX
}

function handleMouseLeave() {
  mouseX.value = null
  activeTooltip.value = null
}

// 计算每个图标基于鼠标 X 轴距离的高斯平滑放大比例
function getItemScale(elementEl: HTMLElement | null): number {
  if (mouseX.value === null || !elementEl) return 1
  const rect = elementEl.getBoundingClientRect()
  const itemCenterX = rect.left + rect.width / 2
  const distance = Math.abs(mouseX.value - itemCenterX)

  if (distance > props.iconDistance) return 1

  // 余弦平滑插值函数 (Cosine Smooth Falloff)
  const norm = distance / props.iconDistance
  const scaleDelta = (props.iconMagnification - props.iconSize) / props.iconSize
  const cosFactor = 0.5 * (1 + Math.cos(norm * Math.PI))
  return 1 + scaleDelta * cosFactor
}

const itemRefs = ref<HTMLElement[]>([])
function setItemRef(el: any, index: number) {
  if (el) itemRefs.value[index] = el
}

function getItemSize(index: number): number {
  const el = itemRefs.value[index]
  const scale = getItemScale(el)
  return Math.round(props.iconSize * scale)
}
<\/script>

<template>
  <div
    ref="dockRef"
    :class="
      cn(
        'mx-auto flex h-16 items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/70 px-4 py-2 shadow-xl backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 transition-all duration-200 select-none',
        props.direction === 'bottom' && 'items-end',
        props.direction === 'top' && 'items-start',
        props.direction === 'middle' && 'items-center',
        props.class
      )
    "
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <template v-if="props.items && props.items.length > 0">
      <div
        v-for="(item, index) in props.items"
        :key="item.id"
        :ref="(el) => setItemRef(el, index)"
        class="group relative flex items-center justify-center cursor-pointer transition-all duration-100 ease-out"
        :style="{
          width: \`\${getItemSize(index)}px\`,
          height: \`\${getItemSize(index)}px\`,
        }"
        @mouseenter="activeTooltip = item.label || null"
        @click="item.onClick && item.onClick()"
      >
        <!-- 图标实体按钮 -->
        <component
          :is="item.href ? 'a' : 'button'"
          :href="item.href"
          :class="[
            'flex h-full w-full items-center justify-center rounded-2xl border transition-colors shadow-sm',
            'border-zinc-200/70 bg-white/90 text-zinc-700 hover:text-zinc-950',
            'dark:border-zinc-700/60 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:text-white',
          ]"
        >
          <component :is="item.icon" class="h-1/2 w-1/2 transition-transform duration-100" />
        </component>

        <!-- 悬浮微光气泡标签 -->
        <transition name="dock-fade">
          <div
            v-if="activeTooltip === item.label && item.label"
            class="pointer-events-none absolute -top-9 z-50 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-800/95 dark:text-zinc-200"
          >
            {{ item.label }}
          </div>
        </transition>

        <!-- 底部聚焦微光圆点 -->
        <span class="absolute -bottom-1.5 h-1 w-1 rounded-full bg-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-zinc-500" />
      </div>
    </template>

    <!-- 支持默认插槽方式自由排列 -->
    <slot v-else />
  </div>
</template>

<style scoped>
.dock-fade-enter-active,
.dock-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dock-fade-enter-from,
.dock-fade-leave-to {
  opacity: 0;
  transform: translateY(4px);
}
</style>
`,usageCode:`<script setup lang="ts">
import Dock from '@/components/ui/Dock.vue'
import { Home, Compass, Sparkles, Folder, Settings, Bell } from 'lucide-vue-next'

const items = [
  { id: 'home', label: '首页概览', icon: Home },
  { id: 'explore', label: '模型广场', icon: Compass },
  { id: 'agent', label: 'AI 智能体', icon: Sparkles },
  { id: 'files', label: '知识库', icon: Folder },
  { id: 'notice', label: '消息通知', icon: Bell },
  { id: 'settings', label: '偏好设置', icon: Settings },
]
<\/script>

<template>
  <div class="flex h-48 w-full items-end justify-center pb-6">
    <Dock :items="items" :icon-size="44" :icon-magnification="68" />
  </div>
</template>`,propsList:[{name:"items",type:"DockItem[]",default:"[]",description:"导航图标列表，包含 id, label, icon, onClick, href"},{name:"iconSize",type:"number",default:"44",description:"静止状态图标基础尺寸 (px)"},{name:"iconMagnification",type:"number",default:"68",description:"鼠标悬浮时最大鱼眼放大尺寸 (px)"},{name:"iconDistance",type:"number",default:"120",description:"余弦感应物理半径 (px)"},{name:"direction",type:"'bottom' | 'top' | 'middle'",default:"'bottom'",description:"底座停靠对齐方向"}]},{id:"orbit-logos",name:"OrbitLogos",title:"Orbit Logos（3D 同心环形轨道旋转图标）",category:"Effect",suiteId:"space-3d",description:"具有 CSS 3D 透视同心轨道旋转的图标/Logo 围绕动效。内置逆旋转自正补偿算法保持 Logo 始终端正朝上，支持虚线轨道、悬停阻尼暂停与多环嵌套。",componentFilename:"OrbitLogos.vue",componentCode:`<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface OrbitLogosProps {
  /** 轨道半径 (px)，默认 120 */
  radius?: number
  /** 旋转一圈耗时 (秒)，默认 20 */
  duration?: number
  /** 延迟秒数，默认 0 */
  delay?: number
  /** 是否反向公转，默认 false */
  reverse?: boolean
  /** 是否显示轨道底线，默认 true */
  path?: boolean
  /** 轨道底线颜色 */
  pathColor?: string
  /** 轨道底线线宽，默认 1 */
  pathWidth?: number
  /** 轨道倾斜角度 (deg)，0 为正圆俯视，正负值形成 3D 透视椭圆，默认 0 */
  tiltAngle?: number
  class?: string
}

const props = withDefaults(defineProps<OrbitLogosProps>(), {
  radius: 120,
  duration: 20,
  delay: 0,
  reverse: false,
  path: true,
  pathWidth: 1,
  tiltAngle: 0,
})

const orbitStyle = computed(() => ({
  '--radius': \`\${props.radius}px\`,
  '--duration': \`\${props.duration}s\`,
  '--delay': \`-\${props.delay}s\`,
  '--direction': props.reverse ? 'reverse' : 'normal',
  '--counter-direction': props.reverse ? 'normal' : 'reverse',
  '--tilt': \`\${props.tiltAngle}deg\`,
  width: \`\${props.radius * 2}px\`,
  height: \`\${props.radius * 2}px\`,
}))
<\/script>

<template>
  <div
    :style="orbitStyle"
    :class="
      cn(
        'pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full [transform-style:preserve-3d]',
        props.class
      )
    "
  >
    <!-- 轨道轮廓圆线 -->
    <svg
      v-if="props.path"
      class="pointer-events-none absolute inset-0 h-full w-full select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="stroke-zinc-300/60 dark:stroke-zinc-800/80 stroke-dashed"
        cx="50%"
        cy="50%"
        :r="props.radius"
        fill="none"
        :stroke="props.pathColor"
        :stroke-width="props.pathWidth"
        stroke-dasharray="4 4"
      />
    </svg>

    <!-- 围绕公转容器 (带悬停暂停与自身逆旋转自正) -->
    <div class="orbit-rotator pointer-events-auto h-full w-full">
      <div class="orbit-item pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.orbit-rotator {
  animation: orbit-spin var(--duration) linear infinite;
  animation-delay: var(--delay);
  animation-direction: var(--direction);
  transform-origin: center center;
}

.orbit-rotator:hover {
  animation-play-state: paused;
}

.orbit-item {
  animation: orbit-counter-spin var(--duration) linear infinite;
  animation-delay: var(--delay);
  animation-direction: var(--counter-direction);
}

.orbit-rotator:hover .orbit-item {
  animation-play-state: paused;
}

@keyframes orbit-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes orbit-counter-spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
</style>
`,usageCode:`<script setup lang="ts">
import OrbitLogos from '@/components/ui/OrbitLogos.vue'
import { Sparkles, Cpu, Globe, Database, Zap } from 'lucide-vue-next'
<\/script>

<template>
  <div class="relative flex h-80 w-full items-center justify-center overflow-hidden">
    <!-- 中心核心节点 -->
    <div class="z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-xl text-white">
      <Sparkles class="h-8 w-8" />
    </div>

    <!-- 内圈轨道 -->
    <OrbitLogos :radius="80" :duration="15">
      <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800 dark:bg-zinc-900 shadow-md text-sky-500">
        <Cpu class="h-5 w-5" />
      </div>
    </OrbitLogos>

    <!-- 外圈轨道 -->
    <OrbitLogos :radius="140" :duration="25" :reverse="true">
      <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800 dark:bg-zinc-900 shadow-md text-indigo-500">
        <Globe class="h-5 w-5" />
      </div>
    </OrbitLogos>
  </div>
</template>`,propsList:[{name:"radius",type:"number",default:"120",description:"轨道半径尺寸 (px)"},{name:"duration",type:"number",default:"20",description:"自转一圈耗时 (秒)"},{name:"delay",type:"number",default:"0",description:"轨道公转延迟或初始角度相位偏移 (秒)"},{name:"reverse",type:"boolean",default:"false",description:"是否逆时针反向公转"},{name:"path",type:"boolean",default:"true",description:"是否绘制虚线环形轨道底图"},{name:"pathColor",type:"string",default:"自适应",description:"轨道线条颜色"},{name:"pathWidth",type:"number",default:"1",description:"轨道线条宽度 (px)"},{name:"tiltAngle",type:"number",default:"0",description:"3D 空间倾角透视 (deg)"}]},{id:"image-compare",name:"ImageCompare",title:"Image Compare（交互式前后对比分割滑块）",category:"Interactive",suiteId:"interactive-nav",description:"利用 CSS clip-path 动态视口裁切的高性能双图/前后对比组件。支持全平台鼠标拖拽与移动端单指触控，带高光分割线与磨砂玻璃手柄。",componentFilename:"ImageCompare.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronsLeftRight } from 'lucide-vue-next'

interface ImageCompareProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  /** 初始分割位置百分比 (0~100)，默认 50 */
  initialPosition?: number
  class?: string
}

const props = withDefaults(defineProps<ImageCompareProps>(), {
  beforeLabel: 'Before',
  afterLabel: 'After',
  initialPosition: 50,
})

const containerRef = ref<HTMLDivElement | null>(null)
const position = ref(props.initialPosition)
const isDragging = ref(false)

function updatePosition(clientX: number) {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const x = clientX - rect.left
  const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
  position.value = Number(percentage.toFixed(2))
}

function handleMouseDown(e: MouseEvent) {
  isDragging.value = true
  updatePosition(e.clientX)
}

function handleMouseMove(e: MouseEvent) {
  if (!isDragging.value) return
  updatePosition(e.clientX)
}

function handleMouseUp() {
  isDragging.value = false
}

function handleTouchMove(e: TouchEvent) {
  if (!isDragging.value || e.touches.length === 0) return
  updatePosition(e.touches[0].clientX)
}

onMounted(() => {
  window.addEventListener('mouseup', handleMouseUp)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('touchend', handleMouseUp)
  window.addEventListener('touchmove', handleTouchMove)
})

onUnmounted(() => {
  window.removeEventListener('mouseup', handleMouseUp)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('touchend', handleMouseUp)
  window.removeEventListener('touchmove', handleTouchMove)
})
<\/script>

<template>
  <div
    ref="containerRef"
    :class="
      cn(
        'relative select-none overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 shadow-xl cursor-ew-resize dark:border-zinc-800/80',
        props.class
      )
    "
    @mousedown="handleMouseDown"
    @touchstart="isDragging = true"
  >
    <!-- 1. 底层：After 图片（处理后/AI 增强后图） -->
    <img
      :src="props.afterImage"
      :alt="props.afterLabel"
      class="pointer-events-none h-full w-full object-cover"
    />
    <div class="pointer-events-none absolute bottom-4 right-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
      {{ props.afterLabel }}
    </div>

    <!-- 2. 顶层：Before 图片（通过 clip-path 动态裁剪） -->
    <div
      class="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
      :style="{
        clipPath: \`inset(0 \${100 - position}% 0 0)\`,
      }"
    >
      <img
        :src="props.beforeImage"
        :alt="props.beforeLabel"
        class="h-full w-full object-cover"
      />
      <div class="pointer-events-none absolute bottom-4 left-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
        {{ props.beforeLabel }}
      </div>
    </div>

    <!-- 3. 中间拖拽分割线 -->
    <div
      class="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]"
      :style="{ left: \`\${position}%\` }"
    >
      <!-- 居中微光手柄 -->
      <div class="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-zinc-800 shadow-xl backdrop-blur-md transition-transform duration-100 hover:scale-110 active:scale-95 dark:border-zinc-700/80 dark:bg-zinc-900/90 dark:text-zinc-200">
        <ChevronsLeftRight class="h-4 w-4" />
      </div>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import ImageCompare from '@/components/ui/ImageCompare.vue'
<\/script>

<template>
  <div class="w-full max-w-xl mx-auto h-72">
    <ImageCompare
      before-image="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=70&sat=-100"
      after-image="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=90"
      before-label="Raw Input"
      after-label="AI Enhanced"
      :initial-position="50"
      class="h-full w-full"
    />
  </div>
</template>`,propsList:[{name:"beforeImage",type:"string",default:"必填",description:"对比前图片 URL"},{name:"afterImage",type:"string",default:"必填",description:"对比后（AI/高清处理后）图片 URL"},{name:"beforeLabel",type:"string",default:"'Before'",description:"左侧对比前浮动徽标文案"},{name:"afterLabel",type:"string",default:"'After'",description:"右侧对比后浮动徽标文案"},{name:"initialPosition",type:"number",default:"50",description:"初始分割百分比 (0~100)"}]},{id:"agent-status",name:"AgentStatus",title:"Agent Status（AI 智能体状态脉冲胶囊）",category:"AI",suiteId:"ai-native",description:"现代化 AI 智能体工作流执行胶囊。集成 5 种状态机驱动（思考中、执行中、调用工具、成功、异常）、实时毫秒秒表指示器与可折叠执行轨迹步骤清单。",componentFilename:"AgentStatus.vue",componentCode:`<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import {
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Wrench,
  ChevronDown,
  Clock,
} from 'lucide-vue-next'

export interface AgentStep {
  id: string | number
  name: string
  status: 'pending' | 'running' | 'done' | 'error'
  detail?: string
  duration?: string
}

interface AgentStatusProps {
  status?: 'thinking' | 'running' | 'tool_call' | 'success' | 'error' | 'idle'
  agentName?: string
  currentTask?: string
  elapsed?: boolean
  steps?: AgentStep[]
  class?: string
}

const props = withDefaults(defineProps<AgentStatusProps>(), {
  status: 'thinking',
  agentName: 'Aura AI Agent',
  currentTask: 'Thinking and orchestrating subagents...',
  elapsed: true,
  steps: () => [
    { id: 1, name: 'Understand user prompt requirements', status: 'done', duration: '0.4s' },
    { id: 2, name: 'Search codebase for components & hooks', status: 'done', duration: '1.2s' },
    { id: 3, name: 'Run Playwright headless visual verification', status: 'running', detail: 'Evaluating DOM computed styles...' },
    { id: 4, name: 'Commit and build production artifacts', status: 'pending' },
  ],
})

const isExpanded = ref(false)
const seconds = ref(0)
let timer: any = null

onMounted(() => {
  if (props.elapsed) {
    timer = setInterval(() => {
      seconds.value += 0.1
    }, 100)
  }
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const formattedTime = computed(() => {
  return \`\${seconds.value.toFixed(1)}s\`
})

const statusConfig = computed(() => {
  switch (props.status) {
    case 'thinking':
      return {
        icon: Sparkles,
        label: '思考推演中',
        color: 'text-sky-500 dark:text-sky-400',
        badgeBg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
        pulseBg: 'bg-sky-500',
      }
    case 'running':
      return {
        icon: Loader2,
        label: '自主执行中',
        color: 'text-blue-500 dark:text-blue-400 animate-spin',
        badgeBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
        pulseBg: 'bg-blue-500',
      }
    case 'tool_call':
      return {
        icon: Wrench,
        label: '调用工具中',
        color: 'text-amber-500 dark:text-amber-400',
        badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
        pulseBg: 'bg-amber-500',
      }
    case 'success':
      return {
        icon: CheckCircle2,
        label: '任务已闭环',
        color: 'text-emerald-500 dark:text-emerald-400',
        badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
        pulseBg: 'bg-emerald-500',
      }
    case 'error':
      return {
        icon: AlertCircle,
        label: '出现异常',
        color: 'text-rose-500 dark:text-rose-400',
        badgeBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
        pulseBg: 'bg-rose-500',
      }
    default:
      return {
        icon: Sparkles,
        label: '待命中',
        color: 'text-zinc-400',
        badgeBg: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
        pulseBg: 'bg-zinc-400',
      }
  }
})
<\/script>

<template>
  <div :class="cn('w-full max-w-lg transition-all duration-300', props.class)">
    <!-- 胶囊外壳 -->
    <div
      class="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/90 dark:bg-zinc-950/90"
    >
      <!-- 主状态横幅条 -->
      <div
        class="flex items-center justify-between gap-3 px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60"
        @click="isExpanded = !isExpanded"
      >
        <!-- 左侧：呼吸光圈与智能体标签 -->
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="relative flex h-3 w-3 shrink-0 items-center justify-center">
            <span
              :class="[
                'absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping',
                statusConfig.pulseBg,
              ]"
            />
            <span
              :class="[
                'relative inline-flex h-2 w-2 rounded-full',
                statusConfig.pulseBg,
              ]"
            />
          </div>

          <div class="flex flex-col min-w-0">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
                {{ props.agentName }}
              </span>
              <span
                :class="[
                  'rounded-full border px-2 py-0.2 text-[10px] font-semibold',
                  statusConfig.badgeBg,
                ]"
              >
                {{ statusConfig.label }}
              </span>
            </div>
            <p class="text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
              {{ props.currentTask }}
            </p>
          </div>
        </div>

        <!-- 右侧：耗时指示与展开箭头 -->
        <div class="flex items-center gap-2 shrink-0 text-xs text-zinc-500">
          <div
            v-if="props.elapsed"
            class="flex items-center gap-1 font-mono text-[11px] rounded-md bg-zinc-100 px-2 py-0.5 dark:bg-zinc-900 dark:text-zinc-300"
          >
            <Clock class="h-3 w-3 text-zinc-400" />
            <span>{{ formattedTime }}</span>
          </div>
          <ChevronDown
            :class="[
              'h-4 w-4 text-zinc-400 transition-transform duration-200',
              isExpanded && 'rotate-180',
            ]"
          />
        </div>
      </div>

      <!-- 下拉展开的步骤轨迹清单 -->
      <transition name="agent-expand">
        <div
          v-if="isExpanded && props.steps && props.steps.length > 0"
          class="border-t border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-2.5"
        >
          <div class="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
            执行轨迹步骤 (Execution Steps)
          </div>

          <div
            v-for="(step, idx) in props.steps"
            :key="step.id"
            class="flex items-start gap-2.5 text-xs"
          >
            <!-- 步骤序号与状态图标 -->
            <div class="mt-0.5 shrink-0">
              <CheckCircle2
                v-if="step.status === 'done'"
                class="h-4 w-4 text-emerald-500"
              />
              <Loader2
                v-else-if="step.status === 'running'"
                class="h-4 w-4 text-sky-500 animate-spin"
              />
              <AlertCircle
                v-else-if="step.status === 'error'"
                class="h-4 w-4 text-rose-500"
              />
              <span
                v-else
                class="inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 text-[10px] text-zinc-400 dark:border-zinc-700"
              >
                {{ idx + 1 }}
              </span>
            </div>

            <!-- 步骤文字与耗时 -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <span
                  :class="[
                    'font-medium truncate',
                    step.status === 'done' && 'text-zinc-700 dark:text-zinc-300',
                    step.status === 'running' && 'text-sky-600 dark:text-sky-400 font-semibold',
                    step.status === 'pending' && 'text-zinc-400 dark:text-zinc-500',
                    step.status === 'error' && 'text-rose-500 font-semibold',
                  ]"
                >
                  {{ step.name }}
                </span>
                <span
                  v-if="step.duration"
                  class="font-mono text-[10px] text-zinc-400 shrink-0 ml-2"
                >
                  {{ step.duration }}
                </span>
              </div>
              <p
                v-if="step.detail"
                class="text-[11px] text-zinc-400 font-mono mt-0.5 truncate"
              >
                {{ step.detail }}
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.agent-expand-enter-active,
.agent-expand-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  max-height: 400px;
  opacity: 1;
  overflow: hidden;
}
.agent-expand-enter-from,
.agent-expand-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
`,usageCode:`<script setup lang="ts">
import AgentStatus from '@/components/ui/AgentStatus.vue'
<\/script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 py-8">
    <AgentStatus
      status="thinking"
      agent-name="DeepSeek R1 Reasoner"
      current-task="正在拆解多模态视觉链路与 CSS 变换矩阵..."
    />
  </div>
</template>`,propsList:[{name:"status",type:"'thinking' | 'running' | 'tool_call' | 'success' | 'error' | 'idle'",default:"'thinking'",description:"智能体核心工作流状态"},{name:"agentName",type:"string",default:"'Aura AI Agent'",description:"智能体名称"},{name:"currentTask",type:"string",default:"'Thinking and orchestrating...'",description:"当前正在进行的任务摘要"},{name:"elapsed",type:"boolean",default:"true",description:"是否显示毫秒/秒级实时执行计时器"},{name:"steps",type:"AgentStep[]",default:"默认预设",description:"执行步骤轨迹列表 (id, name, status, duration, detail)"}]},{id:"typewriter-terminal",name:"TypewriterTerminal",title:"Typewriter Terminal（极客拟真打字机终端）",category:"Text",suiteId:"ai-native",description:"仿 macOS 终端极客打字机组件。具备拟人人性化输入延时抖动、光标高频呼吸、彩色语义化输出日志流，支持自动循环播放与一键复制命令。",componentFilename:"TypewriterTerminal.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { cn } from '@/lib/utils'
import { RotateCw, Copy, Check, Terminal as TerminalIcon } from 'lucide-vue-next'

export interface TerminalLine {
  id?: string | number
  /** 'input' 为终端命令输入（逐字打字）；'output' / 'success' / 'error' / 'warning' / 'info' 为输出日志 */
  type: 'input' | 'output' | 'success' | 'error' | 'warning' | 'info'
  text: string
  /** 延迟多久后开始（毫秒），默认自动计算 */
  delay?: number
  /** 自定义输入前缀，默认 '$ ' */
  prefix?: string
}

interface TypewriterTerminalProps {
  title?: string
  lines?: TerminalLine[]
  /** 打字每字符基准毫秒，默认 35 */
  typingSpeed?: number
  /** 全部完成后的停留时间 (ms)，默认 3500 */
  pauseEnd?: number
  /** 是否自动循环播放，默认 true */
  loop?: boolean
  /** 是否显示右上角控制项，默认 true */
  controls?: boolean
  class?: string
}

const props = withDefaults(defineProps<TypewriterTerminalProps>(), {
  title: 'zsh - aura@developer:~ (80x24)',
  typingSpeed: 35,
  pauseEnd: 3500,
  loop: true,
  controls: true,
  lines: () => [
    { type: 'input', text: 'pnpm dlx aura-ui@latest add agent-status dock' },
    { type: 'output', text: '⠋ Resolving packages & peer dependencies...' },
    { type: 'output', text: '✔ Cloned src/components/ui/AgentStatus.vue' },
    { type: 'output', text: '✔ Cloned src/components/ui/Dock.vue' },
    { type: 'success', text: '✨ Successfully installed 2 motion primitives in 260ms.' },
    { type: 'input', text: 'aura test --visual-regression' },
    { type: 'info', text: 'ℹ Running Playwright headless test in Chromium...' },
    { type: 'success', text: '✔ All 19 components passed 60fps frame rate check!' },
  ],
})

interface RenderedLine {
  type: TerminalLine['type']
  text: string
  prefix?: string
}

const renderedLines = ref<RenderedLine[]>([])
const currentLineIdx = ref(0)
const currentCharIdx = ref(0)
const isTyping = ref(false)
const isFinished = ref(false)
const copied = ref(false)
const terminalBodyRef = ref<HTMLDivElement | null>(null)

let timer: any = null

function scrollToBottom() {
  if (terminalBodyRef.value) {
    terminalBodyRef.value.scrollTop = terminalBodyRef.value.scrollHeight
  }
}

function resetAndStart() {
  if (timer) clearTimeout(timer)
  renderedLines.value = []
  currentLineIdx.value = 0
  currentCharIdx.value = 0
  isTyping.value = false
  isFinished.value = false
  runNextStep()
}

function runNextStep() {
  if (!props.lines || props.lines.length === 0) return

  if (currentLineIdx.value >= props.lines.length) {
    isTyping.value = false
    isFinished.value = true
    if (props.loop) {
      timer = setTimeout(() => {
        resetAndStart()
      }, props.pauseEnd)
    }
    return
  }

  const line = props.lines[currentLineIdx.value]

  if (line.type === 'input') {
    // 逐字打字逻辑
    isTyping.value = true
    if (currentCharIdx.value === 0) {
      // 开启新行
      renderedLines.value.push({
        type: 'input',
        text: '',
        prefix: line.prefix || '$ ',
      })
    }

    if (currentCharIdx.value < line.text.length) {
      const activeLine = renderedLines.value[renderedLines.value.length - 1]
      activeLine.text += line.text[currentCharIdx.value]
      currentCharIdx.value++
      scrollToBottom()

      // 人类自然打字微弱抖动 (20ms ~ 50ms)
      const jitter = Math.floor(Math.random() * 25) - 10
      const delay = Math.max(15, props.typingSpeed + jitter)
      timer = setTimeout(runNextStep, delay)
    } else {
      // 当前输入行打字完毕，暂停一下再进入下一行
      currentCharIdx.value = 0
      currentLineIdx.value++
      isTyping.value = false
      scrollToBottom()
      timer = setTimeout(runNextStep, 400)
    }
  } else {
    // 日志直接整行输出
    isTyping.value = false
    renderedLines.value.push({
      type: line.type,
      text: line.text,
      prefix: line.prefix,
    })
    currentLineIdx.value++
    scrollToBottom()

    const delay = line.delay ?? 220
    timer = setTimeout(runNextStep, delay)
  }
}

function copyAllText() {
  const fullText = props.lines.map((l) => \`\${l.prefix || (l.type === 'input' ? '$ ' : '')}\${l.text}\`).join('\\n')
  navigator.clipboard.writeText(fullText)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

onMounted(() => {
  resetAndStart()
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})

watch(() => props.lines, () => {
  resetAndStart()
}, { deep: true })
<\/script>

<template>
  <div
    :class="
      cn(
        'relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 font-mono text-xs sm:text-sm text-zinc-300 shadow-2xl backdrop-blur-md dark:border-zinc-800/80',
        props.class
      )
    "
  >
    <!-- 终端顶部标题栏 (macOS 极客质感) -->
    <div class="flex h-10 w-full items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 select-none">
      <!-- 三色交通灯 -->
      <div class="flex items-center gap-2">
        <span class="h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm transition-transform hover:scale-110" />
        <span class="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm transition-transform hover:scale-110" />
        <span class="h-3 w-3 rounded-full bg-[#27c93f] shadow-sm transition-transform hover:scale-110" />
      </div>

      <!-- 标题居中 -->
      <div class="flex items-center gap-1.5 text-[11px] font-medium text-zinc-400">
        <TerminalIcon class="h-3.5 w-3.5 text-zinc-500" />
        <span class="truncate max-w-[220px] sm:max-w-md">{{ props.title }}</span>
      </div>

      <!-- 右侧控制区 -->
      <div v-if="props.controls" class="flex items-center gap-2">
        <button
          @click="resetAndStart"
          title="重新播放"
          class="flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
        >
          <RotateCw class="h-3.5 w-3.5" />
        </button>
        <button
          @click="copyAllText"
          title="复制所有命令"
          class="flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
        >
          <Check v-if="copied" class="h-3.5 w-3.5 text-emerald-400" />
          <Copy v-else class="h-3.5 w-3.5" />
        </button>
      </div>
      <div v-else class="w-12" />
    </div>

    <!-- 终端输出区域 -->
    <div
      ref="terminalBodyRef"
      class="max-h-80 min-h-[220px] overflow-y-auto p-4 sm:p-5 space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-800"
    >
      <div
        v-for="(line, idx) in renderedLines"
        :key="idx"
        class="flex items-start gap-2 leading-relaxed"
      >
        <!-- 命令行输入模式 -->
        <template v-if="line.type === 'input'">
          <span class="text-blue-400 select-none font-bold">{{ line.prefix || '$ ' }}</span>
          <span class="text-zinc-100 font-semibold flex-1 break-all">
            {{ line.text }}
            <!-- 当前正在输入的行显示光标 -->
            <span
              v-if="isTyping && idx === renderedLines.length - 1"
              class="inline-block h-4 w-2 translate-y-0.5 bg-blue-500 animate-pulse ml-0.5"
            />
          </span>
        </template>

        <!-- 成功日志 -->
        <template v-else-if="line.type === 'success'">
          <span class="text-emerald-400 font-medium break-all">{{ line.text }}</span>
        </template>

        <!-- 错误日志 -->
        <template v-else-if="line.type === 'error'">
          <span class="text-rose-400 font-medium break-all">{{ line.text }}</span>
        </template>

        <!-- 警告日志 -->
        <template v-else-if="line.type === 'warning'">
          <span class="text-amber-400 font-medium break-all">{{ line.text }}</span>
        </template>

        <!-- 信息日志 -->
        <template v-else-if="line.type === 'info'">
          <span class="text-sky-400 font-medium break-all">{{ line.text }}</span>
        </template>

        <!-- 默认普通输出 -->
        <template v-else>
          <span class="text-zinc-400 break-all">{{ line.text }}</span>
        </template>
      </div>

      <!-- 如果已经全部完成且非打字状态，底部留一个静止微闪光标 -->
      <div v-if="isFinished" class="flex items-center gap-2 pt-1">
        <span class="text-blue-400 font-bold select-none">$ </span>
        <span class="inline-block h-4 w-2 bg-zinc-500 animate-pulse" />
      </div>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import TypewriterTerminal from '@/components/ui/TypewriterTerminal.vue'
<\/script>

<template>
  <div class="w-full max-w-xl mx-auto">
    <TypewriterTerminal
      title="bash - deploy.sh"
      :typing-speed="30"
      :loop="true"
    />
  </div>
</template>`,propsList:[{name:"title",type:"string",default:"'zsh - aura@developer:~ (80x24)'",description:"终端顶部标题栏文字"},{name:"lines",type:"TerminalLine[]",default:"默认预设",description:"终端行配置（type: input/output/success/error/info/warning, text, delay, prefix）"},{name:"typingSpeed",type:"number",default:"35",description:"每字符打字基准延时 (ms)"},{name:"pauseEnd",type:"number",default:"3500",description:"全部命令输出完成后的等待停顿 (ms)"},{name:"loop",type:"boolean",default:"true",description:"是否开启无限循环回放"},{name:"controls",type:"boolean",default:"true",description:"是否在标题栏显示重播与复制按钮"}]},{id:"prompt-input",name:"PromptInput",title:"Prompt Input（AI 原生智能流光输入框）",category:"AI",suiteId:"ai-native",description:"现代化大模型对话输入交互框。具备聚焦时外圈流动赛博光束高光、多推理模型切换下拉菜单、联网深度搜索开关、快捷键发送与生成打断停止态。",componentFilename:"PromptInput.vue",componentCode:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import {
  Sparkles,
  ArrowUp,
  Square,
  Paperclip,
  Globe,
  Mic,
  ChevronDown,
} from 'lucide-vue-next'

export interface ModelOption {
  id: string
  name: string
  icon?: any
  badge?: string
}

interface PromptInputProps {
  modelValue?: string
  placeholder?: string
  loading?: boolean
  selectedModel?: string
  models?: ModelOption[]
  webSearch?: boolean
  maxRows?: number
  class?: string
}

const props = withDefaults(defineProps<PromptInputProps>(), {
  modelValue: '',
  placeholder: '向 Aura AI 提问、生成 UI 动效，或输入 / 触发指令...',
  loading: false,
  selectedModel: 'deepseek-r1',
  webSearch: false,
  maxRows: 6,
  models: () => [
    { id: 'deepseek-r1', name: 'DeepSeek R1', badge: 'Reasoning' },
    { id: 'claude-3-7-sonnet', name: 'Claude 3.7 Sonnet', badge: 'Hybrid' },
    { id: 'gpt-4o', name: 'GPT-4o Omni', badge: 'Multimodal' },
  ],
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'submit', val: string): void
  (e: 'stop'): void
  (e: 'update:selectedModel', modelId: string): void
  (e: 'toggleWebSearch', active: boolean): void
}>()

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const isFocused = ref(false)
const showModelMenu = ref(false)
const isWebSearchActive = ref(props.webSearch)

const internalValue = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val),
})

const activeModel = computed(() => {
  return props.models.find((m) => m.id === props.selectedModel) || props.models[0]
})

function handleInput(e: Event) {
  const target = e.target as HTMLTextAreaElement
  internalValue.value = target.value
  adjustTextareaHeight()
}

function adjustTextareaHeight() {
  if (!textareaRef.value) return
  textareaRef.value.style.height = 'auto'
  const newHeight = Math.min(textareaRef.value.scrollHeight, 24 * props.maxRows)
  textareaRef.value.style.height = \`\${newHeight}px\`
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleSubmit()
  }
}

function handleSubmit() {
  if (props.loading) {
    emit('stop')
    return
  }
  if (!internalValue.value.trim()) return
  emit('submit', internalValue.value)
}

function toggleWebSearch() {
  isWebSearchActive.value = !isWebSearchActive.value
  emit('toggleWebSearch', isWebSearchActive.value)
}

function selectModel(modelId: string) {
  emit('update:selectedModel', modelId)
  showModelMenu.value = false
}
<\/script>

<template>
  <div
    :class="
      cn(
        'group relative w-full rounded-2xl border transition-all duration-300 shadow-xl backdrop-blur-xl',
        isFocused
          ? 'border-blue-500/80 shadow-[0_0_25px_rgba(59,130,246,0.18)] dark:border-blue-400/80 dark:shadow-[0_0_35px_rgba(56,189,248,0.22)]'
          : 'border-zinc-200/90 hover:border-zinc-300 dark:border-zinc-800/90 dark:hover:border-zinc-700',
        'bg-white/85 dark:bg-zinc-950/85',
        props.class
      )
    "
  >
    <!-- 顶部微光高光边（当聚焦时泛起赛博渐变光束） -->
    <div
      :class="[
        'pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-opacity duration-300',
        isFocused ? 'opacity-100' : 'opacity-0',
      ]"
    />

    <!-- 主输入区域 -->
    <div class="p-3 sm:p-4 pb-2">
      <textarea
        ref="textareaRef"
        v-model="internalValue"
        :placeholder="props.placeholder"
        rows="1"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @input="handleInput"
        @keydown="handleKeydown"
        class="w-full resize-none border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 bg-transparent text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-500 leading-relaxed font-sans shadow-none"
        style="outline: none; box-shadow: none;"
      />
    </div>

    <!-- 底部操作与工具栏 -->
    <div class="flex items-center justify-between border-t border-zinc-100 px-3 py-2.5 dark:border-zinc-900">
      <!-- 左侧：模型选择器与增强开关 -->
      <div class="flex items-center gap-1.5 sm:gap-2">
        <!-- 模型选择下拉按钮 -->
        <div class="relative">
          <button
            type="button"
            @click="showModelMenu = !showModelMenu"
            class="flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <Sparkles class="h-3.5 w-3.5 text-blue-500" />
            <span>{{ activeModel.name }}</span>
            <ChevronDown class="h-3 w-3 text-zinc-400" />
          </button>

          <!-- 模型切换弹出菜单 -->
          <transition name="model-pop">
            <div
              v-if="showModelMenu"
              class="absolute bottom-full left-0 mb-2 w-52 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-2xl backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 select-none"
            >
              <div class="px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                切换推理基座
              </div>
              <button
                v-for="model in props.models"
                :key="model.id"
                type="button"
                @click="selectModel(model.id)"
                :class="[
                  'flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors',
                  model.id === props.selectedModel
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400'
                    : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800',
                ]"
              >
                <span>{{ model.name }}</span>
                <span
                  v-if="model.badge"
                  class="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.2 text-[9px] text-zinc-500"
                >
                  {{ model.badge }}
                </span>
              </button>
            </div>
          </transition>
        </div>

        <!-- 联网搜索增强开关 -->
        <button
          type="button"
          @click="toggleWebSearch"
          :class="[
            'flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium transition-colors border',
            isWebSearchActive
              ? 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400'
              : 'border-transparent text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300',
          ]"
          title="联网实时搜索"
        >
          <Globe class="h-3.5 w-3.5" />
          <span class="hidden sm:inline">深度搜索</span>
        </button>

        <!-- 附件与语音按钮 -->
        <button
          type="button"
          class="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
          title="上传图像或文件"
        >
          <Paperclip class="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          class="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
          title="语音输入"
        >
          <Mic class="h-3.5 w-3.5" />
        </button>
      </div>

      <!-- 右侧：快捷键指示与发送/打断动作按钮 -->
      <div class="flex items-center gap-2">
        <span class="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-zinc-400">
          <span>Enter ↵ 发送</span>
        </span>

        <!-- 发送或打断按钮 -->
        <button
          type="button"
          @click="handleSubmit"
          :disabled="!props.loading && !internalValue.trim()"
          :class="[
            'flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 shadow-md',
            props.loading
              ? 'bg-rose-500 text-white hover:bg-rose-600'
              : internalValue.trim()
                ? 'bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 active:scale-95'
                : 'bg-zinc-100 text-zinc-400 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600',
          ]"
        >
          <Square v-if="props.loading" class="h-3.5 w-3.5 fill-current" />
          <ArrowUp v-else class="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
textarea,
textarea:focus,
textarea:focus-visible {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}

.model-pop-enter-active,
.model-pop-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.model-pop-enter-from,
.model-pop-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import PromptInput from '@/components/ui/PromptInput.vue'

const promptText = ref('')
const isLoading = ref(false)
const currentModel = ref('deepseek-r1')

function handleSubmit(val: string) {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    promptText.value = ''
  }, 2500)
}
<\/script>

<template>
  <div class="w-full max-w-xl mx-auto p-4">
    <PromptInput
      v-model="promptText"
      :loading="isLoading"
      v-model:selected-model="currentModel"
      placeholder="输入提问、生成高阶动效代码，或以 / 触发 Agent..."
      @submit="handleSubmit"
      @stop="isLoading = false"
    />
  </div>
</template>`,propsList:[{name:"modelValue",type:"string",default:"''",description:"双向绑定的提示词文本"},{name:"placeholder",type:"string",default:"向 Aura AI 提问...",description:"占位提示文案"},{name:"loading",type:"boolean",default:"false",description:"是否处于大模型生成响应中"},{name:"selectedModel",type:"string",default:"'deepseek-r1'",description:"当前选中的模型 ID"},{name:"models",type:"ModelOption[]",default:"预设模型列表",description:"可供切换的大模型选项列表"},{name:"webSearch",type:"boolean",default:"false",description:"是否默认开启深度联网搜索"},{name:"maxRows",type:"number",default:"6",description:"文本域自动撑开的最大行数"}]},{id:"thought-accordion",name:"ThoughtAccordion",title:"Thought Accordion（AI 深度思考推理折叠卡）",category:"AI",suiteId:"ai-native",description:"对标 DeepSeek R1 与 OpenAI o1 思考链机制的推理折叠卡。包含思考中脉冲火花旋转、耗时计时器、一键复制思考细节与手风琴平滑贝塞尔展开。",componentFilename:"ThoughtAccordion.vue",componentCode:`<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Sparkles, ChevronDown, Copy, Check, Clock } from 'lucide-vue-next'

interface ThoughtAccordionProps {
  /** 思考耗时描述，例如 '思考用时 14.8 秒' */
  duration?: string
  /** 思考状态：thinking 思考推演中 | complete 思考已完成 */
  status?: 'thinking' | 'complete'
  /** 是否默认展开 */
  defaultOpen?: boolean
  /** 思考推演过程文本 */
  thoughtText?: string
  class?: string
}

const props = withDefaults(defineProps<ThoughtAccordionProps>(), {
  duration: '思考用时 12.6 秒',
  status: 'complete',
  defaultOpen: true,
  thoughtText: \`> 1. 解析用户需求：为 Vue 3 全系打造顶级 AI 原生交互动效。
> 2. 几何与物理模型推演：使用 CSS 3D 矩阵解构空间深度，保持 60fps 满帧性能。
> 3. 边界与异常收敛：引入状态机阻尼回弹，确保单文件零配置即刻分发。
> 4. 自愈与验证：通过 Playwright 双模态 Chromium 验证无色彩渗漏，交付闭环。\`,
})

const isOpen = ref(props.defaultOpen)
const copied = ref(false)

function copyThought() {
  navigator.clipboard.writeText(props.thoughtText)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
<\/script>

<template>
  <div
    :class="
      cn(
        'w-full overflow-hidden rounded-2xl border transition-all duration-300',
        isOpen
          ? 'border-zinc-200/90 bg-zinc-50/70 shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/40'
          : 'border-zinc-200/60 bg-white/60 hover:border-zinc-300 dark:border-zinc-800/60 dark:bg-zinc-950/60',
        props.class
      )
    "
  >
    <!-- 折叠栏头部横幅条 -->
    <div
      class="flex items-center justify-between px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40"
      @click="isOpen = !isOpen"
    >
      <!-- 左侧：思考中微光图标与耗时 -->
      <div class="flex items-center gap-2.5 text-xs">
        <div class="relative flex h-4 w-4 items-center justify-center">
          <Sparkles
            :class="[
              'h-4 w-4 text-blue-500 transition-transform duration-300',
              props.status === 'thinking' && 'animate-spin',
            ]"
          />
          <span
            v-if="props.status === 'thinking'"
            class="absolute -inset-1 rounded-full bg-blue-500/20 animate-ping"
          />
        </div>

        <div class="flex items-center gap-2">
          <span class="font-bold text-zinc-900 dark:text-zinc-100">
            {{ props.status === 'thinking' ? '正在深度思考推演...' : '已深度思考' }}
          </span>
          <span class="inline-flex items-center gap-1 rounded-md bg-zinc-200/60 px-2 py-0.5 font-mono text-[11px] text-zinc-500 dark:bg-zinc-800/80 dark:text-zinc-400">
            <Clock class="h-3 w-3" />
            <span>{{ props.duration }}</span>
          </span>
        </div>
      </div>

      <!-- 右侧：复制按钮与展开小箭头 -->
      <div class="flex items-center gap-1.5" @click.stop>
        <button
          type="button"
          @click="copyThought"
          title="复制思考过程"
          class="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
        >
          <Check v-if="copied" class="h-3.5 w-3.5 text-emerald-500" />
          <Copy v-else class="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          @click="isOpen = !isOpen"
          class="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
        >
          <ChevronDown
            :class="[
              'h-4 w-4 transition-transform duration-200',
              isOpen && 'rotate-180',
            ]"
          />
        </button>
      </div>
    </div>

    <!-- 展开展示的推理细节内容 -->
    <transition name="thought-slide">
      <div
        v-if="isOpen"
        class="border-t border-zinc-200/70 px-4 py-3.5 dark:border-zinc-800/70"
      >
        <div class="border-l-2 border-blue-500/70 pl-3.5 font-mono text-xs leading-relaxed text-zinc-600 dark:border-blue-400/70 dark:text-zinc-400 whitespace-pre-wrap select-text">
          <slot>
            {{ props.thoughtText }}
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.thought-slide-enter-active,
.thought-slide-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  max-height: 500px;
  opacity: 1;
  overflow: hidden;
}
.thought-slide-enter-from,
.thought-slide-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
`,usageCode:`<script setup lang="ts">
import ThoughtAccordion from '@/components/ui/ThoughtAccordion.vue'
<\/script>

<template>
  <div class="w-full max-w-xl mx-auto p-4">
    <ThoughtAccordion
      duration="思考用时 8.4 秒"
      status="complete"
      :default-open="true"
    />
  </div>
</template>`,propsList:[{name:"duration",type:"string",default:"'思考用时 12.6 秒'",description:"思考耗时文案"},{name:"status",type:"'thinking' | 'complete'",default:"'complete'",description:"思考状态：推演中或已完成"},{name:"defaultOpen",type:"boolean",default:"true",description:"初始化时是否默认展开"},{name:"thoughtText",type:"string",default:"默认推演逻辑",description:"思考过程细节文本"}]},{id:"fluid-tabs",name:"FluidTabs",title:"Fluid Tabs（流体胶囊指示器 Tabs）",category:"Interactive",suiteId:"interactive-nav",description:"基于真实 DOM 尺寸测量的物理流体胶囊 Tabs。具备鼠标悬停幽灵胶囊滑移、点击弹簧实心胶囊平滑吸附、带高光阴影与明暗双模适配。",componentFilename:"FluidTabs.vue",componentCode:`<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import { cn } from '@/lib/utils'

export interface FluidTabItem {
  id: string | number
  label: string
  icon?: any
  badge?: string
}

interface FluidTabsProps {
  modelValue?: string | number
  tabs: FluidTabItem[]
  class?: string
}

const props = withDefaults(defineProps<FluidTabsProps>(), {
  modelValue: '',
  tabs: () => [],
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: string | number): void
  (e: 'change', val: string | number): void
}>()

const containerRef = ref<HTMLDivElement | null>(null)
const tabRefs = ref<HTMLElement[]>([])

// 活动指示器位置与尺寸
const indicatorStyle = ref({
  left: 0,
  width: 0,
  opacity: 0,
})

// 悬浮预览指示器位置与尺寸
const hoverStyle = ref({
  left: 0,
  width: 0,
  opacity: 0,
})

function setTabRef(el: any, index: number) {
  if (el) tabRefs.value[index] = el
}

function updateIndicator() {
  nextTick(() => {
    if (!containerRef.value) return
    const activeIndex = props.tabs.findIndex((t) => t.id === props.modelValue)
    if (activeIndex === -1 || !tabRefs.value[activeIndex]) {
      indicatorStyle.value.opacity = 0
      return
    }

    const containerRect = containerRef.value.getBoundingClientRect()
    const activeRect = tabRefs.value[activeIndex].getBoundingClientRect()

    indicatorStyle.value = {
      left: activeRect.left - containerRect.left,
      width: activeRect.width,
      opacity: 1,
    }
  })
}

function handleTabHover(index: number) {
  if (!containerRef.value || !tabRefs.value[index]) return
  const containerRect = containerRef.value.getBoundingClientRect()
  const targetRect = tabRefs.value[index].getBoundingClientRect()

  hoverStyle.value = {
    left: targetRect.left - containerRect.left,
    width: targetRect.width,
    opacity: 1,
  }
}

function handleContainerLeave() {
  hoverStyle.value.opacity = 0
}

function selectTab(id: string | number) {
  emit('update:modelValue', id)
  emit('change', id)
}

watch(() => props.modelValue, () => {
  updateIndicator()
})

watch(() => props.tabs, () => {
  updateIndicator()
}, { deep: true })

onMounted(() => {
  if (!props.modelValue && props.tabs.length > 0) {
    emit('update:modelValue', props.tabs[0].id)
  }
  updateIndicator()
  window.addEventListener('resize', updateIndicator)
})
<\/script>

<template>
  <div
    ref="containerRef"
    :class="
      cn(
        'relative inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-zinc-100/80 p-1.5 shadow-inner backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80 select-none',
        props.class
      )
    "
    @mouseleave="handleContainerLeave"
  >
    <!-- 1. 悬停幽灵过渡流体底色 (Ghost Hover Capsule) -->
    <div
      class="pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-zinc-200/60 transition-all duration-200 ease-out dark:bg-zinc-800/60"
      :style="{
        left: \`\${hoverStyle.left}px\`,
        width: \`\${hoverStyle.width}px\`,
        opacity: hoverStyle.opacity,
      }"
    />

    <!-- 2. 实心活动高光流体滑块 (Solid Active Capsule with Spring physics) -->
    <div
      class="pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-800 dark:shadow-black/40"
      :style="{
        left: \`\${indicatorStyle.left}px\`,
        width: \`\${indicatorStyle.width}px\`,
        opacity: indicatorStyle.opacity,
      }"
    />

    <!-- 3. 各 Tab 按钮项 -->
    <button
      v-for="(tab, index) in props.tabs"
      :key="tab.id"
      :ref="(el) => setTabRef(el, index)"
      type="button"
      @click="selectTab(tab.id)"
      @mouseenter="handleTabHover(index)"
      :class="[
        'relative z-10 flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-200',
        props.modelValue === tab.id
          ? 'text-zinc-900 dark:text-zinc-100'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200',
      ]"
    >
      <component
        v-if="tab.icon"
        :is="tab.icon"
        :class="[
          'h-4 w-4 transition-transform duration-200',
          props.modelValue === tab.id ? 'scale-110 text-blue-600 dark:text-blue-400' : 'text-zinc-400',
        ]"
      />
      <span>{{ tab.label }}</span>
      <span
        v-if="tab.badge"
        :class="[
          'rounded-full px-1.5 py-0.2 text-[10px] font-bold font-mono transition-colors',
          props.modelValue === tab.id
            ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
            : 'bg-zinc-200/80 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400',
        ]"
      >
        {{ tab.badge }}
      </span>
    </button>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import FluidTabs from '@/components/ui/FluidTabs.vue'
import { Sparkles, Terminal, Code2, Layers } from 'lucide-vue-next'

const activeTab = ref('preview')
const tabs = [
  { id: 'preview', label: '实时效果', icon: Sparkles },
  { id: 'code', label: '组件源码', icon: Code2, badge: 'Vue' },
  { id: 'usage', label: '业务调用', icon: Terminal },
  { id: 'themes', label: '主题矩阵', icon: Layers },
]
<\/script>

<template>
  <div class="flex justify-center p-6">
    <FluidTabs v-model="activeTab" :tabs="tabs" />
  </div>
</template>`,propsList:[{name:"modelValue",type:"string | number",default:"''",description:"当前激活的 Tab 项 ID"},{name:"tabs",type:"FluidTabItem[]",default:"[]",description:"Tab 列表（id, label, icon, badge）"}]},{id:"hold-to-confirm",name:"Hold To Confirm",title:"长按蓄力物理确认按钮",category:"Button",suiteId:"tactile-actions",description:"防误触设计的高危操作确认按钮。通过物理按压时序线性蓄力，具备进度填充、回弹复位与成功态形变反馈。",componentFilename:"HoldToConfirm.vue",componentCode:`<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { AlertTriangle, Check, Trash2 } from 'lucide-vue-next'

interface HoldToConfirmProps {
  duration?: number
  label?: string
  holdingLabel?: string
  confirmedLabel?: string
  variant?: 'danger' | 'primary' | 'warning'
  class?: string
}

const props = withDefaults(defineProps<HoldToConfirmProps>(), {
  duration: 1200,
  label: '长按以确认执行',
  holdingLabel: '保持长按不放...',
  confirmedLabel: '已成功确认！',
  variant: 'danger',
})

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()

const progress = ref(0)
const isHolding = ref(false)
const isConfirmed = ref(false)

let animationFrameId: number | null = null
let startTime = 0

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'danger':
      return {
        bg: 'bg-rose-500/10 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-500/30',
        fill: 'bg-rose-600 dark:bg-rose-500',
        ring: 'text-rose-500',
        icon: Trash2,
      }
    case 'warning':
      return {
        bg: 'bg-amber-500/10 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-500/30',
        fill: 'bg-amber-600 dark:bg-amber-500',
        ring: 'text-amber-500',
        icon: AlertTriangle,
      }
    default:
      return {
        bg: 'bg-blue-500/10 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border-blue-500/30',
        fill: 'bg-blue-600 dark:bg-blue-500',
        ring: 'text-blue-500',
        icon: Check,
      }
  }
})

function startHolding() {
  if (isConfirmed.value) return
  isHolding.value = true
  startTime = performance.now()

  function update() {
    const elapsed = performance.now() - startTime
    const p = Math.min((elapsed / props.duration) * 100, 100)
    progress.value = p

    if (p < 100) {
      animationFrameId = requestAnimationFrame(update)
    } else {
      isHolding.value = false
      isConfirmed.value = true
      emit('confirm')
      setTimeout(() => {
        isConfirmed.value = false
        progress.value = 0
      }, 2500)
    }
  }

  animationFrameId = requestAnimationFrame(update)
}

function cancelHolding() {
  if (isConfirmed.value) return
  isHolding.value = false
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
  progress.value = 0
  emit('cancel')
}

onUnmounted(() => {
  if (animationFrameId !== null) cancelAnimationFrame(animationFrameId)
})
<\/script>

<template>
  <button
    type="button"
    :class="
      cn(
        'group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-xl border px-5 text-xs sm:text-sm font-semibold select-none transition-all duration-200 active:scale-95 cursor-pointer',
        variantClasses.bg,
        isConfirmed && '!bg-emerald-600 !border-emerald-600 text-white',
        props.class
      )
    "
    @mousedown="startHolding"
    @mouseup="cancelHolding"
    @mouseleave="cancelHolding"
    @touchstart.prevent="startHolding"
    @touchend.prevent="cancelHolding"
  >
    <div
      v-if="!isConfirmed"
      :class="[
        'pointer-events-none absolute inset-y-0 left-0 opacity-25 transition-[width] ease-linear',
        variantClasses.fill,
      ]"
      :style="{ width: \`\${progress}%\` }"
    />
    <span class="relative z-10 flex items-center gap-2">
      <Check v-if="isConfirmed" class="h-4 w-4 animate-bounce" />
      <component
        v-else
        :is="variantClasses.icon"
        :class="[
          'h-4 w-4 transition-transform duration-200',
          isHolding && 'scale-125 animate-pulse',
        ]"
      />
      <span v-if="isConfirmed">{{ props.confirmedLabel }}</span>
      <span v-else-if="isHolding">{{ props.holdingLabel }}</span>
      <span v-else>{{ props.label }}</span>
      <span
        v-if="isHolding && !isConfirmed"
        class="ml-1 inline-block font-mono text-[11px] font-bold"
      >
        {{ Math.round(progress) }}%
      </span>
    </span>
  </button>
</template>`,usageCode:`<script setup lang="ts">
import HoldToConfirm from '@/components/ui/HoldToConfirm.vue'

function handleDelete() {
  console.log('高危操作已确认执行')
}
<\/script>

<template>
  <div class="flex items-center gap-4">
    <HoldToConfirm
      variant="danger"
      label="长按删除服务器节点"
      holdingLabel="松开可取消，按住中..."
      confirmedLabel="节点已销毁！"
      :duration="1500"
      @confirm="handleDelete"
    />
  </div>
</template>`,propsList:[{name:"duration",type:"number",default:"1200",description:"蓄力完成所需时间（毫秒）"},{name:"label",type:"string",default:"'长按以确认执行'",description:"常态按钮文案"},{name:"holdingLabel",type:"string",default:"'保持长按不放...'",description:"按住中即时提示文案"},{name:"confirmedLabel",type:"string",default:"'已成功确认！'",description:"蓄力成功后的完成文案"},{name:"variant",type:"'danger' | 'primary' | 'warning'",default:"'danger'",description:"视觉主题模式"}]},{id:"confirm-morph",name:"Confirm Morph",title:"就地渐变二次确认",category:"Button",suiteId:"tactile-actions",description:"极简优雅的行内二次确认交互。点击后原地平滑展开为确认与取消两个操作键，避免传统全局弹窗打断用户心流。",componentFilename:"ConfirmMorph.vue",componentCode:`<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { AlertTriangle, Check, X, Trash2 } from 'lucide-vue-next'

interface ConfirmMorphProps {
  label?: string
  confirmText?: string
  cancelText?: string
  icon?: any
  variant?: 'danger' | 'warning' | 'primary'
  class?: string
}

const props = withDefaults(defineProps<ConfirmMorphProps>(), {
  label: '删除此资源',
  confirmText: '确定删除',
  cancelText: '取消',
  variant: 'danger',
})

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()

const isConfirming = ref(false)
const isSuccess = ref(false)

function handleInitialClick() {
  if (isSuccess.value) return
  isConfirming.value = true
}

function handleConfirm() {
  isSuccess.value = true
  emit('confirm')
  setTimeout(() => {
    isSuccess.value = false
    isConfirming.value = false
  }, 2200)
}

function handleCancel() {
  isConfirming.value = false
  emit('cancel')
}
<\/script>

<template>
  <div
    :class="
      cn(
        'inline-flex items-center overflow-hidden rounded-xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none',
        props.variant === 'danger' && 'border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20',
        props.variant === 'warning' && 'border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20',
        props.variant === 'primary' && 'border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20',
        isSuccess && '!border-emerald-600 !bg-emerald-600 text-white',
        props.class
      )
    "
  >
    <div
      v-if="isSuccess"
      class="flex h-10 items-center gap-1.5 px-4 text-xs sm:text-sm font-semibold text-white"
    >
      <Check class="h-4 w-4 animate-bounce" />
      <span>操作已完成</span>
    </div>

    <template v-else-if="isConfirming">
      <button
        type="button"
        @click="handleConfirm"
        :class="[
          'flex h-10 items-center gap-1.5 px-3.5 text-xs font-semibold text-white transition-colors cursor-pointer',
          props.variant === 'danger' && 'bg-rose-600 hover:bg-rose-700',
          props.variant === 'warning' && 'bg-amber-600 hover:bg-amber-700',
          props.variant === 'primary' && 'bg-blue-600 hover:bg-blue-700',
        ]"
      >
        <AlertTriangle class="h-3.5 w-3.5" />
        <span>{{ props.confirmText }}</span>
      </button>

      <button
        type="button"
        @click="handleCancel"
        class="flex h-10 items-center gap-1 border-l border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 px-3 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors cursor-pointer"
      >
        <X class="h-3.5 w-3.5" />
        <span>{{ props.cancelText }}</span>
      </button>
    </template>

    <button
      v-else
      type="button"
      @click="handleInitialClick"
      :class="[
        'flex h-10 items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-colors cursor-pointer',
        props.variant === 'danger' && 'text-rose-600 hover:bg-rose-500/10 dark:text-rose-400',
        props.variant === 'warning' && 'text-amber-600 hover:bg-amber-500/10 dark:text-amber-400',
        props.variant === 'primary' && 'text-blue-600 hover:bg-blue-500/10 dark:text-blue-400',
      ]"
    >
      <component :is="props.icon || Trash2" class="h-4 w-4" />
      <span>{{ props.label }}</span>
    </button>
  </div>
</template>`,usageCode:`<script setup lang="ts">
import ConfirmMorph from '@/components/ui/ConfirmMorph.vue'

function onConfirm() {
  console.log('执行二次确认后的删除动作')
}
<\/script>

<template>
  <div class="flex items-center gap-4">
    <ConfirmMorph
      label="销毁项目环境"
      confirm-text="确认销毁"
      cancel-text="取消"
      variant="danger"
      @confirm="onConfirm"
    />
  </div>
</template>`,propsList:[{name:"label",type:"string",default:"'删除此资源'",description:"常态按钮标题"},{name:"confirmText",type:"string",default:"'确定删除'",description:"展开后的确认按钮文字"},{name:"cancelText",type:"string",default:"'取消'",description:"展开后的取消按钮文字"},{name:"variant",type:"'danger' | 'warning' | 'primary'",default:"'danger'",description:"颜色风格"}]},{id:"icon-morph",name:"Icon Morph",title:"SVG 矢量平滑形变图标",category:"Interactive",suiteId:"tactile-actions",description:"基于 SVG 矢量变换的连续态形变图标。支持 Menu ↔ Close、Play ↔ Pause、Plus ↔ Minus 等多维高频操作形态。",componentFilename:"IconMorph.vue",componentCode:`<script setup lang="ts">
import { cn } from '@/lib/utils'

interface IconMorphProps {
  modelValue?: boolean
  mode?: 'menu-close' | 'play-pause' | 'plus-minus'
  size?: number
  strokeWidth?: number
  class?: string
}

const props = withDefaults(defineProps<IconMorphProps>(), {
  modelValue: false,
  mode: 'menu-close',
  size: 24,
  strokeWidth: 2,
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void
  (e: 'click'): void
}>()

function toggle() {
  emit('update:modelValue', !props.modelValue)
  emit('click')
}
<\/script>

<template>
  <button
    type="button"
    @click="toggle"
    :class="
      cn(
        'relative inline-flex items-center justify-center rounded-xl p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer select-none',
        props.class
      )
    "
    :style="{ width: \`\${props.size + 16}px\`, height: \`\${props.size + 16}px\` }"
  >
    <svg
      v-if="props.mode === 'menu-close'"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      :stroke-width="props.strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="overflow-visible"
    >
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        class="transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center"
        :style="{
          transform: props.modelValue ? 'translateY(6px) rotate(45deg)' : 'none',
        }"
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        class="transition-all duration-200 ease-out origin-center"
        :style="{
          opacity: props.modelValue ? '0' : '1',
          transform: props.modelValue ? 'scaleX(0)' : 'scaleX(1)',
        }"
      />
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        class="transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center"
        :style="{
          transform: props.modelValue ? 'translateY(-6px) rotate(-45deg)' : 'none',
        }"
      />
    </svg>

    <svg
      v-else-if="props.mode === 'play-pause'"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      :stroke-width="props.strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="overflow-visible"
    >
      <line
        x1="6"
        y1="4"
        x2="6"
        y2="20"
        class="transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        :style="{
          transform: props.modelValue ? 'none' : 'translateX(1px)',
        }"
      />
      <path
        :d="props.modelValue ? 'M18 4 L18 20' : 'M6 4 L20 12 L6 20'"
        class="transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
      />
    </svg>

    <svg
      v-else-if="props.mode === 'plus-minus'"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      :stroke-width="props.strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <line
        x1="12"
        y1="5"
        x2="12"
        y2="19"
        class="transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center"
        :style="{
          transform: props.modelValue ? 'rotate(90deg) scale(0)' : 'rotate(0deg) scale(1)',
          opacity: props.modelValue ? '0' : '1',
        }"
      />
    </svg>
  </button>
</template>`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import IconMorph from '@/components/ui/IconMorph.vue'

const isMenuOpen = ref(false)
const isPlaying = ref(false)
const isExpanded = ref(false)
<\/script>

<template>
  <div class="flex items-center gap-6">
    <IconMorph v-model="isMenuOpen" mode="menu-close" :size="24" />
    <IconMorph v-model="isPlaying" mode="play-pause" :size="24" />
    <IconMorph v-model="isExpanded" mode="plus-minus" :size="24" />
  </div>
</template>`,propsList:[{name:"modelValue",type:"boolean",default:"false",description:"当前状态开关"},{name:"mode",type:"'menu-close' | 'play-pause' | 'plus-minus'",default:"'menu-close'",description:"形变模式"},{name:"size",type:"number",default:"24",description:"SVG 图标尺寸 (px)"},{name:"strokeWidth",type:"number",default:"2",description:"线条描边粗细"}]},{id:"action-button",name:"Action Button",title:"高触感工具栏原子按钮",category:"Button",suiteId:"tactile-actions",description:"带有精准弹簧缩放阻尼（active:scale-90）与微拟态悬停反馈的原子操作按钮，支持 Tooltip、角标与激活态锁定。",componentFilename:"ActionButton.vue",componentCode:`<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'

interface ActionButtonProps {
  label?: string
  tooltip?: string
  icon?: any
  active?: boolean
  disabled?: boolean
  badge?: string | number
  size?: 'sm' | 'md' | 'lg'
  class?: string
}

const props = withDefaults(defineProps<ActionButtonProps>(), {
  active: false,
  disabled: false,
  size: 'md',
})

const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void
}>()

const showTooltip = ref(false)

function handleClick(e: MouseEvent) {
  if (props.disabled) return
  emit('click', e)
}
<\/script>

<template>
  <div class="relative inline-flex items-center">
    <button
      type="button"
      :disabled="props.disabled"
      @click="handleClick"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
      :class="
        cn(
          'group relative flex items-center justify-center rounded-xl border font-medium select-none transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer',
          'active:scale-90 hover:scale-[1.03]',
          props.size === 'sm' && 'h-8 px-2.5 text-xs gap-1.5',
          props.size === 'md' && 'h-9 px-3 text-xs sm:text-sm gap-2',
          props.size === 'lg' && 'h-11 px-4 text-sm sm:text-base gap-2.5',
          props.active
            ? 'border-blue-500/50 bg-blue-50 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400'
            : 'border-zinc-200/80 bg-white/90 text-zinc-700 shadow-2xs hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800/80 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white',
          props.disabled && 'opacity-50 cursor-not-allowed active:scale-100 hover:scale-100',
          props.class
        )
      "
    >
      <component
        v-if="props.icon"
        :is="props.icon"
        :class="[
          'shrink-0 transition-transform duration-150',
          props.size === 'sm' && 'h-3.5 w-3.5',
          props.size === 'md' && 'h-4 w-4',
          props.size === 'lg' && 'h-5 w-5',
        ]"
      />
      <span v-if="props.label" class="truncate">{{ props.label }}</span>
      <span
        v-if="props.badge !== undefined"
        class="ml-0.5 rounded-full bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400"
      >
        {{ props.badge }}
      </span>
      <slot />
    </button>

    <transition name="action-tip">
      <div
        v-if="showTooltip && props.tooltip"
        class="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap rounded-md border border-zinc-200/80 bg-white/95 px-2 py-0.5 text-[10px] font-medium text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-800/95 dark:text-zinc-200"
      >
        {{ props.tooltip }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
.action-tip-enter-active,
.action-tip-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.action-tip-enter-from,
.action-tip-leave-to {
  opacity: 0;
  transform: translate(-50%, 4px);
}
</style>`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import ActionButton from '@/components/ui/ActionButton.vue'
import { Sparkles, Pin, Bookmark } from 'lucide-vue-next'

const isPinned = ref(true)
<\/script>

<template>
  <div class="flex items-center gap-3">
    <ActionButton
      :icon="Pin"
      :active="isPinned"
      tooltip="钉在控制台"
      @click="isPinned = !isPinned"
    />
    <ActionButton
      label="生成副本"
      :icon="Sparkles"
      badge="AI"
      tooltip="一键唤醒模型生成"
    />
    <ActionButton
      :icon="Bookmark"
      tooltip="添加到书签"
    />
  </div>
</template>`,propsList:[{name:"label",type:"string",default:"undefined",description:"按钮文案"},{name:"tooltip",type:"string",default:"undefined",description:"悬浮气泡提示"},{name:"icon",type:"Component",default:"undefined",description:"前缀图标"},{name:"active",type:"boolean",default:"false",description:"是否为激活点亮态"},{name:"badge",type:"string | number",default:"undefined",description:"右侧徽标内容"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"按钮尺寸规格"}]},{id:"split-button",name:"Split Button",title:"发丝级分体复合操作按钮",category:"Button",suiteId:"tactile-actions",description:"主操作与伴随快捷动作一体化的分体按钮。拥有发丝级物理微分割线、丝滑展开下拉菜单与键盘/点击外联关闭机制。",componentFilename:"SplitButton.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronDown, Rocket } from 'lucide-vue-next'

export interface SplitMenuItem {
  id: string | number
  label: string
  icon?: any
  description?: string
  onClick?: () => void
}

interface SplitButtonProps {
  label?: string
  icon?: any
  items?: SplitMenuItem[]
  variant?: 'primary' | 'secondary' | 'dark'
  class?: string
}

const props = withDefaults(defineProps<SplitButtonProps>(), {
  label: '立即发布上线',
  icon: Rocket,
  variant: 'primary',
  items: () => [
    { id: 'preview', label: '发布至 Staging 预览环境', description: '生成独立预览分支 URL' },
    { id: 'draft', label: '保存为草稿快照', description: '仅团队协作成员可见' },
    { id: 'schedule', label: '定时发布计划', description: '设定指定时间自动化推上线' },
  ],
})

const emit = defineEmits<{
  (e: 'primaryClick'): void
  (e: 'select', item: SplitMenuItem): void
}>()

const isOpen = ref(false)
const containerRef = ref<HTMLDivElement | null>(null)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function handlePrimary() {
  emit('primaryClick')
}

function handleSelect(item: SplitMenuItem) {
  isOpen.value = false
  emit('select', item)
  if (item.onClick) item.onClick()
}

function handleClickOutside(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
<\/script>

<template>
  <div ref="containerRef" :class="cn('relative inline-flex items-center select-none', props.class)">
    <div
      :class="[
        'flex h-10 items-stretch overflow-hidden rounded-xl border shadow-sm transition-all duration-200',
        props.variant === 'primary' && 'border-blue-600 bg-blue-600 text-white hover:bg-blue-500',
        props.variant === 'secondary' && 'border-zinc-200/80 bg-white/90 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800',
      ]"
    >
      <button
        type="button"
        @click="handlePrimary"
        class="flex items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-transform active:scale-95 cursor-pointer"
      >
        <component :is="props.icon" class="h-4 w-4" />
        <span>{{ props.label }}</span>
      </button>

      <div
        :class="[
          'w-px self-stretch',
          props.variant === 'primary' ? 'bg-blue-400/50' : 'bg-zinc-200 dark:bg-zinc-800',
        ]"
      />

      <button
        type="button"
        @click.stop="toggleDropdown"
        class="flex items-center justify-center px-2.5 transition-colors hover:bg-black/10 active:scale-95 cursor-pointer dark:hover:bg-white/10"
        title="更多选项"
      >
        <ChevronDown
          :class="[
            'h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]',
            isOpen && 'rotate-180',
          ]"
        />
      </button>
    </div>

    <transition name="split-menu">
      <div
        v-if="isOpen && props.items && props.items.length > 0"
        class="absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-1"
      >
        <button
          v-for="item in props.items"
          :key="item.id"
          type="button"
          @click="handleSelect(item)"
          class="flex w-full flex-col items-start rounded-lg px-3 py-2 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
        >
          <span class="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{{ item.label }}</span>
          <span v-if="item.description" class="text-[10px] text-zinc-400 mt-0.5">{{ item.description }}</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.split-menu-enter-active,
.split-menu-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.split-menu-enter-from,
.split-menu-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>`,usageCode:`<script setup lang="ts">
import SplitButton, { type SplitMenuItem } from '@/components/ui/SplitButton.vue'
import { CloudUpload } from 'lucide-vue-next'

function onPrimary() {
  console.log('立即部署到生产集群')
}

function onSelect(item: SplitMenuItem) {
  console.log('选择了备用选项:', item.label)
}
<\/script>

<template>
  <div class="flex items-center gap-4">
    <SplitButton
      label="部署到生产环境"
      :icon="CloudUpload"
      variant="primary"
      @primary-click="onPrimary"
      @select="onSelect"
    />
  </div>
</template>`,propsList:[{name:"label",type:"string",default:"'立即发布上线'",description:"主按钮文案"},{name:"icon",type:"Component",default:"Rocket",description:"主按钮前缀图标"},{name:"variant",type:"'primary' | 'secondary'",default:"'primary'",description:"按钮视觉主题"},{name:"items",type:"SplitMenuItem[]",default:"[...]",description:"下拉伴随菜单项列表"}]},{id:"reactions",name:"Reactions",title:"物理回弹 Emoji 表情反应群",category:"Interactive",suiteId:"tactile-actions",description:"交互手感细腻的表情互动组。按下时具备独立的 Spring 弹跳物理形变、数值平滑递增递减与自定义追加能力。",componentFilename:"Reactions.vue",componentCode:`<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { SmilePlus } from 'lucide-vue-next'

export interface ReactionItem {
  id: string
  emoji: string
  count: number
  active?: boolean
}

interface ReactionsProps {
  items?: ReactionItem[]
  allowAdd?: boolean
  class?: string
}

const props = withDefaults(defineProps<ReactionsProps>(), {
  allowAdd: true,
  items: () => [
    { id: 'fire', emoji: '🔥', count: 48, active: true },
    { id: 'rocket', emoji: '🚀', count: 32, active: false },
    { id: 'heart', emoji: '❤️', count: 65, active: false },
    { id: 'zap', emoji: '⚡', count: 19, active: false },
    { id: 'eyes', emoji: '👀', count: 12, active: false },
  ],
})

const internalItems = ref<ReactionItem[]>(JSON.parse(JSON.stringify(props.items)))
const bouncingId = ref<string | null>(null)

function toggleReaction(item: ReactionItem) {
  item.active = !item.active
  item.count += item.active ? 1 : -1

  bouncingId.value = item.id
  setTimeout(() => {
    bouncingId.value = null
  }, 400)
}
<\/script>

<template>
  <div :class="cn('inline-flex flex-wrap items-center gap-1.5 select-none', props.class)">
    <button
      v-for="item in internalItems"
      :key="item.id"
      type="button"
      @click="toggleReaction(item)"
      :class="[
        'group flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold transition-all duration-200 active:scale-90 cursor-pointer',
        item.active
          ? 'border-blue-500/50 bg-blue-50/80 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400'
          : 'border-zinc-200/80 bg-white/80 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800',
      ]"
    >
      <span
        :class="[
          'text-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
          bouncingId === item.id && 'scale-135 -translate-y-0.5',
          'group-hover:scale-110',
        ]"
      >
        {{ item.emoji }}
      </span>

      <span class="font-mono text-[11px] font-bold">
        {{ item.count }}
      </span>
    </button>

    <button
      v-if="props.allowAdd"
      type="button"
      class="flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-zinc-300 text-zinc-400 transition-colors hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 cursor-pointer"
      title="添加表情反馈"
    >
      <SmilePlus class="h-3.5 w-3.5" />
    </button>
  </div>
</template>`,usageCode:`<script setup lang="ts">
import Reactions from '@/components/ui/Reactions.vue'
<\/script>

<template>
  <div class="p-4">
    <Reactions />
  </div>
</template>`,propsList:[{name:"items",type:"ReactionItem[]",default:"[...]",description:"表情项列表（id, emoji, count, active）"},{name:"allowAdd",type:"boolean",default:"true",description:"是否显示追加表情按钮"}]}],ep={class:"sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80 transition-colors"},tp={class:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"},np={class:"flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md shadow-blue-500/20 text-white transition-transform duration-300 group-hover:scale-105"},rp={class:"hidden md:flex items-center gap-6 text-sm font-medium"},sp={class:"flex items-center gap-3"},op={href:"https://github.com",target:"_blank",rel:"noopener noreferrer",class:"flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"GitHub 仓库"},ip=fe({__name:"Header",setup(e){return(t,n)=>{const r=lr("router-link");return w(),_("header",ep,[c("div",tp,[v(r,{to:"/",class:"flex items-center gap-2.5 group"},{default:J(()=>[c("div",np,[v(S(Fe),{class:"h-5 w-5"})]),n[0]||(n[0]=c("div",{class:"flex flex-col"},[c("div",{class:"flex items-center gap-1.5"},[c("span",{class:"text-lg font-black tracking-tight text-zinc-900 dark:text-white"},[Ve(" Aura"),c("span",{class:"text-blue-600 dark:text-blue-400"},"UI")]),c("span",{class:"rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300"}," Vue 3.5 ")]),c("span",{class:"text-[10px] text-zinc-400"},"动效原子代码库")],-1))]),_:1}),c("nav",rp,[v(r,{to:"/",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:J(()=>[...n[1]||(n[1]=[Ve(" 官网首页 ",-1)])]),_:1}),v(r,{to:"/docs/border-beam",class:"inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:J(()=>[v(S(mn),{class:"h-4 w-4"}),c("span",null,"组件库 ("+U(S(Jt).length)+")",1)]),_:1}),n[2]||(n[2]=c("a",{href:"#features",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}," 核心特性 ",-1))]),c("div",sp,[v(Qu),v(Wu),c("a",op,[v(S(Iu),{class:"h-4 w-4"})]),v(r,{to:"/docs/border-beam",class:"hidden sm:inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"},{default:J(()=>[...n[3]||(n[3]=[Ve(" 浏览代码 ",-1)])]),_:1})])])])}}}),ap={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50 transition-colors"},lp={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},cp={class:"flex flex-col md:flex-row items-center justify-between gap-6"},dp={class:"flex items-center gap-3"},up={class:"flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"},pp={class:"flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"},fp={class:"inline-flex items-center gap-1"},mp=fe({__name:"Footer",setup(e){return(t,n)=>(w(),_("footer",ap,[c("div",lp,[c("div",cp,[c("div",dp,[c("div",up,[v(S(Fe),{class:"h-4 w-4"})]),n[0]||(n[0]=c("div",null,[c("p",{class:"text-sm font-bold text-zinc-900 dark:text-zinc-100"}," Aura UI (Vue 3) "),c("p",{class:"text-xs text-zinc-500 dark:text-zinc-400"}," 对标 Magic UI / Aceternity UI，属于 Vue 3 的动效原子代码库 ")],-1))]),c("div",pp,[n[3]||(n[3]=c("span",null,"采用 MIT 协议开源，完全支持 Copy & Paste 即用",-1)),n[4]||(n[4]=c("span",null,"•",-1)),c("span",fp,[n[1]||(n[1]=Ve(" Built with ",-1)),v(S(Mu),{class:"h-3 w-3 text-red-500 fill-red-500"}),n[2]||(n[2]=Ve(" for Vue 3 ecosystem ",-1))])])])])]))}}),gp={class:"min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-200"},hp={class:"flex-1"},bp=fe({__name:"App",setup(e){return(t,n)=>{const r=lr("router-view");return w(),_("div",gp,[v(ip),c("div",hp,[v(r)]),v(mp)])}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const zn=typeof document<"u";function gl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function xp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&gl(e.default)}const _e=Object.assign;function ws(e,t){const n={};for(const r in t){const s=t[r];n[r]=wt(s)?s.map(e):e(s)}return n}const Wn=()=>{},wt=Array.isArray;function bi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const hl=/#/g,vp=/&/g,yp=/\//g,wp=/=/g,kp=/\?/g,bl=/\+/g,zp=/%5B/g,_p=/%5D/g,xl=/%5E/g,Cp=/%60/g,vl=/%7B/g,Sp=/%7C/g,yl=/%7D/g,Ap=/%20/g;function wo(e){return e==null?"":encodeURI(""+e).replace(Sp,"|").replace(zp,"[").replace(_p,"]")}function Rp(e){return wo(e).replace(vl,"{").replace(yl,"}").replace(xl,"^")}function Ks(e){return wo(e).replace(bl,"%2B").replace(Ap,"+").replace(hl,"%23").replace(vp,"%26").replace(Cp,"`").replace(vl,"{").replace(yl,"}").replace(xl,"^")}function Tp(e){return Ks(e).replace(wp,"%3D")}function Ip(e){return wo(e).replace(hl,"%23").replace(kp,"%3F")}function Mp(e){return Ip(e).replace(yp,"%2F")}function or(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const $p=/\/$/,Ep=e=>e.replace($p,"");function ks(e,t,n="/"){let r,s={},o="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=t.slice(0,l),o=t.slice(l,a>0?a:t.length),s=e(o.slice(1))),a>=0&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=Op(r??t,n),{fullPath:r+o+i,path:r,query:s,hash:or(i)}}function Pp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function xi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Fp(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&In(t.matched[r],n.matched[s])&&wl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function In(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Lp(e[n],t[n]))return!1;return!0}function Lp(e,t){return wt(e)?vi(e,t):wt(t)?vi(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function vi(e,t){return wt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Op(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(i).join("/")}const Xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ys=(function(e){return e.pop="pop",e.push="push",e})({}),zs=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function jp(e){if(!e)if(zn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ep(e)}const Dp=/^[^#]+#/;function Bp(e,t){return e.replace(Dp,"#")+t}function Np(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const is=()=>({left:window.scrollX,top:window.scrollY});function Vp(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Np(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function yi(e,t){return(history.state?history.state.position-t:-1)+e}const Zs=new Map;function Hp(e,t){Zs.set(e,t)}function Gp(e){const t=Zs.get(e);return Zs.delete(e),t}function Up(e){return typeof e=="string"||e&&typeof e=="object"}function kl(e){return typeof e=="string"||typeof e=="symbol"}let De=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const zl=Symbol("");De.MATCHER_NOT_FOUND+"",De.NAVIGATION_GUARD_REDIRECT+"",De.NAVIGATION_ABORTED+"",De.NAVIGATION_CANCELLED+"",De.NAVIGATION_DUPLICATED+"";function Mn(e,t){return _e(new Error,{type:e,[zl]:!0},t)}function jt(e,t){return e instanceof Error&&zl in e&&(t==null||!!(e.type&t))}const qp=["params","query","hash"];function Wp(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of qp)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Xp(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(bl," "),o=s.indexOf("="),i=or(o<0?s:s.slice(0,o)),a=o<0?null:or(s.slice(o+1));if(i in t){let l=t[i];wt(l)||(l=t[i]=[l]),l.push(a)}else t[i]=a}return t}function wi(e){let t="";for(let n in e){const r=e[n];if(n=Tp(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(wt(r)?r.map(s=>s&&Ks(s)):[r&&Ks(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Kp(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=wt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Yp=Symbol(""),ki=Symbol(""),ko=Symbol(""),zo=Symbol(""),Js=Symbol("");function On(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Zt(e,t,n,r,s,o=i=>i()){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const p=m=>{m===!1?l(Mn(De.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?l(m):Up(m)?l(Mn(De.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(i&&r.enterCallbacks[s]===i&&typeof m=="function"&&i.push(m),a())},u=o(()=>e.call(r&&r.instances[s],t,n,p));let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(m=>l(m))})}function _s(e,t,n,r,s=o=>o()){const o=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(gl(l)){const p=(l.__vccOpts||l)[t];p&&o.push(Zt(p,n,r,i,a,s))}else{let p=l();o.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const d=xp(u)?u.default:u;i.mods[a]=u,i.components[a]=d;const m=(d.__vccOpts||d)[t];return m&&Zt(m,n,r,i,a,s)()}))}}return o}function Zp(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const a=t.matched[i];a&&(e.matched.find(p=>In(p,a))?r.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(p=>In(p,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Jp=()=>location.protocol+"//"+location.host;function _l(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let i=s.includes(e.slice(o))?e.slice(o).length:1,a=s.slice(i);return a[0]!=="/"&&(a="/"+a),xi(a,"")}return xi(n,e)+r+s}function Qp(e,t,n,r){let s=[],o=[],i=null;const a=({state:m})=>{const g=_l(e,location),A=n.value,k=t.value;let T=0;if(m){if(n.value=g,t.value=m,i&&i===A){i=null;return}T=k?m.position-k.position:0}else r(g);s.forEach($=>{$(n.value,A,{delta:T,type:Ys.pop,direction:T?T>0?zs.forward:zs.back:zs.unknown})})};function l(){i=n.value}function p(m){s.push(m);const g=()=>{const A=s.indexOf(m);A>-1&&s.splice(A,1)};return o.push(g),g}function u(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(_e({},m.state,{scroll:is()}),"")}}function d(){for(const m of o)m();o=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:p,destroy:d}}function zi(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?is():null}}function ef(e){const{history:t,location:n}=window,r={value:_l(e,n)},s={value:t.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,p,u){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Jp()+e+l;try{t[u?"replaceState":"pushState"](p,"",m),s.value=p}catch(g){console.error(g),n[u?"replace":"assign"](m)}}function i(l,p){o(l,_e({},t.state,zi(s.value.back,l,s.value.forward,!0),p,{position:s.value.position}),!0),r.value=l}function a(l,p){const u=_e({},s.value,t.state,{forward:l,scroll:is()});o(u.current,u,!0),o(l,_e({},zi(r.value,l,null),{position:u.position+1},p),!1),r.value=l}return{location:r,state:s,push:a,replace:i}}function tf(e){e=jp(e);const t=ef(e),n=Qp(e,t.state,t.location,t.replace);function r(o,i=!0){i||n.pauseListeners(),history.go(o)}const s=_e({location:"",base:e,go:r,createHref:Bp.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let gn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ue=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ue||{});const nf={type:gn.Static,value:""},rf=/[a-zA-Z0-9_]/;function sf(e){if(!e)return[[]];if(e==="/")return[[nf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${p}": ${g}`)}let n=Ue.Static,r=n;const s=[];let o;function i(){o&&s.push(o),o=[]}let a=0,l,p="",u="";function d(){p&&(n===Ue.Static?o.push({type:gn.Static,value:p}):n===Ue.Param||n===Ue.ParamRegExp||n===Ue.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),o.push({type:gn.Param,value:p,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),p="")}function m(){p+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==Ue.ParamRegExp){r=n,n=Ue.EscapeNext;continue}switch(n){case Ue.Static:l==="/"?(p&&d(),i()):l===":"?(d(),n=Ue.Param):m();break;case Ue.EscapeNext:m(),n=r;break;case Ue.Param:l==="("?n=Ue.ParamRegExp:rf.test(l)?m():(d(),n=Ue.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ue.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Ue.ParamRegExpEnd:u+=l;break;case Ue.ParamRegExpEnd:d(),n=Ue.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===Ue.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),d(),i(),s}const _i="[^/]+?",of={sensitive:!1,strict:!1,start:!0,end:!0};var nt=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(nt||{});const af=/[.+*?^${}()[\]/\\]/g;function lf(e,t){const n=_e({},of,t),r=[];let s=n.start?"^":"";const o=[];for(const p of e){const u=p.length?[]:[nt.Root];n.strict&&!p.length&&(s+="/");for(let d=0;d<p.length;d++){const m=p[d];let g=nt.Segment+(n.sensitive?nt.BonusCaseSensitive:0);if(m.type===gn.Static)d||(s+="/"),s+=m.value.replace(af,"\\$&"),g+=nt.Static;else if(m.type===gn.Param){const{value:A,repeatable:k,optional:T,regexp:$}=m;o.push({name:A,repeatable:k,optional:T});const b=$||_i;if(b!==_i){g+=nt.BonusCustomRegExp;try{`${b}`}catch(y){throw new Error(`Invalid custom RegExp for param "${A}" (${b}): `+y.message)}}let x=k?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(x=T&&p.length<2?`(?:/${x})`:"/"+x),T&&(x+="?"),s+=x,g+=nt.Dynamic,T&&(g+=nt.BonusOptional),k&&(g+=nt.BonusRepeatable),b===".*"&&(g+=nt.BonusWildcard)}u.push(g)}r.push(u)}if(n.strict&&n.end){const p=r.length-1;r[p][r[p].length-1]+=nt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function a(p){const u=p.match(i),d={};if(!u)return null;for(let m=1;m<u.length;m++){const g=u[m]||"",A=o[m-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(p){let u="",d=!1;for(const m of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of m)if(g.type===gn.Static)u+=g.value;else if(g.type===gn.Param){const{value:A,repeatable:k,optional:T}=g,$=A in p?p[A]:"";if(wt($)&&!k)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const b=wt($)?$.join("/"):$;if(!b)if(T)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);u+=b}}return u||"/"}return{re:i,score:r,keys:o,parse:a,stringify:l}}function cf(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===nt.Static+nt.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===nt.Static+nt.Segment?1:-1:0}function Cl(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=cf(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(Ci(r))return 1;if(Ci(s))return-1}return s.length-r.length}function Ci(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const df={strict:!1,end:!0,sensitive:!1};function uf(e,t,n){const r=lf(sf(e.path),n),s=_e(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function pf(e,t){const n=[],r=new Map;t=bi(df,t);function s(d){return r.get(d)}function o(d,m,g){const A=!g,k=Ai(d);k.aliasOf=g&&g.record;const T=bi(t,d),$=[k];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const I of y)$.push(Ai(_e({},k,{components:g?g.record.components:k.components,path:I,aliasOf:g?g.record:k})))}let b,x;for(const y of $){const{path:I}=y;if(m&&I[0]!=="/"){const P=m.record.path,N=P[P.length-1]==="/"?"":"/";y.path=m.record.path+(I&&N+I)}if(b=uf(y,m,T),g?g.alias.push(b):(x=x||b,x!==b&&x.alias.push(b),A&&d.name&&!Ri(b)&&i(d.name)),Sl(b)&&l(b),k.children){const P=k.children;for(let N=0;N<P.length;N++)o(P[N],b,g&&g.children[N])}g=g||b}return x?()=>{i(x)}:Wn}function i(d){if(kl(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return n}function l(d){const m=gf(d,n);n.splice(m,0,d),d.record.name&&!Ri(d)&&r.set(d.record.name,d)}function p(d,m){let g,A={},k,T;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Mn(De.MATCHER_NOT_FOUND,{location:d});T=g.record.name,A=_e(Si(m.params,g.keys.filter(x=>!x.optional).concat(g.parent?g.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),d.params&&Si(d.params,g.keys.map(x=>x.name))),k=g.stringify(A)}else if(d.path!=null)k=d.path,g=n.find(x=>x.re.test(k)),g&&(A=g.parse(k),T=g.record.name);else{if(g=m.name?r.get(m.name):n.find(x=>x.re.test(m.path)),!g)throw Mn(De.MATCHER_NOT_FOUND,{location:d,currentLocation:m});T=g.record.name,A=_e({},m.params,d.params),k=g.stringify(A)}const $=[];let b=g;for(;b;)$.unshift(b.record),b=b.parent;return{name:T,path:k,params:A,matched:$,meta:mf($)}}e.forEach(d=>o(d));function u(){n.length=0,r.clear()}return{addRoute:o,resolve:p,removeRoute:i,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Si(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ai(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ff(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ff(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ri(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function mf(e){return e.reduce((t,n)=>_e(t,n.meta),{})}function gf(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;Cl(e,t[o])<0?r=o:n=o+1}const s=hf(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function hf(e){let t=e;for(;t=t.parent;)if(Sl(t)&&Cl(e,t)===0)return t}function Sl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ti(e){const t=$t(ko),n=$t(zo),r=Ce(()=>{const l=S(e.to);return t.resolve(l)}),s=Ce(()=>{const{matched:l}=r.value,{length:p}=l,u=l[p-1],d=n.matched;if(!u||!d.length)return-1;const m=d.findIndex(In.bind(null,u));if(m>-1)return m;const g=Ii(l[p-2]);return p>1&&Ii(u)===g&&d[d.length-1].path!==g?d.findIndex(In.bind(null,l[p-2])):m}),o=Ce(()=>s.value>-1&&wf(n.params,r.value.params)),i=Ce(()=>s.value>-1&&s.value===n.matched.length-1&&wl(n.params,r.value.params));function a(l={}){if(yf(l)){const p=t[S(e.replace)?"replace":"push"](S(e.to)).catch(Wn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:o,isExactActive:i,navigate:a}}function bf(e){return e.length===1?e[0]:e}const xf=fe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ti,setup(e,{slots:t}){const n=Zr(Ti(e)),{options:r}=$t(ko),s=Ce(()=>({[Mi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Mi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&bf(t.default(n));return e.custom?o:Tn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),vf=xf;function yf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function wf(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!wt(s)||s.length!==r.length||r.some((o,i)=>o.valueOf()!==s[i].valueOf()))return!1}return!0}function Ii(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Mi=(e,t,n)=>e??t??n,kf=fe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=$t(Js),s=Ce(()=>e.route||r.value),o=$t(ki,0),i=Ce(()=>{let p=S(o);const{matched:u}=s.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),a=Ce(()=>s.value.matched[i.value]);kr(ki,Ce(()=>i.value+1)),kr(Yp,a),kr(Js,s);const l=X();return vt(()=>[l.value,a.value,e.name],([p,u,d],[m,g,A])=>{u&&(u.instances[d]=p,g&&g!==u&&p&&p===m&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),p&&u&&(!g||!In(u,g)||!m)&&(u.enterCallbacks[d]||[]).forEach(k=>k(p))},{flush:"post"}),()=>{const p=s.value,u=e.name,d=a.value,m=d&&d.components[u];if(!m)return $i(n.default,{Component:m,route:p});const g=d.props[u],A=g?g===!0?p.params:typeof g=="function"?g(p):g:null,T=Tn(m,_e({},A,t,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return $i(n.default,{Component:T,route:p})||T}}});function $i(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const zf=kf;function _f(e){const t=pf(e.routes,e),n=e.parseQuery||Xp,r=e.stringifyQuery||wi,s=e.history,o=On(),i=On(),a=On(),l=Rc(Xt);let p=Xt;zn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ws.bind(null,E=>""+E),d=ws.bind(null,Mp),m=ws.bind(null,or);function g(E,Y){let V,te;return kl(E)?(V=t.getRecordMatcher(E),te=Y):te=E,t.addRoute(te,V)}function A(E){const Y=t.getRecordMatcher(E);Y&&t.removeRoute(Y)}function k(){return t.getRoutes().map(E=>E.record)}function T(E){return!!t.getRecordMatcher(E)}function $(E,Y){if(Y=_e({},Y||l.value),typeof E=="string"){const R=ks(n,E,Y.path),M=t.resolve({path:R.path},Y),D=s.createHref(R.fullPath);return _e(R,M,{params:m(M.params),hash:or(R.hash),redirectedFrom:void 0,href:D})}let V;if(E.path!=null)V=_e({},E,{path:ks(n,E.path,Y.path).path});else{const R=_e({},E.params);for(const M in R)R[M]==null&&delete R[M];V=_e({},E,{params:d(R)}),Y.params=d(Y.params)}const te=t.resolve(V,Y),f=E.hash||"";te.params=u(m(te.params));const h=Pp(r,_e({},E,{hash:Rp(f),path:te.path})),z=s.createHref(h);return _e({fullPath:h,hash:f,query:r===wi?Kp(E.query):E.query||{}},te,{redirectedFrom:void 0,href:z})}function b(E){return typeof E=="string"?ks(n,E,l.value.path):_e({},E)}function x(E,Y){if(p!==E)return Mn(De.NAVIGATION_CANCELLED,{from:Y,to:E})}function y(E){return N(E)}function I(E){return y(_e(b(E),{replace:!0}))}function P(E,Y){const V=E.matched[E.matched.length-1];if(V&&V.redirect){const{redirect:te}=V;let f=typeof te=="function"?te(E,Y):te;return typeof f=="string"&&(f=f.includes("?")||f.includes("#")?f=b(f):{path:f},f.params={}),_e({query:E.query,hash:E.hash,params:f.path!=null?{}:E.params},f)}}function N(E,Y){const V=p=$(E),te=l.value,f=E.state,h=E.force,z=E.replace===!0,R=P(V,te);if(R)return N(_e(b(R),{state:typeof R=="object"?_e({},f,R.state):f,force:h,replace:z}),Y||V);const M=V;M.redirectedFrom=Y;let D;return!h&&Fp(r,te,V)&&(D=Mn(De.NAVIGATION_DUPLICATED,{to:M,from:te}),re(te,te,!0,!1)),(D?Promise.resolve(D):ee(M,te)).catch(H=>jt(H)?jt(H,De.NAVIGATION_GUARD_REDIRECT)?H:F(H):C(H,M,te)).then(H=>{if(H){if(jt(H,De.NAVIGATION_GUARD_REDIRECT))return N(_e({replace:z},b(H.to),{state:typeof H.to=="object"?_e({},f,H.to.state):f,force:h}),Y||M)}else H=G(M,te,!0,z,f);return oe(M,te,H),H})}function L(E,Y){const V=x(E,Y);return V?Promise.reject(V):Promise.resolve()}function O(E){const Y=Be.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(E):E()}function ee(E,Y){let V;const[te,f,h]=Zp(E,Y);V=_s(te.reverse(),"beforeRouteLeave",E,Y);for(const R of te)R.leaveGuards.forEach(M=>{V.push(Zt(M,E,Y))});const z=L.bind(null,E,Y);return V.push(z),xe(V).then(()=>{V=[];for(const R of o.list())V.push(Zt(R,E,Y));return V.push(z),xe(V)}).then(()=>{V=_s(f,"beforeRouteUpdate",E,Y);for(const R of f)R.updateGuards.forEach(M=>{V.push(Zt(M,E,Y))});return V.push(z),xe(V)}).then(()=>{V=[];for(const R of h)if(R.beforeEnter)if(wt(R.beforeEnter))for(const M of R.beforeEnter)V.push(Zt(M,E,Y));else V.push(Zt(R.beforeEnter,E,Y));return V.push(z),xe(V)}).then(()=>(E.matched.forEach(R=>R.enterCallbacks={}),V=_s(h,"beforeRouteEnter",E,Y,O),V.push(z),xe(V))).then(()=>{V=[];for(const R of i.list())V.push(Zt(R,E,Y));return V.push(z),xe(V)}).catch(R=>jt(R,De.NAVIGATION_CANCELLED)?R:Promise.reject(R))}function oe(E,Y,V){a.list().forEach(te=>O(()=>te(E,Y,V)))}function G(E,Y,V,te,f){const h=x(E,Y);if(h)return h;const z=Y===Xt,R=zn?history.state:{};V&&(te||z?s.replace(E.fullPath,_e({scroll:z&&R&&R.scroll},f)):s.push(E.fullPath,f)),l.value=E,re(E,Y,V,z),F()}let ue;function Ae(){ue||(ue=s.listen((E,Y,V)=>{if(!Re.listening)return;const te=$(E),f=P(te,Re.currentRoute.value);if(f){N(_e(f,{replace:!0,force:!0}),te).catch(Wn);return}p=te;const h=l.value;zn&&Hp(yi(h.fullPath,V.delta),is()),ee(te,h).catch(z=>jt(z,De.NAVIGATION_ABORTED|De.NAVIGATION_CANCELLED)?z:jt(z,De.NAVIGATION_GUARD_REDIRECT)?(N(_e(b(z.to),{force:!0}),te).then(R=>{jt(R,De.NAVIGATION_ABORTED|De.NAVIGATION_DUPLICATED)&&!V.delta&&V.type===Ys.pop&&s.go(-1,!1)}).catch(Wn),Promise.reject()):(V.delta&&s.go(-V.delta,!1),C(z,te,h))).then(z=>{z=z||G(te,h,!1),z&&(V.delta&&!jt(z,De.NAVIGATION_CANCELLED)?s.go(-V.delta,!1):V.type===Ys.pop&&jt(z,De.NAVIGATION_ABORTED|De.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),oe(te,h,z)}).catch(Wn)}))}let Le=On(),ge=On(),ae;function C(E,Y,V){F(E);const te=ge.list();return te.length?te.forEach(f=>f(E,Y,V)):console.error(E),Promise.reject(E)}function Ee(){return ae&&l.value!==Xt?Promise.resolve():new Promise((E,Y)=>{Le.add([E,Y])})}function F(E){return ae||(ae=!E,Ae(),Le.list().forEach(([Y,V])=>E?V(E):Y()),Le.reset()),E}function re(E,Y,V,te){const{scrollBehavior:f}=e;if(!zn||!f)return Promise.resolve();const h=!V&&Gp(yi(E.fullPath,0))||(te||!V)&&history.state&&history.state.scroll||null;return mo().then(()=>f(E,Y,h)).then(z=>z&&Vp(z)).catch(z=>C(z,E,Y))}const he=E=>s.go(E);let ht;const Be=new Set,Re={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,clearRoutes:t.clearRoutes,hasRoute:T,getRoutes:k,resolve:$,options:e,push:y,replace:I,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:ge.add,isReady:Ee,install(E){E.component("RouterLink",vf),E.component("RouterView",zf),E.config.globalProperties.$router=Re,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>S(l)}),zn&&!ht&&l.value===Xt&&(ht=!0,y(s.location).catch(te=>{}));const Y={};for(const te in Xt)Object.defineProperty(Y,te,{get:()=>l.value[te],enumerable:!0});E.provide(ko,Re),E.provide(zo,ga(Y)),E.provide(Js,l);const V=E.unmount;Be.add(E),E.unmount=function(){Be.delete(E),Be.size<1&&(p=Xt,ue&&ue(),ue=null,l.value=Xt,ht=!1,ae=!1),V()}}};function xe(E){return E.reduce((Y,V)=>Y.then(()=>O(V)),Promise.resolve())}return Re}function Cf(e){return $t(zo)}function Al(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=Al(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Sf(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=Al(e))&&(r&&(r+=" "),r+=t);return r}const Af=(e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Rf=(e,t)=>({classGroupId:e,validator:t}),Rl=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Vr="-",Ei=[],Tf="arbitrary..",If=e=>{const t=$f(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:i=>{if(i.startsWith("[")&&i.endsWith("]"))return Mf(i);const a=i.split(Vr),l=a[0]===""&&a.length>1?1:0;return Tl(a,l,t)},getConflictingClassGroupIds:(i,a)=>{if(a){const l=r[i],p=n[i];return l?p?Af(p,l):l:p||Ei}return n[i]||Ei}}},Tl=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const s=e[t],o=n.nextPart.get(s);if(o){const p=Tl(e,t+1,o);if(p)return p}const i=n.validators;if(i===null)return;const a=t===0?e.join(Vr):e.slice(t).join(Vr),l=i.length;for(let p=0;p<l;p++){const u=i[p];if(u.validator(a))return u.classGroupId}},Mf=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?Tf+r:void 0})(),$f=e=>{const{theme:t,classGroups:n}=e;return Ef(n,t)},Ef=(e,t)=>{const n=Rl();for(const r in e){const s=e[r];_o(s,n,r,t)}return n},_o=(e,t,n,r)=>{const s=e.length;for(let o=0;o<s;o++){const i=e[o];Pf(i,t,n,r)}},Pf=(e,t,n,r)=>{if(typeof e=="string"){Ff(e,t,n);return}if(typeof e=="function"){Lf(e,t,n,r);return}Of(e,t,n,r)},Ff=(e,t,n)=>{const r=e===""?t:Il(t,e);r.classGroupId=n},Lf=(e,t,n,r)=>{if(jf(e)){_o(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Rf(n,e))},Of=(e,t,n,r)=>{const s=Object.entries(e),o=s.length;for(let i=0;i<o;i++){const[a,l]=s[i];_o(l,Il(t,a),n,r)}},Il=(e,t)=>{let n=e;const r=t.split(Vr),s=r.length;for(let o=0;o<s;o++){const i=r[o];let a=n.nextPart.get(i);a||(a=Rl(),n.nextPart.set(i,a)),n=a}return n},jf=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,Df=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const s=(o,i)=>{n[o]=i,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(o){let i=n[o];if(i!==void 0)return i;if((i=r[o])!==void 0)return s(o,i),i},set(o,i){o in n?n[o]=i:s(o,i)}}},Qs="!",Pi=":",Bf=[],Fi=(e,t,n,r,s)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:s}),Nf=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=s=>{const o=[];let i=0,a=0,l=0,p;const u=s.length;for(let k=0;k<u;k++){const T=s[k];if(i===0&&a===0){if(T===Pi){o.push(s.slice(l,k)),l=k+1;continue}if(T==="/"){p=k;continue}}T==="["?i++:T==="]"?i--:T==="("?a++:T===")"&&a--}const d=o.length===0?s:s.slice(l);let m=d,g=!1;d.endsWith(Qs)?(m=d.slice(0,-1),g=!0):d.startsWith(Qs)&&(m=d.slice(1),g=!0);const A=p&&p>l?p-l:void 0;return Fi(o,g,m,A)};if(t){const s=t+Pi,o=r;r=i=>i.startsWith(s)?o(i.slice(s.length)):Fi(Bf,!1,i,void 0,!0)}if(n){const s=r;r=o=>n({className:o,parseClassName:s})}return r},Vf=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{t.set(n,1e6+r)}),n=>{const r=[];let s=[];for(let o=0;o<n.length;o++){const i=n[o],a=i[0]==="[",l=t.has(i);a||l?(s.length>0&&(s.sort(),r.push(...s),s=[]),r.push(i)):s.push(i)}return s.length>0&&(s.sort(),r.push(...s)),r}},Hf=e=>({cache:Df(e.cacheSize),parseClassName:Nf(e),sortModifiers:Vf(e),postfixLookupClassGroupIds:Gf(e),...If(e)}),Gf=e=>{const t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let r=0;r<n.length;r++)t[n[r]]=!0;return t},Uf=/\s+/,qf=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s,sortModifiers:o,postfixLookupClassGroupIds:i}=t,a=[],l=e.trim().split(Uf);let p="";for(let u=l.length-1;u>=0;u-=1){const d=l[u],{isExternal:m,modifiers:g,hasImportantModifier:A,baseClassName:k,maybePostfixModifierPosition:T}=n(d);if(m){p=d+(p.length>0?" "+p:p);continue}let $=!!T,b;if($){const N=k.substring(0,T);b=r(N);const L=b&&i[b]?r(k):void 0;L&&L!==b&&(b=L,$=!1)}else b=r(k);if(!b){if(!$){p=d+(p.length>0?" "+p:p);continue}if(b=r(k),!b){p=d+(p.length>0?" "+p:p);continue}$=!1}const x=g.length===0?"":g.length===1?g[0]:o(g).join(":"),y=A?x+Qs:x,I=y+b;if(a.indexOf(I)>-1)continue;a.push(I);const P=s(b,$);for(let N=0;N<P.length;++N){const L=P[N];a.push(y+L)}p=d+(p.length>0?" "+p:p)}return p},Wf=(...e)=>{let t=0,n,r,s="";for(;t<e.length;)(n=e[t++])&&(r=Ml(n))&&(s&&(s+=" "),s+=r);return s},Ml=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Ml(e[r]))&&(n&&(n+=" "),n+=t);return n},Xf=(e,...t)=>{let n,r,s,o;const i=l=>{const p=t.reduce((u,d)=>d(u),e());return n=Hf(p),r=n.cache.get,s=n.cache.set,o=a,a(l)},a=l=>{const p=r(l);if(p)return p;const u=qf(l,n);return s(l,u),u};return o=i,(...l)=>o(Wf(...l))},Kf=[],Ge=e=>{const t=n=>n[e]||Kf;return t.isThemeGetter=!0,t.themeKey=e,t},$l=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,El=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Yf=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Zf=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Jf=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Qf=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,e0=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,t0=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Kt=e=>Yf.test(e),me=e=>!!e&&!Number.isNaN(Number(e)),St=e=>!!e&&Number.isInteger(Number(e)),Cs=e=>e.endsWith("%")&&me(e.slice(0,-1)),Dt=e=>Zf.test(e),Pl=()=>!0,n0=e=>Jf.test(e)&&!Qf.test(e),Co=()=>!1,r0=e=>e0.test(e),s0=e=>t0.test(e),o0=e=>!Z(e)&&!Q(e),i0=e=>e.startsWith("@container")&&(e[10]==="/"&&e[11]!==void 0||e[11]==="s"&&e[16]!==void 0&&e.startsWith("-size/",10)||e[11]==="n"&&e[18]!==void 0&&e.startsWith("-normal/",10)),a0=e=>sn(e,Ol,Co),Z=e=>$l.test(e),dn=e=>sn(e,jl,n0),Li=e=>sn(e,g0,me),l0=e=>sn(e,Bl,Pl),c0=e=>sn(e,Dl,Co),Oi=e=>sn(e,Fl,Co),d0=e=>sn(e,Ll,s0),br=e=>sn(e,Nl,r0),Q=e=>El.test(e),jn=e=>vn(e,jl),u0=e=>vn(e,Dl),ji=e=>vn(e,Fl),p0=e=>vn(e,Ol),f0=e=>vn(e,Ll),xr=e=>vn(e,Nl,!0),m0=e=>vn(e,Bl,!0),sn=(e,t,n)=>{const r=$l.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},vn=(e,t,n=!1)=>{const r=El.exec(e);return r?r[1]?t(r[1]):n:!1},Fl=e=>e==="position"||e==="percentage",Ll=e=>e==="image"||e==="url",Ol=e=>e==="length"||e==="size"||e==="bg-size",jl=e=>e==="length",g0=e=>e==="number",Dl=e=>e==="family-name",Bl=e=>e==="number"||e==="weight",Nl=e=>e==="shadow",h0=()=>{const e=Ge("color"),t=Ge("font"),n=Ge("text"),r=Ge("font-weight"),s=Ge("tracking"),o=Ge("leading"),i=Ge("breakpoint"),a=Ge("container"),l=Ge("spacing"),p=Ge("radius"),u=Ge("shadow"),d=Ge("inset-shadow"),m=Ge("text-shadow"),g=Ge("drop-shadow"),A=Ge("blur"),k=Ge("perspective"),T=Ge("aspect"),$=Ge("ease"),b=Ge("animate"),x=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],I=()=>[...y(),Q,Z],P=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto","contain","none"],L=()=>[Q,Z,l],O=()=>[Kt,"full","auto",...L()],ee=()=>[St,"none","subgrid",Q,Z],oe=()=>["auto",{span:["full",St,Q,Z]},St,Q,Z],G=()=>[St,"auto",Q,Z],ue=()=>["auto","min","max","fr",Q,Z],Ae=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Le=()=>["start","end","center","stretch","center-safe","end-safe"],ge=()=>["auto",...L()],ae=()=>[Kt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...L()],C=()=>[a,Kt,"screen","full","dvw","lvw","svw","min","max","fit",...L()],Ee=()=>[Kt,"screen","full","lh","dvh","lvh","svh","min","max","fit",...L()],F=()=>[e,Q,Z],re=()=>[...y(),ji,Oi,{position:[Q,Z]}],he=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ht=()=>["auto","cover","contain",p0,a0,{size:[Q,Z]}],Be=()=>[Cs,jn,dn],Re=()=>["","none","full",p,Q,Z],xe=()=>["",me,jn,dn],E=()=>["solid","dashed","dotted","double"],Y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>[me,Cs,ji,Oi],te=()=>["","none",A,Q,Z],f=()=>["none",me,Q,Z],h=()=>["none",me,Q,Z],z=()=>[me,Q,Z],R=()=>[Kt,"full",...L()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Dt],breakpoint:[Dt],color:[Pl],container:[Dt],"drop-shadow":[Dt],ease:["in","out","in-out"],font:[o0],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Dt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Dt],shadow:[Dt],spacing:["px",me],text:[Dt],"text-shadow":[Dt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Kt,Z,Q,T]}],container:["container"],"container-type":[{"@container":["","normal","size",Q,Z]}],"container-named":[i0],columns:[{columns:[me,"auto",Z,Q,a]}],"break-after":[{"break-after":x()}],"break-before":[{"break-before":x()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:I()}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:O()}],"inset-x":[{"inset-x":O()}],"inset-y":[{"inset-y":O()}],start:[{"inset-s":O(),start:O()}],end:[{"inset-e":O(),end:O()}],"inset-bs":[{"inset-bs":O()}],"inset-be":[{"inset-be":O()}],top:[{top:O()}],right:[{right:O()}],bottom:[{bottom:O()}],left:[{left:O()}],visibility:["visible","invisible","collapse"],z:[{z:[St,"auto",Q,Z]}],basis:[{basis:[Kt,"full","auto",a,...L()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[me,Kt,"auto","initial","none",Z]}],grow:[{grow:["",me,Q,Z]}],shrink:[{shrink:["",me,Q,Z]}],order:[{order:[St,"first","last","none",Q,Z]}],"grid-cols":[{"grid-cols":ee()}],"col-start-end":[{col:oe()}],"col-start":[{"col-start":G()}],"col-end":[{"col-end":G()}],"grid-rows":[{"grid-rows":ee()}],"row-start-end":[{row:oe()}],"row-start":[{"row-start":G()}],"row-end":[{"row-end":G()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ue()}],"auto-rows":[{"auto-rows":ue()}],gap:[{gap:L()}],"gap-x":[{"gap-x":L()}],"gap-y":[{"gap-y":L()}],"justify-content":[{justify:[...Ae(),"normal"]}],"justify-items":[{"justify-items":[...Le(),"normal"]}],"justify-self":[{"justify-self":["auto",...Le()]}],"align-content":[{content:["normal",...Ae()]}],"align-items":[{items:[...Le(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Le(),{baseline:["","last"]}]}],"place-content":[{"place-content":Ae()}],"place-items":[{"place-items":[...Le(),"baseline"]}],"place-self":[{"place-self":["auto",...Le()]}],p:[{p:L()}],px:[{px:L()}],py:[{py:L()}],ps:[{ps:L()}],pe:[{pe:L()}],pbs:[{pbs:L()}],pbe:[{pbe:L()}],pt:[{pt:L()}],pr:[{pr:L()}],pb:[{pb:L()}],pl:[{pl:L()}],m:[{m:ge()}],mx:[{mx:ge()}],my:[{my:ge()}],ms:[{ms:ge()}],me:[{me:ge()}],mbs:[{mbs:ge()}],mbe:[{mbe:ge()}],mt:[{mt:ge()}],mr:[{mr:ge()}],mb:[{mb:ge()}],ml:[{ml:ge()}],"space-x":[{"space-x":L()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":L()}],"space-y-reverse":["space-y-reverse"],size:[{size:ae()}],"inline-size":[{inline:["auto",...C()]}],"min-inline-size":[{"min-inline":["auto",...C()]}],"max-inline-size":[{"max-inline":["none",...C()]}],"block-size":[{block:["auto",...Ee()]}],"min-block-size":[{"min-block":["auto",...Ee()]}],"max-block-size":[{"max-block":["none",...Ee()]}],w:[{w:[a,"screen",...ae()]}],"min-w":[{"min-w":[a,"screen","none",...ae()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[i]},...ae()]}],h:[{h:["screen","lh",...ae()]}],"min-h":[{"min-h":["screen","lh","none",...ae()]}],"max-h":[{"max-h":["screen","lh","none",...ae()]}],"font-size":[{text:["base",n,jn,dn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,m0,l0]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Cs,Z]}],"font-family":[{font:[u0,c0,t]}],"font-features":[{"font-features":[Z]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,Q,Z]}],"line-clamp":[{"line-clamp":[me,"none",Q,Li]}],leading:[{leading:["none",o,...L()]}],"list-image":[{"list-image":["none",Q,Z]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Q,Z]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:F()}],"text-color":[{text:F()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...E(),"wavy"]}],"text-decoration-thickness":[{decoration:[me,"from-font","auto",Q,dn]}],"text-decoration-color":[{decoration:F()}],"underline-offset":[{"underline-offset":[me,"auto",Q,Z]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"tab-size":[{tab:[St,Q,Z]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Q,Z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Q,Z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:re()}],"bg-repeat":[{bg:he()}],"bg-size":[{bg:ht()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},St,Q,Z],radial:["",Q,Z],conic:["",St,Q,Z]},f0,d0]}],"bg-color":[{bg:F()}],"gradient-from-pos":[{from:Be()}],"gradient-via-pos":[{via:Be()}],"gradient-to-pos":[{to:Be()}],"gradient-from":[{from:F()}],"gradient-via":[{via:F()}],"gradient-to":[{to:F()}],rounded:[{rounded:Re()}],"rounded-s":[{"rounded-s":Re()}],"rounded-e":[{"rounded-e":Re()}],"rounded-t":[{"rounded-t":Re()}],"rounded-r":[{"rounded-r":Re()}],"rounded-b":[{"rounded-b":Re()}],"rounded-l":[{"rounded-l":Re()}],"rounded-ss":[{"rounded-ss":Re()}],"rounded-se":[{"rounded-se":Re()}],"rounded-ee":[{"rounded-ee":Re()}],"rounded-es":[{"rounded-es":Re()}],"rounded-tl":[{"rounded-tl":Re()}],"rounded-tr":[{"rounded-tr":Re()}],"rounded-br":[{"rounded-br":Re()}],"rounded-bl":[{"rounded-bl":Re()}],"border-w":[{border:xe()}],"border-w-x":[{"border-x":xe()}],"border-w-y":[{"border-y":xe()}],"border-w-s":[{"border-s":xe()}],"border-w-e":[{"border-e":xe()}],"border-w-bs":[{"border-bs":xe()}],"border-w-be":[{"border-be":xe()}],"border-w-t":[{"border-t":xe()}],"border-w-r":[{"border-r":xe()}],"border-w-b":[{"border-b":xe()}],"border-w-l":[{"border-l":xe()}],"divide-x":[{"divide-x":xe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":xe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...E(),"hidden","none"]}],"divide-style":[{divide:[...E(),"hidden","none"]}],"border-color":[{border:F()}],"border-color-x":[{"border-x":F()}],"border-color-y":[{"border-y":F()}],"border-color-s":[{"border-s":F()}],"border-color-e":[{"border-e":F()}],"border-color-bs":[{"border-bs":F()}],"border-color-be":[{"border-be":F()}],"border-color-t":[{"border-t":F()}],"border-color-r":[{"border-r":F()}],"border-color-b":[{"border-b":F()}],"border-color-l":[{"border-l":F()}],"divide-color":[{divide:F()}],"outline-style":[{outline:[...E(),"none","hidden"]}],"outline-offset":[{"outline-offset":[me,Q,Z]}],"outline-w":[{outline:["",me,jn,dn]}],"outline-color":[{outline:F()}],shadow:[{shadow:["","inner","none",u,xr,br]}],"shadow-color":[{shadow:F()}],"inset-shadow":[{"inset-shadow":["none",d,xr,br]}],"inset-shadow-color":[{"inset-shadow":F()}],"ring-w":[{ring:xe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:F()}],"ring-offset-w":[{"ring-offset":[me,dn]}],"ring-offset-color":[{"ring-offset":F()}],"inset-ring-w":[{"inset-ring":xe()}],"inset-ring-color":[{"inset-ring":F()}],"text-shadow":[{"text-shadow":["none",m,xr,br]}],"text-shadow-color":[{"text-shadow":F()}],opacity:[{opacity:[me,Q,Z]}],"mix-blend":[{"mix-blend":[...Y(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Y()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[me]}],"mask-image-linear-from-pos":[{"mask-linear-from":V()}],"mask-image-linear-to-pos":[{"mask-linear-to":V()}],"mask-image-linear-from-color":[{"mask-linear-from":F()}],"mask-image-linear-to-color":[{"mask-linear-to":F()}],"mask-image-t-from-pos":[{"mask-t-from":V()}],"mask-image-t-to-pos":[{"mask-t-to":V()}],"mask-image-t-from-color":[{"mask-t-from":F()}],"mask-image-t-to-color":[{"mask-t-to":F()}],"mask-image-r-from-pos":[{"mask-r-from":V()}],"mask-image-r-to-pos":[{"mask-r-to":V()}],"mask-image-r-from-color":[{"mask-r-from":F()}],"mask-image-r-to-color":[{"mask-r-to":F()}],"mask-image-b-from-pos":[{"mask-b-from":V()}],"mask-image-b-to-pos":[{"mask-b-to":V()}],"mask-image-b-from-color":[{"mask-b-from":F()}],"mask-image-b-to-color":[{"mask-b-to":F()}],"mask-image-l-from-pos":[{"mask-l-from":V()}],"mask-image-l-to-pos":[{"mask-l-to":V()}],"mask-image-l-from-color":[{"mask-l-from":F()}],"mask-image-l-to-color":[{"mask-l-to":F()}],"mask-image-x-from-pos":[{"mask-x-from":V()}],"mask-image-x-to-pos":[{"mask-x-to":V()}],"mask-image-x-from-color":[{"mask-x-from":F()}],"mask-image-x-to-color":[{"mask-x-to":F()}],"mask-image-y-from-pos":[{"mask-y-from":V()}],"mask-image-y-to-pos":[{"mask-y-to":V()}],"mask-image-y-from-color":[{"mask-y-from":F()}],"mask-image-y-to-color":[{"mask-y-to":F()}],"mask-image-radial":[{"mask-radial":[Q,Z]}],"mask-image-radial-from-pos":[{"mask-radial-from":V()}],"mask-image-radial-to-pos":[{"mask-radial-to":V()}],"mask-image-radial-from-color":[{"mask-radial-from":F()}],"mask-image-radial-to-color":[{"mask-radial-to":F()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":y()}],"mask-image-conic-pos":[{"mask-conic":[me]}],"mask-image-conic-from-pos":[{"mask-conic-from":V()}],"mask-image-conic-to-pos":[{"mask-conic-to":V()}],"mask-image-conic-from-color":[{"mask-conic-from":F()}],"mask-image-conic-to-color":[{"mask-conic-to":F()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:re()}],"mask-repeat":[{mask:he()}],"mask-size":[{mask:ht()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Q,Z]}],filter:[{filter:["","none",Q,Z]}],blur:[{blur:te()}],brightness:[{brightness:[me,Q,Z]}],contrast:[{contrast:[me,Q,Z]}],"drop-shadow":[{"drop-shadow":["","none",g,xr,br]}],"drop-shadow-color":[{"drop-shadow":F()}],grayscale:[{grayscale:["",me,Q,Z]}],"hue-rotate":[{"hue-rotate":[me,Q,Z]}],invert:[{invert:["",me,Q,Z]}],saturate:[{saturate:[me,Q,Z]}],sepia:[{sepia:["",me,Q,Z]}],"backdrop-filter":[{"backdrop-filter":["","none",Q,Z]}],"backdrop-blur":[{"backdrop-blur":te()}],"backdrop-brightness":[{"backdrop-brightness":[me,Q,Z]}],"backdrop-contrast":[{"backdrop-contrast":[me,Q,Z]}],"backdrop-grayscale":[{"backdrop-grayscale":["",me,Q,Z]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[me,Q,Z]}],"backdrop-invert":[{"backdrop-invert":["",me,Q,Z]}],"backdrop-opacity":[{"backdrop-opacity":[me,Q,Z]}],"backdrop-saturate":[{"backdrop-saturate":[me,Q,Z]}],"backdrop-sepia":[{"backdrop-sepia":["",me,Q,Z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":L()}],"border-spacing-x":[{"border-spacing-x":L()}],"border-spacing-y":[{"border-spacing-y":L()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Q,Z]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[me,"initial",Q,Z]}],ease:[{ease:["linear","initial",$,Q,Z]}],delay:[{delay:[me,Q,Z]}],animate:[{animate:["none",b,Q,Z]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[k,Q,Z]}],"perspective-origin":[{"perspective-origin":I()}],rotate:[{rotate:f()}],"rotate-x":[{"rotate-x":f()}],"rotate-y":[{"rotate-y":f()}],"rotate-z":[{"rotate-z":f()}],scale:[{scale:h()}],"scale-x":[{"scale-x":h()}],"scale-y":[{"scale-y":h()}],"scale-z":[{"scale-z":h()}],"scale-3d":["scale-3d"],skew:[{skew:z()}],"skew-x":[{"skew-x":z()}],"skew-y":[{"skew-y":z()}],transform:[{transform:[Q,Z,"","none","gpu","cpu"]}],"transform-origin":[{origin:I()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:R()}],"translate-x":[{"translate-x":R()}],"translate-y":[{"translate-y":R()}],"translate-z":[{"translate-z":R()}],"translate-none":["translate-none"],zoom:[{zoom:[St,Q,Z]}],accent:[{accent:F()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:F()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Q,Z]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":F()}],"scrollbar-track-color":[{"scrollbar-track":F()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mbs":[{"scroll-mbs":L()}],"scroll-mbe":[{"scroll-mbe":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pbs":[{"scroll-pbs":L()}],"scroll-pbe":[{"scroll-pbe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Q,Z]}],fill:[{fill:["none",...F()]}],"stroke-w":[{stroke:[me,jn,dn,Li]}],stroke:[{stroke:["none",...F()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["start","end","right","left"],"inset-y":["inset-bs","inset-be","top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["ps","pe","pr","pl"],py:["pbs","pbe","pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["ms","me","mr","ml"],my:["mbs","mbe","mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-s","border-w-e","border-w-r","border-w-l"],"border-w-y":["border-w-bs","border-w-be","border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-s","border-color-e","border-color-r","border-color-l"],"border-color-y":["border-color-bs","border-color-be","border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-ms","scroll-me","scroll-mr","scroll-ml"],"scroll-my":["scroll-mbs","scroll-mbe","scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-ps","scroll-pe","scroll-pr","scroll-pl"],"scroll-py":["scroll-pbs","scroll-pbe","scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},b0=Xf(h0);function ze(...e){return b0(Sf(e))}const x0={class:"h-full w-full overflow-visible",xmlns:"http://www.w3.org/2000/svg"},v0=["id"],y0=["stop-color"],w0=["stop-color"],k0=["rx","ry","stroke","stroke-width","stroke-dasharray"],z0=["rx","ry","stroke","stroke-width","stroke-dasharray"],_0=fe({__name:"BorderBeam",props:{borderWidth:{default:2},size:{default:20},duration:{default:6},colorFrom:{default:"#38bdf8"},colorTo:{default:"#a855f7"},delay:{default:0},reverse:{type:Boolean,default:!1},borderRadius:{default:16},glow:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=ho(),r=Ce(()=>{if(typeof t.borderRadius=="number")return t.borderRadius;const a=parseFloat(t.borderRadius);return isNaN(a)?16:a}),s=Ce(()=>t.size>50?18:Math.min(Math.max(t.size,5),80)),o=Ce(()=>`${s.value} ${100-s.value}`),i=Ce(()=>({animationDuration:`${t.duration}s`,animationDelay:`-${t.delay}s`,animationDirection:t.reverse?"reverse":"normal"}));return(a,l)=>(w(),_("div",{class:j(S(ze)("pointer-events-none absolute inset-0 rounded-[inherit] overflow-visible",t.class))},[(w(),_("svg",x0,[c("defs",null,[c("linearGradient",{id:`border-beam-grad-${S(n)}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[c("stop",{offset:"0%","stop-color":t.colorFrom},null,8,y0),c("stop",{offset:"100%","stop-color":t.colorTo},null,8,w0)],8,v0)]),t.glow?(w(),_("rect",{key:0,pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${S(n)})`,"stroke-width":t.borderWidth*2,"stroke-dasharray":o.value,"stroke-linecap":"round",opacity:"0.45",class:"border-beam-svg-motion blur-[3px]",style:Ie(i.value)},null,12,k0)):be("",!0),c("rect",{pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${S(n)})`,"stroke-width":t.borderWidth,"stroke-dasharray":o.value,"stroke-linecap":"round",class:"border-beam-svg-motion",style:Ie(i.value)},null,12,z0)]))],2))}}),eo=Qe(_0,[["__scopeId","data-v-bf918acf"]]),C0={class:"relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-white"},S0=fe({__name:"ShimmerButton",props:{shimmerColor:{default:"#38bdf8"},shimmerSize:{default:"0.12em"},shimmerDuration:{default:"2.5s"},borderRadius:{default:"9999px"},class:{}},setup(e){const t=e,n=Ce(()=>({"--shimmer-color":t.shimmerColor,"--shimmer-size":t.shimmerSize,"--speed":t.shimmerDuration,"--radius":t.borderRadius}));return(r,s)=>(w(),_("button",{style:Ie(n.value),class:j(S(ze)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white transition-all duration-300 active:scale-95","border border-white/10 [border-radius:var(--radius)]","bg-zinc-900/90 shadow-md hover:shadow-lg hover:shadow-sky-500/20 dark:bg-black/90",t.class))},[s[0]||(s[0]=c("div",{class:"shimmer-spin-container pointer-events-none absolute -inset-[100%] [aspect-ratio:1] [border-radius:inherit]"},[c("div",{class:"shimmer-spin-gradient h-full w-full animate-shimmer-spin"})],-1)),s[1]||(s[1]=c("div",{class:"absolute [inset:var(--shimmer-size)] [border-radius:inherit] bg-zinc-950/95 transition-colors duration-300 group-hover:bg-zinc-900/95"},null,-1)),c("span",C0,[it(r.$slots,"default",{},void 0,!0)])],6))}}),Xn=Qe(S0,[["__scopeId","data-v-6b251134"]]),A0=fe({__name:"ShinyText",props:{text:{},duration:{default:2.5},variant:{default:"white"},class:{}},setup(e){const t=e,n=Ce(()=>({"--duration":`${t.duration}s`}));return(r,s)=>(w(),_("span",{style:Ie(n.value),class:j(S(ze)("shiny-text-root inline-block font-bold bg-clip-text text-transparent",t.variant==="white"&&"shiny-variant-white",t.variant==="cyber"&&"shiny-variant-cyber",t.class))},[it(r.$slots,"default",{},()=>[Ve(U(t.text),1)],!0)],6))}}),Kn=Qe(A0,[["__scopeId","data-v-31108f82"]]),R0=fe({__name:"RetroGrid",props:{angle:{default:65},cellSize:{default:60},opacity:{default:.5},lightLineColor:{default:"#94a3b8"},darkLineColor:{default:"#38bdf8"},mask:{type:Boolean,default:!0},maskClass:{},class:{}},setup(e){const t=e,n=Ce(()=>({"--grid-angle":`${t.angle}deg`,"--cell-size":`${t.cellSize}px`,"--opacity":t.opacity.toString(),"--light-line":t.lightLineColor,"--dark-line":t.darkLineColor}));return(r,s)=>(w(),_("div",{style:Ie(n.value),class:j(S(ze)("pointer-events-none absolute h-full w-full overflow-hidden opacity-[var(--opacity)] [perspective:200px]",t.class))},[c("div",{class:j(S(ze)("absolute inset-0 [transform:rotateX(var(--grid-angle))]",t.mask&&"retro-grid-horizon-mask"))},[...s[0]||(s[0]=[c("div",{class:"retro-grid-plane animate-retro-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]"},null,-1)])],2)],6))}}),to=Qe(R0,[["__scopeId","data-v-2d20ad14"]]),Vl=fe({__name:"BentoGrid",props:{class:{}},setup(e){const t=e;return(n,r)=>(w(),_("div",{class:j(S(ze)("grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",t.class))},[it(n.$slots,"default")],2))}}),T0={class:"relative z-0 h-44 w-full overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"},I0={class:"relative z-10 flex flex-col gap-2 pt-4"},M0={class:"flex items-center gap-2.5"},$0={class:"text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},E0={class:"text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"},P0={key:0,class:"mt-3 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400"},F0=fe({__name:"BentoCard",props:{name:{},description:{},class:{},href:{},cta:{},spotlightRadius:{default:300}},setup(e){const t=e,n=X(0),r=X(0),s=X(!1);function o(i){const a=i.currentTarget.getBoundingClientRect();n.value=i.clientX-a.left,r.value=i.clientY-a.top}return(i,a)=>{const l=lr("router-link");return w(),_("div",{class:j(S(ze)("group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300","border border-zinc-200 bg-white/70 shadow-sm backdrop-blur-md hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10",t.class)),onMousemove:o,onMouseenter:a[0]||(a[0]=p=>s.value=!0),onMouseleave:a[1]||(a[1]=p=>s.value=!1)},[c("div",{class:"pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",style:Ie({background:`radial-gradient(${t.spotlightRadius}px circle at ${n.value}px ${r.value}px, var(--spotlight-color), transparent 80%)`})},null,4),c("div",T0,[it(i.$slots,"background",{},void 0,!0)]),c("div",I0,[c("div",M0,[it(i.$slots,"icon",{},void 0,!0),c("h3",$0,U(t.name),1)]),c("p",E0,U(t.description),1),t.cta||i.$slots.cta?(w(),_("div",P0,[it(i.$slots,"cta",{},()=>[t.href?(w(),ye(l,{key:0,to:t.href,class:"inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"},{default:J(()=>[Ve(U(t.cta)+" ",1),a[2]||(a[2]=c("span",{"aria-hidden":"true"},"→",-1))]),_:1},8,["to"])):be("",!0)],!0)])):be("",!0)])],34)}}}),tt=Qe(F0,[["__scopeId","data-v-f7ebca2d"]]),L0=fe({__name:"Marquee",props:{duration:{default:30},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},repeat:{default:4},class:{}},setup(e){const t=e,n=Ce(()=>({"--duration":`${t.duration}s`}));return(r,s)=>(w(),_("div",{style:Ie(n.value),class:j(S(ze)("group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",t.vertical?"flex-col":"flex-row",t.class))},[(w(!0),_(pe,null,je(t.repeat,o=>(w(),_("div",{key:o,class:j(S(ze)("flex shrink-0 justify-around [gap:var(--gap)]",t.vertical?"flex-col animate-marquee-vertical":"flex-row animate-marquee",t.pauseOnHover&&"group-hover:[animation-play-state:paused]",t.reverse&&"[animation-direction:reverse]"))},[it(r.$slots,"default",{},void 0,!0)],2))),128))],6))}}),Sr=Qe(L0,[["__scopeId","data-v-2ea856f7"]]),O0={"aria-hidden":"true",class:"pointer-events-none h-full w-full fill-neutral-400/60 dark:fill-neutral-600/60 transition-colors"},j0=["id","width","height","x","y"],D0=["cx","cy","r"],B0=["fill"],Hl=fe({__name:"DotPattern",props:{width:{default:20},height:{default:20},x:{default:0},y:{default:0},cx:{default:1},cy:{default:1},cr:{default:1},glow:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=ho(),r=X(-9999),s=X(-9999);function o(a){if(!t.glow)return;const l=a.currentTarget.getBoundingClientRect();r.value=a.clientX-l.left,s.value=a.clientY-l.top}function i(){r.value=-9999,s.value=-9999}return(a,l)=>(w(),_("div",{class:j(S(ze)("absolute inset-0 h-full w-full overflow-hidden",t.glow?"pointer-events-auto":"pointer-events-none",t.class)),onMousemove:o,onMouseleave:i},[(w(),_("svg",O0,[c("defs",null,[c("pattern",{id:S(n),width:t.width,height:t.height,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:t.x,y:t.y},[c("circle",{cx:t.cx,cy:t.cy,r:t.cr},null,8,D0)],8,j0)]),c("rect",{width:"100%",height:"100%",fill:`url(#${S(n)})`},null,8,B0)])),t.glow?(w(),_("div",{key:0,class:"absolute inset-0 transition-opacity duration-300",style:Ie({background:`radial-gradient(200px circle at ${r.value}px ${s.value}px, rgba(59, 130, 246, 0.15), transparent 80%)`})},null,4)):be("",!0)],34))}}),N0={class:"relative z-10 h-full w-full"},Gl=fe({__name:"InteractiveParticles",props:{quantity:{default:50},speed:{default:.6},maxRadius:{default:2},mouseRadius:{default:100},color:{},connectLines:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=X(null);let r=null,s=[];const o={x:-9999,y:-9999};function i(d,m){s=[];for(let g=0;g<t.quantity;g++)s.push({x:Math.random()*d,y:Math.random()*m,vx:(Math.random()-.5)*t.speed,vy:(Math.random()-.5)*t.speed,size:Math.random()*t.maxRadius+.8,baseAlpha:Math.random()*.5+.2,alpha:Math.random()*.5+.2})}function a(){const d=n.value;if(!d)return;const m=window.devicePixelRatio||1,g=d.getBoundingClientRect();d.width=g.width*m,d.height=g.height*m;const A=d.getContext("2d");A&&A.scale(m,m),i(g.width,g.height)}function l(d){const m=n.value;if(!m)return;const g=m.getBoundingClientRect();o.x=d.clientX-g.left,o.y=d.clientY-g.top}function p(){o.x=-9999,o.y=-9999}function u(){const d=n.value;if(!d)return;const m=d.getContext("2d");if(!m)return;const g=d.getBoundingClientRect(),A=g.width,k=g.height;m.clearRect(0,0,A,k);const $=document.documentElement.classList.contains("dark")?"255, 255, 255":"59, 130, 246",b=t.color||$;for(let x=0;x<s.length;x++){const y=s[x];y.x+=y.vx,y.y+=y.vy,(y.x<0||y.x>A)&&(y.vx*=-1),(y.y<0||y.y>k)&&(y.vy*=-1);const I=o.x-y.x,P=o.y-y.y,N=Math.sqrt(I*I+P*P);if(N<t.mouseRadius){const L=(t.mouseRadius-N)/t.mouseRadius;y.x-=I/N*L*2,y.y-=P/N*L*2,y.alpha=Math.min(y.baseAlpha+.4,.9)}else y.alpha=y.baseAlpha;if(m.beginPath(),m.arc(y.x,y.y,y.size,0,Math.PI*2),m.fillStyle=b.startsWith("#")?b:`rgba(${b}, ${y.alpha})`,m.fill(),t.connectLines)for(let L=x+1;L<s.length;L++){const O=s[L],ee=Math.hypot(y.x-O.x,y.y-O.y);if(ee<80){m.beginPath(),m.moveTo(y.x,y.y),m.lineTo(O.x,O.y);const oe=(1-ee/80)*.15;m.strokeStyle=`rgba(${$}, ${oe})`,m.lineWidth=.6,m.stroke()}}}r=requestAnimationFrame(u)}return at(()=>{a(),window.addEventListener("resize",a),u()}),gt(()=>{window.removeEventListener("resize",a),r!==null&&cancelAnimationFrame(r)}),vt(()=>t.quantity,()=>{const d=n.value;if(d){const m=d.getBoundingClientRect();i(m.width,m.height)}}),(d,m)=>(w(),_("div",{class:j(S(ze)("relative h-full w-full overflow-hidden",t.class)),onMousemove:l,onMouseleave:p},[c("canvas",{ref_key:"canvasRef",ref:n,class:"pointer-events-none absolute inset-0 h-full w-full"},null,512),c("div",N0,[it(d.$slots,"default")])],34))}}),V0=fe({__name:"Meteors",props:{number:{default:20},angle:{default:215},minDelay:{default:.2},maxDelay:{default:1.2},minDuration:{default:2},maxDuration:{default:8},class:{}},setup(e){const t=e,n=Ce(()=>Array.from({length:t.number}).map(()=>{const r=Math.floor(Math.random()*100),s=Math.floor(Math.random()*100),o=(Math.random()*(t.maxDelay-t.minDelay)+t.minDelay).toFixed(2),i=(Math.random()*(t.maxDuration-t.minDuration)+t.minDuration).toFixed(2);return{top:`${r}%`,left:`${s}%`,animationDelay:`${o}s`,animationDuration:`${i}s`}}));return(r,s)=>(w(),_("div",{class:j(S(ze)("pointer-events-none absolute inset-0 overflow-hidden",t.class))},[(w(!0),_(pe,null,je(n.value,(o,i)=>(w(),_("span",{key:i,style:Ie({...o,"--angle":`${t.angle}deg`}),class:"animate-meteor absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[var(--angle)] dark:bg-sky-400 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-slate-500 before:to-transparent dark:before:from-sky-400"},null,4))),128))],2))}}),Ul=Qe(V0,[["__scopeId","data-v-7d09918c"]]),H0=fe({__name:"Ripple",props:{mainCircleSize:{default:210},mainCircleOpacity:{default:.24},numCircles:{default:8},class:{}},setup(e){const t=e;return(n,r)=>(w(),_("div",{class:j(S(ze)("pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",t.class))},[(w(!0),_(pe,null,je(t.numCircles,s=>(w(),_("div",{key:s,style:Ie({width:`${t.mainCircleSize+(s-1)*70}px`,height:`${t.mainCircleSize+(s-1)*70}px`,opacity:Math.max(.04,t.mainCircleOpacity-(s-1)*.025),animationDelay:`${(s-1)*.06}s`,borderStyle:s===t.numCircles?"dashed":"solid",borderWidth:"1px"}),class:"animate-ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-500/40 bg-blue-500/5 shadow-[0_0_16px_rgba(59,130,246,0.1)] dark:border-sky-400/30 dark:bg-sky-400/5"},null,4))),128))],2))}}),ql=Qe(H0,[["__scopeId","data-v-98c398f7"]]),Ar=fe({__name:"NumberTicker",props:{value:{},direction:{default:"up"},duration:{default:2},delay:{default:0},decimalPlaces:{default:0},class:{}},setup(e){const t=e,n=X(null),r=X("0");let s=null,o=null,i=!1;function a(u){return u===1?1:1-Math.pow(2,-10*u)}function l(u){return new Intl.NumberFormat("en-US",{minimumFractionDigits:t.decimalPlaces,maximumFractionDigits:t.decimalPlaces}).format(u)}function p(){if(i)return;i=!0;const u=t.direction==="down"?t.value:0,d=t.direction==="down"?0:t.value,m=t.duration*1e3;let g=null;setTimeout(()=>{function A(k){g||(g=k);const T=k-g,$=Math.min(T/m,1),b=a($),x=u+(d-u)*b;r.value=l(x),$<1?s=requestAnimationFrame(A):r.value=l(d)}s=requestAnimationFrame(A)},t.delay*1e3)}return at(()=>{r.value=l(t.direction==="down"?t.value:0),n.value?(o=new IntersectionObserver(u=>{u[0].isIntersecting&&(p(),o&&o.disconnect())},{threshold:.1}),o.observe(n.value)):p()}),gt(()=>{s&&cancelAnimationFrame(s),o&&o.disconnect()}),vt(()=>t.value,()=>{i=!1,p()}),(u,d)=>(w(),_("span",{ref_key:"spanRef",ref:n,class:j(S(ze)("inline-block tabular-nums tracking-wider",t.class))},U(r.value),3))}}),G0=["width","height","viewBox"],U0=["d","stroke","stroke-width","stroke-opacity"],q0=["d","stroke","stroke-width"],W0=["id"],X0=["stop-color"],K0=["stop-color"],Y0=["stop-color"],Z0=["from","to","dur","begin"],J0=["from","to","dur","begin"],Hr=fe({__name:"AnimatedBeam",props:{containerRef:{},fromRef:{},toRef:{},curvature:{default:0},reverse:{type:Boolean,default:!1},pathColor:{default:"#94a3b8"},pathWidth:{default:2},pathOpacity:{default:.2},gradientStartColor:{default:"#38bdf8"},gradientStopColor:{default:"#6366f1"},duration:{default:3},delay:{default:0},startXOffset:{default:0},startYOffset:{default:0},endXOffset:{default:0},endYOffset:{default:0},class:{}},setup(e){const t=e,n=ho(),r=X(""),s=X({width:0,height:0});function o(l){return l?"value"in l?l.value:l instanceof HTMLElement?l:null:null}function i(){const l=o(t.containerRef),p=o(t.fromRef),u=o(t.toRef);if(!l||!p||!u)return;const d=l.getBoundingClientRect(),m=p.getBoundingClientRect(),g=u.getBoundingClientRect();s.value={width:d.width,height:d.height};const A=m.left-d.left+m.width/2+t.startXOffset,k=m.top-d.top+m.height/2+t.startYOffset,T=g.left-d.left+g.width/2+t.endXOffset,$=g.top-d.top+g.height/2+t.endYOffset,b=(A+T)/2,x=(k+$)/2,y=b,I=x-t.curvature;t.curvature===0?r.value=`M ${A},${k} L ${T},${$}`:r.value=`M ${A},${k} Q ${y},${I} ${T},${$}`}let a=null;return at(()=>{i(),window.addEventListener("resize",i);const l=o(t.containerRef);l&&(a=new ResizeObserver(()=>i()),a.observe(l))}),gt(()=>{window.removeEventListener("resize",i),a&&a.disconnect()}),vt([()=>o(t.containerRef),()=>o(t.fromRef),()=>o(t.toRef),()=>t.curvature],()=>{i()}),(l,p)=>(w(),_("svg",{width:s.value.width,height:s.value.height,viewBox:`0 0 ${s.value.width} ${s.value.height}`,class:j(S(ze)("pointer-events-none absolute inset-0 h-full w-full select-none overflow-visible",t.class))},[c("path",{d:r.value,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-opacity":t.pathOpacity,"stroke-linecap":"round"},null,8,U0),c("path",{d:r.value,fill:"none",stroke:`url(#beam-gradient-${S(n)})`,"stroke-width":t.pathWidth,"stroke-linecap":"round"},null,8,q0),c("defs",null,[c("linearGradient",{id:`beam-gradient-${S(n)}`,gradientUnits:"userSpaceOnUse"},[c("stop",{offset:"0%","stop-color":t.gradientStartColor,"stop-opacity":"0"},null,8,X0),c("stop",{offset:"50%","stop-color":t.gradientStartColor,"stop-opacity":"1"},null,8,K0),c("stop",{offset:"100%","stop-color":t.gradientStopColor,"stop-opacity":"0"},null,8,Y0),c("animate",{attributeName:"x1",from:t.reverse?"100%":"-50%",to:t.reverse?"-50%":"100%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,Z0),c("animate",{attributeName:"x2",from:t.reverse?"150%":"0%",to:t.reverse?"0%":"150%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,J0)],8,W0)])],10,G0))}}),Q0={class:"relative z-50 -translate-y-32 flex flex-col items-center px-5 text-center"},Wl=fe({__name:"LampEffect",props:{glowColor:{default:"#06b6d4"},class:{}},setup(e){const t=e;return(n,r)=>(w(),_("div",{class:j(S(ze)("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-2xl z-0",t.class))},[r[0]||(r[0]=Vs(`<div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"><div class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div><div class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"></div></div><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"><div class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"></div><div class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div></div><div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl"></div><div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div><div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div><div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></div><div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div><div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-950"></div></div>`,1)),c("div",Q0,[it(n.$slots,"default")])],2))}}),Xl=fe({__name:"FlickeringGrid",props:{squareSize:{default:4},gridGap:{default:4},flickerChance:{default:.3},color:{},maxOpacity:{default:.3},class:{}},setup(e){const t=e,n=X(null),r=X(null);let s=null,o=new Float32Array(0),i=0,a=0;function l(d,m){i=Math.floor(d/(t.squareSize+t.gridGap)),a=Math.floor(m/(t.squareSize+t.gridGap)),o=new Float32Array(i*a);for(let g=0;g<o.length;g++)o[g]=Math.random()*t.maxOpacity}function p(){const d=n.value,m=r.value;if(!d||!m)return;const g=window.devicePixelRatio||1,A=d.getBoundingClientRect();m.width=A.width*g,m.height=A.height*g;const k=m.getContext("2d");k&&k.scale(g,g),l(A.width,A.height)}function u(){const d=r.value,m=n.value;if(!d||!m)return;const g=d.getContext("2d");if(!g)return;const A=m.getBoundingClientRect();g.clearRect(0,0,A.width,A.height);const T=document.documentElement.classList.contains("dark")?"148, 163, 184":"100, 116, 139",$=t.color||T;for(let b=0;b<a;b++)for(let x=0;x<i;x++){const y=b*i+x;Math.random()<t.flickerChance&&(o[y]=Math.random()*t.maxOpacity);const I=o[y];g.fillStyle=$.startsWith("#")?$:`rgba(${$}, ${I})`;const P=x*(t.squareSize+t.gridGap),N=b*(t.squareSize+t.gridGap);g.fillRect(P,N,t.squareSize,t.squareSize)}s=requestAnimationFrame(u)}return at(()=>{p(),window.addEventListener("resize",p),u()}),gt(()=>{window.removeEventListener("resize",p),s&&cancelAnimationFrame(s)}),vt([()=>t.squareSize,()=>t.gridGap],()=>{p()}),(d,m)=>(w(),_("div",{ref_key:"containerRef",ref:n,class:j(S(ze)("pointer-events-none relative h-full w-full overflow-hidden",t.class))},[c("canvas",{ref_key:"canvasRef",ref:r,class:"absolute inset-0 h-full w-full"},null,512)],2))}}),em={class:"relative overflow-hidden"},tm={class:"relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center overflow-hidden"},nm={class:"relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200"},rm={class:"relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"},sm={class:"relative z-10 mt-12 w-full max-w-2xl text-left"},om={class:"relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/80"},im={class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"},am={class:"border-y border-zinc-200/80 bg-zinc-50/50 py-6 dark:border-zinc-800/80 dark:bg-zinc-950/40"},lm={class:"mx-auto max-w-7xl px-4 text-center"},cm={id:"features",class:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"},dm={class:"text-center max-w-3xl mx-auto mb-16 space-y-4"},um={class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"},pm={class:"relative h-full w-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50/40 to-transparent dark:from-zinc-900/60 dark:to-transparent"},fm={class:"relative flex h-32 w-56 flex-col justify-between rounded-xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-md backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95"},mm={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-50/50 to-blue-50/20 border border-blue-100/50 dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800"},gm={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50/30 to-white dark:from-zinc-950 dark:to-zinc-900"},hm={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-50/30 to-transparent dark:from-zinc-900/50 dark:to-transparent"},bm={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"},xm={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50"},vm={class:"relative h-full w-full flex flex-col justify-center overflow-hidden rounded-xl p-3 bg-zinc-50/60 dark:bg-zinc-900/40"},ym={class:"relative h-full w-full overflow-hidden rounded-xl bg-slate-950 p-4"},wm={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center"},km={class:"relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40"},zm={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent flex flex-col items-center justify-center p-4"},_m={class:"text-4xl font-black text-emerald-600 dark:text-emerald-400"},Cm={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4"},Sm={class:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800/80"},Am={class:"text-center max-w-3xl mx-auto mb-12 space-y-3"},Rm={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400"},Tm={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},Im={class:"flex items-center justify-between mb-4"},Mm={class:"flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60"},$m={class:"rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-[11px] font-mono font-bold text-zinc-600 dark:text-zinc-300"},Em={class:"text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2"},Pm={class:"text-[11px] font-mono text-zinc-400 block mt-0.5"},Fm={class:"mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"},Lm={class:"mt-4 flex flex-wrap gap-1.5"},Om={class:"mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between"},jm={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"},Dm={class:"mt-8 flex items-center justify-center gap-4"},Bm={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-20 dark:border-zinc-800/80 dark:bg-zinc-950/40"},Nm={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Vm={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},Hm={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},Gm={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400"},Um={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},qm={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400"},Wm={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},Xm={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400"},Km=fe({__name:"HomeView",setup(e){const t=X(null),n=X(null),r=X(null),s=X(null);function o(u){switch(u){case"ai-native":return cl;case"interactive-nav":return Us;case"space-3d":return Br;case"borders-cards":return mn;case"kinetic-typography":return Fe;default:return Fe}}function i(u){return Jt.filter(d=>d.suiteId===u)}const a=["Vue 3.5+","TypeScript","Tailwind CSS","Composition API","Vite 6","HTML5 Canvas","Web Animations API","Zero-Config"],l=X(!1);function p(){navigator.clipboard.writeText("npm i @vueuse/core clsx tailwind-merge"),l.value=!0,setTimeout(()=>{l.value=!1},2e3)}return(u,d)=>{const m=lr("router-link");return w(),_("div",em,[c("section",tm,[v(to,{angle:65,opacity:.45}),c("div",nm,[v(S(Fe),{class:"h-3.5 w-3.5 text-blue-500"}),v(Kn,{text:"Vue 3 的动效原子代码库现已上线"}),d[0]||(d[0]=c("span",{class:"rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] text-blue-600 dark:text-blue-400"}," v1.0 ",-1))]),d[4]||(d[4]=c("h1",{class:"relative z-10 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight"},[Ve(" 专属于 Vue 3 的 "),c("span",{class:"block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400"}," 高阶动效原子库 ")],-1)),d[5]||(d[5]=c("p",{class:"relative z-10 mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400"},[Ve(" 不再重复造普通表单，全面对标 Magic UI 与 Aceternity UI。"),c("br",{class:"hidden sm:inline"}),Ve(" 面向 "),c("strong",null,"AI 官网、SaaS 营销页、酷炫个人主页"),Ve("，提供 60fps 单文件即用的动效积木。 ")],-1)),c("div",rm,[v(m,{to:"/docs/border-beam"},{default:J(()=>[v(Xn,{"shimmer-color":"#60a5fa",class:"h-12 px-8 text-base"},{default:J(()=>[d[1]||(d[1]=c("span",null,"立即浏览组件",-1)),v(S(Cr),{class:"h-4 w-4"})]),_:1})]),_:1}),c("button",{type:"button",class:"inline-flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-800",onClick:p},[l.value?(w(),ye(S(rn),{key:0,class:"h-4 w-4 text-emerald-500"})):(w(),ye(S(sr),{key:1,class:"h-4 w-4 text-zinc-400"})),c("span",null,U(l.value?"已复制依赖指令":"复制基础依赖指令"),1)])]),c("div",sm,[c("div",om,[v(eo,{size:90,duration:6,"color-from":"#38bdf8","color-to":"#a855f7","border-width":2,"border-radius":16}),d[3]||(d[3]=Vs('<div class="mb-4 flex items-center justify-between border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60"><div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-rose-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span><span class="ml-2 font-mono text-xs text-zinc-400">components/BorderBeam.vue</span></div><div class="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Zero-Config / 粘贴即跑</span></div></div>',1)),c("div",im,[d[2]||(d[2]=Vs('<div class="space-y-1 text-zinc-600 dark:text-zinc-300"><p><span class="text-purple-500">&lt;template&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;div</span> <span class="text-amber-500">class=</span><span class="text-emerald-500">&quot;relative rounded-2xl&quot;</span><span class="text-blue-500">&gt;</span></p><p class="pl-8"><span class="text-blue-500">&lt;BorderBeam</span> <span class="text-amber-500">:duration=</span><span class="text-emerald-500">&quot;5&quot;</span> <span class="text-amber-500">:border-width=</span><span class="text-emerald-500">&quot;2&quot;</span> <span class="text-blue-500">/&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;/div&gt;</span></p><p><span class="text-purple-500">&lt;/template&gt;</span></p></div>',1)),v(m,{to:"/docs/border-beam",class:"shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"},{default:J(()=>[Ve(" 浏览全部 "+U(S(Jt).length)+" 款动效 → ",1)]),_:1})])])])]),c("section",am,[c("div",lm,[d[7]||(d[7]=c("p",{class:"mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase"}," 原生融合的技术栈与动效标准 ",-1)),v(Sr,{duration:25,"pause-on-hover":!0},{default:J(()=>[(w(),_(pe,null,je(a,g=>c("div",{key:g,class:"flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-5 py-2 text-xs font-bold text-zinc-700 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300"},[d[6]||(d[6]=c("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),c("span",null,U(g),1)])),64))]),_:1})])]),c("section",cm,[c("div",dm,[c("h2",um," 全面对标顶流 · 5 大主题套件 · "+U(S(Jt).length)+" 款高阶动效全装配 ",1),d[8]||(d[8]=c("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 每一个组件都经过精心打磨，在移动端与桌面端保持 60fps 满帧性能，全部开箱即用，支持 Clean Light 与 Deep Dark 双模自适应。 ",-1))]),v(Vl,null,{default:J(()=>[v(tt,{name:"Border Beam",description:"现代 CSS 路径动画，高光激光沿圆角边框飞速流转，AI 推理与核心 VIP 的视觉焦点",cta:"查看详情与代码",href:"/docs/border-beam"},{icon:J(()=>[v(S(Fe),{class:"h-5 w-5 text-sky-500"})]),background:J(()=>[c("div",pm,[c("div",fm,[v(eo,{size:65,duration:3.5,"color-from":"#06b6d4","color-to":"#6366f1","border-width":2,"border-radius":12}),d[9]||(d[9]=c("div",{class:"flex items-center justify-between"},[c("div",{class:"flex items-center gap-2"},[c("span",{class:"relative flex h-2 w-2"},[c("span",{class:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),c("span",{class:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]),c("span",{class:"text-xs font-bold text-zinc-800 dark:text-zinc-200"},"AI 推理状态")]),c("span",{class:"rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-sky-600 dark:text-sky-400"},"360° 流动")],-1)),d[10]||(d[10]=c("div",{class:"space-y-1.5"},[c("div",{class:"h-2 w-4/5 rounded-full bg-zinc-200 dark:bg-zinc-700"}),c("div",{class:"h-2 w-3/5 rounded-full bg-gradient-to-r from-sky-500/40 to-indigo-500/40"})],-1))])])]),_:1}),v(tt,{name:"Interactive Particles",description:"原生 Canvas 2D 粒子引擎，支持鼠标悬浮动态引力排斥、微线互联与 60fps 满帧性能",cta:"查看详情与代码",href:"/docs/interactive-particles"},{icon:J(()=>[v(S(Sn),{class:"h-5 w-5 text-amber-500"})]),background:J(()=>[c("div",mm,[v(Gl,{quantity:38,speed:.75,"mouse-radius":85,"connect-lines":!0,class:"absolute inset-0 h-full w-full"}),d[11]||(d[11]=c("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[c("div",{class:"flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1 text-xs font-mono font-medium text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900/60 dark:bg-zinc-900/80 dark:text-blue-400"},[c("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"}),c("span",null,"悬浮鼠标即刻磁吸交互")])],-1))])]),_:1}),v(tt,{name:"Retro Grid",description:"3D 倾斜无限延展赛博网格，原生区分明暗模式线条色彩，渲染极具科技纵深感的背景",cta:"查看详情与代码",href:"/docs/retro-grid"},{icon:J(()=>[v(S(mn),{class:"h-5 w-5 text-indigo-500"})]),background:J(()=>[c("div",gm,[v(to,{angle:65,opacity:.85,"cell-size":34,"light-line-color":"#6366f1","dark-line-color":"#38bdf8"}),d[12]||(d[12]=c("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[c("span",{class:"rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-xs backdrop-blur-md dark:border-indigo-900/80 dark:bg-zinc-900/90 dark:text-indigo-400"}," 3D 空间动态透视 ")],-1))])]),_:1}),v(tt,{name:"Shimmer Button",description:"360° 旋转锥形流光高光外圈，适配核心 CTA 与付费引导，鼠标悬停即刻聚光",cta:"查看详情与代码",href:"/docs/shimmer-button"},{icon:J(()=>[v(S(Fe),{class:"h-5 w-5 text-pink-500"})]),background:J(()=>[c("div",hm,[v(Xn,{"shimmer-color":"#ec4899","shimmer-duration":"2.4s",class:"shadow-lg"},{default:J(()=>[v(S(Fe),{class:"h-4 w-4 text-pink-400"}),d[13]||(d[13]=c("span",null,"360° 旋转光晕按钮",-1))]),_:1}),d[14]||(d[14]=c("span",{class:"mt-3 text-[11px] font-mono text-zinc-400"},"悬停查看高光边缘旋转",-1))])]),_:1}),v(tt,{name:"Shiny Text",description:"金属质感微光划过文字，2.5s 线性平滑连续循环，高亮 Hero 标题与特色特性",cta:"查看详情与代码",href:"/docs/shiny-text"},{icon:J(()=>[v(S(Fe),{class:"h-5 w-5 text-amber-500"})]),background:J(()=>[c("div",bm,[d[15]||(d[15]=c("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"},null,-1)),v(Kn,{text:"✨ Metallic Shiny Sheen",class:"relative z-10 text-xl font-black tracking-tight",speed:2.2}),d[16]||(d[16]=c("p",{class:"relative z-10 mt-2 text-xs font-mono text-zinc-400"},"高对比连续金属质感流动",-1))])]),_:1}),v(tt,{name:"Dot Pattern",description:"极简矢量波点底纹，支持鼠标实时光晕跟随聚光灯，轻量零性能损耗",cta:"查看详情与代码",href:"/docs/dot-pattern"},{icon:J(()=>[v(S(Nu),{class:"h-5 w-5 text-emerald-500"})]),background:J(()=>[c("div",xm,[v(Hl,{width:16,height:16,cr:1.2,glow:!0}),d[17]||(d[17]=c("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[c("span",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}," 移动鼠标点亮光晕 ")],-1))])]),_:1}),v(tt,{name:"Marquee",description:"纯 CSS 硬件加速无限无缝滚动跑马灯，支持鼠标悬浮暂停、反向循环与变速",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/marquee"},{icon:J(()=>[v(S(Ou),{class:"h-5 w-5 text-blue-500"})]),background:J(()=>[c("div",vm,[v(Sr,{duration:16,"pause-on-hover":!0},{default:J(()=>[(w(),_(pe,null,je(["GPT-4o","Claude 3.5","DeepSeek-V3","Llama 3.3","Gemini 1.5"],g=>c("div",{key:g,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[d[18]||(d[18]=c("span",{class:"h-1.5 w-1.5 rounded-full bg-emerald-500"},null,-1)),c("span",null,U(g),1)])),64))]),_:1}),v(Sr,{duration:20,reverse:!0,"pause-on-hover":!0,class:"mt-2.5"},{default:J(()=>[(w(),_(pe,null,je(["Vue 3.5","TypeScript","Tailwind CSS","Zero-Config","Canvas 2D"],g=>c("div",{key:g,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[d[19]||(d[19]=c("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),c("span",null,U(g),1)])),64))]),_:1})])]),_:1}),v(tt,{name:"Bento Grid",description:"现代 SaaS 模块化栅格系统，卡片集成鼠标跟随 Spotlight 径向聚光灯流光",cta:"查看详情与代码",href:"/docs/bento-grid"},{icon:J(()=>[v(S(mn),{class:"h-5 w-5 text-purple-500"})]),background:J(()=>[...d[20]||(d[20]=[c("div",{class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent"},[c("div",{class:"grid grid-cols-2 gap-2 w-full max-w-[200px]"},[c("div",{class:"h-12 rounded-lg border border-purple-300/40 bg-purple-500/10 dark:border-purple-500/30 dark:bg-purple-500/20 flex items-center justify-center text-[10px] font-mono text-purple-600 dark:text-purple-300"}," Col 1 "),c("div",{class:"h-12 rounded-lg border border-blue-300/40 bg-blue-500/10 dark:border-blue-500/30 dark:bg-blue-500/20 flex items-center justify-center text-[10px] font-mono text-blue-600 dark:text-blue-300"}," Col 2 "),c("div",{class:"col-span-2 h-10 rounded-lg border border-indigo-300/40 bg-indigo-500/10 dark:border-indigo-500/30 dark:bg-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-600 dark:text-indigo-300"}," Span 2 · 动态聚光灯 ")])],-1)])]),_:1}),v(tt,{name:"Meteors",description:"纯 CSS 赛博流星雨划过，带 50px 渐变光尾与随机延迟，暗黑科技卡片与首屏氛围杀器",cta:"查看详情与代码",href:"/docs/meteors"},{icon:J(()=>[v(S(Fe),{class:"h-5 w-5 text-sky-400"})]),background:J(()=>[c("div",ym,[v(Ul,{number:20}),d[21]||(d[21]=c("div",{class:"flex h-full flex-col justify-end"},[c("span",{class:"text-xs font-mono text-sky-400 font-bold"},"215° 斜掠流星轨迹")],-1))])]),_:1}),v(tt,{name:"Ripple",description:"由中心向外周循环脉冲扩散的多层同心圆涟漪，适配 AI 语音拾音、雷达声呐与核心头像高亮",cta:"查看详情与代码",href:"/docs/ripple"},{icon:J(()=>[v(S(Nr),{class:"h-5 w-5 text-blue-500"})]),background:J(()=>[c("div",wm,[v(ql,{"main-circle-size":110,"num-circles":6}),c("div",km,[v(S(Nr),{class:"h-6 w-6"})])])]),_:1}),v(tt,{name:"Number Ticker",description:"采用 easeOutExpo 缓动曲线的平滑数字翻牌器，进入视口自动起跑，SaaS 核心关键业务指标必备",cta:"查看详情与代码",href:"/docs/number-ticker"},{icon:J(()=>[v(S(ll),{class:"h-5 w-5 text-emerald-500"})]),background:J(()=>[c("div",zm,[c("div",_m,[v(Ar,{value:99.99,"decimal-places":2}),d[22]||(d[22]=Ve("% ",-1))]),d[23]||(d[23]=c("p",{class:"mt-2 text-xs font-mono text-zinc-500"},"SLA 生产高可用性指标",-1))])]),_:1}),v(tt,{name:"Animated Beam",description:"Magic UI 标志性连线动效，在多个 DOM 节点间实时计算贝塞尔曲线，驱动 SVG 能量光球脉冲流动",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/animated-beam"},{icon:J(()=>[v(S(Sn),{class:"h-5 w-5 text-indigo-500"})]),background:J(()=>[c("div",{ref_key:"homeBeamContainer",ref:t,class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 flex items-center justify-between px-8"},[c("div",{ref_key:"homeBeamUser",ref:n,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-blue-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-blue-400"},[v(S(ml),{class:"h-5 w-5"})],512),c("div",{ref_key:"homeBeamAi",ref:r,class:"z-10 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/40"},[v(S(Fe),{class:"h-6 w-6"})],512),c("div",{ref_key:"homeBeamDb",ref:s,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400"},[v(S(qs),{class:"h-5 w-5"})],512),v(Hr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.2},null,8,["container-ref","from-ref","to-ref"]),v(Hr,{"container-ref":t.value,"from-ref":r.value,"to-ref":s.value,duration:2.2,delay:.5},null,8,["container-ref","from-ref","to-ref"])],512)]),_:1}),v(tt,{name:"Flickering Grid",description:"Canvas 2D 原生微闪烁网格，每个小方格独立呼吸微光，营造赛博黑客帝国与智能矩阵氛围",cta:"查看详情与代码",href:"/docs/flickering-grid"},{icon:J(()=>[v(S(mn),{class:"h-5 w-5 text-sky-500"})]),background:J(()=>[c("div",Cm,[v(Xl,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),d[24]||(d[24]=c("div",{class:"relative z-10 flex h-full items-center justify-center"},[c("span",{class:"rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-500 dark:text-sky-400 font-bold"}," 60FPS 矩阵微闪 ")],-1))])]),_:1})]),_:1})]),c("section",Sm,[c("div",Am,[c("div",Rm,[v(S(Fe),{class:"h-3.5 w-3.5"}),d[25]||(d[25]=c("span",null,"主题套件全套推进",-1))]),d[26]||(d[26]=c("h2",{class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"}," 5 大主题动效矩阵 · 场景全覆盖 ",-1)),d[27]||(d[27]=c("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 按业务应用场景全套推进，彻底告别零散拼凑。从 AI 智能体推理到 3D 纵深空间，全矩阵即拷即用。 ",-1))]),c("div",Tm,[(w(!0),_(pe,null,je(S(Xs),g=>{var A;return w(),_("div",{key:g.id,class:"group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:hover:border-zinc-700"},[c("div",null,[c("div",Im,[c("div",Mm,[(w(),ye(Ut(o(g.id)),{class:"h-5 w-5"}))]),c("span",$m,U(i(g.id).length)+" 款组件 ",1)]),c("h3",Em,[c("span",null,U(g.name),1)]),c("span",Pm,U(g.englishName),1),c("p",Fm,U(g.description),1),c("div",Lm,[(w(!0),_(pe,null,je(i(g.id),k=>(w(),ye(m,{key:k.id,to:`/docs/${k.id}`,class:"rounded-lg border border-zinc-200/80 bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-700 transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-500/50 dark:hover:bg-blue-950/60 dark:hover:text-blue-400"},{default:J(()=>[Ve(U(k.name),1)]),_:2},1032,["to"]))),128))])]),c("div",Om,[v(m,{to:`/docs/${((A=i(g.id)[0])==null?void 0:A.id)||"border-beam"}`,class:"inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"},{default:J(()=>[d[28]||(d[28]=c("span",null,"进入套件展厅",-1)),v(S(Cr),{class:"h-3.5 w-3.5 transition-transform group-hover:translate-x-1"})]),_:1},8,["to"])])])}),128))])]),c("section",jm,[v(Wl,{class:"min-h-[460px]"},{default:J(()=>[d[30]||(d[30]=c("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-6xl font-black tracking-tight text-transparent"}," 为极致审美而生的动效原子 ",-1)),d[31]||(d[31]=c("p",{class:"mt-4 max-w-lg text-sm text-slate-400"}," 全面对标 Magic UI 与 Aceternity UI，支持单文件复制即用，零侵入无外部复杂构建负担。 ",-1)),c("div",Dm,[v(m,{to:"/docs/lamp-effect"},{default:J(()=>[v(Xn,{"shimmer-color":"#38bdf8",class:"h-11 px-6 text-sm"},{default:J(()=>[d[29]||(d[29]=c("span",null,"探索 Lamp Effect",-1)),v(S(Cr),{class:"h-4 w-4"})]),_:1})]),_:1})])]),_:1})]),c("section",Bm,[c("div",Nm,[c("div",Vm,[c("div",Hm,[c("div",Gm,[v(S(sr),{class:"h-5 w-5"})]),d[32]||(d[32]=c("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," Copy & Paste 模式 ",-1)),d[33]||(d[33]=c("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不是封闭的黑盒 npm 库。代码完全属于你，复制进你的项目 `src/components/ui` 即可按需自定义与扩展。 ",-1))]),c("div",Um,[c("div",qm,[v(S(Sn),{class:"h-5 w-5"})]),d[34]||(d[34]=c("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 单文件自包含（Zero-Config） ",-1)),d[35]||(d[35]=c("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 动画关键帧与路径封装在组件内，完全无需在 tailwind.config.js 中配置复杂的 keyframes，避免配置遗漏。 ",-1))]),c("div",Wm,[c("div",Xm,[v(S(Fe),{class:"h-5 w-5"})]),d[36]||(d[36]=c("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 真·明暗双模自适应 ",-1)),d[37]||(d[37]=c("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不仅在深黑背景下流光溢彩，更对纯白、浅灰背景做针对性调优，确保在任何业务场景下都有高级质感。 ",-1))])])])])])}}});var Di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ym(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ss={exports:{}},Bi;function Zm(){return Bi||(Bi=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=(function(r){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function b(x){return x instanceof l?new l(x.type,b(x.content),x.alias):Array.isArray(x)?x.map(b):x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++o}),b.__id},clone:function b(x,y){y=y||{};var I,P;switch(a.util.type(x)){case"Object":if(P=a.util.objId(x),y[P])return y[P];I={},y[P]=I;for(var N in x)x.hasOwnProperty(N)&&(I[N]=b(x[N],y));return I;case"Array":return P=a.util.objId(x),y[P]?y[P]:(I=[],y[P]=I,x.forEach(function(L,O){I[O]=b(L,y)}),I);default:return x}},getLanguage:function(b){for(;b;){var x=s.exec(b.className);if(x)return x[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,x){b.className=b.className.replace(RegExp(s,"gi"),""),b.classList.add("language-"+x)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(I){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(I.stack)||[])[1];if(b){var x=document.getElementsByTagName("script");for(var y in x)if(x[y].src==b)return x[y]}return null}},isActive:function(b,x,y){for(var I="no-"+x;b;){var P=b.classList;if(P.contains(x))return!0;if(P.contains(I))return!1;b=b.parentElement}return!!y}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(b,x){var y=a.util.clone(a.languages[b]);for(var I in x)y[I]=x[I];return y},insertBefore:function(b,x,y,I){I=I||a.languages;var P=I[b],N={};for(var L in P)if(P.hasOwnProperty(L)){if(L==x)for(var O in y)y.hasOwnProperty(O)&&(N[O]=y[O]);y.hasOwnProperty(L)||(N[L]=P[L])}var ee=I[b];return I[b]=N,a.languages.DFS(a.languages,function(oe,G){G===ee&&oe!=b&&(this[oe]=N)}),N},DFS:function b(x,y,I,P){P=P||{};var N=a.util.objId;for(var L in x)if(x.hasOwnProperty(L)){y.call(x,L,x[L],I||L);var O=x[L],ee=a.util.type(O);ee==="Object"&&!P[N(O)]?(P[N(O)]=!0,b(O,y,null,P)):ee==="Array"&&!P[N(O)]&&(P[N(O)]=!0,b(O,y,L,P))}}},plugins:{},highlightAll:function(b,x){a.highlightAllUnder(document,b,x)},highlightAllUnder:function(b,x,y){var I={callback:y,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",I),I.elements=Array.prototype.slice.apply(I.container.querySelectorAll(I.selector)),a.hooks.run("before-all-elements-highlight",I);for(var P=0,N;N=I.elements[P++];)a.highlightElement(N,x===!0,I.callback)},highlightElement:function(b,x,y){var I=a.util.getLanguage(b),P=a.languages[I];a.util.setLanguage(b,I);var N=b.parentElement;N&&N.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(N,I);var L=b.textContent,O={element:b,language:I,grammar:P,code:L};function ee(G){O.highlightedCode=G,a.hooks.run("before-insert",O),O.element.innerHTML=O.highlightedCode,a.hooks.run("after-highlight",O),a.hooks.run("complete",O),y&&y.call(O.element)}if(a.hooks.run("before-sanity-check",O),N=O.element.parentElement,N&&N.nodeName.toLowerCase()==="pre"&&!N.hasAttribute("tabindex")&&N.setAttribute("tabindex","0"),!O.code){a.hooks.run("complete",O),y&&y.call(O.element);return}if(a.hooks.run("before-highlight",O),!O.grammar){ee(a.util.encode(O.code));return}if(x&&r.Worker){var oe=new Worker(a.filename);oe.onmessage=function(G){ee(G.data)},oe.postMessage(JSON.stringify({language:O.language,code:O.code,immediateClose:!0}))}else ee(a.highlight(O.code,O.grammar,O.language))},highlight:function(b,x,y){var I={code:b,grammar:x,language:y};if(a.hooks.run("before-tokenize",I),!I.grammar)throw new Error('The language "'+I.language+'" has no grammar.');return I.tokens=a.tokenize(I.code,I.grammar),a.hooks.run("after-tokenize",I),l.stringify(a.util.encode(I.tokens),I.language)},tokenize:function(b,x){var y=x.rest;if(y){for(var I in y)x[I]=y[I];delete x.rest}var P=new d;return m(P,P.head,b),u(b,P,x,P.head,0),A(P)},hooks:{all:{},add:function(b,x){var y=a.hooks.all;y[b]=y[b]||[],y[b].push(x)},run:function(b,x){var y=a.hooks.all[b];if(!(!y||!y.length))for(var I=0,P;P=y[I++];)P(x)}},Token:l};r.Prism=a;function l(b,x,y,I){this.type=b,this.content=x,this.alias=y,this.length=(I||"").length|0}l.stringify=function b(x,y){if(typeof x=="string")return x;if(Array.isArray(x)){var I="";return x.forEach(function(ee){I+=b(ee,y)}),I}var P={type:x.type,content:b(x.content,y),tag:"span",classes:["token",x.type],attributes:{},language:y},N=x.alias;N&&(Array.isArray(N)?Array.prototype.push.apply(P.classes,N):P.classes.push(N)),a.hooks.run("wrap",P);var L="";for(var O in P.attributes)L+=" "+O+'="'+(P.attributes[O]||"").replace(/"/g,"&quot;")+'"';return"<"+P.tag+' class="'+P.classes.join(" ")+'"'+L+">"+P.content+"</"+P.tag+">"};function p(b,x,y,I){b.lastIndex=x;var P=b.exec(y);if(P&&I&&P[1]){var N=P[1].length;P.index+=N,P[0]=P[0].slice(N)}return P}function u(b,x,y,I,P,N){for(var L in y)if(!(!y.hasOwnProperty(L)||!y[L])){var O=y[L];O=Array.isArray(O)?O:[O];for(var ee=0;ee<O.length;++ee){if(N&&N.cause==L+","+ee)return;var oe=O[ee],G=oe.inside,ue=!!oe.lookbehind,Ae=!!oe.greedy,Le=oe.alias;if(Ae&&!oe.pattern.global){var ge=oe.pattern.toString().match(/[imsuy]*$/)[0];oe.pattern=RegExp(oe.pattern.source,ge+"g")}for(var ae=oe.pattern||oe,C=I.next,Ee=P;C!==x.tail&&!(N&&Ee>=N.reach);Ee+=C.value.length,C=C.next){var F=C.value;if(x.length>b.length)return;if(!(F instanceof l)){var re=1,he;if(Ae){if(he=p(ae,Ee,b,ue),!he||he.index>=b.length)break;var xe=he.index,ht=he.index+he[0].length,Be=Ee;for(Be+=C.value.length;xe>=Be;)C=C.next,Be+=C.value.length;if(Be-=C.value.length,Ee=Be,C.value instanceof l)continue;for(var Re=C;Re!==x.tail&&(Be<ht||typeof Re.value=="string");Re=Re.next)re++,Be+=Re.value.length;re--,F=b.slice(Ee,Be),he.index-=Ee}else if(he=p(ae,0,F,ue),!he)continue;var xe=he.index,E=he[0],Y=F.slice(0,xe),V=F.slice(xe+E.length),te=Ee+F.length;N&&te>N.reach&&(N.reach=te);var f=C.prev;Y&&(f=m(x,f,Y),Ee+=Y.length),g(x,f,re);var h=new l(L,G?a.tokenize(E,G):E,Le,E);if(C=m(x,f,h),V&&m(x,C,V),re>1){var z={cause:L+","+ee,reach:te};u(b,x,y,C.prev,Ee,z),N&&z.reach>N.reach&&(N.reach=z.reach)}}}}}}function d(){var b={value:null,prev:null,next:null},x={value:null,prev:b,next:null};b.next=x,this.head=b,this.tail=x,this.length=0}function m(b,x,y){var I=x.next,P={value:y,prev:x,next:I};return x.next=P,I.prev=P,b.length++,P}function g(b,x,y){for(var I=x.next,P=0;P<y&&I!==b.tail;P++)I=I.next;x.next=I,I.prev=x,b.length-=P}function A(b){for(var x=[],y=b.head.next;y!==b.tail;)x.push(y.value),y=y.next;return x}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(b){var x=JSON.parse(b.data),y=x.language,I=x.code,P=x.immediateClose;r.postMessage(a.highlight(I,a.languages[y],y)),P&&r.close()},!1)),a;var k=a.util.currentScript();k&&(a.filename=k.src,k.hasAttribute("data-manual")&&(a.manual=!0));function T(){a.manual||a.highlightAll()}if(!a.manual){var $=document.readyState;$==="loading"||$==="interactive"&&k&&k.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return a})(t);e.exports&&(e.exports=n),typeof Di<"u"&&(Di.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(s,o){var i={};i["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[o]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};a["language-"+o]={pattern:/[\s\S]+/,inside:n.languages[o]};var l={};l[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,s){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:n.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(r){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var o=r.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",s=function(k,T){return"✖ Error "+k+" while fetching file: "+T},o="✖ Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",p="loaded",u="failed",d="pre[data-src]:not(["+a+'="'+p+'"]):not(['+a+'="'+l+'"])';function m(k,T,$){var b=new XMLHttpRequest;b.open("GET",k,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?T(b.responseText):b.status>=400?$(s(b.status,b.statusText)):$(o))},b.send(null)}function g(k){var T=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(k||"");if(T){var $=Number(T[1]),b=T[2],x=T[3];return b?x?[$,Number(x)]:[$,void 0]:[$,$]}}n.hooks.add("before-highlightall",function(k){k.selector+=", "+d}),n.hooks.add("before-sanity-check",function(k){var T=k.element;if(T.matches(d)){k.code="",T.setAttribute(a,l);var $=T.appendChild(document.createElement("CODE"));$.textContent=r;var b=T.getAttribute("data-src"),x=k.language;if(x==="none"){var y=(/\.(\w+)$/.exec(b)||[,"none"])[1];x=i[y]||y}n.util.setLanguage($,x),n.util.setLanguage(T,x);var I=n.plugins.autoloader;I&&I.loadLanguages(x),m(b,function(P){T.setAttribute(a,p);var N=g(T.getAttribute("data-range"));if(N){var L=P.split(/\r\n?|\n/g),O=N[0],ee=N[1]==null?L.length:N[1];O<0&&(O+=L.length),O=Math.max(0,Math.min(O-1,L.length)),ee<0&&(ee+=L.length),ee=Math.max(0,Math.min(ee,L.length)),P=L.slice(O,ee).join(`
`),T.hasAttribute("data-start")||T.setAttribute("data-start",String(O+1))}$.textContent=P,n.highlightElement($)},function(P){T.setAttribute(a,u),$.textContent=P})}}),n.plugins.fileHighlight={highlight:function(T){for(var $=(T||document).querySelectorAll(d),b=0,x;x=$[b++];)n.highlightElement(x)}};var A=!1;n.fileHighlight=function(){A||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),A=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(Ss)),Ss.exports}var Jm=Zm();const As=Ym(Jm);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var Ni={},Vi;function Qm(){return Vi||(Vi=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),Ni}Qm();Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};s["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var o={};o[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:s},Prism.languages.insertBefore("markup","cdata",o)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);const eg={class:"relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800 text-zinc-100 shadow-sm"},tg={class:"flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5 text-xs text-zinc-400"},ng={class:"font-mono"},rg={class:"max-h-[480px] overflow-auto p-4 text-xs font-mono leading-relaxed"},sg={class:"!m-0 !p-0 !bg-transparent"},og=["innerHTML"],Hi=fe({__name:"CodeBlock",props:{code:{},language:{default:"html"},filename:{}},setup(e){const t=e,n=X(!1),r=Ce(()=>{const o=As.languages[t.language]||As.languages.markup;return As.highlight(t.code.trim(),o,t.language)});async function s(){try{await navigator.clipboard.writeText(t.code.trim()),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(o){console.error("Failed to copy",o)}}return(o,i)=>(w(),_("div",eg,[c("div",tg,[c("span",ng,U(t.filename||t.language.toUpperCase()),1),c("button",{type:"button",class:"inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",onClick:s},[n.value?(w(),ye(S(rn),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(w(),ye(S(sr),{key:1,class:"h-3.5 w-3.5"})),c("span",null,U(n.value?"已复制！":"复制代码"),1)])]),c("div",rg,[c("pre",sg,[c("code",{innerHTML:r.value},null,8,og)])])]))}}),ig={class:"space-y-4"},ag={class:"space-y-1"},lg={class:"text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},cg={class:"text-sm text-zinc-500 dark:text-zinc-400"},dg={class:"overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-sm transition-colors"},ug={class:"flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 bg-zinc-50/80 px-4 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/60"},pg={class:"flex items-center gap-1 rounded-lg bg-zinc-200/60 p-1 dark:bg-zinc-800/60 text-xs font-medium"},fg={key:0,class:"flex items-center gap-2 text-xs"},mg={class:"flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-0.5"},gg={class:"relative"},hg={class:"p-4"},bg={class:"p-4"},xg={key:0,class:"mt-8 space-y-3"},vg={class:"overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800"},yg={class:"w-full text-left text-xs"},wg={class:"divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono"},kg={class:"px-4 py-2.5 font-bold text-blue-600 dark:text-blue-400"},zg={class:"px-4 py-2.5 text-pink-600 dark:text-pink-400"},_g={class:"px-4 py-2.5 text-zinc-500"},Cg={class:"px-4 py-2.5 font-sans text-zinc-600 dark:text-zinc-300"},Sg=fe({__name:"ComponentPreview",props:{title:{},description:{},componentCode:{},usageCode:{},componentFilename:{},propsList:{}},setup(e){const t=e,n=X("preview"),r=X("default"),s=X(0),o=X(!0);let i=null;at(()=>{o.value=document.documentElement.classList.contains("dark"),i=new MutationObserver(()=>{o.value=document.documentElement.classList.contains("dark")}),i.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}),gt(()=>{i==null||i.disconnect()});const a=Ce(()=>r.value==="dark"?!0:r.value==="light"?!1:o.value);function l(){s.value++}return(p,u)=>(w(),_("div",ig,[c("div",ag,[c("h2",lg,U(t.title),1),c("p",cg,U(t.description),1)]),c("div",dg,[c("div",ug,[c("div",pg,[c("button",{type:"button",class:j(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="preview"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[0]||(u[0]=d=>n.value="preview")},[v(S(Ru),{class:"h-3.5 w-3.5"}),u[6]||(u[6]=c("span",null,"实时效果",-1))],2),c("button",{type:"button",class:j(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="component"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[1]||(u[1]=d=>n.value="component")},[v(S(Gs),{class:"h-3.5 w-3.5"}),c("span",null,"组件源码 ("+U(t.componentFilename)+")",1)],2),c("button",{type:"button",class:j(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="usage"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[2]||(u[2]=d=>n.value="usage")},[v(S(Gs),{class:"h-3.5 w-3.5"}),u[7]||(u[7]=c("span",null,"业务调用 (Usage.vue)",-1))],2)]),n.value==="preview"?(w(),_("div",fg,[u[8]||(u[8]=c("span",{class:"text-zinc-400"},"视窗底色：",-1)),c("div",mg,[c("button",{type:"button",class:j(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="default"?"bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[3]||(u[3]=d=>r.value="default")}," 自适应 ",2),c("button",{type:"button",class:j(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="light"?"bg-white text-zinc-900 shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[4]||(u[4]=d=>r.value="light")}," 亮白 ",2),c("button",{type:"button",class:j(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="dark"?"bg-black text-white shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[5]||(u[5]=d=>r.value="dark")}," 暗黑 ",2)]),c("button",{type:"button",class:"inline-flex items-center gap-1 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",title:"重新触发动效",onClick:l},[v(S(ju),{class:"h-3.5 w-3.5"})])])):be("",!0)]),c("div",gg,[wr(c("div",{class:j(["relative flex min-h-[360px] w-full items-center justify-center overflow-hidden p-8 transition-colors duration-200",a.value?"dark bg-black text-zinc-100":"bg-zinc-100/80 text-zinc-900"])},[(w(),_("div",{key:s.value,class:"w-full flex items-center justify-center"},[it(p.$slots,"default",{isDark:a.value})]))],2),[[bs,n.value==="preview"]]),wr(c("div",hg,[v(Hi,{code:t.componentCode,filename:t.componentFilename,language:"html"},null,8,["code","filename"])],512),[[bs,n.value==="component"]]),wr(c("div",bg,[v(Hi,{code:t.usageCode,filename:"UsageExample.vue",language:"html"},null,8,["code"])],512),[[bs,n.value==="usage"]])])]),t.propsList&&t.propsList.length>0?(w(),_("div",xg,[u[10]||(u[10]=c("h3",{class:"text-base font-semibold text-zinc-900 dark:text-zinc-100"}," Props 属性参考 ",-1)),c("div",vg,[c("table",yg,[u[9]||(u[9]=c("thead",{class:"border-b border-zinc-200 bg-zinc-50/80 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"},[c("tr",null,[c("th",{class:"px-4 py-2.5"},"属性名"),c("th",{class:"px-4 py-2.5"},"类型"),c("th",{class:"px-4 py-2.5"},"默认值"),c("th",{class:"px-4 py-2.5"},"说明")])],-1)),c("tbody",wg,[(w(!0),_(pe,null,je(t.propsList,d=>(w(),_("tr",{key:d.name,class:"text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40"},[c("td",kg,U(d.name),1),c("td",zg,U(d.type),1),c("td",_g,U(d.default),1),c("td",Cg,U(d.description),1)]))),128))])])])])):be("",!0)]))}}),Ag=["onMouseenter","onClick"],Rg={key:0,class:"pointer-events-none absolute -top-9 z-50 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-800/95 dark:text-zinc-200"},Tg=fe({__name:"Dock",props:{items:{},iconSize:{default:44},iconMagnification:{default:68},iconDistance:{default:120},direction:{default:"bottom"},class:{}},setup(e){const t=e,n=X(null),r=X(null),s=X(null);function o(d){r.value=d.clientX}function i(){r.value=null,s.value=null}function a(d){if(r.value===null||!d)return 1;const m=d.getBoundingClientRect(),g=m.left+m.width/2,A=Math.abs(r.value-g);if(A>t.iconDistance)return 1;const k=A/t.iconDistance,T=(t.iconMagnification-t.iconSize)/t.iconSize,$=.5*(1+Math.cos(k*Math.PI));return 1+T*$}const l=X([]);function p(d,m){d&&(l.value[m]=d)}function u(d){const m=l.value[d],g=a(m);return Math.round(t.iconSize*g)}return(d,m)=>(w(),_("div",{ref_key:"dockRef",ref:n,class:j(S(ze)("mx-auto flex h-16 items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/70 px-4 py-2 shadow-xl backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 transition-all duration-200 select-none",t.direction==="bottom"&&"items-end",t.direction==="top"&&"items-start",t.direction==="middle"&&"items-center",t.class)),onMousemove:o,onMouseleave:i},[t.items&&t.items.length>0?(w(!0),_(pe,{key:0},je(t.items,(g,A)=>(w(),_("div",{key:g.id,ref_for:!0,ref:k=>p(k,A),class:"group relative flex items-center justify-center cursor-pointer transition-all duration-100 ease-out",style:Ie({width:`${u(A)}px`,height:`${u(A)}px`}),onMouseenter:k=>s.value=g.label||null,onClick:k=>g.onClick&&g.onClick()},[(w(),ye(Ut(g.href?"a":"button"),{href:g.href,class:j(["flex h-full w-full items-center justify-center rounded-2xl border transition-colors shadow-sm","border-zinc-200/70 bg-white/90 text-zinc-700 hover:text-zinc-950","dark:border-zinc-700/60 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:text-white"])},{default:J(()=>[(w(),ye(Ut(g.icon),{class:"h-1/2 w-1/2 transition-transform duration-100"}))]),_:2},1032,["href"])),v(xn,{name:"dock-fade"},{default:J(()=>[s.value===g.label&&g.label?(w(),_("div",Rg,U(g.label),1)):be("",!0)]),_:2},1024),m[0]||(m[0]=c("span",{class:"absolute -bottom-1.5 h-1 w-1 rounded-full bg-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-zinc-500"},null,-1))],44,Ag))),128)):it(d.$slots,"default",{},void 0,!0,1)],34))}}),Ig=Qe(Tg,[["__scopeId","data-v-3c8b0d2e"]]),Mg={key:0,class:"pointer-events-none absolute inset-0 h-full w-full select-none",xmlns:"http://www.w3.org/2000/svg"},$g=["r","stroke","stroke-width"],Eg={class:"orbit-rotator pointer-events-auto h-full w-full"},Pg={class:"orbit-item pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"},Fg=fe({__name:"OrbitLogos",props:{radius:{default:120},duration:{default:20},delay:{default:0},reverse:{type:Boolean,default:!1},path:{type:Boolean,default:!0},pathColor:{},pathWidth:{default:1},tiltAngle:{default:0},class:{}},setup(e){const t=e,n=Ce(()=>({"--radius":`${t.radius}px`,"--duration":`${t.duration}s`,"--delay":`-${t.delay}s`,"--direction":t.reverse?"reverse":"normal","--counter-direction":t.reverse?"normal":"reverse","--tilt":`${t.tiltAngle}deg`,width:`${t.radius*2}px`,height:`${t.radius*2}px`}));return(r,s)=>(w(),_("div",{style:Ie(n.value),class:j(S(ze)("pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full [transform-style:preserve-3d]",t.class))},[t.path?(w(),_("svg",Mg,[c("circle",{class:"stroke-zinc-300/60 dark:stroke-zinc-800/80 stroke-dashed",cx:"50%",cy:"50%",r:t.radius,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-dasharray":"4 4"},null,8,$g)])):be("",!0),c("div",Eg,[c("div",Pg,[it(r.$slots,"default",{},void 0,!0)])])],6))}}),vr=Qe(Fg,[["__scopeId","data-v-583093f1"]]),Lg=["src","alt"],Og={class:"pointer-events-none absolute bottom-4 right-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},jg=["src","alt"],Dg={class:"pointer-events-none absolute bottom-4 left-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},Bg={class:"absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-zinc-800 shadow-xl backdrop-blur-md transition-transform duration-100 hover:scale-110 active:scale-95 dark:border-zinc-700/80 dark:bg-zinc-900/90 dark:text-zinc-200"},Ng=fe({__name:"ImageCompare",props:{beforeImage:{},afterImage:{},beforeLabel:{default:"Before"},afterLabel:{default:"After"},initialPosition:{default:50},class:{}},setup(e){const t=e,n=X(null),r=X(t.initialPosition),s=X(!1);function o(u){if(!n.value)return;const d=n.value.getBoundingClientRect(),m=u-d.left,g=Math.min(Math.max(m/d.width*100,0),100);r.value=Number(g.toFixed(2))}function i(u){s.value=!0,o(u.clientX)}function a(u){s.value&&o(u.clientX)}function l(){s.value=!1}function p(u){!s.value||u.touches.length===0||o(u.touches[0].clientX)}return at(()=>{window.addEventListener("mouseup",l),window.addEventListener("mousemove",a),window.addEventListener("touchend",l),window.addEventListener("touchmove",p)}),gt(()=>{window.removeEventListener("mouseup",l),window.removeEventListener("mousemove",a),window.removeEventListener("touchend",l),window.removeEventListener("touchmove",p)}),(u,d)=>(w(),_("div",{ref_key:"containerRef",ref:n,class:j(S(ze)("relative select-none overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 shadow-xl cursor-ew-resize dark:border-zinc-800/80",t.class)),onMousedown:i,onTouchstart:d[0]||(d[0]=m=>s.value=!0)},[c("img",{src:t.afterImage,alt:t.afterLabel,class:"pointer-events-none h-full w-full object-cover"},null,8,Lg),c("div",Og,U(t.afterLabel),1),c("div",{class:"pointer-events-none absolute inset-0 h-full w-full overflow-hidden",style:Ie({clipPath:`inset(0 ${100-r.value}% 0 0)`})},[c("img",{src:t.beforeImage,alt:t.beforeLabel,class:"h-full w-full object-cover"},null,8,jg),c("div",Dg,U(t.beforeLabel),1)],4),c("div",{class:"pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]",style:Ie({left:`${r.value}%`})},[c("div",Bg,[v(S(Au),{class:"h-4 w-4"})])],4)],34))}}),Vg={class:"group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/90 dark:bg-zinc-950/90"},Hg={class:"flex items-center gap-2.5 min-w-0"},Gg={class:"relative flex h-3 w-3 shrink-0 items-center justify-center"},Ug={class:"flex flex-col min-w-0"},qg={class:"flex items-center gap-2"},Wg={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate"},Xg={class:"text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5"},Kg={class:"flex items-center gap-2 shrink-0 text-xs text-zinc-500"},Yg={key:0,class:"flex items-center gap-1 font-mono text-[11px] rounded-md bg-zinc-100 px-2 py-0.5 dark:bg-zinc-900 dark:text-zinc-300"},Zg={key:0,class:"border-t border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-2.5"},Jg={class:"mt-0.5 shrink-0"},Qg={key:3,class:"inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 text-[10px] text-zinc-400 dark:border-zinc-700"},eh={class:"flex-1 min-w-0"},th={class:"flex items-center justify-between"},nh={key:0,class:"font-mono text-[10px] text-zinc-400 shrink-0 ml-2"},rh={key:0,class:"text-[11px] text-zinc-400 font-mono mt-0.5 truncate"},sh=fe({__name:"AgentStatus",props:{status:{default:"thinking"},agentName:{default:"Aura AI Agent"},currentTask:{default:"Thinking and orchestrating subagents..."},elapsed:{type:Boolean,default:!0},steps:{default:()=>[{id:1,name:"Understand user prompt requirements",status:"done",duration:"0.4s"},{id:2,name:"Search codebase for components & hooks",status:"done",duration:"1.2s"},{id:3,name:"Run Playwright headless visual verification",status:"running",detail:"Evaluating DOM computed styles..."},{id:4,name:"Commit and build production artifacts",status:"pending"}]},class:{}},setup(e){const t=e,n=X(!1),r=X(0);let s=null;at(()=>{t.elapsed&&(s=setInterval(()=>{r.value+=.1},100))}),gt(()=>{s&&clearInterval(s)});const o=Ce(()=>`${r.value.toFixed(1)}s`),i=Ce(()=>{switch(t.status){case"thinking":return{icon:Fe,label:"思考推演中",color:"text-sky-500 dark:text-sky-400",badgeBg:"bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",pulseBg:"bg-sky-500"};case"running":return{icon:hi,label:"自主执行中",color:"text-blue-500 dark:text-blue-400 animate-spin",badgeBg:"bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",pulseBg:"bg-blue-500"};case"tool_call":return{icon:Uu,label:"调用工具中",color:"text-amber-500 dark:text-amber-400",badgeBg:"bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",pulseBg:"bg-amber-500"};case"success":return{icon:fi,label:"任务已闭环",color:"text-emerald-500 dark:text-emerald-400",badgeBg:"bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",pulseBg:"bg-emerald-500"};case"error":return{icon:pi,label:"出现异常",color:"text-rose-500 dark:text-rose-400",badgeBg:"bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",pulseBg:"bg-rose-500"};default:return{icon:Fe,label:"待命中",color:"text-zinc-400",badgeBg:"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",pulseBg:"bg-zinc-400"}}});return(a,l)=>(w(),_("div",{class:j(S(ze)("w-full max-w-lg transition-all duration-300",t.class))},[c("div",Vg,[c("div",{class:"flex items-center justify-between gap-3 px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60",onClick:l[0]||(l[0]=p=>n.value=!n.value)},[c("div",Hg,[c("div",Gg,[c("span",{class:j(["absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",i.value.pulseBg])},null,2),c("span",{class:j(["relative inline-flex h-2 w-2 rounded-full",i.value.pulseBg])},null,2)]),c("div",Ug,[c("div",qg,[c("span",Wg,U(t.agentName),1),c("span",{class:j(["rounded-full border px-2 py-0.2 text-[10px] font-semibold",i.value.badgeBg])},U(i.value.label),3)]),c("p",Xg,U(t.currentTask),1)])]),c("div",Kg,[t.elapsed?(w(),_("div",Yg,[v(S(dl),{class:"h-3 w-3 text-zinc-400"}),c("span",null,U(o.value),1)])):be("",!0),v(S(os),{class:j(["h-4 w-4 text-zinc-400 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])]),v(xn,{name:"agent-expand"},{default:J(()=>[n.value&&t.steps&&t.steps.length>0?(w(),_("div",Zg,[l[1]||(l[1]=c("div",{class:"text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2"}," 执行轨迹步骤 (Execution Steps) ",-1)),(w(!0),_(pe,null,je(t.steps,(p,u)=>(w(),_("div",{key:p.id,class:"flex items-start gap-2.5 text-xs"},[c("div",Jg,[p.status==="done"?(w(),ye(S(fi),{key:0,class:"h-4 w-4 text-emerald-500"})):p.status==="running"?(w(),ye(S(hi),{key:1,class:"h-4 w-4 text-sky-500 animate-spin"})):p.status==="error"?(w(),ye(S(pi),{key:2,class:"h-4 w-4 text-rose-500"})):(w(),_("span",Qg,U(u+1),1))]),c("div",eh,[c("div",th,[c("span",{class:j(["font-medium truncate",p.status==="done"&&"text-zinc-700 dark:text-zinc-300",p.status==="running"&&"text-sky-600 dark:text-sky-400 font-semibold",p.status==="pending"&&"text-zinc-400 dark:text-zinc-500",p.status==="error"&&"text-rose-500 font-semibold"])},U(p.name),3),p.duration?(w(),_("span",nh,U(p.duration),1)):be("",!0)]),p.detail?(w(),_("p",rh,U(p.detail),1)):be("",!0)])]))),128))])):be("",!0)]),_:1})])],2))}}),oh=Qe(sh,[["__scopeId","data-v-d55be07e"]]),ih={class:"flex h-10 w-full items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 select-none"},ah={class:"flex items-center gap-1.5 text-[11px] font-medium text-zinc-400"},lh={class:"truncate max-w-[220px] sm:max-w-md"},ch={key:0,class:"flex items-center gap-2"},dh={key:1,class:"w-12"},uh={class:"text-blue-400 select-none font-bold"},ph={class:"text-zinc-100 font-semibold flex-1 break-all"},fh={key:0,class:"inline-block h-4 w-2 translate-y-0.5 bg-blue-500 animate-pulse ml-0.5"},mh={key:1,class:"text-emerald-400 font-medium break-all"},gh={key:2,class:"text-rose-400 font-medium break-all"},hh={key:3,class:"text-amber-400 font-medium break-all"},bh={key:4,class:"text-sky-400 font-medium break-all"},xh={key:5,class:"text-zinc-400 break-all"},vh={key:0,class:"flex items-center gap-2 pt-1"},yh=fe({__name:"TypewriterTerminal",props:{title:{default:"zsh - aura@developer:~ (80x24)"},lines:{default:()=>[{type:"input",text:"pnpm dlx aura-ui@latest add agent-status dock"},{type:"output",text:"⠋ Resolving packages & peer dependencies..."},{type:"output",text:"✔ Cloned src/components/ui/AgentStatus.vue"},{type:"output",text:"✔ Cloned src/components/ui/Dock.vue"},{type:"success",text:"✨ Successfully installed 2 motion primitives in 260ms."},{type:"input",text:"aura test --visual-regression"},{type:"info",text:"ℹ Running Playwright headless test in Chromium..."},{type:"success",text:"✔ All 19 components passed 60fps frame rate check!"}]},typingSpeed:{default:35},pauseEnd:{default:3500},loop:{type:Boolean,default:!0},controls:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=X([]),r=X(0),s=X(0),o=X(!1),i=X(!1),a=X(!1),l=X(null);let p=null;function u(){l.value&&(l.value.scrollTop=l.value.scrollHeight)}function d(){p&&clearTimeout(p),n.value=[],r.value=0,s.value=0,o.value=!1,i.value=!1,m()}function m(){if(!t.lines||t.lines.length===0)return;if(r.value>=t.lines.length){o.value=!1,i.value=!0,t.loop&&(p=setTimeout(()=>{d()},t.pauseEnd));return}const A=t.lines[r.value];if(A.type==="input")if(o.value=!0,s.value===0&&n.value.push({type:"input",text:"",prefix:A.prefix||"$ "}),s.value<A.text.length){const k=n.value[n.value.length-1];k.text+=A.text[s.value],s.value++,u();const T=Math.floor(Math.random()*25)-10,$=Math.max(15,t.typingSpeed+T);p=setTimeout(m,$)}else s.value=0,r.value++,o.value=!1,u(),p=setTimeout(m,400);else{o.value=!1,n.value.push({type:A.type,text:A.text,prefix:A.prefix}),r.value++,u();const k=A.delay??220;p=setTimeout(m,k)}}function g(){const A=t.lines.map(k=>`${k.prefix||(k.type==="input"?"$ ":"")}${k.text}`).join(`
`);navigator.clipboard.writeText(A),a.value=!0,setTimeout(()=>{a.value=!1},2e3)}return at(()=>{d()}),gt(()=>{p&&clearTimeout(p)}),vt(()=>t.lines,()=>{d()},{deep:!0}),(A,k)=>(w(),_("div",{class:j(S(ze)("relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 font-mono text-xs sm:text-sm text-zinc-300 shadow-2xl backdrop-blur-md dark:border-zinc-800/80",t.class))},[c("div",ih,[k[0]||(k[0]=c("div",{class:"flex items-center gap-2"},[c("span",{class:"h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm transition-transform hover:scale-110"}),c("span",{class:"h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm transition-transform hover:scale-110"}),c("span",{class:"h-3 w-3 rounded-full bg-[#27c93f] shadow-sm transition-transform hover:scale-110"})],-1)),c("div",ah,[v(S(Ws),{class:"h-3.5 w-3.5 text-zinc-500"}),c("span",lh,U(t.title),1)]),t.controls?(w(),_("div",ch,[c("button",{onClick:d,title:"重新播放",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[v(S(Du),{class:"h-3.5 w-3.5"})]),c("button",{onClick:g,title:"复制所有命令",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[a.value?(w(),ye(S(rn),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(w(),ye(S(sr),{key:1,class:"h-3.5 w-3.5"}))])])):(w(),_("div",dh))]),c("div",{ref_key:"terminalBodyRef",ref:l,class:"max-h-80 min-h-[220px] overflow-y-auto p-4 sm:p-5 space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-800"},[(w(!0),_(pe,null,je(n.value,(T,$)=>(w(),_("div",{key:$,class:"flex items-start gap-2 leading-relaxed"},[T.type==="input"?(w(),_(pe,{key:0},[c("span",uh,U(T.prefix||"$ "),1),c("span",ph,[Ve(U(T.text)+" ",1),o.value&&$===n.value.length-1?(w(),_("span",fh)):be("",!0)])],64)):T.type==="success"?(w(),_("span",mh,U(T.text),1)):T.type==="error"?(w(),_("span",gh,U(T.text),1)):T.type==="warning"?(w(),_("span",hh,U(T.text),1)):T.type==="info"?(w(),_("span",bh,U(T.text),1)):(w(),_("span",xh,U(T.text),1))]))),128)),i.value?(w(),_("div",vh,[...k[1]||(k[1]=[c("span",{class:"text-blue-400 font-bold select-none"},"$ ",-1),c("span",{class:"inline-block h-4 w-2 bg-zinc-500 animate-pulse"},null,-1)])])):be("",!0)],512)],2))}}),wh={class:"p-3 sm:p-4 pb-2"},kh=["placeholder"],zh={class:"flex items-center justify-between border-t border-zinc-100 px-3 py-2.5 dark:border-zinc-900"},_h={class:"flex items-center gap-1.5 sm:gap-2"},Ch={class:"relative"},Sh={key:0,class:"absolute bottom-full left-0 mb-2 w-52 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-2xl backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 select-none"},Ah=["onClick"],Rh={key:0,class:"rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.2 text-[9px] text-zinc-500"},Th={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"上传图像或文件"},Ih={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"语音输入"},Mh={class:"flex items-center gap-2"},$h=["disabled"],Eh=fe({__name:"PromptInput",props:{modelValue:{default:""},placeholder:{default:"向 Aura AI 提问、生成 UI 动效，或输入 / 触发指令..."},loading:{type:Boolean,default:!1},selectedModel:{default:"deepseek-r1"},models:{default:()=>[{id:"deepseek-r1",name:"DeepSeek R1",badge:"Reasoning"},{id:"claude-3-7-sonnet",name:"Claude 3.7 Sonnet",badge:"Hybrid"},{id:"gpt-4o",name:"GPT-4o Omni",badge:"Multimodal"}]},webSearch:{type:Boolean,default:!1},maxRows:{default:6},class:{}},emits:["update:modelValue","submit","stop","update:selectedModel","toggleWebSearch"],setup(e,{emit:t}){const n=e,r=t,s=X(null),o=X(!1),i=X(!1),a=X(n.webSearch),l=Ce({get:()=>n.modelValue,set:T=>r("update:modelValue",T)}),p=Ce(()=>n.models.find(T=>T.id===n.selectedModel)||n.models[0]);function u(T){const $=T.target;l.value=$.value,d()}function d(){if(!s.value)return;s.value.style.height="auto";const T=Math.min(s.value.scrollHeight,24*n.maxRows);s.value.style.height=`${T}px`}function m(T){T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),g())}function g(){if(n.loading){r("stop");return}l.value.trim()&&r("submit",l.value)}function A(){a.value=!a.value,r("toggleWebSearch",a.value)}function k(T){r("update:selectedModel",T),i.value=!1}return(T,$)=>(w(),_("div",{class:j(S(ze)("group relative w-full rounded-2xl border transition-all duration-300 shadow-xl backdrop-blur-xl",o.value?"border-blue-500/80 shadow-[0_0_25px_rgba(59,130,246,0.18)] dark:border-blue-400/80 dark:shadow-[0_0_35px_rgba(56,189,248,0.22)]":"border-zinc-200/90 hover:border-zinc-300 dark:border-zinc-800/90 dark:hover:border-zinc-700","bg-white/85 dark:bg-zinc-950/85",n.class))},[c("div",{class:j(["pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-opacity duration-300",o.value?"opacity-100":"opacity-0"])},null,2),c("div",wh,[wr(c("textarea",{ref_key:"textareaRef",ref:s,"onUpdate:modelValue":$[0]||($[0]=b=>l.value=b),placeholder:n.placeholder,rows:"1",onFocus:$[1]||($[1]=b=>o.value=!0),onBlur:$[2]||($[2]=b=>o.value=!1),onInput:u,onKeydown:m,class:"w-full resize-none border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 bg-transparent text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-500 leading-relaxed font-sans shadow-none",style:{outline:"none","box-shadow":"none"}},null,40,kh),[[mu,l.value]])]),c("div",zh,[c("div",_h,[c("div",Ch,[c("button",{type:"button",onClick:$[3]||($[3]=b=>i.value=!i.value),class:"flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"},[v(S(Fe),{class:"h-3.5 w-3.5 text-blue-500"}),c("span",null,U(p.value.name),1),v(S(os),{class:"h-3 w-3 text-zinc-400"})]),v(xn,{name:"model-pop"},{default:J(()=>[i.value?(w(),_("div",Sh,[$[4]||($[4]=c("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," 切换推理基座 ",-1)),(w(!0),_(pe,null,je(n.models,b=>(w(),_("button",{key:b.id,type:"button",onClick:x=>k(b.id),class:j(["flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",b.id===n.selectedModel?"bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400":"text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"])},[c("span",null,U(b.name),1),b.badge?(w(),_("span",Rh,U(b.badge),1)):be("",!0)],10,Ah))),128))])):be("",!0)]),_:1})]),c("button",{type:"button",onClick:A,class:j(["flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium transition-colors border",a.value?"border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400":"border-transparent text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"]),title:"联网实时搜索"},[v(S(Br),{class:"h-3.5 w-3.5"}),$[5]||($[5]=c("span",{class:"hidden sm:inline"},"深度搜索",-1))],2),c("button",Th,[v(S(Fu),{class:"h-3.5 w-3.5"})]),c("button",Ih,[v(S(Nr),{class:"h-3.5 w-3.5"})])]),c("div",Mh,[$[6]||($[6]=c("span",{class:"hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-zinc-400"},[c("span",null,"Enter ↵ 发送")],-1)),c("button",{type:"button",onClick:g,disabled:!n.loading&&!l.value.trim(),class:j(["flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 shadow-md",n.loading?"bg-rose-500 text-white hover:bg-rose-600":l.value.trim()?"bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 active:scale-95":"bg-zinc-100 text-zinc-400 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"])},[n.loading?(w(),ye(S(Hu),{key:0,class:"h-3.5 w-3.5 fill-current"})):(w(),ye(S(_u),{key:1,class:"h-4 w-4"}))],10,$h)])])],2))}}),Ph=Qe(Eh,[["__scopeId","data-v-22761e01"]]),Fh={class:"flex items-center gap-2.5 text-xs"},Lh={class:"relative flex h-4 w-4 items-center justify-center"},Oh={key:0,class:"absolute -inset-1 rounded-full bg-blue-500/20 animate-ping"},jh={class:"flex items-center gap-2"},Dh={class:"font-bold text-zinc-900 dark:text-zinc-100"},Bh={class:"inline-flex items-center gap-1 rounded-md bg-zinc-200/60 px-2 py-0.5 font-mono text-[11px] text-zinc-500 dark:bg-zinc-800/80 dark:text-zinc-400"},Nh={key:0,class:"border-t border-zinc-200/70 px-4 py-3.5 dark:border-zinc-800/70"},Vh={class:"border-l-2 border-blue-500/70 pl-3.5 font-mono text-xs leading-relaxed text-zinc-600 dark:border-blue-400/70 dark:text-zinc-400 whitespace-pre-wrap select-text"},Hh=fe({__name:"ThoughtAccordion",props:{duration:{default:"思考用时 12.6 秒"},status:{default:"complete"},defaultOpen:{type:Boolean,default:!0},thoughtText:{default:`> 1. 解析用户需求：为 Vue 3 全系打造顶级 AI 原生交互动效。
> 2. 几何与物理模型推演：使用 CSS 3D 矩阵解构空间深度，保持 60fps 满帧性能。
> 3. 边界与异常收敛：引入状态机阻尼回弹，确保单文件零配置即刻分发。
> 4. 自愈与验证：通过 Playwright 双模态 Chromium 验证无色彩渗漏，交付闭环。`},class:{}},setup(e){const t=e,n=X(t.defaultOpen),r=X(!1);function s(){navigator.clipboard.writeText(t.thoughtText),r.value=!0,setTimeout(()=>{r.value=!1},2e3)}return(o,i)=>(w(),_("div",{class:j(S(ze)("w-full overflow-hidden rounded-2xl border transition-all duration-300",n.value?"border-zinc-200/90 bg-zinc-50/70 shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/40":"border-zinc-200/60 bg-white/60 hover:border-zinc-300 dark:border-zinc-800/60 dark:bg-zinc-950/60",t.class))},[c("div",{class:"flex items-center justify-between px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40",onClick:i[2]||(i[2]=a=>n.value=!n.value)},[c("div",Fh,[c("div",Lh,[v(S(Fe),{class:j(["h-4 w-4 text-blue-500 transition-transform duration-300",t.status==="thinking"&&"animate-spin"])},null,8,["class"]),t.status==="thinking"?(w(),_("span",Oh)):be("",!0)]),c("div",jh,[c("span",Dh,U(t.status==="thinking"?"正在深度思考推演...":"已深度思考"),1),c("span",Bh,[v(S(dl),{class:"h-3 w-3"}),c("span",null,U(t.duration),1)])])]),c("div",{class:"flex items-center gap-1.5",onClick:i[1]||(i[1]=Dr(()=>{},["stop"]))},[c("button",{type:"button",onClick:s,title:"复制思考过程",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[r.value?(w(),ye(S(rn),{key:0,class:"h-3.5 w-3.5 text-emerald-500"})):(w(),ye(S(sr),{key:1,class:"h-3.5 w-3.5"}))]),c("button",{type:"button",onClick:i[0]||(i[0]=a=>n.value=!n.value),class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[v(S(os),{class:j(["h-4 w-4 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])])]),v(xn,{name:"thought-slide"},{default:J(()=>[n.value?(w(),_("div",Nh,[c("div",Vh,[it(o.$slots,"default",{},()=>[Ve(U(t.thoughtText),1)],!0)])])):be("",!0)]),_:3})],2))}}),Gh=Qe(Hh,[["__scopeId","data-v-00c62984"]]),Uh=["onClick","onMouseenter"],qh=fe({__name:"FluidTabs",props:{modelValue:{default:""},tabs:{default:()=>[]},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,s=X(null),o=X([]),i=X({left:0,width:0,opacity:0}),a=X({left:0,width:0,opacity:0});function l(g,A){g&&(o.value[A]=g)}function p(){mo(()=>{if(!s.value)return;const g=n.tabs.findIndex(T=>T.id===n.modelValue);if(g===-1||!o.value[g]){i.value.opacity=0;return}const A=s.value.getBoundingClientRect(),k=o.value[g].getBoundingClientRect();i.value={left:k.left-A.left,width:k.width,opacity:1}})}function u(g){if(!s.value||!o.value[g])return;const A=s.value.getBoundingClientRect(),k=o.value[g].getBoundingClientRect();a.value={left:k.left-A.left,width:k.width,opacity:1}}function d(){a.value.opacity=0}function m(g){r("update:modelValue",g),r("change",g)}return vt(()=>n.modelValue,()=>{p()}),vt(()=>n.tabs,()=>{p()},{deep:!0}),at(()=>{!n.modelValue&&n.tabs.length>0&&r("update:modelValue",n.tabs[0].id),p(),window.addEventListener("resize",p)}),(g,A)=>(w(),_("div",{ref_key:"containerRef",ref:s,class:j(S(ze)("relative inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-zinc-100/80 p-1.5 shadow-inner backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80 select-none",n.class)),onMouseleave:d},[c("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-zinc-200/60 transition-all duration-200 ease-out dark:bg-zinc-800/60",style:Ie({left:`${a.value.left}px`,width:`${a.value.width}px`,opacity:a.value.opacity})},null,4),c("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-800 dark:shadow-black/40",style:Ie({left:`${i.value.left}px`,width:`${i.value.width}px`,opacity:i.value.opacity})},null,4),(w(!0),_(pe,null,je(n.tabs,(k,T)=>(w(),_("button",{key:k.id,ref_for:!0,ref:$=>l($,T),type:"button",onClick:$=>m(k.id),onMouseenter:$=>u(T),class:j(["relative z-10 flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-200",n.modelValue===k.id?"text-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"])},[k.icon?(w(),ye(Ut(k.icon),{key:0,class:j(["h-4 w-4 transition-transform duration-200",n.modelValue===k.id?"scale-110 text-blue-600 dark:text-blue-400":"text-zinc-400"])},null,8,["class"])):be("",!0),c("span",null,U(k.label),1),k.badge?(w(),_("span",{key:1,class:j(["rounded-full px-1.5 py-0.2 text-[10px] font-bold font-mono transition-colors",n.modelValue===k.id?"bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300":"bg-zinc-200/80 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"])},U(k.badge),3)):be("",!0)],42,Uh))),128))],34))}}),Wh={class:"relative z-10 flex items-center gap-2"},Xh={key:2},Kh={key:3},Yh={key:4},Zh={key:5,class:"ml-1 inline-block font-mono text-[11px] font-bold"},Rs=fe({__name:"HoldToConfirm",props:{duration:{default:1200},label:{default:"长按以确认执行"},holdingLabel:{default:"保持长按不放..."},confirmedLabel:{default:"已成功确认！"},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,s=X(0),o=X(!1),i=X(!1);let a=null,l=0;const p=Ce(()=>{switch(n.variant){case"danger":return{bg:"bg-rose-500/10 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-500/30",fill:"bg-rose-600 dark:bg-rose-500",ring:"text-rose-500",icon:pl};case"warning":return{bg:"bg-amber-500/10 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-500/30",fill:"bg-amber-600 dark:bg-amber-500",ring:"text-amber-500",icon:fl};default:return{bg:"bg-blue-500/10 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border-blue-500/30",fill:"bg-blue-600 dark:bg-blue-500",ring:"text-blue-500",icon:rn}}});function u(){if(i.value)return;o.value=!0,l=performance.now();function m(){const g=performance.now()-l,A=Math.min(g/n.duration*100,100);s.value=A,A<100?a=requestAnimationFrame(m):(o.value=!1,i.value=!0,r("confirm"),setTimeout(()=>{i.value=!1,s.value=0},2500))}a=requestAnimationFrame(m)}function d(){i.value||(o.value=!1,a!==null&&(cancelAnimationFrame(a),a=null),s.value=0,r("cancel"))}return gt(()=>{a!==null&&cancelAnimationFrame(a)}),(m,g)=>(w(),_("button",{type:"button",class:j(S(ze)("group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-xl border px-5 text-xs sm:text-sm font-semibold select-none transition-all duration-200 active:scale-95 cursor-pointer",p.value.bg,i.value&&"!bg-emerald-600 !border-emerald-600 text-white",n.class)),onMousedown:u,onMouseup:d,onMouseleave:d,onTouchstart:Dr(u,["prevent"]),onTouchend:Dr(d,["prevent"])},[i.value?be("",!0):(w(),_("div",{key:0,class:j(["pointer-events-none absolute inset-y-0 left-0 opacity-25 transition-[width] ease-linear",p.value.fill]),style:Ie({width:`${s.value}%`})},null,6)),c("span",Wh,[i.value?(w(),ye(S(rn),{key:0,class:"h-4 w-4 animate-bounce"})):(w(),ye(Ut(p.value.icon),{key:1,class:j(["h-4 w-4 transition-transform duration-200",o.value&&"scale-125 animate-pulse"])},null,8,["class"])),i.value?(w(),_("span",Xh,U(n.confirmedLabel),1)):o.value?(w(),_("span",Kh,U(n.holdingLabel),1)):(w(),_("span",Yh,U(n.label),1)),o.value&&!i.value?(w(),_("span",Zh,U(Math.round(s.value))+"% ",1)):be("",!0)])],34))}}),Jh={key:0,class:"flex h-10 items-center gap-1.5 px-4 text-xs sm:text-sm font-semibold text-white"},Ts=fe({__name:"ConfirmMorph",props:{label:{default:"删除此资源"},confirmText:{default:"确定删除"},cancelText:{default:"取消"},icon:{},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,s=X(!1),o=X(!1);function i(){o.value||(s.value=!0)}function a(){o.value=!0,r("confirm"),setTimeout(()=>{o.value=!1,s.value=!1},2200)}function l(){s.value=!1,r("cancel")}return(p,u)=>(w(),_("div",{class:j(S(ze)("inline-flex items-center overflow-hidden rounded-xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none",n.variant==="danger"&&"border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20",n.variant==="warning"&&"border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20",n.variant==="primary"&&"border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20",o.value&&"!border-emerald-600 !bg-emerald-600 text-white",n.class))},[o.value?(w(),_("div",Jh,[v(S(rn),{class:"h-4 w-4 animate-bounce"}),u[0]||(u[0]=c("span",null,"操作已完成",-1))])):s.value?(w(),_(pe,{key:1},[c("button",{type:"button",onClick:a,class:j(["flex h-10 items-center gap-1.5 px-3.5 text-xs font-semibold text-white transition-colors cursor-pointer",n.variant==="danger"&&"bg-rose-600 hover:bg-rose-700",n.variant==="warning"&&"bg-amber-600 hover:bg-amber-700",n.variant==="primary"&&"bg-blue-600 hover:bg-blue-700"])},[v(S(fl),{class:"h-3.5 w-3.5"}),c("span",null,U(n.confirmText),1)],2),c("button",{type:"button",onClick:l,class:"flex h-10 items-center gap-1 border-l border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 px-3 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[v(S(qu),{class:"h-3.5 w-3.5"}),c("span",null,U(n.cancelText),1)])],64)):(w(),_("button",{key:2,type:"button",onClick:i,class:j(["flex h-10 items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-colors cursor-pointer",n.variant==="danger"&&"text-rose-600 hover:bg-rose-500/10 dark:text-rose-400",n.variant==="warning"&&"text-amber-600 hover:bg-amber-500/10 dark:text-amber-400",n.variant==="primary"&&"text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"])},[(w(),ye(Ut(n.icon||S(pl)),{class:"h-4 w-4"})),c("span",null,U(n.label),1)],2))],2))}}),Qh=["width","height","stroke-width"],eb=["width","height","stroke-width"],tb=["d"],nb=["width","height","stroke-width"],Is=fe({__name:"IconMorph",props:{modelValue:{type:Boolean,default:!1},mode:{default:"menu-close"},size:{default:24},strokeWidth:{default:2},class:{}},emits:["update:modelValue","click"],setup(e,{emit:t}){const n=e,r=t;function s(){r("update:modelValue",!n.modelValue),r("click")}return(o,i)=>(w(),_("button",{type:"button",onClick:s,class:j(S(ze)("relative inline-flex items-center justify-center rounded-xl p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer select-none",n.class)),style:Ie({width:`${n.size+16}px`,height:`${n.size+16}px`})},[n.mode==="menu-close"?(w(),_("svg",{key:0,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[c("line",{x1:"3",y1:"6",x2:"21",y2:"6",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:Ie({transform:n.modelValue?"translateY(6px) rotate(45deg)":"none"})},null,4),c("line",{x1:"3",y1:"12",x2:"21",y2:"12",class:"transition-all duration-200 ease-out origin-center",style:Ie({opacity:n.modelValue?"0":"1",transform:n.modelValue?"scaleX(0)":"scaleX(1)"})},null,4),c("line",{x1:"3",y1:"18",x2:"21",y2:"18",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:Ie({transform:n.modelValue?"translateY(-6px) rotate(-45deg)":"none"})},null,4)],8,Qh)):n.mode==="play-pause"?(w(),_("svg",{key:1,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[c("line",{x1:"6",y1:"4",x2:"6",y2:"20",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",style:Ie({transform:n.modelValue?"none":"translateX(1px)"})},null,4),c("path",{d:n.modelValue?"M18 4 L18 20":"M6 4 L20 12 L6 20",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"},null,8,tb)],8,eb)):n.mode==="plus-minus"?(w(),_("svg",{key:2,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round"},[i[0]||(i[0]=c("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1)),c("line",{x1:"12",y1:"5",x2:"12",y2:"19",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:Ie({transform:n.modelValue?"rotate(90deg) scale(0)":"rotate(0deg) scale(1)",opacity:n.modelValue?"0":"1"})},null,4)],8,nb)):be("",!0)],6))}}),rb={class:"relative inline-flex items-center"},sb=["disabled"],ob={key:1,class:"truncate"},ib={key:2,class:"ml-0.5 rounded-full bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400"},ab={key:0,class:"pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap rounded-md border border-zinc-200/80 bg-white/95 px-2 py-0.5 text-[10px] font-medium text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-800/95 dark:text-zinc-200"},lb=fe({__name:"ActionButton",props:{label:{},tooltip:{},icon:{},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},badge:{},size:{default:"md"},class:{}},emits:["click"],setup(e,{emit:t}){const n=e,r=t,s=X(!1);function o(i){n.disabled||r("click",i)}return(i,a)=>(w(),_("div",rb,[c("button",{type:"button",disabled:n.disabled,onClick:o,onMouseenter:a[0]||(a[0]=l=>s.value=!0),onMouseleave:a[1]||(a[1]=l=>s.value=!1),class:j(S(ze)("group relative flex items-center justify-center rounded-xl border font-medium select-none transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer","active:scale-90 hover:scale-[1.03]",n.size==="sm"&&"h-8 px-2.5 text-xs gap-1.5",n.size==="md"&&"h-9 px-3 text-xs sm:text-sm gap-2",n.size==="lg"&&"h-11 px-4 text-sm sm:text-base gap-2.5",n.active?"border-blue-500/50 bg-blue-50 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/90 text-zinc-700 shadow-2xs hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800/80 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",n.disabled&&"opacity-50 cursor-not-allowed active:scale-100 hover:scale-100",n.class))},[n.icon?(w(),ye(Ut(n.icon),{key:0,class:j(["shrink-0 transition-transform duration-150",n.size==="sm"&&"h-3.5 w-3.5",n.size==="md"&&"h-4 w-4",n.size==="lg"&&"h-5 w-5"])},null,8,["class"])):be("",!0),n.label?(w(),_("span",ob,U(n.label),1)):be("",!0),n.badge!==void 0?(w(),_("span",ib,U(n.badge),1)):be("",!0),it(i.$slots,"default",{},void 0,!0)],42,sb),v(xn,{name:"action-tip"},{default:J(()=>[s.value&&n.tooltip?(w(),_("div",ab,U(n.tooltip),1)):be("",!0)]),_:1})]))}}),Dn=Qe(lb,[["__scopeId","data-v-54d32724"]]),cb={key:0,class:"absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-1"},db=["onClick"],ub={class:"text-xs font-semibold text-zinc-900 dark:text-zinc-100"},pb={key:0,class:"text-[10px] text-zinc-400 mt-0.5"},fb=fe({__name:"SplitButton",props:{label:{default:"立即发布上线"},icon:{default:ul},items:{default:()=>[{id:"preview",label:"发布至 Staging 预览环境",description:"生成独立预览分支 URL"},{id:"draft",label:"保存为草稿草稿快照",description:"仅团队协作成员可见"},{id:"schedule",label:"定时发布计划",description:"设定指定时间自动化推上线"}]},variant:{default:"primary"},class:{}},emits:["primaryClick","select"],setup(e,{emit:t}){const n=e,r=t,s=X(!1),o=X(null);function i(){s.value=!s.value}function a(){r("primaryClick")}function l(u){s.value=!1,r("select",u),u.onClick&&u.onClick()}function p(u){o.value&&!o.value.contains(u.target)&&(s.value=!1)}return at(()=>{window.addEventListener("click",p)}),gt(()=>{window.removeEventListener("click",p)}),(u,d)=>(w(),_("div",{ref_key:"containerRef",ref:o,class:j(S(ze)("relative inline-flex items-center select-none",n.class))},[c("div",{class:j(["flex h-10 items-stretch overflow-hidden rounded-xl border shadow-sm transition-all duration-200",n.variant==="primary"&&"border-blue-600 bg-blue-600 text-white hover:bg-blue-500",n.variant==="secondary"&&"border-zinc-200/80 bg-white/90 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800"])},[c("button",{type:"button",onClick:a,class:"flex items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-transform active:scale-95 cursor-pointer"},[(w(),ye(Ut(n.icon),{class:"h-4 w-4"})),c("span",null,U(n.label),1)]),c("div",{class:j(["w-px self-stretch",n.variant==="primary"?"bg-blue-400/50":"bg-zinc-200 dark:bg-zinc-800"])},null,2),c("button",{type:"button",onClick:Dr(i,["stop"]),class:"flex items-center justify-center px-2.5 transition-colors hover:bg-black/10 active:scale-95 cursor-pointer dark:hover:bg-white/10",title:"更多选项"},[v(S(os),{class:j(["h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",s.value&&"rotate-180"])},null,8,["class"])])],2),v(xn,{name:"split-menu"},{default:J(()=>[s.value&&n.items&&n.items.length>0?(w(),_("div",cb,[(w(!0),_(pe,null,je(n.items,m=>(w(),_("button",{key:m.id,type:"button",onClick:g=>l(m),class:"flex w-full flex-col items-start rounded-lg px-3 py-2 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"},[c("span",ub,U(m.label),1),m.description?(w(),_("span",pb,U(m.description),1)):be("",!0)],8,db))),128))])):be("",!0)]),_:1})],2))}}),Gi=Qe(fb,[["__scopeId","data-v-cd67e6f5"]]),mb=["onClick"],gb={class:"font-mono text-[11px] font-bold"},hb={key:0,type:"button",class:"flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-zinc-300 text-zinc-400 transition-colors hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 cursor-pointer",title:"添加表情反馈"},Ui=fe({__name:"Reactions",props:{items:{default:()=>[{id:"fire",emoji:"🔥",count:48,active:!0},{id:"rocket",emoji:"🚀",count:32,active:!1},{id:"heart",emoji:"❤️",count:65,active:!1},{id:"zap",emoji:"⚡",count:19,active:!1},{id:"eyes",emoji:"👀",count:12,active:!1}]},allowAdd:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=X(JSON.parse(JSON.stringify(t.items))),r=X(null);function s(o){o.active=!o.active,o.count+=o.active?1:-1,r.value=o.id,setTimeout(()=>{r.value=null},400)}return(o,i)=>(w(),_("div",{class:j(S(ze)("inline-flex flex-wrap items-center gap-1.5 select-none",t.class))},[(w(!0),_(pe,null,je(n.value,a=>(w(),_("button",{key:a.id,type:"button",onClick:l=>s(a),class:j(["group flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold transition-all duration-200 active:scale-90 cursor-pointer",a.active?"border-blue-500/50 bg-blue-50/80 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/80 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"])},[c("span",{class:j(["text-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",r.value===a.id&&"scale-135 -translate-y-0.5","group-hover:scale-110"])},U(a.emoji),3),c("span",gb,U(a.count),1)],10,mb))),128)),t.allowAdd?(w(),_("button",hb,[v(S(Vu),{class:"h-3.5 w-3.5"})])):be("",!0)],2))}}),bb={class:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"},xb={class:"flex flex-col md:flex-row gap-8"},vb={class:"w-full md:w-64 shrink-0"},yb={class:"sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-xs backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70"},wb={class:"mb-3 px-2 flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider"},kb={class:"rounded bg-blue-100 dark:bg-blue-950/80 px-1.5 py-0.2 text-[10px] text-blue-600 dark:text-blue-400 font-bold"},zb={class:"space-y-4"},_b={class:"flex items-center justify-between px-2 py-1 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"},Cb={class:"flex items-center gap-1.5"},Sb={class:"text-zinc-800 dark:text-zinc-200 font-bold"},Ab={class:"rounded bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.2 text-[9px] font-mono text-zinc-500 font-bold"},Rb={class:"space-y-0.5"},Tb={class:"truncate"},Ib={class:"mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 px-2"},Mb={class:"flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100"},$b={class:"min-w-0 flex-1"},Eb={class:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white mb-3 shadow-md shadow-blue-500/20"},Pb={key:1,class:"w-full max-w-2xl"},Fb={class:"flex h-full flex-col items-center justify-center p-6 text-center"},Lb={key:5,class:"flex flex-col items-center gap-6 py-8"},Ob={class:"text-center"},jb={class:"text-center mt-2"},Db={key:6,class:"flex flex-wrap items-center justify-center gap-4 py-8"},Bb={class:"relative z-10 flex items-center justify-between"},Nb={class:"relative z-10 flex flex-col items-center gap-3"},Vb={class:"flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30"},Hb={key:10,class:"grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-3xl py-6"},Gb={class:"inline-flex items-baseline justify-center text-sky-500 dark:text-sky-400"},Ub={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},qb={class:"inline-flex items-baseline justify-center text-indigo-500 dark:text-indigo-400"},Wb={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},Xb={class:"inline-flex items-baseline justify-center text-emerald-500 dark:text-emerald-400"},Kb={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},Yb={key:12,class:"w-full"},Zb={class:"relative z-10 text-center"},Jb={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400 mb-3"},Qb={class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/30 text-white"},ex={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-sky-500"},tx={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-emerald-500"},nx={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-indigo-500"},rx={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-amber-500"},sx={class:"w-full max-w-xl h-72"},ox={class:"flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white/80 p-1 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 shadow-xs"},ix=["onClick"],ax={class:"w-full max-w-xl"},lx={class:"w-full max-w-xl"},cx={class:"w-full max-w-xl"},dx={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-4 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},ux={class:"mt-1 text-sm font-bold text-blue-600 dark:text-blue-400 font-mono"},px={class:"flex flex-wrap items-center justify-center gap-4"},fx={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},mx={key:0,class:"text-xs text-zinc-400 italic"},gx={key:1,class:"space-y-1"},hx={class:"flex flex-wrap items-center justify-center gap-4"},bx={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},xx={key:0,class:"text-xs text-zinc-400 italic"},vx={key:1,class:"space-y-1"},yx={class:"flex flex-wrap items-center justify-center gap-8"},wx={class:"flex flex-col items-center gap-2"},kx={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},zx={class:"text-xs font-mono text-zinc-500 font-bold"},_x={class:"flex flex-col items-center gap-2"},Cx={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Sx={class:"text-xs font-mono text-zinc-500 font-bold"},Ax={class:"flex flex-col items-center gap-2"},Rx={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Tx={class:"text-xs font-mono text-zinc-500 font-bold"},Ix={class:"flex flex-wrap items-center justify-center gap-3"},Mx={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2.5 text-xs font-mono text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},$x={class:"font-bold text-blue-600 dark:text-blue-400"},Ex={class:"flex flex-wrap items-center justify-center gap-6"},Px={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},Fx={class:"text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold"},Lx={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Ox={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},jx=fe({__name:"DocsView",setup(e){const t=X(null),n=X(null),r=X(null),s=X(null),o=Cf(),i=Ce(()=>o.params.id||"border-beam"),a=Ce(()=>Jt.find(ae=>ae.id===i.value)||Jt[0]);function l(ae){switch(ae){case"tactile-actions":return Sn;case"ai-native":return cl;case"interactive-nav":return Us;case"space-3d":return Br;case"borders-cards":return mn;case"kinetic-typography":return Fe;default:return Fe}}function p(ae){return Jt.filter(C=>C.suiteId===ae)}const u=["OpenAI","Anthropic","Google","NVIDIA","DeepSeek","Vercel"],d=[{id:"home",label:"首页概览",icon:$u},{id:"explore",label:"模型广场",icon:Us},{id:"agent",label:"AI 智能体",icon:Fe},{id:"files",label:"知识库",icon:Tu},{id:"notice",label:"消息通知",icon:Cu},{id:"settings",label:"偏好设置",icon:Bu}],m=X("thinking"),g={thinking:"正在多模态解构视觉空间坐标与贝塞尔插值参数...",running:"并行编译并打包 Production Motion Primitives...",tool_call:"调用 Playwright 真实无头浏览器验证 60fps 动效性能...",success:"全套 28 项动效原子组件按 6 大主题套件落地完成！",error:"检测到底层渲染管道异常，正在启动自愈补偿重试..."},A=X(""),k=X(!1),T=X("deepseek-r1");function $(ae){k.value=!0,setTimeout(()=>{k.value=!1,A.value=""},2200)}const b=X("preview"),x=[{id:"preview",label:"实时预览",icon:Fe},{id:"code",label:"组件源码",icon:Gs,badge:"SFC"},{id:"api",label:"API 文档",icon:Ws},{id:"suites",label:"主题矩阵",icon:mn,badge:"6 大套件"}],y=X([]);function I(){y.value.unshift(`[${new Date().toLocaleTimeString()}] 触发长按蓄力物理确认：危险操作已执行！`),y.value.length>3&&y.value.pop()}const P=X([]);function N(){P.value.unshift(`[${new Date().toLocaleTimeString()}] 就地确认执行成功：数据库缓存集群已清空`),P.value.length>3&&P.value.pop()}const L=X(!1),O=X(!1),ee=X(!1),oe=X(!0),G=X(!1),ue=X(42),Ae=X("尚未触发操作");function Le(){Ae.value=`[${new Date().toLocaleTimeString()}] 执行主操作：生产环境立即发布完成！`}function ge(ae){Ae.value=`[${new Date().toLocaleTimeString()}] 执行伴随动作：${ae.label}`}return(ae,C)=>{const Ee=lr("router-link");return w(),_("div",bb,[c("div",xb,[c("aside",vb,[c("div",yb,[c("div",wb,[C[10]||(C[10]=c("span",null,"主题套件矩阵",-1)),c("span",kb,U(S(Xs).length)+" 大套件 · "+U(S(Jt).length)+" 组件 ",1)]),c("div",zb,[(w(!0),_(pe,null,je(S(Xs),F=>(w(),_("div",{key:F.id,class:"space-y-1"},[c("div",_b,[c("div",Cb,[(w(),ye(Ut(l(F.id)),{class:"h-3.5 w-3.5 text-blue-500"})),c("span",Sb,U(F.name),1)]),c("span",Ab,U(p(F.id).length),1)]),c("nav",Rb,[(w(!0),_(pe,null,je(p(F.id),re=>(w(),ye(Ee,{key:re.id,to:`/docs/${re.id}`,class:j(["flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium transition-colors",i.value===re.id?"bg-blue-600 text-white font-semibold shadow-xs":"text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"])},{default:J(()=>[c("span",Tb,U(re.name),1),c("span",{class:j(["text-[9px] rounded px-1.5 py-0.2 shrink-0 ml-1",i.value===re.id?"bg-blue-700/80 text-blue-100":"bg-zinc-100 dark:bg-zinc-900 text-zinc-400"])},U(re.category),3)]),_:2},1032,["to","class"]))),128))])]))),128))]),c("div",Ib,[c("div",Mb,[v(S(Ws),{class:"h-3.5 w-3.5 text-blue-500"}),C[11]||(C[11]=c("span",null,"基础依赖安装",-1))]),C[12]||(C[12]=c("p",{class:"mt-1 text-[11px] text-zinc-400"},"组件依赖轻量样式与工具库：",-1)),C[13]||(C[13]=c("div",{class:"mt-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-300 break-all select-all"}," npm i @vueuse/core clsx tailwind-merge ",-1))])])]),c("main",$b,[(w(),ye(Sg,{key:a.value.id,title:a.value.title,description:a.value.description,"component-code":a.value.componentCode,"usage-code":a.value.usageCode,"component-filename":a.value.componentFilename,"props-list":a.value.propsList},{default:J(({isDark:F})=>[a.value.id==="border-beam"?(w(),_("div",{key:0,class:j(["relative flex h-64 w-80 flex-col items-center justify-center rounded-2xl border p-6 shadow-md transition-colors duration-200",F?"border-zinc-800 bg-zinc-900 text-zinc-100 shadow-black/40":"border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/50"])},[c("div",Eb,[v(S(Fe),{class:"h-6 w-6"})]),c("h4",{class:j(["text-lg font-bold",F?"text-white":"text-zinc-900"])}," Border Beam Demo ",2),c("p",{class:j(["mt-1 text-center text-xs",F?"text-zinc-400":"text-zinc-500"])}," 流光平滑环绕圆角容器边缘 ",2),v(eo,{size:180,duration:8,"color-from":"#38bdf8","color-to":"#a855f7"})],2)):a.value.id==="bento-grid"?(w(),_("div",Pb,[v(Vl,{class:"auto-rows-[16rem]"},{default:J(()=>[v(tt,{name:"AI 向量引擎",description:"毫秒级生成多模态视觉理解",cta:"了解详情",href:"#",class:j(F?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900")},{icon:J(()=>[v(S(gi),{class:"h-5 w-5 text-blue-500"})]),_:1},8,["class"]),v(tt,{name:"全球边缘节点加速",description:"降低网络抖动，就近命中就近计算",class:j(["md:col-span-2",F?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900"]),cta:"查看分布",href:"#"},{icon:J(()=>[v(S(Sn),{class:"h-5 w-5 text-amber-500"})]),_:1},8,["class"])]),_:2},1024)])):a.value.id==="interactive-particles"?(w(),_("div",{key:2,class:j(["relative h-[360px] w-full rounded-2xl border overflow-hidden transition-colors duration-200",F?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[v(Gl,{quantity:60,"mouse-radius":120,"connect-lines":!0,color:F?"255, 255, 255":"59, 130, 246"},{default:J(()=>[c("div",Fb,[c("h3",{class:j(["text-2xl font-bold tracking-tight",F?"text-white":"text-zinc-900"])}," 移动光标体验引力感应 ",2),c("p",{class:j(["mt-2 text-xs",F?"text-zinc-400":"text-zinc-500"])}," Canvas 2D 60fps 满帧运行，动态引力排斥与光效连线 ",2)])]),_:2},1032,["color"])],2)):a.value.id==="retro-grid"?(w(),_("div",{key:3,class:j(["relative flex h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",F?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[c("span",{class:j(["z-10 text-4xl font-extrabold tracking-tighter",F?"text-white":"text-zinc-900"])}," Retro Synthwave Grid ",2),v(to,{angle:65,"dark-line-color":"#334155","light-line-color":"#cbd5e1"})],2)):a.value.id==="dot-pattern"?(w(),_("div",{key:4,class:j(["relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border p-8 transition-colors duration-200",F?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[c("p",{class:j(["z-10 text-xl font-bold",F?"text-white":"text-zinc-900"])}," SVG 矢量波点底纹 (含发光聚光灯) ",2),v(Hl,{width:18,height:18,cr:1.2,glow:!0})],2)):a.value.id==="shiny-text"?(w(),_("div",Lb,[c("div",{class:j(["rounded-full border px-5 py-2 text-xs font-medium shadow-sm transition-colors",F?"border-zinc-800 bg-zinc-900/90 text-zinc-300":"border-zinc-200 bg-zinc-100 text-zinc-700"])},[C[14]||(C[14]=Ve(" ✨ ",-1)),v(Kn,{text:"Aura UI v1.0 全新微光发布",duration:2.5})],2),c("div",Ob,[v(Kn,{text:"Next-Gen AI Intelligence",class:"text-4xl sm:text-5xl font-black tracking-tight",duration:2.5}),c("p",{class:j(["mt-2 text-xs sm:text-sm",F?"text-zinc-500":"text-zinc-400"])}," 持续流淌的宽幅金属微光，肉眼清晰可观赏，绝无突兀停滞 ",2)]),c("div",jb,[v(Kn,{text:"Cyberpunk Motion Primitives",variant:"cyber",class:"text-3xl sm:text-4xl font-extrabold tracking-tight",duration:3}),c("p",{class:j(["mt-1 text-xs",F?"text-zinc-500":"text-zinc-400"])}," 赛博霓虹蓝紫粒子流光，高频荡漾 ",2)])])):a.value.id==="shimmer-button"?(w(),_("div",Db,[v(Xn,{"shimmer-color":"#38bdf8"},{default:J(()=>[C[15]||(C[15]=c("span",null,"立即获取代码",-1)),v(S(Cr),{class:"h-4 w-4"})]),_:1}),v(Xn,{"shimmer-color":"#ec4899","shimmer-duration":"3.5s"},{default:J(()=>[...C[16]||(C[16]=[c("span",null,"Pink Shimmer",-1)])]),_:1})])):a.value.id==="marquee"?(w(),_("div",{key:7,class:j(["relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border py-6 transition-colors duration-200",F?"border-zinc-800 bg-black/60":"border-zinc-200 bg-zinc-50/80"])},[v(Sr,{duration:20,"pause-on-hover":!0},{default:J(()=>[(w(),_(pe,null,je(u,re=>c("div",{key:re,class:j(["flex h-12 items-center justify-center rounded-xl border px-6 font-bold text-xs shadow-xs transition-colors duration-200",F?"border-zinc-800 bg-zinc-900 text-zinc-200":"border-zinc-200 bg-white text-zinc-800"])},U(re),3)),64))]),_:2},1024),c("div",{class:j(["pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r",F?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2),c("div",{class:j(["pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l",F?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2)],2)):a.value.id==="meteors"?(w(),_("div",{key:8,class:j(["relative flex h-80 w-full max-w-lg flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-2xl transition-colors duration-200",F?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-slate-900 text-white"])},[v(Ul,{number:30}),c("div",Bb,[C[17]||(C[17]=c("span",{class:"rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20"}," Meteor Shower ",-1)),v(S(Fe),{class:"h-5 w-5 text-sky-400"})]),C[18]||(C[18]=c("div",{class:"relative z-10 space-y-2"},[c("h3",{class:"text-3xl font-black tracking-tight text-white"}," 赛博深空流星雨 "),c("p",{class:"text-xs text-zinc-400 leading-relaxed"}," 流星带有 50px 渐变光尾与随机延迟，全硬件加速流畅穿梭，卡片与 Hero 背景的氛围杀器。 ")],-1))],2)):a.value.id==="ripple"?(w(),_("div",{key:9,class:j(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",F?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[v(ql,{"main-circle-size":160,"num-circles":7}),c("div",Nb,[c("div",Vb,[v(S(Nr),{class:"h-7 w-7"})]),C[19]||(C[19]=c("div",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-mono text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300"}," AI 智能语音拾音中... ",-1))])],2)):a.value.id==="number-ticker"?(w(),_("div",Hb,[c("div",{class:j(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",F?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[c("div",Gb,[c("span",Ub,[v(Ar,{value:99.99,"decimal-places":2})]),C[20]||(C[20]=c("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"%",-1))]),C[21]||(C[21]=c("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"SLA 生产高可用性",-1))],2),c("div",{class:j(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",F?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[c("div",qb,[c("span",Wb,[v(Ar,{value:1e7})]),C[22]||(C[22]=c("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"+",-1))]),C[23]||(C[23]=c("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"每日处理 Token 数量",-1))],2),c("div",{class:j(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",F?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[c("div",Xb,[c("span",Kb,[v(Ar,{value:12})]),C[24]||(C[24]=c("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"ms",-1))]),C[25]||(C[25]=c("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"端到端流式推理延迟",-1))],2)])):a.value.id==="animated-beam"?(w(),_("div",{key:11,class:j(["relative flex h-72 w-full max-w-xl items-center justify-between px-12 rounded-2xl border transition-colors duration-200",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"]),ref_key:"beamContainerRef",ref:t},[c("div",{ref_key:"beamUserRef",ref:n,class:j(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",F?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[v(S(ml),{class:"h-6 w-6 text-blue-500"})],2),c("div",{ref_key:"beamAiRef",ref:r,class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/40"},[v(S(Fe),{class:"h-8 w-8"})],512),c("div",{ref_key:"beamDbRef",ref:s,class:j(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",F?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[v(S(qs),{class:"h-6 w-6 text-indigo-500"})],2),v(Hr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.4},null,8,["container-ref","from-ref","to-ref"]),v(Hr,{"container-ref":t.value,"from-ref":r.value,"to-ref":s.value,duration:2.4,delay:.6},null,8,["container-ref","from-ref","to-ref"])],2)):a.value.id==="lamp-effect"?(w(),_("div",Yb,[v(Wl,{class:"min-h-[420px]"},{default:J(()=>[...C[26]||(C[26]=[c("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-5xl font-black tracking-tight text-transparent"}," Next-Gen AI Platform ",-1),c("p",{class:"mt-3 max-w-md text-xs sm:text-sm text-slate-400"}," 双向极光天灯破晓而下，为旗舰级 AI 与 SaaS 官网赋予大模型发布会视觉。 ",-1)])]),_:1})])):a.value.id==="flickering-grid"?(w(),_("div",{key:13,class:j(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border p-6 transition-colors duration-200",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v(Xl,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),c("div",Zb,[c("div",Jb,[v(S(ll),{class:"h-3.5 w-3.5"}),C[27]||(C[27]=c("span",null,"Canvas 2D 智能矩阵",-1))]),c("h3",{class:j(["text-3xl font-black tracking-tight",F?"text-white":"text-zinc-900"])}," 呼吸噪波微光网格 ",2),c("p",{class:j(["mt-2 text-xs font-mono",F?"text-zinc-400":"text-zinc-500"])}," 微型粒子矩阵异步平滑呼吸闪烁，零 CPU 占用，极客感拉满 ",2)])],2)):a.value.id==="dock"?(w(),_("div",{key:14,class:j(["relative flex h-80 w-full items-end justify-center rounded-2xl border p-8 transition-colors duration-200",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[C[28]||(C[28]=c("div",{class:"absolute top-8 text-center"},[c("span",{class:"text-xs font-mono text-zinc-400"},"将鼠标在下方图标栏滑动，体验余弦高斯物理平滑放大与跟随 Tooltip")],-1)),v(Ig,{items:d,"icon-size":44,"icon-magnification":68,"icon-distance":130})],2)):a.value.id==="orbit-logos"?(w(),_("div",{key:15,class:j(["relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[c("div",Qb,[v(S(Fe),{class:"h-8 w-8"})]),v(vr,{radius:75,duration:16},{default:J(()=>[c("div",ex,[v(S(gi),{class:"h-4.5 w-4.5"})])]),_:1}),v(vr,{radius:75,duration:16,delay:8},{default:J(()=>[c("div",tx,[v(S(Sn),{class:"h-4.5 w-4.5"})])]),_:1}),v(vr,{radius:135,duration:24,reverse:!0},{default:J(()=>[c("div",nx,[v(S(Br),{class:"h-5 w-5"})])]),_:1}),v(vr,{radius:135,duration:24,delay:12,reverse:!0},{default:J(()=>[c("div",rx,[v(S(qs),{class:"h-5 w-5"})])]),_:1})],2)):a.value.id==="image-compare"?(w(),_("div",{key:16,class:j(["flex flex-col items-center justify-center w-full p-4 rounded-2xl border transition-colors duration-200",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[c("div",sx,[v(Ng,{"before-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=70&sat=-100","after-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=90","before-label":"原始黑白 (Raw)","after-label":"AI 智能全彩修复 (4K HDR)","initial-position":50,class:"h-full w-full shadow-2xl"})]),C[29]||(C[29]=c("p",{class:"mt-3 text-xs font-mono text-zinc-400"}," 按住中央手柄左右拖拽，体验基于 clip-path 视口裁切的双图前后对比 ",-1))],2)):a.value.id==="agent-status"?(w(),_("div",{key:17,class:j(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[c("div",ox,[(w(),_(pe,null,je(["thinking","running","tool_call","success","error"],re=>c("button",{key:re,onClick:he=>m.value=re,class:j(["rounded-lg px-3 py-1.5 text-xs font-semibold transition-all capitalize",m.value===re?"bg-blue-600 text-white shadow-xs":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},U(re),11,ix)),64))]),v(oh,{status:m.value,"agent-name":"DeepSeek R1 / Aura Reasoning","current-task":g[m.value]},null,8,["status","current-task"]),C[30]||(C[30]=c("p",{class:"text-xs font-mono text-zinc-400"}," 点击上方状态快速体验脉冲光环与徽标切换；点击卡片任意位置展开执行轨迹清单 ",-1))],2)):a.value.id==="typewriter-terminal"?(w(),_("div",{key:18,class:j(["flex flex-col items-center justify-center w-full p-6 rounded-2xl border transition-colors duration-200",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[c("div",ax,[v(yh,{title:"zsh - aura-orchestrator:~ (80x24)","typing-speed":32,loop:!0})])],2)):a.value.id==="prompt-input"?(w(),_("div",{key:19,class:j(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[c("div",lx,[v(Ph,{modelValue:A.value,"onUpdate:modelValue":C[0]||(C[0]=re=>A.value=re),loading:k.value,"selected-model":T.value,"onUpdate:selectedModel":C[1]||(C[1]=re=>T.value=re),placeholder:"向 Aura AI 提问、生成高阶动效代码，或输入 / 触发 Agent...",onSubmit:$,onStop:C[2]||(C[2]=re=>k.value=!1)},null,8,["modelValue","loading","selected-model"])]),C[31]||(C[31]=c("p",{class:"text-xs font-mono text-zinc-400"}," 点击输入框体验聚焦顶部流光与高亮光晕，支持 Enter 发送、模拟 2.2s 思考生成态 ",-1))],2)):a.value.id==="thought-accordion"?(w(),_("div",{key:20,class:j(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[c("div",cx,[v(Gh,{duration:"思考用时 8.2 秒",status:"complete","default-open":!0})]),C[32]||(C[32]=c("p",{class:"text-xs font-mono text-zinc-400"}," 对标 DeepSeek R1 / o1 思考链折叠机制，点击标题栏手风琴折叠收起，支持一键复制推演链路 ",-1))],2)):a.value.id==="fluid-tabs"?(w(),_("div",{key:21,class:j(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v(qh,{modelValue:b.value,"onUpdate:modelValue":C[3]||(C[3]=re=>b.value=re),tabs:x},null,8,["modelValue"]),c("div",dx,[C[33]||(C[33]=c("div",{class:"text-xs font-mono text-zinc-500 dark:text-zinc-400"},"当前激活流体 Tab 项：",-1)),c("div",ux,U(b.value),1)]),C[34]||(C[34]=c("p",{class:"text-xs font-mono text-zinc-400"}," 鼠标在 Tab 间移动感受 Ghost 悬停幽灵胶囊；点击体验物理 Spring 平滑吸附 ",-1))],2)):a.value.id==="hold-to-confirm"?(w(),_("div",{key:22,class:j(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[c("div",px,[v(Rs,{variant:"danger",label:"长按以销毁生产集群",holdingLabel:"危险！保持按住不放...",confirmedLabel:"集群销毁指令已执行！",duration:1200,onConfirm:I}),v(Rs,{variant:"warning",label:"长按重置 API 密钥",holdingLabel:"按住 1 秒重置...",confirmedLabel:"密钥已重置完成！",duration:1e3,onConfirm:I}),v(Rs,{variant:"primary",label:"长按以极速同步",holdingLabel:"保持以连接网关...",confirmedLabel:"多云同步完成！",duration:800,onConfirm:I})]),c("div",fx,[C[35]||(C[35]=c("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 操作监听回执 ",-1)),y.value.length===0?(w(),_("div",mx," 按住上方任一按钮体验蓄力进度条，松手即取消，蓄满 100% 触发回执 ")):(w(),_("div",gx,[(w(!0),_(pe,null,je(y.value,(re,he)=>(w(),_("div",{key:he,class:"text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold"},U(re),1))),128))]))]),C[36]||(C[36]=c("p",{class:"text-xs font-mono text-zinc-400"}," 具备 requestAnimationFrame 60fps 动态插值填充、松手平滑阻尼回退与成功态自动形变复位 ",-1))],2)):a.value.id==="confirm-morph"?(w(),_("div",{key:23,class:j(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[c("div",hx,[v(Ts,{label:"彻底清空 Redis 缓存","confirm-text":"确认清空","cancel-text":"取消",variant:"danger",onConfirm:N}),v(Ts,{label:"回滚至昨日版本","confirm-text":"确认回滚","cancel-text":"再想想",variant:"warning",onConfirm:N}),v(Ts,{label:"切换主从节点","confirm-text":"立即切换","cancel-text":"取消",variant:"primary",onConfirm:N})]),c("div",bx,[C[37]||(C[37]=c("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 就地形变二次确认回执 ",-1)),P.value.length===0?(w(),_("div",xx," 点击上方按钮原地分裂为确认和取消操作，零弹窗干扰心流 ")):(w(),_("div",vx,[(w(!0),_(pe,null,je(P.value,(re,he)=>(w(),_("div",{key:he,class:"text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold"},U(re),1))),128))]))]),C[38]||(C[38]=c("p",{class:"text-xs font-mono text-zinc-400"}," 内联原地形变布局（Inline FLIP Transition），无需全局遮罩即可实现安全防误触 ",-1))],2)):a.value.id==="icon-morph"?(w(),_("div",{key:24,class:j(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[c("div",yx,[c("div",wx,[c("div",kx,[v(Is,{modelValue:L.value,"onUpdate:modelValue":C[4]||(C[4]=re=>L.value=re),mode:"menu-close",size:28},null,8,["modelValue"])]),c("span",zx," Menu ↔ Close: "+U(L.value?"关闭":"展开"),1)]),c("div",_x,[c("div",Cx,[v(Is,{modelValue:O.value,"onUpdate:modelValue":C[5]||(C[5]=re=>O.value=re),mode:"play-pause",size:28},null,8,["modelValue"])]),c("span",Sx," Play ↔ Pause: "+U(O.value?"播放中":"暂停中"),1)]),c("div",Ax,[c("div",Rx,[v(Is,{modelValue:ee.value,"onUpdate:modelValue":C[6]||(C[6]=re=>ee.value=re),mode:"plus-minus",size:28},null,8,["modelValue"])]),c("span",Tx," Plus ↔ Minus: "+U(ee.value?"已展开":"折叠"),1)])]),C[39]||(C[39]=c("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG 矢量几何坐标连续形变，硬件加速 60fps，零卡顿零抖动 ",-1))],2)):a.value.id==="action-button"?(w(),_("div",{key:25,class:j(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[c("div",Ix,[v(Dn,{icon:S(Lu),active:oe.value,tooltip:"钉选在首屏导航",onClick:C[7]||(C[7]=re=>oe.value=!oe.value)},null,8,["icon","active"]),v(Dn,{label:"生成动效代码",icon:S(Fe),badge:"AI",tooltip:"一键生成 Vue 动效原子代码",onClick:C[8]||(C[8]=re=>ue.value++)},null,8,["icon"]),v(Dn,{icon:S(Su),active:G.value,tooltip:"收藏至组件集",onClick:C[9]||(C[9]=re=>G.value=!G.value)},null,8,["icon","active"]),v(Dn,{label:"大规格按钮",size:"lg",icon:S(mi),tooltip:"上传打包产物"},null,8,["icon"]),v(Dn,{label:"禁用按钮",size:"sm",disabled:!0,tooltip:"当前权限不足"})]),c("div",Mx,[C[40]||(C[40]=Ve(" AI 生成点击计数：",-1)),c("span",$x,U(ue.value),1),C[41]||(C[41]=Ve(" 次 ",-1))]),C[42]||(C[42]=c("p",{class:"text-xs font-mono text-zinc-400"}," 配备精准物理弹簧缩放阻尼（active:scale-90）与微拟态悬停反馈 ",-1))],2)):a.value.id==="split-button"?(w(),_("div",{key:26,class:j(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[c("div",Ex,[v(Gi,{label:"立即发布到生产环境",icon:S(ul),variant:"primary",onPrimaryClick:Le,onSelect:ge},null,8,["icon"]),v(Gi,{label:"导出代码包",icon:S(mi),variant:"secondary",items:[{id:"zip",label:"下载 ZIP 压缩包",description:"包含全部 SFC 组件与 CSS 变量"},{id:"git",label:"推送到 GitHub PR",description:"自动分支并创建协同审查"},{id:"npm",label:"发布至私有 NPM",description:"生成统一 Package 包"}],onPrimaryClick:Le,onSelect:ge},null,8,["icon"])]),c("div",Px,[C[43]||(C[43]=c("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1"}," 分体按钮操作回执 ",-1)),c("div",Fx,U(Ae.value),1)]),C[44]||(C[44]=c("p",{class:"text-xs font-mono text-zinc-400"}," 主操作与下拉伴随操作一体化，物理发丝分割线，自适应点击区域与弹簧菜单 ",-1))],2)):a.value.id==="reactions"?(w(),_("div",{key:27,class:j(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",F?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[c("div",Lx,[v(Ui)]),c("div",Ox,[C[45]||(C[45]=c("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3"}," 自定义反应项展示： ",-1)),v(Ui,{items:[{id:"vue",emoji:"💚",count:1024,active:!0},{id:"speed",emoji:"⚡",count:512,active:!1},{id:"magic",emoji:"✨",count:888,active:!0},{id:"100",emoji:"💯",count:99,active:!1}]})]),C[46]||(C[46]=c("p",{class:"text-xs font-mono text-zinc-400"}," 点击任一表情体验 Spring 弹簧弹性放大与实时翻滚计数，支持添加自定义表情 ",-1))],2)):be("",!0)]),_:1},8,["title","description","component-code","usage-code","component-filename","props-list"]))])])])}}}),Dx=_f({history:tf(),routes:[{path:"/",name:"home",component:Km},{path:"/docs/:id?",name:"docs",component:jx},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(e,t,n){return n||(e.name==="docs"&&t.name==="docs"?!1:{top:0})}}),Kl=vu(bp);Kl.use(Dx);Kl.mount("#app");
