(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ds(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ce={},un=[],Et=()=>{},zi=()=>!1,Mr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),$r=e=>e.startsWith("onUpdate:"),Le=Object.assign,Bs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Al=Object.prototype.hasOwnProperty,ge=(e,t)=>Al.call(e,t),ne=Array.isArray,Zt=e=>Qn(e)==="[object Map]",br=e=>Qn(e)==="[object Set]",co=e=>Qn(e)==="[object Date]",ae=e=>typeof e=="function",Te=e=>typeof e=="string",gt=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",Ci=e=>(ve(e)||ae(e))&&ae(e.then)&&ae(e.catch),Ai=Object.prototype.toString,Qn=e=>Ai.call(e),Sl=e=>Qn(e).slice(8,-1),Si=e=>Qn(e)==="[object Object]",js=e=>Te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pn=Ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Rl=/-\w/g,nt=Fr(e=>e.replace(Rl,t=>t.slice(1).toUpperCase())),El=/\B([A-Z])/g,pn=Fr(e=>e.replace(El,"-$1").toLowerCase()),Ir=Fr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wr=Fr(e=>e?`on${Ir(e)}`:""),Rt=(e,t)=>!Object.is(e,t),Xr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ri=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Tl=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ml=e=>{const t=Te(e)?Number(e):NaN;return isNaN(t)?e:t};let uo;const Pr=()=>uo||(uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ue(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Te(r)?Pl(r):Ue(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(Te(e)||ve(e))return e}const $l=/;(?![^(]*\))/g,Fl=/:([^]+)/,Il=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Pl(e){const t={};return e.replace(Il,n=>n.startsWith("/*")?"":n).split($l).forEach(n=>{if(n){const r=n.split(Fl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function V(e){let t="";if(Te(e))t=e;else if(ne(e))for(let n=0;n<e.length;n++){const r=V(e[n]);r&&(t+=r+" ")}else if(ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ll="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Ol=Ds(Ll);function Ei(e){return!!e||e===""}function Dl(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let s=0;r&&s<e.length;s++)r=Lr(e[s],t[s],n);return r}function fo(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),s=new Uint8Array(r.length);for(const o of e){let i=-1;for(let a=0;a<r.length;a++)if(!s[a]&&Lr(o,r[a],n)){i=a;break}if(i<0)return!1;s[i]=1}return!0}function Bl(e,t,n){let r=Zt(e),s=Zt(t);if(r||s||(r=br(e),s=br(t),r||s))return r&&s?fo(e,t,n):!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Lr(e[a],t[a],n))return!1}return String(e)===String(t)}function po(e,t,n,r){n||(n=[new Map,new Map]);const[s,o]=n;if(s.has(e)||o.has(t))return s.get(e)===t&&o.get(t)===e;s.set(e,t),o.set(t,e);const i=r(e,t,n);return s.delete(e),o.delete(t),i}function Lr(e,t,n){if(e===t)return!0;let r=co(e),s=co(t);return r||s?r&&s?e.getTime()===t.getTime():!1:(r=gt(e),s=gt(t),r||s?e===t:(r=ne(e),s=ne(t),r||s?r&&s?po(e,t,n,Dl):!1:(r=ve(e),s=ve(t),r||s?!r||!s?!1:po(e,t,n,Bl):String(e)===String(t))))}const Ti=e=>!!(e&&e.__v_isRef===!0),ie=e=>Te(e)?e:e==null?"":ne(e)||ve(e)&&(e.toString===Ai||!ae(e.toString))?Ti(e)?ie(e.value):JSON.stringify(e,Mi,2):String(e),Mi=(e,t)=>Ti(t)?Mi(e,t.value):Zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],o)=>(n[Kr(r,o)+" =>"]=s,n),{})}:br(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Kr(n))}:gt(t)?Kr(t):ve(t)&&!ne(t)&&!Si(t)?String(t):t,Kr=(e,t="")=>{var n;return gt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ge;class jl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ge&&(Ge.active?(this.parent=Ge,this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=Ge;try{return Ge=this,t()}finally{Ge=n}}}on(){++this._on===1&&(this.prevScope=Ge,Ge=this)}off(){if(this._on>0&&--this._on===0){if(Ge===this)Ge=this.prevScope;else{let t=Ge;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Nl(){return Ge}let Se;const Yr=new WeakSet;class $i{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ge&&(Ge.active?Ge.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Yr.has(this)&&(Yr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ii(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mo(this),Pi(this);const t=Se,n=ht;Se=this,ht=!0;try{return this.fn()}finally{Li(this),Se=t,ht=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Hs(t);this.deps=this.depsTail=void 0,mo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Yr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hs(this)&&this.run()}get dirty(){return hs(this)}}let Fi=0,Ln,On;function Ii(e,t=!1){if(e.flags|=8,t){e.next=On,On=e;return}e.next=Ln,Ln=e}function Ns(){Fi++}function Gs(){if(--Fi>0)return;if(On){let t=On;for(On=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Ln;){let t=Ln;for(Ln=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Pi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Li(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Hs(r),Gl(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function hs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Oi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Oi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Vn)||(e.globalVersion=Vn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!hs(e))))return;e.flags|=2;const t=e.dep,n=Se,r=ht;Se=e,ht=!0;try{Pi(e);const s=e.fn(e._value);(t.version===0||Rt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Se=n,ht=r,Li(e),e.flags&=-3}}function Hs(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Hs(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Gl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ht=!0;const Di=[];function Mt(){Di.push(ht),ht=!1}function $t(){const e=Di.pop();ht=e===void 0?!0:e}function mo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Se;Se=void 0;try{t()}finally{Se=n}}}let Vn=0;class Hl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Se||!ht||Se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Se)n=this.activeLink=new Hl(Se,this),Se.deps?(n.prevDep=Se.depsTail,Se.depsTail.nextDep=n,Se.depsTail=n):Se.deps=Se.depsTail=n,Bi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Se.depsTail,n.nextDep=void 0,Se.depsTail.nextDep=n,Se.depsTail=n,Se.deps===n&&(Se.deps=r)}return n}trigger(t){this.version++,Vn++,this.notify(t)}notify(t){Ns();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gs()}}}function Bi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Bi(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const gs=new WeakMap,fn=Symbol(""),bs=Symbol(""),qn=Symbol("");function We(e,t,n){if(ht&&Se){let r=gs.get(e);r||gs.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Vs),s.map=r,s.key=n),s.track()}}function Nt(e,t,n,r,s,o){const i=gs.get(e);if(!i){Vn++;return}const a=l=>{l&&l.trigger()};if(Ns(),t==="clear")i.forEach(a);else{const l=ne(e),c=l&&js(n);if(l&&n==="length"){const u=Number(r);i.forEach((d,h)=>{(h==="length"||h===qn||!gt(h)&&h>=u)&&a(d)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),c&&a(i.get(qn)),t){case"add":l?c&&a(i.get("length")):(a(i.get(fn)),Zt(e)&&a(i.get(bs)));break;case"delete":l||(a(i.get(fn)),Zt(e)&&a(i.get(bs)));break;case"set":Zt(e)&&a(i.get(fn));break}}Gs()}function hn(e){const t=he(e);return t===e||(We(t,"iterate",qn),ct(e))?t:Ft(e)?Jt(e)?t.map(n=>Qt(dt(n))):t.map(Qt):t.map(dt)}function Or(e){return We(e=he(e),"iterate",qn),e}function Ct(e,t){return Ft(e)?Qt(Jt(e)?dt(t):t):dt(t)}const Vl={__proto__:null,[Symbol.iterator](){return Zr(this,Symbol.iterator,e=>Ct(this,e))},concat(...e){return hn(this).concat(...e.map(t=>ne(t)?hn(t):t))},entries(){return Zr(this,"entries",e=>(e[1]=Ct(this,e[1]),e))},every(e,t){return Pt(this,"every",e,t,void 0,arguments)},filter(e,t){return Pt(this,"filter",e,t,n=>n.map(r=>Ct(this,r)),arguments)},find(e,t){return Pt(this,"find",e,t,n=>Ct(this,n),arguments)},findIndex(e,t){return Pt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Pt(this,"findLast",e,t,n=>Ct(this,n),arguments)},findLastIndex(e,t){return Pt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Pt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Jr(this,"includes",e)},indexOf(...e){return Jr(this,"indexOf",e)},join(e){return hn(this).join(e)},lastIndexOf(...e){return Jr(this,"lastIndexOf",e)},map(e,t){return Pt(this,"map",e,t,void 0,arguments)},pop(){return An(this,"pop")},push(...e){return An(this,"push",e)},reduce(e,...t){return go(this,"reduce",e,t)},reduceRight(e,...t){return go(this,"reduceRight",e,t)},shift(){return An(this,"shift")},some(e,t){return Pt(this,"some",e,t,void 0,arguments)},splice(...e){return An(this,"splice",e)},toReversed(){return hn(this).toReversed()},toSorted(e){return hn(this).toSorted(e)},toSpliced(...e){return hn(this).toSpliced(...e)},unshift(...e){return An(this,"unshift",e)},values(){return Zr(this,"values",e=>Ct(this,e))}};function Zr(e,t,n){const r=Or(e),s=r[t],o=s.call(r);if(r!==e&&!ct(e)){if(o[Symbol.toStringTag]==="Array Iterator"){const i=Object.create(Object.getPrototypeOf(o));return i.next=()=>ho(o.next(),n),s!==ji[t]&&Object.defineProperties(i,{return:{get(){const a=o.return;return typeof a=="function"?a.bind(o):a}},throw:{get(){const a=o.throw;return typeof a=="function"?a.bind(o):a}}}),i}o._next=o.next,o.next=()=>ho(o._next(),n)}return o}function ho(e,t){return e.done||(e.value=t(e.value)),e}const ji=Array.prototype;function Pt(e,t,n,r,s,o){const i=Or(e),a=i!==e&&!ct(e),l=i[t];if(l!==ji[t]){const d=l.apply(e,o);return a?dt(d):d}let c=n;i!==e&&(a?c=function(d,h){return n.call(this,Ct(e,d),h,e)}:n.length>2&&(c=function(d,h){return n.call(this,d,h,e)}));const u=l.call(i,c,r);return a&&s?s(u):u}function go(e,t,n,r){const s=Or(e),o=s!==e&&!ct(e);let i=n,a=!1;s!==e&&(o?(a=r.length===0,i=function(c,u,d){return a&&(a=!1,c=Ct(e,c)),n.call(this,c,Ct(e,u),d,e)}):n.length>3&&(i=function(c,u,d){return n.call(this,c,u,d,e)}));const l=s[t](i,...r);return a?Ct(e,l):l}function Jr(e,t,n){const r=he(e);We(r,"iterate",qn);const s=r[t](...n);return(s===-1||s===!1)&&Ws(n[0])?(n[0]=he(n[0]),r[t](...n)):s}function An(e,t,n=[]){Mt(),Ns();const r=he(e)[t].apply(e,n);return Gs(),$t(),r}const ql=Ds("__proto__,__v_isRef,__isVue"),Ni=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gt));function Ul(e){gt(e)||(e=String(e));const t=he(this);return We(t,"has",e),t.hasOwnProperty(e)}class Gi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?nc:Ui:o?qi:Vi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=ne(t);if(!s){let l;if(i&&(l=Vl[n]))return l;if(n==="hasOwnProperty")return Ul}const a=Reflect.get(t,n,Ze(t)?t:r);if((gt(n)?Ni.has(n):ql(n))||(s||We(t,"get",n),o))return a;if(Ze(a)){const l=i&&js(n)?a:a.value;return s&&ve(l)?vs(l):l}return ve(a)?s?vs(a):Dr(a):a}}class Hi extends Gi{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];const i=ne(t)&&js(n);if(!this._isShallow){const c=Ft(o);if(!ct(r)&&!Ft(r)&&(o=he(o),r=he(r)),!i&&Ze(o)&&!Ze(r))return c||(o.value=r),!0}const a=i?Number(n)<t.length:ge(t,n),l=Reflect.set(t,n,r,Ze(t)?t:s);return t===he(s)&&l&&(a?Rt(r,o)&&Nt(t,"set",n,r):Nt(t,"add",n,r)),l}deleteProperty(t,n){const r=ge(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Nt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!gt(n)||!Ni.has(n))&&We(t,"has",n),r}ownKeys(t){return We(t,"iterate",ne(t)?"length":fn),Reflect.ownKeys(t)}}class Wl extends Gi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Xl=new Hi,Kl=new Wl,Yl=new Hi(!0);const xs=e=>e,rr=e=>Reflect.getPrototypeOf(e);function Zl(e,t,n){return function(...r){const s=this.__v_raw,o=he(s),i=Zt(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,c=s[e](...r),u=n?xs:t?Qt:dt;return!t&&We(o,"iterate",l?bs:fn),Le(Object.create(c),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}}})}}function sr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Jl(e,t){const n={get(s){const o=this.__v_raw,i=he(o),a=he(s);e||(Rt(s,a)&&We(i,"get",s),We(i,"get",a));const{has:l}=rr(i),c=t?xs:e?Qt:dt;if(l.call(i,s))return c(o.get(s));if(l.call(i,a))return c(o.get(a));o!==i&&o.get(s)},get size(){const s=this.__v_raw;return!e&&We(he(s),"iterate",fn),s.size},has(s){const o=this.__v_raw,i=he(o),a=he(s);return e||(Rt(s,a)&&We(i,"has",s),We(i,"has",a)),s===a?o.has(s):o.has(s)||o.has(a)},forEach(s,o){const i=this,a=i.__v_raw,l=he(a),c=t?xs:e?Qt:dt;return!e&&We(l,"iterate",fn),a.forEach((u,d)=>s.call(o,c(u),c(d),i))}};return Le(n,e?{add:sr("add"),set:sr("set"),delete:sr("delete"),clear:sr("clear")}:{add(s){const o=he(this),i=rr(o),a=he(s),l=!t&&!ct(s)&&!Ft(s)?a:s;return i.has.call(o,l)||Rt(s,l)&&i.has.call(o,s)||Rt(a,l)&&i.has.call(o,a)||(o.add(l),Nt(o,"add",l,l)),this},set(s,o){!t&&!ct(o)&&!Ft(o)&&(o=he(o));const i=he(this),{has:a,get:l}=rr(i);let c=a.call(i,s);c||(s=he(s),c=a.call(i,s));const u=l.call(i,s);return i.set(s,o),c?Rt(o,u)&&Nt(i,"set",s,o):Nt(i,"add",s,o),this},delete(s){const o=he(this),{has:i,get:a}=rr(o);let l=i.call(o,s);l||(s=he(s),l=i.call(o,s)),a&&a.call(o,s);const c=o.delete(s);return l&&Nt(o,"delete",s,void 0),c},clear(){const s=he(this),o=s.size!==0,i=s.clear();return o&&Nt(s,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Zl(s,e,t)}),n}function qs(e,t){const n=Jl(e,t);return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_isShallow"?t:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,o)}const Ql={get:qs(!1,!1)},ec={get:qs(!1,!0)},tc={get:qs(!0,!1)};const Vi=new WeakMap,qi=new WeakMap,Ui=new WeakMap,nc=new WeakMap;function rc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dr(e){return Ft(e)?e:Us(e,!1,Xl,Ql,Vi)}function Wi(e){return Us(e,!1,Yl,ec,qi)}function vs(e){return Us(e,!0,Kl,tc,Ui)}function Us(e,t,n,r,s){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=s.get(e);if(o)return o;const i=rc(Sl(e));if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function Jt(e){return Ft(e)?Jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function ct(e){return!!(e&&e.__v_isShallow)}function Ws(e){return e?!!e.__v_raw:!1}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function sc(e){return!ge(e,"__v_skip")&&Object.isExtensible(e)&&Ri(e,"__v_skip",!0),e}const dt=e=>ve(e)?Dr(e):e,Qt=e=>ve(e)?vs(e):e;function Ze(e){return e?e.__v_isRef===!0:!1}function oe(e){return Xi(e,!1)}function oc(e){return Xi(e,!0)}function Xi(e,t){return Ze(e)?e:new ic(e,t)}class ic{constructor(t,n){this.dep=new Vs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:he(t),this._value=n?t:dt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||ct(t)||Ft(t);t=r?t:he(t),Rt(t,n)&&(this._rawValue=t,this._value=r?t:dt(t),this.dep.trigger())}}function P(e){return Ze(e)?e.value:e}const ac={get:(e,t,n)=>t==="__v_raw"?e:P(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Ze(s)&&!Ze(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Ki(e){return Jt(e)?e:new Proxy(e,ac)}class lc{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Vs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return Ii(this,!0),!0}get value(){const t=this.dep.track();return Oi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function cc(e,t,n=!1){let r,s;return ae(e)?r=e:(r=e.get,s=e.set),new lc(r,s,n)}const or={},xr=new WeakMap;let ln;function uc(e,t=!1,n=ln){if(n){let r=xr.get(n);r||xr.set(n,r=[]),r.push(e)}}function dc(e,t,n=Ce){const{immediate:r,deep:s,once:o,scheduler:i,augmentJob:a,call:l}=n,c=y=>s?y:ct(y)||s===!1||s===0?Gt(y,1):Gt(y);let u,d,h,m,A=!1,v=!1;if(Ze(e)?(d=()=>e.value,A=ct(e)):Jt(e)?(d=()=>c(e),A=!0):ne(e)?(v=!0,A=e.some(y=>Jt(y)||ct(y)),d=()=>e.map(y=>{if(Ze(y))return y.value;if(Jt(y))return c(y);if(ae(y))return l?l(y,2):y()})):ae(e)?t?d=l?()=>l(e,2):e:d=()=>{if(h){Mt();try{h()}finally{$t()}}const y=ln;ln=u;try{return l?l(e,3,[m]):e(m)}finally{ln=y}}:d=Et,t&&s){const y=d,z=s===!0?1/0:s;d=()=>Gt(y(),z)}const R=Nl(),L=()=>{u.stop(),R&&R.active&&Bs(R.effects,u)};if(o&&t){const y=t;t=(...z)=>{try{return y(...z)}finally{L()}}}let b=v?new Array(e.length).fill(or):or;const x=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(t){const z=u.run();if(y||s||A||(v?z.some((E,O)=>Rt(E,b[O])):Rt(z,b))){const E=ln;Mt();try{h&&h(),ln=u;const O=[z,b===or?void 0:v&&b[0]===or?[]:b,m];b=z,l?l(t,3,O):t(...O)}finally{ln=E,$t()}}}else u.run()};return a&&a(x),u=new $i(d),u.scheduler=i?()=>i(x,!1):x,m=y=>uc(y,!1,u),h=u.onStop=()=>{const y=xr.get(u);if(y){if(l)l(y,4);else for(const z of y)z();xr.delete(u)}},t?r?x(!0):b=u.run():i?i(x.bind(null,!0),!0):u.run(),L.pause=u.pause.bind(u),L.resume=u.resume.bind(u),L.stop=L,L}function Gt(e,t=1/0,n){if(t<=0||!ve(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ze(e))Gt(e.value,t,n);else if(ne(e))for(let r=0;r<e.length;r++)Gt(e[r],t,n);else if(br(e)||Zt(e))e.forEach(r=>{Gt(r,t,n)});else if(Si(e)){for(const r in e)Gt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Gt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function er(e,t,n,r){try{return r?e(...r):e()}catch(s){Br(s,t,n)}}function ft(e,t,n,r){if(ae(e)){const s=er(e,t,n,r);return s&&Ci(s)&&s.catch(o=>{Br(o,t,n)}),s}if(ne(e)){const s=[];for(let o=0;o<e.length;o++)s.push(ft(e[o],t,n,r));return s}}function Br(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||Ce;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,c)===!1)return}a=a.parent}if(o){Mt(),er(o,null,10,[e,l,c]),$t();return}}fc(e,n,s,r,i)}function fc(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const tt=[];let mt=-1;const At=[];let Kt=null,gn=0;const Yi=Promise.resolve();let vr=null;function Zi(e){const t=vr||Yi;return e?t.then(this?e.bind(this):e):t}function pc(e){let t=mt+1,n=tt.length;for(;t<n;){const r=t+n>>>1,s=tt[r],o=Un(s);o<e||o===e&&s.flags&2?t=r+1:n=r}return t}function Xs(e){if(!(e.flags&1)){const t=Un(e),n=tt[tt.length-1];!n||!(e.flags&2)&&t>=Un(n)?tt.push(e):tt.splice(pc(t),0,e),e.flags|=1,Ji()}}function Ji(){vr||(vr=Yi.then(ta))}function mc(e){if(!ne(e))Kt&&e.id===-1?Kt.splice(gn+1,0,e):e.flags&1||(At.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)At.push(e[t]);Ji()}function Qi(e,t,n,r=mt+1){for(;r<tt.length;r++){const s=tt[r];if(s&&s.flags&2){if(e&&s.id!==e.uid||t!==void 0&&!(s.id>=t))continue;tt.splice(r,1),r=e?r-1:mt,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ea(e,t,n=0){if(At.length){let r=At,s=0;if(t){r=[];for(let i=0;i<At.length;i++){const a=At[i];(a.i!==void 0?!a.i||a.i.uid<n:t.has(a))?At[s++]=a:r.push(a)}}const o=[...new Set(r)].sort((i,a)=>Un(i)-Un(a));if(At.length=s,Kt){for(let i=0;i<o.length;i++)Kt.push(o[i]);return}for(Kt=o,gn=0;gn<Kt.length;gn++){const i=Kt[gn];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}Kt=null,gn=0}}let Qr=!1;function hc(e,t){if(Qr){e();return}const n=t===void 0?void 0:new Set(At);e(),Qr=!0;try{Qi(void 0,t),ea(void 0,n,t)}finally{Qr=!1}}const Un=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ta(e){try{for(mt=0;mt<tt.length;mt++){const t=tt[mt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),er(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;mt<tt.length;mt++){const t=tt[mt];t&&(t.flags&=-2)}mt=-1,tt.length=0,ea(),vr=null,(tt.length||At.length)&&ta()}}let Ve=null,na=null;function yr(e){const t=Ve;return Ve=e,na=e&&e.type.__scopeId||null,t}function Z(e,t=Ve,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&zr(-1);const o=yr(t),i=Vt.length;let a;try{a=e(...s)}finally{for(let l=Vt.length;l>i;l--)Js();yr(o),r._d&&zr(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function es(e,t){if(Ve===null)return e;const n=qr(Ve),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,i,a,l=Ce]=t[s];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&Gt(i),r.push({dir:o,instance:n,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function nn(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let l=a.dir[r];l&&(Mt(),ft(l,n,8,[e.el,a,e,t]),$t())}}function dr(e,t){if(Ke){let n=Ke.provides;const r=Ke.parent&&Ke.parent.provides;r===n&&(n=Ke.provides=Object.create(r)),n[e]=t}}function Tt(e,t,n=!1){const r=Qs();if(r||vn){let s=vn?vn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ae(t)?t.call(r&&r.proxy):t}}const gc=Symbol.for("v-scx"),bc=()=>Tt(gc);function Ht(e,t,n){return ra(e,t,n)}function ra(e,t,n=Ce){const{immediate:r,deep:s,flush:o,once:i}=n,a=Le({},n),l=t&&r||!t&&o!=="post";let c;if(Yn){if(o==="sync"){const m=bc();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Et,m.resume=Et,m.pause=Et,m}}const u=Ke;a.call=(m,A,v)=>ft(m,u,A,v);let d=!1;o==="post"?a.scheduler=m=>{m.i=u,rt(m,u&&u.suspense)}:o!=="sync"&&(d=!0,a.scheduler=(m,A)=>{A?m():Xs(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=dc(e,t,a);return Yn&&(c?c.push(h):l&&h()),h}function xc(e,t,n){const r=this.proxy,s=Te(e)?e.includes(".")?sa(r,e):()=>r[e]:e.bind(r,r);let o;ae(t)?o=t:(o=t.handler,n=t);const i=nr(this),a=ra(s,o.bind(r),n);return i(),a}function sa(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const vc=Symbol("_vte"),jr=e=>e.__isTeleport,lt=Symbol("_leaveCb"),Sn=Symbol("_enterCb");function yc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xt(()=>{e.isMounted=!0}),da(()=>{e.isUnmounting=!0}),e}const at=[Function,Array],oa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:at,onEnter:at,onAfterEnter:at,onEnterCancelled:at,onBeforeLeave:at,onLeave:at,onAfterLeave:at,onLeaveCancelled:at,onBeforeAppear:at,onAppear:at,onAfterAppear:at,onAppearCancelled:at},wc={name:"BaseTransition",props:oa,setup(e,{slots:t}){const n=Qs(),r=yc();return()=>{const s=t.default&&la(t.default(),!0),o=s&&s.length?ia(s):n.subTree?Ye():void 0;if(!o)return;const i=he(e),{mode:a}=i;if(r.isLeaving)return ts(o);const l=wr(o);if(!l)return ts(o);let c=ys(l,i,r,n,d=>c=d);l.type!==qe&&yn(l,c);let u=n.subTree&&wr(n.subTree);if(u&&u.type!==qe&&!cn(u,l)&&Wn(n.subTree)){let d=ys(u,i,r,n);if(yn(u,d),a==="out-in"&&l.type!==qe)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},ts(o);a==="in-out"&&l.type!==qe?d.delayLeave=(h,m,A)=>{const v=aa(r,u);v[String(u.key)]=u,h[lt]=()=>{m(),h[lt]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{A(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function ia(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==qe){t=n;break}}return t}const kc=wc;function aa(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ys(e,t,n,r,s){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:m,onAfterLeave:A,onLeaveCancelled:v,onBeforeAppear:R,onAppear:L,onAfterAppear:b,onAppearCancelled:x}=t,y=String(e.key),z=aa(n,e),E=(M,Y)=>{M&&ft(M,r,9,Y)},O=(M,Y)=>{const re=Y[1];E(M,Y),ne(M)?M.every(N=>N.length<=1)&&re():M.length<=1&&re()},T={mode:i,persisted:a,beforeEnter(M){let Y=l;if(!n.isMounted)if(o)Y=R||l;else return;M[lt]&&M[lt](!0);const re=z[y];if(re&&cn(e,re)){let N=re.el[lt];if(!N){const le=Wn(re);N=le&&le.el[lt]}N&&N()}E(Y,[M])},enter(M){if(z[y]===e)return;let Y=c,re=u,N=d;if(!n.isMounted)if(o)Y=L||c,re=b||u,N=x||d;else return;let le=!1;M[Sn]=Me=>{le||(le=!0,Me?E(N,[M]):E(re,[M]),T.delayedLeave&&T.delayedLeave(),M[Sn]=void 0)};const Re=M[Sn].bind(null,!1);Y?O(Y,[M,Re]):Re()},leave(M,Y){const re=String(e.key);if(M[Sn]&&M[Sn](!0),n.isUnmounting)return Y();E(h,[M]);let N=!1;M[lt]=Re=>{N||(N=!0,Y(),Re?E(v,[M]):E(A,[M]),M[lt]=void 0,z[re]===e&&delete z[re])};const le=M[lt].bind(null,!1);z[re]=e,m?O(m,[M,le]):le()},clone(M){const Y=ys(M,t,n,r,s);return s&&s(Y),Y}};return T}function ts(e){if(Nr(e))return e=en(e),e.children=null,e}function wr(e){if(!Nr(e))return jr(e.type)&&e.children?ia(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ae(n.default))return n.default()}}function yn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;yn(jr(n.type)&&wr(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===ke&&ne(e.children)){const n=ya(e.children,!1);n&&yn(n,t)}}function la(e,t=!1,n){let r=[],s=0;for(let o=0;o<e.length;o++){let i=e[o];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===ke?(i.patchFlag&128&&s++,r=r.concat(la(i.children,t,a))):(t||i.type!==qe)&&r.push(a!=null?en(i,{key:a}):i)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function Wn(e){if(e.component)return Wn(e.component.subTree);if(e.type===ke){const t=ne(e.children)&&ya(e.children,!1);return t?Wn(t):void 0}if(e.type!==qe)return e}function ye(e,t){return ae(e)?Le({name:e.name},t,{setup:e}):e}function Ks(){const e=Qs();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function ca(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function bo(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const kr=new WeakMap;function Dn(e,t,n,r,s=!1){if(ne(e)){e.forEach((v,R)=>Dn(v,t&&(ne(t)?t[R]:t),n,r,s));return}if(xn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Dn(e,t,n,r.component.subTree);return}const o=r.shapeFlag&4?qr(r.component):r.el,i=s?null:o,{i:a,r:l}=e,c=t&&t.r,u=a.refs===Ce?a.refs={}:a.refs,d=a.setupState,h=he(d),m=d===Ce?zi:v=>bo(u,v)?!1:ge(h,v),A=(v,R)=>!(R&&bo(u,R));if(c!=null&&c!==l){if(xo(t),Te(c))u[c]=null,m(c)&&(d[c]=null);else if(Ze(c)){const v=t;A(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(ae(l))er(l,a,12,[i,u]);else{const v=Te(l),R=Ze(l);if(v||R){const L=()=>{if(e.f){const b=v?m(l)?d[l]:u[l]:A()||!e.k?l.value:u[e.k];if(s)ne(b)&&Bs(b,o);else if(ne(b))b.includes(o)||b.push(o);else if(v)u[l]=[o],m(l)&&(d[l]=u[l]);else{const x=[o];A(l,e.k)&&(l.value=x),e.k&&(u[e.k]=x)}}else v?(u[l]=i,m(l)&&(d[l]=i)):R&&(A(l,e.k)&&(l.value=i),e.k&&(u[e.k]=i))};if(i){const b=()=>{L(),kr.delete(e)};b.id=-1,kr.set(e,b),rt(b,n)}else xo(e),L()}}}function xo(e){const t=kr.get(e);t&&(t.flags|=8,kr.delete(e))}Pr().requestIdleCallback;Pr().cancelIdleCallback;const xn=e=>!!e.type.__asyncLoader,Nr=e=>e.type.__isKeepAlive;function _c(e,t){ua(e,"a",t)}function zc(e,t){ua(e,"da",t)}function ua(e,t,n=Ke){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Gr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Nr(s.parent.vnode)&&Cc(r,t,n,s),s=s.parent}}function Cc(e,t,n,r){const s=Gr(t,e,r,!0);It(()=>{Bs(r[t],s)},n)}function Gr(e,t,n=Ke,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{Mt();const a=nr(n),l=ft(t,n,e,i);return a(),$t(),l});return r?s.unshift(o):s.push(o),o}}const qt=e=>(t,n=Ke)=>{(!Yn||e==="sp")&&Gr(e,(...r)=>t(...r),n)},Ac=qt("bm"),xt=qt("m"),Sc=qt("bu"),Rc=qt("u"),da=qt("bum"),It=qt("um"),Ec=qt("sp"),Tc=qt("rtg"),Mc=qt("rtc");function $c(e,t=Ke){Gr("ec",e,t)}const fa="components";function tr(e,t){return ma(fa,e,!0,t)||e}const pa=Symbol.for("v-ndc");function vo(e){return Te(e)?ma(fa,e,!1)||e:e||pa}function ma(e,t,n=!0,r=!1){const s=Ve||Ke;if(s){const o=s.type;{const a=hu(o,!1);if(a&&(a===t||a===nt(t)||a===Ir(nt(t))))return o}const i=yo(s[e]||o[e],t)||yo(s.appContext[e],t);return!i&&r?o:i}}function yo(e,t){return e&&(e[t]||e[nt(t)]||e[Ir(nt(t))])}function it(e,t,n,r){let s;const o=n,i=ne(e);if(i||Te(e)){const a=i&&Jt(e);let l=!1,c=!1;a&&(l=!ct(e),c=Ft(e),e=Or(e)),s=new Array(e.length);for(let u=0,d=e.length;u<d;u++)s[u]=t(l?c?Qt(dt(e[u])):dt(e[u]):e[u],u,void 0,o)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)s=[];else{s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,o)}else if(ve(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,o));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(e[u],u,l,o)}}else s=[];return s}function ut(e,t,n,r,s,o){if(n==null&&(n={}),Ve.ce||Ve.parent&&xn(Ve.parent)&&Ve.parent.ce){const c=o!=null&&n.key==null?Le({},n,{key:o}):n,u=Object.keys(c).length>0;return t!=="default"&&(c.name=t),$(),Be(ke,null,[k("slot",c,r&&r())],u?-2:64)}let i=e[t];i&&i._c&&(i._d=!1);const a=Vt.length;$();let l;try{const c=i&&ha(i(n)),u=n.key||o||c&&c.key;l=Be(ke,{key:(u&&!gt(u)?u:`_${t}`)+(!c&&r?"_fb":"")},c||(r?r():[]),c&&e._===1?64:-2)}catch(c){for(let u=Vt.length;u>a;u--)Js();throw c}finally{i&&i._c&&(i._d=!0)}return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function ha(e){return e.some(t=>wn(t)?!(t.type===qe||t.type===ke&&!ha(t.children)):!0)?e:null}const ws=e=>e?La(e)?qr(e):ws(e.parent):null,Bn=Le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ws(e.parent),$root:e=>ws(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ba(e),$forceUpdate:e=>e.f||(e.f=()=>{Xs(e.update)}),$nextTick:e=>e.n||(e.n=Zi.bind(e.proxy)),$watch:e=>xc.bind(e)}),ns=(e,t)=>e!==Ce&&!e.__isScriptSetup&&ge(e,t),Fc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:l}=e;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(ns(r,t))return i[t]=1,r[t];if(s!==Ce&&ge(s,t))return i[t]=2,s[t];if(ge(o,t))return i[t]=3,o[t];if(n!==Ce&&ge(n,t))return i[t]=4,n[t];ks&&(i[t]=0)}}const c=Bn[t];let u,d;if(c)return t==="$attrs"&&We(e.attrs,"get",""),c(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==Ce&&ge(n,t))return i[t]=4,n[t];if(d=l.config.globalProperties,ge(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return ns(s,t)?(s[t]=n,!0):r!==Ce&&ge(r,t)?(r[t]=n,!0):ge(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:o,type:i}},a){let l;return!!(n[a]||e!==Ce&&a[0]!=="$"&&ge(e,a)||ns(t,a)||ge(o,a)||ge(r,a)||ge(Bn,a)||ge(s.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ge(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function wo(e){return ne(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ks=!0;function Ic(e){const t=ba(e),n=e.proxy,r=e.ctx;ks=!1,t.beforeCreate&&ko(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:A,activated:v,deactivated:R,beforeDestroy:L,beforeUnmount:b,destroyed:x,unmounted:y,render:z,renderTracked:E,renderTriggered:O,errorCaptured:T,serverPrefetch:M,expose:Y,inheritAttrs:re,components:N,directives:le,filters:Re}=t;if(c&&Pc(c,r,null),i)for(const ce in i){const te=i[ce];ae(te)&&(r[ce]=te.bind(n))}if(s){const ce=s.call(n,n);ve(ce)&&(e.data=Dr(ce))}if(ks=!0,o)for(const ce in o){const te=o[ce],Ee=ae(te)?te.bind(n,n):ae(te.get)?te.get.bind(n,n):Et,W=!ae(te)&&ae(te.set)?te.set.bind(n):Et,je=Ae({get:Ee,set:W});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>je.value,set:be=>je.value=be})}if(a)for(const ce in a)ga(a[ce],r,n,ce);if(l){const ce=ae(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(te=>{dr(te,ce[te])})}u&&ko(u,e,"c");function de(ce,te){ne(te)?te.forEach(Ee=>ce(Ee.bind(n))):te&&ce(te.bind(n))}if(de(Ac,d),de(xt,h),de(Sc,m),de(Rc,A),de(_c,v),de(zc,R),de($c,T),de(Mc,E),de(Tc,O),de(da,b),de(It,y),de(Ec,M),ne(Y))if(Y.length){const ce=e.exposed||(e.exposed={});Y.forEach(te=>{Object.defineProperty(ce,te,{get:()=>n[te],set:Ee=>n[te]=Ee,enumerable:!0})})}else e.exposed||(e.exposed={});z&&e.render===Et&&(e.render=z),re!=null&&(e.inheritAttrs=re),N&&(e.components=N),le&&(e.directives=le),M&&ca(e)}function Pc(e,t,n=Et){ne(e)&&(e=_s(e));for(const r in e){const s=e[r];let o;ve(s)?"default"in s?o=Tt(s.from||r,s.default,!0):o=Tt(s.from||r):o=Tt(s),Ze(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function ko(e,t,n){ft(ne(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ga(e,t,n,r){let s=r.includes(".")?sa(n,r):()=>n[r];if(Te(e)){const o=t[e];ae(o)&&Ht(s,o)}else if(ae(e))Ht(s,e.bind(n));else if(ve(e))if(ne(e))e.forEach(o=>ga(o,t,n,r));else{const o=ae(e.handler)?e.handler.bind(n):t[e.handler];ae(o)&&Ht(s,o,e)}}function ba(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(c=>_r(l,c,i,!0)),_r(l,t,i)),ve(t)&&o.set(t,l),l}function _r(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&_r(e,o,n,!0),s&&s.forEach(i=>_r(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=Lc[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Lc={data:_o,props:zo,emits:zo,methods:$n,computed:$n,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:$n,directives:$n,watch:Dc,provide:_o,inject:Oc};function _o(e,t){return t?e?function(){return Le(ae(e)?e.call(this,this):e,ae(t)?t.call(this,this):t)}:t:e}function Oc(e,t){return $n(_s(e),_s(t))}function _s(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Je(e,t){return e?[...new Set([].concat(e,t))]:t}function $n(e,t){return e?Le(Object.create(null),e,t):t}function zo(e,t){return e?ne(e)&&ne(t)?[...new Set([...e,...t])]:Le(Object.create(null),wo(e),wo(t??{})):t}function Dc(e,t){if(!e)return t;if(!t)return e;const n=Le(Object.create(null),e);for(const r in t)n[r]=Je(e[r],t[r]);return n}function xa(){return{app:null,config:{isNativeTag:zi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bc=0;function jc(e,t){return function(r,s=null){ae(r)||(r=Le({},r)),s!=null&&!ve(s)&&(s=null);const o=xa(),i=new WeakSet,a=[];let l=!1;const c=o.app={_uid:Bc++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:bu,get config(){return o.config},set config(u){},use(u,...d){return i.has(u)||(u&&ae(u.install)?(i.add(u),u.install(c,...d)):ae(u)&&(i.add(u),u(c,...d))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,d){return d?(o.components[u]=d,c):o.components[u]},directive(u,d){return d?(o.directives[u]=d,c):o.directives[u]},mount(u,d,h){if(!l){const m=c._ceVNode||k(r,s);return m.appContext=o,h===!0?h="svg":h===!1&&(h=void 0),e(m,u,h),l=!0,c._container=u,u.__vue_app__=c,qr(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ft(a,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return o.provides[u]=d,c},runWithContext(u){const d=vn;vn=c;try{return u()}finally{vn=d}}};return c}}let vn=null;const Nc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${nt(t)}Modifiers`]||e[`${pn(t)}Modifiers`];function Gc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Ce;let s=n;const o=t.startsWith("update:"),i=o&&Nc(r,t.slice(7));i&&(i.trim&&(s=n.map(u=>Te(u)?u.trim():u)),i.number&&(s=s.map(Tl)));let a,l=r[a=Wr(t)]||r[a=Wr(nt(t))];!l&&o&&(l=r[a=Wr(pn(t))]),l&&ft(l,e,6,s);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ft(c,e,6,s)}}const Hc=new WeakMap;function va(e,t,n=!1){const r=n?Hc:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!ae(e)){const l=c=>{const u=va(c,t,!0);u&&(a=!0,Le(i,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(ve(e)&&r.set(e,null),null):(ne(o)?o.forEach(l=>i[l]=null):Le(i,o),ve(e)&&r.set(e,i),i)}function Hr(e,t){return!e||!Mr(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ge(e,t[0].toLowerCase()+t.slice(1))||ge(e,pn(t))||ge(e,t))}function Co(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:i,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:m,ctx:A,inheritAttrs:v}=e,R=yr(e);let L,b;try{if(n.shapeFlag&4){const y=s||r,z=y;L=St(c.call(z,y,u,d,m,h,A)),b=a}else{const y=t;L=St(y.length>1?y(d,{attrs:a,slots:i,emit:l}):y(d,null)),b=t.props?a:Vc(a)}}catch(y){Vt.length=0,Br(y,e,1),L=k(qe)}let x=L;if(b&&v!==!1){const y=Object.keys(b),{shapeFlag:z}=x;y.length&&z&7&&(o&&y.some($r)&&(b=qc(b,o)),x=en(x,b,!1,!0))}if(n.dirs&&(x=en(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition){const y=jr(x.type)&&wr(x)||x;yn(y,n.transition)}return L=x,yr(R),L}function ya(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(wn(s)){if(s.type!==qe||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Vc=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mr(n))&&((t||(t={}))[n]=e[n]);return t},qc=(e,t)=>{const n={};for(const r in e)(!$r(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Uc(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ao(r,i,c):!!i;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(wa(i,r,h)&&!Hr(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Ao(r,i,c):!0:!!i;return!1}function Ao(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(!ge(e,o)||wa(t,e,o)&&!Hr(n,o))return!0}return!1}function wa(e,t,n){const r=e[n],s=t[n];return n==="style"&&ve(r)&&ve(s)?!Lr(r,s):r!==s}function Wc({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const ka={},_a=()=>Object.create(ka),za=e=>Object.getPrototypeOf(e)===ka;function Xc(e,t,n,r=!1){const s={},o=_a();e.propsDefaults=Object.create(null),Ca(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Wi(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Kc(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=he(s),[l]=e.propsOptions;let c=!1;if((r||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Hr(e.emitsOptions,h))continue;const m=t[h];if(l)if(ge(o,h))m!==o[h]&&(o[h]=m,c=!0);else{const A=nt(h);s[A]=zs(l,a,A,m,e,!1)}else m!==o[h]&&(o[h]=m,c=!0)}}}else{Ca(e,t,s,o)&&(c=!0);let u;for(const d in a)(!t||!ge(t,d)&&((u=pn(d))===d||!ge(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=zs(l,a,d,void 0,e,!0)):delete s[d]);if(o!==a)for(const d in o)(!t||!ge(t,d))&&(delete o[d],c=!0)}c&&Nt(e.attrs,"set","")}function Ca(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(Pn(l))continue;const c=t[l];let u;s&&ge(s,u=nt(l))?!o||!o.includes(u)?n[u]=c:(a||(a={}))[u]=c:Hr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,i=!0)}if(o){const l=he(n),c=a||Ce;for(let u=0;u<o.length;u++){const d=o[u];n[d]=zs(s,l,d,c[d],e,!ge(c,d))}}return i}function zs(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=ge(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&ae(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=nr(s);r=c[n]=l.call(null,t),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===pn(n))&&(r=!0))}return r}const Yc=new WeakMap;function Aa(e,t,n=!1){const r=n?Yc:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let l=!1;if(!ae(e)){const u=d=>{l=!0;const[h,m]=Aa(d,t,!0);Le(i,h),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return ve(e)&&r.set(e,un),un;if(ne(o))for(let u=0;u<o.length;u++){const d=nt(o[u]);So(d)&&(i[d]=Ce)}else if(o)for(const u in o){const d=nt(u);if(So(d)){const h=o[u],m=i[d]=ne(h)||ae(h)?{type:h}:Le({},h),A=m.type;let v=!1,R=!0;if(ne(A))for(let L=0;L<A.length;++L){const b=A[L],x=ae(b)&&b.name;if(x==="Boolean"){v=!0;break}else x==="String"&&(R=!1)}else v=ae(A)&&A.name==="Boolean";m[0]=v,m[1]=R,(v||ge(m,"default"))&&a.push(d)}}const c=[i,a];return ve(e)&&r.set(e,c),c}function So(e){return e[0]!=="$"&&!Pn(e)}const Ys=e=>e==="_"||e==="_ctx"||e==="$stable",Zs=e=>ne(e)?e.map(St):[St(e)],Zc=(e,t,n)=>{if(t._n)return t;const r=Z((...s)=>Zs(t(...s)),n);return r._c=!1,r},Sa=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ys(s))continue;const o=e[s];if(ae(o))t[s]=Zc(s,o,r);else if(o!=null){const i=Zs(o);t[s]=()=>i}}},Ra=(e,t)=>{const n=Zs(t);e.slots.default=()=>n},Ea=(e,t,n)=>{for(const r in t)(n||!Ys(r))&&(e[r]=t[r])},Jc=(e,t,n)=>{const r=e.slots=_a();if(e.vnode.shapeFlag&32){const s=t._;s?(Ea(r,t,n),n&&Ri(r,"_",s,!0)):Sa(t,r)}else t&&Ra(e,t)},Qc=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=Ce;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:Ea(s,t,n):(o=!t.$stable,Sa(t,s)),i=t}else t&&(Ra(e,t),i={default:1});if(o)for(const a in s)!Ys(a)&&i[a]==null&&delete s[a]},rt=su;function eu(e){return tu(e)}function tu(e,t){const n=Pr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=Et,insertStaticContent:A}=e,v=(p,g,w,_=null,C=null,F=null,B=void 0,H=null,G=!!g.dynamicChildren)=>{if(p===g)return;p&&!cn(p,g)&&(_=S(p),be(p,C,F,!0),p=null),g.patchFlag===-2&&(G=!1,g.dynamicChildren=null),g.dynamicChildren&&p&&p.dynamicChildren&&p.dynamicChildren.hasOnce&&(g.dynamicChildren===un&&(g.dynamicChildren=[]),g.dynamicChildren.hasOnce=!0);const{type:I,ref:Q,shapeFlag:q}=g;switch(I){case Vr:R(p,g,w,_);break;case qe:L(p,g,w,_);break;case fr:p==null&&b(g,w,_,B);break;case ke:N(p,g,w,_,C,F,B,H,G);break;default:q&1?z(p,g,w,_,C,F,B,H,G):q&6?le(p,g,w,_,C,F,B,H,G):(q&64||q&128)&&I.process(p,g,w,_,C,F,B,H,G,D)}Q!=null&&C?Dn(Q,p&&p.ref,F,g||p,!g):Q==null&&p&&p.ref!=null&&Dn(p.ref,null,F,p,!0)},R=(p,g,w,_)=>{if(p==null)r(g.el=a(g.children),w,_);else{const C=g.el=p.el;g.children!==p.children&&c(C,g.children)}},L=(p,g,w,_)=>{p==null?r(g.el=l(g.children||""),w,_):g.el=p.el},b=(p,g,w,_)=>{[p.el,p.anchor]=A(p.children,g,w,_,p.el,p.anchor)},x=({el:p,anchor:g},w,_)=>{let C;for(;p&&p!==g;)C=h(p),r(p,w,_),p=C;r(g,w,_)},y=({el:p,anchor:g})=>{let w;for(;p&&p!==g;)w=h(p),s(p),p=w;s(g)},z=(p,g,w,_,C,F,B,H,G)=>{if(g.type==="svg"?B="svg":g.type==="math"&&(B="mathml"),p==null)E(g,w,_,C,F,B,H,G);else{const I=p.el&&p.el._isVueCE?p.el:null;try{I&&I._beginPatch(),M(p,g,C,F,B,H,G)}finally{I&&I._endPatch()}}},E=(p,g,w,_,C,F,B,H)=>{let G,I;const{props:Q,shapeFlag:q,transition:ee,dirs:se}=p;if(G=p.el=i(p.type,F,Q&&Q.is,Q),q&8?u(G,p.children):q&16&&T(p.children,G,null,_,C,rs(p,F),B,H),se&&nn(p,null,_,"created"),O(G,p,p.scopeId,B,_),Q){for(const ze in Q)ze!=="value"&&!Pn(ze)&&o(G,ze,null,Q[ze],F,_);"value"in Q&&o(G,"value",null,Q.value,F),(I=Q.onVnodeBeforeMount)&&_t(I,_,p)}se&&nn(p,null,_,"beforeMount");const me=nu(C,ee);me&&ee.beforeEnter(G),r(G,g,w),((I=Q&&Q.onVnodeMounted)||me||se)&&rt(()=>{try{I&&_t(I,_,p),me&&ee.enter(G),se&&nn(p,null,_,"mounted")}finally{}},C)},O=(p,g,w,_,C)=>{if(w&&m(p,w),_)for(let F=0;F<_.length;F++)m(p,_[F]);if(C){let F=C.subTree;if(g===F||$a(F.type)&&(F.ssContent===g||F.ssFallback===g)){const B=C.vnode;O(p,B,B.scopeId,B.slotScopeIds,C.parent)}}},T=(p,g,w,_,C,F,B,H,G=0)=>{for(let I=G;I<p.length;I++){const Q=p[I]=H?jt(p[I]):St(p[I]);v(null,Q,g,w,_,C,F,B,H)}},M=(p,g,w,_,C,F,B)=>{const H=g.el=p.el;let{patchFlag:G,dynamicChildren:I,dirs:Q}=g;G|=p.patchFlag&16;const q=p.props||Ce,ee=g.props||Ce;let se;if(w&&rn(w,!1),(se=ee.onVnodeBeforeUpdate)&&_t(se,w,g,p),Q&&nn(g,p,w,"beforeUpdate"),w&&rn(w,!0),I&&(!p.dynamicChildren||p.dynamicChildren.length!==I.length)&&(G=0,B=!1,I=null),(q.innerHTML&&ee.innerHTML==null||q.textContent&&ee.textContent==null)&&u(H,""),I?Y(p.dynamicChildren,I,H,w,_,rs(g,C),F):B||te(p,g,H,null,w,_,rs(g,C),F,!1),G>0){if(G&16)re(H,q,ee,w,C);else if(G&2&&q.class!==ee.class&&o(H,"class",null,ee.class,C),G&4&&o(H,"style",q.style,ee.style,C),G&8){const me=g.dynamicProps;for(let ze=0;ze<me.length;ze++){const _e=me[ze],Pe=q[_e],Ne=ee[_e];(Ne!==Pe||_e==="value")&&o(H,_e,Pe,Ne,C,w)}}G&1&&p.children!==g.children&&u(H,g.children)}else!B&&I==null&&re(H,q,ee,w,C);((se=ee.onVnodeUpdated)||Q)&&rt(()=>{se&&_t(se,w,g,p),Q&&nn(g,p,w,"updated")},_)},Y=(p,g,w,_,C,F,B)=>{for(let H=0;H<g.length;H++){const G=p[H],I=g[H],Q=G.el||Cs(G),q=Q&&(G.type===ke||!cn(G,I)||G.shapeFlag&198)?d(Q):w;v(G,I,q,null,_,C,F,B,!0)}},re=(p,g,w,_,C)=>{if(g!==w){if(g!==Ce)for(const F in g)!Pn(F)&&!(F in w)&&o(p,F,g[F],null,C,_);for(const F in w){if(Pn(F))continue;const B=w[F],H=g[F];B!==H&&F!=="value"&&o(p,F,H,B,C,_)}"value"in w&&o(p,"value",g.value,w.value,C)}},N=(p,g,w,_,C,F,B,H,G)=>{const I=g.el=p?p.el:a(""),Q=g.anchor=p?p.anchor:a("");let{patchFlag:q,dynamicChildren:ee,slotScopeIds:se}=g;se&&(H=H?H.concat(se):se),p==null?(r(I,w,_),r(Q,w,_),T(g.children||[],w,Q,C,F,B,H,G)):q>0&&q&64&&ee&&p.dynamicChildren&&p.dynamicChildren.length===ee.length?(Y(p.dynamicChildren,ee,w,C,F,B,H),(g.key!=null||C&&g===C.subTree)&&Ta(p,g,!0)):te(p,g,w,Q,C,F,B,H,G)},le=(p,g,w,_,C,F,B,H,G)=>{g.slotScopeIds=H,p==null?g.shapeFlag&512?C.ctx.activate(g,w,_,B,G):Re(g,w,_,C,F,B,G):Me(p,g,G)},Re=(p,g,w,_,C,F,B)=>{const H=p.component=uu(p,_,C);if(Nr(p)&&(H.ctx.renderer=D),du(H,!1,B),H.asyncDep){if(C&&C.registerDep(H,de,B,F),!p.el){const G=H.subTree=k(qe);L(null,G,g,w),p.placeholder=G.el}}else de(H,p,g,w,C,F,B)},Me=(p,g,w)=>{const _=g.component=p.component;if(Uc(p,g,w))if(_.asyncDep&&!_.asyncResolved){g.el=p.el,g.placeholder=p.placeholder,ce(_,g,w);return}else _.next=g,_.update();else g.el=p.el,g.placeholder=p.placeholder,_.vnode=g},de=(p,g,w,_,C,F,B)=>{const H=()=>{if(p.isMounted){let{next:q,bu:ee,u:se,parent:me,vnode:ze}=p;{const wt=Ma(p);if(wt){q&&(q.el=ze.el,ce(p,q,B)),wt.asyncDep.then(()=>{rt(()=>{p.isUnmounted||I()},C)});return}}let _e=q,Pe;rn(p,!1),q?(q.el=ze.el,ce(p,q,B)):q=ze,ee&&Xr(ee),(Pe=q.props&&q.props.onVnodeBeforeUpdate)&&_t(Pe,me,q,ze),rn(p,!0);const Ne=Co(p),yt=p.subTree;p.subTree=Ne,v(yt,Ne,d(yt.el),S(yt),p,C,F),q.el=Ne.el,_e===null&&Wc(p,Ne.el),se&&rt(se,C),(Pe=q.props&&q.props.onVnodeUpdated)&&rt(()=>_t(Pe,me,q,ze),C)}else{let q;const{el:ee,props:se}=g,{bm:me,m:ze,parent:_e,root:Pe,type:Ne}=p,yt=xn(g);rn(p,!1),me&&Xr(me),!yt&&(q=se&&se.onVnodeBeforeMount)&&_t(q,_e,g),rn(p,!0);{Pe.ce&&Pe.ce._hasShadowRoot()&&Pe.ce._injectChildStyle(Ne,p.parent?p.parent.type:void 0);const wt=p.subTree=Co(p);v(null,wt,w,_,p,C,F),g.el=wt.el}if(ze&&rt(ze,C),!yt&&(q=se&&se.onVnodeMounted)){const wt=g;rt(()=>_t(q,_e,wt),C)}(g.shapeFlag&256||_e&&xn(_e.vnode)&&_e.vnode.shapeFlag&256)&&p.a&&rt(p.a,C),p.isMounted=!0,g=w=_=null}};p.scope.on();const G=p.effect=new $i(H);p.scope.off();const I=p.update=G.run.bind(G),Q=p.job=G.runIfDirty.bind(G);Q.i=p,Q.id=p.uid,G.scheduler=()=>Xs(Q),rn(p,!0),I()},ce=(p,g,w)=>{g.component=p;const _=p.vnode.props;p.vnode=g,p.next=null,Kc(p,g.props,_,w),Qc(p,g.children,w),Mt(),Qi(p),$t()},te=(p,g,w,_,C,F,B,H,G=!1)=>{const I=p&&p.children,Q=p?p.shapeFlag:0,q=g.children,{patchFlag:ee,shapeFlag:se}=g;if(ee>0){if(ee&128){W(I,q,w,_,C,F,B,H,G);return}else if(ee&256){Ee(I,q,w,_,C,F,B,H,G);return}}se&8?(Q&16&&pe(I,C,F),q!==I&&u(w,q)):Q&16?se&16?W(I,q,w,_,C,F,B,H,G):pe(I,C,F,!0):(Q&8&&u(w,""),se&16&&T(q,w,_,C,F,B,H,G))},Ee=(p,g,w,_,C,F,B,H,G)=>{p=p||un,g=g||un;const I=p.length,Q=g.length,q=Math.min(I,Q);let ee;for(ee=0;ee<q;ee++){const se=g[ee]=G?jt(g[ee]):St(g[ee]);v(p[ee],se,w,null,C,F,B,H,G)}I>Q?pe(p,C,F,!0,!1,q):T(g,w,_,C,F,B,H,G,q)},W=(p,g,w,_,C,F,B,H,G)=>{let I=0;const Q=g.length;let q=p.length-1,ee=Q-1;for(;I<=q&&I<=ee;){const se=p[I],me=g[I]=G?jt(g[I]):St(g[I]);if(cn(se,me))v(se,me,w,null,C,F,B,H,G);else break;I++}for(;I<=q&&I<=ee;){const se=p[q],me=g[ee]=G?jt(g[ee]):St(g[ee]);if(cn(se,me))v(se,me,w,null,C,F,B,H,G);else break;q--,ee--}if(I>q){if(I<=ee){const se=ee+1,me=se<Q?g[se].el:_;for(;I<=ee;)v(null,g[I]=G?jt(g[I]):St(g[I]),w,me,C,F,B,H,G),I++}}else if(I>ee)for(;I<=q;)be(p[I],C,F,!0),I++;else{const se=I,me=I,ze=new Map;for(I=me;I<=ee;I++){const st=g[I]=G?jt(g[I]):St(g[I]);st.key!=null&&ze.set(st.key,I)}let _e,Pe=0;const Ne=ee-me+1;let yt=!1,wt=0;const Cn=new Array(Ne);for(I=0;I<Ne;I++)Cn[I]=0;for(I=se;I<=q;I++){const st=p[I];if(Pe>=Ne){be(st,C,F,!0);continue}let kt;if(st.key!=null)kt=ze.get(st.key);else for(_e=me;_e<=ee;_e++)if(Cn[_e-me]===0&&cn(st,g[_e])){kt=_e;break}kt===void 0?be(st,C,F,!0):(Cn[kt-me]=I+1,kt>=wt?wt=kt:yt=!0,v(st,g[kt],w,null,C,F,B,H,G),Pe++)}const io=yt?ru(Cn):un;for(_e=io.length-1,I=Ne-1;I>=0;I--){const st=me+I,kt=g[st],ao=g[st+1],lo=st+1<Q?ao.el||Cs(ao):_;Cn[I]===0?v(null,kt,w,lo,C,F,B,H,G):yt&&(_e<0||I!==io[_e]?je(kt,w,lo,2):_e--)}}},je=(p,g,w,_,C=null)=>{const{el:F,type:B,transition:H,children:G,shapeFlag:I}=p;if(I&6){je(p.component.subTree,g,w,_);return}if(I&128){p.suspense.move(g,w,_);return}if(I&64){B.move(p,g,w,D);return}if(B===ke){r(F,g,w);for(let q=0;q<G.length;q++)je(G[q],g,w,_);r(p.anchor,g,w);return}if(B===fr){x(p,g,w);return}if(_!==2&&I&1&&H)if(_===0)H.persisted&&!F[lt]?r(F,g,w):(H.beforeEnter(F),r(F,g,w),rt(()=>H.enter(F),C));else{const{leave:q,delayLeave:ee,afterLeave:se}=H,me=()=>{p.ctx.isUnmounted?s(F):r(F,g,w)},ze=()=>{const _e=F._isLeaving||!!F[lt];F._isLeaving&&F[lt](!0),H.persisted&&!_e?me():q(F,()=>{me(),se&&se()})};ee?ee(F,me,ze):ze()}else r(F,g,w)},be=(p,g,w,_=!1,C=!1)=>{const{type:F,props:B,ref:H,children:G,dynamicChildren:I,shapeFlag:Q,patchFlag:q,dirs:ee,cacheIndex:se,memo:me}=p;if((q===-2||I&&I.hasOnce)&&(C=!1),H!=null&&(Mt(),Dn(H,null,w,p,!0),$t()),se!=null&&(!p.ctx||p.ctx===g)&&(g.renderCache[se]=void 0),Q&256){g.ctx.deactivate(p);return}const ze=Q&1&&ee,_e=!xn(p);let Pe;if(_e&&(Pe=B&&B.onVnodeBeforeUnmount)&&_t(Pe,g,p),Q&6)we(p.component,w,_);else{if(Q&128){p.suspense.unmount(w,_);return}ze&&nn(p,null,g,"beforeUnmount"),Q&64?p.type.remove(p,g,w,D,_):I&&!I.hasOnce&&(F!==ke||q>0&&q&64)?pe(I,g,w,!1,!0):(F===ke&&q&384||!C&&Q&16)&&pe(G,g,w),_&&pt(p)}const Ne=me!=null&&se==null;(_e&&(Pe=B&&B.onVnodeUnmounted)||ze||Ne)&&rt(()=>{Pe&&_t(Pe,g,p),ze&&nn(p,null,g,"unmounted"),Ne&&(p.el=null)},w)},pt=p=>{const{type:g,el:w,anchor:_,transition:C}=p,F=g===ke;if(F&&!C){Ie(w,_);return}if(g===fr){y(p),C&&!C.persisted&&C.afterLeave&&C.afterLeave();return}const B=F?Wn(p):p,H=()=>{F?d(w)&&Ie(w,_):s(w),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(B&&B.shapeFlag&1&&C&&!C.persisted){const{leave:G,delayLeave:I}=C,Q=B.el,q=()=>G(Q,H);I?I(Q,H,q):q()}else H()},Ie=(p,g)=>{let w;for(;p!==g;)w=h(p),s(p),p=w;s(g)},we=(p,g,w)=>{const{bum:_,scope:C,job:F,subTree:B,um:H,m:G,a:I}=p;Ro(G),Ro(I),_&&Xr(_),C.stop(),F?(F.flags|=8,be(B,p,g,w)):p.vnode.el&&B&&(B.transition=p.vnode.transition,be(B,p,g,w)),H&&rt(H,g),rt(()=>{p.isUnmounted=!0},g)},pe=(p,g,w,_=!1,C=!1,F=0)=>{for(let B=F;B<p.length;B++)be(p[B],g,w,_,C)},S=p=>{if(p.shapeFlag&6)return S(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const g=h(p.anchor||p.el),w=g&&g[vc];return w?h(w):g},U=(p,g,w)=>{const _=p&&g._vnode?void 0:p&&p.component?p.component.uid:cu();hc(()=>{p==null?g._vnode&&be(g._vnode,null,null,!0):v(g._vnode||null,p,g,null,null,null,w),g._vnode=p},_)},D={p:v,um:be,m:je,r:pt,mt:Re,mc:T,pc:te,pbc:Y,n:S,o:e};return{render:U,hydrate:void 0,createApp:jc(U)}}function rs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function rn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function nu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ta(e,t,n=!1){const r=e.children,s=t.children;if(ne(r)&&ne(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=jt(s[o]),a.el=i.el),!n&&a.patchFlag!==-2&&Ta(i,a)),a.type===Vr&&(a.patchFlag===-1&&(a=s[o]=jt(a)),a.el=i.el),a.type===qe&&!a.el&&(a.el=i.el)}}function ru(e){const t=e.slice(),n=[0];let r,s,o,i,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<c?o=a+1:i=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function Ma(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ma(t)}function Ro(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Cs(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Cs(t.subTree):null}const $a=e=>e.__isSuspense;function su(e,t){t&&t.pendingBranch?ne(e)?t.effects.push(...e):t.effects.push(e):mc(e)}const ke=Symbol.for("v-fgt"),Vr=Symbol.for("v-txt"),qe=Symbol.for("v-cmt"),fr=Symbol.for("v-stc"),Vt=[];let ot=null;function $(e=!1){Vt.push(ot=e?null:[])}function Js(){Vt.pop(),ot=Vt[Vt.length-1]||null}let Xn=1;function zr(e,t=!1){Xn+=e,e<0&&ot&&t&&(ot.hasOnce=!0)}function Fa(e){return e.dynamicChildren=Xn>0?ot||un:null,Js(),Xn>0&&ot&&ot.push(e),e}function j(e,t,n,r,s,o){return Fa(f(e,t,n,r,s,o,!0))}function Be(e,t,n,r,s){return Fa(k(e,t,n,r,s,!0))}function wn(e){return e?e.__v_isVNode===!0:!1}function cn(e,t){return e.type===t.type&&e.key===t.key}const Ia=({key:e})=>e??null,pr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Te(e)||Ze(e)||ae(e)?{i:Ve,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,r=0,s=null,o=e===ke?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ia(t),ref:t&&pr(t),scopeId:na,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ve};return a?(Cr(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=Te(n)?8:16),Xn>0&&!i&&ot&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&ot.push(l),l}const k=ou;function ou(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===pa)&&(e=qe),wn(e)){const a=en(e,t,!0);return n&&Cr(a,n),Xn>0&&!o&&ot&&(a.shapeFlag&6?ot[ot.indexOf(e)]=a:ot.push(a)),a.patchFlag=-2,a}if(gu(e)&&(e=e.__vccOpts),t){t=iu(t);let{class:a,style:l}=t;a&&!Te(a)&&(t.class=V(a)),ve(l)&&(Ws(l)&&!ne(l)&&(l=Le({},l)),t.style=Ue(l))}const i=Te(e)?1:$a(e)?128:jr(e)?64:ve(e)?4:ae(e)?2:0;return f(e,t,n,r,s,i,o,!0)}function iu(e){return e?Ws(e)||za(e)?Le({},e):e:null}function en(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:i,children:a,transition:l}=e,c=t?au(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ia(c),ref:t&&t.ref?n&&o?ne(o)?o.concat(pr(t)):[o,pr(t)]:pr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ke?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&en(e.ssContent),ssFallback:e.ssFallback&&en(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&r&&yn(u,l.clone(u)),u}function Xe(e=" ",t=0){return k(Vr,null,e,t)}function As(e,t){const n=k(fr,null,e);return n.staticCount=t,n}function Ye(e="",t=!1){return t?($(),Be(qe,null,e)):k(qe,null,e)}function St(e){return e==null||typeof e=="boolean"?k(qe):ne(e)?k(ke,null,e.slice()):wn(e)?jt(e):k(Vr,null,String(e))}function jt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:en(e)}function Cr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ne(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Cr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!za(t)?t._ctx=Ve:s===3&&Ve&&(Ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(ae(t)){if(r&65){Cr(e,{default:t});return}t={default:t,_ctx:Ve},n=32}else t=String(t),r&64?(n=16,t=[Xe(t)]):n=8;e.children=t,e.shapeFlag|=n}function au(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=V([t.class,r.class]));else if(s==="style")t.style=Ue([t.style,r.style]);else if(Mr(s)){const o=t[s],i=r[s];i&&o!==i&&!(ne(o)&&o.includes(i))?t[s]=o?[].concat(o,i):i:i==null&&o==null&&!$r(s)&&(t[s]=i)}else s!==""&&(t[s]=r[s])}return t}function _t(e,t,n,r=null){ft(e,t,7,[n,r])}const lu=xa();let Pa=0;function cu(){return Pa}function uu(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||lu,o={uid:Pa++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Aa(r,s),emitsOptions:va(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Gc.bind(null,o),e.ce&&e.ce(o),o}let Ke=null;const Qs=()=>Ke||Ve;let Ar,Kn;{const e=Pr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};Ar=t("__VUE_INSTANCE_SETTERS__",n=>Ke=n),Kn=t("__VUE_SSR_SETTERS__",n=>Yn=n)}const nr=e=>{const t=Ke;return Ar(e),e.scope.on(),()=>{e.scope.off(),Ar(t)}},Eo=()=>{Ke&&Ke.scope.off(),Ar(null)};function La(e){return e.vnode.shapeFlag&4}let Yn=!1;function du(e,t=!1,n=!1){t&&Kn(t);const{props:r,children:s}=e.vnode,o=La(e);Xc(e,r,o,t),Jc(e,s,n||t);const i=o?fu(e,t):void 0;return t&&Kn(!1),i}function fu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Fc);const{setup:r}=n;if(r){Mt();const s=e.setupContext=r.length>1?mu(e):null,o=nr(e),i=er(r,e,0,[e.props,s]),a=Ci(i);if($t(),o(),(a||e.sp)&&!xn(e)&&ca(e),a){if(i.then(Eo,Eo),t)return i.then(l=>{Kn(!0);try{To(e,l,t)}finally{Kn(!1)}}).catch(l=>{Br(l,e,0)});e.asyncDep=i}else To(e,i)}else Oa(e)}function To(e,t,n){ae(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=Ki(t)),Oa(e)}function Oa(e,t,n){const r=e.type;e.render||(e.render=r.render||Et);{const s=nr(e);Mt();try{Ic(e)}finally{$t(),s()}}}const pu={get(e,t){return We(e,"get",""),e[t]}};function mu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,pu),slots:e.slots,emit:e.emit,expose:t}}function qr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ki(sc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bn)return Bn[n](e)},has(t,n){return n in t||n in Bn}})):e.proxy}function hu(e,t=!0){return ae(e)?e.displayName||e.name:e.name||t&&e.__name}function gu(e){return ae(e)&&"__vccOpts"in e}const Ae=(e,t)=>cc(e,t,Yn);function kn(e,t,n){try{zr(-1);const r=arguments.length;return r===2?ve(t)&&!ne(t)?wn(t)?k(e,null,[t]):k(e,t):k(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&wn(n)&&(n=[n]),k(e,t,n))}finally{zr(1)}}const bu="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ss;const Mo=typeof window<"u"&&window.trustedTypes;if(Mo)try{Ss=Mo.createPolicy("vue",{createHTML:e=>e})}catch{}const Da=Ss?e=>Ss.createHTML(e):e=>e,xu="http://www.w3.org/2000/svg",vu="http://www.w3.org/1998/Math/MathML",Bt=typeof document<"u"?document:null,$o=Bt&&Bt.createElement("template"),yu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Bt.createElementNS(xu,e):t==="mathml"?Bt.createElementNS(vu,e):n?Bt.createElement(e,{is:n}):Bt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Bt.createTextNode(e),createComment:e=>Bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{$o.innerHTML=Da(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=$o.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ut="transition",Rn="animation",Zn=Symbol("_vtc"),Ba={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},wu=Le({},oa,Ba),ku=e=>(e.displayName="Transition",e.props=wu,e),ja=ku((e,{slots:t})=>kn(kc,_u(e),t)),sn=(e,t=[])=>{ne(e)?e.forEach(n=>n(...t)):e&&e(...t)},Fo=e=>e?ne(e)?e.some(t=>t.length>1):e.length>1:!1;function _u(e){const t={};for(const N in e)N in Ba||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:c=i,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,A=zu(s),v=A&&A[0],R=A&&A[1],{onBeforeEnter:L,onEnter:b,onEnterCancelled:x,onLeave:y,onLeaveCancelled:z,onBeforeAppear:E=L,onAppear:O=b,onAppearCancelled:T=x}=t,M=(N,le,Re,Me)=>{N._enterCancelled=Me,on(N,le?u:a),on(N,le?c:i),Re&&Re()},Y=(N,le)=>{N._isLeaving=!1,on(N,d),on(N,m),on(N,h),le&&le()},re=N=>(le,Re)=>{const Me=N?O:b,de=()=>M(le,N,Re);sn(Me,[le,de]),Io(()=>{on(le,N?l:o),Lt(le,N?u:a),Fo(Me)||Po(le,r,v,de)})};return Le(t,{onBeforeEnter(N){sn(L,[N]),Lt(N,o),Lt(N,i)},onBeforeAppear(N){sn(E,[N]),Lt(N,l),Lt(N,c)},onEnter:re(!1),onAppear:re(!0),onLeave(N,le){N._isLeaving=!0;const Re=()=>Y(N,le);Lt(N,d),N._enterCancelled?(Lt(N,h),Do(N)):(Do(N),Lt(N,h)),Io(()=>{N._isLeaving&&(on(N,d),Lt(N,m),Fo(y)||Po(N,r,R,Re))}),sn(y,[N,Re])},onEnterCancelled(N){M(N,!1,void 0,!0),sn(x,[N])},onAppearCancelled(N){M(N,!0,void 0,!0),sn(T,[N])},onLeaveCancelled(N){Y(N),sn(z,[N])}})}function zu(e){if(e==null)return null;if(ve(e))return[ss(e.enter),ss(e.leave)];{const t=ss(e);return[t,t]}}function ss(e){return Ml(e)}function Lt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Zn]||(e[Zn]=new Set)).add(t)}function on(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Zn];n&&(n.delete(t),n.size||(e[Zn]=void 0))}function Io(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Cu=0;function Po(e,t,n,r){const s=e._endId=++Cu,o=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(o,n);const{type:i,timeout:a,propCount:l}=Au(e,t);if(!i)return r();const c=i+"end";let u=0;const d=()=>{e.removeEventListener(c,h),o()},h=m=>{m.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),e.addEventListener(c,h)}function Au(e,t){const n=window.getComputedStyle(e),r=A=>(n[A]||"").split(", "),s=r(`${Ut}Delay`),o=r(`${Ut}Duration`),i=Lo(s,o),a=r(`${Rn}Delay`),l=r(`${Rn}Duration`),c=Lo(a,l);let u=null,d=0,h=0;t===Ut?i>0&&(u=Ut,d=i,h=o.length):t===Rn?c>0&&(u=Rn,d=c,h=l.length):(d=Math.max(i,c),u=d>0?i>c?Ut:Rn:null,h=u?u===Ut?o.length:l.length:0);const m=u===Ut&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ut}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:m}}function Lo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Oo(n)+Oo(e[r])))}function Oo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Do(e){return(e?e.ownerDocument:document).body.offsetHeight}function Su(e,t,n){const r=e[Zn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Sr=Symbol("_vod"),Na=Symbol("_vsh"),os={name:"show",beforeMount(e,{value:t},{transition:n}){e[Sr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):En(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),En(e,!0),r.enter(e)):r.leave(e,()=>{En(e,!1)}):En(e,t))},beforeUnmount(e,{value:t}){En(e,t)}};function En(e,t){e.style.display=t?e[Sr]:"none",e[Na]=!t}const Ru=Symbol(""),Eu=/(?:^|;)\s*display\s*:/;function Tu(e,t,n){const r=e.style,s=Te(n);let o=!1;if(n&&!s){if(t)if(Te(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Fn(r,a,"")}else for(const i in t)n[i]==null&&Fn(r,i,"");for(const i in n){i==="display"&&(o=!0);const a=n[i];a!=null?$u(e,i,!Te(t)&&t?t[i]:void 0,a)||Fn(r,i,a):Fn(r,i,"")}}else if(s){if(t!==n){const i=r[Ru];i&&(n+=";"+i),r.cssText=n,o=Eu.test(n)}}else t&&e.removeAttribute("style");Sr in e&&((!s||t!==n)&&(e[Sr]=o?r.display:""),e[Na]&&(r.display="none"))}const ir=/\s*!important$/;function Fn(e,t,n){if(ne(n))n.forEach(r=>Fn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))ir.test(n)?e.setProperty(t,n.replace(ir,""),"important"):e.setProperty(t,n);else{const r=Mu(e,t);ir.test(n)?e.setProperty(pn(r),n.replace(ir,""),"important"):e[r]=n}}const Bo=["Webkit","Moz","ms"],is={};function Mu(e,t){const n=is[t];if(n)return n;let r=nt(t);if(r!=="filter"&&r in e)return is[t]=r;r=Ir(r);for(let s=0;s<Bo.length;s++){const o=Bo[s]+r;if(o in e)return is[t]=o}return t}function $u(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Te(r)&&n===r}const jo="http://www.w3.org/1999/xlink";function No(e,t,n,r,s,o=Ol(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(jo,t.slice(6,t.length)):e.setAttributeNS(jo,t,n):n==null||o&&!Ei(n)?e.removeAttribute(t):e.setAttribute(t,o?"":gt(n)?String(n):n)}function Go(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Da(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Ei(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(s||t)}function Fu(e,t,n,r){e.addEventListener(t,n,r)}function Iu(e,t,n,r){e.removeEventListener(t,n,r)}const Ho=Symbol("_vei");function Pu(e,t,n,r,s=null){const o=e[Ho]||(e[Ho]={}),i=o[t];if(r&&i)i.value=r;else{const[a,l]=Du(t);if(r){const c=o[t]=Nu(r,s);Fu(e,a,c,l)}else i&&(Iu(e,a,i,l),o[t]=void 0)}}const Lu=/(Once|Passive|Capture)$/,Ou=/^on:?(?:Once|Passive|Capture)$/;function Du(e){let t,n;for(;(n=e.match(Lu))&&!Ou.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):pn(e.slice(2)),t]}let as=0;const Bu=Promise.resolve(),ju=()=>as||(Bu.then(()=>as=0),as=Date.now());function Nu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ne(s)){const o=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{o.call(r),r._stopped=!0};const i=s.slice(),a=[r];for(let l=0;l<i.length&&!r._stopped;l++){const c=i[l];c&&ft(c,t,5,a)}}else ft(s,t,5,[r])};return n.value=e,n.attached=ju(),n}const Vo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Gu=(e,t,n,r,s,o)=>{const i=s==="svg";t==="class"?Su(e,r,i):t==="style"?Tu(e,n,r):Mr(t)?$r(t)||Pu(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hu(e,t,r,i))?(Go(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&No(e,t,r,i,o,t!=="value")):e._isVueCE&&(Vu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Te(r)))?Go(e,nt(t),r,o,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),No(e,t,r,i))};function Hu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Vo(t)&&ae(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vo(t)&&Te(n)?!1:t in e}function Vu(e,t){const n=e._def.props;if(!n)return!1;const r=nt(t);return Array.isArray(n)?n.some(s=>nt(s)===r):Object.keys(n).some(s=>nt(s)===r)}const qu=Le({patchProp:Gu},yu);let qo;function Uu(){return qo||(qo=eu(qu))}const Wu=((...e)=>{const t=Uu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Ku(r);if(!s)return;const o=t._component;!ae(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const i=n(s,!1,Xu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t});function Xu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ku(e){return Te(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ar={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:r,iconNode:s,name:o,class:i,...a},{slots:l})=>kn("svg",{...ar,width:e||ar.width,height:e||ar.height,stroke:r||ar.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${Yu(o??"icon")}`],...a},[...s.map(c=>kn(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(e,t)=>(n,{slots:r})=>kn(Zu,{...n,iconNode:t,name:e},r);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=fe("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=fe("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=fe("BellIcon",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=fe("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=fe("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=fe("ChevronsLeftRightIcon",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=fe("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=fe("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=fe("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=fe("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=fe("CompassIcon",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=fe("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=fe("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=fe("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=fe("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=fe("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=fe("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=fe("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=fe("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=fe("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=fe("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=fe("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=fe("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=fe("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=fe("RepeatIcon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=fe("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=fe("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=fe("SettingsIcon",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=fe("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=fe("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=fe("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=fe("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=fe("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=fe("WrenchIcon",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=fe("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),bd=ye({__name:"ThemeToggle",setup(e){const t=oe(!0);function n(){t.value=!t.value,t.value?(document.documentElement.classList.add("dark"),localStorage.setItem("aura-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("aura-theme","light"))}return xt(()=>{const r=localStorage.getItem("aura-theme");r?t.value=r==="dark":t.value=window.matchMedia("(prefers-color-scheme: dark)").matches,t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),(r,s)=>($(),j("button",{type:"button",class:"relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"切换亮色 / 暗色模式",onClick:n},[t.value?($(),Be(P(hd),{key:0,class:"h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400"})):($(),Be(P(cd),{key:1,class:"h-4 w-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-indigo-600"}))]))}}),In=[{id:"border-beam",name:"BorderBeam",title:"Border Beam（跑马流光渐变边框）",category:"Effect",description:"沿着容器圆角边框匀速流动的彩色流光光束。大模型生成状态、VIP 特权卡片、核心功能高亮的科技感标配。",componentFilename:"BorderBeam.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"squareSize",type:"number",default:"4",description:"单个小方格尺寸 (px)"},{name:"gridGap",type:"number",default:"4",description:"小方块之间的间距 (px)"},{name:"flickerChance",type:"number",default:"0.3",description:"每帧方块明暗呼吸的概率"},{name:"maxOpacity",type:"number",default:"0.3",description:"方块闪烁的最大透明度"},{name:"color",type:"string",default:"自适应",description:"方块颜色 (HEX 或 RGB 字符串)"}]},{id:"dock",name:"Dock",title:"Dock（macOS 鱼眼放大交互栏）",category:"Interactive",description:"基于余弦物理平滑衰减算法（Cosine Smooth Falloff）的仿 macOS 桌面底座交互栏。鼠标悬浮自然鱼眼无级平滑放大、气泡 Tooltip 自动跟随，支持方向底座与自由插槽定制。",componentFilename:"Dock.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"items",type:"DockItem[]",default:"[]",description:"导航图标列表，包含 id, label, icon, onClick, href"},{name:"iconSize",type:"number",default:"44",description:"静止状态图标基础尺寸 (px)"},{name:"iconMagnification",type:"number",default:"68",description:"鼠标悬浮时最大鱼眼放大尺寸 (px)"},{name:"iconDistance",type:"number",default:"120",description:"余弦感应物理半径 (px)"},{name:"direction",type:"'bottom' | 'top' | 'middle'",default:"'bottom'",description:"底座停靠对齐方向"}]},{id:"orbit-logos",name:"OrbitLogos",title:"Orbit Logos（3D 同心环形轨道旋转图标）",category:"Effect",description:"具有 CSS 3D 透视同心轨道旋转的图标/Logo 围绕动效。内置逆旋转自正补偿算法保持 Logo 始终端正朝上，支持虚线轨道、悬停阻尼暂停与多环嵌套。",componentFilename:"OrbitLogos.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"radius",type:"number",default:"120",description:"轨道半径尺寸 (px)"},{name:"duration",type:"number",default:"20",description:"自转一圈耗时 (秒)"},{name:"delay",type:"number",default:"0",description:"轨道公转延迟或初始角度相位偏移 (秒)"},{name:"reverse",type:"boolean",default:"false",description:"是否逆时针反向公转"},{name:"path",type:"boolean",default:"true",description:"是否绘制虚线环形轨道底图"},{name:"pathColor",type:"string",default:"自适应",description:"轨道线条颜色"},{name:"pathWidth",type:"number",default:"1",description:"轨道线条宽度 (px)"},{name:"tiltAngle",type:"number",default:"0",description:"3D 空间倾角透视 (deg)"}]},{id:"image-compare",name:"ImageCompare",title:"Image Compare（交互式前后对比分割滑块）",category:"Interactive",description:"利用 CSS clip-path 动态视口裁切的高性能双图/前后对比组件。支持全平台鼠标拖拽与移动端单指触控，带高光分割线与磨砂玻璃手柄。",componentFilename:"ImageCompare.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"beforeImage",type:"string",default:"必填",description:"对比前图片 URL"},{name:"afterImage",type:"string",default:"必填",description:"对比后（AI/高清处理后）图片 URL"},{name:"beforeLabel",type:"string",default:"'Before'",description:"左侧对比前浮动徽标文案"},{name:"afterLabel",type:"string",default:"'After'",description:"右侧对比后浮动徽标文案"},{name:"initialPosition",type:"number",default:"50",description:"初始分割百分比 (0~100)"}]},{id:"agent-status",name:"AgentStatus",title:"Agent Status（AI 智能体状态脉冲胶囊）",category:"AI",description:"现代化 AI 智能体工作流执行胶囊。集成 5 种状态机驱动（思考中、执行中、调用工具、成功、异常）、实时毫秒秒表指示器与可折叠执行轨迹步骤清单。",componentFilename:"AgentStatus.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"status",type:"'thinking' | 'running' | 'tool_call' | 'success' | 'error' | 'idle'",default:"'thinking'",description:"智能体核心工作流状态"},{name:"agentName",type:"string",default:"'Aura AI Agent'",description:"智能体名称"},{name:"currentTask",type:"string",default:"'Thinking and orchestrating...'",description:"当前正在进行的任务摘要"},{name:"elapsed",type:"boolean",default:"true",description:"是否显示毫秒/秒级实时执行计时器"},{name:"steps",type:"AgentStep[]",default:"默认预设",description:"执行步骤轨迹列表 (id, name, status, duration, detail)"}]},{id:"typewriter-terminal",name:"TypewriterTerminal",title:"Typewriter Terminal（极客拟真打字机终端）",category:"Text",description:"仿 macOS 终端极客打字机组件。具备拟人人性化输入延时抖动、光标高频呼吸、彩色语义化输出日志流，支持自动循环播放与一键复制命令。",componentFilename:"TypewriterTerminal.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"title",type:"string",default:"'zsh - aura@developer:~ (80x24)'",description:"终端顶部标题栏文字"},{name:"lines",type:"TerminalLine[]",default:"默认预设",description:"终端行配置（type: input/output/success/error/info/warning, text, delay, prefix）"},{name:"typingSpeed",type:"number",default:"35",description:"每字符打字基准延时 (ms)"},{name:"pauseEnd",type:"number",default:"3500",description:"全部命令输出完成后的等待停顿 (ms)"},{name:"loop",type:"boolean",default:"true",description:"是否开启无限循环回放"},{name:"controls",type:"boolean",default:"true",description:"是否在标题栏显示重播与复制按钮"}]}],xd={class:"sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80 transition-colors"},vd={class:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"},yd={class:"flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md shadow-blue-500/20 text-white transition-transform duration-300 group-hover:scale-105"},wd={class:"hidden md:flex items-center gap-6 text-sm font-medium"},kd={class:"flex items-center gap-3"},_d={href:"https://github.com",target:"_blank",rel:"noopener noreferrer",class:"flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"GitHub 仓库"},zd=ye({__name:"Header",setup(e){return(t,n)=>{const r=tr("router-link");return $(),j("header",xd,[f("div",vd,[k(r,{to:"/",class:"flex items-center gap-2.5 group"},{default:Z(()=>[f("div",yd,[k(P(He),{class:"h-5 w-5"})]),n[0]||(n[0]=f("div",{class:"flex flex-col"},[f("div",{class:"flex items-center gap-1.5"},[f("span",{class:"text-lg font-black tracking-tight text-zinc-900 dark:text-white"},[Xe(" Aura"),f("span",{class:"text-blue-600 dark:text-blue-400"},"UI")]),f("span",{class:"rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300"}," Vue 3.5 ")]),f("span",{class:"text-[10px] text-zinc-400"},"动效原子代码库")],-1))]),_:1}),f("nav",wd,[k(r,{to:"/",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:Z(()=>[...n[1]||(n[1]=[Xe(" 官网首页 ",-1)])]),_:1}),k(r,{to:"/docs/border-beam",class:"inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:Z(()=>[k(P(mr),{class:"h-4 w-4"}),f("span",null,"组件库 ("+ie(P(In).length)+")",1)]),_:1}),n[2]||(n[2]=f("a",{href:"#features",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}," 核心特性 ",-1))]),f("div",kd,[k(bd),f("a",_d,[k(P(od),{class:"h-4 w-4"})]),k(r,{to:"/docs/border-beam",class:"hidden sm:inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"},{default:Z(()=>[...n[3]||(n[3]=[Xe(" 浏览代码 ",-1)])]),_:1})])])])}}}),Cd={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50 transition-colors"},Ad={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Sd={class:"flex flex-col md:flex-row items-center justify-between gap-6"},Rd={class:"flex items-center gap-3"},Ed={class:"flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"},Td={class:"flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"},Md={class:"inline-flex items-center gap-1"},$d=ye({__name:"Footer",setup(e){return(t,n)=>($(),j("footer",Cd,[f("div",Ad,[f("div",Sd,[f("div",Rd,[f("div",Ed,[k(P(He),{class:"h-4 w-4"})]),n[0]||(n[0]=f("div",null,[f("p",{class:"text-sm font-bold text-zinc-900 dark:text-zinc-100"}," Aura UI (Vue 3) "),f("p",{class:"text-xs text-zinc-500 dark:text-zinc-400"}," 对标 Magic UI / Aceternity UI，属于 Vue 3 的动效原子代码库 ")],-1))]),f("div",Td,[n[3]||(n[3]=f("span",null,"采用 MIT 协议开源，完全支持 Copy & Paste 即用",-1)),n[4]||(n[4]=f("span",null,"•",-1)),f("span",Md,[n[1]||(n[1]=Xe(" Built with ",-1)),k(P(ad),{class:"h-3 w-3 text-red-500 fill-red-500"}),n[2]||(n[2]=Xe(" for Vue 3 ecosystem ",-1))])])])])]))}}),Fd={class:"min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-200"},Id={class:"flex-1"},Pd=ye({__name:"App",setup(e){return(t,n)=>{const r=tr("router-view");return $(),j("div",Fd,[k(zd),f("div",Id,[k(r)]),k($d)])}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const bn=typeof document<"u";function qa(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ld(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&qa(e.default)}const xe=Object.assign;function ls(e,t){const n={};for(const r in t){const s=t[r];n[r]=bt(s)?s.map(e):e(s)}return n}const Nn=()=>{},bt=Array.isArray;function Zo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Ua=/#/g,Od=/&/g,Dd=/\//g,Bd=/=/g,jd=/\?/g,Wa=/\+/g,Nd=/%5B/g,Gd=/%5D/g,Xa=/%5E/g,Hd=/%60/g,Ka=/%7B/g,Vd=/%7C/g,Ya=/%7D/g,qd=/%20/g;function to(e){return e==null?"":encodeURI(""+e).replace(Vd,"|").replace(Nd,"[").replace(Gd,"]")}function Ud(e){return to(e).replace(Ka,"{").replace(Ya,"}").replace(Xa,"^")}function Ms(e){return to(e).replace(Wa,"%2B").replace(qd,"+").replace(Ua,"%23").replace(Od,"%26").replace(Hd,"`").replace(Ka,"{").replace(Ya,"}").replace(Xa,"^")}function Wd(e){return Ms(e).replace(Bd,"%3D")}function Xd(e){return to(e).replace(Ua,"%23").replace(jd,"%3F")}function Kd(e){return Xd(e).replace(Dd,"%2F")}function Jn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Yd=/\/$/,Zd=e=>e.replace(Yd,"");function cs(e,t,n="/"){let r,s={},o="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=t.slice(0,l),o=t.slice(l,a>0?a:t.length),s=e(o.slice(1))),a>=0&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=tf(r??t,n),{fullPath:r+o+i,path:r,query:s,hash:Jn(i)}}function Jd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Jo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Qd(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&_n(t.matched[r],n.matched[s])&&Za(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function _n(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Za(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!ef(e[n],t[n]))return!1;return!0}function ef(e,t){return bt(e)?Qo(e,t):bt(t)?Qo(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Qo(e,t){return bt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function tf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(i).join("/")}const Wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let $s=(function(e){return e.pop="pop",e.push="push",e})({}),us=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function nf(e){if(!e)if(bn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Zd(e)}const rf=/^[^#]+#/;function sf(e,t){return e.replace(rf,"#")+t}function of(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ur=()=>({left:window.scrollX,top:window.scrollY});function af(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=of(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ei(e,t){return(history.state?history.state.position-t:-1)+e}const Fs=new Map;function lf(e,t){Fs.set(e,t)}function cf(e){const t=Fs.get(e);return Fs.delete(e),t}function uf(e){return typeof e=="string"||e&&typeof e=="object"}function Ja(e){return typeof e=="string"||typeof e=="symbol"}let $e=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Qa=Symbol("");$e.MATCHER_NOT_FOUND+"",$e.NAVIGATION_GUARD_REDIRECT+"",$e.NAVIGATION_ABORTED+"",$e.NAVIGATION_CANCELLED+"",$e.NAVIGATION_DUPLICATED+"";function zn(e,t){return xe(new Error,{type:e,[Qa]:!0},t)}function Ot(e,t){return e instanceof Error&&Qa in e&&(t==null||!!(e.type&t))}const df=["params","query","hash"];function ff(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of df)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function pf(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Wa," "),o=s.indexOf("="),i=Jn(o<0?s:s.slice(0,o)),a=o<0?null:Jn(s.slice(o+1));if(i in t){let l=t[i];bt(l)||(l=t[i]=[l]),l.push(a)}else t[i]=a}return t}function ti(e){let t="";for(let n in e){const r=e[n];if(n=Wd(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(bt(r)?r.map(s=>s&&Ms(s)):[r&&Ms(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function mf(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=bt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const hf=Symbol(""),ni=Symbol(""),no=Symbol(""),ro=Symbol(""),Is=Symbol("");function Tn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Yt(e,t,n,r,s,o=i=>i()){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(zn($e.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?l(h):uf(h)?l(zn($e.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),a())},u=o(()=>e.call(r&&r.instances[s],t,n,c));let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(h=>l(h))})}function ds(e,t,n,r,s=o=>o()){const o=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(qa(l)){const c=(l.__vccOpts||l)[t];c&&o.push(Yt(c,n,r,i,a,s))}else{let c=l();o.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const d=Ld(u)?u.default:u;i.mods[a]=u,i.components[a]=d;const h=(d.__vccOpts||d)[t];return h&&Yt(h,n,r,i,a,s)()}))}}return o}function gf(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const a=t.matched[i];a&&(e.matched.find(c=>_n(c,a))?r.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(c=>_n(c,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let bf=()=>location.protocol+"//"+location.host;function el(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let i=s.includes(e.slice(o))?e.slice(o).length:1,a=s.slice(i);return a[0]!=="/"&&(a="/"+a),Jo(a,"")}return Jo(n,e)+r+s}function xf(e,t,n,r){let s=[],o=[],i=null;const a=({state:h})=>{const m=el(e,location),A=n.value,v=t.value;let R=0;if(h){if(n.value=m,t.value=h,i&&i===A){i=null;return}R=v?h.position-v.position:0}else r(m);s.forEach(L=>{L(n.value,A,{delta:R,type:$s.pop,direction:R?R>0?us.forward:us.back:us.unknown})})};function l(){i=n.value}function c(h){s.push(h);const m=()=>{const A=s.indexOf(h);A>-1&&s.splice(A,1)};return o.push(m),m}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(xe({},h.state,{scroll:Ur()}),"")}}function d(){for(const h of o)h();o=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function ri(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Ur():null}}function vf(e){const{history:t,location:n}=window,r={value:el(e,n)},s={value:t.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:bf()+e+l;try{t[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function i(l,c){o(l,xe({},t.state,ri(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),r.value=l}function a(l,c){const u=xe({},s.value,t.state,{forward:l,scroll:Ur()});o(u.current,u,!0),o(l,xe({},ri(r.value,l,null),{position:u.position+1},c),!1),r.value=l}return{location:r,state:s,push:a,replace:i}}function yf(e){e=nf(e);const t=vf(e),n=xf(e,t.state,t.location,t.replace);function r(o,i=!0){i||n.pauseListeners(),history.go(o)}const s=xe({location:"",base:e,go:r,createHref:sf.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let dn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var De=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(De||{});const wf={type:dn.Static,value:""},kf=/[a-zA-Z0-9_]/;function _f(e){if(!e)return[[]];if(e==="/")return[[wf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=De.Static,r=n;const s=[];let o;function i(){o&&s.push(o),o=[]}let a=0,l,c="",u="";function d(){c&&(n===De.Static?o.push({type:dn.Static,value:c}):n===De.Param||n===De.ParamRegExp||n===De.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:dn.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==De.ParamRegExp){r=n,n=De.EscapeNext;continue}switch(n){case De.Static:l==="/"?(c&&d(),i()):l===":"?(d(),n=De.Param):h();break;case De.EscapeNext:h(),n=r;break;case De.Param:l==="("?n=De.ParamRegExp:kf.test(l)?h():(d(),n=De.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case De.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=De.ParamRegExpEnd:u+=l;break;case De.ParamRegExpEnd:d(),n=De.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===De.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),i(),s}const si="[^/]+?",zf={sensitive:!1,strict:!1,start:!0,end:!0};var et=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(et||{});const Cf=/[.+*?^${}()[\]/\\]/g;function Af(e,t){const n=xe({},zf,t),r=[];let s=n.start?"^":"";const o=[];for(const c of e){const u=c.length?[]:[et.Root];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=et.Segment+(n.sensitive?et.BonusCaseSensitive:0);if(h.type===dn.Static)d||(s+="/"),s+=h.value.replace(Cf,"\\$&"),m+=et.Static;else if(h.type===dn.Param){const{value:A,repeatable:v,optional:R,regexp:L}=h;o.push({name:A,repeatable:v,optional:R});const b=L||si;if(b!==si){m+=et.BonusCustomRegExp;try{`${b}`}catch(y){throw new Error(`Invalid custom RegExp for param "${A}" (${b}): `+y.message)}}let x=v?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(x=R&&c.length<2?`(?:/${x})`:"/"+x),R&&(x+="?"),s+=x,m+=et.Dynamic,R&&(m+=et.BonusOptional),v&&(m+=et.BonusRepeatable),b===".*"&&(m+=et.BonusWildcard)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=et.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(i),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",A=o[h-1];d[A.name]=m&&A.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===dn.Static)u+=m.value;else if(m.type===dn.Param){const{value:A,repeatable:v,optional:R}=m,L=A in c?c[A]:"";if(bt(L)&&!v)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const b=bt(L)?L.join("/"):L;if(!b)if(R)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);u+=b}}return u||"/"}return{re:i,score:r,keys:o,parse:a,stringify:l}}function Sf(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===et.Static+et.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===et.Static+et.Segment?1:-1:0}function tl(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=Sf(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(oi(r))return 1;if(oi(s))return-1}return s.length-r.length}function oi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Rf={strict:!1,end:!0,sensitive:!1};function Ef(e,t,n){const r=Af(_f(e.path),n),s=xe(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Tf(e,t){const n=[],r=new Map;t=Zo(Rf,t);function s(d){return r.get(d)}function o(d,h,m){const A=!m,v=ai(d);v.aliasOf=m&&m.record;const R=Zo(t,d),L=[v];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const z of y)L.push(ai(xe({},v,{components:m?m.record.components:v.components,path:z,aliasOf:m?m.record:v})))}let b,x;for(const y of L){const{path:z}=y;if(h&&z[0]!=="/"){const E=h.record.path,O=E[E.length-1]==="/"?"":"/";y.path=h.record.path+(z&&O+z)}if(b=Ef(y,h,R),m?m.alias.push(b):(x=x||b,x!==b&&x.alias.push(b),A&&d.name&&!li(b)&&i(d.name)),nl(b)&&l(b),v.children){const E=v.children;for(let O=0;O<E.length;O++)o(E[O],b,m&&m.children[O])}m=m||b}return x?()=>{i(x)}:Nn}function i(d){if(Ja(d)){const h=r.get(d);h&&(r.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&r.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return n}function l(d){const h=Ff(d,n);n.splice(h,0,d),d.record.name&&!li(d)&&r.set(d.record.name,d)}function c(d,h){let m,A={},v,R;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw zn($e.MATCHER_NOT_FOUND,{location:d});R=m.record.name,A=xe(ii(h.params,m.keys.filter(x=>!x.optional).concat(m.parent?m.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),d.params&&ii(d.params,m.keys.map(x=>x.name))),v=m.stringify(A)}else if(d.path!=null)v=d.path,m=n.find(x=>x.re.test(v)),m&&(A=m.parse(v),R=m.record.name);else{if(m=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!m)throw zn($e.MATCHER_NOT_FOUND,{location:d,currentLocation:h});R=m.record.name,A=xe({},h.params,d.params),v=m.stringify(A)}const L=[];let b=m;for(;b;)L.unshift(b.record),b=b.parent;return{name:R,path:v,params:A,matched:L,meta:$f(L)}}e.forEach(d=>o(d));function u(){n.length=0,r.clear()}return{addRoute:o,resolve:c,removeRoute:i,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function ii(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ai(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Mf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Mf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function li(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $f(e){return e.reduce((t,n)=>xe(t,n.meta),{})}function Ff(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;tl(e,t[o])<0?r=o:n=o+1}const s=If(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function If(e){let t=e;for(;t=t.parent;)if(nl(t)&&tl(e,t)===0)return t}function nl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ci(e){const t=Tt(no),n=Tt(ro),r=Ae(()=>{const l=P(e.to);return t.resolve(l)}),s=Ae(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(_n.bind(null,u));if(h>-1)return h;const m=ui(l[c-2]);return c>1&&ui(u)===m&&d[d.length-1].path!==m?d.findIndex(_n.bind(null,l[c-2])):h}),o=Ae(()=>s.value>-1&&Bf(n.params,r.value.params)),i=Ae(()=>s.value>-1&&s.value===n.matched.length-1&&Za(n.params,r.value.params));function a(l={}){if(Df(l)){const c=t[P(e.replace)?"replace":"push"](P(e.to)).catch(Nn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:Ae(()=>r.value.href),isActive:o,isExactActive:i,navigate:a}}function Pf(e){return e.length===1?e[0]:e}const Lf=ye({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ci,setup(e,{slots:t}){const n=Dr(ci(e)),{options:r}=Tt(no),s=Ae(()=>({[di(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[di(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&Pf(t.default(n));return e.custom?o:kn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Of=Lf;function Df(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Bf(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!bt(s)||s.length!==r.length||r.some((o,i)=>o.valueOf()!==s[i].valueOf()))return!1}return!0}function ui(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const di=(e,t,n)=>e??t??n,jf=ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Tt(Is),s=Ae(()=>e.route||r.value),o=Tt(ni,0),i=Ae(()=>{let c=P(o);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ae(()=>s.value.matched[i.value]);dr(ni,Ae(()=>i.value+1)),dr(hf,a),dr(Is,s);const l=oe();return Ht(()=>[l.value,a.value,e.name],([c,u,d],[h,m,A])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!_n(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=e.name,d=a.value,h=d&&d.components[u];if(!h)return fi(n.default,{Component:h,route:c});const m=d.props[u],A=m?m===!0?c.params:typeof m=="function"?m(c):m:null,R=kn(h,xe({},A,t,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return fi(n.default,{Component:R,route:c})||R}}});function fi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Nf=jf;function Gf(e){const t=Tf(e.routes,e),n=e.parseQuery||pf,r=e.stringifyQuery||ti,s=e.history,o=Tn(),i=Tn(),a=Tn(),l=oc(Wt);let c=Wt;bn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ls.bind(null,S=>""+S),d=ls.bind(null,Kd),h=ls.bind(null,Jn);function m(S,U){let D,J;return Ja(S)?(D=t.getRecordMatcher(S),J=U):J=S,t.addRoute(J,D)}function A(S){const U=t.getRecordMatcher(S);U&&t.removeRoute(U)}function v(){return t.getRoutes().map(S=>S.record)}function R(S){return!!t.getRecordMatcher(S)}function L(S,U){if(U=xe({},U||l.value),typeof S=="string"){const _=cs(n,S,U.path),C=t.resolve({path:_.path},U),F=s.createHref(_.fullPath);return xe(_,C,{params:h(C.params),hash:Jn(_.hash),redirectedFrom:void 0,href:F})}let D;if(S.path!=null)D=xe({},S,{path:cs(n,S.path,U.path).path});else{const _=xe({},S.params);for(const C in _)_[C]==null&&delete _[C];D=xe({},S,{params:d(_)}),U.params=d(U.params)}const J=t.resolve(D,U),p=S.hash||"";J.params=u(h(J.params));const g=Jd(r,xe({},S,{hash:Ud(p),path:J.path})),w=s.createHref(g);return xe({fullPath:g,hash:p,query:r===ti?mf(S.query):S.query||{}},J,{redirectedFrom:void 0,href:w})}function b(S){return typeof S=="string"?cs(n,S,l.value.path):xe({},S)}function x(S,U){if(c!==S)return zn($e.NAVIGATION_CANCELLED,{from:U,to:S})}function y(S){return O(S)}function z(S){return y(xe(b(S),{replace:!0}))}function E(S,U){const D=S.matched[S.matched.length-1];if(D&&D.redirect){const{redirect:J}=D;let p=typeof J=="function"?J(S,U):J;return typeof p=="string"&&(p=p.includes("?")||p.includes("#")?p=b(p):{path:p},p.params={}),xe({query:S.query,hash:S.hash,params:p.path!=null?{}:S.params},p)}}function O(S,U){const D=c=L(S),J=l.value,p=S.state,g=S.force,w=S.replace===!0,_=E(D,J);if(_)return O(xe(b(_),{state:typeof _=="object"?xe({},p,_.state):p,force:g,replace:w}),U||D);const C=D;C.redirectedFrom=U;let F;return!g&&Qd(r,J,D)&&(F=zn($e.NAVIGATION_DUPLICATED,{to:C,from:J}),je(J,J,!0,!1)),(F?Promise.resolve(F):Y(C,J)).catch(B=>Ot(B)?Ot(B,$e.NAVIGATION_GUARD_REDIRECT)?B:W(B):te(B,C,J)).then(B=>{if(B){if(Ot(B,$e.NAVIGATION_GUARD_REDIRECT))return O(xe({replace:w},b(B.to),{state:typeof B.to=="object"?xe({},p,B.to.state):p,force:g}),U||C)}else B=N(C,J,!0,w,p);return re(C,J,B),B})}function T(S,U){const D=x(S,U);return D?Promise.reject(D):Promise.resolve()}function M(S){const U=Ie.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(S):S()}function Y(S,U){let D;const[J,p,g]=gf(S,U);D=ds(J.reverse(),"beforeRouteLeave",S,U);for(const _ of J)_.leaveGuards.forEach(C=>{D.push(Yt(C,S,U))});const w=T.bind(null,S,U);return D.push(w),pe(D).then(()=>{D=[];for(const _ of o.list())D.push(Yt(_,S,U));return D.push(w),pe(D)}).then(()=>{D=ds(p,"beforeRouteUpdate",S,U);for(const _ of p)_.updateGuards.forEach(C=>{D.push(Yt(C,S,U))});return D.push(w),pe(D)}).then(()=>{D=[];for(const _ of g)if(_.beforeEnter)if(bt(_.beforeEnter))for(const C of _.beforeEnter)D.push(Yt(C,S,U));else D.push(Yt(_.beforeEnter,S,U));return D.push(w),pe(D)}).then(()=>(S.matched.forEach(_=>_.enterCallbacks={}),D=ds(g,"beforeRouteEnter",S,U,M),D.push(w),pe(D))).then(()=>{D=[];for(const _ of i.list())D.push(Yt(_,S,U));return D.push(w),pe(D)}).catch(_=>Ot(_,$e.NAVIGATION_CANCELLED)?_:Promise.reject(_))}function re(S,U,D){a.list().forEach(J=>M(()=>J(S,U,D)))}function N(S,U,D,J,p){const g=x(S,U);if(g)return g;const w=U===Wt,_=bn?history.state:{};D&&(J||w?s.replace(S.fullPath,xe({scroll:w&&_&&_.scroll},p)):s.push(S.fullPath,p)),l.value=S,je(S,U,D,w),W()}let le;function Re(){le||(le=s.listen((S,U,D)=>{if(!we.listening)return;const J=L(S),p=E(J,we.currentRoute.value);if(p){O(xe(p,{replace:!0,force:!0}),J).catch(Nn);return}c=J;const g=l.value;bn&&lf(ei(g.fullPath,D.delta),Ur()),Y(J,g).catch(w=>Ot(w,$e.NAVIGATION_ABORTED|$e.NAVIGATION_CANCELLED)?w:Ot(w,$e.NAVIGATION_GUARD_REDIRECT)?(O(xe(b(w.to),{force:!0}),J).then(_=>{Ot(_,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&!D.delta&&D.type===$s.pop&&s.go(-1,!1)}).catch(Nn),Promise.reject()):(D.delta&&s.go(-D.delta,!1),te(w,J,g))).then(w=>{w=w||N(J,g,!1),w&&(D.delta&&!Ot(w,$e.NAVIGATION_CANCELLED)?s.go(-D.delta,!1):D.type===$s.pop&&Ot(w,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),re(J,g,w)}).catch(Nn)}))}let Me=Tn(),de=Tn(),ce;function te(S,U,D){W(S);const J=de.list();return J.length?J.forEach(p=>p(S,U,D)):console.error(S),Promise.reject(S)}function Ee(){return ce&&l.value!==Wt?Promise.resolve():new Promise((S,U)=>{Me.add([S,U])})}function W(S){return ce||(ce=!S,Re(),Me.list().forEach(([U,D])=>S?D(S):U()),Me.reset()),S}function je(S,U,D,J){const{scrollBehavior:p}=e;if(!bn||!p)return Promise.resolve();const g=!D&&cf(ei(S.fullPath,0))||(J||!D)&&history.state&&history.state.scroll||null;return Zi().then(()=>p(S,U,g)).then(w=>w&&af(w)).catch(w=>te(w,S,U))}const be=S=>s.go(S);let pt;const Ie=new Set,we={currentRoute:l,listening:!0,addRoute:m,removeRoute:A,clearRoutes:t.clearRoutes,hasRoute:R,getRoutes:v,resolve:L,options:e,push:y,replace:z,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:de.add,isReady:Ee,install(S){S.component("RouterLink",Of),S.component("RouterView",Nf),S.config.globalProperties.$router=we,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>P(l)}),bn&&!pt&&l.value===Wt&&(pt=!0,y(s.location).catch(J=>{}));const U={};for(const J in Wt)Object.defineProperty(U,J,{get:()=>l.value[J],enumerable:!0});S.provide(no,we),S.provide(ro,Wi(U)),S.provide(Is,l);const D=S.unmount;Ie.add(S),S.unmount=function(){Ie.delete(S),Ie.size<1&&(c=Wt,le&&le(),le=null,l.value=Wt,pt=!1,ce=!1),D()}}};function pe(S){return S.reduce((U,D)=>U.then(()=>M(D)),Promise.resolve())}return we}function Hf(e){return Tt(ro)}function rl(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=rl(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Vf(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=rl(e))&&(r&&(r+=" "),r+=t);return r}const qf=(e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Uf=(e,t)=>({classGroupId:e,validator:t}),sl=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Er="-",pi=[],Wf="arbitrary..",Xf=e=>{const t=Yf(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:i=>{if(i.startsWith("[")&&i.endsWith("]"))return Kf(i);const a=i.split(Er),l=a[0]===""&&a.length>1?1:0;return ol(a,l,t)},getConflictingClassGroupIds:(i,a)=>{if(a){const l=r[i],c=n[i];return l?c?qf(c,l):l:c||pi}return n[i]||pi}}},ol=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const s=e[t],o=n.nextPart.get(s);if(o){const c=ol(e,t+1,o);if(c)return c}const i=n.validators;if(i===null)return;const a=t===0?e.join(Er):e.slice(t).join(Er),l=i.length;for(let c=0;c<l;c++){const u=i[c];if(u.validator(a))return u.classGroupId}},Kf=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?Wf+r:void 0})(),Yf=e=>{const{theme:t,classGroups:n}=e;return Zf(n,t)},Zf=(e,t)=>{const n=sl();for(const r in e){const s=e[r];so(s,n,r,t)}return n},so=(e,t,n,r)=>{const s=e.length;for(let o=0;o<s;o++){const i=e[o];Jf(i,t,n,r)}},Jf=(e,t,n,r)=>{if(typeof e=="string"){Qf(e,t,n);return}if(typeof e=="function"){ep(e,t,n,r);return}tp(e,t,n,r)},Qf=(e,t,n)=>{const r=e===""?t:il(t,e);r.classGroupId=n},ep=(e,t,n,r)=>{if(np(e)){so(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Uf(n,e))},tp=(e,t,n,r)=>{const s=Object.entries(e),o=s.length;for(let i=0;i<o;i++){const[a,l]=s[i];so(l,il(t,a),n,r)}},il=(e,t)=>{let n=e;const r=t.split(Er),s=r.length;for(let o=0;o<s;o++){const i=r[o];let a=n.nextPart.get(i);a||(a=sl(),n.nextPart.set(i,a)),n=a}return n},np=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,rp=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const s=(o,i)=>{n[o]=i,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(o){let i=n[o];if(i!==void 0)return i;if((i=r[o])!==void 0)return s(o,i),i},set(o,i){o in n?n[o]=i:s(o,i)}}},Ps="!",mi=":",sp=[],hi=(e,t,n,r,s)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:s}),op=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=s=>{const o=[];let i=0,a=0,l=0,c;const u=s.length;for(let v=0;v<u;v++){const R=s[v];if(i===0&&a===0){if(R===mi){o.push(s.slice(l,v)),l=v+1;continue}if(R==="/"){c=v;continue}}R==="["?i++:R==="]"?i--:R==="("?a++:R===")"&&a--}const d=o.length===0?s:s.slice(l);let h=d,m=!1;d.endsWith(Ps)?(h=d.slice(0,-1),m=!0):d.startsWith(Ps)&&(h=d.slice(1),m=!0);const A=c&&c>l?c-l:void 0;return hi(o,m,h,A)};if(t){const s=t+mi,o=r;r=i=>i.startsWith(s)?o(i.slice(s.length)):hi(sp,!1,i,void 0,!0)}if(n){const s=r;r=o=>n({className:o,parseClassName:s})}return r},ip=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{t.set(n,1e6+r)}),n=>{const r=[];let s=[];for(let o=0;o<n.length;o++){const i=n[o],a=i[0]==="[",l=t.has(i);a||l?(s.length>0&&(s.sort(),r.push(...s),s=[]),r.push(i)):s.push(i)}return s.length>0&&(s.sort(),r.push(...s)),r}},ap=e=>({cache:rp(e.cacheSize),parseClassName:op(e),sortModifiers:ip(e),postfixLookupClassGroupIds:lp(e),...Xf(e)}),lp=e=>{const t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let r=0;r<n.length;r++)t[n[r]]=!0;return t},cp=/\s+/,up=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s,sortModifiers:o,postfixLookupClassGroupIds:i}=t,a=[],l=e.trim().split(cp);let c="";for(let u=l.length-1;u>=0;u-=1){const d=l[u],{isExternal:h,modifiers:m,hasImportantModifier:A,baseClassName:v,maybePostfixModifierPosition:R}=n(d);if(h){c=d+(c.length>0?" "+c:c);continue}let L=!!R,b;if(L){const O=v.substring(0,R);b=r(O);const T=b&&i[b]?r(v):void 0;T&&T!==b&&(b=T,L=!1)}else b=r(v);if(!b){if(!L){c=d+(c.length>0?" "+c:c);continue}if(b=r(v),!b){c=d+(c.length>0?" "+c:c);continue}L=!1}const x=m.length===0?"":m.length===1?m[0]:o(m).join(":"),y=A?x+Ps:x,z=y+b;if(a.indexOf(z)>-1)continue;a.push(z);const E=s(b,L);for(let O=0;O<E.length;++O){const T=E[O];a.push(y+T)}c=d+(c.length>0?" "+c:c)}return c},dp=(...e)=>{let t=0,n,r,s="";for(;t<e.length;)(n=e[t++])&&(r=al(n))&&(s&&(s+=" "),s+=r);return s},al=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=al(e[r]))&&(n&&(n+=" "),n+=t);return n},fp=(e,...t)=>{let n,r,s,o;const i=l=>{const c=t.reduce((u,d)=>d(u),e());return n=ap(c),r=n.cache.get,s=n.cache.set,o=a,a(l)},a=l=>{const c=r(l);if(c)return c;const u=up(l,n);return s(l,u),u};return o=i,(...l)=>o(dp(...l))},pp=[],Oe=e=>{const t=n=>n[e]||pp;return t.isThemeGetter=!0,t.themeKey=e,t},ll=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,cl=/^\((?:(\w[\w-]*):)?(.+)\)$/i,mp=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,hp=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,gp=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,bp=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,xp=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,vp=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xt=e=>mp.test(e),ue=e=>!!e&&!Number.isNaN(Number(e)),zt=e=>!!e&&Number.isInteger(Number(e)),fs=e=>e.endsWith("%")&&ue(e.slice(0,-1)),Dt=e=>hp.test(e),ul=()=>!0,yp=e=>gp.test(e)&&!bp.test(e),oo=()=>!1,wp=e=>xp.test(e),kp=e=>vp.test(e),_p=e=>!X(e)&&!K(e),zp=e=>e.startsWith("@container")&&(e[10]==="/"&&e[11]!==void 0||e[11]==="s"&&e[16]!==void 0&&e.startsWith("-size/",10)||e[11]==="n"&&e[18]!==void 0&&e.startsWith("-normal/",10)),Cp=e=>tn(e,pl,oo),X=e=>ll.test(e),an=e=>tn(e,ml,yp),gi=e=>tn(e,Fp,ue),Ap=e=>tn(e,gl,ul),Sp=e=>tn(e,hl,oo),bi=e=>tn(e,dl,oo),Rp=e=>tn(e,fl,kp),lr=e=>tn(e,bl,wp),K=e=>cl.test(e),Mn=e=>mn(e,ml),Ep=e=>mn(e,hl),xi=e=>mn(e,dl),Tp=e=>mn(e,pl),Mp=e=>mn(e,fl),cr=e=>mn(e,bl,!0),$p=e=>mn(e,gl,!0),tn=(e,t,n)=>{const r=ll.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},mn=(e,t,n=!1)=>{const r=cl.exec(e);return r?r[1]?t(r[1]):n:!1},dl=e=>e==="position"||e==="percentage",fl=e=>e==="image"||e==="url",pl=e=>e==="length"||e==="size"||e==="bg-size",ml=e=>e==="length",Fp=e=>e==="number",hl=e=>e==="family-name",gl=e=>e==="number"||e==="weight",bl=e=>e==="shadow",Ip=()=>{const e=Oe("color"),t=Oe("font"),n=Oe("text"),r=Oe("font-weight"),s=Oe("tracking"),o=Oe("leading"),i=Oe("breakpoint"),a=Oe("container"),l=Oe("spacing"),c=Oe("radius"),u=Oe("shadow"),d=Oe("inset-shadow"),h=Oe("text-shadow"),m=Oe("drop-shadow"),A=Oe("blur"),v=Oe("perspective"),R=Oe("aspect"),L=Oe("ease"),b=Oe("animate"),x=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],z=()=>[...y(),K,X],E=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto","contain","none"],T=()=>[K,X,l],M=()=>[Xt,"full","auto",...T()],Y=()=>[zt,"none","subgrid",K,X],re=()=>["auto",{span:["full",zt,K,X]},zt,K,X],N=()=>[zt,"auto",K,X],le=()=>["auto","min","max","fr",K,X],Re=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Me=()=>["start","end","center","stretch","center-safe","end-safe"],de=()=>["auto",...T()],ce=()=>[Xt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...T()],te=()=>[a,Xt,"screen","full","dvw","lvw","svw","min","max","fit",...T()],Ee=()=>[Xt,"screen","full","lh","dvh","lvh","svh","min","max","fit",...T()],W=()=>[e,K,X],je=()=>[...y(),xi,bi,{position:[K,X]}],be=()=>["no-repeat",{repeat:["","x","y","space","round"]}],pt=()=>["auto","cover","contain",Tp,Cp,{size:[K,X]}],Ie=()=>[fs,Mn,an],we=()=>["","none","full",c,K,X],pe=()=>["",ue,Mn,an],S=()=>["solid","dashed","dotted","double"],U=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],D=()=>[ue,fs,xi,bi],J=()=>["","none",A,K,X],p=()=>["none",ue,K,X],g=()=>["none",ue,K,X],w=()=>[ue,K,X],_=()=>[Xt,"full",...T()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Dt],breakpoint:[Dt],color:[ul],container:[Dt],"drop-shadow":[Dt],ease:["in","out","in-out"],font:[_p],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Dt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Dt],shadow:[Dt],spacing:["px",ue],text:[Dt],"text-shadow":[Dt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Xt,X,K,R]}],container:["container"],"container-type":[{"@container":["","normal","size",K,X]}],"container-named":[zp],columns:[{columns:[ue,"auto",X,K,a]}],"break-after":[{"break-after":x()}],"break-before":[{"break-before":x()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:z()}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:M()}],"inset-x":[{"inset-x":M()}],"inset-y":[{"inset-y":M()}],start:[{"inset-s":M(),start:M()}],end:[{"inset-e":M(),end:M()}],"inset-bs":[{"inset-bs":M()}],"inset-be":[{"inset-be":M()}],top:[{top:M()}],right:[{right:M()}],bottom:[{bottom:M()}],left:[{left:M()}],visibility:["visible","invisible","collapse"],z:[{z:[zt,"auto",K,X]}],basis:[{basis:[Xt,"full","auto",a,...T()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ue,Xt,"auto","initial","none",X]}],grow:[{grow:["",ue,K,X]}],shrink:[{shrink:["",ue,K,X]}],order:[{order:[zt,"first","last","none",K,X]}],"grid-cols":[{"grid-cols":Y()}],"col-start-end":[{col:re()}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":Y()}],"row-start-end":[{row:re()}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":le()}],"auto-rows":[{"auto-rows":le()}],gap:[{gap:T()}],"gap-x":[{"gap-x":T()}],"gap-y":[{"gap-y":T()}],"justify-content":[{justify:[...Re(),"normal"]}],"justify-items":[{"justify-items":[...Me(),"normal"]}],"justify-self":[{"justify-self":["auto",...Me()]}],"align-content":[{content:["normal",...Re()]}],"align-items":[{items:[...Me(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Me(),{baseline:["","last"]}]}],"place-content":[{"place-content":Re()}],"place-items":[{"place-items":[...Me(),"baseline"]}],"place-self":[{"place-self":["auto",...Me()]}],p:[{p:T()}],px:[{px:T()}],py:[{py:T()}],ps:[{ps:T()}],pe:[{pe:T()}],pbs:[{pbs:T()}],pbe:[{pbe:T()}],pt:[{pt:T()}],pr:[{pr:T()}],pb:[{pb:T()}],pl:[{pl:T()}],m:[{m:de()}],mx:[{mx:de()}],my:[{my:de()}],ms:[{ms:de()}],me:[{me:de()}],mbs:[{mbs:de()}],mbe:[{mbe:de()}],mt:[{mt:de()}],mr:[{mr:de()}],mb:[{mb:de()}],ml:[{ml:de()}],"space-x":[{"space-x":T()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":T()}],"space-y-reverse":["space-y-reverse"],size:[{size:ce()}],"inline-size":[{inline:["auto",...te()]}],"min-inline-size":[{"min-inline":["auto",...te()]}],"max-inline-size":[{"max-inline":["none",...te()]}],"block-size":[{block:["auto",...Ee()]}],"min-block-size":[{"min-block":["auto",...Ee()]}],"max-block-size":[{"max-block":["none",...Ee()]}],w:[{w:[a,"screen",...ce()]}],"min-w":[{"min-w":[a,"screen","none",...ce()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[i]},...ce()]}],h:[{h:["screen","lh",...ce()]}],"min-h":[{"min-h":["screen","lh","none",...ce()]}],"max-h":[{"max-h":["screen","lh","none",...ce()]}],"font-size":[{text:["base",n,Mn,an]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,$p,Ap]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",fs,X]}],"font-family":[{font:[Ep,Sp,t]}],"font-features":[{"font-features":[X]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,K,X]}],"line-clamp":[{"line-clamp":[ue,"none",K,gi]}],leading:[{leading:["none",o,...T()]}],"list-image":[{"list-image":["none",K,X]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",K,X]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:W()}],"text-color":[{text:W()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...S(),"wavy"]}],"text-decoration-thickness":[{decoration:[ue,"from-font","auto",K,an]}],"text-decoration-color":[{decoration:W()}],"underline-offset":[{"underline-offset":[ue,"auto",K,X]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:T()}],"tab-size":[{tab:[zt,K,X]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",K,X]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",K,X]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:je()}],"bg-repeat":[{bg:be()}],"bg-size":[{bg:pt()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},zt,K,X],radial:["",K,X],conic:["",zt,K,X]},Mp,Rp]}],"bg-color":[{bg:W()}],"gradient-from-pos":[{from:Ie()}],"gradient-via-pos":[{via:Ie()}],"gradient-to-pos":[{to:Ie()}],"gradient-from":[{from:W()}],"gradient-via":[{via:W()}],"gradient-to":[{to:W()}],rounded:[{rounded:we()}],"rounded-s":[{"rounded-s":we()}],"rounded-e":[{"rounded-e":we()}],"rounded-t":[{"rounded-t":we()}],"rounded-r":[{"rounded-r":we()}],"rounded-b":[{"rounded-b":we()}],"rounded-l":[{"rounded-l":we()}],"rounded-ss":[{"rounded-ss":we()}],"rounded-se":[{"rounded-se":we()}],"rounded-ee":[{"rounded-ee":we()}],"rounded-es":[{"rounded-es":we()}],"rounded-tl":[{"rounded-tl":we()}],"rounded-tr":[{"rounded-tr":we()}],"rounded-br":[{"rounded-br":we()}],"rounded-bl":[{"rounded-bl":we()}],"border-w":[{border:pe()}],"border-w-x":[{"border-x":pe()}],"border-w-y":[{"border-y":pe()}],"border-w-s":[{"border-s":pe()}],"border-w-e":[{"border-e":pe()}],"border-w-bs":[{"border-bs":pe()}],"border-w-be":[{"border-be":pe()}],"border-w-t":[{"border-t":pe()}],"border-w-r":[{"border-r":pe()}],"border-w-b":[{"border-b":pe()}],"border-w-l":[{"border-l":pe()}],"divide-x":[{"divide-x":pe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":pe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...S(),"hidden","none"]}],"divide-style":[{divide:[...S(),"hidden","none"]}],"border-color":[{border:W()}],"border-color-x":[{"border-x":W()}],"border-color-y":[{"border-y":W()}],"border-color-s":[{"border-s":W()}],"border-color-e":[{"border-e":W()}],"border-color-bs":[{"border-bs":W()}],"border-color-be":[{"border-be":W()}],"border-color-t":[{"border-t":W()}],"border-color-r":[{"border-r":W()}],"border-color-b":[{"border-b":W()}],"border-color-l":[{"border-l":W()}],"divide-color":[{divide:W()}],"outline-style":[{outline:[...S(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ue,K,X]}],"outline-w":[{outline:["",ue,Mn,an]}],"outline-color":[{outline:W()}],shadow:[{shadow:["","inner","none",u,cr,lr]}],"shadow-color":[{shadow:W()}],"inset-shadow":[{"inset-shadow":["none",d,cr,lr]}],"inset-shadow-color":[{"inset-shadow":W()}],"ring-w":[{ring:pe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:W()}],"ring-offset-w":[{"ring-offset":[ue,an]}],"ring-offset-color":[{"ring-offset":W()}],"inset-ring-w":[{"inset-ring":pe()}],"inset-ring-color":[{"inset-ring":W()}],"text-shadow":[{"text-shadow":["none",h,cr,lr]}],"text-shadow-color":[{"text-shadow":W()}],opacity:[{opacity:[ue,K,X]}],"mix-blend":[{"mix-blend":[...U(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":U()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ue]}],"mask-image-linear-from-pos":[{"mask-linear-from":D()}],"mask-image-linear-to-pos":[{"mask-linear-to":D()}],"mask-image-linear-from-color":[{"mask-linear-from":W()}],"mask-image-linear-to-color":[{"mask-linear-to":W()}],"mask-image-t-from-pos":[{"mask-t-from":D()}],"mask-image-t-to-pos":[{"mask-t-to":D()}],"mask-image-t-from-color":[{"mask-t-from":W()}],"mask-image-t-to-color":[{"mask-t-to":W()}],"mask-image-r-from-pos":[{"mask-r-from":D()}],"mask-image-r-to-pos":[{"mask-r-to":D()}],"mask-image-r-from-color":[{"mask-r-from":W()}],"mask-image-r-to-color":[{"mask-r-to":W()}],"mask-image-b-from-pos":[{"mask-b-from":D()}],"mask-image-b-to-pos":[{"mask-b-to":D()}],"mask-image-b-from-color":[{"mask-b-from":W()}],"mask-image-b-to-color":[{"mask-b-to":W()}],"mask-image-l-from-pos":[{"mask-l-from":D()}],"mask-image-l-to-pos":[{"mask-l-to":D()}],"mask-image-l-from-color":[{"mask-l-from":W()}],"mask-image-l-to-color":[{"mask-l-to":W()}],"mask-image-x-from-pos":[{"mask-x-from":D()}],"mask-image-x-to-pos":[{"mask-x-to":D()}],"mask-image-x-from-color":[{"mask-x-from":W()}],"mask-image-x-to-color":[{"mask-x-to":W()}],"mask-image-y-from-pos":[{"mask-y-from":D()}],"mask-image-y-to-pos":[{"mask-y-to":D()}],"mask-image-y-from-color":[{"mask-y-from":W()}],"mask-image-y-to-color":[{"mask-y-to":W()}],"mask-image-radial":[{"mask-radial":[K,X]}],"mask-image-radial-from-pos":[{"mask-radial-from":D()}],"mask-image-radial-to-pos":[{"mask-radial-to":D()}],"mask-image-radial-from-color":[{"mask-radial-from":W()}],"mask-image-radial-to-color":[{"mask-radial-to":W()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":y()}],"mask-image-conic-pos":[{"mask-conic":[ue]}],"mask-image-conic-from-pos":[{"mask-conic-from":D()}],"mask-image-conic-to-pos":[{"mask-conic-to":D()}],"mask-image-conic-from-color":[{"mask-conic-from":W()}],"mask-image-conic-to-color":[{"mask-conic-to":W()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:je()}],"mask-repeat":[{mask:be()}],"mask-size":[{mask:pt()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",K,X]}],filter:[{filter:["","none",K,X]}],blur:[{blur:J()}],brightness:[{brightness:[ue,K,X]}],contrast:[{contrast:[ue,K,X]}],"drop-shadow":[{"drop-shadow":["","none",m,cr,lr]}],"drop-shadow-color":[{"drop-shadow":W()}],grayscale:[{grayscale:["",ue,K,X]}],"hue-rotate":[{"hue-rotate":[ue,K,X]}],invert:[{invert:["",ue,K,X]}],saturate:[{saturate:[ue,K,X]}],sepia:[{sepia:["",ue,K,X]}],"backdrop-filter":[{"backdrop-filter":["","none",K,X]}],"backdrop-blur":[{"backdrop-blur":J()}],"backdrop-brightness":[{"backdrop-brightness":[ue,K,X]}],"backdrop-contrast":[{"backdrop-contrast":[ue,K,X]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ue,K,X]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ue,K,X]}],"backdrop-invert":[{"backdrop-invert":["",ue,K,X]}],"backdrop-opacity":[{"backdrop-opacity":[ue,K,X]}],"backdrop-saturate":[{"backdrop-saturate":[ue,K,X]}],"backdrop-sepia":[{"backdrop-sepia":["",ue,K,X]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":T()}],"border-spacing-x":[{"border-spacing-x":T()}],"border-spacing-y":[{"border-spacing-y":T()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",K,X]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ue,"initial",K,X]}],ease:[{ease:["linear","initial",L,K,X]}],delay:[{delay:[ue,K,X]}],animate:[{animate:["none",b,K,X]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[v,K,X]}],"perspective-origin":[{"perspective-origin":z()}],rotate:[{rotate:p()}],"rotate-x":[{"rotate-x":p()}],"rotate-y":[{"rotate-y":p()}],"rotate-z":[{"rotate-z":p()}],scale:[{scale:g()}],"scale-x":[{"scale-x":g()}],"scale-y":[{"scale-y":g()}],"scale-z":[{"scale-z":g()}],"scale-3d":["scale-3d"],skew:[{skew:w()}],"skew-x":[{"skew-x":w()}],"skew-y":[{"skew-y":w()}],transform:[{transform:[K,X,"","none","gpu","cpu"]}],"transform-origin":[{origin:z()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:_()}],"translate-x":[{"translate-x":_()}],"translate-y":[{"translate-y":_()}],"translate-z":[{"translate-z":_()}],"translate-none":["translate-none"],zoom:[{zoom:[zt,K,X]}],accent:[{accent:W()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:W()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",K,X]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":W()}],"scrollbar-track-color":[{"scrollbar-track":W()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":T()}],"scroll-mx":[{"scroll-mx":T()}],"scroll-my":[{"scroll-my":T()}],"scroll-ms":[{"scroll-ms":T()}],"scroll-me":[{"scroll-me":T()}],"scroll-mbs":[{"scroll-mbs":T()}],"scroll-mbe":[{"scroll-mbe":T()}],"scroll-mt":[{"scroll-mt":T()}],"scroll-mr":[{"scroll-mr":T()}],"scroll-mb":[{"scroll-mb":T()}],"scroll-ml":[{"scroll-ml":T()}],"scroll-p":[{"scroll-p":T()}],"scroll-px":[{"scroll-px":T()}],"scroll-py":[{"scroll-py":T()}],"scroll-ps":[{"scroll-ps":T()}],"scroll-pe":[{"scroll-pe":T()}],"scroll-pbs":[{"scroll-pbs":T()}],"scroll-pbe":[{"scroll-pbe":T()}],"scroll-pt":[{"scroll-pt":T()}],"scroll-pr":[{"scroll-pr":T()}],"scroll-pb":[{"scroll-pb":T()}],"scroll-pl":[{"scroll-pl":T()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",K,X]}],fill:[{fill:["none",...W()]}],"stroke-w":[{stroke:[ue,Mn,an,gi]}],stroke:[{stroke:["none",...W()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["start","end","right","left"],"inset-y":["inset-bs","inset-be","top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["ps","pe","pr","pl"],py:["pbs","pbe","pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["ms","me","mr","ml"],my:["mbs","mbe","mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-s","border-w-e","border-w-r","border-w-l"],"border-w-y":["border-w-bs","border-w-be","border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-s","border-color-e","border-color-r","border-color-l"],"border-color-y":["border-color-bs","border-color-be","border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-ms","scroll-me","scroll-mr","scroll-ml"],"scroll-my":["scroll-mbs","scroll-mbe","scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-ps","scroll-pe","scroll-pr","scroll-pl"],"scroll-py":["scroll-pbs","scroll-pbe","scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Pp=fp(Ip);function Fe(...e){return Pp(Vf(e))}const Lp={class:"h-full w-full overflow-visible",xmlns:"http://www.w3.org/2000/svg"},Op=["id"],Dp=["stop-color"],Bp=["stop-color"],jp=["rx","ry","stroke","stroke-width","stroke-dasharray"],Np=["rx","ry","stroke","stroke-width","stroke-dasharray"],Gp=ye({__name:"BorderBeam",props:{borderWidth:{default:2},size:{default:20},duration:{default:6},colorFrom:{default:"#38bdf8"},colorTo:{default:"#a855f7"},delay:{default:0},reverse:{type:Boolean,default:!1},borderRadius:{default:16},glow:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=Ks(),r=Ae(()=>{if(typeof t.borderRadius=="number")return t.borderRadius;const a=parseFloat(t.borderRadius);return isNaN(a)?16:a}),s=Ae(()=>t.size>50?18:Math.min(Math.max(t.size,5),80)),o=Ae(()=>`${s.value} ${100-s.value}`),i=Ae(()=>({animationDuration:`${t.duration}s`,animationDelay:`-${t.delay}s`,animationDirection:t.reverse?"reverse":"normal"}));return(a,l)=>($(),j("div",{class:V(P(Fe)("pointer-events-none absolute inset-0 rounded-[inherit] overflow-visible",t.class))},[($(),j("svg",Lp,[f("defs",null,[f("linearGradient",{id:`border-beam-grad-${P(n)}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[f("stop",{offset:"0%","stop-color":t.colorFrom},null,8,Dp),f("stop",{offset:"100%","stop-color":t.colorTo},null,8,Bp)],8,Op)]),t.glow?($(),j("rect",{key:0,pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${P(n)})`,"stroke-width":t.borderWidth*2,"stroke-dasharray":o.value,"stroke-linecap":"round",opacity:"0.45",class:"border-beam-svg-motion blur-[3px]",style:Ue(i.value)},null,12,jp)):Ye("",!0),f("rect",{pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${P(n)})`,"stroke-width":t.borderWidth,"stroke-dasharray":o.value,"stroke-linecap":"round",class:"border-beam-svg-motion",style:Ue(i.value)},null,12,Np)]))],2))}}),vt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Ls=vt(Gp,[["__scopeId","data-v-bf918acf"]]),Hp={class:"relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-white"},Vp=ye({__name:"ShimmerButton",props:{shimmerColor:{default:"#38bdf8"},shimmerSize:{default:"0.12em"},shimmerDuration:{default:"2.5s"},borderRadius:{default:"9999px"},class:{}},setup(e){const t=e,n=Ae(()=>({"--shimmer-color":t.shimmerColor,"--shimmer-size":t.shimmerSize,"--speed":t.shimmerDuration,"--radius":t.borderRadius}));return(r,s)=>($(),j("button",{style:Ue(n.value),class:V(P(Fe)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white transition-all duration-300 active:scale-95","border border-white/10 [border-radius:var(--radius)]","bg-zinc-900/90 shadow-md hover:shadow-lg hover:shadow-sky-500/20 dark:bg-black/90",t.class))},[s[0]||(s[0]=f("div",{class:"shimmer-spin-container pointer-events-none absolute -inset-[100%] [aspect-ratio:1] [border-radius:inherit]"},[f("div",{class:"shimmer-spin-gradient h-full w-full animate-shimmer-spin"})],-1)),s[1]||(s[1]=f("div",{class:"absolute [inset:var(--shimmer-size)] [border-radius:inherit] bg-zinc-950/95 transition-colors duration-300 group-hover:bg-zinc-900/95"},null,-1)),f("span",Hp,[ut(r.$slots,"default",{},void 0,!0)])],6))}}),Gn=vt(Vp,[["__scopeId","data-v-6b251134"]]),qp=ye({__name:"ShinyText",props:{text:{},duration:{default:2.5},variant:{default:"white"},class:{}},setup(e){const t=e,n=Ae(()=>({"--duration":`${t.duration}s`}));return(r,s)=>($(),j("span",{style:Ue(n.value),class:V(P(Fe)("shiny-text-root inline-block font-bold bg-clip-text text-transparent",t.variant==="white"&&"shiny-variant-white",t.variant==="cyber"&&"shiny-variant-cyber",t.class))},[ut(r.$slots,"default",{},()=>[Xe(ie(t.text),1)],!0)],6))}}),Hn=vt(qp,[["__scopeId","data-v-31108f82"]]),Up=ye({__name:"RetroGrid",props:{angle:{default:65},cellSize:{default:60},opacity:{default:.5},lightLineColor:{default:"#94a3b8"},darkLineColor:{default:"#38bdf8"},mask:{type:Boolean,default:!0},maskClass:{},class:{}},setup(e){const t=e,n=Ae(()=>({"--grid-angle":`${t.angle}deg`,"--cell-size":`${t.cellSize}px`,"--opacity":t.opacity.toString(),"--light-line":t.lightLineColor,"--dark-line":t.darkLineColor}));return(r,s)=>($(),j("div",{style:Ue(n.value),class:V(P(Fe)("pointer-events-none absolute h-full w-full overflow-hidden opacity-[var(--opacity)] [perspective:200px]",t.class))},[f("div",{class:V(P(Fe)("absolute inset-0 [transform:rotateX(var(--grid-angle))]",t.mask&&"retro-grid-horizon-mask"))},[...s[0]||(s[0]=[f("div",{class:"retro-grid-plane animate-retro-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]"},null,-1)])],2)],6))}}),Os=vt(Up,[["__scopeId","data-v-2d20ad14"]]),xl=ye({__name:"BentoGrid",props:{class:{}},setup(e){const t=e;return(n,r)=>($(),j("div",{class:V(P(Fe)("grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",t.class))},[ut(n.$slots,"default")],2))}}),Wp={class:"relative z-0 h-44 w-full overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"},Xp={class:"relative z-10 flex flex-col gap-2 pt-4"},Kp={class:"flex items-center gap-2.5"},Yp={class:"text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},Zp={class:"text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"},Jp={key:0,class:"mt-3 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400"},Qp=ye({__name:"BentoCard",props:{name:{},description:{},class:{},href:{},cta:{},spotlightRadius:{default:300}},setup(e){const t=e,n=oe(0),r=oe(0),s=oe(!1);function o(i){const a=i.currentTarget.getBoundingClientRect();n.value=i.clientX-a.left,r.value=i.clientY-a.top}return(i,a)=>{const l=tr("router-link");return $(),j("div",{class:V(P(Fe)("group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300","border border-zinc-200 bg-white/70 shadow-sm backdrop-blur-md hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10",t.class)),onMousemove:o,onMouseenter:a[0]||(a[0]=c=>s.value=!0),onMouseleave:a[1]||(a[1]=c=>s.value=!1)},[f("div",{class:"pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",style:Ue({background:`radial-gradient(${t.spotlightRadius}px circle at ${n.value}px ${r.value}px, var(--spotlight-color), transparent 80%)`})},null,4),f("div",Wp,[ut(i.$slots,"background",{},void 0,!0)]),f("div",Xp,[f("div",Kp,[ut(i.$slots,"icon",{},void 0,!0),f("h3",Yp,ie(t.name),1)]),f("p",Zp,ie(t.description),1),t.cta||i.$slots.cta?($(),j("div",Jp,[ut(i.$slots,"cta",{},()=>[t.href?($(),Be(l,{key:0,to:t.href,class:"inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"},{default:Z(()=>[Xe(ie(t.cta)+" ",1),a[2]||(a[2]=f("span",{"aria-hidden":"true"},"→",-1))]),_:1},8,["to"])):Ye("",!0)],!0)])):Ye("",!0)])],34)}}}),Qe=vt(Qp,[["__scopeId","data-v-f7ebca2d"]]),e0=ye({__name:"Marquee",props:{duration:{default:30},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},repeat:{default:4},class:{}},setup(e){const t=e,n=Ae(()=>({"--duration":`${t.duration}s`}));return(r,s)=>($(),j("div",{style:Ue(n.value),class:V(P(Fe)("group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",t.vertical?"flex-col":"flex-row",t.class))},[($(!0),j(ke,null,it(t.repeat,o=>($(),j("div",{key:o,class:V(P(Fe)("flex shrink-0 justify-around [gap:var(--gap)]",t.vertical?"flex-col animate-marquee-vertical":"flex-row animate-marquee",t.pauseOnHover&&"group-hover:[animation-play-state:paused]",t.reverse&&"[animation-direction:reverse]"))},[ut(r.$slots,"default",{},void 0,!0)],2))),128))],6))}}),hr=vt(e0,[["__scopeId","data-v-2ea856f7"]]),t0={"aria-hidden":"true",class:"pointer-events-none h-full w-full fill-neutral-400/60 dark:fill-neutral-600/60 transition-colors"},n0=["id","width","height","x","y"],r0=["cx","cy","r"],s0=["fill"],vl=ye({__name:"DotPattern",props:{width:{default:20},height:{default:20},x:{default:0},y:{default:0},cx:{default:1},cy:{default:1},cr:{default:1},glow:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=Ks(),r=oe(-9999),s=oe(-9999);function o(a){if(!t.glow)return;const l=a.currentTarget.getBoundingClientRect();r.value=a.clientX-l.left,s.value=a.clientY-l.top}function i(){r.value=-9999,s.value=-9999}return(a,l)=>($(),j("div",{class:V(P(Fe)("absolute inset-0 h-full w-full overflow-hidden",t.glow?"pointer-events-auto":"pointer-events-none",t.class)),onMousemove:o,onMouseleave:i},[($(),j("svg",t0,[f("defs",null,[f("pattern",{id:P(n),width:t.width,height:t.height,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:t.x,y:t.y},[f("circle",{cx:t.cx,cy:t.cy,r:t.cr},null,8,r0)],8,n0)]),f("rect",{width:"100%",height:"100%",fill:`url(#${P(n)})`},null,8,s0)])),t.glow?($(),j("div",{key:0,class:"absolute inset-0 transition-opacity duration-300",style:Ue({background:`radial-gradient(200px circle at ${r.value}px ${s.value}px, rgba(59, 130, 246, 0.15), transparent 80%)`})},null,4)):Ye("",!0)],34))}}),o0={class:"relative z-10 h-full w-full"},yl=ye({__name:"InteractiveParticles",props:{quantity:{default:50},speed:{default:.6},maxRadius:{default:2},mouseRadius:{default:100},color:{},connectLines:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=oe(null);let r=null,s=[];const o={x:-9999,y:-9999};function i(d,h){s=[];for(let m=0;m<t.quantity;m++)s.push({x:Math.random()*d,y:Math.random()*h,vx:(Math.random()-.5)*t.speed,vy:(Math.random()-.5)*t.speed,size:Math.random()*t.maxRadius+.8,baseAlpha:Math.random()*.5+.2,alpha:Math.random()*.5+.2})}function a(){const d=n.value;if(!d)return;const h=window.devicePixelRatio||1,m=d.getBoundingClientRect();d.width=m.width*h,d.height=m.height*h;const A=d.getContext("2d");A&&A.scale(h,h),i(m.width,m.height)}function l(d){const h=n.value;if(!h)return;const m=h.getBoundingClientRect();o.x=d.clientX-m.left,o.y=d.clientY-m.top}function c(){o.x=-9999,o.y=-9999}function u(){const d=n.value;if(!d)return;const h=d.getContext("2d");if(!h)return;const m=d.getBoundingClientRect(),A=m.width,v=m.height;h.clearRect(0,0,A,v);const L=document.documentElement.classList.contains("dark")?"255, 255, 255":"59, 130, 246",b=t.color||L;for(let x=0;x<s.length;x++){const y=s[x];y.x+=y.vx,y.y+=y.vy,(y.x<0||y.x>A)&&(y.vx*=-1),(y.y<0||y.y>v)&&(y.vy*=-1);const z=o.x-y.x,E=o.y-y.y,O=Math.sqrt(z*z+E*E);if(O<t.mouseRadius){const T=(t.mouseRadius-O)/t.mouseRadius;y.x-=z/O*T*2,y.y-=E/O*T*2,y.alpha=Math.min(y.baseAlpha+.4,.9)}else y.alpha=y.baseAlpha;if(h.beginPath(),h.arc(y.x,y.y,y.size,0,Math.PI*2),h.fillStyle=b.startsWith("#")?b:`rgba(${b}, ${y.alpha})`,h.fill(),t.connectLines)for(let T=x+1;T<s.length;T++){const M=s[T],Y=Math.hypot(y.x-M.x,y.y-M.y);if(Y<80){h.beginPath(),h.moveTo(y.x,y.y),h.lineTo(M.x,M.y);const re=(1-Y/80)*.15;h.strokeStyle=`rgba(${L}, ${re})`,h.lineWidth=.6,h.stroke()}}}r=requestAnimationFrame(u)}return xt(()=>{a(),window.addEventListener("resize",a),u()}),It(()=>{window.removeEventListener("resize",a),r!==null&&cancelAnimationFrame(r)}),Ht(()=>t.quantity,()=>{const d=n.value;if(d){const h=d.getBoundingClientRect();i(h.width,h.height)}}),(d,h)=>($(),j("div",{class:V(P(Fe)("relative h-full w-full overflow-hidden",t.class)),onMousemove:l,onMouseleave:c},[f("canvas",{ref_key:"canvasRef",ref:n,class:"pointer-events-none absolute inset-0 h-full w-full"},null,512),f("div",o0,[ut(d.$slots,"default")])],34))}}),i0=ye({__name:"Meteors",props:{number:{default:20},angle:{default:215},minDelay:{default:.2},maxDelay:{default:1.2},minDuration:{default:2},maxDuration:{default:8},class:{}},setup(e){const t=e,n=Ae(()=>Array.from({length:t.number}).map(()=>{const r=Math.floor(Math.random()*100),s=Math.floor(Math.random()*100),o=(Math.random()*(t.maxDelay-t.minDelay)+t.minDelay).toFixed(2),i=(Math.random()*(t.maxDuration-t.minDuration)+t.minDuration).toFixed(2);return{top:`${r}%`,left:`${s}%`,animationDelay:`${o}s`,animationDuration:`${i}s`}}));return(r,s)=>($(),j("div",{class:V(P(Fe)("pointer-events-none absolute inset-0 overflow-hidden",t.class))},[($(!0),j(ke,null,it(n.value,(o,i)=>($(),j("span",{key:i,style:Ue({...o,"--angle":`${t.angle}deg`}),class:"animate-meteor absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[var(--angle)] dark:bg-sky-400 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-slate-500 before:to-transparent dark:before:from-sky-400"},null,4))),128))],2))}}),wl=vt(i0,[["__scopeId","data-v-7d09918c"]]),a0=ye({__name:"Ripple",props:{mainCircleSize:{default:210},mainCircleOpacity:{default:.24},numCircles:{default:8},class:{}},setup(e){const t=e;return(n,r)=>($(),j("div",{class:V(P(Fe)("pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",t.class))},[($(!0),j(ke,null,it(t.numCircles,s=>($(),j("div",{key:s,style:Ue({width:`${t.mainCircleSize+(s-1)*70}px`,height:`${t.mainCircleSize+(s-1)*70}px`,opacity:Math.max(.04,t.mainCircleOpacity-(s-1)*.025),animationDelay:`${(s-1)*.06}s`,borderStyle:s===t.numCircles?"dashed":"solid",borderWidth:"1px"}),class:"animate-ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-500/40 bg-blue-500/5 shadow-[0_0_16px_rgba(59,130,246,0.1)] dark:border-sky-400/30 dark:bg-sky-400/5"},null,4))),128))],2))}}),kl=vt(a0,[["__scopeId","data-v-98c398f7"]]),gr=ye({__name:"NumberTicker",props:{value:{},direction:{default:"up"},duration:{default:2},delay:{default:0},decimalPlaces:{default:0},class:{}},setup(e){const t=e,n=oe(null),r=oe("0");let s=null,o=null,i=!1;function a(u){return u===1?1:1-Math.pow(2,-10*u)}function l(u){return new Intl.NumberFormat("en-US",{minimumFractionDigits:t.decimalPlaces,maximumFractionDigits:t.decimalPlaces}).format(u)}function c(){if(i)return;i=!0;const u=t.direction==="down"?t.value:0,d=t.direction==="down"?0:t.value,h=t.duration*1e3;let m=null;setTimeout(()=>{function A(v){m||(m=v);const R=v-m,L=Math.min(R/h,1),b=a(L),x=u+(d-u)*b;r.value=l(x),L<1?s=requestAnimationFrame(A):r.value=l(d)}s=requestAnimationFrame(A)},t.delay*1e3)}return xt(()=>{r.value=l(t.direction==="down"?t.value:0),n.value?(o=new IntersectionObserver(u=>{u[0].isIntersecting&&(c(),o&&o.disconnect())},{threshold:.1}),o.observe(n.value)):c()}),It(()=>{s&&cancelAnimationFrame(s),o&&o.disconnect()}),Ht(()=>t.value,()=>{i=!1,c()}),(u,d)=>($(),j("span",{ref_key:"spanRef",ref:n,class:V(P(Fe)("inline-block tabular-nums tracking-wider",t.class))},ie(r.value),3))}}),l0=["width","height","viewBox"],c0=["d","stroke","stroke-width","stroke-opacity"],u0=["d","stroke","stroke-width"],d0=["id"],f0=["stop-color"],p0=["stop-color"],m0=["stop-color"],h0=["from","to","dur","begin"],g0=["from","to","dur","begin"],Tr=ye({__name:"AnimatedBeam",props:{containerRef:{},fromRef:{},toRef:{},curvature:{default:0},reverse:{type:Boolean,default:!1},pathColor:{default:"#94a3b8"},pathWidth:{default:2},pathOpacity:{default:.2},gradientStartColor:{default:"#38bdf8"},gradientStopColor:{default:"#6366f1"},duration:{default:3},delay:{default:0},startXOffset:{default:0},startYOffset:{default:0},endXOffset:{default:0},endYOffset:{default:0},class:{}},setup(e){const t=e,n=Ks(),r=oe(""),s=oe({width:0,height:0});function o(l){return l?"value"in l?l.value:l instanceof HTMLElement?l:null:null}function i(){const l=o(t.containerRef),c=o(t.fromRef),u=o(t.toRef);if(!l||!c||!u)return;const d=l.getBoundingClientRect(),h=c.getBoundingClientRect(),m=u.getBoundingClientRect();s.value={width:d.width,height:d.height};const A=h.left-d.left+h.width/2+t.startXOffset,v=h.top-d.top+h.height/2+t.startYOffset,R=m.left-d.left+m.width/2+t.endXOffset,L=m.top-d.top+m.height/2+t.endYOffset,b=(A+R)/2,x=(v+L)/2,y=b,z=x-t.curvature;t.curvature===0?r.value=`M ${A},${v} L ${R},${L}`:r.value=`M ${A},${v} Q ${y},${z} ${R},${L}`}let a=null;return xt(()=>{i(),window.addEventListener("resize",i);const l=o(t.containerRef);l&&(a=new ResizeObserver(()=>i()),a.observe(l))}),It(()=>{window.removeEventListener("resize",i),a&&a.disconnect()}),Ht([()=>o(t.containerRef),()=>o(t.fromRef),()=>o(t.toRef),()=>t.curvature],()=>{i()}),(l,c)=>($(),j("svg",{width:s.value.width,height:s.value.height,viewBox:`0 0 ${s.value.width} ${s.value.height}`,class:V(P(Fe)("pointer-events-none absolute inset-0 h-full w-full select-none overflow-visible",t.class))},[f("path",{d:r.value,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-opacity":t.pathOpacity,"stroke-linecap":"round"},null,8,c0),f("path",{d:r.value,fill:"none",stroke:`url(#beam-gradient-${P(n)})`,"stroke-width":t.pathWidth,"stroke-linecap":"round"},null,8,u0),f("defs",null,[f("linearGradient",{id:`beam-gradient-${P(n)}`,gradientUnits:"userSpaceOnUse"},[f("stop",{offset:"0%","stop-color":t.gradientStartColor,"stop-opacity":"0"},null,8,f0),f("stop",{offset:"50%","stop-color":t.gradientStartColor,"stop-opacity":"1"},null,8,p0),f("stop",{offset:"100%","stop-color":t.gradientStopColor,"stop-opacity":"0"},null,8,m0),f("animate",{attributeName:"x1",from:t.reverse?"100%":"-50%",to:t.reverse?"-50%":"100%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,h0),f("animate",{attributeName:"x2",from:t.reverse?"150%":"0%",to:t.reverse?"0%":"150%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,g0)],8,d0)])],10,l0))}}),b0={class:"relative z-50 -translate-y-32 flex flex-col items-center px-5 text-center"},_l=ye({__name:"LampEffect",props:{glowColor:{default:"#06b6d4"},class:{}},setup(e){const t=e;return(n,r)=>($(),j("div",{class:V(P(Fe)("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-2xl z-0",t.class))},[r[0]||(r[0]=As(`<div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"><div class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div><div class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"></div></div><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"><div class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"></div><div class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div></div><div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl"></div><div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div><div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div><div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></div><div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div><div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-950"></div></div>`,1)),f("div",b0,[ut(n.$slots,"default")])],2))}}),zl=ye({__name:"FlickeringGrid",props:{squareSize:{default:4},gridGap:{default:4},flickerChance:{default:.3},color:{},maxOpacity:{default:.3},class:{}},setup(e){const t=e,n=oe(null),r=oe(null);let s=null,o=new Float32Array(0),i=0,a=0;function l(d,h){i=Math.floor(d/(t.squareSize+t.gridGap)),a=Math.floor(h/(t.squareSize+t.gridGap)),o=new Float32Array(i*a);for(let m=0;m<o.length;m++)o[m]=Math.random()*t.maxOpacity}function c(){const d=n.value,h=r.value;if(!d||!h)return;const m=window.devicePixelRatio||1,A=d.getBoundingClientRect();h.width=A.width*m,h.height=A.height*m;const v=h.getContext("2d");v&&v.scale(m,m),l(A.width,A.height)}function u(){const d=r.value,h=n.value;if(!d||!h)return;const m=d.getContext("2d");if(!m)return;const A=h.getBoundingClientRect();m.clearRect(0,0,A.width,A.height);const R=document.documentElement.classList.contains("dark")?"148, 163, 184":"100, 116, 139",L=t.color||R;for(let b=0;b<a;b++)for(let x=0;x<i;x++){const y=b*i+x;Math.random()<t.flickerChance&&(o[y]=Math.random()*t.maxOpacity);const z=o[y];m.fillStyle=L.startsWith("#")?L:`rgba(${L}, ${z})`;const E=x*(t.squareSize+t.gridGap),O=b*(t.squareSize+t.gridGap);m.fillRect(E,O,t.squareSize,t.squareSize)}s=requestAnimationFrame(u)}return xt(()=>{c(),window.addEventListener("resize",c),u()}),It(()=>{window.removeEventListener("resize",c),s&&cancelAnimationFrame(s)}),Ht([()=>t.squareSize,()=>t.gridGap],()=>{c()}),(d,h)=>($(),j("div",{ref_key:"containerRef",ref:n,class:V(P(Fe)("pointer-events-none relative h-full w-full overflow-hidden",t.class))},[f("canvas",{ref_key:"canvasRef",ref:r,class:"absolute inset-0 h-full w-full"},null,512)],2))}}),x0={class:"relative overflow-hidden"},v0={class:"relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center overflow-hidden"},y0={class:"relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200"},w0={class:"relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"},k0={class:"relative z-10 mt-12 w-full max-w-2xl text-left"},_0={class:"relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/80"},z0={class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"},C0={class:"border-y border-zinc-200/80 bg-zinc-50/50 py-6 dark:border-zinc-800/80 dark:bg-zinc-950/40"},A0={class:"mx-auto max-w-7xl px-4 text-center"},S0={id:"features",class:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"},R0={class:"relative h-full w-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50/40 to-transparent dark:from-zinc-900/60 dark:to-transparent"},E0={class:"relative flex h-32 w-56 flex-col justify-between rounded-xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-md backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95"},T0={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-50/50 to-blue-50/20 border border-blue-100/50 dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800"},M0={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50/30 to-white dark:from-zinc-950 dark:to-zinc-900"},$0={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-50/30 to-transparent dark:from-zinc-900/50 dark:to-transparent"},F0={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"},I0={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50"},P0={class:"relative h-full w-full flex flex-col justify-center overflow-hidden rounded-xl p-3 bg-zinc-50/60 dark:bg-zinc-900/40"},L0={class:"relative h-full w-full overflow-hidden rounded-xl bg-slate-950 p-4"},O0={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center"},D0={class:"relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40"},B0={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent flex flex-col items-center justify-center p-4"},j0={class:"text-4xl font-black text-emerald-600 dark:text-emerald-400"},N0={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4"},G0={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"},H0={class:"mt-8 flex items-center justify-center gap-4"},V0={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-20 dark:border-zinc-800/80 dark:bg-zinc-950/40"},q0={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},U0={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},W0={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},X0={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400"},K0={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},Y0={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400"},Z0={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},J0={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400"},Q0=ye({__name:"HomeView",setup(e){const t=oe(null),n=oe(null),r=oe(null),s=oe(null),o=["Vue 3.5+","TypeScript","Tailwind CSS","Composition API","Vite 6","HTML5 Canvas","Web Animations API","Zero-Config"],i=oe(!1);function a(){navigator.clipboard.writeText("npm i @vueuse/core clsx tailwind-merge"),i.value=!0,setTimeout(()=>{i.value=!1},2e3)}return(l,c)=>{const u=tr("router-link");return $(),j("div",x0,[f("section",v0,[k(Os,{angle:65,opacity:.45}),f("div",y0,[k(P(He),{class:"h-3.5 w-3.5 text-blue-500"}),k(Hn,{text:"Vue 3 的动效原子代码库现已上线"}),c[0]||(c[0]=f("span",{class:"rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] text-blue-600 dark:text-blue-400"}," v1.0 ",-1))]),c[5]||(c[5]=f("h1",{class:"relative z-10 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight"},[Xe(" 专属于 Vue 3 的 "),f("span",{class:"block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400"}," 高阶动效原子库 ")],-1)),c[6]||(c[6]=f("p",{class:"relative z-10 mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400"},[Xe(" 不再重复造普通表单，全面对标 Magic UI 与 Aceternity UI。"),f("br",{class:"hidden sm:inline"}),Xe(" 面向 "),f("strong",null,"AI 官网、SaaS 营销页、酷炫个人主页"),Xe("，提供 60fps 单文件即用的动效积木。 ")],-1)),f("div",w0,[k(u,{to:"/docs/border-beam"},{default:Z(()=>[k(Gn,{"shimmer-color":"#60a5fa",class:"h-12 px-8 text-base"},{default:Z(()=>[c[1]||(c[1]=f("span",null,"立即浏览组件",-1)),k(P(Rs),{class:"h-4 w-4"})]),_:1})]),_:1}),f("button",{type:"button",class:"inline-flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-800",onClick:a},[i.value?($(),Be(P(eo),{key:0,class:"h-4 w-4 text-emerald-500"})):($(),Be(P(Rr),{key:1,class:"h-4 w-4 text-zinc-400"})),f("span",null,ie(i.value?"已复制依赖指令":"复制基础依赖指令"),1)])]),f("div",k0,[f("div",_0,[k(Ls,{size:90,duration:6,"color-from":"#38bdf8","color-to":"#a855f7","border-width":2,"border-radius":16}),c[4]||(c[4]=As('<div class="mb-4 flex items-center justify-between border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60"><div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-rose-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span><span class="ml-2 font-mono text-xs text-zinc-400">components/BorderBeam.vue</span></div><div class="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Zero-Config / 粘贴即跑</span></div></div>',1)),f("div",z0,[c[3]||(c[3]=As('<div class="space-y-1 text-zinc-600 dark:text-zinc-300"><p><span class="text-purple-500">&lt;template&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;div</span> <span class="text-amber-500">class=</span><span class="text-emerald-500">&quot;relative rounded-2xl&quot;</span><span class="text-blue-500">&gt;</span></p><p class="pl-8"><span class="text-blue-500">&lt;BorderBeam</span> <span class="text-amber-500">:duration=</span><span class="text-emerald-500">&quot;5&quot;</span> <span class="text-amber-500">:border-width=</span><span class="text-emerald-500">&quot;2&quot;</span> <span class="text-blue-500">/&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;/div&gt;</span></p><p><span class="text-purple-500">&lt;/template&gt;</span></p></div>',1)),k(u,{to:"/docs/border-beam",class:"shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"},{default:Z(()=>[...c[2]||(c[2]=[Xe(" 浏览全部 8 款动效 → ",-1)])]),_:1})])])])]),f("section",C0,[f("div",A0,[c[8]||(c[8]=f("p",{class:"mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase"}," 原生融合的技术栈与动效标准 ",-1)),k(hr,{duration:25,"pause-on-hover":!0},{default:Z(()=>[($(),j(ke,null,it(o,d=>f("div",{key:d,class:"flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-5 py-2 text-xs font-bold text-zinc-700 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300"},[c[7]||(c[7]=f("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),f("span",null,ie(d),1)])),64))]),_:1})])]),f("section",S0,[c[25]||(c[25]=f("div",{class:"text-center max-w-3xl mx-auto mb-16 space-y-4"},[f("h2",{class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"}," 全面对标顶流 · 14 款高阶动效全装配 "),f("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 每一个组件都经过精心打磨，在移动端与桌面端保持 60fps 满帧性能，全部开箱即用，支持 Clean Light 与 Deep Dark 双模自适应。 ")],-1)),k(xl,null,{default:Z(()=>[k(Qe,{name:"Border Beam",description:"现代 CSS 路径动画，高光激光沿圆角边框飞速流转，AI 推理与核心 VIP 的视觉焦点",cta:"查看详情与代码",href:"/docs/border-beam"},{icon:Z(()=>[k(P(He),{class:"h-5 w-5 text-sky-500"})]),background:Z(()=>[f("div",R0,[f("div",E0,[k(Ls,{size:65,duration:3.5,"color-from":"#06b6d4","color-to":"#6366f1","border-width":2,"border-radius":12}),c[9]||(c[9]=f("div",{class:"flex items-center justify-between"},[f("div",{class:"flex items-center gap-2"},[f("span",{class:"relative flex h-2 w-2"},[f("span",{class:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),f("span",{class:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]),f("span",{class:"text-xs font-bold text-zinc-800 dark:text-zinc-200"},"AI 推理状态")]),f("span",{class:"rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-sky-600 dark:text-sky-400"},"360° 流动")],-1)),c[10]||(c[10]=f("div",{class:"space-y-1.5"},[f("div",{class:"h-2 w-4/5 rounded-full bg-zinc-200 dark:bg-zinc-700"}),f("div",{class:"h-2 w-3/5 rounded-full bg-gradient-to-r from-sky-500/40 to-indigo-500/40"})],-1))])])]),_:1}),k(Qe,{name:"Interactive Particles",description:"原生 Canvas 2D 粒子引擎，支持鼠标悬浮动态引力排斥、微线互联与 60fps 满帧性能",cta:"查看详情与代码",href:"/docs/interactive-particles"},{icon:Z(()=>[k(P(jn),{class:"h-5 w-5 text-amber-500"})]),background:Z(()=>[f("div",T0,[k(yl,{quantity:38,speed:.75,"mouse-radius":85,"connect-lines":!0,class:"absolute inset-0 h-full w-full"}),c[11]||(c[11]=f("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[f("div",{class:"flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1 text-xs font-mono font-medium text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900/60 dark:bg-zinc-900/80 dark:text-blue-400"},[f("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"}),f("span",null,"悬浮鼠标即刻磁吸交互")])],-1))])]),_:1}),k(Qe,{name:"Retro Grid",description:"3D 倾斜无限延展赛博网格，原生区分明暗模式线条色彩，渲染极具科技纵深感的背景",cta:"查看详情与代码",href:"/docs/retro-grid"},{icon:Z(()=>[k(P(mr),{class:"h-5 w-5 text-indigo-500"})]),background:Z(()=>[f("div",M0,[k(Os,{angle:65,opacity:.85,"cell-size":34,"light-line-color":"#6366f1","dark-line-color":"#38bdf8"}),c[12]||(c[12]=f("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[f("span",{class:"rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-xs backdrop-blur-md dark:border-indigo-900/80 dark:bg-zinc-900/90 dark:text-indigo-400"}," 3D 空间动态透视 ")],-1))])]),_:1}),k(Qe,{name:"Shimmer Button",description:"360° 旋转锥形流光高光外圈，适配核心 CTA 与付费引导，鼠标悬停即刻聚光",cta:"查看详情与代码",href:"/docs/shimmer-button"},{icon:Z(()=>[k(P(He),{class:"h-5 w-5 text-pink-500"})]),background:Z(()=>[f("div",$0,[k(Gn,{"shimmer-color":"#ec4899","shimmer-duration":"2.4s",class:"shadow-lg"},{default:Z(()=>[k(P(He),{class:"h-4 w-4 text-pink-400"}),c[13]||(c[13]=f("span",null,"360° 旋转光晕按钮",-1))]),_:1}),c[14]||(c[14]=f("span",{class:"mt-3 text-[11px] font-mono text-zinc-400"},"悬停查看高光边缘旋转",-1))])]),_:1}),k(Qe,{name:"Shiny Text",description:"金属质感微光划过文字，2.5s 线性平滑连续循环，高亮 Hero 标题与特色特性",cta:"查看详情与代码",href:"/docs/shiny-text"},{icon:Z(()=>[k(P(He),{class:"h-5 w-5 text-amber-500"})]),background:Z(()=>[f("div",F0,[c[15]||(c[15]=f("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"},null,-1)),k(Hn,{text:"✨ Metallic Shiny Sheen",class:"relative z-10 text-xl font-black tracking-tight",speed:2.2}),c[16]||(c[16]=f("p",{class:"relative z-10 mt-2 text-xs font-mono text-zinc-400"},"高对比连续金属质感流动",-1))])]),_:1}),k(Qe,{name:"Dot Pattern",description:"极简矢量波点底纹，支持鼠标实时光晕跟随聚光灯，轻量零性能损耗",cta:"查看详情与代码",href:"/docs/dot-pattern"},{icon:Z(()=>[k(P(md),{class:"h-5 w-5 text-emerald-500"})]),background:Z(()=>[f("div",I0,[k(vl,{width:16,height:16,cr:1.2,glow:!0}),c[17]||(c[17]=f("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[f("span",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}," 移动鼠标点亮光晕 ")],-1))])]),_:1}),k(Qe,{name:"Marquee",description:"纯 CSS 硬件加速无限无缝滚动跑马灯，支持鼠标悬浮暂停、反向循环与变速",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/marquee"},{icon:Z(()=>[k(P(ud),{class:"h-5 w-5 text-blue-500"})]),background:Z(()=>[f("div",P0,[k(hr,{duration:16,"pause-on-hover":!0},{default:Z(()=>[($(),j(ke,null,it(["GPT-4o","Claude 3.5","DeepSeek-V3","Llama 3.3","Gemini 1.5"],d=>f("div",{key:d,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[c[18]||(c[18]=f("span",{class:"h-1.5 w-1.5 rounded-full bg-emerald-500"},null,-1)),f("span",null,ie(d),1)])),64))]),_:1}),k(hr,{duration:20,reverse:!0,"pause-on-hover":!0,class:"mt-2.5"},{default:Z(()=>[($(),j(ke,null,it(["Vue 3.5","TypeScript","Tailwind CSS","Zero-Config","Canvas 2D"],d=>f("div",{key:d,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[c[19]||(c[19]=f("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),f("span",null,ie(d),1)])),64))]),_:1})])]),_:1}),k(Qe,{name:"Bento Grid",description:"现代 SaaS 模块化栅格系统，卡片集成鼠标跟随 Spotlight 径向聚光灯流光",cta:"查看详情与代码",href:"/docs/bento-grid"},{icon:Z(()=>[k(P(mr),{class:"h-5 w-5 text-purple-500"})]),background:Z(()=>[...c[20]||(c[20]=[f("div",{class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent"},[f("div",{class:"grid grid-cols-2 gap-2 w-full max-w-[200px]"},[f("div",{class:"h-12 rounded-lg border border-purple-300/40 bg-purple-500/10 dark:border-purple-500/30 dark:bg-purple-500/20 flex items-center justify-center text-[10px] font-mono text-purple-600 dark:text-purple-300"}," Col 1 "),f("div",{class:"h-12 rounded-lg border border-blue-300/40 bg-blue-500/10 dark:border-blue-500/30 dark:bg-blue-500/20 flex items-center justify-center text-[10px] font-mono text-blue-600 dark:text-blue-300"}," Col 2 "),f("div",{class:"col-span-2 h-10 rounded-lg border border-indigo-300/40 bg-indigo-500/10 dark:border-indigo-500/30 dark:bg-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-600 dark:text-indigo-300"}," Span 2 · 动态聚光灯 ")])],-1)])]),_:1}),k(Qe,{name:"Meteors",description:"纯 CSS 赛博流星雨划过，带 50px 渐变光尾与随机延迟，暗黑科技卡片与首屏氛围杀器",cta:"查看详情与代码",href:"/docs/meteors"},{icon:Z(()=>[k(P(He),{class:"h-5 w-5 text-sky-400"})]),background:Z(()=>[f("div",L0,[k(wl,{number:20}),c[21]||(c[21]=f("div",{class:"flex h-full flex-col justify-end"},[f("span",{class:"text-xs font-mono text-sky-400 font-bold"},"215° 斜掠流星轨迹")],-1))])]),_:1}),k(Qe,{name:"Ripple",description:"由中心向外周循环脉冲扩散的多层同心圆涟漪，适配 AI 语音拾音、雷达声呐与核心头像高亮",cta:"查看详情与代码",href:"/docs/ripple"},{icon:Z(()=>[k(P(Ts),{class:"h-5 w-5 text-blue-500"})]),background:Z(()=>[f("div",O0,[k(kl,{"main-circle-size":110,"num-circles":6}),f("div",D0,[k(P(Ts),{class:"h-6 w-6"})])])]),_:1}),k(Qe,{name:"Number Ticker",description:"采用 easeOutExpo 缓动曲线的平滑数字翻牌器，进入视口自动起跑，SaaS 核心关键业务指标必备",cta:"查看详情与代码",href:"/docs/number-ticker"},{icon:Z(()=>[k(P(Ga),{class:"h-5 w-5 text-emerald-500"})]),background:Z(()=>[f("div",B0,[f("div",j0,[k(gr,{value:99.99,"decimal-places":2}),c[22]||(c[22]=Xe("% ",-1))]),c[23]||(c[23]=f("p",{class:"mt-2 text-xs font-mono text-zinc-500"},"SLA 生产高可用性指标",-1))])]),_:1}),k(Qe,{name:"Animated Beam",description:"Magic UI 标志性连线动效，在多个 DOM 节点间实时计算贝塞尔曲线，驱动 SVG 能量光球脉冲流动",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/animated-beam"},{icon:Z(()=>[k(P(jn),{class:"h-5 w-5 text-indigo-500"})]),background:Z(()=>[f("div",{ref_key:"homeBeamContainer",ref:t,class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 flex items-center justify-between px-8"},[f("div",{ref_key:"homeBeamUser",ref:n,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-blue-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-blue-400"},[k(P(Va),{class:"h-5 w-5"})],512),f("div",{ref_key:"homeBeamAi",ref:r,class:"z-10 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/40"},[k(P(He),{class:"h-6 w-6"})],512),f("div",{ref_key:"homeBeamDb",ref:s,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400"},[k(P(Es),{class:"h-5 w-5"})],512),k(Tr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.2},null,8,["container-ref","from-ref","to-ref"]),k(Tr,{"container-ref":t.value,"from-ref":r.value,"to-ref":s.value,duration:2.2,delay:.5},null,8,["container-ref","from-ref","to-ref"])],512)]),_:1}),k(Qe,{name:"Flickering Grid",description:"Canvas 2D 原生微闪烁网格，每个小方格独立呼吸微光，营造赛博黑客帝国与智能矩阵氛围",cta:"查看详情与代码",href:"/docs/flickering-grid"},{icon:Z(()=>[k(P(mr),{class:"h-5 w-5 text-sky-500"})]),background:Z(()=>[f("div",N0,[k(zl,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),c[24]||(c[24]=f("div",{class:"relative z-10 flex h-full items-center justify-center"},[f("span",{class:"rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-500 dark:text-sky-400 font-bold"}," 60FPS 矩阵微闪 ")],-1))])]),_:1})]),_:1})]),f("section",G0,[k(_l,{class:"min-h-[460px]"},{default:Z(()=>[c[27]||(c[27]=f("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-6xl font-black tracking-tight text-transparent"}," 为极致审美而生的动效原子 ",-1)),c[28]||(c[28]=f("p",{class:"mt-4 max-w-lg text-sm text-slate-400"}," 全面对标 Magic UI 与 Aceternity UI，支持单文件复制即用，零侵入无外部复杂构建负担。 ",-1)),f("div",H0,[k(u,{to:"/docs/lamp-effect"},{default:Z(()=>[k(Gn,{"shimmer-color":"#38bdf8",class:"h-11 px-6 text-sm"},{default:Z(()=>[c[26]||(c[26]=f("span",null,"探索 Lamp Effect",-1)),k(P(Rs),{class:"h-4 w-4"})]),_:1})]),_:1})])]),_:1})]),f("section",V0,[f("div",q0,[f("div",U0,[f("div",W0,[f("div",X0,[k(P(Rr),{class:"h-5 w-5"})]),c[29]||(c[29]=f("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," Copy & Paste 模式 ",-1)),c[30]||(c[30]=f("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不是封闭的黑盒 npm 库。代码完全属于你，复制进你的项目 `src/components/ui` 即可按需自定义与扩展。 ",-1))]),f("div",K0,[f("div",Y0,[k(P(jn),{class:"h-5 w-5"})]),c[31]||(c[31]=f("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 单文件自包含（Zero-Config） ",-1)),c[32]||(c[32]=f("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 动画关键帧与路径封装在组件内，完全无需在 tailwind.config.js 中配置复杂的 keyframes，避免配置遗漏。 ",-1))]),f("div",Z0,[f("div",J0,[k(P(He),{class:"h-5 w-5"})]),c[33]||(c[33]=f("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 真·明暗双模自适应 ",-1)),c[34]||(c[34]=f("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不仅在深黑背景下流光溢彩，更对纯白、浅灰背景做针对性调优，确保在任何业务场景下都有高级质感。 ",-1))])])])])])}}});var vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function em(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ps={exports:{}},yi;function tm(){return yi||(yi=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=(function(r){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function b(x){return x instanceof l?new l(x.type,b(x.content),x.alias):Array.isArray(x)?x.map(b):x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++o}),b.__id},clone:function b(x,y){y=y||{};var z,E;switch(a.util.type(x)){case"Object":if(E=a.util.objId(x),y[E])return y[E];z={},y[E]=z;for(var O in x)x.hasOwnProperty(O)&&(z[O]=b(x[O],y));return z;case"Array":return E=a.util.objId(x),y[E]?y[E]:(z=[],y[E]=z,x.forEach(function(T,M){z[M]=b(T,y)}),z);default:return x}},getLanguage:function(b){for(;b;){var x=s.exec(b.className);if(x)return x[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,x){b.className=b.className.replace(RegExp(s,"gi"),""),b.classList.add("language-"+x)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(z){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(z.stack)||[])[1];if(b){var x=document.getElementsByTagName("script");for(var y in x)if(x[y].src==b)return x[y]}return null}},isActive:function(b,x,y){for(var z="no-"+x;b;){var E=b.classList;if(E.contains(x))return!0;if(E.contains(z))return!1;b=b.parentElement}return!!y}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(b,x){var y=a.util.clone(a.languages[b]);for(var z in x)y[z]=x[z];return y},insertBefore:function(b,x,y,z){z=z||a.languages;var E=z[b],O={};for(var T in E)if(E.hasOwnProperty(T)){if(T==x)for(var M in y)y.hasOwnProperty(M)&&(O[M]=y[M]);y.hasOwnProperty(T)||(O[T]=E[T])}var Y=z[b];return z[b]=O,a.languages.DFS(a.languages,function(re,N){N===Y&&re!=b&&(this[re]=O)}),O},DFS:function b(x,y,z,E){E=E||{};var O=a.util.objId;for(var T in x)if(x.hasOwnProperty(T)){y.call(x,T,x[T],z||T);var M=x[T],Y=a.util.type(M);Y==="Object"&&!E[O(M)]?(E[O(M)]=!0,b(M,y,null,E)):Y==="Array"&&!E[O(M)]&&(E[O(M)]=!0,b(M,y,T,E))}}},plugins:{},highlightAll:function(b,x){a.highlightAllUnder(document,b,x)},highlightAllUnder:function(b,x,y){var z={callback:y,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",z),z.elements=Array.prototype.slice.apply(z.container.querySelectorAll(z.selector)),a.hooks.run("before-all-elements-highlight",z);for(var E=0,O;O=z.elements[E++];)a.highlightElement(O,x===!0,z.callback)},highlightElement:function(b,x,y){var z=a.util.getLanguage(b),E=a.languages[z];a.util.setLanguage(b,z);var O=b.parentElement;O&&O.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(O,z);var T=b.textContent,M={element:b,language:z,grammar:E,code:T};function Y(N){M.highlightedCode=N,a.hooks.run("before-insert",M),M.element.innerHTML=M.highlightedCode,a.hooks.run("after-highlight",M),a.hooks.run("complete",M),y&&y.call(M.element)}if(a.hooks.run("before-sanity-check",M),O=M.element.parentElement,O&&O.nodeName.toLowerCase()==="pre"&&!O.hasAttribute("tabindex")&&O.setAttribute("tabindex","0"),!M.code){a.hooks.run("complete",M),y&&y.call(M.element);return}if(a.hooks.run("before-highlight",M),!M.grammar){Y(a.util.encode(M.code));return}if(x&&r.Worker){var re=new Worker(a.filename);re.onmessage=function(N){Y(N.data)},re.postMessage(JSON.stringify({language:M.language,code:M.code,immediateClose:!0}))}else Y(a.highlight(M.code,M.grammar,M.language))},highlight:function(b,x,y){var z={code:b,grammar:x,language:y};if(a.hooks.run("before-tokenize",z),!z.grammar)throw new Error('The language "'+z.language+'" has no grammar.');return z.tokens=a.tokenize(z.code,z.grammar),a.hooks.run("after-tokenize",z),l.stringify(a.util.encode(z.tokens),z.language)},tokenize:function(b,x){var y=x.rest;if(y){for(var z in y)x[z]=y[z];delete x.rest}var E=new d;return h(E,E.head,b),u(b,E,x,E.head,0),A(E)},hooks:{all:{},add:function(b,x){var y=a.hooks.all;y[b]=y[b]||[],y[b].push(x)},run:function(b,x){var y=a.hooks.all[b];if(!(!y||!y.length))for(var z=0,E;E=y[z++];)E(x)}},Token:l};r.Prism=a;function l(b,x,y,z){this.type=b,this.content=x,this.alias=y,this.length=(z||"").length|0}l.stringify=function b(x,y){if(typeof x=="string")return x;if(Array.isArray(x)){var z="";return x.forEach(function(Y){z+=b(Y,y)}),z}var E={type:x.type,content:b(x.content,y),tag:"span",classes:["token",x.type],attributes:{},language:y},O=x.alias;O&&(Array.isArray(O)?Array.prototype.push.apply(E.classes,O):E.classes.push(O)),a.hooks.run("wrap",E);var T="";for(var M in E.attributes)T+=" "+M+'="'+(E.attributes[M]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+T+">"+E.content+"</"+E.tag+">"};function c(b,x,y,z){b.lastIndex=x;var E=b.exec(y);if(E&&z&&E[1]){var O=E[1].length;E.index+=O,E[0]=E[0].slice(O)}return E}function u(b,x,y,z,E,O){for(var T in y)if(!(!y.hasOwnProperty(T)||!y[T])){var M=y[T];M=Array.isArray(M)?M:[M];for(var Y=0;Y<M.length;++Y){if(O&&O.cause==T+","+Y)return;var re=M[Y],N=re.inside,le=!!re.lookbehind,Re=!!re.greedy,Me=re.alias;if(Re&&!re.pattern.global){var de=re.pattern.toString().match(/[imsuy]*$/)[0];re.pattern=RegExp(re.pattern.source,de+"g")}for(var ce=re.pattern||re,te=z.next,Ee=E;te!==x.tail&&!(O&&Ee>=O.reach);Ee+=te.value.length,te=te.next){var W=te.value;if(x.length>b.length)return;if(!(W instanceof l)){var je=1,be;if(Re){if(be=c(ce,Ee,b,le),!be||be.index>=b.length)break;var pe=be.index,pt=be.index+be[0].length,Ie=Ee;for(Ie+=te.value.length;pe>=Ie;)te=te.next,Ie+=te.value.length;if(Ie-=te.value.length,Ee=Ie,te.value instanceof l)continue;for(var we=te;we!==x.tail&&(Ie<pt||typeof we.value=="string");we=we.next)je++,Ie+=we.value.length;je--,W=b.slice(Ee,Ie),be.index-=Ee}else if(be=c(ce,0,W,le),!be)continue;var pe=be.index,S=be[0],U=W.slice(0,pe),D=W.slice(pe+S.length),J=Ee+W.length;O&&J>O.reach&&(O.reach=J);var p=te.prev;U&&(p=h(x,p,U),Ee+=U.length),m(x,p,je);var g=new l(T,N?a.tokenize(S,N):S,Me,S);if(te=h(x,p,g),D&&h(x,te,D),je>1){var w={cause:T+","+Y,reach:J};u(b,x,y,te.prev,Ee,w),O&&w.reach>O.reach&&(O.reach=w.reach)}}}}}}function d(){var b={value:null,prev:null,next:null},x={value:null,prev:b,next:null};b.next=x,this.head=b,this.tail=x,this.length=0}function h(b,x,y){var z=x.next,E={value:y,prev:x,next:z};return x.next=E,z.prev=E,b.length++,E}function m(b,x,y){for(var z=x.next,E=0;E<y&&z!==b.tail;E++)z=z.next;x.next=z,z.prev=x,b.length-=E}function A(b){for(var x=[],y=b.head.next;y!==b.tail;)x.push(y.value),y=y.next;return x}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(b){var x=JSON.parse(b.data),y=x.language,z=x.code,E=x.immediateClose;r.postMessage(a.highlight(z,a.languages[y],y)),E&&r.close()},!1)),a;var v=a.util.currentScript();v&&(a.filename=v.src,v.hasAttribute("data-manual")&&(a.manual=!0));function R(){a.manual||a.highlightAll()}if(!a.manual){var L=document.readyState;L==="loading"||L==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",R):window.requestAnimationFrame?window.requestAnimationFrame(R):window.setTimeout(R,16)}return a})(t);e.exports&&(e.exports=n),typeof vi<"u"&&(vi.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(s,o){var i={};i["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[o]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};a["language-"+o]={pattern:/[\s\S]+/,inside:n.languages[o]};var l={};l[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,s){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:n.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(r){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var o=r.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",s=function(v,R){return"✖ Error "+v+" while fetching file: "+R},o="✖ Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",c="loaded",u="failed",d="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+l+'"])';function h(v,R,L){var b=new XMLHttpRequest;b.open("GET",v,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?R(b.responseText):b.status>=400?L(s(b.status,b.statusText)):L(o))},b.send(null)}function m(v){var R=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(R){var L=Number(R[1]),b=R[2],x=R[3];return b?x?[L,Number(x)]:[L,void 0]:[L,L]}}n.hooks.add("before-highlightall",function(v){v.selector+=", "+d}),n.hooks.add("before-sanity-check",function(v){var R=v.element;if(R.matches(d)){v.code="",R.setAttribute(a,l);var L=R.appendChild(document.createElement("CODE"));L.textContent=r;var b=R.getAttribute("data-src"),x=v.language;if(x==="none"){var y=(/\.(\w+)$/.exec(b)||[,"none"])[1];x=i[y]||y}n.util.setLanguage(L,x),n.util.setLanguage(R,x);var z=n.plugins.autoloader;z&&z.loadLanguages(x),h(b,function(E){R.setAttribute(a,c);var O=m(R.getAttribute("data-range"));if(O){var T=E.split(/\r\n?|\n/g),M=O[0],Y=O[1]==null?T.length:O[1];M<0&&(M+=T.length),M=Math.max(0,Math.min(M-1,T.length)),Y<0&&(Y+=T.length),Y=Math.max(0,Math.min(Y,T.length)),E=T.slice(M,Y).join(`
`),R.hasAttribute("data-start")||R.setAttribute("data-start",String(M+1))}L.textContent=E,n.highlightElement(L)},function(E){R.setAttribute(a,u),L.textContent=E})}}),n.plugins.fileHighlight={highlight:function(R){for(var L=(R||document).querySelectorAll(d),b=0,x;x=L[b++];)n.highlightElement(x)}};var A=!1;n.fileHighlight=function(){A||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),A=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(ps)),ps.exports}var nm=tm();const ms=em(nm);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var wi={},ki;function rm(){return ki||(ki=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),wi}rm();Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};s["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var o={};o[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:s},Prism.languages.insertBefore("markup","cdata",o)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);const sm={class:"relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800 text-zinc-100 shadow-sm"},om={class:"flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5 text-xs text-zinc-400"},im={class:"font-mono"},am={class:"max-h-[480px] overflow-auto p-4 text-xs font-mono leading-relaxed"},lm={class:"!m-0 !p-0 !bg-transparent"},cm=["innerHTML"],_i=ye({__name:"CodeBlock",props:{code:{},language:{default:"html"},filename:{}},setup(e){const t=e,n=oe(!1),r=Ae(()=>{const o=ms.languages[t.language]||ms.languages.markup;return ms.highlight(t.code.trim(),o,t.language)});async function s(){try{await navigator.clipboard.writeText(t.code.trim()),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(o){console.error("Failed to copy",o)}}return(o,i)=>($(),j("div",sm,[f("div",om,[f("span",im,ie(t.filename||t.language.toUpperCase()),1),f("button",{type:"button",class:"inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",onClick:s},[n.value?($(),Be(P(eo),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):($(),Be(P(Rr),{key:1,class:"h-3.5 w-3.5"})),f("span",null,ie(n.value?"已复制！":"复制代码"),1)])]),f("div",am,[f("pre",lm,[f("code",{innerHTML:r.value},null,8,cm)])])]))}}),um={class:"space-y-4"},dm={class:"space-y-1"},fm={class:"text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},pm={class:"text-sm text-zinc-500 dark:text-zinc-400"},mm={class:"overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-sm transition-colors"},hm={class:"flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 bg-zinc-50/80 px-4 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/60"},gm={class:"flex items-center gap-1 rounded-lg bg-zinc-200/60 p-1 dark:bg-zinc-800/60 text-xs font-medium"},bm={key:0,class:"flex items-center gap-2 text-xs"},xm={class:"flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-0.5"},vm={class:"relative"},ym={class:"p-4"},wm={class:"p-4"},km={key:0,class:"mt-8 space-y-3"},_m={class:"overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800"},zm={class:"w-full text-left text-xs"},Cm={class:"divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono"},Am={class:"px-4 py-2.5 font-bold text-blue-600 dark:text-blue-400"},Sm={class:"px-4 py-2.5 text-pink-600 dark:text-pink-400"},Rm={class:"px-4 py-2.5 text-zinc-500"},Em={class:"px-4 py-2.5 font-sans text-zinc-600 dark:text-zinc-300"},Tm=ye({__name:"ComponentPreview",props:{title:{},description:{},componentCode:{},usageCode:{},componentFilename:{},propsList:{}},setup(e){const t=e,n=oe("preview"),r=oe("default"),s=oe(0),o=oe(!0);let i=null;xt(()=>{o.value=document.documentElement.classList.contains("dark"),i=new MutationObserver(()=>{o.value=document.documentElement.classList.contains("dark")}),i.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}),It(()=>{i==null||i.disconnect()});const a=Ae(()=>r.value==="dark"?!0:r.value==="light"?!1:o.value);function l(){s.value++}return(c,u)=>($(),j("div",um,[f("div",dm,[f("h2",fm,ie(t.title),1),f("p",pm,ie(t.description),1)]),f("div",mm,[f("div",hm,[f("div",gm,[f("button",{type:"button",class:V(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="preview"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[0]||(u[0]=d=>n.value="preview")},[k(P(rd),{class:"h-3.5 w-3.5"}),u[6]||(u[6]=f("span",null,"实时效果",-1))],2),f("button",{type:"button",class:V(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="component"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[1]||(u[1]=d=>n.value="component")},[k(P(Xo),{class:"h-3.5 w-3.5"}),f("span",null,"组件源码 ("+ie(t.componentFilename)+")",1)],2),f("button",{type:"button",class:V(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="usage"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[2]||(u[2]=d=>n.value="usage")},[k(P(Xo),{class:"h-3.5 w-3.5"}),u[7]||(u[7]=f("span",null,"业务调用 (Usage.vue)",-1))],2)]),n.value==="preview"?($(),j("div",bm,[u[8]||(u[8]=f("span",{class:"text-zinc-400"},"视窗底色：",-1)),f("div",xm,[f("button",{type:"button",class:V(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="default"?"bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[3]||(u[3]=d=>r.value="default")}," 自适应 ",2),f("button",{type:"button",class:V(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="light"?"bg-white text-zinc-900 shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[4]||(u[4]=d=>r.value="light")}," 亮白 ",2),f("button",{type:"button",class:V(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="dark"?"bg-black text-white shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[5]||(u[5]=d=>r.value="dark")}," 暗黑 ",2)]),f("button",{type:"button",class:"inline-flex items-center gap-1 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",title:"重新触发动效",onClick:l},[k(P(dd),{class:"h-3.5 w-3.5"})])])):Ye("",!0)]),f("div",vm,[es(f("div",{class:V(["relative flex min-h-[360px] w-full items-center justify-center overflow-hidden p-8 transition-colors duration-200",a.value?"dark bg-black text-zinc-100":"bg-zinc-100/80 text-zinc-900"])},[($(),j("div",{key:s.value,class:"w-full flex items-center justify-center"},[ut(c.$slots,"default",{isDark:a.value})]))],2),[[os,n.value==="preview"]]),es(f("div",ym,[k(_i,{code:t.componentCode,filename:t.componentFilename,language:"html"},null,8,["code","filename"])],512),[[os,n.value==="component"]]),es(f("div",wm,[k(_i,{code:t.usageCode,filename:"UsageExample.vue",language:"html"},null,8,["code"])],512),[[os,n.value==="usage"]])])]),t.propsList&&t.propsList.length>0?($(),j("div",km,[u[10]||(u[10]=f("h3",{class:"text-base font-semibold text-zinc-900 dark:text-zinc-100"}," Props 属性参考 ",-1)),f("div",_m,[f("table",zm,[u[9]||(u[9]=f("thead",{class:"border-b border-zinc-200 bg-zinc-50/80 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"},[f("tr",null,[f("th",{class:"px-4 py-2.5"},"属性名"),f("th",{class:"px-4 py-2.5"},"类型"),f("th",{class:"px-4 py-2.5"},"默认值"),f("th",{class:"px-4 py-2.5"},"说明")])],-1)),f("tbody",Cm,[($(!0),j(ke,null,it(t.propsList,d=>($(),j("tr",{key:d.name,class:"text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40"},[f("td",Am,ie(d.name),1),f("td",Sm,ie(d.type),1),f("td",Rm,ie(d.default),1),f("td",Em,ie(d.description),1)]))),128))])])])])):Ye("",!0)]))}}),Mm=["onMouseenter","onClick"],$m={key:0,class:"pointer-events-none absolute -top-9 z-50 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-800/95 dark:text-zinc-200"},Fm=ye({__name:"Dock",props:{items:{},iconSize:{default:44},iconMagnification:{default:68},iconDistance:{default:120},direction:{default:"bottom"},class:{}},setup(e){const t=e,n=oe(null),r=oe(null),s=oe(null);function o(d){r.value=d.clientX}function i(){r.value=null,s.value=null}function a(d){if(r.value===null||!d)return 1;const h=d.getBoundingClientRect(),m=h.left+h.width/2,A=Math.abs(r.value-m);if(A>t.iconDistance)return 1;const v=A/t.iconDistance,R=(t.iconMagnification-t.iconSize)/t.iconSize,L=.5*(1+Math.cos(v*Math.PI));return 1+R*L}const l=oe([]);function c(d,h){d&&(l.value[h]=d)}function u(d){const h=l.value[d],m=a(h);return Math.round(t.iconSize*m)}return(d,h)=>($(),j("div",{ref_key:"dockRef",ref:n,class:V(P(Fe)("mx-auto flex h-16 items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/70 px-4 py-2 shadow-xl backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 transition-all duration-200 select-none",t.direction==="bottom"&&"items-end",t.direction==="top"&&"items-start",t.direction==="middle"&&"items-center",t.class)),onMousemove:o,onMouseleave:i},[t.items&&t.items.length>0?($(!0),j(ke,{key:0},it(t.items,(m,A)=>($(),j("div",{key:m.id,ref_for:!0,ref:v=>c(v,A),class:"group relative flex items-center justify-center cursor-pointer transition-all duration-100 ease-out",style:Ue({width:`${u(A)}px`,height:`${u(A)}px`}),onMouseenter:v=>s.value=m.label||null,onClick:v=>m.onClick&&m.onClick()},[($(),Be(vo(m.href?"a":"button"),{href:m.href,class:V(["flex h-full w-full items-center justify-center rounded-2xl border transition-colors shadow-sm","border-zinc-200/70 bg-white/90 text-zinc-700 hover:text-zinc-950","dark:border-zinc-700/60 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:text-white"])},{default:Z(()=>[($(),Be(vo(m.icon),{class:"h-1/2 w-1/2 transition-transform duration-100"}))]),_:2},1032,["href"])),k(ja,{name:"dock-fade"},{default:Z(()=>[s.value===m.label&&m.label?($(),j("div",$m,ie(m.label),1)):Ye("",!0)]),_:2},1024),h[0]||(h[0]=f("span",{class:"absolute -bottom-1.5 h-1 w-1 rounded-full bg-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-zinc-500"},null,-1))],44,Mm))),128)):ut(d.$slots,"default",{},void 0,!0,1)],34))}}),Im=vt(Fm,[["__scopeId","data-v-3c8b0d2e"]]),Pm={key:0,class:"pointer-events-none absolute inset-0 h-full w-full select-none",xmlns:"http://www.w3.org/2000/svg"},Lm=["r","stroke","stroke-width"],Om={class:"orbit-rotator pointer-events-auto h-full w-full"},Dm={class:"orbit-item pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"},Bm=ye({__name:"OrbitLogos",props:{radius:{default:120},duration:{default:20},delay:{default:0},reverse:{type:Boolean,default:!1},path:{type:Boolean,default:!0},pathColor:{},pathWidth:{default:1},tiltAngle:{default:0},class:{}},setup(e){const t=e,n=Ae(()=>({"--radius":`${t.radius}px`,"--duration":`${t.duration}s`,"--delay":`-${t.delay}s`,"--direction":t.reverse?"reverse":"normal","--counter-direction":t.reverse?"normal":"reverse","--tilt":`${t.tiltAngle}deg`,width:`${t.radius*2}px`,height:`${t.radius*2}px`}));return(r,s)=>($(),j("div",{style:Ue(n.value),class:V(P(Fe)("pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full [transform-style:preserve-3d]",t.class))},[t.path?($(),j("svg",Pm,[f("circle",{class:"stroke-zinc-300/60 dark:stroke-zinc-800/80 stroke-dashed",cx:"50%",cy:"50%",r:t.radius,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-dasharray":"4 4"},null,8,Lm)])):Ye("",!0),f("div",Om,[f("div",Dm,[ut(r.$slots,"default",{},void 0,!0)])])],6))}}),ur=vt(Bm,[["__scopeId","data-v-583093f1"]]),jm=["src","alt"],Nm={class:"pointer-events-none absolute bottom-4 right-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},Gm=["src","alt"],Hm={class:"pointer-events-none absolute bottom-4 left-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},Vm={class:"absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-zinc-800 shadow-xl backdrop-blur-md transition-transform duration-100 hover:scale-110 active:scale-95 dark:border-zinc-700/80 dark:bg-zinc-900/90 dark:text-zinc-200"},qm=ye({__name:"ImageCompare",props:{beforeImage:{},afterImage:{},beforeLabel:{default:"Before"},afterLabel:{default:"After"},initialPosition:{default:50},class:{}},setup(e){const t=e,n=oe(null),r=oe(t.initialPosition),s=oe(!1);function o(u){if(!n.value)return;const d=n.value.getBoundingClientRect(),h=u-d.left,m=Math.min(Math.max(h/d.width*100,0),100);r.value=Number(m.toFixed(2))}function i(u){s.value=!0,o(u.clientX)}function a(u){s.value&&o(u.clientX)}function l(){s.value=!1}function c(u){!s.value||u.touches.length===0||o(u.touches[0].clientX)}return xt(()=>{window.addEventListener("mouseup",l),window.addEventListener("mousemove",a),window.addEventListener("touchend",l),window.addEventListener("touchmove",c)}),It(()=>{window.removeEventListener("mouseup",l),window.removeEventListener("mousemove",a),window.removeEventListener("touchend",l),window.removeEventListener("touchmove",c)}),(u,d)=>($(),j("div",{ref_key:"containerRef",ref:n,class:V(P(Fe)("relative select-none overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 shadow-xl cursor-ew-resize dark:border-zinc-800/80",t.class)),onMousedown:i,onTouchstart:d[0]||(d[0]=h=>s.value=!0)},[f("img",{src:t.afterImage,alt:t.afterLabel,class:"pointer-events-none h-full w-full object-cover"},null,8,jm),f("div",Nm,ie(t.afterLabel),1),f("div",{class:"pointer-events-none absolute inset-0 h-full w-full overflow-hidden",style:Ue({clipPath:`inset(0 ${100-r.value}% 0 0)`})},[f("img",{src:t.beforeImage,alt:t.beforeLabel,class:"h-full w-full object-cover"},null,8,Gm),f("div",Hm,ie(t.beforeLabel),1)],4),f("div",{class:"pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]",style:Ue({left:`${r.value}%`})},[f("div",Vm,[k(P(ed),{class:"h-4 w-4"})])],4)],34))}}),Um={class:"group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/90 dark:bg-zinc-950/90"},Wm={class:"flex items-center gap-2.5 min-w-0"},Xm={class:"relative flex h-3 w-3 shrink-0 items-center justify-center"},Km={class:"flex flex-col min-w-0"},Ym={class:"flex items-center gap-2"},Zm={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate"},Jm={class:"text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5"},Qm={class:"flex items-center gap-2 shrink-0 text-xs text-zinc-500"},eh={key:0,class:"flex items-center gap-1 font-mono text-[11px] rounded-md bg-zinc-100 px-2 py-0.5 dark:bg-zinc-900 dark:text-zinc-300"},th={key:0,class:"border-t border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-2.5"},nh={class:"mt-0.5 shrink-0"},rh={key:3,class:"inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 text-[10px] text-zinc-400 dark:border-zinc-700"},sh={class:"flex-1 min-w-0"},oh={class:"flex items-center justify-between"},ih={key:0,class:"font-mono text-[10px] text-zinc-400 shrink-0 ml-2"},ah={key:0,class:"text-[11px] text-zinc-400 font-mono mt-0.5 truncate"},lh=ye({__name:"AgentStatus",props:{status:{default:"thinking"},agentName:{default:"Aura AI Agent"},currentTask:{default:"Thinking and orchestrating subagents..."},elapsed:{type:Boolean,default:!0},steps:{default:()=>[{id:1,name:"Understand user prompt requirements",status:"done",duration:"0.4s"},{id:2,name:"Search codebase for components & hooks",status:"done",duration:"1.2s"},{id:3,name:"Run Playwright headless visual verification",status:"running",detail:"Evaluating DOM computed styles..."},{id:4,name:"Commit and build production artifacts",status:"pending"}]},class:{}},setup(e){const t=e,n=oe(!1),r=oe(0);let s=null;xt(()=>{t.elapsed&&(s=setInterval(()=>{r.value+=.1},100))}),It(()=>{s&&clearInterval(s)});const o=Ae(()=>`${r.value.toFixed(1)}s`),i=Ae(()=>{switch(t.status){case"thinking":return{icon:He,label:"思考推演中",color:"text-sky-500 dark:text-sky-400",badgeBg:"bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",pulseBg:"bg-sky-500"};case"running":return{icon:Yo,label:"自主执行中",color:"text-blue-500 dark:text-blue-400 animate-spin",badgeBg:"bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",pulseBg:"bg-blue-500"};case"tool_call":return{icon:gd,label:"调用工具中",color:"text-amber-500 dark:text-amber-400",badgeBg:"bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",pulseBg:"bg-amber-500"};case"success":return{icon:Wo,label:"任务已闭环",color:"text-emerald-500 dark:text-emerald-400",badgeBg:"bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",pulseBg:"bg-emerald-500"};case"error":return{icon:Uo,label:"出现异常",color:"text-rose-500 dark:text-rose-400",badgeBg:"bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",pulseBg:"bg-rose-500"};default:return{icon:He,label:"待命中",color:"text-zinc-400",badgeBg:"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",pulseBg:"bg-zinc-400"}}});return(a,l)=>($(),j("div",{class:V(P(Fe)("w-full max-w-lg transition-all duration-300",t.class))},[f("div",Um,[f("div",{class:"flex items-center justify-between gap-3 px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60",onClick:l[0]||(l[0]=c=>n.value=!n.value)},[f("div",Wm,[f("div",Xm,[f("span",{class:V(["absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",i.value.pulseBg])},null,2),f("span",{class:V(["relative inline-flex h-2 w-2 rounded-full",i.value.pulseBg])},null,2)]),f("div",Km,[f("div",Ym,[f("span",Zm,ie(t.agentName),1),f("span",{class:V(["rounded-full border px-2 py-0.2 text-[10px] font-semibold",i.value.badgeBg])},ie(i.value.label),3)]),f("p",Jm,ie(t.currentTask),1)])]),f("div",Qm,[t.elapsed?($(),j("div",eh,[k(P(td),{class:"h-3 w-3 text-zinc-400"}),f("span",null,ie(o.value),1)])):Ye("",!0),k(P(Qu),{class:V(["h-4 w-4 text-zinc-400 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])]),k(ja,{name:"agent-expand"},{default:Z(()=>[n.value&&t.steps&&t.steps.length>0?($(),j("div",th,[l[1]||(l[1]=f("div",{class:"text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2"}," 执行轨迹步骤 (Execution Steps) ",-1)),($(!0),j(ke,null,it(t.steps,(c,u)=>($(),j("div",{key:c.id,class:"flex items-start gap-2.5 text-xs"},[f("div",nh,[c.status==="done"?($(),Be(P(Wo),{key:0,class:"h-4 w-4 text-emerald-500"})):c.status==="running"?($(),Be(P(Yo),{key:1,class:"h-4 w-4 text-sky-500 animate-spin"})):c.status==="error"?($(),Be(P(Uo),{key:2,class:"h-4 w-4 text-rose-500"})):($(),j("span",rh,ie(u+1),1))]),f("div",sh,[f("div",oh,[f("span",{class:V(["font-medium truncate",c.status==="done"&&"text-zinc-700 dark:text-zinc-300",c.status==="running"&&"text-sky-600 dark:text-sky-400 font-semibold",c.status==="pending"&&"text-zinc-400 dark:text-zinc-500",c.status==="error"&&"text-rose-500 font-semibold"])},ie(c.name),3),c.duration?($(),j("span",ih,ie(c.duration),1)):Ye("",!0)]),c.detail?($(),j("p",ah,ie(c.detail),1)):Ye("",!0)])]))),128))])):Ye("",!0)]),_:1})])],2))}}),ch=vt(lh,[["__scopeId","data-v-d55be07e"]]),uh={class:"flex h-10 w-full items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 select-none"},dh={class:"flex items-center gap-1.5 text-[11px] font-medium text-zinc-400"},fh={class:"truncate max-w-[220px] sm:max-w-md"},ph={key:0,class:"flex items-center gap-2"},mh={key:1,class:"w-12"},hh={class:"text-blue-400 select-none font-bold"},gh={class:"text-zinc-100 font-semibold flex-1 break-all"},bh={key:0,class:"inline-block h-4 w-2 translate-y-0.5 bg-blue-500 animate-pulse ml-0.5"},xh={key:1,class:"text-emerald-400 font-medium break-all"},vh={key:2,class:"text-rose-400 font-medium break-all"},yh={key:3,class:"text-amber-400 font-medium break-all"},wh={key:4,class:"text-sky-400 font-medium break-all"},kh={key:5,class:"text-zinc-400 break-all"},_h={key:0,class:"flex items-center gap-2 pt-1"},zh=ye({__name:"TypewriterTerminal",props:{title:{default:"zsh - aura@developer:~ (80x24)"},lines:{default:()=>[{type:"input",text:"pnpm dlx aura-ui@latest add agent-status dock"},{type:"output",text:"⠋ Resolving packages & peer dependencies..."},{type:"output",text:"✔ Cloned src/components/ui/AgentStatus.vue"},{type:"output",text:"✔ Cloned src/components/ui/Dock.vue"},{type:"success",text:"✨ Successfully installed 2 motion primitives in 260ms."},{type:"input",text:"aura test --visual-regression"},{type:"info",text:"ℹ Running Playwright headless test in Chromium..."},{type:"success",text:"✔ All 19 components passed 60fps frame rate check!"}]},typingSpeed:{default:35},pauseEnd:{default:3500},loop:{type:Boolean,default:!0},controls:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=oe([]),r=oe(0),s=oe(0),o=oe(!1),i=oe(!1),a=oe(!1),l=oe(null);let c=null;function u(){l.value&&(l.value.scrollTop=l.value.scrollHeight)}function d(){c&&clearTimeout(c),n.value=[],r.value=0,s.value=0,o.value=!1,i.value=!1,h()}function h(){if(!t.lines||t.lines.length===0)return;if(r.value>=t.lines.length){o.value=!1,i.value=!0,t.loop&&(c=setTimeout(()=>{d()},t.pauseEnd));return}const A=t.lines[r.value];if(A.type==="input")if(o.value=!0,s.value===0&&n.value.push({type:"input",text:"",prefix:A.prefix||"$ "}),s.value<A.text.length){const v=n.value[n.value.length-1];v.text+=A.text[s.value],s.value++,u();const R=Math.floor(Math.random()*25)-10,L=Math.max(15,t.typingSpeed+R);c=setTimeout(h,L)}else s.value=0,r.value++,o.value=!1,u(),c=setTimeout(h,400);else{o.value=!1,n.value.push({type:A.type,text:A.text,prefix:A.prefix}),r.value++,u();const v=A.delay??220;c=setTimeout(h,v)}}function m(){const A=t.lines.map(v=>`${v.prefix||(v.type==="input"?"$ ":"")}${v.text}`).join(`
`);navigator.clipboard.writeText(A),a.value=!0,setTimeout(()=>{a.value=!1},2e3)}return xt(()=>{d()}),It(()=>{c&&clearTimeout(c)}),Ht(()=>t.lines,()=>{d()},{deep:!0}),(A,v)=>($(),j("div",{class:V(P(Fe)("relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 font-mono text-xs sm:text-sm text-zinc-300 shadow-2xl backdrop-blur-md dark:border-zinc-800/80",t.class))},[f("div",uh,[v[0]||(v[0]=f("div",{class:"flex items-center gap-2"},[f("span",{class:"h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm transition-transform hover:scale-110"}),f("span",{class:"h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm transition-transform hover:scale-110"}),f("span",{class:"h-3 w-3 rounded-full bg-[#27c93f] shadow-sm transition-transform hover:scale-110"})],-1)),f("div",dh,[k(P(Ha),{class:"h-3.5 w-3.5 text-zinc-500"}),f("span",fh,ie(t.title),1)]),t.controls?($(),j("div",ph,[f("button",{onClick:d,title:"重新播放",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[k(P(fd),{class:"h-3.5 w-3.5"})]),f("button",{onClick:m,title:"复制所有命令",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[a.value?($(),Be(P(eo),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):($(),Be(P(Rr),{key:1,class:"h-3.5 w-3.5"}))])])):($(),j("div",mh))]),f("div",{ref_key:"terminalBodyRef",ref:l,class:"max-h-80 min-h-[220px] overflow-y-auto p-4 sm:p-5 space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-800"},[($(!0),j(ke,null,it(n.value,(R,L)=>($(),j("div",{key:L,class:"flex items-start gap-2 leading-relaxed"},[R.type==="input"?($(),j(ke,{key:0},[f("span",hh,ie(R.prefix||"$ "),1),f("span",gh,[Xe(ie(R.text)+" ",1),o.value&&L===n.value.length-1?($(),j("span",bh)):Ye("",!0)])],64)):R.type==="success"?($(),j("span",xh,ie(R.text),1)):R.type==="error"?($(),j("span",vh,ie(R.text),1)):R.type==="warning"?($(),j("span",yh,ie(R.text),1)):R.type==="info"?($(),j("span",wh,ie(R.text),1)):($(),j("span",kh,ie(R.text),1))]))),128)),i.value?($(),j("div",_h,[...v[1]||(v[1]=[f("span",{class:"text-blue-400 font-bold select-none"},"$ ",-1),f("span",{class:"inline-block h-4 w-2 bg-zinc-500 animate-pulse"},null,-1)])])):Ye("",!0)],512)],2))}}),Ch={class:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"},Ah={class:"flex flex-col md:flex-row gap-8"},Sh={class:"w-full md:w-64 shrink-0"},Rh={class:"sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-xs backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70"},Eh={class:"mb-3 px-2 flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider"},Th={class:"rounded bg-blue-100 dark:bg-blue-950/80 px-1.5 py-0.2 text-[10px] text-blue-600 dark:text-blue-400 font-bold"},Mh={class:"space-y-1"},$h={class:"mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 px-2"},Fh={class:"flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100"},Ih={class:"min-w-0 flex-1"},Ph={class:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white mb-3 shadow-md shadow-blue-500/20"},Lh={key:1,class:"w-full max-w-2xl"},Oh={class:"flex h-full flex-col items-center justify-center p-6 text-center"},Dh={key:5,class:"flex flex-col items-center gap-6 py-8"},Bh={class:"text-center"},jh={class:"text-center mt-2"},Nh={key:6,class:"flex flex-wrap items-center justify-center gap-4 py-8"},Gh={class:"relative z-10 flex items-center justify-between"},Hh={class:"relative z-10 flex flex-col items-center gap-3"},Vh={class:"flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30"},qh={key:10,class:"grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-3xl py-6"},Uh={class:"inline-flex items-baseline justify-center text-sky-500 dark:text-sky-400"},Wh={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},Xh={class:"inline-flex items-baseline justify-center text-indigo-500 dark:text-indigo-400"},Kh={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},Yh={class:"inline-flex items-baseline justify-center text-emerald-500 dark:text-emerald-400"},Zh={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},Jh={key:12,class:"w-full"},Qh={class:"relative z-10 text-center"},eg={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400 mb-3"},tg={class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/30 text-white"},ng={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-sky-500"},rg={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-emerald-500"},sg={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-indigo-500"},og={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-amber-500"},ig={class:"w-full max-w-xl h-72"},ag={class:"flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white/80 p-1 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 shadow-xs"},lg=["onClick"],cg={class:"w-full max-w-xl"},ug=ye({__name:"DocsView",setup(e){const t=oe(null),n=oe(null),r=oe(null),s=oe(null),o=Hf(),i=Ae(()=>o.params.id||"border-beam"),a=Ae(()=>In.find(h=>h.id===i.value)||In[0]),l=["OpenAI","Anthropic","Google","NVIDIA","DeepSeek","Vercel"],c=[{id:"home",label:"首页概览",icon:ld},{id:"explore",label:"模型广场",icon:nd},{id:"agent",label:"AI 智能体",icon:He},{id:"files",label:"知识库",icon:sd},{id:"notice",label:"消息通知",icon:Ju},{id:"settings",label:"偏好设置",icon:pd}],u=oe("thinking"),d={thinking:"正在多模态解构视觉空间坐标与贝塞尔插值参数...",running:"并行编译并打包 Production Motion Primitives...",tool_call:"调用 Playwright 真实无头浏览器验证 60fps 动效性能...",success:"全部 19 项动效原子组件单文件交付，验证 100% 通过！",error:"检测到底层渲染管道异常，正在启动自愈补偿重试..."};return(h,m)=>{const A=tr("router-link");return $(),j("div",Ch,[f("div",Ah,[f("aside",Sh,[f("div",Rh,[f("div",Eh,[m[0]||(m[0]=f("span",null,"动效原子组件",-1)),f("span",Th,ie(P(In).length)+" 个 ",1)]),f("nav",Mh,[($(!0),j(ke,null,it(P(In),v=>($(),Be(A,{key:v.id,to:`/docs/${v.id}`,class:V(["flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors",i.value===v.id?"bg-blue-600 text-white font-semibold shadow-xs":"text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"])},{default:Z(()=>[f("span",null,ie(v.name),1),f("span",{class:V(["text-[10px] rounded px-1.5 py-0.5",i.value===v.id?"bg-blue-700/80 text-blue-100":"bg-zinc-100 dark:bg-zinc-900 text-zinc-400"])},ie(v.category),3)]),_:2},1032,["to","class"]))),128))]),f("div",$h,[f("div",Fh,[k(P(Ha),{class:"h-3.5 w-3.5 text-blue-500"}),m[1]||(m[1]=f("span",null,"基础依赖安装",-1))]),m[2]||(m[2]=f("p",{class:"mt-1 text-[11px] text-zinc-400"},"组件依赖轻量样式与工具库：",-1)),m[3]||(m[3]=f("div",{class:"mt-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-300 break-all select-all"}," npm i @vueuse/core clsx tailwind-merge ",-1))])])]),f("main",Ih,[($(),Be(Tm,{key:a.value.id,title:a.value.title,description:a.value.description,"component-code":a.value.componentCode,"usage-code":a.value.usageCode,"component-filename":a.value.componentFilename,"props-list":a.value.propsList},{default:Z(({isDark:v})=>[a.value.id==="border-beam"?($(),j("div",{key:0,class:V(["relative flex h-64 w-80 flex-col items-center justify-center rounded-2xl border p-6 shadow-md transition-colors duration-200",v?"border-zinc-800 bg-zinc-900 text-zinc-100 shadow-black/40":"border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/50"])},[f("div",Ph,[k(P(He),{class:"h-6 w-6"})]),f("h4",{class:V(["text-lg font-bold",v?"text-white":"text-zinc-900"])}," Border Beam Demo ",2),f("p",{class:V(["mt-1 text-center text-xs",v?"text-zinc-400":"text-zinc-500"])}," 流光平滑环绕圆角容器边缘 ",2),k(Ls,{size:180,duration:8,"color-from":"#38bdf8","color-to":"#a855f7"})],2)):a.value.id==="bento-grid"?($(),j("div",Lh,[k(xl,{class:"auto-rows-[16rem]"},{default:Z(()=>[k(Qe,{name:"AI 向量引擎",description:"毫秒级生成多模态视觉理解",cta:"了解详情",href:"#",class:V(v?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900")},{icon:Z(()=>[k(P(Ko),{class:"h-5 w-5 text-blue-500"})]),_:1},8,["class"]),k(Qe,{name:"全球边缘节点加速",description:"降低网络抖动，就近命中就近计算",class:V(["md:col-span-2",v?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900"]),cta:"查看分布",href:"#"},{icon:Z(()=>[k(P(jn),{class:"h-5 w-5 text-amber-500"})]),_:1},8,["class"])]),_:2},1024)])):a.value.id==="interactive-particles"?($(),j("div",{key:2,class:V(["relative h-[360px] w-full rounded-2xl border overflow-hidden transition-colors duration-200",v?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[k(yl,{quantity:60,"mouse-radius":120,"connect-lines":!0,color:v?"255, 255, 255":"59, 130, 246"},{default:Z(()=>[f("div",Oh,[f("h3",{class:V(["text-2xl font-bold tracking-tight",v?"text-white":"text-zinc-900"])}," 移动光标体验引力感应 ",2),f("p",{class:V(["mt-2 text-xs",v?"text-zinc-400":"text-zinc-500"])}," Canvas 2D 60fps 满帧运行，动态引力排斥与光效连线 ",2)])]),_:2},1032,["color"])],2)):a.value.id==="retro-grid"?($(),j("div",{key:3,class:V(["relative flex h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",v?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[f("span",{class:V(["z-10 text-4xl font-extrabold tracking-tighter",v?"text-white":"text-zinc-900"])}," Retro Synthwave Grid ",2),k(Os,{angle:65,"dark-line-color":"#334155","light-line-color":"#cbd5e1"})],2)):a.value.id==="dot-pattern"?($(),j("div",{key:4,class:V(["relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border p-8 transition-colors duration-200",v?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[f("p",{class:V(["z-10 text-xl font-bold",v?"text-white":"text-zinc-900"])}," SVG 矢量波点底纹 (含发光聚光灯) ",2),k(vl,{width:18,height:18,cr:1.2,glow:!0})],2)):a.value.id==="shiny-text"?($(),j("div",Dh,[f("div",{class:V(["rounded-full border px-5 py-2 text-xs font-medium shadow-sm transition-colors",v?"border-zinc-800 bg-zinc-900/90 text-zinc-300":"border-zinc-200 bg-zinc-100 text-zinc-700"])},[m[4]||(m[4]=Xe(" ✨ ",-1)),k(Hn,{text:"Aura UI v1.0 全新微光发布",duration:2.5})],2),f("div",Bh,[k(Hn,{text:"Next-Gen AI Intelligence",class:"text-4xl sm:text-5xl font-black tracking-tight",duration:2.5}),f("p",{class:V(["mt-2 text-xs sm:text-sm",v?"text-zinc-500":"text-zinc-400"])}," 持续流淌的宽幅金属微光，肉眼清晰可观赏，绝无突兀停滞 ",2)]),f("div",jh,[k(Hn,{text:"Cyberpunk Motion Primitives",variant:"cyber",class:"text-3xl sm:text-4xl font-extrabold tracking-tight",duration:3}),f("p",{class:V(["mt-1 text-xs",v?"text-zinc-500":"text-zinc-400"])}," 赛博霓虹蓝紫粒子流光，高频荡漾 ",2)])])):a.value.id==="shimmer-button"?($(),j("div",Nh,[k(Gn,{"shimmer-color":"#38bdf8"},{default:Z(()=>[m[5]||(m[5]=f("span",null,"立即获取代码",-1)),k(P(Rs),{class:"h-4 w-4"})]),_:1}),k(Gn,{"shimmer-color":"#ec4899","shimmer-duration":"3.5s"},{default:Z(()=>[...m[6]||(m[6]=[f("span",null,"Pink Shimmer",-1)])]),_:1})])):a.value.id==="marquee"?($(),j("div",{key:7,class:V(["relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border py-6 transition-colors duration-200",v?"border-zinc-800 bg-black/60":"border-zinc-200 bg-zinc-50/80"])},[k(hr,{duration:20,"pause-on-hover":!0},{default:Z(()=>[($(),j(ke,null,it(l,R=>f("div",{key:R,class:V(["flex h-12 items-center justify-center rounded-xl border px-6 font-bold text-xs shadow-xs transition-colors duration-200",v?"border-zinc-800 bg-zinc-900 text-zinc-200":"border-zinc-200 bg-white text-zinc-800"])},ie(R),3)),64))]),_:2},1024),f("div",{class:V(["pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r",v?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2),f("div",{class:V(["pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l",v?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2)],2)):a.value.id==="meteors"?($(),j("div",{key:8,class:V(["relative flex h-80 w-full max-w-lg flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-2xl transition-colors duration-200",v?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-slate-900 text-white"])},[k(wl,{number:30}),f("div",Gh,[m[7]||(m[7]=f("span",{class:"rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20"}," Meteor Shower ",-1)),k(P(He),{class:"h-5 w-5 text-sky-400"})]),m[8]||(m[8]=f("div",{class:"relative z-10 space-y-2"},[f("h3",{class:"text-3xl font-black tracking-tight text-white"}," 赛博深空流星雨 "),f("p",{class:"text-xs text-zinc-400 leading-relaxed"}," 流星带有 50px 渐变光尾与随机延迟，全硬件加速流畅穿梭，卡片与 Hero 背景的氛围杀器。 ")],-1))],2)):a.value.id==="ripple"?($(),j("div",{key:9,class:V(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",v?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[k(kl,{"main-circle-size":160,"num-circles":7}),f("div",Hh,[f("div",Vh,[k(P(Ts),{class:"h-7 w-7"})]),m[9]||(m[9]=f("div",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-mono text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300"}," AI 智能语音拾音中... ",-1))])],2)):a.value.id==="number-ticker"?($(),j("div",qh,[f("div",{class:V(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",v?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[f("div",Uh,[f("span",Wh,[k(gr,{value:99.99,"decimal-places":2})]),m[10]||(m[10]=f("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"%",-1))]),m[11]||(m[11]=f("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"SLA 生产高可用性",-1))],2),f("div",{class:V(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",v?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[f("div",Xh,[f("span",Kh,[k(gr,{value:1e7})]),m[12]||(m[12]=f("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"+",-1))]),m[13]||(m[13]=f("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"每日处理 Token 数量",-1))],2),f("div",{class:V(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",v?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[f("div",Yh,[f("span",Zh,[k(gr,{value:12})]),m[14]||(m[14]=f("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"ms",-1))]),m[15]||(m[15]=f("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"端到端流式推理延迟",-1))],2)])):a.value.id==="animated-beam"?($(),j("div",{key:11,class:V(["relative flex h-72 w-full max-w-xl items-center justify-between px-12 rounded-2xl border transition-colors duration-200",v?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"]),ref_key:"beamContainerRef",ref:t},[f("div",{ref_key:"beamUserRef",ref:n,class:V(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",v?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[k(P(Va),{class:"h-6 w-6 text-blue-500"})],2),f("div",{ref_key:"beamAiRef",ref:r,class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/40"},[k(P(He),{class:"h-8 w-8"})],512),f("div",{ref_key:"beamDbRef",ref:s,class:V(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",v?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[k(P(Es),{class:"h-6 w-6 text-indigo-500"})],2),k(Tr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.4},null,8,["container-ref","from-ref","to-ref"]),k(Tr,{"container-ref":t.value,"from-ref":r.value,"to-ref":s.value,duration:2.4,delay:.6},null,8,["container-ref","from-ref","to-ref"])],2)):a.value.id==="lamp-effect"?($(),j("div",Jh,[k(_l,{class:"min-h-[420px]"},{default:Z(()=>[...m[16]||(m[16]=[f("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-5xl font-black tracking-tight text-transparent"}," Next-Gen AI Platform ",-1),f("p",{class:"mt-3 max-w-md text-xs sm:text-sm text-slate-400"}," 双向极光天灯破晓而下，为旗舰级 AI 与 SaaS 官网赋予大模型发布会视觉。 ",-1)])]),_:1})])):a.value.id==="flickering-grid"?($(),j("div",{key:13,class:V(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border p-6 transition-colors duration-200",v?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(zl,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),f("div",Qh,[f("div",eg,[k(P(Ga),{class:"h-3.5 w-3.5"}),m[17]||(m[17]=f("span",null,"Canvas 2D 智能矩阵",-1))]),f("h3",{class:V(["text-3xl font-black tracking-tight",v?"text-white":"text-zinc-900"])}," 呼吸噪波微光网格 ",2),f("p",{class:V(["mt-2 text-xs font-mono",v?"text-zinc-400":"text-zinc-500"])}," 微型粒子矩阵异步平滑呼吸闪烁，零 CPU 占用，极客感拉满 ",2)])],2)):a.value.id==="dock"?($(),j("div",{key:14,class:V(["relative flex h-80 w-full items-end justify-center rounded-2xl border p-8 transition-colors duration-200",v?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[m[18]||(m[18]=f("div",{class:"absolute top-8 text-center"},[f("span",{class:"text-xs font-mono text-zinc-400"},"将鼠标在下方图标栏滑动，体验余弦高斯物理平滑放大与跟随 Tooltip")],-1)),k(Im,{items:c,"icon-size":44,"icon-magnification":68,"icon-distance":130})],2)):a.value.id==="orbit-logos"?($(),j("div",{key:15,class:V(["relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",v?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[f("div",tg,[k(P(He),{class:"h-8 w-8"})]),k(ur,{radius:75,duration:16},{default:Z(()=>[f("div",ng,[k(P(Ko),{class:"h-4.5 w-4.5"})])]),_:1}),k(ur,{radius:75,duration:16,delay:8},{default:Z(()=>[f("div",rg,[k(P(jn),{class:"h-4.5 w-4.5"})])]),_:1}),k(ur,{radius:135,duration:24,reverse:!0},{default:Z(()=>[f("div",sg,[k(P(id),{class:"h-5 w-5"})])]),_:1}),k(ur,{radius:135,duration:24,delay:12,reverse:!0},{default:Z(()=>[f("div",og,[k(P(Es),{class:"h-5 w-5"})])]),_:1})],2)):a.value.id==="image-compare"?($(),j("div",{key:16,class:V(["flex flex-col items-center justify-center w-full p-4 rounded-2xl border transition-colors duration-200",v?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[f("div",ig,[k(qm,{"before-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=70&sat=-100","after-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=90","before-label":"原始黑白 (Raw)","after-label":"AI 智能全彩修复 (4K HDR)","initial-position":50,class:"h-full w-full shadow-2xl"})]),m[19]||(m[19]=f("p",{class:"mt-3 text-xs font-mono text-zinc-400"}," 按住中央手柄左右拖拽，体验基于 clip-path 视口裁切的双图前后对比 ",-1))],2)):a.value.id==="agent-status"?($(),j("div",{key:17,class:V(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",v?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[f("div",ag,[($(),j(ke,null,it(["thinking","running","tool_call","success","error"],R=>f("button",{key:R,onClick:L=>u.value=R,class:V(["rounded-lg px-3 py-1.5 text-xs font-semibold transition-all capitalize",u.value===R?"bg-blue-600 text-white shadow-xs":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},ie(R),11,lg)),64))]),k(ch,{status:u.value,"agent-name":"DeepSeek R1 / Aura Reasoning","current-task":d[u.value]},null,8,["status","current-task"]),m[20]||(m[20]=f("p",{class:"text-xs font-mono text-zinc-400"}," 点击上方状态快速体验脉冲光环与徽标切换；点击卡片任意位置展开执行轨迹清单 ",-1))],2)):a.value.id==="typewriter-terminal"?($(),j("div",{key:18,class:V(["flex flex-col items-center justify-center w-full p-6 rounded-2xl border transition-colors duration-200",v?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[f("div",cg,[k(zh,{title:"zsh - aura-orchestrator:~ (80x24)","typing-speed":32,loop:!0})])],2)):Ye("",!0)]),_:1},8,["title","description","component-code","usage-code","component-filename","props-list"]))])])])}}}),dg=Gf({history:yf(),routes:[{path:"/",name:"home",component:Q0},{path:"/docs/:id?",name:"docs",component:ug},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(e,t,n){return n||(e.name==="docs"&&t.name==="docs"?!1:{top:0})}}),Cl=Wu(Pd);Cl.use(dg);Cl.mount("#app");
