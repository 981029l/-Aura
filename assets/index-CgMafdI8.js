(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ee={},bn=[],$t=()=>{},oa=()=>!1,Wr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Kr=e=>e.startsWith("onUpdate:"),Ne=Object.assign,ds=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gc=Object.prototype.hasOwnProperty,_e=(e,t)=>gc.call(e,t),se=Array.isArray,tn=e=>cr(e)==="[object Map]",Tr=e=>cr(e)==="[object Set]",Ds=e=>cr(e)==="[object Date]",ue=e=>typeof e=="function",De=e=>typeof e=="string",yt=e=>typeof e=="symbol",Se=e=>e!==null&&typeof e=="object",sa=e=>(Se(e)||ue(e))&&ue(e.then)&&ue(e.catch),ia=Object.prototype.toString,cr=e=>ia.call(e),bc=e=>cr(e).slice(8,-1),aa=e=>cr(e)==="[object Object]",us=e=>De(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gn=cs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},hc=/-\w/g,st=Xr(e=>e.replace(hc,t=>t.slice(1).toUpperCase())),xc=/\B([A-Z])/g,an=Xr(e=>e.replace(xc,"-$1").toLowerCase()),Yr=Xr(e=>e.charAt(0).toUpperCase()+e.slice(1)),po=Xr(e=>e?`on${Yr(e)}`:""),Tt=(e,t)=>!Object.is(e,t),_r=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},la=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ps=e=>{const t=parseFloat(e);return isNaN(t)?e:t},vc=e=>{const t=De(e)?Number(e):NaN;return isNaN(t)?e:t};let js;const Zr=()=>js||(js=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ie(e){if(se(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=De(r)?zc(r):Ie(r);if(o)for(const s in o)t[s]=o[s]}return t}else if(De(e)||Se(e))return e}const yc=/;(?![^(]*\))/g,wc=/:([^]+)/,kc=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function zc(e){const t={};return e.replace(kc,n=>n.startsWith("/*")?"":n).split(yc).forEach(n=>{if(n){const r=n.split(wc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function T(e){let t="";if(De(e))t=e;else if(se(e))for(let n=0;n<e.length;n++){const r=T(e[n]);r&&(t+=r+" ")}else if(Se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const _c="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Cc=cs(_c);function ca(e){return!!e||e===""}function Sc(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let o=0;r&&o<e.length;o++)r=Jr(e[o],t[o],n);return r}function Bs(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),o=new Uint8Array(r.length);for(const s of e){let a=-1;for(let i=0;i<r.length;i++)if(!o[i]&&Jr(s,r[i],n)){a=i;break}if(a<0)return!1;o[a]=1}return!0}function Ac(e,t,n){let r=tn(e),o=tn(t);if(r||o||(r=Tr(e),o=Tr(t),r||o))return r&&o?Bs(e,t,n):!1;const s=Object.keys(e).length,a=Object.keys(t).length;if(s!==a)return!1;for(const i in e){const c=e.hasOwnProperty(i),p=t.hasOwnProperty(i);if(c&&!p||!c&&p||!Jr(e[i],t[i],n))return!1}return String(e)===String(t)}function Ns(e,t,n,r){n||(n=[new Map,new Map]);const[o,s]=n;if(o.has(e)||s.has(t))return o.get(e)===t&&s.get(t)===e;o.set(e,t),s.set(t,e);const a=r(e,t,n);return o.delete(e),s.delete(t),a}function Jr(e,t,n){if(e===t)return!0;let r=Ds(e),o=Ds(t);return r||o?r&&o?e.getTime()===t.getTime():!1:(r=yt(e),o=yt(t),r||o?e===t:(r=se(e),o=se(t),r||o?r&&o?Ns(e,t,n,Sc):!1:(r=Se(e),o=Se(t),r||o?!r||!o?!1:Ns(e,t,n,Ac):String(e)===String(t))))}const da=e=>!!(e&&e.__v_isRef===!0),V=e=>De(e)?e:e==null?"":se(e)||Se(e)&&(e.toString===ia||!ue(e.toString))?da(e)?V(e.value):JSON.stringify(e,ua,2):String(e),ua=(e,t)=>da(t)?ua(e,t.value):tn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],s)=>(n[fo(r,s)+" =>"]=o,n),{})}:Tr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>fo(n))}:yt(t)?fo(t):Se(t)&&!se(t)&&!aa(t)?String(t):t,fo=(e,t="")=>{var n;return yt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class Ic{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ke&&(Ke.active?(this.parent=Ke,this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=Ke;try{return Ke=this,t()}finally{Ke=n}}}on(){++this._on===1&&(this.prevScope=Ke,Ke=this)}off(){if(this._on>0&&--this._on===0){if(Ke===this)Ke=this.prevScope;else{let t=Ke;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,r=o.length;n<r;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Rc(){return Ke}let Pe;const mo=new WeakSet;class pa{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ke&&(Ke.active?Ke.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,mo.has(this)&&(mo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ma(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Us(this),ga(this);const t=Pe,n=xt;Pe=this,xt=!0;try{return this.fn()}finally{ba(this),Pe=t,xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)gs(t);this.deps=this.depsTail=void 0,Us(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?mo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oo(this)&&this.run()}get dirty(){return Oo(this)}}let fa=0,qn,Wn;function ma(e,t=!1){if(e.flags|=8,t){e.next=Wn,Wn=e;return}e.next=qn,qn=e}function fs(){fa++}function ms(){if(--fa>0)return;if(Wn){let t=Wn;for(Wn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;qn;){let t=qn;for(qn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function ga(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ba(e){let t,n=e.depsTail,r=n;for(;r;){const o=r.prevDep;r.version===-1?(r===n&&(n=o),gs(r),Mc(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=t,e.depsTail=n}function Oo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ha(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ha(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Qn)||(e.globalVersion=Qn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Oo(e))))return;e.flags|=2;const t=e.dep,n=Pe,r=xt;Pe=e,xt=!0;try{ga(e);const o=e.fn(e._value);(t.version===0||Tt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Pe=n,xt=r,ba(e),e.flags&=-3}}function gs(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)gs(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Mc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let xt=!0;const xa=[];function Pt(){xa.push(xt),xt=!1}function Ft(){const e=xa.pop();xt=e===void 0?!0:e}function Us(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Pe;Pe=void 0;try{t()}finally{Pe=n}}}let Qn=0;class Tc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Pe||!xt||Pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Pe)n=this.activeLink=new Tc(Pe,this),Pe.deps?(n.prevDep=Pe.depsTail,Pe.depsTail.nextDep=n,Pe.depsTail=n):Pe.deps=Pe.depsTail=n,va(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Pe.depsTail,n.nextDep=void 0,Pe.depsTail.nextDep=n,Pe.depsTail=n,Pe.deps===n&&(Pe.deps=r)}return n}trigger(t){this.version++,Qn++,this.notify(t)}notify(t){fs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ms()}}}function va(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)va(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Vo=new WeakMap,vn=Symbol(""),Do=Symbol(""),er=Symbol("");function Ze(e,t,n){if(xt&&Pe){let r=Vo.get(e);r||Vo.set(e,r=new Map);let o=r.get(n);o||(r.set(n,o=new bs),o.map=r,o.key=n),o.track()}}function Nt(e,t,n,r,o,s){const a=Vo.get(e);if(!a){Qn++;return}const i=c=>{c&&c.trigger()};if(fs(),t==="clear")a.forEach(i);else{const c=se(e),p=c&&us(n);if(c&&n==="length"){const u=Number(r);a.forEach((d,g)=>{(g==="length"||g===er||!yt(g)&&g>=u)&&i(d)})}else switch((n!==void 0||a.has(void 0))&&i(a.get(n)),p&&i(a.get(er)),t){case"add":c?p&&i(a.get("length")):(i(a.get(vn)),tn(e)&&i(a.get(Do)));break;case"delete":c||(i(a.get(vn)),tn(e)&&i(a.get(Do)));break;case"set":tn(e)&&i(a.get(vn));break}}ms()}function wn(e){const t=ze(e);return t===e||(Ze(t,"iterate",er),mt(e))?t:Lt(e)?nn(e)?t.map(n=>rn(gt(n))):t.map(rn):t.map(gt)}function Qr(e){return Ze(e=ze(e),"iterate",er),e}function It(e,t){return Lt(e)?rn(nn(e)?gt(t):t):gt(t)}const $c={__proto__:null,[Symbol.iterator](){return go(this,Symbol.iterator,e=>It(this,e))},concat(...e){return wn(this).concat(...e.map(t=>se(t)?wn(t):t))},entries(){return go(this,"entries",e=>(e[1]=It(this,e[1]),e))},every(e,t){return Ot(this,"every",e,t,void 0,arguments)},filter(e,t){return Ot(this,"filter",e,t,n=>n.map(r=>It(this,r)),arguments)},find(e,t){return Ot(this,"find",e,t,n=>It(this,n),arguments)},findIndex(e,t){return Ot(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ot(this,"findLast",e,t,n=>It(this,n),arguments)},findLastIndex(e,t){return Ot(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ot(this,"forEach",e,t,void 0,arguments)},includes(...e){return bo(this,"includes",e)},indexOf(...e){return bo(this,"indexOf",e)},join(e){return wn(this).join(e)},lastIndexOf(...e){return bo(this,"lastIndexOf",e)},map(e,t){return Ot(this,"map",e,t,void 0,arguments)},pop(){return Ln(this,"pop")},push(...e){return Ln(this,"push",e)},reduce(e,...t){return Gs(this,"reduce",e,t)},reduceRight(e,...t){return Gs(this,"reduceRight",e,t)},shift(){return Ln(this,"shift")},some(e,t){return Ot(this,"some",e,t,void 0,arguments)},splice(...e){return Ln(this,"splice",e)},toReversed(){return wn(this).toReversed()},toSorted(e){return wn(this).toSorted(e)},toSpliced(...e){return wn(this).toSpliced(...e)},unshift(...e){return Ln(this,"unshift",e)},values(){return go(this,"values",e=>It(this,e))}};function go(e,t,n){const r=Qr(e),o=r[t],s=o.call(r);if(r!==e&&!mt(e)){if(s[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(s));return a.next=()=>Hs(s.next(),n),o!==ya[t]&&Object.defineProperties(a,{return:{get(){const i=s.return;return typeof i=="function"?i.bind(s):i}},throw:{get(){const i=s.throw;return typeof i=="function"?i.bind(s):i}}}),a}s._next=s.next,s.next=()=>Hs(s._next(),n)}return s}function Hs(e,t){return e.done||(e.value=t(e.value)),e}const ya=Array.prototype;function Ot(e,t,n,r,o,s){const a=Qr(e),i=a!==e&&!mt(e),c=a[t];if(c!==ya[t]){const d=c.apply(e,s);return i?gt(d):d}let p=n;a!==e&&(i?p=function(d,g){return n.call(this,It(e,d),g,e)}:n.length>2&&(p=function(d,g){return n.call(this,d,g,e)}));const u=c.call(a,p,r);return i&&o?o(u):u}function Gs(e,t,n,r){const o=Qr(e),s=o!==e&&!mt(e);let a=n,i=!1;o!==e&&(s?(i=r.length===0,a=function(p,u,d){return i&&(i=!1,p=It(e,p)),n.call(this,p,It(e,u),d,e)}):n.length>3&&(a=function(p,u,d){return n.call(this,p,u,d,e)}));const c=o[t](a,...r);return i?It(e,c):c}function bo(e,t,n){const r=ze(e);Ze(r,"iterate",er);const o=r[t](...n);return(o===-1||o===!1)&&vs(n[0])?(n[0]=ze(n[0]),r[t](...n)):o}function Ln(e,t,n=[]){Pt(),fs();const r=ze(e)[t].apply(e,n);return ms(),Ft(),r}const Ec=cs("__proto__,__v_isRef,__isVue"),wa=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(yt));function Pc(e){yt(e)||(e=String(e));const t=ze(this);return Ze(t,"has",e),t.hasOwnProperty(e)}class ka{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(o?s?Hc:Sa:s?Ca:_a).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=se(t);if(!o){let c;if(a&&(c=$c[n]))return c;if(n==="hasOwnProperty")return Pc}const i=Reflect.get(t,n,Qe(t)?t:r);if((yt(n)?wa.has(n):Ec(n))||(o||Ze(t,"get",n),s))return i;if(Qe(i)){const c=a&&us(n)?i:i.value;return o&&Se(c)?Bo(c):c}return Se(i)?o?Bo(i):eo(i):i}}class za extends ka{constructor(t=!1){super(!1,t)}set(t,n,r,o){let s=t[n];const a=se(t)&&us(n);if(!this._isShallow){const p=Lt(s);if(!mt(r)&&!Lt(r)&&(s=ze(s),r=ze(r)),!a&&Qe(s)&&!Qe(r))return p||(s.value=r),!0}const i=a?Number(n)<t.length:_e(t,n),c=Reflect.set(t,n,r,Qe(t)?t:o);return t===ze(o)&&c&&(i?Tt(r,s)&&Nt(t,"set",n,r):Nt(t,"add",n,r)),c}deleteProperty(t,n){const r=_e(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&Nt(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!yt(n)||!wa.has(n))&&Ze(t,"has",n),r}ownKeys(t){return Ze(t,"iterate",se(t)?"length":vn),Reflect.ownKeys(t)}}class Fc extends ka{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Lc=new za,Oc=new Fc,Vc=new za(!0);const jo=e=>e,mr=e=>Reflect.getPrototypeOf(e);function Dc(e,t,n){return function(...r){const o=this.__v_raw,s=ze(o),a=tn(s),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,p=o[e](...r),u=n?jo:t?rn:gt;return!t&&Ze(s,"iterate",c?Do:vn),Ne(Object.create(p),{next(){const{value:d,done:g}=p.next();return g?{value:d,done:g}:{value:i?[u(d[0]),u(d[1])]:u(d),done:g}}})}}function gr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function jc(e,t){const n={get(o){const s=this.__v_raw,a=ze(s),i=ze(o);e||(Tt(o,i)&&Ze(a,"get",o),Ze(a,"get",i));const{has:c}=mr(a),p=t?jo:e?rn:gt;if(c.call(a,o))return p(s.get(o));if(c.call(a,i))return p(s.get(i));s!==a&&s.get(o)},get size(){const o=this.__v_raw;return!e&&Ze(ze(o),"iterate",vn),o.size},has(o){const s=this.__v_raw,a=ze(s),i=ze(o);return e||(Tt(o,i)&&Ze(a,"has",o),Ze(a,"has",i)),o===i?s.has(o):s.has(o)||s.has(i)},forEach(o,s){const a=this,i=a.__v_raw,c=ze(i),p=t?jo:e?rn:gt;return!e&&Ze(c,"iterate",vn),i.forEach((u,d)=>o.call(s,p(u),p(d),a))}};return Ne(n,e?{add:gr("add"),set:gr("set"),delete:gr("delete"),clear:gr("clear")}:{add(o){const s=ze(this),a=mr(s),i=ze(o),c=!t&&!mt(o)&&!Lt(o)?i:o;return a.has.call(s,c)||Tt(o,c)&&a.has.call(s,o)||Tt(i,c)&&a.has.call(s,i)||(s.add(c),Nt(s,"add",c,c)),this},set(o,s){!t&&!mt(s)&&!Lt(s)&&(s=ze(s));const a=ze(this),{has:i,get:c}=mr(a);let p=i.call(a,o);p||(o=ze(o),p=i.call(a,o));const u=c.call(a,o);return a.set(o,s),p?Tt(s,u)&&Nt(a,"set",o,s):Nt(a,"add",o,s),this},delete(o){const s=ze(this),{has:a,get:i}=mr(s);let c=a.call(s,o);c||(o=ze(o),c=a.call(s,o)),i&&i.call(s,o);const p=s.delete(o);return c&&Nt(s,"delete",o,void 0),p},clear(){const o=ze(this),s=o.size!==0,a=o.clear();return s&&Nt(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Dc(o,e,t)}),n}function hs(e,t){const n=jc(e,t);return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_isShallow"?t:o==="__v_raw"?r:Reflect.get(_e(n,o)&&o in r?n:r,o,s)}const Bc={get:hs(!1,!1)},Nc={get:hs(!1,!0)},Uc={get:hs(!0,!1)};const _a=new WeakMap,Ca=new WeakMap,Sa=new WeakMap,Hc=new WeakMap;function Gc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eo(e){return Lt(e)?e:xs(e,!1,Lc,Bc,_a)}function Aa(e){return xs(e,!1,Vc,Nc,Ca)}function Bo(e){return xs(e,!0,Oc,Uc,Sa)}function xs(e,t,n,r,o){if(!Se(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=o.get(e);if(s)return s;const a=Gc(bc(e));if(a===0)return e;const i=new Proxy(e,a===2?r:n);return o.set(e,i),i}function nn(e){return Lt(e)?nn(e.__v_raw):!!(e&&e.__v_isReactive)}function Lt(e){return!!(e&&e.__v_isReadonly)}function mt(e){return!!(e&&e.__v_isShallow)}function vs(e){return e?!!e.__v_raw:!1}function ze(e){const t=e&&e.__v_raw;return t?ze(t):e}function qc(e){return!_e(e,"__v_skip")&&Object.isExtensible(e)&&la(e,"__v_skip",!0),e}const gt=e=>Se(e)?eo(e):e,rn=e=>Se(e)?Bo(e):e;function Qe(e){return e?e.__v_isRef===!0:!1}function N(e){return Ia(e,!1)}function Wc(e){return Ia(e,!0)}function Ia(e,t){return Qe(e)?e:new Kc(e,t)}class Kc{constructor(t,n){this.dep=new bs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ze(t),this._value=n?t:gt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||mt(t)||Lt(t);t=r?t:ze(t),Tt(t,n)&&(this._rawValue=t,this._value=r?t:gt(t),this.dep.trigger())}}function I(e){return Qe(e)?e.value:e}const Xc={get:(e,t,n)=>t==="__v_raw"?e:I(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Qe(o)&&!Qe(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Ra(e){return nn(e)?e:new Proxy(e,Xc)}class Yc{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new bs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Pe!==this)return ma(this,!0),!0}get value(){const t=this.dep.track();return ha(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Zc(e,t,n=!1){let r,o;return ue(e)?r=e:(r=e.get,o=e.set),new Yc(r,o,n)}const br={},$r=new WeakMap;let mn;function Jc(e,t=!1,n=mn){if(n){let r=$r.get(n);r||$r.set(n,r=[]),r.push(e)}}function Qc(e,t,n=Ee){const{immediate:r,deep:o,once:s,scheduler:a,augmentJob:i,call:c}=n,p=z=>o?z:mt(z)||o===!1||o===0?Ut(z,1):Ut(z);let u,d,g,m,C=!1,w=!1;if(Qe(e)?(d=()=>e.value,C=mt(e)):nn(e)?(d=()=>p(e),C=!0):se(e)?(w=!0,C=e.some(z=>nn(z)||mt(z)),d=()=>e.map(z=>{if(Qe(z))return z.value;if(nn(z))return p(z);if(ue(z))return c?c(z,2):z()})):ue(e)?t?d=c?()=>c(e,2):e:d=()=>{if(g){Pt();try{g()}finally{Ft()}}const z=mn;mn=u;try{return c?c(e,3,[m]):e(m)}finally{mn=z}}:d=$t,t&&o){const z=d,$=o===!0?1/0:o;d=()=>Ut(z(),$)}const A=Rc(),R=()=>{u.stop(),A&&A.active&&ds(A.effects,u)};if(s&&t){const z=t;t=(...$)=>{try{return z(...$)}finally{R()}}}let b=w?new Array(e.length).fill(br):br;const k=z=>{if(!(!(u.flags&1)||!u.dirty&&!z))if(t){const $=u.run();if(z||o||C||(w?$.some((F,U)=>Tt(F,b[U])):Tt($,b))){const F=mn;Pt();try{g&&g(),mn=u;const U=[$,b===br?void 0:w&&b[0]===br?[]:b,m];b=$,c?c(t,3,U):t(...U)}finally{mn=F,Ft()}}}else u.run()};return i&&i(k),u=new pa(d),u.scheduler=a?()=>a(k,!1):k,m=z=>Jc(z,!1,u),g=u.onStop=()=>{const z=$r.get(u);if(z){if(c)c(z,4);else for(const $ of z)$();$r.delete(u)}},t?r?k(!0):b=u.run():a?a(k.bind(null,!0),!0):u.run(),R.pause=u.pause.bind(u),R.resume=u.resume.bind(u),R.stop=R,R}function Ut(e,t=1/0,n){if(t<=0||!Se(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Qe(e))Ut(e.value,t,n);else if(se(e))for(let r=0;r<e.length;r++)Ut(e[r],t,n);else if(Tr(e)||tn(e))e.forEach(r=>{Ut(r,t,n)});else if(aa(e)){for(const r in e)Ut(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ut(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function dr(e,t,n,r){try{return r?e(...r):e()}catch(o){to(o,t,n)}}function bt(e,t,n,r){if(ue(e)){const o=dr(e,t,n,r);return o&&sa(o)&&o.catch(s=>{to(s,t,n)}),o}if(se(e)){const o=[];for(let s=0;s<e.length;s++)o.push(bt(e[s],t,n,r));return o}}function to(e,t,n,r=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Ee;if(t){let i=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,p)===!1)return}i=i.parent}if(s){Pt(),dr(s,null,10,[e,c,p]),Ft();return}}ed(e,n,o,r,a)}function ed(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}const ot=[];let ht=-1;const Rt=[];let Jt=null,kn=0;const Ma=Promise.resolve();let Er=null;function ys(e){const t=Er||Ma;return e?t.then(this?e.bind(this):e):t}function td(e){let t=ht+1,n=ot.length;for(;t<n;){const r=t+n>>>1,o=ot[r],s=tr(o);s<e||s===e&&o.flags&2?t=r+1:n=r}return t}function ws(e){if(!(e.flags&1)){const t=tr(e),n=ot[ot.length-1];!n||!(e.flags&2)&&t>=tr(n)?ot.push(e):ot.splice(td(t),0,e),e.flags|=1,Ta()}}function Ta(){Er||(Er=Ma.then(Pa))}function nd(e){if(!se(e))Jt&&e.id===-1?Jt.splice(kn+1,0,e):e.flags&1||(Rt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Rt.push(e[t]);Ta()}function $a(e,t,n,r=ht+1){for(;r<ot.length;r++){const o=ot[r];if(o&&o.flags&2){if(e&&o.id!==e.uid||t!==void 0&&!(o.id>=t))continue;ot.splice(r,1),r=e?r-1:ht,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function Ea(e,t,n=0){if(Rt.length){let r=Rt,o=0;if(t){r=[];for(let a=0;a<Rt.length;a++){const i=Rt[a];(i.i!==void 0?!i.i||i.i.uid<n:t.has(i))?Rt[o++]=i:r.push(i)}}const s=[...new Set(r)].sort((a,i)=>tr(a)-tr(i));if(Rt.length=o,Jt){for(let a=0;a<s.length;a++)Jt.push(s[a]);return}for(Jt=s,kn=0;kn<Jt.length;kn++){const a=Jt[kn];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Jt=null,kn=0}}let ho=!1;function rd(e,t){if(ho){e();return}const n=t===void 0?void 0:new Set(Rt);e(),ho=!0;try{$a(void 0,t),Ea(void 0,n,t)}finally{ho=!1}}const tr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Pa(e){try{for(ht=0;ht<ot.length;ht++){const t=ot[ht];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),dr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ht<ot.length;ht++){const t=ot[ht];t&&(t.flags&=-2)}ht=-1,ot.length=0,Ea(),Er=null,(ot.length||Rt.length)&&Pa()}}let Xe=null,Fa=null;function Pr(e){const t=Xe;return Xe=e,Fa=e&&e.type.__scopeId||null,t}function Z(e,t=Xe,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Vr(-1);const s=Pr(t),a=Ht.length;let i;try{i=e(...o)}finally{for(let c=Ht.length;c>a;c--)Ss();Pr(s),r._d&&Vr(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function Cn(e,t){if(Xe===null)return e;const n=lo(Xe),r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,a,i,c=Ee]=t[o];s&&(ue(s)&&(s={mounted:s,updated:s}),s.deep&&Ut(a),r.push({dir:s,instance:n,value:a,oldValue:void 0,arg:i,modifiers:c}))}return e}function dn(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let a=0;a<o.length;a++){const i=o[a];s&&(i.oldValue=s[a].value);let c=i.dir[r];c&&(Pt(),bt(c,n,8,[e.el,i,e,t]),Ft())}}function Cr(e,t){if(Je){let n=Je.provides;const r=Je.parent&&Je.parent.provides;r===n&&(n=Je.provides=Object.create(r)),n[e]=t}}function Et(e,t,n=!1){const r=ao();if(r||An){let o=An?An._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&ue(t)?t.call(r&&r.proxy):t}}const od=Symbol.for("v-scx"),sd=()=>Et(od);function vt(e,t,n){return La(e,t,n)}function La(e,t,n=Ee){const{immediate:r,deep:o,flush:s,once:a}=n,i=Ne({},n),c=t&&r||!t&&s!=="post";let p;if(ir){if(s==="sync"){const m=sd();p=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=$t,m.resume=$t,m.pause=$t,m}}const u=Je;i.call=(m,C,w)=>bt(m,u,C,w);let d=!1;s==="post"?i.scheduler=m=>{m.i=u,it(m,u&&u.suspense)}:s!=="sync"&&(d=!0,i.scheduler=(m,C)=>{C?m():ws(m)}),i.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const g=Qc(e,t,i);return ir&&(p?p.push(g):c&&g()),g}function id(e,t,n){const r=this.proxy,o=De(e)?e.includes(".")?Oa(r,e):()=>r[e]:e.bind(r,r);let s;ue(t)?s=t:(s=t.handler,n=t);const a=pr(this),i=La(o,s.bind(r),n);return a(),i}function Oa(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const ad=Symbol("_vte"),no=e=>e.__isTeleport,ft=Symbol("_leaveCb"),On=Symbol("_enterCb");function Va(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lt(()=>{e.isMounted=!0}),Ga(()=>{e.isUnmounting=!0}),e}const pt=[Function,Array],Da={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pt,onEnter:pt,onAfterEnter:pt,onEnterCancelled:pt,onBeforeLeave:pt,onLeave:pt,onAfterLeave:pt,onLeaveCancelled:pt,onBeforeAppear:pt,onAppear:pt,onAfterAppear:pt,onAppearCancelled:pt},ld={name:"BaseTransition",props:Da,setup(e,{slots:t}){const n=ao(),r=Va();return()=>{const o=t.default&&ks(t.default(),!0),s=o&&o.length?ja(o):n.subTree?fe():void 0;if(!s)return;const a=ze(e),{mode:i}=a;if(r.isLeaving)return xo(s);const c=Fr(s);if(!c)return xo(s);let p=nr(c,a,r,n,d=>p=d);c.type!==Ye&&on(c,p);let u=n.subTree&&Fr(n.subTree);if(u&&u.type!==Ye&&!gn(u,c)&&rr(n.subTree)){let d=nr(u,a,r,n);if(on(u,d),i==="out-in"&&c.type!==Ye)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},xo(s);i==="in-out"&&c.type!==Ye?d.delayLeave=(g,m,C)=>{const w=Ba(r,u);w[String(u.key)]=u,g[ft]=()=>{m(),g[ft]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{C(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function ja(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ye){t=n;break}}return t}const cd=ld;function Ba(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function nr(e,t,n,r,o){const{appear:s,mode:a,persisted:i=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:g,onLeave:m,onAfterLeave:C,onLeaveCancelled:w,onBeforeAppear:A,onAppear:R,onAfterAppear:b,onAppearCancelled:k}=t,z=String(e.key),$=Ba(n,e),F=(O,ee)=>{O&&bt(O,r,9,ee)},U=(O,ee)=>{const oe=ee[1];F(O,ee),se(O)?O.every(q=>q.length<=1)&&oe():O.length<=1&&oe()},L={mode:a,persisted:i,beforeEnter(O){let ee=c;if(!n.isMounted)if(s)ee=A||c;else return;O[ft]&&O[ft](!0);const oe=$[z];if(oe&&gn(e,oe)){let q=oe.el[ft];if(!q){const pe=rr(oe);q=pe&&pe.el[ft]}q&&q()}F(ee,[O])},enter(O){if($[z]===e)return;let ee=p,oe=u,q=d;if(!n.isMounted)if(s)ee=R||p,oe=b||u,q=k||d;else return;let pe=!1;O[On]=Le=>{pe||(pe=!0,Le?F(q,[O]):F(oe,[O]),L.delayedLeave&&L.delayedLeave(),O[On]=void 0)};const Ae=O[On].bind(null,!1);ee?U(ee,[O,Ae]):Ae()},leave(O,ee){const oe=String(e.key);if(O[On]&&O[On](!0),n.isUnmounting)return ee();F(g,[O]);let q=!1;O[ft]=Ae=>{q||(q=!0,ee(),Ae?F(w,[O]):F(C,[O]),O[ft]=void 0,$[oe]===e&&delete $[oe])};const pe=O[ft].bind(null,!1);$[oe]=e,m?U(m,[O,pe]):pe()},clone(O){const ee=nr(O,t,n,r,o);return o&&o(ee),ee}};return L}function xo(e){if(ro(e))return e=sn(e),e.children=null,e}function Fr(e){if(!ro(e))return no(e.type)&&e.children?ja(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ue(n.default))return n.default()}}function on(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;on(no(n.type)&&Fr(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===ae&&se(e.children)){const n=el(e.children,!1);n&&on(n,t)}}function ks(e,t=!1,n){let r=[],o=0;for(let s=0;s<e.length;s++){let a=e[s];const i=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===ae?(a.patchFlag&128&&o++,r=r.concat(ks(a.children,t,i))):(t||a.type!==Ye)&&r.push(i!=null?sn(a,{key:i}):a)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function rr(e){if(e.component)return rr(e.component.subTree);if(e.type===ae){const t=se(e.children)&&el(e.children,!1);return t?rr(t):void 0}if(e.type!==Ye)return e}function ce(e,t){return ue(e)?Ne({name:e.name},t,{setup:e}):e}function zs(){const e=ao();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Na(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function qs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Lr=new WeakMap;function Kn(e,t,n,r,o=!1){if(se(e)){e.forEach((w,A)=>Kn(w,t&&(se(t)?t[A]:t),n,r,o));return}if(Sn(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Kn(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?lo(r.component):r.el,a=o?null:s,{i,r:c}=e,p=t&&t.r,u=i.refs===Ee?i.refs={}:i.refs,d=i.setupState,g=ze(d),m=d===Ee?oa:w=>qs(u,w)?!1:_e(g,w),C=(w,A)=>!(A&&qs(u,A));if(p!=null&&p!==c){if(Ws(t),De(p))u[p]=null,m(p)&&(d[p]=null);else if(Qe(p)){const w=t;C(p,w.k)&&(p.value=null),w.k&&(u[w.k]=null)}}if(ue(c))dr(c,i,12,[a,u]);else{const w=De(c),A=Qe(c);if(w||A){const R=()=>{if(e.f){const b=w?m(c)?d[c]:u[c]:C()||!e.k?c.value:u[e.k];if(o)se(b)&&ds(b,s);else if(se(b))b.includes(s)||b.push(s);else if(w)u[c]=[s],m(c)&&(d[c]=u[c]);else{const k=[s];C(c,e.k)&&(c.value=k),e.k&&(u[e.k]=k)}}else w?(u[c]=a,m(c)&&(d[c]=a)):A&&(C(c,e.k)&&(c.value=a),e.k&&(u[e.k]=a))};if(a){const b=()=>{R(),Lr.delete(e)};b.id=-1,Lr.set(e,b),it(b,n)}else Ws(e),R()}}}function Ws(e){const t=Lr.get(e);t&&(t.flags|=8,Lr.delete(e))}Zr().requestIdleCallback;Zr().cancelIdleCallback;const Sn=e=>!!e.type.__asyncLoader,ro=e=>e.type.__isKeepAlive;function dd(e,t){Ua(e,"a",t)}function ud(e,t){Ua(e,"da",t)}function Ua(e,t,n=Je){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(oo(t,r,n),n){let o=n.parent;for(;o&&o.parent;)ro(o.parent.vnode)&&pd(r,t,n,o),o=o.parent}}function pd(e,t,n,r){const o=oo(t,e,r,!0);ct(()=>{ds(r[t],o)},n)}function oo(e,t,n=Je,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{Pt();const i=pr(n),c=bt(t,n,e,a);return i(),Ft(),c});return r?o.unshift(s):o.push(s),s}}const Wt=e=>(t,n=Je)=>{(!ir||e==="sp")&&oo(e,(...r)=>t(...r),n)},fd=Wt("bm"),lt=Wt("m"),md=Wt("bu"),Ha=Wt("u"),Ga=Wt("bum"),ct=Wt("um"),gd=Wt("sp"),bd=Wt("rtg"),hd=Wt("rtc");function xd(e,t=Je){oo("ec",e,t)}const qa="components";function ur(e,t){return Ka(qa,e,!0,t)||e}const Wa=Symbol.for("v-ndc");function Gt(e){return De(e)?Ka(qa,e,!1)||e:e||Wa}function Ka(e,t,n=!0,r=!1){const o=Xe||Je;if(o){const s=o.type;{const i=tu(s,!1);if(i&&(i===t||i===st(t)||i===Yr(st(t))))return s}const a=Ks(o[e]||s[e],t)||Ks(o.appContext[e],t);return!a&&r?s:a}}function Ks(e,t){return e&&(e[t]||e[st(t)]||e[Yr(st(t))])}function Re(e,t,n,r){let o;const s=n,a=se(e);if(a||De(e)){const i=a&&nn(e);let c=!1,p=!1;i&&(c=!mt(e),p=Lt(e),e=Qr(e)),o=new Array(e.length);for(let u=0,d=e.length;u<d;u++)o[u]=t(c?p?rn(gt(e[u])):gt(e[u]):e[u],u,void 0,s)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)o=[];else{o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,s)}else if(Se(e))if(e[Symbol.iterator])o=Array.from(e,(i,c)=>t(i,c,void 0,s));else{const i=Object.keys(e);o=new Array(i.length);for(let c=0,p=i.length;c<p;c++){const u=i[c];o[c]=t(e[u],u,c,s)}}else o=[];return o}function at(e,t,n,r,o,s){if(n==null&&(n={}),Xe.ce||Xe.parent&&Sn(Xe.parent)&&Xe.parent.ce){const p=s!=null&&n.key==null?Ne({},n,{key:s}):n,u=Object.keys(p).length>0;return t!=="default"&&(p.name=t),h(),he(ae,null,[v("slot",p,r&&r())],u?-2:64)}let a=e[t];a&&a._c&&(a._d=!1);const i=Ht.length;h();let c;try{const p=a&&Xa(a(n)),u=n.key||s||p&&p.key;c=he(ae,{key:(u&&!yt(u)?u:`_${t}`)+(!p&&r?"_fb":"")},p||(r?r():[]),p&&e._===1?64:-2)}catch(p){for(let u=Ht.length;u>i;u--)Ss();throw p}finally{a&&a._c&&(a._d=!0)}return!o&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function Xa(e){return e.some(t=>Rn(t)?!(t.type===Ye||t.type===ae&&!Xa(t.children)):!0)?e:null}const No=e=>e?bl(e)?lo(e):No(e.parent):null,Xn=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>No(e.parent),$root:e=>No(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Za(e),$forceUpdate:e=>e.f||(e.f=()=>{ws(e.update)}),$nextTick:e=>e.n||(e.n=ys.bind(e.proxy)),$watch:e=>id.bind(e)}),vo=(e,t)=>e!==Ee&&!e.__isScriptSetup&&_e(e,t),vd={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:s,accessCache:a,type:i,appContext:c}=e;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(vo(r,t))return a[t]=1,r[t];if(o!==Ee&&_e(o,t))return a[t]=2,o[t];if(_e(s,t))return a[t]=3,s[t];if(n!==Ee&&_e(n,t))return a[t]=4,n[t];Uo&&(a[t]=0)}}const p=Xn[t];let u,d;if(p)return t==="$attrs"&&Ze(e.attrs,"get",""),p(e);if((u=i.__cssModules)&&(u=u[t]))return u;if(n!==Ee&&_e(n,t))return a[t]=4,n[t];if(d=c.config.globalProperties,_e(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return vo(o,t)?(o[t]=n,!0):r!==Ee&&_e(r,t)?(r[t]=n,!0):_e(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,props:s,type:a}},i){let c;return!!(n[i]||e!==Ee&&i[0]!=="$"&&_e(e,i)||vo(t,i)||_e(s,i)||_e(r,i)||_e(Xn,i)||_e(o.config.globalProperties,i)||(c=a.__cssModules)&&c[i])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:_e(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Xs(e){return se(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Uo=!0;function yd(e){const t=Za(e),n=e.proxy,r=e.ctx;Uo=!1,t.beforeCreate&&Ys(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:i,provide:c,inject:p,created:u,beforeMount:d,mounted:g,beforeUpdate:m,updated:C,activated:w,deactivated:A,beforeDestroy:R,beforeUnmount:b,destroyed:k,unmounted:z,render:$,renderTracked:F,renderTriggered:U,errorCaptured:L,serverPrefetch:O,expose:ee,inheritAttrs:oe,components:q,directives:pe,filters:Ae}=t;if(p&&wd(p,r,null),a)for(const de in a){const te=a[de];ue(te)&&(r[de]=te.bind(n))}if(o){const de=o.call(n,n);Se(de)&&(e.data=eo(de))}if(Uo=!0,s)for(const de in s){const te=s[de],Me=ue(te)?te.bind(n,n):ue(te.get)?te.get.bind(n,n):$t,Y=!ue(te)&&ue(te.set)?te.set.bind(n):$t,je=ge({get:Me,set:Y});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>je.value,set:ye=>je.value=ye})}if(i)for(const de in i)Ya(i[de],r,n,de);if(c){const de=ue(c)?c.call(n):c;Reflect.ownKeys(de).forEach(te=>{Cr(te,de[te])})}u&&Ys(u,e,"c");function be(de,te){se(te)?te.forEach(Me=>de(Me.bind(n))):te&&de(te.bind(n))}if(be(fd,d),be(lt,g),be(md,m),be(Ha,C),be(dd,w),be(ud,A),be(xd,L),be(hd,F),be(bd,U),be(Ga,b),be(ct,z),be(gd,O),se(ee))if(ee.length){const de=e.exposed||(e.exposed={});ee.forEach(te=>{Object.defineProperty(de,te,{get:()=>n[te],set:Me=>n[te]=Me,enumerable:!0})})}else e.exposed||(e.exposed={});$&&e.render===$t&&(e.render=$),oe!=null&&(e.inheritAttrs=oe),q&&(e.components=q),pe&&(e.directives=pe),O&&Na(e)}function wd(e,t,n=$t){se(e)&&(e=Ho(e));for(const r in e){const o=e[r];let s;Se(o)?"default"in o?s=Et(o.from||r,o.default,!0):s=Et(o.from||r):s=Et(o),Qe(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function Ys(e,t,n){bt(se(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ya(e,t,n,r){let o=r.includes(".")?Oa(n,r):()=>n[r];if(De(e)){const s=t[e];ue(s)&&vt(o,s)}else if(ue(e))vt(o,e.bind(n));else if(Se(e))if(se(e))e.forEach(s=>Ya(s,t,n,r));else{const s=ue(e.handler)?e.handler.bind(n):t[e.handler];ue(s)&&vt(o,s,e)}}function Za(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,i=s.get(t);let c;return i?c=i:!o.length&&!n&&!r?c=t:(c={},o.length&&o.forEach(p=>Or(c,p,a,!0)),Or(c,t,a)),Se(t)&&s.set(t,c),c}function Or(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&Or(e,s,n,!0),o&&o.forEach(a=>Or(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const i=kd[a]||n&&n[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const kd={data:Zs,props:Js,emits:Js,methods:Un,computed:Un,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Un,directives:Un,watch:_d,provide:Zs,inject:zd};function Zs(e,t){return t?e?function(){return Ne(ue(e)?e.call(this,this):e,ue(t)?t.call(this,this):t)}:t:e}function zd(e,t){return Un(Ho(e),Ho(t))}function Ho(e){if(se(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function Un(e,t){return e?Ne(Object.create(null),e,t):t}function Js(e,t){return e?se(e)&&se(t)?[...new Set([...e,...t])]:Ne(Object.create(null),Xs(e),Xs(t??{})):t}function _d(e,t){if(!e)return t;if(!t)return e;const n=Ne(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function Ja(){return{app:null,config:{isNativeTag:oa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cd=0;function Sd(e,t){return function(r,o=null){ue(r)||(r=Ne({},r)),o!=null&&!Se(o)&&(o=null);const s=Ja(),a=new WeakSet,i=[];let c=!1;const p=s.app={_uid:Cd++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:ru,get config(){return s.config},set config(u){},use(u,...d){return a.has(u)||(u&&ue(u.install)?(a.add(u),u.install(p,...d)):ue(u)&&(a.add(u),u(p,...d))),p},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),p},component(u,d){return d?(s.components[u]=d,p):s.components[u]},directive(u,d){return d?(s.directives[u]=d,p):s.directives[u]},mount(u,d,g){if(!c){const m=p._ceVNode||v(r,o);return m.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),e(m,u,g),c=!0,p._container=u,u.__vue_app__=p,lo(m.component)}},onUnmount(u){i.push(u)},unmount(){c&&(bt(i,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return s.provides[u]=d,p},runWithContext(u){const d=An;An=p;try{return u()}finally{An=d}}};return p}}let An=null;const Ad=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${st(t)}Modifiers`]||e[`${an(t)}Modifiers`];function Id(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Ee;let o=n;const s=t.startsWith("update:"),a=s&&Ad(r,t.slice(7));a&&(a.trim&&(o=n.map(u=>De(u)?u.trim():u)),a.number&&(o=o.map(ps)));let i,c=r[i=po(t)]||r[i=po(st(t))];!c&&s&&(c=r[i=po(an(t))]),c&&bt(c,e,6,o);const p=r[i+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,bt(p,e,6,o)}}const Rd=new WeakMap;function Qa(e,t,n=!1){const r=n?Rd:t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let a={},i=!1;if(!ue(e)){const c=p=>{const u=Qa(p,t,!0);u&&(i=!0,Ne(a,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!i?(Se(e)&&r.set(e,null),null):(se(s)?s.forEach(c=>a[c]=null):Ne(a,s),Se(e)&&r.set(e,a),a)}function so(e,t){return!e||!Wr(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),_e(e,t[0].toLowerCase()+t.slice(1))||_e(e,an(t))||_e(e,t))}function Qs(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:a,attrs:i,emit:c,render:p,renderCache:u,props:d,data:g,setupState:m,ctx:C,inheritAttrs:w}=e,A=Pr(e);let R,b;try{if(n.shapeFlag&4){const z=o||r,$=z;R=Mt(p.call($,z,u,d,m,g,C)),b=i}else{const z=t;R=Mt(z.length>1?z(d,{attrs:i,slots:a,emit:c}):z(d,null)),b=t.props?i:Md(i)}}catch(z){Ht.length=0,to(z,e,1),R=v(Ye)}let k=R;if(b&&w!==!1){const z=Object.keys(b),{shapeFlag:$}=k;z.length&&$&7&&(s&&z.some(Kr)&&(b=Td(b,s)),k=sn(k,b,!1,!0))}if(n.dirs&&(k=sn(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition){const z=no(k.type)&&Fr(k)||k;on(z,n.transition)}return R=k,Pr(A),R}function el(e,t=!0){let n;for(let r=0;r<e.length;r++){const o=e[r];if(Rn(o)){if(o.type!==Ye||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Md=e=>{let t;for(const n in e)(n==="class"||n==="style"||Wr(n))&&((t||(t={}))[n]=e[n]);return t},Td=(e,t)=>{const n={};for(const r in e)(!Kr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function $d(e,t,n){const{props:r,children:o,component:s}=e,{props:a,children:i,patchFlag:c}=t,p=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ei(r,a,p):!!a;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(tl(a,r,g)&&!so(p,g))return!0}}}else return(o||i)&&(!i||!i.$stable)?!0:r===a?!1:r?a?ei(r,a,p):!0:!!a;return!1}function ei(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(!_e(e,s)||tl(t,e,s)&&!so(n,s))return!0}return!1}function tl(e,t,n){const r=e[n],o=t[n];return n==="style"&&Se(r)&&Se(o)?!Jr(r,o):r!==o}function Ed({vnode:e,parent:t,suspense:n},r){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=r,e=o),o===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const nl={},rl=()=>Object.create(nl),ol=e=>Object.getPrototypeOf(e)===nl;function Pd(e,t,n,r=!1){const o={},s=rl();e.propsDefaults=Object.create(null),sl(e,t,o,s);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);n?e.props=r?o:Aa(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Fd(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,i=ze(o),[c]=e.propsOptions;let p=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(so(e.emitsOptions,g))continue;const m=t[g];if(c)if(_e(s,g))m!==s[g]&&(s[g]=m,p=!0);else{const C=st(g);o[C]=Go(c,i,C,m,e,!1)}else m!==s[g]&&(s[g]=m,p=!0)}}}else{sl(e,t,o,s)&&(p=!0);let u;for(const d in i)(!t||!_e(t,d)&&((u=an(d))===d||!_e(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(o[d]=Go(c,i,d,void 0,e,!0)):delete o[d]);if(s!==i)for(const d in s)(!t||!_e(t,d))&&(delete s[d],p=!0)}p&&Nt(e.attrs,"set","")}function sl(e,t,n,r){const[o,s]=e.propsOptions;let a=!1,i;if(t)for(let c in t){if(Gn(c))continue;const p=t[c];let u;o&&_e(o,u=st(c))?!s||!s.includes(u)?n[u]=p:(i||(i={}))[u]=p:so(e.emitsOptions,c)||(!(c in r)||p!==r[c])&&(r[c]=p,a=!0)}if(s){const c=ze(n),p=i||Ee;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Go(o,c,d,p[d],e,!_e(p,d))}}return a}function Go(e,t,n,r,o,s){const a=e[n];if(a!=null){const i=_e(a,"default");if(i&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ue(c)){const{propsDefaults:p}=o;if(n in p)r=p[n];else{const u=pr(o);r=p[n]=c.call(null,t),u()}}else r=c;o.ce&&o.ce._setProp(n,r)}a[0]&&(s&&!i?r=!1:a[1]&&(r===""||r===an(n))&&(r=!0))}return r}const Ld=new WeakMap;function il(e,t,n=!1){const r=n?Ld:t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},i=[];let c=!1;if(!ue(e)){const u=d=>{c=!0;const[g,m]=il(d,t,!0);Ne(a,g),m&&i.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return Se(e)&&r.set(e,bn),bn;if(se(s))for(let u=0;u<s.length;u++){const d=st(s[u]);ti(d)&&(a[d]=Ee)}else if(s)for(const u in s){const d=st(u);if(ti(d)){const g=s[u],m=a[d]=se(g)||ue(g)?{type:g}:Ne({},g),C=m.type;let w=!1,A=!0;if(se(C))for(let R=0;R<C.length;++R){const b=C[R],k=ue(b)&&b.name;if(k==="Boolean"){w=!0;break}else k==="String"&&(A=!1)}else w=ue(C)&&C.name==="Boolean";m[0]=w,m[1]=A,(w||_e(m,"default"))&&i.push(d)}}const p=[a,i];return Se(e)&&r.set(e,p),p}function ti(e){return e[0]!=="$"&&!Gn(e)}const _s=e=>e==="_"||e==="_ctx"||e==="$stable",Cs=e=>se(e)?e.map(Mt):[Mt(e)],Od=(e,t,n)=>{if(t._n)return t;const r=Z((...o)=>Cs(t(...o)),n);return r._c=!1,r},al=(e,t,n)=>{const r=e._ctx;for(const o in e){if(_s(o))continue;const s=e[o];if(ue(s))t[o]=Od(o,s,r);else if(s!=null){const a=Cs(s);t[o]=()=>a}}},ll=(e,t)=>{const n=Cs(t);e.slots.default=()=>n},cl=(e,t,n)=>{for(const r in t)(n||!_s(r))&&(e[r]=t[r])},Vd=(e,t,n)=>{const r=e.slots=rl();if(e.vnode.shapeFlag&32){const o=t._;o?(cl(r,t,n),n&&la(r,"_",o,!0)):al(t,r)}else t&&ll(e,t)},Dd=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=Ee;if(r.shapeFlag&32){const i=t._;i?n&&i===1?s=!1:cl(o,t,n):(s=!t.$stable,al(t,o)),a=t}else t&&(ll(e,t),a={default:1});if(s)for(const i in o)!_s(i)&&a[i]==null&&delete o[i]},it=Hd;function jd(e){return Bd(e)}function Bd(e,t){const n=Zr();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:a,createText:i,createComment:c,setText:p,setElementText:u,parentNode:d,nextSibling:g,setScopeId:m=$t,insertStaticContent:C}=e,w=(f,x,S,M=null,P=null,j=null,G=void 0,K=null,W=!!x.dynamicChildren)=>{if(f===x)return;f&&!gn(f,x)&&(M=E(f),ye(f,P,j,!0),f=null),x.patchFlag===-2&&(W=!1,x.dynamicChildren=null),x.dynamicChildren&&f&&f.dynamicChildren&&f.dynamicChildren.hasOnce&&(x.dynamicChildren===bn&&(x.dynamicChildren=[]),x.dynamicChildren.hasOnce=!0);const{type:B,ref:ne,shapeFlag:X}=x;switch(B){case io:A(f,x,S,M);break;case Ye:R(f,x,S,M);break;case Sr:f==null&&b(x,S,M,G);break;case ae:q(f,x,S,M,P,j,G,K,W);break;default:X&1?$(f,x,S,M,P,j,G,K,W):X&6?pe(f,x,S,M,P,j,G,K,W):(X&64||X&128)&&B.process(f,x,S,M,P,j,G,K,W,H)}ne!=null&&P?Kn(ne,f&&f.ref,j,x||f,!x):ne==null&&f&&f.ref!=null&&Kn(f.ref,null,j,f,!0)},A=(f,x,S,M)=>{if(f==null)r(x.el=i(x.children),S,M);else{const P=x.el=f.el;x.children!==f.children&&p(P,x.children)}},R=(f,x,S,M)=>{f==null?r(x.el=c(x.children||""),S,M):x.el=f.el},b=(f,x,S,M)=>{[f.el,f.anchor]=C(f.children,x,S,M,f.el,f.anchor)},k=({el:f,anchor:x},S,M)=>{let P;for(;f&&f!==x;)P=g(f),r(f,S,M),f=P;r(x,S,M)},z=({el:f,anchor:x})=>{let S;for(;f&&f!==x;)S=g(f),o(f),f=S;o(x)},$=(f,x,S,M,P,j,G,K,W)=>{if(x.type==="svg"?G="svg":x.type==="math"&&(G="mathml"),f==null)F(x,S,M,P,j,G,K,W);else{const B=f.el&&f.el._isVueCE?f.el:null;try{B&&B._beginPatch(),O(f,x,P,j,G,K,W)}finally{B&&B._endPatch()}}},F=(f,x,S,M,P,j,G,K)=>{let W,B;const{props:ne,shapeFlag:X,transition:re,dirs:le}=f;if(W=f.el=a(f.type,j,ne&&ne.is,ne),X&8?u(W,f.children):X&16&&L(f.children,W,null,M,P,yo(f,j),G,K),le&&dn(f,null,M,"created"),U(W,f,f.scopeId,G,M),ne){for(const $e in ne)$e!=="value"&&!Gn($e)&&s(W,$e,null,ne[$e],j,M);"value"in ne&&s(W,"value",null,ne.value,j),(B=ne.onVnodeBeforeMount)&&Ct(B,M,f)}le&&dn(f,null,M,"beforeMount");const ke=Nd(P,re);ke&&re.beforeEnter(W),r(W,x,S),((B=ne&&ne.onVnodeMounted)||ke||le)&&it(()=>{try{B&&Ct(B,M,f),ke&&re.enter(W),le&&dn(f,null,M,"mounted")}finally{}},P)},U=(f,x,S,M,P)=>{if(S&&m(f,S),M)for(let j=0;j<M.length;j++)m(f,M[j]);if(P){let j=P.subTree;if(x===j||pl(j.type)&&(j.ssContent===x||j.ssFallback===x)){const G=P.vnode;U(f,G,G.scopeId,G.slotScopeIds,P.parent)}}},L=(f,x,S,M,P,j,G,K,W=0)=>{for(let B=W;B<f.length;B++){const ne=f[B]=K?Bt(f[B]):Mt(f[B]);w(null,ne,x,S,M,P,j,G,K)}},O=(f,x,S,M,P,j,G)=>{const K=x.el=f.el;let{patchFlag:W,dynamicChildren:B,dirs:ne}=x;W|=f.patchFlag&16;const X=f.props||Ee,re=x.props||Ee;let le;if(S&&un(S,!1),(le=re.onVnodeBeforeUpdate)&&Ct(le,S,x,f),ne&&dn(x,f,S,"beforeUpdate"),S&&un(S,!0),B&&(!f.dynamicChildren||f.dynamicChildren.length!==B.length)&&(W=0,G=!1,B=null),(X.innerHTML&&re.innerHTML==null||X.textContent&&re.textContent==null)&&u(K,""),B?ee(f.dynamicChildren,B,K,S,M,yo(x,P),j):G||te(f,x,K,null,S,M,yo(x,P),j,!1),W>0){if(W&16)oe(K,X,re,S,P);else if(W&2&&X.class!==re.class&&s(K,"class",null,re.class,P),W&4&&s(K,"style",X.style,re.style,P),W&8){const ke=x.dynamicProps;for(let $e=0;$e<ke.length;$e++){const Te=ke[$e],Ue=X[Te],We=re[Te];(We!==Ue||Te==="value")&&s(K,Te,Ue,We,P,S)}}W&1&&f.children!==x.children&&u(K,x.children)}else!G&&B==null&&oe(K,X,re,S,P);((le=re.onVnodeUpdated)||ne)&&it(()=>{le&&Ct(le,S,x,f),ne&&dn(x,f,S,"updated")},M)},ee=(f,x,S,M,P,j,G)=>{for(let K=0;K<x.length;K++){const W=f[K],B=x[K],ne=W.el||qo(W),X=ne&&(W.type===ae||!gn(W,B)||W.shapeFlag&198)?d(ne):S;w(W,B,X,null,M,P,j,G,!0)}},oe=(f,x,S,M,P)=>{if(x!==S){if(x!==Ee)for(const j in x)!Gn(j)&&!(j in S)&&s(f,j,x[j],null,P,M);for(const j in S){if(Gn(j))continue;const G=S[j],K=x[j];G!==K&&j!=="value"&&s(f,j,K,G,P,M)}"value"in S&&s(f,"value",x.value,S.value,P)}},q=(f,x,S,M,P,j,G,K,W)=>{const B=x.el=f?f.el:i(""),ne=x.anchor=f?f.anchor:i("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:le}=x;le&&(K=K?K.concat(le):le),f==null?(r(B,S,M),r(ne,S,M),L(x.children||[],S,ne,P,j,G,K,W)):X>0&&X&64&&re&&f.dynamicChildren&&f.dynamicChildren.length===re.length?(ee(f.dynamicChildren,re,S,P,j,G,K),(x.key!=null||P&&x===P.subTree)&&dl(f,x,!0)):te(f,x,S,ne,P,j,G,K,W)},pe=(f,x,S,M,P,j,G,K,W)=>{x.slotScopeIds=K,f==null?x.shapeFlag&512?P.ctx.activate(x,S,M,G,W):Ae(x,S,M,P,j,G,W):Le(f,x,W)},Ae=(f,x,S,M,P,j,G)=>{const K=f.component=Yd(f,M,P);if(ro(f)&&(K.ctx.renderer=H),Zd(K,!1,G),K.asyncDep){if(P&&P.registerDep(K,be,G,j),!f.el){const W=K.subTree=v(Ye);R(null,W,x,S),f.placeholder=W.el}}else be(K,f,x,S,P,j,G)},Le=(f,x,S)=>{const M=x.component=f.component;if($d(f,x,S))if(M.asyncDep&&!M.asyncResolved){x.el=f.el,x.placeholder=f.placeholder,de(M,x,S);return}else M.next=x,M.update();else x.el=f.el,x.placeholder=f.placeholder,M.vnode=x},be=(f,x,S,M,P,j,G)=>{const K=()=>{if(f.isMounted){let{next:X,bu:re,u:le,parent:ke,vnode:$e}=f;{const zt=ul(f);if(zt){X&&(X.el=$e.el,de(f,X,G)),zt.asyncDep.then(()=>{it(()=>{f.isUnmounted||B()},P)});return}}let Te=X,Ue;un(f,!1),X?(X.el=$e.el,de(f,X,G)):X=$e,re&&_r(re),(Ue=X.props&&X.props.onVnodeBeforeUpdate)&&Ct(Ue,ke,X,$e),un(f,!0);const We=Qs(f),kt=f.subTree;f.subTree=We,w(kt,We,d(kt.el),E(kt),f,P,j),X.el=We.el,Te===null&&Ed(f,We.el),le&&it(le,P),(Ue=X.props&&X.props.onVnodeUpdated)&&it(()=>Ct(Ue,ke,X,$e),P)}else{let X;const{el:re,props:le}=x,{bm:ke,m:$e,parent:Te,root:Ue,type:We}=f,kt=Sn(x);un(f,!1),ke&&_r(ke),!kt&&(X=le&&le.onVnodeBeforeMount)&&Ct(X,Te,x),un(f,!0);{Ue.ce&&Ue.ce._hasShadowRoot()&&Ue.ce._injectChildStyle(We,f.parent?f.parent.type:void 0);const zt=f.subTree=Qs(f);w(null,zt,S,M,f,P,j),x.el=zt.el}if($e&&it($e,P),!kt&&(X=le&&le.onVnodeMounted)){const zt=x;it(()=>Ct(X,Te,zt),P)}(x.shapeFlag&256||Te&&Sn(Te.vnode)&&Te.vnode.shapeFlag&256)&&f.a&&it(f.a,P),f.isMounted=!0,x=S=M=null}};f.scope.on();const W=f.effect=new pa(K);f.scope.off();const B=f.update=W.run.bind(W),ne=f.job=W.runIfDirty.bind(W);ne.i=f,ne.id=f.uid,W.scheduler=()=>ws(ne),un(f,!0),B()},de=(f,x,S)=>{x.component=f;const M=f.vnode.props;f.vnode=x,f.next=null,Fd(f,x.props,M,S),Dd(f,x.children,S),Pt(),$a(f),Ft()},te=(f,x,S,M,P,j,G,K,W=!1)=>{const B=f&&f.children,ne=f?f.shapeFlag:0,X=x.children,{patchFlag:re,shapeFlag:le}=x;if(re>0){if(re&128){Y(B,X,S,M,P,j,G,K,W);return}else if(re&256){Me(B,X,S,M,P,j,G,K,W);return}}le&8?(ne&16&&ve(B,P,j),X!==B&&u(S,X)):ne&16?le&16?Y(B,X,S,M,P,j,G,K,W):ve(B,P,j,!0):(ne&8&&u(S,""),le&16&&L(X,S,M,P,j,G,K,W))},Me=(f,x,S,M,P,j,G,K,W)=>{f=f||bn,x=x||bn;const B=f.length,ne=x.length,X=Math.min(B,ne);let re;for(re=0;re<X;re++){const le=x[re]=W?Bt(x[re]):Mt(x[re]);w(f[re],le,S,null,P,j,G,K,W)}B>ne?ve(f,P,j,!0,!1,X):L(x,S,M,P,j,G,K,W,X)},Y=(f,x,S,M,P,j,G,K,W)=>{let B=0;const ne=x.length;let X=f.length-1,re=ne-1;for(;B<=X&&B<=re;){const le=f[B],ke=x[B]=W?Bt(x[B]):Mt(x[B]);if(gn(le,ke))w(le,ke,S,null,P,j,G,K,W);else break;B++}for(;B<=X&&B<=re;){const le=f[X],ke=x[re]=W?Bt(x[re]):Mt(x[re]);if(gn(le,ke))w(le,ke,S,null,P,j,G,K,W);else break;X--,re--}if(B>X){if(B<=re){const le=re+1,ke=le<ne?x[le].el:M;for(;B<=re;)w(null,x[B]=W?Bt(x[B]):Mt(x[B]),S,ke,P,j,G,K,W),B++}}else if(B>re)for(;B<=X;)ye(f[B],P,j,!0),B++;else{const le=B,ke=B,$e=new Map;for(B=ke;B<=re;B++){const dt=x[B]=W?Bt(x[B]):Mt(x[B]);dt.key!=null&&$e.set(dt.key,B)}let Te,Ue=0;const We=re-ke+1;let kt=!1,zt=0;const Fn=new Array(We);for(B=0;B<We;B++)Fn[B]=0;for(B=le;B<=X;B++){const dt=f[B];if(Ue>=We){ye(dt,P,j,!0);continue}let _t;if(dt.key!=null)_t=$e.get(dt.key);else for(Te=ke;Te<=re;Te++)if(Fn[Te-ke]===0&&gn(dt,x[Te])){_t=Te;break}_t===void 0?ye(dt,P,j,!0):(Fn[_t-ke]=B+1,_t>=zt?zt=_t:kt=!0,w(dt,x[_t],S,null,P,j,G,K,W),Ue++)}const Ls=kt?Ud(Fn):bn;for(Te=Ls.length-1,B=We-1;B>=0;B--){const dt=ke+B,_t=x[dt],Os=x[dt+1],Vs=dt+1<ne?Os.el||qo(Os):M;Fn[B]===0?w(null,_t,S,Vs,P,j,G,K,W):kt&&(Te<0||B!==Ls[Te]?je(_t,S,Vs,2):Te--)}}},je=(f,x,S,M,P=null)=>{const{el:j,type:G,transition:K,children:W,shapeFlag:B}=f;if(B&6){je(f.component.subTree,x,S,M);return}if(B&128){f.suspense.move(x,S,M);return}if(B&64){G.move(f,x,S,H);return}if(G===ae){r(j,x,S);for(let X=0;X<W.length;X++)je(W[X],x,S,M);r(f.anchor,x,S);return}if(G===Sr){k(f,x,S);return}if(M!==2&&B&1&&K)if(M===0)K.persisted&&!j[ft]?r(j,x,S):(K.beforeEnter(j),r(j,x,S),it(()=>K.enter(j),P));else{const{leave:X,delayLeave:re,afterLeave:le}=K,ke=()=>{f.ctx.isUnmounted?o(j):r(j,x,S)},$e=()=>{const Te=j._isLeaving||!!j[ft];j._isLeaving&&j[ft](!0),K.persisted&&!Te?ke():X(j,()=>{ke(),le&&le()})};re?re(j,ke,$e):$e()}else r(j,x,S)},ye=(f,x,S,M=!1,P=!1)=>{const{type:j,props:G,ref:K,children:W,dynamicChildren:B,shapeFlag:ne,patchFlag:X,dirs:re,cacheIndex:le,memo:ke}=f;if((X===-2||B&&B.hasOnce)&&(P=!1),K!=null&&(Pt(),Kn(K,null,S,f,!0),Ft()),le!=null&&(!f.ctx||f.ctx===x)&&(x.renderCache[le]=void 0),ne&256){x.ctx.deactivate(f);return}const $e=ne&1&&re,Te=!Sn(f);let Ue;if(Te&&(Ue=G&&G.onVnodeBeforeUnmount)&&Ct(Ue,x,f),ne&6)we(f.component,S,M);else{if(ne&128){f.suspense.unmount(S,M);return}$e&&dn(f,null,x,"beforeUnmount"),ne&64?f.type.remove(f,x,S,H,M):B&&!B.hasOnce&&(j!==ae||X>0&&X&64)?ve(B,x,S,!1,!0):(j===ae&&X&384||!P&&ne&16)&&ve(W,x,S),M&&et(f)}const We=ke!=null&&le==null;(Te&&(Ue=G&&G.onVnodeUnmounted)||$e||We)&&it(()=>{Ue&&Ct(Ue,x,f),$e&&dn(f,null,x,"unmounted"),We&&(f.el=null)},S)},et=f=>{const{type:x,el:S,anchor:M,transition:P}=f,j=x===ae;if(j&&!P){Oe(S,M);return}if(x===Sr){z(f),P&&!P.persisted&&P.afterLeave&&P.afterLeave();return}const G=j?rr(f):f,K=()=>{j?d(S)&&Oe(S,M):o(S),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(G&&G.shapeFlag&1&&P&&!P.persisted){const{leave:W,delayLeave:B}=P,ne=G.el,X=()=>W(ne,K);B?B(ne,K,X):X()}else K()},Oe=(f,x)=>{let S;for(;f!==x;)S=g(f),o(f),f=S;o(x)},we=(f,x,S)=>{const{bum:M,scope:P,job:j,subTree:G,um:K,m:W,a:B}=f;ni(W),ni(B),M&&_r(M),P.stop(),j?(j.flags|=8,ye(G,f,x,S)):f.vnode.el&&G&&(G.transition=f.vnode.transition,ye(G,f,x,S)),K&&it(K,x),it(()=>{f.isUnmounted=!0},x)},ve=(f,x,S,M=!1,P=!1,j=0)=>{for(let G=j;G<f.length;G++)ye(f[G],x,S,M,P)},E=f=>{if(f.shapeFlag&6)return E(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const x=g(f.anchor||f.el),S=x&&x[ad];return S?g(S):x},y=(f,x,S)=>{const M=f&&x._vnode?void 0:f&&f.component?f.component.uid:Xd();rd(()=>{f==null?x._vnode&&ye(x._vnode,null,null,!0):w(x._vnode||null,f,x,null,null,null,S),x._vnode=f},M)},H={p:w,um:ye,m:je,r:et,mt:Ae,mc:L,pc:te,pbc:ee,n:E,o:e};return{render:y,hydrate:void 0,createApp:Sd(y)}}function yo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function un({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Nd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function dl(e,t,n=!1){const r=e.children,o=t.children;if(se(r)&&se(o))for(let s=0;s<r.length;s++){const a=r[s];let i=o[s];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=o[s]=Bt(o[s]),i.el=a.el),!n&&i.patchFlag!==-2&&dl(a,i)),i.type===io&&(i.patchFlag===-1&&(i=o[s]=Bt(i)),i.el=a.el),i.type===Ye&&!i.el&&(i.el=a.el)}}function Ud(e){const t=e.slice(),n=[0];let r,o,s,a,i;const c=e.length;for(r=0;r<c;r++){const p=e[r];if(p!==0){if(o=n[n.length-1],e[o]<p){t[r]=o,n.push(r);continue}for(s=0,a=n.length-1;s<a;)i=s+a>>1,e[n[i]]<p?s=i+1:a=i;p<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}function ul(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ul(t)}function ni(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function qo(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?qo(t.subTree):null}const pl=e=>e.__isSuspense;function Hd(e,t){t&&t.pendingBranch?se(e)?t.effects.push(...e):t.effects.push(e):nd(e)}const ae=Symbol.for("v-fgt"),io=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),Sr=Symbol.for("v-stc"),Ht=[];let ut=null;function h(e=!1){Ht.push(ut=e?null:[])}function Ss(){Ht.pop(),ut=Ht[Ht.length-1]||null}let or=1;function Vr(e,t=!1){or+=e,e<0&&ut&&t&&(ut.hasOnce=!0)}function fl(e){return e.dynamicChildren=or>0?ut||bn:null,Ss(),or>0&&ut&&ut.push(e),e}function _(e,t,n,r,o,s){return fl(l(e,t,n,r,o,s,!0))}function he(e,t,n,r,o){return fl(v(e,t,n,r,o,!0))}function Rn(e){return e?e.__v_isVNode===!0:!1}function gn(e,t){return e.type===t.type&&e.key===t.key}const ml=({key:e})=>e??null,Ar=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?De(e)||Qe(e)||ue(e)?{i:Xe,r:e,k:t,f:!!n}:e:null);function l(e,t=null,n=null,r=0,o=null,s=e===ae?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ml(t),ref:t&&Ar(t),scopeId:Fa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Xe};return i?(Dr(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),or>0&&!a&&ut&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&ut.push(c),c}const v=Gd;function Gd(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===Wa)&&(e=Ye),Rn(e)){const i=sn(e,t,!0);return n&&Dr(i,n),or>0&&!s&&ut&&(i.shapeFlag&6?ut[ut.indexOf(e)]=i:ut.push(i)),i.patchFlag=-2,i}if(nu(e)&&(e=e.__vccOpts),t){t=qd(t);let{class:i,style:c}=t;i&&!De(i)&&(t.class=T(i)),Se(c)&&(vs(c)&&!se(c)&&(c=Ne({},c)),t.style=Ie(c))}const a=De(e)?1:pl(e)?128:no(e)?64:Se(e)?4:ue(e)?2:0;return l(e,t,n,r,o,a,s,!0)}function qd(e){return e?vs(e)||ol(e)?Ne({},e):e:null}function sn(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:a,children:i,transition:c}=e,p=t?Wd(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&ml(p),ref:t&&t.ref?n&&s?se(s)?s.concat(Ar(t)):[s,Ar(t)]:Ar(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ae?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&on(u,c.clone(u)),u}function Ve(e=" ",t=0){return v(io,null,e,t)}function Wo(e,t){const n=v(Sr,null,e);return n.staticCount=t,n}function fe(e="",t=!1){return t?(h(),he(Ye,null,e)):v(Ye,null,e)}function Mt(e){return e==null||typeof e=="boolean"?v(Ye):se(e)?v(ae,null,e.slice()):Rn(e)?Bt(e):v(io,null,String(e))}function Bt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:sn(e)}function Dr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(se(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Dr(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!ol(t)?t._ctx=Xe:o===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(ue(t)){if(r&65){Dr(e,{default:t});return}t={default:t,_ctx:Xe},n=32}else t=String(t),r&64?(n=16,t=[Ve(t)]):n=8;e.children=t,e.shapeFlag|=n}function Wd(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=T([t.class,r.class]));else if(o==="style")t.style=Ie([t.style,r.style]);else if(Wr(o)){const s=t[o],a=r[o];a&&s!==a&&!(se(s)&&s.includes(a))?t[o]=s?[].concat(s,a):a:a==null&&s==null&&!Kr(o)&&(t[o]=a)}else o!==""&&(t[o]=r[o])}return t}function Ct(e,t,n,r=null){bt(e,t,7,[n,r])}const Kd=Ja();let gl=0;function Xd(){return gl}function Yd(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||Kd,s={uid:gl++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ic(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:il(r,o),emitsOptions:Qa(r,o),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:r.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Id.bind(null,s),e.ce&&e.ce(s),s}let Je=null;const ao=()=>Je||Xe;let jr,sr;{const e=Zr(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),s=>{o.length>1?o.forEach(a=>a(s)):o[0](s)}};jr=t("__VUE_INSTANCE_SETTERS__",n=>Je=n),sr=t("__VUE_SSR_SETTERS__",n=>ir=n)}const pr=e=>{const t=Je;return jr(e),e.scope.on(),()=>{e.scope.off(),jr(t)}},ri=()=>{Je&&Je.scope.off(),jr(null)};function bl(e){return e.vnode.shapeFlag&4}let ir=!1;function Zd(e,t=!1,n=!1){t&&sr(t);const{props:r,children:o}=e.vnode,s=bl(e);Pd(e,r,s,t),Vd(e,o,n||t);const a=s?Jd(e,t):void 0;return t&&sr(!1),a}function Jd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,vd);const{setup:r}=n;if(r){Pt();const o=e.setupContext=r.length>1?eu(e):null,s=pr(e),a=dr(r,e,0,[e.props,o]),i=sa(a);if(Ft(),s(),(i||e.sp)&&!Sn(e)&&Na(e),i){if(a.then(ri,ri),t)return a.then(c=>{sr(!0);try{oi(e,c,t)}finally{sr(!1)}}).catch(c=>{to(c,e,0)});e.asyncDep=a}else oi(e,a)}else hl(e)}function oi(e,t,n){ue(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Se(t)&&(e.setupState=Ra(t)),hl(e)}function hl(e,t,n){const r=e.type;e.render||(e.render=r.render||$t);{const o=pr(e);Pt();try{yd(e)}finally{Ft(),o()}}}const Qd={get(e,t){return Ze(e,"get",""),e[t]}};function eu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Qd),slots:e.slots,emit:e.emit,expose:t}}function lo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ra(qc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Xn)return Xn[n](e)},has(t,n){return n in t||n in Xn}})):e.proxy}function tu(e,t=!0){return ue(e)?e.displayName||e.name:e.name||t&&e.__name}function nu(e){return ue(e)&&"__vccOpts"in e}const ge=(e,t)=>Zc(e,t,ir);function Mn(e,t,n){try{Vr(-1);const r=arguments.length;return r===2?Se(t)&&!se(t)?Rn(t)?v(e,null,[t]):v(e,t):v(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rn(n)&&(n=[n]),v(e,t,n))}finally{Vr(1)}}const ru="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ko;const si=typeof window<"u"&&window.trustedTypes;if(si)try{Ko=si.createPolicy("vue",{createHTML:e=>e})}catch{}const xl=Ko?e=>Ko.createHTML(e):e=>e,ou="http://www.w3.org/2000/svg",su="http://www.w3.org/1998/Math/MathML",jt=typeof document<"u"?document:null,ii=jt&&jt.createElement("template"),iu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?jt.createElementNS(ou,e):t==="mathml"?jt.createElementNS(su,e):n?jt.createElement(e,{is:n}):jt.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>jt.createTextNode(e),createComment:e=>jt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>jt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const a=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{ii.innerHTML=xl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const i=ii.content;if(r==="svg"||r==="mathml"){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Kt="transition",Vn="animation",Tn=Symbol("_vtc"),vl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yl=Ne({},Da,vl),au=e=>(e.displayName="Transition",e.props=yl,e),ln=au((e,{slots:t})=>Mn(cd,wl(e),t)),pn=(e,t=[])=>{se(e)?e.forEach(n=>n(...t)):e&&e(...t)},ai=e=>e?se(e)?e.some(t=>t.length>1):e.length>1:!1;function wl(e){const t={};for(const q in e)q in vl||(t[q]=e[q]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:p=a,appearToClass:u=i,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,C=lu(o),w=C&&C[0],A=C&&C[1],{onBeforeEnter:R,onEnter:b,onEnterCancelled:k,onLeave:z,onLeaveCancelled:$,onBeforeAppear:F=R,onAppear:U=b,onAppearCancelled:L=k}=t,O=(q,pe,Ae,Le)=>{q._enterCancelled=Le,Zt(q,pe?u:i),Zt(q,pe?p:a),Ae&&Ae()},ee=(q,pe)=>{q._isLeaving=!1,Zt(q,d),Zt(q,m),Zt(q,g),pe&&pe()},oe=q=>(pe,Ae)=>{const Le=q?U:b,be=()=>O(pe,q,Ae);pn(Le,[pe,be]),li(()=>{Zt(pe,q?c:s),At(pe,q?u:i),ai(Le)||ci(pe,r,w,be)})};return Ne(t,{onBeforeEnter(q){pn(R,[q]),At(q,s),At(q,a)},onBeforeAppear(q){pn(F,[q]),At(q,c),At(q,p)},onEnter:oe(!1),onAppear:oe(!0),onLeave(q,pe){q._isLeaving=!0;const Ae=()=>ee(q,pe);At(q,d),q._enterCancelled?(At(q,g),Xo(q)):(Xo(q),At(q,g)),li(()=>{q._isLeaving&&(Zt(q,d),At(q,m),ai(z)||ci(q,r,A,Ae))}),pn(z,[q,Ae])},onEnterCancelled(q){O(q,!1,void 0,!0),pn(k,[q])},onAppearCancelled(q){O(q,!0,void 0,!0),pn(L,[q])},onLeaveCancelled(q){ee(q),pn($,[q])}})}function lu(e){if(e==null)return null;if(Se(e))return[wo(e.enter),wo(e.leave)];{const t=wo(e);return[t,t]}}function wo(e){return vc(e)}function At(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Tn]||(e[Tn]=new Set)).add(t)}function Zt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Tn];n&&(n.delete(t),n.size||(e[Tn]=void 0))}function li(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let cu=0;function ci(e,t,n,r){const o=e._endId=++cu,s=()=>{o===e._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:i,propCount:c}=kl(e,t);if(!a)return r();const p=a+"end";let u=0;const d=()=>{e.removeEventListener(p,g),s()},g=m=>{m.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},i+1),e.addEventListener(p,g)}function kl(e,t){const n=window.getComputedStyle(e),r=C=>(n[C]||"").split(", "),o=r(`${Kt}Delay`),s=r(`${Kt}Duration`),a=di(o,s),i=r(`${Vn}Delay`),c=r(`${Vn}Duration`),p=di(i,c);let u=null,d=0,g=0;t===Kt?a>0&&(u=Kt,d=a,g=s.length):t===Vn?p>0&&(u=Vn,d=p,g=c.length):(d=Math.max(a,p),u=d>0?a>p?Kt:Vn:null,g=u?u===Kt?s.length:c.length:0);const m=u===Kt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Kt}Property`).toString());return{type:u,timeout:d,propCount:g,hasTransform:m}}function di(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ui(n)+ui(e[r])))}function ui(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Xo(e){return(e?e.ownerDocument:document).body.offsetHeight}function du(e,t,n){const r=e[Tn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Br=Symbol("_vod"),As=Symbol("_vsh"),ko={name:"show",beforeMount(e,{value:t},{transition:n}){e[Br]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Dn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Dn(e,!0),r.enter(e)):r.leave(e,()=>{Dn(e,!1)}):Dn(e,t))},beforeUnmount(e,{value:t}){Dn(e,t)}};function Dn(e,t){e.style.display=t?e[Br]:"none",e[As]=!t}const uu=Symbol(""),pu=/(?:^|;)\s*display\s*:/;function fu(e,t,n){const r=e.style,o=De(n);let s=!1;if(n&&!o){if(t)if(De(t))for(const a of t.split(";")){const i=a.slice(0,a.indexOf(":")).trim();n[i]==null&&Hn(r,i,"")}else for(const a in t)n[a]==null&&Hn(r,a,"");for(const a in n){a==="display"&&(s=!0);const i=n[a];i!=null?gu(e,a,!De(t)&&t?t[a]:void 0,i)||Hn(r,a,i):Hn(r,a,"")}}else if(o){if(t!==n){const a=r[uu];a&&(n+=";"+a),r.cssText=n,s=pu.test(n)}}else t&&e.removeAttribute("style");Br in e&&((!o||t!==n)&&(e[Br]=s?r.display:""),e[As]&&(r.display="none"))}const hr=/\s*!important$/;function Hn(e,t,n){if(se(n))n.forEach(r=>Hn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))hr.test(n)?e.setProperty(t,n.replace(hr,""),"important"):e.setProperty(t,n);else{const r=mu(e,t);hr.test(n)?e.setProperty(an(r),n.replace(hr,""),"important"):e[r]=n}}const pi=["Webkit","Moz","ms"],zo={};function mu(e,t){const n=zo[t];if(n)return n;let r=st(t);if(r!=="filter"&&r in e)return zo[t]=r;r=Yr(r);for(let o=0;o<pi.length;o++){const s=pi[o]+r;if(s in e)return zo[t]=s}return t}function gu(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&De(r)&&n===r}const fi="http://www.w3.org/1999/xlink";function mi(e,t,n,r,o,s=Cc(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(fi,t.slice(6,t.length)):e.setAttributeNS(fi,t,n):n==null||s&&!ca(n)?e.removeAttribute(t):e.setAttribute(t,s?"":yt(n)?String(n):n)}function gi(e,t,n,r,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?xl(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const i=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(i!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=ca(n):n==null&&i==="string"?(n="",a=!0):i==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(o||t)}function zn(e,t,n,r){e.addEventListener(t,n,r)}function bu(e,t,n,r){e.removeEventListener(t,n,r)}const bi=Symbol("_vei");function hu(e,t,n,r,o=null){const s=e[bi]||(e[bi]={}),a=s[t];if(r&&a)a.value=r;else{const[i,c]=yu(t);if(r){const p=s[t]=zu(r,o);zn(e,i,p,c)}else a&&(bu(e,i,a,c),s[t]=void 0)}}const xu=/(Once|Passive|Capture)$/,vu=/^on:?(?:Once|Passive|Capture)$/;function yu(e){let t,n;for(;(n=e.match(xu))&&!vu.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):an(e.slice(2)),t]}let _o=0;const wu=Promise.resolve(),ku=()=>_o||(wu.then(()=>_o=0),_o=Date.now());function zu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const o=n.value;if(se(o)){const s=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{s.call(r),r._stopped=!0};const a=o.slice(),i=[r];for(let c=0;c<a.length&&!r._stopped;c++){const p=a[c];p&&bt(p,t,5,i)}}else bt(o,t,5,[r])};return n.value=e,n.attached=ku(),n}const hi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,_u=(e,t,n,r,o,s)=>{const a=o==="svg";t==="class"?du(e,r,a):t==="style"?fu(e,n,r):Wr(t)?Kr(t)||hu(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cu(e,t,r,a))?(gi(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&mi(e,t,r,a,s,t!=="value")):e._isVueCE&&(Su(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!De(r)))?gi(e,st(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),mi(e,t,r,a))};function Cu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&hi(t)&&ue(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return hi(t)&&De(n)?!1:t in e}function Su(e,t){const n=e._def.props;if(!n)return!1;const r=st(t);return Array.isArray(n)?n.some(o=>st(o)===r):Object.keys(n).some(o=>st(o)===r)}const zl=new WeakMap,_l=new WeakMap,Nr=Symbol("_moveCb"),xi=Symbol("_enterCb"),Yo=new WeakMap,Au=e=>(delete e.props.mode,e),Iu=Au({name:"TransitionGroup",props:Ne({},yl,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ao(),r=Va();let o,s,a,i;const c=()=>(i===void 0&&(i=o.length>0&&Lu(o[0].el,n.vnode.el,vi(e))),i);return Ha(()=>{if(Yo.delete(n),!c()){o=[],a=void 0;return}const p=vi(e);o.forEach(Mu);const u=a&&Fu(a,n.vnode.el);a=void 0,o.forEach(g=>Tu(g,u));const d=o.filter($u);Xo(n.vnode.el),d.forEach(g=>{const m=g.el,C=m.style;At(m,p),C.transform=C.webkitTransform=C.transitionDuration="";const w=m[Nr]=A=>{A&&A.target!==m||(!A||A.propertyName.endsWith("transform"))&&(m.removeEventListener("transitionend",w),m[Nr]=null,Zt(m,p))};m.addEventListener("transitionend",w)}),o=[]}),()=>{const p=ze(e),u=wl(p);let d=p.tag||ae;if(o=[],i=void 0,s)for(let g=0;g<s.length;g++){const m=s[g];m.el&&m.el instanceof Element&&!m.el[As]&&(o.push(m),on(m,nr(m,u,r,n)),zl.set(m,co(m.el)))}s=t.default?ks(t.default()):[];for(let g=0;g<s.length;g++){const m=s[g];m.key!=null&&on(m,nr(m,u,r,n))}return o.length&&(a=Eu(n),Yo.set(n,c)),v(d,null,s)}}}),Ru=Iu;function Mu(e){const t=e.el;t[Nr]&&t[Nr](),t[xi]&&t[xi]()}function vi(e){return e.moveClass||`${e.name||"v"}-move`}function Tu(e,t){_l.set(e,co(e.el,t))}function $u(e){const t=zl.get(e),n=_l.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const s=e.el,a=s.style,i=s.getBoundingClientRect();let c=1,p=1;return s.offsetWidth&&(c=i.width/s.offsetWidth),s.offsetHeight&&(p=i.height/s.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(p)||p===0)&&(p=1),Math.abs(c-1)<.01&&(c=1),Math.abs(p-1)<.01&&(p=1),a.transform=a.webkitTransform=`translate(${r/c}px,${o/p}px)`,a.transitionDuration="0s",e}}function co(e,t){const n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function Eu(e){let t;for(let n=e.parent;n;n=n.parent){const r=Yo.get(n);if(r){const o=Pu(n.vnode.el,e.vnode.el);o&&(t||(t=[])).push(Ne(co(o),{item:o,willMove:r}))}}return t}function Pu(e,t){const n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function Fu(e,t){const n=e.find(r=>r.willMove()&&r.item.contains(t));return n&&co(n.item,n)}function Lu(e,t,n){const r=e.cloneNode(),o=e[Tn];o&&o.forEach(i=>{i.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(i=>i&&r.classList.add(i)),r.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(r);const{hasTransform:a}=kl(r);return s.removeChild(r),a}const yi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return se(t)?n=>_r(t,n):t};function Ou(e){e.target.composing=!0}function wi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const xr=Symbol("_assign"),vr=Symbol("_initialValue");function Co(e,t,n){return t&&(e=e.trim()),n&&(e=ps(e)),e}const Is={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e.parentNode&&(e.type==="text"?e[vr]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[vr]=e.defaultValue.replace(/\r\n?/g,`
`))),e[xr]=yi(o);const s=r||o.props&&o.props.type==="number";zn(e,t?"change":"input",a=>{a.target.composing||e[xr](Co(e.value,n,s))}),(n||s)&&zn(e,"change",()=>{e.value=Co(e.value,n,s)}),t||(zn(e,"compositionstart",Ou),zn(e,"compositionend",wi),zn(e,"change",wi))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const o=t??"",s=e[vr];delete e[vr],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[xr](Co(e.value,n,r)):e.value=o},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:o,number:s}},a){if(e[xr]=yi(a),e.composing)return;const i=(s||e.type==="number")&&!/^0\d/.test(e.value)?ps(e.value):e.value,c=t??"";if(i===c)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(r&&t===n||o&&e.value.trim()===c)||(e.value=c)}},Vu=["ctrl","shift","alt","meta"],Du={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Vu.some(n=>e[`${n}Key`]&&!t.includes(n))},$n=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((o,...s)=>{for(let a=0;a<t.length;a++){const i=Du[t[a]];if(i&&i(o,t))return}return e(o,...s)}))},ju={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ki=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(o=>{if(!("key"in o))return;const s=an(o.key);if(t.some(a=>a===s||ju[a]===s))return e(o)}))},Bu=Ne({patchProp:_u},iu);let zi;function Nu(){return zi||(zi=jd(Bu))}const Uu=((...e)=>{const t=Nu().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=Gu(r);if(!o)return;const s=t._component;!ue(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=n(o,!1,Hu(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t});function Hu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Gu(e){return De(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:r,iconNode:o,name:s,class:a,...i},{slots:c})=>Mn("svg",{...yr,width:e||yr.width,height:e||yr.height,stroke:r||yr.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${qu(s??"icon")}`],...i},[...o.map(p=>Mn(...p)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=(e,t)=>(n,{slots:r})=>Mn(Wu,{...n,iconNode:t,name:e},r);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=ie("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=ie("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=ie("ArrowUpIcon",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=ie("AtSignIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=ie("BellIcon",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=ie("BookmarkIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=ie("BotIcon",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=ie("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=ie("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=ie("ChevronsLeftRightIcon",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=ie("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=ie("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=ie("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=ie("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=ie("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=ie("CompassIcon",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=ie("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=ie("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=ie("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=ie("EyeOffIcon",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=ie("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=ie("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=ie("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=ie("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=ie("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=ie("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=ie("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=ie("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=ie("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=ie("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=ie("PaperclipIcon",[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=ie("PinIcon",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=ie("RepeatIcon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=ie("RocketIcon",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=ie("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=ie("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=ie("SettingsIcon",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=ie("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=ie("SlidersVerticalIcon",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=ie("SmilePlusIcon",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=ie("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=ie("SquareIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=ie("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=ie("TagIcon",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=ie("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=ie("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=ie("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=ie("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=ie("WrenchIcon",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=ie("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=ie("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),bp=ce({__name:"ThemeToggle",setup(e){const t=N(!0);function n(){t.value=!t.value,t.value?(document.documentElement.classList.add("dark"),localStorage.setItem("aura-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("aura-theme","light"))}return lt(()=>{const r=localStorage.getItem("aura-theme");r?t.value=r==="dark":t.value=window.matchMedia("(prefers-color-scheme: dark)").matches,t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),(r,o)=>(h(),_("button",{type:"button",class:"relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"切换亮色 / 暗色模式",onClick:n},[t.value?(h(),he(I(fp),{key:0,class:"h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400"})):(h(),he(I(rp),{key:1,class:"h-4 w-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-indigo-600"}))]))}}),ts=[{id:"forms-inputs",name:"表单与高阶输入套件",englishName:"Forms & Advanced Inputs",description:"Figma 拖拽数值微调、实时密码学强度仪表盘、金融级自适应金额与智能体 @ 呼出输入框",badgeColor:"text-amber-500 bg-amber-500/10 border-amber-500/20",iconName:"Sliders"},{id:"tactile-actions",name:"触觉反馈与原子操作套件",englishName:"Tactile & Actions Suite",description:"长按蓄力物理确认、原地渐变二次确认、物理微压与矢量形变操作矩阵",badgeColor:"text-rose-500 bg-rose-500/10 border-rose-500/20",iconName:"Zap"},{id:"ai-native",name:"AI 原生与智能体套件",englishName:"AI & Agent Suite",description:"面向大模型工作流、思考链路、代码终端与指令交互的原生动效矩阵",badgeColor:"text-sky-500 bg-sky-500/10 border-sky-500/20",iconName:"Bot"},{id:"interactive-nav",name:"交互与高阶导航套件",englishName:"Interactive & Navigation",description:"以余弦物理、流体胶囊指示器与视口裁切驱动的极佳手感交互",badgeColor:"text-blue-500 bg-blue-500/10 border-blue-500/20",iconName:"Compass"},{id:"space-3d",name:"空间与 3D 纵深套件",englishName:"3D Space & Atmosphere",description:"同心公转轨道、赛博网格、极光破晓天灯与粒子微光氛围",badgeColor:"text-indigo-500 bg-indigo-500/10 border-indigo-500/20",iconName:"Globe"},{id:"borders-cards",name:"流光卡片与微光边框套件",englishName:"Borders & Bento Cards",description:"沿着圆角边框流动的渐变光束与多维信息科技网格便当盒",badgeColor:"text-purple-500 bg-purple-500/10 border-purple-500/20",iconName:"Layers"},{id:"kinetic-typography",name:"文字与动态排版套件",englishName:"Kinetic Typography",description:"连续金属扫光、平滑毫秒数值翻滚与无限无缝平滑跑马灯",badgeColor:"text-emerald-500 bg-emerald-500/10 border-emerald-500/20",iconName:"Sparkles"}],en=[{id:"border-beam",name:"BorderBeam",title:"Border Beam（跑马流光渐变边框）",category:"Effect",suiteId:"borders-cards",description:"沿着容器圆角边框匀速流动的彩色流光光束。大模型生成状态、VIP 特权卡片、核心功能高亮的科技感标配。",componentFilename:"BorderBeam.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"modelValue",type:"string",default:"''",description:"输入框绑定的文本内容"},{name:"placeholder",type:"string",default:"'输入内容，键入 @ 可呼出团队成员或智能体...'",description:"输入提示"},{name:"users",type:"MentionUser[]",default:"[...]",description:"可 @ 的成员/智能体列表"}]}],hp={class:"sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80 transition-colors"},xp={class:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"},vp={class:"flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md shadow-blue-500/20 text-white transition-transform duration-300 group-hover:scale-105"},yp={class:"hidden md:flex items-center gap-6 text-sm font-medium"},wp={class:"flex items-center gap-3"},kp={href:"https://github.com",target:"_blank",rel:"noopener noreferrer",class:"flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"GitHub 仓库"},zp=ce({__name:"Header",setup(e){return(t,n)=>{const r=ur("router-link");return h(),_("header",hp,[l("div",xp,[v(r,{to:"/",class:"flex items-center gap-2.5 group"},{default:Z(()=>[l("div",vp,[v(I(Fe),{class:"h-5 w-5"})]),n[0]||(n[0]=l("div",{class:"flex flex-col"},[l("div",{class:"flex items-center gap-1.5"},[l("span",{class:"text-lg font-black tracking-tight text-zinc-900 dark:text-white"},[Ve(" Aura"),l("span",{class:"text-blue-600 dark:text-blue-400"},"UI")]),l("span",{class:"rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300"}," Vue 3.5 ")]),l("span",{class:"text-[10px] text-zinc-400"},"动效原子代码库")],-1))]),_:1}),l("nav",yp,[v(r,{to:"/",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:Z(()=>[...n[1]||(n[1]=[Ve(" 官网首页 ",-1)])]),_:1}),v(r,{to:"/docs/border-beam",class:"inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:Z(()=>[v(I(hn),{class:"h-4 w-4"}),l("span",null,"组件库 ("+V(I(en).length)+")",1)]),_:1}),n[2]||(n[2]=l("a",{href:"#features",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}," 核心特性 ",-1))]),l("div",wp,[v(bp),l("a",kp,[v(I(ep),{class:"h-4 w-4"})]),v(r,{to:"/docs/border-beam",class:"hidden sm:inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"},{default:Z(()=>[...n[3]||(n[3]=[Ve(" 浏览代码 ",-1)])]),_:1})])])])}}}),_p={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50 transition-colors"},Cp={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Sp={class:"flex flex-col md:flex-row items-center justify-between gap-6"},Ap={class:"flex items-center gap-3"},Ip={class:"flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"},Rp={class:"flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"},Mp={class:"inline-flex items-center gap-1"},Tp=ce({__name:"Footer",setup(e){return(t,n)=>(h(),_("footer",_p,[l("div",Cp,[l("div",Sp,[l("div",Ap,[l("div",Ip,[v(I(Fe),{class:"h-4 w-4"})]),n[0]||(n[0]=l("div",null,[l("p",{class:"text-sm font-bold text-zinc-900 dark:text-zinc-100"}," Aura UI (Vue 3) "),l("p",{class:"text-xs text-zinc-500 dark:text-zinc-400"}," 对标 Magic UI / Aceternity UI，属于 Vue 3 的动效原子代码库 ")],-1))]),l("div",Rp,[n[3]||(n[3]=l("span",null,"采用 MIT 协议开源，完全支持 Copy & Paste 即用",-1)),n[4]||(n[4]=l("span",null,"•",-1)),l("span",Mp,[n[1]||(n[1]=Ve(" Built with ",-1)),v(I(tp),{class:"h-3 w-3 text-red-500 fill-red-500"}),n[2]||(n[2]=Ve(" for Vue 3 ecosystem ",-1))])])])])]))}}),$p={class:"min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-200"},Ep={class:"flex-1"},Pp=ce({__name:"App",setup(e){return(t,n)=>{const r=ur("router-view");return h(),_("div",$p,[v(zp),l("div",Ep,[v(r)]),v(Tp)])}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const _n=typeof document<"u";function Pl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Fp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Pl(e.default)}const Ce=Object.assign;function So(e,t){const n={};for(const r in t){const o=t[r];n[r]=wt(o)?o.map(e):e(o)}return n}const Yn=()=>{},wt=Array.isArray;function Ri(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Fl=/#/g,Lp=/&/g,Op=/\//g,Vp=/=/g,Dp=/\?/g,Ll=/\+/g,jp=/%5B/g,Bp=/%5D/g,Ol=/%5E/g,Np=/%60/g,Vl=/%7B/g,Up=/%7C/g,Dl=/%7D/g,Hp=/%20/g;function Ts(e){return e==null?"":encodeURI(""+e).replace(Up,"|").replace(jp,"[").replace(Bp,"]")}function Gp(e){return Ts(e).replace(Vl,"{").replace(Dl,"}").replace(Ol,"^")}function ns(e){return Ts(e).replace(Ll,"%2B").replace(Hp,"+").replace(Fl,"%23").replace(Lp,"%26").replace(Np,"`").replace(Vl,"{").replace(Dl,"}").replace(Ol,"^")}function qp(e){return ns(e).replace(Vp,"%3D")}function Wp(e){return Ts(e).replace(Fl,"%23").replace(Dp,"%3F")}function Kp(e){return Wp(e).replace(Op,"%2F")}function lr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Xp=/\/$/,Yp=e=>e.replace(Xp,"");function Ao(e,t,n="/"){let r,o={},s="",a="";const i=t.indexOf("#");let c=t.indexOf("?");return c=i>=0&&c>i?-1:c,c>=0&&(r=t.slice(0,c),s=t.slice(c,i>0?i:t.length),o=e(s.slice(1))),i>=0&&(r=r||t.slice(0,i),a=t.slice(i,t.length)),r=e0(r??t,n),{fullPath:r+s+a,path:r,query:o,hash:lr(a)}}function Zp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Mi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Jp(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&En(t.matched[r],n.matched[o])&&jl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function En(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function jl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Qp(e[n],t[n]))return!1;return!0}function Qp(e,t){return wt(e)?Ti(e,t):wt(t)?Ti(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Ti(e,t){return wt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function e0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,a,i;for(a=0;a<r.length;a++)if(i=r[a],i!==".")if(i==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a).join("/")}const Xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let rs=(function(e){return e.pop="pop",e.push="push",e})({}),Io=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function t0(e){if(!e)if(_n){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Yp(e)}const n0=/^[^#]+#/;function r0(e,t){return e.replace(n0,"#")+t}function o0(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const uo=()=>({left:window.scrollX,top:window.scrollY});function s0(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=o0(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function $i(e,t){return(history.state?history.state.position-t:-1)+e}const os=new Map;function i0(e,t){os.set(e,t)}function a0(e){const t=os.get(e);return os.delete(e),t}function l0(e){return typeof e=="string"||e&&typeof e=="object"}function Bl(e){return typeof e=="string"||typeof e=="symbol"}let Be=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Nl=Symbol("");Be.MATCHER_NOT_FOUND+"",Be.NAVIGATION_GUARD_REDIRECT+"",Be.NAVIGATION_ABORTED+"",Be.NAVIGATION_CANCELLED+"",Be.NAVIGATION_DUPLICATED+"";function Pn(e,t){return Ce(new Error,{type:e,[Nl]:!0},t)}function Vt(e,t){return e instanceof Error&&Nl in e&&(t==null||!!(e.type&t))}const c0=["params","query","hash"];function d0(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of c0)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function u0(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const o=n[r].replace(Ll," "),s=o.indexOf("="),a=lr(s<0?o:o.slice(0,s)),i=s<0?null:lr(o.slice(s+1));if(a in t){let c=t[a];wt(c)||(c=t[a]=[c]),c.push(i)}else t[a]=i}return t}function Ei(e){let t="";for(let n in e){const r=e[n];if(n=qp(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(wt(r)?r.map(o=>o&&ns(o)):[r&&ns(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function p0(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=wt(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const f0=Symbol(""),Pi=Symbol(""),$s=Symbol(""),Es=Symbol(""),ss=Symbol("");function jn(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Qt(e,t,n,r,o,s=a=>a()){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((i,c)=>{const p=g=>{g===!1?c(Pn(Be.NAVIGATION_ABORTED,{from:n,to:t})):g instanceof Error?c(g):l0(g)?c(Pn(Be.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(a&&r.enterCallbacks[o]===a&&typeof g=="function"&&a.push(g),i())},u=s(()=>e.call(r&&r.instances[o],t,n,p));let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(g=>c(g))})}function Ro(e,t,n,r,o=s=>s()){const s=[];for(const a of e)for(const i in a.components){let c=a.components[i];if(!(t!=="beforeRouteEnter"&&!a.instances[i]))if(Pl(c)){const p=(c.__vccOpts||c)[t];p&&s.push(Qt(p,n,r,a,i,o))}else{let p=c();s.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${i}" at "${a.path}"`);const d=Fp(u)?u.default:u;a.mods[i]=u,a.components[i]=d;const g=(d.__vccOpts||d)[t];return g&&Qt(g,n,r,a,i,o)()}))}}return s}function m0(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const i=t.matched[a];i&&(e.matched.find(p=>En(p,i))?r.push(i):n.push(i));const c=e.matched[a];c&&(t.matched.find(p=>En(p,c))||o.push(c))}return[n,r,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let g0=()=>location.protocol+"//"+location.host;function Ul(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let a=o.includes(e.slice(s))?e.slice(s).length:1,i=o.slice(a);return i[0]!=="/"&&(i="/"+i),Mi(i,"")}return Mi(n,e)+r+o}function b0(e,t,n,r){let o=[],s=[],a=null;const i=({state:g})=>{const m=Ul(e,location),C=n.value,w=t.value;let A=0;if(g){if(n.value=m,t.value=g,a&&a===C){a=null;return}A=w?g.position-w.position:0}else r(m);o.forEach(R=>{R(n.value,C,{delta:A,type:rs.pop,direction:A?A>0?Io.forward:Io.back:Io.unknown})})};function c(){a=n.value}function p(g){o.push(g);const m=()=>{const C=o.indexOf(g);C>-1&&o.splice(C,1)};return s.push(m),m}function u(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Ce({},g.state,{scroll:uo()}),"")}}function d(){for(const g of s)g();s=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:p,destroy:d}}function Fi(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?uo():null}}function h0(e){const{history:t,location:n}=window,r={value:Ul(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,p,u){const d=e.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:g0()+e+c;try{t[u?"replaceState":"pushState"](p,"",g),o.value=p}catch(m){console.error(m),n[u?"replace":"assign"](g)}}function a(c,p){s(c,Ce({},t.state,Fi(o.value.back,c,o.value.forward,!0),p,{position:o.value.position}),!0),r.value=c}function i(c,p){const u=Ce({},o.value,t.state,{forward:c,scroll:uo()});s(u.current,u,!0),s(c,Ce({},Fi(r.value,c,null),{position:u.position+1},p),!1),r.value=c}return{location:r,state:o,push:i,replace:a}}function x0(e){e=t0(e);const t=h0(e),n=b0(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const o=Ce({location:"",base:e,go:r,createHref:r0.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let xn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ge=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ge||{});const v0={type:xn.Static,value:""},y0=/[a-zA-Z0-9_]/;function w0(e){if(!e)return[[]];if(e==="/")return[[v0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${p}": ${m}`)}let n=Ge.Static,r=n;const o=[];let s;function a(){s&&o.push(s),s=[]}let i=0,c,p="",u="";function d(){p&&(n===Ge.Static?s.push({type:xn.Static,value:p}):n===Ge.Param||n===Ge.ParamRegExp||n===Ge.ParamRegExpEnd?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),s.push({type:xn.Param,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function g(){p+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&n!==Ge.ParamRegExp){r=n,n=Ge.EscapeNext;continue}switch(n){case Ge.Static:c==="/"?(p&&d(),a()):c===":"?(d(),n=Ge.Param):g();break;case Ge.EscapeNext:g(),n=r;break;case Ge.Param:c==="("?n=Ge.ParamRegExp:y0.test(c)?g():(d(),n=Ge.Static,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case Ge.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=Ge.ParamRegExpEnd:u+=c;break;case Ge.ParamRegExpEnd:d(),n=Ge.Static,c!=="*"&&c!=="?"&&c!=="+"&&i--,u="";break;default:t("Unknown state");break}}return n===Ge.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),d(),a(),o}const Li="[^/]+?",k0={sensitive:!1,strict:!1,start:!0,end:!0};var rt=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(rt||{});const z0=/[.+*?^${}()[\]/\\]/g;function _0(e,t){const n=Ce({},k0,t),r=[];let o=n.start?"^":"";const s=[];for(const p of e){const u=p.length?[]:[rt.Root];n.strict&&!p.length&&(o+="/");for(let d=0;d<p.length;d++){const g=p[d];let m=rt.Segment+(n.sensitive?rt.BonusCaseSensitive:0);if(g.type===xn.Static)d||(o+="/"),o+=g.value.replace(z0,"\\$&"),m+=rt.Static;else if(g.type===xn.Param){const{value:C,repeatable:w,optional:A,regexp:R}=g;s.push({name:C,repeatable:w,optional:A});const b=R||Li;if(b!==Li){m+=rt.BonusCustomRegExp;try{`${b}`}catch(z){throw new Error(`Invalid custom RegExp for param "${C}" (${b}): `+z.message)}}let k=w?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(k=A&&p.length<2?`(?:/${k})`:"/"+k),A&&(k+="?"),o+=k,m+=rt.Dynamic,A&&(m+=rt.BonusOptional),w&&(m+=rt.BonusRepeatable),b===".*"&&(m+=rt.BonusWildcard)}u.push(m)}r.push(u)}if(n.strict&&n.end){const p=r.length-1;r[p][r[p].length-1]+=rt.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function i(p){const u=p.match(a),d={};if(!u)return null;for(let g=1;g<u.length;g++){const m=u[g]||"",C=s[g-1];d[C.name]=m&&C.repeatable?m.split("/"):m}return d}function c(p){let u="",d=!1;for(const g of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of g)if(m.type===xn.Static)u+=m.value;else if(m.type===xn.Param){const{value:C,repeatable:w,optional:A}=m,R=C in p?p[C]:"";if(wt(R)&&!w)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const b=wt(R)?R.join("/"):R;if(!b)if(A)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);u+=b}}return u||"/"}return{re:a,score:r,keys:s,parse:i,stringify:c}}function C0(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===rt.Static+rt.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===rt.Static+rt.Segment?1:-1:0}function Hl(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=C0(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(Oi(r))return 1;if(Oi(o))return-1}return o.length-r.length}function Oi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const S0={strict:!1,end:!0,sensitive:!1};function A0(e,t,n){const r=_0(w0(e.path),n),o=Ce(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function I0(e,t){const n=[],r=new Map;t=Ri(S0,t);function o(d){return r.get(d)}function s(d,g,m){const C=!m,w=Di(d);w.aliasOf=m&&m.record;const A=Ri(t,d),R=[w];if("alias"in d){const z=typeof d.alias=="string"?[d.alias]:d.alias;for(const $ of z)R.push(Di(Ce({},w,{components:m?m.record.components:w.components,path:$,aliasOf:m?m.record:w})))}let b,k;for(const z of R){const{path:$}=z;if(g&&$[0]!=="/"){const F=g.record.path,U=F[F.length-1]==="/"?"":"/";z.path=g.record.path+($&&U+$)}if(b=A0(z,g,A),m?m.alias.push(b):(k=k||b,k!==b&&k.alias.push(b),C&&d.name&&!ji(b)&&a(d.name)),Gl(b)&&c(b),w.children){const F=w.children;for(let U=0;U<F.length;U++)s(F[U],b,m&&m.children[U])}m=m||b}return k?()=>{a(k)}:Yn}function a(d){if(Bl(d)){const g=r.get(d);g&&(r.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return n}function c(d){const g=T0(d,n);n.splice(g,0,d),d.record.name&&!ji(d)&&r.set(d.record.name,d)}function p(d,g){let m,C={},w,A;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw Pn(Be.MATCHER_NOT_FOUND,{location:d});A=m.record.name,C=Ce(Vi(g.params,m.keys.filter(k=>!k.optional).concat(m.parent?m.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),d.params&&Vi(d.params,m.keys.map(k=>k.name))),w=m.stringify(C)}else if(d.path!=null)w=d.path,m=n.find(k=>k.re.test(w)),m&&(C=m.parse(w),A=m.record.name);else{if(m=g.name?r.get(g.name):n.find(k=>k.re.test(g.path)),!m)throw Pn(Be.MATCHER_NOT_FOUND,{location:d,currentLocation:g});A=m.record.name,C=Ce({},g.params,d.params),w=m.stringify(C)}const R=[];let b=m;for(;b;)R.unshift(b.record),b=b.parent;return{name:A,path:w,params:C,matched:R,meta:M0(R)}}e.forEach(d=>s(d));function u(){n.length=0,r.clear()}return{addRoute:s,resolve:p,removeRoute:a,clearRoutes:u,getRoutes:i,getRecordMatcher:o}}function Vi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Di(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:R0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function R0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ji(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function M0(e){return e.reduce((t,n)=>Ce(t,n.meta),{})}function T0(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;Hl(e,t[s])<0?r=s:n=s+1}const o=$0(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function $0(e){let t=e;for(;t=t.parent;)if(Gl(t)&&Hl(e,t)===0)return t}function Gl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Bi(e){const t=Et($s),n=Et(Es),r=ge(()=>{const c=I(e.to);return t.resolve(c)}),o=ge(()=>{const{matched:c}=r.value,{length:p}=c,u=c[p-1],d=n.matched;if(!u||!d.length)return-1;const g=d.findIndex(En.bind(null,u));if(g>-1)return g;const m=Ni(c[p-2]);return p>1&&Ni(u)===m&&d[d.length-1].path!==m?d.findIndex(En.bind(null,c[p-2])):g}),s=ge(()=>o.value>-1&&O0(n.params,r.value.params)),a=ge(()=>o.value>-1&&o.value===n.matched.length-1&&jl(n.params,r.value.params));function i(c={}){if(L0(c)){const p=t[I(e.replace)?"replace":"push"](I(e.to)).catch(Yn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:r,href:ge(()=>r.value.href),isActive:s,isExactActive:a,navigate:i}}function E0(e){return e.length===1?e[0]:e}const P0=ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Bi,setup(e,{slots:t}){const n=eo(Bi(e)),{options:r}=Et($s),o=ge(()=>({[Ui(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ui(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&E0(t.default(n));return e.custom?s:Mn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),F0=P0;function L0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function O0(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!wt(o)||o.length!==r.length||r.some((s,a)=>s.valueOf()!==o[a].valueOf()))return!1}return!0}function Ni(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ui=(e,t,n)=>e??t??n,V0=ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Et(ss),o=ge(()=>e.route||r.value),s=Et(Pi,0),a=ge(()=>{let p=I(s);const{matched:u}=o.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),i=ge(()=>o.value.matched[a.value]);Cr(Pi,ge(()=>a.value+1)),Cr(f0,i),Cr(ss,o);const c=N();return vt(()=>[c.value,i.value,e.name],([p,u,d],[g,m,C])=>{u&&(u.instances[d]=p,m&&m!==u&&p&&p===g&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),p&&u&&(!m||!En(u,m)||!g)&&(u.enterCallbacks[d]||[]).forEach(w=>w(p))},{flush:"post"}),()=>{const p=o.value,u=e.name,d=i.value,g=d&&d.components[u];if(!g)return Hi(n.default,{Component:g,route:p});const m=d.props[u],C=m?m===!0?p.params:typeof m=="function"?m(p):m:null,A=Mn(g,Ce({},C,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Hi(n.default,{Component:A,route:p})||A}}});function Hi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const D0=V0;function j0(e){const t=I0(e.routes,e),n=e.parseQuery||u0,r=e.stringifyQuery||Ei,o=e.history,s=jn(),a=jn(),i=jn(),c=Wc(Xt);let p=Xt;_n&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=So.bind(null,E=>""+E),d=So.bind(null,Kp),g=So.bind(null,lr);function m(E,y){let H,D;return Bl(E)?(H=t.getRecordMatcher(E),D=y):D=E,t.addRoute(D,H)}function C(E){const y=t.getRecordMatcher(E);y&&t.removeRoute(y)}function w(){return t.getRoutes().map(E=>E.record)}function A(E){return!!t.getRecordMatcher(E)}function R(E,y){if(y=Ce({},y||c.value),typeof E=="string"){const M=Ao(n,E,y.path),P=t.resolve({path:M.path},y),j=o.createHref(M.fullPath);return Ce(M,P,{params:g(P.params),hash:lr(M.hash),redirectedFrom:void 0,href:j})}let H;if(E.path!=null)H=Ce({},E,{path:Ao(n,E.path,y.path).path});else{const M=Ce({},E.params);for(const P in M)M[P]==null&&delete M[P];H=Ce({},E,{params:d(M)}),y.params=d(y.params)}const D=t.resolve(H,y),f=E.hash||"";D.params=u(g(D.params));const x=Zp(r,Ce({},E,{hash:Gp(f),path:D.path})),S=o.createHref(x);return Ce({fullPath:x,hash:f,query:r===Ei?p0(E.query):E.query||{}},D,{redirectedFrom:void 0,href:S})}function b(E){return typeof E=="string"?Ao(n,E,c.value.path):Ce({},E)}function k(E,y){if(p!==E)return Pn(Be.NAVIGATION_CANCELLED,{from:y,to:E})}function z(E){return U(E)}function $(E){return z(Ce(b(E),{replace:!0}))}function F(E,y){const H=E.matched[E.matched.length-1];if(H&&H.redirect){const{redirect:D}=H;let f=typeof D=="function"?D(E,y):D;return typeof f=="string"&&(f=f.includes("?")||f.includes("#")?f=b(f):{path:f},f.params={}),Ce({query:E.query,hash:E.hash,params:f.path!=null?{}:E.params},f)}}function U(E,y){const H=p=R(E),D=c.value,f=E.state,x=E.force,S=E.replace===!0,M=F(H,D);if(M)return U(Ce(b(M),{state:typeof M=="object"?Ce({},f,M.state):f,force:x,replace:S}),y||H);const P=H;P.redirectedFrom=y;let j;return!x&&Jp(r,D,H)&&(j=Pn(Be.NAVIGATION_DUPLICATED,{to:P,from:D}),je(D,D,!0,!1)),(j?Promise.resolve(j):ee(P,D)).catch(G=>Vt(G)?Vt(G,Be.NAVIGATION_GUARD_REDIRECT)?G:Y(G):te(G,P,D)).then(G=>{if(G){if(Vt(G,Be.NAVIGATION_GUARD_REDIRECT))return U(Ce({replace:S},b(G.to),{state:typeof G.to=="object"?Ce({},f,G.to.state):f,force:x}),y||P)}else G=q(P,D,!0,S,f);return oe(P,D,G),G})}function L(E,y){const H=k(E,y);return H?Promise.reject(H):Promise.resolve()}function O(E){const y=Oe.values().next().value;return y&&typeof y.runWithContext=="function"?y.runWithContext(E):E()}function ee(E,y){let H;const[D,f,x]=m0(E,y);H=Ro(D.reverse(),"beforeRouteLeave",E,y);for(const M of D)M.leaveGuards.forEach(P=>{H.push(Qt(P,E,y))});const S=L.bind(null,E,y);return H.push(S),ve(H).then(()=>{H=[];for(const M of s.list())H.push(Qt(M,E,y));return H.push(S),ve(H)}).then(()=>{H=Ro(f,"beforeRouteUpdate",E,y);for(const M of f)M.updateGuards.forEach(P=>{H.push(Qt(P,E,y))});return H.push(S),ve(H)}).then(()=>{H=[];for(const M of x)if(M.beforeEnter)if(wt(M.beforeEnter))for(const P of M.beforeEnter)H.push(Qt(P,E,y));else H.push(Qt(M.beforeEnter,E,y));return H.push(S),ve(H)}).then(()=>(E.matched.forEach(M=>M.enterCallbacks={}),H=Ro(x,"beforeRouteEnter",E,y,O),H.push(S),ve(H))).then(()=>{H=[];for(const M of a.list())H.push(Qt(M,E,y));return H.push(S),ve(H)}).catch(M=>Vt(M,Be.NAVIGATION_CANCELLED)?M:Promise.reject(M))}function oe(E,y,H){i.list().forEach(D=>O(()=>D(E,y,H)))}function q(E,y,H,D,f){const x=k(E,y);if(x)return x;const S=y===Xt,M=_n?history.state:{};H&&(D||S?o.replace(E.fullPath,Ce({scroll:S&&M&&M.scroll},f)):o.push(E.fullPath,f)),c.value=E,je(E,y,H,S),Y()}let pe;function Ae(){pe||(pe=o.listen((E,y,H)=>{if(!we.listening)return;const D=R(E),f=F(D,we.currentRoute.value);if(f){U(Ce(f,{replace:!0,force:!0}),D).catch(Yn);return}p=D;const x=c.value;_n&&i0($i(x.fullPath,H.delta),uo()),ee(D,x).catch(S=>Vt(S,Be.NAVIGATION_ABORTED|Be.NAVIGATION_CANCELLED)?S:Vt(S,Be.NAVIGATION_GUARD_REDIRECT)?(U(Ce(b(S.to),{force:!0}),D).then(M=>{Vt(M,Be.NAVIGATION_ABORTED|Be.NAVIGATION_DUPLICATED)&&!H.delta&&H.type===rs.pop&&o.go(-1,!1)}).catch(Yn),Promise.reject()):(H.delta&&o.go(-H.delta,!1),te(S,D,x))).then(S=>{S=S||q(D,x,!1),S&&(H.delta&&!Vt(S,Be.NAVIGATION_CANCELLED)?o.go(-H.delta,!1):H.type===rs.pop&&Vt(S,Be.NAVIGATION_ABORTED|Be.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),oe(D,x,S)}).catch(Yn)}))}let Le=jn(),be=jn(),de;function te(E,y,H){Y(E);const D=be.list();return D.length?D.forEach(f=>f(E,y,H)):console.error(E),Promise.reject(E)}function Me(){return de&&c.value!==Xt?Promise.resolve():new Promise((E,y)=>{Le.add([E,y])})}function Y(E){return de||(de=!E,Ae(),Le.list().forEach(([y,H])=>E?H(E):y()),Le.reset()),E}function je(E,y,H,D){const{scrollBehavior:f}=e;if(!_n||!f)return Promise.resolve();const x=!H&&a0($i(E.fullPath,0))||(D||!H)&&history.state&&history.state.scroll||null;return ys().then(()=>f(E,y,x)).then(S=>S&&s0(S)).catch(S=>te(S,E,y))}const ye=E=>o.go(E);let et;const Oe=new Set,we={currentRoute:c,listening:!0,addRoute:m,removeRoute:C,clearRoutes:t.clearRoutes,hasRoute:A,getRoutes:w,resolve:R,options:e,push:z,replace:$,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:s.add,beforeResolve:a.add,afterEach:i.add,onError:be.add,isReady:Me,install(E){E.component("RouterLink",F0),E.component("RouterView",D0),E.config.globalProperties.$router=we,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>I(c)}),_n&&!et&&c.value===Xt&&(et=!0,z(o.location).catch(D=>{}));const y={};for(const D in Xt)Object.defineProperty(y,D,{get:()=>c.value[D],enumerable:!0});E.provide($s,we),E.provide(Es,Aa(y)),E.provide(ss,c);const H=E.unmount;Oe.add(E),E.unmount=function(){Oe.delete(E),Oe.size<1&&(p=Xt,pe&&pe(),pe=null,c.value=Xt,et=!1,de=!1),H()}}};function ve(E){return E.reduce((y,H)=>y.then(()=>O(H)),Promise.resolve())}return we}function B0(e){return Et(Es)}function ql(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=ql(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function N0(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=ql(e))&&(r&&(r+=" "),r+=t);return r}const U0=(e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},H0=(e,t)=>({classGroupId:e,validator:t}),Wl=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Gr="-",Gi=[],G0="arbitrary..",q0=e=>{const t=K0(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:a=>{if(a.startsWith("[")&&a.endsWith("]"))return W0(a);const i=a.split(Gr),c=i[0]===""&&i.length>1?1:0;return Kl(i,c,t)},getConflictingClassGroupIds:(a,i)=>{if(i){const c=r[a],p=n[a];return c?p?U0(p,c):c:p||Gi}return n[a]||Gi}}},Kl=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const o=e[t],s=n.nextPart.get(o);if(s){const p=Kl(e,t+1,s);if(p)return p}const a=n.validators;if(a===null)return;const i=t===0?e.join(Gr):e.slice(t).join(Gr),c=a.length;for(let p=0;p<c;p++){const u=a[p];if(u.validator(i))return u.classGroupId}},W0=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?G0+r:void 0})(),K0=e=>{const{theme:t,classGroups:n}=e;return X0(n,t)},X0=(e,t)=>{const n=Wl();for(const r in e){const o=e[r];Ps(o,n,r,t)}return n},Ps=(e,t,n,r)=>{const o=e.length;for(let s=0;s<o;s++){const a=e[s];Y0(a,t,n,r)}},Y0=(e,t,n,r)=>{if(typeof e=="string"){Z0(e,t,n);return}if(typeof e=="function"){J0(e,t,n,r);return}Q0(e,t,n,r)},Z0=(e,t,n)=>{const r=e===""?t:Xl(t,e);r.classGroupId=n},J0=(e,t,n,r)=>{if(ef(e)){Ps(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(H0(n,e))},Q0=(e,t,n,r)=>{const o=Object.entries(e),s=o.length;for(let a=0;a<s;a++){const[i,c]=o[a];Ps(c,Xl(t,i),n,r)}},Xl=(e,t)=>{let n=e;const r=t.split(Gr),o=r.length;for(let s=0;s<o;s++){const a=r[s];let i=n.nextPart.get(a);i||(i=Wl(),n.nextPart.set(a,i)),n=i}return n},ef=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,tf=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const o=(s,a)=>{n[s]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(s){let a=n[s];if(a!==void 0)return a;if((a=r[s])!==void 0)return o(s,a),a},set(s,a){s in n?n[s]=a:o(s,a)}}},is="!",qi=":",nf=[],Wi=(e,t,n,r,o)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:o}),rf=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=o=>{const s=[];let a=0,i=0,c=0,p;const u=o.length;for(let w=0;w<u;w++){const A=o[w];if(a===0&&i===0){if(A===qi){s.push(o.slice(c,w)),c=w+1;continue}if(A==="/"){p=w;continue}}A==="["?a++:A==="]"?a--:A==="("?i++:A===")"&&i--}const d=s.length===0?o:o.slice(c);let g=d,m=!1;d.endsWith(is)?(g=d.slice(0,-1),m=!0):d.startsWith(is)&&(g=d.slice(1),m=!0);const C=p&&p>c?p-c:void 0;return Wi(s,m,g,C)};if(t){const o=t+qi,s=r;r=a=>a.startsWith(o)?s(a.slice(o.length)):Wi(nf,!1,a,void 0,!0)}if(n){const o=r;r=s=>n({className:s,parseClassName:o})}return r},of=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{t.set(n,1e6+r)}),n=>{const r=[];let o=[];for(let s=0;s<n.length;s++){const a=n[s],i=a[0]==="[",c=t.has(a);i||c?(o.length>0&&(o.sort(),r.push(...o),o=[]),r.push(a)):o.push(a)}return o.length>0&&(o.sort(),r.push(...o)),r}},sf=e=>({cache:tf(e.cacheSize),parseClassName:rf(e),sortModifiers:of(e),postfixLookupClassGroupIds:af(e),...q0(e)}),af=e=>{const t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let r=0;r<n.length;r++)t[n[r]]=!0;return t},lf=/\s+/,cf=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:s,postfixLookupClassGroupIds:a}=t,i=[],c=e.trim().split(lf);let p="";for(let u=c.length-1;u>=0;u-=1){const d=c[u],{isExternal:g,modifiers:m,hasImportantModifier:C,baseClassName:w,maybePostfixModifierPosition:A}=n(d);if(g){p=d+(p.length>0?" "+p:p);continue}let R=!!A,b;if(R){const U=w.substring(0,A);b=r(U);const L=b&&a[b]?r(w):void 0;L&&L!==b&&(b=L,R=!1)}else b=r(w);if(!b){if(!R){p=d+(p.length>0?" "+p:p);continue}if(b=r(w),!b){p=d+(p.length>0?" "+p:p);continue}R=!1}const k=m.length===0?"":m.length===1?m[0]:s(m).join(":"),z=C?k+is:k,$=z+b;if(i.indexOf($)>-1)continue;i.push($);const F=o(b,R);for(let U=0;U<F.length;++U){const L=F[U];i.push(z+L)}p=d+(p.length>0?" "+p:p)}return p},df=(...e)=>{let t=0,n,r,o="";for(;t<e.length;)(n=e[t++])&&(r=Yl(n))&&(o&&(o+=" "),o+=r);return o},Yl=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Yl(e[r]))&&(n&&(n+=" "),n+=t);return n},uf=(e,...t)=>{let n,r,o,s;const a=c=>{const p=t.reduce((u,d)=>d(u),e());return n=sf(p),r=n.cache.get,o=n.cache.set,s=i,i(c)},i=c=>{const p=r(c);if(p)return p;const u=cf(c,n);return o(c,u),u};return s=a,(...c)=>s(df(...c))},pf=[],He=e=>{const t=n=>n[e]||pf;return t.isThemeGetter=!0,t.themeKey=e,t},Zl=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Jl=/^\((?:(\w[\w-]*):)?(.+)\)$/i,ff=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,mf=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,gf=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,bf=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,hf=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,xf=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Yt=e=>ff.test(e),me=e=>!!e&&!Number.isNaN(Number(e)),St=e=>!!e&&Number.isInteger(Number(e)),Mo=e=>e.endsWith("%")&&me(e.slice(0,-1)),Dt=e=>mf.test(e),Ql=()=>!0,vf=e=>gf.test(e)&&!bf.test(e),Fs=()=>!1,yf=e=>hf.test(e),wf=e=>xf.test(e),kf=e=>!J(e)&&!Q(e),zf=e=>e.startsWith("@container")&&(e[10]==="/"&&e[11]!==void 0||e[11]==="s"&&e[16]!==void 0&&e.startsWith("-size/",10)||e[11]==="n"&&e[18]!==void 0&&e.startsWith("-normal/",10)),_f=e=>cn(e,nc,Fs),J=e=>Zl.test(e),fn=e=>cn(e,rc,vf),Ki=e=>cn(e,$f,me),Cf=e=>cn(e,sc,Ql),Sf=e=>cn(e,oc,Fs),Xi=e=>cn(e,ec,Fs),Af=e=>cn(e,tc,wf),wr=e=>cn(e,ic,yf),Q=e=>Jl.test(e),Bn=e=>yn(e,rc),If=e=>yn(e,oc),Yi=e=>yn(e,ec),Rf=e=>yn(e,nc),Mf=e=>yn(e,tc),kr=e=>yn(e,ic,!0),Tf=e=>yn(e,sc,!0),cn=(e,t,n)=>{const r=Zl.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},yn=(e,t,n=!1)=>{const r=Jl.exec(e);return r?r[1]?t(r[1]):n:!1},ec=e=>e==="position"||e==="percentage",tc=e=>e==="image"||e==="url",nc=e=>e==="length"||e==="size"||e==="bg-size",rc=e=>e==="length",$f=e=>e==="number",oc=e=>e==="family-name",sc=e=>e==="number"||e==="weight",ic=e=>e==="shadow",Ef=()=>{const e=He("color"),t=He("font"),n=He("text"),r=He("font-weight"),o=He("tracking"),s=He("leading"),a=He("breakpoint"),i=He("container"),c=He("spacing"),p=He("radius"),u=He("shadow"),d=He("inset-shadow"),g=He("text-shadow"),m=He("drop-shadow"),C=He("blur"),w=He("perspective"),A=He("aspect"),R=He("ease"),b=He("animate"),k=()=>["auto","avoid","all","avoid-page","page","left","right","column"],z=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],$=()=>[...z(),Q,J],F=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto","contain","none"],L=()=>[Q,J,c],O=()=>[Yt,"full","auto",...L()],ee=()=>[St,"none","subgrid",Q,J],oe=()=>["auto",{span:["full",St,Q,J]},St,Q,J],q=()=>[St,"auto",Q,J],pe=()=>["auto","min","max","fr",Q,J],Ae=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Le=()=>["start","end","center","stretch","center-safe","end-safe"],be=()=>["auto",...L()],de=()=>[Yt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...L()],te=()=>[i,Yt,"screen","full","dvw","lvw","svw","min","max","fit",...L()],Me=()=>[Yt,"screen","full","lh","dvh","lvh","svh","min","max","fit",...L()],Y=()=>[e,Q,J],je=()=>[...z(),Yi,Xi,{position:[Q,J]}],ye=()=>["no-repeat",{repeat:["","x","y","space","round"]}],et=()=>["auto","cover","contain",Rf,_f,{size:[Q,J]}],Oe=()=>[Mo,Bn,fn],we=()=>["","none","full",p,Q,J],ve=()=>["",me,Bn,fn],E=()=>["solid","dashed","dotted","double"],y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>[me,Mo,Yi,Xi],D=()=>["","none",C,Q,J],f=()=>["none",me,Q,J],x=()=>["none",me,Q,J],S=()=>[me,Q,J],M=()=>[Yt,"full",...L()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Dt],breakpoint:[Dt],color:[Ql],container:[Dt],"drop-shadow":[Dt],ease:["in","out","in-out"],font:[kf],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Dt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Dt],shadow:[Dt],spacing:["px",me],text:[Dt],"text-shadow":[Dt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Yt,J,Q,A]}],container:["container"],"container-type":[{"@container":["","normal","size",Q,J]}],"container-named":[zf],columns:[{columns:[me,"auto",J,Q,i]}],"break-after":[{"break-after":k()}],"break-before":[{"break-before":k()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:$()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:O()}],"inset-x":[{"inset-x":O()}],"inset-y":[{"inset-y":O()}],start:[{"inset-s":O(),start:O()}],end:[{"inset-e":O(),end:O()}],"inset-bs":[{"inset-bs":O()}],"inset-be":[{"inset-be":O()}],top:[{top:O()}],right:[{right:O()}],bottom:[{bottom:O()}],left:[{left:O()}],visibility:["visible","invisible","collapse"],z:[{z:[St,"auto",Q,J]}],basis:[{basis:[Yt,"full","auto",i,...L()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[me,Yt,"auto","initial","none",J]}],grow:[{grow:["",me,Q,J]}],shrink:[{shrink:["",me,Q,J]}],order:[{order:[St,"first","last","none",Q,J]}],"grid-cols":[{"grid-cols":ee()}],"col-start-end":[{col:oe()}],"col-start":[{"col-start":q()}],"col-end":[{"col-end":q()}],"grid-rows":[{"grid-rows":ee()}],"row-start-end":[{row:oe()}],"row-start":[{"row-start":q()}],"row-end":[{"row-end":q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":pe()}],"auto-rows":[{"auto-rows":pe()}],gap:[{gap:L()}],"gap-x":[{"gap-x":L()}],"gap-y":[{"gap-y":L()}],"justify-content":[{justify:[...Ae(),"normal"]}],"justify-items":[{"justify-items":[...Le(),"normal"]}],"justify-self":[{"justify-self":["auto",...Le()]}],"align-content":[{content:["normal",...Ae()]}],"align-items":[{items:[...Le(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Le(),{baseline:["","last"]}]}],"place-content":[{"place-content":Ae()}],"place-items":[{"place-items":[...Le(),"baseline"]}],"place-self":[{"place-self":["auto",...Le()]}],p:[{p:L()}],px:[{px:L()}],py:[{py:L()}],ps:[{ps:L()}],pe:[{pe:L()}],pbs:[{pbs:L()}],pbe:[{pbe:L()}],pt:[{pt:L()}],pr:[{pr:L()}],pb:[{pb:L()}],pl:[{pl:L()}],m:[{m:be()}],mx:[{mx:be()}],my:[{my:be()}],ms:[{ms:be()}],me:[{me:be()}],mbs:[{mbs:be()}],mbe:[{mbe:be()}],mt:[{mt:be()}],mr:[{mr:be()}],mb:[{mb:be()}],ml:[{ml:be()}],"space-x":[{"space-x":L()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":L()}],"space-y-reverse":["space-y-reverse"],size:[{size:de()}],"inline-size":[{inline:["auto",...te()]}],"min-inline-size":[{"min-inline":["auto",...te()]}],"max-inline-size":[{"max-inline":["none",...te()]}],"block-size":[{block:["auto",...Me()]}],"min-block-size":[{"min-block":["auto",...Me()]}],"max-block-size":[{"max-block":["none",...Me()]}],w:[{w:[i,"screen",...de()]}],"min-w":[{"min-w":[i,"screen","none",...de()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[a]},...de()]}],h:[{h:["screen","lh",...de()]}],"min-h":[{"min-h":["screen","lh","none",...de()]}],"max-h":[{"max-h":["screen","lh","none",...de()]}],"font-size":[{text:["base",n,Bn,fn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Tf,Cf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Mo,J]}],"font-family":[{font:[If,Sf,t]}],"font-features":[{"font-features":[J]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,Q,J]}],"line-clamp":[{"line-clamp":[me,"none",Q,Ki]}],leading:[{leading:["none",s,...L()]}],"list-image":[{"list-image":["none",Q,J]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Q,J]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:Y()}],"text-color":[{text:Y()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...E(),"wavy"]}],"text-decoration-thickness":[{decoration:[me,"from-font","auto",Q,fn]}],"text-decoration-color":[{decoration:Y()}],"underline-offset":[{"underline-offset":[me,"auto",Q,J]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"tab-size":[{tab:[St,Q,J]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Q,J]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Q,J]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:je()}],"bg-repeat":[{bg:ye()}],"bg-size":[{bg:et()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},St,Q,J],radial:["",Q,J],conic:["",St,Q,J]},Mf,Af]}],"bg-color":[{bg:Y()}],"gradient-from-pos":[{from:Oe()}],"gradient-via-pos":[{via:Oe()}],"gradient-to-pos":[{to:Oe()}],"gradient-from":[{from:Y()}],"gradient-via":[{via:Y()}],"gradient-to":[{to:Y()}],rounded:[{rounded:we()}],"rounded-s":[{"rounded-s":we()}],"rounded-e":[{"rounded-e":we()}],"rounded-t":[{"rounded-t":we()}],"rounded-r":[{"rounded-r":we()}],"rounded-b":[{"rounded-b":we()}],"rounded-l":[{"rounded-l":we()}],"rounded-ss":[{"rounded-ss":we()}],"rounded-se":[{"rounded-se":we()}],"rounded-ee":[{"rounded-ee":we()}],"rounded-es":[{"rounded-es":we()}],"rounded-tl":[{"rounded-tl":we()}],"rounded-tr":[{"rounded-tr":we()}],"rounded-br":[{"rounded-br":we()}],"rounded-bl":[{"rounded-bl":we()}],"border-w":[{border:ve()}],"border-w-x":[{"border-x":ve()}],"border-w-y":[{"border-y":ve()}],"border-w-s":[{"border-s":ve()}],"border-w-e":[{"border-e":ve()}],"border-w-bs":[{"border-bs":ve()}],"border-w-be":[{"border-be":ve()}],"border-w-t":[{"border-t":ve()}],"border-w-r":[{"border-r":ve()}],"border-w-b":[{"border-b":ve()}],"border-w-l":[{"border-l":ve()}],"divide-x":[{"divide-x":ve()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ve()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...E(),"hidden","none"]}],"divide-style":[{divide:[...E(),"hidden","none"]}],"border-color":[{border:Y()}],"border-color-x":[{"border-x":Y()}],"border-color-y":[{"border-y":Y()}],"border-color-s":[{"border-s":Y()}],"border-color-e":[{"border-e":Y()}],"border-color-bs":[{"border-bs":Y()}],"border-color-be":[{"border-be":Y()}],"border-color-t":[{"border-t":Y()}],"border-color-r":[{"border-r":Y()}],"border-color-b":[{"border-b":Y()}],"border-color-l":[{"border-l":Y()}],"divide-color":[{divide:Y()}],"outline-style":[{outline:[...E(),"none","hidden"]}],"outline-offset":[{"outline-offset":[me,Q,J]}],"outline-w":[{outline:["",me,Bn,fn]}],"outline-color":[{outline:Y()}],shadow:[{shadow:["","inner","none",u,kr,wr]}],"shadow-color":[{shadow:Y()}],"inset-shadow":[{"inset-shadow":["none",d,kr,wr]}],"inset-shadow-color":[{"inset-shadow":Y()}],"ring-w":[{ring:ve()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:Y()}],"ring-offset-w":[{"ring-offset":[me,fn]}],"ring-offset-color":[{"ring-offset":Y()}],"inset-ring-w":[{"inset-ring":ve()}],"inset-ring-color":[{"inset-ring":Y()}],"text-shadow":[{"text-shadow":["none",g,kr,wr]}],"text-shadow-color":[{"text-shadow":Y()}],opacity:[{opacity:[me,Q,J]}],"mix-blend":[{"mix-blend":[...y(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":y()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[me]}],"mask-image-linear-from-pos":[{"mask-linear-from":H()}],"mask-image-linear-to-pos":[{"mask-linear-to":H()}],"mask-image-linear-from-color":[{"mask-linear-from":Y()}],"mask-image-linear-to-color":[{"mask-linear-to":Y()}],"mask-image-t-from-pos":[{"mask-t-from":H()}],"mask-image-t-to-pos":[{"mask-t-to":H()}],"mask-image-t-from-color":[{"mask-t-from":Y()}],"mask-image-t-to-color":[{"mask-t-to":Y()}],"mask-image-r-from-pos":[{"mask-r-from":H()}],"mask-image-r-to-pos":[{"mask-r-to":H()}],"mask-image-r-from-color":[{"mask-r-from":Y()}],"mask-image-r-to-color":[{"mask-r-to":Y()}],"mask-image-b-from-pos":[{"mask-b-from":H()}],"mask-image-b-to-pos":[{"mask-b-to":H()}],"mask-image-b-from-color":[{"mask-b-from":Y()}],"mask-image-b-to-color":[{"mask-b-to":Y()}],"mask-image-l-from-pos":[{"mask-l-from":H()}],"mask-image-l-to-pos":[{"mask-l-to":H()}],"mask-image-l-from-color":[{"mask-l-from":Y()}],"mask-image-l-to-color":[{"mask-l-to":Y()}],"mask-image-x-from-pos":[{"mask-x-from":H()}],"mask-image-x-to-pos":[{"mask-x-to":H()}],"mask-image-x-from-color":[{"mask-x-from":Y()}],"mask-image-x-to-color":[{"mask-x-to":Y()}],"mask-image-y-from-pos":[{"mask-y-from":H()}],"mask-image-y-to-pos":[{"mask-y-to":H()}],"mask-image-y-from-color":[{"mask-y-from":Y()}],"mask-image-y-to-color":[{"mask-y-to":Y()}],"mask-image-radial":[{"mask-radial":[Q,J]}],"mask-image-radial-from-pos":[{"mask-radial-from":H()}],"mask-image-radial-to-pos":[{"mask-radial-to":H()}],"mask-image-radial-from-color":[{"mask-radial-from":Y()}],"mask-image-radial-to-color":[{"mask-radial-to":Y()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":z()}],"mask-image-conic-pos":[{"mask-conic":[me]}],"mask-image-conic-from-pos":[{"mask-conic-from":H()}],"mask-image-conic-to-pos":[{"mask-conic-to":H()}],"mask-image-conic-from-color":[{"mask-conic-from":Y()}],"mask-image-conic-to-color":[{"mask-conic-to":Y()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:je()}],"mask-repeat":[{mask:ye()}],"mask-size":[{mask:et()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Q,J]}],filter:[{filter:["","none",Q,J]}],blur:[{blur:D()}],brightness:[{brightness:[me,Q,J]}],contrast:[{contrast:[me,Q,J]}],"drop-shadow":[{"drop-shadow":["","none",m,kr,wr]}],"drop-shadow-color":[{"drop-shadow":Y()}],grayscale:[{grayscale:["",me,Q,J]}],"hue-rotate":[{"hue-rotate":[me,Q,J]}],invert:[{invert:["",me,Q,J]}],saturate:[{saturate:[me,Q,J]}],sepia:[{sepia:["",me,Q,J]}],"backdrop-filter":[{"backdrop-filter":["","none",Q,J]}],"backdrop-blur":[{"backdrop-blur":D()}],"backdrop-brightness":[{"backdrop-brightness":[me,Q,J]}],"backdrop-contrast":[{"backdrop-contrast":[me,Q,J]}],"backdrop-grayscale":[{"backdrop-grayscale":["",me,Q,J]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[me,Q,J]}],"backdrop-invert":[{"backdrop-invert":["",me,Q,J]}],"backdrop-opacity":[{"backdrop-opacity":[me,Q,J]}],"backdrop-saturate":[{"backdrop-saturate":[me,Q,J]}],"backdrop-sepia":[{"backdrop-sepia":["",me,Q,J]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":L()}],"border-spacing-x":[{"border-spacing-x":L()}],"border-spacing-y":[{"border-spacing-y":L()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Q,J]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[me,"initial",Q,J]}],ease:[{ease:["linear","initial",R,Q,J]}],delay:[{delay:[me,Q,J]}],animate:[{animate:["none",b,Q,J]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,Q,J]}],"perspective-origin":[{"perspective-origin":$()}],rotate:[{rotate:f()}],"rotate-x":[{"rotate-x":f()}],"rotate-y":[{"rotate-y":f()}],"rotate-z":[{"rotate-z":f()}],scale:[{scale:x()}],"scale-x":[{"scale-x":x()}],"scale-y":[{"scale-y":x()}],"scale-z":[{"scale-z":x()}],"scale-3d":["scale-3d"],skew:[{skew:S()}],"skew-x":[{"skew-x":S()}],"skew-y":[{"skew-y":S()}],transform:[{transform:[Q,J,"","none","gpu","cpu"]}],"transform-origin":[{origin:$()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:M()}],"translate-x":[{"translate-x":M()}],"translate-y":[{"translate-y":M()}],"translate-z":[{"translate-z":M()}],"translate-none":["translate-none"],zoom:[{zoom:[St,Q,J]}],accent:[{accent:Y()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:Y()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Q,J]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":Y()}],"scrollbar-track-color":[{"scrollbar-track":Y()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mbs":[{"scroll-mbs":L()}],"scroll-mbe":[{"scroll-mbe":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pbs":[{"scroll-pbs":L()}],"scroll-pbe":[{"scroll-pbe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Q,J]}],fill:[{fill:["none",...Y()]}],"stroke-w":[{stroke:[me,Bn,fn,Ki]}],stroke:[{stroke:["none",...Y()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["start","end","right","left"],"inset-y":["inset-bs","inset-be","top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["ps","pe","pr","pl"],py:["pbs","pbe","pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["ms","me","mr","ml"],my:["mbs","mbe","mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-s","border-w-e","border-w-r","border-w-l"],"border-w-y":["border-w-bs","border-w-be","border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-s","border-color-e","border-color-r","border-color-l"],"border-color-y":["border-color-bs","border-color-be","border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-ms","scroll-me","scroll-mr","scroll-ml"],"scroll-my":["scroll-mbs","scroll-mbe","scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-ps","scroll-pe","scroll-pr","scroll-pl"],"scroll-py":["scroll-pbs","scroll-pbe","scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Pf=uf(Ef);function xe(...e){return Pf(N0(e))}const Ff={class:"h-full w-full overflow-visible",xmlns:"http://www.w3.org/2000/svg"},Lf=["id"],Of=["stop-color"],Vf=["stop-color"],Df=["rx","ry","stroke","stroke-width","stroke-dasharray"],jf=["rx","ry","stroke","stroke-width","stroke-dasharray"],Bf=ce({__name:"BorderBeam",props:{borderWidth:{default:2},size:{default:20},duration:{default:6},colorFrom:{default:"#38bdf8"},colorTo:{default:"#a855f7"},delay:{default:0},reverse:{type:Boolean,default:!1},borderRadius:{default:16},glow:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=zs(),r=ge(()=>{if(typeof t.borderRadius=="number")return t.borderRadius;const i=parseFloat(t.borderRadius);return isNaN(i)?16:i}),o=ge(()=>t.size>50?18:Math.min(Math.max(t.size,5),80)),s=ge(()=>`${o.value} ${100-o.value}`),a=ge(()=>({animationDuration:`${t.duration}s`,animationDelay:`-${t.delay}s`,animationDirection:t.reverse?"reverse":"normal"}));return(i,c)=>(h(),_("div",{class:T(I(xe)("pointer-events-none absolute inset-0 rounded-[inherit] overflow-visible",t.class))},[(h(),_("svg",Ff,[l("defs",null,[l("linearGradient",{id:`border-beam-grad-${I(n)}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[l("stop",{offset:"0%","stop-color":t.colorFrom},null,8,Of),l("stop",{offset:"100%","stop-color":t.colorTo},null,8,Vf)],8,Lf)]),t.glow?(h(),_("rect",{key:0,pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${I(n)})`,"stroke-width":t.borderWidth*2,"stroke-dasharray":s.value,"stroke-linecap":"round",opacity:"0.45",class:"border-beam-svg-motion blur-[3px]",style:Ie(a.value)},null,12,Df)):fe("",!0),l("rect",{pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${I(n)})`,"stroke-width":t.borderWidth,"stroke-dasharray":s.value,"stroke-linecap":"round",class:"border-beam-svg-motion",style:Ie(a.value)},null,12,jf)]))],2))}}),qe=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},as=qe(Bf,[["__scopeId","data-v-bf918acf"]]),Nf={class:"relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-white"},Uf=ce({__name:"ShimmerButton",props:{shimmerColor:{default:"#38bdf8"},shimmerSize:{default:"0.12em"},shimmerDuration:{default:"2.5s"},borderRadius:{default:"9999px"},class:{}},setup(e){const t=e,n=ge(()=>({"--shimmer-color":t.shimmerColor,"--shimmer-size":t.shimmerSize,"--speed":t.shimmerDuration,"--radius":t.borderRadius}));return(r,o)=>(h(),_("button",{style:Ie(n.value),class:T(I(xe)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white transition-all duration-300 active:scale-95","border border-white/10 [border-radius:var(--radius)]","bg-zinc-900/90 shadow-md hover:shadow-lg hover:shadow-sky-500/20 dark:bg-black/90",t.class))},[o[0]||(o[0]=l("div",{class:"shimmer-spin-container pointer-events-none absolute -inset-[100%] [aspect-ratio:1] [border-radius:inherit]"},[l("div",{class:"shimmer-spin-gradient h-full w-full animate-shimmer-spin"})],-1)),o[1]||(o[1]=l("div",{class:"absolute [inset:var(--shimmer-size)] [border-radius:inherit] bg-zinc-950/95 transition-colors duration-300 group-hover:bg-zinc-900/95"},null,-1)),l("span",Nf,[at(r.$slots,"default",{},void 0,!0)])],6))}}),Zn=qe(Uf,[["__scopeId","data-v-6b251134"]]),Hf=ce({__name:"ShinyText",props:{text:{},duration:{default:2.5},variant:{default:"white"},class:{}},setup(e){const t=e,n=ge(()=>({"--duration":`${t.duration}s`}));return(r,o)=>(h(),_("span",{style:Ie(n.value),class:T(I(xe)("shiny-text-root inline-block font-bold bg-clip-text text-transparent",t.variant==="white"&&"shiny-variant-white",t.variant==="cyber"&&"shiny-variant-cyber",t.class))},[at(r.$slots,"default",{},()=>[Ve(V(t.text),1)],!0)],6))}}),Jn=qe(Hf,[["__scopeId","data-v-31108f82"]]),Gf=ce({__name:"RetroGrid",props:{angle:{default:65},cellSize:{default:60},opacity:{default:.5},lightLineColor:{default:"#94a3b8"},darkLineColor:{default:"#38bdf8"},mask:{type:Boolean,default:!0},maskClass:{},class:{}},setup(e){const t=e,n=ge(()=>({"--grid-angle":`${t.angle}deg`,"--cell-size":`${t.cellSize}px`,"--opacity":t.opacity.toString(),"--light-line":t.lightLineColor,"--dark-line":t.darkLineColor}));return(r,o)=>(h(),_("div",{style:Ie(n.value),class:T(I(xe)("pointer-events-none absolute h-full w-full overflow-hidden opacity-[var(--opacity)] [perspective:200px]",t.class))},[l("div",{class:T(I(xe)("absolute inset-0 [transform:rotateX(var(--grid-angle))]",t.mask&&"retro-grid-horizon-mask"))},[...o[0]||(o[0]=[l("div",{class:"retro-grid-plane animate-retro-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]"},null,-1)])],2)],6))}}),ls=qe(Gf,[["__scopeId","data-v-2d20ad14"]]),ac=ce({__name:"BentoGrid",props:{class:{}},setup(e){const t=e;return(n,r)=>(h(),_("div",{class:T(I(xe)("grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",t.class))},[at(n.$slots,"default")],2))}}),qf={class:"relative z-0 h-44 w-full overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"},Wf={class:"relative z-10 flex flex-col gap-2 pt-4"},Kf={class:"flex items-center gap-2.5"},Xf={class:"text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},Yf={class:"text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"},Zf={key:0,class:"mt-3 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400"},Jf=ce({__name:"BentoCard",props:{name:{},description:{},class:{},href:{},cta:{},spotlightRadius:{default:300}},setup(e){const t=e,n=N(0),r=N(0),o=N(!1);function s(a){const i=a.currentTarget.getBoundingClientRect();n.value=a.clientX-i.left,r.value=a.clientY-i.top}return(a,i)=>{const c=ur("router-link");return h(),_("div",{class:T(I(xe)("group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300","border border-zinc-200 bg-white/70 shadow-sm backdrop-blur-md hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10",t.class)),onMousemove:s,onMouseenter:i[0]||(i[0]=p=>o.value=!0),onMouseleave:i[1]||(i[1]=p=>o.value=!1)},[l("div",{class:"pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",style:Ie({background:`radial-gradient(${t.spotlightRadius}px circle at ${n.value}px ${r.value}px, var(--spotlight-color), transparent 80%)`})},null,4),l("div",qf,[at(a.$slots,"background",{},void 0,!0)]),l("div",Wf,[l("div",Kf,[at(a.$slots,"icon",{},void 0,!0),l("h3",Xf,V(t.name),1)]),l("p",Yf,V(t.description),1),t.cta||a.$slots.cta?(h(),_("div",Zf,[at(a.$slots,"cta",{},()=>[t.href?(h(),he(c,{key:0,to:t.href,class:"inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"},{default:Z(()=>[Ve(V(t.cta)+" ",1),i[2]||(i[2]=l("span",{"aria-hidden":"true"},"→",-1))]),_:1},8,["to"])):fe("",!0)],!0)])):fe("",!0)])],34)}}}),nt=qe(Jf,[["__scopeId","data-v-f7ebca2d"]]),Qf=ce({__name:"Marquee",props:{duration:{default:30},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},repeat:{default:4},class:{}},setup(e){const t=e,n=ge(()=>({"--duration":`${t.duration}s`}));return(r,o)=>(h(),_("div",{style:Ie(n.value),class:T(I(xe)("group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",t.vertical?"flex-col":"flex-row",t.class))},[(h(!0),_(ae,null,Re(t.repeat,s=>(h(),_("div",{key:s,class:T(I(xe)("flex shrink-0 justify-around [gap:var(--gap)]",t.vertical?"flex-col animate-marquee-vertical":"flex-row animate-marquee",t.pauseOnHover&&"group-hover:[animation-play-state:paused]",t.reverse&&"[animation-direction:reverse]"))},[at(r.$slots,"default",{},void 0,!0)],2))),128))],6))}}),Rr=qe(Qf,[["__scopeId","data-v-2ea856f7"]]),em={"aria-hidden":"true",class:"pointer-events-none h-full w-full fill-neutral-400/60 dark:fill-neutral-600/60 transition-colors"},tm=["id","width","height","x","y"],nm=["cx","cy","r"],rm=["fill"],lc=ce({__name:"DotPattern",props:{width:{default:20},height:{default:20},x:{default:0},y:{default:0},cx:{default:1},cy:{default:1},cr:{default:1},glow:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=zs(),r=N(-9999),o=N(-9999);function s(i){if(!t.glow)return;const c=i.currentTarget.getBoundingClientRect();r.value=i.clientX-c.left,o.value=i.clientY-c.top}function a(){r.value=-9999,o.value=-9999}return(i,c)=>(h(),_("div",{class:T(I(xe)("absolute inset-0 h-full w-full overflow-hidden",t.glow?"pointer-events-auto":"pointer-events-none",t.class)),onMousemove:s,onMouseleave:a},[(h(),_("svg",em,[l("defs",null,[l("pattern",{id:I(n),width:t.width,height:t.height,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:t.x,y:t.y},[l("circle",{cx:t.cx,cy:t.cy,r:t.cr},null,8,nm)],8,tm)]),l("rect",{width:"100%",height:"100%",fill:`url(#${I(n)})`},null,8,rm)])),t.glow?(h(),_("div",{key:0,class:"absolute inset-0 transition-opacity duration-300",style:Ie({background:`radial-gradient(200px circle at ${r.value}px ${o.value}px, rgba(59, 130, 246, 0.15), transparent 80%)`})},null,4)):fe("",!0)],34))}}),om={class:"relative z-10 h-full w-full"},cc=ce({__name:"InteractiveParticles",props:{quantity:{default:50},speed:{default:.6},maxRadius:{default:2},mouseRadius:{default:100},color:{},connectLines:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=N(null);let r=null,o=[];const s={x:-9999,y:-9999};function a(d,g){o=[];for(let m=0;m<t.quantity;m++)o.push({x:Math.random()*d,y:Math.random()*g,vx:(Math.random()-.5)*t.speed,vy:(Math.random()-.5)*t.speed,size:Math.random()*t.maxRadius+.8,baseAlpha:Math.random()*.5+.2,alpha:Math.random()*.5+.2})}function i(){const d=n.value;if(!d)return;const g=window.devicePixelRatio||1,m=d.getBoundingClientRect();d.width=m.width*g,d.height=m.height*g;const C=d.getContext("2d");C&&C.scale(g,g),a(m.width,m.height)}function c(d){const g=n.value;if(!g)return;const m=g.getBoundingClientRect();s.x=d.clientX-m.left,s.y=d.clientY-m.top}function p(){s.x=-9999,s.y=-9999}function u(){const d=n.value;if(!d)return;const g=d.getContext("2d");if(!g)return;const m=d.getBoundingClientRect(),C=m.width,w=m.height;g.clearRect(0,0,C,w);const R=document.documentElement.classList.contains("dark")?"255, 255, 255":"59, 130, 246",b=t.color||R;for(let k=0;k<o.length;k++){const z=o[k];z.x+=z.vx,z.y+=z.vy,(z.x<0||z.x>C)&&(z.vx*=-1),(z.y<0||z.y>w)&&(z.vy*=-1);const $=s.x-z.x,F=s.y-z.y,U=Math.sqrt($*$+F*F);if(U<t.mouseRadius){const L=(t.mouseRadius-U)/t.mouseRadius;z.x-=$/U*L*2,z.y-=F/U*L*2,z.alpha=Math.min(z.baseAlpha+.4,.9)}else z.alpha=z.baseAlpha;if(g.beginPath(),g.arc(z.x,z.y,z.size,0,Math.PI*2),g.fillStyle=b.startsWith("#")?b:`rgba(${b}, ${z.alpha})`,g.fill(),t.connectLines)for(let L=k+1;L<o.length;L++){const O=o[L],ee=Math.hypot(z.x-O.x,z.y-O.y);if(ee<80){g.beginPath(),g.moveTo(z.x,z.y),g.lineTo(O.x,O.y);const oe=(1-ee/80)*.15;g.strokeStyle=`rgba(${R}, ${oe})`,g.lineWidth=.6,g.stroke()}}}r=requestAnimationFrame(u)}return lt(()=>{i(),window.addEventListener("resize",i),u()}),ct(()=>{window.removeEventListener("resize",i),r!==null&&cancelAnimationFrame(r)}),vt(()=>t.quantity,()=>{const d=n.value;if(d){const g=d.getBoundingClientRect();a(g.width,g.height)}}),(d,g)=>(h(),_("div",{class:T(I(xe)("relative h-full w-full overflow-hidden",t.class)),onMousemove:c,onMouseleave:p},[l("canvas",{ref_key:"canvasRef",ref:n,class:"pointer-events-none absolute inset-0 h-full w-full"},null,512),l("div",om,[at(d.$slots,"default")])],34))}}),sm=ce({__name:"Meteors",props:{number:{default:20},angle:{default:215},minDelay:{default:.2},maxDelay:{default:1.2},minDuration:{default:2},maxDuration:{default:8},class:{}},setup(e){const t=e,n=ge(()=>Array.from({length:t.number}).map(()=>{const r=Math.floor(Math.random()*100),o=Math.floor(Math.random()*100),s=(Math.random()*(t.maxDelay-t.minDelay)+t.minDelay).toFixed(2),a=(Math.random()*(t.maxDuration-t.minDuration)+t.minDuration).toFixed(2);return{top:`${r}%`,left:`${o}%`,animationDelay:`${s}s`,animationDuration:`${a}s`}}));return(r,o)=>(h(),_("div",{class:T(I(xe)("pointer-events-none absolute inset-0 overflow-hidden",t.class))},[(h(!0),_(ae,null,Re(n.value,(s,a)=>(h(),_("span",{key:a,style:Ie({...s,"--angle":`${t.angle}deg`}),class:"animate-meteor absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[var(--angle)] dark:bg-sky-400 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-slate-500 before:to-transparent dark:before:from-sky-400"},null,4))),128))],2))}}),dc=qe(sm,[["__scopeId","data-v-7d09918c"]]),im=ce({__name:"Ripple",props:{mainCircleSize:{default:210},mainCircleOpacity:{default:.24},numCircles:{default:8},class:{}},setup(e){const t=e;return(n,r)=>(h(),_("div",{class:T(I(xe)("pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",t.class))},[(h(!0),_(ae,null,Re(t.numCircles,o=>(h(),_("div",{key:o,style:Ie({width:`${t.mainCircleSize+(o-1)*70}px`,height:`${t.mainCircleSize+(o-1)*70}px`,opacity:Math.max(.04,t.mainCircleOpacity-(o-1)*.025),animationDelay:`${(o-1)*.06}s`,borderStyle:o===t.numCircles?"dashed":"solid",borderWidth:"1px"}),class:"animate-ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-500/40 bg-blue-500/5 shadow-[0_0_16px_rgba(59,130,246,0.1)] dark:border-sky-400/30 dark:bg-sky-400/5"},null,4))),128))],2))}}),uc=qe(im,[["__scopeId","data-v-98c398f7"]]),Mr=ce({__name:"NumberTicker",props:{value:{},direction:{default:"up"},duration:{default:2},delay:{default:0},decimalPlaces:{default:0},class:{}},setup(e){const t=e,n=N(null),r=N("0");let o=null,s=null,a=!1;function i(u){return u===1?1:1-Math.pow(2,-10*u)}function c(u){return new Intl.NumberFormat("en-US",{minimumFractionDigits:t.decimalPlaces,maximumFractionDigits:t.decimalPlaces}).format(u)}function p(){if(a)return;a=!0;const u=t.direction==="down"?t.value:0,d=t.direction==="down"?0:t.value,g=t.duration*1e3;let m=null;setTimeout(()=>{function C(w){m||(m=w);const A=w-m,R=Math.min(A/g,1),b=i(R),k=u+(d-u)*b;r.value=c(k),R<1?o=requestAnimationFrame(C):r.value=c(d)}o=requestAnimationFrame(C)},t.delay*1e3)}return lt(()=>{r.value=c(t.direction==="down"?t.value:0),n.value?(s=new IntersectionObserver(u=>{u[0].isIntersecting&&(p(),s&&s.disconnect())},{threshold:.1}),s.observe(n.value)):p()}),ct(()=>{o&&cancelAnimationFrame(o),s&&s.disconnect()}),vt(()=>t.value,()=>{a=!1,p()}),(u,d)=>(h(),_("span",{ref_key:"spanRef",ref:n,class:T(I(xe)("inline-block tabular-nums tracking-wider",t.class))},V(r.value),3))}}),am=["width","height","viewBox"],lm=["d","stroke","stroke-width","stroke-opacity"],cm=["d","stroke","stroke-width"],dm=["id"],um=["stop-color"],pm=["stop-color"],fm=["stop-color"],mm=["from","to","dur","begin"],gm=["from","to","dur","begin"],qr=ce({__name:"AnimatedBeam",props:{containerRef:{},fromRef:{},toRef:{},curvature:{default:0},reverse:{type:Boolean,default:!1},pathColor:{default:"#94a3b8"},pathWidth:{default:2},pathOpacity:{default:.2},gradientStartColor:{default:"#38bdf8"},gradientStopColor:{default:"#6366f1"},duration:{default:3},delay:{default:0},startXOffset:{default:0},startYOffset:{default:0},endXOffset:{default:0},endYOffset:{default:0},class:{}},setup(e){const t=e,n=zs(),r=N(""),o=N({width:0,height:0});function s(c){return c?"value"in c?c.value:c instanceof HTMLElement?c:null:null}function a(){const c=s(t.containerRef),p=s(t.fromRef),u=s(t.toRef);if(!c||!p||!u)return;const d=c.getBoundingClientRect(),g=p.getBoundingClientRect(),m=u.getBoundingClientRect();o.value={width:d.width,height:d.height};const C=g.left-d.left+g.width/2+t.startXOffset,w=g.top-d.top+g.height/2+t.startYOffset,A=m.left-d.left+m.width/2+t.endXOffset,R=m.top-d.top+m.height/2+t.endYOffset,b=(C+A)/2,k=(w+R)/2,z=b,$=k-t.curvature;t.curvature===0?r.value=`M ${C},${w} L ${A},${R}`:r.value=`M ${C},${w} Q ${z},${$} ${A},${R}`}let i=null;return lt(()=>{a(),window.addEventListener("resize",a);const c=s(t.containerRef);c&&(i=new ResizeObserver(()=>a()),i.observe(c))}),ct(()=>{window.removeEventListener("resize",a),i&&i.disconnect()}),vt([()=>s(t.containerRef),()=>s(t.fromRef),()=>s(t.toRef),()=>t.curvature],()=>{a()}),(c,p)=>(h(),_("svg",{width:o.value.width,height:o.value.height,viewBox:`0 0 ${o.value.width} ${o.value.height}`,class:T(I(xe)("pointer-events-none absolute inset-0 h-full w-full select-none overflow-visible",t.class))},[l("path",{d:r.value,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-opacity":t.pathOpacity,"stroke-linecap":"round"},null,8,lm),l("path",{d:r.value,fill:"none",stroke:`url(#beam-gradient-${I(n)})`,"stroke-width":t.pathWidth,"stroke-linecap":"round"},null,8,cm),l("defs",null,[l("linearGradient",{id:`beam-gradient-${I(n)}`,gradientUnits:"userSpaceOnUse"},[l("stop",{offset:"0%","stop-color":t.gradientStartColor,"stop-opacity":"0"},null,8,um),l("stop",{offset:"50%","stop-color":t.gradientStartColor,"stop-opacity":"1"},null,8,pm),l("stop",{offset:"100%","stop-color":t.gradientStopColor,"stop-opacity":"0"},null,8,fm),l("animate",{attributeName:"x1",from:t.reverse?"100%":"-50%",to:t.reverse?"-50%":"100%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,mm),l("animate",{attributeName:"x2",from:t.reverse?"150%":"0%",to:t.reverse?"0%":"150%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,gm)],8,dm)])],10,am))}}),bm={class:"relative z-50 -translate-y-32 flex flex-col items-center px-5 text-center"},pc=ce({__name:"LampEffect",props:{glowColor:{default:"#06b6d4"},class:{}},setup(e){const t=e;return(n,r)=>(h(),_("div",{class:T(I(xe)("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-2xl z-0",t.class))},[r[0]||(r[0]=Wo(`<div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"><div class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div><div class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"></div></div><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"><div class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"></div><div class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div></div><div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl"></div><div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div><div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div><div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></div><div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div><div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-950"></div></div>`,1)),l("div",bm,[at(n.$slots,"default")])],2))}}),fc=ce({__name:"FlickeringGrid",props:{squareSize:{default:4},gridGap:{default:4},flickerChance:{default:.3},color:{},maxOpacity:{default:.3},class:{}},setup(e){const t=e,n=N(null),r=N(null);let o=null,s=new Float32Array(0),a=0,i=0;function c(d,g){a=Math.floor(d/(t.squareSize+t.gridGap)),i=Math.floor(g/(t.squareSize+t.gridGap)),s=new Float32Array(a*i);for(let m=0;m<s.length;m++)s[m]=Math.random()*t.maxOpacity}function p(){const d=n.value,g=r.value;if(!d||!g)return;const m=window.devicePixelRatio||1,C=d.getBoundingClientRect();g.width=C.width*m,g.height=C.height*m;const w=g.getContext("2d");w&&w.scale(m,m),c(C.width,C.height)}function u(){const d=r.value,g=n.value;if(!d||!g)return;const m=d.getContext("2d");if(!m)return;const C=g.getBoundingClientRect();m.clearRect(0,0,C.width,C.height);const A=document.documentElement.classList.contains("dark")?"148, 163, 184":"100, 116, 139",R=t.color||A;for(let b=0;b<i;b++)for(let k=0;k<a;k++){const z=b*a+k;Math.random()<t.flickerChance&&(s[z]=Math.random()*t.maxOpacity);const $=s[z];m.fillStyle=R.startsWith("#")?R:`rgba(${R}, ${$})`;const F=k*(t.squareSize+t.gridGap),U=b*(t.squareSize+t.gridGap);m.fillRect(F,U,t.squareSize,t.squareSize)}o=requestAnimationFrame(u)}return lt(()=>{p(),window.addEventListener("resize",p),u()}),ct(()=>{window.removeEventListener("resize",p),o&&cancelAnimationFrame(o)}),vt([()=>t.squareSize,()=>t.gridGap],()=>{p()}),(d,g)=>(h(),_("div",{ref_key:"containerRef",ref:n,class:T(I(xe)("pointer-events-none relative h-full w-full overflow-hidden",t.class))},[l("canvas",{ref_key:"canvasRef",ref:r,class:"absolute inset-0 h-full w-full"},null,512)],2))}}),hm={class:"relative overflow-hidden"},xm={class:"relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center overflow-hidden"},vm={class:"relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200"},ym={class:"relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"},wm={class:"relative z-10 mt-12 w-full max-w-2xl text-left"},km={class:"relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/80"},zm={class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"},_m={class:"border-y border-zinc-200/80 bg-zinc-50/50 py-6 dark:border-zinc-800/80 dark:bg-zinc-950/40"},Cm={class:"mx-auto max-w-7xl px-4 text-center"},Sm={id:"features",class:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"},Am={class:"text-center max-w-3xl mx-auto mb-16 space-y-4"},Im={class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"},Rm={class:"relative h-full w-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50/40 to-transparent dark:from-zinc-900/60 dark:to-transparent"},Mm={class:"relative flex h-32 w-56 flex-col justify-between rounded-xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-md backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95"},Tm={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-50/50 to-blue-50/20 border border-blue-100/50 dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800"},$m={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50/30 to-white dark:from-zinc-950 dark:to-zinc-900"},Em={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-50/30 to-transparent dark:from-zinc-900/50 dark:to-transparent"},Pm={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"},Fm={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50"},Lm={class:"relative h-full w-full flex flex-col justify-center overflow-hidden rounded-xl p-3 bg-zinc-50/60 dark:bg-zinc-900/40"},Om={class:"relative h-full w-full overflow-hidden rounded-xl bg-slate-950 p-4"},Vm={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center"},Dm={class:"relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40"},jm={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent flex flex-col items-center justify-center p-4"},Bm={class:"text-4xl font-black text-emerald-600 dark:text-emerald-400"},Nm={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4"},Um={class:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800/80"},Hm={class:"text-center max-w-3xl mx-auto mb-12 space-y-3"},Gm={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400"},qm={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},Wm={class:"flex items-center justify-between mb-4"},Km={class:"flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60"},Xm={class:"rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-[11px] font-mono font-bold text-zinc-600 dark:text-zinc-300"},Ym={class:"text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2"},Zm={class:"text-[11px] font-mono text-zinc-400 block mt-0.5"},Jm={class:"mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"},Qm={class:"mt-4 flex flex-wrap gap-1.5"},eg={class:"mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between"},tg={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"},ng={class:"mt-8 flex items-center justify-center gap-4"},rg={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-20 dark:border-zinc-800/80 dark:bg-zinc-950/40"},og={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},sg={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},ig={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},ag={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400"},lg={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},cg={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400"},dg={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},ug={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400"},pg=ce({__name:"HomeView",setup(e){const t=N(null),n=N(null),r=N(null),o=N(null);function s(u){switch(u){case"ai-native":return Rs;case"interactive-nav":return Jo;case"space-3d":return Ur;case"borders-cards":return hn;case"kinetic-typography":return Fe;default:return Fe}}function a(u){return en.filter(d=>d.suiteId===u)}const i=["Vue 3.5+","TypeScript","Tailwind CSS","Composition API","Vite 6","HTML5 Canvas","Web Animations API","Zero-Config"],c=N(!1);function p(){navigator.clipboard.writeText("npm i @vueuse/core clsx tailwind-merge"),c.value=!0,setTimeout(()=>{c.value=!1},2e3)}return(u,d)=>{const g=ur("router-link");return h(),_("div",hm,[l("section",xm,[v(ls,{angle:65,opacity:.45}),l("div",vm,[v(I(Fe),{class:"h-3.5 w-3.5 text-blue-500"}),v(Jn,{text:"Vue 3 的动效原子代码库现已上线"}),d[0]||(d[0]=l("span",{class:"rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] text-blue-600 dark:text-blue-400"}," v1.0 ",-1))]),d[4]||(d[4]=l("h1",{class:"relative z-10 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight"},[Ve(" 专属于 Vue 3 的 "),l("span",{class:"block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400"}," 高阶动效原子库 ")],-1)),d[5]||(d[5]=l("p",{class:"relative z-10 mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400"},[Ve(" 不再重复造普通表单，全面对标 Magic UI 与 Aceternity UI。"),l("br",{class:"hidden sm:inline"}),Ve(" 面向 "),l("strong",null,"AI 官网、SaaS 营销页、酷炫个人主页"),Ve("，提供 60fps 单文件即用的动效积木。 ")],-1)),l("div",ym,[v(g,{to:"/docs/border-beam"},{default:Z(()=>[v(Zn,{"shimmer-color":"#60a5fa",class:"h-12 px-8 text-base"},{default:Z(()=>[d[1]||(d[1]=l("span",null,"立即浏览组件",-1)),v(I(Ir),{class:"h-4 w-4"})]),_:1})]),_:1}),l("button",{type:"button",class:"inline-flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-800",onClick:p},[c.value?(h(),he(I(qt),{key:0,class:"h-4 w-4 text-emerald-500"})):(h(),he(I(ar),{key:1,class:"h-4 w-4 text-zinc-400"})),l("span",null,V(c.value?"已复制依赖指令":"复制基础依赖指令"),1)])]),l("div",wm,[l("div",km,[v(as,{size:90,duration:6,"color-from":"#38bdf8","color-to":"#a855f7","border-width":2,"border-radius":16}),d[3]||(d[3]=Wo('<div class="mb-4 flex items-center justify-between border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60"><div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-rose-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span><span class="ml-2 font-mono text-xs text-zinc-400">components/BorderBeam.vue</span></div><div class="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Zero-Config / 粘贴即跑</span></div></div>',1)),l("div",zm,[d[2]||(d[2]=Wo('<div class="space-y-1 text-zinc-600 dark:text-zinc-300"><p><span class="text-purple-500">&lt;template&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;div</span> <span class="text-amber-500">class=</span><span class="text-emerald-500">&quot;relative rounded-2xl&quot;</span><span class="text-blue-500">&gt;</span></p><p class="pl-8"><span class="text-blue-500">&lt;BorderBeam</span> <span class="text-amber-500">:duration=</span><span class="text-emerald-500">&quot;5&quot;</span> <span class="text-amber-500">:border-width=</span><span class="text-emerald-500">&quot;2&quot;</span> <span class="text-blue-500">/&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;/div&gt;</span></p><p><span class="text-purple-500">&lt;/template&gt;</span></p></div>',1)),v(g,{to:"/docs/border-beam",class:"shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"},{default:Z(()=>[Ve(" 浏览全部 "+V(I(en).length)+" 款动效 → ",1)]),_:1})])])])]),l("section",_m,[l("div",Cm,[d[7]||(d[7]=l("p",{class:"mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase"}," 原生融合的技术栈与动效标准 ",-1)),v(Rr,{duration:25,"pause-on-hover":!0},{default:Z(()=>[(h(),_(ae,null,Re(i,m=>l("div",{key:m,class:"flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-5 py-2 text-xs font-bold text-zinc-700 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300"},[d[6]||(d[6]=l("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),l("span",null,V(m),1)])),64))]),_:1})])]),l("section",Sm,[l("div",Am,[l("h2",Im," 全面对标顶流 · 5 大主题套件 · "+V(I(en).length)+" 款高阶动效全装配 ",1),d[8]||(d[8]=l("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 每一个组件都经过精心打磨，在移动端与桌面端保持 60fps 满帧性能，全部开箱即用，支持 Clean Light 与 Deep Dark 双模自适应。 ",-1))]),v(ac,null,{default:Z(()=>[v(nt,{name:"Border Beam",description:"现代 CSS 路径动画，高光激光沿圆角边框飞速流转，AI 推理与核心 VIP 的视觉焦点",cta:"查看详情与代码",href:"/docs/border-beam"},{icon:Z(()=>[v(I(Fe),{class:"h-5 w-5 text-sky-500"})]),background:Z(()=>[l("div",Rm,[l("div",Mm,[v(as,{size:65,duration:3.5,"color-from":"#06b6d4","color-to":"#6366f1","border-width":2,"border-radius":12}),d[9]||(d[9]=l("div",{class:"flex items-center justify-between"},[l("div",{class:"flex items-center gap-2"},[l("span",{class:"relative flex h-2 w-2"},[l("span",{class:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),l("span",{class:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]),l("span",{class:"text-xs font-bold text-zinc-800 dark:text-zinc-200"},"AI 推理状态")]),l("span",{class:"rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-sky-600 dark:text-sky-400"},"360° 流动")],-1)),d[10]||(d[10]=l("div",{class:"space-y-1.5"},[l("div",{class:"h-2 w-4/5 rounded-full bg-zinc-200 dark:bg-zinc-700"}),l("div",{class:"h-2 w-3/5 rounded-full bg-gradient-to-r from-sky-500/40 to-indigo-500/40"})],-1))])])]),_:1}),v(nt,{name:"Interactive Particles",description:"原生 Canvas 2D 粒子引擎，支持鼠标悬浮动态引力排斥、微线互联与 60fps 满帧性能",cta:"查看详情与代码",href:"/docs/interactive-particles"},{icon:Z(()=>[v(I(In),{class:"h-5 w-5 text-amber-500"})]),background:Z(()=>[l("div",Tm,[v(cc,{quantity:38,speed:.75,"mouse-radius":85,"connect-lines":!0,class:"absolute inset-0 h-full w-full"}),d[11]||(d[11]=l("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[l("div",{class:"flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1 text-xs font-mono font-medium text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900/60 dark:bg-zinc-900/80 dark:text-blue-400"},[l("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"}),l("span",null,"悬浮鼠标即刻磁吸交互")])],-1))])]),_:1}),v(nt,{name:"Retro Grid",description:"3D 倾斜无限延展赛博网格，原生区分明暗模式线条色彩，渲染极具科技纵深感的背景",cta:"查看详情与代码",href:"/docs/retro-grid"},{icon:Z(()=>[v(I(hn),{class:"h-5 w-5 text-indigo-500"})]),background:Z(()=>[l("div",$m,[v(ls,{angle:65,opacity:.85,"cell-size":34,"light-line-color":"#6366f1","dark-line-color":"#38bdf8"}),d[12]||(d[12]=l("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[l("span",{class:"rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-xs backdrop-blur-md dark:border-indigo-900/80 dark:bg-zinc-900/90 dark:text-indigo-400"}," 3D 空间动态透视 ")],-1))])]),_:1}),v(nt,{name:"Shimmer Button",description:"360° 旋转锥形流光高光外圈，适配核心 CTA 与付费引导，鼠标悬停即刻聚光",cta:"查看详情与代码",href:"/docs/shimmer-button"},{icon:Z(()=>[v(I(Fe),{class:"h-5 w-5 text-pink-500"})]),background:Z(()=>[l("div",Em,[v(Zn,{"shimmer-color":"#ec4899","shimmer-duration":"2.4s",class:"shadow-lg"},{default:Z(()=>[v(I(Fe),{class:"h-4 w-4 text-pink-400"}),d[13]||(d[13]=l("span",null,"360° 旋转光晕按钮",-1))]),_:1}),d[14]||(d[14]=l("span",{class:"mt-3 text-[11px] font-mono text-zinc-400"},"悬停查看高光边缘旋转",-1))])]),_:1}),v(nt,{name:"Shiny Text",description:"金属质感微光划过文字，2.5s 线性平滑连续循环，高亮 Hero 标题与特色特性",cta:"查看详情与代码",href:"/docs/shiny-text"},{icon:Z(()=>[v(I(Fe),{class:"h-5 w-5 text-amber-500"})]),background:Z(()=>[l("div",Pm,[d[15]||(d[15]=l("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"},null,-1)),v(Jn,{text:"✨ Metallic Shiny Sheen",class:"relative z-10 text-xl font-black tracking-tight",speed:2.2}),d[16]||(d[16]=l("p",{class:"relative z-10 mt-2 text-xs font-mono text-zinc-400"},"高对比连续金属质感流动",-1))])]),_:1}),v(nt,{name:"Dot Pattern",description:"极简矢量波点底纹，支持鼠标实时光晕跟随聚光灯，轻量零性能损耗",cta:"查看详情与代码",href:"/docs/dot-pattern"},{icon:Z(()=>[v(I(Ml),{class:"h-5 w-5 text-emerald-500"})]),background:Z(()=>[l("div",Fm,[v(lc,{width:16,height:16,cr:1.2,glow:!0}),d[17]||(d[17]=l("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[l("span",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}," 移动鼠标点亮光晕 ")],-1))])]),_:1}),v(nt,{name:"Marquee",description:"纯 CSS 硬件加速无限无缝滚动跑马灯，支持鼠标悬浮暂停、反向循环与变速",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/marquee"},{icon:Z(()=>[v(I(ip),{class:"h-5 w-5 text-blue-500"})]),background:Z(()=>[l("div",Lm,[v(Rr,{duration:16,"pause-on-hover":!0},{default:Z(()=>[(h(),_(ae,null,Re(["GPT-4o","Claude 3.5","DeepSeek-V3","Llama 3.3","Gemini 1.5"],m=>l("div",{key:m,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[d[18]||(d[18]=l("span",{class:"h-1.5 w-1.5 rounded-full bg-emerald-500"},null,-1)),l("span",null,V(m),1)])),64))]),_:1}),v(Rr,{duration:20,reverse:!0,"pause-on-hover":!0,class:"mt-2.5"},{default:Z(()=>[(h(),_(ae,null,Re(["Vue 3.5","TypeScript","Tailwind CSS","Zero-Config","Canvas 2D"],m=>l("div",{key:m,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[d[19]||(d[19]=l("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),l("span",null,V(m),1)])),64))]),_:1})])]),_:1}),v(nt,{name:"Bento Grid",description:"现代 SaaS 模块化栅格系统，卡片集成鼠标跟随 Spotlight 径向聚光灯流光",cta:"查看详情与代码",href:"/docs/bento-grid"},{icon:Z(()=>[v(I(hn),{class:"h-5 w-5 text-purple-500"})]),background:Z(()=>[...d[20]||(d[20]=[l("div",{class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent"},[l("div",{class:"grid grid-cols-2 gap-2 w-full max-w-[200px]"},[l("div",{class:"h-12 rounded-lg border border-purple-300/40 bg-purple-500/10 dark:border-purple-500/30 dark:bg-purple-500/20 flex items-center justify-center text-[10px] font-mono text-purple-600 dark:text-purple-300"}," Col 1 "),l("div",{class:"h-12 rounded-lg border border-blue-300/40 bg-blue-500/10 dark:border-blue-500/30 dark:bg-blue-500/20 flex items-center justify-center text-[10px] font-mono text-blue-600 dark:text-blue-300"}," Col 2 "),l("div",{class:"col-span-2 h-10 rounded-lg border border-indigo-300/40 bg-indigo-500/10 dark:border-indigo-500/30 dark:bg-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-600 dark:text-indigo-300"}," Span 2 · 动态聚光灯 ")])],-1)])]),_:1}),v(nt,{name:"Meteors",description:"纯 CSS 赛博流星雨划过，带 50px 渐变光尾与随机延迟，暗黑科技卡片与首屏氛围杀器",cta:"查看详情与代码",href:"/docs/meteors"},{icon:Z(()=>[v(I(Fe),{class:"h-5 w-5 text-sky-400"})]),background:Z(()=>[l("div",Om,[v(dc,{number:20}),d[21]||(d[21]=l("div",{class:"flex h-full flex-col justify-end"},[l("span",{class:"text-xs font-mono text-sky-400 font-bold"},"215° 斜掠流星轨迹")],-1))])]),_:1}),v(nt,{name:"Ripple",description:"由中心向外周循环脉冲扩散的多层同心圆涟漪，适配 AI 语音拾音、雷达声呐与核心头像高亮",cta:"查看详情与代码",href:"/docs/ripple"},{icon:Z(()=>[v(I(Hr),{class:"h-5 w-5 text-blue-500"})]),background:Z(()=>[l("div",Vm,[v(uc,{"main-circle-size":110,"num-circles":6}),l("div",Dm,[v(I(Hr),{class:"h-6 w-6"})])])]),_:1}),v(nt,{name:"Number Ticker",description:"采用 easeOutExpo 缓动曲线的平滑数字翻牌器，进入视口自动起跑，SaaS 核心关键业务指标必备",cta:"查看详情与代码",href:"/docs/number-ticker"},{icon:Z(()=>[v(I(Cl),{class:"h-5 w-5 text-emerald-500"})]),background:Z(()=>[l("div",jm,[l("div",Bm,[v(Mr,{value:99.99,"decimal-places":2}),d[22]||(d[22]=Ve("% ",-1))]),d[23]||(d[23]=l("p",{class:"mt-2 text-xs font-mono text-zinc-500"},"SLA 生产高可用性指标",-1))])]),_:1}),v(nt,{name:"Animated Beam",description:"Magic UI 标志性连线动效，在多个 DOM 节点间实时计算贝塞尔曲线，驱动 SVG 能量光球脉冲流动",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/animated-beam"},{icon:Z(()=>[v(I(In),{class:"h-5 w-5 text-indigo-500"})]),background:Z(()=>[l("div",{ref_key:"homeBeamContainer",ref:t,class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 flex items-center justify-between px-8"},[l("div",{ref_key:"homeBeamUser",ref:n,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-blue-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-blue-400"},[v(I(El),{class:"h-5 w-5"})],512),l("div",{ref_key:"homeBeamAi",ref:r,class:"z-10 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/40"},[v(I(Fe),{class:"h-6 w-6"})],512),l("div",{ref_key:"homeBeamDb",ref:o,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400"},[v(I(Qo),{class:"h-5 w-5"})],512),v(qr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.2},null,8,["container-ref","from-ref","to-ref"]),v(qr,{"container-ref":t.value,"from-ref":r.value,"to-ref":o.value,duration:2.2,delay:.5},null,8,["container-ref","from-ref","to-ref"])],512)]),_:1}),v(nt,{name:"Flickering Grid",description:"Canvas 2D 原生微闪烁网格，每个小方格独立呼吸微光，营造赛博黑客帝国与智能矩阵氛围",cta:"查看详情与代码",href:"/docs/flickering-grid"},{icon:Z(()=>[v(I(hn),{class:"h-5 w-5 text-sky-500"})]),background:Z(()=>[l("div",Nm,[v(fc,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),d[24]||(d[24]=l("div",{class:"relative z-10 flex h-full items-center justify-center"},[l("span",{class:"rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-500 dark:text-sky-400 font-bold"}," 60FPS 矩阵微闪 ")],-1))])]),_:1})]),_:1})]),l("section",Um,[l("div",Hm,[l("div",Gm,[v(I(Fe),{class:"h-3.5 w-3.5"}),d[25]||(d[25]=l("span",null,"主题套件全套推进",-1))]),d[26]||(d[26]=l("h2",{class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"}," 5 大主题动效矩阵 · 场景全覆盖 ",-1)),d[27]||(d[27]=l("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 按业务应用场景全套推进，彻底告别零散拼凑。从 AI 智能体推理到 3D 纵深空间，全矩阵即拷即用。 ",-1))]),l("div",qm,[(h(!0),_(ae,null,Re(I(ts),m=>{var C;return h(),_("div",{key:m.id,class:"group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:hover:border-zinc-700"},[l("div",null,[l("div",Wm,[l("div",Km,[(h(),he(Gt(s(m.id)),{class:"h-5 w-5"}))]),l("span",Xm,V(a(m.id).length)+" 款组件 ",1)]),l("h3",Ym,[l("span",null,V(m.name),1)]),l("span",Zm,V(m.englishName),1),l("p",Jm,V(m.description),1),l("div",Qm,[(h(!0),_(ae,null,Re(a(m.id),w=>(h(),he(g,{key:w.id,to:`/docs/${w.id}`,class:"rounded-lg border border-zinc-200/80 bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-700 transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-500/50 dark:hover:bg-blue-950/60 dark:hover:text-blue-400"},{default:Z(()=>[Ve(V(w.name),1)]),_:2},1032,["to"]))),128))])]),l("div",eg,[v(g,{to:`/docs/${((C=a(m.id)[0])==null?void 0:C.id)||"border-beam"}`,class:"inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"},{default:Z(()=>[d[28]||(d[28]=l("span",null,"进入套件展厅",-1)),v(I(Ir),{class:"h-3.5 w-3.5 transition-transform group-hover:translate-x-1"})]),_:1},8,["to"])])])}),128))])]),l("section",tg,[v(pc,{class:"min-h-[460px]"},{default:Z(()=>[d[30]||(d[30]=l("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-6xl font-black tracking-tight text-transparent"}," 为极致审美而生的动效原子 ",-1)),d[31]||(d[31]=l("p",{class:"mt-4 max-w-lg text-sm text-slate-400"}," 全面对标 Magic UI 与 Aceternity UI，支持单文件复制即用，零侵入无外部复杂构建负担。 ",-1)),l("div",ng,[v(g,{to:"/docs/lamp-effect"},{default:Z(()=>[v(Zn,{"shimmer-color":"#38bdf8",class:"h-11 px-6 text-sm"},{default:Z(()=>[d[29]||(d[29]=l("span",null,"探索 Lamp Effect",-1)),v(I(Ir),{class:"h-4 w-4"})]),_:1})]),_:1})])]),_:1})]),l("section",rg,[l("div",og,[l("div",sg,[l("div",ig,[l("div",ag,[v(I(ar),{class:"h-5 w-5"})]),d[32]||(d[32]=l("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," Copy & Paste 模式 ",-1)),d[33]||(d[33]=l("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不是封闭的黑盒 npm 库。代码完全属于你，复制进你的项目 `src/components/ui` 即可按需自定义与扩展。 ",-1))]),l("div",lg,[l("div",cg,[v(I(In),{class:"h-5 w-5"})]),d[34]||(d[34]=l("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 单文件自包含（Zero-Config） ",-1)),d[35]||(d[35]=l("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 动画关键帧与路径封装在组件内，完全无需在 tailwind.config.js 中配置复杂的 keyframes，避免配置遗漏。 ",-1))]),l("div",dg,[l("div",ug,[v(I(Fe),{class:"h-5 w-5"})]),d[36]||(d[36]=l("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 真·明暗双模自适应 ",-1)),d[37]||(d[37]=l("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不仅在深黑背景下流光溢彩，更对纯白、浅灰背景做针对性调优，确保在任何业务场景下都有高级质感。 ",-1))])])])])])}}});var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var To={exports:{}},Ji;function mg(){return Ji||(Ji=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=(function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,a={},i={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function b(k){return k instanceof c?new c(k.type,b(k.content),k.alias):Array.isArray(k)?k.map(b):k.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++s}),b.__id},clone:function b(k,z){z=z||{};var $,F;switch(i.util.type(k)){case"Object":if(F=i.util.objId(k),z[F])return z[F];$={},z[F]=$;for(var U in k)k.hasOwnProperty(U)&&($[U]=b(k[U],z));return $;case"Array":return F=i.util.objId(k),z[F]?z[F]:($=[],z[F]=$,k.forEach(function(L,O){$[O]=b(L,z)}),$);default:return k}},getLanguage:function(b){for(;b;){var k=o.exec(b.className);if(k)return k[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,k){b.className=b.className.replace(RegExp(o,"gi"),""),b.classList.add("language-"+k)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch($){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec($.stack)||[])[1];if(b){var k=document.getElementsByTagName("script");for(var z in k)if(k[z].src==b)return k[z]}return null}},isActive:function(b,k,z){for(var $="no-"+k;b;){var F=b.classList;if(F.contains(k))return!0;if(F.contains($))return!1;b=b.parentElement}return!!z}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(b,k){var z=i.util.clone(i.languages[b]);for(var $ in k)z[$]=k[$];return z},insertBefore:function(b,k,z,$){$=$||i.languages;var F=$[b],U={};for(var L in F)if(F.hasOwnProperty(L)){if(L==k)for(var O in z)z.hasOwnProperty(O)&&(U[O]=z[O]);z.hasOwnProperty(L)||(U[L]=F[L])}var ee=$[b];return $[b]=U,i.languages.DFS(i.languages,function(oe,q){q===ee&&oe!=b&&(this[oe]=U)}),U},DFS:function b(k,z,$,F){F=F||{};var U=i.util.objId;for(var L in k)if(k.hasOwnProperty(L)){z.call(k,L,k[L],$||L);var O=k[L],ee=i.util.type(O);ee==="Object"&&!F[U(O)]?(F[U(O)]=!0,b(O,z,null,F)):ee==="Array"&&!F[U(O)]&&(F[U(O)]=!0,b(O,z,L,F))}}},plugins:{},highlightAll:function(b,k){i.highlightAllUnder(document,b,k)},highlightAllUnder:function(b,k,z){var $={callback:z,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",$),$.elements=Array.prototype.slice.apply($.container.querySelectorAll($.selector)),i.hooks.run("before-all-elements-highlight",$);for(var F=0,U;U=$.elements[F++];)i.highlightElement(U,k===!0,$.callback)},highlightElement:function(b,k,z){var $=i.util.getLanguage(b),F=i.languages[$];i.util.setLanguage(b,$);var U=b.parentElement;U&&U.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(U,$);var L=b.textContent,O={element:b,language:$,grammar:F,code:L};function ee(q){O.highlightedCode=q,i.hooks.run("before-insert",O),O.element.innerHTML=O.highlightedCode,i.hooks.run("after-highlight",O),i.hooks.run("complete",O),z&&z.call(O.element)}if(i.hooks.run("before-sanity-check",O),U=O.element.parentElement,U&&U.nodeName.toLowerCase()==="pre"&&!U.hasAttribute("tabindex")&&U.setAttribute("tabindex","0"),!O.code){i.hooks.run("complete",O),z&&z.call(O.element);return}if(i.hooks.run("before-highlight",O),!O.grammar){ee(i.util.encode(O.code));return}if(k&&r.Worker){var oe=new Worker(i.filename);oe.onmessage=function(q){ee(q.data)},oe.postMessage(JSON.stringify({language:O.language,code:O.code,immediateClose:!0}))}else ee(i.highlight(O.code,O.grammar,O.language))},highlight:function(b,k,z){var $={code:b,grammar:k,language:z};if(i.hooks.run("before-tokenize",$),!$.grammar)throw new Error('The language "'+$.language+'" has no grammar.');return $.tokens=i.tokenize($.code,$.grammar),i.hooks.run("after-tokenize",$),c.stringify(i.util.encode($.tokens),$.language)},tokenize:function(b,k){var z=k.rest;if(z){for(var $ in z)k[$]=z[$];delete k.rest}var F=new d;return g(F,F.head,b),u(b,F,k,F.head,0),C(F)},hooks:{all:{},add:function(b,k){var z=i.hooks.all;z[b]=z[b]||[],z[b].push(k)},run:function(b,k){var z=i.hooks.all[b];if(!(!z||!z.length))for(var $=0,F;F=z[$++];)F(k)}},Token:c};r.Prism=i;function c(b,k,z,$){this.type=b,this.content=k,this.alias=z,this.length=($||"").length|0}c.stringify=function b(k,z){if(typeof k=="string")return k;if(Array.isArray(k)){var $="";return k.forEach(function(ee){$+=b(ee,z)}),$}var F={type:k.type,content:b(k.content,z),tag:"span",classes:["token",k.type],attributes:{},language:z},U=k.alias;U&&(Array.isArray(U)?Array.prototype.push.apply(F.classes,U):F.classes.push(U)),i.hooks.run("wrap",F);var L="";for(var O in F.attributes)L+=" "+O+'="'+(F.attributes[O]||"").replace(/"/g,"&quot;")+'"';return"<"+F.tag+' class="'+F.classes.join(" ")+'"'+L+">"+F.content+"</"+F.tag+">"};function p(b,k,z,$){b.lastIndex=k;var F=b.exec(z);if(F&&$&&F[1]){var U=F[1].length;F.index+=U,F[0]=F[0].slice(U)}return F}function u(b,k,z,$,F,U){for(var L in z)if(!(!z.hasOwnProperty(L)||!z[L])){var O=z[L];O=Array.isArray(O)?O:[O];for(var ee=0;ee<O.length;++ee){if(U&&U.cause==L+","+ee)return;var oe=O[ee],q=oe.inside,pe=!!oe.lookbehind,Ae=!!oe.greedy,Le=oe.alias;if(Ae&&!oe.pattern.global){var be=oe.pattern.toString().match(/[imsuy]*$/)[0];oe.pattern=RegExp(oe.pattern.source,be+"g")}for(var de=oe.pattern||oe,te=$.next,Me=F;te!==k.tail&&!(U&&Me>=U.reach);Me+=te.value.length,te=te.next){var Y=te.value;if(k.length>b.length)return;if(!(Y instanceof c)){var je=1,ye;if(Ae){if(ye=p(de,Me,b,pe),!ye||ye.index>=b.length)break;var ve=ye.index,et=ye.index+ye[0].length,Oe=Me;for(Oe+=te.value.length;ve>=Oe;)te=te.next,Oe+=te.value.length;if(Oe-=te.value.length,Me=Oe,te.value instanceof c)continue;for(var we=te;we!==k.tail&&(Oe<et||typeof we.value=="string");we=we.next)je++,Oe+=we.value.length;je--,Y=b.slice(Me,Oe),ye.index-=Me}else if(ye=p(de,0,Y,pe),!ye)continue;var ve=ye.index,E=ye[0],y=Y.slice(0,ve),H=Y.slice(ve+E.length),D=Me+Y.length;U&&D>U.reach&&(U.reach=D);var f=te.prev;y&&(f=g(k,f,y),Me+=y.length),m(k,f,je);var x=new c(L,q?i.tokenize(E,q):E,Le,E);if(te=g(k,f,x),H&&g(k,te,H),je>1){var S={cause:L+","+ee,reach:D};u(b,k,z,te.prev,Me,S),U&&S.reach>U.reach&&(U.reach=S.reach)}}}}}}function d(){var b={value:null,prev:null,next:null},k={value:null,prev:b,next:null};b.next=k,this.head=b,this.tail=k,this.length=0}function g(b,k,z){var $=k.next,F={value:z,prev:k,next:$};return k.next=F,$.prev=F,b.length++,F}function m(b,k,z){for(var $=k.next,F=0;F<z&&$!==b.tail;F++)$=$.next;k.next=$,$.prev=k,b.length-=F}function C(b){for(var k=[],z=b.head.next;z!==b.tail;)k.push(z.value),z=z.next;return k}if(!r.document)return r.addEventListener&&(i.disableWorkerMessageHandler||r.addEventListener("message",function(b){var k=JSON.parse(b.data),z=k.language,$=k.code,F=k.immediateClose;r.postMessage(i.highlight($,i.languages[z],z)),F&&r.close()},!1)),i;var w=i.util.currentScript();w&&(i.filename=w.src,w.hasAttribute("data-manual")&&(i.manual=!0));function A(){i.manual||i.highlightAll()}if(!i.manual){var R=document.readyState;R==="loading"||R==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return i})(t);e.exports&&(e.exports=n),typeof Zi<"u"&&(Zi.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(o,s){var a={};a["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};i["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var c={};c[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(r){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",o=function(w,A){return"✖ Error "+w+" while fetching file: "+A},s="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",c="loading",p="loaded",u="failed",d="pre[data-src]:not(["+i+'="'+p+'"]):not(['+i+'="'+c+'"])';function g(w,A,R){var b=new XMLHttpRequest;b.open("GET",w,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?A(b.responseText):b.status>=400?R(o(b.status,b.statusText)):R(s))},b.send(null)}function m(w){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(A){var R=Number(A[1]),b=A[2],k=A[3];return b?k?[R,Number(k)]:[R,void 0]:[R,R]}}n.hooks.add("before-highlightall",function(w){w.selector+=", "+d}),n.hooks.add("before-sanity-check",function(w){var A=w.element;if(A.matches(d)){w.code="",A.setAttribute(i,c);var R=A.appendChild(document.createElement("CODE"));R.textContent=r;var b=A.getAttribute("data-src"),k=w.language;if(k==="none"){var z=(/\.(\w+)$/.exec(b)||[,"none"])[1];k=a[z]||z}n.util.setLanguage(R,k),n.util.setLanguage(A,k);var $=n.plugins.autoloader;$&&$.loadLanguages(k),g(b,function(F){A.setAttribute(i,p);var U=m(A.getAttribute("data-range"));if(U){var L=F.split(/\r\n?|\n/g),O=U[0],ee=U[1]==null?L.length:U[1];O<0&&(O+=L.length),O=Math.max(0,Math.min(O-1,L.length)),ee<0&&(ee+=L.length),ee=Math.max(0,Math.min(ee,L.length)),F=L.slice(O,ee).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(O+1))}R.textContent=F,n.highlightElement(R)},function(F){A.setAttribute(i,u),R.textContent=F})}}),n.plugins.fileHighlight={highlight:function(A){for(var R=(A||document).querySelectorAll(d),b=0,k;k=R[b++];)n.highlightElement(k)}};var C=!1;n.fileHighlight=function(){C||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),C=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(To)),To.exports}var gg=mg();const $o=fg(gg);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var Qi={},ea;function bg(){return ea||(ea=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),Qi}bg();Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var s={};s[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},Prism.languages.insertBefore("markup","cdata",s)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);const hg={class:"relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800 text-zinc-100 shadow-sm"},xg={class:"flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5 text-xs text-zinc-400"},vg={class:"font-mono"},yg={class:"max-h-[480px] overflow-auto p-4 text-xs font-mono leading-relaxed"},wg={class:"!m-0 !p-0 !bg-transparent"},kg=["innerHTML"],ta=ce({__name:"CodeBlock",props:{code:{},language:{default:"html"},filename:{}},setup(e){const t=e,n=N(!1),r=ge(()=>{const s=$o.languages[t.language]||$o.languages.markup;return $o.highlight(t.code.trim(),s,t.language)});async function o(){try{await navigator.clipboard.writeText(t.code.trim()),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(s){console.error("Failed to copy",s)}}return(s,a)=>(h(),_("div",hg,[l("div",xg,[l("span",vg,V(t.filename||t.language.toUpperCase()),1),l("button",{type:"button",class:"inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",onClick:o},[n.value?(h(),he(I(qt),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(h(),he(I(ar),{key:1,class:"h-3.5 w-3.5"})),l("span",null,V(n.value?"已复制！":"复制代码"),1)])]),l("div",yg,[l("pre",wg,[l("code",{innerHTML:r.value},null,8,kg)])])]))}}),zg={class:"space-y-4"},_g={class:"space-y-1"},Cg={class:"text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},Sg={class:"text-sm text-zinc-500 dark:text-zinc-400"},Ag={class:"overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-sm transition-colors"},Ig={class:"flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 bg-zinc-50/80 px-4 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/60"},Rg={class:"flex items-center gap-1 rounded-lg bg-zinc-200/60 p-1 dark:bg-zinc-800/60 text-xs font-medium"},Mg={key:0,class:"flex items-center gap-2 text-xs"},Tg={class:"flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-0.5"},$g={class:"relative"},Eg={class:"p-4"},Pg={class:"p-4"},Fg={key:0,class:"mt-8 space-y-3"},Lg={class:"overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800"},Og={class:"w-full text-left text-xs"},Vg={class:"divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono"},Dg={class:"px-4 py-2.5 font-bold text-blue-600 dark:text-blue-400"},jg={class:"px-4 py-2.5 text-pink-600 dark:text-pink-400"},Bg={class:"px-4 py-2.5 text-zinc-500"},Ng={class:"px-4 py-2.5 font-sans text-zinc-600 dark:text-zinc-300"},Ug=ce({__name:"ComponentPreview",props:{title:{},description:{},componentCode:{},usageCode:{},componentFilename:{},propsList:{}},setup(e){const t=e,n=N("preview"),r=N("default"),o=N(0),s=N(!0);let a=null;lt(()=>{s.value=document.documentElement.classList.contains("dark"),a=new MutationObserver(()=>{s.value=document.documentElement.classList.contains("dark")}),a.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}),ct(()=>{a==null||a.disconnect()});const i=ge(()=>r.value==="dark"?!0:r.value==="light"?!1:s.value);function c(){o.value++}return(p,u)=>(h(),_("div",zg,[l("div",_g,[l("h2",Cg,V(t.title),1),l("p",Sg,V(t.description),1)]),l("div",Ag,[l("div",Ig,[l("div",Rg,[l("button",{type:"button",class:T(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="preview"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[0]||(u[0]=d=>n.value="preview")},[v(I(Il),{class:"h-3.5 w-3.5"}),u[6]||(u[6]=l("span",null,"实时效果",-1))],2),l("button",{type:"button",class:T(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="component"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[1]||(u[1]=d=>n.value="component")},[v(I(Zo),{class:"h-3.5 w-3.5"}),l("span",null,"组件源码 ("+V(t.componentFilename)+")",1)],2),l("button",{type:"button",class:T(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="usage"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[2]||(u[2]=d=>n.value="usage")},[v(I(Zo),{class:"h-3.5 w-3.5"}),u[7]||(u[7]=l("span",null,"业务调用 (Usage.vue)",-1))],2)]),n.value==="preview"?(h(),_("div",Mg,[u[8]||(u[8]=l("span",{class:"text-zinc-400"},"视窗底色：",-1)),l("div",Tg,[l("button",{type:"button",class:T(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="default"?"bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[3]||(u[3]=d=>r.value="default")}," 自适应 ",2),l("button",{type:"button",class:T(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="light"?"bg-white text-zinc-900 shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[4]||(u[4]=d=>r.value="light")}," 亮白 ",2),l("button",{type:"button",class:T(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="dark"?"bg-black text-white shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[5]||(u[5]=d=>r.value="dark")}," 暗黑 ",2)]),l("button",{type:"button",class:"inline-flex items-center gap-1 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",title:"重新触发动效",onClick:c},[v(I(ap),{class:"h-3.5 w-3.5"})])])):fe("",!0)]),l("div",$g,[Cn(l("div",{class:T(["relative flex min-h-[360px] w-full items-center justify-center overflow-hidden p-8 transition-colors duration-200",i.value?"dark bg-black text-zinc-100":"bg-zinc-100/80 text-zinc-900"])},[(h(),_("div",{key:o.value,class:"w-full flex items-center justify-center"},[at(p.$slots,"default",{isDark:i.value})]))],2),[[ko,n.value==="preview"]]),Cn(l("div",Eg,[v(ta,{code:t.componentCode,filename:t.componentFilename,language:"html"},null,8,["code","filename"])],512),[[ko,n.value==="component"]]),Cn(l("div",Pg,[v(ta,{code:t.usageCode,filename:"UsageExample.vue",language:"html"},null,8,["code"])],512),[[ko,n.value==="usage"]])])]),t.propsList&&t.propsList.length>0?(h(),_("div",Fg,[u[10]||(u[10]=l("h3",{class:"text-base font-semibold text-zinc-900 dark:text-zinc-100"}," Props 属性参考 ",-1)),l("div",Lg,[l("table",Og,[u[9]||(u[9]=l("thead",{class:"border-b border-zinc-200 bg-zinc-50/80 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"},[l("tr",null,[l("th",{class:"px-4 py-2.5"},"属性名"),l("th",{class:"px-4 py-2.5"},"类型"),l("th",{class:"px-4 py-2.5"},"默认值"),l("th",{class:"px-4 py-2.5"},"说明")])],-1)),l("tbody",Vg,[(h(!0),_(ae,null,Re(t.propsList,d=>(h(),_("tr",{key:d.name,class:"text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40"},[l("td",Dg,V(d.name),1),l("td",jg,V(d.type),1),l("td",Bg,V(d.default),1),l("td",Ng,V(d.description),1)]))),128))])])])])):fe("",!0)]))}}),Hg=["onMouseenter","onClick"],Gg={key:0,class:"pointer-events-none absolute -top-9 z-50 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-800/95 dark:text-zinc-200"},qg=ce({__name:"Dock",props:{items:{},iconSize:{default:44},iconMagnification:{default:68},iconDistance:{default:120},direction:{default:"bottom"},class:{}},setup(e){const t=e,n=N(null),r=N(null),o=N(null);function s(d){r.value=d.clientX}function a(){r.value=null,o.value=null}function i(d){if(r.value===null||!d)return 1;const g=d.getBoundingClientRect(),m=g.left+g.width/2,C=Math.abs(r.value-m);if(C>t.iconDistance)return 1;const w=C/t.iconDistance,A=(t.iconMagnification-t.iconSize)/t.iconSize,R=.5*(1+Math.cos(w*Math.PI));return 1+A*R}const c=N([]);function p(d,g){d&&(c.value[g]=d)}function u(d){const g=c.value[d],m=i(g);return Math.round(t.iconSize*m)}return(d,g)=>(h(),_("div",{ref_key:"dockRef",ref:n,class:T(I(xe)("mx-auto flex h-16 items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/70 px-4 py-2 shadow-xl backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 transition-all duration-200 select-none",t.direction==="bottom"&&"items-end",t.direction==="top"&&"items-start",t.direction==="middle"&&"items-center",t.class)),onMousemove:s,onMouseleave:a},[t.items&&t.items.length>0?(h(!0),_(ae,{key:0},Re(t.items,(m,C)=>(h(),_("div",{key:m.id,ref_for:!0,ref:w=>p(w,C),class:"group relative flex items-center justify-center cursor-pointer transition-all duration-100 ease-out",style:Ie({width:`${u(C)}px`,height:`${u(C)}px`}),onMouseenter:w=>o.value=m.label||null,onClick:w=>m.onClick&&m.onClick()},[(h(),he(Gt(m.href?"a":"button"),{href:m.href,class:T(["flex h-full w-full items-center justify-center rounded-2xl border transition-colors shadow-sm","border-zinc-200/70 bg-white/90 text-zinc-700 hover:text-zinc-950","dark:border-zinc-700/60 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:text-white"])},{default:Z(()=>[(h(),he(Gt(m.icon),{class:"h-1/2 w-1/2 transition-transform duration-100"}))]),_:2},1032,["href"])),v(ln,{name:"dock-fade"},{default:Z(()=>[o.value===m.label&&m.label?(h(),_("div",Gg,V(m.label),1)):fe("",!0)]),_:2},1024),g[0]||(g[0]=l("span",{class:"absolute -bottom-1.5 h-1 w-1 rounded-full bg-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-zinc-500"},null,-1))],44,Hg))),128)):at(d.$slots,"default",{},void 0,!0,1)],34))}}),Wg=qe(qg,[["__scopeId","data-v-3c8b0d2e"]]),Kg={key:0,class:"pointer-events-none absolute inset-0 h-full w-full select-none",xmlns:"http://www.w3.org/2000/svg"},Xg=["r","stroke","stroke-width"],Yg={class:"orbit-rotator pointer-events-auto h-full w-full"},Zg={class:"orbit-item pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"},Jg=ce({__name:"OrbitLogos",props:{radius:{default:120},duration:{default:20},delay:{default:0},reverse:{type:Boolean,default:!1},path:{type:Boolean,default:!0},pathColor:{},pathWidth:{default:1},tiltAngle:{default:0},class:{}},setup(e){const t=e,n=ge(()=>({"--radius":`${t.radius}px`,"--duration":`${t.duration}s`,"--delay":`-${t.delay}s`,"--direction":t.reverse?"reverse":"normal","--counter-direction":t.reverse?"normal":"reverse","--tilt":`${t.tiltAngle}deg`,width:`${t.radius*2}px`,height:`${t.radius*2}px`}));return(r,o)=>(h(),_("div",{style:Ie(n.value),class:T(I(xe)("pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full [transform-style:preserve-3d]",t.class))},[t.path?(h(),_("svg",Kg,[l("circle",{class:"stroke-zinc-300/60 dark:stroke-zinc-800/80 stroke-dashed",cx:"50%",cy:"50%",r:t.radius,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-dasharray":"4 4"},null,8,Xg)])):fe("",!0),l("div",Yg,[l("div",Zg,[at(r.$slots,"default",{},void 0,!0)])])],6))}}),zr=qe(Jg,[["__scopeId","data-v-583093f1"]]),Qg=["src","alt"],eb={class:"pointer-events-none absolute bottom-4 right-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},tb=["src","alt"],nb={class:"pointer-events-none absolute bottom-4 left-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},rb={class:"absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-zinc-800 shadow-xl backdrop-blur-md transition-transform duration-100 hover:scale-110 active:scale-95 dark:border-zinc-700/80 dark:bg-zinc-900/90 dark:text-zinc-200"},ob=ce({__name:"ImageCompare",props:{beforeImage:{},afterImage:{},beforeLabel:{default:"Before"},afterLabel:{default:"After"},initialPosition:{default:50},class:{}},setup(e){const t=e,n=N(null),r=N(t.initialPosition),o=N(!1);function s(u){if(!n.value)return;const d=n.value.getBoundingClientRect(),g=u-d.left,m=Math.min(Math.max(g/d.width*100,0),100);r.value=Number(m.toFixed(2))}function a(u){o.value=!0,s(u.clientX)}function i(u){o.value&&s(u.clientX)}function c(){o.value=!1}function p(u){!o.value||u.touches.length===0||s(u.touches[0].clientX)}return lt(()=>{window.addEventListener("mouseup",c),window.addEventListener("mousemove",i),window.addEventListener("touchend",c),window.addEventListener("touchmove",p)}),ct(()=>{window.removeEventListener("mouseup",c),window.removeEventListener("mousemove",i),window.removeEventListener("touchend",c),window.removeEventListener("touchmove",p)}),(u,d)=>(h(),_("div",{ref_key:"containerRef",ref:n,class:T(I(xe)("relative select-none overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 shadow-xl cursor-ew-resize dark:border-zinc-800/80",t.class)),onMousedown:a,onTouchstart:d[0]||(d[0]=g=>o.value=!0)},[l("img",{src:t.afterImage,alt:t.afterLabel,class:"pointer-events-none h-full w-full object-cover"},null,8,Qg),l("div",eb,V(t.afterLabel),1),l("div",{class:"pointer-events-none absolute inset-0 h-full w-full overflow-hidden",style:Ie({clipPath:`inset(0 ${100-r.value}% 0 0)`})},[l("img",{src:t.beforeImage,alt:t.beforeLabel,class:"h-full w-full object-cover"},null,8,tb),l("div",nb,V(t.beforeLabel),1)],4),l("div",{class:"pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]",style:Ie({left:`${r.value}%`})},[l("div",rb,[v(I(Sl),{class:"h-4 w-4"})])],4)],34))}}),sb={class:"group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/90 dark:bg-zinc-950/90"},ib={class:"flex items-center gap-2.5 min-w-0"},ab={class:"relative flex h-3 w-3 shrink-0 items-center justify-center"},lb={class:"flex flex-col min-w-0"},cb={class:"flex items-center gap-2"},db={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate"},ub={class:"text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5"},pb={class:"flex items-center gap-2 shrink-0 text-xs text-zinc-500"},fb={key:0,class:"flex items-center gap-1 font-mono text-[11px] rounded-md bg-zinc-100 px-2 py-0.5 dark:bg-zinc-900 dark:text-zinc-300"},mb={key:0,class:"border-t border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-2.5"},gb={class:"mt-0.5 shrink-0"},bb={key:3,class:"inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 text-[10px] text-zinc-400 dark:border-zinc-700"},hb={class:"flex-1 min-w-0"},xb={class:"flex items-center justify-between"},vb={key:0,class:"font-mono text-[10px] text-zinc-400 shrink-0 ml-2"},yb={key:0,class:"text-[11px] text-zinc-400 font-mono mt-0.5 truncate"},wb=ce({__name:"AgentStatus",props:{status:{default:"thinking"},agentName:{default:"Aura AI Agent"},currentTask:{default:"Thinking and orchestrating subagents..."},elapsed:{type:Boolean,default:!0},steps:{default:()=>[{id:1,name:"Understand user prompt requirements",status:"done",duration:"0.4s"},{id:2,name:"Search codebase for components & hooks",status:"done",duration:"1.2s"},{id:3,name:"Run Playwright headless visual verification",status:"running",detail:"Evaluating DOM computed styles..."},{id:4,name:"Commit and build production artifacts",status:"pending"}]},class:{}},setup(e){const t=e,n=N(!1),r=N(0);let o=null;lt(()=>{t.elapsed&&(o=setInterval(()=>{r.value+=.1},100))}),ct(()=>{o&&clearInterval(o)});const s=ge(()=>`${r.value.toFixed(1)}s`),a=ge(()=>{switch(t.status){case"thinking":return{icon:Fe,label:"思考推演中",color:"text-sky-500 dark:text-sky-400",badgeBg:"bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",pulseBg:"bg-sky-500"};case"running":return{icon:Ii,label:"自主执行中",color:"text-blue-500 dark:text-blue-400 animate-spin",badgeBg:"bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",pulseBg:"bg-blue-500"};case"tool_call":return{icon:gp,label:"调用工具中",color:"text-amber-500 dark:text-amber-400",badgeBg:"bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",pulseBg:"bg-amber-500"};case"success":return{icon:Ci,label:"任务已闭环",color:"text-emerald-500 dark:text-emerald-400",badgeBg:"bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",pulseBg:"bg-emerald-500"};case"error":return{icon:_i,label:"出现异常",color:"text-rose-500 dark:text-rose-400",badgeBg:"bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",pulseBg:"bg-rose-500"};default:return{icon:Fe,label:"待命中",color:"text-zinc-400",badgeBg:"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",pulseBg:"bg-zinc-400"}}});return(i,c)=>(h(),_("div",{class:T(I(xe)("w-full max-w-lg transition-all duration-300",t.class))},[l("div",sb,[l("div",{class:"flex items-center justify-between gap-3 px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60",onClick:c[0]||(c[0]=p=>n.value=!n.value)},[l("div",ib,[l("div",ab,[l("span",{class:T(["absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",a.value.pulseBg])},null,2),l("span",{class:T(["relative inline-flex h-2 w-2 rounded-full",a.value.pulseBg])},null,2)]),l("div",lb,[l("div",cb,[l("span",db,V(t.agentName),1),l("span",{class:T(["rounded-full border px-2 py-0.2 text-[10px] font-semibold",a.value.badgeBg])},V(a.value.label),3)]),l("p",ub,V(t.currentTask),1)])]),l("div",pb,[t.elapsed?(h(),_("div",fb,[v(I(Al),{class:"h-3 w-3 text-zinc-400"}),l("span",null,V(s.value),1)])):fe("",!0),v(I(fr),{class:T(["h-4 w-4 text-zinc-400 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])]),v(ln,{name:"agent-expand"},{default:Z(()=>[n.value&&t.steps&&t.steps.length>0?(h(),_("div",mb,[c[1]||(c[1]=l("div",{class:"text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2"}," 执行轨迹步骤 (Execution Steps) ",-1)),(h(!0),_(ae,null,Re(t.steps,(p,u)=>(h(),_("div",{key:p.id,class:"flex items-start gap-2.5 text-xs"},[l("div",gb,[p.status==="done"?(h(),he(I(Ci),{key:0,class:"h-4 w-4 text-emerald-500"})):p.status==="running"?(h(),he(I(Ii),{key:1,class:"h-4 w-4 text-sky-500 animate-spin"})):p.status==="error"?(h(),he(I(_i),{key:2,class:"h-4 w-4 text-rose-500"})):(h(),_("span",bb,V(u+1),1))]),l("div",hb,[l("div",xb,[l("span",{class:T(["font-medium truncate",p.status==="done"&&"text-zinc-700 dark:text-zinc-300",p.status==="running"&&"text-sky-600 dark:text-sky-400 font-semibold",p.status==="pending"&&"text-zinc-400 dark:text-zinc-500",p.status==="error"&&"text-rose-500 font-semibold"])},V(p.name),3),p.duration?(h(),_("span",vb,V(p.duration),1)):fe("",!0)]),p.detail?(h(),_("p",yb,V(p.detail),1)):fe("",!0)])]))),128))])):fe("",!0)]),_:1})])],2))}}),kb=qe(wb,[["__scopeId","data-v-d55be07e"]]),zb={class:"flex h-10 w-full items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 select-none"},_b={class:"flex items-center gap-1.5 text-[11px] font-medium text-zinc-400"},Cb={class:"truncate max-w-[220px] sm:max-w-md"},Sb={key:0,class:"flex items-center gap-2"},Ab={key:1,class:"w-12"},Ib={class:"text-blue-400 select-none font-bold"},Rb={class:"text-zinc-100 font-semibold flex-1 break-all"},Mb={key:0,class:"inline-block h-4 w-2 translate-y-0.5 bg-blue-500 animate-pulse ml-0.5"},Tb={key:1,class:"text-emerald-400 font-medium break-all"},$b={key:2,class:"text-rose-400 font-medium break-all"},Eb={key:3,class:"text-amber-400 font-medium break-all"},Pb={key:4,class:"text-sky-400 font-medium break-all"},Fb={key:5,class:"text-zinc-400 break-all"},Lb={key:0,class:"flex items-center gap-2 pt-1"},Ob=ce({__name:"TypewriterTerminal",props:{title:{default:"zsh - aura@developer:~ (80x24)"},lines:{default:()=>[{type:"input",text:"pnpm dlx aura-ui@latest add agent-status dock"},{type:"output",text:"⠋ Resolving packages & peer dependencies..."},{type:"output",text:"✔ Cloned src/components/ui/AgentStatus.vue"},{type:"output",text:"✔ Cloned src/components/ui/Dock.vue"},{type:"success",text:"✨ Successfully installed 2 motion primitives in 260ms."},{type:"input",text:"aura test --visual-regression"},{type:"info",text:"ℹ Running Playwright headless test in Chromium..."},{type:"success",text:"✔ All 19 components passed 60fps frame rate check!"}]},typingSpeed:{default:35},pauseEnd:{default:3500},loop:{type:Boolean,default:!0},controls:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=N([]),r=N(0),o=N(0),s=N(!1),a=N(!1),i=N(!1),c=N(null);let p=null;function u(){c.value&&(c.value.scrollTop=c.value.scrollHeight)}function d(){p&&clearTimeout(p),n.value=[],r.value=0,o.value=0,s.value=!1,a.value=!1,g()}function g(){if(!t.lines||t.lines.length===0)return;if(r.value>=t.lines.length){s.value=!1,a.value=!0,t.loop&&(p=setTimeout(()=>{d()},t.pauseEnd));return}const C=t.lines[r.value];if(C.type==="input")if(s.value=!0,o.value===0&&n.value.push({type:"input",text:"",prefix:C.prefix||"$ "}),o.value<C.text.length){const w=n.value[n.value.length-1];w.text+=C.text[o.value],o.value++,u();const A=Math.floor(Math.random()*25)-10,R=Math.max(15,t.typingSpeed+A);p=setTimeout(g,R)}else o.value=0,r.value++,s.value=!1,u(),p=setTimeout(g,400);else{s.value=!1,n.value.push({type:C.type,text:C.text,prefix:C.prefix}),r.value++,u();const w=C.delay??220;p=setTimeout(g,w)}}function m(){const C=t.lines.map(w=>`${w.prefix||(w.type==="input"?"$ ":"")}${w.text}`).join(`
`);navigator.clipboard.writeText(C),i.value=!0,setTimeout(()=>{i.value=!1},2e3)}return lt(()=>{d()}),ct(()=>{p&&clearTimeout(p)}),vt(()=>t.lines,()=>{d()},{deep:!0}),(C,w)=>(h(),_("div",{class:T(I(xe)("relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 font-mono text-xs sm:text-sm text-zinc-300 shadow-2xl backdrop-blur-md dark:border-zinc-800/80",t.class))},[l("div",zb,[w[0]||(w[0]=l("div",{class:"flex items-center gap-2"},[l("span",{class:"h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm transition-transform hover:scale-110"}),l("span",{class:"h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm transition-transform hover:scale-110"}),l("span",{class:"h-3 w-3 rounded-full bg-[#27c93f] shadow-sm transition-transform hover:scale-110"})],-1)),l("div",_b,[v(I(es),{class:"h-3.5 w-3.5 text-zinc-500"}),l("span",Cb,V(t.title),1)]),t.controls?(h(),_("div",Sb,[l("button",{onClick:d,title:"重新播放",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[v(I(lp),{class:"h-3.5 w-3.5"})]),l("button",{onClick:m,title:"复制所有命令",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[i.value?(h(),he(I(qt),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(h(),he(I(ar),{key:1,class:"h-3.5 w-3.5"}))])])):(h(),_("div",Ab))]),l("div",{ref_key:"terminalBodyRef",ref:c,class:"max-h-80 min-h-[220px] overflow-y-auto p-4 sm:p-5 space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-800"},[(h(!0),_(ae,null,Re(n.value,(A,R)=>(h(),_("div",{key:R,class:"flex items-start gap-2 leading-relaxed"},[A.type==="input"?(h(),_(ae,{key:0},[l("span",Ib,V(A.prefix||"$ "),1),l("span",Rb,[Ve(V(A.text)+" ",1),s.value&&R===n.value.length-1?(h(),_("span",Mb)):fe("",!0)])],64)):A.type==="success"?(h(),_("span",Tb,V(A.text),1)):A.type==="error"?(h(),_("span",$b,V(A.text),1)):A.type==="warning"?(h(),_("span",Eb,V(A.text),1)):A.type==="info"?(h(),_("span",Pb,V(A.text),1)):(h(),_("span",Fb,V(A.text),1))]))),128)),a.value?(h(),_("div",Lb,[...w[1]||(w[1]=[l("span",{class:"text-blue-400 font-bold select-none"},"$ ",-1),l("span",{class:"inline-block h-4 w-2 bg-zinc-500 animate-pulse"},null,-1)])])):fe("",!0)],512)],2))}}),Vb={class:"p-3 sm:p-4 pb-2"},Db=["placeholder"],jb={class:"flex items-center justify-between border-t border-zinc-100 px-3 py-2.5 dark:border-zinc-900"},Bb={class:"flex items-center gap-1.5 sm:gap-2"},Nb={class:"relative"},Ub={key:0,class:"absolute bottom-full left-0 mb-2 w-52 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-2xl backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 select-none"},Hb=["onClick"],Gb={key:0,class:"rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.2 text-[9px] text-zinc-500"},qb={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"上传图像或文件"},Wb={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"语音输入"},Kb={class:"flex items-center gap-2"},Xb=["disabled"],Yb=ce({__name:"PromptInput",props:{modelValue:{default:""},placeholder:{default:"向 Aura AI 提问、生成 UI 动效，或输入 / 触发指令..."},loading:{type:Boolean,default:!1},selectedModel:{default:"deepseek-r1"},models:{default:()=>[{id:"deepseek-r1",name:"DeepSeek R1",badge:"Reasoning"},{id:"claude-3-7-sonnet",name:"Claude 3.7 Sonnet",badge:"Hybrid"},{id:"gpt-4o",name:"GPT-4o Omni",badge:"Multimodal"}]},webSearch:{type:Boolean,default:!1},maxRows:{default:6},class:{}},emits:["update:modelValue","submit","stop","update:selectedModel","toggleWebSearch"],setup(e,{emit:t}){const n=e,r=t,o=N(null),s=N(!1),a=N(!1),i=N(n.webSearch),c=ge({get:()=>n.modelValue,set:A=>r("update:modelValue",A)}),p=ge(()=>n.models.find(A=>A.id===n.selectedModel)||n.models[0]);function u(A){const R=A.target;c.value=R.value,d()}function d(){if(!o.value)return;o.value.style.height="auto";const A=Math.min(o.value.scrollHeight,24*n.maxRows);o.value.style.height=`${A}px`}function g(A){A.key==="Enter"&&!A.shiftKey&&(A.preventDefault(),m())}function m(){if(n.loading){r("stop");return}c.value.trim()&&r("submit",c.value)}function C(){i.value=!i.value,r("toggleWebSearch",i.value)}function w(A){r("update:selectedModel",A),a.value=!1}return(A,R)=>(h(),_("div",{class:T(I(xe)("group relative w-full rounded-2xl border transition-all duration-300 shadow-xl backdrop-blur-xl",s.value?"border-blue-500/80 shadow-[0_0_25px_rgba(59,130,246,0.18)] dark:border-blue-400/80 dark:shadow-[0_0_35px_rgba(56,189,248,0.22)]":"border-zinc-200/90 hover:border-zinc-300 dark:border-zinc-800/90 dark:hover:border-zinc-700","bg-white/85 dark:bg-zinc-950/85",n.class))},[l("div",{class:T(["pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-opacity duration-300",s.value?"opacity-100":"opacity-0"])},null,2),l("div",Vb,[Cn(l("textarea",{ref_key:"textareaRef",ref:o,"onUpdate:modelValue":R[0]||(R[0]=b=>c.value=b),placeholder:n.placeholder,rows:"1",onFocus:R[1]||(R[1]=b=>s.value=!0),onBlur:R[2]||(R[2]=b=>s.value=!1),onInput:u,onKeydown:g,class:"w-full resize-none border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 bg-transparent text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-500 leading-relaxed font-sans shadow-none",style:{outline:"none","box-shadow":"none"}},null,40,Db),[[Is,c.value]])]),l("div",jb,[l("div",Bb,[l("div",Nb,[l("button",{type:"button",onClick:R[3]||(R[3]=b=>a.value=!a.value),class:"flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"},[v(I(Fe),{class:"h-3.5 w-3.5 text-blue-500"}),l("span",null,V(p.value.name),1),v(I(fr),{class:"h-3 w-3 text-zinc-400"})]),v(ln,{name:"model-pop"},{default:Z(()=>[a.value?(h(),_("div",Ub,[R[4]||(R[4]=l("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," 切换推理基座 ",-1)),(h(!0),_(ae,null,Re(n.models,b=>(h(),_("button",{key:b.id,type:"button",onClick:k=>w(b.id),class:T(["flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",b.id===n.selectedModel?"bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400":"text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"])},[l("span",null,V(b.name),1),b.badge?(h(),_("span",Gb,V(b.badge),1)):fe("",!0)],10,Hb))),128))])):fe("",!0)]),_:1})]),l("button",{type:"button",onClick:C,class:T(["flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium transition-colors border",i.value?"border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400":"border-transparent text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"]),title:"联网实时搜索"},[v(I(Ur),{class:"h-3.5 w-3.5"}),R[5]||(R[5]=l("span",{class:"hidden sm:inline"},"深度搜索",-1))],2),l("button",qb,[v(I(op),{class:"h-3.5 w-3.5"})]),l("button",Wb,[v(I(Hr),{class:"h-3.5 w-3.5"})])]),l("div",Kb,[R[6]||(R[6]=l("span",{class:"hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-zinc-400"},[l("span",null,"Enter ↵ 发送")],-1)),l("button",{type:"button",onClick:m,disabled:!n.loading&&!c.value.trim(),class:T(["flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 shadow-md",n.loading?"bg-rose-500 text-white hover:bg-rose-600":c.value.trim()?"bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 active:scale-95":"bg-zinc-100 text-zinc-400 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"])},[n.loading?(h(),he(I(pp),{key:0,class:"h-3.5 w-3.5 fill-current"})):(h(),he(I(Ku),{key:1,class:"h-4 w-4"}))],10,Xb)])])],2))}}),Zb=qe(Yb,[["__scopeId","data-v-22761e01"]]),Jb={class:"flex items-center gap-2.5 text-xs"},Qb={class:"relative flex h-4 w-4 items-center justify-center"},eh={key:0,class:"absolute -inset-1 rounded-full bg-blue-500/20 animate-ping"},th={class:"flex items-center gap-2"},nh={class:"font-bold text-zinc-900 dark:text-zinc-100"},rh={class:"inline-flex items-center gap-1 rounded-md bg-zinc-200/60 px-2 py-0.5 font-mono text-[11px] text-zinc-500 dark:bg-zinc-800/80 dark:text-zinc-400"},oh={key:0,class:"border-t border-zinc-200/70 px-4 py-3.5 dark:border-zinc-800/70"},sh={class:"border-l-2 border-blue-500/70 pl-3.5 font-mono text-xs leading-relaxed text-zinc-600 dark:border-blue-400/70 dark:text-zinc-400 whitespace-pre-wrap select-text"},ih=ce({__name:"ThoughtAccordion",props:{duration:{default:"思考用时 12.6 秒"},status:{default:"complete"},defaultOpen:{type:Boolean,default:!0},thoughtText:{default:`> 1. 解析用户需求：为 Vue 3 全系打造顶级 AI 原生交互动效。
> 2. 几何与物理模型推演：使用 CSS 3D 矩阵解构空间深度，保持 60fps 满帧性能。
> 3. 边界与异常收敛：引入状态机阻尼回弹，确保单文件零配置即刻分发。
> 4. 自愈与验证：通过 Playwright 双模态 Chromium 验证无色彩渗漏，交付闭环。`},class:{}},setup(e){const t=e,n=N(t.defaultOpen),r=N(!1);function o(){navigator.clipboard.writeText(t.thoughtText),r.value=!0,setTimeout(()=>{r.value=!1},2e3)}return(s,a)=>(h(),_("div",{class:T(I(xe)("w-full overflow-hidden rounded-2xl border transition-all duration-300",n.value?"border-zinc-200/90 bg-zinc-50/70 shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/40":"border-zinc-200/60 bg-white/60 hover:border-zinc-300 dark:border-zinc-800/60 dark:bg-zinc-950/60",t.class))},[l("div",{class:"flex items-center justify-between px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40",onClick:a[2]||(a[2]=i=>n.value=!n.value)},[l("div",Jb,[l("div",Qb,[v(I(Fe),{class:T(["h-4 w-4 text-blue-500 transition-transform duration-300",t.status==="thinking"&&"animate-spin"])},null,8,["class"]),t.status==="thinking"?(h(),_("span",eh)):fe("",!0)]),l("div",th,[l("span",nh,V(t.status==="thinking"?"正在深度思考推演...":"已深度思考"),1),l("span",rh,[v(I(Al),{class:"h-3 w-3"}),l("span",null,V(t.duration),1)])])]),l("div",{class:"flex items-center gap-1.5",onClick:a[1]||(a[1]=$n(()=>{},["stop"]))},[l("button",{type:"button",onClick:o,title:"复制思考过程",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[r.value?(h(),he(I(qt),{key:0,class:"h-3.5 w-3.5 text-emerald-500"})):(h(),he(I(ar),{key:1,class:"h-3.5 w-3.5"}))]),l("button",{type:"button",onClick:a[0]||(a[0]=i=>n.value=!n.value),class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[v(I(fr),{class:T(["h-4 w-4 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])])]),v(ln,{name:"thought-slide"},{default:Z(()=>[n.value?(h(),_("div",oh,[l("div",sh,[at(s.$slots,"default",{},()=>[Ve(V(t.thoughtText),1)],!0)])])):fe("",!0)]),_:3})],2))}}),ah=qe(ih,[["__scopeId","data-v-00c62984"]]),lh=["onClick","onMouseenter"],ch=ce({__name:"FluidTabs",props:{modelValue:{default:""},tabs:{default:()=>[]},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=N(null),s=N([]),a=N({left:0,width:0,opacity:0}),i=N({left:0,width:0,opacity:0});function c(m,C){m&&(s.value[C]=m)}function p(){ys(()=>{if(!o.value)return;const m=n.tabs.findIndex(A=>A.id===n.modelValue);if(m===-1||!s.value[m]){a.value.opacity=0;return}const C=o.value.getBoundingClientRect(),w=s.value[m].getBoundingClientRect();a.value={left:w.left-C.left,width:w.width,opacity:1}})}function u(m){if(!o.value||!s.value[m])return;const C=o.value.getBoundingClientRect(),w=s.value[m].getBoundingClientRect();i.value={left:w.left-C.left,width:w.width,opacity:1}}function d(){i.value.opacity=0}function g(m){r("update:modelValue",m),r("change",m)}return vt(()=>n.modelValue,()=>{p()}),vt(()=>n.tabs,()=>{p()},{deep:!0}),lt(()=>{!n.modelValue&&n.tabs.length>0&&r("update:modelValue",n.tabs[0].id),p(),window.addEventListener("resize",p)}),(m,C)=>(h(),_("div",{ref_key:"containerRef",ref:o,class:T(I(xe)("relative inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-zinc-100/80 p-1.5 shadow-inner backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80 select-none",n.class)),onMouseleave:d},[l("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-zinc-200/60 transition-all duration-200 ease-out dark:bg-zinc-800/60",style:Ie({left:`${i.value.left}px`,width:`${i.value.width}px`,opacity:i.value.opacity})},null,4),l("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-800 dark:shadow-black/40",style:Ie({left:`${a.value.left}px`,width:`${a.value.width}px`,opacity:a.value.opacity})},null,4),(h(!0),_(ae,null,Re(n.tabs,(w,A)=>(h(),_("button",{key:w.id,ref_for:!0,ref:R=>c(R,A),type:"button",onClick:R=>g(w.id),onMouseenter:R=>u(A),class:T(["relative z-10 flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-200",n.modelValue===w.id?"text-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"])},[w.icon?(h(),he(Gt(w.icon),{key:0,class:T(["h-4 w-4 transition-transform duration-200",n.modelValue===w.id?"scale-110 text-blue-600 dark:text-blue-400":"text-zinc-400"])},null,8,["class"])):fe("",!0),l("span",null,V(w.label),1),w.badge?(h(),_("span",{key:1,class:T(["rounded-full px-1.5 py-0.2 text-[10px] font-bold font-mono transition-colors",n.modelValue===w.id?"bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300":"bg-zinc-200/80 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"])},V(w.badge),3)):fe("",!0)],42,lh))),128))],34))}}),dh={class:"relative z-10 flex items-center gap-2"},uh={key:2},ph={key:3},fh={key:4},mh={key:5,class:"ml-1 inline-block font-mono text-[11px] font-bold"},Eo=ce({__name:"HoldToConfirm",props:{duration:{default:1200},label:{default:"长按以确认执行"},holdingLabel:{default:"保持长按不放..."},confirmedLabel:{default:"已成功确认！"},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,o=N(0),s=N(!1),a=N(!1);let i=null,c=0;const p=ge(()=>{switch(n.variant){case"danger":return{bg:"bg-rose-500/10 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-500/30",fill:"bg-rose-600 dark:bg-rose-500",ring:"text-rose-500",icon:Tl};case"warning":return{bg:"bg-amber-500/10 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-500/30",fill:"bg-amber-600 dark:bg-amber-500",ring:"text-amber-500",icon:$l};default:return{bg:"bg-blue-500/10 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border-blue-500/30",fill:"bg-blue-600 dark:bg-blue-500",ring:"text-blue-500",icon:qt}}});function u(){if(a.value)return;s.value=!0,c=performance.now();function g(){const m=performance.now()-c,C=Math.min(m/n.duration*100,100);o.value=C,C<100?i=requestAnimationFrame(g):(s.value=!1,a.value=!0,r("confirm"),setTimeout(()=>{a.value=!1,o.value=0},2500))}i=requestAnimationFrame(g)}function d(){a.value||(s.value=!1,i!==null&&(cancelAnimationFrame(i),i=null),o.value=0,r("cancel"))}return ct(()=>{i!==null&&cancelAnimationFrame(i)}),(g,m)=>(h(),_("button",{type:"button",class:T(I(xe)("group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-xl border px-5 text-xs sm:text-sm font-semibold select-none transition-all duration-200 active:scale-95 cursor-pointer",p.value.bg,a.value&&"!bg-emerald-600 !border-emerald-600 text-white",n.class)),onMousedown:u,onMouseup:d,onMouseleave:d,onTouchstart:$n(u,["prevent"]),onTouchend:$n(d,["prevent"])},[a.value?fe("",!0):(h(),_("div",{key:0,class:T(["pointer-events-none absolute inset-y-0 left-0 opacity-25 transition-[width] ease-linear",p.value.fill]),style:Ie({width:`${o.value}%`})},null,6)),l("span",dh,[a.value?(h(),he(I(qt),{key:0,class:"h-4 w-4 animate-bounce"})):(h(),he(Gt(p.value.icon),{key:1,class:T(["h-4 w-4 transition-transform duration-200",s.value&&"scale-125 animate-pulse"])},null,8,["class"])),a.value?(h(),_("span",uh,V(n.confirmedLabel),1)):s.value?(h(),_("span",ph,V(n.holdingLabel),1)):(h(),_("span",fh,V(n.label),1)),s.value&&!a.value?(h(),_("span",mh,V(Math.round(o.value))+"% ",1)):fe("",!0)])],34))}}),gh={key:0,class:"flex h-10 items-center gap-1.5 px-4 text-xs sm:text-sm font-semibold text-white"},Po=ce({__name:"ConfirmMorph",props:{label:{default:"删除此资源"},confirmText:{default:"确定删除"},cancelText:{default:"取消"},icon:{},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,o=N(!1),s=N(!1);function a(){s.value||(o.value=!0)}function i(){s.value=!0,r("confirm"),setTimeout(()=>{s.value=!1,o.value=!1},2200)}function c(){o.value=!1,r("cancel")}return(p,u)=>(h(),_("div",{class:T(I(xe)("inline-flex items-center overflow-hidden rounded-xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none",n.variant==="danger"&&"border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20",n.variant==="warning"&&"border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20",n.variant==="primary"&&"border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20",s.value&&"!border-emerald-600 !bg-emerald-600 text-white",n.class))},[s.value?(h(),_("div",gh,[v(I(qt),{class:"h-4 w-4 animate-bounce"}),u[0]||(u[0]=l("span",null,"操作已完成",-1))])):o.value?(h(),_(ae,{key:1},[l("button",{type:"button",onClick:i,class:T(["flex h-10 items-center gap-1.5 px-3.5 text-xs font-semibold text-white transition-colors cursor-pointer",n.variant==="danger"&&"bg-rose-600 hover:bg-rose-700",n.variant==="warning"&&"bg-amber-600 hover:bg-amber-700",n.variant==="primary"&&"bg-blue-600 hover:bg-blue-700"])},[v(I($l),{class:"h-3.5 w-3.5"}),l("span",null,V(n.confirmText),1)],2),l("button",{type:"button",onClick:c,class:"flex h-10 items-center gap-1 border-l border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 px-3 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[v(I(Ms),{class:"h-3.5 w-3.5"}),l("span",null,V(n.cancelText),1)])],64)):(h(),_("button",{key:2,type:"button",onClick:a,class:T(["flex h-10 items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-colors cursor-pointer",n.variant==="danger"&&"text-rose-600 hover:bg-rose-500/10 dark:text-rose-400",n.variant==="warning"&&"text-amber-600 hover:bg-amber-500/10 dark:text-amber-400",n.variant==="primary"&&"text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"])},[(h(),he(Gt(n.icon||I(Tl)),{class:"h-4 w-4"})),l("span",null,V(n.label),1)],2))],2))}}),bh=["width","height","stroke-width"],hh=["width","height","stroke-width"],xh=["d"],vh=["width","height","stroke-width"],Fo=ce({__name:"IconMorph",props:{modelValue:{type:Boolean,default:!1},mode:{default:"menu-close"},size:{default:24},strokeWidth:{default:2},class:{}},emits:["update:modelValue","click"],setup(e,{emit:t}){const n=e,r=t;function o(){r("update:modelValue",!n.modelValue),r("click")}return(s,a)=>(h(),_("button",{type:"button",onClick:o,class:T(I(xe)("relative inline-flex items-center justify-center rounded-xl p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer select-none",n.class)),style:Ie({width:`${n.size+16}px`,height:`${n.size+16}px`})},[n.mode==="menu-close"?(h(),_("svg",{key:0,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[l("line",{x1:"3",y1:"6",x2:"21",y2:"6",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:Ie({transform:n.modelValue?"translateY(6px) rotate(45deg)":"none"})},null,4),l("line",{x1:"3",y1:"12",x2:"21",y2:"12",class:"transition-all duration-200 ease-out origin-center",style:Ie({opacity:n.modelValue?"0":"1",transform:n.modelValue?"scaleX(0)":"scaleX(1)"})},null,4),l("line",{x1:"3",y1:"18",x2:"21",y2:"18",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:Ie({transform:n.modelValue?"translateY(-6px) rotate(-45deg)":"none"})},null,4)],8,bh)):n.mode==="play-pause"?(h(),_("svg",{key:1,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[l("line",{x1:"6",y1:"4",x2:"6",y2:"20",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",style:Ie({transform:n.modelValue?"none":"translateX(1px)"})},null,4),l("path",{d:n.modelValue?"M18 4 L18 20":"M6 4 L20 12 L6 20",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"},null,8,xh)],8,hh)):n.mode==="plus-minus"?(h(),_("svg",{key:2,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round"},[a[0]||(a[0]=l("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1)),l("line",{x1:"12",y1:"5",x2:"12",y2:"19",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:Ie({transform:n.modelValue?"rotate(90deg) scale(0)":"rotate(0deg) scale(1)",opacity:n.modelValue?"0":"1"})},null,4)],8,vh)):fe("",!0)],6))}}),yh={class:"relative inline-flex items-center"},wh=["disabled"],kh={key:1,class:"truncate"},zh={key:2,class:"ml-0.5 rounded-full bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400"},_h={key:0,class:"pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap rounded-md border border-zinc-200/80 bg-white/95 px-2 py-0.5 text-[10px] font-medium text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-800/95 dark:text-zinc-200"},Ch=ce({__name:"ActionButton",props:{label:{},tooltip:{},icon:{},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},badge:{},size:{default:"md"},class:{}},emits:["click"],setup(e,{emit:t}){const n=e,r=t,o=N(!1);function s(a){n.disabled||r("click",a)}return(a,i)=>(h(),_("div",yh,[l("button",{type:"button",disabled:n.disabled,onClick:s,onMouseenter:i[0]||(i[0]=c=>o.value=!0),onMouseleave:i[1]||(i[1]=c=>o.value=!1),class:T(I(xe)("group relative flex items-center justify-center rounded-xl border font-medium select-none transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer","active:scale-90 hover:scale-[1.03]",n.size==="sm"&&"h-8 px-2.5 text-xs gap-1.5",n.size==="md"&&"h-9 px-3 text-xs sm:text-sm gap-2",n.size==="lg"&&"h-11 px-4 text-sm sm:text-base gap-2.5",n.active?"border-blue-500/50 bg-blue-50 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/90 text-zinc-700 shadow-2xs hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800/80 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",n.disabled&&"opacity-50 cursor-not-allowed active:scale-100 hover:scale-100",n.class))},[n.icon?(h(),he(Gt(n.icon),{key:0,class:T(["shrink-0 transition-transform duration-150",n.size==="sm"&&"h-3.5 w-3.5",n.size==="md"&&"h-4 w-4",n.size==="lg"&&"h-5 w-5"])},null,8,["class"])):fe("",!0),n.label?(h(),_("span",kh,V(n.label),1)):fe("",!0),n.badge!==void 0?(h(),_("span",zh,V(n.badge),1)):fe("",!0),at(a.$slots,"default",{},void 0,!0)],42,wh),v(ln,{name:"action-tip"},{default:Z(()=>[o.value&&n.tooltip?(h(),_("div",_h,V(n.tooltip),1)):fe("",!0)]),_:1})]))}}),Nn=qe(Ch,[["__scopeId","data-v-54d32724"]]),Sh={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-1"},Ah=["onClick"],Ih={class:"text-xs font-semibold text-zinc-900 dark:text-zinc-100"},Rh={key:0,class:"text-[10px] text-zinc-400 mt-0.5"},Mh=ce({__name:"SplitButton",props:{label:{default:"立即发布上线"},icon:{default:Rl},items:{default:()=>[{id:"preview",label:"发布至 Staging 预览环境",description:"生成独立预览分支 URL"},{id:"draft",label:"保存为草稿草稿快照",description:"仅团队协作成员可见"},{id:"schedule",label:"定时发布计划",description:"设定指定时间自动化推上线"}]},variant:{default:"primary"},class:{}},emits:["primaryClick","select"],setup(e,{emit:t}){const n=e,r=t,o=N(!1),s=N(null);function a(){o.value=!o.value}function i(){r("primaryClick")}function c(u){o.value=!1,r("select",u),u.onClick&&u.onClick()}function p(u){s.value&&!s.value.contains(u.target)&&(o.value=!1)}return lt(()=>{window.addEventListener("click",p)}),ct(()=>{window.removeEventListener("click",p)}),(u,d)=>(h(),_("div",{ref_key:"containerRef",ref:s,class:T(I(xe)("relative inline-flex items-center select-none",n.class))},[l("div",{class:T(["flex h-10 items-stretch overflow-hidden rounded-xl border shadow-sm transition-all duration-200",n.variant==="primary"&&"border-blue-600 bg-blue-600 text-white hover:bg-blue-500",n.variant==="secondary"&&"border-zinc-200/80 bg-white/90 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800"])},[l("button",{type:"button",onClick:i,class:"flex items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-transform active:scale-95 cursor-pointer"},[(h(),he(Gt(n.icon),{class:"h-4 w-4"})),l("span",null,V(n.label),1)]),l("div",{class:T(["w-px self-stretch",n.variant==="primary"?"bg-blue-400/50":"bg-zinc-200 dark:bg-zinc-800"])},null,2),l("button",{type:"button",onClick:$n(a,["stop"]),class:"flex items-center justify-center px-2.5 transition-colors hover:bg-black/10 active:scale-95 cursor-pointer dark:hover:bg-white/10",title:"更多选项"},[v(I(fr),{class:T(["h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",o.value&&"rotate-180"])},null,8,["class"])])],2),v(ln,{name:"split-menu"},{default:Z(()=>[o.value&&n.items&&n.items.length>0?(h(),_("div",Sh,[(h(!0),_(ae,null,Re(n.items,g=>(h(),_("button",{key:g.id,type:"button",onClick:m=>c(g),class:"flex w-full flex-col items-start rounded-lg px-3 py-2 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"},[l("span",Ih,V(g.label),1),g.description?(h(),_("span",Rh,V(g.description),1)):fe("",!0)],8,Ah))),128))])):fe("",!0)]),_:1})],2))}}),na=qe(Mh,[["__scopeId","data-v-6e3e55b2"]]),Th=["onClick"],$h={class:"font-mono text-[11px] font-bold"},Eh={key:0,type:"button",class:"flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-zinc-300 text-zinc-400 transition-colors hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 cursor-pointer",title:"添加表情反馈"},ra=ce({__name:"Reactions",props:{items:{default:()=>[{id:"fire",emoji:"🔥",count:48,active:!0},{id:"rocket",emoji:"🚀",count:32,active:!1},{id:"heart",emoji:"❤️",count:65,active:!1},{id:"zap",emoji:"⚡",count:19,active:!1},{id:"eyes",emoji:"👀",count:12,active:!1}]},allowAdd:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=N(JSON.parse(JSON.stringify(t.items))),r=N(null);function o(s){s.active=!s.active,s.count+=s.active?1:-1,r.value=s.id,setTimeout(()=>{r.value=null},400)}return(s,a)=>(h(),_("div",{class:T(I(xe)("inline-flex flex-wrap items-center gap-1.5 select-none",t.class))},[(h(!0),_(ae,null,Re(n.value,i=>(h(),_("button",{key:i.id,type:"button",onClick:c=>o(i),class:T(["group flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold transition-all duration-200 active:scale-90 cursor-pointer",i.active?"border-blue-500/50 bg-blue-50/80 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/80 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"])},[l("span",{class:T(["text-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",r.value===i.id&&"scale-135 -translate-y-0.5","group-hover:scale-110"])},V(i.emoji),3),l("span",$h,V(i.count),1)],10,Th))),128)),t.allowAdd?(h(),_("button",Eh,[v(I(up),{class:"h-3.5 w-3.5"})])):fe("",!0)],2))}}),Ph={key:0,class:"text-xs font-semibold text-zinc-600 dark:text-zinc-300"},Fh={class:"relative flex h-full flex-1 items-center px-2.5 min-w-[70px]"},Lh={class:"font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100"},Oh={key:0,class:"font-mono text-[10px] text-zinc-400"},Lo=ce({__name:"ScrubInput",props:{modelValue:{},label:{},min:{default:0},max:{default:100},step:{default:1},sensitivity:{default:1},suffix:{default:"px"},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=N(!1),s=N(!1),a=N(null),i=N(String(n.modelValue));let c=0,p=0;function u(R){let b=R;return n.min!==void 0&&(b=Math.max(n.min,b)),n.max!==void 0&&(b=Math.min(n.max,b)),Math.round(b*100)/100}function d(R){s.value||(o.value=!0,c=R.clientX,p=n.modelValue,window.addEventListener("mousemove",g),window.addEventListener("mouseup",m),document.body.style.cursor="ew-resize",document.body.style.userSelect="none")}function g(R){if(!o.value)return;const b=R.clientX-c;let k=1;R.shiftKey&&(k=10),R.altKey&&(k=.1);const z=Math.round(b/(5/n.sensitivity)*k)*n.step,$=u(p+z);$!==n.modelValue&&r("update:modelValue",$)}function m(){o.value&&(o.value=!1,window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect="",r("change",n.modelValue))}function C(){s.value=!0,i.value=String(n.modelValue),setTimeout(()=>{var R,b;(R=a.value)==null||R.focus(),(b=a.value)==null||b.select()},20)}function w(){s.value=!1;const R=parseFloat(i.value);if(!isNaN(R)){const b=u(R);r("update:modelValue",b),r("change",b)}}const A=ge(()=>{const R=n.max-n.min;return R<=0?0:Math.min(Math.max((n.modelValue-n.min)/R*100,0),100)});return ct(()=>{window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect=""}),(R,b)=>(h(),_("div",{class:T(I(xe)("group relative inline-flex h-9 items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900 select-none overflow-hidden",o.value&&"border-blue-500 ring-2 ring-blue-500/20",n.class))},[l("div",{class:"pointer-events-none absolute inset-y-0 left-0 bg-blue-500/10 dark:bg-blue-500/15 transition-[width] ease-out duration-75",style:Ie({width:`${A.value}%`})},null,4),l("div",{onMousedown:d,class:"flex h-full items-center gap-1 px-2.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-ew-resize transition-colors",title:"按住左右水平拖拽微调数值 (Shift 加速 10x, Alt 精细 0.1x)"},[v(I(Sl),{class:"h-3.5 w-3.5"}),n.label?(h(),_("span",Ph,V(n.label),1)):fe("",!0)],32),b[2]||(b[2]=l("div",{class:"h-4 w-px bg-zinc-200 dark:bg-zinc-800"},null,-1)),l("div",Fh,[s.value?Cn((h(),_("input",{key:0,ref_key:"inputRef",ref:a,"onUpdate:modelValue":b[0]||(b[0]=k=>i.value=k),type:"text",onBlur:w,onKeydown:[ki(w,["enter"]),b[1]||(b[1]=ki(k=>s.value=!1,["esc"]))],class:"w-full bg-transparent p-0 text-right font-mono text-xs font-bold text-zinc-900 outline-none focus:outline-none dark:text-zinc-100"},null,544)),[[Is,i.value]]):(h(),_("div",{key:1,onDblclick:C,onMousedown:d,class:"flex w-full items-center justify-end gap-0.5 cursor-ew-resize",title:"双击直接键入数值，或按住水平拖动"},[l("span",Lh,V(n.modelValue),1),n.suffix?(h(),_("span",Oh,V(n.suffix),1)):fe("",!0)],32))])],2))}}),Vh={class:"relative flex items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900"},Dh=["type","value","placeholder"],jh={class:"space-y-1.5"},Bh={class:"grid grid-cols-4 gap-1.5"},Nh={class:"flex items-center justify-between text-[11px] font-mono"},Uh={class:"text-zinc-400 flex items-center gap-1"},Hh={key:0,class:"rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-3 text-xs space-y-1.5 dark:border-zinc-800/80 dark:bg-zinc-950/40"},Gh=ce({__name:"PasswordStrength",props:{modelValue:{default:""},placeholder:{default:"请输入安全密码..."},showRules:{type:Boolean,default:!0},class:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,o=N(!1),s=ge(()=>{const p=n.modelValue||"";return[{id:"length",label:"至少 8 个字符",valid:p.length>=8},{id:"lowercase",label:"包含小写英文字母 (a-z)",valid:/[a-z]/.test(p)},{id:"uppercase",label:"包含大写英文字母 (A-Z)",valid:/[A-Z]/.test(p)},{id:"number",label:"包含至少 1 个数字 (0-9)",valid:/\d/.test(p)},{id:"special",label:"包含特殊符号 (!@#$%^&*)",valid:/[^A-Za-z0-9]/.test(p)}]}),a=ge(()=>s.value.filter(p=>p.valid).length),i=ge(()=>{if(!n.modelValue)return{score:0,text:"未输入",color:"bg-zinc-200 dark:bg-zinc-800",textColor:"text-zinc-400"};const p=a.value;return p<=2?{score:1,text:"较弱 (Weak)",color:"bg-rose-500",textColor:"text-rose-500"}:p===3?{score:2,text:"中等 (Fair)",color:"bg-amber-500",textColor:"text-amber-500"}:p===4?{score:3,text:"良好 (Good)",color:"bg-sky-500",textColor:"text-sky-500"}:{score:4,text:"极高安全 (Strong)",color:"bg-emerald-500",textColor:"text-emerald-500"}});function c(p){const u=p.target.value;r("update:modelValue",u)}return(p,u)=>(h(),_("div",{class:T(I(xe)("w-full max-w-sm space-y-3 select-none",n.class))},[l("div",Vh,[l("input",{type:o.value?"text":"password",value:n.modelValue,placeholder:n.placeholder,onInput:c,class:"h-10 w-full bg-transparent px-3.5 pr-10 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,Dh),l("button",{type:"button",onClick:u[0]||(u[0]=d=>o.value=!o.value),class:"absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer",tabindex:"-1"},[o.value?(h(),he(I(Ju),{key:0,class:"h-4 w-4"})):(h(),he(I(Il),{key:1,class:"h-4 w-4"}))])]),l("div",jh,[l("div",Bh,[(h(),_(ae,null,Re(4,d=>l("div",{key:d,class:"h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300"},[l("div",{class:T(["h-full transition-all duration-300 ease-out",d<=i.value.score?i.value.color:"w-0"]),style:Ie({width:d<=i.value.score?"100%":"0%"})},null,6)])),64))]),l("div",Nh,[l("span",Uh,[v(I(Ml),{class:"h-3.5 w-3.5"}),u[1]||(u[1]=l("span",null,"安全等级评估",-1))]),l("span",{class:T(["font-bold transition-colors duration-200",i.value.textColor])},V(i.value.text),3)])]),n.showRules?(h(),_("div",Hh,[(h(!0),_(ae,null,Re(s.value,d=>(h(),_("div",{key:d.id,class:T(["flex items-center gap-2 transition-colors duration-200",d.valid?"text-emerald-600 dark:text-emerald-400 font-semibold":"text-zinc-400"])},[l("div",{class:T(["flex h-4 w-4 items-center justify-center rounded-full transition-all duration-200",d.valid?"bg-emerald-500/20 text-emerald-600 dark:text-emerald-400":"bg-zinc-200 dark:bg-zinc-800 text-zinc-400"])},[d.valid?(h(),he(I(qt),{key:0,class:"h-2.5 w-2.5 animate-bounce"})):(h(),he(I(Ms),{key:1,class:"h-2.5 w-2.5 opacity-50"}))],2),l("span",null,V(d.label),1)],2))),128))])):fe("",!0)],2))}}),qh={class:"flex items-center justify-between"},Wh={class:"flex items-center gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800"},Kh=["onClick"],Xh={class:"relative flex items-baseline border-b border-zinc-200/90 pb-3 transition-colors focus-within:border-blue-500 dark:border-zinc-800"},Yh={class:"font-mono text-2xl font-bold text-zinc-400 mr-2 shrink-0"},Zh=["value","placeholder"],Jh={class:"flex flex-wrap items-center gap-2 pt-1"},Qh=["onClick"],ex=ce({__name:"MoneyInput",props:{modelValue:{default:0},currency:{default:"CNY"},currencies:{default:()=>[{code:"CNY",symbol:"¥",label:"人民币"},{code:"USD",symbol:"$",label:"美元"},{code:"EUR",symbol:"€",label:"欧元"},{code:"GBP",symbol:"£",label:"英镑"}]},presets:{default:()=>[100,500,1e3,5e3]},placeholder:{default:"0.00"},class:{}},emits:["update:modelValue","update:currency"],setup(e,{emit:t}){const n=e,r=t,o=N(n.currency),s=ge(()=>{var m;return((m=n.currencies.find(C=>C.code===o.value))==null?void 0:m.symbol)||"¥"});function a(m){return m===0?"":m.toLocaleString("en-US",{maximumFractionDigits:2})}const i=ge(()=>a(n.modelValue)),c=ge(()=>{const m=i.value.length;return m>12?"text-xl":m>8?"text-2xl":"text-3xl sm:text-4xl"});function p(m){const w=m.target.value.replace(/[^0-9.]/g,""),A=parseFloat(w);r("update:modelValue",isNaN(A)?0:A)}function u(m){r("update:modelValue",n.modelValue+m)}function d(){r("update:modelValue",0)}function g(m){o.value=m,r("update:currency",m)}return(m,C)=>(h(),_("div",{class:T(I(xe)("w-full max-w-md rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 select-none space-y-4",n.class))},[l("div",qh,[C[0]||(C[0]=l("span",{class:"text-xs font-semibold text-zinc-500 dark:text-zinc-400"},"转账 / 充值金额",-1)),l("div",Wh,[(h(!0),_(ae,null,Re(n.currencies,w=>(h(),_("button",{key:w.code,type:"button",onClick:A=>g(w.code),class:T(["rounded-md px-2 py-0.5 text-[11px] font-bold font-mono transition-colors cursor-pointer",o.value===w.code?"bg-white text-zinc-900 shadow-2xs dark:bg-zinc-700 dark:text-white":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"])},V(w.code),11,Kh))),128))])]),l("div",Xh,[l("span",Yh,V(s.value),1),l("input",{type:"text",inputmode:"decimal",value:i.value,placeholder:n.placeholder,onInput:p,class:T(["w-full bg-transparent p-0 font-mono font-extrabold tracking-tight text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 transition-all duration-200",c.value])},null,42,Zh),n.modelValue>0?(h(),_("button",{key:0,type:"button",onClick:d,class:"ml-2 rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors cursor-pointer shrink-0"}," 清零 ")):fe("",!0)]),l("div",Jh,[C[1]||(C[1]=l("span",{class:"text-[11px] text-zinc-400"},"快捷填充:",-1)),(h(!0),_(ae,null,Re(n.presets,w=>(h(),_("button",{key:w,type:"button",onClick:A=>u(w),class:"rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-2.5 py-1 font-mono text-xs font-semibold text-zinc-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-400 dark:hover:bg-blue-950/40 dark:hover:text-blue-400 transition-all active:scale-95 cursor-pointer"}," +"+V(s.value)+V(w),9,Qh))),128))])],2))}}),tx={class:"text-base leading-none"},nx={class:"font-mono text-zinc-900 dark:text-zinc-100"},rx={class:"relative flex flex-1 items-center px-3"},ox=["value","placeholder"],sx={key:0,class:"ml-1 text-emerald-500"},ix={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 max-h-56 overflow-y-auto space-y-0.5"},ax=["onClick"],lx={class:"flex items-center gap-2"},cx={class:"text-base"},dx={class:"font-medium text-zinc-800 dark:text-zinc-200"},ux={class:"font-mono text-[11px] font-bold text-zinc-400"},px=ce({__name:"PhoneInput",props:{modelValue:{default:""},countryCode:{default:"CN"},countries:{default:()=>[{code:"CN",dialCode:"+86",name:"中国",flag:"🇨🇳",format:"### #### ####"},{code:"US",dialCode:"+1",name:"美国",flag:"🇺🇸",format:"(###) ###-####"},{code:"GB",dialCode:"+44",name:"英国",flag:"🇬🇧",format:"#### ######"},{code:"JP",dialCode:"+81",name:"日本",flag:"🇯🇵",format:"###-####-####"},{code:"DE",dialCode:"+49",name:"德国",flag:"🇩🇪",format:"#### #######"},{code:"SG",dialCode:"+65",name:"新加坡",flag:"🇸🇬",format:"#### ####"}]},placeholder:{default:"请输入手机号码..."},class:{}},emits:["update:modelValue","update:countryCode"],setup(e,{emit:t}){const n=e,r=t,o=N(n.countries.find(g=>g.code===n.countryCode)||n.countries[0]),s=N(!1),a=N(null);function i(g,m){const C=g.replace(/\D/g,"");let w="",A=0;for(let R=0;R<m.length&&A<C.length;R++)m[R]==="#"?(w+=C[A],A++):w+=m[R];return A<C.length&&(w+=" "+C.slice(A)),w}function c(g){const C=g.target.value.replace(/\D/g,""),w=i(C,o.value.format);r("update:modelValue",w)}function p(g){o.value=g,s.value=!1,r("update:countryCode",g.code);const m=n.modelValue.replace(/\D/g,"");r("update:modelValue",i(m,g.format))}function u(g){a.value&&!a.value.contains(g.target)&&(s.value=!1)}lt(()=>{window.addEventListener("click",u)}),ct(()=>{window.removeEventListener("click",u)});const d=ge(()=>{const g=n.modelValue.replace(/\D/g,"");return g.length>=8&&g.length<=15});return(g,m)=>(h(),_("div",{ref_key:"containerRef",ref:a,class:T(I(xe)("relative w-full max-w-sm select-none",n.class))},[l("div",{class:T(["flex h-10 items-center overflow-hidden rounded-xl border bg-white shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:bg-zinc-900",n.modelValue&&d.value?"border-emerald-500/50":"border-zinc-200/90 dark:border-zinc-800"])},[l("button",{type:"button",onClick:m[0]||(m[0]=$n(C=>s.value=!s.value,["stop"])),class:"flex h-full items-center gap-1.5 border-r border-zinc-200/80 bg-zinc-50/70 px-3 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0 outline-none focus:outline-none ring-0"},[l("span",tx,V(o.value.flag),1),l("span",nx,V(o.value.dialCode),1),v(I(fr),{class:T(["h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",s.value&&"rotate-180"])},null,8,["class"])]),l("div",rx,[l("input",{type:"tel",value:n.modelValue,placeholder:n.placeholder,onInput:c,class:"w-full bg-transparent font-mono text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,ox),n.modelValue&&d.value?(h(),_("div",sx,[v(I(qt),{class:"h-4 w-4 animate-bounce"})])):fe("",!0)])],2),v(ln,{name:"phone-menu"},{default:Z(()=>[s.value?(h(),_("div",ix,[(h(!0),_(ae,null,Re(n.countries,C=>(h(),_("button",{key:C.code,type:"button",onClick:w=>p(C),class:"flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"},[l("div",lx,[l("span",cx,V(C.flag),1),l("span",dx,V(C.name),1)]),l("span",ux,V(C.dialCode),1)],8,ax))),128))])):fe("",!0)]),_:1})],2))}}),fx=qe(px,[["__scopeId","data-v-23e74282"]]),mx={class:"flex items-center pl-1 text-zinc-400"},gx=["onClick"],bx=["disabled","placeholder"],hx={key:0,class:"ml-auto pr-1 font-mono text-[10px] text-zinc-400"},xx=ce({__name:"TagInput",props:{modelValue:{default:()=>["Vue 3.5","TailwindCSS","Motion UI"]},placeholder:{default:"输入标签后按回车添加..."},maxTags:{default:8},allowDuplicates:{type:Boolean,default:!1},class:{}},emits:["update:modelValue","add","remove"],setup(e,{emit:t}){const n=e,r=t,o=N(""),s=N(null);function a(){const u=o.value.trim();if(!u||n.maxTags&&n.modelValue.length>=n.maxTags)return;if(!n.allowDuplicates&&n.modelValue.includes(u)){o.value="";return}const d=[...n.modelValue,u];r("update:modelValue",d),r("add",u),o.value=""}function i(u){const d=n.modelValue[u],g=n.modelValue.filter((m,C)=>C!==u);r("update:modelValue",g),r("remove",d)}function c(u){u.key==="Enter"||u.key===","?(u.preventDefault(),a()):u.key==="Backspace"&&!o.value&&n.modelValue.length>0&&i(n.modelValue.length-1)}function p(){var u;(u=s.value)==null||u.focus()}return(u,d)=>(h(),_("div",{onClick:p,class:T(I(xe)("group flex min-h-10 w-full max-w-md flex-wrap items-center gap-1.5 rounded-xl border border-zinc-200/90 bg-white p-2 shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900 cursor-text select-none",n.class))},[l("div",mx,[v(I(mp),{class:"h-3.5 w-3.5"})]),v(Ru,{name:"tag-list"},{default:Z(()=>[(h(!0),_(ae,null,Re(n.modelValue,(g,m)=>(h(),_("div",{key:g,class:"inline-flex items-center gap-1 rounded-lg border border-blue-500/20 bg-blue-50/70 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/60 dark:text-blue-300 transition-all duration-200"},[l("span",null,V(g),1),l("button",{type:"button",onClick:$n(C=>i(m),["stop"]),class:"flex h-3.5 w-3.5 items-center justify-center rounded-full hover:bg-blue-600/20 dark:hover:bg-blue-400/20 transition-colors cursor-pointer"},[v(I(Ms),{class:"h-2.5 w-2.5"})],8,gx)]))),128))]),_:1}),Cn(l("input",{ref_key:"inputRef",ref:s,"onUpdate:modelValue":d[0]||(d[0]=g=>o.value=g),type:"text",disabled:n.maxTags?n.modelValue.length>=n.maxTags:!1,placeholder:n.modelValue.length===0?n.placeholder:n.maxTags&&n.modelValue.length>=n.maxTags?"已达上限":"添加更多...",onKeydown:c,class:"min-w-[80px] flex-1 bg-transparent px-1.5 py-0.5 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,bx),[[Is,o.value]]),n.maxTags?(h(),_("div",hx,V(n.modelValue.length)+"/"+V(n.maxTags),1)):fe("",!0)],2))}}),vx=qe(xx,[["__scopeId","data-v-a092d752"]]),yx={class:"relative flex flex-col rounded-2xl border border-zinc-200/90 bg-white p-3 shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900"},wx=["value","placeholder"],kx={class:"flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/80"},zx={class:"flex items-center gap-1 text-[11px] text-zinc-400"},_x={class:"font-mono text-[10px] text-zinc-400"},Cx={key:0,class:"aura-popover popover-shadow absolute bottom-full left-0 mb-2 w-72 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-0.5"},Sx={class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"},Ax=["onClick","onMouseenter"],Ix={key:1},Rx={class:"flex flex-1 flex-col overflow-hidden"},Mx={class:"flex items-center gap-1.5"},Tx={class:"truncate text-xs font-semibold"},$x={key:0,class:"rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"},Ex={class:"truncate text-[10px] text-zinc-400"},Px=ce({__name:"MentionInput",props:{modelValue:{default:""},placeholder:{default:"输入内容，键入 @ 可呼出团队成员或智能体..."},users:{default:()=>[{id:"1",name:"左岚 (Zuǒ Lán)",handle:"zuolan",role:"全栈架构 Agent",isBot:!0},{id:"2",name:"Aura Motion",handle:"auramotion",role:"视觉动效引擎",isBot:!0},{id:"3",name:"Alex Rivera",handle:"alex",role:"前端技术专家",isBot:!1},{id:"4",name:"Elena Rostova",handle:"elena",role:"UI 设计专家",isBot:!1},{id:"5",name:"Devin AI",handle:"devin",role:"代码重构 Agent",isBot:!0}]},class:{}},emits:["update:modelValue","mention"],setup(e,{emit:t}){const n=e,r=t,o=N(null),s=N(!1),a=N(""),i=N(0),c=ge(()=>{const g=a.value.toLowerCase();return g?n.users.filter(m=>m.name.toLowerCase().includes(g)||m.handle.toLowerCase().includes(g)):n.users});function p(g){const m=g.target,C=m.value;r("update:modelValue",C);const w=m.selectionStart||0,A=C.slice(0,w),R=A.lastIndexOf("@");if(R!==-1){const b=A.slice(R+1);if(!b.includes(" ")&&!b.includes(`
`)){a.value=b,s.value=!0,i.value=0;return}}s.value=!1}function u(g){const m=o.value;if(!m)return;const C=n.modelValue,w=m.selectionStart||0,A=C.slice(0,w),R=C.slice(w),b=A.lastIndexOf("@");if(b!==-1){const k=A.slice(0,b)+`@${g.name} `+R;r("update:modelValue",k),r("mention",g),s.value=!1,setTimeout(()=>{m.focus();const z=b+g.name.length+2;m.setSelectionRange(z,z)},20)}}function d(g){!s.value||c.value.length===0||(g.key==="ArrowDown"?(g.preventDefault(),i.value=(i.value+1)%c.value.length):g.key==="ArrowUp"?(g.preventDefault(),i.value=(i.value-1+c.value.length)%c.value.length):g.key==="Enter"||g.key==="Tab"?(g.preventDefault(),u(c.value[i.value])):g.key==="Escape"&&(s.value=!1))}return(g,m)=>(h(),_("div",{class:T(I(xe)("relative w-full max-w-lg select-none",n.class))},[l("div",yx,[l("textarea",{ref_key:"textareaRef",ref:o,value:n.modelValue,placeholder:n.placeholder,rows:"3",onInput:p,onKeydown:d,class:"w-full resize-none bg-transparent text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,wx),l("div",kx,[l("div",zx,[v(I(Xu),{class:"h-3.5 w-3.5 text-blue-500"}),m[0]||(m[0]=l("span",null,"输入 @ 呼出协作成员 / Agent",-1))]),l("span",_x,V(n.modelValue.length)+" 字 ",1)])]),v(ln,{name:"mention-pop"},{default:Z(()=>[s.value&&c.value.length>0?(h(),_("div",Cx,[l("div",Sx," 可选成员与智能体 ("+V(c.value.length)+") ",1),(h(!0),_(ae,null,Re(c.value,(C,w)=>(h(),_("button",{key:C.id,type:"button",onClick:A=>u(C),onMouseenter:A=>i.value=w,class:T(["flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors cursor-pointer",i.value===w?"bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300":"hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200"])},[l("div",{class:T(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white shrink-0",C.isBot?"bg-gradient-to-tr from-blue-600 to-indigo-500":"bg-zinc-700 dark:bg-zinc-600"])},[C.isBot?(h(),he(I(Rs),{key:0,class:"h-4 w-4"})):(h(),_("span",Ix,V(C.name.charAt(0)),1))],2),l("div",Rx,[l("div",Mx,[l("span",Tx,V(C.name),1),C.isBot?(h(),_("span",$x," AI ")):fe("",!0)]),l("span",Ex,"@"+V(C.handle)+" · "+V(C.role),1)])],42,Ax))),128))])):fe("",!0)]),_:1})],2))}}),Fx=qe(Px,[["__scopeId","data-v-b496cb8a"]]),Lx={class:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"},Ox={class:"flex flex-col md:flex-row gap-8"},Vx={class:"w-full md:w-64 shrink-0"},Dx={class:"sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-xs backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70"},jx={class:"mb-3 px-2 flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider"},Bx={class:"rounded bg-blue-100 dark:bg-blue-950/80 px-1.5 py-0.2 text-[10px] text-blue-600 dark:text-blue-400 font-bold"},Nx={class:"space-y-4"},Ux={class:"flex items-center justify-between px-2 py-1 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"},Hx={class:"flex items-center gap-1.5"},Gx={class:"text-zinc-800 dark:text-zinc-200 font-bold"},qx={class:"rounded bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.2 text-[9px] font-mono text-zinc-500 font-bold"},Wx={class:"space-y-0.5"},Kx={class:"truncate"},Xx={class:"mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 px-2"},Yx={class:"flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100"},Zx={class:"min-w-0 flex-1"},Jx={class:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white mb-3 shadow-md shadow-blue-500/20"},Qx={key:1,class:"w-full max-w-2xl"},ev={class:"flex h-full flex-col items-center justify-center p-6 text-center"},tv={key:5,class:"flex flex-col items-center gap-6 py-8"},nv={class:"text-center"},rv={class:"text-center mt-2"},ov={key:6,class:"flex flex-wrap items-center justify-center gap-4 py-8"},sv={class:"relative z-10 flex items-center justify-between"},iv={class:"relative z-10 flex flex-col items-center gap-3"},av={class:"flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30"},lv={key:10,class:"grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-3xl py-6"},cv={class:"inline-flex items-baseline justify-center text-sky-500 dark:text-sky-400"},dv={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},uv={class:"inline-flex items-baseline justify-center text-indigo-500 dark:text-indigo-400"},pv={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},fv={class:"inline-flex items-baseline justify-center text-emerald-500 dark:text-emerald-400"},mv={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},gv={key:12,class:"w-full"},bv={class:"relative z-10 text-center"},hv={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400 mb-3"},xv={class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/30 text-white"},vv={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-sky-500"},yv={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-emerald-500"},wv={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-indigo-500"},kv={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-amber-500"},zv={class:"w-full max-w-xl h-72"},_v={class:"flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white/80 p-1 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 shadow-xs"},Cv=["onClick"],Sv={class:"w-full max-w-xl"},Av={class:"w-full max-w-xl"},Iv={class:"w-full max-w-xl"},Rv={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-4 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},Mv={class:"mt-1 text-sm font-bold text-blue-600 dark:text-blue-400 font-mono"},Tv={class:"flex flex-wrap items-center justify-center gap-4"},$v={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},Ev={key:0,class:"text-xs text-zinc-400 italic"},Pv={key:1,class:"space-y-1"},Fv={class:"flex flex-wrap items-center justify-center gap-4"},Lv={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},Ov={key:0,class:"text-xs text-zinc-400 italic"},Vv={key:1,class:"space-y-1"},Dv={class:"flex flex-wrap items-center justify-center gap-8"},jv={class:"flex flex-col items-center gap-2"},Bv={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Nv={class:"text-xs font-mono text-zinc-500 font-bold"},Uv={class:"flex flex-col items-center gap-2"},Hv={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Gv={class:"text-xs font-mono text-zinc-500 font-bold"},qv={class:"flex flex-col items-center gap-2"},Wv={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Kv={class:"text-xs font-mono text-zinc-500 font-bold"},Xv={class:"flex flex-wrap items-center justify-center gap-3"},Yv={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2.5 text-xs font-mono text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Zv={class:"font-bold text-blue-600 dark:text-blue-400"},Jv={class:"flex flex-wrap items-center justify-center gap-6"},Qv={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},e1={class:"text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold"},t1={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},n1={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},r1={class:"flex flex-wrap items-center justify-center gap-4"},o1={class:"flex items-center justify-center p-4"},s1={class:"w-full max-w-sm"},i1={class:"w-full max-w-md"},a1={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},l1={class:"font-bold text-blue-600 dark:text-blue-400"},c1={class:"w-full max-w-sm"},d1={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},u1={class:"font-bold text-blue-600 dark:text-blue-400"},p1={class:"font-bold text-zinc-900 dark:text-white"},f1={class:"w-full max-w-md"},m1={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},g1={class:"font-bold text-blue-600 dark:text-blue-400"},b1={class:"w-full max-w-lg"},h1=ce({__name:"DocsView",setup(e){const t=N(null),n=N(null),r=N(null),o=N(null),s=B0(),a=ge(()=>s.params.id||"border-beam"),i=ge(()=>en.find(E=>E.id===a.value)||en[0]);function c(E){switch(E){case"forms-inputs":return dp;case"tactile-actions":return In;case"ai-native":return Rs;case"interactive-nav":return Jo;case"space-3d":return Ur;case"borders-cards":return hn;case"kinetic-typography":return Fe;default:return Fe}}function p(E){return en.filter(y=>y.suiteId===E)}const u=["OpenAI","Anthropic","Google","NVIDIA","DeepSeek","Vercel"],d=[{id:"home",label:"首页概览",icon:np},{id:"explore",label:"模型广场",icon:Jo},{id:"agent",label:"AI 智能体",icon:Fe},{id:"files",label:"知识库",icon:Qu},{id:"notice",label:"消息通知",icon:Yu},{id:"settings",label:"偏好设置",icon:cp}],g=N("thinking"),m={thinking:"正在多模态解构视觉空间坐标与贝塞尔插值参数...",running:"并行编译并打包 Production Motion Primitives...",tool_call:"调用 Playwright 真实无头浏览器验证 60fps 动效性能...",success:"全套 28 项动效原子组件按 6 大主题套件落地完成！",error:"检测到底层渲染管道异常，正在启动自愈补偿重试..."},C=N(""),w=N(!1),A=N("deepseek-r1");function R(E){w.value=!0,setTimeout(()=>{w.value=!1,C.value=""},2200)}const b=N("preview"),k=[{id:"preview",label:"实时预览",icon:Fe},{id:"code",label:"组件源码",icon:Zo,badge:"SFC"},{id:"api",label:"API 文档",icon:es},{id:"suites",label:"主题矩阵",icon:hn,badge:"6 大套件"}],z=N([]);function $(){z.value.unshift(`[${new Date().toLocaleTimeString()}] 触发长按蓄力物理确认：危险操作已执行！`),z.value.length>3&&z.value.pop()}const F=N([]);function U(){F.value.unshift(`[${new Date().toLocaleTimeString()}] 就地确认执行成功：数据库缓存集群已清空`),F.value.length>3&&F.value.pop()}const L=N(!1),O=N(!1),ee=N(!1),oe=N(!0),q=N(!1),pe=N(42),Ae=N("尚未触发操作");function Le(){Ae.value=`[${new Date().toLocaleTimeString()}] 执行主操作：生产环境立即发布完成！`}function be(E){Ae.value=`[${new Date().toLocaleTimeString()}] 执行伴随动作：${E.label}`}const de=N(480),te=N(16),Me=N(85),Y=N("Aura$2026"),je=N(6800),ye=N("CNY"),et=N("13800138000"),Oe=N("CN"),we=N(["Vue 3.5","TailwindCSS","Motion UI","Antigravity"]),ve=N("嗨 @左岚 (Zuǒ Lán) ，请审查关于全套动效原子组件库的重构方案！");return(E,y)=>{const H=ur("router-link");return h(),_("div",Lx,[l("div",Ox,[l("aside",Vx,[l("div",Dx,[l("div",jx,[y[20]||(y[20]=l("span",null,"主题套件矩阵",-1)),l("span",Bx,V(I(ts).length)+" 大套件 · "+V(I(en).length)+" 组件 ",1)]),l("div",Nx,[(h(!0),_(ae,null,Re(I(ts),D=>(h(),_("div",{key:D.id,class:"space-y-1"},[l("div",Ux,[l("div",Hx,[(h(),he(Gt(c(D.id)),{class:"h-3.5 w-3.5 text-blue-500"})),l("span",Gx,V(D.name),1)]),l("span",qx,V(p(D.id).length),1)]),l("nav",Wx,[(h(!0),_(ae,null,Re(p(D.id),f=>(h(),he(H,{key:f.id,to:`/docs/${f.id}`,class:T(["flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium transition-colors",a.value===f.id?"bg-blue-600 text-white font-semibold shadow-xs":"text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"])},{default:Z(()=>[l("span",Kx,V(f.name),1),l("span",{class:T(["text-[9px] rounded px-1.5 py-0.2 shrink-0 ml-1",a.value===f.id?"bg-blue-700/80 text-blue-100":"bg-zinc-100 dark:bg-zinc-900 text-zinc-400"])},V(f.category),3)]),_:2},1032,["to","class"]))),128))])]))),128))]),l("div",Xx,[l("div",Yx,[v(I(es),{class:"h-3.5 w-3.5 text-blue-500"}),y[21]||(y[21]=l("span",null,"基础依赖安装",-1))]),y[22]||(y[22]=l("p",{class:"mt-1 text-[11px] text-zinc-400"},"组件依赖轻量样式与工具库：",-1)),y[23]||(y[23]=l("div",{class:"mt-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-300 break-all select-all"}," npm i @vueuse/core clsx tailwind-merge ",-1))])])]),l("main",Zx,[(h(),he(Ug,{key:i.value.id,title:i.value.title,description:i.value.description,"component-code":i.value.componentCode,"usage-code":i.value.usageCode,"component-filename":i.value.componentFilename,"props-list":i.value.propsList},{default:Z(({isDark:D})=>[i.value.id==="border-beam"?(h(),_("div",{key:0,class:T(["relative flex h-64 w-80 flex-col items-center justify-center rounded-2xl border p-6 shadow-md transition-colors duration-200",D?"border-zinc-800 bg-zinc-900 text-zinc-100 shadow-black/40":"border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/50"])},[l("div",Jx,[v(I(Fe),{class:"h-6 w-6"})]),l("h4",{class:T(["text-lg font-bold",D?"text-white":"text-zinc-900"])}," Border Beam Demo ",2),l("p",{class:T(["mt-1 text-center text-xs",D?"text-zinc-400":"text-zinc-500"])}," 流光平滑环绕圆角容器边缘 ",2),v(as,{size:180,duration:8,"color-from":"#38bdf8","color-to":"#a855f7"})],2)):i.value.id==="bento-grid"?(h(),_("div",Qx,[v(ac,{class:"auto-rows-[16rem]"},{default:Z(()=>[v(nt,{name:"AI 向量引擎",description:"毫秒级生成多模态视觉理解",cta:"了解详情",href:"#",class:T(D?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900")},{icon:Z(()=>[v(I(Ai),{class:"h-5 w-5 text-blue-500"})]),_:1},8,["class"]),v(nt,{name:"全球边缘节点加速",description:"降低网络抖动，就近命中就近计算",class:T(["md:col-span-2",D?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900"]),cta:"查看分布",href:"#"},{icon:Z(()=>[v(I(In),{class:"h-5 w-5 text-amber-500"})]),_:1},8,["class"])]),_:2},1024)])):i.value.id==="interactive-particles"?(h(),_("div",{key:2,class:T(["relative h-[360px] w-full rounded-2xl border overflow-hidden transition-colors duration-200",D?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[v(cc,{quantity:60,"mouse-radius":120,"connect-lines":!0,color:D?"255, 255, 255":"59, 130, 246"},{default:Z(()=>[l("div",ev,[l("h3",{class:T(["text-2xl font-bold tracking-tight",D?"text-white":"text-zinc-900"])}," 移动光标体验引力感应 ",2),l("p",{class:T(["mt-2 text-xs",D?"text-zinc-400":"text-zinc-500"])}," Canvas 2D 60fps 满帧运行，动态引力排斥与光效连线 ",2)])]),_:2},1032,["color"])],2)):i.value.id==="retro-grid"?(h(),_("div",{key:3,class:T(["relative flex h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",D?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[l("span",{class:T(["z-10 text-4xl font-extrabold tracking-tighter",D?"text-white":"text-zinc-900"])}," Retro Synthwave Grid ",2),v(ls,{angle:65,"dark-line-color":"#334155","light-line-color":"#cbd5e1"})],2)):i.value.id==="dot-pattern"?(h(),_("div",{key:4,class:T(["relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border p-8 transition-colors duration-200",D?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[l("p",{class:T(["z-10 text-xl font-bold",D?"text-white":"text-zinc-900"])}," SVG 矢量波点底纹 (含发光聚光灯) ",2),v(lc,{width:18,height:18,cr:1.2,glow:!0})],2)):i.value.id==="shiny-text"?(h(),_("div",tv,[l("div",{class:T(["rounded-full border px-5 py-2 text-xs font-medium shadow-sm transition-colors",D?"border-zinc-800 bg-zinc-900/90 text-zinc-300":"border-zinc-200 bg-zinc-100 text-zinc-700"])},[y[24]||(y[24]=Ve(" ✨ ",-1)),v(Jn,{text:"Aura UI v1.0 全新微光发布",duration:2.5})],2),l("div",nv,[v(Jn,{text:"Next-Gen AI Intelligence",class:"text-4xl sm:text-5xl font-black tracking-tight",duration:2.5}),l("p",{class:T(["mt-2 text-xs sm:text-sm",D?"text-zinc-500":"text-zinc-400"])}," 持续流淌的宽幅金属微光，肉眼清晰可观赏，绝无突兀停滞 ",2)]),l("div",rv,[v(Jn,{text:"Cyberpunk Motion Primitives",variant:"cyber",class:"text-3xl sm:text-4xl font-extrabold tracking-tight",duration:3}),l("p",{class:T(["mt-1 text-xs",D?"text-zinc-500":"text-zinc-400"])}," 赛博霓虹蓝紫粒子流光，高频荡漾 ",2)])])):i.value.id==="shimmer-button"?(h(),_("div",ov,[v(Zn,{"shimmer-color":"#38bdf8"},{default:Z(()=>[y[25]||(y[25]=l("span",null,"立即获取代码",-1)),v(I(Ir),{class:"h-4 w-4"})]),_:1}),v(Zn,{"shimmer-color":"#ec4899","shimmer-duration":"3.5s"},{default:Z(()=>[...y[26]||(y[26]=[l("span",null,"Pink Shimmer",-1)])]),_:1})])):i.value.id==="marquee"?(h(),_("div",{key:7,class:T(["relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border py-6 transition-colors duration-200",D?"border-zinc-800 bg-black/60":"border-zinc-200 bg-zinc-50/80"])},[v(Rr,{duration:20,"pause-on-hover":!0},{default:Z(()=>[(h(),_(ae,null,Re(u,f=>l("div",{key:f,class:T(["flex h-12 items-center justify-center rounded-xl border px-6 font-bold text-xs shadow-xs transition-colors duration-200",D?"border-zinc-800 bg-zinc-900 text-zinc-200":"border-zinc-200 bg-white text-zinc-800"])},V(f),3)),64))]),_:2},1024),l("div",{class:T(["pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r",D?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2),l("div",{class:T(["pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l",D?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2)],2)):i.value.id==="meteors"?(h(),_("div",{key:8,class:T(["relative flex h-80 w-full max-w-lg flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-2xl transition-colors duration-200",D?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-slate-900 text-white"])},[v(dc,{number:30}),l("div",sv,[y[27]||(y[27]=l("span",{class:"rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20"}," Meteor Shower ",-1)),v(I(Fe),{class:"h-5 w-5 text-sky-400"})]),y[28]||(y[28]=l("div",{class:"relative z-10 space-y-2"},[l("h3",{class:"text-3xl font-black tracking-tight text-white"}," 赛博深空流星雨 "),l("p",{class:"text-xs text-zinc-400 leading-relaxed"}," 流星带有 50px 渐变光尾与随机延迟，全硬件加速流畅穿梭，卡片与 Hero 背景的氛围杀器。 ")],-1))],2)):i.value.id==="ripple"?(h(),_("div",{key:9,class:T(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",D?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[v(uc,{"main-circle-size":160,"num-circles":7}),l("div",iv,[l("div",av,[v(I(Hr),{class:"h-7 w-7"})]),y[29]||(y[29]=l("div",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-mono text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300"}," AI 智能语音拾音中... ",-1))])],2)):i.value.id==="number-ticker"?(h(),_("div",lv,[l("div",{class:T(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",D?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[l("div",cv,[l("span",dv,[v(Mr,{value:99.99,"decimal-places":2})]),y[30]||(y[30]=l("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"%",-1))]),y[31]||(y[31]=l("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"SLA 生产高可用性",-1))],2),l("div",{class:T(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",D?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[l("div",uv,[l("span",pv,[v(Mr,{value:1e7})]),y[32]||(y[32]=l("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"+",-1))]),y[33]||(y[33]=l("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"每日处理 Token 数量",-1))],2),l("div",{class:T(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",D?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[l("div",fv,[l("span",mv,[v(Mr,{value:12})]),y[34]||(y[34]=l("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"ms",-1))]),y[35]||(y[35]=l("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"端到端流式推理延迟",-1))],2)])):i.value.id==="animated-beam"?(h(),_("div",{key:11,class:T(["relative flex h-72 w-full max-w-xl items-center justify-between px-12 rounded-2xl border transition-colors duration-200",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"]),ref_key:"beamContainerRef",ref:t},[l("div",{ref_key:"beamUserRef",ref:n,class:T(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",D?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[v(I(El),{class:"h-6 w-6 text-blue-500"})],2),l("div",{ref_key:"beamAiRef",ref:r,class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/40"},[v(I(Fe),{class:"h-8 w-8"})],512),l("div",{ref_key:"beamDbRef",ref:o,class:T(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",D?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[v(I(Qo),{class:"h-6 w-6 text-indigo-500"})],2),v(qr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.4},null,8,["container-ref","from-ref","to-ref"]),v(qr,{"container-ref":t.value,"from-ref":r.value,"to-ref":o.value,duration:2.4,delay:.6},null,8,["container-ref","from-ref","to-ref"])],2)):i.value.id==="lamp-effect"?(h(),_("div",gv,[v(pc,{class:"min-h-[420px]"},{default:Z(()=>[...y[36]||(y[36]=[l("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-5xl font-black tracking-tight text-transparent"}," Next-Gen AI Platform ",-1),l("p",{class:"mt-3 max-w-md text-xs sm:text-sm text-slate-400"}," 双向极光天灯破晓而下，为旗舰级 AI 与 SaaS 官网赋予大模型发布会视觉。 ",-1)])]),_:1})])):i.value.id==="flickering-grid"?(h(),_("div",{key:13,class:T(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border p-6 transition-colors duration-200",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v(fc,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),l("div",bv,[l("div",hv,[v(I(Cl),{class:"h-3.5 w-3.5"}),y[37]||(y[37]=l("span",null,"Canvas 2D 智能矩阵",-1))]),l("h3",{class:T(["text-3xl font-black tracking-tight",D?"text-white":"text-zinc-900"])}," 呼吸噪波微光网格 ",2),l("p",{class:T(["mt-2 text-xs font-mono",D?"text-zinc-400":"text-zinc-500"])}," 微型粒子矩阵异步平滑呼吸闪烁，零 CPU 占用，极客感拉满 ",2)])],2)):i.value.id==="dock"?(h(),_("div",{key:14,class:T(["relative flex h-80 w-full items-end justify-center rounded-2xl border p-8 transition-colors duration-200",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[y[38]||(y[38]=l("div",{class:"absolute top-8 text-center"},[l("span",{class:"text-xs font-mono text-zinc-400"},"将鼠标在下方图标栏滑动，体验余弦高斯物理平滑放大与跟随 Tooltip")],-1)),v(Wg,{items:d,"icon-size":44,"icon-magnification":68,"icon-distance":130})],2)):i.value.id==="orbit-logos"?(h(),_("div",{key:15,class:T(["relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",xv,[v(I(Fe),{class:"h-8 w-8"})]),v(zr,{radius:75,duration:16},{default:Z(()=>[l("div",vv,[v(I(Ai),{class:"h-4.5 w-4.5"})])]),_:1}),v(zr,{radius:75,duration:16,delay:8},{default:Z(()=>[l("div",yv,[v(I(In),{class:"h-4.5 w-4.5"})])]),_:1}),v(zr,{radius:135,duration:24,reverse:!0},{default:Z(()=>[l("div",wv,[v(I(Ur),{class:"h-5 w-5"})])]),_:1}),v(zr,{radius:135,duration:24,delay:12,reverse:!0},{default:Z(()=>[l("div",kv,[v(I(Qo),{class:"h-5 w-5"})])]),_:1})],2)):i.value.id==="image-compare"?(h(),_("div",{key:16,class:T(["flex flex-col items-center justify-center w-full p-4 rounded-2xl border transition-colors duration-200",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",zv,[v(ob,{"before-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=70&sat=-100","after-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=90","before-label":"原始黑白 (Raw)","after-label":"AI 智能全彩修复 (4K HDR)","initial-position":50,class:"h-full w-full shadow-2xl"})]),y[39]||(y[39]=l("p",{class:"mt-3 text-xs font-mono text-zinc-400"}," 按住中央手柄左右拖拽，体验基于 clip-path 视口裁切的双图前后对比 ",-1))],2)):i.value.id==="agent-status"?(h(),_("div",{key:17,class:T(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",_v,[(h(),_(ae,null,Re(["thinking","running","tool_call","success","error"],f=>l("button",{key:f,onClick:x=>g.value=f,class:T(["rounded-lg px-3 py-1.5 text-xs font-semibold transition-all capitalize",g.value===f?"bg-blue-600 text-white shadow-xs":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},V(f),11,Cv)),64))]),v(kb,{status:g.value,"agent-name":"DeepSeek R1 / Aura Reasoning","current-task":m[g.value]},null,8,["status","current-task"]),y[40]||(y[40]=l("p",{class:"text-xs font-mono text-zinc-400"}," 点击上方状态快速体验脉冲光环与徽标切换；点击卡片任意位置展开执行轨迹清单 ",-1))],2)):i.value.id==="typewriter-terminal"?(h(),_("div",{key:18,class:T(["flex flex-col items-center justify-center w-full p-6 rounded-2xl border transition-colors duration-200",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",Sv,[v(Ob,{title:"zsh - aura-orchestrator:~ (80x24)","typing-speed":32,loop:!0})])],2)):i.value.id==="prompt-input"?(h(),_("div",{key:19,class:T(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",Av,[v(Zb,{modelValue:C.value,"onUpdate:modelValue":y[0]||(y[0]=f=>C.value=f),loading:w.value,"selected-model":A.value,"onUpdate:selectedModel":y[1]||(y[1]=f=>A.value=f),placeholder:"向 Aura AI 提问、生成高阶动效代码，或输入 / 触发 Agent...",onSubmit:R,onStop:y[2]||(y[2]=f=>w.value=!1)},null,8,["modelValue","loading","selected-model"])]),y[41]||(y[41]=l("p",{class:"text-xs font-mono text-zinc-400"}," 点击输入框体验聚焦顶部流光与高亮光晕，支持 Enter 发送、模拟 2.2s 思考生成态 ",-1))],2)):i.value.id==="thought-accordion"?(h(),_("div",{key:20,class:T(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",Iv,[v(ah,{duration:"思考用时 8.2 秒",status:"complete","default-open":!0})]),y[42]||(y[42]=l("p",{class:"text-xs font-mono text-zinc-400"}," 对标 DeepSeek R1 / o1 思考链折叠机制，点击标题栏手风琴折叠收起，支持一键复制推演链路 ",-1))],2)):i.value.id==="fluid-tabs"?(h(),_("div",{key:21,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v(ch,{modelValue:b.value,"onUpdate:modelValue":y[3]||(y[3]=f=>b.value=f),tabs:k},null,8,["modelValue"]),l("div",Rv,[y[43]||(y[43]=l("div",{class:"text-xs font-mono text-zinc-500 dark:text-zinc-400"},"当前激活流体 Tab 项：",-1)),l("div",Mv,V(b.value),1)]),y[44]||(y[44]=l("p",{class:"text-xs font-mono text-zinc-400"}," 鼠标在 Tab 间移动感受 Ghost 悬停幽灵胶囊；点击体验物理 Spring 平滑吸附 ",-1))],2)):i.value.id==="hold-to-confirm"?(h(),_("div",{key:22,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",Tv,[v(Eo,{variant:"danger",label:"长按以销毁生产集群",holdingLabel:"危险！保持按住不放...",confirmedLabel:"集群销毁指令已执行！",duration:1200,onConfirm:$}),v(Eo,{variant:"warning",label:"长按重置 API 密钥",holdingLabel:"按住 1 秒重置...",confirmedLabel:"密钥已重置完成！",duration:1e3,onConfirm:$}),v(Eo,{variant:"primary",label:"长按以极速同步",holdingLabel:"保持以连接网关...",confirmedLabel:"多云同步完成！",duration:800,onConfirm:$})]),l("div",$v,[y[45]||(y[45]=l("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 操作监听回执 ",-1)),z.value.length===0?(h(),_("div",Ev," 按住上方任一按钮体验蓄力进度条，松手即取消，蓄满 100% 触发回执 ")):(h(),_("div",Pv,[(h(!0),_(ae,null,Re(z.value,(f,x)=>(h(),_("div",{key:x,class:"text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold"},V(f),1))),128))]))]),y[46]||(y[46]=l("p",{class:"text-xs font-mono text-zinc-400"}," 具备 requestAnimationFrame 60fps 动态插值填充、松手平滑阻尼回退与成功态自动形变复位 ",-1))],2)):i.value.id==="confirm-morph"?(h(),_("div",{key:23,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",Fv,[v(Po,{label:"彻底清空 Redis 缓存","confirm-text":"确认清空","cancel-text":"取消",variant:"danger",onConfirm:U}),v(Po,{label:"回滚至昨日版本","confirm-text":"确认回滚","cancel-text":"再想想",variant:"warning",onConfirm:U}),v(Po,{label:"切换主从节点","confirm-text":"立即切换","cancel-text":"取消",variant:"primary",onConfirm:U})]),l("div",Lv,[y[47]||(y[47]=l("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 就地形变二次确认回执 ",-1)),F.value.length===0?(h(),_("div",Ov," 点击上方按钮原地分裂为确认和取消操作，零弹窗干扰心流 ")):(h(),_("div",Vv,[(h(!0),_(ae,null,Re(F.value,(f,x)=>(h(),_("div",{key:x,class:"text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold"},V(f),1))),128))]))]),y[48]||(y[48]=l("p",{class:"text-xs font-mono text-zinc-400"}," 内联原地形变布局（Inline FLIP Transition），无需全局遮罩即可实现安全防误触 ",-1))],2)):i.value.id==="icon-morph"?(h(),_("div",{key:24,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",Dv,[l("div",jv,[l("div",Bv,[v(Fo,{modelValue:L.value,"onUpdate:modelValue":y[4]||(y[4]=f=>L.value=f),mode:"menu-close",size:28},null,8,["modelValue"])]),l("span",Nv," Menu ↔ Close: "+V(L.value?"关闭":"展开"),1)]),l("div",Uv,[l("div",Hv,[v(Fo,{modelValue:O.value,"onUpdate:modelValue":y[5]||(y[5]=f=>O.value=f),mode:"play-pause",size:28},null,8,["modelValue"])]),l("span",Gv," Play ↔ Pause: "+V(O.value?"播放中":"暂停中"),1)]),l("div",qv,[l("div",Wv,[v(Fo,{modelValue:ee.value,"onUpdate:modelValue":y[6]||(y[6]=f=>ee.value=f),mode:"plus-minus",size:28},null,8,["modelValue"])]),l("span",Kv," Plus ↔ Minus: "+V(ee.value?"已展开":"折叠"),1)])]),y[49]||(y[49]=l("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG 矢量几何坐标连续形变，硬件加速 60fps，零卡顿零抖动 ",-1))],2)):i.value.id==="action-button"?(h(),_("div",{key:25,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",Xv,[v(Nn,{icon:I(sp),active:oe.value,tooltip:"钉选在首屏导航",onClick:y[7]||(y[7]=f=>oe.value=!oe.value)},null,8,["icon","active"]),v(Nn,{label:"生成动效代码",icon:I(Fe),badge:"AI",tooltip:"一键生成 Vue 动效原子代码",onClick:y[8]||(y[8]=f=>pe.value++)},null,8,["icon"]),v(Nn,{icon:I(Zu),active:q.value,tooltip:"收藏至组件集",onClick:y[9]||(y[9]=f=>q.value=!q.value)},null,8,["icon","active"]),v(Nn,{label:"大规格按钮",size:"lg",icon:I(Si),tooltip:"上传打包产物"},null,8,["icon"]),v(Nn,{label:"禁用按钮",size:"sm",disabled:!0,tooltip:"当前权限不足"})]),l("div",Yv,[y[50]||(y[50]=Ve(" AI 生成点击计数：",-1)),l("span",Zv,V(pe.value),1),y[51]||(y[51]=Ve(" 次 ",-1))]),y[52]||(y[52]=l("p",{class:"text-xs font-mono text-zinc-400"}," 配备精准物理弹簧缩放阻尼（active:scale-90）与微拟态悬停反馈 ",-1))],2)):i.value.id==="split-button"?(h(),_("div",{key:26,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",Jv,[v(na,{label:"立即发布到生产环境",icon:I(Rl),variant:"primary",onPrimaryClick:Le,onSelect:be},null,8,["icon"]),v(na,{label:"导出代码包",icon:I(Si),variant:"secondary",items:[{id:"zip",label:"下载 ZIP 压缩包",description:"包含全部 SFC 组件与 CSS 变量"},{id:"git",label:"推送到 GitHub PR",description:"自动分支并创建协同审查"},{id:"npm",label:"发布至私有 NPM",description:"生成统一 Package 包"}],onPrimaryClick:Le,onSelect:be},null,8,["icon"])]),l("div",Qv,[y[53]||(y[53]=l("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1"}," 分体按钮操作回执 ",-1)),l("div",e1,V(Ae.value),1)]),y[54]||(y[54]=l("p",{class:"text-xs font-mono text-zinc-400"}," 主操作与下拉伴随操作一体化，物理发丝分割线，自适应点击区域与弹簧菜单 ",-1))],2)):i.value.id==="reactions"?(h(),_("div",{key:27,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",t1,[v(ra)]),l("div",n1,[y[55]||(y[55]=l("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3"}," 自定义反应项展示： ",-1)),v(ra,{items:[{id:"vue",emoji:"💚",count:1024,active:!0},{id:"speed",emoji:"⚡",count:512,active:!1},{id:"magic",emoji:"✨",count:888,active:!0},{id:"100",emoji:"💯",count:99,active:!1}]})]),y[56]||(y[56]=l("p",{class:"text-xs font-mono text-zinc-400"}," 点击任一表情体验 Spring 弹簧弹性放大与实时翻滚计数，支持添加自定义表情 ",-1))],2)):i.value.id==="scrub-input"?(h(),_("div",{key:28,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",r1,[v(Lo,{modelValue:de.value,"onUpdate:modelValue":y[10]||(y[10]=f=>de.value=f),label:"宽度 (W)",min:120,max:640,suffix:"px"},null,8,["modelValue"]),v(Lo,{modelValue:te.value,"onUpdate:modelValue":y[11]||(y[11]=f=>te.value=f),label:"圆角 (R)",min:0,max:48,suffix:"px"},null,8,["modelValue"]),v(Lo,{modelValue:Me.value,"onUpdate:modelValue":y[12]||(y[12]=f=>Me.value=f),label:"不透明度 (A)",min:10,max:100,suffix:"%"},null,8,["modelValue"])]),l("div",o1,[l("div",{class:"flex h-24 items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-mono text-xs font-bold shadow-lg transition-all duration-75",style:Ie({width:`${de.value/2}px`,borderRadius:`${te.value}px`,opacity:Me.value/100})}," 实时微调形态: "+V(Math.round(de.value/2))+" × 96px ",5)]),y[57]||(y[57]=l("p",{class:"text-xs font-mono text-zinc-400"}," 按住 Label 左右横向拖动（按住 Shift 加速 10x，Alt 微调 0.1x），双击数值切换精准键盘输入 ",-1))],2)):i.value.id==="password-strength"?(h(),_("div",{key:29,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",s1,[v(Gh,{modelValue:Y.value,"onUpdate:modelValue":y[13]||(y[13]=f=>Y.value=f)},null,8,["modelValue"])]),y[58]||(y[58]=l("p",{class:"text-xs font-mono text-zinc-400"}," 包含大写/小写/数字/特殊符号/长度 5 维动态校验，进度条平滑渐变与明暗文无缝切换 ",-1))],2)):i.value.id==="money-input"?(h(),_("div",{key:30,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",i1,[v(ex,{modelValue:je.value,"onUpdate:modelValue":y[14]||(y[14]=f=>je.value=f),currency:ye.value,"onUpdate:currency":y[15]||(y[15]=f=>ye.value=f)},null,8,["modelValue","currency"])]),l("div",a1,[y[59]||(y[59]=Ve(" 底层双向绑定数据：",-1)),l("span",l1,V(ye.value)+" "+V(je.value),1)]),y[60]||(y[60]=l("p",{class:"text-xs font-mono text-zinc-400"}," 金额过长时字号动态自适应缩放（text-4xl → text-xl），支持千分位格式化与一键药丸快捷填充 ",-1))],2)):i.value.id==="phone-input"?(h(),_("div",{key:31,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",c1,[v(fx,{modelValue:et.value,"onUpdate:modelValue":y[16]||(y[16]=f=>et.value=f),"country-code":Oe.value,"onUpdate:countryCode":y[17]||(y[17]=f=>Oe.value=f)},null,8,["modelValue","country-code"])]),l("div",d1,[y[61]||(y[61]=Ve(" 选中地区：",-1)),l("span",u1,V(Oe.value),1),y[62]||(y[62]=Ve(" · 输入号码：",-1)),l("span",p1,V(et.value||"(未输入)"),1)]),y[63]||(y[63]=l("p",{class:"text-xs font-mono text-zinc-400"}," 支持中国 (### #### ####)、美国 ((###) ###-####) 等多国区号格式自适应与完成态对勾反馈 ",-1))],2)):i.value.id==="tag-input"?(h(),_("div",{key:32,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",f1,[v(vx,{modelValue:we.value,"onUpdate:modelValue":y[18]||(y[18]=f=>we.value=f),"max-tags":8},null,8,["modelValue"])]),l("div",m1,[y[64]||(y[64]=Ve(" 当前标签数组：",-1)),l("span",g1,V(JSON.stringify(we.value)),1)]),y[65]||(y[65]=l("p",{class:"text-xs font-mono text-zinc-400"}," 回车/逗号自动生成标签胶囊，退格键按序反向删除，配备弹性进退场动效与最大数量上限 ",-1))],2)):i.value.id==="mention-input"?(h(),_("div",{key:33,class:T(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",D?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[l("div",b1,[v(Fx,{modelValue:ve.value,"onUpdate:modelValue":y[19]||(y[19]=f=>ve.value=f)},null,8,["modelValue"])]),y[66]||(y[66]=l("p",{class:"text-xs font-mono text-zinc-400"}," 键入 @ 呼出团队成员与 AI 智能体候选菜单，支持键盘上下光标漫游与 Tab/Enter 高亮注入 ",-1))],2)):fe("",!0)]),_:1},8,["title","description","component-code","usage-code","component-filename","props-list"]))])])])}}}),x1=j0({history:x0(),routes:[{path:"/",name:"home",component:pg},{path:"/docs/:id?",name:"docs",component:h1},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(e,t,n){return n||(e.name==="docs"&&t.name==="docs"?!1:{top:0})}}),mc=Uu(Pp);mc.use(x1);mc.mount("#app");
