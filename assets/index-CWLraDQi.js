(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ms(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Fe={},xn=[],Et=()=>{},ca=()=>!1,Jr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Qr=e=>e.startsWith("onUpdate:"),Ne=Object.assign,bs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},wc=Object.prototype.hasOwnProperty,Se=(e,t)=>wc.call(e,t),le=Array.isArray,on=e=>hr(e)==="[object Map]",Vr=e=>hr(e)==="[object Set]",Ns=e=>hr(e)==="[object Date]",me=e=>typeof e=="function",De=e=>typeof e=="string",wt=e=>typeof e=="symbol",Ie=e=>e!==null&&typeof e=="object",da=e=>(Ie(e)||me(e))&&me(e.then)&&me(e.catch),ua=Object.prototype.toString,hr=e=>ua.call(e),kc=e=>hr(e).slice(8,-1),pa=e=>hr(e)==="[object Object]",gs=e=>De(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xn=ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),eo=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},zc=/-\w/g,lt=eo(e=>e.replace(zc,t=>t.slice(1).toUpperCase())),_c=/\B([A-Z])/g,dn=eo(e=>e.replace(_c,"-$1").toLowerCase()),to=eo(e=>e.charAt(0).toUpperCase()+e.slice(1)),ho=eo(e=>e?`on${to(e)}`:""),Pt=(e,t)=>!Object.is(e,t),Tr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},fa=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},hs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Cc=e=>{const t=De(e)?Number(e):NaN;return isNaN(t)?e:t};let Hs;const no=()=>Hs||(Hs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ke(e){if(le(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=De(r)?Mc(r):ke(r);if(o)for(const s in o)t[s]=o[s]}return t}else if(De(e)||Ie(e))return e}const Sc=/;(?![^(]*\))/g,Ac=/:([^]+)/,Ic=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Mc(e){const t={};return e.replace(Ic,n=>n.startsWith("/*")?"":n).split(Sc).forEach(n=>{if(n){const r=n.split(Ac);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function T(e){let t="";if(De(e))t=e;else if(le(e))for(let n=0;n<e.length;n++){const r=T(e[n]);r&&(t+=r+" ")}else if(Ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Rc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Tc=ms(Rc);function ma(e){return!!e||e===""}function $c(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let o=0;r&&o<e.length;o++)r=ro(e[o],t[o],n);return r}function Us(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),o=new Uint8Array(r.length);for(const s of e){let a=-1;for(let i=0;i<r.length;i++)if(!o[i]&&ro(s,r[i],n)){a=i;break}if(a<0)return!1;o[a]=1}return!0}function Pc(e,t,n){let r=on(e),o=on(t);if(r||o||(r=Vr(e),o=Vr(t),r||o))return r&&o?Us(e,t,n):!1;const s=Object.keys(e).length,a=Object.keys(t).length;if(s!==a)return!1;for(const i in e){const c=e.hasOwnProperty(i),p=t.hasOwnProperty(i);if(c&&!p||!c&&p||!ro(e[i],t[i],n))return!1}return String(e)===String(t)}function Gs(e,t,n,r){n||(n=[new Map,new Map]);const[o,s]=n;if(o.has(e)||s.has(t))return o.get(e)===t&&s.get(t)===e;o.set(e,t),s.set(t,e);const a=r(e,t,n);return o.delete(e),s.delete(t),a}function ro(e,t,n){if(e===t)return!0;let r=Ns(e),o=Ns(t);return r||o?r&&o?e.getTime()===t.getTime():!1:(r=wt(e),o=wt(t),r||o?e===t:(r=le(e),o=le(t),r||o?r&&o?Gs(e,t,n,$c):!1:(r=Ie(e),o=Ie(t),r||o?!r||!o?!1:Gs(e,t,n,Pc):String(e)===String(t))))}const ba=e=>!!(e&&e.__v_isRef===!0),P=e=>De(e)?e:e==null?"":le(e)||Ie(e)&&(e.toString===ua||!me(e.toString))?ba(e)?P(e.value):JSON.stringify(e,ga,2):String(e),ga=(e,t)=>ba(t)?ga(e,t.value):on(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],s)=>(n[xo(r,s)+" =>"]=o,n),{})}:Vr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>xo(n))}:wt(t)?xo(t):Ie(t)&&!le(t)&&!pa(t)?String(t):t,xo=(e,t="")=>{var n;return wt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xe;class Ec{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Xe&&(Xe.active?(this.parent=Xe,this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=Xe;try{return Xe=this,t()}finally{Xe=n}}}on(){++this._on===1&&(this.prevScope=Xe,Xe=this)}off(){if(this._on>0&&--this._on===0){if(Xe===this)Xe=this.prevScope;else{let t=Xe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,r=o.length;n<r;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Fc(){return Xe}let Le;const vo=new WeakSet;class ha{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&(Xe.active?Xe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vo.has(this)&&(vo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||va(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qs(this),ya(this);const t=Le,n=yt;Le=this,yt=!0;try{return this.fn()}finally{wa(this),Le=t,yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ys(t);this.deps=this.depsTail=void 0,qs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ho(this)&&this.run()}get dirty(){return Ho(this)}}let xa=0,Yn,Zn;function va(e,t=!1){if(e.flags|=8,t){e.next=Zn,Zn=e;return}e.next=Yn,Yn=e}function xs(){xa++}function vs(){if(--xa>0)return;if(Zn){let t=Zn;for(Zn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Yn;){let t=Yn;for(Yn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function ya(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function wa(e){let t,n=e.depsTail,r=n;for(;r;){const o=r.prevDep;r.version===-1?(r===n&&(n=o),ys(r),Lc(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=t,e.depsTail=n}function Ho(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ka(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ka(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ar)||(e.globalVersion=ar,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ho(e))))return;e.flags|=2;const t=e.dep,n=Le,r=yt;Le=e,yt=!0;try{ya(e);const o=e.fn(e._value);(t.version===0||Pt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Le=n,yt=r,wa(e),e.flags&=-3}}function ys(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)ys(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Lc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let yt=!0;const za=[];function Lt(){za.push(yt),yt=!1}function Vt(){const e=za.pop();yt=e===void 0?!0:e}function qs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Le;Le=void 0;try{t()}finally{Le=n}}}let ar=0;class Vc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ws{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Le||!yt||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new Vc(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,_a(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(t){this.version++,ar++,this.notify(t)}notify(t){xs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vs()}}}function _a(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)_a(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Uo=new WeakMap,yn=Symbol(""),Go=Symbol(""),lr=Symbol("");function et(e,t,n){if(yt&&Le){let r=Uo.get(e);r||Uo.set(e,r=new Map);let o=r.get(n);o||(r.set(n,o=new ws),o.map=r,o.key=n),o.track()}}function Ut(e,t,n,r,o,s){const a=Uo.get(e);if(!a){ar++;return}const i=c=>{c&&c.trigger()};if(xs(),t==="clear")a.forEach(i);else{const c=le(e),p=c&&gs(n);if(c&&n==="length"){const u=Number(r);a.forEach((d,f)=>{(f==="length"||f===lr||!wt(f)&&f>=u)&&i(d)})}else switch((n!==void 0||a.has(void 0))&&i(a.get(n)),p&&i(a.get(lr)),t){case"add":c?p&&i(a.get("length")):(i(a.get(yn)),on(e)&&i(a.get(Go)));break;case"delete":c||(i(a.get(yn)),on(e)&&i(a.get(Go)));break;case"set":on(e)&&i(a.get(yn));break}}vs()}function kn(e){const t=Ce(e);return t===e||(et(t,"iterate",lr),bt(e))?t:Ot(e)?sn(e)?t.map(n=>an(ht(n))):t.map(an):t.map(ht)}function oo(e){return et(e=Ce(e),"iterate",lr),e}function Rt(e,t){return Ot(e)?an(sn(e)?ht(t):t):ht(t)}const Oc={__proto__:null,[Symbol.iterator](){return yo(this,Symbol.iterator,e=>Rt(this,e))},concat(...e){return kn(this).concat(...e.map(t=>le(t)?kn(t):t))},entries(){return yo(this,"entries",e=>(e[1]=Rt(this,e[1]),e))},every(e,t){return Dt(this,"every",e,t,void 0,arguments)},filter(e,t){return Dt(this,"filter",e,t,n=>n.map(r=>Rt(this,r)),arguments)},find(e,t){return Dt(this,"find",e,t,n=>Rt(this,n),arguments)},findIndex(e,t){return Dt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Dt(this,"findLast",e,t,n=>Rt(this,n),arguments)},findLastIndex(e,t){return Dt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Dt(this,"forEach",e,t,void 0,arguments)},includes(...e){return wo(this,"includes",e)},indexOf(...e){return wo(this,"indexOf",e)},join(e){return kn(this).join(e)},lastIndexOf(...e){return wo(this,"lastIndexOf",e)},map(e,t){return Dt(this,"map",e,t,void 0,arguments)},pop(){return On(this,"pop")},push(...e){return On(this,"push",e)},reduce(e,...t){return Ks(this,"reduce",e,t)},reduceRight(e,...t){return Ks(this,"reduceRight",e,t)},shift(){return On(this,"shift")},some(e,t){return Dt(this,"some",e,t,void 0,arguments)},splice(...e){return On(this,"splice",e)},toReversed(){return kn(this).toReversed()},toSorted(e){return kn(this).toSorted(e)},toSpliced(...e){return kn(this).toSpliced(...e)},unshift(...e){return On(this,"unshift",e)},values(){return yo(this,"values",e=>Rt(this,e))}};function yo(e,t,n){const r=oo(e),o=r[t],s=o.call(r);if(r!==e&&!bt(e)){if(s[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(s));return a.next=()=>Ws(s.next(),n),o!==Ca[t]&&Object.defineProperties(a,{return:{get(){const i=s.return;return typeof i=="function"?i.bind(s):i}},throw:{get(){const i=s.throw;return typeof i=="function"?i.bind(s):i}}}),a}s._next=s.next,s.next=()=>Ws(s._next(),n)}return s}function Ws(e,t){return e.done||(e.value=t(e.value)),e}const Ca=Array.prototype;function Dt(e,t,n,r,o,s){const a=oo(e),i=a!==e&&!bt(e),c=a[t];if(c!==Ca[t]){const d=c.apply(e,s);return i?ht(d):d}let p=n;a!==e&&(i?p=function(d,f){return n.call(this,Rt(e,d),f,e)}:n.length>2&&(p=function(d,f){return n.call(this,d,f,e)}));const u=c.call(a,p,r);return i&&o?o(u):u}function Ks(e,t,n,r){const o=oo(e),s=o!==e&&!bt(e);let a=n,i=!1;o!==e&&(s?(i=r.length===0,a=function(p,u,d){return i&&(i=!1,p=Rt(e,p)),n.call(this,p,Rt(e,u),d,e)}):n.length>3&&(a=function(p,u,d){return n.call(this,p,u,d,e)}));const c=o[t](a,...r);return i?Rt(e,c):c}function wo(e,t,n){const r=Ce(e);et(r,"iterate",lr);const o=r[t](...n);return(o===-1||o===!1)&&_s(n[0])?(n[0]=Ce(n[0]),r[t](...n)):o}function On(e,t,n=[]){Lt(),xs();const r=Ce(e)[t].apply(e,n);return vs(),Vt(),r}const Dc=ms("__proto__,__v_isRef,__isVue"),Sa=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wt));function jc(e){wt(e)||(e=String(e));const t=Ce(this);return et(t,"has",e),t.hasOwnProperty(e)}class Aa{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(o?s?Yc:Ta:s?Ra:Ma).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=le(t);if(!o){let c;if(a&&(c=Oc[n]))return c;if(n==="hasOwnProperty")return jc}const i=Reflect.get(t,n,nt(t)?t:r);if((wt(n)?Sa.has(n):Dc(n))||(o||et(t,"get",n),s))return i;if(nt(i)){const c=a&&gs(n)?i:i.value;return o&&Ie(c)?Wo(c):c}return Ie(i)?o?Wo(i):so(i):i}}class Ia extends Aa{constructor(t=!1){super(!1,t)}set(t,n,r,o){let s=t[n];const a=le(t)&&gs(n);if(!this._isShallow){const p=Ot(s);if(!bt(r)&&!Ot(r)&&(s=Ce(s),r=Ce(r)),!a&&nt(s)&&!nt(r))return p||(s.value=r),!0}const i=a?Number(n)<t.length:Se(t,n),c=Reflect.set(t,n,r,nt(t)?t:o);return t===Ce(o)&&c&&(i?Pt(r,s)&&Ut(t,"set",n,r):Ut(t,"add",n,r)),c}deleteProperty(t,n){const r=Se(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&Ut(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!wt(n)||!Sa.has(n))&&et(t,"has",n),r}ownKeys(t){return et(t,"iterate",le(t)?"length":yn),Reflect.ownKeys(t)}}class Bc extends Aa{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Nc=new Ia,Hc=new Bc,Uc=new Ia(!0);const qo=e=>e,wr=e=>Reflect.getPrototypeOf(e);function Gc(e,t,n){return function(...r){const o=this.__v_raw,s=Ce(o),a=on(s),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,p=o[e](...r),u=n?qo:t?an:ht;return!t&&et(s,"iterate",c?Go:yn),Ne(Object.create(p),{next(){const{value:d,done:f}=p.next();return f?{value:d,done:f}:{value:i?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function kr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function qc(e,t){const n={get(o){const s=this.__v_raw,a=Ce(s),i=Ce(o);e||(Pt(o,i)&&et(a,"get",o),et(a,"get",i));const{has:c}=wr(a),p=t?qo:e?an:ht;if(c.call(a,o))return p(s.get(o));if(c.call(a,i))return p(s.get(i));s!==a&&s.get(o)},get size(){const o=this.__v_raw;return!e&&et(Ce(o),"iterate",yn),o.size},has(o){const s=this.__v_raw,a=Ce(s),i=Ce(o);return e||(Pt(o,i)&&et(a,"has",o),et(a,"has",i)),o===i?s.has(o):s.has(o)||s.has(i)},forEach(o,s){const a=this,i=a.__v_raw,c=Ce(i),p=t?qo:e?an:ht;return!e&&et(c,"iterate",yn),i.forEach((u,d)=>o.call(s,p(u),p(d),a))}};return Ne(n,e?{add:kr("add"),set:kr("set"),delete:kr("delete"),clear:kr("clear")}:{add(o){const s=Ce(this),a=wr(s),i=Ce(o),c=!t&&!bt(o)&&!Ot(o)?i:o;return a.has.call(s,c)||Pt(o,c)&&a.has.call(s,o)||Pt(i,c)&&a.has.call(s,i)||(s.add(c),Ut(s,"add",c,c)),this},set(o,s){!t&&!bt(s)&&!Ot(s)&&(s=Ce(s));const a=Ce(this),{has:i,get:c}=wr(a);let p=i.call(a,o);p||(o=Ce(o),p=i.call(a,o));const u=c.call(a,o);return a.set(o,s),p?Pt(s,u)&&Ut(a,"set",o,s):Ut(a,"add",o,s),this},delete(o){const s=Ce(this),{has:a,get:i}=wr(s);let c=a.call(s,o);c||(o=Ce(o),c=a.call(s,o)),i&&i.call(s,o);const p=s.delete(o);return c&&Ut(s,"delete",o,void 0),p},clear(){const o=Ce(this),s=o.size!==0,a=o.clear();return s&&Ut(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Gc(o,e,t)}),n}function ks(e,t){const n=qc(e,t);return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_isShallow"?t:o==="__v_raw"?r:Reflect.get(Se(n,o)&&o in r?n:r,o,s)}const Wc={get:ks(!1,!1)},Kc={get:ks(!1,!0)},Xc={get:ks(!0,!1)};const Ma=new WeakMap,Ra=new WeakMap,Ta=new WeakMap,Yc=new WeakMap;function Zc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function so(e){return Ot(e)?e:zs(e,!1,Nc,Wc,Ma)}function $a(e){return zs(e,!1,Uc,Kc,Ra)}function Wo(e){return zs(e,!0,Hc,Xc,Ta)}function zs(e,t,n,r,o){if(!Ie(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=o.get(e);if(s)return s;const a=Zc(kc(e));if(a===0)return e;const i=new Proxy(e,a===2?r:n);return o.set(e,i),i}function sn(e){return Ot(e)?sn(e.__v_raw):!!(e&&e.__v_isReactive)}function Ot(e){return!!(e&&e.__v_isReadonly)}function bt(e){return!!(e&&e.__v_isShallow)}function _s(e){return e?!!e.__v_raw:!1}function Ce(e){const t=e&&e.__v_raw;return t?Ce(t):e}function Jc(e){return!Se(e,"__v_skip")&&Object.isExtensible(e)&&fa(e,"__v_skip",!0),e}const ht=e=>Ie(e)?so(e):e,an=e=>Ie(e)?Wo(e):e;function nt(e){return e?e.__v_isRef===!0:!1}function D(e){return Pa(e,!1)}function Qc(e){return Pa(e,!0)}function Pa(e,t){return nt(e)?e:new ed(e,t)}class ed{constructor(t,n){this.dep=new ws,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Ce(t),this._value=n?t:ht(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||bt(t)||Ot(t);t=r?t:Ce(t),Pt(t,n)&&(this._rawValue=t,this._value=r?t:ht(t),this.dep.trigger())}}function A(e){return nt(e)?e.value:e}const td={get:(e,t,n)=>t==="__v_raw"?e:A(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return nt(o)&&!nt(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Ea(e){return sn(e)?e:new Proxy(e,td)}class nd{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ws(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ar-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return va(this,!0),!0}get value(){const t=this.dep.track();return ka(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function rd(e,t,n=!1){let r,o;return me(e)?r=e:(r=e.get,o=e.set),new nd(r,o,n)}const zr={},Or=new WeakMap;let gn;function od(e,t=!1,n=gn){if(n){let r=Or.get(n);r||Or.set(n,r=[]),r.push(e)}}function sd(e,t,n=Fe){const{immediate:r,deep:o,once:s,scheduler:a,augmentJob:i,call:c}=n,p=C=>o?C:bt(C)||o===!1||o===0?Gt(C,1):Gt(C);let u,d,f,m,z=!1,y=!1;if(nt(e)?(d=()=>e.value,z=bt(e)):sn(e)?(d=()=>p(e),z=!0):le(e)?(y=!0,z=e.some(C=>sn(C)||bt(C)),d=()=>e.map(C=>{if(nt(C))return C.value;if(sn(C))return p(C);if(me(C))return c?c(C,2):C()})):me(e)?t?d=c?()=>c(e,2):e:d=()=>{if(f){Lt();try{f()}finally{Vt()}}const C=gn;gn=u;try{return c?c(e,3,[m]):e(m)}finally{gn=C}}:d=Et,t&&o){const C=d,F=o===!0?1/0:o;d=()=>Gt(C(),F)}const S=Fc(),R=()=>{u.stop(),S&&S.active&&bs(S.effects,u)};if(s&&t){const C=t;t=(...F)=>{try{return C(...F)}finally{R()}}}let x=y?new Array(e.length).fill(zr):zr;const _=C=>{if(!(!(u.flags&1)||!u.dirty&&!C))if(t){const F=u.run();if(C||o||z||(y?F.some((V,U)=>Pt(V,x[U])):Pt(F,x))){const V=gn;Lt();try{f&&f(),gn=u;const U=[F,x===zr?void 0:y&&x[0]===zr?[]:x,m];x=F,c?c(t,3,U):t(...U)}finally{gn=V,Vt()}}}else u.run()};return i&&i(_),u=new ha(d),u.scheduler=a?()=>a(_,!1):_,m=C=>od(C,!1,u),f=u.onStop=()=>{const C=Or.get(u);if(C){if(c)c(C,4);else for(const F of C)F();Or.delete(u)}},t?r?_(!0):x=u.run():a?a(_.bind(null,!0),!0):u.run(),R.pause=u.pause.bind(u),R.resume=u.resume.bind(u),R.stop=R,R}function Gt(e,t=1/0,n){if(t<=0||!Ie(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,nt(e))Gt(e.value,t,n);else if(le(e))for(let r=0;r<e.length;r++)Gt(e[r],t,n);else if(Vr(e)||on(e))e.forEach(r=>{Gt(r,t,n)});else if(pa(e)){for(const r in e)Gt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Gt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xr(e,t,n,r){try{return r?e(...r):e()}catch(o){io(o,t,n)}}function xt(e,t,n,r){if(me(e)){const o=xr(e,t,n,r);return o&&da(o)&&o.catch(s=>{io(s,t,n)}),o}if(le(e)){const o=[];for(let s=0;s<e.length;s++)o.push(xt(e[s],t,n,r));return o}}function io(e,t,n,r=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Fe;if(t){let i=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,p)===!1)return}i=i.parent}if(s){Lt(),xr(s,null,10,[e,c,p]),Vt();return}}id(e,n,o,r,a)}function id(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}const at=[];let vt=-1;const Tt=[];let en=null,zn=0;const Fa=Promise.resolve();let Dr=null;function Sn(e){const t=Dr||Fa;return e?t.then(this?e.bind(this):e):t}function ad(e){let t=vt+1,n=at.length;for(;t<n;){const r=t+n>>>1,o=at[r],s=cr(o);s<e||s===e&&o.flags&2?t=r+1:n=r}return t}function Cs(e){if(!(e.flags&1)){const t=cr(e),n=at[at.length-1];!n||!(e.flags&2)&&t>=cr(n)?at.push(e):at.splice(ad(t),0,e),e.flags|=1,La()}}function La(){Dr||(Dr=Fa.then(Da))}function ld(e){if(!le(e))en&&e.id===-1?en.splice(zn+1,0,e):e.flags&1||(Tt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Tt.push(e[t]);La()}function Va(e,t,n,r=vt+1){for(;r<at.length;r++){const o=at[r];if(o&&o.flags&2){if(e&&o.id!==e.uid||t!==void 0&&!(o.id>=t))continue;at.splice(r,1),r=e?r-1:vt,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function Oa(e,t,n=0){if(Tt.length){let r=Tt,o=0;if(t){r=[];for(let a=0;a<Tt.length;a++){const i=Tt[a];(i.i!==void 0?!i.i||i.i.uid<n:t.has(i))?Tt[o++]=i:r.push(i)}}const s=[...new Set(r)].sort((a,i)=>cr(a)-cr(i));if(Tt.length=o,en){for(let a=0;a<s.length;a++)en.push(s[a]);return}for(en=s,zn=0;zn<en.length;zn++){const a=en[zn];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}en=null,zn=0}}let ko=!1;function cd(e,t){if(ko){e();return}const n=t===void 0?void 0:new Set(Tt);e(),ko=!0;try{Va(void 0,t),Oa(void 0,n,t)}finally{ko=!1}}const cr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Da(e){try{for(vt=0;vt<at.length;vt++){const t=at[vt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),xr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;vt<at.length;vt++){const t=at[vt];t&&(t.flags&=-2)}vt=-1,at.length=0,Oa(),Dr=null,(at.length||Tt.length)&&Da()}}let Ye=null,ja=null;function jr(e){const t=Ye;return Ye=e,ja=e&&e.type.__scopeId||null,t}function Y(e,t=Ye,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Ur(-1);const s=jr(t),a=qt.length;let i;try{i=e(...o)}finally{for(let c=qt.length;c>a;c--)Rs();jr(s),r._d&&Ur(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function An(e,t){if(Ye===null)return e;const n=mo(Ye),r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,a,i,c=Fe]=t[o];s&&(me(s)&&(s={mounted:s,updated:s}),s.deep&&Gt(a),r.push({dir:s,instance:n,value:a,oldValue:void 0,arg:i,modifiers:c}))}return e}function pn(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let a=0;a<o.length;a++){const i=o[a];s&&(i.oldValue=s[a].value);let c=i.dir[r];c&&(Lt(),xt(c,n,8,[e.el,i,e,t]),Vt())}}function $r(e,t){if(tt){let n=tt.provides;const r=tt.parent&&tt.parent.provides;r===n&&(n=tt.provides=Object.create(r)),n[e]=t}}function Ft(e,t,n=!1){const r=fo();if(r||Mn){let o=Mn?Mn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&me(t)?t.call(r&&r.proxy):t}}const dd=Symbol.for("v-scx"),ud=()=>Ft(dd);function gt(e,t,n){return Ba(e,t,n)}function Ba(e,t,n=Fe){const{immediate:r,deep:o,flush:s,once:a}=n,i=Ne({},n),c=t&&r||!t&&s!=="post";let p;if(mr){if(s==="sync"){const m=ud();p=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Et,m.resume=Et,m.pause=Et,m}}const u=tt;i.call=(m,z,y)=>xt(m,u,z,y);let d=!1;s==="post"?i.scheduler=m=>{m.i=u,ct(m,u&&u.suspense)}:s!=="sync"&&(d=!0,i.scheduler=(m,z)=>{z?m():Cs(m)}),i.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const f=sd(e,t,i);return mr&&(p?p.push(f):c&&f()),f}function pd(e,t,n){const r=this.proxy,o=De(e)?e.includes(".")?Na(r,e):()=>r[e]:e.bind(r,r);let s;me(t)?s=t:(s=t.handler,n=t);const a=yr(this),i=Ba(o,s.bind(r),n);return a(),i}function Na(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const fd=Symbol("_vte"),ao=e=>e.__isTeleport,mt=Symbol("_leaveCb"),Dn=Symbol("_enterCb");function Ha(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return We(()=>{e.isMounted=!0}),Ya(()=>{e.isUnmounting=!0}),e}const ft=[Function,Array],Ua={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},md={name:"BaseTransition",props:Ua,setup(e,{slots:t}){const n=fo(),r=Ha();return()=>{const o=t.default&&Ss(t.default(),!0),s=o&&o.length?Ga(o):n.subTree?ne():void 0;if(!s)return;const a=Ce(e),{mode:i}=a;if(r.isLeaving)return zo(s);const c=Br(s);if(!c)return zo(s);let p=dr(c,a,r,n,d=>p=d);c.type!==Je&&ln(c,p);let u=n.subTree&&Br(n.subTree);if(u&&u.type!==Je&&!hn(u,c)&&ur(n.subTree)){let d=dr(u,a,r,n);if(ln(u,d),i==="out-in"&&c.type!==Je)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},zo(s);i==="in-out"&&c.type!==Je?d.delayLeave=(f,m,z)=>{const y=qa(r,u);y[String(u.key)]=u,f[mt]=()=>{m(),f[mt]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{z(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Ga(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Je){t=n;break}}return t}const bd=md;function qa(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function dr(e,t,n,r,o){const{appear:s,mode:a,persisted:i=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:z,onLeaveCancelled:y,onBeforeAppear:S,onAppear:R,onAfterAppear:x,onAppearCancelled:_}=t,C=String(e.key),F=qa(n,e),V=(B,ee)=>{B&&xt(B,r,9,ee)},U=(B,ee)=>{const ae=ee[1];V(B,ee),le(B)?B.every(q=>q.length<=1)&&ae():B.length<=1&&ae()},j={mode:a,persisted:i,beforeEnter(B){let ee=c;if(!n.isMounted)if(s)ee=S||c;else return;B[mt]&&B[mt](!0);const ae=F[C];if(ae&&hn(e,ae)){let q=ae.el[mt];if(!q){const ge=ur(ae);q=ge&&ge.el[mt]}q&&q()}V(ee,[B])},enter(B){if(F[C]===e)return;let ee=p,ae=u,q=d;if(!n.isMounted)if(s)ee=R||p,ae=x||u,q=_||d;else return;let ge=!1;B[Dn]=Ve=>{ge||(ge=!0,Ve?V(q,[B]):V(ae,[B]),j.delayedLeave&&j.delayedLeave(),B[Dn]=void 0)};const Me=B[Dn].bind(null,!1);ee?U(ee,[B,Me]):Me()},leave(B,ee){const ae=String(e.key);if(B[Dn]&&B[Dn](!0),n.isUnmounting)return ee();V(f,[B]);let q=!1;B[mt]=Me=>{q||(q=!0,ee(),Me?V(y,[B]):V(z,[B]),B[mt]=void 0,F[ae]===e&&delete F[ae])};const ge=B[mt].bind(null,!1);F[ae]=e,m?U(m,[B,ge]):ge()},clone(B){const ee=dr(B,t,n,r,o);return o&&o(ee),ee}};return j}function zo(e){if(lo(e))return e=cn(e),e.children=null,e}function Br(e){if(!lo(e))return ao(e.type)&&e.children?Ga(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&me(n.default))return n.default()}}function ln(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;ln(ao(n.type)&&Br(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===re&&le(e.children)){const n=sl(e.children,!1);n&&ln(n,t)}}function Ss(e,t=!1,n){let r=[],o=0;for(let s=0;s<e.length;s++){let a=e[s];const i=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===re?(a.patchFlag&128&&o++,r=r.concat(Ss(a.children,t,i))):(t||a.type!==Je)&&r.push(i!=null?cn(a,{key:i}):a)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ur(e){if(e.component)return ur(e.component.subTree);if(e.type===re){const t=le(e.children)&&sl(e.children,!1);return t?ur(t):void 0}if(e.type!==Je)return e}function ce(e,t){return me(e)?Ne({name:e.name},t,{setup:e}):e}function As(){const e=fo();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Wa(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Xs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Nr=new WeakMap;function Jn(e,t,n,r,o=!1){if(le(e)){e.forEach((y,S)=>Jn(y,t&&(le(t)?t[S]:t),n,r,o));return}if(In(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Jn(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?mo(r.component):r.el,a=o?null:s,{i,r:c}=e,p=t&&t.r,u=i.refs===Fe?i.refs={}:i.refs,d=i.setupState,f=Ce(d),m=d===Fe?ca:y=>Xs(u,y)?!1:Se(f,y),z=(y,S)=>!(S&&Xs(u,S));if(p!=null&&p!==c){if(Ys(t),De(p))u[p]=null,m(p)&&(d[p]=null);else if(nt(p)){const y=t;z(p,y.k)&&(p.value=null),y.k&&(u[y.k]=null)}}if(me(c))xr(c,i,12,[a,u]);else{const y=De(c),S=nt(c);if(y||S){const R=()=>{if(e.f){const x=y?m(c)?d[c]:u[c]:z()||!e.k?c.value:u[e.k];if(o)le(x)&&bs(x,s);else if(le(x))x.includes(s)||x.push(s);else if(y)u[c]=[s],m(c)&&(d[c]=u[c]);else{const _=[s];z(c,e.k)&&(c.value=_),e.k&&(u[e.k]=_)}}else y?(u[c]=a,m(c)&&(d[c]=a)):S&&(z(c,e.k)&&(c.value=a),e.k&&(u[e.k]=a))};if(a){const x=()=>{R(),Nr.delete(e)};x.id=-1,Nr.set(e,x),ct(x,n)}else Ys(e),R()}}}function Ys(e){const t=Nr.get(e);t&&(t.flags|=8,Nr.delete(e))}no().requestIdleCallback;no().cancelIdleCallback;const In=e=>!!e.type.__asyncLoader,lo=e=>e.type.__isKeepAlive;function gd(e,t){Ka(e,"a",t)}function hd(e,t){Ka(e,"da",t)}function Ka(e,t,n=tt){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(co(t,r,n),n){let o=n.parent;for(;o&&o.parent;)lo(o.parent.vnode)&&xd(r,t,n,o),o=o.parent}}function xd(e,t,n,r){const o=co(t,e,r,!0);Qe(()=>{bs(r[t],o)},n)}function co(e,t,n=tt,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{Lt();const i=yr(n),c=xt(t,n,e,a);return i(),Vt(),c});return r?o.unshift(s):o.push(s),s}}const Xt=e=>(t,n=tt)=>{(!mr||e==="sp")&&co(e,(...r)=>t(...r),n)},vd=Xt("bm"),We=Xt("m"),yd=Xt("bu"),Xa=Xt("u"),Ya=Xt("bum"),Qe=Xt("um"),wd=Xt("sp"),kd=Xt("rtg"),zd=Xt("rtc");function _d(e,t=tt){co("ec",e,t)}const Za="components";function vr(e,t){return Qa(Za,e,!0,t)||e}const Ja=Symbol.for("v-ndc");function Ze(e){return De(e)?Qa(Za,e,!1)||e:e||Ja}function Qa(e,t,n=!0,r=!1){const o=Ye||tt;if(o){const s=o.type;{const i=au(s,!1);if(i&&(i===t||i===lt(t)||i===to(lt(t))))return s}const a=Zs(o[e]||s[e],t)||Zs(o.appContext[e],t);return!a&&r?s:a}}function Zs(e,t){return e&&(e[t]||e[lt(t)]||e[to(lt(t))])}function ve(e,t,n,r){let o;const s=n,a=le(e);if(a||De(e)){const i=a&&sn(e);let c=!1,p=!1;i&&(c=!bt(e),p=Ot(e),e=oo(e)),o=new Array(e.length);for(let u=0,d=e.length;u<d;u++)o[u]=t(c?p?an(ht(e[u])):ht(e[u]):e[u],u,void 0,s)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)o=[];else{o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,s)}else if(Ie(e))if(e[Symbol.iterator])o=Array.from(e,(i,c)=>t(i,c,void 0,s));else{const i=Object.keys(e);o=new Array(i.length);for(let c=0,p=i.length;c<p;c++){const u=i[c];o[c]=t(e[u],u,c,s)}}else o=[];return o}function dt(e,t,n,r,o,s){if(n==null&&(n={}),Ye.ce||Ye.parent&&In(Ye.parent)&&Ye.parent.ce){const p=s!=null&&n.key==null?Ne({},n,{key:s}):n,u=Object.keys(p).length>0;return t!=="default"&&(p.name=t),g(),de(re,null,[w("slot",p,r&&r())],u?-2:64)}let a=e[t];a&&a._c&&(a._d=!1);const i=qt.length;g();let c;try{const p=a&&el(a(n)),u=n.key||s||p&&p.key;c=de(re,{key:(u&&!wt(u)?u:`_${t}`)+(!p&&r?"_fb":"")},p||(r?r():[]),p&&e._===1?64:-2)}catch(p){for(let u=qt.length;u>i;u--)Rs();throw p}finally{a&&a._c&&(a._d=!0)}return!o&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function el(e){return e.some(t=>Tn(t)?!(t.type===Je||t.type===re&&!el(t.children)):!0)?e:null}const Ko=e=>e?wl(e)?mo(e):Ko(e.parent):null,Qn=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ko(e.parent),$root:e=>Ko(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>nl(e),$forceUpdate:e=>e.f||(e.f=()=>{Cs(e.update)}),$nextTick:e=>e.n||(e.n=Sn.bind(e.proxy)),$watch:e=>pd.bind(e)}),_o=(e,t)=>e!==Fe&&!e.__isScriptSetup&&Se(e,t),Cd={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:s,accessCache:a,type:i,appContext:c}=e;if(t[0]!=="$"){const f=a[t];if(f!==void 0)switch(f){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(_o(r,t))return a[t]=1,r[t];if(o!==Fe&&Se(o,t))return a[t]=2,o[t];if(Se(s,t))return a[t]=3,s[t];if(n!==Fe&&Se(n,t))return a[t]=4,n[t];Xo&&(a[t]=0)}}const p=Qn[t];let u,d;if(p)return t==="$attrs"&&et(e.attrs,"get",""),p(e);if((u=i.__cssModules)&&(u=u[t]))return u;if(n!==Fe&&Se(n,t))return a[t]=4,n[t];if(d=c.config.globalProperties,Se(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return _o(o,t)?(o[t]=n,!0):r!==Fe&&Se(r,t)?(r[t]=n,!0):Se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,props:s,type:a}},i){let c;return!!(n[i]||e!==Fe&&i[0]!=="$"&&Se(e,i)||_o(t,i)||Se(s,i)||Se(r,i)||Se(Qn,i)||Se(o.config.globalProperties,i)||(c=a.__cssModules)&&c[i])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Js(e){return le(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Xo=!0;function Sd(e){const t=nl(e),n=e.proxy,r=e.ctx;Xo=!1,t.beforeCreate&&Qs(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:i,provide:c,inject:p,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:z,activated:y,deactivated:S,beforeDestroy:R,beforeUnmount:x,destroyed:_,unmounted:C,render:F,renderTracked:V,renderTriggered:U,errorCaptured:j,serverPrefetch:B,expose:ee,inheritAttrs:ae,components:q,directives:ge,filters:Me}=t;if(p&&Ad(p,r,null),a)for(const fe in a){const se=a[fe];me(se)&&(r[fe]=se.bind(n))}if(o){const fe=o.call(n,n);Ie(fe)&&(e.data=so(fe))}if(Xo=!0,s)for(const fe in s){const se=s[fe],Te=me(se)?se.bind(n,n):me(se.get)?se.get.bind(n,n):Et,Z=!me(se)&&me(se.set)?se.set.bind(n):Et,je=pe({get:Te,set:Z});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>je.value,set:we=>je.value=we})}if(i)for(const fe in i)tl(i[fe],r,n,fe);if(c){const fe=me(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(se=>{$r(se,fe[se])})}u&&Qs(u,e,"c");function xe(fe,se){le(se)?se.forEach(Te=>fe(Te.bind(n))):se&&fe(se.bind(n))}if(xe(vd,d),xe(We,f),xe(yd,m),xe(Xa,z),xe(gd,y),xe(hd,S),xe(_d,j),xe(zd,V),xe(kd,U),xe(Ya,x),xe(Qe,C),xe(wd,B),le(ee))if(ee.length){const fe=e.exposed||(e.exposed={});ee.forEach(se=>{Object.defineProperty(fe,se,{get:()=>n[se],set:Te=>n[se]=Te,enumerable:!0})})}else e.exposed||(e.exposed={});F&&e.render===Et&&(e.render=F),ae!=null&&(e.inheritAttrs=ae),q&&(e.components=q),ge&&(e.directives=ge),B&&Wa(e)}function Ad(e,t,n=Et){le(e)&&(e=Yo(e));for(const r in e){const o=e[r];let s;Ie(o)?"default"in o?s=Ft(o.from||r,o.default,!0):s=Ft(o.from||r):s=Ft(o),nt(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function Qs(e,t,n){xt(le(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function tl(e,t,n,r){let o=r.includes(".")?Na(n,r):()=>n[r];if(De(e)){const s=t[e];me(s)&&gt(o,s)}else if(me(e))gt(o,e.bind(n));else if(Ie(e))if(le(e))e.forEach(s=>tl(s,t,n,r));else{const s=me(e.handler)?e.handler.bind(n):t[e.handler];me(s)&&gt(o,s,e)}}function nl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,i=s.get(t);let c;return i?c=i:!o.length&&!n&&!r?c=t:(c={},o.length&&o.forEach(p=>Hr(c,p,a,!0)),Hr(c,t,a)),Ie(t)&&s.set(t,c),c}function Hr(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&Hr(e,s,n,!0),o&&o.forEach(a=>Hr(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const i=Id[a]||n&&n[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const Id={data:ei,props:ti,emits:ti,methods:Gn,computed:Gn,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:Gn,directives:Gn,watch:Rd,provide:ei,inject:Md};function ei(e,t){return t?e?function(){return Ne(me(e)?e.call(this,this):e,me(t)?t.call(this,this):t)}:t:e}function Md(e,t){return Gn(Yo(e),Yo(t))}function Yo(e){if(le(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ot(e,t){return e?[...new Set([].concat(e,t))]:t}function Gn(e,t){return e?Ne(Object.create(null),e,t):t}function ti(e,t){return e?le(e)&&le(t)?[...new Set([...e,...t])]:Ne(Object.create(null),Js(e),Js(t??{})):t}function Rd(e,t){if(!e)return t;if(!t)return e;const n=Ne(Object.create(null),e);for(const r in t)n[r]=ot(e[r],t[r]);return n}function rl(){return{app:null,config:{isNativeTag:ca,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Td=0;function $d(e,t){return function(r,o=null){me(r)||(r=Ne({},r)),o!=null&&!Ie(o)&&(o=null);const s=rl(),a=new WeakSet,i=[];let c=!1;const p=s.app={_uid:Td++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:cu,get config(){return s.config},set config(u){},use(u,...d){return a.has(u)||(u&&me(u.install)?(a.add(u),u.install(p,...d)):me(u)&&(a.add(u),u(p,...d))),p},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),p},component(u,d){return d?(s.components[u]=d,p):s.components[u]},directive(u,d){return d?(s.directives[u]=d,p):s.directives[u]},mount(u,d,f){if(!c){const m=p._ceVNode||w(r,o);return m.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),e(m,u,f),c=!0,p._container=u,u.__vue_app__=p,mo(m.component)}},onUnmount(u){i.push(u)},unmount(){c&&(xt(i,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return s.provides[u]=d,p},runWithContext(u){const d=Mn;Mn=p;try{return u()}finally{Mn=d}}};return p}}let Mn=null;const Pd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${lt(t)}Modifiers`]||e[`${dn(t)}Modifiers`];function Ed(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Fe;let o=n;const s=t.startsWith("update:"),a=s&&Pd(r,t.slice(7));a&&(a.trim&&(o=n.map(u=>De(u)?u.trim():u)),a.number&&(o=o.map(hs)));let i,c=r[i=ho(t)]||r[i=ho(lt(t))];!c&&s&&(c=r[i=ho(dn(t))]),c&&xt(c,e,6,o);const p=r[i+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,xt(p,e,6,o)}}const Fd=new WeakMap;function ol(e,t,n=!1){const r=n?Fd:t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let a={},i=!1;if(!me(e)){const c=p=>{const u=ol(p,t,!0);u&&(i=!0,Ne(a,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!i?(Ie(e)&&r.set(e,null),null):(le(s)?s.forEach(c=>a[c]=null):Ne(a,s),Ie(e)&&r.set(e,a),a)}function uo(e,t){return!e||!Jr(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),Se(e,t[0].toLowerCase()+t.slice(1))||Se(e,dn(t))||Se(e,t))}function ni(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:a,attrs:i,emit:c,render:p,renderCache:u,props:d,data:f,setupState:m,ctx:z,inheritAttrs:y}=e,S=jr(e);let R,x;try{if(n.shapeFlag&4){const C=o||r,F=C;R=$t(p.call(F,C,u,d,m,f,z)),x=i}else{const C=t;R=$t(C.length>1?C(d,{attrs:i,slots:a,emit:c}):C(d,null)),x=t.props?i:Ld(i)}}catch(C){qt.length=0,io(C,e,1),R=w(Je)}let _=R;if(x&&y!==!1){const C=Object.keys(x),{shapeFlag:F}=_;C.length&&F&7&&(s&&C.some(Qr)&&(x=Vd(x,s)),_=cn(_,x,!1,!0))}if(n.dirs&&(_=cn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition){const C=ao(_.type)&&Br(_)||_;ln(C,n.transition)}return R=_,jr(S),R}function sl(e,t=!0){let n;for(let r=0;r<e.length;r++){const o=e[r];if(Tn(o)){if(o.type!==Je||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Ld=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jr(n))&&((t||(t={}))[n]=e[n]);return t},Vd=(e,t)=>{const n={};for(const r in e)(!Qr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Od(e,t,n){const{props:r,children:o,component:s}=e,{props:a,children:i,patchFlag:c}=t,p=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ri(r,a,p):!!a;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(il(a,r,f)&&!uo(p,f))return!0}}}else return(o||i)&&(!i||!i.$stable)?!0:r===a?!1:r?a?ri(r,a,p):!0:!!a;return!1}function ri(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(!Se(e,s)||il(t,e,s)&&!uo(n,s))return!0}return!1}function il(e,t,n){const r=e[n],o=t[n];return n==="style"&&Ie(r)&&Ie(o)?!ro(r,o):r!==o}function Dd({vnode:e,parent:t,suspense:n},r){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=r,e=o),o===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const al={},ll=()=>Object.create(al),cl=e=>Object.getPrototypeOf(e)===al;function jd(e,t,n,r=!1){const o={},s=ll();e.propsDefaults=Object.create(null),dl(e,t,o,s);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);n?e.props=r?o:$a(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Bd(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,i=Ce(o),[c]=e.propsOptions;let p=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(uo(e.emitsOptions,f))continue;const m=t[f];if(c)if(Se(s,f))m!==s[f]&&(s[f]=m,p=!0);else{const z=lt(f);o[z]=Zo(c,i,z,m,e,!1)}else m!==s[f]&&(s[f]=m,p=!0)}}}else{dl(e,t,o,s)&&(p=!0);let u;for(const d in i)(!t||!Se(t,d)&&((u=dn(d))===d||!Se(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(o[d]=Zo(c,i,d,void 0,e,!0)):delete o[d]);if(s!==i)for(const d in s)(!t||!Se(t,d))&&(delete s[d],p=!0)}p&&Ut(e.attrs,"set","")}function dl(e,t,n,r){const[o,s]=e.propsOptions;let a=!1,i;if(t)for(let c in t){if(Xn(c))continue;const p=t[c];let u;o&&Se(o,u=lt(c))?!s||!s.includes(u)?n[u]=p:(i||(i={}))[u]=p:uo(e.emitsOptions,c)||(!(c in r)||p!==r[c])&&(r[c]=p,a=!0)}if(s){const c=Ce(n),p=i||Fe;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Zo(o,c,d,p[d],e,!Se(p,d))}}return a}function Zo(e,t,n,r,o,s){const a=e[n];if(a!=null){const i=Se(a,"default");if(i&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&me(c)){const{propsDefaults:p}=o;if(n in p)r=p[n];else{const u=yr(o);r=p[n]=c.call(null,t),u()}}else r=c;o.ce&&o.ce._setProp(n,r)}a[0]&&(s&&!i?r=!1:a[1]&&(r===""||r===dn(n))&&(r=!0))}return r}const Nd=new WeakMap;function ul(e,t,n=!1){const r=n?Nd:t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},i=[];let c=!1;if(!me(e)){const u=d=>{c=!0;const[f,m]=ul(d,t,!0);Ne(a,f),m&&i.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return Ie(e)&&r.set(e,xn),xn;if(le(s))for(let u=0;u<s.length;u++){const d=lt(s[u]);oi(d)&&(a[d]=Fe)}else if(s)for(const u in s){const d=lt(u);if(oi(d)){const f=s[u],m=a[d]=le(f)||me(f)?{type:f}:Ne({},f),z=m.type;let y=!1,S=!0;if(le(z))for(let R=0;R<z.length;++R){const x=z[R],_=me(x)&&x.name;if(_==="Boolean"){y=!0;break}else _==="String"&&(S=!1)}else y=me(z)&&z.name==="Boolean";m[0]=y,m[1]=S,(y||Se(m,"default"))&&i.push(d)}}const p=[a,i];return Ie(e)&&r.set(e,p),p}function oi(e){return e[0]!=="$"&&!Xn(e)}const Is=e=>e==="_"||e==="_ctx"||e==="$stable",Ms=e=>le(e)?e.map($t):[$t(e)],Hd=(e,t,n)=>{if(t._n)return t;const r=Y((...o)=>Ms(t(...o)),n);return r._c=!1,r},pl=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Is(o))continue;const s=e[o];if(me(s))t[o]=Hd(o,s,r);else if(s!=null){const a=Ms(s);t[o]=()=>a}}},fl=(e,t)=>{const n=Ms(t);e.slots.default=()=>n},ml=(e,t,n)=>{for(const r in t)(n||!Is(r))&&(e[r]=t[r])},Ud=(e,t,n)=>{const r=e.slots=ll();if(e.vnode.shapeFlag&32){const o=t._;o?(ml(r,t,n),n&&fa(r,"_",o,!0)):pl(t,r)}else t&&fl(e,t)},Gd=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=Fe;if(r.shapeFlag&32){const i=t._;i?n&&i===1?s=!1:ml(o,t,n):(s=!t.$stable,pl(t,o)),a=t}else t&&(fl(e,t),a={default:1});if(s)for(const i in o)!Is(i)&&a[i]==null&&delete o[i]},ct=Yd;function qd(e){return Wd(e)}function Wd(e,t){const n=no();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:a,createText:i,createComment:c,setText:p,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=Et,insertStaticContent:z}=e,y=(b,k,I,$=null,E=null,N=null,H=void 0,h=null,W=!!k.dynamicChildren)=>{if(b===k)return;b&&!hn(b,k)&&($=L(b),we(b,E,N,!0),b=null),k.patchFlag===-2&&(W=!1,k.dynamicChildren=null),k.dynamicChildren&&b&&b.dynamicChildren&&b.dynamicChildren.hasOnce&&(k.dynamicChildren===xn&&(k.dynamicChildren=[]),k.dynamicChildren.hasOnce=!0);const{type:M,ref:O,shapeFlag:K}=k;switch(M){case po:S(b,k,I,$);break;case Je:R(b,k,I,$);break;case Pr:b==null&&x(k,I,$,H);break;case re:q(b,k,I,$,E,N,H,h,W);break;default:K&1?F(b,k,I,$,E,N,H,h,W):K&6?ge(b,k,I,$,E,N,H,h,W):(K&64||K&128)&&M.process(b,k,I,$,E,N,H,h,W,G)}O!=null&&E?Jn(O,b&&b.ref,N,k||b,!k):O==null&&b&&b.ref!=null&&Jn(b.ref,null,N,b,!0)},S=(b,k,I,$)=>{if(b==null)r(k.el=i(k.children),I,$);else{const E=k.el=b.el;k.children!==b.children&&p(E,k.children)}},R=(b,k,I,$)=>{b==null?r(k.el=c(k.children||""),I,$):k.el=b.el},x=(b,k,I,$)=>{[b.el,b.anchor]=z(b.children,k,I,$,b.el,b.anchor)},_=({el:b,anchor:k},I,$)=>{let E;for(;b&&b!==k;)E=f(b),r(b,I,$),b=E;r(k,I,$)},C=({el:b,anchor:k})=>{let I;for(;b&&b!==k;)I=f(b),o(b),b=I;o(k)},F=(b,k,I,$,E,N,H,h,W)=>{if(k.type==="svg"?H="svg":k.type==="math"&&(H="mathml"),b==null)V(k,I,$,E,N,H,h,W);else{const M=b.el&&b.el._isVueCE?b.el:null;try{M&&M._beginPatch(),B(b,k,E,N,H,h,W)}finally{M&&M._endPatch()}}},V=(b,k,I,$,E,N,H,h)=>{let W,M;const{props:O,shapeFlag:K,transition:ie,dirs:ue}=b;if(W=b.el=a(b.type,N,O&&O.is,O),K&8?u(W,b.children):K&16&&j(b.children,W,null,$,E,Co(b,N),H,h),ue&&pn(b,null,$,"created"),U(W,b,b.scopeId,H,$),O){for(const Ee in O)Ee!=="value"&&!Xn(Ee)&&s(W,Ee,null,O[Ee],N,$);"value"in O&&s(W,"value",null,O.value,N),(M=O.onVnodeBeforeMount)&&At(M,$,b)}ue&&pn(b,null,$,"beforeMount");const _e=Kd(E,ie);_e&&ie.beforeEnter(W),r(W,k,I),((M=O&&O.onVnodeMounted)||_e||ue)&&ct(()=>{try{M&&At(M,$,b),_e&&ie.enter(W),ue&&pn(b,null,$,"mounted")}finally{}},E)},U=(b,k,I,$,E)=>{if(I&&m(b,I),$)for(let N=0;N<$.length;N++)m(b,$[N]);if(E){let N=E.subTree;if(k===N||hl(N.type)&&(N.ssContent===k||N.ssFallback===k)){const H=E.vnode;U(b,H,H.scopeId,H.slotScopeIds,E.parent)}}},j=(b,k,I,$,E,N,H,h,W=0)=>{for(let M=W;M<b.length;M++){const O=b[M]=h?Ht(b[M]):$t(b[M]);y(null,O,k,I,$,E,N,H,h)}},B=(b,k,I,$,E,N,H)=>{const h=k.el=b.el;let{patchFlag:W,dynamicChildren:M,dirs:O}=k;W|=b.patchFlag&16;const K=b.props||Fe,ie=k.props||Fe;let ue;if(I&&fn(I,!1),(ue=ie.onVnodeBeforeUpdate)&&At(ue,I,k,b),O&&pn(k,b,I,"beforeUpdate"),I&&fn(I,!0),M&&(!b.dynamicChildren||b.dynamicChildren.length!==M.length)&&(W=0,H=!1,M=null),(K.innerHTML&&ie.innerHTML==null||K.textContent&&ie.textContent==null)&&u(h,""),M?ee(b.dynamicChildren,M,h,I,$,Co(k,E),N):H||se(b,k,h,null,I,$,Co(k,E),N,!1),W>0){if(W&16)ae(h,K,ie,I,E);else if(W&2&&K.class!==ie.class&&s(h,"class",null,ie.class,E),W&4&&s(h,"style",K.style,ie.style,E),W&8){const _e=k.dynamicProps;for(let Ee=0;Ee<_e.length;Ee++){const $e=_e[Ee],Ue=K[$e],Ke=ie[$e];(Ke!==Ue||$e==="value")&&s(h,$e,Ue,Ke,E,I)}}W&1&&b.children!==k.children&&u(h,k.children)}else!H&&M==null&&ae(h,K,ie,I,E);((ue=ie.onVnodeUpdated)||O)&&ct(()=>{ue&&At(ue,I,k,b),O&&pn(k,b,I,"updated")},$)},ee=(b,k,I,$,E,N,H)=>{for(let h=0;h<k.length;h++){const W=b[h],M=k[h],O=W.el||Jo(W),K=O&&(W.type===re||!hn(W,M)||W.shapeFlag&198)?d(O):I;y(W,M,K,null,$,E,N,H,!0)}},ae=(b,k,I,$,E)=>{if(k!==I){if(k!==Fe)for(const N in k)!Xn(N)&&!(N in I)&&s(b,N,k[N],null,E,$);for(const N in I){if(Xn(N))continue;const H=I[N],h=k[N];H!==h&&N!=="value"&&s(b,N,h,H,E,$)}"value"in I&&s(b,"value",k.value,I.value,E)}},q=(b,k,I,$,E,N,H,h,W)=>{const M=k.el=b?b.el:i(""),O=k.anchor=b?b.anchor:i("");let{patchFlag:K,dynamicChildren:ie,slotScopeIds:ue}=k;ue&&(h=h?h.concat(ue):ue),b==null?(r(M,I,$),r(O,I,$),j(k.children||[],I,O,E,N,H,h,W)):K>0&&K&64&&ie&&b.dynamicChildren&&b.dynamicChildren.length===ie.length?(ee(b.dynamicChildren,ie,I,E,N,H,h),(k.key!=null||E&&k===E.subTree)&&bl(b,k,!0)):se(b,k,I,O,E,N,H,h,W)},ge=(b,k,I,$,E,N,H,h,W)=>{k.slotScopeIds=h,b==null?k.shapeFlag&512?E.ctx.activate(k,I,$,H,W):Me(k,I,$,E,N,H,W):Ve(b,k,W)},Me=(b,k,I,$,E,N,H)=>{const h=b.component=nu(b,$,E);if(lo(b)&&(h.ctx.renderer=G),ru(h,!1,H),h.asyncDep){if(E&&E.registerDep(h,xe,H,N),!b.el){const W=h.subTree=w(Je);R(null,W,k,I),b.placeholder=W.el}}else xe(h,b,k,I,E,N,H)},Ve=(b,k,I)=>{const $=k.component=b.component;if(Od(b,k,I))if($.asyncDep&&!$.asyncResolved){k.el=b.el,k.placeholder=b.placeholder,fe($,k,I);return}else $.next=k,$.update();else k.el=b.el,k.placeholder=b.placeholder,$.vnode=k},xe=(b,k,I,$,E,N,H)=>{const h=()=>{if(b.isMounted){let{next:K,bu:ie,u:ue,parent:_e,vnode:Ee}=b;{const Ct=gl(b);if(Ct){K&&(K.el=Ee.el,fe(b,K,H)),Ct.asyncDep.then(()=>{ct(()=>{b.isUnmounted||M()},E)});return}}let $e=K,Ue;fn(b,!1),K?(K.el=Ee.el,fe(b,K,H)):K=Ee,ie&&Tr(ie),(Ue=K.props&&K.props.onVnodeBeforeUpdate)&&At(Ue,_e,K,Ee),fn(b,!0);const Ke=ni(b),_t=b.subTree;b.subTree=Ke,y(_t,Ke,d(_t.el),L(_t),b,E,N),K.el=Ke.el,$e===null&&Dd(b,Ke.el),ue&&ct(ue,E),(Ue=K.props&&K.props.onVnodeUpdated)&&ct(()=>At(Ue,_e,K,Ee),E)}else{let K;const{el:ie,props:ue}=k,{bm:_e,m:Ee,parent:$e,root:Ue,type:Ke}=b,_t=In(k);fn(b,!1),_e&&Tr(_e),!_t&&(K=ue&&ue.onVnodeBeforeMount)&&At(K,$e,k),fn(b,!0);{Ue.ce&&Ue.ce._hasShadowRoot()&&Ue.ce._injectChildStyle(Ke,b.parent?b.parent.type:void 0);const Ct=b.subTree=ni(b);y(null,Ct,I,$,b,E,N),k.el=Ct.el}if(Ee&&ct(Ee,E),!_t&&(K=ue&&ue.onVnodeMounted)){const Ct=k;ct(()=>At(K,$e,Ct),E)}(k.shapeFlag&256||$e&&In($e.vnode)&&$e.vnode.shapeFlag&256)&&b.a&&ct(b.a,E),b.isMounted=!0,k=I=$=null}};b.scope.on();const W=b.effect=new ha(h);b.scope.off();const M=b.update=W.run.bind(W),O=b.job=W.runIfDirty.bind(W);O.i=b,O.id=b.uid,W.scheduler=()=>Cs(O),fn(b,!0),M()},fe=(b,k,I)=>{k.component=b;const $=b.vnode.props;b.vnode=k,b.next=null,Bd(b,k.props,$,I),Gd(b,k.children,I),Lt(),Va(b),Vt()},se=(b,k,I,$,E,N,H,h,W=!1)=>{const M=b&&b.children,O=b?b.shapeFlag:0,K=k.children,{patchFlag:ie,shapeFlag:ue}=k;if(ie>0){if(ie&128){Z(M,K,I,$,E,N,H,h,W);return}else if(ie&256){Te(M,K,I,$,E,N,H,h,W);return}}ue&8?(O&16&&ye(M,E,N),K!==M&&u(I,K)):O&16?ue&16?Z(M,K,I,$,E,N,H,h,W):ye(M,E,N,!0):(O&8&&u(I,""),ue&16&&j(K,I,$,E,N,H,h,W))},Te=(b,k,I,$,E,N,H,h,W)=>{b=b||xn,k=k||xn;const M=b.length,O=k.length,K=Math.min(M,O);let ie;for(ie=0;ie<K;ie++){const ue=k[ie]=W?Ht(k[ie]):$t(k[ie]);y(b[ie],ue,I,null,E,N,H,h,W)}M>O?ye(b,E,N,!0,!1,K):j(k,I,$,E,N,H,h,W,K)},Z=(b,k,I,$,E,N,H,h,W)=>{let M=0;const O=k.length;let K=b.length-1,ie=O-1;for(;M<=K&&M<=ie;){const ue=b[M],_e=k[M]=W?Ht(k[M]):$t(k[M]);if(hn(ue,_e))y(ue,_e,I,null,E,N,H,h,W);else break;M++}for(;M<=K&&M<=ie;){const ue=b[K],_e=k[ie]=W?Ht(k[ie]):$t(k[ie]);if(hn(ue,_e))y(ue,_e,I,null,E,N,H,h,W);else break;K--,ie--}if(M>K){if(M<=ie){const ue=ie+1,_e=ue<O?k[ue].el:$;for(;M<=ie;)y(null,k[M]=W?Ht(k[M]):$t(k[M]),I,_e,E,N,H,h,W),M++}}else if(M>ie)for(;M<=K;)we(b[M],E,N,!0),M++;else{const ue=M,_e=M,Ee=new Map;for(M=_e;M<=ie;M++){const ut=k[M]=W?Ht(k[M]):$t(k[M]);ut.key!=null&&Ee.set(ut.key,M)}let $e,Ue=0;const Ke=ie-_e+1;let _t=!1,Ct=0;const Vn=new Array(Ke);for(M=0;M<Ke;M++)Vn[M]=0;for(M=ue;M<=K;M++){const ut=b[M];if(Ue>=Ke){we(ut,E,N,!0);continue}let St;if(ut.key!=null)St=Ee.get(ut.key);else for($e=_e;$e<=ie;$e++)if(Vn[$e-_e]===0&&hn(ut,k[$e])){St=$e;break}St===void 0?we(ut,E,N,!0):(Vn[St-_e]=M+1,St>=Ct?Ct=St:_t=!0,y(ut,k[St],I,null,E,N,H,h,W),Ue++)}const Ds=_t?Xd(Vn):xn;for($e=Ds.length-1,M=Ke-1;M>=0;M--){const ut=_e+M,St=k[ut],js=k[ut+1],Bs=ut+1<O?js.el||Jo(js):$;Vn[M]===0?y(null,St,I,Bs,E,N,H,h,W):_t&&($e<0||M!==Ds[$e]?je(St,I,Bs,2):$e--)}}},je=(b,k,I,$,E=null)=>{const{el:N,type:H,transition:h,children:W,shapeFlag:M}=b;if(M&6){je(b.component.subTree,k,I,$);return}if(M&128){b.suspense.move(k,I,$);return}if(M&64){H.move(b,k,I,G);return}if(H===re){r(N,k,I);for(let K=0;K<W.length;K++)je(W[K],k,I,$);r(b.anchor,k,I);return}if(H===Pr){_(b,k,I);return}if($!==2&&M&1&&h)if($===0)h.persisted&&!N[mt]?r(N,k,I):(h.beforeEnter(N),r(N,k,I),ct(()=>h.enter(N),E));else{const{leave:K,delayLeave:ie,afterLeave:ue}=h,_e=()=>{b.ctx.isUnmounted?o(N):r(N,k,I)},Ee=()=>{const $e=N._isLeaving||!!N[mt];N._isLeaving&&N[mt](!0),h.persisted&&!$e?_e():K(N,()=>{_e(),ue&&ue()})};ie?ie(N,_e,Ee):Ee()}else r(N,k,I)},we=(b,k,I,$=!1,E=!1)=>{const{type:N,props:H,ref:h,children:W,dynamicChildren:M,shapeFlag:O,patchFlag:K,dirs:ie,cacheIndex:ue,memo:_e}=b;if((K===-2||M&&M.hasOnce)&&(E=!1),h!=null&&(Lt(),Jn(h,null,I,b,!0),Vt()),ue!=null&&(!b.ctx||b.ctx===k)&&(k.renderCache[ue]=void 0),O&256){k.ctx.deactivate(b);return}const Ee=O&1&&ie,$e=!In(b);let Ue;if($e&&(Ue=H&&H.onVnodeBeforeUnmount)&&At(Ue,k,b),O&6)ze(b.component,I,$);else{if(O&128){b.suspense.unmount(I,$);return}Ee&&pn(b,null,k,"beforeUnmount"),O&64?b.type.remove(b,k,I,G,$):M&&!M.hasOnce&&(N!==re||K>0&&K&64)?ye(M,k,I,!1,!0):(N===re&&K&384||!E&&O&16)&&ye(W,k,I),$&&rt(b)}const Ke=_e!=null&&ue==null;($e&&(Ue=H&&H.onVnodeUnmounted)||Ee||Ke)&&ct(()=>{Ue&&At(Ue,k,b),Ee&&pn(b,null,k,"unmounted"),Ke&&(b.el=null)},I)},rt=b=>{const{type:k,el:I,anchor:$,transition:E}=b,N=k===re;if(N&&!E){Oe(I,$);return}if(k===Pr){C(b),E&&!E.persisted&&E.afterLeave&&E.afterLeave();return}const H=N?ur(b):b,h=()=>{N?d(I)&&Oe(I,$):o(I),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(H&&H.shapeFlag&1&&E&&!E.persisted){const{leave:W,delayLeave:M}=E,O=H.el,K=()=>W(O,h);M?M(O,h,K):K()}else h()},Oe=(b,k)=>{let I;for(;b!==k;)I=f(b),o(b),b=I;o(k)},ze=(b,k,I)=>{const{bum:$,scope:E,job:N,subTree:H,um:h,m:W,a:M}=b;si(W),si(M),$&&Tr($),E.stop(),N?(N.flags|=8,we(H,b,k,I)):b.vnode.el&&H&&(H.transition=b.vnode.transition,we(H,b,k,I)),h&&ct(h,k),ct(()=>{b.isUnmounted=!0},k)},ye=(b,k,I,$=!1,E=!1,N=0)=>{for(let H=N;H<b.length;H++)we(b[H],k,I,$,E)},L=b=>{if(b.shapeFlag&6)return L(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const k=f(b.anchor||b.el),I=k&&k[fd];return I?f(I):k},X=(b,k,I)=>{const $=b&&k._vnode?void 0:b&&b.component?b.component.uid:tu();cd(()=>{b==null?k._vnode&&we(k._vnode,null,null,!0):y(k._vnode||null,b,k,null,null,null,I),k._vnode=b},$)},G={p:y,um:we,m:je,r:rt,mt:Me,mc:j,pc:se,pbc:ee,n:L,o:e};return{render:X,hydrate:void 0,createApp:$d(X)}}function Co({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function fn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Kd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function bl(e,t,n=!1){const r=e.children,o=t.children;if(le(r)&&le(o))for(let s=0;s<r.length;s++){const a=r[s];let i=o[s];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=o[s]=Ht(o[s]),i.el=a.el),!n&&i.patchFlag!==-2&&bl(a,i)),i.type===po&&(i.patchFlag===-1&&(i=o[s]=Ht(i)),i.el=a.el),i.type===Je&&!i.el&&(i.el=a.el)}}function Xd(e){const t=e.slice(),n=[0];let r,o,s,a,i;const c=e.length;for(r=0;r<c;r++){const p=e[r];if(p!==0){if(o=n[n.length-1],e[o]<p){t[r]=o,n.push(r);continue}for(s=0,a=n.length-1;s<a;)i=s+a>>1,e[n[i]]<p?s=i+1:a=i;p<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}function gl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:gl(t)}function si(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Jo(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Jo(t.subTree):null}const hl=e=>e.__isSuspense;function Yd(e,t){t&&t.pendingBranch?le(e)?t.effects.push(...e):t.effects.push(e):ld(e)}const re=Symbol.for("v-fgt"),po=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),Pr=Symbol.for("v-stc"),qt=[];let pt=null;function g(e=!1){qt.push(pt=e?null:[])}function Rs(){qt.pop(),pt=qt[qt.length-1]||null}let pr=1;function Ur(e,t=!1){pr+=e,e<0&&pt&&t&&(pt.hasOnce=!0)}function xl(e){return e.dynamicChildren=pr>0?pt||xn:null,Rs(),pr>0&&pt&&pt.push(e),e}function v(e,t,n,r,o,s){return xl(l(e,t,n,r,o,s,!0))}function de(e,t,n,r,o){return xl(w(e,t,n,r,o,!0))}function Tn(e){return e?e.__v_isVNode===!0:!1}function hn(e,t){return e.type===t.type&&e.key===t.key}const vl=({key:e})=>e??null,Er=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?De(e)||nt(e)||me(e)?{i:Ye,r:e,k:t,f:!!n}:e:null);function l(e,t=null,n=null,r=0,o=null,s=e===re?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vl(t),ref:t&&Er(t),scopeId:ja,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ye};return i?(Gr(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),pr>0&&!a&&pt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&pt.push(c),c}const w=Zd;function Zd(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===Ja)&&(e=Je),Tn(e)){const i=cn(e,t,!0);return n&&Gr(i,n),pr>0&&!s&&pt&&(i.shapeFlag&6?pt[pt.indexOf(e)]=i:pt.push(i)),i.patchFlag=-2,i}if(lu(e)&&(e=e.__vccOpts),t){t=Jd(t);let{class:i,style:c}=t;i&&!De(i)&&(t.class=T(i)),Ie(c)&&(_s(c)&&!le(c)&&(c=Ne({},c)),t.style=ke(c))}const a=De(e)?1:hl(e)?128:ao(e)?64:Ie(e)?4:me(e)?2:0;return l(e,t,n,r,o,a,s,!0)}function Jd(e){return e?_s(e)||cl(e)?Ne({},e):e:null}function cn(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:a,children:i,transition:c}=e,p=t?Qd(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&vl(p),ref:t&&t.ref?n&&s?le(s)?s.concat(Er(t)):[s,Er(t)]:Er(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==re?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&cn(e.ssContent),ssFallback:e.ssFallback&&cn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&ln(u,c.clone(u)),u}function Re(e=" ",t=0){return w(po,null,e,t)}function Qo(e,t){const n=w(Pr,null,e);return n.staticCount=t,n}function ne(e="",t=!1){return t?(g(),de(Je,null,e)):w(Je,null,e)}function $t(e){return e==null||typeof e=="boolean"?w(Je):le(e)?w(re,null,e.slice()):Tn(e)?Ht(e):w(po,null,String(e))}function Ht(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:cn(e)}function Gr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(le(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Gr(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!cl(t)?t._ctx=Ye:o===3&&Ye&&(Ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(me(t)){if(r&65){Gr(e,{default:t});return}t={default:t,_ctx:Ye},n=32}else t=String(t),r&64?(n=16,t=[Re(t)]):n=8;e.children=t,e.shapeFlag|=n}function Qd(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=T([t.class,r.class]));else if(o==="style")t.style=ke([t.style,r.style]);else if(Jr(o)){const s=t[o],a=r[o];a&&s!==a&&!(le(s)&&s.includes(a))?t[o]=s?[].concat(s,a):a:a==null&&s==null&&!Qr(o)&&(t[o]=a)}else o!==""&&(t[o]=r[o])}return t}function At(e,t,n,r=null){xt(e,t,7,[n,r])}const eu=rl();let yl=0;function tu(){return yl}function nu(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||eu,s={uid:yl++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ec(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ul(r,o),emitsOptions:ol(r,o),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ed.bind(null,s),e.ce&&e.ce(s),s}let tt=null;const fo=()=>tt||Ye;let qr,fr;{const e=no(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),s=>{o.length>1?o.forEach(a=>a(s)):o[0](s)}};qr=t("__VUE_INSTANCE_SETTERS__",n=>tt=n),fr=t("__VUE_SSR_SETTERS__",n=>mr=n)}const yr=e=>{const t=tt;return qr(e),e.scope.on(),()=>{e.scope.off(),qr(t)}},ii=()=>{tt&&tt.scope.off(),qr(null)};function wl(e){return e.vnode.shapeFlag&4}let mr=!1;function ru(e,t=!1,n=!1){t&&fr(t);const{props:r,children:o}=e.vnode,s=wl(e);jd(e,r,s,t),Ud(e,o,n||t);const a=s?ou(e,t):void 0;return t&&fr(!1),a}function ou(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Cd);const{setup:r}=n;if(r){Lt();const o=e.setupContext=r.length>1?iu(e):null,s=yr(e),a=xr(r,e,0,[e.props,o]),i=da(a);if(Vt(),s(),(i||e.sp)&&!In(e)&&Wa(e),i){if(a.then(ii,ii),t)return a.then(c=>{fr(!0);try{ai(e,c,t)}finally{fr(!1)}}).catch(c=>{io(c,e,0)});e.asyncDep=a}else ai(e,a)}else kl(e)}function ai(e,t,n){me(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ie(t)&&(e.setupState=Ea(t)),kl(e)}function kl(e,t,n){const r=e.type;e.render||(e.render=r.render||Et);{const o=yr(e);Lt();try{Sd(e)}finally{Vt(),o()}}}const su={get(e,t){return et(e,"get",""),e[t]}};function iu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,su),slots:e.slots,emit:e.emit,expose:t}}function mo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ea(Jc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qn)return Qn[n](e)},has(t,n){return n in t||n in Qn}})):e.proxy}function au(e,t=!0){return me(e)?e.displayName||e.name:e.name||t&&e.__name}function lu(e){return me(e)&&"__vccOpts"in e}const pe=(e,t)=>rd(e,t,mr);function $n(e,t,n){try{Ur(-1);const r=arguments.length;return r===2?Ie(t)&&!le(t)?Tn(t)?w(e,null,[t]):w(e,t):w(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tn(n)&&(n=[n]),w(e,t,n))}finally{Ur(1)}}const cu="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let es;const li=typeof window<"u"&&window.trustedTypes;if(li)try{es=li.createPolicy("vue",{createHTML:e=>e})}catch{}const zl=es?e=>es.createHTML(e):e=>e,du="http://www.w3.org/2000/svg",uu="http://www.w3.org/1998/Math/MathML",Nt=typeof document<"u"?document:null,ci=Nt&&Nt.createElement("template"),pu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?Nt.createElementNS(du,e):t==="mathml"?Nt.createElementNS(uu,e):n?Nt.createElement(e,{is:n}):Nt.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Nt.createTextNode(e),createComment:e=>Nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const a=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{ci.innerHTML=zl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const i=ci.content;if(r==="svg"||r==="mathml"){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Yt="transition",jn="animation",Pn=Symbol("_vtc"),_l={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Cl=Ne({},Ua,_l),fu=e=>(e.displayName="Transition",e.props=Cl,e),zt=fu((e,{slots:t})=>$n(bd,Sl(e),t)),mn=(e,t=[])=>{le(e)?e.forEach(n=>n(...t)):e&&e(...t)},di=e=>e?le(e)?e.some(t=>t.length>1):e.length>1:!1;function Sl(e){const t={};for(const q in e)q in _l||(t[q]=e[q]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:p=a,appearToClass:u=i,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,z=mu(o),y=z&&z[0],S=z&&z[1],{onBeforeEnter:R,onEnter:x,onEnterCancelled:_,onLeave:C,onLeaveCancelled:F,onBeforeAppear:V=R,onAppear:U=x,onAppearCancelled:j=_}=t,B=(q,ge,Me,Ve)=>{q._enterCancelled=Ve,Qt(q,ge?u:i),Qt(q,ge?p:a),Me&&Me()},ee=(q,ge)=>{q._isLeaving=!1,Qt(q,d),Qt(q,m),Qt(q,f),ge&&ge()},ae=q=>(ge,Me)=>{const Ve=q?U:x,xe=()=>B(ge,q,Me);mn(Ve,[ge,xe]),ui(()=>{Qt(ge,q?c:s),Mt(ge,q?u:i),di(Ve)||pi(ge,r,y,xe)})};return Ne(t,{onBeforeEnter(q){mn(R,[q]),Mt(q,s),Mt(q,a)},onBeforeAppear(q){mn(V,[q]),Mt(q,c),Mt(q,p)},onEnter:ae(!1),onAppear:ae(!0),onLeave(q,ge){q._isLeaving=!0;const Me=()=>ee(q,ge);Mt(q,d),q._enterCancelled?(Mt(q,f),ts(q)):(ts(q),Mt(q,f)),ui(()=>{q._isLeaving&&(Qt(q,d),Mt(q,m),di(C)||pi(q,r,S,Me))}),mn(C,[q,Me])},onEnterCancelled(q){B(q,!1,void 0,!0),mn(_,[q])},onAppearCancelled(q){B(q,!0,void 0,!0),mn(j,[q])},onLeaveCancelled(q){ee(q),mn(F,[q])}})}function mu(e){if(e==null)return null;if(Ie(e))return[So(e.enter),So(e.leave)];{const t=So(e);return[t,t]}}function So(e){return Cc(e)}function Mt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Pn]||(e[Pn]=new Set)).add(t)}function Qt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Pn];n&&(n.delete(t),n.size||(e[Pn]=void 0))}function ui(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let bu=0;function pi(e,t,n,r){const o=e._endId=++bu,s=()=>{o===e._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:i,propCount:c}=Al(e,t);if(!a)return r();const p=a+"end";let u=0;const d=()=>{e.removeEventListener(p,f),s()},f=m=>{m.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},i+1),e.addEventListener(p,f)}function Al(e,t){const n=window.getComputedStyle(e),r=z=>(n[z]||"").split(", "),o=r(`${Yt}Delay`),s=r(`${Yt}Duration`),a=fi(o,s),i=r(`${jn}Delay`),c=r(`${jn}Duration`),p=fi(i,c);let u=null,d=0,f=0;t===Yt?a>0&&(u=Yt,d=a,f=s.length):t===jn?p>0&&(u=jn,d=p,f=c.length):(d=Math.max(a,p),u=d>0?a>p?Yt:jn:null,f=u?u===Yt?s.length:c.length:0);const m=u===Yt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Yt}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:m}}function fi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>mi(n)+mi(e[r])))}function mi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ts(e){return(e?e.ownerDocument:document).body.offsetHeight}function gu(e,t,n){const r=e[Pn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Wr=Symbol("_vod"),Ts=Symbol("_vsh"),Ao={name:"show",beforeMount(e,{value:t},{transition:n}){e[Wr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Bn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Bn(e,!0),r.enter(e)):r.leave(e,()=>{Bn(e,!1)}):Bn(e,t))},beforeUnmount(e,{value:t}){Bn(e,t)}};function Bn(e,t){e.style.display=t?e[Wr]:"none",e[Ts]=!t}const hu=Symbol(""),xu=/(?:^|;)\s*display\s*:/;function vu(e,t,n){const r=e.style,o=De(n);let s=!1;if(n&&!o){if(t)if(De(t))for(const a of t.split(";")){const i=a.slice(0,a.indexOf(":")).trim();n[i]==null&&qn(r,i,"")}else for(const a in t)n[a]==null&&qn(r,a,"");for(const a in n){a==="display"&&(s=!0);const i=n[a];i!=null?wu(e,a,!De(t)&&t?t[a]:void 0,i)||qn(r,a,i):qn(r,a,"")}}else if(o){if(t!==n){const a=r[hu];a&&(n+=";"+a),r.cssText=n,s=xu.test(n)}}else t&&e.removeAttribute("style");Wr in e&&((!o||t!==n)&&(e[Wr]=s?r.display:""),e[Ts]&&(r.display="none"))}const _r=/\s*!important$/;function qn(e,t,n){if(le(n))n.forEach(r=>qn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))_r.test(n)?e.setProperty(t,n.replace(_r,""),"important"):e.setProperty(t,n);else{const r=yu(e,t);_r.test(n)?e.setProperty(dn(r),n.replace(_r,""),"important"):e[r]=n}}const bi=["Webkit","Moz","ms"],Io={};function yu(e,t){const n=Io[t];if(n)return n;let r=lt(t);if(r!=="filter"&&r in e)return Io[t]=r;r=to(r);for(let o=0;o<bi.length;o++){const s=bi[o]+r;if(s in e)return Io[t]=s}return t}function wu(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&De(r)&&n===r}const gi="http://www.w3.org/1999/xlink";function hi(e,t,n,r,o,s=Tc(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(gi,t.slice(6,t.length)):e.setAttributeNS(gi,t,n):n==null||s&&!ma(n)?e.removeAttribute(t):e.setAttribute(t,s?"":wt(n)?String(n):n)}function xi(e,t,n,r,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?zl(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const i=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(i!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=ma(n):n==null&&i==="string"?(n="",a=!0):i==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(o||t)}function _n(e,t,n,r){e.addEventListener(t,n,r)}function ku(e,t,n,r){e.removeEventListener(t,n,r)}const vi=Symbol("_vei");function zu(e,t,n,r,o=null){const s=e[vi]||(e[vi]={}),a=s[t];if(r&&a)a.value=r;else{const[i,c]=Su(t);if(r){const p=s[t]=Mu(r,o);_n(e,i,p,c)}else a&&(ku(e,i,a,c),s[t]=void 0)}}const _u=/(Once|Passive|Capture)$/,Cu=/^on:?(?:Once|Passive|Capture)$/;function Su(e){let t,n;for(;(n=e.match(_u))&&!Cu.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):dn(e.slice(2)),t]}let Mo=0;const Au=Promise.resolve(),Iu=()=>Mo||(Au.then(()=>Mo=0),Mo=Date.now());function Mu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const o=n.value;if(le(o)){const s=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{s.call(r),r._stopped=!0};const a=o.slice(),i=[r];for(let c=0;c<a.length&&!r._stopped;c++){const p=a[c];p&&xt(p,t,5,i)}}else xt(o,t,5,[r])};return n.value=e,n.attached=Iu(),n}const yi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ru=(e,t,n,r,o,s)=>{const a=o==="svg";t==="class"?gu(e,r,a):t==="style"?vu(e,n,r):Jr(t)?Qr(t)||zu(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tu(e,t,r,a))?(xi(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&hi(e,t,r,a,s,t!=="value")):e._isVueCE&&($u(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!De(r)))?xi(e,lt(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),hi(e,t,r,a))};function Tu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&yi(t)&&me(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return yi(t)&&De(n)?!1:t in e}function $u(e,t){const n=e._def.props;if(!n)return!1;const r=lt(t);return Array.isArray(n)?n.some(o=>lt(o)===r):Object.keys(n).some(o=>lt(o)===r)}const Il=new WeakMap,Ml=new WeakMap,Kr=Symbol("_moveCb"),wi=Symbol("_enterCb"),ns=new WeakMap,Pu=e=>(delete e.props.mode,e),Eu=Pu({name:"TransitionGroup",props:Ne({},Cl,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=fo(),r=Ha();let o,s,a,i;const c=()=>(i===void 0&&(i=o.length>0&&Nu(o[0].el,n.vnode.el,ki(e))),i);return Xa(()=>{if(ns.delete(n),!c()){o=[],a=void 0;return}const p=ki(e);o.forEach(Lu);const u=a&&Bu(a,n.vnode.el);a=void 0,o.forEach(f=>Vu(f,u));const d=o.filter(Ou);ts(n.vnode.el),d.forEach(f=>{const m=f.el,z=m.style;Mt(m,p),z.transform=z.webkitTransform=z.transitionDuration="";const y=m[Kr]=S=>{S&&S.target!==m||(!S||S.propertyName.endsWith("transform"))&&(m.removeEventListener("transitionend",y),m[Kr]=null,Qt(m,p))};m.addEventListener("transitionend",y)}),o=[]}),()=>{const p=Ce(e),u=Sl(p);let d=p.tag||re;if(o=[],i=void 0,s)for(let f=0;f<s.length;f++){const m=s[f];m.el&&m.el instanceof Element&&!m.el[Ts]&&(o.push(m),ln(m,dr(m,u,r,n)),Il.set(m,bo(m.el)))}s=t.default?Ss(t.default()):[];for(let f=0;f<s.length;f++){const m=s[f];m.key!=null&&ln(m,dr(m,u,r,n))}return o.length&&(a=Du(n),ns.set(n,c)),w(d,null,s)}}}),Fu=Eu;function Lu(e){const t=e.el;t[Kr]&&t[Kr](),t[wi]&&t[wi]()}function ki(e){return e.moveClass||`${e.name||"v"}-move`}function Vu(e,t){Ml.set(e,bo(e.el,t))}function Ou(e){const t=Il.get(e),n=Ml.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const s=e.el,a=s.style,i=s.getBoundingClientRect();let c=1,p=1;return s.offsetWidth&&(c=i.width/s.offsetWidth),s.offsetHeight&&(p=i.height/s.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(p)||p===0)&&(p=1),Math.abs(c-1)<.01&&(c=1),Math.abs(p-1)<.01&&(p=1),a.transform=a.webkitTransform=`translate(${r/c}px,${o/p}px)`,a.transitionDuration="0s",e}}function bo(e,t){const n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function Du(e){let t;for(let n=e.parent;n;n=n.parent){const r=ns.get(n);if(r){const o=ju(n.vnode.el,e.vnode.el);o&&(t||(t=[])).push(Ne(bo(o),{item:o,willMove:r}))}}return t}function ju(e,t){const n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function Bu(e,t){const n=e.find(r=>r.willMove()&&r.item.contains(t));return n&&bo(n.item,n)}function Nu(e,t,n){const r=e.cloneNode(),o=e[Pn];o&&o.forEach(i=>{i.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(i=>i&&r.classList.add(i)),r.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(r);const{hasTransform:a}=Al(r);return s.removeChild(r),a}const zi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return le(t)?n=>Tr(t,n):t};function Hu(e){e.target.composing=!0}function _i(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Cr=Symbol("_assign"),Sr=Symbol("_initialValue");function Ro(e,t,n){return t&&(e=e.trim()),n&&(e=hs(e)),e}const $s={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e.parentNode&&(e.type==="text"?e[Sr]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Sr]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Cr]=zi(o);const s=r||o.props&&o.props.type==="number";_n(e,t?"change":"input",a=>{a.target.composing||e[Cr](Ro(e.value,n,s))}),(n||s)&&_n(e,"change",()=>{e.value=Ro(e.value,n,s)}),t||(_n(e,"compositionstart",Hu),_n(e,"compositionend",_i),_n(e,"change",_i))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const o=t??"",s=e[Sr];delete e[Sr],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[Cr](Ro(e.value,n,r)):e.value=o},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:o,number:s}},a){if(e[Cr]=zi(a),e.composing)return;const i=(s||e.type==="number")&&!/^0\d/.test(e.value)?hs(e.value):e.value,c=t??"";if(i===c)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(r&&t===n||o&&e.value.trim()===c)||(e.value=c)}},Uu=["ctrl","shift","alt","meta"],Gu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Uu.some(n=>e[`${n}Key`]&&!t.includes(n))},Wt=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((o,...s)=>{for(let a=0;a<t.length;a++){const i=Gu[t[a]];if(i&&i(o,t))return}return e(o,...s)}))},qu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ci=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(o=>{if(!("key"in o))return;const s=dn(o.key);if(t.some(a=>a===s||qu[a]===s))return e(o)}))},Wu=Ne({patchProp:Ru},pu);let Si;function Ku(){return Si||(Si=qd(Wu))}const Xu=((...e)=>{const t=Ku().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=Zu(r);if(!o)return;const s=t._component;!me(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=n(o,!1,Yu(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t});function Yu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Zu(e){return De(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ar={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:r,iconNode:o,name:s,class:a,...i},{slots:c})=>$n("svg",{...Ar,width:e||Ar.width,height:e||Ar.height,stroke:r||Ar.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${Ju(s??"icon")}`],...i},[...o.map(p=>$n(...p)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=(e,t)=>(n,{slots:r})=>$n(Qu,{...n,iconNode:t,name:e},r);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=oe("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=oe("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=oe("ArrowUpIcon",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=oe("AtSignIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=oe("BellIcon",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=oe("BookmarkIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=oe("BotIcon",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=oe("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=oe("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=oe("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=oe("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=oe("ChevronsLeftRightIcon",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=oe("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=oe("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=oe("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=oe("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=oe("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=oe("CompassIcon",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=oe("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=oe("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=oe("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=oe("EllipsisIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=oe("EyeOffIcon",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=oe("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=oe("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=oe("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=oe("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=oe("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=oe("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=oe("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=oe("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=oe("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=oe("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=oe("PaperclipIcon",[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=oe("PinIcon",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=oe("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=oe("RepeatIcon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=oe("RocketIcon",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=oe("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=oe("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=oe("SettingsIcon",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=oe("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=oe("SlidersHorizontalIcon",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=oe("SlidersVerticalIcon",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=oe("SmilePlusIcon",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=oe("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=oe("SquareIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=oe("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=oe("TagIcon",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=oe("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=oe("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=oe("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=oe("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=oe("WrenchIcon",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=oe("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=oe("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),_p=ce({__name:"ThemeToggle",setup(e){const t=D(!0);function n(){t.value=!t.value,t.value?(document.documentElement.classList.add("dark"),localStorage.setItem("aura-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("aura-theme","light"))}return We(()=>{const r=localStorage.getItem("aura-theme");r?t.value=r==="dark":t.value=window.matchMedia("(prefers-color-scheme: dark)").matches,t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),(r,o)=>(g(),v("button",{type:"button",class:"relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"切换亮色 / 暗色模式",onClick:n},[t.value?(g(),de(A(wp),{key:0,class:"h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400"})):(g(),de(A(cp),{key:1,class:"h-4 w-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-indigo-600"}))]))}}),is=[{id:"forms-inputs",name:"表单与高阶输入套件",englishName:"Forms & Advanced Inputs",description:"Figma 拖拽数值微调、实时密码学强度仪表盘、金融级自适应金额与智能体 @ 呼出输入框",badgeColor:"text-amber-500 bg-amber-500/10 border-amber-500/20",iconName:"Sliders"},{id:"tactile-actions",name:"触觉反馈与原子操作套件",englishName:"Tactile & Actions Suite",description:"长按蓄力物理确认、原地渐变二次确认、物理微压与矢量形变操作矩阵",badgeColor:"text-rose-500 bg-rose-500/10 border-rose-500/20",iconName:"Zap"},{id:"ai-native",name:"AI 原生与智能体套件",englishName:"AI & Agent Suite",description:"面向大模型工作流、思考链路、代码终端与指令交互的原生动效矩阵",badgeColor:"text-sky-500 bg-sky-500/10 border-sky-500/20",iconName:"Bot"},{id:"interactive-nav",name:"交互与高阶导航套件",englishName:"Interactive & Navigation",description:"以余弦物理、流体胶囊指示器与视口裁切驱动的极佳手感交互",badgeColor:"text-blue-500 bg-blue-500/10 border-blue-500/20",iconName:"Compass"},{id:"space-3d",name:"空间与 3D 纵深套件",englishName:"3D Space & Atmosphere",description:"同心公转轨道、赛博网格、极光破晓天灯与粒子微光氛围",badgeColor:"text-indigo-500 bg-indigo-500/10 border-indigo-500/20",iconName:"Globe"},{id:"borders-cards",name:"流光卡片与微光边框套件",englishName:"Borders & Bento Cards",description:"沿着圆角边框流动的渐变光束与多维信息科技网格便当盒",badgeColor:"text-purple-500 bg-purple-500/10 border-purple-500/20",iconName:"Layers"},{id:"kinetic-typography",name:"文字与动态排版套件",englishName:"Kinetic Typography",description:"连续金属扫光、平滑毫秒数值翻滚与无限无缝平滑跑马灯",badgeColor:"text-emerald-500 bg-emerald-500/10 border-emerald-500/20",iconName:"Sparkles"}],rn=[{id:"border-beam",name:"BorderBeam",title:"Border Beam（跑马流光渐变边框）",category:"Effect",suiteId:"borders-cards",description:"沿着容器圆角边框匀速流动的彩色流光光束。大模型生成状态、VIP 特权卡片、核心功能高亮的科技感标配。",componentFilename:"BorderBeam.vue",componentCode:`<script setup lang="ts">
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
        class="aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-1"
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
.popover-shadow {
  box-shadow: var(--shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 24px 38px -8px rgba(0, 0, 0, 0.04));
}
:global(.dark) .popover-shadow {
  box-shadow: var(--shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.5), 0 12px 24px -4px rgba(0, 0, 0, 0.6), 0 24px 48px -8px rgba(0, 0, 0, 0.8));
}

button:focus {
  outline: none !important;
}

.split-menu-enter-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: top left;
}
.split-menu-leave-active {
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1),
              transform 0.15s cubic-bezier(0.4, 0, 1, 1);
  transform-origin: top left;
}
.split-menu-enter-from,
.split-menu-leave-to {
  opacity: 0;
  transform: scale(0.96) translateY(-4px);
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
</template>`,propsList:[{name:"items",type:"ReactionItem[]",default:"[...]",description:"表情项列表（id, emoji, count, active）"},{name:"allowAdd",type:"boolean",default:"true",description:"是否显示追加表情按钮"}]},{id:"scrub-input",name:"Scrub Input",title:"Figma 风格水平拖拽微调输入",category:"Form",suiteId:"forms-inputs",description:"对标 Figma / Blender 的水平滑动数值调节器。支持按住拖拽左右平滑增减数值、Shift 10x 加速与双击键盘直接编辑。",componentFilename:"ScrubInput.vue",componentCode:`<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronsLeftRight } from 'lucide-vue-next'

interface ScrubInputProps {
  modelValue: number
  label?: string
  min?: number
  max?: number
  step?: number
  sensitivity?: number
  suffix?: string
  class?: string
}

const props = withDefaults(defineProps<ScrubInputProps>(), {
  min: 0,
  max: 100,
  step: 1,
  sensitivity: 1,
  suffix: 'px',
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: number): void
  (e: 'change', val: number): void
}>()

const isDragging = ref(false)
const isEditing = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)
const tempInputValue = ref(String(props.modelValue))

let startX = 0
let startVal = 0

function clamp(val: number) {
  let bounded = val
  if (props.min !== undefined) bounded = Math.max(props.min, bounded)
  if (props.max !== undefined) bounded = Math.min(props.max, bounded)
  return Math.round(bounded * 100) / 100
}

function handleMouseDown(e: MouseEvent) {
  if (isEditing.value) return
  isDragging.value = true
  startX = e.clientX
  startVal = props.modelValue

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
  document.body.style.cursor = 'ew-resize'
  document.body.style.userSelect = 'none'
}

function handleMouseMove(e: MouseEvent) {
  if (!isDragging.value) return
  const deltaX = e.clientX - startX

  let multiplier = 1
  if (e.shiftKey) multiplier = 10
  if (e.altKey) multiplier = 0.1

  const change = Math.round((deltaX / (5 / props.sensitivity)) * multiplier) * props.step
  const nextVal = clamp(startVal + change)

  if (nextVal !== props.modelValue) {
    emit('update:modelValue', nextVal)
  }
}

function handleMouseUp() {
  if (!isDragging.value) return
  isDragging.value = false
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
  document.body.style.cursor = ''
  document.body.style.userSelect = ''
  emit('change', props.modelValue)
}

function startEditing() {
  isEditing.value = true
  tempInputValue.value = String(props.modelValue)
  setTimeout(() => {
    inputRef.value?.focus()
    inputRef.value?.select()
  }, 20)
}

function commitEdit() {
  isEditing.value = false
  const parsed = parseFloat(tempInputValue.value)
  if (!isNaN(parsed)) {
    const nextVal = clamp(parsed)
    emit('update:modelValue', nextVal)
    emit('change', nextVal)
  }
}

const percentage = computed(() => {
  const range = props.max - props.min
  if (range <= 0) return 0
  return Math.min(Math.max(((props.modelValue - props.min) / range) * 100, 0), 100)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
  document.body.style.cursor = ''
  document.body.style.userSelect = ''
})
<\/script>

<template>
  <div
    :class="
      cn(
        'group relative inline-flex h-9 items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900 select-none overflow-hidden',
        isDragging && 'border-blue-500 ring-2 ring-blue-500/20',
        props.class
      )
    "
  >
    <div
      class="pointer-events-none absolute inset-y-0 left-0 bg-blue-500/10 dark:bg-blue-500/15 transition-[width] ease-out duration-75"
      :style="{ width: \`\${percentage}%\` }"
    />
    <div
      @mousedown="handleMouseDown"
      class="flex h-full items-center gap-1 px-2.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-ew-resize transition-colors"
      title="按住左右水平拖拽微调数值 (Shift 加速 10x, Alt 精细 0.1x)"
    >
      <ChevronsLeftRight class="h-3.5 w-3.5" />
      <span v-if="props.label" class="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
        {{ props.label }}
      </span>
    </div>
    <div class="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
    <div class="relative flex h-full flex-1 items-center px-2.5 min-w-[70px]">
      <input
        v-if="isEditing"
        ref="inputRef"
        v-model="tempInputValue"
        type="text"
        @blur="commitEdit"
        @keydown.enter="commitEdit"
        @keydown.esc="isEditing = false"
        class="w-full bg-transparent p-0 text-right font-mono text-xs font-bold text-zinc-900 outline-none focus:outline-none dark:text-zinc-100"
      />
      <div
        v-else
        @dblclick="startEditing"
        @mousedown="handleMouseDown"
        class="flex w-full items-center justify-end gap-0.5 cursor-ew-resize"
        title="双击直接键入数值，或按住水平拖动"
      >
        <span class="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100">
          {{ props.modelValue }}
        </span>
        <span v-if="props.suffix" class="font-mono text-[10px] text-zinc-400">
          {{ props.suffix }}
        </span>
      </div>
    </div>
  </div>
</template>`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import ScrubInput from '@/components/ui/ScrubInput.vue'

const width = ref(320)
const blur = ref(16)
<\/script>

<template>
  <div class="flex items-center gap-4">
    <ScrubInput v-model="width" label="W" :min="100" :max="1200" suffix="px" />
    <ScrubInput v-model="blur" label="Blur" :min="0" :max="64" suffix="px" />
  </div>
</template>`,propsList:[{name:"modelValue",type:"number",default:"0",description:"双向绑定数值"},{name:"label",type:"string",default:"''",description:"左侧参数标签 (如 W, H, X, Y)"},{name:"min",type:"number",default:"0",description:"最小值限制"},{name:"max",type:"number",default:"100",description:"最大值限制"},{name:"step",type:"number",default:"1",description:"增减步长"},{name:"suffix",type:"string",default:"'px'",description:"单位后缀"}]},{id:"password-strength",name:"Password Strength",title:"密码学强度动态计量仪表盘",category:"Form",suiteId:"forms-inputs",description:"多维密码安全规则动态校验器。具备 4 档色彩平滑过渡、规则清单实时打勾完成动效与明暗文无缝切换。",componentFilename:"PasswordStrength.vue",componentCode:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { Eye, EyeOff, Check, X, ShieldCheck } from 'lucide-vue-next'

interface PasswordStrengthProps {
  modelValue?: string
  placeholder?: string
  showRules?: boolean
  class?: string
}

const props = withDefaults(defineProps<PasswordStrengthProps>(), {
  modelValue: '',
  placeholder: '请输入安全密码...',
  showRules: true,
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()

const showPassword = ref(false)

const rules = computed(() => {
  const pwd = props.modelValue || ''
  return [
    { id: 'length', label: '至少 8 个字符', valid: pwd.length >= 8 },
    { id: 'lowercase', label: '包含小写英文字母 (a-z)', valid: /[a-z]/.test(pwd) },
    { id: 'uppercase', label: '包含大写英文字母 (A-Z)', valid: /[A-Z]/.test(pwd) },
    { id: 'number', label: '包含至少 1 个数字 (0-9)', valid: /d/.test(pwd) },
    { id: 'special', label: '包含特殊符号 (!@#$%^&*)', valid: /[^A-Za-z0-9]/.test(pwd) },
  ]
})

const validCount = computed(() => rules.value.filter((r) => r.valid).length)

const strengthTier = computed(() => {
  if (!props.modelValue) return { score: 0, text: '未输入', color: 'bg-zinc-200 dark:bg-zinc-800', textColor: 'text-zinc-400' }
  const count = validCount.value
  if (count <= 2) {
    return { score: 1, text: '较弱 (Weak)', color: 'bg-rose-500', textColor: 'text-rose-500' }
  } else if (count === 3) {
    return { score: 2, text: '中等 (Fair)', color: 'bg-amber-500', textColor: 'text-amber-500' }
  } else if (count === 4) {
    return { score: 3, text: '良好 (Good)', color: 'bg-sky-500', textColor: 'text-sky-500' }
  } else {
    return { score: 4, text: '极高安全 (Strong)', color: 'bg-emerald-500', textColor: 'text-emerald-500' }
  }
})

function handleInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  emit('update:modelValue', val)
}
<\/script>

<template>
  <div :class="cn('w-full max-w-sm space-y-3 select-none', props.class)">
    <div class="relative flex items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900">
      <input
        :type="showPassword ? 'text' : 'password'"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        @input="handleInput"
        class="h-10 w-full bg-transparent px-3.5 pr-10 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"
      />
      <button
        type="button"
        @click="showPassword = !showPassword"
        class="absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer"
        tabindex="-1"
      >
        <EyeOff v-if="showPassword" class="h-4 w-4" />
        <Eye v-else class="h-4 w-4" />
      </button>
    </div>

    <div class="space-y-1.5">
      <div class="grid grid-cols-4 gap-1.5">
        <div
          v-for="i in 4"
          :key="i"
          class="h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300"
        >
          <div
            :class="[
              'h-full transition-all duration-300 ease-out',
              i <= strengthTier.score ? strengthTier.color : 'w-0',
            ]"
            :style="{ width: i <= strengthTier.score ? '100%' : '0%' }"
          />
        </div>
      </div>

      <div class="flex items-center justify-between text-[11px] font-mono">
        <span class="text-zinc-400 flex items-center gap-1">
          <ShieldCheck class="h-3.5 w-3.5" />
          <span>安全等级评估</span>
        </span>
        <span :class="['font-bold transition-colors duration-200', strengthTier.textColor]">
          {{ strengthTier.text }}
        </span>
      </div>
    </div>

    <div
      v-if="props.showRules"
      class="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-3 text-xs space-y-1.5 dark:border-zinc-800/80 dark:bg-zinc-950/40"
    >
      <div
        v-for="rule in rules"
        :key="rule.id"
        class="flex items-center gap-2 transition-colors duration-200"
        :class="rule.valid ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-zinc-400'"
      >
        <div
          :class="[
            'flex h-4 w-4 items-center justify-center rounded-full transition-all duration-200',
            rule.valid ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-400',
          ]"
        >
          <Check v-if="rule.valid" class="h-2.5 w-2.5 animate-bounce" />
          <X v-else class="h-2.5 w-2.5 opacity-50" />
        </div>
        <span>{{ rule.label }}</span>
      </div>
    </div>
  </div>
</template>`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import PasswordStrength from '@/components/ui/PasswordStrength.vue'

const password = ref('')
<\/script>

<template>
  <div class="max-w-sm">
    <PasswordStrength v-model="password" />
  </div>
</template>`,propsList:[{name:"modelValue",type:"string",default:"''",description:"输入的密码字符串"},{name:"placeholder",type:"string",default:"'请输入安全密码...'",description:"输入框占位符"},{name:"showRules",type:"boolean",default:"true",description:"是否展示规则核对清单"}]},{id:"money-input",name:"Money Input",title:"金融级金额自适应缩放输入框",category:"Form",suiteId:"forms-inputs",description:"金融与支付场景核心金额输入器。具备多国货币切换、动态千分位格式化、输入超长时字体自动平滑缩放与快捷面额填充。",componentFilename:"MoneyInput.vue",componentCode:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'

interface CurrencyItem {
  code: string
  symbol: string
  label: string
}

interface MoneyInputProps {
  modelValue?: number
  currency?: string
  currencies?: CurrencyItem[]
  presets?: number[]
  placeholder?: string
  class?: string
}

const props = withDefaults(defineProps<MoneyInputProps>(), {
  modelValue: 0,
  currency: 'CNY',
  currencies: () => [
    { code: 'CNY', symbol: '¥', label: '人民币' },
    { code: 'USD', symbol: '$', label: '美元' },
    { code: 'EUR', symbol: '€', label: '欧元' },
    { code: 'GBP', symbol: '£', label: '英镑' },
  ],
  presets: () => [100, 500, 1000, 5000],
  placeholder: '0.00',
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: number): void
  (e: 'update:currency', code: string): void
}>()

const activeCurrency = ref(props.currency)

const currentSymbol = computed(() => {
  return props.currencies.find((c) => c.code === activeCurrency.value)?.symbol || '¥'
})

function formatNumber(num: number): string {
  if (num === 0) return ''
  return num.toLocaleString('en-US', { maximumFractionDigits: 2 })
}

const displayValue = computed(() => formatNumber(props.modelValue))

const fontSizeClass = computed(() => {
  const len = displayValue.value.length
  if (len > 12) return 'text-xl'
  if (len > 8) return 'text-2xl'
  return 'text-3xl sm:text-4xl'
})

function handleInput(e: Event) {
  const input = (e.target as HTMLInputElement).value
  const sanitized = input.replace(/[^0-9.]/g, '')
  const parsed = parseFloat(sanitized)
  emit('update:modelValue', isNaN(parsed) ? 0 : parsed)
}

function addPreset(amount: number) {
  emit('update:modelValue', props.modelValue + amount)
}

function clearAmount() {
  emit('update:modelValue', 0)
}

function switchCurrency(code: string) {
  activeCurrency.value = code
  emit('update:currency', code)
}
<\/script>

<template>
  <div :class="cn('w-full max-w-md rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 select-none space-y-4', props.class)">
    <div class="flex items-center justify-between">
      <span class="text-xs font-semibold text-zinc-500 dark:text-zinc-400">转账 / 充值金额</span>
      <div class="flex items-center gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800">
        <button
          v-for="c in props.currencies"
          :key="c.code"
          type="button"
          @click="switchCurrency(c.code)"
          :class="[
            'rounded-md px-2 py-0.5 text-[11px] font-bold font-mono transition-colors cursor-pointer',
            activeCurrency === c.code
              ? 'bg-white text-zinc-900 shadow-2xs dark:bg-zinc-700 dark:text-white'
              : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
          ]"
        >
          {{ c.code }}
        </button>
      </div>
    </div>

    <div class="relative flex items-baseline border-b border-zinc-200/90 pb-3 transition-colors focus-within:border-blue-500 dark:border-zinc-800">
      <span class="font-mono text-2xl font-bold text-zinc-400 mr-2 shrink-0">
        {{ currentSymbol }}
      </span>
      <input
        type="text"
        inputmode="decimal"
        :value="displayValue"
        :placeholder="props.placeholder"
        @input="handleInput"
        :class="[
          'w-full bg-transparent p-0 font-mono font-extrabold tracking-tight text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 transition-all duration-200',
          fontSizeClass,
        ]"
      />
      <button
        v-if="props.modelValue > 0"
        type="button"
        @click="clearAmount"
        class="ml-2 rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors cursor-pointer shrink-0"
      >
        清零
      </button>
    </div>

    <div class="flex flex-wrap items-center gap-2 pt-1">
      <span class="text-[11px] text-zinc-400">快捷填充:</span>
      <button
        v-for="amt in props.presets"
        :key="amt"
        type="button"
        @click="addPreset(amt)"
        class="rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-2.5 py-1 font-mono text-xs font-semibold text-zinc-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-400 dark:hover:bg-blue-950/40 dark:hover:text-blue-400 transition-all active:scale-95 cursor-pointer"
      >
        +{{ currentSymbol }}{{ amt }}
      </button>
    </div>
  </div>
</template>`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import MoneyInput from '@/components/ui/MoneyInput.vue'

const amount = ref(2500)
const currency = ref('CNY')
<\/script>

<template>
  <MoneyInput v-model="amount" v-model:currency="currency" />
</template>`,propsList:[{name:"modelValue",type:"number",default:"0",description:"原始数值金额"},{name:"currency",type:"string",default:"'CNY'",description:"当前选择币种代码"},{name:"presets",type:"number[]",default:"[100, 500, 1000, 5000]",description:"快捷填充选项"}]},{id:"phone-input",name:"Phone Input",title:"国际手机号国旗格式化输入框",category:"Form",suiteId:"forms-inputs",description:"多国区号下拉选择与自适应分段格式化手机号输入器。支持中国、美国、英国、日本等格式自适应与合法性校验。",componentFilename:"PhoneInput.vue",componentCode:`<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronDown, Check } from 'lucide-vue-next'

export interface CountryItem {
  code: string
  dialCode: string
  name: string
  flag: string
  format: string
}

interface PhoneInputProps {
  modelValue?: string
  countryCode?: string
  countries?: CountryItem[]
  placeholder?: string
  class?: string
}

const defaultCountries: CountryItem[] = [
  { code: 'CN', dialCode: '+86', name: '中国', flag: '🇨🇳', format: '### #### ####' },
  { code: 'US', dialCode: '+1', name: '美国', flag: '🇺🇸', format: '(###) ###-####' },
  { code: 'GB', dialCode: '+44', name: '英国', flag: '🇬🇧', format: '#### ######' },
  { code: 'JP', dialCode: '+81', name: '日本', flag: '🇯🇵', format: '###-####-####' },
  { code: 'DE', dialCode: '+49', name: '德国', flag: '🇩🇪', format: '#### #######' },
  { code: 'SG', dialCode: '+65', name: '新加坡', flag: '🇸🇬', format: '#### ####' },
]

const props = withDefaults(defineProps<PhoneInputProps>(), {
  modelValue: '',
  countryCode: 'CN',
  countries: () => defaultCountries,
  placeholder: '请输入手机号码...',
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'update:countryCode', code: string): void
}>()

const activeCountry = ref(
  props.countries.find((c) => c.code === props.countryCode) || props.countries[0]
)

const isOpen = ref(false)
const containerRef = ref<HTMLDivElement | null>(null)

function formatPhoneNumber(raw: string, format: string) {
  const digits = raw.replace(/\\D/g, '')
  let formatted = ''
  let digitIndex = 0

  for (let i = 0; i < format.length && digitIndex < digits.length; i++) {
    if (format[i] === '#') {
      formatted += digits[digitIndex]
      digitIndex++
    } else {
      formatted += format[i]
    }
  }

  if (digitIndex < digits.length) {
    formatted += ' ' + digits.slice(digitIndex)
  }

  return formatted
}

function handleInput(e: Event) {
  const input = (e.target as HTMLInputElement).value
  const digits = input.replace(/\\D/g, '')
  const formatted = formatPhoneNumber(digits, activeCountry.value.format)
  emit('update:modelValue', formatted)
}

function selectCountry(country: CountryItem) {
  activeCountry.value = country
  isOpen.value = false
  emit('update:countryCode', country.code)
  const digits = props.modelValue.replace(/\\D/g, '')
  emit('update:modelValue', formatPhoneNumber(digits, country.format))
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

const isValid = computed(() => {
  const digits = props.modelValue.replace(/\\D/g, '')
  return digits.length >= 8 && digits.length <= 15
})
<\/script>

<template>
  <div ref="containerRef" :class="cn('relative w-full max-w-sm select-none', props.class)">
    <div
      :class="[
        'flex h-10 items-center overflow-hidden rounded-xl border bg-white shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:bg-zinc-900',
        props.modelValue && isValid ? 'border-emerald-500/50' : 'border-zinc-200/90 dark:border-zinc-800',
      ]"
    >
      <button
        type="button"
        @click.stop="isOpen = !isOpen"
        class="flex h-full items-center gap-1.5 border-r border-zinc-200/80 bg-zinc-50/70 px-3 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0 outline-none focus:outline-none ring-0"
      >
        <span class="text-base leading-none">{{ activeCountry.flag }}</span>
        <span class="font-mono text-zinc-900 dark:text-zinc-100">{{ activeCountry.dialCode }}</span>
        <ChevronDown
          :class="[
            'h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]',
            isOpen && 'rotate-180',
          ]"
        />
      </button>

      <div class="relative flex flex-1 items-center px-3">
        <input
          type="tel"
          :value="props.modelValue"
          :placeholder="props.placeholder"
          @input="handleInput"
          class="w-full bg-transparent font-mono text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"
        />
        <div v-if="props.modelValue && isValid" class="ml-1 text-emerald-500">
          <Check class="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </div>

    <transition name="phone-menu">
      <div
        v-if="isOpen"
        class="aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 max-h-56 overflow-y-auto space-y-0.5"
      >
        <button
          v-for="country in props.countries"
          :key="country.code"
          type="button"
          @click="selectCountry(country)"
          class="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <span class="text-base">{{ country.flag }}</span>
            <span class="font-medium text-zinc-800 dark:text-zinc-200">{{ country.name }}</span>
          </div>
          <span class="font-mono text-[11px] font-bold text-zinc-400">{{ country.dialCode }}</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.popover-shadow {
  box-shadow: var(--shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 24px 38px -8px rgba(0, 0, 0, 0.04));
}
:global(.dark) .popover-shadow {
  box-shadow: var(--shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.5), 0 12px 24px -4px rgba(0, 0, 0, 0.6), 0 24px 48px -8px rgba(0, 0, 0, 0.8));
}

button:focus {
  outline: none !important;
}

.phone-menu-enter-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: top left;
}
.phone-menu-leave-active {
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1),
              transform 0.15s cubic-bezier(0.4, 0, 1, 1);
  transform-origin: top left;
}
.phone-menu-enter-from,
.phone-menu-leave-to {
  opacity: 0;
  transform: scale(0.96) translateY(-4px);
}
</style>`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import PhoneInput from '@/components/ui/PhoneInput.vue'

const phone = ref('')
const country = ref('CN')
<\/script>

<template>
  <PhoneInput v-model="phone" v-model:country-code="country" />
</template>`,propsList:[{name:"modelValue",type:"string",default:"''",description:"格式化后的手机号码"},{name:"countryCode",type:"string",default:"'CN'",description:"选中的国家 ISO 代码"},{name:"placeholder",type:"string",default:"'请输入手机号码...'",description:"占位文本"}]},{id:"tag-input",name:"Tag Input",title:"弹性标签胶囊动态输入器",category:"Form",suiteId:"forms-inputs",description:"标签化输入控件。支持回车/逗号生成胶囊、退格键自适应删除末尾、标签平滑缩放进入/退场动效与最大标签数约束。",componentFilename:"TagInput.vue",componentCode:`<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { X, Tag } from 'lucide-vue-next'

interface TagInputProps {
  modelValue?: string[]
  placeholder?: string
  maxTags?: number
  allowDuplicates?: boolean
  class?: string
}

const props = withDefaults(defineProps<TagInputProps>(), {
  modelValue: () => ['Vue 3.5', 'TailwindCSS', 'Motion UI'],
  placeholder: '输入标签后按回车添加...',
  maxTags: 8,
  allowDuplicates: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', tags: string[]): void
  (e: 'add', tag: string): void
  (e: 'remove', tag: string): void
}>()

const inputValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

function addTag() {
  const trimmed = inputValue.value.trim()
  if (!trimmed) return

  if (props.maxTags && props.modelValue.length >= props.maxTags) return

  if (!props.allowDuplicates && props.modelValue.includes(trimmed)) {
    inputValue.value = ''
    return
  }

  const updated = [...props.modelValue, trimmed]
  emit('update:modelValue', updated)
  emit('add', trimmed)
  inputValue.value = ''
}

function removeTag(index: number) {
  const removed = props.modelValue[index]
  const updated = props.modelValue.filter((_, i) => i !== index)
  emit('update:modelValue', updated)
  emit('remove', removed)
}

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault()
    addTag()
  } else if (e.key === 'Backspace' && !inputValue.value && props.modelValue.length > 0) {
    removeTag(props.modelValue.length - 1)
  }
}

function focusInput() {
  inputRef.value?.focus()
}
<\/script>

<template>
  <div
    @click="focusInput"
    :class="
      cn(
        'group flex min-h-10 w-full max-w-md flex-wrap items-center gap-1.5 rounded-xl border border-zinc-200/90 bg-white p-2 shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900 cursor-text select-none',
        props.class
      )
    "
  >
    <div class="flex items-center pl-1 text-zinc-400">
      <Tag class="h-3.5 w-3.5" />
    </div>

    <TransitionGroup name="tag-list">
      <div
        v-for="(tag, idx) in props.modelValue"
        :key="tag"
        class="inline-flex items-center gap-1 rounded-lg border border-blue-500/20 bg-blue-50/70 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/60 dark:text-blue-300 transition-all duration-200"
      >
        <span>{{ tag }}</span>
        <button
          type="button"
          @click.stop="removeTag(idx)"
          class="flex h-3.5 w-3.5 items-center justify-center rounded-full hover:bg-blue-600/20 dark:hover:bg-blue-400/20 transition-colors cursor-pointer"
        >
          <X class="h-2.5 w-2.5" />
        </button>
      </div>
    </TransitionGroup>

    <input
      ref="inputRef"
      v-model="inputValue"
      type="text"
      :disabled="props.maxTags ? props.modelValue.length >= props.maxTags : false"
      :placeholder="props.modelValue.length === 0 ? props.placeholder : (props.maxTags && props.modelValue.length >= props.maxTags ? '已达上限' : '添加更多...')"
      @keydown="handleKeyDown"
      class="min-w-[80px] flex-1 bg-transparent px-1.5 py-0.5 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"
    />

    <div
      v-if="props.maxTags"
      class="ml-auto pr-1 font-mono text-[10px] text-zinc-400"
    >
      {{ props.modelValue.length }}/{{ props.maxTags }}
    </div>
  </div>
</template>

<style scoped>
.tag-list-enter-active,
.tag-list-leave-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.tag-list-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.tag-list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
</style>`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import TagInput from '@/components/ui/TagInput.vue'

const tags = ref(['DeepSeek', 'Vue3', 'Tailwind', 'Antigravity'])
<\/script>

<template>
  <TagInput v-model="tags" :max-tags="6" />
</template>`,propsList:[{name:"modelValue",type:"string[]",default:"[]",description:"双向绑定的标签字符串数组"},{name:"placeholder",type:"string",default:"'输入标签后按回车添加...'",description:"输入框占位符"},{name:"maxTags",type:"number",default:"8",description:"最大允许添加的标签数量"},{name:"allowDuplicates",type:"boolean",default:"false",description:"是否允许重复标签"}]},{id:"mention-input",name:"Mention Input",title:"@ 协作成员与智能体呼出输入框",category:"Form",suiteId:"forms-inputs",description:"现代协作与 AI Agent 交互输入框。键入 @ 实时呼出成员 / Agent 候选列表，支持键盘上下光标漫游与精确高亮注入。",componentFilename:"MentionInput.vue",componentCode:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { AtSign, Bot } from 'lucide-vue-next'

export interface MentionUser {
  id: string
  name: string
  handle: string
  role?: string
  avatar?: string
  isBot?: boolean
}

interface MentionInputProps {
  modelValue?: string
  placeholder?: string
  users?: MentionUser[]
  class?: string
}

const defaultUsers: MentionUser[] = [
  { id: '1', name: '左岚 (Zuǒ Lán)', handle: 'zuolan', role: '全栈架构 Agent', isBot: true },
  { id: '2', name: 'Aura Motion', handle: 'auramotion', role: '视觉动效引擎', isBot: true },
  { id: '3', name: 'Alex Rivera', handle: 'alex', role: '前端技术专家', isBot: false },
  { id: '4', name: 'Elena Rostova', handle: 'elena', role: 'UI 设计专家', isBot: false },
  { id: '5', name: 'Devin AI', handle: 'devin', role: '代码重构 Agent', isBot: true },
]

const props = withDefaults(defineProps<MentionInputProps>(), {
  modelValue: '',
  placeholder: '输入内容，键入 @ 可呼出团队成员或智能体...',
  users: () => defaultUsers,
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'mention', user: MentionUser): void
}>()

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const isMenuOpen = ref(false)
const mentionQuery = ref('')
const selectedIndex = ref(0)

const filteredUsers = computed(() => {
  const q = mentionQuery.value.toLowerCase()
  if (!q) return props.users
  return props.users.filter(
    (u) => u.name.toLowerCase().includes(q) || u.handle.toLowerCase().includes(q)
  )
})

function handleInput(e: Event) {
  const target = e.target as HTMLTextAreaElement
  const val = target.value
  emit('update:modelValue', val)

  const cursor = target.selectionStart || 0
  const textBeforeCursor = val.slice(0, cursor)
  const lastAt = textBeforeCursor.lastIndexOf('@')

  if (lastAt !== -1) {
    const query = textBeforeCursor.slice(lastAt + 1)
    if (!query.includes(' ') && !query.includes('\\n')) {
      mentionQuery.value = query
      isMenuOpen.value = true
      selectedIndex.value = 0
      return
    }
  }

  isMenuOpen.value = false
}

function selectUser(user: MentionUser) {
  const textarea = textareaRef.value
  if (!textarea) return

  const val = props.modelValue
  const cursor = textarea.selectionStart || 0
  const textBeforeCursor = val.slice(0, cursor)
  const textAfterCursor = val.slice(cursor)
  const lastAt = textBeforeCursor.lastIndexOf('@')

  if (lastAt !== -1) {
    const newText = textBeforeCursor.slice(0, lastAt) + \`@\${user.name} \` + textAfterCursor
    emit('update:modelValue', newText)
    emit('mention', user)
    isMenuOpen.value = false

    setTimeout(() => {
      textarea.focus()
      const newCursor = lastAt + user.name.length + 2
      textarea.setSelectionRange(newCursor, newCursor)
    }, 20)
  }
}

function handleKeyDown(e: KeyboardEvent) {
  if (!isMenuOpen.value || filteredUsers.value.length === 0) return

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selectedIndex.value = (selectedIndex.value + 1) % filteredUsers.value.length
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    selectedIndex.value =
      (selectedIndex.value - 1 + filteredUsers.value.length) % filteredUsers.value.length
  } else if (e.key === 'Enter' || e.key === 'Tab') {
    e.preventDefault()
    selectUser(filteredUsers.value[selectedIndex.value])
  } else if (e.key === 'Escape') {
    isMenuOpen.value = false
  }
}
<\/script>

<template>
  <div :class="cn('relative w-full max-w-lg select-none', props.class)">
    <div class="relative flex flex-col rounded-2xl border border-zinc-200/90 bg-white p-3 shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900">
      <textarea
        ref="textareaRef"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        rows="3"
        @input="handleInput"
        @keydown="handleKeyDown"
        class="w-full resize-none bg-transparent text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"
      />

      <div class="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
        <div class="flex items-center gap-1 text-[11px] text-zinc-400">
          <AtSign class="h-3.5 w-3.5 text-blue-500" />
          <span>输入 @ 呼出协作成员 / Agent</span>
        </div>
        <span class="font-mono text-[10px] text-zinc-400">
          {{ props.modelValue.length }} 字
        </span>
      </div>
    </div>

    <transition name="mention-pop">
      <div
        v-if="isMenuOpen && filteredUsers.length > 0"
        class="aura-popover popover-shadow absolute bottom-full left-0 mb-2 w-72 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-0.5"
      >
        <div class="px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
          可选成员与智能体 ({{ filteredUsers.length }})
        </div>

        <button
          v-for="(user, idx) in filteredUsers"
          :key="user.id"
          type="button"
          @click="selectUser(user)"
          @mouseenter="selectedIndex = idx"
          :class="[
            'flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors cursor-pointer',
            selectedIndex === idx
              ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
              : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200',
          ]"
        >
          <div
            :class="[
              'flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white shrink-0',
              user.isBot
                ? 'bg-gradient-to-tr from-blue-600 to-indigo-500'
                : 'bg-zinc-700 dark:bg-zinc-600',
            ]"
          >
            <Bot v-if="user.isBot" class="h-4 w-4" />
            <span v-else>{{ user.name.charAt(0) }}</span>
          </div>

          <div class="flex flex-1 flex-col overflow-hidden">
            <div class="flex items-center gap-1.5">
              <span class="truncate text-xs font-semibold">{{ user.name }}</span>
              <span v-if="user.isBot" class="rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                AI
              </span>
            </div>
            <span class="truncate text-[10px] text-zinc-400">@{{ user.handle }} · {{ user.role }}</span>
          </div>
        </button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.popover-shadow {
  box-shadow: var(--shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 24px 38px -8px rgba(0, 0, 0, 0.04));
}
:global(.dark) .popover-shadow {
  box-shadow: var(--shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.5), 0 12px 24px -4px rgba(0, 0, 0, 0.6), 0 24px 48px -8px rgba(0, 0, 0, 0.8));
}

button:focus,
textarea:focus {
  outline: none !important;
}

.mention-pop-enter-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: bottom left;
}
.mention-pop-leave-active {
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1),
              transform 0.15s cubic-bezier(0.4, 0, 1, 1);
  transform-origin: bottom left;
}
.mention-pop-enter-from,
.mention-pop-leave-to {
  opacity: 0;
  transform: scale(0.96) translateY(4px);
}
</style>`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import MentionInput from '@/components/ui/MentionInput.vue'

const message = ref('')
<\/script>

<template>
  <MentionInput v-model="message" />
</template>`,propsList:[{name:"modelValue",type:"string",default:"''",description:"输入框绑定的文本内容"},{name:"placeholder",type:"string",default:"'输入内容，键入 @ 可呼出团队成员或智能体...'",description:"输入提示"},{name:"users",type:"MentionUser[]",default:"[...]",description:"可 @ 的成员/智能体列表"}]},{id:"segmented-control",name:"Segmented Control",title:"物理弹簧滑动高亮分段选择器",category:"Interactive",suiteId:"interactive-nav",description:"对标 iOS / macOS 系统级分段控制胶囊。具备物理阻尼平滑滑动的高亮指示器底衬、键盘左右方向键漫游切换与 Badge 状态。",componentFilename:"SegmentedControl.vue",componentCode:`<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import { cn } from '@/lib/utils'

export interface SegmentedOption {
  id: string | number
  label: string
  icon?: any
  badge?: string | number
  disabled?: boolean
}

interface SegmentedControlProps {
  modelValue: string | number
  options: SegmentedOption[]
  size?: 'sm' | 'md' | 'lg'
  class?: string
}

const props = withDefaults(defineProps<SegmentedControlProps>(), {
  size: 'md',
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: string | number): void
  (e: 'change', option: SegmentedOption): void
}>()

const containerRef = ref<HTMLDivElement | null>(null)
const itemRefs = ref<(HTMLButtonElement | null)[]>([])

const indicatorStyle = ref({
  width: '0px',
  transform: 'translateX(0px)',
  opacity: 0,
})

function updateIndicator() {
  const activeIndex = props.options.findIndex((opt) => opt.id === props.modelValue)
  if (activeIndex === -1 || !itemRefs.value[activeIndex]) {
    indicatorStyle.value.opacity = 0
    return
  }

  const activeEl = itemRefs.value[activeIndex]
  if (activeEl) {
    indicatorStyle.value = {
      width: \`\${activeEl.offsetWidth}px\`,
      transform: \`translateX(\${activeEl.offsetLeft}px)\`,
      opacity: 1,
    }
  }
}

function selectOption(option: SegmentedOption) {
  if (option.disabled) return
  emit('update:modelValue', option.id)
  emit('change', option)
}

function handleKeyDown(e: KeyboardEvent, currentIndex: number) {
  const nonDisabled = props.options.map((opt, i) => ({ opt, i })).filter((x) => !x.opt.disabled)
  const currentPos = nonDisabled.findIndex((x) => x.i === currentIndex)
  if (currentPos === -1) return

  let nextPos = currentPos
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault()
    nextPos = (currentPos + 1) % nonDisabled.length
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault()
    nextPos = (currentPos - 1 + nonDisabled.length) % nonDisabled.length
  }

  if (nextPos !== currentPos) {
    const target = nonDisabled[nextPos]
    selectOption(target.opt)
    nextTick(() => {
      itemRefs.value[target.i]?.focus()
    })
  }
}

watch(
  () => props.modelValue,
  () => {
    nextTick(updateIndicator)
  }
)

onMounted(() => {
  nextTick(() => {
    updateIndicator()
    window.addEventListener('resize', updateIndicator)
  })
})
<\/script>

<template>
  <div
    ref="containerRef"
    :class="
      cn(
        'relative inline-flex items-center rounded-xl bg-zinc-100 p-1 select-none dark:bg-zinc-800/80',
        props.class
      )
    "
  >
    <div
      class="pointer-events-none absolute left-0 top-1 bottom-1 z-0 rounded-lg bg-white shadow-xs transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-700 dark:shadow-none"
      :style="indicatorStyle"
    />

    <button
      v-for="(option, idx) in props.options"
      :key="option.id"
      :ref="(el) => (itemRefs[idx] = el as HTMLButtonElement)"
      type="button"
      :disabled="option.disabled"
      @click="selectOption(option)"
      @keydown="handleKeyDown($event, idx)"
      :class="
        cn(
          'relative z-10 flex items-center justify-center gap-1.5 font-medium transition-colors duration-150 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer',
          props.size === 'sm' && 'h-7 px-2.5 text-xs',
          props.size === 'md' && 'h-8 px-3.5 text-xs sm:text-sm',
          props.size === 'lg' && 'h-10 px-4 text-sm sm:text-base',
          props.modelValue === option.id
            ? 'text-zinc-900 font-bold dark:text-white'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
          option.disabled && 'opacity-40 cursor-not-allowed hover:text-zinc-500'
        )
      "
    >
      <component
        v-if="option.icon"
        :is="option.icon"
        :class="[
          'shrink-0 transition-transform duration-150',
          props.size === 'sm' && 'h-3.5 w-3.5',
          props.size === 'md' && 'h-4 w-4',
          props.size === 'lg' && 'h-5 w-5',
          props.modelValue === option.id && 'scale-105 text-blue-600 dark:text-blue-400',
        ]"
      />
      <span>{{ option.label }}</span>
      <span
        v-if="option.badge !== undefined"
        :class="[
          'rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold transition-colors',
          props.modelValue === option.id
            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300'
            : 'bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400',
        ]"
      >
        {{ option.badge }}
      </span>
    </button>
  </div>
</template>`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import SegmentedControl from '@/components/ui/SegmentedControl.vue'
import { Sparkles, Code2, Layers } from 'lucide-vue-next'

const currentView = ref('preview')
const options = [
  { id: 'preview', label: '实时预览', icon: Sparkles },
  { id: 'code', label: '代码导出', icon: Code2, badge: 'TS' },
  { id: 'themes', label: '套件矩阵', icon: Layers },
]
<\/script>

<template>
  <SegmentedControl v-model="currentView" :options="options" />
</template>`,propsList:[{name:"modelValue",type:"string | number",default:"''",description:"当前激活的选项 ID"},{name:"options",type:"SegmentedOption[]",default:"[]",description:"分段选项数据列表"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"分段控制器规格尺寸"}]},{id:"breadcrumb-trail",name:"Breadcrumb Trail",title:"折叠与多层弥散高亮面包屑导航",category:"Interactive",suiteId:"interactive-nav",description:"路径层级指示条。多层级超限时自动折叠收起为省略按钮，点击呼出带有高阶多层环境漫反射阴影与微缩放弹簧的路径下拉选单。",componentFilename:"BreadcrumbTrail.vue",componentCode:`<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronRight, MoreHorizontal, Home } from 'lucide-vue-next'

export interface BreadcrumbItem {
  id?: string | number
  label: string
  href?: string
  icon?: any
  onClick?: () => void
}

interface BreadcrumbTrailProps {
  items: BreadcrumbItem[]
  maxItems?: number
  separator?: 'chevron' | 'slash'
  showHome?: boolean
  class?: string
}

const props = withDefaults(defineProps<BreadcrumbTrailProps>(), {
  maxItems: 4,
  separator: 'chevron',
  showHome: true,
})

const emit = defineEmits<{
  (e: 'select', item: BreadcrumbItem): void
}>()

const isMenuOpen = ref(false)
const menuRef = ref<HTMLDivElement | null>(null)

const displayItems = computed(() => {
  const total = props.items.length
  if (total <= props.maxItems) {
    return {
      start: props.items,
      hidden: [] as BreadcrumbItem[],
      end: [] as BreadcrumbItem[],
      isCollapsed: false,
    }
  }

  return {
    start: [props.items[0]],
    hidden: props.items.slice(1, total - 2),
    end: props.items.slice(total - 2),
    isCollapsed: true,
  }
})

function handleItemClick(item: BreadcrumbItem) {
  emit('select', item)
  if (item.onClick) item.onClick()
  isMenuOpen.value = false
}

function handleClickOutside(e: MouseEvent) {
  if (menuRef.value && !menuRef.value.contains(e.target as Node)) {
    isMenuOpen.value = false
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
  <nav
    aria-label="Breadcrumb"
    :class="cn('inline-flex items-center text-xs sm:text-sm font-medium select-none', props.class)"
  >
    <ol class="flex items-center gap-1.5 flex-wrap">
      <li v-if="props.showHome" class="flex items-center">
        <button
          type="button"
          @click="handleItemClick({ label: '首页', href: '/' })"
          class="flex items-center gap-1 text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
        >
          <Home class="h-3.5 w-3.5" />
        </button>
        <span class="mx-1.5 text-zinc-300 dark:text-zinc-700">
          <ChevronRight v-if="props.separator === 'chevron'" class="h-3.5 w-3.5" />
          <span v-else>/</span>
        </span>
      </li>

      <template v-for="(item, idx) in displayItems.start" :key="idx">
        <li class="flex items-center">
          <button
            type="button"
            @click="handleItemClick(item)"
            class="flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"
          >
            <component v-if="item.icon" :is="item.icon" class="h-3.5 w-3.5" />
            <span>{{ item.label }}</span>
          </button>
          <span class="mx-1.5 text-zinc-300 dark:text-zinc-700">
            <ChevronRight v-if="props.separator === 'chevron'" class="h-3.5 w-3.5" />
            <span v-else>/</span>
          </span>
        </li>
      </template>

      <li v-if="displayItems.isCollapsed" ref="menuRef" class="relative flex items-center">
        <button
          type="button"
          @click.stop="isMenuOpen = !isMenuOpen"
          class="flex h-6 w-6 items-center justify-center rounded-md border border-zinc-200/80 bg-zinc-50/80 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-all cursor-pointer"
        >
          <MoreHorizontal class="h-3.5 w-3.5" />
        </button>
        <span class="mx-1.5 text-zinc-300 dark:text-zinc-700">
          <ChevronRight v-if="props.separator === 'chevron'" class="h-3.5 w-3.5" />
          <span v-else>/</span>
        </span>

        <transition name="crumb-menu">
          <div
            v-if="isMenuOpen"
            class="aura-popover popover-shadow absolute top-full left-0 mt-1.5 w-48 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-0.5"
          >
            <div class="px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              折叠上级路径
            </div>
            <button
              v-for="(hiddenItem, hIdx) in displayItems.hidden"
              :key="hIdx"
              type="button"
              @click="handleItemClick(hiddenItem)"
              class="flex w-full items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-left text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer transition-colors"
            >
              <component v-if="hiddenItem.icon" :is="hiddenItem.icon" class="h-3.5 w-3.5 text-zinc-400" />
              <span>{{ hiddenItem.label }}</span>
            </button>
          </div>
        </transition>
      </li>

      <template v-for="(item, idx) in displayItems.end" :key="idx">
        <li class="flex items-center">
          <span
            v-if="idx === displayItems.end.length - 1"
            class="font-bold text-zinc-900 dark:text-white flex items-center gap-1"
            aria-current="page"
          >
            <component v-if="item.icon" :is="item.icon" class="h-3.5 w-3.5 text-blue-500" />
            <span>{{ item.label }}</span>
          </span>
          <button
            v-else
            type="button"
            @click="handleItemClick(item)"
            class="flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"
          >
            <component v-if="item.icon" :is="item.icon" class="h-3.5 w-3.5" />
            <span>{{ item.label }}</span>
          </button>
          <span
            v-if="idx < displayItems.end.length - 1"
            class="mx-1.5 text-zinc-300 dark:text-zinc-700"
          >
            <ChevronRight v-if="props.separator === 'chevron'" class="h-3.5 w-3.5" />
            <span v-else>/</span>
          </span>
        </li>
      </template>
    </ol>
  </nav>
</template>

<style scoped>
.popover-shadow {
  box-shadow: var(--shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 24px 38px -8px rgba(0, 0, 0, 0.04));
}
:global(.dark) .popover-shadow {
  box-shadow: var(--shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.5), 0 12px 24px -4px rgba(0, 0, 0, 0.6), 0 24px 48px -8px rgba(0, 0, 0, 0.8));
}

.crumb-menu-enter-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: top left;
}
.crumb-menu-leave-active {
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1),
              transform 0.15s cubic-bezier(0.4, 0, 1, 1);
  transform-origin: top left;
}
.crumb-menu-enter-from,
.crumb-menu-leave-to {
  opacity: 0;
  transform: scale(0.96) translateY(-4px);
}
</style>`,usageCode:`<script setup lang="ts">
import BreadcrumbTrail from '@/components/ui/BreadcrumbTrail.vue'

const crumbs = [
  { label: '项目中心' },
  { label: '智能集群' },
  { label: '微服务节点' },
  { label: '网络拓扑' },
  { label: '动效配置详情' },
]
<\/script>

<template>
  <BreadcrumbTrail :items="crumbs" :max-items="4" />
</template>`,propsList:[{name:"items",type:"BreadcrumbItem[]",default:"[]",description:"面包屑层级数据"},{name:"maxItems",type:"number",default:"4",description:"最大直显层级数（超限自动折叠）"},{name:"separator",type:"'chevron' | 'slash'",default:"'chevron'",description:"路径分隔符风格"},{name:"showHome",type:"boolean",default:"true",description:"是否展示 Home 首页图标"}]},{id:"floating-action-menu",name:"Floating Action Menu",title:"悬浮折叠展开 FAB 阶梯操作菜单",category:"Interactive",suiteId:"interactive-nav",description:"Material 3 / Arc UI 风格的悬浮操作按钮。中心加号 135° 平滑旋转形变，子按钮阶梯延时弹簧放射展开并配有毛玻璃标签。",componentFilename:"FloatingActionMenu.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-vue-next'

export interface FABAction {
  id: string | number
  label: string
  icon: any
  color?: string
  onClick?: () => void
}

interface FloatingActionMenuProps {
  actions: FABAction[]
  direction?: 'up' | 'down' | 'left' | 'right'
  class?: string
}

const props = withDefaults(defineProps<FloatingActionMenuProps>(), {
  direction: 'up',
})

const emit = defineEmits<{
  (e: 'select', action: FABAction): void
  (e: 'toggle', isOpen: boolean): void
}>()

const isOpen = ref(false)
const containerRef = ref<HTMLDivElement | null>(null)

function toggle() {
  isOpen.value = !isOpen.value
  emit('toggle', isOpen.value)
}

function handleActionClick(action: FABAction) {
  emit('select', action)
  if (action.onClick) action.onClick()
  isOpen.value = false
  emit('toggle', false)
}

function handleClickOutside(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    if (isOpen.value) {
      isOpen.value = false
      emit('toggle', false)
    }
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
  <div ref="containerRef" :class="cn('relative inline-flex flex-col items-center select-none', props.class)">
    <transition name="fab-items">
      <div
        v-if="isOpen"
        :class="[
          'absolute z-40 flex gap-3 pointer-events-auto',
          props.direction === 'up' && 'bottom-full mb-3 flex-col-reverse items-center',
          props.direction === 'down' && 'top-full mt-3 flex-col items-center',
          props.direction === 'left' && 'right-full mr-3 flex-row-reverse items-center',
          props.direction === 'right' && 'left-full ml-3 flex-row items-center',
        ]"
      >
        <div
          v-for="(action, idx) in props.actions"
          :key="action.id"
          class="flex items-center gap-2 group cursor-pointer"
          :style="{
            transitionDelay: \`\${idx * 40}ms\`,
          }"
        >
          <div
            v-if="props.direction === 'up' || props.direction === 'down'"
            class="whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-xs font-semibold text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:text-zinc-200 transition-transform group-hover:scale-105"
          >
            {{ action.label }}
          </div>

          <button
            type="button"
            @click.stop="handleActionClick(action)"
            :class="[
              'flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer',
              action.color || 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/25',
            ]"
            :title="action.label"
          >
            <component :is="action.icon" class="h-4 w-4" />
          </button>
        </div>
      </div>
    </transition>

    <button
      type="button"
      @click.stop="toggle"
      :class="[
        'relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-blue-500 hover:scale-105 active:scale-90 cursor-pointer outline-none focus:outline-none ring-0',
        isOpen && '!bg-zinc-900 dark:!bg-zinc-700 shadow-zinc-900/40',
      ]"
      title="操作菜单"
    >
      <Plus
        :class="[
          'h-5 w-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
          isOpen && 'rotate-135',
        ]"
      />
    </button>
  </div>
</template>

<style scoped>
.fab-items-enter-active,
.fab-items-leave-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.fab-items-enter-from,
.fab-items-leave-to {
  opacity: 0;
  transform: scale(0.85);
}
</style>`,usageCode:`<script setup lang="ts">
import FloatingActionMenu, { type FABAction } from '@/components/ui/FloatingActionMenu.vue'
import { Sparkles, Bot, Share2 } from 'lucide-vue-next'

const actions: FABAction[] = [
  { id: 'ai', label: '唤起 AI 智能体', icon: Bot, color: 'bg-purple-600' },
  { id: 'sparkle', label: '生成微光动效', icon: Sparkles, color: 'bg-blue-600' },
  { id: 'share', label: '分享工作流', icon: Share2, color: 'bg-emerald-600' },
]
<\/script>

<template>
  <FloatingActionMenu :actions="actions" direction="up" />
</template>`,propsList:[{name:"actions",type:"FABAction[]",default:"[]",description:"子操作按钮数据（id, label, icon, color）"},{name:"direction",type:"'up' | 'down' | 'left' | 'right'",default:"'up'",description:"子项展开延展方向"}]},{id:"navbar-hover",name:"Navbar Hover",title:"视口自适应平滑跟随悬浮子菜单",category:"Layout",suiteId:"interactive-nav",description:"对标 Stripe / Vercel 顶栏。光标在菜单项间移动时，底部卡片与指示小指针在视口中横向平滑连贯跟随，自适应呈现多列信息。",componentFilename:"NavbarHover.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronDown, ArrowRight } from 'lucide-vue-next'

export interface NavChildItem {
  title: string
  desc: string
  icon?: any
  href?: string
  badge?: string
}

export interface NavMenuItem {
  id: string
  label: string
  children: NavChildItem[]
}

interface NavbarHoverProps {
  items: NavMenuItem[]
  class?: string
}

const props = defineProps<NavbarHoverProps>()

const emit = defineEmits<{
  (e: 'select', child: NavChildItem): void
}>()

const activeMenuId = ref<string | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const navRefs = ref<(HTMLButtonElement | null)[]>([])

const panelPosition = ref({
  left: 0,
  opacity: 0,
  arrowLeft: 0,
})

let closeTimer: ReturnType<typeof setTimeout> | null = null

function updatePosition(index: number) {
  const el = navRefs.value[index]
  const container = containerRef.value
  if (!el || !container) return

  const containerRect = container.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()
  const targetCenter = elRect.left + elRect.width / 2 - containerRect.left
  const panelWidth = 320

  panelPosition.value = {
    left: Math.max(targetCenter - panelWidth / 2, 0),
    arrowLeft: targetCenter,
    opacity: 1,
  }
}

function handleMouseEnter(item: NavMenuItem, index: number) {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  activeMenuId.value = item.id
  updatePosition(index)
}

function handleMouseLeave() {
  closeTimer = setTimeout(() => {
    activeMenuId.value = null
    panelPosition.value.opacity = 0
  }, 180)
}

function handlePanelEnter() {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

function handleChildClick(child: NavChildItem) {
  emit('select', child)
  activeMenuId.value = null
  panelPosition.value.opacity = 0
}

onMounted(() => {
  window.addEventListener('resize', () => {
    if (activeMenuId.value) {
      const idx = props.items.findIndex((x) => x.id === activeMenuId.value)
      if (idx !== -1) updatePosition(idx)
    }
  })
})

onUnmounted(() => {
  if (closeTimer) clearTimeout(closeTimer)
})
<\/script>

<template>
  <div
    ref="containerRef"
    @mouseleave="handleMouseLeave"
    :class="cn('relative inline-flex items-center select-none', props.class)"
  >
    <nav class="flex items-center gap-1 rounded-xl bg-zinc-50 p-1 border border-zinc-200/80 dark:bg-zinc-900/60 dark:border-zinc-800/80">
      <button
        v-for="(item, idx) in props.items"
        :key="item.id"
        :ref="(el) => (navRefs[idx] = el as HTMLButtonElement)"
        type="button"
        @mouseenter="handleMouseEnter(item, idx)"
        :class="[
          'flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer outline-none focus:outline-none',
          activeMenuId === item.id
            ? 'bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white'
            : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
        ]"
      >
        <span>{{ item.label }}</span>
        <ChevronDown
          :class="[
            'h-3.5 w-3.5 text-zinc-400 transition-transform duration-200',
            activeMenuId === item.id && 'rotate-180 text-blue-500',
          ]"
        />
      </button>
    </nav>

    <transition name="nav-morph">
      <div
        v-if="activeMenuId"
        @mouseenter="handlePanelEnter"
        @mouseleave="handleMouseLeave"
        class="aura-popover popover-shadow absolute top-full mt-2 w-80 rounded-2xl border border-zinc-200/80 bg-white/95 p-3 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
        :style="{
          left: \`\${panelPosition.left}px\`,
        }"
      >
        <div
          class="absolute -top-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-zinc-200/80 bg-white dark:border-zinc-800/90 dark:bg-zinc-900 transition-all duration-200"
          :style="{
            left: \`\${panelPosition.arrowLeft - panelPosition.left}px\`,
          }"
        />

        <div class="space-y-1">
          <div
            v-for="child in props.items.find((x) => x.id === activeMenuId)?.children || []"
            :key="child.title"
            @click="handleChildClick(child)"
            class="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer"
          >
            <div
              v-if="child.icon"
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 transition-transform group-hover:scale-105"
            >
              <component :is="child.icon" class="h-4 w-4" />
            </div>

            <div class="flex-1 overflow-hidden">
              <div class="flex items-center gap-1.5">
                <span class="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {{ child.title }}
                </span>
                <span
                  v-if="child.badge"
                  class="rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                >
                  {{ child.badge }}
                </span>
                <ArrowRight class="ml-auto h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-blue-500" />
              </div>
              <p class="mt-0.5 text-[11px] text-zinc-400 line-clamp-1">
                {{ child.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.popover-shadow {
  box-shadow: var(--shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 24px 38px -8px rgba(0, 0, 0, 0.04));
}
:global(.dark) .popover-shadow {
  box-shadow: var(--shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.5), 0 12px 24px -4px rgba(0, 0, 0, 0.6), 0 24px 48px -8px rgba(0, 0, 0, 0.8));
}

.nav-morph-enter-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: top center;
}
.nav-morph-leave-active {
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1),
              transform 0.15s cubic-bezier(0.4, 0, 1, 1);
  transform-origin: top center;
}
.nav-morph-enter-from,
.nav-morph-leave-to {
  opacity: 0;
  transform: scale(0.96) translateY(-4px);
}
</style>`,usageCode:`<script setup lang="ts">
import NavbarHover, { type NavMenuItem } from '@/components/ui/NavbarHover.vue'
import { Sparkles, Terminal, Shield } from 'lucide-vue-next'

const navMenu: NavMenuItem[] = [
  {
    id: 'products',
    label: '产品矩阵',
    children: [
      { title: 'Aura Motion', desc: '60fps 满帧原生动效原子引擎', icon: Sparkles, badge: 'v3.5' },
      { title: 'Terminal Flow', desc: '模拟 Agent 思考与流式代码终端', icon: Terminal },
      { title: 'Security Shield', desc: '零侵入密码学高危操作防误触', icon: Shield },
    ],
  },
]
<\/script>

<template>
  <NavbarHover :items="navMenu" />
</template>`,propsList:[{name:"items",type:"NavMenuItem[]",default:"[]",description:"一级导航及嵌套子项数据"}]},{id:"pagination-slider",name:"Pagination Slider",title:"物理翻页滑块与平滑页码快速滚动器",category:"Interactive",suiteId:"interactive-nav",description:"高阶翻页与极速跳转组件。除标准页码序列与弹簧按压微缩放外，内置一条平滑水平滑动条，可在几百页大跨度数据中一秒快速滑选。",componentFilename:"PaginationSlider.vue",componentCode:`<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-vue-next'

interface PaginationSliderProps {
  modelValue: number
  totalPages: number
  showSlider?: boolean
  siblingCount?: number
  class?: string
}

const props = withDefaults(defineProps<PaginationSliderProps>(), {
  modelValue: 1,
  totalPages: 10,
  showSlider: true,
  siblingCount: 1,
})

const emit = defineEmits<{
  (e: 'update:modelValue', page: number): void
  (e: 'change', page: number): void
}>()

function setPage(page: number) {
  const bounded = Math.max(1, Math.min(props.totalPages, page))
  if (bounded !== props.modelValue) {
    emit('update:modelValue', bounded)
    emit('change', bounded)
  }
}

const visiblePages = computed(() => {
  const current = props.modelValue
  const total = props.totalPages
  const siblings = props.siblingCount

  const range: (number | string)[] = []
  const leftSibling = Math.max(current - siblings, 1)
  const rightSibling = Math.min(current + siblings, total)

  const showLeftDots = leftSibling > 2
  const showRightDots = rightSibling < total - 1

  if (!showLeftDots && showRightDots) {
    const leftItemCount = 3 + 2 * siblings
    for (let i = 1; i <= Math.min(leftItemCount, total); i++) range.push(i)
    if (total > leftItemCount) {
      range.push('...')
      range.push(total)
    }
  } else if (showLeftDots && !showRightDots) {
    const rightItemCount = 3 + 2 * siblings
    range.push(1)
    range.push('...')
    for (let i = Math.max(total - rightItemCount + 1, 1); i <= total; i++) range.push(i)
  } else if (showLeftDots && showRightDots) {
    range.push(1)
    range.push('...')
    for (let i = leftSibling; i <= rightSibling; i++) range.push(i)
    range.push('...')
    range.push(total)
  } else {
    for (let i = 1; i <= total; i++) range.push(i)
  }

  return range
})

function handleSliderInput(e: Event) {
  const val = parseInt((e.target as HTMLInputElement).value, 10)
  if (!isNaN(val)) setPage(val)
}
<\/script>

<template>
  <div :class="cn('flex flex-col items-center gap-3 select-none', props.class)">
    <div class="inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-white p-1 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900">
      <button
        type="button"
        :disabled="props.modelValue <= 1"
        @click="setPage(props.modelValue - 1)"
        class="flex h-8 w-8 items-center justify-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all active:scale-90 cursor-pointer"
        title="上一页"
      >
        <ChevronLeft class="h-4 w-4" />
      </button>

      <div class="flex items-center gap-1">
        <template v-for="(p, idx) in visiblePages" :key="idx">
          <span
            v-if="p === '...'"
            class="flex h-8 w-6 items-center justify-center font-mono text-xs text-zinc-400"
          >
            ···
          </span>

          <button
            v-else
            type="button"
            @click="setPage(p as number)"
            :class="[
              'flex h-8 min-w-[32px] items-center justify-center rounded-xl px-2 font-mono text-xs font-semibold transition-all duration-150 active:scale-95 cursor-pointer',
              props.modelValue === p
                ? 'bg-blue-600 text-white shadow-xs dark:bg-blue-600'
                : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800',
            ]"
          >
            {{ p }}
          </button>
        </template>
      </div>

      <button
        type="button"
        :disabled="props.modelValue >= props.totalPages"
        @click="setPage(props.modelValue + 1)"
        class="flex h-8 w-8 items-center justify-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all active:scale-90 cursor-pointer"
        title="下一页"
      >
        <ChevronRight class="h-4 w-4" />
      </button>
    </div>

    <div
      v-if="props.showSlider && props.totalPages > 3"
      class="flex w-full max-w-xs items-center gap-2.5 rounded-xl border border-zinc-200/60 bg-zinc-50/60 px-3 py-1.5 dark:border-zinc-800/60 dark:bg-zinc-950/40"
    >
      <SlidersHorizontal class="h-3 w-3 text-zinc-400 shrink-0" />
      <span class="font-mono text-[10px] text-zinc-400 shrink-0">P1</span>

      <input
        type="range"
        :min="1"
        :max="props.totalPages"
        :value="props.modelValue"
        @input="handleSliderInput"
        class="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-blue-600 dark:bg-zinc-800"
      />

      <span class="font-mono text-[10px] text-zinc-400 shrink-0">P{{ props.totalPages }}</span>
      <span class="rounded bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 shrink-0">
        {{ props.modelValue }}/{{ props.totalPages }}
      </span>
    </div>
  </div>
</template>`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import PaginationSlider from '@/components/ui/PaginationSlider.vue'

const currentPage = ref(3)
<\/script>

<template>
  <PaginationSlider v-model="currentPage" :total-pages="24" :show-slider="true" />
</template>`,propsList:[{name:"modelValue",type:"number",default:"1",description:"当前激活的页码"},{name:"totalPages",type:"number",default:"10",description:"总页数"},{name:"showSlider",type:"boolean",default:"true",description:"是否展开底部快速翻页滑块"}]},{id:"circular-progress-nav",name:"Circular Progress Nav",title:"环形微交互阅读进度导航指示器",category:"Interactive",suiteId:"interactive-nav",description:"SVG 矢量环形进度指示器。根据页面滚动/步骤动态驱动环形笔触，中心内置动作按钮与数值百分比，点击具备弹簧按压反馈。",componentFilename:"CircularProgressNav.vue",componentCode:`<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { ArrowUp } from 'lucide-vue-next'

interface CircularProgressNavProps {
  progress: number
  size?: number
  strokeWidth?: number
  icon?: any
  tooltip?: string
  class?: string
}

const props = withDefaults(defineProps<CircularProgressNavProps>(), {
  size: 56,
  strokeWidth: 4,
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

const center = computed(() => props.size / 2)
const radius = computed(() => center.value - props.strokeWidth)
const circumference = computed(() => 2 * Math.PI * radius.value)

const strokeDashoffset = computed(() => {
  const clamped = Math.min(Math.max(props.progress, 0), 100)
  return circumference.value - (clamped / 100) * circumference.value
})

function handleClick() {
  emit('click')
}
<\/script>

<template>
  <button
    type="button"
    @click="handleClick"
    :title="props.tooltip || \`阅读/滚动进度: \${Math.round(props.progress)}%\`"
    :class="
      cn(
        'group relative inline-flex items-center justify-center rounded-full bg-white/90 p-1 shadow-md shadow-black/5 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 dark:bg-zinc-900/90 dark:shadow-black/20 cursor-pointer outline-none focus:outline-none ring-0',
        props.class
      )
    "
    :style="{ width: \`\${props.size}px\`, height: \`\${props.size}px\` }"
  >
    <svg
      :width="props.size"
      :height="props.size"
      class="absolute inset-0 -rotate-90 pointer-events-none"
    >
      <circle
        :cx="center"
        :cy="center"
        :r="radius"
        fill="transparent"
        stroke="currentColor"
        :stroke-width="props.strokeWidth"
        class="text-zinc-200/80 dark:text-zinc-800"
      />
      <circle
        :cx="center"
        :cy="center"
        :r="radius"
        fill="transparent"
        stroke="currentColor"
        :stroke-width="props.strokeWidth"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashoffset"
        class="text-blue-600 dark:text-blue-500 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
      />
    </svg>

    <div class="relative z-10 flex flex-col items-center justify-center text-zinc-700 dark:text-zinc-200 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
      <component
        :is="props.icon || ArrowUp"
        class="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
      />
      <span class="font-mono text-[9px] font-extrabold leading-none mt-0.5">
        {{ Math.round(props.progress) }}%
      </span>
    </div>
  </button>
</template>`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import CircularProgressNav from '@/components/ui/CircularProgressNav.vue'

const scrollPercent = ref(68)
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
<\/script>

<template>
  <div class="fixed bottom-6 right-6">
    <CircularProgressNav :progress="scrollPercent" @click="scrollToTop" />
  </div>
</template>`,propsList:[{name:"progress",type:"number",default:"0",description:"当前进度百分比 (0 - 100)"},{name:"size",type:"number",default:"56",description:"环形按钮总像素尺寸"},{name:"strokeWidth",type:"number",default:"4",description:"环形轨道笔触粗细"}]}],Cp={class:"sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80 transition-colors"},Sp={class:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"},Ap={class:"flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md shadow-blue-500/20 text-white transition-transform duration-300 group-hover:scale-105"},Ip={class:"hidden md:flex items-center gap-6 text-sm font-medium"},Mp={class:"flex items-center gap-3"},Rp={href:"https://github.com",target:"_blank",rel:"noopener noreferrer",class:"flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"GitHub 仓库"},Tp=ce({__name:"Header",setup(e){return(t,n)=>{const r=vr("router-link");return g(),v("header",Cp,[l("div",Sp,[w(r,{to:"/",class:"flex items-center gap-2.5 group"},{default:Y(()=>[l("div",Ap,[w(A(Pe),{class:"h-5 w-5"})]),n[0]||(n[0]=l("div",{class:"flex flex-col"},[l("div",{class:"flex items-center gap-1.5"},[l("span",{class:"text-lg font-black tracking-tight text-zinc-900 dark:text-white"},[Re(" Aura"),l("span",{class:"text-blue-600 dark:text-blue-400"},"UI")]),l("span",{class:"rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300"}," Vue 3.5 ")]),l("span",{class:"text-[10px] text-zinc-400"},"动效原子代码库")],-1))]),_:1}),l("nav",Ip,[w(r,{to:"/",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:Y(()=>[...n[1]||(n[1]=[Re(" 官网首页 ",-1)])]),_:1}),w(r,{to:"/docs/border-beam",class:"inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:Y(()=>[w(A(nn),{class:"h-4 w-4"}),l("span",null,"组件库 ("+P(A(rn).length)+")",1)]),_:1}),n[2]||(n[2]=l("a",{href:"#features",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}," 核心特性 ",-1))]),l("div",Mp,[w(_p),l("a",Rp,[w(A(ap),{class:"h-4 w-4"})]),w(r,{to:"/docs/border-beam",class:"hidden sm:inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"},{default:Y(()=>[...n[3]||(n[3]=[Re(" 浏览代码 ",-1)])]),_:1})])])])}}}),$p={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50 transition-colors"},Pp={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Ep={class:"flex flex-col md:flex-row items-center justify-between gap-6"},Fp={class:"flex items-center gap-3"},Lp={class:"flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"},Vp={class:"flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"},Op={class:"inline-flex items-center gap-1"},Dp=ce({__name:"Footer",setup(e){return(t,n)=>(g(),v("footer",$p,[l("div",Pp,[l("div",Ep,[l("div",Fp,[l("div",Lp,[w(A(Pe),{class:"h-4 w-4"})]),n[0]||(n[0]=l("div",null,[l("p",{class:"text-sm font-bold text-zinc-900 dark:text-zinc-100"}," Aura UI (Vue 3) "),l("p",{class:"text-xs text-zinc-500 dark:text-zinc-400"}," 对标 Magic UI / Aceternity UI，属于 Vue 3 的动效原子代码库 ")],-1))]),l("div",Vp,[n[3]||(n[3]=l("span",null,"采用 MIT 协议开源，完全支持 Copy & Paste 即用",-1)),n[4]||(n[4]=l("span",null,"•",-1)),l("span",Op,[n[1]||(n[1]=Re(" Built with ",-1)),w(A(lp),{class:"h-3 w-3 text-red-500 fill-red-500"}),n[2]||(n[2]=Re(" for Vue 3 ecosystem ",-1))])])])])]))}}),jp={class:"min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-200"},Bp={class:"flex-1"},Np=ce({__name:"App",setup(e){return(t,n)=>{const r=vr("router-view");return g(),v("div",jp,[w(Tp),l("div",Bp,[w(r)]),w(Dp)])}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Cn=typeof document<"u";function jl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Hp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&jl(e.default)}const Ae=Object.assign;function To(e,t){const n={};for(const r in t){const o=t[r];n[r]=kt(o)?o.map(e):e(o)}return n}const or=()=>{},kt=Array.isArray;function $i(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Bl=/#/g,Up=/&/g,Gp=/\//g,qp=/=/g,Wp=/\?/g,Nl=/\+/g,Kp=/%5B/g,Xp=/%5D/g,Hl=/%5E/g,Yp=/%60/g,Ul=/%7B/g,Zp=/%7C/g,Gl=/%7D/g,Jp=/%20/g;function Es(e){return e==null?"":encodeURI(""+e).replace(Zp,"|").replace(Kp,"[").replace(Xp,"]")}function Qp(e){return Es(e).replace(Ul,"{").replace(Gl,"}").replace(Hl,"^")}function as(e){return Es(e).replace(Nl,"%2B").replace(Jp,"+").replace(Bl,"%23").replace(Up,"%26").replace(Yp,"`").replace(Ul,"{").replace(Gl,"}").replace(Hl,"^")}function e0(e){return as(e).replace(qp,"%3D")}function t0(e){return Es(e).replace(Bl,"%23").replace(Wp,"%3F")}function n0(e){return t0(e).replace(Gp,"%2F")}function gr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const r0=/\/$/,o0=e=>e.replace(r0,"");function $o(e,t,n="/"){let r,o={},s="",a="";const i=t.indexOf("#");let c=t.indexOf("?");return c=i>=0&&c>i?-1:c,c>=0&&(r=t.slice(0,c),s=t.slice(c,i>0?i:t.length),o=e(s.slice(1))),i>=0&&(r=r||t.slice(0,i),a=t.slice(i,t.length)),r=l0(r??t,n),{fullPath:r+s+a,path:r,query:o,hash:gr(a)}}function s0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Pi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function i0(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&En(t.matched[r],n.matched[o])&&ql(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function En(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ql(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!a0(e[n],t[n]))return!1;return!0}function a0(e,t){return kt(e)?Ei(e,t):kt(t)?Ei(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Ei(e,t){return kt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function l0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,a,i;for(a=0;a<r.length;a++)if(i=r[a],i!==".")if(i==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a).join("/")}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ls=(function(e){return e.pop="pop",e.push="push",e})({}),Po=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function c0(e){if(!e)if(Cn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),o0(e)}const d0=/^[^#]+#/;function u0(e,t){return e.replace(d0,"#")+t}function p0(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const go=()=>({left:window.scrollX,top:window.scrollY});function f0(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=p0(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Fi(e,t){return(history.state?history.state.position-t:-1)+e}const cs=new Map;function m0(e,t){cs.set(e,t)}function b0(e){const t=cs.get(e);return cs.delete(e),t}function g0(e){return typeof e=="string"||e&&typeof e=="object"}function Wl(e){return typeof e=="string"||typeof e=="symbol"}let Be=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Kl=Symbol("");Be.MATCHER_NOT_FOUND+"",Be.NAVIGATION_GUARD_REDIRECT+"",Be.NAVIGATION_ABORTED+"",Be.NAVIGATION_CANCELLED+"",Be.NAVIGATION_DUPLICATED+"";function Fn(e,t){return Ae(new Error,{type:e,[Kl]:!0},t)}function jt(e,t){return e instanceof Error&&Kl in e&&(t==null||!!(e.type&t))}const h0=["params","query","hash"];function x0(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of h0)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function v0(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const o=n[r].replace(Nl," "),s=o.indexOf("="),a=gr(s<0?o:o.slice(0,s)),i=s<0?null:gr(o.slice(s+1));if(a in t){let c=t[a];kt(c)||(c=t[a]=[c]),c.push(i)}else t[a]=i}return t}function Li(e){let t="";for(let n in e){const r=e[n];if(n=e0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(kt(r)?r.map(o=>o&&as(o)):[r&&as(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function y0(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=kt(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const w0=Symbol(""),Vi=Symbol(""),Fs=Symbol(""),Ls=Symbol(""),ds=Symbol("");function Nn(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function tn(e,t,n,r,o,s=a=>a()){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((i,c)=>{const p=f=>{f===!1?c(Fn(Be.NAVIGATION_ABORTED,{from:n,to:t})):f instanceof Error?c(f):g0(f)?c(Fn(Be.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(a&&r.enterCallbacks[o]===a&&typeof f=="function"&&a.push(f),i())},u=s(()=>e.call(r&&r.instances[o],t,n,p));let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(f=>c(f))})}function Eo(e,t,n,r,o=s=>s()){const s=[];for(const a of e)for(const i in a.components){let c=a.components[i];if(!(t!=="beforeRouteEnter"&&!a.instances[i]))if(jl(c)){const p=(c.__vccOpts||c)[t];p&&s.push(tn(p,n,r,a,i,o))}else{let p=c();s.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${i}" at "${a.path}"`);const d=Hp(u)?u.default:u;a.mods[i]=u,a.components[i]=d;const f=(d.__vccOpts||d)[t];return f&&tn(f,n,r,a,i,o)()}))}}return s}function k0(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const i=t.matched[a];i&&(e.matched.find(p=>En(p,i))?r.push(i):n.push(i));const c=e.matched[a];c&&(t.matched.find(p=>En(p,c))||o.push(c))}return[n,r,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let z0=()=>location.protocol+"//"+location.host;function Xl(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let a=o.includes(e.slice(s))?e.slice(s).length:1,i=o.slice(a);return i[0]!=="/"&&(i="/"+i),Pi(i,"")}return Pi(n,e)+r+o}function _0(e,t,n,r){let o=[],s=[],a=null;const i=({state:f})=>{const m=Xl(e,location),z=n.value,y=t.value;let S=0;if(f){if(n.value=m,t.value=f,a&&a===z){a=null;return}S=y?f.position-y.position:0}else r(m);o.forEach(R=>{R(n.value,z,{delta:S,type:ls.pop,direction:S?S>0?Po.forward:Po.back:Po.unknown})})};function c(){a=n.value}function p(f){o.push(f);const m=()=>{const z=o.indexOf(f);z>-1&&o.splice(z,1)};return s.push(m),m}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Ae({},f.state,{scroll:go()}),"")}}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:p,destroy:d}}function Oi(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?go():null}}function C0(e){const{history:t,location:n}=window,r={value:Xl(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,p,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:z0()+e+c;try{t[u?"replaceState":"pushState"](p,"",f),o.value=p}catch(m){console.error(m),n[u?"replace":"assign"](f)}}function a(c,p){s(c,Ae({},t.state,Oi(o.value.back,c,o.value.forward,!0),p,{position:o.value.position}),!0),r.value=c}function i(c,p){const u=Ae({},o.value,t.state,{forward:c,scroll:go()});s(u.current,u,!0),s(c,Ae({},Oi(r.value,c,null),{position:u.position+1},p),!1),r.value=c}return{location:r,state:o,push:i,replace:a}}function S0(e){e=c0(e);const t=C0(e),n=_0(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const o=Ae({location:"",base:e,go:r,createHref:u0.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let vn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var qe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(qe||{});const A0={type:vn.Static,value:""},I0=/[a-zA-Z0-9_]/;function M0(e){if(!e)return[[]];if(e==="/")return[[A0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${p}": ${m}`)}let n=qe.Static,r=n;const o=[];let s;function a(){s&&o.push(s),s=[]}let i=0,c,p="",u="";function d(){p&&(n===qe.Static?s.push({type:vn.Static,value:p}):n===qe.Param||n===qe.ParamRegExp||n===qe.ParamRegExpEnd?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),s.push({type:vn.Param,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function f(){p+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&n!==qe.ParamRegExp){r=n,n=qe.EscapeNext;continue}switch(n){case qe.Static:c==="/"?(p&&d(),a()):c===":"?(d(),n=qe.Param):f();break;case qe.EscapeNext:f(),n=r;break;case qe.Param:c==="("?n=qe.ParamRegExp:I0.test(c)?f():(d(),n=qe.Static,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case qe.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=qe.ParamRegExpEnd:u+=c;break;case qe.ParamRegExpEnd:d(),n=qe.Static,c!=="*"&&c!=="?"&&c!=="+"&&i--,u="";break;default:t("Unknown state");break}}return n===qe.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),d(),a(),o}const Di="[^/]+?",R0={sensitive:!1,strict:!1,start:!0,end:!0};var it=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(it||{});const T0=/[.+*?^${}()[\]/\\]/g;function $0(e,t){const n=Ae({},R0,t),r=[];let o=n.start?"^":"";const s=[];for(const p of e){const u=p.length?[]:[it.Root];n.strict&&!p.length&&(o+="/");for(let d=0;d<p.length;d++){const f=p[d];let m=it.Segment+(n.sensitive?it.BonusCaseSensitive:0);if(f.type===vn.Static)d||(o+="/"),o+=f.value.replace(T0,"\\$&"),m+=it.Static;else if(f.type===vn.Param){const{value:z,repeatable:y,optional:S,regexp:R}=f;s.push({name:z,repeatable:y,optional:S});const x=R||Di;if(x!==Di){m+=it.BonusCustomRegExp;try{`${x}`}catch(C){throw new Error(`Invalid custom RegExp for param "${z}" (${x}): `+C.message)}}let _=y?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(_=S&&p.length<2?`(?:/${_})`:"/"+_),S&&(_+="?"),o+=_,m+=it.Dynamic,S&&(m+=it.BonusOptional),y&&(m+=it.BonusRepeatable),x===".*"&&(m+=it.BonusWildcard)}u.push(m)}r.push(u)}if(n.strict&&n.end){const p=r.length-1;r[p][r[p].length-1]+=it.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function i(p){const u=p.match(a),d={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",z=s[f-1];d[z.name]=m&&z.repeatable?m.split("/"):m}return d}function c(p){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of f)if(m.type===vn.Static)u+=m.value;else if(m.type===vn.Param){const{value:z,repeatable:y,optional:S}=m,R=z in p?p[z]:"";if(kt(R)&&!y)throw new Error(`Provided param "${z}" is an array but it is not repeatable (* or + modifiers)`);const x=kt(R)?R.join("/"):R;if(!x)if(S)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${z}"`);u+=x}}return u||"/"}return{re:a,score:r,keys:s,parse:i,stringify:c}}function P0(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===it.Static+it.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===it.Static+it.Segment?1:-1:0}function Yl(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=P0(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(ji(r))return 1;if(ji(o))return-1}return o.length-r.length}function ji(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const E0={strict:!1,end:!0,sensitive:!1};function F0(e,t,n){const r=$0(M0(e.path),n),o=Ae(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function L0(e,t){const n=[],r=new Map;t=$i(E0,t);function o(d){return r.get(d)}function s(d,f,m){const z=!m,y=Ni(d);y.aliasOf=m&&m.record;const S=$i(t,d),R=[y];if("alias"in d){const C=typeof d.alias=="string"?[d.alias]:d.alias;for(const F of C)R.push(Ni(Ae({},y,{components:m?m.record.components:y.components,path:F,aliasOf:m?m.record:y})))}let x,_;for(const C of R){const{path:F}=C;if(f&&F[0]!=="/"){const V=f.record.path,U=V[V.length-1]==="/"?"":"/";C.path=f.record.path+(F&&U+F)}if(x=F0(C,f,S),m?m.alias.push(x):(_=_||x,_!==x&&_.alias.push(x),z&&d.name&&!Hi(x)&&a(d.name)),Zl(x)&&c(x),y.children){const V=y.children;for(let U=0;U<V.length;U++)s(V[U],x,m&&m.children[U])}m=m||x}return _?()=>{a(_)}:or}function a(d){if(Wl(d)){const f=r.get(d);f&&(r.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return n}function c(d){const f=D0(d,n);n.splice(f,0,d),d.record.name&&!Hi(d)&&r.set(d.record.name,d)}function p(d,f){let m,z={},y,S;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw Fn(Be.MATCHER_NOT_FOUND,{location:d});S=m.record.name,z=Ae(Bi(f.params,m.keys.filter(_=>!_.optional).concat(m.parent?m.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),d.params&&Bi(d.params,m.keys.map(_=>_.name))),y=m.stringify(z)}else if(d.path!=null)y=d.path,m=n.find(_=>_.re.test(y)),m&&(z=m.parse(y),S=m.record.name);else{if(m=f.name?r.get(f.name):n.find(_=>_.re.test(f.path)),!m)throw Fn(Be.MATCHER_NOT_FOUND,{location:d,currentLocation:f});S=m.record.name,z=Ae({},f.params,d.params),y=m.stringify(z)}const R=[];let x=m;for(;x;)R.unshift(x.record),x=x.parent;return{name:S,path:y,params:z,matched:R,meta:O0(R)}}e.forEach(d=>s(d));function u(){n.length=0,r.clear()}return{addRoute:s,resolve:p,removeRoute:a,clearRoutes:u,getRoutes:i,getRecordMatcher:o}}function Bi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ni(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:V0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function V0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Hi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function O0(e){return e.reduce((t,n)=>Ae(t,n.meta),{})}function D0(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;Yl(e,t[s])<0?r=s:n=s+1}const o=j0(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function j0(e){let t=e;for(;t=t.parent;)if(Zl(t)&&Yl(e,t)===0)return t}function Zl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ui(e){const t=Ft(Fs),n=Ft(Ls),r=pe(()=>{const c=A(e.to);return t.resolve(c)}),o=pe(()=>{const{matched:c}=r.value,{length:p}=c,u=c[p-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(En.bind(null,u));if(f>-1)return f;const m=Gi(c[p-2]);return p>1&&Gi(u)===m&&d[d.length-1].path!==m?d.findIndex(En.bind(null,c[p-2])):f}),s=pe(()=>o.value>-1&&G0(n.params,r.value.params)),a=pe(()=>o.value>-1&&o.value===n.matched.length-1&&ql(n.params,r.value.params));function i(c={}){if(U0(c)){const p=t[A(e.replace)?"replace":"push"](A(e.to)).catch(or);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:r,href:pe(()=>r.value.href),isActive:s,isExactActive:a,navigate:i}}function B0(e){return e.length===1?e[0]:e}const N0=ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ui,setup(e,{slots:t}){const n=so(Ui(e)),{options:r}=Ft(Fs),o=pe(()=>({[qi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&B0(t.default(n));return e.custom?s:$n("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),H0=N0;function U0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function G0(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!kt(o)||o.length!==r.length||r.some((s,a)=>s.valueOf()!==o[a].valueOf()))return!1}return!0}function Gi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qi=(e,t,n)=>e??t??n,q0=ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ft(ds),o=pe(()=>e.route||r.value),s=Ft(Vi,0),a=pe(()=>{let p=A(s);const{matched:u}=o.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),i=pe(()=>o.value.matched[a.value]);$r(Vi,pe(()=>a.value+1)),$r(w0,i),$r(ds,o);const c=D();return gt(()=>[c.value,i.value,e.name],([p,u,d],[f,m,z])=>{u&&(u.instances[d]=p,m&&m!==u&&p&&p===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),p&&u&&(!m||!En(u,m)||!f)&&(u.enterCallbacks[d]||[]).forEach(y=>y(p))},{flush:"post"}),()=>{const p=o.value,u=e.name,d=i.value,f=d&&d.components[u];if(!f)return Wi(n.default,{Component:f,route:p});const m=d.props[u],z=m?m===!0?p.params:typeof m=="function"?m(p):m:null,S=$n(f,Ae({},z,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Wi(n.default,{Component:S,route:p})||S}}});function Wi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const W0=q0;function K0(e){const t=L0(e.routes,e),n=e.parseQuery||v0,r=e.stringifyQuery||Li,o=e.history,s=Nn(),a=Nn(),i=Nn(),c=Qc(Zt);let p=Zt;Cn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=To.bind(null,L=>""+L),d=To.bind(null,n0),f=To.bind(null,gr);function m(L,X){let G,te;return Wl(L)?(G=t.getRecordMatcher(L),te=X):te=L,t.addRoute(te,G)}function z(L){const X=t.getRecordMatcher(L);X&&t.removeRoute(X)}function y(){return t.getRoutes().map(L=>L.record)}function S(L){return!!t.getRecordMatcher(L)}function R(L,X){if(X=Ae({},X||c.value),typeof L=="string"){const $=$o(n,L,X.path),E=t.resolve({path:$.path},X),N=o.createHref($.fullPath);return Ae($,E,{params:f(E.params),hash:gr($.hash),redirectedFrom:void 0,href:N})}let G;if(L.path!=null)G=Ae({},L,{path:$o(n,L.path,X.path).path});else{const $=Ae({},L.params);for(const E in $)$[E]==null&&delete $[E];G=Ae({},L,{params:d($)}),X.params=d(X.params)}const te=t.resolve(G,X),b=L.hash||"";te.params=u(f(te.params));const k=s0(r,Ae({},L,{hash:Qp(b),path:te.path})),I=o.createHref(k);return Ae({fullPath:k,hash:b,query:r===Li?y0(L.query):L.query||{}},te,{redirectedFrom:void 0,href:I})}function x(L){return typeof L=="string"?$o(n,L,c.value.path):Ae({},L)}function _(L,X){if(p!==L)return Fn(Be.NAVIGATION_CANCELLED,{from:X,to:L})}function C(L){return U(L)}function F(L){return C(Ae(x(L),{replace:!0}))}function V(L,X){const G=L.matched[L.matched.length-1];if(G&&G.redirect){const{redirect:te}=G;let b=typeof te=="function"?te(L,X):te;return typeof b=="string"&&(b=b.includes("?")||b.includes("#")?b=x(b):{path:b},b.params={}),Ae({query:L.query,hash:L.hash,params:b.path!=null?{}:L.params},b)}}function U(L,X){const G=p=R(L),te=c.value,b=L.state,k=L.force,I=L.replace===!0,$=V(G,te);if($)return U(Ae(x($),{state:typeof $=="object"?Ae({},b,$.state):b,force:k,replace:I}),X||G);const E=G;E.redirectedFrom=X;let N;return!k&&i0(r,te,G)&&(N=Fn(Be.NAVIGATION_DUPLICATED,{to:E,from:te}),je(te,te,!0,!1)),(N?Promise.resolve(N):ee(E,te)).catch(H=>jt(H)?jt(H,Be.NAVIGATION_GUARD_REDIRECT)?H:Z(H):se(H,E,te)).then(H=>{if(H){if(jt(H,Be.NAVIGATION_GUARD_REDIRECT))return U(Ae({replace:I},x(H.to),{state:typeof H.to=="object"?Ae({},b,H.to.state):b,force:k}),X||E)}else H=q(E,te,!0,I,b);return ae(E,te,H),H})}function j(L,X){const G=_(L,X);return G?Promise.reject(G):Promise.resolve()}function B(L){const X=Oe.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(L):L()}function ee(L,X){let G;const[te,b,k]=k0(L,X);G=Eo(te.reverse(),"beforeRouteLeave",L,X);for(const $ of te)$.leaveGuards.forEach(E=>{G.push(tn(E,L,X))});const I=j.bind(null,L,X);return G.push(I),ye(G).then(()=>{G=[];for(const $ of s.list())G.push(tn($,L,X));return G.push(I),ye(G)}).then(()=>{G=Eo(b,"beforeRouteUpdate",L,X);for(const $ of b)$.updateGuards.forEach(E=>{G.push(tn(E,L,X))});return G.push(I),ye(G)}).then(()=>{G=[];for(const $ of k)if($.beforeEnter)if(kt($.beforeEnter))for(const E of $.beforeEnter)G.push(tn(E,L,X));else G.push(tn($.beforeEnter,L,X));return G.push(I),ye(G)}).then(()=>(L.matched.forEach($=>$.enterCallbacks={}),G=Eo(k,"beforeRouteEnter",L,X,B),G.push(I),ye(G))).then(()=>{G=[];for(const $ of a.list())G.push(tn($,L,X));return G.push(I),ye(G)}).catch($=>jt($,Be.NAVIGATION_CANCELLED)?$:Promise.reject($))}function ae(L,X,G){i.list().forEach(te=>B(()=>te(L,X,G)))}function q(L,X,G,te,b){const k=_(L,X);if(k)return k;const I=X===Zt,$=Cn?history.state:{};G&&(te||I?o.replace(L.fullPath,Ae({scroll:I&&$&&$.scroll},b)):o.push(L.fullPath,b)),c.value=L,je(L,X,G,I),Z()}let ge;function Me(){ge||(ge=o.listen((L,X,G)=>{if(!ze.listening)return;const te=R(L),b=V(te,ze.currentRoute.value);if(b){U(Ae(b,{replace:!0,force:!0}),te).catch(or);return}p=te;const k=c.value;Cn&&m0(Fi(k.fullPath,G.delta),go()),ee(te,k).catch(I=>jt(I,Be.NAVIGATION_ABORTED|Be.NAVIGATION_CANCELLED)?I:jt(I,Be.NAVIGATION_GUARD_REDIRECT)?(U(Ae(x(I.to),{force:!0}),te).then($=>{jt($,Be.NAVIGATION_ABORTED|Be.NAVIGATION_DUPLICATED)&&!G.delta&&G.type===ls.pop&&o.go(-1,!1)}).catch(or),Promise.reject()):(G.delta&&o.go(-G.delta,!1),se(I,te,k))).then(I=>{I=I||q(te,k,!1),I&&(G.delta&&!jt(I,Be.NAVIGATION_CANCELLED)?o.go(-G.delta,!1):G.type===ls.pop&&jt(I,Be.NAVIGATION_ABORTED|Be.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),ae(te,k,I)}).catch(or)}))}let Ve=Nn(),xe=Nn(),fe;function se(L,X,G){Z(L);const te=xe.list();return te.length?te.forEach(b=>b(L,X,G)):console.error(L),Promise.reject(L)}function Te(){return fe&&c.value!==Zt?Promise.resolve():new Promise((L,X)=>{Ve.add([L,X])})}function Z(L){return fe||(fe=!L,Me(),Ve.list().forEach(([X,G])=>L?G(L):X()),Ve.reset()),L}function je(L,X,G,te){const{scrollBehavior:b}=e;if(!Cn||!b)return Promise.resolve();const k=!G&&b0(Fi(L.fullPath,0))||(te||!G)&&history.state&&history.state.scroll||null;return Sn().then(()=>b(L,X,k)).then(I=>I&&f0(I)).catch(I=>se(I,L,X))}const we=L=>o.go(L);let rt;const Oe=new Set,ze={currentRoute:c,listening:!0,addRoute:m,removeRoute:z,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:y,resolve:R,options:e,push:C,replace:F,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:s.add,beforeResolve:a.add,afterEach:i.add,onError:xe.add,isReady:Te,install(L){L.component("RouterLink",H0),L.component("RouterView",W0),L.config.globalProperties.$router=ze,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>A(c)}),Cn&&!rt&&c.value===Zt&&(rt=!0,C(o.location).catch(te=>{}));const X={};for(const te in Zt)Object.defineProperty(X,te,{get:()=>c.value[te],enumerable:!0});L.provide(Fs,ze),L.provide(Ls,$a(X)),L.provide(ds,c);const G=L.unmount;Oe.add(L),L.unmount=function(){Oe.delete(L),Oe.size<1&&(p=Zt,ge&&ge(),ge=null,c.value=Zt,rt=!1,fe=!1),G()}}};function ye(L){return L.reduce((X,G)=>X.then(()=>B(G)),Promise.resolve())}return ze}function X0(e){return Ft(Ls)}function Jl(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Jl(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Y0(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Jl(e))&&(r&&(r+=" "),r+=t);return r}const Z0=(e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},J0=(e,t)=>({classGroupId:e,validator:t}),Ql=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Yr="-",Ki=[],Q0="arbitrary..",ef=e=>{const t=nf(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:a=>{if(a.startsWith("[")&&a.endsWith("]"))return tf(a);const i=a.split(Yr),c=i[0]===""&&i.length>1?1:0;return ec(i,c,t)},getConflictingClassGroupIds:(a,i)=>{if(i){const c=r[a],p=n[a];return c?p?Z0(p,c):c:p||Ki}return n[a]||Ki}}},ec=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const o=e[t],s=n.nextPart.get(o);if(s){const p=ec(e,t+1,s);if(p)return p}const a=n.validators;if(a===null)return;const i=t===0?e.join(Yr):e.slice(t).join(Yr),c=a.length;for(let p=0;p<c;p++){const u=a[p];if(u.validator(i))return u.classGroupId}},tf=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?Q0+r:void 0})(),nf=e=>{const{theme:t,classGroups:n}=e;return rf(n,t)},rf=(e,t)=>{const n=Ql();for(const r in e){const o=e[r];Vs(o,n,r,t)}return n},Vs=(e,t,n,r)=>{const o=e.length;for(let s=0;s<o;s++){const a=e[s];of(a,t,n,r)}},of=(e,t,n,r)=>{if(typeof e=="string"){sf(e,t,n);return}if(typeof e=="function"){af(e,t,n,r);return}lf(e,t,n,r)},sf=(e,t,n)=>{const r=e===""?t:tc(t,e);r.classGroupId=n},af=(e,t,n,r)=>{if(cf(e)){Vs(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(J0(n,e))},lf=(e,t,n,r)=>{const o=Object.entries(e),s=o.length;for(let a=0;a<s;a++){const[i,c]=o[a];Vs(c,tc(t,i),n,r)}},tc=(e,t)=>{let n=e;const r=t.split(Yr),o=r.length;for(let s=0;s<o;s++){const a=r[s];let i=n.nextPart.get(a);i||(i=Ql(),n.nextPart.set(a,i)),n=i}return n},cf=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,df=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const o=(s,a)=>{n[s]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(s){let a=n[s];if(a!==void 0)return a;if((a=r[s])!==void 0)return o(s,a),a},set(s,a){s in n?n[s]=a:o(s,a)}}},us="!",Xi=":",uf=[],Yi=(e,t,n,r,o)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:o}),pf=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=o=>{const s=[];let a=0,i=0,c=0,p;const u=o.length;for(let y=0;y<u;y++){const S=o[y];if(a===0&&i===0){if(S===Xi){s.push(o.slice(c,y)),c=y+1;continue}if(S==="/"){p=y;continue}}S==="["?a++:S==="]"?a--:S==="("?i++:S===")"&&i--}const d=s.length===0?o:o.slice(c);let f=d,m=!1;d.endsWith(us)?(f=d.slice(0,-1),m=!0):d.startsWith(us)&&(f=d.slice(1),m=!0);const z=p&&p>c?p-c:void 0;return Yi(s,m,f,z)};if(t){const o=t+Xi,s=r;r=a=>a.startsWith(o)?s(a.slice(o.length)):Yi(uf,!1,a,void 0,!0)}if(n){const o=r;r=s=>n({className:s,parseClassName:o})}return r},ff=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{t.set(n,1e6+r)}),n=>{const r=[];let o=[];for(let s=0;s<n.length;s++){const a=n[s],i=a[0]==="[",c=t.has(a);i||c?(o.length>0&&(o.sort(),r.push(...o),o=[]),r.push(a)):o.push(a)}return o.length>0&&(o.sort(),r.push(...o)),r}},mf=e=>({cache:df(e.cacheSize),parseClassName:pf(e),sortModifiers:ff(e),postfixLookupClassGroupIds:bf(e),...ef(e)}),bf=e=>{const t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let r=0;r<n.length;r++)t[n[r]]=!0;return t},gf=/\s+/,hf=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:s,postfixLookupClassGroupIds:a}=t,i=[],c=e.trim().split(gf);let p="";for(let u=c.length-1;u>=0;u-=1){const d=c[u],{isExternal:f,modifiers:m,hasImportantModifier:z,baseClassName:y,maybePostfixModifierPosition:S}=n(d);if(f){p=d+(p.length>0?" "+p:p);continue}let R=!!S,x;if(R){const U=y.substring(0,S);x=r(U);const j=x&&a[x]?r(y):void 0;j&&j!==x&&(x=j,R=!1)}else x=r(y);if(!x){if(!R){p=d+(p.length>0?" "+p:p);continue}if(x=r(y),!x){p=d+(p.length>0?" "+p:p);continue}R=!1}const _=m.length===0?"":m.length===1?m[0]:s(m).join(":"),C=z?_+us:_,F=C+x;if(i.indexOf(F)>-1)continue;i.push(F);const V=o(x,R);for(let U=0;U<V.length;++U){const j=V[U];i.push(C+j)}p=d+(p.length>0?" "+p:p)}return p},xf=(...e)=>{let t=0,n,r,o="";for(;t<e.length;)(n=e[t++])&&(r=nc(n))&&(o&&(o+=" "),o+=r);return o},nc=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=nc(e[r]))&&(n&&(n+=" "),n+=t);return n},vf=(e,...t)=>{let n,r,o,s;const a=c=>{const p=t.reduce((u,d)=>d(u),e());return n=mf(p),r=n.cache.get,o=n.cache.set,s=i,i(c)},i=c=>{const p=r(c);if(p)return p;const u=hf(c,n);return o(c,u),u};return s=a,(...c)=>s(xf(...c))},yf=[],Ge=e=>{const t=n=>n[e]||yf;return t.isThemeGetter=!0,t.themeKey=e,t},rc=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,oc=/^\((?:(\w[\w-]*):)?(.+)\)$/i,wf=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,kf=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,zf=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,_f=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,Cf=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Sf=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Jt=e=>wf.test(e),he=e=>!!e&&!Number.isNaN(Number(e)),It=e=>!!e&&Number.isInteger(Number(e)),Fo=e=>e.endsWith("%")&&he(e.slice(0,-1)),Bt=e=>kf.test(e),sc=()=>!0,Af=e=>zf.test(e)&&!_f.test(e),Os=()=>!1,If=e=>Cf.test(e),Mf=e=>Sf.test(e),Rf=e=>!J(e)&&!Q(e),Tf=e=>e.startsWith("@container")&&(e[10]==="/"&&e[11]!==void 0||e[11]==="s"&&e[16]!==void 0&&e.startsWith("-size/",10)||e[11]==="n"&&e[18]!==void 0&&e.startsWith("-normal/",10)),$f=e=>un(e,lc,Os),J=e=>rc.test(e),bn=e=>un(e,cc,Af),Zi=e=>un(e,jf,he),Pf=e=>un(e,uc,sc),Ef=e=>un(e,dc,Os),Ji=e=>un(e,ic,Os),Ff=e=>un(e,ac,Mf),Ir=e=>un(e,pc,If),Q=e=>oc.test(e),Hn=e=>wn(e,cc),Lf=e=>wn(e,dc),Qi=e=>wn(e,ic),Vf=e=>wn(e,lc),Of=e=>wn(e,ac),Mr=e=>wn(e,pc,!0),Df=e=>wn(e,uc,!0),un=(e,t,n)=>{const r=rc.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},wn=(e,t,n=!1)=>{const r=oc.exec(e);return r?r[1]?t(r[1]):n:!1},ic=e=>e==="position"||e==="percentage",ac=e=>e==="image"||e==="url",lc=e=>e==="length"||e==="size"||e==="bg-size",cc=e=>e==="length",jf=e=>e==="number",dc=e=>e==="family-name",uc=e=>e==="number"||e==="weight",pc=e=>e==="shadow",Bf=()=>{const e=Ge("color"),t=Ge("font"),n=Ge("text"),r=Ge("font-weight"),o=Ge("tracking"),s=Ge("leading"),a=Ge("breakpoint"),i=Ge("container"),c=Ge("spacing"),p=Ge("radius"),u=Ge("shadow"),d=Ge("inset-shadow"),f=Ge("text-shadow"),m=Ge("drop-shadow"),z=Ge("blur"),y=Ge("perspective"),S=Ge("aspect"),R=Ge("ease"),x=Ge("animate"),_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],C=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],F=()=>[...C(),Q,J],V=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto","contain","none"],j=()=>[Q,J,c],B=()=>[Jt,"full","auto",...j()],ee=()=>[It,"none","subgrid",Q,J],ae=()=>["auto",{span:["full",It,Q,J]},It,Q,J],q=()=>[It,"auto",Q,J],ge=()=>["auto","min","max","fr",Q,J],Me=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ve=()=>["start","end","center","stretch","center-safe","end-safe"],xe=()=>["auto",...j()],fe=()=>[Jt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...j()],se=()=>[i,Jt,"screen","full","dvw","lvw","svw","min","max","fit",...j()],Te=()=>[Jt,"screen","full","lh","dvh","lvh","svh","min","max","fit",...j()],Z=()=>[e,Q,J],je=()=>[...C(),Qi,Ji,{position:[Q,J]}],we=()=>["no-repeat",{repeat:["","x","y","space","round"]}],rt=()=>["auto","cover","contain",Vf,$f,{size:[Q,J]}],Oe=()=>[Fo,Hn,bn],ze=()=>["","none","full",p,Q,J],ye=()=>["",he,Hn,bn],L=()=>["solid","dashed","dotted","double"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],G=()=>[he,Fo,Qi,Ji],te=()=>["","none",z,Q,J],b=()=>["none",he,Q,J],k=()=>["none",he,Q,J],I=()=>[he,Q,J],$=()=>[Jt,"full",...j()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Bt],breakpoint:[Bt],color:[sc],container:[Bt],"drop-shadow":[Bt],ease:["in","out","in-out"],font:[Rf],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Bt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Bt],shadow:[Bt],spacing:["px",he],text:[Bt],"text-shadow":[Bt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Jt,J,Q,S]}],container:["container"],"container-type":[{"@container":["","normal","size",Q,J]}],"container-named":[Tf],columns:[{columns:[he,"auto",J,Q,i]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:F()}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:B()}],"inset-x":[{"inset-x":B()}],"inset-y":[{"inset-y":B()}],start:[{"inset-s":B(),start:B()}],end:[{"inset-e":B(),end:B()}],"inset-bs":[{"inset-bs":B()}],"inset-be":[{"inset-be":B()}],top:[{top:B()}],right:[{right:B()}],bottom:[{bottom:B()}],left:[{left:B()}],visibility:["visible","invisible","collapse"],z:[{z:[It,"auto",Q,J]}],basis:[{basis:[Jt,"full","auto",i,...j()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[he,Jt,"auto","initial","none",J]}],grow:[{grow:["",he,Q,J]}],shrink:[{shrink:["",he,Q,J]}],order:[{order:[It,"first","last","none",Q,J]}],"grid-cols":[{"grid-cols":ee()}],"col-start-end":[{col:ae()}],"col-start":[{"col-start":q()}],"col-end":[{"col-end":q()}],"grid-rows":[{"grid-rows":ee()}],"row-start-end":[{row:ae()}],"row-start":[{"row-start":q()}],"row-end":[{"row-end":q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ge()}],"auto-rows":[{"auto-rows":ge()}],gap:[{gap:j()}],"gap-x":[{"gap-x":j()}],"gap-y":[{"gap-y":j()}],"justify-content":[{justify:[...Me(),"normal"]}],"justify-items":[{"justify-items":[...Ve(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ve()]}],"align-content":[{content:["normal",...Me()]}],"align-items":[{items:[...Ve(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ve(),{baseline:["","last"]}]}],"place-content":[{"place-content":Me()}],"place-items":[{"place-items":[...Ve(),"baseline"]}],"place-self":[{"place-self":["auto",...Ve()]}],p:[{p:j()}],px:[{px:j()}],py:[{py:j()}],ps:[{ps:j()}],pe:[{pe:j()}],pbs:[{pbs:j()}],pbe:[{pbe:j()}],pt:[{pt:j()}],pr:[{pr:j()}],pb:[{pb:j()}],pl:[{pl:j()}],m:[{m:xe()}],mx:[{mx:xe()}],my:[{my:xe()}],ms:[{ms:xe()}],me:[{me:xe()}],mbs:[{mbs:xe()}],mbe:[{mbe:xe()}],mt:[{mt:xe()}],mr:[{mr:xe()}],mb:[{mb:xe()}],ml:[{ml:xe()}],"space-x":[{"space-x":j()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":j()}],"space-y-reverse":["space-y-reverse"],size:[{size:fe()}],"inline-size":[{inline:["auto",...se()]}],"min-inline-size":[{"min-inline":["auto",...se()]}],"max-inline-size":[{"max-inline":["none",...se()]}],"block-size":[{block:["auto",...Te()]}],"min-block-size":[{"min-block":["auto",...Te()]}],"max-block-size":[{"max-block":["none",...Te()]}],w:[{w:[i,"screen",...fe()]}],"min-w":[{"min-w":[i,"screen","none",...fe()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[a]},...fe()]}],h:[{h:["screen","lh",...fe()]}],"min-h":[{"min-h":["screen","lh","none",...fe()]}],"max-h":[{"max-h":["screen","lh","none",...fe()]}],"font-size":[{text:["base",n,Hn,bn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Df,Pf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Fo,J]}],"font-family":[{font:[Lf,Ef,t]}],"font-features":[{"font-features":[J]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,Q,J]}],"line-clamp":[{"line-clamp":[he,"none",Q,Zi]}],leading:[{leading:["none",s,...j()]}],"list-image":[{"list-image":["none",Q,J]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Q,J]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:Z()}],"text-color":[{text:Z()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...L(),"wavy"]}],"text-decoration-thickness":[{decoration:[he,"from-font","auto",Q,bn]}],"text-decoration-color":[{decoration:Z()}],"underline-offset":[{"underline-offset":[he,"auto",Q,J]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:j()}],"tab-size":[{tab:[It,Q,J]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Q,J]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Q,J]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:je()}],"bg-repeat":[{bg:we()}],"bg-size":[{bg:rt()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},It,Q,J],radial:["",Q,J],conic:["",It,Q,J]},Of,Ff]}],"bg-color":[{bg:Z()}],"gradient-from-pos":[{from:Oe()}],"gradient-via-pos":[{via:Oe()}],"gradient-to-pos":[{to:Oe()}],"gradient-from":[{from:Z()}],"gradient-via":[{via:Z()}],"gradient-to":[{to:Z()}],rounded:[{rounded:ze()}],"rounded-s":[{"rounded-s":ze()}],"rounded-e":[{"rounded-e":ze()}],"rounded-t":[{"rounded-t":ze()}],"rounded-r":[{"rounded-r":ze()}],"rounded-b":[{"rounded-b":ze()}],"rounded-l":[{"rounded-l":ze()}],"rounded-ss":[{"rounded-ss":ze()}],"rounded-se":[{"rounded-se":ze()}],"rounded-ee":[{"rounded-ee":ze()}],"rounded-es":[{"rounded-es":ze()}],"rounded-tl":[{"rounded-tl":ze()}],"rounded-tr":[{"rounded-tr":ze()}],"rounded-br":[{"rounded-br":ze()}],"rounded-bl":[{"rounded-bl":ze()}],"border-w":[{border:ye()}],"border-w-x":[{"border-x":ye()}],"border-w-y":[{"border-y":ye()}],"border-w-s":[{"border-s":ye()}],"border-w-e":[{"border-e":ye()}],"border-w-bs":[{"border-bs":ye()}],"border-w-be":[{"border-be":ye()}],"border-w-t":[{"border-t":ye()}],"border-w-r":[{"border-r":ye()}],"border-w-b":[{"border-b":ye()}],"border-w-l":[{"border-l":ye()}],"divide-x":[{"divide-x":ye()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ye()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...L(),"hidden","none"]}],"divide-style":[{divide:[...L(),"hidden","none"]}],"border-color":[{border:Z()}],"border-color-x":[{"border-x":Z()}],"border-color-y":[{"border-y":Z()}],"border-color-s":[{"border-s":Z()}],"border-color-e":[{"border-e":Z()}],"border-color-bs":[{"border-bs":Z()}],"border-color-be":[{"border-be":Z()}],"border-color-t":[{"border-t":Z()}],"border-color-r":[{"border-r":Z()}],"border-color-b":[{"border-b":Z()}],"border-color-l":[{"border-l":Z()}],"divide-color":[{divide:Z()}],"outline-style":[{outline:[...L(),"none","hidden"]}],"outline-offset":[{"outline-offset":[he,Q,J]}],"outline-w":[{outline:["",he,Hn,bn]}],"outline-color":[{outline:Z()}],shadow:[{shadow:["","inner","none",u,Mr,Ir]}],"shadow-color":[{shadow:Z()}],"inset-shadow":[{"inset-shadow":["none",d,Mr,Ir]}],"inset-shadow-color":[{"inset-shadow":Z()}],"ring-w":[{ring:ye()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:Z()}],"ring-offset-w":[{"ring-offset":[he,bn]}],"ring-offset-color":[{"ring-offset":Z()}],"inset-ring-w":[{"inset-ring":ye()}],"inset-ring-color":[{"inset-ring":Z()}],"text-shadow":[{"text-shadow":["none",f,Mr,Ir]}],"text-shadow-color":[{"text-shadow":Z()}],opacity:[{opacity:[he,Q,J]}],"mix-blend":[{"mix-blend":[...X(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":X()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[he]}],"mask-image-linear-from-pos":[{"mask-linear-from":G()}],"mask-image-linear-to-pos":[{"mask-linear-to":G()}],"mask-image-linear-from-color":[{"mask-linear-from":Z()}],"mask-image-linear-to-color":[{"mask-linear-to":Z()}],"mask-image-t-from-pos":[{"mask-t-from":G()}],"mask-image-t-to-pos":[{"mask-t-to":G()}],"mask-image-t-from-color":[{"mask-t-from":Z()}],"mask-image-t-to-color":[{"mask-t-to":Z()}],"mask-image-r-from-pos":[{"mask-r-from":G()}],"mask-image-r-to-pos":[{"mask-r-to":G()}],"mask-image-r-from-color":[{"mask-r-from":Z()}],"mask-image-r-to-color":[{"mask-r-to":Z()}],"mask-image-b-from-pos":[{"mask-b-from":G()}],"mask-image-b-to-pos":[{"mask-b-to":G()}],"mask-image-b-from-color":[{"mask-b-from":Z()}],"mask-image-b-to-color":[{"mask-b-to":Z()}],"mask-image-l-from-pos":[{"mask-l-from":G()}],"mask-image-l-to-pos":[{"mask-l-to":G()}],"mask-image-l-from-color":[{"mask-l-from":Z()}],"mask-image-l-to-color":[{"mask-l-to":Z()}],"mask-image-x-from-pos":[{"mask-x-from":G()}],"mask-image-x-to-pos":[{"mask-x-to":G()}],"mask-image-x-from-color":[{"mask-x-from":Z()}],"mask-image-x-to-color":[{"mask-x-to":Z()}],"mask-image-y-from-pos":[{"mask-y-from":G()}],"mask-image-y-to-pos":[{"mask-y-to":G()}],"mask-image-y-from-color":[{"mask-y-from":Z()}],"mask-image-y-to-color":[{"mask-y-to":Z()}],"mask-image-radial":[{"mask-radial":[Q,J]}],"mask-image-radial-from-pos":[{"mask-radial-from":G()}],"mask-image-radial-to-pos":[{"mask-radial-to":G()}],"mask-image-radial-from-color":[{"mask-radial-from":Z()}],"mask-image-radial-to-color":[{"mask-radial-to":Z()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":C()}],"mask-image-conic-pos":[{"mask-conic":[he]}],"mask-image-conic-from-pos":[{"mask-conic-from":G()}],"mask-image-conic-to-pos":[{"mask-conic-to":G()}],"mask-image-conic-from-color":[{"mask-conic-from":Z()}],"mask-image-conic-to-color":[{"mask-conic-to":Z()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:je()}],"mask-repeat":[{mask:we()}],"mask-size":[{mask:rt()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Q,J]}],filter:[{filter:["","none",Q,J]}],blur:[{blur:te()}],brightness:[{brightness:[he,Q,J]}],contrast:[{contrast:[he,Q,J]}],"drop-shadow":[{"drop-shadow":["","none",m,Mr,Ir]}],"drop-shadow-color":[{"drop-shadow":Z()}],grayscale:[{grayscale:["",he,Q,J]}],"hue-rotate":[{"hue-rotate":[he,Q,J]}],invert:[{invert:["",he,Q,J]}],saturate:[{saturate:[he,Q,J]}],sepia:[{sepia:["",he,Q,J]}],"backdrop-filter":[{"backdrop-filter":["","none",Q,J]}],"backdrop-blur":[{"backdrop-blur":te()}],"backdrop-brightness":[{"backdrop-brightness":[he,Q,J]}],"backdrop-contrast":[{"backdrop-contrast":[he,Q,J]}],"backdrop-grayscale":[{"backdrop-grayscale":["",he,Q,J]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[he,Q,J]}],"backdrop-invert":[{"backdrop-invert":["",he,Q,J]}],"backdrop-opacity":[{"backdrop-opacity":[he,Q,J]}],"backdrop-saturate":[{"backdrop-saturate":[he,Q,J]}],"backdrop-sepia":[{"backdrop-sepia":["",he,Q,J]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":j()}],"border-spacing-x":[{"border-spacing-x":j()}],"border-spacing-y":[{"border-spacing-y":j()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Q,J]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[he,"initial",Q,J]}],ease:[{ease:["linear","initial",R,Q,J]}],delay:[{delay:[he,Q,J]}],animate:[{animate:["none",x,Q,J]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[y,Q,J]}],"perspective-origin":[{"perspective-origin":F()}],rotate:[{rotate:b()}],"rotate-x":[{"rotate-x":b()}],"rotate-y":[{"rotate-y":b()}],"rotate-z":[{"rotate-z":b()}],scale:[{scale:k()}],"scale-x":[{"scale-x":k()}],"scale-y":[{"scale-y":k()}],"scale-z":[{"scale-z":k()}],"scale-3d":["scale-3d"],skew:[{skew:I()}],"skew-x":[{"skew-x":I()}],"skew-y":[{"skew-y":I()}],transform:[{transform:[Q,J,"","none","gpu","cpu"]}],"transform-origin":[{origin:F()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:$()}],"translate-x":[{"translate-x":$()}],"translate-y":[{"translate-y":$()}],"translate-z":[{"translate-z":$()}],"translate-none":["translate-none"],zoom:[{zoom:[It,Q,J]}],accent:[{accent:Z()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:Z()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Q,J]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":Z()}],"scrollbar-track-color":[{"scrollbar-track":Z()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":j()}],"scroll-mx":[{"scroll-mx":j()}],"scroll-my":[{"scroll-my":j()}],"scroll-ms":[{"scroll-ms":j()}],"scroll-me":[{"scroll-me":j()}],"scroll-mbs":[{"scroll-mbs":j()}],"scroll-mbe":[{"scroll-mbe":j()}],"scroll-mt":[{"scroll-mt":j()}],"scroll-mr":[{"scroll-mr":j()}],"scroll-mb":[{"scroll-mb":j()}],"scroll-ml":[{"scroll-ml":j()}],"scroll-p":[{"scroll-p":j()}],"scroll-px":[{"scroll-px":j()}],"scroll-py":[{"scroll-py":j()}],"scroll-ps":[{"scroll-ps":j()}],"scroll-pe":[{"scroll-pe":j()}],"scroll-pbs":[{"scroll-pbs":j()}],"scroll-pbe":[{"scroll-pbe":j()}],"scroll-pt":[{"scroll-pt":j()}],"scroll-pr":[{"scroll-pr":j()}],"scroll-pb":[{"scroll-pb":j()}],"scroll-pl":[{"scroll-pl":j()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Q,J]}],fill:[{fill:["none",...Z()]}],"stroke-w":[{stroke:[he,Hn,bn,Zi]}],stroke:[{stroke:["none",...Z()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["start","end","right","left"],"inset-y":["inset-bs","inset-be","top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["ps","pe","pr","pl"],py:["pbs","pbe","pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["ms","me","mr","ml"],my:["mbs","mbe","mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-s","border-w-e","border-w-r","border-w-l"],"border-w-y":["border-w-bs","border-w-be","border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-s","border-color-e","border-color-r","border-color-l"],"border-color-y":["border-color-bs","border-color-be","border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-ms","scroll-me","scroll-mr","scroll-ml"],"scroll-my":["scroll-mbs","scroll-mbe","scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-ps","scroll-pe","scroll-pr","scroll-pl"],"scroll-py":["scroll-pbs","scroll-pbe","scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Nf=vf(Bf);function be(...e){return Nf(Y0(e))}const Hf={class:"h-full w-full overflow-visible",xmlns:"http://www.w3.org/2000/svg"},Uf=["id"],Gf=["stop-color"],qf=["stop-color"],Wf=["rx","ry","stroke","stroke-width","stroke-dasharray"],Kf=["rx","ry","stroke","stroke-width","stroke-dasharray"],Xf=ce({__name:"BorderBeam",props:{borderWidth:{default:2},size:{default:20},duration:{default:6},colorFrom:{default:"#38bdf8"},colorTo:{default:"#a855f7"},delay:{default:0},reverse:{type:Boolean,default:!1},borderRadius:{default:16},glow:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=As(),r=pe(()=>{if(typeof t.borderRadius=="number")return t.borderRadius;const i=parseFloat(t.borderRadius);return isNaN(i)?16:i}),o=pe(()=>t.size>50?18:Math.min(Math.max(t.size,5),80)),s=pe(()=>`${o.value} ${100-o.value}`),a=pe(()=>({animationDuration:`${t.duration}s`,animationDelay:`-${t.delay}s`,animationDirection:t.reverse?"reverse":"normal"}));return(i,c)=>(g(),v("div",{class:T(A(be)("pointer-events-none absolute inset-0 rounded-[inherit] overflow-visible",t.class))},[(g(),v("svg",Hf,[l("defs",null,[l("linearGradient",{id:`border-beam-grad-${A(n)}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[l("stop",{offset:"0%","stop-color":t.colorFrom},null,8,Gf),l("stop",{offset:"100%","stop-color":t.colorTo},null,8,qf)],8,Uf)]),t.glow?(g(),v("rect",{key:0,pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${A(n)})`,"stroke-width":t.borderWidth*2,"stroke-dasharray":s.value,"stroke-linecap":"round",opacity:"0.45",class:"border-beam-svg-motion blur-[3px]",style:ke(a.value)},null,12,Wf)):ne("",!0),l("rect",{pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${A(n)})`,"stroke-width":t.borderWidth,"stroke-dasharray":s.value,"stroke-linecap":"round",class:"border-beam-svg-motion",style:ke(a.value)},null,12,Kf)]))],2))}}),He=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},ps=He(Xf,[["__scopeId","data-v-bf918acf"]]),Yf={class:"relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-white"},Zf=ce({__name:"ShimmerButton",props:{shimmerColor:{default:"#38bdf8"},shimmerSize:{default:"0.12em"},shimmerDuration:{default:"2.5s"},borderRadius:{default:"9999px"},class:{}},setup(e){const t=e,n=pe(()=>({"--shimmer-color":t.shimmerColor,"--shimmer-size":t.shimmerSize,"--speed":t.shimmerDuration,"--radius":t.borderRadius}));return(r,o)=>(g(),v("button",{style:ke(n.value),class:T(A(be)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white transition-all duration-300 active:scale-95","border border-white/10 [border-radius:var(--radius)]","bg-zinc-900/90 shadow-md hover:shadow-lg hover:shadow-sky-500/20 dark:bg-black/90",t.class))},[o[0]||(o[0]=l("div",{class:"shimmer-spin-container pointer-events-none absolute -inset-[100%] [aspect-ratio:1] [border-radius:inherit]"},[l("div",{class:"shimmer-spin-gradient h-full w-full animate-shimmer-spin"})],-1)),o[1]||(o[1]=l("div",{class:"absolute [inset:var(--shimmer-size)] [border-radius:inherit] bg-zinc-950/95 transition-colors duration-300 group-hover:bg-zinc-900/95"},null,-1)),l("span",Yf,[dt(r.$slots,"default",{},void 0,!0)])],6))}}),sr=He(Zf,[["__scopeId","data-v-6b251134"]]),Jf=ce({__name:"ShinyText",props:{text:{},duration:{default:2.5},variant:{default:"white"},class:{}},setup(e){const t=e,n=pe(()=>({"--duration":`${t.duration}s`}));return(r,o)=>(g(),v("span",{style:ke(n.value),class:T(A(be)("shiny-text-root inline-block font-bold bg-clip-text text-transparent",t.variant==="white"&&"shiny-variant-white",t.variant==="cyber"&&"shiny-variant-cyber",t.class))},[dt(r.$slots,"default",{},()=>[Re(P(t.text),1)],!0)],6))}}),ir=He(Jf,[["__scopeId","data-v-31108f82"]]),Qf=ce({__name:"RetroGrid",props:{angle:{default:65},cellSize:{default:60},opacity:{default:.5},lightLineColor:{default:"#94a3b8"},darkLineColor:{default:"#38bdf8"},mask:{type:Boolean,default:!0},maskClass:{},class:{}},setup(e){const t=e,n=pe(()=>({"--grid-angle":`${t.angle}deg`,"--cell-size":`${t.cellSize}px`,"--opacity":t.opacity.toString(),"--light-line":t.lightLineColor,"--dark-line":t.darkLineColor}));return(r,o)=>(g(),v("div",{style:ke(n.value),class:T(A(be)("pointer-events-none absolute h-full w-full overflow-hidden opacity-[var(--opacity)] [perspective:200px]",t.class))},[l("div",{class:T(A(be)("absolute inset-0 [transform:rotateX(var(--grid-angle))]",t.mask&&"retro-grid-horizon-mask"))},[...o[0]||(o[0]=[l("div",{class:"retro-grid-plane animate-retro-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]"},null,-1)])],2)],6))}}),fs=He(Qf,[["__scopeId","data-v-2d20ad14"]]),fc=ce({__name:"BentoGrid",props:{class:{}},setup(e){const t=e;return(n,r)=>(g(),v("div",{class:T(A(be)("grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",t.class))},[dt(n.$slots,"default")],2))}}),em={class:"relative z-0 h-44 w-full overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"},tm={class:"relative z-10 flex flex-col gap-2 pt-4"},nm={class:"flex items-center gap-2.5"},rm={class:"text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},om={class:"text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"},sm={key:0,class:"mt-3 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400"},im=ce({__name:"BentoCard",props:{name:{},description:{},class:{},href:{},cta:{},spotlightRadius:{default:300}},setup(e){const t=e,n=D(0),r=D(0),o=D(!1);function s(a){const i=a.currentTarget.getBoundingClientRect();n.value=a.clientX-i.left,r.value=a.clientY-i.top}return(a,i)=>{const c=vr("router-link");return g(),v("div",{class:T(A(be)("group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300","border border-zinc-200 bg-white/70 shadow-sm backdrop-blur-md hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10",t.class)),onMousemove:s,onMouseenter:i[0]||(i[0]=p=>o.value=!0),onMouseleave:i[1]||(i[1]=p=>o.value=!1)},[l("div",{class:"pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",style:ke({background:`radial-gradient(${t.spotlightRadius}px circle at ${n.value}px ${r.value}px, var(--spotlight-color), transparent 80%)`})},null,4),l("div",em,[dt(a.$slots,"background",{},void 0,!0)]),l("div",tm,[l("div",nm,[dt(a.$slots,"icon",{},void 0,!0),l("h3",rm,P(t.name),1)]),l("p",om,P(t.description),1),t.cta||a.$slots.cta?(g(),v("div",sm,[dt(a.$slots,"cta",{},()=>[t.href?(g(),de(c,{key:0,to:t.href,class:"inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"},{default:Y(()=>[Re(P(t.cta)+" ",1),i[2]||(i[2]=l("span",{"aria-hidden":"true"},"→",-1))]),_:1},8,["to"])):ne("",!0)],!0)])):ne("",!0)])],34)}}}),st=He(im,[["__scopeId","data-v-f7ebca2d"]]),am=ce({__name:"Marquee",props:{duration:{default:30},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},repeat:{default:4},class:{}},setup(e){const t=e,n=pe(()=>({"--duration":`${t.duration}s`}));return(r,o)=>(g(),v("div",{style:ke(n.value),class:T(A(be)("group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",t.vertical?"flex-col":"flex-row",t.class))},[(g(!0),v(re,null,ve(t.repeat,s=>(g(),v("div",{key:s,class:T(A(be)("flex shrink-0 justify-around [gap:var(--gap)]",t.vertical?"flex-col animate-marquee-vertical":"flex-row animate-marquee",t.pauseOnHover&&"group-hover:[animation-play-state:paused]",t.reverse&&"[animation-direction:reverse]"))},[dt(r.$slots,"default",{},void 0,!0)],2))),128))],6))}}),Fr=He(am,[["__scopeId","data-v-2ea856f7"]]),lm={"aria-hidden":"true",class:"pointer-events-none h-full w-full fill-neutral-400/60 dark:fill-neutral-600/60 transition-colors"},cm=["id","width","height","x","y"],dm=["cx","cy","r"],um=["fill"],mc=ce({__name:"DotPattern",props:{width:{default:20},height:{default:20},x:{default:0},y:{default:0},cx:{default:1},cy:{default:1},cr:{default:1},glow:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=As(),r=D(-9999),o=D(-9999);function s(i){if(!t.glow)return;const c=i.currentTarget.getBoundingClientRect();r.value=i.clientX-c.left,o.value=i.clientY-c.top}function a(){r.value=-9999,o.value=-9999}return(i,c)=>(g(),v("div",{class:T(A(be)("absolute inset-0 h-full w-full overflow-hidden",t.glow?"pointer-events-auto":"pointer-events-none",t.class)),onMousemove:s,onMouseleave:a},[(g(),v("svg",lm,[l("defs",null,[l("pattern",{id:A(n),width:t.width,height:t.height,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:t.x,y:t.y},[l("circle",{cx:t.cx,cy:t.cy,r:t.cr},null,8,dm)],8,cm)]),l("rect",{width:"100%",height:"100%",fill:`url(#${A(n)})`},null,8,um)])),t.glow?(g(),v("div",{key:0,class:"absolute inset-0 transition-opacity duration-300",style:ke({background:`radial-gradient(200px circle at ${r.value}px ${o.value}px, rgba(59, 130, 246, 0.15), transparent 80%)`})},null,4)):ne("",!0)],34))}}),pm={class:"relative z-10 h-full w-full"},bc=ce({__name:"InteractiveParticles",props:{quantity:{default:50},speed:{default:.6},maxRadius:{default:2},mouseRadius:{default:100},color:{},connectLines:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=D(null);let r=null,o=[];const s={x:-9999,y:-9999};function a(d,f){o=[];for(let m=0;m<t.quantity;m++)o.push({x:Math.random()*d,y:Math.random()*f,vx:(Math.random()-.5)*t.speed,vy:(Math.random()-.5)*t.speed,size:Math.random()*t.maxRadius+.8,baseAlpha:Math.random()*.5+.2,alpha:Math.random()*.5+.2})}function i(){const d=n.value;if(!d)return;const f=window.devicePixelRatio||1,m=d.getBoundingClientRect();d.width=m.width*f,d.height=m.height*f;const z=d.getContext("2d");z&&z.scale(f,f),a(m.width,m.height)}function c(d){const f=n.value;if(!f)return;const m=f.getBoundingClientRect();s.x=d.clientX-m.left,s.y=d.clientY-m.top}function p(){s.x=-9999,s.y=-9999}function u(){const d=n.value;if(!d)return;const f=d.getContext("2d");if(!f)return;const m=d.getBoundingClientRect(),z=m.width,y=m.height;f.clearRect(0,0,z,y);const R=document.documentElement.classList.contains("dark")?"255, 255, 255":"59, 130, 246",x=t.color||R;for(let _=0;_<o.length;_++){const C=o[_];C.x+=C.vx,C.y+=C.vy,(C.x<0||C.x>z)&&(C.vx*=-1),(C.y<0||C.y>y)&&(C.vy*=-1);const F=s.x-C.x,V=s.y-C.y,U=Math.sqrt(F*F+V*V);if(U<t.mouseRadius){const j=(t.mouseRadius-U)/t.mouseRadius;C.x-=F/U*j*2,C.y-=V/U*j*2,C.alpha=Math.min(C.baseAlpha+.4,.9)}else C.alpha=C.baseAlpha;if(f.beginPath(),f.arc(C.x,C.y,C.size,0,Math.PI*2),f.fillStyle=x.startsWith("#")?x:`rgba(${x}, ${C.alpha})`,f.fill(),t.connectLines)for(let j=_+1;j<o.length;j++){const B=o[j],ee=Math.hypot(C.x-B.x,C.y-B.y);if(ee<80){f.beginPath(),f.moveTo(C.x,C.y),f.lineTo(B.x,B.y);const ae=(1-ee/80)*.15;f.strokeStyle=`rgba(${R}, ${ae})`,f.lineWidth=.6,f.stroke()}}}r=requestAnimationFrame(u)}return We(()=>{i(),window.addEventListener("resize",i),u()}),Qe(()=>{window.removeEventListener("resize",i),r!==null&&cancelAnimationFrame(r)}),gt(()=>t.quantity,()=>{const d=n.value;if(d){const f=d.getBoundingClientRect();a(f.width,f.height)}}),(d,f)=>(g(),v("div",{class:T(A(be)("relative h-full w-full overflow-hidden",t.class)),onMousemove:c,onMouseleave:p},[l("canvas",{ref_key:"canvasRef",ref:n,class:"pointer-events-none absolute inset-0 h-full w-full"},null,512),l("div",pm,[dt(d.$slots,"default")])],34))}}),fm=ce({__name:"Meteors",props:{number:{default:20},angle:{default:215},minDelay:{default:.2},maxDelay:{default:1.2},minDuration:{default:2},maxDuration:{default:8},class:{}},setup(e){const t=e,n=pe(()=>Array.from({length:t.number}).map(()=>{const r=Math.floor(Math.random()*100),o=Math.floor(Math.random()*100),s=(Math.random()*(t.maxDelay-t.minDelay)+t.minDelay).toFixed(2),a=(Math.random()*(t.maxDuration-t.minDuration)+t.minDuration).toFixed(2);return{top:`${r}%`,left:`${o}%`,animationDelay:`${s}s`,animationDuration:`${a}s`}}));return(r,o)=>(g(),v("div",{class:T(A(be)("pointer-events-none absolute inset-0 overflow-hidden",t.class))},[(g(!0),v(re,null,ve(n.value,(s,a)=>(g(),v("span",{key:a,style:ke({...s,"--angle":`${t.angle}deg`}),class:"animate-meteor absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[var(--angle)] dark:bg-sky-400 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-slate-500 before:to-transparent dark:before:from-sky-400"},null,4))),128))],2))}}),gc=He(fm,[["__scopeId","data-v-7d09918c"]]),mm=ce({__name:"Ripple",props:{mainCircleSize:{default:210},mainCircleOpacity:{default:.24},numCircles:{default:8},class:{}},setup(e){const t=e;return(n,r)=>(g(),v("div",{class:T(A(be)("pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",t.class))},[(g(!0),v(re,null,ve(t.numCircles,o=>(g(),v("div",{key:o,style:ke({width:`${t.mainCircleSize+(o-1)*70}px`,height:`${t.mainCircleSize+(o-1)*70}px`,opacity:Math.max(.04,t.mainCircleOpacity-(o-1)*.025),animationDelay:`${(o-1)*.06}s`,borderStyle:o===t.numCircles?"dashed":"solid",borderWidth:"1px"}),class:"animate-ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-500/40 bg-blue-500/5 shadow-[0_0_16px_rgba(59,130,246,0.1)] dark:border-sky-400/30 dark:bg-sky-400/5"},null,4))),128))],2))}}),hc=He(mm,[["__scopeId","data-v-98c398f7"]]),Lr=ce({__name:"NumberTicker",props:{value:{},direction:{default:"up"},duration:{default:2},delay:{default:0},decimalPlaces:{default:0},class:{}},setup(e){const t=e,n=D(null),r=D("0");let o=null,s=null,a=!1;function i(u){return u===1?1:1-Math.pow(2,-10*u)}function c(u){return new Intl.NumberFormat("en-US",{minimumFractionDigits:t.decimalPlaces,maximumFractionDigits:t.decimalPlaces}).format(u)}function p(){if(a)return;a=!0;const u=t.direction==="down"?t.value:0,d=t.direction==="down"?0:t.value,f=t.duration*1e3;let m=null;setTimeout(()=>{function z(y){m||(m=y);const S=y-m,R=Math.min(S/f,1),x=i(R),_=u+(d-u)*x;r.value=c(_),R<1?o=requestAnimationFrame(z):r.value=c(d)}o=requestAnimationFrame(z)},t.delay*1e3)}return We(()=>{r.value=c(t.direction==="down"?t.value:0),n.value?(s=new IntersectionObserver(u=>{u[0].isIntersecting&&(p(),s&&s.disconnect())},{threshold:.1}),s.observe(n.value)):p()}),Qe(()=>{o&&cancelAnimationFrame(o),s&&s.disconnect()}),gt(()=>t.value,()=>{a=!1,p()}),(u,d)=>(g(),v("span",{ref_key:"spanRef",ref:n,class:T(A(be)("inline-block tabular-nums tracking-wider",t.class))},P(r.value),3))}}),bm=["width","height","viewBox"],gm=["d","stroke","stroke-width","stroke-opacity"],hm=["d","stroke","stroke-width"],xm=["id"],vm=["stop-color"],ym=["stop-color"],wm=["stop-color"],km=["from","to","dur","begin"],zm=["from","to","dur","begin"],Zr=ce({__name:"AnimatedBeam",props:{containerRef:{},fromRef:{},toRef:{},curvature:{default:0},reverse:{type:Boolean,default:!1},pathColor:{default:"#94a3b8"},pathWidth:{default:2},pathOpacity:{default:.2},gradientStartColor:{default:"#38bdf8"},gradientStopColor:{default:"#6366f1"},duration:{default:3},delay:{default:0},startXOffset:{default:0},startYOffset:{default:0},endXOffset:{default:0},endYOffset:{default:0},class:{}},setup(e){const t=e,n=As(),r=D(""),o=D({width:0,height:0});function s(c){return c?"value"in c?c.value:c instanceof HTMLElement?c:null:null}function a(){const c=s(t.containerRef),p=s(t.fromRef),u=s(t.toRef);if(!c||!p||!u)return;const d=c.getBoundingClientRect(),f=p.getBoundingClientRect(),m=u.getBoundingClientRect();o.value={width:d.width,height:d.height};const z=f.left-d.left+f.width/2+t.startXOffset,y=f.top-d.top+f.height/2+t.startYOffset,S=m.left-d.left+m.width/2+t.endXOffset,R=m.top-d.top+m.height/2+t.endYOffset,x=(z+S)/2,_=(y+R)/2,C=x,F=_-t.curvature;t.curvature===0?r.value=`M ${z},${y} L ${S},${R}`:r.value=`M ${z},${y} Q ${C},${F} ${S},${R}`}let i=null;return We(()=>{a(),window.addEventListener("resize",a);const c=s(t.containerRef);c&&(i=new ResizeObserver(()=>a()),i.observe(c))}),Qe(()=>{window.removeEventListener("resize",a),i&&i.disconnect()}),gt([()=>s(t.containerRef),()=>s(t.fromRef),()=>s(t.toRef),()=>t.curvature],()=>{a()}),(c,p)=>(g(),v("svg",{width:o.value.width,height:o.value.height,viewBox:`0 0 ${o.value.width} ${o.value.height}`,class:T(A(be)("pointer-events-none absolute inset-0 h-full w-full select-none overflow-visible",t.class))},[l("path",{d:r.value,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-opacity":t.pathOpacity,"stroke-linecap":"round"},null,8,gm),l("path",{d:r.value,fill:"none",stroke:`url(#beam-gradient-${A(n)})`,"stroke-width":t.pathWidth,"stroke-linecap":"round"},null,8,hm),l("defs",null,[l("linearGradient",{id:`beam-gradient-${A(n)}`,gradientUnits:"userSpaceOnUse"},[l("stop",{offset:"0%","stop-color":t.gradientStartColor,"stop-opacity":"0"},null,8,vm),l("stop",{offset:"50%","stop-color":t.gradientStartColor,"stop-opacity":"1"},null,8,ym),l("stop",{offset:"100%","stop-color":t.gradientStopColor,"stop-opacity":"0"},null,8,wm),l("animate",{attributeName:"x1",from:t.reverse?"100%":"-50%",to:t.reverse?"-50%":"100%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,km),l("animate",{attributeName:"x2",from:t.reverse?"150%":"0%",to:t.reverse?"0%":"150%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,zm)],8,xm)])],10,bm))}}),_m={class:"relative z-50 -translate-y-32 flex flex-col items-center px-5 text-center"},xc=ce({__name:"LampEffect",props:{glowColor:{default:"#06b6d4"},class:{}},setup(e){const t=e;return(n,r)=>(g(),v("div",{class:T(A(be)("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-2xl z-0",t.class))},[r[0]||(r[0]=Qo(`<div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"><div class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div><div class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"></div></div><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"><div class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"></div><div class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div></div><div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl"></div><div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div><div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div><div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></div><div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div><div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-950"></div></div>`,1)),l("div",_m,[dt(n.$slots,"default")])],2))}}),vc=ce({__name:"FlickeringGrid",props:{squareSize:{default:4},gridGap:{default:4},flickerChance:{default:.3},color:{},maxOpacity:{default:.3},class:{}},setup(e){const t=e,n=D(null),r=D(null);let o=null,s=new Float32Array(0),a=0,i=0;function c(d,f){a=Math.floor(d/(t.squareSize+t.gridGap)),i=Math.floor(f/(t.squareSize+t.gridGap)),s=new Float32Array(a*i);for(let m=0;m<s.length;m++)s[m]=Math.random()*t.maxOpacity}function p(){const d=n.value,f=r.value;if(!d||!f)return;const m=window.devicePixelRatio||1,z=d.getBoundingClientRect();f.width=z.width*m,f.height=z.height*m;const y=f.getContext("2d");y&&y.scale(m,m),c(z.width,z.height)}function u(){const d=r.value,f=n.value;if(!d||!f)return;const m=d.getContext("2d");if(!m)return;const z=f.getBoundingClientRect();m.clearRect(0,0,z.width,z.height);const S=document.documentElement.classList.contains("dark")?"148, 163, 184":"100, 116, 139",R=t.color||S;for(let x=0;x<i;x++)for(let _=0;_<a;_++){const C=x*a+_;Math.random()<t.flickerChance&&(s[C]=Math.random()*t.maxOpacity);const F=s[C];m.fillStyle=R.startsWith("#")?R:`rgba(${R}, ${F})`;const V=_*(t.squareSize+t.gridGap),U=x*(t.squareSize+t.gridGap);m.fillRect(V,U,t.squareSize,t.squareSize)}o=requestAnimationFrame(u)}return We(()=>{p(),window.addEventListener("resize",p),u()}),Qe(()=>{window.removeEventListener("resize",p),o&&cancelAnimationFrame(o)}),gt([()=>t.squareSize,()=>t.gridGap],()=>{p()}),(d,f)=>(g(),v("div",{ref_key:"containerRef",ref:n,class:T(A(be)("pointer-events-none relative h-full w-full overflow-hidden",t.class))},[l("canvas",{ref_key:"canvasRef",ref:r,class:"absolute inset-0 h-full w-full"},null,512)],2))}}),Cm={class:"relative overflow-hidden"},Sm={class:"relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center overflow-hidden"},Am={class:"relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200"},Im={class:"relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"},Mm={class:"relative z-10 mt-12 w-full max-w-2xl text-left"},Rm={class:"relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/80"},Tm={class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"},$m={class:"border-y border-zinc-200/80 bg-zinc-50/50 py-6 dark:border-zinc-800/80 dark:bg-zinc-950/40"},Pm={class:"mx-auto max-w-7xl px-4 text-center"},Em={id:"features",class:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"},Fm={class:"text-center max-w-3xl mx-auto mb-16 space-y-4"},Lm={class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"},Vm={class:"relative h-full w-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50/40 to-transparent dark:from-zinc-900/60 dark:to-transparent"},Om={class:"relative flex h-32 w-56 flex-col justify-between rounded-xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-md backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95"},Dm={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-50/50 to-blue-50/20 border border-blue-100/50 dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800"},jm={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50/30 to-white dark:from-zinc-950 dark:to-zinc-900"},Bm={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-50/30 to-transparent dark:from-zinc-900/50 dark:to-transparent"},Nm={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"},Hm={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50"},Um={class:"relative h-full w-full flex flex-col justify-center overflow-hidden rounded-xl p-3 bg-zinc-50/60 dark:bg-zinc-900/40"},Gm={class:"relative h-full w-full overflow-hidden rounded-xl bg-slate-950 p-4"},qm={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center"},Wm={class:"relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40"},Km={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent flex flex-col items-center justify-center p-4"},Xm={class:"text-4xl font-black text-emerald-600 dark:text-emerald-400"},Ym={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4"},Zm={class:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800/80"},Jm={class:"text-center max-w-3xl mx-auto mb-12 space-y-3"},Qm={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400"},eb={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},tb={class:"flex items-center justify-between mb-4"},nb={class:"flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60"},rb={class:"rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-[11px] font-mono font-bold text-zinc-600 dark:text-zinc-300"},ob={class:"text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2"},sb={class:"text-[11px] font-mono text-zinc-400 block mt-0.5"},ib={class:"mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"},ab={class:"mt-4 flex flex-wrap gap-1.5"},lb={class:"mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between"},cb={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"},db={class:"mt-8 flex items-center justify-center gap-4"},ub={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-20 dark:border-zinc-800/80 dark:bg-zinc-950/40"},pb={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},fb={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},mb={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},bb={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400"},gb={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},hb={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400"},xb={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},vb={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400"},yb=ce({__name:"HomeView",setup(e){const t=D(null),n=D(null),r=D(null),o=D(null);function s(u){switch(u){case"ai-native":return tr;case"interactive-nav":return rs;case"space-3d":return rr;case"borders-cards":return nn;case"kinetic-typography":return Pe;default:return Pe}}function a(u){return rn.filter(d=>d.suiteId===u)}const i=["Vue 3.5+","TypeScript","Tailwind CSS","Composition API","Vite 6","HTML5 Canvas","Web Animations API","Zero-Config"],c=D(!1);function p(){navigator.clipboard.writeText("npm i @vueuse/core clsx tailwind-merge"),c.value=!0,setTimeout(()=>{c.value=!1},2e3)}return(u,d)=>{const f=vr("router-link");return g(),v("div",Cm,[l("section",Sm,[w(fs,{angle:65,opacity:.45}),l("div",Am,[w(A(Pe),{class:"h-3.5 w-3.5 text-blue-500"}),w(ir,{text:"Vue 3 的动效原子代码库现已上线"}),d[0]||(d[0]=l("span",{class:"rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] text-blue-600 dark:text-blue-400"}," v1.0 ",-1))]),d[4]||(d[4]=l("h1",{class:"relative z-10 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight"},[Re(" 专属于 Vue 3 的 "),l("span",{class:"block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400"}," 高阶动效原子库 ")],-1)),d[5]||(d[5]=l("p",{class:"relative z-10 mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400"},[Re(" 不再重复造普通表单，全面对标 Magic UI 与 Aceternity UI。"),l("br",{class:"hidden sm:inline"}),Re(" 面向 "),l("strong",null,"AI 官网、SaaS 营销页、酷炫个人主页"),Re("，提供 60fps 单文件即用的动效积木。 ")],-1)),l("div",Im,[w(f,{to:"/docs/border-beam"},{default:Y(()=>[w(sr,{"shimmer-color":"#60a5fa",class:"h-12 px-8 text-base"},{default:Y(()=>[d[1]||(d[1]=l("span",null,"立即浏览组件",-1)),w(A(er),{class:"h-4 w-4"})]),_:1})]),_:1}),l("button",{type:"button",class:"inline-flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-800",onClick:p},[c.value?(g(),de(A(Kt),{key:0,class:"h-4 w-4 text-emerald-500"})):(g(),de(A(br),{key:1,class:"h-4 w-4 text-zinc-400"})),l("span",null,P(c.value?"已复制依赖指令":"复制基础依赖指令"),1)])]),l("div",Mm,[l("div",Rm,[w(ps,{size:90,duration:6,"color-from":"#38bdf8","color-to":"#a855f7","border-width":2,"border-radius":16}),d[3]||(d[3]=Qo('<div class="mb-4 flex items-center justify-between border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60"><div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-rose-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span><span class="ml-2 font-mono text-xs text-zinc-400">components/BorderBeam.vue</span></div><div class="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Zero-Config / 粘贴即跑</span></div></div>',1)),l("div",Tm,[d[2]||(d[2]=Qo('<div class="space-y-1 text-zinc-600 dark:text-zinc-300"><p><span class="text-purple-500">&lt;template&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;div</span> <span class="text-amber-500">class=</span><span class="text-emerald-500">&quot;relative rounded-2xl&quot;</span><span class="text-blue-500">&gt;</span></p><p class="pl-8"><span class="text-blue-500">&lt;BorderBeam</span> <span class="text-amber-500">:duration=</span><span class="text-emerald-500">&quot;5&quot;</span> <span class="text-amber-500">:border-width=</span><span class="text-emerald-500">&quot;2&quot;</span> <span class="text-blue-500">/&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;/div&gt;</span></p><p><span class="text-purple-500">&lt;/template&gt;</span></p></div>',1)),w(f,{to:"/docs/border-beam",class:"shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"},{default:Y(()=>[Re(" 浏览全部 "+P(A(rn).length)+" 款动效 → ",1)]),_:1})])])])]),l("section",$m,[l("div",Pm,[d[7]||(d[7]=l("p",{class:"mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase"}," 原生融合的技术栈与动效标准 ",-1)),w(Fr,{duration:25,"pause-on-hover":!0},{default:Y(()=>[(g(),v(re,null,ve(i,m=>l("div",{key:m,class:"flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-5 py-2 text-xs font-bold text-zinc-700 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300"},[d[6]||(d[6]=l("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),l("span",null,P(m),1)])),64))]),_:1})])]),l("section",Em,[l("div",Fm,[l("h2",Lm," 全面对标顶流 · 5 大主题套件 · "+P(A(rn).length)+" 款高阶动效全装配 ",1),d[8]||(d[8]=l("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 每一个组件都经过精心打磨，在移动端与桌面端保持 60fps 满帧性能，全部开箱即用，支持 Clean Light 与 Deep Dark 双模自适应。 ",-1))]),w(fc,null,{default:Y(()=>[w(st,{name:"Border Beam",description:"现代 CSS 路径动画，高光激光沿圆角边框飞速流转，AI 推理与核心 VIP 的视觉焦点",cta:"查看详情与代码",href:"/docs/border-beam"},{icon:Y(()=>[w(A(Pe),{class:"h-5 w-5 text-sky-500"})]),background:Y(()=>[l("div",Vm,[l("div",Om,[w(ps,{size:65,duration:3.5,"color-from":"#06b6d4","color-to":"#6366f1","border-width":2,"border-radius":12}),d[9]||(d[9]=l("div",{class:"flex items-center justify-between"},[l("div",{class:"flex items-center gap-2"},[l("span",{class:"relative flex h-2 w-2"},[l("span",{class:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),l("span",{class:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]),l("span",{class:"text-xs font-bold text-zinc-800 dark:text-zinc-200"},"AI 推理状态")]),l("span",{class:"rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-sky-600 dark:text-sky-400"},"360° 流动")],-1)),d[10]||(d[10]=l("div",{class:"space-y-1.5"},[l("div",{class:"h-2 w-4/5 rounded-full bg-zinc-200 dark:bg-zinc-700"}),l("div",{class:"h-2 w-3/5 rounded-full bg-gradient-to-r from-sky-500/40 to-indigo-500/40"})],-1))])])]),_:1}),w(st,{name:"Interactive Particles",description:"原生 Canvas 2D 粒子引擎，支持鼠标悬浮动态引力排斥、微线互联与 60fps 满帧性能",cta:"查看详情与代码",href:"/docs/interactive-particles"},{icon:Y(()=>[w(A(Rn),{class:"h-5 w-5 text-amber-500"})]),background:Y(()=>[l("div",Dm,[w(bc,{quantity:38,speed:.75,"mouse-radius":85,"connect-lines":!0,class:"absolute inset-0 h-full w-full"}),d[11]||(d[11]=l("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[l("div",{class:"flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1 text-xs font-mono font-medium text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900/60 dark:bg-zinc-900/80 dark:text-blue-400"},[l("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"}),l("span",null,"悬浮鼠标即刻磁吸交互")])],-1))])]),_:1}),w(st,{name:"Retro Grid",description:"3D 倾斜无限延展赛博网格，原生区分明暗模式线条色彩，渲染极具科技纵深感的背景",cta:"查看详情与代码",href:"/docs/retro-grid"},{icon:Y(()=>[w(A(nn),{class:"h-5 w-5 text-indigo-500"})]),background:Y(()=>[l("div",jm,[w(fs,{angle:65,opacity:.85,"cell-size":34,"light-line-color":"#6366f1","dark-line-color":"#38bdf8"}),d[12]||(d[12]=l("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[l("span",{class:"rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-xs backdrop-blur-md dark:border-indigo-900/80 dark:bg-zinc-900/90 dark:text-indigo-400"}," 3D 空间动态透视 ")],-1))])]),_:1}),w(st,{name:"Shimmer Button",description:"360° 旋转锥形流光高光外圈，适配核心 CTA 与付费引导，鼠标悬停即刻聚光",cta:"查看详情与代码",href:"/docs/shimmer-button"},{icon:Y(()=>[w(A(Pe),{class:"h-5 w-5 text-pink-500"})]),background:Y(()=>[l("div",Bm,[w(sr,{"shimmer-color":"#ec4899","shimmer-duration":"2.4s",class:"shadow-lg"},{default:Y(()=>[w(A(Pe),{class:"h-4 w-4 text-pink-400"}),d[13]||(d[13]=l("span",null,"360° 旋转光晕按钮",-1))]),_:1}),d[14]||(d[14]=l("span",{class:"mt-3 text-[11px] font-mono text-zinc-400"},"悬停查看高光边缘旋转",-1))])]),_:1}),w(st,{name:"Shiny Text",description:"金属质感微光划过文字，2.5s 线性平滑连续循环，高亮 Hero 标题与特色特性",cta:"查看详情与代码",href:"/docs/shiny-text"},{icon:Y(()=>[w(A(Pe),{class:"h-5 w-5 text-amber-500"})]),background:Y(()=>[l("div",Nm,[d[15]||(d[15]=l("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"},null,-1)),w(ir,{text:"✨ Metallic Shiny Sheen",class:"relative z-10 text-xl font-black tracking-tight",speed:2.2}),d[16]||(d[16]=l("p",{class:"relative z-10 mt-2 text-xs font-mono text-zinc-400"},"高对比连续金属质感流动",-1))])]),_:1}),w(st,{name:"Dot Pattern",description:"极简矢量波点底纹，支持鼠标实时光晕跟随聚光灯，轻量零性能损耗",cta:"查看详情与代码",href:"/docs/dot-pattern"},{icon:Y(()=>[w(A(Ll),{class:"h-5 w-5 text-emerald-500"})]),background:Y(()=>[l("div",Hm,[w(mc,{width:16,height:16,cr:1.2,glow:!0}),d[17]||(d[17]=l("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[l("span",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}," 移动鼠标点亮光晕 ")],-1))])]),_:1}),w(st,{name:"Marquee",description:"纯 CSS 硬件加速无限无缝滚动跑马灯，支持鼠标悬浮暂停、反向循环与变速",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/marquee"},{icon:Y(()=>[w(A(fp),{class:"h-5 w-5 text-blue-500"})]),background:Y(()=>[l("div",Um,[w(Fr,{duration:16,"pause-on-hover":!0},{default:Y(()=>[(g(),v(re,null,ve(["GPT-4o","Claude 3.5","DeepSeek-V3","Llama 3.3","Gemini 1.5"],m=>l("div",{key:m,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[d[18]||(d[18]=l("span",{class:"h-1.5 w-1.5 rounded-full bg-emerald-500"},null,-1)),l("span",null,P(m),1)])),64))]),_:1}),w(Fr,{duration:20,reverse:!0,"pause-on-hover":!0,class:"mt-2.5"},{default:Y(()=>[(g(),v(re,null,ve(["Vue 3.5","TypeScript","Tailwind CSS","Zero-Config","Canvas 2D"],m=>l("div",{key:m,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[d[19]||(d[19]=l("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),l("span",null,P(m),1)])),64))]),_:1})])]),_:1}),w(st,{name:"Bento Grid",description:"现代 SaaS 模块化栅格系统，卡片集成鼠标跟随 Spotlight 径向聚光灯流光",cta:"查看详情与代码",href:"/docs/bento-grid"},{icon:Y(()=>[w(A(nn),{class:"h-5 w-5 text-purple-500"})]),background:Y(()=>[...d[20]||(d[20]=[l("div",{class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent"},[l("div",{class:"grid grid-cols-2 gap-2 w-full max-w-[200px]"},[l("div",{class:"h-12 rounded-lg border border-purple-300/40 bg-purple-500/10 dark:border-purple-500/30 dark:bg-purple-500/20 flex items-center justify-center text-[10px] font-mono text-purple-600 dark:text-purple-300"}," Col 1 "),l("div",{class:"h-12 rounded-lg border border-blue-300/40 bg-blue-500/10 dark:border-blue-500/30 dark:bg-blue-500/20 flex items-center justify-center text-[10px] font-mono text-blue-600 dark:text-blue-300"}," Col 2 "),l("div",{class:"col-span-2 h-10 rounded-lg border border-indigo-300/40 bg-indigo-500/10 dark:border-indigo-500/30 dark:bg-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-600 dark:text-indigo-300"}," Span 2 · 动态聚光灯 ")])],-1)])]),_:1}),w(st,{name:"Meteors",description:"纯 CSS 赛博流星雨划过，带 50px 渐变光尾与随机延迟，暗黑科技卡片与首屏氛围杀器",cta:"查看详情与代码",href:"/docs/meteors"},{icon:Y(()=>[w(A(Pe),{class:"h-5 w-5 text-sky-400"})]),background:Y(()=>[l("div",Gm,[w(gc,{number:20}),d[21]||(d[21]=l("div",{class:"flex h-full flex-col justify-end"},[l("span",{class:"text-xs font-mono text-sky-400 font-bold"},"215° 斜掠流星轨迹")],-1))])]),_:1}),w(st,{name:"Ripple",description:"由中心向外周循环脉冲扩散的多层同心圆涟漪，适配 AI 语音拾音、雷达声呐与核心头像高亮",cta:"查看详情与代码",href:"/docs/ripple"},{icon:Y(()=>[w(A(Xr),{class:"h-5 w-5 text-blue-500"})]),background:Y(()=>[l("div",qm,[w(hc,{"main-circle-size":110,"num-circles":6}),l("div",Wm,[w(A(Xr),{class:"h-6 w-6"})])])]),_:1}),w(st,{name:"Number Ticker",description:"采用 easeOutExpo 缓动曲线的平滑数字翻牌器，进入视口自动起跑，SaaS 核心关键业务指标必备",cta:"查看详情与代码",href:"/docs/number-ticker"},{icon:Y(()=>[w(A(Rl),{class:"h-5 w-5 text-emerald-500"})]),background:Y(()=>[l("div",Km,[l("div",Xm,[w(Lr,{value:99.99,"decimal-places":2}),d[22]||(d[22]=Re("% ",-1))]),d[23]||(d[23]=l("p",{class:"mt-2 text-xs font-mono text-zinc-500"},"SLA 生产高可用性指标",-1))])]),_:1}),w(st,{name:"Animated Beam",description:"Magic UI 标志性连线动效，在多个 DOM 节点间实时计算贝塞尔曲线，驱动 SVG 能量光球脉冲流动",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/animated-beam"},{icon:Y(()=>[w(A(Rn),{class:"h-5 w-5 text-indigo-500"})]),background:Y(()=>[l("div",{ref_key:"homeBeamContainer",ref:t,class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 flex items-center justify-between px-8"},[l("div",{ref_key:"homeBeamUser",ref:n,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-blue-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-blue-400"},[w(A(Dl),{class:"h-5 w-5"})],512),l("div",{ref_key:"homeBeamAi",ref:r,class:"z-10 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/40"},[w(A(Pe),{class:"h-6 w-6"})],512),l("div",{ref_key:"homeBeamDb",ref:o,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400"},[w(A(os),{class:"h-5 w-5"})],512),w(Zr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.2},null,8,["container-ref","from-ref","to-ref"]),w(Zr,{"container-ref":t.value,"from-ref":r.value,"to-ref":o.value,duration:2.2,delay:.5},null,8,["container-ref","from-ref","to-ref"])],512)]),_:1}),w(st,{name:"Flickering Grid",description:"Canvas 2D 原生微闪烁网格，每个小方格独立呼吸微光，营造赛博黑客帝国与智能矩阵氛围",cta:"查看详情与代码",href:"/docs/flickering-grid"},{icon:Y(()=>[w(A(nn),{class:"h-5 w-5 text-sky-500"})]),background:Y(()=>[l("div",Ym,[w(vc,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),d[24]||(d[24]=l("div",{class:"relative z-10 flex h-full items-center justify-center"},[l("span",{class:"rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-500 dark:text-sky-400 font-bold"}," 60FPS 矩阵微闪 ")],-1))])]),_:1})]),_:1})]),l("section",Zm,[l("div",Jm,[l("div",Qm,[w(A(Pe),{class:"h-3.5 w-3.5"}),d[25]||(d[25]=l("span",null,"主题套件全套推进",-1))]),d[26]||(d[26]=l("h2",{class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"}," 5 大主题动效矩阵 · 场景全覆盖 ",-1)),d[27]||(d[27]=l("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 按业务应用场景全套推进，彻底告别零散拼凑。从 AI 智能体推理到 3D 纵深空间，全矩阵即拷即用。 ",-1))]),l("div",eb,[(g(!0),v(re,null,ve(A(is),m=>{var z;return g(),v("div",{key:m.id,class:"group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:hover:border-zinc-700"},[l("div",null,[l("div",tb,[l("div",nb,[(g(),de(Ze(s(m.id)),{class:"h-5 w-5"}))]),l("span",rb,P(a(m.id).length)+" 款组件 ",1)]),l("h3",ob,[l("span",null,P(m.name),1)]),l("span",sb,P(m.englishName),1),l("p",ib,P(m.description),1),l("div",ab,[(g(!0),v(re,null,ve(a(m.id),y=>(g(),de(f,{key:y.id,to:`/docs/${y.id}`,class:"rounded-lg border border-zinc-200/80 bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-700 transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-500/50 dark:hover:bg-blue-950/60 dark:hover:text-blue-400"},{default:Y(()=>[Re(P(y.name),1)]),_:2},1032,["to"]))),128))])]),l("div",lb,[w(f,{to:`/docs/${((z=a(m.id)[0])==null?void 0:z.id)||"border-beam"}`,class:"inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"},{default:Y(()=>[d[28]||(d[28]=l("span",null,"进入套件展厅",-1)),w(A(er),{class:"h-3.5 w-3.5 transition-transform group-hover:translate-x-1"})]),_:1},8,["to"])])])}),128))])]),l("section",cb,[w(xc,{class:"min-h-[460px]"},{default:Y(()=>[d[30]||(d[30]=l("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-6xl font-black tracking-tight text-transparent"}," 为极致审美而生的动效原子 ",-1)),d[31]||(d[31]=l("p",{class:"mt-4 max-w-lg text-sm text-slate-400"}," 全面对标 Magic UI 与 Aceternity UI，支持单文件复制即用，零侵入无外部复杂构建负担。 ",-1)),l("div",db,[w(f,{to:"/docs/lamp-effect"},{default:Y(()=>[w(sr,{"shimmer-color":"#38bdf8",class:"h-11 px-6 text-sm"},{default:Y(()=>[d[29]||(d[29]=l("span",null,"探索 Lamp Effect",-1)),w(A(er),{class:"h-4 w-4"})]),_:1})]),_:1})])]),_:1})]),l("section",ub,[l("div",pb,[l("div",fb,[l("div",mb,[l("div",bb,[w(A(br),{class:"h-5 w-5"})]),d[32]||(d[32]=l("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," Copy & Paste 模式 ",-1)),d[33]||(d[33]=l("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不是封闭的黑盒 npm 库。代码完全属于你，复制进你的项目 `src/components/ui` 即可按需自定义与扩展。 ",-1))]),l("div",gb,[l("div",hb,[w(A(Rn),{class:"h-5 w-5"})]),d[34]||(d[34]=l("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 单文件自包含（Zero-Config） ",-1)),d[35]||(d[35]=l("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 动画关键帧与路径封装在组件内，完全无需在 tailwind.config.js 中配置复杂的 keyframes，避免配置遗漏。 ",-1))]),l("div",xb,[l("div",vb,[w(A(Pe),{class:"h-5 w-5"})]),d[36]||(d[36]=l("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 真·明暗双模自适应 ",-1)),d[37]||(d[37]=l("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不仅在深黑背景下流光溢彩，更对纯白、浅灰背景做针对性调优，确保在任何业务场景下都有高级质感。 ",-1))])])])])])}}});var ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lo={exports:{}},ta;function kb(){return ta||(ta=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=(function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,a={},i={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function x(_){return _ instanceof c?new c(_.type,x(_.content),_.alias):Array.isArray(_)?_.map(x):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(x){return Object.prototype.toString.call(x).slice(8,-1)},objId:function(x){return x.__id||Object.defineProperty(x,"__id",{value:++s}),x.__id},clone:function x(_,C){C=C||{};var F,V;switch(i.util.type(_)){case"Object":if(V=i.util.objId(_),C[V])return C[V];F={},C[V]=F;for(var U in _)_.hasOwnProperty(U)&&(F[U]=x(_[U],C));return F;case"Array":return V=i.util.objId(_),C[V]?C[V]:(F=[],C[V]=F,_.forEach(function(j,B){F[B]=x(j,C)}),F);default:return _}},getLanguage:function(x){for(;x;){var _=o.exec(x.className);if(_)return _[1].toLowerCase();x=x.parentElement}return"none"},setLanguage:function(x,_){x.className=x.className.replace(RegExp(o,"gi"),""),x.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(F){var x=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(F.stack)||[])[1];if(x){var _=document.getElementsByTagName("script");for(var C in _)if(_[C].src==x)return _[C]}return null}},isActive:function(x,_,C){for(var F="no-"+_;x;){var V=x.classList;if(V.contains(_))return!0;if(V.contains(F))return!1;x=x.parentElement}return!!C}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(x,_){var C=i.util.clone(i.languages[x]);for(var F in _)C[F]=_[F];return C},insertBefore:function(x,_,C,F){F=F||i.languages;var V=F[x],U={};for(var j in V)if(V.hasOwnProperty(j)){if(j==_)for(var B in C)C.hasOwnProperty(B)&&(U[B]=C[B]);C.hasOwnProperty(j)||(U[j]=V[j])}var ee=F[x];return F[x]=U,i.languages.DFS(i.languages,function(ae,q){q===ee&&ae!=x&&(this[ae]=U)}),U},DFS:function x(_,C,F,V){V=V||{};var U=i.util.objId;for(var j in _)if(_.hasOwnProperty(j)){C.call(_,j,_[j],F||j);var B=_[j],ee=i.util.type(B);ee==="Object"&&!V[U(B)]?(V[U(B)]=!0,x(B,C,null,V)):ee==="Array"&&!V[U(B)]&&(V[U(B)]=!0,x(B,C,j,V))}}},plugins:{},highlightAll:function(x,_){i.highlightAllUnder(document,x,_)},highlightAllUnder:function(x,_,C){var F={callback:C,container:x,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",F),F.elements=Array.prototype.slice.apply(F.container.querySelectorAll(F.selector)),i.hooks.run("before-all-elements-highlight",F);for(var V=0,U;U=F.elements[V++];)i.highlightElement(U,_===!0,F.callback)},highlightElement:function(x,_,C){var F=i.util.getLanguage(x),V=i.languages[F];i.util.setLanguage(x,F);var U=x.parentElement;U&&U.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(U,F);var j=x.textContent,B={element:x,language:F,grammar:V,code:j};function ee(q){B.highlightedCode=q,i.hooks.run("before-insert",B),B.element.innerHTML=B.highlightedCode,i.hooks.run("after-highlight",B),i.hooks.run("complete",B),C&&C.call(B.element)}if(i.hooks.run("before-sanity-check",B),U=B.element.parentElement,U&&U.nodeName.toLowerCase()==="pre"&&!U.hasAttribute("tabindex")&&U.setAttribute("tabindex","0"),!B.code){i.hooks.run("complete",B),C&&C.call(B.element);return}if(i.hooks.run("before-highlight",B),!B.grammar){ee(i.util.encode(B.code));return}if(_&&r.Worker){var ae=new Worker(i.filename);ae.onmessage=function(q){ee(q.data)},ae.postMessage(JSON.stringify({language:B.language,code:B.code,immediateClose:!0}))}else ee(i.highlight(B.code,B.grammar,B.language))},highlight:function(x,_,C){var F={code:x,grammar:_,language:C};if(i.hooks.run("before-tokenize",F),!F.grammar)throw new Error('The language "'+F.language+'" has no grammar.');return F.tokens=i.tokenize(F.code,F.grammar),i.hooks.run("after-tokenize",F),c.stringify(i.util.encode(F.tokens),F.language)},tokenize:function(x,_){var C=_.rest;if(C){for(var F in C)_[F]=C[F];delete _.rest}var V=new d;return f(V,V.head,x),u(x,V,_,V.head,0),z(V)},hooks:{all:{},add:function(x,_){var C=i.hooks.all;C[x]=C[x]||[],C[x].push(_)},run:function(x,_){var C=i.hooks.all[x];if(!(!C||!C.length))for(var F=0,V;V=C[F++];)V(_)}},Token:c};r.Prism=i;function c(x,_,C,F){this.type=x,this.content=_,this.alias=C,this.length=(F||"").length|0}c.stringify=function x(_,C){if(typeof _=="string")return _;if(Array.isArray(_)){var F="";return _.forEach(function(ee){F+=x(ee,C)}),F}var V={type:_.type,content:x(_.content,C),tag:"span",classes:["token",_.type],attributes:{},language:C},U=_.alias;U&&(Array.isArray(U)?Array.prototype.push.apply(V.classes,U):V.classes.push(U)),i.hooks.run("wrap",V);var j="";for(var B in V.attributes)j+=" "+B+'="'+(V.attributes[B]||"").replace(/"/g,"&quot;")+'"';return"<"+V.tag+' class="'+V.classes.join(" ")+'"'+j+">"+V.content+"</"+V.tag+">"};function p(x,_,C,F){x.lastIndex=_;var V=x.exec(C);if(V&&F&&V[1]){var U=V[1].length;V.index+=U,V[0]=V[0].slice(U)}return V}function u(x,_,C,F,V,U){for(var j in C)if(!(!C.hasOwnProperty(j)||!C[j])){var B=C[j];B=Array.isArray(B)?B:[B];for(var ee=0;ee<B.length;++ee){if(U&&U.cause==j+","+ee)return;var ae=B[ee],q=ae.inside,ge=!!ae.lookbehind,Me=!!ae.greedy,Ve=ae.alias;if(Me&&!ae.pattern.global){var xe=ae.pattern.toString().match(/[imsuy]*$/)[0];ae.pattern=RegExp(ae.pattern.source,xe+"g")}for(var fe=ae.pattern||ae,se=F.next,Te=V;se!==_.tail&&!(U&&Te>=U.reach);Te+=se.value.length,se=se.next){var Z=se.value;if(_.length>x.length)return;if(!(Z instanceof c)){var je=1,we;if(Me){if(we=p(fe,Te,x,ge),!we||we.index>=x.length)break;var ye=we.index,rt=we.index+we[0].length,Oe=Te;for(Oe+=se.value.length;ye>=Oe;)se=se.next,Oe+=se.value.length;if(Oe-=se.value.length,Te=Oe,se.value instanceof c)continue;for(var ze=se;ze!==_.tail&&(Oe<rt||typeof ze.value=="string");ze=ze.next)je++,Oe+=ze.value.length;je--,Z=x.slice(Te,Oe),we.index-=Te}else if(we=p(fe,0,Z,ge),!we)continue;var ye=we.index,L=we[0],X=Z.slice(0,ye),G=Z.slice(ye+L.length),te=Te+Z.length;U&&te>U.reach&&(U.reach=te);var b=se.prev;X&&(b=f(_,b,X),Te+=X.length),m(_,b,je);var k=new c(j,q?i.tokenize(L,q):L,Ve,L);if(se=f(_,b,k),G&&f(_,se,G),je>1){var I={cause:j+","+ee,reach:te};u(x,_,C,se.prev,Te,I),U&&I.reach>U.reach&&(U.reach=I.reach)}}}}}}function d(){var x={value:null,prev:null,next:null},_={value:null,prev:x,next:null};x.next=_,this.head=x,this.tail=_,this.length=0}function f(x,_,C){var F=_.next,V={value:C,prev:_,next:F};return _.next=V,F.prev=V,x.length++,V}function m(x,_,C){for(var F=_.next,V=0;V<C&&F!==x.tail;V++)F=F.next;_.next=F,F.prev=_,x.length-=V}function z(x){for(var _=[],C=x.head.next;C!==x.tail;)_.push(C.value),C=C.next;return _}if(!r.document)return r.addEventListener&&(i.disableWorkerMessageHandler||r.addEventListener("message",function(x){var _=JSON.parse(x.data),C=_.language,F=_.code,V=_.immediateClose;r.postMessage(i.highlight(F,i.languages[C],C)),V&&r.close()},!1)),i;var y=i.util.currentScript();y&&(i.filename=y.src,y.hasAttribute("data-manual")&&(i.manual=!0));function S(){i.manual||i.highlightAll()}if(!i.manual){var R=document.readyState;R==="loading"||R==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return i})(t);e.exports&&(e.exports=n),typeof ea<"u"&&(ea.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(o,s){var a={};a["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};i["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var c={};c[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(r){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",o=function(y,S){return"✖ Error "+y+" while fetching file: "+S},s="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",c="loading",p="loaded",u="failed",d="pre[data-src]:not(["+i+'="'+p+'"]):not(['+i+'="'+c+'"])';function f(y,S,R){var x=new XMLHttpRequest;x.open("GET",y,!0),x.onreadystatechange=function(){x.readyState==4&&(x.status<400&&x.responseText?S(x.responseText):x.status>=400?R(o(x.status,x.statusText)):R(s))},x.send(null)}function m(y){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(S){var R=Number(S[1]),x=S[2],_=S[3];return x?_?[R,Number(_)]:[R,void 0]:[R,R]}}n.hooks.add("before-highlightall",function(y){y.selector+=", "+d}),n.hooks.add("before-sanity-check",function(y){var S=y.element;if(S.matches(d)){y.code="",S.setAttribute(i,c);var R=S.appendChild(document.createElement("CODE"));R.textContent=r;var x=S.getAttribute("data-src"),_=y.language;if(_==="none"){var C=(/\.(\w+)$/.exec(x)||[,"none"])[1];_=a[C]||C}n.util.setLanguage(R,_),n.util.setLanguage(S,_);var F=n.plugins.autoloader;F&&F.loadLanguages(_),f(x,function(V){S.setAttribute(i,p);var U=m(S.getAttribute("data-range"));if(U){var j=V.split(/\r\n?|\n/g),B=U[0],ee=U[1]==null?j.length:U[1];B<0&&(B+=j.length),B=Math.max(0,Math.min(B-1,j.length)),ee<0&&(ee+=j.length),ee=Math.max(0,Math.min(ee,j.length)),V=j.slice(B,ee).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(B+1))}R.textContent=V,n.highlightElement(R)},function(V){S.setAttribute(i,u),R.textContent=V})}}),n.plugins.fileHighlight={highlight:function(S){for(var R=(S||document).querySelectorAll(d),x=0,_;_=R[x++];)n.highlightElement(_)}};var z=!1;n.fileHighlight=function(){z||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),z=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(Lo)),Lo.exports}var zb=kb();const Vo=wb(zb);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var na={},ra;function _b(){return ra||(ra=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),na}_b();Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var s={};s[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},Prism.languages.insertBefore("markup","cdata",s)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);const Cb={class:"relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800 text-zinc-100 shadow-sm"},Sb={class:"flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5 text-xs text-zinc-400"},Ab={class:"font-mono"},Ib={class:"max-h-[480px] overflow-auto p-4 text-xs font-mono leading-relaxed"},Mb={class:"!m-0 !p-0 !bg-transparent"},Rb=["innerHTML"],oa=ce({__name:"CodeBlock",props:{code:{},language:{default:"html"},filename:{}},setup(e){const t=e,n=D(!1),r=pe(()=>{const s=Vo.languages[t.language]||Vo.languages.markup;return Vo.highlight(t.code.trim(),s,t.language)});async function o(){try{await navigator.clipboard.writeText(t.code.trim()),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(s){console.error("Failed to copy",s)}}return(s,a)=>(g(),v("div",Cb,[l("div",Sb,[l("span",Ab,P(t.filename||t.language.toUpperCase()),1),l("button",{type:"button",class:"inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",onClick:o},[n.value?(g(),de(A(Kt),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(g(),de(A(br),{key:1,class:"h-3.5 w-3.5"})),l("span",null,P(n.value?"已复制！":"复制代码"),1)])]),l("div",Ib,[l("pre",Mb,[l("code",{innerHTML:r.value},null,8,Rb)])])]))}}),Tb={class:"space-y-4"},$b={class:"space-y-1"},Pb={class:"text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},Eb={class:"text-sm text-zinc-500 dark:text-zinc-400"},Fb={class:"overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-sm transition-colors"},Lb={class:"flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 bg-zinc-50/80 px-4 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/60"},Vb={class:"flex items-center gap-1 rounded-lg bg-zinc-200/60 p-1 dark:bg-zinc-800/60 text-xs font-medium"},Ob={key:0,class:"flex items-center gap-2 text-xs"},Db={class:"flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-0.5"},jb={class:"relative"},Bb={class:"p-4"},Nb={class:"p-4"},Hb={key:0,class:"mt-8 space-y-3"},Ub={class:"overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800"},Gb={class:"w-full text-left text-xs"},qb={class:"divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono"},Wb={class:"px-4 py-2.5 font-bold text-blue-600 dark:text-blue-400"},Kb={class:"px-4 py-2.5 text-pink-600 dark:text-pink-400"},Xb={class:"px-4 py-2.5 text-zinc-500"},Yb={class:"px-4 py-2.5 font-sans text-zinc-600 dark:text-zinc-300"},Zb=ce({__name:"ComponentPreview",props:{title:{},description:{},componentCode:{},usageCode:{},componentFilename:{},propsList:{}},setup(e){const t=e,n=D("preview"),r=D("default"),o=D(0),s=D(!0);let a=null;We(()=>{s.value=document.documentElement.classList.contains("dark"),a=new MutationObserver(()=>{s.value=document.documentElement.classList.contains("dark")}),a.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}),Qe(()=>{a==null||a.disconnect()});const i=pe(()=>r.value==="dark"?!0:r.value==="light"?!1:s.value);function c(){o.value++}return(p,u)=>(g(),v("div",Tb,[l("div",$b,[l("h2",Pb,P(t.title),1),l("p",Eb,P(t.description),1)]),l("div",Fb,[l("div",Lb,[l("div",Vb,[l("button",{type:"button",class:T(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="preview"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[0]||(u[0]=d=>n.value="preview")},[w(A(El),{class:"h-3.5 w-3.5"}),u[6]||(u[6]=l("span",null,"实时效果",-1))],2),l("button",{type:"button",class:T(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="component"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[1]||(u[1]=d=>n.value="component")},[w(A(nr),{class:"h-3.5 w-3.5"}),l("span",null,"组件源码 ("+P(t.componentFilename)+")",1)],2),l("button",{type:"button",class:T(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="usage"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[2]||(u[2]=d=>n.value="usage")},[w(A(nr),{class:"h-3.5 w-3.5"}),u[7]||(u[7]=l("span",null,"业务调用 (Usage.vue)",-1))],2)]),n.value==="preview"?(g(),v("div",Ob,[u[8]||(u[8]=l("span",{class:"text-zinc-400"},"视窗底色：",-1)),l("div",Db,[l("button",{type:"button",class:T(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="default"?"bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[3]||(u[3]=d=>r.value="default")}," 自适应 ",2),l("button",{type:"button",class:T(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="light"?"bg-white text-zinc-900 shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[4]||(u[4]=d=>r.value="light")}," 亮白 ",2),l("button",{type:"button",class:T(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="dark"?"bg-black text-white shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[5]||(u[5]=d=>r.value="dark")}," 暗黑 ",2)]),l("button",{type:"button",class:"inline-flex items-center gap-1 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",title:"重新触发动效",onClick:c},[w(A(mp),{class:"h-3.5 w-3.5"})])])):ne("",!0)]),l("div",jb,[An(l("div",{class:T(["relative flex min-h-[360px] w-full items-center justify-center overflow-hidden p-8 transition-colors duration-200",i.value?"dark bg-black text-zinc-100":"bg-zinc-100/80 text-zinc-900"])},[(g(),v("div",{key:o.value,class:"w-full flex items-center justify-center"},[dt(p.$slots,"default",{isDark:i.value})]))],2),[[Ao,n.value==="preview"]]),An(l("div",Bb,[w(oa,{code:t.componentCode,filename:t.componentFilename,language:"html"},null,8,["code","filename"])],512),[[Ao,n.value==="component"]]),An(l("div",Nb,[w(oa,{code:t.usageCode,filename:"UsageExample.vue",language:"html"},null,8,["code"])],512),[[Ao,n.value==="usage"]])])]),t.propsList&&t.propsList.length>0?(g(),v("div",Hb,[u[10]||(u[10]=l("h3",{class:"text-base font-semibold text-zinc-900 dark:text-zinc-100"}," Props 属性参考 ",-1)),l("div",Ub,[l("table",Gb,[u[9]||(u[9]=l("thead",{class:"border-b border-zinc-200 bg-zinc-50/80 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"},[l("tr",null,[l("th",{class:"px-4 py-2.5"},"属性名"),l("th",{class:"px-4 py-2.5"},"类型"),l("th",{class:"px-4 py-2.5"},"默认值"),l("th",{class:"px-4 py-2.5"},"说明")])],-1)),l("tbody",qb,[(g(!0),v(re,null,ve(t.propsList,d=>(g(),v("tr",{key:d.name,class:"text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40"},[l("td",Wb,P(d.name),1),l("td",Kb,P(d.type),1),l("td",Xb,P(d.default),1),l("td",Yb,P(d.description),1)]))),128))])])])])):ne("",!0)]))}}),Jb=["onMouseenter","onClick"],Qb={key:0,class:"pointer-events-none absolute -top-9 z-50 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-800/95 dark:text-zinc-200"},eg=ce({__name:"Dock",props:{items:{},iconSize:{default:44},iconMagnification:{default:68},iconDistance:{default:120},direction:{default:"bottom"},class:{}},setup(e){const t=e,n=D(null),r=D(null),o=D(null);function s(d){r.value=d.clientX}function a(){r.value=null,o.value=null}function i(d){if(r.value===null||!d)return 1;const f=d.getBoundingClientRect(),m=f.left+f.width/2,z=Math.abs(r.value-m);if(z>t.iconDistance)return 1;const y=z/t.iconDistance,S=(t.iconMagnification-t.iconSize)/t.iconSize,R=.5*(1+Math.cos(y*Math.PI));return 1+S*R}const c=D([]);function p(d,f){d&&(c.value[f]=d)}function u(d){const f=c.value[d],m=i(f);return Math.round(t.iconSize*m)}return(d,f)=>(g(),v("div",{ref_key:"dockRef",ref:n,class:T(A(be)("mx-auto flex h-16 items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/70 px-4 py-2 shadow-xl backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 transition-all duration-200 select-none",t.direction==="bottom"&&"items-end",t.direction==="top"&&"items-start",t.direction==="middle"&&"items-center",t.class)),onMousemove:s,onMouseleave:a},[t.items&&t.items.length>0?(g(!0),v(re,{key:0},ve(t.items,(m,z)=>(g(),v("div",{key:m.id,ref_for:!0,ref:y=>p(y,z),class:"group relative flex items-center justify-center cursor-pointer transition-all duration-100 ease-out",style:ke({width:`${u(z)}px`,height:`${u(z)}px`}),onMouseenter:y=>o.value=m.label||null,onClick:y=>m.onClick&&m.onClick()},[(g(),de(Ze(m.href?"a":"button"),{href:m.href,class:T(["flex h-full w-full items-center justify-center rounded-2xl border transition-colors shadow-sm","border-zinc-200/70 bg-white/90 text-zinc-700 hover:text-zinc-950","dark:border-zinc-700/60 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:text-white"])},{default:Y(()=>[(g(),de(Ze(m.icon),{class:"h-1/2 w-1/2 transition-transform duration-100"}))]),_:2},1032,["href"])),w(zt,{name:"dock-fade"},{default:Y(()=>[o.value===m.label&&m.label?(g(),v("div",Qb,P(m.label),1)):ne("",!0)]),_:2},1024),f[0]||(f[0]=l("span",{class:"absolute -bottom-1.5 h-1 w-1 rounded-full bg-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-zinc-500"},null,-1))],44,Jb))),128)):dt(d.$slots,"default",{},void 0,!0,1)],34))}}),tg=He(eg,[["__scopeId","data-v-3c8b0d2e"]]),ng={key:0,class:"pointer-events-none absolute inset-0 h-full w-full select-none",xmlns:"http://www.w3.org/2000/svg"},rg=["r","stroke","stroke-width"],og={class:"orbit-rotator pointer-events-auto h-full w-full"},sg={class:"orbit-item pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"},ig=ce({__name:"OrbitLogos",props:{radius:{default:120},duration:{default:20},delay:{default:0},reverse:{type:Boolean,default:!1},path:{type:Boolean,default:!0},pathColor:{},pathWidth:{default:1},tiltAngle:{default:0},class:{}},setup(e){const t=e,n=pe(()=>({"--radius":`${t.radius}px`,"--duration":`${t.duration}s`,"--delay":`-${t.delay}s`,"--direction":t.reverse?"reverse":"normal","--counter-direction":t.reverse?"normal":"reverse","--tilt":`${t.tiltAngle}deg`,width:`${t.radius*2}px`,height:`${t.radius*2}px`}));return(r,o)=>(g(),v("div",{style:ke(n.value),class:T(A(be)("pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full [transform-style:preserve-3d]",t.class))},[t.path?(g(),v("svg",ng,[l("circle",{class:"stroke-zinc-300/60 dark:stroke-zinc-800/80 stroke-dashed",cx:"50%",cy:"50%",r:t.radius,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-dasharray":"4 4"},null,8,rg)])):ne("",!0),l("div",og,[l("div",sg,[dt(r.$slots,"default",{},void 0,!0)])])],6))}}),Rr=He(ig,[["__scopeId","data-v-583093f1"]]),ag=["src","alt"],lg={class:"pointer-events-none absolute bottom-4 right-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},cg=["src","alt"],dg={class:"pointer-events-none absolute bottom-4 left-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},ug={class:"absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-zinc-800 shadow-xl backdrop-blur-md transition-transform duration-100 hover:scale-110 active:scale-95 dark:border-zinc-700/80 dark:bg-zinc-900/90 dark:text-zinc-200"},pg=ce({__name:"ImageCompare",props:{beforeImage:{},afterImage:{},beforeLabel:{default:"Before"},afterLabel:{default:"After"},initialPosition:{default:50},class:{}},setup(e){const t=e,n=D(null),r=D(t.initialPosition),o=D(!1);function s(u){if(!n.value)return;const d=n.value.getBoundingClientRect(),f=u-d.left,m=Math.min(Math.max(f/d.width*100,0),100);r.value=Number(m.toFixed(2))}function a(u){o.value=!0,s(u.clientX)}function i(u){o.value&&s(u.clientX)}function c(){o.value=!1}function p(u){!o.value||u.touches.length===0||s(u.touches[0].clientX)}return We(()=>{window.addEventListener("mouseup",c),window.addEventListener("mousemove",i),window.addEventListener("touchend",c),window.addEventListener("touchmove",p)}),Qe(()=>{window.removeEventListener("mouseup",c),window.removeEventListener("mousemove",i),window.removeEventListener("touchend",c),window.removeEventListener("touchmove",p)}),(u,d)=>(g(),v("div",{ref_key:"containerRef",ref:n,class:T(A(be)("relative select-none overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 shadow-xl cursor-ew-resize dark:border-zinc-800/80",t.class)),onMousedown:a,onTouchstart:d[0]||(d[0]=f=>o.value=!0)},[l("img",{src:t.afterImage,alt:t.afterLabel,class:"pointer-events-none h-full w-full object-cover"},null,8,ag),l("div",lg,P(t.afterLabel),1),l("div",{class:"pointer-events-none absolute inset-0 h-full w-full overflow-hidden",style:ke({clipPath:`inset(0 ${100-r.value}% 0 0)`})},[l("img",{src:t.beforeImage,alt:t.beforeLabel,class:"h-full w-full object-cover"},null,8,cg),l("div",dg,P(t.beforeLabel),1)],4),l("div",{class:"pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]",style:ke({left:`${r.value}%`})},[l("div",ug,[w(A($l),{class:"h-4 w-4"})])],4)],34))}}),fg={class:"group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/90 dark:bg-zinc-950/90"},mg={class:"flex items-center gap-2.5 min-w-0"},bg={class:"relative flex h-3 w-3 shrink-0 items-center justify-center"},gg={class:"flex flex-col min-w-0"},hg={class:"flex items-center gap-2"},xg={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate"},vg={class:"text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5"},yg={class:"flex items-center gap-2 shrink-0 text-xs text-zinc-500"},wg={key:0,class:"flex items-center gap-1 font-mono text-[11px] rounded-md bg-zinc-100 px-2 py-0.5 dark:bg-zinc-900 dark:text-zinc-300"},kg={key:0,class:"border-t border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-2.5"},zg={class:"mt-0.5 shrink-0"},_g={key:3,class:"inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 text-[10px] text-zinc-400 dark:border-zinc-700"},Cg={class:"flex-1 min-w-0"},Sg={class:"flex items-center justify-between"},Ag={key:0,class:"font-mono text-[10px] text-zinc-400 shrink-0 ml-2"},Ig={key:0,class:"text-[11px] text-zinc-400 font-mono mt-0.5 truncate"},Mg=ce({__name:"AgentStatus",props:{status:{default:"thinking"},agentName:{default:"Aura AI Agent"},currentTask:{default:"Thinking and orchestrating subagents..."},elapsed:{type:Boolean,default:!0},steps:{default:()=>[{id:1,name:"Understand user prompt requirements",status:"done",duration:"0.4s"},{id:2,name:"Search codebase for components & hooks",status:"done",duration:"1.2s"},{id:3,name:"Run Playwright headless visual verification",status:"running",detail:"Evaluating DOM computed styles..."},{id:4,name:"Commit and build production artifacts",status:"pending"}]},class:{}},setup(e){const t=e,n=D(!1),r=D(0);let o=null;We(()=>{t.elapsed&&(o=setInterval(()=>{r.value+=.1},100))}),Qe(()=>{o&&clearInterval(o)});const s=pe(()=>`${r.value.toFixed(1)}s`),a=pe(()=>{switch(t.status){case"thinking":return{icon:Pe,label:"思考推演中",color:"text-sky-500 dark:text-sky-400",badgeBg:"bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",pulseBg:"bg-sky-500"};case"running":return{icon:Ti,label:"自主执行中",color:"text-blue-500 dark:text-blue-400 animate-spin",badgeBg:"bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",pulseBg:"bg-blue-500"};case"tool_call":return{icon:zp,label:"调用工具中",color:"text-amber-500 dark:text-amber-400",badgeBg:"bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",pulseBg:"bg-amber-500"};case"success":return{icon:Ii,label:"任务已闭环",color:"text-emerald-500 dark:text-emerald-400",badgeBg:"bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",pulseBg:"bg-emerald-500"};case"error":return{icon:Ai,label:"出现异常",color:"text-rose-500 dark:text-rose-400",badgeBg:"bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",pulseBg:"bg-rose-500"};default:return{icon:Pe,label:"待命中",color:"text-zinc-400",badgeBg:"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",pulseBg:"bg-zinc-400"}}});return(i,c)=>(g(),v("div",{class:T(A(be)("w-full max-w-lg transition-all duration-300",t.class))},[l("div",fg,[l("div",{class:"flex items-center justify-between gap-3 px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60",onClick:c[0]||(c[0]=p=>n.value=!n.value)},[l("div",mg,[l("div",bg,[l("span",{class:T(["absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",a.value.pulseBg])},null,2),l("span",{class:T(["relative inline-flex h-2 w-2 rounded-full",a.value.pulseBg])},null,2)]),l("div",gg,[l("div",hg,[l("span",xg,P(t.agentName),1),l("span",{class:T(["rounded-full border px-2 py-0.2 text-[10px] font-semibold",a.value.badgeBg])},P(a.value.label),3)]),l("p",vg,P(t.currentTask),1)])]),l("div",yg,[t.elapsed?(g(),v("div",wg,[w(A(Pl),{class:"h-3 w-3 text-zinc-400"}),l("span",null,P(s.value),1)])):ne("",!0),w(A(Ln),{class:T(["h-4 w-4 text-zinc-400 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])]),w(zt,{name:"agent-expand"},{default:Y(()=>[n.value&&t.steps&&t.steps.length>0?(g(),v("div",kg,[c[1]||(c[1]=l("div",{class:"text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2"}," 执行轨迹步骤 (Execution Steps) ",-1)),(g(!0),v(re,null,ve(t.steps,(p,u)=>(g(),v("div",{key:p.id,class:"flex items-start gap-2.5 text-xs"},[l("div",zg,[p.status==="done"?(g(),de(A(Ii),{key:0,class:"h-4 w-4 text-emerald-500"})):p.status==="running"?(g(),de(A(Ti),{key:1,class:"h-4 w-4 text-sky-500 animate-spin"})):p.status==="error"?(g(),de(A(Ai),{key:2,class:"h-4 w-4 text-rose-500"})):(g(),v("span",_g,P(u+1),1))]),l("div",Cg,[l("div",Sg,[l("span",{class:T(["font-medium truncate",p.status==="done"&&"text-zinc-700 dark:text-zinc-300",p.status==="running"&&"text-sky-600 dark:text-sky-400 font-semibold",p.status==="pending"&&"text-zinc-400 dark:text-zinc-500",p.status==="error"&&"text-rose-500 font-semibold"])},P(p.name),3),p.duration?(g(),v("span",Ag,P(p.duration),1)):ne("",!0)]),p.detail?(g(),v("p",Ig,P(p.detail),1)):ne("",!0)])]))),128))])):ne("",!0)]),_:1})])],2))}}),Rg=He(Mg,[["__scopeId","data-v-d55be07e"]]),Tg={class:"flex h-10 w-full items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 select-none"},$g={class:"flex items-center gap-1.5 text-[11px] font-medium text-zinc-400"},Pg={class:"truncate max-w-[220px] sm:max-w-md"},Eg={key:0,class:"flex items-center gap-2"},Fg={key:1,class:"w-12"},Lg={class:"text-blue-400 select-none font-bold"},Vg={class:"text-zinc-100 font-semibold flex-1 break-all"},Og={key:0,class:"inline-block h-4 w-2 translate-y-0.5 bg-blue-500 animate-pulse ml-0.5"},Dg={key:1,class:"text-emerald-400 font-medium break-all"},jg={key:2,class:"text-rose-400 font-medium break-all"},Bg={key:3,class:"text-amber-400 font-medium break-all"},Ng={key:4,class:"text-sky-400 font-medium break-all"},Hg={key:5,class:"text-zinc-400 break-all"},Ug={key:0,class:"flex items-center gap-2 pt-1"},Gg=ce({__name:"TypewriterTerminal",props:{title:{default:"zsh - aura@developer:~ (80x24)"},lines:{default:()=>[{type:"input",text:"pnpm dlx aura-ui@latest add agent-status dock"},{type:"output",text:"⠋ Resolving packages & peer dependencies..."},{type:"output",text:"✔ Cloned src/components/ui/AgentStatus.vue"},{type:"output",text:"✔ Cloned src/components/ui/Dock.vue"},{type:"success",text:"✨ Successfully installed 2 motion primitives in 260ms."},{type:"input",text:"aura test --visual-regression"},{type:"info",text:"ℹ Running Playwright headless test in Chromium..."},{type:"success",text:"✔ All 19 components passed 60fps frame rate check!"}]},typingSpeed:{default:35},pauseEnd:{default:3500},loop:{type:Boolean,default:!0},controls:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=D([]),r=D(0),o=D(0),s=D(!1),a=D(!1),i=D(!1),c=D(null);let p=null;function u(){c.value&&(c.value.scrollTop=c.value.scrollHeight)}function d(){p&&clearTimeout(p),n.value=[],r.value=0,o.value=0,s.value=!1,a.value=!1,f()}function f(){if(!t.lines||t.lines.length===0)return;if(r.value>=t.lines.length){s.value=!1,a.value=!0,t.loop&&(p=setTimeout(()=>{d()},t.pauseEnd));return}const z=t.lines[r.value];if(z.type==="input")if(s.value=!0,o.value===0&&n.value.push({type:"input",text:"",prefix:z.prefix||"$ "}),o.value<z.text.length){const y=n.value[n.value.length-1];y.text+=z.text[o.value],o.value++,u();const S=Math.floor(Math.random()*25)-10,R=Math.max(15,t.typingSpeed+S);p=setTimeout(f,R)}else o.value=0,r.value++,s.value=!1,u(),p=setTimeout(f,400);else{s.value=!1,n.value.push({type:z.type,text:z.text,prefix:z.prefix}),r.value++,u();const y=z.delay??220;p=setTimeout(f,y)}}function m(){const z=t.lines.map(y=>`${y.prefix||(y.type==="input"?"$ ":"")}${y.text}`).join(`
`);navigator.clipboard.writeText(z),i.value=!0,setTimeout(()=>{i.value=!1},2e3)}return We(()=>{d()}),Qe(()=>{p&&clearTimeout(p)}),gt(()=>t.lines,()=>{d()},{deep:!0}),(z,y)=>(g(),v("div",{class:T(A(be)("relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 font-mono text-xs sm:text-sm text-zinc-300 shadow-2xl backdrop-blur-md dark:border-zinc-800/80",t.class))},[l("div",Tg,[y[0]||(y[0]=l("div",{class:"flex items-center gap-2"},[l("span",{class:"h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm transition-transform hover:scale-110"}),l("span",{class:"h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm transition-transform hover:scale-110"}),l("span",{class:"h-3 w-3 rounded-full bg-[#27c93f] shadow-sm transition-transform hover:scale-110"})],-1)),l("div",$g,[w(A(Kn),{class:"h-3.5 w-3.5 text-zinc-500"}),l("span",Pg,P(t.title),1)]),t.controls?(g(),v("div",Eg,[l("button",{onClick:d,title:"重新播放",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[w(A(bp),{class:"h-3.5 w-3.5"})]),l("button",{onClick:m,title:"复制所有命令",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[i.value?(g(),de(A(Kt),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(g(),de(A(br),{key:1,class:"h-3.5 w-3.5"}))])])):(g(),v("div",Fg))]),l("div",{ref_key:"terminalBodyRef",ref:c,class:"max-h-80 min-h-[220px] overflow-y-auto p-4 sm:p-5 space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-800"},[(g(!0),v(re,null,ve(n.value,(S,R)=>(g(),v("div",{key:R,class:"flex items-start gap-2 leading-relaxed"},[S.type==="input"?(g(),v(re,{key:0},[l("span",Lg,P(S.prefix||"$ "),1),l("span",Vg,[Re(P(S.text)+" ",1),s.value&&R===n.value.length-1?(g(),v("span",Og)):ne("",!0)])],64)):S.type==="success"?(g(),v("span",Dg,P(S.text),1)):S.type==="error"?(g(),v("span",jg,P(S.text),1)):S.type==="warning"?(g(),v("span",Bg,P(S.text),1)):S.type==="info"?(g(),v("span",Ng,P(S.text),1)):(g(),v("span",Hg,P(S.text),1))]))),128)),a.value?(g(),v("div",Ug,[...y[1]||(y[1]=[l("span",{class:"text-blue-400 font-bold select-none"},"$ ",-1),l("span",{class:"inline-block h-4 w-2 bg-zinc-500 animate-pulse"},null,-1)])])):ne("",!0)],512)],2))}}),qg={class:"p-3 sm:p-4 pb-2"},Wg=["placeholder"],Kg={class:"flex items-center justify-between border-t border-zinc-100 px-3 py-2.5 dark:border-zinc-900"},Xg={class:"flex items-center gap-1.5 sm:gap-2"},Yg={class:"relative"},Zg={key:0,class:"absolute bottom-full left-0 mb-2 w-52 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-2xl backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 select-none"},Jg=["onClick"],Qg={key:0,class:"rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.2 text-[9px] text-zinc-500"},eh={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"上传图像或文件"},th={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"语音输入"},nh={class:"flex items-center gap-2"},rh=["disabled"],oh=ce({__name:"PromptInput",props:{modelValue:{default:""},placeholder:{default:"向 Aura AI 提问、生成 UI 动效，或输入 / 触发指令..."},loading:{type:Boolean,default:!1},selectedModel:{default:"deepseek-r1"},models:{default:()=>[{id:"deepseek-r1",name:"DeepSeek R1",badge:"Reasoning"},{id:"claude-3-7-sonnet",name:"Claude 3.7 Sonnet",badge:"Hybrid"},{id:"gpt-4o",name:"GPT-4o Omni",badge:"Multimodal"}]},webSearch:{type:Boolean,default:!1},maxRows:{default:6},class:{}},emits:["update:modelValue","submit","stop","update:selectedModel","toggleWebSearch"],setup(e,{emit:t}){const n=e,r=t,o=D(null),s=D(!1),a=D(!1),i=D(n.webSearch),c=pe({get:()=>n.modelValue,set:S=>r("update:modelValue",S)}),p=pe(()=>n.models.find(S=>S.id===n.selectedModel)||n.models[0]);function u(S){const R=S.target;c.value=R.value,d()}function d(){if(!o.value)return;o.value.style.height="auto";const S=Math.min(o.value.scrollHeight,24*n.maxRows);o.value.style.height=`${S}px`}function f(S){S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),m())}function m(){if(n.loading){r("stop");return}c.value.trim()&&r("submit",c.value)}function z(){i.value=!i.value,r("toggleWebSearch",i.value)}function y(S){r("update:selectedModel",S),a.value=!1}return(S,R)=>(g(),v("div",{class:T(A(be)("group relative w-full rounded-2xl border transition-all duration-300 shadow-xl backdrop-blur-xl",s.value?"border-blue-500/80 shadow-[0_0_25px_rgba(59,130,246,0.18)] dark:border-blue-400/80 dark:shadow-[0_0_35px_rgba(56,189,248,0.22)]":"border-zinc-200/90 hover:border-zinc-300 dark:border-zinc-800/90 dark:hover:border-zinc-700","bg-white/85 dark:bg-zinc-950/85",n.class))},[l("div",{class:T(["pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-opacity duration-300",s.value?"opacity-100":"opacity-0"])},null,2),l("div",qg,[An(l("textarea",{ref_key:"textareaRef",ref:o,"onUpdate:modelValue":R[0]||(R[0]=x=>c.value=x),placeholder:n.placeholder,rows:"1",onFocus:R[1]||(R[1]=x=>s.value=!0),onBlur:R[2]||(R[2]=x=>s.value=!1),onInput:u,onKeydown:f,class:"w-full resize-none border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 bg-transparent text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-500 leading-relaxed font-sans shadow-none",style:{outline:"none","box-shadow":"none"}},null,40,Wg),[[$s,c.value]])]),l("div",Kg,[l("div",Xg,[l("div",Yg,[l("button",{type:"button",onClick:R[3]||(R[3]=x=>a.value=!a.value),class:"flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"},[w(A(Pe),{class:"h-3.5 w-3.5 text-blue-500"}),l("span",null,P(p.value.name),1),w(A(Ln),{class:"h-3 w-3 text-zinc-400"})]),w(zt,{name:"model-pop"},{default:Y(()=>[a.value?(g(),v("div",Zg,[R[4]||(R[4]=l("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," 切换推理基座 ",-1)),(g(!0),v(re,null,ve(n.models,x=>(g(),v("button",{key:x.id,type:"button",onClick:_=>y(x.id),class:T(["flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",x.id===n.selectedModel?"bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400":"text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"])},[l("span",null,P(x.name),1),x.badge?(g(),v("span",Qg,P(x.badge),1)):ne("",!0)],10,Jg))),128))])):ne("",!0)]),_:1})]),l("button",{type:"button",onClick:z,class:T(["flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium transition-colors border",i.value?"border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400":"border-transparent text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"]),title:"联网实时搜索"},[w(A(rr),{class:"h-3.5 w-3.5"}),R[5]||(R[5]=l("span",{class:"hidden sm:inline"},"深度搜索",-1))],2),l("button",eh,[w(A(dp),{class:"h-3.5 w-3.5"})]),l("button",th,[w(A(Xr),{class:"h-3.5 w-3.5"})])]),l("div",nh,[R[6]||(R[6]=l("span",{class:"hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-zinc-400"},[l("span",null,"Enter ↵ 发送")],-1)),l("button",{type:"button",onClick:m,disabled:!n.loading&&!c.value.trim(),class:T(["flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 shadow-md",n.loading?"bg-rose-500 text-white hover:bg-rose-600":c.value.trim()?"bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 active:scale-95":"bg-zinc-100 text-zinc-400 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"])},[n.loading?(g(),de(A(yp),{key:0,class:"h-3.5 w-3.5 fill-current"})):(g(),de(A(Tl),{key:1,class:"h-4 w-4"}))],10,rh)])])],2))}}),sh=He(oh,[["__scopeId","data-v-22761e01"]]),ih={class:"flex items-center gap-2.5 text-xs"},ah={class:"relative flex h-4 w-4 items-center justify-center"},lh={key:0,class:"absolute -inset-1 rounded-full bg-blue-500/20 animate-ping"},ch={class:"flex items-center gap-2"},dh={class:"font-bold text-zinc-900 dark:text-zinc-100"},uh={class:"inline-flex items-center gap-1 rounded-md bg-zinc-200/60 px-2 py-0.5 font-mono text-[11px] text-zinc-500 dark:bg-zinc-800/80 dark:text-zinc-400"},ph={key:0,class:"border-t border-zinc-200/70 px-4 py-3.5 dark:border-zinc-800/70"},fh={class:"border-l-2 border-blue-500/70 pl-3.5 font-mono text-xs leading-relaxed text-zinc-600 dark:border-blue-400/70 dark:text-zinc-400 whitespace-pre-wrap select-text"},mh=ce({__name:"ThoughtAccordion",props:{duration:{default:"思考用时 12.6 秒"},status:{default:"complete"},defaultOpen:{type:Boolean,default:!0},thoughtText:{default:`> 1. 解析用户需求：为 Vue 3 全系打造顶级 AI 原生交互动效。
> 2. 几何与物理模型推演：使用 CSS 3D 矩阵解构空间深度，保持 60fps 满帧性能。
> 3. 边界与异常收敛：引入状态机阻尼回弹，确保单文件零配置即刻分发。
> 4. 自愈与验证：通过 Playwright 双模态 Chromium 验证无色彩渗漏，交付闭环。`},class:{}},setup(e){const t=e,n=D(t.defaultOpen),r=D(!1);function o(){navigator.clipboard.writeText(t.thoughtText),r.value=!0,setTimeout(()=>{r.value=!1},2e3)}return(s,a)=>(g(),v("div",{class:T(A(be)("w-full overflow-hidden rounded-2xl border transition-all duration-300",n.value?"border-zinc-200/90 bg-zinc-50/70 shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/40":"border-zinc-200/60 bg-white/60 hover:border-zinc-300 dark:border-zinc-800/60 dark:bg-zinc-950/60",t.class))},[l("div",{class:"flex items-center justify-between px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40",onClick:a[2]||(a[2]=i=>n.value=!n.value)},[l("div",ih,[l("div",ah,[w(A(Pe),{class:T(["h-4 w-4 text-blue-500 transition-transform duration-300",t.status==="thinking"&&"animate-spin"])},null,8,["class"]),t.status==="thinking"?(g(),v("span",lh)):ne("",!0)]),l("div",ch,[l("span",dh,P(t.status==="thinking"?"正在深度思考推演...":"已深度思考"),1),l("span",uh,[w(A(Pl),{class:"h-3 w-3"}),l("span",null,P(t.duration),1)])])]),l("div",{class:"flex items-center gap-1.5",onClick:a[1]||(a[1]=Wt(()=>{},["stop"]))},[l("button",{type:"button",onClick:o,title:"复制思考过程",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[r.value?(g(),de(A(Kt),{key:0,class:"h-3.5 w-3.5 text-emerald-500"})):(g(),de(A(br),{key:1,class:"h-3.5 w-3.5"}))]),l("button",{type:"button",onClick:a[0]||(a[0]=i=>n.value=!n.value),class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[w(A(Ln),{class:T(["h-4 w-4 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])])]),w(zt,{name:"thought-slide"},{default:Y(()=>[n.value?(g(),v("div",ph,[l("div",fh,[dt(s.$slots,"default",{},()=>[Re(P(t.thoughtText),1)],!0)])])):ne("",!0)]),_:3})],2))}}),bh=He(mh,[["__scopeId","data-v-00c62984"]]),gh=["onClick","onMouseenter"],hh=ce({__name:"FluidTabs",props:{modelValue:{default:""},tabs:{default:()=>[]},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=D(null),s=D([]),a=D({left:0,width:0,opacity:0}),i=D({left:0,width:0,opacity:0});function c(m,z){m&&(s.value[z]=m)}function p(){Sn(()=>{if(!o.value)return;const m=n.tabs.findIndex(S=>S.id===n.modelValue);if(m===-1||!s.value[m]){a.value.opacity=0;return}const z=o.value.getBoundingClientRect(),y=s.value[m].getBoundingClientRect();a.value={left:y.left-z.left,width:y.width,opacity:1}})}function u(m){if(!o.value||!s.value[m])return;const z=o.value.getBoundingClientRect(),y=s.value[m].getBoundingClientRect();i.value={left:y.left-z.left,width:y.width,opacity:1}}function d(){i.value.opacity=0}function f(m){r("update:modelValue",m),r("change",m)}return gt(()=>n.modelValue,()=>{p()}),gt(()=>n.tabs,()=>{p()},{deep:!0}),We(()=>{!n.modelValue&&n.tabs.length>0&&r("update:modelValue",n.tabs[0].id),p(),window.addEventListener("resize",p)}),(m,z)=>(g(),v("div",{ref_key:"containerRef",ref:o,class:T(A(be)("relative inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-zinc-100/80 p-1.5 shadow-inner backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80 select-none",n.class)),onMouseleave:d},[l("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-zinc-200/60 transition-all duration-200 ease-out dark:bg-zinc-800/60",style:ke({left:`${i.value.left}px`,width:`${i.value.width}px`,opacity:i.value.opacity})},null,4),l("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-800 dark:shadow-black/40",style:ke({left:`${a.value.left}px`,width:`${a.value.width}px`,opacity:a.value.opacity})},null,4),(g(!0),v(re,null,ve(n.tabs,(y,S)=>(g(),v("button",{key:y.id,ref_for:!0,ref:R=>c(R,S),type:"button",onClick:R=>f(y.id),onMouseenter:R=>u(S),class:T(["relative z-10 flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-200",n.modelValue===y.id?"text-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"])},[y.icon?(g(),de(Ze(y.icon),{key:0,class:T(["h-4 w-4 transition-transform duration-200",n.modelValue===y.id?"scale-110 text-blue-600 dark:text-blue-400":"text-zinc-400"])},null,8,["class"])):ne("",!0),l("span",null,P(y.label),1),y.badge?(g(),v("span",{key:1,class:T(["rounded-full px-1.5 py-0.2 text-[10px] font-bold font-mono transition-colors",n.modelValue===y.id?"bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300":"bg-zinc-200/80 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"])},P(y.badge),3)):ne("",!0)],42,gh))),128))],34))}}),xh={class:"relative z-10 flex items-center gap-2"},vh={key:2},yh={key:3},wh={key:4},kh={key:5,class:"ml-1 inline-block font-mono text-[11px] font-bold"},Oo=ce({__name:"HoldToConfirm",props:{duration:{default:1200},label:{default:"长按以确认执行"},holdingLabel:{default:"保持长按不放..."},confirmedLabel:{default:"已成功确认！"},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,o=D(0),s=D(!1),a=D(!1);let i=null,c=0;const p=pe(()=>{switch(n.variant){case"danger":return{bg:"bg-rose-500/10 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-500/30",fill:"bg-rose-600 dark:bg-rose-500",ring:"text-rose-500",icon:Vl};case"warning":return{bg:"bg-amber-500/10 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-500/30",fill:"bg-amber-600 dark:bg-amber-500",ring:"text-amber-500",icon:Ol};default:return{bg:"bg-blue-500/10 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border-blue-500/30",fill:"bg-blue-600 dark:bg-blue-500",ring:"text-blue-500",icon:Kt}}});function u(){if(a.value)return;s.value=!0,c=performance.now();function f(){const m=performance.now()-c,z=Math.min(m/n.duration*100,100);o.value=z,z<100?i=requestAnimationFrame(f):(s.value=!1,a.value=!0,r("confirm"),setTimeout(()=>{a.value=!1,o.value=0},2500))}i=requestAnimationFrame(f)}function d(){a.value||(s.value=!1,i!==null&&(cancelAnimationFrame(i),i=null),o.value=0,r("cancel"))}return Qe(()=>{i!==null&&cancelAnimationFrame(i)}),(f,m)=>(g(),v("button",{type:"button",class:T(A(be)("group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-xl border px-5 text-xs sm:text-sm font-semibold select-none transition-all duration-200 active:scale-95 cursor-pointer",p.value.bg,a.value&&"!bg-emerald-600 !border-emerald-600 text-white",n.class)),onMousedown:u,onMouseup:d,onMouseleave:d,onTouchstart:Wt(u,["prevent"]),onTouchend:Wt(d,["prevent"])},[a.value?ne("",!0):(g(),v("div",{key:0,class:T(["pointer-events-none absolute inset-y-0 left-0 opacity-25 transition-[width] ease-linear",p.value.fill]),style:ke({width:`${o.value}%`})},null,6)),l("span",xh,[a.value?(g(),de(A(Kt),{key:0,class:"h-4 w-4 animate-bounce"})):(g(),de(Ze(p.value.icon),{key:1,class:T(["h-4 w-4 transition-transform duration-200",s.value&&"scale-125 animate-pulse"])},null,8,["class"])),a.value?(g(),v("span",vh,P(n.confirmedLabel),1)):s.value?(g(),v("span",yh,P(n.holdingLabel),1)):(g(),v("span",wh,P(n.label),1)),s.value&&!a.value?(g(),v("span",kh,P(Math.round(o.value))+"% ",1)):ne("",!0)])],34))}}),zh={key:0,class:"flex h-10 items-center gap-1.5 px-4 text-xs sm:text-sm font-semibold text-white"},Do=ce({__name:"ConfirmMorph",props:{label:{default:"删除此资源"},confirmText:{default:"确定删除"},cancelText:{default:"取消"},icon:{},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,o=D(!1),s=D(!1);function a(){s.value||(o.value=!0)}function i(){s.value=!0,r("confirm"),setTimeout(()=>{s.value=!1,o.value=!1},2200)}function c(){o.value=!1,r("cancel")}return(p,u)=>(g(),v("div",{class:T(A(be)("inline-flex items-center overflow-hidden rounded-xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none",n.variant==="danger"&&"border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20",n.variant==="warning"&&"border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20",n.variant==="primary"&&"border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20",s.value&&"!border-emerald-600 !bg-emerald-600 text-white",n.class))},[s.value?(g(),v("div",zh,[w(A(Kt),{class:"h-4 w-4 animate-bounce"}),u[0]||(u[0]=l("span",null,"操作已完成",-1))])):o.value?(g(),v(re,{key:1},[l("button",{type:"button",onClick:i,class:T(["flex h-10 items-center gap-1.5 px-3.5 text-xs font-semibold text-white transition-colors cursor-pointer",n.variant==="danger"&&"bg-rose-600 hover:bg-rose-700",n.variant==="warning"&&"bg-amber-600 hover:bg-amber-700",n.variant==="primary"&&"bg-blue-600 hover:bg-blue-700"])},[w(A(Ol),{class:"h-3.5 w-3.5"}),l("span",null,P(n.confirmText),1)],2),l("button",{type:"button",onClick:c,class:"flex h-10 items-center gap-1 border-l border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 px-3 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[w(A(Ps),{class:"h-3.5 w-3.5"}),l("span",null,P(n.cancelText),1)])],64)):(g(),v("button",{key:2,type:"button",onClick:a,class:T(["flex h-10 items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-colors cursor-pointer",n.variant==="danger"&&"text-rose-600 hover:bg-rose-500/10 dark:text-rose-400",n.variant==="warning"&&"text-amber-600 hover:bg-amber-500/10 dark:text-amber-400",n.variant==="primary"&&"text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"])},[(g(),de(Ze(n.icon||A(Vl)),{class:"h-4 w-4"})),l("span",null,P(n.label),1)],2))],2))}}),_h=["width","height","stroke-width"],Ch=["width","height","stroke-width"],Sh=["d"],Ah=["width","height","stroke-width"],jo=ce({__name:"IconMorph",props:{modelValue:{type:Boolean,default:!1},mode:{default:"menu-close"},size:{default:24},strokeWidth:{default:2},class:{}},emits:["update:modelValue","click"],setup(e,{emit:t}){const n=e,r=t;function o(){r("update:modelValue",!n.modelValue),r("click")}return(s,a)=>(g(),v("button",{type:"button",onClick:o,class:T(A(be)("relative inline-flex items-center justify-center rounded-xl p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer select-none",n.class)),style:ke({width:`${n.size+16}px`,height:`${n.size+16}px`})},[n.mode==="menu-close"?(g(),v("svg",{key:0,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[l("line",{x1:"3",y1:"6",x2:"21",y2:"6",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:ke({transform:n.modelValue?"translateY(6px) rotate(45deg)":"none"})},null,4),l("line",{x1:"3",y1:"12",x2:"21",y2:"12",class:"transition-all duration-200 ease-out origin-center",style:ke({opacity:n.modelValue?"0":"1",transform:n.modelValue?"scaleX(0)":"scaleX(1)"})},null,4),l("line",{x1:"3",y1:"18",x2:"21",y2:"18",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:ke({transform:n.modelValue?"translateY(-6px) rotate(-45deg)":"none"})},null,4)],8,_h)):n.mode==="play-pause"?(g(),v("svg",{key:1,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[l("line",{x1:"6",y1:"4",x2:"6",y2:"20",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",style:ke({transform:n.modelValue?"none":"translateX(1px)"})},null,4),l("path",{d:n.modelValue?"M18 4 L18 20":"M6 4 L20 12 L6 20",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"},null,8,Sh)],8,Ch)):n.mode==="plus-minus"?(g(),v("svg",{key:2,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round"},[a[0]||(a[0]=l("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1)),l("line",{x1:"12",y1:"5",x2:"12",y2:"19",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:ke({transform:n.modelValue?"rotate(90deg) scale(0)":"rotate(0deg) scale(1)",opacity:n.modelValue?"0":"1"})},null,4)],8,Ah)):ne("",!0)],6))}}),Ih={class:"relative inline-flex items-center"},Mh=["disabled"],Rh={key:1,class:"truncate"},Th={key:2,class:"ml-0.5 rounded-full bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400"},$h={key:0,class:"pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap rounded-md border border-zinc-200/80 bg-white/95 px-2 py-0.5 text-[10px] font-medium text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-800/95 dark:text-zinc-200"},Ph=ce({__name:"ActionButton",props:{label:{},tooltip:{},icon:{},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},badge:{},size:{default:"md"},class:{}},emits:["click"],setup(e,{emit:t}){const n=e,r=t,o=D(!1);function s(a){n.disabled||r("click",a)}return(a,i)=>(g(),v("div",Ih,[l("button",{type:"button",disabled:n.disabled,onClick:s,onMouseenter:i[0]||(i[0]=c=>o.value=!0),onMouseleave:i[1]||(i[1]=c=>o.value=!1),class:T(A(be)("group relative flex items-center justify-center rounded-xl border font-medium select-none transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer","active:scale-90 hover:scale-[1.03]",n.size==="sm"&&"h-8 px-2.5 text-xs gap-1.5",n.size==="md"&&"h-9 px-3 text-xs sm:text-sm gap-2",n.size==="lg"&&"h-11 px-4 text-sm sm:text-base gap-2.5",n.active?"border-blue-500/50 bg-blue-50 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/90 text-zinc-700 shadow-2xs hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800/80 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",n.disabled&&"opacity-50 cursor-not-allowed active:scale-100 hover:scale-100",n.class))},[n.icon?(g(),de(Ze(n.icon),{key:0,class:T(["shrink-0 transition-transform duration-150",n.size==="sm"&&"h-3.5 w-3.5",n.size==="md"&&"h-4 w-4",n.size==="lg"&&"h-5 w-5"])},null,8,["class"])):ne("",!0),n.label?(g(),v("span",Rh,P(n.label),1)):ne("",!0),n.badge!==void 0?(g(),v("span",Th,P(n.badge),1)):ne("",!0),dt(a.$slots,"default",{},void 0,!0)],42,Mh),w(zt,{name:"action-tip"},{default:Y(()=>[o.value&&n.tooltip?(g(),v("div",$h,P(n.tooltip),1)):ne("",!0)]),_:1})]))}}),Un=He(Ph,[["__scopeId","data-v-54d32724"]]),Eh={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-1"},Fh=["onClick"],Lh={class:"text-xs font-semibold text-zinc-900 dark:text-zinc-100"},Vh={key:0,class:"text-[10px] text-zinc-400 mt-0.5"},Oh=ce({__name:"SplitButton",props:{label:{default:"立即发布上线"},icon:{default:ss},items:{default:()=>[{id:"preview",label:"发布至 Staging 预览环境",description:"生成独立预览分支 URL"},{id:"draft",label:"保存为草稿草稿快照",description:"仅团队协作成员可见"},{id:"schedule",label:"定时发布计划",description:"设定指定时间自动化推上线"}]},variant:{default:"primary"},class:{}},emits:["primaryClick","select"],setup(e,{emit:t}){const n=e,r=t,o=D(!1),s=D(null);function a(){o.value=!o.value}function i(){r("primaryClick")}function c(u){o.value=!1,r("select",u),u.onClick&&u.onClick()}function p(u){s.value&&!s.value.contains(u.target)&&(o.value=!1)}return We(()=>{window.addEventListener("click",p)}),Qe(()=>{window.removeEventListener("click",p)}),(u,d)=>(g(),v("div",{ref_key:"containerRef",ref:s,class:T(A(be)("relative inline-flex items-center select-none",n.class))},[l("div",{class:T(["flex h-10 items-stretch overflow-hidden rounded-xl border shadow-sm transition-all duration-200",n.variant==="primary"&&"border-blue-600 bg-blue-600 text-white hover:bg-blue-500",n.variant==="secondary"&&"border-zinc-200/80 bg-white/90 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800"])},[l("button",{type:"button",onClick:i,class:"flex items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-transform active:scale-95 cursor-pointer"},[(g(),de(Ze(n.icon),{class:"h-4 w-4"})),l("span",null,P(n.label),1)]),l("div",{class:T(["w-px self-stretch",n.variant==="primary"?"bg-blue-400/50":"bg-zinc-200 dark:bg-zinc-800"])},null,2),l("button",{type:"button",onClick:Wt(a,["stop"]),class:"flex items-center justify-center px-2.5 transition-colors hover:bg-black/10 active:scale-95 cursor-pointer dark:hover:bg-white/10",title:"更多选项"},[w(A(Ln),{class:T(["h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",o.value&&"rotate-180"])},null,8,["class"])])],2),w(zt,{name:"split-menu"},{default:Y(()=>[o.value&&n.items&&n.items.length>0?(g(),v("div",Eh,[(g(!0),v(re,null,ve(n.items,f=>(g(),v("button",{key:f.id,type:"button",onClick:m=>c(f),class:"flex w-full flex-col items-start rounded-lg px-3 py-2 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"},[l("span",Lh,P(f.label),1),f.description?(g(),v("span",Vh,P(f.description),1)):ne("",!0)],8,Fh))),128))])):ne("",!0)]),_:1})],2))}}),sa=He(Oh,[["__scopeId","data-v-6e3e55b2"]]),Dh=["onClick"],jh={class:"font-mono text-[11px] font-bold"},Bh={key:0,type:"button",class:"flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-zinc-300 text-zinc-400 transition-colors hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 cursor-pointer",title:"添加表情反馈"},ia=ce({__name:"Reactions",props:{items:{default:()=>[{id:"fire",emoji:"🔥",count:48,active:!0},{id:"rocket",emoji:"🚀",count:32,active:!1},{id:"heart",emoji:"❤️",count:65,active:!1},{id:"zap",emoji:"⚡",count:19,active:!1},{id:"eyes",emoji:"👀",count:12,active:!1}]},allowAdd:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=D(JSON.parse(JSON.stringify(t.items))),r=D(null);function o(s){s.active=!s.active,s.count+=s.active?1:-1,r.value=s.id,setTimeout(()=>{r.value=null},400)}return(s,a)=>(g(),v("div",{class:T(A(be)("inline-flex flex-wrap items-center gap-1.5 select-none",t.class))},[(g(!0),v(re,null,ve(n.value,i=>(g(),v("button",{key:i.id,type:"button",onClick:c=>o(i),class:T(["group flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold transition-all duration-200 active:scale-90 cursor-pointer",i.active?"border-blue-500/50 bg-blue-50/80 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/80 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"])},[l("span",{class:T(["text-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",r.value===i.id&&"scale-135 -translate-y-0.5","group-hover:scale-110"])},P(i.emoji),3),l("span",jh,P(i.count),1)],10,Dh))),128)),t.allowAdd?(g(),v("button",Bh,[w(A(vp),{class:"h-3.5 w-3.5"})])):ne("",!0)],2))}}),Nh={key:0,class:"text-xs font-semibold text-zinc-600 dark:text-zinc-300"},Hh={class:"relative flex h-full flex-1 items-center px-2.5 min-w-[70px]"},Uh={class:"font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100"},Gh={key:0,class:"font-mono text-[10px] text-zinc-400"},Bo=ce({__name:"ScrubInput",props:{modelValue:{},label:{},min:{default:0},max:{default:100},step:{default:1},sensitivity:{default:1},suffix:{default:"px"},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=D(!1),s=D(!1),a=D(null),i=D(String(n.modelValue));let c=0,p=0;function u(R){let x=R;return n.min!==void 0&&(x=Math.max(n.min,x)),n.max!==void 0&&(x=Math.min(n.max,x)),Math.round(x*100)/100}function d(R){s.value||(o.value=!0,c=R.clientX,p=n.modelValue,window.addEventListener("mousemove",f),window.addEventListener("mouseup",m),document.body.style.cursor="ew-resize",document.body.style.userSelect="none")}function f(R){if(!o.value)return;const x=R.clientX-c;let _=1;R.shiftKey&&(_=10),R.altKey&&(_=.1);const C=Math.round(x/(5/n.sensitivity)*_)*n.step,F=u(p+C);F!==n.modelValue&&r("update:modelValue",F)}function m(){o.value&&(o.value=!1,window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect="",r("change",n.modelValue))}function z(){s.value=!0,i.value=String(n.modelValue),setTimeout(()=>{var R,x;(R=a.value)==null||R.focus(),(x=a.value)==null||x.select()},20)}function y(){s.value=!1;const R=parseFloat(i.value);if(!isNaN(R)){const x=u(R);r("update:modelValue",x),r("change",x)}}const S=pe(()=>{const R=n.max-n.min;return R<=0?0:Math.min(Math.max((n.modelValue-n.min)/R*100,0),100)});return Qe(()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect=""}),(R,x)=>(g(),v("div",{class:T(A(be)("group relative inline-flex h-9 items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900 select-none overflow-hidden",o.value&&"border-blue-500 ring-2 ring-blue-500/20",n.class))},[l("div",{class:"pointer-events-none absolute inset-y-0 left-0 bg-blue-500/10 dark:bg-blue-500/15 transition-[width] ease-out duration-75",style:ke({width:`${S.value}%`})},null,4),l("div",{onMousedown:d,class:"flex h-full items-center gap-1 px-2.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-ew-resize transition-colors",title:"按住左右水平拖拽微调数值 (Shift 加速 10x, Alt 精细 0.1x)"},[w(A($l),{class:"h-3.5 w-3.5"}),n.label?(g(),v("span",Nh,P(n.label),1)):ne("",!0)],32),x[2]||(x[2]=l("div",{class:"h-4 w-px bg-zinc-200 dark:bg-zinc-800"},null,-1)),l("div",Hh,[s.value?An((g(),v("input",{key:0,ref_key:"inputRef",ref:a,"onUpdate:modelValue":x[0]||(x[0]=_=>i.value=_),type:"text",onBlur:y,onKeydown:[Ci(y,["enter"]),x[1]||(x[1]=Ci(_=>s.value=!1,["esc"]))],class:"w-full bg-transparent p-0 text-right font-mono text-xs font-bold text-zinc-900 outline-none focus:outline-none dark:text-zinc-100"},null,544)),[[$s,i.value]]):(g(),v("div",{key:1,onDblclick:z,onMousedown:d,class:"flex w-full items-center justify-end gap-0.5 cursor-ew-resize",title:"双击直接键入数值，或按住水平拖动"},[l("span",Uh,P(n.modelValue),1),n.suffix?(g(),v("span",Gh,P(n.suffix),1)):ne("",!0)],32))])],2))}}),qh={class:"relative flex items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900"},Wh=["type","value","placeholder"],Kh={class:"space-y-1.5"},Xh={class:"grid grid-cols-4 gap-1.5"},Yh={class:"flex items-center justify-between text-[11px] font-mono"},Zh={class:"text-zinc-400 flex items-center gap-1"},Jh={key:0,class:"rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-3 text-xs space-y-1.5 dark:border-zinc-800/80 dark:bg-zinc-950/40"},Qh=ce({__name:"PasswordStrength",props:{modelValue:{default:""},placeholder:{default:"请输入安全密码..."},showRules:{type:Boolean,default:!0},class:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,o=D(!1),s=pe(()=>{const p=n.modelValue||"";return[{id:"length",label:"至少 8 个字符",valid:p.length>=8},{id:"lowercase",label:"包含小写英文字母 (a-z)",valid:/[a-z]/.test(p)},{id:"uppercase",label:"包含大写英文字母 (A-Z)",valid:/[A-Z]/.test(p)},{id:"number",label:"包含至少 1 个数字 (0-9)",valid:/\d/.test(p)},{id:"special",label:"包含特殊符号 (!@#$%^&*)",valid:/[^A-Za-z0-9]/.test(p)}]}),a=pe(()=>s.value.filter(p=>p.valid).length),i=pe(()=>{if(!n.modelValue)return{score:0,text:"未输入",color:"bg-zinc-200 dark:bg-zinc-800",textColor:"text-zinc-400"};const p=a.value;return p<=2?{score:1,text:"较弱 (Weak)",color:"bg-rose-500",textColor:"text-rose-500"}:p===3?{score:2,text:"中等 (Fair)",color:"bg-amber-500",textColor:"text-amber-500"}:p===4?{score:3,text:"良好 (Good)",color:"bg-sky-500",textColor:"text-sky-500"}:{score:4,text:"极高安全 (Strong)",color:"bg-emerald-500",textColor:"text-emerald-500"}});function c(p){const u=p.target.value;r("update:modelValue",u)}return(p,u)=>(g(),v("div",{class:T(A(be)("w-full max-w-sm space-y-3 select-none",n.class))},[l("div",qh,[l("input",{type:o.value?"text":"password",value:n.modelValue,placeholder:n.placeholder,onInput:c,class:"h-10 w-full bg-transparent px-3.5 pr-10 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,Wh),l("button",{type:"button",onClick:u[0]||(u[0]=d=>o.value=!o.value),class:"absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer",tabindex:"-1"},[o.value?(g(),de(A(sp),{key:0,class:"h-4 w-4"})):(g(),de(A(El),{key:1,class:"h-4 w-4"}))])]),l("div",Kh,[l("div",Xh,[(g(),v(re,null,ve(4,d=>l("div",{key:d,class:"h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300"},[l("div",{class:T(["h-full transition-all duration-300 ease-out",d<=i.value.score?i.value.color:"w-0"]),style:ke({width:d<=i.value.score?"100%":"0%"})},null,6)])),64))]),l("div",Yh,[l("span",Zh,[w(A(Ll),{class:"h-3.5 w-3.5"}),u[1]||(u[1]=l("span",null,"安全等级评估",-1))]),l("span",{class:T(["font-bold transition-colors duration-200",i.value.textColor])},P(i.value.text),3)])]),n.showRules?(g(),v("div",Jh,[(g(!0),v(re,null,ve(s.value,d=>(g(),v("div",{key:d.id,class:T(["flex items-center gap-2 transition-colors duration-200",d.valid?"text-emerald-600 dark:text-emerald-400 font-semibold":"text-zinc-400"])},[l("div",{class:T(["flex h-4 w-4 items-center justify-center rounded-full transition-all duration-200",d.valid?"bg-emerald-500/20 text-emerald-600 dark:text-emerald-400":"bg-zinc-200 dark:bg-zinc-800 text-zinc-400"])},[d.valid?(g(),de(A(Kt),{key:0,class:"h-2.5 w-2.5 animate-bounce"})):(g(),de(A(Ps),{key:1,class:"h-2.5 w-2.5 opacity-50"}))],2),l("span",null,P(d.label),1)],2))),128))])):ne("",!0)],2))}}),ex={class:"flex items-center justify-between"},tx={class:"flex items-center gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800"},nx=["onClick"],rx={class:"relative flex items-baseline border-b border-zinc-200/90 pb-3 transition-colors focus-within:border-blue-500 dark:border-zinc-800"},ox={class:"font-mono text-2xl font-bold text-zinc-400 mr-2 shrink-0"},sx=["value","placeholder"],ix={class:"flex flex-wrap items-center gap-2 pt-1"},ax=["onClick"],lx=ce({__name:"MoneyInput",props:{modelValue:{default:0},currency:{default:"CNY"},currencies:{default:()=>[{code:"CNY",symbol:"¥",label:"人民币"},{code:"USD",symbol:"$",label:"美元"},{code:"EUR",symbol:"€",label:"欧元"},{code:"GBP",symbol:"£",label:"英镑"}]},presets:{default:()=>[100,500,1e3,5e3]},placeholder:{default:"0.00"},class:{}},emits:["update:modelValue","update:currency"],setup(e,{emit:t}){const n=e,r=t,o=D(n.currency),s=pe(()=>{var m;return((m=n.currencies.find(z=>z.code===o.value))==null?void 0:m.symbol)||"¥"});function a(m){return m===0?"":m.toLocaleString("en-US",{maximumFractionDigits:2})}const i=pe(()=>a(n.modelValue)),c=pe(()=>{const m=i.value.length;return m>12?"text-xl":m>8?"text-2xl":"text-3xl sm:text-4xl"});function p(m){const y=m.target.value.replace(/[^0-9.]/g,""),S=parseFloat(y);r("update:modelValue",isNaN(S)?0:S)}function u(m){r("update:modelValue",n.modelValue+m)}function d(){r("update:modelValue",0)}function f(m){o.value=m,r("update:currency",m)}return(m,z)=>(g(),v("div",{class:T(A(be)("w-full max-w-md rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 select-none space-y-4",n.class))},[l("div",ex,[z[0]||(z[0]=l("span",{class:"text-xs font-semibold text-zinc-500 dark:text-zinc-400"},"转账 / 充值金额",-1)),l("div",tx,[(g(!0),v(re,null,ve(n.currencies,y=>(g(),v("button",{key:y.code,type:"button",onClick:S=>f(y.code),class:T(["rounded-md px-2 py-0.5 text-[11px] font-bold font-mono transition-colors cursor-pointer",o.value===y.code?"bg-white text-zinc-900 shadow-2xs dark:bg-zinc-700 dark:text-white":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"])},P(y.code),11,nx))),128))])]),l("div",rx,[l("span",ox,P(s.value),1),l("input",{type:"text",inputmode:"decimal",value:i.value,placeholder:n.placeholder,onInput:p,class:T(["w-full bg-transparent p-0 font-mono font-extrabold tracking-tight text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 transition-all duration-200",c.value])},null,42,sx),n.modelValue>0?(g(),v("button",{key:0,type:"button",onClick:d,class:"ml-2 rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors cursor-pointer shrink-0"}," 清零 ")):ne("",!0)]),l("div",ix,[z[1]||(z[1]=l("span",{class:"text-[11px] text-zinc-400"},"快捷填充:",-1)),(g(!0),v(re,null,ve(n.presets,y=>(g(),v("button",{key:y,type:"button",onClick:S=>u(y),class:"rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-2.5 py-1 font-mono text-xs font-semibold text-zinc-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-400 dark:hover:bg-blue-950/40 dark:hover:text-blue-400 transition-all active:scale-95 cursor-pointer"}," +"+P(s.value)+P(y),9,ax))),128))])],2))}}),cx={class:"text-base leading-none"},dx={class:"font-mono text-zinc-900 dark:text-zinc-100"},ux={class:"relative flex flex-1 items-center px-3"},px=["value","placeholder"],fx={key:0,class:"ml-1 text-emerald-500"},mx={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 max-h-56 overflow-y-auto space-y-0.5"},bx=["onClick"],gx={class:"flex items-center gap-2"},hx={class:"text-base"},xx={class:"font-medium text-zinc-800 dark:text-zinc-200"},vx={class:"font-mono text-[11px] font-bold text-zinc-400"},yx=ce({__name:"PhoneInput",props:{modelValue:{default:""},countryCode:{default:"CN"},countries:{default:()=>[{code:"CN",dialCode:"+86",name:"中国",flag:"🇨🇳",format:"### #### ####"},{code:"US",dialCode:"+1",name:"美国",flag:"🇺🇸",format:"(###) ###-####"},{code:"GB",dialCode:"+44",name:"英国",flag:"🇬🇧",format:"#### ######"},{code:"JP",dialCode:"+81",name:"日本",flag:"🇯🇵",format:"###-####-####"},{code:"DE",dialCode:"+49",name:"德国",flag:"🇩🇪",format:"#### #######"},{code:"SG",dialCode:"+65",name:"新加坡",flag:"🇸🇬",format:"#### ####"}]},placeholder:{default:"请输入手机号码..."},class:{}},emits:["update:modelValue","update:countryCode"],setup(e,{emit:t}){const n=e,r=t,o=D(n.countries.find(f=>f.code===n.countryCode)||n.countries[0]),s=D(!1),a=D(null);function i(f,m){const z=f.replace(/\D/g,"");let y="",S=0;for(let R=0;R<m.length&&S<z.length;R++)m[R]==="#"?(y+=z[S],S++):y+=m[R];return S<z.length&&(y+=" "+z.slice(S)),y}function c(f){const z=f.target.value.replace(/\D/g,""),y=i(z,o.value.format);r("update:modelValue",y)}function p(f){o.value=f,s.value=!1,r("update:countryCode",f.code);const m=n.modelValue.replace(/\D/g,"");r("update:modelValue",i(m,f.format))}function u(f){a.value&&!a.value.contains(f.target)&&(s.value=!1)}We(()=>{window.addEventListener("click",u)}),Qe(()=>{window.removeEventListener("click",u)});const d=pe(()=>{const f=n.modelValue.replace(/\D/g,"");return f.length>=8&&f.length<=15});return(f,m)=>(g(),v("div",{ref_key:"containerRef",ref:a,class:T(A(be)("relative w-full max-w-sm select-none",n.class))},[l("div",{class:T(["flex h-10 items-center overflow-hidden rounded-xl border bg-white shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:bg-zinc-900",n.modelValue&&d.value?"border-emerald-500/50":"border-zinc-200/90 dark:border-zinc-800"])},[l("button",{type:"button",onClick:m[0]||(m[0]=Wt(z=>s.value=!s.value,["stop"])),class:"flex h-full items-center gap-1.5 border-r border-zinc-200/80 bg-zinc-50/70 px-3 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0 outline-none focus:outline-none ring-0"},[l("span",cx,P(o.value.flag),1),l("span",dx,P(o.value.dialCode),1),w(A(Ln),{class:T(["h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",s.value&&"rotate-180"])},null,8,["class"])]),l("div",ux,[l("input",{type:"tel",value:n.modelValue,placeholder:n.placeholder,onInput:c,class:"w-full bg-transparent font-mono text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,px),n.modelValue&&d.value?(g(),v("div",fx,[w(A(Kt),{class:"h-4 w-4 animate-bounce"})])):ne("",!0)])],2),w(zt,{name:"phone-menu"},{default:Y(()=>[s.value?(g(),v("div",mx,[(g(!0),v(re,null,ve(n.countries,z=>(g(),v("button",{key:z.code,type:"button",onClick:y=>p(z),class:"flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"},[l("div",gx,[l("span",hx,P(z.flag),1),l("span",xx,P(z.name),1)]),l("span",vx,P(z.dialCode),1)],8,bx))),128))])):ne("",!0)]),_:1})],2))}}),wx=He(yx,[["__scopeId","data-v-23e74282"]]),kx={class:"flex items-center pl-1 text-zinc-400"},zx=["onClick"],_x=["disabled","placeholder"],Cx={key:0,class:"ml-auto pr-1 font-mono text-[10px] text-zinc-400"},Sx=ce({__name:"TagInput",props:{modelValue:{default:()=>["Vue 3.5","TailwindCSS","Motion UI"]},placeholder:{default:"输入标签后按回车添加..."},maxTags:{default:8},allowDuplicates:{type:Boolean,default:!1},class:{}},emits:["update:modelValue","add","remove"],setup(e,{emit:t}){const n=e,r=t,o=D(""),s=D(null);function a(){const u=o.value.trim();if(!u||n.maxTags&&n.modelValue.length>=n.maxTags)return;if(!n.allowDuplicates&&n.modelValue.includes(u)){o.value="";return}const d=[...n.modelValue,u];r("update:modelValue",d),r("add",u),o.value=""}function i(u){const d=n.modelValue[u],f=n.modelValue.filter((m,z)=>z!==u);r("update:modelValue",f),r("remove",d)}function c(u){u.key==="Enter"||u.key===","?(u.preventDefault(),a()):u.key==="Backspace"&&!o.value&&n.modelValue.length>0&&i(n.modelValue.length-1)}function p(){var u;(u=s.value)==null||u.focus()}return(u,d)=>(g(),v("div",{onClick:p,class:T(A(be)("group flex min-h-10 w-full max-w-md flex-wrap items-center gap-1.5 rounded-xl border border-zinc-200/90 bg-white p-2 shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900 cursor-text select-none",n.class))},[l("div",kx,[w(A(kp),{class:"h-3.5 w-3.5"})]),w(Fu,{name:"tag-list"},{default:Y(()=>[(g(!0),v(re,null,ve(n.modelValue,(f,m)=>(g(),v("div",{key:f,class:"inline-flex items-center gap-1 rounded-lg border border-blue-500/20 bg-blue-50/70 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/60 dark:text-blue-300 transition-all duration-200"},[l("span",null,P(f),1),l("button",{type:"button",onClick:Wt(z=>i(m),["stop"]),class:"flex h-3.5 w-3.5 items-center justify-center rounded-full hover:bg-blue-600/20 dark:hover:bg-blue-400/20 transition-colors cursor-pointer"},[w(A(Ps),{class:"h-2.5 w-2.5"})],8,zx)]))),128))]),_:1}),An(l("input",{ref_key:"inputRef",ref:s,"onUpdate:modelValue":d[0]||(d[0]=f=>o.value=f),type:"text",disabled:n.maxTags?n.modelValue.length>=n.maxTags:!1,placeholder:n.modelValue.length===0?n.placeholder:n.maxTags&&n.modelValue.length>=n.maxTags?"已达上限":"添加更多...",onKeydown:c,class:"min-w-[80px] flex-1 bg-transparent px-1.5 py-0.5 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,_x),[[$s,o.value]]),n.maxTags?(g(),v("div",Cx,P(n.modelValue.length)+"/"+P(n.maxTags),1)):ne("",!0)],2))}}),Ax=He(Sx,[["__scopeId","data-v-a092d752"]]),Ix={class:"relative flex flex-col rounded-2xl border border-zinc-200/90 bg-white p-3 shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900"},Mx=["value","placeholder"],Rx={class:"flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/80"},Tx={class:"flex items-center gap-1 text-[11px] text-zinc-400"},$x={class:"font-mono text-[10px] text-zinc-400"},Px={key:0,class:"aura-popover popover-shadow absolute bottom-full left-0 mb-2 w-72 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-0.5"},Ex={class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"},Fx=["onClick","onMouseenter"],Lx={key:1},Vx={class:"flex flex-1 flex-col overflow-hidden"},Ox={class:"flex items-center gap-1.5"},Dx={class:"truncate text-xs font-semibold"},jx={key:0,class:"rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"},Bx={class:"truncate text-[10px] text-zinc-400"},Nx=ce({__name:"MentionInput",props:{modelValue:{default:""},placeholder:{default:"输入内容，键入 @ 可呼出团队成员或智能体..."},users:{default:()=>[{id:"1",name:"左岚 (Zuǒ Lán)",handle:"zuolan",role:"全栈架构 Agent",isBot:!0},{id:"2",name:"Aura Motion",handle:"auramotion",role:"视觉动效引擎",isBot:!0},{id:"3",name:"Alex Rivera",handle:"alex",role:"前端技术专家",isBot:!1},{id:"4",name:"Elena Rostova",handle:"elena",role:"UI 设计专家",isBot:!1},{id:"5",name:"Devin AI",handle:"devin",role:"代码重构 Agent",isBot:!0}]},class:{}},emits:["update:modelValue","mention"],setup(e,{emit:t}){const n=e,r=t,o=D(null),s=D(!1),a=D(""),i=D(0),c=pe(()=>{const f=a.value.toLowerCase();return f?n.users.filter(m=>m.name.toLowerCase().includes(f)||m.handle.toLowerCase().includes(f)):n.users});function p(f){const m=f.target,z=m.value;r("update:modelValue",z);const y=m.selectionStart||0,S=z.slice(0,y),R=S.lastIndexOf("@");if(R!==-1){const x=S.slice(R+1);if(!x.includes(" ")&&!x.includes(`
`)){a.value=x,s.value=!0,i.value=0;return}}s.value=!1}function u(f){const m=o.value;if(!m)return;const z=n.modelValue,y=m.selectionStart||0,S=z.slice(0,y),R=z.slice(y),x=S.lastIndexOf("@");if(x!==-1){const _=S.slice(0,x)+`@${f.name} `+R;r("update:modelValue",_),r("mention",f),s.value=!1,setTimeout(()=>{m.focus();const C=x+f.name.length+2;m.setSelectionRange(C,C)},20)}}function d(f){!s.value||c.value.length===0||(f.key==="ArrowDown"?(f.preventDefault(),i.value=(i.value+1)%c.value.length):f.key==="ArrowUp"?(f.preventDefault(),i.value=(i.value-1+c.value.length)%c.value.length):f.key==="Enter"||f.key==="Tab"?(f.preventDefault(),u(c.value[i.value])):f.key==="Escape"&&(s.value=!1))}return(f,m)=>(g(),v("div",{class:T(A(be)("relative w-full max-w-lg select-none",n.class))},[l("div",Ix,[l("textarea",{ref_key:"textareaRef",ref:o,value:n.modelValue,placeholder:n.placeholder,rows:"3",onInput:p,onKeydown:d,class:"w-full resize-none bg-transparent text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,Mx),l("div",Rx,[l("div",Tx,[w(A(ep),{class:"h-3.5 w-3.5 text-blue-500"}),m[0]||(m[0]=l("span",null,"输入 @ 呼出协作成员 / Agent",-1))]),l("span",$x,P(n.modelValue.length)+" 字 ",1)])]),w(zt,{name:"mention-pop"},{default:Y(()=>[s.value&&c.value.length>0?(g(),v("div",Px,[l("div",Ex," 可选成员与智能体 ("+P(c.value.length)+") ",1),(g(!0),v(re,null,ve(c.value,(z,y)=>(g(),v("button",{key:z.id,type:"button",onClick:S=>u(z),onMouseenter:S=>i.value=y,class:T(["flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors cursor-pointer",i.value===y?"bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300":"hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200"])},[l("div",{class:T(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white shrink-0",z.isBot?"bg-gradient-to-tr from-blue-600 to-indigo-500":"bg-zinc-700 dark:bg-zinc-600"])},[z.isBot?(g(),de(A(tr),{key:0,class:"h-4 w-4"})):(g(),v("span",Lx,P(z.name.charAt(0)),1))],2),l("div",Vx,[l("div",Ox,[l("span",Dx,P(z.name),1),z.isBot?(g(),v("span",jx," AI ")):ne("",!0)]),l("span",Bx,"@"+P(z.handle)+" · "+P(z.role),1)])],42,Fx))),128))])):ne("",!0)]),_:1})],2))}}),Hx=He(Nx,[["__scopeId","data-v-b496cb8a"]]),Ux=["disabled","onClick","onKeydown"],aa=ce({__name:"SegmentedControl",props:{modelValue:{},options:{},size:{default:"md"},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=D(null),s=D([]),a=D({width:"0px",transform:"translateX(0px)",opacity:0});function i(){const u=n.options.findIndex(f=>f.id===n.modelValue);if(u===-1||!s.value[u]){a.value.opacity=0;return}const d=s.value[u];d&&(a.value={width:`${d.offsetWidth}px`,transform:`translateX(${d.offsetLeft}px)`,opacity:1})}function c(u){u.disabled||(r("update:modelValue",u.id),r("change",u))}function p(u,d){const f=n.options.map((y,S)=>({opt:y,i:S})).filter(y=>!y.opt.disabled),m=f.findIndex(y=>y.i===d);if(m===-1)return;let z=m;if(u.key==="ArrowRight"||u.key==="ArrowDown"?(u.preventDefault(),z=(m+1)%f.length):(u.key==="ArrowLeft"||u.key==="ArrowUp")&&(u.preventDefault(),z=(m-1+f.length)%f.length),z!==m){const y=f[z];c(y.opt),Sn(()=>{var S;(S=s.value[y.i])==null||S.focus()})}}return gt(()=>n.modelValue,()=>{Sn(i)}),We(()=>{Sn(()=>{i(),window.addEventListener("resize",i)})}),(u,d)=>(g(),v("div",{ref_key:"containerRef",ref:o,class:T(A(be)("relative inline-flex items-center rounded-xl bg-zinc-100 p-1 select-none dark:bg-zinc-800/80",n.class))},[l("div",{class:"pointer-events-none absolute left-0 top-1 bottom-1 z-0 rounded-lg bg-white shadow-xs transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-700 dark:shadow-none",style:ke(a.value)},null,4),(g(!0),v(re,null,ve(n.options,(f,m)=>(g(),v("button",{key:f.id,ref_for:!0,ref:z=>s.value[m]=z,type:"button",disabled:f.disabled,onClick:z=>c(f),onKeydown:z=>p(z,m),class:T(A(be)("relative z-10 flex items-center justify-center gap-1.5 font-medium transition-colors duration-150 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer",n.size==="sm"&&"h-7 px-2.5 text-xs",n.size==="md"&&"h-8 px-3.5 text-xs sm:text-sm",n.size==="lg"&&"h-10 px-4 text-sm sm:text-base",n.modelValue===f.id?"text-zinc-900 font-bold dark:text-white":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",f.disabled&&"opacity-40 cursor-not-allowed hover:text-zinc-500"))},[f.icon?(g(),de(Ze(f.icon),{key:0,class:T(["shrink-0 transition-transform duration-150",n.size==="sm"&&"h-3.5 w-3.5",n.size==="md"&&"h-4 w-4",n.size==="lg"&&"h-5 w-5",n.modelValue===f.id&&"scale-105 text-blue-600 dark:text-blue-400"])},null,8,["class"])):ne("",!0),l("span",null,P(f.label),1),f.badge!==void 0?(g(),v("span",{key:1,class:T(["rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold transition-colors",n.modelValue===f.id?"bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300":"bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"])},P(f.badge),3)):ne("",!0)],42,Ux))),128))],2))}}),Gx={class:"flex items-center gap-1.5 flex-wrap"},qx={key:0,class:"flex items-center"},Wx={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},Kx={key:1},Xx=["onClick"],Yx={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},Zx={key:1},Jx={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},Qx={key:1},ev={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-1.5 w-48 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-0.5"},tv=["onClick"],nv={key:0,class:"font-bold text-zinc-900 dark:text-white flex items-center gap-1","aria-current":"page"},rv=["onClick"],ov={key:2,class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},sv={key:1},iv=ce({__name:"BreadcrumbTrail",props:{items:{},maxItems:{default:4},separator:{default:"chevron"},showHome:{type:Boolean,default:!0},class:{}},emits:["select"],setup(e,{emit:t}){const n=e,r=t,o=D(!1),s=D(null),a=pe(()=>{const p=n.items.length;return p<=n.maxItems?{start:n.items,hidden:[],end:[],isCollapsed:!1}:{start:[n.items[0]],hidden:n.items.slice(1,p-2),end:n.items.slice(p-2),isCollapsed:!0}});function i(p){r("select",p),p.onClick&&p.onClick(),o.value=!1}function c(p){s.value&&!s.value.contains(p.target)&&(o.value=!1)}return We(()=>{window.addEventListener("click",c)}),Qe(()=>{window.removeEventListener("click",c)}),(p,u)=>(g(),v("nav",{"aria-label":"Breadcrumb",class:T(A(be)("inline-flex items-center text-xs sm:text-sm font-medium select-none",n.class))},[l("ol",Gx,[n.showHome?(g(),v("li",qx,[l("button",{type:"button",onClick:u[0]||(u[0]=d=>i({label:"首页",href:"/"})),class:"flex items-center gap-1 text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer",title:"返回控制台首页"},[w(A(Fl),{class:"h-3.5 w-3.5"})]),l("span",Wx,[n.separator==="chevron"?(g(),de(A(Wn),{key:0,class:"h-3.5 w-3.5"})):(g(),v("span",Kx,"/"))])])):ne("",!0),(g(!0),v(re,null,ve(a.value.start,d=>(g(),v("li",{key:d.label,class:"flex items-center"},[l("button",{type:"button",onClick:f=>i(d),class:"flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[d.icon?(g(),de(Ze(d.icon),{key:0,class:"h-3.5 w-3.5"})):ne("",!0),l("span",null,P(d.label),1)],8,Xx),l("span",Yx,[n.separator==="chevron"?(g(),de(A(Wn),{key:0,class:"h-3.5 w-3.5"})):(g(),v("span",Zx,"/"))])]))),128)),a.value.isCollapsed?(g(),v("li",{key:1,ref_key:"menuRef",ref:s,class:"relative flex items-center"},[l("button",{type:"button",onClick:u[1]||(u[1]=Wt(d=>o.value=!o.value,["stop"])),class:"flex h-6 w-6 items-center justify-center rounded-md border border-zinc-200/80 bg-zinc-50/80 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-all cursor-pointer",title:"点击展开中间隐藏路径"},[w(A(op),{class:"h-3.5 w-3.5"})]),l("span",Jx,[n.separator==="chevron"?(g(),de(A(Wn),{key:0,class:"h-3.5 w-3.5"})):(g(),v("span",Qx,"/"))]),w(zt,{name:"crumb-menu"},{default:Y(()=>[o.value?(g(),v("div",ev,[u[2]||(u[2]=l("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," 折叠上级路径 ",-1)),(g(!0),v(re,null,ve(a.value.hidden,(d,f)=>(g(),v("button",{key:f,type:"button",onClick:m=>i(d),class:"flex w-full items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-left text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer transition-colors"},[d.icon?(g(),de(Ze(d.icon),{key:0,class:"h-3.5 w-3.5 text-zinc-400"})):ne("",!0),l("span",null,P(d.label),1)],8,tv))),128))])):ne("",!0)]),_:1})],512)):ne("",!0),(g(!0),v(re,null,ve(a.value.end,(d,f)=>(g(),v("li",{key:f,class:"flex items-center"},[f===a.value.end.length-1?(g(),v("span",nv,[d.icon?(g(),de(Ze(d.icon),{key:0,class:"h-3.5 w-3.5 text-blue-500"})):ne("",!0),l("span",null,P(d.label),1)])):(g(),v("button",{key:1,type:"button",onClick:m=>i(d),class:"flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[d.icon?(g(),de(Ze(d.icon),{key:0,class:"h-3.5 w-3.5"})):ne("",!0),l("span",null,P(d.label),1)],8,rv)),f<a.value.end.length-1?(g(),v("span",ov,[n.separator==="chevron"?(g(),de(A(Wn),{key:0,class:"h-3.5 w-3.5"})):(g(),v("span",sv,"/"))])):ne("",!0)]))),128))])],2))}}),la=He(iv,[["__scopeId","data-v-097ac1ff"]]),av={key:0,class:"whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-xs font-semibold text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:text-zinc-200 transition-transform group-hover:scale-105"},lv=["onClick","title"],cv=ce({__name:"FloatingActionMenu",props:{actions:{},direction:{default:"up"},class:{}},emits:["select","toggle"],setup(e,{emit:t}){const n=e,r=t,o=D(!1),s=D(null);function a(){o.value=!o.value,r("toggle",o.value)}function i(p){r("select",p),p.onClick&&p.onClick(),o.value=!1,r("toggle",!1)}function c(p){s.value&&!s.value.contains(p.target)&&o.value&&(o.value=!1,r("toggle",!1))}return We(()=>{window.addEventListener("click",c)}),Qe(()=>{window.removeEventListener("click",c)}),(p,u)=>(g(),v("div",{ref_key:"containerRef",ref:s,class:T(A(be)("relative inline-flex flex-col items-center select-none",n.class))},[w(zt,{name:"fab-items"},{default:Y(()=>[o.value?(g(),v("div",{key:0,class:T(["absolute z-40 flex gap-3 pointer-events-auto",n.direction==="up"&&"bottom-full mb-3 flex-col-reverse items-center",n.direction==="down"&&"top-full mt-3 flex-col items-center",n.direction==="left"&&"right-full mr-3 flex-row-reverse items-center",n.direction==="right"&&"left-full ml-3 flex-row items-center"])},[(g(!0),v(re,null,ve(n.actions,(d,f)=>(g(),v("div",{key:d.id,class:"flex items-center gap-2 group cursor-pointer",style:ke({transitionDelay:`${f*40}ms`})},[n.direction==="up"||n.direction==="down"?(g(),v("div",av,P(d.label),1)):ne("",!0),l("button",{type:"button",onClick:Wt(m=>i(d),["stop"]),class:T(["flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer",d.color||"bg-blue-600 hover:bg-blue-500 shadow-blue-500/25"]),title:d.label},[(g(),de(Ze(d.icon),{class:"h-4 w-4"}))],10,lv)],4))),128))],2)):ne("",!0)]),_:1}),l("button",{type:"button",onClick:Wt(a,["stop"]),class:T(["relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-blue-500 hover:scale-105 active:scale-90 cursor-pointer outline-none focus:outline-none ring-0",o.value&&"!bg-zinc-900 dark:!bg-zinc-700 shadow-zinc-900/40"]),title:"操作菜单"},[w(A(pp),{class:T(["h-5 w-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",o.value&&"rotate-135"])},null,8,["class"])],2)],2))}}),dv=He(cv,[["__scopeId","data-v-9096a8eb"]]),uv={class:"flex items-center gap-1 rounded-xl bg-zinc-50 p-1 border border-zinc-200/80 dark:bg-zinc-900/60 dark:border-zinc-800/80"},pv=["onMouseenter"],fv={class:"space-y-1"},mv=["onClick"],bv={key:0,class:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 transition-transform group-hover:scale-105"},gv={class:"flex-1 overflow-hidden"},hv={class:"flex items-center gap-1.5"},xv={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"},vv={key:0,class:"rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300"},yv={class:"mt-0.5 text-[11px] text-zinc-400 line-clamp-1"},wv=ce({__name:"NavbarHover",props:{items:{},class:{}},emits:["select"],setup(e,{emit:t}){const n=e,r=t,o=D(null),s=D(null),a=D([]),i=D({left:0,opacity:0,arrowLeft:0});let c=null;function p(z){const y=a.value[z],S=s.value;if(!y||!S)return;const R=S.getBoundingClientRect(),x=y.getBoundingClientRect(),_=x.left+x.width/2-R.left,C=320;i.value={left:Math.max(_-C/2,0),arrowLeft:_,opacity:1}}function u(z,y){c&&(clearTimeout(c),c=null),o.value=z.id,p(y)}function d(){c=setTimeout(()=>{o.value=null,i.value.opacity=0},180)}function f(){c&&(clearTimeout(c),c=null)}function m(z){r("select",z),o.value=null,i.value.opacity=0}return We(()=>{window.addEventListener("resize",()=>{if(o.value){const z=n.items.findIndex(y=>y.id===o.value);z!==-1&&p(z)}})}),Qe(()=>{c&&clearTimeout(c)}),(z,y)=>(g(),v("div",{ref_key:"containerRef",ref:s,onMouseleave:d,class:T(A(be)("relative inline-flex items-center select-none",n.class))},[l("nav",uv,[(g(!0),v(re,null,ve(n.items,(S,R)=>(g(),v("button",{key:S.id,ref_for:!0,ref:x=>a.value[R]=x,type:"button",onMouseenter:x=>u(S,R),class:T(["flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer outline-none focus:outline-none",o.value===S.id?"bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},[l("span",null,P(S.label),1),w(A(Ln),{class:T(["h-3.5 w-3.5 text-zinc-400 transition-transform duration-200",o.value===S.id&&"rotate-180 text-blue-500"])},null,8,["class"])],42,pv))),128))]),w(zt,{name:"nav-morph"},{default:Y(()=>{var S;return[o.value?(g(),v("div",{key:0,onMouseenter:f,onMouseleave:d,class:"aura-popover popover-shadow absolute top-full mt-2 w-80 rounded-2xl border border-zinc-200/80 bg-white/95 p-3 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",style:ke({left:`${i.value.left}px`})},[l("div",{class:"absolute -top-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-zinc-200/80 bg-white dark:border-zinc-800/90 dark:bg-zinc-900 transition-all duration-200",style:ke({left:`${i.value.arrowLeft-i.value.left}px`})},null,4),l("div",fv,[(g(!0),v(re,null,ve(((S=n.items.find(R=>R.id===o.value))==null?void 0:S.children)||[],R=>(g(),v("div",{key:R.title,onClick:x=>m(R),class:"group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer"},[R.icon?(g(),v("div",bv,[(g(),de(Ze(R.icon),{class:"h-4 w-4"}))])):ne("",!0),l("div",gv,[l("div",hv,[l("span",xv,P(R.title),1),R.badge?(g(),v("span",vv,P(R.badge),1)):ne("",!0),w(A(er),{class:"ml-auto h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-blue-500"})]),l("p",yv,P(R.desc),1)])],8,mv))),128))])],36)):ne("",!0)]}),_:1})],34))}}),kv=He(wv,[["__scopeId","data-v-36b3159c"]]),zv={class:"inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-white p-1 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900"},_v=["disabled"],Cv={class:"flex items-center gap-1"},Sv={key:0,class:"flex h-8 w-6 items-center justify-center font-mono text-xs text-zinc-400"},Av=["onClick"],Iv=["disabled"],Mv={key:0,class:"flex w-full max-w-xs items-center gap-2.5 rounded-xl border border-zinc-200/60 bg-zinc-50/60 px-3 py-1.5 dark:border-zinc-800/60 dark:bg-zinc-950/40"},Rv=["max","value"],Tv={class:"font-mono text-[10px] text-zinc-400 shrink-0"},$v={class:"rounded bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 shrink-0"},Pv=ce({__name:"PaginationSlider",props:{modelValue:{default:1},totalPages:{default:10},showSlider:{type:Boolean,default:!0},siblingCount:{default:1},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t;function o(i){const c=Math.max(1,Math.min(n.totalPages,i));c!==n.modelValue&&(r("update:modelValue",c),r("change",c))}const s=pe(()=>{const i=n.modelValue,c=n.totalPages,p=n.siblingCount,u=[],d=Math.max(i-p,1),f=Math.min(i+p,c),m=d>2,z=f<c-1;if(!m&&z){const y=3+2*p;for(let S=1;S<=Math.min(y,c);S++)u.push(S);c>y&&(u.push("..."),u.push(c))}else if(m&&!z){const y=3+2*p;u.push(1),u.push("...");for(let S=Math.max(c-y+1,1);S<=c;S++)u.push(S)}else if(m&&z){u.push(1),u.push("...");for(let y=d;y<=f;y++)u.push(y);u.push("..."),u.push(c)}else for(let y=1;y<=c;y++)u.push(y);return u});function a(i){const c=parseInt(i.target.value,10);isNaN(c)||o(c)}return(i,c)=>(g(),v("div",{class:T(A(be)("flex flex-col items-center gap-3 select-none",n.class))},[l("div",zv,[l("button",{type:"button",disabled:n.modelValue<=1,onClick:c[0]||(c[0]=p=>o(n.modelValue-1)),class:"flex h-8 w-8 items-center justify-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all active:scale-90 cursor-pointer",title:"上一页"},[w(A(rp),{class:"h-4 w-4"})],8,_v),l("div",Cv,[(g(!0),v(re,null,ve(s.value,(p,u)=>(g(),v(re,{key:u},[p==="..."?(g(),v("span",Sv," ··· ")):(g(),v("button",{key:1,type:"button",onClick:d=>o(p),class:T(["flex h-8 min-w-[32px] items-center justify-center rounded-xl px-2 font-mono text-xs font-semibold transition-all duration-150 active:scale-95 cursor-pointer",n.modelValue===p?"bg-blue-600 text-white shadow-xs dark:bg-blue-600":"text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"])},P(p),11,Av))],64))),128))]),l("button",{type:"button",disabled:n.modelValue>=n.totalPages,onClick:c[1]||(c[1]=p=>o(n.modelValue+1)),class:"flex h-8 w-8 items-center justify-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all active:scale-90 cursor-pointer",title:"下一页"},[w(A(Wn),{class:"h-4 w-4"})],8,Iv)]),n.showSlider&&n.totalPages>3?(g(),v("div",Mv,[w(A(hp),{class:"h-3 w-3 text-zinc-400 shrink-0"}),c[2]||(c[2]=l("span",{class:"font-mono text-[10px] text-zinc-400 shrink-0"},"P1",-1)),l("input",{type:"range",min:1,max:n.totalPages,value:n.modelValue,onInput:a,class:"h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-blue-600 dark:bg-zinc-800"},null,40,Rv),l("span",Tv,"P"+P(n.totalPages),1),l("span",$v,P(n.modelValue)+"/"+P(n.totalPages),1)])):ne("",!0)],2))}}),Ev=["title"],Fv=["width","height"],Lv=["cx","cy","r","stroke-width"],Vv=["cx","cy","r","stroke-width","stroke-dasharray","stroke-dashoffset"],Ov={class:"relative z-10 flex flex-col items-center justify-center text-zinc-700 dark:text-zinc-200 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"},Dv={class:"font-mono text-[9px] font-extrabold leading-none mt-0.5"},No=ce({__name:"CircularProgressNav",props:{progress:{},size:{default:56},strokeWidth:{default:4},icon:{},tooltip:{},class:{}},emits:["click"],setup(e,{emit:t}){const n=e,r=t,o=pe(()=>n.size/2),s=pe(()=>o.value-n.strokeWidth),a=pe(()=>2*Math.PI*s.value),i=pe(()=>{const p=Math.min(Math.max(n.progress,0),100);return a.value-p/100*a.value});function c(){r("click")}return(p,u)=>(g(),v("button",{type:"button",onClick:c,title:n.tooltip||`阅读/滚动进度: ${Math.round(n.progress)}%`,class:T(A(be)("group relative inline-flex items-center justify-center rounded-full bg-white/90 p-1 shadow-md shadow-black/5 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 dark:bg-zinc-900/90 dark:shadow-black/20 cursor-pointer outline-none focus:outline-none ring-0",n.class)),style:ke({width:`${n.size}px`,height:`${n.size}px`})},[(g(),v("svg",{width:n.size,height:n.size,class:"absolute inset-0 -rotate-90 pointer-events-none"},[l("circle",{cx:o.value,cy:o.value,r:s.value,fill:"transparent",stroke:"currentColor","stroke-width":n.strokeWidth,class:"text-zinc-200/80 dark:text-zinc-800"},null,8,Lv),l("circle",{cx:o.value,cy:o.value,r:s.value,fill:"transparent",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-dasharray":a.value,"stroke-dashoffset":i.value,class:"text-blue-600 dark:text-blue-500 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"},null,8,Vv)],8,Fv)),l("div",Ov,[(g(),de(Ze(n.icon||A(Tl)),{class:"h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"})),l("span",Dv,P(Math.round(n.progress))+"% ",1)])],14,Ev))}}),jv={class:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"},Bv={class:"flex flex-col md:flex-row gap-8"},Nv={class:"w-full md:w-64 shrink-0"},Hv={class:"sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-xs backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70"},Uv={class:"mb-3 px-2 flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider"},Gv={class:"rounded bg-blue-100 dark:bg-blue-950/80 px-1.5 py-0.2 text-[10px] text-blue-600 dark:text-blue-400 font-bold"},qv={class:"space-y-4"},Wv={class:"flex items-center justify-between px-2 py-1 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"},Kv={class:"flex items-center gap-1.5"},Xv={class:"text-zinc-800 dark:text-zinc-200 font-bold"},Yv={class:"rounded bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.2 text-[9px] font-mono text-zinc-500 font-bold"},Zv={class:"space-y-0.5"},Jv={class:"truncate"},Qv={class:"mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 px-2"},e1={class:"flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100"},t1={class:"min-w-0 flex-1"},n1={class:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white mb-3 shadow-md shadow-blue-500/20"},r1={key:1,class:"w-full max-w-2xl"},o1={class:"flex h-full flex-col items-center justify-center p-6 text-center"},s1={key:5,class:"flex flex-col items-center gap-6 py-8"},i1={class:"text-center"},a1={class:"text-center mt-2"},l1={key:6,class:"flex flex-wrap items-center justify-center gap-4 py-8"},c1={class:"relative z-10 flex items-center justify-between"},d1={class:"relative z-10 flex flex-col items-center gap-3"},u1={class:"flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30"},p1={key:10,class:"grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-3xl py-6"},f1={class:"inline-flex items-baseline justify-center text-sky-500 dark:text-sky-400"},m1={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},b1={class:"inline-flex items-baseline justify-center text-indigo-500 dark:text-indigo-400"},g1={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},h1={class:"inline-flex items-baseline justify-center text-emerald-500 dark:text-emerald-400"},x1={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},v1={key:12,class:"w-full"},y1={class:"relative z-10 text-center"},w1={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400 mb-3"},k1={class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/30 text-white"},z1={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-sky-500"},_1={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-emerald-500"},C1={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-indigo-500"},S1={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-amber-500"},A1={class:"w-full max-w-xl h-72"},I1={class:"flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white/80 p-1 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 shadow-xs"},M1=["onClick"],R1={class:"w-full max-w-xl"},T1={class:"w-full max-w-xl"},$1={class:"w-full max-w-xl"},P1={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-4 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},E1={class:"mt-1 text-sm font-bold text-blue-600 dark:text-blue-400 font-mono"},F1={class:"flex flex-wrap items-center justify-center gap-4"},L1={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},V1={key:0,class:"text-xs text-zinc-400 italic"},O1={key:1,class:"space-y-1"},D1={class:"flex flex-wrap items-center justify-center gap-4"},j1={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},B1={key:0,class:"text-xs text-zinc-400 italic"},N1={key:1,class:"space-y-1"},H1={class:"flex flex-wrap items-center justify-center gap-8"},U1={class:"flex flex-col items-center gap-2"},G1={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},q1={class:"text-xs font-mono text-zinc-500 font-bold"},W1={class:"flex flex-col items-center gap-2"},K1={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},X1={class:"text-xs font-mono text-zinc-500 font-bold"},Y1={class:"flex flex-col items-center gap-2"},Z1={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},J1={class:"text-xs font-mono text-zinc-500 font-bold"},Q1={class:"flex flex-wrap items-center justify-center gap-3"},ey={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2.5 text-xs font-mono text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},ty={class:"font-bold text-blue-600 dark:text-blue-400"},ny={class:"flex flex-wrap items-center justify-center gap-6"},ry={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},oy={class:"text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold"},sy={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},iy={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},ay={class:"flex flex-wrap items-center justify-center gap-4"},ly={class:"flex items-center justify-center p-4"},cy={class:"w-full max-w-sm"},dy={class:"w-full max-w-md"},uy={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},py={class:"font-bold text-blue-600 dark:text-blue-400"},fy={class:"w-full max-w-sm"},my={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},by={class:"font-bold text-blue-600 dark:text-blue-400"},gy={class:"font-bold text-zinc-900 dark:text-white"},hy={class:"w-full max-w-md"},xy={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},vy={class:"font-bold text-blue-600 dark:text-blue-400"},yy={class:"w-full max-w-lg"},wy={class:"flex flex-col items-center gap-4"},ky={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},zy={class:"font-bold text-blue-600 dark:text-blue-400"},_y={class:"w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Cy={class:"w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Sy={class:"text-center"},Ay={class:"mt-2 text-xs font-mono text-blue-600 dark:text-blue-400"},Iy={class:"absolute bottom-8 right-10 z-20"},My={class:"w-full flex justify-center"},Ry={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Ty={class:"font-bold text-blue-600 dark:text-blue-400"},$y={class:"w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-center gap-4"},Py={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Ey={class:"font-bold text-blue-600 dark:text-blue-400"},Fy={class:"flex items-center gap-8"},Ly={class:"flex items-center gap-3"},Vy={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Oy={class:"font-bold text-blue-600 dark:text-blue-400"},Dy=ce({__name:"DocsView",setup(e){const t=D(null),n=D(null),r=D(null),o=D(null),s=X0(),a=pe(()=>s.params.id||"border-beam"),i=pe(()=>rn.find(H=>H.id===a.value)||rn[0]);function c(H){switch(H){case"forms-inputs":return xp;case"tactile-actions":return Rn;case"ai-native":return tr;case"interactive-nav":return rs;case"space-3d":return rr;case"borders-cards":return nn;case"kinetic-typography":return Pe;default:return Pe}}function p(H){return rn.filter(h=>h.suiteId===H)}const u=["OpenAI","Anthropic","Google","NVIDIA","DeepSeek","Vercel"],d=[{id:"home",label:"首页概览",icon:Fl},{id:"explore",label:"模型广场",icon:rs},{id:"agent",label:"AI 智能体",icon:Pe},{id:"files",label:"知识库",icon:ip},{id:"notice",label:"消息通知",icon:tp},{id:"settings",label:"偏好设置",icon:gp}],f=D("thinking"),m={thinking:"正在多模态解构视觉空间坐标与贝塞尔插值参数...",running:"并行编译并打包 Production Motion Primitives...",tool_call:"调用 Playwright 真实无头浏览器验证 60fps 动效性能...",success:"全套 28 项动效原子组件按 6 大主题套件落地完成！",error:"检测到底层渲染管道异常，正在启动自愈补偿重试..."},z=D(""),y=D(!1),S=D("deepseek-r1");function R(H){y.value=!0,setTimeout(()=>{y.value=!1,z.value=""},2200)}const x=D("preview"),_=[{id:"preview",label:"实时预览",icon:Pe},{id:"code",label:"组件源码",icon:nr,badge:"SFC"},{id:"api",label:"API 文档",icon:Kn},{id:"suites",label:"主题矩阵",icon:nn,badge:"6 大套件"}],C=D([]);function F(){C.value.unshift(`[${new Date().toLocaleTimeString()}] 触发长按蓄力物理确认：危险操作已执行！`),C.value.length>3&&C.value.pop()}const V=D([]);function U(){V.value.unshift(`[${new Date().toLocaleTimeString()}] 就地确认执行成功：数据库缓存集群已清空`),V.value.length>3&&V.value.pop()}const j=D(!1),B=D(!1),ee=D(!1),ae=D(!0),q=D(!1),ge=D(42),Me=D("尚未触发操作");function Ve(){Me.value=`[${new Date().toLocaleTimeString()}] 执行主操作：生产环境立即发布完成！`}function xe(H){Me.value=`[${new Date().toLocaleTimeString()}] 执行伴随动作：${H.label}`}const fe=D(480),se=D(16),Te=D(85),Z=D("Aura$2026"),je=D(6800),we=D("CNY"),rt=D("13800138000"),Oe=D("CN"),ze=D(["Vue 3.5","TailwindCSS","Motion UI","Antigravity"]),ye=D("嗨 @左岚 (Zuǒ Lán) ，请审查关于全套动效原子组件库的重构方案！"),L=D("preview"),X=[{id:"preview",label:"实时渲染",icon:Pe},{id:"code",label:"SFC 源码",icon:nr,badge:"Vue"},{id:"docs",label:"API 文档",icon:Kn},{id:"disabled",label:"锁定",disabled:!0}],G=[{label:"智能云控制台"},{label:"亚太东北节点 (东京)"},{label:"Kubernetes 集群"},{label:"核心 Pod 拓扑"},{label:"Aura UI 动效服务"}],te=D("未触发操作"),b=[{id:"bot",label:"呼起智能体 Agent",icon:tr,color:"bg-purple-600",onClick:()=>{te.value="已呼起 AI 智能体"}},{id:"sparkles",label:"生成动效代码",icon:Pe,color:"bg-blue-600",onClick:()=>{te.value="已生成动效代码"}},{id:"rocket",label:"全量编译部署",icon:ss,color:"bg-emerald-600",onClick:()=>{te.value="已执行全量编译部署"}}],k=[{id:"solutions",label:"解决方案",children:[{title:"AI Agent 交互引擎",desc:"模拟 Token 打字机与 R1 思考链路手风琴",icon:tr,badge:"爆款"},{title:"全景 3D 纵深矩阵",desc:"同心轨道公转、极光天灯与赛博复古网格",icon:rr},{title:"流光卡片便当盒",desc:"无缝跑马流光边框与聚光灯 Bento 卡片",icon:nn}]},{id:"developers",label:"开发者生态",children:[{title:"Zero-Config 单文件",desc:"代码即用，单文件内聚无需配置 tailwind",icon:nr},{title:"TypeScript 完备",desc:"全量 Props、事件与插槽类型安全",icon:Kn}]}],I=D("未选择"),$=D(3),E=D(72);function N(){E.value=(E.value+15)%105}return(H,h)=>{const W=vr("router-link");return g(),v("div",jv,[l("div",Bv,[l("aside",Nv,[l("div",Hv,[l("div",Uv,[h[26]||(h[26]=l("span",null,"主题套件矩阵",-1)),l("span",Gv,P(A(is).length)+" 大套件 · "+P(A(rn).length)+" 组件 ",1)]),l("div",qv,[(g(!0),v(re,null,ve(A(is),M=>(g(),v("div",{key:M.id,class:"space-y-1"},[l("div",Wv,[l("div",Kv,[(g(),de(Ze(c(M.id)),{class:"h-3.5 w-3.5 text-blue-500"})),l("span",Xv,P(M.name),1)]),l("span",Yv,P(p(M.id).length),1)]),l("nav",Zv,[(g(!0),v(re,null,ve(p(M.id),O=>(g(),de(W,{key:O.id,to:`/docs/${O.id}`,class:T(["flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium transition-colors",a.value===O.id?"bg-blue-600 text-white font-semibold shadow-xs":"text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"])},{default:Y(()=>[l("span",Jv,P(O.name),1),l("span",{class:T(["text-[9px] rounded px-1.5 py-0.2 shrink-0 ml-1",a.value===O.id?"bg-blue-700/80 text-blue-100":"bg-zinc-100 dark:bg-zinc-900 text-zinc-400"])},P(O.category),3)]),_:2},1032,["to","class"]))),128))])]))),128))]),l("div",Qv,[l("div",e1,[w(A(Kn),{class:"h-3.5 w-3.5 text-blue-500"}),h[27]||(h[27]=l("span",null,"基础依赖安装",-1))]),h[28]||(h[28]=l("p",{class:"mt-1 text-[11px] text-zinc-400"},"组件依赖轻量样式与工具库：",-1)),h[29]||(h[29]=l("div",{class:"mt-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-300 break-all select-all"}," npm i @vueuse/core clsx tailwind-merge ",-1))])])]),l("main",t1,[(g(),de(Zb,{key:i.value.id,title:i.value.title,description:i.value.description,"component-code":i.value.componentCode,"usage-code":i.value.usageCode,"component-filename":i.value.componentFilename,"props-list":i.value.propsList},{default:Y(({isDark:M})=>[i.value.id==="border-beam"?(g(),v("div",{key:0,class:T(["relative flex h-64 w-80 flex-col items-center justify-center rounded-2xl border p-6 shadow-md transition-colors duration-200",M?"border-zinc-800 bg-zinc-900 text-zinc-100 shadow-black/40":"border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/50"])},[l("div",n1,[w(A(Pe),{class:"h-6 w-6"})]),l("h4",{class:T(["text-lg font-bold",M?"text-white":"text-zinc-900"])}," Border Beam Demo ",2),l("p",{class:T(["mt-1 text-center text-xs",M?"text-zinc-400":"text-zinc-500"])}," 流光平滑环绕圆角容器边缘 ",2),w(ps,{size:180,duration:8,"color-from":"#38bdf8","color-to":"#a855f7"})],2)):i.value.id==="bento-grid"?(g(),v("div",r1,[w(fc,{class:"auto-rows-[16rem]"},{default:Y(()=>[w(st,{name:"AI 向量引擎",description:"毫秒级生成多模态视觉理解",cta:"了解详情",href:"#",class:T(M?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900")},{icon:Y(()=>[w(A(Ri),{class:"h-5 w-5 text-blue-500"})]),_:1},8,["class"]),w(st,{name:"全球边缘节点加速",description:"降低网络抖动，就近命中就近计算",class:T(["md:col-span-2",M?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900"]),cta:"查看分布",href:"#"},{icon:Y(()=>[w(A(Rn),{class:"h-5 w-5 text-amber-500"})]),_:1},8,["class"])]),_:2},1024)])):i.value.id==="interactive-particles"?(g(),v("div",{key:2,class:T(["relative h-[360px] w-full rounded-2xl border overflow-hidden transition-colors duration-200",M?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[w(bc,{quantity:60,"mouse-radius":120,"connect-lines":!0,color:M?"255, 255, 255":"59, 130, 246"},{default:Y(()=>[l("div",o1,[l("h3",{class:T(["text-2xl font-bold tracking-tight",M?"text-white":"text-zinc-900"])}," 移动光标体验引力感应 ",2),l("p",{class:T(["mt-2 text-xs",M?"text-zinc-400":"text-zinc-500"])}," Canvas 2D 60fps 满帧运行，动态引力排斥与光效连线 ",2)])]),_:2},1032,["color"])],2)):i.value.id==="retro-grid"?(g(),v("div",{key:3,class:T(["relative flex h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",M?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[l("span",{class:T(["z-10 text-4xl font-extrabold tracking-tighter",M?"text-white":"text-zinc-900"])}," Retro Synthwave Grid ",2),w(fs,{angle:65,"dark-line-color":"#334155","light-line-color":"#cbd5e1"})],2)):i.value.id==="dot-pattern"?(g(),v("div",{key:4,class:T(["relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border p-8 transition-colors duration-200",M?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[l("p",{class:T(["z-10 text-xl font-bold",M?"text-white":"text-zinc-900"])}," SVG 矢量波点底纹 (含发光聚光灯) ",2),w(mc,{width:18,height:18,cr:1.2,glow:!0})],2)):i.value.id==="shiny-text"?(g(),v("div",s1,[l("div",{class:T(["rounded-full border px-5 py-2 text-xs font-medium shadow-sm transition-colors",M?"border-zinc-800 bg-zinc-900/90 text-zinc-300":"border-zinc-200 bg-zinc-100 text-zinc-700"])},[h[30]||(h[30]=Re(" ✨ ",-1)),w(ir,{text:"Aura UI v1.0 全新微光发布",duration:2.5})],2),l("div",i1,[w(ir,{text:"Next-Gen AI Intelligence",class:"text-4xl sm:text-5xl font-black tracking-tight",duration:2.5}),l("p",{class:T(["mt-2 text-xs sm:text-sm",M?"text-zinc-500":"text-zinc-400"])}," 持续流淌的宽幅金属微光，肉眼清晰可观赏，绝无突兀停滞 ",2)]),l("div",a1,[w(ir,{text:"Cyberpunk Motion Primitives",variant:"cyber",class:"text-3xl sm:text-4xl font-extrabold tracking-tight",duration:3}),l("p",{class:T(["mt-1 text-xs",M?"text-zinc-500":"text-zinc-400"])}," 赛博霓虹蓝紫粒子流光，高频荡漾 ",2)])])):i.value.id==="shimmer-button"?(g(),v("div",l1,[w(sr,{"shimmer-color":"#38bdf8"},{default:Y(()=>[h[31]||(h[31]=l("span",null,"立即获取代码",-1)),w(A(er),{class:"h-4 w-4"})]),_:1}),w(sr,{"shimmer-color":"#ec4899","shimmer-duration":"3.5s"},{default:Y(()=>[...h[32]||(h[32]=[l("span",null,"Pink Shimmer",-1)])]),_:1})])):i.value.id==="marquee"?(g(),v("div",{key:7,class:T(["relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border py-6 transition-colors duration-200",M?"border-zinc-800 bg-black/60":"border-zinc-200 bg-zinc-50/80"])},[w(Fr,{duration:20,"pause-on-hover":!0},{default:Y(()=>[(g(),v(re,null,ve(u,O=>l("div",{key:O,class:T(["flex h-12 items-center justify-center rounded-xl border px-6 font-bold text-xs shadow-xs transition-colors duration-200",M?"border-zinc-800 bg-zinc-900 text-zinc-200":"border-zinc-200 bg-white text-zinc-800"])},P(O),3)),64))]),_:2},1024),l("div",{class:T(["pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r",M?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2),l("div",{class:T(["pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l",M?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2)],2)):i.value.id==="meteors"?(g(),v("div",{key:8,class:T(["relative flex h-80 w-full max-w-lg flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-2xl transition-colors duration-200",M?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-slate-900 text-white"])},[w(gc,{number:30}),l("div",c1,[h[33]||(h[33]=l("span",{class:"rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20"}," Meteor Shower ",-1)),w(A(Pe),{class:"h-5 w-5 text-sky-400"})]),h[34]||(h[34]=l("div",{class:"relative z-10 space-y-2"},[l("h3",{class:"text-3xl font-black tracking-tight text-white"}," 赛博深空流星雨 "),l("p",{class:"text-xs text-zinc-400 leading-relaxed"}," 流星带有 50px 渐变光尾与随机延迟，全硬件加速流畅穿梭，卡片与 Hero 背景的氛围杀器。 ")],-1))],2)):i.value.id==="ripple"?(g(),v("div",{key:9,class:T(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",M?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[w(hc,{"main-circle-size":160,"num-circles":7}),l("div",d1,[l("div",u1,[w(A(Xr),{class:"h-7 w-7"})]),h[35]||(h[35]=l("div",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-mono text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300"}," AI 智能语音拾音中... ",-1))])],2)):i.value.id==="number-ticker"?(g(),v("div",p1,[l("div",{class:T(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",M?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[l("div",f1,[l("span",m1,[w(Lr,{value:99.99,"decimal-places":2})]),h[36]||(h[36]=l("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"%",-1))]),h[37]||(h[37]=l("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"SLA 生产高可用性",-1))],2),l("div",{class:T(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",M?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[l("div",b1,[l("span",g1,[w(Lr,{value:1e7})]),h[38]||(h[38]=l("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"+",-1))]),h[39]||(h[39]=l("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"每日处理 Token 数量",-1))],2),l("div",{class:T(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",M?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[l("div",h1,[l("span",x1,[w(Lr,{value:12})]),h[40]||(h[40]=l("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"ms",-1))]),h[41]||(h[41]=l("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"端到端流式推理延迟",-1))],2)])):i.value.id==="animated-beam"?(g(),v("div",{key:11,class:T(["relative flex h-72 w-full max-w-xl items-center justify-between px-12 rounded-2xl border transition-colors duration-200",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"]),ref_key:"beamContainerRef",ref:t},[l("div",{ref_key:"beamUserRef",ref:n,class:T(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",M?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[w(A(Dl),{class:"h-6 w-6 text-blue-500"})],2),l("div",{ref_key:"beamAiRef",ref:r,class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/40"},[w(A(Pe),{class:"h-8 w-8"})],512),l("div",{ref_key:"beamDbRef",ref:o,class:T(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",M?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[w(A(os),{class:"h-6 w-6 text-indigo-500"})],2),w(Zr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.4},null,8,["container-ref","from-ref","to-ref"]),w(Zr,{"container-ref":t.value,"from-ref":r.value,"to-ref":o.value,duration:2.4,delay:.6},null,8,["container-ref","from-ref","to-ref"])],2)):i.value.id==="lamp-effect"?(g(),v("div",v1,[w(xc,{class:"min-h-[420px]"},{default:Y(()=>[...h[42]||(h[42]=[l("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-5xl font-black tracking-tight text-transparent"}," Next-Gen AI Platform ",-1),l("p",{class:"mt-3 max-w-md text-xs sm:text-sm text-slate-400"}," 双向极光天灯破晓而下，为旗舰级 AI 与 SaaS 官网赋予大模型发布会视觉。 ",-1)])]),_:1})])):i.value.id==="flickering-grid"?(g(),v("div",{key:13,class:T(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border p-6 transition-colors duration-200",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[w(vc,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),l("div",y1,[l("div",w1,[w(A(Rl),{class:"h-3.5 w-3.5"}),h[43]||(h[43]=l("span",null,"Canvas 2D 智能矩阵",-1))]),l("h3",{class:T(["text-3xl font-black tracking-tight",M?"text-white":"text-zinc-900"])}," 呼吸噪波微光网格 ",2),l("p",{class:T(["mt-2 text-xs font-mono",M?"text-zinc-400":"text-zinc-500"])}," 微型粒子矩阵异步平滑呼吸闪烁，零 CPU 占用，极客感拉满 ",2)])],2)):i.value.id==="dock"?(g(),v("div",{key:14,class:T(["relative flex h-80 w-full items-end justify-center rounded-2xl border p-8 transition-colors duration-200",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[h[44]||(h[44]=l("div",{class:"absolute top-8 text-center"},[l("span",{class:"text-xs font-mono text-zinc-400"},"将鼠标在下方图标栏滑动，体验余弦高斯物理平滑放大与跟随 Tooltip")],-1)),w(tg,{items:d,"icon-size":44,"icon-magnification":68,"icon-distance":130})],2)):i.value.id==="orbit-logos"?(g(),v("div",{key:15,class:T(["relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",k1,[w(A(Pe),{class:"h-8 w-8"})]),w(Rr,{radius:75,duration:16},{default:Y(()=>[l("div",z1,[w(A(Ri),{class:"h-4.5 w-4.5"})])]),_:1}),w(Rr,{radius:75,duration:16,delay:8},{default:Y(()=>[l("div",_1,[w(A(Rn),{class:"h-4.5 w-4.5"})])]),_:1}),w(Rr,{radius:135,duration:24,reverse:!0},{default:Y(()=>[l("div",C1,[w(A(rr),{class:"h-5 w-5"})])]),_:1}),w(Rr,{radius:135,duration:24,delay:12,reverse:!0},{default:Y(()=>[l("div",S1,[w(A(os),{class:"h-5 w-5"})])]),_:1})],2)):i.value.id==="image-compare"?(g(),v("div",{key:16,class:T(["flex flex-col items-center justify-center w-full p-4 rounded-2xl border transition-colors duration-200",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",A1,[w(pg,{"before-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=70&sat=-100","after-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=90","before-label":"原始黑白 (Raw)","after-label":"AI 智能全彩修复 (4K HDR)","initial-position":50,class:"h-full w-full shadow-2xl"})]),h[45]||(h[45]=l("p",{class:"mt-3 text-xs font-mono text-zinc-400"}," 按住中央手柄左右拖拽，体验基于 clip-path 视口裁切的双图前后对比 ",-1))],2)):i.value.id==="agent-status"?(g(),v("div",{key:17,class:T(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",I1,[(g(),v(re,null,ve(["thinking","running","tool_call","success","error"],O=>l("button",{key:O,onClick:K=>f.value=O,class:T(["rounded-lg px-3 py-1.5 text-xs font-semibold transition-all capitalize",f.value===O?"bg-blue-600 text-white shadow-xs":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},P(O),11,M1)),64))]),w(Rg,{status:f.value,"agent-name":"DeepSeek R1 / Aura Reasoning","current-task":m[f.value]},null,8,["status","current-task"]),h[46]||(h[46]=l("p",{class:"text-xs font-mono text-zinc-400"}," 点击上方状态快速体验脉冲光环与徽标切换；点击卡片任意位置展开执行轨迹清单 ",-1))],2)):i.value.id==="typewriter-terminal"?(g(),v("div",{key:18,class:T(["flex flex-col items-center justify-center w-full p-6 rounded-2xl border transition-colors duration-200",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",R1,[w(Gg,{title:"zsh - aura-orchestrator:~ (80x24)","typing-speed":32,loop:!0})])],2)):i.value.id==="prompt-input"?(g(),v("div",{key:19,class:T(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",T1,[w(sh,{modelValue:z.value,"onUpdate:modelValue":h[0]||(h[0]=O=>z.value=O),loading:y.value,"selected-model":S.value,"onUpdate:selectedModel":h[1]||(h[1]=O=>S.value=O),placeholder:"向 Aura AI 提问、生成高阶动效代码，或输入 / 触发 Agent...",onSubmit:R,onStop:h[2]||(h[2]=O=>y.value=!1)},null,8,["modelValue","loading","selected-model"])]),h[47]||(h[47]=l("p",{class:"text-xs font-mono text-zinc-400"}," 点击输入框体验聚焦顶部流光与高亮光晕，支持 Enter 发送、模拟 2.2s 思考生成态 ",-1))],2)):i.value.id==="thought-accordion"?(g(),v("div",{key:20,class:T(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",$1,[w(bh,{duration:"思考用时 8.2 秒",status:"complete","default-open":!0})]),h[48]||(h[48]=l("p",{class:"text-xs font-mono text-zinc-400"}," 对标 DeepSeek R1 / o1 思考链折叠机制，点击标题栏手风琴折叠收起，支持一键复制推演链路 ",-1))],2)):i.value.id==="fluid-tabs"?(g(),v("div",{key:21,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[w(hh,{modelValue:x.value,"onUpdate:modelValue":h[3]||(h[3]=O=>x.value=O),tabs:_},null,8,["modelValue"]),l("div",P1,[h[49]||(h[49]=l("div",{class:"text-xs font-mono text-zinc-500 dark:text-zinc-400"},"当前激活流体 Tab 项：",-1)),l("div",E1,P(x.value),1)]),h[50]||(h[50]=l("p",{class:"text-xs font-mono text-zinc-400"}," 鼠标在 Tab 间移动感受 Ghost 悬停幽灵胶囊；点击体验物理 Spring 平滑吸附 ",-1))],2)):i.value.id==="hold-to-confirm"?(g(),v("div",{key:22,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",F1,[w(Oo,{variant:"danger",label:"长按以销毁生产集群",holdingLabel:"危险！保持按住不放...",confirmedLabel:"集群销毁指令已执行！",duration:1200,onConfirm:F}),w(Oo,{variant:"warning",label:"长按重置 API 密钥",holdingLabel:"按住 1 秒重置...",confirmedLabel:"密钥已重置完成！",duration:1e3,onConfirm:F}),w(Oo,{variant:"primary",label:"长按以极速同步",holdingLabel:"保持以连接网关...",confirmedLabel:"多云同步完成！",duration:800,onConfirm:F})]),l("div",L1,[h[51]||(h[51]=l("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 操作监听回执 ",-1)),C.value.length===0?(g(),v("div",V1," 按住上方任一按钮体验蓄力进度条，松手即取消，蓄满 100% 触发回执 ")):(g(),v("div",O1,[(g(!0),v(re,null,ve(C.value,(O,K)=>(g(),v("div",{key:K,class:"text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold"},P(O),1))),128))]))]),h[52]||(h[52]=l("p",{class:"text-xs font-mono text-zinc-400"}," 具备 requestAnimationFrame 60fps 动态插值填充、松手平滑阻尼回退与成功态自动形变复位 ",-1))],2)):i.value.id==="confirm-morph"?(g(),v("div",{key:23,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",D1,[w(Do,{label:"彻底清空 Redis 缓存","confirm-text":"确认清空","cancel-text":"取消",variant:"danger",onConfirm:U}),w(Do,{label:"回滚至昨日版本","confirm-text":"确认回滚","cancel-text":"再想想",variant:"warning",onConfirm:U}),w(Do,{label:"切换主从节点","confirm-text":"立即切换","cancel-text":"取消",variant:"primary",onConfirm:U})]),l("div",j1,[h[53]||(h[53]=l("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 就地形变二次确认回执 ",-1)),V.value.length===0?(g(),v("div",B1," 点击上方按钮原地分裂为确认和取消操作，零弹窗干扰心流 ")):(g(),v("div",N1,[(g(!0),v(re,null,ve(V.value,(O,K)=>(g(),v("div",{key:K,class:"text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold"},P(O),1))),128))]))]),h[54]||(h[54]=l("p",{class:"text-xs font-mono text-zinc-400"}," 内联原地形变布局（Inline FLIP Transition），无需全局遮罩即可实现安全防误触 ",-1))],2)):i.value.id==="icon-morph"?(g(),v("div",{key:24,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",H1,[l("div",U1,[l("div",G1,[w(jo,{modelValue:j.value,"onUpdate:modelValue":h[4]||(h[4]=O=>j.value=O),mode:"menu-close",size:28},null,8,["modelValue"])]),l("span",q1," Menu ↔ Close: "+P(j.value?"关闭":"展开"),1)]),l("div",W1,[l("div",K1,[w(jo,{modelValue:B.value,"onUpdate:modelValue":h[5]||(h[5]=O=>B.value=O),mode:"play-pause",size:28},null,8,["modelValue"])]),l("span",X1," Play ↔ Pause: "+P(B.value?"播放中":"暂停中"),1)]),l("div",Y1,[l("div",Z1,[w(jo,{modelValue:ee.value,"onUpdate:modelValue":h[6]||(h[6]=O=>ee.value=O),mode:"plus-minus",size:28},null,8,["modelValue"])]),l("span",J1," Plus ↔ Minus: "+P(ee.value?"已展开":"折叠"),1)])]),h[55]||(h[55]=l("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG 矢量几何坐标连续形变，硬件加速 60fps，零卡顿零抖动 ",-1))],2)):i.value.id==="action-button"?(g(),v("div",{key:25,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",Q1,[w(Un,{icon:A(up),active:ae.value,tooltip:"钉选在首屏导航",onClick:h[7]||(h[7]=O=>ae.value=!ae.value)},null,8,["icon","active"]),w(Un,{label:"生成动效代码",icon:A(Pe),badge:"AI",tooltip:"一键生成 Vue 动效原子代码",onClick:h[8]||(h[8]=O=>ge.value++)},null,8,["icon"]),w(Un,{icon:A(np),active:q.value,tooltip:"收藏至组件集",onClick:h[9]||(h[9]=O=>q.value=!q.value)},null,8,["icon","active"]),w(Un,{label:"大规格按钮",size:"lg",icon:A(Mi),tooltip:"上传打包产物"},null,8,["icon"]),w(Un,{label:"禁用按钮",size:"sm",disabled:!0,tooltip:"当前权限不足"})]),l("div",ey,[h[56]||(h[56]=Re(" AI 生成点击计数：",-1)),l("span",ty,P(ge.value),1),h[57]||(h[57]=Re(" 次 ",-1))]),h[58]||(h[58]=l("p",{class:"text-xs font-mono text-zinc-400"}," 配备精准物理弹簧缩放阻尼（active:scale-90）与微拟态悬停反馈 ",-1))],2)):i.value.id==="split-button"?(g(),v("div",{key:26,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",ny,[w(sa,{label:"立即发布到生产环境",icon:A(ss),variant:"primary",onPrimaryClick:Ve,onSelect:xe},null,8,["icon"]),w(sa,{label:"导出代码包",icon:A(Mi),variant:"secondary",items:[{id:"zip",label:"下载 ZIP 压缩包",description:"包含全部 SFC 组件与 CSS 变量"},{id:"git",label:"推送到 GitHub PR",description:"自动分支并创建协同审查"},{id:"npm",label:"发布至私有 NPM",description:"生成统一 Package 包"}],onPrimaryClick:Ve,onSelect:xe},null,8,["icon"])]),l("div",ry,[h[59]||(h[59]=l("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1"}," 分体按钮操作回执 ",-1)),l("div",oy,P(Me.value),1)]),h[60]||(h[60]=l("p",{class:"text-xs font-mono text-zinc-400"}," 主操作与下拉伴随操作一体化，物理发丝分割线，自适应点击区域与弹簧菜单 ",-1))],2)):i.value.id==="reactions"?(g(),v("div",{key:27,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",sy,[w(ia)]),l("div",iy,[h[61]||(h[61]=l("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3"}," 自定义反应项展示： ",-1)),w(ia,{items:[{id:"vue",emoji:"💚",count:1024,active:!0},{id:"speed",emoji:"⚡",count:512,active:!1},{id:"magic",emoji:"✨",count:888,active:!0},{id:"100",emoji:"💯",count:99,active:!1}]})]),h[62]||(h[62]=l("p",{class:"text-xs font-mono text-zinc-400"}," 点击任一表情体验 Spring 弹簧弹性放大与实时翻滚计数，支持添加自定义表情 ",-1))],2)):i.value.id==="scrub-input"?(g(),v("div",{key:28,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",ay,[w(Bo,{modelValue:fe.value,"onUpdate:modelValue":h[10]||(h[10]=O=>fe.value=O),label:"宽度 (W)",min:120,max:640,suffix:"px"},null,8,["modelValue"]),w(Bo,{modelValue:se.value,"onUpdate:modelValue":h[11]||(h[11]=O=>se.value=O),label:"圆角 (R)",min:0,max:48,suffix:"px"},null,8,["modelValue"]),w(Bo,{modelValue:Te.value,"onUpdate:modelValue":h[12]||(h[12]=O=>Te.value=O),label:"不透明度 (A)",min:10,max:100,suffix:"%"},null,8,["modelValue"])]),l("div",ly,[l("div",{class:"flex h-24 items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-mono text-xs font-bold shadow-lg transition-all duration-75",style:ke({width:`${fe.value/2}px`,borderRadius:`${se.value}px`,opacity:Te.value/100})}," 实时微调形态: "+P(Math.round(fe.value/2))+" × 96px ",5)]),h[63]||(h[63]=l("p",{class:"text-xs font-mono text-zinc-400"}," 按住 Label 左右横向拖动（按住 Shift 加速 10x，Alt 微调 0.1x），双击数值切换精准键盘输入 ",-1))],2)):i.value.id==="password-strength"?(g(),v("div",{key:29,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",cy,[w(Qh,{modelValue:Z.value,"onUpdate:modelValue":h[13]||(h[13]=O=>Z.value=O)},null,8,["modelValue"])]),h[64]||(h[64]=l("p",{class:"text-xs font-mono text-zinc-400"}," 包含大写/小写/数字/特殊符号/长度 5 维动态校验，进度条平滑渐变与明暗文无缝切换 ",-1))],2)):i.value.id==="money-input"?(g(),v("div",{key:30,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",dy,[w(lx,{modelValue:je.value,"onUpdate:modelValue":h[14]||(h[14]=O=>je.value=O),currency:we.value,"onUpdate:currency":h[15]||(h[15]=O=>we.value=O)},null,8,["modelValue","currency"])]),l("div",uy,[h[65]||(h[65]=Re(" 底层双向绑定数据：",-1)),l("span",py,P(we.value)+" "+P(je.value),1)]),h[66]||(h[66]=l("p",{class:"text-xs font-mono text-zinc-400"}," 金额过长时字号动态自适应缩放（text-4xl → text-xl），支持千分位格式化与一键药丸快捷填充 ",-1))],2)):i.value.id==="phone-input"?(g(),v("div",{key:31,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",fy,[w(wx,{modelValue:rt.value,"onUpdate:modelValue":h[16]||(h[16]=O=>rt.value=O),"country-code":Oe.value,"onUpdate:countryCode":h[17]||(h[17]=O=>Oe.value=O)},null,8,["modelValue","country-code"])]),l("div",my,[h[67]||(h[67]=Re(" 选中地区：",-1)),l("span",by,P(Oe.value),1),h[68]||(h[68]=Re(" · 输入号码：",-1)),l("span",gy,P(rt.value||"(未输入)"),1)]),h[69]||(h[69]=l("p",{class:"text-xs font-mono text-zinc-400"}," 支持中国 (### #### ####)、美国 ((###) ###-####) 等多国区号格式自适应与完成态对勾反馈 ",-1))],2)):i.value.id==="tag-input"?(g(),v("div",{key:32,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",hy,[w(Ax,{modelValue:ze.value,"onUpdate:modelValue":h[18]||(h[18]=O=>ze.value=O),"max-tags":8},null,8,["modelValue"])]),l("div",xy,[h[70]||(h[70]=Re(" 当前标签数组：",-1)),l("span",vy,P(JSON.stringify(ze.value)),1)]),h[71]||(h[71]=l("p",{class:"text-xs font-mono text-zinc-400"}," 回车/逗号自动生成标签胶囊，退格键按序反向删除，配备弹性进退场动效与最大数量上限 ",-1))],2)):i.value.id==="mention-input"?(g(),v("div",{key:33,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",yy,[w(Hx,{modelValue:ye.value,"onUpdate:modelValue":h[19]||(h[19]=O=>ye.value=O)},null,8,["modelValue"])]),h[72]||(h[72]=l("p",{class:"text-xs font-mono text-zinc-400"}," 键入 @ 呼出团队成员与 AI 智能体候选菜单，支持键盘上下光标漫游与 Tab/Enter 高亮注入 ",-1))],2)):i.value.id==="segmented-control"?(g(),v("div",{key:34,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",wy,[w(aa,{modelValue:L.value,"onUpdate:modelValue":h[20]||(h[20]=O=>L.value=O),options:X,size:"md"},null,8,["modelValue"]),w(aa,{modelValue:L.value,"onUpdate:modelValue":h[21]||(h[21]=O=>L.value=O),options:[{id:"preview",label:"天"},{id:"code",label:"周"},{id:"docs",label:"月"}],size:"sm"},null,8,["modelValue"])]),l("div",ky,[h[73]||(h[73]=Re(" 当前激活项：",-1)),l("span",zy,P(L.value),1)]),h[74]||(h[74]=l("p",{class:"text-xs font-mono text-zinc-400"}," iOS / macOS 风格物理弹簧滑块，支持左右方向键键盘导航与尺寸自适应 ",-1))],2)):i.value.id==="breadcrumb-trail"?(g(),v("div",{key:35,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",_y,[h[75]||(h[75]=l("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-4"}," 折叠模式（最大显示 3 项，中间自动收纳为浮层气泡）： ",-1)),w(la,{items:G,"max-items":3})]),l("div",Cy,[h[76]||(h[76]=l("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-4"}," 全展开模式： ",-1)),w(la,{items:G,"max-items":10})]),h[77]||(h[77]=l("p",{class:"text-xs font-mono text-zinc-400"}," 层级过深时自动将中间路径收纳为省略号，点击呼出扩散柔和阴影下拉浮层 ",-1))],2)):i.value.id==="floating-action-menu"?(g(),v("div",{key:36,class:T(["relative flex flex-col items-center justify-center w-full min-h-[380px] p-10 rounded-2xl border transition-colors duration-200 gap-6 overflow-hidden",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",Sy,[h[78]||(h[78]=l("div",{class:"text-sm font-bold text-zinc-800 dark:text-zinc-100"}," 点击右下角浮动动作药丸（FAB）体验交错弹簧飞出 ",-1)),l("div",Ay," 最新触发："+P(te.value),1)]),l("div",Iy,[w(dv,{actions:b,tooltip:"快捷动效与部署工具箱"})]),h[79]||(h[79]=l("p",{class:"text-xs font-mono text-zinc-400"}," 135° 顺滑旋转切换图标，子动作级联平滑缩放飞入，配备毛玻璃浮动标签 ",-1))],2)):i.value.id==="navbar-hover"?(g(),v("div",{key:37,class:T(["flex flex-col items-center justify-start w-full min-h-[380px] p-10 rounded-2xl border transition-colors duration-200 gap-8",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",My,[w(kv,{items:k,onSelect:h[22]||(h[22]=O=>I.value=O.title)})]),l("div",Ry,[h[80]||(h[80]=Re(" 选中的导航二级特性：",-1)),l("span",Ty,P(I.value),1)]),h[81]||(h[81]=l("p",{class:"text-xs font-mono text-zinc-400"}," 对标 Stripe / Vercel 巨型悬浮下拉菜单，顶部箭头与卡片自适应尺寸平滑跟随 ",-1))],2)):i.value.id==="pagination-slider"?(g(),v("div",{key:38,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",$y,[w(Pv,{modelValue:$.value,"onUpdate:modelValue":h[23]||(h[23]=O=>$.value=O),"total-pages":20,"show-slider":!0},null,8,["modelValue"])]),l("div",Py,[h[82]||(h[82]=Re(" 当前激活页码：第 ",-1)),l("span",Ey,P($.value),1),h[83]||(h[83]=Re(" 页 / 共 20 页 ",-1))]),h[84]||(h[84]=l("p",{class:"text-xs font-mono text-zinc-400"}," 传统分页按钮与触感快速拖动滑块合二为一，极大提升大跨度翻页效率 ",-1))],2)):i.value.id==="circular-progress-nav"?(g(),v("div",{key:39,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",M?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",Fy,[w(No,{progress:E.value,size:64,"stroke-width":5,onClick:N},null,8,["progress"]),w(No,{progress:100,size:52,"stroke-width":4,tooltip:"进度已满"}),w(No,{progress:35,size:48,"stroke-width":3.5,tooltip:"初始化 35%"})]),l("div",Ly,[l("button",{type:"button",onClick:h[24]||(h[24]=O=>E.value=Math.max(0,E.value-10)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"}," -10% "),l("div",Vy,[h[85]||(h[85]=Re(" 当前进度：",-1)),l("span",Oy,P(E.value)+"%",1)]),l("button",{type:"button",onClick:h[25]||(h[25]=O=>E.value=Math.min(100,E.value+10)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"}," +10% ")]),h[86]||(h[86]=l("p",{class:"text-xs font-mono text-zinc-400"}," SVG 矢量环形进度指示器，支持平滑 stroke-dashoffset 阻尼形变与微拟态按压 ",-1))],2)):ne("",!0)]),_:1},8,["title","description","component-code","usage-code","component-filename","props-list"]))])])])}}}),jy=K0({history:S0(),routes:[{path:"/",name:"home",component:yb},{path:"/docs/:id?",name:"docs",component:Dy},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(e,t,n){return n||(e.name==="docs"&&t.name==="docs"?!1:{top:0})}}),yc=Xu(Np);yc.use(jy);yc.mount("#app");
