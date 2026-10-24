(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ys(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Se={},un=[],It=()=>{},Di=()=>!1,Br=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Nr=e=>e.startsWith("onUpdate:"),je=Object.assign,Zs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},jl=Object.prototype.hasOwnProperty,xe=(e,t)=>jl.call(e,t),se=Array.isArray,Jt=e=>rr(e)==="[object Map]",Cr=e=>rr(e)==="[object Set]",_o=e=>rr(e)==="[object Date]",ae=e=>typeof e=="function",$e=e=>typeof e=="string",vt=e=>typeof e=="symbol",we=e=>e!==null&&typeof e=="object",ji=e=>(we(e)||ae(e))&&ae(e.then)&&ae(e.catch),Bi=Object.prototype.toString,rr=e=>Bi.call(e),Bl=e=>rr(e).slice(8,-1),Ni=e=>rr(e)==="[object Object]",Js=e=>$e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,On=Ys(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Nl=/-\w/g,rt=Vr(e=>e.replace(Nl,t=>t.slice(1).toUpperCase())),Vl=/\B([A-Z])/g,hn=Vr(e=>e.replace(Vl,"-$1").toLowerCase()),Gr=Vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),ss=Vr(e=>e?`on${Gr(e)}`:""),Tt=(e,t)=>!Object.is(e,t),br=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Vi=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Qs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Gl=e=>{const t=$e(e)?Number(e):NaN;return isNaN(t)?e:t};let Co;const Hr=()=>Co||(Co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ve(e){if(se(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=$e(r)?Wl(r):Ve(r);if(s)for(const o in s)t[o]=s[o]}return t}else if($e(e)||we(e))return e}const Hl=/;(?![^(]*\))/g,Ul=/:([^]+)/,ql=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Wl(e){const t={};return e.replace(ql,n=>n.startsWith("/*")?"":n).split(Hl).forEach(n=>{if(n){const r=n.split(Ul);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function N(e){let t="";if($e(e))t=e;else if(se(e))for(let n=0;n<e.length;n++){const r=N(e[n]);r&&(t+=r+" ")}else if(we(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Kl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Xl=Ys(Kl);function Gi(e){return!!e||e===""}function Yl(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let s=0;r&&s<e.length;s++)r=Ur(e[s],t[s],n);return r}function So(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),s=new Uint8Array(r.length);for(const o of e){let i=-1;for(let a=0;a<r.length;a++)if(!s[a]&&Ur(o,r[a],n)){i=a;break}if(i<0)return!1;s[i]=1}return!0}function Zl(e,t,n){let r=Jt(e),s=Jt(t);if(r||s||(r=Cr(e),s=Cr(t),r||s))return r&&s?So(e,t,n):!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),p=t.hasOwnProperty(a);if(l&&!p||!l&&p||!Ur(e[a],t[a],n))return!1}return String(e)===String(t)}function Ao(e,t,n,r){n||(n=[new Map,new Map]);const[s,o]=n;if(s.has(e)||o.has(t))return s.get(e)===t&&o.get(t)===e;s.set(e,t),o.set(t,e);const i=r(e,t,n);return s.delete(e),o.delete(t),i}function Ur(e,t,n){if(e===t)return!0;let r=_o(e),s=_o(t);return r||s?r&&s?e.getTime()===t.getTime():!1:(r=vt(e),s=vt(t),r||s?e===t:(r=se(e),s=se(t),r||s?r&&s?Ao(e,t,n,Yl):!1:(r=we(e),s=we(t),r||s?!r||!s?!1:Ao(e,t,n,Zl):String(e)===String(t))))}const Hi=e=>!!(e&&e.__v_isRef===!0),Z=e=>$e(e)?e:e==null?"":se(e)||we(e)&&(e.toString===Bi||!ae(e.toString))?Hi(e)?Z(e.value):JSON.stringify(e,Ui,2):String(e),Ui=(e,t)=>Hi(t)?Ui(e,t.value):Jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],o)=>(n[os(r,o)+" =>"]=s,n),{})}:Cr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>os(n))}:vt(t)?os(t):we(t)&&!se(t)&&!Ni(t)?String(t):t,os=(e,t="")=>{var n;return vt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let We;class Jl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&We&&(We.active?(this.parent=We,this.index=(We.scopes||(We.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=We;try{return We=this,t()}finally{We=n}}}on(){++this._on===1&&(this.prevScope=We,We=this)}off(){if(this._on>0&&--this._on===0){if(We===this)We=this.prevScope;else{let t=We;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ql(){return We}let Re;const is=new WeakSet;class qi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,We&&(We.active?We.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,is.has(this)&&(is.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ki(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ro(this),Xi(this);const t=Re,n=bt;Re=this,bt=!0;try{return this.fn()}finally{Yi(this),Re=t,bt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)no(t);this.deps=this.depsTail=void 0,Ro(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?is.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cs(this)&&this.run()}get dirty(){return Cs(this)}}let Wi=0,Dn,jn;function Ki(e,t=!1){if(e.flags|=8,t){e.next=jn,jn=e;return}e.next=Dn,Dn=e}function eo(){Wi++}function to(){if(--Wi>0)return;if(jn){let t=jn;for(jn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Dn;){let t=Dn;for(Dn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Xi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Yi(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),no(r),ec(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Cs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Zi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Zi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===qn)||(e.globalVersion=qn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Cs(e))))return;e.flags|=2;const t=e.dep,n=Re,r=bt;Re=e,bt=!0;try{Xi(e);const s=e.fn(e._value);(t.version===0||Tt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Re=n,bt=r,Yi(e),e.flags&=-3}}function no(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)no(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ec(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let bt=!0;const Ji=[];function Et(){Ji.push(bt),bt=!1}function $t(){const e=Ji.pop();bt=e===void 0?!0:e}function Ro(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Re;Re=void 0;try{t()}finally{Re=n}}}let qn=0;class tc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ro{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Re||!bt||Re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Re)n=this.activeLink=new tc(Re,this),Re.deps?(n.prevDep=Re.depsTail,Re.depsTail.nextDep=n,Re.depsTail=n):Re.deps=Re.depsTail=n,Qi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Re.depsTail,n.nextDep=void 0,Re.depsTail.nextDep=n,Re.depsTail=n,Re.deps===n&&(Re.deps=r)}return n}trigger(t){this.version++,qn++,this.notify(t)}notify(t){eo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{to()}}}function Qi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Qi(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ss=new WeakMap,mn=Symbol(""),As=Symbol(""),Wn=Symbol("");function Ye(e,t,n){if(bt&&Re){let r=Ss.get(e);r||Ss.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new ro),s.map=r,s.key=n),s.track()}}function Vt(e,t,n,r,s,o){const i=Ss.get(e);if(!i){qn++;return}const a=l=>{l&&l.trigger()};if(eo(),t==="clear")i.forEach(a);else{const l=se(e),p=l&&Js(n);if(l&&n==="length"){const u=Number(r);i.forEach((c,m)=>{(m==="length"||m===Wn||!vt(m)&&m>=u)&&a(c)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),p&&a(i.get(Wn)),t){case"add":l?p&&a(i.get("length")):(a(i.get(mn)),Jt(e)&&a(i.get(As)));break;case"delete":l||(a(i.get(mn)),Jt(e)&&a(i.get(As)));break;case"set":Jt(e)&&a(i.get(mn));break}}to()}function bn(e){const t=be(e);return t===e||(Ye(t,"iterate",Wn),ut(e))?t:Ft(e)?Qt(e)?t.map(n=>en(pt(n))):t.map(en):t.map(pt)}function qr(e){return Ye(e=be(e),"iterate",Wn),e}function St(e,t){return Ft(e)?en(Qt(e)?pt(t):t):pt(t)}const nc={__proto__:null,[Symbol.iterator](){return as(this,Symbol.iterator,e=>St(this,e))},concat(...e){return bn(this).concat(...e.map(t=>se(t)?bn(t):t))},entries(){return as(this,"entries",e=>(e[1]=St(this,e[1]),e))},every(e,t){return Lt(this,"every",e,t,void 0,arguments)},filter(e,t){return Lt(this,"filter",e,t,n=>n.map(r=>St(this,r)),arguments)},find(e,t){return Lt(this,"find",e,t,n=>St(this,n),arguments)},findIndex(e,t){return Lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Lt(this,"findLast",e,t,n=>St(this,n),arguments)},findLastIndex(e,t){return Lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return ls(this,"includes",e)},indexOf(...e){return ls(this,"indexOf",e)},join(e){return bn(this).join(e)},lastIndexOf(...e){return ls(this,"lastIndexOf",e)},map(e,t){return Lt(this,"map",e,t,void 0,arguments)},pop(){return Tn(this,"pop")},push(...e){return Tn(this,"push",e)},reduce(e,...t){return Io(this,"reduce",e,t)},reduceRight(e,...t){return Io(this,"reduceRight",e,t)},shift(){return Tn(this,"shift")},some(e,t){return Lt(this,"some",e,t,void 0,arguments)},splice(...e){return Tn(this,"splice",e)},toReversed(){return bn(this).toReversed()},toSorted(e){return bn(this).toSorted(e)},toSpliced(...e){return bn(this).toSpliced(...e)},unshift(...e){return Tn(this,"unshift",e)},values(){return as(this,"values",e=>St(this,e))}};function as(e,t,n){const r=qr(e),s=r[t],o=s.call(r);if(r!==e&&!ut(e)){if(o[Symbol.toStringTag]==="Array Iterator"){const i=Object.create(Object.getPrototypeOf(o));return i.next=()=>To(o.next(),n),s!==ea[t]&&Object.defineProperties(i,{return:{get(){const a=o.return;return typeof a=="function"?a.bind(o):a}},throw:{get(){const a=o.throw;return typeof a=="function"?a.bind(o):a}}}),i}o._next=o.next,o.next=()=>To(o._next(),n)}return o}function To(e,t){return e.done||(e.value=t(e.value)),e}const ea=Array.prototype;function Lt(e,t,n,r,s,o){const i=qr(e),a=i!==e&&!ut(e),l=i[t];if(l!==ea[t]){const c=l.apply(e,o);return a?pt(c):c}let p=n;i!==e&&(a?p=function(c,m){return n.call(this,St(e,c),m,e)}:n.length>2&&(p=function(c,m){return n.call(this,c,m,e)}));const u=l.call(i,p,r);return a&&s?s(u):u}function Io(e,t,n,r){const s=qr(e),o=s!==e&&!ut(e);let i=n,a=!1;s!==e&&(o?(a=r.length===0,i=function(p,u,c){return a&&(a=!1,p=St(e,p)),n.call(this,p,St(e,u),c,e)}):n.length>3&&(i=function(p,u,c){return n.call(this,p,u,c,e)}));const l=s[t](i,...r);return a?St(e,l):l}function ls(e,t,n){const r=be(e);Ye(r,"iterate",Wn);const s=r[t](...n);return(s===-1||s===!1)&&io(n[0])?(n[0]=be(n[0]),r[t](...n)):s}function Tn(e,t,n=[]){Et(),eo();const r=be(e)[t].apply(e,n);return to(),$t(),r}const rc=Ys("__proto__,__v_isRef,__isVue"),ta=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vt));function sc(e){vt(e)||(e=String(e));const t=be(this);return Ye(t,"has",e),t.hasOwnProperty(e)}class na{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?mc:ia:o?oa:sa).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=se(t);if(!s){let l;if(i&&(l=nc[n]))return l;if(n==="hasOwnProperty")return sc}const a=Reflect.get(t,n,Je(t)?t:r);if((vt(n)?ta.has(n):rc(n))||(s||Ye(t,"get",n),o))return a;if(Je(a)){const l=i&&Js(n)?a:a.value;return s&&we(l)?Ts(l):l}return we(a)?s?Ts(a):Wr(a):a}}class ra extends na{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];const i=se(t)&&Js(n);if(!this._isShallow){const p=Ft(o);if(!ut(r)&&!Ft(r)&&(o=be(o),r=be(r)),!i&&Je(o)&&!Je(r))return p||(o.value=r),!0}const a=i?Number(n)<t.length:xe(t,n),l=Reflect.set(t,n,r,Je(t)?t:s);return t===be(s)&&l&&(a?Tt(r,o)&&Vt(t,"set",n,r):Vt(t,"add",n,r)),l}deleteProperty(t,n){const r=xe(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Vt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!vt(n)||!ta.has(n))&&Ye(t,"has",n),r}ownKeys(t){return Ye(t,"iterate",se(t)?"length":mn),Reflect.ownKeys(t)}}class oc extends na{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ic=new ra,ac=new oc,lc=new ra(!0);const Rs=e=>e,ar=e=>Reflect.getPrototypeOf(e);function cc(e,t,n){return function(...r){const s=this.__v_raw,o=be(s),i=Jt(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,p=s[e](...r),u=n?Rs:t?en:pt;return!t&&Ye(o,"iterate",l?As:mn),je(Object.create(p),{next(){const{value:c,done:m}=p.next();return m?{value:c,done:m}:{value:a?[u(c[0]),u(c[1])]:u(c),done:m}}})}}function lr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function dc(e,t){const n={get(s){const o=this.__v_raw,i=be(o),a=be(s);e||(Tt(s,a)&&Ye(i,"get",s),Ye(i,"get",a));const{has:l}=ar(i),p=t?Rs:e?en:pt;if(l.call(i,s))return p(o.get(s));if(l.call(i,a))return p(o.get(a));o!==i&&o.get(s)},get size(){const s=this.__v_raw;return!e&&Ye(be(s),"iterate",mn),s.size},has(s){const o=this.__v_raw,i=be(o),a=be(s);return e||(Tt(s,a)&&Ye(i,"has",s),Ye(i,"has",a)),s===a?o.has(s):o.has(s)||o.has(a)},forEach(s,o){const i=this,a=i.__v_raw,l=be(a),p=t?Rs:e?en:pt;return!e&&Ye(l,"iterate",mn),a.forEach((u,c)=>s.call(o,p(u),p(c),i))}};return je(n,e?{add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear")}:{add(s){const o=be(this),i=ar(o),a=be(s),l=!t&&!ut(s)&&!Ft(s)?a:s;return i.has.call(o,l)||Tt(s,l)&&i.has.call(o,s)||Tt(a,l)&&i.has.call(o,a)||(o.add(l),Vt(o,"add",l,l)),this},set(s,o){!t&&!ut(o)&&!Ft(o)&&(o=be(o));const i=be(this),{has:a,get:l}=ar(i);let p=a.call(i,s);p||(s=be(s),p=a.call(i,s));const u=l.call(i,s);return i.set(s,o),p?Tt(o,u)&&Vt(i,"set",s,o):Vt(i,"add",s,o),this},delete(s){const o=be(this),{has:i,get:a}=ar(o);let l=i.call(o,s);l||(s=be(s),l=i.call(o,s)),a&&a.call(o,s);const p=o.delete(s);return l&&Vt(o,"delete",s,void 0),p},clear(){const s=be(this),o=s.size!==0,i=s.clear();return o&&Vt(s,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cc(s,e,t)}),n}function so(e,t){const n=dc(e,t);return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_isShallow"?t:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,o)}const uc={get:so(!1,!1)},pc={get:so(!1,!0)},fc={get:so(!0,!1)};const sa=new WeakMap,oa=new WeakMap,ia=new WeakMap,mc=new WeakMap;function hc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wr(e){return Ft(e)?e:oo(e,!1,ic,uc,sa)}function aa(e){return oo(e,!1,lc,pc,oa)}function Ts(e){return oo(e,!0,ac,fc,ia)}function oo(e,t,n,r,s){if(!we(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=s.get(e);if(o)return o;const i=hc(Bl(e));if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function Qt(e){return Ft(e)?Qt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function ut(e){return!!(e&&e.__v_isShallow)}function io(e){return e?!!e.__v_raw:!1}function be(e){const t=e&&e.__v_raw;return t?be(t):e}function gc(e){return!xe(e,"__v_skip")&&Object.isExtensible(e)&&Vi(e,"__v_skip",!0),e}const pt=e=>we(e)?Wr(e):e,en=e=>we(e)?Ts(e):e;function Je(e){return e?e.__v_isRef===!0:!1}function Q(e){return la(e,!1)}function bc(e){return la(e,!0)}function la(e,t){return Je(e)?e:new xc(e,t)}class xc{constructor(t,n){this.dep=new ro,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:be(t),this._value=n?t:pt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||ut(t)||Ft(t);t=r?t:be(t),Tt(t,n)&&(this._rawValue=t,this._value=r?t:pt(t),this.dep.trigger())}}function M(e){return Je(e)?e.value:e}const vc={get:(e,t,n)=>t==="__v_raw"?e:M(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function ca(e){return Qt(e)?e:new Proxy(e,vc)}class yc{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ro(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return Ki(this,!0),!0}get value(){const t=this.dep.track();return Zi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function wc(e,t,n=!1){let r,s;return ae(e)?r=e:(r=e.get,s=e.set),new yc(r,s,n)}const cr={},Sr=new WeakMap;let cn;function kc(e,t=!1,n=cn){if(n){let r=Sr.get(n);r||Sr.set(n,r=[]),r.push(e)}}function zc(e,t,n=Se){const{immediate:r,deep:s,once:o,scheduler:i,augmentJob:a,call:l}=n,p=v=>s?v:ut(v)||s===!1||s===0?Gt(v,1):Gt(v);let u,c,m,h,A=!1,w=!1;if(Je(e)?(c=()=>e.value,A=ut(e)):Qt(e)?(c=()=>p(e),A=!0):se(e)?(w=!0,A=e.some(v=>Qt(v)||ut(v)),c=()=>e.map(v=>{if(Je(v))return v.value;if(Qt(v))return p(v);if(ae(v))return l?l(v,2):v()})):ae(e)?t?c=l?()=>l(e,2):e:c=()=>{if(m){Et();try{m()}finally{$t()}}const v=cn;cn=u;try{return l?l(e,3,[h]):e(h)}finally{cn=v}}:c=It,t&&s){const v=c,y=s===!0?1/0:s;c=()=>Gt(v(),y)}const T=Ql(),E=()=>{u.stop(),T&&T.active&&Zs(T.effects,u)};if(o&&t){const v=t;t=(...y)=>{try{return v(...y)}finally{E()}}}let b=w?new Array(e.length).fill(cr):cr;const x=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(t){const y=u.run();if(v||s||A||(w?y.some((F,_)=>Tt(F,b[_])):Tt(y,b))){const F=cn;Et();try{m&&m(),cn=u;const _=[y,b===cr?void 0:w&&b[0]===cr?[]:b,h];b=y,l?l(t,3,_):t(..._)}finally{cn=F,$t()}}}else u.run()};return a&&a(x),u=new qi(c),u.scheduler=i?()=>i(x,!1):x,h=v=>kc(v,!1,u),m=u.onStop=()=>{const v=Sr.get(u);if(v){if(l)l(v,4);else for(const y of v)y();Sr.delete(u)}},t?r?x(!0):b=u.run():i?i(x.bind(null,!0),!0):u.run(),E.pause=u.pause.bind(u),E.resume=u.resume.bind(u),E.stop=E,E}function Gt(e,t=1/0,n){if(t<=0||!we(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Je(e))Gt(e.value,t,n);else if(se(e))for(let r=0;r<e.length;r++)Gt(e[r],t,n);else if(Cr(e)||Jt(e))e.forEach(r=>{Gt(r,t,n)});else if(Ni(e)){for(const r in e)Gt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Gt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sr(e,t,n,r){try{return r?e(...r):e()}catch(s){Kr(s,t,n)}}function ft(e,t,n,r){if(ae(e)){const s=sr(e,t,n,r);return s&&ji(s)&&s.catch(o=>{Kr(o,t,n)}),s}if(se(e)){const s=[];for(let o=0;o<e.length;o++)s.push(ft(e[o],t,n,r));return s}}function Kr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||Se;if(t){let a=t.parent;const l=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,l,p)===!1)return}a=a.parent}if(o){Et(),sr(o,null,10,[e,l,p]),$t();return}}_c(e,n,s,r,i)}function _c(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const nt=[];let gt=-1;const At=[];let Xt=null,xn=0;const da=Promise.resolve();let Ar=null;function ao(e){const t=Ar||da;return e?t.then(this?e.bind(this):e):t}function Cc(e){let t=gt+1,n=nt.length;for(;t<n;){const r=t+n>>>1,s=nt[r],o=Kn(s);o<e||o===e&&s.flags&2?t=r+1:n=r}return t}function lo(e){if(!(e.flags&1)){const t=Kn(e),n=nt[nt.length-1];!n||!(e.flags&2)&&t>=Kn(n)?nt.push(e):nt.splice(Cc(t),0,e),e.flags|=1,ua()}}function ua(){Ar||(Ar=da.then(ma))}function Sc(e){if(!se(e))Xt&&e.id===-1?Xt.splice(xn+1,0,e):e.flags&1||(At.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)At.push(e[t]);ua()}function pa(e,t,n,r=gt+1){for(;r<nt.length;r++){const s=nt[r];if(s&&s.flags&2){if(e&&s.id!==e.uid||t!==void 0&&!(s.id>=t))continue;nt.splice(r,1),r=e?r-1:gt,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function fa(e,t,n=0){if(At.length){let r=At,s=0;if(t){r=[];for(let i=0;i<At.length;i++){const a=At[i];(a.i!==void 0?!a.i||a.i.uid<n:t.has(a))?At[s++]=a:r.push(a)}}const o=[...new Set(r)].sort((i,a)=>Kn(i)-Kn(a));if(At.length=s,Xt){for(let i=0;i<o.length;i++)Xt.push(o[i]);return}for(Xt=o,xn=0;xn<Xt.length;xn++){const i=Xt[xn];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}Xt=null,xn=0}}let cs=!1;function Ac(e,t){if(cs){e();return}const n=t===void 0?void 0:new Set(At);e(),cs=!0;try{pa(void 0,t),fa(void 0,n,t)}finally{cs=!1}}const Kn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ma(e){try{for(gt=0;gt<nt.length;gt++){const t=nt[gt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),sr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;gt<nt.length;gt++){const t=nt[gt];t&&(t.flags&=-2)}gt=-1,nt.length=0,fa(),Ar=null,(nt.length||At.length)&&ma()}}let Ke=null,ha=null;function Rr(e){const t=Ke;return Ke=e,ha=e&&e.type.__scopeId||null,t}function Y(e,t=Ke,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Er(-1);const o=Rr(t),i=Ht.length;let a;try{a=e(...s)}finally{for(let l=Ht.length;l>i;l--)fo();Rr(o),r._d&&Er(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function xr(e,t){if(Ke===null)return e;const n=es(Ke),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,i,a,l=Se]=t[s];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&Gt(i),r.push({dir:o,instance:n,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function rn(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let l=a.dir[r];l&&(Et(),ft(l,n,8,[e.el,a,e,t]),$t())}}function vr(e,t){if(Ze){let n=Ze.provides;const r=Ze.parent&&Ze.parent.provides;r===n&&(n=Ze.provides=Object.create(r)),n[e]=t}}function Mt(e,t,n=!1){const r=mo();if(r||kn){let s=kn?kn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ae(t)?t.call(r&&r.proxy):t}}const Rc=Symbol.for("v-scx"),Tc=()=>Mt(Rc);function xt(e,t,n){return ga(e,t,n)}function ga(e,t,n=Se){const{immediate:r,deep:s,flush:o,once:i}=n,a=je({},n),l=t&&r||!t&&o!=="post";let p;if(Qn){if(o==="sync"){const h=Tc();p=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=It,h.resume=It,h.pause=It,h}}const u=Ze;a.call=(h,A,w)=>ft(h,u,A,w);let c=!1;o==="post"?a.scheduler=h=>{h.i=u,st(h,u&&u.suspense)}:o!=="sync"&&(c=!0,a.scheduler=(h,A)=>{A?h():lo(h)}),a.augmentJob=h=>{t&&(h.flags|=4),c&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const m=zc(e,t,a);return Qn&&(p?p.push(m):l&&m()),m}function Ic(e,t,n){const r=this.proxy,s=$e(e)?e.includes(".")?ba(r,e):()=>r[e]:e.bind(r,r);let o;ae(t)?o=t:(o=t.handler,n=t);const i=ir(this),a=ga(s,o.bind(r),n);return i(),a}function ba(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Mc=Symbol("_vte"),Xr=e=>e.__isTeleport,dt=Symbol("_leaveCb"),In=Symbol("_enterCb");function Ec(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mt(()=>{e.isMounted=!0}),_a(()=>{e.isUnmounting=!0}),e}const ct=[Function,Array],xa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},$c={name:"BaseTransition",props:xa,setup(e,{slots:t}){const n=mo(),r=Ec();return()=>{const s=t.default&&wa(t.default(),!0),o=s&&s.length?va(s):n.subTree?Le():void 0;if(!o)return;const i=be(e),{mode:a}=i;if(r.isLeaving)return ds(o);const l=Tr(o);if(!l)return ds(o);let p=Is(l,i,r,n,c=>p=c);l.type!==Xe&&zn(l,p);let u=n.subTree&&Tr(n.subTree);if(u&&u.type!==Xe&&!dn(u,l)&&Xn(n.subTree)){let c=Is(u,i,r,n);if(zn(u,c),a==="out-in"&&l.type!==Xe)return r.isLeaving=!0,c.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete c.afterLeave,u=void 0},ds(o);a==="in-out"&&l.type!==Xe?c.delayLeave=(m,h,A)=>{const w=ya(r,u);w[String(u.key)]=u,m[dt]=()=>{h(),m[dt]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{A(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function va(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Xe){t=n;break}}return t}const Fc=$c;function ya(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Is(e,t,n,r,s){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:p,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:m,onLeave:h,onAfterLeave:A,onLeaveCancelled:w,onBeforeAppear:T,onAppear:E,onAfterAppear:b,onAppearCancelled:x}=t,v=String(e.key),y=ya(n,e),F=(P,J)=>{P&&ft(P,r,9,J)},_=(P,J)=>{const oe=J[1];F(P,J),se(P)?P.every(V=>V.length<=1)&&oe():P.length<=1&&oe()},R={mode:i,persisted:a,beforeEnter(P){let J=l;if(!n.isMounted)if(o)J=T||l;else return;P[dt]&&P[dt](!0);const oe=y[v];if(oe&&dn(e,oe)){let V=oe.el[dt];if(!V){const le=Xn(oe);V=le&&le.el[dt]}V&&V()}F(J,[P])},enter(P){if(y[v]===e)return;let J=p,oe=u,V=c;if(!n.isMounted)if(o)J=E||p,oe=b||u,V=x||c;else return;let le=!1;P[In]=Fe=>{le||(le=!0,Fe?F(V,[P]):F(oe,[P]),R.delayedLeave&&R.delayedLeave(),P[In]=void 0)};const Te=P[In].bind(null,!1);J?_(J,[P,Te]):Te()},leave(P,J){const oe=String(e.key);if(P[In]&&P[In](!0),n.isUnmounting)return J();F(m,[P]);let V=!1;P[dt]=Te=>{V||(V=!0,J(),Te?F(w,[P]):F(A,[P]),P[dt]=void 0,y[oe]===e&&delete y[oe])};const le=P[dt].bind(null,!1);y[oe]=e,h?_(h,[P,le]):le()},clone(P){const J=Is(P,t,n,r,s);return s&&s(J),J}};return R}function ds(e){if(Yr(e))return e=tn(e),e.children=null,e}function Tr(e){if(!Yr(e))return Xr(e.type)&&e.children?va(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ae(n.default))return n.default()}}function zn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;zn(Xr(n.type)&&Tr(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===fe&&se(e.children)){const n=$a(e.children,!1);n&&zn(n,t)}}function wa(e,t=!1,n){let r=[],s=0;for(let o=0;o<e.length;o++){let i=e[o];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===fe?(i.patchFlag&128&&s++,r=r.concat(wa(i.children,t,a))):(t||i.type!==Xe)&&r.push(a!=null?tn(i,{key:a}):i)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function Xn(e){if(e.component)return Xn(e.component.subTree);if(e.type===fe){const t=se(e.children)&&$a(e.children,!1);return t?Xn(t):void 0}if(e.type!==Xe)return e}function ge(e,t){return ae(e)?je({name:e.name},t,{setup:e}):e}function co(){const e=mo();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function ka(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Mo(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Ir=new WeakMap;function Bn(e,t,n,r,s=!1){if(se(e)){e.forEach((w,T)=>Bn(w,t&&(se(t)?t[T]:t),n,r,s));return}if(wn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Bn(e,t,n,r.component.subTree);return}const o=r.shapeFlag&4?es(r.component):r.el,i=s?null:o,{i:a,r:l}=e,p=t&&t.r,u=a.refs===Se?a.refs={}:a.refs,c=a.setupState,m=be(c),h=c===Se?Di:w=>Mo(u,w)?!1:xe(m,w),A=(w,T)=>!(T&&Mo(u,T));if(p!=null&&p!==l){if(Eo(t),$e(p))u[p]=null,h(p)&&(c[p]=null);else if(Je(p)){const w=t;A(p,w.k)&&(p.value=null),w.k&&(u[w.k]=null)}}if(ae(l))sr(l,a,12,[i,u]);else{const w=$e(l),T=Je(l);if(w||T){const E=()=>{if(e.f){const b=w?h(l)?c[l]:u[l]:A()||!e.k?l.value:u[e.k];if(s)se(b)&&Zs(b,o);else if(se(b))b.includes(o)||b.push(o);else if(w)u[l]=[o],h(l)&&(c[l]=u[l]);else{const x=[o];A(l,e.k)&&(l.value=x),e.k&&(u[e.k]=x)}}else w?(u[l]=i,h(l)&&(c[l]=i)):T&&(A(l,e.k)&&(l.value=i),e.k&&(u[e.k]=i))};if(i){const b=()=>{E(),Ir.delete(e)};b.id=-1,Ir.set(e,b),st(b,n)}else Eo(e),E()}}}function Eo(e){const t=Ir.get(e);t&&(t.flags|=8,Ir.delete(e))}Hr().requestIdleCallback;Hr().cancelIdleCallback;const wn=e=>!!e.type.__asyncLoader,Yr=e=>e.type.__isKeepAlive;function Pc(e,t){za(e,"a",t)}function Lc(e,t){za(e,"da",t)}function za(e,t,n=Ze){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Zr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Yr(s.parent.vnode)&&Oc(r,t,n,s),s=s.parent}}function Oc(e,t,n,r){const s=Zr(t,e,r,!0);Pt(()=>{Zs(r[t],s)},n)}function Zr(e,t,n=Ze,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{Et();const a=ir(n),l=ft(t,n,e,i);return a(),$t(),l});return r?s.unshift(o):s.push(o),o}}const Ut=e=>(t,n=Ze)=>{(!Qn||e==="sp")&&Zr(e,(...r)=>t(...r),n)},Dc=Ut("bm"),mt=Ut("m"),jc=Ut("bu"),Bc=Ut("u"),_a=Ut("bum"),Pt=Ut("um"),Nc=Ut("sp"),Vc=Ut("rtg"),Gc=Ut("rtc");function Hc(e,t=Ze){Zr("ec",e,t)}const Ca="components";function or(e,t){return Aa(Ca,e,!0,t)||e}const Sa=Symbol.for("v-ndc");function Yn(e){return $e(e)?Aa(Ca,e,!1)||e:e||Sa}function Aa(e,t,n=!0,r=!1){const s=Ke||Ze;if(s){const o=s.type;{const a=Ad(o,!1);if(a&&(a===t||a===rt(t)||a===Gr(rt(t))))return o}const i=$o(s[e]||o[e],t)||$o(s.appContext[e],t);return!i&&r?o:i}}function $o(e,t){return e&&(e[t]||e[rt(t)]||e[Gr(rt(t))])}function Ue(e,t,n,r){let s;const o=n,i=se(e);if(i||$e(e)){const a=i&&Qt(e);let l=!1,p=!1;a&&(l=!ut(e),p=Ft(e),e=qr(e)),s=new Array(e.length);for(let u=0,c=e.length;u<c;u++)s[u]=t(l?p?en(pt(e[u])):pt(e[u]):e[u],u,void 0,o)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)s=[];else{s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,o)}else if(we(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,o));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,p=a.length;l<p;l++){const u=a[l];s[l]=t(e[u],u,l,o)}}else s=[];return s}function at(e,t,n,r,s,o){if(n==null&&(n={}),Ke.ce||Ke.parent&&wn(Ke.parent)&&Ke.parent.ce){const p=o!=null&&n.key==null?je({},n,{key:o}):n,u=Object.keys(p).length>0;return t!=="default"&&(p.name=t),S(),Ae(fe,null,[z("slot",p,r&&r())],u?-2:64)}let i=e[t];i&&i._c&&(i._d=!1);const a=Ht.length;S();let l;try{const p=i&&Ra(i(n)),u=n.key||o||p&&p.key;l=Ae(fe,{key:(u&&!vt(u)?u:`_${t}`)+(!p&&r?"_fb":"")},p||(r?r():[]),p&&e._===1?64:-2)}catch(p){for(let u=Ht.length;u>a;u--)fo();throw p}finally{i&&i._c&&(i._d=!0)}return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function Ra(e){return e.some(t=>_n(t)?!(t.type===Xe||t.type===fe&&!Ra(t.children)):!0)?e:null}const Ms=e=>e?Xa(e)?es(e):Ms(e.parent):null,Nn=je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ms(e.parent),$root:e=>Ms(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ia(e),$forceUpdate:e=>e.f||(e.f=()=>{lo(e.update)}),$nextTick:e=>e.n||(e.n=ao.bind(e.proxy)),$watch:e=>Ic.bind(e)}),us=(e,t)=>e!==Se&&!e.__isScriptSetup&&xe(e,t),Uc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:l}=e;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(us(r,t))return i[t]=1,r[t];if(s!==Se&&xe(s,t))return i[t]=2,s[t];if(xe(o,t))return i[t]=3,o[t];if(n!==Se&&xe(n,t))return i[t]=4,n[t];Es&&(i[t]=0)}}const p=Nn[t];let u,c;if(p)return t==="$attrs"&&Ye(e.attrs,"get",""),p(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==Se&&xe(n,t))return i[t]=4,n[t];if(c=l.config.globalProperties,xe(c,t))return c[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return us(s,t)?(s[t]=n,!0):r!==Se&&xe(r,t)?(r[t]=n,!0):xe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:o,type:i}},a){let l;return!!(n[a]||e!==Se&&a[0]!=="$"&&xe(e,a)||us(t,a)||xe(o,a)||xe(r,a)||xe(Nn,a)||xe(s.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:xe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Fo(e){return se(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Es=!0;function qc(e){const t=Ia(e),n=e.proxy,r=e.ctx;Es=!1,t.beforeCreate&&Po(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:l,inject:p,created:u,beforeMount:c,mounted:m,beforeUpdate:h,updated:A,activated:w,deactivated:T,beforeDestroy:E,beforeUnmount:b,destroyed:x,unmounted:v,render:y,renderTracked:F,renderTriggered:_,errorCaptured:R,serverPrefetch:P,expose:J,inheritAttrs:oe,components:V,directives:le,filters:Te}=t;if(p&&Wc(p,r,null),i)for(const ce in i){const re=i[ce];ae(re)&&(r[ce]=re.bind(n))}if(s){const ce=s.call(n,n);we(ce)&&(e.data=Wr(ce))}if(Es=!0,o)for(const ce in o){const re=o[ce],Ee=ae(re)?re.bind(n,n):ae(re.get)?re.get.bind(n,n):It,W=!ae(re)&&ae(re.set)?re.set.bind(n):It,Ge=ze({get:Ee,set:W});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:ve=>Ge.value=ve})}if(a)for(const ce in a)Ta(a[ce],r,n,ce);if(l){const ce=ae(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(re=>{vr(re,ce[re])})}u&&Po(u,e,"c");function pe(ce,re){se(re)?re.forEach(Ee=>ce(Ee.bind(n))):re&&ce(re.bind(n))}if(pe(Dc,c),pe(mt,m),pe(jc,h),pe(Bc,A),pe(Pc,w),pe(Lc,T),pe(Hc,R),pe(Gc,F),pe(Vc,_),pe(_a,b),pe(Pt,v),pe(Nc,P),se(J))if(J.length){const ce=e.exposed||(e.exposed={});J.forEach(re=>{Object.defineProperty(ce,re,{get:()=>n[re],set:Ee=>n[re]=Ee,enumerable:!0})})}else e.exposed||(e.exposed={});y&&e.render===It&&(e.render=y),oe!=null&&(e.inheritAttrs=oe),V&&(e.components=V),le&&(e.directives=le),P&&ka(e)}function Wc(e,t,n=It){se(e)&&(e=$s(e));for(const r in e){const s=e[r];let o;we(s)?"default"in s?o=Mt(s.from||r,s.default,!0):o=Mt(s.from||r):o=Mt(s),Je(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function Po(e,t,n){ft(se(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ta(e,t,n,r){let s=r.includes(".")?ba(n,r):()=>n[r];if($e(e)){const o=t[e];ae(o)&&xt(s,o)}else if(ae(e))xt(s,e.bind(n));else if(we(e))if(se(e))e.forEach(o=>Ta(o,t,n,r));else{const o=ae(e.handler)?e.handler.bind(n):t[e.handler];ae(o)&&xt(s,o,e)}}function Ia(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(p=>Mr(l,p,i,!0)),Mr(l,t,i)),we(t)&&o.set(t,l),l}function Mr(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&Mr(e,o,n,!0),s&&s.forEach(i=>Mr(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=Kc[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Kc={data:Lo,props:Oo,emits:Oo,methods:Pn,computed:Pn,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:Pn,directives:Pn,watch:Yc,provide:Lo,inject:Xc};function Lo(e,t){return t?e?function(){return je(ae(e)?e.call(this,this):e,ae(t)?t.call(this,this):t)}:t:e}function Xc(e,t){return Pn($s(e),$s(t))}function $s(e){if(se(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qe(e,t){return e?[...new Set([].concat(e,t))]:t}function Pn(e,t){return e?je(Object.create(null),e,t):t}function Oo(e,t){return e?se(e)&&se(t)?[...new Set([...e,...t])]:je(Object.create(null),Fo(e),Fo(t??{})):t}function Yc(e,t){if(!e)return t;if(!t)return e;const n=je(Object.create(null),e);for(const r in t)n[r]=Qe(e[r],t[r]);return n}function Ma(){return{app:null,config:{isNativeTag:Di,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zc=0;function Jc(e,t){return function(r,s=null){ae(r)||(r=je({},r)),s!=null&&!we(s)&&(s=null);const o=Ma(),i=new WeakSet,a=[];let l=!1;const p=o.app={_uid:Zc++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:Td,get config(){return o.config},set config(u){},use(u,...c){return i.has(u)||(u&&ae(u.install)?(i.add(u),u.install(p,...c)):ae(u)&&(i.add(u),u(p,...c))),p},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),p},component(u,c){return c?(o.components[u]=c,p):o.components[u]},directive(u,c){return c?(o.directives[u]=c,p):o.directives[u]},mount(u,c,m){if(!l){const h=p._ceVNode||z(r,s);return h.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),e(h,u,m),l=!0,p._container=u,u.__vue_app__=p,es(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ft(a,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,c){return o.provides[u]=c,p},runWithContext(u){const c=kn;kn=p;try{return u()}finally{kn=c}}};return p}}let kn=null;const Qc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${rt(t)}Modifiers`]||e[`${hn(t)}Modifiers`];function ed(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Se;let s=n;const o=t.startsWith("update:"),i=o&&Qc(r,t.slice(7));i&&(i.trim&&(s=n.map(u=>$e(u)?u.trim():u)),i.number&&(s=s.map(Qs)));let a,l=r[a=ss(t)]||r[a=ss(rt(t))];!l&&o&&(l=r[a=ss(hn(t))]),l&&ft(l,e,6,s);const p=r[a+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ft(p,e,6,s)}}const td=new WeakMap;function Ea(e,t,n=!1){const r=n?td:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!ae(e)){const l=p=>{const u=Ea(p,t,!0);u&&(a=!0,je(i,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(we(e)&&r.set(e,null),null):(se(o)?o.forEach(l=>i[l]=null):je(i,o),we(e)&&r.set(e,i),i)}function Jr(e,t){return!e||!Br(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),xe(e,t[0].toLowerCase()+t.slice(1))||xe(e,hn(t))||xe(e,t))}function Do(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:i,attrs:a,emit:l,render:p,renderCache:u,props:c,data:m,setupState:h,ctx:A,inheritAttrs:w}=e,T=Rr(e);let E,b;try{if(n.shapeFlag&4){const v=s||r,y=v;E=Rt(p.call(y,v,u,c,h,m,A)),b=a}else{const v=t;E=Rt(v.length>1?v(c,{attrs:a,slots:i,emit:l}):v(c,null)),b=t.props?a:nd(a)}}catch(v){Ht.length=0,Kr(v,e,1),E=z(Xe)}let x=E;if(b&&w!==!1){const v=Object.keys(b),{shapeFlag:y}=x;v.length&&y&7&&(o&&v.some(Nr)&&(b=rd(b,o)),x=tn(x,b,!1,!0))}if(n.dirs&&(x=tn(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition){const v=Xr(x.type)&&Tr(x)||x;zn(v,n.transition)}return E=x,Rr(T),E}function $a(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(_n(s)){if(s.type!==Xe||s.children==="v-if"){if(n)return;n=s}}else return}return n}const nd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Br(n))&&((t||(t={}))[n]=e[n]);return t},rd=(e,t)=>{const n={};for(const r in e)(!Nr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function sd(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:l}=t,p=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?jo(r,i,p):!!i;if(l&8){const u=t.dynamicProps;for(let c=0;c<u.length;c++){const m=u[c];if(Fa(i,r,m)&&!Jr(p,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?jo(r,i,p):!0:!!i;return!1}function jo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(!xe(e,o)||Fa(t,e,o)&&!Jr(n,o))return!0}return!1}function Fa(e,t,n){const r=e[n],s=t[n];return n==="style"&&we(r)&&we(s)?!Ur(r,s):r!==s}function od({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Pa={},La=()=>Object.create(Pa),Oa=e=>Object.getPrototypeOf(e)===Pa;function id(e,t,n,r=!1){const s={},o=La();e.propsDefaults=Object.create(null),Da(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:aa(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function ad(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=be(s),[l]=e.propsOptions;let p=!1;if((r||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let c=0;c<u.length;c++){let m=u[c];if(Jr(e.emitsOptions,m))continue;const h=t[m];if(l)if(xe(o,m))h!==o[m]&&(o[m]=h,p=!0);else{const A=rt(m);s[A]=Fs(l,a,A,h,e,!1)}else h!==o[m]&&(o[m]=h,p=!0)}}}else{Da(e,t,s,o)&&(p=!0);let u;for(const c in a)(!t||!xe(t,c)&&((u=hn(c))===c||!xe(t,u)))&&(l?n&&(n[c]!==void 0||n[u]!==void 0)&&(s[c]=Fs(l,a,c,void 0,e,!0)):delete s[c]);if(o!==a)for(const c in o)(!t||!xe(t,c))&&(delete o[c],p=!0)}p&&Vt(e.attrs,"set","")}function Da(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(On(l))continue;const p=t[l];let u;s&&xe(s,u=rt(l))?!o||!o.includes(u)?n[u]=p:(a||(a={}))[u]=p:Jr(e.emitsOptions,l)||(!(l in r)||p!==r[l])&&(r[l]=p,i=!0)}if(o){const l=be(n),p=a||Se;for(let u=0;u<o.length;u++){const c=o[u];n[c]=Fs(s,l,c,p[c],e,!xe(p,c))}}return i}function Fs(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=xe(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&ae(l)){const{propsDefaults:p}=s;if(n in p)r=p[n];else{const u=ir(s);r=p[n]=l.call(null,t),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===hn(n))&&(r=!0))}return r}const ld=new WeakMap;function ja(e,t,n=!1){const r=n?ld:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let l=!1;if(!ae(e)){const u=c=>{l=!0;const[m,h]=ja(c,t,!0);je(i,m),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return we(e)&&r.set(e,un),un;if(se(o))for(let u=0;u<o.length;u++){const c=rt(o[u]);Bo(c)&&(i[c]=Se)}else if(o)for(const u in o){const c=rt(u);if(Bo(c)){const m=o[u],h=i[c]=se(m)||ae(m)?{type:m}:je({},m),A=h.type;let w=!1,T=!0;if(se(A))for(let E=0;E<A.length;++E){const b=A[E],x=ae(b)&&b.name;if(x==="Boolean"){w=!0;break}else x==="String"&&(T=!1)}else w=ae(A)&&A.name==="Boolean";h[0]=w,h[1]=T,(w||xe(h,"default"))&&a.push(c)}}const p=[i,a];return we(e)&&r.set(e,p),p}function Bo(e){return e[0]!=="$"&&!On(e)}const uo=e=>e==="_"||e==="_ctx"||e==="$stable",po=e=>se(e)?e.map(Rt):[Rt(e)],cd=(e,t,n)=>{if(t._n)return t;const r=Y((...s)=>po(t(...s)),n);return r._c=!1,r},Ba=(e,t,n)=>{const r=e._ctx;for(const s in e){if(uo(s))continue;const o=e[s];if(ae(o))t[s]=cd(s,o,r);else if(o!=null){const i=po(o);t[s]=()=>i}}},Na=(e,t)=>{const n=po(t);e.slots.default=()=>n},Va=(e,t,n)=>{for(const r in t)(n||!uo(r))&&(e[r]=t[r])},dd=(e,t,n)=>{const r=e.slots=La();if(e.vnode.shapeFlag&32){const s=t._;s?(Va(r,t,n),n&&Vi(r,"_",s,!0)):Ba(t,r)}else t&&Na(e,t)},ud=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=Se;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:Va(s,t,n):(o=!t.$stable,Ba(t,s)),i=t}else t&&(Na(e,t),i={default:1});if(o)for(const a in s)!uo(a)&&i[a]==null&&delete s[a]},st=gd;function pd(e){return fd(e)}function fd(e,t){const n=Hr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:l,setText:p,setElementText:u,parentNode:c,nextSibling:m,setScopeId:h=It,insertStaticContent:A}=e,w=(f,g,k,C=null,I=null,O=null,B=void 0,H=null,G=!!g.dynamicChildren)=>{if(f===g)return;f&&!dn(f,g)&&(C=$(f),ve(f,I,O,!0),f=null),g.patchFlag===-2&&(G=!1,g.dynamicChildren=null),g.dynamicChildren&&f&&f.dynamicChildren&&f.dynamicChildren.hasOnce&&(g.dynamicChildren===un&&(g.dynamicChildren=[]),g.dynamicChildren.hasOnce=!0);const{type:D,ref:te,shapeFlag:U}=g;switch(D){case Qr:T(f,g,k,C);break;case Xe:E(f,g,k,C);break;case yr:f==null&&b(g,k,C,B);break;case fe:V(f,g,k,C,I,O,B,H,G);break;default:U&1?y(f,g,k,C,I,O,B,H,G):U&6?le(f,g,k,C,I,O,B,H,G):(U&64||U&128)&&D.process(f,g,k,C,I,O,B,H,G,j)}te!=null&&I?Bn(te,f&&f.ref,O,g||f,!g):te==null&&f&&f.ref!=null&&Bn(f.ref,null,O,f,!0)},T=(f,g,k,C)=>{if(f==null)r(g.el=a(g.children),k,C);else{const I=g.el=f.el;g.children!==f.children&&p(I,g.children)}},E=(f,g,k,C)=>{f==null?r(g.el=l(g.children||""),k,C):g.el=f.el},b=(f,g,k,C)=>{[f.el,f.anchor]=A(f.children,g,k,C,f.el,f.anchor)},x=({el:f,anchor:g},k,C)=>{let I;for(;f&&f!==g;)I=m(f),r(f,k,C),f=I;r(g,k,C)},v=({el:f,anchor:g})=>{let k;for(;f&&f!==g;)k=m(f),s(f),f=k;s(g)},y=(f,g,k,C,I,O,B,H,G)=>{if(g.type==="svg"?B="svg":g.type==="math"&&(B="mathml"),f==null)F(g,k,C,I,O,B,H,G);else{const D=f.el&&f.el._isVueCE?f.el:null;try{D&&D._beginPatch(),P(f,g,I,O,B,H,G)}finally{D&&D._endPatch()}}},F=(f,g,k,C,I,O,B,H)=>{let G,D;const{props:te,shapeFlag:U,transition:ne,dirs:ie}=f;if(G=f.el=i(f.type,O,te&&te.is,te),U&8?u(G,f.children):U&16&&R(f.children,G,null,C,I,ps(f,O),B,H),ie&&rn(f,null,C,"created"),_(G,f,f.scopeId,B,C),te){for(const Ce in te)Ce!=="value"&&!On(Ce)&&o(G,Ce,null,te[Ce],O,C);"value"in te&&o(G,"value",null,te.value,O),(D=te.onVnodeBeforeMount)&&_t(D,C,f)}ie&&rn(f,null,C,"beforeMount");const he=md(I,ne);he&&ne.beforeEnter(G),r(G,g,k),((D=te&&te.onVnodeMounted)||he||ie)&&st(()=>{try{D&&_t(D,C,f),he&&ne.enter(G),ie&&rn(f,null,C,"mounted")}finally{}},I)},_=(f,g,k,C,I)=>{if(k&&h(f,k),C)for(let O=0;O<C.length;O++)h(f,C[O]);if(I){let O=I.subTree;if(g===O||Ua(O.type)&&(O.ssContent===g||O.ssFallback===g)){const B=I.vnode;_(f,B,B.scopeId,B.slotScopeIds,I.parent)}}},R=(f,g,k,C,I,O,B,H,G=0)=>{for(let D=G;D<f.length;D++){const te=f[D]=H?Nt(f[D]):Rt(f[D]);w(null,te,g,k,C,I,O,B,H)}},P=(f,g,k,C,I,O,B)=>{const H=g.el=f.el;let{patchFlag:G,dynamicChildren:D,dirs:te}=g;G|=f.patchFlag&16;const U=f.props||Se,ne=g.props||Se;let ie;if(k&&sn(k,!1),(ie=ne.onVnodeBeforeUpdate)&&_t(ie,k,g,f),te&&rn(g,f,k,"beforeUpdate"),k&&sn(k,!0),D&&(!f.dynamicChildren||f.dynamicChildren.length!==D.length)&&(G=0,B=!1,D=null),(U.innerHTML&&ne.innerHTML==null||U.textContent&&ne.textContent==null)&&u(H,""),D?J(f.dynamicChildren,D,H,k,C,ps(g,I),O):B||re(f,g,H,null,k,C,ps(g,I),O,!1),G>0){if(G&16)oe(H,U,ne,k,I);else if(G&2&&U.class!==ne.class&&o(H,"class",null,ne.class,I),G&4&&o(H,"style",U.style,ne.style,I),G&8){const he=g.dynamicProps;for(let Ce=0;Ce<he.length;Ce++){const _e=he[Ce],De=U[_e],qe=ne[_e];(qe!==De||_e==="value")&&o(H,_e,De,qe,I,k)}}G&1&&f.children!==g.children&&u(H,g.children)}else!B&&D==null&&oe(H,U,ne,k,I);((ie=ne.onVnodeUpdated)||te)&&st(()=>{ie&&_t(ie,k,g,f),te&&rn(g,f,k,"updated")},C)},J=(f,g,k,C,I,O,B)=>{for(let H=0;H<g.length;H++){const G=f[H],D=g[H],te=G.el||Ps(G),U=te&&(G.type===fe||!dn(G,D)||G.shapeFlag&198)?c(te):k;w(G,D,U,null,C,I,O,B,!0)}},oe=(f,g,k,C,I)=>{if(g!==k){if(g!==Se)for(const O in g)!On(O)&&!(O in k)&&o(f,O,g[O],null,I,C);for(const O in k){if(On(O))continue;const B=k[O],H=g[O];B!==H&&O!=="value"&&o(f,O,H,B,I,C)}"value"in k&&o(f,"value",g.value,k.value,I)}},V=(f,g,k,C,I,O,B,H,G)=>{const D=g.el=f?f.el:a(""),te=g.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:ne,slotScopeIds:ie}=g;ie&&(H=H?H.concat(ie):ie),f==null?(r(D,k,C),r(te,k,C),R(g.children||[],k,te,I,O,B,H,G)):U>0&&U&64&&ne&&f.dynamicChildren&&f.dynamicChildren.length===ne.length?(J(f.dynamicChildren,ne,k,I,O,B,H),(g.key!=null||I&&g===I.subTree)&&Ga(f,g,!0)):re(f,g,k,te,I,O,B,H,G)},le=(f,g,k,C,I,O,B,H,G)=>{g.slotScopeIds=H,f==null?g.shapeFlag&512?I.ctx.activate(g,k,C,B,G):Te(g,k,C,I,O,B,G):Fe(f,g,G)},Te=(f,g,k,C,I,O,B)=>{const H=f.component=kd(f,C,I);if(Yr(f)&&(H.ctx.renderer=j),zd(H,!1,B),H.asyncDep){if(I&&I.registerDep(H,pe,B,O),!f.el){const G=H.subTree=z(Xe);E(null,G,g,k),f.placeholder=G.el}}else pe(H,f,g,k,I,O,B)},Fe=(f,g,k)=>{const C=g.component=f.component;if(sd(f,g,k))if(C.asyncDep&&!C.asyncResolved){g.el=f.el,g.placeholder=f.placeholder,ce(C,g,k);return}else C.next=g,C.update();else g.el=f.el,g.placeholder=f.placeholder,C.vnode=g},pe=(f,g,k,C,I,O,B)=>{const H=()=>{if(f.isMounted){let{next:U,bu:ne,u:ie,parent:he,vnode:Ce}=f;{const kt=Ha(f);if(kt){U&&(U.el=Ce.el,ce(f,U,B)),kt.asyncDep.then(()=>{st(()=>{f.isUnmounted||D()},I)});return}}let _e=U,De;sn(f,!1),U?(U.el=Ce.el,ce(f,U,B)):U=Ce,ne&&br(ne),(De=U.props&&U.props.onVnodeBeforeUpdate)&&_t(De,he,U,Ce),sn(f,!0);const qe=Do(f),wt=f.subTree;f.subTree=qe,w(wt,qe,c(wt.el),$(wt),f,I,O),U.el=qe.el,_e===null&&od(f,qe.el),ie&&st(ie,I),(De=U.props&&U.props.onVnodeUpdated)&&st(()=>_t(De,he,U,Ce),I)}else{let U;const{el:ne,props:ie}=g,{bm:he,m:Ce,parent:_e,root:De,type:qe}=f,wt=wn(g);sn(f,!1),he&&br(he),!wt&&(U=ie&&ie.onVnodeBeforeMount)&&_t(U,_e,g),sn(f,!0);{De.ce&&De.ce._hasShadowRoot()&&De.ce._injectChildStyle(qe,f.parent?f.parent.type:void 0);const kt=f.subTree=Do(f);w(null,kt,k,C,f,I,O),g.el=kt.el}if(Ce&&st(Ce,I),!wt&&(U=ie&&ie.onVnodeMounted)){const kt=g;st(()=>_t(U,_e,kt),I)}(g.shapeFlag&256||_e&&wn(_e.vnode)&&_e.vnode.shapeFlag&256)&&f.a&&st(f.a,I),f.isMounted=!0,g=k=C=null}};f.scope.on();const G=f.effect=new qi(H);f.scope.off();const D=f.update=G.run.bind(G),te=f.job=G.runIfDirty.bind(G);te.i=f,te.id=f.uid,G.scheduler=()=>lo(te),sn(f,!0),D()},ce=(f,g,k)=>{g.component=f;const C=f.vnode.props;f.vnode=g,f.next=null,ad(f,g.props,C,k),ud(f,g.children,k),Et(),pa(f),$t()},re=(f,g,k,C,I,O,B,H,G=!1)=>{const D=f&&f.children,te=f?f.shapeFlag:0,U=g.children,{patchFlag:ne,shapeFlag:ie}=g;if(ne>0){if(ne&128){W(D,U,k,C,I,O,B,H,G);return}else if(ne&256){Ee(D,U,k,C,I,O,B,H,G);return}}ie&8?(te&16&&me(D,I,O),U!==D&&u(k,U)):te&16?ie&16?W(D,U,k,C,I,O,B,H,G):me(D,I,O,!0):(te&8&&u(k,""),ie&16&&R(U,k,C,I,O,B,H,G))},Ee=(f,g,k,C,I,O,B,H,G)=>{f=f||un,g=g||un;const D=f.length,te=g.length,U=Math.min(D,te);let ne;for(ne=0;ne<U;ne++){const ie=g[ne]=G?Nt(g[ne]):Rt(g[ne]);w(f[ne],ie,k,null,I,O,B,H,G)}D>te?me(f,I,O,!0,!1,U):R(g,k,C,I,O,B,H,G,U)},W=(f,g,k,C,I,O,B,H,G)=>{let D=0;const te=g.length;let U=f.length-1,ne=te-1;for(;D<=U&&D<=ne;){const ie=f[D],he=g[D]=G?Nt(g[D]):Rt(g[D]);if(dn(ie,he))w(ie,he,k,null,I,O,B,H,G);else break;D++}for(;D<=U&&D<=ne;){const ie=f[U],he=g[ne]=G?Nt(g[ne]):Rt(g[ne]);if(dn(ie,he))w(ie,he,k,null,I,O,B,H,G);else break;U--,ne--}if(D>U){if(D<=ne){const ie=ne+1,he=ie<te?g[ie].el:C;for(;D<=ne;)w(null,g[D]=G?Nt(g[D]):Rt(g[D]),k,he,I,O,B,H,G),D++}}else if(D>ne)for(;D<=U;)ve(f[D],I,O,!0),D++;else{const ie=D,he=D,Ce=new Map;for(D=he;D<=ne;D++){const ot=g[D]=G?Nt(g[D]):Rt(g[D]);ot.key!=null&&Ce.set(ot.key,D)}let _e,De=0;const qe=ne-he+1;let wt=!1,kt=0;const Rn=new Array(qe);for(D=0;D<qe;D++)Rn[D]=0;for(D=ie;D<=U;D++){const ot=f[D];if(De>=qe){ve(ot,I,O,!0);continue}let zt;if(ot.key!=null)zt=Ce.get(ot.key);else for(_e=he;_e<=ne;_e++)if(Rn[_e-he]===0&&dn(ot,g[_e])){zt=_e;break}zt===void 0?ve(ot,I,O,!0):(Rn[zt-he]=D+1,zt>=kt?kt=zt:wt=!0,w(ot,g[zt],k,null,I,O,B,H,G),De++)}const wo=wt?hd(Rn):un;for(_e=wo.length-1,D=qe-1;D>=0;D--){const ot=he+D,zt=g[ot],ko=g[ot+1],zo=ot+1<te?ko.el||Ps(ko):C;Rn[D]===0?w(null,zt,k,zo,I,O,B,H,G):wt&&(_e<0||D!==wo[_e]?Ge(zt,k,zo,2):_e--)}}},Ge=(f,g,k,C,I=null)=>{const{el:O,type:B,transition:H,children:G,shapeFlag:D}=f;if(D&6){Ge(f.component.subTree,g,k,C);return}if(D&128){f.suspense.move(g,k,C);return}if(D&64){B.move(f,g,k,j);return}if(B===fe){r(O,g,k);for(let U=0;U<G.length;U++)Ge(G[U],g,k,C);r(f.anchor,g,k);return}if(B===yr){x(f,g,k);return}if(C!==2&&D&1&&H)if(C===0)H.persisted&&!O[dt]?r(O,g,k):(H.beforeEnter(O),r(O,g,k),st(()=>H.enter(O),I));else{const{leave:U,delayLeave:ne,afterLeave:ie}=H,he=()=>{f.ctx.isUnmounted?s(O):r(O,g,k)},Ce=()=>{const _e=O._isLeaving||!!O[dt];O._isLeaving&&O[dt](!0),H.persisted&&!_e?he():U(O,()=>{he(),ie&&ie()})};ne?ne(O,he,Ce):Ce()}else r(O,g,k)},ve=(f,g,k,C=!1,I=!1)=>{const{type:O,props:B,ref:H,children:G,dynamicChildren:D,shapeFlag:te,patchFlag:U,dirs:ne,cacheIndex:ie,memo:he}=f;if((U===-2||D&&D.hasOnce)&&(I=!1),H!=null&&(Et(),Bn(H,null,k,f,!0),$t()),ie!=null&&(!f.ctx||f.ctx===g)&&(g.renderCache[ie]=void 0),te&256){g.ctx.deactivate(f);return}const Ce=te&1&&ne,_e=!wn(f);let De;if(_e&&(De=B&&B.onVnodeBeforeUnmount)&&_t(De,g,f),te&6)ke(f.component,k,C);else{if(te&128){f.suspense.unmount(k,C);return}Ce&&rn(f,null,g,"beforeUnmount"),te&64?f.type.remove(f,g,k,j,C):D&&!D.hasOnce&&(O!==fe||U>0&&U&64)?me(D,g,k,!1,!0):(O===fe&&U&384||!I&&te&16)&&me(G,g,k),C&&ht(f)}const qe=he!=null&&ie==null;(_e&&(De=B&&B.onVnodeUnmounted)||Ce||qe)&&st(()=>{De&&_t(De,g,f),Ce&&rn(f,null,g,"unmounted"),qe&&(f.el=null)},k)},ht=f=>{const{type:g,el:k,anchor:C,transition:I}=f,O=g===fe;if(O&&!I){Oe(k,C);return}if(g===yr){v(f),I&&!I.persisted&&I.afterLeave&&I.afterLeave();return}const B=O?Xn(f):f,H=()=>{O?c(k)&&Oe(k,C):s(k),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(B&&B.shapeFlag&1&&I&&!I.persisted){const{leave:G,delayLeave:D}=I,te=B.el,U=()=>G(te,H);D?D(te,H,U):U()}else H()},Oe=(f,g)=>{let k;for(;f!==g;)k=m(f),s(f),f=k;s(g)},ke=(f,g,k)=>{const{bum:C,scope:I,job:O,subTree:B,um:H,m:G,a:D}=f;No(G),No(D),C&&br(C),I.stop(),O?(O.flags|=8,ve(B,f,g,k)):f.vnode.el&&B&&(B.transition=f.vnode.transition,ve(B,f,g,k)),H&&st(H,g),st(()=>{f.isUnmounted=!0},g)},me=(f,g,k,C=!1,I=!1,O=0)=>{for(let B=O;B<f.length;B++)ve(f[B],g,k,C,I)},$=f=>{if(f.shapeFlag&6)return $(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const g=m(f.anchor||f.el),k=g&&g[Mc];return k?m(k):g},q=(f,g,k)=>{const C=f&&g._vnode?void 0:f&&f.component?f.component.uid:wd();Ac(()=>{f==null?g._vnode&&ve(g._vnode,null,null,!0):w(g._vnode||null,f,g,null,null,null,k),g._vnode=f},C)},j={p:w,um:ve,m:Ge,r:ht,mt:Te,mc:R,pc:re,pbc:J,n:$,o:e};return{render:q,hydrate:void 0,createApp:Jc(q)}}function ps({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function sn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function md(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ga(e,t,n=!1){const r=e.children,s=t.children;if(se(r)&&se(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=Nt(s[o]),a.el=i.el),!n&&a.patchFlag!==-2&&Ga(i,a)),a.type===Qr&&(a.patchFlag===-1&&(a=s[o]=Nt(a)),a.el=i.el),a.type===Xe&&!a.el&&(a.el=i.el)}}function hd(e){const t=e.slice(),n=[0];let r,s,o,i,a;const l=e.length;for(r=0;r<l;r++){const p=e[r];if(p!==0){if(s=n[n.length-1],e[s]<p){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<p?o=a+1:i=a;p<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function Ha(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ha(t)}function No(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ps(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Ps(t.subTree):null}const Ua=e=>e.__isSuspense;function gd(e,t){t&&t.pendingBranch?se(e)?t.effects.push(...e):t.effects.push(e):Sc(e)}const fe=Symbol.for("v-fgt"),Qr=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),yr=Symbol.for("v-stc"),Ht=[];let it=null;function S(e=!1){Ht.push(it=e?null:[])}function fo(){Ht.pop(),it=Ht[Ht.length-1]||null}let Zn=1;function Er(e,t=!1){Zn+=e,e<0&&it&&t&&(it.hasOnce=!0)}function qa(e){return e.dynamicChildren=Zn>0?it||un:null,fo(),Zn>0&&it&&it.push(e),e}function L(e,t,n,r,s,o){return qa(d(e,t,n,r,s,o,!0))}function Ae(e,t,n,r,s){return qa(z(e,t,n,r,s,!0))}function _n(e){return e?e.__v_isVNode===!0:!1}function dn(e,t){return e.type===t.type&&e.key===t.key}const Wa=({key:e})=>e??null,wr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?$e(e)||Je(e)||ae(e)?{i:Ke,r:e,k:t,f:!!n}:e:null);function d(e,t=null,n=null,r=0,s=null,o=e===fe?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wa(t),ref:t&&wr(t),scopeId:ha,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ke};return a?($r(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),Zn>0&&!i&&it&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&it.push(l),l}const z=bd;function bd(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===Sa)&&(e=Xe),_n(e)){const a=tn(e,t,!0);return n&&$r(a,n),Zn>0&&!o&&it&&(a.shapeFlag&6?it[it.indexOf(e)]=a:it.push(a)),a.patchFlag=-2,a}if(Rd(e)&&(e=e.__vccOpts),t){t=xd(t);let{class:a,style:l}=t;a&&!$e(a)&&(t.class=N(a)),we(l)&&(io(l)&&!se(l)&&(l=je({},l)),t.style=Ve(l))}const i=$e(e)?1:Ua(e)?128:Xr(e)?64:we(e)?4:ae(e)?2:0;return d(e,t,n,r,s,i,o,!0)}function xd(e){return e?io(e)||Oa(e)?je({},e):e:null}function tn(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:i,children:a,transition:l}=e,p=t?vd(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Wa(p),ref:t&&t.ref?n&&o?se(o)?o.concat(wr(t)):[o,wr(t)]:wr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tn(e.ssContent),ssFallback:e.ssFallback&&tn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return l&&r&&zn(u,l.clone(u)),u}function He(e=" ",t=0){return z(Qr,null,e,t)}function Ls(e,t){const n=z(yr,null,e);return n.staticCount=t,n}function Le(e="",t=!1){return t?(S(),Ae(Xe,null,e)):z(Xe,null,e)}function Rt(e){return e==null||typeof e=="boolean"?z(Xe):se(e)?z(fe,null,e.slice()):_n(e)?Nt(e):z(Qr,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:tn(e)}function $r(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(se(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),$r(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Oa(t)?t._ctx=Ke:s===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(ae(t)){if(r&65){$r(e,{default:t});return}t={default:t,_ctx:Ke},n=32}else t=String(t),r&64?(n=16,t=[He(t)]):n=8;e.children=t,e.shapeFlag|=n}function vd(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=N([t.class,r.class]));else if(s==="style")t.style=Ve([t.style,r.style]);else if(Br(s)){const o=t[s],i=r[s];i&&o!==i&&!(se(o)&&o.includes(i))?t[s]=o?[].concat(o,i):i:i==null&&o==null&&!Nr(s)&&(t[s]=i)}else s!==""&&(t[s]=r[s])}return t}function _t(e,t,n,r=null){ft(e,t,7,[n,r])}const yd=Ma();let Ka=0;function wd(){return Ka}function kd(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||yd,o={uid:Ka++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ja(r,s),emitsOptions:Ea(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ed.bind(null,o),e.ce&&e.ce(o),o}let Ze=null;const mo=()=>Ze||Ke;let Fr,Jn;{const e=Hr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};Fr=t("__VUE_INSTANCE_SETTERS__",n=>Ze=n),Jn=t("__VUE_SSR_SETTERS__",n=>Qn=n)}const ir=e=>{const t=Ze;return Fr(e),e.scope.on(),()=>{e.scope.off(),Fr(t)}},Vo=()=>{Ze&&Ze.scope.off(),Fr(null)};function Xa(e){return e.vnode.shapeFlag&4}let Qn=!1;function zd(e,t=!1,n=!1){t&&Jn(t);const{props:r,children:s}=e.vnode,o=Xa(e);id(e,r,o,t),dd(e,s,n||t);const i=o?_d(e,t):void 0;return t&&Jn(!1),i}function _d(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Uc);const{setup:r}=n;if(r){Et();const s=e.setupContext=r.length>1?Sd(e):null,o=ir(e),i=sr(r,e,0,[e.props,s]),a=ji(i);if($t(),o(),(a||e.sp)&&!wn(e)&&ka(e),a){if(i.then(Vo,Vo),t)return i.then(l=>{Jn(!0);try{Go(e,l,t)}finally{Jn(!1)}}).catch(l=>{Kr(l,e,0)});e.asyncDep=i}else Go(e,i)}else Ya(e)}function Go(e,t,n){ae(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:we(t)&&(e.setupState=ca(t)),Ya(e)}function Ya(e,t,n){const r=e.type;e.render||(e.render=r.render||It);{const s=ir(e);Et();try{qc(e)}finally{$t(),s()}}}const Cd={get(e,t){return Ye(e,"get",""),e[t]}};function Sd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Cd),slots:e.slots,emit:e.emit,expose:t}}function es(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ca(gc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Nn)return Nn[n](e)},has(t,n){return n in t||n in Nn}})):e.proxy}function Ad(e,t=!0){return ae(e)?e.displayName||e.name:e.name||t&&e.__name}function Rd(e){return ae(e)&&"__vccOpts"in e}const ze=(e,t)=>wc(e,t,Qn);function Cn(e,t,n){try{Er(-1);const r=arguments.length;return r===2?we(t)&&!se(t)?_n(t)?z(e,null,[t]):z(e,t):z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_n(n)&&(n=[n]),z(e,t,n))}finally{Er(1)}}const Td="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Os;const Ho=typeof window<"u"&&window.trustedTypes;if(Ho)try{Os=Ho.createPolicy("vue",{createHTML:e=>e})}catch{}const Za=Os?e=>Os.createHTML(e):e=>e,Id="http://www.w3.org/2000/svg",Md="http://www.w3.org/1998/Math/MathML",Bt=typeof document<"u"?document:null,Uo=Bt&&Bt.createElement("template"),Ed={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Bt.createElementNS(Id,e):t==="mathml"?Bt.createElementNS(Md,e):n?Bt.createElement(e,{is:n}):Bt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Bt.createTextNode(e),createComment:e=>Bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{Uo.innerHTML=Za(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Uo.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},qt="transition",Mn="animation",er=Symbol("_vtc"),Ja={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$d=je({},xa,Ja),Fd=e=>(e.displayName="Transition",e.props=$d,e),ts=Fd((e,{slots:t})=>Cn(Fc,Pd(e),t)),on=(e,t=[])=>{se(e)?e.forEach(n=>n(...t)):e&&e(...t)},qo=e=>e?se(e)?e.some(t=>t.length>1):e.length>1:!1;function Pd(e){const t={};for(const V in e)V in Ja||(t[V]=e[V]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:p=i,appearToClass:u=a,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,A=Ld(s),w=A&&A[0],T=A&&A[1],{onBeforeEnter:E,onEnter:b,onEnterCancelled:x,onLeave:v,onLeaveCancelled:y,onBeforeAppear:F=E,onAppear:_=b,onAppearCancelled:R=x}=t,P=(V,le,Te,Fe)=>{V._enterCancelled=Fe,an(V,le?u:a),an(V,le?p:i),Te&&Te()},J=(V,le)=>{V._isLeaving=!1,an(V,c),an(V,h),an(V,m),le&&le()},oe=V=>(le,Te)=>{const Fe=V?_:b,pe=()=>P(le,V,Te);on(Fe,[le,pe]),Wo(()=>{an(le,V?l:o),Ot(le,V?u:a),qo(Fe)||Ko(le,r,w,pe)})};return je(t,{onBeforeEnter(V){on(E,[V]),Ot(V,o),Ot(V,i)},onBeforeAppear(V){on(F,[V]),Ot(V,l),Ot(V,p)},onEnter:oe(!1),onAppear:oe(!0),onLeave(V,le){V._isLeaving=!0;const Te=()=>J(V,le);Ot(V,c),V._enterCancelled?(Ot(V,m),Zo(V)):(Zo(V),Ot(V,m)),Wo(()=>{V._isLeaving&&(an(V,c),Ot(V,h),qo(v)||Ko(V,r,T,Te))}),on(v,[V,Te])},onEnterCancelled(V){P(V,!1,void 0,!0),on(x,[V])},onAppearCancelled(V){P(V,!0,void 0,!0),on(R,[V])},onLeaveCancelled(V){J(V),on(y,[V])}})}function Ld(e){if(e==null)return null;if(we(e))return[fs(e.enter),fs(e.leave)];{const t=fs(e);return[t,t]}}function fs(e){return Gl(e)}function Ot(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[er]||(e[er]=new Set)).add(t)}function an(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[er];n&&(n.delete(t),n.size||(e[er]=void 0))}function Wo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Od=0;function Ko(e,t,n,r){const s=e._endId=++Od,o=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(o,n);const{type:i,timeout:a,propCount:l}=Dd(e,t);if(!i)return r();const p=i+"end";let u=0;const c=()=>{e.removeEventListener(p,m),o()},m=h=>{h.target===e&&++u>=l&&c()};setTimeout(()=>{u<l&&c()},a+1),e.addEventListener(p,m)}function Dd(e,t){const n=window.getComputedStyle(e),r=A=>(n[A]||"").split(", "),s=r(`${qt}Delay`),o=r(`${qt}Duration`),i=Xo(s,o),a=r(`${Mn}Delay`),l=r(`${Mn}Duration`),p=Xo(a,l);let u=null,c=0,m=0;t===qt?i>0&&(u=qt,c=i,m=o.length):t===Mn?p>0&&(u=Mn,c=p,m=l.length):(c=Math.max(i,p),u=c>0?i>p?qt:Mn:null,m=u?u===qt?o.length:l.length:0);const h=u===qt&&/\b(?:transform|all)(?:,|$)/.test(r(`${qt}Property`).toString());return{type:u,timeout:c,propCount:m,hasTransform:h}}function Xo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Yo(n)+Yo(e[r])))}function Yo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Zo(e){return(e?e.ownerDocument:document).body.offsetHeight}function jd(e,t,n){const r=e[er];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Pr=Symbol("_vod"),Qa=Symbol("_vsh"),ms={name:"show",beforeMount(e,{value:t},{transition:n}){e[Pr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):En(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),En(e,!0),r.enter(e)):r.leave(e,()=>{En(e,!1)}):En(e,t))},beforeUnmount(e,{value:t}){En(e,t)}};function En(e,t){e.style.display=t?e[Pr]:"none",e[Qa]=!t}const Bd=Symbol(""),Nd=/(?:^|;)\s*display\s*:/;function Vd(e,t,n){const r=e.style,s=$e(n);let o=!1;if(n&&!s){if(t)if($e(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Ln(r,a,"")}else for(const i in t)n[i]==null&&Ln(r,i,"");for(const i in n){i==="display"&&(o=!0);const a=n[i];a!=null?Hd(e,i,!$e(t)&&t?t[i]:void 0,a)||Ln(r,i,a):Ln(r,i,"")}}else if(s){if(t!==n){const i=r[Bd];i&&(n+=";"+i),r.cssText=n,o=Nd.test(n)}}else t&&e.removeAttribute("style");Pr in e&&((!s||t!==n)&&(e[Pr]=o?r.display:""),e[Qa]&&(r.display="none"))}const dr=/\s*!important$/;function Ln(e,t,n){if(se(n))n.forEach(r=>Ln(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))dr.test(n)?e.setProperty(t,n.replace(dr,""),"important"):e.setProperty(t,n);else{const r=Gd(e,t);dr.test(n)?e.setProperty(hn(r),n.replace(dr,""),"important"):e[r]=n}}const Jo=["Webkit","Moz","ms"],hs={};function Gd(e,t){const n=hs[t];if(n)return n;let r=rt(t);if(r!=="filter"&&r in e)return hs[t]=r;r=Gr(r);for(let s=0;s<Jo.length;s++){const o=Jo[s]+r;if(o in e)return hs[t]=o}return t}function Hd(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&$e(r)&&n===r}const Qo="http://www.w3.org/1999/xlink";function ei(e,t,n,r,s,o=Xl(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Qo,t.slice(6,t.length)):e.setAttributeNS(Qo,t,n):n==null||o&&!Gi(n)?e.removeAttribute(t):e.setAttribute(t,o?"":vt(n)?String(n):n)}function ti(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Za(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Gi(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(s||t)}function vn(e,t,n,r){e.addEventListener(t,n,r)}function Ud(e,t,n,r){e.removeEventListener(t,n,r)}const ni=Symbol("_vei");function qd(e,t,n,r,s=null){const o=e[ni]||(e[ni]={}),i=o[t];if(r&&i)i.value=r;else{const[a,l]=Xd(t);if(r){const p=o[t]=Jd(r,s);vn(e,a,p,l)}else i&&(Ud(e,a,i,l),o[t]=void 0)}}const Wd=/(Once|Passive|Capture)$/,Kd=/^on:?(?:Once|Passive|Capture)$/;function Xd(e){let t,n;for(;(n=e.match(Wd))&&!Kd.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):hn(e.slice(2)),t]}let gs=0;const Yd=Promise.resolve(),Zd=()=>gs||(Yd.then(()=>gs=0),gs=Date.now());function Jd(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(se(s)){const o=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{o.call(r),r._stopped=!0};const i=s.slice(),a=[r];for(let l=0;l<i.length&&!r._stopped;l++){const p=i[l];p&&ft(p,t,5,a)}}else ft(s,t,5,[r])};return n.value=e,n.attached=Zd(),n}const ri=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Qd=(e,t,n,r,s,o)=>{const i=s==="svg";t==="class"?jd(e,r,i):t==="style"?Vd(e,n,r):Br(t)?Nr(t)||qd(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):eu(e,t,r,i))?(ti(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ei(e,t,r,i,o,t!=="value")):e._isVueCE&&(tu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!$e(r)))?ti(e,rt(t),r,o,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ei(e,t,r,i))};function eu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ri(t)&&ae(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ri(t)&&$e(n)?!1:t in e}function tu(e,t){const n=e._def.props;if(!n)return!1;const r=rt(t);return Array.isArray(n)?n.some(s=>rt(s)===r):Object.keys(n).some(s=>rt(s)===r)}const si=e=>{const t=e.props["onUpdate:modelValue"]||!1;return se(t)?n=>br(t,n):t};function nu(e){e.target.composing=!0}function oi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ur=Symbol("_assign"),pr=Symbol("_initialValue");function bs(e,t,n){return t&&(e=e.trim()),n&&(e=Qs(e)),e}const ru={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e.parentNode&&(e.type==="text"?e[pr]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[pr]=e.defaultValue.replace(/\r\n?/g,`
`))),e[ur]=si(s);const o=r||s.props&&s.props.type==="number";vn(e,t?"change":"input",i=>{i.target.composing||e[ur](bs(e.value,n,o))}),(n||o)&&vn(e,"change",()=>{e.value=bs(e.value,n,o)}),t||(vn(e,"compositionstart",nu),vn(e,"compositionend",oi),vn(e,"change",oi))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const s=t??"",o=e[pr];delete e[pr],o!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==o?e[ur](bs(e.value,n,r)):e.value=s},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},i){if(e[ur]=si(i),e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?Qs(e.value):e.value,l=t??"";if(a===l)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===l)||(e.value=l)}},su=["ctrl","shift","alt","meta"],ou={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>su.some(n=>e[`${n}Key`]&&!t.includes(n))},iu=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((s,...o)=>{for(let i=0;i<t.length;i++){const a=ou[t[i]];if(a&&a(s,t))return}return e(s,...o)}))},au=je({patchProp:Qd},Ed);let ii;function lu(){return ii||(ii=pd(au))}const cu=((...e)=>{const t=lu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=uu(r);if(!s)return;const o=t._component;!ae(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const i=n(s,!1,du(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t});function du(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function uu(e){return $e(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:r,iconNode:s,name:o,class:i,...a},{slots:l})=>Cn("svg",{...fr,width:e||fr.width,height:e||fr.height,stroke:r||fr.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${pu(o??"icon")}`],...a},[...s.map(p=>Cn(...p)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(e,t)=>(n,{slots:r})=>Cn(fu,{...n,iconNode:t,name:e},r);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=ue("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=ue("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=ue("ArrowUpIcon",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=ue("BellIcon",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=ue("BotIcon",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=ue("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=ue("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=ue("ChevronsLeftRightIcon",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=ue("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=ue("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=ue("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=ue("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=ue("CompassIcon",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=ue("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=ue("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=ue("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=ue("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=ue("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=ue("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=ue("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=ue("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=ue("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=ue("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=ue("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=ue("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=ue("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=ue("PaperclipIcon",[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=ue("RepeatIcon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=ue("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=ue("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=ue("SettingsIcon",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=ue("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=ue("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=ue("SquareIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=ue("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=ue("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=ue("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=ue("WrenchIcon",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=ue("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Eu=ge({__name:"ThemeToggle",setup(e){const t=Q(!0);function n(){t.value=!t.value,t.value?(document.documentElement.classList.add("dark"),localStorage.setItem("aura-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("aura-theme","light"))}return mt(()=>{const r=localStorage.getItem("aura-theme");r?t.value=r==="dark":t.value=window.matchMedia("(prefers-color-scheme: dark)").matches,t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),(r,s)=>(S(),L("button",{type:"button",class:"relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"切换亮色 / 暗色模式",onClick:n},[t.value?(S(),Ae(M(Iu),{key:0,class:"h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400"})):(S(),Ae(M(ku),{key:1,class:"h-4 w-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-indigo-600"}))]))}}),Vs=[{id:"ai-native",name:"AI 原生与智能体套件",englishName:"AI & Agent Suite",description:"面向大模型工作流、思考链路、代码终端与指令交互的原生动效矩阵",badgeColor:"text-sky-500 bg-sky-500/10 border-sky-500/20",iconName:"Bot"},{id:"interactive-nav",name:"交互与高阶导航套件",englishName:"Interactive & Navigation",description:"以余弦物理、流体胶囊指示器与视口裁切驱动的极佳手感交互",badgeColor:"text-blue-500 bg-blue-500/10 border-blue-500/20",iconName:"Compass"},{id:"space-3d",name:"空间与 3D 纵深套件",englishName:"3D Space & Atmosphere",description:"同心公转轨道、赛博网格、极光破晓天灯与粒子微光氛围",badgeColor:"text-indigo-500 bg-indigo-500/10 border-indigo-500/20",iconName:"Globe"},{id:"borders-cards",name:"流光卡片与微光边框套件",englishName:"Borders & Bento Cards",description:"沿着圆角边框流动的渐变光束与多维信息科技网格便当盒",badgeColor:"text-purple-500 bg-purple-500/10 border-purple-500/20",iconName:"Layers"},{id:"kinetic-typography",name:"文字与动态排版套件",englishName:"Kinetic Typography",description:"连续金属扫光、平滑毫秒数值翻滚与无限无缝平滑跑马灯",badgeColor:"text-emerald-500 bg-emerald-500/10 border-emerald-500/20",iconName:"Sparkles"}],Zt=[{id:"border-beam",name:"BorderBeam",title:"Border Beam（跑马流光渐变边框）",category:"Effect",suiteId:"borders-cards",description:"沿着容器圆角边框匀速流动的彩色流光光束。大模型生成状态、VIP 特权卡片、核心功能高亮的科技感标配。",componentFilename:"BorderBeam.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"modelValue",type:"string | number",default:"''",description:"当前激活的 Tab 项 ID"},{name:"tabs",type:"FluidTabItem[]",default:"[]",description:"Tab 列表（id, label, icon, badge）"}]}],$u={class:"sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80 transition-colors"},Fu={class:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"},Pu={class:"flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md shadow-blue-500/20 text-white transition-transform duration-300 group-hover:scale-105"},Lu={class:"hidden md:flex items-center gap-6 text-sm font-medium"},Ou={class:"flex items-center gap-3"},Du={href:"https://github.com",target:"_blank",rel:"noopener noreferrer",class:"flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"GitHub 仓库"},ju=ge({__name:"Header",setup(e){return(t,n)=>{const r=or("router-link");return S(),L("header",$u,[d("div",Fu,[z(r,{to:"/",class:"flex items-center gap-2.5 group"},{default:Y(()=>[d("div",Pu,[z(M(Ie),{class:"h-5 w-5"})]),n[0]||(n[0]=d("div",{class:"flex flex-col"},[d("div",{class:"flex items-center gap-1.5"},[d("span",{class:"text-lg font-black tracking-tight text-zinc-900 dark:text-white"},[He(" Aura"),d("span",{class:"text-blue-600 dark:text-blue-400"},"UI")]),d("span",{class:"rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300"}," Vue 3.5 ")]),d("span",{class:"text-[10px] text-zinc-400"},"动效原子代码库")],-1))]),_:1}),d("nav",Lu,[z(r,{to:"/",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:Y(()=>[...n[1]||(n[1]=[He(" 官网首页 ",-1)])]),_:1}),z(r,{to:"/docs/border-beam",class:"inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:Y(()=>[z(M(pn),{class:"h-4 w-4"}),d("span",null,"组件库 ("+Z(M(Zt).length)+")",1)]),_:1}),n[2]||(n[2]=d("a",{href:"#features",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}," 核心特性 ",-1))]),d("div",Ou,[z(Eu),d("a",Du,[z(M(vu),{class:"h-4 w-4"})]),z(r,{to:"/docs/border-beam",class:"hidden sm:inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"},{default:Y(()=>[...n[3]||(n[3]=[He(" 浏览代码 ",-1)])]),_:1})])])])}}}),Bu={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50 transition-colors"},Nu={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Vu={class:"flex flex-col md:flex-row items-center justify-between gap-6"},Gu={class:"flex items-center gap-3"},Hu={class:"flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"},Uu={class:"flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"},qu={class:"inline-flex items-center gap-1"},Wu=ge({__name:"Footer",setup(e){return(t,n)=>(S(),L("footer",Bu,[d("div",Nu,[d("div",Vu,[d("div",Gu,[d("div",Hu,[z(M(Ie),{class:"h-4 w-4"})]),n[0]||(n[0]=d("div",null,[d("p",{class:"text-sm font-bold text-zinc-900 dark:text-zinc-100"}," Aura UI (Vue 3) "),d("p",{class:"text-xs text-zinc-500 dark:text-zinc-400"}," 对标 Magic UI / Aceternity UI，属于 Vue 3 的动效原子代码库 ")],-1))]),d("div",Uu,[n[3]||(n[3]=d("span",null,"采用 MIT 协议开源，完全支持 Copy & Paste 即用",-1)),n[4]||(n[4]=d("span",null,"•",-1)),d("span",qu,[n[1]||(n[1]=He(" Built with ",-1)),z(M(yu),{class:"h-3 w-3 text-red-500 fill-red-500"}),n[2]||(n[2]=He(" for Vue 3 ecosystem ",-1))])])])])]))}}),Ku={class:"min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-200"},Xu={class:"flex-1"},Yu=ge({__name:"App",setup(e){return(t,n)=>{const r=or("router-view");return S(),L("div",Ku,[z(ju),d("div",Xu,[z(r)]),z(Wu)])}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const yn=typeof document<"u";function sl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Zu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&sl(e.default)}const ye=Object.assign;function xs(e,t){const n={};for(const r in t){const s=t[r];n[r]=yt(s)?s.map(e):e(s)}return n}const Gn=()=>{},yt=Array.isArray;function ui(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ol=/#/g,Ju=/&/g,Qu=/\//g,ep=/=/g,tp=/\?/g,il=/\+/g,np=/%5B/g,rp=/%5D/g,al=/%5E/g,sp=/%60/g,ll=/%7B/g,op=/%7C/g,cl=/%7D/g,ip=/%20/g;function go(e){return e==null?"":encodeURI(""+e).replace(op,"|").replace(np,"[").replace(rp,"]")}function ap(e){return go(e).replace(ll,"{").replace(cl,"}").replace(al,"^")}function Gs(e){return go(e).replace(il,"%2B").replace(ip,"+").replace(ol,"%23").replace(Ju,"%26").replace(sp,"`").replace(ll,"{").replace(cl,"}").replace(al,"^")}function lp(e){return Gs(e).replace(ep,"%3D")}function cp(e){return go(e).replace(ol,"%23").replace(tp,"%3F")}function dp(e){return cp(e).replace(Qu,"%2F")}function nr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const up=/\/$/,pp=e=>e.replace(up,"");function vs(e,t,n="/"){let r,s={},o="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=t.slice(0,l),o=t.slice(l,a>0?a:t.length),s=e(o.slice(1))),a>=0&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=gp(r??t,n),{fullPath:r+o+i,path:r,query:s,hash:nr(i)}}function fp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function pi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function mp(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Sn(t.matched[r],n.matched[s])&&dl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Sn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function dl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!hp(e[n],t[n]))return!1;return!0}function hp(e,t){return yt(e)?fi(e,t):yt(t)?fi(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function fi(e,t){return yt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function gp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(i).join("/")}const Wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Hs=(function(e){return e.pop="pop",e.push="push",e})({}),ys=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function bp(e){if(!e)if(yn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),pp(e)}const xp=/^[^#]+#/;function vp(e,t){return e.replace(xp,"#")+t}function yp(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const rs=()=>({left:window.scrollX,top:window.scrollY});function wp(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=yp(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function mi(e,t){return(history.state?history.state.position-t:-1)+e}const Us=new Map;function kp(e,t){Us.set(e,t)}function zp(e){const t=Us.get(e);return Us.delete(e),t}function _p(e){return typeof e=="string"||e&&typeof e=="object"}function ul(e){return typeof e=="string"||typeof e=="symbol"}let Pe=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const pl=Symbol("");Pe.MATCHER_NOT_FOUND+"",Pe.NAVIGATION_GUARD_REDIRECT+"",Pe.NAVIGATION_ABORTED+"",Pe.NAVIGATION_CANCELLED+"",Pe.NAVIGATION_DUPLICATED+"";function An(e,t){return ye(new Error,{type:e,[pl]:!0},t)}function Dt(e,t){return e instanceof Error&&pl in e&&(t==null||!!(e.type&t))}const Cp=["params","query","hash"];function Sp(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Cp)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Ap(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(il," "),o=s.indexOf("="),i=nr(o<0?s:s.slice(0,o)),a=o<0?null:nr(s.slice(o+1));if(i in t){let l=t[i];yt(l)||(l=t[i]=[l]),l.push(a)}else t[i]=a}return t}function hi(e){let t="";for(let n in e){const r=e[n];if(n=lp(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(yt(r)?r.map(s=>s&&Gs(s)):[r&&Gs(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Rp(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=yt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Tp=Symbol(""),gi=Symbol(""),bo=Symbol(""),xo=Symbol(""),qs=Symbol("");function $n(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Yt(e,t,n,r,s,o=i=>i()){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const p=m=>{m===!1?l(An(Pe.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?l(m):_p(m)?l(An(Pe.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(i&&r.enterCallbacks[s]===i&&typeof m=="function"&&i.push(m),a())},u=o(()=>e.call(r&&r.instances[s],t,n,p));let c=Promise.resolve(u);e.length<3&&(c=c.then(p)),c.catch(m=>l(m))})}function ws(e,t,n,r,s=o=>o()){const o=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(sl(l)){const p=(l.__vccOpts||l)[t];p&&o.push(Yt(p,n,r,i,a,s))}else{let p=l();o.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const c=Zu(u)?u.default:u;i.mods[a]=u,i.components[a]=c;const m=(c.__vccOpts||c)[t];return m&&Yt(m,n,r,i,a,s)()}))}}return o}function Ip(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const a=t.matched[i];a&&(e.matched.find(p=>Sn(p,a))?r.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(p=>Sn(p,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Mp=()=>location.protocol+"//"+location.host;function fl(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let i=s.includes(e.slice(o))?e.slice(o).length:1,a=s.slice(i);return a[0]!=="/"&&(a="/"+a),pi(a,"")}return pi(n,e)+r+s}function Ep(e,t,n,r){let s=[],o=[],i=null;const a=({state:m})=>{const h=fl(e,location),A=n.value,w=t.value;let T=0;if(m){if(n.value=h,t.value=m,i&&i===A){i=null;return}T=w?m.position-w.position:0}else r(h);s.forEach(E=>{E(n.value,A,{delta:T,type:Hs.pop,direction:T?T>0?ys.forward:ys.back:ys.unknown})})};function l(){i=n.value}function p(m){s.push(m);const h=()=>{const A=s.indexOf(m);A>-1&&s.splice(A,1)};return o.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(ye({},m.state,{scroll:rs()}),"")}}function c(){for(const m of o)m();o=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:p,destroy:c}}function bi(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?rs():null}}function $p(e){const{history:t,location:n}=window,r={value:fl(e,n)},s={value:t.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,p,u){const c=e.indexOf("#"),m=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+l:Mp()+e+l;try{t[u?"replaceState":"pushState"](p,"",m),s.value=p}catch(h){console.error(h),n[u?"replace":"assign"](m)}}function i(l,p){o(l,ye({},t.state,bi(s.value.back,l,s.value.forward,!0),p,{position:s.value.position}),!0),r.value=l}function a(l,p){const u=ye({},s.value,t.state,{forward:l,scroll:rs()});o(u.current,u,!0),o(l,ye({},bi(r.value,l,null),{position:u.position+1},p),!1),r.value=l}return{location:r,state:s,push:a,replace:i}}function Fp(e){e=bp(e);const t=$p(e),n=Ep(e,t.state,t.location,t.replace);function r(o,i=!0){i||n.pauseListeners(),history.go(o)}const s=ye({location:"",base:e,go:r,createHref:vp.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let fn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ne=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ne||{});const Pp={type:fn.Static,value:""},Lp=/[a-zA-Z0-9_]/;function Op(e){if(!e)return[[]];if(e==="/")return[[Pp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${p}": ${h}`)}let n=Ne.Static,r=n;const s=[];let o;function i(){o&&s.push(o),o=[]}let a=0,l,p="",u="";function c(){p&&(n===Ne.Static?o.push({type:fn.Static,value:p}):n===Ne.Param||n===Ne.ParamRegExp||n===Ne.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),o.push({type:fn.Param,value:p,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),p="")}function m(){p+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==Ne.ParamRegExp){r=n,n=Ne.EscapeNext;continue}switch(n){case Ne.Static:l==="/"?(p&&c(),i()):l===":"?(c(),n=Ne.Param):m();break;case Ne.EscapeNext:m(),n=r;break;case Ne.Param:l==="("?n=Ne.ParamRegExp:Lp.test(l)?m():(c(),n=Ne.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ne.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Ne.ParamRegExpEnd:u+=l;break;case Ne.ParamRegExpEnd:c(),n=Ne.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===Ne.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),c(),i(),s}const xi="[^/]+?",Dp={sensitive:!1,strict:!1,start:!0,end:!0};var tt=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(tt||{});const jp=/[.+*?^${}()[\]/\\]/g;function Bp(e,t){const n=ye({},Dp,t),r=[];let s=n.start?"^":"";const o=[];for(const p of e){const u=p.length?[]:[tt.Root];n.strict&&!p.length&&(s+="/");for(let c=0;c<p.length;c++){const m=p[c];let h=tt.Segment+(n.sensitive?tt.BonusCaseSensitive:0);if(m.type===fn.Static)c||(s+="/"),s+=m.value.replace(jp,"\\$&"),h+=tt.Static;else if(m.type===fn.Param){const{value:A,repeatable:w,optional:T,regexp:E}=m;o.push({name:A,repeatable:w,optional:T});const b=E||xi;if(b!==xi){h+=tt.BonusCustomRegExp;try{`${b}`}catch(v){throw new Error(`Invalid custom RegExp for param "${A}" (${b}): `+v.message)}}let x=w?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;c||(x=T&&p.length<2?`(?:/${x})`:"/"+x),T&&(x+="?"),s+=x,h+=tt.Dynamic,T&&(h+=tt.BonusOptional),w&&(h+=tt.BonusRepeatable),b===".*"&&(h+=tt.BonusWildcard)}u.push(h)}r.push(u)}if(n.strict&&n.end){const p=r.length-1;r[p][r[p].length-1]+=tt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function a(p){const u=p.match(i),c={};if(!u)return null;for(let m=1;m<u.length;m++){const h=u[m]||"",A=o[m-1];c[A.name]=h&&A.repeatable?h.split("/"):h}return c}function l(p){let u="",c=!1;for(const m of e){(!c||!u.endsWith("/"))&&(u+="/"),c=!1;for(const h of m)if(h.type===fn.Static)u+=h.value;else if(h.type===fn.Param){const{value:A,repeatable:w,optional:T}=h,E=A in p?p[A]:"";if(yt(E)&&!w)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const b=yt(E)?E.join("/"):E;if(!b)if(T)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):c=!0);else throw new Error(`Missing required param "${A}"`);u+=b}}return u||"/"}return{re:i,score:r,keys:o,parse:a,stringify:l}}function Np(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===tt.Static+tt.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===tt.Static+tt.Segment?1:-1:0}function ml(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=Np(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(vi(r))return 1;if(vi(s))return-1}return s.length-r.length}function vi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Vp={strict:!1,end:!0,sensitive:!1};function Gp(e,t,n){const r=Bp(Op(e.path),n),s=ye(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Hp(e,t){const n=[],r=new Map;t=ui(Vp,t);function s(c){return r.get(c)}function o(c,m,h){const A=!h,w=wi(c);w.aliasOf=h&&h.record;const T=ui(t,c),E=[w];if("alias"in c){const v=typeof c.alias=="string"?[c.alias]:c.alias;for(const y of v)E.push(wi(ye({},w,{components:h?h.record.components:w.components,path:y,aliasOf:h?h.record:w})))}let b,x;for(const v of E){const{path:y}=v;if(m&&y[0]!=="/"){const F=m.record.path,_=F[F.length-1]==="/"?"":"/";v.path=m.record.path+(y&&_+y)}if(b=Gp(v,m,T),h?h.alias.push(b):(x=x||b,x!==b&&x.alias.push(b),A&&c.name&&!ki(b)&&i(c.name)),hl(b)&&l(b),w.children){const F=w.children;for(let _=0;_<F.length;_++)o(F[_],b,h&&h.children[_])}h=h||b}return x?()=>{i(x)}:Gn}function i(c){if(ul(c)){const m=r.get(c);m&&(r.delete(c),n.splice(n.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=n.indexOf(c);m>-1&&(n.splice(m,1),c.record.name&&r.delete(c.record.name),c.children.forEach(i),c.alias.forEach(i))}}function a(){return n}function l(c){const m=Wp(c,n);n.splice(m,0,c),c.record.name&&!ki(c)&&r.set(c.record.name,c)}function p(c,m){let h,A={},w,T;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw An(Pe.MATCHER_NOT_FOUND,{location:c});T=h.record.name,A=ye(yi(m.params,h.keys.filter(x=>!x.optional).concat(h.parent?h.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),c.params&&yi(c.params,h.keys.map(x=>x.name))),w=h.stringify(A)}else if(c.path!=null)w=c.path,h=n.find(x=>x.re.test(w)),h&&(A=h.parse(w),T=h.record.name);else{if(h=m.name?r.get(m.name):n.find(x=>x.re.test(m.path)),!h)throw An(Pe.MATCHER_NOT_FOUND,{location:c,currentLocation:m});T=h.record.name,A=ye({},m.params,c.params),w=h.stringify(A)}const E=[];let b=h;for(;b;)E.unshift(b.record),b=b.parent;return{name:T,path:w,params:A,matched:E,meta:qp(E)}}e.forEach(c=>o(c));function u(){n.length=0,r.clear()}return{addRoute:o,resolve:p,removeRoute:i,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function yi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function wi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Up(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Up(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ki(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function qp(e){return e.reduce((t,n)=>ye(t,n.meta),{})}function Wp(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;ml(e,t[o])<0?r=o:n=o+1}const s=Kp(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Kp(e){let t=e;for(;t=t.parent;)if(hl(t)&&ml(e,t)===0)return t}function hl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function zi(e){const t=Mt(bo),n=Mt(xo),r=ze(()=>{const l=M(e.to);return t.resolve(l)}),s=ze(()=>{const{matched:l}=r.value,{length:p}=l,u=l[p-1],c=n.matched;if(!u||!c.length)return-1;const m=c.findIndex(Sn.bind(null,u));if(m>-1)return m;const h=_i(l[p-2]);return p>1&&_i(u)===h&&c[c.length-1].path!==h?c.findIndex(Sn.bind(null,l[p-2])):m}),o=ze(()=>s.value>-1&&Qp(n.params,r.value.params)),i=ze(()=>s.value>-1&&s.value===n.matched.length-1&&dl(n.params,r.value.params));function a(l={}){if(Jp(l)){const p=t[M(e.replace)?"replace":"push"](M(e.to)).catch(Gn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:r,href:ze(()=>r.value.href),isActive:o,isExactActive:i,navigate:a}}function Xp(e){return e.length===1?e[0]:e}const Yp=ge({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zi,setup(e,{slots:t}){const n=Wr(zi(e)),{options:r}=Mt(bo),s=ze(()=>({[Ci(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ci(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&Xp(t.default(n));return e.custom?o:Cn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Zp=Yp;function Jp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qp(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!yt(s)||s.length!==r.length||r.some((o,i)=>o.valueOf()!==s[i].valueOf()))return!1}return!0}function _i(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ci=(e,t,n)=>e??t??n,ef=ge({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Mt(qs),s=ze(()=>e.route||r.value),o=Mt(gi,0),i=ze(()=>{let p=M(o);const{matched:u}=s.value;let c;for(;(c=u[p])&&!c.components;)p++;return p}),a=ze(()=>s.value.matched[i.value]);vr(gi,ze(()=>i.value+1)),vr(Tp,a),vr(qs,s);const l=Q();return xt(()=>[l.value,a.value,e.name],([p,u,c],[m,h,A])=>{u&&(u.instances[c]=p,h&&h!==u&&p&&p===m&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),p&&u&&(!h||!Sn(u,h)||!m)&&(u.enterCallbacks[c]||[]).forEach(w=>w(p))},{flush:"post"}),()=>{const p=s.value,u=e.name,c=a.value,m=c&&c.components[u];if(!m)return Si(n.default,{Component:m,route:p});const h=c.props[u],A=h?h===!0?p.params:typeof h=="function"?h(p):h:null,T=Cn(m,ye({},A,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(c.instances[u]=null)},ref:l}));return Si(n.default,{Component:T,route:p})||T}}});function Si(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const tf=ef;function nf(e){const t=Hp(e.routes,e),n=e.parseQuery||Ap,r=e.stringifyQuery||hi,s=e.history,o=$n(),i=$n(),a=$n(),l=bc(Wt);let p=Wt;yn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xs.bind(null,$=>""+$),c=xs.bind(null,dp),m=xs.bind(null,nr);function h($,q){let j,ee;return ul($)?(j=t.getRecordMatcher($),ee=q):ee=$,t.addRoute(ee,j)}function A($){const q=t.getRecordMatcher($);q&&t.removeRoute(q)}function w(){return t.getRoutes().map($=>$.record)}function T($){return!!t.getRecordMatcher($)}function E($,q){if(q=ye({},q||l.value),typeof $=="string"){const C=vs(n,$,q.path),I=t.resolve({path:C.path},q),O=s.createHref(C.fullPath);return ye(C,I,{params:m(I.params),hash:nr(C.hash),redirectedFrom:void 0,href:O})}let j;if($.path!=null)j=ye({},$,{path:vs(n,$.path,q.path).path});else{const C=ye({},$.params);for(const I in C)C[I]==null&&delete C[I];j=ye({},$,{params:c(C)}),q.params=c(q.params)}const ee=t.resolve(j,q),f=$.hash||"";ee.params=u(m(ee.params));const g=fp(r,ye({},$,{hash:ap(f),path:ee.path})),k=s.createHref(g);return ye({fullPath:g,hash:f,query:r===hi?Rp($.query):$.query||{}},ee,{redirectedFrom:void 0,href:k})}function b($){return typeof $=="string"?vs(n,$,l.value.path):ye({},$)}function x($,q){if(p!==$)return An(Pe.NAVIGATION_CANCELLED,{from:q,to:$})}function v($){return _($)}function y($){return v(ye(b($),{replace:!0}))}function F($,q){const j=$.matched[$.matched.length-1];if(j&&j.redirect){const{redirect:ee}=j;let f=typeof ee=="function"?ee($,q):ee;return typeof f=="string"&&(f=f.includes("?")||f.includes("#")?f=b(f):{path:f},f.params={}),ye({query:$.query,hash:$.hash,params:f.path!=null?{}:$.params},f)}}function _($,q){const j=p=E($),ee=l.value,f=$.state,g=$.force,k=$.replace===!0,C=F(j,ee);if(C)return _(ye(b(C),{state:typeof C=="object"?ye({},f,C.state):f,force:g,replace:k}),q||j);const I=j;I.redirectedFrom=q;let O;return!g&&mp(r,ee,j)&&(O=An(Pe.NAVIGATION_DUPLICATED,{to:I,from:ee}),Ge(ee,ee,!0,!1)),(O?Promise.resolve(O):J(I,ee)).catch(B=>Dt(B)?Dt(B,Pe.NAVIGATION_GUARD_REDIRECT)?B:W(B):re(B,I,ee)).then(B=>{if(B){if(Dt(B,Pe.NAVIGATION_GUARD_REDIRECT))return _(ye({replace:k},b(B.to),{state:typeof B.to=="object"?ye({},f,B.to.state):f,force:g}),q||I)}else B=V(I,ee,!0,k,f);return oe(I,ee,B),B})}function R($,q){const j=x($,q);return j?Promise.reject(j):Promise.resolve()}function P($){const q=Oe.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext($):$()}function J($,q){let j;const[ee,f,g]=Ip($,q);j=ws(ee.reverse(),"beforeRouteLeave",$,q);for(const C of ee)C.leaveGuards.forEach(I=>{j.push(Yt(I,$,q))});const k=R.bind(null,$,q);return j.push(k),me(j).then(()=>{j=[];for(const C of o.list())j.push(Yt(C,$,q));return j.push(k),me(j)}).then(()=>{j=ws(f,"beforeRouteUpdate",$,q);for(const C of f)C.updateGuards.forEach(I=>{j.push(Yt(I,$,q))});return j.push(k),me(j)}).then(()=>{j=[];for(const C of g)if(C.beforeEnter)if(yt(C.beforeEnter))for(const I of C.beforeEnter)j.push(Yt(I,$,q));else j.push(Yt(C.beforeEnter,$,q));return j.push(k),me(j)}).then(()=>($.matched.forEach(C=>C.enterCallbacks={}),j=ws(g,"beforeRouteEnter",$,q,P),j.push(k),me(j))).then(()=>{j=[];for(const C of i.list())j.push(Yt(C,$,q));return j.push(k),me(j)}).catch(C=>Dt(C,Pe.NAVIGATION_CANCELLED)?C:Promise.reject(C))}function oe($,q,j){a.list().forEach(ee=>P(()=>ee($,q,j)))}function V($,q,j,ee,f){const g=x($,q);if(g)return g;const k=q===Wt,C=yn?history.state:{};j&&(ee||k?s.replace($.fullPath,ye({scroll:k&&C&&C.scroll},f)):s.push($.fullPath,f)),l.value=$,Ge($,q,j,k),W()}let le;function Te(){le||(le=s.listen(($,q,j)=>{if(!ke.listening)return;const ee=E($),f=F(ee,ke.currentRoute.value);if(f){_(ye(f,{replace:!0,force:!0}),ee).catch(Gn);return}p=ee;const g=l.value;yn&&kp(mi(g.fullPath,j.delta),rs()),J(ee,g).catch(k=>Dt(k,Pe.NAVIGATION_ABORTED|Pe.NAVIGATION_CANCELLED)?k:Dt(k,Pe.NAVIGATION_GUARD_REDIRECT)?(_(ye(b(k.to),{force:!0}),ee).then(C=>{Dt(C,Pe.NAVIGATION_ABORTED|Pe.NAVIGATION_DUPLICATED)&&!j.delta&&j.type===Hs.pop&&s.go(-1,!1)}).catch(Gn),Promise.reject()):(j.delta&&s.go(-j.delta,!1),re(k,ee,g))).then(k=>{k=k||V(ee,g,!1),k&&(j.delta&&!Dt(k,Pe.NAVIGATION_CANCELLED)?s.go(-j.delta,!1):j.type===Hs.pop&&Dt(k,Pe.NAVIGATION_ABORTED|Pe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),oe(ee,g,k)}).catch(Gn)}))}let Fe=$n(),pe=$n(),ce;function re($,q,j){W($);const ee=pe.list();return ee.length?ee.forEach(f=>f($,q,j)):console.error($),Promise.reject($)}function Ee(){return ce&&l.value!==Wt?Promise.resolve():new Promise(($,q)=>{Fe.add([$,q])})}function W($){return ce||(ce=!$,Te(),Fe.list().forEach(([q,j])=>$?j($):q()),Fe.reset()),$}function Ge($,q,j,ee){const{scrollBehavior:f}=e;if(!yn||!f)return Promise.resolve();const g=!j&&zp(mi($.fullPath,0))||(ee||!j)&&history.state&&history.state.scroll||null;return ao().then(()=>f($,q,g)).then(k=>k&&wp(k)).catch(k=>re(k,$,q))}const ve=$=>s.go($);let ht;const Oe=new Set,ke={currentRoute:l,listening:!0,addRoute:h,removeRoute:A,clearRoutes:t.clearRoutes,hasRoute:T,getRoutes:w,resolve:E,options:e,push:v,replace:y,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:pe.add,isReady:Ee,install($){$.component("RouterLink",Zp),$.component("RouterView",tf),$.config.globalProperties.$router=ke,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>M(l)}),yn&&!ht&&l.value===Wt&&(ht=!0,v(s.location).catch(ee=>{}));const q={};for(const ee in Wt)Object.defineProperty(q,ee,{get:()=>l.value[ee],enumerable:!0});$.provide(bo,ke),$.provide(xo,aa(q)),$.provide(qs,l);const j=$.unmount;Oe.add($),$.unmount=function(){Oe.delete($),Oe.size<1&&(p=Wt,le&&le(),le=null,l.value=Wt,ht=!1,ce=!1),j()}}};function me($){return $.reduce((q,j)=>q.then(()=>P(j)),Promise.resolve())}return ke}function rf(e){return Mt(xo)}function gl(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=gl(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function sf(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=gl(e))&&(r&&(r+=" "),r+=t);return r}const of=(e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},af=(e,t)=>({classGroupId:e,validator:t}),bl=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Dr="-",Ai=[],lf="arbitrary..",cf=e=>{const t=uf(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:i=>{if(i.startsWith("[")&&i.endsWith("]"))return df(i);const a=i.split(Dr),l=a[0]===""&&a.length>1?1:0;return xl(a,l,t)},getConflictingClassGroupIds:(i,a)=>{if(a){const l=r[i],p=n[i];return l?p?of(p,l):l:p||Ai}return n[i]||Ai}}},xl=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const s=e[t],o=n.nextPart.get(s);if(o){const p=xl(e,t+1,o);if(p)return p}const i=n.validators;if(i===null)return;const a=t===0?e.join(Dr):e.slice(t).join(Dr),l=i.length;for(let p=0;p<l;p++){const u=i[p];if(u.validator(a))return u.classGroupId}},df=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?lf+r:void 0})(),uf=e=>{const{theme:t,classGroups:n}=e;return pf(n,t)},pf=(e,t)=>{const n=bl();for(const r in e){const s=e[r];vo(s,n,r,t)}return n},vo=(e,t,n,r)=>{const s=e.length;for(let o=0;o<s;o++){const i=e[o];ff(i,t,n,r)}},ff=(e,t,n,r)=>{if(typeof e=="string"){mf(e,t,n);return}if(typeof e=="function"){hf(e,t,n,r);return}gf(e,t,n,r)},mf=(e,t,n)=>{const r=e===""?t:vl(t,e);r.classGroupId=n},hf=(e,t,n,r)=>{if(bf(e)){vo(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(af(n,e))},gf=(e,t,n,r)=>{const s=Object.entries(e),o=s.length;for(let i=0;i<o;i++){const[a,l]=s[i];vo(l,vl(t,a),n,r)}},vl=(e,t)=>{let n=e;const r=t.split(Dr),s=r.length;for(let o=0;o<s;o++){const i=r[o];let a=n.nextPart.get(i);a||(a=bl(),n.nextPart.set(i,a)),n=a}return n},bf=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,xf=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const s=(o,i)=>{n[o]=i,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(o){let i=n[o];if(i!==void 0)return i;if((i=r[o])!==void 0)return s(o,i),i},set(o,i){o in n?n[o]=i:s(o,i)}}},Ws="!",Ri=":",vf=[],Ti=(e,t,n,r,s)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:s}),yf=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=s=>{const o=[];let i=0,a=0,l=0,p;const u=s.length;for(let w=0;w<u;w++){const T=s[w];if(i===0&&a===0){if(T===Ri){o.push(s.slice(l,w)),l=w+1;continue}if(T==="/"){p=w;continue}}T==="["?i++:T==="]"?i--:T==="("?a++:T===")"&&a--}const c=o.length===0?s:s.slice(l);let m=c,h=!1;c.endsWith(Ws)?(m=c.slice(0,-1),h=!0):c.startsWith(Ws)&&(m=c.slice(1),h=!0);const A=p&&p>l?p-l:void 0;return Ti(o,h,m,A)};if(t){const s=t+Ri,o=r;r=i=>i.startsWith(s)?o(i.slice(s.length)):Ti(vf,!1,i,void 0,!0)}if(n){const s=r;r=o=>n({className:o,parseClassName:s})}return r},wf=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{t.set(n,1e6+r)}),n=>{const r=[];let s=[];for(let o=0;o<n.length;o++){const i=n[o],a=i[0]==="[",l=t.has(i);a||l?(s.length>0&&(s.sort(),r.push(...s),s=[]),r.push(i)):s.push(i)}return s.length>0&&(s.sort(),r.push(...s)),r}},kf=e=>({cache:xf(e.cacheSize),parseClassName:yf(e),sortModifiers:wf(e),postfixLookupClassGroupIds:zf(e),...cf(e)}),zf=e=>{const t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let r=0;r<n.length;r++)t[n[r]]=!0;return t},_f=/\s+/,Cf=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s,sortModifiers:o,postfixLookupClassGroupIds:i}=t,a=[],l=e.trim().split(_f);let p="";for(let u=l.length-1;u>=0;u-=1){const c=l[u],{isExternal:m,modifiers:h,hasImportantModifier:A,baseClassName:w,maybePostfixModifierPosition:T}=n(c);if(m){p=c+(p.length>0?" "+p:p);continue}let E=!!T,b;if(E){const _=w.substring(0,T);b=r(_);const R=b&&i[b]?r(w):void 0;R&&R!==b&&(b=R,E=!1)}else b=r(w);if(!b){if(!E){p=c+(p.length>0?" "+p:p);continue}if(b=r(w),!b){p=c+(p.length>0?" "+p:p);continue}E=!1}const x=h.length===0?"":h.length===1?h[0]:o(h).join(":"),v=A?x+Ws:x,y=v+b;if(a.indexOf(y)>-1)continue;a.push(y);const F=s(b,E);for(let _=0;_<F.length;++_){const R=F[_];a.push(v+R)}p=c+(p.length>0?" "+p:p)}return p},Sf=(...e)=>{let t=0,n,r,s="";for(;t<e.length;)(n=e[t++])&&(r=yl(n))&&(s&&(s+=" "),s+=r);return s},yl=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=yl(e[r]))&&(n&&(n+=" "),n+=t);return n},Af=(e,...t)=>{let n,r,s,o;const i=l=>{const p=t.reduce((u,c)=>c(u),e());return n=kf(p),r=n.cache.get,s=n.cache.set,o=a,a(l)},a=l=>{const p=r(l);if(p)return p;const u=Cf(l,n);return s(l,u),u};return o=i,(...l)=>o(Sf(...l))},Rf=[],Be=e=>{const t=n=>n[e]||Rf;return t.isThemeGetter=!0,t.themeKey=e,t},wl=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,kl=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Tf=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,If=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Mf=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ef=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,$f=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ff=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Kt=e=>Tf.test(e),de=e=>!!e&&!Number.isNaN(Number(e)),Ct=e=>!!e&&Number.isInteger(Number(e)),ks=e=>e.endsWith("%")&&de(e.slice(0,-1)),jt=e=>If.test(e),zl=()=>!0,Pf=e=>Mf.test(e)&&!Ef.test(e),yo=()=>!1,Lf=e=>$f.test(e),Of=e=>Ff.test(e),Df=e=>!K(e)&&!X(e),jf=e=>e.startsWith("@container")&&(e[10]==="/"&&e[11]!==void 0||e[11]==="s"&&e[16]!==void 0&&e.startsWith("-size/",10)||e[11]==="n"&&e[18]!==void 0&&e.startsWith("-normal/",10)),Bf=e=>nn(e,Sl,yo),K=e=>wl.test(e),ln=e=>nn(e,Al,Pf),Ii=e=>nn(e,Kf,de),Nf=e=>nn(e,Tl,zl),Vf=e=>nn(e,Rl,yo),Mi=e=>nn(e,_l,yo),Gf=e=>nn(e,Cl,Of),mr=e=>nn(e,Il,Lf),X=e=>kl.test(e),Fn=e=>gn(e,Al),Hf=e=>gn(e,Rl),Ei=e=>gn(e,_l),Uf=e=>gn(e,Sl),qf=e=>gn(e,Cl),hr=e=>gn(e,Il,!0),Wf=e=>gn(e,Tl,!0),nn=(e,t,n)=>{const r=wl.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},gn=(e,t,n=!1)=>{const r=kl.exec(e);return r?r[1]?t(r[1]):n:!1},_l=e=>e==="position"||e==="percentage",Cl=e=>e==="image"||e==="url",Sl=e=>e==="length"||e==="size"||e==="bg-size",Al=e=>e==="length",Kf=e=>e==="number",Rl=e=>e==="family-name",Tl=e=>e==="number"||e==="weight",Il=e=>e==="shadow",Xf=()=>{const e=Be("color"),t=Be("font"),n=Be("text"),r=Be("font-weight"),s=Be("tracking"),o=Be("leading"),i=Be("breakpoint"),a=Be("container"),l=Be("spacing"),p=Be("radius"),u=Be("shadow"),c=Be("inset-shadow"),m=Be("text-shadow"),h=Be("drop-shadow"),A=Be("blur"),w=Be("perspective"),T=Be("aspect"),E=Be("ease"),b=Be("animate"),x=()=>["auto","avoid","all","avoid-page","page","left","right","column"],v=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],y=()=>[...v(),X,K],F=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto","contain","none"],R=()=>[X,K,l],P=()=>[Kt,"full","auto",...R()],J=()=>[Ct,"none","subgrid",X,K],oe=()=>["auto",{span:["full",Ct,X,K]},Ct,X,K],V=()=>[Ct,"auto",X,K],le=()=>["auto","min","max","fr",X,K],Te=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Fe=()=>["start","end","center","stretch","center-safe","end-safe"],pe=()=>["auto",...R()],ce=()=>[Kt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...R()],re=()=>[a,Kt,"screen","full","dvw","lvw","svw","min","max","fit",...R()],Ee=()=>[Kt,"screen","full","lh","dvh","lvh","svh","min","max","fit",...R()],W=()=>[e,X,K],Ge=()=>[...v(),Ei,Mi,{position:[X,K]}],ve=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ht=()=>["auto","cover","contain",Uf,Bf,{size:[X,K]}],Oe=()=>[ks,Fn,ln],ke=()=>["","none","full",p,X,K],me=()=>["",de,Fn,ln],$=()=>["solid","dashed","dotted","double"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],j=()=>[de,ks,Ei,Mi],ee=()=>["","none",A,X,K],f=()=>["none",de,X,K],g=()=>["none",de,X,K],k=()=>[de,X,K],C=()=>[Kt,"full",...R()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[jt],breakpoint:[jt],color:[zl],container:[jt],"drop-shadow":[jt],ease:["in","out","in-out"],font:[Df],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[jt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[jt],shadow:[jt],spacing:["px",de],text:[jt],"text-shadow":[jt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Kt,K,X,T]}],container:["container"],"container-type":[{"@container":["","normal","size",X,K]}],"container-named":[jf],columns:[{columns:[de,"auto",K,X,a]}],"break-after":[{"break-after":x()}],"break-before":[{"break-before":x()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:y()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:P()}],"inset-x":[{"inset-x":P()}],"inset-y":[{"inset-y":P()}],start:[{"inset-s":P(),start:P()}],end:[{"inset-e":P(),end:P()}],"inset-bs":[{"inset-bs":P()}],"inset-be":[{"inset-be":P()}],top:[{top:P()}],right:[{right:P()}],bottom:[{bottom:P()}],left:[{left:P()}],visibility:["visible","invisible","collapse"],z:[{z:[Ct,"auto",X,K]}],basis:[{basis:[Kt,"full","auto",a,...R()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[de,Kt,"auto","initial","none",K]}],grow:[{grow:["",de,X,K]}],shrink:[{shrink:["",de,X,K]}],order:[{order:[Ct,"first","last","none",X,K]}],"grid-cols":[{"grid-cols":J()}],"col-start-end":[{col:oe()}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":J()}],"row-start-end":[{row:oe()}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":le()}],"auto-rows":[{"auto-rows":le()}],gap:[{gap:R()}],"gap-x":[{"gap-x":R()}],"gap-y":[{"gap-y":R()}],"justify-content":[{justify:[...Te(),"normal"]}],"justify-items":[{"justify-items":[...Fe(),"normal"]}],"justify-self":[{"justify-self":["auto",...Fe()]}],"align-content":[{content:["normal",...Te()]}],"align-items":[{items:[...Fe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Fe(),{baseline:["","last"]}]}],"place-content":[{"place-content":Te()}],"place-items":[{"place-items":[...Fe(),"baseline"]}],"place-self":[{"place-self":["auto",...Fe()]}],p:[{p:R()}],px:[{px:R()}],py:[{py:R()}],ps:[{ps:R()}],pe:[{pe:R()}],pbs:[{pbs:R()}],pbe:[{pbe:R()}],pt:[{pt:R()}],pr:[{pr:R()}],pb:[{pb:R()}],pl:[{pl:R()}],m:[{m:pe()}],mx:[{mx:pe()}],my:[{my:pe()}],ms:[{ms:pe()}],me:[{me:pe()}],mbs:[{mbs:pe()}],mbe:[{mbe:pe()}],mt:[{mt:pe()}],mr:[{mr:pe()}],mb:[{mb:pe()}],ml:[{ml:pe()}],"space-x":[{"space-x":R()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":R()}],"space-y-reverse":["space-y-reverse"],size:[{size:ce()}],"inline-size":[{inline:["auto",...re()]}],"min-inline-size":[{"min-inline":["auto",...re()]}],"max-inline-size":[{"max-inline":["none",...re()]}],"block-size":[{block:["auto",...Ee()]}],"min-block-size":[{"min-block":["auto",...Ee()]}],"max-block-size":[{"max-block":["none",...Ee()]}],w:[{w:[a,"screen",...ce()]}],"min-w":[{"min-w":[a,"screen","none",...ce()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[i]},...ce()]}],h:[{h:["screen","lh",...ce()]}],"min-h":[{"min-h":["screen","lh","none",...ce()]}],"max-h":[{"max-h":["screen","lh","none",...ce()]}],"font-size":[{text:["base",n,Fn,ln]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Wf,Nf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ks,K]}],"font-family":[{font:[Hf,Vf,t]}],"font-features":[{"font-features":[K]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,X,K]}],"line-clamp":[{"line-clamp":[de,"none",X,Ii]}],leading:[{leading:["none",o,...R()]}],"list-image":[{"list-image":["none",X,K]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",X,K]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:W()}],"text-color":[{text:W()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:[de,"from-font","auto",X,ln]}],"text-decoration-color":[{decoration:W()}],"underline-offset":[{"underline-offset":[de,"auto",X,K]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"tab-size":[{tab:[Ct,X,K]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",X,K]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",X,K]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Ge()}],"bg-repeat":[{bg:ve()}],"bg-size":[{bg:ht()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ct,X,K],radial:["",X,K],conic:["",Ct,X,K]},qf,Gf]}],"bg-color":[{bg:W()}],"gradient-from-pos":[{from:Oe()}],"gradient-via-pos":[{via:Oe()}],"gradient-to-pos":[{to:Oe()}],"gradient-from":[{from:W()}],"gradient-via":[{via:W()}],"gradient-to":[{to:W()}],rounded:[{rounded:ke()}],"rounded-s":[{"rounded-s":ke()}],"rounded-e":[{"rounded-e":ke()}],"rounded-t":[{"rounded-t":ke()}],"rounded-r":[{"rounded-r":ke()}],"rounded-b":[{"rounded-b":ke()}],"rounded-l":[{"rounded-l":ke()}],"rounded-ss":[{"rounded-ss":ke()}],"rounded-se":[{"rounded-se":ke()}],"rounded-ee":[{"rounded-ee":ke()}],"rounded-es":[{"rounded-es":ke()}],"rounded-tl":[{"rounded-tl":ke()}],"rounded-tr":[{"rounded-tr":ke()}],"rounded-br":[{"rounded-br":ke()}],"rounded-bl":[{"rounded-bl":ke()}],"border-w":[{border:me()}],"border-w-x":[{"border-x":me()}],"border-w-y":[{"border-y":me()}],"border-w-s":[{"border-s":me()}],"border-w-e":[{"border-e":me()}],"border-w-bs":[{"border-bs":me()}],"border-w-be":[{"border-be":me()}],"border-w-t":[{"border-t":me()}],"border-w-r":[{"border-r":me()}],"border-w-b":[{"border-b":me()}],"border-w-l":[{"border-l":me()}],"divide-x":[{"divide-x":me()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":me()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...$(),"hidden","none"]}],"divide-style":[{divide:[...$(),"hidden","none"]}],"border-color":[{border:W()}],"border-color-x":[{"border-x":W()}],"border-color-y":[{"border-y":W()}],"border-color-s":[{"border-s":W()}],"border-color-e":[{"border-e":W()}],"border-color-bs":[{"border-bs":W()}],"border-color-be":[{"border-be":W()}],"border-color-t":[{"border-t":W()}],"border-color-r":[{"border-r":W()}],"border-color-b":[{"border-b":W()}],"border-color-l":[{"border-l":W()}],"divide-color":[{divide:W()}],"outline-style":[{outline:[...$(),"none","hidden"]}],"outline-offset":[{"outline-offset":[de,X,K]}],"outline-w":[{outline:["",de,Fn,ln]}],"outline-color":[{outline:W()}],shadow:[{shadow:["","inner","none",u,hr,mr]}],"shadow-color":[{shadow:W()}],"inset-shadow":[{"inset-shadow":["none",c,hr,mr]}],"inset-shadow-color":[{"inset-shadow":W()}],"ring-w":[{ring:me()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:W()}],"ring-offset-w":[{"ring-offset":[de,ln]}],"ring-offset-color":[{"ring-offset":W()}],"inset-ring-w":[{"inset-ring":me()}],"inset-ring-color":[{"inset-ring":W()}],"text-shadow":[{"text-shadow":["none",m,hr,mr]}],"text-shadow-color":[{"text-shadow":W()}],opacity:[{opacity:[de,X,K]}],"mix-blend":[{"mix-blend":[...q(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":q()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[de]}],"mask-image-linear-from-pos":[{"mask-linear-from":j()}],"mask-image-linear-to-pos":[{"mask-linear-to":j()}],"mask-image-linear-from-color":[{"mask-linear-from":W()}],"mask-image-linear-to-color":[{"mask-linear-to":W()}],"mask-image-t-from-pos":[{"mask-t-from":j()}],"mask-image-t-to-pos":[{"mask-t-to":j()}],"mask-image-t-from-color":[{"mask-t-from":W()}],"mask-image-t-to-color":[{"mask-t-to":W()}],"mask-image-r-from-pos":[{"mask-r-from":j()}],"mask-image-r-to-pos":[{"mask-r-to":j()}],"mask-image-r-from-color":[{"mask-r-from":W()}],"mask-image-r-to-color":[{"mask-r-to":W()}],"mask-image-b-from-pos":[{"mask-b-from":j()}],"mask-image-b-to-pos":[{"mask-b-to":j()}],"mask-image-b-from-color":[{"mask-b-from":W()}],"mask-image-b-to-color":[{"mask-b-to":W()}],"mask-image-l-from-pos":[{"mask-l-from":j()}],"mask-image-l-to-pos":[{"mask-l-to":j()}],"mask-image-l-from-color":[{"mask-l-from":W()}],"mask-image-l-to-color":[{"mask-l-to":W()}],"mask-image-x-from-pos":[{"mask-x-from":j()}],"mask-image-x-to-pos":[{"mask-x-to":j()}],"mask-image-x-from-color":[{"mask-x-from":W()}],"mask-image-x-to-color":[{"mask-x-to":W()}],"mask-image-y-from-pos":[{"mask-y-from":j()}],"mask-image-y-to-pos":[{"mask-y-to":j()}],"mask-image-y-from-color":[{"mask-y-from":W()}],"mask-image-y-to-color":[{"mask-y-to":W()}],"mask-image-radial":[{"mask-radial":[X,K]}],"mask-image-radial-from-pos":[{"mask-radial-from":j()}],"mask-image-radial-to-pos":[{"mask-radial-to":j()}],"mask-image-radial-from-color":[{"mask-radial-from":W()}],"mask-image-radial-to-color":[{"mask-radial-to":W()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":v()}],"mask-image-conic-pos":[{"mask-conic":[de]}],"mask-image-conic-from-pos":[{"mask-conic-from":j()}],"mask-image-conic-to-pos":[{"mask-conic-to":j()}],"mask-image-conic-from-color":[{"mask-conic-from":W()}],"mask-image-conic-to-color":[{"mask-conic-to":W()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Ge()}],"mask-repeat":[{mask:ve()}],"mask-size":[{mask:ht()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",X,K]}],filter:[{filter:["","none",X,K]}],blur:[{blur:ee()}],brightness:[{brightness:[de,X,K]}],contrast:[{contrast:[de,X,K]}],"drop-shadow":[{"drop-shadow":["","none",h,hr,mr]}],"drop-shadow-color":[{"drop-shadow":W()}],grayscale:[{grayscale:["",de,X,K]}],"hue-rotate":[{"hue-rotate":[de,X,K]}],invert:[{invert:["",de,X,K]}],saturate:[{saturate:[de,X,K]}],sepia:[{sepia:["",de,X,K]}],"backdrop-filter":[{"backdrop-filter":["","none",X,K]}],"backdrop-blur":[{"backdrop-blur":ee()}],"backdrop-brightness":[{"backdrop-brightness":[de,X,K]}],"backdrop-contrast":[{"backdrop-contrast":[de,X,K]}],"backdrop-grayscale":[{"backdrop-grayscale":["",de,X,K]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[de,X,K]}],"backdrop-invert":[{"backdrop-invert":["",de,X,K]}],"backdrop-opacity":[{"backdrop-opacity":[de,X,K]}],"backdrop-saturate":[{"backdrop-saturate":[de,X,K]}],"backdrop-sepia":[{"backdrop-sepia":["",de,X,K]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":R()}],"border-spacing-x":[{"border-spacing-x":R()}],"border-spacing-y":[{"border-spacing-y":R()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",X,K]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[de,"initial",X,K]}],ease:[{ease:["linear","initial",E,X,K]}],delay:[{delay:[de,X,K]}],animate:[{animate:["none",b,X,K]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,X,K]}],"perspective-origin":[{"perspective-origin":y()}],rotate:[{rotate:f()}],"rotate-x":[{"rotate-x":f()}],"rotate-y":[{"rotate-y":f()}],"rotate-z":[{"rotate-z":f()}],scale:[{scale:g()}],"scale-x":[{"scale-x":g()}],"scale-y":[{"scale-y":g()}],"scale-z":[{"scale-z":g()}],"scale-3d":["scale-3d"],skew:[{skew:k()}],"skew-x":[{"skew-x":k()}],"skew-y":[{"skew-y":k()}],transform:[{transform:[X,K,"","none","gpu","cpu"]}],"transform-origin":[{origin:y()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:C()}],"translate-x":[{"translate-x":C()}],"translate-y":[{"translate-y":C()}],"translate-z":[{"translate-z":C()}],"translate-none":["translate-none"],zoom:[{zoom:[Ct,X,K]}],accent:[{accent:W()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:W()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",X,K]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":W()}],"scrollbar-track-color":[{"scrollbar-track":W()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mbs":[{"scroll-mbs":R()}],"scroll-mbe":[{"scroll-mbe":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pbs":[{"scroll-pbs":R()}],"scroll-pbe":[{"scroll-pbe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",X,K]}],fill:[{fill:["none",...W()]}],"stroke-w":[{stroke:[de,Fn,ln,Ii]}],stroke:[{stroke:["none",...W()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["start","end","right","left"],"inset-y":["inset-bs","inset-be","top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["ps","pe","pr","pl"],py:["pbs","pbe","pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["ms","me","mr","ml"],my:["mbs","mbe","mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-s","border-w-e","border-w-r","border-w-l"],"border-w-y":["border-w-bs","border-w-be","border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-s","border-color-e","border-color-r","border-color-l"],"border-color-y":["border-color-bs","border-color-be","border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-ms","scroll-me","scroll-mr","scroll-ml"],"scroll-my":["scroll-mbs","scroll-mbe","scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-ps","scroll-pe","scroll-pr","scroll-pl"],"scroll-py":["scroll-pbs","scroll-pbe","scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Yf=Af(Xf);function Me(...e){return Yf(sf(e))}const Zf={class:"h-full w-full overflow-visible",xmlns:"http://www.w3.org/2000/svg"},Jf=["id"],Qf=["stop-color"],e0=["stop-color"],t0=["rx","ry","stroke","stroke-width","stroke-dasharray"],n0=["rx","ry","stroke","stroke-width","stroke-dasharray"],r0=ge({__name:"BorderBeam",props:{borderWidth:{default:2},size:{default:20},duration:{default:6},colorFrom:{default:"#38bdf8"},colorTo:{default:"#a855f7"},delay:{default:0},reverse:{type:Boolean,default:!1},borderRadius:{default:16},glow:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=co(),r=ze(()=>{if(typeof t.borderRadius=="number")return t.borderRadius;const a=parseFloat(t.borderRadius);return isNaN(a)?16:a}),s=ze(()=>t.size>50?18:Math.min(Math.max(t.size,5),80)),o=ze(()=>`${s.value} ${100-s.value}`),i=ze(()=>({animationDuration:`${t.duration}s`,animationDelay:`-${t.delay}s`,animationDirection:t.reverse?"reverse":"normal"}));return(a,l)=>(S(),L("div",{class:N(M(Me)("pointer-events-none absolute inset-0 rounded-[inherit] overflow-visible",t.class))},[(S(),L("svg",Zf,[d("defs",null,[d("linearGradient",{id:`border-beam-grad-${M(n)}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[d("stop",{offset:"0%","stop-color":t.colorFrom},null,8,Qf),d("stop",{offset:"100%","stop-color":t.colorTo},null,8,e0)],8,Jf)]),t.glow?(S(),L("rect",{key:0,pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${M(n)})`,"stroke-width":t.borderWidth*2,"stroke-dasharray":o.value,"stroke-linecap":"round",opacity:"0.45",class:"border-beam-svg-motion blur-[3px]",style:Ve(i.value)},null,12,t0)):Le("",!0),d("rect",{pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${M(n)})`,"stroke-width":t.borderWidth,"stroke-dasharray":o.value,"stroke-linecap":"round",class:"border-beam-svg-motion",style:Ve(i.value)},null,12,n0)]))],2))}}),lt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Ks=lt(r0,[["__scopeId","data-v-bf918acf"]]),s0={class:"relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-white"},o0=ge({__name:"ShimmerButton",props:{shimmerColor:{default:"#38bdf8"},shimmerSize:{default:"0.12em"},shimmerDuration:{default:"2.5s"},borderRadius:{default:"9999px"},class:{}},setup(e){const t=e,n=ze(()=>({"--shimmer-color":t.shimmerColor,"--shimmer-size":t.shimmerSize,"--speed":t.shimmerDuration,"--radius":t.borderRadius}));return(r,s)=>(S(),L("button",{style:Ve(n.value),class:N(M(Me)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white transition-all duration-300 active:scale-95","border border-white/10 [border-radius:var(--radius)]","bg-zinc-900/90 shadow-md hover:shadow-lg hover:shadow-sky-500/20 dark:bg-black/90",t.class))},[s[0]||(s[0]=d("div",{class:"shimmer-spin-container pointer-events-none absolute -inset-[100%] [aspect-ratio:1] [border-radius:inherit]"},[d("div",{class:"shimmer-spin-gradient h-full w-full animate-shimmer-spin"})],-1)),s[1]||(s[1]=d("div",{class:"absolute [inset:var(--shimmer-size)] [border-radius:inherit] bg-zinc-950/95 transition-colors duration-300 group-hover:bg-zinc-900/95"},null,-1)),d("span",s0,[at(r.$slots,"default",{},void 0,!0)])],6))}}),Hn=lt(o0,[["__scopeId","data-v-6b251134"]]),i0=ge({__name:"ShinyText",props:{text:{},duration:{default:2.5},variant:{default:"white"},class:{}},setup(e){const t=e,n=ze(()=>({"--duration":`${t.duration}s`}));return(r,s)=>(S(),L("span",{style:Ve(n.value),class:N(M(Me)("shiny-text-root inline-block font-bold bg-clip-text text-transparent",t.variant==="white"&&"shiny-variant-white",t.variant==="cyber"&&"shiny-variant-cyber",t.class))},[at(r.$slots,"default",{},()=>[He(Z(t.text),1)],!0)],6))}}),Un=lt(i0,[["__scopeId","data-v-31108f82"]]),a0=ge({__name:"RetroGrid",props:{angle:{default:65},cellSize:{default:60},opacity:{default:.5},lightLineColor:{default:"#94a3b8"},darkLineColor:{default:"#38bdf8"},mask:{type:Boolean,default:!0},maskClass:{},class:{}},setup(e){const t=e,n=ze(()=>({"--grid-angle":`${t.angle}deg`,"--cell-size":`${t.cellSize}px`,"--opacity":t.opacity.toString(),"--light-line":t.lightLineColor,"--dark-line":t.darkLineColor}));return(r,s)=>(S(),L("div",{style:Ve(n.value),class:N(M(Me)("pointer-events-none absolute h-full w-full overflow-hidden opacity-[var(--opacity)] [perspective:200px]",t.class))},[d("div",{class:N(M(Me)("absolute inset-0 [transform:rotateX(var(--grid-angle))]",t.mask&&"retro-grid-horizon-mask"))},[...s[0]||(s[0]=[d("div",{class:"retro-grid-plane animate-retro-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]"},null,-1)])],2)],6))}}),Xs=lt(a0,[["__scopeId","data-v-2d20ad14"]]),Ml=ge({__name:"BentoGrid",props:{class:{}},setup(e){const t=e;return(n,r)=>(S(),L("div",{class:N(M(Me)("grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",t.class))},[at(n.$slots,"default")],2))}}),l0={class:"relative z-0 h-44 w-full overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"},c0={class:"relative z-10 flex flex-col gap-2 pt-4"},d0={class:"flex items-center gap-2.5"},u0={class:"text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},p0={class:"text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"},f0={key:0,class:"mt-3 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400"},m0=ge({__name:"BentoCard",props:{name:{},description:{},class:{},href:{},cta:{},spotlightRadius:{default:300}},setup(e){const t=e,n=Q(0),r=Q(0),s=Q(!1);function o(i){const a=i.currentTarget.getBoundingClientRect();n.value=i.clientX-a.left,r.value=i.clientY-a.top}return(i,a)=>{const l=or("router-link");return S(),L("div",{class:N(M(Me)("group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300","border border-zinc-200 bg-white/70 shadow-sm backdrop-blur-md hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10",t.class)),onMousemove:o,onMouseenter:a[0]||(a[0]=p=>s.value=!0),onMouseleave:a[1]||(a[1]=p=>s.value=!1)},[d("div",{class:"pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",style:Ve({background:`radial-gradient(${t.spotlightRadius}px circle at ${n.value}px ${r.value}px, var(--spotlight-color), transparent 80%)`})},null,4),d("div",l0,[at(i.$slots,"background",{},void 0,!0)]),d("div",c0,[d("div",d0,[at(i.$slots,"icon",{},void 0,!0),d("h3",u0,Z(t.name),1)]),d("p",p0,Z(t.description),1),t.cta||i.$slots.cta?(S(),L("div",f0,[at(i.$slots,"cta",{},()=>[t.href?(S(),Ae(l,{key:0,to:t.href,class:"inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"},{default:Y(()=>[He(Z(t.cta)+" ",1),a[2]||(a[2]=d("span",{"aria-hidden":"true"},"→",-1))]),_:1},8,["to"])):Le("",!0)],!0)])):Le("",!0)])],34)}}}),et=lt(m0,[["__scopeId","data-v-f7ebca2d"]]),h0=ge({__name:"Marquee",props:{duration:{default:30},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},repeat:{default:4},class:{}},setup(e){const t=e,n=ze(()=>({"--duration":`${t.duration}s`}));return(r,s)=>(S(),L("div",{style:Ve(n.value),class:N(M(Me)("group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",t.vertical?"flex-col":"flex-row",t.class))},[(S(!0),L(fe,null,Ue(t.repeat,o=>(S(),L("div",{key:o,class:N(M(Me)("flex shrink-0 justify-around [gap:var(--gap)]",t.vertical?"flex-col animate-marquee-vertical":"flex-row animate-marquee",t.pauseOnHover&&"group-hover:[animation-play-state:paused]",t.reverse&&"[animation-direction:reverse]"))},[at(r.$slots,"default",{},void 0,!0)],2))),128))],6))}}),zr=lt(h0,[["__scopeId","data-v-2ea856f7"]]),g0={"aria-hidden":"true",class:"pointer-events-none h-full w-full fill-neutral-400/60 dark:fill-neutral-600/60 transition-colors"},b0=["id","width","height","x","y"],x0=["cx","cy","r"],v0=["fill"],El=ge({__name:"DotPattern",props:{width:{default:20},height:{default:20},x:{default:0},y:{default:0},cx:{default:1},cy:{default:1},cr:{default:1},glow:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=co(),r=Q(-9999),s=Q(-9999);function o(a){if(!t.glow)return;const l=a.currentTarget.getBoundingClientRect();r.value=a.clientX-l.left,s.value=a.clientY-l.top}function i(){r.value=-9999,s.value=-9999}return(a,l)=>(S(),L("div",{class:N(M(Me)("absolute inset-0 h-full w-full overflow-hidden",t.glow?"pointer-events-auto":"pointer-events-none",t.class)),onMousemove:o,onMouseleave:i},[(S(),L("svg",g0,[d("defs",null,[d("pattern",{id:M(n),width:t.width,height:t.height,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:t.x,y:t.y},[d("circle",{cx:t.cx,cy:t.cy,r:t.cr},null,8,x0)],8,b0)]),d("rect",{width:"100%",height:"100%",fill:`url(#${M(n)})`},null,8,v0)])),t.glow?(S(),L("div",{key:0,class:"absolute inset-0 transition-opacity duration-300",style:Ve({background:`radial-gradient(200px circle at ${r.value}px ${s.value}px, rgba(59, 130, 246, 0.15), transparent 80%)`})},null,4)):Le("",!0)],34))}}),y0={class:"relative z-10 h-full w-full"},$l=ge({__name:"InteractiveParticles",props:{quantity:{default:50},speed:{default:.6},maxRadius:{default:2},mouseRadius:{default:100},color:{},connectLines:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=Q(null);let r=null,s=[];const o={x:-9999,y:-9999};function i(c,m){s=[];for(let h=0;h<t.quantity;h++)s.push({x:Math.random()*c,y:Math.random()*m,vx:(Math.random()-.5)*t.speed,vy:(Math.random()-.5)*t.speed,size:Math.random()*t.maxRadius+.8,baseAlpha:Math.random()*.5+.2,alpha:Math.random()*.5+.2})}function a(){const c=n.value;if(!c)return;const m=window.devicePixelRatio||1,h=c.getBoundingClientRect();c.width=h.width*m,c.height=h.height*m;const A=c.getContext("2d");A&&A.scale(m,m),i(h.width,h.height)}function l(c){const m=n.value;if(!m)return;const h=m.getBoundingClientRect();o.x=c.clientX-h.left,o.y=c.clientY-h.top}function p(){o.x=-9999,o.y=-9999}function u(){const c=n.value;if(!c)return;const m=c.getContext("2d");if(!m)return;const h=c.getBoundingClientRect(),A=h.width,w=h.height;m.clearRect(0,0,A,w);const E=document.documentElement.classList.contains("dark")?"255, 255, 255":"59, 130, 246",b=t.color||E;for(let x=0;x<s.length;x++){const v=s[x];v.x+=v.vx,v.y+=v.vy,(v.x<0||v.x>A)&&(v.vx*=-1),(v.y<0||v.y>w)&&(v.vy*=-1);const y=o.x-v.x,F=o.y-v.y,_=Math.sqrt(y*y+F*F);if(_<t.mouseRadius){const R=(t.mouseRadius-_)/t.mouseRadius;v.x-=y/_*R*2,v.y-=F/_*R*2,v.alpha=Math.min(v.baseAlpha+.4,.9)}else v.alpha=v.baseAlpha;if(m.beginPath(),m.arc(v.x,v.y,v.size,0,Math.PI*2),m.fillStyle=b.startsWith("#")?b:`rgba(${b}, ${v.alpha})`,m.fill(),t.connectLines)for(let R=x+1;R<s.length;R++){const P=s[R],J=Math.hypot(v.x-P.x,v.y-P.y);if(J<80){m.beginPath(),m.moveTo(v.x,v.y),m.lineTo(P.x,P.y);const oe=(1-J/80)*.15;m.strokeStyle=`rgba(${E}, ${oe})`,m.lineWidth=.6,m.stroke()}}}r=requestAnimationFrame(u)}return mt(()=>{a(),window.addEventListener("resize",a),u()}),Pt(()=>{window.removeEventListener("resize",a),r!==null&&cancelAnimationFrame(r)}),xt(()=>t.quantity,()=>{const c=n.value;if(c){const m=c.getBoundingClientRect();i(m.width,m.height)}}),(c,m)=>(S(),L("div",{class:N(M(Me)("relative h-full w-full overflow-hidden",t.class)),onMousemove:l,onMouseleave:p},[d("canvas",{ref_key:"canvasRef",ref:n,class:"pointer-events-none absolute inset-0 h-full w-full"},null,512),d("div",y0,[at(c.$slots,"default")])],34))}}),w0=ge({__name:"Meteors",props:{number:{default:20},angle:{default:215},minDelay:{default:.2},maxDelay:{default:1.2},minDuration:{default:2},maxDuration:{default:8},class:{}},setup(e){const t=e,n=ze(()=>Array.from({length:t.number}).map(()=>{const r=Math.floor(Math.random()*100),s=Math.floor(Math.random()*100),o=(Math.random()*(t.maxDelay-t.minDelay)+t.minDelay).toFixed(2),i=(Math.random()*(t.maxDuration-t.minDuration)+t.minDuration).toFixed(2);return{top:`${r}%`,left:`${s}%`,animationDelay:`${o}s`,animationDuration:`${i}s`}}));return(r,s)=>(S(),L("div",{class:N(M(Me)("pointer-events-none absolute inset-0 overflow-hidden",t.class))},[(S(!0),L(fe,null,Ue(n.value,(o,i)=>(S(),L("span",{key:i,style:Ve({...o,"--angle":`${t.angle}deg`}),class:"animate-meteor absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[var(--angle)] dark:bg-sky-400 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-slate-500 before:to-transparent dark:before:from-sky-400"},null,4))),128))],2))}}),Fl=lt(w0,[["__scopeId","data-v-7d09918c"]]),k0=ge({__name:"Ripple",props:{mainCircleSize:{default:210},mainCircleOpacity:{default:.24},numCircles:{default:8},class:{}},setup(e){const t=e;return(n,r)=>(S(),L("div",{class:N(M(Me)("pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",t.class))},[(S(!0),L(fe,null,Ue(t.numCircles,s=>(S(),L("div",{key:s,style:Ve({width:`${t.mainCircleSize+(s-1)*70}px`,height:`${t.mainCircleSize+(s-1)*70}px`,opacity:Math.max(.04,t.mainCircleOpacity-(s-1)*.025),animationDelay:`${(s-1)*.06}s`,borderStyle:s===t.numCircles?"dashed":"solid",borderWidth:"1px"}),class:"animate-ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-500/40 bg-blue-500/5 shadow-[0_0_16px_rgba(59,130,246,0.1)] dark:border-sky-400/30 dark:bg-sky-400/5"},null,4))),128))],2))}}),Pl=lt(k0,[["__scopeId","data-v-98c398f7"]]),_r=ge({__name:"NumberTicker",props:{value:{},direction:{default:"up"},duration:{default:2},delay:{default:0},decimalPlaces:{default:0},class:{}},setup(e){const t=e,n=Q(null),r=Q("0");let s=null,o=null,i=!1;function a(u){return u===1?1:1-Math.pow(2,-10*u)}function l(u){return new Intl.NumberFormat("en-US",{minimumFractionDigits:t.decimalPlaces,maximumFractionDigits:t.decimalPlaces}).format(u)}function p(){if(i)return;i=!0;const u=t.direction==="down"?t.value:0,c=t.direction==="down"?0:t.value,m=t.duration*1e3;let h=null;setTimeout(()=>{function A(w){h||(h=w);const T=w-h,E=Math.min(T/m,1),b=a(E),x=u+(c-u)*b;r.value=l(x),E<1?s=requestAnimationFrame(A):r.value=l(c)}s=requestAnimationFrame(A)},t.delay*1e3)}return mt(()=>{r.value=l(t.direction==="down"?t.value:0),n.value?(o=new IntersectionObserver(u=>{u[0].isIntersecting&&(p(),o&&o.disconnect())},{threshold:.1}),o.observe(n.value)):p()}),Pt(()=>{s&&cancelAnimationFrame(s),o&&o.disconnect()}),xt(()=>t.value,()=>{i=!1,p()}),(u,c)=>(S(),L("span",{ref_key:"spanRef",ref:n,class:N(M(Me)("inline-block tabular-nums tracking-wider",t.class))},Z(r.value),3))}}),z0=["width","height","viewBox"],_0=["d","stroke","stroke-width","stroke-opacity"],C0=["d","stroke","stroke-width"],S0=["id"],A0=["stop-color"],R0=["stop-color"],T0=["stop-color"],I0=["from","to","dur","begin"],M0=["from","to","dur","begin"],jr=ge({__name:"AnimatedBeam",props:{containerRef:{},fromRef:{},toRef:{},curvature:{default:0},reverse:{type:Boolean,default:!1},pathColor:{default:"#94a3b8"},pathWidth:{default:2},pathOpacity:{default:.2},gradientStartColor:{default:"#38bdf8"},gradientStopColor:{default:"#6366f1"},duration:{default:3},delay:{default:0},startXOffset:{default:0},startYOffset:{default:0},endXOffset:{default:0},endYOffset:{default:0},class:{}},setup(e){const t=e,n=co(),r=Q(""),s=Q({width:0,height:0});function o(l){return l?"value"in l?l.value:l instanceof HTMLElement?l:null:null}function i(){const l=o(t.containerRef),p=o(t.fromRef),u=o(t.toRef);if(!l||!p||!u)return;const c=l.getBoundingClientRect(),m=p.getBoundingClientRect(),h=u.getBoundingClientRect();s.value={width:c.width,height:c.height};const A=m.left-c.left+m.width/2+t.startXOffset,w=m.top-c.top+m.height/2+t.startYOffset,T=h.left-c.left+h.width/2+t.endXOffset,E=h.top-c.top+h.height/2+t.endYOffset,b=(A+T)/2,x=(w+E)/2,v=b,y=x-t.curvature;t.curvature===0?r.value=`M ${A},${w} L ${T},${E}`:r.value=`M ${A},${w} Q ${v},${y} ${T},${E}`}let a=null;return mt(()=>{i(),window.addEventListener("resize",i);const l=o(t.containerRef);l&&(a=new ResizeObserver(()=>i()),a.observe(l))}),Pt(()=>{window.removeEventListener("resize",i),a&&a.disconnect()}),xt([()=>o(t.containerRef),()=>o(t.fromRef),()=>o(t.toRef),()=>t.curvature],()=>{i()}),(l,p)=>(S(),L("svg",{width:s.value.width,height:s.value.height,viewBox:`0 0 ${s.value.width} ${s.value.height}`,class:N(M(Me)("pointer-events-none absolute inset-0 h-full w-full select-none overflow-visible",t.class))},[d("path",{d:r.value,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-opacity":t.pathOpacity,"stroke-linecap":"round"},null,8,_0),d("path",{d:r.value,fill:"none",stroke:`url(#beam-gradient-${M(n)})`,"stroke-width":t.pathWidth,"stroke-linecap":"round"},null,8,C0),d("defs",null,[d("linearGradient",{id:`beam-gradient-${M(n)}`,gradientUnits:"userSpaceOnUse"},[d("stop",{offset:"0%","stop-color":t.gradientStartColor,"stop-opacity":"0"},null,8,A0),d("stop",{offset:"50%","stop-color":t.gradientStartColor,"stop-opacity":"1"},null,8,R0),d("stop",{offset:"100%","stop-color":t.gradientStopColor,"stop-opacity":"0"},null,8,T0),d("animate",{attributeName:"x1",from:t.reverse?"100%":"-50%",to:t.reverse?"-50%":"100%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,I0),d("animate",{attributeName:"x2",from:t.reverse?"150%":"0%",to:t.reverse?"0%":"150%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,M0)],8,S0)])],10,z0))}}),E0={class:"relative z-50 -translate-y-32 flex flex-col items-center px-5 text-center"},Ll=ge({__name:"LampEffect",props:{glowColor:{default:"#06b6d4"},class:{}},setup(e){const t=e;return(n,r)=>(S(),L("div",{class:N(M(Me)("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-2xl z-0",t.class))},[r[0]||(r[0]=Ls(`<div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"><div class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div><div class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"></div></div><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"><div class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"></div><div class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div></div><div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl"></div><div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div><div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div><div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></div><div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div><div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-950"></div></div>`,1)),d("div",E0,[at(n.$slots,"default")])],2))}}),Ol=ge({__name:"FlickeringGrid",props:{squareSize:{default:4},gridGap:{default:4},flickerChance:{default:.3},color:{},maxOpacity:{default:.3},class:{}},setup(e){const t=e,n=Q(null),r=Q(null);let s=null,o=new Float32Array(0),i=0,a=0;function l(c,m){i=Math.floor(c/(t.squareSize+t.gridGap)),a=Math.floor(m/(t.squareSize+t.gridGap)),o=new Float32Array(i*a);for(let h=0;h<o.length;h++)o[h]=Math.random()*t.maxOpacity}function p(){const c=n.value,m=r.value;if(!c||!m)return;const h=window.devicePixelRatio||1,A=c.getBoundingClientRect();m.width=A.width*h,m.height=A.height*h;const w=m.getContext("2d");w&&w.scale(h,h),l(A.width,A.height)}function u(){const c=r.value,m=n.value;if(!c||!m)return;const h=c.getContext("2d");if(!h)return;const A=m.getBoundingClientRect();h.clearRect(0,0,A.width,A.height);const T=document.documentElement.classList.contains("dark")?"148, 163, 184":"100, 116, 139",E=t.color||T;for(let b=0;b<a;b++)for(let x=0;x<i;x++){const v=b*i+x;Math.random()<t.flickerChance&&(o[v]=Math.random()*t.maxOpacity);const y=o[v];h.fillStyle=E.startsWith("#")?E:`rgba(${E}, ${y})`;const F=x*(t.squareSize+t.gridGap),_=b*(t.squareSize+t.gridGap);h.fillRect(F,_,t.squareSize,t.squareSize)}s=requestAnimationFrame(u)}return mt(()=>{p(),window.addEventListener("resize",p),u()}),Pt(()=>{window.removeEventListener("resize",p),s&&cancelAnimationFrame(s)}),xt([()=>t.squareSize,()=>t.gridGap],()=>{p()}),(c,m)=>(S(),L("div",{ref_key:"containerRef",ref:n,class:N(M(Me)("pointer-events-none relative h-full w-full overflow-hidden",t.class))},[d("canvas",{ref_key:"canvasRef",ref:r,class:"absolute inset-0 h-full w-full"},null,512)],2))}}),$0={class:"relative overflow-hidden"},F0={class:"relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center overflow-hidden"},P0={class:"relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200"},L0={class:"relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"},O0={class:"relative z-10 mt-12 w-full max-w-2xl text-left"},D0={class:"relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/80"},j0={class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"},B0={class:"border-y border-zinc-200/80 bg-zinc-50/50 py-6 dark:border-zinc-800/80 dark:bg-zinc-950/40"},N0={class:"mx-auto max-w-7xl px-4 text-center"},V0={id:"features",class:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"},G0={class:"text-center max-w-3xl mx-auto mb-16 space-y-4"},H0={class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"},U0={class:"relative h-full w-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50/40 to-transparent dark:from-zinc-900/60 dark:to-transparent"},q0={class:"relative flex h-32 w-56 flex-col justify-between rounded-xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-md backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95"},W0={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-50/50 to-blue-50/20 border border-blue-100/50 dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800"},K0={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50/30 to-white dark:from-zinc-950 dark:to-zinc-900"},X0={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-50/30 to-transparent dark:from-zinc-900/50 dark:to-transparent"},Y0={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"},Z0={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50"},J0={class:"relative h-full w-full flex flex-col justify-center overflow-hidden rounded-xl p-3 bg-zinc-50/60 dark:bg-zinc-900/40"},Q0={class:"relative h-full w-full overflow-hidden rounded-xl bg-slate-950 p-4"},em={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center"},tm={class:"relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40"},nm={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent flex flex-col items-center justify-center p-4"},rm={class:"text-4xl font-black text-emerald-600 dark:text-emerald-400"},sm={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4"},om={class:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800/80"},im={class:"text-center max-w-3xl mx-auto mb-12 space-y-3"},am={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400"},lm={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},cm={class:"flex items-center justify-between mb-4"},dm={class:"flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60"},um={class:"rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-[11px] font-mono font-bold text-zinc-600 dark:text-zinc-300"},pm={class:"text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2"},fm={class:"text-[11px] font-mono text-zinc-400 block mt-0.5"},mm={class:"mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"},hm={class:"mt-4 flex flex-wrap gap-1.5"},gm={class:"mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between"},bm={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"},xm={class:"mt-8 flex items-center justify-center gap-4"},vm={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-20 dark:border-zinc-800/80 dark:bg-zinc-950/40"},ym={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},wm={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},km={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},zm={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400"},_m={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},Cm={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400"},Sm={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},Am={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400"},Rm=ge({__name:"HomeView",setup(e){const t=Q(null),n=Q(null),r=Q(null),s=Q(null);function o(u){switch(u){case"ai-native":return tl;case"interactive-nav":return js;case"space-3d":return Lr;case"borders-cards":return pn;case"kinetic-typography":return Ie;default:return Ie}}function i(u){return Zt.filter(c=>c.suiteId===u)}const a=["Vue 3.5+","TypeScript","Tailwind CSS","Composition API","Vite 6","HTML5 Canvas","Web Animations API","Zero-Config"],l=Q(!1);function p(){navigator.clipboard.writeText("npm i @vueuse/core clsx tailwind-merge"),l.value=!0,setTimeout(()=>{l.value=!1},2e3)}return(u,c)=>{const m=or("router-link");return S(),L("div",$0,[d("section",F0,[z(Xs,{angle:65,opacity:.45}),d("div",P0,[z(M(Ie),{class:"h-3.5 w-3.5 text-blue-500"}),z(Un,{text:"Vue 3 的动效原子代码库现已上线"}),c[0]||(c[0]=d("span",{class:"rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] text-blue-600 dark:text-blue-400"}," v1.0 ",-1))]),c[4]||(c[4]=d("h1",{class:"relative z-10 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight"},[He(" 专属于 Vue 3 的 "),d("span",{class:"block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400"}," 高阶动效原子库 ")],-1)),c[5]||(c[5]=d("p",{class:"relative z-10 mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400"},[He(" 不再重复造普通表单，全面对标 Magic UI 与 Aceternity UI。"),d("br",{class:"hidden sm:inline"}),He(" 面向 "),d("strong",null,"AI 官网、SaaS 营销页、酷炫个人主页"),He("，提供 60fps 单文件即用的动效积木。 ")],-1)),d("div",L0,[z(m,{to:"/docs/border-beam"},{default:Y(()=>[z(Hn,{"shimmer-color":"#60a5fa",class:"h-12 px-8 text-base"},{default:Y(()=>[c[1]||(c[1]=d("span",null,"立即浏览组件",-1)),z(M(kr),{class:"h-4 w-4"})]),_:1})]),_:1}),d("button",{type:"button",class:"inline-flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-800",onClick:p},[l.value?(S(),Ae(M(ns),{key:0,class:"h-4 w-4 text-emerald-500"})):(S(),Ae(M(tr),{key:1,class:"h-4 w-4 text-zinc-400"})),d("span",null,Z(l.value?"已复制依赖指令":"复制基础依赖指令"),1)])]),d("div",O0,[d("div",D0,[z(Ks,{size:90,duration:6,"color-from":"#38bdf8","color-to":"#a855f7","border-width":2,"border-radius":16}),c[3]||(c[3]=Ls('<div class="mb-4 flex items-center justify-between border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60"><div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-rose-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span><span class="ml-2 font-mono text-xs text-zinc-400">components/BorderBeam.vue</span></div><div class="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Zero-Config / 粘贴即跑</span></div></div>',1)),d("div",j0,[c[2]||(c[2]=Ls('<div class="space-y-1 text-zinc-600 dark:text-zinc-300"><p><span class="text-purple-500">&lt;template&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;div</span> <span class="text-amber-500">class=</span><span class="text-emerald-500">&quot;relative rounded-2xl&quot;</span><span class="text-blue-500">&gt;</span></p><p class="pl-8"><span class="text-blue-500">&lt;BorderBeam</span> <span class="text-amber-500">:duration=</span><span class="text-emerald-500">&quot;5&quot;</span> <span class="text-amber-500">:border-width=</span><span class="text-emerald-500">&quot;2&quot;</span> <span class="text-blue-500">/&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;/div&gt;</span></p><p><span class="text-purple-500">&lt;/template&gt;</span></p></div>',1)),z(m,{to:"/docs/border-beam",class:"shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"},{default:Y(()=>[He(" 浏览全部 "+Z(M(Zt).length)+" 款动效 → ",1)]),_:1})])])])]),d("section",B0,[d("div",N0,[c[7]||(c[7]=d("p",{class:"mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase"}," 原生融合的技术栈与动效标准 ",-1)),z(zr,{duration:25,"pause-on-hover":!0},{default:Y(()=>[(S(),L(fe,null,Ue(a,h=>d("div",{key:h,class:"flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-5 py-2 text-xs font-bold text-zinc-700 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300"},[c[6]||(c[6]=d("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),d("span",null,Z(h),1)])),64))]),_:1})])]),d("section",V0,[d("div",G0,[d("h2",H0," 全面对标顶流 · 5 大主题套件 · "+Z(M(Zt).length)+" 款高阶动效全装配 ",1),c[8]||(c[8]=d("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 每一个组件都经过精心打磨，在移动端与桌面端保持 60fps 满帧性能，全部开箱即用，支持 Clean Light 与 Deep Dark 双模自适应。 ",-1))]),z(Ml,null,{default:Y(()=>[z(et,{name:"Border Beam",description:"现代 CSS 路径动画，高光激光沿圆角边框飞速流转，AI 推理与核心 VIP 的视觉焦点",cta:"查看详情与代码",href:"/docs/border-beam"},{icon:Y(()=>[z(M(Ie),{class:"h-5 w-5 text-sky-500"})]),background:Y(()=>[d("div",U0,[d("div",q0,[z(Ks,{size:65,duration:3.5,"color-from":"#06b6d4","color-to":"#6366f1","border-width":2,"border-radius":12}),c[9]||(c[9]=d("div",{class:"flex items-center justify-between"},[d("div",{class:"flex items-center gap-2"},[d("span",{class:"relative flex h-2 w-2"},[d("span",{class:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),d("span",{class:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]),d("span",{class:"text-xs font-bold text-zinc-800 dark:text-zinc-200"},"AI 推理状态")]),d("span",{class:"rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-sky-600 dark:text-sky-400"},"360° 流动")],-1)),c[10]||(c[10]=d("div",{class:"space-y-1.5"},[d("div",{class:"h-2 w-4/5 rounded-full bg-zinc-200 dark:bg-zinc-700"}),d("div",{class:"h-2 w-3/5 rounded-full bg-gradient-to-r from-sky-500/40 to-indigo-500/40"})],-1))])])]),_:1}),z(et,{name:"Interactive Particles",description:"原生 Canvas 2D 粒子引擎，支持鼠标悬浮动态引力排斥、微线互联与 60fps 满帧性能",cta:"查看详情与代码",href:"/docs/interactive-particles"},{icon:Y(()=>[z(M(Vn),{class:"h-5 w-5 text-amber-500"})]),background:Y(()=>[d("div",W0,[z($l,{quantity:38,speed:.75,"mouse-radius":85,"connect-lines":!0,class:"absolute inset-0 h-full w-full"}),c[11]||(c[11]=d("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[d("div",{class:"flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1 text-xs font-mono font-medium text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900/60 dark:bg-zinc-900/80 dark:text-blue-400"},[d("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"}),d("span",null,"悬浮鼠标即刻磁吸交互")])],-1))])]),_:1}),z(et,{name:"Retro Grid",description:"3D 倾斜无限延展赛博网格，原生区分明暗模式线条色彩，渲染极具科技纵深感的背景",cta:"查看详情与代码",href:"/docs/retro-grid"},{icon:Y(()=>[z(M(pn),{class:"h-5 w-5 text-indigo-500"})]),background:Y(()=>[d("div",K0,[z(Xs,{angle:65,opacity:.85,"cell-size":34,"light-line-color":"#6366f1","dark-line-color":"#38bdf8"}),c[12]||(c[12]=d("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[d("span",{class:"rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-xs backdrop-blur-md dark:border-indigo-900/80 dark:bg-zinc-900/90 dark:text-indigo-400"}," 3D 空间动态透视 ")],-1))])]),_:1}),z(et,{name:"Shimmer Button",description:"360° 旋转锥形流光高光外圈，适配核心 CTA 与付费引导，鼠标悬停即刻聚光",cta:"查看详情与代码",href:"/docs/shimmer-button"},{icon:Y(()=>[z(M(Ie),{class:"h-5 w-5 text-pink-500"})]),background:Y(()=>[d("div",X0,[z(Hn,{"shimmer-color":"#ec4899","shimmer-duration":"2.4s",class:"shadow-lg"},{default:Y(()=>[z(M(Ie),{class:"h-4 w-4 text-pink-400"}),c[13]||(c[13]=d("span",null,"360° 旋转光晕按钮",-1))]),_:1}),c[14]||(c[14]=d("span",{class:"mt-3 text-[11px] font-mono text-zinc-400"},"悬停查看高光边缘旋转",-1))])]),_:1}),z(et,{name:"Shiny Text",description:"金属质感微光划过文字，2.5s 线性平滑连续循环，高亮 Hero 标题与特色特性",cta:"查看详情与代码",href:"/docs/shiny-text"},{icon:Y(()=>[z(M(Ie),{class:"h-5 w-5 text-amber-500"})]),background:Y(()=>[d("div",Y0,[c[15]||(c[15]=d("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"},null,-1)),z(Un,{text:"✨ Metallic Shiny Sheen",class:"relative z-10 text-xl font-black tracking-tight",speed:2.2}),c[16]||(c[16]=d("p",{class:"relative z-10 mt-2 text-xs font-mono text-zinc-400"},"高对比连续金属质感流动",-1))])]),_:1}),z(et,{name:"Dot Pattern",description:"极简矢量波点底纹，支持鼠标实时光晕跟随聚光灯，轻量零性能损耗",cta:"查看详情与代码",href:"/docs/dot-pattern"},{icon:Y(()=>[z(M(Ru),{class:"h-5 w-5 text-emerald-500"})]),background:Y(()=>[d("div",Z0,[z(El,{width:16,height:16,cr:1.2,glow:!0}),c[17]||(c[17]=d("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[d("span",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}," 移动鼠标点亮光晕 ")],-1))])]),_:1}),z(et,{name:"Marquee",description:"纯 CSS 硬件加速无限无缝滚动跑马灯，支持鼠标悬浮暂停、反向循环与变速",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/marquee"},{icon:Y(()=>[z(M(_u),{class:"h-5 w-5 text-blue-500"})]),background:Y(()=>[d("div",J0,[z(zr,{duration:16,"pause-on-hover":!0},{default:Y(()=>[(S(),L(fe,null,Ue(["GPT-4o","Claude 3.5","DeepSeek-V3","Llama 3.3","Gemini 1.5"],h=>d("div",{key:h,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[c[18]||(c[18]=d("span",{class:"h-1.5 w-1.5 rounded-full bg-emerald-500"},null,-1)),d("span",null,Z(h),1)])),64))]),_:1}),z(zr,{duration:20,reverse:!0,"pause-on-hover":!0,class:"mt-2.5"},{default:Y(()=>[(S(),L(fe,null,Ue(["Vue 3.5","TypeScript","Tailwind CSS","Zero-Config","Canvas 2D"],h=>d("div",{key:h,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[c[19]||(c[19]=d("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),d("span",null,Z(h),1)])),64))]),_:1})])]),_:1}),z(et,{name:"Bento Grid",description:"现代 SaaS 模块化栅格系统，卡片集成鼠标跟随 Spotlight 径向聚光灯流光",cta:"查看详情与代码",href:"/docs/bento-grid"},{icon:Y(()=>[z(M(pn),{class:"h-5 w-5 text-purple-500"})]),background:Y(()=>[...c[20]||(c[20]=[d("div",{class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent"},[d("div",{class:"grid grid-cols-2 gap-2 w-full max-w-[200px]"},[d("div",{class:"h-12 rounded-lg border border-purple-300/40 bg-purple-500/10 dark:border-purple-500/30 dark:bg-purple-500/20 flex items-center justify-center text-[10px] font-mono text-purple-600 dark:text-purple-300"}," Col 1 "),d("div",{class:"h-12 rounded-lg border border-blue-300/40 bg-blue-500/10 dark:border-blue-500/30 dark:bg-blue-500/20 flex items-center justify-center text-[10px] font-mono text-blue-600 dark:text-blue-300"}," Col 2 "),d("div",{class:"col-span-2 h-10 rounded-lg border border-indigo-300/40 bg-indigo-500/10 dark:border-indigo-500/30 dark:bg-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-600 dark:text-indigo-300"}," Span 2 · 动态聚光灯 ")])],-1)])]),_:1}),z(et,{name:"Meteors",description:"纯 CSS 赛博流星雨划过，带 50px 渐变光尾与随机延迟，暗黑科技卡片与首屏氛围杀器",cta:"查看详情与代码",href:"/docs/meteors"},{icon:Y(()=>[z(M(Ie),{class:"h-5 w-5 text-sky-400"})]),background:Y(()=>[d("div",Q0,[z(Fl,{number:20}),c[21]||(c[21]=d("div",{class:"flex h-full flex-col justify-end"},[d("span",{class:"text-xs font-mono text-sky-400 font-bold"},"215° 斜掠流星轨迹")],-1))])]),_:1}),z(et,{name:"Ripple",description:"由中心向外周循环脉冲扩散的多层同心圆涟漪，适配 AI 语音拾音、雷达声呐与核心头像高亮",cta:"查看详情与代码",href:"/docs/ripple"},{icon:Y(()=>[z(M(Or),{class:"h-5 w-5 text-blue-500"})]),background:Y(()=>[d("div",em,[z(Pl,{"main-circle-size":110,"num-circles":6}),d("div",tm,[z(M(Or),{class:"h-6 w-6"})])])]),_:1}),z(et,{name:"Number Ticker",description:"采用 easeOutExpo 缓动曲线的平滑数字翻牌器，进入视口自动起跑，SaaS 核心关键业务指标必备",cta:"查看详情与代码",href:"/docs/number-ticker"},{icon:Y(()=>[z(M(el),{class:"h-5 w-5 text-emerald-500"})]),background:Y(()=>[d("div",nm,[d("div",rm,[z(_r,{value:99.99,"decimal-places":2}),c[22]||(c[22]=He("% ",-1))]),c[23]||(c[23]=d("p",{class:"mt-2 text-xs font-mono text-zinc-500"},"SLA 生产高可用性指标",-1))])]),_:1}),z(et,{name:"Animated Beam",description:"Magic UI 标志性连线动效，在多个 DOM 节点间实时计算贝塞尔曲线，驱动 SVG 能量光球脉冲流动",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/animated-beam"},{icon:Y(()=>[z(M(Vn),{class:"h-5 w-5 text-indigo-500"})]),background:Y(()=>[d("div",{ref_key:"homeBeamContainer",ref:t,class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 flex items-center justify-between px-8"},[d("div",{ref_key:"homeBeamUser",ref:n,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-blue-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-blue-400"},[z(M(rl),{class:"h-5 w-5"})],512),d("div",{ref_key:"homeBeamAi",ref:r,class:"z-10 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/40"},[z(M(Ie),{class:"h-6 w-6"})],512),d("div",{ref_key:"homeBeamDb",ref:s,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400"},[z(M(Bs),{class:"h-5 w-5"})],512),z(jr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.2},null,8,["container-ref","from-ref","to-ref"]),z(jr,{"container-ref":t.value,"from-ref":r.value,"to-ref":s.value,duration:2.2,delay:.5},null,8,["container-ref","from-ref","to-ref"])],512)]),_:1}),z(et,{name:"Flickering Grid",description:"Canvas 2D 原生微闪烁网格，每个小方格独立呼吸微光，营造赛博黑客帝国与智能矩阵氛围",cta:"查看详情与代码",href:"/docs/flickering-grid"},{icon:Y(()=>[z(M(pn),{class:"h-5 w-5 text-sky-500"})]),background:Y(()=>[d("div",sm,[z(Ol,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),c[24]||(c[24]=d("div",{class:"relative z-10 flex h-full items-center justify-center"},[d("span",{class:"rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-500 dark:text-sky-400 font-bold"}," 60FPS 矩阵微闪 ")],-1))])]),_:1})]),_:1})]),d("section",om,[d("div",im,[d("div",am,[z(M(Ie),{class:"h-3.5 w-3.5"}),c[25]||(c[25]=d("span",null,"主题套件全套推进",-1))]),c[26]||(c[26]=d("h2",{class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"}," 5 大主题动效矩阵 · 场景全覆盖 ",-1)),c[27]||(c[27]=d("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 按业务应用场景全套推进，彻底告别零散拼凑。从 AI 智能体推理到 3D 纵深空间，全矩阵即拷即用。 ",-1))]),d("div",lm,[(S(!0),L(fe,null,Ue(M(Vs),h=>{var A;return S(),L("div",{key:h.id,class:"group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:hover:border-zinc-700"},[d("div",null,[d("div",cm,[d("div",dm,[(S(),Ae(Yn(o(h.id)),{class:"h-5 w-5"}))]),d("span",um,Z(i(h.id).length)+" 款组件 ",1)]),d("h3",pm,[d("span",null,Z(h.name),1)]),d("span",fm,Z(h.englishName),1),d("p",mm,Z(h.description),1),d("div",hm,[(S(!0),L(fe,null,Ue(i(h.id),w=>(S(),Ae(m,{key:w.id,to:`/docs/${w.id}`,class:"rounded-lg border border-zinc-200/80 bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-700 transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-500/50 dark:hover:bg-blue-950/60 dark:hover:text-blue-400"},{default:Y(()=>[He(Z(w.name),1)]),_:2},1032,["to"]))),128))])]),d("div",gm,[z(m,{to:`/docs/${((A=i(h.id)[0])==null?void 0:A.id)||"border-beam"}`,class:"inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"},{default:Y(()=>[c[28]||(c[28]=d("span",null,"进入套件展厅",-1)),z(M(kr),{class:"h-3.5 w-3.5 transition-transform group-hover:translate-x-1"})]),_:1},8,["to"])])])}),128))])]),d("section",bm,[z(Ll,{class:"min-h-[460px]"},{default:Y(()=>[c[30]||(c[30]=d("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-6xl font-black tracking-tight text-transparent"}," 为极致审美而生的动效原子 ",-1)),c[31]||(c[31]=d("p",{class:"mt-4 max-w-lg text-sm text-slate-400"}," 全面对标 Magic UI 与 Aceternity UI，支持单文件复制即用，零侵入无外部复杂构建负担。 ",-1)),d("div",xm,[z(m,{to:"/docs/lamp-effect"},{default:Y(()=>[z(Hn,{"shimmer-color":"#38bdf8",class:"h-11 px-6 text-sm"},{default:Y(()=>[c[29]||(c[29]=d("span",null,"探索 Lamp Effect",-1)),z(M(kr),{class:"h-4 w-4"})]),_:1})]),_:1})])]),_:1})]),d("section",vm,[d("div",ym,[d("div",wm,[d("div",km,[d("div",zm,[z(M(tr),{class:"h-5 w-5"})]),c[32]||(c[32]=d("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," Copy & Paste 模式 ",-1)),c[33]||(c[33]=d("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不是封闭的黑盒 npm 库。代码完全属于你，复制进你的项目 `src/components/ui` 即可按需自定义与扩展。 ",-1))]),d("div",_m,[d("div",Cm,[z(M(Vn),{class:"h-5 w-5"})]),c[34]||(c[34]=d("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 单文件自包含（Zero-Config） ",-1)),c[35]||(c[35]=d("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 动画关键帧与路径封装在组件内，完全无需在 tailwind.config.js 中配置复杂的 keyframes，避免配置遗漏。 ",-1))]),d("div",Sm,[d("div",Am,[z(M(Ie),{class:"h-5 w-5"})]),c[36]||(c[36]=d("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 真·明暗双模自适应 ",-1)),c[37]||(c[37]=d("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不仅在深黑背景下流光溢彩，更对纯白、浅灰背景做针对性调优，确保在任何业务场景下都有高级质感。 ",-1))])])])])])}}});var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zs={exports:{}},Fi;function Im(){return Fi||(Fi=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=(function(r){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function b(x){return x instanceof l?new l(x.type,b(x.content),x.alias):Array.isArray(x)?x.map(b):x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++o}),b.__id},clone:function b(x,v){v=v||{};var y,F;switch(a.util.type(x)){case"Object":if(F=a.util.objId(x),v[F])return v[F];y={},v[F]=y;for(var _ in x)x.hasOwnProperty(_)&&(y[_]=b(x[_],v));return y;case"Array":return F=a.util.objId(x),v[F]?v[F]:(y=[],v[F]=y,x.forEach(function(R,P){y[P]=b(R,v)}),y);default:return x}},getLanguage:function(b){for(;b;){var x=s.exec(b.className);if(x)return x[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,x){b.className=b.className.replace(RegExp(s,"gi"),""),b.classList.add("language-"+x)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(y){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(y.stack)||[])[1];if(b){var x=document.getElementsByTagName("script");for(var v in x)if(x[v].src==b)return x[v]}return null}},isActive:function(b,x,v){for(var y="no-"+x;b;){var F=b.classList;if(F.contains(x))return!0;if(F.contains(y))return!1;b=b.parentElement}return!!v}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(b,x){var v=a.util.clone(a.languages[b]);for(var y in x)v[y]=x[y];return v},insertBefore:function(b,x,v,y){y=y||a.languages;var F=y[b],_={};for(var R in F)if(F.hasOwnProperty(R)){if(R==x)for(var P in v)v.hasOwnProperty(P)&&(_[P]=v[P]);v.hasOwnProperty(R)||(_[R]=F[R])}var J=y[b];return y[b]=_,a.languages.DFS(a.languages,function(oe,V){V===J&&oe!=b&&(this[oe]=_)}),_},DFS:function b(x,v,y,F){F=F||{};var _=a.util.objId;for(var R in x)if(x.hasOwnProperty(R)){v.call(x,R,x[R],y||R);var P=x[R],J=a.util.type(P);J==="Object"&&!F[_(P)]?(F[_(P)]=!0,b(P,v,null,F)):J==="Array"&&!F[_(P)]&&(F[_(P)]=!0,b(P,v,R,F))}}},plugins:{},highlightAll:function(b,x){a.highlightAllUnder(document,b,x)},highlightAllUnder:function(b,x,v){var y={callback:v,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",y),y.elements=Array.prototype.slice.apply(y.container.querySelectorAll(y.selector)),a.hooks.run("before-all-elements-highlight",y);for(var F=0,_;_=y.elements[F++];)a.highlightElement(_,x===!0,y.callback)},highlightElement:function(b,x,v){var y=a.util.getLanguage(b),F=a.languages[y];a.util.setLanguage(b,y);var _=b.parentElement;_&&_.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(_,y);var R=b.textContent,P={element:b,language:y,grammar:F,code:R};function J(V){P.highlightedCode=V,a.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,a.hooks.run("after-highlight",P),a.hooks.run("complete",P),v&&v.call(P.element)}if(a.hooks.run("before-sanity-check",P),_=P.element.parentElement,_&&_.nodeName.toLowerCase()==="pre"&&!_.hasAttribute("tabindex")&&_.setAttribute("tabindex","0"),!P.code){a.hooks.run("complete",P),v&&v.call(P.element);return}if(a.hooks.run("before-highlight",P),!P.grammar){J(a.util.encode(P.code));return}if(x&&r.Worker){var oe=new Worker(a.filename);oe.onmessage=function(V){J(V.data)},oe.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else J(a.highlight(P.code,P.grammar,P.language))},highlight:function(b,x,v){var y={code:b,grammar:x,language:v};if(a.hooks.run("before-tokenize",y),!y.grammar)throw new Error('The language "'+y.language+'" has no grammar.');return y.tokens=a.tokenize(y.code,y.grammar),a.hooks.run("after-tokenize",y),l.stringify(a.util.encode(y.tokens),y.language)},tokenize:function(b,x){var v=x.rest;if(v){for(var y in v)x[y]=v[y];delete x.rest}var F=new c;return m(F,F.head,b),u(b,F,x,F.head,0),A(F)},hooks:{all:{},add:function(b,x){var v=a.hooks.all;v[b]=v[b]||[],v[b].push(x)},run:function(b,x){var v=a.hooks.all[b];if(!(!v||!v.length))for(var y=0,F;F=v[y++];)F(x)}},Token:l};r.Prism=a;function l(b,x,v,y){this.type=b,this.content=x,this.alias=v,this.length=(y||"").length|0}l.stringify=function b(x,v){if(typeof x=="string")return x;if(Array.isArray(x)){var y="";return x.forEach(function(J){y+=b(J,v)}),y}var F={type:x.type,content:b(x.content,v),tag:"span",classes:["token",x.type],attributes:{},language:v},_=x.alias;_&&(Array.isArray(_)?Array.prototype.push.apply(F.classes,_):F.classes.push(_)),a.hooks.run("wrap",F);var R="";for(var P in F.attributes)R+=" "+P+'="'+(F.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+F.tag+' class="'+F.classes.join(" ")+'"'+R+">"+F.content+"</"+F.tag+">"};function p(b,x,v,y){b.lastIndex=x;var F=b.exec(v);if(F&&y&&F[1]){var _=F[1].length;F.index+=_,F[0]=F[0].slice(_)}return F}function u(b,x,v,y,F,_){for(var R in v)if(!(!v.hasOwnProperty(R)||!v[R])){var P=v[R];P=Array.isArray(P)?P:[P];for(var J=0;J<P.length;++J){if(_&&_.cause==R+","+J)return;var oe=P[J],V=oe.inside,le=!!oe.lookbehind,Te=!!oe.greedy,Fe=oe.alias;if(Te&&!oe.pattern.global){var pe=oe.pattern.toString().match(/[imsuy]*$/)[0];oe.pattern=RegExp(oe.pattern.source,pe+"g")}for(var ce=oe.pattern||oe,re=y.next,Ee=F;re!==x.tail&&!(_&&Ee>=_.reach);Ee+=re.value.length,re=re.next){var W=re.value;if(x.length>b.length)return;if(!(W instanceof l)){var Ge=1,ve;if(Te){if(ve=p(ce,Ee,b,le),!ve||ve.index>=b.length)break;var me=ve.index,ht=ve.index+ve[0].length,Oe=Ee;for(Oe+=re.value.length;me>=Oe;)re=re.next,Oe+=re.value.length;if(Oe-=re.value.length,Ee=Oe,re.value instanceof l)continue;for(var ke=re;ke!==x.tail&&(Oe<ht||typeof ke.value=="string");ke=ke.next)Ge++,Oe+=ke.value.length;Ge--,W=b.slice(Ee,Oe),ve.index-=Ee}else if(ve=p(ce,0,W,le),!ve)continue;var me=ve.index,$=ve[0],q=W.slice(0,me),j=W.slice(me+$.length),ee=Ee+W.length;_&&ee>_.reach&&(_.reach=ee);var f=re.prev;q&&(f=m(x,f,q),Ee+=q.length),h(x,f,Ge);var g=new l(R,V?a.tokenize($,V):$,Fe,$);if(re=m(x,f,g),j&&m(x,re,j),Ge>1){var k={cause:R+","+J,reach:ee};u(b,x,v,re.prev,Ee,k),_&&k.reach>_.reach&&(_.reach=k.reach)}}}}}}function c(){var b={value:null,prev:null,next:null},x={value:null,prev:b,next:null};b.next=x,this.head=b,this.tail=x,this.length=0}function m(b,x,v){var y=x.next,F={value:v,prev:x,next:y};return x.next=F,y.prev=F,b.length++,F}function h(b,x,v){for(var y=x.next,F=0;F<v&&y!==b.tail;F++)y=y.next;x.next=y,y.prev=x,b.length-=F}function A(b){for(var x=[],v=b.head.next;v!==b.tail;)x.push(v.value),v=v.next;return x}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(b){var x=JSON.parse(b.data),v=x.language,y=x.code,F=x.immediateClose;r.postMessage(a.highlight(y,a.languages[v],v)),F&&r.close()},!1)),a;var w=a.util.currentScript();w&&(a.filename=w.src,w.hasAttribute("data-manual")&&(a.manual=!0));function T(){a.manual||a.highlightAll()}if(!a.manual){var E=document.readyState;E==="loading"||E==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return a})(t);e.exports&&(e.exports=n),typeof $i<"u"&&($i.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(s,o){var i={};i["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[o]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};a["language-"+o]={pattern:/[\s\S]+/,inside:n.languages[o]};var l={};l[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,s){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:n.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(r){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var o=r.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",s=function(w,T){return"✖ Error "+w+" while fetching file: "+T},o="✖ Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",p="loaded",u="failed",c="pre[data-src]:not(["+a+'="'+p+'"]):not(['+a+'="'+l+'"])';function m(w,T,E){var b=new XMLHttpRequest;b.open("GET",w,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?T(b.responseText):b.status>=400?E(s(b.status,b.statusText)):E(o))},b.send(null)}function h(w){var T=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(T){var E=Number(T[1]),b=T[2],x=T[3];return b?x?[E,Number(x)]:[E,void 0]:[E,E]}}n.hooks.add("before-highlightall",function(w){w.selector+=", "+c}),n.hooks.add("before-sanity-check",function(w){var T=w.element;if(T.matches(c)){w.code="",T.setAttribute(a,l);var E=T.appendChild(document.createElement("CODE"));E.textContent=r;var b=T.getAttribute("data-src"),x=w.language;if(x==="none"){var v=(/\.(\w+)$/.exec(b)||[,"none"])[1];x=i[v]||v}n.util.setLanguage(E,x),n.util.setLanguage(T,x);var y=n.plugins.autoloader;y&&y.loadLanguages(x),m(b,function(F){T.setAttribute(a,p);var _=h(T.getAttribute("data-range"));if(_){var R=F.split(/\r\n?|\n/g),P=_[0],J=_[1]==null?R.length:_[1];P<0&&(P+=R.length),P=Math.max(0,Math.min(P-1,R.length)),J<0&&(J+=R.length),J=Math.max(0,Math.min(J,R.length)),F=R.slice(P,J).join(`
`),T.hasAttribute("data-start")||T.setAttribute("data-start",String(P+1))}E.textContent=F,n.highlightElement(E)},function(F){T.setAttribute(a,u),E.textContent=F})}}),n.plugins.fileHighlight={highlight:function(T){for(var E=(T||document).querySelectorAll(c),b=0,x;x=E[b++];)n.highlightElement(x)}};var A=!1;n.fileHighlight=function(){A||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),A=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(zs)),zs.exports}var Mm=Im();const _s=Tm(Mm);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var Pi={},Li;function Em(){return Li||(Li=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),Pi}Em();Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};s["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var o={};o[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:s},Prism.languages.insertBefore("markup","cdata",o)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);const $m={class:"relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800 text-zinc-100 shadow-sm"},Fm={class:"flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5 text-xs text-zinc-400"},Pm={class:"font-mono"},Lm={class:"max-h-[480px] overflow-auto p-4 text-xs font-mono leading-relaxed"},Om={class:"!m-0 !p-0 !bg-transparent"},Dm=["innerHTML"],Oi=ge({__name:"CodeBlock",props:{code:{},language:{default:"html"},filename:{}},setup(e){const t=e,n=Q(!1),r=ze(()=>{const o=_s.languages[t.language]||_s.languages.markup;return _s.highlight(t.code.trim(),o,t.language)});async function s(){try{await navigator.clipboard.writeText(t.code.trim()),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(o){console.error("Failed to copy",o)}}return(o,i)=>(S(),L("div",$m,[d("div",Fm,[d("span",Pm,Z(t.filename||t.language.toUpperCase()),1),d("button",{type:"button",class:"inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",onClick:s},[n.value?(S(),Ae(M(ns),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(S(),Ae(M(tr),{key:1,class:"h-3.5 w-3.5"})),d("span",null,Z(n.value?"已复制！":"复制代码"),1)])]),d("div",Lm,[d("pre",Om,[d("code",{innerHTML:r.value},null,8,Dm)])])]))}}),jm={class:"space-y-4"},Bm={class:"space-y-1"},Nm={class:"text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},Vm={class:"text-sm text-zinc-500 dark:text-zinc-400"},Gm={class:"overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-sm transition-colors"},Hm={class:"flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 bg-zinc-50/80 px-4 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/60"},Um={class:"flex items-center gap-1 rounded-lg bg-zinc-200/60 p-1 dark:bg-zinc-800/60 text-xs font-medium"},qm={key:0,class:"flex items-center gap-2 text-xs"},Wm={class:"flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-0.5"},Km={class:"relative"},Xm={class:"p-4"},Ym={class:"p-4"},Zm={key:0,class:"mt-8 space-y-3"},Jm={class:"overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800"},Qm={class:"w-full text-left text-xs"},eh={class:"divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono"},th={class:"px-4 py-2.5 font-bold text-blue-600 dark:text-blue-400"},nh={class:"px-4 py-2.5 text-pink-600 dark:text-pink-400"},rh={class:"px-4 py-2.5 text-zinc-500"},sh={class:"px-4 py-2.5 font-sans text-zinc-600 dark:text-zinc-300"},oh=ge({__name:"ComponentPreview",props:{title:{},description:{},componentCode:{},usageCode:{},componentFilename:{},propsList:{}},setup(e){const t=e,n=Q("preview"),r=Q("default"),s=Q(0),o=Q(!0);let i=null;mt(()=>{o.value=document.documentElement.classList.contains("dark"),i=new MutationObserver(()=>{o.value=document.documentElement.classList.contains("dark")}),i.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}),Pt(()=>{i==null||i.disconnect()});const a=ze(()=>r.value==="dark"?!0:r.value==="light"?!1:o.value);function l(){s.value++}return(p,u)=>(S(),L("div",jm,[d("div",Bm,[d("h2",Nm,Z(t.title),1),d("p",Vm,Z(t.description),1)]),d("div",Gm,[d("div",Hm,[d("div",Um,[d("button",{type:"button",class:N(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="preview"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[0]||(u[0]=c=>n.value="preview")},[z(M(bu),{class:"h-3.5 w-3.5"}),u[6]||(u[6]=d("span",null,"实时效果",-1))],2),d("button",{type:"button",class:N(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="component"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[1]||(u[1]=c=>n.value="component")},[z(M(Ds),{class:"h-3.5 w-3.5"}),d("span",null,"组件源码 ("+Z(t.componentFilename)+")",1)],2),d("button",{type:"button",class:N(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="usage"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[2]||(u[2]=c=>n.value="usage")},[z(M(Ds),{class:"h-3.5 w-3.5"}),u[7]||(u[7]=d("span",null,"业务调用 (Usage.vue)",-1))],2)]),n.value==="preview"?(S(),L("div",qm,[u[8]||(u[8]=d("span",{class:"text-zinc-400"},"视窗底色：",-1)),d("div",Wm,[d("button",{type:"button",class:N(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="default"?"bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[3]||(u[3]=c=>r.value="default")}," 自适应 ",2),d("button",{type:"button",class:N(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="light"?"bg-white text-zinc-900 shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[4]||(u[4]=c=>r.value="light")}," 亮白 ",2),d("button",{type:"button",class:N(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="dark"?"bg-black text-white shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:u[5]||(u[5]=c=>r.value="dark")}," 暗黑 ",2)]),d("button",{type:"button",class:"inline-flex items-center gap-1 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",title:"重新触发动效",onClick:l},[z(M(Cu),{class:"h-3.5 w-3.5"})])])):Le("",!0)]),d("div",Km,[xr(d("div",{class:N(["relative flex min-h-[360px] w-full items-center justify-center overflow-hidden p-8 transition-colors duration-200",a.value?"dark bg-black text-zinc-100":"bg-zinc-100/80 text-zinc-900"])},[(S(),L("div",{key:s.value,class:"w-full flex items-center justify-center"},[at(p.$slots,"default",{isDark:a.value})]))],2),[[ms,n.value==="preview"]]),xr(d("div",Xm,[z(Oi,{code:t.componentCode,filename:t.componentFilename,language:"html"},null,8,["code","filename"])],512),[[ms,n.value==="component"]]),xr(d("div",Ym,[z(Oi,{code:t.usageCode,filename:"UsageExample.vue",language:"html"},null,8,["code"])],512),[[ms,n.value==="usage"]])])]),t.propsList&&t.propsList.length>0?(S(),L("div",Zm,[u[10]||(u[10]=d("h3",{class:"text-base font-semibold text-zinc-900 dark:text-zinc-100"}," Props 属性参考 ",-1)),d("div",Jm,[d("table",Qm,[u[9]||(u[9]=d("thead",{class:"border-b border-zinc-200 bg-zinc-50/80 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"},[d("tr",null,[d("th",{class:"px-4 py-2.5"},"属性名"),d("th",{class:"px-4 py-2.5"},"类型"),d("th",{class:"px-4 py-2.5"},"默认值"),d("th",{class:"px-4 py-2.5"},"说明")])],-1)),d("tbody",eh,[(S(!0),L(fe,null,Ue(t.propsList,c=>(S(),L("tr",{key:c.name,class:"text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40"},[d("td",th,Z(c.name),1),d("td",nh,Z(c.type),1),d("td",rh,Z(c.default),1),d("td",sh,Z(c.description),1)]))),128))])])])])):Le("",!0)]))}}),ih=["onMouseenter","onClick"],ah={key:0,class:"pointer-events-none absolute -top-9 z-50 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-800/95 dark:text-zinc-200"},lh=ge({__name:"Dock",props:{items:{},iconSize:{default:44},iconMagnification:{default:68},iconDistance:{default:120},direction:{default:"bottom"},class:{}},setup(e){const t=e,n=Q(null),r=Q(null),s=Q(null);function o(c){r.value=c.clientX}function i(){r.value=null,s.value=null}function a(c){if(r.value===null||!c)return 1;const m=c.getBoundingClientRect(),h=m.left+m.width/2,A=Math.abs(r.value-h);if(A>t.iconDistance)return 1;const w=A/t.iconDistance,T=(t.iconMagnification-t.iconSize)/t.iconSize,E=.5*(1+Math.cos(w*Math.PI));return 1+T*E}const l=Q([]);function p(c,m){c&&(l.value[m]=c)}function u(c){const m=l.value[c],h=a(m);return Math.round(t.iconSize*h)}return(c,m)=>(S(),L("div",{ref_key:"dockRef",ref:n,class:N(M(Me)("mx-auto flex h-16 items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/70 px-4 py-2 shadow-xl backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 transition-all duration-200 select-none",t.direction==="bottom"&&"items-end",t.direction==="top"&&"items-start",t.direction==="middle"&&"items-center",t.class)),onMousemove:o,onMouseleave:i},[t.items&&t.items.length>0?(S(!0),L(fe,{key:0},Ue(t.items,(h,A)=>(S(),L("div",{key:h.id,ref_for:!0,ref:w=>p(w,A),class:"group relative flex items-center justify-center cursor-pointer transition-all duration-100 ease-out",style:Ve({width:`${u(A)}px`,height:`${u(A)}px`}),onMouseenter:w=>s.value=h.label||null,onClick:w=>h.onClick&&h.onClick()},[(S(),Ae(Yn(h.href?"a":"button"),{href:h.href,class:N(["flex h-full w-full items-center justify-center rounded-2xl border transition-colors shadow-sm","border-zinc-200/70 bg-white/90 text-zinc-700 hover:text-zinc-950","dark:border-zinc-700/60 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:text-white"])},{default:Y(()=>[(S(),Ae(Yn(h.icon),{class:"h-1/2 w-1/2 transition-transform duration-100"}))]),_:2},1032,["href"])),z(ts,{name:"dock-fade"},{default:Y(()=>[s.value===h.label&&h.label?(S(),L("div",ah,Z(h.label),1)):Le("",!0)]),_:2},1024),m[0]||(m[0]=d("span",{class:"absolute -bottom-1.5 h-1 w-1 rounded-full bg-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-zinc-500"},null,-1))],44,ih))),128)):at(c.$slots,"default",{},void 0,!0,1)],34))}}),ch=lt(lh,[["__scopeId","data-v-3c8b0d2e"]]),dh={key:0,class:"pointer-events-none absolute inset-0 h-full w-full select-none",xmlns:"http://www.w3.org/2000/svg"},uh=["r","stroke","stroke-width"],ph={class:"orbit-rotator pointer-events-auto h-full w-full"},fh={class:"orbit-item pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"},mh=ge({__name:"OrbitLogos",props:{radius:{default:120},duration:{default:20},delay:{default:0},reverse:{type:Boolean,default:!1},path:{type:Boolean,default:!0},pathColor:{},pathWidth:{default:1},tiltAngle:{default:0},class:{}},setup(e){const t=e,n=ze(()=>({"--radius":`${t.radius}px`,"--duration":`${t.duration}s`,"--delay":`-${t.delay}s`,"--direction":t.reverse?"reverse":"normal","--counter-direction":t.reverse?"normal":"reverse","--tilt":`${t.tiltAngle}deg`,width:`${t.radius*2}px`,height:`${t.radius*2}px`}));return(r,s)=>(S(),L("div",{style:Ve(n.value),class:N(M(Me)("pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full [transform-style:preserve-3d]",t.class))},[t.path?(S(),L("svg",dh,[d("circle",{class:"stroke-zinc-300/60 dark:stroke-zinc-800/80 stroke-dashed",cx:"50%",cy:"50%",r:t.radius,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-dasharray":"4 4"},null,8,uh)])):Le("",!0),d("div",ph,[d("div",fh,[at(r.$slots,"default",{},void 0,!0)])])],6))}}),gr=lt(mh,[["__scopeId","data-v-583093f1"]]),hh=["src","alt"],gh={class:"pointer-events-none absolute bottom-4 right-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},bh=["src","alt"],xh={class:"pointer-events-none absolute bottom-4 left-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},vh={class:"absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-zinc-800 shadow-xl backdrop-blur-md transition-transform duration-100 hover:scale-110 active:scale-95 dark:border-zinc-700/80 dark:bg-zinc-900/90 dark:text-zinc-200"},yh=ge({__name:"ImageCompare",props:{beforeImage:{},afterImage:{},beforeLabel:{default:"Before"},afterLabel:{default:"After"},initialPosition:{default:50},class:{}},setup(e){const t=e,n=Q(null),r=Q(t.initialPosition),s=Q(!1);function o(u){if(!n.value)return;const c=n.value.getBoundingClientRect(),m=u-c.left,h=Math.min(Math.max(m/c.width*100,0),100);r.value=Number(h.toFixed(2))}function i(u){s.value=!0,o(u.clientX)}function a(u){s.value&&o(u.clientX)}function l(){s.value=!1}function p(u){!s.value||u.touches.length===0||o(u.touches[0].clientX)}return mt(()=>{window.addEventListener("mouseup",l),window.addEventListener("mousemove",a),window.addEventListener("touchend",l),window.addEventListener("touchmove",p)}),Pt(()=>{window.removeEventListener("mouseup",l),window.removeEventListener("mousemove",a),window.removeEventListener("touchend",l),window.removeEventListener("touchmove",p)}),(u,c)=>(S(),L("div",{ref_key:"containerRef",ref:n,class:N(M(Me)("relative select-none overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 shadow-xl cursor-ew-resize dark:border-zinc-800/80",t.class)),onMousedown:i,onTouchstart:c[0]||(c[0]=m=>s.value=!0)},[d("img",{src:t.afterImage,alt:t.afterLabel,class:"pointer-events-none h-full w-full object-cover"},null,8,hh),d("div",gh,Z(t.afterLabel),1),d("div",{class:"pointer-events-none absolute inset-0 h-full w-full overflow-hidden",style:Ve({clipPath:`inset(0 ${100-r.value}% 0 0)`})},[d("img",{src:t.beforeImage,alt:t.beforeLabel,class:"h-full w-full object-cover"},null,8,bh),d("div",xh,Z(t.beforeLabel),1)],4),d("div",{class:"pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]",style:Ve({left:`${r.value}%`})},[d("div",vh,[z(M(gu),{class:"h-4 w-4"})])],4)],34))}}),wh={class:"group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/90 dark:bg-zinc-950/90"},kh={class:"flex items-center gap-2.5 min-w-0"},zh={class:"relative flex h-3 w-3 shrink-0 items-center justify-center"},_h={class:"flex flex-col min-w-0"},Ch={class:"flex items-center gap-2"},Sh={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate"},Ah={class:"text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5"},Rh={class:"flex items-center gap-2 shrink-0 text-xs text-zinc-500"},Th={key:0,class:"flex items-center gap-1 font-mono text-[11px] rounded-md bg-zinc-100 px-2 py-0.5 dark:bg-zinc-900 dark:text-zinc-300"},Ih={key:0,class:"border-t border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-2.5"},Mh={class:"mt-0.5 shrink-0"},Eh={key:3,class:"inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 text-[10px] text-zinc-400 dark:border-zinc-700"},$h={class:"flex-1 min-w-0"},Fh={class:"flex items-center justify-between"},Ph={key:0,class:"font-mono text-[10px] text-zinc-400 shrink-0 ml-2"},Lh={key:0,class:"text-[11px] text-zinc-400 font-mono mt-0.5 truncate"},Oh=ge({__name:"AgentStatus",props:{status:{default:"thinking"},agentName:{default:"Aura AI Agent"},currentTask:{default:"Thinking and orchestrating subagents..."},elapsed:{type:Boolean,default:!0},steps:{default:()=>[{id:1,name:"Understand user prompt requirements",status:"done",duration:"0.4s"},{id:2,name:"Search codebase for components & hooks",status:"done",duration:"1.2s"},{id:3,name:"Run Playwright headless visual verification",status:"running",detail:"Evaluating DOM computed styles..."},{id:4,name:"Commit and build production artifacts",status:"pending"}]},class:{}},setup(e){const t=e,n=Q(!1),r=Q(0);let s=null;mt(()=>{t.elapsed&&(s=setInterval(()=>{r.value+=.1},100))}),Pt(()=>{s&&clearInterval(s)});const o=ze(()=>`${r.value.toFixed(1)}s`),i=ze(()=>{switch(t.status){case"thinking":return{icon:Ie,label:"思考推演中",color:"text-sky-500 dark:text-sky-400",badgeBg:"bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",pulseBg:"bg-sky-500"};case"running":return{icon:di,label:"自主执行中",color:"text-blue-500 dark:text-blue-400 animate-spin",badgeBg:"bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",pulseBg:"bg-blue-500"};case"tool_call":return{icon:Mu,label:"调用工具中",color:"text-amber-500 dark:text-amber-400",badgeBg:"bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",pulseBg:"bg-amber-500"};case"success":return{icon:li,label:"任务已闭环",color:"text-emerald-500 dark:text-emerald-400",badgeBg:"bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",pulseBg:"bg-emerald-500"};case"error":return{icon:ai,label:"出现异常",color:"text-rose-500 dark:text-rose-400",badgeBg:"bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",pulseBg:"bg-rose-500"};default:return{icon:Ie,label:"待命中",color:"text-zinc-400",badgeBg:"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",pulseBg:"bg-zinc-400"}}});return(a,l)=>(S(),L("div",{class:N(M(Me)("w-full max-w-lg transition-all duration-300",t.class))},[d("div",wh,[d("div",{class:"flex items-center justify-between gap-3 px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60",onClick:l[0]||(l[0]=p=>n.value=!n.value)},[d("div",kh,[d("div",zh,[d("span",{class:N(["absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",i.value.pulseBg])},null,2),d("span",{class:N(["relative inline-flex h-2 w-2 rounded-full",i.value.pulseBg])},null,2)]),d("div",_h,[d("div",Ch,[d("span",Sh,Z(t.agentName),1),d("span",{class:N(["rounded-full border px-2 py-0.2 text-[10px] font-semibold",i.value.badgeBg])},Z(i.value.label),3)]),d("p",Ah,Z(t.currentTask),1)])]),d("div",Rh,[t.elapsed?(S(),L("div",Th,[z(M(nl),{class:"h-3 w-3 text-zinc-400"}),d("span",null,Z(o.value),1)])):Le("",!0),z(M(ho),{class:N(["h-4 w-4 text-zinc-400 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])]),z(ts,{name:"agent-expand"},{default:Y(()=>[n.value&&t.steps&&t.steps.length>0?(S(),L("div",Ih,[l[1]||(l[1]=d("div",{class:"text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2"}," 执行轨迹步骤 (Execution Steps) ",-1)),(S(!0),L(fe,null,Ue(t.steps,(p,u)=>(S(),L("div",{key:p.id,class:"flex items-start gap-2.5 text-xs"},[d("div",Mh,[p.status==="done"?(S(),Ae(M(li),{key:0,class:"h-4 w-4 text-emerald-500"})):p.status==="running"?(S(),Ae(M(di),{key:1,class:"h-4 w-4 text-sky-500 animate-spin"})):p.status==="error"?(S(),Ae(M(ai),{key:2,class:"h-4 w-4 text-rose-500"})):(S(),L("span",Eh,Z(u+1),1))]),d("div",$h,[d("div",Fh,[d("span",{class:N(["font-medium truncate",p.status==="done"&&"text-zinc-700 dark:text-zinc-300",p.status==="running"&&"text-sky-600 dark:text-sky-400 font-semibold",p.status==="pending"&&"text-zinc-400 dark:text-zinc-500",p.status==="error"&&"text-rose-500 font-semibold"])},Z(p.name),3),p.duration?(S(),L("span",Ph,Z(p.duration),1)):Le("",!0)]),p.detail?(S(),L("p",Lh,Z(p.detail),1)):Le("",!0)])]))),128))])):Le("",!0)]),_:1})])],2))}}),Dh=lt(Oh,[["__scopeId","data-v-d55be07e"]]),jh={class:"flex h-10 w-full items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 select-none"},Bh={class:"flex items-center gap-1.5 text-[11px] font-medium text-zinc-400"},Nh={class:"truncate max-w-[220px] sm:max-w-md"},Vh={key:0,class:"flex items-center gap-2"},Gh={key:1,class:"w-12"},Hh={class:"text-blue-400 select-none font-bold"},Uh={class:"text-zinc-100 font-semibold flex-1 break-all"},qh={key:0,class:"inline-block h-4 w-2 translate-y-0.5 bg-blue-500 animate-pulse ml-0.5"},Wh={key:1,class:"text-emerald-400 font-medium break-all"},Kh={key:2,class:"text-rose-400 font-medium break-all"},Xh={key:3,class:"text-amber-400 font-medium break-all"},Yh={key:4,class:"text-sky-400 font-medium break-all"},Zh={key:5,class:"text-zinc-400 break-all"},Jh={key:0,class:"flex items-center gap-2 pt-1"},Qh=ge({__name:"TypewriterTerminal",props:{title:{default:"zsh - aura@developer:~ (80x24)"},lines:{default:()=>[{type:"input",text:"pnpm dlx aura-ui@latest add agent-status dock"},{type:"output",text:"⠋ Resolving packages & peer dependencies..."},{type:"output",text:"✔ Cloned src/components/ui/AgentStatus.vue"},{type:"output",text:"✔ Cloned src/components/ui/Dock.vue"},{type:"success",text:"✨ Successfully installed 2 motion primitives in 260ms."},{type:"input",text:"aura test --visual-regression"},{type:"info",text:"ℹ Running Playwright headless test in Chromium..."},{type:"success",text:"✔ All 19 components passed 60fps frame rate check!"}]},typingSpeed:{default:35},pauseEnd:{default:3500},loop:{type:Boolean,default:!0},controls:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=Q([]),r=Q(0),s=Q(0),o=Q(!1),i=Q(!1),a=Q(!1),l=Q(null);let p=null;function u(){l.value&&(l.value.scrollTop=l.value.scrollHeight)}function c(){p&&clearTimeout(p),n.value=[],r.value=0,s.value=0,o.value=!1,i.value=!1,m()}function m(){if(!t.lines||t.lines.length===0)return;if(r.value>=t.lines.length){o.value=!1,i.value=!0,t.loop&&(p=setTimeout(()=>{c()},t.pauseEnd));return}const A=t.lines[r.value];if(A.type==="input")if(o.value=!0,s.value===0&&n.value.push({type:"input",text:"",prefix:A.prefix||"$ "}),s.value<A.text.length){const w=n.value[n.value.length-1];w.text+=A.text[s.value],s.value++,u();const T=Math.floor(Math.random()*25)-10,E=Math.max(15,t.typingSpeed+T);p=setTimeout(m,E)}else s.value=0,r.value++,o.value=!1,u(),p=setTimeout(m,400);else{o.value=!1,n.value.push({type:A.type,text:A.text,prefix:A.prefix}),r.value++,u();const w=A.delay??220;p=setTimeout(m,w)}}function h(){const A=t.lines.map(w=>`${w.prefix||(w.type==="input"?"$ ":"")}${w.text}`).join(`
`);navigator.clipboard.writeText(A),a.value=!0,setTimeout(()=>{a.value=!1},2e3)}return mt(()=>{c()}),Pt(()=>{p&&clearTimeout(p)}),xt(()=>t.lines,()=>{c()},{deep:!0}),(A,w)=>(S(),L("div",{class:N(M(Me)("relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 font-mono text-xs sm:text-sm text-zinc-300 shadow-2xl backdrop-blur-md dark:border-zinc-800/80",t.class))},[d("div",jh,[w[0]||(w[0]=d("div",{class:"flex items-center gap-2"},[d("span",{class:"h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm transition-transform hover:scale-110"}),d("span",{class:"h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm transition-transform hover:scale-110"}),d("span",{class:"h-3 w-3 rounded-full bg-[#27c93f] shadow-sm transition-transform hover:scale-110"})],-1)),d("div",Bh,[z(M(Ns),{class:"h-3.5 w-3.5 text-zinc-500"}),d("span",Nh,Z(t.title),1)]),t.controls?(S(),L("div",Vh,[d("button",{onClick:c,title:"重新播放",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[z(M(Su),{class:"h-3.5 w-3.5"})]),d("button",{onClick:h,title:"复制所有命令",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[a.value?(S(),Ae(M(ns),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(S(),Ae(M(tr),{key:1,class:"h-3.5 w-3.5"}))])])):(S(),L("div",Gh))]),d("div",{ref_key:"terminalBodyRef",ref:l,class:"max-h-80 min-h-[220px] overflow-y-auto p-4 sm:p-5 space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-800"},[(S(!0),L(fe,null,Ue(n.value,(T,E)=>(S(),L("div",{key:E,class:"flex items-start gap-2 leading-relaxed"},[T.type==="input"?(S(),L(fe,{key:0},[d("span",Hh,Z(T.prefix||"$ "),1),d("span",Uh,[He(Z(T.text)+" ",1),o.value&&E===n.value.length-1?(S(),L("span",qh)):Le("",!0)])],64)):T.type==="success"?(S(),L("span",Wh,Z(T.text),1)):T.type==="error"?(S(),L("span",Kh,Z(T.text),1)):T.type==="warning"?(S(),L("span",Xh,Z(T.text),1)):T.type==="info"?(S(),L("span",Yh,Z(T.text),1)):(S(),L("span",Zh,Z(T.text),1))]))),128)),i.value?(S(),L("div",Jh,[...w[1]||(w[1]=[d("span",{class:"text-blue-400 font-bold select-none"},"$ ",-1),d("span",{class:"inline-block h-4 w-2 bg-zinc-500 animate-pulse"},null,-1)])])):Le("",!0)],512)],2))}}),eg={class:"p-3 sm:p-4 pb-2"},tg=["placeholder"],ng={class:"flex items-center justify-between border-t border-zinc-100 px-3 py-2.5 dark:border-zinc-900"},rg={class:"flex items-center gap-1.5 sm:gap-2"},sg={class:"relative"},og={key:0,class:"absolute bottom-full left-0 mb-2 w-52 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-2xl backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 select-none"},ig=["onClick"],ag={key:0,class:"rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.2 text-[9px] text-zinc-500"},lg={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"上传图像或文件"},cg={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"语音输入"},dg={class:"flex items-center gap-2"},ug=["disabled"],pg=ge({__name:"PromptInput",props:{modelValue:{default:""},placeholder:{default:"向 Aura AI 提问、生成 UI 动效，或输入 / 触发指令..."},loading:{type:Boolean,default:!1},selectedModel:{default:"deepseek-r1"},models:{default:()=>[{id:"deepseek-r1",name:"DeepSeek R1",badge:"Reasoning"},{id:"claude-3-7-sonnet",name:"Claude 3.7 Sonnet",badge:"Hybrid"},{id:"gpt-4o",name:"GPT-4o Omni",badge:"Multimodal"}]},webSearch:{type:Boolean,default:!1},maxRows:{default:6},class:{}},emits:["update:modelValue","submit","stop","update:selectedModel","toggleWebSearch"],setup(e,{emit:t}){const n=e,r=t,s=Q(null),o=Q(!1),i=Q(!1),a=Q(n.webSearch),l=ze({get:()=>n.modelValue,set:T=>r("update:modelValue",T)}),p=ze(()=>n.models.find(T=>T.id===n.selectedModel)||n.models[0]);function u(T){const E=T.target;l.value=E.value,c()}function c(){if(!s.value)return;s.value.style.height="auto";const T=Math.min(s.value.scrollHeight,24*n.maxRows);s.value.style.height=`${T}px`}function m(T){T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),h())}function h(){if(n.loading){r("stop");return}l.value.trim()&&r("submit",l.value)}function A(){a.value=!a.value,r("toggleWebSearch",a.value)}function w(T){r("update:selectedModel",T),i.value=!1}return(T,E)=>(S(),L("div",{class:N(M(Me)("group relative w-full rounded-2xl border transition-all duration-300 shadow-xl backdrop-blur-xl",o.value?"border-blue-500/80 shadow-[0_0_25px_rgba(59,130,246,0.18)] dark:border-blue-400/80 dark:shadow-[0_0_35px_rgba(56,189,248,0.22)]":"border-zinc-200/90 hover:border-zinc-300 dark:border-zinc-800/90 dark:hover:border-zinc-700","bg-white/85 dark:bg-zinc-950/85",n.class))},[d("div",{class:N(["pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-opacity duration-300",o.value?"opacity-100":"opacity-0"])},null,2),d("div",eg,[xr(d("textarea",{ref_key:"textareaRef",ref:s,"onUpdate:modelValue":E[0]||(E[0]=b=>l.value=b),placeholder:n.placeholder,rows:"1",onFocus:E[1]||(E[1]=b=>o.value=!0),onBlur:E[2]||(E[2]=b=>o.value=!1),onInput:u,onKeydown:m,class:"w-full resize-none border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 bg-transparent text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-500 leading-relaxed font-sans shadow-none",style:{outline:"none","box-shadow":"none"}},null,40,tg),[[ru,l.value]])]),d("div",ng,[d("div",rg,[d("div",sg,[d("button",{type:"button",onClick:E[3]||(E[3]=b=>i.value=!i.value),class:"flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"},[z(M(Ie),{class:"h-3.5 w-3.5 text-blue-500"}),d("span",null,Z(p.value.name),1),z(M(ho),{class:"h-3 w-3 text-zinc-400"})]),z(ts,{name:"model-pop"},{default:Y(()=>[i.value?(S(),L("div",og,[E[4]||(E[4]=d("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," 切换推理基座 ",-1)),(S(!0),L(fe,null,Ue(n.models,b=>(S(),L("button",{key:b.id,type:"button",onClick:x=>w(b.id),class:N(["flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",b.id===n.selectedModel?"bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400":"text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"])},[d("span",null,Z(b.name),1),b.badge?(S(),L("span",ag,Z(b.badge),1)):Le("",!0)],10,ig))),128))])):Le("",!0)]),_:1})]),d("button",{type:"button",onClick:A,class:N(["flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium transition-colors border",a.value?"border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400":"border-transparent text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"]),title:"联网实时搜索"},[z(M(Lr),{class:"h-3.5 w-3.5"}),E[5]||(E[5]=d("span",{class:"hidden sm:inline"},"深度搜索",-1))],2),d("button",lg,[z(M(zu),{class:"h-3.5 w-3.5"})]),d("button",cg,[z(M(Or),{class:"h-3.5 w-3.5"})])]),d("div",dg,[E[6]||(E[6]=d("span",{class:"hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-zinc-400"},[d("span",null,"Enter ↵ 发送")],-1)),d("button",{type:"button",onClick:h,disabled:!n.loading&&!l.value.trim(),class:N(["flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 shadow-md",n.loading?"bg-rose-500 text-white hover:bg-rose-600":l.value.trim()?"bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 active:scale-95":"bg-zinc-100 text-zinc-400 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"])},[n.loading?(S(),Ae(M(Tu),{key:0,class:"h-3.5 w-3.5 fill-current"})):(S(),Ae(M(mu),{key:1,class:"h-4 w-4"}))],10,ug)])])],2))}}),fg=lt(pg,[["__scopeId","data-v-22761e01"]]),mg={class:"flex items-center gap-2.5 text-xs"},hg={class:"relative flex h-4 w-4 items-center justify-center"},gg={key:0,class:"absolute -inset-1 rounded-full bg-blue-500/20 animate-ping"},bg={class:"flex items-center gap-2"},xg={class:"font-bold text-zinc-900 dark:text-zinc-100"},vg={class:"inline-flex items-center gap-1 rounded-md bg-zinc-200/60 px-2 py-0.5 font-mono text-[11px] text-zinc-500 dark:bg-zinc-800/80 dark:text-zinc-400"},yg={key:0,class:"border-t border-zinc-200/70 px-4 py-3.5 dark:border-zinc-800/70"},wg={class:"border-l-2 border-blue-500/70 pl-3.5 font-mono text-xs leading-relaxed text-zinc-600 dark:border-blue-400/70 dark:text-zinc-400 whitespace-pre-wrap select-text"},kg=ge({__name:"ThoughtAccordion",props:{duration:{default:"思考用时 12.6 秒"},status:{default:"complete"},defaultOpen:{type:Boolean,default:!0},thoughtText:{default:`> 1. 解析用户需求：为 Vue 3 全系打造顶级 AI 原生交互动效。
> 2. 几何与物理模型推演：使用 CSS 3D 矩阵解构空间深度，保持 60fps 满帧性能。
> 3. 边界与异常收敛：引入状态机阻尼回弹，确保单文件零配置即刻分发。
> 4. 自愈与验证：通过 Playwright 双模态 Chromium 验证无色彩渗漏，交付闭环。`},class:{}},setup(e){const t=e,n=Q(t.defaultOpen),r=Q(!1);function s(){navigator.clipboard.writeText(t.thoughtText),r.value=!0,setTimeout(()=>{r.value=!1},2e3)}return(o,i)=>(S(),L("div",{class:N(M(Me)("w-full overflow-hidden rounded-2xl border transition-all duration-300",n.value?"border-zinc-200/90 bg-zinc-50/70 shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/40":"border-zinc-200/60 bg-white/60 hover:border-zinc-300 dark:border-zinc-800/60 dark:bg-zinc-950/60",t.class))},[d("div",{class:"flex items-center justify-between px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40",onClick:i[2]||(i[2]=a=>n.value=!n.value)},[d("div",mg,[d("div",hg,[z(M(Ie),{class:N(["h-4 w-4 text-blue-500 transition-transform duration-300",t.status==="thinking"&&"animate-spin"])},null,8,["class"]),t.status==="thinking"?(S(),L("span",gg)):Le("",!0)]),d("div",bg,[d("span",xg,Z(t.status==="thinking"?"正在深度思考推演...":"已深度思考"),1),d("span",vg,[z(M(nl),{class:"h-3 w-3"}),d("span",null,Z(t.duration),1)])])]),d("div",{class:"flex items-center gap-1.5",onClick:i[1]||(i[1]=iu(()=>{},["stop"]))},[d("button",{type:"button",onClick:s,title:"复制思考过程",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[r.value?(S(),Ae(M(ns),{key:0,class:"h-3.5 w-3.5 text-emerald-500"})):(S(),Ae(M(tr),{key:1,class:"h-3.5 w-3.5"}))]),d("button",{type:"button",onClick:i[0]||(i[0]=a=>n.value=!n.value),class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[z(M(ho),{class:N(["h-4 w-4 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])])]),z(ts,{name:"thought-slide"},{default:Y(()=>[n.value?(S(),L("div",yg,[d("div",wg,[at(o.$slots,"default",{},()=>[He(Z(t.thoughtText),1)],!0)])])):Le("",!0)]),_:3})],2))}}),zg=lt(kg,[["__scopeId","data-v-00c62984"]]),_g=["onClick","onMouseenter"],Cg=ge({__name:"FluidTabs",props:{modelValue:{default:""},tabs:{default:()=>[]},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,s=Q(null),o=Q([]),i=Q({left:0,width:0,opacity:0}),a=Q({left:0,width:0,opacity:0});function l(h,A){h&&(o.value[A]=h)}function p(){ao(()=>{if(!s.value)return;const h=n.tabs.findIndex(T=>T.id===n.modelValue);if(h===-1||!o.value[h]){i.value.opacity=0;return}const A=s.value.getBoundingClientRect(),w=o.value[h].getBoundingClientRect();i.value={left:w.left-A.left,width:w.width,opacity:1}})}function u(h){if(!s.value||!o.value[h])return;const A=s.value.getBoundingClientRect(),w=o.value[h].getBoundingClientRect();a.value={left:w.left-A.left,width:w.width,opacity:1}}function c(){a.value.opacity=0}function m(h){r("update:modelValue",h),r("change",h)}return xt(()=>n.modelValue,()=>{p()}),xt(()=>n.tabs,()=>{p()},{deep:!0}),mt(()=>{!n.modelValue&&n.tabs.length>0&&r("update:modelValue",n.tabs[0].id),p(),window.addEventListener("resize",p)}),(h,A)=>(S(),L("div",{ref_key:"containerRef",ref:s,class:N(M(Me)("relative inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-zinc-100/80 p-1.5 shadow-inner backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80 select-none",n.class)),onMouseleave:c},[d("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-zinc-200/60 transition-all duration-200 ease-out dark:bg-zinc-800/60",style:Ve({left:`${a.value.left}px`,width:`${a.value.width}px`,opacity:a.value.opacity})},null,4),d("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-800 dark:shadow-black/40",style:Ve({left:`${i.value.left}px`,width:`${i.value.width}px`,opacity:i.value.opacity})},null,4),(S(!0),L(fe,null,Ue(n.tabs,(w,T)=>(S(),L("button",{key:w.id,ref_for:!0,ref:E=>l(E,T),type:"button",onClick:E=>m(w.id),onMouseenter:E=>u(T),class:N(["relative z-10 flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-200",n.modelValue===w.id?"text-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"])},[w.icon?(S(),Ae(Yn(w.icon),{key:0,class:N(["h-4 w-4 transition-transform duration-200",n.modelValue===w.id?"scale-110 text-blue-600 dark:text-blue-400":"text-zinc-400"])},null,8,["class"])):Le("",!0),d("span",null,Z(w.label),1),w.badge?(S(),L("span",{key:1,class:N(["rounded-full px-1.5 py-0.2 text-[10px] font-bold font-mono transition-colors",n.modelValue===w.id?"bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300":"bg-zinc-200/80 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"])},Z(w.badge),3)):Le("",!0)],42,_g))),128))],34))}}),Sg={class:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"},Ag={class:"flex flex-col md:flex-row gap-8"},Rg={class:"w-full md:w-64 shrink-0"},Tg={class:"sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-xs backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70"},Ig={class:"mb-3 px-2 flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider"},Mg={class:"rounded bg-blue-100 dark:bg-blue-950/80 px-1.5 py-0.2 text-[10px] text-blue-600 dark:text-blue-400 font-bold"},Eg={class:"space-y-4"},$g={class:"flex items-center justify-between px-2 py-1 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"},Fg={class:"flex items-center gap-1.5"},Pg={class:"text-zinc-800 dark:text-zinc-200 font-bold"},Lg={class:"rounded bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.2 text-[9px] font-mono text-zinc-500 font-bold"},Og={class:"space-y-0.5"},Dg={class:"truncate"},jg={class:"mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 px-2"},Bg={class:"flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100"},Ng={class:"min-w-0 flex-1"},Vg={class:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white mb-3 shadow-md shadow-blue-500/20"},Gg={key:1,class:"w-full max-w-2xl"},Hg={class:"flex h-full flex-col items-center justify-center p-6 text-center"},Ug={key:5,class:"flex flex-col items-center gap-6 py-8"},qg={class:"text-center"},Wg={class:"text-center mt-2"},Kg={key:6,class:"flex flex-wrap items-center justify-center gap-4 py-8"},Xg={class:"relative z-10 flex items-center justify-between"},Yg={class:"relative z-10 flex flex-col items-center gap-3"},Zg={class:"flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30"},Jg={key:10,class:"grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-3xl py-6"},Qg={class:"inline-flex items-baseline justify-center text-sky-500 dark:text-sky-400"},eb={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},tb={class:"inline-flex items-baseline justify-center text-indigo-500 dark:text-indigo-400"},nb={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},rb={class:"inline-flex items-baseline justify-center text-emerald-500 dark:text-emerald-400"},sb={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},ob={key:12,class:"w-full"},ib={class:"relative z-10 text-center"},ab={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400 mb-3"},lb={class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/30 text-white"},cb={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-sky-500"},db={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-emerald-500"},ub={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-indigo-500"},pb={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-amber-500"},fb={class:"w-full max-w-xl h-72"},mb={class:"flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white/80 p-1 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 shadow-xs"},hb=["onClick"],gb={class:"w-full max-w-xl"},bb={class:"w-full max-w-xl"},xb={class:"w-full max-w-xl"},vb={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-4 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},yb={class:"mt-1 text-sm font-bold text-blue-600 dark:text-blue-400 font-mono"},wb=ge({__name:"DocsView",setup(e){const t=Q(null),n=Q(null),r=Q(null),s=Q(null),o=rf(),i=ze(()=>o.params.id||"border-beam"),a=ze(()=>Zt.find(v=>v.id===i.value)||Zt[0]);function l(v){switch(v){case"ai-native":return tl;case"interactive-nav":return js;case"space-3d":return Lr;case"borders-cards":return pn;case"kinetic-typography":return Ie;default:return Ie}}function p(v){return Zt.filter(y=>y.suiteId===v)}const u=["OpenAI","Anthropic","Google","NVIDIA","DeepSeek","Vercel"],c=[{id:"home",label:"首页概览",icon:wu},{id:"explore",label:"模型广场",icon:js},{id:"agent",label:"AI 智能体",icon:Ie},{id:"files",label:"知识库",icon:xu},{id:"notice",label:"消息通知",icon:hu},{id:"settings",label:"偏好设置",icon:Au}],m=Q("thinking"),h={thinking:"正在多模态解构视觉空间坐标与贝塞尔插值参数...",running:"并行编译并打包 Production Motion Primitives...",tool_call:"调用 Playwright 真实无头浏览器验证 60fps 动效性能...",success:"全套 22 项动效原子组件按 5 大主题套件落地完成！",error:"检测到底层渲染管道异常，正在启动自愈补偿重试..."},A=Q(""),w=Q(!1),T=Q("deepseek-r1");function E(v){w.value=!0,setTimeout(()=>{w.value=!1,A.value=""},2200)}const b=Q("preview"),x=[{id:"preview",label:"实时预览",icon:Ie},{id:"code",label:"组件源码",icon:Ds,badge:"SFC"},{id:"api",label:"API 文档",icon:Ns},{id:"suites",label:"主题矩阵",icon:pn,badge:"5 大套件"}];return(v,y)=>{const F=or("router-link");return S(),L("div",Sg,[d("div",Ag,[d("aside",Rg,[d("div",Tg,[d("div",Ig,[y[4]||(y[4]=d("span",null,"主题套件矩阵",-1)),d("span",Mg,Z(M(Vs).length)+" 大套件 · "+Z(M(Zt).length)+" 组件 ",1)]),d("div",Eg,[(S(!0),L(fe,null,Ue(M(Vs),_=>(S(),L("div",{key:_.id,class:"space-y-1"},[d("div",$g,[d("div",Fg,[(S(),Ae(Yn(l(_.id)),{class:"h-3.5 w-3.5 text-blue-500"})),d("span",Pg,Z(_.name),1)]),d("span",Lg,Z(p(_.id).length),1)]),d("nav",Og,[(S(!0),L(fe,null,Ue(p(_.id),R=>(S(),Ae(F,{key:R.id,to:`/docs/${R.id}`,class:N(["flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium transition-colors",i.value===R.id?"bg-blue-600 text-white font-semibold shadow-xs":"text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"])},{default:Y(()=>[d("span",Dg,Z(R.name),1),d("span",{class:N(["text-[9px] rounded px-1.5 py-0.2 shrink-0 ml-1",i.value===R.id?"bg-blue-700/80 text-blue-100":"bg-zinc-100 dark:bg-zinc-900 text-zinc-400"])},Z(R.category),3)]),_:2},1032,["to","class"]))),128))])]))),128))]),d("div",jg,[d("div",Bg,[z(M(Ns),{class:"h-3.5 w-3.5 text-blue-500"}),y[5]||(y[5]=d("span",null,"基础依赖安装",-1))]),y[6]||(y[6]=d("p",{class:"mt-1 text-[11px] text-zinc-400"},"组件依赖轻量样式与工具库：",-1)),y[7]||(y[7]=d("div",{class:"mt-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-300 break-all select-all"}," npm i @vueuse/core clsx tailwind-merge ",-1))])])]),d("main",Ng,[(S(),Ae(oh,{key:a.value.id,title:a.value.title,description:a.value.description,"component-code":a.value.componentCode,"usage-code":a.value.usageCode,"component-filename":a.value.componentFilename,"props-list":a.value.propsList},{default:Y(({isDark:_})=>[a.value.id==="border-beam"?(S(),L("div",{key:0,class:N(["relative flex h-64 w-80 flex-col items-center justify-center rounded-2xl border p-6 shadow-md transition-colors duration-200",_?"border-zinc-800 bg-zinc-900 text-zinc-100 shadow-black/40":"border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/50"])},[d("div",Vg,[z(M(Ie),{class:"h-6 w-6"})]),d("h4",{class:N(["text-lg font-bold",_?"text-white":"text-zinc-900"])}," Border Beam Demo ",2),d("p",{class:N(["mt-1 text-center text-xs",_?"text-zinc-400":"text-zinc-500"])}," 流光平滑环绕圆角容器边缘 ",2),z(Ks,{size:180,duration:8,"color-from":"#38bdf8","color-to":"#a855f7"})],2)):a.value.id==="bento-grid"?(S(),L("div",Gg,[z(Ml,{class:"auto-rows-[16rem]"},{default:Y(()=>[z(et,{name:"AI 向量引擎",description:"毫秒级生成多模态视觉理解",cta:"了解详情",href:"#",class:N(_?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900")},{icon:Y(()=>[z(M(ci),{class:"h-5 w-5 text-blue-500"})]),_:1},8,["class"]),z(et,{name:"全球边缘节点加速",description:"降低网络抖动，就近命中就近计算",class:N(["md:col-span-2",_?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900"]),cta:"查看分布",href:"#"},{icon:Y(()=>[z(M(Vn),{class:"h-5 w-5 text-amber-500"})]),_:1},8,["class"])]),_:2},1024)])):a.value.id==="interactive-particles"?(S(),L("div",{key:2,class:N(["relative h-[360px] w-full rounded-2xl border overflow-hidden transition-colors duration-200",_?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[z($l,{quantity:60,"mouse-radius":120,"connect-lines":!0,color:_?"255, 255, 255":"59, 130, 246"},{default:Y(()=>[d("div",Hg,[d("h3",{class:N(["text-2xl font-bold tracking-tight",_?"text-white":"text-zinc-900"])}," 移动光标体验引力感应 ",2),d("p",{class:N(["mt-2 text-xs",_?"text-zinc-400":"text-zinc-500"])}," Canvas 2D 60fps 满帧运行，动态引力排斥与光效连线 ",2)])]),_:2},1032,["color"])],2)):a.value.id==="retro-grid"?(S(),L("div",{key:3,class:N(["relative flex h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",_?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[d("span",{class:N(["z-10 text-4xl font-extrabold tracking-tighter",_?"text-white":"text-zinc-900"])}," Retro Synthwave Grid ",2),z(Xs,{angle:65,"dark-line-color":"#334155","light-line-color":"#cbd5e1"})],2)):a.value.id==="dot-pattern"?(S(),L("div",{key:4,class:N(["relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border p-8 transition-colors duration-200",_?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[d("p",{class:N(["z-10 text-xl font-bold",_?"text-white":"text-zinc-900"])}," SVG 矢量波点底纹 (含发光聚光灯) ",2),z(El,{width:18,height:18,cr:1.2,glow:!0})],2)):a.value.id==="shiny-text"?(S(),L("div",Ug,[d("div",{class:N(["rounded-full border px-5 py-2 text-xs font-medium shadow-sm transition-colors",_?"border-zinc-800 bg-zinc-900/90 text-zinc-300":"border-zinc-200 bg-zinc-100 text-zinc-700"])},[y[8]||(y[8]=He(" ✨ ",-1)),z(Un,{text:"Aura UI v1.0 全新微光发布",duration:2.5})],2),d("div",qg,[z(Un,{text:"Next-Gen AI Intelligence",class:"text-4xl sm:text-5xl font-black tracking-tight",duration:2.5}),d("p",{class:N(["mt-2 text-xs sm:text-sm",_?"text-zinc-500":"text-zinc-400"])}," 持续流淌的宽幅金属微光，肉眼清晰可观赏，绝无突兀停滞 ",2)]),d("div",Wg,[z(Un,{text:"Cyberpunk Motion Primitives",variant:"cyber",class:"text-3xl sm:text-4xl font-extrabold tracking-tight",duration:3}),d("p",{class:N(["mt-1 text-xs",_?"text-zinc-500":"text-zinc-400"])}," 赛博霓虹蓝紫粒子流光，高频荡漾 ",2)])])):a.value.id==="shimmer-button"?(S(),L("div",Kg,[z(Hn,{"shimmer-color":"#38bdf8"},{default:Y(()=>[y[9]||(y[9]=d("span",null,"立即获取代码",-1)),z(M(kr),{class:"h-4 w-4"})]),_:1}),z(Hn,{"shimmer-color":"#ec4899","shimmer-duration":"3.5s"},{default:Y(()=>[...y[10]||(y[10]=[d("span",null,"Pink Shimmer",-1)])]),_:1})])):a.value.id==="marquee"?(S(),L("div",{key:7,class:N(["relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border py-6 transition-colors duration-200",_?"border-zinc-800 bg-black/60":"border-zinc-200 bg-zinc-50/80"])},[z(zr,{duration:20,"pause-on-hover":!0},{default:Y(()=>[(S(),L(fe,null,Ue(u,R=>d("div",{key:R,class:N(["flex h-12 items-center justify-center rounded-xl border px-6 font-bold text-xs shadow-xs transition-colors duration-200",_?"border-zinc-800 bg-zinc-900 text-zinc-200":"border-zinc-200 bg-white text-zinc-800"])},Z(R),3)),64))]),_:2},1024),d("div",{class:N(["pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r",_?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2),d("div",{class:N(["pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l",_?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2)],2)):a.value.id==="meteors"?(S(),L("div",{key:8,class:N(["relative flex h-80 w-full max-w-lg flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-2xl transition-colors duration-200",_?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-slate-900 text-white"])},[z(Fl,{number:30}),d("div",Xg,[y[11]||(y[11]=d("span",{class:"rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20"}," Meteor Shower ",-1)),z(M(Ie),{class:"h-5 w-5 text-sky-400"})]),y[12]||(y[12]=d("div",{class:"relative z-10 space-y-2"},[d("h3",{class:"text-3xl font-black tracking-tight text-white"}," 赛博深空流星雨 "),d("p",{class:"text-xs text-zinc-400 leading-relaxed"}," 流星带有 50px 渐变光尾与随机延迟，全硬件加速流畅穿梭，卡片与 Hero 背景的氛围杀器。 ")],-1))],2)):a.value.id==="ripple"?(S(),L("div",{key:9,class:N(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",_?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[z(Pl,{"main-circle-size":160,"num-circles":7}),d("div",Yg,[d("div",Zg,[z(M(Or),{class:"h-7 w-7"})]),y[13]||(y[13]=d("div",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-mono text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300"}," AI 智能语音拾音中... ",-1))])],2)):a.value.id==="number-ticker"?(S(),L("div",Jg,[d("div",{class:N(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",_?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[d("div",Qg,[d("span",eb,[z(_r,{value:99.99,"decimal-places":2})]),y[14]||(y[14]=d("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"%",-1))]),y[15]||(y[15]=d("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"SLA 生产高可用性",-1))],2),d("div",{class:N(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",_?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[d("div",tb,[d("span",nb,[z(_r,{value:1e7})]),y[16]||(y[16]=d("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"+",-1))]),y[17]||(y[17]=d("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"每日处理 Token 数量",-1))],2),d("div",{class:N(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",_?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[d("div",rb,[d("span",sb,[z(_r,{value:12})]),y[18]||(y[18]=d("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"ms",-1))]),y[19]||(y[19]=d("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"端到端流式推理延迟",-1))],2)])):a.value.id==="animated-beam"?(S(),L("div",{key:11,class:N(["relative flex h-72 w-full max-w-xl items-center justify-between px-12 rounded-2xl border transition-colors duration-200",_?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"]),ref_key:"beamContainerRef",ref:t},[d("div",{ref_key:"beamUserRef",ref:n,class:N(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",_?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[z(M(rl),{class:"h-6 w-6 text-blue-500"})],2),d("div",{ref_key:"beamAiRef",ref:r,class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/40"},[z(M(Ie),{class:"h-8 w-8"})],512),d("div",{ref_key:"beamDbRef",ref:s,class:N(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",_?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[z(M(Bs),{class:"h-6 w-6 text-indigo-500"})],2),z(jr,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.4},null,8,["container-ref","from-ref","to-ref"]),z(jr,{"container-ref":t.value,"from-ref":r.value,"to-ref":s.value,duration:2.4,delay:.6},null,8,["container-ref","from-ref","to-ref"])],2)):a.value.id==="lamp-effect"?(S(),L("div",ob,[z(Ll,{class:"min-h-[420px]"},{default:Y(()=>[...y[20]||(y[20]=[d("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-5xl font-black tracking-tight text-transparent"}," Next-Gen AI Platform ",-1),d("p",{class:"mt-3 max-w-md text-xs sm:text-sm text-slate-400"}," 双向极光天灯破晓而下，为旗舰级 AI 与 SaaS 官网赋予大模型发布会视觉。 ",-1)])]),_:1})])):a.value.id==="flickering-grid"?(S(),L("div",{key:13,class:N(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border p-6 transition-colors duration-200",_?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[z(Ol,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),d("div",ib,[d("div",ab,[z(M(el),{class:"h-3.5 w-3.5"}),y[21]||(y[21]=d("span",null,"Canvas 2D 智能矩阵",-1))]),d("h3",{class:N(["text-3xl font-black tracking-tight",_?"text-white":"text-zinc-900"])}," 呼吸噪波微光网格 ",2),d("p",{class:N(["mt-2 text-xs font-mono",_?"text-zinc-400":"text-zinc-500"])}," 微型粒子矩阵异步平滑呼吸闪烁，零 CPU 占用，极客感拉满 ",2)])],2)):a.value.id==="dock"?(S(),L("div",{key:14,class:N(["relative flex h-80 w-full items-end justify-center rounded-2xl border p-8 transition-colors duration-200",_?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[y[22]||(y[22]=d("div",{class:"absolute top-8 text-center"},[d("span",{class:"text-xs font-mono text-zinc-400"},"将鼠标在下方图标栏滑动，体验余弦高斯物理平滑放大与跟随 Tooltip")],-1)),z(ch,{items:c,"icon-size":44,"icon-magnification":68,"icon-distance":130})],2)):a.value.id==="orbit-logos"?(S(),L("div",{key:15,class:N(["relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",_?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[d("div",lb,[z(M(Ie),{class:"h-8 w-8"})]),z(gr,{radius:75,duration:16},{default:Y(()=>[d("div",cb,[z(M(ci),{class:"h-4.5 w-4.5"})])]),_:1}),z(gr,{radius:75,duration:16,delay:8},{default:Y(()=>[d("div",db,[z(M(Vn),{class:"h-4.5 w-4.5"})])]),_:1}),z(gr,{radius:135,duration:24,reverse:!0},{default:Y(()=>[d("div",ub,[z(M(Lr),{class:"h-5 w-5"})])]),_:1}),z(gr,{radius:135,duration:24,delay:12,reverse:!0},{default:Y(()=>[d("div",pb,[z(M(Bs),{class:"h-5 w-5"})])]),_:1})],2)):a.value.id==="image-compare"?(S(),L("div",{key:16,class:N(["flex flex-col items-center justify-center w-full p-4 rounded-2xl border transition-colors duration-200",_?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[d("div",fb,[z(yh,{"before-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=70&sat=-100","after-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=90","before-label":"原始黑白 (Raw)","after-label":"AI 智能全彩修复 (4K HDR)","initial-position":50,class:"h-full w-full shadow-2xl"})]),y[23]||(y[23]=d("p",{class:"mt-3 text-xs font-mono text-zinc-400"}," 按住中央手柄左右拖拽，体验基于 clip-path 视口裁切的双图前后对比 ",-1))],2)):a.value.id==="agent-status"?(S(),L("div",{key:17,class:N(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",_?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[d("div",mb,[(S(),L(fe,null,Ue(["thinking","running","tool_call","success","error"],R=>d("button",{key:R,onClick:P=>m.value=R,class:N(["rounded-lg px-3 py-1.5 text-xs font-semibold transition-all capitalize",m.value===R?"bg-blue-600 text-white shadow-xs":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},Z(R),11,hb)),64))]),z(Dh,{status:m.value,"agent-name":"DeepSeek R1 / Aura Reasoning","current-task":h[m.value]},null,8,["status","current-task"]),y[24]||(y[24]=d("p",{class:"text-xs font-mono text-zinc-400"}," 点击上方状态快速体验脉冲光环与徽标切换；点击卡片任意位置展开执行轨迹清单 ",-1))],2)):a.value.id==="typewriter-terminal"?(S(),L("div",{key:18,class:N(["flex flex-col items-center justify-center w-full p-6 rounded-2xl border transition-colors duration-200",_?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[d("div",gb,[z(Qh,{title:"zsh - aura-orchestrator:~ (80x24)","typing-speed":32,loop:!0})])],2)):a.value.id==="prompt-input"?(S(),L("div",{key:19,class:N(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",_?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[d("div",bb,[z(fg,{modelValue:A.value,"onUpdate:modelValue":y[0]||(y[0]=R=>A.value=R),loading:w.value,"selected-model":T.value,"onUpdate:selectedModel":y[1]||(y[1]=R=>T.value=R),placeholder:"向 Aura AI 提问、生成高阶动效代码，或输入 / 触发 Agent...",onSubmit:E,onStop:y[2]||(y[2]=R=>w.value=!1)},null,8,["modelValue","loading","selected-model"])]),y[25]||(y[25]=d("p",{class:"text-xs font-mono text-zinc-400"}," 点击输入框体验聚焦顶部流光与高亮光晕，支持 Enter 发送、模拟 2.2s 思考生成态 ",-1))],2)):a.value.id==="thought-accordion"?(S(),L("div",{key:20,class:N(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",_?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[d("div",xb,[z(zg,{duration:"思考用时 8.2 秒",status:"complete","default-open":!0})]),y[26]||(y[26]=d("p",{class:"text-xs font-mono text-zinc-400"}," 对标 DeepSeek R1 / o1 思考链折叠机制，点击标题栏手风琴折叠收起，支持一键复制推演链路 ",-1))],2)):a.value.id==="fluid-tabs"?(S(),L("div",{key:21,class:N(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",_?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[z(Cg,{modelValue:b.value,"onUpdate:modelValue":y[3]||(y[3]=R=>b.value=R),tabs:x},null,8,["modelValue"]),d("div",vb,[y[27]||(y[27]=d("div",{class:"text-xs font-mono text-zinc-500 dark:text-zinc-400"},"当前激活流体 Tab 项：",-1)),d("div",yb,Z(b.value),1)]),y[28]||(y[28]=d("p",{class:"text-xs font-mono text-zinc-400"}," 鼠标在 Tab 间移动感受 Ghost 悬停幽灵胶囊；点击体验物理 Spring 平滑吸附 ",-1))],2)):Le("",!0)]),_:1},8,["title","description","component-code","usage-code","component-filename","props-list"]))])])])}}}),kb=nf({history:Fp(),routes:[{path:"/",name:"home",component:Rm},{path:"/docs/:id?",name:"docs",component:wb},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(e,t,n){return n||(e.name==="docs"&&t.name==="docs"?!1:{top:0})}}),Dl=cu(Yu);Dl.use(kb);Dl.mount("#app");
