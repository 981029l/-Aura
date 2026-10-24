(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Fe={},xn=[],Et=()=>{},fa=()=>!1,eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),to=e=>e.startsWith("onUpdate:"),He=Object.assign,hs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ic=Object.prototype.hasOwnProperty,Se=(e,t)=>Ic.call(e,t),ue=Array.isArray,on=e=>xr(e)==="[object Map]",Dr=e=>xr(e)==="[object Set]",Hs=e=>xr(e)==="[object Date]",ge=e=>typeof e=="function",De=e=>typeof e=="string",wt=e=>typeof e=="symbol",$e=e=>e!==null&&typeof e=="object",ma=e=>($e(e)||ge(e))&&ge(e.then)&&ge(e.catch),ba=Object.prototype.toString,xr=e=>ba.call(e),Ac=e=>xr(e).slice(8,-1),ga=e=>xr(e)==="[object Object]",xs=e=>De(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yn=gs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),no=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Mc=/-\w/g,ct=no(e=>e.replace(Mc,t=>t.slice(1).toUpperCase())),$c=/\B([A-Z])/g,dn=no(e=>e.replace($c,"-$1").toLowerCase()),ro=no(e=>e.charAt(0).toUpperCase()+e.slice(1)),yo=no(e=>e?`on${ro(e)}`:""),Pt=(e,t)=>!Object.is(e,t),Tr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ha=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},vs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Rc=e=>{const t=De(e)?Number(e):NaN;return isNaN(t)?e:t};let Us;const oo=()=>Us||(Us=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function me(e){if(ue(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=De(r)?Fc(r):me(r);if(o)for(const s in o)t[s]=o[s]}return t}else if(De(e)||$e(e))return e}const Tc=/;(?![^(]*\))/g,Pc=/:([^]+)/,Ec=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Fc(e){const t={};return e.replace(Ec,n=>n.startsWith("/*")?"":n).split(Tc).forEach(n=>{if(n){const r=n.split(Pc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function M(e){let t="";if(De(e))t=e;else if(ue(e))for(let n=0;n<e.length;n++){const r=M(e[n]);r&&(t+=r+" ")}else if($e(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Lc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Oc=gs(Lc);function xa(e){return!!e||e===""}function Vc(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let o=0;r&&o<e.length;o++)r=so(e[o],t[o],n);return r}function Gs(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),o=new Uint8Array(r.length);for(const s of e){let l=-1;for(let a=0;a<r.length;a++)if(!o[a]&&so(s,r[a],n)){l=a;break}if(l<0)return!1;o[l]=1}return!0}function Dc(e,t,n){let r=on(e),o=on(t);if(r||o||(r=Dr(e),o=Dr(t),r||o))return r&&o?Gs(e,t,n):!1;const s=Object.keys(e).length,l=Object.keys(t).length;if(s!==l)return!1;for(const a in e){const c=e.hasOwnProperty(a),p=t.hasOwnProperty(a);if(c&&!p||!c&&p||!so(e[a],t[a],n))return!1}return String(e)===String(t)}function qs(e,t,n,r){n||(n=[new Map,new Map]);const[o,s]=n;if(o.has(e)||s.has(t))return o.get(e)===t&&s.get(t)===e;o.set(e,t),s.set(t,e);const l=r(e,t,n);return o.delete(e),s.delete(t),l}function so(e,t,n){if(e===t)return!0;let r=Hs(e),o=Hs(t);return r||o?r&&o?e.getTime()===t.getTime():!1:(r=wt(e),o=wt(t),r||o?e===t:(r=ue(e),o=ue(t),r||o?r&&o?qs(e,t,n,Vc):!1:(r=$e(e),o=$e(t),r||o?!r||!o?!1:qs(e,t,n,Dc):String(e)===String(t))))}const va=e=>!!(e&&e.__v_isRef===!0),T=e=>De(e)?e:e==null?"":ue(e)||$e(e)&&(e.toString===ba||!ge(e.toString))?va(e)?T(e.value):JSON.stringify(e,ya,2):String(e),ya=(e,t)=>va(t)?ya(e,t.value):on(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],s)=>(n[wo(r,s)+" =>"]=o,n),{})}:Dr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>wo(n))}:wt(t)?wo(t):$e(t)&&!ue(t)&&!ga(t)?String(t):t,wo=(e,t="")=>{var n;return wt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class jc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ye&&(Ye.active?(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){++this._on===1&&(this.prevScope=Ye,Ye=this)}off(){if(this._on>0&&--this._on===0){if(Ye===this)Ye=this.prevScope;else{let t=Ye;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,r=o.length;n<r;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Bc(){return Ye}let Le;const ko=new WeakSet;class wa{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&(Ye.active?Ye.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ko.has(this)&&(ko.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||za(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ws(this),_a(this);const t=Le,n=yt;Le=this,yt=!0;try{return this.fn()}finally{Ca(this),Le=t,yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ks(t);this.deps=this.depsTail=void 0,Ws(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ko.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wo(this)&&this.run()}get dirty(){return Wo(this)}}let ka=0,Zn,Jn;function za(e,t=!1){if(e.flags|=8,t){e.next=Jn,Jn=e;return}e.next=Zn,Zn=e}function ys(){ka++}function ws(){if(--ka>0)return;if(Jn){let t=Jn;for(Jn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Zn;){let t=Zn;for(Zn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function _a(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ca(e){let t,n=e.depsTail,r=n;for(;r;){const o=r.prevDep;r.version===-1?(r===n&&(n=o),ks(r),Nc(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=t,e.depsTail=n}function Wo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Sa(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Sa(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===lr)||(e.globalVersion=lr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Wo(e))))return;e.flags|=2;const t=e.dep,n=Le,r=yt;Le=e,yt=!0;try{_a(e);const o=e.fn(e._value);(t.version===0||Pt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Le=n,yt=r,Ca(e),e.flags&=-3}}function ks(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)ks(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Nc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let yt=!0;const Ia=[];function Lt(){Ia.push(yt),yt=!1}function Ot(){const e=Ia.pop();yt=e===void 0?!0:e}function Ws(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Le;Le=void 0;try{t()}finally{Le=n}}}let lr=0;class Hc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Le||!yt||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new Hc(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,Aa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(t){this.version++,lr++,this.notify(t)}notify(t){ys();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ws()}}}function Aa(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Aa(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Xo=new WeakMap,wn=Symbol(""),Ko=Symbol(""),cr=Symbol("");function tt(e,t,n){if(yt&&Le){let r=Xo.get(e);r||Xo.set(e,r=new Map);let o=r.get(n);o||(r.set(n,o=new zs),o.map=r,o.key=n),o.track()}}function Ut(e,t,n,r,o,s){const l=Xo.get(e);if(!l){lr++;return}const a=c=>{c&&c.trigger()};if(ys(),t==="clear")l.forEach(a);else{const c=ue(e),p=c&&xs(n);if(c&&n==="length"){const u=Number(r);l.forEach((d,f)=>{(f==="length"||f===cr||!wt(f)&&f>=u)&&a(d)})}else switch((n!==void 0||l.has(void 0))&&a(l.get(n)),p&&a(l.get(cr)),t){case"add":c?p&&a(l.get("length")):(a(l.get(wn)),on(e)&&a(l.get(Ko)));break;case"delete":c||(a(l.get(wn)),on(e)&&a(l.get(Ko)));break;case"set":on(e)&&a(l.get(wn));break}}ws()}function zn(e){const t=Ce(e);return t===e||(tt(t,"iterate",cr),bt(e))?t:Vt(e)?sn(e)?t.map(n=>an(ht(n))):t.map(an):t.map(ht)}function io(e){return tt(e=Ce(e),"iterate",cr),e}function $t(e,t){return Vt(e)?an(sn(e)?ht(t):t):ht(t)}const Uc={__proto__:null,[Symbol.iterator](){return zo(this,Symbol.iterator,e=>$t(this,e))},concat(...e){return zn(this).concat(...e.map(t=>ue(t)?zn(t):t))},entries(){return zo(this,"entries",e=>(e[1]=$t(this,e[1]),e))},every(e,t){return Dt(this,"every",e,t,void 0,arguments)},filter(e,t){return Dt(this,"filter",e,t,n=>n.map(r=>$t(this,r)),arguments)},find(e,t){return Dt(this,"find",e,t,n=>$t(this,n),arguments)},findIndex(e,t){return Dt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Dt(this,"findLast",e,t,n=>$t(this,n),arguments)},findLastIndex(e,t){return Dt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Dt(this,"forEach",e,t,void 0,arguments)},includes(...e){return _o(this,"includes",e)},indexOf(...e){return _o(this,"indexOf",e)},join(e){return zn(this).join(e)},lastIndexOf(...e){return _o(this,"lastIndexOf",e)},map(e,t){return Dt(this,"map",e,t,void 0,arguments)},pop(){return Dn(this,"pop")},push(...e){return Dn(this,"push",e)},reduce(e,...t){return Ks(this,"reduce",e,t)},reduceRight(e,...t){return Ks(this,"reduceRight",e,t)},shift(){return Dn(this,"shift")},some(e,t){return Dt(this,"some",e,t,void 0,arguments)},splice(...e){return Dn(this,"splice",e)},toReversed(){return zn(this).toReversed()},toSorted(e){return zn(this).toSorted(e)},toSpliced(...e){return zn(this).toSpliced(...e)},unshift(...e){return Dn(this,"unshift",e)},values(){return zo(this,"values",e=>$t(this,e))}};function zo(e,t,n){const r=io(e),o=r[t],s=o.call(r);if(r!==e&&!bt(e)){if(s[Symbol.toStringTag]==="Array Iterator"){const l=Object.create(Object.getPrototypeOf(s));return l.next=()=>Xs(s.next(),n),o!==Ma[t]&&Object.defineProperties(l,{return:{get(){const a=s.return;return typeof a=="function"?a.bind(s):a}},throw:{get(){const a=s.throw;return typeof a=="function"?a.bind(s):a}}}),l}s._next=s.next,s.next=()=>Xs(s._next(),n)}return s}function Xs(e,t){return e.done||(e.value=t(e.value)),e}const Ma=Array.prototype;function Dt(e,t,n,r,o,s){const l=io(e),a=l!==e&&!bt(e),c=l[t];if(c!==Ma[t]){const d=c.apply(e,s);return a?ht(d):d}let p=n;l!==e&&(a?p=function(d,f){return n.call(this,$t(e,d),f,e)}:n.length>2&&(p=function(d,f){return n.call(this,d,f,e)}));const u=c.call(l,p,r);return a&&o?o(u):u}function Ks(e,t,n,r){const o=io(e),s=o!==e&&!bt(e);let l=n,a=!1;o!==e&&(s?(a=r.length===0,l=function(p,u,d){return a&&(a=!1,p=$t(e,p)),n.call(this,p,$t(e,u),d,e)}):n.length>3&&(l=function(p,u,d){return n.call(this,p,u,d,e)}));const c=o[t](l,...r);return a?$t(e,c):c}function _o(e,t,n){const r=Ce(e);tt(r,"iterate",cr);const o=r[t](...n);return(o===-1||o===!1)&&Ss(n[0])?(n[0]=Ce(n[0]),r[t](...n)):o}function Dn(e,t,n=[]){Lt(),ys();const r=Ce(e)[t].apply(e,n);return ws(),Ot(),r}const Gc=gs("__proto__,__v_isRef,__isVue"),$a=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wt));function qc(e){wt(e)||(e=String(e));const t=Ce(this);return tt(t,"has",e),t.hasOwnProperty(e)}class Ra{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(o?s?nd:Fa:s?Ea:Pa).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const l=ue(t);if(!o){let c;if(l&&(c=Uc[n]))return c;if(n==="hasOwnProperty")return qc}const a=Reflect.get(t,n,rt(t)?t:r);if((wt(n)?$a.has(n):Gc(n))||(o||tt(t,"get",n),s))return a;if(rt(a)){const c=l&&xs(n)?a:a.value;return o&&$e(c)?Zo(c):c}return $e(a)?o?Zo(a):ao(a):a}}class Ta extends Ra{constructor(t=!1){super(!1,t)}set(t,n,r,o){let s=t[n];const l=ue(t)&&xs(n);if(!this._isShallow){const p=Vt(s);if(!bt(r)&&!Vt(r)&&(s=Ce(s),r=Ce(r)),!l&&rt(s)&&!rt(r))return p||(s.value=r),!0}const a=l?Number(n)<t.length:Se(t,n),c=Reflect.set(t,n,r,rt(t)?t:o);return t===Ce(o)&&c&&(a?Pt(r,s)&&Ut(t,"set",n,r):Ut(t,"add",n,r)),c}deleteProperty(t,n){const r=Se(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&Ut(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!wt(n)||!$a.has(n))&&tt(t,"has",n),r}ownKeys(t){return tt(t,"iterate",ue(t)?"length":wn),Reflect.ownKeys(t)}}class Wc extends Ra{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Xc=new Ta,Kc=new Wc,Yc=new Ta(!0);const Yo=e=>e,kr=e=>Reflect.getPrototypeOf(e);function Zc(e,t,n){return function(...r){const o=this.__v_raw,s=Ce(o),l=on(s),a=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,p=o[e](...r),u=n?Yo:t?an:ht;return!t&&tt(s,"iterate",c?Ko:wn),He(Object.create(p),{next(){const{value:d,done:f}=p.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function zr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Jc(e,t){const n={get(o){const s=this.__v_raw,l=Ce(s),a=Ce(o);e||(Pt(o,a)&&tt(l,"get",o),tt(l,"get",a));const{has:c}=kr(l),p=t?Yo:e?an:ht;if(c.call(l,o))return p(s.get(o));if(c.call(l,a))return p(s.get(a));s!==l&&s.get(o)},get size(){const o=this.__v_raw;return!e&&tt(Ce(o),"iterate",wn),o.size},has(o){const s=this.__v_raw,l=Ce(s),a=Ce(o);return e||(Pt(o,a)&&tt(l,"has",o),tt(l,"has",a)),o===a?s.has(o):s.has(o)||s.has(a)},forEach(o,s){const l=this,a=l.__v_raw,c=Ce(a),p=t?Yo:e?an:ht;return!e&&tt(c,"iterate",wn),a.forEach((u,d)=>o.call(s,p(u),p(d),l))}};return He(n,e?{add:zr("add"),set:zr("set"),delete:zr("delete"),clear:zr("clear")}:{add(o){const s=Ce(this),l=kr(s),a=Ce(o),c=!t&&!bt(o)&&!Vt(o)?a:o;return l.has.call(s,c)||Pt(o,c)&&l.has.call(s,o)||Pt(a,c)&&l.has.call(s,a)||(s.add(c),Ut(s,"add",c,c)),this},set(o,s){!t&&!bt(s)&&!Vt(s)&&(s=Ce(s));const l=Ce(this),{has:a,get:c}=kr(l);let p=a.call(l,o);p||(o=Ce(o),p=a.call(l,o));const u=c.call(l,o);return l.set(o,s),p?Pt(s,u)&&Ut(l,"set",o,s):Ut(l,"add",o,s),this},delete(o){const s=Ce(this),{has:l,get:a}=kr(s);let c=l.call(s,o);c||(o=Ce(o),c=l.call(s,o)),a&&a.call(s,o);const p=s.delete(o);return c&&Ut(s,"delete",o,void 0),p},clear(){const o=Ce(this),s=o.size!==0,l=o.clear();return s&&Ut(o,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Zc(o,e,t)}),n}function _s(e,t){const n=Jc(e,t);return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_isShallow"?t:o==="__v_raw"?r:Reflect.get(Se(n,o)&&o in r?n:r,o,s)}const Qc={get:_s(!1,!1)},ed={get:_s(!1,!0)},td={get:_s(!0,!1)};const Pa=new WeakMap,Ea=new WeakMap,Fa=new WeakMap,nd=new WeakMap;function rd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ao(e){return Vt(e)?e:Cs(e,!1,Xc,Qc,Pa)}function La(e){return Cs(e,!1,Yc,ed,Ea)}function Zo(e){return Cs(e,!0,Kc,td,Fa)}function Cs(e,t,n,r,o){if(!$e(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=o.get(e);if(s)return s;const l=rd(Ac(e));if(l===0)return e;const a=new Proxy(e,l===2?r:n);return o.set(e,a),a}function sn(e){return Vt(e)?sn(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function bt(e){return!!(e&&e.__v_isShallow)}function Ss(e){return e?!!e.__v_raw:!1}function Ce(e){const t=e&&e.__v_raw;return t?Ce(t):e}function od(e){return!Se(e,"__v_skip")&&Object.isExtensible(e)&&ha(e,"__v_skip",!0),e}const ht=e=>$e(e)?ao(e):e,an=e=>$e(e)?Zo(e):e;function rt(e){return e?e.__v_isRef===!0:!1}function F(e){return Oa(e,!1)}function sd(e){return Oa(e,!0)}function Oa(e,t){return rt(e)?e:new id(e,t)}class id{constructor(t,n){this.dep=new zs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Ce(t),this._value=n?t:ht(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||bt(t)||Vt(t);t=r?t:Ce(t),Pt(t,n)&&(this._rawValue=t,this._value=r?t:ht(t),this.dep.trigger())}}function C(e){return rt(e)?e.value:e}const ad={get:(e,t,n)=>t==="__v_raw"?e:C(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return rt(o)&&!rt(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Va(e){return sn(e)?e:new Proxy(e,ad)}class ld{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new zs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=lr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return za(this,!0),!0}get value(){const t=this.dep.track();return Sa(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function cd(e,t,n=!1){let r,o;return ge(e)?r=e:(r=e.get,o=e.set),new ld(r,o,n)}const _r={},jr=new WeakMap;let gn;function dd(e,t=!1,n=gn){if(n){let r=jr.get(n);r||jr.set(n,r=[]),r.push(e)}}function ud(e,t,n=Fe){const{immediate:r,deep:o,once:s,scheduler:l,augmentJob:a,call:c}=n,p=A=>o?A:bt(A)||o===!1||o===0?Gt(A,1):Gt(A);let u,d,f,m,z=!1,y=!1;if(rt(e)?(d=()=>e.value,z=bt(e)):sn(e)?(d=()=>p(e),z=!0):ue(e)?(y=!0,z=e.some(A=>sn(A)||bt(A)),d=()=>e.map(A=>{if(rt(A))return A.value;if(sn(A))return p(A);if(ge(A))return c?c(A,2):A()})):ge(e)?t?d=c?()=>c(e,2):e:d=()=>{if(f){Lt();try{f()}finally{Ot()}}const A=gn;gn=u;try{return c?c(e,3,[m]):e(m)}finally{gn=A}}:d=Et,t&&o){const A=d,E=o===!0?1/0:o;d=()=>Gt(A(),E)}const S=Bc(),I=()=>{u.stop(),S&&S.active&&hs(S.effects,u)};if(s&&t){const A=t;t=(...E)=>{try{return A(...E)}finally{I()}}}let x=y?new Array(e.length).fill(_r):_r;const _=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(t){const E=u.run();if(A||o||z||(y?E.some((V,U)=>Pt(V,x[U])):Pt(E,x))){const V=gn;Lt();try{f&&f(),gn=u;const U=[E,x===_r?void 0:y&&x[0]===_r?[]:x,m];x=E,c?c(t,3,U):t(...U)}finally{gn=V,Ot()}}}else u.run()};return a&&a(_),u=new wa(d),u.scheduler=l?()=>l(_,!1):_,m=A=>dd(A,!1,u),f=u.onStop=()=>{const A=jr.get(u);if(A){if(c)c(A,4);else for(const E of A)E();jr.delete(u)}},t?r?_(!0):x=u.run():l?l(_.bind(null,!0),!0):u.run(),I.pause=u.pause.bind(u),I.resume=u.resume.bind(u),I.stop=I,I}function Gt(e,t=1/0,n){if(t<=0||!$e(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,rt(e))Gt(e.value,t,n);else if(ue(e))for(let r=0;r<e.length;r++)Gt(e[r],t,n);else if(Dr(e)||on(e))e.forEach(r=>{Gt(r,t,n)});else if(ga(e)){for(const r in e)Gt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Gt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vr(e,t,n,r){try{return r?e(...r):e()}catch(o){lo(o,t,n)}}function xt(e,t,n,r){if(ge(e)){const o=vr(e,t,n,r);return o&&ma(o)&&o.catch(s=>{lo(s,t,n)}),o}if(ue(e)){const o=[];for(let s=0;s<e.length;s++)o.push(xt(e[s],t,n,r));return o}}function lo(e,t,n,r=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||Fe;if(t){let a=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,p)===!1)return}a=a.parent}if(s){Lt(),vr(s,null,10,[e,c,p]),Ot();return}}pd(e,n,o,r,l)}function pd(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}const lt=[];let vt=-1;const Rt=[];let tn=null,_n=0;const Da=Promise.resolve();let Br=null;function An(e){const t=Br||Da;return e?t.then(this?e.bind(this):e):t}function fd(e){let t=vt+1,n=lt.length;for(;t<n;){const r=t+n>>>1,o=lt[r],s=dr(o);s<e||s===e&&o.flags&2?t=r+1:n=r}return t}function Is(e){if(!(e.flags&1)){const t=dr(e),n=lt[lt.length-1];!n||!(e.flags&2)&&t>=dr(n)?lt.push(e):lt.splice(fd(t),0,e),e.flags|=1,ja()}}function ja(){Br||(Br=Da.then(Ha))}function md(e){if(!ue(e))tn&&e.id===-1?tn.splice(_n+1,0,e):e.flags&1||(Rt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Rt.push(e[t]);ja()}function Ba(e,t,n,r=vt+1){for(;r<lt.length;r++){const o=lt[r];if(o&&o.flags&2){if(e&&o.id!==e.uid||t!==void 0&&!(o.id>=t))continue;lt.splice(r,1),r=e?r-1:vt,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function Na(e,t,n=0){if(Rt.length){let r=Rt,o=0;if(t){r=[];for(let l=0;l<Rt.length;l++){const a=Rt[l];(a.i!==void 0?!a.i||a.i.uid<n:t.has(a))?Rt[o++]=a:r.push(a)}}const s=[...new Set(r)].sort((l,a)=>dr(l)-dr(a));if(Rt.length=o,tn){for(let l=0;l<s.length;l++)tn.push(s[l]);return}for(tn=s,_n=0;_n<tn.length;_n++){const l=tn[_n];l.flags&4&&(l.flags&=-2),l.flags&8||l(),l.flags&=-2}tn=null,_n=0}}let Co=!1;function bd(e,t){if(Co){e();return}const n=t===void 0?void 0:new Set(Rt);e(),Co=!0;try{Ba(void 0,t),Na(void 0,n,t)}finally{Co=!1}}const dr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ha(e){try{for(vt=0;vt<lt.length;vt++){const t=lt[vt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),vr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;vt<lt.length;vt++){const t=lt[vt];t&&(t.flags&=-2)}vt=-1,lt.length=0,Na(),Br=null,(lt.length||Rt.length)&&Ha()}}let Ze=null,Ua=null;function Nr(e){const t=Ze;return Ze=e,Ua=e&&e.type.__scopeId||null,t}function Y(e,t=Ze,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&qr(-1);const s=Nr(t),l=Wt.length;let a;try{a=e(...o)}finally{for(let c=Wt.length;c>l;c--)Rs();Nr(s),r._d&&qr(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Mn(e,t){if(Ze===null)return e;const n=ho(Ze),r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,l,a,c=Fe]=t[o];s&&(ge(s)&&(s={mounted:s,updated:s}),s.deep&&Gt(l),r.push({dir:s,instance:n,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function pn(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let l=0;l<o.length;l++){const a=o[l];s&&(a.oldValue=s[l].value);let c=a.dir[r];c&&(Lt(),xt(c,n,8,[e.el,a,e,t]),Ot())}}function Pr(e,t){if(nt){let n=nt.provides;const r=nt.parent&&nt.parent.provides;r===n&&(n=nt.provides=Object.create(r)),n[e]=t}}function Ft(e,t,n=!1){const r=go();if(r||Rn){let o=Rn?Rn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&ge(t)?t.call(r&&r.proxy):t}}const gd=Symbol.for("v-scx"),hd=()=>Ft(gd);function gt(e,t,n){return Ga(e,t,n)}function Ga(e,t,n=Fe){const{immediate:r,deep:o,flush:s,once:l}=n,a=He({},n),c=t&&r||!t&&s!=="post";let p;if(br){if(s==="sync"){const m=hd();p=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Et,m.resume=Et,m.pause=Et,m}}const u=nt;a.call=(m,z,y)=>xt(m,u,z,y);let d=!1;s==="post"?a.scheduler=m=>{m.i=u,dt(m,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(m,z)=>{z?m():Is(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const f=ud(e,t,a);return br&&(p?p.push(f):c&&f()),f}function xd(e,t,n){const r=this.proxy,o=De(e)?e.includes(".")?qa(r,e):()=>r[e]:e.bind(r,r);let s;ge(t)?s=t:(s=t.handler,n=t);const l=wr(this),a=Ga(o,s.bind(r),n);return l(),a}function qa(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const vd=Symbol("_vte"),co=e=>e.__isTeleport,mt=Symbol("_leaveCb"),jn=Symbol("_enterCb");function Wa(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xe(()=>{e.isMounted=!0}),el(()=>{e.isUnmounting=!0}),e}const ft=[Function,Array],Xa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},yd={name:"BaseTransition",props:Xa,setup(e,{slots:t}){const n=go(),r=Wa();return()=>{const o=t.default&&As(t.default(),!0),s=o&&o.length?Ka(o):n.subTree?re():void 0;if(!s)return;const l=Ce(e),{mode:a}=l;if(r.isLeaving)return So(s);const c=Hr(s);if(!c)return So(s);let p=ur(c,l,r,n,d=>p=d);c.type!==Qe&&ln(c,p);let u=n.subTree&&Hr(n.subTree);if(u&&u.type!==Qe&&!hn(u,c)&&pr(n.subTree)){let d=ur(u,l,r,n);if(ln(u,d),a==="out-in"&&c.type!==Qe)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},So(s);a==="in-out"&&c.type!==Qe?d.delayLeave=(f,m,z)=>{const y=Ya(r,u);y[String(u.key)]=u,f[mt]=()=>{m(),f[mt]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{z(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Ka(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Qe){t=n;break}}return t}const wd=yd;function Ya(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ur(e,t,n,r,o){const{appear:s,mode:l,persisted:a=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:z,onLeaveCancelled:y,onBeforeAppear:S,onAppear:I,onAfterAppear:x,onAppearCancelled:_}=t,A=String(e.key),E=Ya(n,e),V=(j,ne)=>{j&&xt(j,r,9,ne)},U=(j,ne)=>{const de=ne[1];V(j,ne),ue(j)?j.every(W=>W.length<=1)&&de():j.length<=1&&de()},D={mode:l,persisted:a,beforeEnter(j){let ne=c;if(!n.isMounted)if(s)ne=S||c;else return;j[mt]&&j[mt](!0);const de=E[A];if(de&&hn(e,de)){let W=de.el[mt];if(!W){const he=pr(de);W=he&&he.el[mt]}W&&W()}V(ne,[j])},enter(j){if(E[A]===e)return;let ne=p,de=u,W=d;if(!n.isMounted)if(s)ne=I||p,de=x||u,W=_||d;else return;let he=!1;j[jn]=Oe=>{he||(he=!0,Oe?V(W,[j]):V(de,[j]),D.delayedLeave&&D.delayedLeave(),j[jn]=void 0)};const Re=j[jn].bind(null,!1);ne?U(ne,[j,Re]):Re()},leave(j,ne){const de=String(e.key);if(j[jn]&&j[jn](!0),n.isUnmounting)return ne();V(f,[j]);let W=!1;j[mt]=Re=>{W||(W=!0,ne(),Re?V(y,[j]):V(z,[j]),j[mt]=void 0,E[de]===e&&delete E[de])};const he=j[mt].bind(null,!1);E[de]=e,m?U(m,[j,he]):he()},clone(j){const ne=ur(j,t,n,r,o);return o&&o(ne),ne}};return D}function So(e){if(po(e))return e=cn(e),e.children=null,e}function Hr(e){if(!po(e))return co(e.type)&&e.children?Ka(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ge(n.default))return n.default()}}function ln(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;ln(co(n.type)&&Hr(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===se&&ue(e.children)){const n=cl(e.children,!1);n&&ln(n,t)}}function As(e,t=!1,n){let r=[],o=0;for(let s=0;s<e.length;s++){let l=e[s];const a=n==null?l.key:String(n)+String(l.key!=null?l.key:s);l.type===se?(l.patchFlag&128&&o++,r=r.concat(As(l.children,t,a))):(t||l.type!==Qe)&&r.push(a!=null?cn(l,{key:a}):l)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function pr(e){if(e.component)return pr(e.component.subTree);if(e.type===se){const t=ue(e.children)&&cl(e.children,!1);return t?pr(t):void 0}if(e.type!==Qe)return e}function ie(e,t){return ge(e)?He({name:e.name},t,{setup:e}):e}function uo(){const e=go();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Za(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ys(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Ur=new WeakMap;function Qn(e,t,n,r,o=!1){if(ue(e)){e.forEach((y,S)=>Qn(y,t&&(ue(t)?t[S]:t),n,r,o));return}if($n(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qn(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?ho(r.component):r.el,l=o?null:s,{i:a,r:c}=e,p=t&&t.r,u=a.refs===Fe?a.refs={}:a.refs,d=a.setupState,f=Ce(d),m=d===Fe?fa:y=>Ys(u,y)?!1:Se(f,y),z=(y,S)=>!(S&&Ys(u,S));if(p!=null&&p!==c){if(Zs(t),De(p))u[p]=null,m(p)&&(d[p]=null);else if(rt(p)){const y=t;z(p,y.k)&&(p.value=null),y.k&&(u[y.k]=null)}}if(ge(c))vr(c,a,12,[l,u]);else{const y=De(c),S=rt(c);if(y||S){const I=()=>{if(e.f){const x=y?m(c)?d[c]:u[c]:z()||!e.k?c.value:u[e.k];if(o)ue(x)&&hs(x,s);else if(ue(x))x.includes(s)||x.push(s);else if(y)u[c]=[s],m(c)&&(d[c]=u[c]);else{const _=[s];z(c,e.k)&&(c.value=_),e.k&&(u[e.k]=_)}}else y?(u[c]=l,m(c)&&(d[c]=l)):S&&(z(c,e.k)&&(c.value=l),e.k&&(u[e.k]=l))};if(l){const x=()=>{I(),Ur.delete(e)};x.id=-1,Ur.set(e,x),dt(x,n)}else Zs(e),I()}}}function Zs(e){const t=Ur.get(e);t&&(t.flags|=8,Ur.delete(e))}oo().requestIdleCallback;oo().cancelIdleCallback;const $n=e=>!!e.type.__asyncLoader,po=e=>e.type.__isKeepAlive;function kd(e,t){Ja(e,"a",t)}function zd(e,t){Ja(e,"da",t)}function Ja(e,t,n=nt){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(fo(t,r,n),n){let o=n.parent;for(;o&&o.parent;)po(o.parent.vnode)&&_d(r,t,n,o),o=o.parent}}function _d(e,t,n,r){const o=fo(t,e,r,!0);et(()=>{hs(r[t],o)},n)}function fo(e,t,n=nt,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...l)=>{Lt();const a=wr(n),c=xt(t,n,e,l);return a(),Ot(),c});return r?o.unshift(s):o.push(s),s}}const Yt=e=>(t,n=nt)=>{(!br||e==="sp")&&fo(e,(...r)=>t(...r),n)},Cd=Yt("bm"),Xe=Yt("m"),Sd=Yt("bu"),Qa=Yt("u"),el=Yt("bum"),et=Yt("um"),Id=Yt("sp"),Ad=Yt("rtg"),Md=Yt("rtc");function $d(e,t=nt){fo("ec",e,t)}const tl="components";function yr(e,t){return rl(tl,e,!0,t)||e}const nl=Symbol.for("v-ndc");function Je(e){return De(e)?rl(tl,e,!1)||e:e||nl}function rl(e,t,n=!0,r=!1){const o=Ze||nt;if(o){const s=o.type;{const a=fu(s,!1);if(a&&(a===t||a===ct(t)||a===ro(ct(t))))return s}const l=Js(o[e]||s[e],t)||Js(o.appContext[e],t);return!l&&r?s:l}}function Js(e,t){return e&&(e[t]||e[ct(t)]||e[ro(ct(t))])}function we(e,t,n,r){let o;const s=n,l=ue(e);if(l||De(e)){const a=l&&sn(e);let c=!1,p=!1;a&&(c=!bt(e),p=Vt(e),e=io(e)),o=new Array(e.length);for(let u=0,d=e.length;u<d;u++)o[u]=t(c?p?an(ht(e[u])):ht(e[u]):e[u],u,void 0,s)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)o=[];else{o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,s)}else if($e(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>t(a,c,void 0,s));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,p=a.length;c<p;c++){const u=a[c];o[c]=t(e[u],u,c,s)}}else o=[];return o}function We(e,t,n,r,o,s){if(n==null&&(n={}),Ze.ce||Ze.parent&&$n(Ze.parent)&&Ze.parent.ce){const p=s!=null&&n.key==null?He({},n,{key:s}):n,u=Object.keys(p).length>0;return t!=="default"&&(p.name=t),b(),fe(se,null,[w("slot",p,r&&r())],u?-2:64)}let l=e[t];l&&l._c&&(l._d=!1);const a=Wt.length;b();let c;try{const p=l&&ol(l(n)),u=n.key||s||p&&p.key;c=fe(se,{key:(u&&!wt(u)?u:`_${t}`)+(!p&&r?"_fb":"")},p||(r?r():[]),p&&e._===1?64:-2)}catch(p){for(let u=Wt.length;u>a;u--)Rs();throw p}finally{l&&l._c&&(l._d=!0)}return!o&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function ol(e){return e.some(t=>Tn(t)?!(t.type===Qe||t.type===se&&!ol(t.children)):!0)?e:null}const Jo=e=>e?Cl(e)?ho(e):Jo(e.parent):null,er=He(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jo(e.parent),$root:e=>Jo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>il(e),$forceUpdate:e=>e.f||(e.f=()=>{Is(e.update)}),$nextTick:e=>e.n||(e.n=An.bind(e.proxy)),$watch:e=>xd.bind(e)}),Io=(e,t)=>e!==Fe&&!e.__isScriptSetup&&Se(e,t),Rd={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:s,accessCache:l,type:a,appContext:c}=e;if(t[0]!=="$"){const f=l[t];if(f!==void 0)switch(f){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(Io(r,t))return l[t]=1,r[t];if(o!==Fe&&Se(o,t))return l[t]=2,o[t];if(Se(s,t))return l[t]=3,s[t];if(n!==Fe&&Se(n,t))return l[t]=4,n[t];Qo&&(l[t]=0)}}const p=er[t];let u,d;if(p)return t==="$attrs"&&tt(e.attrs,"get",""),p(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==Fe&&Se(n,t))return l[t]=4,n[t];if(d=c.config.globalProperties,Se(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Io(o,t)?(o[t]=n,!0):r!==Fe&&Se(r,t)?(r[t]=n,!0):Se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,props:s,type:l}},a){let c;return!!(n[a]||e!==Fe&&a[0]!=="$"&&Se(e,a)||Io(t,a)||Se(s,a)||Se(r,a)||Se(er,a)||Se(o.config.globalProperties,a)||(c=l.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Qs(e){return ue(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Qo=!0;function Td(e){const t=il(e),n=e.proxy,r=e.ctx;Qo=!1,t.beforeCreate&&ei(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:l,watch:a,provide:c,inject:p,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:z,activated:y,deactivated:S,beforeDestroy:I,beforeUnmount:x,destroyed:_,unmounted:A,render:E,renderTracked:V,renderTriggered:U,errorCaptured:D,serverPrefetch:j,expose:ne,inheritAttrs:de,components:W,directives:he,filters:Re}=t;if(p&&Pd(p,r,null),l)for(const be in l){const le=l[be];ge(le)&&(r[be]=le.bind(n))}if(o){const be=o.call(n,n);$e(be)&&(e.data=ao(be))}if(Qo=!0,s)for(const be in s){const le=s[be],Te=ge(le)?le.bind(n,n):ge(le.get)?le.get.bind(n,n):Et,Q=!ge(le)&&ge(le.set)?le.set.bind(n):Et,Be=ce({get:Te,set:Q});Object.defineProperty(r,be,{enumerable:!0,configurable:!0,get:()=>Be.value,set:ze=>Be.value=ze})}if(a)for(const be in a)sl(a[be],r,n,be);if(c){const be=ge(c)?c.call(n):c;Reflect.ownKeys(be).forEach(le=>{Pr(le,be[le])})}u&&ei(u,e,"c");function ve(be,le){ue(le)?le.forEach(Te=>be(Te.bind(n))):le&&be(le.bind(n))}if(ve(Cd,d),ve(Xe,f),ve(Sd,m),ve(Qa,z),ve(kd,y),ve(zd,S),ve($d,D),ve(Md,V),ve(Ad,U),ve(el,x),ve(et,A),ve(Id,j),ue(ne))if(ne.length){const be=e.exposed||(e.exposed={});ne.forEach(le=>{Object.defineProperty(be,le,{get:()=>n[le],set:Te=>n[le]=Te,enumerable:!0})})}else e.exposed||(e.exposed={});E&&e.render===Et&&(e.render=E),de!=null&&(e.inheritAttrs=de),W&&(e.components=W),he&&(e.directives=he),j&&Za(e)}function Pd(e,t,n=Et){ue(e)&&(e=es(e));for(const r in e){const o=e[r];let s;$e(o)?"default"in o?s=Ft(o.from||r,o.default,!0):s=Ft(o.from||r):s=Ft(o),rt(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):t[r]=s}}function ei(e,t,n){xt(ue(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function sl(e,t,n,r){let o=r.includes(".")?qa(n,r):()=>n[r];if(De(e)){const s=t[e];ge(s)&&gt(o,s)}else if(ge(e))gt(o,e.bind(n));else if($e(e))if(ue(e))e.forEach(s=>sl(s,t,n,r));else{const s=ge(e.handler)?e.handler.bind(n):t[e.handler];ge(s)&&gt(o,s,e)}}function il(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:l}}=e.appContext,a=s.get(t);let c;return a?c=a:!o.length&&!n&&!r?c=t:(c={},o.length&&o.forEach(p=>Gr(c,p,l,!0)),Gr(c,t,l)),$e(t)&&s.set(t,c),c}function Gr(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&Gr(e,s,n,!0),o&&o.forEach(l=>Gr(e,l,n,!0));for(const l in t)if(!(r&&l==="expose")){const a=Ed[l]||n&&n[l];e[l]=a?a(e[l],t[l]):t[l]}return e}const Ed={data:ti,props:ni,emits:ni,methods:qn,computed:qn,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:qn,directives:qn,watch:Ld,provide:ti,inject:Fd};function ti(e,t){return t?e?function(){return He(ge(e)?e.call(this,this):e,ge(t)?t.call(this,this):t)}:t:e}function Fd(e,t){return qn(es(e),es(t))}function es(e){if(ue(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function st(e,t){return e?[...new Set([].concat(e,t))]:t}function qn(e,t){return e?He(Object.create(null),e,t):t}function ni(e,t){return e?ue(e)&&ue(t)?[...new Set([...e,...t])]:He(Object.create(null),Qs(e),Qs(t??{})):t}function Ld(e,t){if(!e)return t;if(!t)return e;const n=He(Object.create(null),e);for(const r in t)n[r]=st(e[r],t[r]);return n}function al(){return{app:null,config:{isNativeTag:fa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Od=0;function Vd(e,t){return function(r,o=null){ge(r)||(r=He({},r)),o!=null&&!$e(o)&&(o=null);const s=al(),l=new WeakSet,a=[];let c=!1;const p=s.app={_uid:Od++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:bu,get config(){return s.config},set config(u){},use(u,...d){return l.has(u)||(u&&ge(u.install)?(l.add(u),u.install(p,...d)):ge(u)&&(l.add(u),u(p,...d))),p},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),p},component(u,d){return d?(s.components[u]=d,p):s.components[u]},directive(u,d){return d?(s.directives[u]=d,p):s.directives[u]},mount(u,d,f){if(!c){const m=p._ceVNode||w(r,o);return m.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),e(m,u,f),c=!0,p._container=u,u.__vue_app__=p,ho(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(xt(a,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,d){return s.provides[u]=d,p},runWithContext(u){const d=Rn;Rn=p;try{return u()}finally{Rn=d}}};return p}}let Rn=null;const Dd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ct(t)}Modifiers`]||e[`${dn(t)}Modifiers`];function jd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Fe;let o=n;const s=t.startsWith("update:"),l=s&&Dd(r,t.slice(7));l&&(l.trim&&(o=n.map(u=>De(u)?u.trim():u)),l.number&&(o=o.map(vs)));let a,c=r[a=yo(t)]||r[a=yo(ct(t))];!c&&s&&(c=r[a=yo(dn(t))]),c&&xt(c,e,6,o);const p=r[a+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,xt(p,e,6,o)}}const Bd=new WeakMap;function ll(e,t,n=!1){const r=n?Bd:t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let l={},a=!1;if(!ge(e)){const c=p=>{const u=ll(p,t,!0);u&&(a=!0,He(l,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?($e(e)&&r.set(e,null),null):(ue(s)?s.forEach(c=>l[c]=null):He(l,s),$e(e)&&r.set(e,l),l)}function mo(e,t){return!e||!eo(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),Se(e,t[0].toLowerCase()+t.slice(1))||Se(e,dn(t))||Se(e,t))}function ri(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:l,attrs:a,emit:c,render:p,renderCache:u,props:d,data:f,setupState:m,ctx:z,inheritAttrs:y}=e,S=Nr(e);let I,x;try{if(n.shapeFlag&4){const A=o||r,E=A;I=Tt(p.call(E,A,u,d,m,f,z)),x=a}else{const A=t;I=Tt(A.length>1?A(d,{attrs:a,slots:l,emit:c}):A(d,null)),x=t.props?a:Nd(a)}}catch(A){Wt.length=0,lo(A,e,1),I=w(Qe)}let _=I;if(x&&y!==!1){const A=Object.keys(x),{shapeFlag:E}=_;A.length&&E&7&&(s&&A.some(to)&&(x=Hd(x,s)),_=cn(_,x,!1,!0))}if(n.dirs&&(_=cn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition){const A=co(_.type)&&Hr(_)||_;ln(A,n.transition)}return I=_,Nr(S),I}function cl(e,t=!0){let n;for(let r=0;r<e.length;r++){const o=e[r];if(Tn(o)){if(o.type!==Qe||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Nd=e=>{let t;for(const n in e)(n==="class"||n==="style"||eo(n))&&((t||(t={}))[n]=e[n]);return t},Hd=(e,t)=>{const n={};for(const r in e)(!to(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ud(e,t,n){const{props:r,children:o,component:s}=e,{props:l,children:a,patchFlag:c}=t,p=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?oi(r,l,p):!!l;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(dl(l,r,f)&&!mo(p,f))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===l?!1:r?l?oi(r,l,p):!0:!!l;return!1}function oi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(!Se(e,s)||dl(t,e,s)&&!mo(n,s))return!0}return!1}function dl(e,t,n){const r=e[n],o=t[n];return n==="style"&&$e(r)&&$e(o)?!so(r,o):r!==o}function Gd({vnode:e,parent:t,suspense:n},r){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=r,e=o),o===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const ul={},pl=()=>Object.create(ul),fl=e=>Object.getPrototypeOf(e)===ul;function qd(e,t,n,r=!1){const o={},s=pl();e.propsDefaults=Object.create(null),ml(e,t,o,s);for(const l in e.propsOptions[0])l in o||(o[l]=void 0);n?e.props=r?o:La(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Wd(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:l}}=e,a=Ce(o),[c]=e.propsOptions;let p=!1;if((r||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(mo(e.emitsOptions,f))continue;const m=t[f];if(c)if(Se(s,f))m!==s[f]&&(s[f]=m,p=!0);else{const z=ct(f);o[z]=ts(c,a,z,m,e,!1)}else m!==s[f]&&(s[f]=m,p=!0)}}}else{ml(e,t,o,s)&&(p=!0);let u;for(const d in a)(!t||!Se(t,d)&&((u=dn(d))===d||!Se(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(o[d]=ts(c,a,d,void 0,e,!0)):delete o[d]);if(s!==a)for(const d in s)(!t||!Se(t,d))&&(delete s[d],p=!0)}p&&Ut(e.attrs,"set","")}function ml(e,t,n,r){const[o,s]=e.propsOptions;let l=!1,a;if(t)for(let c in t){if(Yn(c))continue;const p=t[c];let u;o&&Se(o,u=ct(c))?!s||!s.includes(u)?n[u]=p:(a||(a={}))[u]=p:mo(e.emitsOptions,c)||(!(c in r)||p!==r[c])&&(r[c]=p,l=!0)}if(s){const c=Ce(n),p=a||Fe;for(let u=0;u<s.length;u++){const d=s[u];n[d]=ts(o,c,d,p[d],e,!Se(p,d))}}return l}function ts(e,t,n,r,o,s){const l=e[n];if(l!=null){const a=Se(l,"default");if(a&&r===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&ge(c)){const{propsDefaults:p}=o;if(n in p)r=p[n];else{const u=wr(o);r=p[n]=c.call(null,t),u()}}else r=c;o.ce&&o.ce._setProp(n,r)}l[0]&&(s&&!a?r=!1:l[1]&&(r===""||r===dn(n))&&(r=!0))}return r}const Xd=new WeakMap;function bl(e,t,n=!1){const r=n?Xd:t.propsCache,o=r.get(e);if(o)return o;const s=e.props,l={},a=[];let c=!1;if(!ge(e)){const u=d=>{c=!0;const[f,m]=bl(d,t,!0);He(l,f),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return $e(e)&&r.set(e,xn),xn;if(ue(s))for(let u=0;u<s.length;u++){const d=ct(s[u]);si(d)&&(l[d]=Fe)}else if(s)for(const u in s){const d=ct(u);if(si(d)){const f=s[u],m=l[d]=ue(f)||ge(f)?{type:f}:He({},f),z=m.type;let y=!1,S=!0;if(ue(z))for(let I=0;I<z.length;++I){const x=z[I],_=ge(x)&&x.name;if(_==="Boolean"){y=!0;break}else _==="String"&&(S=!1)}else y=ge(z)&&z.name==="Boolean";m[0]=y,m[1]=S,(y||Se(m,"default"))&&a.push(d)}}const p=[l,a];return $e(e)&&r.set(e,p),p}function si(e){return e[0]!=="$"&&!Yn(e)}const Ms=e=>e==="_"||e==="_ctx"||e==="$stable",$s=e=>ue(e)?e.map(Tt):[Tt(e)],Kd=(e,t,n)=>{if(t._n)return t;const r=Y((...o)=>$s(t(...o)),n);return r._c=!1,r},gl=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Ms(o))continue;const s=e[o];if(ge(s))t[o]=Kd(o,s,r);else if(s!=null){const l=$s(s);t[o]=()=>l}}},hl=(e,t)=>{const n=$s(t);e.slots.default=()=>n},xl=(e,t,n)=>{for(const r in t)(n||!Ms(r))&&(e[r]=t[r])},Yd=(e,t,n)=>{const r=e.slots=pl();if(e.vnode.shapeFlag&32){const o=t._;o?(xl(r,t,n),n&&ha(r,"_",o,!0)):gl(t,r)}else t&&hl(e,t)},Zd=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,l=Fe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:xl(o,t,n):(s=!t.$stable,gl(t,o)),l=t}else t&&(hl(e,t),l={default:1});if(s)for(const a in o)!Ms(a)&&l[a]==null&&delete o[a]},dt=nu;function Jd(e){return Qd(e)}function Qd(e,t){const n=oo();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:l,createText:a,createComment:c,setText:p,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=Et,insertStaticContent:z}=e,y=(g,k,$,R=null,P=null,N=null,q=void 0,X=null,K=!!k.dynamicChildren)=>{if(g===k)return;g&&!hn(g,k)&&(R=L(g),ze(g,P,N,!0),g=null),k.patchFlag===-2&&(K=!1,k.dynamicChildren=null),k.dynamicChildren&&g&&g.dynamicChildren&&g.dynamicChildren.hasOnce&&(k.dynamicChildren===xn&&(k.dynamicChildren=[]),k.dynamicChildren.hasOnce=!0);const{type:B,ref:h,shapeFlag:Z}=k;switch(B){case bo:S(g,k,$,R);break;case Qe:I(g,k,$,R);break;case Er:g==null&&x(k,$,R,q);break;case se:W(g,k,$,R,P,N,q,X,K);break;default:Z&1?E(g,k,$,R,P,N,q,X,K):Z&6?he(g,k,$,R,P,N,q,X,K):(Z&64||Z&128)&&B.process(g,k,$,R,P,N,q,X,K,G)}h!=null&&P?Qn(h,g&&g.ref,N,k||g,!k):h==null&&g&&g.ref!=null&&Qn(g.ref,null,N,g,!0)},S=(g,k,$,R)=>{if(g==null)r(k.el=a(k.children),$,R);else{const P=k.el=g.el;k.children!==g.children&&p(P,k.children)}},I=(g,k,$,R)=>{g==null?r(k.el=c(k.children||""),$,R):k.el=g.el},x=(g,k,$,R)=>{[g.el,g.anchor]=z(g.children,k,$,R,g.el,g.anchor)},_=({el:g,anchor:k},$,R)=>{let P;for(;g&&g!==k;)P=f(g),r(g,$,R),g=P;r(k,$,R)},A=({el:g,anchor:k})=>{let $;for(;g&&g!==k;)$=f(g),o(g),g=$;o(k)},E=(g,k,$,R,P,N,q,X,K)=>{if(k.type==="svg"?q="svg":k.type==="math"&&(q="mathml"),g==null)V(k,$,R,P,N,q,X,K);else{const B=g.el&&g.el._isVueCE?g.el:null;try{B&&B._beginPatch(),j(g,k,P,N,q,X,K)}finally{B&&B._endPatch()}}},V=(g,k,$,R,P,N,q,X)=>{let K,B;const{props:h,shapeFlag:Z,transition:O,dirs:H}=g;if(K=g.el=l(g.type,N,h&&h.is,h),Z&8?u(K,g.children):Z&16&&D(g.children,K,null,R,P,Ao(g,N),q,X),H&&pn(g,null,R,"created"),U(K,g,g.scopeId,q,R),h){for(const Ee in h)Ee!=="value"&&!Yn(Ee)&&s(K,Ee,null,h[Ee],N,R);"value"in h&&s(K,"value",null,h.value,N),(B=h.onVnodeBeforeMount)&&It(B,R,g)}H&&pn(g,null,R,"beforeMount");const ye=eu(P,O);ye&&O.beforeEnter(K),r(K,k,$),((B=h&&h.onVnodeMounted)||ye||H)&&dt(()=>{try{B&&It(B,R,g),ye&&O.enter(K),H&&pn(g,null,R,"mounted")}finally{}},P)},U=(g,k,$,R,P)=>{if($&&m(g,$),R)for(let N=0;N<R.length;N++)m(g,R[N]);if(P){let N=P.subTree;if(k===N||wl(N.type)&&(N.ssContent===k||N.ssFallback===k)){const q=P.vnode;U(g,q,q.scopeId,q.slotScopeIds,P.parent)}}},D=(g,k,$,R,P,N,q,X,K=0)=>{for(let B=K;B<g.length;B++){const h=g[B]=X?Ht(g[B]):Tt(g[B]);y(null,h,k,$,R,P,N,q,X)}},j=(g,k,$,R,P,N,q)=>{const X=k.el=g.el;let{patchFlag:K,dynamicChildren:B,dirs:h}=k;K|=g.patchFlag&16;const Z=g.props||Fe,O=k.props||Fe;let H;if($&&fn($,!1),(H=O.onVnodeBeforeUpdate)&&It(H,$,k,g),h&&pn(k,g,$,"beforeUpdate"),$&&fn($,!0),B&&(!g.dynamicChildren||g.dynamicChildren.length!==B.length)&&(K=0,q=!1,B=null),(Z.innerHTML&&O.innerHTML==null||Z.textContent&&O.textContent==null)&&u(X,""),B?ne(g.dynamicChildren,B,X,$,R,Ao(k,P),N):q||le(g,k,X,null,$,R,Ao(k,P),N,!1),K>0){if(K&16)de(X,Z,O,$,P);else if(K&2&&Z.class!==O.class&&s(X,"class",null,O.class,P),K&4&&s(X,"style",Z.style,O.style,P),K&8){const ye=k.dynamicProps;for(let Ee=0;Ee<ye.length;Ee++){const Pe=ye[Ee],Ue=Z[Pe],Ke=O[Pe];(Ke!==Ue||Pe==="value")&&s(X,Pe,Ue,Ke,P,$)}}K&1&&g.children!==k.children&&u(X,k.children)}else!q&&B==null&&de(X,Z,O,$,P);((H=O.onVnodeUpdated)||h)&&dt(()=>{H&&It(H,$,k,g),h&&pn(k,g,$,"updated")},R)},ne=(g,k,$,R,P,N,q)=>{for(let X=0;X<k.length;X++){const K=g[X],B=k[X],h=K.el||ns(K),Z=h&&(K.type===se||!hn(K,B)||K.shapeFlag&198)?d(h):$;y(K,B,Z,null,R,P,N,q,!0)}},de=(g,k,$,R,P)=>{if(k!==$){if(k!==Fe)for(const N in k)!Yn(N)&&!(N in $)&&s(g,N,k[N],null,P,R);for(const N in $){if(Yn(N))continue;const q=$[N],X=k[N];q!==X&&N!=="value"&&s(g,N,X,q,P,R)}"value"in $&&s(g,"value",k.value,$.value,P)}},W=(g,k,$,R,P,N,q,X,K)=>{const B=k.el=g?g.el:a(""),h=k.anchor=g?g.anchor:a("");let{patchFlag:Z,dynamicChildren:O,slotScopeIds:H}=k;H&&(X=X?X.concat(H):H),g==null?(r(B,$,R),r(h,$,R),D(k.children||[],$,h,P,N,q,X,K)):Z>0&&Z&64&&O&&g.dynamicChildren&&g.dynamicChildren.length===O.length?(ne(g.dynamicChildren,O,$,P,N,q,X),(k.key!=null||P&&k===P.subTree)&&vl(g,k,!0)):le(g,k,$,h,P,N,q,X,K)},he=(g,k,$,R,P,N,q,X,K)=>{k.slotScopeIds=X,g==null?k.shapeFlag&512?P.ctx.activate(k,$,R,q,K):Re(k,$,R,P,N,q,K):Oe(g,k,K)},Re=(g,k,$,R,P,N,q)=>{const X=g.component=lu(g,R,P);if(po(g)&&(X.ctx.renderer=G),cu(X,!1,q),X.asyncDep){if(P&&P.registerDep(X,ve,q,N),!g.el){const K=X.subTree=w(Qe);I(null,K,k,$),g.placeholder=K.el}}else ve(X,g,k,$,P,N,q)},Oe=(g,k,$)=>{const R=k.component=g.component;if(Ud(g,k,$))if(R.asyncDep&&!R.asyncResolved){k.el=g.el,k.placeholder=g.placeholder,be(R,k,$);return}else R.next=k,R.update();else k.el=g.el,k.placeholder=g.placeholder,R.vnode=k},ve=(g,k,$,R,P,N,q)=>{const X=()=>{if(g.isMounted){let{next:Z,bu:O,u:H,parent:ye,vnode:Ee}=g;{const Ct=yl(g);if(Ct){Z&&(Z.el=Ee.el,be(g,Z,q)),Ct.asyncDep.then(()=>{dt(()=>{g.isUnmounted||B()},P)});return}}let Pe=Z,Ue;fn(g,!1),Z?(Z.el=Ee.el,be(g,Z,q)):Z=Ee,O&&Tr(O),(Ue=Z.props&&Z.props.onVnodeBeforeUpdate)&&It(Ue,ye,Z,Ee),fn(g,!0);const Ke=ri(g),_t=g.subTree;g.subTree=Ke,y(_t,Ke,d(_t.el),L(_t),g,P,N),Z.el=Ke.el,Pe===null&&Gd(g,Ke.el),H&&dt(H,P),(Ue=Z.props&&Z.props.onVnodeUpdated)&&dt(()=>It(Ue,ye,Z,Ee),P)}else{let Z;const{el:O,props:H}=k,{bm:ye,m:Ee,parent:Pe,root:Ue,type:Ke}=g,_t=$n(k);fn(g,!1),ye&&Tr(ye),!_t&&(Z=H&&H.onVnodeBeforeMount)&&It(Z,Pe,k),fn(g,!0);{Ue.ce&&Ue.ce._hasShadowRoot()&&Ue.ce._injectChildStyle(Ke,g.parent?g.parent.type:void 0);const Ct=g.subTree=ri(g);y(null,Ct,$,R,g,P,N),k.el=Ct.el}if(Ee&&dt(Ee,P),!_t&&(Z=H&&H.onVnodeMounted)){const Ct=k;dt(()=>It(Z,Pe,Ct),P)}(k.shapeFlag&256||Pe&&$n(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&g.a&&dt(g.a,P),g.isMounted=!0,k=$=R=null}};g.scope.on();const K=g.effect=new wa(X);g.scope.off();const B=g.update=K.run.bind(K),h=g.job=K.runIfDirty.bind(K);h.i=g,h.id=g.uid,K.scheduler=()=>Is(h),fn(g,!0),B()},be=(g,k,$)=>{k.component=g;const R=g.vnode.props;g.vnode=k,g.next=null,Wd(g,k.props,R,$),Zd(g,k.children,$),Lt(),Ba(g),Ot()},le=(g,k,$,R,P,N,q,X,K=!1)=>{const B=g&&g.children,h=g?g.shapeFlag:0,Z=k.children,{patchFlag:O,shapeFlag:H}=k;if(O>0){if(O&128){Q(B,Z,$,R,P,N,q,X,K);return}else if(O&256){Te(B,Z,$,R,P,N,q,X,K);return}}H&8?(h&16&&ke(B,P,N),Z!==B&&u($,Z)):h&16?H&16?Q(B,Z,$,R,P,N,q,X,K):ke(B,P,N,!0):(h&8&&u($,""),H&16&&D(Z,$,R,P,N,q,X,K))},Te=(g,k,$,R,P,N,q,X,K)=>{g=g||xn,k=k||xn;const B=g.length,h=k.length,Z=Math.min(B,h);let O;for(O=0;O<Z;O++){const H=k[O]=K?Ht(k[O]):Tt(k[O]);y(g[O],H,$,null,P,N,q,X,K)}B>h?ke(g,P,N,!0,!1,Z):D(k,$,R,P,N,q,X,K,Z)},Q=(g,k,$,R,P,N,q,X,K)=>{let B=0;const h=k.length;let Z=g.length-1,O=h-1;for(;B<=Z&&B<=O;){const H=g[B],ye=k[B]=K?Ht(k[B]):Tt(k[B]);if(hn(H,ye))y(H,ye,$,null,P,N,q,X,K);else break;B++}for(;B<=Z&&B<=O;){const H=g[Z],ye=k[O]=K?Ht(k[O]):Tt(k[O]);if(hn(H,ye))y(H,ye,$,null,P,N,q,X,K);else break;Z--,O--}if(B>Z){if(B<=O){const H=O+1,ye=H<h?k[H].el:R;for(;B<=O;)y(null,k[B]=K?Ht(k[B]):Tt(k[B]),$,ye,P,N,q,X,K),B++}}else if(B>O)for(;B<=Z;)ze(g[B],P,N,!0),B++;else{const H=B,ye=B,Ee=new Map;for(B=ye;B<=O;B++){const ut=k[B]=K?Ht(k[B]):Tt(k[B]);ut.key!=null&&Ee.set(ut.key,B)}let Pe,Ue=0;const Ke=O-ye+1;let _t=!1,Ct=0;const Vn=new Array(Ke);for(B=0;B<Ke;B++)Vn[B]=0;for(B=H;B<=Z;B++){const ut=g[B];if(Ue>=Ke){ze(ut,P,N,!0);continue}let St;if(ut.key!=null)St=Ee.get(ut.key);else for(Pe=ye;Pe<=O;Pe++)if(Vn[Pe-ye]===0&&hn(ut,k[Pe])){St=Pe;break}St===void 0?ze(ut,P,N,!0):(Vn[St-ye]=B+1,St>=Ct?Ct=St:_t=!0,y(ut,k[St],$,null,P,N,q,X,K),Ue++)}const js=_t?tu(Vn):xn;for(Pe=js.length-1,B=Ke-1;B>=0;B--){const ut=ye+B,St=k[ut],Bs=k[ut+1],Ns=ut+1<h?Bs.el||ns(Bs):R;Vn[B]===0?y(null,St,$,Ns,P,N,q,X,K):_t&&(Pe<0||B!==js[Pe]?Be(St,$,Ns,2):Pe--)}}},Be=(g,k,$,R,P=null)=>{const{el:N,type:q,transition:X,children:K,shapeFlag:B}=g;if(B&6){Be(g.component.subTree,k,$,R);return}if(B&128){g.suspense.move(k,$,R);return}if(B&64){q.move(g,k,$,G);return}if(q===se){r(N,k,$);for(let Z=0;Z<K.length;Z++)Be(K[Z],k,$,R);r(g.anchor,k,$);return}if(q===Er){_(g,k,$);return}if(R!==2&&B&1&&X)if(R===0)X.persisted&&!N[mt]?r(N,k,$):(X.beforeEnter(N),r(N,k,$),dt(()=>X.enter(N),P));else{const{leave:Z,delayLeave:O,afterLeave:H}=X,ye=()=>{g.ctx.isUnmounted?o(N):r(N,k,$)},Ee=()=>{const Pe=N._isLeaving||!!N[mt];N._isLeaving&&N[mt](!0),X.persisted&&!Pe?ye():Z(N,()=>{ye(),H&&H()})};O?O(N,ye,Ee):Ee()}else r(N,k,$)},ze=(g,k,$,R=!1,P=!1)=>{const{type:N,props:q,ref:X,children:K,dynamicChildren:B,shapeFlag:h,patchFlag:Z,dirs:O,cacheIndex:H,memo:ye}=g;if((Z===-2||B&&B.hasOnce)&&(P=!1),X!=null&&(Lt(),Qn(X,null,$,g,!0),Ot()),H!=null&&(!g.ctx||g.ctx===k)&&(k.renderCache[H]=void 0),h&256){k.ctx.deactivate(g);return}const Ee=h&1&&O,Pe=!$n(g);let Ue;if(Pe&&(Ue=q&&q.onVnodeBeforeUnmount)&&It(Ue,k,g),h&6)_e(g.component,$,R);else{if(h&128){g.suspense.unmount($,R);return}Ee&&pn(g,null,k,"beforeUnmount"),h&64?g.type.remove(g,k,$,G,R):B&&!B.hasOnce&&(N!==se||Z>0&&Z&64)?ke(B,k,$,!1,!0):(N===se&&Z&384||!P&&h&16)&&ke(K,k,$),R&&ot(g)}const Ke=ye!=null&&H==null;(Pe&&(Ue=q&&q.onVnodeUnmounted)||Ee||Ke)&&dt(()=>{Ue&&It(Ue,k,g),Ee&&pn(g,null,k,"unmounted"),Ke&&(g.el=null)},$)},ot=g=>{const{type:k,el:$,anchor:R,transition:P}=g,N=k===se;if(N&&!P){Ve($,R);return}if(k===Er){A(g),P&&!P.persisted&&P.afterLeave&&P.afterLeave();return}const q=N?pr(g):g,X=()=>{N?d($)&&Ve($,R):o($),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(q&&q.shapeFlag&1&&P&&!P.persisted){const{leave:K,delayLeave:B}=P,h=q.el,Z=()=>K(h,X);B?B(h,X,Z):Z()}else X()},Ve=(g,k)=>{let $;for(;g!==k;)$=f(g),o(g),g=$;o(k)},_e=(g,k,$)=>{const{bum:R,scope:P,job:N,subTree:q,um:X,m:K,a:B}=g;ii(K),ii(B),R&&Tr(R),P.stop(),N?(N.flags|=8,ze(q,g,k,$)):g.vnode.el&&q&&(q.transition=g.vnode.transition,ze(q,g,k,$)),X&&dt(X,k),dt(()=>{g.isUnmounted=!0},k)},ke=(g,k,$,R=!1,P=!1,N=0)=>{for(let q=N;q<g.length;q++)ze(g[q],k,$,R,P)},L=g=>{if(g.shapeFlag&6)return L(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const k=f(g.anchor||g.el),$=k&&k[vd];return $?f($):k},J=(g,k,$)=>{const R=g&&k._vnode?void 0:g&&g.component?g.component.uid:au();bd(()=>{g==null?k._vnode&&ze(k._vnode,null,null,!0):y(k._vnode||null,g,k,null,null,null,$),k._vnode=g},R)},G={p:y,um:ze,m:Be,r:ot,mt:Re,mc:D,pc:le,pbc:ne,n:L,o:e};return{render:J,hydrate:void 0,createApp:Vd(J)}}function Ao({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function fn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function eu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function vl(e,t,n=!1){const r=e.children,o=t.children;if(ue(r)&&ue(o))for(let s=0;s<r.length;s++){const l=r[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=Ht(o[s]),a.el=l.el),!n&&a.patchFlag!==-2&&vl(l,a)),a.type===bo&&(a.patchFlag===-1&&(a=o[s]=Ht(a)),a.el=l.el),a.type===Qe&&!a.el&&(a.el=l.el)}}function tu(e){const t=e.slice(),n=[0];let r,o,s,l,a;const c=e.length;for(r=0;r<c;r++){const p=e[r];if(p!==0){if(o=n[n.length-1],e[o]<p){t[r]=o,n.push(r);continue}for(s=0,l=n.length-1;s<l;)a=s+l>>1,e[n[a]]<p?s=a+1:l=a;p<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,l=n[s-1];s-- >0;)n[s]=l,l=t[l];return n}function yl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:yl(t)}function ii(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ns(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ns(t.subTree):null}const wl=e=>e.__isSuspense;function nu(e,t){t&&t.pendingBranch?ue(e)?t.effects.push(...e):t.effects.push(e):md(e)}const se=Symbol.for("v-fgt"),bo=Symbol.for("v-txt"),Qe=Symbol.for("v-cmt"),Er=Symbol.for("v-stc"),Wt=[];let pt=null;function b(e=!1){Wt.push(pt=e?null:[])}function Rs(){Wt.pop(),pt=Wt[Wt.length-1]||null}let fr=1;function qr(e,t=!1){fr+=e,e<0&&pt&&t&&(pt.hasOnce=!0)}function kl(e){return e.dynamicChildren=fr>0?pt||xn:null,Rs(),fr>0&&pt&&pt.push(e),e}function v(e,t,n,r,o,s){return kl(i(e,t,n,r,o,s,!0))}function fe(e,t,n,r,o){return kl(w(e,t,n,r,o,!0))}function Tn(e){return e?e.__v_isVNode===!0:!1}function hn(e,t){return e.type===t.type&&e.key===t.key}const zl=({key:e})=>e??null,Fr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?De(e)||rt(e)||ge(e)?{i:Ze,r:e,k:t,f:!!n}:e:null);function i(e,t=null,n=null,r=0,o=null,s=e===se?0:1,l=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zl(t),ref:t&&Fr(t),scopeId:Ua,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ze};return a?(Wr(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),fr>0&&!l&&pt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&pt.push(c),c}const w=ru;function ru(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===nl)&&(e=Qe),Tn(e)){const a=cn(e,t,!0);return n&&Wr(a,n),fr>0&&!s&&pt&&(a.shapeFlag&6?pt[pt.indexOf(e)]=a:pt.push(a)),a.patchFlag=-2,a}if(mu(e)&&(e=e.__vccOpts),t){t=ou(t);let{class:a,style:c}=t;a&&!De(a)&&(t.class=M(a)),$e(c)&&(Ss(c)&&!ue(c)&&(c=He({},c)),t.style=me(c))}const l=De(e)?1:wl(e)?128:co(e)?64:$e(e)?4:ge(e)?2:0;return i(e,t,n,r,o,l,s,!0)}function ou(e){return e?Ss(e)||fl(e)?He({},e):e:null}function cn(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:l,children:a,transition:c}=e,p=t?su(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&zl(p),ref:t&&t.ref?n&&s?ue(s)?s.concat(Fr(t)):[s,Fr(t)]:Fr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==se?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&cn(e.ssContent),ssFallback:e.ssFallback&&cn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&ln(u,c.clone(u)),u}function Ae(e=" ",t=0){return w(bo,null,e,t)}function rs(e,t){const n=w(Er,null,e);return n.staticCount=t,n}function re(e="",t=!1){return t?(b(),fe(Qe,null,e)):w(Qe,null,e)}function Tt(e){return e==null||typeof e=="boolean"?w(Qe):ue(e)?w(se,null,e.slice()):Tn(e)?Ht(e):w(bo,null,String(e))}function Ht(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:cn(e)}function Wr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ue(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Wr(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!fl(t)?t._ctx=Ze:o===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(ge(t)){if(r&65){Wr(e,{default:t});return}t={default:t,_ctx:Ze},n=32}else t=String(t),r&64?(n=16,t=[Ae(t)]):n=8;e.children=t,e.shapeFlag|=n}function su(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=M([t.class,r.class]));else if(o==="style")t.style=me([t.style,r.style]);else if(eo(o)){const s=t[o],l=r[o];l&&s!==l&&!(ue(s)&&s.includes(l))?t[o]=s?[].concat(s,l):l:l==null&&s==null&&!to(o)&&(t[o]=l)}else o!==""&&(t[o]=r[o])}return t}function It(e,t,n,r=null){xt(e,t,7,[n,r])}const iu=al();let _l=0;function au(){return _l}function lu(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||iu,s={uid:_l++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bl(r,o),emitsOptions:ll(r,o),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=jd.bind(null,s),e.ce&&e.ce(s),s}let nt=null;const go=()=>nt||Ze;let Xr,mr;{const e=oo(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),s=>{o.length>1?o.forEach(l=>l(s)):o[0](s)}};Xr=t("__VUE_INSTANCE_SETTERS__",n=>nt=n),mr=t("__VUE_SSR_SETTERS__",n=>br=n)}const wr=e=>{const t=nt;return Xr(e),e.scope.on(),()=>{e.scope.off(),Xr(t)}},ai=()=>{nt&&nt.scope.off(),Xr(null)};function Cl(e){return e.vnode.shapeFlag&4}let br=!1;function cu(e,t=!1,n=!1){t&&mr(t);const{props:r,children:o}=e.vnode,s=Cl(e);qd(e,r,s,t),Yd(e,o,n||t);const l=s?du(e,t):void 0;return t&&mr(!1),l}function du(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Rd);const{setup:r}=n;if(r){Lt();const o=e.setupContext=r.length>1?pu(e):null,s=wr(e),l=vr(r,e,0,[e.props,o]),a=ma(l);if(Ot(),s(),(a||e.sp)&&!$n(e)&&Za(e),a){if(l.then(ai,ai),t)return l.then(c=>{mr(!0);try{li(e,c,t)}finally{mr(!1)}}).catch(c=>{lo(c,e,0)});e.asyncDep=l}else li(e,l)}else Sl(e)}function li(e,t,n){ge(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:$e(t)&&(e.setupState=Va(t)),Sl(e)}function Sl(e,t,n){const r=e.type;e.render||(e.render=r.render||Et);{const o=wr(e);Lt();try{Td(e)}finally{Ot(),o()}}}const uu={get(e,t){return tt(e,"get",""),e[t]}};function pu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,uu),slots:e.slots,emit:e.emit,expose:t}}function ho(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Va(od(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in er)return er[n](e)},has(t,n){return n in t||n in er}})):e.proxy}function fu(e,t=!0){return ge(e)?e.displayName||e.name:e.name||t&&e.__name}function mu(e){return ge(e)&&"__vccOpts"in e}const ce=(e,t)=>cd(e,t,br);function Pn(e,t,n){try{qr(-1);const r=arguments.length;return r===2?$e(t)&&!ue(t)?Tn(t)?w(e,null,[t]):w(e,t):w(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tn(n)&&(n=[n]),w(e,t,n))}finally{qr(1)}}const bu="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let os;const ci=typeof window<"u"&&window.trustedTypes;if(ci)try{os=ci.createPolicy("vue",{createHTML:e=>e})}catch{}const Il=os?e=>os.createHTML(e):e=>e,gu="http://www.w3.org/2000/svg",hu="http://www.w3.org/1998/Math/MathML",Nt=typeof document<"u"?document:null,di=Nt&&Nt.createElement("template"),xu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?Nt.createElementNS(gu,e):t==="mathml"?Nt.createElementNS(hu,e):n?Nt.createElement(e,{is:n}):Nt.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Nt.createTextNode(e),createComment:e=>Nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const l=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{di.innerHTML=Il(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=di.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Zt="transition",Bn="animation",En=Symbol("_vtc"),Al={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ml=He({},Xa,Al),vu=e=>(e.displayName="Transition",e.props=Ml,e),zt=vu((e,{slots:t})=>Pn(wd,$l(e),t)),mn=(e,t=[])=>{ue(e)?e.forEach(n=>n(...t)):e&&e(...t)},ui=e=>e?ue(e)?e.some(t=>t.length>1):e.length>1:!1;function $l(e){const t={};for(const W in e)W in Al||(t[W]=e[W]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:p=l,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,z=yu(o),y=z&&z[0],S=z&&z[1],{onBeforeEnter:I,onEnter:x,onEnterCancelled:_,onLeave:A,onLeaveCancelled:E,onBeforeAppear:V=I,onAppear:U=x,onAppearCancelled:D=_}=t,j=(W,he,Re,Oe)=>{W._enterCancelled=Oe,en(W,he?u:a),en(W,he?p:l),Re&&Re()},ne=(W,he)=>{W._isLeaving=!1,en(W,d),en(W,m),en(W,f),he&&he()},de=W=>(he,Re)=>{const Oe=W?U:x,ve=()=>j(he,W,Re);mn(Oe,[he,ve]),pi(()=>{en(he,W?c:s),Mt(he,W?u:a),ui(Oe)||fi(he,r,y,ve)})};return He(t,{onBeforeEnter(W){mn(I,[W]),Mt(W,s),Mt(W,l)},onBeforeAppear(W){mn(V,[W]),Mt(W,c),Mt(W,p)},onEnter:de(!1),onAppear:de(!0),onLeave(W,he){W._isLeaving=!0;const Re=()=>ne(W,he);Mt(W,d),W._enterCancelled?(Mt(W,f),ss(W)):(ss(W),Mt(W,f)),pi(()=>{W._isLeaving&&(en(W,d),Mt(W,m),ui(A)||fi(W,r,S,Re))}),mn(A,[W,Re])},onEnterCancelled(W){j(W,!1,void 0,!0),mn(_,[W])},onAppearCancelled(W){j(W,!0,void 0,!0),mn(D,[W])},onLeaveCancelled(W){ne(W),mn(E,[W])}})}function yu(e){if(e==null)return null;if($e(e))return[Mo(e.enter),Mo(e.leave)];{const t=Mo(e);return[t,t]}}function Mo(e){return Rc(e)}function Mt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[En]||(e[En]=new Set)).add(t)}function en(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[En];n&&(n.delete(t),n.size||(e[En]=void 0))}function pi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let wu=0;function fi(e,t,n,r){const o=e._endId=++wu,s=()=>{o===e._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:l,timeout:a,propCount:c}=Rl(e,t);if(!l)return r();const p=l+"end";let u=0;const d=()=>{e.removeEventListener(p,f),s()},f=m=>{m.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),e.addEventListener(p,f)}function Rl(e,t){const n=window.getComputedStyle(e),r=z=>(n[z]||"").split(", "),o=r(`${Zt}Delay`),s=r(`${Zt}Duration`),l=mi(o,s),a=r(`${Bn}Delay`),c=r(`${Bn}Duration`),p=mi(a,c);let u=null,d=0,f=0;t===Zt?l>0&&(u=Zt,d=l,f=s.length):t===Bn?p>0&&(u=Bn,d=p,f=c.length):(d=Math.max(l,p),u=d>0?l>p?Zt:Bn:null,f=u?u===Zt?s.length:c.length:0);const m=u===Zt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Zt}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:m}}function mi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>bi(n)+bi(e[r])))}function bi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ss(e){return(e?e.ownerDocument:document).body.offsetHeight}function ku(e,t,n){const r=e[En];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Kr=Symbol("_vod"),Ts=Symbol("_vsh"),$o={name:"show",beforeMount(e,{value:t},{transition:n}){e[Kr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Nn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Nn(e,!0),r.enter(e)):r.leave(e,()=>{Nn(e,!1)}):Nn(e,t))},beforeUnmount(e,{value:t}){Nn(e,t)}};function Nn(e,t){e.style.display=t?e[Kr]:"none",e[Ts]=!t}const zu=Symbol(""),_u=/(?:^|;)\s*display\s*:/;function Cu(e,t,n){const r=e.style,o=De(n);let s=!1;if(n&&!o){if(t)if(De(t))for(const l of t.split(";")){const a=l.slice(0,l.indexOf(":")).trim();n[a]==null&&Wn(r,a,"")}else for(const l in t)n[l]==null&&Wn(r,l,"");for(const l in n){l==="display"&&(s=!0);const a=n[l];a!=null?Iu(e,l,!De(t)&&t?t[l]:void 0,a)||Wn(r,l,a):Wn(r,l,"")}}else if(o){if(t!==n){const l=r[zu];l&&(n+=";"+l),r.cssText=n,s=_u.test(n)}}else t&&e.removeAttribute("style");Kr in e&&((!o||t!==n)&&(e[Kr]=s?r.display:""),e[Ts]&&(r.display="none"))}const Cr=/\s*!important$/;function Wn(e,t,n){if(ue(n))n.forEach(r=>Wn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))Cr.test(n)?e.setProperty(t,n.replace(Cr,""),"important"):e.setProperty(t,n);else{const r=Su(e,t);Cr.test(n)?e.setProperty(dn(r),n.replace(Cr,""),"important"):e[r]=n}}const gi=["Webkit","Moz","ms"],Ro={};function Su(e,t){const n=Ro[t];if(n)return n;let r=ct(t);if(r!=="filter"&&r in e)return Ro[t]=r;r=ro(r);for(let o=0;o<gi.length;o++){const s=gi[o]+r;if(s in e)return Ro[t]=s}return t}function Iu(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&De(r)&&n===r}const hi="http://www.w3.org/1999/xlink";function xi(e,t,n,r,o,s=Oc(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(hi,t.slice(6,t.length)):e.setAttributeNS(hi,t,n):n==null||s&&!xa(n)?e.removeAttribute(t):e.setAttribute(t,s?"":wt(n)?String(n):n)}function vi(e,t,n,r,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Il(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=xa(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(o||t)}function Cn(e,t,n,r){e.addEventListener(t,n,r)}function Au(e,t,n,r){e.removeEventListener(t,n,r)}const yi=Symbol("_vei");function Mu(e,t,n,r,o=null){const s=e[yi]||(e[yi]={}),l=s[t];if(r&&l)l.value=r;else{const[a,c]=Tu(t);if(r){const p=s[t]=Fu(r,o);Cn(e,a,p,c)}else l&&(Au(e,a,l,c),s[t]=void 0)}}const $u=/(Once|Passive|Capture)$/,Ru=/^on:?(?:Once|Passive|Capture)$/;function Tu(e){let t,n;for(;(n=e.match($u))&&!Ru.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):dn(e.slice(2)),t]}let To=0;const Pu=Promise.resolve(),Eu=()=>To||(Pu.then(()=>To=0),To=Date.now());function Fu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const o=n.value;if(ue(o)){const s=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{s.call(r),r._stopped=!0};const l=o.slice(),a=[r];for(let c=0;c<l.length&&!r._stopped;c++){const p=l[c];p&&xt(p,t,5,a)}}else xt(o,t,5,[r])};return n.value=e,n.attached=Eu(),n}const wi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Lu=(e,t,n,r,o,s)=>{const l=o==="svg";t==="class"?ku(e,r,l):t==="style"?Cu(e,n,r):eo(t)?to(t)||Mu(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ou(e,t,r,l))?(vi(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&xi(e,t,r,l,s,t!=="value")):e._isVueCE&&(Vu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!De(r)))?vi(e,ct(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),xi(e,t,r,l))};function Ou(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&wi(t)&&ge(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return wi(t)&&De(n)?!1:t in e}function Vu(e,t){const n=e._def.props;if(!n)return!1;const r=ct(t);return Array.isArray(n)?n.some(o=>ct(o)===r):Object.keys(n).some(o=>ct(o)===r)}const Tl=new WeakMap,Pl=new WeakMap,Yr=Symbol("_moveCb"),ki=Symbol("_enterCb"),is=new WeakMap,Du=e=>(delete e.props.mode,e),ju=Du({name:"TransitionGroup",props:He({},Ml,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=go(),r=Wa();let o,s,l,a;const c=()=>(a===void 0&&(a=o.length>0&&Xu(o[0].el,n.vnode.el,zi(e))),a);return Qa(()=>{if(is.delete(n),!c()){o=[],l=void 0;return}const p=zi(e);o.forEach(Nu);const u=l&&Wu(l,n.vnode.el);l=void 0,o.forEach(f=>Hu(f,u));const d=o.filter(Uu);ss(n.vnode.el),d.forEach(f=>{const m=f.el,z=m.style;Mt(m,p),z.transform=z.webkitTransform=z.transitionDuration="";const y=m[Yr]=S=>{S&&S.target!==m||(!S||S.propertyName.endsWith("transform"))&&(m.removeEventListener("transitionend",y),m[Yr]=null,en(m,p))};m.addEventListener("transitionend",y)}),o=[]}),()=>{const p=Ce(e),u=$l(p);let d=p.tag||se;if(o=[],a=void 0,s)for(let f=0;f<s.length;f++){const m=s[f];m.el&&m.el instanceof Element&&!m.el[Ts]&&(o.push(m),ln(m,ur(m,u,r,n)),Tl.set(m,xo(m.el)))}s=t.default?As(t.default()):[];for(let f=0;f<s.length;f++){const m=s[f];m.key!=null&&ln(m,ur(m,u,r,n))}return o.length&&(l=Gu(n),is.set(n,c)),w(d,null,s)}}}),Bu=ju;function Nu(e){const t=e.el;t[Yr]&&t[Yr](),t[ki]&&t[ki]()}function zi(e){return e.moveClass||`${e.name||"v"}-move`}function Hu(e,t){Pl.set(e,xo(e.el,t))}function Uu(e){const t=Tl.get(e),n=Pl.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const s=e.el,l=s.style,a=s.getBoundingClientRect();let c=1,p=1;return s.offsetWidth&&(c=a.width/s.offsetWidth),s.offsetHeight&&(p=a.height/s.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(p)||p===0)&&(p=1),Math.abs(c-1)<.01&&(c=1),Math.abs(p-1)<.01&&(p=1),l.transform=l.webkitTransform=`translate(${r/c}px,${o/p}px)`,l.transitionDuration="0s",e}}function xo(e,t){const n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function Gu(e){let t;for(let n=e.parent;n;n=n.parent){const r=is.get(n);if(r){const o=qu(n.vnode.el,e.vnode.el);o&&(t||(t=[])).push(He(xo(o),{item:o,willMove:r}))}}return t}function qu(e,t){const n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function Wu(e,t){const n=e.find(r=>r.willMove()&&r.item.contains(t));return n&&xo(n.item,n)}function Xu(e,t,n){const r=e.cloneNode(),o=e[En];o&&o.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(r);const{hasTransform:l}=Rl(r);return s.removeChild(r),l}const _i=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ue(t)?n=>Tr(t,n):t};function Ku(e){e.target.composing=!0}function Ci(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Sr=Symbol("_assign"),Ir=Symbol("_initialValue");function Po(e,t,n){return t&&(e=e.trim()),n&&(e=vs(e)),e}const Ps={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e.parentNode&&(e.type==="text"?e[Ir]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Ir]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Sr]=_i(o);const s=r||o.props&&o.props.type==="number";Cn(e,t?"change":"input",l=>{l.target.composing||e[Sr](Po(e.value,n,s))}),(n||s)&&Cn(e,"change",()=>{e.value=Po(e.value,n,s)}),t||(Cn(e,"compositionstart",Ku),Cn(e,"compositionend",Ci),Cn(e,"change",Ci))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const o=t??"",s=e[Ir];delete e[Ir],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[Sr](Po(e.value,n,r)):e.value=o},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:o,number:s}},l){if(e[Sr]=_i(l),e.composing)return;const a=(s||e.type==="number")&&!/^0\d/.test(e.value)?vs(e.value):e.value,c=t??"";if(a===c)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(r&&t===n||o&&e.value.trim()===c)||(e.value=c)}},Yu=["ctrl","shift","alt","meta"],Zu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Yu.some(n=>e[`${n}Key`]&&!t.includes(n))},Xt=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((o,...s)=>{for(let l=0;l<t.length;l++){const a=Zu[t[l]];if(a&&a(o,t))return}return e(o,...s)}))},Ju={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Si=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(o=>{if(!("key"in o))return;const s=dn(o.key);if(t.some(l=>l===s||Ju[l]===s))return e(o)}))},Qu=He({patchProp:Lu},xu);let Ii;function ep(){return Ii||(Ii=Jd(Qu))}const tp=((...e)=>{const t=ep().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=rp(r);if(!o)return;const s=t._component;!ge(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const l=n(o,!1,np(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},t});function np(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function rp(e){return De(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ar={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:r,iconNode:o,name:s,class:l,...a},{slots:c})=>Pn("svg",{...Ar,width:e||Ar.width,height:e||Ar.height,stroke:r||Ar.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${op(s??"icon")}`],...a},[...o.map(p=>Pn(...p)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=(e,t)=>(n,{slots:r})=>Pn(sp,{...n,iconNode:t,name:e},r);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=ae("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=ae("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=ae("ArrowUpIcon",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=ae("AtSignIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=ae("BellIcon",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=ae("BookmarkIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=ae("BotIcon",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=ae("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=ae("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=ae("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=ae("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=ae("ChevronsLeftRightIcon",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=ae("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=ae("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=ae("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=ae("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=ae("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=ae("CompassIcon",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=ae("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=ae("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=ae("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=ae("EllipsisIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=ae("EyeOffIcon",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=ae("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=ae("FilmIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=ae("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=ae("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=ae("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=ae("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=ae("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=ae("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=ae("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=ae("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=ae("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=ae("PaperclipIcon",[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=ae("PinIcon",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=ae("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=ae("RepeatIcon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=ae("RocketIcon",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=ae("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=ae("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=ae("SettingsIcon",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=ae("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=ae("SlidersHorizontalIcon",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=ae("SlidersVerticalIcon",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=ae("SmilePlusIcon",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=ae("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=ae("SquareIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=ae("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=ae("TagIcon",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=ae("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=ae("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=ae("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=ae("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=ae("WrenchIcon",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=ae("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=ae("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Mp=ie({__name:"ThemeToggle",setup(e){const t=F(!0);function n(){t.value=!t.value,t.value?(document.documentElement.classList.add("dark"),localStorage.setItem("aura-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("aura-theme","light"))}return Xe(()=>{const r=localStorage.getItem("aura-theme");r?t.value=r==="dark":t.value=window.matchMedia("(prefers-color-scheme: dark)").matches,t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),(r,o)=>(b(),v("button",{type:"button",class:"relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"切换亮色 / 暗色模式",onClick:n},[t.value?(b(),fe(C(Sp),{key:0,class:"h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400"})):(b(),fe(C(bp),{key:1,class:"h-4 w-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-indigo-600"}))]))}}),ls=[{id:"forms-inputs",name:"表单与高阶输入套件",englishName:"Forms & Advanced Inputs",description:"Figma 拖拽数值微调、实时密码学强度仪表盘、金融级自适应金额与智能体 @ 呼出输入框",badgeColor:"text-amber-500 bg-amber-500/10 border-amber-500/20",iconName:"Sliders"},{id:"tactile-actions",name:"触觉反馈与原子操作套件",englishName:"Tactile & Actions Suite",description:"长按蓄力物理确认、原地渐变二次确认、物理微压与矢量形变操作矩阵",badgeColor:"text-rose-500 bg-rose-500/10 border-rose-500/20",iconName:"Zap"},{id:"ai-native",name:"AI 原生与智能体套件",englishName:"AI & Agent Suite",description:"面向大模型工作流、思考链路、代码终端与指令交互的原生动效矩阵",badgeColor:"text-sky-500 bg-sky-500/10 border-sky-500/20",iconName:"Bot"},{id:"interactive-nav",name:"交互与高阶导航套件",englishName:"Interactive & Navigation",description:"以余弦物理、流体胶囊指示器与视口裁切驱动的极佳手感交互",badgeColor:"text-blue-500 bg-blue-500/10 border-blue-500/20",iconName:"Compass"},{id:"space-3d",name:"空间与 3D 纵深套件",englishName:"3D Space & Atmosphere",description:"同心公转轨道、赛博网格、极光破晓天灯与粒子微光氛围",badgeColor:"text-indigo-500 bg-indigo-500/10 border-indigo-500/20",iconName:"Globe"},{id:"borders-cards",name:"流光卡片与微光边框套件",englishName:"Borders & Bento Cards",description:"沿着圆角边框流动的渐变光束与多维信息科技网格便当盒",badgeColor:"text-purple-500 bg-purple-500/10 border-purple-500/20",iconName:"Layers"},{id:"kinetic-typography",name:"文字与动态排版套件",englishName:"Kinetic Typography",description:"连续金属扫光、平滑毫秒数值翻滚与无限无缝平滑跑马灯",badgeColor:"text-emerald-500 bg-emerald-500/10 border-emerald-500/20",iconName:"Sparkles"}],rn=[{id:"border-beam",name:"BorderBeam",title:"Border Beam（跑马流光渐变边框）",category:"Effect",suiteId:"borders-cards",description:"沿着容器圆角边框匀速流动的彩色流光光束。大模型生成状态、VIP 特权卡片、核心功能高亮的科技感标配。",componentFilename:"BorderBeam.vue",componentCode:`<script setup lang="ts">
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
  { id: 2, title: '零配置单文件拷贝', description: '无黑盒依赖，复制即用，代码全由你掌控', tag: 'Architecture', author: 'Zuǒ Lán' },
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
</template>`,propsList:[{name:"gradient",type:"string",default:"'linear-gradient(...)'",description:"底层弥散氛围渐变色"},{name:"grainOpacity",type:"number",default:"0.15",description:"胶片颗粒噪点不透明度 (0 - 1)"},{name:"animated",type:"boolean",default:"true",description:"是否开启动态微颗粒位移闪烁"}]}],$p={class:"sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80 transition-colors"},Rp={class:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"},Tp={class:"flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md shadow-blue-500/20 text-white transition-transform duration-300 group-hover:scale-105"},Pp={class:"hidden md:flex items-center gap-6 text-sm font-medium"},Ep={class:"flex items-center gap-3"},Fp={href:"https://github.com",target:"_blank",rel:"noopener noreferrer",class:"flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"GitHub 仓库"},Lp=ie({__name:"Header",setup(e){return(t,n)=>{const r=yr("router-link");return b(),v("header",$p,[i("div",Rp,[w(r,{to:"/",class:"flex items-center gap-2.5 group"},{default:Y(()=>[i("div",Tp,[w(C(Me),{class:"h-5 w-5"})]),n[0]||(n[0]=i("div",{class:"flex flex-col"},[i("div",{class:"flex items-center gap-1.5"},[i("span",{class:"text-lg font-black tracking-tight text-zinc-900 dark:text-white"},[Ae(" Aura"),i("span",{class:"text-blue-600 dark:text-blue-400"},"UI")]),i("span",{class:"rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300"}," Vue 3.5 ")]),i("span",{class:"text-[10px] text-zinc-400"},"动效原子代码库")],-1))]),_:1}),i("nav",Pp,[w(r,{to:"/",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:Y(()=>[...n[1]||(n[1]=[Ae(" 官网首页 ",-1)])]),_:1}),w(r,{to:"/docs/border-beam",class:"inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:Y(()=>[w(C(qt),{class:"h-4 w-4"}),i("span",null,"组件库 ("+T(C(rn).length)+")",1)]),_:1}),n[2]||(n[2]=i("a",{href:"#features",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}," 核心特性 ",-1))]),i("div",Ep,[w(Mp),i("a",Fp,[w(C(fp),{class:"h-4 w-4"})]),w(r,{to:"/docs/border-beam",class:"hidden sm:inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"},{default:Y(()=>[...n[3]||(n[3]=[Ae(" 浏览代码 ",-1)])]),_:1})])])])}}}),Op={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50 transition-colors"},Vp={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Dp={class:"flex flex-col md:flex-row items-center justify-between gap-6"},jp={class:"flex items-center gap-3"},Bp={class:"flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"},Np={class:"flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"},Hp={class:"inline-flex items-center gap-1"},Up=ie({__name:"Footer",setup(e){return(t,n)=>(b(),v("footer",Op,[i("div",Vp,[i("div",Dp,[i("div",jp,[i("div",Bp,[w(C(Me),{class:"h-4 w-4"})]),n[0]||(n[0]=i("div",null,[i("p",{class:"text-sm font-bold text-zinc-900 dark:text-zinc-100"}," Aura UI (Vue 3) "),i("p",{class:"text-xs text-zinc-500 dark:text-zinc-400"}," 对标 Magic UI / Aceternity UI，属于 Vue 3 的动效原子代码库 ")],-1))]),i("div",Np,[n[3]||(n[3]=i("span",null,"采用 MIT 协议开源，完全支持 Copy & Paste 即用",-1)),n[4]||(n[4]=i("span",null,"•",-1)),i("span",Hp,[n[1]||(n[1]=Ae(" Built with ",-1)),w(C(mp),{class:"h-3 w-3 text-red-500 fill-red-500"}),n[2]||(n[2]=Ae(" for Vue 3 ecosystem ",-1))])])])])]))}}),Gp={class:"min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-200"},qp={class:"flex-1"},Wp=ie({__name:"App",setup(e){return(t,n)=>{const r=yr("router-view");return b(),v("div",Gp,[w(Lp),i("div",qp,[w(r)]),w(Up)])}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Sn=typeof document<"u";function ql(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ql(e.default)}const Ie=Object.assign;function Fo(e,t){const n={};for(const r in t){const o=t[r];n[r]=kt(o)?o.map(e):e(o)}return n}const sr=()=>{},kt=Array.isArray;function Ti(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Wl=/#/g,Kp=/&/g,Yp=/\//g,Zp=/=/g,Jp=/\?/g,Xl=/\+/g,Qp=/%5B/g,e0=/%5D/g,Kl=/%5E/g,t0=/%60/g,Yl=/%7B/g,n0=/%7C/g,Zl=/%7D/g,r0=/%20/g;function Fs(e){return e==null?"":encodeURI(""+e).replace(n0,"|").replace(Qp,"[").replace(e0,"]")}function o0(e){return Fs(e).replace(Yl,"{").replace(Zl,"}").replace(Kl,"^")}function cs(e){return Fs(e).replace(Xl,"%2B").replace(r0,"+").replace(Wl,"%23").replace(Kp,"%26").replace(t0,"`").replace(Yl,"{").replace(Zl,"}").replace(Kl,"^")}function s0(e){return cs(e).replace(Zp,"%3D")}function i0(e){return Fs(e).replace(Wl,"%23").replace(Jp,"%3F")}function a0(e){return i0(e).replace(Yp,"%2F")}function hr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const l0=/\/$/,c0=e=>e.replace(l0,"");function Lo(e,t,n="/"){let r,o={},s="",l="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=t.slice(0,c),s=t.slice(c,a>0?a:t.length),o=e(s.slice(1))),a>=0&&(r=r||t.slice(0,a),l=t.slice(a,t.length)),r=f0(r??t,n),{fullPath:r+s+l,path:r,query:o,hash:hr(l)}}function d0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Pi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function u0(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Fn(t.matched[r],n.matched[o])&&Jl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Fn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Jl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!p0(e[n],t[n]))return!1;return!0}function p0(e,t){return kt(e)?Ei(e,t):kt(t)?Ei(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Ei(e,t){return kt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function f0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,l,a;for(l=0;l<r.length;l++)if(a=r[l],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(l).join("/")}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ds=(function(e){return e.pop="pop",e.push="push",e})({}),Oo=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function m0(e){if(!e)if(Sn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),c0(e)}const b0=/^[^#]+#/;function g0(e,t){return e.replace(b0,"#")+t}function h0(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const vo=()=>({left:window.scrollX,top:window.scrollY});function x0(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=h0(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Fi(e,t){return(history.state?history.state.position-t:-1)+e}const us=new Map;function v0(e,t){us.set(e,t)}function y0(e){const t=us.get(e);return us.delete(e),t}function w0(e){return typeof e=="string"||e&&typeof e=="object"}function Ql(e){return typeof e=="string"||typeof e=="symbol"}let Ne=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ec=Symbol("");Ne.MATCHER_NOT_FOUND+"",Ne.NAVIGATION_GUARD_REDIRECT+"",Ne.NAVIGATION_ABORTED+"",Ne.NAVIGATION_CANCELLED+"",Ne.NAVIGATION_DUPLICATED+"";function Ln(e,t){return Ie(new Error,{type:e,[ec]:!0},t)}function jt(e,t){return e instanceof Error&&ec in e&&(t==null||!!(e.type&t))}const k0=["params","query","hash"];function z0(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of k0)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function _0(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const o=n[r].replace(Xl," "),s=o.indexOf("="),l=hr(s<0?o:o.slice(0,s)),a=s<0?null:hr(o.slice(s+1));if(l in t){let c=t[l];kt(c)||(c=t[l]=[c]),c.push(a)}else t[l]=a}return t}function Li(e){let t="";for(let n in e){const r=e[n];if(n=s0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(kt(r)?r.map(o=>o&&cs(o)):[r&&cs(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function C0(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=kt(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const S0=Symbol(""),Oi=Symbol(""),Ls=Symbol(""),Os=Symbol(""),ps=Symbol("");function Hn(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function nn(e,t,n,r,o,s=l=>l()){const l=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const p=f=>{f===!1?c(Ln(Ne.NAVIGATION_ABORTED,{from:n,to:t})):f instanceof Error?c(f):w0(f)?c(Ln(Ne.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(l&&r.enterCallbacks[o]===l&&typeof f=="function"&&l.push(f),a())},u=s(()=>e.call(r&&r.instances[o],t,n,p));let d=Promise.resolve(u);e.length<3&&(d=d.then(p)),d.catch(f=>c(f))})}function Vo(e,t,n,r,o=s=>s()){const s=[];for(const l of e)for(const a in l.components){let c=l.components[a];if(!(t!=="beforeRouteEnter"&&!l.instances[a]))if(ql(c)){const p=(c.__vccOpts||c)[t];p&&s.push(nn(p,n,r,l,a,o))}else{let p=c();s.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${l.path}"`);const d=Xp(u)?u.default:u;l.mods[a]=u,l.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&nn(f,n,r,l,a,o)()}))}}return s}function I0(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let l=0;l<s;l++){const a=t.matched[l];a&&(e.matched.find(p=>Fn(p,a))?r.push(a):n.push(a));const c=e.matched[l];c&&(t.matched.find(p=>Fn(p,c))||o.push(c))}return[n,r,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let A0=()=>location.protocol+"//"+location.host;function tc(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let l=o.includes(e.slice(s))?e.slice(s).length:1,a=o.slice(l);return a[0]!=="/"&&(a="/"+a),Pi(a,"")}return Pi(n,e)+r+o}function M0(e,t,n,r){let o=[],s=[],l=null;const a=({state:f})=>{const m=tc(e,location),z=n.value,y=t.value;let S=0;if(f){if(n.value=m,t.value=f,l&&l===z){l=null;return}S=y?f.position-y.position:0}else r(m);o.forEach(I=>{I(n.value,z,{delta:S,type:ds.pop,direction:S?S>0?Oo.forward:Oo.back:Oo.unknown})})};function c(){l=n.value}function p(f){o.push(f);const m=()=>{const z=o.indexOf(f);z>-1&&o.splice(z,1)};return s.push(m),m}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Ie({},f.state,{scroll:vo()}),"")}}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:p,destroy:d}}function Vi(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?vo():null}}function $0(e){const{history:t,location:n}=window,r={value:tc(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,p,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:A0()+e+c;try{t[u?"replaceState":"pushState"](p,"",f),o.value=p}catch(m){console.error(m),n[u?"replace":"assign"](f)}}function l(c,p){s(c,Ie({},t.state,Vi(o.value.back,c,o.value.forward,!0),p,{position:o.value.position}),!0),r.value=c}function a(c,p){const u=Ie({},o.value,t.state,{forward:c,scroll:vo()});s(u.current,u,!0),s(c,Ie({},Vi(r.value,c,null),{position:u.position+1},p),!1),r.value=c}return{location:r,state:o,push:a,replace:l}}function R0(e){e=m0(e);const t=$0(e),n=M0(e,t.state,t.location,t.replace);function r(s,l=!0){l||n.pauseListeners(),history.go(s)}const o=Ie({location:"",base:e,go:r,createHref:g0.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let yn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var qe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(qe||{});const T0={type:yn.Static,value:""},P0=/[a-zA-Z0-9_]/;function E0(e){if(!e)return[[]];if(e==="/")return[[T0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${p}": ${m}`)}let n=qe.Static,r=n;const o=[];let s;function l(){s&&o.push(s),s=[]}let a=0,c,p="",u="";function d(){p&&(n===qe.Static?s.push({type:yn.Static,value:p}):n===qe.Param||n===qe.ParamRegExp||n===qe.ParamRegExpEnd?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),s.push({type:yn.Param,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function f(){p+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==qe.ParamRegExp){r=n,n=qe.EscapeNext;continue}switch(n){case qe.Static:c==="/"?(p&&d(),l()):c===":"?(d(),n=qe.Param):f();break;case qe.EscapeNext:f(),n=r;break;case qe.Param:c==="("?n=qe.ParamRegExp:P0.test(c)?f():(d(),n=qe.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case qe.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=qe.ParamRegExpEnd:u+=c;break;case qe.ParamRegExpEnd:d(),n=qe.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===qe.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),d(),l(),o}const Di="[^/]+?",F0={sensitive:!1,strict:!1,start:!0,end:!0};var at=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(at||{});const L0=/[.+*?^${}()[\]/\\]/g;function O0(e,t){const n=Ie({},F0,t),r=[];let o=n.start?"^":"";const s=[];for(const p of e){const u=p.length?[]:[at.Root];n.strict&&!p.length&&(o+="/");for(let d=0;d<p.length;d++){const f=p[d];let m=at.Segment+(n.sensitive?at.BonusCaseSensitive:0);if(f.type===yn.Static)d||(o+="/"),o+=f.value.replace(L0,"\\$&"),m+=at.Static;else if(f.type===yn.Param){const{value:z,repeatable:y,optional:S,regexp:I}=f;s.push({name:z,repeatable:y,optional:S});const x=I||Di;if(x!==Di){m+=at.BonusCustomRegExp;try{`${x}`}catch(A){throw new Error(`Invalid custom RegExp for param "${z}" (${x}): `+A.message)}}let _=y?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(_=S&&p.length<2?`(?:/${_})`:"/"+_),S&&(_+="?"),o+=_,m+=at.Dynamic,S&&(m+=at.BonusOptional),y&&(m+=at.BonusRepeatable),x===".*"&&(m+=at.BonusWildcard)}u.push(m)}r.push(u)}if(n.strict&&n.end){const p=r.length-1;r[p][r[p].length-1]+=at.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const l=new RegExp(o,n.sensitive?"":"i");function a(p){const u=p.match(l),d={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",z=s[f-1];d[z.name]=m&&z.repeatable?m.split("/"):m}return d}function c(p){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of f)if(m.type===yn.Static)u+=m.value;else if(m.type===yn.Param){const{value:z,repeatable:y,optional:S}=m,I=z in p?p[z]:"";if(kt(I)&&!y)throw new Error(`Provided param "${z}" is an array but it is not repeatable (* or + modifiers)`);const x=kt(I)?I.join("/"):I;if(!x)if(S)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${z}"`);u+=x}}return u||"/"}return{re:l,score:r,keys:s,parse:a,stringify:c}}function V0(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===at.Static+at.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===at.Static+at.Segment?1:-1:0}function nc(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=V0(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(ji(r))return 1;if(ji(o))return-1}return o.length-r.length}function ji(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const D0={strict:!1,end:!0,sensitive:!1};function j0(e,t,n){const r=O0(E0(e.path),n),o=Ie(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function B0(e,t){const n=[],r=new Map;t=Ti(D0,t);function o(d){return r.get(d)}function s(d,f,m){const z=!m,y=Ni(d);y.aliasOf=m&&m.record;const S=Ti(t,d),I=[y];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const E of A)I.push(Ni(Ie({},y,{components:m?m.record.components:y.components,path:E,aliasOf:m?m.record:y})))}let x,_;for(const A of I){const{path:E}=A;if(f&&E[0]!=="/"){const V=f.record.path,U=V[V.length-1]==="/"?"":"/";A.path=f.record.path+(E&&U+E)}if(x=j0(A,f,S),m?m.alias.push(x):(_=_||x,_!==x&&_.alias.push(x),z&&d.name&&!Hi(x)&&l(d.name)),rc(x)&&c(x),y.children){const V=y.children;for(let U=0;U<V.length;U++)s(V[U],x,m&&m.children[U])}m=m||x}return _?()=>{l(_)}:sr}function l(d){if(Ql(d)){const f=r.get(d);f&&(r.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(l),f.alias.forEach(l))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(l),d.alias.forEach(l))}}function a(){return n}function c(d){const f=U0(d,n);n.splice(f,0,d),d.record.name&&!Hi(d)&&r.set(d.record.name,d)}function p(d,f){let m,z={},y,S;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw Ln(Ne.MATCHER_NOT_FOUND,{location:d});S=m.record.name,z=Ie(Bi(f.params,m.keys.filter(_=>!_.optional).concat(m.parent?m.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),d.params&&Bi(d.params,m.keys.map(_=>_.name))),y=m.stringify(z)}else if(d.path!=null)y=d.path,m=n.find(_=>_.re.test(y)),m&&(z=m.parse(y),S=m.record.name);else{if(m=f.name?r.get(f.name):n.find(_=>_.re.test(f.path)),!m)throw Ln(Ne.MATCHER_NOT_FOUND,{location:d,currentLocation:f});S=m.record.name,z=Ie({},f.params,d.params),y=m.stringify(z)}const I=[];let x=m;for(;x;)I.unshift(x.record),x=x.parent;return{name:S,path:y,params:z,matched:I,meta:H0(I)}}e.forEach(d=>s(d));function u(){n.length=0,r.clear()}return{addRoute:s,resolve:p,removeRoute:l,clearRoutes:u,getRoutes:a,getRecordMatcher:o}}function Bi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ni(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:N0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function N0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Hi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function H0(e){return e.reduce((t,n)=>Ie(t,n.meta),{})}function U0(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;nc(e,t[s])<0?r=s:n=s+1}const o=G0(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function G0(e){let t=e;for(;t=t.parent;)if(rc(t)&&nc(e,t)===0)return t}function rc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ui(e){const t=Ft(Ls),n=Ft(Os),r=ce(()=>{const c=C(e.to);return t.resolve(c)}),o=ce(()=>{const{matched:c}=r.value,{length:p}=c,u=c[p-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Fn.bind(null,u));if(f>-1)return f;const m=Gi(c[p-2]);return p>1&&Gi(u)===m&&d[d.length-1].path!==m?d.findIndex(Fn.bind(null,c[p-2])):f}),s=ce(()=>o.value>-1&&Y0(n.params,r.value.params)),l=ce(()=>o.value>-1&&o.value===n.matched.length-1&&Jl(n.params,r.value.params));function a(c={}){if(K0(c)){const p=t[C(e.replace)?"replace":"push"](C(e.to)).catch(sr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:r,href:ce(()=>r.value.href),isActive:s,isExactActive:l,navigate:a}}function q0(e){return e.length===1?e[0]:e}const W0=ie({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ui,setup(e,{slots:t}){const n=ao(Ui(e)),{options:r}=Ft(Ls),o=ce(()=>({[qi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&q0(t.default(n));return e.custom?s:Pn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),X0=W0;function K0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Y0(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!kt(o)||o.length!==r.length||r.some((s,l)=>s.valueOf()!==o[l].valueOf()))return!1}return!0}function Gi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qi=(e,t,n)=>e??t??n,Z0=ie({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ft(ps),o=ce(()=>e.route||r.value),s=Ft(Oi,0),l=ce(()=>{let p=C(s);const{matched:u}=o.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),a=ce(()=>o.value.matched[l.value]);Pr(Oi,ce(()=>l.value+1)),Pr(S0,a),Pr(ps,o);const c=F();return gt(()=>[c.value,a.value,e.name],([p,u,d],[f,m,z])=>{u&&(u.instances[d]=p,m&&m!==u&&p&&p===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),p&&u&&(!m||!Fn(u,m)||!f)&&(u.enterCallbacks[d]||[]).forEach(y=>y(p))},{flush:"post"}),()=>{const p=o.value,u=e.name,d=a.value,f=d&&d.components[u];if(!f)return Wi(n.default,{Component:f,route:p});const m=d.props[u],z=m?m===!0?p.params:typeof m=="function"?m(p):m:null,S=Pn(f,Ie({},z,t,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Wi(n.default,{Component:S,route:p})||S}}});function Wi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const J0=Z0;function Q0(e){const t=B0(e.routes,e),n=e.parseQuery||_0,r=e.stringifyQuery||Li,o=e.history,s=Hn(),l=Hn(),a=Hn(),c=sd(Jt);let p=Jt;Sn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fo.bind(null,L=>""+L),d=Fo.bind(null,a0),f=Fo.bind(null,hr);function m(L,J){let G,oe;return Ql(L)?(G=t.getRecordMatcher(L),oe=J):oe=L,t.addRoute(oe,G)}function z(L){const J=t.getRecordMatcher(L);J&&t.removeRoute(J)}function y(){return t.getRoutes().map(L=>L.record)}function S(L){return!!t.getRecordMatcher(L)}function I(L,J){if(J=Ie({},J||c.value),typeof L=="string"){const R=Lo(n,L,J.path),P=t.resolve({path:R.path},J),N=o.createHref(R.fullPath);return Ie(R,P,{params:f(P.params),hash:hr(R.hash),redirectedFrom:void 0,href:N})}let G;if(L.path!=null)G=Ie({},L,{path:Lo(n,L.path,J.path).path});else{const R=Ie({},L.params);for(const P in R)R[P]==null&&delete R[P];G=Ie({},L,{params:d(R)}),J.params=d(J.params)}const oe=t.resolve(G,J),g=L.hash||"";oe.params=u(f(oe.params));const k=d0(r,Ie({},L,{hash:o0(g),path:oe.path})),$=o.createHref(k);return Ie({fullPath:k,hash:g,query:r===Li?C0(L.query):L.query||{}},oe,{redirectedFrom:void 0,href:$})}function x(L){return typeof L=="string"?Lo(n,L,c.value.path):Ie({},L)}function _(L,J){if(p!==L)return Ln(Ne.NAVIGATION_CANCELLED,{from:J,to:L})}function A(L){return U(L)}function E(L){return A(Ie(x(L),{replace:!0}))}function V(L,J){const G=L.matched[L.matched.length-1];if(G&&G.redirect){const{redirect:oe}=G;let g=typeof oe=="function"?oe(L,J):oe;return typeof g=="string"&&(g=g.includes("?")||g.includes("#")?g=x(g):{path:g},g.params={}),Ie({query:L.query,hash:L.hash,params:g.path!=null?{}:L.params},g)}}function U(L,J){const G=p=I(L),oe=c.value,g=L.state,k=L.force,$=L.replace===!0,R=V(G,oe);if(R)return U(Ie(x(R),{state:typeof R=="object"?Ie({},g,R.state):g,force:k,replace:$}),J||G);const P=G;P.redirectedFrom=J;let N;return!k&&u0(r,oe,G)&&(N=Ln(Ne.NAVIGATION_DUPLICATED,{to:P,from:oe}),Be(oe,oe,!0,!1)),(N?Promise.resolve(N):ne(P,oe)).catch(q=>jt(q)?jt(q,Ne.NAVIGATION_GUARD_REDIRECT)?q:Q(q):le(q,P,oe)).then(q=>{if(q){if(jt(q,Ne.NAVIGATION_GUARD_REDIRECT))return U(Ie({replace:$},x(q.to),{state:typeof q.to=="object"?Ie({},g,q.to.state):g,force:k}),J||P)}else q=W(P,oe,!0,$,g);return de(P,oe,q),q})}function D(L,J){const G=_(L,J);return G?Promise.reject(G):Promise.resolve()}function j(L){const J=Ve.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(L):L()}function ne(L,J){let G;const[oe,g,k]=I0(L,J);G=Vo(oe.reverse(),"beforeRouteLeave",L,J);for(const R of oe)R.leaveGuards.forEach(P=>{G.push(nn(P,L,J))});const $=D.bind(null,L,J);return G.push($),ke(G).then(()=>{G=[];for(const R of s.list())G.push(nn(R,L,J));return G.push($),ke(G)}).then(()=>{G=Vo(g,"beforeRouteUpdate",L,J);for(const R of g)R.updateGuards.forEach(P=>{G.push(nn(P,L,J))});return G.push($),ke(G)}).then(()=>{G=[];for(const R of k)if(R.beforeEnter)if(kt(R.beforeEnter))for(const P of R.beforeEnter)G.push(nn(P,L,J));else G.push(nn(R.beforeEnter,L,J));return G.push($),ke(G)}).then(()=>(L.matched.forEach(R=>R.enterCallbacks={}),G=Vo(k,"beforeRouteEnter",L,J,j),G.push($),ke(G))).then(()=>{G=[];for(const R of l.list())G.push(nn(R,L,J));return G.push($),ke(G)}).catch(R=>jt(R,Ne.NAVIGATION_CANCELLED)?R:Promise.reject(R))}function de(L,J,G){a.list().forEach(oe=>j(()=>oe(L,J,G)))}function W(L,J,G,oe,g){const k=_(L,J);if(k)return k;const $=J===Jt,R=Sn?history.state:{};G&&(oe||$?o.replace(L.fullPath,Ie({scroll:$&&R&&R.scroll},g)):o.push(L.fullPath,g)),c.value=L,Be(L,J,G,$),Q()}let he;function Re(){he||(he=o.listen((L,J,G)=>{if(!_e.listening)return;const oe=I(L),g=V(oe,_e.currentRoute.value);if(g){U(Ie(g,{replace:!0,force:!0}),oe).catch(sr);return}p=oe;const k=c.value;Sn&&v0(Fi(k.fullPath,G.delta),vo()),ne(oe,k).catch($=>jt($,Ne.NAVIGATION_ABORTED|Ne.NAVIGATION_CANCELLED)?$:jt($,Ne.NAVIGATION_GUARD_REDIRECT)?(U(Ie(x($.to),{force:!0}),oe).then(R=>{jt(R,Ne.NAVIGATION_ABORTED|Ne.NAVIGATION_DUPLICATED)&&!G.delta&&G.type===ds.pop&&o.go(-1,!1)}).catch(sr),Promise.reject()):(G.delta&&o.go(-G.delta,!1),le($,oe,k))).then($=>{$=$||W(oe,k,!1),$&&(G.delta&&!jt($,Ne.NAVIGATION_CANCELLED)?o.go(-G.delta,!1):G.type===ds.pop&&jt($,Ne.NAVIGATION_ABORTED|Ne.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),de(oe,k,$)}).catch(sr)}))}let Oe=Hn(),ve=Hn(),be;function le(L,J,G){Q(L);const oe=ve.list();return oe.length?oe.forEach(g=>g(L,J,G)):console.error(L),Promise.reject(L)}function Te(){return be&&c.value!==Jt?Promise.resolve():new Promise((L,J)=>{Oe.add([L,J])})}function Q(L){return be||(be=!L,Re(),Oe.list().forEach(([J,G])=>L?G(L):J()),Oe.reset()),L}function Be(L,J,G,oe){const{scrollBehavior:g}=e;if(!Sn||!g)return Promise.resolve();const k=!G&&y0(Fi(L.fullPath,0))||(oe||!G)&&history.state&&history.state.scroll||null;return An().then(()=>g(L,J,k)).then($=>$&&x0($)).catch($=>le($,L,J))}const ze=L=>o.go(L);let ot;const Ve=new Set,_e={currentRoute:c,listening:!0,addRoute:m,removeRoute:z,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:y,resolve:I,options:e,push:A,replace:E,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:s.add,beforeResolve:l.add,afterEach:a.add,onError:ve.add,isReady:Te,install(L){L.component("RouterLink",X0),L.component("RouterView",J0),L.config.globalProperties.$router=_e,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>C(c)}),Sn&&!ot&&c.value===Jt&&(ot=!0,A(o.location).catch(oe=>{}));const J={};for(const oe in Jt)Object.defineProperty(J,oe,{get:()=>c.value[oe],enumerable:!0});L.provide(Ls,_e),L.provide(Os,La(J)),L.provide(ps,c);const G=L.unmount;Ve.add(L),L.unmount=function(){Ve.delete(L),Ve.size<1&&(p=Jt,he&&he(),he=null,c.value=Jt,ot=!1,be=!1),G()}}};function ke(L){return L.reduce((J,G)=>J.then(()=>j(G)),Promise.resolve())}return _e}function ef(e){return Ft(Os)}function oc(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=oc(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function tf(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=oc(e))&&(r&&(r+=" "),r+=t);return r}const nf=(e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},rf=(e,t)=>({classGroupId:e,validator:t}),sc=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Jr="-",Xi=[],of="arbitrary..",sf=e=>{const t=lf(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:l=>{if(l.startsWith("[")&&l.endsWith("]"))return af(l);const a=l.split(Jr),c=a[0]===""&&a.length>1?1:0;return ic(a,c,t)},getConflictingClassGroupIds:(l,a)=>{if(a){const c=r[l],p=n[l];return c?p?nf(p,c):c:p||Xi}return n[l]||Xi}}},ic=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const o=e[t],s=n.nextPart.get(o);if(s){const p=ic(e,t+1,s);if(p)return p}const l=n.validators;if(l===null)return;const a=t===0?e.join(Jr):e.slice(t).join(Jr),c=l.length;for(let p=0;p<c;p++){const u=l[p];if(u.validator(a))return u.classGroupId}},af=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?of+r:void 0})(),lf=e=>{const{theme:t,classGroups:n}=e;return cf(n,t)},cf=(e,t)=>{const n=sc();for(const r in e){const o=e[r];Vs(o,n,r,t)}return n},Vs=(e,t,n,r)=>{const o=e.length;for(let s=0;s<o;s++){const l=e[s];df(l,t,n,r)}},df=(e,t,n,r)=>{if(typeof e=="string"){uf(e,t,n);return}if(typeof e=="function"){pf(e,t,n,r);return}ff(e,t,n,r)},uf=(e,t,n)=>{const r=e===""?t:ac(t,e);r.classGroupId=n},pf=(e,t,n,r)=>{if(mf(e)){Vs(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(rf(n,e))},ff=(e,t,n,r)=>{const o=Object.entries(e),s=o.length;for(let l=0;l<s;l++){const[a,c]=o[l];Vs(c,ac(t,a),n,r)}},ac=(e,t)=>{let n=e;const r=t.split(Jr),o=r.length;for(let s=0;s<o;s++){const l=r[s];let a=n.nextPart.get(l);a||(a=sc(),n.nextPart.set(l,a)),n=a}return n},mf=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,bf=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const o=(s,l)=>{n[s]=l,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(s){let l=n[s];if(l!==void 0)return l;if((l=r[s])!==void 0)return o(s,l),l},set(s,l){s in n?n[s]=l:o(s,l)}}},fs="!",Ki=":",gf=[],Yi=(e,t,n,r,o)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:o}),hf=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=o=>{const s=[];let l=0,a=0,c=0,p;const u=o.length;for(let y=0;y<u;y++){const S=o[y];if(l===0&&a===0){if(S===Ki){s.push(o.slice(c,y)),c=y+1;continue}if(S==="/"){p=y;continue}}S==="["?l++:S==="]"?l--:S==="("?a++:S===")"&&a--}const d=s.length===0?o:o.slice(c);let f=d,m=!1;d.endsWith(fs)?(f=d.slice(0,-1),m=!0):d.startsWith(fs)&&(f=d.slice(1),m=!0);const z=p&&p>c?p-c:void 0;return Yi(s,m,f,z)};if(t){const o=t+Ki,s=r;r=l=>l.startsWith(o)?s(l.slice(o.length)):Yi(gf,!1,l,void 0,!0)}if(n){const o=r;r=s=>n({className:s,parseClassName:o})}return r},xf=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{t.set(n,1e6+r)}),n=>{const r=[];let o=[];for(let s=0;s<n.length;s++){const l=n[s],a=l[0]==="[",c=t.has(l);a||c?(o.length>0&&(o.sort(),r.push(...o),o=[]),r.push(l)):o.push(l)}return o.length>0&&(o.sort(),r.push(...o)),r}},vf=e=>({cache:bf(e.cacheSize),parseClassName:hf(e),sortModifiers:xf(e),postfixLookupClassGroupIds:yf(e),...sf(e)}),yf=e=>{const t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let r=0;r<n.length;r++)t[n[r]]=!0;return t},wf=/\s+/,kf=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:s,postfixLookupClassGroupIds:l}=t,a=[],c=e.trim().split(wf);let p="";for(let u=c.length-1;u>=0;u-=1){const d=c[u],{isExternal:f,modifiers:m,hasImportantModifier:z,baseClassName:y,maybePostfixModifierPosition:S}=n(d);if(f){p=d+(p.length>0?" "+p:p);continue}let I=!!S,x;if(I){const U=y.substring(0,S);x=r(U);const D=x&&l[x]?r(y):void 0;D&&D!==x&&(x=D,I=!1)}else x=r(y);if(!x){if(!I){p=d+(p.length>0?" "+p:p);continue}if(x=r(y),!x){p=d+(p.length>0?" "+p:p);continue}I=!1}const _=m.length===0?"":m.length===1?m[0]:s(m).join(":"),A=z?_+fs:_,E=A+x;if(a.indexOf(E)>-1)continue;a.push(E);const V=o(x,I);for(let U=0;U<V.length;++U){const D=V[U];a.push(A+D)}p=d+(p.length>0?" "+p:p)}return p},zf=(...e)=>{let t=0,n,r,o="";for(;t<e.length;)(n=e[t++])&&(r=lc(n))&&(o&&(o+=" "),o+=r);return o},lc=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=lc(e[r]))&&(n&&(n+=" "),n+=t);return n},_f=(e,...t)=>{let n,r,o,s;const l=c=>{const p=t.reduce((u,d)=>d(u),e());return n=vf(p),r=n.cache.get,o=n.cache.set,s=a,a(c)},a=c=>{const p=r(c);if(p)return p;const u=kf(c,n);return o(c,u),u};return s=l,(...c)=>s(zf(...c))},Cf=[],Ge=e=>{const t=n=>n[e]||Cf;return t.isThemeGetter=!0,t.themeKey=e,t},cc=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,dc=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Sf=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,If=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Af=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Mf=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,$f=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Rf=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Qt=e=>Sf.test(e),xe=e=>!!e&&!Number.isNaN(Number(e)),At=e=>!!e&&Number.isInteger(Number(e)),Do=e=>e.endsWith("%")&&xe(e.slice(0,-1)),Bt=e=>If.test(e),uc=()=>!0,Tf=e=>Af.test(e)&&!Mf.test(e),Ds=()=>!1,Pf=e=>$f.test(e),Ef=e=>Rf.test(e),Ff=e=>!ee(e)&&!te(e),Lf=e=>e.startsWith("@container")&&(e[10]==="/"&&e[11]!==void 0||e[11]==="s"&&e[16]!==void 0&&e.startsWith("-size/",10)||e[11]==="n"&&e[18]!==void 0&&e.startsWith("-normal/",10)),Of=e=>un(e,mc,Ds),ee=e=>cc.test(e),bn=e=>un(e,bc,Tf),Zi=e=>un(e,Gf,xe),Vf=e=>un(e,hc,uc),Df=e=>un(e,gc,Ds),Ji=e=>un(e,pc,Ds),jf=e=>un(e,fc,Ef),Mr=e=>un(e,xc,Pf),te=e=>dc.test(e),Un=e=>kn(e,bc),Bf=e=>kn(e,gc),Qi=e=>kn(e,pc),Nf=e=>kn(e,mc),Hf=e=>kn(e,fc),$r=e=>kn(e,xc,!0),Uf=e=>kn(e,hc,!0),un=(e,t,n)=>{const r=cc.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},kn=(e,t,n=!1)=>{const r=dc.exec(e);return r?r[1]?t(r[1]):n:!1},pc=e=>e==="position"||e==="percentage",fc=e=>e==="image"||e==="url",mc=e=>e==="length"||e==="size"||e==="bg-size",bc=e=>e==="length",Gf=e=>e==="number",gc=e=>e==="family-name",hc=e=>e==="number"||e==="weight",xc=e=>e==="shadow",qf=()=>{const e=Ge("color"),t=Ge("font"),n=Ge("text"),r=Ge("font-weight"),o=Ge("tracking"),s=Ge("leading"),l=Ge("breakpoint"),a=Ge("container"),c=Ge("spacing"),p=Ge("radius"),u=Ge("shadow"),d=Ge("inset-shadow"),f=Ge("text-shadow"),m=Ge("drop-shadow"),z=Ge("blur"),y=Ge("perspective"),S=Ge("aspect"),I=Ge("ease"),x=Ge("animate"),_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],A=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],E=()=>[...A(),te,ee],V=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto","contain","none"],D=()=>[te,ee,c],j=()=>[Qt,"full","auto",...D()],ne=()=>[At,"none","subgrid",te,ee],de=()=>["auto",{span:["full",At,te,ee]},At,te,ee],W=()=>[At,"auto",te,ee],he=()=>["auto","min","max","fr",te,ee],Re=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Oe=()=>["start","end","center","stretch","center-safe","end-safe"],ve=()=>["auto",...D()],be=()=>[Qt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...D()],le=()=>[a,Qt,"screen","full","dvw","lvw","svw","min","max","fit",...D()],Te=()=>[Qt,"screen","full","lh","dvh","lvh","svh","min","max","fit",...D()],Q=()=>[e,te,ee],Be=()=>[...A(),Qi,Ji,{position:[te,ee]}],ze=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ot=()=>["auto","cover","contain",Nf,Of,{size:[te,ee]}],Ve=()=>[Do,Un,bn],_e=()=>["","none","full",p,te,ee],ke=()=>["",xe,Un,bn],L=()=>["solid","dashed","dotted","double"],J=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],G=()=>[xe,Do,Qi,Ji],oe=()=>["","none",z,te,ee],g=()=>["none",xe,te,ee],k=()=>["none",xe,te,ee],$=()=>[xe,te,ee],R=()=>[Qt,"full",...D()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Bt],breakpoint:[Bt],color:[uc],container:[Bt],"drop-shadow":[Bt],ease:["in","out","in-out"],font:[Ff],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Bt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Bt],shadow:[Bt],spacing:["px",xe],text:[Bt],"text-shadow":[Bt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Qt,ee,te,S]}],container:["container"],"container-type":[{"@container":["","normal","size",te,ee]}],"container-named":[Lf],columns:[{columns:[xe,"auto",ee,te,a]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:E()}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:j()}],"inset-x":[{"inset-x":j()}],"inset-y":[{"inset-y":j()}],start:[{"inset-s":j(),start:j()}],end:[{"inset-e":j(),end:j()}],"inset-bs":[{"inset-bs":j()}],"inset-be":[{"inset-be":j()}],top:[{top:j()}],right:[{right:j()}],bottom:[{bottom:j()}],left:[{left:j()}],visibility:["visible","invisible","collapse"],z:[{z:[At,"auto",te,ee]}],basis:[{basis:[Qt,"full","auto",a,...D()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[xe,Qt,"auto","initial","none",ee]}],grow:[{grow:["",xe,te,ee]}],shrink:[{shrink:["",xe,te,ee]}],order:[{order:[At,"first","last","none",te,ee]}],"grid-cols":[{"grid-cols":ne()}],"col-start-end":[{col:de()}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":ne()}],"row-start-end":[{row:de()}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":he()}],"auto-rows":[{"auto-rows":he()}],gap:[{gap:D()}],"gap-x":[{"gap-x":D()}],"gap-y":[{"gap-y":D()}],"justify-content":[{justify:[...Re(),"normal"]}],"justify-items":[{"justify-items":[...Oe(),"normal"]}],"justify-self":[{"justify-self":["auto",...Oe()]}],"align-content":[{content:["normal",...Re()]}],"align-items":[{items:[...Oe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Oe(),{baseline:["","last"]}]}],"place-content":[{"place-content":Re()}],"place-items":[{"place-items":[...Oe(),"baseline"]}],"place-self":[{"place-self":["auto",...Oe()]}],p:[{p:D()}],px:[{px:D()}],py:[{py:D()}],ps:[{ps:D()}],pe:[{pe:D()}],pbs:[{pbs:D()}],pbe:[{pbe:D()}],pt:[{pt:D()}],pr:[{pr:D()}],pb:[{pb:D()}],pl:[{pl:D()}],m:[{m:ve()}],mx:[{mx:ve()}],my:[{my:ve()}],ms:[{ms:ve()}],me:[{me:ve()}],mbs:[{mbs:ve()}],mbe:[{mbe:ve()}],mt:[{mt:ve()}],mr:[{mr:ve()}],mb:[{mb:ve()}],ml:[{ml:ve()}],"space-x":[{"space-x":D()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":D()}],"space-y-reverse":["space-y-reverse"],size:[{size:be()}],"inline-size":[{inline:["auto",...le()]}],"min-inline-size":[{"min-inline":["auto",...le()]}],"max-inline-size":[{"max-inline":["none",...le()]}],"block-size":[{block:["auto",...Te()]}],"min-block-size":[{"min-block":["auto",...Te()]}],"max-block-size":[{"max-block":["none",...Te()]}],w:[{w:[a,"screen",...be()]}],"min-w":[{"min-w":[a,"screen","none",...be()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[l]},...be()]}],h:[{h:["screen","lh",...be()]}],"min-h":[{"min-h":["screen","lh","none",...be()]}],"max-h":[{"max-h":["screen","lh","none",...be()]}],"font-size":[{text:["base",n,Un,bn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Uf,Vf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Do,ee]}],"font-family":[{font:[Bf,Df,t]}],"font-features":[{"font-features":[ee]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,te,ee]}],"line-clamp":[{"line-clamp":[xe,"none",te,Zi]}],leading:[{leading:["none",s,...D()]}],"list-image":[{"list-image":["none",te,ee]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",te,ee]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:Q()}],"text-color":[{text:Q()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...L(),"wavy"]}],"text-decoration-thickness":[{decoration:[xe,"from-font","auto",te,bn]}],"text-decoration-color":[{decoration:Q()}],"underline-offset":[{"underline-offset":[xe,"auto",te,ee]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"tab-size":[{tab:[At,te,ee]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te,ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te,ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Be()}],"bg-repeat":[{bg:ze()}],"bg-size":[{bg:ot()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},At,te,ee],radial:["",te,ee],conic:["",At,te,ee]},Hf,jf]}],"bg-color":[{bg:Q()}],"gradient-from-pos":[{from:Ve()}],"gradient-via-pos":[{via:Ve()}],"gradient-to-pos":[{to:Ve()}],"gradient-from":[{from:Q()}],"gradient-via":[{via:Q()}],"gradient-to":[{to:Q()}],rounded:[{rounded:_e()}],"rounded-s":[{"rounded-s":_e()}],"rounded-e":[{"rounded-e":_e()}],"rounded-t":[{"rounded-t":_e()}],"rounded-r":[{"rounded-r":_e()}],"rounded-b":[{"rounded-b":_e()}],"rounded-l":[{"rounded-l":_e()}],"rounded-ss":[{"rounded-ss":_e()}],"rounded-se":[{"rounded-se":_e()}],"rounded-ee":[{"rounded-ee":_e()}],"rounded-es":[{"rounded-es":_e()}],"rounded-tl":[{"rounded-tl":_e()}],"rounded-tr":[{"rounded-tr":_e()}],"rounded-br":[{"rounded-br":_e()}],"rounded-bl":[{"rounded-bl":_e()}],"border-w":[{border:ke()}],"border-w-x":[{"border-x":ke()}],"border-w-y":[{"border-y":ke()}],"border-w-s":[{"border-s":ke()}],"border-w-e":[{"border-e":ke()}],"border-w-bs":[{"border-bs":ke()}],"border-w-be":[{"border-be":ke()}],"border-w-t":[{"border-t":ke()}],"border-w-r":[{"border-r":ke()}],"border-w-b":[{"border-b":ke()}],"border-w-l":[{"border-l":ke()}],"divide-x":[{"divide-x":ke()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ke()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...L(),"hidden","none"]}],"divide-style":[{divide:[...L(),"hidden","none"]}],"border-color":[{border:Q()}],"border-color-x":[{"border-x":Q()}],"border-color-y":[{"border-y":Q()}],"border-color-s":[{"border-s":Q()}],"border-color-e":[{"border-e":Q()}],"border-color-bs":[{"border-bs":Q()}],"border-color-be":[{"border-be":Q()}],"border-color-t":[{"border-t":Q()}],"border-color-r":[{"border-r":Q()}],"border-color-b":[{"border-b":Q()}],"border-color-l":[{"border-l":Q()}],"divide-color":[{divide:Q()}],"outline-style":[{outline:[...L(),"none","hidden"]}],"outline-offset":[{"outline-offset":[xe,te,ee]}],"outline-w":[{outline:["",xe,Un,bn]}],"outline-color":[{outline:Q()}],shadow:[{shadow:["","inner","none",u,$r,Mr]}],"shadow-color":[{shadow:Q()}],"inset-shadow":[{"inset-shadow":["none",d,$r,Mr]}],"inset-shadow-color":[{"inset-shadow":Q()}],"ring-w":[{ring:ke()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:Q()}],"ring-offset-w":[{"ring-offset":[xe,bn]}],"ring-offset-color":[{"ring-offset":Q()}],"inset-ring-w":[{"inset-ring":ke()}],"inset-ring-color":[{"inset-ring":Q()}],"text-shadow":[{"text-shadow":["none",f,$r,Mr]}],"text-shadow-color":[{"text-shadow":Q()}],opacity:[{opacity:[xe,te,ee]}],"mix-blend":[{"mix-blend":[...J(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":J()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[xe]}],"mask-image-linear-from-pos":[{"mask-linear-from":G()}],"mask-image-linear-to-pos":[{"mask-linear-to":G()}],"mask-image-linear-from-color":[{"mask-linear-from":Q()}],"mask-image-linear-to-color":[{"mask-linear-to":Q()}],"mask-image-t-from-pos":[{"mask-t-from":G()}],"mask-image-t-to-pos":[{"mask-t-to":G()}],"mask-image-t-from-color":[{"mask-t-from":Q()}],"mask-image-t-to-color":[{"mask-t-to":Q()}],"mask-image-r-from-pos":[{"mask-r-from":G()}],"mask-image-r-to-pos":[{"mask-r-to":G()}],"mask-image-r-from-color":[{"mask-r-from":Q()}],"mask-image-r-to-color":[{"mask-r-to":Q()}],"mask-image-b-from-pos":[{"mask-b-from":G()}],"mask-image-b-to-pos":[{"mask-b-to":G()}],"mask-image-b-from-color":[{"mask-b-from":Q()}],"mask-image-b-to-color":[{"mask-b-to":Q()}],"mask-image-l-from-pos":[{"mask-l-from":G()}],"mask-image-l-to-pos":[{"mask-l-to":G()}],"mask-image-l-from-color":[{"mask-l-from":Q()}],"mask-image-l-to-color":[{"mask-l-to":Q()}],"mask-image-x-from-pos":[{"mask-x-from":G()}],"mask-image-x-to-pos":[{"mask-x-to":G()}],"mask-image-x-from-color":[{"mask-x-from":Q()}],"mask-image-x-to-color":[{"mask-x-to":Q()}],"mask-image-y-from-pos":[{"mask-y-from":G()}],"mask-image-y-to-pos":[{"mask-y-to":G()}],"mask-image-y-from-color":[{"mask-y-from":Q()}],"mask-image-y-to-color":[{"mask-y-to":Q()}],"mask-image-radial":[{"mask-radial":[te,ee]}],"mask-image-radial-from-pos":[{"mask-radial-from":G()}],"mask-image-radial-to-pos":[{"mask-radial-to":G()}],"mask-image-radial-from-color":[{"mask-radial-from":Q()}],"mask-image-radial-to-color":[{"mask-radial-to":Q()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":A()}],"mask-image-conic-pos":[{"mask-conic":[xe]}],"mask-image-conic-from-pos":[{"mask-conic-from":G()}],"mask-image-conic-to-pos":[{"mask-conic-to":G()}],"mask-image-conic-from-color":[{"mask-conic-from":Q()}],"mask-image-conic-to-color":[{"mask-conic-to":Q()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Be()}],"mask-repeat":[{mask:ze()}],"mask-size":[{mask:ot()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",te,ee]}],filter:[{filter:["","none",te,ee]}],blur:[{blur:oe()}],brightness:[{brightness:[xe,te,ee]}],contrast:[{contrast:[xe,te,ee]}],"drop-shadow":[{"drop-shadow":["","none",m,$r,Mr]}],"drop-shadow-color":[{"drop-shadow":Q()}],grayscale:[{grayscale:["",xe,te,ee]}],"hue-rotate":[{"hue-rotate":[xe,te,ee]}],invert:[{invert:["",xe,te,ee]}],saturate:[{saturate:[xe,te,ee]}],sepia:[{sepia:["",xe,te,ee]}],"backdrop-filter":[{"backdrop-filter":["","none",te,ee]}],"backdrop-blur":[{"backdrop-blur":oe()}],"backdrop-brightness":[{"backdrop-brightness":[xe,te,ee]}],"backdrop-contrast":[{"backdrop-contrast":[xe,te,ee]}],"backdrop-grayscale":[{"backdrop-grayscale":["",xe,te,ee]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[xe,te,ee]}],"backdrop-invert":[{"backdrop-invert":["",xe,te,ee]}],"backdrop-opacity":[{"backdrop-opacity":[xe,te,ee]}],"backdrop-saturate":[{"backdrop-saturate":[xe,te,ee]}],"backdrop-sepia":[{"backdrop-sepia":["",xe,te,ee]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":D()}],"border-spacing-x":[{"border-spacing-x":D()}],"border-spacing-y":[{"border-spacing-y":D()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",te,ee]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[xe,"initial",te,ee]}],ease:[{ease:["linear","initial",I,te,ee]}],delay:[{delay:[xe,te,ee]}],animate:[{animate:["none",x,te,ee]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[y,te,ee]}],"perspective-origin":[{"perspective-origin":E()}],rotate:[{rotate:g()}],"rotate-x":[{"rotate-x":g()}],"rotate-y":[{"rotate-y":g()}],"rotate-z":[{"rotate-z":g()}],scale:[{scale:k()}],"scale-x":[{"scale-x":k()}],"scale-y":[{"scale-y":k()}],"scale-z":[{"scale-z":k()}],"scale-3d":["scale-3d"],skew:[{skew:$()}],"skew-x":[{"skew-x":$()}],"skew-y":[{"skew-y":$()}],transform:[{transform:[te,ee,"","none","gpu","cpu"]}],"transform-origin":[{origin:E()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:R()}],"translate-x":[{"translate-x":R()}],"translate-y":[{"translate-y":R()}],"translate-z":[{"translate-z":R()}],"translate-none":["translate-none"],zoom:[{zoom:[At,te,ee]}],accent:[{accent:Q()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:Q()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te,ee]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":Q()}],"scrollbar-track-color":[{"scrollbar-track":Q()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mbs":[{"scroll-mbs":D()}],"scroll-mbe":[{"scroll-mbe":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pbs":[{"scroll-pbs":D()}],"scroll-pbe":[{"scroll-pbe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te,ee]}],fill:[{fill:["none",...Q()]}],"stroke-w":[{stroke:[xe,Un,bn,Zi]}],stroke:[{stroke:["none",...Q()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["start","end","right","left"],"inset-y":["inset-bs","inset-be","top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["ps","pe","pr","pl"],py:["pbs","pbe","pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["ms","me","mr","ml"],my:["mbs","mbe","mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-s","border-w-e","border-w-r","border-w-l"],"border-w-y":["border-w-bs","border-w-be","border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-s","border-color-e","border-color-r","border-color-l"],"border-color-y":["border-color-bs","border-color-be","border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-ms","scroll-me","scroll-mr","scroll-ml"],"scroll-my":["scroll-mbs","scroll-mbe","scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-ps","scroll-pe","scroll-pr","scroll-pl"],"scroll-py":["scroll-pbs","scroll-pbe","scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Wf=_f(qf);function pe(...e){return Wf(tf(e))}const Xf={class:"h-full w-full overflow-visible",xmlns:"http://www.w3.org/2000/svg"},Kf=["id"],Yf=["stop-color"],Zf=["stop-color"],Jf=["rx","ry","stroke","stroke-width","stroke-dasharray"],Qf=["rx","ry","stroke","stroke-width","stroke-dasharray"],em=ie({__name:"BorderBeam",props:{borderWidth:{default:2},size:{default:20},duration:{default:6},colorFrom:{default:"#38bdf8"},colorTo:{default:"#a855f7"},delay:{default:0},reverse:{type:Boolean,default:!1},borderRadius:{default:16},glow:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=uo(),r=ce(()=>{if(typeof t.borderRadius=="number")return t.borderRadius;const a=parseFloat(t.borderRadius);return isNaN(a)?16:a}),o=ce(()=>t.size>50?18:Math.min(Math.max(t.size,5),80)),s=ce(()=>`${o.value} ${100-o.value}`),l=ce(()=>({animationDuration:`${t.duration}s`,animationDelay:`-${t.delay}s`,animationDirection:t.reverse?"reverse":"normal"}));return(a,c)=>(b(),v("div",{class:M(C(pe)("pointer-events-none absolute inset-0 rounded-[inherit] overflow-visible",t.class))},[(b(),v("svg",Xf,[i("defs",null,[i("linearGradient",{id:`border-beam-grad-${C(n)}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[i("stop",{offset:"0%","stop-color":t.colorFrom},null,8,Yf),i("stop",{offset:"100%","stop-color":t.colorTo},null,8,Zf)],8,Kf)]),t.glow?(b(),v("rect",{key:0,pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${C(n)})`,"stroke-width":t.borderWidth*2,"stroke-dasharray":s.value,"stroke-linecap":"round",opacity:"0.45",class:"border-beam-svg-motion blur-[3px]",style:me(l.value)},null,12,Jf)):re("",!0),i("rect",{pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${C(n)})`,"stroke-width":t.borderWidth,"stroke-dasharray":s.value,"stroke-linecap":"round",class:"border-beam-svg-motion",style:me(l.value)},null,12,Qf)]))],2))}}),je=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},ms=je(em,[["__scopeId","data-v-bf918acf"]]),tm={class:"relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-white"},nm=ie({__name:"ShimmerButton",props:{shimmerColor:{default:"#38bdf8"},shimmerSize:{default:"0.12em"},shimmerDuration:{default:"2.5s"},borderRadius:{default:"9999px"},class:{}},setup(e){const t=e,n=ce(()=>({"--shimmer-color":t.shimmerColor,"--shimmer-size":t.shimmerSize,"--speed":t.shimmerDuration,"--radius":t.borderRadius}));return(r,o)=>(b(),v("button",{style:me(n.value),class:M(C(pe)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white transition-all duration-300 active:scale-95","border border-white/10 [border-radius:var(--radius)]","bg-zinc-900/90 shadow-md hover:shadow-lg hover:shadow-sky-500/20 dark:bg-black/90",t.class))},[o[0]||(o[0]=i("div",{class:"shimmer-spin-container pointer-events-none absolute -inset-[100%] [aspect-ratio:1] [border-radius:inherit]"},[i("div",{class:"shimmer-spin-gradient h-full w-full animate-shimmer-spin"})],-1)),o[1]||(o[1]=i("div",{class:"absolute [inset:var(--shimmer-size)] [border-radius:inherit] bg-zinc-950/95 transition-colors duration-300 group-hover:bg-zinc-900/95"},null,-1)),i("span",tm,[We(r.$slots,"default",{},void 0,!0)])],6))}}),ir=je(nm,[["__scopeId","data-v-6b251134"]]),rm=ie({__name:"ShinyText",props:{text:{},duration:{default:2.5},variant:{default:"white"},class:{}},setup(e){const t=e,n=ce(()=>({"--duration":`${t.duration}s`}));return(r,o)=>(b(),v("span",{style:me(n.value),class:M(C(pe)("shiny-text-root inline-block font-bold bg-clip-text text-transparent",t.variant==="white"&&"shiny-variant-white",t.variant==="cyber"&&"shiny-variant-cyber",t.class))},[We(r.$slots,"default",{},()=>[Ae(T(t.text),1)],!0)],6))}}),ar=je(rm,[["__scopeId","data-v-31108f82"]]),om=ie({__name:"RetroGrid",props:{angle:{default:65},cellSize:{default:60},opacity:{default:.5},lightLineColor:{default:"#94a3b8"},darkLineColor:{default:"#38bdf8"},mask:{type:Boolean,default:!0},maskClass:{},class:{}},setup(e){const t=e,n=ce(()=>({"--grid-angle":`${t.angle}deg`,"--cell-size":`${t.cellSize}px`,"--opacity":t.opacity.toString(),"--light-line":t.lightLineColor,"--dark-line":t.darkLineColor}));return(r,o)=>(b(),v("div",{style:me(n.value),class:M(C(pe)("pointer-events-none absolute h-full w-full overflow-hidden opacity-[var(--opacity)] [perspective:200px]",t.class))},[i("div",{class:M(C(pe)("absolute inset-0 [transform:rotateX(var(--grid-angle))]",t.mask&&"retro-grid-horizon-mask"))},[...o[0]||(o[0]=[i("div",{class:"retro-grid-plane animate-retro-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]"},null,-1)])],2)],6))}}),bs=je(om,[["__scopeId","data-v-2d20ad14"]]),vc=ie({__name:"BentoGrid",props:{class:{}},setup(e){const t=e;return(n,r)=>(b(),v("div",{class:M(C(pe)("grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",t.class))},[We(n.$slots,"default")],2))}}),sm={class:"relative z-0 h-44 w-full overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"},im={class:"relative z-10 flex flex-col gap-2 pt-4"},am={class:"flex items-center gap-2.5"},lm={class:"text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},cm={class:"text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"},dm={key:0,class:"mt-3 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400"},um=ie({__name:"BentoCard",props:{name:{},description:{},class:{},href:{},cta:{},spotlightRadius:{default:300}},setup(e){const t=e,n=F(0),r=F(0),o=F(!1);function s(l){const a=l.currentTarget.getBoundingClientRect();n.value=l.clientX-a.left,r.value=l.clientY-a.top}return(l,a)=>{const c=yr("router-link");return b(),v("div",{class:M(C(pe)("group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300","border border-zinc-200 bg-white/70 shadow-sm backdrop-blur-md hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10",t.class)),onMousemove:s,onMouseenter:a[0]||(a[0]=p=>o.value=!0),onMouseleave:a[1]||(a[1]=p=>o.value=!1)},[i("div",{class:"pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",style:me({background:`radial-gradient(${t.spotlightRadius}px circle at ${n.value}px ${r.value}px, var(--spotlight-color), transparent 80%)`})},null,4),i("div",sm,[We(l.$slots,"background",{},void 0,!0)]),i("div",im,[i("div",am,[We(l.$slots,"icon",{},void 0,!0),i("h3",lm,T(t.name),1)]),i("p",cm,T(t.description),1),t.cta||l.$slots.cta?(b(),v("div",dm,[We(l.$slots,"cta",{},()=>[t.href?(b(),fe(c,{key:0,to:t.href,class:"inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"},{default:Y(()=>[Ae(T(t.cta)+" ",1),a[2]||(a[2]=i("span",{"aria-hidden":"true"},"→",-1))]),_:1},8,["to"])):re("",!0)],!0)])):re("",!0)])],34)}}}),it=je(um,[["__scopeId","data-v-f7ebca2d"]]),pm=ie({__name:"Marquee",props:{duration:{default:30},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},repeat:{default:4},class:{}},setup(e){const t=e,n=ce(()=>({"--duration":`${t.duration}s`}));return(r,o)=>(b(),v("div",{style:me(n.value),class:M(C(pe)("group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",t.vertical?"flex-col":"flex-row",t.class))},[(b(!0),v(se,null,we(t.repeat,s=>(b(),v("div",{key:s,class:M(C(pe)("flex shrink-0 justify-around [gap:var(--gap)]",t.vertical?"flex-col animate-marquee-vertical":"flex-row animate-marquee",t.pauseOnHover&&"group-hover:[animation-play-state:paused]",t.reverse&&"[animation-direction:reverse]"))},[We(r.$slots,"default",{},void 0,!0)],2))),128))],6))}}),Or=je(pm,[["__scopeId","data-v-2ea856f7"]]),fm={"aria-hidden":"true",class:"pointer-events-none h-full w-full fill-neutral-400/60 dark:fill-neutral-600/60 transition-colors"},mm=["id","width","height","x","y"],bm=["cx","cy","r"],gm=["fill"],yc=ie({__name:"DotPattern",props:{width:{default:20},height:{default:20},x:{default:0},y:{default:0},cx:{default:1},cy:{default:1},cr:{default:1},glow:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=uo(),r=F(-9999),o=F(-9999);function s(a){if(!t.glow)return;const c=a.currentTarget.getBoundingClientRect();r.value=a.clientX-c.left,o.value=a.clientY-c.top}function l(){r.value=-9999,o.value=-9999}return(a,c)=>(b(),v("div",{class:M(C(pe)("absolute inset-0 h-full w-full overflow-hidden",t.glow?"pointer-events-auto":"pointer-events-none",t.class)),onMousemove:s,onMouseleave:l},[(b(),v("svg",fm,[i("defs",null,[i("pattern",{id:C(n),width:t.width,height:t.height,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:t.x,y:t.y},[i("circle",{cx:t.cx,cy:t.cy,r:t.cr},null,8,bm)],8,mm)]),i("rect",{width:"100%",height:"100%",fill:`url(#${C(n)})`},null,8,gm)])),t.glow?(b(),v("div",{key:0,class:"absolute inset-0 transition-opacity duration-300",style:me({background:`radial-gradient(200px circle at ${r.value}px ${o.value}px, rgba(59, 130, 246, 0.15), transparent 80%)`})},null,4)):re("",!0)],34))}}),hm={class:"relative z-10 h-full w-full"},wc=ie({__name:"InteractiveParticles",props:{quantity:{default:50},speed:{default:.6},maxRadius:{default:2},mouseRadius:{default:100},color:{},connectLines:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=F(null);let r=null,o=[];const s={x:-9999,y:-9999};function l(d,f){o=[];for(let m=0;m<t.quantity;m++)o.push({x:Math.random()*d,y:Math.random()*f,vx:(Math.random()-.5)*t.speed,vy:(Math.random()-.5)*t.speed,size:Math.random()*t.maxRadius+.8,baseAlpha:Math.random()*.5+.2,alpha:Math.random()*.5+.2})}function a(){const d=n.value;if(!d)return;const f=window.devicePixelRatio||1,m=d.getBoundingClientRect();d.width=m.width*f,d.height=m.height*f;const z=d.getContext("2d");z&&z.scale(f,f),l(m.width,m.height)}function c(d){const f=n.value;if(!f)return;const m=f.getBoundingClientRect();s.x=d.clientX-m.left,s.y=d.clientY-m.top}function p(){s.x=-9999,s.y=-9999}function u(){const d=n.value;if(!d)return;const f=d.getContext("2d");if(!f)return;const m=d.getBoundingClientRect(),z=m.width,y=m.height;f.clearRect(0,0,z,y);const I=document.documentElement.classList.contains("dark")?"255, 255, 255":"59, 130, 246",x=t.color||I;for(let _=0;_<o.length;_++){const A=o[_];A.x+=A.vx,A.y+=A.vy,(A.x<0||A.x>z)&&(A.vx*=-1),(A.y<0||A.y>y)&&(A.vy*=-1);const E=s.x-A.x,V=s.y-A.y,U=Math.sqrt(E*E+V*V);if(U<t.mouseRadius){const D=(t.mouseRadius-U)/t.mouseRadius;A.x-=E/U*D*2,A.y-=V/U*D*2,A.alpha=Math.min(A.baseAlpha+.4,.9)}else A.alpha=A.baseAlpha;if(f.beginPath(),f.arc(A.x,A.y,A.size,0,Math.PI*2),f.fillStyle=x.startsWith("#")?x:`rgba(${x}, ${A.alpha})`,f.fill(),t.connectLines)for(let D=_+1;D<o.length;D++){const j=o[D],ne=Math.hypot(A.x-j.x,A.y-j.y);if(ne<80){f.beginPath(),f.moveTo(A.x,A.y),f.lineTo(j.x,j.y);const de=(1-ne/80)*.15;f.strokeStyle=`rgba(${I}, ${de})`,f.lineWidth=.6,f.stroke()}}}r=requestAnimationFrame(u)}return Xe(()=>{a(),window.addEventListener("resize",a),u()}),et(()=>{window.removeEventListener("resize",a),r!==null&&cancelAnimationFrame(r)}),gt(()=>t.quantity,()=>{const d=n.value;if(d){const f=d.getBoundingClientRect();l(f.width,f.height)}}),(d,f)=>(b(),v("div",{class:M(C(pe)("relative h-full w-full overflow-hidden",t.class)),onMousemove:c,onMouseleave:p},[i("canvas",{ref_key:"canvasRef",ref:n,class:"pointer-events-none absolute inset-0 h-full w-full"},null,512),i("div",hm,[We(d.$slots,"default")])],34))}}),xm=ie({__name:"Meteors",props:{number:{default:20},angle:{default:215},minDelay:{default:.2},maxDelay:{default:1.2},minDuration:{default:2},maxDuration:{default:8},class:{}},setup(e){const t=e,n=ce(()=>Array.from({length:t.number}).map(()=>{const r=Math.floor(Math.random()*100),o=Math.floor(Math.random()*100),s=(Math.random()*(t.maxDelay-t.minDelay)+t.minDelay).toFixed(2),l=(Math.random()*(t.maxDuration-t.minDuration)+t.minDuration).toFixed(2);return{top:`${r}%`,left:`${o}%`,animationDelay:`${s}s`,animationDuration:`${l}s`}}));return(r,o)=>(b(),v("div",{class:M(C(pe)("pointer-events-none absolute inset-0 overflow-hidden",t.class))},[(b(!0),v(se,null,we(n.value,(s,l)=>(b(),v("span",{key:l,style:me({...s,"--angle":`${t.angle}deg`}),class:"animate-meteor absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[var(--angle)] dark:bg-sky-400 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-slate-500 before:to-transparent dark:before:from-sky-400"},null,4))),128))],2))}}),kc=je(xm,[["__scopeId","data-v-7d09918c"]]),vm=ie({__name:"Ripple",props:{mainCircleSize:{default:210},mainCircleOpacity:{default:.24},numCircles:{default:8},class:{}},setup(e){const t=e;return(n,r)=>(b(),v("div",{class:M(C(pe)("pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",t.class))},[(b(!0),v(se,null,we(t.numCircles,o=>(b(),v("div",{key:o,style:me({width:`${t.mainCircleSize+(o-1)*70}px`,height:`${t.mainCircleSize+(o-1)*70}px`,opacity:Math.max(.04,t.mainCircleOpacity-(o-1)*.025),animationDelay:`${(o-1)*.06}s`,borderStyle:o===t.numCircles?"dashed":"solid",borderWidth:"1px"}),class:"animate-ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-500/40 bg-blue-500/5 shadow-[0_0_16px_rgba(59,130,246,0.1)] dark:border-sky-400/30 dark:bg-sky-400/5"},null,4))),128))],2))}}),zc=je(vm,[["__scopeId","data-v-98c398f7"]]),Vr=ie({__name:"NumberTicker",props:{value:{},direction:{default:"up"},duration:{default:2},delay:{default:0},decimalPlaces:{default:0},class:{}},setup(e){const t=e,n=F(null),r=F("0");let o=null,s=null,l=!1;function a(u){return u===1?1:1-Math.pow(2,-10*u)}function c(u){return new Intl.NumberFormat("en-US",{minimumFractionDigits:t.decimalPlaces,maximumFractionDigits:t.decimalPlaces}).format(u)}function p(){if(l)return;l=!0;const u=t.direction==="down"?t.value:0,d=t.direction==="down"?0:t.value,f=t.duration*1e3;let m=null;setTimeout(()=>{function z(y){m||(m=y);const S=y-m,I=Math.min(S/f,1),x=a(I),_=u+(d-u)*x;r.value=c(_),I<1?o=requestAnimationFrame(z):r.value=c(d)}o=requestAnimationFrame(z)},t.delay*1e3)}return Xe(()=>{r.value=c(t.direction==="down"?t.value:0),n.value?(s=new IntersectionObserver(u=>{u[0].isIntersecting&&(p(),s&&s.disconnect())},{threshold:.1}),s.observe(n.value)):p()}),et(()=>{o&&cancelAnimationFrame(o),s&&s.disconnect()}),gt(()=>t.value,()=>{l=!1,p()}),(u,d)=>(b(),v("span",{ref_key:"spanRef",ref:n,class:M(C(pe)("inline-block tabular-nums tracking-wider",t.class))},T(r.value),3))}}),ym=["width","height","viewBox"],wm=["d","stroke","stroke-width","stroke-opacity"],km=["d","stroke","stroke-width"],zm=["id"],_m=["stop-color"],Cm=["stop-color"],Sm=["stop-color"],Im=["from","to","dur","begin"],Am=["from","to","dur","begin"],Qr=ie({__name:"AnimatedBeam",props:{containerRef:{},fromRef:{},toRef:{},curvature:{default:0},reverse:{type:Boolean,default:!1},pathColor:{default:"#94a3b8"},pathWidth:{default:2},pathOpacity:{default:.2},gradientStartColor:{default:"#38bdf8"},gradientStopColor:{default:"#6366f1"},duration:{default:3},delay:{default:0},startXOffset:{default:0},startYOffset:{default:0},endXOffset:{default:0},endYOffset:{default:0},class:{}},setup(e){const t=e,n=uo(),r=F(""),o=F({width:0,height:0});function s(c){return c?"value"in c?c.value:c instanceof HTMLElement?c:null:null}function l(){const c=s(t.containerRef),p=s(t.fromRef),u=s(t.toRef);if(!c||!p||!u)return;const d=c.getBoundingClientRect(),f=p.getBoundingClientRect(),m=u.getBoundingClientRect();o.value={width:d.width,height:d.height};const z=f.left-d.left+f.width/2+t.startXOffset,y=f.top-d.top+f.height/2+t.startYOffset,S=m.left-d.left+m.width/2+t.endXOffset,I=m.top-d.top+m.height/2+t.endYOffset,x=(z+S)/2,_=(y+I)/2,A=x,E=_-t.curvature;t.curvature===0?r.value=`M ${z},${y} L ${S},${I}`:r.value=`M ${z},${y} Q ${A},${E} ${S},${I}`}let a=null;return Xe(()=>{l(),window.addEventListener("resize",l);const c=s(t.containerRef);c&&(a=new ResizeObserver(()=>l()),a.observe(c))}),et(()=>{window.removeEventListener("resize",l),a&&a.disconnect()}),gt([()=>s(t.containerRef),()=>s(t.fromRef),()=>s(t.toRef),()=>t.curvature],()=>{l()}),(c,p)=>(b(),v("svg",{width:o.value.width,height:o.value.height,viewBox:`0 0 ${o.value.width} ${o.value.height}`,class:M(C(pe)("pointer-events-none absolute inset-0 h-full w-full select-none overflow-visible",t.class))},[i("path",{d:r.value,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-opacity":t.pathOpacity,"stroke-linecap":"round"},null,8,wm),i("path",{d:r.value,fill:"none",stroke:`url(#beam-gradient-${C(n)})`,"stroke-width":t.pathWidth,"stroke-linecap":"round"},null,8,km),i("defs",null,[i("linearGradient",{id:`beam-gradient-${C(n)}`,gradientUnits:"userSpaceOnUse"},[i("stop",{offset:"0%","stop-color":t.gradientStartColor,"stop-opacity":"0"},null,8,_m),i("stop",{offset:"50%","stop-color":t.gradientStartColor,"stop-opacity":"1"},null,8,Cm),i("stop",{offset:"100%","stop-color":t.gradientStopColor,"stop-opacity":"0"},null,8,Sm),i("animate",{attributeName:"x1",from:t.reverse?"100%":"-50%",to:t.reverse?"-50%":"100%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,Im),i("animate",{attributeName:"x2",from:t.reverse?"150%":"0%",to:t.reverse?"0%":"150%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,Am)],8,zm)])],10,ym))}}),Mm={class:"relative z-50 -translate-y-32 flex flex-col items-center px-5 text-center"},_c=ie({__name:"LampEffect",props:{glowColor:{default:"#06b6d4"},class:{}},setup(e){const t=e;return(n,r)=>(b(),v("div",{class:M(C(pe)("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-2xl z-0",t.class))},[r[0]||(r[0]=rs(`<div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"><div class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div><div class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"></div></div><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"><div class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"></div><div class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div></div><div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl"></div><div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div><div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div><div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></div><div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div><div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-950"></div></div>`,1)),i("div",Mm,[We(n.$slots,"default")])],2))}}),Cc=ie({__name:"FlickeringGrid",props:{squareSize:{default:4},gridGap:{default:4},flickerChance:{default:.3},color:{},maxOpacity:{default:.3},class:{}},setup(e){const t=e,n=F(null),r=F(null);let o=null,s=new Float32Array(0),l=0,a=0;function c(d,f){l=Math.floor(d/(t.squareSize+t.gridGap)),a=Math.floor(f/(t.squareSize+t.gridGap)),s=new Float32Array(l*a);for(let m=0;m<s.length;m++)s[m]=Math.random()*t.maxOpacity}function p(){const d=n.value,f=r.value;if(!d||!f)return;const m=window.devicePixelRatio||1,z=d.getBoundingClientRect();f.width=z.width*m,f.height=z.height*m;const y=f.getContext("2d");y&&y.scale(m,m),c(z.width,z.height)}function u(){const d=r.value,f=n.value;if(!d||!f)return;const m=d.getContext("2d");if(!m)return;const z=f.getBoundingClientRect();m.clearRect(0,0,z.width,z.height);const S=document.documentElement.classList.contains("dark")?"148, 163, 184":"100, 116, 139",I=t.color||S;for(let x=0;x<a;x++)for(let _=0;_<l;_++){const A=x*l+_;Math.random()<t.flickerChance&&(s[A]=Math.random()*t.maxOpacity);const E=s[A];m.fillStyle=I.startsWith("#")?I:`rgba(${I}, ${E})`;const V=_*(t.squareSize+t.gridGap),U=x*(t.squareSize+t.gridGap);m.fillRect(V,U,t.squareSize,t.squareSize)}o=requestAnimationFrame(u)}return Xe(()=>{p(),window.addEventListener("resize",p),u()}),et(()=>{window.removeEventListener("resize",p),o&&cancelAnimationFrame(o)}),gt([()=>t.squareSize,()=>t.gridGap],()=>{p()}),(d,f)=>(b(),v("div",{ref_key:"containerRef",ref:n,class:M(C(pe)("pointer-events-none relative h-full w-full overflow-hidden",t.class))},[i("canvas",{ref_key:"canvasRef",ref:r,class:"absolute inset-0 h-full w-full"},null,512)],2))}}),$m={class:"relative overflow-hidden"},Rm={class:"relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center overflow-hidden"},Tm={class:"relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200"},Pm={class:"relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"},Em={class:"relative z-10 mt-12 w-full max-w-2xl text-left"},Fm={class:"relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/80"},Lm={class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"},Om={class:"border-y border-zinc-200/80 bg-zinc-50/50 py-6 dark:border-zinc-800/80 dark:bg-zinc-950/40"},Vm={class:"mx-auto max-w-7xl px-4 text-center"},Dm={id:"features",class:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"},jm={class:"text-center max-w-3xl mx-auto mb-16 space-y-4"},Bm={class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"},Nm={class:"relative h-full w-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50/40 to-transparent dark:from-zinc-900/60 dark:to-transparent"},Hm={class:"relative flex h-32 w-56 flex-col justify-between rounded-xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-md backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95"},Um={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-50/50 to-blue-50/20 border border-blue-100/50 dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800"},Gm={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50/30 to-white dark:from-zinc-950 dark:to-zinc-900"},qm={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-50/30 to-transparent dark:from-zinc-900/50 dark:to-transparent"},Wm={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"},Xm={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50"},Km={class:"relative h-full w-full flex flex-col justify-center overflow-hidden rounded-xl p-3 bg-zinc-50/60 dark:bg-zinc-900/40"},Ym={class:"relative h-full w-full overflow-hidden rounded-xl bg-slate-950 p-4"},Zm={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center"},Jm={class:"relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40"},Qm={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent flex flex-col items-center justify-center p-4"},eb={class:"text-4xl font-black text-emerald-600 dark:text-emerald-400"},tb={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4"},nb={class:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800/80"},rb={class:"text-center max-w-3xl mx-auto mb-12 space-y-3"},ob={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400"},sb={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},ib={class:"flex items-center justify-between mb-4"},ab={class:"flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60"},lb={class:"rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-[11px] font-mono font-bold text-zinc-600 dark:text-zinc-300"},cb={class:"text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2"},db={class:"text-[11px] font-mono text-zinc-400 block mt-0.5"},ub={class:"mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"},pb={class:"mt-4 flex flex-wrap gap-1.5"},fb={class:"mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between"},mb={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"},bb={class:"mt-8 flex items-center justify-center gap-4"},gb={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-20 dark:border-zinc-800/80 dark:bg-zinc-950/40"},hb={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},xb={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},vb={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},yb={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400"},wb={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},kb={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400"},zb={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},_b={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400"},Cb=ie({__name:"HomeView",setup(e){const t=F(null),n=F(null),r=F(null),o=F(null);function s(u){switch(u){case"ai-native":return nr;case"interactive-nav":return Xn;case"space-3d":return or;case"borders-cards":return qt;case"kinetic-typography":return Me;default:return Me}}function l(u){return rn.filter(d=>d.suiteId===u)}const a=["Vue 3.5+","TypeScript","Tailwind CSS","Composition API","Vite 6","HTML5 Canvas","Web Animations API","Zero-Config"],c=F(!1);function p(){navigator.clipboard.writeText("npm i @vueuse/core clsx tailwind-merge"),c.value=!0,setTimeout(()=>{c.value=!1},2e3)}return(u,d)=>{const f=yr("router-link");return b(),v("div",$m,[i("section",Rm,[w(bs,{angle:65,opacity:.45}),i("div",Tm,[w(C(Me),{class:"h-3.5 w-3.5 text-blue-500"}),w(ar,{text:"Vue 3 的动效原子代码库现已上线"}),d[0]||(d[0]=i("span",{class:"rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] text-blue-600 dark:text-blue-400"}," v1.0 ",-1))]),d[4]||(d[4]=i("h1",{class:"relative z-10 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight"},[Ae(" 专属于 Vue 3 的 "),i("span",{class:"block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400"}," 高阶动效原子库 ")],-1)),d[5]||(d[5]=i("p",{class:"relative z-10 mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400"},[Ae(" 不再重复造普通表单，全面对标 Magic UI 与 Aceternity UI。"),i("br",{class:"hidden sm:inline"}),Ae(" 面向 "),i("strong",null,"AI 官网、SaaS 营销页、酷炫个人主页"),Ae("，提供 60fps 单文件即用的动效积木。 ")],-1)),i("div",Pm,[w(f,{to:"/docs/border-beam"},{default:Y(()=>[w(ir,{"shimmer-color":"#60a5fa",class:"h-12 px-8 text-base"},{default:Y(()=>[d[1]||(d[1]=i("span",null,"立即浏览组件",-1)),w(C(tr),{class:"h-4 w-4"})]),_:1})]),_:1}),i("button",{type:"button",class:"inline-flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-800",onClick:p},[c.value?(b(),fe(C(Kt),{key:0,class:"h-4 w-4 text-emerald-500"})):(b(),fe(C(gr),{key:1,class:"h-4 w-4 text-zinc-400"})),i("span",null,T(c.value?"已复制依赖指令":"复制基础依赖指令"),1)])]),i("div",Em,[i("div",Fm,[w(ms,{size:90,duration:6,"color-from":"#38bdf8","color-to":"#a855f7","border-width":2,"border-radius":16}),d[3]||(d[3]=rs('<div class="mb-4 flex items-center justify-between border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60"><div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-rose-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span><span class="ml-2 font-mono text-xs text-zinc-400">components/BorderBeam.vue</span></div><div class="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Zero-Config / 粘贴即跑</span></div></div>',1)),i("div",Lm,[d[2]||(d[2]=rs('<div class="space-y-1 text-zinc-600 dark:text-zinc-300"><p><span class="text-purple-500">&lt;template&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;div</span> <span class="text-amber-500">class=</span><span class="text-emerald-500">&quot;relative rounded-2xl&quot;</span><span class="text-blue-500">&gt;</span></p><p class="pl-8"><span class="text-blue-500">&lt;BorderBeam</span> <span class="text-amber-500">:duration=</span><span class="text-emerald-500">&quot;5&quot;</span> <span class="text-amber-500">:border-width=</span><span class="text-emerald-500">&quot;2&quot;</span> <span class="text-blue-500">/&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;/div&gt;</span></p><p><span class="text-purple-500">&lt;/template&gt;</span></p></div>',1)),w(f,{to:"/docs/border-beam",class:"shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"},{default:Y(()=>[Ae(" 浏览全部 "+T(C(rn).length)+" 款动效 → ",1)]),_:1})])])])]),i("section",Om,[i("div",Vm,[d[7]||(d[7]=i("p",{class:"mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase"}," 原生融合的技术栈与动效标准 ",-1)),w(Or,{duration:25,"pause-on-hover":!0},{default:Y(()=>[(b(),v(se,null,we(a,m=>i("div",{key:m,class:"flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-5 py-2 text-xs font-bold text-zinc-700 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300"},[d[6]||(d[6]=i("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),i("span",null,T(m),1)])),64))]),_:1})])]),i("section",Dm,[i("div",jm,[i("h2",Bm," 全面对标顶流 · 5 大主题套件 · "+T(C(rn).length)+" 款高阶动效全装配 ",1),d[8]||(d[8]=i("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 每一个组件都经过精心打磨，在移动端与桌面端保持 60fps 满帧性能，全部开箱即用，支持 Clean Light 与 Deep Dark 双模自适应。 ",-1))]),w(vc,null,{default:Y(()=>[w(it,{name:"Border Beam",description:"现代 CSS 路径动画，高光激光沿圆角边框飞速流转，AI 推理与核心 VIP 的视觉焦点",cta:"查看详情与代码",href:"/docs/border-beam"},{icon:Y(()=>[w(C(Me),{class:"h-5 w-5 text-sky-500"})]),background:Y(()=>[i("div",Nm,[i("div",Hm,[w(ms,{size:65,duration:3.5,"color-from":"#06b6d4","color-to":"#6366f1","border-width":2,"border-radius":12}),d[9]||(d[9]=i("div",{class:"flex items-center justify-between"},[i("div",{class:"flex items-center gap-2"},[i("span",{class:"relative flex h-2 w-2"},[i("span",{class:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),i("span",{class:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]),i("span",{class:"text-xs font-bold text-zinc-800 dark:text-zinc-200"},"AI 推理状态")]),i("span",{class:"rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-sky-600 dark:text-sky-400"},"360° 流动")],-1)),d[10]||(d[10]=i("div",{class:"space-y-1.5"},[i("div",{class:"h-2 w-4/5 rounded-full bg-zinc-200 dark:bg-zinc-700"}),i("div",{class:"h-2 w-3/5 rounded-full bg-gradient-to-r from-sky-500/40 to-indigo-500/40"})],-1))])])]),_:1}),w(it,{name:"Interactive Particles",description:"原生 Canvas 2D 粒子引擎，支持鼠标悬浮动态引力排斥、微线互联与 60fps 满帧性能",cta:"查看详情与代码",href:"/docs/interactive-particles"},{icon:Y(()=>[w(C(vn),{class:"h-5 w-5 text-amber-500"})]),background:Y(()=>[i("div",Um,[w(wc,{quantity:38,speed:.75,"mouse-radius":85,"connect-lines":!0,class:"absolute inset-0 h-full w-full"}),d[11]||(d[11]=i("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[i("div",{class:"flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1 text-xs font-mono font-medium text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900/60 dark:bg-zinc-900/80 dark:text-blue-400"},[i("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"}),i("span",null,"悬浮鼠标即刻磁吸交互")])],-1))])]),_:1}),w(it,{name:"Retro Grid",description:"3D 倾斜无限延展赛博网格，原生区分明暗模式线条色彩，渲染极具科技纵深感的背景",cta:"查看详情与代码",href:"/docs/retro-grid"},{icon:Y(()=>[w(C(qt),{class:"h-5 w-5 text-indigo-500"})]),background:Y(()=>[i("div",Gm,[w(bs,{angle:65,opacity:.85,"cell-size":34,"light-line-color":"#6366f1","dark-line-color":"#38bdf8"}),d[12]||(d[12]=i("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[i("span",{class:"rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-xs backdrop-blur-md dark:border-indigo-900/80 dark:bg-zinc-900/90 dark:text-indigo-400"}," 3D 空间动态透视 ")],-1))])]),_:1}),w(it,{name:"Shimmer Button",description:"360° 旋转锥形流光高光外圈，适配核心 CTA 与付费引导，鼠标悬停即刻聚光",cta:"查看详情与代码",href:"/docs/shimmer-button"},{icon:Y(()=>[w(C(Me),{class:"h-5 w-5 text-pink-500"})]),background:Y(()=>[i("div",qm,[w(ir,{"shimmer-color":"#ec4899","shimmer-duration":"2.4s",class:"shadow-lg"},{default:Y(()=>[w(C(Me),{class:"h-4 w-4 text-pink-400"}),d[13]||(d[13]=i("span",null,"360° 旋转光晕按钮",-1))]),_:1}),d[14]||(d[14]=i("span",{class:"mt-3 text-[11px] font-mono text-zinc-400"},"悬停查看高光边缘旋转",-1))])]),_:1}),w(it,{name:"Shiny Text",description:"金属质感微光划过文字，2.5s 线性平滑连续循环，高亮 Hero 标题与特色特性",cta:"查看详情与代码",href:"/docs/shiny-text"},{icon:Y(()=>[w(C(Me),{class:"h-5 w-5 text-amber-500"})]),background:Y(()=>[i("div",Wm,[d[15]||(d[15]=i("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"},null,-1)),w(ar,{text:"✨ Metallic Shiny Sheen",class:"relative z-10 text-xl font-black tracking-tight",speed:2.2}),d[16]||(d[16]=i("p",{class:"relative z-10 mt-2 text-xs font-mono text-zinc-400"},"高对比连续金属质感流动",-1))])]),_:1}),w(it,{name:"Dot Pattern",description:"极简矢量波点底纹，支持鼠标实时光晕跟随聚光灯，轻量零性能损耗",cta:"查看详情与代码",href:"/docs/dot-pattern"},{icon:Y(()=>[w(C(Nl),{class:"h-5 w-5 text-emerald-500"})]),background:Y(()=>[i("div",Xm,[w(yc,{width:16,height:16,cr:1.2,glow:!0}),d[17]||(d[17]=i("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[i("span",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}," 移动鼠标点亮光晕 ")],-1))])]),_:1}),w(it,{name:"Marquee",description:"纯 CSS 硬件加速无限无缝滚动跑马灯，支持鼠标悬浮暂停、反向循环与变速",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/marquee"},{icon:Y(()=>[w(C(vp),{class:"h-5 w-5 text-blue-500"})]),background:Y(()=>[i("div",Km,[w(Or,{duration:16,"pause-on-hover":!0},{default:Y(()=>[(b(),v(se,null,we(["GPT-4o","Claude 3.5","DeepSeek-V3","Llama 3.3","Gemini 1.5"],m=>i("div",{key:m,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[d[18]||(d[18]=i("span",{class:"h-1.5 w-1.5 rounded-full bg-emerald-500"},null,-1)),i("span",null,T(m),1)])),64))]),_:1}),w(Or,{duration:20,reverse:!0,"pause-on-hover":!0,class:"mt-2.5"},{default:Y(()=>[(b(),v(se,null,we(["Vue 3.5","TypeScript","Tailwind CSS","Zero-Config","Canvas 2D"],m=>i("div",{key:m,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[d[19]||(d[19]=i("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),i("span",null,T(m),1)])),64))]),_:1})])]),_:1}),w(it,{name:"Bento Grid",description:"现代 SaaS 模块化栅格系统，卡片集成鼠标跟随 Spotlight 径向聚光灯流光",cta:"查看详情与代码",href:"/docs/bento-grid"},{icon:Y(()=>[w(C(qt),{class:"h-5 w-5 text-purple-500"})]),background:Y(()=>[...d[20]||(d[20]=[i("div",{class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent"},[i("div",{class:"grid grid-cols-2 gap-2 w-full max-w-[200px]"},[i("div",{class:"h-12 rounded-lg border border-purple-300/40 bg-purple-500/10 dark:border-purple-500/30 dark:bg-purple-500/20 flex items-center justify-center text-[10px] font-mono text-purple-600 dark:text-purple-300"}," Col 1 "),i("div",{class:"h-12 rounded-lg border border-blue-300/40 bg-blue-500/10 dark:border-blue-500/30 dark:bg-blue-500/20 flex items-center justify-center text-[10px] font-mono text-blue-600 dark:text-blue-300"}," Col 2 "),i("div",{class:"col-span-2 h-10 rounded-lg border border-indigo-300/40 bg-indigo-500/10 dark:border-indigo-500/30 dark:bg-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-600 dark:text-indigo-300"}," Span 2 · 动态聚光灯 ")])],-1)])]),_:1}),w(it,{name:"Meteors",description:"纯 CSS 赛博流星雨划过，带 50px 渐变光尾与随机延迟，暗黑科技卡片与首屏氛围杀器",cta:"查看详情与代码",href:"/docs/meteors"},{icon:Y(()=>[w(C(Me),{class:"h-5 w-5 text-sky-400"})]),background:Y(()=>[i("div",Ym,[w(kc,{number:20}),d[21]||(d[21]=i("div",{class:"flex h-full flex-col justify-end"},[i("span",{class:"text-xs font-mono text-sky-400 font-bold"},"215° 斜掠流星轨迹")],-1))])]),_:1}),w(it,{name:"Ripple",description:"由中心向外周循环脉冲扩散的多层同心圆涟漪，适配 AI 语音拾音、雷达声呐与核心头像高亮",cta:"查看详情与代码",href:"/docs/ripple"},{icon:Y(()=>[w(C(Zr),{class:"h-5 w-5 text-blue-500"})]),background:Y(()=>[i("div",Zm,[w(zc,{"main-circle-size":110,"num-circles":6}),i("div",Jm,[w(C(Zr),{class:"h-6 w-6"})])])]),_:1}),w(it,{name:"Number Ticker",description:"采用 easeOutExpo 缓动曲线的平滑数字翻牌器，进入视口自动起跑，SaaS 核心关键业务指标必备",cta:"查看详情与代码",href:"/docs/number-ticker"},{icon:Y(()=>[w(C(El),{class:"h-5 w-5 text-emerald-500"})]),background:Y(()=>[i("div",Qm,[i("div",eb,[w(Vr,{value:99.99,"decimal-places":2}),d[22]||(d[22]=Ae("% ",-1))]),d[23]||(d[23]=i("p",{class:"mt-2 text-xs font-mono text-zinc-500"},"SLA 生产高可用性指标",-1))])]),_:1}),w(it,{name:"Animated Beam",description:"Magic UI 标志性连线动效，在多个 DOM 节点间实时计算贝塞尔曲线，驱动 SVG 能量光球脉冲流动",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/animated-beam"},{icon:Y(()=>[w(C(vn),{class:"h-5 w-5 text-indigo-500"})]),background:Y(()=>[i("div",{ref_key:"homeBeamContainer",ref:t,class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 flex items-center justify-between px-8"},[i("div",{ref_key:"homeBeamUser",ref:n,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-blue-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-blue-400"},[w(C(Gl),{class:"h-5 w-5"})],512),i("div",{ref_key:"homeBeamAi",ref:r,class:"z-10 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/40"},[w(C(Me),{class:"h-6 w-6"})],512),i("div",{ref_key:"homeBeamDb",ref:o,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400"},[w(C(as),{class:"h-5 w-5"})],512),w(Qr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.2},null,8,["container-ref","from-ref","to-ref"]),w(Qr,{"container-ref":t.value,"from-ref":r.value,"to-ref":o.value,duration:2.2,delay:.5},null,8,["container-ref","from-ref","to-ref"])],512)]),_:1}),w(it,{name:"Flickering Grid",description:"Canvas 2D 原生微闪烁网格，每个小方格独立呼吸微光，营造赛博黑客帝国与智能矩阵氛围",cta:"查看详情与代码",href:"/docs/flickering-grid"},{icon:Y(()=>[w(C(qt),{class:"h-5 w-5 text-sky-500"})]),background:Y(()=>[i("div",tb,[w(Cc,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),d[24]||(d[24]=i("div",{class:"relative z-10 flex h-full items-center justify-center"},[i("span",{class:"rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-500 dark:text-sky-400 font-bold"}," 60FPS 矩阵微闪 ")],-1))])]),_:1})]),_:1})]),i("section",nb,[i("div",rb,[i("div",ob,[w(C(Me),{class:"h-3.5 w-3.5"}),d[25]||(d[25]=i("span",null,"主题套件全套推进",-1))]),d[26]||(d[26]=i("h2",{class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"}," 5 大主题动效矩阵 · 场景全覆盖 ",-1)),d[27]||(d[27]=i("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 按业务应用场景全套推进，彻底告别零散拼凑。从 AI 智能体推理到 3D 纵深空间，全矩阵即拷即用。 ",-1))]),i("div",sb,[(b(!0),v(se,null,we(C(ls),m=>{var z;return b(),v("div",{key:m.id,class:"group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:hover:border-zinc-700"},[i("div",null,[i("div",ib,[i("div",ab,[(b(),fe(Je(s(m.id)),{class:"h-5 w-5"}))]),i("span",lb,T(l(m.id).length)+" 款组件 ",1)]),i("h3",cb,[i("span",null,T(m.name),1)]),i("span",db,T(m.englishName),1),i("p",ub,T(m.description),1),i("div",pb,[(b(!0),v(se,null,we(l(m.id),y=>(b(),fe(f,{key:y.id,to:`/docs/${y.id}`,class:"rounded-lg border border-zinc-200/80 bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-700 transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-500/50 dark:hover:bg-blue-950/60 dark:hover:text-blue-400"},{default:Y(()=>[Ae(T(y.name),1)]),_:2},1032,["to"]))),128))])]),i("div",fb,[w(f,{to:`/docs/${((z=l(m.id)[0])==null?void 0:z.id)||"border-beam"}`,class:"inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"},{default:Y(()=>[d[28]||(d[28]=i("span",null,"进入套件展厅",-1)),w(C(tr),{class:"h-3.5 w-3.5 transition-transform group-hover:translate-x-1"})]),_:1},8,["to"])])])}),128))])]),i("section",mb,[w(_c,{class:"min-h-[460px]"},{default:Y(()=>[d[30]||(d[30]=i("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-6xl font-black tracking-tight text-transparent"}," 为极致审美而生的动效原子 ",-1)),d[31]||(d[31]=i("p",{class:"mt-4 max-w-lg text-sm text-slate-400"}," 全面对标 Magic UI 与 Aceternity UI，支持单文件复制即用，零侵入无外部复杂构建负担。 ",-1)),i("div",bb,[w(f,{to:"/docs/lamp-effect"},{default:Y(()=>[w(ir,{"shimmer-color":"#38bdf8",class:"h-11 px-6 text-sm"},{default:Y(()=>[d[29]||(d[29]=i("span",null,"探索 Lamp Effect",-1)),w(C(tr),{class:"h-4 w-4"})]),_:1})]),_:1})])]),_:1})]),i("section",gb,[i("div",hb,[i("div",xb,[i("div",vb,[i("div",yb,[w(C(gr),{class:"h-5 w-5"})]),d[32]||(d[32]=i("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," Copy & Paste 模式 ",-1)),d[33]||(d[33]=i("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不是封闭的黑盒 npm 库。代码完全属于你，复制进你的项目 `src/components/ui` 即可按需自定义与扩展。 ",-1))]),i("div",wb,[i("div",kb,[w(C(vn),{class:"h-5 w-5"})]),d[34]||(d[34]=i("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 单文件自包含（Zero-Config） ",-1)),d[35]||(d[35]=i("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 动画关键帧与路径封装在组件内，完全无需在 tailwind.config.js 中配置复杂的 keyframes，避免配置遗漏。 ",-1))]),i("div",zb,[i("div",_b,[w(C(Me),{class:"h-5 w-5"})]),d[36]||(d[36]=i("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 真·明暗双模自适应 ",-1)),d[37]||(d[37]=i("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不仅在深黑背景下流光溢彩，更对纯白、浅灰背景做针对性调优，确保在任何业务场景下都有高级质感。 ",-1))])])])])])}}});var ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jo={exports:{}},ta;function Ib(){return ta||(ta=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=(function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function x(_){return _ instanceof c?new c(_.type,x(_.content),_.alias):Array.isArray(_)?_.map(x):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(x){return Object.prototype.toString.call(x).slice(8,-1)},objId:function(x){return x.__id||Object.defineProperty(x,"__id",{value:++s}),x.__id},clone:function x(_,A){A=A||{};var E,V;switch(a.util.type(_)){case"Object":if(V=a.util.objId(_),A[V])return A[V];E={},A[V]=E;for(var U in _)_.hasOwnProperty(U)&&(E[U]=x(_[U],A));return E;case"Array":return V=a.util.objId(_),A[V]?A[V]:(E=[],A[V]=E,_.forEach(function(D,j){E[j]=x(D,A)}),E);default:return _}},getLanguage:function(x){for(;x;){var _=o.exec(x.className);if(_)return _[1].toLowerCase();x=x.parentElement}return"none"},setLanguage:function(x,_){x.className=x.className.replace(RegExp(o,"gi"),""),x.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(E){var x=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(E.stack)||[])[1];if(x){var _=document.getElementsByTagName("script");for(var A in _)if(_[A].src==x)return _[A]}return null}},isActive:function(x,_,A){for(var E="no-"+_;x;){var V=x.classList;if(V.contains(_))return!0;if(V.contains(E))return!1;x=x.parentElement}return!!A}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(x,_){var A=a.util.clone(a.languages[x]);for(var E in _)A[E]=_[E];return A},insertBefore:function(x,_,A,E){E=E||a.languages;var V=E[x],U={};for(var D in V)if(V.hasOwnProperty(D)){if(D==_)for(var j in A)A.hasOwnProperty(j)&&(U[j]=A[j]);A.hasOwnProperty(D)||(U[D]=V[D])}var ne=E[x];return E[x]=U,a.languages.DFS(a.languages,function(de,W){W===ne&&de!=x&&(this[de]=U)}),U},DFS:function x(_,A,E,V){V=V||{};var U=a.util.objId;for(var D in _)if(_.hasOwnProperty(D)){A.call(_,D,_[D],E||D);var j=_[D],ne=a.util.type(j);ne==="Object"&&!V[U(j)]?(V[U(j)]=!0,x(j,A,null,V)):ne==="Array"&&!V[U(j)]&&(V[U(j)]=!0,x(j,A,D,V))}}},plugins:{},highlightAll:function(x,_){a.highlightAllUnder(document,x,_)},highlightAllUnder:function(x,_,A){var E={callback:A,container:x,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",E),E.elements=Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)),a.hooks.run("before-all-elements-highlight",E);for(var V=0,U;U=E.elements[V++];)a.highlightElement(U,_===!0,E.callback)},highlightElement:function(x,_,A){var E=a.util.getLanguage(x),V=a.languages[E];a.util.setLanguage(x,E);var U=x.parentElement;U&&U.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(U,E);var D=x.textContent,j={element:x,language:E,grammar:V,code:D};function ne(W){j.highlightedCode=W,a.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,a.hooks.run("after-highlight",j),a.hooks.run("complete",j),A&&A.call(j.element)}if(a.hooks.run("before-sanity-check",j),U=j.element.parentElement,U&&U.nodeName.toLowerCase()==="pre"&&!U.hasAttribute("tabindex")&&U.setAttribute("tabindex","0"),!j.code){a.hooks.run("complete",j),A&&A.call(j.element);return}if(a.hooks.run("before-highlight",j),!j.grammar){ne(a.util.encode(j.code));return}if(_&&r.Worker){var de=new Worker(a.filename);de.onmessage=function(W){ne(W.data)},de.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))}else ne(a.highlight(j.code,j.grammar,j.language))},highlight:function(x,_,A){var E={code:x,grammar:_,language:A};if(a.hooks.run("before-tokenize",E),!E.grammar)throw new Error('The language "'+E.language+'" has no grammar.');return E.tokens=a.tokenize(E.code,E.grammar),a.hooks.run("after-tokenize",E),c.stringify(a.util.encode(E.tokens),E.language)},tokenize:function(x,_){var A=_.rest;if(A){for(var E in A)_[E]=A[E];delete _.rest}var V=new d;return f(V,V.head,x),u(x,V,_,V.head,0),z(V)},hooks:{all:{},add:function(x,_){var A=a.hooks.all;A[x]=A[x]||[],A[x].push(_)},run:function(x,_){var A=a.hooks.all[x];if(!(!A||!A.length))for(var E=0,V;V=A[E++];)V(_)}},Token:c};r.Prism=a;function c(x,_,A,E){this.type=x,this.content=_,this.alias=A,this.length=(E||"").length|0}c.stringify=function x(_,A){if(typeof _=="string")return _;if(Array.isArray(_)){var E="";return _.forEach(function(ne){E+=x(ne,A)}),E}var V={type:_.type,content:x(_.content,A),tag:"span",classes:["token",_.type],attributes:{},language:A},U=_.alias;U&&(Array.isArray(U)?Array.prototype.push.apply(V.classes,U):V.classes.push(U)),a.hooks.run("wrap",V);var D="";for(var j in V.attributes)D+=" "+j+'="'+(V.attributes[j]||"").replace(/"/g,"&quot;")+'"';return"<"+V.tag+' class="'+V.classes.join(" ")+'"'+D+">"+V.content+"</"+V.tag+">"};function p(x,_,A,E){x.lastIndex=_;var V=x.exec(A);if(V&&E&&V[1]){var U=V[1].length;V.index+=U,V[0]=V[0].slice(U)}return V}function u(x,_,A,E,V,U){for(var D in A)if(!(!A.hasOwnProperty(D)||!A[D])){var j=A[D];j=Array.isArray(j)?j:[j];for(var ne=0;ne<j.length;++ne){if(U&&U.cause==D+","+ne)return;var de=j[ne],W=de.inside,he=!!de.lookbehind,Re=!!de.greedy,Oe=de.alias;if(Re&&!de.pattern.global){var ve=de.pattern.toString().match(/[imsuy]*$/)[0];de.pattern=RegExp(de.pattern.source,ve+"g")}for(var be=de.pattern||de,le=E.next,Te=V;le!==_.tail&&!(U&&Te>=U.reach);Te+=le.value.length,le=le.next){var Q=le.value;if(_.length>x.length)return;if(!(Q instanceof c)){var Be=1,ze;if(Re){if(ze=p(be,Te,x,he),!ze||ze.index>=x.length)break;var ke=ze.index,ot=ze.index+ze[0].length,Ve=Te;for(Ve+=le.value.length;ke>=Ve;)le=le.next,Ve+=le.value.length;if(Ve-=le.value.length,Te=Ve,le.value instanceof c)continue;for(var _e=le;_e!==_.tail&&(Ve<ot||typeof _e.value=="string");_e=_e.next)Be++,Ve+=_e.value.length;Be--,Q=x.slice(Te,Ve),ze.index-=Te}else if(ze=p(be,0,Q,he),!ze)continue;var ke=ze.index,L=ze[0],J=Q.slice(0,ke),G=Q.slice(ke+L.length),oe=Te+Q.length;U&&oe>U.reach&&(U.reach=oe);var g=le.prev;J&&(g=f(_,g,J),Te+=J.length),m(_,g,Be);var k=new c(D,W?a.tokenize(L,W):L,Oe,L);if(le=f(_,g,k),G&&f(_,le,G),Be>1){var $={cause:D+","+ne,reach:oe};u(x,_,A,le.prev,Te,$),U&&$.reach>U.reach&&(U.reach=$.reach)}}}}}}function d(){var x={value:null,prev:null,next:null},_={value:null,prev:x,next:null};x.next=_,this.head=x,this.tail=_,this.length=0}function f(x,_,A){var E=_.next,V={value:A,prev:_,next:E};return _.next=V,E.prev=V,x.length++,V}function m(x,_,A){for(var E=_.next,V=0;V<A&&E!==x.tail;V++)E=E.next;_.next=E,E.prev=_,x.length-=V}function z(x){for(var _=[],A=x.head.next;A!==x.tail;)_.push(A.value),A=A.next;return _}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(x){var _=JSON.parse(x.data),A=_.language,E=_.code,V=_.immediateClose;r.postMessage(a.highlight(E,a.languages[A],A)),V&&r.close()},!1)),a;var y=a.util.currentScript();y&&(a.filename=y.src,y.hasAttribute("data-manual")&&(a.manual=!0));function S(){a.manual||a.highlightAll()}if(!a.manual){var I=document.readyState;I==="loading"||I==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return a})(t);e.exports&&(e.exports=n),typeof ea<"u"&&(ea.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(o,s){var l={};l["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};a["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var c={};c[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(r){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",o=function(y,S){return"✖ Error "+y+" while fetching file: "+S},s="✖ Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",c="loading",p="loaded",u="failed",d="pre[data-src]:not(["+a+'="'+p+'"]):not(['+a+'="'+c+'"])';function f(y,S,I){var x=new XMLHttpRequest;x.open("GET",y,!0),x.onreadystatechange=function(){x.readyState==4&&(x.status<400&&x.responseText?S(x.responseText):x.status>=400?I(o(x.status,x.statusText)):I(s))},x.send(null)}function m(y){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(S){var I=Number(S[1]),x=S[2],_=S[3];return x?_?[I,Number(_)]:[I,void 0]:[I,I]}}n.hooks.add("before-highlightall",function(y){y.selector+=", "+d}),n.hooks.add("before-sanity-check",function(y){var S=y.element;if(S.matches(d)){y.code="",S.setAttribute(a,c);var I=S.appendChild(document.createElement("CODE"));I.textContent=r;var x=S.getAttribute("data-src"),_=y.language;if(_==="none"){var A=(/\.(\w+)$/.exec(x)||[,"none"])[1];_=l[A]||A}n.util.setLanguage(I,_),n.util.setLanguage(S,_);var E=n.plugins.autoloader;E&&E.loadLanguages(_),f(x,function(V){S.setAttribute(a,p);var U=m(S.getAttribute("data-range"));if(U){var D=V.split(/\r\n?|\n/g),j=U[0],ne=U[1]==null?D.length:U[1];j<0&&(j+=D.length),j=Math.max(0,Math.min(j-1,D.length)),ne<0&&(ne+=D.length),ne=Math.max(0,Math.min(ne,D.length)),V=D.slice(j,ne).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(j+1))}I.textContent=V,n.highlightElement(I)},function(V){S.setAttribute(a,u),I.textContent=V})}}),n.plugins.fileHighlight={highlight:function(S){for(var I=(S||document).querySelectorAll(d),x=0,_;_=I[x++];)n.highlightElement(_)}};var z=!1;n.fileHighlight=function(){z||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),z=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(jo)),jo.exports}var Ab=Ib();const Bo=Sb(Ab);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var na={},ra;function Mb(){return ra||(ra=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),na}Mb();Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var s={};s[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},Prism.languages.insertBefore("markup","cdata",s)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);const $b={class:"relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800 text-zinc-100 shadow-sm"},Rb={class:"flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5 text-xs text-zinc-400"},Tb={class:"font-mono"},Pb={class:"max-h-[480px] overflow-auto p-4 text-xs font-mono leading-relaxed"},Eb={class:"!m-0 !p-0 !bg-transparent"},Fb=["innerHTML"],oa=ie({__name:"CodeBlock",props:{code:{},language:{default:"html"},filename:{}},setup(e){const t=e,n=F(!1),r=ce(()=>{const s=Bo.languages[t.language]||Bo.languages.markup;return Bo.highlight(t.code.trim(),s,t.language)});async function o(){try{await navigator.clipboard.writeText(t.code.trim()),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(s){console.error("Failed to copy",s)}}return(s,l)=>(b(),v("div",$b,[i("div",Rb,[i("span",Tb,T(t.filename||t.language.toUpperCase()),1),i("button",{type:"button",class:"inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",onClick:o},[n.value?(b(),fe(C(Kt),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(b(),fe(C(gr),{key:1,class:"h-3.5 w-3.5"})),i("span",null,T(n.value?"已复制！":"复制代码"),1)])]),i("div",Pb,[i("pre",Eb,[i("code",{innerHTML:r.value},null,8,Fb)])])]))}}),Lb={class:"space-y-4"},Ob={class:"space-y-1"},Vb={class:"text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},Db={class:"text-sm text-zinc-500 dark:text-zinc-400"},jb={class:"overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-sm transition-colors"},Bb={class:"flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 bg-zinc-50/80 px-4 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/60"},Nb={class:"flex items-center gap-1 rounded-lg bg-zinc-200/60 p-1 dark:bg-zinc-800/60 text-xs font-medium"},Hb={key:0,class:"flex items-center gap-2 text-xs"},Ub={class:"flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-0.5"},Gb={class:"relative"},qb={class:"p-4"},Wb={class:"p-4"},Xb={key:0,class:"mt-8 space-y-3"},Kb={class:"overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800"},Yb={class:"w-full text-left text-xs"},Zb={class:"divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono"},Jb={class:"px-4 py-2.5 font-bold text-blue-600 dark:text-blue-400"},Qb={class:"px-4 py-2.5 text-pink-600 dark:text-pink-400"},eg={class:"px-4 py-2.5 text-zinc-500"},tg={class:"px-4 py-2.5 font-sans text-zinc-600 dark:text-zinc-300"},ng=ie({__name:"ComponentPreview",props:{title:{},description:{},componentCode:{},usageCode:{},componentFilename:{},propsList:{}},setup(e){const t=e,n=F("preview"),r=F("default"),o=F(0),s=F(!0);let l=null;Xe(()=>{s.value=document.documentElement.classList.contains("dark"),l=new MutationObserver(()=>{s.value=document.documentElement.classList.contains("dark")}),l.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}),et(()=>{l==null||l.disconnect()});const a=ce(()=>r.value==="dark"?!0:r.value==="light"?!1:s.value);function c(){o.value++}return(p,u)=>(b(),v("div",Lb,[i("div",Ob,[i("h2",Vb,T(t.title),1),i("p",Db,T(t.description),1)]),i("div",jb,[i("div",Bb,[i("div",Nb,[i("button",{type:"button",class:M(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="preview"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[0]||(u[0]=d=>n.value="preview")},[w(C(Dl),{class:"h-3.5 w-3.5"}),u[6]||(u[6]=i("span",null,"实时效果",-1))],2),i("button",{type:"button",class:M(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="component"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[1]||(u[1]=d=>n.value="component")},[w(C(rr),{class:"h-3.5 w-3.5"}),i("span",null,"组件源码 ("+T(t.componentFilename)+")",1)],2),i("button",{type:"button",class:M(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="usage"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[2]||(u[2]=d=>n.value="usage")},[w(C(rr),{class:"h-3.5 w-3.5"}),u[7]||(u[7]=i("span",null,"业务调用 (Usage.vue)",-1))],2)]),n.value==="preview"?(b(),v("div",Hb,[u[8]||(u[8]=i("span",{class:"text-zinc-400"},"视窗底色：",-1)),i("div",Ub,[i("button",{type:"button",class:M(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="default"?"bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[3]||(u[3]=d=>r.value="default")}," 自适应 ",2),i("button",{type:"button",class:M(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="light"?"bg-white text-zinc-900 shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[4]||(u[4]=d=>r.value="light")}," 亮白 ",2),i("button",{type:"button",class:M(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="dark"?"bg-black text-white shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[5]||(u[5]=d=>r.value="dark")}," 暗黑 ",2)]),i("button",{type:"button",class:"inline-flex items-center gap-1 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",title:"重新触发动效",onClick:c},[w(C(Bl),{class:"h-3.5 w-3.5"})])])):re("",!0)]),i("div",Gb,[Mn(i("div",{class:M(["relative flex min-h-[360px] w-full items-center justify-center overflow-hidden p-8 transition-colors duration-200",a.value?"dark bg-black text-zinc-100":"bg-zinc-100/80 text-zinc-900"])},[(b(),v("div",{key:o.value,class:"w-full flex items-center justify-center"},[We(p.$slots,"default",{isDark:a.value})]))],2),[[$o,n.value==="preview"]]),Mn(i("div",qb,[w(oa,{code:t.componentCode,filename:t.componentFilename,language:"html"},null,8,["code","filename"])],512),[[$o,n.value==="component"]]),Mn(i("div",Wb,[w(oa,{code:t.usageCode,filename:"UsageExample.vue",language:"html"},null,8,["code"])],512),[[$o,n.value==="usage"]])])]),t.propsList&&t.propsList.length>0?(b(),v("div",Xb,[u[10]||(u[10]=i("h3",{class:"text-base font-semibold text-zinc-900 dark:text-zinc-100"}," Props 属性参考 ",-1)),i("div",Kb,[i("table",Yb,[u[9]||(u[9]=i("thead",{class:"border-b border-zinc-200 bg-zinc-50/80 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"},[i("tr",null,[i("th",{class:"px-4 py-2.5"},"属性名"),i("th",{class:"px-4 py-2.5"},"类型"),i("th",{class:"px-4 py-2.5"},"默认值"),i("th",{class:"px-4 py-2.5"},"说明")])],-1)),i("tbody",Zb,[(b(!0),v(se,null,we(t.propsList,d=>(b(),v("tr",{key:d.name,class:"text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40"},[i("td",Jb,T(d.name),1),i("td",Qb,T(d.type),1),i("td",eg,T(d.default),1),i("td",tg,T(d.description),1)]))),128))])])])])):re("",!0)]))}}),rg=["onMouseenter","onClick"],og={key:0,class:"pointer-events-none absolute -top-9 z-50 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-800/95 dark:text-zinc-200"},sg=ie({__name:"Dock",props:{items:{},iconSize:{default:44},iconMagnification:{default:68},iconDistance:{default:120},direction:{default:"bottom"},class:{}},setup(e){const t=e,n=F(null),r=F(null),o=F(null);function s(d){r.value=d.clientX}function l(){r.value=null,o.value=null}function a(d){if(r.value===null||!d)return 1;const f=d.getBoundingClientRect(),m=f.left+f.width/2,z=Math.abs(r.value-m);if(z>t.iconDistance)return 1;const y=z/t.iconDistance,S=(t.iconMagnification-t.iconSize)/t.iconSize,I=.5*(1+Math.cos(y*Math.PI));return 1+S*I}const c=F([]);function p(d,f){d&&(c.value[f]=d)}function u(d){const f=c.value[d],m=a(f);return Math.round(t.iconSize*m)}return(d,f)=>(b(),v("div",{ref_key:"dockRef",ref:n,class:M(C(pe)("mx-auto flex h-16 items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/70 px-4 py-2 shadow-xl backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 transition-all duration-200 select-none",t.direction==="bottom"&&"items-end",t.direction==="top"&&"items-start",t.direction==="middle"&&"items-center",t.class)),onMousemove:s,onMouseleave:l},[t.items&&t.items.length>0?(b(!0),v(se,{key:0},we(t.items,(m,z)=>(b(),v("div",{key:m.id,ref_for:!0,ref:y=>p(y,z),class:"group relative flex items-center justify-center cursor-pointer transition-all duration-100 ease-out",style:me({width:`${u(z)}px`,height:`${u(z)}px`}),onMouseenter:y=>o.value=m.label||null,onClick:y=>m.onClick&&m.onClick()},[(b(),fe(Je(m.href?"a":"button"),{href:m.href,class:M(["flex h-full w-full items-center justify-center rounded-2xl border transition-colors shadow-sm","border-zinc-200/70 bg-white/90 text-zinc-700 hover:text-zinc-950","dark:border-zinc-700/60 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:text-white"])},{default:Y(()=>[(b(),fe(Je(m.icon),{class:"h-1/2 w-1/2 transition-transform duration-100"}))]),_:2},1032,["href"])),w(zt,{name:"dock-fade"},{default:Y(()=>[o.value===m.label&&m.label?(b(),v("div",og,T(m.label),1)):re("",!0)]),_:2},1024),f[0]||(f[0]=i("span",{class:"absolute -bottom-1.5 h-1 w-1 rounded-full bg-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-zinc-500"},null,-1))],44,rg))),128)):We(d.$slots,"default",{},void 0,!0,1)],34))}}),ig=je(sg,[["__scopeId","data-v-3c8b0d2e"]]),ag={key:0,class:"pointer-events-none absolute inset-0 h-full w-full select-none",xmlns:"http://www.w3.org/2000/svg"},lg=["r","stroke","stroke-width"],cg={class:"orbit-rotator pointer-events-auto h-full w-full"},dg={class:"orbit-item pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"},ug=ie({__name:"OrbitLogos",props:{radius:{default:120},duration:{default:20},delay:{default:0},reverse:{type:Boolean,default:!1},path:{type:Boolean,default:!0},pathColor:{},pathWidth:{default:1},tiltAngle:{default:0},class:{}},setup(e){const t=e,n=ce(()=>({"--radius":`${t.radius}px`,"--duration":`${t.duration}s`,"--delay":`-${t.delay}s`,"--direction":t.reverse?"reverse":"normal","--counter-direction":t.reverse?"normal":"reverse","--tilt":`${t.tiltAngle}deg`,width:`${t.radius*2}px`,height:`${t.radius*2}px`}));return(r,o)=>(b(),v("div",{style:me(n.value),class:M(C(pe)("pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full [transform-style:preserve-3d]",t.class))},[t.path?(b(),v("svg",ag,[i("circle",{class:"stroke-zinc-300/60 dark:stroke-zinc-800/80 stroke-dashed",cx:"50%",cy:"50%",r:t.radius,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-dasharray":"4 4"},null,8,lg)])):re("",!0),i("div",cg,[i("div",dg,[We(r.$slots,"default",{},void 0,!0)])])],6))}}),Rr=je(ug,[["__scopeId","data-v-583093f1"]]),pg=["src","alt"],fg={class:"pointer-events-none absolute bottom-4 right-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},mg=["src","alt"],bg={class:"pointer-events-none absolute bottom-4 left-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},gg={class:"absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-zinc-800 shadow-xl backdrop-blur-md transition-transform duration-100 hover:scale-110 active:scale-95 dark:border-zinc-700/80 dark:bg-zinc-900/90 dark:text-zinc-200"},hg=ie({__name:"ImageCompare",props:{beforeImage:{},afterImage:{},beforeLabel:{default:"Before"},afterLabel:{default:"After"},initialPosition:{default:50},class:{}},setup(e){const t=e,n=F(null),r=F(t.initialPosition),o=F(!1);function s(u){if(!n.value)return;const d=n.value.getBoundingClientRect(),f=u-d.left,m=Math.min(Math.max(f/d.width*100,0),100);r.value=Number(m.toFixed(2))}function l(u){o.value=!0,s(u.clientX)}function a(u){o.value&&s(u.clientX)}function c(){o.value=!1}function p(u){!o.value||u.touches.length===0||s(u.touches[0].clientX)}return Xe(()=>{window.addEventListener("mouseup",c),window.addEventListener("mousemove",a),window.addEventListener("touchend",c),window.addEventListener("touchmove",p)}),et(()=>{window.removeEventListener("mouseup",c),window.removeEventListener("mousemove",a),window.removeEventListener("touchend",c),window.removeEventListener("touchmove",p)}),(u,d)=>(b(),v("div",{ref_key:"containerRef",ref:n,class:M(C(pe)("relative select-none overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 shadow-xl cursor-ew-resize dark:border-zinc-800/80",t.class)),onMousedown:l,onTouchstart:d[0]||(d[0]=f=>o.value=!0)},[i("img",{src:t.afterImage,alt:t.afterLabel,class:"pointer-events-none h-full w-full object-cover"},null,8,pg),i("div",fg,T(t.afterLabel),1),i("div",{class:"pointer-events-none absolute inset-0 h-full w-full overflow-hidden",style:me({clipPath:`inset(0 ${100-r.value}% 0 0)`})},[i("img",{src:t.beforeImage,alt:t.beforeLabel,class:"h-full w-full object-cover"},null,8,mg),i("div",bg,T(t.beforeLabel),1)],4),i("div",{class:"pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]",style:me({left:`${r.value}%`})},[i("div",gg,[w(C(Ol),{class:"h-4 w-4"})])],4)],34))}}),xg={class:"group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/90 dark:bg-zinc-950/90"},vg={class:"flex items-center gap-2.5 min-w-0"},yg={class:"relative flex h-3 w-3 shrink-0 items-center justify-center"},wg={class:"flex flex-col min-w-0"},kg={class:"flex items-center gap-2"},zg={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate"},_g={class:"text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5"},Cg={class:"flex items-center gap-2 shrink-0 text-xs text-zinc-500"},Sg={key:0,class:"flex items-center gap-1 font-mono text-[11px] rounded-md bg-zinc-100 px-2 py-0.5 dark:bg-zinc-900 dark:text-zinc-300"},Ig={key:0,class:"border-t border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-2.5"},Ag={class:"mt-0.5 shrink-0"},Mg={key:3,class:"inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 text-[10px] text-zinc-400 dark:border-zinc-700"},$g={class:"flex-1 min-w-0"},Rg={class:"flex items-center justify-between"},Tg={key:0,class:"font-mono text-[10px] text-zinc-400 shrink-0 ml-2"},Pg={key:0,class:"text-[11px] text-zinc-400 font-mono mt-0.5 truncate"},Eg=ie({__name:"AgentStatus",props:{status:{default:"thinking"},agentName:{default:"Aura AI Agent"},currentTask:{default:"Thinking and orchestrating subagents..."},elapsed:{type:Boolean,default:!0},steps:{default:()=>[{id:1,name:"Understand user prompt requirements",status:"done",duration:"0.4s"},{id:2,name:"Search codebase for components & hooks",status:"done",duration:"1.2s"},{id:3,name:"Run Playwright headless visual verification",status:"running",detail:"Evaluating DOM computed styles..."},{id:4,name:"Commit and build production artifacts",status:"pending"}]},class:{}},setup(e){const t=e,n=F(!1),r=F(0);let o=null;Xe(()=>{t.elapsed&&(o=setInterval(()=>{r.value+=.1},100))}),et(()=>{o&&clearInterval(o)});const s=ce(()=>`${r.value.toFixed(1)}s`),l=ce(()=>{switch(t.status){case"thinking":return{icon:Me,label:"思考推演中",color:"text-sky-500 dark:text-sky-400",badgeBg:"bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",pulseBg:"bg-sky-500"};case"running":return{icon:Ri,label:"自主执行中",color:"text-blue-500 dark:text-blue-400 animate-spin",badgeBg:"bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",pulseBg:"bg-blue-500"};case"tool_call":return{icon:Ap,label:"调用工具中",color:"text-amber-500 dark:text-amber-400",badgeBg:"bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",pulseBg:"bg-amber-500"};case"success":return{icon:Mi,label:"任务已闭环",color:"text-emerald-500 dark:text-emerald-400",badgeBg:"bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",pulseBg:"bg-emerald-500"};case"error":return{icon:Ai,label:"出现异常",color:"text-rose-500 dark:text-rose-400",badgeBg:"bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",pulseBg:"bg-rose-500"};default:return{icon:Me,label:"待命中",color:"text-zinc-400",badgeBg:"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",pulseBg:"bg-zinc-400"}}});return(a,c)=>(b(),v("div",{class:M(C(pe)("w-full max-w-lg transition-all duration-300",t.class))},[i("div",xg,[i("div",{class:"flex items-center justify-between gap-3 px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60",onClick:c[0]||(c[0]=p=>n.value=!n.value)},[i("div",vg,[i("div",yg,[i("span",{class:M(["absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",l.value.pulseBg])},null,2),i("span",{class:M(["relative inline-flex h-2 w-2 rounded-full",l.value.pulseBg])},null,2)]),i("div",wg,[i("div",kg,[i("span",zg,T(t.agentName),1),i("span",{class:M(["rounded-full border px-2 py-0.2 text-[10px] font-semibold",l.value.badgeBg])},T(l.value.label),3)]),i("p",_g,T(t.currentTask),1)])]),i("div",Cg,[t.elapsed?(b(),v("div",Sg,[w(C(Vl),{class:"h-3 w-3 text-zinc-400"}),i("span",null,T(s.value),1)])):re("",!0),w(C(On),{class:M(["h-4 w-4 text-zinc-400 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])]),w(zt,{name:"agent-expand"},{default:Y(()=>[n.value&&t.steps&&t.steps.length>0?(b(),v("div",Ig,[c[1]||(c[1]=i("div",{class:"text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2"}," 执行轨迹步骤 (Execution Steps) ",-1)),(b(!0),v(se,null,we(t.steps,(p,u)=>(b(),v("div",{key:p.id,class:"flex items-start gap-2.5 text-xs"},[i("div",Ag,[p.status==="done"?(b(),fe(C(Mi),{key:0,class:"h-4 w-4 text-emerald-500"})):p.status==="running"?(b(),fe(C(Ri),{key:1,class:"h-4 w-4 text-sky-500 animate-spin"})):p.status==="error"?(b(),fe(C(Ai),{key:2,class:"h-4 w-4 text-rose-500"})):(b(),v("span",Mg,T(u+1),1))]),i("div",$g,[i("div",Rg,[i("span",{class:M(["font-medium truncate",p.status==="done"&&"text-zinc-700 dark:text-zinc-300",p.status==="running"&&"text-sky-600 dark:text-sky-400 font-semibold",p.status==="pending"&&"text-zinc-400 dark:text-zinc-500",p.status==="error"&&"text-rose-500 font-semibold"])},T(p.name),3),p.duration?(b(),v("span",Tg,T(p.duration),1)):re("",!0)]),p.detail?(b(),v("p",Pg,T(p.detail),1)):re("",!0)])]))),128))])):re("",!0)]),_:1})])],2))}}),Fg=je(Eg,[["__scopeId","data-v-d55be07e"]]),Lg={class:"flex h-10 w-full items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 select-none"},Og={class:"flex items-center gap-1.5 text-[11px] font-medium text-zinc-400"},Vg={class:"truncate max-w-[220px] sm:max-w-md"},Dg={key:0,class:"flex items-center gap-2"},jg={key:1,class:"w-12"},Bg={class:"text-blue-400 select-none font-bold"},Ng={class:"text-zinc-100 font-semibold flex-1 break-all"},Hg={key:0,class:"inline-block h-4 w-2 translate-y-0.5 bg-blue-500 animate-pulse ml-0.5"},Ug={key:1,class:"text-emerald-400 font-medium break-all"},Gg={key:2,class:"text-rose-400 font-medium break-all"},qg={key:3,class:"text-amber-400 font-medium break-all"},Wg={key:4,class:"text-sky-400 font-medium break-all"},Xg={key:5,class:"text-zinc-400 break-all"},Kg={key:0,class:"flex items-center gap-2 pt-1"},Yg=ie({__name:"TypewriterTerminal",props:{title:{default:"zsh - aura@developer:~ (80x24)"},lines:{default:()=>[{type:"input",text:"pnpm dlx aura-ui@latest add agent-status dock"},{type:"output",text:"⠋ Resolving packages & peer dependencies..."},{type:"output",text:"✔ Cloned src/components/ui/AgentStatus.vue"},{type:"output",text:"✔ Cloned src/components/ui/Dock.vue"},{type:"success",text:"✨ Successfully installed 2 motion primitives in 260ms."},{type:"input",text:"aura test --visual-regression"},{type:"info",text:"ℹ Running Playwright headless test in Chromium..."},{type:"success",text:"✔ All 19 components passed 60fps frame rate check!"}]},typingSpeed:{default:35},pauseEnd:{default:3500},loop:{type:Boolean,default:!0},controls:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=F([]),r=F(0),o=F(0),s=F(!1),l=F(!1),a=F(!1),c=F(null);let p=null;function u(){c.value&&(c.value.scrollTop=c.value.scrollHeight)}function d(){p&&clearTimeout(p),n.value=[],r.value=0,o.value=0,s.value=!1,l.value=!1,f()}function f(){if(!t.lines||t.lines.length===0)return;if(r.value>=t.lines.length){s.value=!1,l.value=!0,t.loop&&(p=setTimeout(()=>{d()},t.pauseEnd));return}const z=t.lines[r.value];if(z.type==="input")if(s.value=!0,o.value===0&&n.value.push({type:"input",text:"",prefix:z.prefix||"$ "}),o.value<z.text.length){const y=n.value[n.value.length-1];y.text+=z.text[o.value],o.value++,u();const S=Math.floor(Math.random()*25)-10,I=Math.max(15,t.typingSpeed+S);p=setTimeout(f,I)}else o.value=0,r.value++,s.value=!1,u(),p=setTimeout(f,400);else{s.value=!1,n.value.push({type:z.type,text:z.text,prefix:z.prefix}),r.value++,u();const y=z.delay??220;p=setTimeout(f,y)}}function m(){const z=t.lines.map(y=>`${y.prefix||(y.type==="input"?"$ ":"")}${y.text}`).join(`
`);navigator.clipboard.writeText(z),a.value=!0,setTimeout(()=>{a.value=!1},2e3)}return Xe(()=>{d()}),et(()=>{p&&clearTimeout(p)}),gt(()=>t.lines,()=>{d()},{deep:!0}),(z,y)=>(b(),v("div",{class:M(C(pe)("relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 font-mono text-xs sm:text-sm text-zinc-300 shadow-2xl backdrop-blur-md dark:border-zinc-800/80",t.class))},[i("div",Lg,[y[0]||(y[0]=i("div",{class:"flex items-center gap-2"},[i("span",{class:"h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm transition-transform hover:scale-110"}),i("span",{class:"h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm transition-transform hover:scale-110"}),i("span",{class:"h-3 w-3 rounded-full bg-[#27c93f] shadow-sm transition-transform hover:scale-110"})],-1)),i("div",Og,[w(C(Kn),{class:"h-3.5 w-3.5 text-zinc-500"}),i("span",Vg,T(t.title),1)]),t.controls?(b(),v("div",Dg,[i("button",{onClick:d,title:"重新播放",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[w(C(yp),{class:"h-3.5 w-3.5"})]),i("button",{onClick:m,title:"复制所有命令",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[a.value?(b(),fe(C(Kt),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(b(),fe(C(gr),{key:1,class:"h-3.5 w-3.5"}))])])):(b(),v("div",jg))]),i("div",{ref_key:"terminalBodyRef",ref:c,class:"max-h-80 min-h-[220px] overflow-y-auto p-4 sm:p-5 space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-800"},[(b(!0),v(se,null,we(n.value,(S,I)=>(b(),v("div",{key:I,class:"flex items-start gap-2 leading-relaxed"},[S.type==="input"?(b(),v(se,{key:0},[i("span",Bg,T(S.prefix||"$ "),1),i("span",Ng,[Ae(T(S.text)+" ",1),s.value&&I===n.value.length-1?(b(),v("span",Hg)):re("",!0)])],64)):S.type==="success"?(b(),v("span",Ug,T(S.text),1)):S.type==="error"?(b(),v("span",Gg,T(S.text),1)):S.type==="warning"?(b(),v("span",qg,T(S.text),1)):S.type==="info"?(b(),v("span",Wg,T(S.text),1)):(b(),v("span",Xg,T(S.text),1))]))),128)),l.value?(b(),v("div",Kg,[...y[1]||(y[1]=[i("span",{class:"text-blue-400 font-bold select-none"},"$ ",-1),i("span",{class:"inline-block h-4 w-2 bg-zinc-500 animate-pulse"},null,-1)])])):re("",!0)],512)],2))}}),Zg={class:"p-3 sm:p-4 pb-2"},Jg=["placeholder"],Qg={class:"flex items-center justify-between border-t border-zinc-100 px-3 py-2.5 dark:border-zinc-900"},eh={class:"flex items-center gap-1.5 sm:gap-2"},th={class:"relative"},nh={key:0,class:"absolute bottom-full left-0 mb-2 w-52 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-2xl backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 select-none"},rh=["onClick"],oh={key:0,class:"rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.2 text-[9px] text-zinc-500"},sh={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"上传图像或文件"},ih={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"语音输入"},ah={class:"flex items-center gap-2"},lh=["disabled"],ch=ie({__name:"PromptInput",props:{modelValue:{default:""},placeholder:{default:"向 Aura AI 提问、生成 UI 动效，或输入 / 触发指令..."},loading:{type:Boolean,default:!1},selectedModel:{default:"deepseek-r1"},models:{default:()=>[{id:"deepseek-r1",name:"DeepSeek R1",badge:"Reasoning"},{id:"claude-3-7-sonnet",name:"Claude 3.7 Sonnet",badge:"Hybrid"},{id:"gpt-4o",name:"GPT-4o Omni",badge:"Multimodal"}]},webSearch:{type:Boolean,default:!1},maxRows:{default:6},class:{}},emits:["update:modelValue","submit","stop","update:selectedModel","toggleWebSearch"],setup(e,{emit:t}){const n=e,r=t,o=F(null),s=F(!1),l=F(!1),a=F(n.webSearch),c=ce({get:()=>n.modelValue,set:S=>r("update:modelValue",S)}),p=ce(()=>n.models.find(S=>S.id===n.selectedModel)||n.models[0]);function u(S){const I=S.target;c.value=I.value,d()}function d(){if(!o.value)return;o.value.style.height="auto";const S=Math.min(o.value.scrollHeight,24*n.maxRows);o.value.style.height=`${S}px`}function f(S){S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),m())}function m(){if(n.loading){r("stop");return}c.value.trim()&&r("submit",c.value)}function z(){a.value=!a.value,r("toggleWebSearch",a.value)}function y(S){r("update:selectedModel",S),l.value=!1}return(S,I)=>(b(),v("div",{class:M(C(pe)("group relative w-full rounded-2xl border transition-all duration-300 shadow-xl backdrop-blur-xl",s.value?"border-blue-500/80 shadow-[0_0_25px_rgba(59,130,246,0.18)] dark:border-blue-400/80 dark:shadow-[0_0_35px_rgba(56,189,248,0.22)]":"border-zinc-200/90 hover:border-zinc-300 dark:border-zinc-800/90 dark:hover:border-zinc-700","bg-white/85 dark:bg-zinc-950/85",n.class))},[i("div",{class:M(["pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-opacity duration-300",s.value?"opacity-100":"opacity-0"])},null,2),i("div",Zg,[Mn(i("textarea",{ref_key:"textareaRef",ref:o,"onUpdate:modelValue":I[0]||(I[0]=x=>c.value=x),placeholder:n.placeholder,rows:"1",onFocus:I[1]||(I[1]=x=>s.value=!0),onBlur:I[2]||(I[2]=x=>s.value=!1),onInput:u,onKeydown:f,class:"w-full resize-none border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 bg-transparent text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-500 leading-relaxed font-sans shadow-none",style:{outline:"none","box-shadow":"none"}},null,40,Jg),[[Ps,c.value]])]),i("div",Qg,[i("div",eh,[i("div",th,[i("button",{type:"button",onClick:I[3]||(I[3]=x=>l.value=!l.value),class:"flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"},[w(C(Me),{class:"h-3.5 w-3.5 text-blue-500"}),i("span",null,T(p.value.name),1),w(C(On),{class:"h-3 w-3 text-zinc-400"})]),w(zt,{name:"model-pop"},{default:Y(()=>[l.value?(b(),v("div",nh,[I[4]||(I[4]=i("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," 切换推理基座 ",-1)),(b(!0),v(se,null,we(n.models,x=>(b(),v("button",{key:x.id,type:"button",onClick:_=>y(x.id),class:M(["flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",x.id===n.selectedModel?"bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400":"text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"])},[i("span",null,T(x.name),1),x.badge?(b(),v("span",oh,T(x.badge),1)):re("",!0)],10,rh))),128))])):re("",!0)]),_:1})]),i("button",{type:"button",onClick:z,class:M(["flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium transition-colors border",a.value?"border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400":"border-transparent text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"]),title:"联网实时搜索"},[w(C(or),{class:"h-3.5 w-3.5"}),I[5]||(I[5]=i("span",{class:"hidden sm:inline"},"深度搜索",-1))],2),i("button",sh,[w(C(gp),{class:"h-3.5 w-3.5"})]),i("button",ih,[w(C(Zr),{class:"h-3.5 w-3.5"})])]),i("div",ah,[I[6]||(I[6]=i("span",{class:"hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-zinc-400"},[i("span",null,"Enter ↵ 发送")],-1)),i("button",{type:"button",onClick:m,disabled:!n.loading&&!c.value.trim(),class:M(["flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 shadow-md",n.loading?"bg-rose-500 text-white hover:bg-rose-600":c.value.trim()?"bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 active:scale-95":"bg-zinc-100 text-zinc-400 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"])},[n.loading?(b(),fe(C(Cp),{key:0,class:"h-3.5 w-3.5 fill-current"})):(b(),fe(C(Fl),{key:1,class:"h-4 w-4"}))],10,lh)])])],2))}}),dh=je(ch,[["__scopeId","data-v-22761e01"]]),uh={class:"flex items-center gap-2.5 text-xs"},ph={class:"relative flex h-4 w-4 items-center justify-center"},fh={key:0,class:"absolute -inset-1 rounded-full bg-blue-500/20 animate-ping"},mh={class:"flex items-center gap-2"},bh={class:"font-bold text-zinc-900 dark:text-zinc-100"},gh={class:"inline-flex items-center gap-1 rounded-md bg-zinc-200/60 px-2 py-0.5 font-mono text-[11px] text-zinc-500 dark:bg-zinc-800/80 dark:text-zinc-400"},hh={key:0,class:"border-t border-zinc-200/70 px-4 py-3.5 dark:border-zinc-800/70"},xh={class:"border-l-2 border-blue-500/70 pl-3.5 font-mono text-xs leading-relaxed text-zinc-600 dark:border-blue-400/70 dark:text-zinc-400 whitespace-pre-wrap select-text"},vh=ie({__name:"ThoughtAccordion",props:{duration:{default:"思考用时 12.6 秒"},status:{default:"complete"},defaultOpen:{type:Boolean,default:!0},thoughtText:{default:`> 1. 解析用户需求：为 Vue 3 全系打造顶级 AI 原生交互动效。
> 2. 几何与物理模型推演：使用 CSS 3D 矩阵解构空间深度，保持 60fps 满帧性能。
> 3. 边界与异常收敛：引入状态机阻尼回弹，确保单文件零配置即刻分发。
> 4. 自愈与验证：通过 Playwright 双模态 Chromium 验证无色彩渗漏，交付闭环。`},class:{}},setup(e){const t=e,n=F(t.defaultOpen),r=F(!1);function o(){navigator.clipboard.writeText(t.thoughtText),r.value=!0,setTimeout(()=>{r.value=!1},2e3)}return(s,l)=>(b(),v("div",{class:M(C(pe)("w-full overflow-hidden rounded-2xl border transition-all duration-300",n.value?"border-zinc-200/90 bg-zinc-50/70 shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/40":"border-zinc-200/60 bg-white/60 hover:border-zinc-300 dark:border-zinc-800/60 dark:bg-zinc-950/60",t.class))},[i("div",{class:"flex items-center justify-between px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40",onClick:l[2]||(l[2]=a=>n.value=!n.value)},[i("div",uh,[i("div",ph,[w(C(Me),{class:M(["h-4 w-4 text-blue-500 transition-transform duration-300",t.status==="thinking"&&"animate-spin"])},null,8,["class"]),t.status==="thinking"?(b(),v("span",fh)):re("",!0)]),i("div",mh,[i("span",bh,T(t.status==="thinking"?"正在深度思考推演...":"已深度思考"),1),i("span",gh,[w(C(Vl),{class:"h-3 w-3"}),i("span",null,T(t.duration),1)])])]),i("div",{class:"flex items-center gap-1.5",onClick:l[1]||(l[1]=Xt(()=>{},["stop"]))},[i("button",{type:"button",onClick:o,title:"复制思考过程",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[r.value?(b(),fe(C(Kt),{key:0,class:"h-3.5 w-3.5 text-emerald-500"})):(b(),fe(C(gr),{key:1,class:"h-3.5 w-3.5"}))]),i("button",{type:"button",onClick:l[0]||(l[0]=a=>n.value=!n.value),class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[w(C(On),{class:M(["h-4 w-4 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])])]),w(zt,{name:"thought-slide"},{default:Y(()=>[n.value?(b(),v("div",hh,[i("div",xh,[We(s.$slots,"default",{},()=>[Ae(T(t.thoughtText),1)],!0)])])):re("",!0)]),_:3})],2))}}),yh=je(vh,[["__scopeId","data-v-00c62984"]]),wh=["onClick","onMouseenter"],kh=ie({__name:"FluidTabs",props:{modelValue:{default:""},tabs:{default:()=>[]},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=F(null),s=F([]),l=F({left:0,width:0,opacity:0}),a=F({left:0,width:0,opacity:0});function c(m,z){m&&(s.value[z]=m)}function p(){An(()=>{if(!o.value)return;const m=n.tabs.findIndex(S=>S.id===n.modelValue);if(m===-1||!s.value[m]){l.value.opacity=0;return}const z=o.value.getBoundingClientRect(),y=s.value[m].getBoundingClientRect();l.value={left:y.left-z.left,width:y.width,opacity:1}})}function u(m){if(!o.value||!s.value[m])return;const z=o.value.getBoundingClientRect(),y=s.value[m].getBoundingClientRect();a.value={left:y.left-z.left,width:y.width,opacity:1}}function d(){a.value.opacity=0}function f(m){r("update:modelValue",m),r("change",m)}return gt(()=>n.modelValue,()=>{p()}),gt(()=>n.tabs,()=>{p()},{deep:!0}),Xe(()=>{!n.modelValue&&n.tabs.length>0&&r("update:modelValue",n.tabs[0].id),p(),window.addEventListener("resize",p)}),(m,z)=>(b(),v("div",{ref_key:"containerRef",ref:o,class:M(C(pe)("relative inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-zinc-100/80 p-1.5 shadow-inner backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80 select-none",n.class)),onMouseleave:d},[i("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-zinc-200/60 transition-all duration-200 ease-out dark:bg-zinc-800/60",style:me({left:`${a.value.left}px`,width:`${a.value.width}px`,opacity:a.value.opacity})},null,4),i("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-800 dark:shadow-black/40",style:me({left:`${l.value.left}px`,width:`${l.value.width}px`,opacity:l.value.opacity})},null,4),(b(!0),v(se,null,we(n.tabs,(y,S)=>(b(),v("button",{key:y.id,ref_for:!0,ref:I=>c(I,S),type:"button",onClick:I=>f(y.id),onMouseenter:I=>u(S),class:M(["relative z-10 flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-200",n.modelValue===y.id?"text-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"])},[y.icon?(b(),fe(Je(y.icon),{key:0,class:M(["h-4 w-4 transition-transform duration-200",n.modelValue===y.id?"scale-110 text-blue-600 dark:text-blue-400":"text-zinc-400"])},null,8,["class"])):re("",!0),i("span",null,T(y.label),1),y.badge?(b(),v("span",{key:1,class:M(["rounded-full px-1.5 py-0.2 text-[10px] font-bold font-mono transition-colors",n.modelValue===y.id?"bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300":"bg-zinc-200/80 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"])},T(y.badge),3)):re("",!0)],42,wh))),128))],34))}}),zh={class:"relative z-10 flex items-center gap-2"},_h={key:2},Ch={key:3},Sh={key:4},Ih={key:5,class:"ml-1 inline-block font-mono text-[11px] font-bold"},No=ie({__name:"HoldToConfirm",props:{duration:{default:1200},label:{default:"长按以确认执行"},holdingLabel:{default:"保持长按不放..."},confirmedLabel:{default:"已成功确认！"},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,o=F(0),s=F(!1),l=F(!1);let a=null,c=0;const p=ce(()=>{switch(n.variant){case"danger":return{bg:"bg-rose-500/10 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-500/30",fill:"bg-rose-600 dark:bg-rose-500",ring:"text-rose-500",icon:Hl};case"warning":return{bg:"bg-amber-500/10 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-500/30",fill:"bg-amber-600 dark:bg-amber-500",ring:"text-amber-500",icon:Ul};default:return{bg:"bg-blue-500/10 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border-blue-500/30",fill:"bg-blue-600 dark:bg-blue-500",ring:"text-blue-500",icon:Kt}}});function u(){if(l.value)return;s.value=!0,c=performance.now();function f(){const m=performance.now()-c,z=Math.min(m/n.duration*100,100);o.value=z,z<100?a=requestAnimationFrame(f):(s.value=!1,l.value=!0,r("confirm"),setTimeout(()=>{l.value=!1,o.value=0},2500))}a=requestAnimationFrame(f)}function d(){l.value||(s.value=!1,a!==null&&(cancelAnimationFrame(a),a=null),o.value=0,r("cancel"))}return et(()=>{a!==null&&cancelAnimationFrame(a)}),(f,m)=>(b(),v("button",{type:"button",class:M(C(pe)("group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-xl border px-5 text-xs sm:text-sm font-semibold select-none transition-all duration-200 active:scale-95 cursor-pointer",p.value.bg,l.value&&"!bg-emerald-600 !border-emerald-600 text-white",n.class)),onMousedown:u,onMouseup:d,onMouseleave:d,onTouchstart:Xt(u,["prevent"]),onTouchend:Xt(d,["prevent"])},[l.value?re("",!0):(b(),v("div",{key:0,class:M(["pointer-events-none absolute inset-y-0 left-0 opacity-25 transition-[width] ease-linear",p.value.fill]),style:me({width:`${o.value}%`})},null,6)),i("span",zh,[l.value?(b(),fe(C(Kt),{key:0,class:"h-4 w-4 animate-bounce"})):(b(),fe(Je(p.value.icon),{key:1,class:M(["h-4 w-4 transition-transform duration-200",s.value&&"scale-125 animate-pulse"])},null,8,["class"])),l.value?(b(),v("span",_h,T(n.confirmedLabel),1)):s.value?(b(),v("span",Ch,T(n.holdingLabel),1)):(b(),v("span",Sh,T(n.label),1)),s.value&&!l.value?(b(),v("span",Ih,T(Math.round(o.value))+"% ",1)):re("",!0)])],34))}}),Ah={key:0,class:"flex h-10 items-center gap-1.5 px-4 text-xs sm:text-sm font-semibold text-white"},Ho=ie({__name:"ConfirmMorph",props:{label:{default:"删除此资源"},confirmText:{default:"确定删除"},cancelText:{default:"取消"},icon:{},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,o=F(!1),s=F(!1);function l(){s.value||(o.value=!0)}function a(){s.value=!0,r("confirm"),setTimeout(()=>{s.value=!1,o.value=!1},2200)}function c(){o.value=!1,r("cancel")}return(p,u)=>(b(),v("div",{class:M(C(pe)("inline-flex items-center overflow-hidden rounded-xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none",n.variant==="danger"&&"border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20",n.variant==="warning"&&"border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20",n.variant==="primary"&&"border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20",s.value&&"!border-emerald-600 !bg-emerald-600 text-white",n.class))},[s.value?(b(),v("div",Ah,[w(C(Kt),{class:"h-4 w-4 animate-bounce"}),u[0]||(u[0]=i("span",null,"操作已完成",-1))])):o.value?(b(),v(se,{key:1},[i("button",{type:"button",onClick:a,class:M(["flex h-10 items-center gap-1.5 px-3.5 text-xs font-semibold text-white transition-colors cursor-pointer",n.variant==="danger"&&"bg-rose-600 hover:bg-rose-700",n.variant==="warning"&&"bg-amber-600 hover:bg-amber-700",n.variant==="primary"&&"bg-blue-600 hover:bg-blue-700"])},[w(C(Ul),{class:"h-3.5 w-3.5"}),i("span",null,T(n.confirmText),1)],2),i("button",{type:"button",onClick:c,class:"flex h-10 items-center gap-1 border-l border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 px-3 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[w(C(Es),{class:"h-3.5 w-3.5"}),i("span",null,T(n.cancelText),1)])],64)):(b(),v("button",{key:2,type:"button",onClick:l,class:M(["flex h-10 items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-colors cursor-pointer",n.variant==="danger"&&"text-rose-600 hover:bg-rose-500/10 dark:text-rose-400",n.variant==="warning"&&"text-amber-600 hover:bg-amber-500/10 dark:text-amber-400",n.variant==="primary"&&"text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"])},[(b(),fe(Je(n.icon||C(Hl)),{class:"h-4 w-4"})),i("span",null,T(n.label),1)],2))],2))}}),Mh=["width","height","stroke-width"],$h=["width","height","stroke-width"],Rh=["d"],Th=["width","height","stroke-width"],Uo=ie({__name:"IconMorph",props:{modelValue:{type:Boolean,default:!1},mode:{default:"menu-close"},size:{default:24},strokeWidth:{default:2},class:{}},emits:["update:modelValue","click"],setup(e,{emit:t}){const n=e,r=t;function o(){r("update:modelValue",!n.modelValue),r("click")}return(s,l)=>(b(),v("button",{type:"button",onClick:o,class:M(C(pe)("relative inline-flex items-center justify-center rounded-xl p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer select-none",n.class)),style:me({width:`${n.size+16}px`,height:`${n.size+16}px`})},[n.mode==="menu-close"?(b(),v("svg",{key:0,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[i("line",{x1:"3",y1:"6",x2:"21",y2:"6",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:me({transform:n.modelValue?"translateY(6px) rotate(45deg)":"none"})},null,4),i("line",{x1:"3",y1:"12",x2:"21",y2:"12",class:"transition-all duration-200 ease-out origin-center",style:me({opacity:n.modelValue?"0":"1",transform:n.modelValue?"scaleX(0)":"scaleX(1)"})},null,4),i("line",{x1:"3",y1:"18",x2:"21",y2:"18",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:me({transform:n.modelValue?"translateY(-6px) rotate(-45deg)":"none"})},null,4)],8,Mh)):n.mode==="play-pause"?(b(),v("svg",{key:1,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[i("line",{x1:"6",y1:"4",x2:"6",y2:"20",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",style:me({transform:n.modelValue?"none":"translateX(1px)"})},null,4),i("path",{d:n.modelValue?"M18 4 L18 20":"M6 4 L20 12 L6 20",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"},null,8,Rh)],8,$h)):n.mode==="plus-minus"?(b(),v("svg",{key:2,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round"},[l[0]||(l[0]=i("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1)),i("line",{x1:"12",y1:"5",x2:"12",y2:"19",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:me({transform:n.modelValue?"rotate(90deg) scale(0)":"rotate(0deg) scale(1)",opacity:n.modelValue?"0":"1"})},null,4)],8,Th)):re("",!0)],6))}}),Ph={class:"relative inline-flex items-center"},Eh=["disabled"],Fh={key:1,class:"truncate"},Lh={key:2,class:"ml-0.5 rounded-full bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400"},Oh={key:0,class:"pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap rounded-md border border-zinc-200/80 bg-white/95 px-2 py-0.5 text-[10px] font-medium text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-800/95 dark:text-zinc-200"},Vh=ie({__name:"ActionButton",props:{label:{},tooltip:{},icon:{},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},badge:{},size:{default:"md"},class:{}},emits:["click"],setup(e,{emit:t}){const n=e,r=t,o=F(!1);function s(l){n.disabled||r("click",l)}return(l,a)=>(b(),v("div",Ph,[i("button",{type:"button",disabled:n.disabled,onClick:s,onMouseenter:a[0]||(a[0]=c=>o.value=!0),onMouseleave:a[1]||(a[1]=c=>o.value=!1),class:M(C(pe)("group relative flex items-center justify-center rounded-xl border font-medium select-none transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer","active:scale-90 hover:scale-[1.03]",n.size==="sm"&&"h-8 px-2.5 text-xs gap-1.5",n.size==="md"&&"h-9 px-3 text-xs sm:text-sm gap-2",n.size==="lg"&&"h-11 px-4 text-sm sm:text-base gap-2.5",n.active?"border-blue-500/50 bg-blue-50 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/90 text-zinc-700 shadow-2xs hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800/80 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",n.disabled&&"opacity-50 cursor-not-allowed active:scale-100 hover:scale-100",n.class))},[n.icon?(b(),fe(Je(n.icon),{key:0,class:M(["shrink-0 transition-transform duration-150",n.size==="sm"&&"h-3.5 w-3.5",n.size==="md"&&"h-4 w-4",n.size==="lg"&&"h-5 w-5"])},null,8,["class"])):re("",!0),n.label?(b(),v("span",Fh,T(n.label),1)):re("",!0),n.badge!==void 0?(b(),v("span",Lh,T(n.badge),1)):re("",!0),We(l.$slots,"default",{},void 0,!0)],42,Eh),w(zt,{name:"action-tip"},{default:Y(()=>[o.value&&n.tooltip?(b(),v("div",Oh,T(n.tooltip),1)):re("",!0)]),_:1})]))}}),Gn=je(Vh,[["__scopeId","data-v-54d32724"]]),Dh={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-1"},jh=["onClick"],Bh={class:"text-xs font-semibold text-zinc-900 dark:text-zinc-100"},Nh={key:0,class:"text-[10px] text-zinc-400 mt-0.5"},Hh=ie({__name:"SplitButton",props:{label:{default:"立即发布上线"},icon:{default:Lr},items:{default:()=>[{id:"preview",label:"发布至 Staging 预览环境",description:"生成独立预览分支 URL"},{id:"draft",label:"保存为草稿草稿快照",description:"仅团队协作成员可见"},{id:"schedule",label:"定时发布计划",description:"设定指定时间自动化推上线"}]},variant:{default:"primary"},class:{}},emits:["primaryClick","select"],setup(e,{emit:t}){const n=e,r=t,o=F(!1),s=F(null);function l(){o.value=!o.value}function a(){r("primaryClick")}function c(u){o.value=!1,r("select",u),u.onClick&&u.onClick()}function p(u){s.value&&!s.value.contains(u.target)&&(o.value=!1)}return Xe(()=>{window.addEventListener("click",p)}),et(()=>{window.removeEventListener("click",p)}),(u,d)=>(b(),v("div",{ref_key:"containerRef",ref:s,class:M(C(pe)("relative inline-flex items-center select-none",n.class))},[i("div",{class:M(["flex h-10 items-stretch overflow-hidden rounded-xl border shadow-sm transition-all duration-200",n.variant==="primary"&&"border-blue-600 bg-blue-600 text-white hover:bg-blue-500",n.variant==="secondary"&&"border-zinc-200/80 bg-white/90 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800"])},[i("button",{type:"button",onClick:a,class:"flex items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-transform active:scale-95 cursor-pointer"},[(b(),fe(Je(n.icon),{class:"h-4 w-4"})),i("span",null,T(n.label),1)]),i("div",{class:M(["w-px self-stretch",n.variant==="primary"?"bg-blue-400/50":"bg-zinc-200 dark:bg-zinc-800"])},null,2),i("button",{type:"button",onClick:Xt(l,["stop"]),class:"flex items-center justify-center px-2.5 transition-colors hover:bg-black/10 active:scale-95 cursor-pointer dark:hover:bg-white/10",title:"更多选项"},[w(C(On),{class:M(["h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",o.value&&"rotate-180"])},null,8,["class"])])],2),w(zt,{name:"split-menu"},{default:Y(()=>[o.value&&n.items&&n.items.length>0?(b(),v("div",Dh,[(b(!0),v(se,null,we(n.items,f=>(b(),v("button",{key:f.id,type:"button",onClick:m=>c(f),class:"flex w-full flex-col items-start rounded-lg px-3 py-2 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"},[i("span",Bh,T(f.label),1),f.description?(b(),v("span",Nh,T(f.description),1)):re("",!0)],8,jh))),128))])):re("",!0)]),_:1})],2))}}),sa=je(Hh,[["__scopeId","data-v-6e3e55b2"]]),Uh=["onClick"],Gh={class:"font-mono text-[11px] font-bold"},qh={key:0,type:"button",class:"flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-zinc-300 text-zinc-400 transition-colors hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 cursor-pointer",title:"添加表情反馈"},ia=ie({__name:"Reactions",props:{items:{default:()=>[{id:"fire",emoji:"🔥",count:48,active:!0},{id:"rocket",emoji:"🚀",count:32,active:!1},{id:"heart",emoji:"❤️",count:65,active:!1},{id:"zap",emoji:"⚡",count:19,active:!1},{id:"eyes",emoji:"👀",count:12,active:!1}]},allowAdd:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=F(JSON.parse(JSON.stringify(t.items))),r=F(null);function o(s){s.active=!s.active,s.count+=s.active?1:-1,r.value=s.id,setTimeout(()=>{r.value=null},400)}return(s,l)=>(b(),v("div",{class:M(C(pe)("inline-flex flex-wrap items-center gap-1.5 select-none",t.class))},[(b(!0),v(se,null,we(n.value,a=>(b(),v("button",{key:a.id,type:"button",onClick:c=>o(a),class:M(["group flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold transition-all duration-200 active:scale-90 cursor-pointer",a.active?"border-blue-500/50 bg-blue-50/80 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/80 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"])},[i("span",{class:M(["text-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",r.value===a.id&&"scale-135 -translate-y-0.5","group-hover:scale-110"])},T(a.emoji),3),i("span",Gh,T(a.count),1)],10,Uh))),128)),t.allowAdd?(b(),v("button",qh,[w(C(_p),{class:"h-3.5 w-3.5"})])):re("",!0)],2))}}),Wh={key:0,class:"text-xs font-semibold text-zinc-600 dark:text-zinc-300"},Xh={class:"relative flex h-full flex-1 items-center px-2.5 min-w-[70px]"},Kh={class:"font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100"},Yh={key:0,class:"font-mono text-[10px] text-zinc-400"},Go=ie({__name:"ScrubInput",props:{modelValue:{},label:{},min:{default:0},max:{default:100},step:{default:1},sensitivity:{default:1},suffix:{default:"px"},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=F(!1),s=F(!1),l=F(null),a=F(String(n.modelValue));let c=0,p=0;function u(I){let x=I;return n.min!==void 0&&(x=Math.max(n.min,x)),n.max!==void 0&&(x=Math.min(n.max,x)),Math.round(x*100)/100}function d(I){s.value||(o.value=!0,c=I.clientX,p=n.modelValue,window.addEventListener("mousemove",f),window.addEventListener("mouseup",m),document.body.style.cursor="ew-resize",document.body.style.userSelect="none")}function f(I){if(!o.value)return;const x=I.clientX-c;let _=1;I.shiftKey&&(_=10),I.altKey&&(_=.1);const A=Math.round(x/(5/n.sensitivity)*_)*n.step,E=u(p+A);E!==n.modelValue&&r("update:modelValue",E)}function m(){o.value&&(o.value=!1,window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect="",r("change",n.modelValue))}function z(){s.value=!0,a.value=String(n.modelValue),setTimeout(()=>{var I,x;(I=l.value)==null||I.focus(),(x=l.value)==null||x.select()},20)}function y(){s.value=!1;const I=parseFloat(a.value);if(!isNaN(I)){const x=u(I);r("update:modelValue",x),r("change",x)}}const S=ce(()=>{const I=n.max-n.min;return I<=0?0:Math.min(Math.max((n.modelValue-n.min)/I*100,0),100)});return et(()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect=""}),(I,x)=>(b(),v("div",{class:M(C(pe)("group relative inline-flex h-9 items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900 select-none overflow-hidden",o.value&&"border-blue-500 ring-2 ring-blue-500/20",n.class))},[i("div",{class:"pointer-events-none absolute inset-y-0 left-0 bg-blue-500/10 dark:bg-blue-500/15 transition-[width] ease-out duration-75",style:me({width:`${S.value}%`})},null,4),i("div",{onMousedown:d,class:"flex h-full items-center gap-1 px-2.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-ew-resize transition-colors",title:"按住左右水平拖拽微调数值 (Shift 加速 10x, Alt 精细 0.1x)"},[w(C(Ol),{class:"h-3.5 w-3.5"}),n.label?(b(),v("span",Wh,T(n.label),1)):re("",!0)],32),x[2]||(x[2]=i("div",{class:"h-4 w-px bg-zinc-200 dark:bg-zinc-800"},null,-1)),i("div",Xh,[s.value?Mn((b(),v("input",{key:0,ref_key:"inputRef",ref:l,"onUpdate:modelValue":x[0]||(x[0]=_=>a.value=_),type:"text",onBlur:y,onKeydown:[Si(y,["enter"]),x[1]||(x[1]=Si(_=>s.value=!1,["esc"]))],class:"w-full bg-transparent p-0 text-right font-mono text-xs font-bold text-zinc-900 outline-none focus:outline-none dark:text-zinc-100"},null,544)),[[Ps,a.value]]):(b(),v("div",{key:1,onDblclick:z,onMousedown:d,class:"flex w-full items-center justify-end gap-0.5 cursor-ew-resize",title:"双击直接键入数值，或按住水平拖动"},[i("span",Kh,T(n.modelValue),1),n.suffix?(b(),v("span",Yh,T(n.suffix),1)):re("",!0)],32))])],2))}}),Zh={class:"relative flex items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900"},Jh=["type","value","placeholder"],Qh={class:"space-y-1.5"},ex={class:"grid grid-cols-4 gap-1.5"},tx={class:"flex items-center justify-between text-[11px] font-mono"},nx={class:"text-zinc-400 flex items-center gap-1"},rx={key:0,class:"rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-3 text-xs space-y-1.5 dark:border-zinc-800/80 dark:bg-zinc-950/40"},ox=ie({__name:"PasswordStrength",props:{modelValue:{default:""},placeholder:{default:"请输入安全密码..."},showRules:{type:Boolean,default:!0},class:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,o=F(!1),s=ce(()=>{const p=n.modelValue||"";return[{id:"length",label:"至少 8 个字符",valid:p.length>=8},{id:"lowercase",label:"包含小写英文字母 (a-z)",valid:/[a-z]/.test(p)},{id:"uppercase",label:"包含大写英文字母 (A-Z)",valid:/[A-Z]/.test(p)},{id:"number",label:"包含至少 1 个数字 (0-9)",valid:/\d/.test(p)},{id:"special",label:"包含特殊符号 (!@#$%^&*)",valid:/[^A-Za-z0-9]/.test(p)}]}),l=ce(()=>s.value.filter(p=>p.valid).length),a=ce(()=>{if(!n.modelValue)return{score:0,text:"未输入",color:"bg-zinc-200 dark:bg-zinc-800",textColor:"text-zinc-400"};const p=l.value;return p<=2?{score:1,text:"较弱 (Weak)",color:"bg-rose-500",textColor:"text-rose-500"}:p===3?{score:2,text:"中等 (Fair)",color:"bg-amber-500",textColor:"text-amber-500"}:p===4?{score:3,text:"良好 (Good)",color:"bg-sky-500",textColor:"text-sky-500"}:{score:4,text:"极高安全 (Strong)",color:"bg-emerald-500",textColor:"text-emerald-500"}});function c(p){const u=p.target.value;r("update:modelValue",u)}return(p,u)=>(b(),v("div",{class:M(C(pe)("w-full max-w-sm space-y-3 select-none",n.class))},[i("div",Zh,[i("input",{type:o.value?"text":"password",value:n.modelValue,placeholder:n.placeholder,onInput:c,class:"h-10 w-full bg-transparent px-3.5 pr-10 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,Jh),i("button",{type:"button",onClick:u[0]||(u[0]=d=>o.value=!o.value),class:"absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer",tabindex:"-1"},[o.value?(b(),fe(C(dp),{key:0,class:"h-4 w-4"})):(b(),fe(C(Dl),{key:1,class:"h-4 w-4"}))])]),i("div",Qh,[i("div",ex,[(b(),v(se,null,we(4,d=>i("div",{key:d,class:"h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300"},[i("div",{class:M(["h-full transition-all duration-300 ease-out",d<=a.value.score?a.value.color:"w-0"]),style:me({width:d<=a.value.score?"100%":"0%"})},null,6)])),64))]),i("div",tx,[i("span",nx,[w(C(Nl),{class:"h-3.5 w-3.5"}),u[1]||(u[1]=i("span",null,"安全等级评估",-1))]),i("span",{class:M(["font-bold transition-colors duration-200",a.value.textColor])},T(a.value.text),3)])]),n.showRules?(b(),v("div",rx,[(b(!0),v(se,null,we(s.value,d=>(b(),v("div",{key:d.id,class:M(["flex items-center gap-2 transition-colors duration-200",d.valid?"text-emerald-600 dark:text-emerald-400 font-semibold":"text-zinc-400"])},[i("div",{class:M(["flex h-4 w-4 items-center justify-center rounded-full transition-all duration-200",d.valid?"bg-emerald-500/20 text-emerald-600 dark:text-emerald-400":"bg-zinc-200 dark:bg-zinc-800 text-zinc-400"])},[d.valid?(b(),fe(C(Kt),{key:0,class:"h-2.5 w-2.5 animate-bounce"})):(b(),fe(C(Es),{key:1,class:"h-2.5 w-2.5 opacity-50"}))],2),i("span",null,T(d.label),1)],2))),128))])):re("",!0)],2))}}),sx={class:"flex items-center justify-between"},ix={class:"flex items-center gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800"},ax=["onClick"],lx={class:"relative flex items-baseline border-b border-zinc-200/90 pb-3 transition-colors focus-within:border-blue-500 dark:border-zinc-800"},cx={class:"font-mono text-2xl font-bold text-zinc-400 mr-2 shrink-0"},dx=["value","placeholder"],ux={class:"flex flex-wrap items-center gap-2 pt-1"},px=["onClick"],fx=ie({__name:"MoneyInput",props:{modelValue:{default:0},currency:{default:"CNY"},currencies:{default:()=>[{code:"CNY",symbol:"¥",label:"人民币"},{code:"USD",symbol:"$",label:"美元"},{code:"EUR",symbol:"€",label:"欧元"},{code:"GBP",symbol:"£",label:"英镑"}]},presets:{default:()=>[100,500,1e3,5e3]},placeholder:{default:"0.00"},class:{}},emits:["update:modelValue","update:currency"],setup(e,{emit:t}){const n=e,r=t,o=F(n.currency),s=ce(()=>{var m;return((m=n.currencies.find(z=>z.code===o.value))==null?void 0:m.symbol)||"¥"});function l(m){return m===0?"":m.toLocaleString("en-US",{maximumFractionDigits:2})}const a=ce(()=>l(n.modelValue)),c=ce(()=>{const m=a.value.length;return m>12?"text-xl":m>8?"text-2xl":"text-3xl sm:text-4xl"});function p(m){const y=m.target.value.replace(/[^0-9.]/g,""),S=parseFloat(y);r("update:modelValue",isNaN(S)?0:S)}function u(m){r("update:modelValue",n.modelValue+m)}function d(){r("update:modelValue",0)}function f(m){o.value=m,r("update:currency",m)}return(m,z)=>(b(),v("div",{class:M(C(pe)("w-full max-w-md rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 select-none space-y-4",n.class))},[i("div",sx,[z[0]||(z[0]=i("span",{class:"text-xs font-semibold text-zinc-500 dark:text-zinc-400"},"转账 / 充值金额",-1)),i("div",ix,[(b(!0),v(se,null,we(n.currencies,y=>(b(),v("button",{key:y.code,type:"button",onClick:S=>f(y.code),class:M(["rounded-md px-2 py-0.5 text-[11px] font-bold font-mono transition-colors cursor-pointer",o.value===y.code?"bg-white text-zinc-900 shadow-2xs dark:bg-zinc-700 dark:text-white":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"])},T(y.code),11,ax))),128))])]),i("div",lx,[i("span",cx,T(s.value),1),i("input",{type:"text",inputmode:"decimal",value:a.value,placeholder:n.placeholder,onInput:p,class:M(["w-full bg-transparent p-0 font-mono font-extrabold tracking-tight text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 transition-all duration-200",c.value])},null,42,dx),n.modelValue>0?(b(),v("button",{key:0,type:"button",onClick:d,class:"ml-2 rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors cursor-pointer shrink-0"}," 清零 ")):re("",!0)]),i("div",ux,[z[1]||(z[1]=i("span",{class:"text-[11px] text-zinc-400"},"快捷填充:",-1)),(b(!0),v(se,null,we(n.presets,y=>(b(),v("button",{key:y,type:"button",onClick:S=>u(y),class:"rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-2.5 py-1 font-mono text-xs font-semibold text-zinc-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-400 dark:hover:bg-blue-950/40 dark:hover:text-blue-400 transition-all active:scale-95 cursor-pointer"}," +"+T(s.value)+T(y),9,px))),128))])],2))}}),mx={class:"text-base leading-none"},bx={class:"font-mono text-zinc-900 dark:text-zinc-100"},gx={class:"relative flex flex-1 items-center px-3"},hx=["value","placeholder"],xx={key:0,class:"ml-1 text-emerald-500"},vx={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 max-h-56 overflow-y-auto space-y-0.5"},yx=["onClick"],wx={class:"flex items-center gap-2"},kx={class:"text-base"},zx={class:"font-medium text-zinc-800 dark:text-zinc-200"},_x={class:"font-mono text-[11px] font-bold text-zinc-400"},Cx=ie({__name:"PhoneInput",props:{modelValue:{default:""},countryCode:{default:"CN"},countries:{default:()=>[{code:"CN",dialCode:"+86",name:"中国",flag:"🇨🇳",format:"### #### ####"},{code:"US",dialCode:"+1",name:"美国",flag:"🇺🇸",format:"(###) ###-####"},{code:"GB",dialCode:"+44",name:"英国",flag:"🇬🇧",format:"#### ######"},{code:"JP",dialCode:"+81",name:"日本",flag:"🇯🇵",format:"###-####-####"},{code:"DE",dialCode:"+49",name:"德国",flag:"🇩🇪",format:"#### #######"},{code:"SG",dialCode:"+65",name:"新加坡",flag:"🇸🇬",format:"#### ####"}]},placeholder:{default:"请输入手机号码..."},class:{}},emits:["update:modelValue","update:countryCode"],setup(e,{emit:t}){const n=e,r=t,o=F(n.countries.find(f=>f.code===n.countryCode)||n.countries[0]),s=F(!1),l=F(null);function a(f,m){const z=f.replace(/\D/g,"");let y="",S=0;for(let I=0;I<m.length&&S<z.length;I++)m[I]==="#"?(y+=z[S],S++):y+=m[I];return S<z.length&&(y+=" "+z.slice(S)),y}function c(f){const z=f.target.value.replace(/\D/g,""),y=a(z,o.value.format);r("update:modelValue",y)}function p(f){o.value=f,s.value=!1,r("update:countryCode",f.code);const m=n.modelValue.replace(/\D/g,"");r("update:modelValue",a(m,f.format))}function u(f){l.value&&!l.value.contains(f.target)&&(s.value=!1)}Xe(()=>{window.addEventListener("click",u)}),et(()=>{window.removeEventListener("click",u)});const d=ce(()=>{const f=n.modelValue.replace(/\D/g,"");return f.length>=8&&f.length<=15});return(f,m)=>(b(),v("div",{ref_key:"containerRef",ref:l,class:M(C(pe)("relative w-full max-w-sm select-none",n.class))},[i("div",{class:M(["flex h-10 items-center overflow-hidden rounded-xl border bg-white shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:bg-zinc-900",n.modelValue&&d.value?"border-emerald-500/50":"border-zinc-200/90 dark:border-zinc-800"])},[i("button",{type:"button",onClick:m[0]||(m[0]=Xt(z=>s.value=!s.value,["stop"])),class:"flex h-full items-center gap-1.5 border-r border-zinc-200/80 bg-zinc-50/70 px-3 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0 outline-none focus:outline-none ring-0"},[i("span",mx,T(o.value.flag),1),i("span",bx,T(o.value.dialCode),1),w(C(On),{class:M(["h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",s.value&&"rotate-180"])},null,8,["class"])]),i("div",gx,[i("input",{type:"tel",value:n.modelValue,placeholder:n.placeholder,onInput:c,class:"w-full bg-transparent font-mono text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,hx),n.modelValue&&d.value?(b(),v("div",xx,[w(C(Kt),{class:"h-4 w-4 animate-bounce"})])):re("",!0)])],2),w(zt,{name:"phone-menu"},{default:Y(()=>[s.value?(b(),v("div",vx,[(b(!0),v(se,null,we(n.countries,z=>(b(),v("button",{key:z.code,type:"button",onClick:y=>p(z),class:"flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"},[i("div",wx,[i("span",kx,T(z.flag),1),i("span",zx,T(z.name),1)]),i("span",_x,T(z.dialCode),1)],8,yx))),128))])):re("",!0)]),_:1})],2))}}),Sx=je(Cx,[["__scopeId","data-v-23e74282"]]),Ix={class:"flex items-center pl-1 text-zinc-400"},Ax=["onClick"],Mx=["disabled","placeholder"],$x={key:0,class:"ml-auto pr-1 font-mono text-[10px] text-zinc-400"},Rx=ie({__name:"TagInput",props:{modelValue:{default:()=>["Vue 3.5","TailwindCSS","Motion UI"]},placeholder:{default:"输入标签后按回车添加..."},maxTags:{default:8},allowDuplicates:{type:Boolean,default:!1},class:{}},emits:["update:modelValue","add","remove"],setup(e,{emit:t}){const n=e,r=t,o=F(""),s=F(null);function l(){const u=o.value.trim();if(!u||n.maxTags&&n.modelValue.length>=n.maxTags)return;if(!n.allowDuplicates&&n.modelValue.includes(u)){o.value="";return}const d=[...n.modelValue,u];r("update:modelValue",d),r("add",u),o.value=""}function a(u){const d=n.modelValue[u],f=n.modelValue.filter((m,z)=>z!==u);r("update:modelValue",f),r("remove",d)}function c(u){u.key==="Enter"||u.key===","?(u.preventDefault(),l()):u.key==="Backspace"&&!o.value&&n.modelValue.length>0&&a(n.modelValue.length-1)}function p(){var u;(u=s.value)==null||u.focus()}return(u,d)=>(b(),v("div",{onClick:p,class:M(C(pe)("group flex min-h-10 w-full max-w-md flex-wrap items-center gap-1.5 rounded-xl border border-zinc-200/90 bg-white p-2 shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900 cursor-text select-none",n.class))},[i("div",Ix,[w(C(Ip),{class:"h-3.5 w-3.5"})]),w(Bu,{name:"tag-list"},{default:Y(()=>[(b(!0),v(se,null,we(n.modelValue,(f,m)=>(b(),v("div",{key:f,class:"inline-flex items-center gap-1 rounded-lg border border-blue-500/20 bg-blue-50/70 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/60 dark:text-blue-300 transition-all duration-200"},[i("span",null,T(f),1),i("button",{type:"button",onClick:Xt(z=>a(m),["stop"]),class:"flex h-3.5 w-3.5 items-center justify-center rounded-full hover:bg-blue-600/20 dark:hover:bg-blue-400/20 transition-colors cursor-pointer"},[w(C(Es),{class:"h-2.5 w-2.5"})],8,Ax)]))),128))]),_:1}),Mn(i("input",{ref_key:"inputRef",ref:s,"onUpdate:modelValue":d[0]||(d[0]=f=>o.value=f),type:"text",disabled:n.maxTags?n.modelValue.length>=n.maxTags:!1,placeholder:n.modelValue.length===0?n.placeholder:n.maxTags&&n.modelValue.length>=n.maxTags?"已达上限":"添加更多...",onKeydown:c,class:"min-w-[80px] flex-1 bg-transparent px-1.5 py-0.5 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,Mx),[[Ps,o.value]]),n.maxTags?(b(),v("div",$x,T(n.modelValue.length)+"/"+T(n.maxTags),1)):re("",!0)],2))}}),Tx=je(Rx,[["__scopeId","data-v-a092d752"]]),Px={class:"relative flex flex-col rounded-2xl border border-zinc-200/90 bg-white p-3 shadow-2xs transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900"},Ex=["value","placeholder"],Fx={class:"flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/80"},Lx={class:"flex items-center gap-1 text-[11px] text-zinc-400"},Ox={class:"font-mono text-[10px] text-zinc-400"},Vx={key:0,class:"aura-popover popover-shadow absolute bottom-full left-0 mb-2 w-72 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-0.5"},Dx={class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"},jx=["onClick","onMouseenter"],Bx={key:1},Nx={class:"flex flex-1 flex-col overflow-hidden"},Hx={class:"flex items-center gap-1.5"},Ux={class:"truncate text-xs font-semibold"},Gx={key:0,class:"rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"},qx={class:"truncate text-[10px] text-zinc-400"},Wx=ie({__name:"MentionInput",props:{modelValue:{default:""},placeholder:{default:"输入内容，键入 @ 可呼出团队成员或智能体..."},users:{default:()=>[{id:"1",name:"左岚 (Zuǒ Lán)",handle:"zuolan",role:"全栈架构 Agent",isBot:!0},{id:"2",name:"Aura Motion",handle:"auramotion",role:"视觉动效引擎",isBot:!0},{id:"3",name:"Alex Rivera",handle:"alex",role:"前端技术专家",isBot:!1},{id:"4",name:"Elena Rostova",handle:"elena",role:"UI 设计专家",isBot:!1},{id:"5",name:"Devin AI",handle:"devin",role:"代码重构 Agent",isBot:!0}]},class:{}},emits:["update:modelValue","mention"],setup(e,{emit:t}){const n=e,r=t,o=F(null),s=F(!1),l=F(""),a=F(0),c=ce(()=>{const f=l.value.toLowerCase();return f?n.users.filter(m=>m.name.toLowerCase().includes(f)||m.handle.toLowerCase().includes(f)):n.users});function p(f){const m=f.target,z=m.value;r("update:modelValue",z);const y=m.selectionStart||0,S=z.slice(0,y),I=S.lastIndexOf("@");if(I!==-1){const x=S.slice(I+1);if(!x.includes(" ")&&!x.includes(`
`)){l.value=x,s.value=!0,a.value=0;return}}s.value=!1}function u(f){const m=o.value;if(!m)return;const z=n.modelValue,y=m.selectionStart||0,S=z.slice(0,y),I=z.slice(y),x=S.lastIndexOf("@");if(x!==-1){const _=S.slice(0,x)+`@${f.name} `+I;r("update:modelValue",_),r("mention",f),s.value=!1,setTimeout(()=>{m.focus();const A=x+f.name.length+2;m.setSelectionRange(A,A)},20)}}function d(f){!s.value||c.value.length===0||(f.key==="ArrowDown"?(f.preventDefault(),a.value=(a.value+1)%c.value.length):f.key==="ArrowUp"?(f.preventDefault(),a.value=(a.value-1+c.value.length)%c.value.length):f.key==="Enter"||f.key==="Tab"?(f.preventDefault(),u(c.value[a.value])):f.key==="Escape"&&(s.value=!1))}return(f,m)=>(b(),v("div",{class:M(C(pe)("relative w-full max-w-lg select-none",n.class))},[i("div",Px,[i("textarea",{ref_key:"textareaRef",ref:o,value:n.modelValue,placeholder:n.placeholder,rows:"3",onInput:p,onKeydown:d,class:"w-full resize-none bg-transparent text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,Ex),i("div",Fx,[i("div",Lx,[w(C(ip),{class:"h-3.5 w-3.5 text-blue-500"}),m[0]||(m[0]=i("span",null,"输入 @ 呼出协作成员 / Agent",-1))]),i("span",Ox,T(n.modelValue.length)+" 字 ",1)])]),w(zt,{name:"mention-pop"},{default:Y(()=>[s.value&&c.value.length>0?(b(),v("div",Vx,[i("div",Dx," 可选成员与智能体 ("+T(c.value.length)+") ",1),(b(!0),v(se,null,we(c.value,(z,y)=>(b(),v("button",{key:z.id,type:"button",onClick:S=>u(z),onMouseenter:S=>a.value=y,class:M(["flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors cursor-pointer",a.value===y?"bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300":"hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200"])},[i("div",{class:M(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white shrink-0",z.isBot?"bg-gradient-to-tr from-blue-600 to-indigo-500":"bg-zinc-700 dark:bg-zinc-600"])},[z.isBot?(b(),fe(C(nr),{key:0,class:"h-4 w-4"})):(b(),v("span",Bx,T(z.name.charAt(0)),1))],2),i("div",Nx,[i("div",Hx,[i("span",Ux,T(z.name),1),z.isBot?(b(),v("span",Gx," AI ")):re("",!0)]),i("span",qx,"@"+T(z.handle)+" · "+T(z.role),1)])],42,jx))),128))])):re("",!0)]),_:1})],2))}}),Xx=je(Wx,[["__scopeId","data-v-b496cb8a"]]),Kx=["disabled","onClick","onKeydown"],aa=ie({__name:"SegmentedControl",props:{modelValue:{},options:{},size:{default:"md"},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=F(null),s=F([]),l=F({width:"0px",transform:"translateX(0px)",opacity:0});function a(){const u=n.options.findIndex(f=>f.id===n.modelValue);if(u===-1||!s.value[u]){l.value.opacity=0;return}const d=s.value[u];d&&(l.value={width:`${d.offsetWidth}px`,transform:`translateX(${d.offsetLeft}px)`,opacity:1})}function c(u){u.disabled||(r("update:modelValue",u.id),r("change",u))}function p(u,d){const f=n.options.map((y,S)=>({opt:y,i:S})).filter(y=>!y.opt.disabled),m=f.findIndex(y=>y.i===d);if(m===-1)return;let z=m;if(u.key==="ArrowRight"||u.key==="ArrowDown"?(u.preventDefault(),z=(m+1)%f.length):(u.key==="ArrowLeft"||u.key==="ArrowUp")&&(u.preventDefault(),z=(m-1+f.length)%f.length),z!==m){const y=f[z];c(y.opt),An(()=>{var S;(S=s.value[y.i])==null||S.focus()})}}return gt(()=>n.modelValue,()=>{An(a)}),Xe(()=>{An(()=>{a(),window.addEventListener("resize",a)})}),(u,d)=>(b(),v("div",{ref_key:"containerRef",ref:o,class:M(C(pe)("relative inline-flex items-center rounded-xl bg-zinc-100 p-1 select-none dark:bg-zinc-800/80",n.class))},[i("div",{class:"pointer-events-none absolute left-0 top-1 bottom-1 z-0 rounded-lg bg-white shadow-xs transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-700 dark:shadow-none",style:me(l.value)},null,4),(b(!0),v(se,null,we(n.options,(f,m)=>(b(),v("button",{key:f.id,ref_for:!0,ref:z=>s.value[m]=z,type:"button",disabled:f.disabled,onClick:z=>c(f),onKeydown:z=>p(z,m),class:M(C(pe)("relative z-10 flex items-center justify-center gap-1.5 font-medium transition-colors duration-150 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer",n.size==="sm"&&"h-7 px-2.5 text-xs",n.size==="md"&&"h-8 px-3.5 text-xs sm:text-sm",n.size==="lg"&&"h-10 px-4 text-sm sm:text-base",n.modelValue===f.id?"text-zinc-900 font-bold dark:text-white":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",f.disabled&&"opacity-40 cursor-not-allowed hover:text-zinc-500"))},[f.icon?(b(),fe(Je(f.icon),{key:0,class:M(["shrink-0 transition-transform duration-150",n.size==="sm"&&"h-3.5 w-3.5",n.size==="md"&&"h-4 w-4",n.size==="lg"&&"h-5 w-5",n.modelValue===f.id&&"scale-105 text-blue-600 dark:text-blue-400"])},null,8,["class"])):re("",!0),i("span",null,T(f.label),1),f.badge!==void 0?(b(),v("span",{key:1,class:M(["rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold transition-colors",n.modelValue===f.id?"bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300":"bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"])},T(f.badge),3)):re("",!0)],42,Kx))),128))],2))}}),Yx={class:"flex items-center gap-1.5 flex-wrap"},Zx={key:0,class:"flex items-center"},Jx={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},Qx={key:1},ev=["onClick"],tv={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},nv={key:1},rv={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},ov={key:1},sv={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-1.5 w-48 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-0.5"},iv=["onClick"],av={key:0,class:"font-bold text-zinc-900 dark:text-white flex items-center gap-1","aria-current":"page"},lv=["onClick"],cv={key:2,class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},dv={key:1},uv=ie({__name:"BreadcrumbTrail",props:{items:{},maxItems:{default:4},separator:{default:"chevron"},showHome:{type:Boolean,default:!0},class:{}},emits:["select"],setup(e,{emit:t}){const n=e,r=t,o=F(!1),s=F(null),l=ce(()=>{const p=n.items.length;return p<=n.maxItems?{start:n.items,hidden:[],end:[],isCollapsed:!1}:{start:[n.items[0]],hidden:n.items.slice(1,p-2),end:n.items.slice(p-2),isCollapsed:!0}});function a(p){r("select",p),p.onClick&&p.onClick(),o.value=!1}function c(p){s.value&&!s.value.contains(p.target)&&(o.value=!1)}return Xe(()=>{window.addEventListener("click",c)}),et(()=>{window.removeEventListener("click",c)}),(p,u)=>(b(),v("nav",{"aria-label":"Breadcrumb",class:M(C(pe)("inline-flex items-center text-xs sm:text-sm font-medium select-none",n.class))},[i("ol",Yx,[n.showHome?(b(),v("li",Zx,[i("button",{type:"button",onClick:u[0]||(u[0]=d=>a({label:"首页",href:"/"})),class:"flex items-center gap-1 text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer",title:"返回控制台首页"},[w(C(jl),{class:"h-3.5 w-3.5"})]),i("span",Jx,[n.separator==="chevron"?(b(),fe(C(In),{key:0,class:"h-3.5 w-3.5"})):(b(),v("span",Qx,"/"))])])):re("",!0),(b(!0),v(se,null,we(l.value.start,d=>(b(),v("li",{key:d.label,class:"flex items-center"},[i("button",{type:"button",onClick:f=>a(d),class:"flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[d.icon?(b(),fe(Je(d.icon),{key:0,class:"h-3.5 w-3.5"})):re("",!0),i("span",null,T(d.label),1)],8,ev),i("span",tv,[n.separator==="chevron"?(b(),fe(C(In),{key:0,class:"h-3.5 w-3.5"})):(b(),v("span",nv,"/"))])]))),128)),l.value.isCollapsed?(b(),v("li",{key:1,ref_key:"menuRef",ref:s,class:"relative flex items-center"},[i("button",{type:"button",onClick:u[1]||(u[1]=Xt(d=>o.value=!o.value,["stop"])),class:"flex h-6 w-6 items-center justify-center rounded-md border border-zinc-200/80 bg-zinc-50/80 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-all cursor-pointer",title:"点击展开中间隐藏路径"},[w(C(cp),{class:"h-3.5 w-3.5"})]),i("span",rv,[n.separator==="chevron"?(b(),fe(C(In),{key:0,class:"h-3.5 w-3.5"})):(b(),v("span",ov,"/"))]),w(zt,{name:"crumb-menu"},{default:Y(()=>[o.value?(b(),v("div",sv,[u[2]||(u[2]=i("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," 折叠上级路径 ",-1)),(b(!0),v(se,null,we(l.value.hidden,(d,f)=>(b(),v("button",{key:f,type:"button",onClick:m=>a(d),class:"flex w-full items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-left text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer transition-colors"},[d.icon?(b(),fe(Je(d.icon),{key:0,class:"h-3.5 w-3.5 text-zinc-400"})):re("",!0),i("span",null,T(d.label),1)],8,iv))),128))])):re("",!0)]),_:1})],512)):re("",!0),(b(!0),v(se,null,we(l.value.end,(d,f)=>(b(),v("li",{key:f,class:"flex items-center"},[f===l.value.end.length-1?(b(),v("span",av,[d.icon?(b(),fe(Je(d.icon),{key:0,class:"h-3.5 w-3.5 text-blue-500"})):re("",!0),i("span",null,T(d.label),1)])):(b(),v("button",{key:1,type:"button",onClick:m=>a(d),class:"flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[d.icon?(b(),fe(Je(d.icon),{key:0,class:"h-3.5 w-3.5"})):re("",!0),i("span",null,T(d.label),1)],8,lv)),f<l.value.end.length-1?(b(),v("span",cv,[n.separator==="chevron"?(b(),fe(C(In),{key:0,class:"h-3.5 w-3.5"})):(b(),v("span",dv,"/"))])):re("",!0)]))),128))])],2))}}),la=je(uv,[["__scopeId","data-v-097ac1ff"]]),pv={key:0,class:"whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-xs font-semibold text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:text-zinc-200 transition-transform group-hover:scale-105"},fv=["onClick","title"],mv=ie({__name:"FloatingActionMenu",props:{actions:{},direction:{default:"up"},class:{}},emits:["select","toggle"],setup(e,{emit:t}){const n=e,r=t,o=F(!1),s=F(null);function l(){o.value=!o.value,r("toggle",o.value)}function a(p){r("select",p),p.onClick&&p.onClick(),o.value=!1,r("toggle",!1)}function c(p){s.value&&!s.value.contains(p.target)&&o.value&&(o.value=!1,r("toggle",!1))}return Xe(()=>{window.addEventListener("click",c)}),et(()=>{window.removeEventListener("click",c)}),(p,u)=>(b(),v("div",{ref_key:"containerRef",ref:s,class:M(C(pe)("relative inline-flex flex-col items-center select-none",n.class))},[w(zt,{name:"fab-items"},{default:Y(()=>[o.value?(b(),v("div",{key:0,class:M(["absolute z-40 flex gap-3 pointer-events-auto",n.direction==="up"&&"bottom-full mb-3 flex-col-reverse items-center",n.direction==="down"&&"top-full mt-3 flex-col items-center",n.direction==="left"&&"right-full mr-3 flex-row-reverse items-center",n.direction==="right"&&"left-full ml-3 flex-row items-center"])},[(b(!0),v(se,null,we(n.actions,(d,f)=>(b(),v("div",{key:d.id,class:"flex items-center gap-2 group cursor-pointer",style:me({transitionDelay:`${f*40}ms`})},[n.direction==="up"||n.direction==="down"?(b(),v("div",pv,T(d.label),1)):re("",!0),i("button",{type:"button",onClick:Xt(m=>a(d),["stop"]),class:M(["flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer",d.color||"bg-blue-600 hover:bg-blue-500 shadow-blue-500/25"]),title:d.label},[(b(),fe(Je(d.icon),{class:"h-4 w-4"}))],10,fv)],4))),128))],2)):re("",!0)]),_:1}),i("button",{type:"button",onClick:Xt(l,["stop"]),class:M(["relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-blue-500 hover:scale-105 active:scale-90 cursor-pointer outline-none focus:outline-none ring-0",o.value&&"!bg-zinc-900 dark:!bg-zinc-700 shadow-zinc-900/40"]),title:"操作菜单"},[w(C(xp),{class:M(["h-5 w-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",o.value&&"rotate-135"])},null,8,["class"])],2)],2))}}),bv=je(mv,[["__scopeId","data-v-9096a8eb"]]),gv={class:"flex items-center gap-1 rounded-xl bg-zinc-50 p-1 border border-zinc-200/80 dark:bg-zinc-900/60 dark:border-zinc-800/80"},hv=["onMouseenter"],xv={class:"space-y-1"},vv=["onClick"],yv={key:0,class:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 transition-transform group-hover:scale-105"},wv={class:"flex-1 overflow-hidden"},kv={class:"flex items-center gap-1.5"},zv={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"},_v={key:0,class:"rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300"},Cv={class:"mt-0.5 text-[11px] text-zinc-400 line-clamp-1"},Sv=ie({__name:"NavbarHover",props:{items:{},class:{}},emits:["select"],setup(e,{emit:t}){const n=e,r=t,o=F(null),s=F(null),l=F([]),a=F({left:0,opacity:0,arrowLeft:0});let c=null;function p(z){const y=l.value[z],S=s.value;if(!y||!S)return;const I=S.getBoundingClientRect(),x=y.getBoundingClientRect(),_=x.left+x.width/2-I.left,A=320;a.value={left:Math.max(_-A/2,0),arrowLeft:_,opacity:1}}function u(z,y){c&&(clearTimeout(c),c=null),o.value=z.id,p(y)}function d(){c=setTimeout(()=>{o.value=null,a.value.opacity=0},180)}function f(){c&&(clearTimeout(c),c=null)}function m(z){r("select",z),o.value=null,a.value.opacity=0}return Xe(()=>{window.addEventListener("resize",()=>{if(o.value){const z=n.items.findIndex(y=>y.id===o.value);z!==-1&&p(z)}})}),et(()=>{c&&clearTimeout(c)}),(z,y)=>(b(),v("div",{ref_key:"containerRef",ref:s,onMouseleave:d,class:M(C(pe)("relative inline-flex items-center select-none",n.class))},[i("nav",gv,[(b(!0),v(se,null,we(n.items,(S,I)=>(b(),v("button",{key:S.id,ref_for:!0,ref:x=>l.value[I]=x,type:"button",onMouseenter:x=>u(S,I),class:M(["flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer outline-none focus:outline-none",o.value===S.id?"bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},[i("span",null,T(S.label),1),w(C(On),{class:M(["h-3.5 w-3.5 text-zinc-400 transition-transform duration-200",o.value===S.id&&"rotate-180 text-blue-500"])},null,8,["class"])],42,hv))),128))]),w(zt,{name:"nav-morph"},{default:Y(()=>{var S;return[o.value?(b(),v("div",{key:0,onMouseenter:f,onMouseleave:d,class:"aura-popover popover-shadow absolute top-full mt-2 w-80 rounded-2xl border border-zinc-200/80 bg-white/95 p-3 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",style:me({left:`${a.value.left}px`})},[i("div",{class:"absolute -top-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-zinc-200/80 bg-white dark:border-zinc-800/90 dark:bg-zinc-900 transition-all duration-200",style:me({left:`${a.value.arrowLeft-a.value.left}px`})},null,4),i("div",xv,[(b(!0),v(se,null,we(((S=n.items.find(I=>I.id===o.value))==null?void 0:S.children)||[],I=>(b(),v("div",{key:I.title,onClick:x=>m(I),class:"group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer"},[I.icon?(b(),v("div",yv,[(b(),fe(Je(I.icon),{class:"h-4 w-4"}))])):re("",!0),i("div",wv,[i("div",kv,[i("span",zv,T(I.title),1),I.badge?(b(),v("span",_v,T(I.badge),1)):re("",!0),w(C(tr),{class:"ml-auto h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-blue-500"})]),i("p",Cv,T(I.desc),1)])],8,vv))),128))])],36)):re("",!0)]}),_:1})],34))}}),Iv=je(Sv,[["__scopeId","data-v-36b3159c"]]),Av={class:"inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-white p-1 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900"},Mv=["disabled"],$v={class:"flex items-center gap-1"},Rv={key:0,class:"flex h-8 w-6 items-center justify-center font-mono text-xs text-zinc-400"},Tv=["onClick"],Pv=["disabled"],Ev={key:0,class:"flex w-full max-w-xs items-center gap-2.5 rounded-xl border border-zinc-200/60 bg-zinc-50/60 px-3 py-1.5 dark:border-zinc-800/60 dark:bg-zinc-950/40"},Fv=["max","value"],Lv={class:"font-mono text-[10px] text-zinc-400 shrink-0"},Ov={class:"rounded bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 shrink-0"},Vv=ie({__name:"PaginationSlider",props:{modelValue:{default:1},totalPages:{default:10},showSlider:{type:Boolean,default:!0},siblingCount:{default:1},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t;function o(a){const c=Math.max(1,Math.min(n.totalPages,a));c!==n.modelValue&&(r("update:modelValue",c),r("change",c))}const s=ce(()=>{const a=n.modelValue,c=n.totalPages,p=n.siblingCount,u=[],d=Math.max(a-p,1),f=Math.min(a+p,c),m=d>2,z=f<c-1;if(!m&&z){const y=3+2*p;for(let S=1;S<=Math.min(y,c);S++)u.push(S);c>y&&(u.push("..."),u.push(c))}else if(m&&!z){const y=3+2*p;u.push(1),u.push("...");for(let S=Math.max(c-y+1,1);S<=c;S++)u.push(S)}else if(m&&z){u.push(1),u.push("...");for(let y=d;y<=f;y++)u.push(y);u.push("..."),u.push(c)}else for(let y=1;y<=c;y++)u.push(y);return u});function l(a){const c=parseInt(a.target.value,10);isNaN(c)||o(c)}return(a,c)=>(b(),v("div",{class:M(C(pe)("flex flex-col items-center gap-3 select-none",n.class))},[i("div",Av,[i("button",{type:"button",disabled:n.modelValue<=1,onClick:c[0]||(c[0]=p=>o(n.modelValue-1)),class:"flex h-8 w-8 items-center justify-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all active:scale-90 cursor-pointer",title:"上一页"},[w(C(Ll),{class:"h-4 w-4"})],8,Mv),i("div",$v,[(b(!0),v(se,null,we(s.value,(p,u)=>(b(),v(se,{key:u},[p==="..."?(b(),v("span",Rv," ··· ")):(b(),v("button",{key:1,type:"button",onClick:d=>o(p),class:M(["flex h-8 min-w-[32px] items-center justify-center rounded-xl px-2 font-mono text-xs font-semibold transition-all duration-150 active:scale-95 cursor-pointer",n.modelValue===p?"bg-blue-600 text-white shadow-xs dark:bg-blue-600":"text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"])},T(p),11,Tv))],64))),128))]),i("button",{type:"button",disabled:n.modelValue>=n.totalPages,onClick:c[1]||(c[1]=p=>o(n.modelValue+1)),class:"flex h-8 w-8 items-center justify-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all active:scale-90 cursor-pointer",title:"下一页"},[w(C(In),{class:"h-4 w-4"})],8,Pv)]),n.showSlider&&n.totalPages>3?(b(),v("div",Ev,[w(C(kp),{class:"h-3 w-3 text-zinc-400 shrink-0"}),c[2]||(c[2]=i("span",{class:"font-mono text-[10px] text-zinc-400 shrink-0"},"P1",-1)),i("input",{type:"range",min:1,max:n.totalPages,value:n.modelValue,onInput:l,class:"h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-blue-600 dark:bg-zinc-800"},null,40,Fv),i("span",Lv,"P"+T(n.totalPages),1),i("span",Ov,T(n.modelValue)+"/"+T(n.totalPages),1)])):re("",!0)],2))}}),Dv=["title"],jv=["width","height"],Bv=["cx","cy","r","stroke-width"],Nv=["cx","cy","r","stroke-width","stroke-dasharray","stroke-dashoffset"],Hv={class:"relative z-10 flex flex-col items-center justify-center text-zinc-700 dark:text-zinc-200 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"},Uv={class:"font-mono text-[9px] font-extrabold leading-none mt-0.5"},qo=ie({__name:"CircularProgressNav",props:{progress:{},size:{default:56},strokeWidth:{default:4},icon:{},tooltip:{},class:{}},emits:["click"],setup(e,{emit:t}){const n=e,r=t,o=ce(()=>n.size/2),s=ce(()=>o.value-n.strokeWidth),l=ce(()=>2*Math.PI*s.value),a=ce(()=>{const p=Math.min(Math.max(n.progress,0),100);return l.value-p/100*l.value});function c(){r("click")}return(p,u)=>(b(),v("button",{type:"button",onClick:c,title:n.tooltip||`阅读/滚动进度: ${Math.round(n.progress)}%`,class:M(C(pe)("group relative inline-flex items-center justify-center rounded-full bg-white/90 p-1 shadow-md shadow-black/5 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 dark:bg-zinc-900/90 dark:shadow-black/20 cursor-pointer outline-none focus:outline-none ring-0",n.class)),style:me({width:`${n.size}px`,height:`${n.size}px`})},[(b(),v("svg",{width:n.size,height:n.size,class:"absolute inset-0 -rotate-90 pointer-events-none"},[i("circle",{cx:o.value,cy:o.value,r:s.value,fill:"transparent",stroke:"currentColor","stroke-width":n.strokeWidth,class:"text-zinc-200/80 dark:text-zinc-800"},null,8,Bv),i("circle",{cx:o.value,cy:o.value,r:s.value,fill:"transparent",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-dasharray":l.value,"stroke-dashoffset":a.value,class:"text-blue-600 dark:text-blue-500 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"},null,8,Nv)],8,jv)),i("div",Hv,[(b(),fe(Je(n.icon||C(Fl)),{class:"h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"})),i("span",Uv,T(Math.round(n.progress))+"% ",1)])],14,Dv))}}),Gv={class:"relative h-full w-full overflow-hidden rounded-2xl p-[1.5px]"},qv={class:"relative z-10 h-full w-full rounded-[14.5px] bg-white p-6 backdrop-blur-xl transition-colors duration-300 dark:bg-zinc-950"},Wv=ie({__name:"GlowingCard",props:{glowColor:{default:"conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)"},duration:{default:4},blur:{default:20},hoverOnly:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=ce(()=>`${t.duration}s`),r=ce(()=>`${t.blur}px`);return(o,s)=>(b(),v("div",{class:M(C(pe)("group relative rounded-2xl transition-all duration-300",t.class))},[i("div",{class:M(["pointer-events-none absolute -inset-1 rounded-2xl opacity-40 transition-opacity duration-500 overflow-hidden",t.hoverOnly?"opacity-0 group-hover:opacity-60":"opacity-40"]),style:me({filter:`blur(${r.value})`})},[i("div",{class:"glow-rotator absolute left-1/2 top-1/2 h-[350%] w-[350%]",style:me({background:t.glowColor,animationDuration:n.value})},null,4)],6),i("div",Gv,[i("div",{class:M(["glow-rotator pointer-events-none absolute left-1/2 top-1/2 h-[350%] w-[350%]",t.hoverOnly?"opacity-0 group-hover:opacity-100":"opacity-100"]),style:me({background:t.glowColor,animationDuration:n.value})},null,6),i("div",qv,[We(o.$slots,"default",{},void 0,!0)])])],2))}}),ca=je(Wv,[["__scopeId","data-v-0f2ee4a3"]]),Xv={key:0,class:"pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/40"},Kv={class:"relative z-10"},da=ie({__name:"GlassCard",props:{blur:{default:16},saturation:{default:180},borderGlow:{type:Boolean,default:!0},interactive:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=ce(()=>({backdropFilter:`blur(${t.blur}px) saturate(${t.saturation}%)`,WebkitBackdropFilter:`blur(${t.blur}px) saturate(${t.saturation}%)`}));return(r,o)=>(b(),v("div",{class:M(C(pe)("group relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-black/30",t.interactive&&"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-2xl hover:border-white/40 dark:hover:border-white/20",t.class)),style:me(n.value)},[t.borderGlow?(b(),v("div",Xv)):re("",!0),o[0]||(o[0]=i("div",{class:"pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60 dark:from-white/10 dark:opacity-30"},null,-1)),i("div",Kv,[We(r.$slots,"default")])],6))}}),Yv={class:"relative z-10"},ua=ie({__name:"SpotlightCard",props:{spotlightColor:{default:"rgba(59, 130, 246, 0.15)"},spotlightRadius:{default:320},showBorderSpotlight:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=F(null),r=F({x:-1e3,y:-1e3}),o=F(!1);function s(u){if(!n.value)return;const d=n.value.getBoundingClientRect();r.value={x:u.clientX-d.left,y:u.clientY-d.top}}function l(){o.value=!0}function a(){o.value=!1,r.value={x:-1e3,y:-1e3}}const c=ce(()=>({background:`radial-gradient(${t.spotlightRadius}px circle at ${r.value.x}px ${r.value.y}px, ${t.spotlightColor}, transparent 80%)`})),p=ce(()=>({background:`radial-gradient(${t.spotlightRadius*.75}px circle at ${r.value.x}px ${r.value.y}px, rgba(59, 130, 246, 0.45), transparent 70%)`}));return(u,d)=>(b(),v("div",{ref_key:"cardRef",ref:n,onMousemove:s,onMouseenter:l,onMouseleave:a,class:M(C(pe)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950",t.class))},[t.showBorderSpotlight?(b(),v("div",{key:0,class:M(["pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300",o.value&&"opacity-100"]),style:me(p.value)},null,6)):re("",!0),i("div",{class:M(["pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",o.value&&"opacity-100"]),style:me(c.value)},null,6),i("div",Yv,[We(u.$slots,"default")])],34))}}),Zv={class:"relative z-10 [transform-style:preserve-3d]"},Jv=ie({__name:"TiltCard",props:{maxTilt:{default:15},perspective:{default:1e3},glare:{type:Boolean,default:!0},scale:{default:1.03},class:{}},setup(e){const t=e,n=F(null),r=F(0),o=F(0),s=F(!1),l=F({x:50,y:50});function a(f){if(!n.value)return;const m=n.value.getBoundingClientRect(),z=f.clientX-m.left,y=f.clientY-m.top,S=m.width/2,I=m.height/2,x=(z-S)/S,_=(y-I)/I;r.value=-_*t.maxTilt,o.value=x*t.maxTilt,l.value={x:z/m.width*100,y:y/m.height*100}}function c(){s.value=!0}function p(){s.value=!1,r.value=0,o.value=0}const u=ce(()=>s.value?{transform:`perspective(${t.perspective}px) rotateX(${r.value.toFixed(2)}deg) rotateY(${o.value.toFixed(2)}deg) scale3d(${t.scale}, ${t.scale}, ${t.scale})`,transition:"transform 0.1s ease-out"}:{transform:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:"transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"}),d=ce(()=>({background:`radial-gradient(circle at ${l.value.x}% ${l.value.y}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%)`}));return(f,m)=>(b(),v("div",{ref_key:"cardRef",ref:n,onMousemove:a,onMouseenter:c,onMouseleave:p,class:M(C(pe)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xl transition-shadow duration-300 dark:border-zinc-800 dark:bg-zinc-950 select-none",s.value&&"shadow-2xl shadow-blue-500/10",t.class)),style:me(u.value)},[t.glare?(b(),v("div",{key:0,class:M(["pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-300",s.value&&"opacity-100"]),style:me(d.value)},null,6)):re("",!0),i("div",Zv,[We(f.$slots,"default")])],38))}}),Qv={class:"relative h-[240px] w-full max-w-md sm:h-[260px]"},e1=["onPointerdown","onPointermove","onPointerup","onPointercancel"],t1={class:"flex items-center justify-between mb-4"},n1={class:"font-mono text-xs text-zinc-400"},r1={class:"text-base font-bold tracking-tight text-zinc-900 dark:text-white line-clamp-2"},o1={key:0,class:"mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3"},s1={key:1,class:"mt-6 flex items-center gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800/60"},i1={class:"h-6 w-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold"},a1={class:"text-xs font-medium text-zinc-600 dark:text-zinc-300"},l1={class:"mt-6 flex items-center gap-4"},c1=ie({__name:"CardStack",props:{items:{},maxVisible:{default:3},class:{}},emits:["change","swipe"],setup(e,{emit:t}){const n=e,r=t,o=F(0),s=F(!1),l=F({x:0,y:0}),a=F({x:0,y:0}),c=ce(()=>{const y=n.items.length;if(y===0)return[];const S=[],I=Math.min(n.maxVisible,y);for(let x=0;x<I;x++){const _=(o.value+x)%y;S.push({item:n.items[_],originalIndex:_,stackOrder:x})}return S});function p(){if(n.items.length<=1)return;const y=n.items[o.value];r("swipe",y,"right"),o.value=(o.value+1)%n.items.length,r("change",n.items[o.value])}function u(){n.items.length<=1||(o.value=(o.value-1+n.items.length)%n.items.length,r("change",n.items[o.value]))}function d(){o.value=0}function f(y){s.value=!0,a.value={x:y.clientX,y:y.clientY},l.value={x:0,y:0},y.target.setPointerCapture(y.pointerId)}function m(y){s.value&&(l.value={x:y.clientX-a.value.x,y:y.clientY-a.value.y})}function z(y){if(!s.value)return;s.value=!1;const S=80;if(l.value.x>S)p();else if(l.value.x<-S){const I=n.items[o.value];r("swipe",I,"left"),o.value=(o.value+1)%n.items.length,r("change",n.items[o.value])}l.value={x:0,y:0}}return(y,S)=>(b(),v("div",{class:M(C(pe)("relative flex flex-col items-center select-none",n.class))},[i("div",Qv,[(b(!0),v(se,null,we(c.value,I=>(b(),v("div",{key:I.item.id,class:M(["absolute inset-0 rounded-2xl border p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",[I.stackOrder===0?"cursor-grab active:cursor-grabbing border-zinc-200/90 bg-white shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900 shadow-black/5 dark:shadow-black/30":"pointer-events-none border-zinc-200/50 bg-white/90 shadow-md dark:border-zinc-800/50 dark:bg-zinc-900/80"]]),style:me({zIndex:n.maxVisible-I.stackOrder,transform:I.stackOrder===0&&s.value?`translate3d(${l.value.x}px, ${l.value.y*.2}px, 0) rotate(${l.value.x*.06}deg)`:`translate3d(0, -${I.stackOrder*12}px, -${I.stackOrder*20}px) scale(${1-I.stackOrder*.05})`,opacity:1-I.stackOrder*.15}),onPointerdown:x=>I.stackOrder===0?f(x):void 0,onPointermove:x=>I.stackOrder===0?m(x):void 0,onPointerup:x=>I.stackOrder===0?z():void 0,onPointercancel:x=>I.stackOrder===0?z():void 0},[i("div",t1,[I.item.tag?(b(),v("span",{key:0,class:M(["rounded-full px-2.5 py-0.5 text-[11px] font-bold",I.item.color||"bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"])},T(I.item.tag),3)):re("",!0),i("span",n1," #"+T(I.originalIndex+1)+" / "+T(n.items.length),1)]),i("h4",r1,T(I.item.title),1),I.item.description?(b(),v("p",o1,T(I.item.description),1)):re("",!0),I.item.author?(b(),v("div",s1,[i("div",i1,T(I.item.author.charAt(0)),1),i("span",a1,T(I.item.author),1)])):re("",!0)],46,e1))),128))]),i("div",l1,[i("button",{type:"button",onClick:u,class:"flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer outline-none focus:outline-none ring-0",title:"上一张卡片"},[w(C(Ll),{class:"h-4 w-4"})]),i("button",{type:"button",onClick:d,class:"flex h-8 px-3 items-center justify-center gap-1.5 rounded-full border border-zinc-200 bg-white text-xs font-mono text-zinc-500 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer outline-none focus:outline-none ring-0",title:"重置堆叠"},[w(C(Bl),{class:"h-3 w-3"}),S[0]||(S[0]=i("span",null,"重置",-1))]),i("button",{type:"button",onClick:p,class:"flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer outline-none focus:outline-none ring-0",title:"下一张卡片（或向右划动）"},[w(C(In),{class:"h-4 w-4"})])])],2))}}),d1={class:"pointer-events-none absolute h-0 w-0"},u1=["id"],p1={class:"relative z-10"},f1=ie({__name:"NoiseCard",props:{gradient:{default:"linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))"},grainOpacity:{default:.15},animated:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=uo(),r=ce(()=>`noise-filter-${n}`);return(o,s)=>(b(),v("div",{class:M(C(pe)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-xl dark:border-zinc-800/80 dark:bg-zinc-950/80",t.class))},[i("div",{class:"pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-100",style:me({background:t.gradient})},null,4),(b(),v("svg",d1,[i("defs",null,[i("filter",{id:r.value,x:"0%",y:"0%",width:"100%",height:"100%"},[...s[0]||(s[0]=[i("feTurbulence",{type:"fractalNoise",baseFrequency:"0.75",numOctaves:"3",stitchTiles:"stitch"},null,-1),i("feColorMatrix",{type:"saturate",values:"0"},null,-1)])],8,u1)])])),i("div",{class:M(["pointer-events-none absolute -inset-[100%] transition-opacity duration-300",t.animated&&"animate-noise"]),style:me({filter:`url(#${r.value})`,opacity:t.grainOpacity})},null,6),s[1]||(s[1]=i("div",{class:"pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/20"},null,-1)),i("div",p1,[We(o.$slots,"default",{},void 0,!0)])],2))}}),pa=je(f1,[["__scopeId","data-v-3563e1d3"]]),m1={class:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"},b1={class:"flex flex-col md:flex-row gap-8"},g1={class:"w-full md:w-64 shrink-0"},h1={class:"sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-xs backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70"},x1={class:"mb-3 px-2 flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider"},v1={class:"rounded bg-blue-100 dark:bg-blue-950/80 px-1.5 py-0.2 text-[10px] text-blue-600 dark:text-blue-400 font-bold"},y1={class:"space-y-4"},w1={class:"flex items-center justify-between px-2 py-1 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"},k1={class:"flex items-center gap-1.5"},z1={class:"text-zinc-800 dark:text-zinc-200 font-bold"},_1={class:"rounded bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.2 text-[9px] font-mono text-zinc-500 font-bold"},C1={class:"space-y-0.5"},S1={class:"truncate"},I1={class:"mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 px-2"},A1={class:"flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100"},M1={class:"min-w-0 flex-1"},$1={class:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white mb-3 shadow-md shadow-blue-500/20"},R1={key:1,class:"w-full max-w-2xl"},T1={class:"flex h-full flex-col items-center justify-center p-6 text-center"},P1={key:5,class:"flex flex-col items-center gap-6 py-8"},E1={class:"text-center"},F1={class:"text-center mt-2"},L1={key:6,class:"flex flex-wrap items-center justify-center gap-4 py-8"},O1={class:"relative z-10 flex items-center justify-between"},V1={class:"relative z-10 flex flex-col items-center gap-3"},D1={class:"flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30"},j1={key:10,class:"grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-3xl py-6"},B1={class:"inline-flex items-baseline justify-center text-sky-500 dark:text-sky-400"},N1={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},H1={class:"inline-flex items-baseline justify-center text-indigo-500 dark:text-indigo-400"},U1={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},G1={class:"inline-flex items-baseline justify-center text-emerald-500 dark:text-emerald-400"},q1={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},W1={key:12,class:"w-full"},X1={class:"relative z-10 text-center"},K1={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400 mb-3"},Y1={class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/30 text-white"},Z1={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-sky-500"},J1={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-emerald-500"},Q1={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-indigo-500"},ey={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-amber-500"},ty={class:"w-full max-w-xl h-72"},ny={class:"flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white/80 p-1 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 shadow-xs"},ry=["onClick"],oy={class:"w-full max-w-xl"},sy={class:"w-full max-w-xl"},iy={class:"w-full max-w-xl"},ay={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-4 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},ly={class:"mt-1 text-sm font-bold text-blue-600 dark:text-blue-400 font-mono"},cy={class:"flex flex-wrap items-center justify-center gap-4"},dy={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},uy={key:0,class:"text-xs text-zinc-400 italic"},py={key:1,class:"space-y-1"},fy={class:"flex flex-wrap items-center justify-center gap-4"},my={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},by={key:0,class:"text-xs text-zinc-400 italic"},gy={key:1,class:"space-y-1"},hy={class:"flex flex-wrap items-center justify-center gap-8"},xy={class:"flex flex-col items-center gap-2"},vy={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},yy={class:"text-xs font-mono text-zinc-500 font-bold"},wy={class:"flex flex-col items-center gap-2"},ky={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},zy={class:"text-xs font-mono text-zinc-500 font-bold"},_y={class:"flex flex-col items-center gap-2"},Cy={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Sy={class:"text-xs font-mono text-zinc-500 font-bold"},Iy={class:"flex flex-wrap items-center justify-center gap-3"},Ay={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2.5 text-xs font-mono text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},My={class:"font-bold text-blue-600 dark:text-blue-400"},$y={class:"flex flex-wrap items-center justify-center gap-6"},Ry={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},Ty={class:"text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold"},Py={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Ey={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Fy={class:"flex flex-wrap items-center justify-center gap-4"},Ly={class:"flex items-center justify-center p-4"},Oy={class:"w-full max-w-sm"},Vy={class:"w-full max-w-md"},Dy={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},jy={class:"font-bold text-blue-600 dark:text-blue-400"},By={class:"w-full max-w-sm"},Ny={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Hy={class:"font-bold text-blue-600 dark:text-blue-400"},Uy={class:"font-bold text-zinc-900 dark:text-white"},Gy={class:"w-full max-w-md"},qy={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Wy={class:"font-bold text-blue-600 dark:text-blue-400"},Xy={class:"w-full max-w-lg"},Ky={class:"flex flex-col items-center gap-4"},Yy={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Zy={class:"font-bold text-blue-600 dark:text-blue-400"},Jy={class:"w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Qy={class:"w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},ew={class:"text-center"},tw={class:"mt-2 text-xs font-mono text-blue-600 dark:text-blue-400"},nw={class:"absolute bottom-8 right-10 z-20"},rw={class:"w-full flex justify-center"},ow={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},sw={class:"font-bold text-blue-600 dark:text-blue-400"},iw={class:"w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-center gap-4"},aw={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},lw={class:"font-bold text-blue-600 dark:text-blue-400"},cw={class:"flex items-center gap-8"},dw={class:"flex items-center gap-3"},uw={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},pw={class:"font-bold text-blue-600 dark:text-blue-400"},fw={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},mw={class:"flex items-start gap-3.5"},bw={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400"},gw={class:"flex items-start gap-3.5"},hw={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400"},xw={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl relative z-10"},vw={class:"flex items-start gap-3.5"},yw={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/40 text-blue-600 dark:bg-white/10 dark:text-blue-400 shadow-xs"},ww={class:"flex items-start gap-3.5"},kw={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/40 text-purple-600 dark:bg-white/10 dark:text-purple-400 shadow-xs"},zw={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},_w={class:"flex items-start gap-3.5"},Cw={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400"},Sw={class:"flex items-start gap-3.5"},Iw={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400"},Aw={class:"w-full max-w-sm flex justify-center"},Mw={class:"flex flex-col items-center text-center p-2 [transform-style:preserve-3d]"},$w={class:"flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 [transform:translateZ(40px)]"},Rw={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Tw={class:"font-bold text-blue-600 dark:text-blue-400"},Pw={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},Ew={class:"flex items-start gap-3.5"},Fw={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400"},Lw={class:"flex items-start gap-3.5"},Ow={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"},Vw=ie({__name:"DocsView",setup(e){const t=F(null),n=F(null),r=F(null),o=F(null),s=ef(),l=ce(()=>s.params.id||"border-beam"),a=ce(()=>rn.find(B=>B.id===l.value)||rn[0]);function c(B){switch(B){case"forms-inputs":return zp;case"tactile-actions":return vn;case"ai-native":return nr;case"interactive-nav":return Xn;case"space-3d":return or;case"borders-cards":return qt;case"kinetic-typography":return Me;default:return Me}}function p(B){return rn.filter(h=>h.suiteId===B)}const u=["OpenAI","Anthropic","Google","NVIDIA","DeepSeek","Vercel"],d=[{id:"home",label:"首页概览",icon:jl},{id:"explore",label:"模型广场",icon:Xn},{id:"agent",label:"AI 智能体",icon:Me},{id:"files",label:"知识库",icon:pp},{id:"notice",label:"消息通知",icon:ap},{id:"settings",label:"偏好设置",icon:wp}],f=F("thinking"),m={thinking:"正在多模态解构视觉空间坐标与贝塞尔插值参数...",running:"并行编译并打包 Production Motion Primitives...",tool_call:"调用 Playwright 真实无头浏览器验证 60fps 动效性能...",success:"全套 28 项动效原子组件按 6 大主题套件落地完成！",error:"检测到底层渲染管道异常，正在启动自愈补偿重试..."},z=F(""),y=F(!1),S=F("deepseek-r1");function I(B){y.value=!0,setTimeout(()=>{y.value=!1,z.value=""},2200)}const x=F("preview"),_=[{id:"preview",label:"实时预览",icon:Me},{id:"code",label:"组件源码",icon:rr,badge:"SFC"},{id:"api",label:"API 文档",icon:Kn},{id:"suites",label:"主题矩阵",icon:qt,badge:"6 大套件"}],A=F([]);function E(){A.value.unshift(`[${new Date().toLocaleTimeString()}] 触发长按蓄力物理确认：危险操作已执行！`),A.value.length>3&&A.value.pop()}const V=F([]);function U(){V.value.unshift(`[${new Date().toLocaleTimeString()}] 就地确认执行成功：数据库缓存集群已清空`),V.value.length>3&&V.value.pop()}const D=F(!1),j=F(!1),ne=F(!1),de=F(!0),W=F(!1),he=F(42),Re=F("尚未触发操作");function Oe(){Re.value=`[${new Date().toLocaleTimeString()}] 执行主操作：生产环境立即发布完成！`}function ve(B){Re.value=`[${new Date().toLocaleTimeString()}] 执行伴随动作：${B.label}`}const be=F(480),le=F(16),Te=F(85),Q=F("Aura$2026"),Be=F(6800),ze=F("CNY"),ot=F("13800138000"),Ve=F("CN"),_e=F(["Vue 3.5","TailwindCSS","Motion UI","Antigravity"]),ke=F("嗨 @左岚 (Zuǒ Lán) ，请审查关于全套动效原子组件库的重构方案！"),L=F("preview"),J=[{id:"preview",label:"实时渲染",icon:Me},{id:"code",label:"SFC 源码",icon:rr,badge:"Vue"},{id:"docs",label:"API 文档",icon:Kn},{id:"disabled",label:"锁定",disabled:!0}],G=[{label:"智能云控制台"},{label:"亚太东北节点 (东京)"},{label:"Kubernetes 集群"},{label:"核心 Pod 拓扑"},{label:"Aura UI 动效服务"}],oe=F("未触发操作"),g=[{id:"bot",label:"呼起智能体 Agent",icon:nr,color:"bg-purple-600",onClick:()=>{oe.value="已呼起 AI 智能体"}},{id:"sparkles",label:"生成动效代码",icon:Me,color:"bg-blue-600",onClick:()=>{oe.value="已生成动效代码"}},{id:"rocket",label:"全量编译部署",icon:Lr,color:"bg-emerald-600",onClick:()=>{oe.value="已执行全量编译部署"}}],k=[{id:"solutions",label:"解决方案",children:[{title:"AI Agent 交互引擎",desc:"模拟 Token 打字机与 R1 思考链路手风琴",icon:nr,badge:"爆款"},{title:"全景 3D 纵深矩阵",desc:"同心轨道公转、极光天灯与赛博复古网格",icon:or},{title:"流光卡片便当盒",desc:"无缝跑马流光边框与聚光灯 Bento 卡片",icon:qt}]},{id:"developers",label:"开发者生态",children:[{title:"Zero-Config 单文件",desc:"代码即用，单文件内聚无需配置 tailwind",icon:rr},{title:"TypeScript 完备",desc:"全量 Props、事件与插槽类型安全",icon:Kn}]}],$=F("未选择"),R=F(3),P=F(72);function N(){P.value=(P.value+15)%105}const q=[{id:1,title:"物理动效原子引擎",description:"专为 Vue 3 构建的高性能单文件动效，60fps 满帧运行，零黑盒依赖。",tag:"Core",author:"Aura Team"},{id:2,title:"零配置单文件拷贝",description:"无黑盒依赖，复制即用，代码全由你掌控，极简可扩展。",tag:"Architecture",author:"Zuǒ Lán"},{id:3,title:"全套对标 Arc UI",description:"包含 182 款组件与 109 款 Blocks 全套重构，设计规范一体化。",tag:"Ecosystem",author:"DeepMind"},{id:4,title:"高折射率物理质感",description:"亚克力磨砂、三维陀螺仪视差与全息反光遮罩，极致视觉体验。",tag:"Surfaces",author:"Aura UI"}],X=F("暂无划卡记录");function K(B,h){X.value=`已向 ${h==="left"?"← 左":"右 →"} 划走：${B.title}`}return(B,h)=>{const Z=yr("router-link");return b(),v("div",m1,[i("div",b1,[i("aside",g1,[i("div",h1,[i("div",x1,[h[26]||(h[26]=i("span",null,"主题套件矩阵",-1)),i("span",v1,T(C(ls).length)+" 大套件 · "+T(C(rn).length)+" 组件 ",1)]),i("div",y1,[(b(!0),v(se,null,we(C(ls),O=>(b(),v("div",{key:O.id,class:"space-y-1"},[i("div",w1,[i("div",k1,[(b(),fe(Je(c(O.id)),{class:"h-3.5 w-3.5 text-blue-500"})),i("span",z1,T(O.name),1)]),i("span",_1,T(p(O.id).length),1)]),i("nav",C1,[(b(!0),v(se,null,we(p(O.id),H=>(b(),fe(Z,{key:H.id,to:`/docs/${H.id}`,class:M(["flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium transition-colors",l.value===H.id?"bg-blue-600 text-white font-semibold shadow-xs":"text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"])},{default:Y(()=>[i("span",S1,T(H.name),1),i("span",{class:M(["text-[9px] rounded px-1.5 py-0.2 shrink-0 ml-1",l.value===H.id?"bg-blue-700/80 text-blue-100":"bg-zinc-100 dark:bg-zinc-900 text-zinc-400"])},T(H.category),3)]),_:2},1032,["to","class"]))),128))])]))),128))]),i("div",I1,[i("div",A1,[w(C(Kn),{class:"h-3.5 w-3.5 text-blue-500"}),h[27]||(h[27]=i("span",null,"基础依赖安装",-1))]),h[28]||(h[28]=i("p",{class:"mt-1 text-[11px] text-zinc-400"},"组件依赖轻量样式与工具库：",-1)),h[29]||(h[29]=i("div",{class:"mt-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-300 break-all select-all"}," npm i @vueuse/core clsx tailwind-merge ",-1))])])]),i("main",M1,[(b(),fe(ng,{key:a.value.id,title:a.value.title,description:a.value.description,"component-code":a.value.componentCode,"usage-code":a.value.usageCode,"component-filename":a.value.componentFilename,"props-list":a.value.propsList},{default:Y(({isDark:O})=>[a.value.id==="border-beam"?(b(),v("div",{key:0,class:M(["relative flex h-64 w-80 flex-col items-center justify-center rounded-2xl border p-6 shadow-md transition-colors duration-200",O?"border-zinc-800 bg-zinc-900 text-zinc-100 shadow-black/40":"border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/50"])},[i("div",$1,[w(C(Me),{class:"h-6 w-6"})]),i("h4",{class:M(["text-lg font-bold",O?"text-white":"text-zinc-900"])}," Border Beam Demo ",2),i("p",{class:M(["mt-1 text-center text-xs",O?"text-zinc-400":"text-zinc-500"])}," 流光平滑环绕圆角容器边缘 ",2),w(ms,{size:180,duration:8,"color-from":"#38bdf8","color-to":"#a855f7"})],2)):a.value.id==="bento-grid"?(b(),v("div",R1,[w(vc,{class:"auto-rows-[16rem]"},{default:Y(()=>[w(it,{name:"AI 向量引擎",description:"毫秒级生成多模态视觉理解",cta:"了解详情",href:"#",class:M(O?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900")},{icon:Y(()=>[w(C(Eo),{class:"h-5 w-5 text-blue-500"})]),_:1},8,["class"]),w(it,{name:"全球边缘节点加速",description:"降低网络抖动，就近命中就近计算",class:M(["md:col-span-2",O?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900"]),cta:"查看分布",href:"#"},{icon:Y(()=>[w(C(vn),{class:"h-5 w-5 text-amber-500"})]),_:1},8,["class"])]),_:2},1024)])):a.value.id==="interactive-particles"?(b(),v("div",{key:2,class:M(["relative h-[360px] w-full rounded-2xl border overflow-hidden transition-colors duration-200",O?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[w(wc,{quantity:60,"mouse-radius":120,"connect-lines":!0,color:O?"255, 255, 255":"59, 130, 246"},{default:Y(()=>[i("div",T1,[i("h3",{class:M(["text-2xl font-bold tracking-tight",O?"text-white":"text-zinc-900"])}," 移动光标体验引力感应 ",2),i("p",{class:M(["mt-2 text-xs",O?"text-zinc-400":"text-zinc-500"])}," Canvas 2D 60fps 满帧运行，动态引力排斥与光效连线 ",2)])]),_:2},1032,["color"])],2)):a.value.id==="retro-grid"?(b(),v("div",{key:3,class:M(["relative flex h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",O?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[i("span",{class:M(["z-10 text-4xl font-extrabold tracking-tighter",O?"text-white":"text-zinc-900"])}," Retro Synthwave Grid ",2),w(bs,{angle:65,"dark-line-color":"#334155","light-line-color":"#cbd5e1"})],2)):a.value.id==="dot-pattern"?(b(),v("div",{key:4,class:M(["relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border p-8 transition-colors duration-200",O?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[i("p",{class:M(["z-10 text-xl font-bold",O?"text-white":"text-zinc-900"])}," SVG 矢量波点底纹 (含发光聚光灯) ",2),w(yc,{width:18,height:18,cr:1.2,glow:!0})],2)):a.value.id==="shiny-text"?(b(),v("div",P1,[i("div",{class:M(["rounded-full border px-5 py-2 text-xs font-medium shadow-sm transition-colors",O?"border-zinc-800 bg-zinc-900/90 text-zinc-300":"border-zinc-200 bg-zinc-100 text-zinc-700"])},[h[30]||(h[30]=Ae(" ✨ ",-1)),w(ar,{text:"Aura UI v1.0 全新微光发布",duration:2.5})],2),i("div",E1,[w(ar,{text:"Next-Gen AI Intelligence",class:"text-4xl sm:text-5xl font-black tracking-tight",duration:2.5}),i("p",{class:M(["mt-2 text-xs sm:text-sm",O?"text-zinc-500":"text-zinc-400"])}," 持续流淌的宽幅金属微光，肉眼清晰可观赏，绝无突兀停滞 ",2)]),i("div",F1,[w(ar,{text:"Cyberpunk Motion Primitives",variant:"cyber",class:"text-3xl sm:text-4xl font-extrabold tracking-tight",duration:3}),i("p",{class:M(["mt-1 text-xs",O?"text-zinc-500":"text-zinc-400"])}," 赛博霓虹蓝紫粒子流光，高频荡漾 ",2)])])):a.value.id==="shimmer-button"?(b(),v("div",L1,[w(ir,{"shimmer-color":"#38bdf8"},{default:Y(()=>[h[31]||(h[31]=i("span",null,"立即获取代码",-1)),w(C(tr),{class:"h-4 w-4"})]),_:1}),w(ir,{"shimmer-color":"#ec4899","shimmer-duration":"3.5s"},{default:Y(()=>[...h[32]||(h[32]=[i("span",null,"Pink Shimmer",-1)])]),_:1})])):a.value.id==="marquee"?(b(),v("div",{key:7,class:M(["relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border py-6 transition-colors duration-200",O?"border-zinc-800 bg-black/60":"border-zinc-200 bg-zinc-50/80"])},[w(Or,{duration:20,"pause-on-hover":!0},{default:Y(()=>[(b(),v(se,null,we(u,H=>i("div",{key:H,class:M(["flex h-12 items-center justify-center rounded-xl border px-6 font-bold text-xs shadow-xs transition-colors duration-200",O?"border-zinc-800 bg-zinc-900 text-zinc-200":"border-zinc-200 bg-white text-zinc-800"])},T(H),3)),64))]),_:2},1024),i("div",{class:M(["pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r",O?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2),i("div",{class:M(["pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l",O?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2)],2)):a.value.id==="meteors"?(b(),v("div",{key:8,class:M(["relative flex h-80 w-full max-w-lg flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-2xl transition-colors duration-200",O?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-slate-900 text-white"])},[w(kc,{number:30}),i("div",O1,[h[33]||(h[33]=i("span",{class:"rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20"}," Meteor Shower ",-1)),w(C(Me),{class:"h-5 w-5 text-sky-400"})]),h[34]||(h[34]=i("div",{class:"relative z-10 space-y-2"},[i("h3",{class:"text-3xl font-black tracking-tight text-white"}," 赛博深空流星雨 "),i("p",{class:"text-xs text-zinc-400 leading-relaxed"}," 流星带有 50px 渐变光尾与随机延迟，全硬件加速流畅穿梭，卡片与 Hero 背景的氛围杀器。 ")],-1))],2)):a.value.id==="ripple"?(b(),v("div",{key:9,class:M(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",O?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[w(zc,{"main-circle-size":160,"num-circles":7}),i("div",V1,[i("div",D1,[w(C(Zr),{class:"h-7 w-7"})]),h[35]||(h[35]=i("div",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-mono text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300"}," AI 智能语音拾音中... ",-1))])],2)):a.value.id==="number-ticker"?(b(),v("div",j1,[i("div",{class:M(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",O?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[i("div",B1,[i("span",N1,[w(Vr,{value:99.99,"decimal-places":2})]),h[36]||(h[36]=i("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"%",-1))]),h[37]||(h[37]=i("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"SLA 生产高可用性",-1))],2),i("div",{class:M(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",O?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[i("div",H1,[i("span",U1,[w(Vr,{value:1e7})]),h[38]||(h[38]=i("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"+",-1))]),h[39]||(h[39]=i("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"每日处理 Token 数量",-1))],2),i("div",{class:M(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",O?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[i("div",G1,[i("span",q1,[w(Vr,{value:12})]),h[40]||(h[40]=i("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"ms",-1))]),h[41]||(h[41]=i("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"端到端流式推理延迟",-1))],2)])):a.value.id==="animated-beam"?(b(),v("div",{key:11,class:M(["relative flex h-72 w-full max-w-xl items-center justify-between px-12 rounded-2xl border transition-colors duration-200",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"]),ref_key:"beamContainerRef",ref:t},[i("div",{ref_key:"beamUserRef",ref:n,class:M(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",O?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[w(C(Gl),{class:"h-6 w-6 text-blue-500"})],2),i("div",{ref_key:"beamAiRef",ref:r,class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/40"},[w(C(Me),{class:"h-8 w-8"})],512),i("div",{ref_key:"beamDbRef",ref:o,class:M(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",O?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[w(C(as),{class:"h-6 w-6 text-indigo-500"})],2),w(Qr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.4},null,8,["container-ref","from-ref","to-ref"]),w(Qr,{"container-ref":t.value,"from-ref":r.value,"to-ref":o.value,duration:2.4,delay:.6},null,8,["container-ref","from-ref","to-ref"])],2)):a.value.id==="lamp-effect"?(b(),v("div",W1,[w(_c,{class:"min-h-[420px]"},{default:Y(()=>[...h[42]||(h[42]=[i("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-5xl font-black tracking-tight text-transparent"}," Next-Gen AI Platform ",-1),i("p",{class:"mt-3 max-w-md text-xs sm:text-sm text-slate-400"}," 双向极光天灯破晓而下，为旗舰级 AI 与 SaaS 官网赋予大模型发布会视觉。 ",-1)])]),_:1})])):a.value.id==="flickering-grid"?(b(),v("div",{key:13,class:M(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border p-6 transition-colors duration-200",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[w(Cc,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),i("div",X1,[i("div",K1,[w(C(El),{class:"h-3.5 w-3.5"}),h[43]||(h[43]=i("span",null,"Canvas 2D 智能矩阵",-1))]),i("h3",{class:M(["text-3xl font-black tracking-tight",O?"text-white":"text-zinc-900"])}," 呼吸噪波微光网格 ",2),i("p",{class:M(["mt-2 text-xs font-mono",O?"text-zinc-400":"text-zinc-500"])}," 微型粒子矩阵异步平滑呼吸闪烁，零 CPU 占用，极客感拉满 ",2)])],2)):a.value.id==="dock"?(b(),v("div",{key:14,class:M(["relative flex h-80 w-full items-end justify-center rounded-2xl border p-8 transition-colors duration-200",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[h[44]||(h[44]=i("div",{class:"absolute top-8 text-center"},[i("span",{class:"text-xs font-mono text-zinc-400"},"将鼠标在下方图标栏滑动，体验余弦高斯物理平滑放大与跟随 Tooltip")],-1)),w(ig,{items:d,"icon-size":44,"icon-magnification":68,"icon-distance":130})],2)):a.value.id==="orbit-logos"?(b(),v("div",{key:15,class:M(["relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Y1,[w(C(Me),{class:"h-8 w-8"})]),w(Rr,{radius:75,duration:16},{default:Y(()=>[i("div",Z1,[w(C(Eo),{class:"h-4.5 w-4.5"})])]),_:1}),w(Rr,{radius:75,duration:16,delay:8},{default:Y(()=>[i("div",J1,[w(C(vn),{class:"h-4.5 w-4.5"})])]),_:1}),w(Rr,{radius:135,duration:24,reverse:!0},{default:Y(()=>[i("div",Q1,[w(C(or),{class:"h-5 w-5"})])]),_:1}),w(Rr,{radius:135,duration:24,delay:12,reverse:!0},{default:Y(()=>[i("div",ey,[w(C(as),{class:"h-5 w-5"})])]),_:1})],2)):a.value.id==="image-compare"?(b(),v("div",{key:16,class:M(["flex flex-col items-center justify-center w-full p-4 rounded-2xl border transition-colors duration-200",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",ty,[w(hg,{"before-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=70&sat=-100","after-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=90","before-label":"原始黑白 (Raw)","after-label":"AI 智能全彩修复 (4K HDR)","initial-position":50,class:"h-full w-full shadow-2xl"})]),h[45]||(h[45]=i("p",{class:"mt-3 text-xs font-mono text-zinc-400"}," 按住中央手柄左右拖拽，体验基于 clip-path 视口裁切的双图前后对比 ",-1))],2)):a.value.id==="agent-status"?(b(),v("div",{key:17,class:M(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",ny,[(b(),v(se,null,we(["thinking","running","tool_call","success","error"],H=>i("button",{key:H,onClick:ye=>f.value=H,class:M(["rounded-lg px-3 py-1.5 text-xs font-semibold transition-all capitalize",f.value===H?"bg-blue-600 text-white shadow-xs":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},T(H),11,ry)),64))]),w(Fg,{status:f.value,"agent-name":"DeepSeek R1 / Aura Reasoning","current-task":m[f.value]},null,8,["status","current-task"]),h[46]||(h[46]=i("p",{class:"text-xs font-mono text-zinc-400"}," 点击上方状态快速体验脉冲光环与徽标切换；点击卡片任意位置展开执行轨迹清单 ",-1))],2)):a.value.id==="typewriter-terminal"?(b(),v("div",{key:18,class:M(["flex flex-col items-center justify-center w-full p-6 rounded-2xl border transition-colors duration-200",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",oy,[w(Yg,{title:"zsh - aura-orchestrator:~ (80x24)","typing-speed":32,loop:!0})])],2)):a.value.id==="prompt-input"?(b(),v("div",{key:19,class:M(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",sy,[w(dh,{modelValue:z.value,"onUpdate:modelValue":h[0]||(h[0]=H=>z.value=H),loading:y.value,"selected-model":S.value,"onUpdate:selectedModel":h[1]||(h[1]=H=>S.value=H),placeholder:"向 Aura AI 提问、生成高阶动效代码，或输入 / 触发 Agent...",onSubmit:I,onStop:h[2]||(h[2]=H=>y.value=!1)},null,8,["modelValue","loading","selected-model"])]),h[47]||(h[47]=i("p",{class:"text-xs font-mono text-zinc-400"}," 点击输入框体验聚焦顶部流光与高亮光晕，支持 Enter 发送、模拟 2.2s 思考生成态 ",-1))],2)):a.value.id==="thought-accordion"?(b(),v("div",{key:20,class:M(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",iy,[w(yh,{duration:"思考用时 8.2 秒",status:"complete","default-open":!0})]),h[48]||(h[48]=i("p",{class:"text-xs font-mono text-zinc-400"}," 对标 DeepSeek R1 / o1 思考链折叠机制，点击标题栏手风琴折叠收起，支持一键复制推演链路 ",-1))],2)):a.value.id==="fluid-tabs"?(b(),v("div",{key:21,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[w(kh,{modelValue:x.value,"onUpdate:modelValue":h[3]||(h[3]=H=>x.value=H),tabs:_},null,8,["modelValue"]),i("div",ay,[h[49]||(h[49]=i("div",{class:"text-xs font-mono text-zinc-500 dark:text-zinc-400"},"当前激活流体 Tab 项：",-1)),i("div",ly,T(x.value),1)]),h[50]||(h[50]=i("p",{class:"text-xs font-mono text-zinc-400"}," 鼠标在 Tab 间移动感受 Ghost 悬停幽灵胶囊；点击体验物理 Spring 平滑吸附 ",-1))],2)):a.value.id==="hold-to-confirm"?(b(),v("div",{key:22,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",cy,[w(No,{variant:"danger",label:"长按以销毁生产集群",holdingLabel:"危险！保持按住不放...",confirmedLabel:"集群销毁指令已执行！",duration:1200,onConfirm:E}),w(No,{variant:"warning",label:"长按重置 API 密钥",holdingLabel:"按住 1 秒重置...",confirmedLabel:"密钥已重置完成！",duration:1e3,onConfirm:E}),w(No,{variant:"primary",label:"长按以极速同步",holdingLabel:"保持以连接网关...",confirmedLabel:"多云同步完成！",duration:800,onConfirm:E})]),i("div",dy,[h[51]||(h[51]=i("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 操作监听回执 ",-1)),A.value.length===0?(b(),v("div",uy," 按住上方任一按钮体验蓄力进度条，松手即取消，蓄满 100% 触发回执 ")):(b(),v("div",py,[(b(!0),v(se,null,we(A.value,(H,ye)=>(b(),v("div",{key:ye,class:"text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold"},T(H),1))),128))]))]),h[52]||(h[52]=i("p",{class:"text-xs font-mono text-zinc-400"}," 具备 requestAnimationFrame 60fps 动态插值填充、松手平滑阻尼回退与成功态自动形变复位 ",-1))],2)):a.value.id==="confirm-morph"?(b(),v("div",{key:23,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",fy,[w(Ho,{label:"彻底清空 Redis 缓存","confirm-text":"确认清空","cancel-text":"取消",variant:"danger",onConfirm:U}),w(Ho,{label:"回滚至昨日版本","confirm-text":"确认回滚","cancel-text":"再想想",variant:"warning",onConfirm:U}),w(Ho,{label:"切换主从节点","confirm-text":"立即切换","cancel-text":"取消",variant:"primary",onConfirm:U})]),i("div",my,[h[53]||(h[53]=i("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 就地形变二次确认回执 ",-1)),V.value.length===0?(b(),v("div",by," 点击上方按钮原地分裂为确认和取消操作，零弹窗干扰心流 ")):(b(),v("div",gy,[(b(!0),v(se,null,we(V.value,(H,ye)=>(b(),v("div",{key:ye,class:"text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold"},T(H),1))),128))]))]),h[54]||(h[54]=i("p",{class:"text-xs font-mono text-zinc-400"}," 内联原地形变布局（Inline FLIP Transition），无需全局遮罩即可实现安全防误触 ",-1))],2)):a.value.id==="icon-morph"?(b(),v("div",{key:24,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",hy,[i("div",xy,[i("div",vy,[w(Uo,{modelValue:D.value,"onUpdate:modelValue":h[4]||(h[4]=H=>D.value=H),mode:"menu-close",size:28},null,8,["modelValue"])]),i("span",yy," Menu ↔ Close: "+T(D.value?"关闭":"展开"),1)]),i("div",wy,[i("div",ky,[w(Uo,{modelValue:j.value,"onUpdate:modelValue":h[5]||(h[5]=H=>j.value=H),mode:"play-pause",size:28},null,8,["modelValue"])]),i("span",zy," Play ↔ Pause: "+T(j.value?"播放中":"暂停中"),1)]),i("div",_y,[i("div",Cy,[w(Uo,{modelValue:ne.value,"onUpdate:modelValue":h[6]||(h[6]=H=>ne.value=H),mode:"plus-minus",size:28},null,8,["modelValue"])]),i("span",Sy," Plus ↔ Minus: "+T(ne.value?"已展开":"折叠"),1)])]),h[55]||(h[55]=i("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG 矢量几何坐标连续形变，硬件加速 60fps，零卡顿零抖动 ",-1))],2)):a.value.id==="action-button"?(b(),v("div",{key:25,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Iy,[w(Gn,{icon:C(hp),active:de.value,tooltip:"钉选在首屏导航",onClick:h[7]||(h[7]=H=>de.value=!de.value)},null,8,["icon","active"]),w(Gn,{label:"生成动效代码",icon:C(Me),badge:"AI",tooltip:"一键生成 Vue 动效原子代码",onClick:h[8]||(h[8]=H=>he.value++)},null,8,["icon"]),w(Gn,{icon:C(lp),active:W.value,tooltip:"收藏至组件集",onClick:h[9]||(h[9]=H=>W.value=!W.value)},null,8,["icon","active"]),w(Gn,{label:"大规格按钮",size:"lg",icon:C($i),tooltip:"上传打包产物"},null,8,["icon"]),w(Gn,{label:"禁用按钮",size:"sm",disabled:!0,tooltip:"当前权限不足"})]),i("div",Ay,[h[56]||(h[56]=Ae(" AI 生成点击计数：",-1)),i("span",My,T(he.value),1),h[57]||(h[57]=Ae(" 次 ",-1))]),h[58]||(h[58]=i("p",{class:"text-xs font-mono text-zinc-400"}," 配备精准物理弹簧缩放阻尼（active:scale-90）与微拟态悬停反馈 ",-1))],2)):a.value.id==="split-button"?(b(),v("div",{key:26,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",$y,[w(sa,{label:"立即发布到生产环境",icon:C(Lr),variant:"primary",onPrimaryClick:Oe,onSelect:ve},null,8,["icon"]),w(sa,{label:"导出代码包",icon:C($i),variant:"secondary",items:[{id:"zip",label:"下载 ZIP 压缩包",description:"包含全部 SFC 组件与 CSS 变量"},{id:"git",label:"推送到 GitHub PR",description:"自动分支并创建协同审查"},{id:"npm",label:"发布至私有 NPM",description:"生成统一 Package 包"}],onPrimaryClick:Oe,onSelect:ve},null,8,["icon"])]),i("div",Ry,[h[59]||(h[59]=i("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1"}," 分体按钮操作回执 ",-1)),i("div",Ty,T(Re.value),1)]),h[60]||(h[60]=i("p",{class:"text-xs font-mono text-zinc-400"}," 主操作与下拉伴随操作一体化，物理发丝分割线，自适应点击区域与弹簧菜单 ",-1))],2)):a.value.id==="reactions"?(b(),v("div",{key:27,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Py,[w(ia)]),i("div",Ey,[h[61]||(h[61]=i("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3"}," 自定义反应项展示： ",-1)),w(ia,{items:[{id:"vue",emoji:"💚",count:1024,active:!0},{id:"speed",emoji:"⚡",count:512,active:!1},{id:"magic",emoji:"✨",count:888,active:!0},{id:"100",emoji:"💯",count:99,active:!1}]})]),h[62]||(h[62]=i("p",{class:"text-xs font-mono text-zinc-400"}," 点击任一表情体验 Spring 弹簧弹性放大与实时翻滚计数，支持添加自定义表情 ",-1))],2)):a.value.id==="scrub-input"?(b(),v("div",{key:28,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Fy,[w(Go,{modelValue:be.value,"onUpdate:modelValue":h[10]||(h[10]=H=>be.value=H),label:"宽度 (W)",min:120,max:640,suffix:"px"},null,8,["modelValue"]),w(Go,{modelValue:le.value,"onUpdate:modelValue":h[11]||(h[11]=H=>le.value=H),label:"圆角 (R)",min:0,max:48,suffix:"px"},null,8,["modelValue"]),w(Go,{modelValue:Te.value,"onUpdate:modelValue":h[12]||(h[12]=H=>Te.value=H),label:"不透明度 (A)",min:10,max:100,suffix:"%"},null,8,["modelValue"])]),i("div",Ly,[i("div",{class:"flex h-24 items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-mono text-xs font-bold shadow-lg transition-all duration-75",style:me({width:`${be.value/2}px`,borderRadius:`${le.value}px`,opacity:Te.value/100})}," 实时微调形态: "+T(Math.round(be.value/2))+" × 96px ",5)]),h[63]||(h[63]=i("p",{class:"text-xs font-mono text-zinc-400"}," 按住 Label 左右横向拖动（按住 Shift 加速 10x，Alt 微调 0.1x），双击数值切换精准键盘输入 ",-1))],2)):a.value.id==="password-strength"?(b(),v("div",{key:29,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Oy,[w(ox,{modelValue:Q.value,"onUpdate:modelValue":h[13]||(h[13]=H=>Q.value=H)},null,8,["modelValue"])]),h[64]||(h[64]=i("p",{class:"text-xs font-mono text-zinc-400"}," 包含大写/小写/数字/特殊符号/长度 5 维动态校验，进度条平滑渐变与明暗文无缝切换 ",-1))],2)):a.value.id==="money-input"?(b(),v("div",{key:30,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Vy,[w(fx,{modelValue:Be.value,"onUpdate:modelValue":h[14]||(h[14]=H=>Be.value=H),currency:ze.value,"onUpdate:currency":h[15]||(h[15]=H=>ze.value=H)},null,8,["modelValue","currency"])]),i("div",Dy,[h[65]||(h[65]=Ae(" 底层双向绑定数据：",-1)),i("span",jy,T(ze.value)+" "+T(Be.value),1)]),h[66]||(h[66]=i("p",{class:"text-xs font-mono text-zinc-400"}," 金额过长时字号动态自适应缩放（text-4xl → text-xl），支持千分位格式化与一键药丸快捷填充 ",-1))],2)):a.value.id==="phone-input"?(b(),v("div",{key:31,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",By,[w(Sx,{modelValue:ot.value,"onUpdate:modelValue":h[16]||(h[16]=H=>ot.value=H),"country-code":Ve.value,"onUpdate:countryCode":h[17]||(h[17]=H=>Ve.value=H)},null,8,["modelValue","country-code"])]),i("div",Ny,[h[67]||(h[67]=Ae(" 选中地区：",-1)),i("span",Hy,T(Ve.value),1),h[68]||(h[68]=Ae(" · 输入号码：",-1)),i("span",Uy,T(ot.value||"(未输入)"),1)]),h[69]||(h[69]=i("p",{class:"text-xs font-mono text-zinc-400"}," 支持中国 (### #### ####)、美国 ((###) ###-####) 等多国区号格式自适应与完成态对勾反馈 ",-1))],2)):a.value.id==="tag-input"?(b(),v("div",{key:32,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Gy,[w(Tx,{modelValue:_e.value,"onUpdate:modelValue":h[18]||(h[18]=H=>_e.value=H),"max-tags":8},null,8,["modelValue"])]),i("div",qy,[h[70]||(h[70]=Ae(" 当前标签数组：",-1)),i("span",Wy,T(JSON.stringify(_e.value)),1)]),h[71]||(h[71]=i("p",{class:"text-xs font-mono text-zinc-400"}," 回车/逗号自动生成标签胶囊，退格键按序反向删除，配备弹性进退场动效与最大数量上限 ",-1))],2)):a.value.id==="mention-input"?(b(),v("div",{key:33,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Xy,[w(Xx,{modelValue:ke.value,"onUpdate:modelValue":h[19]||(h[19]=H=>ke.value=H)},null,8,["modelValue"])]),h[72]||(h[72]=i("p",{class:"text-xs font-mono text-zinc-400"}," 键入 @ 呼出团队成员与 AI 智能体候选菜单，支持键盘上下光标漫游与 Tab/Enter 高亮注入 ",-1))],2)):a.value.id==="segmented-control"?(b(),v("div",{key:34,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Ky,[w(aa,{modelValue:L.value,"onUpdate:modelValue":h[20]||(h[20]=H=>L.value=H),options:J,size:"md"},null,8,["modelValue"]),w(aa,{modelValue:L.value,"onUpdate:modelValue":h[21]||(h[21]=H=>L.value=H),options:[{id:"preview",label:"天"},{id:"code",label:"周"},{id:"docs",label:"月"}],size:"sm"},null,8,["modelValue"])]),i("div",Yy,[h[73]||(h[73]=Ae(" 当前激活项：",-1)),i("span",Zy,T(L.value),1)]),h[74]||(h[74]=i("p",{class:"text-xs font-mono text-zinc-400"}," iOS / macOS 风格物理弹簧滑块，支持左右方向键键盘导航与尺寸自适应 ",-1))],2)):a.value.id==="breadcrumb-trail"?(b(),v("div",{key:35,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Jy,[h[75]||(h[75]=i("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-4"}," 折叠模式（最大显示 3 项，中间自动收纳为浮层气泡）： ",-1)),w(la,{items:G,"max-items":3})]),i("div",Qy,[h[76]||(h[76]=i("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-4"}," 全展开模式： ",-1)),w(la,{items:G,"max-items":10})]),h[77]||(h[77]=i("p",{class:"text-xs font-mono text-zinc-400"}," 层级过深时自动将中间路径收纳为省略号，点击呼出扩散柔和阴影下拉浮层 ",-1))],2)):a.value.id==="floating-action-menu"?(b(),v("div",{key:36,class:M(["relative flex flex-col items-center justify-center w-full min-h-[380px] p-10 rounded-2xl border transition-colors duration-200 gap-6 overflow-hidden",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",ew,[h[78]||(h[78]=i("div",{class:"text-sm font-bold text-zinc-800 dark:text-zinc-100"}," 点击右下角浮动动作药丸（FAB）体验交错弹簧飞出 ",-1)),i("div",tw," 最新触发："+T(oe.value),1)]),i("div",nw,[w(bv,{actions:g,tooltip:"快捷动效与部署工具箱"})]),h[79]||(h[79]=i("p",{class:"text-xs font-mono text-zinc-400"}," 135° 顺滑旋转切换图标，子动作级联平滑缩放飞入，配备毛玻璃浮动标签 ",-1))],2)):a.value.id==="navbar-hover"?(b(),v("div",{key:37,class:M(["flex flex-col items-center justify-start w-full min-h-[380px] p-10 rounded-2xl border transition-colors duration-200 gap-8",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",rw,[w(Iv,{items:k,onSelect:h[22]||(h[22]=H=>$.value=H.title)})]),i("div",ow,[h[80]||(h[80]=Ae(" 选中的导航二级特性：",-1)),i("span",sw,T($.value),1)]),h[81]||(h[81]=i("p",{class:"text-xs font-mono text-zinc-400"}," 对标 Stripe / Vercel 巨型悬浮下拉菜单，顶部箭头与卡片自适应尺寸平滑跟随 ",-1))],2)):a.value.id==="pagination-slider"?(b(),v("div",{key:38,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",iw,[w(Vv,{modelValue:R.value,"onUpdate:modelValue":h[23]||(h[23]=H=>R.value=H),"total-pages":20,"show-slider":!0},null,8,["modelValue"])]),i("div",aw,[h[82]||(h[82]=Ae(" 当前激活页码：第 ",-1)),i("span",lw,T(R.value),1),h[83]||(h[83]=Ae(" 页 / 共 20 页 ",-1))]),h[84]||(h[84]=i("p",{class:"text-xs font-mono text-zinc-400"}," 传统分页按钮与触感快速拖动滑块合二为一，极大提升大跨度翻页效率 ",-1))],2)):a.value.id==="circular-progress-nav"?(b(),v("div",{key:39,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",cw,[w(qo,{progress:P.value,size:64,"stroke-width":5,onClick:N},null,8,["progress"]),w(qo,{progress:100,size:52,"stroke-width":4,tooltip:"进度已满"}),w(qo,{progress:35,size:48,"stroke-width":3.5,tooltip:"初始化 35%"})]),i("div",dw,[i("button",{type:"button",onClick:h[24]||(h[24]=H=>P.value=Math.max(0,P.value-10)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"}," -10% "),i("div",uw,[h[85]||(h[85]=Ae(" 当前进度：",-1)),i("span",pw,T(P.value)+"%",1)]),i("button",{type:"button",onClick:h[25]||(h[25]=H=>P.value=Math.min(100,P.value+10)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"}," +10% ")]),h[86]||(h[86]=i("p",{class:"text-xs font-mono text-zinc-400"}," SVG 矢量环形进度指示器，支持平滑 stroke-dashoffset 阻尼形变与微拟态按压 ",-1))],2)):a.value.id==="glowing-card"?(b(),v("div",{key:40,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",fw,[w(ca,{duration:4,blur:20,class:"w-full"},{default:Y(()=>[i("div",mw,[i("div",bw,[w(C(Me),{class:"h-5 w-5"})]),h[87]||(h[87]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"常驻流光卡片"),i("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 底层 360° 匀速旋转弥散光斑，顶层 1px 细微发丝发光轮廓贴合容器。 ")],-1))])]),_:1}),w(ca,{duration:3,blur:24,"hover-only":!0,"glow-color":"conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)",class:"w-full"},{default:Y(()=>[i("div",gw,[i("div",hw,[w(C(Lr),{class:"h-5 w-5"})]),h[88]||(h[88]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"悬停激发流光"),i("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 鼠标移入时瞬间唤醒炫彩流光外框，移出平滑消隐，极致节能。 ")],-1))])]),_:1})]),h[89]||(h[89]=i("p",{class:"text-xs font-mono text-zinc-400"}," 双层流光结构：底层空气感多层模糊扩散 + 顶层发丝剪裁遮罩 ",-1))],2)):a.value.id==="glass-card"?(b(),v("div",{key:41,class:M(["relative flex flex-col items-center justify-center w-full min-h-[360px] p-10 rounded-2xl border transition-colors duration-200 gap-6 overflow-hidden",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-100"])},[h[92]||(h[92]=i("div",{class:"absolute -top-10 -left-10 h-48 w-48 rounded-full bg-blue-500/30 blur-2xl pointer-events-none"},null,-1)),h[93]||(h[93]=i("div",{class:"absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-purple-500/30 blur-2xl pointer-events-none"},null,-1)),h[94]||(h[94]=i("div",{class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none"},null,-1)),i("div",xw,[w(da,{blur:16,saturation:180,class:"w-full"},{default:Y(()=>[i("div",vw,[i("div",yw,[w(C(qt),{class:"h-5 w-5"})]),h[90]||(h[90]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"磨砂亚克力玻璃"),i("p",{class:"mt-1 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed"}," 16px 硬件加速环境背板虚化，180% 鲜明色彩透光增益，顶部物理倒角高光线。 ")],-1))])]),_:1}),w(da,{blur:24,saturation:200,class:"w-full"},{default:Y(()=>[i("div",ww,[i("div",kw,[w(C(Eo),{class:"h-5 w-5"})]),h[91]||(h[91]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"微拟态浮升反馈"),i("p",{class:"mt-1 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed"}," 悬停触发 -translate-y-1 与多层柔和深色阴影扩展，质感高级灵动。 ")],-1))])]),_:1})]),h[95]||(h[95]=i("p",{class:"text-xs font-mono text-zinc-400 relative z-10"}," 双层背板折射滤镜 + 顶部高折射率物理反光发丝线，完美抗锯齿 ",-1))],2)):a.value.id==="spotlight-card"?(b(),v("div",{key:42,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",zw,[w(ua,{"spotlight-radius":280,"spotlight-color":"rgba(59, 130, 246, 0.18)",class:"w-full"},{default:Y(()=>[i("div",_w,[i("div",Cw,[w(C(vn),{class:"h-5 w-5"})]),h[96]||(h[96]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"极客蓝聚光灯"),i("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 鼠标在卡片上方滑行时，柔和径向聚光灯在卡片表面与 1px 发丝边框上同步聚焦漫射。 ")],-1))])]),_:1}),w(ua,{"spotlight-radius":280,"spotlight-color":"rgba(168, 85, 247, 0.18)",class:"w-full"},{default:Y(()=>[i("div",Sw,[i("div",Iw,[w(C(Xn),{class:"h-5 w-5"})]),h[97]||(h[97]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"幻境紫聚光灯"),i("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 边框与内表面联动感知光标相对坐标，移开卡片时光晕平滑消退。 ")],-1))])]),_:1})]),h[98]||(h[98]=i("p",{class:"text-xs font-mono text-zinc-400"}," 滑动光标在两张卡片间移动体验相对坐标实时动态漫反射追踪 ",-1))],2)):a.value.id==="tilt-card"?(b(),v("div",{key:43,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Aw,[w(Jv,{"max-tilt":16,perspective:1e3,glare:!0,class:"w-full"},{default:Y(()=>[i("div",Mw,[i("div",$w,[w(C(Xn),{class:"h-7 w-7"})]),h[99]||(h[99]=i("h4",{class:"mt-4 text-base font-bold text-zinc-900 dark:text-white [transform:translateZ(30px)]"}," 3D 视差空间陀螺仪 ",-1)),h[100]||(h[100]=i("p",{class:"mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed [transform:translateZ(20px)]"}," 光标在卡片内部移动时计算精确三维旋转量，卡片表面覆盖全息反光遮罩（Glare Sheen），图标具备悬浮纵深感。 ",-1)),h[101]||(h[101]=i("div",{class:"mt-4 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 [transform:translateZ(25px)]"}," 移入并晃动光标体验视差 ",-1))])]),_:1})]),h[102]||(h[102]=i("p",{class:"text-xs font-mono text-zinc-400"}," 基于 CSS 3D 变换 rotateX / rotateY + 动态全息反光层 + 子元素 translateZ 纵深 ",-1))],2)):a.value.id==="card-stack"?(b(),v("div",{key:44,class:M(["flex flex-col items-center justify-center w-full min-h-[420px] p-10 rounded-2xl border transition-colors duration-200 gap-6",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[w(c1,{items:q,"max-visible":3,onSwipe:K}),i("div",Rw,[h[103]||(h[103]=Ae(" 卡片划动监听：",-1)),i("span",Tw,T(X.value),1)]),h[104]||(h[104]=i("p",{class:"text-xs font-mono text-zinc-400"}," 按住第一张卡片左右拖动划走（带旋转与阻尼），或使用下方按钮翻阅卡片 ",-1))],2)):a.value.id==="noise-card"?(b(),v("div",{key:45,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",O?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[i("div",Pw,[w(pa,{gradient:"linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(147, 51, 234, 0.16))","grain-opacity":.14,animated:!0,class:"w-full"},{default:Y(()=>[i("div",Ew,[i("div",Fw,[w(C(up),{class:"h-5 w-5"})]),h[105]||(h[105]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"电影胶片噪点"),i("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 纯原生 SVG 分形噪点算法，微动态颗粒感赋予深色表面温润触感。 ")],-1))])]),_:1}),w(pa,{gradient:"linear-gradient(135deg, rgba(16, 185, 129, 0.16), rgba(245, 158, 11, 0.16))","grain-opacity":.16,animated:!0,class:"w-full"},{default:Y(()=>[i("div",Lw,[i("div",Ow,[w(C(Me),{class:"h-5 w-5"})]),h[106]||(h[106]=i("div",null,[i("h4",{class:"font-bold text-zinc-900 dark:text-white"},"极光破晓噪点"),i("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 绿橙渐变底色透过分形颗粒漫射，质感对标高端胶片暗房摄影美学。 ")],-1))])]),_:1})]),h[107]||(h[107]=i("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG feTurbulence 动态渲染分形噪点，0 外部图片依赖，体积超轻 ",-1))],2)):re("",!0)]),_:1},8,["title","description","component-code","usage-code","component-filename","props-list"]))])])])}}}),Dw=Q0({history:R0(),routes:[{path:"/",name:"home",component:Cb},{path:"/docs/:id?",name:"docs",component:Vw},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(e,t,n){return n||(e.name==="docs"&&t.name==="docs"?!1:{top:0})}}),Sc=tp(Wp);Sc.use(Dw);Sc.mount("#app");
