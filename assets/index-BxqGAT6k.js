(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Be={},In=[],Bt=()=>{},Ba=()=>!1,ho=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xo=e=>e.startsWith("onUpdate:"),Ze=Object.assign,Ns=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},od=Object.prototype.hasOwnProperty,Te=(e,t)=>od.call(e,t),xe=Array.isArray,fn=e=>$r(e)==="[object Map]",to=e=>$r(e)==="[object Set]",fi=e=>$r(e)==="[object Date]",we=e=>typeof e=="function",He=e=>typeof e=="string",$t=e=>typeof e=="symbol",Fe=e=>e!==null&&typeof e=="object",Na=e=>(Fe(e)||we(e))&&we(e.then)&&we(e.catch),Ha=Object.prototype.toString,$r=e=>Ha.call(e),sd=e=>$r(e).slice(8,-1),Ga=e=>$r(e)==="[object Object]",Hs=e=>He(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,cr=Bs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vo=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},id=/-\w/g,vt=vo(e=>e.replace(id,t=>t.slice(1).toUpperCase())),ad=/\B([A-Z])/g,xn=vo(e=>e.replace(ad,"-$1").toLowerCase()),yo=vo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Do=vo(e=>e?`on${yo(e)}`:""),Ot=(e,t)=>!Object.is(e,t),Xr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ua=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Gs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ld=e=>{const t=He(e)?Number(e):NaN;return isNaN(t)?e:t};let mi;const ko=()=>mi||(mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ve(e){if(xe(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=He(r)?pd(r):ve(r);if(o)for(const i in o)t[i]=o[i]}return t}else if(He(e)||Fe(e))return e}const cd=/;(?![^(]*\))/g,dd=/:([^]+)/,ud=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function pd(e){const t={};return e.replace(ud,n=>n.startsWith("/*")?"":n).split(cd).forEach(n=>{if(n){const r=n.split(dd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function A(e){let t="";if(He(e))t=e;else if(xe(e))for(let n=0;n<e.length;n++){const r=A(e[n]);r&&(t+=r+" ")}else if(Fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const fd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",md=Bs(fd);function qa(e){return!!e||e===""}function bd(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let o=0;r&&o<e.length;o++)r=wo(e[o],t[o],n);return r}function bi(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),o=new Uint8Array(r.length);for(const i of e){let l=-1;for(let a=0;a<r.length;a++)if(!o[a]&&wo(i,r[a],n)){l=a;break}if(l<0)return!1;o[l]=1}return!0}function gd(e,t,n){let r=fn(e),o=fn(t);if(r||o||(r=to(e),o=to(t),r||o))return r&&o?bi(e,t,n):!1;const i=Object.keys(e).length,l=Object.keys(t).length;if(i!==l)return!1;for(const a in e){const c=e.hasOwnProperty(a),p=t.hasOwnProperty(a);if(c&&!p||!c&&p||!wo(e[a],t[a],n))return!1}return String(e)===String(t)}function gi(e,t,n,r){n||(n=[new Map,new Map]);const[o,i]=n;if(o.has(e)||i.has(t))return o.get(e)===t&&i.get(t)===e;o.set(e,t),i.set(t,e);const l=r(e,t,n);return o.delete(e),i.delete(t),l}function wo(e,t,n){if(e===t)return!0;let r=fi(e),o=fi(t);return r||o?r&&o?e.getTime()===t.getTime():!1:(r=$t(e),o=$t(t),r||o?e===t:(r=xe(e),o=xe(t),r||o?r&&o?gi(e,t,n,bd):!1:(r=Fe(e),o=Fe(t),r||o?!r||!o?!1:gi(e,t,n,gd):String(e)===String(t))))}const Wa=e=>!!(e&&e.__v_isRef===!0),$=e=>He(e)?e:e==null?"":xe(e)||Fe(e)&&(e.toString===Ha||!we(e.toString))?Wa(e)?$(e.value):JSON.stringify(e,Xa,2):String(e),Xa=(e,t)=>Wa(t)?Xa(e,t.value):fn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],i)=>(n[Vo(r,i)+" =>"]=o,n),{})}:to(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Vo(n))}:$t(t)?Vo(t):Fe(t)&&!xe(t)&&!Ga(t)?String(t):t,Vo=(e,t="")=>{var n;return $t(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rt;class hd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&rt&&(rt.active?(this.parent=rt,this.index=(rt.scopes||(rt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=rt;try{return rt=this,t()}finally{rt=n}}}on(){++this._on===1&&(this.prevScope=rt,rt=this)}off(){if(this._on>0&&--this._on===0){if(rt===this)rt=this.prevScope;else{let t=rt;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,r=o.length;n<r;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function xd(){return rt}let Ne;const Oo=new WeakSet;class Ka{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rt&&(rt.active?rt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oo.has(this)&&(Oo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Za(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hi(this),Qa(this);const t=Ne,n=Mt;Ne=this,Mt=!0;try{return this.fn()}finally{Ja(this),Ne=t,Mt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ws(t);this.deps=this.depsTail=void 0,hi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ps(this)&&this.run()}get dirty(){return ps(this)}}let Ya=0,dr,ur;function Za(e,t=!1){if(e.flags|=8,t){e.next=ur,ur=e;return}e.next=dr,dr=e}function Us(){Ya++}function qs(){if(--Ya>0)return;if(ur){let t=ur;for(ur=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;dr;){let t=dr;for(dr=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Qa(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ja(e){let t,n=e.depsTail,r=n;for(;r;){const o=r.prevDep;r.version===-1?(r===n&&(n=o),Ws(r),vd(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=t,e.depsTail=n}function ps(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(el(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function el(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===yr)||(e.globalVersion=yr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ps(e))))return;e.flags|=2;const t=e.dep,n=Ne,r=Mt;Ne=e,Mt=!0;try{Qa(e);const o=e.fn(e._value);(t.version===0||Ot(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Ne=n,Mt=r,Ja(e),e.flags&=-3}}function Ws(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ws(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function vd(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Mt=!0;const tl=[];function Ht(){tl.push(Mt),Mt=!1}function Gt(){const e=tl.pop();Mt=e===void 0?!0:e}function hi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ne;Ne=void 0;try{t()}finally{Ne=n}}}let yr=0;class yd{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ne||!Mt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new yd(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,nl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(t){this.version++,yr++,this.notify(t)}notify(t){Us();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{qs()}}}function nl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)nl(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const fs=new WeakMap,Mn=Symbol(""),ms=Symbol(""),kr=Symbol("");function ct(e,t,n){if(Mt&&Ne){let r=fs.get(e);r||fs.set(e,r=new Map);let o=r.get(n);o||(r.set(n,o=new Xs),o.map=r,o.key=n),o.track()}}function Jt(e,t,n,r,o,i){const l=fs.get(e);if(!l){yr++;return}const a=c=>{c&&c.trigger()};if(Us(),t==="clear")l.forEach(a);else{const c=xe(e),p=c&&Hs(n);if(c&&n==="length"){const u=Number(r);l.forEach((d,b)=>{(b==="length"||b===kr||!$t(b)&&b>=u)&&a(d)})}else switch((n!==void 0||l.has(void 0))&&a(l.get(n)),p&&a(l.get(kr)),t){case"add":c?p&&a(l.get("length")):(a(l.get(Mn)),fn(e)&&a(l.get(ms)));break;case"delete":c||(a(l.get(Mn)),fn(e)&&a(l.get(ms)));break;case"set":fn(e)&&a(l.get(Mn));break}}qs()}function Tn(e){const t=Pe(e);return t===e||(ct(t,"iterate",kr),Ct(e))?t:Ut(e)?mn(e)?t.map(n=>bn(St(n))):t.map(bn):t.map(St)}function zo(e){return ct(e=Pe(e),"iterate",kr),e}function Ft(e,t){return Ut(e)?bn(mn(e)?St(t):t):St(t)}const kd={__proto__:null,[Symbol.iterator](){return jo(this,Symbol.iterator,e=>Ft(this,e))},concat(...e){return Tn(this).concat(...e.map(t=>xe(t)?Tn(t):t))},entries(){return jo(this,"entries",e=>(e[1]=Ft(this,e[1]),e))},every(e,t){return Xt(this,"every",e,t,void 0,arguments)},filter(e,t){return Xt(this,"filter",e,t,n=>n.map(r=>Ft(this,r)),arguments)},find(e,t){return Xt(this,"find",e,t,n=>Ft(this,n),arguments)},findIndex(e,t){return Xt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Xt(this,"findLast",e,t,n=>Ft(this,n),arguments)},findLastIndex(e,t){return Xt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Xt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Bo(this,"includes",e)},indexOf(...e){return Bo(this,"indexOf",e)},join(e){return Tn(this).join(e)},lastIndexOf(...e){return Bo(this,"lastIndexOf",e)},map(e,t){return Xt(this,"map",e,t,void 0,arguments)},pop(){return Zn(this,"pop")},push(...e){return Zn(this,"push",e)},reduce(e,...t){return vi(this,"reduce",e,t)},reduceRight(e,...t){return vi(this,"reduceRight",e,t)},shift(){return Zn(this,"shift")},some(e,t){return Xt(this,"some",e,t,void 0,arguments)},splice(...e){return Zn(this,"splice",e)},toReversed(){return Tn(this).toReversed()},toSorted(e){return Tn(this).toSorted(e)},toSpliced(...e){return Tn(this).toSpliced(...e)},unshift(...e){return Zn(this,"unshift",e)},values(){return jo(this,"values",e=>Ft(this,e))}};function jo(e,t,n){const r=zo(e),o=r[t],i=o.call(r);if(r!==e&&!Ct(e)){if(i[Symbol.toStringTag]==="Array Iterator"){const l=Object.create(Object.getPrototypeOf(i));return l.next=()=>xi(i.next(),n),o!==rl[t]&&Object.defineProperties(l,{return:{get(){const a=i.return;return typeof a=="function"?a.bind(i):a}},throw:{get(){const a=i.throw;return typeof a=="function"?a.bind(i):a}}}),l}i._next=i.next,i.next=()=>xi(i._next(),n)}return i}function xi(e,t){return e.done||(e.value=t(e.value)),e}const rl=Array.prototype;function Xt(e,t,n,r,o,i){const l=zo(e),a=l!==e&&!Ct(e),c=l[t];if(c!==rl[t]){const d=c.apply(e,i);return a?St(d):d}let p=n;l!==e&&(a?p=function(d,b){return n.call(this,Ft(e,d),b,e)}:n.length>2&&(p=function(d,b){return n.call(this,d,b,e)}));const u=c.call(l,p,r);return a&&o?o(u):u}function vi(e,t,n,r){const o=zo(e),i=o!==e&&!Ct(e);let l=n,a=!1;o!==e&&(i?(a=r.length===0,l=function(p,u,d){return a&&(a=!1,p=Ft(e,p)),n.call(this,p,Ft(e,u),d,e)}):n.length>3&&(l=function(p,u,d){return n.call(this,p,u,d,e)}));const c=o[t](l,...r);return a?Ft(e,c):c}function Bo(e,t,n){const r=Pe(e);ct(r,"iterate",kr);const o=r[t](...n);return(o===-1||o===!1)&&Zs(n[0])?(n[0]=Pe(n[0]),r[t](...n)):o}function Zn(e,t,n=[]){Ht(),Us();const r=Pe(e)[t].apply(e,n);return qs(),Gt(),r}const wd=Bs("__proto__,__v_isRef,__isVue"),ol=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($t));function zd(e){$t(e)||(e=String(e));const t=Pe(this);return ct(t,"has",e),t.hasOwnProperty(e)}class sl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(o?i?Rd:cl:i?ll:al).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const l=xe(t);if(!o){let c;if(l&&(c=kd[n]))return c;if(n==="hasOwnProperty")return zd}const a=Reflect.get(t,n,ut(t)?t:r);if(($t(n)?ol.has(n):wd(n))||(o||ct(t,"get",n),i))return a;if(ut(a)){const c=l&&Hs(n)?a:a.value;return o&&Fe(c)?gs(c):c}return Fe(a)?o?gs(a):_o(a):a}}class il extends sl{constructor(t=!1){super(!1,t)}set(t,n,r,o){let i=t[n];const l=xe(t)&&Hs(n);if(!this._isShallow){const p=Ut(i);if(!Ct(r)&&!Ut(r)&&(i=Pe(i),r=Pe(r)),!l&&ut(i)&&!ut(r))return p||(i.value=r),!0}const a=l?Number(n)<t.length:Te(t,n),c=Reflect.set(t,n,r,ut(t)?t:o);return t===Pe(o)&&c&&(a?Ot(r,i)&&Jt(t,"set",n,r):Jt(t,"add",n,r)),c}deleteProperty(t,n){const r=Te(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&Jt(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!$t(n)||!ol.has(n))&&ct(t,"has",n),r}ownKeys(t){return ct(t,"iterate",xe(t)?"length":Mn),Reflect.ownKeys(t)}}class _d extends sl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Cd=new il,Sd=new _d,Id=new il(!0);const bs=e=>e,Dr=e=>Reflect.getPrototypeOf(e);function Ad(e,t,n){return function(...r){const o=this.__v_raw,i=Pe(o),l=fn(i),a=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,p=o[e](...r),u=n?bs:t?bn:St;return!t&&ct(i,"iterate",c?ms:Mn),Ze(Object.create(p),{next(){const{value:d,done:b}=p.next();return b?{value:d,done:b}:{value:a?[u(d[0]),u(d[1])]:u(d),done:b}}})}}function Vr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Md(e,t){const n={get(o){const i=this.__v_raw,l=Pe(i),a=Pe(o);e||(Ot(o,a)&&ct(l,"get",o),ct(l,"get",a));const{has:c}=Dr(l),p=t?bs:e?bn:St;if(c.call(l,o))return p(i.get(o));if(c.call(l,a))return p(i.get(a));i!==l&&i.get(o)},get size(){const o=this.__v_raw;return!e&&ct(Pe(o),"iterate",Mn),o.size},has(o){const i=this.__v_raw,l=Pe(i),a=Pe(o);return e||(Ot(o,a)&&ct(l,"has",o),ct(l,"has",a)),o===a?i.has(o):i.has(o)||i.has(a)},forEach(o,i){const l=this,a=l.__v_raw,c=Pe(a),p=t?bs:e?bn:St;return!e&&ct(c,"iterate",Mn),a.forEach((u,d)=>o.call(i,p(u),p(d),l))}};return Ze(n,e?{add:Vr("add"),set:Vr("set"),delete:Vr("delete"),clear:Vr("clear")}:{add(o){const i=Pe(this),l=Dr(i),a=Pe(o),c=!t&&!Ct(o)&&!Ut(o)?a:o;return l.has.call(i,c)||Ot(o,c)&&l.has.call(i,o)||Ot(a,c)&&l.has.call(i,a)||(i.add(c),Jt(i,"add",c,c)),this},set(o,i){!t&&!Ct(i)&&!Ut(i)&&(i=Pe(i));const l=Pe(this),{has:a,get:c}=Dr(l);let p=a.call(l,o);p||(o=Pe(o),p=a.call(l,o));const u=c.call(l,o);return l.set(o,i),p?Ot(i,u)&&Jt(l,"set",o,i):Jt(l,"add",o,i),this},delete(o){const i=Pe(this),{has:l,get:a}=Dr(i);let c=l.call(i,o);c||(o=Pe(o),c=l.call(i,o)),a&&a.call(i,o);const p=i.delete(o);return c&&Jt(i,"delete",o,void 0),p},clear(){const o=Pe(this),i=o.size!==0,l=o.clear();return i&&Jt(o,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Ad(o,e,t)}),n}function Ks(e,t){const n=Md(e,t);return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_isShallow"?t:o==="__v_raw"?r:Reflect.get(Te(n,o)&&o in r?n:r,o,i)}const $d={get:Ks(!1,!1)},Pd={get:Ks(!1,!0)},Td={get:Ks(!0,!1)};const al=new WeakMap,ll=new WeakMap,cl=new WeakMap,Rd=new WeakMap;function Ed(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _o(e){return Ut(e)?e:Ys(e,!1,Cd,$d,al)}function dl(e){return Ys(e,!1,Id,Pd,ll)}function gs(e){return Ys(e,!0,Sd,Td,cl)}function Ys(e,t,n,r,o){if(!Fe(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=o.get(e);if(i)return i;const l=Ed(sd(e));if(l===0)return e;const a=new Proxy(e,l===2?r:n);return o.set(e,a),a}function mn(e){return Ut(e)?mn(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function Ct(e){return!!(e&&e.__v_isShallow)}function Zs(e){return e?!!e.__v_raw:!1}function Pe(e){const t=e&&e.__v_raw;return t?Pe(t):e}function Ld(e){return!Te(e,"__v_skip")&&Object.isExtensible(e)&&Ua(e,"__v_skip",!0),e}const St=e=>Fe(e)?_o(e):e,bn=e=>Fe(e)?gs(e):e;function ut(e){return e?e.__v_isRef===!0:!1}function T(e){return ul(e,!1)}function Fd(e){return ul(e,!0)}function ul(e,t){return ut(e)?e:new Dd(e,t)}class Dd{constructor(t,n){this.dep=new Xs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Pe(t),this._value=n?t:St(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ct(t)||Ut(t);t=r?t:Pe(t),Ot(t,n)&&(this._rawValue=t,this._value=r?t:St(t),this.dep.trigger())}}function I(e){return ut(e)?e.value:e}const Vd={get:(e,t,n)=>t==="__v_raw"?e:I(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return ut(o)&&!ut(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function pl(e){return mn(e)?e:new Proxy(e,Vd)}class Od{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Xs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return Za(this,!0),!0}get value(){const t=this.dep.track();return el(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function jd(e,t,n=!1){let r,o;return we(e)?r=e:(r=e.get,o=e.set),new Od(r,o,n)}const Or={},no=new WeakMap;let _n;function Bd(e,t=!1,n=_n){if(n){let r=no.get(n);r||no.set(n,r=[]),r.push(e)}}function Nd(e,t,n=Be){const{immediate:r,deep:o,once:i,scheduler:l,augmentJob:a,call:c}=n,p=M=>o?M:Ct(M)||o===!1||o===0?en(M,1):en(M);let u,d,b,m,v=!1,h=!1;if(ut(e)?(d=()=>e.value,v=Ct(e)):mn(e)?(d=()=>p(e),v=!0):xe(e)?(h=!0,v=e.some(M=>mn(M)||Ct(M)),d=()=>e.map(M=>{if(ut(M))return M.value;if(mn(M))return p(M);if(we(M))return c?c(M,2):M()})):we(e)?t?d=c?()=>c(e,2):e:d=()=>{if(b){Ht();try{b()}finally{Gt()}}const M=_n;_n=u;try{return c?c(e,3,[m]):e(m)}finally{_n=M}}:d=Bt,t&&o){const M=d,R=o===!0?1/0:o;d=()=>en(M(),R)}const z=xd(),_=()=>{u.stop(),z&&z.active&&Ns(z.effects,u)};if(i&&t){const M=t;t=(...R)=>{try{return M(...R)}finally{_()}}}let y=h?new Array(e.length).fill(Or):Or;const C=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(t){const R=u.run();if(M||o||v||(h?R.some((V,O)=>Ot(V,y[O])):Ot(R,y))){const V=_n;Ht();try{b&&b(),_n=u;const O=[R,y===Or?void 0:h&&y[0]===Or?[]:y,m];y=R,c?c(t,3,O):t(...O)}finally{_n=V,Gt()}}}else u.run()};return a&&a(C),u=new Ka(d),u.scheduler=l?()=>l(C,!1):C,m=M=>Bd(M,!1,u),b=u.onStop=()=>{const M=no.get(u);if(M){if(c)c(M,4);else for(const R of M)R();no.delete(u)}},t?r?C(!0):y=u.run():l?l(C.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function en(e,t=1/0,n){if(t<=0||!Fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ut(e))en(e.value,t,n);else if(xe(e))for(let r=0;r<e.length;r++)en(e[r],t,n);else if(to(e)||fn(e))e.forEach(r=>{en(r,t,n)});else if(Ga(e)){for(const r in e)en(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&en(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pr(e,t,n,r){try{return r?e(...r):e()}catch(o){Co(o,t,n)}}function It(e,t,n,r){if(we(e)){const o=Pr(e,t,n,r);return o&&Na(o)&&o.catch(i=>{Co(i,t,n)}),o}if(xe(e)){const o=[];for(let i=0;i<e.length;i++)o.push(It(e[i],t,n,r));return o}}function Co(e,t,n,r=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||Be;if(t){let a=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,p)===!1)return}a=a.parent}if(i){Ht(),Pr(i,null,10,[e,c,p]),Gt();return}}Hd(e,n,o,r,l)}function Hd(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}const xt=[];let At=-1;const Dt=[];let cn=null,Rn=0;const fl=Promise.resolve();let ro=null;function On(e){const t=ro||fl;return e?t.then(this?e.bind(this):e):t}function Gd(e){let t=At+1,n=xt.length;for(;t<n;){const r=t+n>>>1,o=xt[r],i=wr(o);i<e||i===e&&o.flags&2?t=r+1:n=r}return t}function Qs(e){if(!(e.flags&1)){const t=wr(e),n=xt[xt.length-1];!n||!(e.flags&2)&&t>=wr(n)?xt.push(e):xt.splice(Gd(t),0,e),e.flags|=1,ml()}}function ml(){ro||(ro=fl.then(hl))}function Ud(e){if(!xe(e))cn&&e.id===-1?cn.splice(Rn+1,0,e):e.flags&1||(Dt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Dt.push(e[t]);ml()}function bl(e,t,n,r=At+1){for(;r<xt.length;r++){const o=xt[r];if(o&&o.flags&2){if(e&&o.id!==e.uid||t!==void 0&&!(o.id>=t))continue;xt.splice(r,1),r=e?r-1:At,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function gl(e,t,n=0){if(Dt.length){let r=Dt,o=0;if(t){r=[];for(let l=0;l<Dt.length;l++){const a=Dt[l];(a.i!==void 0?!a.i||a.i.uid<n:t.has(a))?Dt[o++]=a:r.push(a)}}const i=[...new Set(r)].sort((l,a)=>wr(l)-wr(a));if(Dt.length=o,cn){for(let l=0;l<i.length;l++)cn.push(i[l]);return}for(cn=i,Rn=0;Rn<cn.length;Rn++){const l=cn[Rn];l.flags&4&&(l.flags&=-2),l.flags&8||l(),l.flags&=-2}cn=null,Rn=0}}let No=!1;function qd(e,t){if(No){e();return}const n=t===void 0?void 0:new Set(Dt);e(),No=!0;try{bl(void 0,t),gl(void 0,n,t)}finally{No=!1}}const wr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function hl(e){try{for(At=0;At<xt.length;At++){const t=xt[At];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Pr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;At<xt.length;At++){const t=xt[At];t&&(t.flags&=-2)}At=-1,xt.length=0,gl(),ro=null,(xt.length||Dt.length)&&hl()}}let ot=null,xl=null;function oo(e){const t=ot;return ot=e,xl=e&&e.type.__scopeId||null,t}function q(e,t=ot,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&lo(-1);const i=oo(t),l=tn.length;let a;try{a=e(...o)}finally{for(let c=tn.length;c>l;c--)oi();oo(i),r._d&&lo(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function $n(e,t){if(ot===null)return e;const n=To(ot),r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,l,a,c=Be]=t[o];i&&(we(i)&&(i={mounted:i,updated:i}),i.deep&&en(l),r.push({dir:i,instance:n,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function yn(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let l=0;l<o.length;l++){const a=o[l];i&&(a.oldValue=i[l].value);let c=a.dir[r];c&&(Ht(),It(c,n,8,[e.el,a,e,t]),Gt())}}function Kr(e,t){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[e]=t}}function Nt(e,t,n=!1){const r=Po();if(r||Bn){let o=Bn?Bn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&we(t)?t.call(r&&r.proxy):t}}const Wd=Symbol.for("v-scx"),Xd=()=>Nt(Wd);function it(e,t,n){return vl(e,t,n)}function vl(e,t,n=Be){const{immediate:r,deep:o,flush:i,once:l}=n,a=Ze({},n),c=t&&r||!t&&i!=="post";let p;if(Ir){if(i==="sync"){const m=Xd();p=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Bt,m.resume=Bt,m.pause=Bt,m}}const u=dt;a.call=(m,v,h)=>It(m,u,v,h);let d=!1;i==="post"?a.scheduler=m=>{m.i=u,gt(m,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,v)=>{v?m():Qs(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const b=Nd(e,t,a);return Ir&&(p?p.push(b):c&&b()),b}function Kd(e,t,n){const r=this.proxy,o=He(e)?e.includes(".")?yl(r,e):()=>r[e]:e.bind(r,r);let i;we(t)?i=t:(i=t.handler,n=t);const l=Rr(this),a=vl(o,i.bind(r),n);return l(),a}function yl(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const an=new WeakMap,kl=Symbol("_vte"),So=e=>e.__isTeleport,Cn=e=>e&&(e.disabled||e.disabled===""),Yd=e=>e&&(e.defer||e.defer===""),yi=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ki=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,hs=(e,t)=>{const n=e&&e.to;return He(n)?t?t(n):null:n},Zd={name:"Teleport",__isTeleport:!0,process(e,t,n,r,o,i,l,a,c,p){const{mc:u,pc:d,pbc:b,o:{insert:m,querySelector:v,createText:h,createComment:z,parentNode:_}}=p,y=Cn(t.props);let{dynamicChildren:C}=t;const M=(O,F,L)=>{O.shapeFlag&16&&u(O.children,F,L,o,i,l,a,c)},R=(O=t)=>{const F=Cn(O.props),L=O.target=hs(O.props,v),oe=xs(L,O,h,m);L&&(l!=="svg"&&yi(L)?l="svg":l!=="mathml"&&ki(L)&&(l="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(L),F||(M(O,L,oe),sr(O,!1)))},V=O=>{const F=()=>{if(an.get(O)===F){if(an.delete(O),Cn(O.props)){const L=_(O.el)||n;M(O,L,O.anchor),sr(O,!0)}R(O)}};an.set(O,F),gt(F,i)};if(e==null){const O=t.el=h(""),F=t.anchor=h("");if(m(O,n,r),m(F,n,r),Yd(t.props)||i&&i.pendingBranch){V(t);return}y&&(M(t,n,F),sr(t,!0)),R()}else{t.el=e.el;const O=t.anchor=e.anchor,F=an.get(e);if(F){F.flags|=8,an.delete(e),V(t);return}t.targetStart=e.targetStart;const L=t.target=e.target,oe=t.targetAnchor=e.targetAnchor,be=Cn(e.props),W=be?n:L,ye=be?O:oe;if(l==="svg"||yi(L)?l="svg":(l==="mathml"||ki(L))&&(l="mathml"),C?(b(e.dynamicChildren,C,W,o,i,l,a),ri(e,t,!0)):c||d(e,t,W,ye,o,i,l,a,!1),y)be?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):jr(t,n,O,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Me=hs(t.props,v);Me&&(t.target=Me,jr(t,Me,null,p,0))}else be&&jr(t,L,oe,p,1);sr(t,y)}},remove(e,t,n,{um:r,o:{remove:o}},i){const{shapeFlag:l,children:a,anchor:c,targetStart:p,targetAnchor:u,target:d,props:b}=e,m=Cn(b),v=i||!m,h=an.get(e);if(h&&(h.flags|=8,an.delete(e)),d&&(o(p),o(u)),i&&o(c),!h&&(m||d)&&l&16)for(let z=0;z<a.length;z++){const _=a[z];r(_,t,n,v,!!_.dynamicChildren)}},move:jr,hydrate:Qd};function jr(e,t,n,{o:{insert:r},m:o},i=2){i===0&&(e.targetStart&&r(e.targetStart,t,n),r(e.targetAnchor,t,n),n=e.targetAnchor);const{el:l,anchor:a,shapeFlag:c,children:p,props:u}=e,d=i===2;if(d&&r(l,t,n),!an.has(e)&&(!d||Cn(u))&&c&16)for(let b=0;b<p.length;b++)o(p[b],t,n,2);d&&r(a,t,n)}function Qd(e,t,n,r,o,i,{o:{nextSibling:l,parentNode:a,querySelector:c,insert:p,createText:u}},d){function b(z,_){let y=_;for(;y;){if(y&&y.nodeType===8){if(y.data==="teleport start anchor")t.targetStart=y;else if(y.data==="teleport anchor"){t.targetAnchor=y,z._lpa=t.targetAnchor&&l(t.targetAnchor);break}}y=l(y)}}function m(z,_){_.anchor=d(l(z),_,a(z),n,r,o,i)}const v=t.target=hs(t.props,c),h=Cn(t.props);if(v){const z=v._lpa||v.firstChild;t.shapeFlag&16&&(h?(m(e,t),b(v,z),t.targetAnchor||xs(v,t,u,p,a(e)===v?e:null)):(t.anchor=l(e),b(v,z),t.targetAnchor||xs(v,t,u,p),d(z&&l(z),t,v,n,r,o,i))),sr(t,h)}else h&&t.shapeFlag&16&&(m(e,t),t.targetStart=e,t.targetAnchor=l(e));return t.anchor&&l(t.anchor)}const Js=Zd;function sr(e,t){const n=e.ctx;if(n&&n.ut){let r,o;for(t?(r=e.el,o=e.anchor):(r=e.targetStart,o=e.targetAnchor);r&&r!==o;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function xs(e,t,n,r,o=null){const i=t.targetStart=n(""),l=t.targetAnchor=n("");return i[kl]=l,e&&(r(i,e,o),r(l,e,o)),l}const _t=Symbol("_leaveCb"),Qn=Symbol("_enterCb");function wl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qe(()=>{e.isMounted=!0}),Ml(()=>{e.isUnmounting=!0}),e}const zt=[Function,Array],zl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},Jd={name:"BaseTransition",props:zl,setup(e,{slots:t}){const n=Po(),r=wl();return()=>{const o=t.default&&ei(t.default(),!0),i=o&&o.length?_l(o):n.subTree?H():void 0;if(!i)return;const l=Pe(e),{mode:a}=l;if(r.isLeaving)return Ho(i);const c=so(i);if(!c)return Ho(i);let p=zr(c,l,r,n,d=>p=d);c.type!==st&&gn(c,p);let u=n.subTree&&so(n.subTree);if(u&&u.type!==st&&!Sn(u,c)&&_r(n.subTree)){let d=zr(u,l,r,n);if(gn(u,d),a==="out-in"&&c.type!==st)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Ho(i);a==="in-out"&&c.type!==st?d.delayLeave=(b,m,v)=>{const h=Cl(r,u);h[String(u.key)]=u,b[_t]=()=>{m(),b[_t]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{v(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function _l(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==st){t=n;break}}return t}const eu=Jd;function Cl(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function zr(e,t,n,r,o){const{appear:i,mode:l,persisted:a=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:b,onLeave:m,onAfterLeave:v,onLeaveCancelled:h,onBeforeAppear:z,onAppear:_,onAfterAppear:y,onAppearCancelled:C}=t,M=String(e.key),R=Cl(n,e),V=(L,oe)=>{L&&It(L,r,9,oe)},O=(L,oe)=>{const be=oe[1];V(L,oe),xe(L)?L.every(W=>W.length<=1)&&be():L.length<=1&&be()},F={mode:l,persisted:a,beforeEnter(L){let oe=c;if(!n.isMounted)if(i)oe=z||c;else return;L[_t]&&L[_t](!0);const be=R[M];if(be&&Sn(e,be)){let W=be.el[_t];if(!W){const ye=_r(be);W=ye&&ye.el[_t]}W&&W()}V(oe,[L])},enter(L){if(R[M]===e)return;let oe=p,be=u,W=d;if(!n.isMounted)if(i)oe=_||p,be=y||u,W=C||d;else return;let ye=!1;L[Qn]=Oe=>{ye||(ye=!0,Oe?V(W,[L]):V(be,[L]),F.delayedLeave&&F.delayedLeave(),L[Qn]=void 0)};const Me=L[Qn].bind(null,!1);oe?O(oe,[L,Me]):Me()},leave(L,oe){const be=String(e.key);if(L[Qn]&&L[Qn](!0),n.isUnmounting)return oe();V(b,[L]);let W=!1;L[_t]=Me=>{W||(W=!0,oe(),Me?V(h,[L]):V(v,[L]),L[_t]=void 0,R[be]===e&&delete R[be])};const ye=L[_t].bind(null,!1);R[be]=e,m?O(m,[L,ye]):ye()},clone(L){const oe=zr(L,t,n,r,o);return o&&o(oe),oe}};return F}function Ho(e){if(Io(e))return e=hn(e),e.children=null,e}function so(e){if(!Io(e))return So(e.type)&&e.children?_l(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&we(n.default))return n.default()}}function gn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;gn(So(n.type)&&so(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===ie&&xe(e.children)){const n=Vl(e.children,!1);n&&gn(n,t)}}function ei(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let l=e[i];const a=n==null?l.key:String(n)+String(l.key!=null?l.key:i);l.type===ie?(l.patchFlag&128&&o++,r=r.concat(ei(l.children,t,a))):(t||l.type!==st)&&r.push(a!=null?hn(l,{key:a}):l)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function _r(e){if(e.component)return _r(e.component.subTree);if(e.type===ie){const t=xe(e.children)&&Vl(e.children,!1);return t?_r(t):void 0}if(e.type!==st)return e}function ae(e,t){return we(e)?Ze({name:e.name},t,{setup:e}):e}function Wn(){const e=Po();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Sl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function wi(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const io=new WeakMap;function pr(e,t,n,r,o=!1){if(xe(e)){e.forEach((h,z)=>pr(h,t&&(xe(t)?t[z]:t),n,r,o));return}if(jn(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&pr(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?To(r.component):r.el,l=o?null:i,{i:a,r:c}=e,p=t&&t.r,u=a.refs===Be?a.refs={}:a.refs,d=a.setupState,b=Pe(d),m=d===Be?Ba:h=>wi(u,h)?!1:Te(b,h),v=(h,z)=>!(z&&wi(u,z));if(p!=null&&p!==c){if(zi(t),He(p))u[p]=null,m(p)&&(d[p]=null);else if(ut(p)){const h=t;v(p,h.k)&&(p.value=null),h.k&&(u[h.k]=null)}}if(we(c))Pr(c,a,12,[l,u]);else{const h=He(c),z=ut(c);if(h||z){const _=()=>{if(e.f){const y=h?m(c)?d[c]:u[c]:v()||!e.k?c.value:u[e.k];if(o)xe(y)&&Ns(y,i);else if(xe(y))y.includes(i)||y.push(i);else if(h)u[c]=[i],m(c)&&(d[c]=u[c]);else{const C=[i];v(c,e.k)&&(c.value=C),e.k&&(u[e.k]=C)}}else h?(u[c]=l,m(c)&&(d[c]=l)):z&&(v(c,e.k)&&(c.value=l),e.k&&(u[e.k]=l))};if(l){const y=()=>{_(),io.delete(e)};y.id=-1,io.set(e,y),gt(y,n)}else zi(e),_()}}}function zi(e){const t=io.get(e);t&&(t.flags|=8,io.delete(e))}ko().requestIdleCallback;ko().cancelIdleCallback;const jn=e=>!!e.type.__asyncLoader,Io=e=>e.type.__isKeepAlive;function tu(e,t){Il(e,"a",t)}function nu(e,t){Il(e,"da",t)}function Il(e,t,n=dt){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ao(t,r,n),n){let o=n.parent;for(;o&&o.parent;)Io(o.parent.vnode)&&ru(r,t,n,o),o=o.parent}}function ru(e,t,n,r){const o=Ao(t,e,r,!0);Xe(()=>{Ns(r[t],o)},n)}function Ao(e,t,n=dt,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{Ht();const a=Rr(n),c=It(t,n,e,l);return a(),Gt(),c});return r?o.unshift(i):o.push(i),i}}const nn=e=>(t,n=dt)=>{(!Ir||e==="sp")&&Ao(e,(...r)=>t(...r),n)},ou=nn("bm"),qe=nn("m"),su=nn("bu"),Al=nn("u"),Ml=nn("bum"),Xe=nn("um"),iu=nn("sp"),au=nn("rtg"),lu=nn("rtc");function cu(e,t=dt){Ao("ec",e,t)}const $l="components";function Tr(e,t){return Tl($l,e,!0,t)||e}const Pl=Symbol.for("v-ndc");function Qe(e){return He(e)?Tl($l,e,!1)||e:e||Pl}function Tl(e,t,n=!0,r=!1){const o=ot||dt;if(o){const i=o.type;{const a=Uu(i,!1);if(a&&(a===t||a===vt(t)||a===yo(vt(t))))return i}const l=_i(o[e]||i[e],t)||_i(o.appContext[e],t);return!l&&r?i:l}}function _i(e,t){return e&&(e[t]||e[vt(t)]||e[yo(vt(t))])}function ke(e,t,n,r){let o;const i=n,l=xe(e);if(l||He(e)){const a=l&&mn(e);let c=!1,p=!1;a&&(c=!Ct(e),p=Ut(e),e=zo(e)),o=new Array(e.length);for(let u=0,d=e.length;u<d;u++)o[u]=t(c?p?bn(St(e[u])):St(e[u]):e[u],u,void 0,i)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)o=[];else{o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,i)}else if(Fe(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>t(a,c,void 0,i));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,p=a.length;c<p;c++){const u=a[c];o[c]=t(e[u],u,c,i)}}else o=[];return o}function Ge(e,t,n,r,o,i){if(n==null&&(n={}),ot.ce||ot.parent&&jn(ot.parent)&&ot.parent.ce){const p=i!=null&&n.key==null?Ze({},n,{key:i}):n,u=Object.keys(p).length>0;return t!=="default"&&(p.name=t),f(),me(ie,null,[w("slot",p,r&&r())],u?-2:64)}let l=e[t];l&&l._c&&(l._d=!1);const a=tn.length;f();let c;try{const p=l&&Rl(l(n)),u=n.key||i||p&&p.key;c=me(ie,{key:(u&&!$t(u)?u:`_${t}`)+(!p&&r?"_fb":"")},p||(r?r():[]),p&&e._===1?64:-2)}catch(p){for(let u=tn.length;u>a;u--)oi();throw p}finally{l&&l._c&&(l._d=!0)}return!o&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function Rl(e){return e.some(t=>Nn(t)?!(t.type===st||t.type===ie&&!Rl(t.children)):!0)?e:null}const vs=e=>e?ec(e)?To(e):vs(e.parent):null,fr=Ze(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>vs(e.parent),$root:e=>vs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ll(e),$forceUpdate:e=>e.f||(e.f=()=>{Qs(e.update)}),$nextTick:e=>e.n||(e.n=On.bind(e.proxy)),$watch:e=>Kd.bind(e)}),Go=(e,t)=>e!==Be&&!e.__isScriptSetup&&Te(e,t),du={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:i,accessCache:l,type:a,appContext:c}=e;if(t[0]!=="$"){const b=l[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(Go(r,t))return l[t]=1,r[t];if(o!==Be&&Te(o,t))return l[t]=2,o[t];if(Te(i,t))return l[t]=3,i[t];if(n!==Be&&Te(n,t))return l[t]=4,n[t];ys&&(l[t]=0)}}const p=fr[t];let u,d;if(p)return t==="$attrs"&&ct(e.attrs,"get",""),p(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==Be&&Te(n,t))return l[t]=4,n[t];if(d=c.config.globalProperties,Te(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:i}=e;return Go(o,t)?(o[t]=n,!0):r!==Be&&Te(r,t)?(r[t]=n,!0):Te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,props:i,type:l}},a){let c;return!!(n[a]||e!==Be&&a[0]!=="$"&&Te(e,a)||Go(t,a)||Te(i,a)||Te(r,a)||Te(fr,a)||Te(o.config.globalProperties,a)||(c=l.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ci(e){return xe(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ys=!0;function uu(e){const t=Ll(e),n=e.proxy,r=e.ctx;ys=!1,t.beforeCreate&&Si(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:l,watch:a,provide:c,inject:p,created:u,beforeMount:d,mounted:b,beforeUpdate:m,updated:v,activated:h,deactivated:z,beforeDestroy:_,beforeUnmount:y,destroyed:C,unmounted:M,render:R,renderTracked:V,renderTriggered:O,errorCaptured:F,serverPrefetch:L,expose:oe,inheritAttrs:be,components:W,directives:ye,filters:Me}=t;if(p&&pu(p,r,null),l)for(const re in l){const J=l[re];we(J)&&(r[re]=J.bind(n))}if(o){const re=o.call(n,n);Fe(re)&&(e.data=_o(re))}if(ys=!0,i)for(const re in i){const J=i[re],_e=we(J)?J.bind(n,n):we(J.get)?J.get.bind(n,n):Bt,Z=!we(J)&&we(J.set)?J.set.bind(n):Bt,je=ne({get:_e,set:Z});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>je.value,set:ze=>je.value=ze})}if(a)for(const re in a)El(a[re],r,n,re);if(c){const re=we(c)?c.call(n):c;Reflect.ownKeys(re).forEach(J=>{Kr(J,re[J])})}u&&Si(u,e,"c");function ee(re,J){xe(J)?J.forEach(_e=>re(_e.bind(n))):J&&re(J.bind(n))}if(ee(ou,d),ee(qe,b),ee(su,m),ee(Al,v),ee(tu,h),ee(nu,z),ee(cu,F),ee(lu,V),ee(au,O),ee(Ml,y),ee(Xe,M),ee(iu,L),xe(oe))if(oe.length){const re=e.exposed||(e.exposed={});oe.forEach(J=>{Object.defineProperty(re,J,{get:()=>n[J],set:_e=>n[J]=_e,enumerable:!0})})}else e.exposed||(e.exposed={});R&&e.render===Bt&&(e.render=R),be!=null&&(e.inheritAttrs=be),W&&(e.components=W),ye&&(e.directives=ye),L&&Sl(e)}function pu(e,t,n=Bt){xe(e)&&(e=ks(e));for(const r in e){const o=e[r];let i;Fe(o)?"default"in o?i=Nt(o.from||r,o.default,!0):i=Nt(o.from||r):i=Nt(o),ut(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[r]=i}}function Si(e,t,n){It(xe(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function El(e,t,n,r){let o=r.includes(".")?yl(n,r):()=>n[r];if(He(e)){const i=t[e];we(i)&&it(o,i)}else if(we(e))it(o,e.bind(n));else if(Fe(e))if(xe(e))e.forEach(i=>El(i,t,n,r));else{const i=we(e.handler)?e.handler.bind(n):t[e.handler];we(i)&&it(o,i,e)}}function Ll(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,a=i.get(t);let c;return a?c=a:!o.length&&!n&&!r?c=t:(c={},o.length&&o.forEach(p=>ao(c,p,l,!0)),ao(c,t,l)),Fe(t)&&i.set(t,c),c}function ao(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&ao(e,i,n,!0),o&&o.forEach(l=>ao(e,l,n,!0));for(const l in t)if(!(r&&l==="expose")){const a=fu[l]||n&&n[l];e[l]=a?a(e[l],t[l]):t[l]}return e}const fu={data:Ii,props:Ai,emits:Ai,methods:ir,computed:ir,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:ir,directives:ir,watch:bu,provide:Ii,inject:mu};function Ii(e,t){return t?e?function(){return Ze(we(e)?e.call(this,this):e,we(t)?t.call(this,this):t)}:t:e}function mu(e,t){return ir(ks(e),ks(t))}function ks(e){if(xe(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function mt(e,t){return e?[...new Set([].concat(e,t))]:t}function ir(e,t){return e?Ze(Object.create(null),e,t):t}function Ai(e,t){return e?xe(e)&&xe(t)?[...new Set([...e,...t])]:Ze(Object.create(null),Ci(e),Ci(t??{})):t}function bu(e,t){if(!e)return t;if(!t)return e;const n=Ze(Object.create(null),e);for(const r in t)n[r]=mt(e[r],t[r]);return n}function Fl(){return{app:null,config:{isNativeTag:Ba,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gu=0;function hu(e,t){return function(r,o=null){we(r)||(r=Ze({},r)),o!=null&&!Fe(o)&&(o=null);const i=Fl(),l=new WeakSet,a=[];let c=!1;const p=i.app={_uid:gu++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:Wu,get config(){return i.config},set config(u){},use(u,...d){return l.has(u)||(u&&we(u.install)?(l.add(u),u.install(p,...d)):we(u)&&(l.add(u),u(p,...d))),p},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),p},component(u,d){return d?(i.components[u]=d,p):i.components[u]},directive(u,d){return d?(i.directives[u]=d,p):i.directives[u]},mount(u,d,b){if(!c){const m=p._ceVNode||w(r,o);return m.appContext=i,b===!0?b="svg":b===!1&&(b=void 0),e(m,u,b),c=!0,p._container=u,u.__vue_app__=p,To(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(It(a,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return i.provides[u]=d,p},runWithContext(u){const d=Bn;Bn=p;try{return u()}finally{Bn=d}}};return p}}let Bn=null;const xu=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${vt(t)}Modifiers`]||e[`${xn(t)}Modifiers`];function vu(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Be;let o=n;const i=t.startsWith("update:"),l=i&&xu(r,t.slice(7));l&&(l.trim&&(o=n.map(u=>He(u)?u.trim():u)),l.number&&(o=o.map(Gs)));let a,c=r[a=Do(t)]||r[a=Do(vt(t))];!c&&i&&(c=r[a=Do(xn(t))]),c&&It(c,e,6,o);const p=r[a+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,It(p,e,6,o)}}const yu=new WeakMap;function Dl(e,t,n=!1){const r=n?yu:t.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let l={},a=!1;if(!we(e)){const c=p=>{const u=Dl(p,t,!0);u&&(a=!0,Ze(l,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(Fe(e)&&r.set(e,null),null):(xe(i)?i.forEach(c=>l[c]=null):Ze(l,i),Fe(e)&&r.set(e,l),l)}function Mo(e,t){return!e||!ho(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),Te(e,t[0].toLowerCase()+t.slice(1))||Te(e,xn(t))||Te(e,t))}function Mi(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[i],slots:l,attrs:a,emit:c,render:p,renderCache:u,props:d,data:b,setupState:m,ctx:v,inheritAttrs:h}=e,z=oo(e);let _,y;try{if(n.shapeFlag&4){const M=o||r,R=M;_=Vt(p.call(R,M,u,d,m,b,v)),y=a}else{const M=t;_=Vt(M.length>1?M(d,{attrs:a,slots:l,emit:c}):M(d,null)),y=t.props?a:ku(a)}}catch(M){tn.length=0,Co(M,e,1),_=w(st)}let C=_;if(y&&h!==!1){const M=Object.keys(y),{shapeFlag:R}=C;M.length&&R&7&&(i&&M.some(xo)&&(y=wu(y,i)),C=hn(C,y,!1,!0))}if(n.dirs&&(C=hn(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition){const M=So(C.type)&&so(C)||C;gn(M,n.transition)}return _=C,oo(z),_}function Vl(e,t=!0){let n;for(let r=0;r<e.length;r++){const o=e[r];if(Nn(o)){if(o.type!==st||o.children==="v-if"){if(n)return;n=o}}else return}return n}const ku=e=>{let t;for(const n in e)(n==="class"||n==="style"||ho(n))&&((t||(t={}))[n]=e[n]);return t},wu=(e,t)=>{const n={};for(const r in e)(!xo(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function zu(e,t,n){const{props:r,children:o,component:i}=e,{props:l,children:a,patchFlag:c}=t,p=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$i(r,l,p):!!l;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const b=u[d];if(Ol(l,r,b)&&!Mo(p,b))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===l?!1:r?l?$i(r,l,p):!0:!!l;return!1}function $i(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(!Te(e,i)||Ol(t,e,i)&&!Mo(n,i))return!0}return!1}function Ol(e,t,n){const r=e[n],o=t[n];return n==="style"&&Fe(r)&&Fe(o)?!wo(r,o):r!==o}function _u({vnode:e,parent:t,suspense:n},r){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=r,e=o),o===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const jl={},Bl=()=>Object.create(jl),Nl=e=>Object.getPrototypeOf(e)===jl;function Cu(e,t,n,r=!1){const o={},i=Bl();e.propsDefaults=Object.create(null),Hl(e,t,o,i);for(const l in e.propsOptions[0])l in o||(o[l]=void 0);n?e.props=r?o:dl(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Su(e,t,n,r){const{props:o,attrs:i,vnode:{patchFlag:l}}=e,a=Pe(o),[c]=e.propsOptions;let p=!1;if((r||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let b=u[d];if(Mo(e.emitsOptions,b))continue;const m=t[b];if(c)if(Te(i,b))m!==i[b]&&(i[b]=m,p=!0);else{const v=vt(b);o[v]=ws(c,a,v,m,e,!1)}else m!==i[b]&&(i[b]=m,p=!0)}}}else{Hl(e,t,o,i)&&(p=!0);let u;for(const d in a)(!t||!Te(t,d)&&((u=xn(d))===d||!Te(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(o[d]=ws(c,a,d,void 0,e,!0)):delete o[d]);if(i!==a)for(const d in i)(!t||!Te(t,d))&&(delete i[d],p=!0)}p&&Jt(e.attrs,"set","")}function Hl(e,t,n,r){const[o,i]=e.propsOptions;let l=!1,a;if(t)for(let c in t){if(cr(c))continue;const p=t[c];let u;o&&Te(o,u=vt(c))?!i||!i.includes(u)?n[u]=p:(a||(a={}))[u]=p:Mo(e.emitsOptions,c)||(!(c in r)||p!==r[c])&&(r[c]=p,l=!0)}if(i){const c=Pe(n),p=a||Be;for(let u=0;u<i.length;u++){const d=i[u];n[d]=ws(o,c,d,p[d],e,!Te(p,d))}}return l}function ws(e,t,n,r,o,i){const l=e[n];if(l!=null){const a=Te(l,"default");if(a&&r===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&we(c)){const{propsDefaults:p}=o;if(n in p)r=p[n];else{const u=Rr(o);r=p[n]=c.call(null,t),u()}}else r=c;o.ce&&o.ce._setProp(n,r)}l[0]&&(i&&!a?r=!1:l[1]&&(r===""||r===xn(n))&&(r=!0))}return r}const Iu=new WeakMap;function Gl(e,t,n=!1){const r=n?Iu:t.propsCache,o=r.get(e);if(o)return o;const i=e.props,l={},a=[];let c=!1;if(!we(e)){const u=d=>{c=!0;const[b,m]=Gl(d,t,!0);Ze(l,b),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return Fe(e)&&r.set(e,In),In;if(xe(i))for(let u=0;u<i.length;u++){const d=vt(i[u]);Pi(d)&&(l[d]=Be)}else if(i)for(const u in i){const d=vt(u);if(Pi(d)){const b=i[u],m=l[d]=xe(b)||we(b)?{type:b}:Ze({},b),v=m.type;let h=!1,z=!0;if(xe(v))for(let _=0;_<v.length;++_){const y=v[_],C=we(y)&&y.name;if(C==="Boolean"){h=!0;break}else C==="String"&&(z=!1)}else h=we(v)&&v.name==="Boolean";m[0]=h,m[1]=z,(h||Te(m,"default"))&&a.push(d)}}const p=[l,a];return Fe(e)&&r.set(e,p),p}function Pi(e){return e[0]!=="$"&&!cr(e)}const ti=e=>e==="_"||e==="_ctx"||e==="$stable",ni=e=>xe(e)?e.map(Vt):[Vt(e)],Au=(e,t,n)=>{if(t._n)return t;const r=q((...o)=>ni(t(...o)),n);return r._c=!1,r},Ul=(e,t,n)=>{const r=e._ctx;for(const o in e){if(ti(o))continue;const i=e[o];if(we(i))t[o]=Au(o,i,r);else if(i!=null){const l=ni(i);t[o]=()=>l}}},ql=(e,t)=>{const n=ni(t);e.slots.default=()=>n},Wl=(e,t,n)=>{for(const r in t)(n||!ti(r))&&(e[r]=t[r])},Mu=(e,t,n)=>{const r=e.slots=Bl();if(e.vnode.shapeFlag&32){const o=t._;o?(Wl(r,t,n),n&&Ua(r,"_",o,!0)):Ul(t,r)}else t&&ql(e,t)},$u=(e,t,n)=>{const{vnode:r,slots:o}=e;let i=!0,l=Be;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Wl(o,t,n):(i=!t.$stable,Ul(t,o)),l=t}else t&&(ql(e,t),l={default:1});if(i)for(const a in o)!ti(a)&&l[a]==null&&delete o[a]},gt=Lu;function Pu(e){return Tu(e)}function Tu(e,t){const n=ko();n.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:l,createText:a,createComment:c,setText:p,setElementText:u,parentNode:d,nextSibling:b,setScopeId:m=Bt,insertStaticContent:v}=e,h=(k,S,P,E=null,D=null,B=null,U=void 0,K=null,Y=!!S.dynamicChildren)=>{if(k===S)return;k&&!Sn(k,S)&&(E=j(k),ze(k,D,B,!0),k=null),S.patchFlag===-2&&(Y=!1,S.dynamicChildren=null),S.dynamicChildren&&k&&k.dynamicChildren&&k.dynamicChildren.hasOnce&&(S.dynamicChildren===In&&(S.dynamicChildren=[]),S.dynamicChildren.hasOnce=!0);const{type:N,ref:ge,shapeFlag:te}=S;switch(N){case $o:z(k,S,P,E);break;case st:_(k,S,P,E);break;case Yr:k==null&&y(S,P,E,U);break;case ie:W(k,S,P,E,D,B,U,K,Y);break;default:te&1?R(k,S,P,E,D,B,U,K,Y):te&6?ye(k,S,P,E,D,B,U,K,Y):(te&64||te&128)&&N.process(k,S,P,E,D,B,U,K,Y,G)}ge!=null&&D?pr(ge,k&&k.ref,B,S||k,!S):ge==null&&k&&k.ref!=null&&pr(k.ref,null,B,k,!0)},z=(k,S,P,E)=>{if(k==null)r(S.el=a(S.children),P,E);else{const D=S.el=k.el;S.children!==k.children&&p(D,S.children)}},_=(k,S,P,E)=>{k==null?r(S.el=c(S.children||""),P,E):S.el=k.el},y=(k,S,P,E)=>{[k.el,k.anchor]=v(k.children,S,P,E,k.el,k.anchor)},C=({el:k,anchor:S},P,E)=>{let D;for(;k&&k!==S;)D=b(k),r(k,P,E),k=D;r(S,P,E)},M=({el:k,anchor:S})=>{let P;for(;k&&k!==S;)P=b(k),o(k),k=P;o(S)},R=(k,S,P,E,D,B,U,K,Y)=>{if(S.type==="svg"?U="svg":S.type==="math"&&(U="mathml"),k==null)V(S,P,E,D,B,U,K,Y);else{const N=k.el&&k.el._isVueCE?k.el:null;try{N&&N._beginPatch(),L(k,S,D,B,U,K,Y)}finally{N&&N._endPatch()}}},V=(k,S,P,E,D,B,U,K)=>{let Y,N;const{props:ge,shapeFlag:te,transition:ue,dirs:he}=k;if(Y=k.el=l(k.type,B,ge&&ge.is,ge),te&8?u(Y,k.children):te&16&&F(k.children,Y,null,E,D,Uo(k,B),U,K),he&&yn(k,null,E,"created"),O(Y,k,k.scopeId,U,E),ge){for(const De in ge)De!=="value"&&!cr(De)&&i(Y,De,null,ge[De],B,E);"value"in ge&&i(Y,"value",null,ge.value,B),(N=ge.onVnodeBeforeMount)&&Rt(N,E,k)}he&&yn(k,null,E,"beforeMount");const Se=Ru(D,ue);Se&&ue.beforeEnter(Y),r(Y,S,P),((N=ge&&ge.onVnodeMounted)||Se||he)&&gt(()=>{try{N&&Rt(N,E,k),Se&&ue.enter(Y),he&&yn(k,null,E,"mounted")}finally{}},D)},O=(k,S,P,E,D)=>{if(P&&m(k,P),E)for(let B=0;B<E.length;B++)m(k,E[B]);if(D){let B=D.subTree;if(S===B||Kl(B.type)&&(B.ssContent===S||B.ssFallback===S)){const U=D.vnode;O(k,U,U.scopeId,U.slotScopeIds,D.parent)}}},F=(k,S,P,E,D,B,U,K,Y=0)=>{for(let N=Y;N<k.length;N++){const ge=k[N]=K?Qt(k[N]):Vt(k[N]);h(null,ge,S,P,E,D,B,U,K)}},L=(k,S,P,E,D,B,U)=>{const K=S.el=k.el;let{patchFlag:Y,dynamicChildren:N,dirs:ge}=S;Y|=k.patchFlag&16;const te=k.props||Be,ue=S.props||Be;let he;if(P&&kn(P,!1),(he=ue.onVnodeBeforeUpdate)&&Rt(he,P,S,k),ge&&yn(S,k,P,"beforeUpdate"),P&&kn(P,!0),N&&(!k.dynamicChildren||k.dynamicChildren.length!==N.length)&&(Y=0,U=!1,N=null),(te.innerHTML&&ue.innerHTML==null||te.textContent&&ue.textContent==null)&&u(K,""),N?oe(k.dynamicChildren,N,K,P,E,Uo(S,D),B):U||J(k,S,K,null,P,E,Uo(S,D),B,!1),Y>0){if(Y&16)be(K,te,ue,P,D);else if(Y&2&&te.class!==ue.class&&i(K,"class",null,ue.class,D),Y&4&&i(K,"style",te.style,ue.style,D),Y&8){const Se=S.dynamicProps;for(let De=0;De<Se.length;De++){const Ee=Se[De],We=te[Ee],Je=ue[Ee];(Je!==We||Ee==="value")&&i(K,Ee,We,Je,D,P)}}Y&1&&k.children!==S.children&&u(K,S.children)}else!U&&N==null&&be(K,te,ue,P,D);((he=ue.onVnodeUpdated)||ge)&&gt(()=>{he&&Rt(he,P,S,k),ge&&yn(S,k,P,"updated")},E)},oe=(k,S,P,E,D,B,U)=>{for(let K=0;K<S.length;K++){const Y=k[K],N=S[K],ge=Y.el||zs(Y),te=ge&&(Y.type===ie||!Sn(Y,N)||Y.shapeFlag&198)?d(ge):P;h(Y,N,te,null,E,D,B,U,!0)}},be=(k,S,P,E,D)=>{if(S!==P){if(S!==Be)for(const B in S)!cr(B)&&!(B in P)&&i(k,B,S[B],null,D,E);for(const B in P){if(cr(B))continue;const U=P[B],K=S[B];U!==K&&B!=="value"&&i(k,B,K,U,D,E)}"value"in P&&i(k,"value",S.value,P.value,D)}},W=(k,S,P,E,D,B,U,K,Y)=>{const N=S.el=k?k.el:a(""),ge=S.anchor=k?k.anchor:a("");let{patchFlag:te,dynamicChildren:ue,slotScopeIds:he}=S;he&&(K=K?K.concat(he):he),k==null?(r(N,P,E),r(ge,P,E),F(S.children||[],P,ge,D,B,U,K,Y)):te>0&&te&64&&ue&&k.dynamicChildren&&k.dynamicChildren.length===ue.length?(oe(k.dynamicChildren,ue,P,D,B,U,K),(S.key!=null||D&&S===D.subTree)&&ri(k,S,!0)):J(k,S,P,ge,D,B,U,K,Y)},ye=(k,S,P,E,D,B,U,K,Y)=>{S.slotScopeIds=K,k==null?S.shapeFlag&512?D.ctx.activate(S,P,E,U,Y):Me(S,P,E,D,B,U,Y):Oe(k,S,Y)},Me=(k,S,P,E,D,B,U)=>{const K=k.component=ju(k,E,D);if(Io(k)&&(K.ctx.renderer=G),Bu(K,!1,U),K.asyncDep){if(D&&D.registerDep(K,ee,U,B),!k.el){const Y=K.subTree=w(st);_(null,Y,S,P),k.placeholder=Y.el}}else ee(K,k,S,P,D,B,U)},Oe=(k,S,P)=>{const E=S.component=k.component;if(zu(k,S,P))if(E.asyncDep&&!E.asyncResolved){S.el=k.el,S.placeholder=k.placeholder,re(E,S,P);return}else E.next=S,E.update();else S.el=k.el,S.placeholder=k.placeholder,E.vnode=S},ee=(k,S,P,E,D,B,U)=>{const K=()=>{if(k.isMounted){let{next:te,bu:ue,u:he,parent:Se,vnode:De}=k;{const pt=Xl(k);if(pt){te&&(te.el=De.el,re(k,te,U)),pt.asyncDep.then(()=>{gt(()=>{k.isUnmounted||N()},D)});return}}let Ee=te,We;kn(k,!1),te?(te.el=De.el,re(k,te,U)):te=De,ue&&Xr(ue),(We=te.props&&te.props.onVnodeBeforeUpdate)&&Rt(We,Se,te,De),kn(k,!0);const Je=Mi(k),yt=k.subTree;k.subTree=Je,h(yt,Je,d(yt.el),j(yt),k,D,B),te.el=Je.el,Ee===null&&_u(k,Je.el),he&&gt(he,D),(We=te.props&&te.props.onVnodeUpdated)&&gt(()=>Rt(We,Se,te,De),D)}else{let te;const{el:ue,props:he}=S,{bm:Se,m:De,parent:Ee,root:We,type:Je}=k,yt=jn(S);kn(k,!1),Se&&Xr(Se),!yt&&(te=he&&he.onVnodeBeforeMount)&&Rt(te,Ee,S),kn(k,!0);{We.ce&&We.ce._hasShadowRoot()&&We.ce._injectChildStyle(Je,k.parent?k.parent.type:void 0);const pt=k.subTree=Mi(k);h(null,pt,P,E,k,D,B),S.el=pt.el}if(De&&gt(De,D),!yt&&(te=he&&he.onVnodeMounted)){const pt=S;gt(()=>Rt(te,Ee,pt),D)}(S.shapeFlag&256||Ee&&jn(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&k.a&&gt(k.a,D),k.isMounted=!0,S=P=E=null}};k.scope.on();const Y=k.effect=new Ka(K);k.scope.off();const N=k.update=Y.run.bind(Y),ge=k.job=Y.runIfDirty.bind(Y);ge.i=k,ge.id=k.uid,Y.scheduler=()=>Qs(ge),kn(k,!0),N()},re=(k,S,P)=>{S.component=k;const E=k.vnode.props;k.vnode=S,k.next=null,Su(k,S.props,E,P),$u(k,S.children,P),Ht(),bl(k),Gt()},J=(k,S,P,E,D,B,U,K,Y=!1)=>{const N=k&&k.children,ge=k?k.shapeFlag:0,te=S.children,{patchFlag:ue,shapeFlag:he}=S;if(ue>0){if(ue&128){Z(N,te,P,E,D,B,U,K,Y);return}else if(ue&256){_e(N,te,P,E,D,B,U,K,Y);return}}he&8?(ge&16&&Ie(N,D,B),te!==N&&u(P,te)):ge&16?he&16?Z(N,te,P,E,D,B,U,K,Y):Ie(N,D,B,!0):(ge&8&&u(P,""),he&16&&F(te,P,E,D,B,U,K,Y))},_e=(k,S,P,E,D,B,U,K,Y)=>{k=k||In,S=S||In;const N=k.length,ge=S.length,te=Math.min(N,ge);let ue;for(ue=0;ue<te;ue++){const he=S[ue]=Y?Qt(S[ue]):Vt(S[ue]);h(k[ue],he,P,null,D,B,U,K,Y)}N>ge?Ie(k,D,B,!0,!1,te):F(S,P,E,D,B,U,K,Y,te)},Z=(k,S,P,E,D,B,U,K,Y)=>{let N=0;const ge=S.length;let te=k.length-1,ue=ge-1;for(;N<=te&&N<=ue;){const he=k[N],Se=S[N]=Y?Qt(S[N]):Vt(S[N]);if(Sn(he,Se))h(he,Se,P,null,D,B,U,K,Y);else break;N++}for(;N<=te&&N<=ue;){const he=k[te],Se=S[ue]=Y?Qt(S[ue]):Vt(S[ue]);if(Sn(he,Se))h(he,Se,P,null,D,B,U,K,Y);else break;te--,ue--}if(N>te){if(N<=ue){const he=ue+1,Se=he<ge?S[he].el:E;for(;N<=ue;)h(null,S[N]=Y?Qt(S[N]):Vt(S[N]),P,Se,D,B,U,K,Y),N++}}else if(N>ue)for(;N<=te;)ze(k[N],D,B,!0),N++;else{const he=N,Se=N,De=new Map;for(N=Se;N<=ue;N++){const nt=S[N]=Y?Qt(S[N]):Vt(S[N]);nt.key!=null&&De.set(nt.key,N)}let Ee,We=0;const Je=ue-Se+1;let yt=!1,pt=0;const qt=new Array(Je);for(N=0;N<Je;N++)qt[N]=0;for(N=he;N<=te;N++){const nt=k[N];if(We>=Je){ze(nt,D,B,!0);continue}let ft;if(nt.key!=null)ft=De.get(nt.key);else for(Ee=Se;Ee<=ue;Ee++)if(qt[Ee-Se]===0&&Sn(nt,S[Ee])){ft=Ee;break}ft===void 0?ze(nt,D,B,!0):(qt[ft-Se]=N+1,ft>=pt?pt=ft:yt=!0,h(nt,S[ft],P,null,D,B,U,K,Y),We++)}const Er=yt?Eu(qt):In;for(Ee=Er.length-1,N=Je-1;N>=0;N--){const nt=Se+N,ft=S[nt],Lr=S[nt+1],Yn=nt+1<ge?Lr.el||zs(Lr):E;qt[N]===0?h(null,ft,P,Yn,D,B,U,K,Y):yt&&(Ee<0||N!==Er[Ee]?je(ft,P,Yn,2):Ee--)}}},je=(k,S,P,E,D=null)=>{const{el:B,type:U,transition:K,children:Y,shapeFlag:N}=k;if(N&6){je(k.component.subTree,S,P,E);return}if(N&128){k.suspense.move(S,P,E);return}if(N&64){U.move(k,S,P,G);return}if(U===ie){r(B,S,P);for(let te=0;te<Y.length;te++)je(Y[te],S,P,E);r(k.anchor,S,P);return}if(U===Yr){C(k,S,P);return}if(E!==2&&N&1&&K)if(E===0)K.persisted&&!B[_t]?r(B,S,P):(K.beforeEnter(B),r(B,S,P),gt(()=>K.enter(B),D));else{const{leave:te,delayLeave:ue,afterLeave:he}=K,Se=()=>{k.ctx.isUnmounted?o(B):r(B,S,P)},De=()=>{const Ee=B._isLeaving||!!B[_t];B._isLeaving&&B[_t](!0),K.persisted&&!Ee?Se():te(B,()=>{Se(),he&&he()})};ue?ue(B,Se,De):De()}else r(B,S,P)},ze=(k,S,P,E=!1,D=!1)=>{const{type:B,props:U,ref:K,children:Y,dynamicChildren:N,shapeFlag:ge,patchFlag:te,dirs:ue,cacheIndex:he,memo:Se}=k;if((te===-2||N&&N.hasOnce)&&(D=!1),K!=null&&(Ht(),pr(K,null,P,k,!0),Gt()),he!=null&&(!k.ctx||k.ctx===S)&&(S.renderCache[he]=void 0),ge&256){S.ctx.deactivate(k);return}const De=ge&1&&ue,Ee=!jn(k);let We;if(Ee&&(We=U&&U.onVnodeBeforeUnmount)&&Rt(We,S,k),ge&6)$e(k.component,P,E);else{if(ge&128){k.suspense.unmount(P,E);return}De&&yn(k,null,S,"beforeUnmount"),ge&64?k.type.remove(k,S,P,G,E):N&&!N.hasOnce&&(B!==ie||te>0&&te&64)?Ie(N,S,P,!1,!0):(B===ie&&te&384||!D&&ge&16)&&Ie(Y,S,P),E&&lt(k)}const Je=Se!=null&&he==null;(Ee&&(We=U&&U.onVnodeUnmounted)||De||Je)&&gt(()=>{We&&Rt(We,S,k),De&&yn(k,null,S,"unmounted"),Je&&(k.el=null)},P)},lt=k=>{const{type:S,el:P,anchor:E,transition:D}=k,B=S===ie;if(B&&!D){Ue(P,E);return}if(S===Yr){M(k),D&&!D.persisted&&D.afterLeave&&D.afterLeave();return}const U=B?_r(k):k,K=()=>{B?d(P)&&Ue(P,E):o(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(U&&U.shapeFlag&1&&D&&!D.persisted){const{leave:Y,delayLeave:N}=D,ge=U.el,te=()=>Y(ge,K);N?N(ge,K,te):te()}else K()},Ue=(k,S)=>{let P;for(;k!==S;)P=b(k),o(k),k=P;o(S)},$e=(k,S,P)=>{const{bum:E,scope:D,job:B,subTree:U,um:K,m:Y,a:N}=k;Ti(Y),Ti(N),E&&Xr(E),D.stop(),B?(B.flags|=8,ze(U,k,S,P)):k.vnode.el&&U&&(U.transition=k.vnode.transition,ze(U,k,S,P)),K&&gt(K,S),gt(()=>{k.isUnmounted=!0},S)},Ie=(k,S,P,E=!1,D=!1,B=0)=>{for(let U=B;U<k.length;U++)ze(k[U],S,P,E,D)},j=k=>{if(k.shapeFlag&6)return j(k.component.subTree);if(k.shapeFlag&128)return k.suspense.next();const S=b(k.anchor||k.el),P=S&&S[kl];return P?b(P):S},se=(k,S,P)=>{const E=k&&S._vnode?void 0:k&&k.component?k.component.uid:Ou();qd(()=>{k==null?S._vnode&&ze(S._vnode,null,null,!0):h(S._vnode||null,k,S,null,null,null,P),S._vnode=k},E)},G={p:h,um:ze,m:je,r:lt,mt:Me,mc:F,pc:J,pbc:oe,n:j,o:e};return{render:se,hydrate:void 0,createApp:hu(se)}}function Uo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function kn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ru(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ri(e,t,n=!1){const r=e.children,o=t.children;if(xe(r)&&xe(o))for(let i=0;i<r.length;i++){const l=r[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=Qt(o[i]),a.el=l.el),!n&&a.patchFlag!==-2&&ri(l,a)),a.type===$o&&(a.patchFlag===-1&&(a=o[i]=Qt(a)),a.el=l.el),a.type===st&&!a.el&&(a.el=l.el)}}function Eu(e){const t=e.slice(),n=[0];let r,o,i,l,a;const c=e.length;for(r=0;r<c;r++){const p=e[r];if(p!==0){if(o=n[n.length-1],e[o]<p){t[r]=o,n.push(r);continue}for(i=0,l=n.length-1;i<l;)a=i+l>>1,e[n[a]]<p?i=a+1:l=a;p<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}function Xl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Xl(t)}function Ti(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function zs(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?zs(t.subTree):null}const Kl=e=>e.__isSuspense;function Lu(e,t){t&&t.pendingBranch?xe(e)?t.effects.push(...e):t.effects.push(e):Ud(e)}const ie=Symbol.for("v-fgt"),$o=Symbol.for("v-txt"),st=Symbol.for("v-cmt"),Yr=Symbol.for("v-stc"),tn=[];let wt=null;function f(e=!1){tn.push(wt=e?null:[])}function oi(){tn.pop(),wt=tn[tn.length-1]||null}let Cr=1;function lo(e,t=!1){Cr+=e,e<0&&wt&&t&&(wt.hasOnce=!0)}function Yl(e){return e.dynamicChildren=Cr>0?wt||In:null,oi(),Cr>0&&wt&&wt.push(e),e}function g(e,t,n,r,o,i){return Yl(s(e,t,n,r,o,i,!0))}function me(e,t,n,r,o){return Yl(w(e,t,n,r,o,!0))}function Nn(e){return e?e.__v_isVNode===!0:!1}function Sn(e,t){return e.type===t.type&&e.key===t.key}const Zl=({key:e})=>e??null,Zr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?He(e)||ut(e)||we(e)?{i:ot,r:e,k:t,f:!!n}:e:null);function s(e,t=null,n=null,r=0,o=null,i=e===ie?0:1,l=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zl(t),ref:t&&Zr(t),scopeId:xl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ot};return a?(co(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),Cr>0&&!l&&wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&wt.push(c),c}const w=Fu;function Fu(e,t=null,n=null,r=0,o=null,i=!1){if((!e||e===Pl)&&(e=st),Nn(e)){const a=hn(e,t,!0);return n&&co(a,n),Cr>0&&!i&&wt&&(a.shapeFlag&6?wt[wt.indexOf(e)]=a:wt.push(a)),a.patchFlag=-2,a}if(qu(e)&&(e=e.__vccOpts),t){t=Du(t);let{class:a,style:c}=t;a&&!He(a)&&(t.class=A(a)),Fe(c)&&(Zs(c)&&!xe(c)&&(c=Ze({},c)),t.style=ve(c))}const l=He(e)?1:Kl(e)?128:So(e)?64:Fe(e)?4:we(e)?2:0;return s(e,t,n,r,o,l,i,!0)}function Du(e){return e?Zs(e)||Nl(e)?Ze({},e):e:null}function hn(e,t,n=!1,r=!1){const{props:o,ref:i,patchFlag:l,children:a,transition:c}=e,p=t?Ql(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Zl(p),ref:t&&t.ref?n&&i?xe(i)?i.concat(Zr(t)):[i,Zr(t)]:Zr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ie?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&hn(e.ssContent),ssFallback:e.ssFallback&&hn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&gn(u,c.clone(u)),u}function Ae(e=" ",t=0){return w($o,null,e,t)}function _s(e,t){const n=w(Yr,null,e);return n.staticCount=t,n}function H(e="",t=!1){return t?(f(),me(st,null,e)):w(st,null,e)}function Vt(e){return e==null||typeof e=="boolean"?w(st):xe(e)?w(ie,null,e.slice()):Nn(e)?Qt(e):w($o,null,String(e))}function Qt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:hn(e)}function co(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(xe(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),co(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Nl(t)?t._ctx=ot:o===3&&ot&&(ot.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(we(t)){if(r&65){co(e,{default:t});return}t={default:t,_ctx:ot},n=32}else t=String(t),r&64?(n=16,t=[Ae(t)]):n=8;e.children=t,e.shapeFlag|=n}function Ql(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=A([t.class,r.class]));else if(o==="style")t.style=ve([t.style,r.style]);else if(ho(o)){const i=t[o],l=r[o];l&&i!==l&&!(xe(i)&&i.includes(l))?t[o]=i?[].concat(i,l):l:l==null&&i==null&&!xo(o)&&(t[o]=l)}else o!==""&&(t[o]=r[o])}return t}function Rt(e,t,n,r=null){It(e,t,7,[n,r])}const Vu=Fl();let Jl=0;function Ou(){return Jl}function ju(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||Vu,i={uid:Jl++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gl(r,o),emitsOptions:Dl(r,o),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:r.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=vu.bind(null,i),e.ce&&e.ce(i),i}let dt=null;const Po=()=>dt||ot;let uo,Sr;{const e=ko(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),i=>{o.length>1?o.forEach(l=>l(i)):o[0](i)}};uo=t("__VUE_INSTANCE_SETTERS__",n=>dt=n),Sr=t("__VUE_SSR_SETTERS__",n=>Ir=n)}const Rr=e=>{const t=dt;return uo(e),e.scope.on(),()=>{e.scope.off(),uo(t)}},Ri=()=>{dt&&dt.scope.off(),uo(null)};function ec(e){return e.vnode.shapeFlag&4}let Ir=!1;function Bu(e,t=!1,n=!1){t&&Sr(t);const{props:r,children:o}=e.vnode,i=ec(e);Cu(e,r,i,t),Mu(e,o,n||t);const l=i?Nu(e,t):void 0;return t&&Sr(!1),l}function Nu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,du);const{setup:r}=n;if(r){Ht();const o=e.setupContext=r.length>1?Gu(e):null,i=Rr(e),l=Pr(r,e,0,[e.props,o]),a=Na(l);if(Gt(),i(),(a||e.sp)&&!jn(e)&&Sl(e),a){if(l.then(Ri,Ri),t)return l.then(c=>{Sr(!0);try{Ei(e,c,t)}finally{Sr(!1)}}).catch(c=>{Co(c,e,0)});e.asyncDep=l}else Ei(e,l)}else tc(e)}function Ei(e,t,n){we(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Fe(t)&&(e.setupState=pl(t)),tc(e)}function tc(e,t,n){const r=e.type;e.render||(e.render=r.render||Bt);{const o=Rr(e);Ht();try{uu(e)}finally{Gt(),o()}}}const Hu={get(e,t){return ct(e,"get",""),e[t]}};function Gu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Hu),slots:e.slots,emit:e.emit,expose:t}}function To(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(pl(Ld(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fr)return fr[n](e)},has(t,n){return n in t||n in fr}})):e.proxy}function Uu(e,t=!0){return we(e)?e.displayName||e.name:e.name||t&&e.__name}function qu(e){return we(e)&&"__vccOpts"in e}const ne=(e,t)=>jd(e,t,Ir);function Hn(e,t,n){try{lo(-1);const r=arguments.length;return r===2?Fe(t)&&!xe(t)?Nn(t)?w(e,null,[t]):w(e,t):w(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Nn(n)&&(n=[n]),w(e,t,n))}finally{lo(1)}}const Wu="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cs;const Li=typeof window<"u"&&window.trustedTypes;if(Li)try{Cs=Li.createPolicy("vue",{createHTML:e=>e})}catch{}const nc=Cs?e=>Cs.createHTML(e):e=>e,Xu="http://www.w3.org/2000/svg",Ku="http://www.w3.org/1998/Math/MathML",Zt=typeof document<"u"?document:null,Fi=Zt&&Zt.createElement("template"),Yu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?Zt.createElementNS(Xu,e):t==="mathml"?Zt.createElementNS(Ku,e):n?Zt.createElement(e,{is:n}):Zt.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Zt.createTextNode(e),createComment:e=>Zt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Zt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const l=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{Fi.innerHTML=nc(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Fi.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},rn="transition",Jn="animation",Gn=Symbol("_vtc"),rc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},oc=Ze({},zl,rc),Zu=e=>(e.displayName="Transition",e.props=oc,e),at=Zu((e,{slots:t})=>Hn(eu,sc(e),t)),wn=(e,t=[])=>{xe(e)?e.forEach(n=>n(...t)):e&&e(...t)},Di=e=>e?xe(e)?e.some(t=>t.length>1):e.length>1:!1;function sc(e){const t={};for(const W in e)W in rc||(t[W]=e[W]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:i=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:p=l,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:b=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,v=Qu(o),h=v&&v[0],z=v&&v[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:C,onLeave:M,onLeaveCancelled:R,onBeforeAppear:V=_,onAppear:O=y,onAppearCancelled:F=C}=t,L=(W,ye,Me,Oe)=>{W._enterCancelled=Oe,ln(W,ye?u:a),ln(W,ye?p:l),Me&&Me()},oe=(W,ye)=>{W._isLeaving=!1,ln(W,d),ln(W,m),ln(W,b),ye&&ye()},be=W=>(ye,Me)=>{const Oe=W?O:y,ee=()=>L(ye,W,Me);wn(Oe,[ye,ee]),Vi(()=>{ln(ye,W?c:i),Lt(ye,W?u:a),Di(Oe)||Oi(ye,r,h,ee)})};return Ze(t,{onBeforeEnter(W){wn(_,[W]),Lt(W,i),Lt(W,l)},onBeforeAppear(W){wn(V,[W]),Lt(W,c),Lt(W,p)},onEnter:be(!1),onAppear:be(!0),onLeave(W,ye){W._isLeaving=!0;const Me=()=>oe(W,ye);Lt(W,d),W._enterCancelled?(Lt(W,b),Ss(W)):(Ss(W),Lt(W,b)),Vi(()=>{W._isLeaving&&(ln(W,d),Lt(W,m),Di(M)||Oi(W,r,z,Me))}),wn(M,[W,Me])},onEnterCancelled(W){L(W,!1,void 0,!0),wn(C,[W])},onAppearCancelled(W){L(W,!0,void 0,!0),wn(F,[W])},onLeaveCancelled(W){oe(W),wn(R,[W])}})}function Qu(e){if(e==null)return null;if(Fe(e))return[qo(e.enter),qo(e.leave)];{const t=qo(e);return[t,t]}}function qo(e){return ld(e)}function Lt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Gn]||(e[Gn]=new Set)).add(t)}function ln(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Gn];n&&(n.delete(t),n.size||(e[Gn]=void 0))}function Vi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ju=0;function Oi(e,t,n,r){const o=e._endId=++Ju,i=()=>{o===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:l,timeout:a,propCount:c}=ic(e,t);if(!l)return r();const p=l+"end";let u=0;const d=()=>{e.removeEventListener(p,b),i()},b=m=>{m.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),e.addEventListener(p,b)}function ic(e,t){const n=window.getComputedStyle(e),r=v=>(n[v]||"").split(", "),o=r(`${rn}Delay`),i=r(`${rn}Duration`),l=ji(o,i),a=r(`${Jn}Delay`),c=r(`${Jn}Duration`),p=ji(a,c);let u=null,d=0,b=0;t===rn?l>0&&(u=rn,d=l,b=i.length):t===Jn?p>0&&(u=Jn,d=p,b=c.length):(d=Math.max(l,p),u=d>0?l>p?rn:Jn:null,b=u?u===rn?i.length:c.length:0);const m=u===rn&&/\b(?:transform|all)(?:,|$)/.test(r(`${rn}Property`).toString());return{type:u,timeout:d,propCount:b,hasTransform:m}}function ji(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Bi(n)+Bi(e[r])))}function Bi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ss(e){return(e?e.ownerDocument:document).body.offsetHeight}function ep(e,t,n){const r=e[Gn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const po=Symbol("_vod"),si=Symbol("_vsh"),Wo={name:"show",beforeMount(e,{value:t},{transition:n}){e[po]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):er(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),er(e,!0),r.enter(e)):r.leave(e,()=>{er(e,!1)}):er(e,t))},beforeUnmount(e,{value:t}){er(e,t)}};function er(e,t){e.style.display=t?e[po]:"none",e[si]=!t}const tp=Symbol(""),np=/(?:^|;)\s*display\s*:/;function rp(e,t,n){const r=e.style,o=He(n);let i=!1;if(n&&!o){if(t)if(He(t))for(const l of t.split(";")){const a=l.slice(0,l.indexOf(":")).trim();n[a]==null&&ar(r,a,"")}else for(const l in t)n[l]==null&&ar(r,l,"");for(const l in n){l==="display"&&(i=!0);const a=n[l];a!=null?sp(e,l,!He(t)&&t?t[l]:void 0,a)||ar(r,l,a):ar(r,l,"")}}else if(o){if(t!==n){const l=r[tp];l&&(n+=";"+l),r.cssText=n,i=np.test(n)}}else t&&e.removeAttribute("style");po in e&&((!o||t!==n)&&(e[po]=i?r.display:""),e[si]&&(r.display="none"))}const Br=/\s*!important$/;function ar(e,t,n){if(xe(n))n.forEach(r=>ar(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))Br.test(n)?e.setProperty(t,n.replace(Br,""),"important"):e.setProperty(t,n);else{const r=op(e,t);Br.test(n)?e.setProperty(xn(r),n.replace(Br,""),"important"):e[r]=n}}const Ni=["Webkit","Moz","ms"],Xo={};function op(e,t){const n=Xo[t];if(n)return n;let r=vt(t);if(r!=="filter"&&r in e)return Xo[t]=r;r=yo(r);for(let o=0;o<Ni.length;o++){const i=Ni[o]+r;if(i in e)return Xo[t]=i}return t}function sp(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&He(r)&&n===r}const Hi="http://www.w3.org/1999/xlink";function Gi(e,t,n,r,o,i=md(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Hi,t.slice(6,t.length)):e.setAttributeNS(Hi,t,n):n==null||i&&!qa(n)?e.removeAttribute(t):e.setAttribute(t,i?"":$t(n)?String(n):n)}function Ui(e,t,n,r,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?nc(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=qa(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(o||t)}function En(e,t,n,r){e.addEventListener(t,n,r)}function ip(e,t,n,r){e.removeEventListener(t,n,r)}const qi=Symbol("_vei");function ap(e,t,n,r,o=null){const i=e[qi]||(e[qi]={}),l=i[t];if(r&&l)l.value=r;else{const[a,c]=dp(t);if(r){const p=i[t]=fp(r,o);En(e,a,p,c)}else l&&(ip(e,a,l,c),i[t]=void 0)}}const lp=/(Once|Passive|Capture)$/,cp=/^on:?(?:Once|Passive|Capture)$/;function dp(e){let t,n;for(;(n=e.match(lp))&&!cp.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):xn(e.slice(2)),t]}let Ko=0;const up=Promise.resolve(),pp=()=>Ko||(up.then(()=>Ko=0),Ko=Date.now());function fp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const o=n.value;if(xe(o)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const l=o.slice(),a=[r];for(let c=0;c<l.length&&!r._stopped;c++){const p=l[c];p&&It(p,t,5,a)}}else It(o,t,5,[r])};return n.value=e,n.attached=pp(),n}const Wi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,mp=(e,t,n,r,o,i)=>{const l=o==="svg";t==="class"?ep(e,r,l):t==="style"?rp(e,n,r):ho(t)?xo(t)||ap(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):bp(e,t,r,l))?(Ui(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Gi(e,t,r,l,i,t!=="value")):e._isVueCE&&(gp(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!He(r)))?Ui(e,vt(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Gi(e,t,r,l))};function bp(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Wi(t)&&we(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Wi(t)&&He(n)?!1:t in e}function gp(e,t){const n=e._def.props;if(!n)return!1;const r=vt(t);return Array.isArray(n)?n.some(o=>vt(o)===r):Object.keys(n).some(o=>vt(o)===r)}const ac=new WeakMap,lc=new WeakMap,fo=Symbol("_moveCb"),Xi=Symbol("_enterCb"),Is=new WeakMap,hp=e=>(delete e.props.mode,e),xp=hp({name:"TransitionGroup",props:Ze({},oc,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Po(),r=wl();let o,i,l,a;const c=()=>(a===void 0&&(a=o.length>0&&Cp(o[0].el,n.vnode.el,Ki(e))),a);return Al(()=>{if(Is.delete(n),!c()){o=[],l=void 0;return}const p=Ki(e);o.forEach(vp);const u=l&&_p(l,n.vnode.el);l=void 0,o.forEach(b=>yp(b,u));const d=o.filter(kp);Ss(n.vnode.el),d.forEach(b=>{const m=b.el,v=m.style;Lt(m,p),v.transform=v.webkitTransform=v.transitionDuration="";const h=m[fo]=z=>{z&&z.target!==m||(!z||z.propertyName.endsWith("transform"))&&(m.removeEventListener("transitionend",h),m[fo]=null,ln(m,p))};m.addEventListener("transitionend",h)}),o=[]}),()=>{const p=Pe(e),u=sc(p);let d=p.tag||ie;if(o=[],a=void 0,i)for(let b=0;b<i.length;b++){const m=i[b];m.el&&m.el instanceof Element&&!m.el[si]&&(o.push(m),gn(m,zr(m,u,r,n)),ac.set(m,Ro(m.el)))}i=t.default?ei(t.default()):[];for(let b=0;b<i.length;b++){const m=i[b];m.key!=null&&gn(m,zr(m,u,r,n))}return o.length&&(l=wp(n),Is.set(n,c)),w(d,null,i)}}}),cc=xp;function vp(e){const t=e.el;t[fo]&&t[fo](),t[Xi]&&t[Xi]()}function Ki(e){return e.moveClass||`${e.name||"v"}-move`}function yp(e,t){lc.set(e,Ro(e.el,t))}function kp(e){const t=ac.get(e),n=lc.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const i=e.el,l=i.style,a=i.getBoundingClientRect();let c=1,p=1;return i.offsetWidth&&(c=a.width/i.offsetWidth),i.offsetHeight&&(p=a.height/i.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(p)||p===0)&&(p=1),Math.abs(c-1)<.01&&(c=1),Math.abs(p-1)<.01&&(p=1),l.transform=l.webkitTransform=`translate(${r/c}px,${o/p}px)`,l.transitionDuration="0s",e}}function Ro(e,t){const n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function wp(e){let t;for(let n=e.parent;n;n=n.parent){const r=Is.get(n);if(r){const o=zp(n.vnode.el,e.vnode.el);o&&(t||(t=[])).push(Ze(Ro(o),{item:o,willMove:r}))}}return t}function zp(e,t){const n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function _p(e,t){const n=e.find(r=>r.willMove()&&r.item.contains(t));return n&&Ro(n.item,n)}function Cp(e,t,n){const r=e.cloneNode(),o=e[Gn];o&&o.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(r);const{hasTransform:l}=ic(r);return i.removeChild(r),l}const Yi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return xe(t)?n=>Xr(t,n):t};function Sp(e){e.target.composing=!0}function Zi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Nr=Symbol("_assign"),Hr=Symbol("_initialValue");function Yo(e,t,n){return t&&(e=e.trim()),n&&(e=Gs(e)),e}const Eo={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e.parentNode&&(e.type==="text"?e[Hr]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Hr]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Nr]=Yi(o);const i=r||o.props&&o.props.type==="number";En(e,t?"change":"input",l=>{l.target.composing||e[Nr](Yo(e.value,n,i))}),(n||i)&&En(e,"change",()=>{e.value=Yo(e.value,n,i)}),t||(En(e,"compositionstart",Sp),En(e,"compositionend",Zi),En(e,"change",Zi))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const o=t??"",i=e[Hr];delete e[Hr],i!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==i?e[Nr](Yo(e.value,n,r)):e.value=o},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:o,number:i}},l){if(e[Nr]=Yi(l),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?Gs(e.value):e.value,c=t??"";if(a===c)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(r&&t===n||o&&e.value.trim()===c)||(e.value=c)}},Ip=["ctrl","shift","alt","meta"],Ap={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ip.some(n=>e[`${n}Key`]&&!t.includes(n))},kt=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((o,...i)=>{for(let l=0;l<t.length;l++){const a=Ap[t[l]];if(a&&a(o,t))return}return e(o,...i)}))},Mp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Qi=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(o=>{if(!("key"in o))return;const i=xn(o.key);if(t.some(l=>l===i||Mp[l]===i))return e(o)}))},$p=Ze({patchProp:mp},Yu);let Ji;function Pp(){return Ji||(Ji=Pu($p))}const Tp=((...e)=>{const t=Pp().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=Ep(r);if(!o)return;const i=t._component;!we(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const l=n(o,!1,Rp(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},t});function Rp(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ep(e){return He(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:r,iconNode:o,name:i,class:l,...a},{slots:c})=>Hn("svg",{...Gr,width:e||Gr.width,height:e||Gr.height,stroke:r||Gr.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${Lp(i??"icon")}`],...a},[...o.map(p=>Hn(...p)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(e,t)=>(n,{slots:r})=>Hn(Fp,{...n,iconNode:t,name:e},r);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=de("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=de("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=de("ArrowUpIcon",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=de("AtSignIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=de("BellIcon",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=de("BookmarkIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=de("BotIcon",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=de("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=de("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=de("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=de("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=de("ChevronsLeftRightIcon",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=de("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=de("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=de("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=de("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=de("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=de("CompassIcon",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=de("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=de("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=de("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=de("EllipsisIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=de("EyeOffIcon",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=de("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=de("FileTextIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=de("FilmIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=de("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=de("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=de("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=de("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=de("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=de("InfoIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=de("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=de("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=de("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=de("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=de("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=de("PaletteIcon",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=de("PaperclipIcon",[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=de("PinIcon",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=de("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=de("RepeatIcon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=de("RocketIcon",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=de("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=de("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=de("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=de("SettingsIcon",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=de("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=de("ShieldIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=de("SlidersHorizontalIcon",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=de("SlidersVerticalIcon",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=de("SmilePlusIcon",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=de("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=de("SquareIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=de("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=de("TagIcon",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=de("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=de("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=de("TrendingDownIcon",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=de("TrendingUpIcon",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=de("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=de("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=de("WrenchIcon",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=de("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=de("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),u0=ae({__name:"ThemeToggle",setup(e){const t=T(!0);function n(){t.value=!t.value,t.value?(document.documentElement.classList.add("dark"),localStorage.setItem("aura-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("aura-theme","light"))}return qe(()=>{const r=localStorage.getItem("aura-theme");r?t.value=r==="dark":t.value=window.matchMedia("(prefers-color-scheme: dark)").matches,t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),(r,o)=>(f(),g("button",{type:"button",class:"relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"切换亮色 / 暗色模式",onClick:n},[t.value?(f(),me(I(i0),{key:0,class:"h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400"})):(f(),me(I(Xp),{key:1,class:"h-4 w-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-indigo-600"}))]))}}),Ts=[{id:"forms-inputs",name:"表单与高阶输入套件",englishName:"Forms & Advanced Inputs",description:"Figma 拖拽数值微调、实时密码学强度仪表盘、金融级自适应金额与智能体 @ 呼出输入框",badgeColor:"text-amber-500 bg-amber-500/10 border-amber-500/20",iconName:"Sliders"},{id:"tactile-actions",name:"触觉反馈与原子操作套件",englishName:"Tactile & Actions Suite",description:"长按蓄力物理确认、原地渐变二次确认、物理微压与矢量形变操作矩阵",badgeColor:"text-rose-500 bg-rose-500/10 border-rose-500/20",iconName:"Zap"},{id:"ai-native",name:"AI 原生与智能体套件",englishName:"AI & Agent Suite",description:"面向大模型工作流、思考链路、代码终端与指令交互的原生动效矩阵",badgeColor:"text-sky-500 bg-sky-500/10 border-sky-500/20",iconName:"Bot"},{id:"interactive-nav",name:"交互与高阶导航套件",englishName:"Interactive & Navigation",description:"以余弦物理、流体胶囊指示器与视口裁切驱动的极佳手感交互",badgeColor:"text-blue-500 bg-blue-500/10 border-blue-500/20",iconName:"Compass"},{id:"space-3d",name:"空间与 3D 纵深套件",englishName:"3D Space & Atmosphere",description:"同心公转轨道、赛博网格、极光破晓天灯与粒子微光氛围",badgeColor:"text-indigo-500 bg-indigo-500/10 border-indigo-500/20",iconName:"Globe"},{id:"borders-cards",name:"流光卡片与微光边框套件",englishName:"Borders & Bento Cards",description:"沿着圆角边框流动的渐变光束与多维信息科技网格便当盒",badgeColor:"text-purple-500 bg-purple-500/10 border-purple-500/20",iconName:"Layers"},{id:"kinetic-typography",name:"文字与动态排版套件",englishName:"Kinetic Typography",description:"连续金属扫光、平滑毫秒数值翻滚与无限无缝平滑跑马灯",badgeColor:"text-emerald-500 bg-emerald-500/10 border-emerald-500/20",iconName:"Sparkles"}],pn=[{id:"border-beam",name:"BorderBeam",title:"Border Beam（跑马流光渐变边框）",category:"Effect",suiteId:"borders-cards",description:"沿着容器圆角边框匀速流动的彩色流光光束。大模型生成状态、VIP 特权卡片、核心功能高亮的科技感标配。",componentFilename:"BorderBeam.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"value",type:"number",default:"0",description:"目标数值"},{name:"duration",type:"number",default:"1000",description:"过渡毫秒数"},{name:"decimals",type:"number",default:"0",description:"保留小数位数"},{name:"prefix",type:"string",default:"''",description:"前缀符号（如货币单位）"},{name:"suffix",type:"string",default:"''",description:"后缀单位（如 %、k）"},{name:"formatThousands",type:"boolean",default:"true",description:"是否添加千分位逗号"},{name:"trendColor",type:"boolean",default:"false",description:"数值改变时是否动态泛红/绿"}]},{id:"radial-gauge",name:"Radial Gauge",title:"科技仪表盘弧形进度量表（Radial Gauge & Arc Speedometer）",category:"Interactive",suiteId:"interactive-nav",description:"240° 环形大开口科技仪表盘。具备起点到终点贝塞尔渐变笔触、stroke-dashoffset 阻尼形变、弧端高亮圆点与绿/黄/红三级警示阈值自动变色；开启 draggable 后可拖动圆点调节数值。",componentFilename:"RadialGauge.vue",componentCode:`<script setup lang="ts">
import { computed, onUnmounted, ref, useId, watch } from 'vue'
import { cn } from '@/lib/utils'

interface RadialGaugeProps {
  value: number
  size?: number
  strokeWidth?: number
  label?: string
  unit?: string
  min?: number
  max?: number
  step?: number
  thresholds?: boolean
  draggable?: boolean
  class?: string
}

const props = withDefaults(defineProps<RadialGaugeProps>(), {
  size: 180,
  strokeWidth: 12,
  label: '',
  unit: '%',
  min: 0,
  max: 100,
  step: 1,
  thresholds: true,
  draggable: false,
})

const emit = defineEmits<{
  (e: 'update:value', val: number): void
  (e: 'change', val: number): void
}>()

const uniqueId = useId()
const gradientId = computed(() => \`gauge-grad-\${uniqueId}\`)

const center = computed(() => props.size / 2)
const radius = computed(() => center.value - props.strokeWidth - 6)

// 240度环形弧线（以 12 点钟为 0°，从左下 -120° 顺时针到右下 120°，即底部开口 120°）
const startAngle = -120
const endAngle = 120
const totalAngle = endAngle - startAngle // 240 度

// 将极坐标角度转换为笛卡尔坐标
function polarToCartesian(cx: number, cy: number, r: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians),
  }
}

// 生成 SVG Arc 路径指令（从起点顺时针绘制到终点，与进度增长方向一致）
function describeArc(cx: number, cy: number, r: number, startA: number, endA: number) {
  const start = polarToCartesian(cx, cy, r, startA)
  const end = polarToCartesian(cx, cy, r, endA)
  const largeArcFlag = endA - startA <= 180 ? '0' : '1'
  return \`M \${start.x} \${start.y} A \${r} \${r} 0 \${largeArcFlag} 1 \${end.x} \${end.y}\`
}

const bgArcPath = computed(() => describeArc(center.value, center.value, radius.value, startAngle, endAngle))

// 弧长计算
const arcLength = computed(() => {
  return (totalAngle / 360) * 2 * Math.PI * radius.value
})

const percentage = computed(() => {
  const range = props.max - props.min
  if (range <= 0) return 0
  const clamped = Math.min(Math.max(props.value, props.min), props.max)
  return (clamped - props.min) / range
})

const isDragging = ref(false)

// 弧线与末端圆点共用同一个缓动中的进度值，保证动画过程中圆点始终贴合弧线末端；拖拽时直接跟手不做缓动
const animatedPercentage = ref(percentage.value)
let rafId = 0

// 与 cubic-bezier(0.16, 1, 0.3, 1) 等价的 easeOutExpo 缓动
function easeOutExpo(t: number) {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

watch(percentage, (to) => {
  cancelAnimationFrame(rafId)
  if (isDragging.value) {
    animatedPercentage.value = to
    return
  }
  const from = animatedPercentage.value
  const startedAt = performance.now()
  const duration = 700
  const tick = (now: number) => {
    const t = Math.min((now - startedAt) / duration, 1)
    animatedPercentage.value = from + (to - from) * easeOutExpo(t)
    if (t < 1) rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
})

onUnmounted(() => cancelAnimationFrame(rafId))

const strokeDashoffset = computed(() => {
  return arcLength.value - animatedPercentage.value * arcLength.value
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
  const currentAngle = startAngle + animatedPercentage.value * totalAngle
  return polarToCartesian(center.value, center.value, radius.value, currentAngle)
})

// ================= 拖拽与键盘交互（draggable 开启时生效） =================
const svgRef = ref<SVGSVGElement | null>(null)
let lastValue = props.value

// 按 step 吸附并限制在 [min, max] 区间内
function normalizeValue(val: number) {
  const stepped = props.min + Math.round((val - props.min) / props.step) * props.step
  const bounded = Math.min(Math.max(stepped, props.min), props.max)
  // 处理浮点精度
  return Math.round(bounded * 1e6) / 1e6
}

function commitValue(val: number) {
  const next = normalizeValue(val)
  lastValue = next
  if (next !== props.value) emit('update:value', next)
}

// 计算指针相对圆心的距离与角度（以 12 点钟为 0°、顺时针为正，范围 -180° ~ 180°）
function getPointerPolar(e: PointerEvent) {
  const rect = svgRef.value!.getBoundingClientRect()
  const scale = rect.width / props.size || 1
  const dx = (e.clientX - rect.left) / scale - center.value
  const dy = (e.clientY - rect.top) / scale - center.value
  return {
    distance: Math.hypot(dx, dy),
    angle: (Math.atan2(dx, -dy) * 180) / Math.PI,
  }
}

// 角度换算为数值；落入底部开口时吸附到一端
function angleToValue(angle: number) {
  let pct: number
  if (angle < startAngle || angle > endAngle) {
    // 拖拽中越过开口时停留在当前所在的一端，避免数值在最小与最大之间来回跳变
    pct = isDragging.value ? (percentage.value >= 0.5 ? 1 : 0) : angle < 0 ? 0 : 1
  } else {
    pct = (angle - startAngle) / totalAngle
  }
  return props.min + pct * (props.max - props.min)
}

function handlePointerDown(e: PointerEvent) {
  if (!props.draggable || !svgRef.value) return
  const { distance, angle } = getPointerPolar(e)
  // 只响应落在弧形轨道附近的按下，点击中心读数区域不改变数值
  if (Math.abs(distance - radius.value) > props.strokeWidth / 2 + 10) return
  const nextValue = angleToValue(angle)
  isDragging.value = true
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  commitValue(nextValue)
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging.value) return
  commitValue(angleToValue(getPointerPolar(e).angle))
}

function handlePointerUp() {
  if (!isDragging.value) return
  isDragging.value = false
  emit('change', lastValue)
}

function handleKeydown(e: KeyboardEvent) {
  if (!props.draggable) return
  const bigStep = (props.max - props.min) / 10
  let next: number
  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowUp':
      next = props.value + props.step
      break
    case 'ArrowLeft':
    case 'ArrowDown':
      next = props.value - props.step
      break
    case 'PageUp':
      next = props.value + bigStep
      break
    case 'PageDown':
      next = props.value - bigStep
      break
    case 'Home':
      next = props.min
      break
    case 'End':
      next = props.max
      break
    default:
      return
  }
  e.preventDefault()
  commitValue(next)
  emit('change', lastValue)
}

// 开启拖拽时作为 slider 暴露给辅助技术
const sliderAttrs = computed(() =>
  props.draggable
    ? {
        role: 'slider',
        tabindex: 0,
        'aria-label': props.label || undefined,
        'aria-valuemin': props.min,
        'aria-valuemax': props.max,
        'aria-valuenow': props.value,
        'aria-valuetext': \`\${Math.round(props.value)}\${props.unit}\`,
      }
    : {}
)
<\/script>

<template>
  <div :class="cn('relative inline-flex flex-col items-center select-none', props.class)">
    <div
      v-bind="sliderAttrs"
      :class="['group relative outline-none', props.draggable && 'touch-none', isDragging && 'cursor-grabbing']"
      :style="{ width: \`\${props.size}px\`, height: \`\${props.size * 0.85}px\` }"
      @pointerdown="handlePointerDown"
      @pointermove="handlePointerMove"
      @pointerup="handlePointerUp"
      @pointercancel="handlePointerUp"
      @keydown="handleKeydown"
    >
      <svg ref="svgRef" :width="props.size" :height="props.size" class="overflow-visible">
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
        />

        <!-- 拖拽手柄光晕（悬停、拖拽或键盘聚焦时浮现） -->
        <circle
          v-if="props.draggable"
          :cx="tipPoint.x"
          :cy="tipPoint.y"
          :r="props.strokeWidth / 2 + 5"
          :fill="colorScheme.stroke"
          :class="[
            'transition-opacity duration-200 group-hover:opacity-25 group-focus-visible:opacity-25',
            isDragging ? 'opacity-25' : 'opacity-0',
          ]"
        />

        <!-- 弧线末端高亮圆点 -->
        <circle
          v-if="props.draggable || animatedPercentage > 0.02"
          :cx="tipPoint.x"
          :cy="tipPoint.y"
          :r="props.strokeWidth / 2 - 1"
          fill="white"
        />

        <!-- 拖拽热区：沿轨道的加宽透明描边，便于抓取 -->
        <path
          v-if="props.draggable"
          :d="bgArcPath"
          fill="none"
          stroke="transparent"
          :stroke-width="props.strokeWidth + 20"
          stroke-linecap="round"
          :class="isDragging ? 'cursor-grabbing' : 'cursor-grab'"
        />
      </svg>

      <!-- 中心数值与标签容器 -->
      <div
        class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pt-3 text-center"
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
const volume = ref(40)
<\/script>

<template>
  <!-- 只读展示 -->
  <RadialGauge :value="cpuUsage" label="CPU 负载" unit="%" :size="180" :thresholds="true" />

  <!-- 可拖拽调节：拖动末端圆点 / 点击轨道 / 键盘方向键 -->
  <RadialGauge v-model:value="volume" label="音量" unit="%" draggable />
</template>`,propsList:[{name:"value",type:"number",default:"-",description:"当前读数，开启 draggable 时配合 v-model:value 双向绑定"},{name:"size",type:"number",default:"180",description:"仪表盘尺寸 (px)"},{name:"strokeWidth",type:"number",default:"12",description:"弧形轨道笔触宽度 (px)"},{name:"label",type:"string",default:"''",description:"中心说明标签"},{name:"unit",type:"string",default:"'%'",description:"度量单位符号"},{name:"min",type:"number",default:"0",description:"量程最小值"},{name:"max",type:"number",default:"100",description:"量程最大值"},{name:"step",type:"number",default:"1",description:"拖拽与键盘调节时的吸附步长"},{name:"thresholds",type:"boolean",default:"true",description:"是否根据数值动态切换红黄绿阶"},{name:"draggable",type:"boolean",default:"false",description:"是否允许拖动末端圆点调节数值（同时支持点击轨道与方向键 / Home / End）"}]},{id:"progress-steps",name:"Progress Steps",title:"物理弹簧阶段进度步骤器（Spring Animated Stepper）",category:"Interactive",suiteId:"interactive-nav",description:"业务阶段工作流步骤导航。已完成节点平滑缩放形变打勾，当前活跃节点配备柔和呼吸光环，连接线随步骤前进自适应流动填充。",componentFilename:"ProgressSteps.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"title",type:"string",default:"-",description:"度量项标题"},{name:"value",type:"number",default:"0",description:"核心指标数值"},{name:"prefix",type:"string",default:"''",description:"前缀符号"},{name:"suffix",type:"string",default:"''",description:"后缀单位"},{name:"change",type:"number",default:"undefined",description:"环比变动百分比"},{name:"changePeriod",type:"string",default:"'较上周期'",description:"环比统计区间文案"},{name:"trendData",type:"number[]",default:"[]",description:"右下角趋势微图数据点"}]},{id:"command-dialog",name:"Command Dialog",title:"Command Dialog（macOS Spotlight / Raycast 仿生快捷命令浮层）",category:"Interactive",suiteId:"interactive-nav",description:"仿 macOS Spotlight 与 Raycast 质感的全局快捷浮动命令面板。支持 ⌘K / Ctrl+K 全局快捷键呼出、分组搜索与实时模糊匹配、键盘方向键导航回车触发、Esc 关闭以及自适应背景毛玻璃与弥散投影。",componentFilename:"CommandDialog.vue",componentCode:`<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { Search, X, Compass, Palette, Sparkles, Layers, Sliders, Zap, Shield, FileText } from 'lucide-vue-next'

export interface CommandItem {
  id: string | number
  title: string
  description?: string
  icon?: any
  shortcut?: string
  badge?: string
  onSelect?: () => void
}

export interface CommandGroup {
  id: string
  name: string
  items: CommandItem[]
}

interface CommandDialogProps {
  modelValue?: boolean
  open?: boolean
  groups?: CommandGroup[]
  placeholder?: string
  class?: string
}

const defaultGroups: CommandGroup[] = [
  {
    id: 'popular',
    name: '快捷动作',
    items: [
      { id: 'search-components', title: '搜索全量动效组件库', description: '快速过滤 58 款原子组件与交互块', icon: Compass, shortcut: '⌘F' },
      { id: 'toggle-theme', title: '切换界面深浅色主题', description: '一键在明亮与暗黑模式之间切换', icon: Palette, shortcut: '⌘T' },
      { id: 'copy-template', title: '复制当前组件单文件代码', description: 'Zero-Config 单文件直接粘贴即用', icon: Sparkles, shortcut: '⌘C' },
    ],
  },
  {
    id: 'navigation',
    name: '套件快速直达',
    items: [
      { id: 'nav-tactile', title: '触觉反馈与原子操作套件', description: '包含 HoldToConfirm, ConfirmMorph 等 6 款组件', icon: Zap },
      { id: 'nav-forms', title: '表单与高阶输入套件', description: '包含 ScrubInput, PasswordStrength 等 6 款组件', icon: Sliders },
      { id: 'nav-cards', title: '光效边框与立体卡片套件', description: '包含 GlowingCard, GlassCard 等 6 款组件', icon: Layers },
      { id: 'nav-overlays', title: '浮层弹窗与交互覆盖套件', description: '包含 CommandDialog, ContextMenu 等 6 款组件', icon: Shield },
    ],
  },
  {
    id: 'system',
    name: '项目文档',
    items: [
      { id: 'view-docs', title: '浏览 Aura UI 设计规范文档', description: '阅读完整的微动缓动曲线与投影系统', icon: FileText, shortcut: '⌘D' },
    ],
  },
]

const props = withDefaults(defineProps<CommandDialogProps>(), {
  modelValue: undefined,
  open: undefined,
  placeholder: '键入指令或搜索动效组件 (Ctrl+K)...',
  groups: () => [],
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void
  (e: 'update:open', val: boolean): void
  (e: 'select', item: CommandItem): void
}>()

const isVisible = computed(() => {
  if (props.modelValue !== undefined) return props.modelValue
  return props.open ?? false
})

const actualGroups = computed(() => {
  if (props.groups && props.groups.length > 0) return props.groups
  return defaultGroups
})

const searchQuery = ref('')
const activeIndex = ref(0)
const inputRef = ref<HTMLInputElement | null>(null)

// 过滤后的展平指令清单
const filteredItems = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const result: { groupName: string; item: CommandItem }[] = []

  actualGroups.value.forEach((group) => {
    group.items.forEach((item) => {
      const matchTitle = item.title.toLowerCase().includes(query)
      const matchDesc = item.description?.toLowerCase().includes(query)
      const matchGroup = group.name.toLowerCase().includes(query)
      if (!query || matchTitle || matchDesc || matchGroup) {
        result.push({ groupName: group.name, item })
      }
    })
  })

  return result
})

function close() {
  emit('update:modelValue', false)
  emit('update:open', false)
  searchQuery.value = ''
  activeIndex.value = 0
}

function handleSelect(item: CommandItem) {
  emit('select', item)
  if (item.onSelect) item.onSelect()
  close()
}

function handleKeyDown(e: KeyboardEvent) {
  if (!isVisible.value) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault()
      emit('update:modelValue', true)
      emit('update:open', true)
    }
    return
  }

  if (e.key === 'Escape') {
    e.preventDefault()
    close()
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (filteredItems.value.length > 0) {
      activeIndex.value = (activeIndex.value + 1) % filteredItems.value.length
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (filteredItems.value.length > 0) {
      activeIndex.value = (activeIndex.value - 1 + filteredItems.value.length) % filteredItems.value.length
    }
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const selected = filteredItems.value[activeIndex.value]
    if (selected) {
      handleSelect(selected.item)
    }
  }
}

watch(
  () => isVisible.value,
  (val) => {
    if (val) {
      activeIndex.value = 0
      setTimeout(() => {
        inputRef.value?.focus()
      }, 50)
    }
  }
)

watch(searchQuery, () => {
  activeIndex.value = 0
})

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
<\/script>

<template>
  <teleport to="body">
    <transition name="cmd-fade">
      <div
        v-if="isVisible"
        class="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-black/40 backdrop-blur-sm"
        @click.self="close"
      >
        <!-- 指令窗口主体 (Raycast / Spotlight 风格) -->
        <div
          :class="
            cn(
              'popover-shadow relative w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-2xl transition-all dark:border-zinc-800/90 dark:bg-zinc-900/95 shadow-2xl',
              props.class
            )
          "
        >
          <!-- 顶部搜索输入栏 -->
          <div class="relative flex items-center border-b border-zinc-200/80 px-4 py-3.5 dark:border-zinc-800/80">
            <Search class="h-4 w-4 shrink-0 text-zinc-400 mr-3" />
            <input
              ref="inputRef"
              v-model="searchQuery"
              type="text"
              :placeholder="props.placeholder"
              class="h-6 w-full bg-transparent text-sm font-medium text-zinc-900 placeholder:text-zinc-400 outline-none dark:text-white"
            />
            <button
              v-if="searchQuery"
              type="button"
              @click="searchQuery = ''"
              class="p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
            >
              <X class="h-3.5 w-3.5" />
            </button>
            <kbd class="ml-2 hidden sm:inline-flex h-5 items-center rounded border border-zinc-200 bg-zinc-100 px-1.5 font-mono text-[10px] text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
              ESC
            </kbd>
          </div>

          <!-- 指令候选列表区 -->
          <div class="max-h-80 overflow-y-auto p-2 scrollbar-thin">
            <div v-if="filteredItems.length === 0" class="py-12 text-center text-xs text-zinc-400">
              未找到匹配的指令或组件
            </div>

            <div v-else class="space-y-1">
              <button
                v-for="(entry, idx) in filteredItems"
                :key="entry.item.id"
                type="button"
                @click="handleSelect(entry.item)"
                @mouseenter="activeIndex = idx"
                :class="[
                  'group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs font-medium transition-colors cursor-pointer outline-none focus:outline-none ring-0',
                  activeIndex === idx
                    ? 'bg-blue-600 text-white'
                    : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/70',
                ]"
              >
                <div class="flex items-center gap-3">
                  <div
                    :class="[
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors',
                      activeIndex === idx
                        ? 'bg-white/20 text-white'
                        : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400',
                    ]"
                  >
                    <component :is="entry.item.icon || Search" class="h-3.5 w-3.5" />
                  </div>
                  <div class="flex flex-col">
                    <span class="font-bold tracking-tight">
                      {{ entry.item.title }}
                    </span>
                    <span
                      v-if="entry.item.description"
                      :class="[
                        'text-[11px] line-clamp-1',
                        activeIndex === idx ? 'text-blue-100' : 'text-zinc-400',
                      ]"
                    >
                      {{ entry.item.description }}
                    </span>
                  </div>
                </div>

                <!-- 右侧快捷键或徽标 -->
                <div class="flex items-center gap-2">
                  <span
                    v-if="entry.item.badge"
                    :class="[
                      'rounded-md px-1.5 py-0.5 text-[10px] font-semibold',
                      activeIndex === idx
                        ? 'bg-white/20 text-white'
                        : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
                    ]"
                  >
                    {{ entry.item.badge }}
                  </span>
                  <kbd
                    v-if="entry.item.shortcut"
                    :class="[
                      'font-mono text-[10px]',
                      activeIndex === idx ? 'text-white/80' : 'text-zinc-400',
                    ]"
                  >
                    {{ entry.item.shortcut }}
                  </kbd>
                </div>
              </button>
            </div>
          </div>

          <!-- 底部快捷键提示 -->
          <div class="flex items-center justify-between border-t border-zinc-200/80 px-4 py-2 text-[11px] text-zinc-400 dark:border-zinc-800/80">
            <div class="flex items-center gap-3">
              <span class="flex items-center gap-1">
                <kbd class="rounded border border-zinc-200 bg-zinc-100 px-1 font-mono text-[10px] dark:border-zinc-700 dark:bg-zinc-800">↑↓</kbd>
                <span>导航</span>
              </span>
              <span class="flex items-center gap-1">
                <kbd class="rounded border border-zinc-200 bg-zinc-100 px-1 font-mono text-[10px] dark:border-zinc-700 dark:bg-zinc-800">↵</kbd>
                <span>选择</span>
              </span>
            </div>
            <span>Spotlight 指令中心</span>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.cmd-fade-enter-active,
.cmd-fade-leave-active {
  transition: opacity 0.2s ease;
}
.cmd-fade-enter-from,
.cmd-fade-leave-to {
  opacity: 0;
}
.cmd-fade-enter-active .popover-shadow,
.cmd-fade-leave-active .popover-shadow {
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.cmd-fade-enter-from .popover-shadow,
.cmd-fade-leave-to .popover-shadow {
  transform: scale(0.96) translateY(-10px);
  opacity: 0;
}
</style>
`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import CommandDialog from '@/components/ui/CommandDialog.vue'

const open = ref(false)
<\/script>

<template>
  <button
    @click="open = true"
    class="px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
  >
    呼出命令面板 (⌘K)
  </button>
  <CommandDialog v-model="open" />
</template>`,propsList:[{name:"modelValue",type:"boolean",default:"false",description:"是否显示命令面板（双向绑定 v-model）"},{name:"groups",type:"CommandGroup[]",default:"内置分组",description:"命令菜单分组与动作项列表"},{name:"placeholder",type:"string",default:"'输入命令或搜索动作...'",description:"搜索输入框占位提示文本"}]},{id:"slide-over-drawer",name:"Slide Over Drawer",title:"Slide Over Drawer（平滑弹力侧滑抽屉面板）",category:"Interactive",suiteId:"interactive-nav",description:"高质感侧边滑出抽屉面板。支持从左侧或右侧优雅滑入，具备遮罩层背景虚化、平滑贝塞尔过渡动画、头部插槽与底部确认操作插槽，支持 ESC 键及外部遮罩点击优雅回弹关闭。",componentFilename:"SlideOverDrawer.vue",componentCode:`<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { X } from 'lucide-vue-next'

interface SlideOverDrawerProps {
  modelValue?: boolean
  open?: boolean
  title?: string
  description?: string
  placement?: 'right' | 'left'
  side?: 'right' | 'left'
  width?: string
  class?: string
}

const props = withDefaults(defineProps<SlideOverDrawerProps>(), {
  modelValue: undefined,
  open: undefined,
  title: '侧边抽屉面板',
  description: '',
  placement: 'right',
  side: undefined,
  width: 'max-w-md',
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void
  (e: 'update:open', val: boolean): void
  (e: 'close'): void
}>()

const isVisible = computed(() => {
  if (props.modelValue !== undefined) return props.modelValue
  return props.open ?? false
})

const actualPlacement = computed(() => {
  return props.side || props.placement || 'right'
})

function close() {
  emit('update:modelValue', false)
  emit('update:open', false)
  emit('close')
}

function handleKeyDown(e: KeyboardEvent) {
  if (isVisible.value && e.key === 'Escape') {
    e.preventDefault()
    close()
  }
}

watch(
  () => isVisible.value,
  (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
)

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})
<\/script>

<template>
  <teleport to="body">
    <transition name="drawer-fade">
      <div
        v-if="isVisible"
        class="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm"
        @click.self="close"
      >
        <div
          class="fixed inset-y-0 flex max-w-full"
          :class="actualPlacement === 'right' ? 'right-0 pl-10' : 'left-0 pr-10'"
        >
          <!-- 抽屉主体滑块 -->
          <transition :name="actualPlacement === 'right' ? 'drawer-slide-right' : 'drawer-slide-left'">
            <div
              v-if="isVisible"
              :class="
                cn(
                  'w-screen flex flex-col border-zinc-200/80 bg-white/95 shadow-2xl backdrop-blur-2xl dark:border-zinc-800/80 dark:bg-zinc-900/95',
                  actualPlacement === 'right' ? 'border-l' : 'border-r',
                  props.width,
                  props.class
                )
              "
            >
              <!-- 顶部标题与关闭按钮 -->
              <div class="flex items-center justify-between border-b border-zinc-200/80 px-6 py-4 dark:border-zinc-800/80">
                <div>
                  <h3 class="text-base font-bold text-zinc-900 dark:text-white">
                    {{ props.title }}
                  </h3>
                  <p v-if="props.description" class="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                    {{ props.description }}
                  </p>
                </div>
                <button
                  type="button"
                  @click="close"
                  class="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
                  title="关闭面板 (Esc)"
                >
                  <X class="h-4 w-4" />
                </button>
              </div>

              <!-- 中部内容槽 -->
              <div class="flex-1 overflow-y-auto p-6 scrollbar-thin">
                <slot />
              </div>

              <!-- 底部操作栏槽 (可选) -->
              <div v-if="$slots.footer" class="border-t border-zinc-200/80 bg-zinc-50/70 p-4 dark:border-zinc-800/80 dark:bg-zinc-950/70">
                <slot name="footer" :close="close" />
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.3s ease;
}
.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}

.drawer-slide-right-enter-active,
.drawer-slide-right-leave-active {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.drawer-slide-right-enter-from,
.drawer-slide-right-leave-to {
  transform: translateX(100%);
}

.drawer-slide-left-enter-active,
.drawer-slide-left-leave-active {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.drawer-slide-left-enter-from,
.drawer-slide-left-leave-to {
  transform: translateX(-100%);
}
</style>
`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import SlideOverDrawer from '@/components/ui/SlideOverDrawer.vue'

const open = ref(false)
<\/script>

<template>
  <button
    @click="open = true"
    class="px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-medium"
  >
    打开侧边抽屉
  </button>

  <SlideOverDrawer v-model="open" title="系统偏好设置" description="配置您的工作空间与界面外观">
    <div class="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
      <p>抽屉主体内容支持任意 Vue 组件与滚动列表。</p>
    </div>
    <template #footer="{ close }">
      <button @click="close" class="px-4 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800">取消</button>
      <button @click="close" class="px-4 py-2 text-sm rounded-lg bg-emerald-600 text-white font-medium">确认保存</button>
    </template>
  </SlideOverDrawer>
</template>`,propsList:[{name:"modelValue",type:"boolean",default:"false",description:"抽屉是否开启（双向绑定 v-model）"},{name:"title",type:"string",default:"'抽屉面板'",description:"抽屉标题"},{name:"description",type:"string",default:"''",description:"抽屉辅助副标题"},{name:"side",type:"'right' | 'left'",default:"'right'",description:"滑出方向"},{name:"width",type:"string",default:"'max-w-md'",description:"抽屉宽度 Tailwind 类"}]},{id:"floating-popover",name:"Floating Popover",title:"Floating Popover（微动浮动气泡浮层）",category:"Interactive",suiteId:"interactive-nav",description:"微动浮动气泡浮层。集成多层扩散环境投影（--shadow-popover）、精细微三角指针与 Outside Click 智能外部点击关闭，支持 top / bottom / left / right 四方向对齐与自定义 Trigger 插槽。",componentFilename:"FloatingPopover.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface FloatingPopoverProps {
  placement?: 'top' | 'bottom' | 'left' | 'right'
  width?: string
  arrow?: boolean
  closeOnClickOutside?: boolean
  class?: string
}

const props = withDefaults(defineProps<FloatingPopoverProps>(), {
  placement: 'bottom',
  width: 'w-72',
  arrow: true,
  closeOnClickOutside: true,
})

const isOpen = ref(false)
const containerRef = ref<HTMLDivElement | null>(null)

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}

function handleClickOutside(e: MouseEvent) {
  if (props.closeOnClickOutside && containerRef.value && !containerRef.value.contains(e.target as Node)) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})

defineExpose({
  open: () => { isOpen.value = true },
  close,
  toggle,
})
<\/script>

<template>
  <div ref="containerRef" class="relative inline-flex">
    <!-- 触发器插槽 -->
    <div @click.stop="toggle" class="inline-flex cursor-pointer">
      <slot name="trigger" :isOpen="isOpen" :toggle="toggle" />
    </div>

    <!-- 浮动气泡面板 (带高阶弥散阴影与微缩放弹簧) -->
    <transition name="popover-spring">
      <div
        v-if="isOpen"
        :class="
          cn(
            'aura-popover popover-shadow absolute z-50 rounded-2xl border border-zinc-200/90 bg-white/95 p-4 backdrop-blur-2xl dark:border-zinc-800/90 dark:bg-zinc-900/95',
            props.width,
            props.placement === 'bottom' && 'top-full left-1/2 -translate-x-1/2 mt-2.5',
            props.placement === 'top' && 'bottom-full left-1/2 -translate-x-1/2 mb-2.5',
            props.placement === 'left' && 'right-full top-1/2 -translate-y-1/2 mr-2.5',
            props.placement === 'right' && 'left-full top-1/2 -translate-y-1/2 ml-2.5',
            props.class
          )
        "
        @click.stop
      >
        <!-- 指针微箭头 -->
        <div
          v-if="props.arrow"
          :class="[
            'absolute h-2 w-2 rotate-45 border border-zinc-200/90 bg-white dark:border-zinc-800/90 dark:bg-zinc-900 pointer-events-none',
            props.placement === 'bottom' && '-top-1 left-1/2 -translate-x-1/2 border-b-0 border-r-0',
            props.placement === 'top' && '-bottom-1 left-1/2 -translate-x-1/2 border-t-0 border-l-0',
            props.placement === 'left' && '-right-1 top-1/2 -translate-y-1/2 border-b-0 border-l-0',
            props.placement === 'right' && '-left-1 top-1/2 -translate-y-1/2 border-t-0 border-r-0',
          ]"
        />

        <!-- 内容插槽 -->
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.popover-shadow {
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 20px 25px -5px rgba(0, 0, 0, 0.04);
}

.popover-spring-enter-active,
.popover-spring-leave-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.popover-spring-enter-from,
.popover-spring-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>
`,usageCode:`<script setup lang="ts">
import FloatingPopover from '@/components/ui/FloatingPopover.vue'
<\/script>

<template>
  <FloatingPopover placement="bottom" width="w-72">
    <template #trigger>
      <button class="px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm">
        点击展开浮动气泡
      </button>
    </template>
    <div class="space-y-2">
      <h4 class="text-sm font-semibold text-zinc-900 dark:text-white">快捷信息卡片</h4>
      <p class="text-xs text-zinc-500 leading-relaxed">
        支持微动动画展开、多重物理扩散投影与点击外部区域自动消失。
      </p>
    </div>
  </FloatingPopover>
</template>`,propsList:[{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",default:"'bottom'",description:"气泡弹出方位"},{name:"width",type:"string",default:"'w-72'",description:"卡片浮层宽度 Tailwind 尺寸类"},{name:"arrow",type:"boolean",default:"true",description:"是否渲染微型对齐小三角"}]},{id:"context-menu",name:"Context Menu",title:"Context Menu（桌面级右键上下文菜单）",category:"Interactive",suiteId:"interactive-nav",description:"极速拟真桌面级右键菜单。接管指定容器或元素的 contextmenu 事件，跟随鼠标精准定位，并带视口屏幕边缘碰撞自动贴边算法（Prevent Viewport Overflow）。支持图标、快捷键徽标与危险警示项。",componentFilename:"ContextMenu.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

export interface ContextMenuItem {
  id: string | number
  label?: string
  icon?: any
  shortcut?: string
  danger?: boolean
  destructive?: boolean
  disabled?: boolean
  separator?: boolean
  type?: 'separator' | 'item'
  onClick?: () => void
}

interface ContextMenuProps {
  items: ContextMenuItem[]
  class?: string
}

const props = defineProps<ContextMenuProps>()

const emit = defineEmits<{
  (e: 'select', item: ContextMenuItem): void
}>()

const isOpen = ref(false)
const position = ref({ x: 0, y: 0 })
const menuRef = ref<HTMLDivElement | null>(null)

function handleContextMenu(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()

  const menuW = 200
  const menuH = props.items.length * 36

  // 边界碰撞检测防溢出
  let x = e.clientX
  let y = e.clientY

  if (x + menuW > window.innerWidth) {
    x = window.innerWidth - menuW - 12
  }
  if (y + menuH > window.innerHeight) {
    y = window.innerHeight - menuH - 12
  }

  position.value = { x, y }
  isOpen.value = true
}

function handleItemClick(item: ContextMenuItem) {
  if (item.disabled || item.separator) return
  emit('select', item)
  if (item.onClick) item.onClick()
  isOpen.value = false
}

function close() {
  isOpen.value = false
}

function handleGlobalClick(e: MouseEvent) {
  if (menuRef.value && !menuRef.value.contains(e.target as Node)) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('click', handleGlobalClick)
  window.addEventListener('scroll', close, true)
})

onUnmounted(() => {
  window.removeEventListener('click', handleGlobalClick)
  window.removeEventListener('scroll', close, true)
})
<\/script>

<template>
  <div @contextmenu="handleContextMenu" :class="cn('relative inline-block', props.class)">
    <!-- 允许右键的承载区域插槽 -->
    <slot />

    <!-- 全局上下文菜单弹出层 -->
    <teleport to="body">
      <transition name="ctx-pop">
        <div
          v-if="isOpen"
          ref="menuRef"
          class="popover-shadow fixed z-50 w-52 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 backdrop-blur-2xl dark:border-zinc-800/90 dark:bg-zinc-900/95 shadow-xl select-none"
          :style="{
            left: \`\${position.x}px\`,
            top: \`\${position.y}px\`,
          }"
          @click.stop
        >
          <div
            v-for="item in props.items"
            :key="item.id"
          >
            <!-- 分割线 -->
            <div
              v-if="item.separator || item.type === 'separator'"
              class="my-1 border-t border-zinc-200/80 dark:border-zinc-800/80"
            />

            <!-- 菜单项 -->
            <button
              v-else
              type="button"
              :disabled="item.disabled"
              @click="handleItemClick(item)"
              :class="[
                'flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs font-medium transition-colors cursor-pointer outline-none focus:outline-none ring-0',
                item.disabled && 'opacity-40 pointer-events-none cursor-not-allowed',
                (item.danger || item.destructive)
                  ? 'text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/40'
                  : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800',
              ]"
            >
              <div class="flex items-center gap-2">
                <span v-if="typeof item.icon === 'string'" class="text-sm shrink-0">{{ item.icon }}</span>
                <component v-else-if="item.icon" :is="item.icon" class="h-3.5 w-3.5" />
                <span>{{ item.label }}</span>
              </div>
              <kbd
                v-if="item.shortcut"
                class="ml-2 font-mono text-[10px] text-zinc-400"
              >
                {{ item.shortcut }}
              </kbd>
            </button>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style scoped>
.ctx-pop-enter-active,
.ctx-pop-leave-active {
  transition: opacity 0.15s ease, transform 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.ctx-pop-enter-from,
.ctx-pop-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
`,usageCode:`<script setup lang="ts">
import ContextMenu from '@/components/ui/ContextMenu.vue'

const menuItems = [
  { id: 'cut', label: '剪切', shortcut: '⌘X', icon: '✂️' },
  { id: 'copy', label: '复制', shortcut: '⌘C', icon: '📋' },
  { id: 'paste', label: '粘贴', shortcut: '⌘V', icon: '📌' },
  { id: 'sep', type: 'separator' },
  { id: 'delete', label: '删除', shortcut: '⌫', icon: '🗑️', destructive: true },
]
<\/script>

<template>
  <ContextMenu :items="menuItems">
    <div class="h-44 w-full flex flex-col items-center justify-center border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 text-zinc-400">
      <span>在此虚线卡片内右键点击鼠标</span>
      <span class="text-xs mt-1">自动识别视口边缘并呼出触感右键菜单</span>
    </div>
  </ContextMenu>
</template>`,propsList:[{name:"items",type:"ContextMenuItem[]",default:"内置默认项",description:"右键菜单项配置列表，支持普通/分割线/危险操作"}]},{id:"toast-notification",name:"Toast Notification",title:"Toast Notification（物理堆叠浮动消息吐司）",category:"Interactive",suiteId:"interactive-nav",description:"多通道物理交互消息吐司。支持 success / error / warning / info 状态、自动倒计时关闭、悬浮暂停、平滑出入场过渡动效与多消息堆叠排布。",componentFilename:"ToastNotification.vue",componentCode:`<script setup lang="ts">
import { cn } from '@/lib/utils'
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-vue-next'

export interface ToastItem {
  id: string | number
  title: string
  description?: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

interface ToastNotificationProps {
  toasts: ToastItem[]
  position?: 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center'
  class?: string
}

const props = withDefaults(defineProps<ToastNotificationProps>(), {
  position: 'bottom-right',
})

const emit = defineEmits<{
  (e: 'dismiss', id: string | number): void
}>()

const iconMap = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
}

const colorMap = {
  success: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
  error: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
  warning: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  info: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
}
<\/script>

<template>
  <div
    :class="
      cn(
        'pointer-events-none fixed z-50 flex flex-col gap-2.5 p-4 sm:p-6 select-none max-w-sm w-full',
        props.position === 'bottom-right' && 'bottom-0 right-0',
        props.position === 'bottom-center' && 'bottom-0 left-1/2 -translate-x-1/2 items-center',
        props.position === 'top-right' && 'top-0 right-0',
        props.position === 'top-center' && 'top-0 left-1/2 -translate-x-1/2 items-center',
        props.class
      )
    "
  >
    <transition-group name="toast-slide" tag="div" class="w-full flex flex-col gap-2.5">
      <div
        v-for="toast in props.toasts"
        :key="toast.id"
        class="popover-shadow pointer-events-auto relative flex w-full items-start justify-between gap-3 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 p-4 backdrop-blur-2xl dark:border-zinc-800/90 dark:bg-zinc-900/95 shadow-xl transition-all"
      >
        <!-- 左侧状态图标与信息 -->
        <div class="flex items-start gap-3">
          <div
            :class="[
              'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
              colorMap[toast.type || 'info'],
            ]"
          >
            <component :is="iconMap[toast.type || 'info']" class="h-4 w-4" />
          </div>

          <div class="flex flex-col">
            <h5 class="text-xs font-bold text-zinc-900 dark:text-white">
              {{ toast.title }}
            </h5>
            <p v-if="toast.description" class="mt-0.5 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              {{ toast.description }}
            </p>
          </div>
        </div>

        <!-- 右侧关闭按钮 -->
        <button
          type="button"
          @click="emit('dismiss', toast.id)"
          class="shrink-0 rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
        >
          <X class="h-3.5 w-3.5" />
        </button>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.toast-slide-enter-from {
  opacity: 0;
  transform: translateY(16px) scale(0.95);
}
.toast-slide-leave-to {
  opacity: 0;
  transform: translateX(30px) scale(0.95);
}
</style>
`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import ToastNotification, { type ToastItem } from '@/components/ui/ToastNotification.vue'

const toasts = ref<ToastItem[]>([])

const triggerToast = (type: 'success' | 'error' | 'warning' | 'info') => {
  toasts.value.push({
    id: Date.now().toString(),
    type,
    title: type.toUpperCase() + ' 消息',
    description: '您的任务处理已完成，正在同步远端状态。',
    duration: 3500
  })
}

const handleClose = (id: string) => {
  toasts.value = toasts.value.filter(t => t.id !== id)
}
<\/script>

<template>
  <div class="flex gap-2">
    <button @click="triggerToast('success')" class="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 text-xs font-medium">成功</button>
    <button @click="triggerToast('error')" class="px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-600 text-xs font-medium">错误</button>
  </div>
  <ToastNotification :toasts="toasts" position="bottom-right" @close="handleClose" />
</template>`,propsList:[{name:"toasts",type:"ToastItem[]",default:"[]",description:"当前激活的吐司消息数组"},{name:"position",type:"string",default:"'bottom-right'",description:"屏幕停靠位置：bottom-right / top-right 等"}]},{id:"dropdown-menu",name:"Dropdown Menu",title:"Dropdown Menu（高触感选项下拉菜单）",category:"Interactive",suiteId:"interactive-nav",description:"高触感下拉交互菜单。支持单选 Radio、复选 Checkbox、分组标题、分割线、键盘上下箭头导航与全套深色/浅色自适应弥散投影。",componentFilename:"DropdownMenu.vue",componentCode:`<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

export interface DropdownItem {
  id: string
  label: string
  icon?: string
  shortcut?: string
  destructive?: boolean
  disabled?: boolean
  type?: 'item' | 'checkbox' | 'radio' | 'separator' | 'label'
  checked?: boolean
  value?: string
}

export interface DropdownGroup {
  id?: string
  label?: string
  items: DropdownItem[]
}

const props = withDefaults(
  defineProps<{
    items?: (DropdownItem | DropdownGroup)[]
    align?: 'left' | 'right' | 'center'
    triggerText?: string
    width?: string
    disabled?: boolean
  }>(),
  {
    items: () => [
      {
        id: 'account',
        label: 'Account',
        items: [
          { id: 'profile', label: 'My Profile', icon: '👤', shortcut: '⌘P' },
          { id: 'settings', label: 'Preferences', icon: '⚙️', shortcut: '⌘,' },
          { id: 'notifications', label: 'Notifications', icon: '🔔', type: 'checkbox', checked: true },
        ]
      },
      {
        id: 'view',
        label: 'View Mode',
        items: [
          { id: 'view-grid', label: 'Grid View', type: 'radio', value: 'grid', checked: true },
          { id: 'view-list', label: 'List View', type: 'radio', value: 'list', checked: false },
        ]
      },
      {
        id: 'danger',
        items: [
          { id: 'logout', label: 'Sign Out', icon: '🚪', shortcut: '⇧⌘Q', destructive: true },
        ]
      }
    ],
    align: 'left',
    triggerText: 'Options',
    width: 'w-56',
    disabled: false
  }
)

const emit = defineEmits<{
  (e: 'select', item: DropdownItem): void
  (e: 'toggle', isOpen: boolean): void
}>()

const isOpen = ref(false)
const containerRef = ref<HTMLElement | null>(null)
const focusedIndex = ref(-1)

// Flatten actionable items for keyboard navigation
const flatActionItems = computed(() => {
  const result: DropdownItem[] = []
  props.items.forEach(entry => {
    if ('items' in entry && Array.isArray(entry.items)) {
      entry.items.forEach(sub => {
        if (sub.type !== 'separator' && sub.type !== 'label' && !sub.disabled) {
          result.push(sub)
        }
      })
    } else {
      const item = entry as DropdownItem
      if (item.type !== 'separator' && item.type !== 'label' && !item.disabled) {
        result.push(item)
      }
    }
  })
  return result
})

const toggleOpen = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
  emit('toggle', isOpen.value)
  if (isOpen.value) {
    focusedIndex.value = -1
  }
}

const close = () => {
  if (!isOpen.value) return
  isOpen.value = false
  emit('toggle', false)
  focusedIndex.value = -1
}

const handleSelect = (item: DropdownItem) => {
  if (item.disabled) return

  if (item.type === 'checkbox') {
    item.checked = !item.checked
  } else if (item.type === 'radio') {
    // Uncheck other radios in same group
    props.items.forEach(entry => {
      if ('items' in entry && Array.isArray(entry.items)) {
        if (entry.items.some(i => i.id === item.id)) {
          entry.items.forEach(i => {
            if (i.type === 'radio') i.checked = (i.id === item.id)
          })
        }
      }
    })
  }

  emit('select', item)
  if (item.type !== 'checkbox' && item.type !== 'radio') {
    close()
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!isOpen.value) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault()
      toggleOpen()
    }
    return
  }

  if (e.key === 'Escape') {
    e.preventDefault()
    close()
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    focusedIndex.value = (focusedIndex.value + 1) % flatActionItems.value.length
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    focusedIndex.value = (focusedIndex.value - 1 + flatActionItems.value.length) % flatActionItems.value.length
  } else if (e.key === 'Enter' && focusedIndex.value >= 0) {
    e.preventDefault()
    const target = flatActionItems.value[focusedIndex.value]
    if (target) handleSelect(target)
  }
}

const handleOutsideClick = (e: MouseEvent) => {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
})

const alignClass = computed(() => {
  if (props.align === 'right') return 'right-0 origin-top-right'
  if (props.align === 'center') return 'left-1/2 -translate-x-1/2 origin-top'
  return 'left-0 origin-top-left'
})
<\/script>

<template>
  <div ref="containerRef" class="relative inline-block text-left" @keydown="handleKeydown">
    <!-- Trigger Slot or Default Trigger -->
    <slot name="trigger" :open="isOpen" :toggle="toggleOpen">
      <button
        type="button"
        @click="toggleOpen"
        :disabled="disabled"
        class="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg border border-neutral-200/80 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-200 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30"
      >
        <span>{{ triggerText }}</span>
        <svg
          class="w-3.5 h-3.5 text-neutral-400 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
    </slot>

    <!-- Dropdown Menu Body -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="transform opacity-0 scale-95 -translate-y-1"
      enter-to-class="transform opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform opacity-100 scale-100 translate-y-0"
      leave-to-class="transform opacity-0 scale-95 -translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute z-50 mt-1.5 p-1 rounded-xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/90 shadow-xl dark:shadow-neutral-950/60 focus:outline-none select-none"
        :class="[alignClass, width]"
        style="box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.05);"
      >
        <div class="py-0.5">
          <template v-for="(entry, gIdx) in items" :key="gIdx">
            <!-- Separator between groups -->
            <div v-if="gIdx > 0" class="h-px my-1 bg-neutral-100 dark:bg-neutral-800/80" />

            <!-- Group with header -->
            <template v-if="'items' in entry && Array.isArray(entry.items)">
              <div v-if="entry.label" class="px-2.5 py-1 text-[10px] font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">
                {{ entry.label }}
              </div>
              <template v-for="item in entry.items" :key="item.id">
                <!-- Inner separator -->
                <div v-if="item.type === 'separator'" class="h-px my-1 bg-neutral-100 dark:bg-neutral-800/80" />
                
                <!-- Action / Checkbox / Radio Item -->
                <button
                  v-else
                  type="button"
                  @click="handleSelect(item)"
                  :disabled="item.disabled"
                  class="w-full flex items-center justify-between gap-2 px-2.5 py-1.5 text-xs rounded-lg transition-colors group text-left font-normal"
                  :class="[
                    item.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
                    item.destructive
                      ? 'text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40'
                      : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80',
                    flatActionItems[focusedIndex]?.id === item.id ? 'bg-neutral-100 dark:bg-neutral-800' : ''
                  ]"
                >
                  <div class="flex items-center gap-2 truncate">
                    <!-- Checkbox checkmark or Radio dot -->
                    <span v-if="item.type === 'checkbox'" class="w-3.5 h-3.5 flex items-center justify-center text-emerald-500">
                      <svg v-if="item.checked" class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span v-else-if="item.type === 'radio'" class="w-3.5 h-3.5 flex items-center justify-center">
                      <span v-if="item.checked" class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    </span>

                    <span v-if="item.icon" class="text-sm shrink-0">{{ item.icon }}</span>
                    <span class="truncate">{{ item.label }}</span>
                  </div>

                  <span v-if="item.shortcut" class="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono tracking-tight shrink-0 pl-2">
                    {{ item.shortcut }}
                  </span>
                </button>
              </template>
            </template>

            <!-- Single Item -->
            <template v-else>
              <div v-if="(entry as DropdownItem).type === 'separator'" class="h-px my-1 bg-neutral-100 dark:bg-neutral-800/80" />
              <button
                v-else
                type="button"
                @click="handleSelect(entry as DropdownItem)"
                :disabled="(entry as DropdownItem).disabled"
                class="w-full flex items-center justify-between gap-2 px-2.5 py-1.5 text-xs rounded-lg transition-colors group text-left"
                :class="[
                  (entry as DropdownItem).disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
                  (entry as DropdownItem).destructive
                    ? 'text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40'
                    : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80'
                ]"
              >
                <div class="flex items-center gap-2 truncate">
                  <span v-if="(entry as DropdownItem).icon" class="text-sm shrink-0">{{ (entry as DropdownItem).icon }}</span>
                  <span class="truncate">{{ (entry as DropdownItem).label }}</span>
                </div>
                <span v-if="(entry as DropdownItem).shortcut" class="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono tracking-tight shrink-0 pl-2">
                  {{ (entry as DropdownItem).shortcut }}
                </span>
              </button>
            </template>
          </template>
        </div>
      </div>
    </Transition>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import DropdownMenu from '@/components/ui/DropdownMenu.vue'
<\/script>

<template>
  <DropdownMenu
    trigger-text="操作选项"
    align="left"
    @select="item => console.log('Selected:', item)"
  />
</template>`,propsList:[{name:"items",type:"(DropdownItem | DropdownGroup)[]",default:"内置默认菜单项",description:"菜单分组与项配置，支持单选/多选/快捷键"},{name:"align",type:"'left' | 'right' | 'center'",default:"'left'",description:"下拉对齐基准"},{name:"triggerText",type:"string",default:"'Options'",description:"默认按钮文字"},{name:"width",type:"string",default:"'w-56'",description:"下拉框宽度 Tailwind 类"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用"}]}],p0={class:"sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80 transition-colors"},f0={class:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"},m0={class:"flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md shadow-blue-500/20 text-white transition-transform duration-300 group-hover:scale-105"},b0={class:"hidden md:flex items-center gap-6 text-sm font-medium"},g0={class:"flex items-center gap-3"},h0={href:"https://github.com",target:"_blank",rel:"noopener noreferrer",class:"flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"GitHub 仓库"},x0=ae({__name:"Header",setup(e){return(t,n)=>{const r=Tr("router-link");return f(),g("header",p0,[s("div",f0,[w(r,{to:"/",class:"flex items-center gap-2.5 group"},{default:q(()=>[s("div",m0,[w(I(Re),{class:"h-5 w-5"})]),n[0]||(n[0]=s("div",{class:"flex flex-col"},[s("div",{class:"flex items-center gap-1.5"},[s("span",{class:"text-lg font-black tracking-tight text-zinc-900 dark:text-white"},[Ae(" Aura"),s("span",{class:"text-blue-600 dark:text-blue-400"},"UI")]),s("span",{class:"rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300"}," Vue 3.5 ")]),s("span",{class:"text-[10px] text-zinc-400"},"动效原子代码库")],-1))]),_:1}),s("nav",b0,[w(r,{to:"/",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:q(()=>[...n[1]||(n[1]=[Ae(" 官网首页 ",-1)])]),_:1}),w(r,{to:"/docs/border-beam",class:"inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:q(()=>[w(I(jt),{class:"h-4 w-4"}),s("span",null,"组件库 ("+$(I(pn).length)+")",1)]),_:1}),n[2]||(n[2]=s("a",{href:"#features",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}," 核心特性 ",-1))]),s("div",g0,[w(u0),s("a",h0,[w(I(Up),{class:"h-4 w-4"})]),w(r,{to:"/docs/border-beam",class:"hidden sm:inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"},{default:q(()=>[...n[3]||(n[3]=[Ae(" 浏览代码 ",-1)])]),_:1})])])])}}}),v0={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50 transition-colors"},y0={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},k0={class:"flex flex-col md:flex-row items-center justify-between gap-6"},w0={class:"flex items-center gap-3"},z0={class:"flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"},_0={class:"flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"},C0={class:"inline-flex items-center gap-1"},S0=ae({__name:"Footer",setup(e){return(t,n)=>(f(),g("footer",v0,[s("div",y0,[s("div",k0,[s("div",w0,[s("div",z0,[w(I(Re),{class:"h-4 w-4"})]),n[0]||(n[0]=s("div",null,[s("p",{class:"text-sm font-bold text-zinc-900 dark:text-zinc-100"}," Aura UI (Vue 3) "),s("p",{class:"text-xs text-zinc-500 dark:text-zinc-400"}," 对标 Magic UI / Aceternity UI，属于 Vue 3 的动效原子代码库 ")],-1))]),s("div",_0,[n[3]||(n[3]=s("span",null,"采用 MIT 协议开源，完全支持 Copy & Paste 即用",-1)),n[4]||(n[4]=s("span",null,"•",-1)),s("span",C0,[n[1]||(n[1]=Ae(" Built with ",-1)),w(I(qp),{class:"h-3 w-3 text-red-500 fill-red-500"}),n[2]||(n[2]=Ae(" for Vue 3 ecosystem ",-1))])])])])]))}}),I0={class:"min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-200"},A0={class:"flex-1"},M0=ae({__name:"App",setup(e){return(t,n)=>{const r=Tr("router-view");return f(),g("div",I0,[w(x0),s("div",A0,[w(r)]),w(S0)])}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ln=typeof document<"u";function wc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&wc(e.default)}const Le=Object.assign;function Qo(e,t){const n={};for(const r in t){const o=t[r];n[r]=Tt(o)?o.map(e):e(o)}return n}const hr=()=>{},Tt=Array.isArray;function ra(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const zc=/#/g,P0=/&/g,T0=/\//g,R0=/=/g,E0=/\?/g,_c=/\+/g,L0=/%5B/g,F0=/%5D/g,Cc=/%5E/g,D0=/%60/g,Sc=/%7B/g,V0=/%7C/g,Ic=/%7D/g,O0=/%20/g;function ai(e){return e==null?"":encodeURI(""+e).replace(V0,"|").replace(L0,"[").replace(F0,"]")}function j0(e){return ai(e).replace(Sc,"{").replace(Ic,"}").replace(Cc,"^")}function Rs(e){return ai(e).replace(_c,"%2B").replace(O0,"+").replace(zc,"%23").replace(P0,"%26").replace(D0,"`").replace(Sc,"{").replace(Ic,"}").replace(Cc,"^")}function B0(e){return Rs(e).replace(R0,"%3D")}function N0(e){return ai(e).replace(zc,"%23").replace(E0,"%3F")}function H0(e){return N0(e).replace(T0,"%2F")}function Mr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const G0=/\/$/,U0=e=>e.replace(G0,"");function Jo(e,t,n="/"){let r,o={},i="",l="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=t.slice(0,c),i=t.slice(c,a>0?a:t.length),o=e(i.slice(1))),a>=0&&(r=r||t.slice(0,a),l=t.slice(a,t.length)),r=K0(r??t,n),{fullPath:r+i+l,path:r,query:o,hash:Mr(l)}}function q0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function oa(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function W0(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Un(t.matched[r],n.matched[o])&&Ac(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Un(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ac(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!X0(e[n],t[n]))return!1;return!0}function X0(e,t){return Tt(e)?sa(e,t):Tt(t)?sa(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function sa(e,t){return Tt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function K0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=n.length-1,l,a;for(l=0;l<r.length;l++)if(a=r[l],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(l).join("/")}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Es=(function(e){return e.pop="pop",e.push="push",e})({}),es=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Y0(e){if(!e)if(Ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),U0(e)}const Z0=/^[^#]+#/;function Q0(e,t){return e.replace(Z0,"#")+t}function J0(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Lo=()=>({left:window.scrollX,top:window.scrollY});function ef(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=J0(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ia(e,t){return(history.state?history.state.position-t:-1)+e}const Ls=new Map;function tf(e,t){Ls.set(e,t)}function nf(e){const t=Ls.get(e);return Ls.delete(e),t}function rf(e){return typeof e=="string"||e&&typeof e=="object"}function Mc(e){return typeof e=="string"||typeof e=="symbol"}let Ye=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const $c=Symbol("");Ye.MATCHER_NOT_FOUND+"",Ye.NAVIGATION_GUARD_REDIRECT+"",Ye.NAVIGATION_ABORTED+"",Ye.NAVIGATION_CANCELLED+"",Ye.NAVIGATION_DUPLICATED+"";function qn(e,t){return Le(new Error,{type:e,[$c]:!0},t)}function Kt(e,t){return e instanceof Error&&$c in e&&(t==null||!!(e.type&t))}const of=["params","query","hash"];function sf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of of)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function af(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const o=n[r].replace(_c," "),i=o.indexOf("="),l=Mr(i<0?o:o.slice(0,i)),a=i<0?null:Mr(o.slice(i+1));if(l in t){let c=t[l];Tt(c)||(c=t[l]=[c]),c.push(a)}else t[l]=a}return t}function aa(e){let t="";for(let n in e){const r=e[n];if(n=B0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Tt(r)?r.map(o=>o&&Rs(o)):[r&&Rs(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function lf(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Tt(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const cf=Symbol(""),la=Symbol(""),li=Symbol(""),ci=Symbol(""),Fs=Symbol("");function tr(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function dn(e,t,n,r,o,i=l=>l()){const l=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const p=b=>{b===!1?c(qn(Ye.NAVIGATION_ABORTED,{from:n,to:t})):b instanceof Error?c(b):rf(b)?c(qn(Ye.NAVIGATION_GUARD_REDIRECT,{from:t,to:b})):(l&&r.enterCallbacks[o]===l&&typeof b=="function"&&l.push(b),a())},u=i(()=>e.call(r&&r.instances[o],t,n,p));let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(b=>c(b))})}function ts(e,t,n,r,o=i=>i()){const i=[];for(const l of e)for(const a in l.components){let c=l.components[a];if(!(t!=="beforeRouteEnter"&&!l.instances[a]))if(wc(c)){const p=(c.__vccOpts||c)[t];p&&i.push(dn(p,n,r,l,a,o))}else{let p=c();i.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${l.path}"`);const d=$0(u)?u.default:u;l.mods[a]=u,l.components[a]=d;const b=(d.__vccOpts||d)[t];return b&&dn(b,n,r,l,a,o)()}))}}return i}function df(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let l=0;l<i;l++){const a=t.matched[l];a&&(e.matched.find(p=>Un(p,a))?r.push(a):n.push(a));const c=e.matched[l];c&&(t.matched.find(p=>Un(p,c))||o.push(c))}return[n,r,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let uf=()=>location.protocol+"//"+location.host;function Pc(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let l=o.includes(e.slice(i))?e.slice(i).length:1,a=o.slice(l);return a[0]!=="/"&&(a="/"+a),oa(a,"")}return oa(n,e)+r+o}function pf(e,t,n,r){let o=[],i=[],l=null;const a=({state:b})=>{const m=Pc(e,location),v=n.value,h=t.value;let z=0;if(b){if(n.value=m,t.value=b,l&&l===v){l=null;return}z=h?b.position-h.position:0}else r(m);o.forEach(_=>{_(n.value,v,{delta:z,type:Es.pop,direction:z?z>0?es.forward:es.back:es.unknown})})};function c(){l=n.value}function p(b){o.push(b);const m=()=>{const v=o.indexOf(b);v>-1&&o.splice(v,1)};return i.push(m),m}function u(){if(document.visibilityState==="hidden"){const{history:b}=window;if(!b.state)return;b.replaceState(Le({},b.state,{scroll:Lo()}),"")}}function d(){for(const b of i)b();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:p,destroy:d}}function ca(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?Lo():null}}function ff(e){const{history:t,location:n}=window,r={value:Pc(e,n)},o={value:t.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,p,u){const d=e.indexOf("#"),b=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:uf()+e+c;try{t[u?"replaceState":"pushState"](p,"",b),o.value=p}catch(m){console.error(m),n[u?"replace":"assign"](b)}}function l(c,p){i(c,Le({},t.state,ca(o.value.back,c,o.value.forward,!0),p,{position:o.value.position}),!0),r.value=c}function a(c,p){const u=Le({},o.value,t.state,{forward:c,scroll:Lo()});i(u.current,u,!0),i(c,Le({},ca(r.value,c,null),{position:u.position+1},p),!1),r.value=c}return{location:r,state:o,push:a,replace:l}}function mf(e){e=Y0(e);const t=ff(e),n=pf(e,t.state,t.location,t.replace);function r(i,l=!0){l||n.pauseListeners(),history.go(i)}const o=Le({location:"",base:e,go:r,createHref:Q0.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let An=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var tt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(tt||{});const bf={type:An.Static,value:""},gf=/[a-zA-Z0-9_]/;function hf(e){if(!e)return[[]];if(e==="/")return[[bf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${p}": ${m}`)}let n=tt.Static,r=n;const o=[];let i;function l(){i&&o.push(i),i=[]}let a=0,c,p="",u="";function d(){p&&(n===tt.Static?i.push({type:An.Static,value:p}):n===tt.Param||n===tt.ParamRegExp||n===tt.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),i.push({type:An.Param,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function b(){p+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==tt.ParamRegExp){r=n,n=tt.EscapeNext;continue}switch(n){case tt.Static:c==="/"?(p&&d(),l()):c===":"?(d(),n=tt.Param):b();break;case tt.EscapeNext:b(),n=r;break;case tt.Param:c==="("?n=tt.ParamRegExp:gf.test(c)?b():(d(),n=tt.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case tt.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=tt.ParamRegExpEnd:u+=c;break;case tt.ParamRegExpEnd:d(),n=tt.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===tt.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),d(),l(),o}const da="[^/]+?",xf={sensitive:!1,strict:!1,start:!0,end:!0};var ht=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(ht||{});const vf=/[.+*?^${}()[\]/\\]/g;function yf(e,t){const n=Le({},xf,t),r=[];let o=n.start?"^":"";const i=[];for(const p of e){const u=p.length?[]:[ht.Root];n.strict&&!p.length&&(o+="/");for(let d=0;d<p.length;d++){const b=p[d];let m=ht.Segment+(n.sensitive?ht.BonusCaseSensitive:0);if(b.type===An.Static)d||(o+="/"),o+=b.value.replace(vf,"\\$&"),m+=ht.Static;else if(b.type===An.Param){const{value:v,repeatable:h,optional:z,regexp:_}=b;i.push({name:v,repeatable:h,optional:z});const y=_||da;if(y!==da){m+=ht.BonusCustomRegExp;try{`${y}`}catch(M){throw new Error(`Invalid custom RegExp for param "${v}" (${y}): `+M.message)}}let C=h?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;d||(C=z&&p.length<2?`(?:/${C})`:"/"+C),z&&(C+="?"),o+=C,m+=ht.Dynamic,z&&(m+=ht.BonusOptional),h&&(m+=ht.BonusRepeatable),y===".*"&&(m+=ht.BonusWildcard)}u.push(m)}r.push(u)}if(n.strict&&n.end){const p=r.length-1;r[p][r[p].length-1]+=ht.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const l=new RegExp(o,n.sensitive?"":"i");function a(p){const u=p.match(l),d={};if(!u)return null;for(let b=1;b<u.length;b++){const m=u[b]||"",v=i[b-1];d[v.name]=m&&v.repeatable?m.split("/"):m}return d}function c(p){let u="",d=!1;for(const b of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of b)if(m.type===An.Static)u+=m.value;else if(m.type===An.Param){const{value:v,repeatable:h,optional:z}=m,_=v in p?p[v]:"";if(Tt(_)&&!h)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const y=Tt(_)?_.join("/"):_;if(!y)if(z)b.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=y}}return u||"/"}return{re:l,score:r,keys:i,parse:a,stringify:c}}function kf(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===ht.Static+ht.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===ht.Static+ht.Segment?1:-1:0}function Tc(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const i=kf(r[n],o[n]);if(i)return i;n++}if(Math.abs(o.length-r.length)===1){if(ua(r))return 1;if(ua(o))return-1}return o.length-r.length}function ua(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const wf={strict:!1,end:!0,sensitive:!1};function zf(e,t,n){const r=yf(hf(e.path),n),o=Le(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function _f(e,t){const n=[],r=new Map;t=ra(wf,t);function o(d){return r.get(d)}function i(d,b,m){const v=!m,h=fa(d);h.aliasOf=m&&m.record;const z=ra(t,d),_=[h];if("alias"in d){const M=typeof d.alias=="string"?[d.alias]:d.alias;for(const R of M)_.push(fa(Le({},h,{components:m?m.record.components:h.components,path:R,aliasOf:m?m.record:h})))}let y,C;for(const M of _){const{path:R}=M;if(b&&R[0]!=="/"){const V=b.record.path,O=V[V.length-1]==="/"?"":"/";M.path=b.record.path+(R&&O+R)}if(y=zf(M,b,z),m?m.alias.push(y):(C=C||y,C!==y&&C.alias.push(y),v&&d.name&&!ma(y)&&l(d.name)),Rc(y)&&c(y),h.children){const V=h.children;for(let O=0;O<V.length;O++)i(V[O],y,m&&m.children[O])}m=m||y}return C?()=>{l(C)}:hr}function l(d){if(Mc(d)){const b=r.get(d);b&&(r.delete(d),n.splice(n.indexOf(b),1),b.children.forEach(l),b.alias.forEach(l))}else{const b=n.indexOf(d);b>-1&&(n.splice(b,1),d.record.name&&r.delete(d.record.name),d.children.forEach(l),d.alias.forEach(l))}}function a(){return n}function c(d){const b=If(d,n);n.splice(b,0,d),d.record.name&&!ma(d)&&r.set(d.record.name,d)}function p(d,b){let m,v={},h,z;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw qn(Ye.MATCHER_NOT_FOUND,{location:d});z=m.record.name,v=Le(pa(b.params,m.keys.filter(C=>!C.optional).concat(m.parent?m.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),d.params&&pa(d.params,m.keys.map(C=>C.name))),h=m.stringify(v)}else if(d.path!=null)h=d.path,m=n.find(C=>C.re.test(h)),m&&(v=m.parse(h),z=m.record.name);else{if(m=b.name?r.get(b.name):n.find(C=>C.re.test(b.path)),!m)throw qn(Ye.MATCHER_NOT_FOUND,{location:d,currentLocation:b});z=m.record.name,v=Le({},b.params,d.params),h=m.stringify(v)}const _=[];let y=m;for(;y;)_.unshift(y.record),y=y.parent;return{name:z,path:h,params:v,matched:_,meta:Sf(_)}}e.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:p,removeRoute:l,clearRoutes:u,getRoutes:a,getRecordMatcher:o}}function pa(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function fa(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Cf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Cf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ma(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Sf(e){return e.reduce((t,n)=>Le(t,n.meta),{})}function If(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Tc(e,t[i])<0?r=i:n=i+1}const o=Af(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function Af(e){let t=e;for(;t=t.parent;)if(Rc(t)&&Tc(e,t)===0)return t}function Rc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ba(e){const t=Nt(li),n=Nt(ci),r=ne(()=>{const c=I(e.to);return t.resolve(c)}),o=ne(()=>{const{matched:c}=r.value,{length:p}=c,u=c[p-1],d=n.matched;if(!u||!d.length)return-1;const b=d.findIndex(Un.bind(null,u));if(b>-1)return b;const m=ga(c[p-2]);return p>1&&ga(u)===m&&d[d.length-1].path!==m?d.findIndex(Un.bind(null,c[p-2])):b}),i=ne(()=>o.value>-1&&Rf(n.params,r.value.params)),l=ne(()=>o.value>-1&&o.value===n.matched.length-1&&Ac(n.params,r.value.params));function a(c={}){if(Tf(c)){const p=t[I(e.replace)?"replace":"push"](I(e.to)).catch(hr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:r,href:ne(()=>r.value.href),isActive:i,isExactActive:l,navigate:a}}function Mf(e){return e.length===1?e[0]:e}const $f=ae({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ba,setup(e,{slots:t}){const n=_o(ba(e)),{options:r}=Nt(li),o=ne(()=>({[ha(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ha(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Mf(t.default(n));return e.custom?i:Hn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Pf=$f;function Tf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Rf(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Tt(o)||o.length!==r.length||r.some((i,l)=>i.valueOf()!==o[l].valueOf()))return!1}return!0}function ga(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ha=(e,t,n)=>e??t??n,Ef=ae({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Nt(Fs),o=ne(()=>e.route||r.value),i=Nt(la,0),l=ne(()=>{let p=I(i);const{matched:u}=o.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),a=ne(()=>o.value.matched[l.value]);Kr(la,ne(()=>l.value+1)),Kr(cf,a),Kr(Fs,o);const c=T();return it(()=>[c.value,a.value,e.name],([p,u,d],[b,m,v])=>{u&&(u.instances[d]=p,m&&m!==u&&p&&p===b&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),p&&u&&(!m||!Un(u,m)||!b)&&(u.enterCallbacks[d]||[]).forEach(h=>h(p))},{flush:"post"}),()=>{const p=o.value,u=e.name,d=a.value,b=d&&d.components[u];if(!b)return xa(n.default,{Component:b,route:p});const m=d.props[u],v=m?m===!0?p.params:typeof m=="function"?m(p):m:null,z=Hn(b,Le({},v,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return xa(n.default,{Component:z,route:p})||z}}});function xa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Lf=Ef;function Ff(e){const t=_f(e.routes,e),n=e.parseQuery||af,r=e.stringifyQuery||aa,o=e.history,i=tr(),l=tr(),a=tr(),c=Fd(on);let p=on;Ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Qo.bind(null,j=>""+j),d=Qo.bind(null,H0),b=Qo.bind(null,Mr);function m(j,se){let G,fe;return Mc(j)?(G=t.getRecordMatcher(j),fe=se):fe=j,t.addRoute(fe,G)}function v(j){const se=t.getRecordMatcher(j);se&&t.removeRoute(se)}function h(){return t.getRoutes().map(j=>j.record)}function z(j){return!!t.getRecordMatcher(j)}function _(j,se){if(se=Le({},se||c.value),typeof j=="string"){const E=Jo(n,j,se.path),D=t.resolve({path:E.path},se),B=o.createHref(E.fullPath);return Le(E,D,{params:b(D.params),hash:Mr(E.hash),redirectedFrom:void 0,href:B})}let G;if(j.path!=null)G=Le({},j,{path:Jo(n,j.path,se.path).path});else{const E=Le({},j.params);for(const D in E)E[D]==null&&delete E[D];G=Le({},j,{params:d(E)}),se.params=d(se.params)}const fe=t.resolve(G,se),k=j.hash||"";fe.params=u(b(fe.params));const S=q0(r,Le({},j,{hash:j0(k),path:fe.path})),P=o.createHref(S);return Le({fullPath:S,hash:k,query:r===aa?lf(j.query):j.query||{}},fe,{redirectedFrom:void 0,href:P})}function y(j){return typeof j=="string"?Jo(n,j,c.value.path):Le({},j)}function C(j,se){if(p!==j)return qn(Ye.NAVIGATION_CANCELLED,{from:se,to:j})}function M(j){return O(j)}function R(j){return M(Le(y(j),{replace:!0}))}function V(j,se){const G=j.matched[j.matched.length-1];if(G&&G.redirect){const{redirect:fe}=G;let k=typeof fe=="function"?fe(j,se):fe;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=y(k):{path:k},k.params={}),Le({query:j.query,hash:j.hash,params:k.path!=null?{}:j.params},k)}}function O(j,se){const G=p=_(j),fe=c.value,k=j.state,S=j.force,P=j.replace===!0,E=V(G,fe);if(E)return O(Le(y(E),{state:typeof E=="object"?Le({},k,E.state):k,force:S,replace:P}),se||G);const D=G;D.redirectedFrom=se;let B;return!S&&W0(r,fe,G)&&(B=qn(Ye.NAVIGATION_DUPLICATED,{to:D,from:fe}),je(fe,fe,!0,!1)),(B?Promise.resolve(B):oe(D,fe)).catch(U=>Kt(U)?Kt(U,Ye.NAVIGATION_GUARD_REDIRECT)?U:Z(U):J(U,D,fe)).then(U=>{if(U){if(Kt(U,Ye.NAVIGATION_GUARD_REDIRECT))return O(Le({replace:P},y(U.to),{state:typeof U.to=="object"?Le({},k,U.to.state):k,force:S}),se||D)}else U=W(D,fe,!0,P,k);return be(D,fe,U),U})}function F(j,se){const G=C(j,se);return G?Promise.reject(G):Promise.resolve()}function L(j){const se=Ue.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(j):j()}function oe(j,se){let G;const[fe,k,S]=df(j,se);G=ts(fe.reverse(),"beforeRouteLeave",j,se);for(const E of fe)E.leaveGuards.forEach(D=>{G.push(dn(D,j,se))});const P=F.bind(null,j,se);return G.push(P),Ie(G).then(()=>{G=[];for(const E of i.list())G.push(dn(E,j,se));return G.push(P),Ie(G)}).then(()=>{G=ts(k,"beforeRouteUpdate",j,se);for(const E of k)E.updateGuards.forEach(D=>{G.push(dn(D,j,se))});return G.push(P),Ie(G)}).then(()=>{G=[];for(const E of S)if(E.beforeEnter)if(Tt(E.beforeEnter))for(const D of E.beforeEnter)G.push(dn(D,j,se));else G.push(dn(E.beforeEnter,j,se));return G.push(P),Ie(G)}).then(()=>(j.matched.forEach(E=>E.enterCallbacks={}),G=ts(S,"beforeRouteEnter",j,se,L),G.push(P),Ie(G))).then(()=>{G=[];for(const E of l.list())G.push(dn(E,j,se));return G.push(P),Ie(G)}).catch(E=>Kt(E,Ye.NAVIGATION_CANCELLED)?E:Promise.reject(E))}function be(j,se,G){a.list().forEach(fe=>L(()=>fe(j,se,G)))}function W(j,se,G,fe,k){const S=C(j,se);if(S)return S;const P=se===on,E=Ln?history.state:{};G&&(fe||P?o.replace(j.fullPath,Le({scroll:P&&E&&E.scroll},k)):o.push(j.fullPath,k)),c.value=j,je(j,se,G,P),Z()}let ye;function Me(){ye||(ye=o.listen((j,se,G)=>{if(!$e.listening)return;const fe=_(j),k=V(fe,$e.currentRoute.value);if(k){O(Le(k,{replace:!0,force:!0}),fe).catch(hr);return}p=fe;const S=c.value;Ln&&tf(ia(S.fullPath,G.delta),Lo()),oe(fe,S).catch(P=>Kt(P,Ye.NAVIGATION_ABORTED|Ye.NAVIGATION_CANCELLED)?P:Kt(P,Ye.NAVIGATION_GUARD_REDIRECT)?(O(Le(y(P.to),{force:!0}),fe).then(E=>{Kt(E,Ye.NAVIGATION_ABORTED|Ye.NAVIGATION_DUPLICATED)&&!G.delta&&G.type===Es.pop&&o.go(-1,!1)}).catch(hr),Promise.reject()):(G.delta&&o.go(-G.delta,!1),J(P,fe,S))).then(P=>{P=P||W(fe,S,!1),P&&(G.delta&&!Kt(P,Ye.NAVIGATION_CANCELLED)?o.go(-G.delta,!1):G.type===Es.pop&&Kt(P,Ye.NAVIGATION_ABORTED|Ye.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),be(fe,S,P)}).catch(hr)}))}let Oe=tr(),ee=tr(),re;function J(j,se,G){Z(j);const fe=ee.list();return fe.length?fe.forEach(k=>k(j,se,G)):console.error(j),Promise.reject(j)}function _e(){return re&&c.value!==on?Promise.resolve():new Promise((j,se)=>{Oe.add([j,se])})}function Z(j){return re||(re=!j,Me(),Oe.list().forEach(([se,G])=>j?G(j):se()),Oe.reset()),j}function je(j,se,G,fe){const{scrollBehavior:k}=e;if(!Ln||!k)return Promise.resolve();const S=!G&&nf(ia(j.fullPath,0))||(fe||!G)&&history.state&&history.state.scroll||null;return On().then(()=>k(j,se,S)).then(P=>P&&ef(P)).catch(P=>J(P,j,se))}const ze=j=>o.go(j);let lt;const Ue=new Set,$e={currentRoute:c,listening:!0,addRoute:m,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:z,getRoutes:h,resolve:_,options:e,push:M,replace:R,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:l.add,afterEach:a.add,onError:ee.add,isReady:_e,install(j){j.component("RouterLink",Pf),j.component("RouterView",Lf),j.config.globalProperties.$router=$e,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>I(c)}),Ln&&!lt&&c.value===on&&(lt=!0,M(o.location).catch(fe=>{}));const se={};for(const fe in on)Object.defineProperty(se,fe,{get:()=>c.value[fe],enumerable:!0});j.provide(li,$e),j.provide(ci,dl(se)),j.provide(Fs,c);const G=j.unmount;Ue.add(j),j.unmount=function(){Ue.delete(j),Ue.size<1&&(p=on,ye&&ye(),ye=null,c.value=on,lt=!1,re=!1),G()}}};function Ie(j){return j.reduce((se,G)=>se.then(()=>L(G)),Promise.resolve())}return $e}function Df(e){return Nt(ci)}function Ec(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Ec(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Vf(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Ec(e))&&(r&&(r+=" "),r+=t);return r}const Of=(e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},jf=(e,t)=>({classGroupId:e,validator:t}),Lc=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),bo="-",va=[],Bf="arbitrary..",Nf=e=>{const t=Gf(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:l=>{if(l.startsWith("[")&&l.endsWith("]"))return Hf(l);const a=l.split(bo),c=a[0]===""&&a.length>1?1:0;return Fc(a,c,t)},getConflictingClassGroupIds:(l,a)=>{if(a){const c=r[l],p=n[l];return c?p?Of(p,c):c:p||va}return n[l]||va}}},Fc=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const o=e[t],i=n.nextPart.get(o);if(i){const p=Fc(e,t+1,i);if(p)return p}const l=n.validators;if(l===null)return;const a=t===0?e.join(bo):e.slice(t).join(bo),c=l.length;for(let p=0;p<c;p++){const u=l[p];if(u.validator(a))return u.classGroupId}},Hf=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?Bf+r:void 0})(),Gf=e=>{const{theme:t,classGroups:n}=e;return Uf(n,t)},Uf=(e,t)=>{const n=Lc();for(const r in e){const o=e[r];di(o,n,r,t)}return n},di=(e,t,n,r)=>{const o=e.length;for(let i=0;i<o;i++){const l=e[i];qf(l,t,n,r)}},qf=(e,t,n,r)=>{if(typeof e=="string"){Wf(e,t,n);return}if(typeof e=="function"){Xf(e,t,n,r);return}Kf(e,t,n,r)},Wf=(e,t,n)=>{const r=e===""?t:Dc(t,e);r.classGroupId=n},Xf=(e,t,n,r)=>{if(Yf(e)){di(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(jf(n,e))},Kf=(e,t,n,r)=>{const o=Object.entries(e),i=o.length;for(let l=0;l<i;l++){const[a,c]=o[l];di(c,Dc(t,a),n,r)}},Dc=(e,t)=>{let n=e;const r=t.split(bo),o=r.length;for(let i=0;i<o;i++){const l=r[i];let a=n.nextPart.get(l);a||(a=Lc(),n.nextPart.set(l,a)),n=a}return n},Yf=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,Zf=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const o=(i,l)=>{n[i]=l,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(i){let l=n[i];if(l!==void 0)return l;if((l=r[i])!==void 0)return o(i,l),l},set(i,l){i in n?n[i]=l:o(i,l)}}},Ds="!",ya=":",Qf=[],ka=(e,t,n,r,o)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:o}),Jf=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=o=>{const i=[];let l=0,a=0,c=0,p;const u=o.length;for(let h=0;h<u;h++){const z=o[h];if(l===0&&a===0){if(z===ya){i.push(o.slice(c,h)),c=h+1;continue}if(z==="/"){p=h;continue}}z==="["?l++:z==="]"?l--:z==="("?a++:z===")"&&a--}const d=i.length===0?o:o.slice(c);let b=d,m=!1;d.endsWith(Ds)?(b=d.slice(0,-1),m=!0):d.startsWith(Ds)&&(b=d.slice(1),m=!0);const v=p&&p>c?p-c:void 0;return ka(i,m,b,v)};if(t){const o=t+ya,i=r;r=l=>l.startsWith(o)?i(l.slice(o.length)):ka(Qf,!1,l,void 0,!0)}if(n){const o=r;r=i=>n({className:i,parseClassName:o})}return r},em=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{t.set(n,1e6+r)}),n=>{const r=[];let o=[];for(let i=0;i<n.length;i++){const l=n[i],a=l[0]==="[",c=t.has(l);a||c?(o.length>0&&(o.sort(),r.push(...o),o=[]),r.push(l)):o.push(l)}return o.length>0&&(o.sort(),r.push(...o)),r}},tm=e=>({cache:Zf(e.cacheSize),parseClassName:Jf(e),sortModifiers:em(e),postfixLookupClassGroupIds:nm(e),...Nf(e)}),nm=e=>{const t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let r=0;r<n.length;r++)t[n[r]]=!0;return t},rm=/\s+/,om=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:i,postfixLookupClassGroupIds:l}=t,a=[],c=e.trim().split(rm);let p="";for(let u=c.length-1;u>=0;u-=1){const d=c[u],{isExternal:b,modifiers:m,hasImportantModifier:v,baseClassName:h,maybePostfixModifierPosition:z}=n(d);if(b){p=d+(p.length>0?" "+p:p);continue}let _=!!z,y;if(_){const O=h.substring(0,z);y=r(O);const F=y&&l[y]?r(h):void 0;F&&F!==y&&(y=F,_=!1)}else y=r(h);if(!y){if(!_){p=d+(p.length>0?" "+p:p);continue}if(y=r(h),!y){p=d+(p.length>0?" "+p:p);continue}_=!1}const C=m.length===0?"":m.length===1?m[0]:i(m).join(":"),M=v?C+Ds:C,R=M+y;if(a.indexOf(R)>-1)continue;a.push(R);const V=o(y,_);for(let O=0;O<V.length;++O){const F=V[O];a.push(M+F)}p=d+(p.length>0?" "+p:p)}return p},sm=(...e)=>{let t=0,n,r,o="";for(;t<e.length;)(n=e[t++])&&(r=Vc(n))&&(o&&(o+=" "),o+=r);return o},Vc=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Vc(e[r]))&&(n&&(n+=" "),n+=t);return n},im=(e,...t)=>{let n,r,o,i;const l=c=>{const p=t.reduce((u,d)=>d(u),e());return n=tm(p),r=n.cache.get,o=n.cache.set,i=a,a(c)},a=c=>{const p=r(c);if(p)return p;const u=om(c,n);return o(c,u),u};return i=l,(...c)=>i(sm(...c))},am=[],et=e=>{const t=n=>n[e]||am;return t.isThemeGetter=!0,t.themeKey=e,t},Oc=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,jc=/^\((?:(\w[\w-]*):)?(.+)\)$/i,lm=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,cm=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,dm=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,um=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,pm=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,fm=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,sn=e=>lm.test(e),Ce=e=>!!e&&!Number.isNaN(Number(e)),Et=e=>!!e&&Number.isInteger(Number(e)),ns=e=>e.endsWith("%")&&Ce(e.slice(0,-1)),Yt=e=>cm.test(e),Bc=()=>!0,mm=e=>dm.test(e)&&!um.test(e),ui=()=>!1,bm=e=>pm.test(e),gm=e=>fm.test(e),hm=e=>!le(e)&&!ce(e),xm=e=>e.startsWith("@container")&&(e[10]==="/"&&e[11]!==void 0||e[11]==="s"&&e[16]!==void 0&&e.startsWith("-size/",10)||e[11]==="n"&&e[18]!==void 0&&e.startsWith("-normal/",10)),vm=e=>vn(e,Gc,ui),le=e=>Oc.test(e),zn=e=>vn(e,Uc,mm),wa=e=>vn(e,Im,Ce),ym=e=>vn(e,Wc,Bc),km=e=>vn(e,qc,ui),za=e=>vn(e,Nc,ui),wm=e=>vn(e,Hc,gm),Ur=e=>vn(e,Xc,bm),ce=e=>jc.test(e),nr=e=>Pn(e,Uc),zm=e=>Pn(e,qc),_a=e=>Pn(e,Nc),_m=e=>Pn(e,Gc),Cm=e=>Pn(e,Hc),qr=e=>Pn(e,Xc,!0),Sm=e=>Pn(e,Wc,!0),vn=(e,t,n)=>{const r=Oc.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},Pn=(e,t,n=!1)=>{const r=jc.exec(e);return r?r[1]?t(r[1]):n:!1},Nc=e=>e==="position"||e==="percentage",Hc=e=>e==="image"||e==="url",Gc=e=>e==="length"||e==="size"||e==="bg-size",Uc=e=>e==="length",Im=e=>e==="number",qc=e=>e==="family-name",Wc=e=>e==="number"||e==="weight",Xc=e=>e==="shadow",Am=()=>{const e=et("color"),t=et("font"),n=et("text"),r=et("font-weight"),o=et("tracking"),i=et("leading"),l=et("breakpoint"),a=et("container"),c=et("spacing"),p=et("radius"),u=et("shadow"),d=et("inset-shadow"),b=et("text-shadow"),m=et("drop-shadow"),v=et("blur"),h=et("perspective"),z=et("aspect"),_=et("ease"),y=et("animate"),C=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],R=()=>[...M(),ce,le],V=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto","contain","none"],F=()=>[ce,le,c],L=()=>[sn,"full","auto",...F()],oe=()=>[Et,"none","subgrid",ce,le],be=()=>["auto",{span:["full",Et,ce,le]},Et,ce,le],W=()=>[Et,"auto",ce,le],ye=()=>["auto","min","max","fr",ce,le],Me=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Oe=()=>["start","end","center","stretch","center-safe","end-safe"],ee=()=>["auto",...F()],re=()=>[sn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...F()],J=()=>[a,sn,"screen","full","dvw","lvw","svw","min","max","fit",...F()],_e=()=>[sn,"screen","full","lh","dvh","lvh","svh","min","max","fit",...F()],Z=()=>[e,ce,le],je=()=>[...M(),_a,za,{position:[ce,le]}],ze=()=>["no-repeat",{repeat:["","x","y","space","round"]}],lt=()=>["auto","cover","contain",_m,vm,{size:[ce,le]}],Ue=()=>[ns,nr,zn],$e=()=>["","none","full",p,ce,le],Ie=()=>["",Ce,nr,zn],j=()=>["solid","dashed","dotted","double"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],G=()=>[Ce,ns,_a,za],fe=()=>["","none",v,ce,le],k=()=>["none",Ce,ce,le],S=()=>["none",Ce,ce,le],P=()=>[Ce,ce,le],E=()=>[sn,"full",...F()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Yt],breakpoint:[Yt],color:[Bc],container:[Yt],"drop-shadow":[Yt],ease:["in","out","in-out"],font:[hm],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Yt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Yt],shadow:[Yt],spacing:["px",Ce],text:[Yt],"text-shadow":[Yt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",sn,le,ce,z]}],container:["container"],"container-type":[{"@container":["","normal","size",ce,le]}],"container-named":[xm],columns:[{columns:[Ce,"auto",le,ce,a]}],"break-after":[{"break-after":C()}],"break-before":[{"break-before":C()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:R()}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:L()}],"inset-x":[{"inset-x":L()}],"inset-y":[{"inset-y":L()}],start:[{"inset-s":L(),start:L()}],end:[{"inset-e":L(),end:L()}],"inset-bs":[{"inset-bs":L()}],"inset-be":[{"inset-be":L()}],top:[{top:L()}],right:[{right:L()}],bottom:[{bottom:L()}],left:[{left:L()}],visibility:["visible","invisible","collapse"],z:[{z:[Et,"auto",ce,le]}],basis:[{basis:[sn,"full","auto",a,...F()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ce,sn,"auto","initial","none",le]}],grow:[{grow:["",Ce,ce,le]}],shrink:[{shrink:["",Ce,ce,le]}],order:[{order:[Et,"first","last","none",ce,le]}],"grid-cols":[{"grid-cols":oe()}],"col-start-end":[{col:be()}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":oe()}],"row-start-end":[{row:be()}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ye()}],"auto-rows":[{"auto-rows":ye()}],gap:[{gap:F()}],"gap-x":[{"gap-x":F()}],"gap-y":[{"gap-y":F()}],"justify-content":[{justify:[...Me(),"normal"]}],"justify-items":[{"justify-items":[...Oe(),"normal"]}],"justify-self":[{"justify-self":["auto",...Oe()]}],"align-content":[{content:["normal",...Me()]}],"align-items":[{items:[...Oe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Oe(),{baseline:["","last"]}]}],"place-content":[{"place-content":Me()}],"place-items":[{"place-items":[...Oe(),"baseline"]}],"place-self":[{"place-self":["auto",...Oe()]}],p:[{p:F()}],px:[{px:F()}],py:[{py:F()}],ps:[{ps:F()}],pe:[{pe:F()}],pbs:[{pbs:F()}],pbe:[{pbe:F()}],pt:[{pt:F()}],pr:[{pr:F()}],pb:[{pb:F()}],pl:[{pl:F()}],m:[{m:ee()}],mx:[{mx:ee()}],my:[{my:ee()}],ms:[{ms:ee()}],me:[{me:ee()}],mbs:[{mbs:ee()}],mbe:[{mbe:ee()}],mt:[{mt:ee()}],mr:[{mr:ee()}],mb:[{mb:ee()}],ml:[{ml:ee()}],"space-x":[{"space-x":F()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":F()}],"space-y-reverse":["space-y-reverse"],size:[{size:re()}],"inline-size":[{inline:["auto",...J()]}],"min-inline-size":[{"min-inline":["auto",...J()]}],"max-inline-size":[{"max-inline":["none",...J()]}],"block-size":[{block:["auto",..._e()]}],"min-block-size":[{"min-block":["auto",..._e()]}],"max-block-size":[{"max-block":["none",..._e()]}],w:[{w:[a,"screen",...re()]}],"min-w":[{"min-w":[a,"screen","none",...re()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[l]},...re()]}],h:[{h:["screen","lh",...re()]}],"min-h":[{"min-h":["screen","lh","none",...re()]}],"max-h":[{"max-h":["screen","lh","none",...re()]}],"font-size":[{text:["base",n,nr,zn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Sm,ym]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ns,le]}],"font-family":[{font:[zm,km,t]}],"font-features":[{"font-features":[le]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,ce,le]}],"line-clamp":[{"line-clamp":[Ce,"none",ce,wa]}],leading:[{leading:["none",i,...F()]}],"list-image":[{"list-image":["none",ce,le]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ce,le]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:Z()}],"text-color":[{text:Z()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...j(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ce,"from-font","auto",ce,zn]}],"text-decoration-color":[{decoration:Z()}],"underline-offset":[{"underline-offset":[Ce,"auto",ce,le]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"tab-size":[{tab:[Et,ce,le]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ce,le]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ce,le]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:je()}],"bg-repeat":[{bg:ze()}],"bg-size":[{bg:lt()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Et,ce,le],radial:["",ce,le],conic:["",Et,ce,le]},Cm,wm]}],"bg-color":[{bg:Z()}],"gradient-from-pos":[{from:Ue()}],"gradient-via-pos":[{via:Ue()}],"gradient-to-pos":[{to:Ue()}],"gradient-from":[{from:Z()}],"gradient-via":[{via:Z()}],"gradient-to":[{to:Z()}],rounded:[{rounded:$e()}],"rounded-s":[{"rounded-s":$e()}],"rounded-e":[{"rounded-e":$e()}],"rounded-t":[{"rounded-t":$e()}],"rounded-r":[{"rounded-r":$e()}],"rounded-b":[{"rounded-b":$e()}],"rounded-l":[{"rounded-l":$e()}],"rounded-ss":[{"rounded-ss":$e()}],"rounded-se":[{"rounded-se":$e()}],"rounded-ee":[{"rounded-ee":$e()}],"rounded-es":[{"rounded-es":$e()}],"rounded-tl":[{"rounded-tl":$e()}],"rounded-tr":[{"rounded-tr":$e()}],"rounded-br":[{"rounded-br":$e()}],"rounded-bl":[{"rounded-bl":$e()}],"border-w":[{border:Ie()}],"border-w-x":[{"border-x":Ie()}],"border-w-y":[{"border-y":Ie()}],"border-w-s":[{"border-s":Ie()}],"border-w-e":[{"border-e":Ie()}],"border-w-bs":[{"border-bs":Ie()}],"border-w-be":[{"border-be":Ie()}],"border-w-t":[{"border-t":Ie()}],"border-w-r":[{"border-r":Ie()}],"border-w-b":[{"border-b":Ie()}],"border-w-l":[{"border-l":Ie()}],"divide-x":[{"divide-x":Ie()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ie()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...j(),"hidden","none"]}],"divide-style":[{divide:[...j(),"hidden","none"]}],"border-color":[{border:Z()}],"border-color-x":[{"border-x":Z()}],"border-color-y":[{"border-y":Z()}],"border-color-s":[{"border-s":Z()}],"border-color-e":[{"border-e":Z()}],"border-color-bs":[{"border-bs":Z()}],"border-color-be":[{"border-be":Z()}],"border-color-t":[{"border-t":Z()}],"border-color-r":[{"border-r":Z()}],"border-color-b":[{"border-b":Z()}],"border-color-l":[{"border-l":Z()}],"divide-color":[{divide:Z()}],"outline-style":[{outline:[...j(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ce,ce,le]}],"outline-w":[{outline:["",Ce,nr,zn]}],"outline-color":[{outline:Z()}],shadow:[{shadow:["","inner","none",u,qr,Ur]}],"shadow-color":[{shadow:Z()}],"inset-shadow":[{"inset-shadow":["none",d,qr,Ur]}],"inset-shadow-color":[{"inset-shadow":Z()}],"ring-w":[{ring:Ie()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:Z()}],"ring-offset-w":[{"ring-offset":[Ce,zn]}],"ring-offset-color":[{"ring-offset":Z()}],"inset-ring-w":[{"inset-ring":Ie()}],"inset-ring-color":[{"inset-ring":Z()}],"text-shadow":[{"text-shadow":["none",b,qr,Ur]}],"text-shadow-color":[{"text-shadow":Z()}],opacity:[{opacity:[Ce,ce,le]}],"mix-blend":[{"mix-blend":[...se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ce]}],"mask-image-linear-from-pos":[{"mask-linear-from":G()}],"mask-image-linear-to-pos":[{"mask-linear-to":G()}],"mask-image-linear-from-color":[{"mask-linear-from":Z()}],"mask-image-linear-to-color":[{"mask-linear-to":Z()}],"mask-image-t-from-pos":[{"mask-t-from":G()}],"mask-image-t-to-pos":[{"mask-t-to":G()}],"mask-image-t-from-color":[{"mask-t-from":Z()}],"mask-image-t-to-color":[{"mask-t-to":Z()}],"mask-image-r-from-pos":[{"mask-r-from":G()}],"mask-image-r-to-pos":[{"mask-r-to":G()}],"mask-image-r-from-color":[{"mask-r-from":Z()}],"mask-image-r-to-color":[{"mask-r-to":Z()}],"mask-image-b-from-pos":[{"mask-b-from":G()}],"mask-image-b-to-pos":[{"mask-b-to":G()}],"mask-image-b-from-color":[{"mask-b-from":Z()}],"mask-image-b-to-color":[{"mask-b-to":Z()}],"mask-image-l-from-pos":[{"mask-l-from":G()}],"mask-image-l-to-pos":[{"mask-l-to":G()}],"mask-image-l-from-color":[{"mask-l-from":Z()}],"mask-image-l-to-color":[{"mask-l-to":Z()}],"mask-image-x-from-pos":[{"mask-x-from":G()}],"mask-image-x-to-pos":[{"mask-x-to":G()}],"mask-image-x-from-color":[{"mask-x-from":Z()}],"mask-image-x-to-color":[{"mask-x-to":Z()}],"mask-image-y-from-pos":[{"mask-y-from":G()}],"mask-image-y-to-pos":[{"mask-y-to":G()}],"mask-image-y-from-color":[{"mask-y-from":Z()}],"mask-image-y-to-color":[{"mask-y-to":Z()}],"mask-image-radial":[{"mask-radial":[ce,le]}],"mask-image-radial-from-pos":[{"mask-radial-from":G()}],"mask-image-radial-to-pos":[{"mask-radial-to":G()}],"mask-image-radial-from-color":[{"mask-radial-from":Z()}],"mask-image-radial-to-color":[{"mask-radial-to":Z()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":M()}],"mask-image-conic-pos":[{"mask-conic":[Ce]}],"mask-image-conic-from-pos":[{"mask-conic-from":G()}],"mask-image-conic-to-pos":[{"mask-conic-to":G()}],"mask-image-conic-from-color":[{"mask-conic-from":Z()}],"mask-image-conic-to-color":[{"mask-conic-to":Z()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:je()}],"mask-repeat":[{mask:ze()}],"mask-size":[{mask:lt()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ce,le]}],filter:[{filter:["","none",ce,le]}],blur:[{blur:fe()}],brightness:[{brightness:[Ce,ce,le]}],contrast:[{contrast:[Ce,ce,le]}],"drop-shadow":[{"drop-shadow":["","none",m,qr,Ur]}],"drop-shadow-color":[{"drop-shadow":Z()}],grayscale:[{grayscale:["",Ce,ce,le]}],"hue-rotate":[{"hue-rotate":[Ce,ce,le]}],invert:[{invert:["",Ce,ce,le]}],saturate:[{saturate:[Ce,ce,le]}],sepia:[{sepia:["",Ce,ce,le]}],"backdrop-filter":[{"backdrop-filter":["","none",ce,le]}],"backdrop-blur":[{"backdrop-blur":fe()}],"backdrop-brightness":[{"backdrop-brightness":[Ce,ce,le]}],"backdrop-contrast":[{"backdrop-contrast":[Ce,ce,le]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ce,ce,le]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ce,ce,le]}],"backdrop-invert":[{"backdrop-invert":["",Ce,ce,le]}],"backdrop-opacity":[{"backdrop-opacity":[Ce,ce,le]}],"backdrop-saturate":[{"backdrop-saturate":[Ce,ce,le]}],"backdrop-sepia":[{"backdrop-sepia":["",Ce,ce,le]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":F()}],"border-spacing-x":[{"border-spacing-x":F()}],"border-spacing-y":[{"border-spacing-y":F()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ce,le]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ce,"initial",ce,le]}],ease:[{ease:["linear","initial",_,ce,le]}],delay:[{delay:[Ce,ce,le]}],animate:[{animate:["none",y,ce,le]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[h,ce,le]}],"perspective-origin":[{"perspective-origin":R()}],rotate:[{rotate:k()}],"rotate-x":[{"rotate-x":k()}],"rotate-y":[{"rotate-y":k()}],"rotate-z":[{"rotate-z":k()}],scale:[{scale:S()}],"scale-x":[{"scale-x":S()}],"scale-y":[{"scale-y":S()}],"scale-z":[{"scale-z":S()}],"scale-3d":["scale-3d"],skew:[{skew:P()}],"skew-x":[{"skew-x":P()}],"skew-y":[{"skew-y":P()}],transform:[{transform:[ce,le,"","none","gpu","cpu"]}],"transform-origin":[{origin:R()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:E()}],"translate-x":[{"translate-x":E()}],"translate-y":[{"translate-y":E()}],"translate-z":[{"translate-z":E()}],"translate-none":["translate-none"],zoom:[{zoom:[Et,ce,le]}],accent:[{accent:Z()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:Z()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ce,le]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":Z()}],"scrollbar-track-color":[{"scrollbar-track":Z()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mbs":[{"scroll-mbs":F()}],"scroll-mbe":[{"scroll-mbe":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pbs":[{"scroll-pbs":F()}],"scroll-pbe":[{"scroll-pbe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ce,le]}],fill:[{fill:["none",...Z()]}],"stroke-w":[{stroke:[Ce,nr,zn,wa]}],stroke:[{stroke:["none",...Z()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["start","end","right","left"],"inset-y":["inset-bs","inset-be","top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["ps","pe","pr","pl"],py:["pbs","pbe","pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["ms","me","mr","ml"],my:["mbs","mbe","mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-s","border-w-e","border-w-r","border-w-l"],"border-w-y":["border-w-bs","border-w-be","border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-s","border-color-e","border-color-r","border-color-l"],"border-color-y":["border-color-bs","border-color-be","border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-ms","scroll-me","scroll-mr","scroll-ml"],"scroll-my":["scroll-mbs","scroll-mbe","scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-ps","scroll-pe","scroll-pr","scroll-pl"],"scroll-py":["scroll-pbs","scroll-pbe","scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Mm=im(Am);function pe(...e){return Mm(Vf(e))}const $m={class:"h-full w-full overflow-visible",xmlns:"http://www.w3.org/2000/svg"},Pm=["id"],Tm=["stop-color"],Rm=["stop-color"],Em=["rx","ry","stroke","stroke-width","stroke-dasharray"],Lm=["rx","ry","stroke","stroke-width","stroke-dasharray"],Fm=ae({__name:"BorderBeam",props:{borderWidth:{default:2},size:{default:20},duration:{default:6},colorFrom:{default:"#38bdf8"},colorTo:{default:"#a855f7"},delay:{default:0},reverse:{type:Boolean,default:!1},borderRadius:{default:16},glow:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=Wn(),r=ne(()=>{if(typeof t.borderRadius=="number")return t.borderRadius;const a=parseFloat(t.borderRadius);return isNaN(a)?16:a}),o=ne(()=>t.size>50?18:Math.min(Math.max(t.size,5),80)),i=ne(()=>`${o.value} ${100-o.value}`),l=ne(()=>({animationDuration:`${t.duration}s`,animationDelay:`-${t.delay}s`,animationDirection:t.reverse?"reverse":"normal"}));return(a,c)=>(f(),g("div",{class:A(I(pe)("pointer-events-none absolute inset-0 rounded-[inherit] overflow-visible",t.class))},[(f(),g("svg",$m,[s("defs",null,[s("linearGradient",{id:`border-beam-grad-${I(n)}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[s("stop",{offset:"0%","stop-color":t.colorFrom},null,8,Tm),s("stop",{offset:"100%","stop-color":t.colorTo},null,8,Rm)],8,Pm)]),t.glow?(f(),g("rect",{key:0,pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${I(n)})`,"stroke-width":t.borderWidth*2,"stroke-dasharray":i.value,"stroke-linecap":"round",opacity:"0.45",class:"border-beam-svg-motion blur-[3px]",style:ve(l.value)},null,12,Em)):H("",!0),s("rect",{pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${I(n)})`,"stroke-width":t.borderWidth,"stroke-dasharray":i.value,"stroke-linecap":"round",class:"border-beam-svg-motion",style:ve(l.value)},null,12,Lm)]))],2))}}),Ve=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Vs=Ve(Fm,[["__scopeId","data-v-bf918acf"]]),Dm={class:"relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-white"},Vm=ae({__name:"ShimmerButton",props:{shimmerColor:{default:"#38bdf8"},shimmerSize:{default:"0.12em"},shimmerDuration:{default:"2.5s"},borderRadius:{default:"9999px"},class:{}},setup(e){const t=e,n=ne(()=>({"--shimmer-color":t.shimmerColor,"--shimmer-size":t.shimmerSize,"--speed":t.shimmerDuration,"--radius":t.borderRadius}));return(r,o)=>(f(),g("button",{style:ve(n.value),class:A(I(pe)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white transition-all duration-300 active:scale-95","border border-white/10 [border-radius:var(--radius)]","bg-zinc-900/90 shadow-md hover:shadow-lg hover:shadow-sky-500/20 dark:bg-black/90",t.class))},[o[0]||(o[0]=s("div",{class:"shimmer-spin-container pointer-events-none absolute -inset-[100%] [aspect-ratio:1] [border-radius:inherit]"},[s("div",{class:"shimmer-spin-gradient h-full w-full animate-shimmer-spin"})],-1)),o[1]||(o[1]=s("div",{class:"absolute [inset:var(--shimmer-size)] [border-radius:inherit] bg-zinc-950/95 transition-colors duration-300 group-hover:bg-zinc-900/95"},null,-1)),s("span",Dm,[Ge(r.$slots,"default",{},void 0,!0)])],6))}}),xr=Ve(Vm,[["__scopeId","data-v-6b251134"]]),Om=ae({__name:"ShinyText",props:{text:{},duration:{default:2.5},variant:{default:"white"},class:{}},setup(e){const t=e,n=ne(()=>({"--duration":`${t.duration}s`}));return(r,o)=>(f(),g("span",{style:ve(n.value),class:A(I(pe)("shiny-text-root inline-block font-bold bg-clip-text text-transparent",t.variant==="white"&&"shiny-variant-white",t.variant==="cyber"&&"shiny-variant-cyber",t.class))},[Ge(r.$slots,"default",{},()=>[Ae($(t.text),1)],!0)],6))}}),vr=Ve(Om,[["__scopeId","data-v-31108f82"]]),jm=ae({__name:"RetroGrid",props:{angle:{default:65},cellSize:{default:60},opacity:{default:.5},lightLineColor:{default:"#94a3b8"},darkLineColor:{default:"#38bdf8"},mask:{type:Boolean,default:!0},maskClass:{},class:{}},setup(e){const t=e,n=ne(()=>({"--grid-angle":`${t.angle}deg`,"--cell-size":`${t.cellSize}px`,"--opacity":t.opacity.toString(),"--light-line":t.lightLineColor,"--dark-line":t.darkLineColor}));return(r,o)=>(f(),g("div",{style:ve(n.value),class:A(I(pe)("pointer-events-none absolute h-full w-full overflow-hidden opacity-[var(--opacity)] [perspective:200px]",t.class))},[s("div",{class:A(I(pe)("absolute inset-0 [transform:rotateX(var(--grid-angle))]",t.mask&&"retro-grid-horizon-mask"))},[...o[0]||(o[0]=[s("div",{class:"retro-grid-plane animate-retro-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]"},null,-1)])],2)],6))}}),Os=Ve(jm,[["__scopeId","data-v-2d20ad14"]]),Kc=ae({__name:"BentoGrid",props:{class:{}},setup(e){const t=e;return(n,r)=>(f(),g("div",{class:A(I(pe)("grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",t.class))},[Ge(n.$slots,"default")],2))}}),Bm={class:"relative z-0 h-44 w-full overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"},Nm={class:"relative z-10 flex flex-col gap-2 pt-4"},Hm={class:"flex items-center gap-2.5"},Gm={class:"text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},Um={class:"text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"},qm={key:0,class:"mt-3 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400"},Wm=ae({__name:"BentoCard",props:{name:{},description:{},class:{},href:{},cta:{},spotlightRadius:{default:300}},setup(e){const t=e,n=T(0),r=T(0),o=T(!1);function i(l){const a=l.currentTarget.getBoundingClientRect();n.value=l.clientX-a.left,r.value=l.clientY-a.top}return(l,a)=>{const c=Tr("router-link");return f(),g("div",{class:A(I(pe)("group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300","border border-zinc-200 bg-white/70 shadow-sm backdrop-blur-md hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10",t.class)),onMousemove:i,onMouseenter:a[0]||(a[0]=p=>o.value=!0),onMouseleave:a[1]||(a[1]=p=>o.value=!1)},[s("div",{class:"pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",style:ve({background:`radial-gradient(${t.spotlightRadius}px circle at ${n.value}px ${r.value}px, var(--spotlight-color), transparent 80%)`})},null,4),s("div",Bm,[Ge(l.$slots,"background",{},void 0,!0)]),s("div",Nm,[s("div",Hm,[Ge(l.$slots,"icon",{},void 0,!0),s("h3",Gm,$(t.name),1)]),s("p",Um,$(t.description),1),t.cta||l.$slots.cta?(f(),g("div",qm,[Ge(l.$slots,"cta",{},()=>[t.href?(f(),me(c,{key:0,to:t.href,class:"inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"},{default:q(()=>[Ae($(t.cta)+" ",1),a[2]||(a[2]=s("span",{"aria-hidden":"true"},"→",-1))]),_:1},8,["to"])):H("",!0)],!0)])):H("",!0)])],34)}}}),bt=Ve(Wm,[["__scopeId","data-v-f7ebca2d"]]),Xm=ae({__name:"Marquee",props:{duration:{default:30},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},repeat:{default:4},class:{}},setup(e){const t=e,n=ne(()=>({"--duration":`${t.duration}s`}));return(r,o)=>(f(),g("div",{style:ve(n.value),class:A(I(pe)("group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",t.vertical?"flex-col":"flex-row",t.class))},[(f(!0),g(ie,null,ke(t.repeat,i=>(f(),g("div",{key:i,class:A(I(pe)("flex shrink-0 justify-around [gap:var(--gap)]",t.vertical?"flex-col animate-marquee-vertical":"flex-row animate-marquee",t.pauseOnHover&&"group-hover:[animation-play-state:paused]",t.reverse&&"[animation-direction:reverse]"))},[Ge(r.$slots,"default",{},void 0,!0)],2))),128))],6))}}),Jr=Ve(Xm,[["__scopeId","data-v-2ea856f7"]]),Km={"aria-hidden":"true",class:"pointer-events-none h-full w-full fill-neutral-400/60 dark:fill-neutral-600/60 transition-colors"},Ym=["id","width","height","x","y"],Zm=["cx","cy","r"],Qm=["fill"],Yc=ae({__name:"DotPattern",props:{width:{default:20},height:{default:20},x:{default:0},y:{default:0},cx:{default:1},cy:{default:1},cr:{default:1},glow:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=Wn(),r=T(-9999),o=T(-9999);function i(a){if(!t.glow)return;const c=a.currentTarget.getBoundingClientRect();r.value=a.clientX-c.left,o.value=a.clientY-c.top}function l(){r.value=-9999,o.value=-9999}return(a,c)=>(f(),g("div",{class:A(I(pe)("absolute inset-0 h-full w-full overflow-hidden",t.glow?"pointer-events-auto":"pointer-events-none",t.class)),onMousemove:i,onMouseleave:l},[(f(),g("svg",Km,[s("defs",null,[s("pattern",{id:I(n),width:t.width,height:t.height,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:t.x,y:t.y},[s("circle",{cx:t.cx,cy:t.cy,r:t.cr},null,8,Zm)],8,Ym)]),s("rect",{width:"100%",height:"100%",fill:`url(#${I(n)})`},null,8,Qm)])),t.glow?(f(),g("div",{key:0,class:"absolute inset-0 transition-opacity duration-300",style:ve({background:`radial-gradient(200px circle at ${r.value}px ${o.value}px, rgba(59, 130, 246, 0.15), transparent 80%)`})},null,4)):H("",!0)],34))}}),Jm={class:"relative z-10 h-full w-full"},Zc=ae({__name:"InteractiveParticles",props:{quantity:{default:50},speed:{default:.6},maxRadius:{default:2},mouseRadius:{default:100},color:{},connectLines:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=T(null);let r=null,o=[];const i={x:-9999,y:-9999};function l(d,b){o=[];for(let m=0;m<t.quantity;m++)o.push({x:Math.random()*d,y:Math.random()*b,vx:(Math.random()-.5)*t.speed,vy:(Math.random()-.5)*t.speed,size:Math.random()*t.maxRadius+.8,baseAlpha:Math.random()*.5+.2,alpha:Math.random()*.5+.2})}function a(){const d=n.value;if(!d)return;const b=window.devicePixelRatio||1,m=d.getBoundingClientRect();d.width=m.width*b,d.height=m.height*b;const v=d.getContext("2d");v&&v.scale(b,b),l(m.width,m.height)}function c(d){const b=n.value;if(!b)return;const m=b.getBoundingClientRect();i.x=d.clientX-m.left,i.y=d.clientY-m.top}function p(){i.x=-9999,i.y=-9999}function u(){const d=n.value;if(!d)return;const b=d.getContext("2d");if(!b)return;const m=d.getBoundingClientRect(),v=m.width,h=m.height;b.clearRect(0,0,v,h);const _=document.documentElement.classList.contains("dark")?"255, 255, 255":"59, 130, 246",y=t.color||_;for(let C=0;C<o.length;C++){const M=o[C];M.x+=M.vx,M.y+=M.vy,(M.x<0||M.x>v)&&(M.vx*=-1),(M.y<0||M.y>h)&&(M.vy*=-1);const R=i.x-M.x,V=i.y-M.y,O=Math.sqrt(R*R+V*V);if(O<t.mouseRadius){const F=(t.mouseRadius-O)/t.mouseRadius;M.x-=R/O*F*2,M.y-=V/O*F*2,M.alpha=Math.min(M.baseAlpha+.4,.9)}else M.alpha=M.baseAlpha;if(b.beginPath(),b.arc(M.x,M.y,M.size,0,Math.PI*2),b.fillStyle=y.startsWith("#")?y:`rgba(${y}, ${M.alpha})`,b.fill(),t.connectLines)for(let F=C+1;F<o.length;F++){const L=o[F],oe=Math.hypot(M.x-L.x,M.y-L.y);if(oe<80){b.beginPath(),b.moveTo(M.x,M.y),b.lineTo(L.x,L.y);const be=(1-oe/80)*.15;b.strokeStyle=`rgba(${_}, ${be})`,b.lineWidth=.6,b.stroke()}}}r=requestAnimationFrame(u)}return qe(()=>{a(),window.addEventListener("resize",a),u()}),Xe(()=>{window.removeEventListener("resize",a),r!==null&&cancelAnimationFrame(r)}),it(()=>t.quantity,()=>{const d=n.value;if(d){const b=d.getBoundingClientRect();l(b.width,b.height)}}),(d,b)=>(f(),g("div",{class:A(I(pe)("relative h-full w-full overflow-hidden",t.class)),onMousemove:c,onMouseleave:p},[s("canvas",{ref_key:"canvasRef",ref:n,class:"pointer-events-none absolute inset-0 h-full w-full"},null,512),s("div",Jm,[Ge(d.$slots,"default")])],34))}}),eb=ae({__name:"Meteors",props:{number:{default:20},angle:{default:215},minDelay:{default:.2},maxDelay:{default:1.2},minDuration:{default:2},maxDuration:{default:8},class:{}},setup(e){const t=e,n=ne(()=>Array.from({length:t.number}).map(()=>{const r=Math.floor(Math.random()*100),o=Math.floor(Math.random()*100),i=(Math.random()*(t.maxDelay-t.minDelay)+t.minDelay).toFixed(2),l=(Math.random()*(t.maxDuration-t.minDuration)+t.minDuration).toFixed(2);return{top:`${r}%`,left:`${o}%`,animationDelay:`${i}s`,animationDuration:`${l}s`}}));return(r,o)=>(f(),g("div",{class:A(I(pe)("pointer-events-none absolute inset-0 overflow-hidden",t.class))},[(f(!0),g(ie,null,ke(n.value,(i,l)=>(f(),g("span",{key:l,style:ve({...i,"--angle":`${t.angle}deg`}),class:"animate-meteor absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[var(--angle)] dark:bg-sky-400 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-slate-500 before:to-transparent dark:before:from-sky-400"},null,4))),128))],2))}}),Qc=Ve(eb,[["__scopeId","data-v-7d09918c"]]),tb=ae({__name:"Ripple",props:{mainCircleSize:{default:210},mainCircleOpacity:{default:.24},numCircles:{default:8},class:{}},setup(e){const t=e;return(n,r)=>(f(),g("div",{class:A(I(pe)("pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",t.class))},[(f(!0),g(ie,null,ke(t.numCircles,o=>(f(),g("div",{key:o,style:ve({width:`${t.mainCircleSize+(o-1)*70}px`,height:`${t.mainCircleSize+(o-1)*70}px`,opacity:Math.max(.04,t.mainCircleOpacity-(o-1)*.025),animationDelay:`${(o-1)*.06}s`,borderStyle:o===t.numCircles?"dashed":"solid",borderWidth:"1px"}),class:"animate-ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-500/40 bg-blue-500/5 shadow-[0_0_16px_rgba(59,130,246,0.1)] dark:border-sky-400/30 dark:bg-sky-400/5"},null,4))),128))],2))}}),Jc=Ve(tb,[["__scopeId","data-v-98c398f7"]]),eo=ae({__name:"NumberTicker",props:{value:{},direction:{default:"up"},duration:{default:2},delay:{default:0},decimalPlaces:{default:0},class:{}},setup(e){const t=e,n=T(null),r=T("0");let o=null,i=null,l=!1;function a(u){return u===1?1:1-Math.pow(2,-10*u)}function c(u){return new Intl.NumberFormat("en-US",{minimumFractionDigits:t.decimalPlaces,maximumFractionDigits:t.decimalPlaces}).format(u)}function p(){if(l)return;l=!0;const u=t.direction==="down"?t.value:0,d=t.direction==="down"?0:t.value,b=t.duration*1e3;let m=null;setTimeout(()=>{function v(h){m||(m=h);const z=h-m,_=Math.min(z/b,1),y=a(_),C=u+(d-u)*y;r.value=c(C),_<1?o=requestAnimationFrame(v):r.value=c(d)}o=requestAnimationFrame(v)},t.delay*1e3)}return qe(()=>{r.value=c(t.direction==="down"?t.value:0),n.value?(i=new IntersectionObserver(u=>{u[0].isIntersecting&&(p(),i&&i.disconnect())},{threshold:.1}),i.observe(n.value)):p()}),Xe(()=>{o&&cancelAnimationFrame(o),i&&i.disconnect()}),it(()=>t.value,()=>{l=!1,p()}),(u,d)=>(f(),g("span",{ref_key:"spanRef",ref:n,class:A(I(pe)("inline-block tabular-nums tracking-wider",t.class))},$(r.value),3))}}),nb=["width","height","viewBox"],rb=["d","stroke","stroke-width","stroke-opacity"],ob=["d","stroke","stroke-width"],sb=["id"],ib=["stop-color"],ab=["stop-color"],lb=["stop-color"],cb=["from","to","dur","begin"],db=["from","to","dur","begin"],go=ae({__name:"AnimatedBeam",props:{containerRef:{},fromRef:{},toRef:{},curvature:{default:0},reverse:{type:Boolean,default:!1},pathColor:{default:"#94a3b8"},pathWidth:{default:2},pathOpacity:{default:.2},gradientStartColor:{default:"#38bdf8"},gradientStopColor:{default:"#6366f1"},duration:{default:3},delay:{default:0},startXOffset:{default:0},startYOffset:{default:0},endXOffset:{default:0},endYOffset:{default:0},class:{}},setup(e){const t=e,n=Wn(),r=T(""),o=T({width:0,height:0});function i(c){return c?"value"in c?c.value:c instanceof HTMLElement?c:null:null}function l(){const c=i(t.containerRef),p=i(t.fromRef),u=i(t.toRef);if(!c||!p||!u)return;const d=c.getBoundingClientRect(),b=p.getBoundingClientRect(),m=u.getBoundingClientRect();o.value={width:d.width,height:d.height};const v=b.left-d.left+b.width/2+t.startXOffset,h=b.top-d.top+b.height/2+t.startYOffset,z=m.left-d.left+m.width/2+t.endXOffset,_=m.top-d.top+m.height/2+t.endYOffset,y=(v+z)/2,C=(h+_)/2,M=y,R=C-t.curvature;t.curvature===0?r.value=`M ${v},${h} L ${z},${_}`:r.value=`M ${v},${h} Q ${M},${R} ${z},${_}`}let a=null;return qe(()=>{l(),window.addEventListener("resize",l);const c=i(t.containerRef);c&&(a=new ResizeObserver(()=>l()),a.observe(c))}),Xe(()=>{window.removeEventListener("resize",l),a&&a.disconnect()}),it([()=>i(t.containerRef),()=>i(t.fromRef),()=>i(t.toRef),()=>t.curvature],()=>{l()}),(c,p)=>(f(),g("svg",{width:o.value.width,height:o.value.height,viewBox:`0 0 ${o.value.width} ${o.value.height}`,class:A(I(pe)("pointer-events-none absolute inset-0 h-full w-full select-none overflow-visible",t.class))},[s("path",{d:r.value,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-opacity":t.pathOpacity,"stroke-linecap":"round"},null,8,rb),s("path",{d:r.value,fill:"none",stroke:`url(#beam-gradient-${I(n)})`,"stroke-width":t.pathWidth,"stroke-linecap":"round"},null,8,ob),s("defs",null,[s("linearGradient",{id:`beam-gradient-${I(n)}`,gradientUnits:"userSpaceOnUse"},[s("stop",{offset:"0%","stop-color":t.gradientStartColor,"stop-opacity":"0"},null,8,ib),s("stop",{offset:"50%","stop-color":t.gradientStartColor,"stop-opacity":"1"},null,8,ab),s("stop",{offset:"100%","stop-color":t.gradientStopColor,"stop-opacity":"0"},null,8,lb),s("animate",{attributeName:"x1",from:t.reverse?"100%":"-50%",to:t.reverse?"-50%":"100%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,cb),s("animate",{attributeName:"x2",from:t.reverse?"150%":"0%",to:t.reverse?"0%":"150%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,db)],8,sb)])],10,nb))}}),ub={class:"relative z-50 -translate-y-32 flex flex-col items-center px-5 text-center"},ed=ae({__name:"LampEffect",props:{glowColor:{default:"#06b6d4"},class:{}},setup(e){const t=e;return(n,r)=>(f(),g("div",{class:A(I(pe)("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-2xl z-0",t.class))},[r[0]||(r[0]=_s(`<div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"><div class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div><div class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"></div></div><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"><div class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"></div><div class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div></div><div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl"></div><div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div><div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div><div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></div><div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div><div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-950"></div></div>`,1)),s("div",ub,[Ge(n.$slots,"default")])],2))}}),td=ae({__name:"FlickeringGrid",props:{squareSize:{default:4},gridGap:{default:4},flickerChance:{default:.3},color:{},maxOpacity:{default:.3},class:{}},setup(e){const t=e,n=T(null),r=T(null);let o=null,i=new Float32Array(0),l=0,a=0;function c(d,b){l=Math.floor(d/(t.squareSize+t.gridGap)),a=Math.floor(b/(t.squareSize+t.gridGap)),i=new Float32Array(l*a);for(let m=0;m<i.length;m++)i[m]=Math.random()*t.maxOpacity}function p(){const d=n.value,b=r.value;if(!d||!b)return;const m=window.devicePixelRatio||1,v=d.getBoundingClientRect();b.width=v.width*m,b.height=v.height*m;const h=b.getContext("2d");h&&h.scale(m,m),c(v.width,v.height)}function u(){const d=r.value,b=n.value;if(!d||!b)return;const m=d.getContext("2d");if(!m)return;const v=b.getBoundingClientRect();m.clearRect(0,0,v.width,v.height);const z=document.documentElement.classList.contains("dark")?"148, 163, 184":"100, 116, 139",_=t.color||z;for(let y=0;y<a;y++)for(let C=0;C<l;C++){const M=y*l+C;Math.random()<t.flickerChance&&(i[M]=Math.random()*t.maxOpacity);const R=i[M];m.fillStyle=_.startsWith("#")?_:`rgba(${_}, ${R})`;const V=C*(t.squareSize+t.gridGap),O=y*(t.squareSize+t.gridGap);m.fillRect(V,O,t.squareSize,t.squareSize)}o=requestAnimationFrame(u)}return qe(()=>{p(),window.addEventListener("resize",p),u()}),Xe(()=>{window.removeEventListener("resize",p),o&&cancelAnimationFrame(o)}),it([()=>t.squareSize,()=>t.gridGap],()=>{p()}),(d,b)=>(f(),g("div",{ref_key:"containerRef",ref:n,class:A(I(pe)("pointer-events-none relative h-full w-full overflow-hidden",t.class))},[s("canvas",{ref_key:"canvasRef",ref:r,class:"absolute inset-0 h-full w-full"},null,512)],2))}}),pb={class:"relative overflow-hidden"},fb={class:"relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center overflow-hidden"},mb={class:"relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200"},bb={class:"relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"},gb={class:"relative z-10 mt-12 w-full max-w-2xl text-left"},hb={class:"relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/80"},xb={class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"},vb={class:"border-y border-zinc-200/80 bg-zinc-50/50 py-6 dark:border-zinc-800/80 dark:bg-zinc-950/40"},yb={class:"mx-auto max-w-7xl px-4 text-center"},kb={id:"features",class:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"},wb={class:"text-center max-w-3xl mx-auto mb-16 space-y-4"},zb={class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"},_b={class:"relative h-full w-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50/40 to-transparent dark:from-zinc-900/60 dark:to-transparent"},Cb={class:"relative flex h-32 w-56 flex-col justify-between rounded-xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-md backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95"},Sb={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-50/50 to-blue-50/20 border border-blue-100/50 dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800"},Ib={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50/30 to-white dark:from-zinc-950 dark:to-zinc-900"},Ab={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-50/30 to-transparent dark:from-zinc-900/50 dark:to-transparent"},Mb={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"},$b={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50"},Pb={class:"relative h-full w-full flex flex-col justify-center overflow-hidden rounded-xl p-3 bg-zinc-50/60 dark:bg-zinc-900/40"},Tb={class:"relative h-full w-full overflow-hidden rounded-xl bg-slate-950 p-4"},Rb={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center"},Eb={class:"relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40"},Lb={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent flex flex-col items-center justify-center p-4"},Fb={class:"text-4xl font-black text-emerald-600 dark:text-emerald-400"},Db={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4"},Vb={class:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800/80"},Ob={class:"text-center max-w-3xl mx-auto mb-12 space-y-3"},jb={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400"},Bb={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},Nb={class:"flex items-center justify-between mb-4"},Hb={class:"flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60"},Gb={class:"rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-[11px] font-mono font-bold text-zinc-600 dark:text-zinc-300"},Ub={class:"text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2"},qb={class:"text-[11px] font-mono text-zinc-400 block mt-0.5"},Wb={class:"mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"},Xb={class:"mt-4 flex flex-wrap gap-1.5"},Kb={class:"mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between"},Yb={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"},Zb={class:"mt-8 flex items-center justify-center gap-4"},Qb={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-20 dark:border-zinc-800/80 dark:bg-zinc-950/40"},Jb={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},eg={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},tg={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},ng={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400"},rg={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},og={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400"},sg={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},ig={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400"},ag=ae({__name:"HomeView",setup(e){const t=T(null),n=T(null),r=T(null),o=T(null);function i(u){switch(u){case"ai-native":return Fn;case"interactive-nav":return Vn;case"space-3d":return gr;case"borders-cards":return jt;case"kinetic-typography":return Re;default:return Re}}function l(u){return pn.filter(d=>d.suiteId===u)}const a=["Vue 3.5+","TypeScript","Tailwind CSS","Composition API","Vite 6","HTML5 Canvas","Web Animations API","Zero-Config"],c=T(!1);function p(){navigator.clipboard.writeText("npm i @vueuse/core clsx tailwind-merge"),c.value=!0,setTimeout(()=>{c.value=!1},2e3)}return(u,d)=>{const b=Tr("router-link");return f(),g("div",pb,[s("section",fb,[w(Os,{angle:65,opacity:.45}),s("div",mb,[w(I(Re),{class:"h-3.5 w-3.5 text-blue-500"}),w(vr,{text:"Vue 3 的动效原子代码库现已上线"}),d[0]||(d[0]=s("span",{class:"rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] text-blue-600 dark:text-blue-400"}," v1.0 ",-1))]),d[4]||(d[4]=s("h1",{class:"relative z-10 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight"},[Ae(" 专属于 Vue 3 的 "),s("span",{class:"block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400"}," 高阶动效原子库 ")],-1)),d[5]||(d[5]=s("p",{class:"relative z-10 mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400"},[Ae(" 不再重复造普通表单，全面对标 Magic UI 与 Aceternity UI。"),s("br",{class:"hidden sm:inline"}),Ae(" 面向 "),s("strong",null,"AI 官网、SaaS 营销页、酷炫个人主页"),Ae("，提供 60fps 单文件即用的动效积木。 ")],-1)),s("div",bb,[w(b,{to:"/docs/border-beam"},{default:q(()=>[w(xr,{"shimmer-color":"#60a5fa",class:"h-12 px-8 text-base"},{default:q(()=>[d[1]||(d[1]=s("span",null,"立即浏览组件",-1)),w(I(mr),{class:"h-4 w-4"})]),_:1})]),_:1}),s("button",{type:"button",class:"inline-flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-800",onClick:p},[c.value?(f(),me(I(Pt),{key:0,class:"h-4 w-4 text-emerald-500"})):(f(),me(I(Ar),{key:1,class:"h-4 w-4 text-zinc-400"})),s("span",null,$(c.value?"已复制依赖指令":"复制基础依赖指令"),1)])]),s("div",gb,[s("div",hb,[w(Vs,{size:90,duration:6,"color-from":"#38bdf8","color-to":"#a855f7","border-width":2,"border-radius":16}),d[3]||(d[3]=_s('<div class="mb-4 flex items-center justify-between border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60"><div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-rose-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span><span class="ml-2 font-mono text-xs text-zinc-400">components/BorderBeam.vue</span></div><div class="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Zero-Config / 粘贴即跑</span></div></div>',1)),s("div",xb,[d[2]||(d[2]=_s('<div class="space-y-1 text-zinc-600 dark:text-zinc-300"><p><span class="text-purple-500">&lt;template&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;div</span> <span class="text-amber-500">class=</span><span class="text-emerald-500">&quot;relative rounded-2xl&quot;</span><span class="text-blue-500">&gt;</span></p><p class="pl-8"><span class="text-blue-500">&lt;BorderBeam</span> <span class="text-amber-500">:duration=</span><span class="text-emerald-500">&quot;5&quot;</span> <span class="text-amber-500">:border-width=</span><span class="text-emerald-500">&quot;2&quot;</span> <span class="text-blue-500">/&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;/div&gt;</span></p><p><span class="text-purple-500">&lt;/template&gt;</span></p></div>',1)),w(b,{to:"/docs/border-beam",class:"shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"},{default:q(()=>[Ae(" 浏览全部 "+$(I(pn).length)+" 款动效 → ",1)]),_:1})])])])]),s("section",vb,[s("div",yb,[d[7]||(d[7]=s("p",{class:"mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase"}," 原生融合的技术栈与动效标准 ",-1)),w(Jr,{duration:25,"pause-on-hover":!0},{default:q(()=>[(f(),g(ie,null,ke(a,m=>s("div",{key:m,class:"flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-5 py-2 text-xs font-bold text-zinc-700 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300"},[d[6]||(d[6]=s("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),s("span",null,$(m),1)])),64))]),_:1})])]),s("section",kb,[s("div",wb,[s("h2",zb," 全面对标顶流 · 5 大主题套件 · "+$(I(pn).length)+" 款高阶动效全装配 ",1),d[8]||(d[8]=s("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 每一个组件都经过精心打磨，在移动端与桌面端保持 60fps 满帧性能，全部开箱即用，支持 Clean Light 与 Deep Dark 双模自适应。 ",-1))]),w(Kc,null,{default:q(()=>[w(bt,{name:"Border Beam",description:"现代 CSS 路径动画，高光激光沿圆角边框飞速流转，AI 推理与核心 VIP 的视觉焦点",cta:"查看详情与代码",href:"/docs/border-beam"},{icon:q(()=>[w(I(Re),{class:"h-5 w-5 text-sky-500"})]),background:q(()=>[s("div",_b,[s("div",Cb,[w(Vs,{size:65,duration:3.5,"color-from":"#06b6d4","color-to":"#6366f1","border-width":2,"border-radius":12}),d[9]||(d[9]=s("div",{class:"flex items-center justify-between"},[s("div",{class:"flex items-center gap-2"},[s("span",{class:"relative flex h-2 w-2"},[s("span",{class:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),s("span",{class:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]),s("span",{class:"text-xs font-bold text-zinc-800 dark:text-zinc-200"},"AI 推理状态")]),s("span",{class:"rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-sky-600 dark:text-sky-400"},"360° 流动")],-1)),d[10]||(d[10]=s("div",{class:"space-y-1.5"},[s("div",{class:"h-2 w-4/5 rounded-full bg-zinc-200 dark:bg-zinc-700"}),s("div",{class:"h-2 w-3/5 rounded-full bg-gradient-to-r from-sky-500/40 to-indigo-500/40"})],-1))])])]),_:1}),w(bt,{name:"Interactive Particles",description:"原生 Canvas 2D 粒子引擎，支持鼠标悬浮动态引力排斥、微线互联与 60fps 满帧性能",cta:"查看详情与代码",href:"/docs/interactive-particles"},{icon:q(()=>[w(I(un),{class:"h-5 w-5 text-amber-500"})]),background:q(()=>[s("div",Sb,[w(Zc,{quantity:38,speed:.75,"mouse-radius":85,"connect-lines":!0,class:"absolute inset-0 h-full w-full"}),d[11]||(d[11]=s("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[s("div",{class:"flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1 text-xs font-mono font-medium text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900/60 dark:bg-zinc-900/80 dark:text-blue-400"},[s("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"}),s("span",null,"悬浮鼠标即刻磁吸交互")])],-1))])]),_:1}),w(bt,{name:"Retro Grid",description:"3D 倾斜无限延展赛博网格，原生区分明暗模式线条色彩，渲染极具科技纵深感的背景",cta:"查看详情与代码",href:"/docs/retro-grid"},{icon:q(()=>[w(I(jt),{class:"h-5 w-5 text-indigo-500"})]),background:q(()=>[s("div",Ib,[w(Os,{angle:65,opacity:.85,"cell-size":34,"light-line-color":"#6366f1","dark-line-color":"#38bdf8"}),d[12]||(d[12]=s("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[s("span",{class:"rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-xs backdrop-blur-md dark:border-indigo-900/80 dark:bg-zinc-900/90 dark:text-indigo-400"}," 3D 空间动态透视 ")],-1))])]),_:1}),w(bt,{name:"Shimmer Button",description:"360° 旋转锥形流光高光外圈，适配核心 CTA 与付费引导，鼠标悬停即刻聚光",cta:"查看详情与代码",href:"/docs/shimmer-button"},{icon:q(()=>[w(I(Re),{class:"h-5 w-5 text-pink-500"})]),background:q(()=>[s("div",Ab,[w(xr,{"shimmer-color":"#ec4899","shimmer-duration":"2.4s",class:"shadow-lg"},{default:q(()=>[w(I(Re),{class:"h-4 w-4 text-pink-400"}),d[13]||(d[13]=s("span",null,"360° 旋转光晕按钮",-1))]),_:1}),d[14]||(d[14]=s("span",{class:"mt-3 text-[11px] font-mono text-zinc-400"},"悬停查看高光边缘旋转",-1))])]),_:1}),w(bt,{name:"Shiny Text",description:"金属质感微光划过文字，2.5s 线性平滑连续循环，高亮 Hero 标题与特色特性",cta:"查看详情与代码",href:"/docs/shiny-text"},{icon:q(()=>[w(I(Re),{class:"h-5 w-5 text-amber-500"})]),background:q(()=>[s("div",Mb,[d[15]||(d[15]=s("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"},null,-1)),w(vr,{text:"✨ Metallic Shiny Sheen",class:"relative z-10 text-xl font-black tracking-tight",speed:2.2}),d[16]||(d[16]=s("p",{class:"relative z-10 mt-2 text-xs font-mono text-zinc-400"},"高对比连续金属质感流动",-1))])]),_:1}),w(bt,{name:"Dot Pattern",description:"极简矢量波点底纹，支持鼠标实时光晕跟随聚光灯，轻量零性能损耗",cta:"查看详情与代码",href:"/docs/dot-pattern"},{icon:q(()=>[w(I(xc),{class:"h-5 w-5 text-emerald-500"})]),background:q(()=>[s("div",$b,[w(Yc,{width:16,height:16,cr:1.2,glow:!0}),d[17]||(d[17]=s("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[s("span",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}," 移动鼠标点亮光晕 ")],-1))])]),_:1}),w(bt,{name:"Marquee",description:"纯 CSS 硬件加速无限无缝滚动跑马灯，支持鼠标悬浮暂停、反向循环与变速",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/marquee"},{icon:q(()=>[w(I(Jp),{class:"h-5 w-5 text-blue-500"})]),background:q(()=>[s("div",Pb,[w(Jr,{duration:16,"pause-on-hover":!0},{default:q(()=>[(f(),g(ie,null,ke(["GPT-4o","Claude 3.5","DeepSeek-V3","Llama 3.3","Gemini 1.5"],m=>s("div",{key:m,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[d[18]||(d[18]=s("span",{class:"h-1.5 w-1.5 rounded-full bg-emerald-500"},null,-1)),s("span",null,$(m),1)])),64))]),_:1}),w(Jr,{duration:20,reverse:!0,"pause-on-hover":!0,class:"mt-2.5"},{default:q(()=>[(f(),g(ie,null,ke(["Vue 3.5","TypeScript","Tailwind CSS","Zero-Config","Canvas 2D"],m=>s("div",{key:m,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[d[19]||(d[19]=s("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),s("span",null,$(m),1)])),64))]),_:1})])]),_:1}),w(bt,{name:"Bento Grid",description:"现代 SaaS 模块化栅格系统，卡片集成鼠标跟随 Spotlight 径向聚光灯流光",cta:"查看详情与代码",href:"/docs/bento-grid"},{icon:q(()=>[w(I(jt),{class:"h-5 w-5 text-purple-500"})]),background:q(()=>[...d[20]||(d[20]=[s("div",{class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent"},[s("div",{class:"grid grid-cols-2 gap-2 w-full max-w-[200px]"},[s("div",{class:"h-12 rounded-lg border border-purple-300/40 bg-purple-500/10 dark:border-purple-500/30 dark:bg-purple-500/20 flex items-center justify-center text-[10px] font-mono text-purple-600 dark:text-purple-300"}," Col 1 "),s("div",{class:"h-12 rounded-lg border border-blue-300/40 bg-blue-500/10 dark:border-blue-500/30 dark:bg-blue-500/20 flex items-center justify-center text-[10px] font-mono text-blue-600 dark:text-blue-300"}," Col 2 "),s("div",{class:"col-span-2 h-10 rounded-lg border border-indigo-300/40 bg-indigo-500/10 dark:border-indigo-500/30 dark:bg-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-600 dark:text-indigo-300"}," Span 2 · 动态聚光灯 ")])],-1)])]),_:1}),w(bt,{name:"Meteors",description:"纯 CSS 赛博流星雨划过，带 50px 渐变光尾与随机延迟，暗黑科技卡片与首屏氛围杀器",cta:"查看详情与代码",href:"/docs/meteors"},{icon:q(()=>[w(I(Re),{class:"h-5 w-5 text-sky-400"})]),background:q(()=>[s("div",Tb,[w(Qc,{number:20}),d[21]||(d[21]=s("div",{class:"flex h-full flex-col justify-end"},[s("span",{class:"text-xs font-mono text-sky-400 font-bold"},"215° 斜掠流星轨迹")],-1))])]),_:1}),w(bt,{name:"Ripple",description:"由中心向外周循环脉冲扩散的多层同心圆涟漪，适配 AI 语音拾音、雷达声呐与核心头像高亮",cta:"查看详情与代码",href:"/docs/ripple"},{icon:q(()=>[w(I(mo),{class:"h-5 w-5 text-blue-500"})]),background:q(()=>[s("div",Rb,[w(Jc,{"main-circle-size":110,"num-circles":6}),s("div",Eb,[w(I(mo),{class:"h-6 w-6"})])])]),_:1}),w(bt,{name:"Number Ticker",description:"采用 easeOutExpo 缓动曲线的平滑数字翻牌器，进入视口自动起跑，SaaS 核心关键业务指标必备",cta:"查看详情与代码",href:"/docs/number-ticker"},{icon:q(()=>[w(I(As),{class:"h-5 w-5 text-emerald-500"})]),background:q(()=>[s("div",Lb,[s("div",Fb,[w(eo,{value:99.99,"decimal-places":2}),d[22]||(d[22]=Ae("% ",-1))]),d[23]||(d[23]=s("p",{class:"mt-2 text-xs font-mono text-zinc-500"},"SLA 生产高可用性指标",-1))])]),_:1}),w(bt,{name:"Animated Beam",description:"Magic UI 标志性连线动效，在多个 DOM 节点间实时计算贝塞尔曲线，驱动 SVG 能量光球脉冲流动",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/animated-beam"},{icon:q(()=>[w(I(un),{class:"h-5 w-5 text-indigo-500"})]),background:q(()=>[s("div",{ref_key:"homeBeamContainer",ref:t,class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 flex items-center justify-between px-8"},[s("div",{ref_key:"homeBeamUser",ref:n,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-blue-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-blue-400"},[w(I(kc),{class:"h-5 w-5"})],512),s("div",{ref_key:"homeBeamAi",ref:r,class:"z-10 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/40"},[w(I(Re),{class:"h-6 w-6"})],512),s("div",{ref_key:"homeBeamDb",ref:o,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400"},[w(I(Ps),{class:"h-5 w-5"})],512),w(go,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.2},null,8,["container-ref","from-ref","to-ref"]),w(go,{"container-ref":t.value,"from-ref":r.value,"to-ref":o.value,duration:2.2,delay:.5},null,8,["container-ref","from-ref","to-ref"])],512)]),_:1}),w(bt,{name:"Flickering Grid",description:"Canvas 2D 原生微闪烁网格，每个小方格独立呼吸微光，营造赛博黑客帝国与智能矩阵氛围",cta:"查看详情与代码",href:"/docs/flickering-grid"},{icon:q(()=>[w(I(jt),{class:"h-5 w-5 text-sky-500"})]),background:q(()=>[s("div",Db,[w(td,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),d[24]||(d[24]=s("div",{class:"relative z-10 flex h-full items-center justify-center"},[s("span",{class:"rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-500 dark:text-sky-400 font-bold"}," 60FPS 矩阵微闪 ")],-1))])]),_:1})]),_:1})]),s("section",Vb,[s("div",Ob,[s("div",jb,[w(I(Re),{class:"h-3.5 w-3.5"}),d[25]||(d[25]=s("span",null,"主题套件全套推进",-1))]),d[26]||(d[26]=s("h2",{class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"}," 5 大主题动效矩阵 · 场景全覆盖 ",-1)),d[27]||(d[27]=s("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 按业务应用场景全套推进，彻底告别零散拼凑。从 AI 智能体推理到 3D 纵深空间，全矩阵即拷即用。 ",-1))]),s("div",Bb,[(f(!0),g(ie,null,ke(I(Ts),m=>{var v;return f(),g("div",{key:m.id,class:"group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:hover:border-zinc-700"},[s("div",null,[s("div",Nb,[s("div",Hb,[(f(),me(Qe(i(m.id)),{class:"h-5 w-5"}))]),s("span",Gb,$(l(m.id).length)+" 款组件 ",1)]),s("h3",Ub,[s("span",null,$(m.name),1)]),s("span",qb,$(m.englishName),1),s("p",Wb,$(m.description),1),s("div",Xb,[(f(!0),g(ie,null,ke(l(m.id),h=>(f(),me(b,{key:h.id,to:`/docs/${h.id}`,class:"rounded-lg border border-zinc-200/80 bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-700 transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-500/50 dark:hover:bg-blue-950/60 dark:hover:text-blue-400"},{default:q(()=>[Ae($(h.name),1)]),_:2},1032,["to"]))),128))])]),s("div",Kb,[w(b,{to:`/docs/${((v=l(m.id)[0])==null?void 0:v.id)||"border-beam"}`,class:"inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"},{default:q(()=>[d[28]||(d[28]=s("span",null,"进入套件展厅",-1)),w(I(mr),{class:"h-3.5 w-3.5 transition-transform group-hover:translate-x-1"})]),_:1},8,["to"])])])}),128))])]),s("section",Yb,[w(ed,{class:"min-h-[460px]"},{default:q(()=>[d[30]||(d[30]=s("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-6xl font-black tracking-tight text-transparent"}," 为极致审美而生的动效原子 ",-1)),d[31]||(d[31]=s("p",{class:"mt-4 max-w-lg text-sm text-slate-400"}," 全面对标 Magic UI 与 Aceternity UI，支持单文件复制即用，零侵入无外部复杂构建负担。 ",-1)),s("div",Zb,[w(b,{to:"/docs/lamp-effect"},{default:q(()=>[w(xr,{"shimmer-color":"#38bdf8",class:"h-11 px-6 text-sm"},{default:q(()=>[d[29]||(d[29]=s("span",null,"探索 Lamp Effect",-1)),w(I(mr),{class:"h-4 w-4"})]),_:1})]),_:1})])]),_:1})]),s("section",Qb,[s("div",Jb,[s("div",eg,[s("div",tg,[s("div",ng,[w(I(Ar),{class:"h-5 w-5"})]),d[32]||(d[32]=s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," Copy & Paste 模式 ",-1)),d[33]||(d[33]=s("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不是封闭的黑盒 npm 库。代码完全属于你，复制进你的项目 `src/components/ui` 即可按需自定义与扩展。 ",-1))]),s("div",rg,[s("div",og,[w(I(un),{class:"h-5 w-5"})]),d[34]||(d[34]=s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 单文件自包含（Zero-Config） ",-1)),d[35]||(d[35]=s("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 动画关键帧与路径封装在组件内，完全无需在 tailwind.config.js 中配置复杂的 keyframes，避免配置遗漏。 ",-1))]),s("div",sg,[s("div",ig,[w(I(Re),{class:"h-5 w-5"})]),d[36]||(d[36]=s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 真·明暗双模自适应 ",-1)),d[37]||(d[37]=s("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不仅在深黑背景下流光溢彩，更对纯白、浅灰背景做针对性调优，确保在任何业务场景下都有高级质感。 ",-1))])])])])])}}});var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rs={exports:{}},Sa;function cg(){return Sa||(Sa=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=(function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,l={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function y(C){return C instanceof c?new c(C.type,y(C.content),C.alias):Array.isArray(C)?C.map(y):C.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(y){return Object.prototype.toString.call(y).slice(8,-1)},objId:function(y){return y.__id||Object.defineProperty(y,"__id",{value:++i}),y.__id},clone:function y(C,M){M=M||{};var R,V;switch(a.util.type(C)){case"Object":if(V=a.util.objId(C),M[V])return M[V];R={},M[V]=R;for(var O in C)C.hasOwnProperty(O)&&(R[O]=y(C[O],M));return R;case"Array":return V=a.util.objId(C),M[V]?M[V]:(R=[],M[V]=R,C.forEach(function(F,L){R[L]=y(F,M)}),R);default:return C}},getLanguage:function(y){for(;y;){var C=o.exec(y.className);if(C)return C[1].toLowerCase();y=y.parentElement}return"none"},setLanguage:function(y,C){y.className=y.className.replace(RegExp(o,"gi"),""),y.classList.add("language-"+C)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(R){var y=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(R.stack)||[])[1];if(y){var C=document.getElementsByTagName("script");for(var M in C)if(C[M].src==y)return C[M]}return null}},isActive:function(y,C,M){for(var R="no-"+C;y;){var V=y.classList;if(V.contains(C))return!0;if(V.contains(R))return!1;y=y.parentElement}return!!M}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(y,C){var M=a.util.clone(a.languages[y]);for(var R in C)M[R]=C[R];return M},insertBefore:function(y,C,M,R){R=R||a.languages;var V=R[y],O={};for(var F in V)if(V.hasOwnProperty(F)){if(F==C)for(var L in M)M.hasOwnProperty(L)&&(O[L]=M[L]);M.hasOwnProperty(F)||(O[F]=V[F])}var oe=R[y];return R[y]=O,a.languages.DFS(a.languages,function(be,W){W===oe&&be!=y&&(this[be]=O)}),O},DFS:function y(C,M,R,V){V=V||{};var O=a.util.objId;for(var F in C)if(C.hasOwnProperty(F)){M.call(C,F,C[F],R||F);var L=C[F],oe=a.util.type(L);oe==="Object"&&!V[O(L)]?(V[O(L)]=!0,y(L,M,null,V)):oe==="Array"&&!V[O(L)]&&(V[O(L)]=!0,y(L,M,F,V))}}},plugins:{},highlightAll:function(y,C){a.highlightAllUnder(document,y,C)},highlightAllUnder:function(y,C,M){var R={callback:M,container:y,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",R),R.elements=Array.prototype.slice.apply(R.container.querySelectorAll(R.selector)),a.hooks.run("before-all-elements-highlight",R);for(var V=0,O;O=R.elements[V++];)a.highlightElement(O,C===!0,R.callback)},highlightElement:function(y,C,M){var R=a.util.getLanguage(y),V=a.languages[R];a.util.setLanguage(y,R);var O=y.parentElement;O&&O.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(O,R);var F=y.textContent,L={element:y,language:R,grammar:V,code:F};function oe(W){L.highlightedCode=W,a.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,a.hooks.run("after-highlight",L),a.hooks.run("complete",L),M&&M.call(L.element)}if(a.hooks.run("before-sanity-check",L),O=L.element.parentElement,O&&O.nodeName.toLowerCase()==="pre"&&!O.hasAttribute("tabindex")&&O.setAttribute("tabindex","0"),!L.code){a.hooks.run("complete",L),M&&M.call(L.element);return}if(a.hooks.run("before-highlight",L),!L.grammar){oe(a.util.encode(L.code));return}if(C&&r.Worker){var be=new Worker(a.filename);be.onmessage=function(W){oe(W.data)},be.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else oe(a.highlight(L.code,L.grammar,L.language))},highlight:function(y,C,M){var R={code:y,grammar:C,language:M};if(a.hooks.run("before-tokenize",R),!R.grammar)throw new Error('The language "'+R.language+'" has no grammar.');return R.tokens=a.tokenize(R.code,R.grammar),a.hooks.run("after-tokenize",R),c.stringify(a.util.encode(R.tokens),R.language)},tokenize:function(y,C){var M=C.rest;if(M){for(var R in M)C[R]=M[R];delete C.rest}var V=new d;return b(V,V.head,y),u(y,V,C,V.head,0),v(V)},hooks:{all:{},add:function(y,C){var M=a.hooks.all;M[y]=M[y]||[],M[y].push(C)},run:function(y,C){var M=a.hooks.all[y];if(!(!M||!M.length))for(var R=0,V;V=M[R++];)V(C)}},Token:c};r.Prism=a;function c(y,C,M,R){this.type=y,this.content=C,this.alias=M,this.length=(R||"").length|0}c.stringify=function y(C,M){if(typeof C=="string")return C;if(Array.isArray(C)){var R="";return C.forEach(function(oe){R+=y(oe,M)}),R}var V={type:C.type,content:y(C.content,M),tag:"span",classes:["token",C.type],attributes:{},language:M},O=C.alias;O&&(Array.isArray(O)?Array.prototype.push.apply(V.classes,O):V.classes.push(O)),a.hooks.run("wrap",V);var F="";for(var L in V.attributes)F+=" "+L+'="'+(V.attributes[L]||"").replace(/"/g,"&quot;")+'"';return"<"+V.tag+' class="'+V.classes.join(" ")+'"'+F+">"+V.content+"</"+V.tag+">"};function p(y,C,M,R){y.lastIndex=C;var V=y.exec(M);if(V&&R&&V[1]){var O=V[1].length;V.index+=O,V[0]=V[0].slice(O)}return V}function u(y,C,M,R,V,O){for(var F in M)if(!(!M.hasOwnProperty(F)||!M[F])){var L=M[F];L=Array.isArray(L)?L:[L];for(var oe=0;oe<L.length;++oe){if(O&&O.cause==F+","+oe)return;var be=L[oe],W=be.inside,ye=!!be.lookbehind,Me=!!be.greedy,Oe=be.alias;if(Me&&!be.pattern.global){var ee=be.pattern.toString().match(/[imsuy]*$/)[0];be.pattern=RegExp(be.pattern.source,ee+"g")}for(var re=be.pattern||be,J=R.next,_e=V;J!==C.tail&&!(O&&_e>=O.reach);_e+=J.value.length,J=J.next){var Z=J.value;if(C.length>y.length)return;if(!(Z instanceof c)){var je=1,ze;if(Me){if(ze=p(re,_e,y,ye),!ze||ze.index>=y.length)break;var Ie=ze.index,lt=ze.index+ze[0].length,Ue=_e;for(Ue+=J.value.length;Ie>=Ue;)J=J.next,Ue+=J.value.length;if(Ue-=J.value.length,_e=Ue,J.value instanceof c)continue;for(var $e=J;$e!==C.tail&&(Ue<lt||typeof $e.value=="string");$e=$e.next)je++,Ue+=$e.value.length;je--,Z=y.slice(_e,Ue),ze.index-=_e}else if(ze=p(re,0,Z,ye),!ze)continue;var Ie=ze.index,j=ze[0],se=Z.slice(0,Ie),G=Z.slice(Ie+j.length),fe=_e+Z.length;O&&fe>O.reach&&(O.reach=fe);var k=J.prev;se&&(k=b(C,k,se),_e+=se.length),m(C,k,je);var S=new c(F,W?a.tokenize(j,W):j,Oe,j);if(J=b(C,k,S),G&&b(C,J,G),je>1){var P={cause:F+","+oe,reach:fe};u(y,C,M,J.prev,_e,P),O&&P.reach>O.reach&&(O.reach=P.reach)}}}}}}function d(){var y={value:null,prev:null,next:null},C={value:null,prev:y,next:null};y.next=C,this.head=y,this.tail=C,this.length=0}function b(y,C,M){var R=C.next,V={value:M,prev:C,next:R};return C.next=V,R.prev=V,y.length++,V}function m(y,C,M){for(var R=C.next,V=0;V<M&&R!==y.tail;V++)R=R.next;C.next=R,R.prev=C,y.length-=V}function v(y){for(var C=[],M=y.head.next;M!==y.tail;)C.push(M.value),M=M.next;return C}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(y){var C=JSON.parse(y.data),M=C.language,R=C.code,V=C.immediateClose;r.postMessage(a.highlight(R,a.languages[M],M)),V&&r.close()},!1)),a;var h=a.util.currentScript();h&&(a.filename=h.src,h.hasAttribute("data-manual")&&(a.manual=!0));function z(){a.manual||a.highlightAll()}if(!a.manual){var _=document.readyState;_==="loading"||_==="interactive"&&h&&h.defer?document.addEventListener("DOMContentLoaded",z):window.requestAnimationFrame?window.requestAnimationFrame(z):window.setTimeout(z,16)}return a})(t);e.exports&&(e.exports=n),typeof Ca<"u"&&(Ca.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(o,i){var l={};l["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};a["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var c={};c[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(r){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",o=function(h,z){return"✖ Error "+h+" while fetching file: "+z},i="✖ Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",c="loading",p="loaded",u="failed",d="pre[data-src]:not(["+a+'="'+p+'"]):not(['+a+'="'+c+'"])';function b(h,z,_){var y=new XMLHttpRequest;y.open("GET",h,!0),y.onreadystatechange=function(){y.readyState==4&&(y.status<400&&y.responseText?z(y.responseText):y.status>=400?_(o(y.status,y.statusText)):_(i))},y.send(null)}function m(h){var z=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(h||"");if(z){var _=Number(z[1]),y=z[2],C=z[3];return y?C?[_,Number(C)]:[_,void 0]:[_,_]}}n.hooks.add("before-highlightall",function(h){h.selector+=", "+d}),n.hooks.add("before-sanity-check",function(h){var z=h.element;if(z.matches(d)){h.code="",z.setAttribute(a,c);var _=z.appendChild(document.createElement("CODE"));_.textContent=r;var y=z.getAttribute("data-src"),C=h.language;if(C==="none"){var M=(/\.(\w+)$/.exec(y)||[,"none"])[1];C=l[M]||M}n.util.setLanguage(_,C),n.util.setLanguage(z,C);var R=n.plugins.autoloader;R&&R.loadLanguages(C),b(y,function(V){z.setAttribute(a,p);var O=m(z.getAttribute("data-range"));if(O){var F=V.split(/\r\n?|\n/g),L=O[0],oe=O[1]==null?F.length:O[1];L<0&&(L+=F.length),L=Math.max(0,Math.min(L-1,F.length)),oe<0&&(oe+=F.length),oe=Math.max(0,Math.min(oe,F.length)),V=F.slice(L,oe).join(`
`),z.hasAttribute("data-start")||z.setAttribute("data-start",String(L+1))}_.textContent=V,n.highlightElement(_)},function(V){z.setAttribute(a,u),_.textContent=V})}}),n.plugins.fileHighlight={highlight:function(z){for(var _=(z||document).querySelectorAll(d),y=0,C;C=_[y++];)n.highlightElement(C)}};var v=!1;n.fileHighlight=function(){v||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),v=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(rs)),rs.exports}var dg=cg();const os=lg(dg);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var Ia={},Aa;function ug(){return Aa||(Aa=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),Ia}ug();Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},Prism.languages.insertBefore("markup","cdata",i)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);const pg={class:"relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800 text-zinc-100 shadow-sm"},fg={class:"flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5 text-xs text-zinc-400"},mg={class:"font-mono"},bg={class:"max-h-[480px] overflow-auto p-4 text-xs font-mono leading-relaxed"},gg={class:"!m-0 !p-0 !bg-transparent"},hg=["innerHTML"],Ma=ae({__name:"CodeBlock",props:{code:{},language:{default:"html"},filename:{}},setup(e){const t=e,n=T(!1),r=ne(()=>{const i=os.languages[t.language]||os.languages.markup;return os.highlight(t.code.trim(),i,t.language)});async function o(){try{await navigator.clipboard.writeText(t.code.trim()),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(i){console.error("Failed to copy",i)}}return(i,l)=>(f(),g("div",pg,[s("div",fg,[s("span",mg,$(t.filename||t.language.toUpperCase()),1),s("button",{type:"button",class:"inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",onClick:o},[n.value?(f(),me(I(Pt),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(f(),me(I(Ar),{key:1,class:"h-3.5 w-3.5"})),s("span",null,$(n.value?"已复制！":"复制代码"),1)])]),s("div",bg,[s("pre",gg,[s("code",{innerHTML:r.value},null,8,hg)])])]))}}),xg={class:"space-y-4"},vg={class:"space-y-1"},yg={class:"text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},kg={class:"text-sm text-zinc-500 dark:text-zinc-400"},wg={class:"overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-sm transition-colors"},zg={class:"flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 bg-zinc-50/80 px-4 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/60"},_g={class:"flex items-center gap-1 rounded-lg bg-zinc-200/60 p-1 dark:bg-zinc-800/60 text-xs font-medium"},Cg={key:0,class:"flex items-center gap-2 text-xs"},Sg={class:"flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-0.5"},Ig={class:"relative"},Ag={class:"p-4"},Mg={class:"p-4"},$g={key:0,class:"mt-8 space-y-3"},Pg={class:"overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800"},Tg={class:"w-full text-left text-xs"},Rg={class:"divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono"},Eg={class:"px-4 py-2.5 font-bold text-blue-600 dark:text-blue-400"},Lg={class:"px-4 py-2.5 text-pink-600 dark:text-pink-400"},Fg={class:"px-4 py-2.5 text-zinc-500"},Dg={class:"px-4 py-2.5 font-sans text-zinc-600 dark:text-zinc-300"},Vg=ae({__name:"ComponentPreview",props:{title:{},description:{},componentCode:{},usageCode:{},componentFilename:{},propsList:{}},setup(e){const t=e,n=T("preview"),r=T("default"),o=T(0),i=T(!0);let l=null;qe(()=>{i.value=document.documentElement.classList.contains("dark"),l=new MutationObserver(()=>{i.value=document.documentElement.classList.contains("dark")}),l.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}),Xe(()=>{l==null||l.disconnect()});const a=ne(()=>r.value==="dark"?!0:r.value==="light"?!1:i.value);function c(){o.value++}return(p,u)=>(f(),g("div",xg,[s("div",vg,[s("h2",yg,$(t.title),1),s("p",kg,$(t.description),1)]),s("div",wg,[s("div",zg,[s("div",_g,[s("button",{type:"button",class:A(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="preview"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[0]||(u[0]=d=>n.value="preview")},[w(I(mc),{class:"h-3.5 w-3.5"}),u[6]||(u[6]=s("span",null,"实时效果",-1))],2),s("button",{type:"button",class:A(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="component"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[1]||(u[1]=d=>n.value="component")},[w(I(br),{class:"h-3.5 w-3.5"}),s("span",null,"组件源码 ("+$(t.componentFilename)+")",1)],2),s("button",{type:"button",class:A(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="usage"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[2]||(u[2]=d=>n.value="usage")},[w(I(br),{class:"h-3.5 w-3.5"}),u[7]||(u[7]=s("span",null,"业务调用 (Usage.vue)",-1))],2)]),n.value==="preview"?(f(),g("div",Cg,[u[8]||(u[8]=s("span",{class:"text-zinc-400"},"视窗底色：",-1)),s("div",Sg,[s("button",{type:"button",class:A(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="default"?"bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[3]||(u[3]=d=>r.value="default")}," 自适应 ",2),s("button",{type:"button",class:A(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="light"?"bg-white text-zinc-900 shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[4]||(u[4]=d=>r.value="light")}," 亮白 ",2),s("button",{type:"button",class:A(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="dark"?"bg-black text-white shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[5]||(u[5]=d=>r.value="dark")}," 暗黑 ",2)]),s("button",{type:"button",class:"inline-flex items-center gap-1 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",title:"重新触发动效",onClick:c},[w(I(hc),{class:"h-3.5 w-3.5"})])])):H("",!0)]),s("div",Ig,[$n(s("div",{class:A(["relative flex min-h-[360px] w-full items-center justify-center overflow-hidden p-8 transition-colors duration-200",a.value?"dark bg-black text-zinc-100":"bg-zinc-100/80 text-zinc-900"])},[(f(),g("div",{key:o.value,class:"w-full flex items-center justify-center"},[Ge(p.$slots,"default",{isDark:a.value})]))],2),[[Wo,n.value==="preview"]]),$n(s("div",Ag,[w(Ma,{code:t.componentCode,filename:t.componentFilename,language:"html"},null,8,["code","filename"])],512),[[Wo,n.value==="component"]]),$n(s("div",Mg,[w(Ma,{code:t.usageCode,filename:"UsageExample.vue",language:"html"},null,8,["code"])],512),[[Wo,n.value==="usage"]])])]),t.propsList&&t.propsList.length>0?(f(),g("div",$g,[u[10]||(u[10]=s("h3",{class:"text-base font-semibold text-zinc-900 dark:text-zinc-100"}," Props 属性参考 ",-1)),s("div",Pg,[s("table",Tg,[u[9]||(u[9]=s("thead",{class:"border-b border-zinc-200 bg-zinc-50/80 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"},[s("tr",null,[s("th",{class:"px-4 py-2.5"},"属性名"),s("th",{class:"px-4 py-2.5"},"类型"),s("th",{class:"px-4 py-2.5"},"默认值"),s("th",{class:"px-4 py-2.5"},"说明")])],-1)),s("tbody",Rg,[(f(!0),g(ie,null,ke(t.propsList,d=>(f(),g("tr",{key:d.name,class:"text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40"},[s("td",Eg,$(d.name),1),s("td",Lg,$(d.type),1),s("td",Fg,$(d.default),1),s("td",Dg,$(d.description),1)]))),128))])])])])):H("",!0)]))}}),Og=["onMouseenter","onClick"],jg={key:0,class:"pointer-events-none absolute -top-9 z-50 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-800/95 dark:text-zinc-200"},Bg=ae({__name:"Dock",props:{items:{},iconSize:{default:44},iconMagnification:{default:68},iconDistance:{default:120},direction:{default:"bottom"},class:{}},setup(e){const t=e,n=T(null),r=T(null),o=T(null);function i(d){r.value=d.clientX}function l(){r.value=null,o.value=null}function a(d){if(r.value===null||!d)return 1;const b=d.getBoundingClientRect(),m=b.left+b.width/2,v=Math.abs(r.value-m);if(v>t.iconDistance)return 1;const h=v/t.iconDistance,z=(t.iconMagnification-t.iconSize)/t.iconSize,_=.5*(1+Math.cos(h*Math.PI));return 1+z*_}const c=T([]);function p(d,b){d&&(c.value[b]=d)}function u(d){const b=c.value[d],m=a(b);return Math.round(t.iconSize*m)}return(d,b)=>(f(),g("div",{ref_key:"dockRef",ref:n,class:A(I(pe)("mx-auto flex h-16 items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/70 px-4 py-2 shadow-xl backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 transition-all duration-200 select-none",t.direction==="bottom"&&"items-end",t.direction==="top"&&"items-start",t.direction==="middle"&&"items-center",t.class)),onMousemove:i,onMouseleave:l},[t.items&&t.items.length>0?(f(!0),g(ie,{key:0},ke(t.items,(m,v)=>(f(),g("div",{key:m.id,ref_for:!0,ref:h=>p(h,v),class:"group relative flex items-center justify-center cursor-pointer transition-all duration-100 ease-out",style:ve({width:`${u(v)}px`,height:`${u(v)}px`}),onMouseenter:h=>o.value=m.label||null,onClick:h=>m.onClick&&m.onClick()},[(f(),me(Qe(m.href?"a":"button"),{href:m.href,class:A(["flex h-full w-full items-center justify-center rounded-2xl border transition-colors shadow-sm","border-zinc-200/70 bg-white/90 text-zinc-700 hover:text-zinc-950","dark:border-zinc-700/60 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:text-white"])},{default:q(()=>[(f(),me(Qe(m.icon),{class:"h-1/2 w-1/2 transition-transform duration-100"}))]),_:2},1032,["href"])),w(at,{name:"dock-fade"},{default:q(()=>[o.value===m.label&&m.label?(f(),g("div",jg,$(m.label),1)):H("",!0)]),_:2},1024),b[0]||(b[0]=s("span",{class:"absolute -bottom-1.5 h-1 w-1 rounded-full bg-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-zinc-500"},null,-1))],44,Og))),128)):Ge(d.$slots,"default",{},void 0,!0,1)],34))}}),Ng=Ve(Bg,[["__scopeId","data-v-3c8b0d2e"]]),Hg={key:0,class:"pointer-events-none absolute inset-0 h-full w-full select-none",xmlns:"http://www.w3.org/2000/svg"},Gg=["r","stroke","stroke-width"],Ug={class:"orbit-rotator pointer-events-auto h-full w-full"},qg={class:"orbit-item pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"},Wg=ae({__name:"OrbitLogos",props:{radius:{default:120},duration:{default:20},delay:{default:0},reverse:{type:Boolean,default:!1},path:{type:Boolean,default:!0},pathColor:{},pathWidth:{default:1},tiltAngle:{default:0},class:{}},setup(e){const t=e,n=ne(()=>({"--radius":`${t.radius}px`,"--duration":`${t.duration}s`,"--delay":`-${t.delay}s`,"--direction":t.reverse?"reverse":"normal","--counter-direction":t.reverse?"normal":"reverse","--tilt":`${t.tiltAngle}deg`,width:`${t.radius*2}px`,height:`${t.radius*2}px`}));return(r,o)=>(f(),g("div",{style:ve(n.value),class:A(I(pe)("pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full [transform-style:preserve-3d]",t.class))},[t.path?(f(),g("svg",Hg,[s("circle",{class:"stroke-zinc-300/60 dark:stroke-zinc-800/80 stroke-dashed",cx:"50%",cy:"50%",r:t.radius,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-dasharray":"4 4"},null,8,Gg)])):H("",!0),s("div",Ug,[s("div",qg,[Ge(r.$slots,"default",{},void 0,!0)])])],6))}}),Wr=Ve(Wg,[["__scopeId","data-v-583093f1"]]),Xg=["src","alt"],Kg={class:"pointer-events-none absolute bottom-4 right-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},Yg=["src","alt"],Zg={class:"pointer-events-none absolute bottom-4 left-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},Qg={class:"absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-zinc-800 shadow-xl backdrop-blur-md transition-transform duration-100 hover:scale-110 active:scale-95 dark:border-zinc-700/80 dark:bg-zinc-900/90 dark:text-zinc-200"},Jg=ae({__name:"ImageCompare",props:{beforeImage:{},afterImage:{},beforeLabel:{default:"Before"},afterLabel:{default:"After"},initialPosition:{default:50},class:{}},setup(e){const t=e,n=T(null),r=T(t.initialPosition),o=T(!1);function i(u){if(!n.value)return;const d=n.value.getBoundingClientRect(),b=u-d.left,m=Math.min(Math.max(b/d.width*100,0),100);r.value=Number(m.toFixed(2))}function l(u){o.value=!0,i(u.clientX)}function a(u){o.value&&i(u.clientX)}function c(){o.value=!1}function p(u){!o.value||u.touches.length===0||i(u.touches[0].clientX)}return qe(()=>{window.addEventListener("mouseup",c),window.addEventListener("mousemove",a),window.addEventListener("touchend",c),window.addEventListener("touchmove",p)}),Xe(()=>{window.removeEventListener("mouseup",c),window.removeEventListener("mousemove",a),window.removeEventListener("touchend",c),window.removeEventListener("touchmove",p)}),(u,d)=>(f(),g("div",{ref_key:"containerRef",ref:n,class:A(I(pe)("relative select-none overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 shadow-xl cursor-ew-resize dark:border-zinc-800/80",t.class)),onMousedown:l,onTouchstart:d[0]||(d[0]=b=>o.value=!0)},[s("img",{src:t.afterImage,alt:t.afterLabel,class:"pointer-events-none h-full w-full object-cover"},null,8,Xg),s("div",Kg,$(t.afterLabel),1),s("div",{class:"pointer-events-none absolute inset-0 h-full w-full overflow-hidden",style:ve({clipPath:`inset(0 ${100-r.value}% 0 0)`})},[s("img",{src:t.beforeImage,alt:t.beforeLabel,class:"h-full w-full object-cover"},null,8,Yg),s("div",Zg,$(t.beforeLabel),1)],4),s("div",{class:"pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]",style:ve({left:`${r.value}%`})},[s("div",Qg,[w(I(pc),{class:"h-4 w-4"})])],4)],34))}}),eh={class:"group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/90 dark:bg-zinc-950/90"},th={class:"flex items-center gap-2.5 min-w-0"},nh={class:"relative flex h-3 w-3 shrink-0 items-center justify-center"},rh={class:"flex flex-col min-w-0"},oh={class:"flex items-center gap-2"},sh={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate"},ih={class:"text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5"},ah={class:"flex items-center gap-2 shrink-0 text-xs text-zinc-500"},lh={key:0,class:"flex items-center gap-1 font-mono text-[11px] rounded-md bg-zinc-100 px-2 py-0.5 dark:bg-zinc-900 dark:text-zinc-300"},ch={key:0,class:"border-t border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-2.5"},dh={class:"mt-0.5 shrink-0"},uh={key:3,class:"inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 text-[10px] text-zinc-400 dark:border-zinc-700"},ph={class:"flex-1 min-w-0"},fh={class:"flex items-center justify-between"},mh={key:0,class:"font-mono text-[10px] text-zinc-400 shrink-0 ml-2"},bh={key:0,class:"text-[11px] text-zinc-400 font-mono mt-0.5 truncate"},gh=ae({__name:"AgentStatus",props:{status:{default:"thinking"},agentName:{default:"Aura AI Agent"},currentTask:{default:"Thinking and orchestrating subagents..."},elapsed:{type:Boolean,default:!0},steps:{default:()=>[{id:1,name:"Understand user prompt requirements",status:"done",duration:"0.4s"},{id:2,name:"Search codebase for components & hooks",status:"done",duration:"1.2s"},{id:3,name:"Run Playwright headless visual verification",status:"running",detail:"Evaluating DOM computed styles..."},{id:4,name:"Commit and build production artifacts",status:"pending"}]},class:{}},setup(e){const t=e,n=T(!1),r=T(0);let o=null;qe(()=>{t.elapsed&&(o=setInterval(()=>{r.value+=.1},100))}),Xe(()=>{o&&clearInterval(o)});const i=ne(()=>`${r.value.toFixed(1)}s`),l=ne(()=>{switch(t.status){case"thinking":return{icon:Re,label:"思考推演中",color:"text-sky-500 dark:text-sky-400",badgeBg:"bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",pulseBg:"bg-sky-500"};case"running":return{icon:ta,label:"自主执行中",color:"text-blue-500 dark:text-blue-400 animate-spin",badgeBg:"bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",pulseBg:"bg-blue-500"};case"tool_call":return{icon:d0,label:"调用工具中",color:"text-amber-500 dark:text-amber-400",badgeBg:"bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",pulseBg:"bg-amber-500"};case"success":return{icon:$s,label:"任务已闭环",color:"text-emerald-500 dark:text-emerald-400",badgeBg:"bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",pulseBg:"bg-emerald-500"};case"error":return{icon:Ms,label:"出现异常",color:"text-rose-500 dark:text-rose-400",badgeBg:"bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",pulseBg:"bg-rose-500"};default:return{icon:Re,label:"待命中",color:"text-zinc-400",badgeBg:"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",pulseBg:"bg-zinc-400"}}});return(a,c)=>(f(),g("div",{class:A(I(pe)("w-full max-w-lg transition-all duration-300",t.class))},[s("div",eh,[s("div",{class:"flex items-center justify-between gap-3 px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60",onClick:c[0]||(c[0]=p=>n.value=!n.value)},[s("div",th,[s("div",nh,[s("span",{class:A(["absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",l.value.pulseBg])},null,2),s("span",{class:A(["relative inline-flex h-2 w-2 rounded-full",l.value.pulseBg])},null,2)]),s("div",rh,[s("div",oh,[s("span",sh,$(t.agentName),1),s("span",{class:A(["rounded-full border px-2 py-0.2 text-[10px] font-semibold",l.value.badgeBg])},$(l.value.label),3)]),s("p",ih,$(t.currentTask),1)])]),s("div",ah,[t.elapsed?(f(),g("div",lh,[w(I(fc),{class:"h-3 w-3 text-zinc-400"}),s("span",null,$(i.value),1)])):H("",!0),w(I(Xn),{class:A(["h-4 w-4 text-zinc-400 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])]),w(at,{name:"agent-expand"},{default:q(()=>[n.value&&t.steps&&t.steps.length>0?(f(),g("div",ch,[c[1]||(c[1]=s("div",{class:"text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2"}," 执行轨迹步骤 (Execution Steps) ",-1)),(f(!0),g(ie,null,ke(t.steps,(p,u)=>(f(),g("div",{key:p.id,class:"flex items-start gap-2.5 text-xs"},[s("div",dh,[p.status==="done"?(f(),me(I($s),{key:0,class:"h-4 w-4 text-emerald-500"})):p.status==="running"?(f(),me(I(ta),{key:1,class:"h-4 w-4 text-sky-500 animate-spin"})):p.status==="error"?(f(),me(I(Ms),{key:2,class:"h-4 w-4 text-rose-500"})):(f(),g("span",uh,$(u+1),1))]),s("div",ph,[s("div",fh,[s("span",{class:A(["font-medium truncate",p.status==="done"&&"text-zinc-700 dark:text-zinc-300",p.status==="running"&&"text-sky-600 dark:text-sky-400 font-semibold",p.status==="pending"&&"text-zinc-400 dark:text-zinc-500",p.status==="error"&&"text-rose-500 font-semibold"])},$(p.name),3),p.duration?(f(),g("span",mh,$(p.duration),1)):H("",!0)]),p.detail?(f(),g("p",bh,$(p.detail),1)):H("",!0)])]))),128))])):H("",!0)]),_:1})])],2))}}),hh=Ve(gh,[["__scopeId","data-v-d55be07e"]]),xh={class:"flex h-10 w-full items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 select-none"},vh={class:"flex items-center gap-1.5 text-[11px] font-medium text-zinc-400"},yh={class:"truncate max-w-[220px] sm:max-w-md"},kh={key:0,class:"flex items-center gap-2"},wh={key:1,class:"w-12"},zh={class:"text-blue-400 select-none font-bold"},_h={class:"text-zinc-100 font-semibold flex-1 break-all"},Ch={key:0,class:"inline-block h-4 w-2 translate-y-0.5 bg-blue-500 animate-pulse ml-0.5"},Sh={key:1,class:"text-emerald-400 font-medium break-all"},Ih={key:2,class:"text-rose-400 font-medium break-all"},Ah={key:3,class:"text-amber-400 font-medium break-all"},Mh={key:4,class:"text-sky-400 font-medium break-all"},$h={key:5,class:"text-zinc-400 break-all"},Ph={key:0,class:"flex items-center gap-2 pt-1"},Th=ae({__name:"TypewriterTerminal",props:{title:{default:"zsh - aura@developer:~ (80x24)"},lines:{default:()=>[{type:"input",text:"pnpm dlx aura-ui@latest add agent-status dock"},{type:"output",text:"⠋ Resolving packages & peer dependencies..."},{type:"output",text:"✔ Cloned src/components/ui/AgentStatus.vue"},{type:"output",text:"✔ Cloned src/components/ui/Dock.vue"},{type:"success",text:"✨ Successfully installed 2 motion primitives in 260ms."},{type:"input",text:"aura test --visual-regression"},{type:"info",text:"ℹ Running Playwright headless test in Chromium..."},{type:"success",text:"✔ All 19 components passed 60fps frame rate check!"}]},typingSpeed:{default:35},pauseEnd:{default:3500},loop:{type:Boolean,default:!0},controls:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=T([]),r=T(0),o=T(0),i=T(!1),l=T(!1),a=T(!1),c=T(null);let p=null;function u(){c.value&&(c.value.scrollTop=c.value.scrollHeight)}function d(){p&&clearTimeout(p),n.value=[],r.value=0,o.value=0,i.value=!1,l.value=!1,b()}function b(){if(!t.lines||t.lines.length===0)return;if(r.value>=t.lines.length){i.value=!1,l.value=!0,t.loop&&(p=setTimeout(()=>{d()},t.pauseEnd));return}const v=t.lines[r.value];if(v.type==="input")if(i.value=!0,o.value===0&&n.value.push({type:"input",text:"",prefix:v.prefix||"$ "}),o.value<v.text.length){const h=n.value[n.value.length-1];h.text+=v.text[o.value],o.value++,u();const z=Math.floor(Math.random()*25)-10,_=Math.max(15,t.typingSpeed+z);p=setTimeout(b,_)}else o.value=0,r.value++,i.value=!1,u(),p=setTimeout(b,400);else{i.value=!1,n.value.push({type:v.type,text:v.text,prefix:v.prefix}),r.value++,u();const h=v.delay??220;p=setTimeout(b,h)}}function m(){const v=t.lines.map(h=>`${h.prefix||(h.type==="input"?"$ ":"")}${h.text}`).join(`
`);navigator.clipboard.writeText(v),a.value=!0,setTimeout(()=>{a.value=!1},2e3)}return qe(()=>{d()}),Xe(()=>{p&&clearTimeout(p)}),it(()=>t.lines,()=>{d()},{deep:!0}),(v,h)=>(f(),g("div",{class:A(I(pe)("relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 font-mono text-xs sm:text-sm text-zinc-300 shadow-2xl backdrop-blur-md dark:border-zinc-800/80",t.class))},[s("div",xh,[h[0]||(h[0]=s("div",{class:"flex items-center gap-2"},[s("span",{class:"h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm transition-transform hover:scale-110"}),s("span",{class:"h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm transition-transform hover:scale-110"}),s("span",{class:"h-3 w-3 rounded-full bg-[#27c93f] shadow-sm transition-transform hover:scale-110"})],-1)),s("div",vh,[w(I(lr),{class:"h-3.5 w-3.5 text-zinc-500"}),s("span",yh,$(t.title),1)]),t.controls?(f(),g("div",kh,[s("button",{onClick:d,title:"重新播放",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[w(I(e0),{class:"h-3.5 w-3.5"})]),s("button",{onClick:m,title:"复制所有命令",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[a.value?(f(),me(I(Pt),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(f(),me(I(Ar),{key:1,class:"h-3.5 w-3.5"}))])])):(f(),g("div",wh))]),s("div",{ref_key:"terminalBodyRef",ref:c,class:"max-h-80 min-h-[220px] overflow-y-auto p-4 sm:p-5 space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-800"},[(f(!0),g(ie,null,ke(n.value,(z,_)=>(f(),g("div",{key:_,class:"flex items-start gap-2 leading-relaxed"},[z.type==="input"?(f(),g(ie,{key:0},[s("span",zh,$(z.prefix||"$ "),1),s("span",_h,[Ae($(z.text)+" ",1),i.value&&_===n.value.length-1?(f(),g("span",Ch)):H("",!0)])],64)):z.type==="success"?(f(),g("span",Sh,$(z.text),1)):z.type==="error"?(f(),g("span",Ih,$(z.text),1)):z.type==="warning"?(f(),g("span",Ah,$(z.text),1)):z.type==="info"?(f(),g("span",Mh,$(z.text),1)):(f(),g("span",$h,$(z.text),1))]))),128)),l.value?(f(),g("div",Ph,[...h[1]||(h[1]=[s("span",{class:"text-blue-400 font-bold select-none"},"$ ",-1),s("span",{class:"inline-block h-4 w-2 bg-zinc-500 animate-pulse"},null,-1)])])):H("",!0)],512)],2))}}),Rh={class:"p-3 sm:p-4 pb-2"},Eh=["placeholder"],Lh={class:"flex items-center justify-between border-t border-zinc-100 px-3 py-2.5 dark:border-zinc-900"},Fh={class:"flex items-center gap-1.5 sm:gap-2"},Dh={class:"relative"},Vh={key:0,class:"absolute bottom-full left-0 mb-2 w-52 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-2xl backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 select-none"},Oh=["onClick"],jh={key:0,class:"rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.2 text-[9px] text-zinc-500"},Bh={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"上传图像或文件"},Nh={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"语音输入"},Hh={class:"flex items-center gap-2"},Gh=["disabled"],Uh=ae({__name:"PromptInput",props:{modelValue:{default:""},placeholder:{default:"向 Aura AI 提问、生成 UI 动效，或输入 / 触发指令..."},loading:{type:Boolean,default:!1},selectedModel:{default:"deepseek-r1"},models:{default:()=>[{id:"deepseek-r1",name:"DeepSeek R1",badge:"Reasoning"},{id:"claude-3-7-sonnet",name:"Claude 3.7 Sonnet",badge:"Hybrid"},{id:"gpt-4o",name:"GPT-4o Omni",badge:"Multimodal"}]},webSearch:{type:Boolean,default:!1},maxRows:{default:6},class:{}},emits:["update:modelValue","submit","stop","update:selectedModel","toggleWebSearch"],setup(e,{emit:t}){const n=e,r=t,o=T(null),i=T(!1),l=T(n.webSearch),a=ne({get:()=>n.modelValue,set:h=>r("update:modelValue",h)}),c=ne(()=>n.models.find(h=>h.id===n.selectedModel)||n.models[0]);function p(h){const z=h.target;a.value=z.value,u()}function u(){if(!o.value)return;o.value.style.height="auto";const h=Math.min(o.value.scrollHeight,24*n.maxRows);o.value.style.height=`${h}px`}function d(h){h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),b())}function b(){if(n.loading){r("stop");return}a.value.trim()&&r("submit",a.value)}function m(){l.value=!l.value,r("toggleWebSearch",l.value)}function v(h){r("update:selectedModel",h),i.value=!1}return(h,z)=>(f(),g("div",{class:A(I(pe)("group relative w-full rounded-2xl border transition-all duration-300 shadow-xl backdrop-blur-xl","border-zinc-200/90 hover:border-zinc-300 dark:border-zinc-800/90 dark:hover:border-zinc-700","bg-white/85 dark:bg-zinc-950/85",n.class))},[s("div",Rh,[$n(s("textarea",{ref_key:"textareaRef",ref:o,"onUpdate:modelValue":z[0]||(z[0]=_=>a.value=_),placeholder:n.placeholder,rows:"1",onInput:p,onKeydown:d,class:"w-full resize-none border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 bg-transparent text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-500 leading-relaxed font-sans shadow-none",style:{outline:"none","box-shadow":"none"}},null,40,Eh),[[Eo,a.value]])]),s("div",Lh,[s("div",Fh,[s("div",Dh,[s("button",{type:"button",onClick:z[1]||(z[1]=_=>i.value=!i.value),class:"flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"},[w(I(Re),{class:"h-3.5 w-3.5 text-blue-500"}),s("span",null,$(c.value.name),1),w(I(Xn),{class:"h-3 w-3 text-zinc-400"})]),w(at,{name:"model-pop"},{default:q(()=>[i.value?(f(),g("div",Vh,[z[2]||(z[2]=s("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," 切换推理基座 ",-1)),(f(!0),g(ie,null,ke(n.models,_=>(f(),g("button",{key:_.id,type:"button",onClick:y=>v(_.id),class:A(["flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",_.id===n.selectedModel?"bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400":"text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"])},[s("span",null,$(_.name),1),_.badge?(f(),g("span",jh,$(_.badge),1)):H("",!0)],10,Oh))),128))])):H("",!0)]),_:1})]),s("button",{type:"button",onClick:m,class:A(["flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium transition-colors border",l.value?"border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400":"border-transparent text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"]),title:"联网实时搜索"},[w(I(gr),{class:"h-3.5 w-3.5"}),z[3]||(z[3]=s("span",{class:"hidden sm:inline"},"深度搜索",-1))],2),s("button",Bh,[w(I(Yp),{class:"h-3.5 w-3.5"})]),s("button",Nh,[w(I(mo),{class:"h-3.5 w-3.5"})])]),s("div",Hh,[z[4]||(z[4]=s("span",{class:"hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-zinc-400"},[s("span",null,"Enter ↵ 发送")],-1)),s("button",{type:"button",onClick:b,disabled:!n.loading&&!a.value.trim(),class:A(["flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 shadow-md",n.loading?"bg-rose-500 text-white hover:bg-rose-600":a.value.trim()?"bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 active:scale-95":"bg-zinc-100 text-zinc-400 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"])},[n.loading?(f(),me(I(s0),{key:0,class:"h-3.5 w-3.5 fill-current"})):(f(),me(I(dc),{key:1,class:"h-4 w-4"}))],10,Gh)])])],2))}}),qh=Ve(Uh,[["__scopeId","data-v-2c565fce"]]),Wh={class:"flex items-center gap-2.5 text-xs"},Xh={class:"relative flex h-4 w-4 items-center justify-center"},Kh={key:0,class:"absolute -inset-1 rounded-full bg-blue-500/20 animate-ping"},Yh={class:"flex items-center gap-2"},Zh={class:"font-bold text-zinc-900 dark:text-zinc-100"},Qh={class:"inline-flex items-center gap-1 rounded-md bg-zinc-200/60 px-2 py-0.5 font-mono text-[11px] text-zinc-500 dark:bg-zinc-800/80 dark:text-zinc-400"},Jh={key:0,class:"border-t border-zinc-200/70 px-4 py-3.5 dark:border-zinc-800/70"},ex={class:"border-l-2 border-blue-500/70 pl-3.5 font-mono text-xs leading-relaxed text-zinc-600 dark:border-blue-400/70 dark:text-zinc-400 whitespace-pre-wrap select-text"},tx=ae({__name:"ThoughtAccordion",props:{duration:{default:"思考用时 12.6 秒"},status:{default:"complete"},defaultOpen:{type:Boolean,default:!0},thoughtText:{default:`> 1. 解析用户需求：为 Vue 3 全系打造顶级 AI 原生交互动效。
> 2. 几何与物理模型推演：使用 CSS 3D 矩阵解构空间深度，保持 60fps 满帧性能。
> 3. 边界与异常收敛：引入状态机阻尼回弹，确保单文件零配置即刻分发。
> 4. 自愈与验证：通过 Playwright 双模态 Chromium 验证无色彩渗漏，交付闭环。`},class:{}},setup(e){const t=e,n=T(t.defaultOpen),r=T(!1);function o(){navigator.clipboard.writeText(t.thoughtText),r.value=!0,setTimeout(()=>{r.value=!1},2e3)}return(i,l)=>(f(),g("div",{class:A(I(pe)("w-full overflow-hidden rounded-2xl border transition-all duration-300",n.value?"border-zinc-200/90 bg-zinc-50/70 shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/40":"border-zinc-200/60 bg-white/60 hover:border-zinc-300 dark:border-zinc-800/60 dark:bg-zinc-950/60",t.class))},[s("div",{class:"flex items-center justify-between px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40",onClick:l[2]||(l[2]=a=>n.value=!n.value)},[s("div",Wh,[s("div",Xh,[w(I(Re),{class:A(["h-4 w-4 text-blue-500 transition-transform duration-300",t.status==="thinking"&&"animate-spin"])},null,8,["class"]),t.status==="thinking"?(f(),g("span",Kh)):H("",!0)]),s("div",Yh,[s("span",Zh,$(t.status==="thinking"?"正在深度思考推演...":"已深度思考"),1),s("span",Qh,[w(I(fc),{class:"h-3 w-3"}),s("span",null,$(t.duration),1)])])]),s("div",{class:"flex items-center gap-1.5",onClick:l[1]||(l[1]=kt(()=>{},["stop"]))},[s("button",{type:"button",onClick:o,title:"复制思考过程",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[r.value?(f(),me(I(Pt),{key:0,class:"h-3.5 w-3.5 text-emerald-500"})):(f(),me(I(Ar),{key:1,class:"h-3.5 w-3.5"}))]),s("button",{type:"button",onClick:l[0]||(l[0]=a=>n.value=!n.value),class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[w(I(Xn),{class:A(["h-4 w-4 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])])]),w(at,{name:"thought-slide"},{default:q(()=>[n.value?(f(),g("div",Jh,[s("div",ex,[Ge(i.$slots,"default",{},()=>[Ae($(t.thoughtText),1)],!0)])])):H("",!0)]),_:3})],2))}}),nx=Ve(tx,[["__scopeId","data-v-00c62984"]]),rx=["onClick","onMouseenter"],ox=ae({__name:"FluidTabs",props:{modelValue:{default:""},tabs:{default:()=>[]},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=T(null),i=T([]),l=T({left:0,width:0,opacity:0}),a=T({left:0,width:0,opacity:0});function c(m,v){m&&(i.value[v]=m)}function p(){On(()=>{if(!o.value)return;const m=n.tabs.findIndex(z=>z.id===n.modelValue);if(m===-1||!i.value[m]){l.value.opacity=0;return}const v=o.value.getBoundingClientRect(),h=i.value[m].getBoundingClientRect();l.value={left:h.left-v.left,width:h.width,opacity:1}})}function u(m){if(!o.value||!i.value[m])return;const v=o.value.getBoundingClientRect(),h=i.value[m].getBoundingClientRect();a.value={left:h.left-v.left,width:h.width,opacity:1}}function d(){a.value.opacity=0}function b(m){r("update:modelValue",m),r("change",m)}return it(()=>n.modelValue,()=>{p()}),it(()=>n.tabs,()=>{p()},{deep:!0}),qe(()=>{!n.modelValue&&n.tabs.length>0&&r("update:modelValue",n.tabs[0].id),p(),window.addEventListener("resize",p)}),(m,v)=>(f(),g("div",{ref_key:"containerRef",ref:o,class:A(I(pe)("relative inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-zinc-100/80 p-1.5 shadow-inner backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80 select-none",n.class)),onMouseleave:d},[s("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-zinc-200/60 transition-all duration-200 ease-out dark:bg-zinc-800/60",style:ve({left:`${a.value.left}px`,width:`${a.value.width}px`,opacity:a.value.opacity})},null,4),s("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-800 dark:shadow-black/40",style:ve({left:`${l.value.left}px`,width:`${l.value.width}px`,opacity:l.value.opacity})},null,4),(f(!0),g(ie,null,ke(n.tabs,(h,z)=>(f(),g("button",{key:h.id,ref_for:!0,ref:_=>c(_,z),type:"button",onClick:_=>b(h.id),onMouseenter:_=>u(z),class:A(["relative z-10 flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-200",n.modelValue===h.id?"text-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"])},[h.icon?(f(),me(Qe(h.icon),{key:0,class:A(["h-4 w-4 transition-transform duration-200",n.modelValue===h.id?"scale-110 text-blue-600 dark:text-blue-400":"text-zinc-400"])},null,8,["class"])):H("",!0),s("span",null,$(h.label),1),h.badge?(f(),g("span",{key:1,class:A(["rounded-full px-1.5 py-0.2 text-[10px] font-bold font-mono transition-colors",n.modelValue===h.id?"bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300":"bg-zinc-200/80 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"])},$(h.badge),3)):H("",!0)],42,rx))),128))],34))}}),sx={class:"relative z-10 flex items-center gap-2"},ix={key:2},ax={key:3},lx={key:4},cx={key:5,class:"ml-1 inline-block font-mono text-[11px] font-bold"},ss=ae({__name:"HoldToConfirm",props:{duration:{default:1200},label:{default:"长按以确认执行"},holdingLabel:{default:"保持长按不放..."},confirmedLabel:{default:"已成功确认！"},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,o=T(0),i=T(!1),l=T(!1);let a=null,c=0;const p=ne(()=>{switch(n.variant){case"danger":return{bg:"bg-rose-500/10 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-500/30",fill:"bg-rose-600 dark:bg-rose-500",ring:"text-rose-500",icon:yc};case"warning":return{bg:"bg-amber-500/10 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-500/30",fill:"bg-amber-600 dark:bg-amber-500",ring:"text-amber-500",icon:ii};default:return{bg:"bg-blue-500/10 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border-blue-500/30",fill:"bg-blue-600 dark:bg-blue-500",ring:"text-blue-500",icon:Pt}}});function u(){if(l.value)return;i.value=!0,c=performance.now();function b(){const m=performance.now()-c,v=Math.min(m/n.duration*100,100);o.value=v,v<100?a=requestAnimationFrame(b):(i.value=!1,l.value=!0,r("confirm"),setTimeout(()=>{l.value=!1,o.value=0},2500))}a=requestAnimationFrame(b)}function d(){l.value||(i.value=!1,a!==null&&(cancelAnimationFrame(a),a=null),o.value=0,r("cancel"))}return Xe(()=>{a!==null&&cancelAnimationFrame(a)}),(b,m)=>(f(),g("button",{type:"button",class:A(I(pe)("group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-xl border px-5 text-xs sm:text-sm font-semibold select-none transition-all duration-200 active:scale-95 cursor-pointer",p.value.bg,l.value&&"!bg-emerald-600 !border-emerald-600 text-white",n.class)),onMousedown:u,onMouseup:d,onMouseleave:d,onTouchstart:kt(u,["prevent"]),onTouchend:kt(d,["prevent"])},[l.value?H("",!0):(f(),g("div",{key:0,class:A(["pointer-events-none absolute inset-y-0 left-0 opacity-25 transition-[width] ease-linear",p.value.fill]),style:ve({width:`${o.value}%`})},null,6)),s("span",sx,[l.value?(f(),me(I(Pt),{key:0,class:"h-4 w-4 animate-bounce"})):(f(),me(Qe(p.value.icon),{key:1,class:A(["h-4 w-4 transition-transform duration-200",i.value&&"scale-125 animate-pulse"])},null,8,["class"])),l.value?(f(),g("span",ix,$(n.confirmedLabel),1)):i.value?(f(),g("span",ax,$(n.holdingLabel),1)):(f(),g("span",lx,$(n.label),1)),i.value&&!l.value?(f(),g("span",cx,$(Math.round(o.value))+"% ",1)):H("",!0)])],34))}}),dx={key:0,class:"flex h-10 items-center gap-1.5 px-4 text-xs sm:text-sm font-semibold text-white"},is=ae({__name:"ConfirmMorph",props:{label:{default:"删除此资源"},confirmText:{default:"确定删除"},cancelText:{default:"取消"},icon:{},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,o=T(!1),i=T(!1);function l(){i.value||(o.value=!0)}function a(){i.value=!0,r("confirm"),setTimeout(()=>{i.value=!1,o.value=!1},2200)}function c(){o.value=!1,r("cancel")}return(p,u)=>(f(),g("div",{class:A(I(pe)("inline-flex items-center overflow-hidden rounded-xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none",n.variant==="danger"&&"border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20",n.variant==="warning"&&"border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20",n.variant==="primary"&&"border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20",i.value&&"!border-emerald-600 !bg-emerald-600 text-white",n.class))},[i.value?(f(),g("div",dx,[w(I(Pt),{class:"h-4 w-4 animate-bounce"}),u[0]||(u[0]=s("span",null,"操作已完成",-1))])):o.value?(f(),g(ie,{key:1},[s("button",{type:"button",onClick:a,class:A(["flex h-10 items-center gap-1.5 px-3.5 text-xs font-semibold text-white transition-colors cursor-pointer",n.variant==="danger"&&"bg-rose-600 hover:bg-rose-700",n.variant==="warning"&&"bg-amber-600 hover:bg-amber-700",n.variant==="primary"&&"bg-blue-600 hover:bg-blue-700"])},[w(I(ii),{class:"h-3.5 w-3.5"}),s("span",null,$(n.confirmText),1)],2),s("button",{type:"button",onClick:c,class:"flex h-10 items-center gap-1 border-l border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 px-3 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[w(I(Kn),{class:"h-3.5 w-3.5"}),s("span",null,$(n.cancelText),1)])],64)):(f(),g("button",{key:2,type:"button",onClick:l,class:A(["flex h-10 items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-colors cursor-pointer",n.variant==="danger"&&"text-rose-600 hover:bg-rose-500/10 dark:text-rose-400",n.variant==="warning"&&"text-amber-600 hover:bg-amber-500/10 dark:text-amber-400",n.variant==="primary"&&"text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"])},[(f(),me(Qe(n.icon||I(yc)),{class:"h-4 w-4"})),s("span",null,$(n.label),1)],2))],2))}}),ux=["width","height","stroke-width"],px=["width","height","stroke-width"],fx=["d"],mx=["width","height","stroke-width"],as=ae({__name:"IconMorph",props:{modelValue:{type:Boolean,default:!1},mode:{default:"menu-close"},size:{default:24},strokeWidth:{default:2},class:{}},emits:["update:modelValue","click"],setup(e,{emit:t}){const n=e,r=t;function o(){r("update:modelValue",!n.modelValue),r("click")}return(i,l)=>(f(),g("button",{type:"button",onClick:o,class:A(I(pe)("relative inline-flex items-center justify-center rounded-xl p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer select-none",n.class)),style:ve({width:`${n.size+16}px`,height:`${n.size+16}px`})},[n.mode==="menu-close"?(f(),g("svg",{key:0,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[s("line",{x1:"3",y1:"6",x2:"21",y2:"6",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:ve({transform:n.modelValue?"translateY(6px) rotate(45deg)":"none"})},null,4),s("line",{x1:"3",y1:"12",x2:"21",y2:"12",class:"transition-all duration-200 ease-out origin-center",style:ve({opacity:n.modelValue?"0":"1",transform:n.modelValue?"scaleX(0)":"scaleX(1)"})},null,4),s("line",{x1:"3",y1:"18",x2:"21",y2:"18",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:ve({transform:n.modelValue?"translateY(-6px) rotate(-45deg)":"none"})},null,4)],8,ux)):n.mode==="play-pause"?(f(),g("svg",{key:1,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[s("line",{x1:"6",y1:"4",x2:"6",y2:"20",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",style:ve({transform:n.modelValue?"none":"translateX(1px)"})},null,4),s("path",{d:n.modelValue?"M18 4 L18 20":"M6 4 L20 12 L6 20",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"},null,8,fx)],8,px)):n.mode==="plus-minus"?(f(),g("svg",{key:2,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round"},[l[0]||(l[0]=s("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1)),s("line",{x1:"12",y1:"5",x2:"12",y2:"19",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:ve({transform:n.modelValue?"rotate(90deg) scale(0)":"rotate(0deg) scale(1)",opacity:n.modelValue?"0":"1"})},null,4)],8,mx)):H("",!0)],6))}}),bx={class:"relative inline-flex items-center"},gx=["disabled"],hx={key:1,class:"truncate"},xx={key:2,class:"ml-0.5 rounded-full bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400"},vx={key:0,class:"pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap rounded-md border border-zinc-200/80 bg-white/95 px-2 py-0.5 text-[10px] font-medium text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-800/95 dark:text-zinc-200"},yx=ae({__name:"ActionButton",props:{label:{},tooltip:{},icon:{},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},badge:{},size:{default:"md"},class:{}},emits:["click"],setup(e,{emit:t}){const n=e,r=t,o=T(!1);function i(l){n.disabled||r("click",l)}return(l,a)=>(f(),g("div",bx,[s("button",{type:"button",disabled:n.disabled,onClick:i,onMouseenter:a[0]||(a[0]=c=>o.value=!0),onMouseleave:a[1]||(a[1]=c=>o.value=!1),class:A(I(pe)("group relative flex items-center justify-center rounded-xl border font-medium select-none transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer","active:scale-90 hover:scale-[1.03]",n.size==="sm"&&"h-8 px-2.5 text-xs gap-1.5",n.size==="md"&&"h-9 px-3 text-xs sm:text-sm gap-2",n.size==="lg"&&"h-11 px-4 text-sm sm:text-base gap-2.5",n.active?"border-blue-500/50 bg-blue-50 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/90 text-zinc-700 shadow-2xs hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800/80 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",n.disabled&&"opacity-50 cursor-not-allowed active:scale-100 hover:scale-100",n.class))},[n.icon?(f(),me(Qe(n.icon),{key:0,class:A(["shrink-0 transition-transform duration-150",n.size==="sm"&&"h-3.5 w-3.5",n.size==="md"&&"h-4 w-4",n.size==="lg"&&"h-5 w-5"])},null,8,["class"])):H("",!0),n.label?(f(),g("span",hx,$(n.label),1)):H("",!0),n.badge!==void 0?(f(),g("span",xx,$(n.badge),1)):H("",!0),Ge(l.$slots,"default",{},void 0,!0)],42,gx),w(at,{name:"action-tip"},{default:q(()=>[o.value&&n.tooltip?(f(),g("div",vx,$(n.tooltip),1)):H("",!0)]),_:1})]))}}),rr=Ve(yx,[["__scopeId","data-v-54d32724"]]),kx={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-1"},wx=["onClick"],zx={class:"text-xs font-semibold text-zinc-900 dark:text-zinc-100"},_x={key:0,class:"text-[10px] text-zinc-400 mt-0.5"},Cx=ae({__name:"SplitButton",props:{label:{default:"立即发布上线"},icon:{default:Qr},items:{default:()=>[{id:"preview",label:"发布至 Staging 预览环境",description:"生成独立预览分支 URL"},{id:"draft",label:"保存为草稿草稿快照",description:"仅团队协作成员可见"},{id:"schedule",label:"定时发布计划",description:"设定指定时间自动化推上线"}]},variant:{default:"primary"},class:{}},emits:["primaryClick","select"],setup(e,{emit:t}){const n=e,r=t,o=T(!1),i=T(null);function l(){o.value=!o.value}function a(){r("primaryClick")}function c(u){o.value=!1,r("select",u),u.onClick&&u.onClick()}function p(u){i.value&&!i.value.contains(u.target)&&(o.value=!1)}return qe(()=>{window.addEventListener("click",p)}),Xe(()=>{window.removeEventListener("click",p)}),(u,d)=>(f(),g("div",{ref_key:"containerRef",ref:i,class:A(I(pe)("relative inline-flex items-center select-none",n.class))},[s("div",{class:A(["flex h-10 items-stretch overflow-hidden rounded-xl border shadow-sm transition-all duration-200",n.variant==="primary"&&"border-blue-600 bg-blue-600 text-white hover:bg-blue-500",n.variant==="secondary"&&"border-zinc-200/80 bg-white/90 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800"])},[s("button",{type:"button",onClick:a,class:"flex items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-transform active:scale-95 cursor-pointer"},[(f(),me(Qe(n.icon),{class:"h-4 w-4"})),s("span",null,$(n.label),1)]),s("div",{class:A(["w-px self-stretch",n.variant==="primary"?"bg-blue-400/50":"bg-zinc-200 dark:bg-zinc-800"])},null,2),s("button",{type:"button",onClick:kt(l,["stop"]),class:"flex items-center justify-center px-2.5 transition-colors hover:bg-black/10 active:scale-95 cursor-pointer dark:hover:bg-white/10",title:"更多选项"},[w(I(Xn),{class:A(["h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",o.value&&"rotate-180"])},null,8,["class"])])],2),w(at,{name:"split-menu"},{default:q(()=>[o.value&&n.items&&n.items.length>0?(f(),g("div",kx,[(f(!0),g(ie,null,ke(n.items,b=>(f(),g("button",{key:b.id,type:"button",onClick:m=>c(b),class:"flex w-full flex-col items-start rounded-lg px-3 py-2 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"},[s("span",zx,$(b.label),1),b.description?(f(),g("span",_x,$(b.description),1)):H("",!0)],8,wx))),128))])):H("",!0)]),_:1})],2))}}),$a=Ve(Cx,[["__scopeId","data-v-6e3e55b2"]]),Sx=["onClick"],Ix={class:"font-mono text-[11px] font-bold"},Ax={key:0,type:"button",class:"flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-zinc-300 text-zinc-400 transition-colors hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 cursor-pointer",title:"添加表情反馈"},Pa=ae({__name:"Reactions",props:{items:{default:()=>[{id:"fire",emoji:"🔥",count:48,active:!0},{id:"rocket",emoji:"🚀",count:32,active:!1},{id:"heart",emoji:"❤️",count:65,active:!1},{id:"zap",emoji:"⚡",count:19,active:!1},{id:"eyes",emoji:"👀",count:12,active:!1}]},allowAdd:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=T(JSON.parse(JSON.stringify(t.items))),r=T(null);function o(i){i.active=!i.active,i.count+=i.active?1:-1,r.value=i.id,setTimeout(()=>{r.value=null},400)}return(i,l)=>(f(),g("div",{class:A(I(pe)("inline-flex flex-wrap items-center gap-1.5 select-none",t.class))},[(f(!0),g(ie,null,ke(n.value,a=>(f(),g("button",{key:a.id,type:"button",onClick:c=>o(a),class:A(["group flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold transition-all duration-200 active:scale-90 cursor-pointer",a.active?"border-blue-500/50 bg-blue-50/80 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/80 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"])},[s("span",{class:A(["text-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",r.value===a.id&&"scale-135 -translate-y-0.5","group-hover:scale-110"])},$(a.emoji),3),s("span",Ix,$(a.count),1)],10,Sx))),128)),t.allowAdd?(f(),g("button",Ax,[w(I(o0),{class:"h-3.5 w-3.5"})])):H("",!0)],2))}}),Mx={key:0,class:"text-xs font-semibold text-zinc-600 dark:text-zinc-300"},$x={class:"relative flex h-full flex-1 items-center px-2.5 min-w-[70px]"},Px={class:"font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100"},Tx={key:0,class:"font-mono text-[10px] text-zinc-400"},ls=ae({__name:"ScrubInput",props:{modelValue:{},label:{},min:{default:0},max:{default:100},step:{default:1},sensitivity:{default:1},suffix:{default:"px"},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=T(!1),i=T(!1),l=T(null),a=T(String(n.modelValue));let c=0,p=0;function u(_){let y=_;return n.min!==void 0&&(y=Math.max(n.min,y)),n.max!==void 0&&(y=Math.min(n.max,y)),Math.round(y*100)/100}function d(_){i.value||(o.value=!0,c=_.clientX,p=n.modelValue,window.addEventListener("mousemove",b),window.addEventListener("mouseup",m),document.body.style.cursor="ew-resize",document.body.style.userSelect="none")}function b(_){if(!o.value)return;const y=_.clientX-c;let C=1;_.shiftKey&&(C=10),_.altKey&&(C=.1);const M=Math.round(y/(5/n.sensitivity)*C)*n.step,R=u(p+M);R!==n.modelValue&&r("update:modelValue",R)}function m(){o.value&&(o.value=!1,window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect="",r("change",n.modelValue))}function v(){i.value=!0,a.value=String(n.modelValue),setTimeout(()=>{var _,y;(_=l.value)==null||_.focus(),(y=l.value)==null||y.select()},20)}function h(){i.value=!1;const _=parseFloat(a.value);if(!isNaN(_)){const y=u(_);r("update:modelValue",y),r("change",y)}}const z=ne(()=>{const _=n.max-n.min;return _<=0?0:Math.min(Math.max((n.modelValue-n.min)/_*100,0),100)});return Xe(()=>{window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect=""}),(_,y)=>(f(),g("div",{class:A(I(pe)("group relative inline-flex h-9 items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900 select-none overflow-hidden",o.value&&"border-blue-500 ring-2 ring-blue-500/20",n.class))},[s("div",{class:"pointer-events-none absolute inset-y-0 left-0 bg-blue-500/10 dark:bg-blue-500/15 transition-[width] ease-out duration-75",style:ve({width:`${z.value}%`})},null,4),s("div",{onMousedown:d,class:"flex h-full items-center gap-1 px-2.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-ew-resize transition-colors",title:"按住左右水平拖拽微调数值 (Shift 加速 10x, Alt 精细 0.1x)"},[w(I(pc),{class:"h-3.5 w-3.5"}),n.label?(f(),g("span",Mx,$(n.label),1)):H("",!0)],32),y[2]||(y[2]=s("div",{class:"h-4 w-px bg-zinc-200 dark:bg-zinc-800"},null,-1)),s("div",$x,[i.value?$n((f(),g("input",{key:0,ref_key:"inputRef",ref:l,"onUpdate:modelValue":y[0]||(y[0]=C=>a.value=C),type:"text",onBlur:h,onKeydown:[Qi(h,["enter"]),y[1]||(y[1]=Qi(C=>i.value=!1,["esc"]))],class:"w-full bg-transparent p-0 text-right font-mono text-xs font-bold text-zinc-900 outline-none focus:outline-none dark:text-zinc-100"},null,544)),[[Eo,a.value]]):(f(),g("div",{key:1,onDblclick:v,onMousedown:d,class:"flex w-full items-center justify-end gap-0.5 cursor-ew-resize",title:"双击直接键入数值，或按住水平拖动"},[s("span",Px,$(n.modelValue),1),n.suffix?(f(),g("span",Tx,$(n.suffix),1)):H("",!0)],32))])],2))}}),Rx={class:"relative flex items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900"},Ex=["type","value","placeholder"],Lx={class:"space-y-1.5"},Fx={class:"grid grid-cols-4 gap-1.5"},Dx={class:"flex items-center justify-between text-[11px] font-mono"},Vx={class:"text-zinc-400 flex items-center gap-1"},Ox={key:0,class:"rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-3 text-xs space-y-1.5 dark:border-zinc-800/80 dark:bg-zinc-950/40"},jx=ae({__name:"PasswordStrength",props:{modelValue:{default:""},placeholder:{default:"请输入安全密码..."},showRules:{type:Boolean,default:!0},class:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,o=T(!1),i=ne(()=>{const p=n.modelValue||"";return[{id:"length",label:"至少 8 个字符",valid:p.length>=8},{id:"lowercase",label:"包含小写英文字母 (a-z)",valid:/[a-z]/.test(p)},{id:"uppercase",label:"包含大写英文字母 (A-Z)",valid:/[A-Z]/.test(p)},{id:"number",label:"包含至少 1 个数字 (0-9)",valid:/\d/.test(p)},{id:"special",label:"包含特殊符号 (!@#$%^&*)",valid:/[^A-Za-z0-9]/.test(p)}]}),l=ne(()=>i.value.filter(p=>p.valid).length),a=ne(()=>{if(!n.modelValue)return{score:0,text:"未输入",color:"bg-zinc-200 dark:bg-zinc-800",textColor:"text-zinc-400"};const p=l.value;return p<=2?{score:1,text:"较弱 (Weak)",color:"bg-rose-500",textColor:"text-rose-500"}:p===3?{score:2,text:"中等 (Fair)",color:"bg-amber-500",textColor:"text-amber-500"}:p===4?{score:3,text:"良好 (Good)",color:"bg-sky-500",textColor:"text-sky-500"}:{score:4,text:"极高安全 (Strong)",color:"bg-emerald-500",textColor:"text-emerald-500"}});function c(p){const u=p.target.value;r("update:modelValue",u)}return(p,u)=>(f(),g("div",{class:A(I(pe)("w-full max-w-sm space-y-3 select-none",n.class))},[s("div",Rx,[s("input",{type:o.value?"text":"password",value:n.modelValue,placeholder:n.placeholder,onInput:c,class:"h-10 w-full bg-transparent px-3.5 pr-10 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,Ex),s("button",{type:"button",onClick:u[0]||(u[0]=d=>o.value=!o.value),class:"absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer",tabindex:"-1"},[o.value?(f(),me(I(Bp),{key:0,class:"h-4 w-4"})):(f(),me(I(mc),{key:1,class:"h-4 w-4"}))])]),s("div",Lx,[s("div",Fx,[(f(),g(ie,null,ke(4,d=>s("div",{key:d,class:"h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300"},[s("div",{class:A(["h-full transition-all duration-300 ease-out",d<=a.value.score?a.value.color:"w-0"]),style:ve({width:d<=a.value.score?"100%":"0%"})},null,6)])),64))]),s("div",Dx,[s("span",Vx,[w(I(xc),{class:"h-3.5 w-3.5"}),u[1]||(u[1]=s("span",null,"安全等级评估",-1))]),s("span",{class:A(["font-bold transition-colors duration-200",a.value.textColor])},$(a.value.text),3)])]),n.showRules?(f(),g("div",Ox,[(f(!0),g(ie,null,ke(i.value,d=>(f(),g("div",{key:d.id,class:A(["flex items-center gap-2 transition-colors duration-200",d.valid?"text-emerald-600 dark:text-emerald-400 font-semibold":"text-zinc-400"])},[s("div",{class:A(["flex h-4 w-4 items-center justify-center rounded-full transition-all duration-200",d.valid?"bg-emerald-500/20 text-emerald-600 dark:text-emerald-400":"bg-zinc-200 dark:bg-zinc-800 text-zinc-400"])},[d.valid?(f(),me(I(Pt),{key:0,class:"h-2.5 w-2.5 animate-bounce"})):(f(),me(I(Kn),{key:1,class:"h-2.5 w-2.5 opacity-50"}))],2),s("span",null,$(d.label),1)],2))),128))])):H("",!0)],2))}}),Bx={class:"flex items-center justify-between"},Nx={class:"flex items-center gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800"},Hx=["onClick"],Gx={class:"relative flex items-baseline border-b border-zinc-200/90 pb-3 transition-colors dark:border-zinc-800"},Ux={class:"font-mono text-2xl font-bold text-zinc-400 mr-2 shrink-0"},qx=["value","placeholder"],Wx={class:"flex flex-wrap items-center gap-2 pt-1"},Xx=["onClick"],Kx=ae({__name:"MoneyInput",props:{modelValue:{default:0},currency:{default:"CNY"},currencies:{default:()=>[{code:"CNY",symbol:"¥",label:"人民币"},{code:"USD",symbol:"$",label:"美元"},{code:"EUR",symbol:"€",label:"欧元"},{code:"GBP",symbol:"£",label:"英镑"}]},presets:{default:()=>[100,500,1e3,5e3]},placeholder:{default:"0.00"},class:{}},emits:["update:modelValue","update:currency"],setup(e,{emit:t}){const n=e,r=t,o=T(n.currency),i=ne(()=>{var m;return((m=n.currencies.find(v=>v.code===o.value))==null?void 0:m.symbol)||"¥"});function l(m){return m===0?"":m.toLocaleString("en-US",{maximumFractionDigits:2})}const a=ne(()=>l(n.modelValue)),c=ne(()=>{const m=a.value.length;return m>12?"text-xl":m>8?"text-2xl":"text-3xl sm:text-4xl"});function p(m){const h=m.target.value.replace(/[^0-9.]/g,""),z=parseFloat(h);r("update:modelValue",isNaN(z)?0:z)}function u(m){r("update:modelValue",n.modelValue+m)}function d(){r("update:modelValue",0)}function b(m){o.value=m,r("update:currency",m)}return(m,v)=>(f(),g("div",{class:A(I(pe)("w-full max-w-md rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 select-none space-y-4",n.class))},[s("div",Bx,[v[0]||(v[0]=s("span",{class:"text-xs font-semibold text-zinc-500 dark:text-zinc-400"},"转账 / 充值金额",-1)),s("div",Nx,[(f(!0),g(ie,null,ke(n.currencies,h=>(f(),g("button",{key:h.code,type:"button",onClick:z=>b(h.code),class:A(["rounded-md px-2 py-0.5 text-[11px] font-bold font-mono transition-colors cursor-pointer",o.value===h.code?"bg-white text-zinc-900 shadow-2xs dark:bg-zinc-700 dark:text-white":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"])},$(h.code),11,Hx))),128))])]),s("div",Gx,[s("span",Ux,$(i.value),1),s("input",{type:"text",inputmode:"decimal",value:a.value,placeholder:n.placeholder,onInput:p,class:A(["w-full bg-transparent p-0 font-mono font-extrabold tracking-tight text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 transition-all duration-200",c.value])},null,42,qx),n.modelValue>0?(f(),g("button",{key:0,type:"button",onClick:d,class:"ml-2 rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors cursor-pointer shrink-0"}," 清零 ")):H("",!0)]),s("div",Wx,[v[1]||(v[1]=s("span",{class:"text-[11px] text-zinc-400"},"快捷填充:",-1)),(f(!0),g(ie,null,ke(n.presets,h=>(f(),g("button",{key:h,type:"button",onClick:z=>u(h),class:"rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-2.5 py-1 font-mono text-xs font-semibold text-zinc-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-400 dark:hover:bg-blue-950/40 dark:hover:text-blue-400 transition-all active:scale-95 cursor-pointer"}," +"+$(i.value)+$(h),9,Xx))),128))])],2))}}),Yx={class:"text-base leading-none"},Zx={class:"font-mono text-zinc-900 dark:text-zinc-100"},Qx={class:"relative flex flex-1 items-center px-3"},Jx=["value","placeholder"],ev={key:0,class:"ml-1 text-emerald-500"},tv={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 max-h-56 overflow-y-auto space-y-0.5"},nv=["onClick"],rv={class:"flex items-center gap-2"},ov={class:"text-base"},sv={class:"font-medium text-zinc-800 dark:text-zinc-200"},iv={class:"font-mono text-[11px] font-bold text-zinc-400"},av=ae({__name:"PhoneInput",props:{modelValue:{default:""},countryCode:{default:"CN"},countries:{default:()=>[{code:"CN",dialCode:"+86",name:"中国",flag:"🇨🇳",format:"### #### ####"},{code:"US",dialCode:"+1",name:"美国",flag:"🇺🇸",format:"(###) ###-####"},{code:"GB",dialCode:"+44",name:"英国",flag:"🇬🇧",format:"#### ######"},{code:"JP",dialCode:"+81",name:"日本",flag:"🇯🇵",format:"###-####-####"},{code:"DE",dialCode:"+49",name:"德国",flag:"🇩🇪",format:"#### #######"},{code:"SG",dialCode:"+65",name:"新加坡",flag:"🇸🇬",format:"#### ####"}]},placeholder:{default:"请输入手机号码..."},class:{}},emits:["update:modelValue","update:countryCode"],setup(e,{emit:t}){const n=e,r=t,o=T(n.countries.find(b=>b.code===n.countryCode)||n.countries[0]),i=T(!1),l=T(null);function a(b,m){const v=b.replace(/\D/g,"");let h="",z=0;for(let _=0;_<m.length&&z<v.length;_++)m[_]==="#"?(h+=v[z],z++):h+=m[_];return z<v.length&&(h+=" "+v.slice(z)),h}function c(b){const v=b.target.value.replace(/\D/g,""),h=a(v,o.value.format);r("update:modelValue",h)}function p(b){o.value=b,i.value=!1,r("update:countryCode",b.code);const m=n.modelValue.replace(/\D/g,"");r("update:modelValue",a(m,b.format))}function u(b){l.value&&!l.value.contains(b.target)&&(i.value=!1)}qe(()=>{window.addEventListener("click",u)}),Xe(()=>{window.removeEventListener("click",u)});const d=ne(()=>{const b=n.modelValue.replace(/\D/g,"");return b.length>=8&&b.length<=15});return(b,m)=>(f(),g("div",{ref_key:"containerRef",ref:l,class:A(I(pe)("relative w-full max-w-sm select-none",n.class))},[s("div",{class:A(["flex h-10 items-center overflow-hidden rounded-xl border bg-white shadow-2xs transition-all dark:bg-zinc-900",n.modelValue&&d.value?"border-emerald-500/50":"border-zinc-200/90 dark:border-zinc-800"])},[s("button",{type:"button",onClick:m[0]||(m[0]=kt(v=>i.value=!i.value,["stop"])),class:"flex h-full items-center gap-1.5 border-r border-zinc-200/80 bg-zinc-50/70 px-3 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0 outline-none focus:outline-none ring-0"},[s("span",Yx,$(o.value.flag),1),s("span",Zx,$(o.value.dialCode),1),w(I(Xn),{class:A(["h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",i.value&&"rotate-180"])},null,8,["class"])]),s("div",Qx,[s("input",{type:"tel",value:n.modelValue,placeholder:n.placeholder,onInput:c,class:"w-full bg-transparent font-mono text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,Jx),n.modelValue&&d.value?(f(),g("div",ev,[w(I(Pt),{class:"h-4 w-4 animate-bounce"})])):H("",!0)])],2),w(at,{name:"phone-menu"},{default:q(()=>[i.value?(f(),g("div",tv,[(f(!0),g(ie,null,ke(n.countries,v=>(f(),g("button",{key:v.code,type:"button",onClick:h=>p(v),class:"flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"},[s("div",rv,[s("span",ov,$(v.flag),1),s("span",sv,$(v.name),1)]),s("span",iv,$(v.dialCode),1)],8,nv))),128))])):H("",!0)]),_:1})],2))}}),lv=Ve(av,[["__scopeId","data-v-178808d1"]]),cv={class:"flex items-center pl-1 text-zinc-400"},dv=["onClick"],uv=["disabled","placeholder"],pv={key:0,class:"ml-auto pr-1 font-mono text-[10px] text-zinc-400"},fv=ae({__name:"TagInput",props:{modelValue:{default:()=>["Vue 3.5","TailwindCSS","Motion UI"]},placeholder:{default:"输入标签后按回车添加..."},maxTags:{default:8},allowDuplicates:{type:Boolean,default:!1},class:{}},emits:["update:modelValue","add","remove"],setup(e,{emit:t}){const n=e,r=t,o=T(""),i=T(null);function l(){const u=o.value.trim();if(!u||n.maxTags&&n.modelValue.length>=n.maxTags)return;if(!n.allowDuplicates&&n.modelValue.includes(u)){o.value="";return}const d=[...n.modelValue,u];r("update:modelValue",d),r("add",u),o.value=""}function a(u){const d=n.modelValue[u],b=n.modelValue.filter((m,v)=>v!==u);r("update:modelValue",b),r("remove",d)}function c(u){u.key==="Enter"||u.key===","?(u.preventDefault(),l()):u.key==="Backspace"&&!o.value&&n.modelValue.length>0&&a(n.modelValue.length-1)}function p(){var u;(u=i.value)==null||u.focus()}return(u,d)=>(f(),g("div",{onClick:p,class:A(I(pe)("group flex min-h-10 w-full max-w-md flex-wrap items-center gap-1.5 rounded-xl border border-zinc-200/90 bg-white p-2 shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900 cursor-text select-none",n.class))},[s("div",cv,[w(I(a0),{class:"h-3.5 w-3.5"})]),w(cc,{name:"tag-list"},{default:q(()=>[(f(!0),g(ie,null,ke(n.modelValue,(b,m)=>(f(),g("div",{key:b,class:"inline-flex items-center gap-1 rounded-lg border border-blue-500/20 bg-blue-50/70 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/60 dark:text-blue-300 transition-all duration-200"},[s("span",null,$(b),1),s("button",{type:"button",onClick:kt(v=>a(m),["stop"]),class:"flex h-3.5 w-3.5 items-center justify-center rounded-full hover:bg-blue-600/20 dark:hover:bg-blue-400/20 transition-colors cursor-pointer"},[w(I(Kn),{class:"h-2.5 w-2.5"})],8,dv)]))),128))]),_:1}),$n(s("input",{ref_key:"inputRef",ref:i,"onUpdate:modelValue":d[0]||(d[0]=b=>o.value=b),type:"text",disabled:n.maxTags?n.modelValue.length>=n.maxTags:!1,placeholder:n.modelValue.length===0?n.placeholder:n.maxTags&&n.modelValue.length>=n.maxTags?"已达上限":"添加更多...",onKeydown:c,class:"min-w-[80px] flex-1 bg-transparent px-1.5 py-0.5 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,uv),[[Eo,o.value]]),n.maxTags?(f(),g("div",pv,$(n.modelValue.length)+"/"+$(n.maxTags),1)):H("",!0)],2))}}),mv=Ve(fv,[["__scopeId","data-v-03f3a70c"]]),bv={class:"relative flex flex-col rounded-2xl border border-zinc-200/90 bg-white p-3 shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900"},gv=["value","placeholder"],hv={class:"flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/80"},xv={class:"flex items-center gap-1 text-[11px] text-zinc-400"},vv={class:"font-mono text-[10px] text-zinc-400"},yv={key:0,class:"aura-popover popover-shadow absolute bottom-full left-0 mb-2 w-72 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-0.5"},kv={class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"},wv=["onClick","onMouseenter"],zv={key:1},_v={class:"flex flex-1 flex-col overflow-hidden"},Cv={class:"flex items-center gap-1.5"},Sv={class:"truncate text-xs font-semibold"},Iv={key:0,class:"rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"},Av={class:"truncate text-[10px] text-zinc-400"},Mv=ae({__name:"MentionInput",props:{modelValue:{default:""},placeholder:{default:"输入内容，键入 @ 可呼出团队成员或智能体..."},users:{default:()=>[{id:"1",name:"Aura Assistant",handle:"aura_ai",role:"全栈架构 Agent",isBot:!0},{id:"2",name:"Aura Motion",handle:"auramotion",role:"视觉动效引擎",isBot:!0},{id:"3",name:"Alex Rivera",handle:"alex",role:"前端技术专家",isBot:!1},{id:"4",name:"Elena Rostova",handle:"elena",role:"UI 设计专家",isBot:!1},{id:"5",name:"Devin AI",handle:"devin",role:"代码重构 Agent",isBot:!0}]},class:{}},emits:["update:modelValue","mention"],setup(e,{emit:t}){const n=e,r=t,o=T(null),i=T(!1),l=T(""),a=T(0),c=ne(()=>{const b=l.value.toLowerCase();return b?n.users.filter(m=>m.name.toLowerCase().includes(b)||m.handle.toLowerCase().includes(b)):n.users});function p(b){const m=b.target,v=m.value;r("update:modelValue",v);const h=m.selectionStart||0,z=v.slice(0,h),_=z.lastIndexOf("@");if(_!==-1){const y=z.slice(_+1);if(!y.includes(" ")&&!y.includes(`
`)){l.value=y,i.value=!0,a.value=0;return}}i.value=!1}function u(b){const m=o.value;if(!m)return;const v=n.modelValue,h=m.selectionStart||0,z=v.slice(0,h),_=v.slice(h),y=z.lastIndexOf("@");if(y!==-1){const C=z.slice(0,y)+`@${b.name} `+_;r("update:modelValue",C),r("mention",b),i.value=!1,setTimeout(()=>{m.focus();const M=y+b.name.length+2;m.setSelectionRange(M,M)},20)}}function d(b){!i.value||c.value.length===0||(b.key==="ArrowDown"?(b.preventDefault(),a.value=(a.value+1)%c.value.length):b.key==="ArrowUp"?(b.preventDefault(),a.value=(a.value-1+c.value.length)%c.value.length):b.key==="Enter"||b.key==="Tab"?(b.preventDefault(),u(c.value[a.value])):b.key==="Escape"&&(i.value=!1))}return(b,m)=>(f(),g("div",{class:A(I(pe)("relative w-full max-w-lg select-none",n.class))},[s("div",bv,[s("textarea",{ref_key:"textareaRef",ref:o,value:n.modelValue,placeholder:n.placeholder,rows:"3",onInput:p,onKeydown:d,class:"w-full resize-none bg-transparent text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,gv),s("div",hv,[s("div",xv,[w(I(Dp),{class:"h-3.5 w-3.5 text-blue-500"}),m[0]||(m[0]=s("span",null,"输入 @ 呼出协作成员 / Agent",-1))]),s("span",vv,$(n.modelValue.length)+" 字 ",1)])]),w(at,{name:"mention-pop"},{default:q(()=>[i.value&&c.value.length>0?(f(),g("div",yv,[s("div",kv," 可选成员与智能体 ("+$(c.value.length)+") ",1),(f(!0),g(ie,null,ke(c.value,(v,h)=>(f(),g("button",{key:v.id,type:"button",onClick:z=>u(v),onMouseenter:z=>a.value=h,class:A(["flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors cursor-pointer",a.value===h?"bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300":"hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200"])},[s("div",{class:A(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white shrink-0",v.isBot?"bg-gradient-to-tr from-blue-600 to-indigo-500":"bg-zinc-700 dark:bg-zinc-600"])},[v.isBot?(f(),me(I(Fn),{key:0,class:"h-4 w-4"})):(f(),g("span",zv,$(v.name.charAt(0)),1))],2),s("div",_v,[s("div",Cv,[s("span",Sv,$(v.name),1),v.isBot?(f(),g("span",Iv," AI ")):H("",!0)]),s("span",Av,"@"+$(v.handle)+" · "+$(v.role),1)])],42,wv))),128))])):H("",!0)]),_:1})],2))}}),$v=Ve(Mv,[["__scopeId","data-v-c938133f"]]),Pv=["disabled","onClick","onKeydown"],Ta=ae({__name:"SegmentedControl",props:{modelValue:{},options:{},size:{default:"md"},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=T(null),i=T([]),l=T({width:"0px",transform:"translateX(0px)",opacity:0});function a(){const u=n.options.findIndex(b=>b.id===n.modelValue);if(u===-1||!i.value[u]){l.value.opacity=0;return}const d=i.value[u];d&&(l.value={width:`${d.offsetWidth}px`,transform:`translateX(${d.offsetLeft}px)`,opacity:1})}function c(u){u.disabled||(r("update:modelValue",u.id),r("change",u))}function p(u,d){const b=n.options.map((h,z)=>({opt:h,i:z})).filter(h=>!h.opt.disabled),m=b.findIndex(h=>h.i===d);if(m===-1)return;let v=m;if(u.key==="ArrowRight"||u.key==="ArrowDown"?(u.preventDefault(),v=(m+1)%b.length):(u.key==="ArrowLeft"||u.key==="ArrowUp")&&(u.preventDefault(),v=(m-1+b.length)%b.length),v!==m){const h=b[v];c(h.opt),On(()=>{var z;(z=i.value[h.i])==null||z.focus()})}}return it(()=>n.modelValue,()=>{On(a)}),qe(()=>{On(()=>{a(),window.addEventListener("resize",a)})}),(u,d)=>(f(),g("div",{ref_key:"containerRef",ref:o,class:A(I(pe)("relative inline-flex items-center rounded-xl bg-zinc-100 p-1 select-none dark:bg-zinc-800/80",n.class))},[s("div",{class:"pointer-events-none absolute left-0 top-1 bottom-1 z-0 rounded-lg bg-white shadow-xs transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-700 dark:shadow-none",style:ve(l.value)},null,4),(f(!0),g(ie,null,ke(n.options,(b,m)=>(f(),g("button",{key:b.id,ref_for:!0,ref:v=>i.value[m]=v,type:"button",disabled:b.disabled,onClick:v=>c(b),onKeydown:v=>p(v,m),class:A(I(pe)("relative z-10 flex items-center justify-center gap-1.5 font-medium transition-colors duration-150 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer",n.size==="sm"&&"h-7 px-2.5 text-xs",n.size==="md"&&"h-8 px-3.5 text-xs sm:text-sm",n.size==="lg"&&"h-10 px-4 text-sm sm:text-base",n.modelValue===b.id?"text-zinc-900 font-bold dark:text-white":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",b.disabled&&"opacity-40 cursor-not-allowed hover:text-zinc-500"))},[b.icon?(f(),me(Qe(b.icon),{key:0,class:A(["shrink-0 transition-transform duration-150",n.size==="sm"&&"h-3.5 w-3.5",n.size==="md"&&"h-4 w-4",n.size==="lg"&&"h-5 w-5",n.modelValue===b.id&&"scale-105 text-blue-600 dark:text-blue-400"])},null,8,["class"])):H("",!0),s("span",null,$(b.label),1),b.badge!==void 0?(f(),g("span",{key:1,class:A(["rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold transition-colors",n.modelValue===b.id?"bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300":"bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"])},$(b.badge),3)):H("",!0)],42,Pv))),128))],2))}}),Tv={class:"flex items-center gap-1.5 flex-wrap"},Rv={key:0,class:"flex items-center"},Ev={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},Lv={key:1},Fv=["onClick"],Dv={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},Vv={key:1},Ov={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},jv={key:1},Bv={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-1.5 w-48 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-0.5"},Nv=["onClick"],Hv={key:0,class:"font-bold text-zinc-900 dark:text-white flex items-center gap-1","aria-current":"page"},Gv=["onClick"],Uv={key:2,class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},qv={key:1},Wv=ae({__name:"BreadcrumbTrail",props:{items:{},maxItems:{default:4},separator:{default:"chevron"},showHome:{type:Boolean,default:!0},class:{}},emits:["select"],setup(e,{emit:t}){const n=e,r=t,o=T(!1),i=T(null),l=ne(()=>{const p=n.items.length;return p<=n.maxItems?{start:n.items,hidden:[],end:[],isCollapsed:!1}:{start:[n.items[0]],hidden:n.items.slice(1,p-2),end:n.items.slice(p-2),isCollapsed:!0}});function a(p){r("select",p),p.onClick&&p.onClick(),o.value=!1}function c(p){i.value&&!i.value.contains(p.target)&&(o.value=!1)}return qe(()=>{window.addEventListener("click",c)}),Xe(()=>{window.removeEventListener("click",c)}),(p,u)=>(f(),g("nav",{"aria-label":"Breadcrumb",class:A(I(pe)("inline-flex items-center text-xs sm:text-sm font-medium select-none",n.class))},[s("ol",Tv,[n.showHome?(f(),g("li",Rv,[s("button",{type:"button",onClick:u[0]||(u[0]=d=>a({label:"首页",href:"/"})),class:"flex items-center gap-1 text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer",title:"返回控制台首页"},[w(I(bc),{class:"h-3.5 w-3.5"})]),s("span",Ev,[n.separator==="chevron"?(f(),me(I(Dn),{key:0,class:"h-3.5 w-3.5"})):(f(),g("span",Lv,"/"))])])):H("",!0),(f(!0),g(ie,null,ke(l.value.start,d=>(f(),g("li",{key:d.label,class:"flex items-center"},[s("button",{type:"button",onClick:b=>a(d),class:"flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[d.icon?(f(),me(Qe(d.icon),{key:0,class:"h-3.5 w-3.5"})):H("",!0),s("span",null,$(d.label),1)],8,Fv),s("span",Dv,[n.separator==="chevron"?(f(),me(I(Dn),{key:0,class:"h-3.5 w-3.5"})):(f(),g("span",Vv,"/"))])]))),128)),l.value.isCollapsed?(f(),g("li",{key:1,ref_key:"menuRef",ref:i,class:"relative flex items-center"},[s("button",{type:"button",onClick:u[1]||(u[1]=kt(d=>o.value=!o.value,["stop"])),class:"flex h-6 w-6 items-center justify-center rounded-md border border-zinc-200/80 bg-zinc-50/80 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-all cursor-pointer",title:"点击展开中间隐藏路径"},[w(I(jp),{class:"h-3.5 w-3.5"})]),s("span",Ov,[n.separator==="chevron"?(f(),me(I(Dn),{key:0,class:"h-3.5 w-3.5"})):(f(),g("span",jv,"/"))]),w(at,{name:"crumb-menu"},{default:q(()=>[o.value?(f(),g("div",Bv,[u[2]||(u[2]=s("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," 折叠上级路径 ",-1)),(f(!0),g(ie,null,ke(l.value.hidden,(d,b)=>(f(),g("button",{key:b,type:"button",onClick:m=>a(d),class:"flex w-full items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-left text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer transition-colors"},[d.icon?(f(),me(Qe(d.icon),{key:0,class:"h-3.5 w-3.5 text-zinc-400"})):H("",!0),s("span",null,$(d.label),1)],8,Nv))),128))])):H("",!0)]),_:1})],512)):H("",!0),(f(!0),g(ie,null,ke(l.value.end,(d,b)=>(f(),g("li",{key:b,class:"flex items-center"},[b===l.value.end.length-1?(f(),g("span",Hv,[d.icon?(f(),me(Qe(d.icon),{key:0,class:"h-3.5 w-3.5 text-blue-500"})):H("",!0),s("span",null,$(d.label),1)])):(f(),g("button",{key:1,type:"button",onClick:m=>a(d),class:"flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[d.icon?(f(),me(Qe(d.icon),{key:0,class:"h-3.5 w-3.5"})):H("",!0),s("span",null,$(d.label),1)],8,Gv)),b<l.value.end.length-1?(f(),g("span",Uv,[n.separator==="chevron"?(f(),me(I(Dn),{key:0,class:"h-3.5 w-3.5"})):(f(),g("span",qv,"/"))])):H("",!0)]))),128))])],2))}}),Ra=Ve(Wv,[["__scopeId","data-v-097ac1ff"]]),Xv={key:0,class:"whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-xs font-semibold text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:text-zinc-200 transition-transform group-hover:scale-105"},Kv=["onClick","title"],Yv=ae({__name:"FloatingActionMenu",props:{actions:{},direction:{default:"up"},class:{}},emits:["select","toggle"],setup(e,{emit:t}){const n=e,r=t,o=T(!1),i=T(null);function l(){o.value=!o.value,r("toggle",o.value)}function a(p){r("select",p),p.onClick&&p.onClick(),o.value=!1,r("toggle",!1)}function c(p){i.value&&!i.value.contains(p.target)&&o.value&&(o.value=!1,r("toggle",!1))}return qe(()=>{window.addEventListener("click",c)}),Xe(()=>{window.removeEventListener("click",c)}),(p,u)=>(f(),g("div",{ref_key:"containerRef",ref:i,class:A(I(pe)("relative inline-flex flex-col items-center select-none",n.class))},[w(at,{name:"fab-items"},{default:q(()=>[o.value?(f(),g("div",{key:0,class:A(["absolute z-40 flex gap-3 pointer-events-auto",n.direction==="up"&&"bottom-full mb-3 flex-col-reverse items-center",n.direction==="down"&&"top-full mt-3 flex-col items-center",n.direction==="left"&&"right-full mr-3 flex-row-reverse items-center",n.direction==="right"&&"left-full ml-3 flex-row items-center"])},[(f(!0),g(ie,null,ke(n.actions,(d,b)=>(f(),g("div",{key:d.id,class:"flex items-center gap-2 group cursor-pointer",style:ve({transitionDelay:`${b*40}ms`})},[n.direction==="up"||n.direction==="down"?(f(),g("div",Xv,$(d.label),1)):H("",!0),s("button",{type:"button",onClick:kt(m=>a(d),["stop"]),class:A(["flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer",d.color||"bg-blue-600 hover:bg-blue-500 shadow-blue-500/25"]),title:d.label},[(f(),me(Qe(d.icon),{class:"h-4 w-4"}))],10,Kv)],4))),128))],2)):H("",!0)]),_:1}),s("button",{type:"button",onClick:kt(l,["stop"]),class:A(["relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-blue-500 hover:scale-105 active:scale-90 cursor-pointer outline-none focus:outline-none ring-0",o.value&&"!bg-zinc-900 dark:!bg-zinc-700 shadow-zinc-900/40"]),title:"操作菜单"},[w(I(Qp),{class:A(["h-5 w-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",o.value&&"rotate-135"])},null,8,["class"])],2)],2))}}),Zv=Ve(Yv,[["__scopeId","data-v-9096a8eb"]]),Qv={class:"flex items-center gap-1 rounded-xl bg-zinc-50 p-1 border border-zinc-200/80 dark:bg-zinc-900/60 dark:border-zinc-800/80"},Jv=["onMouseenter"],e1={class:"space-y-1"},t1=["onClick"],n1={key:0,class:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 transition-transform group-hover:scale-105"},r1={class:"flex-1 overflow-hidden"},o1={class:"flex items-center gap-1.5"},s1={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"},i1={key:0,class:"rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300"},a1={class:"mt-0.5 text-[11px] text-zinc-400 line-clamp-1"},l1=ae({__name:"NavbarHover",props:{items:{},class:{}},emits:["select"],setup(e,{emit:t}){const n=e,r=t,o=T(null),i=T(null),l=T([]),a=T({left:0,opacity:0,arrowLeft:0});let c=null;function p(v){const h=l.value[v],z=i.value;if(!h||!z)return;const _=z.getBoundingClientRect(),y=h.getBoundingClientRect(),C=y.left+y.width/2-_.left,M=320;a.value={left:Math.max(C-M/2,0),arrowLeft:C,opacity:1}}function u(v,h){c&&(clearTimeout(c),c=null),o.value=v.id,p(h)}function d(){c=setTimeout(()=>{o.value=null,a.value.opacity=0},180)}function b(){c&&(clearTimeout(c),c=null)}function m(v){r("select",v),o.value=null,a.value.opacity=0}return qe(()=>{window.addEventListener("resize",()=>{if(o.value){const v=n.items.findIndex(h=>h.id===o.value);v!==-1&&p(v)}})}),Xe(()=>{c&&clearTimeout(c)}),(v,h)=>(f(),g("div",{ref_key:"containerRef",ref:i,onMouseleave:d,class:A(I(pe)("relative inline-flex items-center select-none",n.class))},[s("nav",Qv,[(f(!0),g(ie,null,ke(n.items,(z,_)=>(f(),g("button",{key:z.id,ref_for:!0,ref:y=>l.value[_]=y,type:"button",onMouseenter:y=>u(z,_),class:A(["flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer outline-none focus:outline-none",o.value===z.id?"bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},[s("span",null,$(z.label),1),w(I(Xn),{class:A(["h-3.5 w-3.5 text-zinc-400 transition-transform duration-200",o.value===z.id&&"rotate-180 text-blue-500"])},null,8,["class"])],42,Jv))),128))]),w(at,{name:"nav-morph"},{default:q(()=>{var z;return[o.value?(f(),g("div",{key:0,onMouseenter:b,onMouseleave:d,class:"aura-popover popover-shadow absolute top-full mt-2 w-80 rounded-2xl border border-zinc-200/80 bg-white/95 p-3 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",style:ve({left:`${a.value.left}px`})},[s("div",{class:"absolute -top-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-zinc-200/80 bg-white dark:border-zinc-800/90 dark:bg-zinc-900 transition-all duration-200",style:ve({left:`${a.value.arrowLeft-a.value.left}px`})},null,4),s("div",e1,[(f(!0),g(ie,null,ke(((z=n.items.find(_=>_.id===o.value))==null?void 0:z.children)||[],_=>(f(),g("div",{key:_.title,onClick:y=>m(_),class:"group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer"},[_.icon?(f(),g("div",n1,[(f(),me(Qe(_.icon),{class:"h-4 w-4"}))])):H("",!0),s("div",r1,[s("div",o1,[s("span",s1,$(_.title),1),_.badge?(f(),g("span",i1,$(_.badge),1)):H("",!0),w(I(mr),{class:"ml-auto h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-blue-500"})]),s("p",a1,$(_.desc),1)])],8,t1))),128))])],36)):H("",!0)]}),_:1})],34))}}),c1=Ve(l1,[["__scopeId","data-v-36b3159c"]]),d1={class:"inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-white p-1 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900"},u1=["disabled"],p1={class:"flex items-center gap-1"},f1={key:0,class:"flex h-8 w-6 items-center justify-center font-mono text-xs text-zinc-400"},m1=["onClick"],b1=["disabled"],g1={key:0,class:"flex w-full max-w-xs items-center gap-2.5 rounded-xl border border-zinc-200/60 bg-zinc-50/60 px-3 py-1.5 dark:border-zinc-800/60 dark:bg-zinc-950/40"},h1=["max","value"],x1={class:"font-mono text-[10px] text-zinc-400 shrink-0"},v1={class:"rounded bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 shrink-0"},y1=ae({__name:"PaginationSlider",props:{modelValue:{default:1},totalPages:{default:10},showSlider:{type:Boolean,default:!0},siblingCount:{default:1},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t;function o(a){const c=Math.max(1,Math.min(n.totalPages,a));c!==n.modelValue&&(r("update:modelValue",c),r("change",c))}const i=ne(()=>{const a=n.modelValue,c=n.totalPages,p=n.siblingCount,u=[],d=Math.max(a-p,1),b=Math.min(a+p,c),m=d>2,v=b<c-1;if(!m&&v){const h=3+2*p;for(let z=1;z<=Math.min(h,c);z++)u.push(z);c>h&&(u.push("..."),u.push(c))}else if(m&&!v){const h=3+2*p;u.push(1),u.push("...");for(let z=Math.max(c-h+1,1);z<=c;z++)u.push(z)}else if(m&&v){u.push(1),u.push("...");for(let h=d;h<=b;h++)u.push(h);u.push("..."),u.push(c)}else for(let h=1;h<=c;h++)u.push(h);return u});function l(a){const c=parseInt(a.target.value,10);isNaN(c)||o(c)}return(a,c)=>(f(),g("div",{class:A(I(pe)("flex flex-col items-center gap-3 select-none",n.class))},[s("div",d1,[s("button",{type:"button",disabled:n.modelValue<=1,onClick:c[0]||(c[0]=p=>o(n.modelValue-1)),class:"flex h-8 w-8 items-center justify-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all active:scale-90 cursor-pointer",title:"上一页"},[w(I(uc),{class:"h-4 w-4"})],8,u1),s("div",p1,[(f(!0),g(ie,null,ke(i.value,(p,u)=>(f(),g(ie,{key:u},[p==="..."?(f(),g("span",f1," ··· ")):(f(),g("button",{key:1,type:"button",onClick:d=>o(p),class:A(["flex h-8 min-w-[32px] items-center justify-center rounded-xl px-2 font-mono text-xs font-semibold transition-all duration-150 active:scale-95 cursor-pointer",n.modelValue===p?"bg-blue-600 text-white shadow-xs dark:bg-blue-600":"text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"])},$(p),11,m1))],64))),128))]),s("button",{type:"button",disabled:n.modelValue>=n.totalPages,onClick:c[1]||(c[1]=p=>o(n.modelValue+1)),class:"flex h-8 w-8 items-center justify-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all active:scale-90 cursor-pointer",title:"下一页"},[w(I(Dn),{class:"h-4 w-4"})],8,b1)]),n.showSlider&&n.totalPages>3?(f(),g("div",g1,[w(I(r0),{class:"h-3 w-3 text-zinc-400 shrink-0"}),c[2]||(c[2]=s("span",{class:"font-mono text-[10px] text-zinc-400 shrink-0"},"P1",-1)),s("input",{type:"range",min:1,max:n.totalPages,value:n.modelValue,onInput:l,class:"h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-blue-600 dark:bg-zinc-800"},null,40,h1),s("span",x1,"P"+$(n.totalPages),1),s("span",v1,$(n.modelValue)+"/"+$(n.totalPages),1)])):H("",!0)],2))}}),k1=["title"],w1=["width","height"],z1=["cx","cy","r","stroke-width"],_1=["cx","cy","r","stroke-width","stroke-dasharray","stroke-dashoffset"],C1={class:"relative z-10 flex flex-col items-center justify-center text-zinc-700 dark:text-zinc-200 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"},S1={class:"font-mono text-[9px] font-extrabold leading-none mt-0.5"},cs=ae({__name:"CircularProgressNav",props:{progress:{},size:{default:56},strokeWidth:{default:4},icon:{},tooltip:{},class:{}},emits:["click"],setup(e,{emit:t}){const n=e,r=t,o=ne(()=>n.size/2),i=ne(()=>o.value-n.strokeWidth),l=ne(()=>2*Math.PI*i.value),a=ne(()=>{const p=Math.min(Math.max(n.progress,0),100);return l.value-p/100*l.value});function c(){r("click")}return(p,u)=>(f(),g("button",{type:"button",onClick:c,title:n.tooltip||`阅读/滚动进度: ${Math.round(n.progress)}%`,class:A(I(pe)("group relative inline-flex items-center justify-center rounded-full bg-white/90 p-1 shadow-md shadow-black/5 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 dark:bg-zinc-900/90 dark:shadow-black/20 cursor-pointer outline-none focus:outline-none ring-0",n.class)),style:ve({width:`${n.size}px`,height:`${n.size}px`})},[(f(),g("svg",{width:n.size,height:n.size,class:"absolute inset-0 -rotate-90 pointer-events-none"},[s("circle",{cx:o.value,cy:o.value,r:i.value,fill:"transparent",stroke:"currentColor","stroke-width":n.strokeWidth,class:"text-zinc-200/80 dark:text-zinc-800"},null,8,z1),s("circle",{cx:o.value,cy:o.value,r:i.value,fill:"transparent",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-dasharray":l.value,"stroke-dashoffset":a.value,class:"text-blue-600 dark:text-blue-500 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"},null,8,_1)],8,w1)),s("div",C1,[(f(),me(Qe(n.icon||I(dc)),{class:"h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"})),s("span",S1,$(Math.round(n.progress))+"% ",1)])],14,k1))}}),I1={class:"relative h-full w-full overflow-hidden rounded-2xl p-[1.5px]"},A1={class:"relative z-10 h-full w-full rounded-[14.5px] bg-white p-6 backdrop-blur-xl transition-colors duration-300 dark:bg-zinc-950"},M1=ae({__name:"GlowingCard",props:{glowColor:{default:"conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)"},duration:{default:4},blur:{default:20},hoverOnly:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=ne(()=>`${t.duration}s`),r=ne(()=>`${t.blur}px`);return(o,i)=>(f(),g("div",{class:A(I(pe)("group relative rounded-2xl transition-all duration-300",t.class))},[s("div",{class:A(["pointer-events-none absolute -inset-1 rounded-2xl opacity-40 transition-opacity duration-500 overflow-hidden",t.hoverOnly?"opacity-0 group-hover:opacity-60":"opacity-40"]),style:ve({filter:`blur(${r.value})`})},[s("div",{class:"glow-rotator absolute left-1/2 top-1/2 h-[350%] w-[350%]",style:ve({background:t.glowColor,animationDuration:n.value})},null,4)],6),s("div",I1,[s("div",{class:A(["glow-rotator pointer-events-none absolute left-1/2 top-1/2 h-[350%] w-[350%]",t.hoverOnly?"opacity-0 group-hover:opacity-100":"opacity-100"]),style:ve({background:t.glowColor,animationDuration:n.value})},null,6),s("div",A1,[Ge(o.$slots,"default",{},void 0,!0)])])],2))}}),Ea=Ve(M1,[["__scopeId","data-v-0f2ee4a3"]]),$1={key:0,class:"pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/40"},P1={class:"relative z-10"},La=ae({__name:"GlassCard",props:{blur:{default:16},saturation:{default:180},borderGlow:{type:Boolean,default:!0},interactive:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=ne(()=>({backdropFilter:`blur(${t.blur}px) saturate(${t.saturation}%)`,WebkitBackdropFilter:`blur(${t.blur}px) saturate(${t.saturation}%)`}));return(r,o)=>(f(),g("div",{class:A(I(pe)("group relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-black/30",t.interactive&&"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-2xl hover:border-white/40 dark:hover:border-white/20",t.class)),style:ve(n.value)},[t.borderGlow?(f(),g("div",$1)):H("",!0),o[0]||(o[0]=s("div",{class:"pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60 dark:from-white/10 dark:opacity-30"},null,-1)),s("div",P1,[Ge(r.$slots,"default")])],6))}}),T1={class:"relative z-10"},Fa=ae({__name:"SpotlightCard",props:{spotlightColor:{default:"rgba(59, 130, 246, 0.15)"},spotlightRadius:{default:320},showBorderSpotlight:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=T(null),r=T({x:-1e3,y:-1e3}),o=T(!1);function i(u){if(!n.value)return;const d=n.value.getBoundingClientRect();r.value={x:u.clientX-d.left,y:u.clientY-d.top}}function l(){o.value=!0}function a(){o.value=!1,r.value={x:-1e3,y:-1e3}}const c=ne(()=>({background:`radial-gradient(${t.spotlightRadius}px circle at ${r.value.x}px ${r.value.y}px, ${t.spotlightColor}, transparent 80%)`})),p=ne(()=>({background:`radial-gradient(${t.spotlightRadius*.75}px circle at ${r.value.x}px ${r.value.y}px, rgba(59, 130, 246, 0.45), transparent 70%)`}));return(u,d)=>(f(),g("div",{ref_key:"cardRef",ref:n,onMousemove:i,onMouseenter:l,onMouseleave:a,class:A(I(pe)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950",t.class))},[t.showBorderSpotlight?(f(),g("div",{key:0,class:A(["pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300",o.value&&"opacity-100"]),style:ve(p.value)},null,6)):H("",!0),s("div",{class:A(["pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",o.value&&"opacity-100"]),style:ve(c.value)},null,6),s("div",T1,[Ge(u.$slots,"default")])],34))}}),R1={class:"relative z-10 [transform-style:preserve-3d]"},E1=ae({__name:"TiltCard",props:{maxTilt:{default:15},perspective:{default:1e3},glare:{type:Boolean,default:!0},scale:{default:1.03},class:{}},setup(e){const t=e,n=T(null),r=T(0),o=T(0),i=T(!1),l=T({x:50,y:50});function a(b){if(!n.value)return;const m=n.value.getBoundingClientRect(),v=b.clientX-m.left,h=b.clientY-m.top,z=m.width/2,_=m.height/2,y=(v-z)/z,C=(h-_)/_;r.value=-C*t.maxTilt,o.value=y*t.maxTilt,l.value={x:v/m.width*100,y:h/m.height*100}}function c(){i.value=!0}function p(){i.value=!1,r.value=0,o.value=0}const u=ne(()=>i.value?{transform:`perspective(${t.perspective}px) rotateX(${r.value.toFixed(2)}deg) rotateY(${o.value.toFixed(2)}deg) scale3d(${t.scale}, ${t.scale}, ${t.scale})`,transition:"transform 0.1s ease-out"}:{transform:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:"transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"}),d=ne(()=>({background:`radial-gradient(circle at ${l.value.x}% ${l.value.y}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%)`}));return(b,m)=>(f(),g("div",{ref_key:"cardRef",ref:n,onMousemove:a,onMouseenter:c,onMouseleave:p,class:A(I(pe)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xl transition-shadow duration-300 dark:border-zinc-800 dark:bg-zinc-950 select-none",i.value&&"shadow-2xl shadow-blue-500/10",t.class)),style:ve(u.value)},[t.glare?(f(),g("div",{key:0,class:A(["pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-300",i.value&&"opacity-100"]),style:ve(d.value)},null,6)):H("",!0),s("div",R1,[Ge(b.$slots,"default")])],38))}}),L1={class:"relative h-[240px] w-full max-w-md sm:h-[260px]"},F1=["onPointerdown","onPointermove","onPointerup","onPointercancel"],D1={class:"flex items-center justify-between mb-4"},V1={class:"font-mono text-xs text-zinc-400"},O1={class:"text-base font-bold tracking-tight text-zinc-900 dark:text-white line-clamp-2"},j1={key:0,class:"mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3"},B1={key:1,class:"mt-6 flex items-center gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800/60"},N1={class:"h-6 w-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold"},H1={class:"text-xs font-medium text-zinc-600 dark:text-zinc-300"},G1={class:"mt-6 flex items-center gap-4"},U1=ae({__name:"CardStack",props:{items:{},maxVisible:{default:3},class:{}},emits:["change","swipe"],setup(e,{emit:t}){const n=e,r=t,o=T(0),i=T(!1),l=T({x:0,y:0}),a=T({x:0,y:0}),c=ne(()=>{const h=n.items.length;if(h===0)return[];const z=[],_=Math.min(n.maxVisible,h);for(let y=0;y<_;y++){const C=(o.value+y)%h;z.push({item:n.items[C],originalIndex:C,stackOrder:y})}return z});function p(){if(n.items.length<=1)return;const h=n.items[o.value];r("swipe",h,"right"),o.value=(o.value+1)%n.items.length,r("change",n.items[o.value])}function u(){n.items.length<=1||(o.value=(o.value-1+n.items.length)%n.items.length,r("change",n.items[o.value]))}function d(){o.value=0}function b(h){i.value=!0,a.value={x:h.clientX,y:h.clientY},l.value={x:0,y:0},h.target.setPointerCapture(h.pointerId)}function m(h){i.value&&(l.value={x:h.clientX-a.value.x,y:h.clientY-a.value.y})}function v(h){if(!i.value)return;i.value=!1;const z=80;if(l.value.x>z)p();else if(l.value.x<-z){const _=n.items[o.value];r("swipe",_,"left"),o.value=(o.value+1)%n.items.length,r("change",n.items[o.value])}l.value={x:0,y:0}}return(h,z)=>(f(),g("div",{class:A(I(pe)("relative flex flex-col items-center select-none",n.class))},[s("div",L1,[(f(!0),g(ie,null,ke(c.value,_=>(f(),g("div",{key:_.item.id,class:A(["absolute inset-0 rounded-2xl border p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",[_.stackOrder===0?"cursor-grab active:cursor-grabbing border-zinc-200/90 bg-white shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900 shadow-black/5 dark:shadow-black/30":"pointer-events-none border-zinc-200/50 bg-white/90 shadow-md dark:border-zinc-800/50 dark:bg-zinc-900/80"]]),style:ve({zIndex:n.maxVisible-_.stackOrder,transform:_.stackOrder===0&&i.value?`translate3d(${l.value.x}px, ${l.value.y*.2}px, 0) rotate(${l.value.x*.06}deg)`:`translate3d(0, -${_.stackOrder*12}px, -${_.stackOrder*20}px) scale(${1-_.stackOrder*.05})`,opacity:1-_.stackOrder*.15}),onPointerdown:y=>_.stackOrder===0?b(y):void 0,onPointermove:y=>_.stackOrder===0?m(y):void 0,onPointerup:y=>_.stackOrder===0?v():void 0,onPointercancel:y=>_.stackOrder===0?v():void 0},[s("div",D1,[_.item.tag?(f(),g("span",{key:0,class:A(["rounded-full px-2.5 py-0.5 text-[11px] font-bold",_.item.color||"bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"])},$(_.item.tag),3)):H("",!0),s("span",V1," #"+$(_.originalIndex+1)+" / "+$(n.items.length),1)]),s("h4",O1,$(_.item.title),1),_.item.description?(f(),g("p",j1,$(_.item.description),1)):H("",!0),_.item.author?(f(),g("div",B1,[s("div",N1,$(_.item.author.charAt(0)),1),s("span",H1,$(_.item.author),1)])):H("",!0)],46,F1))),128))]),s("div",G1,[s("button",{type:"button",onClick:u,class:"flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer outline-none focus:outline-none ring-0",title:"上一张卡片"},[w(I(uc),{class:"h-4 w-4"})]),s("button",{type:"button",onClick:d,class:"flex h-8 px-3 items-center justify-center gap-1.5 rounded-full border border-zinc-200 bg-white text-xs font-mono text-zinc-500 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer outline-none focus:outline-none ring-0",title:"重置堆叠"},[w(I(hc),{class:"h-3 w-3"}),z[0]||(z[0]=s("span",null,"重置",-1))]),s("button",{type:"button",onClick:p,class:"flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer outline-none focus:outline-none ring-0",title:"下一张卡片（或向右划动）"},[w(I(Dn),{class:"h-4 w-4"})])])],2))}}),q1={class:"pointer-events-none absolute h-0 w-0"},W1=["id"],X1={class:"relative z-10"},K1=ae({__name:"NoiseCard",props:{gradient:{default:"linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))"},grainOpacity:{default:.15},animated:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=Wn(),r=ne(()=>`noise-filter-${n}`);return(o,i)=>(f(),g("div",{class:A(I(pe)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-xl dark:border-zinc-800/80 dark:bg-zinc-950/80",t.class))},[s("div",{class:"pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-100",style:ve({background:t.gradient})},null,4),(f(),g("svg",q1,[s("defs",null,[s("filter",{id:r.value,x:"0%",y:"0%",width:"100%",height:"100%"},[...i[0]||(i[0]=[s("feTurbulence",{type:"fractalNoise",baseFrequency:"0.75",numOctaves:"3",stitchTiles:"stitch"},null,-1),s("feColorMatrix",{type:"saturate",values:"0"},null,-1)])],8,W1)])])),s("div",{class:A(["pointer-events-none absolute -inset-[100%] transition-opacity duration-300",t.animated&&"animate-noise"]),style:ve({filter:`url(#${r.value})`,opacity:t.grainOpacity})},null,6),i[1]||(i[1]=s("div",{class:"pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/20"},null,-1)),s("div",X1,[Ge(o.$slots,"default",{},void 0,!0)])],2))}}),Da=Ve(K1,[["__scopeId","data-v-3563e1d3"]]),Y1=["width","height"],Z1=["id"],Q1=["stop-color"],J1=["stop-color"],ey=["d","fill"],ty=["d","stroke"],ny=["x1","y1","x2","y2","stroke"],ry={key:2},oy=["cx","cy","stroke"],sy=["cx","cy","fill"],js=ae({__name:"Sparkline",props:{data:{default:()=>[12,19,15,27,24,38,35,48,52,60,58,75]},width:{default:280},height:{default:80},color:{default:"#3b82f6"},fill:{type:Boolean,default:!0},interactive:{type:Boolean,default:!0},formatValue:{},class:{}},setup(e){const t=e,n=Wn(),r=ne(()=>`sparkline-grad-${n}`),o={top:8,bottom:8,left:4,right:4},i=ne(()=>{if(t.data.length===0)return[];const m=Math.min(...t.data),h=Math.max(...t.data)-m||1,z=t.width-o.left-o.right,_=t.height-o.top-o.bottom;return t.data.map((y,C)=>{const M=o.left+C/(t.data.length-1)*z,R=o.top+_-(y-m)/h*_;return{x:M,y:R,value:y,index:C}})}),l=ne(()=>{const m=i.value;if(m.length<2)return"";let v=`M ${m[0].x} ${m[0].y}`;for(let h=0;h<m.length-1;h++){const z=m[h],_=m[h+1],y=(z.x+_.x)/2;v+=` C ${y} ${z.y}, ${y} ${_.y}, ${_.x} ${_.y}`}return v}),a=ne(()=>{const m=i.value;if(m.length<2)return"";const v=l.value,h=m[m.length-1],z=m[0],_=t.height-o.bottom+4;return`${v} L ${h.x} ${_} L ${z.x} ${_} Z`}),c=T(null),p=T({x:0,y:0}),u=ne(()=>c.value===null?null:i.value[c.value]||null);function d(m){if(!t.interactive||i.value.length===0)return;const h=m.currentTarget.getBoundingClientRect(),z=m.clientX-h.left;let _=0,y=1/0;i.value.forEach((C,M)=>{const R=Math.abs(C.x-z);R<y&&(y=R,_=M)}),c.value=_,p.value={x:i.value[_].x,y:i.value[_].y}}function b(){c.value=null}return(m,v)=>(f(),g("div",{class:A(I(pe)("relative inline-flex flex-col select-none",t.class))},[(f(),g("svg",{width:t.width,height:t.height,class:"overflow-visible",onMousemove:d,onMouseleave:b},[s("defs",null,[s("linearGradient",{id:r.value,x1:"0",y1:"0",x2:"0",y2:"1"},[s("stop",{offset:"0%","stop-color":t.color,"stop-opacity":"0.35"},null,8,Q1),s("stop",{offset:"100%","stop-color":t.color,"stop-opacity":"0.0"},null,8,J1)],8,Z1)]),t.fill?(f(),g("path",{key:0,d:a.value,fill:`url(#${r.value})`,class:"transition-opacity duration-300"},null,8,ey)):H("",!0),s("path",{d:l.value,fill:"none",stroke:t.color,"stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round",class:"transition-all duration-300"},null,8,ty),u.value?(f(),g("line",{key:1,x1:u.value.x,y1:o.top,x2:u.value.x,y2:t.height-o.bottom,stroke:t.color,"stroke-width":"1","stroke-dasharray":"2 2","stroke-opacity":"0.6"},null,8,ny)):H("",!0),u.value?(f(),g("g",ry,[s("circle",{cx:u.value.x,cy:u.value.y,r:"5",class:"fill-white dark:fill-zinc-950 transition-all duration-150",stroke:t.color,"stroke-width":"2.5"},null,8,oy),s("circle",{cx:u.value.x,cy:u.value.y,r:"8",fill:t.color,"fill-opacity":"0.25"},null,8,sy)])):H("",!0)],40,Y1)),u.value?(f(),g("div",{key:0,class:"pointer-events-none absolute -top-8 z-20 -translate-x-1/2 rounded-md border border-zinc-200/80 bg-white/95 px-2 py-0.5 font-mono text-xs font-bold text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:text-zinc-100 transition-all duration-75",style:ve({left:`${u.value.x}px`})},$(t.formatValue?t.formatValue(u.value.value):u.value.value),5)):H("",!0)],2))}}),iy={key:0,class:"mr-0.5 text-[0.85em] font-medium opacity-80"},ay={key:1,class:"ml-0.5 text-[0.85em] font-medium opacity-80"},nd=ae({__name:"AnimatedCounter",props:{value:{},duration:{default:1e3},decimals:{default:0},prefix:{default:""},suffix:{default:""},formatThousands:{type:Boolean,default:!0},trendColor:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=T(t.value),r=T("neutral");let o=null;function i(c){return c===1?1:1-Math.pow(2,-10*c)}function l(c,p){if(c===p){n.value=p;return}t.trendColor&&(r.value=p>c?"up":"down",o&&clearTimeout(o),o=setTimeout(()=>{r.value="neutral"},1500));const u=performance.now(),d=t.duration;function b(m){const v=m-u,h=Math.min(v/d,1),z=i(h);n.value=c+(p-c)*z,h<1?requestAnimationFrame(b):n.value=p}requestAnimationFrame(b)}it(()=>t.value,(c,p)=>{l(p??0,c)}),qe(()=>{l(0,t.value)});const a=ne(()=>{const c=n.value.toFixed(t.decimals);if(!t.formatThousands)return c;const p=c.split(".");return p[0]=p[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),p.join(".")});return(c,p)=>(f(),g("span",{class:A(I(pe)("inline-flex items-baseline font-mono font-bold tracking-tight transition-colors duration-500",t.trendColor&&r.value==="up"&&"text-emerald-500 dark:text-emerald-400",t.trendColor&&r.value==="down"&&"text-rose-500 dark:text-rose-400",t.class))},[t.prefix?(f(),g("span",iy,$(t.prefix),1)):H("",!0),s("span",null,$(a.value),1),t.suffix?(f(),g("span",ay,$(t.suffix),1)):H("",!0)],2))}}),ly=["width","height"],cy=["id"],dy=["stop-color"],uy=["d","stroke-width"],py=["d","stroke","stroke-width","stroke-dasharray","stroke-dashoffset"],fy=["cx","cy","r","fill"],my=["cx","cy","r"],by=["d","stroke-width"],gy={class:"pointer-events-none absolute inset-0 flex flex-col items-center justify-center pt-3 text-center"},hy={class:"text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase"},xy={class:"flex items-baseline mt-0.5"},vy={class:"font-mono text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white"},yy={class:"ml-0.5 text-xs font-mono text-zinc-400 font-bold"},or=-120,ds=120,us=ae({__name:"RadialGauge",props:{value:{},size:{default:180},strokeWidth:{default:12},label:{default:""},unit:{default:"%"},min:{default:0},max:{default:100},step:{default:1},thresholds:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},class:{}},emits:["update:value","change"],setup(e,{emit:t}){const n=e,r=t,o=Wn(),i=ne(()=>`gauge-grad-${o}`),l=ne(()=>n.size/2),a=ne(()=>l.value-n.strokeWidth-6),c=ds-or;function p(ee,re,J,_e){const Z=(_e-90)*Math.PI/180;return{x:ee+J*Math.cos(Z),y:re+J*Math.sin(Z)}}function u(ee,re,J,_e,Z){const je=p(ee,re,J,_e),ze=p(ee,re,J,Z);return`M ${je.x} ${je.y} A ${J} ${J} 0 1 1 ${ze.x} ${ze.y}`}const d=ne(()=>u(l.value,l.value,a.value,or,ds)),b=ne(()=>c/360*2*Math.PI*a.value),m=ne(()=>{const ee=n.max-n.min;return ee<=0?0:(Math.min(Math.max(n.value,n.min),n.max)-n.min)/ee}),v=T(!1),h=T(m.value);let z=0;function _(ee){return ee>=1?1:1-Math.pow(2,-10*ee)}it(m,ee=>{if(cancelAnimationFrame(z),v.value){h.value=ee;return}const re=h.value,J=performance.now(),_e=700,Z=je=>{const ze=Math.min((je-J)/_e,1);h.value=re+(ee-re)*_(ze),ze<1&&(z=requestAnimationFrame(Z))};z=requestAnimationFrame(Z)}),Xe(()=>cancelAnimationFrame(z));const y=ne(()=>b.value-h.value*b.value),C=ne(()=>{if(!n.thresholds)return{stroke:"#3b82f6",text:"text-blue-500"};const ee=m.value*100;return ee>=90?{stroke:"#f43f5e",text:"text-rose-500"}:ee>=75?{stroke:"#f59e0b",text:"text-amber-500"}:{stroke:"#10b981",text:"text-emerald-500"}}),M=ne(()=>{const ee=or+h.value*c;return p(l.value,l.value,a.value,ee)}),R=T(null);let V=n.value;function O(ee){const re=n.min+Math.round((ee-n.min)/n.step)*n.step,J=Math.min(Math.max(re,n.min),n.max);return Math.round(J*1e6)/1e6}function F(ee){const re=O(ee);V=re,re!==n.value&&r("update:value",re)}function L(ee){const re=R.value.getBoundingClientRect(),J=re.width/n.size||1,_e=(ee.clientX-re.left)/J-l.value,Z=(ee.clientY-re.top)/J-l.value;return{distance:Math.hypot(_e,Z),angle:Math.atan2(_e,-Z)*180/Math.PI}}function oe(ee){let re;return ee<or||ee>ds?re=v.value?m.value>=.5?1:0:ee<0?0:1:re=(ee-or)/c,n.min+re*(n.max-n.min)}function be(ee){if(!n.draggable||!R.value)return;const{distance:re,angle:J}=L(ee);if(Math.abs(re-a.value)>n.strokeWidth/2+10)return;const _e=oe(J);v.value=!0,ee.currentTarget.setPointerCapture(ee.pointerId),F(_e)}function W(ee){v.value&&F(oe(L(ee).angle))}function ye(){v.value&&(v.value=!1,r("change",V))}function Me(ee){if(!n.draggable)return;const re=(n.max-n.min)/10;let J;switch(ee.key){case"ArrowRight":case"ArrowUp":J=n.value+n.step;break;case"ArrowLeft":case"ArrowDown":J=n.value-n.step;break;case"PageUp":J=n.value+re;break;case"PageDown":J=n.value-re;break;case"Home":J=n.min;break;case"End":J=n.max;break;default:return}ee.preventDefault(),F(J),r("change",V)}const Oe=ne(()=>n.draggable?{role:"slider",tabindex:0,"aria-label":n.label||void 0,"aria-valuemin":n.min,"aria-valuemax":n.max,"aria-valuenow":n.value,"aria-valuetext":`${Math.round(n.value)}${n.unit}`}:{});return(ee,re)=>(f(),g("div",{class:A(I(pe)("relative inline-flex flex-col items-center select-none",n.class))},[s("div",Ql(Oe.value,{class:["group relative outline-none",n.draggable&&"touch-none",v.value&&"cursor-grabbing"],style:{width:`${n.size}px`,height:`${n.size*.85}px`},onPointerdown:be,onPointermove:W,onPointerup:ye,onPointercancel:ye,onKeydown:Me}),[(f(),g("svg",{ref_key:"svgRef",ref:R,width:n.size,height:n.size,class:"overflow-visible"},[s("defs",null,[s("linearGradient",{id:i.value,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[re[0]||(re[0]=s("stop",{offset:"0%","stop-color":"#3b82f6"},null,-1)),re[1]||(re[1]=s("stop",{offset:"50%","stop-color":"#8b5cf6"},null,-1)),s("stop",{offset:"100%","stop-color":C.value.stroke},null,8,dy)],8,cy)]),s("path",{d:d.value,fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round",class:"text-zinc-200/80 dark:text-zinc-800"},null,8,uy),s("path",{d:d.value,fill:"none",stroke:`url(#${i.value})`,"stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-dasharray":b.value,"stroke-dashoffset":y.value},null,8,py),n.draggable?(f(),g("circle",{key:0,cx:M.value.x,cy:M.value.y,r:n.strokeWidth/2+5,fill:C.value.stroke,class:A(["transition-opacity duration-200 group-hover:opacity-25 group-focus-visible:opacity-25",v.value?"opacity-25":"opacity-0"])},null,10,fy)):H("",!0),n.draggable||h.value>.02?(f(),g("circle",{key:1,cx:M.value.x,cy:M.value.y,r:n.strokeWidth/2-1,fill:"white"},null,8,my)):H("",!0),n.draggable?(f(),g("path",{key:2,d:d.value,fill:"none",stroke:"transparent","stroke-width":n.strokeWidth+20,"stroke-linecap":"round",class:A(v.value?"cursor-grabbing":"cursor-grab")},null,10,by)):H("",!0)],8,ly)),s("div",gy,[s("span",hy,$(n.label),1),s("div",xy,[s("span",vy,$(Math.round(n.value)),1),s("span",yy,$(n.unit),1)])])],16)],2))}}),ky={class:"relative flex items-center justify-between"},wy=["onClick"],zy={key:1},_y={class:"mt-2.5 text-center"},Cy={key:0,class:"text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5 line-clamp-1 max-w-[100px]"},Sy=ae({__name:"ProgressSteps",props:{steps:{},currentStep:{default:1},clickable:{type:Boolean,default:!0},class:{}},emits:["update:currentStep","change"],setup(e,{emit:t}){const n=e,r=t;function o(l){n.clickable&&(r("update:currentStep",l),r("change",l))}const i=ne(()=>n.steps.length<=1?100:(n.currentStep-1)/(n.steps.length-1)*100);return(l,a)=>(f(),g("div",{class:A(I(pe)("w-full select-none",n.class))},[s("div",ky,[a[0]||(a[0]=s("div",{class:"absolute left-6 right-6 top-5 -translate-y-1/2 h-0.5 bg-zinc-200 dark:bg-zinc-800 pointer-events-none"},null,-1)),s("div",{class:"absolute left-6 top-5 -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none",style:ve({width:`calc(${i.value}% * ((100% - 48px) / 100))`})},null,4),(f(!0),g(ie,null,ke(n.steps,(c,p)=>(f(),g("div",{key:p,class:"relative z-10 flex flex-col items-center group cursor-pointer",onClick:u=>o(p+1)},[s("button",{type:"button",class:A(["flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] outline-none focus:outline-none ring-0",p+1<n.currentStep?"border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-500/20":p+1===n.currentStep?"border-blue-600 bg-white dark:bg-zinc-950 text-blue-600 dark:text-blue-400 ring-4 ring-blue-500/15 scale-110 shadow-lg shadow-blue-500/20":"border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900 text-zinc-400",n.clickable&&"hover:scale-105 active:scale-95"])},[p+1<n.currentStep?(f(),me(I(Pt),{key:0,class:"h-4 w-4 animate-scale-in"})):(f(),g("span",zy,$(p+1),1))],2),s("div",_y,[s("div",{class:A(["text-xs font-bold transition-colors duration-200",p+1<=n.currentStep?"text-zinc-900 dark:text-white":"text-zinc-400 dark:text-zinc-500"])},$(c.title),3),c.description?(f(),g("div",Cy,$(c.description),1)):H("",!0)])],8,wy))),128))])],2))}}),Iy=Ve(Sy,[["__scopeId","data-v-d1e278b7"]]),Ay={class:"min-w-[640px]"},My={class:"grid grid-cols-4 gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800"},$y={key:0,class:"absolute -top-3 right-4 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-md shadow-blue-500/20"},Py={class:"text-base font-bold text-zinc-900 dark:text-white"},Ty={class:"mt-2 flex items-baseline"},Ry={class:"font-mono text-2xl font-extrabold text-zinc-900 dark:text-white"},Ey={key:0,class:"ml-1 text-xs text-zinc-400"},Ly=["onClick"],Fy={class:"divide-y divide-zinc-100 dark:divide-zinc-800/60"},Dy={class:"px-2 text-xs font-medium text-zinc-700 dark:text-zinc-300"},Vy={key:0,class:"flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"},Oy={key:1,class:"flex h-6 w-6 items-center justify-center text-zinc-300 dark:text-zinc-600"},jy={key:2,class:"font-mono text-xs font-semibold text-zinc-800 dark:text-zinc-200"},By=ae({__name:"ComparisonMatrix",props:{plans:{},features:{},class:{}},emits:["selectPlan"],setup(e,{emit:t}){const n=e,r=t;return(o,i)=>(f(),g("div",{class:A(I(pe)("w-full overflow-x-auto select-none",n.class))},[s("div",Ay,[s("div",My,[i[0]||(i[0]=s("div",{class:"flex flex-col justify-end p-2"},[s("span",{class:"text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider"}," 方案特性对比 "),s("h3",{class:"mt-1 text-lg font-bold text-zinc-900 dark:text-white"}," 选择适合你的动效套件 ")],-1)),(f(!0),g(ie,null,ke(n.plans,l=>(f(),g("div",{key:l.id,class:A(["relative flex flex-col justify-between rounded-2xl p-5 transition-all duration-300",l.popular?"border-2 border-blue-600 bg-blue-50/50 dark:border-blue-500 dark:bg-blue-950/20 shadow-xl shadow-blue-500/10":"border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"])},[l.badge?(f(),g("div",$y,$(l.badge),1)):H("",!0),s("div",null,[s("h4",Py,$(l.name),1),s("div",Ty,[s("span",Ry,$(l.price),1),l.period?(f(),g("span",Ey," / "+$(l.period),1)):H("",!0)])]),s("button",{type:"button",onClick:a=>r("selectPlan",l.id),class:A(["mt-4 w-full rounded-xl py-2 text-xs font-bold transition-all duration-200 cursor-pointer outline-none focus:outline-none ring-0",l.popular?"bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]":"border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"])},$(l.ctaText||"立即选择"),11,Ly)],2))),128))]),s("div",Fy,[(f(!0),g(ie,null,ke(n.features,(l,a)=>(f(),g("div",{key:a,class:"grid grid-cols-4 gap-4 py-3.5 items-center hover:bg-zinc-50/80 dark:hover:bg-zinc-900/40 rounded-xl transition-colors"},[s("div",Dy,$(l.name),1),(f(!0),g(ie,null,ke(n.plans,c=>(f(),g("div",{key:c.id,class:"flex items-center justify-center text-center"},[l.values[c.id]===!0?(f(),g("div",Vy,[w(I(Pt),{class:"h-3.5 w-3.5 stroke-[3]"})])):l.values[c.id]===!1?(f(),g("div",Oy,[w(I(gc),{class:"h-3.5 w-3.5 stroke-[2]"})])):(f(),g("span",jy,$(l.values[c.id]),1))]))),128))]))),128))])])],2))}}),Ny={class:"flex items-center justify-between"},Hy={class:"text-xs font-semibold text-zinc-500 dark:text-zinc-400"},Gy={key:0,class:"flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 transition-colors group-hover:text-blue-500"},Uy={class:"mt-3 flex items-end justify-between gap-4"},qy={class:"text-2xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-3xl"},Wy={key:0,class:"mt-2 flex items-center gap-1.5"},Xy={class:"text-[11px] text-zinc-400"},Ky={key:0,class:"shrink-0 -mb-1"},Va=ae({__name:"StatCard",props:{title:{},value:{},prefix:{},suffix:{},decimals:{default:0},change:{},changePeriod:{default:"较上周期"},trendData:{},color:{default:"#3b82f6"},icon:{},class:{}},setup(e){const t=e,n=ne(()=>t.change===void 0?"none":t.change>0?"up":t.change<0?"down":"flat");return(r,o)=>(f(),g("div",{class:A(I(pe)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-950",t.class))},[s("div",Ny,[s("span",Hy,$(t.title),1),t.icon?(f(),g("div",Gy,[(f(),me(Qe(t.icon),{class:"h-4 w-4"}))])):H("",!0)]),s("div",Uy,[s("div",null,[s("div",qy,[w(nd,{value:t.value,decimals:t.decimals,prefix:t.prefix,suffix:t.suffix,duration:1200},null,8,["value","decimals","prefix","suffix"])]),t.change!==void 0?(f(),g("div",Wy,[s("span",{class:A(["inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold font-mono",n.value==="up"&&"bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",n.value==="down"&&"bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",n.value==="flat"&&"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])},[n.value==="up"?(f(),me(I(c0),{key:0,class:"h-3 w-3"})):n.value==="down"?(f(),me(I(l0),{key:1,class:"h-3 w-3"})):(f(),me(I(gc),{key:2,class:"h-3 w-3"})),s("span",null,$(t.change>0?`+${t.change}`:t.change)+"%",1)],2),s("span",Xy,$(t.changePeriod),1)])):H("",!0)]),t.trendData&&t.trendData.length>0?(f(),g("div",Ky,[w(js,{data:t.trendData,width:120,height:44,color:t.color,fill:!0,interactive:!1},null,8,["data","color"])])):H("",!0)])],2))}}),Yy={class:"relative flex items-center border-b border-zinc-200/80 px-4 py-3.5 dark:border-zinc-800/80"},Zy=["placeholder"],Qy={class:"max-h-80 overflow-y-auto p-2 scrollbar-thin"},Jy={key:0,class:"py-12 text-center text-xs text-zinc-400"},ek={key:1,class:"space-y-1"},tk=["onClick","onMouseenter"],nk={class:"flex items-center gap-3"},rk={class:"flex flex-col"},ok={class:"font-bold tracking-tight"},sk={class:"flex items-center gap-2"},ik=ae({__name:"CommandDialog",props:{modelValue:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},groups:{default:()=>[]},placeholder:{default:"键入指令或搜索动效组件 (Ctrl+K)..."},class:{}},emits:["update:modelValue","update:open","select"],setup(e,{emit:t}){const n=[{id:"popular",name:"快捷动作",items:[{id:"search-components",title:"搜索全量动效组件库",description:"快速过滤 58 款原子组件与交互块",icon:Vn,shortcut:"⌘F"},{id:"toggle-theme",title:"切换界面深浅色主题",description:"一键在明亮与暗黑模式之间切换",icon:Kp,shortcut:"⌘T"},{id:"copy-template",title:"复制当前组件单文件代码",description:"Zero-Config 单文件直接粘贴即用",icon:Re,shortcut:"⌘C"}]},{id:"navigation",name:"套件快速直达",items:[{id:"nav-tactile",title:"触觉反馈与原子操作套件",description:"包含 HoldToConfirm, ConfirmMorph 等 6 款组件",icon:un},{id:"nav-forms",title:"表单与高阶输入套件",description:"包含 ScrubInput, PasswordStrength 等 6 款组件",icon:vc},{id:"nav-cards",title:"光效边框与立体卡片套件",description:"包含 GlowingCard, GlassCard 等 6 款组件",icon:jt},{id:"nav-overlays",title:"浮层弹窗与交互覆盖套件",description:"包含 CommandDialog, ContextMenu 等 6 款组件",icon:n0}]},{id:"system",name:"项目文档",items:[{id:"view-docs",title:"浏览 Aura UI 设计规范文档",description:"阅读完整的微动缓动曲线与投影系统",icon:Np,shortcut:"⌘D"}]}],r=e,o=t,i=ne(()=>r.modelValue!==void 0?r.modelValue:r.open??!1),l=ne(()=>r.groups&&r.groups.length>0?r.groups:n),a=T(""),c=T(0),p=T(null),u=ne(()=>{const v=a.value.trim().toLowerCase(),h=[];return l.value.forEach(z=>{z.items.forEach(_=>{var R;const y=_.title.toLowerCase().includes(v),C=(R=_.description)==null?void 0:R.toLowerCase().includes(v),M=z.name.toLowerCase().includes(v);(!v||y||C||M)&&h.push({groupName:z.name,item:_})})}),h});function d(){o("update:modelValue",!1),o("update:open",!1),a.value="",c.value=0}function b(v){o("select",v),v.onSelect&&v.onSelect(),d()}function m(v){if(!i.value){(v.metaKey||v.ctrlKey)&&v.key.toLowerCase()==="k"&&(v.preventDefault(),o("update:modelValue",!0),o("update:open",!0));return}if(v.key==="Escape")v.preventDefault(),d();else if(v.key==="ArrowDown")v.preventDefault(),u.value.length>0&&(c.value=(c.value+1)%u.value.length);else if(v.key==="ArrowUp")v.preventDefault(),u.value.length>0&&(c.value=(c.value-1+u.value.length)%u.value.length);else if(v.key==="Enter"){v.preventDefault();const h=u.value[c.value];h&&b(h.item)}}return it(()=>i.value,v=>{v&&(c.value=0,setTimeout(()=>{var h;(h=p.value)==null||h.focus()},50))}),it(a,()=>{c.value=0}),qe(()=>{window.addEventListener("keydown",m)}),Xe(()=>{window.removeEventListener("keydown",m)}),(v,h)=>(f(),me(Js,{to:"body"},[w(at,{name:"cmd-fade"},{default:q(()=>[i.value?(f(),g("div",{key:0,class:"fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-black/40 backdrop-blur-sm",onClick:kt(d,["self"])},[s("div",{class:A(I(pe)("popover-shadow relative w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-2xl transition-all dark:border-zinc-800/90 dark:bg-zinc-900/95 shadow-2xl",r.class))},[s("div",Yy,[w(I(na),{class:"h-4 w-4 shrink-0 text-zinc-400 mr-3"}),$n(s("input",{ref_key:"inputRef",ref:p,"onUpdate:modelValue":h[0]||(h[0]=z=>a.value=z),type:"text",placeholder:r.placeholder,class:"h-6 w-full bg-transparent text-sm font-medium text-zinc-900 placeholder:text-zinc-400 outline-none dark:text-white"},null,8,Zy),[[Eo,a.value]]),a.value?(f(),g("button",{key:0,type:"button",onClick:h[1]||(h[1]=z=>a.value=""),class:"p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"},[w(I(Kn),{class:"h-3.5 w-3.5"})])):H("",!0),h[2]||(h[2]=s("kbd",{class:"ml-2 hidden sm:inline-flex h-5 items-center rounded border border-zinc-200 bg-zinc-100 px-1.5 font-mono text-[10px] text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"}," ESC ",-1))]),s("div",Qy,[u.value.length===0?(f(),g("div",Jy," 未找到匹配的指令或组件 ")):(f(),g("div",ek,[(f(!0),g(ie,null,ke(u.value,(z,_)=>(f(),g("button",{key:z.item.id,type:"button",onClick:y=>b(z.item),onMouseenter:y=>c.value=_,class:A(["group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs font-medium transition-colors cursor-pointer outline-none focus:outline-none ring-0",c.value===_?"bg-blue-600 text-white":"text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/70"])},[s("div",nk,[s("div",{class:A(["flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors",c.value===_?"bg-white/20 text-white":"bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"])},[(f(),me(Qe(z.item.icon||I(na)),{class:"h-3.5 w-3.5"}))],2),s("div",rk,[s("span",ok,$(z.item.title),1),z.item.description?(f(),g("span",{key:0,class:A(["text-[11px] line-clamp-1",c.value===_?"text-blue-100":"text-zinc-400"])},$(z.item.description),3)):H("",!0)])]),s("div",sk,[z.item.badge?(f(),g("span",{key:0,class:A(["rounded-md px-1.5 py-0.5 text-[10px] font-semibold",c.value===_?"bg-white/20 text-white":"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])},$(z.item.badge),3)):H("",!0),z.item.shortcut?(f(),g("kbd",{key:1,class:A(["font-mono text-[10px]",c.value===_?"text-white/80":"text-zinc-400"])},$(z.item.shortcut),3)):H("",!0)])],42,tk))),128))]))]),h[3]||(h[3]=s("div",{class:"flex items-center justify-between border-t border-zinc-200/80 px-4 py-2 text-[11px] text-zinc-400 dark:border-zinc-800/80"},[s("div",{class:"flex items-center gap-3"},[s("span",{class:"flex items-center gap-1"},[s("kbd",{class:"rounded border border-zinc-200 bg-zinc-100 px-1 font-mono text-[10px] dark:border-zinc-700 dark:bg-zinc-800"},"↑↓"),s("span",null,"导航")]),s("span",{class:"flex items-center gap-1"},[s("kbd",{class:"rounded border border-zinc-200 bg-zinc-100 px-1 font-mono text-[10px] dark:border-zinc-700 dark:bg-zinc-800"},"↵"),s("span",null,"选择")])]),s("span",null,"Spotlight 指令中心")],-1))],2)])):H("",!0)]),_:1})]))}}),ak=Ve(ik,[["__scopeId","data-v-b957169e"]]),lk={class:"flex items-center justify-between border-b border-zinc-200/80 px-6 py-4 dark:border-zinc-800/80"},ck={class:"text-base font-bold text-zinc-900 dark:text-white"},dk={key:0,class:"mt-0.5 text-xs text-zinc-500 dark:text-zinc-400"},uk={class:"flex-1 overflow-y-auto p-6 scrollbar-thin"},pk={key:0,class:"border-t border-zinc-200/80 bg-zinc-50/70 p-4 dark:border-zinc-800/80 dark:bg-zinc-950/70"},fk=ae({__name:"SlideOverDrawer",props:{modelValue:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},title:{default:"侧边抽屉面板"},description:{default:""},placement:{default:"right"},side:{default:void 0},width:{default:"max-w-md"},class:{}},emits:["update:modelValue","update:open","close"],setup(e,{emit:t}){const n=e,r=t,o=ne(()=>n.modelValue!==void 0?n.modelValue:n.open??!1),i=ne(()=>n.side||n.placement||"right");function l(){r("update:modelValue",!1),r("update:open",!1),r("close")}function a(c){o.value&&c.key==="Escape"&&(c.preventDefault(),l())}return it(()=>o.value,c=>{c?document.body.style.overflow="hidden":document.body.style.overflow=""}),qe(()=>{window.addEventListener("keydown",a)}),Xe(()=>{window.removeEventListener("keydown",a),document.body.style.overflow=""}),(c,p)=>(f(),me(Js,{to:"body"},[w(at,{name:"drawer-fade"},{default:q(()=>[o.value?(f(),g("div",{key:0,class:"fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm",onClick:kt(l,["self"])},[s("div",{class:A(["fixed inset-y-0 flex max-w-full",i.value==="right"?"right-0 pl-10":"left-0 pr-10"])},[w(at,{name:i.value==="right"?"drawer-slide-right":"drawer-slide-left"},{default:q(()=>[o.value?(f(),g("div",{key:0,class:A(I(pe)("w-screen flex flex-col border-zinc-200/80 bg-white/95 shadow-2xl backdrop-blur-2xl dark:border-zinc-800/80 dark:bg-zinc-900/95",i.value==="right"?"border-l":"border-r",n.width,n.class))},[s("div",lk,[s("div",null,[s("h3",ck,$(n.title),1),n.description?(f(),g("p",dk,$(n.description),1)):H("",!0)]),s("button",{type:"button",onClick:l,class:"rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer",title:"关闭面板 (Esc)"},[w(I(Kn),{class:"h-4 w-4"})])]),s("div",uk,[Ge(c.$slots,"default",{},void 0,!0)]),c.$slots.footer?(f(),g("div",pk,[Ge(c.$slots,"footer",{close:l},void 0,!0)])):H("",!0)],2)):H("",!0)]),_:3},8,["name"])],2)])):H("",!0)]),_:3})]))}}),mk=Ve(fk,[["__scopeId","data-v-cc220321"]]),bk=ae({__name:"FloatingPopover",props:{placement:{default:"bottom"},width:{default:"w-72"},arrow:{type:Boolean,default:!0},closeOnClickOutside:{type:Boolean,default:!0},class:{}},setup(e,{expose:t}){const n=e,r=T(!1),o=T(null);function i(){r.value=!r.value}function l(){r.value=!1}function a(c){n.closeOnClickOutside&&o.value&&!o.value.contains(c.target)&&l()}return qe(()=>{window.addEventListener("click",a)}),Xe(()=>{window.removeEventListener("click",a)}),t({open:()=>{r.value=!0},close:l,toggle:i}),(c,p)=>(f(),g("div",{ref_key:"containerRef",ref:o,class:"relative inline-flex"},[s("div",{onClick:kt(i,["stop"]),class:"inline-flex cursor-pointer"},[Ge(c.$slots,"trigger",{isOpen:r.value,toggle:i},void 0,!0)]),w(at,{name:"popover-spring"},{default:q(()=>[r.value?(f(),g("div",{key:0,class:A(I(pe)("aura-popover popover-shadow absolute z-50 rounded-2xl border border-zinc-200/90 bg-white/95 p-4 backdrop-blur-2xl dark:border-zinc-800/90 dark:bg-zinc-900/95",n.width,n.placement==="bottom"&&"top-full left-1/2 -translate-x-1/2 mt-2.5",n.placement==="top"&&"bottom-full left-1/2 -translate-x-1/2 mb-2.5",n.placement==="left"&&"right-full top-1/2 -translate-y-1/2 mr-2.5",n.placement==="right"&&"left-full top-1/2 -translate-y-1/2 ml-2.5",n.class)),onClick:p[0]||(p[0]=kt(()=>{},["stop"]))},[n.arrow?(f(),g("div",{key:0,class:A(["absolute h-2 w-2 rotate-45 border border-zinc-200/90 bg-white dark:border-zinc-800/90 dark:bg-zinc-900 pointer-events-none",n.placement==="bottom"&&"-top-1 left-1/2 -translate-x-1/2 border-b-0 border-r-0",n.placement==="top"&&"-bottom-1 left-1/2 -translate-x-1/2 border-t-0 border-l-0",n.placement==="left"&&"-right-1 top-1/2 -translate-y-1/2 border-b-0 border-l-0",n.placement==="right"&&"-left-1 top-1/2 -translate-y-1/2 border-t-0 border-r-0"])},null,2)):H("",!0),Ge(c.$slots,"default",{},void 0,!0)],2)):H("",!0)]),_:3})],512))}}),Oa=Ve(bk,[["__scopeId","data-v-656eab20"]]),gk={key:0,class:"my-1 border-t border-zinc-200/80 dark:border-zinc-800/80"},hk=["disabled","onClick"],xk={class:"flex items-center gap-2"},vk={key:0,class:"text-sm shrink-0"},yk={key:0,class:"ml-2 font-mono text-[10px] text-zinc-400"},kk=ae({__name:"ContextMenu",props:{items:{},class:{}},emits:["select"],setup(e,{emit:t}){const n=e,r=t,o=T(!1),i=T({x:0,y:0}),l=T(null);function a(d){d.preventDefault(),d.stopPropagation();const b=200,m=n.items.length*36;let v=d.clientX,h=d.clientY;v+b>window.innerWidth&&(v=window.innerWidth-b-12),h+m>window.innerHeight&&(h=window.innerHeight-m-12),i.value={x:v,y:h},o.value=!0}function c(d){d.disabled||d.separator||(r("select",d),d.onClick&&d.onClick(),o.value=!1)}function p(){o.value=!1}function u(d){l.value&&!l.value.contains(d.target)&&p()}return qe(()=>{window.addEventListener("click",u),window.addEventListener("scroll",p,!0)}),Xe(()=>{window.removeEventListener("click",u),window.removeEventListener("scroll",p,!0)}),(d,b)=>(f(),g("div",{onContextmenu:a,class:A(I(pe)("relative inline-block",n.class))},[Ge(d.$slots,"default",{},void 0,!0),(f(),me(Js,{to:"body"},[w(at,{name:"ctx-pop"},{default:q(()=>[o.value?(f(),g("div",{key:0,ref_key:"menuRef",ref:l,class:"popover-shadow fixed z-50 w-52 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 backdrop-blur-2xl dark:border-zinc-800/90 dark:bg-zinc-900/95 shadow-xl select-none",style:ve({left:`${i.value.x}px`,top:`${i.value.y}px`}),onClick:b[0]||(b[0]=kt(()=>{},["stop"]))},[(f(!0),g(ie,null,ke(n.items,m=>(f(),g("div",{key:m.id},[m.separator||m.type==="separator"?(f(),g("div",gk)):(f(),g("button",{key:1,type:"button",disabled:m.disabled,onClick:v=>c(m),class:A(["flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs font-medium transition-colors cursor-pointer outline-none focus:outline-none ring-0",m.disabled&&"opacity-40 pointer-events-none cursor-not-allowed",m.danger||m.destructive?"text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/40":"text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"])},[s("div",xk,[typeof m.icon=="string"?(f(),g("span",vk,$(m.icon),1)):m.icon?(f(),me(Qe(m.icon),{key:1,class:"h-3.5 w-3.5"})):H("",!0),s("span",null,$(m.label),1)]),m.shortcut?(f(),g("kbd",yk,$(m.shortcut),1)):H("",!0)],10,hk))]))),128))],4)):H("",!0)]),_:1})]))],34))}}),wk=Ve(kk,[["__scopeId","data-v-7c1ccc7c"]]),zk={class:"flex items-start gap-3"},_k={class:"flex flex-col"},Ck={class:"text-xs font-bold text-zinc-900 dark:text-white"},Sk={key:0,class:"mt-0.5 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400"},Ik=["onClick"],Ak=ae({__name:"ToastNotification",props:{toasts:{},position:{default:"bottom-right"},class:{}},emits:["dismiss"],setup(e,{emit:t}){const n=e,r=t,o={success:$s,error:Ms,warning:ii,info:Wp},i={success:"text-emerald-500 bg-emerald-500/10 border-emerald-500/20",error:"text-rose-500 bg-rose-500/10 border-rose-500/20",warning:"text-amber-500 bg-amber-500/10 border-amber-500/20",info:"text-blue-500 bg-blue-500/10 border-blue-500/20"};return(l,a)=>(f(),g("div",{class:A(I(pe)("pointer-events-none fixed z-50 flex flex-col gap-2.5 p-4 sm:p-6 select-none max-w-sm w-full",n.position==="bottom-right"&&"bottom-0 right-0",n.position==="bottom-center"&&"bottom-0 left-1/2 -translate-x-1/2 items-center",n.position==="top-right"&&"top-0 right-0",n.position==="top-center"&&"top-0 left-1/2 -translate-x-1/2 items-center",n.class))},[w(cc,{name:"toast-slide",tag:"div",class:"w-full flex flex-col gap-2.5"},{default:q(()=>[(f(!0),g(ie,null,ke(n.toasts,c=>(f(),g("div",{key:c.id,class:"popover-shadow pointer-events-auto relative flex w-full items-start justify-between gap-3 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 p-4 backdrop-blur-2xl dark:border-zinc-800/90 dark:bg-zinc-900/95 shadow-xl transition-all"},[s("div",zk,[s("div",{class:A(["flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border",i[c.type||"info"]])},[(f(),me(Qe(o[c.type||"info"]),{class:"h-4 w-4"}))],2),s("div",_k,[s("h5",Ck,$(c.title),1),c.description?(f(),g("p",Sk,$(c.description),1)):H("",!0)])]),s("button",{type:"button",onClick:p=>r("dismiss",c.id),class:"shrink-0 rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"},[w(I(Kn),{class:"h-3.5 w-3.5"})],8,Ik)]))),128))]),_:1})],2))}}),Mk=Ve(Ak,[["__scopeId","data-v-b93907ae"]]),$k=["disabled"],Pk={class:"py-0.5"},Tk={key:0,class:"h-px my-1 bg-neutral-100 dark:bg-neutral-800/80"},Rk={key:0,class:"px-2.5 py-1 text-[10px] font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 uppercase"},Ek={key:0,class:"h-px my-1 bg-neutral-100 dark:bg-neutral-800/80"},Lk=["onClick","disabled"],Fk={class:"flex items-center gap-2 truncate"},Dk={key:0,class:"w-3.5 h-3.5 flex items-center justify-center text-emerald-500"},Vk={key:0,class:"w-3.5 h-3.5",viewBox:"0 0 20 20",fill:"currentColor"},Ok={key:1,class:"w-3.5 h-3.5 flex items-center justify-center"},jk={key:0,class:"w-1.5 h-1.5 rounded-full bg-emerald-500"},Bk={key:2,class:"text-sm shrink-0"},Nk={class:"truncate"},Hk={key:0,class:"text-[10px] text-neutral-400 dark:text-neutral-500 font-mono tracking-tight shrink-0 pl-2"},Gk={key:0,class:"h-px my-1 bg-neutral-100 dark:bg-neutral-800/80"},Uk=["onClick","disabled"],qk={class:"flex items-center gap-2 truncate"},Wk={key:0,class:"text-sm shrink-0"},Xk={class:"truncate"},Kk={key:0,class:"text-[10px] text-neutral-400 dark:text-neutral-500 font-mono tracking-tight shrink-0 pl-2"},ja=ae({__name:"DropdownMenu",props:{items:{default:()=>[{id:"account",label:"Account",items:[{id:"profile",label:"My Profile",icon:"👤",shortcut:"⌘P"},{id:"settings",label:"Preferences",icon:"⚙️",shortcut:"⌘,"},{id:"notifications",label:"Notifications",icon:"🔔",type:"checkbox",checked:!0}]},{id:"view",label:"View Mode",items:[{id:"view-grid",label:"Grid View",type:"radio",value:"grid",checked:!0},{id:"view-list",label:"List View",type:"radio",value:"list",checked:!1}]},{id:"danger",items:[{id:"logout",label:"Sign Out",icon:"🚪",shortcut:"⇧⌘Q",destructive:!0}]}]},align:{default:"left"},triggerText:{default:"Options"},width:{default:"w-56"},disabled:{type:Boolean,default:!1}},emits:["select","toggle"],setup(e,{emit:t}){const n=e,r=t,o=T(!1),i=T(null),l=T(-1),a=ne(()=>{const v=[];return n.items.forEach(h=>{if("items"in h&&Array.isArray(h.items))h.items.forEach(z=>{z.type!=="separator"&&z.type!=="label"&&!z.disabled&&v.push(z)});else{const z=h;z.type!=="separator"&&z.type!=="label"&&!z.disabled&&v.push(z)}}),v}),c=()=>{n.disabled||(o.value=!o.value,r("toggle",o.value),o.value&&(l.value=-1))},p=()=>{o.value&&(o.value=!1,r("toggle",!1),l.value=-1)},u=v=>{v.disabled||(v.type==="checkbox"?v.checked=!v.checked:v.type==="radio"&&n.items.forEach(h=>{"items"in h&&Array.isArray(h.items)&&h.items.some(z=>z.id===v.id)&&h.items.forEach(z=>{z.type==="radio"&&(z.checked=z.id===v.id)})}),r("select",v),v.type!=="checkbox"&&v.type!=="radio"&&p())},d=v=>{if(!o.value){(v.key==="Enter"||v.key===" "||v.key==="ArrowDown")&&(v.preventDefault(),c());return}if(v.key==="Escape")v.preventDefault(),p();else if(v.key==="ArrowDown")v.preventDefault(),l.value=(l.value+1)%a.value.length;else if(v.key==="ArrowUp")v.preventDefault(),l.value=(l.value-1+a.value.length)%a.value.length;else if(v.key==="Enter"&&l.value>=0){v.preventDefault();const h=a.value[l.value];h&&u(h)}},b=v=>{i.value&&!i.value.contains(v.target)&&p()};qe(()=>{document.addEventListener("click",b)}),Xe(()=>{document.removeEventListener("click",b)});const m=ne(()=>n.align==="right"?"right-0 origin-top-right":n.align==="center"?"left-1/2 -translate-x-1/2 origin-top":"left-0 origin-top-left");return(v,h)=>(f(),g("div",{ref_key:"containerRef",ref:i,class:"relative inline-block text-left",onKeydown:d},[Ge(v.$slots,"trigger",{open:o.value,toggle:c},()=>[s("button",{type:"button",onClick:c,disabled:e.disabled,class:"inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg border border-neutral-200/80 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-200 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30"},[s("span",null,$(e.triggerText),1),(f(),g("svg",{class:A(["w-3.5 h-3.5 text-neutral-400 transition-transform duration-200",{"rotate-180":o.value}]),viewBox:"0 0 20 20",fill:"currentColor"},[...h[0]||(h[0]=[s("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"},null,-1)])],2))],8,$k)]),w(at,{"enter-active-class":"transition duration-150 ease-out","enter-from-class":"transform opacity-0 scale-95 -translate-y-1","enter-to-class":"transform opacity-100 scale-100 translate-y-0","leave-active-class":"transition duration-100 ease-in","leave-from-class":"transform opacity-100 scale-100 translate-y-0","leave-to-class":"transform opacity-0 scale-95 -translate-y-1"},{default:q(()=>[o.value?(f(),g("div",{key:0,class:A(["absolute z-50 mt-1.5 p-1 rounded-xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/90 shadow-xl dark:shadow-neutral-950/60 focus:outline-none select-none",[m.value,e.width]]),style:{"box-shadow":"0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.05)"}},[s("div",Pk,[(f(!0),g(ie,null,ke(e.items,(z,_)=>(f(),g(ie,{key:_},[_>0?(f(),g("div",Tk)):H("",!0),"items"in z&&Array.isArray(z.items)?(f(),g(ie,{key:1},[z.label?(f(),g("div",Rk,$(z.label),1)):H("",!0),(f(!0),g(ie,null,ke(z.items,y=>{var C;return f(),g(ie,{key:y.id},[y.type==="separator"?(f(),g("div",Ek)):(f(),g("button",{key:1,type:"button",onClick:M=>u(y),disabled:y.disabled,class:A(["w-full flex items-center justify-between gap-2 px-2.5 py-1.5 text-xs rounded-lg transition-colors group text-left font-normal",[y.disabled?"opacity-40 cursor-not-allowed":"cursor-pointer",y.destructive?"text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40":"text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80",((C=a.value[l.value])==null?void 0:C.id)===y.id?"bg-neutral-100 dark:bg-neutral-800":""]])},[s("div",Fk,[y.type==="checkbox"?(f(),g("span",Dk,[y.checked?(f(),g("svg",Vk,[...h[1]||(h[1]=[s("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule":"evenodd"},null,-1)])])):H("",!0)])):y.type==="radio"?(f(),g("span",Ok,[y.checked?(f(),g("span",jk)):H("",!0)])):H("",!0),y.icon?(f(),g("span",Bk,$(y.icon),1)):H("",!0),s("span",Nk,$(y.label),1)]),y.shortcut?(f(),g("span",Hk,$(y.shortcut),1)):H("",!0)],10,Lk))],64)}),128))],64)):(f(),g(ie,{key:2},[z.type==="separator"?(f(),g("div",Gk)):(f(),g("button",{key:1,type:"button",onClick:y=>u(z),disabled:z.disabled,class:A(["w-full flex items-center justify-between gap-2 px-2.5 py-1.5 text-xs rounded-lg transition-colors group text-left",[z.disabled?"opacity-40 cursor-not-allowed":"cursor-pointer",z.destructive?"text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40":"text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80"]])},[s("div",qk,[z.icon?(f(),g("span",Wk,$(z.icon),1)):H("",!0),s("span",Xk,$(z.label),1)]),z.shortcut?(f(),g("span",Kk,$(z.shortcut),1)):H("",!0)],10,Uk))],64))],64))),128))])],2)):H("",!0)]),_:1})],544))}}),Yk={class:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"},Zk={class:"flex flex-col md:flex-row gap-8"},Qk={class:"w-full md:w-64 shrink-0"},Jk={class:"sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-xs backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70"},ew={class:"mb-3 px-2 flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider"},tw={class:"rounded bg-blue-100 dark:bg-blue-950/80 px-1.5 py-0.2 text-[10px] text-blue-600 dark:text-blue-400 font-bold"},nw={class:"space-y-4"},rw={class:"flex items-center justify-between px-2 py-1 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"},ow={class:"flex items-center gap-1.5"},sw={class:"text-zinc-800 dark:text-zinc-200 font-bold"},iw={class:"rounded bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.2 text-[9px] font-mono text-zinc-500 font-bold"},aw={class:"space-y-0.5"},lw={class:"truncate"},cw={class:"mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 px-2"},dw={class:"flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100"},uw={class:"min-w-0 flex-1"},pw={class:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white mb-3 shadow-md shadow-blue-500/20"},fw={key:1,class:"w-full max-w-2xl"},mw={class:"flex h-full flex-col items-center justify-center p-6 text-center"},bw={key:5,class:"flex flex-col items-center gap-6 py-8"},gw={class:"text-center"},hw={class:"text-center mt-2"},xw={key:6,class:"flex flex-wrap items-center justify-center gap-4 py-8"},vw={class:"relative z-10 flex items-center justify-between"},yw={class:"relative z-10 flex flex-col items-center gap-3"},kw={class:"flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30"},ww={key:10,class:"grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-3xl py-6"},zw={class:"inline-flex items-baseline justify-center text-sky-500 dark:text-sky-400"},_w={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},Cw={class:"inline-flex items-baseline justify-center text-indigo-500 dark:text-indigo-400"},Sw={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},Iw={class:"inline-flex items-baseline justify-center text-emerald-500 dark:text-emerald-400"},Aw={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},Mw={key:12,class:"w-full"},$w={class:"relative z-10 text-center"},Pw={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400 mb-3"},Tw={class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/30 text-white"},Rw={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-sky-500"},Ew={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-emerald-500"},Lw={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-indigo-500"},Fw={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-amber-500"},Dw={class:"w-full max-w-xl h-72"},Vw={class:"flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white/80 p-1 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 shadow-xs"},Ow=["onClick"],jw={class:"w-full max-w-xl"},Bw={class:"w-full max-w-xl"},Nw={class:"w-full max-w-xl"},Hw={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-4 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},Gw={class:"mt-1 text-sm font-bold text-blue-600 dark:text-blue-400 font-mono"},Uw={class:"flex flex-wrap items-center justify-center gap-4"},qw={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},Ww={key:0,class:"text-xs text-zinc-400 italic"},Xw={key:1,class:"space-y-1"},Kw={class:"flex flex-wrap items-center justify-center gap-4"},Yw={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},Zw={key:0,class:"text-xs text-zinc-400 italic"},Qw={key:1,class:"space-y-1"},Jw={class:"flex flex-wrap items-center justify-center gap-8"},e2={class:"flex flex-col items-center gap-2"},t2={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},n2={class:"text-xs font-mono text-zinc-500 font-bold"},r2={class:"flex flex-col items-center gap-2"},o2={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},s2={class:"text-xs font-mono text-zinc-500 font-bold"},i2={class:"flex flex-col items-center gap-2"},a2={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},l2={class:"text-xs font-mono text-zinc-500 font-bold"},c2={class:"flex flex-wrap items-center justify-center gap-3"},d2={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2.5 text-xs font-mono text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},u2={class:"font-bold text-blue-600 dark:text-blue-400"},p2={class:"flex flex-wrap items-center justify-center gap-6"},f2={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},m2={class:"text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold"},b2={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},g2={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},h2={class:"flex flex-wrap items-center justify-center gap-4"},x2={class:"flex items-center justify-center p-4"},v2={class:"w-full max-w-sm"},y2={class:"w-full max-w-md"},k2={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},w2={class:"font-bold text-blue-600 dark:text-blue-400"},z2={class:"w-full max-w-sm"},_2={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},C2={class:"font-bold text-blue-600 dark:text-blue-400"},S2={class:"font-bold text-zinc-900 dark:text-white"},I2={class:"w-full max-w-md"},A2={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},M2={class:"font-bold text-blue-600 dark:text-blue-400"},$2={class:"w-full max-w-lg"},P2={class:"flex flex-col items-center gap-4"},T2={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},R2={class:"font-bold text-blue-600 dark:text-blue-400"},E2={class:"w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},L2={class:"w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},F2={class:"text-center"},D2={class:"mt-2 text-xs font-mono text-blue-600 dark:text-blue-400"},V2={class:"absolute bottom-8 right-10 z-20"},O2={class:"w-full flex justify-center"},j2={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},B2={class:"font-bold text-blue-600 dark:text-blue-400"},N2={class:"w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-center gap-4"},H2={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},G2={class:"font-bold text-blue-600 dark:text-blue-400"},U2={class:"flex items-center gap-8"},q2={class:"flex items-center gap-3"},W2={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},X2={class:"font-bold text-blue-600 dark:text-blue-400"},K2={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},Y2={class:"flex items-start gap-3.5"},Z2={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400"},Q2={class:"flex items-start gap-3.5"},J2={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400"},e5={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl relative z-10"},t5={class:"flex items-start gap-3.5"},n5={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/40 text-blue-600 dark:bg-white/10 dark:text-blue-400 shadow-xs"},r5={class:"flex items-start gap-3.5"},o5={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/40 text-purple-600 dark:bg-white/10 dark:text-purple-400 shadow-xs"},s5={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},i5={class:"flex items-start gap-3.5"},a5={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400"},l5={class:"flex items-start gap-3.5"},c5={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400"},d5={class:"w-full max-w-sm flex justify-center"},u5={class:"flex flex-col items-center text-center p-2 [transform-style:preserve-3d]"},p5={class:"flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 [transform:translateZ(40px)]"},f5={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},m5={class:"font-bold text-blue-600 dark:text-blue-400"},b5={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},g5={class:"flex items-start gap-3.5"},h5={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400"},x5={class:"flex items-start gap-3.5"},v5={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"},y5={class:"flex flex-wrap items-center justify-center gap-8"},k5={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-start gap-3"},w5={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-start gap-3"},z5={class:"flex flex-col items-center gap-3"},_5={class:"text-4xl sm:text-5xl font-black"},C5={class:"flex items-center gap-3"},S5={class:"flex flex-wrap items-center justify-center gap-10"},I5={class:"flex items-center gap-3"},A5={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},M5={class:"font-bold text-blue-600 dark:text-blue-400"},$5={class:"w-full max-w-2xl rounded-2xl border border-zinc-200/80 bg-white/80 p-8 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},P5={class:"flex items-center gap-3"},T5=["disabled"],R5={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},E5={class:"font-bold text-blue-600 dark:text-blue-400"},L5=["disabled"],F5={class:"w-full max-w-3xl rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},D5={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},V5={class:"font-bold text-blue-600 dark:text-blue-400"},O5={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},j5={class:"flex items-center gap-3"},B5={class:"flex items-center justify-end gap-2 w-full"},N5=["onClick"],H5=["onClick"],G5={class:"flex flex-wrap items-center justify-center gap-6"},U5={class:"w-full max-w-lg"},q5={class:"flex flex-wrap items-center justify-center gap-3"},W5={class:"flex items-center gap-6"},X5={class:"px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 text-xs font-mono text-zinc-600 dark:text-zinc-300"},K5=ae({__name:"DocsView",setup(e){const t=T(null),n=T(null),r=T(null),o=T(null),i=Df(),l=ne(()=>i.params.id||"border-beam"),a=ne(()=>pn.find(Ke=>Ke.id===l.value)||pn[0]);function c(Ke){switch(Ke){case"forms-inputs":return vc;case"tactile-actions":return un;case"ai-native":return Fn;case"interactive-nav":return Vn;case"space-3d":return gr;case"borders-cards":return jt;case"kinetic-typography":return Re;default:return Re}}function p(Ke){return pn.filter(x=>x.suiteId===Ke)}const u=["OpenAI","Anthropic","Google","NVIDIA","DeepSeek","Vercel"],d=[{id:"home",label:"首页概览",icon:bc},{id:"explore",label:"模型广场",icon:Vn},{id:"agent",label:"AI 智能体",icon:Re},{id:"files",label:"知识库",icon:Gp},{id:"notice",label:"消息通知",icon:Vp},{id:"settings",label:"偏好设置",icon:t0}],b=T("thinking"),m={thinking:"正在多模态解构视觉空间坐标与贝塞尔插值参数...",running:"并行编译并打包 Production Motion Primitives...",tool_call:"调用 Playwright 真实无头浏览器验证 60fps 动效性能...",success:"全套 28 项动效原子组件按 6 大主题套件落地完成！",error:"检测到底层渲染管道异常，正在启动自愈补偿重试..."},v=T(""),h=T(!1),z=T("deepseek-r1");function _(Ke){h.value=!0,setTimeout(()=>{h.value=!1,v.value=""},2200)}const y=T("preview"),C=[{id:"preview",label:"实时预览",icon:Re},{id:"code",label:"组件源码",icon:br,badge:"SFC"},{id:"api",label:"API 文档",icon:lr},{id:"suites",label:"主题矩阵",icon:jt,badge:"6 大套件"}],M=T([]);function R(){M.value.unshift(`[${new Date().toLocaleTimeString()}] 触发长按蓄力物理确认：危险操作已执行！`),M.value.length>3&&M.value.pop()}const V=T([]);function O(){V.value.unshift(`[${new Date().toLocaleTimeString()}] 就地确认执行成功：数据库缓存集群已清空`),V.value.length>3&&V.value.pop()}const F=T(!1),L=T(!1),oe=T(!1),be=T(!0),W=T(!1),ye=T(42),Me=T("尚未触发操作");function Oe(){Me.value=`[${new Date().toLocaleTimeString()}] 执行主操作：生产环境立即发布完成！`}function ee(Ke){Me.value=`[${new Date().toLocaleTimeString()}] 执行伴随动作：${Ke.label}`}const re=T(480),J=T(16),_e=T(85),Z=T("Aura$2026"),je=T(6800),ze=T("CNY"),lt=T("13800138000"),Ue=T("CN"),$e=T(["Vue 3.5","TailwindCSS","Motion UI","TypeScript"]),Ie=T("嗨 @Aura Assistant ，请审查关于全套动效原子组件库的重构方案！"),j=T("preview"),se=[{id:"preview",label:"实时渲染",icon:Re},{id:"code",label:"SFC 源码",icon:br,badge:"Vue"},{id:"docs",label:"API 文档",icon:lr},{id:"disabled",label:"锁定",disabled:!0}],G=[{label:"智能云控制台"},{label:"亚太东北节点 (东京)"},{label:"Kubernetes 集群"},{label:"核心 Pod 拓扑"},{label:"Aura UI 动效服务"}],fe=T("未触发操作"),k=[{id:"bot",label:"呼起智能体 Agent",icon:Fn,color:"bg-purple-600",onClick:()=>{fe.value="已呼起 AI 智能体"}},{id:"sparkles",label:"生成动效代码",icon:Re,color:"bg-blue-600",onClick:()=>{fe.value="已生成动效代码"}},{id:"rocket",label:"全量编译部署",icon:Qr,color:"bg-emerald-600",onClick:()=>{fe.value="已执行全量编译部署"}}],S=[{id:"solutions",label:"解决方案",children:[{title:"AI Agent 交互引擎",desc:"模拟 Token 打字机与 R1 思考链路手风琴",icon:Fn,badge:"爆款"},{title:"全景 3D 纵深矩阵",desc:"同心轨道公转、极光天灯与赛博复古网格",icon:gr},{title:"流光卡片便当盒",desc:"无缝跑马流光边框与聚光灯 Bento 卡片",icon:jt}]},{id:"developers",label:"开发者生态",children:[{title:"Zero-Config 单文件",desc:"代码即用，单文件内聚无需配置 tailwind",icon:br},{title:"TypeScript 完备",desc:"全量 Props、事件与插槽类型安全",icon:lr}]}],P=T("未选择"),E=T(3),D=T(72);function B(){D.value=(D.value+15)%105}const U=[{id:1,title:"物理动效原子引擎",description:"专为 Vue 3 构建的高性能单文件动效，60fps 满帧运行，零黑盒依赖。",tag:"Core",author:"Aura Team"},{id:2,title:"零配置单文件拷贝",description:"无黑盒依赖，复制即用，代码全由你掌控，极简可扩展。",tag:"Architecture",author:"Aura Architect"},{id:3,title:"全套对标 Arc UI",description:"包含 182 款组件与 109 款 Blocks 全套重构，设计规范一体化。",tag:"Ecosystem",author:"DeepMind"},{id:4,title:"高折射率物理质感",description:"亚克力磨砂、三维陀螺仪视差与全息反光遮罩，极致视觉体验。",tag:"Surfaces",author:"Aura UI"}],K=T("暂无划卡记录");function Y(Ke,x){K.value=`已向 ${x==="left"?"← 左":"右 →"} 划走：${Ke.title}`}const N=T([14,22,18,32,28,45,40,58,62,70,68,88]),ge=T(128450);function te(Ke){ge.value=Math.max(0,ge.value+Ke)}const ue=T(68),he=T(2),Se=[{title:"环境检测",description:"Node/pnpm 就绪"},{title:"原子组件",description:"SFC 零配置拷贝"},{title:"工程构建",description:"vue-tsc 0 报错"},{title:"华为云部署",description:"Nginx 80 端口"}],De=[{id:"free",name:"社区开源版",price:"¥0",ctaText:"免费克隆"},{id:"pro",name:"独立专业版",price:"¥199",period:"终身",popular:!0,badge:"最畅销",ctaText:"立即解锁"},{id:"team",name:"企业旗舰版",price:"¥699",period:"终身",ctaText:"企业采购"}],Ee=[{name:"182 款动效原子组件 (Zero-Config SFC)",values:{free:"核心 52 款",pro:!0,team:!0}},{name:"109 款高阶业务应用 Blocks 组合",values:{free:!1,pro:!0,team:!0}},{name:"Figma 原生高保真设计规范源文件",values:{free:!1,pro:!0,team:!0}},{name:"企业级独立技术支持与华为云专属优化",values:{free:!1,pro:"邮件支持",team:"7×24h 专属"}}],We=T("未选择套餐"),Je=[28,36,32,48,44,62,70,89],yt=T(!1),pt=T(!1),qt=T("right"),Er=[{id:"cut",label:"剪切项目",shortcut:"⌘X",icon:"✂️"},{id:"copy",label:"复制配置",shortcut:"⌘C",icon:"📋"},{id:"paste",label:"粘贴属性",shortcut:"⌘V",icon:"📌"},{id:"sep1",type:"separator"},{id:"share",label:"分享组件链接",shortcut:"⌘S",icon:"🔗"},{id:"sep2",type:"separator"},{id:"delete",label:"移入回收站",shortcut:"⌫",icon:"🗑️",destructive:!0}],nt=T([{id:"init-toast",type:"success",title:"系统就绪",description:"Aura UI 弹窗与浮层套件加载完成。",duration:4e3}]);function ft(Ke){const x={success:"操作执行成功",error:"网络请求超时",warning:"内存占用较高",info:"发现新的组件更新"},Fo={success:"配置文件已同步至云端存储中心。",error:"请检查网络连接或稍后重试。",warning:"当前工作区有超过 50 个激活的微动组件。",info:"Aura UI 现已支持 58 款工业级动效组件。"};nt.value.push({id:String(Date.now()),type:Ke,title:x[Ke],description:Fo[Ke],duration:3500})}function Lr(Ke){nt.value=nt.value.filter(x=>x.id!==Ke)}const Yn=T("暂无选择");function pi(Ke){Yn.value=`选中: ${Ke.label} (${Ke.id})`}return(Ke,x)=>{const Fo=Tr("router-link");return f(),g("div",Yk,[s("div",Zk,[s("aside",Qk,[s("div",Jk,[s("div",ew,[x[46]||(x[46]=s("span",null,"主题套件矩阵",-1)),s("span",tw,$(I(Ts).length)+" 大套件 · "+$(I(pn).length)+" 组件 ",1)]),s("div",nw,[(f(!0),g(ie,null,ke(I(Ts),Q=>(f(),g("div",{key:Q.id,class:"space-y-1"},[s("div",rw,[s("div",ow,[(f(),me(Qe(c(Q.id)),{class:"h-3.5 w-3.5 text-blue-500"})),s("span",sw,$(Q.name),1)]),s("span",iw,$(p(Q.id).length),1)]),s("nav",aw,[(f(!0),g(ie,null,ke(p(Q.id),Wt=>(f(),me(Fo,{key:Wt.id,to:`/docs/${Wt.id}`,class:A(["flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium transition-colors",l.value===Wt.id?"bg-blue-600 text-white font-semibold shadow-xs":"text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"])},{default:q(()=>[s("span",lw,$(Wt.name),1),s("span",{class:A(["text-[9px] rounded px-1.5 py-0.2 shrink-0 ml-1",l.value===Wt.id?"bg-blue-700/80 text-blue-100":"bg-zinc-100 dark:bg-zinc-900 text-zinc-400"])},$(Wt.category),3)]),_:2},1032,["to","class"]))),128))])]))),128))]),s("div",cw,[s("div",dw,[w(I(lr),{class:"h-3.5 w-3.5 text-blue-500"}),x[47]||(x[47]=s("span",null,"基础依赖安装",-1))]),x[48]||(x[48]=s("p",{class:"mt-1 text-[11px] text-zinc-400"},"组件依赖轻量样式与工具库：",-1)),x[49]||(x[49]=s("div",{class:"mt-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-300 break-all select-all"}," npm i @vueuse/core clsx tailwind-merge ",-1))])])]),s("main",uw,[(f(),me(Vg,{key:a.value.id,title:a.value.title,description:a.value.description,"component-code":a.value.componentCode,"usage-code":a.value.usageCode,"component-filename":a.value.componentFilename,"props-list":a.value.propsList},{default:q(({isDark:Q})=>{var Wt;return[a.value.id==="border-beam"?(f(),g("div",{key:0,class:A(["relative flex h-64 w-80 flex-col items-center justify-center rounded-2xl border p-6 shadow-md transition-colors duration-200",Q?"border-zinc-800 bg-zinc-900 text-zinc-100 shadow-black/40":"border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/50"])},[s("div",pw,[w(I(Re),{class:"h-6 w-6"})]),s("h4",{class:A(["text-lg font-bold",Q?"text-white":"text-zinc-900"])}," Border Beam Demo ",2),s("p",{class:A(["mt-1 text-center text-xs",Q?"text-zinc-400":"text-zinc-500"])}," 流光平滑环绕圆角容器边缘 ",2),w(Vs,{size:180,duration:8,"color-from":"#38bdf8","color-to":"#a855f7"})],2)):a.value.id==="bento-grid"?(f(),g("div",fw,[w(Kc,{class:"auto-rows-[16rem]"},{default:q(()=>[w(bt,{name:"AI 向量引擎",description:"毫秒级生成多模态视觉理解",cta:"了解详情",href:"#",class:A(Q?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900")},{icon:q(()=>[w(I(Zo),{class:"h-5 w-5 text-blue-500"})]),_:1},8,["class"]),w(bt,{name:"全球边缘节点加速",description:"降低网络抖动，就近命中就近计算",class:A(["md:col-span-2",Q?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900"]),cta:"查看分布",href:"#"},{icon:q(()=>[w(I(un),{class:"h-5 w-5 text-amber-500"})]),_:1},8,["class"])]),_:2},1024)])):a.value.id==="interactive-particles"?(f(),g("div",{key:2,class:A(["relative h-[360px] w-full rounded-2xl border overflow-hidden transition-colors duration-200",Q?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[w(Zc,{quantity:60,"mouse-radius":120,"connect-lines":!0,color:Q?"255, 255, 255":"59, 130, 246"},{default:q(()=>[s("div",mw,[s("h3",{class:A(["text-2xl font-bold tracking-tight",Q?"text-white":"text-zinc-900"])}," 移动光标体验引力感应 ",2),s("p",{class:A(["mt-2 text-xs",Q?"text-zinc-400":"text-zinc-500"])}," Canvas 2D 60fps 满帧运行，动态引力排斥与光效连线 ",2)])]),_:2},1032,["color"])],2)):a.value.id==="retro-grid"?(f(),g("div",{key:3,class:A(["relative flex h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",Q?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[s("span",{class:A(["z-10 text-4xl font-extrabold tracking-tighter",Q?"text-white":"text-zinc-900"])}," Retro Synthwave Grid ",2),w(Os,{angle:65,"dark-line-color":"#334155","light-line-color":"#cbd5e1"})],2)):a.value.id==="dot-pattern"?(f(),g("div",{key:4,class:A(["relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border p-8 transition-colors duration-200",Q?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[s("p",{class:A(["z-10 text-xl font-bold",Q?"text-white":"text-zinc-900"])}," SVG 矢量波点底纹 (含发光聚光灯) ",2),w(Yc,{width:18,height:18,cr:1.2,glow:!0})],2)):a.value.id==="shiny-text"?(f(),g("div",bw,[s("div",{class:A(["rounded-full border px-5 py-2 text-xs font-medium shadow-sm transition-colors",Q?"border-zinc-800 bg-zinc-900/90 text-zinc-300":"border-zinc-200 bg-zinc-100 text-zinc-700"])},[x[50]||(x[50]=Ae(" ✨ ",-1)),w(vr,{text:"Aura UI v1.0 全新微光发布",duration:2.5})],2),s("div",gw,[w(vr,{text:"Next-Gen AI Intelligence",class:"text-4xl sm:text-5xl font-black tracking-tight",duration:2.5}),s("p",{class:A(["mt-2 text-xs sm:text-sm",Q?"text-zinc-500":"text-zinc-400"])}," 持续流淌的宽幅金属微光，肉眼清晰可观赏，绝无突兀停滞 ",2)]),s("div",hw,[w(vr,{text:"Cyberpunk Motion Primitives",variant:"cyber",class:"text-3xl sm:text-4xl font-extrabold tracking-tight",duration:3}),s("p",{class:A(["mt-1 text-xs",Q?"text-zinc-500":"text-zinc-400"])}," 赛博霓虹蓝紫粒子流光，高频荡漾 ",2)])])):a.value.id==="shimmer-button"?(f(),g("div",xw,[w(xr,{"shimmer-color":"#38bdf8"},{default:q(()=>[x[51]||(x[51]=s("span",null,"立即获取代码",-1)),w(I(mr),{class:"h-4 w-4"})]),_:1}),w(xr,{"shimmer-color":"#ec4899","shimmer-duration":"3.5s"},{default:q(()=>[...x[52]||(x[52]=[s("span",null,"Pink Shimmer",-1)])]),_:1})])):a.value.id==="marquee"?(f(),g("div",{key:7,class:A(["relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border py-6 transition-colors duration-200",Q?"border-zinc-800 bg-black/60":"border-zinc-200 bg-zinc-50/80"])},[w(Jr,{duration:20,"pause-on-hover":!0},{default:q(()=>[(f(),g(ie,null,ke(u,X=>s("div",{key:X,class:A(["flex h-12 items-center justify-center rounded-xl border px-6 font-bold text-xs shadow-xs transition-colors duration-200",Q?"border-zinc-800 bg-zinc-900 text-zinc-200":"border-zinc-200 bg-white text-zinc-800"])},$(X),3)),64))]),_:2},1024),s("div",{class:A(["pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r",Q?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2),s("div",{class:A(["pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l",Q?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2)],2)):a.value.id==="meteors"?(f(),g("div",{key:8,class:A(["relative flex h-80 w-full max-w-lg flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-2xl transition-colors duration-200",Q?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-slate-900 text-white"])},[w(Qc,{number:30}),s("div",vw,[x[53]||(x[53]=s("span",{class:"rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20"}," Meteor Shower ",-1)),w(I(Re),{class:"h-5 w-5 text-sky-400"})]),x[54]||(x[54]=s("div",{class:"relative z-10 space-y-2"},[s("h3",{class:"text-3xl font-black tracking-tight text-white"}," 赛博深空流星雨 "),s("p",{class:"text-xs text-zinc-400 leading-relaxed"}," 流星带有 50px 渐变光尾与随机延迟，全硬件加速流畅穿梭，卡片与 Hero 背景的氛围杀器。 ")],-1))],2)):a.value.id==="ripple"?(f(),g("div",{key:9,class:A(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",Q?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[w(Jc,{"main-circle-size":160,"num-circles":7}),s("div",yw,[s("div",kw,[w(I(mo),{class:"h-7 w-7"})]),x[55]||(x[55]=s("div",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-mono text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300"}," AI 智能语音拾音中... ",-1))])],2)):a.value.id==="number-ticker"?(f(),g("div",ww,[s("div",{class:A(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",Q?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[s("div",zw,[s("span",_w,[w(eo,{value:99.99,"decimal-places":2})]),x[56]||(x[56]=s("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"%",-1))]),x[57]||(x[57]=s("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"SLA 生产高可用性",-1))],2),s("div",{class:A(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",Q?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[s("div",Cw,[s("span",Sw,[w(eo,{value:1e7})]),x[58]||(x[58]=s("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"+",-1))]),x[59]||(x[59]=s("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"每日处理 Token 数量",-1))],2),s("div",{class:A(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",Q?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[s("div",Iw,[s("span",Aw,[w(eo,{value:12})]),x[60]||(x[60]=s("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"ms",-1))]),x[61]||(x[61]=s("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"端到端流式推理延迟",-1))],2)])):a.value.id==="animated-beam"?(f(),g("div",{key:11,class:A(["relative flex h-72 w-full max-w-xl items-center justify-between px-12 rounded-2xl border transition-colors duration-200",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"]),ref_key:"beamContainerRef",ref:t},[s("div",{ref_key:"beamUserRef",ref:n,class:A(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",Q?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[w(I(kc),{class:"h-6 w-6 text-blue-500"})],2),s("div",{ref_key:"beamAiRef",ref:r,class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/40"},[w(I(Re),{class:"h-8 w-8"})],512),s("div",{ref_key:"beamDbRef",ref:o,class:A(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",Q?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[w(I(Ps),{class:"h-6 w-6 text-indigo-500"})],2),w(go,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.4},null,8,["container-ref","from-ref","to-ref"]),w(go,{"container-ref":t.value,"from-ref":r.value,"to-ref":o.value,duration:2.4,delay:.6},null,8,["container-ref","from-ref","to-ref"])],2)):a.value.id==="lamp-effect"?(f(),g("div",Mw,[w(ed,{class:"min-h-[420px]"},{default:q(()=>[...x[62]||(x[62]=[s("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-5xl font-black tracking-tight text-transparent"}," Next-Gen AI Platform ",-1),s("p",{class:"mt-3 max-w-md text-xs sm:text-sm text-slate-400"}," 双向极光天灯破晓而下，为旗舰级 AI 与 SaaS 官网赋予大模型发布会视觉。 ",-1)])]),_:1})])):a.value.id==="flickering-grid"?(f(),g("div",{key:13,class:A(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border p-6 transition-colors duration-200",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[w(td,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),s("div",$w,[s("div",Pw,[w(I(As),{class:"h-3.5 w-3.5"}),x[63]||(x[63]=s("span",null,"Canvas 2D 智能矩阵",-1))]),s("h3",{class:A(["text-3xl font-black tracking-tight",Q?"text-white":"text-zinc-900"])}," 呼吸噪波微光网格 ",2),s("p",{class:A(["mt-2 text-xs font-mono",Q?"text-zinc-400":"text-zinc-500"])}," 微型粒子矩阵异步平滑呼吸闪烁，零 CPU 占用，极客感拉满 ",2)])],2)):a.value.id==="dock"?(f(),g("div",{key:14,class:A(["relative flex h-80 w-full items-end justify-center rounded-2xl border p-8 transition-colors duration-200",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[x[64]||(x[64]=s("div",{class:"absolute top-8 text-center"},[s("span",{class:"text-xs font-mono text-zinc-400"},"将鼠标在下方图标栏滑动，体验余弦高斯物理平滑放大与跟随 Tooltip")],-1)),w(Ng,{items:d,"icon-size":44,"icon-magnification":68,"icon-distance":130})],2)):a.value.id==="orbit-logos"?(f(),g("div",{key:15,class:A(["relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Tw,[w(I(Re),{class:"h-8 w-8"})]),w(Wr,{radius:75,duration:16},{default:q(()=>[s("div",Rw,[w(I(Zo),{class:"h-4.5 w-4.5"})])]),_:1}),w(Wr,{radius:75,duration:16,delay:8},{default:q(()=>[s("div",Ew,[w(I(un),{class:"h-4.5 w-4.5"})])]),_:1}),w(Wr,{radius:135,duration:24,reverse:!0},{default:q(()=>[s("div",Lw,[w(I(gr),{class:"h-5 w-5"})])]),_:1}),w(Wr,{radius:135,duration:24,delay:12,reverse:!0},{default:q(()=>[s("div",Fw,[w(I(Ps),{class:"h-5 w-5"})])]),_:1})],2)):a.value.id==="image-compare"?(f(),g("div",{key:16,class:A(["flex flex-col items-center justify-center w-full p-4 rounded-2xl border transition-colors duration-200",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Dw,[w(Jg,{"before-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=70&sat=-100","after-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=90","before-label":"原始黑白 (Raw)","after-label":"AI 智能全彩修复 (4K HDR)","initial-position":50,class:"h-full w-full shadow-2xl"})]),x[65]||(x[65]=s("p",{class:"mt-3 text-xs font-mono text-zinc-400"}," 按住中央手柄左右拖拽，体验基于 clip-path 视口裁切的双图前后对比 ",-1))],2)):a.value.id==="agent-status"?(f(),g("div",{key:17,class:A(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Vw,[(f(),g(ie,null,ke(["thinking","running","tool_call","success","error"],X=>s("button",{key:X,onClick:Fr=>b.value=X,class:A(["rounded-lg px-3 py-1.5 text-xs font-semibold transition-all capitalize",b.value===X?"bg-blue-600 text-white shadow-xs":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},$(X),11,Ow)),64))]),w(hh,{status:b.value,"agent-name":"DeepSeek R1 / Aura Reasoning","current-task":m[b.value]},null,8,["status","current-task"]),x[66]||(x[66]=s("p",{class:"text-xs font-mono text-zinc-400"}," 点击上方状态快速体验脉冲光环与徽标切换；点击卡片任意位置展开执行轨迹清单 ",-1))],2)):a.value.id==="typewriter-terminal"?(f(),g("div",{key:18,class:A(["flex flex-col items-center justify-center w-full p-6 rounded-2xl border transition-colors duration-200",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",jw,[w(Th,{title:"zsh - aura-orchestrator:~ (80x24)","typing-speed":32,loop:!0})])],2)):a.value.id==="prompt-input"?(f(),g("div",{key:19,class:A(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Bw,[w(qh,{modelValue:v.value,"onUpdate:modelValue":x[0]||(x[0]=X=>v.value=X),loading:h.value,"selected-model":z.value,"onUpdate:selectedModel":x[1]||(x[1]=X=>z.value=X),placeholder:"向 Aura AI 提问、生成高阶动效代码，或输入 / 触发 Agent...",onSubmit:_,onStop:x[2]||(x[2]=X=>h.value=!1)},null,8,["modelValue","loading","selected-model"])]),x[67]||(x[67]=s("p",{class:"text-xs font-mono text-zinc-400"}," 点击输入框体验聚焦顶部流光与高亮光晕，支持 Enter 发送、模拟 2.2s 思考生成态 ",-1))],2)):a.value.id==="thought-accordion"?(f(),g("div",{key:20,class:A(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Nw,[w(nx,{duration:"思考用时 8.2 秒",status:"complete","default-open":!0})]),x[68]||(x[68]=s("p",{class:"text-xs font-mono text-zinc-400"}," 对标 DeepSeek R1 / o1 思考链折叠机制，点击标题栏手风琴折叠收起，支持一键复制推演链路 ",-1))],2)):a.value.id==="fluid-tabs"?(f(),g("div",{key:21,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[w(ox,{modelValue:y.value,"onUpdate:modelValue":x[3]||(x[3]=X=>y.value=X),tabs:C},null,8,["modelValue"]),s("div",Hw,[x[69]||(x[69]=s("div",{class:"text-xs font-mono text-zinc-500 dark:text-zinc-400"},"当前激活流体 Tab 项：",-1)),s("div",Gw,$(y.value),1)]),x[70]||(x[70]=s("p",{class:"text-xs font-mono text-zinc-400"}," 鼠标在 Tab 间移动感受 Ghost 悬停幽灵胶囊；点击体验物理 Spring 平滑吸附 ",-1))],2)):a.value.id==="hold-to-confirm"?(f(),g("div",{key:22,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Uw,[w(ss,{variant:"danger",label:"长按以销毁生产集群",holdingLabel:"危险！保持按住不放...",confirmedLabel:"集群销毁指令已执行！",duration:1200,onConfirm:R}),w(ss,{variant:"warning",label:"长按重置 API 密钥",holdingLabel:"按住 1 秒重置...",confirmedLabel:"密钥已重置完成！",duration:1e3,onConfirm:R}),w(ss,{variant:"primary",label:"长按以极速同步",holdingLabel:"保持以连接网关...",confirmedLabel:"多云同步完成！",duration:800,onConfirm:R})]),s("div",qw,[x[71]||(x[71]=s("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 操作监听回执 ",-1)),M.value.length===0?(f(),g("div",Ww," 按住上方任一按钮体验蓄力进度条，松手即取消，蓄满 100% 触发回执 ")):(f(),g("div",Xw,[(f(!0),g(ie,null,ke(M.value,(X,Fr)=>(f(),g("div",{key:Fr,class:"text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold"},$(X),1))),128))]))]),x[72]||(x[72]=s("p",{class:"text-xs font-mono text-zinc-400"}," 具备 requestAnimationFrame 60fps 动态插值填充、松手平滑阻尼回退与成功态自动形变复位 ",-1))],2)):a.value.id==="confirm-morph"?(f(),g("div",{key:23,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Kw,[w(is,{label:"彻底清空 Redis 缓存","confirm-text":"确认清空","cancel-text":"取消",variant:"danger",onConfirm:O}),w(is,{label:"回滚至昨日版本","confirm-text":"确认回滚","cancel-text":"再想想",variant:"warning",onConfirm:O}),w(is,{label:"切换主从节点","confirm-text":"立即切换","cancel-text":"取消",variant:"primary",onConfirm:O})]),s("div",Yw,[x[73]||(x[73]=s("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 就地形变二次确认回执 ",-1)),V.value.length===0?(f(),g("div",Zw," 点击上方按钮原地分裂为确认和取消操作，零弹窗干扰心流 ")):(f(),g("div",Qw,[(f(!0),g(ie,null,ke(V.value,(X,Fr)=>(f(),g("div",{key:Fr,class:"text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold"},$(X),1))),128))]))]),x[74]||(x[74]=s("p",{class:"text-xs font-mono text-zinc-400"}," 内联原地形变布局（Inline FLIP Transition），无需全局遮罩即可实现安全防误触 ",-1))],2)):a.value.id==="icon-morph"?(f(),g("div",{key:24,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Jw,[s("div",e2,[s("div",t2,[w(as,{modelValue:F.value,"onUpdate:modelValue":x[4]||(x[4]=X=>F.value=X),mode:"menu-close",size:28},null,8,["modelValue"])]),s("span",n2," Menu ↔ Close: "+$(F.value?"关闭":"展开"),1)]),s("div",r2,[s("div",o2,[w(as,{modelValue:L.value,"onUpdate:modelValue":x[5]||(x[5]=X=>L.value=X),mode:"play-pause",size:28},null,8,["modelValue"])]),s("span",s2," Play ↔ Pause: "+$(L.value?"播放中":"暂停中"),1)]),s("div",i2,[s("div",a2,[w(as,{modelValue:oe.value,"onUpdate:modelValue":x[6]||(x[6]=X=>oe.value=X),mode:"plus-minus",size:28},null,8,["modelValue"])]),s("span",l2," Plus ↔ Minus: "+$(oe.value?"已展开":"折叠"),1)])]),x[75]||(x[75]=s("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG 矢量几何坐标连续形变，硬件加速 60fps，零卡顿零抖动 ",-1))],2)):a.value.id==="action-button"?(f(),g("div",{key:25,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",c2,[w(rr,{icon:I(Zp),active:be.value,tooltip:"钉选在首屏导航",onClick:x[7]||(x[7]=X=>be.value=!be.value)},null,8,["icon","active"]),w(rr,{label:"生成动效代码",icon:I(Re),badge:"AI",tooltip:"一键生成 Vue 动效原子代码",onClick:x[8]||(x[8]=X=>ye.value++)},null,8,["icon"]),w(rr,{icon:I(Op),active:W.value,tooltip:"收藏至组件集",onClick:x[9]||(x[9]=X=>W.value=!W.value)},null,8,["icon","active"]),w(rr,{label:"大规格按钮",size:"lg",icon:I(ea),tooltip:"上传打包产物"},null,8,["icon"]),w(rr,{label:"禁用按钮",size:"sm",disabled:!0,tooltip:"当前权限不足"})]),s("div",d2,[x[76]||(x[76]=Ae(" AI 生成点击计数：",-1)),s("span",u2,$(ye.value),1),x[77]||(x[77]=Ae(" 次 ",-1))]),x[78]||(x[78]=s("p",{class:"text-xs font-mono text-zinc-400"}," 配备精准物理弹簧缩放阻尼（active:scale-90）与微拟态悬停反馈 ",-1))],2)):a.value.id==="split-button"?(f(),g("div",{key:26,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",p2,[w($a,{label:"立即发布到生产环境",icon:I(Qr),variant:"primary",onPrimaryClick:Oe,onSelect:ee},null,8,["icon"]),w($a,{label:"导出代码包",icon:I(ea),variant:"secondary",items:[{id:"zip",label:"下载 ZIP 压缩包",description:"包含全部 SFC 组件与 CSS 变量"},{id:"git",label:"推送到 GitHub PR",description:"自动分支并创建协同审查"},{id:"npm",label:"发布至私有 NPM",description:"生成统一 Package 包"}],onPrimaryClick:Oe,onSelect:ee},null,8,["icon"])]),s("div",f2,[x[79]||(x[79]=s("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1"}," 分体按钮操作回执 ",-1)),s("div",m2,$(Me.value),1)]),x[80]||(x[80]=s("p",{class:"text-xs font-mono text-zinc-400"}," 主操作与下拉伴随操作一体化，物理发丝分割线，自适应点击区域与弹簧菜单 ",-1))],2)):a.value.id==="reactions"?(f(),g("div",{key:27,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",b2,[w(Pa)]),s("div",g2,[x[81]||(x[81]=s("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3"}," 自定义反应项展示： ",-1)),w(Pa,{items:[{id:"vue",emoji:"💚",count:1024,active:!0},{id:"speed",emoji:"⚡",count:512,active:!1},{id:"magic",emoji:"✨",count:888,active:!0},{id:"100",emoji:"💯",count:99,active:!1}]})]),x[82]||(x[82]=s("p",{class:"text-xs font-mono text-zinc-400"}," 点击任一表情体验 Spring 弹簧弹性放大与实时翻滚计数，支持添加自定义表情 ",-1))],2)):a.value.id==="scrub-input"?(f(),g("div",{key:28,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",h2,[w(ls,{modelValue:re.value,"onUpdate:modelValue":x[10]||(x[10]=X=>re.value=X),label:"宽度 (W)",min:120,max:640,suffix:"px"},null,8,["modelValue"]),w(ls,{modelValue:J.value,"onUpdate:modelValue":x[11]||(x[11]=X=>J.value=X),label:"圆角 (R)",min:0,max:48,suffix:"px"},null,8,["modelValue"]),w(ls,{modelValue:_e.value,"onUpdate:modelValue":x[12]||(x[12]=X=>_e.value=X),label:"不透明度 (A)",min:10,max:100,suffix:"%"},null,8,["modelValue"])]),s("div",x2,[s("div",{class:"flex h-24 items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-mono text-xs font-bold shadow-lg transition-all duration-75",style:ve({width:`${re.value/2}px`,borderRadius:`${J.value}px`,opacity:_e.value/100})}," 实时微调形态: "+$(Math.round(re.value/2))+" × 96px ",5)]),x[83]||(x[83]=s("p",{class:"text-xs font-mono text-zinc-400"}," 按住 Label 左右横向拖动（按住 Shift 加速 10x，Alt 微调 0.1x），双击数值切换精准键盘输入 ",-1))],2)):a.value.id==="password-strength"?(f(),g("div",{key:29,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",v2,[w(jx,{modelValue:Z.value,"onUpdate:modelValue":x[13]||(x[13]=X=>Z.value=X)},null,8,["modelValue"])]),x[84]||(x[84]=s("p",{class:"text-xs font-mono text-zinc-400"}," 包含大写/小写/数字/特殊符号/长度 5 维动态校验，进度条平滑渐变与明暗文无缝切换 ",-1))],2)):a.value.id==="money-input"?(f(),g("div",{key:30,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",y2,[w(Kx,{modelValue:je.value,"onUpdate:modelValue":x[14]||(x[14]=X=>je.value=X),currency:ze.value,"onUpdate:currency":x[15]||(x[15]=X=>ze.value=X)},null,8,["modelValue","currency"])]),s("div",k2,[x[85]||(x[85]=Ae(" 底层双向绑定数据：",-1)),s("span",w2,$(ze.value)+" "+$(je.value),1)]),x[86]||(x[86]=s("p",{class:"text-xs font-mono text-zinc-400"}," 金额过长时字号动态自适应缩放（text-4xl → text-xl），支持千分位格式化与一键药丸快捷填充 ",-1))],2)):a.value.id==="phone-input"?(f(),g("div",{key:31,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",z2,[w(lv,{modelValue:lt.value,"onUpdate:modelValue":x[16]||(x[16]=X=>lt.value=X),"country-code":Ue.value,"onUpdate:countryCode":x[17]||(x[17]=X=>Ue.value=X)},null,8,["modelValue","country-code"])]),s("div",_2,[x[87]||(x[87]=Ae(" 选中地区：",-1)),s("span",C2,$(Ue.value),1),x[88]||(x[88]=Ae(" · 输入号码：",-1)),s("span",S2,$(lt.value||"(未输入)"),1)]),x[89]||(x[89]=s("p",{class:"text-xs font-mono text-zinc-400"}," 支持中国 (### #### ####)、美国 ((###) ###-####) 等多国区号格式自适应与完成态对勾反馈 ",-1))],2)):a.value.id==="tag-input"?(f(),g("div",{key:32,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",I2,[w(mv,{modelValue:$e.value,"onUpdate:modelValue":x[18]||(x[18]=X=>$e.value=X),"max-tags":8},null,8,["modelValue"])]),s("div",A2,[x[90]||(x[90]=Ae(" 当前标签数组：",-1)),s("span",M2,$(JSON.stringify($e.value)),1)]),x[91]||(x[91]=s("p",{class:"text-xs font-mono text-zinc-400"}," 回车/逗号自动生成标签胶囊，退格键按序反向删除，配备弹性进退场动效与最大数量上限 ",-1))],2)):a.value.id==="mention-input"?(f(),g("div",{key:33,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",$2,[w($v,{modelValue:Ie.value,"onUpdate:modelValue":x[19]||(x[19]=X=>Ie.value=X)},null,8,["modelValue"])]),x[92]||(x[92]=s("p",{class:"text-xs font-mono text-zinc-400"}," 键入 @ 呼出团队成员与 AI 智能体候选菜单，支持键盘上下光标漫游与 Tab/Enter 高亮注入 ",-1))],2)):a.value.id==="segmented-control"?(f(),g("div",{key:34,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",P2,[w(Ta,{modelValue:j.value,"onUpdate:modelValue":x[20]||(x[20]=X=>j.value=X),options:se,size:"md"},null,8,["modelValue"]),w(Ta,{modelValue:j.value,"onUpdate:modelValue":x[21]||(x[21]=X=>j.value=X),options:[{id:"preview",label:"天"},{id:"code",label:"周"},{id:"docs",label:"月"}],size:"sm"},null,8,["modelValue"])]),s("div",T2,[x[93]||(x[93]=Ae(" 当前激活项：",-1)),s("span",R2,$(j.value),1)]),x[94]||(x[94]=s("p",{class:"text-xs font-mono text-zinc-400"}," iOS / macOS 风格物理弹簧滑块，支持左右方向键键盘导航与尺寸自适应 ",-1))],2)):a.value.id==="breadcrumb-trail"?(f(),g("div",{key:35,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",E2,[x[95]||(x[95]=s("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-4"}," 折叠模式（最大显示 3 项，中间自动收纳为浮层气泡）： ",-1)),w(Ra,{items:G,"max-items":3})]),s("div",L2,[x[96]||(x[96]=s("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-4"}," 全展开模式： ",-1)),w(Ra,{items:G,"max-items":10})]),x[97]||(x[97]=s("p",{class:"text-xs font-mono text-zinc-400"}," 层级过深时自动将中间路径收纳为省略号，点击呼出扩散柔和阴影下拉浮层 ",-1))],2)):a.value.id==="floating-action-menu"?(f(),g("div",{key:36,class:A(["relative flex flex-col items-center justify-center w-full min-h-[380px] p-10 rounded-2xl border transition-colors duration-200 gap-6 overflow-hidden",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",F2,[x[98]||(x[98]=s("div",{class:"text-sm font-bold text-zinc-800 dark:text-zinc-100"}," 点击右下角浮动动作药丸（FAB）体验交错弹簧飞出 ",-1)),s("div",D2," 最新触发："+$(fe.value),1)]),s("div",V2,[w(Zv,{actions:k,tooltip:"快捷动效与部署工具箱"})]),x[99]||(x[99]=s("p",{class:"text-xs font-mono text-zinc-400"}," 135° 顺滑旋转切换图标，子动作级联平滑缩放飞入，配备毛玻璃浮动标签 ",-1))],2)):a.value.id==="navbar-hover"?(f(),g("div",{key:37,class:A(["flex flex-col items-center justify-start w-full min-h-[380px] p-10 rounded-2xl border transition-colors duration-200 gap-8",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",O2,[w(c1,{items:S,onSelect:x[22]||(x[22]=X=>P.value=X.title)})]),s("div",j2,[x[100]||(x[100]=Ae(" 选中的导航二级特性：",-1)),s("span",B2,$(P.value),1)]),x[101]||(x[101]=s("p",{class:"text-xs font-mono text-zinc-400"}," 对标 Stripe / Vercel 巨型悬浮下拉菜单，顶部箭头与卡片自适应尺寸平滑跟随 ",-1))],2)):a.value.id==="pagination-slider"?(f(),g("div",{key:38,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",N2,[w(y1,{modelValue:E.value,"onUpdate:modelValue":x[23]||(x[23]=X=>E.value=X),"total-pages":20,"show-slider":!0},null,8,["modelValue"])]),s("div",H2,[x[102]||(x[102]=Ae(" 当前激活页码：第 ",-1)),s("span",G2,$(E.value),1),x[103]||(x[103]=Ae(" 页 / 共 20 页 ",-1))]),x[104]||(x[104]=s("p",{class:"text-xs font-mono text-zinc-400"}," 传统分页按钮与触感快速拖动滑块合二为一，极大提升大跨度翻页效率 ",-1))],2)):a.value.id==="circular-progress-nav"?(f(),g("div",{key:39,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",U2,[w(cs,{progress:D.value,size:64,"stroke-width":5,onClick:B},null,8,["progress"]),w(cs,{progress:100,size:52,"stroke-width":4,tooltip:"进度已满"}),w(cs,{progress:35,size:48,"stroke-width":3.5,tooltip:"初始化 35%"})]),s("div",q2,[s("button",{type:"button",onClick:x[24]||(x[24]=X=>D.value=Math.max(0,D.value-10)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"}," -10% "),s("div",W2,[x[105]||(x[105]=Ae(" 当前进度：",-1)),s("span",X2,$(D.value)+"%",1)]),s("button",{type:"button",onClick:x[25]||(x[25]=X=>D.value=Math.min(100,D.value+10)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"}," +10% ")]),x[106]||(x[106]=s("p",{class:"text-xs font-mono text-zinc-400"}," SVG 矢量环形进度指示器，支持平滑 stroke-dashoffset 阻尼形变与微拟态按压 ",-1))],2)):a.value.id==="glowing-card"?(f(),g("div",{key:40,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",K2,[w(Ea,{duration:4,blur:20,class:"w-full"},{default:q(()=>[s("div",Y2,[s("div",Z2,[w(I(Re),{class:"h-5 w-5"})]),x[107]||(x[107]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"常驻流光卡片"),s("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 底层 360° 匀速旋转弥散光斑，顶层 1px 细微发丝发光轮廓贴合容器。 ")],-1))])]),_:1}),w(Ea,{duration:3,blur:24,"hover-only":!0,"glow-color":"conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)",class:"w-full"},{default:q(()=>[s("div",Q2,[s("div",J2,[w(I(Qr),{class:"h-5 w-5"})]),x[108]||(x[108]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"悬停激发流光"),s("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 鼠标移入时瞬间唤醒炫彩流光外框，移出平滑消隐，极致节能。 ")],-1))])]),_:1})]),x[109]||(x[109]=s("p",{class:"text-xs font-mono text-zinc-400"}," 双层流光结构：底层空气感多层模糊扩散 + 顶层发丝剪裁遮罩 ",-1))],2)):a.value.id==="glass-card"?(f(),g("div",{key:41,class:A(["relative flex flex-col items-center justify-center w-full min-h-[360px] p-10 rounded-2xl border transition-colors duration-200 gap-6 overflow-hidden",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-100"])},[x[112]||(x[112]=s("div",{class:"absolute -top-10 -left-10 h-48 w-48 rounded-full bg-blue-500/30 blur-2xl pointer-events-none"},null,-1)),x[113]||(x[113]=s("div",{class:"absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-purple-500/30 blur-2xl pointer-events-none"},null,-1)),x[114]||(x[114]=s("div",{class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none"},null,-1)),s("div",e5,[w(La,{blur:16,saturation:180,class:"w-full"},{default:q(()=>[s("div",t5,[s("div",n5,[w(I(jt),{class:"h-5 w-5"})]),x[110]||(x[110]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"磨砂亚克力玻璃"),s("p",{class:"mt-1 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed"}," 16px 硬件加速环境背板虚化，180% 鲜明色彩透光增益，顶部物理倒角高光线。 ")],-1))])]),_:1}),w(La,{blur:24,saturation:200,class:"w-full"},{default:q(()=>[s("div",r5,[s("div",o5,[w(I(Zo),{class:"h-5 w-5"})]),x[111]||(x[111]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"微拟态浮升反馈"),s("p",{class:"mt-1 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed"}," 悬停触发 -translate-y-1 与多层柔和深色阴影扩展，质感高级灵动。 ")],-1))])]),_:1})]),x[115]||(x[115]=s("p",{class:"text-xs font-mono text-zinc-400 relative z-10"}," 双层背板折射滤镜 + 顶部高折射率物理反光发丝线，完美抗锯齿 ",-1))],2)):a.value.id==="spotlight-card"?(f(),g("div",{key:42,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",s5,[w(Fa,{"spotlight-radius":280,"spotlight-color":"rgba(59, 130, 246, 0.18)",class:"w-full"},{default:q(()=>[s("div",i5,[s("div",a5,[w(I(un),{class:"h-5 w-5"})]),x[116]||(x[116]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"极客蓝聚光灯"),s("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 鼠标在卡片上方滑行时，柔和径向聚光灯在卡片表面与 1px 发丝边框上同步聚焦漫射。 ")],-1))])]),_:1}),w(Fa,{"spotlight-radius":280,"spotlight-color":"rgba(168, 85, 247, 0.18)",class:"w-full"},{default:q(()=>[s("div",l5,[s("div",c5,[w(I(Vn),{class:"h-5 w-5"})]),x[117]||(x[117]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"幻境紫聚光灯"),s("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 边框与内表面联动感知光标相对坐标，移开卡片时光晕平滑消退。 ")],-1))])]),_:1})]),x[118]||(x[118]=s("p",{class:"text-xs font-mono text-zinc-400"}," 滑动光标在两张卡片间移动体验相对坐标实时动态漫反射追踪 ",-1))],2)):a.value.id==="tilt-card"?(f(),g("div",{key:43,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",d5,[w(E1,{"max-tilt":16,perspective:1e3,glare:!0,class:"w-full"},{default:q(()=>[s("div",u5,[s("div",p5,[w(I(Vn),{class:"h-7 w-7"})]),x[119]||(x[119]=s("h4",{class:"mt-4 text-base font-bold text-zinc-900 dark:text-white [transform:translateZ(30px)]"}," 3D 视差空间陀螺仪 ",-1)),x[120]||(x[120]=s("p",{class:"mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed [transform:translateZ(20px)]"}," 光标在卡片内部移动时计算精确三维旋转量，卡片表面覆盖全息反光遮罩（Glare Sheen），图标具备悬浮纵深感。 ",-1)),x[121]||(x[121]=s("div",{class:"mt-4 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 [transform:translateZ(25px)]"}," 移入并晃动光标体验视差 ",-1))])]),_:1})]),x[122]||(x[122]=s("p",{class:"text-xs font-mono text-zinc-400"}," 基于 CSS 3D 变换 rotateX / rotateY + 动态全息反光层 + 子元素 translateZ 纵深 ",-1))],2)):a.value.id==="card-stack"?(f(),g("div",{key:44,class:A(["flex flex-col items-center justify-center w-full min-h-[420px] p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[w(U1,{items:U,"max-visible":3,onSwipe:Y}),s("div",f5,[x[123]||(x[123]=Ae(" 卡片划动监听：",-1)),s("span",m5,$(K.value),1)]),x[124]||(x[124]=s("p",{class:"text-xs font-mono text-zinc-400"}," 按住第一张卡片左右拖动划走（带旋转与阻尼），或使用下方按钮翻阅卡片 ",-1))],2)):a.value.id==="noise-card"?(f(),g("div",{key:45,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",b5,[w(Da,{gradient:"linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(147, 51, 234, 0.16))","grain-opacity":.14,animated:!0,class:"w-full"},{default:q(()=>[s("div",g5,[s("div",h5,[w(I(Hp),{class:"h-5 w-5"})]),x[125]||(x[125]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"电影胶片噪点"),s("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 纯原生 SVG 分形噪点算法，微动态颗粒感赋予深色表面温润触感。 ")],-1))])]),_:1}),w(Da,{gradient:"linear-gradient(135deg, rgba(16, 185, 129, 0.16), rgba(245, 158, 11, 0.16))","grain-opacity":.16,animated:!0,class:"w-full"},{default:q(()=>[s("div",x5,[s("div",v5,[w(I(Re),{class:"h-5 w-5"})]),x[126]||(x[126]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"极光破晓噪点"),s("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 绿橙渐变底色透过分形颗粒漫射，质感对标高端胶片暗房摄影美学。 ")],-1))])]),_:1})]),x[127]||(x[127]=s("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG feTurbulence 动态渲染分形噪点，0 外部图片依赖，体积超轻 ",-1))],2)):a.value.id==="sparkline"?(f(),g("div",{key:46,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",y5,[s("div",k5,[x[128]||(x[128]=s("div",{class:"flex items-center justify-between w-full"},[s("span",{class:"text-xs font-bold text-zinc-500"},"API 吞吐请求量"),s("span",{class:"text-xs font-mono font-bold text-blue-500"},"+38.2%")],-1)),w(js,{data:N.value,width:280,height:80,color:"#3b82f6",fill:!0,"format-value":X=>`${X} k/s`},null,8,["data","format-value"])]),s("div",w5,[x[129]||(x[129]=s("div",{class:"flex items-center justify-between w-full"},[s("span",{class:"text-xs font-bold text-zinc-500"},"内存缓存命中率"),s("span",{class:"text-xs font-mono font-bold text-emerald-500"},"99.4%")],-1)),w(js,{data:[88,91,89,94,92,96,95,98,97,99],width:280,height:80,color:"#10b981",fill:!0,"format-value":X=>`${X}%`},null,8,["format-value"])])]),x[130]||(x[130]=s("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG 贝塞尔曲线平滑插值路径，移动光标体验垂直辅助虚线、触点微缩放与数值浮层 ",-1))],2)):a.value.id==="animated-counter"?(f(),g("div",{key:47,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",z5,[x[131]||(x[131]=s("span",{class:"text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider"}," 实时经常性收入 (MRR) ",-1)),s("div",_5,[w(nd,{value:ge.value,prefix:"¥",decimals:0,duration:1200,"trend-color":!0},null,8,["value"])])]),s("div",C5,[s("button",{type:"button",onClick:x[26]||(x[26]=X=>te(-15e3)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," -15,000 "),s("button",{type:"button",onClick:x[27]||(x[27]=X=>te(-2500)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," -2,500 "),s("button",{type:"button",onClick:x[28]||(x[28]=X=>te(5e3)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," +5,000 "),s("button",{type:"button",onClick:x[29]||(x[29]=X=>te(32800)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," +32,800 ")]),x[132]||(x[132]=s("p",{class:"text-xs font-mono text-zinc-400"}," 基于 requestAnimationFrame 非线性指数衰减缓动插值，点击数值体验红/绿涨跌高亮与千分位 ",-1))],2)):a.value.id==="radial-gauge"?(f(),g("div",{key:48,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",S5,[w(us,{value:ue.value,"onUpdate:value":x[30]||(x[30]=X=>ue.value=X),label:"集群 CPU 负载",unit:"%",size:180,thresholds:!0,draggable:""},null,8,["value"]),w(us,{value:94,label:"危险阈值 (红区)",unit:"%",size:150,thresholds:!0}),w(us,{value:38,label:"健康阈值 (绿区)",unit:"%",size:150,thresholds:!0})]),s("div",I5,[s("button",{type:"button",onClick:x[31]||(x[31]=X=>ue.value=Math.max(0,ue.value-15)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," -15% "),s("div",A5,[x[133]||(x[133]=Ae(" 当前负载：",-1)),s("span",M5,$(ue.value)+"%",1)]),s("button",{type:"button",onClick:x[32]||(x[32]=X=>ue.value=Math.min(100,ue.value+15)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," +15% ")]),x[134]||(x[134]=s("p",{class:"text-xs font-mono text-zinc-400"}," 240° 大弧度科技仪表盘，拖动末端圆点或点击轨道即可调节数值，跨越 75%/90% 临界点时自适应变色 ",-1))],2)):a.value.id==="progress-steps"?(f(),g("div",{key:49,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",$5,[w(Iy,{"current-step":he.value,"onUpdate:currentStep":x[33]||(x[33]=X=>he.value=X),steps:Se},null,8,["current-step"])]),s("div",P5,[s("button",{type:"button",disabled:he.value<=1,onClick:x[34]||(x[34]=X=>he.value=Math.max(1,he.value-1)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 disabled:opacity-40 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," 上一步 ",8,T5),s("div",R5,[x[135]||(x[135]=Ae(" 当前阶段：",-1)),s("span",E5,"第 "+$(he.value)+" 步（"+$((Wt=Se[he.value-1])==null?void 0:Wt.title)+"）",1)]),s("button",{type:"button",disabled:he.value>=Se.length,onClick:x[35]||(x[35]=X=>he.value=Math.min(Se.length,he.value+1)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 disabled:opacity-40 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," 下一步 ",8,L5)]),x[136]||(x[136]=s("p",{class:"text-xs font-mono text-zinc-400"}," 完成节点弹性放大打勾形变，当前节点呼吸光晕，连接线渐变流动填充 ",-1))],2)):a.value.id==="comparison-matrix"?(f(),g("div",{key:50,class:A(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",F5,[w(By,{plans:De,features:Ee,onSelectPlan:x[36]||(x[36]=X=>We.value=`已选择套餐：${X}`)})]),s("div",D5,[x[137]||(x[137]=Ae(" 套餐选择监听：",-1)),s("span",V5,$(We.value),1)]),x[138]||(x[138]=s("p",{class:"text-xs font-mono text-zinc-400"}," 推荐套餐高亮悬浮微框，整行悬停高亮，支持布尔值对勾/减号与自定义参数说明 ",-1))],2)):a.value.id==="stat-card"?(f(),g("div",{key:51,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",O5,[w(Va,{title:"分布式网关吞吐量",value:89240,suffix:" TPS",change:18.5,"change-period":"较昨日","trend-data":Je,icon:I(As),color:"#3b82f6",class:"w-full"},null,8,["icon"]),w(Va,{title:"活跃 Agent 会话数",value:14380,suffix:" 个",change:-2.4,"change-period":"较上周","trend-data":[65,58,62,54,49,52,48,44],icon:I(Fn),color:"#ec4899",class:"w-full"},null,8,["icon"])]),x[139]||(x[139]=s("p",{class:"text-xs font-mono text-zinc-400"}," 整合主标题、大字号平滑计数器、环比涨跌徽标与嵌入式 Mini Sparkline 趋势微图 ",-1))],2)):a.value.id==="command-dialog"?(f(),g("div",{key:52,class:A(["flex flex-col items-center justify-center w-full p-12 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[x[141]||(x[141]=s("div",{class:"text-center space-y-2"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"macOS / Raycast 仿生快捷命令浮层"),s("p",{class:"text-xs text-zinc-500 max-w-md"},[Ae(" 按下键盘快捷键 "),s("kbd",{class:"px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 font-mono text-zinc-800 dark:text-zinc-200"},"⌘K"),Ae(" 或 "),s("kbd",{class:"px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 font-mono text-zinc-800 dark:text-zinc-200"},"Ctrl+K"),Ae("，或点击下方按钮呼出 ")])],-1)),s("button",{type:"button",onClick:x[37]||(x[37]=X=>yt.value=!0),class:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"},[...x[140]||(x[140]=[s("span",null,"呼出快捷命令中心",-1),s("span",{class:"px-1.5 py-0.5 rounded bg-white/20 dark:bg-zinc-900/10 font-mono text-xs"},"⌘K",-1)])]),w(ak,{modelValue:yt.value,"onUpdate:modelValue":x[38]||(x[38]=X=>yt.value=X)},null,8,["modelValue"])],2)):a.value.id==="slide-over-drawer"?(f(),g("div",{key:53,class:A(["flex flex-col items-center justify-center w-full p-12 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[x[143]||(x[143]=s("div",{class:"text-center space-y-2"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"平滑弹力侧滑抽屉面板"),s("p",{class:"text-xs text-zinc-500 max-w-md"}," 支持从屏幕左侧或右侧优雅滑入，具备遮罩毛玻璃虚化、贝塞尔弹性曲线与键盘 ESC 快捷收起 ")],-1)),s("div",j5,[s("button",{type:"button",onClick:x[39]||(x[39]=X=>{qt.value="right",pt.value=!0}),class:"px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium text-xs shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"}," 右侧滑出抽屉 (Right) "),s("button",{type:"button",onClick:x[40]||(x[40]=X=>{qt.value="left",pt.value=!0}),class:"px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 font-medium text-xs hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all cursor-pointer"}," 左侧滑出抽屉 (Left) ")]),w(mk,{modelValue:pt.value,"onUpdate:modelValue":x[41]||(x[41]=X=>pt.value=X),side:qt.value,title:"工作空间偏好设置",description:"自定义动效渲染引擎与交互行为参数"},{footer:q(({close:X})=>[s("div",B5,[s("button",{type:"button",onClick:X,class:"px-3.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"}," 取消 ",8,N5),s("button",{type:"button",onClick:X,class:"px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs text-white font-medium shadow-sm transition-colors"}," 保存设置 ",8,H5)])]),default:q(()=>[x[142]||(x[142]=s("div",{class:"space-y-4 text-xs text-zinc-600 dark:text-zinc-300"},[s("div",{class:"p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50"},[s("p",{class:"font-semibold text-zinc-900 dark:text-white mb-1"},"物理触感反馈"),s("p",{class:"text-zinc-500"},"开启后将激活微震动缓动曲线与 60fps 动量插值。")]),s("div",{class:"p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50"},[s("p",{class:"font-semibold text-zinc-900 dark:text-white mb-1"},"GPU 硬件加速层"),s("p",{class:"text-zinc-500"},"自动提升 transform 与 will-change 渲染层级。")])],-1))]),_:1},8,["modelValue","side"])],2)):a.value.id==="floating-popover"?(f(),g("div",{key:54,class:A(["flex flex-col items-center justify-center w-full p-16 rounded-2xl border transition-colors duration-200 gap-8",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[x[148]||(x[148]=s("div",{class:"text-center space-y-2"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"微动浮动气泡浮层"),s("p",{class:"text-xs text-zinc-500 max-w-md"}," 多层扩散弥散投影（Diffuse Popover Shadow）、精细定位指针以及 Outside Click 智能点击闭合 ")],-1)),s("div",G5,[w(Oa,{placement:"bottom",width:"w-80"},{trigger:q(()=>[...x[144]||(x[144]=[s("button",{class:"px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"}," 向下弹出气泡 (Bottom) ▾ ",-1)])]),default:q(()=>[x[145]||(x[145]=s("div",{class:"space-y-2"},[s("div",{class:"flex items-center gap-2"},[s("span",{class:"w-2 h-2 rounded-full bg-emerald-500"}),s("h4",{class:"text-xs font-bold text-zinc-900 dark:text-white"},"节点集群状态正常")]),s("p",{class:"text-[11px] text-zinc-500 leading-relaxed"}," 当前延迟为 14ms，已成功连接至东亚边缘网关。点击浮层外部任何区域即可自动收起。 ")],-1))]),_:1}),w(Oa,{placement:"top",width:"w-72"},{trigger:q(()=>[...x[146]||(x[146]=[s("button",{class:"px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all cursor-pointer"}," 向上弹出提示 (Top) ▴ ",-1)])]),default:q(()=>[x[147]||(x[147]=s("div",{class:"space-y-1.5"},[s("h4",{class:"text-xs font-bold text-zinc-900 dark:text-white"},"微型信息摘要"),s("p",{class:"text-[11px] text-zinc-500"}," 支持四向对齐与极简无缝插槽定制。 ")],-1))]),_:1})])],2)):a.value.id==="context-menu"?(f(),g("div",{key:55,class:A(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[x[150]||(x[150]=s("div",{class:"text-center space-y-2"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"桌面级右键上下文菜单"),s("p",{class:"text-xs text-zinc-500 max-w-md"}," 在下方热区中点击鼠标右键触发。具备屏幕视口边界碰撞贴边算法、快捷键徽标与危险项高亮 ")],-1)),s("div",U5,[w(wk,{items:Er},{default:q(()=>[...x[149]||(x[149]=[s("div",{class:"h-52 w-full flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 p-6 text-center select-none cursor-context-menu hover:border-emerald-500/50 transition-colors"},[s("div",{class:"w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-lg mb-3"}," 🖱️ "),s("span",{class:"text-sm font-semibold text-zinc-800 dark:text-zinc-200"}," 在此虚线区域内点击【鼠标右键】 "),s("span",{class:"text-xs text-zinc-400 mt-1 font-mono"}," 自动定位并计算视口边缘防溢出 ")],-1)])]),_:1})])],2)):a.value.id==="toast-notification"?(f(),g("div",{key:56,class:A(["flex flex-col items-center justify-center w-full p-12 rounded-2xl border transition-colors duration-200 gap-8",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[x[151]||(x[151]=s("div",{class:"text-center space-y-2"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"物理堆叠浮动消息吐司"),s("p",{class:"text-xs text-zinc-500 max-w-md"}," 多状态反馈（Success / Error / Warning / Info），支持自动倒计时、平滑弹性动画与多通道堆叠排布 ")],-1)),s("div",q5,[s("button",{type:"button",onClick:x[42]||(x[42]=X=>ft("success")),class:"px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold hover:bg-emerald-500/20 active:scale-95 transition-all cursor-pointer"}," ✓ 触发成功吐司 "),s("button",{type:"button",onClick:x[43]||(x[43]=X=>ft("error")),class:"px-4 py-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-xs font-semibold hover:bg-rose-500/20 active:scale-95 transition-all cursor-pointer"}," ✕ 触发错误吐司 "),s("button",{type:"button",onClick:x[44]||(x[44]=X=>ft("warning")),class:"px-4 py-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-semibold hover:bg-amber-500/20 active:scale-95 transition-all cursor-pointer"}," ⚠ 触发警告吐司 "),s("button",{type:"button",onClick:x[45]||(x[45]=X=>ft("info")),class:"px-4 py-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-semibold hover:bg-blue-500/20 active:scale-95 transition-all cursor-pointer"}," ℹ 触发提示吐司 ")]),x[152]||(x[152]=s("p",{class:"text-xs font-mono text-zinc-400"}," 观察右下角的消息弹层堆叠效果（可手动点击关闭或悬停暂停） ",-1)),w(Mk,{toasts:nt.value,position:"bottom-right",onClose:Lr},null,8,["toasts"])],2)):a.value.id==="dropdown-menu"?(f(),g("div",{key:57,class:A(["flex flex-col items-center justify-center w-full p-16 rounded-2xl border transition-colors duration-200 gap-8",Q?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[x[153]||(x[153]=s("div",{class:"text-center space-y-2"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"高触感选项下拉菜单"),s("p",{class:"text-xs text-zinc-500 max-w-md"}," 支持单选 Radio、复选 Checkbox、分组标题、分割线、键盘上下箭头导航与全套深浅色自适应弥散阴影 ")],-1)),s("div",W5,[w(ja,{"trigger-text":"工作空间操作",align:"left",width:"w-60",onSelect:pi}),w(ja,{"trigger-text":"偏好与视图 ▾",align:"right",width:"w-56",onSelect:pi})]),s("div",X5," 最近交互："+$(Yn.value),1)],2)):H("",!0)]}),_:1},8,["title","description","component-code","usage-code","component-filename","props-list"]))])])])}}}),Y5=Ff({history:mf(),routes:[{path:"/",name:"home",component:ag},{path:"/docs/:id?",name:"docs",component:K5},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(e,t,n){return n||(e.name==="docs"&&t.name==="docs"?!1:{top:0})}}),rd=Tp(M0);rd.use(Y5);rd.mount("#app");
