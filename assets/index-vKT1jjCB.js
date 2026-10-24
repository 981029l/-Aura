(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ws(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ve={},kn=[],Lt=()=>{},va=()=>!1,ro=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),oo=e=>e.startsWith("onUpdate:"),Ye=Object.assign,zs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ec=Object.prototype.hasOwnProperty,Me=(e,t)=>Ec.call(e,t),ge=Array.isArray,sn=e=>kr(e)==="[object Map]",Nr=e=>kr(e)==="[object Set]",Ws=e=>kr(e)==="[object Date]",ve=e=>typeof e=="function",He=e=>typeof e=="string",Ct=e=>typeof e=="symbol",Ee=e=>e!==null&&typeof e=="object",ya=e=>(Ee(e)||ve(e))&&ve(e.then)&&ve(e.catch),ka=Object.prototype.toString,kr=e=>ka.call(e),Fc=e=>kr(e).slice(8,-1),wa=e=>kr(e)==="[object Object]",_s=e=>He(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,er=ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),so=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Lc=/-\w/g,mt=so(e=>e.replace(Lc,t=>t.slice(1).toUpperCase())),Oc=/\B([A-Z])/g,un=so(e=>e.replace(Oc,"-$1").toLowerCase()),io=so(e=>e.charAt(0).toUpperCase()+e.slice(1)),wo=so(e=>e?`on${io(e)}`:""),Ft=(e,t)=>!Object.is(e,t),Fr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},za=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Cs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Vc=e=>{const t=He(e)?Number(e):NaN;return isNaN(t)?e:t};let Xs;const ao=()=>Xs||(Xs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function he(e){if(ge(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=He(r)?Nc(r):he(r);if(o)for(const s in o)t[s]=o[s]}return t}else if(He(e)||Ee(e))return e}const Dc=/;(?![^(]*\))/g,jc=/:([^]+)/,Bc=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Nc(e){const t={};return e.replace(Bc,n=>n.startsWith("/*")?"":n).split(Dc).forEach(n=>{if(n){const r=n.split(jc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function $(e){let t="";if(He(e))t=e;else if(ge(e))for(let n=0;n<e.length;n++){const r=$(e[n]);r&&(t+=r+" ")}else if(Ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Hc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Gc=ws(Hc);function _a(e){return!!e||e===""}function Uc(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let o=0;r&&o<e.length;o++)r=lo(e[o],t[o],n);return r}function Ys(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),o=new Uint8Array(r.length);for(const s of e){let l=-1;for(let a=0;a<r.length;a++)if(!o[a]&&lo(s,r[a],n)){l=a;break}if(l<0)return!1;o[l]=1}return!0}function qc(e,t,n){let r=sn(e),o=sn(t);if(r||o||(r=Nr(e),o=Nr(t),r||o))return r&&o?Ys(e,t,n):!1;const s=Object.keys(e).length,l=Object.keys(t).length;if(s!==l)return!1;for(const a in e){const c=e.hasOwnProperty(a),p=t.hasOwnProperty(a);if(c&&!p||!c&&p||!lo(e[a],t[a],n))return!1}return String(e)===String(t)}function Ks(e,t,n,r){n||(n=[new Map,new Map]);const[o,s]=n;if(o.has(e)||s.has(t))return o.get(e)===t&&s.get(t)===e;o.set(e,t),s.set(t,e);const l=r(e,t,n);return o.delete(e),s.delete(t),l}function lo(e,t,n){if(e===t)return!0;let r=Ws(e),o=Ws(t);return r||o?r&&o?e.getTime()===t.getTime():!1:(r=Ct(e),o=Ct(t),r||o?e===t:(r=ge(e),o=ge(t),r||o?r&&o?Ks(e,t,n,Uc):!1:(r=Ee(e),o=Ee(t),r||o?!r||!o?!1:Ks(e,t,n,qc):String(e)===String(t))))}const Ca=e=>!!(e&&e.__v_isRef===!0),P=e=>He(e)?e:e==null?"":ge(e)||Ee(e)&&(e.toString===ka||!ve(e.toString))?Ca(e)?P(e.value):JSON.stringify(e,Sa,2):String(e),Sa=(e,t)=>Ca(t)?Sa(e,t.value):sn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],s)=>(n[zo(r,s)+" =>"]=o,n),{})}:Nr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>zo(n))}:Ct(t)?zo(t):Ee(t)&&!ge(t)&&!wa(t)?String(t):t,zo=(e,t="")=>{var n;return Ct(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class Wc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&nt&&(nt.active?(this.parent=nt,this.index=(nt.scopes||(nt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=nt;try{return nt=this,t()}finally{nt=n}}}on(){++this._on===1&&(this.prevScope=nt,nt=this)}off(){if(this._on>0&&--this._on===0){if(nt===this)nt=this.prevScope;else{let t=nt;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,r=o.length;n<r;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Xc(){return nt}let De;const _o=new WeakSet;class Ia{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&(nt.active?nt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_o.has(this)&&(_o.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$a(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zs(this),Ma(this);const t=De,n=_t;De=this,_t=!0;try{return this.fn()}finally{Pa(this),De=t,_t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)As(t);this.deps=this.depsTail=void 0,Zs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_o.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zo(this)&&this.run()}get dirty(){return Zo(this)}}let Aa=0,tr,nr;function $a(e,t=!1){if(e.flags|=8,t){e.next=nr,nr=e;return}e.next=tr,tr=e}function Ss(){Aa++}function Is(){if(--Aa>0)return;if(nr){let t=nr;for(nr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;tr;){let t=tr;for(tr=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Ma(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Pa(e){let t,n=e.depsTail,r=n;for(;r;){const o=r.prevDep;r.version===-1?(r===n&&(n=o),As(r),Yc(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=t,e.depsTail=n}function Zo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ta(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ta(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ur)||(e.globalVersion=ur,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Zo(e))))return;e.flags|=2;const t=e.dep,n=De,r=_t;De=e,_t=!0;try{Ma(e);const o=e.fn(e._value);(t.version===0||Ft(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{De=n,_t=r,Pa(e),e.flags&=-3}}function As(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)As(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Yc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let _t=!0;const Ra=[];function Vt(){Ra.push(_t),_t=!1}function Dt(){const e=Ra.pop();_t=e===void 0?!0:e}function Zs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=De;De=void 0;try{t()}finally{De=n}}}let ur=0;class Kc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $s{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!De||!_t||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new Kc(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,Ea(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(t){this.version++,ur++,this.notify(t)}notify(t){Ss();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Is()}}}function Ea(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Ea(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Jo=new WeakMap,_n=Symbol(""),Qo=Symbol(""),pr=Symbol("");function it(e,t,n){if(_t&&De){let r=Jo.get(e);r||Jo.set(e,r=new Map);let o=r.get(n);o||(r.set(n,o=new $s),o.map=r,o.key=n),o.track()}}function qt(e,t,n,r,o,s){const l=Jo.get(e);if(!l){ur++;return}const a=c=>{c&&c.trigger()};if(Ss(),t==="clear")l.forEach(a);else{const c=ge(e),p=c&&_s(n);if(c&&n==="length"){const u=Number(r);l.forEach((d,m)=>{(m==="length"||m===pr||!Ct(m)&&m>=u)&&a(d)})}else switch((n!==void 0||l.has(void 0))&&a(l.get(n)),p&&a(l.get(pr)),t){case"add":c?p&&a(l.get("length")):(a(l.get(_n)),sn(e)&&a(l.get(Qo)));break;case"delete":c||(a(l.get(_n)),sn(e)&&a(l.get(Qo)));break;case"set":sn(e)&&a(l.get(_n));break}}Is()}function Sn(e){const t=$e(e);return t===e||(it(t,"iterate",pr),yt(e))?t:jt(e)?an(e)?t.map(n=>ln(kt(n))):t.map(ln):t.map(kt)}function co(e){return it(e=$e(e),"iterate",pr),e}function Tt(e,t){return jt(e)?ln(an(e)?kt(t):t):kt(t)}const Zc={__proto__:null,[Symbol.iterator](){return Co(this,Symbol.iterator,e=>Tt(this,e))},concat(...e){return Sn(this).concat(...e.map(t=>ge(t)?Sn(t):t))},entries(){return Co(this,"entries",e=>(e[1]=Tt(this,e[1]),e))},every(e,t){return Bt(this,"every",e,t,void 0,arguments)},filter(e,t){return Bt(this,"filter",e,t,n=>n.map(r=>Tt(this,r)),arguments)},find(e,t){return Bt(this,"find",e,t,n=>Tt(this,n),arguments)},findIndex(e,t){return Bt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Bt(this,"findLast",e,t,n=>Tt(this,n),arguments)},findLastIndex(e,t){return Bt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Bt(this,"forEach",e,t,void 0,arguments)},includes(...e){return So(this,"includes",e)},indexOf(...e){return So(this,"indexOf",e)},join(e){return Sn(this).join(e)},lastIndexOf(...e){return So(this,"lastIndexOf",e)},map(e,t){return Bt(this,"map",e,t,void 0,arguments)},pop(){return Hn(this,"pop")},push(...e){return Hn(this,"push",e)},reduce(e,...t){return Qs(this,"reduce",e,t)},reduceRight(e,...t){return Qs(this,"reduceRight",e,t)},shift(){return Hn(this,"shift")},some(e,t){return Bt(this,"some",e,t,void 0,arguments)},splice(...e){return Hn(this,"splice",e)},toReversed(){return Sn(this).toReversed()},toSorted(e){return Sn(this).toSorted(e)},toSpliced(...e){return Sn(this).toSpliced(...e)},unshift(...e){return Hn(this,"unshift",e)},values(){return Co(this,"values",e=>Tt(this,e))}};function Co(e,t,n){const r=co(e),o=r[t],s=o.call(r);if(r!==e&&!yt(e)){if(s[Symbol.toStringTag]==="Array Iterator"){const l=Object.create(Object.getPrototypeOf(s));return l.next=()=>Js(s.next(),n),o!==Fa[t]&&Object.defineProperties(l,{return:{get(){const a=s.return;return typeof a=="function"?a.bind(s):a}},throw:{get(){const a=s.throw;return typeof a=="function"?a.bind(s):a}}}),l}s._next=s.next,s.next=()=>Js(s._next(),n)}return s}function Js(e,t){return e.done||(e.value=t(e.value)),e}const Fa=Array.prototype;function Bt(e,t,n,r,o,s){const l=co(e),a=l!==e&&!yt(e),c=l[t];if(c!==Fa[t]){const d=c.apply(e,s);return a?kt(d):d}let p=n;l!==e&&(a?p=function(d,m){return n.call(this,Tt(e,d),m,e)}:n.length>2&&(p=function(d,m){return n.call(this,d,m,e)}));const u=c.call(l,p,r);return a&&o?o(u):u}function Qs(e,t,n,r){const o=co(e),s=o!==e&&!yt(e);let l=n,a=!1;o!==e&&(s?(a=r.length===0,l=function(p,u,d){return a&&(a=!1,p=Tt(e,p)),n.call(this,p,Tt(e,u),d,e)}):n.length>3&&(l=function(p,u,d){return n.call(this,p,u,d,e)}));const c=o[t](l,...r);return a?Tt(e,c):c}function So(e,t,n){const r=$e(e);it(r,"iterate",pr);const o=r[t](...n);return(o===-1||o===!1)&&Ts(n[0])?(n[0]=$e(n[0]),r[t](...n)):o}function Hn(e,t,n=[]){Vt(),Ss();const r=$e(e)[t].apply(e,n);return Is(),Dt(),r}const Jc=ws("__proto__,__v_isRef,__isVue"),La=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ct));function Qc(e){Ct(e)||(e=String(e));const t=$e(this);return it(t,"has",e),t.hasOwnProperty(e)}class Oa{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(o?s?cd:Ba:s?ja:Da).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const l=ge(t);if(!o){let c;if(l&&(c=Zc[n]))return c;if(n==="hasOwnProperty")return Qc}const a=Reflect.get(t,n,lt(t)?t:r);if((Ct(n)?La.has(n):Jc(n))||(o||it(t,"get",n),s))return a;if(lt(a)){const c=l&&_s(n)?a:a.value;return o&&Ee(c)?ts(c):c}return Ee(a)?o?ts(a):uo(a):a}}class Va extends Oa{constructor(t=!1){super(!1,t)}set(t,n,r,o){let s=t[n];const l=ge(t)&&_s(n);if(!this._isShallow){const p=jt(s);if(!yt(r)&&!jt(r)&&(s=$e(s),r=$e(r)),!l&&lt(s)&&!lt(r))return p||(s.value=r),!0}const a=l?Number(n)<t.length:Me(t,n),c=Reflect.set(t,n,r,lt(t)?t:o);return t===$e(o)&&c&&(a?Ft(r,s)&&qt(t,"set",n,r):qt(t,"add",n,r)),c}deleteProperty(t,n){const r=Me(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&qt(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!Ct(n)||!La.has(n))&&it(t,"has",n),r}ownKeys(t){return it(t,"iterate",ge(t)?"length":_n),Reflect.ownKeys(t)}}class ed extends Oa{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const td=new Va,nd=new ed,rd=new Va(!0);const es=e=>e,Cr=e=>Reflect.getPrototypeOf(e);function od(e,t,n){return function(...r){const o=this.__v_raw,s=$e(o),l=sn(s),a=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,p=o[e](...r),u=n?es:t?ln:kt;return!t&&it(s,"iterate",c?Qo:_n),Ye(Object.create(p),{next(){const{value:d,done:m}=p.next();return m?{value:d,done:m}:{value:a?[u(d[0]),u(d[1])]:u(d),done:m}}})}}function Sr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function sd(e,t){const n={get(o){const s=this.__v_raw,l=$e(s),a=$e(o);e||(Ft(o,a)&&it(l,"get",o),it(l,"get",a));const{has:c}=Cr(l),p=t?es:e?ln:kt;if(c.call(l,o))return p(s.get(o));if(c.call(l,a))return p(s.get(a));s!==l&&s.get(o)},get size(){const o=this.__v_raw;return!e&&it($e(o),"iterate",_n),o.size},has(o){const s=this.__v_raw,l=$e(s),a=$e(o);return e||(Ft(o,a)&&it(l,"has",o),it(l,"has",a)),o===a?s.has(o):s.has(o)||s.has(a)},forEach(o,s){const l=this,a=l.__v_raw,c=$e(a),p=t?es:e?ln:kt;return!e&&it(c,"iterate",_n),a.forEach((u,d)=>o.call(s,p(u),p(d),l))}};return Ye(n,e?{add:Sr("add"),set:Sr("set"),delete:Sr("delete"),clear:Sr("clear")}:{add(o){const s=$e(this),l=Cr(s),a=$e(o),c=!t&&!yt(o)&&!jt(o)?a:o;return l.has.call(s,c)||Ft(o,c)&&l.has.call(s,o)||Ft(a,c)&&l.has.call(s,a)||(s.add(c),qt(s,"add",c,c)),this},set(o,s){!t&&!yt(s)&&!jt(s)&&(s=$e(s));const l=$e(this),{has:a,get:c}=Cr(l);let p=a.call(l,o);p||(o=$e(o),p=a.call(l,o));const u=c.call(l,o);return l.set(o,s),p?Ft(s,u)&&qt(l,"set",o,s):qt(l,"add",o,s),this},delete(o){const s=$e(this),{has:l,get:a}=Cr(s);let c=l.call(s,o);c||(o=$e(o),c=l.call(s,o)),a&&a.call(s,o);const p=s.delete(o);return c&&qt(s,"delete",o,void 0),p},clear(){const o=$e(this),s=o.size!==0,l=o.clear();return s&&qt(o,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=od(o,e,t)}),n}function Ms(e,t){const n=sd(e,t);return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_isShallow"?t:o==="__v_raw"?r:Reflect.get(Me(n,o)&&o in r?n:r,o,s)}const id={get:Ms(!1,!1)},ad={get:Ms(!1,!0)},ld={get:Ms(!0,!1)};const Da=new WeakMap,ja=new WeakMap,Ba=new WeakMap,cd=new WeakMap;function dd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uo(e){return jt(e)?e:Ps(e,!1,td,id,Da)}function Na(e){return Ps(e,!1,rd,ad,ja)}function ts(e){return Ps(e,!0,nd,ld,Ba)}function Ps(e,t,n,r,o){if(!Ee(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=o.get(e);if(s)return s;const l=dd(Fc(e));if(l===0)return e;const a=new Proxy(e,l===2?r:n);return o.set(e,a),a}function an(e){return jt(e)?an(e.__v_raw):!!(e&&e.__v_isReactive)}function jt(e){return!!(e&&e.__v_isReadonly)}function yt(e){return!!(e&&e.__v_isShallow)}function Ts(e){return e?!!e.__v_raw:!1}function $e(e){const t=e&&e.__v_raw;return t?$e(t):e}function ud(e){return!Me(e,"__v_skip")&&Object.isExtensible(e)&&za(e,"__v_skip",!0),e}const kt=e=>Ee(e)?uo(e):e,ln=e=>Ee(e)?ts(e):e;function lt(e){return e?e.__v_isRef===!0:!1}function E(e){return Ha(e,!1)}function pd(e){return Ha(e,!0)}function Ha(e,t){return lt(e)?e:new fd(e,t)}class fd{constructor(t,n){this.dep=new $s,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:$e(t),this._value=n?t:kt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||yt(t)||jt(t);t=r?t:$e(t),Ft(t,n)&&(this._rawValue=t,this._value=r?t:kt(t),this.dep.trigger())}}function I(e){return lt(e)?e.value:e}const md={get:(e,t,n)=>t==="__v_raw"?e:I(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return lt(o)&&!lt(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Ga(e){return an(e)?e:new Proxy(e,md)}class bd{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new $s(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return $a(this,!0),!0}get value(){const t=this.dep.track();return Ta(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function gd(e,t,n=!1){let r,o;return ve(e)?r=e:(r=e.get,o=e.set),new bd(r,o,n)}const Ir={},Hr=new WeakMap;let vn;function hd(e,t=!1,n=vn){if(n){let r=Hr.get(n);r||Hr.set(n,r=[]),r.push(e)}}function xd(e,t,n=Ve){const{immediate:r,deep:o,once:s,scheduler:l,augmentJob:a,call:c}=n,p=A=>o?A:yt(A)||o===!1||o===0?Wt(A,1):Wt(A);let u,d,m,f,w=!1,h=!1;if(lt(e)?(d=()=>e.value,w=yt(e)):an(e)?(d=()=>p(e),w=!0):ge(e)?(h=!0,w=e.some(A=>an(A)||yt(A)),d=()=>e.map(A=>{if(lt(A))return A.value;if(an(A))return p(A);if(ve(A))return c?c(A,2):A()})):ve(e)?t?d=c?()=>c(e,2):e:d=()=>{if(m){Vt();try{m()}finally{Dt()}}const A=vn;vn=u;try{return c?c(e,3,[f]):e(f)}finally{vn=A}}:d=Lt,t&&o){const A=d,R=o===!0?1/0:o;d=()=>Wt(A(),R)}const C=Xc(),S=()=>{u.stop(),C&&C.active&&zs(C.effects,u)};if(s&&t){const A=t;t=(...R)=>{try{return A(...R)}finally{S()}}}let y=h?new Array(e.length).fill(Ir):Ir;const _=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(t){const R=u.run();if(A||o||w||(h?R.some((O,N)=>Ft(O,y[N])):Ft(R,y))){const O=vn;Vt();try{m&&m(),vn=u;const N=[R,y===Ir?void 0:h&&y[0]===Ir?[]:y,f];y=R,c?c(t,3,N):t(...N)}finally{vn=O,Dt()}}}else u.run()};return a&&a(_),u=new Ia(d),u.scheduler=l?()=>l(_,!1):_,f=A=>hd(A,!1,u),m=u.onStop=()=>{const A=Hr.get(u);if(A){if(c)c(A,4);else for(const R of A)R();Hr.delete(u)}},t?r?_(!0):y=u.run():l?l(_.bind(null,!0),!0):u.run(),S.pause=u.pause.bind(u),S.resume=u.resume.bind(u),S.stop=S,S}function Wt(e,t=1/0,n){if(t<=0||!Ee(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,lt(e))Wt(e.value,t,n);else if(ge(e))for(let r=0;r<e.length;r++)Wt(e[r],t,n);else if(Nr(e)||sn(e))e.forEach(r=>{Wt(r,t,n)});else if(wa(e)){for(const r in e)Wt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Wt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wr(e,t,n,r){try{return r?e(...r):e()}catch(o){po(o,t,n)}}function wt(e,t,n,r){if(ve(e)){const o=wr(e,t,n,r);return o&&ya(o)&&o.catch(s=>{po(s,t,n)}),o}if(ge(e)){const o=[];for(let s=0;s<e.length;s++)o.push(wt(e[s],t,n,r));return o}}function po(e,t,n,r=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||Ve;if(t){let a=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,p)===!1)return}a=a.parent}if(s){Vt(),wr(s,null,10,[e,c,p]),Dt();return}}vd(e,n,o,r,l)}function vd(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}const ft=[];let zt=-1;const Rt=[];let nn=null,In=0;const Ua=Promise.resolve();let Gr=null;function Tn(e){const t=Gr||Ua;return e?t.then(this?e.bind(this):e):t}function yd(e){let t=zt+1,n=ft.length;for(;t<n;){const r=t+n>>>1,o=ft[r],s=fr(o);s<e||s===e&&o.flags&2?t=r+1:n=r}return t}function Rs(e){if(!(e.flags&1)){const t=fr(e),n=ft[ft.length-1];!n||!(e.flags&2)&&t>=fr(n)?ft.push(e):ft.splice(yd(t),0,e),e.flags|=1,qa()}}function qa(){Gr||(Gr=Ua.then(Ya))}function kd(e){if(!ge(e))nn&&e.id===-1?nn.splice(In+1,0,e):e.flags&1||(Rt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Rt.push(e[t]);qa()}function Wa(e,t,n,r=zt+1){for(;r<ft.length;r++){const o=ft[r];if(o&&o.flags&2){if(e&&o.id!==e.uid||t!==void 0&&!(o.id>=t))continue;ft.splice(r,1),r=e?r-1:zt,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function Xa(e,t,n=0){if(Rt.length){let r=Rt,o=0;if(t){r=[];for(let l=0;l<Rt.length;l++){const a=Rt[l];(a.i!==void 0?!a.i||a.i.uid<n:t.has(a))?Rt[o++]=a:r.push(a)}}const s=[...new Set(r)].sort((l,a)=>fr(l)-fr(a));if(Rt.length=o,nn){for(let l=0;l<s.length;l++)nn.push(s[l]);return}for(nn=s,In=0;In<nn.length;In++){const l=nn[In];l.flags&4&&(l.flags&=-2),l.flags&8||l(),l.flags&=-2}nn=null,In=0}}let Io=!1;function wd(e,t){if(Io){e();return}const n=t===void 0?void 0:new Set(Rt);e(),Io=!0;try{Wa(void 0,t),Xa(void 0,n,t)}finally{Io=!1}}const fr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ya(e){try{for(zt=0;zt<ft.length;zt++){const t=ft[zt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),wr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;zt<ft.length;zt++){const t=ft[zt];t&&(t.flags&=-2)}zt=-1,ft.length=0,Xa(),Gr=null,(ft.length||Rt.length)&&Ya()}}let rt=null,Ka=null;function Ur(e){const t=rt;return rt=e,Ka=e&&e.type.__scopeId||null,t}function Y(e,t=rt,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Yr(-1);const s=Ur(t),l=Yt.length;let a;try{a=e(...o)}finally{for(let c=Yt.length;c>l;c--)Os();Ur(s),r._d&&Yr(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Rn(e,t){if(rt===null)return e;const n=vo(rt),r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,l,a,c=Ve]=t[o];s&&(ve(s)&&(s={mounted:s,updated:s}),s.deep&&Wt(l),r.push({dir:s,instance:n,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function bn(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let l=0;l<o.length;l++){const a=o[l];s&&(a.oldValue=s[l].value);let c=a.dir[r];c&&(Vt(),wt(c,n,8,[e.el,a,e,t]),Dt())}}function Lr(e,t){if(at){let n=at.provides;const r=at.parent&&at.parent.provides;r===n&&(n=at.provides=Object.create(r)),n[e]=t}}function Ot(e,t,n=!1){const r=xo();if(r||Fn){let o=Fn?Fn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&ve(t)?t.call(r&&r.proxy):t}}const zd=Symbol.for("v-scx"),_d=()=>Ot(zd);function ht(e,t,n){return Za(e,t,n)}function Za(e,t,n=Ve){const{immediate:r,deep:o,flush:s,once:l}=n,a=Ye({},n),c=t&&r||!t&&s!=="post";let p;if(xr){if(s==="sync"){const f=_d();p=f.__watcherHandles||(f.__watcherHandles=[])}else if(!c){const f=()=>{};return f.stop=Lt,f.resume=Lt,f.pause=Lt,f}}const u=at;a.call=(f,w,h)=>wt(f,u,w,h);let d=!1;s==="post"?a.scheduler=f=>{f.i=u,bt(f,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(f,w)=>{w?f():Rs(f)}),a.augmentJob=f=>{t&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const m=xd(e,t,a);return xr&&(p?p.push(m):c&&m()),m}function Cd(e,t,n){const r=this.proxy,o=He(e)?e.includes(".")?Ja(r,e):()=>r[e]:e.bind(r,r);let s;ve(t)?s=t:(s=t.handler,n=t);const l=_r(this),a=Za(o,s.bind(r),n);return l(),a}function Ja(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const Sd=Symbol("_vte"),fo=e=>e.__isTeleport,vt=Symbol("_leaveCb"),Gn=Symbol("_enterCb");function Qa(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return et(()=>{e.isMounted=!0}),il(()=>{e.isUnmounting=!0}),e}const xt=[Function,Array],el={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},Id={name:"BaseTransition",props:el,setup(e,{slots:t}){const n=xo(),r=Qa();return()=>{const o=t.default&&Es(t.default(),!0),s=o&&o.length?tl(o):n.subTree?J():void 0;if(!s)return;const l=$e(e),{mode:a}=l;if(r.isLeaving)return Ao(s);const c=qr(s);if(!c)return Ao(s);let p=mr(c,l,r,n,d=>p=d);c.type!==ot&&cn(c,p);let u=n.subTree&&qr(n.subTree);if(u&&u.type!==ot&&!yn(u,c)&&br(n.subTree)){let d=mr(u,l,r,n);if(cn(u,d),a==="out-in"&&c.type!==ot)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Ao(s);a==="in-out"&&c.type!==ot?d.delayLeave=(m,f,w)=>{const h=nl(r,u);h[String(u.key)]=u,m[vt]=()=>{f(),m[vt]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{w(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function tl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ot){t=n;break}}return t}const Ad=Id;function nl(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function mr(e,t,n,r,o){const{appear:s,mode:l,persisted:a=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:f,onAfterLeave:w,onLeaveCancelled:h,onBeforeAppear:C,onAppear:S,onAfterAppear:y,onAppearCancelled:_}=t,A=String(e.key),R=nl(n,e),O=(D,oe)=>{D&&wt(D,r,9,oe)},N=(D,oe)=>{const be=oe[1];O(D,oe),ge(D)?D.every(U=>U.length<=1)&&be():D.length<=1&&be()},V={mode:l,persisted:a,beforeEnter(D){let oe=c;if(!n.isMounted)if(s)oe=C||c;else return;D[vt]&&D[vt](!0);const be=R[A];if(be&&yn(e,be)){let U=be.el[vt];if(!U){const ye=br(be);U=ye&&ye.el[vt]}U&&U()}O(oe,[D])},enter(D){if(R[A]===e)return;let oe=p,be=u,U=d;if(!n.isMounted)if(s)oe=S||p,be=y||u,U=_||d;else return;let ye=!1;D[Gn]=je=>{ye||(ye=!0,je?O(U,[D]):O(be,[D]),V.delayedLeave&&V.delayedLeave(),D[Gn]=void 0)};const Fe=D[Gn].bind(null,!1);oe?N(oe,[D,Fe]):Fe()},leave(D,oe){const be=String(e.key);if(D[Gn]&&D[Gn](!0),n.isUnmounting)return oe();O(m,[D]);let U=!1;D[vt]=Fe=>{U||(U=!0,oe(),Fe?O(h,[D]):O(w,[D]),D[vt]=void 0,R[be]===e&&delete R[be])};const ye=D[vt].bind(null,!1);R[be]=e,f?N(f,[D,ye]):ye()},clone(D){const oe=mr(D,t,n,r,o);return o&&o(oe),oe}};return V}function Ao(e){if(mo(e))return e=dn(e),e.children=null,e}function qr(e){if(!mo(e))return fo(e.type)&&e.children?tl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ve(n.default))return n.default()}}function cn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;cn(fo(n.type)&&qr(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===ie&&ge(e.children)){const n=bl(e.children,!1);n&&cn(n,t)}}function Es(e,t=!1,n){let r=[],o=0;for(let s=0;s<e.length;s++){let l=e[s];const a=n==null?l.key:String(n)+String(l.key!=null?l.key:s);l.type===ie?(l.patchFlag&128&&o++,r=r.concat(Es(l.children,t,a))):(t||l.type!==ot)&&r.push(a!=null?dn(l,{key:a}):l)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function br(e){if(e.component)return br(e.component.subTree);if(e.type===ie){const t=ge(e.children)&&bl(e.children,!1);return t?br(t):void 0}if(e.type!==ot)return e}function se(e,t){return ve(e)?Ye({name:e.name},t,{setup:e}):e}function Bn(){const e=xo();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function rl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ei(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Wr=new WeakMap;function rr(e,t,n,r,o=!1){if(ge(e)){e.forEach((h,C)=>rr(h,t&&(ge(t)?t[C]:t),n,r,o));return}if(En(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&rr(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?vo(r.component):r.el,l=o?null:s,{i:a,r:c}=e,p=t&&t.r,u=a.refs===Ve?a.refs={}:a.refs,d=a.setupState,m=$e(d),f=d===Ve?va:h=>ei(u,h)?!1:Me(m,h),w=(h,C)=>!(C&&ei(u,C));if(p!=null&&p!==c){if(ti(t),He(p))u[p]=null,f(p)&&(d[p]=null);else if(lt(p)){const h=t;w(p,h.k)&&(p.value=null),h.k&&(u[h.k]=null)}}if(ve(c))wr(c,a,12,[l,u]);else{const h=He(c),C=lt(c);if(h||C){const S=()=>{if(e.f){const y=h?f(c)?d[c]:u[c]:w()||!e.k?c.value:u[e.k];if(o)ge(y)&&zs(y,s);else if(ge(y))y.includes(s)||y.push(s);else if(h)u[c]=[s],f(c)&&(d[c]=u[c]);else{const _=[s];w(c,e.k)&&(c.value=_),e.k&&(u[e.k]=_)}}else h?(u[c]=l,f(c)&&(d[c]=l)):C&&(w(c,e.k)&&(c.value=l),e.k&&(u[e.k]=l))};if(l){const y=()=>{S(),Wr.delete(e)};y.id=-1,Wr.set(e,y),bt(y,n)}else ti(e),S()}}}function ti(e){const t=Wr.get(e);t&&(t.flags|=8,Wr.delete(e))}ao().requestIdleCallback;ao().cancelIdleCallback;const En=e=>!!e.type.__asyncLoader,mo=e=>e.type.__isKeepAlive;function $d(e,t){ol(e,"a",t)}function Md(e,t){ol(e,"da",t)}function ol(e,t,n=at){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(bo(t,r,n),n){let o=n.parent;for(;o&&o.parent;)mo(o.parent.vnode)&&Pd(r,t,n,o),o=o.parent}}function Pd(e,t,n,r){const o=bo(t,e,r,!0);st(()=>{zs(r[t],o)},n)}function bo(e,t,n=at,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...l)=>{Vt();const a=_r(n),c=wt(t,n,e,l);return a(),Dt(),c});return r?o.unshift(s):o.push(s),s}}const Zt=e=>(t,n=at)=>{(!xr||e==="sp")&&bo(e,(...r)=>t(...r),n)},Td=Zt("bm"),et=Zt("m"),Rd=Zt("bu"),sl=Zt("u"),il=Zt("bum"),st=Zt("um"),Ed=Zt("sp"),Fd=Zt("rtg"),Ld=Zt("rtc");function Od(e,t=at){bo("ec",e,t)}const al="components";function zr(e,t){return cl(al,e,!0,t)||e}const ll=Symbol.for("v-ndc");function tt(e){return He(e)?cl(al,e,!1)||e:e||ll}function cl(e,t,n=!0,r=!1){const o=rt||at;if(o){const s=o.type;{const a=yu(s,!1);if(a&&(a===t||a===mt(t)||a===io(mt(t))))return s}const l=ni(o[e]||s[e],t)||ni(o.appContext[e],t);return!l&&r?s:l}}function ni(e,t){return e&&(e[t]||e[mt(t)]||e[io(mt(t))])}function ke(e,t,n,r){let o;const s=n,l=ge(e);if(l||He(e)){const a=l&&an(e);let c=!1,p=!1;a&&(c=!yt(e),p=jt(e),e=co(e)),o=new Array(e.length);for(let u=0,d=e.length;u<d;u++)o[u]=t(c?p?ln(kt(e[u])):kt(e[u]):e[u],u,void 0,s)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)o=[];else{o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,s)}else if(Ee(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>t(a,c,void 0,s));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,p=a.length;c<p;c++){const u=a[c];o[c]=t(e[u],u,c,s)}}else o=[];return o}function Qe(e,t,n,r,o,s){if(n==null&&(n={}),rt.ce||rt.parent&&En(rt.parent)&&rt.parent.ce){const p=s!=null&&n.key==null?Ye({},n,{key:s}):n,u=Object.keys(p).length>0;return t!=="default"&&(p.name=t),b(),me(ie,null,[k("slot",p,r&&r())],u?-2:64)}let l=e[t];l&&l._c&&(l._d=!1);const a=Yt.length;b();let c;try{const p=l&&dl(l(n)),u=n.key||s||p&&p.key;c=me(ie,{key:(u&&!Ct(u)?u:`_${t}`)+(!p&&r?"_fb":"")},p||(r?r():[]),p&&e._===1?64:-2)}catch(p){for(let u=Yt.length;u>a;u--)Os();throw p}finally{l&&l._c&&(l._d=!0)}return!o&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function dl(e){return e.some(t=>Ln(t)?!(t.type===ot||t.type===ie&&!dl(t.children)):!0)?e:null}const ns=e=>e?Pl(e)?vo(e):ns(e.parent):null,or=Ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ns(e.parent),$root:e=>ns(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>pl(e),$forceUpdate:e=>e.f||(e.f=()=>{Rs(e.update)}),$nextTick:e=>e.n||(e.n=Tn.bind(e.proxy)),$watch:e=>Cd.bind(e)}),$o=(e,t)=>e!==Ve&&!e.__isScriptSetup&&Me(e,t),Vd={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:s,accessCache:l,type:a,appContext:c}=e;if(t[0]!=="$"){const m=l[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if($o(r,t))return l[t]=1,r[t];if(o!==Ve&&Me(o,t))return l[t]=2,o[t];if(Me(s,t))return l[t]=3,s[t];if(n!==Ve&&Me(n,t))return l[t]=4,n[t];rs&&(l[t]=0)}}const p=or[t];let u,d;if(p)return t==="$attrs"&&it(e.attrs,"get",""),p(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==Ve&&Me(n,t))return l[t]=4,n[t];if(d=c.config.globalProperties,Me(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return $o(o,t)?(o[t]=n,!0):r!==Ve&&Me(r,t)?(r[t]=n,!0):Me(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,props:s,type:l}},a){let c;return!!(n[a]||e!==Ve&&a[0]!=="$"&&Me(e,a)||$o(t,a)||Me(s,a)||Me(r,a)||Me(or,a)||Me(o.config.globalProperties,a)||(c=l.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Me(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ri(e){return ge(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let rs=!0;function Dd(e){const t=pl(e),n=e.proxy,r=e.ctx;rs=!1,t.beforeCreate&&oi(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:l,watch:a,provide:c,inject:p,created:u,beforeMount:d,mounted:m,beforeUpdate:f,updated:w,activated:h,deactivated:C,beforeDestroy:S,beforeUnmount:y,destroyed:_,unmounted:A,render:R,renderTracked:O,renderTriggered:N,errorCaptured:V,serverPrefetch:D,expose:oe,inheritAttrs:be,components:U,directives:ye,filters:Fe}=t;if(p&&jd(p,r,null),l)for(const xe in l){const fe=l[xe];ve(fe)&&(r[xe]=fe.bind(n))}if(o){const xe=o.call(n,n);Ee(xe)&&(e.data=uo(xe))}if(rs=!0,s)for(const xe in s){const fe=s[xe],Oe=ve(fe)?fe.bind(n,n):ve(fe.get)?fe.get.bind(n,n):Lt,te=!ve(fe)&&ve(fe.set)?fe.set.bind(n):Lt,We=ee({get:Oe,set:te});Object.defineProperty(r,xe,{enumerable:!0,configurable:!0,get:()=>We.value,set:Se=>We.value=Se})}if(a)for(const xe in a)ul(a[xe],r,n,xe);if(c){const xe=ve(c)?c.call(n):c;Reflect.ownKeys(xe).forEach(fe=>{Lr(fe,xe[fe])})}u&&oi(u,e,"c");function ze(xe,fe){ge(fe)?fe.forEach(Oe=>xe(Oe.bind(n))):fe&&xe(fe.bind(n))}if(ze(Td,d),ze(et,m),ze(Rd,f),ze(sl,w),ze($d,h),ze(Md,C),ze(Od,V),ze(Ld,O),ze(Fd,N),ze(il,y),ze(st,A),ze(Ed,D),ge(oe))if(oe.length){const xe=e.exposed||(e.exposed={});oe.forEach(fe=>{Object.defineProperty(xe,fe,{get:()=>n[fe],set:Oe=>n[fe]=Oe,enumerable:!0})})}else e.exposed||(e.exposed={});R&&e.render===Lt&&(e.render=R),be!=null&&(e.inheritAttrs=be),U&&(e.components=U),ye&&(e.directives=ye),D&&rl(e)}function jd(e,t,n=Lt){ge(e)&&(e=os(e));for(const r in e){const o=e[r];let s;Ee(o)?"default"in o?s=Ot(o.from||r,o.default,!0):s=Ot(o.from||r):s=Ot(o),lt(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):t[r]=s}}function oi(e,t,n){wt(ge(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ul(e,t,n,r){let o=r.includes(".")?Ja(n,r):()=>n[r];if(He(e)){const s=t[e];ve(s)&&ht(o,s)}else if(ve(e))ht(o,e.bind(n));else if(Ee(e))if(ge(e))e.forEach(s=>ul(s,t,n,r));else{const s=ve(e.handler)?e.handler.bind(n):t[e.handler];ve(s)&&ht(o,s,e)}}function pl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:l}}=e.appContext,a=s.get(t);let c;return a?c=a:!o.length&&!n&&!r?c=t:(c={},o.length&&o.forEach(p=>Xr(c,p,l,!0)),Xr(c,t,l)),Ee(t)&&s.set(t,c),c}function Xr(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&Xr(e,s,n,!0),o&&o.forEach(l=>Xr(e,l,n,!0));for(const l in t)if(!(r&&l==="expose")){const a=Bd[l]||n&&n[l];e[l]=a?a(e[l],t[l]):t[l]}return e}const Bd={data:si,props:ii,emits:ii,methods:Kn,computed:Kn,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Kn,directives:Kn,watch:Hd,provide:si,inject:Nd};function si(e,t){return t?e?function(){return Ye(ve(e)?e.call(this,this):e,ve(t)?t.call(this,this):t)}:t:e}function Nd(e,t){return Kn(os(e),os(t))}function os(e){if(ge(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function dt(e,t){return e?[...new Set([].concat(e,t))]:t}function Kn(e,t){return e?Ye(Object.create(null),e,t):t}function ii(e,t){return e?ge(e)&&ge(t)?[...new Set([...e,...t])]:Ye(Object.create(null),ri(e),ri(t??{})):t}function Hd(e,t){if(!e)return t;if(!t)return e;const n=Ye(Object.create(null),e);for(const r in t)n[r]=dt(e[r],t[r]);return n}function fl(){return{app:null,config:{isNativeTag:va,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gd=0;function Ud(e,t){return function(r,o=null){ve(r)||(r=Ye({},r)),o!=null&&!Ee(o)&&(o=null);const s=fl(),l=new WeakSet,a=[];let c=!1;const p=s.app={_uid:Gd++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:wu,get config(){return s.config},set config(u){},use(u,...d){return l.has(u)||(u&&ve(u.install)?(l.add(u),u.install(p,...d)):ve(u)&&(l.add(u),u(p,...d))),p},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),p},component(u,d){return d?(s.components[u]=d,p):s.components[u]},directive(u,d){return d?(s.directives[u]=d,p):s.directives[u]},mount(u,d,m){if(!c){const f=p._ceVNode||k(r,o);return f.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),e(f,u,m),c=!0,p._container=u,u.__vue_app__=p,vo(f.component)}},onUnmount(u){a.push(u)},unmount(){c&&(wt(a,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return s.provides[u]=d,p},runWithContext(u){const d=Fn;Fn=p;try{return u()}finally{Fn=d}}};return p}}let Fn=null;const qd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${mt(t)}Modifiers`]||e[`${un(t)}Modifiers`];function Wd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Ve;let o=n;const s=t.startsWith("update:"),l=s&&qd(r,t.slice(7));l&&(l.trim&&(o=n.map(u=>He(u)?u.trim():u)),l.number&&(o=o.map(Cs)));let a,c=r[a=wo(t)]||r[a=wo(mt(t))];!c&&s&&(c=r[a=wo(un(t))]),c&&wt(c,e,6,o);const p=r[a+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,wt(p,e,6,o)}}const Xd=new WeakMap;function ml(e,t,n=!1){const r=n?Xd:t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let l={},a=!1;if(!ve(e)){const c=p=>{const u=ml(p,t,!0);u&&(a=!0,Ye(l,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(Ee(e)&&r.set(e,null),null):(ge(s)?s.forEach(c=>l[c]=null):Ye(l,s),Ee(e)&&r.set(e,l),l)}function go(e,t){return!e||!ro(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),Me(e,t[0].toLowerCase()+t.slice(1))||Me(e,un(t))||Me(e,t))}function ai(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:l,attrs:a,emit:c,render:p,renderCache:u,props:d,data:m,setupState:f,ctx:w,inheritAttrs:h}=e,C=Ur(e);let S,y;try{if(n.shapeFlag&4){const A=o||r,R=A;S=Et(p.call(R,A,u,d,f,m,w)),y=a}else{const A=t;S=Et(A.length>1?A(d,{attrs:a,slots:l,emit:c}):A(d,null)),y=t.props?a:Yd(a)}}catch(A){Yt.length=0,po(A,e,1),S=k(ot)}let _=S;if(y&&h!==!1){const A=Object.keys(y),{shapeFlag:R}=_;A.length&&R&7&&(s&&A.some(oo)&&(y=Kd(y,s)),_=dn(_,y,!1,!0))}if(n.dirs&&(_=dn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition){const A=fo(_.type)&&qr(_)||_;cn(A,n.transition)}return S=_,Ur(C),S}function bl(e,t=!0){let n;for(let r=0;r<e.length;r++){const o=e[r];if(Ln(o)){if(o.type!==ot||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Yd=e=>{let t;for(const n in e)(n==="class"||n==="style"||ro(n))&&((t||(t={}))[n]=e[n]);return t},Kd=(e,t)=>{const n={};for(const r in e)(!oo(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Zd(e,t,n){const{props:r,children:o,component:s}=e,{props:l,children:a,patchFlag:c}=t,p=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?li(r,l,p):!!l;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(gl(l,r,m)&&!go(p,m))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===l?!1:r?l?li(r,l,p):!0:!!l;return!1}function li(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(!Me(e,s)||gl(t,e,s)&&!go(n,s))return!0}return!1}function gl(e,t,n){const r=e[n],o=t[n];return n==="style"&&Ee(r)&&Ee(o)?!lo(r,o):r!==o}function Jd({vnode:e,parent:t,suspense:n},r){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=r,e=o),o===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const hl={},xl=()=>Object.create(hl),vl=e=>Object.getPrototypeOf(e)===hl;function Qd(e,t,n,r=!1){const o={},s=xl();e.propsDefaults=Object.create(null),yl(e,t,o,s);for(const l in e.propsOptions[0])l in o||(o[l]=void 0);n?e.props=r?o:Na(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function eu(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:l}}=e,a=$e(o),[c]=e.propsOptions;let p=!1;if((r||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(go(e.emitsOptions,m))continue;const f=t[m];if(c)if(Me(s,m))f!==s[m]&&(s[m]=f,p=!0);else{const w=mt(m);o[w]=ss(c,a,w,f,e,!1)}else f!==s[m]&&(s[m]=f,p=!0)}}}else{yl(e,t,o,s)&&(p=!0);let u;for(const d in a)(!t||!Me(t,d)&&((u=un(d))===d||!Me(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(o[d]=ss(c,a,d,void 0,e,!0)):delete o[d]);if(s!==a)for(const d in s)(!t||!Me(t,d))&&(delete s[d],p=!0)}p&&qt(e.attrs,"set","")}function yl(e,t,n,r){const[o,s]=e.propsOptions;let l=!1,a;if(t)for(let c in t){if(er(c))continue;const p=t[c];let u;o&&Me(o,u=mt(c))?!s||!s.includes(u)?n[u]=p:(a||(a={}))[u]=p:go(e.emitsOptions,c)||(!(c in r)||p!==r[c])&&(r[c]=p,l=!0)}if(s){const c=$e(n),p=a||Ve;for(let u=0;u<s.length;u++){const d=s[u];n[d]=ss(o,c,d,p[d],e,!Me(p,d))}}return l}function ss(e,t,n,r,o,s){const l=e[n];if(l!=null){const a=Me(l,"default");if(a&&r===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&ve(c)){const{propsDefaults:p}=o;if(n in p)r=p[n];else{const u=_r(o);r=p[n]=c.call(null,t),u()}}else r=c;o.ce&&o.ce._setProp(n,r)}l[0]&&(s&&!a?r=!1:l[1]&&(r===""||r===un(n))&&(r=!0))}return r}const tu=new WeakMap;function kl(e,t,n=!1){const r=n?tu:t.propsCache,o=r.get(e);if(o)return o;const s=e.props,l={},a=[];let c=!1;if(!ve(e)){const u=d=>{c=!0;const[m,f]=kl(d,t,!0);Ye(l,m),f&&a.push(...f)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return Ee(e)&&r.set(e,kn),kn;if(ge(s))for(let u=0;u<s.length;u++){const d=mt(s[u]);ci(d)&&(l[d]=Ve)}else if(s)for(const u in s){const d=mt(u);if(ci(d)){const m=s[u],f=l[d]=ge(m)||ve(m)?{type:m}:Ye({},m),w=f.type;let h=!1,C=!0;if(ge(w))for(let S=0;S<w.length;++S){const y=w[S],_=ve(y)&&y.name;if(_==="Boolean"){h=!0;break}else _==="String"&&(C=!1)}else h=ve(w)&&w.name==="Boolean";f[0]=h,f[1]=C,(h||Me(f,"default"))&&a.push(d)}}const p=[l,a];return Ee(e)&&r.set(e,p),p}function ci(e){return e[0]!=="$"&&!er(e)}const Fs=e=>e==="_"||e==="_ctx"||e==="$stable",Ls=e=>ge(e)?e.map(Et):[Et(e)],nu=(e,t,n)=>{if(t._n)return t;const r=Y((...o)=>Ls(t(...o)),n);return r._c=!1,r},wl=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Fs(o))continue;const s=e[o];if(ve(s))t[o]=nu(o,s,r);else if(s!=null){const l=Ls(s);t[o]=()=>l}}},zl=(e,t)=>{const n=Ls(t);e.slots.default=()=>n},_l=(e,t,n)=>{for(const r in t)(n||!Fs(r))&&(e[r]=t[r])},ru=(e,t,n)=>{const r=e.slots=xl();if(e.vnode.shapeFlag&32){const o=t._;o?(_l(r,t,n),n&&za(r,"_",o,!0)):wl(t,r)}else t&&zl(e,t)},ou=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,l=Ve;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:_l(o,t,n):(s=!t.$stable,wl(t,o)),l=t}else t&&(zl(e,t),l={default:1});if(s)for(const a in o)!Fs(a)&&l[a]==null&&delete o[a]},bt=cu;function su(e){return iu(e)}function iu(e,t){const n=ao();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:l,createText:a,createComment:c,setText:p,setElementText:u,parentNode:d,nextSibling:m,setScopeId:f=Lt,insertStaticContent:w}=e,h=(x,z,M,T=null,F=null,j=null,G=void 0,W=null,X=!!z.dynamicChildren)=>{if(x===z)return;x&&!yn(x,z)&&(T=L(x),Se(x,F,j,!0),x=null),z.patchFlag===-2&&(X=!1,z.dynamicChildren=null),z.dynamicChildren&&x&&x.dynamicChildren&&x.dynamicChildren.hasOnce&&(z.dynamicChildren===kn&&(z.dynamicChildren=[]),z.dynamicChildren.hasOnce=!0);const{type:B,ref:de,shapeFlag:K}=z;switch(B){case ho:C(x,z,M,T);break;case ot:S(x,z,M,T);break;case Or:x==null&&y(z,M,T,G);break;case ie:U(x,z,M,T,F,j,G,W,X);break;default:K&1?R(x,z,M,T,F,j,G,W,X):K&6?ye(x,z,M,T,F,j,G,W,X):(K&64||K&128)&&B.process(x,z,M,T,F,j,G,W,X,H)}de!=null&&F?rr(de,x&&x.ref,j,z||x,!z):de==null&&x&&x.ref!=null&&rr(x.ref,null,j,x,!0)},C=(x,z,M,T)=>{if(x==null)r(z.el=a(z.children),M,T);else{const F=z.el=x.el;z.children!==x.children&&p(F,z.children)}},S=(x,z,M,T)=>{x==null?r(z.el=c(z.children||""),M,T):z.el=x.el},y=(x,z,M,T)=>{[x.el,x.anchor]=w(x.children,z,M,T,x.el,x.anchor)},_=({el:x,anchor:z},M,T)=>{let F;for(;x&&x!==z;)F=m(x),r(x,M,T),x=F;r(z,M,T)},A=({el:x,anchor:z})=>{let M;for(;x&&x!==z;)M=m(x),o(x),x=M;o(z)},R=(x,z,M,T,F,j,G,W,X)=>{if(z.type==="svg"?G="svg":z.type==="math"&&(G="mathml"),x==null)O(z,M,T,F,j,G,W,X);else{const B=x.el&&x.el._isVueCE?x.el:null;try{B&&B._beginPatch(),D(x,z,F,j,G,W,X)}finally{B&&B._endPatch()}}},O=(x,z,M,T,F,j,G,W)=>{let X,B;const{props:de,shapeFlag:K,transition:le,dirs:ue}=x;if(X=x.el=l(x.type,j,de&&de.is,de),K&8?u(X,x.children):K&16&&V(x.children,X,null,T,F,Mo(x,j),G,W),ue&&bn(x,null,T,"created"),N(X,x,x.scopeId,G,T),de){for(const Le in de)Le!=="value"&&!er(Le)&&s(X,Le,null,de[Le],j,T);"value"in de&&s(X,"value",null,de.value,j),(B=de.onVnodeBeforeMount)&&$t(B,T,x)}ue&&bn(x,null,T,"beforeMount");const _e=au(F,le);_e&&le.beforeEnter(X),r(X,z,M),((B=de&&de.onVnodeMounted)||_e||ue)&&bt(()=>{try{B&&$t(B,T,x),_e&&le.enter(X),ue&&bn(x,null,T,"mounted")}finally{}},F)},N=(x,z,M,T,F)=>{if(M&&f(x,M),T)for(let j=0;j<T.length;j++)f(x,T[j]);if(F){let j=F.subTree;if(z===j||Il(j.type)&&(j.ssContent===z||j.ssFallback===z)){const G=F.vnode;N(x,G,G.scopeId,G.slotScopeIds,F.parent)}}},V=(x,z,M,T,F,j,G,W,X=0)=>{for(let B=X;B<x.length;B++){const de=x[B]=W?Ut(x[B]):Et(x[B]);h(null,de,z,M,T,F,j,G,W)}},D=(x,z,M,T,F,j,G)=>{const W=z.el=x.el;let{patchFlag:X,dynamicChildren:B,dirs:de}=z;X|=x.patchFlag&16;const K=x.props||Ve,le=z.props||Ve;let ue;if(M&&gn(M,!1),(ue=le.onVnodeBeforeUpdate)&&$t(ue,M,z,x),de&&bn(z,x,M,"beforeUpdate"),M&&gn(M,!0),B&&(!x.dynamicChildren||x.dynamicChildren.length!==B.length)&&(X=0,G=!1,B=null),(K.innerHTML&&le.innerHTML==null||K.textContent&&le.textContent==null)&&u(W,""),B?oe(x.dynamicChildren,B,W,M,T,Mo(z,F),j):G||fe(x,z,W,null,M,T,Mo(z,F),j,!1),X>0){if(X&16)be(W,K,le,M,F);else if(X&2&&K.class!==le.class&&s(W,"class",null,le.class,F),X&4&&s(W,"style",K.style,le.style,F),X&8){const _e=z.dynamicProps;for(let Le=0;Le<_e.length;Le++){const Pe=_e[Le],Ue=K[Pe],Ke=le[Pe];(Ke!==Ue||Pe==="value")&&s(W,Pe,Ue,Ke,F,M)}}X&1&&x.children!==z.children&&u(W,z.children)}else!G&&B==null&&be(W,K,le,M,F);((ue=le.onVnodeUpdated)||de)&&bt(()=>{ue&&$t(ue,M,z,x),de&&bn(z,x,M,"updated")},T)},oe=(x,z,M,T,F,j,G)=>{for(let W=0;W<z.length;W++){const X=x[W],B=z[W],de=X.el||is(X),K=de&&(X.type===ie||!yn(X,B)||X.shapeFlag&198)?d(de):M;h(X,B,K,null,T,F,j,G,!0)}},be=(x,z,M,T,F)=>{if(z!==M){if(z!==Ve)for(const j in z)!er(j)&&!(j in M)&&s(x,j,z[j],null,F,T);for(const j in M){if(er(j))continue;const G=M[j],W=z[j];G!==W&&j!=="value"&&s(x,j,W,G,F,T)}"value"in M&&s(x,"value",z.value,M.value,F)}},U=(x,z,M,T,F,j,G,W,X)=>{const B=z.el=x?x.el:a(""),de=z.anchor=x?x.anchor:a("");let{patchFlag:K,dynamicChildren:le,slotScopeIds:ue}=z;ue&&(W=W?W.concat(ue):ue),x==null?(r(B,M,T),r(de,M,T),V(z.children||[],M,de,F,j,G,W,X)):K>0&&K&64&&le&&x.dynamicChildren&&x.dynamicChildren.length===le.length?(oe(x.dynamicChildren,le,M,F,j,G,W),(z.key!=null||F&&z===F.subTree)&&Cl(x,z,!0)):fe(x,z,M,de,F,j,G,W,X)},ye=(x,z,M,T,F,j,G,W,X)=>{z.slotScopeIds=W,x==null?z.shapeFlag&512?F.ctx.activate(z,M,T,G,X):Fe(z,M,T,F,j,G,X):je(x,z,X)},Fe=(x,z,M,T,F,j,G)=>{const W=x.component=bu(x,T,F);if(mo(x)&&(W.ctx.renderer=H),gu(W,!1,G),W.asyncDep){if(F&&F.registerDep(W,ze,G,j),!x.el){const X=W.subTree=k(ot);S(null,X,z,M),x.placeholder=X.el}}else ze(W,x,z,M,F,j,G)},je=(x,z,M)=>{const T=z.component=x.component;if(Zd(x,z,M))if(T.asyncDep&&!T.asyncResolved){z.el=x.el,z.placeholder=x.placeholder,xe(T,z,M);return}else T.next=z,T.update();else z.el=x.el,z.placeholder=x.placeholder,T.vnode=z},ze=(x,z,M,T,F,j,G)=>{const W=()=>{if(x.isMounted){let{next:K,bu:le,u:ue,parent:_e,vnode:Le}=x;{const v=Sl(x);if(v){K&&(K.el=Le.el,xe(x,K,G)),v.asyncDep.then(()=>{bt(()=>{x.isUnmounted||B()},F)});return}}let Pe=K,Ue;gn(x,!1),K?(K.el=Le.el,xe(x,K,G)):K=Le,le&&Fr(le),(Ue=K.props&&K.props.onVnodeBeforeUpdate)&&$t(Ue,_e,K,Le),gn(x,!0);const Ke=ai(x),Ne=x.subTree;x.subTree=Ke,h(Ne,Ke,d(Ne.el),L(Ne),x,F,j),K.el=Ke.el,Pe===null&&Jd(x,Ke.el),ue&&bt(ue,F),(Ue=K.props&&K.props.onVnodeUpdated)&&bt(()=>$t(Ue,_e,K,Le),F)}else{let K;const{el:le,props:ue}=z,{bm:_e,m:Le,parent:Pe,root:Ue,type:Ke}=x,Ne=En(z);gn(x,!1),_e&&Fr(_e),!Ne&&(K=ue&&ue.onVnodeBeforeMount)&&$t(K,Pe,z),gn(x,!0);{Ue.ce&&Ue.ce._hasShadowRoot()&&Ue.ce._injectChildStyle(Ke,x.parent?x.parent.type:void 0);const v=x.subTree=ai(x);h(null,v,M,T,x,F,j),z.el=v.el}if(Le&&bt(Le,F),!Ne&&(K=ue&&ue.onVnodeMounted)){const v=z;bt(()=>$t(K,Pe,v),F)}(z.shapeFlag&256||Pe&&En(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&x.a&&bt(x.a,F),x.isMounted=!0,z=M=T=null}};x.scope.on();const X=x.effect=new Ia(W);x.scope.off();const B=x.update=X.run.bind(X),de=x.job=X.runIfDirty.bind(X);de.i=x,de.id=x.uid,X.scheduler=()=>Rs(de),gn(x,!0),B()},xe=(x,z,M)=>{z.component=x;const T=x.vnode.props;x.vnode=z,x.next=null,eu(x,z.props,T,M),ou(x,z.children,M),Vt(),Wa(x),Dt()},fe=(x,z,M,T,F,j,G,W,X=!1)=>{const B=x&&x.children,de=x?x.shapeFlag:0,K=z.children,{patchFlag:le,shapeFlag:ue}=z;if(le>0){if(le&128){te(B,K,M,T,F,j,G,W,X);return}else if(le&256){Oe(B,K,M,T,F,j,G,W,X);return}}ue&8?(de&16&&Ce(B,F,j),K!==B&&u(M,K)):de&16?ue&16?te(B,K,M,T,F,j,G,W,X):Ce(B,F,j,!0):(de&8&&u(M,""),ue&16&&V(K,M,T,F,j,G,W,X))},Oe=(x,z,M,T,F,j,G,W,X)=>{x=x||kn,z=z||kn;const B=x.length,de=z.length,K=Math.min(B,de);let le;for(le=0;le<K;le++){const ue=z[le]=X?Ut(z[le]):Et(z[le]);h(x[le],ue,M,null,F,j,G,W,X)}B>de?Ce(x,F,j,!0,!1,K):V(z,M,T,F,j,G,W,X,K)},te=(x,z,M,T,F,j,G,W,X)=>{let B=0;const de=z.length;let K=x.length-1,le=de-1;for(;B<=K&&B<=le;){const ue=x[B],_e=z[B]=X?Ut(z[B]):Et(z[B]);if(yn(ue,_e))h(ue,_e,M,null,F,j,G,W,X);else break;B++}for(;B<=K&&B<=le;){const ue=x[K],_e=z[le]=X?Ut(z[le]):Et(z[le]);if(yn(ue,_e))h(ue,_e,M,null,F,j,G,W,X);else break;K--,le--}if(B>K){if(B<=le){const ue=le+1,_e=ue<de?z[ue].el:T;for(;B<=le;)h(null,z[B]=X?Ut(z[B]):Et(z[B]),M,_e,F,j,G,W,X),B++}}else if(B>le)for(;B<=K;)Se(x[B],F,j,!0),B++;else{const ue=B,_e=B,Le=new Map;for(B=_e;B<=le;B++){const qe=z[B]=X?Ut(z[B]):Et(z[B]);qe.key!=null&&Le.set(qe.key,B)}let Pe,Ue=0;const Ke=le-_e+1;let Ne=!1,v=0;const fn=new Array(Ke);for(B=0;B<Ke;B++)fn[B]=0;for(B=ue;B<=K;B++){const qe=x[B];if(Ue>=Ke){Se(qe,F,j,!0);continue}let q;if(qe.key!=null)q=Le.get(qe.key);else for(Pe=_e;Pe<=le;Pe++)if(fn[Pe-_e]===0&&yn(qe,z[Pe])){q=Pe;break}q===void 0?Se(qe,F,j,!0):(fn[q-_e]=B+1,q>=v?v=q:Ne=!0,h(qe,z[q],M,null,F,j,G,W,X),Ue++)}const Z=Ne?lu(fn):kn;for(Pe=Z.length-1,B=Ke-1;B>=0;B--){const qe=_e+B,q=z[qe],mn=z[qe+1],qs=qe+1<de?mn.el||is(mn):T;fn[B]===0?h(null,q,M,qs,F,j,G,W,X):Ne&&(Pe<0||B!==Z[Pe]?We(q,M,qs,2):Pe--)}}},We=(x,z,M,T,F=null)=>{const{el:j,type:G,transition:W,children:X,shapeFlag:B}=x;if(B&6){We(x.component.subTree,z,M,T);return}if(B&128){x.suspense.move(z,M,T);return}if(B&64){G.move(x,z,M,H);return}if(G===ie){r(j,z,M);for(let K=0;K<X.length;K++)We(X[K],z,M,T);r(x.anchor,z,M);return}if(G===Or){_(x,z,M);return}if(T!==2&&B&1&&W)if(T===0)W.persisted&&!j[vt]?r(j,z,M):(W.beforeEnter(j),r(j,z,M),bt(()=>W.enter(j),F));else{const{leave:K,delayLeave:le,afterLeave:ue}=W,_e=()=>{x.ctx.isUnmounted?o(j):r(j,z,M)},Le=()=>{const Pe=j._isLeaving||!!j[vt];j._isLeaving&&j[vt](!0),W.persisted&&!Pe?_e():K(j,()=>{_e(),ue&&ue()})};le?le(j,_e,Le):Le()}else r(j,z,M)},Se=(x,z,M,T=!1,F=!1)=>{const{type:j,props:G,ref:W,children:X,dynamicChildren:B,shapeFlag:de,patchFlag:K,dirs:le,cacheIndex:ue,memo:_e}=x;if((K===-2||B&&B.hasOnce)&&(F=!1),W!=null&&(Vt(),rr(W,null,M,x,!0),Dt()),ue!=null&&(!x.ctx||x.ctx===z)&&(z.renderCache[ue]=void 0),de&256){z.ctx.deactivate(x);return}const Le=de&1&&le,Pe=!En(x);let Ue;if(Pe&&(Ue=G&&G.onVnodeBeforeUnmount)&&$t(Ue,z,x),de&6)Ie(x.component,M,T);else{if(de&128){x.suspense.unmount(M,T);return}Le&&bn(x,null,z,"beforeUnmount"),de&64?x.type.remove(x,z,M,H,T):B&&!B.hasOnce&&(j!==ie||K>0&&K&64)?Ce(B,z,M,!1,!0):(j===ie&&K&384||!F&&de&16)&&Ce(X,z,M),T&&ct(x)}const Ke=_e!=null&&ue==null;(Pe&&(Ue=G&&G.onVnodeUnmounted)||Le||Ke)&&bt(()=>{Ue&&$t(Ue,z,x),Le&&bn(x,null,z,"unmounted"),Ke&&(x.el=null)},M)},ct=x=>{const{type:z,el:M,anchor:T,transition:F}=x,j=z===ie;if(j&&!F){Be(M,T);return}if(z===Or){A(x),F&&!F.persisted&&F.afterLeave&&F.afterLeave();return}const G=j?br(x):x,W=()=>{j?d(M)&&Be(M,T):o(M),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(G&&G.shapeFlag&1&&F&&!F.persisted){const{leave:X,delayLeave:B}=F,de=G.el,K=()=>X(de,W);B?B(de,W,K):K()}else W()},Be=(x,z)=>{let M;for(;x!==z;)M=m(x),o(x),x=M;o(z)},Ie=(x,z,M)=>{const{bum:T,scope:F,job:j,subTree:G,um:W,m:X,a:B}=x;di(X),di(B),T&&Fr(T),F.stop(),j?(j.flags|=8,Se(G,x,z,M)):x.vnode.el&&G&&(G.transition=x.vnode.transition,Se(G,x,z,M)),W&&bt(W,z),bt(()=>{x.isUnmounted=!0},z)},Ce=(x,z,M,T=!1,F=!1,j=0)=>{for(let G=j;G<x.length;G++)Se(x[G],z,M,T,F)},L=x=>{if(x.shapeFlag&6)return L(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const z=m(x.anchor||x.el),M=z&&z[Sd];return M?m(M):z},Q=(x,z,M)=>{const T=x&&z._vnode?void 0:x&&x.component?x.component.uid:mu();wd(()=>{x==null?z._vnode&&Se(z._vnode,null,null,!0):h(z._vnode||null,x,z,null,null,null,M),z._vnode=x},T)},H={p:h,um:Se,m:We,r:ct,mt:Fe,mc:V,pc:fe,pbc:oe,n:L,o:e};return{render:Q,hydrate:void 0,createApp:Ud(Q)}}function Mo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function gn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function au(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Cl(e,t,n=!1){const r=e.children,o=t.children;if(ge(r)&&ge(o))for(let s=0;s<r.length;s++){const l=r[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=Ut(o[s]),a.el=l.el),!n&&a.patchFlag!==-2&&Cl(l,a)),a.type===ho&&(a.patchFlag===-1&&(a=o[s]=Ut(a)),a.el=l.el),a.type===ot&&!a.el&&(a.el=l.el)}}function lu(e){const t=e.slice(),n=[0];let r,o,s,l,a;const c=e.length;for(r=0;r<c;r++){const p=e[r];if(p!==0){if(o=n[n.length-1],e[o]<p){t[r]=o,n.push(r);continue}for(s=0,l=n.length-1;s<l;)a=s+l>>1,e[n[a]]<p?s=a+1:l=a;p<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,l=n[s-1];s-- >0;)n[s]=l,l=t[l];return n}function Sl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Sl(t)}function di(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function is(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?is(t.subTree):null}const Il=e=>e.__isSuspense;function cu(e,t){t&&t.pendingBranch?ge(e)?t.effects.push(...e):t.effects.push(e):kd(e)}const ie=Symbol.for("v-fgt"),ho=Symbol.for("v-txt"),ot=Symbol.for("v-cmt"),Or=Symbol.for("v-stc"),Yt=[];let gt=null;function b(e=!1){Yt.push(gt=e?null:[])}function Os(){Yt.pop(),gt=Yt[Yt.length-1]||null}let gr=1;function Yr(e,t=!1){gr+=e,e<0&&gt&&t&&(gt.hasOnce=!0)}function Al(e){return e.dynamicChildren=gr>0?gt||kn:null,Os(),gr>0&&gt&&gt.push(e),e}function g(e,t,n,r,o,s){return Al(i(e,t,n,r,o,s,!0))}function me(e,t,n,r,o){return Al(k(e,t,n,r,o,!0))}function Ln(e){return e?e.__v_isVNode===!0:!1}function yn(e,t){return e.type===t.type&&e.key===t.key}const $l=({key:e})=>e??null,Vr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?He(e)||lt(e)||ve(e)?{i:rt,r:e,k:t,f:!!n}:e:null);function i(e,t=null,n=null,r=0,o=null,s=e===ie?0:1,l=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$l(t),ref:t&&Vr(t),scopeId:Ka,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:rt};return a?(Kr(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),gr>0&&!l&&gt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&gt.push(c),c}const k=du;function du(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===ll)&&(e=ot),Ln(e)){const a=dn(e,t,!0);return n&&Kr(a,n),gr>0&&!s&&gt&&(a.shapeFlag&6?gt[gt.indexOf(e)]=a:gt.push(a)),a.patchFlag=-2,a}if(ku(e)&&(e=e.__vccOpts),t){t=uu(t);let{class:a,style:c}=t;a&&!He(a)&&(t.class=$(a)),Ee(c)&&(Ts(c)&&!ge(c)&&(c=Ye({},c)),t.style=he(c))}const l=He(e)?1:Il(e)?128:fo(e)?64:Ee(e)?4:ve(e)?2:0;return i(e,t,n,r,o,l,s,!0)}function uu(e){return e?Ts(e)||vl(e)?Ye({},e):e:null}function dn(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:l,children:a,transition:c}=e,p=t?pu(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&$l(p),ref:t&&t.ref?n&&s?ge(s)?s.concat(Vr(t)):[s,Vr(t)]:Vr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ie?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dn(e.ssContent),ssFallback:e.ssFallback&&dn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&cn(u,c.clone(u)),u}function Ae(e=" ",t=0){return k(ho,null,e,t)}function as(e,t){const n=k(Or,null,e);return n.staticCount=t,n}function J(e="",t=!1){return t?(b(),me(ot,null,e)):k(ot,null,e)}function Et(e){return e==null||typeof e=="boolean"?k(ot):ge(e)?k(ie,null,e.slice()):Ln(e)?Ut(e):k(ho,null,String(e))}function Ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dn(e)}function Kr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ge(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Kr(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!vl(t)?t._ctx=rt:o===3&&rt&&(rt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(ve(t)){if(r&65){Kr(e,{default:t});return}t={default:t,_ctx:rt},n=32}else t=String(t),r&64?(n=16,t=[Ae(t)]):n=8;e.children=t,e.shapeFlag|=n}function pu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=$([t.class,r.class]));else if(o==="style")t.style=he([t.style,r.style]);else if(ro(o)){const s=t[o],l=r[o];l&&s!==l&&!(ge(s)&&s.includes(l))?t[o]=s?[].concat(s,l):l:l==null&&s==null&&!oo(o)&&(t[o]=l)}else o!==""&&(t[o]=r[o])}return t}function $t(e,t,n,r=null){wt(e,t,7,[n,r])}const fu=fl();let Ml=0;function mu(){return Ml}function bu(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||fu,s={uid:Ml++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kl(r,o),emitsOptions:ml(r,o),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Wd.bind(null,s),e.ce&&e.ce(s),s}let at=null;const xo=()=>at||rt;let Zr,hr;{const e=ao(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),s=>{o.length>1?o.forEach(l=>l(s)):o[0](s)}};Zr=t("__VUE_INSTANCE_SETTERS__",n=>at=n),hr=t("__VUE_SSR_SETTERS__",n=>xr=n)}const _r=e=>{const t=at;return Zr(e),e.scope.on(),()=>{e.scope.off(),Zr(t)}},ui=()=>{at&&at.scope.off(),Zr(null)};function Pl(e){return e.vnode.shapeFlag&4}let xr=!1;function gu(e,t=!1,n=!1){t&&hr(t);const{props:r,children:o}=e.vnode,s=Pl(e);Qd(e,r,s,t),ru(e,o,n||t);const l=s?hu(e,t):void 0;return t&&hr(!1),l}function hu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Vd);const{setup:r}=n;if(r){Vt();const o=e.setupContext=r.length>1?vu(e):null,s=_r(e),l=wr(r,e,0,[e.props,o]),a=ya(l);if(Dt(),s(),(a||e.sp)&&!En(e)&&rl(e),a){if(l.then(ui,ui),t)return l.then(c=>{hr(!0);try{pi(e,c,t)}finally{hr(!1)}}).catch(c=>{po(c,e,0)});e.asyncDep=l}else pi(e,l)}else Tl(e)}function pi(e,t,n){ve(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ee(t)&&(e.setupState=Ga(t)),Tl(e)}function Tl(e,t,n){const r=e.type;e.render||(e.render=r.render||Lt);{const o=_r(e);Vt();try{Dd(e)}finally{Dt(),o()}}}const xu={get(e,t){return it(e,"get",""),e[t]}};function vu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,xu),slots:e.slots,emit:e.emit,expose:t}}function vo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ga(ud(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in or)return or[n](e)},has(t,n){return n in t||n in or}})):e.proxy}function yu(e,t=!0){return ve(e)?e.displayName||e.name:e.name||t&&e.__name}function ku(e){return ve(e)&&"__vccOpts"in e}const ee=(e,t)=>gd(e,t,xr);function On(e,t,n){try{Yr(-1);const r=arguments.length;return r===2?Ee(t)&&!ge(t)?Ln(t)?k(e,null,[t]):k(e,t):k(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ln(n)&&(n=[n]),k(e,t,n))}finally{Yr(1)}}const wu="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ls;const fi=typeof window<"u"&&window.trustedTypes;if(fi)try{ls=fi.createPolicy("vue",{createHTML:e=>e})}catch{}const Rl=ls?e=>ls.createHTML(e):e=>e,zu="http://www.w3.org/2000/svg",_u="http://www.w3.org/1998/Math/MathML",Gt=typeof document<"u"?document:null,mi=Gt&&Gt.createElement("template"),Cu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?Gt.createElementNS(zu,e):t==="mathml"?Gt.createElementNS(_u,e):n?Gt.createElement(e,{is:n}):Gt.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Gt.createTextNode(e),createComment:e=>Gt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const l=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{mi.innerHTML=Rl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=mi.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Jt="transition",Un="animation",Vn=Symbol("_vtc"),El={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fl=Ye({},el,El),Su=e=>(e.displayName="Transition",e.props=Fl,e),At=Su((e,{slots:t})=>On(Ad,Ll(e),t)),hn=(e,t=[])=>{ge(e)?e.forEach(n=>n(...t)):e&&e(...t)},bi=e=>e?ge(e)?e.some(t=>t.length>1):e.length>1:!1;function Ll(e){const t={};for(const U in e)U in El||(t[U]=e[U]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:p=l,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,w=Iu(o),h=w&&w[0],C=w&&w[1],{onBeforeEnter:S,onEnter:y,onEnterCancelled:_,onLeave:A,onLeaveCancelled:R,onBeforeAppear:O=S,onAppear:N=y,onAppearCancelled:V=_}=t,D=(U,ye,Fe,je)=>{U._enterCancelled=je,tn(U,ye?u:a),tn(U,ye?p:l),Fe&&Fe()},oe=(U,ye)=>{U._isLeaving=!1,tn(U,d),tn(U,f),tn(U,m),ye&&ye()},be=U=>(ye,Fe)=>{const je=U?N:y,ze=()=>D(ye,U,Fe);hn(je,[ye,ze]),gi(()=>{tn(ye,U?c:s),Pt(ye,U?u:a),bi(je)||hi(ye,r,h,ze)})};return Ye(t,{onBeforeEnter(U){hn(S,[U]),Pt(U,s),Pt(U,l)},onBeforeAppear(U){hn(O,[U]),Pt(U,c),Pt(U,p)},onEnter:be(!1),onAppear:be(!0),onLeave(U,ye){U._isLeaving=!0;const Fe=()=>oe(U,ye);Pt(U,d),U._enterCancelled?(Pt(U,m),cs(U)):(cs(U),Pt(U,m)),gi(()=>{U._isLeaving&&(tn(U,d),Pt(U,f),bi(A)||hi(U,r,C,Fe))}),hn(A,[U,Fe])},onEnterCancelled(U){D(U,!1,void 0,!0),hn(_,[U])},onAppearCancelled(U){D(U,!0,void 0,!0),hn(V,[U])},onLeaveCancelled(U){oe(U),hn(R,[U])}})}function Iu(e){if(e==null)return null;if(Ee(e))return[Po(e.enter),Po(e.leave)];{const t=Po(e);return[t,t]}}function Po(e){return Vc(e)}function Pt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Vn]||(e[Vn]=new Set)).add(t)}function tn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Vn];n&&(n.delete(t),n.size||(e[Vn]=void 0))}function gi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Au=0;function hi(e,t,n,r){const o=e._endId=++Au,s=()=>{o===e._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:l,timeout:a,propCount:c}=Ol(e,t);if(!l)return r();const p=l+"end";let u=0;const d=()=>{e.removeEventListener(p,m),s()},m=f=>{f.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),e.addEventListener(p,m)}function Ol(e,t){const n=window.getComputedStyle(e),r=w=>(n[w]||"").split(", "),o=r(`${Jt}Delay`),s=r(`${Jt}Duration`),l=xi(o,s),a=r(`${Un}Delay`),c=r(`${Un}Duration`),p=xi(a,c);let u=null,d=0,m=0;t===Jt?l>0&&(u=Jt,d=l,m=s.length):t===Un?p>0&&(u=Un,d=p,m=c.length):(d=Math.max(l,p),u=d>0?l>p?Jt:Un:null,m=u?u===Jt?s.length:c.length:0);const f=u===Jt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Jt}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:f}}function xi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>vi(n)+vi(e[r])))}function vi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function cs(e){return(e?e.ownerDocument:document).body.offsetHeight}function $u(e,t,n){const r=e[Vn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Jr=Symbol("_vod"),Vs=Symbol("_vsh"),To={name:"show",beforeMount(e,{value:t},{transition:n}){e[Jr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):qn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),qn(e,!0),r.enter(e)):r.leave(e,()=>{qn(e,!1)}):qn(e,t))},beforeUnmount(e,{value:t}){qn(e,t)}};function qn(e,t){e.style.display=t?e[Jr]:"none",e[Vs]=!t}const Mu=Symbol(""),Pu=/(?:^|;)\s*display\s*:/;function Tu(e,t,n){const r=e.style,o=He(n);let s=!1;if(n&&!o){if(t)if(He(t))for(const l of t.split(";")){const a=l.slice(0,l.indexOf(":")).trim();n[a]==null&&Zn(r,a,"")}else for(const l in t)n[l]==null&&Zn(r,l,"");for(const l in n){l==="display"&&(s=!0);const a=n[l];a!=null?Eu(e,l,!He(t)&&t?t[l]:void 0,a)||Zn(r,l,a):Zn(r,l,"")}}else if(o){if(t!==n){const l=r[Mu];l&&(n+=";"+l),r.cssText=n,s=Pu.test(n)}}else t&&e.removeAttribute("style");Jr in e&&((!o||t!==n)&&(e[Jr]=s?r.display:""),e[Vs]&&(r.display="none"))}const Ar=/\s*!important$/;function Zn(e,t,n){if(ge(n))n.forEach(r=>Zn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))Ar.test(n)?e.setProperty(t,n.replace(Ar,""),"important"):e.setProperty(t,n);else{const r=Ru(e,t);Ar.test(n)?e.setProperty(un(r),n.replace(Ar,""),"important"):e[r]=n}}const yi=["Webkit","Moz","ms"],Ro={};function Ru(e,t){const n=Ro[t];if(n)return n;let r=mt(t);if(r!=="filter"&&r in e)return Ro[t]=r;r=io(r);for(let o=0;o<yi.length;o++){const s=yi[o]+r;if(s in e)return Ro[t]=s}return t}function Eu(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&He(r)&&n===r}const ki="http://www.w3.org/1999/xlink";function wi(e,t,n,r,o,s=Gc(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ki,t.slice(6,t.length)):e.setAttributeNS(ki,t,n):n==null||s&&!_a(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Ct(n)?String(n):n)}function zi(e,t,n,r,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Rl(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=_a(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(o||t)}function An(e,t,n,r){e.addEventListener(t,n,r)}function Fu(e,t,n,r){e.removeEventListener(t,n,r)}const _i=Symbol("_vei");function Lu(e,t,n,r,o=null){const s=e[_i]||(e[_i]={}),l=s[t];if(r&&l)l.value=r;else{const[a,c]=Du(t);if(r){const p=s[t]=Nu(r,o);An(e,a,p,c)}else l&&(Fu(e,a,l,c),s[t]=void 0)}}const Ou=/(Once|Passive|Capture)$/,Vu=/^on:?(?:Once|Passive|Capture)$/;function Du(e){let t,n;for(;(n=e.match(Ou))&&!Vu.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):un(e.slice(2)),t]}let Eo=0;const ju=Promise.resolve(),Bu=()=>Eo||(ju.then(()=>Eo=0),Eo=Date.now());function Nu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const o=n.value;if(ge(o)){const s=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{s.call(r),r._stopped=!0};const l=o.slice(),a=[r];for(let c=0;c<l.length&&!r._stopped;c++){const p=l[c];p&&wt(p,t,5,a)}}else wt(o,t,5,[r])};return n.value=e,n.attached=Bu(),n}const Ci=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hu=(e,t,n,r,o,s)=>{const l=o==="svg";t==="class"?$u(e,r,l):t==="style"?Tu(e,n,r):ro(t)?oo(t)||Lu(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gu(e,t,r,l))?(zi(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&wi(e,t,r,l,s,t!=="value")):e._isVueCE&&(Uu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!He(r)))?zi(e,mt(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),wi(e,t,r,l))};function Gu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ci(t)&&ve(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Ci(t)&&He(n)?!1:t in e}function Uu(e,t){const n=e._def.props;if(!n)return!1;const r=mt(t);return Array.isArray(n)?n.some(o=>mt(o)===r):Object.keys(n).some(o=>mt(o)===r)}const Vl=new WeakMap,Dl=new WeakMap,Qr=Symbol("_moveCb"),Si=Symbol("_enterCb"),ds=new WeakMap,qu=e=>(delete e.props.mode,e),Wu=qu({name:"TransitionGroup",props:Ye({},Fl,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=xo(),r=Qa();let o,s,l,a;const c=()=>(a===void 0&&(a=o.length>0&&tp(o[0].el,n.vnode.el,Ii(e))),a);return sl(()=>{if(ds.delete(n),!c()){o=[],l=void 0;return}const p=Ii(e);o.forEach(Yu);const u=l&&ep(l,n.vnode.el);l=void 0,o.forEach(m=>Ku(m,u));const d=o.filter(Zu);cs(n.vnode.el),d.forEach(m=>{const f=m.el,w=f.style;Pt(f,p),w.transform=w.webkitTransform=w.transitionDuration="";const h=f[Qr]=C=>{C&&C.target!==f||(!C||C.propertyName.endsWith("transform"))&&(f.removeEventListener("transitionend",h),f[Qr]=null,tn(f,p))};f.addEventListener("transitionend",h)}),o=[]}),()=>{const p=$e(e),u=Ll(p);let d=p.tag||ie;if(o=[],a=void 0,s)for(let m=0;m<s.length;m++){const f=s[m];f.el&&f.el instanceof Element&&!f.el[Vs]&&(o.push(f),cn(f,mr(f,u,r,n)),Vl.set(f,yo(f.el)))}s=t.default?Es(t.default()):[];for(let m=0;m<s.length;m++){const f=s[m];f.key!=null&&cn(f,mr(f,u,r,n))}return o.length&&(l=Ju(n),ds.set(n,c)),k(d,null,s)}}}),Xu=Wu;function Yu(e){const t=e.el;t[Qr]&&t[Qr](),t[Si]&&t[Si]()}function Ii(e){return e.moveClass||`${e.name||"v"}-move`}function Ku(e,t){Dl.set(e,yo(e.el,t))}function Zu(e){const t=Vl.get(e),n=Dl.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const s=e.el,l=s.style,a=s.getBoundingClientRect();let c=1,p=1;return s.offsetWidth&&(c=a.width/s.offsetWidth),s.offsetHeight&&(p=a.height/s.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(p)||p===0)&&(p=1),Math.abs(c-1)<.01&&(c=1),Math.abs(p-1)<.01&&(p=1),l.transform=l.webkitTransform=`translate(${r/c}px,${o/p}px)`,l.transitionDuration="0s",e}}function yo(e,t){const n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function Ju(e){let t;for(let n=e.parent;n;n=n.parent){const r=ds.get(n);if(r){const o=Qu(n.vnode.el,e.vnode.el);o&&(t||(t=[])).push(Ye(yo(o),{item:o,willMove:r}))}}return t}function Qu(e,t){const n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function ep(e,t){const n=e.find(r=>r.willMove()&&r.item.contains(t));return n&&yo(n.item,n)}function tp(e,t,n){const r=e.cloneNode(),o=e[Vn];o&&o.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(r);const{hasTransform:l}=Ol(r);return s.removeChild(r),l}const Ai=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ge(t)?n=>Fr(t,n):t};function np(e){e.target.composing=!0}function $i(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const $r=Symbol("_assign"),Mr=Symbol("_initialValue");function Fo(e,t,n){return t&&(e=e.trim()),n&&(e=Cs(e)),e}const Ds={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e.parentNode&&(e.type==="text"?e[Mr]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Mr]=e.defaultValue.replace(/\r\n?/g,`
`))),e[$r]=Ai(o);const s=r||o.props&&o.props.type==="number";An(e,t?"change":"input",l=>{l.target.composing||e[$r](Fo(e.value,n,s))}),(n||s)&&An(e,"change",()=>{e.value=Fo(e.value,n,s)}),t||(An(e,"compositionstart",np),An(e,"compositionend",$i),An(e,"change",$i))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const o=t??"",s=e[Mr];delete e[Mr],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[$r](Fo(e.value,n,r)):e.value=o},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:o,number:s}},l){if(e[$r]=Ai(l),e.composing)return;const a=(s||e.type==="number")&&!/^0\d/.test(e.value)?Cs(e.value):e.value,c=t??"";if(a===c)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(r&&t===n||o&&e.value.trim()===c)||(e.value=c)}},rp=["ctrl","shift","alt","meta"],op={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>rp.some(n=>e[`${n}Key`]&&!t.includes(n))},Kt=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((o,...s)=>{for(let l=0;l<t.length;l++){const a=op[t[l]];if(a&&a(o,t))return}return e(o,...s)}))},sp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Mi=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(o=>{if(!("key"in o))return;const s=un(o.key);if(t.some(l=>l===s||sp[l]===s))return e(o)}))},ip=Ye({patchProp:Hu},Cu);let Pi;function ap(){return Pi||(Pi=su(ip))}const lp=((...e)=>{const t=ap().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=dp(r);if(!o)return;const s=t._component;!ve(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const l=n(o,!1,cp(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},t});function cp(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function dp(e){return He(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:r,iconNode:o,name:s,class:l,...a},{slots:c})=>On("svg",{...Pr,width:e||Pr.width,height:e||Pr.height,stroke:r||Pr.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${up(s??"icon")}`],...a},[...o.map(p=>On(...p)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(e,t)=>(n,{slots:r})=>On(pp,{...n,iconNode:t,name:e},r);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=ce("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=ce("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=ce("ArrowUpIcon",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=ce("AtSignIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=ce("BellIcon",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=ce("BookmarkIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=ce("BotIcon",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=ce("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=ce("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=ce("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=ce("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=ce("ChevronsLeftRightIcon",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=ce("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=ce("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=ce("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=ce("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=ce("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=ce("CompassIcon",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=ce("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=ce("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=ce("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=ce("EllipsisIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=ce("EyeOffIcon",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=ce("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=ce("FilmIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=ce("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=ce("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=ce("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=ce("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=ce("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=ce("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=ce("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=ce("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=ce("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=ce("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=ce("PaperclipIcon",[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=ce("PinIcon",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=ce("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=ce("RepeatIcon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=ce("RocketIcon",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=ce("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=ce("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=ce("SettingsIcon",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=ce("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=ce("SlidersHorizontalIcon",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=ce("SlidersVerticalIcon",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=ce("SmilePlusIcon",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=ce("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=ce("SquareIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=ce("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=ce("TagIcon",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=ce("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=ce("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=ce("TrendingDownIcon",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=ce("TrendingUpIcon",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=ce("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=ce("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=ce("WrenchIcon",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=ce("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=ce("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Vp=se({__name:"ThemeToggle",setup(e){const t=E(!0);function n(){t.value=!t.value,t.value?(document.documentElement.classList.add("dark"),localStorage.setItem("aura-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("aura-theme","light"))}return et(()=>{const r=localStorage.getItem("aura-theme");r?t.value=r==="dark":t.value=window.matchMedia("(prefers-color-scheme: dark)").matches,t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),(r,o)=>(b(),g("button",{type:"button",class:"relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"切换亮色 / 暗色模式",onClick:n},[t.value?(b(),me(I(Rp),{key:0,class:"h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400"})):(b(),me(I(wp),{key:1,class:"h-4 w-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-indigo-600"}))]))}}),fs=[{id:"forms-inputs",name:"表单与高阶输入套件",englishName:"Forms & Advanced Inputs",description:"Figma 拖拽数值微调、实时密码学强度仪表盘、金融级自适应金额与智能体 @ 呼出输入框",badgeColor:"text-amber-500 bg-amber-500/10 border-amber-500/20",iconName:"Sliders"},{id:"tactile-actions",name:"触觉反馈与原子操作套件",englishName:"Tactile & Actions Suite",description:"长按蓄力物理确认、原地渐变二次确认、物理微压与矢量形变操作矩阵",badgeColor:"text-rose-500 bg-rose-500/10 border-rose-500/20",iconName:"Zap"},{id:"ai-native",name:"AI 原生与智能体套件",englishName:"AI & Agent Suite",description:"面向大模型工作流、思考链路、代码终端与指令交互的原生动效矩阵",badgeColor:"text-sky-500 bg-sky-500/10 border-sky-500/20",iconName:"Bot"},{id:"interactive-nav",name:"交互与高阶导航套件",englishName:"Interactive & Navigation",description:"以余弦物理、流体胶囊指示器与视口裁切驱动的极佳手感交互",badgeColor:"text-blue-500 bg-blue-500/10 border-blue-500/20",iconName:"Compass"},{id:"space-3d",name:"空间与 3D 纵深套件",englishName:"3D Space & Atmosphere",description:"同心公转轨道、赛博网格、极光破晓天灯与粒子微光氛围",badgeColor:"text-indigo-500 bg-indigo-500/10 border-indigo-500/20",iconName:"Globe"},{id:"borders-cards",name:"流光卡片与微光边框套件",englishName:"Borders & Bento Cards",description:"沿着圆角边框流动的渐变光束与多维信息科技网格便当盒",badgeColor:"text-purple-500 bg-purple-500/10 border-purple-500/20",iconName:"Layers"},{id:"kinetic-typography",name:"文字与动态排版套件",englishName:"Kinetic Typography",description:"连续金属扫光、平滑毫秒数值翻滚与无限无缝平滑跑马灯",badgeColor:"text-emerald-500 bg-emerald-500/10 border-emerald-500/20",iconName:"Sparkles"}],on=[{id:"border-beam",name:"BorderBeam",title:"Border Beam（跑马流光渐变边框）",category:"Effect",suiteId:"borders-cards",description:"沿着容器圆角边框匀速流动的彩色流光光束。大模型生成状态、VIP 特权卡片、核心功能高亮的科技感标配。",componentFilename:"BorderBeam.vue",componentCode:`<script setup lang="ts">
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
        'border-zinc-200/90 hover:border-zinc-300 dark:border-zinc-800/90 dark:hover:border-zinc-700',
        'bg-white/85 dark:bg-zinc-950/85',
        props.class
      )
    "
  >
    <!-- 主输入区域 -->
    <div class="p-3 sm:p-4 pb-2">
      <textarea
        ref="textareaRef"
        v-model="internalValue"
        :placeholder="props.placeholder"
        rows="1"
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
    <div class="relative flex items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900">
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

    <div class="relative flex items-baseline border-b border-zinc-200/90 pb-3 transition-colors dark:border-zinc-800">
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
        'flex h-10 items-center overflow-hidden rounded-xl border bg-white shadow-2xs transition-all dark:bg-zinc-900',
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
        'group flex min-h-10 w-full max-w-md flex-wrap items-center gap-1.5 rounded-xl border border-zinc-200/90 bg-white p-2 shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900 cursor-text select-none',
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

const tags = ref(['DeepSeek', 'Vue3', 'Tailwind', 'TypeScript'])
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
  { id: '1', name: 'Aura Assistant', handle: 'aura_ai', role: '全栈架构 Agent', isBot: true },
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
    <div class="relative flex flex-col rounded-2xl border border-zinc-200/90 bg-white p-3 shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900">
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
</template>`,propsList:[{name:"progress",type:"number",default:"0",description:"当前进度百分比 (0 - 100)"},{name:"size",type:"number",default:"56",description:"环形按钮总像素尺寸"},{name:"strokeWidth",type:"number",default:"4",description:"环形轨道笔触粗细"}]},{id:"glowing-card",name:"Glowing Card",title:"流光渐变边框卡片（Ambient Glow & Flowing Border）",category:"Cards",suiteId:"borders-cards",description:"双层渐变流光卡片。底层采用平滑旋转扩散光晕（Blur 24px），顶层通过 1px 细微发丝遮罩勾勒出具有 Apple / Linear 高端质感的动态流转外边框。",componentFilename:"GlowingCard.vue",componentCode:`<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface GlowingCardProps {
  glowColor?: string
  duration?: number
  blur?: number
  hoverOnly?: boolean
  class?: string
}

const props = withDefaults(defineProps<GlowingCardProps>(), {
  glowColor: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
  duration: 4,
  blur: 20,
  hoverOnly: false,
})

const durationStyle = computed(() => \`\${props.duration}s\`)
const blurStyle = computed(() => \`\${props.blur}px\`)
<\/script>

<template>
  <div
    :class="
      cn(
        'group relative rounded-2xl transition-all duration-300',
        props.class
      )
    "
  >
    <!-- 背景多层流光扩散光晕层 (软模糊) -->
    <div
      class="pointer-events-none absolute -inset-1 rounded-2xl opacity-40 transition-opacity duration-500 overflow-hidden"
      :class="props.hoverOnly ? 'opacity-0 group-hover:opacity-60' : 'opacity-40'"
      :style="{ filter: \`blur(\${blurStyle})\` }"
    >
      <div
        class="glow-rotator absolute left-1/2 top-1/2 h-[350%] w-[350%]"
        :style="{
          background: props.glowColor,
          animationDuration: durationStyle,
        }"
      />
    </div>

    <!-- 精密发丝边框层 (严格剪裁在 rounded-2xl 容器内) -->
    <div class="relative h-full w-full overflow-hidden rounded-2xl p-[1.5px]">
      <div
        class="glow-rotator pointer-events-none absolute left-1/2 top-1/2 h-[350%] w-[350%]"
        :class="props.hoverOnly ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'"
        :style="{
          background: props.glowColor,
          animationDuration: durationStyle,
        }"
      />

      <!-- 卡片主体内容层 -->
      <div
        class="relative z-10 h-full w-full rounded-[14.5px] bg-white p-6 backdrop-blur-xl transition-colors duration-300 dark:bg-zinc-950"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.glow-rotator {
  animation: aura-spin-glow linear infinite;
  transform-origin: center center;
}

@keyframes aura-spin-glow {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
`,usageCode:`<script setup lang="ts">
import GlowingCard from '@/components/ui/GlowingCard.vue'
import { Sparkles } from 'lucide-vue-next'
<\/script>

<template>
  <GlowingCard :duration="4" :blur="24" :hover-only="false" class="max-w-sm">
    <div class="flex items-center gap-3">
      <div class="p-2 rounded-xl bg-blue-500/10 text-blue-500">
        <Sparkles class="h-6 w-6" />
      </div>
      <div>
        <h4 class="font-bold text-zinc-900 dark:text-white">Aura AI 智算引擎</h4>
        <p class="text-xs text-zinc-500 dark:text-zinc-400">毫秒级流光渲染计算</p>
      </div>
    </div>
  </GlowingCard>
</template>`,propsList:[{name:"glowColor",type:"string",default:"'conic-gradient(...)'",description:"流光旋转渐变色彩规则"},{name:"duration",type:"number",default:"4",description:"流光 360° 旋转一周的秒数"},{name:"blur",type:"number",default:"24",description:"底层氛围光晕的模糊扩散半径 (px)"},{name:"hoverOnly",type:"boolean",default:"false",description:"是否仅在鼠标悬停时激活流光"}]},{id:"glass-card",name:"Glass Card",title:"物理磨砂亚克力玻璃卡片（Frosted Acrylic Glass Surface）",category:"Cards",suiteId:"borders-cards",description:"物理级磨砂亚克力玻璃质感卡片。集成 16px 背景模糊与 180% 饱和度增强、顶部高折射率反光发丝线与对角线环境光遮罩，悬停具备弹簧微浮升。",componentFilename:"GlassCard.vue",componentCode:`<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  blur?: number
  saturation?: number
  borderGlow?: boolean
  interactive?: boolean
  class?: string
}

const props = withDefaults(defineProps<GlassCardProps>(), {
  blur: 16,
  saturation: 180,
  borderGlow: true,
  interactive: true,
})

const backdropStyle = computed(() => ({
  backdropFilter: \`blur(\${props.blur}px) saturate(\${props.saturation}%)\`,
  WebkitBackdropFilter: \`blur(\${props.blur}px) saturate(\${props.saturation}%)\`,
}))
<\/script>

<template>
  <div
    :class="
      cn(
        'group relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-black/30',
        props.interactive && 'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-2xl hover:border-white/40 dark:hover:border-white/20',
        props.class
      )
    "
    :style="backdropStyle"
  >
    <!-- 顶部高折射率反光发丝线（模拟真实物理玻璃倒角高光） -->
    <div
      v-if="props.borderGlow"
      class="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/40"
    />

    <!-- 次级对角线自然高光渐变 -->
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60 dark:from-white/10 dark:opacity-30"
    />

    <!-- 卡片主体内容插槽 -->
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import GlassCard from '@/components/ui/GlassCard.vue'
import { Layers } from 'lucide-vue-next'
<\/script>

<template>
  <GlassCard :blur="16" :saturation="180" :interactive="true" class="max-w-sm">
    <div class="flex items-center gap-3">
      <div class="p-2 rounded-xl bg-purple-500/10 text-purple-500">
        <Layers class="h-6 w-6" />
      </div>
      <div>
        <h4 class="font-bold text-zinc-900 dark:text-white">高折射磨砂表面</h4>
        <p class="text-xs text-zinc-500 dark:text-zinc-400">亚克力物理环境漫反射</p>
      </div>
    </div>
  </GlassCard>
</template>`,propsList:[{name:"blur",type:"number",default:"16",description:"亚克力背板模糊半径 (px)"},{name:"saturation",type:"number",default:"180",description:"环境色彩饱和度提升百分比"},{name:"borderGlow",type:"boolean",default:"true",description:"是否开启顶部发丝倒角高光线"},{name:"interactive",type:"boolean",default:"true",description:"是否开启悬停弹簧浮升反馈"}]},{id:"spotlight-card",name:"Spotlight Card",title:"光标跟随径向聚光灯卡片（Cursor Radial Spotlight Card）",category:"Cards",suiteId:"borders-cards",description:"鼠标光标跟随聚光灯卡片。当光标在卡片上方滑行时，柔和径向聚光灯在卡片表面与 1px 发丝边框上同步聚焦漫射，离开时光晕优雅消隐。",componentFilename:"SpotlightCard.vue",componentCode:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  spotlightColor?: string
  spotlightRadius?: number
  showBorderSpotlight?: boolean
  class?: string
}

const props = withDefaults(defineProps<SpotlightCardProps>(), {
  spotlightColor: 'rgba(59, 130, 246, 0.15)',
  spotlightRadius: 320,
  showBorderSpotlight: true,
})

const cardRef = ref<HTMLDivElement | null>(null)
const mousePos = ref({ x: -1000, y: -1000 })
const isHovered = ref(false)

function handleMouseMove(e: MouseEvent) {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  mousePos.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  }
}

function handleMouseEnter() {
  isHovered.value = true
}

function handleMouseLeave() {
  isHovered.value = false
  mousePos.value = { x: -1000, y: -1000 }
}

const spotlightStyle = computed(() => ({
  background: \`radial-gradient(\${props.spotlightRadius}px circle at \${mousePos.value.x}px \${mousePos.value.y}px, \${props.spotlightColor}, transparent 80%)\`,
}))

const borderSpotlightStyle = computed(() => ({
  background: \`radial-gradient(\${props.spotlightRadius * 0.75}px circle at \${mousePos.value.x}px \${mousePos.value.y}px, rgba(59, 130, 246, 0.45), transparent 70%)\`,
}))
<\/script>

<template>
  <div
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :class="
      cn(
        'group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950',
        props.class
      )
    "
  >
    <!-- 边框跟随聚光灯高光层 -->
    <div
      v-if="props.showBorderSpotlight"
      class="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300"
      :class="isHovered && 'opacity-100'"
      :style="borderSpotlightStyle"
    />

    <!-- 卡片内部表面跟随聚光灯光晕层 -->
    <div
      class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
      :class="isHovered && 'opacity-100'"
      :style="spotlightStyle"
    />

    <!-- 卡片主体内容插槽 -->
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import SpotlightCard from '@/components/ui/SpotlightCard.vue'
import { Zap } from 'lucide-vue-next'
<\/script>

<template>
  <SpotlightCard :spotlight-radius="320" class="max-w-sm">
    <div class="flex items-center gap-3">
      <div class="p-2 rounded-xl bg-amber-500/10 text-amber-500">
        <Zap class="h-6 w-6" />
      </div>
      <div>
        <h4 class="font-bold text-zinc-900 dark:text-white">光标感应聚光灯</h4>
        <p class="text-xs text-zinc-500 dark:text-zinc-400">表面与边框同步高亮追踪</p>
      </div>
    </div>
  </SpotlightCard>
</template>`,propsList:[{name:"spotlightColor",type:"string",default:"'rgba(59, 130, 246, 0.15)'",description:"聚光灯漫反射颜色"},{name:"spotlightRadius",type:"number",default:"320",description:"聚光灯照射圆形半径 (px)"},{name:"showBorderSpotlight",type:"boolean",default:"true",description:"是否在边框上同步聚焦高光"}]},{id:"tilt-card",name:"Tilt Card",title:"3D 视差倾斜悬浮卡片（3D Parallax Tilt Card）",category:"Cards",suiteId:"borders-cards",description:"基于 CSS 3D 变换的视差悬浮卡片。根据光标在卡片内的偏移百分比动态驱动 rotateX 与 rotateY，表面搭载全息反光遮罩（Specular Glare），内部支持子元素 translateZ 纵深。",componentFilename:"TiltCard.vue",componentCode:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'

interface TiltCardProps {
  maxTilt?: number
  perspective?: number
  glare?: boolean
  scale?: number
  class?: string
}

const props = withDefaults(defineProps<TiltCardProps>(), {
  maxTilt: 15,
  perspective: 1000,
  glare: true,
  scale: 1.03,
})

const cardRef = ref<HTMLDivElement | null>(null)
const tiltX = ref(0)
const tiltY = ref(0)
const isHovered = ref(false)
const glarePos = ref({ x: 50, y: 50 })

function handleMouseMove(e: MouseEvent) {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const percentX = (x - centerX) / centerX
  const percentY = (y - centerY) / centerY

  // 计算三维旋转量：围绕 Y 轴旋转由 X 偏移控制，围绕 X 轴旋转由 Y 偏移控制（反向）
  tiltX.value = -percentY * props.maxTilt
  tiltY.value = percentX * props.maxTilt

  glarePos.value = {
    x: (x / rect.width) * 100,
    y: (y / rect.height) * 100,
  }
}

function handleMouseEnter() {
  isHovered.value = true
}

function handleMouseLeave() {
  isHovered.value = false
  tiltX.value = 0
  tiltY.value = 0
}

const transformStyle = computed(() => {
  if (!isHovered.value) {
    return {
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    }
  }

  return {
    transform: \`perspective(\${props.perspective}px) rotateX(\${tiltX.value.toFixed(2)}deg) rotateY(\${tiltY.value.toFixed(2)}deg) scale3d(\${props.scale}, \${props.scale}, \${props.scale})\`,
    transition: 'transform 0.1s ease-out',
  }
})

const glareStyle = computed(() => ({
  background: \`radial-gradient(circle at \${glarePos.value.x}% \${glarePos.value.y}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%)\`,
}))
<\/script>

<template>
  <div
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :class="
      cn(
        'group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xl transition-shadow duration-300 dark:border-zinc-800 dark:bg-zinc-950 select-none',
        isHovered && 'shadow-2xl shadow-blue-500/10',
        props.class
      )
    "
    :style="transformStyle"
  >
    <!-- 动态全息反光遮罩层 (Glare / Specular Reflection) -->
    <div
      v-if="props.glare"
      class="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-300"
      :class="isHovered && 'opacity-100'"
      :style="glareStyle"
    />

    <!-- 卡片主体内容（开启 3D preserve-3d，允许插槽内子元素 translateZ） -->
    <div class="relative z-10 [transform-style:preserve-3d]">
      <slot />
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import TiltCard from '@/components/ui/TiltCard.vue'
import { Compass } from 'lucide-vue-next'
<\/script>

<template>
  <TiltCard :max-tilt="15" :glare="true" class="max-w-sm">
    <div class="flex items-center gap-3 [transform:translateZ(30px)]">
      <div class="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
        <Compass class="h-6 w-6" />
      </div>
      <div>
        <h4 class="font-bold text-zinc-900 dark:text-white">3D 全息空间视差</h4>
        <p class="text-xs text-zinc-500 dark:text-zinc-400">移入体验物理陀螺仪倾斜与反光</p>
      </div>
    </div>
  </TiltCard>
</template>`,propsList:[{name:"maxTilt",type:"number",default:"15",description:"最大倾斜旋转角度 (deg)"},{name:"perspective",type:"number",default:"1000",description:"三维透视视距参数 (px)"},{name:"glare",type:"boolean",default:"true",description:"是否在表面附带全息光照反射层"},{name:"scale",type:"number",default:"1.03",description:"悬停时的微拟态放大比例"}]},{id:"card-stack",name:"Card Stack",title:"Tinder / iOS 风格层叠滑动堆叠卡片（Interactive Card Stack）",category:"Cards",suiteId:"borders-cards",description:"多层卡片物理堆叠滑动机关。支持鼠标拖动/手势向左或向右划走（附带位移阻尼与旋转），自动更新层级次序与缩放比例，集成底部便捷翻牌控制器。",componentFilename:"CardStack.vue",componentCode:`<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-vue-next'

export interface CardStackItem {
  id: string | number
  title: string
  description?: string
  tag?: string
  author?: string
  avatar?: string
  color?: string
  [key: string]: any
}

interface CardStackProps {
  items: CardStackItem[]
  maxVisible?: number
  class?: string
}

const props = withDefaults(defineProps<CardStackProps>(), {
  maxVisible: 3,
})

const emit = defineEmits<{
  (e: 'change', item: CardStackItem): void
  (e: 'swipe', item: CardStackItem, direction: 'left' | 'right'): void
}>()

const activeIndex = ref(0)
const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })
const startPos = ref({ x: 0, y: 0 })

// 循环获取可见堆叠卡片序列
const visibleCards = computed(() => {
  const total = props.items.length
  if (total === 0) return []

  const list: { item: CardStackItem; originalIndex: number; stackOrder: number }[] = []
  const count = Math.min(props.maxVisible, total)

  for (let i = 0; i < count; i++) {
    const idx = (activeIndex.value + i) % total
    list.push({
      item: props.items[idx],
      originalIndex: idx,
      stackOrder: i,
    })
  }
  return list
})

function nextCard() {
  if (props.items.length <= 1) return
  const current = props.items[activeIndex.value]
  emit('swipe', current, 'right')
  activeIndex.value = (activeIndex.value + 1) % props.items.length
  emit('change', props.items[activeIndex.value])
}

function prevCard() {
  if (props.items.length <= 1) return
  activeIndex.value = (activeIndex.value - 1 + props.items.length) % props.items.length
  emit('change', props.items[activeIndex.value])
}

function resetStack() {
  activeIndex.value = 0
}

function handlePointerDown(e: PointerEvent) {
  isDragging.value = true
  startPos.value = { x: e.clientX, y: e.clientY }
  dragOffset.value = { x: 0, y: 0 }
  ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging.value) return
  dragOffset.value = {
    x: e.clientX - startPos.value.x,
    y: e.clientY - startPos.value.y,
  }
}

function handlePointerUp(_e?: PointerEvent) {
  if (!isDragging.value) return
  isDragging.value = false

  const threshold = 80
  if (dragOffset.value.x > threshold) {
    nextCard()
  } else if (dragOffset.value.x < -threshold) {
    const current = props.items[activeIndex.value]
    emit('swipe', current, 'left')
    activeIndex.value = (activeIndex.value + 1) % props.items.length
    emit('change', props.items[activeIndex.value])
  }

  dragOffset.value = { x: 0, y: 0 }
}
<\/script>

<template>
  <div :class="cn('relative flex flex-col items-center select-none', props.class)">
    <!-- 卡片堆叠容器 -->
    <div class="relative h-[240px] w-full max-w-md sm:h-[260px]">
      <div
        v-for="card in visibleCards"
        :key="card.item.id"
        class="absolute inset-0 rounded-2xl border p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        :class="[
          card.stackOrder === 0
            ? 'cursor-grab active:cursor-grabbing border-zinc-200/90 bg-white shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900 shadow-black/5 dark:shadow-black/30'
            : 'pointer-events-none border-zinc-200/50 bg-white/90 shadow-md dark:border-zinc-800/50 dark:bg-zinc-900/80',
        ]"
        :style="{
          zIndex: props.maxVisible - card.stackOrder,
          transform:
            card.stackOrder === 0 && isDragging
              ? \`translate3d(\${dragOffset.x}px, \${dragOffset.y * 0.2}px, 0) rotate(\${dragOffset.x * 0.06}deg)\`
              : \`translate3d(0, -\${card.stackOrder * 12}px, -\${card.stackOrder * 20}px) scale(\${1 - card.stackOrder * 0.05})\`,
          opacity: 1 - card.stackOrder * 0.15,
        }"
        @pointerdown="card.stackOrder === 0 ? handlePointerDown($event) : undefined"
        @pointermove="card.stackOrder === 0 ? handlePointerMove($event) : undefined"
        @pointerup="card.stackOrder === 0 ? handlePointerUp($event) : undefined"
        @pointercancel="card.stackOrder === 0 ? handlePointerUp($event) : undefined"
      >
        <!-- 顶部徽标与序号 -->
        <div class="flex items-center justify-between mb-4">
          <span
            v-if="card.item.tag"
            class="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
            :class="card.item.color || 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400'"
          >
            {{ card.item.tag }}
          </span>
          <span class="font-mono text-xs text-zinc-400">
            #{{ card.originalIndex + 1 }} / {{ props.items.length }}
          </span>
        </div>

        <!-- 卡片标题与描述 -->
        <h4 class="text-lg font-bold tracking-tight text-zinc-900 dark:text-white line-clamp-1">
          {{ card.item.title }}
        </h4>
        <p v-if="card.item.description" class="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3">
          {{ card.item.description }}
        </p>

        <!-- 卡片底部作者 / 元数据 -->
        <div v-if="card.item.author" class="mt-6 flex items-center gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
          <div class="h-6 w-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold">
            {{ card.item.author.charAt(0) }}
          </div>
          <span class="text-xs font-medium text-zinc-600 dark:text-zinc-300">
            {{ card.item.author }}
          </span>
        </div>
      </div>
    </div>

    <!-- 底部操作导航条 -->
    <div class="mt-6 flex items-center gap-4">
      <button
        type="button"
        @click="prevCard"
        class="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer outline-none focus:outline-none ring-0"
        title="上一张卡片"
      >
        <ChevronLeft class="h-4 w-4" />
      </button>

      <button
        type="button"
        @click="resetStack"
        class="flex h-8 px-3 items-center justify-center gap-1.5 rounded-full border border-zinc-200 bg-white text-xs font-mono text-zinc-500 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer outline-none focus:outline-none ring-0"
        title="重置堆叠"
      >
        <RotateCcw class="h-3 w-3" />
        <span>重置</span>
      </button>

      <button
        type="button"
        @click="nextCard"
        class="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer outline-none focus:outline-none ring-0"
        title="下一张卡片（或向右划动）"
      >
        <ChevronRight class="h-4 w-4" />
      </button>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import CardStack, { type CardStackItem } from '@/components/ui/CardStack.vue'

const cards: CardStackItem[] = [
  { id: 1, title: '物理动效原子引擎', description: '专为 Vue 3 构建的高性能动效基建', tag: 'Core', author: 'Aura Team' },
  { id: 2, title: '零配置单文件拷贝', description: '无黑盒依赖，复制即用，代码全由你掌控', tag: 'Architecture', author: 'Aura Architect' },
  { id: 3, title: '全套对标 Arc UI', description: '包含 182 款组件与 109 款 Blocks 全套重构', tag: 'Ecosystem', author: 'DeepMind' },
]
<\/script>

<template>
  <CardStack :items="cards" :max-visible="3" />
</template>`,propsList:[{name:"items",type:"CardStackItem[]",default:"[]",description:"堆叠卡片数据清单"},{name:"maxVisible",type:"number",default:"3",description:"同时展现的最大堆叠层数"}]},{id:"noise-card",name:"Noise Card",title:"胶片质感噪点卡片（Analog Film Grain & Ambient Noise）",category:"Cards",suiteId:"borders-cards",description:"电影胶片颗粒质感卡片。通过纯原生 SVG feTurbulence 动态渲染分形噪点，叠加底层柔和弥散氛围色彩渐变与微动闪烁，赋予卡片极具温度的科技复古美学。",componentFilename:"NoiseCard.vue",componentCode:`<script setup lang="ts">
import { computed, useId } from 'vue'
import { cn } from '@/lib/utils'

interface NoiseCardProps {
  gradient?: string
  grainOpacity?: number
  animated?: boolean
  class?: string
}

const props = withDefaults(defineProps<NoiseCardProps>(), {
  gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))',
  grainOpacity: 0.15,
  animated: true,
})

const uniqueId = useId()
const filterId = computed(() => \`noise-filter-\${uniqueId}\`)
<\/script>

<template>
  <div
    :class="
      cn(
        'group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-xl dark:border-zinc-800/80 dark:bg-zinc-950/80',
        props.class
      )
    "
  >
    <!-- 底层丰富氛围渐变色彩 -->
    <div
      class="pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-100"
      :style="{ background: props.gradient }"
    />

    <!-- SVG 矢量胶片噪点生成器 (零外链、纯原生) -->
    <svg class="pointer-events-none absolute h-0 w-0">
      <defs>
        <filter :id="filterId" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
    </svg>

    <!-- 噪点颗粒层叠加 -->
    <div
      class="pointer-events-none absolute -inset-[100%] transition-opacity duration-300"
      :class="props.animated && 'animate-noise'"
      :style="{
        filter: \`url(#\${filterId})\`,
        opacity: props.grainOpacity,
      }"
    />

    <!-- 顶部极简物理反光边框 -->
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/20"
    />

    <!-- 卡片主体插槽内容 -->
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.animate-noise {
  animation: noise-shift 0.4s steps(3) infinite;
}

@keyframes noise-shift {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -5%);
  }
  20% {
    transform: translate(-10%, 5%);
  }
  30% {
    transform: translate(5%, -10%);
  }
  40% {
    transform: translate(-5%, 15%);
  }
  50% {
    transform: translate(-10%, 5%);
  }
  60% {
    transform: translate(15%, 0);
  }
  70% {
    transform: translate(0, 10%);
  }
  80% {
    transform: translate(-15%, 0);
  }
  90% {
    transform: translate(10%, 5%);
  }
  100% {
    transform: translate(5%, 0);
  }
}
</style>
`,usageCode:`<script setup lang="ts">
import NoiseCard from '@/components/ui/NoiseCard.vue'
import { Film } from 'lucide-vue-next'
<\/script>

<template>
  <NoiseCard :grain-opacity="0.15" :animated="true" class="max-w-sm">
    <div class="flex items-center gap-3">
      <div class="p-2 rounded-xl bg-rose-500/10 text-rose-500">
        <Film class="h-6 w-6" />
      </div>
      <div>
        <h4 class="font-bold text-zinc-900 dark:text-white">电影胶片质感表面</h4>
        <p class="text-xs text-zinc-500 dark:text-zinc-400">纯 SVG 分形噪点与动态颗粒光晕</p>
      </div>
    </div>
  </NoiseCard>
</template>`,propsList:[{name:"gradient",type:"string",default:"'linear-gradient(...)'",description:"底层弥散氛围渐变色"},{name:"grainOpacity",type:"number",default:"0.15",description:"胶片颗粒噪点不透明度 (0 - 1)"},{name:"animated",type:"boolean",default:"true",description:"是否开启动态微颗粒位移闪烁"}]},{id:"sparkline",name:"Sparkline",title:"微型趋势折线/面积图（Mini Trend Sparkline）",category:"Interactive",suiteId:"interactive-nav",description:"纯 SVG 贝塞尔曲线微型趋势图。支持三次贝塞尔平滑插值路径、半透明渐变面积填充、光标悬停十字指示线与动态浮动数值 Tooltip。",componentFilename:"Sparkline.vue",componentCode:`<script setup lang="ts">
import { ref, computed, useId } from 'vue'
import { cn } from '@/lib/utils'

interface SparklineProps {
  data?: number[]
  width?: number
  height?: number
  color?: string
  fill?: boolean
  interactive?: boolean
  formatValue?: (v: number) => string
  class?: string
}

const props = withDefaults(defineProps<SparklineProps>(), {
  data: () => [12, 19, 15, 27, 24, 38, 35, 48, 52, 60, 58, 75],
  width: 280,
  height: 80,
  color: '#3b82f6',
  fill: true,
  interactive: true,
})

const uniqueId = useId()
const gradientId = computed(() => \`sparkline-grad-\${uniqueId}\`)

const padding = { top: 8, bottom: 8, left: 4, right: 4 }

// 计算数值范围与缩放坐标
const points = computed(() => {
  if (props.data.length === 0) return []
  const minVal = Math.min(...props.data)
  const maxVal = Math.max(...props.data)
  const range = maxVal - minVal || 1

  const innerW = props.width - padding.left - padding.right
  const innerH = props.height - padding.top - padding.bottom

  return props.data.map((val, idx) => {
    const x = padding.left + (idx / (props.data.length - 1)) * innerW
    const y = padding.top + innerH - ((val - minVal) / range) * innerH
    return { x, y, value: val, index: idx }
  })
})

// 生成平滑贝塞尔曲线路径 (Catmull-Rom 或三次贝塞尔插值)
const pathD = computed(() => {
  const pts = points.value
  if (pts.length < 2) return ''

  let d = \`M \${pts[0].x} \${pts[0].y}\`
  for (let i = 0; i < pts.length - 1; i++) {
    const current = pts[i]
    const next = pts[i + 1]
    const controlX = (current.x + next.x) / 2
    d += \` C \${controlX} \${current.y}, \${controlX} \${next.y}, \${next.x} \${next.y}\`
  }
  return d
})

// 生成闭合的渐变填充面积路径
const areaPathD = computed(() => {
  const pts = points.value
  if (pts.length < 2) return ''
  const baseD = pathD.value
  const last = pts[pts.length - 1]
  const first = pts[0]
  const bottomY = props.height - padding.bottom + 4
  return \`\${baseD} L \${last.x} \${bottomY} L \${first.x} \${bottomY} Z\`
})

// 悬停交互坐标检测
const activeIndex = ref<number | null>(null)
const mousePos = ref({ x: 0, y: 0 })

const activePoint = computed(() => {
  if (activeIndex.value === null) return null
  return points.value[activeIndex.value] || null
})

function handleMouseMove(e: MouseEvent) {
  if (!props.interactive || points.value.length === 0) return
  const svg = e.currentTarget as SVGSVGElement
  const rect = svg.getBoundingClientRect()
  const mouseX = e.clientX - rect.left

  // 寻找最近的 X 轴数据点
  let closestIdx = 0
  let minDiff = Infinity
  points.value.forEach((pt, idx) => {
    const diff = Math.abs(pt.x - mouseX)
    if (diff < minDiff) {
      minDiff = diff
      closestIdx = idx
    }
  })

  activeIndex.value = closestIdx
  mousePos.value = {
    x: points.value[closestIdx].x,
    y: points.value[closestIdx].y,
  }
}

function handleMouseLeave() {
  activeIndex.value = null
}
<\/script>

<template>
  <div :class="cn('relative inline-flex flex-col select-none', props.class)">
    <svg
      :width="props.width"
      :height="props.height"
      class="overflow-visible"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <defs>
        <linearGradient :id="gradientId" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" :stop-color="props.color" stop-opacity="0.35" />
          <stop offset="100%" :stop-color="props.color" stop-opacity="0.0" />
        </linearGradient>
      </defs>

      <!-- 渐变面积填充 -->
      <path
        v-if="props.fill"
        :d="areaPathD"
        :fill="\`url(#\${gradientId})\`"
        class="transition-opacity duration-300"
      />

      <!-- 主折线曲线 -->
      <path
        :d="pathD"
        fill="none"
        :stroke="props.color"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="transition-all duration-300"
      />

      <!-- 悬停指示垂直虚线 -->
      <line
        v-if="activePoint"
        :x1="activePoint.x"
        :y1="padding.top"
        :x2="activePoint.x"
        :y2="props.height - padding.bottom"
        :stroke="props.color"
        stroke-width="1"
        stroke-dasharray="2 2"
        stroke-opacity="0.6"
      />

      <!-- 悬停激活点圆环 -->
      <g v-if="activePoint">
        <circle
          :cx="activePoint.x"
          :cy="activePoint.y"
          r="5"
          class="fill-white dark:fill-zinc-950 transition-all duration-150"
          :stroke="props.color"
          stroke-width="2.5"
        />
        <circle
          :cx="activePoint.x"
          :cy="activePoint.y"
          r="8"
          :fill="props.color"
          fill-opacity="0.25"
        />
      </g>
    </svg>

    <!-- 浮动数值 Tooltip -->
    <div
      v-if="activePoint"
      class="pointer-events-none absolute -top-8 z-20 -translate-x-1/2 rounded-md border border-zinc-200/80 bg-white/95 px-2 py-0.5 font-mono text-xs font-bold text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:text-zinc-100 transition-all duration-75"
      :style="{ left: \`\${activePoint.x}px\` }"
    >
      {{ props.formatValue ? props.formatValue(activePoint.value) : activePoint.value }}
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import Sparkline from '@/components/ui/Sparkline.vue'

const trend = [12, 19, 15, 27, 24, 38, 35, 48, 52, 60, 58, 75]
<\/script>

<template>
  <Sparkline :data="trend" :width="280" :height="80" color="#3b82f6" :fill="true" />
</template>`,propsList:[{name:"data",type:"number[]",default:"[]",description:"折线数值序列"},{name:"width",type:"number",default:"280",description:"SVG 视口像素宽度"},{name:"height",type:"number",default:"80",description:"SVG 视口像素高度"},{name:"color",type:"string",default:"'#3b82f6'",description:"折线与高光指示器主色调"},{name:"fill",type:"boolean",default:"true",description:"是否渲染底部渐变半透明面积"},{name:"interactive",type:"boolean",default:"true",description:"是否开启光标悬停吸附与 Tooltip"}]},{id:"animated-counter",name:"Animated Counter",title:"平滑插值渐变计数器（Smooth Interpolating Numeric Counter）",category:"Text",suiteId:"kinetic-typography",description:"基于 requestAnimationFrame 与非线性指数衰减缓动（easeOutExpo）的平滑数字计数器。支持货币前缀、百分比后缀、千分位格式化及涨跌动态着色。",componentFilename:"AnimatedCounter.vue",componentCode:`<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  value: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  formatThousands?: boolean
  trendColor?: boolean
  class?: string
}

const props = withDefaults(defineProps<AnimatedCounterProps>(), {
  duration: 1000,
  decimals: 0,
  prefix: '',
  suffix: '',
  formatThousands: true,
  trendColor: false,
})

const displayValue = ref(props.value)
const trendState = ref<'up' | 'down' | 'neutral'>('neutral')
let trendTimer: ReturnType<typeof setTimeout> | null = null

function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

function animateValue(from: number, to: number) {
  if (from === to) {
    displayValue.value = to
    return
  }

  if (props.trendColor) {
    trendState.value = to > from ? 'up' : 'down'
    if (trendTimer) clearTimeout(trendTimer)
    trendTimer = setTimeout(() => {
      trendState.value = 'neutral'
    }, 1500)
  }

  const startTime = performance.now()
  const duration = props.duration

  function update(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutExpo(progress)

    displayValue.value = from + (to - from) * eased

    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      displayValue.value = to
    }
  }

  requestAnimationFrame(update)
}

watch(
  () => props.value,
  (newVal, oldVal) => {
    animateValue(oldVal ?? 0, newVal)
  }
)

onMounted(() => {
  animateValue(0, props.value)
})

const formattedText = computed(() => {
  const rounded = displayValue.value.toFixed(props.decimals)
  if (!props.formatThousands) return rounded

  const parts = rounded.split('.')
  parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')
  return parts.join('.')
})
<\/script>

<template>
  <span
    :class="
      cn(
        'inline-flex items-baseline font-mono font-bold tracking-tight transition-colors duration-500',
        props.trendColor && trendState === 'up' && 'text-emerald-500 dark:text-emerald-400',
        props.trendColor && trendState === 'down' && 'text-rose-500 dark:text-rose-400',
        props.class
      )
    "
  >
    <span v-if="props.prefix" class="mr-0.5 text-[0.85em] font-medium opacity-80">
      {{ props.prefix }}
    </span>
    <span>{{ formattedText }}</span>
    <span v-if="props.suffix" class="ml-0.5 text-[0.85em] font-medium opacity-80">
      {{ props.suffix }}
    </span>
  </span>
</template>
`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import AnimatedCounter from '@/components/ui/AnimatedCounter.vue'

const currentMRR = ref(128450)
<\/script>

<template>
  <AnimatedCounter :value="currentMRR" prefix="¥" :decimals="0" :duration="1200" :trend-color="true" />
</template>`,propsList:[{name:"value",type:"number",default:"0",description:"目标数值"},{name:"duration",type:"number",default:"1000",description:"过渡毫秒数"},{name:"decimals",type:"number",default:"0",description:"保留小数位数"},{name:"prefix",type:"string",default:"''",description:"前缀符号（如货币单位）"},{name:"suffix",type:"string",default:"''",description:"后缀单位（如 %、k）"},{name:"formatThousands",type:"boolean",default:"true",description:"是否添加千分位逗号"},{name:"trendColor",type:"boolean",default:"false",description:"数值改变时是否动态泛红/绿"}]},{id:"radial-gauge",name:"Radial Gauge",title:"科技仪表盘弧形进度量表（Radial Gauge & Arc Speedometer）",category:"Interactive",suiteId:"interactive-nav",description:"240° 环形大开口科技仪表盘。具备起点到终点贝塞尔渐变笔触、stroke-dashoffset 阻尼形变、弧端高亮圆点与绿/黄/红三级警示阈值自动变色。",componentFilename:"RadialGauge.vue",componentCode:`<script setup lang="ts">
import { computed, useId } from 'vue'
import { cn } from '@/lib/utils'

interface RadialGaugeProps {
  value: number
  size?: number
  strokeWidth?: number
  label?: string
  unit?: string
  min?: number
  max?: number
  thresholds?: boolean
  class?: string
}

const props = withDefaults(defineProps<RadialGaugeProps>(), {
  size: 180,
  strokeWidth: 12,
  label: '',
  unit: '%',
  min: 0,
  max: 100,
  thresholds: true,
})

const uniqueId = useId()
const gradientId = computed(() => \`gauge-grad-\${uniqueId}\`)

const center = computed(() => props.size / 2)
const radius = computed(() => center.value - props.strokeWidth - 6)

// 240度环形弧线（从 150° 到 390°，即底部开口 120°）
const startAngle = 150
const endAngle = 390
const totalAngle = endAngle - startAngle // 240 度

// 将极坐标角度转换为笛卡尔坐标
function polarToCartesian(cx: number, cy: number, r: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians),
  }
}

// 生成 SVG Arc 路径指令
function describeArc(cx: number, cy: number, r: number, startA: number, endA: number) {
  const start = polarToCartesian(cx, cy, r, endA)
  const end = polarToCartesian(cx, cy, r, startA)
  const largeArcFlag = endA - startA <= 180 ? '0' : '1'
  return \`M \${start.x} \${start.y} A \${r} \${r} 0 \${largeArcFlag} 0 \${end.x} \${end.y}\`
}

const bgArcPath = computed(() => describeArc(center.value, center.value, radius.value, startAngle, endAngle))

// 弧长计算
const arcLength = computed(() => {
  return (totalAngle / 360) * 2 * Math.PI * radius.value
})

const percentage = computed(() => {
  const clamped = Math.min(Math.max(props.value, props.min), props.max)
  return (clamped - props.min) / (props.max - props.min)
})

const strokeDashoffset = computed(() => {
  return arcLength.value - percentage.value * arcLength.value
})

// 根据百分比动态匹配警示色阶
const colorScheme = computed(() => {
  if (!props.thresholds) return { stroke: '#3b82f6', text: 'text-blue-500' }
  const pct = percentage.value * 100
  if (pct >= 90) return { stroke: '#f43f5e', text: 'text-rose-500' }
  if (pct >= 75) return { stroke: '#f59e0b', text: 'text-amber-500' }
  return { stroke: '#10b981', text: 'text-emerald-500' }
})

// 针尖/流光触点坐标
const tipPoint = computed(() => {
  const currentAngle = startAngle + percentage.value * totalAngle
  return polarToCartesian(center.value, center.value, radius.value, currentAngle)
})
<\/script>

<template>
  <div :class="cn('relative inline-flex flex-col items-center select-none', props.class)">
    <div class="relative" :style="{ width: \`\${props.size}px\`, height: \`\${props.size * 0.85}px\` }">
      <svg :width="props.size" :height="props.size" class="overflow-visible">
        <defs>
          <linearGradient :id="gradientId" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="50%" stop-color="#8b5cf6" />
            <stop offset="100%" :stop-color="colorScheme.stroke" />
          </linearGradient>
        </defs>

        <!-- 底层背景固定轨道 (240度) -->
        <path
          :d="bgArcPath"
          fill="none"
          stroke="currentColor"
          :stroke-width="props.strokeWidth"
          stroke-linecap="round"
          class="text-zinc-200/80 dark:text-zinc-800"
        />

        <!-- 激活进度动态高亮弧线 -->
        <path
          :d="bgArcPath"
          fill="none"
          :stroke="\`url(#\${gradientId})\`"
          :stroke-width="props.strokeWidth"
          stroke-linecap="round"
          :stroke-dasharray="arcLength"
          :stroke-dashoffset="strokeDashoffset"
          class="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />

        <!-- 弧线末端高亮圆点 -->
        <circle
          v-if="percentage > 0.02"
          :cx="tipPoint.x"
          :cy="tipPoint.y"
          :r="props.strokeWidth / 2 - 1"
          fill="white"
          class="shadow-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      </svg>

      <!-- 中心数值与标签容器 -->
      <div
        class="absolute inset-0 flex flex-col items-center justify-center pt-3 text-center"
      >
        <span class="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
          {{ props.label }}
        </span>
        <div class="flex items-baseline mt-0.5">
          <span class="font-mono text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {{ Math.round(props.value) }}
          </span>
          <span class="ml-0.5 text-xs font-mono text-zinc-400 font-bold">
            {{ props.unit }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import RadialGauge from '@/components/ui/RadialGauge.vue'

const cpuUsage = ref(78)
<\/script>

<template>
  <RadialGauge :value="cpuUsage" label="CPU 负载" unit="%" :size="180" :thresholds="true" />
</template>`,propsList:[{name:"value",type:"number",default:"0",description:"当前读数 (0 - 100)"},{name:"size",type:"number",default:"180",description:"仪表盘尺寸 (px)"},{name:"strokeWidth",type:"number",default:"12",description:"弧形轨道笔触宽度 (px)"},{name:"label",type:"string",default:"''",description:"中心说明标签"},{name:"unit",type:"string",default:"'%'",description:"度量单位符号"},{name:"thresholds",type:"boolean",default:"true",description:"是否根据数值动态切换红黄绿阶"}]},{id:"progress-steps",name:"Progress Steps",title:"物理弹簧阶段进度步骤器（Spring Animated Stepper）",category:"Interactive",suiteId:"interactive-nav",description:"业务阶段工作流步骤导航。已完成节点平滑缩放形变打勾，当前活跃节点配备柔和呼吸光环，连接线随步骤前进自适应流动填充。",componentFilename:"ProgressSteps.vue",componentCode:`<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-vue-next'

export interface StepItem {
  id?: string | number
  title: string
  description?: string
}

interface ProgressStepsProps {
  steps: StepItem[]
  currentStep?: number // 1-indexed (1 to N)
  clickable?: boolean
  class?: string
}

const props = withDefaults(defineProps<ProgressStepsProps>(), {
  currentStep: 1,
  clickable: true,
})

const emit = defineEmits<{
  (e: 'update:currentStep', step: number): void
  (e: 'change', step: number): void
}>()

function handleStepClick(stepNumber: number) {
  if (!props.clickable) return
  emit('update:currentStep', stepNumber)
  emit('change', stepNumber)
}

const progressPercentage = computed(() => {
  if (props.steps.length <= 1) return 100
  return ((props.currentStep - 1) / (props.steps.length - 1)) * 100
})
<\/script>

<template>
  <div :class="cn('w-full select-none', props.class)">
    <div class="relative flex items-center justify-between">
      <!-- 底层固定灰色连接导线 -->
      <div class="absolute left-6 right-6 top-5 -translate-y-1/2 h-0.5 bg-zinc-200 dark:bg-zinc-800 pointer-events-none" />

      <!-- 上层动态填充流光进度条 -->
      <div
        class="absolute left-6 top-5 -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
        :style="{
          width: \`calc(\${progressPercentage}% * ((100% - 48px) / 100))\`,
        }"
      />

      <!-- 各步骤节点 -->
      <div
        v-for="(step, idx) in props.steps"
        :key="idx"
        class="relative z-10 flex flex-col items-center group cursor-pointer"
        @click="handleStepClick(idx + 1)"
      >
        <!-- 步骤圆形按键 -->
        <button
          type="button"
          :class="[
            'flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] outline-none focus:outline-none ring-0',
            idx + 1 < props.currentStep
              ? 'border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-500/20'
              : idx + 1 === props.currentStep
              ? 'border-blue-600 bg-white dark:bg-zinc-950 text-blue-600 dark:text-blue-400 ring-4 ring-blue-500/15 scale-110 shadow-lg shadow-blue-500/20'
              : 'border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900 text-zinc-400',
            props.clickable && 'hover:scale-105 active:scale-95',
          ]"
        >
          <!-- 已完成态：弹性对勾动画 -->
          <Check v-if="idx + 1 < props.currentStep" class="h-4 w-4 animate-scale-in" />
          <!-- 进行中或待开始：步骤序号 -->
          <span v-else>{{ idx + 1 }}</span>
        </button>

        <!-- 步骤文字信息 -->
        <div class="mt-2.5 text-center">
          <div
            :class="[
              'text-xs font-bold transition-colors duration-200',
              idx + 1 <= props.currentStep
                ? 'text-zinc-900 dark:text-white'
                : 'text-zinc-400 dark:text-zinc-500',
            ]"
          >
            {{ step.title }}
          </div>
          <div
            v-if="step.description"
            class="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5 line-clamp-1 max-w-[100px]"
          >
            {{ step.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scaleIn {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-scale-in {
  animation: scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import ProgressSteps from '@/components/ui/ProgressSteps.vue'

const step = ref(2)
const steps = [
  { title: '节点校验', description: '环境就绪' },
  { title: '依赖编译', description: '代码打包' },
  { title: '多云同步', description: '全球分发' },
  { title: '完成部署', description: '在线就绪' },
]
<\/script>

<template>
  <ProgressSteps v-model:current-step="step" :steps="steps" />
</template>`,propsList:[{name:"steps",type:"StepItem[]",default:"[]",description:"步骤信息数组"},{name:"currentStep",type:"number",default:"1",description:"当前进行中的步骤号 (从 1 起)"},{name:"clickable",type:"boolean",default:"true",description:"是否允许点击节点快速跳转"}]},{id:"comparison-matrix",name:"Comparison Matrix",title:"特性对比矩阵动态表格（Pricing & Feature Comparison Matrix）",category:"Layout",suiteId:"borders-cards",description:"多层级 SaaS 方案对比矩阵。集成推荐方案高亮浮起与多层发光阴影、整行悬停高亮追踪、弹性微动效对勾与减号状态呈现。",componentFilename:"ComparisonMatrix.vue",componentCode:`<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Check, Minus } from 'lucide-vue-next'

export interface PlanTier {
  id: string
  name: string
  price: string
  period?: string
  badge?: string
  popular?: boolean
  ctaText?: string
}

export interface FeatureItem {
  name: string
  category?: string
  values: Record<string, boolean | string>
}

interface ComparisonMatrixProps {
  plans: PlanTier[]
  features: FeatureItem[]
  class?: string
}

const props = defineProps<ComparisonMatrixProps>()

const emit = defineEmits<{
  (e: 'selectPlan', planId: string): void
}>()
<\/script>

<template>
  <div :class="cn('w-full overflow-x-auto select-none', props.class)">
    <div class="min-w-[640px]">
      <!-- 头部套餐列 -->
      <div class="grid grid-cols-4 gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <!-- 左上角标题区 -->
        <div class="flex flex-col justify-end p-2">
          <span class="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
            方案特性对比
          </span>
          <h3 class="mt-1 text-lg font-bold text-zinc-900 dark:text-white">
            选择适合你的动效套件
          </h3>
        </div>

        <!-- 各套餐列头 -->
        <div
          v-for="plan in props.plans"
          :key="plan.id"
          :class="[
            'relative flex flex-col justify-between rounded-2xl p-5 transition-all duration-300',
            plan.popular
              ? 'border-2 border-blue-600 bg-blue-50/50 dark:border-blue-500 dark:bg-blue-950/20 shadow-xl shadow-blue-500/10'
              : 'border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs',
          ]"
        >
          <!-- 推荐徽标 -->
          <div
            v-if="plan.badge"
            class="absolute -top-3 right-4 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-md shadow-blue-500/20"
          >
            {{ plan.badge }}
          </div>

          <div>
            <h4 class="text-base font-bold text-zinc-900 dark:text-white">
              {{ plan.name }}
            </h4>
            <div class="mt-2 flex items-baseline">
              <span class="font-mono text-2xl font-extrabold text-zinc-900 dark:text-white">
                {{ plan.price }}
              </span>
              <span v-if="plan.period" class="ml-1 text-xs text-zinc-400">
                / {{ plan.period }}
              </span>
            </div>
          </div>

          <button
            type="button"
            @click="emit('selectPlan', plan.id)"
            :class="[
              'mt-4 w-full rounded-xl py-2 text-xs font-bold transition-all duration-200 cursor-pointer outline-none focus:outline-none ring-0',
              plan.popular
                ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]'
                : 'border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700',
            ]"
          >
            {{ plan.ctaText || '立即选择' }}
          </button>
        </div>
      </div>

      <!-- 特性清单行 -->
      <div class="divide-y divide-zinc-100 dark:divide-zinc-800/60">
        <div
          v-for="(feature, fIdx) in props.features"
          :key="fIdx"
          class="grid grid-cols-4 gap-4 py-3.5 items-center hover:bg-zinc-50/80 dark:hover:bg-zinc-900/40 rounded-xl transition-colors"
        >
          <!-- 特性名称 -->
          <div class="px-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
            {{ feature.name }}
          </div>

          <!-- 各套餐对于该特性的支持情况 -->
          <div
            v-for="plan in props.plans"
            :key="plan.id"
            class="flex items-center justify-center text-center"
          >
            <!-- 布尔值：真 -->
            <div
              v-if="feature.values[plan.id] === true"
              class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
            >
              <Check class="h-3.5 w-3.5 stroke-[3]" />
            </div>

            <!-- 布尔值：假 -->
            <div
              v-else-if="feature.values[plan.id] === false"
              class="flex h-6 w-6 items-center justify-center text-zinc-300 dark:text-zinc-600"
            >
              <Minus class="h-3.5 w-3.5 stroke-[2]" />
            </div>

            <!-- 自定义文字支持 -->
            <span
              v-else
              class="font-mono text-xs font-semibold text-zinc-800 dark:text-zinc-200"
            >
              {{ feature.values[plan.id] }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import ComparisonMatrix, { type PlanTier, type FeatureItem } from '@/components/ui/ComparisonMatrix.vue'

const plans: PlanTier[] = [
  { id: 'free', name: '社区版', price: '¥0' },
  { id: 'pro', name: '专业版', price: '¥99', period: '月', popular: true, badge: '最热门' },
  { id: 'ent', name: '企业旗舰', price: '¥399', period: '月' },
]

const features: FeatureItem[] = [
  { name: '全量 182 款动效组件', values: { free: true, pro: true, ent: true } },
  { name: 'Zero-Config 单文件拷贝', values: { free: true, pro: true, ent: true } },
  { name: '专属技术支持与 SLA', values: { free: false, pro: '工作日', ent: '7×24h 极速' } },
]
<\/script>

<template>
  <ComparisonMatrix :plans="plans" :features="features" />
</template>`,propsList:[{name:"plans",type:"PlanTier[]",default:"[]",description:"套餐阶梯配置列表"},{name:"features",type:"FeatureItem[]",default:"[]",description:"特性条目与各套餐支持映射"}]},{id:"stat-card",name:"Stat Card",title:"SaaS 核心 KPI 动态度量卡片（SaaS Metric & KPI Stat Card）",category:"Cards",suiteId:"borders-cards",description:"复合型高阶度量卡片。内聚平滑计数器（AnimatedCounter）、环比涨跌幅徽标胶囊以及右下角嵌入式微型趋势面积图（Sparkline），悬停具备触感浮升。",componentFilename:"StatCard.vue",componentCode:`<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { TrendingUp, TrendingDown, Minus } from 'lucide-vue-next'
import AnimatedCounter from './AnimatedCounter.vue'
import Sparkline from './Sparkline.vue'

interface StatCardProps {
  title: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  change?: number // 环比增减百分比，如 +14.2 或 -5.8
  changePeriod?: string
  trendData?: number[]
  color?: string
  icon?: any
  class?: string
}

const props = withDefaults(defineProps<StatCardProps>(), {
  decimals: 0,
  changePeriod: '较上周期',
  color: '#3b82f6',
})

const trendState = computed(() => {
  if (props.change === undefined) return 'none'
  if (props.change > 0) return 'up'
  if (props.change < 0) return 'down'
  return 'flat'
})
<\/script>

<template>
  <div
    :class="
      cn(
        'group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-950',
        props.class
      )
    "
  >
    <!-- 顶部标题与图标 -->
    <div class="flex items-center justify-between">
      <span class="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
        {{ props.title }}
      </span>
      <div
        v-if="props.icon"
        class="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 transition-colors group-hover:text-blue-500"
      >
        <component :is="props.icon" class="h-4 w-4" />
      </div>
    </div>

    <!-- 中部主度量数值与迷你趋势微图 -->
    <div class="mt-3 flex items-end justify-between gap-4">
      <div>
        <div class="text-2xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
          <AnimatedCounter
            :value="props.value"
            :decimals="props.decimals"
            :prefix="props.prefix"
            :suffix="props.suffix"
            :duration="1200"
          />
        </div>

        <!-- 环比增减幅药丸徽标 -->
        <div v-if="props.change !== undefined" class="mt-2 flex items-center gap-1.5">
          <span
            :class="[
              'inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold font-mono',
              trendState === 'up' && 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
              trendState === 'down' && 'bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400',
              trendState === 'flat' && 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
            ]"
          >
            <TrendingUp v-if="trendState === 'up'" class="h-3 w-3" />
            <TrendingDown v-else-if="trendState === 'down'" class="h-3 w-3" />
            <Minus v-else class="h-3 w-3" />
            <span>{{ props.change > 0 ? \`+\${props.change}\` : props.change }}%</span>
          </span>
          <span class="text-[11px] text-zinc-400">
            {{ props.changePeriod }}
          </span>
        </div>
      </div>

      <!-- 右下角内嵌 Sparkline 迷你趋势图 -->
      <div v-if="props.trendData && props.trendData.length > 0" class="shrink-0 -mb-1">
        <Sparkline
          :data="props.trendData"
          :width="120"
          :height="44"
          :color="props.color"
          :fill="true"
          :interactive="false"
        />
      </div>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import StatCard from '@/components/ui/StatCard.vue'
import { Activity } from 'lucide-vue-next'

const trend = [45, 52, 49, 62, 58, 71, 68, 85, 92]
<\/script>

<template>
  <StatCard
    title="活跃节点吞吐量"
    :value="89240"
    suffix=" TPS"
    :change="18.5"
    change-period="较昨日"
    :trend-data="trend"
    :icon="Activity"
  />
</template>`,propsList:[{name:"title",type:"string",default:"-",description:"度量项标题"},{name:"value",type:"number",default:"0",description:"核心指标数值"},{name:"prefix",type:"string",default:"''",description:"前缀符号"},{name:"suffix",type:"string",default:"''",description:"后缀单位"},{name:"change",type:"number",default:"undefined",description:"环比变动百分比"},{name:"changePeriod",type:"string",default:"'较上周期'",description:"环比统计区间文案"},{name:"trendData",type:"number[]",default:"[]",description:"右下角趋势微图数据点"}]}],Dp={class:"sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80 transition-colors"},jp={class:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"},Bp={class:"flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md shadow-blue-500/20 text-white transition-transform duration-300 group-hover:scale-105"},Np={class:"hidden md:flex items-center gap-6 text-sm font-medium"},Hp={class:"flex items-center gap-3"},Gp={href:"https://github.com",target:"_blank",rel:"noopener noreferrer",class:"flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"GitHub 仓库"},Up=se({__name:"Header",setup(e){return(t,n)=>{const r=zr("router-link");return b(),g("header",Dp,[i("div",jp,[k(r,{to:"/",class:"flex items-center gap-2.5 group"},{default:Y(()=>[i("div",Bp,[k(I(Re),{class:"h-5 w-5"})]),n[0]||(n[0]=i("div",{class:"flex flex-col"},[i("div",{class:"flex items-center gap-1.5"},[i("span",{class:"text-lg font-black tracking-tight text-zinc-900 dark:text-white"},[Ae(" Aura"),i("span",{class:"text-blue-600 dark:text-blue-400"},"UI")]),i("span",{class:"rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300"}," Vue 3.5 ")]),i("span",{class:"text-[10px] text-zinc-400"},"动效原子代码库")],-1))]),_:1}),i("nav",Np,[k(r,{to:"/",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:Y(()=>[...n[1]||(n[1]=[Ae(" 官网首页 ",-1)])]),_:1}),k(r,{to:"/docs/border-beam",class:"inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:Y(()=>[k(I(Xt),{class:"h-4 w-4"}),i("span",null,"组件库 ("+P(I(on).length)+")",1)]),_:1}),n[2]||(n[2]=i("a",{href:"#features",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}," 核心特性 ",-1))]),i("div",Hp,[k(Vp),i("a",Gp,[k(I(yp),{class:"h-4 w-4"})]),k(r,{to:"/docs/border-beam",class:"hidden sm:inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"},{default:Y(()=>[...n[3]||(n[3]=[Ae(" 浏览代码 ",-1)])]),_:1})])])])}}}),qp={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50 transition-colors"},Wp={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Xp={class:"flex flex-col md:flex-row items-center justify-between gap-6"},Yp={class:"flex items-center gap-3"},Kp={class:"flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"},Zp={class:"flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"},Jp={class:"inline-flex items-center gap-1"},Qp=se({__name:"Footer",setup(e){return(t,n)=>(b(),g("footer",qp,[i("div",Wp,[i("div",Xp,[i("div",Yp,[i("div",Kp,[k(I(Re),{class:"h-4 w-4"})]),n[0]||(n[0]=i("div",null,[i("p",{class:"text-sm font-bold text-zinc-900 dark:text-zinc-100"}," Aura UI (Vue 3) "),i("p",{class:"text-xs text-zinc-500 dark:text-zinc-400"}," 对标 Magic UI / Aceternity UI，属于 Vue 3 的动效原子代码库 ")],-1))]),i("div",Zp,[n[3]||(n[3]=i("span",null,"采用 MIT 协议开源，完全支持 Copy & Paste 即用",-1)),n[4]||(n[4]=i("span",null,"•",-1)),i("span",Jp,[n[1]||(n[1]=Ae(" Built with ",-1)),k(I(kp),{class:"h-3 w-3 text-red-500 fill-red-500"}),n[2]||(n[2]=Ae(" for Vue 3 ecosystem ",-1))])])])])]))}}),e0={class:"min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-200"},t0={class:"flex-1"},n0=se({__name:"App",setup(e){return(t,n)=>{const r=zr("router-view");return b(),g("div",e0,[k(Up),i("div",t0,[k(r)]),k(Qp)])}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const $n=typeof document<"u";function Jl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function r0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Jl(e.default)}const Te=Object.assign;function Oo(e,t){const n={};for(const r in t){const o=t[r];n[r]=It(o)?o.map(e):e(o)}return n}const lr=()=>{},It=Array.isArray;function Li(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Ql=/#/g,o0=/&/g,s0=/\//g,i0=/=/g,a0=/\?/g,ec=/\+/g,l0=/%5B/g,c0=/%5D/g,tc=/%5E/g,d0=/%60/g,nc=/%7B/g,u0=/%7C/g,rc=/%7D/g,p0=/%20/g;function Bs(e){return e==null?"":encodeURI(""+e).replace(u0,"|").replace(l0,"[").replace(c0,"]")}function f0(e){return Bs(e).replace(nc,"{").replace(rc,"}").replace(tc,"^")}function ms(e){return Bs(e).replace(ec,"%2B").replace(p0,"+").replace(Ql,"%23").replace(o0,"%26").replace(d0,"`").replace(nc,"{").replace(rc,"}").replace(tc,"^")}function m0(e){return ms(e).replace(i0,"%3D")}function b0(e){return Bs(e).replace(Ql,"%23").replace(a0,"%3F")}function g0(e){return b0(e).replace(s0,"%2F")}function yr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const h0=/\/$/,x0=e=>e.replace(h0,"");function Vo(e,t,n="/"){let r,o={},s="",l="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=t.slice(0,c),s=t.slice(c,a>0?a:t.length),o=e(s.slice(1))),a>=0&&(r=r||t.slice(0,a),l=t.slice(a,t.length)),r=w0(r??t,n),{fullPath:r+s+l,path:r,query:o,hash:yr(l)}}function v0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Oi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function y0(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Dn(t.matched[r],n.matched[o])&&oc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Dn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function oc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!k0(e[n],t[n]))return!1;return!0}function k0(e,t){return It(e)?Vi(e,t):It(t)?Vi(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Vi(e,t){return It(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function w0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,l,a;for(l=0;l<r.length;l++)if(a=r[l],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(l).join("/")}const Qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let bs=(function(e){return e.pop="pop",e.push="push",e})({}),Do=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function z0(e){if(!e)if($n){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),x0(e)}const _0=/^[^#]+#/;function C0(e,t){return e.replace(_0,"#")+t}function S0(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ko=()=>({left:window.scrollX,top:window.scrollY});function I0(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=S0(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Di(e,t){return(history.state?history.state.position-t:-1)+e}const gs=new Map;function A0(e,t){gs.set(e,t)}function $0(e){const t=gs.get(e);return gs.delete(e),t}function M0(e){return typeof e=="string"||e&&typeof e=="object"}function sc(e){return typeof e=="string"||typeof e=="symbol"}let Xe=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ic=Symbol("");Xe.MATCHER_NOT_FOUND+"",Xe.NAVIGATION_GUARD_REDIRECT+"",Xe.NAVIGATION_ABORTED+"",Xe.NAVIGATION_CANCELLED+"",Xe.NAVIGATION_DUPLICATED+"";function jn(e,t){return Te(new Error,{type:e,[ic]:!0},t)}function Nt(e,t){return e instanceof Error&&ic in e&&(t==null||!!(e.type&t))}const P0=["params","query","hash"];function T0(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of P0)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function R0(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const o=n[r].replace(ec," "),s=o.indexOf("="),l=yr(s<0?o:o.slice(0,s)),a=s<0?null:yr(o.slice(s+1));if(l in t){let c=t[l];It(c)||(c=t[l]=[c]),c.push(a)}else t[l]=a}return t}function ji(e){let t="";for(let n in e){const r=e[n];if(n=m0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(It(r)?r.map(o=>o&&ms(o)):[r&&ms(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function E0(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=It(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const F0=Symbol(""),Bi=Symbol(""),Ns=Symbol(""),Hs=Symbol(""),hs=Symbol("");function Wn(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function rn(e,t,n,r,o,s=l=>l()){const l=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const p=m=>{m===!1?c(jn(Xe.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?c(m):M0(m)?c(jn(Xe.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(l&&r.enterCallbacks[o]===l&&typeof m=="function"&&l.push(m),a())},u=s(()=>e.call(r&&r.instances[o],t,n,p));let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(m=>c(m))})}function jo(e,t,n,r,o=s=>s()){const s=[];for(const l of e)for(const a in l.components){let c=l.components[a];if(!(t!=="beforeRouteEnter"&&!l.instances[a]))if(Jl(c)){const p=(c.__vccOpts||c)[t];p&&s.push(rn(p,n,r,l,a,o))}else{let p=c();s.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${l.path}"`);const d=r0(u)?u.default:u;l.mods[a]=u,l.components[a]=d;const m=(d.__vccOpts||d)[t];return m&&rn(m,n,r,l,a,o)()}))}}return s}function L0(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let l=0;l<s;l++){const a=t.matched[l];a&&(e.matched.find(p=>Dn(p,a))?r.push(a):n.push(a));const c=e.matched[l];c&&(t.matched.find(p=>Dn(p,c))||o.push(c))}return[n,r,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let O0=()=>location.protocol+"//"+location.host;function ac(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let l=o.includes(e.slice(s))?e.slice(s).length:1,a=o.slice(l);return a[0]!=="/"&&(a="/"+a),Oi(a,"")}return Oi(n,e)+r+o}function V0(e,t,n,r){let o=[],s=[],l=null;const a=({state:m})=>{const f=ac(e,location),w=n.value,h=t.value;let C=0;if(m){if(n.value=f,t.value=m,l&&l===w){l=null;return}C=h?m.position-h.position:0}else r(f);o.forEach(S=>{S(n.value,w,{delta:C,type:bs.pop,direction:C?C>0?Do.forward:Do.back:Do.unknown})})};function c(){l=n.value}function p(m){o.push(m);const f=()=>{const w=o.indexOf(m);w>-1&&o.splice(w,1)};return s.push(f),f}function u(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Te({},m.state,{scroll:ko()}),"")}}function d(){for(const m of s)m();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:p,destroy:d}}function Ni(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?ko():null}}function D0(e){const{history:t,location:n}=window,r={value:ac(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,p,u){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:O0()+e+c;try{t[u?"replaceState":"pushState"](p,"",m),o.value=p}catch(f){console.error(f),n[u?"replace":"assign"](m)}}function l(c,p){s(c,Te({},t.state,Ni(o.value.back,c,o.value.forward,!0),p,{position:o.value.position}),!0),r.value=c}function a(c,p){const u=Te({},o.value,t.state,{forward:c,scroll:ko()});s(u.current,u,!0),s(c,Te({},Ni(r.value,c,null),{position:u.position+1},p),!1),r.value=c}return{location:r,state:o,push:a,replace:l}}function j0(e){e=z0(e);const t=D0(e),n=V0(e,t.state,t.location,t.replace);function r(s,l=!0){l||n.pauseListeners(),history.go(s)}const o=Te({location:"",base:e,go:r,createHref:C0.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let zn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Je=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Je||{});const B0={type:zn.Static,value:""},N0=/[a-zA-Z0-9_]/;function H0(e){if(!e)return[[]];if(e==="/")return[[B0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${n})/"${p}": ${f}`)}let n=Je.Static,r=n;const o=[];let s;function l(){s&&o.push(s),s=[]}let a=0,c,p="",u="";function d(){p&&(n===Je.Static?s.push({type:zn.Static,value:p}):n===Je.Param||n===Je.ParamRegExp||n===Je.ParamRegExpEnd?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),s.push({type:zn.Param,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function m(){p+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==Je.ParamRegExp){r=n,n=Je.EscapeNext;continue}switch(n){case Je.Static:c==="/"?(p&&d(),l()):c===":"?(d(),n=Je.Param):m();break;case Je.EscapeNext:m(),n=r;break;case Je.Param:c==="("?n=Je.ParamRegExp:N0.test(c)?m():(d(),n=Je.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case Je.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=Je.ParamRegExpEnd:u+=c;break;case Je.ParamRegExpEnd:d(),n=Je.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===Je.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),d(),l(),o}const Hi="[^/]+?",G0={sensitive:!1,strict:!1,start:!0,end:!0};var pt=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(pt||{});const U0=/[.+*?^${}()[\]/\\]/g;function q0(e,t){const n=Te({},G0,t),r=[];let o=n.start?"^":"";const s=[];for(const p of e){const u=p.length?[]:[pt.Root];n.strict&&!p.length&&(o+="/");for(let d=0;d<p.length;d++){const m=p[d];let f=pt.Segment+(n.sensitive?pt.BonusCaseSensitive:0);if(m.type===zn.Static)d||(o+="/"),o+=m.value.replace(U0,"\\$&"),f+=pt.Static;else if(m.type===zn.Param){const{value:w,repeatable:h,optional:C,regexp:S}=m;s.push({name:w,repeatable:h,optional:C});const y=S||Hi;if(y!==Hi){f+=pt.BonusCustomRegExp;try{`${y}`}catch(A){throw new Error(`Invalid custom RegExp for param "${w}" (${y}): `+A.message)}}let _=h?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;d||(_=C&&p.length<2?`(?:/${_})`:"/"+_),C&&(_+="?"),o+=_,f+=pt.Dynamic,C&&(f+=pt.BonusOptional),h&&(f+=pt.BonusRepeatable),y===".*"&&(f+=pt.BonusWildcard)}u.push(f)}r.push(u)}if(n.strict&&n.end){const p=r.length-1;r[p][r[p].length-1]+=pt.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const l=new RegExp(o,n.sensitive?"":"i");function a(p){const u=p.match(l),d={};if(!u)return null;for(let m=1;m<u.length;m++){const f=u[m]||"",w=s[m-1];d[w.name]=f&&w.repeatable?f.split("/"):f}return d}function c(p){let u="",d=!1;for(const m of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of m)if(f.type===zn.Static)u+=f.value;else if(f.type===zn.Param){const{value:w,repeatable:h,optional:C}=f,S=w in p?p[w]:"";if(It(S)&&!h)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const y=It(S)?S.join("/"):S;if(!y)if(C)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);u+=y}}return u||"/"}return{re:l,score:r,keys:s,parse:a,stringify:c}}function W0(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===pt.Static+pt.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===pt.Static+pt.Segment?1:-1:0}function lc(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=W0(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(Gi(r))return 1;if(Gi(o))return-1}return o.length-r.length}function Gi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const X0={strict:!1,end:!0,sensitive:!1};function Y0(e,t,n){const r=q0(H0(e.path),n),o=Te(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function K0(e,t){const n=[],r=new Map;t=Li(X0,t);function o(d){return r.get(d)}function s(d,m,f){const w=!f,h=qi(d);h.aliasOf=f&&f.record;const C=Li(t,d),S=[h];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const R of A)S.push(qi(Te({},h,{components:f?f.record.components:h.components,path:R,aliasOf:f?f.record:h})))}let y,_;for(const A of S){const{path:R}=A;if(m&&R[0]!=="/"){const O=m.record.path,N=O[O.length-1]==="/"?"":"/";A.path=m.record.path+(R&&N+R)}if(y=Y0(A,m,C),f?f.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),w&&d.name&&!Wi(y)&&l(d.name)),cc(y)&&c(y),h.children){const O=h.children;for(let N=0;N<O.length;N++)s(O[N],y,f&&f.children[N])}f=f||y}return _?()=>{l(_)}:lr}function l(d){if(sc(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(l),m.alias.forEach(l))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(l),d.alias.forEach(l))}}function a(){return n}function c(d){const m=Q0(d,n);n.splice(m,0,d),d.record.name&&!Wi(d)&&r.set(d.record.name,d)}function p(d,m){let f,w={},h,C;if("name"in d&&d.name){if(f=r.get(d.name),!f)throw jn(Xe.MATCHER_NOT_FOUND,{location:d});C=f.record.name,w=Te(Ui(m.params,f.keys.filter(_=>!_.optional).concat(f.parent?f.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),d.params&&Ui(d.params,f.keys.map(_=>_.name))),h=f.stringify(w)}else if(d.path!=null)h=d.path,f=n.find(_=>_.re.test(h)),f&&(w=f.parse(h),C=f.record.name);else{if(f=m.name?r.get(m.name):n.find(_=>_.re.test(m.path)),!f)throw jn(Xe.MATCHER_NOT_FOUND,{location:d,currentLocation:m});C=f.record.name,w=Te({},m.params,d.params),h=f.stringify(w)}const S=[];let y=f;for(;y;)S.unshift(y.record),y=y.parent;return{name:C,path:h,params:w,matched:S,meta:J0(S)}}e.forEach(d=>s(d));function u(){n.length=0,r.clear()}return{addRoute:s,resolve:p,removeRoute:l,clearRoutes:u,getRoutes:a,getRecordMatcher:o}}function Ui(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function qi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Z0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Z0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Wi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function J0(e){return e.reduce((t,n)=>Te(t,n.meta),{})}function Q0(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;lc(e,t[s])<0?r=s:n=s+1}const o=ef(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function ef(e){let t=e;for(;t=t.parent;)if(cc(t)&&lc(e,t)===0)return t}function cc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Xi(e){const t=Ot(Ns),n=Ot(Hs),r=ee(()=>{const c=I(e.to);return t.resolve(c)}),o=ee(()=>{const{matched:c}=r.value,{length:p}=c,u=c[p-1],d=n.matched;if(!u||!d.length)return-1;const m=d.findIndex(Dn.bind(null,u));if(m>-1)return m;const f=Yi(c[p-2]);return p>1&&Yi(u)===f&&d[d.length-1].path!==f?d.findIndex(Dn.bind(null,c[p-2])):m}),s=ee(()=>o.value>-1&&sf(n.params,r.value.params)),l=ee(()=>o.value>-1&&o.value===n.matched.length-1&&oc(n.params,r.value.params));function a(c={}){if(of(c)){const p=t[I(e.replace)?"replace":"push"](I(e.to)).catch(lr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:r,href:ee(()=>r.value.href),isActive:s,isExactActive:l,navigate:a}}function tf(e){return e.length===1?e[0]:e}const nf=se({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Xi,setup(e,{slots:t}){const n=uo(Xi(e)),{options:r}=Ot(Ns),o=ee(()=>({[Ki(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ki(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&tf(t.default(n));return e.custom?s:On("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),rf=nf;function of(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function sf(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!It(o)||o.length!==r.length||r.some((s,l)=>s.valueOf()!==o[l].valueOf()))return!1}return!0}function Yi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ki=(e,t,n)=>e??t??n,af=se({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ot(hs),o=ee(()=>e.route||r.value),s=Ot(Bi,0),l=ee(()=>{let p=I(s);const{matched:u}=o.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),a=ee(()=>o.value.matched[l.value]);Lr(Bi,ee(()=>l.value+1)),Lr(F0,a),Lr(hs,o);const c=E();return ht(()=>[c.value,a.value,e.name],([p,u,d],[m,f,w])=>{u&&(u.instances[d]=p,f&&f!==u&&p&&p===m&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),p&&u&&(!f||!Dn(u,f)||!m)&&(u.enterCallbacks[d]||[]).forEach(h=>h(p))},{flush:"post"}),()=>{const p=o.value,u=e.name,d=a.value,m=d&&d.components[u];if(!m)return Zi(n.default,{Component:m,route:p});const f=d.props[u],w=f?f===!0?p.params:typeof f=="function"?f(p):f:null,C=On(m,Te({},w,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Zi(n.default,{Component:C,route:p})||C}}});function Zi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const lf=af;function cf(e){const t=K0(e.routes,e),n=e.parseQuery||R0,r=e.stringifyQuery||ji,o=e.history,s=Wn(),l=Wn(),a=Wn(),c=pd(Qt);let p=Qt;$n&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Oo.bind(null,L=>""+L),d=Oo.bind(null,g0),m=Oo.bind(null,yr);function f(L,Q){let H,ae;return sc(L)?(H=t.getRecordMatcher(L),ae=Q):ae=L,t.addRoute(ae,H)}function w(L){const Q=t.getRecordMatcher(L);Q&&t.removeRoute(Q)}function h(){return t.getRoutes().map(L=>L.record)}function C(L){return!!t.getRecordMatcher(L)}function S(L,Q){if(Q=Te({},Q||c.value),typeof L=="string"){const T=Vo(n,L,Q.path),F=t.resolve({path:T.path},Q),j=o.createHref(T.fullPath);return Te(T,F,{params:m(F.params),hash:yr(T.hash),redirectedFrom:void 0,href:j})}let H;if(L.path!=null)H=Te({},L,{path:Vo(n,L.path,Q.path).path});else{const T=Te({},L.params);for(const F in T)T[F]==null&&delete T[F];H=Te({},L,{params:d(T)}),Q.params=d(Q.params)}const ae=t.resolve(H,Q),x=L.hash||"";ae.params=u(m(ae.params));const z=v0(r,Te({},L,{hash:f0(x),path:ae.path})),M=o.createHref(z);return Te({fullPath:z,hash:x,query:r===ji?E0(L.query):L.query||{}},ae,{redirectedFrom:void 0,href:M})}function y(L){return typeof L=="string"?Vo(n,L,c.value.path):Te({},L)}function _(L,Q){if(p!==L)return jn(Xe.NAVIGATION_CANCELLED,{from:Q,to:L})}function A(L){return N(L)}function R(L){return A(Te(y(L),{replace:!0}))}function O(L,Q){const H=L.matched[L.matched.length-1];if(H&&H.redirect){const{redirect:ae}=H;let x=typeof ae=="function"?ae(L,Q):ae;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=y(x):{path:x},x.params={}),Te({query:L.query,hash:L.hash,params:x.path!=null?{}:L.params},x)}}function N(L,Q){const H=p=S(L),ae=c.value,x=L.state,z=L.force,M=L.replace===!0,T=O(H,ae);if(T)return N(Te(y(T),{state:typeof T=="object"?Te({},x,T.state):x,force:z,replace:M}),Q||H);const F=H;F.redirectedFrom=Q;let j;return!z&&y0(r,ae,H)&&(j=jn(Xe.NAVIGATION_DUPLICATED,{to:F,from:ae}),We(ae,ae,!0,!1)),(j?Promise.resolve(j):oe(F,ae)).catch(G=>Nt(G)?Nt(G,Xe.NAVIGATION_GUARD_REDIRECT)?G:te(G):fe(G,F,ae)).then(G=>{if(G){if(Nt(G,Xe.NAVIGATION_GUARD_REDIRECT))return N(Te({replace:M},y(G.to),{state:typeof G.to=="object"?Te({},x,G.to.state):x,force:z}),Q||F)}else G=U(F,ae,!0,M,x);return be(F,ae,G),G})}function V(L,Q){const H=_(L,Q);return H?Promise.reject(H):Promise.resolve()}function D(L){const Q=Be.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(L):L()}function oe(L,Q){let H;const[ae,x,z]=L0(L,Q);H=jo(ae.reverse(),"beforeRouteLeave",L,Q);for(const T of ae)T.leaveGuards.forEach(F=>{H.push(rn(F,L,Q))});const M=V.bind(null,L,Q);return H.push(M),Ce(H).then(()=>{H=[];for(const T of s.list())H.push(rn(T,L,Q));return H.push(M),Ce(H)}).then(()=>{H=jo(x,"beforeRouteUpdate",L,Q);for(const T of x)T.updateGuards.forEach(F=>{H.push(rn(F,L,Q))});return H.push(M),Ce(H)}).then(()=>{H=[];for(const T of z)if(T.beforeEnter)if(It(T.beforeEnter))for(const F of T.beforeEnter)H.push(rn(F,L,Q));else H.push(rn(T.beforeEnter,L,Q));return H.push(M),Ce(H)}).then(()=>(L.matched.forEach(T=>T.enterCallbacks={}),H=jo(z,"beforeRouteEnter",L,Q,D),H.push(M),Ce(H))).then(()=>{H=[];for(const T of l.list())H.push(rn(T,L,Q));return H.push(M),Ce(H)}).catch(T=>Nt(T,Xe.NAVIGATION_CANCELLED)?T:Promise.reject(T))}function be(L,Q,H){a.list().forEach(ae=>D(()=>ae(L,Q,H)))}function U(L,Q,H,ae,x){const z=_(L,Q);if(z)return z;const M=Q===Qt,T=$n?history.state:{};H&&(ae||M?o.replace(L.fullPath,Te({scroll:M&&T&&T.scroll},x)):o.push(L.fullPath,x)),c.value=L,We(L,Q,H,M),te()}let ye;function Fe(){ye||(ye=o.listen((L,Q,H)=>{if(!Ie.listening)return;const ae=S(L),x=O(ae,Ie.currentRoute.value);if(x){N(Te(x,{replace:!0,force:!0}),ae).catch(lr);return}p=ae;const z=c.value;$n&&A0(Di(z.fullPath,H.delta),ko()),oe(ae,z).catch(M=>Nt(M,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_CANCELLED)?M:Nt(M,Xe.NAVIGATION_GUARD_REDIRECT)?(N(Te(y(M.to),{force:!0}),ae).then(T=>{Nt(T,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_DUPLICATED)&&!H.delta&&H.type===bs.pop&&o.go(-1,!1)}).catch(lr),Promise.reject()):(H.delta&&o.go(-H.delta,!1),fe(M,ae,z))).then(M=>{M=M||U(ae,z,!1),M&&(H.delta&&!Nt(M,Xe.NAVIGATION_CANCELLED)?o.go(-H.delta,!1):H.type===bs.pop&&Nt(M,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),be(ae,z,M)}).catch(lr)}))}let je=Wn(),ze=Wn(),xe;function fe(L,Q,H){te(L);const ae=ze.list();return ae.length?ae.forEach(x=>x(L,Q,H)):console.error(L),Promise.reject(L)}function Oe(){return xe&&c.value!==Qt?Promise.resolve():new Promise((L,Q)=>{je.add([L,Q])})}function te(L){return xe||(xe=!L,Fe(),je.list().forEach(([Q,H])=>L?H(L):Q()),je.reset()),L}function We(L,Q,H,ae){const{scrollBehavior:x}=e;if(!$n||!x)return Promise.resolve();const z=!H&&$0(Di(L.fullPath,0))||(ae||!H)&&history.state&&history.state.scroll||null;return Tn().then(()=>x(L,Q,z)).then(M=>M&&I0(M)).catch(M=>fe(M,L,Q))}const Se=L=>o.go(L);let ct;const Be=new Set,Ie={currentRoute:c,listening:!0,addRoute:f,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:C,getRoutes:h,resolve:S,options:e,push:A,replace:R,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:s.add,beforeResolve:l.add,afterEach:a.add,onError:ze.add,isReady:Oe,install(L){L.component("RouterLink",rf),L.component("RouterView",lf),L.config.globalProperties.$router=Ie,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>I(c)}),$n&&!ct&&c.value===Qt&&(ct=!0,A(o.location).catch(ae=>{}));const Q={};for(const ae in Qt)Object.defineProperty(Q,ae,{get:()=>c.value[ae],enumerable:!0});L.provide(Ns,Ie),L.provide(Hs,Na(Q)),L.provide(hs,c);const H=L.unmount;Be.add(L),L.unmount=function(){Be.delete(L),Be.size<1&&(p=Qt,ye&&ye(),ye=null,c.value=Qt,ct=!1,xe=!1),H()}}};function Ce(L){return L.reduce((Q,H)=>Q.then(()=>D(H)),Promise.resolve())}return Ie}function df(e){return Ot(Hs)}function dc(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=dc(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function uf(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=dc(e))&&(r&&(r+=" "),r+=t);return r}const pf=(e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},ff=(e,t)=>({classGroupId:e,validator:t}),uc=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),to="-",Ji=[],mf="arbitrary..",bf=e=>{const t=hf(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:l=>{if(l.startsWith("[")&&l.endsWith("]"))return gf(l);const a=l.split(to),c=a[0]===""&&a.length>1?1:0;return pc(a,c,t)},getConflictingClassGroupIds:(l,a)=>{if(a){const c=r[l],p=n[l];return c?p?pf(p,c):c:p||Ji}return n[l]||Ji}}},pc=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const o=e[t],s=n.nextPart.get(o);if(s){const p=pc(e,t+1,s);if(p)return p}const l=n.validators;if(l===null)return;const a=t===0?e.join(to):e.slice(t).join(to),c=l.length;for(let p=0;p<c;p++){const u=l[p];if(u.validator(a))return u.classGroupId}},gf=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?mf+r:void 0})(),hf=e=>{const{theme:t,classGroups:n}=e;return xf(n,t)},xf=(e,t)=>{const n=uc();for(const r in e){const o=e[r];Gs(o,n,r,t)}return n},Gs=(e,t,n,r)=>{const o=e.length;for(let s=0;s<o;s++){const l=e[s];vf(l,t,n,r)}},vf=(e,t,n,r)=>{if(typeof e=="string"){yf(e,t,n);return}if(typeof e=="function"){kf(e,t,n,r);return}wf(e,t,n,r)},yf=(e,t,n)=>{const r=e===""?t:fc(t,e);r.classGroupId=n},kf=(e,t,n,r)=>{if(zf(e)){Gs(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(ff(n,e))},wf=(e,t,n,r)=>{const o=Object.entries(e),s=o.length;for(let l=0;l<s;l++){const[a,c]=o[l];Gs(c,fc(t,a),n,r)}},fc=(e,t)=>{let n=e;const r=t.split(to),o=r.length;for(let s=0;s<o;s++){const l=r[s];let a=n.nextPart.get(l);a||(a=uc(),n.nextPart.set(l,a)),n=a}return n},zf=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,_f=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const o=(s,l)=>{n[s]=l,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(s){let l=n[s];if(l!==void 0)return l;if((l=r[s])!==void 0)return o(s,l),l},set(s,l){s in n?n[s]=l:o(s,l)}}},xs="!",Qi=":",Cf=[],ea=(e,t,n,r,o)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:o}),Sf=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=o=>{const s=[];let l=0,a=0,c=0,p;const u=o.length;for(let h=0;h<u;h++){const C=o[h];if(l===0&&a===0){if(C===Qi){s.push(o.slice(c,h)),c=h+1;continue}if(C==="/"){p=h;continue}}C==="["?l++:C==="]"?l--:C==="("?a++:C===")"&&a--}const d=s.length===0?o:o.slice(c);let m=d,f=!1;d.endsWith(xs)?(m=d.slice(0,-1),f=!0):d.startsWith(xs)&&(m=d.slice(1),f=!0);const w=p&&p>c?p-c:void 0;return ea(s,f,m,w)};if(t){const o=t+Qi,s=r;r=l=>l.startsWith(o)?s(l.slice(o.length)):ea(Cf,!1,l,void 0,!0)}if(n){const o=r;r=s=>n({className:s,parseClassName:o})}return r},If=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{t.set(n,1e6+r)}),n=>{const r=[];let o=[];for(let s=0;s<n.length;s++){const l=n[s],a=l[0]==="[",c=t.has(l);a||c?(o.length>0&&(o.sort(),r.push(...o),o=[]),r.push(l)):o.push(l)}return o.length>0&&(o.sort(),r.push(...o)),r}},Af=e=>({cache:_f(e.cacheSize),parseClassName:Sf(e),sortModifiers:If(e),postfixLookupClassGroupIds:$f(e),...bf(e)}),$f=e=>{const t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let r=0;r<n.length;r++)t[n[r]]=!0;return t},Mf=/\s+/,Pf=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:s,postfixLookupClassGroupIds:l}=t,a=[],c=e.trim().split(Mf);let p="";for(let u=c.length-1;u>=0;u-=1){const d=c[u],{isExternal:m,modifiers:f,hasImportantModifier:w,baseClassName:h,maybePostfixModifierPosition:C}=n(d);if(m){p=d+(p.length>0?" "+p:p);continue}let S=!!C,y;if(S){const N=h.substring(0,C);y=r(N);const V=y&&l[y]?r(h):void 0;V&&V!==y&&(y=V,S=!1)}else y=r(h);if(!y){if(!S){p=d+(p.length>0?" "+p:p);continue}if(y=r(h),!y){p=d+(p.length>0?" "+p:p);continue}S=!1}const _=f.length===0?"":f.length===1?f[0]:s(f).join(":"),A=w?_+xs:_,R=A+y;if(a.indexOf(R)>-1)continue;a.push(R);const O=o(y,S);for(let N=0;N<O.length;++N){const V=O[N];a.push(A+V)}p=d+(p.length>0?" "+p:p)}return p},Tf=(...e)=>{let t=0,n,r,o="";for(;t<e.length;)(n=e[t++])&&(r=mc(n))&&(o&&(o+=" "),o+=r);return o},mc=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=mc(e[r]))&&(n&&(n+=" "),n+=t);return n},Rf=(e,...t)=>{let n,r,o,s;const l=c=>{const p=t.reduce((u,d)=>d(u),e());return n=Af(p),r=n.cache.get,o=n.cache.set,s=a,a(c)},a=c=>{const p=r(c);if(p)return p;const u=Pf(c,n);return o(c,u),u};return s=l,(...c)=>s(Tf(...c))},Ef=[],Ze=e=>{const t=n=>n[e]||Ef;return t.isThemeGetter=!0,t.themeKey=e,t},bc=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,gc=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Ff=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Lf=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Of=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Vf=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,Df=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,jf=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,en=e=>Ff.test(e),we=e=>!!e&&!Number.isNaN(Number(e)),Mt=e=>!!e&&Number.isInteger(Number(e)),Bo=e=>e.endsWith("%")&&we(e.slice(0,-1)),Ht=e=>Lf.test(e),hc=()=>!0,Bf=e=>Of.test(e)&&!Vf.test(e),Us=()=>!1,Nf=e=>Df.test(e),Hf=e=>jf.test(e),Gf=e=>!ne(e)&&!re(e),Uf=e=>e.startsWith("@container")&&(e[10]==="/"&&e[11]!==void 0||e[11]==="s"&&e[16]!==void 0&&e.startsWith("-size/",10)||e[11]==="n"&&e[18]!==void 0&&e.startsWith("-normal/",10)),qf=e=>pn(e,yc,Us),ne=e=>bc.test(e),xn=e=>pn(e,kc,Bf),ta=e=>pn(e,em,we),Wf=e=>pn(e,zc,hc),Xf=e=>pn(e,wc,Us),na=e=>pn(e,xc,Us),Yf=e=>pn(e,vc,Hf),Tr=e=>pn(e,_c,Nf),re=e=>gc.test(e),Xn=e=>Cn(e,kc),Kf=e=>Cn(e,wc),ra=e=>Cn(e,xc),Zf=e=>Cn(e,yc),Jf=e=>Cn(e,vc),Rr=e=>Cn(e,_c,!0),Qf=e=>Cn(e,zc,!0),pn=(e,t,n)=>{const r=bc.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},Cn=(e,t,n=!1)=>{const r=gc.exec(e);return r?r[1]?t(r[1]):n:!1},xc=e=>e==="position"||e==="percentage",vc=e=>e==="image"||e==="url",yc=e=>e==="length"||e==="size"||e==="bg-size",kc=e=>e==="length",em=e=>e==="number",wc=e=>e==="family-name",zc=e=>e==="number"||e==="weight",_c=e=>e==="shadow",tm=()=>{const e=Ze("color"),t=Ze("font"),n=Ze("text"),r=Ze("font-weight"),o=Ze("tracking"),s=Ze("leading"),l=Ze("breakpoint"),a=Ze("container"),c=Ze("spacing"),p=Ze("radius"),u=Ze("shadow"),d=Ze("inset-shadow"),m=Ze("text-shadow"),f=Ze("drop-shadow"),w=Ze("blur"),h=Ze("perspective"),C=Ze("aspect"),S=Ze("ease"),y=Ze("animate"),_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],A=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],R=()=>[...A(),re,ne],O=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto","contain","none"],V=()=>[re,ne,c],D=()=>[en,"full","auto",...V()],oe=()=>[Mt,"none","subgrid",re,ne],be=()=>["auto",{span:["full",Mt,re,ne]},Mt,re,ne],U=()=>[Mt,"auto",re,ne],ye=()=>["auto","min","max","fr",re,ne],Fe=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],je=()=>["start","end","center","stretch","center-safe","end-safe"],ze=()=>["auto",...V()],xe=()=>[en,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...V()],fe=()=>[a,en,"screen","full","dvw","lvw","svw","min","max","fit",...V()],Oe=()=>[en,"screen","full","lh","dvh","lvh","svh","min","max","fit",...V()],te=()=>[e,re,ne],We=()=>[...A(),ra,na,{position:[re,ne]}],Se=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ct=()=>["auto","cover","contain",Zf,qf,{size:[re,ne]}],Be=()=>[Bo,Xn,xn],Ie=()=>["","none","full",p,re,ne],Ce=()=>["",we,Xn,xn],L=()=>["solid","dashed","dotted","double"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>[we,Bo,ra,na],ae=()=>["","none",w,re,ne],x=()=>["none",we,re,ne],z=()=>["none",we,re,ne],M=()=>[we,re,ne],T=()=>[en,"full",...V()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ht],breakpoint:[Ht],color:[hc],container:[Ht],"drop-shadow":[Ht],ease:["in","out","in-out"],font:[Gf],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ht],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ht],shadow:[Ht],spacing:["px",we],text:[Ht],"text-shadow":[Ht],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",en,ne,re,C]}],container:["container"],"container-type":[{"@container":["","normal","size",re,ne]}],"container-named":[Uf],columns:[{columns:[we,"auto",ne,re,a]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:R()}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:D()}],"inset-x":[{"inset-x":D()}],"inset-y":[{"inset-y":D()}],start:[{"inset-s":D(),start:D()}],end:[{"inset-e":D(),end:D()}],"inset-bs":[{"inset-bs":D()}],"inset-be":[{"inset-be":D()}],top:[{top:D()}],right:[{right:D()}],bottom:[{bottom:D()}],left:[{left:D()}],visibility:["visible","invisible","collapse"],z:[{z:[Mt,"auto",re,ne]}],basis:[{basis:[en,"full","auto",a,...V()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[we,en,"auto","initial","none",ne]}],grow:[{grow:["",we,re,ne]}],shrink:[{shrink:["",we,re,ne]}],order:[{order:[Mt,"first","last","none",re,ne]}],"grid-cols":[{"grid-cols":oe()}],"col-start-end":[{col:be()}],"col-start":[{"col-start":U()}],"col-end":[{"col-end":U()}],"grid-rows":[{"grid-rows":oe()}],"row-start-end":[{row:be()}],"row-start":[{"row-start":U()}],"row-end":[{"row-end":U()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ye()}],"auto-rows":[{"auto-rows":ye()}],gap:[{gap:V()}],"gap-x":[{"gap-x":V()}],"gap-y":[{"gap-y":V()}],"justify-content":[{justify:[...Fe(),"normal"]}],"justify-items":[{"justify-items":[...je(),"normal"]}],"justify-self":[{"justify-self":["auto",...je()]}],"align-content":[{content:["normal",...Fe()]}],"align-items":[{items:[...je(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...je(),{baseline:["","last"]}]}],"place-content":[{"place-content":Fe()}],"place-items":[{"place-items":[...je(),"baseline"]}],"place-self":[{"place-self":["auto",...je()]}],p:[{p:V()}],px:[{px:V()}],py:[{py:V()}],ps:[{ps:V()}],pe:[{pe:V()}],pbs:[{pbs:V()}],pbe:[{pbe:V()}],pt:[{pt:V()}],pr:[{pr:V()}],pb:[{pb:V()}],pl:[{pl:V()}],m:[{m:ze()}],mx:[{mx:ze()}],my:[{my:ze()}],ms:[{ms:ze()}],me:[{me:ze()}],mbs:[{mbs:ze()}],mbe:[{mbe:ze()}],mt:[{mt:ze()}],mr:[{mr:ze()}],mb:[{mb:ze()}],ml:[{ml:ze()}],"space-x":[{"space-x":V()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":V()}],"space-y-reverse":["space-y-reverse"],size:[{size:xe()}],"inline-size":[{inline:["auto",...fe()]}],"min-inline-size":[{"min-inline":["auto",...fe()]}],"max-inline-size":[{"max-inline":["none",...fe()]}],"block-size":[{block:["auto",...Oe()]}],"min-block-size":[{"min-block":["auto",...Oe()]}],"max-block-size":[{"max-block":["none",...Oe()]}],w:[{w:[a,"screen",...xe()]}],"min-w":[{"min-w":[a,"screen","none",...xe()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[l]},...xe()]}],h:[{h:["screen","lh",...xe()]}],"min-h":[{"min-h":["screen","lh","none",...xe()]}],"max-h":[{"max-h":["screen","lh","none",...xe()]}],"font-size":[{text:["base",n,Xn,xn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Qf,Wf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Bo,ne]}],"font-family":[{font:[Kf,Xf,t]}],"font-features":[{"font-features":[ne]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,re,ne]}],"line-clamp":[{"line-clamp":[we,"none",re,ta]}],leading:[{leading:["none",s,...V()]}],"list-image":[{"list-image":["none",re,ne]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",re,ne]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:te()}],"text-color":[{text:te()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...L(),"wavy"]}],"text-decoration-thickness":[{decoration:[we,"from-font","auto",re,xn]}],"text-decoration-color":[{decoration:te()}],"underline-offset":[{"underline-offset":[we,"auto",re,ne]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:V()}],"tab-size":[{tab:[Mt,re,ne]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",re,ne]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",re,ne]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:We()}],"bg-repeat":[{bg:Se()}],"bg-size":[{bg:ct()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Mt,re,ne],radial:["",re,ne],conic:["",Mt,re,ne]},Jf,Yf]}],"bg-color":[{bg:te()}],"gradient-from-pos":[{from:Be()}],"gradient-via-pos":[{via:Be()}],"gradient-to-pos":[{to:Be()}],"gradient-from":[{from:te()}],"gradient-via":[{via:te()}],"gradient-to":[{to:te()}],rounded:[{rounded:Ie()}],"rounded-s":[{"rounded-s":Ie()}],"rounded-e":[{"rounded-e":Ie()}],"rounded-t":[{"rounded-t":Ie()}],"rounded-r":[{"rounded-r":Ie()}],"rounded-b":[{"rounded-b":Ie()}],"rounded-l":[{"rounded-l":Ie()}],"rounded-ss":[{"rounded-ss":Ie()}],"rounded-se":[{"rounded-se":Ie()}],"rounded-ee":[{"rounded-ee":Ie()}],"rounded-es":[{"rounded-es":Ie()}],"rounded-tl":[{"rounded-tl":Ie()}],"rounded-tr":[{"rounded-tr":Ie()}],"rounded-br":[{"rounded-br":Ie()}],"rounded-bl":[{"rounded-bl":Ie()}],"border-w":[{border:Ce()}],"border-w-x":[{"border-x":Ce()}],"border-w-y":[{"border-y":Ce()}],"border-w-s":[{"border-s":Ce()}],"border-w-e":[{"border-e":Ce()}],"border-w-bs":[{"border-bs":Ce()}],"border-w-be":[{"border-be":Ce()}],"border-w-t":[{"border-t":Ce()}],"border-w-r":[{"border-r":Ce()}],"border-w-b":[{"border-b":Ce()}],"border-w-l":[{"border-l":Ce()}],"divide-x":[{"divide-x":Ce()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ce()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...L(),"hidden","none"]}],"divide-style":[{divide:[...L(),"hidden","none"]}],"border-color":[{border:te()}],"border-color-x":[{"border-x":te()}],"border-color-y":[{"border-y":te()}],"border-color-s":[{"border-s":te()}],"border-color-e":[{"border-e":te()}],"border-color-bs":[{"border-bs":te()}],"border-color-be":[{"border-be":te()}],"border-color-t":[{"border-t":te()}],"border-color-r":[{"border-r":te()}],"border-color-b":[{"border-b":te()}],"border-color-l":[{"border-l":te()}],"divide-color":[{divide:te()}],"outline-style":[{outline:[...L(),"none","hidden"]}],"outline-offset":[{"outline-offset":[we,re,ne]}],"outline-w":[{outline:["",we,Xn,xn]}],"outline-color":[{outline:te()}],shadow:[{shadow:["","inner","none",u,Rr,Tr]}],"shadow-color":[{shadow:te()}],"inset-shadow":[{"inset-shadow":["none",d,Rr,Tr]}],"inset-shadow-color":[{"inset-shadow":te()}],"ring-w":[{ring:Ce()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:te()}],"ring-offset-w":[{"ring-offset":[we,xn]}],"ring-offset-color":[{"ring-offset":te()}],"inset-ring-w":[{"inset-ring":Ce()}],"inset-ring-color":[{"inset-ring":te()}],"text-shadow":[{"text-shadow":["none",m,Rr,Tr]}],"text-shadow-color":[{"text-shadow":te()}],opacity:[{opacity:[we,re,ne]}],"mix-blend":[{"mix-blend":[...Q(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Q()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[we]}],"mask-image-linear-from-pos":[{"mask-linear-from":H()}],"mask-image-linear-to-pos":[{"mask-linear-to":H()}],"mask-image-linear-from-color":[{"mask-linear-from":te()}],"mask-image-linear-to-color":[{"mask-linear-to":te()}],"mask-image-t-from-pos":[{"mask-t-from":H()}],"mask-image-t-to-pos":[{"mask-t-to":H()}],"mask-image-t-from-color":[{"mask-t-from":te()}],"mask-image-t-to-color":[{"mask-t-to":te()}],"mask-image-r-from-pos":[{"mask-r-from":H()}],"mask-image-r-to-pos":[{"mask-r-to":H()}],"mask-image-r-from-color":[{"mask-r-from":te()}],"mask-image-r-to-color":[{"mask-r-to":te()}],"mask-image-b-from-pos":[{"mask-b-from":H()}],"mask-image-b-to-pos":[{"mask-b-to":H()}],"mask-image-b-from-color":[{"mask-b-from":te()}],"mask-image-b-to-color":[{"mask-b-to":te()}],"mask-image-l-from-pos":[{"mask-l-from":H()}],"mask-image-l-to-pos":[{"mask-l-to":H()}],"mask-image-l-from-color":[{"mask-l-from":te()}],"mask-image-l-to-color":[{"mask-l-to":te()}],"mask-image-x-from-pos":[{"mask-x-from":H()}],"mask-image-x-to-pos":[{"mask-x-to":H()}],"mask-image-x-from-color":[{"mask-x-from":te()}],"mask-image-x-to-color":[{"mask-x-to":te()}],"mask-image-y-from-pos":[{"mask-y-from":H()}],"mask-image-y-to-pos":[{"mask-y-to":H()}],"mask-image-y-from-color":[{"mask-y-from":te()}],"mask-image-y-to-color":[{"mask-y-to":te()}],"mask-image-radial":[{"mask-radial":[re,ne]}],"mask-image-radial-from-pos":[{"mask-radial-from":H()}],"mask-image-radial-to-pos":[{"mask-radial-to":H()}],"mask-image-radial-from-color":[{"mask-radial-from":te()}],"mask-image-radial-to-color":[{"mask-radial-to":te()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":A()}],"mask-image-conic-pos":[{"mask-conic":[we]}],"mask-image-conic-from-pos":[{"mask-conic-from":H()}],"mask-image-conic-to-pos":[{"mask-conic-to":H()}],"mask-image-conic-from-color":[{"mask-conic-from":te()}],"mask-image-conic-to-color":[{"mask-conic-to":te()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:We()}],"mask-repeat":[{mask:Se()}],"mask-size":[{mask:ct()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",re,ne]}],filter:[{filter:["","none",re,ne]}],blur:[{blur:ae()}],brightness:[{brightness:[we,re,ne]}],contrast:[{contrast:[we,re,ne]}],"drop-shadow":[{"drop-shadow":["","none",f,Rr,Tr]}],"drop-shadow-color":[{"drop-shadow":te()}],grayscale:[{grayscale:["",we,re,ne]}],"hue-rotate":[{"hue-rotate":[we,re,ne]}],invert:[{invert:["",we,re,ne]}],saturate:[{saturate:[we,re,ne]}],sepia:[{sepia:["",we,re,ne]}],"backdrop-filter":[{"backdrop-filter":["","none",re,ne]}],"backdrop-blur":[{"backdrop-blur":ae()}],"backdrop-brightness":[{"backdrop-brightness":[we,re,ne]}],"backdrop-contrast":[{"backdrop-contrast":[we,re,ne]}],"backdrop-grayscale":[{"backdrop-grayscale":["",we,re,ne]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[we,re,ne]}],"backdrop-invert":[{"backdrop-invert":["",we,re,ne]}],"backdrop-opacity":[{"backdrop-opacity":[we,re,ne]}],"backdrop-saturate":[{"backdrop-saturate":[we,re,ne]}],"backdrop-sepia":[{"backdrop-sepia":["",we,re,ne]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":V()}],"border-spacing-x":[{"border-spacing-x":V()}],"border-spacing-y":[{"border-spacing-y":V()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",re,ne]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[we,"initial",re,ne]}],ease:[{ease:["linear","initial",S,re,ne]}],delay:[{delay:[we,re,ne]}],animate:[{animate:["none",y,re,ne]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[h,re,ne]}],"perspective-origin":[{"perspective-origin":R()}],rotate:[{rotate:x()}],"rotate-x":[{"rotate-x":x()}],"rotate-y":[{"rotate-y":x()}],"rotate-z":[{"rotate-z":x()}],scale:[{scale:z()}],"scale-x":[{"scale-x":z()}],"scale-y":[{"scale-y":z()}],"scale-z":[{"scale-z":z()}],"scale-3d":["scale-3d"],skew:[{skew:M()}],"skew-x":[{"skew-x":M()}],"skew-y":[{"skew-y":M()}],transform:[{transform:[re,ne,"","none","gpu","cpu"]}],"transform-origin":[{origin:R()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:T()}],"translate-x":[{"translate-x":T()}],"translate-y":[{"translate-y":T()}],"translate-z":[{"translate-z":T()}],"translate-none":["translate-none"],zoom:[{zoom:[Mt,re,ne]}],accent:[{accent:te()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:te()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",re,ne]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":te()}],"scrollbar-track-color":[{"scrollbar-track":te()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":V()}],"scroll-mx":[{"scroll-mx":V()}],"scroll-my":[{"scroll-my":V()}],"scroll-ms":[{"scroll-ms":V()}],"scroll-me":[{"scroll-me":V()}],"scroll-mbs":[{"scroll-mbs":V()}],"scroll-mbe":[{"scroll-mbe":V()}],"scroll-mt":[{"scroll-mt":V()}],"scroll-mr":[{"scroll-mr":V()}],"scroll-mb":[{"scroll-mb":V()}],"scroll-ml":[{"scroll-ml":V()}],"scroll-p":[{"scroll-p":V()}],"scroll-px":[{"scroll-px":V()}],"scroll-py":[{"scroll-py":V()}],"scroll-ps":[{"scroll-ps":V()}],"scroll-pe":[{"scroll-pe":V()}],"scroll-pbs":[{"scroll-pbs":V()}],"scroll-pbe":[{"scroll-pbe":V()}],"scroll-pt":[{"scroll-pt":V()}],"scroll-pr":[{"scroll-pr":V()}],"scroll-pb":[{"scroll-pb":V()}],"scroll-pl":[{"scroll-pl":V()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",re,ne]}],fill:[{fill:["none",...te()]}],"stroke-w":[{stroke:[we,Xn,xn,ta]}],stroke:[{stroke:["none",...te()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["start","end","right","left"],"inset-y":["inset-bs","inset-be","top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["ps","pe","pr","pl"],py:["pbs","pbe","pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["ms","me","mr","ml"],my:["mbs","mbe","mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-s","border-w-e","border-w-r","border-w-l"],"border-w-y":["border-w-bs","border-w-be","border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-s","border-color-e","border-color-r","border-color-l"],"border-color-y":["border-color-bs","border-color-be","border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-ms","scroll-me","scroll-mr","scroll-ml"],"scroll-my":["scroll-mbs","scroll-mbe","scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-ps","scroll-pe","scroll-pr","scroll-pl"],"scroll-py":["scroll-pbs","scroll-pbe","scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},nm=Rf(tm);function pe(...e){return nm(uf(e))}const rm={class:"h-full w-full overflow-visible",xmlns:"http://www.w3.org/2000/svg"},om=["id"],sm=["stop-color"],im=["stop-color"],am=["rx","ry","stroke","stroke-width","stroke-dasharray"],lm=["rx","ry","stroke","stroke-width","stroke-dasharray"],cm=se({__name:"BorderBeam",props:{borderWidth:{default:2},size:{default:20},duration:{default:6},colorFrom:{default:"#38bdf8"},colorTo:{default:"#a855f7"},delay:{default:0},reverse:{type:Boolean,default:!1},borderRadius:{default:16},glow:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=Bn(),r=ee(()=>{if(typeof t.borderRadius=="number")return t.borderRadius;const a=parseFloat(t.borderRadius);return isNaN(a)?16:a}),o=ee(()=>t.size>50?18:Math.min(Math.max(t.size,5),80)),s=ee(()=>`${o.value} ${100-o.value}`),l=ee(()=>({animationDuration:`${t.duration}s`,animationDelay:`-${t.delay}s`,animationDirection:t.reverse?"reverse":"normal"}));return(a,c)=>(b(),g("div",{class:$(I(pe)("pointer-events-none absolute inset-0 rounded-[inherit] overflow-visible",t.class))},[(b(),g("svg",rm,[i("defs",null,[i("linearGradient",{id:`border-beam-grad-${I(n)}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[i("stop",{offset:"0%","stop-color":t.colorFrom},null,8,sm),i("stop",{offset:"100%","stop-color":t.colorTo},null,8,im)],8,om)]),t.glow?(b(),g("rect",{key:0,pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${I(n)})`,"stroke-width":t.borderWidth*2,"stroke-dasharray":s.value,"stroke-linecap":"round",opacity:"0.45",class:"border-beam-svg-motion blur-[3px]",style:he(l.value)},null,12,am)):J("",!0),i("rect",{pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${I(n)})`,"stroke-width":t.borderWidth,"stroke-dasharray":s.value,"stroke-linecap":"round",class:"border-beam-svg-motion",style:he(l.value)},null,12,lm)]))],2))}}),Ge=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},vs=Ge(cm,[["__scopeId","data-v-bf918acf"]]),dm={class:"relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-white"},um=se({__name:"ShimmerButton",props:{shimmerColor:{default:"#38bdf8"},shimmerSize:{default:"0.12em"},shimmerDuration:{default:"2.5s"},borderRadius:{default:"9999px"},class:{}},setup(e){const t=e,n=ee(()=>({"--shimmer-color":t.shimmerColor,"--shimmer-size":t.shimmerSize,"--speed":t.shimmerDuration,"--radius":t.borderRadius}));return(r,o)=>(b(),g("button",{style:he(n.value),class:$(I(pe)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white transition-all duration-300 active:scale-95","border border-white/10 [border-radius:var(--radius)]","bg-zinc-900/90 shadow-md hover:shadow-lg hover:shadow-sky-500/20 dark:bg-black/90",t.class))},[o[0]||(o[0]=i("div",{class:"shimmer-spin-container pointer-events-none absolute -inset-[100%] [aspect-ratio:1] [border-radius:inherit]"},[i("div",{class:"shimmer-spin-gradient h-full w-full animate-shimmer-spin"})],-1)),o[1]||(o[1]=i("div",{class:"absolute [inset:var(--shimmer-size)] [border-radius:inherit] bg-zinc-950/95 transition-colors duration-300 group-hover:bg-zinc-900/95"},null,-1)),i("span",dm,[Qe(r.$slots,"default",{},void 0,!0)])],6))}}),cr=Ge(um,[["__scopeId","data-v-6b251134"]]),pm=se({__name:"ShinyText",props:{text:{},duration:{default:2.5},variant:{default:"white"},class:{}},setup(e){const t=e,n=ee(()=>({"--duration":`${t.duration}s`}));return(r,o)=>(b(),g("span",{style:he(n.value),class:$(I(pe)("shiny-text-root inline-block font-bold bg-clip-text text-transparent",t.variant==="white"&&"shiny-variant-white",t.variant==="cyber"&&"shiny-variant-cyber",t.class))},[Qe(r.$slots,"default",{},()=>[Ae(P(t.text),1)],!0)],6))}}),dr=Ge(pm,[["__scopeId","data-v-31108f82"]]),fm=se({__name:"RetroGrid",props:{angle:{default:65},cellSize:{default:60},opacity:{default:.5},lightLineColor:{default:"#94a3b8"},darkLineColor:{default:"#38bdf8"},mask:{type:Boolean,default:!0},maskClass:{},class:{}},setup(e){const t=e,n=ee(()=>({"--grid-angle":`${t.angle}deg`,"--cell-size":`${t.cellSize}px`,"--opacity":t.opacity.toString(),"--light-line":t.lightLineColor,"--dark-line":t.darkLineColor}));return(r,o)=>(b(),g("div",{style:he(n.value),class:$(I(pe)("pointer-events-none absolute h-full w-full overflow-hidden opacity-[var(--opacity)] [perspective:200px]",t.class))},[i("div",{class:$(I(pe)("absolute inset-0 [transform:rotateX(var(--grid-angle))]",t.mask&&"retro-grid-horizon-mask"))},[...o[0]||(o[0]=[i("div",{class:"retro-grid-plane animate-retro-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]"},null,-1)])],2)],6))}}),ys=Ge(fm,[["__scopeId","data-v-2d20ad14"]]),Cc=se({__name:"BentoGrid",props:{class:{}},setup(e){const t=e;return(n,r)=>(b(),g("div",{class:$(I(pe)("grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",t.class))},[Qe(n.$slots,"default")],2))}}),mm={class:"relative z-0 h-44 w-full overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"},bm={class:"relative z-10 flex flex-col gap-2 pt-4"},gm={class:"flex items-center gap-2.5"},hm={class:"text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},xm={class:"text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"},vm={key:0,class:"mt-3 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400"},ym=se({__name:"BentoCard",props:{name:{},description:{},class:{},href:{},cta:{},spotlightRadius:{default:300}},setup(e){const t=e,n=E(0),r=E(0),o=E(!1);function s(l){const a=l.currentTarget.getBoundingClientRect();n.value=l.clientX-a.left,r.value=l.clientY-a.top}return(l,a)=>{const c=zr("router-link");return b(),g("div",{class:$(I(pe)("group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300","border border-zinc-200 bg-white/70 shadow-sm backdrop-blur-md hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10",t.class)),onMousemove:s,onMouseenter:a[0]||(a[0]=p=>o.value=!0),onMouseleave:a[1]||(a[1]=p=>o.value=!1)},[i("div",{class:"pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",style:he({background:`radial-gradient(${t.spotlightRadius}px circle at ${n.value}px ${r.value}px, var(--spotlight-color), transparent 80%)`})},null,4),i("div",mm,[Qe(l.$slots,"background",{},void 0,!0)]),i("div",bm,[i("div",gm,[Qe(l.$slots,"icon",{},void 0,!0),i("h3",hm,P(t.name),1)]),i("p",xm,P(t.description),1),t.cta||l.$slots.cta?(b(),g("div",vm,[Qe(l.$slots,"cta",{},()=>[t.href?(b(),me(c,{key:0,to:t.href,class:"inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"},{default:Y(()=>[Ae(P(t.cta)+" ",1),a[2]||(a[2]=i("span",{"aria-hidden":"true"},"→",-1))]),_:1},8,["to"])):J("",!0)],!0)])):J("",!0)])],34)}}}),ut=Ge(ym,[["__scopeId","data-v-f7ebca2d"]]),km=se({__name:"Marquee",props:{duration:{default:30},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},repeat:{default:4},class:{}},setup(e){const t=e,n=ee(()=>({"--duration":`${t.duration}s`}));return(r,o)=>(b(),g("div",{style:he(n.value),class:$(I(pe)("group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",t.vertical?"flex-col":"flex-row",t.class))},[(b(!0),g(ie,null,ke(t.repeat,s=>(b(),g("div",{key:s,class:$(I(pe)("flex shrink-0 justify-around [gap:var(--gap)]",t.vertical?"flex-col animate-marquee-vertical":"flex-row animate-marquee",t.pauseOnHover&&"group-hover:[animation-play-state:paused]",t.reverse&&"[animation-direction:reverse]"))},[Qe(r.$slots,"default",{},void 0,!0)],2))),128))],6))}}),jr=Ge(km,[["__scopeId","data-v-2ea856f7"]]),wm={"aria-hidden":"true",class:"pointer-events-none h-full w-full fill-neutral-400/60 dark:fill-neutral-600/60 transition-colors"},zm=["id","width","height","x","y"],_m=["cx","cy","r"],Cm=["fill"],Sc=se({__name:"DotPattern",props:{width:{default:20},height:{default:20},x:{default:0},y:{default:0},cx:{default:1},cy:{default:1},cr:{default:1},glow:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=Bn(),r=E(-9999),o=E(-9999);function s(a){if(!t.glow)return;const c=a.currentTarget.getBoundingClientRect();r.value=a.clientX-c.left,o.value=a.clientY-c.top}function l(){r.value=-9999,o.value=-9999}return(a,c)=>(b(),g("div",{class:$(I(pe)("absolute inset-0 h-full w-full overflow-hidden",t.glow?"pointer-events-auto":"pointer-events-none",t.class)),onMousemove:s,onMouseleave:l},[(b(),g("svg",wm,[i("defs",null,[i("pattern",{id:I(n),width:t.width,height:t.height,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:t.x,y:t.y},[i("circle",{cx:t.cx,cy:t.cy,r:t.cr},null,8,_m)],8,zm)]),i("rect",{width:"100%",height:"100%",fill:`url(#${I(n)})`},null,8,Cm)])),t.glow?(b(),g("div",{key:0,class:"absolute inset-0 transition-opacity duration-300",style:he({background:`radial-gradient(200px circle at ${r.value}px ${o.value}px, rgba(59, 130, 246, 0.15), transparent 80%)`})},null,4)):J("",!0)],34))}}),Sm={class:"relative z-10 h-full w-full"},Ic=se({__name:"InteractiveParticles",props:{quantity:{default:50},speed:{default:.6},maxRadius:{default:2},mouseRadius:{default:100},color:{},connectLines:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=E(null);let r=null,o=[];const s={x:-9999,y:-9999};function l(d,m){o=[];for(let f=0;f<t.quantity;f++)o.push({x:Math.random()*d,y:Math.random()*m,vx:(Math.random()-.5)*t.speed,vy:(Math.random()-.5)*t.speed,size:Math.random()*t.maxRadius+.8,baseAlpha:Math.random()*.5+.2,alpha:Math.random()*.5+.2})}function a(){const d=n.value;if(!d)return;const m=window.devicePixelRatio||1,f=d.getBoundingClientRect();d.width=f.width*m,d.height=f.height*m;const w=d.getContext("2d");w&&w.scale(m,m),l(f.width,f.height)}function c(d){const m=n.value;if(!m)return;const f=m.getBoundingClientRect();s.x=d.clientX-f.left,s.y=d.clientY-f.top}function p(){s.x=-9999,s.y=-9999}function u(){const d=n.value;if(!d)return;const m=d.getContext("2d");if(!m)return;const f=d.getBoundingClientRect(),w=f.width,h=f.height;m.clearRect(0,0,w,h);const S=document.documentElement.classList.contains("dark")?"255, 255, 255":"59, 130, 246",y=t.color||S;for(let _=0;_<o.length;_++){const A=o[_];A.x+=A.vx,A.y+=A.vy,(A.x<0||A.x>w)&&(A.vx*=-1),(A.y<0||A.y>h)&&(A.vy*=-1);const R=s.x-A.x,O=s.y-A.y,N=Math.sqrt(R*R+O*O);if(N<t.mouseRadius){const V=(t.mouseRadius-N)/t.mouseRadius;A.x-=R/N*V*2,A.y-=O/N*V*2,A.alpha=Math.min(A.baseAlpha+.4,.9)}else A.alpha=A.baseAlpha;if(m.beginPath(),m.arc(A.x,A.y,A.size,0,Math.PI*2),m.fillStyle=y.startsWith("#")?y:`rgba(${y}, ${A.alpha})`,m.fill(),t.connectLines)for(let V=_+1;V<o.length;V++){const D=o[V],oe=Math.hypot(A.x-D.x,A.y-D.y);if(oe<80){m.beginPath(),m.moveTo(A.x,A.y),m.lineTo(D.x,D.y);const be=(1-oe/80)*.15;m.strokeStyle=`rgba(${S}, ${be})`,m.lineWidth=.6,m.stroke()}}}r=requestAnimationFrame(u)}return et(()=>{a(),window.addEventListener("resize",a),u()}),st(()=>{window.removeEventListener("resize",a),r!==null&&cancelAnimationFrame(r)}),ht(()=>t.quantity,()=>{const d=n.value;if(d){const m=d.getBoundingClientRect();l(m.width,m.height)}}),(d,m)=>(b(),g("div",{class:$(I(pe)("relative h-full w-full overflow-hidden",t.class)),onMousemove:c,onMouseleave:p},[i("canvas",{ref_key:"canvasRef",ref:n,class:"pointer-events-none absolute inset-0 h-full w-full"},null,512),i("div",Sm,[Qe(d.$slots,"default")])],34))}}),Im=se({__name:"Meteors",props:{number:{default:20},angle:{default:215},minDelay:{default:.2},maxDelay:{default:1.2},minDuration:{default:2},maxDuration:{default:8},class:{}},setup(e){const t=e,n=ee(()=>Array.from({length:t.number}).map(()=>{const r=Math.floor(Math.random()*100),o=Math.floor(Math.random()*100),s=(Math.random()*(t.maxDelay-t.minDelay)+t.minDelay).toFixed(2),l=(Math.random()*(t.maxDuration-t.minDuration)+t.minDuration).toFixed(2);return{top:`${r}%`,left:`${o}%`,animationDelay:`${s}s`,animationDuration:`${l}s`}}));return(r,o)=>(b(),g("div",{class:$(I(pe)("pointer-events-none absolute inset-0 overflow-hidden",t.class))},[(b(!0),g(ie,null,ke(n.value,(s,l)=>(b(),g("span",{key:l,style:he({...s,"--angle":`${t.angle}deg`}),class:"animate-meteor absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[var(--angle)] dark:bg-sky-400 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-slate-500 before:to-transparent dark:before:from-sky-400"},null,4))),128))],2))}}),Ac=Ge(Im,[["__scopeId","data-v-7d09918c"]]),Am=se({__name:"Ripple",props:{mainCircleSize:{default:210},mainCircleOpacity:{default:.24},numCircles:{default:8},class:{}},setup(e){const t=e;return(n,r)=>(b(),g("div",{class:$(I(pe)("pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",t.class))},[(b(!0),g(ie,null,ke(t.numCircles,o=>(b(),g("div",{key:o,style:he({width:`${t.mainCircleSize+(o-1)*70}px`,height:`${t.mainCircleSize+(o-1)*70}px`,opacity:Math.max(.04,t.mainCircleOpacity-(o-1)*.025),animationDelay:`${(o-1)*.06}s`,borderStyle:o===t.numCircles?"dashed":"solid",borderWidth:"1px"}),class:"animate-ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-500/40 bg-blue-500/5 shadow-[0_0_16px_rgba(59,130,246,0.1)] dark:border-sky-400/30 dark:bg-sky-400/5"},null,4))),128))],2))}}),$c=Ge(Am,[["__scopeId","data-v-98c398f7"]]),Br=se({__name:"NumberTicker",props:{value:{},direction:{default:"up"},duration:{default:2},delay:{default:0},decimalPlaces:{default:0},class:{}},setup(e){const t=e,n=E(null),r=E("0");let o=null,s=null,l=!1;function a(u){return u===1?1:1-Math.pow(2,-10*u)}function c(u){return new Intl.NumberFormat("en-US",{minimumFractionDigits:t.decimalPlaces,maximumFractionDigits:t.decimalPlaces}).format(u)}function p(){if(l)return;l=!0;const u=t.direction==="down"?t.value:0,d=t.direction==="down"?0:t.value,m=t.duration*1e3;let f=null;setTimeout(()=>{function w(h){f||(f=h);const C=h-f,S=Math.min(C/m,1),y=a(S),_=u+(d-u)*y;r.value=c(_),S<1?o=requestAnimationFrame(w):r.value=c(d)}o=requestAnimationFrame(w)},t.delay*1e3)}return et(()=>{r.value=c(t.direction==="down"?t.value:0),n.value?(s=new IntersectionObserver(u=>{u[0].isIntersecting&&(p(),s&&s.disconnect())},{threshold:.1}),s.observe(n.value)):p()}),st(()=>{o&&cancelAnimationFrame(o),s&&s.disconnect()}),ht(()=>t.value,()=>{l=!1,p()}),(u,d)=>(b(),g("span",{ref_key:"spanRef",ref:n,class:$(I(pe)("inline-block tabular-nums tracking-wider",t.class))},P(r.value),3))}}),$m=["width","height","viewBox"],Mm=["d","stroke","stroke-width","stroke-opacity"],Pm=["d","stroke","stroke-width"],Tm=["id"],Rm=["stop-color"],Em=["stop-color"],Fm=["stop-color"],Lm=["from","to","dur","begin"],Om=["from","to","dur","begin"],no=se({__name:"AnimatedBeam",props:{containerRef:{},fromRef:{},toRef:{},curvature:{default:0},reverse:{type:Boolean,default:!1},pathColor:{default:"#94a3b8"},pathWidth:{default:2},pathOpacity:{default:.2},gradientStartColor:{default:"#38bdf8"},gradientStopColor:{default:"#6366f1"},duration:{default:3},delay:{default:0},startXOffset:{default:0},startYOffset:{default:0},endXOffset:{default:0},endYOffset:{default:0},class:{}},setup(e){const t=e,n=Bn(),r=E(""),o=E({width:0,height:0});function s(c){return c?"value"in c?c.value:c instanceof HTMLElement?c:null:null}function l(){const c=s(t.containerRef),p=s(t.fromRef),u=s(t.toRef);if(!c||!p||!u)return;const d=c.getBoundingClientRect(),m=p.getBoundingClientRect(),f=u.getBoundingClientRect();o.value={width:d.width,height:d.height};const w=m.left-d.left+m.width/2+t.startXOffset,h=m.top-d.top+m.height/2+t.startYOffset,C=f.left-d.left+f.width/2+t.endXOffset,S=f.top-d.top+f.height/2+t.endYOffset,y=(w+C)/2,_=(h+S)/2,A=y,R=_-t.curvature;t.curvature===0?r.value=`M ${w},${h} L ${C},${S}`:r.value=`M ${w},${h} Q ${A},${R} ${C},${S}`}let a=null;return et(()=>{l(),window.addEventListener("resize",l);const c=s(t.containerRef);c&&(a=new ResizeObserver(()=>l()),a.observe(c))}),st(()=>{window.removeEventListener("resize",l),a&&a.disconnect()}),ht([()=>s(t.containerRef),()=>s(t.fromRef),()=>s(t.toRef),()=>t.curvature],()=>{l()}),(c,p)=>(b(),g("svg",{width:o.value.width,height:o.value.height,viewBox:`0 0 ${o.value.width} ${o.value.height}`,class:$(I(pe)("pointer-events-none absolute inset-0 h-full w-full select-none overflow-visible",t.class))},[i("path",{d:r.value,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-opacity":t.pathOpacity,"stroke-linecap":"round"},null,8,Mm),i("path",{d:r.value,fill:"none",stroke:`url(#beam-gradient-${I(n)})`,"stroke-width":t.pathWidth,"stroke-linecap":"round"},null,8,Pm),i("defs",null,[i("linearGradient",{id:`beam-gradient-${I(n)}`,gradientUnits:"userSpaceOnUse"},[i("stop",{offset:"0%","stop-color":t.gradientStartColor,"stop-opacity":"0"},null,8,Rm),i("stop",{offset:"50%","stop-color":t.gradientStartColor,"stop-opacity":"1"},null,8,Em),i("stop",{offset:"100%","stop-color":t.gradientStopColor,"stop-opacity":"0"},null,8,Fm),i("animate",{attributeName:"x1",from:t.reverse?"100%":"-50%",to:t.reverse?"-50%":"100%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,Lm),i("animate",{attributeName:"x2",from:t.reverse?"150%":"0%",to:t.reverse?"0%":"150%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,Om)],8,Tm)])],10,$m))}}),Vm={class:"relative z-50 -translate-y-32 flex flex-col items-center px-5 text-center"},Mc=se({__name:"LampEffect",props:{glowColor:{default:"#06b6d4"},class:{}},setup(e){const t=e;return(n,r)=>(b(),g("div",{class:$(I(pe)("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-2xl z-0",t.class))},[r[0]||(r[0]=as(`<div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"><div class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div><div class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"></div></div><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"><div class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"></div><div class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div></div><div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl"></div><div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div><div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div><div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></div><div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div><div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-950"></div></div>`,1)),i("div",Vm,[Qe(n.$slots,"default")])],2))}}),Pc=se({__name:"FlickeringGrid",props:{squareSize:{default:4},gridGap:{default:4},flickerChance:{default:.3},color:{},maxOpacity:{default:.3},class:{}},setup(e){const t=e,n=E(null),r=E(null);let o=null,s=new Float32Array(0),l=0,a=0;function c(d,m){l=Math.floor(d/(t.squareSize+t.gridGap)),a=Math.floor(m/(t.squareSize+t.gridGap)),s=new Float32Array(l*a);for(let f=0;f<s.length;f++)s[f]=Math.random()*t.maxOpacity}function p(){const d=n.value,m=r.value;if(!d||!m)return;const f=window.devicePixelRatio||1,w=d.getBoundingClientRect();m.width=w.width*f,m.height=w.height*f;const h=m.getContext("2d");h&&h.scale(f,f),c(w.width,w.height)}function u(){const d=r.value,m=n.value;if(!d||!m)return;const f=d.getContext("2d");if(!f)return;const w=m.getBoundingClientRect();f.clearRect(0,0,w.width,w.height);const C=document.documentElement.classList.contains("dark")?"148, 163, 184":"100, 116, 139",S=t.color||C;for(let y=0;y<a;y++)for(let _=0;_<l;_++){const A=y*l+_;Math.random()<t.flickerChance&&(s[A]=Math.random()*t.maxOpacity);const R=s[A];f.fillStyle=S.startsWith("#")?S:`rgba(${S}, ${R})`;const O=_*(t.squareSize+t.gridGap),N=y*(t.squareSize+t.gridGap);f.fillRect(O,N,t.squareSize,t.squareSize)}o=requestAnimationFrame(u)}return et(()=>{p(),window.addEventListener("resize",p),u()}),st(()=>{window.removeEventListener("resize",p),o&&cancelAnimationFrame(o)}),ht([()=>t.squareSize,()=>t.gridGap],()=>{p()}),(d,m)=>(b(),g("div",{ref_key:"containerRef",ref:n,class:$(I(pe)("pointer-events-none relative h-full w-full overflow-hidden",t.class))},[i("canvas",{ref_key:"canvasRef",ref:r,class:"absolute inset-0 h-full w-full"},null,512)],2))}}),Dm={class:"relative overflow-hidden"},jm={class:"relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center overflow-hidden"},Bm={class:"relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200"},Nm={class:"relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"},Hm={class:"relative z-10 mt-12 w-full max-w-2xl text-left"},Gm={class:"relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/80"},Um={class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"},qm={class:"border-y border-zinc-200/80 bg-zinc-50/50 py-6 dark:border-zinc-800/80 dark:bg-zinc-950/40"},Wm={class:"mx-auto max-w-7xl px-4 text-center"},Xm={id:"features",class:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"},Ym={class:"text-center max-w-3xl mx-auto mb-16 space-y-4"},Km={class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"},Zm={class:"relative h-full w-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50/40 to-transparent dark:from-zinc-900/60 dark:to-transparent"},Jm={class:"relative flex h-32 w-56 flex-col justify-between rounded-xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-md backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95"},Qm={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-50/50 to-blue-50/20 border border-blue-100/50 dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800"},eb={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50/30 to-white dark:from-zinc-950 dark:to-zinc-900"},tb={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-50/30 to-transparent dark:from-zinc-900/50 dark:to-transparent"},nb={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"},rb={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50"},ob={class:"relative h-full w-full flex flex-col justify-center overflow-hidden rounded-xl p-3 bg-zinc-50/60 dark:bg-zinc-900/40"},sb={class:"relative h-full w-full overflow-hidden rounded-xl bg-slate-950 p-4"},ib={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center"},ab={class:"relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40"},lb={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent flex flex-col items-center justify-center p-4"},cb={class:"text-4xl font-black text-emerald-600 dark:text-emerald-400"},db={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4"},ub={class:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800/80"},pb={class:"text-center max-w-3xl mx-auto mb-12 space-y-3"},fb={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400"},mb={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},bb={class:"flex items-center justify-between mb-4"},gb={class:"flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60"},hb={class:"rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-[11px] font-mono font-bold text-zinc-600 dark:text-zinc-300"},xb={class:"text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2"},vb={class:"text-[11px] font-mono text-zinc-400 block mt-0.5"},yb={class:"mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"},kb={class:"mt-4 flex flex-wrap gap-1.5"},wb={class:"mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between"},zb={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"},_b={class:"mt-8 flex items-center justify-center gap-4"},Cb={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-20 dark:border-zinc-800/80 dark:bg-zinc-950/40"},Sb={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Ib={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},Ab={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},$b={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400"},Mb={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},Pb={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400"},Tb={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},Rb={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400"},Eb=se({__name:"HomeView",setup(e){const t=E(null),n=E(null),r=E(null),o=E(null);function s(u){switch(u){case"ai-native":return Mn;case"interactive-nav":return Jn;case"space-3d":return ar;case"borders-cards":return Xt;case"kinetic-typography":return Re;default:return Re}}function l(u){return on.filter(d=>d.suiteId===u)}const a=["Vue 3.5+","TypeScript","Tailwind CSS","Composition API","Vite 6","HTML5 Canvas","Web Animations API","Zero-Config"],c=E(!1);function p(){navigator.clipboard.writeText("npm i @vueuse/core clsx tailwind-merge"),c.value=!0,setTimeout(()=>{c.value=!1},2e3)}return(u,d)=>{const m=zr("router-link");return b(),g("div",Dm,[i("section",jm,[k(ys,{angle:65,opacity:.45}),i("div",Bm,[k(I(Re),{class:"h-3.5 w-3.5 text-blue-500"}),k(dr,{text:"Vue 3 的动效原子代码库现已上线"}),d[0]||(d[0]=i("span",{class:"rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] text-blue-600 dark:text-blue-400"}," v1.0 ",-1))]),d[4]||(d[4]=i("h1",{class:"relative z-10 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight"},[Ae(" 专属于 Vue 3 的 "),i("span",{class:"block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400"}," 高阶动效原子库 ")],-1)),d[5]||(d[5]=i("p",{class:"relative z-10 mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400"},[Ae(" 不再重复造普通表单，全面对标 Magic UI 与 Aceternity UI。"),i("br",{class:"hidden sm:inline"}),Ae(" 面向 "),i("strong",null,"AI 官网、SaaS 营销页、酷炫个人主页"),Ae("，提供 60fps 单文件即用的动效积木。 ")],-1)),i("div",Nm,[k(m,{to:"/docs/border-beam"},{default:Y(()=>[k(cr,{"shimmer-color":"#60a5fa",class:"h-12 px-8 text-base"},{default:Y(()=>[d[1]||(d[1]=i("span",null,"立即浏览组件",-1)),k(I(sr),{class:"h-4 w-4"})]),_:1})]),_:1}),i("button",{type:"button",class:"inline-flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-800",onClick:p},[c.value?(b(),me(I(St),{key:0,class:"h-4 w-4 text-emerald-500"})):(b(),me(I(vr),{key:1,class:"h-4 w-4 text-zinc-400"})),i("span",null,P(c.value?"已复制依赖指令":"复制基础依赖指令"),1)])]),i("div",Hm,[i("div",Gm,[k(vs,{size:90,duration:6,"color-from":"#38bdf8","color-to":"#a855f7","border-width":2,"border-radius":16}),d[3]||(d[3]=as('<div class="mb-4 flex items-center justify-between border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60"><div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-rose-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span><span class="ml-2 font-mono text-xs text-zinc-400">components/BorderBeam.vue</span></div><div class="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Zero-Config / 粘贴即跑</span></div></div>',1)),i("div",Um,[d[2]||(d[2]=as('<div class="space-y-1 text-zinc-600 dark:text-zinc-300"><p><span class="text-purple-500">&lt;template&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;div</span> <span class="text-amber-500">class=</span><span class="text-emerald-500">&quot;relative rounded-2xl&quot;</span><span class="text-blue-500">&gt;</span></p><p class="pl-8"><span class="text-blue-500">&lt;BorderBeam</span> <span class="text-amber-500">:duration=</span><span class="text-emerald-500">&quot;5&quot;</span> <span class="text-amber-500">:border-width=</span><span class="text-emerald-500">&quot;2&quot;</span> <span class="text-blue-500">/&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;/div&gt;</span></p><p><span class="text-purple-500">&lt;/template&gt;</span></p></div>',1)),k(m,{to:"/docs/border-beam",class:"shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"},{default:Y(()=>[Ae(" 浏览全部 "+P(I(on).length)+" 款动效 → ",1)]),_:1})])])])]),i("section",qm,[i("div",Wm,[d[7]||(d[7]=i("p",{class:"mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase"}," 原生融合的技术栈与动效标准 ",-1)),k(jr,{duration:25,"pause-on-hover":!0},{default:Y(()=>[(b(),g(ie,null,ke(a,f=>i("div",{key:f,class:"flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-5 py-2 text-xs font-bold text-zinc-700 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300"},[d[6]||(d[6]=i("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),i("span",null,P(f),1)])),64))]),_:1})])]),i("section",Xm,[i("div",Ym,[i("h2",Km," 全面对标顶流 · 5 大主题套件 · "+P(I(on).length)+" 款高阶动效全装配 ",1),d[8]||(d[8]=i("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 每一个组件都经过精心打磨，在移动端与桌面端保持 60fps 满帧性能，全部开箱即用，支持 Clean Light 与 Deep Dark 双模自适应。 ",-1))]),k(Cc,null,{default:Y(()=>[k(ut,{name:"Border Beam",description:"现代 CSS 路径动画，高光激光沿圆角边框飞速流转，AI 推理与核心 VIP 的视觉焦点",cta:"查看详情与代码",href:"/docs/border-beam"},{icon:Y(()=>[k(I(Re),{class:"h-5 w-5 text-sky-500"})]),background:Y(()=>[i("div",Zm,[i("div",Jm,[k(vs,{size:65,duration:3.5,"color-from":"#06b6d4","color-to":"#6366f1","border-width":2,"border-radius":12}),d[9]||(d[9]=i("div",{class:"flex items-center justify-between"},[i("div",{class:"flex items-center gap-2"},[i("span",{class:"relative flex h-2 w-2"},[i("span",{class:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),i("span",{class:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]),i("span",{class:"text-xs font-bold text-zinc-800 dark:text-zinc-200"},"AI 推理状态")]),i("span",{class:"rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-sky-600 dark:text-sky-400"},"360° 流动")],-1)),d[10]||(d[10]=i("div",{class:"space-y-1.5"},[i("div",{class:"h-2 w-4/5 rounded-full bg-zinc-200 dark:bg-zinc-700"}),i("div",{class:"h-2 w-3/5 rounded-full bg-gradient-to-r from-sky-500/40 to-indigo-500/40"})],-1))])])]),_:1}),k(ut,{name:"Interactive Particles",description:"原生 Canvas 2D 粒子引擎，支持鼠标悬浮动态引力排斥、微线互联与 60fps 满帧性能",cta:"查看详情与代码",href:"/docs/interactive-particles"},{icon:Y(()=>[k(I(wn),{class:"h-5 w-5 text-amber-500"})]),background:Y(()=>[i("div",Qm,[k(Ic,{quantity:38,speed:.75,"mouse-radius":85,"connect-lines":!0,class:"absolute inset-0 h-full w-full"}),d[11]||(d[11]=i("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[i("div",{class:"flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1 text-xs font-mono font-medium text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900/60 dark:bg-zinc-900/80 dark:text-blue-400"},[i("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"}),i("span",null,"悬浮鼠标即刻磁吸交互")])],-1))])]),_:1}),k(ut,{name:"Retro Grid",description:"3D 倾斜无限延展赛博网格，原生区分明暗模式线条色彩，渲染极具科技纵深感的背景",cta:"查看详情与代码",href:"/docs/retro-grid"},{icon:Y(()=>[k(I(Xt),{class:"h-5 w-5 text-indigo-500"})]),background:Y(()=>[i("div",eb,[k(ys,{angle:65,opacity:.85,"cell-size":34,"light-line-color":"#6366f1","dark-line-color":"#38bdf8"}),d[12]||(d[12]=i("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[i("span",{class:"rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-xs backdrop-blur-md dark:border-indigo-900/80 dark:bg-zinc-900/90 dark:text-indigo-400"}," 3D 空间动态透视 ")],-1))])]),_:1}),k(ut,{name:"Shimmer Button",description:"360° 旋转锥形流光高光外圈，适配核心 CTA 与付费引导，鼠标悬停即刻聚光",cta:"查看详情与代码",href:"/docs/shimmer-button"},{icon:Y(()=>[k(I(Re),{class:"h-5 w-5 text-pink-500"})]),background:Y(()=>[i("div",tb,[k(cr,{"shimmer-color":"#ec4899","shimmer-duration":"2.4s",class:"shadow-lg"},{default:Y(()=>[k(I(Re),{class:"h-4 w-4 text-pink-400"}),d[13]||(d[13]=i("span",null,"360° 旋转光晕按钮",-1))]),_:1}),d[14]||(d[14]=i("span",{class:"mt-3 text-[11px] font-mono text-zinc-400"},"悬停查看高光边缘旋转",-1))])]),_:1}),k(ut,{name:"Shiny Text",description:"金属质感微光划过文字，2.5s 线性平滑连续循环，高亮 Hero 标题与特色特性",cta:"查看详情与代码",href:"/docs/shiny-text"},{icon:Y(()=>[k(I(Re),{class:"h-5 w-5 text-amber-500"})]),background:Y(()=>[i("div",nb,[d[15]||(d[15]=i("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"},null,-1)),k(dr,{text:"✨ Metallic Shiny Sheen",class:"relative z-10 text-xl font-black tracking-tight",speed:2.2}),d[16]||(d[16]=i("p",{class:"relative z-10 mt-2 text-xs font-mono text-zinc-400"},"高对比连续金属质感流动",-1))])]),_:1}),k(ut,{name:"Dot Pattern",description:"极简矢量波点底纹，支持鼠标实时光晕跟随聚光灯，轻量零性能损耗",cta:"查看详情与代码",href:"/docs/dot-pattern"},{icon:Y(()=>[k(I(Xl),{class:"h-5 w-5 text-emerald-500"})]),background:Y(()=>[i("div",rb,[k(Sc,{width:16,height:16,cr:1.2,glow:!0}),d[17]||(d[17]=i("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[i("span",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}," 移动鼠标点亮光晕 ")],-1))])]),_:1}),k(ut,{name:"Marquee",description:"纯 CSS 硬件加速无限无缝滚动跑马灯，支持鼠标悬浮暂停、反向循环与变速",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/marquee"},{icon:Y(()=>[k(I(Sp),{class:"h-5 w-5 text-blue-500"})]),background:Y(()=>[i("div",ob,[k(jr,{duration:16,"pause-on-hover":!0},{default:Y(()=>[(b(),g(ie,null,ke(["GPT-4o","Claude 3.5","DeepSeek-V3","Llama 3.3","Gemini 1.5"],f=>i("div",{key:f,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[d[18]||(d[18]=i("span",{class:"h-1.5 w-1.5 rounded-full bg-emerald-500"},null,-1)),i("span",null,P(f),1)])),64))]),_:1}),k(jr,{duration:20,reverse:!0,"pause-on-hover":!0,class:"mt-2.5"},{default:Y(()=>[(b(),g(ie,null,ke(["Vue 3.5","TypeScript","Tailwind CSS","Zero-Config","Canvas 2D"],f=>i("div",{key:f,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[d[19]||(d[19]=i("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),i("span",null,P(f),1)])),64))]),_:1})])]),_:1}),k(ut,{name:"Bento Grid",description:"现代 SaaS 模块化栅格系统，卡片集成鼠标跟随 Spotlight 径向聚光灯流光",cta:"查看详情与代码",href:"/docs/bento-grid"},{icon:Y(()=>[k(I(Xt),{class:"h-5 w-5 text-purple-500"})]),background:Y(()=>[...d[20]||(d[20]=[i("div",{class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent"},[i("div",{class:"grid grid-cols-2 gap-2 w-full max-w-[200px]"},[i("div",{class:"h-12 rounded-lg border border-purple-300/40 bg-purple-500/10 dark:border-purple-500/30 dark:bg-purple-500/20 flex items-center justify-center text-[10px] font-mono text-purple-600 dark:text-purple-300"}," Col 1 "),i("div",{class:"h-12 rounded-lg border border-blue-300/40 bg-blue-500/10 dark:border-blue-500/30 dark:bg-blue-500/20 flex items-center justify-center text-[10px] font-mono text-blue-600 dark:text-blue-300"}," Col 2 "),i("div",{class:"col-span-2 h-10 rounded-lg border border-indigo-300/40 bg-indigo-500/10 dark:border-indigo-500/30 dark:bg-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-600 dark:text-indigo-300"}," Span 2 · 动态聚光灯 ")])],-1)])]),_:1}),k(ut,{name:"Meteors",description:"纯 CSS 赛博流星雨划过，带 50px 渐变光尾与随机延迟，暗黑科技卡片与首屏氛围杀器",cta:"查看详情与代码",href:"/docs/meteors"},{icon:Y(()=>[k(I(Re),{class:"h-5 w-5 text-sky-400"})]),background:Y(()=>[i("div",sb,[k(Ac,{number:20}),d[21]||(d[21]=i("div",{class:"flex h-full flex-col justify-end"},[i("span",{class:"text-xs font-mono text-sky-400 font-bold"},"215° 斜掠流星轨迹")],-1))])]),_:1}),k(ut,{name:"Ripple",description:"由中心向外周循环脉冲扩散的多层同心圆涟漪，适配 AI 语音拾音、雷达声呐与核心头像高亮",cta:"查看详情与代码",href:"/docs/ripple"},{icon:Y(()=>[k(I(eo),{class:"h-5 w-5 text-blue-500"})]),background:Y(()=>[i("div",ib,[k($c,{"main-circle-size":110,"num-circles":6}),i("div",ab,[k(I(eo),{class:"h-6 w-6"})])])]),_:1}),k(ut,{name:"Number Ticker",description:"采用 easeOutExpo 缓动曲线的平滑数字翻牌器，进入视口自动起跑，SaaS 核心关键业务指标必备",cta:"查看详情与代码",href:"/docs/number-ticker"},{icon:Y(()=>[k(I(us),{class:"h-5 w-5 text-emerald-500"})]),background:Y(()=>[i("div",lb,[i("div",cb,[k(Br,{value:99.99,"decimal-places":2}),d[22]||(d[22]=Ae("% ",-1))]),d[23]||(d[23]=i("p",{class:"mt-2 text-xs font-mono text-zinc-500"},"SLA 生产高可用性指标",-1))])]),_:1}),k(ut,{name:"Animated Beam",description:"Magic UI 标志性连线动效，在多个 DOM 节点间实时计算贝塞尔曲线，驱动 SVG 能量光球脉冲流动",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/animated-beam"},{icon:Y(()=>[k(I(wn),{class:"h-5 w-5 text-indigo-500"})]),background:Y(()=>[i("div",{ref_key:"homeBeamContainer",ref:t,class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 flex items-center justify-between px-8"},[i("div",{ref_key:"homeBeamUser",ref:n,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-blue-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-blue-400"},[k(I(Zl),{class:"h-5 w-5"})],512),i("div",{ref_key:"homeBeamAi",ref:r,class:"z-10 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/40"},[k(I(Re),{class:"h-6 w-6"})],512),i("div",{ref_key:"homeBeamDb",ref:o,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400"},[k(I(ps),{class:"h-5 w-5"})],512),k(no,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.2},null,8,["container-ref","from-ref","to-ref"]),k(no,{"container-ref":t.value,"from-ref":r.value,"to-ref":o.value,duration:2.2,delay:.5},null,8,["container-ref","from-ref","to-ref"])],512)]),_:1}),k(ut,{name:"Flickering Grid",description:"Canvas 2D 原生微闪烁网格，每个小方格独立呼吸微光，营造赛博黑客帝国与智能矩阵氛围",cta:"查看详情与代码",href:"/docs/flickering-grid"},{icon:Y(()=>[k(I(Xt),{class:"h-5 w-5 text-sky-500"})]),background:Y(()=>[i("div",db,[k(Pc,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),d[24]||(d[24]=i("div",{class:"relative z-10 flex h-full items-center justify-center"},[i("span",{class:"rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-500 dark:text-sky-400 font-bold"}," 60FPS 矩阵微闪 ")],-1))])]),_:1})]),_:1})]),i("section",ub,[i("div",pb,[i("div",fb,[k(I(Re),{class:"h-3.5 w-3.5"}),d[25]||(d[25]=i("span",null,"主题套件全套推进",-1))]),d[26]||(d[26]=i("h2",{class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"}," 5 大主题动效矩阵 · 场景全覆盖 ",-1)),d[27]||(d[27]=i("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 按业务应用场景全套推进，彻底告别零散拼凑。从 AI 智能体推理到 3D 纵深空间，全矩阵即拷即用。 ",-1))]),i("div",mb,[(b(!0),g(ie,null,ke(I(fs),f=>{var w;return b(),g("div",{key:f.id,class:"group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:hover:border-zinc-700"},[i("div",null,[i("div",bb,[i("div",gb,[(b(),me(tt(s(f.id)),{class:"h-5 w-5"}))]),i("span",hb,P(l(f.id).length)+" 款组件 ",1)]),i("h3",xb,[i("span",null,P(f.name),1)]),i("span",vb,P(f.englishName),1),i("p",yb,P(f.description),1),i("div",kb,[(b(!0),g(ie,null,ke(l(f.id),h=>(b(),me(m,{key:h.id,to:`/docs/${h.id}`,class:"rounded-lg border border-zinc-200/80 bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-700 transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-500/50 dark:hover:bg-blue-950/60 dark:hover:text-blue-400"},{default:Y(()=>[Ae(P(h.name),1)]),_:2},1032,["to"]))),128))])]),i("div",wb,[k(m,{to:`/docs/${((w=l(f.id)[0])==null?void 0:w.id)||"border-beam"}`,class:"inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"},{default:Y(()=>[d[28]||(d[28]=i("span",null,"进入套件展厅",-1)),k(I(sr),{class:"h-3.5 w-3.5 transition-transform group-hover:translate-x-1"})]),_:1},8,["to"])])])}),128))])]),i("section",zb,[k(Mc,{class:"min-h-[460px]"},{default:Y(()=>[d[30]||(d[30]=i("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-6xl font-black tracking-tight text-transparent"}," 为极致审美而生的动效原子 ",-1)),d[31]||(d[31]=i("p",{class:"mt-4 max-w-lg text-sm text-slate-400"}," 全面对标 Magic UI 与 Aceternity UI，支持单文件复制即用，零侵入无外部复杂构建负担。 ",-1)),i("div",_b,[k(m,{to:"/docs/lamp-effect"},{default:Y(()=>[k(cr,{"shimmer-color":"#38bdf8",class:"h-11 px-6 text-sm"},{default:Y(()=>[d[29]||(d[29]=i("span",null,"探索 Lamp Effect",-1)),k(I(sr),{class:"h-4 w-4"})]),_:1})]),_:1})])]),_:1})]),i("section",Cb,[i("div",Sb,[i("div",Ib,[i("div",Ab,[i("div",$b,[k(I(vr),{class:"h-5 w-5"})]),d[32]||(d[32]=i("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," Copy & Paste 模式 ",-1)),d[33]||(d[33]=i("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不是封闭的黑盒 npm 库。代码完全属于你，复制进你的项目 `src/components/ui` 即可按需自定义与扩展。 ",-1))]),i("div",Mb,[i("div",Pb,[k(I(wn),{class:"h-5 w-5"})]),d[34]||(d[34]=i("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 单文件自包含（Zero-Config） ",-1)),d[35]||(d[35]=i("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 动画关键帧与路径封装在组件内，完全无需在 tailwind.config.js 中配置复杂的 keyframes，避免配置遗漏。 ",-1))]),i("div",Tb,[i("div",Rb,[k(I(Re),{class:"h-5 w-5"})]),d[36]||(d[36]=i("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 真·明暗双模自适应 ",-1)),d[37]||(d[37]=i("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不仅在深黑背景下流光溢彩，更对纯白、浅灰背景做针对性调优，确保在任何业务场景下都有高级质感。 ",-1))])])])])])}}});var oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var No={exports:{}},sa;function Lb(){return sa||(sa=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=(function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function y(_){return _ instanceof c?new c(_.type,y(_.content),_.alias):Array.isArray(_)?_.map(y):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(y){return Object.prototype.toString.call(y).slice(8,-1)},objId:function(y){return y.__id||Object.defineProperty(y,"__id",{value:++s}),y.__id},clone:function y(_,A){A=A||{};var R,O;switch(a.util.type(_)){case"Object":if(O=a.util.objId(_),A[O])return A[O];R={},A[O]=R;for(var N in _)_.hasOwnProperty(N)&&(R[N]=y(_[N],A));return R;case"Array":return O=a.util.objId(_),A[O]?A[O]:(R=[],A[O]=R,_.forEach(function(V,D){R[D]=y(V,A)}),R);default:return _}},getLanguage:function(y){for(;y;){var _=o.exec(y.className);if(_)return _[1].toLowerCase();y=y.parentElement}return"none"},setLanguage:function(y,_){y.className=y.className.replace(RegExp(o,"gi"),""),y.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(R){var y=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(R.stack)||[])[1];if(y){var _=document.getElementsByTagName("script");for(var A in _)if(_[A].src==y)return _[A]}return null}},isActive:function(y,_,A){for(var R="no-"+_;y;){var O=y.classList;if(O.contains(_))return!0;if(O.contains(R))return!1;y=y.parentElement}return!!A}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(y,_){var A=a.util.clone(a.languages[y]);for(var R in _)A[R]=_[R];return A},insertBefore:function(y,_,A,R){R=R||a.languages;var O=R[y],N={};for(var V in O)if(O.hasOwnProperty(V)){if(V==_)for(var D in A)A.hasOwnProperty(D)&&(N[D]=A[D]);A.hasOwnProperty(V)||(N[V]=O[V])}var oe=R[y];return R[y]=N,a.languages.DFS(a.languages,function(be,U){U===oe&&be!=y&&(this[be]=N)}),N},DFS:function y(_,A,R,O){O=O||{};var N=a.util.objId;for(var V in _)if(_.hasOwnProperty(V)){A.call(_,V,_[V],R||V);var D=_[V],oe=a.util.type(D);oe==="Object"&&!O[N(D)]?(O[N(D)]=!0,y(D,A,null,O)):oe==="Array"&&!O[N(D)]&&(O[N(D)]=!0,y(D,A,V,O))}}},plugins:{},highlightAll:function(y,_){a.highlightAllUnder(document,y,_)},highlightAllUnder:function(y,_,A){var R={callback:A,container:y,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",R),R.elements=Array.prototype.slice.apply(R.container.querySelectorAll(R.selector)),a.hooks.run("before-all-elements-highlight",R);for(var O=0,N;N=R.elements[O++];)a.highlightElement(N,_===!0,R.callback)},highlightElement:function(y,_,A){var R=a.util.getLanguage(y),O=a.languages[R];a.util.setLanguage(y,R);var N=y.parentElement;N&&N.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(N,R);var V=y.textContent,D={element:y,language:R,grammar:O,code:V};function oe(U){D.highlightedCode=U,a.hooks.run("before-insert",D),D.element.innerHTML=D.highlightedCode,a.hooks.run("after-highlight",D),a.hooks.run("complete",D),A&&A.call(D.element)}if(a.hooks.run("before-sanity-check",D),N=D.element.parentElement,N&&N.nodeName.toLowerCase()==="pre"&&!N.hasAttribute("tabindex")&&N.setAttribute("tabindex","0"),!D.code){a.hooks.run("complete",D),A&&A.call(D.element);return}if(a.hooks.run("before-highlight",D),!D.grammar){oe(a.util.encode(D.code));return}if(_&&r.Worker){var be=new Worker(a.filename);be.onmessage=function(U){oe(U.data)},be.postMessage(JSON.stringify({language:D.language,code:D.code,immediateClose:!0}))}else oe(a.highlight(D.code,D.grammar,D.language))},highlight:function(y,_,A){var R={code:y,grammar:_,language:A};if(a.hooks.run("before-tokenize",R),!R.grammar)throw new Error('The language "'+R.language+'" has no grammar.');return R.tokens=a.tokenize(R.code,R.grammar),a.hooks.run("after-tokenize",R),c.stringify(a.util.encode(R.tokens),R.language)},tokenize:function(y,_){var A=_.rest;if(A){for(var R in A)_[R]=A[R];delete _.rest}var O=new d;return m(O,O.head,y),u(y,O,_,O.head,0),w(O)},hooks:{all:{},add:function(y,_){var A=a.hooks.all;A[y]=A[y]||[],A[y].push(_)},run:function(y,_){var A=a.hooks.all[y];if(!(!A||!A.length))for(var R=0,O;O=A[R++];)O(_)}},Token:c};r.Prism=a;function c(y,_,A,R){this.type=y,this.content=_,this.alias=A,this.length=(R||"").length|0}c.stringify=function y(_,A){if(typeof _=="string")return _;if(Array.isArray(_)){var R="";return _.forEach(function(oe){R+=y(oe,A)}),R}var O={type:_.type,content:y(_.content,A),tag:"span",classes:["token",_.type],attributes:{},language:A},N=_.alias;N&&(Array.isArray(N)?Array.prototype.push.apply(O.classes,N):O.classes.push(N)),a.hooks.run("wrap",O);var V="";for(var D in O.attributes)V+=" "+D+'="'+(O.attributes[D]||"").replace(/"/g,"&quot;")+'"';return"<"+O.tag+' class="'+O.classes.join(" ")+'"'+V+">"+O.content+"</"+O.tag+">"};function p(y,_,A,R){y.lastIndex=_;var O=y.exec(A);if(O&&R&&O[1]){var N=O[1].length;O.index+=N,O[0]=O[0].slice(N)}return O}function u(y,_,A,R,O,N){for(var V in A)if(!(!A.hasOwnProperty(V)||!A[V])){var D=A[V];D=Array.isArray(D)?D:[D];for(var oe=0;oe<D.length;++oe){if(N&&N.cause==V+","+oe)return;var be=D[oe],U=be.inside,ye=!!be.lookbehind,Fe=!!be.greedy,je=be.alias;if(Fe&&!be.pattern.global){var ze=be.pattern.toString().match(/[imsuy]*$/)[0];be.pattern=RegExp(be.pattern.source,ze+"g")}for(var xe=be.pattern||be,fe=R.next,Oe=O;fe!==_.tail&&!(N&&Oe>=N.reach);Oe+=fe.value.length,fe=fe.next){var te=fe.value;if(_.length>y.length)return;if(!(te instanceof c)){var We=1,Se;if(Fe){if(Se=p(xe,Oe,y,ye),!Se||Se.index>=y.length)break;var Ce=Se.index,ct=Se.index+Se[0].length,Be=Oe;for(Be+=fe.value.length;Ce>=Be;)fe=fe.next,Be+=fe.value.length;if(Be-=fe.value.length,Oe=Be,fe.value instanceof c)continue;for(var Ie=fe;Ie!==_.tail&&(Be<ct||typeof Ie.value=="string");Ie=Ie.next)We++,Be+=Ie.value.length;We--,te=y.slice(Oe,Be),Se.index-=Oe}else if(Se=p(xe,0,te,ye),!Se)continue;var Ce=Se.index,L=Se[0],Q=te.slice(0,Ce),H=te.slice(Ce+L.length),ae=Oe+te.length;N&&ae>N.reach&&(N.reach=ae);var x=fe.prev;Q&&(x=m(_,x,Q),Oe+=Q.length),f(_,x,We);var z=new c(V,U?a.tokenize(L,U):L,je,L);if(fe=m(_,x,z),H&&m(_,fe,H),We>1){var M={cause:V+","+oe,reach:ae};u(y,_,A,fe.prev,Oe,M),N&&M.reach>N.reach&&(N.reach=M.reach)}}}}}}function d(){var y={value:null,prev:null,next:null},_={value:null,prev:y,next:null};y.next=_,this.head=y,this.tail=_,this.length=0}function m(y,_,A){var R=_.next,O={value:A,prev:_,next:R};return _.next=O,R.prev=O,y.length++,O}function f(y,_,A){for(var R=_.next,O=0;O<A&&R!==y.tail;O++)R=R.next;_.next=R,R.prev=_,y.length-=O}function w(y){for(var _=[],A=y.head.next;A!==y.tail;)_.push(A.value),A=A.next;return _}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(y){var _=JSON.parse(y.data),A=_.language,R=_.code,O=_.immediateClose;r.postMessage(a.highlight(R,a.languages[A],A)),O&&r.close()},!1)),a;var h=a.util.currentScript();h&&(a.filename=h.src,h.hasAttribute("data-manual")&&(a.manual=!0));function C(){a.manual||a.highlightAll()}if(!a.manual){var S=document.readyState;S==="loading"||S==="interactive"&&h&&h.defer?document.addEventListener("DOMContentLoaded",C):window.requestAnimationFrame?window.requestAnimationFrame(C):window.setTimeout(C,16)}return a})(t);e.exports&&(e.exports=n),typeof oa<"u"&&(oa.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(o,s){var l={};l["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};a["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var c={};c[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(r){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",o=function(h,C){return"✖ Error "+h+" while fetching file: "+C},s="✖ Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",c="loading",p="loaded",u="failed",d="pre[data-src]:not(["+a+'="'+p+'"]):not(['+a+'="'+c+'"])';function m(h,C,S){var y=new XMLHttpRequest;y.open("GET",h,!0),y.onreadystatechange=function(){y.readyState==4&&(y.status<400&&y.responseText?C(y.responseText):y.status>=400?S(o(y.status,y.statusText)):S(s))},y.send(null)}function f(h){var C=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(h||"");if(C){var S=Number(C[1]),y=C[2],_=C[3];return y?_?[S,Number(_)]:[S,void 0]:[S,S]}}n.hooks.add("before-highlightall",function(h){h.selector+=", "+d}),n.hooks.add("before-sanity-check",function(h){var C=h.element;if(C.matches(d)){h.code="",C.setAttribute(a,c);var S=C.appendChild(document.createElement("CODE"));S.textContent=r;var y=C.getAttribute("data-src"),_=h.language;if(_==="none"){var A=(/\.(\w+)$/.exec(y)||[,"none"])[1];_=l[A]||A}n.util.setLanguage(S,_),n.util.setLanguage(C,_);var R=n.plugins.autoloader;R&&R.loadLanguages(_),m(y,function(O){C.setAttribute(a,p);var N=f(C.getAttribute("data-range"));if(N){var V=O.split(/\r\n?|\n/g),D=N[0],oe=N[1]==null?V.length:N[1];D<0&&(D+=V.length),D=Math.max(0,Math.min(D-1,V.length)),oe<0&&(oe+=V.length),oe=Math.max(0,Math.min(oe,V.length)),O=V.slice(D,oe).join(`
`),C.hasAttribute("data-start")||C.setAttribute("data-start",String(D+1))}S.textContent=O,n.highlightElement(S)},function(O){C.setAttribute(a,u),S.textContent=O})}}),n.plugins.fileHighlight={highlight:function(C){for(var S=(C||document).querySelectorAll(d),y=0,_;_=S[y++];)n.highlightElement(_)}};var w=!1;n.fileHighlight=function(){w||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),w=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(No)),No.exports}var Ob=Lb();const Ho=Fb(Ob);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var ia={},aa;function Vb(){return aa||(aa=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),ia}Vb();Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var s={};s[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},Prism.languages.insertBefore("markup","cdata",s)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);const Db={class:"relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800 text-zinc-100 shadow-sm"},jb={class:"flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5 text-xs text-zinc-400"},Bb={class:"font-mono"},Nb={class:"max-h-[480px] overflow-auto p-4 text-xs font-mono leading-relaxed"},Hb={class:"!m-0 !p-0 !bg-transparent"},Gb=["innerHTML"],la=se({__name:"CodeBlock",props:{code:{},language:{default:"html"},filename:{}},setup(e){const t=e,n=E(!1),r=ee(()=>{const s=Ho.languages[t.language]||Ho.languages.markup;return Ho.highlight(t.code.trim(),s,t.language)});async function o(){try{await navigator.clipboard.writeText(t.code.trim()),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(s){console.error("Failed to copy",s)}}return(s,l)=>(b(),g("div",Db,[i("div",jb,[i("span",Bb,P(t.filename||t.language.toUpperCase()),1),i("button",{type:"button",class:"inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",onClick:o},[n.value?(b(),me(I(St),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(b(),me(I(vr),{key:1,class:"h-3.5 w-3.5"})),i("span",null,P(n.value?"已复制！":"复制代码"),1)])]),i("div",Nb,[i("pre",Hb,[i("code",{innerHTML:r.value},null,8,Gb)])])]))}}),Ub={class:"space-y-4"},qb={class:"space-y-1"},Wb={class:"text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},Xb={class:"text-sm text-zinc-500 dark:text-zinc-400"},Yb={class:"overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-sm transition-colors"},Kb={class:"flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 bg-zinc-50/80 px-4 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/60"},Zb={class:"flex items-center gap-1 rounded-lg bg-zinc-200/60 p-1 dark:bg-zinc-800/60 text-xs font-medium"},Jb={key:0,class:"flex items-center gap-2 text-xs"},Qb={class:"flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-0.5"},eg={class:"relative"},tg={class:"p-4"},ng={class:"p-4"},rg={key:0,class:"mt-8 space-y-3"},og={class:"overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800"},sg={class:"w-full text-left text-xs"},ig={class:"divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono"},ag={class:"px-4 py-2.5 font-bold text-blue-600 dark:text-blue-400"},lg={class:"px-4 py-2.5 text-pink-600 dark:text-pink-400"},cg={class:"px-4 py-2.5 text-zinc-500"},dg={class:"px-4 py-2.5 font-sans text-zinc-600 dark:text-zinc-300"},ug=se({__name:"ComponentPreview",props:{title:{},description:{},componentCode:{},usageCode:{},componentFilename:{},propsList:{}},setup(e){const t=e,n=E("preview"),r=E("default"),o=E(0),s=E(!0);let l=null;et(()=>{s.value=document.documentElement.classList.contains("dark"),l=new MutationObserver(()=>{s.value=document.documentElement.classList.contains("dark")}),l.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}),st(()=>{l==null||l.disconnect()});const a=ee(()=>r.value==="dark"?!0:r.value==="light"?!1:s.value);function c(){o.value++}return(p,u)=>(b(),g("div",Ub,[i("div",qb,[i("h2",Wb,P(t.title),1),i("p",Xb,P(t.description),1)]),i("div",Yb,[i("div",Kb,[i("div",Zb,[i("button",{type:"button",class:$(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="preview"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[0]||(u[0]=d=>n.value="preview")},[k(I(Gl),{class:"h-3.5 w-3.5"}),u[6]||(u[6]=i("span",null,"实时效果",-1))],2),i("button",{type:"button",class:$(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="component"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[1]||(u[1]=d=>n.value="component")},[k(I(ir),{class:"h-3.5 w-3.5"}),i("span",null,"组件源码 ("+P(t.componentFilename)+")",1)],2),i("button",{type:"button",class:$(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="usage"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[2]||(u[2]=d=>n.value="usage")},[k(I(ir),{class:"h-3.5 w-3.5"}),u[7]||(u[7]=i("span",null,"业务调用 (Usage.vue)",-1))],2)]),n.value==="preview"?(b(),g("div",Jb,[u[8]||(u[8]=i("span",{class:"text-zinc-400"},"视窗底色：",-1)),i("div",Qb,[i("button",{type:"button",class:$(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="default"?"bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[3]||(u[3]=d=>r.value="default")}," 自适应 ",2),i("button",{type:"button",class:$(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="light"?"bg-white text-zinc-900 shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[4]||(u[4]=d=>r.value="light")}," 亮白 ",2),i("button",{type:"button",class:$(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="dark"?"bg-black text-white shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[5]||(u[5]=d=>r.value="dark")}," 暗黑 ",2)]),i("button",{type:"button",class:"inline-flex items-center gap-1 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",title:"重新触发动效",onClick:c},[k(I(Wl),{class:"h-3.5 w-3.5"})])])):J("",!0)]),i("div",eg,[Rn(i("div",{class:$(["relative flex min-h-[360px] w-full items-center justify-center overflow-hidden p-8 transition-colors duration-200",a.value?"dark bg-black text-zinc-100":"bg-zinc-100/80 text-zinc-900"])},[(b(),g("div",{key:o.value,class:"w-full flex items-center justify-center"},[Qe(p.$slots,"default",{isDark:a.value})]))],2),[[To,n.value==="preview"]]),Rn(i("div",tg,[k(la,{code:t.componentCode,filename:t.componentFilename,language:"html"},null,8,["code","filename"])],512),[[To,n.value==="component"]]),Rn(i("div",ng,[k(la,{code:t.usageCode,filename:"UsageExample.vue",language:"html"},null,8,["code"])],512),[[To,n.value==="usage"]])])]),t.propsList&&t.propsList.length>0?(b(),g("div",rg,[u[10]||(u[10]=i("h3",{class:"text-base font-semibold text-zinc-900 dark:text-zinc-100"}," Props 属性参考 ",-1)),i("div",og,[i("table",sg,[u[9]||(u[9]=i("thead",{class:"border-b border-zinc-200 bg-zinc-50/80 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"},[i("tr",null,[i("th",{class:"px-4 py-2.5"},"属性名"),i("th",{class:"px-4 py-2.5"},"类型"),i("th",{class:"px-4 py-2.5"},"默认值"),i("th",{class:"px-4 py-2.5"},"说明")])],-1)),i("tbody",ig,[(b(!0),g(ie,null,ke(t.propsList,d=>(b(),g("tr",{key:d.name,class:"text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40"},[i("td",ag,P(d.name),1),i("td",lg,P(d.type),1),i("td",cg,P(d.default),1),i("td",dg,P(d.description),1)]))),128))])])])])):J("",!0)]))}}),pg=["onMouseenter","onClick"],fg={key:0,class:"pointer-events-none absolute -top-9 z-50 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-800/95 dark:text-zinc-200"},mg=se({__name:"Dock",props:{items:{},iconSize:{default:44},iconMagnification:{default:68},iconDistance:{default:120},direction:{default:"bottom"},class:{}},setup(e){const t=e,n=E(null),r=E(null),o=E(null);function s(d){r.value=d.clientX}function l(){r.value=null,o.value=null}function a(d){if(r.value===null||!d)return 1;const m=d.getBoundingClientRect(),f=m.left+m.width/2,w=Math.abs(r.value-f);if(w>t.iconDistance)return 1;const h=w/t.iconDistance,C=(t.iconMagnification-t.iconSize)/t.iconSize,S=.5*(1+Math.cos(h*Math.PI));return 1+C*S}const c=E([]);function p(d,m){d&&(c.value[m]=d)}function u(d){const m=c.value[d],f=a(m);return Math.round(t.iconSize*f)}return(d,m)=>(b(),g("div",{ref_key:"dockRef",ref:n,class:$(I(pe)("mx-auto flex h-16 items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/70 px-4 py-2 shadow-xl backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 transition-all duration-200 select-none",t.direction==="bottom"&&"items-end",t.direction==="top"&&"items-start",t.direction==="middle"&&"items-center",t.class)),onMousemove:s,onMouseleave:l},[t.items&&t.items.length>0?(b(!0),g(ie,{key:0},ke(t.items,(f,w)=>(b(),g("div",{key:f.id,ref_for:!0,ref:h=>p(h,w),class:"group relative flex items-center justify-center cursor-pointer transition-all duration-100 ease-out",style:he({width:`${u(w)}px`,height:`${u(w)}px`}),onMouseenter:h=>o.value=f.label||null,onClick:h=>f.onClick&&f.onClick()},[(b(),me(tt(f.href?"a":"button"),{href:f.href,class:$(["flex h-full w-full items-center justify-center rounded-2xl border transition-colors shadow-sm","border-zinc-200/70 bg-white/90 text-zinc-700 hover:text-zinc-950","dark:border-zinc-700/60 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:text-white"])},{default:Y(()=>[(b(),me(tt(f.icon),{class:"h-1/2 w-1/2 transition-transform duration-100"}))]),_:2},1032,["href"])),k(At,{name:"dock-fade"},{default:Y(()=>[o.value===f.label&&f.label?(b(),g("div",fg,P(f.label),1)):J("",!0)]),_:2},1024),m[0]||(m[0]=i("span",{class:"absolute -bottom-1.5 h-1 w-1 rounded-full bg-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-zinc-500"},null,-1))],44,pg))),128)):Qe(d.$slots,"default",{},void 0,!0,1)],34))}}),bg=Ge(mg,[["__scopeId","data-v-3c8b0d2e"]]),gg={key:0,class:"pointer-events-none absolute inset-0 h-full w-full select-none",xmlns:"http://www.w3.org/2000/svg"},hg=["r","stroke","stroke-width"],xg={class:"orbit-rotator pointer-events-auto h-full w-full"},vg={class:"orbit-item pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"},yg=se({__name:"OrbitLogos",props:{radius:{default:120},duration:{default:20},delay:{default:0},reverse:{type:Boolean,default:!1},path:{type:Boolean,default:!0},pathColor:{},pathWidth:{default:1},tiltAngle:{default:0},class:{}},setup(e){const t=e,n=ee(()=>({"--radius":`${t.radius}px`,"--duration":`${t.duration}s`,"--delay":`-${t.delay}s`,"--direction":t.reverse?"reverse":"normal","--counter-direction":t.reverse?"normal":"reverse","--tilt":`${t.tiltAngle}deg`,width:`${t.radius*2}px`,height:`${t.radius*2}px`}));return(r,o)=>(b(),g("div",{style:he(n.value),class:$(I(pe)("pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full [transform-style:preserve-3d]",t.class))},[t.path?(b(),g("svg",gg,[i("circle",{class:"stroke-zinc-300/60 dark:stroke-zinc-800/80 stroke-dashed",cx:"50%",cy:"50%",r:t.radius,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-dasharray":"4 4"},null,8,hg)])):J("",!0),i("div",xg,[i("div",vg,[Qe(r.$slots,"default",{},void 0,!0)])])],6))}}),Er=Ge(yg,[["__scopeId","data-v-583093f1"]]),kg=["src","alt"],wg={class:"pointer-events-none absolute bottom-4 right-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},zg=["src","alt"],_g={class:"pointer-events-none absolute bottom-4 left-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},Cg={class:"absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-zinc-800 shadow-xl backdrop-blur-md transition-transform duration-100 hover:scale-110 active:scale-95 dark:border-zinc-700/80 dark:bg-zinc-900/90 dark:text-zinc-200"},Sg=se({__name:"ImageCompare",props:{beforeImage:{},afterImage:{},beforeLabel:{default:"Before"},afterLabel:{default:"After"},initialPosition:{default:50},class:{}},setup(e){const t=e,n=E(null),r=E(t.initialPosition),o=E(!1);function s(u){if(!n.value)return;const d=n.value.getBoundingClientRect(),m=u-d.left,f=Math.min(Math.max(m/d.width*100,0),100);r.value=Number(f.toFixed(2))}function l(u){o.value=!0,s(u.clientX)}function a(u){o.value&&s(u.clientX)}function c(){o.value=!1}function p(u){!o.value||u.touches.length===0||s(u.touches[0].clientX)}return et(()=>{window.addEventListener("mouseup",c),window.addEventListener("mousemove",a),window.addEventListener("touchend",c),window.addEventListener("touchmove",p)}),st(()=>{window.removeEventListener("mouseup",c),window.removeEventListener("mousemove",a),window.removeEventListener("touchend",c),window.removeEventListener("touchmove",p)}),(u,d)=>(b(),g("div",{ref_key:"containerRef",ref:n,class:$(I(pe)("relative select-none overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 shadow-xl cursor-ew-resize dark:border-zinc-800/80",t.class)),onMousedown:l,onTouchstart:d[0]||(d[0]=m=>o.value=!0)},[i("img",{src:t.afterImage,alt:t.afterLabel,class:"pointer-events-none h-full w-full object-cover"},null,8,kg),i("div",wg,P(t.afterLabel),1),i("div",{class:"pointer-events-none absolute inset-0 h-full w-full overflow-hidden",style:he({clipPath:`inset(0 ${100-r.value}% 0 0)`})},[i("img",{src:t.beforeImage,alt:t.beforeLabel,class:"h-full w-full object-cover"},null,8,zg),i("div",_g,P(t.beforeLabel),1)],4),i("div",{class:"pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]",style:he({left:`${r.value}%`})},[i("div",Cg,[k(I(Nl),{class:"h-4 w-4"})])],4)],34))}}),Ig={class:"group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/90 dark:bg-zinc-950/90"},Ag={class:"flex items-center gap-2.5 min-w-0"},$g={class:"relative flex h-3 w-3 shrink-0 items-center justify-center"},Mg={class:"flex flex-col min-w-0"},Pg={class:"flex items-center gap-2"},Tg={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate"},Rg={class:"text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5"},Eg={class:"flex items-center gap-2 shrink-0 text-xs text-zinc-500"},Fg={key:0,class:"flex items-center gap-1 font-mono text-[11px] rounded-md bg-zinc-100 px-2 py-0.5 dark:bg-zinc-900 dark:text-zinc-300"},Lg={key:0,class:"border-t border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-2.5"},Og={class:"mt-0.5 shrink-0"},Vg={key:3,class:"inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 text-[10px] text-zinc-400 dark:border-zinc-700"},Dg={class:"flex-1 min-w-0"},jg={class:"flex items-center justify-between"},Bg={key:0,class:"font-mono text-[10px] text-zinc-400 shrink-0 ml-2"},Ng={key:0,class:"text-[11px] text-zinc-400 font-mono mt-0.5 truncate"},Hg=se({__name:"AgentStatus",props:{status:{default:"thinking"},agentName:{default:"Aura AI Agent"},currentTask:{default:"Thinking and orchestrating subagents..."},elapsed:{type:Boolean,default:!0},steps:{default:()=>[{id:1,name:"Understand user prompt requirements",status:"done",duration:"0.4s"},{id:2,name:"Search codebase for components & hooks",status:"done",duration:"1.2s"},{id:3,name:"Run Playwright headless visual verification",status:"running",detail:"Evaluating DOM computed styles..."},{id:4,name:"Commit and build production artifacts",status:"pending"}]},class:{}},setup(e){const t=e,n=E(!1),r=E(0);let o=null;et(()=>{t.elapsed&&(o=setInterval(()=>{r.value+=.1},100))}),st(()=>{o&&clearInterval(o)});const s=ee(()=>`${r.value.toFixed(1)}s`),l=ee(()=>{switch(t.status){case"thinking":return{icon:Re,label:"思考推演中",color:"text-sky-500 dark:text-sky-400",badgeBg:"bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",pulseBg:"bg-sky-500"};case"running":return{icon:Fi,label:"自主执行中",color:"text-blue-500 dark:text-blue-400 animate-spin",badgeBg:"bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",pulseBg:"bg-blue-500"};case"tool_call":return{icon:Op,label:"调用工具中",color:"text-amber-500 dark:text-amber-400",badgeBg:"bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",pulseBg:"bg-amber-500"};case"success":return{icon:Ri,label:"任务已闭环",color:"text-emerald-500 dark:text-emerald-400",badgeBg:"bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",pulseBg:"bg-emerald-500"};case"error":return{icon:Ti,label:"出现异常",color:"text-rose-500 dark:text-rose-400",badgeBg:"bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",pulseBg:"bg-rose-500"};default:return{icon:Re,label:"待命中",color:"text-zinc-400",badgeBg:"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",pulseBg:"bg-zinc-400"}}});return(a,c)=>(b(),g("div",{class:$(I(pe)("w-full max-w-lg transition-all duration-300",t.class))},[i("div",Ig,[i("div",{class:"flex items-center justify-between gap-3 px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60",onClick:c[0]||(c[0]=p=>n.value=!n.value)},[i("div",Ag,[i("div",$g,[i("span",{class:$(["absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",l.value.pulseBg])},null,2),i("span",{class:$(["relative inline-flex h-2 w-2 rounded-full",l.value.pulseBg])},null,2)]),i("div",Mg,[i("div",Pg,[i("span",Tg,P(t.agentName),1),i("span",{class:$(["rounded-full border px-2 py-0.2 text-[10px] font-semibold",l.value.badgeBg])},P(l.value.label),3)]),i("p",Rg,P(t.currentTask),1)])]),i("div",Eg,[t.elapsed?(b(),g("div",Fg,[k(I(Hl),{class:"h-3 w-3 text-zinc-400"}),i("span",null,P(s.value),1)])):J("",!0),k(I(Nn),{class:$(["h-4 w-4 text-zinc-400 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])]),k(At,{name:"agent-expand"},{default:Y(()=>[n.value&&t.steps&&t.steps.length>0?(b(),g("div",Lg,[c[1]||(c[1]=i("div",{class:"text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2"}," 执行轨迹步骤 (Execution Steps) ",-1)),(b(!0),g(ie,null,ke(t.steps,(p,u)=>(b(),g("div",{key:p.id,class:"flex items-start gap-2.5 text-xs"},[i("div",Og,[p.status==="done"?(b(),me(I(Ri),{key:0,class:"h-4 w-4 text-emerald-500"})):p.status==="running"?(b(),me(I(Fi),{key:1,class:"h-4 w-4 text-sky-500 animate-spin"})):p.status==="error"?(b(),me(I(Ti),{key:2,class:"h-4 w-4 text-rose-500"})):(b(),g("span",Vg,P(u+1),1))]),i("div",Dg,[i("div",jg,[i("span",{class:$(["font-medium truncate",p.status==="done"&&"text-zinc-700 dark:text-zinc-300",p.status==="running"&&"text-sky-600 dark:text-sky-400 font-semibold",p.status==="pending"&&"text-zinc-400 dark:text-zinc-500",p.status==="error"&&"text-rose-500 font-semibold"])},P(p.name),3),p.duration?(b(),g("span",Bg,P(p.duration),1)):J("",!0)]),p.detail?(b(),g("p",Ng,P(p.detail),1)):J("",!0)])]))),128))])):J("",!0)]),_:1})])],2))}}),Gg=Ge(Hg,[["__scopeId","data-v-d55be07e"]]),Ug={class:"flex h-10 w-full items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 select-none"},qg={class:"flex items-center gap-1.5 text-[11px] font-medium text-zinc-400"},Wg={class:"truncate max-w-[220px] sm:max-w-md"},Xg={key:0,class:"flex items-center gap-2"},Yg={key:1,class:"w-12"},Kg={class:"text-blue-400 select-none font-bold"},Zg={class:"text-zinc-100 font-semibold flex-1 break-all"},Jg={key:0,class:"inline-block h-4 w-2 translate-y-0.5 bg-blue-500 animate-pulse ml-0.5"},Qg={key:1,class:"text-emerald-400 font-medium break-all"},eh={key:2,class:"text-rose-400 font-medium break-all"},th={key:3,class:"text-amber-400 font-medium break-all"},nh={key:4,class:"text-sky-400 font-medium break-all"},rh={key:5,class:"text-zinc-400 break-all"},oh={key:0,class:"flex items-center gap-2 pt-1"},sh=se({__name:"TypewriterTerminal",props:{title:{default:"zsh - aura@developer:~ (80x24)"},lines:{default:()=>[{type:"input",text:"pnpm dlx aura-ui@latest add agent-status dock"},{type:"output",text:"⠋ Resolving packages & peer dependencies..."},{type:"output",text:"✔ Cloned src/components/ui/AgentStatus.vue"},{type:"output",text:"✔ Cloned src/components/ui/Dock.vue"},{type:"success",text:"✨ Successfully installed 2 motion primitives in 260ms."},{type:"input",text:"aura test --visual-regression"},{type:"info",text:"ℹ Running Playwright headless test in Chromium..."},{type:"success",text:"✔ All 19 components passed 60fps frame rate check!"}]},typingSpeed:{default:35},pauseEnd:{default:3500},loop:{type:Boolean,default:!0},controls:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=E([]),r=E(0),o=E(0),s=E(!1),l=E(!1),a=E(!1),c=E(null);let p=null;function u(){c.value&&(c.value.scrollTop=c.value.scrollHeight)}function d(){p&&clearTimeout(p),n.value=[],r.value=0,o.value=0,s.value=!1,l.value=!1,m()}function m(){if(!t.lines||t.lines.length===0)return;if(r.value>=t.lines.length){s.value=!1,l.value=!0,t.loop&&(p=setTimeout(()=>{d()},t.pauseEnd));return}const w=t.lines[r.value];if(w.type==="input")if(s.value=!0,o.value===0&&n.value.push({type:"input",text:"",prefix:w.prefix||"$ "}),o.value<w.text.length){const h=n.value[n.value.length-1];h.text+=w.text[o.value],o.value++,u();const C=Math.floor(Math.random()*25)-10,S=Math.max(15,t.typingSpeed+C);p=setTimeout(m,S)}else o.value=0,r.value++,s.value=!1,u(),p=setTimeout(m,400);else{s.value=!1,n.value.push({type:w.type,text:w.text,prefix:w.prefix}),r.value++,u();const h=w.delay??220;p=setTimeout(m,h)}}function f(){const w=t.lines.map(h=>`${h.prefix||(h.type==="input"?"$ ":"")}${h.text}`).join(`
`);navigator.clipboard.writeText(w),a.value=!0,setTimeout(()=>{a.value=!1},2e3)}return et(()=>{d()}),st(()=>{p&&clearTimeout(p)}),ht(()=>t.lines,()=>{d()},{deep:!0}),(w,h)=>(b(),g("div",{class:$(I(pe)("relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 font-mono text-xs sm:text-sm text-zinc-300 shadow-2xl backdrop-blur-md dark:border-zinc-800/80",t.class))},[i("div",Ug,[h[0]||(h[0]=i("div",{class:"flex items-center gap-2"},[i("span",{class:"h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm transition-transform hover:scale-110"}),i("span",{class:"h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm transition-transform hover:scale-110"}),i("span",{class:"h-3 w-3 rounded-full bg-[#27c93f] shadow-sm transition-transform hover:scale-110"})],-1)),i("div",qg,[k(I(Qn),{class:"h-3.5 w-3.5 text-zinc-500"}),i("span",Wg,P(t.title),1)]),t.controls?(b(),g("div",Xg,[i("button",{onClick:d,title:"重新播放",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[k(I(Ip),{class:"h-3.5 w-3.5"})]),i("button",{onClick:f,title:"复制所有命令",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[a.value?(b(),me(I(St),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(b(),me(I(vr),{key:1,class:"h-3.5 w-3.5"}))])])):(b(),g("div",Yg))]),i("div",{ref_key:"terminalBodyRef",ref:c,class:"max-h-80 min-h-[220px] overflow-y-auto p-4 sm:p-5 space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-800"},[(b(!0),g(ie,null,ke(n.value,(C,S)=>(b(),g("div",{key:S,class:"flex items-start gap-2 leading-relaxed"},[C.type==="input"?(b(),g(ie,{key:0},[i("span",Kg,P(C.prefix||"$ "),1),i("span",Zg,[Ae(P(C.text)+" ",1),s.value&&S===n.value.length-1?(b(),g("span",Jg)):J("",!0)])],64)):C.type==="success"?(b(),g("span",Qg,P(C.text),1)):C.type==="error"?(b(),g("span",eh,P(C.text),1)):C.type==="warning"?(b(),g("span",th,P(C.text),1)):C.type==="info"?(b(),g("span",nh,P(C.text),1)):(b(),g("span",rh,P(C.text),1))]))),128)),l.value?(b(),g("div",oh,[...h[1]||(h[1]=[i("span",{class:"text-blue-400 font-bold select-none"},"$ ",-1),i("span",{class:"inline-block h-4 w-2 bg-zinc-500 animate-pulse"},null,-1)])])):J("",!0)],512)],2))}}),ih={class:"p-3 sm:p-4 pb-2"},ah=["placeholder"],lh={class:"flex items-center justify-between border-t border-zinc-100 px-3 py-2.5 dark:border-zinc-900"},ch={class:"flex items-center gap-1.5 sm:gap-2"},dh={class:"relative"},uh={key:0,class:"absolute bottom-full left-0 mb-2 w-52 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-2xl backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 select-none"},ph=["onClick"],fh={key:0,class:"rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.2 text-[9px] text-zinc-500"},mh={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"上传图像或文件"},bh={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"语音输入"},gh={class:"flex items-center gap-2"},hh=["disabled"],xh=se({__name:"PromptInput",props:{modelValue:{default:""},placeholder:{default:"向 Aura AI 提问、生成 UI 动效，或输入 / 触发指令..."},loading:{type:Boolean,default:!1},selectedModel:{default:"deepseek-r1"},models:{default:()=>[{id:"deepseek-r1",name:"DeepSeek R1",badge:"Reasoning"},{id:"claude-3-7-sonnet",name:"Claude 3.7 Sonnet",badge:"Hybrid"},{id:"gpt-4o",name:"GPT-4o Omni",badge:"Multimodal"}]},webSearch:{type:Boolean,default:!1},maxRows:{default:6},class:{}},emits:["update:modelValue","submit","stop","update:selectedModel","toggleWebSearch"],setup(e,{emit:t}){const n=e,r=t,o=E(null),s=E(!1),l=E(n.webSearch),a=ee({get:()=>n.modelValue,set:h=>r("update:modelValue",h)}),c=ee(()=>n.models.find(h=>h.id===n.selectedModel)||n.models[0]);function p(h){const C=h.target;a.value=C.value,u()}function u(){if(!o.value)return;o.value.style.height="auto";const h=Math.min(o.value.scrollHeight,24*n.maxRows);o.value.style.height=`${h}px`}function d(h){h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),m())}function m(){if(n.loading){r("stop");return}a.value.trim()&&r("submit",a.value)}function f(){l.value=!l.value,r("toggleWebSearch",l.value)}function w(h){r("update:selectedModel",h),s.value=!1}return(h,C)=>(b(),g("div",{class:$(I(pe)("group relative w-full rounded-2xl border transition-all duration-300 shadow-xl backdrop-blur-xl","border-zinc-200/90 hover:border-zinc-300 dark:border-zinc-800/90 dark:hover:border-zinc-700","bg-white/85 dark:bg-zinc-950/85",n.class))},[i("div",ih,[Rn(i("textarea",{ref_key:"textareaRef",ref:o,"onUpdate:modelValue":C[0]||(C[0]=S=>a.value=S),placeholder:n.placeholder,rows:"1",onInput:p,onKeydown:d,class:"w-full resize-none border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 bg-transparent text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-500 leading-relaxed font-sans shadow-none",style:{outline:"none","box-shadow":"none"}},null,40,ah),[[Ds,a.value]])]),i("div",lh,[i("div",ch,[i("div",dh,[i("button",{type:"button",onClick:C[1]||(C[1]=S=>s.value=!s.value),class:"flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"},[k(I(Re),{class:"h-3.5 w-3.5 text-blue-500"}),i("span",null,P(c.value.name),1),k(I(Nn),{class:"h-3 w-3 text-zinc-400"})]),k(At,{name:"model-pop"},{default:Y(()=>[s.value?(b(),g("div",uh,[C[2]||(C[2]=i("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," 切换推理基座 ",-1)),(b(!0),g(ie,null,ke(n.models,S=>(b(),g("button",{key:S.id,type:"button",onClick:y=>w(S.id),class:$(["flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",S.id===n.selectedModel?"bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400":"text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"])},[i("span",null,P(S.name),1),S.badge?(b(),g("span",fh,P(S.badge),1)):J("",!0)],10,ph))),128))])):J("",!0)]),_:1})]),i("button",{type:"button",onClick:f,class:$(["flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium transition-colors border",l.value?"border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400":"border-transparent text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"]),title:"联网实时搜索"},[k(I(ar),{class:"h-3.5 w-3.5"}),C[3]||(C[3]=i("span",{class:"hidden sm:inline"},"深度搜索",-1))],2),i("button",mh,[k(I(zp),{class:"h-3.5 w-3.5"})]),i("button",bh,[k(I(eo),{class:"h-3.5 w-3.5"})])]),i("div",gh,[C[4]||(C[4]=i("span",{class:"hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-zinc-400"},[i("span",null,"Enter ↵ 发送")],-1)),i("button",{type:"button",onClick:m,disabled:!n.loading&&!a.value.trim(),class:$(["flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 shadow-md",n.loading?"bg-rose-500 text-white hover:bg-rose-600":a.value.trim()?"bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 active:scale-95":"bg-zinc-100 text-zinc-400 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"])},[n.loading?(b(),me(I(Tp),{key:0,class:"h-3.5 w-3.5 fill-current"})):(b(),me(I(jl),{key:1,class:"h-4 w-4"}))],10,hh)])])],2))}}),vh=Ge(xh,[["__scopeId","data-v-2c565fce"]]),yh={class:"flex items-center gap-2.5 text-xs"},kh={class:"relative flex h-4 w-4 items-center justify-center"},wh={key:0,class:"absolute -inset-1 rounded-full bg-blue-500/20 animate-ping"},zh={class:"flex items-center gap-2"},_h={class:"font-bold text-zinc-900 dark:text-zinc-100"},Ch={class:"inline-flex items-center gap-1 rounded-md bg-zinc-200/60 px-2 py-0.5 font-mono text-[11px] text-zinc-500 dark:bg-zinc-800/80 dark:text-zinc-400"},Sh={key:0,class:"border-t border-zinc-200/70 px-4 py-3.5 dark:border-zinc-800/70"},Ih={class:"border-l-2 border-blue-500/70 pl-3.5 font-mono text-xs leading-relaxed text-zinc-600 dark:border-blue-400/70 dark:text-zinc-400 whitespace-pre-wrap select-text"},Ah=se({__name:"ThoughtAccordion",props:{duration:{default:"思考用时 12.6 秒"},status:{default:"complete"},defaultOpen:{type:Boolean,default:!0},thoughtText:{default:`> 1. 解析用户需求：为 Vue 3 全系打造顶级 AI 原生交互动效。
> 2. 几何与物理模型推演：使用 CSS 3D 矩阵解构空间深度，保持 60fps 满帧性能。
> 3. 边界与异常收敛：引入状态机阻尼回弹，确保单文件零配置即刻分发。
> 4. 自愈与验证：通过 Playwright 双模态 Chromium 验证无色彩渗漏，交付闭环。`},class:{}},setup(e){const t=e,n=E(t.defaultOpen),r=E(!1);function o(){navigator.clipboard.writeText(t.thoughtText),r.value=!0,setTimeout(()=>{r.value=!1},2e3)}return(s,l)=>(b(),g("div",{class:$(I(pe)("w-full overflow-hidden rounded-2xl border transition-all duration-300",n.value?"border-zinc-200/90 bg-zinc-50/70 shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/40":"border-zinc-200/60 bg-white/60 hover:border-zinc-300 dark:border-zinc-800/60 dark:bg-zinc-950/60",t.class))},[i("div",{class:"flex items-center justify-between px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40",onClick:l[2]||(l[2]=a=>n.value=!n.value)},[i("div",yh,[i("div",kh,[k(I(Re),{class:$(["h-4 w-4 text-blue-500 transition-transform duration-300",t.status==="thinking"&&"animate-spin"])},null,8,["class"]),t.status==="thinking"?(b(),g("span",wh)):J("",!0)]),i("div",zh,[i("span",_h,P(t.status==="thinking"?"正在深度思考推演...":"已深度思考"),1),i("span",Ch,[k(I(Hl),{class:"h-3 w-3"}),i("span",null,P(t.duration),1)])])]),i("div",{class:"flex items-center gap-1.5",onClick:l[1]||(l[1]=Kt(()=>{},["stop"]))},[i("button",{type:"button",onClick:o,title:"复制思考过程",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[r.value?(b(),me(I(St),{key:0,class:"h-3.5 w-3.5 text-emerald-500"})):(b(),me(I(vr),{key:1,class:"h-3.5 w-3.5"}))]),i("button",{type:"button",onClick:l[0]||(l[0]=a=>n.value=!n.value),class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[k(I(Nn),{class:$(["h-4 w-4 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])])]),k(At,{name:"thought-slide"},{default:Y(()=>[n.value?(b(),g("div",Sh,[i("div",Ih,[Qe(s.$slots,"default",{},()=>[Ae(P(t.thoughtText),1)],!0)])])):J("",!0)]),_:3})],2))}}),$h=Ge(Ah,[["__scopeId","data-v-00c62984"]]),Mh=["onClick","onMouseenter"],Ph=se({__name:"FluidTabs",props:{modelValue:{default:""},tabs:{default:()=>[]},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=E(null),s=E([]),l=E({left:0,width:0,opacity:0}),a=E({left:0,width:0,opacity:0});function c(f,w){f&&(s.value[w]=f)}function p(){Tn(()=>{if(!o.value)return;const f=n.tabs.findIndex(C=>C.id===n.modelValue);if(f===-1||!s.value[f]){l.value.opacity=0;return}const w=o.value.getBoundingClientRect(),h=s.value[f].getBoundingClientRect();l.value={left:h.left-w.left,width:h.width,opacity:1}})}function u(f){if(!o.value||!s.value[f])return;const w=o.value.getBoundingClientRect(),h=s.value[f].getBoundingClientRect();a.value={left:h.left-w.left,width:h.width,opacity:1}}function d(){a.value.opacity=0}function m(f){r("update:modelValue",f),r("change",f)}return ht(()=>n.modelValue,()=>{p()}),ht(()=>n.tabs,()=>{p()},{deep:!0}),et(()=>{!n.modelValue&&n.tabs.length>0&&r("update:modelValue",n.tabs[0].id),p(),window.addEventListener("resize",p)}),(f,w)=>(b(),g("div",{ref_key:"containerRef",ref:o,class:$(I(pe)("relative inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-zinc-100/80 p-1.5 shadow-inner backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80 select-none",n.class)),onMouseleave:d},[i("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-zinc-200/60 transition-all duration-200 ease-out dark:bg-zinc-800/60",style:he({left:`${a.value.left}px`,width:`${a.value.width}px`,opacity:a.value.opacity})},null,4),i("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-800 dark:shadow-black/40",style:he({left:`${l.value.left}px`,width:`${l.value.width}px`,opacity:l.value.opacity})},null,4),(b(!0),g(ie,null,ke(n.tabs,(h,C)=>(b(),g("button",{key:h.id,ref_for:!0,ref:S=>c(S,C),type:"button",onClick:S=>m(h.id),onMouseenter:S=>u(C),class:$(["relative z-10 flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-200",n.modelValue===h.id?"text-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"])},[h.icon?(b(),me(tt(h.icon),{key:0,class:$(["h-4 w-4 transition-transform duration-200",n.modelValue===h.id?"scale-110 text-blue-600 dark:text-blue-400":"text-zinc-400"])},null,8,["class"])):J("",!0),i("span",null,P(h.label),1),h.badge?(b(),g("span",{key:1,class:$(["rounded-full px-1.5 py-0.2 text-[10px] font-bold font-mono transition-colors",n.modelValue===h.id?"bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300":"bg-zinc-200/80 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"])},P(h.badge),3)):J("",!0)],42,Mh))),128))],34))}}),Th={class:"relative z-10 flex items-center gap-2"},Rh={key:2},Eh={key:3},Fh={key:4},Lh={key:5,class:"ml-1 inline-block font-mono text-[11px] font-bold"},Go=se({__name:"HoldToConfirm",props:{duration:{default:1200},label:{default:"长按以确认执行"},holdingLabel:{default:"保持长按不放..."},confirmedLabel:{default:"已成功确认！"},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,o=E(0),s=E(!1),l=E(!1);let a=null,c=0;const p=ee(()=>{switch(n.variant){case"danger":return{bg:"bg-rose-500/10 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-500/30",fill:"bg-rose-600 dark:bg-rose-500",ring:"text-rose-500",icon:Yl};case"warning":return{bg:"bg-amber-500/10 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-500/30",fill:"bg-amber-600 dark:bg-amber-500",ring:"text-amber-500",icon:Kl};default:return{bg:"bg-blue-500/10 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border-blue-500/30",fill:"bg-blue-600 dark:bg-blue-500",ring:"text-blue-500",icon:St}}});function u(){if(l.value)return;s.value=!0,c=performance.now();function m(){const f=performance.now()-c,w=Math.min(f/n.duration*100,100);o.value=w,w<100?a=requestAnimationFrame(m):(s.value=!1,l.value=!0,r("confirm"),setTimeout(()=>{l.value=!1,o.value=0},2500))}a=requestAnimationFrame(m)}function d(){l.value||(s.value=!1,a!==null&&(cancelAnimationFrame(a),a=null),o.value=0,r("cancel"))}return st(()=>{a!==null&&cancelAnimationFrame(a)}),(m,f)=>(b(),g("button",{type:"button",class:$(I(pe)("group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-xl border px-5 text-xs sm:text-sm font-semibold select-none transition-all duration-200 active:scale-95 cursor-pointer",p.value.bg,l.value&&"!bg-emerald-600 !border-emerald-600 text-white",n.class)),onMousedown:u,onMouseup:d,onMouseleave:d,onTouchstart:Kt(u,["prevent"]),onTouchend:Kt(d,["prevent"])},[l.value?J("",!0):(b(),g("div",{key:0,class:$(["pointer-events-none absolute inset-y-0 left-0 opacity-25 transition-[width] ease-linear",p.value.fill]),style:he({width:`${o.value}%`})},null,6)),i("span",Th,[l.value?(b(),me(I(St),{key:0,class:"h-4 w-4 animate-bounce"})):(b(),me(tt(p.value.icon),{key:1,class:$(["h-4 w-4 transition-transform duration-200",s.value&&"scale-125 animate-pulse"])},null,8,["class"])),l.value?(b(),g("span",Rh,P(n.confirmedLabel),1)):s.value?(b(),g("span",Eh,P(n.holdingLabel),1)):(b(),g("span",Fh,P(n.label),1)),s.value&&!l.value?(b(),g("span",Lh,P(Math.round(o.value))+"% ",1)):J("",!0)])],34))}}),Oh={key:0,class:"flex h-10 items-center gap-1.5 px-4 text-xs sm:text-sm font-semibold text-white"},Uo=se({__name:"ConfirmMorph",props:{label:{default:"删除此资源"},confirmText:{default:"确定删除"},cancelText:{default:"取消"},icon:{},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,o=E(!1),s=E(!1);function l(){s.value||(o.value=!0)}function a(){s.value=!0,r("confirm"),setTimeout(()=>{s.value=!1,o.value=!1},2200)}function c(){o.value=!1,r("cancel")}return(p,u)=>(b(),g("div",{class:$(I(pe)("inline-flex items-center overflow-hidden rounded-xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none",n.variant==="danger"&&"border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20",n.variant==="warning"&&"border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20",n.variant==="primary"&&"border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20",s.value&&"!border-emerald-600 !bg-emerald-600 text-white",n.class))},[s.value?(b(),g("div",Oh,[k(I(St),{class:"h-4 w-4 animate-bounce"}),u[0]||(u[0]=i("span",null,"操作已完成",-1))])):o.value?(b(),g(ie,{key:1},[i("button",{type:"button",onClick:a,class:$(["flex h-10 items-center gap-1.5 px-3.5 text-xs font-semibold text-white transition-colors cursor-pointer",n.variant==="danger"&&"bg-rose-600 hover:bg-rose-700",n.variant==="warning"&&"bg-amber-600 hover:bg-amber-700",n.variant==="primary"&&"bg-blue-600 hover:bg-blue-700"])},[k(I(Kl),{class:"h-3.5 w-3.5"}),i("span",null,P(n.confirmText),1)],2),i("button",{type:"button",onClick:c,class:"flex h-10 items-center gap-1 border-l border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 px-3 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[k(I(js),{class:"h-3.5 w-3.5"}),i("span",null,P(n.cancelText),1)])],64)):(b(),g("button",{key:2,type:"button",onClick:l,class:$(["flex h-10 items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-colors cursor-pointer",n.variant==="danger"&&"text-rose-600 hover:bg-rose-500/10 dark:text-rose-400",n.variant==="warning"&&"text-amber-600 hover:bg-amber-500/10 dark:text-amber-400",n.variant==="primary"&&"text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"])},[(b(),me(tt(n.icon||I(Yl)),{class:"h-4 w-4"})),i("span",null,P(n.label),1)],2))],2))}}),Vh=["width","height","stroke-width"],Dh=["width","height","stroke-width"],jh=["d"],Bh=["width","height","stroke-width"],qo=se({__name:"IconMorph",props:{modelValue:{type:Boolean,default:!1},mode:{default:"menu-close"},size:{default:24},strokeWidth:{default:2},class:{}},emits:["update:modelValue","click"],setup(e,{emit:t}){const n=e,r=t;function o(){r("update:modelValue",!n.modelValue),r("click")}return(s,l)=>(b(),g("button",{type:"button",onClick:o,class:$(I(pe)("relative inline-flex items-center justify-center rounded-xl p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer select-none",n.class)),style:he({width:`${n.size+16}px`,height:`${n.size+16}px`})},[n.mode==="menu-close"?(b(),g("svg",{key:0,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[i("line",{x1:"3",y1:"6",x2:"21",y2:"6",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:he({transform:n.modelValue?"translateY(6px) rotate(45deg)":"none"})},null,4),i("line",{x1:"3",y1:"12",x2:"21",y2:"12",class:"transition-all duration-200 ease-out origin-center",style:he({opacity:n.modelValue?"0":"1",transform:n.modelValue?"scaleX(0)":"scaleX(1)"})},null,4),i("line",{x1:"3",y1:"18",x2:"21",y2:"18",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:he({transform:n.modelValue?"translateY(-6px) rotate(-45deg)":"none"})},null,4)],8,Vh)):n.mode==="play-pause"?(b(),g("svg",{key:1,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[i("line",{x1:"6",y1:"4",x2:"6",y2:"20",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",style:he({transform:n.modelValue?"none":"translateX(1px)"})},null,4),i("path",{d:n.modelValue?"M18 4 L18 20":"M6 4 L20 12 L6 20",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"},null,8,jh)],8,Dh)):n.mode==="plus-minus"?(b(),g("svg",{key:2,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round"},[l[0]||(l[0]=i("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1)),i("line",{x1:"12",y1:"5",x2:"12",y2:"19",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:he({transform:n.modelValue?"rotate(90deg) scale(0)":"rotate(0deg) scale(1)",opacity:n.modelValue?"0":"1"})},null,4)],8,Bh)):J("",!0)],6))}}),Nh={class:"relative inline-flex items-center"},Hh=["disabled"],Gh={key:1,class:"truncate"},Uh={key:2,class:"ml-0.5 rounded-full bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400"},qh={key:0,class:"pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap rounded-md border border-zinc-200/80 bg-white/95 px-2 py-0.5 text-[10px] font-medium text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-800/95 dark:text-zinc-200"},Wh=se({__name:"ActionButton",props:{label:{},tooltip:{},icon:{},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},badge:{},size:{default:"md"},class:{}},emits:["click"],setup(e,{emit:t}){const n=e,r=t,o=E(!1);function s(l){n.disabled||r("click",l)}return(l,a)=>(b(),g("div",Nh,[i("button",{type:"button",disabled:n.disabled,onClick:s,onMouseenter:a[0]||(a[0]=c=>o.value=!0),onMouseleave:a[1]||(a[1]=c=>o.value=!1),class:$(I(pe)("group relative flex items-center justify-center rounded-xl border font-medium select-none transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer","active:scale-90 hover:scale-[1.03]",n.size==="sm"&&"h-8 px-2.5 text-xs gap-1.5",n.size==="md"&&"h-9 px-3 text-xs sm:text-sm gap-2",n.size==="lg"&&"h-11 px-4 text-sm sm:text-base gap-2.5",n.active?"border-blue-500/50 bg-blue-50 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/90 text-zinc-700 shadow-2xs hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800/80 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",n.disabled&&"opacity-50 cursor-not-allowed active:scale-100 hover:scale-100",n.class))},[n.icon?(b(),me(tt(n.icon),{key:0,class:$(["shrink-0 transition-transform duration-150",n.size==="sm"&&"h-3.5 w-3.5",n.size==="md"&&"h-4 w-4",n.size==="lg"&&"h-5 w-5"])},null,8,["class"])):J("",!0),n.label?(b(),g("span",Gh,P(n.label),1)):J("",!0),n.badge!==void 0?(b(),g("span",Uh,P(n.badge),1)):J("",!0),Qe(l.$slots,"default",{},void 0,!0)],42,Hh),k(At,{name:"action-tip"},{default:Y(()=>[o.value&&n.tooltip?(b(),g("div",qh,P(n.tooltip),1)):J("",!0)]),_:1})]))}}),Yn=Ge(Wh,[["__scopeId","data-v-54d32724"]]),Xh={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-1"},Yh=["onClick"],Kh={class:"text-xs font-semibold text-zinc-900 dark:text-zinc-100"},Zh={key:0,class:"text-[10px] text-zinc-400 mt-0.5"},Jh=se({__name:"SplitButton",props:{label:{default:"立即发布上线"},icon:{default:Dr},items:{default:()=>[{id:"preview",label:"发布至 Staging 预览环境",description:"生成独立预览分支 URL"},{id:"draft",label:"保存为草稿草稿快照",description:"仅团队协作成员可见"},{id:"schedule",label:"定时发布计划",description:"设定指定时间自动化推上线"}]},variant:{default:"primary"},class:{}},emits:["primaryClick","select"],setup(e,{emit:t}){const n=e,r=t,o=E(!1),s=E(null);function l(){o.value=!o.value}function a(){r("primaryClick")}function c(u){o.value=!1,r("select",u),u.onClick&&u.onClick()}function p(u){s.value&&!s.value.contains(u.target)&&(o.value=!1)}return et(()=>{window.addEventListener("click",p)}),st(()=>{window.removeEventListener("click",p)}),(u,d)=>(b(),g("div",{ref_key:"containerRef",ref:s,class:$(I(pe)("relative inline-flex items-center select-none",n.class))},[i("div",{class:$(["flex h-10 items-stretch overflow-hidden rounded-xl border shadow-sm transition-all duration-200",n.variant==="primary"&&"border-blue-600 bg-blue-600 text-white hover:bg-blue-500",n.variant==="secondary"&&"border-zinc-200/80 bg-white/90 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800"])},[i("button",{type:"button",onClick:a,class:"flex items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-transform active:scale-95 cursor-pointer"},[(b(),me(tt(n.icon),{class:"h-4 w-4"})),i("span",null,P(n.label),1)]),i("div",{class:$(["w-px self-stretch",n.variant==="primary"?"bg-blue-400/50":"bg-zinc-200 dark:bg-zinc-800"])},null,2),i("button",{type:"button",onClick:Kt(l,["stop"]),class:"flex items-center justify-center px-2.5 transition-colors hover:bg-black/10 active:scale-95 cursor-pointer dark:hover:bg-white/10",title:"更多选项"},[k(I(Nn),{class:$(["h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",o.value&&"rotate-180"])},null,8,["class"])])],2),k(At,{name:"split-menu"},{default:Y(()=>[o.value&&n.items&&n.items.length>0?(b(),g("div",Xh,[(b(!0),g(ie,null,ke(n.items,m=>(b(),g("button",{key:m.id,type:"button",onClick:f=>c(m),class:"flex w-full flex-col items-start rounded-lg px-3 py-2 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"},[i("span",Kh,P(m.label),1),m.description?(b(),g("span",Zh,P(m.description),1)):J("",!0)],8,Yh))),128))])):J("",!0)]),_:1})],2))}}),ca=Ge(Jh,[["__scopeId","data-v-6e3e55b2"]]),Qh=["onClick"],ex={class:"font-mono text-[11px] font-bold"},tx={key:0,type:"button",class:"flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-zinc-300 text-zinc-400 transition-colors hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 cursor-pointer",title:"添加表情反馈"},da=se({__name:"Reactions",props:{items:{default:()=>[{id:"fire",emoji:"🔥",count:48,active:!0},{id:"rocket",emoji:"🚀",count:32,active:!1},{id:"heart",emoji:"❤️",count:65,active:!1},{id:"zap",emoji:"⚡",count:19,active:!1},{id:"eyes",emoji:"👀",count:12,active:!1}]},allowAdd:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=E(JSON.parse(JSON.stringify(t.items))),r=E(null);function o(s){s.active=!s.active,s.count+=s.active?1:-1,r.value=s.id,setTimeout(()=>{r.value=null},400)}return(s,l)=>(b(),g("div",{class:$(I(pe)("inline-flex flex-wrap items-center gap-1.5 select-none",t.class))},[(b(!0),g(ie,null,ke(n.value,a=>(b(),g("button",{key:a.id,type:"button",onClick:c=>o(a),class:$(["group flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold transition-all duration-200 active:scale-90 cursor-pointer",a.active?"border-blue-500/50 bg-blue-50/80 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/80 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"])},[i("span",{class:$(["text-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",r.value===a.id&&"scale-135 -translate-y-0.5","group-hover:scale-110"])},P(a.emoji),3),i("span",ex,P(a.count),1)],10,Qh))),128)),t.allowAdd?(b(),g("button",tx,[k(I(Pp),{class:"h-3.5 w-3.5"})])):J("",!0)],2))}}),nx={key:0,class:"text-xs font-semibold text-zinc-600 dark:text-zinc-300"},rx={class:"relative flex h-full flex-1 items-center px-2.5 min-w-[70px]"},ox={class:"font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100"},sx={key:0,class:"font-mono text-[10px] text-zinc-400"},Wo=se({__name:"ScrubInput",props:{modelValue:{},label:{},min:{default:0},max:{default:100},step:{default:1},sensitivity:{default:1},suffix:{default:"px"},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=E(!1),s=E(!1),l=E(null),a=E(String(n.modelValue));let c=0,p=0;function u(S){let y=S;return n.min!==void 0&&(y=Math.max(n.min,y)),n.max!==void 0&&(y=Math.min(n.max,y)),Math.round(y*100)/100}function d(S){s.value||(o.value=!0,c=S.clientX,p=n.modelValue,window.addEventListener("mousemove",m),window.addEventListener("mouseup",f),document.body.style.cursor="ew-resize",document.body.style.userSelect="none")}function m(S){if(!o.value)return;const y=S.clientX-c;let _=1;S.shiftKey&&(_=10),S.altKey&&(_=.1);const A=Math.round(y/(5/n.sensitivity)*_)*n.step,R=u(p+A);R!==n.modelValue&&r("update:modelValue",R)}function f(){o.value&&(o.value=!1,window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",f),document.body.style.cursor="",document.body.style.userSelect="",r("change",n.modelValue))}function w(){s.value=!0,a.value=String(n.modelValue),setTimeout(()=>{var S,y;(S=l.value)==null||S.focus(),(y=l.value)==null||y.select()},20)}function h(){s.value=!1;const S=parseFloat(a.value);if(!isNaN(S)){const y=u(S);r("update:modelValue",y),r("change",y)}}const C=ee(()=>{const S=n.max-n.min;return S<=0?0:Math.min(Math.max((n.modelValue-n.min)/S*100,0),100)});return st(()=>{window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",f),document.body.style.cursor="",document.body.style.userSelect=""}),(S,y)=>(b(),g("div",{class:$(I(pe)("group relative inline-flex h-9 items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900 select-none overflow-hidden",o.value&&"border-blue-500 ring-2 ring-blue-500/20",n.class))},[i("div",{class:"pointer-events-none absolute inset-y-0 left-0 bg-blue-500/10 dark:bg-blue-500/15 transition-[width] ease-out duration-75",style:he({width:`${C.value}%`})},null,4),i("div",{onMousedown:d,class:"flex h-full items-center gap-1 px-2.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-ew-resize transition-colors",title:"按住左右水平拖拽微调数值 (Shift 加速 10x, Alt 精细 0.1x)"},[k(I(Nl),{class:"h-3.5 w-3.5"}),n.label?(b(),g("span",nx,P(n.label),1)):J("",!0)],32),y[2]||(y[2]=i("div",{class:"h-4 w-px bg-zinc-200 dark:bg-zinc-800"},null,-1)),i("div",rx,[s.value?Rn((b(),g("input",{key:0,ref_key:"inputRef",ref:l,"onUpdate:modelValue":y[0]||(y[0]=_=>a.value=_),type:"text",onBlur:h,onKeydown:[Mi(h,["enter"]),y[1]||(y[1]=Mi(_=>s.value=!1,["esc"]))],class:"w-full bg-transparent p-0 text-right font-mono text-xs font-bold text-zinc-900 outline-none focus:outline-none dark:text-zinc-100"},null,544)),[[Ds,a.value]]):(b(),g("div",{key:1,onDblclick:w,onMousedown:d,class:"flex w-full items-center justify-end gap-0.5 cursor-ew-resize",title:"双击直接键入数值，或按住水平拖动"},[i("span",ox,P(n.modelValue),1),n.suffix?(b(),g("span",sx,P(n.suffix),1)):J("",!0)],32))])],2))}}),ix={class:"relative flex items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900"},ax=["type","value","placeholder"],lx={class:"space-y-1.5"},cx={class:"grid grid-cols-4 gap-1.5"},dx={class:"flex items-center justify-between text-[11px] font-mono"},ux={class:"text-zinc-400 flex items-center gap-1"},px={key:0,class:"rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-3 text-xs space-y-1.5 dark:border-zinc-800/80 dark:bg-zinc-950/40"},fx=se({__name:"PasswordStrength",props:{modelValue:{default:""},placeholder:{default:"请输入安全密码..."},showRules:{type:Boolean,default:!0},class:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,o=E(!1),s=ee(()=>{const p=n.modelValue||"";return[{id:"length",label:"至少 8 个字符",valid:p.length>=8},{id:"lowercase",label:"包含小写英文字母 (a-z)",valid:/[a-z]/.test(p)},{id:"uppercase",label:"包含大写英文字母 (A-Z)",valid:/[A-Z]/.test(p)},{id:"number",label:"包含至少 1 个数字 (0-9)",valid:/\d/.test(p)},{id:"special",label:"包含特殊符号 (!@#$%^&*)",valid:/[^A-Za-z0-9]/.test(p)}]}),l=ee(()=>s.value.filter(p=>p.valid).length),a=ee(()=>{if(!n.modelValue)return{score:0,text:"未输入",color:"bg-zinc-200 dark:bg-zinc-800",textColor:"text-zinc-400"};const p=l.value;return p<=2?{score:1,text:"较弱 (Weak)",color:"bg-rose-500",textColor:"text-rose-500"}:p===3?{score:2,text:"中等 (Fair)",color:"bg-amber-500",textColor:"text-amber-500"}:p===4?{score:3,text:"良好 (Good)",color:"bg-sky-500",textColor:"text-sky-500"}:{score:4,text:"极高安全 (Strong)",color:"bg-emerald-500",textColor:"text-emerald-500"}});function c(p){const u=p.target.value;r("update:modelValue",u)}return(p,u)=>(b(),g("div",{class:$(I(pe)("w-full max-w-sm space-y-3 select-none",n.class))},[i("div",ix,[i("input",{type:o.value?"text":"password",value:n.modelValue,placeholder:n.placeholder,onInput:c,class:"h-10 w-full bg-transparent px-3.5 pr-10 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,ax),i("button",{type:"button",onClick:u[0]||(u[0]=d=>o.value=!o.value),class:"absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer",tabindex:"-1"},[o.value?(b(),me(I(hp),{key:0,class:"h-4 w-4"})):(b(),me(I(Gl),{key:1,class:"h-4 w-4"}))])]),i("div",lx,[i("div",cx,[(b(),g(ie,null,ke(4,d=>i("div",{key:d,class:"h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300"},[i("div",{class:$(["h-full transition-all duration-300 ease-out",d<=a.value.score?a.value.color:"w-0"]),style:he({width:d<=a.value.score?"100%":"0%"})},null,6)])),64))]),i("div",dx,[i("span",ux,[k(I(Xl),{class:"h-3.5 w-3.5"}),u[1]||(u[1]=i("span",null,"安全等级评估",-1))]),i("span",{class:$(["font-bold transition-colors duration-200",a.value.textColor])},P(a.value.text),3)])]),n.showRules?(b(),g("div",px,[(b(!0),g(ie,null,ke(s.value,d=>(b(),g("div",{key:d.id,class:$(["flex items-center gap-2 transition-colors duration-200",d.valid?"text-emerald-600 dark:text-emerald-400 font-semibold":"text-zinc-400"])},[i("div",{class:$(["flex h-4 w-4 items-center justify-center rounded-full transition-all duration-200",d.valid?"bg-emerald-500/20 text-emerald-600 dark:text-emerald-400":"bg-zinc-200 dark:bg-zinc-800 text-zinc-400"])},[d.valid?(b(),me(I(St),{key:0,class:"h-2.5 w-2.5 animate-bounce"})):(b(),me(I(js),{key:1,class:"h-2.5 w-2.5 opacity-50"}))],2),i("span",null,P(d.label),1)],2))),128))])):J("",!0)],2))}}),mx={class:"flex items-center justify-between"},bx={class:"flex items-center gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800"},gx=["onClick"],hx={class:"relative flex items-baseline border-b border-zinc-200/90 pb-3 transition-colors dark:border-zinc-800"},xx={class:"font-mono text-2xl font-bold text-zinc-400 mr-2 shrink-0"},vx=["value","placeholder"],yx={class:"flex flex-wrap items-center gap-2 pt-1"},kx=["onClick"],wx=se({__name:"MoneyInput",props:{modelValue:{default:0},currency:{default:"CNY"},currencies:{default:()=>[{code:"CNY",symbol:"¥",label:"人民币"},{code:"USD",symbol:"$",label:"美元"},{code:"EUR",symbol:"€",label:"欧元"},{code:"GBP",symbol:"£",label:"英镑"}]},presets:{default:()=>[100,500,1e3,5e3]},placeholder:{default:"0.00"},class:{}},emits:["update:modelValue","update:currency"],setup(e,{emit:t}){const n=e,r=t,o=E(n.currency),s=ee(()=>{var f;return((f=n.currencies.find(w=>w.code===o.value))==null?void 0:f.symbol)||"¥"});function l(f){return f===0?"":f.toLocaleString("en-US",{maximumFractionDigits:2})}const a=ee(()=>l(n.modelValue)),c=ee(()=>{const f=a.value.length;return f>12?"text-xl":f>8?"text-2xl":"text-3xl sm:text-4xl"});function p(f){const h=f.target.value.replace(/[^0-9.]/g,""),C=parseFloat(h);r("update:modelValue",isNaN(C)?0:C)}function u(f){r("update:modelValue",n.modelValue+f)}function d(){r("update:modelValue",0)}function m(f){o.value=f,r("update:currency",f)}return(f,w)=>(b(),g("div",{class:$(I(pe)("w-full max-w-md rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 select-none space-y-4",n.class))},[i("div",mx,[w[0]||(w[0]=i("span",{class:"text-xs font-semibold text-zinc-500 dark:text-zinc-400"},"转账 / 充值金额",-1)),i("div",bx,[(b(!0),g(ie,null,ke(n.currencies,h=>(b(),g("button",{key:h.code,type:"button",onClick:C=>m(h.code),class:$(["rounded-md px-2 py-0.5 text-[11px] font-bold font-mono transition-colors cursor-pointer",o.value===h.code?"bg-white text-zinc-900 shadow-2xs dark:bg-zinc-700 dark:text-white":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"])},P(h.code),11,gx))),128))])]),i("div",hx,[i("span",xx,P(s.value),1),i("input",{type:"text",inputmode:"decimal",value:a.value,placeholder:n.placeholder,onInput:p,class:$(["w-full bg-transparent p-0 font-mono font-extrabold tracking-tight text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 transition-all duration-200",c.value])},null,42,vx),n.modelValue>0?(b(),g("button",{key:0,type:"button",onClick:d,class:"ml-2 rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors cursor-pointer shrink-0"}," 清零 ")):J("",!0)]),i("div",yx,[w[1]||(w[1]=i("span",{class:"text-[11px] text-zinc-400"},"快捷填充:",-1)),(b(!0),g(ie,null,ke(n.presets,h=>(b(),g("button",{key:h,type:"button",onClick:C=>u(h),class:"rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-2.5 py-1 font-mono text-xs font-semibold text-zinc-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-400 dark:hover:bg-blue-950/40 dark:hover:text-blue-400 transition-all active:scale-95 cursor-pointer"}," +"+P(s.value)+P(h),9,kx))),128))])],2))}}),zx={class:"text-base leading-none"},_x={class:"font-mono text-zinc-900 dark:text-zinc-100"},Cx={class:"relative flex flex-1 items-center px-3"},Sx=["value","placeholder"],Ix={key:0,class:"ml-1 text-emerald-500"},Ax={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 max-h-56 overflow-y-auto space-y-0.5"},$x=["onClick"],Mx={class:"flex items-center gap-2"},Px={class:"text-base"},Tx={class:"font-medium text-zinc-800 dark:text-zinc-200"},Rx={class:"font-mono text-[11px] font-bold text-zinc-400"},Ex=se({__name:"PhoneInput",props:{modelValue:{default:""},countryCode:{default:"CN"},countries:{default:()=>[{code:"CN",dialCode:"+86",name:"中国",flag:"🇨🇳",format:"### #### ####"},{code:"US",dialCode:"+1",name:"美国",flag:"🇺🇸",format:"(###) ###-####"},{code:"GB",dialCode:"+44",name:"英国",flag:"🇬🇧",format:"#### ######"},{code:"JP",dialCode:"+81",name:"日本",flag:"🇯🇵",format:"###-####-####"},{code:"DE",dialCode:"+49",name:"德国",flag:"🇩🇪",format:"#### #######"},{code:"SG",dialCode:"+65",name:"新加坡",flag:"🇸🇬",format:"#### ####"}]},placeholder:{default:"请输入手机号码..."},class:{}},emits:["update:modelValue","update:countryCode"],setup(e,{emit:t}){const n=e,r=t,o=E(n.countries.find(m=>m.code===n.countryCode)||n.countries[0]),s=E(!1),l=E(null);function a(m,f){const w=m.replace(/\D/g,"");let h="",C=0;for(let S=0;S<f.length&&C<w.length;S++)f[S]==="#"?(h+=w[C],C++):h+=f[S];return C<w.length&&(h+=" "+w.slice(C)),h}function c(m){const w=m.target.value.replace(/\D/g,""),h=a(w,o.value.format);r("update:modelValue",h)}function p(m){o.value=m,s.value=!1,r("update:countryCode",m.code);const f=n.modelValue.replace(/\D/g,"");r("update:modelValue",a(f,m.format))}function u(m){l.value&&!l.value.contains(m.target)&&(s.value=!1)}et(()=>{window.addEventListener("click",u)}),st(()=>{window.removeEventListener("click",u)});const d=ee(()=>{const m=n.modelValue.replace(/\D/g,"");return m.length>=8&&m.length<=15});return(m,f)=>(b(),g("div",{ref_key:"containerRef",ref:l,class:$(I(pe)("relative w-full max-w-sm select-none",n.class))},[i("div",{class:$(["flex h-10 items-center overflow-hidden rounded-xl border bg-white shadow-2xs transition-all dark:bg-zinc-900",n.modelValue&&d.value?"border-emerald-500/50":"border-zinc-200/90 dark:border-zinc-800"])},[i("button",{type:"button",onClick:f[0]||(f[0]=Kt(w=>s.value=!s.value,["stop"])),class:"flex h-full items-center gap-1.5 border-r border-zinc-200/80 bg-zinc-50/70 px-3 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0 outline-none focus:outline-none ring-0"},[i("span",zx,P(o.value.flag),1),i("span",_x,P(o.value.dialCode),1),k(I(Nn),{class:$(["h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",s.value&&"rotate-180"])},null,8,["class"])]),i("div",Cx,[i("input",{type:"tel",value:n.modelValue,placeholder:n.placeholder,onInput:c,class:"w-full bg-transparent font-mono text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,Sx),n.modelValue&&d.value?(b(),g("div",Ix,[k(I(St),{class:"h-4 w-4 animate-bounce"})])):J("",!0)])],2),k(At,{name:"phone-menu"},{default:Y(()=>[s.value?(b(),g("div",Ax,[(b(!0),g(ie,null,ke(n.countries,w=>(b(),g("button",{key:w.code,type:"button",onClick:h=>p(w),class:"flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"},[i("div",Mx,[i("span",Px,P(w.flag),1),i("span",Tx,P(w.name),1)]),i("span",Rx,P(w.dialCode),1)],8,$x))),128))])):J("",!0)]),_:1})],2))}}),Fx=Ge(Ex,[["__scopeId","data-v-178808d1"]]),Lx={class:"flex items-center pl-1 text-zinc-400"},Ox=["onClick"],Vx=["disabled","placeholder"],Dx={key:0,class:"ml-auto pr-1 font-mono text-[10px] text-zinc-400"},jx=se({__name:"TagInput",props:{modelValue:{default:()=>["Vue 3.5","TailwindCSS","Motion UI"]},placeholder:{default:"输入标签后按回车添加..."},maxTags:{default:8},allowDuplicates:{type:Boolean,default:!1},class:{}},emits:["update:modelValue","add","remove"],setup(e,{emit:t}){const n=e,r=t,o=E(""),s=E(null);function l(){const u=o.value.trim();if(!u||n.maxTags&&n.modelValue.length>=n.maxTags)return;if(!n.allowDuplicates&&n.modelValue.includes(u)){o.value="";return}const d=[...n.modelValue,u];r("update:modelValue",d),r("add",u),o.value=""}function a(u){const d=n.modelValue[u],m=n.modelValue.filter((f,w)=>w!==u);r("update:modelValue",m),r("remove",d)}function c(u){u.key==="Enter"||u.key===","?(u.preventDefault(),l()):u.key==="Backspace"&&!o.value&&n.modelValue.length>0&&a(n.modelValue.length-1)}function p(){var u;(u=s.value)==null||u.focus()}return(u,d)=>(b(),g("div",{onClick:p,class:$(I(pe)("group flex min-h-10 w-full max-w-md flex-wrap items-center gap-1.5 rounded-xl border border-zinc-200/90 bg-white p-2 shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900 cursor-text select-none",n.class))},[i("div",Lx,[k(I(Ep),{class:"h-3.5 w-3.5"})]),k(Xu,{name:"tag-list"},{default:Y(()=>[(b(!0),g(ie,null,ke(n.modelValue,(m,f)=>(b(),g("div",{key:m,class:"inline-flex items-center gap-1 rounded-lg border border-blue-500/20 bg-blue-50/70 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/60 dark:text-blue-300 transition-all duration-200"},[i("span",null,P(m),1),i("button",{type:"button",onClick:Kt(w=>a(f),["stop"]),class:"flex h-3.5 w-3.5 items-center justify-center rounded-full hover:bg-blue-600/20 dark:hover:bg-blue-400/20 transition-colors cursor-pointer"},[k(I(js),{class:"h-2.5 w-2.5"})],8,Ox)]))),128))]),_:1}),Rn(i("input",{ref_key:"inputRef",ref:s,"onUpdate:modelValue":d[0]||(d[0]=m=>o.value=m),type:"text",disabled:n.maxTags?n.modelValue.length>=n.maxTags:!1,placeholder:n.modelValue.length===0?n.placeholder:n.maxTags&&n.modelValue.length>=n.maxTags?"已达上限":"添加更多...",onKeydown:c,class:"min-w-[80px] flex-1 bg-transparent px-1.5 py-0.5 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,Vx),[[Ds,o.value]]),n.maxTags?(b(),g("div",Dx,P(n.modelValue.length)+"/"+P(n.maxTags),1)):J("",!0)],2))}}),Bx=Ge(jx,[["__scopeId","data-v-03f3a70c"]]),Nx={class:"relative flex flex-col rounded-2xl border border-zinc-200/90 bg-white p-3 shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900"},Hx=["value","placeholder"],Gx={class:"flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/80"},Ux={class:"flex items-center gap-1 text-[11px] text-zinc-400"},qx={class:"font-mono text-[10px] text-zinc-400"},Wx={key:0,class:"aura-popover popover-shadow absolute bottom-full left-0 mb-2 w-72 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-0.5"},Xx={class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"},Yx=["onClick","onMouseenter"],Kx={key:1},Zx={class:"flex flex-1 flex-col overflow-hidden"},Jx={class:"flex items-center gap-1.5"},Qx={class:"truncate text-xs font-semibold"},ev={key:0,class:"rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"},tv={class:"truncate text-[10px] text-zinc-400"},nv=se({__name:"MentionInput",props:{modelValue:{default:""},placeholder:{default:"输入内容，键入 @ 可呼出团队成员或智能体..."},users:{default:()=>[{id:"1",name:"Aura Assistant",handle:"aura_ai",role:"全栈架构 Agent",isBot:!0},{id:"2",name:"Aura Motion",handle:"auramotion",role:"视觉动效引擎",isBot:!0},{id:"3",name:"Alex Rivera",handle:"alex",role:"前端技术专家",isBot:!1},{id:"4",name:"Elena Rostova",handle:"elena",role:"UI 设计专家",isBot:!1},{id:"5",name:"Devin AI",handle:"devin",role:"代码重构 Agent",isBot:!0}]},class:{}},emits:["update:modelValue","mention"],setup(e,{emit:t}){const n=e,r=t,o=E(null),s=E(!1),l=E(""),a=E(0),c=ee(()=>{const m=l.value.toLowerCase();return m?n.users.filter(f=>f.name.toLowerCase().includes(m)||f.handle.toLowerCase().includes(m)):n.users});function p(m){const f=m.target,w=f.value;r("update:modelValue",w);const h=f.selectionStart||0,C=w.slice(0,h),S=C.lastIndexOf("@");if(S!==-1){const y=C.slice(S+1);if(!y.includes(" ")&&!y.includes(`
`)){l.value=y,s.value=!0,a.value=0;return}}s.value=!1}function u(m){const f=o.value;if(!f)return;const w=n.modelValue,h=f.selectionStart||0,C=w.slice(0,h),S=w.slice(h),y=C.lastIndexOf("@");if(y!==-1){const _=C.slice(0,y)+`@${m.name} `+S;r("update:modelValue",_),r("mention",m),s.value=!1,setTimeout(()=>{f.focus();const A=y+m.name.length+2;f.setSelectionRange(A,A)},20)}}function d(m){!s.value||c.value.length===0||(m.key==="ArrowDown"?(m.preventDefault(),a.value=(a.value+1)%c.value.length):m.key==="ArrowUp"?(m.preventDefault(),a.value=(a.value-1+c.value.length)%c.value.length):m.key==="Enter"||m.key==="Tab"?(m.preventDefault(),u(c.value[a.value])):m.key==="Escape"&&(s.value=!1))}return(m,f)=>(b(),g("div",{class:$(I(pe)("relative w-full max-w-lg select-none",n.class))},[i("div",Nx,[i("textarea",{ref_key:"textareaRef",ref:o,value:n.modelValue,placeholder:n.placeholder,rows:"3",onInput:p,onKeydown:d,class:"w-full resize-none bg-transparent text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,Hx),i("div",Gx,[i("div",Ux,[k(I(fp),{class:"h-3.5 w-3.5 text-blue-500"}),f[0]||(f[0]=i("span",null,"输入 @ 呼出协作成员 / Agent",-1))]),i("span",qx,P(n.modelValue.length)+" 字 ",1)])]),k(At,{name:"mention-pop"},{default:Y(()=>[s.value&&c.value.length>0?(b(),g("div",Wx,[i("div",Xx," 可选成员与智能体 ("+P(c.value.length)+") ",1),(b(!0),g(ie,null,ke(c.value,(w,h)=>(b(),g("button",{key:w.id,type:"button",onClick:C=>u(w),onMouseenter:C=>a.value=h,class:$(["flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors cursor-pointer",a.value===h?"bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300":"hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200"])},[i("div",{class:$(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white shrink-0",w.isBot?"bg-gradient-to-tr from-blue-600 to-indigo-500":"bg-zinc-700 dark:bg-zinc-600"])},[w.isBot?(b(),me(I(Mn),{key:0,class:"h-4 w-4"})):(b(),g("span",Kx,P(w.name.charAt(0)),1))],2),i("div",Zx,[i("div",Jx,[i("span",Qx,P(w.name),1),w.isBot?(b(),g("span",ev," AI ")):J("",!0)]),i("span",tv,"@"+P(w.handle)+" · "+P(w.role),1)])],42,Yx))),128))])):J("",!0)]),_:1})],2))}}),rv=Ge(nv,[["__scopeId","data-v-c938133f"]]),ov=["disabled","onClick","onKeydown"],ua=se({__name:"SegmentedControl",props:{modelValue:{},options:{},size:{default:"md"},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=E(null),s=E([]),l=E({width:"0px",transform:"translateX(0px)",opacity:0});function a(){const u=n.options.findIndex(m=>m.id===n.modelValue);if(u===-1||!s.value[u]){l.value.opacity=0;return}const d=s.value[u];d&&(l.value={width:`${d.offsetWidth}px`,transform:`translateX(${d.offsetLeft}px)`,opacity:1})}function c(u){u.disabled||(r("update:modelValue",u.id),r("change",u))}function p(u,d){const m=n.options.map((h,C)=>({opt:h,i:C})).filter(h=>!h.opt.disabled),f=m.findIndex(h=>h.i===d);if(f===-1)return;let w=f;if(u.key==="ArrowRight"||u.key==="ArrowDown"?(u.preventDefault(),w=(f+1)%m.length):(u.key==="ArrowLeft"||u.key==="ArrowUp")&&(u.preventDefault(),w=(f-1+m.length)%m.length),w!==f){const h=m[w];c(h.opt),Tn(()=>{var C;(C=s.value[h.i])==null||C.focus()})}}return ht(()=>n.modelValue,()=>{Tn(a)}),et(()=>{Tn(()=>{a(),window.addEventListener("resize",a)})}),(u,d)=>(b(),g("div",{ref_key:"containerRef",ref:o,class:$(I(pe)("relative inline-flex items-center rounded-xl bg-zinc-100 p-1 select-none dark:bg-zinc-800/80",n.class))},[i("div",{class:"pointer-events-none absolute left-0 top-1 bottom-1 z-0 rounded-lg bg-white shadow-xs transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-700 dark:shadow-none",style:he(l.value)},null,4),(b(!0),g(ie,null,ke(n.options,(m,f)=>(b(),g("button",{key:m.id,ref_for:!0,ref:w=>s.value[f]=w,type:"button",disabled:m.disabled,onClick:w=>c(m),onKeydown:w=>p(w,f),class:$(I(pe)("relative z-10 flex items-center justify-center gap-1.5 font-medium transition-colors duration-150 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer",n.size==="sm"&&"h-7 px-2.5 text-xs",n.size==="md"&&"h-8 px-3.5 text-xs sm:text-sm",n.size==="lg"&&"h-10 px-4 text-sm sm:text-base",n.modelValue===m.id?"text-zinc-900 font-bold dark:text-white":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",m.disabled&&"opacity-40 cursor-not-allowed hover:text-zinc-500"))},[m.icon?(b(),me(tt(m.icon),{key:0,class:$(["shrink-0 transition-transform duration-150",n.size==="sm"&&"h-3.5 w-3.5",n.size==="md"&&"h-4 w-4",n.size==="lg"&&"h-5 w-5",n.modelValue===m.id&&"scale-105 text-blue-600 dark:text-blue-400"])},null,8,["class"])):J("",!0),i("span",null,P(m.label),1),m.badge!==void 0?(b(),g("span",{key:1,class:$(["rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold transition-colors",n.modelValue===m.id?"bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300":"bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"])},P(m.badge),3)):J("",!0)],42,ov))),128))],2))}}),sv={class:"flex items-center gap-1.5 flex-wrap"},iv={key:0,class:"flex items-center"},av={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},lv={key:1},cv=["onClick"],dv={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},uv={key:1},pv={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},fv={key:1},mv={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-1.5 w-48 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-0.5"},bv=["onClick"],gv={key:0,class:"font-bold text-zinc-900 dark:text-white flex items-center gap-1","aria-current":"page"},hv=["onClick"],xv={key:2,class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},vv={key:1},yv=se({__name:"BreadcrumbTrail",props:{items:{},maxItems:{default:4},separator:{default:"chevron"},showHome:{type:Boolean,default:!0},class:{}},emits:["select"],setup(e,{emit:t}){const n=e,r=t,o=E(!1),s=E(null),l=ee(()=>{const p=n.items.length;return p<=n.maxItems?{start:n.items,hidden:[],end:[],isCollapsed:!1}:{start:[n.items[0]],hidden:n.items.slice(1,p-2),end:n.items.slice(p-2),isCollapsed:!0}});function a(p){r("select",p),p.onClick&&p.onClick(),o.value=!1}function c(p){s.value&&!s.value.contains(p.target)&&(o.value=!1)}return et(()=>{window.addEventListener("click",c)}),st(()=>{window.removeEventListener("click",c)}),(p,u)=>(b(),g("nav",{"aria-label":"Breadcrumb",class:$(I(pe)("inline-flex items-center text-xs sm:text-sm font-medium select-none",n.class))},[i("ol",sv,[n.showHome?(b(),g("li",iv,[i("button",{type:"button",onClick:u[0]||(u[0]=d=>a({label:"首页",href:"/"})),class:"flex items-center gap-1 text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer",title:"返回控制台首页"},[k(I(Ul),{class:"h-3.5 w-3.5"})]),i("span",av,[n.separator==="chevron"?(b(),me(I(Pn),{key:0,class:"h-3.5 w-3.5"})):(b(),g("span",lv,"/"))])])):J("",!0),(b(!0),g(ie,null,ke(l.value.start,d=>(b(),g("li",{key:d.label,class:"flex items-center"},[i("button",{type:"button",onClick:m=>a(d),class:"flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[d.icon?(b(),me(tt(d.icon),{key:0,class:"h-3.5 w-3.5"})):J("",!0),i("span",null,P(d.label),1)],8,cv),i("span",dv,[n.separator==="chevron"?(b(),me(I(Pn),{key:0,class:"h-3.5 w-3.5"})):(b(),g("span",uv,"/"))])]))),128)),l.value.isCollapsed?(b(),g("li",{key:1,ref_key:"menuRef",ref:s,class:"relative flex items-center"},[i("button",{type:"button",onClick:u[1]||(u[1]=Kt(d=>o.value=!o.value,["stop"])),class:"flex h-6 w-6 items-center justify-center rounded-md border border-zinc-200/80 bg-zinc-50/80 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-all cursor-pointer",title:"点击展开中间隐藏路径"},[k(I(gp),{class:"h-3.5 w-3.5"})]),i("span",pv,[n.separator==="chevron"?(b(),me(I(Pn),{key:0,class:"h-3.5 w-3.5"})):(b(),g("span",fv,"/"))]),k(At,{name:"crumb-menu"},{default:Y(()=>[o.value?(b(),g("div",mv,[u[2]||(u[2]=i("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," 折叠上级路径 ",-1)),(b(!0),g(ie,null,ke(l.value.hidden,(d,m)=>(b(),g("button",{key:m,type:"button",onClick:f=>a(d),class:"flex w-full items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-left text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer transition-colors"},[d.icon?(b(),me(tt(d.icon),{key:0,class:"h-3.5 w-3.5 text-zinc-400"})):J("",!0),i("span",null,P(d.label),1)],8,bv))),128))])):J("",!0)]),_:1})],512)):J("",!0),(b(!0),g(ie,null,ke(l.value.end,(d,m)=>(b(),g("li",{key:m,class:"flex items-center"},[m===l.value.end.length-1?(b(),g("span",gv,[d.icon?(b(),me(tt(d.icon),{key:0,class:"h-3.5 w-3.5 text-blue-500"})):J("",!0),i("span",null,P(d.label),1)])):(b(),g("button",{key:1,type:"button",onClick:f=>a(d),class:"flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[d.icon?(b(),me(tt(d.icon),{key:0,class:"h-3.5 w-3.5"})):J("",!0),i("span",null,P(d.label),1)],8,hv)),m<l.value.end.length-1?(b(),g("span",xv,[n.separator==="chevron"?(b(),me(I(Pn),{key:0,class:"h-3.5 w-3.5"})):(b(),g("span",vv,"/"))])):J("",!0)]))),128))])],2))}}),pa=Ge(yv,[["__scopeId","data-v-097ac1ff"]]),kv={key:0,class:"whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-xs font-semibold text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:text-zinc-200 transition-transform group-hover:scale-105"},wv=["onClick","title"],zv=se({__name:"FloatingActionMenu",props:{actions:{},direction:{default:"up"},class:{}},emits:["select","toggle"],setup(e,{emit:t}){const n=e,r=t,o=E(!1),s=E(null);function l(){o.value=!o.value,r("toggle",o.value)}function a(p){r("select",p),p.onClick&&p.onClick(),o.value=!1,r("toggle",!1)}function c(p){s.value&&!s.value.contains(p.target)&&o.value&&(o.value=!1,r("toggle",!1))}return et(()=>{window.addEventListener("click",c)}),st(()=>{window.removeEventListener("click",c)}),(p,u)=>(b(),g("div",{ref_key:"containerRef",ref:s,class:$(I(pe)("relative inline-flex flex-col items-center select-none",n.class))},[k(At,{name:"fab-items"},{default:Y(()=>[o.value?(b(),g("div",{key:0,class:$(["absolute z-40 flex gap-3 pointer-events-auto",n.direction==="up"&&"bottom-full mb-3 flex-col-reverse items-center",n.direction==="down"&&"top-full mt-3 flex-col items-center",n.direction==="left"&&"right-full mr-3 flex-row-reverse items-center",n.direction==="right"&&"left-full ml-3 flex-row items-center"])},[(b(!0),g(ie,null,ke(n.actions,(d,m)=>(b(),g("div",{key:d.id,class:"flex items-center gap-2 group cursor-pointer",style:he({transitionDelay:`${m*40}ms`})},[n.direction==="up"||n.direction==="down"?(b(),g("div",kv,P(d.label),1)):J("",!0),i("button",{type:"button",onClick:Kt(f=>a(d),["stop"]),class:$(["flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer",d.color||"bg-blue-600 hover:bg-blue-500 shadow-blue-500/25"]),title:d.label},[(b(),me(tt(d.icon),{class:"h-4 w-4"}))],10,wv)],4))),128))],2)):J("",!0)]),_:1}),i("button",{type:"button",onClick:Kt(l,["stop"]),class:$(["relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-blue-500 hover:scale-105 active:scale-90 cursor-pointer outline-none focus:outline-none ring-0",o.value&&"!bg-zinc-900 dark:!bg-zinc-700 shadow-zinc-900/40"]),title:"操作菜单"},[k(I(Cp),{class:$(["h-5 w-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",o.value&&"rotate-135"])},null,8,["class"])],2)],2))}}),_v=Ge(zv,[["__scopeId","data-v-9096a8eb"]]),Cv={class:"flex items-center gap-1 rounded-xl bg-zinc-50 p-1 border border-zinc-200/80 dark:bg-zinc-900/60 dark:border-zinc-800/80"},Sv=["onMouseenter"],Iv={class:"space-y-1"},Av=["onClick"],$v={key:0,class:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 transition-transform group-hover:scale-105"},Mv={class:"flex-1 overflow-hidden"},Pv={class:"flex items-center gap-1.5"},Tv={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"},Rv={key:0,class:"rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300"},Ev={class:"mt-0.5 text-[11px] text-zinc-400 line-clamp-1"},Fv=se({__name:"NavbarHover",props:{items:{},class:{}},emits:["select"],setup(e,{emit:t}){const n=e,r=t,o=E(null),s=E(null),l=E([]),a=E({left:0,opacity:0,arrowLeft:0});let c=null;function p(w){const h=l.value[w],C=s.value;if(!h||!C)return;const S=C.getBoundingClientRect(),y=h.getBoundingClientRect(),_=y.left+y.width/2-S.left,A=320;a.value={left:Math.max(_-A/2,0),arrowLeft:_,opacity:1}}function u(w,h){c&&(clearTimeout(c),c=null),o.value=w.id,p(h)}function d(){c=setTimeout(()=>{o.value=null,a.value.opacity=0},180)}function m(){c&&(clearTimeout(c),c=null)}function f(w){r("select",w),o.value=null,a.value.opacity=0}return et(()=>{window.addEventListener("resize",()=>{if(o.value){const w=n.items.findIndex(h=>h.id===o.value);w!==-1&&p(w)}})}),st(()=>{c&&clearTimeout(c)}),(w,h)=>(b(),g("div",{ref_key:"containerRef",ref:s,onMouseleave:d,class:$(I(pe)("relative inline-flex items-center select-none",n.class))},[i("nav",Cv,[(b(!0),g(ie,null,ke(n.items,(C,S)=>(b(),g("button",{key:C.id,ref_for:!0,ref:y=>l.value[S]=y,type:"button",onMouseenter:y=>u(C,S),class:$(["flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer outline-none focus:outline-none",o.value===C.id?"bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},[i("span",null,P(C.label),1),k(I(Nn),{class:$(["h-3.5 w-3.5 text-zinc-400 transition-transform duration-200",o.value===C.id&&"rotate-180 text-blue-500"])},null,8,["class"])],42,Sv))),128))]),k(At,{name:"nav-morph"},{default:Y(()=>{var C;return[o.value?(b(),g("div",{key:0,onMouseenter:m,onMouseleave:d,class:"aura-popover popover-shadow absolute top-full mt-2 w-80 rounded-2xl border border-zinc-200/80 bg-white/95 p-3 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",style:he({left:`${a.value.left}px`})},[i("div",{class:"absolute -top-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-zinc-200/80 bg-white dark:border-zinc-800/90 dark:bg-zinc-900 transition-all duration-200",style:he({left:`${a.value.arrowLeft-a.value.left}px`})},null,4),i("div",Iv,[(b(!0),g(ie,null,ke(((C=n.items.find(S=>S.id===o.value))==null?void 0:C.children)||[],S=>(b(),g("div",{key:S.title,onClick:y=>f(S),class:"group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer"},[S.icon?(b(),g("div",$v,[(b(),me(tt(S.icon),{class:"h-4 w-4"}))])):J("",!0),i("div",Mv,[i("div",Pv,[i("span",Tv,P(S.title),1),S.badge?(b(),g("span",Rv,P(S.badge),1)):J("",!0),k(I(sr),{class:"ml-auto h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-blue-500"})]),i("p",Ev,P(S.desc),1)])],8,Av))),128))])],36)):J("",!0)]}),_:1})],34))}}),Lv=Ge(Fv,[["__scopeId","data-v-36b3159c"]]),Ov={class:"inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-white p-1 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900"},Vv=["disabled"],Dv={class:"flex items-center gap-1"},jv={key:0,class:"flex h-8 w-6 items-center justify-center font-mono text-xs text-zinc-400"},Bv=["onClick"],Nv=["disabled"],Hv={key:0,class:"flex w-full max-w-xs items-center gap-2.5 rounded-xl border border-zinc-200/60 bg-zinc-50/60 px-3 py-1.5 dark:border-zinc-800/60 dark:bg-zinc-950/40"},Gv=["max","value"],Uv={class:"font-mono text-[10px] text-zinc-400 shrink-0"},qv={class:"rounded bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 shrink-0"},Wv=se({__name:"PaginationSlider",props:{modelValue:{default:1},totalPages:{default:10},showSlider:{type:Boolean,default:!0},siblingCount:{default:1},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t;function o(a){const c=Math.max(1,Math.min(n.totalPages,a));c!==n.modelValue&&(r("update:modelValue",c),r("change",c))}const s=ee(()=>{const a=n.modelValue,c=n.totalPages,p=n.siblingCount,u=[],d=Math.max(a-p,1),m=Math.min(a+p,c),f=d>2,w=m<c-1;if(!f&&w){const h=3+2*p;for(let C=1;C<=Math.min(h,c);C++)u.push(C);c>h&&(u.push("..."),u.push(c))}else if(f&&!w){const h=3+2*p;u.push(1),u.push("...");for(let C=Math.max(c-h+1,1);C<=c;C++)u.push(C)}else if(f&&w){u.push(1),u.push("...");for(let h=d;h<=m;h++)u.push(h);u.push("..."),u.push(c)}else for(let h=1;h<=c;h++)u.push(h);return u});function l(a){const c=parseInt(a.target.value,10);isNaN(c)||o(c)}return(a,c)=>(b(),g("div",{class:$(I(pe)("flex flex-col items-center gap-3 select-none",n.class))},[i("div",Ov,[i("button",{type:"button",disabled:n.modelValue<=1,onClick:c[0]||(c[0]=p=>o(n.modelValue-1)),class:"flex h-8 w-8 items-center justify-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all active:scale-90 cursor-pointer",title:"上一页"},[k(I(Bl),{class:"h-4 w-4"})],8,Vv),i("div",Dv,[(b(!0),g(ie,null,ke(s.value,(p,u)=>(b(),g(ie,{key:u},[p==="..."?(b(),g("span",jv," ··· ")):(b(),g("button",{key:1,type:"button",onClick:d=>o(p),class:$(["flex h-8 min-w-[32px] items-center justify-center rounded-xl px-2 font-mono text-xs font-semibold transition-all duration-150 active:scale-95 cursor-pointer",n.modelValue===p?"bg-blue-600 text-white shadow-xs dark:bg-blue-600":"text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"])},P(p),11,Bv))],64))),128))]),i("button",{type:"button",disabled:n.modelValue>=n.totalPages,onClick:c[1]||(c[1]=p=>o(n.modelValue+1)),class:"flex h-8 w-8 items-center justify-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all active:scale-90 cursor-pointer",title:"下一页"},[k(I(Pn),{class:"h-4 w-4"})],8,Nv)]),n.showSlider&&n.totalPages>3?(b(),g("div",Hv,[k(I($p),{class:"h-3 w-3 text-zinc-400 shrink-0"}),c[2]||(c[2]=i("span",{class:"font-mono text-[10px] text-zinc-400 shrink-0"},"P1",-1)),i("input",{type:"range",min:1,max:n.totalPages,value:n.modelValue,onInput:l,class:"h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-blue-600 dark:bg-zinc-800"},null,40,Gv),i("span",Uv,"P"+P(n.totalPages),1),i("span",qv,P(n.modelValue)+"/"+P(n.totalPages),1)])):J("",!0)],2))}}),Xv=["title"],Yv=["width","height"],Kv=["cx","cy","r","stroke-width"],Zv=["cx","cy","r","stroke-width","stroke-dasharray","stroke-dashoffset"],Jv={class:"relative z-10 flex flex-col items-center justify-center text-zinc-700 dark:text-zinc-200 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"},Qv={class:"font-mono text-[9px] font-extrabold leading-none mt-0.5"},Xo=se({__name:"CircularProgressNav",props:{progress:{},size:{default:56},strokeWidth:{default:4},icon:{},tooltip:{},class:{}},emits:["click"],setup(e,{emit:t}){const n=e,r=t,o=ee(()=>n.size/2),s=ee(()=>o.value-n.strokeWidth),l=ee(()=>2*Math.PI*s.value),a=ee(()=>{const p=Math.min(Math.max(n.progress,0),100);return l.value-p/100*l.value});function c(){r("click")}return(p,u)=>(b(),g("button",{type:"button",onClick:c,title:n.tooltip||`阅读/滚动进度: ${Math.round(n.progress)}%`,class:$(I(pe)("group relative inline-flex items-center justify-center rounded-full bg-white/90 p-1 shadow-md shadow-black/5 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 dark:bg-zinc-900/90 dark:shadow-black/20 cursor-pointer outline-none focus:outline-none ring-0",n.class)),style:he({width:`${n.size}px`,height:`${n.size}px`})},[(b(),g("svg",{width:n.size,height:n.size,class:"absolute inset-0 -rotate-90 pointer-events-none"},[i("circle",{cx:o.value,cy:o.value,r:s.value,fill:"transparent",stroke:"currentColor","stroke-width":n.strokeWidth,class:"text-zinc-200/80 dark:text-zinc-800"},null,8,Kv),i("circle",{cx:o.value,cy:o.value,r:s.value,fill:"transparent",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-dasharray":l.value,"stroke-dashoffset":a.value,class:"text-blue-600 dark:text-blue-500 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"},null,8,Zv)],8,Yv)),i("div",Jv,[(b(),me(tt(n.icon||I(jl)),{class:"h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"})),i("span",Qv,P(Math.round(n.progress))+"% ",1)])],14,Xv))}}),e1={class:"relative h-full w-full overflow-hidden rounded-2xl p-[1.5px]"},t1={class:"relative z-10 h-full w-full rounded-[14.5px] bg-white p-6 backdrop-blur-xl transition-colors duration-300 dark:bg-zinc-950"},n1=se({__name:"GlowingCard",props:{glowColor:{default:"conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)"},duration:{default:4},blur:{default:20},hoverOnly:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=ee(()=>`${t.duration}s`),r=ee(()=>`${t.blur}px`);return(o,s)=>(b(),g("div",{class:$(I(pe)("group relative rounded-2xl transition-all duration-300",t.class))},[i("div",{class:$(["pointer-events-none absolute -inset-1 rounded-2xl opacity-40 transition-opacity duration-500 overflow-hidden",t.hoverOnly?"opacity-0 group-hover:opacity-60":"opacity-40"]),style:he({filter:`blur(${r.value})`})},[i("div",{class:"glow-rotator absolute left-1/2 top-1/2 h-[350%] w-[350%]",style:he({background:t.glowColor,animationDuration:n.value})},null,4)],6),i("div",e1,[i("div",{class:$(["glow-rotator pointer-events-none absolute left-1/2 top-1/2 h-[350%] w-[350%]",t.hoverOnly?"opacity-0 group-hover:opacity-100":"opacity-100"]),style:he({background:t.glowColor,animationDuration:n.value})},null,6),i("div",t1,[Qe(o.$slots,"default",{},void 0,!0)])])],2))}}),fa=Ge(n1,[["__scopeId","data-v-0f2ee4a3"]]),r1={key:0,class:"pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/40"},o1={class:"relative z-10"},ma=se({__name:"GlassCard",props:{blur:{default:16},saturation:{default:180},borderGlow:{type:Boolean,default:!0},interactive:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=ee(()=>({backdropFilter:`blur(${t.blur}px) saturate(${t.saturation}%)`,WebkitBackdropFilter:`blur(${t.blur}px) saturate(${t.saturation}%)`}));return(r,o)=>(b(),g("div",{class:$(I(pe)("group relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-black/30",t.interactive&&"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-2xl hover:border-white/40 dark:hover:border-white/20",t.class)),style:he(n.value)},[t.borderGlow?(b(),g("div",r1)):J("",!0),o[0]||(o[0]=i("div",{class:"pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60 dark:from-white/10 dark:opacity-30"},null,-1)),i("div",o1,[Qe(r.$slots,"default")])],6))}}),s1={class:"relative z-10"},ba=se({__name:"SpotlightCard",props:{spotlightColor:{default:"rgba(59, 130, 246, 0.15)"},spotlightRadius:{default:320},showBorderSpotlight:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=E(null),r=E({x:-1e3,y:-1e3}),o=E(!1);function s(u){if(!n.value)return;const d=n.value.getBoundingClientRect();r.value={x:u.clientX-d.left,y:u.clientY-d.top}}function l(){o.value=!0}function a(){o.value=!1,r.value={x:-1e3,y:-1e3}}const c=ee(()=>({background:`radial-gradient(${t.spotlightRadius}px circle at ${r.value.x}px ${r.value.y}px, ${t.spotlightColor}, transparent 80%)`})),p=ee(()=>({background:`radial-gradient(${t.spotlightRadius*.75}px circle at ${r.value.x}px ${r.value.y}px, rgba(59, 130, 246, 0.45), transparent 70%)`}));return(u,d)=>(b(),g("div",{ref_key:"cardRef",ref:n,onMousemove:s,onMouseenter:l,onMouseleave:a,class:$(I(pe)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950",t.class))},[t.showBorderSpotlight?(b(),g("div",{key:0,class:$(["pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300",o.value&&"opacity-100"]),style:he(p.value)},null,6)):J("",!0),i("div",{class:$(["pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",o.value&&"opacity-100"]),style:he(c.value)},null,6),i("div",s1,[Qe(u.$slots,"default")])],34))}}),i1={class:"relative z-10 [transform-style:preserve-3d]"},a1=se({__name:"TiltCard",props:{maxTilt:{default:15},perspective:{default:1e3},glare:{type:Boolean,default:!0},scale:{default:1.03},class:{}},setup(e){const t=e,n=E(null),r=E(0),o=E(0),s=E(!1),l=E({x:50,y:50});function a(m){if(!n.value)return;const f=n.value.getBoundingClientRect(),w=m.clientX-f.left,h=m.clientY-f.top,C=f.width/2,S=f.height/2,y=(w-C)/C,_=(h-S)/S;r.value=-_*t.maxTilt,o.value=y*t.maxTilt,l.value={x:w/f.width*100,y:h/f.height*100}}function c(){s.value=!0}function p(){s.value=!1,r.value=0,o.value=0}const u=ee(()=>s.value?{transform:`perspective(${t.perspective}px) rotateX(${r.value.toFixed(2)}deg) rotateY(${o.value.toFixed(2)}deg) scale3d(${t.scale}, ${t.scale}, ${t.scale})`,transition:"transform 0.1s ease-out"}:{transform:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:"transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"}),d=ee(()=>({background:`radial-gradient(circle at ${l.value.x}% ${l.value.y}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%)`}));return(m,f)=>(b(),g("div",{ref_key:"cardRef",ref:n,onMousemove:a,onMouseenter:c,onMouseleave:p,class:$(I(pe)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xl transition-shadow duration-300 dark:border-zinc-800 dark:bg-zinc-950 select-none",s.value&&"shadow-2xl shadow-blue-500/10",t.class)),style:he(u.value)},[t.glare?(b(),g("div",{key:0,class:$(["pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-300",s.value&&"opacity-100"]),style:he(d.value)},null,6)):J("",!0),i("div",i1,[Qe(m.$slots,"default")])],38))}}),l1={class:"relative h-[240px] w-full max-w-md sm:h-[260px]"},c1=["onPointerdown","onPointermove","onPointerup","onPointercancel"],d1={class:"flex items-center justify-between mb-4"},u1={class:"font-mono text-xs text-zinc-400"},p1={class:"text-base font-bold tracking-tight text-zinc-900 dark:text-white line-clamp-2"},f1={key:0,class:"mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3"},m1={key:1,class:"mt-6 flex items-center gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800/60"},b1={class:"h-6 w-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold"},g1={class:"text-xs font-medium text-zinc-600 dark:text-zinc-300"},h1={class:"mt-6 flex items-center gap-4"},x1=se({__name:"CardStack",props:{items:{},maxVisible:{default:3},class:{}},emits:["change","swipe"],setup(e,{emit:t}){const n=e,r=t,o=E(0),s=E(!1),l=E({x:0,y:0}),a=E({x:0,y:0}),c=ee(()=>{const h=n.items.length;if(h===0)return[];const C=[],S=Math.min(n.maxVisible,h);for(let y=0;y<S;y++){const _=(o.value+y)%h;C.push({item:n.items[_],originalIndex:_,stackOrder:y})}return C});function p(){if(n.items.length<=1)return;const h=n.items[o.value];r("swipe",h,"right"),o.value=(o.value+1)%n.items.length,r("change",n.items[o.value])}function u(){n.items.length<=1||(o.value=(o.value-1+n.items.length)%n.items.length,r("change",n.items[o.value]))}function d(){o.value=0}function m(h){s.value=!0,a.value={x:h.clientX,y:h.clientY},l.value={x:0,y:0},h.target.setPointerCapture(h.pointerId)}function f(h){s.value&&(l.value={x:h.clientX-a.value.x,y:h.clientY-a.value.y})}function w(h){if(!s.value)return;s.value=!1;const C=80;if(l.value.x>C)p();else if(l.value.x<-C){const S=n.items[o.value];r("swipe",S,"left"),o.value=(o.value+1)%n.items.length,r("change",n.items[o.value])}l.value={x:0,y:0}}return(h,C)=>(b(),g("div",{class:$(I(pe)("relative flex flex-col items-center select-none",n.class))},[i("div",l1,[(b(!0),g(ie,null,ke(c.value,S=>(b(),g("div",{key:S.item.id,class:$(["absolute inset-0 rounded-2xl border p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",[S.stackOrder===0?"cursor-grab active:cursor-grabbing border-zinc-200/90 bg-white shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900 shadow-black/5 dark:shadow-black/30":"pointer-events-none border-zinc-200/50 bg-white/90 shadow-md dark:border-zinc-800/50 dark:bg-zinc-900/80"]]),style:he({zIndex:n.maxVisible-S.stackOrder,transform:S.stackOrder===0&&s.value?`translate3d(${l.value.x}px, ${l.value.y*.2}px, 0) rotate(${l.value.x*.06}deg)`:`translate3d(0, -${S.stackOrder*12}px, -${S.stackOrder*20}px) scale(${1-S.stackOrder*.05})`,opacity:1-S.stackOrder*.15}),onPointerdown:y=>S.stackOrder===0?m(y):void 0,onPointermove:y=>S.stackOrder===0?f(y):void 0,onPointerup:y=>S.stackOrder===0?w():void 0,onPointercancel:y=>S.stackOrder===0?w():void 0},[i("div",d1,[S.item.tag?(b(),g("span",{key:0,class:$(["rounded-full px-2.5 py-0.5 text-[11px] font-bold",S.item.color||"bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"])},P(S.item.tag),3)):J("",!0),i("span",u1," #"+P(S.originalIndex+1)+" / "+P(n.items.length),1)]),i("h4",p1,P(S.item.title),1),S.item.description?(b(),g("p",f1,P(S.item.description),1)):J("",!0),S.item.author?(b(),g("div",m1,[i("div",b1,P(S.item.author.charAt(0)),1),i("span",g1,P(S.item.author),1)])):J("",!0)],46,c1))),128))]),i("div",h1,[i("button",{type:"button",onClick:u,class:"flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer outline-none focus:outline-none ring-0",title:"上一张卡片"},[k(I(Bl),{class:"h-4 w-4"})]),i("button",{type:"button",onClick:d,class:"flex h-8 px-3 items-center justify-center gap-1.5 rounded-full border border-zinc-200 bg-white text-xs font-mono text-zinc-500 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer outline-none focus:outline-none ring-0",title:"重置堆叠"},[k(I(Wl),{class:"h-3 w-3"}),C[0]||(C[0]=i("span",null,"重置",-1))]),i("button",{type:"button",onClick:p,class:"flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer outline-none focus:outline-none ring-0",title:"下一张卡片（或向右划动）"},[k(I(Pn),{class:"h-4 w-4"})])])],2))}}),v1={class:"pointer-events-none absolute h-0 w-0"},y1=["id"],k1={class:"relative z-10"},w1=se({__name:"NoiseCard",props:{gradient:{default:"linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))"},grainOpacity:{default:.15},animated:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=Bn(),r=ee(()=>`noise-filter-${n}`);return(o,s)=>(b(),g("div",{class:$(I(pe)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-xl dark:border-zinc-800/80 dark:bg-zinc-950/80",t.class))},[i("div",{class:"pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-100",style:he({background:t.gradient})},null,4),(b(),g("svg",v1,[i("defs",null,[i("filter",{id:r.value,x:"0%",y:"0%",width:"100%",height:"100%"},[...s[0]||(s[0]=[i("feTurbulence",{type:"fractalNoise",baseFrequency:"0.75",numOctaves:"3",stitchTiles:"stitch"},null,-1),i("feColorMatrix",{type:"saturate",values:"0"},null,-1)])],8,y1)])])),i("div",{class:$(["pointer-events-none absolute -inset-[100%] transition-opacity duration-300",t.animated&&"animate-noise"]),style:he({filter:`url(#${r.value})`,opacity:t.grainOpacity})},null,6),s[1]||(s[1]=i("div",{class:"pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/20"},null,-1)),i("div",k1,[Qe(o.$slots,"default",{},void 0,!0)])],2))}}),ga=Ge(w1,[["__scopeId","data-v-3563e1d3"]]),z1=["width","height"],_1=["id"],C1=["stop-color"],S1=["stop-color"],I1=["d","fill"],A1=["d","stroke"],$1=["x1","y1","x2","y2","stroke"],M1={key:2},P1=["cx","cy","stroke"],T1=["cx","cy","fill"],ks=se({__name:"Sparkline",props:{data:{default:()=>[12,19,15,27,24,38,35,48,52,60,58,75]},width:{default:280},height:{default:80},color:{default:"#3b82f6"},fill:{type:Boolean,default:!0},interactive:{type:Boolean,default:!0},formatValue:{},class:{}},setup(e){const t=e,n=Bn(),r=ee(()=>`sparkline-grad-${n}`),o={top:8,bottom:8,left:4,right:4},s=ee(()=>{if(t.data.length===0)return[];const f=Math.min(...t.data),h=Math.max(...t.data)-f||1,C=t.width-o.left-o.right,S=t.height-o.top-o.bottom;return t.data.map((y,_)=>{const A=o.left+_/(t.data.length-1)*C,R=o.top+S-(y-f)/h*S;return{x:A,y:R,value:y,index:_}})}),l=ee(()=>{const f=s.value;if(f.length<2)return"";let w=`M ${f[0].x} ${f[0].y}`;for(let h=0;h<f.length-1;h++){const C=f[h],S=f[h+1],y=(C.x+S.x)/2;w+=` C ${y} ${C.y}, ${y} ${S.y}, ${S.x} ${S.y}`}return w}),a=ee(()=>{const f=s.value;if(f.length<2)return"";const w=l.value,h=f[f.length-1],C=f[0],S=t.height-o.bottom+4;return`${w} L ${h.x} ${S} L ${C.x} ${S} Z`}),c=E(null),p=E({x:0,y:0}),u=ee(()=>c.value===null?null:s.value[c.value]||null);function d(f){if(!t.interactive||s.value.length===0)return;const h=f.currentTarget.getBoundingClientRect(),C=f.clientX-h.left;let S=0,y=1/0;s.value.forEach((_,A)=>{const R=Math.abs(_.x-C);R<y&&(y=R,S=A)}),c.value=S,p.value={x:s.value[S].x,y:s.value[S].y}}function m(){c.value=null}return(f,w)=>(b(),g("div",{class:$(I(pe)("relative inline-flex flex-col select-none",t.class))},[(b(),g("svg",{width:t.width,height:t.height,class:"overflow-visible",onMousemove:d,onMouseleave:m},[i("defs",null,[i("linearGradient",{id:r.value,x1:"0",y1:"0",x2:"0",y2:"1"},[i("stop",{offset:"0%","stop-color":t.color,"stop-opacity":"0.35"},null,8,C1),i("stop",{offset:"100%","stop-color":t.color,"stop-opacity":"0.0"},null,8,S1)],8,_1)]),t.fill?(b(),g("path",{key:0,d:a.value,fill:`url(#${r.value})`,class:"transition-opacity duration-300"},null,8,I1)):J("",!0),i("path",{d:l.value,fill:"none",stroke:t.color,"stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round",class:"transition-all duration-300"},null,8,A1),u.value?(b(),g("line",{key:1,x1:u.value.x,y1:o.top,x2:u.value.x,y2:t.height-o.bottom,stroke:t.color,"stroke-width":"1","stroke-dasharray":"2 2","stroke-opacity":"0.6"},null,8,$1)):J("",!0),u.value?(b(),g("g",M1,[i("circle",{cx:u.value.x,cy:u.value.y,r:"5",class:"fill-white dark:fill-zinc-950 transition-all duration-150",stroke:t.color,"stroke-width":"2.5"},null,8,P1),i("circle",{cx:u.value.x,cy:u.value.y,r:"8",fill:t.color,"fill-opacity":"0.25"},null,8,T1)])):J("",!0)],40,z1)),u.value?(b(),g("div",{key:0,class:"pointer-events-none absolute -top-8 z-20 -translate-x-1/2 rounded-md border border-zinc-200/80 bg-white/95 px-2 py-0.5 font-mono text-xs font-bold text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:text-zinc-100 transition-all duration-75",style:he({left:`${u.value.x}px`})},P(t.formatValue?t.formatValue(u.value.value):u.value.value),5)):J("",!0)],2))}}),R1={key:0,class:"mr-0.5 text-[0.85em] font-medium opacity-80"},E1={key:1,class:"ml-0.5 text-[0.85em] font-medium opacity-80"},Tc=se({__name:"AnimatedCounter",props:{value:{},duration:{default:1e3},decimals:{default:0},prefix:{default:""},suffix:{default:""},formatThousands:{type:Boolean,default:!0},trendColor:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=E(t.value),r=E("neutral");let o=null;function s(c){return c===1?1:1-Math.pow(2,-10*c)}function l(c,p){if(c===p){n.value=p;return}t.trendColor&&(r.value=p>c?"up":"down",o&&clearTimeout(o),o=setTimeout(()=>{r.value="neutral"},1500));const u=performance.now(),d=t.duration;function m(f){const w=f-u,h=Math.min(w/d,1),C=s(h);n.value=c+(p-c)*C,h<1?requestAnimationFrame(m):n.value=p}requestAnimationFrame(m)}ht(()=>t.value,(c,p)=>{l(p??0,c)}),et(()=>{l(0,t.value)});const a=ee(()=>{const c=n.value.toFixed(t.decimals);if(!t.formatThousands)return c;const p=c.split(".");return p[0]=p[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),p.join(".")});return(c,p)=>(b(),g("span",{class:$(I(pe)("inline-flex items-baseline font-mono font-bold tracking-tight transition-colors duration-500",t.trendColor&&r.value==="up"&&"text-emerald-500 dark:text-emerald-400",t.trendColor&&r.value==="down"&&"text-rose-500 dark:text-rose-400",t.class))},[t.prefix?(b(),g("span",R1,P(t.prefix),1)):J("",!0),i("span",null,P(a.value),1),t.suffix?(b(),g("span",E1,P(t.suffix),1)):J("",!0)],2))}}),F1=["width","height"],L1=["id"],O1=["stop-color"],V1=["d","stroke-width"],D1=["d","stroke","stroke-width","stroke-dasharray","stroke-dashoffset"],j1=["cx","cy","r"],B1={class:"absolute inset-0 flex flex-col items-center justify-center pt-3 text-center"},N1={class:"text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase"},H1={class:"flex items-baseline mt-0.5"},G1={class:"font-mono text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white"},U1={class:"ml-0.5 text-xs font-mono text-zinc-400 font-bold"},Yo=150,ha=390,Ko=se({__name:"RadialGauge",props:{value:{},size:{default:180},strokeWidth:{default:12},label:{default:""},unit:{default:"%"},min:{default:0},max:{default:100},thresholds:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=Bn(),r=ee(()=>`gauge-grad-${n}`),o=ee(()=>t.size/2),s=ee(()=>o.value-t.strokeWidth-6),l=ha-Yo;function a(h,C,S,y){const _=(y-90)*Math.PI/180;return{x:h+S*Math.cos(_),y:C+S*Math.sin(_)}}function c(h,C,S,y,_){const A=a(h,C,S,_),R=a(h,C,S,y);return`M ${A.x} ${A.y} A ${S} ${S} 0 1 0 ${R.x} ${R.y}`}const p=ee(()=>c(o.value,o.value,s.value,Yo,ha)),u=ee(()=>l/360*2*Math.PI*s.value),d=ee(()=>(Math.min(Math.max(t.value,t.min),t.max)-t.min)/(t.max-t.min)),m=ee(()=>u.value-d.value*u.value),f=ee(()=>{if(!t.thresholds)return{stroke:"#3b82f6",text:"text-blue-500"};const h=d.value*100;return h>=90?{stroke:"#f43f5e",text:"text-rose-500"}:h>=75?{stroke:"#f59e0b",text:"text-amber-500"}:{stroke:"#10b981",text:"text-emerald-500"}}),w=ee(()=>{const h=Yo+d.value*l;return a(o.value,o.value,s.value,h)});return(h,C)=>(b(),g("div",{class:$(I(pe)("relative inline-flex flex-col items-center select-none",t.class))},[i("div",{class:"relative",style:he({width:`${t.size}px`,height:`${t.size*.85}px`})},[(b(),g("svg",{width:t.size,height:t.size,class:"overflow-visible"},[i("defs",null,[i("linearGradient",{id:r.value,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[C[0]||(C[0]=i("stop",{offset:"0%","stop-color":"#3b82f6"},null,-1)),C[1]||(C[1]=i("stop",{offset:"50%","stop-color":"#8b5cf6"},null,-1)),i("stop",{offset:"100%","stop-color":f.value.stroke},null,8,O1)],8,L1)]),i("path",{d:p.value,fill:"none",stroke:"currentColor","stroke-width":t.strokeWidth,"stroke-linecap":"round",class:"text-zinc-200/80 dark:text-zinc-800"},null,8,V1),i("path",{d:p.value,fill:"none",stroke:`url(#${r.value})`,"stroke-width":t.strokeWidth,"stroke-linecap":"round","stroke-dasharray":u.value,"stroke-dashoffset":m.value,class:"transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"},null,8,D1),d.value>.02?(b(),g("circle",{key:0,cx:w.value.x,cy:w.value.y,r:t.strokeWidth/2-1,fill:"white",class:"shadow-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"},null,8,j1)):J("",!0)],8,F1)),i("div",B1,[i("span",N1,P(t.label),1),i("div",H1,[i("span",G1,P(Math.round(t.value)),1),i("span",U1,P(t.unit),1)])])],4)],2))}}),q1={class:"relative flex items-center justify-between"},W1=["onClick"],X1={key:1},Y1={class:"mt-2.5 text-center"},K1={key:0,class:"text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5 line-clamp-1 max-w-[100px]"},Z1=se({__name:"ProgressSteps",props:{steps:{},currentStep:{default:1},clickable:{type:Boolean,default:!0},class:{}},emits:["update:currentStep","change"],setup(e,{emit:t}){const n=e,r=t;function o(l){n.clickable&&(r("update:currentStep",l),r("change",l))}const s=ee(()=>n.steps.length<=1?100:(n.currentStep-1)/(n.steps.length-1)*100);return(l,a)=>(b(),g("div",{class:$(I(pe)("w-full select-none",n.class))},[i("div",q1,[a[0]||(a[0]=i("div",{class:"absolute left-6 right-6 top-5 -translate-y-1/2 h-0.5 bg-zinc-200 dark:bg-zinc-800 pointer-events-none"},null,-1)),i("div",{class:"absolute left-6 top-5 -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none",style:he({width:`calc(${s.value}% * ((100% - 48px) / 100))`})},null,4),(b(!0),g(ie,null,ke(n.steps,(c,p)=>(b(),g("div",{key:p,class:"relative z-10 flex flex-col items-center group cursor-pointer",onClick:u=>o(p+1)},[i("button",{type:"button",class:$(["flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] outline-none focus:outline-none ring-0",p+1<n.currentStep?"border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-500/20":p+1===n.currentStep?"border-blue-600 bg-white dark:bg-zinc-950 text-blue-600 dark:text-blue-400 ring-4 ring-blue-500/15 scale-110 shadow-lg shadow-blue-500/20":"border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900 text-zinc-400",n.clickable&&"hover:scale-105 active:scale-95"])},[p+1<n.currentStep?(b(),me(I(St),{key:0,class:"h-4 w-4 animate-scale-in"})):(b(),g("span",X1,P(p+1),1))],2),i("div",Y1,[i("div",{class:$(["text-xs font-bold transition-colors duration-200",p+1<=n.currentStep?"text-zinc-900 dark:text-white":"text-zinc-400 dark:text-zinc-500"])},P(c.title),3),c.description?(b(),g("div",K1,P(c.description),1)):J("",!0)])],8,W1))),128))])],2))}}),J1=Ge(Z1,[["__scopeId","data-v-d1e278b7"]]),Q1={class:"min-w-[640px]"},ey={class:"grid grid-cols-4 gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800"},ty={key:0,class:"absolute -top-3 right-4 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-md shadow-blue-500/20"},ny={class:"text-base font-bold text-zinc-900 dark:text-white"},ry={class:"mt-2 flex items-baseline"},oy={class:"font-mono text-2xl font-extrabold text-zinc-900 dark:text-white"},sy={key:0,class:"ml-1 text-xs text-zinc-400"},iy=["onClick"],ay={class:"divide-y divide-zinc-100 dark:divide-zinc-800/60"},ly={class:"px-2 text-xs font-medium text-zinc-700 dark:text-zinc-300"},cy={key:0,class:"flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"},dy={key:1,class:"flex h-6 w-6 items-center justify-center text-zinc-300 dark:text-zinc-600"},uy={key:2,class:"font-mono text-xs font-semibold text-zinc-800 dark:text-zinc-200"},py=se({__name:"ComparisonMatrix",props:{plans:{},features:{},class:{}},emits:["selectPlan"],setup(e,{emit:t}){const n=e,r=t;return(o,s)=>(b(),g("div",{class:$(I(pe)("w-full overflow-x-auto select-none",n.class))},[i("div",Q1,[i("div",ey,[s[0]||(s[0]=i("div",{class:"flex flex-col justify-end p-2"},[i("span",{class:"text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider"}," 方案特性对比 "),i("h3",{class:"mt-1 text-lg font-bold text-zinc-900 dark:text-white"}," 选择适合你的动效套件 ")],-1)),(b(!0),g(ie,null,ke(n.plans,l=>(b(),g("div",{key:l.id,class:$(["relative flex flex-col justify-between rounded-2xl p-5 transition-all duration-300",l.popular?"border-2 border-blue-600 bg-blue-50/50 dark:border-blue-500 dark:bg-blue-950/20 shadow-xl shadow-blue-500/10":"border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"])},[l.badge?(b(),g("div",ty,P(l.badge),1)):J("",!0),i("div",null,[i("h4",ny,P(l.name),1),i("div",ry,[i("span",oy,P(l.price),1),l.period?(b(),g("span",sy," / "+P(l.period),1)):J("",!0)])]),i("button",{type:"button",onClick:a=>r("selectPlan",l.id),class:$(["mt-4 w-full rounded-xl py-2 text-xs font-bold transition-all duration-200 cursor-pointer outline-none focus:outline-none ring-0",l.popular?"bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]":"border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"])},P(l.ctaText||"立即选择"),11,iy)],2))),128))]),i("div",ay,[(b(!0),g(ie,null,ke(n.features,(l,a)=>(b(),g("div",{key:a,class:"grid grid-cols-4 gap-4 py-3.5 items-center hover:bg-zinc-50/80 dark:hover:bg-zinc-900/40 rounded-xl transition-colors"},[i("div",ly,P(l.name),1),(b(!0),g(ie,null,ke(n.plans,c=>(b(),g("div",{key:c.id,class:"flex items-center justify-center text-center"},[l.values[c.id]===!0?(b(),g("div",cy,[k(I(St),{class:"h-3.5 w-3.5 stroke-[3]"})])):l.values[c.id]===!1?(b(),g("div",dy,[k(I(ql),{class:"h-3.5 w-3.5 stroke-[2]"})])):(b(),g("span",uy,P(l.values[c.id]),1))]))),128))]))),128))])])],2))}}),fy={class:"flex items-center justify-between"},my={class:"text-xs font-semibold text-zinc-500 dark:text-zinc-400"},by={key:0,class:"flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 transition-colors group-hover:text-blue-500"},gy={class:"mt-3 flex items-end justify-between gap-4"},hy={class:"text-2xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-3xl"},xy={key:0,class:"mt-2 flex items-center gap-1.5"},vy={class:"text-[11px] text-zinc-400"},yy={key:0,class:"shrink-0 -mb-1"},xa=se({__name:"StatCard",props:{title:{},value:{},prefix:{},suffix:{},decimals:{default:0},change:{},changePeriod:{default:"较上周期"},trendData:{},color:{default:"#3b82f6"},icon:{},class:{}},setup(e){const t=e,n=ee(()=>t.change===void 0?"none":t.change>0?"up":t.change<0?"down":"flat");return(r,o)=>(b(),g("div",{class:$(I(pe)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-950",t.class))},[i("div",fy,[i("span",my,P(t.title),1),t.icon?(b(),g("div",by,[(b(),me(tt(t.icon),{class:"h-4 w-4"}))])):J("",!0)]),i("div",gy,[i("div",null,[i("div",hy,[k(Tc,{value:t.value,decimals:t.decimals,prefix:t.prefix,suffix:t.suffix,duration:1200},null,8,["value","decimals","prefix","suffix"])]),t.change!==void 0?(b(),g("div",xy,[i("span",{class:$(["inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold font-mono",n.value==="up"&&"bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",n.value==="down"&&"bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",n.value==="flat"&&"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])},[n.value==="up"?(b(),me(I(Lp),{key:0,class:"h-3 w-3"})):n.value==="down"?(b(),me(I(Fp),{key:1,class:"h-3 w-3"})):(b(),me(I(ql),{key:2,class:"h-3 w-3"})),i("span",null,P(t.change>0?`+${t.change}`:t.change)+"%",1)],2),i("span",vy,P(t.changePeriod),1)])):J("",!0)]),t.trendData&&t.trendData.length>0?(b(),g("div",yy,[k(ks,{data:t.trendData,width:120,height:44,color:t.color,fill:!0,interactive:!1},null,8,["data","color"])])):J("",!0)])],2))}}),ky={class:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"},wy={class:"flex flex-col md:flex-row gap-8"},zy={class:"w-full md:w-64 shrink-0"},_y={class:"sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-xs backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70"},Cy={class:"mb-3 px-2 flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider"},Sy={class:"rounded bg-blue-100 dark:bg-blue-950/80 px-1.5 py-0.2 text-[10px] text-blue-600 dark:text-blue-400 font-bold"},Iy={class:"space-y-4"},Ay={class:"flex items-center justify-between px-2 py-1 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"},$y={class:"flex items-center gap-1.5"},My={class:"text-zinc-800 dark:text-zinc-200 font-bold"},Py={class:"rounded bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.2 text-[9px] font-mono text-zinc-500 font-bold"},Ty={class:"space-y-0.5"},Ry={class:"truncate"},Ey={class:"mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 px-2"},Fy={class:"flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100"},Ly={class:"min-w-0 flex-1"},Oy={class:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white mb-3 shadow-md shadow-blue-500/20"},Vy={key:1,class:"w-full max-w-2xl"},Dy={class:"flex h-full flex-col items-center justify-center p-6 text-center"},jy={key:5,class:"flex flex-col items-center gap-6 py-8"},By={class:"text-center"},Ny={class:"text-center mt-2"},Hy={key:6,class:"flex flex-wrap items-center justify-center gap-4 py-8"},Gy={class:"relative z-10 flex items-center justify-between"},Uy={class:"relative z-10 flex flex-col items-center gap-3"},qy={class:"flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30"},Wy={key:10,class:"grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-3xl py-6"},Xy={class:"inline-flex items-baseline justify-center text-sky-500 dark:text-sky-400"},Yy={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},Ky={class:"inline-flex items-baseline justify-center text-indigo-500 dark:text-indigo-400"},Zy={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},Jy={class:"inline-flex items-baseline justify-center text-emerald-500 dark:text-emerald-400"},Qy={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},ek={key:12,class:"w-full"},tk={class:"relative z-10 text-center"},nk={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400 mb-3"},rk={class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/30 text-white"},ok={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-sky-500"},sk={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-emerald-500"},ik={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-indigo-500"},ak={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-amber-500"},lk={class:"w-full max-w-xl h-72"},ck={class:"flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white/80 p-1 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 shadow-xs"},dk=["onClick"],uk={class:"w-full max-w-xl"},pk={class:"w-full max-w-xl"},fk={class:"w-full max-w-xl"},mk={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-4 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},bk={class:"mt-1 text-sm font-bold text-blue-600 dark:text-blue-400 font-mono"},gk={class:"flex flex-wrap items-center justify-center gap-4"},hk={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},xk={key:0,class:"text-xs text-zinc-400 italic"},vk={key:1,class:"space-y-1"},yk={class:"flex flex-wrap items-center justify-center gap-4"},kk={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},wk={key:0,class:"text-xs text-zinc-400 italic"},zk={key:1,class:"space-y-1"},_k={class:"flex flex-wrap items-center justify-center gap-8"},Ck={class:"flex flex-col items-center gap-2"},Sk={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Ik={class:"text-xs font-mono text-zinc-500 font-bold"},Ak={class:"flex flex-col items-center gap-2"},$k={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Mk={class:"text-xs font-mono text-zinc-500 font-bold"},Pk={class:"flex flex-col items-center gap-2"},Tk={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Rk={class:"text-xs font-mono text-zinc-500 font-bold"},Ek={class:"flex flex-wrap items-center justify-center gap-3"},Fk={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2.5 text-xs font-mono text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Lk={class:"font-bold text-blue-600 dark:text-blue-400"},Ok={class:"flex flex-wrap items-center justify-center gap-6"},Vk={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},Dk={class:"text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold"},jk={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Bk={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Nk={class:"flex flex-wrap items-center justify-center gap-4"},Hk={class:"flex items-center justify-center p-4"},Gk={class:"w-full max-w-sm"},Uk={class:"w-full max-w-md"},qk={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Wk={class:"font-bold text-blue-600 dark:text-blue-400"},Xk={class:"w-full max-w-sm"},Yk={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Kk={class:"font-bold text-blue-600 dark:text-blue-400"},Zk={class:"font-bold text-zinc-900 dark:text-white"},Jk={class:"w-full max-w-md"},Qk={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},ew={class:"font-bold text-blue-600 dark:text-blue-400"},tw={class:"w-full max-w-lg"},nw={class:"flex flex-col items-center gap-4"},rw={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},ow={class:"font-bold text-blue-600 dark:text-blue-400"},sw={class:"w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},iw={class:"w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},aw={class:"text-center"},lw={class:"mt-2 text-xs font-mono text-blue-600 dark:text-blue-400"},cw={class:"absolute bottom-8 right-10 z-20"},dw={class:"w-full flex justify-center"},uw={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},pw={class:"font-bold text-blue-600 dark:text-blue-400"},fw={class:"w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-center gap-4"},mw={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},bw={class:"font-bold text-blue-600 dark:text-blue-400"},gw={class:"flex items-center gap-8"},hw={class:"flex items-center gap-3"},xw={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},vw={class:"font-bold text-blue-600 dark:text-blue-400"},yw={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},kw={class:"flex items-start gap-3.5"},ww={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400"},zw={class:"flex items-start gap-3.5"},_w={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400"},Cw={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl relative z-10"},Sw={class:"flex items-start gap-3.5"},Iw={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/40 text-blue-600 dark:bg-white/10 dark:text-blue-400 shadow-xs"},Aw={class:"flex items-start gap-3.5"},$w={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/40 text-purple-600 dark:bg-white/10 dark:text-purple-400 shadow-xs"},Mw={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},Pw={class:"flex items-start gap-3.5"},Tw={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400"},Rw={class:"flex items-start gap-3.5"},Ew={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400"},Fw={class:"w-full max-w-sm flex justify-center"},Lw={class:"flex flex-col items-center text-center p-2 [transform-style:preserve-3d]"},Ow={class:"flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 [transform:translateZ(40px)]"},Vw={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Dw={class:"font-bold text-blue-600 dark:text-blue-400"},jw={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},Bw={class:"flex items-start gap-3.5"},Nw={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400"},Hw={class:"flex items-start gap-3.5"},Gw={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"},Uw={class:"flex flex-wrap items-center justify-center gap-8"},qw={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-start gap-3"},Ww={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-start gap-3"},Xw={class:"flex flex-col items-center gap-3"},Yw={class:"text-4xl sm:text-5xl font-black"},Kw={class:"flex items-center gap-3"},Zw={class:"flex flex-wrap items-center justify-center gap-10"},Jw={class:"flex items-center gap-3"},Qw={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},e2={class:"font-bold text-blue-600 dark:text-blue-400"},t2={class:"w-full max-w-2xl rounded-2xl border border-zinc-200/80 bg-white/80 p-8 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},n2={class:"flex items-center gap-3"},r2=["disabled"],o2={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},s2={class:"font-bold text-blue-600 dark:text-blue-400"},i2=["disabled"],a2={class:"w-full max-w-3xl rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},l2={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},c2={class:"font-bold text-blue-600 dark:text-blue-400"},d2={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},u2=se({__name:"DocsView",setup(e){const t=E(null),n=E(null),r=E(null),o=E(null),s=df(),l=ee(()=>s.params.id||"border-beam"),a=ee(()=>on.find(Ne=>Ne.id===l.value)||on[0]);function c(Ne){switch(Ne){case"forms-inputs":return Mp;case"tactile-actions":return wn;case"ai-native":return Mn;case"interactive-nav":return Jn;case"space-3d":return ar;case"borders-cards":return Xt;case"kinetic-typography":return Re;default:return Re}}function p(Ne){return on.filter(v=>v.suiteId===Ne)}const u=["OpenAI","Anthropic","Google","NVIDIA","DeepSeek","Vercel"],d=[{id:"home",label:"首页概览",icon:Ul},{id:"explore",label:"模型广场",icon:Jn},{id:"agent",label:"AI 智能体",icon:Re},{id:"files",label:"知识库",icon:vp},{id:"notice",label:"消息通知",icon:mp},{id:"settings",label:"偏好设置",icon:Ap}],m=E("thinking"),f={thinking:"正在多模态解构视觉空间坐标与贝塞尔插值参数...",running:"并行编译并打包 Production Motion Primitives...",tool_call:"调用 Playwright 真实无头浏览器验证 60fps 动效性能...",success:"全套 28 项动效原子组件按 6 大主题套件落地完成！",error:"检测到底层渲染管道异常，正在启动自愈补偿重试..."},w=E(""),h=E(!1),C=E("deepseek-r1");function S(Ne){h.value=!0,setTimeout(()=>{h.value=!1,w.value=""},2200)}const y=E("preview"),_=[{id:"preview",label:"实时预览",icon:Re},{id:"code",label:"组件源码",icon:ir,badge:"SFC"},{id:"api",label:"API 文档",icon:Qn},{id:"suites",label:"主题矩阵",icon:Xt,badge:"6 大套件"}],A=E([]);function R(){A.value.unshift(`[${new Date().toLocaleTimeString()}] 触发长按蓄力物理确认：危险操作已执行！`),A.value.length>3&&A.value.pop()}const O=E([]);function N(){O.value.unshift(`[${new Date().toLocaleTimeString()}] 就地确认执行成功：数据库缓存集群已清空`),O.value.length>3&&O.value.pop()}const V=E(!1),D=E(!1),oe=E(!1),be=E(!0),U=E(!1),ye=E(42),Fe=E("尚未触发操作");function je(){Fe.value=`[${new Date().toLocaleTimeString()}] 执行主操作：生产环境立即发布完成！`}function ze(Ne){Fe.value=`[${new Date().toLocaleTimeString()}] 执行伴随动作：${Ne.label}`}const xe=E(480),fe=E(16),Oe=E(85),te=E("Aura$2026"),We=E(6800),Se=E("CNY"),ct=E("13800138000"),Be=E("CN"),Ie=E(["Vue 3.5","TailwindCSS","Motion UI","TypeScript"]),Ce=E("嗨 @Aura Assistant ，请审查关于全套动效原子组件库的重构方案！"),L=E("preview"),Q=[{id:"preview",label:"实时渲染",icon:Re},{id:"code",label:"SFC 源码",icon:ir,badge:"Vue"},{id:"docs",label:"API 文档",icon:Qn},{id:"disabled",label:"锁定",disabled:!0}],H=[{label:"智能云控制台"},{label:"亚太东北节点 (东京)"},{label:"Kubernetes 集群"},{label:"核心 Pod 拓扑"},{label:"Aura UI 动效服务"}],ae=E("未触发操作"),x=[{id:"bot",label:"呼起智能体 Agent",icon:Mn,color:"bg-purple-600",onClick:()=>{ae.value="已呼起 AI 智能体"}},{id:"sparkles",label:"生成动效代码",icon:Re,color:"bg-blue-600",onClick:()=>{ae.value="已生成动效代码"}},{id:"rocket",label:"全量编译部署",icon:Dr,color:"bg-emerald-600",onClick:()=>{ae.value="已执行全量编译部署"}}],z=[{id:"solutions",label:"解决方案",children:[{title:"AI Agent 交互引擎",desc:"模拟 Token 打字机与 R1 思考链路手风琴",icon:Mn,badge:"爆款"},{title:"全景 3D 纵深矩阵",desc:"同心轨道公转、极光天灯与赛博复古网格",icon:ar},{title:"流光卡片便当盒",desc:"无缝跑马流光边框与聚光灯 Bento 卡片",icon:Xt}]},{id:"developers",label:"开发者生态",children:[{title:"Zero-Config 单文件",desc:"代码即用，单文件内聚无需配置 tailwind",icon:ir},{title:"TypeScript 完备",desc:"全量 Props、事件与插槽类型安全",icon:Qn}]}],M=E("未选择"),T=E(3),F=E(72);function j(){F.value=(F.value+15)%105}const G=[{id:1,title:"物理动效原子引擎",description:"专为 Vue 3 构建的高性能单文件动效，60fps 满帧运行，零黑盒依赖。",tag:"Core",author:"Aura Team"},{id:2,title:"零配置单文件拷贝",description:"无黑盒依赖，复制即用，代码全由你掌控，极简可扩展。",tag:"Architecture",author:"Aura Architect"},{id:3,title:"全套对标 Arc UI",description:"包含 182 款组件与 109 款 Blocks 全套重构，设计规范一体化。",tag:"Ecosystem",author:"DeepMind"},{id:4,title:"高折射率物理质感",description:"亚克力磨砂、三维陀螺仪视差与全息反光遮罩，极致视觉体验。",tag:"Surfaces",author:"Aura UI"}],W=E("暂无划卡记录");function X(Ne,v){W.value=`已向 ${v==="left"?"← 左":"右 →"} 划走：${Ne.title}`}const B=E([14,22,18,32,28,45,40,58,62,70,68,88]),de=E(128450);function K(Ne){de.value=Math.max(0,de.value+Ne)}const le=E(68),ue=E(2),_e=[{title:"环境检测",description:"Node/pnpm 就绪"},{title:"原子组件",description:"SFC 零配置拷贝"},{title:"工程构建",description:"vue-tsc 0 报错"},{title:"华为云部署",description:"Nginx 80 端口"}],Le=[{id:"free",name:"社区开源版",price:"¥0",ctaText:"免费克隆"},{id:"pro",name:"独立专业版",price:"¥199",period:"终身",popular:!0,badge:"最畅销",ctaText:"立即解锁"},{id:"team",name:"企业旗舰版",price:"¥699",period:"终身",ctaText:"企业采购"}],Pe=[{name:"182 款动效原子组件 (Zero-Config SFC)",values:{free:"核心 52 款",pro:!0,team:!0}},{name:"109 款高阶业务应用 Blocks 组合",values:{free:!1,pro:!0,team:!0}},{name:"Figma 原生高保真设计规范源文件",values:{free:!1,pro:!0,team:!0}},{name:"企业级独立技术支持与华为云专属优化",values:{free:!1,pro:"邮件支持",team:"7×24h 专属"}}],Ue=E("未选择套餐"),Ke=[28,36,32,48,44,62,70,89];return(Ne,v)=>{const fn=zr("router-link");return b(),g("div",ky,[i("div",wy,[i("aside",zy,[i("div",_y,[i("div",Cy,[v[36]||(v[36]=i("span",null,"主题套件矩阵",-1)),i("span",Sy,P(I(fs).length)+" 大套件 · "+P(I(on).length)+" 组件 ",1)]),i("div",Iy,[(b(!0),g(ie,null,ke(I(fs),Z=>(b(),g("div",{key:Z.id,class:"space-y-1"},[i("div",Ay,[i("div",$y,[(b(),me(tt(c(Z.id)),{class:"h-3.5 w-3.5 text-blue-500"})),i("span",My,P(Z.name),1)]),i("span",Py,P(p(Z.id).length),1)]),i("nav",Ty,[(b(!0),g(ie,null,ke(p(Z.id),qe=>(b(),me(fn,{key:qe.id,to:`/docs/${qe.id}`,class:$(["flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium transition-colors",l.value===qe.id?"bg-blue-600 text-white font-semibold shadow-xs":"text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"])},{default:Y(()=>[i("span",Ry,P(qe.name),1),i("span",{class:$(["text-[9px] rounded px-1.5 py-0.2 shrink-0 ml-1",l.value===qe.id?"bg-blue-700/80 text-blue-100":"bg-zinc-100 dark:bg-zinc-900 text-zinc-400"])},P(qe.category),3)]),_:2},1032,["to","class"]))),128))])]))),128))]),i("div",Ey,[i("div",Fy,[k(I(Qn),{class:"h-3.5 w-3.5 text-blue-500"}),v[37]||(v[37]=i("span",null,"基础依赖安装",-1))]),v[38]||(v[38]=i("p",{class:"mt-1 text-[11px] text-zinc-400"},"组件依赖轻量样式与工具库：",-1)),v[39]||(v[39]=i("div",{class:"mt-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-300 break-all select-all"}," npm i @vueuse/core clsx tailwind-merge ",-1))])])]),i("main",Ly,[(b(),me(ug,{key:a.value.id,title:a.value.title,description:a.value.description,"component-code":a.value.componentCode,"usage-code":a.value.usageCode,"component-filename":a.value.componentFilename,"props-list":a.value.propsList},{default:Y(({isDark:Z})=>{var qe;return[a.value.id==="border-beam"?(b(),g("div",{key:0,class:$(["relative flex h-64 w-80 flex-col items-center justify-center rounded-2xl border p-6 shadow-md transition-colors duration-200",Z?"border-zinc-800 bg-zinc-900 text-zinc-100 shadow-black/40":"border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/50"])},[i("div",Oy,[k(I(Re),{class:"h-6 w-6"})]),i("h4",{class:$(["text-lg font-bold",Z?"text-white":"text-zinc-900"])}," Border Beam Demo ",2),i("p",{class:$(["mt-1 text-center text-xs",Z?"text-zinc-400":"text-zinc-500"])}," 流光平滑环绕圆角容器边缘 ",2),k(vs,{size:180,duration:8,"color-from":"#38bdf8","color-to":"#a855f7"})],2)):a.value.id==="bento-grid"?(b(),g("div",Vy,[k(Cc,{class:"auto-rows-[16rem]"},{default:Y(()=>[k(ut,{name:"AI 向量引擎",description:"毫秒级生成多模态视觉理解",cta:"了解详情",href:"#",class:$(Z?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900")},{icon:Y(()=>[k(I(Lo),{class:"h-5 w-5 text-blue-500"})]),_:1},8,["class"]),k(ut,{name:"全球边缘节点加速",description:"降低网络抖动，就近命中就近计算",class:$(["md:col-span-2",Z?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900"]),cta:"查看分布",href:"#"},{icon:Y(()=>[k(I(wn),{class:"h-5 w-5 text-amber-500"})]),_:1},8,["class"])]),_:2},1024)])):a.value.id==="interactive-particles"?(b(),g("div",{key:2,class:$(["relative h-[360px] w-full rounded-2xl border overflow-hidden transition-colors duration-200",Z?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[k(Ic,{quantity:60,"mouse-radius":120,"connect-lines":!0,color:Z?"255, 255, 255":"59, 130, 246"},{default:Y(()=>[i("div",Dy,[i("h3",{class:$(["text-2xl font-bold tracking-tight",Z?"text-white":"text-zinc-900"])}," 移动光标体验引力感应 ",2),i("p",{class:$(["mt-2 text-xs",Z?"text-zinc-400":"text-zinc-500"])}," Canvas 2D 60fps 满帧运行，动态引力排斥与光效连线 ",2)])]),_:2},1032,["color"])],2)):a.value.id==="retro-grid"?(b(),g("div",{key:3,class:$(["relative flex h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",Z?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[i("span",{class:$(["z-10 text-4xl font-extrabold tracking-tighter",Z?"text-white":"text-zinc-900"])}," Retro Synthwave Grid ",2),k(ys,{angle:65,"dark-line-color":"#334155","light-line-color":"#cbd5e1"})],2)):a.value.id==="dot-pattern"?(b(),g("div",{key:4,class:$(["relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border p-8 transition-colors duration-200",Z?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[i("p",{class:$(["z-10 text-xl font-bold",Z?"text-white":"text-zinc-900"])}," SVG 矢量波点底纹 (含发光聚光灯) ",2),k(Sc,{width:18,height:18,cr:1.2,glow:!0})],2)):a.value.id==="shiny-text"?(b(),g("div",jy,[i("div",{class:$(["rounded-full border px-5 py-2 text-xs font-medium shadow-sm transition-colors",Z?"border-zinc-800 bg-zinc-900/90 text-zinc-300":"border-zinc-200 bg-zinc-100 text-zinc-700"])},[v[40]||(v[40]=Ae(" ✨ ",-1)),k(dr,{text:"Aura UI v1.0 全新微光发布",duration:2.5})],2),i("div",By,[k(dr,{text:"Next-Gen AI Intelligence",class:"text-4xl sm:text-5xl font-black tracking-tight",duration:2.5}),i("p",{class:$(["mt-2 text-xs sm:text-sm",Z?"text-zinc-500":"text-zinc-400"])}," 持续流淌的宽幅金属微光，肉眼清晰可观赏，绝无突兀停滞 ",2)]),i("div",Ny,[k(dr,{text:"Cyberpunk Motion Primitives",variant:"cyber",class:"text-3xl sm:text-4xl font-extrabold tracking-tight",duration:3}),i("p",{class:$(["mt-1 text-xs",Z?"text-zinc-500":"text-zinc-400"])}," 赛博霓虹蓝紫粒子流光，高频荡漾 ",2)])])):a.value.id==="shimmer-button"?(b(),g("div",Hy,[k(cr,{"shimmer-color":"#38bdf8"},{default:Y(()=>[v[41]||(v[41]=i("span",null,"立即获取代码",-1)),k(I(sr),{class:"h-4 w-4"})]),_:1}),k(cr,{"shimmer-color":"#ec4899","shimmer-duration":"3.5s"},{default:Y(()=>[...v[42]||(v[42]=[i("span",null,"Pink Shimmer",-1)])]),_:1})])):a.value.id==="marquee"?(b(),g("div",{key:7,class:$(["relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border py-6 transition-colors duration-200",Z?"border-zinc-800 bg-black/60":"border-zinc-200 bg-zinc-50/80"])},[k(jr,{duration:20,"pause-on-hover":!0},{default:Y(()=>[(b(),g(ie,null,ke(u,q=>i("div",{key:q,class:$(["flex h-12 items-center justify-center rounded-xl border px-6 font-bold text-xs shadow-xs transition-colors duration-200",Z?"border-zinc-800 bg-zinc-900 text-zinc-200":"border-zinc-200 bg-white text-zinc-800"])},P(q),3)),64))]),_:2},1024),i("div",{class:$(["pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r",Z?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2),i("div",{class:$(["pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l",Z?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2)],2)):a.value.id==="meteors"?(b(),g("div",{key:8,class:$(["relative flex h-80 w-full max-w-lg flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-2xl transition-colors duration-200",Z?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-slate-900 text-white"])},[k(Ac,{number:30}),i("div",Gy,[v[43]||(v[43]=i("span",{class:"rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20"}," Meteor Shower ",-1)),k(I(Re),{class:"h-5 w-5 text-sky-400"})]),v[44]||(v[44]=i("div",{class:"relative z-10 space-y-2"},[i("h3",{class:"text-3xl font-black tracking-tight text-white"}," 赛博深空流星雨 "),i("p",{class:"text-xs text-zinc-400 leading-relaxed"}," 流星带有 50px 渐变光尾与随机延迟，全硬件加速流畅穿梭，卡片与 Hero 背景的氛围杀器。 ")],-1))],2)):a.value.id==="ripple"?(b(),g("div",{key:9,class:$(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",Z?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[k($c,{"main-circle-size":160,"num-circles":7}),i("div",Uy,[i("div",qy,[k(I(eo),{class:"h-7 w-7"})]),v[45]||(v[45]=i("div",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-mono text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300"}," AI 智能语音拾音中... ",-1))])],2)):a.value.id==="number-ticker"?(b(),g("div",Wy,[i("div",{class:$(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",Z?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[i("div",Xy,[i("span",Yy,[k(Br,{value:99.99,"decimal-places":2})]),v[46]||(v[46]=i("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"%",-1))]),v[47]||(v[47]=i("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"SLA 生产高可用性",-1))],2),i("div",{class:$(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",Z?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[i("div",Ky,[i("span",Zy,[k(Br,{value:1e7})]),v[48]||(v[48]=i("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"+",-1))]),v[49]||(v[49]=i("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"每日处理 Token 数量",-1))],2),i("div",{class:$(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",Z?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[i("div",Jy,[i("span",Qy,[k(Br,{value:12})]),v[50]||(v[50]=i("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"ms",-1))]),v[51]||(v[51]=i("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"端到端流式推理延迟",-1))],2)])):a.value.id==="animated-beam"?(b(),g("div",{key:11,class:$(["relative flex h-72 w-full max-w-xl items-center justify-between px-12 rounded-2xl border transition-colors duration-200",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"]),ref_key:"beamContainerRef",ref:t},[i("div",{ref_key:"beamUserRef",ref:n,class:$(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",Z?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[k(I(Zl),{class:"h-6 w-6 text-blue-500"})],2),i("div",{ref_key:"beamAiRef",ref:r,class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/40"},[k(I(Re),{class:"h-8 w-8"})],512),i("div",{ref_key:"beamDbRef",ref:o,class:$(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",Z?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[k(I(ps),{class:"h-6 w-6 text-indigo-500"})],2),k(no,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.4},null,8,["container-ref","from-ref","to-ref"]),k(no,{"container-ref":t.value,"from-ref":r.value,"to-ref":o.value,duration:2.4,delay:.6},null,8,["container-ref","from-ref","to-ref"])],2)):a.value.id==="lamp-effect"?(b(),g("div",ek,[k(Mc,{class:"min-h-[420px]"},{default:Y(()=>[...v[52]||(v[52]=[i("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-5xl font-black tracking-tight text-transparent"}," Next-Gen AI Platform ",-1),i("p",{class:"mt-3 max-w-md text-xs sm:text-sm text-slate-400"}," 双向极光天灯破晓而下，为旗舰级 AI 与 SaaS 官网赋予大模型发布会视觉。 ",-1)])]),_:1})])):a.value.id==="flickering-grid"?(b(),g("div",{key:13,class:$(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border p-6 transition-colors duration-200",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(Pc,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),i("div",tk,[i("div",nk,[k(I(us),{class:"h-3.5 w-3.5"}),v[53]||(v[53]=i("span",null,"Canvas 2D 智能矩阵",-1))]),i("h3",{class:$(["text-3xl font-black tracking-tight",Z?"text-white":"text-zinc-900"])}," 呼吸噪波微光网格 ",2),i("p",{class:$(["mt-2 text-xs font-mono",Z?"text-zinc-400":"text-zinc-500"])}," 微型粒子矩阵异步平滑呼吸闪烁，零 CPU 占用，极客感拉满 ",2)])],2)):a.value.id==="dock"?(b(),g("div",{key:14,class:$(["relative flex h-80 w-full items-end justify-center rounded-2xl border p-8 transition-colors duration-200",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[54]||(v[54]=i("div",{class:"absolute top-8 text-center"},[i("span",{class:"text-xs font-mono text-zinc-400"},"将鼠标在下方图标栏滑动，体验余弦高斯物理平滑放大与跟随 Tooltip")],-1)),k(bg,{items:d,"icon-size":44,"icon-magnification":68,"icon-distance":130})],2)):a.value.id==="orbit-logos"?(b(),g("div",{key:15,class:$(["relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",rk,[k(I(Re),{class:"h-8 w-8"})]),k(Er,{radius:75,duration:16},{default:Y(()=>[i("div",ok,[k(I(Lo),{class:"h-4.5 w-4.5"})])]),_:1}),k(Er,{radius:75,duration:16,delay:8},{default:Y(()=>[i("div",sk,[k(I(wn),{class:"h-4.5 w-4.5"})])]),_:1}),k(Er,{radius:135,duration:24,reverse:!0},{default:Y(()=>[i("div",ik,[k(I(ar),{class:"h-5 w-5"})])]),_:1}),k(Er,{radius:135,duration:24,delay:12,reverse:!0},{default:Y(()=>[i("div",ak,[k(I(ps),{class:"h-5 w-5"})])]),_:1})],2)):a.value.id==="image-compare"?(b(),g("div",{key:16,class:$(["flex flex-col items-center justify-center w-full p-4 rounded-2xl border transition-colors duration-200",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",lk,[k(Sg,{"before-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=70&sat=-100","after-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=90","before-label":"原始黑白 (Raw)","after-label":"AI 智能全彩修复 (4K HDR)","initial-position":50,class:"h-full w-full shadow-2xl"})]),v[55]||(v[55]=i("p",{class:"mt-3 text-xs font-mono text-zinc-400"}," 按住中央手柄左右拖拽，体验基于 clip-path 视口裁切的双图前后对比 ",-1))],2)):a.value.id==="agent-status"?(b(),g("div",{key:17,class:$(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",ck,[(b(),g(ie,null,ke(["thinking","running","tool_call","success","error"],q=>i("button",{key:q,onClick:mn=>m.value=q,class:$(["rounded-lg px-3 py-1.5 text-xs font-semibold transition-all capitalize",m.value===q?"bg-blue-600 text-white shadow-xs":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},P(q),11,dk)),64))]),k(Gg,{status:m.value,"agent-name":"DeepSeek R1 / Aura Reasoning","current-task":f[m.value]},null,8,["status","current-task"]),v[56]||(v[56]=i("p",{class:"text-xs font-mono text-zinc-400"}," 点击上方状态快速体验脉冲光环与徽标切换；点击卡片任意位置展开执行轨迹清单 ",-1))],2)):a.value.id==="typewriter-terminal"?(b(),g("div",{key:18,class:$(["flex flex-col items-center justify-center w-full p-6 rounded-2xl border transition-colors duration-200",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",uk,[k(sh,{title:"zsh - aura-orchestrator:~ (80x24)","typing-speed":32,loop:!0})])],2)):a.value.id==="prompt-input"?(b(),g("div",{key:19,class:$(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",pk,[k(vh,{modelValue:w.value,"onUpdate:modelValue":v[0]||(v[0]=q=>w.value=q),loading:h.value,"selected-model":C.value,"onUpdate:selectedModel":v[1]||(v[1]=q=>C.value=q),placeholder:"向 Aura AI 提问、生成高阶动效代码，或输入 / 触发 Agent...",onSubmit:S,onStop:v[2]||(v[2]=q=>h.value=!1)},null,8,["modelValue","loading","selected-model"])]),v[57]||(v[57]=i("p",{class:"text-xs font-mono text-zinc-400"}," 点击输入框体验聚焦顶部流光与高亮光晕，支持 Enter 发送、模拟 2.2s 思考生成态 ",-1))],2)):a.value.id==="thought-accordion"?(b(),g("div",{key:20,class:$(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",fk,[k($h,{duration:"思考用时 8.2 秒",status:"complete","default-open":!0})]),v[58]||(v[58]=i("p",{class:"text-xs font-mono text-zinc-400"}," 对标 DeepSeek R1 / o1 思考链折叠机制，点击标题栏手风琴折叠收起，支持一键复制推演链路 ",-1))],2)):a.value.id==="fluid-tabs"?(b(),g("div",{key:21,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(Ph,{modelValue:y.value,"onUpdate:modelValue":v[3]||(v[3]=q=>y.value=q),tabs:_},null,8,["modelValue"]),i("div",mk,[v[59]||(v[59]=i("div",{class:"text-xs font-mono text-zinc-500 dark:text-zinc-400"},"当前激活流体 Tab 项：",-1)),i("div",bk,P(y.value),1)]),v[60]||(v[60]=i("p",{class:"text-xs font-mono text-zinc-400"}," 鼠标在 Tab 间移动感受 Ghost 悬停幽灵胶囊；点击体验物理 Spring 平滑吸附 ",-1))],2)):a.value.id==="hold-to-confirm"?(b(),g("div",{key:22,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",gk,[k(Go,{variant:"danger",label:"长按以销毁生产集群",holdingLabel:"危险！保持按住不放...",confirmedLabel:"集群销毁指令已执行！",duration:1200,onConfirm:R}),k(Go,{variant:"warning",label:"长按重置 API 密钥",holdingLabel:"按住 1 秒重置...",confirmedLabel:"密钥已重置完成！",duration:1e3,onConfirm:R}),k(Go,{variant:"primary",label:"长按以极速同步",holdingLabel:"保持以连接网关...",confirmedLabel:"多云同步完成！",duration:800,onConfirm:R})]),i("div",hk,[v[61]||(v[61]=i("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 操作监听回执 ",-1)),A.value.length===0?(b(),g("div",xk," 按住上方任一按钮体验蓄力进度条，松手即取消，蓄满 100% 触发回执 ")):(b(),g("div",vk,[(b(!0),g(ie,null,ke(A.value,(q,mn)=>(b(),g("div",{key:mn,class:"text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold"},P(q),1))),128))]))]),v[62]||(v[62]=i("p",{class:"text-xs font-mono text-zinc-400"}," 具备 requestAnimationFrame 60fps 动态插值填充、松手平滑阻尼回退与成功态自动形变复位 ",-1))],2)):a.value.id==="confirm-morph"?(b(),g("div",{key:23,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",yk,[k(Uo,{label:"彻底清空 Redis 缓存","confirm-text":"确认清空","cancel-text":"取消",variant:"danger",onConfirm:N}),k(Uo,{label:"回滚至昨日版本","confirm-text":"确认回滚","cancel-text":"再想想",variant:"warning",onConfirm:N}),k(Uo,{label:"切换主从节点","confirm-text":"立即切换","cancel-text":"取消",variant:"primary",onConfirm:N})]),i("div",kk,[v[63]||(v[63]=i("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 就地形变二次确认回执 ",-1)),O.value.length===0?(b(),g("div",wk," 点击上方按钮原地分裂为确认和取消操作，零弹窗干扰心流 ")):(b(),g("div",zk,[(b(!0),g(ie,null,ke(O.value,(q,mn)=>(b(),g("div",{key:mn,class:"text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold"},P(q),1))),128))]))]),v[64]||(v[64]=i("p",{class:"text-xs font-mono text-zinc-400"}," 内联原地形变布局（Inline FLIP Transition），无需全局遮罩即可实现安全防误触 ",-1))],2)):a.value.id==="icon-morph"?(b(),g("div",{key:24,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",_k,[i("div",Ck,[i("div",Sk,[k(qo,{modelValue:V.value,"onUpdate:modelValue":v[4]||(v[4]=q=>V.value=q),mode:"menu-close",size:28},null,8,["modelValue"])]),i("span",Ik," Menu ↔ Close: "+P(V.value?"关闭":"展开"),1)]),i("div",Ak,[i("div",$k,[k(qo,{modelValue:D.value,"onUpdate:modelValue":v[5]||(v[5]=q=>D.value=q),mode:"play-pause",size:28},null,8,["modelValue"])]),i("span",Mk," Play ↔ Pause: "+P(D.value?"播放中":"暂停中"),1)]),i("div",Pk,[i("div",Tk,[k(qo,{modelValue:oe.value,"onUpdate:modelValue":v[6]||(v[6]=q=>oe.value=q),mode:"plus-minus",size:28},null,8,["modelValue"])]),i("span",Rk," Plus ↔ Minus: "+P(oe.value?"已展开":"折叠"),1)])]),v[65]||(v[65]=i("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG 矢量几何坐标连续形变，硬件加速 60fps，零卡顿零抖动 ",-1))],2)):a.value.id==="action-button"?(b(),g("div",{key:25,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Ek,[k(Yn,{icon:I(_p),active:be.value,tooltip:"钉选在首屏导航",onClick:v[7]||(v[7]=q=>be.value=!be.value)},null,8,["icon","active"]),k(Yn,{label:"生成动效代码",icon:I(Re),badge:"AI",tooltip:"一键生成 Vue 动效原子代码",onClick:v[8]||(v[8]=q=>ye.value++)},null,8,["icon"]),k(Yn,{icon:I(bp),active:U.value,tooltip:"收藏至组件集",onClick:v[9]||(v[9]=q=>U.value=!U.value)},null,8,["icon","active"]),k(Yn,{label:"大规格按钮",size:"lg",icon:I(Ei),tooltip:"上传打包产物"},null,8,["icon"]),k(Yn,{label:"禁用按钮",size:"sm",disabled:!0,tooltip:"当前权限不足"})]),i("div",Fk,[v[66]||(v[66]=Ae(" AI 生成点击计数：",-1)),i("span",Lk,P(ye.value),1),v[67]||(v[67]=Ae(" 次 ",-1))]),v[68]||(v[68]=i("p",{class:"text-xs font-mono text-zinc-400"}," 配备精准物理弹簧缩放阻尼（active:scale-90）与微拟态悬停反馈 ",-1))],2)):a.value.id==="split-button"?(b(),g("div",{key:26,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Ok,[k(ca,{label:"立即发布到生产环境",icon:I(Dr),variant:"primary",onPrimaryClick:je,onSelect:ze},null,8,["icon"]),k(ca,{label:"导出代码包",icon:I(Ei),variant:"secondary",items:[{id:"zip",label:"下载 ZIP 压缩包",description:"包含全部 SFC 组件与 CSS 变量"},{id:"git",label:"推送到 GitHub PR",description:"自动分支并创建协同审查"},{id:"npm",label:"发布至私有 NPM",description:"生成统一 Package 包"}],onPrimaryClick:je,onSelect:ze},null,8,["icon"])]),i("div",Vk,[v[69]||(v[69]=i("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1"}," 分体按钮操作回执 ",-1)),i("div",Dk,P(Fe.value),1)]),v[70]||(v[70]=i("p",{class:"text-xs font-mono text-zinc-400"}," 主操作与下拉伴随操作一体化，物理发丝分割线，自适应点击区域与弹簧菜单 ",-1))],2)):a.value.id==="reactions"?(b(),g("div",{key:27,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",jk,[k(da)]),i("div",Bk,[v[71]||(v[71]=i("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3"}," 自定义反应项展示： ",-1)),k(da,{items:[{id:"vue",emoji:"💚",count:1024,active:!0},{id:"speed",emoji:"⚡",count:512,active:!1},{id:"magic",emoji:"✨",count:888,active:!0},{id:"100",emoji:"💯",count:99,active:!1}]})]),v[72]||(v[72]=i("p",{class:"text-xs font-mono text-zinc-400"}," 点击任一表情体验 Spring 弹簧弹性放大与实时翻滚计数，支持添加自定义表情 ",-1))],2)):a.value.id==="scrub-input"?(b(),g("div",{key:28,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Nk,[k(Wo,{modelValue:xe.value,"onUpdate:modelValue":v[10]||(v[10]=q=>xe.value=q),label:"宽度 (W)",min:120,max:640,suffix:"px"},null,8,["modelValue"]),k(Wo,{modelValue:fe.value,"onUpdate:modelValue":v[11]||(v[11]=q=>fe.value=q),label:"圆角 (R)",min:0,max:48,suffix:"px"},null,8,["modelValue"]),k(Wo,{modelValue:Oe.value,"onUpdate:modelValue":v[12]||(v[12]=q=>Oe.value=q),label:"不透明度 (A)",min:10,max:100,suffix:"%"},null,8,["modelValue"])]),i("div",Hk,[i("div",{class:"flex h-24 items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-mono text-xs font-bold shadow-lg transition-all duration-75",style:he({width:`${xe.value/2}px`,borderRadius:`${fe.value}px`,opacity:Oe.value/100})}," 实时微调形态: "+P(Math.round(xe.value/2))+" × 96px ",5)]),v[73]||(v[73]=i("p",{class:"text-xs font-mono text-zinc-400"}," 按住 Label 左右横向拖动（按住 Shift 加速 10x，Alt 微调 0.1x），双击数值切换精准键盘输入 ",-1))],2)):a.value.id==="password-strength"?(b(),g("div",{key:29,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Gk,[k(fx,{modelValue:te.value,"onUpdate:modelValue":v[13]||(v[13]=q=>te.value=q)},null,8,["modelValue"])]),v[74]||(v[74]=i("p",{class:"text-xs font-mono text-zinc-400"}," 包含大写/小写/数字/特殊符号/长度 5 维动态校验，进度条平滑渐变与明暗文无缝切换 ",-1))],2)):a.value.id==="money-input"?(b(),g("div",{key:30,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Uk,[k(wx,{modelValue:We.value,"onUpdate:modelValue":v[14]||(v[14]=q=>We.value=q),currency:Se.value,"onUpdate:currency":v[15]||(v[15]=q=>Se.value=q)},null,8,["modelValue","currency"])]),i("div",qk,[v[75]||(v[75]=Ae(" 底层双向绑定数据：",-1)),i("span",Wk,P(Se.value)+" "+P(We.value),1)]),v[76]||(v[76]=i("p",{class:"text-xs font-mono text-zinc-400"}," 金额过长时字号动态自适应缩放（text-4xl → text-xl），支持千分位格式化与一键药丸快捷填充 ",-1))],2)):a.value.id==="phone-input"?(b(),g("div",{key:31,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Xk,[k(Fx,{modelValue:ct.value,"onUpdate:modelValue":v[16]||(v[16]=q=>ct.value=q),"country-code":Be.value,"onUpdate:countryCode":v[17]||(v[17]=q=>Be.value=q)},null,8,["modelValue","country-code"])]),i("div",Yk,[v[77]||(v[77]=Ae(" 选中地区：",-1)),i("span",Kk,P(Be.value),1),v[78]||(v[78]=Ae(" · 输入号码：",-1)),i("span",Zk,P(ct.value||"(未输入)"),1)]),v[79]||(v[79]=i("p",{class:"text-xs font-mono text-zinc-400"}," 支持中国 (### #### ####)、美国 ((###) ###-####) 等多国区号格式自适应与完成态对勾反馈 ",-1))],2)):a.value.id==="tag-input"?(b(),g("div",{key:32,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Jk,[k(Bx,{modelValue:Ie.value,"onUpdate:modelValue":v[18]||(v[18]=q=>Ie.value=q),"max-tags":8},null,8,["modelValue"])]),i("div",Qk,[v[80]||(v[80]=Ae(" 当前标签数组：",-1)),i("span",ew,P(JSON.stringify(Ie.value)),1)]),v[81]||(v[81]=i("p",{class:"text-xs font-mono text-zinc-400"}," 回车/逗号自动生成标签胶囊，退格键按序反向删除，配备弹性进退场动效与最大数量上限 ",-1))],2)):a.value.id==="mention-input"?(b(),g("div",{key:33,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",tw,[k(rv,{modelValue:Ce.value,"onUpdate:modelValue":v[19]||(v[19]=q=>Ce.value=q)},null,8,["modelValue"])]),v[82]||(v[82]=i("p",{class:"text-xs font-mono text-zinc-400"}," 键入 @ 呼出团队成员与 AI 智能体候选菜单，支持键盘上下光标漫游与 Tab/Enter 高亮注入 ",-1))],2)):a.value.id==="segmented-control"?(b(),g("div",{key:34,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",nw,[k(ua,{modelValue:L.value,"onUpdate:modelValue":v[20]||(v[20]=q=>L.value=q),options:Q,size:"md"},null,8,["modelValue"]),k(ua,{modelValue:L.value,"onUpdate:modelValue":v[21]||(v[21]=q=>L.value=q),options:[{id:"preview",label:"天"},{id:"code",label:"周"},{id:"docs",label:"月"}],size:"sm"},null,8,["modelValue"])]),i("div",rw,[v[83]||(v[83]=Ae(" 当前激活项：",-1)),i("span",ow,P(L.value),1)]),v[84]||(v[84]=i("p",{class:"text-xs font-mono text-zinc-400"}," iOS / macOS 风格物理弹簧滑块，支持左右方向键键盘导航与尺寸自适应 ",-1))],2)):a.value.id==="breadcrumb-trail"?(b(),g("div",{key:35,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",sw,[v[85]||(v[85]=i("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-4"}," 折叠模式（最大显示 3 项，中间自动收纳为浮层气泡）： ",-1)),k(pa,{items:H,"max-items":3})]),i("div",iw,[v[86]||(v[86]=i("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-4"}," 全展开模式： ",-1)),k(pa,{items:H,"max-items":10})]),v[87]||(v[87]=i("p",{class:"text-xs font-mono text-zinc-400"}," 层级过深时自动将中间路径收纳为省略号，点击呼出扩散柔和阴影下拉浮层 ",-1))],2)):a.value.id==="floating-action-menu"?(b(),g("div",{key:36,class:$(["relative flex flex-col items-center justify-center w-full min-h-[380px] p-10 rounded-2xl border transition-colors duration-200 gap-6 overflow-hidden",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",aw,[v[88]||(v[88]=i("div",{class:"text-sm font-bold text-zinc-800 dark:text-zinc-100"}," 点击右下角浮动动作药丸（FAB）体验交错弹簧飞出 ",-1)),i("div",lw," 最新触发："+P(ae.value),1)]),i("div",cw,[k(_v,{actions:x,tooltip:"快捷动效与部署工具箱"})]),v[89]||(v[89]=i("p",{class:"text-xs font-mono text-zinc-400"}," 135° 顺滑旋转切换图标，子动作级联平滑缩放飞入，配备毛玻璃浮动标签 ",-1))],2)):a.value.id==="navbar-hover"?(b(),g("div",{key:37,class:$(["flex flex-col items-center justify-start w-full min-h-[380px] p-10 rounded-2xl border transition-colors duration-200 gap-8",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",dw,[k(Lv,{items:z,onSelect:v[22]||(v[22]=q=>M.value=q.title)})]),i("div",uw,[v[90]||(v[90]=Ae(" 选中的导航二级特性：",-1)),i("span",pw,P(M.value),1)]),v[91]||(v[91]=i("p",{class:"text-xs font-mono text-zinc-400"}," 对标 Stripe / Vercel 巨型悬浮下拉菜单，顶部箭头与卡片自适应尺寸平滑跟随 ",-1))],2)):a.value.id==="pagination-slider"?(b(),g("div",{key:38,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",fw,[k(Wv,{modelValue:T.value,"onUpdate:modelValue":v[23]||(v[23]=q=>T.value=q),"total-pages":20,"show-slider":!0},null,8,["modelValue"])]),i("div",mw,[v[92]||(v[92]=Ae(" 当前激活页码：第 ",-1)),i("span",bw,P(T.value),1),v[93]||(v[93]=Ae(" 页 / 共 20 页 ",-1))]),v[94]||(v[94]=i("p",{class:"text-xs font-mono text-zinc-400"}," 传统分页按钮与触感快速拖动滑块合二为一，极大提升大跨度翻页效率 ",-1))],2)):a.value.id==="circular-progress-nav"?(b(),g("div",{key:39,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",gw,[k(Xo,{progress:F.value,size:64,"stroke-width":5,onClick:j},null,8,["progress"]),k(Xo,{progress:100,size:52,"stroke-width":4,tooltip:"进度已满"}),k(Xo,{progress:35,size:48,"stroke-width":3.5,tooltip:"初始化 35%"})]),i("div",hw,[i("button",{type:"button",onClick:v[24]||(v[24]=q=>F.value=Math.max(0,F.value-10)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"}," -10% "),i("div",xw,[v[95]||(v[95]=Ae(" 当前进度：",-1)),i("span",vw,P(F.value)+"%",1)]),i("button",{type:"button",onClick:v[25]||(v[25]=q=>F.value=Math.min(100,F.value+10)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"}," +10% ")]),v[96]||(v[96]=i("p",{class:"text-xs font-mono text-zinc-400"}," SVG 矢量环形进度指示器，支持平滑 stroke-dashoffset 阻尼形变与微拟态按压 ",-1))],2)):a.value.id==="glowing-card"?(b(),g("div",{key:40,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",yw,[k(fa,{duration:4,blur:20,class:"w-full"},{default:Y(()=>[i("div",kw,[i("div",ww,[k(I(Re),{class:"h-5 w-5"})]),v[97]||(v[97]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"常驻流光卡片"),i("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 底层 360° 匀速旋转弥散光斑，顶层 1px 细微发丝发光轮廓贴合容器。 ")],-1))])]),_:1}),k(fa,{duration:3,blur:24,"hover-only":!0,"glow-color":"conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)",class:"w-full"},{default:Y(()=>[i("div",zw,[i("div",_w,[k(I(Dr),{class:"h-5 w-5"})]),v[98]||(v[98]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"悬停激发流光"),i("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 鼠标移入时瞬间唤醒炫彩流光外框，移出平滑消隐，极致节能。 ")],-1))])]),_:1})]),v[99]||(v[99]=i("p",{class:"text-xs font-mono text-zinc-400"}," 双层流光结构：底层空气感多层模糊扩散 + 顶层发丝剪裁遮罩 ",-1))],2)):a.value.id==="glass-card"?(b(),g("div",{key:41,class:$(["relative flex flex-col items-center justify-center w-full min-h-[360px] p-10 rounded-2xl border transition-colors duration-200 gap-6 overflow-hidden",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-100"])},[v[102]||(v[102]=i("div",{class:"absolute -top-10 -left-10 h-48 w-48 rounded-full bg-blue-500/30 blur-2xl pointer-events-none"},null,-1)),v[103]||(v[103]=i("div",{class:"absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-purple-500/30 blur-2xl pointer-events-none"},null,-1)),v[104]||(v[104]=i("div",{class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none"},null,-1)),i("div",Cw,[k(ma,{blur:16,saturation:180,class:"w-full"},{default:Y(()=>[i("div",Sw,[i("div",Iw,[k(I(Xt),{class:"h-5 w-5"})]),v[100]||(v[100]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"磨砂亚克力玻璃"),i("p",{class:"mt-1 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed"}," 16px 硬件加速环境背板虚化，180% 鲜明色彩透光增益，顶部物理倒角高光线。 ")],-1))])]),_:1}),k(ma,{blur:24,saturation:200,class:"w-full"},{default:Y(()=>[i("div",Aw,[i("div",$w,[k(I(Lo),{class:"h-5 w-5"})]),v[101]||(v[101]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"微拟态浮升反馈"),i("p",{class:"mt-1 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed"}," 悬停触发 -translate-y-1 与多层柔和深色阴影扩展，质感高级灵动。 ")],-1))])]),_:1})]),v[105]||(v[105]=i("p",{class:"text-xs font-mono text-zinc-400 relative z-10"}," 双层背板折射滤镜 + 顶部高折射率物理反光发丝线，完美抗锯齿 ",-1))],2)):a.value.id==="spotlight-card"?(b(),g("div",{key:42,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Mw,[k(ba,{"spotlight-radius":280,"spotlight-color":"rgba(59, 130, 246, 0.18)",class:"w-full"},{default:Y(()=>[i("div",Pw,[i("div",Tw,[k(I(wn),{class:"h-5 w-5"})]),v[106]||(v[106]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"极客蓝聚光灯"),i("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 鼠标在卡片上方滑行时，柔和径向聚光灯在卡片表面与 1px 发丝边框上同步聚焦漫射。 ")],-1))])]),_:1}),k(ba,{"spotlight-radius":280,"spotlight-color":"rgba(168, 85, 247, 0.18)",class:"w-full"},{default:Y(()=>[i("div",Rw,[i("div",Ew,[k(I(Jn),{class:"h-5 w-5"})]),v[107]||(v[107]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"幻境紫聚光灯"),i("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 边框与内表面联动感知光标相对坐标，移开卡片时光晕平滑消退。 ")],-1))])]),_:1})]),v[108]||(v[108]=i("p",{class:"text-xs font-mono text-zinc-400"}," 滑动光标在两张卡片间移动体验相对坐标实时动态漫反射追踪 ",-1))],2)):a.value.id==="tilt-card"?(b(),g("div",{key:43,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Fw,[k(a1,{"max-tilt":16,perspective:1e3,glare:!0,class:"w-full"},{default:Y(()=>[i("div",Lw,[i("div",Ow,[k(I(Jn),{class:"h-7 w-7"})]),v[109]||(v[109]=i("h4",{class:"mt-4 text-base font-bold text-zinc-900 dark:text-white [transform:translateZ(30px)]"}," 3D 视差空间陀螺仪 ",-1)),v[110]||(v[110]=i("p",{class:"mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed [transform:translateZ(20px)]"}," 光标在卡片内部移动时计算精确三维旋转量，卡片表面覆盖全息反光遮罩（Glare Sheen），图标具备悬浮纵深感。 ",-1)),v[111]||(v[111]=i("div",{class:"mt-4 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 [transform:translateZ(25px)]"}," 移入并晃动光标体验视差 ",-1))])]),_:1})]),v[112]||(v[112]=i("p",{class:"text-xs font-mono text-zinc-400"}," 基于 CSS 3D 变换 rotateX / rotateY + 动态全息反光层 + 子元素 translateZ 纵深 ",-1))],2)):a.value.id==="card-stack"?(b(),g("div",{key:44,class:$(["flex flex-col items-center justify-center w-full min-h-[420px] p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(x1,{items:G,"max-visible":3,onSwipe:X}),i("div",Vw,[v[113]||(v[113]=Ae(" 卡片划动监听：",-1)),i("span",Dw,P(W.value),1)]),v[114]||(v[114]=i("p",{class:"text-xs font-mono text-zinc-400"}," 按住第一张卡片左右拖动划走（带旋转与阻尼），或使用下方按钮翻阅卡片 ",-1))],2)):a.value.id==="noise-card"?(b(),g("div",{key:45,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",jw,[k(ga,{gradient:"linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(147, 51, 234, 0.16))","grain-opacity":.14,animated:!0,class:"w-full"},{default:Y(()=>[i("div",Bw,[i("div",Nw,[k(I(xp),{class:"h-5 w-5"})]),v[115]||(v[115]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"电影胶片噪点"),i("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 纯原生 SVG 分形噪点算法，微动态颗粒感赋予深色表面温润触感。 ")],-1))])]),_:1}),k(ga,{gradient:"linear-gradient(135deg, rgba(16, 185, 129, 0.16), rgba(245, 158, 11, 0.16))","grain-opacity":.16,animated:!0,class:"w-full"},{default:Y(()=>[i("div",Hw,[i("div",Gw,[k(I(Re),{class:"h-5 w-5"})]),v[116]||(v[116]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"极光破晓噪点"),i("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 绿橙渐变底色透过分形颗粒漫射，质感对标高端胶片暗房摄影美学。 ")],-1))])]),_:1})]),v[117]||(v[117]=i("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG feTurbulence 动态渲染分形噪点，0 外部图片依赖，体积超轻 ",-1))],2)):a.value.id==="sparkline"?(b(),g("div",{key:46,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Uw,[i("div",qw,[v[118]||(v[118]=i("div",{class:"flex items-center justify-between w-full"},[i("span",{class:"text-xs font-bold text-zinc-500"},"API 吞吐请求量"),i("span",{class:"text-xs font-mono font-bold text-blue-500"},"+38.2%")],-1)),k(ks,{data:B.value,width:280,height:80,color:"#3b82f6",fill:!0,"format-value":q=>`${q} k/s`},null,8,["data","format-value"])]),i("div",Ww,[v[119]||(v[119]=i("div",{class:"flex items-center justify-between w-full"},[i("span",{class:"text-xs font-bold text-zinc-500"},"内存缓存命中率"),i("span",{class:"text-xs font-mono font-bold text-emerald-500"},"99.4%")],-1)),k(ks,{data:[88,91,89,94,92,96,95,98,97,99],width:280,height:80,color:"#10b981",fill:!0,"format-value":q=>`${q}%`},null,8,["format-value"])])]),v[120]||(v[120]=i("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG 贝塞尔曲线平滑插值路径，移动光标体验垂直辅助虚线、触点微缩放与数值浮层 ",-1))],2)):a.value.id==="animated-counter"?(b(),g("div",{key:47,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Xw,[v[121]||(v[121]=i("span",{class:"text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider"}," 实时经常性收入 (MRR) ",-1)),i("div",Yw,[k(Tc,{value:de.value,prefix:"¥",decimals:0,duration:1200,"trend-color":!0},null,8,["value"])])]),i("div",Kw,[i("button",{type:"button",onClick:v[26]||(v[26]=q=>K(-15e3)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," -15,000 "),i("button",{type:"button",onClick:v[27]||(v[27]=q=>K(-2500)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," -2,500 "),i("button",{type:"button",onClick:v[28]||(v[28]=q=>K(5e3)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," +5,000 "),i("button",{type:"button",onClick:v[29]||(v[29]=q=>K(32800)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," +32,800 ")]),v[122]||(v[122]=i("p",{class:"text-xs font-mono text-zinc-400"}," 基于 requestAnimationFrame 非线性指数衰减缓动插值，点击数值体验红/绿涨跌高亮与千分位 ",-1))],2)):a.value.id==="radial-gauge"?(b(),g("div",{key:48,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Zw,[k(Ko,{value:le.value,label:"集群 CPU 负载",unit:"%",size:180,thresholds:!0},null,8,["value"]),k(Ko,{value:94,label:"危险阈值 (红区)",unit:"%",size:150,thresholds:!0}),k(Ko,{value:38,label:"健康阈值 (绿区)",unit:"%",size:150,thresholds:!0})]),i("div",Jw,[i("button",{type:"button",onClick:v[30]||(v[30]=q=>le.value=Math.max(0,le.value-15)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," -15% "),i("div",Qw,[v[123]||(v[123]=Ae(" 当前负载：",-1)),i("span",e2,P(le.value)+"%",1)]),i("button",{type:"button",onClick:v[31]||(v[31]=q=>le.value=Math.min(100,le.value+15)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," +15% ")]),v[124]||(v[124]=i("p",{class:"text-xs font-mono text-zinc-400"}," 240° 大弧度科技仪表盘，末端带反光高亮圆点，跨越 75%/90% 临界点时自适应变色 ",-1))],2)):a.value.id==="progress-steps"?(b(),g("div",{key:49,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",t2,[k(J1,{"current-step":ue.value,"onUpdate:currentStep":v[32]||(v[32]=q=>ue.value=q),steps:_e},null,8,["current-step"])]),i("div",n2,[i("button",{type:"button",disabled:ue.value<=1,onClick:v[33]||(v[33]=q=>ue.value=Math.max(1,ue.value-1)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 disabled:opacity-40 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," 上一步 ",8,r2),i("div",o2,[v[125]||(v[125]=Ae(" 当前阶段：",-1)),i("span",s2,"第 "+P(ue.value)+" 步（"+P((qe=_e[ue.value-1])==null?void 0:qe.title)+"）",1)]),i("button",{type:"button",disabled:ue.value>=_e.length,onClick:v[34]||(v[34]=q=>ue.value=Math.min(_e.length,ue.value+1)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 disabled:opacity-40 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," 下一步 ",8,i2)]),v[126]||(v[126]=i("p",{class:"text-xs font-mono text-zinc-400"}," 完成节点弹性放大打勾形变，当前节点呼吸光晕，连接线渐变流动填充 ",-1))],2)):a.value.id==="comparison-matrix"?(b(),g("div",{key:50,class:$(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",a2,[k(py,{plans:Le,features:Pe,onSelectPlan:v[35]||(v[35]=q=>Ue.value=`已选择套餐：${q}`)})]),i("div",l2,[v[127]||(v[127]=Ae(" 套餐选择监听：",-1)),i("span",c2,P(Ue.value),1)]),v[128]||(v[128]=i("p",{class:"text-xs font-mono text-zinc-400"}," 推荐套餐高亮悬浮微框，整行悬停高亮，支持布尔值对勾/减号与自定义参数说明 ",-1))],2)):a.value.id==="stat-card"?(b(),g("div",{key:51,class:$(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",Z?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",d2,[k(xa,{title:"分布式网关吞吐量",value:89240,suffix:" TPS",change:18.5,"change-period":"较昨日","trend-data":Ke,icon:I(us),color:"#3b82f6",class:"w-full"},null,8,["icon"]),k(xa,{title:"活跃 Agent 会话数",value:14380,suffix:" 个",change:-2.4,"change-period":"较上周","trend-data":[65,58,62,54,49,52,48,44],icon:I(Mn),color:"#ec4899",class:"w-full"},null,8,["icon"])]),v[129]||(v[129]=i("p",{class:"text-xs font-mono text-zinc-400"}," 整合主标题、大字号平滑计数器、环比涨跌徽标与嵌入式 Mini Sparkline 趋势微图 ",-1))],2)):J("",!0)]}),_:1},8,["title","description","component-code","usage-code","component-filename","props-list"]))])])])}}}),p2=cf({history:j0(),routes:[{path:"/",name:"home",component:Eb},{path:"/docs/:id?",name:"docs",component:u2},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(e,t,n){return n||(e.name==="docs"&&t.name==="docs"?!1:{top:0})}}),Rc=lp(n0);Rc.use(p2);Rc.mount("#app");
