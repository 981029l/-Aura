(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ge={},Mn=[],jt=()=>{},Ka=()=>!1,ko=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),zo=e=>e.startsWith("onUpdate:"),Qe=Object.assign,Xs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gd=Object.prototype.hasOwnProperty,Ve=(e,t)=>gd.call(e,t),ke=Array.isArray,fn=e=>Er(e)==="[object Map]",so=e=>Er(e)==="[object Set]",wi=e=>Er(e)==="[object Date]",Se=e=>typeof e=="function",We=e=>typeof e=="string",Pt=e=>typeof e=="symbol",He=e=>e!==null&&typeof e=="object",Za=e=>(He(e)||Se(e))&&Se(e.then)&&Se(e.catch),Qa=Object.prototype.toString,Er=e=>Qa.call(e),hd=e=>Er(e).slice(8,-1),Ja=e=>Er(e)==="[object Object]",Ws=e=>We(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mr=qs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_o=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},vd=/-\w/g,vt=_o(e=>e.replace(vd,t=>t.slice(1).toUpperCase())),yd=/\B([A-Z])/g,hn=_o(e=>e.replace(yd,"-$1").toLowerCase()),Co=_o(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ho=_o(e=>e?`on${Co(e)}`:""),Ot=(e,t)=>!Object.is(e,t),Qr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},el=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Ys=e=>{const t=parseFloat(e);return isNaN(t)?e:t},wd=e=>{const t=We(e)?Number(e):NaN;return isNaN(t)?e:t};let ki;const So=()=>ki||(ki=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fe(e){if(ke(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=We(r)?Cd(r):fe(r);if(o)for(const i in o)t[i]=o[i]}return t}else if(We(e)||He(e))return e}const kd=/;(?![^(]*\))/g,zd=/:([^]+)/,_d=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Cd(e){const t={};return e.replace(_d,n=>n.startsWith("/*")?"":n).split(kd).forEach(n=>{if(n){const r=n.split(zd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function M(e){let t="";if(We(e))t=e;else if(ke(e))for(let n=0;n<e.length;n++){const r=M(e[n]);r&&(t+=r+" ")}else if(He(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Sd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Md=qs(Sd);function tl(e){return!!e||e===""}function Id(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let o=0;r&&o<e.length;o++)r=Mo(e[o],t[o],n);return r}function zi(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),o=new Uint8Array(r.length);for(const i of e){let l=-1;for(let a=0;a<r.length;a++)if(!o[a]&&Mo(i,r[a],n)){l=a;break}if(l<0)return!1;o[l]=1}return!0}function Ad(e,t,n){let r=fn(e),o=fn(t);if(r||o||(r=so(e),o=so(t),r||o))return r&&o?zi(e,t,n):!1;const i=Object.keys(e).length,l=Object.keys(t).length;if(i!==l)return!1;for(const a in e){const c=e.hasOwnProperty(a),d=t.hasOwnProperty(a);if(c&&!d||!c&&d||!Mo(e[a],t[a],n))return!1}return String(e)===String(t)}function _i(e,t,n,r){n||(n=[new Map,new Map]);const[o,i]=n;if(o.has(e)||i.has(t))return o.get(e)===t&&i.get(t)===e;o.set(e,t),i.set(t,e);const l=r(e,t,n);return o.delete(e),i.delete(t),l}function Mo(e,t,n){if(e===t)return!0;let r=wi(e),o=wi(t);return r||o?r&&o?e.getTime()===t.getTime():!1:(r=Pt(e),o=Pt(t),r||o?e===t:(r=ke(e),o=ke(t),r||o?r&&o?_i(e,t,n,Id):!1:(r=He(e),o=He(t),r||o?!r||!o?!1:_i(e,t,n,Ad):String(e)===String(t))))}const nl=e=>!!(e&&e.__v_isRef===!0),A=e=>We(e)?e:e==null?"":ke(e)||He(e)&&(e.toString===Qa||!Se(e.toString))?nl(e)?A(e.value):JSON.stringify(e,rl,2):String(e),rl=(e,t)=>nl(t)?rl(e,t.value):fn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],i)=>(n[Go(r,i)+" =>"]=o,n),{})}:so(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Go(n))}:Pt(t)?Go(t):He(t)&&!ke(t)&&!Ja(t)?String(t):t,Go=(e,t="")=>{var n;return Pt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class $d{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&it&&(it.active?(this.parent=it,this.index=(it.scopes||(it.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=it;try{return it=this,t()}finally{it=n}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){if(this._on>0&&--this._on===0){if(it===this)it=this.prevScope;else{let t=it;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,r=o.length;n<r;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Pd(){return it}let qe;const Uo=new WeakSet;class ol{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&(it.active?it.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Uo.has(this)&&(Uo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||il(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ci(this),al(this);const t=qe,n=$t;qe=this,$t=!0;try{return this.fn()}finally{ll(this),qe=t,$t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Qs(t);this.deps=this.depsTail=void 0,Ci(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Uo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xs(this)&&this.run()}get dirty(){return xs(this)}}let sl=0,br,xr;function il(e,t=!1){if(e.flags|=8,t){e.next=xr,xr=e;return}e.next=br,br=e}function Ks(){sl++}function Zs(){if(--sl>0)return;if(xr){let t=xr;for(xr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;br;){let t=br;for(br=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function al(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ll(e){let t,n=e.depsTail,r=n;for(;r;){const o=r.prevDep;r.version===-1?(r===n&&(n=o),Qs(r),Td(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=t,e.depsTail=n}function xs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(cl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function cl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===_r)||(e.globalVersion=_r,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!xs(e))))return;e.flags|=2;const t=e.dep,n=qe,r=$t;qe=e,$t=!0;try{al(e);const o=e.fn(e._value);(t.version===0||Ot(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{qe=n,$t=r,ll(e),e.flags&=-3}}function Qs(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Qs(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Td(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let $t=!0;const dl=[];function Ht(){dl.push($t),$t=!1}function Gt(){const e=dl.pop();$t=e===void 0?!0:e}function Ci(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=qe;qe=void 0;try{t()}finally{qe=n}}}let _r=0;class Rd{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Js{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!qe||!$t||qe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==qe)n=this.activeLink=new Rd(qe,this),qe.deps?(n.prevDep=qe.depsTail,qe.depsTail.nextDep=n,qe.depsTail=n):qe.deps=qe.depsTail=n,ul(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=qe.depsTail,n.nextDep=void 0,qe.depsTail.nextDep=n,qe.depsTail=n,qe.deps===n&&(qe.deps=r)}return n}trigger(t){this.version++,_r++,this.notify(t)}notify(t){Ks();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zs()}}}function ul(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)ul(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const gs=new WeakMap,An=Symbol(""),hs=Symbol(""),Cr=Symbol("");function ct(e,t,n){if($t&&qe){let r=gs.get(e);r||gs.set(e,r=new Map);let o=r.get(n);o||(r.set(n,o=new Js),o.map=r,o.key=n),o.track()}}function Jt(e,t,n,r,o,i){const l=gs.get(e);if(!l){_r++;return}const a=c=>{c&&c.trigger()};if(Ks(),t==="clear")l.forEach(a);else{const c=ke(e),d=c&&Ws(n);if(c&&n==="length"){const p=Number(r);l.forEach((u,b)=>{(b==="length"||b===Cr||!Pt(b)&&b>=p)&&a(u)})}else switch((n!==void 0||l.has(void 0))&&a(l.get(n)),d&&a(l.get(Cr)),t){case"add":c?d&&a(l.get("length")):(a(l.get(An)),fn(e)&&a(l.get(hs)));break;case"delete":c||(a(l.get(An)),fn(e)&&a(l.get(hs)));break;case"set":fn(e)&&a(l.get(An));break}}Zs()}function Fn(e){const t=De(e);return t===e||(ct(t,"iterate",Cr),St(e))?t:Ut(e)?mn(e)?t.map(n=>bn(Mt(n))):t.map(bn):t.map(Mt)}function Io(e){return ct(e=De(e),"iterate",Cr),e}function Lt(e,t){return Ut(e)?bn(mn(e)?Mt(t):t):Mt(t)}const Ed={__proto__:null,[Symbol.iterator](){return qo(this,Symbol.iterator,e=>Lt(this,e))},concat(...e){return Fn(this).concat(...e.map(t=>ke(t)?Fn(t):t))},entries(){return qo(this,"entries",e=>(e[1]=Lt(this,e[1]),e))},every(e,t){return Wt(this,"every",e,t,void 0,arguments)},filter(e,t){return Wt(this,"filter",e,t,n=>n.map(r=>Lt(this,r)),arguments)},find(e,t){return Wt(this,"find",e,t,n=>Lt(this,n),arguments)},findIndex(e,t){return Wt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Wt(this,"findLast",e,t,n=>Lt(this,n),arguments)},findLastIndex(e,t){return Wt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Wt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Xo(this,"includes",e)},indexOf(...e){return Xo(this,"indexOf",e)},join(e){return Fn(this).join(e)},lastIndexOf(...e){return Xo(this,"lastIndexOf",e)},map(e,t){return Wt(this,"map",e,t,void 0,arguments)},pop(){return nr(this,"pop")},push(...e){return nr(this,"push",e)},reduce(e,...t){return Mi(this,"reduce",e,t)},reduceRight(e,...t){return Mi(this,"reduceRight",e,t)},shift(){return nr(this,"shift")},some(e,t){return Wt(this,"some",e,t,void 0,arguments)},splice(...e){return nr(this,"splice",e)},toReversed(){return Fn(this).toReversed()},toSorted(e){return Fn(this).toSorted(e)},toSpliced(...e){return Fn(this).toSpliced(...e)},unshift(...e){return nr(this,"unshift",e)},values(){return qo(this,"values",e=>Lt(this,e))}};function qo(e,t,n){const r=Io(e),o=r[t],i=o.call(r);if(r!==e&&!St(e)){if(i[Symbol.toStringTag]==="Array Iterator"){const l=Object.create(Object.getPrototypeOf(i));return l.next=()=>Si(i.next(),n),o!==pl[t]&&Object.defineProperties(l,{return:{get(){const a=i.return;return typeof a=="function"?a.bind(i):a}},throw:{get(){const a=i.throw;return typeof a=="function"?a.bind(i):a}}}),l}i._next=i.next,i.next=()=>Si(i._next(),n)}return i}function Si(e,t){return e.done||(e.value=t(e.value)),e}const pl=Array.prototype;function Wt(e,t,n,r,o,i){const l=Io(e),a=l!==e&&!St(e),c=l[t];if(c!==pl[t]){const u=c.apply(e,i);return a?Mt(u):u}let d=n;l!==e&&(a?d=function(u,b){return n.call(this,Lt(e,u),b,e)}:n.length>2&&(d=function(u,b){return n.call(this,u,b,e)}));const p=c.call(l,d,r);return a&&o?o(p):p}function Mi(e,t,n,r){const o=Io(e),i=o!==e&&!St(e);let l=n,a=!1;o!==e&&(i?(a=r.length===0,l=function(d,p,u){return a&&(a=!1,d=Lt(e,d)),n.call(this,d,Lt(e,p),u,e)}):n.length>3&&(l=function(d,p,u){return n.call(this,d,p,u,e)}));const c=o[t](l,...r);return a?Lt(e,c):c}function Xo(e,t,n){const r=De(e);ct(r,"iterate",Cr);const o=r[t](...n);return(o===-1||o===!1)&&ni(n[0])?(n[0]=De(n[0]),r[t](...n)):o}function nr(e,t,n=[]){Ht(),Ks();const r=De(e)[t].apply(e,n);return Zs(),Gt(),r}const Fd=qs("__proto__,__v_isRef,__isVue"),fl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pt));function Ld(e){Pt(e)||(e=String(e));const t=De(this);return ct(t,"has",e),t.hasOwnProperty(e)}class ml{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(o?i?qd:hl:i?gl:xl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const l=ke(t);if(!o){let c;if(l&&(c=Ed[n]))return c;if(n==="hasOwnProperty")return Ld}const a=Reflect.get(t,n,ut(t)?t:r);if((Pt(n)?fl.has(n):Fd(n))||(o||ct(t,"get",n),i))return a;if(ut(a)){const c=l&&Ws(n)?a:a.value;return o&&He(c)?ys(c):c}return He(a)?o?ys(a):Ao(a):a}}class bl extends ml{constructor(t=!1){super(!1,t)}set(t,n,r,o){let i=t[n];const l=ke(t)&&Ws(n);if(!this._isShallow){const d=Ut(i);if(!St(r)&&!Ut(r)&&(i=De(i),r=De(r)),!l&&ut(i)&&!ut(r))return d||(i.value=r),!0}const a=l?Number(n)<t.length:Ve(t,n),c=Reflect.set(t,n,r,ut(t)?t:o);return t===De(o)&&c&&(a?Ot(r,i)&&Jt(t,"set",n,r):Jt(t,"add",n,r)),c}deleteProperty(t,n){const r=Ve(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&Jt(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!Pt(n)||!fl.has(n))&&ct(t,"has",n),r}ownKeys(t){return ct(t,"iterate",ke(t)?"length":An),Reflect.ownKeys(t)}}class Dd extends ml{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Vd=new bl,Od=new Dd,Bd=new bl(!0);const vs=e=>e,jr=e=>Reflect.getPrototypeOf(e);function jd(e,t,n){return function(...r){const o=this.__v_raw,i=De(o),l=fn(i),a=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,d=o[e](...r),p=n?vs:t?bn:Mt;return!t&&ct(i,"iterate",c?hs:An),Qe(Object.create(d),{next(){const{value:u,done:b}=d.next();return b?{value:u,done:b}:{value:a?[p(u[0]),p(u[1])]:p(u),done:b}}})}}function Nr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Nd(e,t){const n={get(o){const i=this.__v_raw,l=De(i),a=De(o);e||(Ot(o,a)&&ct(l,"get",o),ct(l,"get",a));const{has:c}=jr(l),d=t?vs:e?bn:Mt;if(c.call(l,o))return d(i.get(o));if(c.call(l,a))return d(i.get(a));i!==l&&i.get(o)},get size(){const o=this.__v_raw;return!e&&ct(De(o),"iterate",An),o.size},has(o){const i=this.__v_raw,l=De(i),a=De(o);return e||(Ot(o,a)&&ct(l,"has",o),ct(l,"has",a)),o===a?i.has(o):i.has(o)||i.has(a)},forEach(o,i){const l=this,a=l.__v_raw,c=De(a),d=t?vs:e?bn:Mt;return!e&&ct(c,"iterate",An),a.forEach((p,u)=>o.call(i,d(p),d(u),l))}};return Qe(n,e?{add:Nr("add"),set:Nr("set"),delete:Nr("delete"),clear:Nr("clear")}:{add(o){const i=De(this),l=jr(i),a=De(o),c=!t&&!St(o)&&!Ut(o)?a:o;return l.has.call(i,c)||Ot(o,c)&&l.has.call(i,o)||Ot(a,c)&&l.has.call(i,a)||(i.add(c),Jt(i,"add",c,c)),this},set(o,i){!t&&!St(i)&&!Ut(i)&&(i=De(i));const l=De(this),{has:a,get:c}=jr(l);let d=a.call(l,o);d||(o=De(o),d=a.call(l,o));const p=c.call(l,o);return l.set(o,i),d?Ot(i,p)&&Jt(l,"set",o,i):Jt(l,"add",o,i),this},delete(o){const i=De(this),{has:l,get:a}=jr(i);let c=l.call(i,o);c||(o=De(o),c=l.call(i,o)),a&&a.call(i,o);const d=i.delete(o);return c&&Jt(i,"delete",o,void 0),d},clear(){const o=De(this),i=o.size!==0,l=o.clear();return i&&Jt(o,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=jd(o,e,t)}),n}function ei(e,t){const n=Nd(e,t);return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_isShallow"?t:o==="__v_raw"?r:Reflect.get(Ve(n,o)&&o in r?n:r,o,i)}const Hd={get:ei(!1,!1)},Gd={get:ei(!1,!0)},Ud={get:ei(!0,!1)};const xl=new WeakMap,gl=new WeakMap,hl=new WeakMap,qd=new WeakMap;function Xd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ao(e){return Ut(e)?e:ti(e,!1,Vd,Hd,xl)}function vl(e){return ti(e,!1,Bd,Gd,gl)}function ys(e){return ti(e,!0,Od,Ud,hl)}function ti(e,t,n,r,o){if(!He(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=o.get(e);if(i)return i;const l=Xd(hd(e));if(l===0)return e;const a=new Proxy(e,l===2?r:n);return o.set(e,a),a}function mn(e){return Ut(e)?mn(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function St(e){return!!(e&&e.__v_isShallow)}function ni(e){return e?!!e.__v_raw:!1}function De(e){const t=e&&e.__v_raw;return t?De(t):e}function Wd(e){return!Ve(e,"__v_skip")&&Object.isExtensible(e)&&el(e,"__v_skip",!0),e}const Mt=e=>He(e)?Ao(e):e,bn=e=>He(e)?ys(e):e;function ut(e){return e?e.__v_isRef===!0:!1}function P(e){return yl(e,!1)}function Yd(e){return yl(e,!0)}function yl(e,t){return ut(e)?e:new Kd(e,t)}class Kd{constructor(t,n){this.dep=new Js,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:De(t),this._value=n?t:Mt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||St(t)||Ut(t);t=r?t:De(t),Ot(t,n)&&(this._rawValue=t,this._value=r?t:Mt(t),this.dep.trigger())}}function I(e){return ut(e)?e.value:e}const Zd={get:(e,t,n)=>t==="__v_raw"?e:I(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return ut(o)&&!ut(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function wl(e){return mn(e)?e:new Proxy(e,Zd)}class Qd{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Js(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_r-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&qe!==this)return il(this,!0),!0}get value(){const t=this.dep.track();return cl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Jd(e,t,n=!1){let r,o;return Se(e)?r=e:(r=e.get,o=e.set),new Qd(r,o,n)}const Hr={},io=new WeakMap;let _n;function eu(e,t=!1,n=_n){if(n){let r=io.get(n);r||io.set(n,r=[]),r.push(e)}}function tu(e,t,n=Ge){const{immediate:r,deep:o,once:i,scheduler:l,augmentJob:a,call:c}=n,d=w=>o?w:St(w)||o===!1||o===0?en(w,1):en(w);let p,u,b,m,h=!1,g=!1;if(ut(e)?(u=()=>e.value,h=St(e)):mn(e)?(u=()=>d(e),h=!0):ke(e)?(g=!0,h=e.some(w=>mn(w)||St(w)),u=()=>e.map(w=>{if(ut(w))return w.value;if(mn(w))return d(w);if(Se(w))return c?c(w,2):w()})):Se(e)?t?u=c?()=>c(e,2):e:u=()=>{if(b){Ht();try{b()}finally{Gt()}}const w=_n;_n=p;try{return c?c(e,3,[m]):e(m)}finally{_n=w}}:u=jt,t&&o){const w=u,T=o===!0?1/0:o;u=()=>en(w(),T)}const z=Pd(),_=()=>{p.stop(),z&&z.active&&Xs(z.effects,p)};if(i&&t){const w=t;t=(...T)=>{try{return w(...T)}finally{_()}}}let y=g?new Array(e.length).fill(Hr):Hr;const C=w=>{if(!(!(p.flags&1)||!p.dirty&&!w))if(t){const T=p.run();if(w||o||h||(g?T.some((F,D)=>Ot(F,y[D])):Ot(T,y))){const F=_n;Ht();try{b&&b(),_n=p;const D=[T,y===Hr?void 0:g&&y[0]===Hr?[]:y,m];y=T,c?c(t,3,D):t(...D)}finally{_n=F,Gt()}}}else p.run()};return a&&a(C),p=new ol(u),p.scheduler=l?()=>l(C,!1):C,m=w=>eu(w,!1,p),b=p.onStop=()=>{const w=io.get(p);if(w){if(c)c(w,4);else for(const T of w)T();io.delete(p)}},t?r?C(!0):y=p.run():l?l(C.bind(null,!0),!0):p.run(),_.pause=p.pause.bind(p),_.resume=p.resume.bind(p),_.stop=_,_}function en(e,t=1/0,n){if(t<=0||!He(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ut(e))en(e.value,t,n);else if(ke(e))for(let r=0;r<e.length;r++)en(e[r],t,n);else if(so(e)||fn(e))e.forEach(r=>{en(r,t,n)});else if(Ja(e)){for(const r in e)en(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&en(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fr(e,t,n,r){try{return r?e(...r):e()}catch(o){$o(o,t,n)}}function It(e,t,n,r){if(Se(e)){const o=Fr(e,t,n,r);return o&&Za(o)&&o.catch(i=>{$o(i,t,n)}),o}if(ke(e)){const o=[];for(let i=0;i<e.length;i++)o.push(It(e[i],t,n,r));return o}}function $o(e,t,n,r=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||Ge;if(t){let a=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const p=a.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](e,c,d)===!1)return}a=a.parent}if(i){Ht(),Fr(i,null,10,[e,c,d]),Gt();return}}nu(e,n,o,r,l)}function nu(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}const ht=[];let At=-1;const Dt=[];let dn=null,Dn=0;const kl=Promise.resolve();let ao=null;function Hn(e){const t=ao||kl;return e?t.then(this?e.bind(this):e):t}function ru(e){let t=At+1,n=ht.length;for(;t<n;){const r=t+n>>>1,o=ht[r],i=Sr(o);i<e||i===e&&o.flags&2?t=r+1:n=r}return t}function ri(e){if(!(e.flags&1)){const t=Sr(e),n=ht[ht.length-1];!n||!(e.flags&2)&&t>=Sr(n)?ht.push(e):ht.splice(ru(t),0,e),e.flags|=1,zl()}}function zl(){ao||(ao=kl.then(Sl))}function ou(e){if(!ke(e))dn&&e.id===-1?dn.splice(Dn+1,0,e):e.flags&1||(Dt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Dt.push(e[t]);zl()}function _l(e,t,n,r=At+1){for(;r<ht.length;r++){const o=ht[r];if(o&&o.flags&2){if(e&&o.id!==e.uid||t!==void 0&&!(o.id>=t))continue;ht.splice(r,1),r=e?r-1:At,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function Cl(e,t,n=0){if(Dt.length){let r=Dt,o=0;if(t){r=[];for(let l=0;l<Dt.length;l++){const a=Dt[l];(a.i!==void 0?!a.i||a.i.uid<n:t.has(a))?Dt[o++]=a:r.push(a)}}const i=[...new Set(r)].sort((l,a)=>Sr(l)-Sr(a));if(Dt.length=o,dn){for(let l=0;l<i.length;l++)dn.push(i[l]);return}for(dn=i,Dn=0;Dn<dn.length;Dn++){const l=dn[Dn];l.flags&4&&(l.flags&=-2),l.flags&8||l(),l.flags&=-2}dn=null,Dn=0}}let Wo=!1;function su(e,t){if(Wo){e();return}const n=t===void 0?void 0:new Set(Dt);e(),Wo=!0;try{_l(void 0,t),Cl(void 0,n,t)}finally{Wo=!1}}const Sr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Sl(e){try{for(At=0;At<ht.length;At++){const t=ht[At];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Fr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;At<ht.length;At++){const t=ht[At];t&&(t.flags&=-2)}At=-1,ht.length=0,Cl(),ao=null,(ht.length||Dt.length)&&Sl()}}let at=null,Ml=null;function lo(e){const t=at;return at=e,Ml=e&&e.type.__scopeId||null,t}function U(e,t=at,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&fo(-1);const i=lo(t),l=nn.length;let a;try{a=e(...o)}finally{for(let c=nn.length;c>l;c--)ci();lo(i),r._d&&fo(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function $n(e,t){if(at===null)return e;const n=Do(at),r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,l,a,c=Ge]=t[o];i&&(Se(i)&&(i={mounted:i,updated:i}),i.deep&&en(l),r.push({dir:i,instance:n,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function yn(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let l=0;l<o.length;l++){const a=o[l];i&&(a.oldValue=i[l].value);let c=a.dir[r];c&&(Ht(),It(c,n,8,[e.el,a,e,t]),Gt())}}function Jr(e,t){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[e]=t}}function Nt(e,t,n=!1){const r=Lo();if(r||Un){let o=Un?Un._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Se(t)?t.call(r&&r.proxy):t}}const iu=Symbol.for("v-scx"),au=()=>Nt(iu);function Xe(e,t,n){return Il(e,t,n)}function Il(e,t,n=Ge){const{immediate:r,deep:o,flush:i,once:l}=n,a=Qe({},n),c=t&&r||!t&&i!=="post";let d;if(Pr){if(i==="sync"){const m=au();d=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=jt,m.resume=jt,m.pause=jt,m}}const p=dt;a.call=(m,h,g)=>It(m,p,h,g);let u=!1;i==="post"?a.scheduler=m=>{m.i=p,xt(m,p&&p.suspense)}:i!=="sync"&&(u=!0,a.scheduler=(m,h)=>{h?m():ri(m)}),a.augmentJob=m=>{t&&(m.flags|=4),u&&(m.flags|=2,p&&(m.id=p.uid,m.i=p))};const b=tu(e,t,a);return Pr&&(d?d.push(b):c&&b()),b}function lu(e,t,n){const r=this.proxy,o=We(e)?e.includes(".")?Al(r,e):()=>r[e]:e.bind(r,r);let i;Se(t)?i=t:(i=t.handler,n=t);const l=Dr(this),a=Il(o,i.bind(r),n);return l(),a}function Al(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const ln=new WeakMap,$l=Symbol("_vte"),Po=e=>e.__isTeleport,Cn=e=>e&&(e.disabled||e.disabled===""),cu=e=>e&&(e.defer||e.defer===""),Ii=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ai=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,ws=(e,t)=>{const n=e&&e.to;return We(n)?t?t(n):null:n},du={name:"Teleport",__isTeleport:!0,process(e,t,n,r,o,i,l,a,c,d){const{mc:p,pc:u,pbc:b,o:{insert:m,querySelector:h,createText:g,createComment:z,parentNode:_}}=d,y=Cn(t.props);let{dynamicChildren:C}=t;const w=(D,R,L)=>{D.shapeFlag&16&&p(D.children,R,L,o,i,l,a,c)},T=(D=t)=>{const R=Cn(D.props),L=D.target=ws(D.props,h),Z=ks(L,D,g,m);L&&(l!=="svg"&&Ii(L)?l="svg":l!=="mathml"&&Ai(L)&&(l="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(L),R||(w(D,L,Z),dr(D,!1)))},F=D=>{const R=()=>{if(ln.get(D)===R){if(ln.delete(D),Cn(D.props)){const L=_(D.el)||n;w(D,L,D.anchor),dr(D,!0)}T(D)}};ln.set(D,R),xt(R,i)};if(e==null){const D=t.el=g(""),R=t.anchor=g("");if(m(D,n,r),m(R,n,r),cu(t.props)||i&&i.pendingBranch){F(t);return}y&&(w(t,n,R),dr(t,!0)),T()}else{t.el=e.el;const D=t.anchor=e.anchor,R=ln.get(e);if(R){R.flags|=8,ln.delete(e),F(t);return}t.targetStart=e.targetStart;const L=t.target=e.target,Z=t.targetAnchor=e.targetAnchor,le=Cn(e.props),q=le?n:L,be=le?D:Z;if(l==="svg"||Ii(L)?l="svg":(l==="mathml"||Ai(L))&&(l="mathml"),C?(b(e.dynamicChildren,C,q,o,i,l,a),li(e,t,!0)):c||u(e,t,q,be,o,i,l,a,!1),y)le?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Gr(t,n,D,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const _e=ws(t.props,h);_e&&(t.target=_e,Gr(t,_e,null,d,0))}else le&&Gr(t,L,Z,d,1);dr(t,y)}},remove(e,t,n,{um:r,o:{remove:o}},i){const{shapeFlag:l,children:a,anchor:c,targetStart:d,targetAnchor:p,target:u,props:b}=e,m=Cn(b),h=i||!m,g=ln.get(e);if(g&&(g.flags|=8,ln.delete(e)),u&&(o(d),o(p)),i&&o(c),!g&&(m||u)&&l&16)for(let z=0;z<a.length;z++){const _=a[z];r(_,t,n,h,!!_.dynamicChildren)}},move:Gr,hydrate:uu};function Gr(e,t,n,{o:{insert:r},m:o},i=2){i===0&&(e.targetStart&&r(e.targetStart,t,n),r(e.targetAnchor,t,n),n=e.targetAnchor);const{el:l,anchor:a,shapeFlag:c,children:d,props:p}=e,u=i===2;if(u&&r(l,t,n),!ln.has(e)&&(!u||Cn(p))&&c&16)for(let b=0;b<d.length;b++)o(d[b],t,n,2);u&&r(a,t,n)}function uu(e,t,n,r,o,i,{o:{nextSibling:l,parentNode:a,querySelector:c,insert:d,createText:p}},u){function b(z,_){let y=_;for(;y;){if(y&&y.nodeType===8){if(y.data==="teleport start anchor")t.targetStart=y;else if(y.data==="teleport anchor"){t.targetAnchor=y,z._lpa=t.targetAnchor&&l(t.targetAnchor);break}}y=l(y)}}function m(z,_){_.anchor=u(l(z),_,a(z),n,r,o,i)}const h=t.target=ws(t.props,c),g=Cn(t.props);if(h){const z=h._lpa||h.firstChild;t.shapeFlag&16&&(g?(m(e,t),b(h,z),t.targetAnchor||ks(h,t,p,d,a(e)===h?e:null)):(t.anchor=l(e),b(h,z),t.targetAnchor||ks(h,t,p,d),u(z&&l(z),t,h,n,r,o,i))),dr(t,g)}else g&&t.shapeFlag&16&&(m(e,t),t.targetStart=e,t.targetAnchor=l(e));return t.anchor&&l(t.anchor)}const oi=du;function dr(e,t){const n=e.ctx;if(n&&n.ut){let r,o;for(t?(r=e.el,o=e.anchor):(r=e.targetStart,o=e.targetAnchor);r&&r!==o;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function ks(e,t,n,r,o=null){const i=t.targetStart=n(""),l=t.targetAnchor=n("");return i[$l]=l,e&&(r(i,e,o),r(l,e,o)),l}const Ct=Symbol("_leaveCb"),rr=Symbol("_enterCb");function Pl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pe(()=>{e.isMounted=!0}),Vl(()=>{e.isUnmounting=!0}),e}const _t=[Function,Array],Tl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_t,onEnter:_t,onAfterEnter:_t,onEnterCancelled:_t,onBeforeLeave:_t,onLeave:_t,onAfterLeave:_t,onLeaveCancelled:_t,onBeforeAppear:_t,onAppear:_t,onAfterAppear:_t,onAppearCancelled:_t},pu={name:"BaseTransition",props:Tl,setup(e,{slots:t}){const n=Lo(),r=Pl();return()=>{const o=t.default&&si(t.default(),!0),i=o&&o.length?Rl(o):n.subTree?N():void 0;if(!i)return;const l=De(e),{mode:a}=l;if(r.isLeaving)return Yo(i);const c=co(i);if(!c)return Yo(i);let d=Mr(c,l,r,n,u=>d=u);c.type!==lt&&xn(c,d);let p=n.subTree&&co(n.subTree);if(p&&p.type!==lt&&!Sn(p,c)&&Ir(n.subTree)){let u=Mr(p,l,r,n);if(xn(p,u),a==="out-in"&&c.type!==lt)return r.isLeaving=!0,u.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete u.afterLeave,p=void 0},Yo(i);a==="in-out"&&c.type!==lt?u.delayLeave=(b,m,h)=>{const g=El(r,p);g[String(p.key)]=p,b[Ct]=()=>{m(),b[Ct]=void 0,delete d.delayedLeave,p=void 0},d.delayedLeave=()=>{h(),delete d.delayedLeave,p=void 0}}:p=void 0}else p&&(p=void 0);return i}}};function Rl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==lt){t=n;break}}return t}const fu=pu;function El(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Mr(e,t,n,r,o){const{appear:i,mode:l,persisted:a=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:p,onEnterCancelled:u,onBeforeLeave:b,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:z,onAppear:_,onAfterAppear:y,onAppearCancelled:C}=t,w=String(e.key),T=El(n,e),F=(L,Z)=>{L&&It(L,r,9,Z)},D=(L,Z)=>{const le=Z[1];F(L,Z),ke(L)?L.every(q=>q.length<=1)&&le():L.length<=1&&le()},R={mode:l,persisted:a,beforeEnter(L){let Z=c;if(!n.isMounted)if(i)Z=z||c;else return;L[Ct]&&L[Ct](!0);const le=T[w];if(le&&Sn(e,le)){let q=le.el[Ct];if(!q){const be=Ir(le);q=be&&be.el[Ct]}q&&q()}F(Z,[L])},enter(L){if(T[w]===e)return;let Z=d,le=p,q=u;if(!n.isMounted)if(i)Z=_||d,le=y||p,q=C||u;else return;let be=!1;L[rr]=ze=>{be||(be=!0,ze?F(q,[L]):F(le,[L]),R.delayedLeave&&R.delayedLeave(),L[rr]=void 0)};const _e=L[rr].bind(null,!1);Z?D(Z,[L,_e]):_e()},leave(L,Z){const le=String(e.key);if(L[rr]&&L[rr](!0),n.isUnmounting)return Z();F(b,[L]);let q=!1;L[Ct]=_e=>{q||(q=!0,Z(),_e?F(g,[L]):F(h,[L]),L[Ct]=void 0,T[le]===e&&delete T[le])};const be=L[Ct].bind(null,!1);T[le]=e,m?D(m,[L,be]):be()},clone(L){const Z=Mr(L,t,n,r,o);return o&&o(Z),Z}};return R}function Yo(e){if(To(e))return e=gn(e),e.children=null,e}function co(e){if(!To(e))return Po(e.type)&&e.children?Rl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Se(n.default))return n.default()}}function xn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;xn(Po(n.type)&&co(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===se&&ke(e.children)){const n=Xl(e.children,!1);n&&xn(n,t)}}function si(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let l=e[i];const a=n==null?l.key:String(n)+String(l.key!=null?l.key:i);l.type===se?(l.patchFlag&128&&o++,r=r.concat(si(l.children,t,a))):(t||l.type!==lt)&&r.push(a!=null?gn(l,{key:a}):l)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ir(e){if(e.component)return Ir(e.component.subTree);if(e.type===se){const t=ke(e.children)&&Xl(e.children,!1);return t?Ir(t):void 0}if(e.type!==lt)return e}function ee(e,t){return Se(e)?Qe({name:e.name},t,{setup:e}):e}function Qn(){const e=Lo();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Fl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function $i(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const uo=new WeakMap;function gr(e,t,n,r,o=!1){if(ke(e)){e.forEach((g,z)=>gr(g,t&&(ke(t)?t[z]:t),n,r,o));return}if(Gn(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&gr(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Do(r.component):r.el,l=o?null:i,{i:a,r:c}=e,d=t&&t.r,p=a.refs===Ge?a.refs={}:a.refs,u=a.setupState,b=De(u),m=u===Ge?Ka:g=>$i(p,g)?!1:Ve(b,g),h=(g,z)=>!(z&&$i(p,z));if(d!=null&&d!==c){if(Pi(t),We(d))p[d]=null,m(d)&&(u[d]=null);else if(ut(d)){const g=t;h(d,g.k)&&(d.value=null),g.k&&(p[g.k]=null)}}if(Se(c))Fr(c,a,12,[l,p]);else{const g=We(c),z=ut(c);if(g||z){const _=()=>{if(e.f){const y=g?m(c)?u[c]:p[c]:h()||!e.k?c.value:p[e.k];if(o)ke(y)&&Xs(y,i);else if(ke(y))y.includes(i)||y.push(i);else if(g)p[c]=[i],m(c)&&(u[c]=p[c]);else{const C=[i];h(c,e.k)&&(c.value=C),e.k&&(p[e.k]=C)}}else g?(p[c]=l,m(c)&&(u[c]=l)):z&&(h(c,e.k)&&(c.value=l),e.k&&(p[e.k]=l))};if(l){const y=()=>{_(),uo.delete(e)};y.id=-1,uo.set(e,y),xt(y,n)}else Pi(e),_()}}}function Pi(e){const t=uo.get(e);t&&(t.flags|=8,uo.delete(e))}So().requestIdleCallback;So().cancelIdleCallback;const Gn=e=>!!e.type.__asyncLoader,To=e=>e.type.__isKeepAlive;function mu(e,t){Ll(e,"a",t)}function bu(e,t){Ll(e,"da",t)}function Ll(e,t,n=dt){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ro(t,r,n),n){let o=n.parent;for(;o&&o.parent;)To(o.parent.vnode)&&xu(r,t,n,o),o=o.parent}}function xu(e,t,n,r){const o=Ro(t,e,r,!0);Ee(()=>{Xs(r[t],o)},n)}function Ro(e,t,n=dt,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{Ht();const a=Dr(n),c=It(t,n,e,l);return a(),Gt(),c});return r?o.unshift(i):o.push(i),i}}const rn=e=>(t,n=dt)=>{(!Pr||e==="sp")&&Ro(e,(...r)=>t(...r),n)},gu=rn("bm"),Pe=rn("m"),hu=rn("bu"),Dl=rn("u"),Vl=rn("bum"),Ee=rn("um"),vu=rn("sp"),yu=rn("rtg"),wu=rn("rtc");function ku(e,t=dt){Ro("ec",e,t)}const Ol="components";function Lr(e,t){return jl(Ol,e,!0,t)||e}const Bl=Symbol.for("v-ndc");function Je(e){return We(e)?jl(Ol,e,!1)||e:e||Bl}function jl(e,t,n=!0,r=!1){const o=at||dt;if(o){const i=o.type;{const a=op(i,!1);if(a&&(a===t||a===vt(t)||a===Co(vt(t))))return i}const l=Ti(o[e]||i[e],t)||Ti(o.appContext[e],t);return!l&&r?i:l}}function Ti(e,t){return e&&(e[t]||e[vt(t)]||e[Co(vt(t))])}function he(e,t,n,r){let o;const i=n,l=ke(e);if(l||We(e)){const a=l&&mn(e);let c=!1,d=!1;a&&(c=!St(e),d=Ut(e),e=Io(e)),o=new Array(e.length);for(let p=0,u=e.length;p<u;p++)o[p]=t(c?d?bn(Mt(e[p])):Mt(e[p]):e[p],p,void 0,i)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)o=[];else{o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,i)}else if(He(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>t(a,c,void 0,i));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,d=a.length;c<d;c++){const p=a[c];o[c]=t(e[p],p,c,i)}}else o=[];return o}function Oe(e,t,n,r,o,i){if(n==null&&(n={}),at.ce||at.parent&&Gn(at.parent)&&at.parent.ce){const d=i!=null&&n.key==null?Qe({},n,{key:i}):n,p=Object.keys(d).length>0;return t!=="default"&&(d.name=t),f(),me(se,null,[k("slot",d,r&&r())],p?-2:64)}let l=e[t];l&&l._c&&(l._d=!1);const a=nn.length;f();let c;try{const d=l&&Nl(l(n)),p=n.key||i||d&&d.key;c=me(se,{key:(p&&!Pt(p)?p:`_${t}`)+(!d&&r?"_fb":"")},d||(r?r():[]),d&&e._===1?64:-2)}catch(d){for(let p=nn.length;p>a;p--)ci();throw d}finally{l&&l._c&&(l._d=!0)}return!o&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function Nl(e){return e.some(t=>Xn(t)?!(t.type===lt||t.type===se&&!Nl(t.children)):!0)?e:null}const zs=e=>e?cc(e)?Do(e):zs(e.parent):null,hr=Qe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>zs(e.parent),$root:e=>zs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Gl(e),$forceUpdate:e=>e.f||(e.f=()=>{ri(e.update)}),$nextTick:e=>e.n||(e.n=Hn.bind(e.proxy)),$watch:e=>lu.bind(e)}),Ko=(e,t)=>e!==Ge&&!e.__isScriptSetup&&Ve(e,t),zu={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:i,accessCache:l,type:a,appContext:c}=e;if(t[0]!=="$"){const b=l[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(Ko(r,t))return l[t]=1,r[t];if(o!==Ge&&Ve(o,t))return l[t]=2,o[t];if(Ve(i,t))return l[t]=3,i[t];if(n!==Ge&&Ve(n,t))return l[t]=4,n[t];_s&&(l[t]=0)}}const d=hr[t];let p,u;if(d)return t==="$attrs"&&ct(e.attrs,"get",""),d(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==Ge&&Ve(n,t))return l[t]=4,n[t];if(u=c.config.globalProperties,Ve(u,t))return u[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:i}=e;return Ko(o,t)?(o[t]=n,!0):r!==Ge&&Ve(r,t)?(r[t]=n,!0):Ve(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,props:i,type:l}},a){let c;return!!(n[a]||e!==Ge&&a[0]!=="$"&&Ve(e,a)||Ko(t,a)||Ve(i,a)||Ve(r,a)||Ve(hr,a)||Ve(o.config.globalProperties,a)||(c=l.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Ve(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ri(e){return ke(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let _s=!0;function _u(e){const t=Gl(e),n=e.proxy,r=e.ctx;_s=!1,t.beforeCreate&&Ei(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:l,watch:a,provide:c,inject:d,created:p,beforeMount:u,mounted:b,beforeUpdate:m,updated:h,activated:g,deactivated:z,beforeDestroy:_,beforeUnmount:y,destroyed:C,unmounted:w,render:T,renderTracked:F,renderTriggered:D,errorCaptured:R,serverPrefetch:L,expose:Z,inheritAttrs:le,components:q,directives:be,filters:_e}=t;if(d&&Cu(d,r,null),l)for(const te in l){const W=l[te];Se(W)&&(r[te]=W.bind(n))}if(o){const te=o.call(n,n);He(te)&&(e.data=Ao(te))}if(_s=!0,i)for(const te in i){const W=i[te],we=Se(W)?W.bind(n,n):Se(W.get)?W.get.bind(n,n):jt,J=!Se(W)&&Se(W.set)?W.set.bind(n):jt,Re=ie({get:we,set:J});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Me=>Re.value=Me})}if(a)for(const te in a)Hl(a[te],r,n,te);if(c){const te=Se(c)?c.call(n):c;Reflect.ownKeys(te).forEach(W=>{Jr(W,te[W])})}p&&Ei(p,e,"c");function Q(te,W){ke(W)?W.forEach(we=>te(we.bind(n))):W&&te(W.bind(n))}if(Q(gu,u),Q(Pe,b),Q(hu,m),Q(Dl,h),Q(mu,g),Q(bu,z),Q(ku,R),Q(wu,F),Q(yu,D),Q(Vl,y),Q(Ee,w),Q(vu,L),ke(Z))if(Z.length){const te=e.exposed||(e.exposed={});Z.forEach(W=>{Object.defineProperty(te,W,{get:()=>n[W],set:we=>n[W]=we,enumerable:!0})})}else e.exposed||(e.exposed={});T&&e.render===jt&&(e.render=T),le!=null&&(e.inheritAttrs=le),q&&(e.components=q),be&&(e.directives=be),L&&Fl(e)}function Cu(e,t,n=jt){ke(e)&&(e=Cs(e));for(const r in e){const o=e[r];let i;He(o)?"default"in o?i=Nt(o.from||r,o.default,!0):i=Nt(o.from||r):i=Nt(o),ut(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[r]=i}}function Ei(e,t,n){It(ke(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Hl(e,t,n,r){let o=r.includes(".")?Al(n,r):()=>n[r];if(We(e)){const i=t[e];Se(i)&&Xe(o,i)}else if(Se(e))Xe(o,e.bind(n));else if(He(e))if(ke(e))e.forEach(i=>Hl(i,t,n,r));else{const i=Se(e.handler)?e.handler.bind(n):t[e.handler];Se(i)&&Xe(o,i,e)}}function Gl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,a=i.get(t);let c;return a?c=a:!o.length&&!n&&!r?c=t:(c={},o.length&&o.forEach(d=>po(c,d,l,!0)),po(c,t,l)),He(t)&&i.set(t,c),c}function po(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&po(e,i,n,!0),o&&o.forEach(l=>po(e,l,n,!0));for(const l in t)if(!(r&&l==="expose")){const a=Su[l]||n&&n[l];e[l]=a?a(e[l],t[l]):t[l]}return e}const Su={data:Fi,props:Li,emits:Li,methods:ur,computed:ur,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:ur,directives:ur,watch:Iu,provide:Fi,inject:Mu};function Fi(e,t){return t?e?function(){return Qe(Se(e)?e.call(this,this):e,Se(t)?t.call(this,this):t)}:t:e}function Mu(e,t){return ur(Cs(e),Cs(t))}function Cs(e){if(ke(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function mt(e,t){return e?[...new Set([].concat(e,t))]:t}function ur(e,t){return e?Qe(Object.create(null),e,t):t}function Li(e,t){return e?ke(e)&&ke(t)?[...new Set([...e,...t])]:Qe(Object.create(null),Ri(e),Ri(t??{})):t}function Iu(e,t){if(!e)return t;if(!t)return e;const n=Qe(Object.create(null),e);for(const r in t)n[r]=mt(e[r],t[r]);return n}function Ul(){return{app:null,config:{isNativeTag:Ka,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Au=0;function $u(e,t){return function(r,o=null){Se(r)||(r=Qe({},r)),o!=null&&!He(o)&&(o=null);const i=Ul(),l=new WeakSet,a=[];let c=!1;const d=i.app={_uid:Au++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:ip,get config(){return i.config},set config(p){},use(p,...u){return l.has(p)||(p&&Se(p.install)?(l.add(p),p.install(d,...u)):Se(p)&&(l.add(p),p(d,...u))),d},mixin(p){return i.mixins.includes(p)||i.mixins.push(p),d},component(p,u){return u?(i.components[p]=u,d):i.components[p]},directive(p,u){return u?(i.directives[p]=u,d):i.directives[p]},mount(p,u,b){if(!c){const m=d._ceVNode||k(r,o);return m.appContext=i,b===!0?b="svg":b===!1&&(b=void 0),e(m,p,b),c=!0,d._container=p,p.__vue_app__=d,Do(m.component)}},onUnmount(p){a.push(p)},unmount(){c&&(It(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(p,u){return i.provides[p]=u,d},runWithContext(p){const u=Un;Un=d;try{return p()}finally{Un=u}}};return d}}let Un=null;const Pu=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${vt(t)}Modifiers`]||e[`${hn(t)}Modifiers`];function Tu(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Ge;let o=n;const i=t.startsWith("update:"),l=i&&Pu(r,t.slice(7));l&&(l.trim&&(o=n.map(p=>We(p)?p.trim():p)),l.number&&(o=o.map(Ys)));let a,c=r[a=Ho(t)]||r[a=Ho(vt(t))];!c&&i&&(c=r[a=Ho(hn(t))]),c&&It(c,e,6,o);const d=r[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,It(d,e,6,o)}}const Ru=new WeakMap;function ql(e,t,n=!1){const r=n?Ru:t.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let l={},a=!1;if(!Se(e)){const c=d=>{const p=ql(d,t,!0);p&&(a=!0,Qe(l,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(He(e)&&r.set(e,null),null):(ke(i)?i.forEach(c=>l[c]=null):Qe(l,i),He(e)&&r.set(e,l),l)}function Eo(e,t){return!e||!ko(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),Ve(e,t[0].toLowerCase()+t.slice(1))||Ve(e,hn(t))||Ve(e,t))}function Di(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[i],slots:l,attrs:a,emit:c,render:d,renderCache:p,props:u,data:b,setupState:m,ctx:h,inheritAttrs:g}=e,z=lo(e);let _,y;try{if(n.shapeFlag&4){const w=o||r,T=w;_=Vt(d.call(T,w,p,u,m,b,h)),y=a}else{const w=t;_=Vt(w.length>1?w(u,{attrs:a,slots:l,emit:c}):w(u,null)),y=t.props?a:Eu(a)}}catch(w){nn.length=0,$o(w,e,1),_=k(lt)}let C=_;if(y&&g!==!1){const w=Object.keys(y),{shapeFlag:T}=C;w.length&&T&7&&(i&&w.some(zo)&&(y=Fu(y,i)),C=gn(C,y,!1,!0))}if(n.dirs&&(C=gn(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition){const w=Po(C.type)&&co(C)||C;xn(w,n.transition)}return _=C,lo(z),_}function Xl(e,t=!0){let n;for(let r=0;r<e.length;r++){const o=e[r];if(Xn(o)){if(o.type!==lt||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Eu=e=>{let t;for(const n in e)(n==="class"||n==="style"||ko(n))&&((t||(t={}))[n]=e[n]);return t},Fu=(e,t)=>{const n={};for(const r in e)(!zo(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Lu(e,t,n){const{props:r,children:o,component:i}=e,{props:l,children:a,patchFlag:c}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Vi(r,l,d):!!l;if(c&8){const p=t.dynamicProps;for(let u=0;u<p.length;u++){const b=p[u];if(Wl(l,r,b)&&!Eo(d,b))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===l?!1:r?l?Vi(r,l,d):!0:!!l;return!1}function Vi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(!Ve(e,i)||Wl(t,e,i)&&!Eo(n,i))return!0}return!1}function Wl(e,t,n){const r=e[n],o=t[n];return n==="style"&&He(r)&&He(o)?!Mo(r,o):r!==o}function Du({vnode:e,parent:t,suspense:n},r){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=r,e=o),o===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Yl={},Kl=()=>Object.create(Yl),Zl=e=>Object.getPrototypeOf(e)===Yl;function Vu(e,t,n,r=!1){const o={},i=Kl();e.propsDefaults=Object.create(null),Ql(e,t,o,i);for(const l in e.propsOptions[0])l in o||(o[l]=void 0);n?e.props=r?o:vl(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Ou(e,t,n,r){const{props:o,attrs:i,vnode:{patchFlag:l}}=e,a=De(o),[c]=e.propsOptions;let d=!1;if((r||l>0)&&!(l&16)){if(l&8){const p=e.vnode.dynamicProps;for(let u=0;u<p.length;u++){let b=p[u];if(Eo(e.emitsOptions,b))continue;const m=t[b];if(c)if(Ve(i,b))m!==i[b]&&(i[b]=m,d=!0);else{const h=vt(b);o[h]=Ss(c,a,h,m,e,!1)}else m!==i[b]&&(i[b]=m,d=!0)}}}else{Ql(e,t,o,i)&&(d=!0);let p;for(const u in a)(!t||!Ve(t,u)&&((p=hn(u))===u||!Ve(t,p)))&&(c?n&&(n[u]!==void 0||n[p]!==void 0)&&(o[u]=Ss(c,a,u,void 0,e,!0)):delete o[u]);if(i!==a)for(const u in i)(!t||!Ve(t,u))&&(delete i[u],d=!0)}d&&Jt(e.attrs,"set","")}function Ql(e,t,n,r){const[o,i]=e.propsOptions;let l=!1,a;if(t)for(let c in t){if(mr(c))continue;const d=t[c];let p;o&&Ve(o,p=vt(c))?!i||!i.includes(p)?n[p]=d:(a||(a={}))[p]=d:Eo(e.emitsOptions,c)||(!(c in r)||d!==r[c])&&(r[c]=d,l=!0)}if(i){const c=De(n),d=a||Ge;for(let p=0;p<i.length;p++){const u=i[p];n[u]=Ss(o,c,u,d[u],e,!Ve(d,u))}}return l}function Ss(e,t,n,r,o,i){const l=e[n];if(l!=null){const a=Ve(l,"default");if(a&&r===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&Se(c)){const{propsDefaults:d}=o;if(n in d)r=d[n];else{const p=Dr(o);r=d[n]=c.call(null,t),p()}}else r=c;o.ce&&o.ce._setProp(n,r)}l[0]&&(i&&!a?r=!1:l[1]&&(r===""||r===hn(n))&&(r=!0))}return r}const Bu=new WeakMap;function Jl(e,t,n=!1){const r=n?Bu:t.propsCache,o=r.get(e);if(o)return o;const i=e.props,l={},a=[];let c=!1;if(!Se(e)){const p=u=>{c=!0;const[b,m]=Jl(u,t,!0);Qe(l,b),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!i&&!c)return He(e)&&r.set(e,Mn),Mn;if(ke(i))for(let p=0;p<i.length;p++){const u=vt(i[p]);Oi(u)&&(l[u]=Ge)}else if(i)for(const p in i){const u=vt(p);if(Oi(u)){const b=i[p],m=l[u]=ke(b)||Se(b)?{type:b}:Qe({},b),h=m.type;let g=!1,z=!0;if(ke(h))for(let _=0;_<h.length;++_){const y=h[_],C=Se(y)&&y.name;if(C==="Boolean"){g=!0;break}else C==="String"&&(z=!1)}else g=Se(h)&&h.name==="Boolean";m[0]=g,m[1]=z,(g||Ve(m,"default"))&&a.push(u)}}const d=[l,a];return He(e)&&r.set(e,d),d}function Oi(e){return e[0]!=="$"&&!mr(e)}const ii=e=>e==="_"||e==="_ctx"||e==="$stable",ai=e=>ke(e)?e.map(Vt):[Vt(e)],ju=(e,t,n)=>{if(t._n)return t;const r=U((...o)=>ai(t(...o)),n);return r._c=!1,r},ec=(e,t,n)=>{const r=e._ctx;for(const o in e){if(ii(o))continue;const i=e[o];if(Se(i))t[o]=ju(o,i,r);else if(i!=null){const l=ai(i);t[o]=()=>l}}},tc=(e,t)=>{const n=ai(t);e.slots.default=()=>n},nc=(e,t,n)=>{for(const r in t)(n||!ii(r))&&(e[r]=t[r])},Nu=(e,t,n)=>{const r=e.slots=Kl();if(e.vnode.shapeFlag&32){const o=t._;o?(nc(r,t,n),n&&el(r,"_",o,!0)):ec(t,r)}else t&&tc(e,t)},Hu=(e,t,n)=>{const{vnode:r,slots:o}=e;let i=!0,l=Ge;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:nc(o,t,n):(i=!t.$stable,ec(t,o)),l=t}else t&&(tc(e,t),l={default:1});if(i)for(const a in o)!ii(a)&&l[a]==null&&delete o[a]},xt=Wu;function Gu(e){return Uu(e)}function Uu(e,t){const n=So();n.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:l,createText:a,createComment:c,setText:d,setElementText:p,parentNode:u,nextSibling:b,setScopeId:m=jt,insertStaticContent:h}=e,g=(S,$,E,V=null,B=null,j=null,K=void 0,re=null,oe=!!$.dynamicChildren)=>{if(S===$)return;S&&!Sn(S,$)&&(V=O(S),Me(S,B,j,!0),S=null),$.patchFlag===-2&&(oe=!1,$.dynamicChildren=null),$.dynamicChildren&&S&&S.dynamicChildren&&S.dynamicChildren.hasOnce&&($.dynamicChildren===Mn&&($.dynamicChildren=[]),$.dynamicChildren.hasOnce=!0);const{type:H,ref:ve,shapeFlag:ae}=$;switch(H){case Fo:z(S,$,E,V);break;case lt:_(S,$,E,V);break;case eo:S==null&&y($,E,V,K);break;case se:q(S,$,E,V,B,j,K,re,oe);break;default:ae&1?T(S,$,E,V,B,j,K,re,oe):ae&6?be(S,$,E,V,B,j,K,re,oe):(ae&64||ae&128)&&H.process(S,$,E,V,B,j,K,re,oe,X)}ve!=null&&B?gr(ve,S&&S.ref,j,$||S,!$):ve==null&&S&&S.ref!=null&&gr(S.ref,null,j,S,!0)},z=(S,$,E,V)=>{if(S==null)r($.el=a($.children),E,V);else{const B=$.el=S.el;$.children!==S.children&&d(B,$.children)}},_=(S,$,E,V)=>{S==null?r($.el=c($.children||""),E,V):$.el=S.el},y=(S,$,E,V)=>{[S.el,S.anchor]=h(S.children,$,E,V,S.el,S.anchor)},C=({el:S,anchor:$},E,V)=>{let B;for(;S&&S!==$;)B=b(S),r(S,E,V),S=B;r($,E,V)},w=({el:S,anchor:$})=>{let E;for(;S&&S!==$;)E=b(S),o(S),S=E;o($)},T=(S,$,E,V,B,j,K,re,oe)=>{if($.type==="svg"?K="svg":$.type==="math"&&(K="mathml"),S==null)F($,E,V,B,j,K,re,oe);else{const H=S.el&&S.el._isVueCE?S.el:null;try{H&&H._beginPatch(),L(S,$,B,j,K,re,oe)}finally{H&&H._endPatch()}}},F=(S,$,E,V,B,j,K,re)=>{let oe,H;const{props:ve,shapeFlag:ae,transition:xe,dirs:ye}=S;if(oe=S.el=l(S.type,j,ve&&ve.is,ve),ae&8?p(oe,S.children):ae&16&&R(S.children,oe,null,V,B,Zo(S,j),K,re),ye&&yn(S,null,V,"created"),D(oe,S,S.scopeId,K,V),ve){for(const Be in ve)Be!=="value"&&!mr(Be)&&i(oe,Be,null,ve[Be],j,V);"value"in ve&&i(oe,"value",null,ve.value,j),(H=ve.onVnodeBeforeMount)&&Rt(H,V,S)}ye&&yn(S,null,V,"beforeMount");const Ae=qu(B,xe);Ae&&xe.beforeEnter(oe),r(oe,$,E),((H=ve&&ve.onVnodeMounted)||Ae||ye)&&xt(()=>{try{H&&Rt(H,V,S),Ae&&xe.enter(oe),ye&&yn(S,null,V,"mounted")}finally{}},B)},D=(S,$,E,V,B)=>{if(E&&m(S,E),V)for(let j=0;j<V.length;j++)m(S,V[j]);if(B){let j=B.subTree;if($===j||oc(j.type)&&(j.ssContent===$||j.ssFallback===$)){const K=B.vnode;D(S,K,K.scopeId,K.slotScopeIds,B.parent)}}},R=(S,$,E,V,B,j,K,re,oe=0)=>{for(let H=oe;H<S.length;H++){const ve=S[H]=re?Qt(S[H]):Vt(S[H]);g(null,ve,$,E,V,B,j,K,re)}},L=(S,$,E,V,B,j,K)=>{const re=$.el=S.el;let{patchFlag:oe,dynamicChildren:H,dirs:ve}=$;oe|=S.patchFlag&16;const ae=S.props||Ge,xe=$.props||Ge;let ye;if(E&&wn(E,!1),(ye=xe.onVnodeBeforeUpdate)&&Rt(ye,E,$,S),ve&&yn($,S,E,"beforeUpdate"),E&&wn(E,!0),H&&(!S.dynamicChildren||S.dynamicChildren.length!==H.length)&&(oe=0,K=!1,H=null),(ae.innerHTML&&xe.innerHTML==null||ae.textContent&&xe.textContent==null)&&p(re,""),H?Z(S.dynamicChildren,H,re,E,V,Zo($,B),j):K||W(S,$,re,null,E,V,Zo($,B),j,!1),oe>0){if(oe&16)le(re,ae,xe,E,B);else if(oe&2&&ae.class!==xe.class&&i(re,"class",null,xe.class,B),oe&4&&i(re,"style",ae.style,xe.style,B),oe&8){const Ae=$.dynamicProps;for(let Be=0;Be<Ae.length;Be++){const je=Ae[Be],Ye=ae[je],tt=xe[je];(tt!==Ye||je==="value")&&i(re,je,Ye,tt,B,E)}}oe&1&&S.children!==$.children&&p(re,$.children)}else!K&&H==null&&le(re,ae,xe,E,B);((ye=xe.onVnodeUpdated)||ve)&&xt(()=>{ye&&Rt(ye,E,$,S),ve&&yn($,S,E,"updated")},V)},Z=(S,$,E,V,B,j,K)=>{for(let re=0;re<$.length;re++){const oe=S[re],H=$[re],ve=oe.el||Ms(oe),ae=ve&&(oe.type===se||!Sn(oe,H)||oe.shapeFlag&198)?u(ve):E;g(oe,H,ae,null,V,B,j,K,!0)}},le=(S,$,E,V,B)=>{if($!==E){if($!==Ge)for(const j in $)!mr(j)&&!(j in E)&&i(S,j,$[j],null,B,V);for(const j in E){if(mr(j))continue;const K=E[j],re=$[j];K!==re&&j!=="value"&&i(S,j,re,K,B,V)}"value"in E&&i(S,"value",$.value,E.value,B)}},q=(S,$,E,V,B,j,K,re,oe)=>{const H=$.el=S?S.el:a(""),ve=$.anchor=S?S.anchor:a("");let{patchFlag:ae,dynamicChildren:xe,slotScopeIds:ye}=$;ye&&(re=re?re.concat(ye):ye),S==null?(r(H,E,V),r(ve,E,V),R($.children||[],E,ve,B,j,K,re,oe)):ae>0&&ae&64&&xe&&S.dynamicChildren&&S.dynamicChildren.length===xe.length?(Z(S.dynamicChildren,xe,E,B,j,K,re),($.key!=null||B&&$===B.subTree)&&li(S,$,!0)):W(S,$,E,ve,B,j,K,re,oe)},be=(S,$,E,V,B,j,K,re,oe)=>{$.slotScopeIds=re,S==null?$.shapeFlag&512?B.ctx.activate($,E,V,K,oe):_e($,E,V,B,j,K,oe):ze(S,$,oe)},_e=(S,$,E,V,B,j,K)=>{const re=S.component=Ju(S,V,B);if(To(S)&&(re.ctx.renderer=X),ep(re,!1,K),re.asyncDep){if(B&&B.registerDep(re,Q,K,j),!S.el){const oe=re.subTree=k(lt);_(null,oe,$,E),S.placeholder=oe.el}}else Q(re,S,$,E,B,j,K)},ze=(S,$,E)=>{const V=$.component=S.component;if(Lu(S,$,E))if(V.asyncDep&&!V.asyncResolved){$.el=S.el,$.placeholder=S.placeholder,te(V,$,E);return}else V.next=$,V.update();else $.el=S.el,$.placeholder=S.placeholder,V.vnode=$},Q=(S,$,E,V,B,j,K)=>{const re=()=>{if(S.isMounted){let{next:ae,bu:xe,u:ye,parent:Ae,vnode:Be}=S;{const pt=rc(S);if(pt){ae&&(ae.el=Be.el,te(S,ae,K)),pt.asyncDep.then(()=>{xt(()=>{S.isUnmounted||H()},B)});return}}let je=ae,Ye;wn(S,!1),ae?(ae.el=Be.el,te(S,ae,K)):ae=Be,xe&&Qr(xe),(Ye=ae.props&&ae.props.onVnodeBeforeUpdate)&&Rt(Ye,Ae,ae,Be),wn(S,!0);const tt=Di(S),kt=S.subTree;S.subTree=tt,g(kt,tt,u(kt.el),O(kt),S,B,j),ae.el=tt.el,je===null&&Du(S,tt.el),ye&&xt(ye,B),(Ye=ae.props&&ae.props.onVnodeUpdated)&&xt(()=>Rt(Ye,Ae,ae,Be),B)}else{let ae;const{el:xe,props:ye}=$,{bm:Ae,m:Be,parent:je,root:Ye,type:tt}=S,kt=Gn($);wn(S,!1),Ae&&Qr(Ae),!kt&&(ae=ye&&ye.onVnodeBeforeMount)&&Rt(ae,je,$),wn(S,!0);{Ye.ce&&Ye.ce._hasShadowRoot()&&Ye.ce._injectChildStyle(tt,S.parent?S.parent.type:void 0);const pt=S.subTree=Di(S);g(null,pt,E,V,S,B,j),$.el=pt.el}if(Be&&xt(Be,B),!kt&&(ae=ye&&ye.onVnodeMounted)){const pt=$;xt(()=>Rt(ae,je,pt),B)}($.shapeFlag&256||je&&Gn(je.vnode)&&je.vnode.shapeFlag&256)&&S.a&&xt(S.a,B),S.isMounted=!0,$=E=V=null}};S.scope.on();const oe=S.effect=new ol(re);S.scope.off();const H=S.update=oe.run.bind(oe),ve=S.job=oe.runIfDirty.bind(oe);ve.i=S,ve.id=S.uid,oe.scheduler=()=>ri(ve),wn(S,!0),H()},te=(S,$,E)=>{$.component=S;const V=S.vnode.props;S.vnode=$,S.next=null,Ou(S,$.props,V,E),Hu(S,$.children,E),Ht(),_l(S),Gt()},W=(S,$,E,V,B,j,K,re,oe=!1)=>{const H=S&&S.children,ve=S?S.shapeFlag:0,ae=$.children,{patchFlag:xe,shapeFlag:ye}=$;if(xe>0){if(xe&128){J(H,ae,E,V,B,j,K,re,oe);return}else if(xe&256){we(H,ae,E,V,B,j,K,re,oe);return}}ye&8?(ve&16&&Ce(H,B,j),ae!==H&&p(E,ae)):ve&16?ye&16?J(H,ae,E,V,B,j,K,re,oe):Ce(H,B,j,!0):(ve&8&&p(E,""),ye&16&&R(ae,E,V,B,j,K,re,oe))},we=(S,$,E,V,B,j,K,re,oe)=>{S=S||Mn,$=$||Mn;const H=S.length,ve=$.length,ae=Math.min(H,ve);let xe;for(xe=0;xe<ae;xe++){const ye=$[xe]=oe?Qt($[xe]):Vt($[xe]);g(S[xe],ye,E,null,B,j,K,re,oe)}H>ve?Ce(S,B,j,!0,!1,ae):R($,E,V,B,j,K,re,oe,ae)},J=(S,$,E,V,B,j,K,re,oe)=>{let H=0;const ve=$.length;let ae=S.length-1,xe=ve-1;for(;H<=ae&&H<=xe;){const ye=S[H],Ae=$[H]=oe?Qt($[H]):Vt($[H]);if(Sn(ye,Ae))g(ye,Ae,E,null,B,j,K,re,oe);else break;H++}for(;H<=ae&&H<=xe;){const ye=S[ae],Ae=$[xe]=oe?Qt($[xe]):Vt($[xe]);if(Sn(ye,Ae))g(ye,Ae,E,null,B,j,K,re,oe);else break;ae--,xe--}if(H>ae){if(H<=xe){const ye=xe+1,Ae=ye<ve?$[ye].el:V;for(;H<=xe;)g(null,$[H]=oe?Qt($[H]):Vt($[H]),E,Ae,B,j,K,re,oe),H++}}else if(H>xe)for(;H<=ae;)Me(S[H],B,j,!0),H++;else{const ye=H,Ae=H,Be=new Map;for(H=Ae;H<=xe;H++){const st=$[H]=oe?Qt($[H]):Vt($[H]);st.key!=null&&Be.set(st.key,H)}let je,Ye=0;const tt=xe-Ae+1;let kt=!1,pt=0;const qt=new Array(tt);for(H=0;H<tt;H++)qt[H]=0;for(H=ye;H<=ae;H++){const st=S[H];if(Ye>=tt){Me(st,B,j,!0);continue}let ft;if(st.key!=null)ft=Be.get(st.key);else for(je=Ae;je<=xe;je++)if(qt[je-Ae]===0&&Sn(st,$[je])){ft=je;break}ft===void 0?Me(st,B,j,!0):(qt[ft-Ae]=H+1,ft>=pt?pt=ft:kt=!0,g(st,$[ft],E,null,B,j,K,re,oe),Ye++)}const Vr=kt?Xu(qt):Mn;for(je=Vr.length-1,H=tt-1;H>=0;H--){const st=Ae+H,ft=$[st],Or=$[st+1],tr=st+1<ve?Or.el||Ms(Or):V;qt[H]===0?g(null,ft,E,tr,B,j,K,re,oe):kt&&(je<0||H!==Vr[je]?Re(ft,E,tr,2):je--)}}},Re=(S,$,E,V,B=null)=>{const{el:j,type:K,transition:re,children:oe,shapeFlag:H}=S;if(H&6){Re(S.component.subTree,$,E,V);return}if(H&128){S.suspense.move($,E,V);return}if(H&64){K.move(S,$,E,X);return}if(K===se){r(j,$,E);for(let ae=0;ae<oe.length;ae++)Re(oe[ae],$,E,V);r(S.anchor,$,E);return}if(K===eo){C(S,$,E);return}if(V!==2&&H&1&&re)if(V===0)re.persisted&&!j[Ct]?r(j,$,E):(re.beforeEnter(j),r(j,$,E),xt(()=>re.enter(j),B));else{const{leave:ae,delayLeave:xe,afterLeave:ye}=re,Ae=()=>{S.ctx.isUnmounted?o(j):r(j,$,E)},Be=()=>{const je=j._isLeaving||!!j[Ct];j._isLeaving&&j[Ct](!0),re.persisted&&!je?Ae():ae(j,()=>{Ae(),ye&&ye()})};xe?xe(j,Ae,Be):Be()}else r(j,$,E)},Me=(S,$,E,V=!1,B=!1)=>{const{type:j,props:K,ref:re,children:oe,dynamicChildren:H,shapeFlag:ve,patchFlag:ae,dirs:xe,cacheIndex:ye,memo:Ae}=S;if((ae===-2||H&&H.hasOnce)&&(B=!1),re!=null&&(Ht(),gr(re,null,E,S,!0),Gt()),ye!=null&&(!S.ctx||S.ctx===$)&&($.renderCache[ye]=void 0),ve&256){$.ctx.deactivate(S);return}const Be=ve&1&&xe,je=!Gn(S);let Ye;if(je&&(Ye=K&&K.onVnodeBeforeUnmount)&&Rt(Ye,$,S),ve&6)Te(S.component,E,V);else{if(ve&128){S.suspense.unmount(E,V);return}Be&&yn(S,null,$,"beforeUnmount"),ve&64?S.type.remove(S,$,E,X,V):H&&!H.hasOnce&&(j!==se||ae>0&&ae&64)?Ce(H,$,E,!1,!0):(j===se&&ae&384||!B&&ve&16)&&Ce(oe,$,E),V&&ot(S)}const tt=Ae!=null&&ye==null;(je&&(Ye=K&&K.onVnodeUnmounted)||Be||tt)&&xt(()=>{Ye&&Rt(Ye,$,S),Be&&yn(S,null,$,"unmounted"),tt&&(S.el=null)},E)},ot=S=>{const{type:$,el:E,anchor:V,transition:B}=S,j=$===se;if(j&&!B){Ue(E,V);return}if($===eo){w(S),B&&!B.persisted&&B.afterLeave&&B.afterLeave();return}const K=j?Ir(S):S,re=()=>{j?u(E)&&Ue(E,V):o(E),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(K&&K.shapeFlag&1&&B&&!B.persisted){const{leave:oe,delayLeave:H}=B,ve=K.el,ae=()=>oe(ve,re);H?H(ve,re,ae):ae()}else re()},Ue=(S,$)=>{let E;for(;S!==$;)E=b(S),o(S),S=E;o($)},Te=(S,$,E)=>{const{bum:V,scope:B,job:j,subTree:K,um:re,m:oe,a:H}=S;Bi(oe),Bi(H),V&&Qr(V),B.stop(),j?(j.flags|=8,Me(K,S,$,E)):S.vnode.el&&K&&(K.transition=S.vnode.transition,Me(K,S,$,E)),re&&xt(re,$),xt(()=>{S.isUnmounted=!0},$)},Ce=(S,$,E,V=!1,B=!1,j=0)=>{for(let K=j;K<S.length;K++)Me(S[K],$,E,V,B)},O=S=>{if(S.shapeFlag&6)return O(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const $=b(S.anchor||S.el),E=$&&$[$l];return E?b(E):$},ce=(S,$,E)=>{const V=S&&$._vnode?void 0:S&&S.component?S.component.uid:Qu();su(()=>{S==null?$._vnode&&Me($._vnode,null,null,!0):g($._vnode||null,S,$,null,null,null,E),$._vnode=S},V)},X={p:g,um:Me,m:Re,r:ot,mt:_e,mc:R,pc:W,pbc:Z,n:O,o:e};return{render:ce,hydrate:void 0,createApp:$u(ce)}}function Zo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function wn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function qu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function li(e,t,n=!1){const r=e.children,o=t.children;if(ke(r)&&ke(o))for(let i=0;i<r.length;i++){const l=r[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=Qt(o[i]),a.el=l.el),!n&&a.patchFlag!==-2&&li(l,a)),a.type===Fo&&(a.patchFlag===-1&&(a=o[i]=Qt(a)),a.el=l.el),a.type===lt&&!a.el&&(a.el=l.el)}}function Xu(e){const t=e.slice(),n=[0];let r,o,i,l,a;const c=e.length;for(r=0;r<c;r++){const d=e[r];if(d!==0){if(o=n[n.length-1],e[o]<d){t[r]=o,n.push(r);continue}for(i=0,l=n.length-1;i<l;)a=i+l>>1,e[n[a]]<d?i=a+1:l=a;d<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}function rc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:rc(t)}function Bi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ms(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Ms(t.subTree):null}const oc=e=>e.__isSuspense;function Wu(e,t){t&&t.pendingBranch?ke(e)?t.effects.push(...e):t.effects.push(e):ou(e)}const se=Symbol.for("v-fgt"),Fo=Symbol.for("v-txt"),lt=Symbol.for("v-cmt"),eo=Symbol.for("v-stc"),nn=[];let zt=null;function f(e=!1){nn.push(zt=e?null:[])}function ci(){nn.pop(),zt=nn[nn.length-1]||null}let Ar=1;function fo(e,t=!1){Ar+=e,e<0&&zt&&t&&(zt.hasOnce=!0)}function sc(e){return e.dynamicChildren=Ar>0?zt||Mn:null,ci(),Ar>0&&zt&&zt.push(e),e}function x(e,t,n,r,o,i){return sc(s(e,t,n,r,o,i,!0))}function me(e,t,n,r,o){return sc(k(e,t,n,r,o,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function Sn(e,t){return e.type===t.type&&e.key===t.key}const ic=({key:e})=>e??null,to=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?We(e)||ut(e)||Se(e)?{i:at,r:e,k:t,f:!!n}:e:null);function s(e,t=null,n=null,r=0,o=null,i=e===se?0:1,l=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ic(t),ref:t&&to(t),scopeId:Ml,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:at};return a?(bo(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),Ar>0&&!l&&zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&zt.push(c),c}const k=Yu;function Yu(e,t=null,n=null,r=0,o=null,i=!1){if((!e||e===Bl)&&(e=lt),Xn(e)){const a=gn(e,t,!0);return n&&bo(a,n),Ar>0&&!i&&zt&&(a.shapeFlag&6?zt[zt.indexOf(e)]=a:zt.push(a)),a.patchFlag=-2,a}if(sp(e)&&(e=e.__vccOpts),t){t=Ku(t);let{class:a,style:c}=t;a&&!We(a)&&(t.class=M(a)),He(c)&&(ni(c)&&!ke(c)&&(c=Qe({},c)),t.style=fe(c))}const l=We(e)?1:oc(e)?128:Po(e)?64:He(e)?4:Se(e)?2:0;return s(e,t,n,r,o,l,i,!0)}function Ku(e){return e?ni(e)||Zl(e)?Qe({},e):e:null}function gn(e,t,n=!1,r=!1){const{props:o,ref:i,patchFlag:l,children:a,transition:c}=e,d=t?ac(o||{},t):o,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&ic(d),ref:t&&t.ref?n&&i?ke(i)?i.concat(to(t)):[i,to(t)]:to(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==se?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gn(e.ssContent),ssFallback:e.ssFallback&&gn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&xn(p,c.clone(p)),p}function $e(e=" ",t=0){return k(Fo,null,e,t)}function mo(e,t){const n=k(eo,null,e);return n.staticCount=t,n}function N(e="",t=!1){return t?(f(),me(lt,null,e)):k(lt,null,e)}function Vt(e){return e==null||typeof e=="boolean"?k(lt):ke(e)?k(se,null,e.slice()):Xn(e)?Qt(e):k(Fo,null,String(e))}function Qt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:gn(e)}function bo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ke(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),bo(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Zl(t)?t._ctx=at:o===3&&at&&(at.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(Se(t)){if(r&65){bo(e,{default:t});return}t={default:t,_ctx:at},n=32}else t=String(t),r&64?(n=16,t=[$e(t)]):n=8;e.children=t,e.shapeFlag|=n}function ac(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=M([t.class,r.class]));else if(o==="style")t.style=fe([t.style,r.style]);else if(ko(o)){const i=t[o],l=r[o];l&&i!==l&&!(ke(i)&&i.includes(l))?t[o]=i?[].concat(i,l):l:l==null&&i==null&&!zo(o)&&(t[o]=l)}else o!==""&&(t[o]=r[o])}return t}function Rt(e,t,n,r=null){It(e,t,7,[n,r])}const Zu=Ul();let lc=0;function Qu(){return lc}function Ju(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||Zu,i={uid:lc++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $d(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jl(r,o),emitsOptions:ql(r,o),emit:null,emitted:null,propsDefaults:Ge,inheritAttrs:r.inheritAttrs,ctx:Ge,data:Ge,props:Ge,attrs:Ge,slots:Ge,refs:Ge,setupState:Ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Tu.bind(null,i),e.ce&&e.ce(i),i}let dt=null;const Lo=()=>dt||at;let xo,$r;{const e=So(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),i=>{o.length>1?o.forEach(l=>l(i)):o[0](i)}};xo=t("__VUE_INSTANCE_SETTERS__",n=>dt=n),$r=t("__VUE_SSR_SETTERS__",n=>Pr=n)}const Dr=e=>{const t=dt;return xo(e),e.scope.on(),()=>{e.scope.off(),xo(t)}},ji=()=>{dt&&dt.scope.off(),xo(null)};function cc(e){return e.vnode.shapeFlag&4}let Pr=!1;function ep(e,t=!1,n=!1){t&&$r(t);const{props:r,children:o}=e.vnode,i=cc(e);Vu(e,r,i,t),Nu(e,o,n||t);const l=i?tp(e,t):void 0;return t&&$r(!1),l}function tp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,zu);const{setup:r}=n;if(r){Ht();const o=e.setupContext=r.length>1?rp(e):null,i=Dr(e),l=Fr(r,e,0,[e.props,o]),a=Za(l);if(Gt(),i(),(a||e.sp)&&!Gn(e)&&Fl(e),a){if(l.then(ji,ji),t)return l.then(c=>{$r(!0);try{Ni(e,c,t)}finally{$r(!1)}}).catch(c=>{$o(c,e,0)});e.asyncDep=l}else Ni(e,l)}else dc(e)}function Ni(e,t,n){Se(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:He(t)&&(e.setupState=wl(t)),dc(e)}function dc(e,t,n){const r=e.type;e.render||(e.render=r.render||jt);{const o=Dr(e);Ht();try{_u(e)}finally{Gt(),o()}}}const np={get(e,t){return ct(e,"get",""),e[t]}};function rp(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,np),slots:e.slots,emit:e.emit,expose:t}}function Do(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(wl(Wd(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hr)return hr[n](e)},has(t,n){return n in t||n in hr}})):e.proxy}function op(e,t=!0){return Se(e)?e.displayName||e.name:e.name||t&&e.__name}function sp(e){return Se(e)&&"__vccOpts"in e}const ie=(e,t)=>Jd(e,t,Pr);function Wn(e,t,n){try{fo(-1);const r=arguments.length;return r===2?He(t)&&!ke(t)?Xn(t)?k(e,null,[t]):k(e,t):k(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xn(n)&&(n=[n]),k(e,t,n))}finally{fo(1)}}const ip="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Is;const Hi=typeof window<"u"&&window.trustedTypes;if(Hi)try{Is=Hi.createPolicy("vue",{createHTML:e=>e})}catch{}const uc=Is?e=>Is.createHTML(e):e=>e,ap="http://www.w3.org/2000/svg",lp="http://www.w3.org/1998/Math/MathML",Zt=typeof document<"u"?document:null,Gi=Zt&&Zt.createElement("template"),cp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?Zt.createElementNS(ap,e):t==="mathml"?Zt.createElementNS(lp,e):n?Zt.createElement(e,{is:n}):Zt.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Zt.createTextNode(e),createComment:e=>Zt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Zt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const l=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{Gi.innerHTML=uc(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Gi.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},on="transition",or="animation",Yn=Symbol("_vtc"),pc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},fc=Qe({},Tl,pc),dp=e=>(e.displayName="Transition",e.props=fc,e),et=dp((e,{slots:t})=>Wn(fu,mc(e),t)),kn=(e,t=[])=>{ke(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ui=e=>e?ke(e)?e.some(t=>t.length>1):e.length>1:!1;function mc(e){const t={};for(const q in e)q in pc||(t[q]=e[q]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:i=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:d=l,appearToClass:p=a,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:b=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=up(o),g=h&&h[0],z=h&&h[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:C,onLeave:w,onLeaveCancelled:T,onBeforeAppear:F=_,onAppear:D=y,onAppearCancelled:R=C}=t,L=(q,be,_e,ze)=>{q._enterCancelled=ze,cn(q,be?p:a),cn(q,be?d:l),_e&&_e()},Z=(q,be)=>{q._isLeaving=!1,cn(q,u),cn(q,m),cn(q,b),be&&be()},le=q=>(be,_e)=>{const ze=q?D:y,Q=()=>L(be,q,_e);kn(ze,[be,Q]),qi(()=>{cn(be,q?c:i),Ft(be,q?p:a),Ui(ze)||Xi(be,r,g,Q)})};return Qe(t,{onBeforeEnter(q){kn(_,[q]),Ft(q,i),Ft(q,l)},onBeforeAppear(q){kn(F,[q]),Ft(q,c),Ft(q,d)},onEnter:le(!1),onAppear:le(!0),onLeave(q,be){q._isLeaving=!0;const _e=()=>Z(q,be);Ft(q,u),q._enterCancelled?(Ft(q,b),As(q)):(As(q),Ft(q,b)),qi(()=>{q._isLeaving&&(cn(q,u),Ft(q,m),Ui(w)||Xi(q,r,z,_e))}),kn(w,[q,_e])},onEnterCancelled(q){L(q,!1,void 0,!0),kn(C,[q])},onAppearCancelled(q){L(q,!0,void 0,!0),kn(R,[q])},onLeaveCancelled(q){Z(q),kn(T,[q])}})}function up(e){if(e==null)return null;if(He(e))return[Qo(e.enter),Qo(e.leave)];{const t=Qo(e);return[t,t]}}function Qo(e){return wd(e)}function Ft(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Yn]||(e[Yn]=new Set)).add(t)}function cn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Yn];n&&(n.delete(t),n.size||(e[Yn]=void 0))}function qi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let pp=0;function Xi(e,t,n,r){const o=e._endId=++pp,i=()=>{o===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:l,timeout:a,propCount:c}=bc(e,t);if(!l)return r();const d=l+"end";let p=0;const u=()=>{e.removeEventListener(d,b),i()},b=m=>{m.target===e&&++p>=c&&u()};setTimeout(()=>{p<c&&u()},a+1),e.addEventListener(d,b)}function bc(e,t){const n=window.getComputedStyle(e),r=h=>(n[h]||"").split(", "),o=r(`${on}Delay`),i=r(`${on}Duration`),l=Wi(o,i),a=r(`${or}Delay`),c=r(`${or}Duration`),d=Wi(a,c);let p=null,u=0,b=0;t===on?l>0&&(p=on,u=l,b=i.length):t===or?d>0&&(p=or,u=d,b=c.length):(u=Math.max(l,d),p=u>0?l>d?on:or:null,b=p?p===on?i.length:c.length:0);const m=p===on&&/\b(?:transform|all)(?:,|$)/.test(r(`${on}Property`).toString());return{type:p,timeout:u,propCount:b,hasTransform:m}}function Wi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Yi(n)+Yi(e[r])))}function Yi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function As(e){return(e?e.ownerDocument:document).body.offsetHeight}function fp(e,t,n){const r=e[Yn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const go=Symbol("_vod"),di=Symbol("_vsh"),Jo={name:"show",beforeMount(e,{value:t},{transition:n}){e[go]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):sr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),sr(e,!0),r.enter(e)):r.leave(e,()=>{sr(e,!1)}):sr(e,t))},beforeUnmount(e,{value:t}){sr(e,t)}};function sr(e,t){e.style.display=t?e[go]:"none",e[di]=!t}const mp=Symbol(""),bp=/(?:^|;)\s*display\s*:/;function xp(e,t,n){const r=e.style,o=We(n);let i=!1;if(n&&!o){if(t)if(We(t))for(const l of t.split(";")){const a=l.slice(0,l.indexOf(":")).trim();n[a]==null&&pr(r,a,"")}else for(const l in t)n[l]==null&&pr(r,l,"");for(const l in n){l==="display"&&(i=!0);const a=n[l];a!=null?hp(e,l,!We(t)&&t?t[l]:void 0,a)||pr(r,l,a):pr(r,l,"")}}else if(o){if(t!==n){const l=r[mp];l&&(n+=";"+l),r.cssText=n,i=bp.test(n)}}else t&&e.removeAttribute("style");go in e&&((!o||t!==n)&&(e[go]=i?r.display:""),e[di]&&(r.display="none"))}const Ur=/\s*!important$/;function pr(e,t,n){if(ke(n))n.forEach(r=>pr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))Ur.test(n)?e.setProperty(t,n.replace(Ur,""),"important"):e.setProperty(t,n);else{const r=gp(e,t);Ur.test(n)?e.setProperty(hn(r),n.replace(Ur,""),"important"):e[r]=n}}const Ki=["Webkit","Moz","ms"],es={};function gp(e,t){const n=es[t];if(n)return n;let r=vt(t);if(r!=="filter"&&r in e)return es[t]=r;r=Co(r);for(let o=0;o<Ki.length;o++){const i=Ki[o]+r;if(i in e)return es[t]=i}return t}function hp(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&We(r)&&n===r}const Zi="http://www.w3.org/1999/xlink";function Qi(e,t,n,r,o,i=Md(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Zi,t.slice(6,t.length)):e.setAttributeNS(Zi,t,n):n==null||i&&!tl(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Pt(n)?String(n):n)}function Ji(e,t,n,r,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?uc(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=tl(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(o||t)}function Vn(e,t,n,r){e.addEventListener(t,n,r)}function vp(e,t,n,r){e.removeEventListener(t,n,r)}const ea=Symbol("_vei");function yp(e,t,n,r,o=null){const i=e[ea]||(e[ea]={}),l=i[t];if(r&&l)l.value=r;else{const[a,c]=zp(t);if(r){const d=i[t]=Sp(r,o);Vn(e,a,d,c)}else l&&(vp(e,a,l,c),i[t]=void 0)}}const wp=/(Once|Passive|Capture)$/,kp=/^on:?(?:Once|Passive|Capture)$/;function zp(e){let t,n;for(;(n=e.match(wp))&&!kp.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):hn(e.slice(2)),t]}let ts=0;const _p=Promise.resolve(),Cp=()=>ts||(_p.then(()=>ts=0),ts=Date.now());function Sp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const o=n.value;if(ke(o)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const l=o.slice(),a=[r];for(let c=0;c<l.length&&!r._stopped;c++){const d=l[c];d&&It(d,t,5,a)}}else It(o,t,5,[r])};return n.value=e,n.attached=Cp(),n}const ta=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Mp=(e,t,n,r,o,i)=>{const l=o==="svg";t==="class"?fp(e,r,l):t==="style"?xp(e,n,r):ko(t)?zo(t)||yp(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ip(e,t,r,l))?(Ji(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Qi(e,t,r,l,i,t!=="value")):e._isVueCE&&(Ap(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!We(r)))?Ji(e,vt(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Qi(e,t,r,l))};function Ip(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ta(t)&&Se(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return ta(t)&&We(n)?!1:t in e}function Ap(e,t){const n=e._def.props;if(!n)return!1;const r=vt(t);return Array.isArray(n)?n.some(o=>vt(o)===r):Object.keys(n).some(o=>vt(o)===r)}const xc=new WeakMap,gc=new WeakMap,ho=Symbol("_moveCb"),na=Symbol("_enterCb"),$s=new WeakMap,$p=e=>(delete e.props.mode,e),Pp=$p({name:"TransitionGroup",props:Qe({},fc,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Lo(),r=Pl();let o,i,l,a;const c=()=>(a===void 0&&(a=o.length>0&&Vp(o[0].el,n.vnode.el,ra(e))),a);return Dl(()=>{if($s.delete(n),!c()){o=[],l=void 0;return}const d=ra(e);o.forEach(Tp);const p=l&&Dp(l,n.vnode.el);l=void 0,o.forEach(b=>Rp(b,p));const u=o.filter(Ep);As(n.vnode.el),u.forEach(b=>{const m=b.el,h=m.style;Ft(m,d),h.transform=h.webkitTransform=h.transitionDuration="";const g=m[ho]=z=>{z&&z.target!==m||(!z||z.propertyName.endsWith("transform"))&&(m.removeEventListener("transitionend",g),m[ho]=null,cn(m,d))};m.addEventListener("transitionend",g)}),o=[]}),()=>{const d=De(e),p=mc(d);let u=d.tag||se;if(o=[],a=void 0,i)for(let b=0;b<i.length;b++){const m=i[b];m.el&&m.el instanceof Element&&!m.el[di]&&(o.push(m),xn(m,Mr(m,p,r,n)),xc.set(m,Vo(m.el)))}i=t.default?si(t.default()):[];for(let b=0;b<i.length;b++){const m=i[b];m.key!=null&&xn(m,Mr(m,p,r,n))}return o.length&&(l=Fp(n),$s.set(n,c)),k(u,null,i)}}}),hc=Pp;function Tp(e){const t=e.el;t[ho]&&t[ho](),t[na]&&t[na]()}function ra(e){return e.moveClass||`${e.name||"v"}-move`}function Rp(e,t){gc.set(e,Vo(e.el,t))}function Ep(e){const t=xc.get(e),n=gc.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const i=e.el,l=i.style,a=i.getBoundingClientRect();let c=1,d=1;return i.offsetWidth&&(c=a.width/i.offsetWidth),i.offsetHeight&&(d=a.height/i.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(d)||d===0)&&(d=1),Math.abs(c-1)<.01&&(c=1),Math.abs(d-1)<.01&&(d=1),l.transform=l.webkitTransform=`translate(${r/c}px,${o/d}px)`,l.transitionDuration="0s",e}}function Vo(e,t){const n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function Fp(e){let t;for(let n=e.parent;n;n=n.parent){const r=$s.get(n);if(r){const o=Lp(n.vnode.el,e.vnode.el);o&&(t||(t=[])).push(Qe(Vo(o),{item:o,willMove:r}))}}return t}function Lp(e,t){const n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function Dp(e,t){const n=e.find(r=>r.willMove()&&r.item.contains(t));return n&&Vo(n.item,n)}function Vp(e,t,n){const r=e.cloneNode(),o=e[Yn];o&&o.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(r);const{hasTransform:l}=bc(r);return i.removeChild(r),l}const oa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ke(t)?n=>Qr(t,n):t};function Op(e){e.target.composing=!0}function sa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const qr=Symbol("_assign"),Xr=Symbol("_initialValue");function ns(e,t,n){return t&&(e=e.trim()),n&&(e=Ys(e)),e}const Oo={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e.parentNode&&(e.type==="text"?e[Xr]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Xr]=e.defaultValue.replace(/\r\n?/g,`
`))),e[qr]=oa(o);const i=r||o.props&&o.props.type==="number";Vn(e,t?"change":"input",l=>{l.target.composing||e[qr](ns(e.value,n,i))}),(n||i)&&Vn(e,"change",()=>{e.value=ns(e.value,n,i)}),t||(Vn(e,"compositionstart",Op),Vn(e,"compositionend",sa),Vn(e,"change",sa))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const o=t??"",i=e[Xr];delete e[Xr],i!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==i?e[qr](ns(e.value,n,r)):e.value=o},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:o,number:i}},l){if(e[qr]=oa(l),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?Ys(e.value):e.value,c=t??"";if(a===c)return;const d=e.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===e&&e.type!=="range"&&(r&&t===n||o&&e.value.trim()===c)||(e.value=c)}},Bp=["ctrl","shift","alt","meta"],jp={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Bp.some(n=>e[`${n}Key`]&&!t.includes(n))},yt=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((o,...i)=>{for(let l=0;l<t.length;l++){const a=jp[t[l]];if(a&&a(o,t))return}return e(o,...i)}))},Np={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ia=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(o=>{if(!("key"in o))return;const i=hn(o.key);if(t.some(l=>l===i||Np[l]===i))return e(o)}))},Hp=Qe({patchProp:Mp},cp);let aa;function Gp(){return aa||(aa=Gu(Hp))}const Up=((...e)=>{const t=Gp().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=Xp(r);if(!o)return;const i=t._component;!Se(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const l=n(o,!1,qp(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},t});function qp(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Xp(e){return We(e)?document.querySelector(e):e}/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=({size:e,strokeWidth:t=2,absoluteStrokeWidth:n,color:r,iconNode:o,name:i,class:l,...a},{slots:c})=>Wn("svg",{...Wr,width:e||Wr.width,height:e||Wr.height,stroke:r||Wr.stroke,"stroke-width":n?Number(t)*24/Number(e):t,class:["lucide",`lucide-${Wp(i??"icon")}`],...a},[...o.map(d=>Wn(...d)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(e,t)=>(n,{slots:r})=>Wn(Yp,{...n,iconNode:t,name:e},r);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=de("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=de("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=de("ArrowUpIcon",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=de("AtSignIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=de("BadgeCheckIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=de("BellIcon",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=de("BookmarkIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=de("BotIcon",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=de("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=de("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=de("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=de("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=de("ChevronsLeftRightIcon",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=de("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=de("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=de("CircleHelpIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=de("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=de("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=de("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=de("CompassIcon",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=de("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=de("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=de("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=de("EllipsisIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=de("EyeOffIcon",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=de("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=de("FileTextIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=de("FilmIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=de("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=de("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=de("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=de("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=de("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=de("InfoIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=de("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=de("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=de("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=de("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=de("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=de("PaletteIcon",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=de("PaperclipIcon",[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=de("PinIcon",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=de("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=de("RepeatIcon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=de("RocketIcon",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=de("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=de("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=de("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=de("SettingsIcon",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=de("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=de("ShieldIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=de("SlidersHorizontalIcon",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=de("SlidersVerticalIcon",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=de("SmilePlusIcon",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=de("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=de("SquareIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=de("StarIcon",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=de("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=de("TagIcon",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=de("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=de("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=de("TrendingDownIcon",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=de("TrendingUpIcon",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=de("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=de("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=de("WrenchIcon",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=de("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=de("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),_0=ee({__name:"ThemeToggle",setup(e){const t=P(!0);function n(){t.value=!t.value,t.value?(document.documentElement.classList.add("dark"),localStorage.setItem("aura-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("aura-theme","light"))}return Pe(()=>{const r=localStorage.getItem("aura-theme");r?t.value=r==="dark":t.value=window.matchMedia("(prefers-color-scheme: dark)").matches,t.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),(r,o)=>(f(),x("button",{type:"button",class:"relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"切换亮色 / 暗色模式",onClick:n},[t.value?(f(),me(I(v0),{key:0,class:"h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400"})):(f(),me(I(l0),{key:1,class:"h-4 w-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-indigo-600"}))]))}}),Fs=[{id:"forms-inputs",name:"表单与高阶输入套件",englishName:"Forms & Advanced Inputs",description:"Figma 拖拽数值微调、实时密码学强度仪表盘、金融级自适应金额与智能体 @ 呼出输入框",badgeColor:"text-amber-500 bg-amber-500/10 border-amber-500/20",iconName:"Sliders"},{id:"tactile-actions",name:"触觉反馈与原子操作套件",englishName:"Tactile & Actions Suite",description:"长按蓄力物理确认、原地渐变二次确认、物理微压与矢量形变操作矩阵",badgeColor:"text-rose-500 bg-rose-500/10 border-rose-500/20",iconName:"Zap"},{id:"ai-native",name:"AI 原生与智能体套件",englishName:"AI & Agent Suite",description:"面向大模型工作流、思考链路、代码终端与指令交互的原生动效矩阵",badgeColor:"text-sky-500 bg-sky-500/10 border-sky-500/20",iconName:"Bot"},{id:"interactive-nav",name:"交互与高阶导航套件",englishName:"Interactive & Navigation",description:"以余弦物理、流体胶囊指示器与视口裁切驱动的极佳手感交互",badgeColor:"text-blue-500 bg-blue-500/10 border-blue-500/20",iconName:"Compass"},{id:"space-3d",name:"空间与 3D 纵深套件",englishName:"3D Space & Atmosphere",description:"同心公转轨道、赛博网格、极光破晓天灯与粒子微光氛围",badgeColor:"text-indigo-500 bg-indigo-500/10 border-indigo-500/20",iconName:"Globe"},{id:"borders-cards",name:"流光卡片与微光边框套件",englishName:"Borders & Bento Cards",description:"沿着圆角边框流动的渐变光束与多维信息科技网格便当盒",badgeColor:"text-purple-500 bg-purple-500/10 border-purple-500/20",iconName:"Layers"},{id:"kinetic-typography",name:"文字与动态排版套件",englishName:"Kinetic Typography",description:"连续金属扫光、平滑毫秒数值翻滚与无限无缝平滑跑马灯",badgeColor:"text-emerald-500 bg-emerald-500/10 border-emerald-500/20",iconName:"Sparkles"}],pn=[{id:"border-beam",name:"BorderBeam",title:"Border Beam（跑马流光渐变边框）",category:"Effect",suiteId:"borders-cards",description:"沿着容器圆角边框匀速流动的彩色流光光束。大模型生成状态、VIP 特权卡片、核心功能高亮的科技感标配。",componentFilename:"BorderBeam.vue",componentCode:`<script setup lang="ts">
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
</template>`,propsList:[{name:"steps",type:"StepItem[]",default:"[]",description:"步骤信息数组"},{name:"currentStep",type:"number",default:"1",description:"当前进行中的步骤号 (从 1 起)"},{name:"clickable",type:"boolean",default:"true",description:"是否允许点击节点快速跳转"}]},{id:"comparison-matrix",name:"Comparison Matrix",title:"特性对比矩阵动态表格（Pricing & Feature Comparison Matrix）",category:"Layout",suiteId:"borders-cards",description:"多层级 SaaS 方案对比矩阵。点击套餐卡片即可切换高亮选中（支持 v-model），集成选中方案浮起与多层发光阴影、整行悬停高亮追踪、弹性微动效对勾与减号状态呈现。",componentFilename:"ComparisonMatrix.vue",componentCode:`<script setup lang="ts">
import { ref, watch } from 'vue'
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
  modelValue?: string
  class?: string
}

const props = defineProps<ComparisonMatrixProps>()

const emit = defineEmits<{
  (e: 'update:modelValue', planId: string): void
  (e: 'selectPlan', planId: string): void
}>()

// 当前选中的套餐：未绑定 v-model 时默认选中 popular 套餐，组件内部自行维护
const selectedId = ref(props.modelValue ?? props.plans.find((p) => p.popular)?.id)

watch(
  () => props.modelValue,
  (val) => {
    if (val !== undefined) selectedId.value = val
  }
)

function selectPlan(planId: string) {
  selectedId.value = planId
  emit('update:modelValue', planId)
  emit('selectPlan', planId)
}
<\/script>

<template>
  <div :class="cn('w-full overflow-x-auto select-none', props.class)">
    <!-- pt-4 为溢出卡片顶部的推荐徽标预留空间，避免被横向滚动容器裁切 -->
    <div class="min-w-[640px] pt-4">
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
          @click="selectPlan(plan.id)"
          :class="[
            'relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300 cursor-pointer',
            plan.id === selectedId
              ? 'border-blue-600 ring-1 ring-blue-600 bg-blue-50/50 dark:border-blue-500 dark:ring-blue-500 dark:bg-blue-950/20 shadow-xl shadow-blue-500/10'
              : 'border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 shadow-xs',
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
            :aria-pressed="plan.id === selectedId"
            :class="[
              'mt-4 w-full rounded-xl py-2 text-xs font-bold transition-all duration-200 cursor-pointer outline-none focus:outline-none ring-0',
              plan.id === selectedId
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
import { ref } from 'vue'
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

const selectedPlan = ref('pro')
<\/script>

<template>
  <ComparisonMatrix v-model="selectedPlan" :plans="plans" :features="features" />
</template>`,propsList:[{name:"plans",type:"PlanTier[]",default:"[]",description:"套餐阶梯配置列表"},{name:"features",type:"FeatureItem[]",default:"[]",description:"特性条目与各套餐支持映射"},{name:"modelValue",type:"string",default:"popular 套餐 id",description:"当前选中的套餐 id，支持 v-model；点击套餐卡片切换高亮"}]},{id:"stat-card",name:"Stat Card",title:"SaaS 核心 KPI 动态度量卡片（SaaS Metric & KPI Stat Card）",category:"Cards",suiteId:"borders-cards",description:"复合型高阶度量卡片。内聚平滑计数器（AnimatedCounter）、环比涨跌幅徽标胶囊以及右下角嵌入式微型趋势面积图（Sparkline），悬停具备触感浮升。",componentFilename:"StatCard.vue",componentCode:`<script setup lang="ts">
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
      <button @click="close" class="px-4 py-2 text-sm rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium">确认保存</button>
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
</template>`,propsList:[{name:"items",type:"(DropdownItem | DropdownGroup)[]",default:"内置默认菜单项",description:"菜单分组与项配置，支持单选/多选/快捷键"},{name:"align",type:"'left' | 'right' | 'center'",default:"'left'",description:"下拉对齐基准"},{name:"triggerText",type:"string",default:"'Options'",description:"默认按钮文字"},{name:"width",type:"string",default:"'w-56'",description:"下拉框宽度 Tailwind 类"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用"}]},{id:"globe-3d",name:"Globe 3D",title:"Globe 3D（Canvas 交互式数字孪生旋转地球仪）",category:"Interactive",suiteId:"space-3d",description:"基于三维正射投影与 Canvas 2D 硬件加速的数字孪生地球仪。零重型 3D 引擎依赖，支持光标惯性旋转交互、大陆点阵疏密光斑、全球主要城市脉冲波纹坐标锚点与双向大圆飞线流光。",componentFilename:"Globe3D.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { cn } from '@/lib/utils'

export interface GlobeMarker {
  lat: number
  lng: number
  label?: string
  color?: string
}

export interface GlobeArc {
  from: [number, number] // [lat, lng]
  to: [number, number]
  color?: string
}

interface Globe3DProps {
  size?: number
  markers?: GlobeMarker[]
  arcs?: GlobeArc[]
  speed?: number
  class?: string
}

const props = withDefaults(defineProps<Globe3DProps>(), {
  size: 380,
  speed: 0.003,
  markers: () => [
    { lat: 39.9042, lng: 116.4074, label: '北京', color: '#10b981' },
    { lat: 31.2304, lng: 121.4737, label: '上海', color: '#3b82f6' },
    { lat: 37.7749, lng: -122.4194, label: '旧金山', color: '#8b5cf6' },
    { lat: 51.5074, lng: -0.1278, label: '伦敦', color: '#f59e0b' },
    { lat: 35.6762, lng: 139.6503, label: '东京', color: '#ec4899' },
    { lat: 1.3521, lng: 103.8198, label: '新加坡', color: '#06b6d4' },
    { lat: -33.8688, lng: 151.2093, label: '悉尼', color: '#f43f5e' },
  ],
  arcs: () => [
    { from: [39.9042, 116.4074], to: [37.7749, -122.4194], color: '#3b82f6' },
    { from: [31.2304, 121.4737], to: [51.5074, -0.1278], color: '#10b981' },
    { from: [35.6762, 139.6503], to: [1.3521, 103.8198], color: '#ec4899' },
  ],
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animId: number | null = null

// 旋转角度与惯性
let rotX = 0.25 // 俯仰角 (纬度旋转)
let rotY = 0 // 偏航角 (经度旋转)
let velX = 0
let velY = props.speed
let isDragging = false
let lastMouseX = 0
let lastMouseY = 0

// 大陆点阵数据（经纬度采样网格模拟陆地分布）
const landPoints: [number, number][] = []
function initLandPoints() {
  landPoints.length = 0
  // 简易陆地纬度-经度密度散列，呈现科技感点阵地球
  for (let lat = -80; lat <= 80; lat += 4.5) {
    const latRad = (lat * Math.PI) / 180
    const count = Math.max(12, Math.floor(64 * Math.cos(latRad)))
    for (let i = 0; i < count; i++) {
      const lng = -180 + (360 / count) * i
      // 科技感六边形疏密噪声遮罩
      const hash = Math.sin(lat * 12.9898 + lng * 78.233) * 43758.5453
      const val = hash - Math.floor(hash)
      if (val > 0.42) {
        landPoints.push([lat, lng])
      }
    }
  }
}

// 经纬度投影转三维笛卡尔坐标并进行球面旋转
function project(lat: number, lng: number, radius: number): { x: number; y: number; z: number; visible: boolean } {
  const phi = (lat * Math.PI) / 180
  const theta = ((lng + 180) * Math.PI) / 180 + rotY

  // 基础球面三维坐标
  let x = radius * Math.cos(phi) * Math.sin(theta)
  let y = -radius * Math.sin(phi)
  let z = radius * Math.cos(phi) * Math.cos(theta)

  // 绕 X 轴旋转 (俯仰)
  const cosRx = Math.cos(rotX)
  const sinRx = Math.sin(rotX)
  const yRot = y * cosRx - z * sinRx
  const zRot = y * sinRx + z * cosRx

  return {
    x,
    y: yRot,
    z: zRot,
    visible: zRot > -10, // 正投影前方可见
  }
}

function render() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  const width = canvas.width / dpr
  const height = canvas.height / dpr
  const cx = width / 2
  const cy = height / 2
  const radius = width * 0.4

  ctx.clearRect(0, 0, width, height)

  // 惯性平滑阻尼
  if (!isDragging) {
    rotY += velY
    rotX += velX
    velX *= 0.95
    if (Math.abs(velY) < Math.abs(props.speed)) {
      velY += (props.speed - velY) * 0.05
    } else {
      velY *= 0.98
    }
  }

  // 约束俯仰视角，防止翻转
  rotX = Math.max(-0.6, Math.min(0.6, rotX))

  // 1. 绘制地球背底球体渐变与大气发光环 (Atmospheric Halo)
  const isDark = document.documentElement.classList.contains('dark')
  
  // 外层大气发光光晕
  const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.85, cx, cy, radius * 1.25)
  glowGrad.addColorStop(0, isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.1)')
  glowGrad.addColorStop(0.6, isDark ? 'rgba(16, 185, 129, 0.06)' : 'rgba(16, 185, 129, 0.04)')
  glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.fillStyle = glowGrad
  ctx.beginPath()
  ctx.arc(cx, cy, radius * 1.25, 0, Math.PI * 2)
  ctx.fill()

  // 球体本体背景
  const globeGrad = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.3, radius * 0.1, cx, cy, radius)
  if (isDark) {
    globeGrad.addColorStop(0, 'rgba(30, 41, 59, 0.85)')
    globeGrad.addColorStop(0.7, 'rgba(15, 23, 42, 0.95)')
    globeGrad.addColorStop(1, 'rgba(2, 6, 23, 0.98)')
  } else {
    globeGrad.addColorStop(0, 'rgba(241, 245, 249, 0.9)')
    globeGrad.addColorStop(0.7, 'rgba(226, 232, 240, 0.95)')
    globeGrad.addColorStop(1, 'rgba(203, 213, 225, 0.98)')
  }
  ctx.save()
  ctx.beginPath()
  ctx.arc(cx, cy, radius, 0, Math.PI * 2)
  ctx.fillStyle = globeGrad
  ctx.fill()
  ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)'
  ctx.lineWidth = 1.5
  ctx.stroke()
  ctx.clip()

  // 2. 绘制经纬网格线 (Graticule lines)
  ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)'
  ctx.lineWidth = 1
  for (let lat = -60; lat <= 60; lat += 30) {
    ctx.beginPath()
    let first = true
    for (let lng = -180; lng <= 180; lng += 10) {
      const p = project(lat, lng, radius)
      if (p.visible) {
        const px = cx + p.x
        const py = cy + p.y
        if (first) {
          ctx.moveTo(px, py)
          first = false
        } else {
          ctx.lineTo(px, py)
        }
      } else {
        first = true
      }
    }
    ctx.stroke()
  }

  // 3. 绘制陆地点阵粒子
  for (let i = 0; i < landPoints.length; i++) {
    const [lat, lng] = landPoints[i]
    const p = project(lat, lng, radius)
    if (p.visible && p.z > 0) {
      const px = cx + p.x
      const py = cy + p.y
      // 深度感透明度衰减
      const alpha = Math.max(0.1, (p.z / radius) * 0.8)
      ctx.fillStyle = isDark
        ? \`rgba(148, 163, 184, \${alpha * 0.85})\`
        : \`rgba(71, 85, 105, \${alpha * 0.75})\`
      ctx.beginPath()
      ctx.arc(px, py, 1.2, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // 4. 绘制飞线流光 (Arcs)
  const now = Date.now() * 0.001
  props.arcs.forEach((arc) => {
    const p1 = project(arc.from[0], arc.from[1], radius)
    const p2 = project(arc.to[0], arc.to[1], radius)

    if (p1.visible || p2.visible) {
      const px1 = cx + p1.x
      const py1 = cy + p1.y
      const px2 = cx + p2.x
      const py2 = cy + p2.y

      // 拱起控制点形成三维圆弧
      const midX = (px1 + px2) / 2
      const midY = (py1 + py2) / 2
      const dist = Math.hypot(px2 - px1, py2 - py1)
      const ctrlY = midY - dist * 0.35

      ctx.beginPath()
      ctx.moveTo(px1, py1)
      ctx.quadraticCurveTo(midX, ctrlY, px2, py2)
      ctx.strokeStyle = arc.color || '#3b82f6'
      ctx.globalAlpha = 0.35
      ctx.lineWidth = 1.2
      ctx.stroke()

      // 流动光标粒子
      const t = (now * 0.6) % 1
      const invT = 1 - t
      const dotX = invT * invT * px1 + 2 * invT * t * midX + t * t * px2
      const dotY = invT * invT * py1 + 2 * invT * t * ctrlY + t * t * py2
      ctx.globalAlpha = 1
      ctx.fillStyle = arc.color || '#3b82f6'
      ctx.beginPath()
      ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2)
      ctx.fill()
    }
  })

  // 5. 绘制核心城市坐标锚点 (Markers)
  props.markers.forEach((marker) => {
    const p = project(marker.lat, marker.lng, radius)
    if (p.visible && p.z > 5) {
      const px = cx + p.x
      const py = cy + p.y
      const col = marker.color || '#10b981'

      // 脉冲波纹动画
      const pulseT = (now * 1.5) % 1
      ctx.globalAlpha = (1 - pulseT) * 0.6
      ctx.strokeStyle = col
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.arc(px, py, 3 + pulseT * 8, 0, Math.PI * 2)
      ctx.stroke()

      // 中心实心点
      ctx.globalAlpha = 1
      ctx.fillStyle = col
      ctx.beginPath()
      ctx.arc(px, py, 3, 0, Math.PI * 2)
      ctx.fill()

      // 城市标签文案
      if (marker.label && p.z > 25) {
        ctx.font = '10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(15, 23, 42, 0.85)'
        ctx.fillText(marker.label, px + 6, py + 3)
      }
    }
  })

  ctx.restore()
  ctx.globalAlpha = 1

  animId = requestAnimationFrame(render)
}

function handleMouseDown(e: MouseEvent) {
  isDragging = true
  lastMouseX = e.clientX
  lastMouseY = e.clientY
  velX = 0
  velY = 0
}

function handleMouseMove(e: MouseEvent) {
  if (!isDragging) return
  const dx = e.clientX - lastMouseX
  const dy = e.clientY - lastMouseY
  lastMouseX = e.clientX
  lastMouseY = e.clientY

  velY = dx * 0.005
  velX = -dy * 0.005
  rotY += velY
  rotX += velX
}

function handleMouseUp() {
  isDragging = false
}

function resizeCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  canvas.width = props.size * dpr
  canvas.height = props.size * dpr
  const ctx = canvas.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)
}

onMounted(() => {
  initLandPoints()
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
  animId = requestAnimationFrame(render)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
})

watch(() => props.size, resizeCanvas)
<\/script>

<template>
  <div
    :class="cn('relative inline-flex items-center justify-center select-none cursor-grab active:cursor-grabbing', props.class)"
    :style="{ width: \`\${props.size}px\`, height: \`\${props.size}px\` }"
    @mousedown="handleMouseDown"
  >
    <canvas
      ref="canvasRef"
      :style="{ width: \`\${props.size}px\`, height: \`\${props.size}px\` }"
      class="block pointer-events-auto"
    />
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import Globe3D from '@/components/ui/Globe3D.vue'

const markers = [
  { lat: 39.9042, lng: 116.4074, label: '北京', color: '#10b981' },
  { lat: 37.7749, lng: -122.4194, label: '旧金山', color: '#8b5cf6' },
  { lat: 51.5074, lng: -0.1278, label: '伦敦', color: '#f59e0b' },
]

const arcs = [
  { from: [39.9042, 116.4074], to: [37.7749, -122.4194], color: '#3b82f6' },
]
<\/script>

<template>
  <div class="flex items-center justify-center p-8">
    <Globe3D :size="360" :markers="markers" :arcs="arcs" />
  </div>
</template>`,propsList:[{name:"size",type:"number",default:"380",description:"地球仪直径尺寸 (px)"},{name:"speed",type:"number",default:"0.003",description:"自转角速度"},{name:"markers",type:"GlobeMarker[]",default:"内置全球核心城市",description:"经纬度脉冲锚点列表"},{name:"arcs",type:"GlobeArc[]",default:"内置跨洋流光飞线",description:"两点间三维大圆流光飞线"}]},{id:"vortex",name:"Vortex",title:"Vortex（引力涡旋时空曲率粒子背景）",category:"Background",suiteId:"space-3d",description:"对标前沿黑洞涡旋粒子流场。基于向心引力场与角速度衰减方程，粒子在深邃时空涡旋中旋转流动并呈现微光拖尾，支持鼠标引力场中心实时位移交互。",componentFilename:"Vortex.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface VortexProps {
  particleCount?: number
  rangeY?: number
  baseSpeed?: number
  baseRadius?: number
  rangeRadius?: number
  backgroundColor?: string
  particleColors?: string[]
  class?: string
  containerClass?: string
}

const props = withDefaults(defineProps<VortexProps>(), {
  particleCount: 280,
  rangeY: 100,
  baseSpeed: 0.15,
  baseRadius: 1,
  rangeRadius: 2,
  backgroundColor: 'transparent',
  particleColors: () => ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'],
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
let animId: number | null = null

interface Particle {
  x: number
  y: number
  radius: number
  angle: number
  distance: number
  speed: number
  color: string
  opacity: number
}

const particles: Particle[] = []
let mouseX = 0
let mouseY = 0
let targetMouseX = 0
let targetMouseY = 0

function initParticles(w: number, h: number) {
  particles.length = 0
  const maxDist = Math.hypot(w / 2, h / 2) * 1.1

  for (let i = 0; i < props.particleCount; i++) {
    const angle = Math.random() * Math.PI * 2
    const distance = Math.random() * maxDist
    const speed = (props.baseSpeed + Math.random() * 0.4) * (0.8 + 80 / (distance + 60))
    const color = props.particleColors[Math.floor(Math.random() * props.particleColors.length)]

    particles.push({
      x: 0,
      y: 0,
      radius: props.baseRadius + Math.random() * props.rangeRadius,
      angle,
      distance,
      speed,
      color,
      opacity: 0.1 + Math.random() * 0.8,
    })
  }
}

function render() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  const w = canvas.width / dpr
  const h = canvas.height / dpr

  // 鼠标引力中心平滑插值
  mouseX += (targetMouseX - mouseX) * 0.05
  mouseY += (targetMouseY - mouseY) * 0.05
  const cx = w / 2 + (mouseX - w / 2) * 0.25
  const cy = h / 2 + (mouseY - h / 2) * 0.25

  // 拖尾半透明清除
  ctx.fillStyle = 'rgba(0, 0, 0, 0.12)'
  ctx.fillRect(0, 0, w, h)

  const maxDist = Math.hypot(w / 2, h / 2) * 1.1

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]

    // 经典开普勒轨道角速度衰减：越靠近中心角速度越快
    p.angle += (p.speed * 0.02)
    // 渐进向心引力收缩
    p.distance -= p.speed * 0.8

    // 触碰引力奇点中心后从外层重新喷发
    if (p.distance <= 10) {
      p.distance = maxDist * (0.8 + Math.random() * 0.2)
      p.angle = Math.random() * Math.PI * 2
    }

    const px = cx + Math.cos(p.angle) * p.distance
    const py = cy + Math.sin(p.angle) * p.distance

    // 绘制流光粒子
    ctx.save()
    ctx.beginPath()
    ctx.arc(px, py, p.radius, 0, Math.PI * 2)
    ctx.fillStyle = p.color
    ctx.globalAlpha = p.opacity * Math.min(1, p.distance / 120)
    ctx.shadowBlur = p.radius * 3
    ctx.shadowColor = p.color
    ctx.fill()
    ctx.restore()
  }

  animId = requestAnimationFrame(render)
}

function resize() {
  const container = containerRef.value
  const canvas = canvasRef.value
  if (!container || !canvas) return

  const dpr = window.devicePixelRatio || 1
  const rect = container.getBoundingClientRect()
  const w = rect.width || 600
  const h = rect.height || 400

  canvas.width = w * dpr
  canvas.height = h * dpr

  const ctx = canvas.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)

  targetMouseX = w / 2
  targetMouseY = h / 2
  mouseX = targetMouseX
  mouseY = targetMouseY

  initParticles(w, h)
}

function handleMouseMove(e: MouseEvent) {
  const container = containerRef.value
  if (!container) return
  const rect = container.getBoundingClientRect()
  targetMouseX = e.clientX - rect.left
  targetMouseY = e.clientY - rect.top
}

function handleMouseLeave() {
  const container = containerRef.value
  if (!container) return
  const rect = container.getBoundingClientRect()
  targetMouseX = rect.width / 2
  targetMouseY = rect.height / 2
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
  animId = requestAnimationFrame(render)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('resize', resize)
})
<\/script>

<template>
  <div
    ref="containerRef"
    :class="cn('relative h-full w-full overflow-hidden bg-black', props.containerClass)"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <canvas ref="canvasRef" class="absolute inset-0 h-full w-full pointer-events-none" />
    <div :class="cn('relative z-10', props.class)">
      <slot />
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import Vortex from '@/components/ui/Vortex.vue'
<\/script>

<template>
  <div class="h-96 w-full overflow-hidden rounded-2xl">
    <Vortex :particle-count="240" :base-speed="0.15" class="flex h-full flex-col items-center justify-center p-6 text-center">
      <h2 class="text-3xl font-black text-white">时空曲率引力涡旋</h2>
      <p class="mt-2 text-xs font-mono text-zinc-400">滑动鼠标扰动引力中心流场</p>
    </Vortex>
  </div>
</template>`,propsList:[{name:"particleCount",type:"number",default:"280",description:"涡旋旋转微粒总数"},{name:"baseSpeed",type:"number",default:"0.15",description:"向心引力基础角速度"},{name:"baseRadius",type:"number",default:"1",description:"粒子最小发光半径 (px)"},{name:"particleColors",type:"string[]",default:"['#38bdf8', '#818cf8', ...]",description:"粒子流光色彩调色板"}]},{id:"sparkles-core",name:"Sparkles Core",title:"Sparkles Core（星芒晶体闪烁粒子矩阵）",category:"Background",suiteId:"space-3d",description:"极细微星芒晶体闪烁粒子引擎。微型发光晶体在指定区域内随机上升漂浮、明暗呼吸，支持粒子密度、尺寸、色彩与升腾速度自由调节，可无缝嵌入任何标题或卡片底衬。",componentFilename:"SparklesCore.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { cn } from '@/lib/utils'

interface SparklesCoreProps {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  particleColor?: string
  speed?: number
  class?: string
}

const props = withDefaults(defineProps<SparklesCoreProps>(), {
  id: 'tsparticles',
  background: 'transparent',
  minSize: 0.6,
  maxSize: 1.8,
  particleDensity: 120,
  particleColor: '#FFFFFF',
  speed: 0.8,
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animId: number | null = null

interface SparkleParticle {
  x: number
  y: number
  size: number
  opacity: number
  targetOpacity: number
  speedX: number
  speedY: number
  color: string
}

const particles: SparkleParticle[] = []

function initParticles(w: number, h: number) {
  particles.length = 0
  const count = Math.floor((w * h) / (10000 / props.particleDensity))

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: props.minSize + Math.random() * (props.maxSize - props.minSize),
      opacity: Math.random(),
      targetOpacity: Math.random(),
      speedX: (Math.random() - 0.5) * 0.3 * props.speed,
      speedY: -(0.2 + Math.random() * 0.5) * props.speed, // 缓缓上升
      color: props.particleColor,
    })
  }
}

function render() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  const w = canvas.width / dpr
  const h = canvas.height / dpr

  ctx.clearRect(0, 0, w, h)

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]

    // 明暗呼吸插值
    p.opacity += (p.targetOpacity - p.opacity) * 0.03
    if (Math.abs(p.targetOpacity - p.opacity) < 0.05) {
      p.targetOpacity = Math.random()
    }

    // 位置位移
    p.x += p.speedX
    p.y += p.speedY

    // 边界循环再生
    if (p.y < 0) {
      p.y = h
      p.x = Math.random() * w
    }
    if (p.x < 0) p.x = w
    if (p.x > w) p.x = 0

    // 绘制闪烁星芒
    ctx.save()
    ctx.globalAlpha = p.opacity
    ctx.fillStyle = p.color
    ctx.shadowBlur = p.size * 2
    ctx.shadowColor = p.color
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  animId = requestAnimationFrame(render)
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const parent = canvas.parentElement
  if (!parent) return

  const dpr = window.devicePixelRatio || 1
  const w = parent.clientWidth || 300
  const h = parent.clientHeight || 200

  canvas.width = w * dpr
  canvas.height = h * dpr

  const ctx = canvas.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)

  initParticles(w, h)
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
  animId = requestAnimationFrame(render)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('resize', resize)
})

watch(() => [props.particleDensity, props.particleColor, props.speed], () => {
  resize()
})
<\/script>

<template>
  <div :class="cn('relative h-full w-full overflow-hidden', props.class)" :style="{ background: props.background }">
    <canvas ref="canvasRef" class="pointer-events-none absolute inset-0 h-full w-full" />
    <slot />
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import SparklesCore from '@/components/ui/SparklesCore.vue'
<\/script>

<template>
  <div class="relative h-64 w-full flex items-center justify-center bg-zinc-950 rounded-2xl overflow-hidden">
    <SparklesCore :particle-density="140" particle-color="#38bdf8" :speed="1" class="absolute inset-0" />
    <h1 class="relative z-10 text-4xl font-black text-white tracking-wider">AURA SPARKLES</h1>
  </div>
</template>`,propsList:[{name:"particleDensity",type:"number",default:"120",description:"单位空间内的粒子密度"},{name:"particleColor",type:"string",default:"'#FFFFFF'",description:"星芒发光颜色"},{name:"minSize",type:"number",default:"0.6",description:"粒子最小半径 (px)"},{name:"maxSize",type:"number",default:"1.8",description:"粒子最大半径 (px)"},{name:"speed",type:"number",default:"0.8",description:"粒子上升漂浮速率"}]},{id:"gravity-cards",name:"Gravity Cards",title:"Gravity Cards（重力与物理碰撞掉落卡片沙盒）",category:"Interactive",suiteId:"space-3d",description:"原生微型 2D 物理碰撞沙盒。基于数值积分实现重力加速度、地面摩擦弹性碰撞、刚体旋转阻尼与物体排斥。支持鼠标抓取卡片蓄力扔出，一键重置倾倒掉落。",componentFilename:"GravityCards.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

export interface GravityItem {
  id: string | number
  label: string
  icon?: string
  color?: string
}

interface GravityCardsProps {
  items?: GravityItem[]
  gravity?: number
  restitution?: number
  class?: string
}

const props = withDefaults(defineProps<GravityCardsProps>(), {
  gravity: 0.45,
  restitution: 0.55,
  items: () => [
    { id: '1', label: 'Vue 3.5+', icon: '⚡', color: '#10b981' },
    { id: '2', label: 'Tailwind CSS', icon: '🎨', color: '#06b6d4' },
    { id: '3', label: 'TypeScript', icon: '🔷', color: '#3b82f6' },
    { id: '4', label: 'Vite 6', icon: '🚀', color: '#8b5cf6' },
    { id: '5', label: 'Web Audio API', icon: '🔊', color: '#f59e0b' },
    { id: '6', label: 'Canvas 2D / 3D', icon: '🌌', color: '#ec4899' },
    { id: '7', label: 'Zero-Config SFC', icon: '📦', color: '#14b8a6' },
    { id: '8', label: '60fps 硬件加速', icon: '🏎️', color: '#f43f5e' },
  ],
})

const containerRef = ref<HTMLDivElement | null>(null)
let animId: number | null = null

interface BodyState {
  id: string | number
  label: string
  icon?: string
  color?: string
  x: number
  y: number
  vx: number
  vy: number
  width: number
  height: number
  angle: number
  vAngle: number
}

const bodies = ref<BodyState[]>([])
let draggedBody: BodyState | null = null
let dragOffsetX = 0
let dragOffsetY = 0
let lastDragX = 0
let lastDragY = 0

function initPhysics() {
  const container = containerRef.value
  if (!container) return
  const w = container.clientWidth || 600

  bodies.value = props.items.map((item, idx) => {
    const cardWidth = 140
    const cardHeight = 44
    const startX = 30 + ((idx * 110) % (w - cardWidth - 40))
    const startY = -40 - idx * 55

    return {
      id: item.id,
      label: item.label,
      icon: item.icon,
      color: item.color,
      x: startX,
      y: startY,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 2,
      width: cardWidth,
      height: cardHeight,
      angle: (Math.random() - 0.5) * 20,
      vAngle: (Math.random() - 0.5) * 1.5,
    }
  })
}

function updatePhysics() {
  const container = containerRef.value
  if (!container) return
  const boundW = container.clientWidth
  const boundH = container.clientHeight

  for (let i = 0; i < bodies.value.length; i++) {
    const b = bodies.value[i]

    if (draggedBody && draggedBody.id === b.id) {
      continue
    }

    // 1. 重力加速
    b.vy += props.gravity
    b.x += b.vx
    b.y += b.vy
    b.angle += b.vAngle

    // 旋转阻尼
    b.vAngle *= 0.96

    // 2. 地面碰撞反弹
    if (b.y + b.height >= boundH) {
      b.y = boundH - b.height
      b.vy = -b.vy * props.restitution
      b.vx *= 0.94 // 地面摩擦力
      b.vAngle = (b.vx * 0.4) // 摩擦引起角动量
      if (Math.abs(b.vy) < 0.6) b.vy = 0
    }

    // 3. 左右墙体反弹
    if (b.x <= 0) {
      b.x = 0
      b.vx = -b.vx * props.restitution
    } else if (b.x + b.width >= boundW) {
      b.x = boundW - b.width
      b.vx = -b.vx * props.restitution
    }

    // 4. 物体间简易 AABB 弹性分离排斥
    for (let j = i + 1; j < bodies.value.length; j++) {
      const other = bodies.value[j]
      const overlapX = (b.x + b.width / 2) - (other.x + other.width / 2)
      const overlapY = (b.y + b.height / 2) - (other.y + other.height / 2)
      const minDistX = (b.width + other.width) / 2
      const minDistY = (b.height + other.height) / 2

      if (Math.abs(overlapX) < minDistX && Math.abs(overlapY) < minDistY) {
        const dx = minDistX - Math.abs(overlapX)
        const dy = minDistY - Math.abs(overlapY)

        if (dx < dy) {
          const sign = overlapX > 0 ? 1 : -1
          b.x += (dx / 2) * sign
          other.x -= (dx / 2) * sign
          const tempVx = b.vx
          b.vx = other.vx * props.restitution
          other.vx = tempVx * props.restitution
        } else {
          const sign = overlapY > 0 ? 1 : -1
          b.y += (dy / 2) * sign
          other.y -= (dy / 2) * sign
          const tempVy = b.vy
          b.vy = other.vy * props.restitution
          other.vy = tempVy * props.restitution
        }
      }
    }
  }

  animId = requestAnimationFrame(updatePhysics)
}

function handleMouseDown(e: MouseEvent, body: BodyState) {
  draggedBody = body
  const container = containerRef.value
  if (!container) return
  const rect = container.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  dragOffsetX = mouseX - body.x
  dragOffsetY = mouseY - body.y
  lastDragX = mouseX
  lastDragY = mouseY
}

function handleMouseMove(e: MouseEvent) {
  if (!draggedBody || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  draggedBody.vx = (mouseX - lastDragX) * 0.8
  draggedBody.vy = (mouseY - lastDragY) * 0.8
  draggedBody.x = mouseX - dragOffsetX
  draggedBody.y = mouseY - dragOffsetY

  lastDragX = mouseX
  lastDragY = mouseY
}

function handleMouseUp() {
  draggedBody = null
}

function resetDrop() {
  initPhysics()
}

onMounted(() => {
  initPhysics()
  animId = requestAnimationFrame(updatePhysics)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
})
<\/script>

<template>
  <div
    ref="containerRef"
    :class="
      cn(
        'relative h-80 w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 backdrop-blur-sm select-none dark:border-zinc-800/80 dark:bg-zinc-950/70',
        props.class
      )
    "
  >
    <!-- 重置控制药丸 -->
    <button
      type="button"
      @click="resetDrop"
      class="absolute top-3 right-3 z-30 inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-zinc-600 shadow-xs backdrop-blur-md hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-all cursor-pointer active:scale-95"
    >
      <span>↻</span>
      <span>重新倾倒</span>
    </button>

    <!-- 提示引导文案 -->
    <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
      <span class="text-xs font-mono text-zinc-400/60 dark:text-zinc-600/60">
        抓起卡片扔出 · 体验刚体碰撞与重力弹跳
      </span>
    </div>

    <!-- 掉落刚体卡片元素 -->
    <div
      v-for="b in bodies"
      :key="b.id"
      :style="{
        transform: \`translate3d(\${b.x}px, \${b.y}px, 0) rotate(\${b.angle}deg)\`,
        width: \`\${b.width}px\`,
        height: \`\${b.height}px\`,
      }"
      @mousedown.stop="handleMouseDown($event, b)"
      class="absolute top-0 left-0 z-20 flex items-center gap-2 rounded-xl border border-zinc-200/90 bg-white/95 px-3 py-2 shadow-md backdrop-blur-xl transition-shadow cursor-grab active:cursor-grabbing active:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/95"
    >
      <span v-if="b.icon" class="text-base shrink-0">{{ b.icon }}</span>
      <span class="truncate text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        {{ b.label }}
      </span>
      <div
        v-if="b.color"
        class="ml-auto h-2 w-2 rounded-full shrink-0"
        :style="{ backgroundColor: b.color }"
      />
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import GravityCards from '@/components/ui/GravityCards.vue'

const techItems = [
  { id: '1', label: 'Vue 3.5+', icon: '⚡', color: '#10b981' },
  { id: '2', label: 'Tailwind CSS', icon: '🎨', color: '#06b6d4' },
  { id: '3', label: 'TypeScript', icon: '🔷', color: '#3b82f6' },
  { id: '4', label: 'Vite 6', icon: '🚀', color: '#8b5cf6' },
]
<\/script>

<template>
  <GravityCards :items="techItems" :gravity="0.45" :restitution="0.55" class="h-80" />
</template>`,propsList:[{name:"items",type:"GravityItem[]",default:"内置技术栈卡片",description:"参与物理仿真的卡片项目列表"},{name:"gravity",type:"number",default:"0.45",description:"重力加速度系数"},{name:"restitution",type:"number",default:"0.55",description:"弹性碰撞恢复系数 (0~1)"}]},{id:"perspective-grid",name:"Perspective Grid",title:"Perspective Grid（无限延伸动态地平线 3D 透视网格隧道）",category:"Background",suiteId:"space-3d",description:"极具赛博未来纵深感的 3D 透视网格地平线。采用 CSS 3D Perspective + 旋转投影，流光网格沿 Z 轴无限向前推进，顶部汇聚自然激光霞光消隐光晕与流光扫描线。",componentFilename:"PerspectiveGrid.vue",componentCode:`<script setup lang="ts">
import { cn } from '@/lib/utils'

interface PerspectiveGridProps {
  gridColor?: string
  horizonColor?: string
  speed?: number // 秒数周期
  class?: string
}

const props = withDefaults(defineProps<PerspectiveGridProps>(), {
  speed: 16,
})
<\/script>

<template>
  <div :class="cn('relative h-96 w-full overflow-hidden bg-zinc-950 flex flex-col items-center justify-center', props.class)">
    <!-- 顶部地平线光晕 -->
    <div
      class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-full max-w-4xl rounded-full bg-gradient-to-r from-blue-600/20 via-purple-500/30 to-emerald-500/20 blur-3xl pointer-events-none"
    />

    <!-- 地平线细微发光线 -->
    <div class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10" />

    <!-- 3D 透视地平网格容器 -->
    <div class="perspective-stage absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="grid-plane absolute inset-0"
        :style="{ animationDuration: \`\${props.speed}s\` }"
      />
    </div>

    <!-- 纵深渐变蒙版，遮蔽靠近顶部的部分 -->
    <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950 pointer-events-none z-10" />

    <!-- 内容插槽 -->
    <div class="relative z-20 text-center px-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.perspective-stage {
  perspective: 450px;
  transform-style: preserve-3d;
}

.grid-plane {
  width: 200%;
  height: 200%;
  left: -50%;
  top: 0%;
  background-image: 
    linear-gradient(to right, rgba(56, 189, 248, 0.22) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(56, 189, 248, 0.22) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: rotateX(72deg) translateZ(0);
  transform-origin: center top;
  animation: move-grid linear infinite;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 0) 100%);
}

@keyframes move-grid {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 500px;
  }
}
</style>
`,usageCode:`<script setup lang="ts">
import PerspectiveGrid from '@/components/ui/PerspectiveGrid.vue'
<\/script>

<template>
  <PerspectiveGrid :speed="16">
    <h2 class="text-4xl font-black text-white tracking-widest drop-shadow-lg">NEXT-GEN CYBER HORIZON</h2>
    <p class="mt-2 text-xs font-mono text-cyan-300">60fps 硬件加速无限向前推进</p>
  </PerspectiveGrid>
</template>`,propsList:[{name:"speed",type:"number",default:"16",description:"网格向前循环滚动的周期时间 (秒)"},{name:"gridColor",type:"string",default:"cyan-400",description:"透视网格线条主色调"},{name:"horizonColor",type:"string",default:"自适应极光",description:"地平线破晓霞光色彩"}]},{id:"fluid-cursor",name:"Fluid Cursor",title:"Fluid Cursor（流体微粒光标跟随与粘性拖尾）",category:"Interactive",suiteId:"space-3d",description:"高触感流体微粒跟随交互层。鼠标滑动时根据位移速度与动量激起平滑粘性微粒与流光水波拖尾，微粒具备自然发光、色彩呼吸与优雅淡出消融特性。",componentFilename:"FluidCursor.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface FluidCursorProps {
  colors?: string[]
  particleCount?: number
  trailLength?: number
  class?: string
}

const props = withDefaults(defineProps<FluidCursorProps>(), {
  colors: () => ['#3b82f6', '#60a5fa', '#93c5fd', '#38bdf8', '#818cf8'],
  particleCount: 2,
  trailLength: 20,
})

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
let animId: number | null = null

interface FluidPoint {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  alpha: number
  maxLife: number
  life: number
}

const points: FluidPoint[] = []
let lastX = 0
let lastY = 0

function handleMouseMove(e: MouseEvent) {
  const container = containerRef.value
  if (!container) return
  const rect = container.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  const dx = mouseX - lastX
  const dy = mouseY - lastY
  const speed = Math.hypot(dx, dy)

  // 移动越快，生成的微粒动量与半径越丰富
  for (let i = 0; i < props.particleCount; i++) {
    const angle = Math.random() * Math.PI * 2
    const spread = Math.random() * (speed * 0.2 + 2)
    const color = props.colors[Math.floor(Math.random() * props.colors.length)]

    points.push({
      x: mouseX + Math.cos(angle) * spread,
      y: mouseY + Math.sin(angle) * spread,
      vx: (Math.random() - 0.5) * 1.5 - dx * 0.05,
      vy: (Math.random() - 0.5) * 1.5 - dy * 0.05,
      size: 4 + Math.random() * 8 + Math.min(speed * 0.25, 12),
      color,
      alpha: 0.65,
      maxLife: 35 + Math.random() * 20,
      life: 0,
    })
  }

  lastX = mouseX
  lastY = mouseY
}

function render() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  const w = canvas.width / dpr
  const h = canvas.height / dpr

  ctx.clearRect(0, 0, w, h)

  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i]
    p.life++
    p.x += p.vx
    p.y += p.vy
    p.vx *= 0.96
    p.vy *= 0.96

    const progress = p.life / p.maxLife
    const currentAlpha = p.alpha * (1 - progress)
    const currentSize = p.size * (1 + progress * 0.6)

    if (progress >= 1) {
      points.splice(i, 1)
      continue
    }

    ctx.save()
    ctx.globalAlpha = currentAlpha
    ctx.fillStyle = p.color
    ctx.shadowBlur = currentSize * 2
    ctx.shadowColor = p.color
    ctx.beginPath()
    ctx.arc(p.x, p.y, Math.max(0.5, currentSize), 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  animId = requestAnimationFrame(render)
}

function resize() {
  const container = containerRef.value
  const canvas = canvasRef.value
  if (!container || !canvas) return

  const dpr = window.devicePixelRatio || 1
  const rect = container.getBoundingClientRect()
  const w = rect.width || 400
  const h = rect.height || 300

  canvas.width = w * dpr
  canvas.height = h * dpr

  const ctx = canvas.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
  animId = requestAnimationFrame(render)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('resize', resize)
})
<\/script>

<template>
  <div
    ref="containerRef"
    :class="cn('relative h-full w-full overflow-hidden select-none', props.class)"
    @mousemove="handleMouseMove"
  >
    <canvas ref="canvasRef" class="pointer-events-none absolute inset-0 z-20 h-full w-full" />
    <slot />
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import FluidCursor from '@/components/ui/FluidCursor.vue'
<\/script>

<template>
  <div class="h-72 w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800">
    <FluidCursor class="flex h-full items-center justify-center p-6 text-center">
      <div class="space-y-2 pointer-events-none">
        <h3 class="text-xl font-bold text-white">流体微粒光标跟随</h3>
        <p class="text-xs text-zinc-400 font-mono">在容器内移动鼠标感受粘性流光拖尾</p>
      </div>
    </FluidCursor>
  </div>
</template>`,propsList:[{name:"colors",type:"string[]",default:"['#3b82f6', '#60a5fa', ...]",description:"光标微粒色彩调色板"},{name:"particleCount",type:"number",default:"2",description:"每帧光标位移生成的微粒密度"},{name:"trailLength",type:"number",default:"20",description:"微粒拖尾消融生命周期"}]},{id:"text-generate-effect",name:"Text Generate Effect",title:"Text Generate Effect（逐词平滑高斯解冻流式生成）",category:"Text",suiteId:"kinetic-typography",description:"文本单元逐字由模糊与透明度向清晰解冻聚焦。如同 AI 思维流自然涌现，具备 Stagger 错峰延迟与贝塞尔平滑缓动，支持随时重播触发。",componentFilename:"TextGenerateEffect.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { cn } from '@/lib/utils'

interface TextGenerateEffectProps {
  words: string
  duration?: number
  delay?: number
  class?: string
}

const props = withDefaults(defineProps<TextGenerateEffectProps>(), {
  words: 'Vue 3 高阶动效原子代码库，无需复杂配置，单文件直接粘贴即用。',
  duration: 0.5,
  delay: 0.06,
})

const displayedTokens = ref<{ text: string; visible: boolean }[]>([])

function triggerAnimation() {
  // 中英文混合拆分：英文字词按空格，中文按单字拆分
  const raw = props.words
  const tokens: string[] = []
  
  let currentEnWord = ''
  for (let i = 0; i < raw.length; i++) {
    const char = raw[i]
    if (/[a-zA-Z0-9_\\-+]/.test(char)) {
      currentEnWord += char
    } else {
      if (currentEnWord) {
        tokens.push(currentEnWord)
        currentEnWord = ''
      }
      tokens.push(char)
    }
  }
  if (currentEnWord) tokens.push(currentEnWord)

  displayedTokens.value = tokens.map((t) => ({ text: t, visible: false }))

  tokens.forEach((_, idx) => {
    setTimeout(() => {
      if (displayedTokens.value[idx]) {
        displayedTokens.value[idx].visible = true
      }
    }, idx * (props.delay * 1000))
  })
}

onMounted(() => {
  triggerAnimation()
})

watch(() => props.words, () => {
  triggerAnimation()
})

defineExpose({
  replay: triggerAnimation,
})
<\/script>

<template>
  <div :class="cn('font-sans font-bold leading-relaxed tracking-wide select-none', props.class)">
    <span
      v-for="(token, idx) in displayedTokens"
      :key="idx"
      class="inline-block transition-all ease-out"
      :style="{
        transitionDuration: \`\${props.duration}s\`,
        opacity: token.visible ? 1 : 0,
        filter: token.visible ? 'blur(0px)' : 'blur(8px)',
        transform: token.visible ? 'translateY(0)' : 'translateY(6px)',
      }"
      :class="[
        token.text === ' ' ? 'w-1.5' : '',
        'text-zinc-900 dark:text-white',
      ]"
    >
      {{ token.text }}
    </span>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import TextGenerateEffect from '@/components/ui/TextGenerateEffect.vue'
<\/script>

<template>
  <div class="max-w-xl p-6">
    <TextGenerateEffect
      words="Aura UI 是专为 Vue 3 打造的高阶动效原子代码库，Zero-Config 单文件即拷即用。"
      :duration="0.5"
      :delay="0.05"
      class="text-2xl font-bold"
    />
  </div>
</template>`,propsList:[{name:"words",type:"string",default:"默认长文本",description:"需要执行流式生成动画的文本字符串"},{name:"duration",type:"number",default:"0.5",description:"单字解冻过渡时长 (秒)"},{name:"delay",type:"number",default:"0.06",description:"相邻字词错峰播放延迟 (秒)"}]},{id:"word-rotate",name:"Word Rotate",title:"Word Rotate（核心关键词 3D 纵深翻转轮播）",category:"Text",suiteId:"kinetic-typography",description:"SaaS 营销页 Hero 标题高频利器。在固定主谓宾句式中，核心关键词沿 3D X 轴带弹簧阻尼纵深翻转循环交替，支持流光渐变与自定义轮播间隔。",componentFilename:"WordRotate.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface WordRotateProps {
  words: string[]
  duration?: number // 毫秒间隔
  class?: string
}

const props = withDefaults(defineProps<WordRotateProps>(), {
  words: () => ['极速流畅', '原生优雅', '工业质感', '开箱即用', '零黑盒依赖'],
  duration: 2500,
})

const currentIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function nextWord() {
  currentIndex.value = (currentIndex.value + 1) % props.words.length
}

onMounted(() => {
  timer = setInterval(nextWord, props.duration)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
<\/script>

<template>
  <div class="inline-block overflow-hidden py-1 align-baseline">
    <transition name="word-flip" mode="out-in">
      <span
        :key="currentIndex"
        :class="
          cn(
            'inline-block font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400',
            props.class
          )
        "
      >
        {{ props.words[currentIndex] }}
      </span>
    </transition>
  </div>
</template>

<style scoped>
.word-flip-enter-active,
.word-flip-leave-active {
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
  transform-style: preserve-3d;
}

.word-flip-enter-from {
  opacity: 0;
  transform: translateY(100%) rotateX(-90deg);
}

.word-flip-leave-to {
  opacity: 0;
  transform: translateY(-100%) rotateX(90deg);
}
</style>
`,usageCode:`<script setup lang="ts">
import WordRotate from '@/components/ui/WordRotate.vue'

const words = ['极速流畅', '原生优雅', '工业质感', '开箱即用', '零黑盒依赖']
<\/script>

<template>
  <div class="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white flex items-center gap-2">
    <span>让你的网站体验</span>
    <WordRotate :words="words" :duration="2200" />
  </div>
</template>`,propsList:[{name:"words",type:"string[]",default:"['极速流畅', '原生优雅', ...]",description:"轮播切换的关键词数组"},{name:"duration",type:"number",default:"2500",description:"每个词停留的轮播间隔时间 (ms)"}]},{id:"flip-words",name:"Flip Words",title:"Flip Words（流体多词交替字母级翻牌动效）",category:"Text",suiteId:"kinetic-typography",description:"逐字字母级 3D 翻动进入与移出。模拟机械翻牌屏与现代 Keynote 演示风格，字母错峰飞入并带有细微高斯虚化与缩放弹簧阻尼。",componentFilename:"FlipWords.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface FlipWordsProps {
  words: string[]
  duration?: number
  class?: string
}

const props = withDefaults(defineProps<FlipWordsProps>(), {
  words: () => ['高性能', '更美观', '更直觉', '零配置'],
  duration: 3000,
})

const currentIndex = ref(0)
const isVisible = ref(true)
let timer: ReturnType<typeof setInterval> | null = null

function cycleWords() {
  isVisible.value = false
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % props.words.length
    isVisible.value = true
  }, 450)
}

onMounted(() => {
  timer = setInterval(cycleWords, props.duration)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
<\/script>

<template>
  <span class="inline-block relative overflow-hidden py-1">
    <span
      v-for="(letter, i) in props.words[currentIndex].split('')"
      :key="\`\${currentIndex}-\${i}\`"
      class="inline-block transition-all"
      :style="{
        transitionDuration: '0.4s',
        transitionDelay: \`\${i * 0.04}s\`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)',
        filter: isVisible ? 'blur(0px)' : 'blur(4px)',
      }"
      :class="
        cn(
          'font-extrabold text-neutral-900 dark:text-neutral-100',
          props.class
        )
      "
    >
      {{ letter }}
    </span>
  </span>
</template>
`,usageCode:`<script setup lang="ts">
import FlipWords from '@/components/ui/FlipWords.vue'

const words = ['高性能', '更美观', '更直觉', '零配置']
<\/script>

<template>
  <div class="text-3xl font-extrabold text-zinc-800 dark:text-zinc-200">
    打造 <FlipWords :words="words" :duration="2800" class="text-emerald-500 dark:text-emerald-400" /> 的产品界面
  </div>
</template>`,propsList:[{name:"words",type:"string[]",default:"['高性能', '更美观', ...]",description:"多词交替轮播序列"},{name:"duration",type:"number",default:"3000",description:"每个词停留的持续时间 (ms)"}]},{id:"hyper-text",name:"Hyper Text",title:"Hyper Text（黑客帝国/赛博乱码解密乱序字符变换文字）",category:"Text",suiteId:"kinetic-typography",description:"黑客与赛博控制台解密文字特效。高频随机字符在毫秒内闪烁迭代，随后自左向右依次收敛并锁定为真实明文，支持光标悬停重新触发解密。",componentFilename:"HyperText.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { cn } from '@/lib/utils'

interface HyperTextProps {
  text: string
  duration?: number
  class?: string
  triggerOnHover?: boolean
}

const props = withDefaults(defineProps<HyperTextProps>(), {
  text: 'AURA_DECRYPT_V1',
  duration: 800,
  triggerOnHover: true,
})

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
const displayText = ref(props.text)
let animTimer: ReturnType<typeof setInterval> | null = null

function scramble() {
  if (animTimer) clearInterval(animTimer)

  const original = props.text
  let iteration = 0
  const maxIterations = original.length

  const stepTime = Math.max(25, props.duration / (maxIterations * 2))

  animTimer = setInterval(() => {
    displayText.value = original
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' '
        if (index < iteration) {
          return original[index]
        }
        return alphabets[Math.floor(Math.random() * alphabets.length)]
      })
      .join('')

    if (iteration >= maxIterations) {
      if (animTimer) clearInterval(animTimer)
      displayText.value = original
    }

    iteration += 1 / 2
  }, stepTime)
}

function handleMouseEnter() {
  if (props.triggerOnHover) {
    scramble()
  }
}

onMounted(() => {
  scramble()
})

watch(() => props.text, () => {
  scramble()
})

defineExpose({
  trigger: scramble,
})
<\/script>

<template>
  <span
    :class="
      cn(
        'inline-block font-mono font-bold tracking-wider select-none cursor-pointer transition-colors',
        'text-zinc-900 dark:text-zinc-100 hover:text-emerald-500 dark:hover:text-emerald-400',
        props.class
      )
    "
    @mouseenter="handleMouseEnter"
  >
    {{ displayText }}
  </span>
</template>
`,usageCode:`<script setup lang="ts">
import HyperText from '@/components/ui/HyperText.vue'
<\/script>

<template>
  <div class="p-6">
    <HyperText text="AURA_PROTOCOL_ACTIVE" :duration="800" class="text-3xl text-emerald-500 font-mono" />
  </div>
</template>`,propsList:[{name:"text",type:"string",default:"'AURA_DECRYPT_V1'",description:"最终解密还原的目标明文字符串"},{name:"duration",type:"number",default:"800",description:"完整解密动画周期时长 (ms)"},{name:"triggerOnHover",type:"boolean",default:"true",description:"是否在鼠标悬停时自动重新触发解密"}]},{id:"gradual-spacing",name:"Gradual Spacing",title:"Gradual Spacing（字间距弹性凝聚与扩散渐变文字）",category:"Text",suiteId:"kinetic-typography",description:"电影片头级字距凝聚动画。文字从极大重叠字距与高斯模糊状态，经由阶梯时间差向标准设计排版聚拢，极具大片级仪式感与品牌视觉张力。",componentFilename:"GradualSpacing.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { cn } from '@/lib/utils'

interface GradualSpacingProps {
  text: string
  duration?: number
  delayMultiple?: number
  class?: string
}

const props = withDefaults(defineProps<GradualSpacingProps>(), {
  text: 'AURA MOTION SYSTEM',
  duration: 0.5,
  delayMultiple: 0.04,
})

const isAnimated = ref(false)

function trigger() {
  isAnimated.value = false
  setTimeout(() => {
    isAnimated.value = true
  }, 50)
}

onMounted(() => {
  trigger()
})

watch(() => props.text, trigger)

defineExpose({
  replay: trigger,
})
<\/script>

<template>
  <div class="flex justify-center space-x-1 select-none">
    <span
      v-for="(char, i) in props.text.split('')"
      :key="i"
      class="inline-block transition-all"
      :style="{
        transitionDuration: \`\${props.duration}s\`,
        transitionDelay: \`\${i * props.delayMultiple}s\`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isAnimated ? 1 : 0,
        filter: isAnimated ? 'blur(0px)' : 'blur(10px)',
        transform: isAnimated ? 'translate3d(0, 0, 0)' : 'translate3d(-20px, 0, 0)',
        letterSpacing: isAnimated ? 'normal' : '-0.5em',
      }"
      :class="
        cn(
          'font-extrabold tracking-tight text-zinc-900 dark:text-white',
          props.class
        )
      "
    >
      {{ char === ' ' ? '&nbsp;' : char }}
    </span>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import GradualSpacing from '@/components/ui/GradualSpacing.vue'
<\/script>

<template>
  <div class="p-8 text-center">
    <GradualSpacing text="AURA MOTION SYSTEM" :duration="0.5" class="text-4xl font-black" />
  </div>
</template>`,propsList:[{name:"text",type:"string",default:"'AURA MOTION SYSTEM'",description:"用于凝聚展示的大标题文字"},{name:"duration",type:"number",default:"0.5",description:"单字符过渡时长 (秒)"},{name:"delayMultiple",type:"number",default:"0.04",description:"相邻字符间距动画错峰倍率"}]},{id:"text-reveal-card",name:"Text Reveal Card",title:"Text Reveal Card（光标划过遮罩刮刮乐式文字破晓显影卡片）",category:"Text",suiteId:"kinetic-typography",description:"光标交互探照灯显影卡片。卡片表层覆盖暗色提示文字，当光标划过时，底层流光发光显影文字伴随圆形遮罩穿透破晓显露，极具探索惊喜感。",componentFilename:"TextRevealCard.vue",componentCode:`<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'

interface TextRevealCardProps {
  text: string
  revealText: string
  class?: string
}

const props = withDefaults(defineProps<TextRevealCardProps>(), {
  text: '你在寻找终极动效原子方案？',
  revealText: 'Aura UI: 原生 Vue 3 的极致美学。',
})

const cardRef = ref<HTMLDivElement | null>(null)
const mousePos = ref({ x: 0, y: 0 })
const isHovered = ref(false)

function handleMouseMove(e: MouseEvent) {
  const card = cardRef.value
  if (!card) return
  const rect = card.getBoundingClientRect()
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
}
<\/script>

<template>
  <div
    ref="cardRef"
    :class="
      cn(
        'relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 p-8 shadow-lg backdrop-blur-xl select-none dark:border-zinc-800/90 dark:bg-zinc-950/95 cursor-crosshair transition-colors',
        props.class
      )
    "
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- 背景微暗光与提示 -->
    <div class="space-y-4">
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
        <span>✦</span>
        <span>光标划过刮开显影</span>
      </div>

      <div class="relative py-4 min-h-[72px] flex items-center">
        <!-- 表层文字 (光标探照灯区域内被遮罩挖空，不叠印) -->
        <p
          class="text-xl sm:text-2xl font-bold text-zinc-400 dark:text-zinc-600 transition-opacity"
          :style="
            isHovered
              ? {
                  maskImage: \`radial-gradient(circle 90px at \${mousePos.x}px \${mousePos.y}px, transparent 100%, black 100%)\`,
                  WebkitMaskImage: \`radial-gradient(circle 90px at \${mousePos.x}px \${mousePos.y}px, transparent 100%, black 100%)\`,
                }
              : undefined
          "
        >
          {{ props.text }}
        </p>

        <!-- 底层显影文字 (仅在光标探照灯圆形区域内透光显现) -->
        <p
          class="absolute inset-0 flex items-center text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 transition-opacity duration-150 pointer-events-none"
          :style="{
            opacity: isHovered ? 1 : 0,
            clipPath: \`circle(90px at \${mousePos.x}px \${mousePos.y}px)\`,
            WebkitClipPath: \`circle(90px at \${mousePos.x}px \${mousePos.y}px)\`,
          }"
        >
          {{ props.revealText }}
        </p>
      </div>

      <p class="text-[11px] font-mono text-zinc-400">
        移动光标体验类似探照灯透光与刮刮卡物理揭示质感
      </p>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import TextRevealCard from '@/components/ui/TextRevealCard.vue'
<\/script>

<template>
  <TextRevealCard
    text="你在寻找终极动效原子方案？"
    reveal-text="Aura UI: 原生 Vue 3 的极致美学。"
  />
</template>`,propsList:[{name:"text",type:"string",default:"'你在寻找终极动效原子方案？'",description:"表层静态神秘提示文本"},{name:"revealText",type:"string",default:"'Aura UI: 原生 Vue 3 的极致美学。'",description:"划过光标穿透显露的渐变发光文本"}]},{id:"magnetic-button",name:"Magnetic Button",title:"Magnetic Button（磁吸物理吸引悬浮按钮）",category:"Button",suiteId:"tactile-actions",description:"高触感磁吸交互按钮。当鼠标靠近感应半径内，按钮及内部图文以弹性阻尼向光标中心产生非线性磁吸偏移，移出后带物理弹簧柔和回弹归位。",componentFilename:"MagneticButton.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  strength?: number
  distance?: number
  class?: string
}

const props = withDefaults(defineProps<MagneticButtonProps>(), {
  strength: 0.38,
  distance: 90,
})

const buttonRef = ref<HTMLButtonElement | null>(null)
const position = ref({ x: 0, y: 0 })
const textPosition = ref({ x: 0, y: 0 })
const isHovered = ref(false)

function handleMouseMove(e: MouseEvent) {
  const btn = buttonRef.value
  if (!btn) return

  const rect = btn.getBoundingClientRect()
  const btnCenterX = rect.left + rect.width / 2
  const btnCenterY = rect.top + rect.height / 2

  const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY)

  if (dist < props.distance) {
    isHovered.value = true
    const offsetX = (e.clientX - btnCenterX) * props.strength
    const offsetY = (e.clientY - btnCenterY) * props.strength

    position.value = { x: offsetX, y: offsetY }
    // 内层文字具有更强的磁吸拉伸纵深感
    textPosition.value = { x: offsetX * 0.45, y: offsetY * 0.45 }
  } else {
    reset()
  }
}

function reset() {
  isHovered.value = false
  position.value = { x: 0, y: 0 }
  textPosition.value = { x: 0, y: 0 }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
<\/script>

<template>
  <button
    ref="buttonRef"
    type="button"
    :class="
      cn(
        'relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-transform select-none cursor-pointer',
        'bg-zinc-900 text-white shadow-md hover:shadow-xl dark:bg-white dark:text-zinc-900',
        'border border-zinc-700/50 dark:border-zinc-300/50',
        props.class
      )
    "
    :style="{
      transform: \`translate3d(\${position.x}px, \${position.y}px, 0)\`,
      transitionDuration: isHovered ? '0.12s' : '0.45s',
      transitionTimingFunction: isHovered ? 'linear' : 'cubic-bezier(0.16, 1, 0.3, 1)',
    }"
  >
    <span
      class="inline-flex items-center gap-2 transition-transform"
      :style="{
        transform: \`translate3d(\${textPosition.x}px, \${textPosition.y}px, 0)\`,
        transitionDuration: isHovered ? '0.12s' : '0.45s',
        transitionTimingFunction: isHovered ? 'linear' : 'cubic-bezier(0.16, 1, 0.3, 1)',
      }"
    >
      <slot>
        <span>探索更多动效</span>
        <span class="text-xs">↗</span>
      </slot>
    </span>
  </button>
</template>
`,usageCode:`<script setup lang="ts">
import MagneticButton from '@/components/ui/MagneticButton.vue'
<\/script>

<template>
  <div class="flex items-center justify-center p-8">
    <MagneticButton :strength="0.38" :distance="90">
      <span>探索 Aura 动效库</span>
      <span class="text-xs">↗</span>
    </MagneticButton>
  </div>
</template>`,propsList:[{name:"strength",type:"number",default:"0.38",description:"磁吸偏移灵敏度系数"},{name:"distance",type:"number",default:"90",description:"光标磁吸触发感应半径 (px)"}]},{id:"elastic-slider",name:"Elastic Slider",title:"Elastic Slider（果冻弹性滑动条）",category:"Interactive",suiteId:"tactile-actions",description:"果冻弹性边界拉伸滑动条。拖拽至极限左右端点时产生橡胶般的弹性形变与阻尼拉伸，松手后带高阶回弹震荡，集成动态浮动数值指示气泡。",componentFilename:"ElasticSlider.vue",componentCode:`<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface ElasticSliderProps {
  modelValue?: number
  min?: number
  max?: number
  step?: number
  class?: string
}

const props = withDefaults(defineProps<ElasticSliderProps>(), {
  modelValue: 50,
  min: 0,
  max: 100,
  step: 1,
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: number): void
}>()

const trackRef = ref<HTMLDivElement | null>(null)
const internalValue = ref(props.modelValue)
const isDragging = ref(false)
const rubberScaleX = ref(1)

const percentage = computed(() => {
  const range = props.max - props.min
  return Math.max(0, Math.min(100, ((internalValue.value - props.min) / range) * 100))
})

function updateFromEvent(e: MouseEvent) {
  const track = trackRef.value
  if (!track) return

  const rect = track.getBoundingClientRect()
  const rawX = e.clientX - rect.left
  const ratio = rawX / rect.width

  // 边界弹性拉伸检测
  if (ratio < 0) {
    rubberScaleX.value = 1 + Math.min(0.25, Math.abs(ratio) * 0.4)
  } else if (ratio > 1) {
    rubberScaleX.value = 1 + Math.min(0.25, (ratio - 1) * 0.4)
  } else {
    rubberScaleX.value = 1
  }

  const clampedRatio = Math.max(0, Math.min(1, ratio))
  const range = props.max - props.min
  let val = props.min + clampedRatio * range
  val = Math.round(val / props.step) * props.step
  internalValue.value = val
  emit('update:modelValue', val)
}

function handleMouseDown(e: MouseEvent) {
  isDragging.value = true
  updateFromEvent(e)
}

function handleMouseMove(e: MouseEvent) {
  if (isDragging.value) {
    updateFromEvent(e)
  }
}

function handleMouseUp() {
  if (isDragging.value) {
    isDragging.value = false
    rubberScaleX.value = 1
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
})
<\/script>

<template>
  <div :class="cn('relative w-full max-w-sm select-none py-4', props.class)">
    <!-- 轨道主体 -->
    <div
      ref="trackRef"
      class="relative h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 cursor-pointer transition-transform"
      :style="{
        transform: \`scaleX(\${rubberScaleX})\`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }"
      @mousedown="handleMouseDown"
    >
      <!-- 已填充高亮激活条 -->
      <div
        class="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500"
        :style="{ width: \`\${percentage}%\` }"
      />

      <!-- 滑块指示器与弹性胶囊浮层 -->
      <div
        class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
        :style="{ left: \`\${percentage}%\` }"
      >
        <!-- 弹簧光标球 -->
        <div
          class="h-5 w-5 rounded-full border-2 border-white bg-blue-600 shadow-md transition-transform dark:border-zinc-900"
          :class="isDragging ? 'scale-125' : 'hover:scale-110'"
        />

        <!-- 悬停/拖拽动态气泡 -->
        <div
          class="absolute -top-8 px-2 py-0.5 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-[10px] font-mono font-bold shadow-md transition-all pointer-events-none"
          :class="isDragging ? 'opacity-100 -translate-y-1 scale-100' : 'opacity-0 scale-90'"
        >
          {{ internalValue }}
        </div>
      </div>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import ElasticSlider from '@/components/ui/ElasticSlider.vue'

const volume = ref(60)
<\/script>

<template>
  <div class="w-full max-w-sm p-6">
    <ElasticSlider v-model="volume" :min="0" :max="100" />
  </div>
</template>`,propsList:[{name:"modelValue",type:"number",default:"50",description:"当前数值（支持 v-model）"},{name:"min",type:"number",default:"0",description:"最小值"},{name:"max",type:"number",default:"100",description:"最大值"},{name:"step",type:"number",default:"1",description:"步进值"}]},{id:"copy-snippet",name:"Copy Snippet",title:"Copy Snippet（极速复制终端代码胶囊）",category:"Button",suiteId:"tactile-actions",description:"官网必备终端命令复制胶囊。点击一键写入剪贴板，伴随复制图标与对勾标记的弹簧微形变，自带前缀符号与深浅色毛玻璃高质感底衬。",componentFilename:"CopySnippet.vue",componentCode:`<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Copy, Check } from 'lucide-vue-next'

interface CopySnippetProps {
  code: string
  prefix?: string
  class?: string
}

const props = withDefaults(defineProps<CopySnippetProps>(), {
  code: 'pnpm add aura-ui @vueuse/core',
  prefix: '$',
})

const copied = ref(false)

async function handleCopy() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}
<\/script>

<template>
  <div
    :class="
      cn(
        'group relative inline-flex items-center gap-3 rounded-xl border border-zinc-200/90 bg-white/90 px-4 py-2.5 font-mono text-xs shadow-xs backdrop-blur-xl transition-all hover:border-zinc-300 dark:border-zinc-800/90 dark:bg-zinc-950/90 dark:hover:border-zinc-700',
        props.class
      )
    "
  >
    <div class="flex items-center gap-2 overflow-hidden">
      <span v-if="props.prefix" class="text-zinc-400 select-none">{{ props.prefix }}</span>
      <span class="truncate font-semibold text-zinc-800 dark:text-zinc-200">
        {{ props.code }}
      </span>
    </div>

    <!-- 复制行动按钮 -->
    <button
      type="button"
      @click="handleCopy"
      class="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-zinc-50 text-zinc-500 shadow-xs transition-all hover:bg-zinc-100 hover:text-zinc-900 active:scale-90 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer"
      :title="copied ? '已复制' : '复制代码'"
    >
      <transition mode="out-in" name="copy-scale">
        <Check v-if="copied" class="h-3.5 w-3.5 text-emerald-500" />
        <Copy v-else class="h-3.5 w-3.5" />
      </transition>
    </button>
  </div>
</template>

<style scoped>
.copy-scale-enter-active,
.copy-scale-leave-active {
  transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease;
}
.copy-scale-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.copy-scale-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
</style>
`,usageCode:`<script setup lang="ts">
import CopySnippet from '@/components/ui/CopySnippet.vue'
<\/script>

<template>
  <CopySnippet code="pnpm add aura-ui @vueuse/core" prefix="$" />
</template>`,propsList:[{name:"code",type:"string",default:"'pnpm add aura-ui @vueuse/core'",description:"要复制的命令行或代码字符串"},{name:"prefix",type:"string",default:"'$'",description:"左侧终端提示符"}]},{id:"keyboard-badge",name:"Keyboard Badge",title:"Keyboard Badge（拟物机械键盘键帽按键反馈）",category:"Button",suiteId:"tactile-actions",description:"高拟真 3D 机械键帽微组件。拥有上高光、倾斜斜角与底部立体投影，点击或敲击对应物理按键时具备真实的机械沉降与阴影收敛反馈。",componentFilename:"KeyboardBadge.vue",componentCode:`<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface KeyboardBadgeProps {
  keyName: string
  shortcutKey?: string // 监听真实键盘按键代码，例如 'k' 或 'Enter'
  size?: 'sm' | 'md' | 'lg'
  class?: string
}

const props = withDefaults(defineProps<KeyboardBadgeProps>(), {
  keyName: '⌘K',
  size: 'md',
})

const isPressed = ref(false)

function handleKeyDown(e: KeyboardEvent) {
  if (props.shortcutKey && e.key.toLowerCase() === props.shortcutKey.toLowerCase()) {
    isPressed.value = true
  }
}

function handleKeyUp(e: KeyboardEvent) {
  if (props.shortcutKey && e.key.toLowerCase() === props.shortcutKey.toLowerCase()) {
    isPressed.value = false
  }
}

onMounted(() => {
  if (props.shortcutKey) {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
  }
})

onUnmounted(() => {
  if (props.shortcutKey) {
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('keyup', handleKeyUp)
  }
})
<\/script>

<template>
  <kbd
    @mousedown="isPressed = true"
    @mouseup="isPressed = false"
    @mouseleave="isPressed = false"
    :class="
      cn(
        'inline-flex items-center justify-center font-mono font-bold select-none cursor-pointer rounded-lg border transition-all duration-75',
        // 拟物 3D 键帽阴影与边缘
        'border-zinc-300 bg-linear-to-b from-white to-zinc-100 text-zinc-700 shadow-[0_3px_0_0_#d4d4d8,0_4px_6px_-1px_rgba(0,0,0,0.1)]',
        'dark:border-zinc-700 dark:bg-linear-to-b dark:from-zinc-800 dark:to-zinc-900 dark:text-zinc-200 dark:shadow-[0_3px_0_0_#27272a,0_4px_6px_-1px_rgba(0,0,0,0.4)]',
        // 按下物理沉降
        isPressed && 'translate-y-[2px] shadow-[0_1px_0_0_#d4d4d8] dark:shadow-[0_1px_0_0_#27272a]',
        // 尺寸变体
        props.size === 'sm' && 'h-6 min-w-[24px] px-1.5 text-[10px]',
        props.size === 'md' && 'h-8 min-w-[32px] px-2.5 text-xs',
        props.size === 'lg' && 'h-10 min-w-[40px] px-3.5 text-sm',
        props.class
      )
    "
  >
    <slot>{{ props.keyName }}</slot>
  </kbd>
</template>
`,usageCode:`<script setup lang="ts">
import KeyboardBadge from '@/components/ui/KeyboardBadge.vue'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <KeyboardBadge key-name="⌘" />
    <KeyboardBadge key-name="K" shortcut-key="k" />
  </div>
</template>`,propsList:[{name:"keyName",type:"string",default:"'⌘K'",description:"键帽表面展示的按键文字或符号"},{name:"shortcutKey",type:"string",default:"undefined",description:"绑定的物理键盘键位（如 'k' 或 'Enter'）"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",description:"键帽尺寸"}]},{id:"color-picker-morph",name:"Color Picker Morph",title:"Color Picker Morph（调色板流体色盘拾色器）",category:"Interactive",suiteId:"tactile-actions",description:"流体色相拾色器。点击不同色彩时，流体激活光环以物理弹性阻尼滑动形变包裹目标色块，集成 Hex 代码展示与一键快速复制胶囊。",componentFilename:"ColorPickerMorph.vue",componentCode:`<script setup lang="ts">
import { ref, watch } from 'vue'
import { cn } from '@/lib/utils'
import { Check, Copy } from 'lucide-vue-next'

interface ColorPickerMorphProps {
  modelValue?: string
  colors?: string[]
  class?: string
}

const props = withDefaults(defineProps<ColorPickerMorphProps>(), {
  modelValue: '#3b82f6',
  colors: () => [
    '#3b82f6', // Blue
    '#10b981', // Emerald
    '#8b5cf6', // Violet
    '#f59e0b', // Amber
    '#ec4899', // Pink
    '#06b6d4', // Cyan
    '#f43f5e', // Rose
    '#18181b', // Zinc
  ],
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'change', val: string): void
}>()

const selectedColor = ref(props.modelValue)
const copied = ref(false)

function selectColor(color: string) {
  selectedColor.value = color
  emit('update:modelValue', color)
  emit('change', color)
}

async function copyHex() {
  try {
    await navigator.clipboard.writeText(selectedColor.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1500)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}

watch(() => props.modelValue, (val) => {
  if (val) selectedColor.value = val
})
<\/script>

<template>
  <div
    :class="
      cn(
        'inline-flex flex-col gap-3 rounded-2xl border border-zinc-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/90 select-none',
        props.class
      )
    "
  >
    <!-- 色彩气泡阵列 -->
    <div class="flex items-center gap-2.5">
      <button
        v-for="color in props.colors"
        :key="color"
        type="button"
        @click="selectColor(color)"
        class="group relative flex h-7 w-7 items-center justify-center rounded-full transition-transform active:scale-90 cursor-pointer"
        :title="color"
      >
        <!-- 外层流体动态弹性外环 -->
        <span
          class="absolute inset-0 rounded-full border-2 transition-all duration-300"
          :style="{
            borderColor: selectedColor === color ? color : 'transparent',
            transform: selectedColor === color ? 'scale(1.22)' : 'scale(1)',
            opacity: selectedColor === color ? 1 : 0,
          }"
        />

        <!-- 内部实心色块 -->
        <span
          class="h-6 w-6 rounded-full shadow-inner transition-transform group-hover:scale-105"
          :style="{ backgroundColor: color }"
        />

        <!-- 选中态中心小对勾 -->
        <Check
          v-if="selectedColor === color"
          class="relative z-10 h-3.5 w-3.5 text-white drop-shadow-md"
        />
      </button>
    </div>

    <!-- 底部色彩代码与复制胶囊 -->
    <div class="flex items-center justify-between border-t border-zinc-100 pt-2.5 dark:border-zinc-800/80">
      <div class="flex items-center gap-2">
        <span class="h-3 w-3 rounded-full" :style="{ backgroundColor: selectedColor }" />
        <span class="font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300">
          {{ selectedColor.toUpperCase() }}
        </span>
      </div>

      <button
        type="button"
        @click="copyHex"
        class="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-mono text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
      >
        <Check v-if="copied" class="h-3 w-3 text-emerald-500" />
        <Copy v-else class="h-3 w-3" />
        <span>{{ copied ? '已复制' : '复制 HEX' }}</span>
      </button>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import ColorPickerMorph from '@/components/ui/ColorPickerMorph.vue'

const activeColor = ref('#3b82f6')
<\/script>

<template>
  <ColorPickerMorph v-model="activeColor" />
</template>`,propsList:[{name:"modelValue",type:"string",default:"'#3b82f6'",description:"当前选中的色彩 HEX 值（支持 v-model）"},{name:"colors",type:"string[]",default:"预设 8 大常用主色",description:"供选取的调色板色值数组"}]},{id:"star-rating",name:"Star Rating",title:"Star Rating（高精度流体星星评分打分器）",category:"Interactive",suiteId:"tactile-actions",description:"高触感星级评分微积木。支持悬停实时预览、微弹簧缩放震颤反馈，点击选定时产生星芒微爆开光环，支持只读与双向绑定。",componentFilename:"StarRating.vue",componentCode:`<script setup lang="ts">
import { ref, watch } from 'vue'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-vue-next'

interface StarRatingProps {
  modelValue?: number
  maxStars?: number
  readonly?: boolean
  color?: string
  class?: string
}

const props = withDefaults(defineProps<StarRatingProps>(), {
  modelValue: 4,
  maxStars: 5,
  readonly: false,
  color: '#f59e0b',
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: number): void
  (e: 'change', val: number): void
}>()

const currentScore = ref(props.modelValue)
const hoverScore = ref<number | null>(null)
const burstStarIndex = ref<number | null>(null)

function handleClick(starIndex: number) {
  if (props.readonly) return
  currentScore.value = starIndex
  burstStarIndex.value = starIndex
  emit('update:modelValue', starIndex)
  emit('change', starIndex)

  setTimeout(() => {
    burstStarIndex.value = null
  }, 400)
}

function handleMouseEnter(starIndex: number) {
  if (props.readonly) return
  hoverScore.value = starIndex
}

function handleMouseLeave() {
  if (props.readonly) return
  hoverScore.value = null
}

watch(() => props.modelValue, (val) => {
  if (val !== undefined) currentScore.value = val
})
<\/script>

<template>
  <div
    :class="cn('inline-flex items-center gap-1 select-none', props.class)"
    @mouseleave="handleMouseLeave"
  >
    <button
      v-for="index in props.maxStars"
      :key="index"
      type="button"
      :disabled="props.readonly"
      @click="handleClick(index)"
      @mouseenter="handleMouseEnter(index)"
      :class="[
        'group relative flex items-center justify-center p-1 transition-transform',
        props.readonly ? 'cursor-default' : 'cursor-pointer active:scale-90',
        hoverScore !== null && hoverScore >= index && !props.readonly && 'scale-115',
        burstStarIndex === index && 'animate-star-burst',
      ]"
    >
      <!-- 星芒背景微发光 -->
      <span
        v-if="burstStarIndex === index"
        class="absolute inset-0 rounded-full bg-amber-400/30 blur-sm pointer-events-none animate-ping"
      />

      <Star
        class="h-5 w-5 transition-colors duration-150"
        :class="[
          (hoverScore !== null ? hoverScore >= index : currentScore >= index)
            ? 'fill-amber-400 text-amber-400 drop-shadow-xs'
            : 'fill-transparent text-zinc-300 dark:text-zinc-700',
        ]"
      />
    </button>

    <!-- 分数指示胶囊 -->
    <span class="ml-2 font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400">
      {{ (hoverScore !== null ? hoverScore : currentScore).toFixed(1) }}
    </span>
  </div>
</template>

<style scoped>
@keyframes star-burst {
  0% { transform: scale(1); }
  50% { transform: scale(1.35) rotate(12deg); }
  100% { transform: scale(1); }
}

.animate-star-burst {
  animation: star-burst 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
`,usageCode:`<script setup lang="ts">
import { ref } from 'vue'
import StarRating from '@/components/ui/StarRating.vue'

const score = ref(4)
<\/script>

<template>
  <StarRating v-model="score" :max-stars="5" />
</template>`,propsList:[{name:"modelValue",type:"number",default:"4",description:"当前评分分值（支持 v-model）"},{name:"maxStars",type:"number",default:"5",description:"星星总数上限"},{name:"readonly",type:"boolean",default:"false",description:"是否为只读展示模式"}]},{id:"hero-modern",name:"Hero Modern Block",title:"Hero Modern Block（AI 原生现代官网首屏 Hero 模板）",category:"Layout",suiteId:"ai-native",description:"现代 SaaS 与 AI 平台顶级 Hero 首屏。集成公告发光药丸、3D 关键词纵深轮播标题、终端依赖快速复制胶囊、双行动按钮与全球顶级客户跑马灯徽标墙。",componentFilename:"HeroModern.vue",componentCode:`<script setup lang="ts">
import { cn } from '@/lib/utils'
import WordRotate from './WordRotate.vue'
import CopySnippet from './CopySnippet.vue'
import Marquee from './Marquee.vue'
import { ArrowRight, Sparkles, Terminal } from 'lucide-vue-next'

interface HeroModernProps {
  badgeText?: string
  titlePrefix?: string
  rotateWords?: string[]
  titleSuffix?: string
  description?: string
  copyCommand?: string
  class?: string
}

const props = withDefaults(defineProps<HeroModernProps>(), {
  badgeText: 'Aura UI 2.0 现已全量重构上线',
  titlePrefix: '面向 AI 时代的',
  rotateWords: () => ['极致流畅', '原生优雅', '工业美学', '零黑盒依赖'],
  titleSuffix: '动效代码库',
  description: '不妥协的 60fps 满帧性能，专为 AI 官网、SaaS 营销页打造。Zero-Config 单文件即拷即用。',
  copyCommand: 'pnpm add aura-ui @vueuse/core',
})

const partners = ['OpenAI', 'Anthropic', 'Google Cloud', 'NVIDIA', 'DeepSeek', 'Vercel', 'Supabase', 'Stripe']
<\/script>

<template>
  <div :class="cn('relative w-full overflow-hidden py-16 sm:py-24 select-none', props.class)">
    <!-- 顶部环境光锥背景 -->
    <div class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-full max-w-5xl rounded-full bg-gradient-to-tr from-blue-600/15 via-purple-600/20 to-emerald-500/15 blur-3xl" />

    <div class="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center flex flex-col items-center">
      <!-- 顶部公告药丸 -->
      <div class="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 backdrop-blur-md mb-6 hover:border-blue-500/40 transition-colors cursor-pointer">
        <Sparkles class="h-3.5 w-3.5" />
        <span>{{ props.badgeText }}</span>
        <span class="text-xs">→</span>
      </div>

      <!-- 核心大标题与 3D 轮播词 -->
      <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-zinc-900 dark:text-white max-w-3xl leading-[1.15]">
        <span>{{ props.titlePrefix }}</span>
        <br class="hidden sm:inline" />
        <WordRotate :words="props.rotateWords" class="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400" />
        <span>{{ props.titleSuffix }}</span>
      </h1>

      <!-- 辅助阐述文案 -->
      <p class="mt-6 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
        {{ props.description }}
      </p>

      <!-- 双行动按钮组 -->
      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-all cursor-pointer"
        >
          <span>立即浏览组件库</span>
          <ArrowRight class="h-4 w-4" />
        </button>

        <CopySnippet :code="props.copyCommand" prefix="$" />
      </div>

      <!-- 合作伙伴跑马灯徽标墙 -->
      <div class="mt-16 w-full max-w-4xl border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
        <p class="text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase mb-5">
          深受全球顶尖工程师与创新团队信赖
        </p>

        <Marquee :pause-on-hover="true" :speed="35" class="py-2">
          <div
            v-for="partner in partners"
            :key="partner"
            class="mx-6 flex items-center gap-2 text-sm font-black tracking-wider text-zinc-400 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-default"
          >
            <span>✦</span>
            <span>{{ partner }}</span>
          </div>
        </Marquee>
      </div>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import HeroModern from '@/components/ui/HeroModern.vue'
<\/script>

<template>
  <HeroModern />
</template>`,propsList:[{name:"badgeText",type:"string",default:"'Aura UI 2.0 现已全量重构上线'",description:"顶部公告胶囊文字"},{name:"titlePrefix",type:"string",default:"'面向 AI 时代的'",description:"大标题前缀"},{name:"rotateWords",type:"string[]",default:"内置 4 组关键词",description:"3D 轮播切换的关键词数组"},{name:"titleSuffix",type:"string",default:"'动效代码库'",description:"大标题后缀"},{name:"description",type:"string",default:"宣传阐述文案",description:"副标题阐释段落"},{name:"copyCommand",type:"string",default:"'pnpm add aura-ui @vueuse/core'",description:"终端快速安装命令"}]},{id:"feature-bento-block",name:"Feature Bento Block",title:"Feature Bento Block（苹果风多维便当盒特性矩阵）",category:"Cards",suiteId:"borders-cards",description:"多维便当盒特性矩阵区块。跨列大卡片搭载 1px 细微跑马渐变发光流线（BorderBeam），搭配 GPU 硬件加速、TypeScript 与双模自适应特性中卡，排版张弛有度。",componentFilename:"FeatureBentoBlock.vue",componentCode:`<script setup lang="ts">
import { cn } from '@/lib/utils'
import BorderBeam from './BorderBeam.vue'
import { Zap, Shield, Cpu, Sparkles, Layers, Globe } from 'lucide-vue-next'

interface FeatureBentoBlockProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<FeatureBentoBlockProps>(), {
  title: '专为极客与设计师打磨的架构体系',
  subtitle: '每一款组件均兼顾 60fps 满帧性能、无依赖纯净度与全套深浅色自适应',
})
<\/script>

<template>
  <div :class="cn('w-full py-12 select-none', props.class)">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <!-- 区块头部文案 -->
      <div class="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          FEATURE HIGHLIGHTS
        </span>
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          {{ props.title }}
        </h2>
        <p class="text-sm text-zinc-500 leading-relaxed font-normal">
          {{ props.subtitle }}
        </p>
      </div>

      <!-- Bento 网格容器 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 卡片 1: 跨 2 列大卡 (带流光发光边框 BorderBeam) -->
        <div class="md:col-span-2 relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-8 shadow-xs backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/90">
          <BorderBeam :size="250" :duration="8" :border-width="1.5" color-from="#3b82f6" color-to="#10b981" />
          
          <div class="relative z-10 flex flex-col justify-between h-full space-y-6">
            <div class="space-y-2 max-w-md">
              <div class="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Zap class="h-5 w-5" />
              </div>
              <h3 class="text-xl font-bold text-zinc-900 dark:text-white">
                Zero-Config 单文件即拷即用
              </h3>
              <p class="text-xs text-zinc-500 leading-relaxed">
                动画关键帧与流光路径由 \`<style scoped>\` 封装，无需修改任何外部配置文件，代码直接属于你的代码库。
              </p>
            </div>

            <!-- 内部交互图解代码窗 -->
            <div class="rounded-xl border border-zinc-200/80 bg-zinc-50 p-4 font-mono text-[11px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
              <div class="flex items-center gap-1.5 mb-2">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                <span class="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                <span class="ml-2 text-[10px] text-zinc-400">components/ui/BorderBeam.vue</span>
              </div>
              <code>&lt;BorderBeam :duration="8" :border-width="1.5" /&gt;</code>
            </div>
          </div>
        </div>

        <!-- 卡片 2: 1 列卡片 (硬件加速) -->
        <div class="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-8 shadow-xs backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/90">
          <div class="space-y-3">
            <div class="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Cpu class="h-5 w-5" />
            </div>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-white">
              60fps 满帧性能
            </h3>
            <p class="text-xs text-zinc-500 leading-relaxed">
              基于 GPU 合成层与 Canvas 2D 硬件加速，杜绝主线程阻塞与低端机型掉帧。
            </p>
          </div>
        </div>

        <!-- 卡片 3: 1 列卡片 (TypeScript) -->
        <div class="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-8 shadow-xs backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/90">
          <div class="space-y-3">
            <div class="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Shield class="h-5 w-5" />
            </div>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-white">
              严苛 TypeScript
            </h3>
            <p class="text-xs text-zinc-500 leading-relaxed">
              所有 Props、Emits 与 Slots 均提供详尽完备的类型定义，IDE 智能提示丝滑无阻。
            </p>
          </div>
        </div>

        <!-- 卡片 4: 跨 2 列卡片 (双模自适应) -->
        <div class="md:col-span-2 relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-8 shadow-xs backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/90">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div class="space-y-2 max-w-sm">
              <div class="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Globe class="h-5 w-5" />
              </div>
              <h3 class="text-lg font-bold text-zinc-900 dark:text-white">
                真·纯净深浅双模自适应
              </h3>
              <p class="text-xs text-zinc-500 leading-relaxed">
                白底模式下文字对比度与细线条纤毫毕现，暗黑模式下流光溢彩，支持全套设计 Tokens。
              </p>
            </div>

            <div class="flex items-center gap-3">
              <div class="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white shadow-xs text-xs font-semibold text-zinc-800">
                ☀️ 纯白设计
              </div>
              <div class="px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 shadow-xs text-xs font-semibold text-zinc-200">
                🌙 科技暗黑
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import FeatureBentoBlock from '@/components/ui/FeatureBentoBlock.vue'
<\/script>

<template>
  <FeatureBentoBlock />
</template>`,propsList:[{name:"title",type:"string",default:"'专为极客与设计师打磨的架构体系'",description:"区块主标题"},{name:"subtitle",type:"string",default:"副标题阐释说明",description:"区块副标题"}]},{id:"pricing-section-block",name:"Pricing Section Block",title:"Pricing Section Block（SaaS 阶梯方案与弹性计费区块）",category:"Layout",suiteId:"interactive-nav",description:"商业级 SaaS 方案计费区块。集成按月/按年平滑分段滑动切换器、3 档阶梯卡片，最热门方案具备流光高亮浮起与专属推荐徽标，特性清单带打勾微动效。",componentFilename:"PricingSectionBlock.vue",componentCode:`<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import SegmentedControl from './SegmentedControl.vue'
import { Check, Sparkles } from 'lucide-vue-next'

interface PricingSectionBlockProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<PricingSectionBlockProps>(), {
  title: '透明且可预测的阶梯方案',
  subtitle: '所有套餐均包含全量动效组件源码与持续更新',
})

const billingCycle = ref('annual')

const plans = [
  {
    id: 'free',
    name: '开源社区版',
    desc: '适合个人博客与小型玩具项目',
    priceMonthly: '¥0',
    priceAnnual: '¥0',
    popular: false,
    features: [
      '包含基础 20 款动效组件',
      'Zero-Config 单文件即用',
      '社区 GitHub Discussions 支持',
      '个人非商业项目许可',
    ],
    buttonText: '免费开始使用',
  },
  {
    id: 'pro',
    name: '专业开发者版',
    desc: '面向独立开发者与创新型创业团队',
    priceMonthly: '¥129',
    priceAnnual: '¥99',
    period: '月',
    popular: true,
    badge: '最受欢迎',
    features: [
      '解锁全量 82 款动效原子与 Blocks',
      '商用无限制个人及客户授权',
      '终身免费版本更新',
      'Figma 设计规范文件包',
      '优先邮件技术答疑支持',
    ],
    buttonText: '立即升级专业版',
  },
  {
    id: 'team',
    name: '企业团队版',
    desc: '面向大型团队与高频交付机构',
    priceMonthly: '¥499',
    priceAnnual: '¥399',
    period: '月',
    popular: false,
    features: [
      '全量 82 款组件及后续全部上新',
      '不限成员席位商业授权',
      '专属微信/飞书技术专家服务群',
      '提供组件定制与性能调优建议',
      '专属 SLA 极速响应保障',
    ],
    buttonText: '联系企业顾问',
  },
]
<\/script>

<template>
  <div :class="cn('w-full py-12 select-none', props.class)">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <!-- 头部文案与计费周期切换 -->
      <div class="text-center max-w-2xl mx-auto mb-10 space-y-4">
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          {{ props.title }}
        </h2>
        <p class="text-sm text-zinc-500 font-normal">
          {{ props.subtitle }}
        </p>

        <!-- 月付 / 年付分段器 -->
        <div class="pt-2 flex items-center justify-center gap-3">
          <SegmentedControl
            v-model="billingCycle"
            :options="[
              { label: '按月付费', value: 'monthly' },
              { label: '按年结算 (省 20%)', value: 'annual' },
            ]"
          />
        </div>
      </div>

      <!-- 3 档卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
        <div
          v-for="plan in plans"
          :key="plan.id"
          :class="[
            'relative flex flex-col justify-between rounded-2xl p-8 backdrop-blur-xl transition-all duration-300',
            plan.popular
              ? 'border-2 border-blue-500/80 bg-white shadow-xl dark:border-blue-500/80 dark:bg-zinc-900 md:-translate-y-2'
              : 'border border-zinc-200/90 bg-white/80 shadow-xs dark:border-zinc-800/90 dark:bg-zinc-950/80 hover:border-zinc-300 dark:hover:border-zinc-700',
          ]"
        >
          <!-- 推荐徽标 -->
          <div
            v-if="plan.popular"
            class="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-3.5 py-0.5 text-[11px] font-bold text-white shadow-md shadow-blue-500/25"
          >
            <Sparkles class="h-3 w-3" />
            <span>{{ plan.badge }}</span>
          </div>

          <div>
            <!-- 套餐名与说明 -->
            <h3 class="text-lg font-bold text-zinc-900 dark:text-white">
              {{ plan.name }}
            </h3>
            <p class="mt-1 text-xs text-zinc-500">
              {{ plan.desc }}
            </p>

            <!-- 价格 -->
            <div class="mt-6 flex items-baseline gap-1">
              <span class="text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
                {{ billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly }}
              </span>
              <span v-if="plan.period" class="text-xs text-zinc-400">
                / {{ plan.period }}
              </span>
            </div>

            <!-- 特性列表 -->
            <ul class="mt-8 space-y-3 border-t border-zinc-100 pt-6 dark:border-zinc-800/80">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-300"
              >
                <div class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Check class="h-2.5 w-2.5" />
                </div>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- 行动按钮 -->
          <button
            type="button"
            :class="[
              'mt-8 w-full rounded-xl py-2.5 text-xs font-semibold shadow-xs transition-all active:scale-95 cursor-pointer',
              plan.popular
                ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-500/25'
                : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700',
            ]"
          >
            {{ plan.buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import PricingSectionBlock from '@/components/ui/PricingSectionBlock.vue'
<\/script>

<template>
  <PricingSectionBlock />
</template>`,propsList:[{name:"title",type:"string",default:"'透明且可预测的阶梯方案'",description:"定价区标题"},{name:"subtitle",type:"string",default:"所有套餐均包含全量动效组件源码",description:"定价区副标题"}]},{id:"testimonial-marquee-block",name:"Testimonial Marquee Block",title:"Testimonial Marquee Block（双轨无缝滚动用户好评墙）",category:"Layout",suiteId:"interactive-nav",description:"双轨反向无缝跑马灯好评墙。评价卡片集成亚克力毛玻璃质感，包含用户头像、职位、Verified 真实蓝标以及 5 星评分（StarRating），悬停平滑暂停。",componentFilename:"TestimonialMarqueeBlock.vue",componentCode:`<script setup lang="ts">
import { cn } from '@/lib/utils'
import Marquee from './Marquee.vue'
import StarRating from './StarRating.vue'
import { BadgeCheck } from 'lucide-vue-next'

interface TestimonialMarqueeBlockProps {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<TestimonialMarqueeBlockProps>(), {
  title: '来自全球顶级创造者的真实口碑',
  subtitle: '数十万开发者正在使用 Aura UI 构建下一代数字界面',
})

const reviewsRow1 = [
  {
    author: 'Alex Rivera',
    handle: '@alex_dev',
    avatar: '👨‍💻',
    role: 'Staff Frontend Engineer at Vercel',
    content: 'Aura UI 彻底改变了我们团队交付动效的方式，单文件拷过去即用，没有恶心的构建冲突。',
    stars: 5,
  },
  {
    author: 'Sarah Jenkins',
    handle: '@sarah_design',
    avatar: '👩‍🎨',
    role: 'Design Director at Linear',
    content: '触感阻尼与弹簧缓动做到了像素级的精致，这才是现代 Web 该有的交互水准。',
    stars: 5,
  },
  {
    author: 'Michael Zhang',
    handle: '@mz_architect',
    avatar: '🧑‍🚀',
    role: 'Founder at AI Agentic Studio',
    content: 'AI 相关的 AgentStatus 与 思维手风琴组件太及时了，帮我们省下了至少两周的动效研发时间。',
    stars: 5,
  },
]

const reviewsRow2 = [
  {
    author: 'Elena Rostova',
    handle: '@elena_tech',
    avatar: '👩‍🔬',
    role: 'Lead Architect at Supercell',
    content: '完全不需要改 tailwind.config.js，所有动画关键帧内聚在单文件内部，优雅至极！',
    stars: 5,
  },
  {
    author: 'David Kim',
    handle: '@dkim_codes',
    avatar: '🧑‍💻',
    role: 'Senior Developer at Figma',
    content: 'ScrubInput 和 HoldToConfirm 的手感简直跟原生桌面应用一模一样，强烈推荐。',
    stars: 5,
  },
  {
    author: 'Chloe Dupont',
    handle: '@chloe_ux',
    avatar: '✨',
    role: 'Product Lead at Stripe',
    content: '双模自适应在纯白背景下线条清晰干净，在暗色背景下流光溢彩，无可挑剔。',
    stars: 5,
  },
]
<\/script>

<template>
  <div :class="cn('relative w-full overflow-hidden py-16 select-none', props.class)">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 mb-12 text-center space-y-3">
      <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
        WALL OF LOVE
      </span>
      <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
        {{ props.title }}
      </h2>
      <p class="text-sm text-zinc-500 max-w-xl mx-auto">
        {{ props.subtitle }}
      </p>
    </div>

    <!-- 双轨跑马灯滚动区 -->
    <div class="relative space-y-4">
      <!-- 左右边缘虚化消隐蒙版 -->
      <div class="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10" />
      <div class="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10" />

      <!-- 正向滚动轨 -->
      <Marquee :pause-on-hover="true" :speed="40">
        <div
          v-for="r in reviewsRow1"
          :key="r.handle"
          class="mx-3 w-80 sm:w-96 rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-xs backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-lg dark:bg-zinc-800">
                {{ r.avatar }}
              </span>
              <div>
                <div class="flex items-center gap-1">
                  <span class="font-bold text-sm text-zinc-900 dark:text-white">{{ r.author }}</span>
                  <BadgeCheck class="h-3.5 w-3.5 text-blue-500" />
                </div>
                <span class="text-[11px] text-zinc-400">{{ r.role }}</span>
              </div>
            </div>
            <StarRating :model-value="r.stars" :readonly="true" />
          </div>
          <p class="mt-4 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
            “{{ r.content }}”
          </p>
        </div>
      </Marquee>

      <!-- 反向滚动轨 -->
      <Marquee :reverse="true" :pause-on-hover="true" :speed="35">
        <div
          v-for="r in reviewsRow2"
          :key="r.handle"
          class="mx-3 w-80 sm:w-96 rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-xs backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-lg dark:bg-zinc-800">
                {{ r.avatar }}
              </span>
              <div>
                <div class="flex items-center gap-1">
                  <span class="font-bold text-sm text-zinc-900 dark:text-white">{{ r.author }}</span>
                  <BadgeCheck class="h-3.5 w-3.5 text-blue-500" />
                </div>
                <span class="text-[11px] text-zinc-400">{{ r.role }}</span>
              </div>
            </div>
            <StarRating :model-value="r.stars" :readonly="true" />
          </div>
          <p class="mt-4 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
            “{{ r.content }}”
          </p>
        </div>
      </Marquee>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import TestimonialMarqueeBlock from '@/components/ui/TestimonialMarqueeBlock.vue'
<\/script>

<template>
  <TestimonialMarqueeBlock />
</template>`,propsList:[{name:"title",type:"string",default:"'来自全球顶级创造者的真实口碑'",description:"口碑区标题"},{name:"subtitle",type:"string",default:"副标题说明文案",description:"口碑区副标题"}]},{id:"cta-banner-block",name:"CTA Banner Block",title:"CTA Banner Block（极光破晓科技行动号召横幅）",category:"Layout",suiteId:"ai-native",description:"高冲击力全宽行动号召横幅。结合顶部极光破晓光锥、星芒粒子闪烁（SparklesCore）与 360° 旋转发光边框，集成长按蓄力确认按钮与文档直达按钮。",componentFilename:"CtaBannerBlock.vue",componentCode:`<script setup lang="ts">
import { cn } from '@/lib/utils'
import HoldToConfirm from './HoldToConfirm.vue'
import SparklesCore from './SparklesCore.vue'
import BorderBeam from './BorderBeam.vue'
import { Rocket, ArrowRight } from 'lucide-vue-next'

interface CtaBannerBlockProps {
  title?: string
  description?: string
  class?: string
}

const props = withDefaults(defineProps<CtaBannerBlockProps>(), {
  title: '立即开启下一代数字界面的动效革命',
  description: '无需繁琐工程配置，单文件直接引入。零成本赋能你的业务与产品线。',
})

function handleConfirmed() {
  console.log('Confirmed CTA!')
}
<\/script>

<template>
  <div :class="cn('w-full py-16 select-none', props.class)">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div class="relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-gradient-to-b from-zinc-900 to-black p-8 sm:p-16 text-center shadow-2xl dark:border-zinc-800">
        <!-- 跑马渐变流光发丝边框 -->
        <BorderBeam :size="300" :duration="7" :border-width="1.5" color-from="#38bdf8" color-to="#818cf8" />

        <!-- 内部微星芒漂浮粒子 -->
        <SparklesCore
          :particle-density="70"
          particle-color="#38bdf8"
          :min-size="0.6"
          :max-size="1.6"
          :speed="0.8"
          class="absolute inset-0 pointer-events-none opacity-40"
        />

        <!-- 顶部天灯破晓光锥 -->
        <div class="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-52 w-full max-w-lg rounded-full bg-cyan-500/20 blur-3xl" />

        <div class="relative z-10 max-w-2xl mx-auto space-y-6">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-cyan-300 border border-white/10 backdrop-blur-md">
            <Rocket class="h-3.5 w-3.5" />
            <span>START BUILDING TODAY</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {{ props.title }}
          </h2>

          <p class="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            {{ props.description }}
          </p>

          <!-- 交互操作按钮群 -->
          <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
            <HoldToConfirm
              text="长按确认部署"
              completed-text="✓ 部署环境已就绪"
              :duration="1200"
              @confirm="handleConfirmed"
            />

            <a
              href="#/docs"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold backdrop-blur-md transition-all active:scale-95"
            >
              <span>查看全部文档</span>
              <ArrowRight class="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`,usageCode:`<script setup lang="ts">
import CtaBannerBlock from '@/components/ui/CtaBannerBlock.vue'
<\/script>

<template>
  <CtaBannerBlock />
</template>`,propsList:[{name:"title",type:"string",default:"'立即开启下一代数字界面的动效革命'",description:"CTA 标语"},{name:"description",type:"string",default:"副标题阐释文案",description:"详细行动说明"}]},{id:"faq-accordion-block",name:"FAQ Accordion Block",title:"FAQ Accordion Block（交互折叠手风琴常见问题解答）",category:"Interactive",suiteId:"interactive-nav",description:"现代 SaaS 官网高频必备模块。折叠项带平滑高度与透明度过渡，加号图标 45° 旋转为叉号，支持单项互斥或多项自由展开，完美解答用户常见疑虑。",componentFilename:"FaqAccordionBlock.vue",componentCode:`<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { Plus, HelpCircle } from 'lucide-vue-next'

export interface FaqItem {
  id: string | number
  question: string
  answer: string
}

interface FaqAccordionBlockProps {
  title?: string
  subtitle?: string
  items?: FaqItem[]
  multiple?: boolean
  class?: string
}

const props = withDefaults(defineProps<FaqAccordionBlockProps>(), {
  title: '常见问题解答 (FAQ)',
  subtitle: '关于组件架构、浏览器兼容性与商业使用的详细说明',
  multiple: false,
  items: () => [
    {
      id: 'zero-config',
      question: '什么是真正的 Zero-Config 单文件即用？',
      answer: '传统 UI 动效库通常要求你在 tailwind.config.js 中配置复杂的 keyframes、animation 与插件，一旦版本不匹配极易引发全局样式污染。Aura UI 坚持将所有动画关键帧与 CSS 变量全部封装在单文件的 <style scoped> 内，你只需将单个 .vue 文件拷贝到你的项目 src/components/ui/ 目录下，无需修改任何外部配置文件即可 100% 完整生效。',
    },
    {
      id: 'performance',
      question: '如何确保在低配设备与移动端上保持 60fps？',
      answer: '所有动效组件严格遵循 GPU 硬件加速原则，仅在 transform、opacity、filter 与 Canvas 渲染层进行变换，杜绝引发重排（Reflow）的高开销属性。重度粒子类组件采用 requestAnimationFrame 与非线性阻尼衰减算法，并在离开视口或组件卸载时立即取消动画帧与事件监听，确保零内存泄漏。',
    },
    {
      id: 'commercial',
      question: 'Aura UI 可以直接商用或用于客户的外包项目吗？',
      answer: '完全可以！Aura UI 基于开源友好的 MIT 商业协议，你可以自由将组件拷贝进你的商业 SaaS 平台、内部中台、移动端 H5 或任何客户交付项目，没有任何限制与强制署名要求。',
    },
    {
      id: 'typescript',
      question: '组件对 TypeScript 和 Vue 3.5+ 响应式特性的支持如何？',
      answer: '所有组件均采用 Vue 3.5+ 最新的 <script setup lang="ts"> 规范编写，Props、Emits、Slots 拥有完备严格的 TypeScript 泛型接口定义，并且在 defineProps 解构与默认值传递上原生满足 IDE 智能补全要求。',
    },
  ],
})

const activeIds = ref<(string | number)[]>([props.items[0]?.id || 'zero-config'])

function toggleItem(id: string | number) {
  if (props.multiple) {
    if (activeIds.value.includes(id)) {
      activeIds.value = activeIds.value.filter((i) => i !== id)
    } else {
      activeIds.value.push(id)
    }
  } else {
    if (activeIds.value.includes(id)) {
      activeIds.value = []
    } else {
      activeIds.value = [id]
    }
  }
}
<\/script>

<template>
  <div :class="cn('w-full py-12 select-none', props.class)">
    <div class="mx-auto max-w-4xl px-4 sm:px-6">
      <!-- 头部标题文案 -->
      <div class="text-center max-w-xl mx-auto mb-10 space-y-3">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
          <HelpCircle class="h-3.5 w-3.5" />
          <span>GOT QUESTIONS?</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          {{ props.title }}
        </h2>
        <p class="text-sm text-zinc-500 font-normal">
          {{ props.subtitle }}
        </p>
      </div>

      <!-- 手风琴折叠列表 -->
      <div class="space-y-3.5">
        <div
          v-for="item in props.items"
          :key="item.id"
          class="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 backdrop-blur-xl transition-all dark:border-zinc-800/90 dark:bg-zinc-950/90"
        >
          <!-- 问题头部触发按钮 -->
          <button
            type="button"
            @click="toggleItem(item.id)"
            class="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/50 cursor-pointer"
          >
            <span class="font-bold text-sm sm:text-base text-zinc-800 dark:text-zinc-200">
              {{ item.question }}
            </span>

            <span
              class="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 transition-transform duration-200"
              :class="{ 'rotate-45 text-blue-500': activeIds.includes(item.id) }"
            >
              <Plus class="h-4 w-4" />
            </span>
          </button>

          <!-- 展开内容区 -->
          <transition name="faq-collapse">
            <div v-if="activeIds.includes(item.id)" class="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-900">
              {{ item.answer }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-collapse-enter-active,
.faq-collapse-leave-active {
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.faq-collapse-enter-from,
.faq-collapse-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
`,usageCode:`<script setup lang="ts">
import FaqAccordionBlock from '@/components/ui/FaqAccordionBlock.vue'
<\/script>

<template>
  <FaqAccordionBlock />
</template>`,propsList:[{name:"title",type:"string",default:"'常见问题解答 (FAQ)'",description:"模块标题"},{name:"subtitle",type:"string",default:"副标题说明",description:"模块副标题"},{name:"items",type:"FaqItem[]",default:"内置核心 4 大问答",description:"问答数据项列表"},{name:"multiple",type:"boolean",default:"false",description:"是否支持多项同时展开"}]}],C0={class:"sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80 transition-colors"},S0={class:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"},M0={class:"flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-md shadow-blue-500/20 text-white transition-transform duration-300 group-hover:scale-105"},I0={class:"hidden md:flex items-center gap-6 text-sm font-medium"},A0={class:"flex items-center gap-3"},$0={href:"https://github.com",target:"_blank",rel:"noopener noreferrer",class:"flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",title:"GitHub 仓库"},P0=ee({__name:"Header",setup(e){return(t,n)=>{const r=Lr("router-link");return f(),x("header",C0,[s("div",S0,[k(r,{to:"/",class:"flex items-center gap-2.5 group"},{default:U(()=>[s("div",M0,[k(I(Le),{class:"h-5 w-5"})]),n[0]||(n[0]=s("div",{class:"flex flex-col"},[s("div",{class:"flex items-center gap-1.5"},[s("span",{class:"text-lg font-black tracking-tight text-zinc-900 dark:text-white"},[$e(" Aura"),s("span",{class:"text-blue-600 dark:text-blue-400"},"UI")]),s("span",{class:"rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300"}," Vue 3.5 ")]),s("span",{class:"text-[10px] text-zinc-400"},"动效原子代码库")],-1))]),_:1}),s("nav",I0,[k(r,{to:"/",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:U(()=>[...n[1]||(n[1]=[$e(" 官网首页 ",-1)])]),_:1}),k(r,{to:"/docs/border-beam",class:"inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white","active-class":"!text-blue-600 dark:!text-blue-400 font-semibold"},{default:U(()=>[k(I(Bt),{class:"h-4 w-4"}),s("span",null,"组件库 ("+A(I(pn).length)+")",1)]),_:1}),n[2]||(n[2]=s("a",{href:"#features",class:"text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}," 核心特性 ",-1))]),s("div",A0,[k(_0),s("a",$0,[k(I(s0),{class:"h-4 w-4"})]),k(r,{to:"/docs/border-beam",class:"hidden sm:inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"},{default:U(()=>[...n[3]||(n[3]=[$e(" 浏览代码 ",-1)])]),_:1})])])])}}}),T0={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50 transition-colors"},R0={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},E0={class:"flex flex-col md:flex-row items-center justify-between gap-6"},F0={class:"flex items-center gap-3"},L0={class:"flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"},D0={class:"flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"},V0={class:"inline-flex items-center gap-1"},O0=ee({__name:"Footer",setup(e){return(t,n)=>(f(),x("footer",T0,[s("div",R0,[s("div",E0,[s("div",F0,[s("div",L0,[k(I(Le),{class:"h-4 w-4"})]),n[0]||(n[0]=s("div",null,[s("p",{class:"text-sm font-bold text-zinc-900 dark:text-zinc-100"}," Aura UI (Vue 3) "),s("p",{class:"text-xs text-zinc-500 dark:text-zinc-400"}," 对标 Magic UI / Aceternity UI，属于 Vue 3 的动效原子代码库 ")],-1))]),s("div",D0,[n[3]||(n[3]=s("span",null,"采用 MIT 协议开源，完全支持 Copy & Paste 即用",-1)),n[4]||(n[4]=s("span",null,"•",-1)),s("span",V0,[n[1]||(n[1]=$e(" Built with ",-1)),k(I(i0),{class:"h-3 w-3 text-red-500 fill-red-500"}),n[2]||(n[2]=$e(" for Vue 3 ecosystem ",-1))])])])])]))}}),B0={class:"min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-200"},j0={class:"flex-1"},N0=ee({__name:"App",setup(e){return(t,n)=>{const r=Lr("router-view");return f(),x("div",B0,[k(P0),s("div",j0,[k(r)]),k(O0)])}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const On=typeof document<"u";function Rc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function H0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Rc(e.default)}const Ne=Object.assign;function rs(e,t){const n={};for(const r in t){const o=t[r];n[r]=Tt(o)?o.map(e):e(o)}return n}const wr=()=>{},Tt=Array.isArray;function pa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Ec=/#/g,G0=/&/g,U0=/\//g,q0=/=/g,X0=/\?/g,Fc=/\+/g,W0=/%5B/g,Y0=/%5D/g,Lc=/%5E/g,K0=/%60/g,Dc=/%7B/g,Z0=/%7C/g,Vc=/%7D/g,Q0=/%20/g;function pi(e){return e==null?"":encodeURI(""+e).replace(Z0,"|").replace(W0,"[").replace(Y0,"]")}function J0(e){return pi(e).replace(Dc,"{").replace(Vc,"}").replace(Lc,"^")}function Ls(e){return pi(e).replace(Fc,"%2B").replace(Q0,"+").replace(Ec,"%23").replace(G0,"%26").replace(K0,"`").replace(Dc,"{").replace(Vc,"}").replace(Lc,"^")}function ef(e){return Ls(e).replace(q0,"%3D")}function tf(e){return pi(e).replace(Ec,"%23").replace(X0,"%3F")}function nf(e){return tf(e).replace(U0,"%2F")}function Tr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const rf=/\/$/,of=e=>e.replace(rf,"");function os(e,t,n="/"){let r,o={},i="",l="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=t.slice(0,c),i=t.slice(c,a>0?a:t.length),o=e(i.slice(1))),a>=0&&(r=r||t.slice(0,a),l=t.slice(a,t.length)),r=cf(r??t,n),{fullPath:r+i+l,path:r,query:o,hash:Tr(l)}}function sf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function fa(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function af(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Kn(t.matched[r],n.matched[o])&&Oc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Kn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Oc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!lf(e[n],t[n]))return!1;return!0}function lf(e,t){return Tt(e)?ma(e,t):Tt(t)?ma(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function ma(e,t){return Tt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function cf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=n.length-1,l,a;for(l=0;l<r.length;l++)if(a=r[l],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(l).join("/")}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ds=(function(e){return e.pop="pop",e.push="push",e})({}),ss=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function df(e){if(!e)if(On){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),of(e)}const uf=/^[^#]+#/;function pf(e,t){return e.replace(uf,"#")+t}function ff(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Bo=()=>({left:window.scrollX,top:window.scrollY});function mf(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=ff(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ba(e,t){return(history.state?history.state.position-t:-1)+e}const Vs=new Map;function bf(e,t){Vs.set(e,t)}function xf(e){const t=Vs.get(e);return Vs.delete(e),t}function gf(e){return typeof e=="string"||e&&typeof e=="object"}function Bc(e){return typeof e=="string"||typeof e=="symbol"}let Ze=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const jc=Symbol("");Ze.MATCHER_NOT_FOUND+"",Ze.NAVIGATION_GUARD_REDIRECT+"",Ze.NAVIGATION_ABORTED+"",Ze.NAVIGATION_CANCELLED+"",Ze.NAVIGATION_DUPLICATED+"";function Zn(e,t){return Ne(new Error,{type:e,[jc]:!0},t)}function Yt(e,t){return e instanceof Error&&jc in e&&(t==null||!!(e.type&t))}const hf=["params","query","hash"];function vf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of hf)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function yf(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const o=n[r].replace(Fc," "),i=o.indexOf("="),l=Tr(i<0?o:o.slice(0,i)),a=i<0?null:Tr(o.slice(i+1));if(l in t){let c=t[l];Tt(c)||(c=t[l]=[c]),c.push(a)}else t[l]=a}return t}function xa(e){let t="";for(let n in e){const r=e[n];if(n=ef(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Tt(r)?r.map(o=>o&&Ls(o)):[r&&Ls(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function wf(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Tt(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const kf=Symbol(""),ga=Symbol(""),fi=Symbol(""),mi=Symbol(""),Os=Symbol("");function ir(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function un(e,t,n,r,o,i=l=>l()){const l=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const d=b=>{b===!1?c(Zn(Ze.NAVIGATION_ABORTED,{from:n,to:t})):b instanceof Error?c(b):gf(b)?c(Zn(Ze.NAVIGATION_GUARD_REDIRECT,{from:t,to:b})):(l&&r.enterCallbacks[o]===l&&typeof b=="function"&&l.push(b),a())},p=i(()=>e.call(r&&r.instances[o],t,n,d));let u=Promise.resolve(p);e.length<3&&(u=u.then(d)),u.catch(b=>c(b))})}function is(e,t,n,r,o=i=>i()){const i=[];for(const l of e)for(const a in l.components){let c=l.components[a];if(!(t!=="beforeRouteEnter"&&!l.instances[a]))if(Rc(c)){const d=(c.__vccOpts||c)[t];d&&i.push(un(d,n,r,l,a,o))}else{let d=c();i.push(()=>d.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${a}" at "${l.path}"`);const u=H0(p)?p.default:p;l.mods[a]=p,l.components[a]=u;const b=(u.__vccOpts||u)[t];return b&&un(b,n,r,l,a,o)()}))}}return i}function zf(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let l=0;l<i;l++){const a=t.matched[l];a&&(e.matched.find(d=>Kn(d,a))?r.push(a):n.push(a));const c=e.matched[l];c&&(t.matched.find(d=>Kn(d,c))||o.push(c))}return[n,r,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let _f=()=>location.protocol+"//"+location.host;function Nc(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let l=o.includes(e.slice(i))?e.slice(i).length:1,a=o.slice(l);return a[0]!=="/"&&(a="/"+a),fa(a,"")}return fa(n,e)+r+o}function Cf(e,t,n,r){let o=[],i=[],l=null;const a=({state:b})=>{const m=Nc(e,location),h=n.value,g=t.value;let z=0;if(b){if(n.value=m,t.value=b,l&&l===h){l=null;return}z=g?b.position-g.position:0}else r(m);o.forEach(_=>{_(n.value,h,{delta:z,type:Ds.pop,direction:z?z>0?ss.forward:ss.back:ss.unknown})})};function c(){l=n.value}function d(b){o.push(b);const m=()=>{const h=o.indexOf(b);h>-1&&o.splice(h,1)};return i.push(m),m}function p(){if(document.visibilityState==="hidden"){const{history:b}=window;if(!b.state)return;b.replaceState(Ne({},b.state,{scroll:Bo()}),"")}}function u(){for(const b of i)b();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",p),document.removeEventListener("visibilitychange",p)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",p),document.addEventListener("visibilitychange",p),{pauseListeners:c,listen:d,destroy:u}}function ha(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?Bo():null}}function Sf(e){const{history:t,location:n}=window,r={value:Nc(e,n)},o={value:t.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,d,p){const u=e.indexOf("#"),b=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+c:_f()+e+c;try{t[p?"replaceState":"pushState"](d,"",b),o.value=d}catch(m){console.error(m),n[p?"replace":"assign"](b)}}function l(c,d){i(c,Ne({},t.state,ha(o.value.back,c,o.value.forward,!0),d,{position:o.value.position}),!0),r.value=c}function a(c,d){const p=Ne({},o.value,t.state,{forward:c,scroll:Bo()});i(p.current,p,!0),i(c,Ne({},ha(r.value,c,null),{position:p.position+1},d),!1),r.value=c}return{location:r,state:o,push:a,replace:l}}function Mf(e){e=df(e);const t=Sf(e),n=Cf(e,t.state,t.location,t.replace);function r(i,l=!0){l||n.pauseListeners(),history.go(i)}const o=Ne({location:"",base:e,go:r,createHref:pf.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let In=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var rt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(rt||{});const If={type:In.Static,value:""},Af=/[a-zA-Z0-9_]/;function $f(e){if(!e)return[[]];if(e==="/")return[[If]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${d}": ${m}`)}let n=rt.Static,r=n;const o=[];let i;function l(){i&&o.push(i),i=[]}let a=0,c,d="",p="";function u(){d&&(n===rt.Static?i.push({type:In.Static,value:d}):n===rt.Param||n===rt.ParamRegExp||n===rt.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),i.push({type:In.Param,value:d,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),d="")}function b(){d+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==rt.ParamRegExp){r=n,n=rt.EscapeNext;continue}switch(n){case rt.Static:c==="/"?(d&&u(),l()):c===":"?(u(),n=rt.Param):b();break;case rt.EscapeNext:b(),n=r;break;case rt.Param:c==="("?n=rt.ParamRegExp:Af.test(c)?b():(u(),n=rt.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case rt.ParamRegExp:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=rt.ParamRegExpEnd:p+=c;break;case rt.ParamRegExpEnd:u(),n=rt.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,p="";break;default:t("Unknown state");break}}return n===rt.ParamRegExp&&t(`Unfinished custom RegExp for param "${d}"`),u(),l(),o}const va="[^/]+?",Pf={sensitive:!1,strict:!1,start:!0,end:!0};var gt=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(gt||{});const Tf=/[.+*?^${}()[\]/\\]/g;function Rf(e,t){const n=Ne({},Pf,t),r=[];let o=n.start?"^":"";const i=[];for(const d of e){const p=d.length?[]:[gt.Root];n.strict&&!d.length&&(o+="/");for(let u=0;u<d.length;u++){const b=d[u];let m=gt.Segment+(n.sensitive?gt.BonusCaseSensitive:0);if(b.type===In.Static)u||(o+="/"),o+=b.value.replace(Tf,"\\$&"),m+=gt.Static;else if(b.type===In.Param){const{value:h,repeatable:g,optional:z,regexp:_}=b;i.push({name:h,repeatable:g,optional:z});const y=_||va;if(y!==va){m+=gt.BonusCustomRegExp;try{`${y}`}catch(w){throw new Error(`Invalid custom RegExp for param "${h}" (${y}): `+w.message)}}let C=g?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;u||(C=z&&d.length<2?`(?:/${C})`:"/"+C),z&&(C+="?"),o+=C,m+=gt.Dynamic,z&&(m+=gt.BonusOptional),g&&(m+=gt.BonusRepeatable),y===".*"&&(m+=gt.BonusWildcard)}p.push(m)}r.push(p)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=gt.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const l=new RegExp(o,n.sensitive?"":"i");function a(d){const p=d.match(l),u={};if(!p)return null;for(let b=1;b<p.length;b++){const m=p[b]||"",h=i[b-1];u[h.name]=m&&h.repeatable?m.split("/"):m}return u}function c(d){let p="",u=!1;for(const b of e){(!u||!p.endsWith("/"))&&(p+="/"),u=!1;for(const m of b)if(m.type===In.Static)p+=m.value;else if(m.type===In.Param){const{value:h,repeatable:g,optional:z}=m,_=h in d?d[h]:"";if(Tt(_)&&!g)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const y=Tt(_)?_.join("/"):_;if(!y)if(z)b.length<2&&(p.endsWith("/")?p=p.slice(0,-1):u=!0);else throw new Error(`Missing required param "${h}"`);p+=y}}return p||"/"}return{re:l,score:r,keys:i,parse:a,stringify:c}}function Ef(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===gt.Static+gt.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===gt.Static+gt.Segment?1:-1:0}function Hc(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const i=Ef(r[n],o[n]);if(i)return i;n++}if(Math.abs(o.length-r.length)===1){if(ya(r))return 1;if(ya(o))return-1}return o.length-r.length}function ya(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ff={strict:!1,end:!0,sensitive:!1};function Lf(e,t,n){const r=Rf($f(e.path),n),o=Ne(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Df(e,t){const n=[],r=new Map;t=pa(Ff,t);function o(u){return r.get(u)}function i(u,b,m){const h=!m,g=ka(u);g.aliasOf=m&&m.record;const z=pa(t,u),_=[g];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of w)_.push(ka(Ne({},g,{components:m?m.record.components:g.components,path:T,aliasOf:m?m.record:g})))}let y,C;for(const w of _){const{path:T}=w;if(b&&T[0]!=="/"){const F=b.record.path,D=F[F.length-1]==="/"?"":"/";w.path=b.record.path+(T&&D+T)}if(y=Lf(w,b,z),m?m.alias.push(y):(C=C||y,C!==y&&C.alias.push(y),h&&u.name&&!za(y)&&l(u.name)),Gc(y)&&c(y),g.children){const F=g.children;for(let D=0;D<F.length;D++)i(F[D],y,m&&m.children[D])}m=m||y}return C?()=>{l(C)}:wr}function l(u){if(Bc(u)){const b=r.get(u);b&&(r.delete(u),n.splice(n.indexOf(b),1),b.children.forEach(l),b.alias.forEach(l))}else{const b=n.indexOf(u);b>-1&&(n.splice(b,1),u.record.name&&r.delete(u.record.name),u.children.forEach(l),u.alias.forEach(l))}}function a(){return n}function c(u){const b=Bf(u,n);n.splice(b,0,u),u.record.name&&!za(u)&&r.set(u.record.name,u)}function d(u,b){let m,h={},g,z;if("name"in u&&u.name){if(m=r.get(u.name),!m)throw Zn(Ze.MATCHER_NOT_FOUND,{location:u});z=m.record.name,h=Ne(wa(b.params,m.keys.filter(C=>!C.optional).concat(m.parent?m.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),u.params&&wa(u.params,m.keys.map(C=>C.name))),g=m.stringify(h)}else if(u.path!=null)g=u.path,m=n.find(C=>C.re.test(g)),m&&(h=m.parse(g),z=m.record.name);else{if(m=b.name?r.get(b.name):n.find(C=>C.re.test(b.path)),!m)throw Zn(Ze.MATCHER_NOT_FOUND,{location:u,currentLocation:b});z=m.record.name,h=Ne({},b.params,u.params),g=m.stringify(h)}const _=[];let y=m;for(;y;)_.unshift(y.record),y=y.parent;return{name:z,path:g,params:h,matched:_,meta:Of(_)}}e.forEach(u=>i(u));function p(){n.length=0,r.clear()}return{addRoute:i,resolve:d,removeRoute:l,clearRoutes:p,getRoutes:a,getRecordMatcher:o}}function wa(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ka(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Vf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Vf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function za(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Of(e){return e.reduce((t,n)=>Ne(t,n.meta),{})}function Bf(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Hc(e,t[i])<0?r=i:n=i+1}const o=jf(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function jf(e){let t=e;for(;t=t.parent;)if(Gc(t)&&Hc(e,t)===0)return t}function Gc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function _a(e){const t=Nt(fi),n=Nt(mi),r=ie(()=>{const c=I(e.to);return t.resolve(c)}),o=ie(()=>{const{matched:c}=r.value,{length:d}=c,p=c[d-1],u=n.matched;if(!p||!u.length)return-1;const b=u.findIndex(Kn.bind(null,p));if(b>-1)return b;const m=Ca(c[d-2]);return d>1&&Ca(p)===m&&u[u.length-1].path!==m?u.findIndex(Kn.bind(null,c[d-2])):b}),i=ie(()=>o.value>-1&&qf(n.params,r.value.params)),l=ie(()=>o.value>-1&&o.value===n.matched.length-1&&Oc(n.params,r.value.params));function a(c={}){if(Uf(c)){const d=t[I(e.replace)?"replace":"push"](I(e.to)).catch(wr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:r,href:ie(()=>r.value.href),isActive:i,isExactActive:l,navigate:a}}function Nf(e){return e.length===1?e[0]:e}const Hf=ee({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_a,setup(e,{slots:t}){const n=Ao(_a(e)),{options:r}=Nt(fi),o=ie(()=>({[Sa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Nf(t.default(n));return e.custom?i:Wn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Gf=Hf;function Uf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qf(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Tt(o)||o.length!==r.length||r.some((i,l)=>i.valueOf()!==o[l].valueOf()))return!1}return!0}function Ca(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Sa=(e,t,n)=>e??t??n,Xf=ee({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Nt(Os),o=ie(()=>e.route||r.value),i=Nt(ga,0),l=ie(()=>{let d=I(i);const{matched:p}=o.value;let u;for(;(u=p[d])&&!u.components;)d++;return d}),a=ie(()=>o.value.matched[l.value]);Jr(ga,ie(()=>l.value+1)),Jr(kf,a),Jr(Os,o);const c=P();return Xe(()=>[c.value,a.value,e.name],([d,p,u],[b,m,h])=>{p&&(p.instances[u]=d,m&&m!==p&&d&&d===b&&(p.leaveGuards.size||(p.leaveGuards=m.leaveGuards),p.updateGuards.size||(p.updateGuards=m.updateGuards))),d&&p&&(!m||!Kn(p,m)||!b)&&(p.enterCallbacks[u]||[]).forEach(g=>g(d))},{flush:"post"}),()=>{const d=o.value,p=e.name,u=a.value,b=u&&u.components[p];if(!b)return Ma(n.default,{Component:b,route:d});const m=u.props[p],h=m?m===!0?d.params:typeof m=="function"?m(d):m:null,z=Wn(b,Ne({},h,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(u.instances[p]=null)},ref:c}));return Ma(n.default,{Component:z,route:d})||z}}});function Ma(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wf=Xf;function Yf(e){const t=Df(e.routes,e),n=e.parseQuery||yf,r=e.stringifyQuery||xa,o=e.history,i=ir(),l=ir(),a=ir(),c=Yd(sn);let d=sn;On&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=rs.bind(null,O=>""+O),u=rs.bind(null,nf),b=rs.bind(null,Tr);function m(O,ce){let X,ge;return Bc(O)?(X=t.getRecordMatcher(O),ge=ce):ge=O,t.addRoute(ge,X)}function h(O){const ce=t.getRecordMatcher(O);ce&&t.removeRoute(ce)}function g(){return t.getRoutes().map(O=>O.record)}function z(O){return!!t.getRecordMatcher(O)}function _(O,ce){if(ce=Ne({},ce||c.value),typeof O=="string"){const V=os(n,O,ce.path),B=t.resolve({path:V.path},ce),j=o.createHref(V.fullPath);return Ne(V,B,{params:b(B.params),hash:Tr(V.hash),redirectedFrom:void 0,href:j})}let X;if(O.path!=null)X=Ne({},O,{path:os(n,O.path,ce.path).path});else{const V=Ne({},O.params);for(const B in V)V[B]==null&&delete V[B];X=Ne({},O,{params:u(V)}),ce.params=u(ce.params)}const ge=t.resolve(X,ce),S=O.hash||"";ge.params=p(b(ge.params));const $=sf(r,Ne({},O,{hash:J0(S),path:ge.path})),E=o.createHref($);return Ne({fullPath:$,hash:S,query:r===xa?wf(O.query):O.query||{}},ge,{redirectedFrom:void 0,href:E})}function y(O){return typeof O=="string"?os(n,O,c.value.path):Ne({},O)}function C(O,ce){if(d!==O)return Zn(Ze.NAVIGATION_CANCELLED,{from:ce,to:O})}function w(O){return D(O)}function T(O){return w(Ne(y(O),{replace:!0}))}function F(O,ce){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:ge}=X;let S=typeof ge=="function"?ge(O,ce):ge;return typeof S=="string"&&(S=S.includes("?")||S.includes("#")?S=y(S):{path:S},S.params={}),Ne({query:O.query,hash:O.hash,params:S.path!=null?{}:O.params},S)}}function D(O,ce){const X=d=_(O),ge=c.value,S=O.state,$=O.force,E=O.replace===!0,V=F(X,ge);if(V)return D(Ne(y(V),{state:typeof V=="object"?Ne({},S,V.state):S,force:$,replace:E}),ce||X);const B=X;B.redirectedFrom=ce;let j;return!$&&af(r,ge,X)&&(j=Zn(Ze.NAVIGATION_DUPLICATED,{to:B,from:ge}),Re(ge,ge,!0,!1)),(j?Promise.resolve(j):Z(B,ge)).catch(K=>Yt(K)?Yt(K,Ze.NAVIGATION_GUARD_REDIRECT)?K:J(K):W(K,B,ge)).then(K=>{if(K){if(Yt(K,Ze.NAVIGATION_GUARD_REDIRECT))return D(Ne({replace:E},y(K.to),{state:typeof K.to=="object"?Ne({},S,K.to.state):S,force:$}),ce||B)}else K=q(B,ge,!0,E,S);return le(B,ge,K),K})}function R(O,ce){const X=C(O,ce);return X?Promise.reject(X):Promise.resolve()}function L(O){const ce=Ue.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(O):O()}function Z(O,ce){let X;const[ge,S,$]=zf(O,ce);X=is(ge.reverse(),"beforeRouteLeave",O,ce);for(const V of ge)V.leaveGuards.forEach(B=>{X.push(un(B,O,ce))});const E=R.bind(null,O,ce);return X.push(E),Ce(X).then(()=>{X=[];for(const V of i.list())X.push(un(V,O,ce));return X.push(E),Ce(X)}).then(()=>{X=is(S,"beforeRouteUpdate",O,ce);for(const V of S)V.updateGuards.forEach(B=>{X.push(un(B,O,ce))});return X.push(E),Ce(X)}).then(()=>{X=[];for(const V of $)if(V.beforeEnter)if(Tt(V.beforeEnter))for(const B of V.beforeEnter)X.push(un(B,O,ce));else X.push(un(V.beforeEnter,O,ce));return X.push(E),Ce(X)}).then(()=>(O.matched.forEach(V=>V.enterCallbacks={}),X=is($,"beforeRouteEnter",O,ce,L),X.push(E),Ce(X))).then(()=>{X=[];for(const V of l.list())X.push(un(V,O,ce));return X.push(E),Ce(X)}).catch(V=>Yt(V,Ze.NAVIGATION_CANCELLED)?V:Promise.reject(V))}function le(O,ce,X){a.list().forEach(ge=>L(()=>ge(O,ce,X)))}function q(O,ce,X,ge,S){const $=C(O,ce);if($)return $;const E=ce===sn,V=On?history.state:{};X&&(ge||E?o.replace(O.fullPath,Ne({scroll:E&&V&&V.scroll},S)):o.push(O.fullPath,S)),c.value=O,Re(O,ce,X,E),J()}let be;function _e(){be||(be=o.listen((O,ce,X)=>{if(!Te.listening)return;const ge=_(O),S=F(ge,Te.currentRoute.value);if(S){D(Ne(S,{replace:!0,force:!0}),ge).catch(wr);return}d=ge;const $=c.value;On&&bf(ba($.fullPath,X.delta),Bo()),Z(ge,$).catch(E=>Yt(E,Ze.NAVIGATION_ABORTED|Ze.NAVIGATION_CANCELLED)?E:Yt(E,Ze.NAVIGATION_GUARD_REDIRECT)?(D(Ne(y(E.to),{force:!0}),ge).then(V=>{Yt(V,Ze.NAVIGATION_ABORTED|Ze.NAVIGATION_DUPLICATED)&&!X.delta&&X.type===Ds.pop&&o.go(-1,!1)}).catch(wr),Promise.reject()):(X.delta&&o.go(-X.delta,!1),W(E,ge,$))).then(E=>{E=E||q(ge,$,!1),E&&(X.delta&&!Yt(E,Ze.NAVIGATION_CANCELLED)?o.go(-X.delta,!1):X.type===Ds.pop&&Yt(E,Ze.NAVIGATION_ABORTED|Ze.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),le(ge,$,E)}).catch(wr)}))}let ze=ir(),Q=ir(),te;function W(O,ce,X){J(O);const ge=Q.list();return ge.length?ge.forEach(S=>S(O,ce,X)):console.error(O),Promise.reject(O)}function we(){return te&&c.value!==sn?Promise.resolve():new Promise((O,ce)=>{ze.add([O,ce])})}function J(O){return te||(te=!O,_e(),ze.list().forEach(([ce,X])=>O?X(O):ce()),ze.reset()),O}function Re(O,ce,X,ge){const{scrollBehavior:S}=e;if(!On||!S)return Promise.resolve();const $=!X&&xf(ba(O.fullPath,0))||(ge||!X)&&history.state&&history.state.scroll||null;return Hn().then(()=>S(O,ce,$)).then(E=>E&&mf(E)).catch(E=>W(E,O,ce))}const Me=O=>o.go(O);let ot;const Ue=new Set,Te={currentRoute:c,listening:!0,addRoute:m,removeRoute:h,clearRoutes:t.clearRoutes,hasRoute:z,getRoutes:g,resolve:_,options:e,push:w,replace:T,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:l.add,afterEach:a.add,onError:Q.add,isReady:we,install(O){O.component("RouterLink",Gf),O.component("RouterView",Wf),O.config.globalProperties.$router=Te,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>I(c)}),On&&!ot&&c.value===sn&&(ot=!0,w(o.location).catch(ge=>{}));const ce={};for(const ge in sn)Object.defineProperty(ce,ge,{get:()=>c.value[ge],enumerable:!0});O.provide(fi,Te),O.provide(mi,vl(ce)),O.provide(Os,c);const X=O.unmount;Ue.add(O),O.unmount=function(){Ue.delete(O),Ue.size<1&&(d=sn,be&&be(),be=null,c.value=sn,ot=!1,te=!1),X()}}};function Ce(O){return O.reduce((ce,X)=>ce.then(()=>L(X)),Promise.resolve())}return Te}function Kf(e){return Nt(mi)}function Uc(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Uc(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Zf(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Uc(e))&&(r&&(r+=" "),r+=t);return r}const Qf=(e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Jf=(e,t)=>({classGroupId:e,validator:t}),qc=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),yo="-",Ia=[],em="arbitrary..",tm=e=>{const t=rm(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:l=>{if(l.startsWith("[")&&l.endsWith("]"))return nm(l);const a=l.split(yo),c=a[0]===""&&a.length>1?1:0;return Xc(a,c,t)},getConflictingClassGroupIds:(l,a)=>{if(a){const c=r[l],d=n[l];return c?d?Qf(d,c):c:d||Ia}return n[l]||Ia}}},Xc=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const o=e[t],i=n.nextPart.get(o);if(i){const d=Xc(e,t+1,i);if(d)return d}const l=n.validators;if(l===null)return;const a=t===0?e.join(yo):e.slice(t).join(yo),c=l.length;for(let d=0;d<c;d++){const p=l[d];if(p.validator(a))return p.classGroupId}},nm=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?em+r:void 0})(),rm=e=>{const{theme:t,classGroups:n}=e;return om(n,t)},om=(e,t)=>{const n=qc();for(const r in e){const o=e[r];bi(o,n,r,t)}return n},bi=(e,t,n,r)=>{const o=e.length;for(let i=0;i<o;i++){const l=e[i];sm(l,t,n,r)}},sm=(e,t,n,r)=>{if(typeof e=="string"){im(e,t,n);return}if(typeof e=="function"){am(e,t,n,r);return}lm(e,t,n,r)},im=(e,t,n)=>{const r=e===""?t:Wc(t,e);r.classGroupId=n},am=(e,t,n,r)=>{if(cm(e)){bi(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Jf(n,e))},lm=(e,t,n,r)=>{const o=Object.entries(e),i=o.length;for(let l=0;l<i;l++){const[a,c]=o[l];bi(c,Wc(t,a),n,r)}},Wc=(e,t)=>{let n=e;const r=t.split(yo),o=r.length;for(let i=0;i<o;i++){const l=r[i];let a=n.nextPart.get(l);a||(a=qc(),n.nextPart.set(l,a)),n=a}return n},cm=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,dm=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const o=(i,l)=>{n[i]=l,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(i){let l=n[i];if(l!==void 0)return l;if((l=r[i])!==void 0)return o(i,l),l},set(i,l){i in n?n[i]=l:o(i,l)}}},Bs="!",Aa=":",um=[],$a=(e,t,n,r,o)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:o}),pm=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=o=>{const i=[];let l=0,a=0,c=0,d;const p=o.length;for(let g=0;g<p;g++){const z=o[g];if(l===0&&a===0){if(z===Aa){i.push(o.slice(c,g)),c=g+1;continue}if(z==="/"){d=g;continue}}z==="["?l++:z==="]"?l--:z==="("?a++:z===")"&&a--}const u=i.length===0?o:o.slice(c);let b=u,m=!1;u.endsWith(Bs)?(b=u.slice(0,-1),m=!0):u.startsWith(Bs)&&(b=u.slice(1),m=!0);const h=d&&d>c?d-c:void 0;return $a(i,m,b,h)};if(t){const o=t+Aa,i=r;r=l=>l.startsWith(o)?i(l.slice(o.length)):$a(um,!1,l,void 0,!0)}if(n){const o=r;r=i=>n({className:i,parseClassName:o})}return r},fm=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{t.set(n,1e6+r)}),n=>{const r=[];let o=[];for(let i=0;i<n.length;i++){const l=n[i],a=l[0]==="[",c=t.has(l);a||c?(o.length>0&&(o.sort(),r.push(...o),o=[]),r.push(l)):o.push(l)}return o.length>0&&(o.sort(),r.push(...o)),r}},mm=e=>({cache:dm(e.cacheSize),parseClassName:pm(e),sortModifiers:fm(e),postfixLookupClassGroupIds:bm(e),...tm(e)}),bm=e=>{const t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let r=0;r<n.length;r++)t[n[r]]=!0;return t},xm=/\s+/,gm=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:i,postfixLookupClassGroupIds:l}=t,a=[],c=e.trim().split(xm);let d="";for(let p=c.length-1;p>=0;p-=1){const u=c[p],{isExternal:b,modifiers:m,hasImportantModifier:h,baseClassName:g,maybePostfixModifierPosition:z}=n(u);if(b){d=u+(d.length>0?" "+d:d);continue}let _=!!z,y;if(_){const D=g.substring(0,z);y=r(D);const R=y&&l[y]?r(g):void 0;R&&R!==y&&(y=R,_=!1)}else y=r(g);if(!y){if(!_){d=u+(d.length>0?" "+d:d);continue}if(y=r(g),!y){d=u+(d.length>0?" "+d:d);continue}_=!1}const C=m.length===0?"":m.length===1?m[0]:i(m).join(":"),w=h?C+Bs:C,T=w+y;if(a.indexOf(T)>-1)continue;a.push(T);const F=o(y,_);for(let D=0;D<F.length;++D){const R=F[D];a.push(w+R)}d=u+(d.length>0?" "+d:d)}return d},hm=(...e)=>{let t=0,n,r,o="";for(;t<e.length;)(n=e[t++])&&(r=Yc(n))&&(o&&(o+=" "),o+=r);return o},Yc=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Yc(e[r]))&&(n&&(n+=" "),n+=t);return n},vm=(e,...t)=>{let n,r,o,i;const l=c=>{const d=t.reduce((p,u)=>u(p),e());return n=mm(d),r=n.cache.get,o=n.cache.set,i=a,a(c)},a=c=>{const d=r(c);if(d)return d;const p=gm(c,n);return o(c,p),p};return i=l,(...c)=>i(hm(...c))},ym=[],nt=e=>{const t=n=>n[e]||ym;return t.isThemeGetter=!0,t.themeKey=e,t},Kc=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Zc=/^\((?:(\w[\w-]*):)?(.+)\)$/i,wm=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,km=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,zm=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,_m=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,Cm=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Sm=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,an=e=>wm.test(e),Ie=e=>!!e&&!Number.isNaN(Number(e)),Et=e=>!!e&&Number.isInteger(Number(e)),as=e=>e.endsWith("%")&&Ie(e.slice(0,-1)),Kt=e=>km.test(e),Qc=()=>!0,Mm=e=>zm.test(e)&&!_m.test(e),xi=()=>!1,Im=e=>Cm.test(e),Am=e=>Sm.test(e),$m=e=>!ue(e)&&!pe(e),Pm=e=>e.startsWith("@container")&&(e[10]==="/"&&e[11]!==void 0||e[11]==="s"&&e[16]!==void 0&&e.startsWith("-size/",10)||e[11]==="n"&&e[18]!==void 0&&e.startsWith("-normal/",10)),Tm=e=>vn(e,td,xi),ue=e=>Kc.test(e),zn=e=>vn(e,nd,Mm),Pa=e=>vn(e,Bm,Ie),Rm=e=>vn(e,od,Qc),Em=e=>vn(e,rd,xi),Ta=e=>vn(e,Jc,xi),Fm=e=>vn(e,ed,Am),Yr=e=>vn(e,sd,Im),pe=e=>Zc.test(e),ar=e=>En(e,nd),Lm=e=>En(e,rd),Ra=e=>En(e,Jc),Dm=e=>En(e,td),Vm=e=>En(e,ed),Kr=e=>En(e,sd,!0),Om=e=>En(e,od,!0),vn=(e,t,n)=>{const r=Kc.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},En=(e,t,n=!1)=>{const r=Zc.exec(e);return r?r[1]?t(r[1]):n:!1},Jc=e=>e==="position"||e==="percentage",ed=e=>e==="image"||e==="url",td=e=>e==="length"||e==="size"||e==="bg-size",nd=e=>e==="length",Bm=e=>e==="number",rd=e=>e==="family-name",od=e=>e==="number"||e==="weight",sd=e=>e==="shadow",jm=()=>{const e=nt("color"),t=nt("font"),n=nt("text"),r=nt("font-weight"),o=nt("tracking"),i=nt("leading"),l=nt("breakpoint"),a=nt("container"),c=nt("spacing"),d=nt("radius"),p=nt("shadow"),u=nt("inset-shadow"),b=nt("text-shadow"),m=nt("drop-shadow"),h=nt("blur"),g=nt("perspective"),z=nt("aspect"),_=nt("ease"),y=nt("animate"),C=()=>["auto","avoid","all","avoid-page","page","left","right","column"],w=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],T=()=>[...w(),pe,ue],F=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto","contain","none"],R=()=>[pe,ue,c],L=()=>[an,"full","auto",...R()],Z=()=>[Et,"none","subgrid",pe,ue],le=()=>["auto",{span:["full",Et,pe,ue]},Et,pe,ue],q=()=>[Et,"auto",pe,ue],be=()=>["auto","min","max","fr",pe,ue],_e=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ze=()=>["start","end","center","stretch","center-safe","end-safe"],Q=()=>["auto",...R()],te=()=>[an,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...R()],W=()=>[a,an,"screen","full","dvw","lvw","svw","min","max","fit",...R()],we=()=>[an,"screen","full","lh","dvh","lvh","svh","min","max","fit",...R()],J=()=>[e,pe,ue],Re=()=>[...w(),Ra,Ta,{position:[pe,ue]}],Me=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ot=()=>["auto","cover","contain",Dm,Tm,{size:[pe,ue]}],Ue=()=>[as,ar,zn],Te=()=>["","none","full",d,pe,ue],Ce=()=>["",Ie,ar,zn],O=()=>["solid","dashed","dotted","double"],ce=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],X=()=>[Ie,as,Ra,Ta],ge=()=>["","none",h,pe,ue],S=()=>["none",Ie,pe,ue],$=()=>["none",Ie,pe,ue],E=()=>[Ie,pe,ue],V=()=>[an,"full",...R()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Kt],breakpoint:[Kt],color:[Qc],container:[Kt],"drop-shadow":[Kt],ease:["in","out","in-out"],font:[$m],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Kt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Kt],shadow:[Kt],spacing:["px",Ie],text:[Kt],"text-shadow":[Kt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",an,ue,pe,z]}],container:["container"],"container-type":[{"@container":["","normal","size",pe,ue]}],"container-named":[Pm],columns:[{columns:[Ie,"auto",ue,pe,a]}],"break-after":[{"break-after":C()}],"break-before":[{"break-before":C()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:T()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:L()}],"inset-x":[{"inset-x":L()}],"inset-y":[{"inset-y":L()}],start:[{"inset-s":L(),start:L()}],end:[{"inset-e":L(),end:L()}],"inset-bs":[{"inset-bs":L()}],"inset-be":[{"inset-be":L()}],top:[{top:L()}],right:[{right:L()}],bottom:[{bottom:L()}],left:[{left:L()}],visibility:["visible","invisible","collapse"],z:[{z:[Et,"auto",pe,ue]}],basis:[{basis:[an,"full","auto",a,...R()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ie,an,"auto","initial","none",ue]}],grow:[{grow:["",Ie,pe,ue]}],shrink:[{shrink:["",Ie,pe,ue]}],order:[{order:[Et,"first","last","none",pe,ue]}],"grid-cols":[{"grid-cols":Z()}],"col-start-end":[{col:le()}],"col-start":[{"col-start":q()}],"col-end":[{"col-end":q()}],"grid-rows":[{"grid-rows":Z()}],"row-start-end":[{row:le()}],"row-start":[{"row-start":q()}],"row-end":[{"row-end":q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":be()}],"auto-rows":[{"auto-rows":be()}],gap:[{gap:R()}],"gap-x":[{"gap-x":R()}],"gap-y":[{"gap-y":R()}],"justify-content":[{justify:[..._e(),"normal"]}],"justify-items":[{"justify-items":[...ze(),"normal"]}],"justify-self":[{"justify-self":["auto",...ze()]}],"align-content":[{content:["normal",..._e()]}],"align-items":[{items:[...ze(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ze(),{baseline:["","last"]}]}],"place-content":[{"place-content":_e()}],"place-items":[{"place-items":[...ze(),"baseline"]}],"place-self":[{"place-self":["auto",...ze()]}],p:[{p:R()}],px:[{px:R()}],py:[{py:R()}],ps:[{ps:R()}],pe:[{pe:R()}],pbs:[{pbs:R()}],pbe:[{pbe:R()}],pt:[{pt:R()}],pr:[{pr:R()}],pb:[{pb:R()}],pl:[{pl:R()}],m:[{m:Q()}],mx:[{mx:Q()}],my:[{my:Q()}],ms:[{ms:Q()}],me:[{me:Q()}],mbs:[{mbs:Q()}],mbe:[{mbe:Q()}],mt:[{mt:Q()}],mr:[{mr:Q()}],mb:[{mb:Q()}],ml:[{ml:Q()}],"space-x":[{"space-x":R()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":R()}],"space-y-reverse":["space-y-reverse"],size:[{size:te()}],"inline-size":[{inline:["auto",...W()]}],"min-inline-size":[{"min-inline":["auto",...W()]}],"max-inline-size":[{"max-inline":["none",...W()]}],"block-size":[{block:["auto",...we()]}],"min-block-size":[{"min-block":["auto",...we()]}],"max-block-size":[{"max-block":["none",...we()]}],w:[{w:[a,"screen",...te()]}],"min-w":[{"min-w":[a,"screen","none",...te()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[l]},...te()]}],h:[{h:["screen","lh",...te()]}],"min-h":[{"min-h":["screen","lh","none",...te()]}],"max-h":[{"max-h":["screen","lh","none",...te()]}],"font-size":[{text:["base",n,ar,zn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Om,Rm]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",as,ue]}],"font-family":[{font:[Lm,Em,t]}],"font-features":[{"font-features":[ue]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,pe,ue]}],"line-clamp":[{"line-clamp":[Ie,"none",pe,Pa]}],leading:[{leading:["none",i,...R()]}],"list-image":[{"list-image":["none",pe,ue]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",pe,ue]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:J()}],"text-color":[{text:J()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...O(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ie,"from-font","auto",pe,zn]}],"text-decoration-color":[{decoration:J()}],"underline-offset":[{"underline-offset":[Ie,"auto",pe,ue]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"tab-size":[{tab:[Et,pe,ue]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",pe,ue]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",pe,ue]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Re()}],"bg-repeat":[{bg:Me()}],"bg-size":[{bg:ot()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Et,pe,ue],radial:["",pe,ue],conic:["",Et,pe,ue]},Vm,Fm]}],"bg-color":[{bg:J()}],"gradient-from-pos":[{from:Ue()}],"gradient-via-pos":[{via:Ue()}],"gradient-to-pos":[{to:Ue()}],"gradient-from":[{from:J()}],"gradient-via":[{via:J()}],"gradient-to":[{to:J()}],rounded:[{rounded:Te()}],"rounded-s":[{"rounded-s":Te()}],"rounded-e":[{"rounded-e":Te()}],"rounded-t":[{"rounded-t":Te()}],"rounded-r":[{"rounded-r":Te()}],"rounded-b":[{"rounded-b":Te()}],"rounded-l":[{"rounded-l":Te()}],"rounded-ss":[{"rounded-ss":Te()}],"rounded-se":[{"rounded-se":Te()}],"rounded-ee":[{"rounded-ee":Te()}],"rounded-es":[{"rounded-es":Te()}],"rounded-tl":[{"rounded-tl":Te()}],"rounded-tr":[{"rounded-tr":Te()}],"rounded-br":[{"rounded-br":Te()}],"rounded-bl":[{"rounded-bl":Te()}],"border-w":[{border:Ce()}],"border-w-x":[{"border-x":Ce()}],"border-w-y":[{"border-y":Ce()}],"border-w-s":[{"border-s":Ce()}],"border-w-e":[{"border-e":Ce()}],"border-w-bs":[{"border-bs":Ce()}],"border-w-be":[{"border-be":Ce()}],"border-w-t":[{"border-t":Ce()}],"border-w-r":[{"border-r":Ce()}],"border-w-b":[{"border-b":Ce()}],"border-w-l":[{"border-l":Ce()}],"divide-x":[{"divide-x":Ce()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ce()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...O(),"hidden","none"]}],"divide-style":[{divide:[...O(),"hidden","none"]}],"border-color":[{border:J()}],"border-color-x":[{"border-x":J()}],"border-color-y":[{"border-y":J()}],"border-color-s":[{"border-s":J()}],"border-color-e":[{"border-e":J()}],"border-color-bs":[{"border-bs":J()}],"border-color-be":[{"border-be":J()}],"border-color-t":[{"border-t":J()}],"border-color-r":[{"border-r":J()}],"border-color-b":[{"border-b":J()}],"border-color-l":[{"border-l":J()}],"divide-color":[{divide:J()}],"outline-style":[{outline:[...O(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ie,pe,ue]}],"outline-w":[{outline:["",Ie,ar,zn]}],"outline-color":[{outline:J()}],shadow:[{shadow:["","inner","none",p,Kr,Yr]}],"shadow-color":[{shadow:J()}],"inset-shadow":[{"inset-shadow":["none",u,Kr,Yr]}],"inset-shadow-color":[{"inset-shadow":J()}],"ring-w":[{ring:Ce()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:J()}],"ring-offset-w":[{"ring-offset":[Ie,zn]}],"ring-offset-color":[{"ring-offset":J()}],"inset-ring-w":[{"inset-ring":Ce()}],"inset-ring-color":[{"inset-ring":J()}],"text-shadow":[{"text-shadow":["none",b,Kr,Yr]}],"text-shadow-color":[{"text-shadow":J()}],opacity:[{opacity:[Ie,pe,ue]}],"mix-blend":[{"mix-blend":[...ce(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ce()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ie]}],"mask-image-linear-from-pos":[{"mask-linear-from":X()}],"mask-image-linear-to-pos":[{"mask-linear-to":X()}],"mask-image-linear-from-color":[{"mask-linear-from":J()}],"mask-image-linear-to-color":[{"mask-linear-to":J()}],"mask-image-t-from-pos":[{"mask-t-from":X()}],"mask-image-t-to-pos":[{"mask-t-to":X()}],"mask-image-t-from-color":[{"mask-t-from":J()}],"mask-image-t-to-color":[{"mask-t-to":J()}],"mask-image-r-from-pos":[{"mask-r-from":X()}],"mask-image-r-to-pos":[{"mask-r-to":X()}],"mask-image-r-from-color":[{"mask-r-from":J()}],"mask-image-r-to-color":[{"mask-r-to":J()}],"mask-image-b-from-pos":[{"mask-b-from":X()}],"mask-image-b-to-pos":[{"mask-b-to":X()}],"mask-image-b-from-color":[{"mask-b-from":J()}],"mask-image-b-to-color":[{"mask-b-to":J()}],"mask-image-l-from-pos":[{"mask-l-from":X()}],"mask-image-l-to-pos":[{"mask-l-to":X()}],"mask-image-l-from-color":[{"mask-l-from":J()}],"mask-image-l-to-color":[{"mask-l-to":J()}],"mask-image-x-from-pos":[{"mask-x-from":X()}],"mask-image-x-to-pos":[{"mask-x-to":X()}],"mask-image-x-from-color":[{"mask-x-from":J()}],"mask-image-x-to-color":[{"mask-x-to":J()}],"mask-image-y-from-pos":[{"mask-y-from":X()}],"mask-image-y-to-pos":[{"mask-y-to":X()}],"mask-image-y-from-color":[{"mask-y-from":J()}],"mask-image-y-to-color":[{"mask-y-to":J()}],"mask-image-radial":[{"mask-radial":[pe,ue]}],"mask-image-radial-from-pos":[{"mask-radial-from":X()}],"mask-image-radial-to-pos":[{"mask-radial-to":X()}],"mask-image-radial-from-color":[{"mask-radial-from":J()}],"mask-image-radial-to-color":[{"mask-radial-to":J()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":w()}],"mask-image-conic-pos":[{"mask-conic":[Ie]}],"mask-image-conic-from-pos":[{"mask-conic-from":X()}],"mask-image-conic-to-pos":[{"mask-conic-to":X()}],"mask-image-conic-from-color":[{"mask-conic-from":J()}],"mask-image-conic-to-color":[{"mask-conic-to":J()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Re()}],"mask-repeat":[{mask:Me()}],"mask-size":[{mask:ot()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",pe,ue]}],filter:[{filter:["","none",pe,ue]}],blur:[{blur:ge()}],brightness:[{brightness:[Ie,pe,ue]}],contrast:[{contrast:[Ie,pe,ue]}],"drop-shadow":[{"drop-shadow":["","none",m,Kr,Yr]}],"drop-shadow-color":[{"drop-shadow":J()}],grayscale:[{grayscale:["",Ie,pe,ue]}],"hue-rotate":[{"hue-rotate":[Ie,pe,ue]}],invert:[{invert:["",Ie,pe,ue]}],saturate:[{saturate:[Ie,pe,ue]}],sepia:[{sepia:["",Ie,pe,ue]}],"backdrop-filter":[{"backdrop-filter":["","none",pe,ue]}],"backdrop-blur":[{"backdrop-blur":ge()}],"backdrop-brightness":[{"backdrop-brightness":[Ie,pe,ue]}],"backdrop-contrast":[{"backdrop-contrast":[Ie,pe,ue]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ie,pe,ue]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ie,pe,ue]}],"backdrop-invert":[{"backdrop-invert":["",Ie,pe,ue]}],"backdrop-opacity":[{"backdrop-opacity":[Ie,pe,ue]}],"backdrop-saturate":[{"backdrop-saturate":[Ie,pe,ue]}],"backdrop-sepia":[{"backdrop-sepia":["",Ie,pe,ue]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":R()}],"border-spacing-x":[{"border-spacing-x":R()}],"border-spacing-y":[{"border-spacing-y":R()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",pe,ue]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ie,"initial",pe,ue]}],ease:[{ease:["linear","initial",_,pe,ue]}],delay:[{delay:[Ie,pe,ue]}],animate:[{animate:["none",y,pe,ue]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[g,pe,ue]}],"perspective-origin":[{"perspective-origin":T()}],rotate:[{rotate:S()}],"rotate-x":[{"rotate-x":S()}],"rotate-y":[{"rotate-y":S()}],"rotate-z":[{"rotate-z":S()}],scale:[{scale:$()}],"scale-x":[{"scale-x":$()}],"scale-y":[{"scale-y":$()}],"scale-z":[{"scale-z":$()}],"scale-3d":["scale-3d"],skew:[{skew:E()}],"skew-x":[{"skew-x":E()}],"skew-y":[{"skew-y":E()}],transform:[{transform:[pe,ue,"","none","gpu","cpu"]}],"transform-origin":[{origin:T()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:V()}],"translate-x":[{"translate-x":V()}],"translate-y":[{"translate-y":V()}],"translate-z":[{"translate-z":V()}],"translate-none":["translate-none"],zoom:[{zoom:[Et,pe,ue]}],accent:[{accent:J()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:J()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",pe,ue]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":J()}],"scrollbar-track-color":[{"scrollbar-track":J()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mbs":[{"scroll-mbs":R()}],"scroll-mbe":[{"scroll-mbe":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pbs":[{"scroll-pbs":R()}],"scroll-pbe":[{"scroll-pbe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",pe,ue]}],fill:[{fill:["none",...J()]}],"stroke-w":[{stroke:[Ie,ar,zn,Pa]}],stroke:[{stroke:["none",...J()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["start","end","right","left"],"inset-y":["inset-bs","inset-be","top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["ps","pe","pr","pl"],py:["pbs","pbe","pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["ms","me","mr","ml"],my:["mbs","mbe","mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-s","border-w-e","border-w-r","border-w-l"],"border-w-y":["border-w-bs","border-w-be","border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-s","border-color-e","border-color-r","border-color-l"],"border-color-y":["border-color-bs","border-color-be","border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-ms","scroll-me","scroll-mr","scroll-ml"],"scroll-my":["scroll-mbs","scroll-mbe","scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-ps","scroll-pe","scroll-pr","scroll-pl"],"scroll-py":["scroll-pbs","scroll-pbe","scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Nm=vm(jm);function ne(...e){return Nm(Zf(e))}const Hm={class:"h-full w-full overflow-visible",xmlns:"http://www.w3.org/2000/svg"},Gm=["id"],Um=["stop-color"],qm=["stop-color"],Xm=["rx","ry","stroke","stroke-width","stroke-dasharray"],Wm=["rx","ry","stroke","stroke-width","stroke-dasharray"],Ym=ee({__name:"BorderBeam",props:{borderWidth:{default:2},size:{default:20},duration:{default:6},colorFrom:{default:"#38bdf8"},colorTo:{default:"#a855f7"},delay:{default:0},reverse:{type:Boolean,default:!1},borderRadius:{default:16},glow:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=Qn(),r=ie(()=>{if(typeof t.borderRadius=="number")return t.borderRadius;const a=parseFloat(t.borderRadius);return isNaN(a)?16:a}),o=ie(()=>t.size>50?18:Math.min(Math.max(t.size,5),80)),i=ie(()=>`${o.value} ${100-o.value}`),l=ie(()=>({animationDuration:`${t.duration}s`,animationDelay:`-${t.delay}s`,animationDirection:t.reverse?"reverse":"normal"}));return(a,c)=>(f(),x("div",{class:M(I(ne)("pointer-events-none absolute inset-0 rounded-[inherit] overflow-visible",t.class))},[(f(),x("svg",Hm,[s("defs",null,[s("linearGradient",{id:`border-beam-grad-${I(n)}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[s("stop",{offset:"0%","stop-color":t.colorFrom},null,8,Um),s("stop",{offset:"100%","stop-color":t.colorTo},null,8,qm)],8,Gm)]),t.glow?(f(),x("rect",{key:0,pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${I(n)})`,"stroke-width":t.borderWidth*2,"stroke-dasharray":i.value,"stroke-linecap":"round",opacity:"0.45",class:"border-beam-svg-motion blur-[3px]",style:fe(l.value)},null,12,Xm)):N("",!0),s("rect",{pathLength:"100",x:"1",y:"1",width:"calc(100% - 2px)",height:"calc(100% - 2px)",rx:r.value,ry:r.value,fill:"none",stroke:`url(#border-beam-grad-${I(n)})`,"stroke-width":t.borderWidth,"stroke-dasharray":i.value,"stroke-linecap":"round",class:"border-beam-svg-motion",style:fe(l.value)},null,12,Wm)]))],2))}}),Fe=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Rr=Fe(Ym,[["__scopeId","data-v-bf918acf"]]),Km={class:"relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-white"},Zm=ee({__name:"ShimmerButton",props:{shimmerColor:{default:"#38bdf8"},shimmerSize:{default:"0.12em"},shimmerDuration:{default:"2.5s"},borderRadius:{default:"9999px"},class:{}},setup(e){const t=e,n=ie(()=>({"--shimmer-color":t.shimmerColor,"--shimmer-size":t.shimmerSize,"--speed":t.shimmerDuration,"--radius":t.borderRadius}));return(r,o)=>(f(),x("button",{style:fe(n.value),class:M(I(ne)("group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white transition-all duration-300 active:scale-95","border border-white/10 [border-radius:var(--radius)]","bg-zinc-900/90 shadow-md hover:shadow-lg hover:shadow-sky-500/20 dark:bg-black/90",t.class))},[o[0]||(o[0]=s("div",{class:"shimmer-spin-container pointer-events-none absolute -inset-[100%] [aspect-ratio:1] [border-radius:inherit]"},[s("div",{class:"shimmer-spin-gradient h-full w-full animate-shimmer-spin"})],-1)),o[1]||(o[1]=s("div",{class:"absolute [inset:var(--shimmer-size)] [border-radius:inherit] bg-zinc-950/95 transition-colors duration-300 group-hover:bg-zinc-900/95"},null,-1)),s("span",Km,[Oe(r.$slots,"default",{},void 0,!0)])],6))}}),kr=Fe(Zm,[["__scopeId","data-v-6b251134"]]),Qm=ee({__name:"ShinyText",props:{text:{},duration:{default:2.5},variant:{default:"white"},class:{}},setup(e){const t=e,n=ie(()=>({"--duration":`${t.duration}s`}));return(r,o)=>(f(),x("span",{style:fe(n.value),class:M(I(ne)("shiny-text-root inline-block font-bold bg-clip-text text-transparent",t.variant==="white"&&"shiny-variant-white",t.variant==="cyber"&&"shiny-variant-cyber",t.class))},[Oe(r.$slots,"default",{},()=>[$e(A(t.text),1)],!0)],6))}}),zr=Fe(Qm,[["__scopeId","data-v-31108f82"]]),Jm=ee({__name:"RetroGrid",props:{angle:{default:65},cellSize:{default:60},opacity:{default:.5},lightLineColor:{default:"#94a3b8"},darkLineColor:{default:"#38bdf8"},mask:{type:Boolean,default:!0},maskClass:{},class:{}},setup(e){const t=e,n=ie(()=>({"--grid-angle":`${t.angle}deg`,"--cell-size":`${t.cellSize}px`,"--opacity":t.opacity.toString(),"--light-line":t.lightLineColor,"--dark-line":t.darkLineColor}));return(r,o)=>(f(),x("div",{style:fe(n.value),class:M(I(ne)("pointer-events-none absolute h-full w-full overflow-hidden opacity-[var(--opacity)] [perspective:200px]",t.class))},[s("div",{class:M(I(ne)("absolute inset-0 [transform:rotateX(var(--grid-angle))]",t.mask&&"retro-grid-horizon-mask"))},[...o[0]||(o[0]=[s("div",{class:"retro-grid-plane animate-retro-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]"},null,-1)])],2)],6))}}),js=Fe(Jm,[["__scopeId","data-v-2d20ad14"]]),id=ee({__name:"BentoGrid",props:{class:{}},setup(e){const t=e;return(n,r)=>(f(),x("div",{class:M(I(ne)("grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",t.class))},[Oe(n.$slots,"default")],2))}}),eb={class:"relative z-0 h-44 w-full overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"},tb={class:"relative z-10 flex flex-col gap-2 pt-4"},nb={class:"flex items-center gap-2.5"},rb={class:"text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},ob={class:"text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"},sb={key:0,class:"mt-3 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400"},ib=ee({__name:"BentoCard",props:{name:{},description:{},class:{},href:{},cta:{},spotlightRadius:{default:300}},setup(e){const t=e,n=P(0),r=P(0),o=P(!1);function i(l){const a=l.currentTarget.getBoundingClientRect();n.value=l.clientX-a.left,r.value=l.clientY-a.top}return(l,a)=>{const c=Lr("router-link");return f(),x("div",{class:M(I(ne)("group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300","border border-zinc-200 bg-white/70 shadow-sm backdrop-blur-md hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10",t.class)),onMousemove:i,onMouseenter:a[0]||(a[0]=d=>o.value=!0),onMouseleave:a[1]||(a[1]=d=>o.value=!1)},[s("div",{class:"pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",style:fe({background:`radial-gradient(${t.spotlightRadius}px circle at ${n.value}px ${r.value}px, var(--spotlight-color), transparent 80%)`})},null,4),s("div",eb,[Oe(l.$slots,"background",{},void 0,!0)]),s("div",tb,[s("div",nb,[Oe(l.$slots,"icon",{},void 0,!0),s("h3",rb,A(t.name),1)]),s("p",ob,A(t.description),1),t.cta||l.$slots.cta?(f(),x("div",sb,[Oe(l.$slots,"cta",{},()=>[t.href?(f(),me(c,{key:0,to:t.href,class:"inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"},{default:U(()=>[$e(A(t.cta)+" ",1),a[2]||(a[2]=s("span",{"aria-hidden":"true"},"→",-1))]),_:1},8,["to"])):N("",!0)],!0)])):N("",!0)])],34)}}}),bt=Fe(ib,[["__scopeId","data-v-f7ebca2d"]]),ab=ee({__name:"Marquee",props:{duration:{default:30},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},repeat:{default:4},class:{}},setup(e){const t=e,n=ie(()=>({"--duration":`${t.duration}s`}));return(r,o)=>(f(),x("div",{style:fe(n.value),class:M(I(ne)("group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",t.vertical?"flex-col":"flex-row",t.class))},[(f(!0),x(se,null,he(t.repeat,i=>(f(),x("div",{key:i,class:M(I(ne)("flex shrink-0 justify-around [gap:var(--gap)]",t.vertical?"flex-col animate-marquee-vertical":"flex-row animate-marquee",t.pauseOnHover&&"group-hover:[animation-play-state:paused]",t.reverse&&"[animation-direction:reverse]"))},[Oe(r.$slots,"default",{},void 0,!0)],2))),128))],6))}}),Tn=Fe(ab,[["__scopeId","data-v-2ea856f7"]]),lb={"aria-hidden":"true",class:"pointer-events-none h-full w-full fill-neutral-400/60 dark:fill-neutral-600/60 transition-colors"},cb=["id","width","height","x","y"],db=["cx","cy","r"],ub=["fill"],ad=ee({__name:"DotPattern",props:{width:{default:20},height:{default:20},x:{default:0},y:{default:0},cx:{default:1},cy:{default:1},cr:{default:1},glow:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=Qn(),r=P(-9999),o=P(-9999);function i(a){if(!t.glow)return;const c=a.currentTarget.getBoundingClientRect();r.value=a.clientX-c.left,o.value=a.clientY-c.top}function l(){r.value=-9999,o.value=-9999}return(a,c)=>(f(),x("div",{class:M(I(ne)("absolute inset-0 h-full w-full overflow-hidden",t.glow?"pointer-events-auto":"pointer-events-none",t.class)),onMousemove:i,onMouseleave:l},[(f(),x("svg",lb,[s("defs",null,[s("pattern",{id:I(n),width:t.width,height:t.height,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:t.x,y:t.y},[s("circle",{cx:t.cx,cy:t.cy,r:t.cr},null,8,db)],8,cb)]),s("rect",{width:"100%",height:"100%",fill:`url(#${I(n)})`},null,8,ub)])),t.glow?(f(),x("div",{key:0,class:"absolute inset-0 transition-opacity duration-300",style:fe({background:`radial-gradient(200px circle at ${r.value}px ${o.value}px, rgba(59, 130, 246, 0.15), transparent 80%)`})},null,4)):N("",!0)],34))}}),pb={class:"relative z-10 h-full w-full"},ld=ee({__name:"InteractiveParticles",props:{quantity:{default:50},speed:{default:.6},maxRadius:{default:2},mouseRadius:{default:100},color:{},connectLines:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=P(null);let r=null,o=[];const i={x:-9999,y:-9999};function l(u,b){o=[];for(let m=0;m<t.quantity;m++)o.push({x:Math.random()*u,y:Math.random()*b,vx:(Math.random()-.5)*t.speed,vy:(Math.random()-.5)*t.speed,size:Math.random()*t.maxRadius+.8,baseAlpha:Math.random()*.5+.2,alpha:Math.random()*.5+.2})}function a(){const u=n.value;if(!u)return;const b=window.devicePixelRatio||1,m=u.getBoundingClientRect();u.width=m.width*b,u.height=m.height*b;const h=u.getContext("2d");h&&h.scale(b,b),l(m.width,m.height)}function c(u){const b=n.value;if(!b)return;const m=b.getBoundingClientRect();i.x=u.clientX-m.left,i.y=u.clientY-m.top}function d(){i.x=-9999,i.y=-9999}function p(){const u=n.value;if(!u)return;const b=u.getContext("2d");if(!b)return;const m=u.getBoundingClientRect(),h=m.width,g=m.height;b.clearRect(0,0,h,g);const _=document.documentElement.classList.contains("dark")?"255, 255, 255":"59, 130, 246",y=t.color||_;for(let C=0;C<o.length;C++){const w=o[C];w.x+=w.vx,w.y+=w.vy,(w.x<0||w.x>h)&&(w.vx*=-1),(w.y<0||w.y>g)&&(w.vy*=-1);const T=i.x-w.x,F=i.y-w.y,D=Math.sqrt(T*T+F*F);if(D<t.mouseRadius){const R=(t.mouseRadius-D)/t.mouseRadius;w.x-=T/D*R*2,w.y-=F/D*R*2,w.alpha=Math.min(w.baseAlpha+.4,.9)}else w.alpha=w.baseAlpha;if(b.beginPath(),b.arc(w.x,w.y,w.size,0,Math.PI*2),b.fillStyle=y.startsWith("#")?y:`rgba(${y}, ${w.alpha})`,b.fill(),t.connectLines)for(let R=C+1;R<o.length;R++){const L=o[R],Z=Math.hypot(w.x-L.x,w.y-L.y);if(Z<80){b.beginPath(),b.moveTo(w.x,w.y),b.lineTo(L.x,L.y);const le=(1-Z/80)*.15;b.strokeStyle=`rgba(${_}, ${le})`,b.lineWidth=.6,b.stroke()}}}r=requestAnimationFrame(p)}return Pe(()=>{a(),window.addEventListener("resize",a),p()}),Ee(()=>{window.removeEventListener("resize",a),r!==null&&cancelAnimationFrame(r)}),Xe(()=>t.quantity,()=>{const u=n.value;if(u){const b=u.getBoundingClientRect();l(b.width,b.height)}}),(u,b)=>(f(),x("div",{class:M(I(ne)("relative h-full w-full overflow-hidden",t.class)),onMousemove:c,onMouseleave:d},[s("canvas",{ref_key:"canvasRef",ref:n,class:"pointer-events-none absolute inset-0 h-full w-full"},null,512),s("div",pb,[Oe(u.$slots,"default")])],34))}}),fb=ee({__name:"Meteors",props:{number:{default:20},angle:{default:215},minDelay:{default:.2},maxDelay:{default:1.2},minDuration:{default:2},maxDuration:{default:8},class:{}},setup(e){const t=e,n=ie(()=>Array.from({length:t.number}).map(()=>{const r=Math.floor(Math.random()*100),o=Math.floor(Math.random()*100),i=(Math.random()*(t.maxDelay-t.minDelay)+t.minDelay).toFixed(2),l=(Math.random()*(t.maxDuration-t.minDuration)+t.minDuration).toFixed(2);return{top:`${r}%`,left:`${o}%`,animationDelay:`${i}s`,animationDuration:`${l}s`}}));return(r,o)=>(f(),x("div",{class:M(I(ne)("pointer-events-none absolute inset-0 overflow-hidden",t.class))},[(f(!0),x(se,null,he(n.value,(i,l)=>(f(),x("span",{key:l,style:fe({...i,"--angle":`${t.angle}deg`}),class:"animate-meteor absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[var(--angle)] dark:bg-sky-400 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-slate-500 before:to-transparent dark:before:from-sky-400"},null,4))),128))],2))}}),cd=Fe(fb,[["__scopeId","data-v-7d09918c"]]),mb=ee({__name:"Ripple",props:{mainCircleSize:{default:210},mainCircleOpacity:{default:.24},numCircles:{default:8},class:{}},setup(e){const t=e;return(n,r)=>(f(),x("div",{class:M(I(ne)("pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",t.class))},[(f(!0),x(se,null,he(t.numCircles,o=>(f(),x("div",{key:o,style:fe({width:`${t.mainCircleSize+(o-1)*70}px`,height:`${t.mainCircleSize+(o-1)*70}px`,opacity:Math.max(.04,t.mainCircleOpacity-(o-1)*.025),animationDelay:`${(o-1)*.06}s`,borderStyle:o===t.numCircles?"dashed":"solid",borderWidth:"1px"}),class:"animate-ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-blue-500/40 bg-blue-500/5 shadow-[0_0_16px_rgba(59,130,246,0.1)] dark:border-sky-400/30 dark:bg-sky-400/5"},null,4))),128))],2))}}),dd=Fe(mb,[["__scopeId","data-v-98c398f7"]]),ro=ee({__name:"NumberTicker",props:{value:{},direction:{default:"up"},duration:{default:2},delay:{default:0},decimalPlaces:{default:0},class:{}},setup(e){const t=e,n=P(null),r=P("0");let o=null,i=null,l=!1;function a(p){return p===1?1:1-Math.pow(2,-10*p)}function c(p){return new Intl.NumberFormat("en-US",{minimumFractionDigits:t.decimalPlaces,maximumFractionDigits:t.decimalPlaces}).format(p)}function d(){if(l)return;l=!0;const p=t.direction==="down"?t.value:0,u=t.direction==="down"?0:t.value,b=t.duration*1e3;let m=null;setTimeout(()=>{function h(g){m||(m=g);const z=g-m,_=Math.min(z/b,1),y=a(_),C=p+(u-p)*y;r.value=c(C),_<1?o=requestAnimationFrame(h):r.value=c(u)}o=requestAnimationFrame(h)},t.delay*1e3)}return Pe(()=>{r.value=c(t.direction==="down"?t.value:0),n.value?(i=new IntersectionObserver(p=>{p[0].isIntersecting&&(d(),i&&i.disconnect())},{threshold:.1}),i.observe(n.value)):d()}),Ee(()=>{o&&cancelAnimationFrame(o),i&&i.disconnect()}),Xe(()=>t.value,()=>{l=!1,d()}),(p,u)=>(f(),x("span",{ref_key:"spanRef",ref:n,class:M(I(ne)("inline-block tabular-nums tracking-wider",t.class))},A(r.value),3))}}),bb=["width","height","viewBox"],xb=["d","stroke","stroke-width","stroke-opacity"],gb=["d","stroke","stroke-width"],hb=["id"],vb=["stop-color"],yb=["stop-color"],wb=["stop-color"],kb=["from","to","dur","begin"],zb=["from","to","dur","begin"],wo=ee({__name:"AnimatedBeam",props:{containerRef:{},fromRef:{},toRef:{},curvature:{default:0},reverse:{type:Boolean,default:!1},pathColor:{default:"#94a3b8"},pathWidth:{default:2},pathOpacity:{default:.2},gradientStartColor:{default:"#38bdf8"},gradientStopColor:{default:"#6366f1"},duration:{default:3},delay:{default:0},startXOffset:{default:0},startYOffset:{default:0},endXOffset:{default:0},endYOffset:{default:0},class:{}},setup(e){const t=e,n=Qn(),r=P(""),o=P({width:0,height:0});function i(c){return c?"value"in c?c.value:c instanceof HTMLElement?c:null:null}function l(){const c=i(t.containerRef),d=i(t.fromRef),p=i(t.toRef);if(!c||!d||!p)return;const u=c.getBoundingClientRect(),b=d.getBoundingClientRect(),m=p.getBoundingClientRect();o.value={width:u.width,height:u.height};const h=b.left-u.left+b.width/2+t.startXOffset,g=b.top-u.top+b.height/2+t.startYOffset,z=m.left-u.left+m.width/2+t.endXOffset,_=m.top-u.top+m.height/2+t.endYOffset,y=(h+z)/2,C=(g+_)/2,w=y,T=C-t.curvature;t.curvature===0?r.value=`M ${h},${g} L ${z},${_}`:r.value=`M ${h},${g} Q ${w},${T} ${z},${_}`}let a=null;return Pe(()=>{l(),window.addEventListener("resize",l);const c=i(t.containerRef);c&&(a=new ResizeObserver(()=>l()),a.observe(c))}),Ee(()=>{window.removeEventListener("resize",l),a&&a.disconnect()}),Xe([()=>i(t.containerRef),()=>i(t.fromRef),()=>i(t.toRef),()=>t.curvature],()=>{l()}),(c,d)=>(f(),x("svg",{width:o.value.width,height:o.value.height,viewBox:`0 0 ${o.value.width} ${o.value.height}`,class:M(I(ne)("pointer-events-none absolute inset-0 h-full w-full select-none overflow-visible",t.class))},[s("path",{d:r.value,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-opacity":t.pathOpacity,"stroke-linecap":"round"},null,8,xb),s("path",{d:r.value,fill:"none",stroke:`url(#beam-gradient-${I(n)})`,"stroke-width":t.pathWidth,"stroke-linecap":"round"},null,8,gb),s("defs",null,[s("linearGradient",{id:`beam-gradient-${I(n)}`,gradientUnits:"userSpaceOnUse"},[s("stop",{offset:"0%","stop-color":t.gradientStartColor,"stop-opacity":"0"},null,8,vb),s("stop",{offset:"50%","stop-color":t.gradientStartColor,"stop-opacity":"1"},null,8,yb),s("stop",{offset:"100%","stop-color":t.gradientStopColor,"stop-opacity":"0"},null,8,wb),s("animate",{attributeName:"x1",from:t.reverse?"100%":"-50%",to:t.reverse?"-50%":"100%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,kb),s("animate",{attributeName:"x2",from:t.reverse?"150%":"0%",to:t.reverse?"0%":"150%",dur:`${t.duration}s`,begin:`${t.delay}s`,repeatCount:"indefinite"},null,8,zb)],8,hb)])],10,bb))}}),_b={class:"relative z-50 -translate-y-32 flex flex-col items-center px-5 text-center"},ud=ee({__name:"LampEffect",props:{glowColor:{default:"#06b6d4"},class:{}},setup(e){const t=e;return(n,r)=>(f(),x("div",{class:M(I(ne)("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-2xl z-0",t.class))},[r[0]||(r[0]=mo(`<div class="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0"><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"><div class="absolute w-[100%] left-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div><div class="absolute w-40 h-[100%] left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"></div></div><div style="background-image:conic-gradient(
            var(--conic-position),
            var(--tw-gradient-stops)
          );" class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"><div class="absolute w-40 h-[100%] right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"></div><div class="absolute w-[100%] right-0 bg-zinc-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div></div><div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl"></div><div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div><div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div><div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></div><div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div><div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-zinc-950"></div></div>`,1)),s("div",_b,[Oe(n.$slots,"default")])],2))}}),pd=ee({__name:"FlickeringGrid",props:{squareSize:{default:4},gridGap:{default:4},flickerChance:{default:.3},color:{},maxOpacity:{default:.3},class:{}},setup(e){const t=e,n=P(null),r=P(null);let o=null,i=new Float32Array(0),l=0,a=0;function c(u,b){l=Math.floor(u/(t.squareSize+t.gridGap)),a=Math.floor(b/(t.squareSize+t.gridGap)),i=new Float32Array(l*a);for(let m=0;m<i.length;m++)i[m]=Math.random()*t.maxOpacity}function d(){const u=n.value,b=r.value;if(!u||!b)return;const m=window.devicePixelRatio||1,h=u.getBoundingClientRect();b.width=h.width*m,b.height=h.height*m;const g=b.getContext("2d");g&&g.scale(m,m),c(h.width,h.height)}function p(){const u=r.value,b=n.value;if(!u||!b)return;const m=u.getContext("2d");if(!m)return;const h=b.getBoundingClientRect();m.clearRect(0,0,h.width,h.height);const z=document.documentElement.classList.contains("dark")?"148, 163, 184":"100, 116, 139",_=t.color||z;for(let y=0;y<a;y++)for(let C=0;C<l;C++){const w=y*l+C;Math.random()<t.flickerChance&&(i[w]=Math.random()*t.maxOpacity);const T=i[w];m.fillStyle=_.startsWith("#")?_:`rgba(${_}, ${T})`;const F=C*(t.squareSize+t.gridGap),D=y*(t.squareSize+t.gridGap);m.fillRect(F,D,t.squareSize,t.squareSize)}o=requestAnimationFrame(p)}return Pe(()=>{d(),window.addEventListener("resize",d),p()}),Ee(()=>{window.removeEventListener("resize",d),o&&cancelAnimationFrame(o)}),Xe([()=>t.squareSize,()=>t.gridGap],()=>{d()}),(u,b)=>(f(),x("div",{ref_key:"containerRef",ref:n,class:M(I(ne)("pointer-events-none relative h-full w-full overflow-hidden",t.class))},[s("canvas",{ref_key:"canvasRef",ref:r,class:"absolute inset-0 h-full w-full"},null,512)],2))}}),Cb={class:"relative overflow-hidden"},Sb={class:"relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center overflow-hidden"},Mb={class:"relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200"},Ib={class:"relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"},Ab={class:"relative z-10 mt-12 w-full max-w-2xl text-left"},$b={class:"relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/80"},Pb={class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"},Tb={class:"border-y border-zinc-200/80 bg-zinc-50/50 py-6 dark:border-zinc-800/80 dark:bg-zinc-950/40"},Rb={class:"mx-auto max-w-7xl px-4 text-center"},Eb={id:"features",class:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"},Fb={class:"text-center max-w-3xl mx-auto mb-16 space-y-4"},Lb={class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"},Db={class:"relative h-full w-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50/40 to-transparent dark:from-zinc-900/60 dark:to-transparent"},Vb={class:"relative flex h-32 w-56 flex-col justify-between rounded-xl border border-zinc-200/90 bg-white/95 p-3.5 shadow-md backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95"},Ob={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-sky-50/50 to-blue-50/20 border border-blue-100/50 dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800"},Bb={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-50/30 to-white dark:from-zinc-950 dark:to-zinc-900"},jb={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-50/30 to-transparent dark:from-zinc-900/50 dark:to-transparent"},Nb={class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"},Hb={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50"},Gb={class:"relative h-full w-full flex flex-col justify-center overflow-hidden rounded-xl p-3 bg-zinc-50/60 dark:bg-zinc-900/40"},Ub={class:"relative h-full w-full overflow-hidden rounded-xl bg-slate-950 p-4"},qb={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center"},Xb={class:"relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40"},Wb={class:"relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent flex flex-col items-center justify-center p-4"},Yb={class:"text-4xl font-black text-emerald-600 dark:text-emerald-400"},Kb={class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4"},Zb={class:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800/80"},Qb={class:"text-center max-w-3xl mx-auto mb-12 space-y-3"},Jb={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400"},ex={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},tx={class:"flex items-center justify-between mb-4"},nx={class:"flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60"},rx={class:"rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-[11px] font-mono font-bold text-zinc-600 dark:text-zinc-300"},ox={class:"text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2"},sx={class:"text-[11px] font-mono text-zinc-400 block mt-0.5"},ix={class:"mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"},ax={class:"mt-4 flex flex-wrap gap-1.5"},lx={class:"mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between"},cx={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"},dx={class:"mt-8 flex items-center justify-center gap-4"},ux={class:"border-t border-zinc-200/80 bg-zinc-50/50 py-20 dark:border-zinc-800/80 dark:bg-zinc-950/40"},px={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},fx={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},mx={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},bx={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400"},xx={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},gx={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400"},hx={class:"rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs"},vx={class:"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-400"},yx=ee({__name:"HomeView",setup(e){const t=P(null),n=P(null),r=P(null),o=P(null);function i(p){switch(p){case"ai-native":return Bn;case"interactive-nav":return Nn;case"space-3d":return qn;case"borders-cards":return Bt;case"kinetic-typography":return Le;default:return Le}}function l(p){return pn.filter(u=>u.suiteId===p)}const a=["Vue 3.5+","TypeScript","Tailwind CSS","Composition API","Vite 6","HTML5 Canvas","Web Animations API","Zero-Config"],c=P(!1);function d(){navigator.clipboard.writeText("npm i @vueuse/core clsx tailwind-merge"),c.value=!0,setTimeout(()=>{c.value=!1},2e3)}return(p,u)=>{const b=Lr("router-link");return f(),x("div",Cb,[s("section",Sb,[k(js,{angle:65,opacity:.45}),s("div",Mb,[k(I(Le),{class:"h-3.5 w-3.5 text-blue-500"}),k(zr,{text:"Vue 3 的动效原子代码库现已上线"}),u[0]||(u[0]=s("span",{class:"rounded-full bg-blue-500/10 px-1.5 py-0.5 text-[10px] text-blue-600 dark:text-blue-400"}," v1.0 ",-1))]),u[4]||(u[4]=s("h1",{class:"relative z-10 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight"},[$e(" 专属于 Vue 3 的 "),s("span",{class:"block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400"}," 高阶动效原子库 ")],-1)),u[5]||(u[5]=s("p",{class:"relative z-10 mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400"},[$e(" 不再重复造普通表单，全面对标 Magic UI 与 Aceternity UI。"),s("br",{class:"hidden sm:inline"}),$e(" 面向 "),s("strong",null,"AI 官网、SaaS 营销页、酷炫个人主页"),$e("，提供 60fps 单文件即用的动效积木。 ")],-1)),s("div",Ib,[k(b,{to:"/docs/border-beam"},{default:U(()=>[k(kr,{"shimmer-color":"#60a5fa",class:"h-12 px-8 text-base"},{default:U(()=>[u[1]||(u[1]=s("span",null,"立即浏览组件",-1)),k(I(Pn),{class:"h-4 w-4"})]),_:1})]),_:1}),s("button",{type:"button",class:"inline-flex h-12 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-800",onClick:d},[c.value?(f(),me(I(wt),{key:0,class:"h-4 w-4 text-emerald-500"})):(f(),me(I(Rn),{key:1,class:"h-4 w-4 text-zinc-400"})),s("span",null,A(c.value?"已复制依赖指令":"复制基础依赖指令"),1)])]),s("div",Ab,[s("div",$b,[k(Rr,{size:90,duration:6,"color-from":"#38bdf8","color-to":"#a855f7","border-width":2,"border-radius":16}),u[3]||(u[3]=mo('<div class="mb-4 flex items-center justify-between border-b border-zinc-200/60 pb-3 dark:border-zinc-800/60"><div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-rose-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span><span class="ml-2 font-mono text-xs text-zinc-400">components/BorderBeam.vue</span></div><div class="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>Zero-Config / 粘贴即跑</span></div></div>',1)),s("div",Pb,[u[2]||(u[2]=mo('<div class="space-y-1 text-zinc-600 dark:text-zinc-300"><p><span class="text-purple-500">&lt;template&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;div</span> <span class="text-amber-500">class=</span><span class="text-emerald-500">&quot;relative rounded-2xl&quot;</span><span class="text-blue-500">&gt;</span></p><p class="pl-8"><span class="text-blue-500">&lt;BorderBeam</span> <span class="text-amber-500">:duration=</span><span class="text-emerald-500">&quot;5&quot;</span> <span class="text-amber-500">:border-width=</span><span class="text-emerald-500">&quot;2&quot;</span> <span class="text-blue-500">/&gt;</span></p><p class="pl-4"><span class="text-blue-500">&lt;/div&gt;</span></p><p><span class="text-purple-500">&lt;/template&gt;</span></p></div>',1)),k(b,{to:"/docs/border-beam",class:"shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"},{default:U(()=>[$e(" 浏览全部 "+A(I(pn).length)+" 款动效 → ",1)]),_:1})])])])]),s("section",Tb,[s("div",Rb,[u[7]||(u[7]=s("p",{class:"mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase"}," 原生融合的技术栈与动效标准 ",-1)),k(Tn,{duration:25,"pause-on-hover":!0},{default:U(()=>[(f(),x(se,null,he(a,m=>s("div",{key:m,class:"flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-5 py-2 text-xs font-bold text-zinc-700 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300"},[u[6]||(u[6]=s("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),s("span",null,A(m),1)])),64))]),_:1})])]),s("section",Eb,[s("div",Fb,[s("h2",Lb," 全面对标顶流 · 5 大主题套件 · "+A(I(pn).length)+" 款高阶动效全装配 ",1),u[8]||(u[8]=s("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 每一个组件都经过精心打磨，在移动端与桌面端保持 60fps 满帧性能，全部开箱即用，支持 Clean Light 与 Deep Dark 双模自适应。 ",-1))]),k(id,null,{default:U(()=>[k(bt,{name:"Border Beam",description:"现代 CSS 路径动画，高光激光沿圆角边框飞速流转，AI 推理与核心 VIP 的视觉焦点",cta:"查看详情与代码",href:"/docs/border-beam"},{icon:U(()=>[k(I(Le),{class:"h-5 w-5 text-sky-500"})]),background:U(()=>[s("div",Db,[s("div",Vb,[k(Rr,{size:65,duration:3.5,"color-from":"#06b6d4","color-to":"#6366f1","border-width":2,"border-radius":12}),u[9]||(u[9]=s("div",{class:"flex items-center justify-between"},[s("div",{class:"flex items-center gap-2"},[s("span",{class:"relative flex h-2 w-2"},[s("span",{class:"absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"}),s("span",{class:"relative inline-flex h-2 w-2 rounded-full bg-emerald-500"})]),s("span",{class:"text-xs font-bold text-zinc-800 dark:text-zinc-200"},"AI 推理状态")]),s("span",{class:"rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-sky-600 dark:text-sky-400"},"360° 流动")],-1)),u[10]||(u[10]=s("div",{class:"space-y-1.5"},[s("div",{class:"h-2 w-4/5 rounded-full bg-zinc-200 dark:bg-zinc-700"}),s("div",{class:"h-2 w-3/5 rounded-full bg-gradient-to-r from-sky-500/40 to-indigo-500/40"})],-1))])])]),_:1}),k(bt,{name:"Interactive Particles",description:"原生 Canvas 2D 粒子引擎，支持鼠标悬浮动态引力排斥、微线互联与 60fps 满帧性能",cta:"查看详情与代码",href:"/docs/interactive-particles"},{icon:U(()=>[k(I(tn),{class:"h-5 w-5 text-amber-500"})]),background:U(()=>[s("div",Ob,[k(ld,{quantity:38,speed:.75,"mouse-radius":85,"connect-lines":!0,class:"absolute inset-0 h-full w-full"}),u[11]||(u[11]=s("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[s("div",{class:"flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1 text-xs font-mono font-medium text-blue-600 shadow-xs backdrop-blur-md dark:border-blue-900/60 dark:bg-zinc-900/80 dark:text-blue-400"},[s("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"}),s("span",null,"悬浮鼠标即刻磁吸交互")])],-1))])]),_:1}),k(bt,{name:"Retro Grid",description:"3D 倾斜无限延展赛博网格，原生区分明暗模式线条色彩，渲染极具科技纵深感的背景",cta:"查看详情与代码",href:"/docs/retro-grid"},{icon:U(()=>[k(I(Bt),{class:"h-5 w-5 text-indigo-500"})]),background:U(()=>[s("div",Bb,[k(js,{angle:65,opacity:.85,"cell-size":34,"light-line-color":"#6366f1","dark-line-color":"#38bdf8"}),u[12]||(u[12]=s("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[s("span",{class:"rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-xs backdrop-blur-md dark:border-indigo-900/80 dark:bg-zinc-900/90 dark:text-indigo-400"}," 3D 空间动态透视 ")],-1))])]),_:1}),k(bt,{name:"Shimmer Button",description:"360° 旋转锥形流光高光外圈，适配核心 CTA 与付费引导，鼠标悬停即刻聚光",cta:"查看详情与代码",href:"/docs/shimmer-button"},{icon:U(()=>[k(I(Le),{class:"h-5 w-5 text-pink-500"})]),background:U(()=>[s("div",jb,[k(kr,{"shimmer-color":"#ec4899","shimmer-duration":"2.4s",class:"shadow-lg"},{default:U(()=>[k(I(Le),{class:"h-4 w-4 text-pink-400"}),u[13]||(u[13]=s("span",null,"360° 旋转光晕按钮",-1))]),_:1}),u[14]||(u[14]=s("span",{class:"mt-3 text-[11px] font-mono text-zinc-400"},"悬停查看高光边缘旋转",-1))])]),_:1}),k(bt,{name:"Shiny Text",description:"金属质感微光划过文字，2.5s 线性平滑连续循环，高亮 Hero 标题与特色特性",cta:"查看详情与代码",href:"/docs/shiny-text"},{icon:U(()=>[k(I(Le),{class:"h-5 w-5 text-amber-500"})]),background:U(()=>[s("div",Nb,[u[15]||(u[15]=s("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"},null,-1)),k(zr,{text:"✨ Metallic Shiny Sheen",class:"relative z-10 text-xl font-black tracking-tight",speed:2.2}),u[16]||(u[16]=s("p",{class:"relative z-10 mt-2 text-xs font-mono text-zinc-400"},"高对比连续金属质感流动",-1))])]),_:1}),k(bt,{name:"Dot Pattern",description:"极简矢量波点底纹，支持鼠标实时光晕跟随聚光灯，轻量零性能损耗",cta:"查看详情与代码",href:"/docs/dot-pattern"},{icon:U(()=>[k(I(Ic),{class:"h-5 w-5 text-emerald-500"})]),background:U(()=>[s("div",Hb,[k(ad,{width:16,height:16,cr:1.2,glow:!0}),u[17]||(u[17]=s("div",{class:"absolute inset-0 flex items-center justify-center pointer-events-none"},[s("span",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}," 移动鼠标点亮光晕 ")],-1))])]),_:1}),k(bt,{name:"Marquee",description:"纯 CSS 硬件加速无限无缝滚动跑马灯，支持鼠标悬浮暂停、反向循环与变速",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/marquee"},{icon:U(()=>[k(I(p0),{class:"h-5 w-5 text-blue-500"})]),background:U(()=>[s("div",Gb,[k(Tn,{duration:16,"pause-on-hover":!0},{default:U(()=>[(f(),x(se,null,he(["GPT-4o","Claude 3.5","DeepSeek-V3","Llama 3.3","Gemini 1.5"],m=>s("div",{key:m,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[u[18]||(u[18]=s("span",{class:"h-1.5 w-1.5 rounded-full bg-emerald-500"},null,-1)),s("span",null,A(m),1)])),64))]),_:1}),k(Tn,{duration:20,reverse:!0,"pause-on-hover":!0,class:"mt-2.5"},{default:U(()=>[(f(),x(se,null,he(["Vue 3.5","TypeScript","Tailwind CSS","Zero-Config","Canvas 2D"],m=>s("div",{key:m,class:"mx-1.5 flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-3 py-1.5 text-xs font-bold text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"},[u[19]||(u[19]=s("span",{class:"h-1.5 w-1.5 rounded-full bg-blue-500"},null,-1)),s("span",null,A(m),1)])),64))]),_:1})])]),_:1}),k(bt,{name:"Bento Grid",description:"现代 SaaS 模块化栅格系统，卡片集成鼠标跟随 Spotlight 径向聚光灯流光",cta:"查看详情与代码",href:"/docs/bento-grid"},{icon:U(()=>[k(I(Bt),{class:"h-5 w-5 text-purple-500"})]),background:U(()=>[...u[20]||(u[20]=[s("div",{class:"relative h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent"},[s("div",{class:"grid grid-cols-2 gap-2 w-full max-w-[200px]"},[s("div",{class:"h-12 rounded-lg border border-purple-300/40 bg-purple-500/10 dark:border-purple-500/30 dark:bg-purple-500/20 flex items-center justify-center text-[10px] font-mono text-purple-600 dark:text-purple-300"}," Col 1 "),s("div",{class:"h-12 rounded-lg border border-blue-300/40 bg-blue-500/10 dark:border-blue-500/30 dark:bg-blue-500/20 flex items-center justify-center text-[10px] font-mono text-blue-600 dark:text-blue-300"}," Col 2 "),s("div",{class:"col-span-2 h-10 rounded-lg border border-indigo-300/40 bg-indigo-500/10 dark:border-indigo-500/30 dark:bg-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-600 dark:text-indigo-300"}," Span 2 · 动态聚光灯 ")])],-1)])]),_:1}),k(bt,{name:"Meteors",description:"纯 CSS 赛博流星雨划过，带 50px 渐变光尾与随机延迟，暗黑科技卡片与首屏氛围杀器",cta:"查看详情与代码",href:"/docs/meteors"},{icon:U(()=>[k(I(Le),{class:"h-5 w-5 text-sky-400"})]),background:U(()=>[s("div",Ub,[k(cd,{number:20}),u[21]||(u[21]=s("div",{class:"flex h-full flex-col justify-end"},[s("span",{class:"text-xs font-mono text-sky-400 font-bold"},"215° 斜掠流星轨迹")],-1))])]),_:1}),k(bt,{name:"Ripple",description:"由中心向外周循环脉冲扩散的多层同心圆涟漪，适配 AI 语音拾音、雷达声呐与核心头像高亮",cta:"查看详情与代码",href:"/docs/ripple"},{icon:U(()=>[k(I(vo),{class:"h-5 w-5 text-blue-500"})]),background:U(()=>[s("div",qb,[k(dd,{"main-circle-size":110,"num-circles":6}),s("div",Xb,[k(I(vo),{class:"h-6 w-6"})])])]),_:1}),k(bt,{name:"Number Ticker",description:"采用 easeOutExpo 缓动曲线的平滑数字翻牌器，进入视口自动起跑，SaaS 核心关键业务指标必备",cta:"查看详情与代码",href:"/docs/number-ticker"},{icon:U(()=>[k(I(Ps),{class:"h-5 w-5 text-emerald-500"})]),background:U(()=>[s("div",Wb,[s("div",Yb,[k(ro,{value:99.99,"decimal-places":2}),u[22]||(u[22]=$e("% ",-1))]),u[23]||(u[23]=s("p",{class:"mt-2 text-xs font-mono text-zinc-500"},"SLA 生产高可用性指标",-1))])]),_:1}),k(bt,{name:"Animated Beam",description:"Magic UI 标志性连线动效，在多个 DOM 节点间实时计算贝塞尔曲线，驱动 SVG 能量光球脉冲流动",class:"md:col-span-2",cta:"查看详情与代码",href:"/docs/animated-beam"},{icon:U(()=>[k(I(tn),{class:"h-5 w-5 text-indigo-500"})]),background:U(()=>[s("div",{ref_key:"homeBeamContainer",ref:t,class:"relative h-full w-full overflow-hidden rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 flex items-center justify-between px-8"},[s("div",{ref_key:"homeBeamUser",ref:n,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-blue-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-blue-400"},[k(I(Tc),{class:"h-5 w-5"})],512),s("div",{ref_key:"homeBeamAi",ref:r,class:"z-10 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/40"},[k(I(Le),{class:"h-6 w-6"})],512),s("div",{ref_key:"homeBeamDb",ref:o,class:"z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-indigo-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-indigo-400"},[k(I(Es),{class:"h-5 w-5"})],512),k(wo,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.2},null,8,["container-ref","from-ref","to-ref"]),k(wo,{"container-ref":t.value,"from-ref":r.value,"to-ref":o.value,duration:2.2,delay:.5},null,8,["container-ref","from-ref","to-ref"])],512)]),_:1}),k(bt,{name:"Flickering Grid",description:"Canvas 2D 原生微闪烁网格，每个小方格独立呼吸微光，营造赛博黑客帝国与智能矩阵氛围",cta:"查看详情与代码",href:"/docs/flickering-grid"},{icon:U(()=>[k(I(Bt),{class:"h-5 w-5 text-sky-500"})]),background:U(()=>[s("div",Kb,[k(pd,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),u[24]||(u[24]=s("div",{class:"relative z-10 flex h-full items-center justify-center"},[s("span",{class:"rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-500 dark:text-sky-400 font-bold"}," 60FPS 矩阵微闪 ")],-1))])]),_:1})]),_:1})]),s("section",Zb,[s("div",Qb,[s("div",Jb,[k(I(Le),{class:"h-3.5 w-3.5"}),u[25]||(u[25]=s("span",null,"主题套件全套推进",-1))]),u[26]||(u[26]=s("h2",{class:"text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50"}," 5 大主题动效矩阵 · 场景全覆盖 ",-1)),u[27]||(u[27]=s("p",{class:"text-zinc-500 dark:text-zinc-400 text-sm sm:text-base"}," 按业务应用场景全套推进，彻底告别零散拼凑。从 AI 智能体推理到 3D 纵深空间，全矩阵即拷即用。 ",-1))]),s("div",ex,[(f(!0),x(se,null,he(I(Fs),m=>{var h;return f(),x("div",{key:m.id,class:"group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:hover:border-zinc-700"},[s("div",null,[s("div",tx,[s("div",nx,[(f(),me(Je(i(m.id)),{class:"h-5 w-5"}))]),s("span",rx,A(l(m.id).length)+" 款组件 ",1)]),s("h3",ox,[s("span",null,A(m.name),1)]),s("span",sx,A(m.englishName),1),s("p",ix,A(m.description),1),s("div",ax,[(f(!0),x(se,null,he(l(m.id),g=>(f(),me(b,{key:g.id,to:`/docs/${g.id}`,class:"rounded-lg border border-zinc-200/80 bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-700 transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-500/50 dark:hover:bg-blue-950/60 dark:hover:text-blue-400"},{default:U(()=>[$e(A(g.name),1)]),_:2},1032,["to"]))),128))])]),s("div",lx,[k(b,{to:`/docs/${((h=l(m.id)[0])==null?void 0:h.id)||"border-beam"}`,class:"inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"},{default:U(()=>[u[28]||(u[28]=s("span",null,"进入套件展厅",-1)),k(I(Pn),{class:"h-3.5 w-3.5 transition-transform group-hover:translate-x-1"})]),_:1},8,["to"])])])}),128))])]),s("section",cx,[k(ud,{class:"min-h-[460px]"},{default:U(()=>[u[30]||(u[30]=s("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-6xl font-black tracking-tight text-transparent"}," 为极致审美而生的动效原子 ",-1)),u[31]||(u[31]=s("p",{class:"mt-4 max-w-lg text-sm text-slate-400"}," 全面对标 Magic UI 与 Aceternity UI，支持单文件复制即用，零侵入无外部复杂构建负担。 ",-1)),s("div",dx,[k(b,{to:"/docs/lamp-effect"},{default:U(()=>[k(kr,{"shimmer-color":"#38bdf8",class:"h-11 px-6 text-sm"},{default:U(()=>[u[29]||(u[29]=s("span",null,"探索 Lamp Effect",-1)),k(I(Pn),{class:"h-4 w-4"})]),_:1})]),_:1})])]),_:1})]),s("section",ux,[s("div",px,[s("div",fx,[s("div",mx,[s("div",bx,[k(I(Rn),{class:"h-5 w-5"})]),u[32]||(u[32]=s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," Copy & Paste 模式 ",-1)),u[33]||(u[33]=s("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不是封闭的黑盒 npm 库。代码完全属于你，复制进你的项目 `src/components/ui` 即可按需自定义与扩展。 ",-1))]),s("div",xx,[s("div",gx,[k(I(tn),{class:"h-5 w-5"})]),u[34]||(u[34]=s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 单文件自包含（Zero-Config） ",-1)),u[35]||(u[35]=s("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 动画关键帧与路径封装在组件内，完全无需在 tailwind.config.js 中配置复杂的 keyframes，避免配置遗漏。 ",-1))]),s("div",hx,[s("div",vx,[k(I(Le),{class:"h-5 w-5"})]),u[36]||(u[36]=s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-zinc-100"}," 真·明暗双模自适应 ",-1)),u[37]||(u[37]=s("p",{class:"mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 不仅在深黑背景下流光溢彩，更对纯白、浅灰背景做针对性调优，确保在任何业务场景下都有高级质感。 ",-1))])])])])])}}});var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ls={exports:{}},Fa;function kx(){return Fa||(Fa=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=(function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,l={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function y(C){return C instanceof c?new c(C.type,y(C.content),C.alias):Array.isArray(C)?C.map(y):C.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(y){return Object.prototype.toString.call(y).slice(8,-1)},objId:function(y){return y.__id||Object.defineProperty(y,"__id",{value:++i}),y.__id},clone:function y(C,w){w=w||{};var T,F;switch(a.util.type(C)){case"Object":if(F=a.util.objId(C),w[F])return w[F];T={},w[F]=T;for(var D in C)C.hasOwnProperty(D)&&(T[D]=y(C[D],w));return T;case"Array":return F=a.util.objId(C),w[F]?w[F]:(T=[],w[F]=T,C.forEach(function(R,L){T[L]=y(R,w)}),T);default:return C}},getLanguage:function(y){for(;y;){var C=o.exec(y.className);if(C)return C[1].toLowerCase();y=y.parentElement}return"none"},setLanguage:function(y,C){y.className=y.className.replace(RegExp(o,"gi"),""),y.classList.add("language-"+C)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(T){var y=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(y){var C=document.getElementsByTagName("script");for(var w in C)if(C[w].src==y)return C[w]}return null}},isActive:function(y,C,w){for(var T="no-"+C;y;){var F=y.classList;if(F.contains(C))return!0;if(F.contains(T))return!1;y=y.parentElement}return!!w}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(y,C){var w=a.util.clone(a.languages[y]);for(var T in C)w[T]=C[T];return w},insertBefore:function(y,C,w,T){T=T||a.languages;var F=T[y],D={};for(var R in F)if(F.hasOwnProperty(R)){if(R==C)for(var L in w)w.hasOwnProperty(L)&&(D[L]=w[L]);w.hasOwnProperty(R)||(D[R]=F[R])}var Z=T[y];return T[y]=D,a.languages.DFS(a.languages,function(le,q){q===Z&&le!=y&&(this[le]=D)}),D},DFS:function y(C,w,T,F){F=F||{};var D=a.util.objId;for(var R in C)if(C.hasOwnProperty(R)){w.call(C,R,C[R],T||R);var L=C[R],Z=a.util.type(L);Z==="Object"&&!F[D(L)]?(F[D(L)]=!0,y(L,w,null,F)):Z==="Array"&&!F[D(L)]&&(F[D(L)]=!0,y(L,w,R,F))}}},plugins:{},highlightAll:function(y,C){a.highlightAllUnder(document,y,C)},highlightAllUnder:function(y,C,w){var T={callback:w,container:y,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),a.hooks.run("before-all-elements-highlight",T);for(var F=0,D;D=T.elements[F++];)a.highlightElement(D,C===!0,T.callback)},highlightElement:function(y,C,w){var T=a.util.getLanguage(y),F=a.languages[T];a.util.setLanguage(y,T);var D=y.parentElement;D&&D.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(D,T);var R=y.textContent,L={element:y,language:T,grammar:F,code:R};function Z(q){L.highlightedCode=q,a.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,a.hooks.run("after-highlight",L),a.hooks.run("complete",L),w&&w.call(L.element)}if(a.hooks.run("before-sanity-check",L),D=L.element.parentElement,D&&D.nodeName.toLowerCase()==="pre"&&!D.hasAttribute("tabindex")&&D.setAttribute("tabindex","0"),!L.code){a.hooks.run("complete",L),w&&w.call(L.element);return}if(a.hooks.run("before-highlight",L),!L.grammar){Z(a.util.encode(L.code));return}if(C&&r.Worker){var le=new Worker(a.filename);le.onmessage=function(q){Z(q.data)},le.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else Z(a.highlight(L.code,L.grammar,L.language))},highlight:function(y,C,w){var T={code:y,grammar:C,language:w};if(a.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=a.tokenize(T.code,T.grammar),a.hooks.run("after-tokenize",T),c.stringify(a.util.encode(T.tokens),T.language)},tokenize:function(y,C){var w=C.rest;if(w){for(var T in w)C[T]=w[T];delete C.rest}var F=new u;return b(F,F.head,y),p(y,F,C,F.head,0),h(F)},hooks:{all:{},add:function(y,C){var w=a.hooks.all;w[y]=w[y]||[],w[y].push(C)},run:function(y,C){var w=a.hooks.all[y];if(!(!w||!w.length))for(var T=0,F;F=w[T++];)F(C)}},Token:c};r.Prism=a;function c(y,C,w,T){this.type=y,this.content=C,this.alias=w,this.length=(T||"").length|0}c.stringify=function y(C,w){if(typeof C=="string")return C;if(Array.isArray(C)){var T="";return C.forEach(function(Z){T+=y(Z,w)}),T}var F={type:C.type,content:y(C.content,w),tag:"span",classes:["token",C.type],attributes:{},language:w},D=C.alias;D&&(Array.isArray(D)?Array.prototype.push.apply(F.classes,D):F.classes.push(D)),a.hooks.run("wrap",F);var R="";for(var L in F.attributes)R+=" "+L+'="'+(F.attributes[L]||"").replace(/"/g,"&quot;")+'"';return"<"+F.tag+' class="'+F.classes.join(" ")+'"'+R+">"+F.content+"</"+F.tag+">"};function d(y,C,w,T){y.lastIndex=C;var F=y.exec(w);if(F&&T&&F[1]){var D=F[1].length;F.index+=D,F[0]=F[0].slice(D)}return F}function p(y,C,w,T,F,D){for(var R in w)if(!(!w.hasOwnProperty(R)||!w[R])){var L=w[R];L=Array.isArray(L)?L:[L];for(var Z=0;Z<L.length;++Z){if(D&&D.cause==R+","+Z)return;var le=L[Z],q=le.inside,be=!!le.lookbehind,_e=!!le.greedy,ze=le.alias;if(_e&&!le.pattern.global){var Q=le.pattern.toString().match(/[imsuy]*$/)[0];le.pattern=RegExp(le.pattern.source,Q+"g")}for(var te=le.pattern||le,W=T.next,we=F;W!==C.tail&&!(D&&we>=D.reach);we+=W.value.length,W=W.next){var J=W.value;if(C.length>y.length)return;if(!(J instanceof c)){var Re=1,Me;if(_e){if(Me=d(te,we,y,be),!Me||Me.index>=y.length)break;var Ce=Me.index,ot=Me.index+Me[0].length,Ue=we;for(Ue+=W.value.length;Ce>=Ue;)W=W.next,Ue+=W.value.length;if(Ue-=W.value.length,we=Ue,W.value instanceof c)continue;for(var Te=W;Te!==C.tail&&(Ue<ot||typeof Te.value=="string");Te=Te.next)Re++,Ue+=Te.value.length;Re--,J=y.slice(we,Ue),Me.index-=we}else if(Me=d(te,0,J,be),!Me)continue;var Ce=Me.index,O=Me[0],ce=J.slice(0,Ce),X=J.slice(Ce+O.length),ge=we+J.length;D&&ge>D.reach&&(D.reach=ge);var S=W.prev;ce&&(S=b(C,S,ce),we+=ce.length),m(C,S,Re);var $=new c(R,q?a.tokenize(O,q):O,ze,O);if(W=b(C,S,$),X&&b(C,W,X),Re>1){var E={cause:R+","+Z,reach:ge};p(y,C,w,W.prev,we,E),D&&E.reach>D.reach&&(D.reach=E.reach)}}}}}}function u(){var y={value:null,prev:null,next:null},C={value:null,prev:y,next:null};y.next=C,this.head=y,this.tail=C,this.length=0}function b(y,C,w){var T=C.next,F={value:w,prev:C,next:T};return C.next=F,T.prev=F,y.length++,F}function m(y,C,w){for(var T=C.next,F=0;F<w&&T!==y.tail;F++)T=T.next;C.next=T,T.prev=C,y.length-=F}function h(y){for(var C=[],w=y.head.next;w!==y.tail;)C.push(w.value),w=w.next;return C}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(y){var C=JSON.parse(y.data),w=C.language,T=C.code,F=C.immediateClose;r.postMessage(a.highlight(T,a.languages[w],w)),F&&r.close()},!1)),a;var g=a.util.currentScript();g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0));function z(){a.manual||a.highlightAll()}if(!a.manual){var _=document.readyState;_==="loading"||_==="interactive"&&g&&g.defer?document.addEventListener("DOMContentLoaded",z):window.requestAnimationFrame?window.requestAnimationFrame(z):window.setTimeout(z,16)}return a})(t);e.exports&&(e.exports=n),typeof Ea<"u"&&(Ea.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(o,i){var l={};l["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};a["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var c={};c[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(r){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,(function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",o=function(g,z){return"✖ Error "+g+" while fetching file: "+z},i="✖ Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",c="loading",d="loaded",p="failed",u="pre[data-src]:not(["+a+'="'+d+'"]):not(['+a+'="'+c+'"])';function b(g,z,_){var y=new XMLHttpRequest;y.open("GET",g,!0),y.onreadystatechange=function(){y.readyState==4&&(y.status<400&&y.responseText?z(y.responseText):y.status>=400?_(o(y.status,y.statusText)):_(i))},y.send(null)}function m(g){var z=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(g||"");if(z){var _=Number(z[1]),y=z[2],C=z[3];return y?C?[_,Number(C)]:[_,void 0]:[_,_]}}n.hooks.add("before-highlightall",function(g){g.selector+=", "+u}),n.hooks.add("before-sanity-check",function(g){var z=g.element;if(z.matches(u)){g.code="",z.setAttribute(a,c);var _=z.appendChild(document.createElement("CODE"));_.textContent=r;var y=z.getAttribute("data-src"),C=g.language;if(C==="none"){var w=(/\.(\w+)$/.exec(y)||[,"none"])[1];C=l[w]||w}n.util.setLanguage(_,C),n.util.setLanguage(z,C);var T=n.plugins.autoloader;T&&T.loadLanguages(C),b(y,function(F){z.setAttribute(a,d);var D=m(z.getAttribute("data-range"));if(D){var R=F.split(/\r\n?|\n/g),L=D[0],Z=D[1]==null?R.length:D[1];L<0&&(L+=R.length),L=Math.max(0,Math.min(L-1,R.length)),Z<0&&(Z+=R.length),Z=Math.max(0,Math.min(Z,R.length)),F=R.slice(L,Z).join(`
`),z.hasAttribute("data-start")||z.setAttribute("data-start",String(L+1))}_.textContent=F,n.highlightElement(_)},function(F){z.setAttribute(a,p),_.textContent=F})}}),n.plugins.fileHighlight={highlight:function(z){for(var _=(z||document).querySelectorAll(u),y=0,C;C=_[y++];)n.highlightElement(C)}};var h=!1;n.fileHighlight=function(){h||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),h=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(ls)),ls.exports}var zx=kx();const cs=wx(zx);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var La={},Da;function _x(){return Da||(Da=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),La}_x();Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},Prism.languages.insertBefore("markup","cdata",i)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);const Cx={class:"relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800 text-zinc-100 shadow-sm"},Sx={class:"flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2.5 text-xs text-zinc-400"},Mx={class:"font-mono"},Ix={class:"max-h-[480px] overflow-auto p-4 text-xs font-mono leading-relaxed"},Ax={class:"!m-0 !p-0 !bg-transparent"},$x=["innerHTML"],Va=ee({__name:"CodeBlock",props:{code:{},language:{default:"html"},filename:{}},setup(e){const t=e,n=P(!1),r=ie(()=>{const i=cs.languages[t.language]||cs.languages.markup;return cs.highlight(t.code.trim(),i,t.language)});async function o(){try{await navigator.clipboard.writeText(t.code.trim()),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(i){console.error("Failed to copy",i)}}return(i,l)=>(f(),x("div",Cx,[s("div",Sx,[s("span",Mx,A(t.filename||t.language.toUpperCase()),1),s("button",{type:"button",class:"inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",onClick:o},[n.value?(f(),me(I(wt),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(f(),me(I(Rn),{key:1,class:"h-3.5 w-3.5"})),s("span",null,A(n.value?"已复制！":"复制代码"),1)])]),s("div",Ix,[s("pre",Ax,[s("code",{innerHTML:r.value},null,8,$x)])])]))}}),Px={class:"space-y-4"},Tx={class:"space-y-1"},Rx={class:"text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"},Ex={class:"text-sm text-zinc-500 dark:text-zinc-400"},Fx={class:"overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-sm transition-colors"},Lx={class:"flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 bg-zinc-50/80 px-4 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/60"},Dx={class:"flex items-center gap-1 rounded-lg bg-zinc-200/60 p-1 dark:bg-zinc-800/60 text-xs font-medium"},Vx={key:0,class:"flex items-center gap-2 text-xs"},Ox={class:"flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-0.5"},Bx={class:"relative"},jx={class:"p-4"},Nx={class:"p-4"},Hx={key:0,class:"mt-8 space-y-3"},Gx={class:"overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800"},Ux={class:"w-full text-left text-xs"},qx={class:"divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono"},Xx={class:"px-4 py-2.5 font-bold text-blue-600 dark:text-blue-400"},Wx={class:"px-4 py-2.5 text-pink-600 dark:text-pink-400"},Yx={class:"px-4 py-2.5 text-zinc-500"},Kx={class:"px-4 py-2.5 font-sans text-zinc-600 dark:text-zinc-300"},Zx=ee({__name:"ComponentPreview",props:{title:{},description:{},componentCode:{},usageCode:{},componentFilename:{},propsList:{}},setup(e){const t=e,n=P("preview"),r=P("default"),o=P(0),i=P(!0);let l=null;Pe(()=>{i.value=document.documentElement.classList.contains("dark"),l=new MutationObserver(()=>{i.value=document.documentElement.classList.contains("dark")}),l.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]})}),Ee(()=>{l==null||l.disconnect()});const a=ie(()=>r.value==="dark"?!0:r.value==="light"?!1:i.value);function c(){o.value++}return(d,p)=>(f(),x("div",Px,[s("div",Tx,[s("h2",Rx,A(t.title),1),s("p",Ex,A(t.description),1)]),s("div",Fx,[s("div",Lx,[s("div",Dx,[s("button",{type:"button",class:M(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="preview"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:p[0]||(p[0]=u=>n.value="preview")},[k(I(zc),{class:"h-3.5 w-3.5"}),p[6]||(p[6]=s("span",null,"实时效果",-1))],2),s("button",{type:"button",class:M(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="component"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:p[1]||(p[1]=u=>n.value="component")},[k(I(vr),{class:"h-3.5 w-3.5"}),s("span",null,"组件源码 ("+A(t.componentFilename)+")",1)],2),s("button",{type:"button",class:M(["inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all",n.value==="usage"?"bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:p[2]||(p[2]=u=>n.value="usage")},[k(I(vr),{class:"h-3.5 w-3.5"}),p[7]||(p[7]=s("span",null,"业务调用 (Usage.vue)",-1))],2)]),n.value==="preview"?(f(),x("div",Vx,[p[8]||(p[8]=s("span",{class:"text-zinc-400"},"视窗底色：",-1)),s("div",Ox,[s("button",{type:"button",class:M(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="default"?"bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100 font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:p[3]||(p[3]=u=>r.value="default")}," 自适应 ",2),s("button",{type:"button",class:M(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="light"?"bg-white text-zinc-900 shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:p[4]||(p[4]=u=>r.value="light")}," 亮白 ",2),s("button",{type:"button",class:M(["px-2 py-0.5 rounded text-[11px] font-medium transition-colors",r.value==="dark"?"bg-black text-white shadow-xs font-semibold":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"]),onClick:p[5]||(p[5]=u=>r.value="dark")}," 暗黑 ",2)]),s("button",{type:"button",class:"inline-flex items-center gap-1 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",title:"重新触发动效",onClick:c},[k(I(Mc),{class:"h-3.5 w-3.5"})])])):N("",!0)]),s("div",Bx,[$n(s("div",{class:M(["relative flex min-h-[360px] w-full items-center justify-center overflow-hidden p-8 transition-colors duration-200",a.value?"dark bg-black text-zinc-100":"bg-zinc-100/80 text-zinc-900"])},[(f(),x("div",{key:o.value,class:"w-full flex items-center justify-center"},[Oe(d.$slots,"default",{isDark:a.value})]))],2),[[Jo,n.value==="preview"]]),$n(s("div",jx,[k(Va,{code:t.componentCode,filename:t.componentFilename,language:"html"},null,8,["code","filename"])],512),[[Jo,n.value==="component"]]),$n(s("div",Nx,[k(Va,{code:t.usageCode,filename:"UsageExample.vue",language:"html"},null,8,["code"])],512),[[Jo,n.value==="usage"]])])]),t.propsList&&t.propsList.length>0?(f(),x("div",Hx,[p[10]||(p[10]=s("h3",{class:"text-base font-semibold text-zinc-900 dark:text-zinc-100"}," Props 属性参考 ",-1)),s("div",Gx,[s("table",Ux,[p[9]||(p[9]=s("thead",{class:"border-b border-zinc-200 bg-zinc-50/80 font-mono text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"},[s("tr",null,[s("th",{class:"px-4 py-2.5"},"属性名"),s("th",{class:"px-4 py-2.5"},"类型"),s("th",{class:"px-4 py-2.5"},"默认值"),s("th",{class:"px-4 py-2.5"},"说明")])],-1)),s("tbody",qx,[(f(!0),x(se,null,he(t.propsList,u=>(f(),x("tr",{key:u.name,class:"text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40"},[s("td",Xx,A(u.name),1),s("td",Wx,A(u.type),1),s("td",Yx,A(u.default),1),s("td",Kx,A(u.description),1)]))),128))])])])])):N("",!0)]))}}),Qx=["onMouseenter","onClick"],Jx={key:0,class:"pointer-events-none absolute -top-9 z-50 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-800/95 dark:text-zinc-200"},eg=ee({__name:"Dock",props:{items:{},iconSize:{default:44},iconMagnification:{default:68},iconDistance:{default:120},direction:{default:"bottom"},class:{}},setup(e){const t=e,n=P(null),r=P(null),o=P(null);function i(u){r.value=u.clientX}function l(){r.value=null,o.value=null}function a(u){if(r.value===null||!u)return 1;const b=u.getBoundingClientRect(),m=b.left+b.width/2,h=Math.abs(r.value-m);if(h>t.iconDistance)return 1;const g=h/t.iconDistance,z=(t.iconMagnification-t.iconSize)/t.iconSize,_=.5*(1+Math.cos(g*Math.PI));return 1+z*_}const c=P([]);function d(u,b){u&&(c.value[b]=u)}function p(u){const b=c.value[u],m=a(b);return Math.round(t.iconSize*m)}return(u,b)=>(f(),x("div",{ref_key:"dockRef",ref:n,class:M(I(ne)("mx-auto flex h-16 items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/70 px-4 py-2 shadow-xl backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 transition-all duration-200 select-none",t.direction==="bottom"&&"items-end",t.direction==="top"&&"items-start",t.direction==="middle"&&"items-center",t.class)),onMousemove:i,onMouseleave:l},[t.items&&t.items.length>0?(f(!0),x(se,{key:0},he(t.items,(m,h)=>(f(),x("div",{key:m.id,ref_for:!0,ref:g=>d(g,h),class:"group relative flex items-center justify-center cursor-pointer transition-all duration-100 ease-out",style:fe({width:`${p(h)}px`,height:`${p(h)}px`}),onMouseenter:g=>o.value=m.label||null,onClick:g=>m.onClick&&m.onClick()},[(f(),me(Je(m.href?"a":"button"),{href:m.href,class:M(["flex h-full w-full items-center justify-center rounded-2xl border transition-colors shadow-sm","border-zinc-200/70 bg-white/90 text-zinc-700 hover:text-zinc-950","dark:border-zinc-700/60 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:text-white"])},{default:U(()=>[(f(),me(Je(m.icon),{class:"h-1/2 w-1/2 transition-transform duration-100"}))]),_:2},1032,["href"])),k(et,{name:"dock-fade"},{default:U(()=>[o.value===m.label&&m.label?(f(),x("div",Jx,A(m.label),1)):N("",!0)]),_:2},1024),b[0]||(b[0]=s("span",{class:"absolute -bottom-1.5 h-1 w-1 rounded-full bg-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-zinc-500"},null,-1))],44,Qx))),128)):Oe(u.$slots,"default",{},void 0,!0,1)],34))}}),tg=Fe(eg,[["__scopeId","data-v-3c8b0d2e"]]),ng={key:0,class:"pointer-events-none absolute inset-0 h-full w-full select-none",xmlns:"http://www.w3.org/2000/svg"},rg=["r","stroke","stroke-width"],og={class:"orbit-rotator pointer-events-auto h-full w-full"},sg={class:"orbit-item pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"},ig=ee({__name:"OrbitLogos",props:{radius:{default:120},duration:{default:20},delay:{default:0},reverse:{type:Boolean,default:!1},path:{type:Boolean,default:!0},pathColor:{},pathWidth:{default:1},tiltAngle:{default:0},class:{}},setup(e){const t=e,n=ie(()=>({"--radius":`${t.radius}px`,"--duration":`${t.duration}s`,"--delay":`-${t.delay}s`,"--direction":t.reverse?"reverse":"normal","--counter-direction":t.reverse?"normal":"reverse","--tilt":`${t.tiltAngle}deg`,width:`${t.radius*2}px`,height:`${t.radius*2}px`}));return(r,o)=>(f(),x("div",{style:fe(n.value),class:M(I(ne)("pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full [transform-style:preserve-3d]",t.class))},[t.path?(f(),x("svg",ng,[s("circle",{class:"stroke-zinc-300/60 dark:stroke-zinc-800/80 stroke-dashed",cx:"50%",cy:"50%",r:t.radius,fill:"none",stroke:t.pathColor,"stroke-width":t.pathWidth,"stroke-dasharray":"4 4"},null,8,rg)])):N("",!0),s("div",og,[s("div",sg,[Oe(r.$slots,"default",{},void 0,!0)])])],6))}}),Zr=Fe(ig,[["__scopeId","data-v-583093f1"]]),ag=["src","alt"],lg={class:"pointer-events-none absolute bottom-4 right-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},cg=["src","alt"],dg={class:"pointer-events-none absolute bottom-4 left-4 z-10 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md"},ug={class:"absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-zinc-800 shadow-xl backdrop-blur-md transition-transform duration-100 hover:scale-110 active:scale-95 dark:border-zinc-700/80 dark:bg-zinc-900/90 dark:text-zinc-200"},pg=ee({__name:"ImageCompare",props:{beforeImage:{},afterImage:{},beforeLabel:{default:"Before"},afterLabel:{default:"After"},initialPosition:{default:50},class:{}},setup(e){const t=e,n=P(null),r=P(t.initialPosition),o=P(!1);function i(p){if(!n.value)return;const u=n.value.getBoundingClientRect(),b=p-u.left,m=Math.min(Math.max(b/u.width*100,0),100);r.value=Number(m.toFixed(2))}function l(p){o.value=!0,i(p.clientX)}function a(p){o.value&&i(p.clientX)}function c(){o.value=!1}function d(p){!o.value||p.touches.length===0||i(p.touches[0].clientX)}return Pe(()=>{window.addEventListener("mouseup",c),window.addEventListener("mousemove",a),window.addEventListener("touchend",c),window.addEventListener("touchmove",d)}),Ee(()=>{window.removeEventListener("mouseup",c),window.removeEventListener("mousemove",a),window.removeEventListener("touchend",c),window.removeEventListener("touchmove",d)}),(p,u)=>(f(),x("div",{ref_key:"containerRef",ref:n,class:M(I(ne)("relative select-none overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 shadow-xl cursor-ew-resize dark:border-zinc-800/80",t.class)),onMousedown:l,onTouchstart:u[0]||(u[0]=b=>o.value=!0)},[s("img",{src:t.afterImage,alt:t.afterLabel,class:"pointer-events-none h-full w-full object-cover"},null,8,ag),s("div",lg,A(t.afterLabel),1),s("div",{class:"pointer-events-none absolute inset-0 h-full w-full overflow-hidden",style:fe({clipPath:`inset(0 ${100-r.value}% 0 0)`})},[s("img",{src:t.beforeImage,alt:t.beforeLabel,class:"h-full w-full object-cover"},null,8,cg),s("div",dg,A(t.beforeLabel),1)],4),s("div",{class:"pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]",style:fe({left:`${r.value}%`})},[s("div",ug,[k(I(wc),{class:"h-4 w-4"})])],4)],34))}}),fg={class:"group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/90 dark:bg-zinc-950/90"},mg={class:"flex items-center gap-2.5 min-w-0"},bg={class:"relative flex h-3 w-3 shrink-0 items-center justify-center"},xg={class:"flex flex-col min-w-0"},gg={class:"flex items-center gap-2"},hg={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate"},vg={class:"text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5"},yg={class:"flex items-center gap-2 shrink-0 text-xs text-zinc-500"},wg={key:0,class:"flex items-center gap-1 font-mono text-[11px] rounded-md bg-zinc-100 px-2 py-0.5 dark:bg-zinc-900 dark:text-zinc-300"},kg={key:0,class:"border-t border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-2.5"},zg={class:"mt-0.5 shrink-0"},_g={key:3,class:"inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 text-[10px] text-zinc-400 dark:border-zinc-700"},Cg={class:"flex-1 min-w-0"},Sg={class:"flex items-center justify-between"},Mg={key:0,class:"font-mono text-[10px] text-zinc-400 shrink-0 ml-2"},Ig={key:0,class:"text-[11px] text-zinc-400 font-mono mt-0.5 truncate"},Ag=ee({__name:"AgentStatus",props:{status:{default:"thinking"},agentName:{default:"Aura AI Agent"},currentTask:{default:"Thinking and orchestrating subagents..."},elapsed:{type:Boolean,default:!0},steps:{default:()=>[{id:1,name:"Understand user prompt requirements",status:"done",duration:"0.4s"},{id:2,name:"Search codebase for components & hooks",status:"done",duration:"1.2s"},{id:3,name:"Run Playwright headless visual verification",status:"running",detail:"Evaluating DOM computed styles..."},{id:4,name:"Commit and build production artifacts",status:"pending"}]},class:{}},setup(e){const t=e,n=P(!1),r=P(0);let o=null;Pe(()=>{t.elapsed&&(o=setInterval(()=>{r.value+=.1},100))}),Ee(()=>{o&&clearInterval(o)});const i=ie(()=>`${r.value.toFixed(1)}s`),l=ie(()=>{switch(t.status){case"thinking":return{icon:Le,label:"思考推演中",color:"text-sky-500 dark:text-sky-400",badgeBg:"bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",pulseBg:"bg-sky-500"};case"running":return{icon:da,label:"自主执行中",color:"text-blue-500 dark:text-blue-400 animate-spin",badgeBg:"bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",pulseBg:"bg-blue-500"};case"tool_call":return{icon:z0,label:"调用工具中",color:"text-amber-500 dark:text-amber-400",badgeBg:"bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",pulseBg:"bg-amber-500"};case"success":return{icon:Rs,label:"任务已闭环",color:"text-emerald-500 dark:text-emerald-400",badgeBg:"bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",pulseBg:"bg-emerald-500"};case"error":return{icon:Ts,label:"出现异常",color:"text-rose-500 dark:text-rose-400",badgeBg:"bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",pulseBg:"bg-rose-500"};default:return{icon:Le,label:"待命中",color:"text-zinc-400",badgeBg:"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",pulseBg:"bg-zinc-400"}}});return(a,c)=>(f(),x("div",{class:M(I(ne)("w-full max-w-lg transition-all duration-300",t.class))},[s("div",fg,[s("div",{class:"flex items-center justify-between gap-3 px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/60",onClick:c[0]||(c[0]=d=>n.value=!n.value)},[s("div",mg,[s("div",bg,[s("span",{class:M(["absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",l.value.pulseBg])},null,2),s("span",{class:M(["relative inline-flex h-2 w-2 rounded-full",l.value.pulseBg])},null,2)]),s("div",xg,[s("div",gg,[s("span",hg,A(t.agentName),1),s("span",{class:M(["rounded-full border px-2 py-0.2 text-[10px] font-semibold",l.value.badgeBg])},A(l.value.label),3)]),s("p",vg,A(t.currentTask),1)])]),s("div",yg,[t.elapsed?(f(),x("div",wg,[k(I(kc),{class:"h-3 w-3 text-zinc-400"}),s("span",null,A(i.value),1)])):N("",!0),k(I(Jn),{class:M(["h-4 w-4 text-zinc-400 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])]),k(et,{name:"agent-expand"},{default:U(()=>[n.value&&t.steps&&t.steps.length>0?(f(),x("div",kg,[c[1]||(c[1]=s("div",{class:"text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2"}," 执行轨迹步骤 (Execution Steps) ",-1)),(f(!0),x(se,null,he(t.steps,(d,p)=>(f(),x("div",{key:d.id,class:"flex items-start gap-2.5 text-xs"},[s("div",zg,[d.status==="done"?(f(),me(I(Rs),{key:0,class:"h-4 w-4 text-emerald-500"})):d.status==="running"?(f(),me(I(da),{key:1,class:"h-4 w-4 text-sky-500 animate-spin"})):d.status==="error"?(f(),me(I(Ts),{key:2,class:"h-4 w-4 text-rose-500"})):(f(),x("span",_g,A(p+1),1))]),s("div",Cg,[s("div",Sg,[s("span",{class:M(["font-medium truncate",d.status==="done"&&"text-zinc-700 dark:text-zinc-300",d.status==="running"&&"text-sky-600 dark:text-sky-400 font-semibold",d.status==="pending"&&"text-zinc-400 dark:text-zinc-500",d.status==="error"&&"text-rose-500 font-semibold"])},A(d.name),3),d.duration?(f(),x("span",Mg,A(d.duration),1)):N("",!0)]),d.detail?(f(),x("p",Ig,A(d.detail),1)):N("",!0)])]))),128))])):N("",!0)]),_:1})])],2))}}),$g=Fe(Ag,[["__scopeId","data-v-d55be07e"]]),Pg={class:"flex h-10 w-full items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 select-none"},Tg={class:"flex items-center gap-1.5 text-[11px] font-medium text-zinc-400"},Rg={class:"truncate max-w-[220px] sm:max-w-md"},Eg={key:0,class:"flex items-center gap-2"},Fg={key:1,class:"w-12"},Lg={class:"text-blue-400 select-none font-bold"},Dg={class:"text-zinc-100 font-semibold flex-1 break-all"},Vg={key:0,class:"inline-block h-4 w-2 translate-y-0.5 bg-blue-500 animate-pulse ml-0.5"},Og={key:1,class:"text-emerald-400 font-medium break-all"},Bg={key:2,class:"text-rose-400 font-medium break-all"},jg={key:3,class:"text-amber-400 font-medium break-all"},Ng={key:4,class:"text-sky-400 font-medium break-all"},Hg={key:5,class:"text-zinc-400 break-all"},Gg={key:0,class:"flex items-center gap-2 pt-1"},Ug=ee({__name:"TypewriterTerminal",props:{title:{default:"zsh - aura@developer:~ (80x24)"},lines:{default:()=>[{type:"input",text:"pnpm dlx aura-ui@latest add agent-status dock"},{type:"output",text:"⠋ Resolving packages & peer dependencies..."},{type:"output",text:"✔ Cloned src/components/ui/AgentStatus.vue"},{type:"output",text:"✔ Cloned src/components/ui/Dock.vue"},{type:"success",text:"✨ Successfully installed 2 motion primitives in 260ms."},{type:"input",text:"aura test --visual-regression"},{type:"info",text:"ℹ Running Playwright headless test in Chromium..."},{type:"success",text:"✔ All 19 components passed 60fps frame rate check!"}]},typingSpeed:{default:35},pauseEnd:{default:3500},loop:{type:Boolean,default:!0},controls:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=P([]),r=P(0),o=P(0),i=P(!1),l=P(!1),a=P(!1),c=P(null);let d=null;function p(){c.value&&(c.value.scrollTop=c.value.scrollHeight)}function u(){d&&clearTimeout(d),n.value=[],r.value=0,o.value=0,i.value=!1,l.value=!1,b()}function b(){if(!t.lines||t.lines.length===0)return;if(r.value>=t.lines.length){i.value=!1,l.value=!0,t.loop&&(d=setTimeout(()=>{u()},t.pauseEnd));return}const h=t.lines[r.value];if(h.type==="input")if(i.value=!0,o.value===0&&n.value.push({type:"input",text:"",prefix:h.prefix||"$ "}),o.value<h.text.length){const g=n.value[n.value.length-1];g.text+=h.text[o.value],o.value++,p();const z=Math.floor(Math.random()*25)-10,_=Math.max(15,t.typingSpeed+z);d=setTimeout(b,_)}else o.value=0,r.value++,i.value=!1,p(),d=setTimeout(b,400);else{i.value=!1,n.value.push({type:h.type,text:h.text,prefix:h.prefix}),r.value++,p();const g=h.delay??220;d=setTimeout(b,g)}}function m(){const h=t.lines.map(g=>`${g.prefix||(g.type==="input"?"$ ":"")}${g.text}`).join(`
`);navigator.clipboard.writeText(h),a.value=!0,setTimeout(()=>{a.value=!1},2e3)}return Pe(()=>{u()}),Ee(()=>{d&&clearTimeout(d)}),Xe(()=>t.lines,()=>{u()},{deep:!0}),(h,g)=>(f(),x("div",{class:M(I(ne)("relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 font-mono text-xs sm:text-sm text-zinc-300 shadow-2xl backdrop-blur-md dark:border-zinc-800/80",t.class))},[s("div",Pg,[g[0]||(g[0]=s("div",{class:"flex items-center gap-2"},[s("span",{class:"h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm transition-transform hover:scale-110"}),s("span",{class:"h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm transition-transform hover:scale-110"}),s("span",{class:"h-3 w-3 rounded-full bg-[#27c93f] shadow-sm transition-transform hover:scale-110"})],-1)),s("div",Tg,[k(I(fr),{class:"h-3.5 w-3.5 text-zinc-500"}),s("span",Rg,A(t.title),1)]),t.controls?(f(),x("div",Eg,[s("button",{onClick:u,title:"重新播放",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[k(I(f0),{class:"h-3.5 w-3.5"})]),s("button",{onClick:m,title:"复制所有命令",class:"flex h-6 w-6 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"},[a.value?(f(),me(I(wt),{key:0,class:"h-3.5 w-3.5 text-emerald-400"})):(f(),me(I(Rn),{key:1,class:"h-3.5 w-3.5"}))])])):(f(),x("div",Fg))]),s("div",{ref_key:"terminalBodyRef",ref:c,class:"max-h-80 min-h-[220px] overflow-y-auto p-4 sm:p-5 space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-800"},[(f(!0),x(se,null,he(n.value,(z,_)=>(f(),x("div",{key:_,class:"flex items-start gap-2 leading-relaxed"},[z.type==="input"?(f(),x(se,{key:0},[s("span",Lg,A(z.prefix||"$ "),1),s("span",Dg,[$e(A(z.text)+" ",1),i.value&&_===n.value.length-1?(f(),x("span",Vg)):N("",!0)])],64)):z.type==="success"?(f(),x("span",Og,A(z.text),1)):z.type==="error"?(f(),x("span",Bg,A(z.text),1)):z.type==="warning"?(f(),x("span",jg,A(z.text),1)):z.type==="info"?(f(),x("span",Ng,A(z.text),1)):(f(),x("span",Hg,A(z.text),1))]))),128)),l.value?(f(),x("div",Gg,[...g[1]||(g[1]=[s("span",{class:"text-blue-400 font-bold select-none"},"$ ",-1),s("span",{class:"inline-block h-4 w-2 bg-zinc-500 animate-pulse"},null,-1)])])):N("",!0)],512)],2))}}),qg={class:"p-3 sm:p-4 pb-2"},Xg=["placeholder"],Wg={class:"flex items-center justify-between border-t border-zinc-100 px-3 py-2.5 dark:border-zinc-900"},Yg={class:"flex items-center gap-1.5 sm:gap-2"},Kg={class:"relative"},Zg={key:0,class:"absolute bottom-full left-0 mb-2 w-52 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-2xl backdrop-blur-md dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 select-none"},Qg=["onClick"],Jg={key:0,class:"rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.2 text-[9px] text-zinc-500"},eh={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"上传图像或文件"},th={type:"button",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",title:"语音输入"},nh={class:"flex items-center gap-2"},rh=["disabled"],oh=ee({__name:"PromptInput",props:{modelValue:{default:""},placeholder:{default:"向 Aura AI 提问、生成 UI 动效，或输入 / 触发指令..."},loading:{type:Boolean,default:!1},selectedModel:{default:"deepseek-r1"},models:{default:()=>[{id:"deepseek-r1",name:"DeepSeek R1",badge:"Reasoning"},{id:"claude-3-7-sonnet",name:"Claude 3.7 Sonnet",badge:"Hybrid"},{id:"gpt-4o",name:"GPT-4o Omni",badge:"Multimodal"}]},webSearch:{type:Boolean,default:!1},maxRows:{default:6},class:{}},emits:["update:modelValue","submit","stop","update:selectedModel","toggleWebSearch"],setup(e,{emit:t}){const n=e,r=t,o=P(null),i=P(!1),l=P(n.webSearch),a=ie({get:()=>n.modelValue,set:g=>r("update:modelValue",g)}),c=ie(()=>n.models.find(g=>g.id===n.selectedModel)||n.models[0]);function d(g){const z=g.target;a.value=z.value,p()}function p(){if(!o.value)return;o.value.style.height="auto";const g=Math.min(o.value.scrollHeight,24*n.maxRows);o.value.style.height=`${g}px`}function u(g){g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),b())}function b(){if(n.loading){r("stop");return}a.value.trim()&&r("submit",a.value)}function m(){l.value=!l.value,r("toggleWebSearch",l.value)}function h(g){r("update:selectedModel",g),i.value=!1}return(g,z)=>(f(),x("div",{class:M(I(ne)("group relative w-full rounded-2xl border transition-all duration-300 shadow-xl backdrop-blur-xl","border-zinc-200/90 hover:border-zinc-300 dark:border-zinc-800/90 dark:hover:border-zinc-700","bg-white/85 dark:bg-zinc-950/85",n.class))},[s("div",qg,[$n(s("textarea",{ref_key:"textareaRef",ref:o,"onUpdate:modelValue":z[0]||(z[0]=_=>a.value=_),placeholder:n.placeholder,rows:"1",onInput:d,onKeydown:u,class:"w-full resize-none border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 bg-transparent text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-500 leading-relaxed font-sans shadow-none",style:{outline:"none","box-shadow":"none"}},null,40,Xg),[[Oo,a.value]])]),s("div",Wg,[s("div",Yg,[s("div",Kg,[s("button",{type:"button",onClick:z[1]||(z[1]=_=>i.value=!i.value),class:"flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"},[k(I(Le),{class:"h-3.5 w-3.5 text-blue-500"}),s("span",null,A(c.value.name),1),k(I(Jn),{class:"h-3 w-3 text-zinc-400"})]),k(et,{name:"model-pop"},{default:U(()=>[i.value?(f(),x("div",Zg,[z[2]||(z[2]=s("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," 切换推理基座 ",-1)),(f(!0),x(se,null,he(n.models,_=>(f(),x("button",{key:_.id,type:"button",onClick:y=>h(_.id),class:M(["flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",_.id===n.selectedModel?"bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400":"text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"])},[s("span",null,A(_.name),1),_.badge?(f(),x("span",Jg,A(_.badge),1)):N("",!0)],10,Qg))),128))])):N("",!0)]),_:1})]),s("button",{type:"button",onClick:m,class:M(["flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium transition-colors border",l.value?"border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400":"border-transparent text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"]),title:"联网实时搜索"},[k(I(qn),{class:"h-3.5 w-3.5"}),z[3]||(z[3]=s("span",{class:"hidden sm:inline"},"深度搜索",-1))],2),s("button",eh,[k(I(d0),{class:"h-3.5 w-3.5"})]),s("button",th,[k(I(vo),{class:"h-3.5 w-3.5"})])]),s("div",nh,[z[4]||(z[4]=s("span",{class:"hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-zinc-400"},[s("span",null,"Enter ↵ 发送")],-1)),s("button",{type:"button",onClick:b,disabled:!n.loading&&!a.value.trim(),class:M(["flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 shadow-md",n.loading?"bg-rose-500 text-white hover:bg-rose-600":a.value.trim()?"bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 active:scale-95":"bg-zinc-100 text-zinc-400 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"])},[n.loading?(f(),me(I(g0),{key:0,class:"h-3.5 w-3.5 fill-current"})):(f(),me(I(vc),{key:1,class:"h-4 w-4"}))],10,rh)])])],2))}}),sh=Fe(oh,[["__scopeId","data-v-2c565fce"]]),ih={class:"flex items-center gap-2.5 text-xs"},ah={class:"relative flex h-4 w-4 items-center justify-center"},lh={key:0,class:"absolute -inset-1 rounded-full bg-blue-500/20 animate-ping"},ch={class:"flex items-center gap-2"},dh={class:"font-bold text-zinc-900 dark:text-zinc-100"},uh={class:"inline-flex items-center gap-1 rounded-md bg-zinc-200/60 px-2 py-0.5 font-mono text-[11px] text-zinc-500 dark:bg-zinc-800/80 dark:text-zinc-400"},ph={key:0,class:"border-t border-zinc-200/70 px-4 py-3.5 dark:border-zinc-800/70"},fh={class:"border-l-2 border-blue-500/70 pl-3.5 font-mono text-xs leading-relaxed text-zinc-600 dark:border-blue-400/70 dark:text-zinc-400 whitespace-pre-wrap select-text"},mh=ee({__name:"ThoughtAccordion",props:{duration:{default:"思考用时 12.6 秒"},status:{default:"complete"},defaultOpen:{type:Boolean,default:!0},thoughtText:{default:`> 1. 解析用户需求：为 Vue 3 全系打造顶级 AI 原生交互动效。
> 2. 几何与物理模型推演：使用 CSS 3D 矩阵解构空间深度，保持 60fps 满帧性能。
> 3. 边界与异常收敛：引入状态机阻尼回弹，确保单文件零配置即刻分发。
> 4. 自愈与验证：通过 Playwright 双模态 Chromium 验证无色彩渗漏，交付闭环。`},class:{}},setup(e){const t=e,n=P(t.defaultOpen),r=P(!1);function o(){navigator.clipboard.writeText(t.thoughtText),r.value=!0,setTimeout(()=>{r.value=!1},2e3)}return(i,l)=>(f(),x("div",{class:M(I(ne)("w-full overflow-hidden rounded-2xl border transition-all duration-300",n.value?"border-zinc-200/90 bg-zinc-50/70 shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/40":"border-zinc-200/60 bg-white/60 hover:border-zinc-300 dark:border-zinc-800/60 dark:bg-zinc-950/60",t.class))},[s("div",{class:"flex items-center justify-between px-4 py-3 cursor-pointer select-none transition-colors hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40",onClick:l[2]||(l[2]=a=>n.value=!n.value)},[s("div",ih,[s("div",ah,[k(I(Le),{class:M(["h-4 w-4 text-blue-500 transition-transform duration-300",t.status==="thinking"&&"animate-spin"])},null,8,["class"]),t.status==="thinking"?(f(),x("span",lh)):N("",!0)]),s("div",ch,[s("span",dh,A(t.status==="thinking"?"正在深度思考推演...":"已深度思考"),1),s("span",uh,[k(I(kc),{class:"h-3 w-3"}),s("span",null,A(t.duration),1)])])]),s("div",{class:"flex items-center gap-1.5",onClick:l[1]||(l[1]=yt(()=>{},["stop"]))},[s("button",{type:"button",onClick:o,title:"复制思考过程",class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[r.value?(f(),me(I(wt),{key:0,class:"h-3.5 w-3.5 text-emerald-500"})):(f(),me(I(Rn),{key:1,class:"h-3.5 w-3.5"}))]),s("button",{type:"button",onClick:l[0]||(l[0]=a=>n.value=!n.value),class:"flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"},[k(I(Jn),{class:M(["h-4 w-4 transition-transform duration-200",n.value&&"rotate-180"])},null,8,["class"])])])]),k(et,{name:"thought-slide"},{default:U(()=>[n.value?(f(),x("div",ph,[s("div",fh,[Oe(i.$slots,"default",{},()=>[$e(A(t.thoughtText),1)],!0)])])):N("",!0)]),_:3})],2))}}),bh=Fe(mh,[["__scopeId","data-v-00c62984"]]),xh=["onClick","onMouseenter"],gh=ee({__name:"FluidTabs",props:{modelValue:{default:""},tabs:{default:()=>[]},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=P(null),i=P([]),l=P({left:0,width:0,opacity:0}),a=P({left:0,width:0,opacity:0});function c(m,h){m&&(i.value[h]=m)}function d(){Hn(()=>{if(!o.value)return;const m=n.tabs.findIndex(z=>z.id===n.modelValue);if(m===-1||!i.value[m]){l.value.opacity=0;return}const h=o.value.getBoundingClientRect(),g=i.value[m].getBoundingClientRect();l.value={left:g.left-h.left,width:g.width,opacity:1}})}function p(m){if(!o.value||!i.value[m])return;const h=o.value.getBoundingClientRect(),g=i.value[m].getBoundingClientRect();a.value={left:g.left-h.left,width:g.width,opacity:1}}function u(){a.value.opacity=0}function b(m){r("update:modelValue",m),r("change",m)}return Xe(()=>n.modelValue,()=>{d()}),Xe(()=>n.tabs,()=>{d()},{deep:!0}),Pe(()=>{!n.modelValue&&n.tabs.length>0&&r("update:modelValue",n.tabs[0].id),d(),window.addEventListener("resize",d)}),(m,h)=>(f(),x("div",{ref_key:"containerRef",ref:o,class:M(I(ne)("relative inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-zinc-100/80 p-1.5 shadow-inner backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80 select-none",n.class)),onMouseleave:u},[s("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-zinc-200/60 transition-all duration-200 ease-out dark:bg-zinc-800/60",style:fe({left:`${a.value.left}px`,width:`${a.value.width}px`,opacity:a.value.opacity})},null,4),s("div",{class:"pointer-events-none absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-800 dark:shadow-black/40",style:fe({left:`${l.value.left}px`,width:`${l.value.width}px`,opacity:l.value.opacity})},null,4),(f(!0),x(se,null,he(n.tabs,(g,z)=>(f(),x("button",{key:g.id,ref_for:!0,ref:_=>c(_,z),type:"button",onClick:_=>b(g.id),onMouseenter:_=>p(z),class:M(["relative z-10 flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-200",n.modelValue===g.id?"text-zinc-900 dark:text-zinc-100":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"])},[g.icon?(f(),me(Je(g.icon),{key:0,class:M(["h-4 w-4 transition-transform duration-200",n.modelValue===g.id?"scale-110 text-blue-600 dark:text-blue-400":"text-zinc-400"])},null,8,["class"])):N("",!0),s("span",null,A(g.label),1),g.badge?(f(),x("span",{key:1,class:M(["rounded-full px-1.5 py-0.2 text-[10px] font-bold font-mono transition-colors",n.modelValue===g.id?"bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300":"bg-zinc-200/80 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"])},A(g.badge),3)):N("",!0)],42,xh))),128))],34))}}),hh={class:"relative z-10 flex items-center gap-2"},vh={key:2},yh={key:3},wh={key:4},kh={key:5,class:"ml-1 inline-block font-mono text-[11px] font-bold"},oo=ee({__name:"HoldToConfirm",props:{duration:{default:1200},label:{default:"长按以确认执行"},holdingLabel:{default:"保持长按不放..."},confirmedLabel:{default:"已成功确认！"},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,o=P(0),i=P(!1),l=P(!1);let a=null,c=0;const d=ie(()=>{switch(n.variant){case"danger":return{bg:"bg-rose-500/10 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-500/30",fill:"bg-rose-600 dark:bg-rose-500",ring:"text-rose-500",icon:Pc};case"warning":return{bg:"bg-amber-500/10 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-500/30",fill:"bg-amber-600 dark:bg-amber-500",ring:"text-amber-500",icon:ui};default:return{bg:"bg-blue-500/10 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border-blue-500/30",fill:"bg-blue-600 dark:bg-blue-500",ring:"text-blue-500",icon:wt}}});function p(){if(l.value)return;i.value=!0,c=performance.now();function b(){const m=performance.now()-c,h=Math.min(m/n.duration*100,100);o.value=h,h<100?a=requestAnimationFrame(b):(i.value=!1,l.value=!0,r("confirm"),setTimeout(()=>{l.value=!1,o.value=0},2500))}a=requestAnimationFrame(b)}function u(){l.value||(i.value=!1,a!==null&&(cancelAnimationFrame(a),a=null),o.value=0,r("cancel"))}return Ee(()=>{a!==null&&cancelAnimationFrame(a)}),(b,m)=>(f(),x("button",{type:"button",class:M(I(ne)("group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-xl border px-5 text-xs sm:text-sm font-semibold select-none transition-all duration-200 active:scale-95 cursor-pointer",d.value.bg,l.value&&"!bg-emerald-600 !border-emerald-600 text-white",n.class)),onMousedown:p,onMouseup:u,onMouseleave:u,onTouchstart:yt(p,["prevent"]),onTouchend:yt(u,["prevent"])},[l.value?N("",!0):(f(),x("div",{key:0,class:M(["pointer-events-none absolute inset-y-0 left-0 opacity-25 transition-[width] ease-linear",d.value.fill]),style:fe({width:`${o.value}%`})},null,6)),s("span",hh,[l.value?(f(),me(I(wt),{key:0,class:"h-4 w-4 animate-bounce"})):(f(),me(Je(d.value.icon),{key:1,class:M(["h-4 w-4 transition-transform duration-200",i.value&&"scale-125 animate-pulse"])},null,8,["class"])),l.value?(f(),x("span",vh,A(n.confirmedLabel),1)):i.value?(f(),x("span",yh,A(n.holdingLabel),1)):(f(),x("span",wh,A(n.label),1)),i.value&&!l.value?(f(),x("span",kh,A(Math.round(o.value))+"% ",1)):N("",!0)])],34))}}),zh={key:0,class:"flex h-10 items-center gap-1.5 px-4 text-xs sm:text-sm font-semibold text-white"},ds=ee({__name:"ConfirmMorph",props:{label:{default:"删除此资源"},confirmText:{default:"确定删除"},cancelText:{default:"取消"},icon:{},variant:{default:"danger"},class:{}},emits:["confirm","cancel"],setup(e,{emit:t}){const n=e,r=t,o=P(!1),i=P(!1);function l(){i.value||(o.value=!0)}function a(){i.value=!0,r("confirm"),setTimeout(()=>{i.value=!1,o.value=!1},2200)}function c(){o.value=!1,r("cancel")}return(d,p)=>(f(),x("div",{class:M(I(ne)("inline-flex items-center overflow-hidden rounded-xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none",n.variant==="danger"&&"border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20",n.variant==="warning"&&"border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20",n.variant==="primary"&&"border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20",i.value&&"!border-emerald-600 !bg-emerald-600 text-white",n.class))},[i.value?(f(),x("div",zh,[k(I(wt),{class:"h-4 w-4 animate-bounce"}),p[0]||(p[0]=s("span",null,"操作已完成",-1))])):o.value?(f(),x(se,{key:1},[s("button",{type:"button",onClick:a,class:M(["flex h-10 items-center gap-1.5 px-3.5 text-xs font-semibold text-white transition-colors cursor-pointer",n.variant==="danger"&&"bg-rose-600 hover:bg-rose-700",n.variant==="warning"&&"bg-amber-600 hover:bg-amber-700",n.variant==="primary"&&"bg-blue-600 hover:bg-blue-700"])},[k(I(ui),{class:"h-3.5 w-3.5"}),s("span",null,A(n.confirmText),1)],2),s("button",{type:"button",onClick:c,class:"flex h-10 items-center gap-1 border-l border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 px-3 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[k(I(er),{class:"h-3.5 w-3.5"}),s("span",null,A(n.cancelText),1)])],64)):(f(),x("button",{key:2,type:"button",onClick:l,class:M(["flex h-10 items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-colors cursor-pointer",n.variant==="danger"&&"text-rose-600 hover:bg-rose-500/10 dark:text-rose-400",n.variant==="warning"&&"text-amber-600 hover:bg-amber-500/10 dark:text-amber-400",n.variant==="primary"&&"text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"])},[(f(),me(Je(n.icon||I(Pc)),{class:"h-4 w-4"})),s("span",null,A(n.label),1)],2))],2))}}),_h=["width","height","stroke-width"],Ch=["width","height","stroke-width"],Sh=["x1","y1","x2","y2"],Mh=["x1","y1","x2","y2"],Ih=["width","height","stroke-width"],us=ee({__name:"IconMorph",props:{modelValue:{type:Boolean,default:!1},mode:{default:"menu-close"},size:{default:24},strokeWidth:{default:2},class:{}},emits:["update:modelValue","click"],setup(e,{emit:t}){const n=e,r=t;function o(){r("update:modelValue",!n.modelValue),r("click")}const i=(m,h)=>n.modelValue?`translateY(0px) rotate(${h}deg) scaleX(0.943)`:`translateY(${m}px) rotate(0deg) scaleX(1)`,l={top:[6,4,20,12],bottom:[6,20,20,12]},a={top:[18,4,18,12],bottom:[18,20,18,12]},c=P(n.modelValue?1:0);let d=0;function p(m){return m>=1?1:1-Math.pow(2,-10*m)}Xe(()=>n.modelValue,m=>{cancelAnimationFrame(d);const h=c.value,g=m?1:0,z=performance.now(),_=300,y=C=>{const w=Math.min((C-z)/_,1);c.value=h+(g-h)*p(w),w<1&&(d=requestAnimationFrame(y))};d=requestAnimationFrame(y)}),Ee(()=>cancelAnimationFrame(d));const u=(m,h,g)=>m.map((z,_)=>z+(h[_]-z)*g),b=ie(()=>({top:u(l.top,a.top,c.value),bottom:u(l.bottom,a.bottom,c.value)}));return(m,h)=>(f(),x("button",{type:"button",onClick:o,class:M(I(ne)("relative inline-flex items-center justify-center rounded-xl p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer select-none",n.class)),style:fe({width:`${n.size+16}px`,height:`${n.size+16}px`})},[n.mode==="menu-close"?(f(),x("svg",{key:0,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[s("line",{x1:"3",y1:"12",x2:"21",y2:"12",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center [transform-box:view-box]",style:fe({transform:i(-6,45)})},null,4),s("line",{x1:"3",y1:"12",x2:"21",y2:"12",class:"transition-all duration-200 ease-out origin-center",style:fe({opacity:n.modelValue?"0":"1",transform:n.modelValue?"scaleX(0)":"scaleX(1)"})},null,4),s("line",{x1:"3",y1:"12",x2:"21",y2:"12",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center [transform-box:view-box]",style:fe({transform:i(6,-45)})},null,4)],8,_h)):n.mode==="play-pause"?(f(),x("svg",{key:1,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"overflow-visible"},[h[0]||(h[0]=s("line",{x1:"6",y1:"4",x2:"6",y2:"20"},null,-1)),s("line",{x1:b.value.top[0],y1:b.value.top[1],x2:b.value.top[2],y2:b.value.top[3]},null,8,Sh),s("line",{x1:b.value.bottom[0],y1:b.value.bottom[1],x2:b.value.bottom[2],y2:b.value.bottom[3]},null,8,Mh)],8,Ch)):n.mode==="plus-minus"?(f(),x("svg",{key:2,width:n.size,height:n.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round"},[h[1]||(h[1]=s("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1)),s("line",{x1:"12",y1:"5",x2:"12",y2:"19",class:"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",style:fe({transform:n.modelValue?"rotate(90deg) scale(0)":"rotate(0deg) scale(1)",opacity:n.modelValue?"0":"1"})},null,4)],8,Ih)):N("",!0)],6))}}),Ah={class:"relative inline-flex items-center"},$h=["disabled"],Ph={key:1,class:"truncate"},Th={key:2,class:"ml-0.5 rounded-full bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400"},Rh={key:0,class:"pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap rounded-md border border-zinc-200/80 bg-white/95 px-2 py-0.5 text-[10px] font-medium text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-800/95 dark:text-zinc-200"},Eh=ee({__name:"ActionButton",props:{label:{},tooltip:{},icon:{},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},badge:{},size:{default:"md"},class:{}},emits:["click"],setup(e,{emit:t}){const n=e,r=t,o=P(!1);function i(l){n.disabled||r("click",l)}return(l,a)=>(f(),x("div",Ah,[s("button",{type:"button",disabled:n.disabled,onClick:i,onMouseenter:a[0]||(a[0]=c=>o.value=!0),onMouseleave:a[1]||(a[1]=c=>o.value=!1),class:M(I(ne)("group relative flex items-center justify-center rounded-xl border font-medium select-none transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer","active:scale-90 hover:scale-[1.03]",n.size==="sm"&&"h-8 px-2.5 text-xs gap-1.5",n.size==="md"&&"h-9 px-3 text-xs sm:text-sm gap-2",n.size==="lg"&&"h-11 px-4 text-sm sm:text-base gap-2.5",n.active?"border-blue-500/50 bg-blue-50 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/90 text-zinc-700 shadow-2xs hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800/80 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",n.disabled&&"opacity-50 cursor-not-allowed active:scale-100 hover:scale-100",n.class))},[n.icon?(f(),me(Je(n.icon),{key:0,class:M(["shrink-0 transition-transform duration-150",n.size==="sm"&&"h-3.5 w-3.5",n.size==="md"&&"h-4 w-4",n.size==="lg"&&"h-5 w-5"])},null,8,["class"])):N("",!0),n.label?(f(),x("span",Ph,A(n.label),1)):N("",!0),n.badge!==void 0?(f(),x("span",Th,A(n.badge),1)):N("",!0),Oe(l.$slots,"default",{},void 0,!0)],42,$h),k(et,{name:"action-tip"},{default:U(()=>[o.value&&n.tooltip?(f(),x("div",Rh,A(n.tooltip),1)):N("",!0)]),_:1})]))}}),lr=Fe(Eh,[["__scopeId","data-v-54d32724"]]),Fh={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-1"},Lh=["onClick"],Dh={class:"text-xs font-semibold text-zinc-900 dark:text-zinc-100"},Vh={key:0,class:"text-[10px] text-zinc-400 mt-0.5"},Oh=ee({__name:"SplitButton",props:{label:{default:"立即发布上线"},icon:{default:yr},items:{default:()=>[{id:"preview",label:"发布至 Staging 预览环境",description:"生成独立预览分支 URL"},{id:"draft",label:"保存为草稿草稿快照",description:"仅团队协作成员可见"},{id:"schedule",label:"定时发布计划",description:"设定指定时间自动化推上线"}]},variant:{default:"primary"},class:{}},emits:["primaryClick","select"],setup(e,{emit:t}){const n=e,r=t,o=P(!1),i=P(null);function l(){o.value=!o.value}function a(){r("primaryClick")}function c(p){o.value=!1,r("select",p),p.onClick&&p.onClick()}function d(p){i.value&&!i.value.contains(p.target)&&(o.value=!1)}return Pe(()=>{window.addEventListener("click",d)}),Ee(()=>{window.removeEventListener("click",d)}),(p,u)=>(f(),x("div",{ref_key:"containerRef",ref:i,class:M(I(ne)("relative inline-flex items-center select-none",n.class))},[s("div",{class:M(["flex h-10 items-stretch overflow-hidden rounded-xl border shadow-sm transition-all duration-200",n.variant==="primary"&&"border-blue-600 bg-blue-600 text-white hover:bg-blue-500",n.variant==="secondary"&&"border-zinc-200/80 bg-white/90 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800"])},[s("button",{type:"button",onClick:a,class:"flex items-center gap-2 px-4 text-xs sm:text-sm font-semibold transition-transform active:scale-95 cursor-pointer"},[(f(),me(Je(n.icon),{class:"h-4 w-4"})),s("span",null,A(n.label),1)]),s("div",{class:M(["w-px self-stretch",n.variant==="primary"?"bg-blue-400/50":"bg-zinc-200 dark:bg-zinc-800"])},null,2),s("button",{type:"button",onClick:yt(l,["stop"]),class:"flex items-center justify-center px-2.5 transition-colors hover:bg-black/10 active:scale-95 cursor-pointer dark:hover:bg-white/10",title:"更多选项"},[k(I(Jn),{class:M(["h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",o.value&&"rotate-180"])},null,8,["class"])])],2),k(et,{name:"split-menu"},{default:U(()=>[o.value&&n.items&&n.items.length>0?(f(),x("div",Fh,[(f(!0),x(se,null,he(n.items,b=>(f(),x("button",{key:b.id,type:"button",onClick:m=>c(b),class:"flex w-full flex-col items-start rounded-lg px-3 py-2 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"},[s("span",Dh,A(b.label),1),b.description?(f(),x("span",Vh,A(b.description),1)):N("",!0)],8,Lh))),128))])):N("",!0)]),_:1})],2))}}),Oa=Fe(Oh,[["__scopeId","data-v-6e3e55b2"]]),Bh=["onClick"],jh={class:"font-mono text-[11px] font-bold"},Nh={key:0,type:"button",class:"flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-zinc-300 text-zinc-400 transition-colors hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 cursor-pointer",title:"添加表情反馈"},Ba=ee({__name:"Reactions",props:{items:{default:()=>[{id:"fire",emoji:"🔥",count:48,active:!0},{id:"rocket",emoji:"🚀",count:32,active:!1},{id:"heart",emoji:"❤️",count:65,active:!1},{id:"zap",emoji:"⚡",count:19,active:!1},{id:"eyes",emoji:"👀",count:12,active:!1}]},allowAdd:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=P(JSON.parse(JSON.stringify(t.items))),r=P(null);function o(i){i.active=!i.active,i.count+=i.active?1:-1,r.value=i.id,setTimeout(()=>{r.value=null},400)}return(i,l)=>(f(),x("div",{class:M(I(ne)("inline-flex flex-wrap items-center gap-1.5 select-none",t.class))},[(f(!0),x(se,null,he(n.value,a=>(f(),x("button",{key:a.id,type:"button",onClick:c=>o(a),class:M(["group flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold transition-all duration-200 active:scale-90 cursor-pointer",a.active?"border-blue-500/50 bg-blue-50/80 text-blue-600 shadow-xs dark:border-blue-500/40 dark:bg-blue-950/60 dark:text-blue-400":"border-zinc-200/80 bg-white/80 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"])},[s("span",{class:M(["text-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",r.value===a.id&&"scale-135 -translate-y-0.5","group-hover:scale-110"])},A(a.emoji),3),s("span",jh,A(a.count),1)],10,Bh))),128)),t.allowAdd?(f(),x("button",Nh,[k(I(x0),{class:"h-3.5 w-3.5"})])):N("",!0)],2))}}),Hh={key:0,class:"text-xs font-semibold text-zinc-600 dark:text-zinc-300"},Gh={class:"relative flex h-full flex-1 items-center px-2.5 min-w-[70px]"},Uh={class:"font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100"},qh={key:0,class:"font-mono text-[10px] text-zinc-400"},ps=ee({__name:"ScrubInput",props:{modelValue:{},label:{},min:{default:0},max:{default:100},step:{default:1},sensitivity:{default:1},suffix:{default:"px"},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=P(!1),i=P(!1),l=P(null),a=P(String(n.modelValue));let c=0,d=0;function p(_){let y=_;return n.min!==void 0&&(y=Math.max(n.min,y)),n.max!==void 0&&(y=Math.min(n.max,y)),Math.round(y*100)/100}function u(_){i.value||(o.value=!0,c=_.clientX,d=n.modelValue,window.addEventListener("mousemove",b),window.addEventListener("mouseup",m),document.body.style.cursor="ew-resize",document.body.style.userSelect="none")}function b(_){if(!o.value)return;const y=_.clientX-c;let C=1;_.shiftKey&&(C=10),_.altKey&&(C=.1);const w=Math.round(y/(5/n.sensitivity)*C)*n.step,T=p(d+w);T!==n.modelValue&&r("update:modelValue",T)}function m(){o.value&&(o.value=!1,window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect="",r("change",n.modelValue))}function h(){i.value=!0,a.value=String(n.modelValue),setTimeout(()=>{var _,y;(_=l.value)==null||_.focus(),(y=l.value)==null||y.select()},20)}function g(){i.value=!1;const _=parseFloat(a.value);if(!isNaN(_)){const y=p(_);r("update:modelValue",y),r("change",y)}}const z=ie(()=>{const _=n.max-n.min;return _<=0?0:Math.min(Math.max((n.modelValue-n.min)/_*100,0),100)});return Ee(()=>{window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect=""}),(_,y)=>(f(),x("div",{class:M(I(ne)("group relative inline-flex h-9 items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900 select-none overflow-hidden",o.value&&"border-blue-500 ring-2 ring-blue-500/20",n.class))},[s("div",{class:"pointer-events-none absolute inset-y-0 left-0 bg-blue-500/10 dark:bg-blue-500/15 transition-[width] ease-out duration-75",style:fe({width:`${z.value}%`})},null,4),s("div",{onMousedown:u,class:"flex h-full items-center gap-1 px-2.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-ew-resize transition-colors",title:"按住左右水平拖拽微调数值 (Shift 加速 10x, Alt 精细 0.1x)"},[k(I(wc),{class:"h-3.5 w-3.5"}),n.label?(f(),x("span",Hh,A(n.label),1)):N("",!0)],32),y[2]||(y[2]=s("div",{class:"h-4 w-px bg-zinc-200 dark:bg-zinc-800"},null,-1)),s("div",Gh,[i.value?$n((f(),x("input",{key:0,ref_key:"inputRef",ref:l,"onUpdate:modelValue":y[0]||(y[0]=C=>a.value=C),type:"text",onBlur:g,onKeydown:[ia(g,["enter"]),y[1]||(y[1]=ia(C=>i.value=!1,["esc"]))],class:"w-full bg-transparent p-0 text-right font-mono text-xs font-bold text-zinc-900 outline-none focus:outline-none dark:text-zinc-100"},null,544)),[[Oo,a.value]]):(f(),x("div",{key:1,onDblclick:h,onMousedown:u,class:"flex w-full items-center justify-end gap-0.5 cursor-ew-resize",title:"双击直接键入数值，或按住水平拖动"},[s("span",Uh,A(n.modelValue),1),n.suffix?(f(),x("span",qh,A(n.suffix),1)):N("",!0)],32))])],2))}}),Xh={class:"relative flex items-center rounded-xl border border-zinc-200/90 bg-white shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900"},Wh=["type","value","placeholder"],Yh={class:"space-y-1.5"},Kh={class:"grid grid-cols-4 gap-1.5"},Zh={class:"flex items-center justify-between text-[11px] font-mono"},Qh={class:"text-zinc-400 flex items-center gap-1"},Jh={key:0,class:"rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-3 text-xs space-y-1.5 dark:border-zinc-800/80 dark:bg-zinc-950/40"},ev=ee({__name:"PasswordStrength",props:{modelValue:{default:""},placeholder:{default:"请输入安全密码..."},showRules:{type:Boolean,default:!0},class:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,o=P(!1),i=ie(()=>{const d=n.modelValue||"";return[{id:"length",label:"至少 8 个字符",valid:d.length>=8},{id:"lowercase",label:"包含小写英文字母 (a-z)",valid:/[a-z]/.test(d)},{id:"uppercase",label:"包含大写英文字母 (A-Z)",valid:/[A-Z]/.test(d)},{id:"number",label:"包含至少 1 个数字 (0-9)",valid:/\d/.test(d)},{id:"special",label:"包含特殊符号 (!@#$%^&*)",valid:/[^A-Za-z0-9]/.test(d)}]}),l=ie(()=>i.value.filter(d=>d.valid).length),a=ie(()=>{if(!n.modelValue)return{score:0,text:"未输入",color:"bg-zinc-200 dark:bg-zinc-800",textColor:"text-zinc-400"};const d=l.value;return d<=2?{score:1,text:"较弱 (Weak)",color:"bg-rose-500",textColor:"text-rose-500"}:d===3?{score:2,text:"中等 (Fair)",color:"bg-amber-500",textColor:"text-amber-500"}:d===4?{score:3,text:"良好 (Good)",color:"bg-sky-500",textColor:"text-sky-500"}:{score:4,text:"极高安全 (Strong)",color:"bg-emerald-500",textColor:"text-emerald-500"}});function c(d){const p=d.target.value;r("update:modelValue",p)}return(d,p)=>(f(),x("div",{class:M(I(ne)("w-full max-w-sm space-y-3 select-none",n.class))},[s("div",Xh,[s("input",{type:o.value?"text":"password",value:n.modelValue,placeholder:n.placeholder,onInput:c,class:"h-10 w-full bg-transparent px-3.5 pr-10 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,Wh),s("button",{type:"button",onClick:p[0]||(p[0]=u=>o.value=!o.value),class:"absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer",tabindex:"-1"},[o.value?(f(),me(I(t0),{key:0,class:"h-4 w-4"})):(f(),me(I(zc),{key:1,class:"h-4 w-4"}))])]),s("div",Yh,[s("div",Kh,[(f(),x(se,null,he(4,u=>s("div",{key:u,class:"h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300"},[s("div",{class:M(["h-full transition-all duration-300 ease-out",u<=a.value.score?a.value.color:"w-0"]),style:fe({width:u<=a.value.score?"100%":"0%"})},null,6)])),64))]),s("div",Zh,[s("span",Qh,[k(I(Ic),{class:"h-3.5 w-3.5"}),p[1]||(p[1]=s("span",null,"安全等级评估",-1))]),s("span",{class:M(["font-bold transition-colors duration-200",a.value.textColor])},A(a.value.text),3)])]),n.showRules?(f(),x("div",Jh,[(f(!0),x(se,null,he(i.value,u=>(f(),x("div",{key:u.id,class:M(["flex items-center gap-2 transition-colors duration-200",u.valid?"text-emerald-600 dark:text-emerald-400 font-semibold":"text-zinc-400"])},[s("div",{class:M(["flex h-4 w-4 items-center justify-center rounded-full transition-all duration-200",u.valid?"bg-emerald-500/20 text-emerald-600 dark:text-emerald-400":"bg-zinc-200 dark:bg-zinc-800 text-zinc-400"])},[u.valid?(f(),me(I(wt),{key:0,class:"h-2.5 w-2.5 animate-bounce"})):(f(),me(I(er),{key:1,class:"h-2.5 w-2.5 opacity-50"}))],2),s("span",null,A(u.label),1)],2))),128))])):N("",!0)],2))}}),tv={class:"flex items-center justify-between"},nv={class:"flex items-center gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800"},rv=["onClick"],ov={class:"relative flex items-baseline border-b border-zinc-200/90 pb-3 transition-colors dark:border-zinc-800"},sv={class:"font-mono text-2xl font-bold text-zinc-400 mr-2 shrink-0"},iv=["value","placeholder"],av={class:"flex flex-wrap items-center gap-2 pt-1"},lv=["onClick"],cv=ee({__name:"MoneyInput",props:{modelValue:{default:0},currency:{default:"CNY"},currencies:{default:()=>[{code:"CNY",symbol:"¥",label:"人民币"},{code:"USD",symbol:"$",label:"美元"},{code:"EUR",symbol:"€",label:"欧元"},{code:"GBP",symbol:"£",label:"英镑"}]},presets:{default:()=>[100,500,1e3,5e3]},placeholder:{default:"0.00"},class:{}},emits:["update:modelValue","update:currency"],setup(e,{emit:t}){const n=e,r=t,o=P(n.currency),i=ie(()=>{var m;return((m=n.currencies.find(h=>h.code===o.value))==null?void 0:m.symbol)||"¥"});function l(m){return m===0?"":m.toLocaleString("en-US",{maximumFractionDigits:2})}const a=ie(()=>l(n.modelValue)),c=ie(()=>{const m=a.value.length;return m>12?"text-xl":m>8?"text-2xl":"text-3xl sm:text-4xl"});function d(m){const g=m.target.value.replace(/[^0-9.]/g,""),z=parseFloat(g);r("update:modelValue",isNaN(z)?0:z)}function p(m){r("update:modelValue",n.modelValue+m)}function u(){r("update:modelValue",0)}function b(m){o.value=m,r("update:currency",m)}return(m,h)=>(f(),x("div",{class:M(I(ne)("w-full max-w-md rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 select-none space-y-4",n.class))},[s("div",tv,[h[0]||(h[0]=s("span",{class:"text-xs font-semibold text-zinc-500 dark:text-zinc-400"},"转账 / 充值金额",-1)),s("div",nv,[(f(!0),x(se,null,he(n.currencies,g=>(f(),x("button",{key:g.code,type:"button",onClick:z=>b(g.code),class:M(["rounded-md px-2 py-0.5 text-[11px] font-bold font-mono transition-colors cursor-pointer",o.value===g.code?"bg-white text-zinc-900 shadow-2xs dark:bg-zinc-700 dark:text-white":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"])},A(g.code),11,rv))),128))])]),s("div",ov,[s("span",sv,A(i.value),1),s("input",{type:"text",inputmode:"decimal",value:a.value,placeholder:n.placeholder,onInput:d,class:M(["w-full bg-transparent p-0 font-mono font-extrabold tracking-tight text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 transition-all duration-200",c.value])},null,42,iv),n.modelValue>0?(f(),x("button",{key:0,type:"button",onClick:u,class:"ml-2 rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 transition-colors cursor-pointer shrink-0"}," 清零 ")):N("",!0)]),s("div",av,[h[1]||(h[1]=s("span",{class:"text-[11px] text-zinc-400"},"快捷填充:",-1)),(f(!0),x(se,null,he(n.presets,g=>(f(),x("button",{key:g,type:"button",onClick:z=>p(g),class:"rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-2.5 py-1 font-mono text-xs font-semibold text-zinc-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:border-blue-400 dark:hover:bg-blue-950/40 dark:hover:text-blue-400 transition-all active:scale-95 cursor-pointer"}," +"+A(i.value)+A(g),9,lv))),128))])],2))}}),dv={class:"text-base leading-none"},uv={class:"font-mono text-zinc-900 dark:text-zinc-100"},pv={class:"relative flex flex-1 items-center px-3"},fv=["value","placeholder"],mv={key:0,class:"ml-1 text-emerald-500"},bv={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-2 w-64 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 max-h-56 overflow-y-auto space-y-0.5"},xv=["onClick"],gv={class:"flex items-center gap-2"},hv={class:"text-base"},vv={class:"font-medium text-zinc-800 dark:text-zinc-200"},yv={class:"font-mono text-[11px] font-bold text-zinc-400"},wv=ee({__name:"PhoneInput",props:{modelValue:{default:""},countryCode:{default:"CN"},countries:{default:()=>[{code:"CN",dialCode:"+86",name:"中国",flag:"🇨🇳",format:"### #### ####"},{code:"US",dialCode:"+1",name:"美国",flag:"🇺🇸",format:"(###) ###-####"},{code:"GB",dialCode:"+44",name:"英国",flag:"🇬🇧",format:"#### ######"},{code:"JP",dialCode:"+81",name:"日本",flag:"🇯🇵",format:"###-####-####"},{code:"DE",dialCode:"+49",name:"德国",flag:"🇩🇪",format:"#### #######"},{code:"SG",dialCode:"+65",name:"新加坡",flag:"🇸🇬",format:"#### ####"}]},placeholder:{default:"请输入手机号码..."},class:{}},emits:["update:modelValue","update:countryCode"],setup(e,{emit:t}){const n=e,r=t,o=P(n.countries.find(b=>b.code===n.countryCode)||n.countries[0]),i=P(!1),l=P(null);function a(b,m){const h=b.replace(/\D/g,"");let g="",z=0;for(let _=0;_<m.length&&z<h.length;_++)m[_]==="#"?(g+=h[z],z++):g+=m[_];return z<h.length&&(g+=" "+h.slice(z)),g}function c(b){const h=b.target.value.replace(/\D/g,""),g=a(h,o.value.format);r("update:modelValue",g)}function d(b){o.value=b,i.value=!1,r("update:countryCode",b.code);const m=n.modelValue.replace(/\D/g,"");r("update:modelValue",a(m,b.format))}function p(b){l.value&&!l.value.contains(b.target)&&(i.value=!1)}Pe(()=>{window.addEventListener("click",p)}),Ee(()=>{window.removeEventListener("click",p)});const u=ie(()=>{const b=n.modelValue.replace(/\D/g,"");return b.length>=8&&b.length<=15});return(b,m)=>(f(),x("div",{ref_key:"containerRef",ref:l,class:M(I(ne)("relative w-full max-w-sm select-none",n.class))},[s("div",{class:M(["flex h-10 items-center overflow-hidden rounded-xl border bg-white shadow-2xs transition-all dark:bg-zinc-900",n.modelValue&&u.value?"border-emerald-500/50":"border-zinc-200/90 dark:border-zinc-800"])},[s("button",{type:"button",onClick:m[0]||(m[0]=yt(h=>i.value=!i.value,["stop"])),class:"flex h-full items-center gap-1.5 border-r border-zinc-200/80 bg-zinc-50/70 px-3 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0 outline-none focus:outline-none ring-0"},[s("span",dv,A(o.value.flag),1),s("span",uv,A(o.value.dialCode),1),k(I(Jn),{class:M(["h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",i.value&&"rotate-180"])},null,8,["class"])]),s("div",pv,[s("input",{type:"tel",value:n.modelValue,placeholder:n.placeholder,onInput:c,class:"w-full bg-transparent font-mono text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,fv),n.modelValue&&u.value?(f(),x("div",mv,[k(I(wt),{class:"h-4 w-4 animate-bounce"})])):N("",!0)])],2),k(et,{name:"phone-menu"},{default:U(()=>[i.value?(f(),x("div",bv,[(f(!0),x(se,null,he(n.countries,h=>(f(),x("button",{key:h.code,type:"button",onClick:g=>d(h),class:"flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"},[s("div",gv,[s("span",hv,A(h.flag),1),s("span",vv,A(h.name),1)]),s("span",yv,A(h.dialCode),1)],8,xv))),128))])):N("",!0)]),_:1})],2))}}),kv=Fe(wv,[["__scopeId","data-v-178808d1"]]),zv={class:"flex items-center pl-1 text-zinc-400"},_v=["onClick"],Cv=["disabled","placeholder"],Sv={key:0,class:"ml-auto pr-1 font-mono text-[10px] text-zinc-400"},Mv=ee({__name:"TagInput",props:{modelValue:{default:()=>["Vue 3.5","TailwindCSS","Motion UI"]},placeholder:{default:"输入标签后按回车添加..."},maxTags:{default:8},allowDuplicates:{type:Boolean,default:!1},class:{}},emits:["update:modelValue","add","remove"],setup(e,{emit:t}){const n=e,r=t,o=P(""),i=P(null);function l(){const p=o.value.trim();if(!p||n.maxTags&&n.modelValue.length>=n.maxTags)return;if(!n.allowDuplicates&&n.modelValue.includes(p)){o.value="";return}const u=[...n.modelValue,p];r("update:modelValue",u),r("add",p),o.value=""}function a(p){const u=n.modelValue[p],b=n.modelValue.filter((m,h)=>h!==p);r("update:modelValue",b),r("remove",u)}function c(p){p.key==="Enter"||p.key===","?(p.preventDefault(),l()):p.key==="Backspace"&&!o.value&&n.modelValue.length>0&&a(n.modelValue.length-1)}function d(){var p;(p=i.value)==null||p.focus()}return(p,u)=>(f(),x("div",{onClick:d,class:M(I(ne)("group flex min-h-10 w-full max-w-md flex-wrap items-center gap-1.5 rounded-xl border border-zinc-200/90 bg-white p-2 shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900 cursor-text select-none",n.class))},[s("div",zv,[k(I(y0),{class:"h-3.5 w-3.5"})]),k(hc,{name:"tag-list"},{default:U(()=>[(f(!0),x(se,null,he(n.modelValue,(b,m)=>(f(),x("div",{key:b,class:"inline-flex items-center gap-1 rounded-lg border border-blue-500/20 bg-blue-50/70 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/60 dark:text-blue-300 transition-all duration-200"},[s("span",null,A(b),1),s("button",{type:"button",onClick:yt(h=>a(m),["stop"]),class:"flex h-3.5 w-3.5 items-center justify-center rounded-full hover:bg-blue-600/20 dark:hover:bg-blue-400/20 transition-colors cursor-pointer"},[k(I(er),{class:"h-2.5 w-2.5"})],8,_v)]))),128))]),_:1}),$n(s("input",{ref_key:"inputRef",ref:i,"onUpdate:modelValue":u[0]||(u[0]=b=>o.value=b),type:"text",disabled:n.maxTags?n.modelValue.length>=n.maxTags:!1,placeholder:n.modelValue.length===0?n.placeholder:n.maxTags&&n.modelValue.length>=n.maxTags?"已达上限":"添加更多...",onKeydown:c,class:"min-w-[80px] flex-1 bg-transparent px-1.5 py-0.5 text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,Cv),[[Oo,o.value]]),n.maxTags?(f(),x("div",Sv,A(n.modelValue.length)+"/"+A(n.maxTags),1)):N("",!0)],2))}}),Iv=Fe(Mv,[["__scopeId","data-v-03f3a70c"]]),Av={class:"relative flex flex-col rounded-2xl border border-zinc-200/90 bg-white p-3 shadow-2xs transition-all dark:border-zinc-800 dark:bg-zinc-900"},$v=["value","placeholder"],Pv={class:"flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/80"},Tv={class:"flex items-center gap-1 text-[11px] text-zinc-400"},Rv={class:"font-mono text-[10px] text-zinc-400"},Ev={key:0,class:"aura-popover popover-shadow absolute bottom-full left-0 mb-2 w-72 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-0.5"},Fv={class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"},Lv=["onClick","onMouseenter"],Dv={key:1},Vv={class:"flex flex-1 flex-col overflow-hidden"},Ov={class:"flex items-center gap-1.5"},Bv={class:"truncate text-xs font-semibold"},jv={key:0,class:"rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"},Nv={class:"truncate text-[10px] text-zinc-400"},Hv=ee({__name:"MentionInput",props:{modelValue:{default:""},placeholder:{default:"输入内容，键入 @ 可呼出团队成员或智能体..."},users:{default:()=>[{id:"1",name:"Aura Assistant",handle:"aura_ai",role:"全栈架构 Agent",isBot:!0},{id:"2",name:"Aura Motion",handle:"auramotion",role:"视觉动效引擎",isBot:!0},{id:"3",name:"Alex Rivera",handle:"alex",role:"前端技术专家",isBot:!1},{id:"4",name:"Elena Rostova",handle:"elena",role:"UI 设计专家",isBot:!1},{id:"5",name:"Devin AI",handle:"devin",role:"代码重构 Agent",isBot:!0}]},class:{}},emits:["update:modelValue","mention"],setup(e,{emit:t}){const n=e,r=t,o=P(null),i=P(!1),l=P(""),a=P(0),c=ie(()=>{const b=l.value.toLowerCase();return b?n.users.filter(m=>m.name.toLowerCase().includes(b)||m.handle.toLowerCase().includes(b)):n.users});function d(b){const m=b.target,h=m.value;r("update:modelValue",h);const g=m.selectionStart||0,z=h.slice(0,g),_=z.lastIndexOf("@");if(_!==-1){const y=z.slice(_+1);if(!y.includes(" ")&&!y.includes(`
`)){l.value=y,i.value=!0,a.value=0;return}}i.value=!1}function p(b){const m=o.value;if(!m)return;const h=n.modelValue,g=m.selectionStart||0,z=h.slice(0,g),_=h.slice(g),y=z.lastIndexOf("@");if(y!==-1){const C=z.slice(0,y)+`@${b.name} `+_;r("update:modelValue",C),r("mention",b),i.value=!1,setTimeout(()=>{m.focus();const w=y+b.name.length+2;m.setSelectionRange(w,w)},20)}}function u(b){!i.value||c.value.length===0||(b.key==="ArrowDown"?(b.preventDefault(),a.value=(a.value+1)%c.value.length):b.key==="ArrowUp"?(b.preventDefault(),a.value=(a.value-1+c.value.length)%c.value.length):b.key==="Enter"||b.key==="Tab"?(b.preventDefault(),p(c.value[a.value])):b.key==="Escape"&&(i.value=!1))}return(b,m)=>(f(),x("div",{class:M(I(ne)("relative w-full max-w-lg select-none",n.class))},[s("div",Av,[s("textarea",{ref_key:"textareaRef",ref:o,value:n.modelValue,placeholder:n.placeholder,rows:"3",onInput:d,onKeydown:u,class:"w-full resize-none bg-transparent text-xs sm:text-sm font-medium text-zinc-900 outline-none focus:outline-none dark:text-zinc-100 placeholder:text-zinc-400"},null,40,$v),s("div",Pv,[s("div",Tv,[k(I(Kp),{class:"h-3.5 w-3.5 text-blue-500"}),m[0]||(m[0]=s("span",null,"输入 @ 呼出协作成员 / Agent",-1))]),s("span",Rv,A(n.modelValue.length)+" 字 ",1)])]),k(et,{name:"mention-pop"},{default:U(()=>[i.value&&c.value.length>0?(f(),x("div",Ev,[s("div",Fv," 可选成员与智能体 ("+A(c.value.length)+") ",1),(f(!0),x(se,null,he(c.value,(h,g)=>(f(),x("button",{key:h.id,type:"button",onClick:z=>p(h),onMouseenter:z=>a.value=g,class:M(["flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors cursor-pointer",a.value===g?"bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300":"hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200"])},[s("div",{class:M(["flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white shrink-0",h.isBot?"bg-gradient-to-tr from-blue-600 to-indigo-500":"bg-zinc-700 dark:bg-zinc-600"])},[h.isBot?(f(),me(I(Bn),{key:0,class:"h-4 w-4"})):(f(),x("span",Dv,A(h.name.charAt(0)),1))],2),s("div",Vv,[s("div",Ov,[s("span",Bv,A(h.name),1),h.isBot?(f(),x("span",jv," AI ")):N("",!0)]),s("span",Nv,"@"+A(h.handle)+" · "+A(h.role),1)])],42,Lv))),128))])):N("",!0)]),_:1})],2))}}),Gv=Fe(Hv,[["__scopeId","data-v-c938133f"]]),Uv=["disabled","onClick","onKeydown"],Ns=ee({__name:"SegmentedControl",props:{modelValue:{},options:{},size:{default:"md"},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=P(null),i=P([]),l=P({width:"0px",transform:"translateX(0px)",opacity:0});function a(){const p=n.options.findIndex(b=>b.id===n.modelValue);if(p===-1||!i.value[p]){l.value.opacity=0;return}const u=i.value[p];u&&(l.value={width:`${u.offsetWidth}px`,transform:`translateX(${u.offsetLeft}px)`,opacity:1})}function c(p){p.disabled||(r("update:modelValue",p.id),r("change",p))}function d(p,u){const b=n.options.map((g,z)=>({opt:g,i:z})).filter(g=>!g.opt.disabled),m=b.findIndex(g=>g.i===u);if(m===-1)return;let h=m;if(p.key==="ArrowRight"||p.key==="ArrowDown"?(p.preventDefault(),h=(m+1)%b.length):(p.key==="ArrowLeft"||p.key==="ArrowUp")&&(p.preventDefault(),h=(m-1+b.length)%b.length),h!==m){const g=b[h];c(g.opt),Hn(()=>{var z;(z=i.value[g.i])==null||z.focus()})}}return Xe(()=>n.modelValue,()=>{Hn(a)}),Pe(()=>{Hn(()=>{a(),window.addEventListener("resize",a)})}),(p,u)=>(f(),x("div",{ref_key:"containerRef",ref:o,class:M(I(ne)("relative inline-flex items-center rounded-xl bg-zinc-100 p-1 select-none dark:bg-zinc-800/80",n.class))},[s("div",{class:"pointer-events-none absolute left-0 top-1 bottom-1 z-0 rounded-lg bg-white shadow-xs transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-700 dark:shadow-none",style:fe(l.value)},null,4),(f(!0),x(se,null,he(n.options,(b,m)=>(f(),x("button",{key:b.id,ref_for:!0,ref:h=>i.value[m]=h,type:"button",disabled:b.disabled,onClick:h=>c(b),onKeydown:h=>d(h,m),class:M(I(ne)("relative z-10 flex items-center justify-center gap-1.5 font-medium transition-colors duration-150 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer",n.size==="sm"&&"h-7 px-2.5 text-xs",n.size==="md"&&"h-8 px-3.5 text-xs sm:text-sm",n.size==="lg"&&"h-10 px-4 text-sm sm:text-base",n.modelValue===b.id?"text-zinc-900 font-bold dark:text-white":"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",b.disabled&&"opacity-40 cursor-not-allowed hover:text-zinc-500"))},[b.icon?(f(),me(Je(b.icon),{key:0,class:M(["shrink-0 transition-transform duration-150",n.size==="sm"&&"h-3.5 w-3.5",n.size==="md"&&"h-4 w-4",n.size==="lg"&&"h-5 w-5",n.modelValue===b.id&&"scale-105 text-blue-600 dark:text-blue-400"])},null,8,["class"])):N("",!0),s("span",null,A(b.label),1),b.badge!==void 0?(f(),x("span",{key:1,class:M(["rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold transition-colors",n.modelValue===b.id?"bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300":"bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"])},A(b.badge),3)):N("",!0)],42,Uv))),128))],2))}}),qv={class:"flex items-center gap-1.5 flex-wrap"},Xv={key:0,class:"flex items-center"},Wv={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},Yv={key:1},Kv=["onClick"],Zv={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},Qv={key:1},Jv={class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},e1={key:1},t1={key:0,class:"aura-popover popover-shadow absolute top-full left-0 mt-1.5 w-48 rounded-xl border border-zinc-200/80 bg-white/95 p-1.5 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 space-y-0.5"},n1=["onClick"],r1={key:0,class:"font-bold text-zinc-900 dark:text-white flex items-center gap-1","aria-current":"page"},o1=["onClick"],s1={key:2,class:"mx-1.5 text-zinc-300 dark:text-zinc-700"},i1={key:1},a1=ee({__name:"BreadcrumbTrail",props:{items:{},maxItems:{default:4},separator:{default:"chevron"},showHome:{type:Boolean,default:!0},class:{}},emits:["select"],setup(e,{emit:t}){const n=e,r=t,o=P(!1),i=P(null),l=ie(()=>{const d=n.items.length;return d<=n.maxItems?{start:n.items,hidden:[],end:[],isCollapsed:!1}:{start:[n.items[0]],hidden:n.items.slice(1,d-2),end:n.items.slice(d-2),isCollapsed:!0}});function a(d){r("select",d),d.onClick&&d.onClick(),o.value=!1}function c(d){i.value&&!i.value.contains(d.target)&&(o.value=!1)}return Pe(()=>{window.addEventListener("click",c)}),Ee(()=>{window.removeEventListener("click",c)}),(d,p)=>(f(),x("nav",{"aria-label":"Breadcrumb",class:M(I(ne)("inline-flex items-center text-xs sm:text-sm font-medium select-none",n.class))},[s("ol",qv,[n.showHome?(f(),x("li",Xv,[s("button",{type:"button",onClick:p[0]||(p[0]=u=>a({label:"首页",href:"/"})),class:"flex items-center gap-1 text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer",title:"返回控制台首页"},[k(I(_c),{class:"h-3.5 w-3.5"})]),s("span",Wv,[n.separator==="chevron"?(f(),me(I(jn),{key:0,class:"h-3.5 w-3.5"})):(f(),x("span",Yv,"/"))])])):N("",!0),(f(!0),x(se,null,he(l.value.start,u=>(f(),x("li",{key:u.label,class:"flex items-center"},[s("button",{type:"button",onClick:b=>a(u),class:"flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[u.icon?(f(),me(Je(u.icon),{key:0,class:"h-3.5 w-3.5"})):N("",!0),s("span",null,A(u.label),1)],8,Kv),s("span",Zv,[n.separator==="chevron"?(f(),me(I(jn),{key:0,class:"h-3.5 w-3.5"})):(f(),x("span",Qv,"/"))])]))),128)),l.value.isCollapsed?(f(),x("li",{key:1,ref_key:"menuRef",ref:i,class:"relative flex items-center"},[s("button",{type:"button",onClick:p[1]||(p[1]=yt(u=>o.value=!o.value,["stop"])),class:"flex h-6 w-6 items-center justify-center rounded-md border border-zinc-200/80 bg-zinc-50/80 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-all cursor-pointer",title:"点击展开中间隐藏路径"},[k(I(e0),{class:"h-3.5 w-3.5"})]),s("span",Jv,[n.separator==="chevron"?(f(),me(I(jn),{key:0,class:"h-3.5 w-3.5"})):(f(),x("span",e1,"/"))]),k(et,{name:"crumb-menu"},{default:U(()=>[o.value?(f(),x("div",t1,[p[2]||(p[2]=s("div",{class:"px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider"}," 折叠上级路径 ",-1)),(f(!0),x(se,null,he(l.value.hidden,(u,b)=>(f(),x("button",{key:b,type:"button",onClick:m=>a(u),class:"flex w-full items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-left text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer transition-colors"},[u.icon?(f(),me(Je(u.icon),{key:0,class:"h-3.5 w-3.5 text-zinc-400"})):N("",!0),s("span",null,A(u.label),1)],8,n1))),128))])):N("",!0)]),_:1})],512)):N("",!0),(f(!0),x(se,null,he(l.value.end,(u,b)=>(f(),x("li",{key:b,class:"flex items-center"},[b===l.value.end.length-1?(f(),x("span",r1,[u.icon?(f(),me(Je(u.icon),{key:0,class:"h-3.5 w-3.5 text-blue-500"})):N("",!0),s("span",null,A(u.label),1)])):(f(),x("button",{key:1,type:"button",onClick:m=>a(u),class:"flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"},[u.icon?(f(),me(Je(u.icon),{key:0,class:"h-3.5 w-3.5"})):N("",!0),s("span",null,A(u.label),1)],8,o1)),b<l.value.end.length-1?(f(),x("span",s1,[n.separator==="chevron"?(f(),me(I(jn),{key:0,class:"h-3.5 w-3.5"})):(f(),x("span",i1,"/"))])):N("",!0)]))),128))])],2))}}),ja=Fe(a1,[["__scopeId","data-v-097ac1ff"]]),l1={key:0,class:"whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white/95 px-2.5 py-1 text-xs font-semibold text-zinc-700 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:text-zinc-200 transition-transform group-hover:scale-105"},c1=["onClick","title"],d1=ee({__name:"FloatingActionMenu",props:{actions:{},direction:{default:"up"},class:{}},emits:["select","toggle"],setup(e,{emit:t}){const n=e,r=t,o=P(!1),i=P(null);function l(){o.value=!o.value,r("toggle",o.value)}function a(d){r("select",d),d.onClick&&d.onClick(),o.value=!1,r("toggle",!1)}function c(d){i.value&&!i.value.contains(d.target)&&o.value&&(o.value=!1,r("toggle",!1))}return Pe(()=>{window.addEventListener("click",c)}),Ee(()=>{window.removeEventListener("click",c)}),(d,p)=>(f(),x("div",{ref_key:"containerRef",ref:i,class:M(I(ne)("relative inline-flex flex-col items-center select-none",n.class))},[k(et,{name:"fab-items"},{default:U(()=>[o.value?(f(),x("div",{key:0,class:M(["absolute z-40 flex gap-3 pointer-events-auto",n.direction==="up"&&"bottom-full mb-3 flex-col-reverse items-center",n.direction==="down"&&"top-full mt-3 flex-col items-center",n.direction==="left"&&"right-full mr-3 flex-row-reverse items-center",n.direction==="right"&&"left-full ml-3 flex-row items-center"])},[(f(!0),x(se,null,he(n.actions,(u,b)=>(f(),x("div",{key:u.id,class:"flex items-center gap-2 group cursor-pointer",style:fe({transitionDelay:`${b*40}ms`})},[n.direction==="up"||n.direction==="down"?(f(),x("div",l1,A(u.label),1)):N("",!0),s("button",{type:"button",onClick:yt(m=>a(u),["stop"]),class:M(["flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer",u.color||"bg-blue-600 hover:bg-blue-500 shadow-blue-500/25"]),title:u.label},[(f(),me(Je(u.icon),{class:"h-4 w-4"}))],10,c1)],4))),128))],2)):N("",!0)]),_:1}),s("button",{type:"button",onClick:yt(l,["stop"]),class:M(["relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-blue-500 hover:scale-105 active:scale-90 cursor-pointer outline-none focus:outline-none ring-0",o.value&&"!bg-zinc-900 dark:!bg-zinc-700 shadow-zinc-900/40"]),title:"操作菜单"},[k(I(Sc),{class:M(["h-5 w-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",o.value&&"rotate-135"])},null,8,["class"])],2)],2))}}),u1=Fe(d1,[["__scopeId","data-v-9096a8eb"]]),p1={class:"flex items-center gap-1 rounded-xl bg-zinc-50 p-1 border border-zinc-200/80 dark:bg-zinc-900/60 dark:border-zinc-800/80"},f1=["onMouseenter"],m1={class:"space-y-1"},b1=["onClick"],x1={key:0,class:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 transition-transform group-hover:scale-105"},g1={class:"flex-1 overflow-hidden"},h1={class:"flex items-center gap-1.5"},v1={class:"text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"},y1={key:0,class:"rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300"},w1={class:"mt-0.5 text-[11px] text-zinc-400 line-clamp-1"},k1=ee({__name:"NavbarHover",props:{items:{},class:{}},emits:["select"],setup(e,{emit:t}){const n=e,r=t,o=P(null),i=P(null),l=P([]),a=P({left:0,opacity:0,arrowLeft:0});let c=null;function d(h){const g=l.value[h],z=i.value;if(!g||!z)return;const _=z.getBoundingClientRect(),y=g.getBoundingClientRect(),C=y.left+y.width/2-_.left,w=320;a.value={left:Math.max(C-w/2,0),arrowLeft:C,opacity:1}}function p(h,g){c&&(clearTimeout(c),c=null),o.value=h.id,d(g)}function u(){c=setTimeout(()=>{o.value=null,a.value.opacity=0},180)}function b(){c&&(clearTimeout(c),c=null)}function m(h){r("select",h),o.value=null,a.value.opacity=0}return Pe(()=>{window.addEventListener("resize",()=>{if(o.value){const h=n.items.findIndex(g=>g.id===o.value);h!==-1&&d(h)}})}),Ee(()=>{c&&clearTimeout(c)}),(h,g)=>(f(),x("div",{ref_key:"containerRef",ref:i,onMouseleave:u,class:M(I(ne)("relative inline-flex items-center select-none",n.class))},[s("nav",p1,[(f(!0),x(se,null,he(n.items,(z,_)=>(f(),x("button",{key:z.id,ref_for:!0,ref:y=>l.value[_]=y,type:"button",onMouseenter:y=>p(z,_),class:M(["flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer outline-none focus:outline-none",o.value===z.id?"bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},[s("span",null,A(z.label),1),k(I(Jn),{class:M(["h-3.5 w-3.5 text-zinc-400 transition-transform duration-200",o.value===z.id&&"rotate-180 text-blue-500"])},null,8,["class"])],42,f1))),128))]),k(et,{name:"nav-morph"},{default:U(()=>{var z;return[o.value?(f(),x("div",{key:0,onMouseenter:b,onMouseleave:u,class:"aura-popover popover-shadow absolute top-full mt-2 w-80 rounded-2xl border border-zinc-200/80 bg-white/95 p-3 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95 z-50 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",style:fe({left:`${a.value.left}px`})},[s("div",{class:"absolute -top-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-zinc-200/80 bg-white dark:border-zinc-800/90 dark:bg-zinc-900 transition-all duration-200",style:fe({left:`${a.value.arrowLeft-a.value.left}px`})},null,4),s("div",m1,[(f(!0),x(se,null,he(((z=n.items.find(_=>_.id===o.value))==null?void 0:z.children)||[],_=>(f(),x("div",{key:_.title,onClick:y=>m(_),class:"group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer"},[_.icon?(f(),x("div",x1,[(f(),me(Je(_.icon),{class:"h-4 w-4"}))])):N("",!0),s("div",g1,[s("div",h1,[s("span",v1,A(_.title),1),_.badge?(f(),x("span",y1,A(_.badge),1)):N("",!0),k(I(Pn),{class:"ml-auto h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-blue-500"})]),s("p",w1,A(_.desc),1)])],8,b1))),128))])],36)):N("",!0)]}),_:1})],34))}}),z1=Fe(k1,[["__scopeId","data-v-36b3159c"]]),_1={class:"inline-flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-white p-1 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900"},C1=["disabled"],S1={class:"flex items-center gap-1"},M1={key:0,class:"flex h-8 w-6 items-center justify-center font-mono text-xs text-zinc-400"},I1=["onClick"],A1=["disabled"],$1={key:0,class:"flex w-full max-w-xs items-center gap-2.5 rounded-xl border border-zinc-200/60 bg-zinc-50/60 px-3 py-1.5 dark:border-zinc-800/60 dark:bg-zinc-950/40"},P1=["max","value"],T1={class:"font-mono text-[10px] text-zinc-400 shrink-0"},R1={class:"rounded bg-blue-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 shrink-0"},E1=ee({__name:"PaginationSlider",props:{modelValue:{default:1},totalPages:{default:10},showSlider:{type:Boolean,default:!0},siblingCount:{default:1},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t;function o(a){const c=Math.max(1,Math.min(n.totalPages,a));c!==n.modelValue&&(r("update:modelValue",c),r("change",c))}const i=ie(()=>{const a=n.modelValue,c=n.totalPages,d=n.siblingCount,p=[],u=Math.max(a-d,1),b=Math.min(a+d,c),m=u>2,h=b<c-1;if(!m&&h){const g=3+2*d;for(let z=1;z<=Math.min(g,c);z++)p.push(z);c>g&&(p.push("..."),p.push(c))}else if(m&&!h){const g=3+2*d;p.push(1),p.push("...");for(let z=Math.max(c-g+1,1);z<=c;z++)p.push(z)}else if(m&&h){p.push(1),p.push("...");for(let g=u;g<=b;g++)p.push(g);p.push("..."),p.push(c)}else for(let g=1;g<=c;g++)p.push(g);return p});function l(a){const c=parseInt(a.target.value,10);isNaN(c)||o(c)}return(a,c)=>(f(),x("div",{class:M(I(ne)("flex flex-col items-center gap-3 select-none",n.class))},[s("div",_1,[s("button",{type:"button",disabled:n.modelValue<=1,onClick:c[0]||(c[0]=d=>o(n.modelValue-1)),class:"flex h-8 w-8 items-center justify-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all active:scale-90 cursor-pointer",title:"上一页"},[k(I(yc),{class:"h-4 w-4"})],8,C1),s("div",S1,[(f(!0),x(se,null,he(i.value,(d,p)=>(f(),x(se,{key:p},[d==="..."?(f(),x("span",M1," ··· ")):(f(),x("button",{key:1,type:"button",onClick:u=>o(d),class:M(["flex h-8 min-w-[32px] items-center justify-center rounded-xl px-2 font-mono text-xs font-semibold transition-all duration-150 active:scale-95 cursor-pointer",n.modelValue===d?"bg-blue-600 text-white shadow-xs dark:bg-blue-600":"text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"])},A(d),11,I1))],64))),128))]),s("button",{type:"button",disabled:n.modelValue>=n.totalPages,onClick:c[1]||(c[1]=d=>o(n.modelValue+1)),class:"flex h-8 w-8 items-center justify-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-all active:scale-90 cursor-pointer",title:"下一页"},[k(I(jn),{class:"h-4 w-4"})],8,A1)]),n.showSlider&&n.totalPages>3?(f(),x("div",$1,[k(I(b0),{class:"h-3 w-3 text-zinc-400 shrink-0"}),c[2]||(c[2]=s("span",{class:"font-mono text-[10px] text-zinc-400 shrink-0"},"P1",-1)),s("input",{type:"range",min:1,max:n.totalPages,value:n.modelValue,onInput:l,class:"h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-blue-600 dark:bg-zinc-800"},null,40,P1),s("span",T1,"P"+A(n.totalPages),1),s("span",R1,A(n.modelValue)+"/"+A(n.totalPages),1)])):N("",!0)],2))}}),F1=["title"],L1=["width","height"],D1=["cx","cy","r","stroke-width"],V1=["cx","cy","r","stroke-width","stroke-dasharray","stroke-dashoffset"],O1={class:"relative z-10 flex flex-col items-center justify-center text-zinc-700 dark:text-zinc-200 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"},B1={class:"font-mono text-[9px] font-extrabold leading-none mt-0.5"},fs=ee({__name:"CircularProgressNav",props:{progress:{},size:{default:56},strokeWidth:{default:4},icon:{},tooltip:{},class:{}},emits:["click"],setup(e,{emit:t}){const n=e,r=t,o=ie(()=>n.size/2),i=ie(()=>o.value-n.strokeWidth),l=ie(()=>2*Math.PI*i.value),a=ie(()=>{const d=Math.min(Math.max(n.progress,0),100);return l.value-d/100*l.value});function c(){r("click")}return(d,p)=>(f(),x("button",{type:"button",onClick:c,title:n.tooltip||`阅读/滚动进度: ${Math.round(n.progress)}%`,class:M(I(ne)("group relative inline-flex items-center justify-center rounded-full bg-white/90 p-1 shadow-md shadow-black/5 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 dark:bg-zinc-900/90 dark:shadow-black/20 cursor-pointer outline-none focus:outline-none ring-0",n.class)),style:fe({width:`${n.size}px`,height:`${n.size}px`})},[(f(),x("svg",{width:n.size,height:n.size,class:"absolute inset-0 -rotate-90 pointer-events-none"},[s("circle",{cx:o.value,cy:o.value,r:i.value,fill:"transparent",stroke:"currentColor","stroke-width":n.strokeWidth,class:"text-zinc-200/80 dark:text-zinc-800"},null,8,D1),s("circle",{cx:o.value,cy:o.value,r:i.value,fill:"transparent",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-dasharray":l.value,"stroke-dashoffset":a.value,class:"text-blue-600 dark:text-blue-500 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"},null,8,V1)],8,L1)),s("div",O1,[(f(),me(Je(n.icon||I(vc)),{class:"h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"})),s("span",B1,A(Math.round(n.progress))+"% ",1)])],14,F1))}}),j1={class:"relative h-full w-full overflow-hidden rounded-2xl p-[1.5px]"},N1={class:"relative z-10 h-full w-full rounded-[14.5px] bg-white p-6 backdrop-blur-xl transition-colors duration-300 dark:bg-zinc-950"},H1=ee({__name:"GlowingCard",props:{glowColor:{default:"conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)"},duration:{default:4},blur:{default:20},hoverOnly:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=ie(()=>`${t.duration}s`),r=ie(()=>`${t.blur}px`);return(o,i)=>(f(),x("div",{class:M(I(ne)("group relative rounded-2xl transition-all duration-300",t.class))},[s("div",{class:M(["pointer-events-none absolute -inset-1 rounded-2xl opacity-40 transition-opacity duration-500 overflow-hidden",t.hoverOnly?"opacity-0 group-hover:opacity-60":"opacity-40"]),style:fe({filter:`blur(${r.value})`})},[s("div",{class:"glow-rotator absolute left-1/2 top-1/2 h-[350%] w-[350%]",style:fe({background:t.glowColor,animationDuration:n.value})},null,4)],6),s("div",j1,[s("div",{class:M(["glow-rotator pointer-events-none absolute left-1/2 top-1/2 h-[350%] w-[350%]",t.hoverOnly?"opacity-0 group-hover:opacity-100":"opacity-100"]),style:fe({background:t.glowColor,animationDuration:n.value})},null,6),s("div",N1,[Oe(o.$slots,"default",{},void 0,!0)])])],2))}}),Na=Fe(H1,[["__scopeId","data-v-0f2ee4a3"]]),G1={key:0,class:"pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/40"},U1={class:"relative z-10"},Ha=ee({__name:"GlassCard",props:{blur:{default:16},saturation:{default:180},borderGlow:{type:Boolean,default:!0},interactive:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=ie(()=>({backdropFilter:`blur(${t.blur}px) saturate(${t.saturation}%)`,WebkitBackdropFilter:`blur(${t.blur}px) saturate(${t.saturation}%)`}));return(r,o)=>(f(),x("div",{class:M(I(ne)("group relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-black/30",t.interactive&&"transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-2xl hover:border-white/40 dark:hover:border-white/20",t.class)),style:fe(n.value)},[t.borderGlow?(f(),x("div",G1)):N("",!0),o[0]||(o[0]=s("div",{class:"pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60 dark:from-white/10 dark:opacity-30"},null,-1)),s("div",U1,[Oe(r.$slots,"default")])],6))}}),q1={class:"relative z-10"},Ga=ee({__name:"SpotlightCard",props:{spotlightColor:{default:"rgba(59, 130, 246, 0.15)"},spotlightRadius:{default:320},showBorderSpotlight:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=P(null),r=P({x:-1e3,y:-1e3}),o=P(!1);function i(p){if(!n.value)return;const u=n.value.getBoundingClientRect();r.value={x:p.clientX-u.left,y:p.clientY-u.top}}function l(){o.value=!0}function a(){o.value=!1,r.value={x:-1e3,y:-1e3}}const c=ie(()=>({background:`radial-gradient(${t.spotlightRadius}px circle at ${r.value.x}px ${r.value.y}px, ${t.spotlightColor}, transparent 80%)`})),d=ie(()=>({background:`radial-gradient(${t.spotlightRadius*.75}px circle at ${r.value.x}px ${r.value.y}px, rgba(59, 130, 246, 0.45), transparent 70%)`}));return(p,u)=>(f(),x("div",{ref_key:"cardRef",ref:n,onMousemove:i,onMouseenter:l,onMouseleave:a,class:M(I(ne)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950",t.class))},[t.showBorderSpotlight?(f(),x("div",{key:0,class:M(["pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300",o.value&&"opacity-100"]),style:fe(d.value)},null,6)):N("",!0),s("div",{class:M(["pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",o.value&&"opacity-100"]),style:fe(c.value)},null,6),s("div",q1,[Oe(p.$slots,"default")])],34))}}),X1={class:"relative z-10 [transform-style:preserve-3d]"},W1=ee({__name:"TiltCard",props:{maxTilt:{default:15},perspective:{default:1e3},glare:{type:Boolean,default:!0},scale:{default:1.03},class:{}},setup(e){const t=e,n=P(null),r=P(0),o=P(0),i=P(!1),l=P({x:50,y:50});function a(b){if(!n.value)return;const m=n.value.getBoundingClientRect(),h=b.clientX-m.left,g=b.clientY-m.top,z=m.width/2,_=m.height/2,y=(h-z)/z,C=(g-_)/_;r.value=-C*t.maxTilt,o.value=y*t.maxTilt,l.value={x:h/m.width*100,y:g/m.height*100}}function c(){i.value=!0}function d(){i.value=!1,r.value=0,o.value=0}const p=ie(()=>i.value?{transform:`perspective(${t.perspective}px) rotateX(${r.value.toFixed(2)}deg) rotateY(${o.value.toFixed(2)}deg) scale3d(${t.scale}, ${t.scale}, ${t.scale})`,transition:"transform 0.1s ease-out"}:{transform:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:"transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"}),u=ie(()=>({background:`radial-gradient(circle at ${l.value.x}% ${l.value.y}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%)`}));return(b,m)=>(f(),x("div",{ref_key:"cardRef",ref:n,onMousemove:a,onMouseenter:c,onMouseleave:d,class:M(I(ne)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xl transition-shadow duration-300 dark:border-zinc-800 dark:bg-zinc-950 select-none",i.value&&"shadow-2xl shadow-blue-500/10",t.class)),style:fe(p.value)},[t.glare?(f(),x("div",{key:0,class:M(["pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-300",i.value&&"opacity-100"]),style:fe(u.value)},null,6)):N("",!0),s("div",X1,[Oe(b.$slots,"default")])],38))}}),Y1={class:"relative h-[240px] w-full max-w-md sm:h-[260px]"},K1=["onPointerdown","onPointermove","onPointerup","onPointercancel"],Z1={class:"flex items-center justify-between mb-4"},Q1={class:"font-mono text-xs text-zinc-400"},J1={class:"text-base font-bold tracking-tight text-zinc-900 dark:text-white line-clamp-2"},ey={key:0,class:"mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3"},ty={key:1,class:"mt-6 flex items-center gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800/60"},ny={class:"h-6 w-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold"},ry={class:"text-xs font-medium text-zinc-600 dark:text-zinc-300"},oy={class:"mt-6 flex items-center gap-4"},sy=ee({__name:"CardStack",props:{items:{},maxVisible:{default:3},class:{}},emits:["change","swipe"],setup(e,{emit:t}){const n=e,r=t,o=P(0),i=P(!1),l=P({x:0,y:0}),a=P({x:0,y:0}),c=ie(()=>{const g=n.items.length;if(g===0)return[];const z=[],_=Math.min(n.maxVisible,g);for(let y=0;y<_;y++){const C=(o.value+y)%g;z.push({item:n.items[C],originalIndex:C,stackOrder:y})}return z});function d(){if(n.items.length<=1)return;const g=n.items[o.value];r("swipe",g,"right"),o.value=(o.value+1)%n.items.length,r("change",n.items[o.value])}function p(){n.items.length<=1||(o.value=(o.value-1+n.items.length)%n.items.length,r("change",n.items[o.value]))}function u(){o.value=0}function b(g){i.value=!0,a.value={x:g.clientX,y:g.clientY},l.value={x:0,y:0},g.target.setPointerCapture(g.pointerId)}function m(g){i.value&&(l.value={x:g.clientX-a.value.x,y:g.clientY-a.value.y})}function h(g){if(!i.value)return;i.value=!1;const z=80;if(l.value.x>z)d();else if(l.value.x<-z){const _=n.items[o.value];r("swipe",_,"left"),o.value=(o.value+1)%n.items.length,r("change",n.items[o.value])}l.value={x:0,y:0}}return(g,z)=>(f(),x("div",{class:M(I(ne)("relative flex flex-col items-center select-none",n.class))},[s("div",Y1,[(f(!0),x(se,null,he(c.value,_=>(f(),x("div",{key:_.item.id,class:M(["absolute inset-0 rounded-2xl border p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",[_.stackOrder===0?"cursor-grab active:cursor-grabbing border-zinc-200/90 bg-white shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900 shadow-black/5 dark:shadow-black/30":"pointer-events-none border-zinc-200/50 bg-white/90 shadow-md dark:border-zinc-800/50 dark:bg-zinc-900/80"]]),style:fe({zIndex:n.maxVisible-_.stackOrder,transform:_.stackOrder===0&&i.value?`translate3d(${l.value.x}px, ${l.value.y*.2}px, 0) rotate(${l.value.x*.06}deg)`:`translate3d(0, -${_.stackOrder*12}px, -${_.stackOrder*20}px) scale(${1-_.stackOrder*.05})`,opacity:1-_.stackOrder*.15}),onPointerdown:y=>_.stackOrder===0?b(y):void 0,onPointermove:y=>_.stackOrder===0?m(y):void 0,onPointerup:y=>_.stackOrder===0?h():void 0,onPointercancel:y=>_.stackOrder===0?h():void 0},[s("div",Z1,[_.item.tag?(f(),x("span",{key:0,class:M(["rounded-full px-2.5 py-0.5 text-[11px] font-bold",_.item.color||"bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"])},A(_.item.tag),3)):N("",!0),s("span",Q1," #"+A(_.originalIndex+1)+" / "+A(n.items.length),1)]),s("h4",J1,A(_.item.title),1),_.item.description?(f(),x("p",ey,A(_.item.description),1)):N("",!0),_.item.author?(f(),x("div",ty,[s("div",ny,A(_.item.author.charAt(0)),1),s("span",ry,A(_.item.author),1)])):N("",!0)],46,K1))),128))]),s("div",oy,[s("button",{type:"button",onClick:p,class:"flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer outline-none focus:outline-none ring-0",title:"上一张卡片"},[k(I(yc),{class:"h-4 w-4"})]),s("button",{type:"button",onClick:u,class:"flex h-8 px-3 items-center justify-center gap-1.5 rounded-full border border-zinc-200 bg-white text-xs font-mono text-zinc-500 shadow-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer outline-none focus:outline-none ring-0",title:"重置堆叠"},[k(I(Mc),{class:"h-3 w-3"}),z[0]||(z[0]=s("span",null,"重置",-1))]),s("button",{type:"button",onClick:d,class:"flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer outline-none focus:outline-none ring-0",title:"下一张卡片（或向右划动）"},[k(I(jn),{class:"h-4 w-4"})])])],2))}}),iy={class:"pointer-events-none absolute h-0 w-0"},ay=["id"],ly={class:"relative z-10"},cy=ee({__name:"NoiseCard",props:{gradient:{default:"linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))"},grainOpacity:{default:.15},animated:{type:Boolean,default:!0},class:{}},setup(e){const t=e,n=Qn(),r=ie(()=>`noise-filter-${n}`);return(o,i)=>(f(),x("div",{class:M(I(ne)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-xl dark:border-zinc-800/80 dark:bg-zinc-950/80",t.class))},[s("div",{class:"pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-100",style:fe({background:t.gradient})},null,4),(f(),x("svg",iy,[s("defs",null,[s("filter",{id:r.value,x:"0%",y:"0%",width:"100%",height:"100%"},[...i[0]||(i[0]=[s("feTurbulence",{type:"fractalNoise",baseFrequency:"0.75",numOctaves:"3",stitchTiles:"stitch"},null,-1),s("feColorMatrix",{type:"saturate",values:"0"},null,-1)])],8,ay)])])),s("div",{class:M(["pointer-events-none absolute -inset-[100%] transition-opacity duration-300",t.animated&&"animate-noise"]),style:fe({filter:`url(#${r.value})`,opacity:t.grainOpacity})},null,6),i[1]||(i[1]=s("div",{class:"pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/20"},null,-1)),s("div",ly,[Oe(o.$slots,"default",{},void 0,!0)])],2))}}),Ua=Fe(cy,[["__scopeId","data-v-3563e1d3"]]),dy=["width","height"],uy=["id"],py=["stop-color"],fy=["stop-color"],my=["d","fill"],by=["d","stroke"],xy=["x1","y1","x2","y2","stroke"],gy={key:2},hy=["cx","cy","stroke"],vy=["cx","cy","fill"],Hs=ee({__name:"Sparkline",props:{data:{default:()=>[12,19,15,27,24,38,35,48,52,60,58,75]},width:{default:280},height:{default:80},color:{default:"#3b82f6"},fill:{type:Boolean,default:!0},interactive:{type:Boolean,default:!0},formatValue:{},class:{}},setup(e){const t=e,n=Qn(),r=ie(()=>`sparkline-grad-${n}`),o={top:8,bottom:8,left:4,right:4},i=ie(()=>{if(t.data.length===0)return[];const m=Math.min(...t.data),g=Math.max(...t.data)-m||1,z=t.width-o.left-o.right,_=t.height-o.top-o.bottom;return t.data.map((y,C)=>{const w=o.left+C/(t.data.length-1)*z,T=o.top+_-(y-m)/g*_;return{x:w,y:T,value:y,index:C}})}),l=ie(()=>{const m=i.value;if(m.length<2)return"";let h=`M ${m[0].x} ${m[0].y}`;for(let g=0;g<m.length-1;g++){const z=m[g],_=m[g+1],y=(z.x+_.x)/2;h+=` C ${y} ${z.y}, ${y} ${_.y}, ${_.x} ${_.y}`}return h}),a=ie(()=>{const m=i.value;if(m.length<2)return"";const h=l.value,g=m[m.length-1],z=m[0],_=t.height-o.bottom+4;return`${h} L ${g.x} ${_} L ${z.x} ${_} Z`}),c=P(null),d=P({x:0,y:0}),p=ie(()=>c.value===null?null:i.value[c.value]||null);function u(m){if(!t.interactive||i.value.length===0)return;const g=m.currentTarget.getBoundingClientRect(),z=m.clientX-g.left;let _=0,y=1/0;i.value.forEach((C,w)=>{const T=Math.abs(C.x-z);T<y&&(y=T,_=w)}),c.value=_,d.value={x:i.value[_].x,y:i.value[_].y}}function b(){c.value=null}return(m,h)=>(f(),x("div",{class:M(I(ne)("relative inline-flex flex-col select-none",t.class))},[(f(),x("svg",{width:t.width,height:t.height,class:"overflow-visible",onMousemove:u,onMouseleave:b},[s("defs",null,[s("linearGradient",{id:r.value,x1:"0",y1:"0",x2:"0",y2:"1"},[s("stop",{offset:"0%","stop-color":t.color,"stop-opacity":"0.35"},null,8,py),s("stop",{offset:"100%","stop-color":t.color,"stop-opacity":"0.0"},null,8,fy)],8,uy)]),t.fill?(f(),x("path",{key:0,d:a.value,fill:`url(#${r.value})`,class:"transition-opacity duration-300"},null,8,my)):N("",!0),s("path",{d:l.value,fill:"none",stroke:t.color,"stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round",class:"transition-all duration-300"},null,8,by),p.value?(f(),x("line",{key:1,x1:p.value.x,y1:o.top,x2:p.value.x,y2:t.height-o.bottom,stroke:t.color,"stroke-width":"1","stroke-dasharray":"2 2","stroke-opacity":"0.6"},null,8,xy)):N("",!0),p.value?(f(),x("g",gy,[s("circle",{cx:p.value.x,cy:p.value.y,r:"5",class:"fill-white dark:fill-zinc-950 transition-all duration-150",stroke:t.color,"stroke-width":"2.5"},null,8,hy),s("circle",{cx:p.value.x,cy:p.value.y,r:"8",fill:t.color,"fill-opacity":"0.25"},null,8,vy)])):N("",!0)],40,dy)),p.value?(f(),x("div",{key:0,class:"pointer-events-none absolute -top-8 z-20 -translate-x-1/2 rounded-md border border-zinc-200/80 bg-white/95 px-2 py-0.5 font-mono text-xs font-bold text-zinc-800 shadow-md backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/95 dark:text-zinc-100 transition-all duration-75",style:fe({left:`${p.value.x}px`})},A(t.formatValue?t.formatValue(p.value.value):p.value.value),5)):N("",!0)],2))}}),yy={key:0,class:"mr-0.5 text-[0.85em] font-medium opacity-80"},wy={key:1,class:"ml-0.5 text-[0.85em] font-medium opacity-80"},fd=ee({__name:"AnimatedCounter",props:{value:{},duration:{default:1e3},decimals:{default:0},prefix:{default:""},suffix:{default:""},formatThousands:{type:Boolean,default:!0},trendColor:{type:Boolean,default:!1},class:{}},setup(e){const t=e,n=P(t.value),r=P("neutral");let o=null;function i(c){return c===1?1:1-Math.pow(2,-10*c)}function l(c,d){if(c===d){n.value=d;return}t.trendColor&&(r.value=d>c?"up":"down",o&&clearTimeout(o),o=setTimeout(()=>{r.value="neutral"},1500));const p=performance.now(),u=t.duration;function b(m){const h=m-p,g=Math.min(h/u,1),z=i(g);n.value=c+(d-c)*z,g<1?requestAnimationFrame(b):n.value=d}requestAnimationFrame(b)}Xe(()=>t.value,(c,d)=>{l(d??0,c)}),Pe(()=>{l(0,t.value)});const a=ie(()=>{const c=n.value.toFixed(t.decimals);if(!t.formatThousands)return c;const d=c.split(".");return d[0]=d[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),d.join(".")});return(c,d)=>(f(),x("span",{class:M(I(ne)("inline-flex items-baseline font-mono font-bold tracking-tight transition-colors duration-500",t.trendColor&&r.value==="up"&&"text-emerald-500 dark:text-emerald-400",t.trendColor&&r.value==="down"&&"text-rose-500 dark:text-rose-400",t.class))},[t.prefix?(f(),x("span",yy,A(t.prefix),1)):N("",!0),s("span",null,A(a.value),1),t.suffix?(f(),x("span",wy,A(t.suffix),1)):N("",!0)],2))}}),ky=["width","height"],zy=["id"],_y=["stop-color"],Cy=["d","stroke-width"],Sy=["d","stroke","stroke-width","stroke-dasharray","stroke-dashoffset"],My=["cx","cy","r","fill"],Iy=["cx","cy","r"],Ay=["d","stroke-width"],$y={class:"pointer-events-none absolute inset-0 flex flex-col items-center justify-center pt-3 text-center"},Py={class:"text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase"},Ty={class:"flex items-baseline mt-0.5"},Ry={class:"font-mono text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white"},Ey={class:"ml-0.5 text-xs font-mono text-zinc-400 font-bold"},cr=-120,ms=120,bs=ee({__name:"RadialGauge",props:{value:{},size:{default:180},strokeWidth:{default:12},label:{default:""},unit:{default:"%"},min:{default:0},max:{default:100},step:{default:1},thresholds:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},class:{}},emits:["update:value","change"],setup(e,{emit:t}){const n=e,r=t,o=Qn(),i=ie(()=>`gauge-grad-${o}`),l=ie(()=>n.size/2),a=ie(()=>l.value-n.strokeWidth-6),c=ms-cr;function d(Q,te,W,we){const J=(we-90)*Math.PI/180;return{x:Q+W*Math.cos(J),y:te+W*Math.sin(J)}}function p(Q,te,W,we,J){const Re=d(Q,te,W,we),Me=d(Q,te,W,J);return`M ${Re.x} ${Re.y} A ${W} ${W} 0 1 1 ${Me.x} ${Me.y}`}const u=ie(()=>p(l.value,l.value,a.value,cr,ms)),b=ie(()=>c/360*2*Math.PI*a.value),m=ie(()=>{const Q=n.max-n.min;return Q<=0?0:(Math.min(Math.max(n.value,n.min),n.max)-n.min)/Q}),h=P(!1),g=P(m.value);let z=0;function _(Q){return Q>=1?1:1-Math.pow(2,-10*Q)}Xe(m,Q=>{if(cancelAnimationFrame(z),h.value){g.value=Q;return}const te=g.value,W=performance.now(),we=700,J=Re=>{const Me=Math.min((Re-W)/we,1);g.value=te+(Q-te)*_(Me),Me<1&&(z=requestAnimationFrame(J))};z=requestAnimationFrame(J)}),Ee(()=>cancelAnimationFrame(z));const y=ie(()=>b.value-g.value*b.value),C=ie(()=>{if(!n.thresholds)return{stroke:"#3b82f6",text:"text-blue-500"};const Q=m.value*100;return Q>=90?{stroke:"#f43f5e",text:"text-rose-500"}:Q>=75?{stroke:"#f59e0b",text:"text-amber-500"}:{stroke:"#10b981",text:"text-emerald-500"}}),w=ie(()=>{const Q=cr+g.value*c;return d(l.value,l.value,a.value,Q)}),T=P(null);let F=n.value;function D(Q){const te=n.min+Math.round((Q-n.min)/n.step)*n.step,W=Math.min(Math.max(te,n.min),n.max);return Math.round(W*1e6)/1e6}function R(Q){const te=D(Q);F=te,te!==n.value&&r("update:value",te)}function L(Q){const te=T.value.getBoundingClientRect(),W=te.width/n.size||1,we=(Q.clientX-te.left)/W-l.value,J=(Q.clientY-te.top)/W-l.value;return{distance:Math.hypot(we,J),angle:Math.atan2(we,-J)*180/Math.PI}}function Z(Q){let te;return Q<cr||Q>ms?te=h.value?m.value>=.5?1:0:Q<0?0:1:te=(Q-cr)/c,n.min+te*(n.max-n.min)}function le(Q){if(!n.draggable||!T.value)return;const{distance:te,angle:W}=L(Q);if(Math.abs(te-a.value)>n.strokeWidth/2+10)return;const we=Z(W);h.value=!0,Q.currentTarget.setPointerCapture(Q.pointerId),R(we)}function q(Q){h.value&&R(Z(L(Q).angle))}function be(){h.value&&(h.value=!1,r("change",F))}function _e(Q){if(!n.draggable)return;const te=(n.max-n.min)/10;let W;switch(Q.key){case"ArrowRight":case"ArrowUp":W=n.value+n.step;break;case"ArrowLeft":case"ArrowDown":W=n.value-n.step;break;case"PageUp":W=n.value+te;break;case"PageDown":W=n.value-te;break;case"Home":W=n.min;break;case"End":W=n.max;break;default:return}Q.preventDefault(),R(W),r("change",F)}const ze=ie(()=>n.draggable?{role:"slider",tabindex:0,"aria-label":n.label||void 0,"aria-valuemin":n.min,"aria-valuemax":n.max,"aria-valuenow":n.value,"aria-valuetext":`${Math.round(n.value)}${n.unit}`}:{});return(Q,te)=>(f(),x("div",{class:M(I(ne)("relative inline-flex flex-col items-center select-none",n.class))},[s("div",ac(ze.value,{class:["group relative outline-none",n.draggable&&"touch-none",h.value&&"cursor-grabbing"],style:{width:`${n.size}px`,height:`${n.size*.85}px`},onPointerdown:le,onPointermove:q,onPointerup:be,onPointercancel:be,onKeydown:_e}),[(f(),x("svg",{ref_key:"svgRef",ref:T,width:n.size,height:n.size,class:"overflow-visible"},[s("defs",null,[s("linearGradient",{id:i.value,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[te[0]||(te[0]=s("stop",{offset:"0%","stop-color":"#3b82f6"},null,-1)),te[1]||(te[1]=s("stop",{offset:"50%","stop-color":"#8b5cf6"},null,-1)),s("stop",{offset:"100%","stop-color":C.value.stroke},null,8,_y)],8,zy)]),s("path",{d:u.value,fill:"none",stroke:"currentColor","stroke-width":n.strokeWidth,"stroke-linecap":"round",class:"text-zinc-200/80 dark:text-zinc-800"},null,8,Cy),s("path",{d:u.value,fill:"none",stroke:`url(#${i.value})`,"stroke-width":n.strokeWidth,"stroke-linecap":"round","stroke-dasharray":b.value,"stroke-dashoffset":y.value},null,8,Sy),n.draggable?(f(),x("circle",{key:0,cx:w.value.x,cy:w.value.y,r:n.strokeWidth/2+5,fill:C.value.stroke,class:M(["transition-opacity duration-200 group-hover:opacity-25 group-focus-visible:opacity-25",h.value?"opacity-25":"opacity-0"])},null,10,My)):N("",!0),n.draggable||g.value>.02?(f(),x("circle",{key:1,cx:w.value.x,cy:w.value.y,r:n.strokeWidth/2-1,fill:"white"},null,8,Iy)):N("",!0),n.draggable?(f(),x("path",{key:2,d:u.value,fill:"none",stroke:"transparent","stroke-width":n.strokeWidth+20,"stroke-linecap":"round",class:M(h.value?"cursor-grabbing":"cursor-grab")},null,10,Ay)):N("",!0)],8,ky)),s("div",$y,[s("span",Py,A(n.label),1),s("div",Ty,[s("span",Ry,A(Math.round(n.value)),1),s("span",Ey,A(n.unit),1)])])],16)],2))}}),Fy={class:"relative flex items-center justify-between"},Ly=["onClick"],Dy={key:1},Vy={class:"mt-2.5 text-center"},Oy={key:0,class:"text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5 line-clamp-1 max-w-[100px]"},By=ee({__name:"ProgressSteps",props:{steps:{},currentStep:{default:1},clickable:{type:Boolean,default:!0},class:{}},emits:["update:currentStep","change"],setup(e,{emit:t}){const n=e,r=t;function o(l){n.clickable&&(r("update:currentStep",l),r("change",l))}const i=ie(()=>n.steps.length<=1?100:(n.currentStep-1)/(n.steps.length-1)*100);return(l,a)=>(f(),x("div",{class:M(I(ne)("w-full select-none",n.class))},[s("div",Fy,[a[0]||(a[0]=s("div",{class:"absolute left-6 right-6 top-5 -translate-y-1/2 h-0.5 bg-zinc-200 dark:bg-zinc-800 pointer-events-none"},null,-1)),s("div",{class:"absolute left-6 top-5 -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none",style:fe({width:`calc(${i.value}% * ((100% - 48px) / 100))`})},null,4),(f(!0),x(se,null,he(n.steps,(c,d)=>(f(),x("div",{key:d,class:"relative z-10 flex flex-col items-center group cursor-pointer",onClick:p=>o(d+1)},[s("button",{type:"button",class:M(["flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] outline-none focus:outline-none ring-0",d+1<n.currentStep?"border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-500/20":d+1===n.currentStep?"border-blue-600 bg-white dark:bg-zinc-950 text-blue-600 dark:text-blue-400 ring-4 ring-blue-500/15 scale-110 shadow-lg shadow-blue-500/20":"border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900 text-zinc-400",n.clickable&&"hover:scale-105 active:scale-95"])},[d+1<n.currentStep?(f(),me(I(wt),{key:0,class:"h-4 w-4 animate-scale-in"})):(f(),x("span",Dy,A(d+1),1))],2),s("div",Vy,[s("div",{class:M(["text-xs font-bold transition-colors duration-200",d+1<=n.currentStep?"text-zinc-900 dark:text-white":"text-zinc-400 dark:text-zinc-500"])},A(c.title),3),c.description?(f(),x("div",Oy,A(c.description),1)):N("",!0)])],8,Ly))),128))])],2))}}),jy=Fe(By,[["__scopeId","data-v-d1e278b7"]]),Ny={class:"min-w-[640px] pt-4"},Hy={class:"grid grid-cols-4 gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800"},Gy=["onClick"],Uy={key:0,class:"absolute -top-3 right-4 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-md shadow-blue-500/20"},qy={class:"text-base font-bold text-zinc-900 dark:text-white"},Xy={class:"mt-2 flex items-baseline"},Wy={class:"font-mono text-2xl font-extrabold text-zinc-900 dark:text-white"},Yy={key:0,class:"ml-1 text-xs text-zinc-400"},Ky=["aria-pressed"],Zy={class:"divide-y divide-zinc-100 dark:divide-zinc-800/60"},Qy={class:"px-2 text-xs font-medium text-zinc-700 dark:text-zinc-300"},Jy={key:0,class:"flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"},ew={key:1,class:"flex h-6 w-6 items-center justify-center text-zinc-300 dark:text-zinc-600"},tw={key:2,class:"font-mono text-xs font-semibold text-zinc-800 dark:text-zinc-200"},nw=ee({__name:"ComparisonMatrix",props:{plans:{},features:{},modelValue:{},class:{}},emits:["update:modelValue","selectPlan"],setup(e,{emit:t}){var l;const n=e,r=t,o=P(n.modelValue??((l=n.plans.find(a=>a.popular))==null?void 0:l.id));Xe(()=>n.modelValue,a=>{a!==void 0&&(o.value=a)});function i(a){o.value=a,r("update:modelValue",a),r("selectPlan",a)}return(a,c)=>(f(),x("div",{class:M(I(ne)("w-full overflow-x-auto select-none",n.class))},[s("div",Ny,[s("div",Hy,[c[0]||(c[0]=s("div",{class:"flex flex-col justify-end p-2"},[s("span",{class:"text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider"}," 方案特性对比 "),s("h3",{class:"mt-1 text-lg font-bold text-zinc-900 dark:text-white"}," 选择适合你的动效套件 ")],-1)),(f(!0),x(se,null,he(n.plans,d=>(f(),x("div",{key:d.id,onClick:p=>i(d.id),class:M(["relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300 cursor-pointer",d.id===o.value?"border-blue-600 ring-1 ring-blue-600 bg-blue-50/50 dark:border-blue-500 dark:ring-blue-500 dark:bg-blue-950/20 shadow-xl shadow-blue-500/10":"border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 shadow-xs"])},[d.badge?(f(),x("div",Uy,A(d.badge),1)):N("",!0),s("div",null,[s("h4",qy,A(d.name),1),s("div",Xy,[s("span",Wy,A(d.price),1),d.period?(f(),x("span",Yy," / "+A(d.period),1)):N("",!0)])]),s("button",{type:"button","aria-pressed":d.id===o.value,class:M(["mt-4 w-full rounded-xl py-2 text-xs font-bold transition-all duration-200 cursor-pointer outline-none focus:outline-none ring-0",d.id===o.value?"bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]":"border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"])},A(d.ctaText||"立即选择"),11,Ky)],10,Gy))),128))]),s("div",Zy,[(f(!0),x(se,null,he(n.features,(d,p)=>(f(),x("div",{key:p,class:"grid grid-cols-4 gap-4 py-3.5 items-center hover:bg-zinc-50/80 dark:hover:bg-zinc-900/40 rounded-xl transition-colors"},[s("div",Qy,A(d.name),1),(f(!0),x(se,null,he(n.plans,u=>(f(),x("div",{key:u.id,class:"flex items-center justify-center text-center"},[d.values[u.id]===!0?(f(),x("div",Jy,[k(I(wt),{class:"h-3.5 w-3.5 stroke-[3]"})])):d.values[u.id]===!1?(f(),x("div",ew,[k(I(Cc),{class:"h-3.5 w-3.5 stroke-[2]"})])):(f(),x("span",tw,A(d.values[u.id]),1))]))),128))]))),128))])])],2))}}),rw={class:"flex items-center justify-between"},ow={class:"text-xs font-semibold text-zinc-500 dark:text-zinc-400"},sw={key:0,class:"flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 transition-colors group-hover:text-blue-500"},iw={class:"mt-3 flex items-end justify-between gap-4"},aw={class:"text-2xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-3xl"},lw={key:0,class:"mt-2 flex items-center gap-1.5"},cw={class:"text-[11px] text-zinc-400"},dw={key:0,class:"shrink-0 -mb-1"},qa=ee({__name:"StatCard",props:{title:{},value:{},prefix:{},suffix:{},decimals:{default:0},change:{},changePeriod:{default:"较上周期"},trendData:{},color:{default:"#3b82f6"},icon:{},class:{}},setup(e){const t=e,n=ie(()=>t.change===void 0?"none":t.change>0?"up":t.change<0?"down":"flat");return(r,o)=>(f(),x("div",{class:M(I(ne)("group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-950",t.class))},[s("div",rw,[s("span",ow,A(t.title),1),t.icon?(f(),x("div",sw,[(f(),me(Je(t.icon),{class:"h-4 w-4"}))])):N("",!0)]),s("div",iw,[s("div",null,[s("div",aw,[k(fd,{value:t.value,decimals:t.decimals,prefix:t.prefix,suffix:t.suffix,duration:1200},null,8,["value","decimals","prefix","suffix"])]),t.change!==void 0?(f(),x("div",lw,[s("span",{class:M(["inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold font-mono",n.value==="up"&&"bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",n.value==="down"&&"bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",n.value==="flat"&&"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])},[n.value==="up"?(f(),me(I(k0),{key:0,class:"h-3 w-3"})):n.value==="down"?(f(),me(I(w0),{key:1,class:"h-3 w-3"})):(f(),me(I(Cc),{key:2,class:"h-3 w-3"})),s("span",null,A(t.change>0?`+${t.change}`:t.change)+"%",1)],2),s("span",cw,A(t.changePeriod),1)])):N("",!0)]),t.trendData&&t.trendData.length>0?(f(),x("div",dw,[k(Hs,{data:t.trendData,width:120,height:44,color:t.color,fill:!0,interactive:!1},null,8,["data","color"])])):N("",!0)])],2))}}),uw={class:"relative flex items-center border-b border-zinc-200/80 px-4 py-3.5 dark:border-zinc-800/80"},pw=["placeholder"],fw={class:"max-h-80 overflow-y-auto p-2 scrollbar-thin"},mw={key:0,class:"py-12 text-center text-xs text-zinc-400"},bw={key:1,class:"space-y-1"},xw=["onClick","onMouseenter"],gw={class:"flex items-center gap-3"},hw={class:"flex flex-col"},vw={class:"font-bold tracking-tight"},yw={class:"flex items-center gap-2"},ww=ee({__name:"CommandDialog",props:{modelValue:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},groups:{default:()=>[]},placeholder:{default:"键入指令或搜索动效组件 (Ctrl+K)..."},class:{}},emits:["update:modelValue","update:open","select"],setup(e,{emit:t}){const n=[{id:"popular",name:"快捷动作",items:[{id:"search-components",title:"搜索全量动效组件库",description:"快速过滤 58 款原子组件与交互块",icon:Nn,shortcut:"⌘F"},{id:"toggle-theme",title:"切换界面深浅色主题",description:"一键在明亮与暗黑模式之间切换",icon:c0,shortcut:"⌘T"},{id:"copy-template",title:"复制当前组件单文件代码",description:"Zero-Config 单文件直接粘贴即用",icon:Le,shortcut:"⌘C"}]},{id:"navigation",name:"套件快速直达",items:[{id:"nav-tactile",title:"触觉反馈与原子操作套件",description:"包含 HoldToConfirm, ConfirmMorph 等 6 款组件",icon:tn},{id:"nav-forms",title:"表单与高阶输入套件",description:"包含 ScrubInput, PasswordStrength 等 6 款组件",icon:$c},{id:"nav-cards",title:"光效边框与立体卡片套件",description:"包含 GlowingCard, GlassCard 等 6 款组件",icon:Bt},{id:"nav-overlays",title:"浮层弹窗与交互覆盖套件",description:"包含 CommandDialog, ContextMenu 等 6 款组件",icon:Ac}]},{id:"system",name:"项目文档",items:[{id:"view-docs",title:"浏览 Aura UI 设计规范文档",description:"阅读完整的微动缓动曲线与投影系统",icon:n0,shortcut:"⌘D"}]}],r=e,o=t,i=ie(()=>r.modelValue!==void 0?r.modelValue:r.open??!1),l=ie(()=>r.groups&&r.groups.length>0?r.groups:n),a=P(""),c=P(0),d=P(null),p=ie(()=>{const h=a.value.trim().toLowerCase(),g=[];return l.value.forEach(z=>{z.items.forEach(_=>{var T;const y=_.title.toLowerCase().includes(h),C=(T=_.description)==null?void 0:T.toLowerCase().includes(h),w=z.name.toLowerCase().includes(h);(!h||y||C||w)&&g.push({groupName:z.name,item:_})})}),g});function u(){o("update:modelValue",!1),o("update:open",!1),a.value="",c.value=0}function b(h){o("select",h),h.onSelect&&h.onSelect(),u()}function m(h){if(!i.value){(h.metaKey||h.ctrlKey)&&h.key.toLowerCase()==="k"&&(h.preventDefault(),o("update:modelValue",!0),o("update:open",!0));return}if(h.key==="Escape")h.preventDefault(),u();else if(h.key==="ArrowDown")h.preventDefault(),p.value.length>0&&(c.value=(c.value+1)%p.value.length);else if(h.key==="ArrowUp")h.preventDefault(),p.value.length>0&&(c.value=(c.value-1+p.value.length)%p.value.length);else if(h.key==="Enter"){h.preventDefault();const g=p.value[c.value];g&&b(g.item)}}return Xe(()=>i.value,h=>{h&&(c.value=0,setTimeout(()=>{var g;(g=d.value)==null||g.focus()},50))}),Xe(a,()=>{c.value=0}),Pe(()=>{window.addEventListener("keydown",m)}),Ee(()=>{window.removeEventListener("keydown",m)}),(h,g)=>(f(),me(oi,{to:"body"},[k(et,{name:"cmd-fade"},{default:U(()=>[i.value?(f(),x("div",{key:0,class:"fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-black/40 backdrop-blur-sm",onClick:yt(u,["self"])},[s("div",{class:M(I(ne)("popover-shadow relative w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 backdrop-blur-2xl transition-all dark:border-zinc-800/90 dark:bg-zinc-900/95 shadow-2xl",r.class))},[s("div",uw,[k(I(ua),{class:"h-4 w-4 shrink-0 text-zinc-400 mr-3"}),$n(s("input",{ref_key:"inputRef",ref:d,"onUpdate:modelValue":g[0]||(g[0]=z=>a.value=z),type:"text",placeholder:r.placeholder,class:"h-6 w-full bg-transparent text-sm font-medium text-zinc-900 placeholder:text-zinc-400 outline-none dark:text-white"},null,8,pw),[[Oo,a.value]]),a.value?(f(),x("button",{key:0,type:"button",onClick:g[1]||(g[1]=z=>a.value=""),class:"p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"},[k(I(er),{class:"h-3.5 w-3.5"})])):N("",!0),g[2]||(g[2]=s("kbd",{class:"ml-2 hidden sm:inline-flex h-5 items-center rounded border border-zinc-200 bg-zinc-100 px-1.5 font-mono text-[10px] text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"}," ESC ",-1))]),s("div",fw,[p.value.length===0?(f(),x("div",mw," 未找到匹配的指令或组件 ")):(f(),x("div",bw,[(f(!0),x(se,null,he(p.value,(z,_)=>(f(),x("button",{key:z.item.id,type:"button",onClick:y=>b(z.item),onMouseenter:y=>c.value=_,class:M(["group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs font-medium transition-colors cursor-pointer outline-none focus:outline-none ring-0",c.value===_?"bg-blue-600 text-white":"text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/70"])},[s("div",gw,[s("div",{class:M(["flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors",c.value===_?"bg-white/20 text-white":"bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"])},[(f(),me(Je(z.item.icon||I(ua)),{class:"h-3.5 w-3.5"}))],2),s("div",hw,[s("span",vw,A(z.item.title),1),z.item.description?(f(),x("span",{key:0,class:M(["text-[11px] line-clamp-1",c.value===_?"text-blue-100":"text-zinc-400"])},A(z.item.description),3)):N("",!0)])]),s("div",yw,[z.item.badge?(f(),x("span",{key:0,class:M(["rounded-md px-1.5 py-0.5 text-[10px] font-semibold",c.value===_?"bg-white/20 text-white":"bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"])},A(z.item.badge),3)):N("",!0),z.item.shortcut?(f(),x("kbd",{key:1,class:M(["font-mono text-[10px]",c.value===_?"text-white/80":"text-zinc-400"])},A(z.item.shortcut),3)):N("",!0)])],42,xw))),128))]))]),g[3]||(g[3]=s("div",{class:"flex items-center justify-between border-t border-zinc-200/80 px-4 py-2 text-[11px] text-zinc-400 dark:border-zinc-800/80"},[s("div",{class:"flex items-center gap-3"},[s("span",{class:"flex items-center gap-1"},[s("kbd",{class:"rounded border border-zinc-200 bg-zinc-100 px-1 font-mono text-[10px] dark:border-zinc-700 dark:bg-zinc-800"},"↑↓"),s("span",null,"导航")]),s("span",{class:"flex items-center gap-1"},[s("kbd",{class:"rounded border border-zinc-200 bg-zinc-100 px-1 font-mono text-[10px] dark:border-zinc-700 dark:bg-zinc-800"},"↵"),s("span",null,"选择")])]),s("span",null,"Spotlight 指令中心")],-1))],2)])):N("",!0)]),_:1})]))}}),kw=Fe(ww,[["__scopeId","data-v-b957169e"]]),zw={class:"flex items-center justify-between border-b border-zinc-200/80 px-6 py-4 dark:border-zinc-800/80"},_w={class:"text-base font-bold text-zinc-900 dark:text-white"},Cw={key:0,class:"mt-0.5 text-xs text-zinc-500 dark:text-zinc-400"},Sw={class:"flex-1 overflow-y-auto p-6 scrollbar-thin"},Mw={key:0,class:"border-t border-zinc-200/80 bg-zinc-50/70 p-4 dark:border-zinc-800/80 dark:bg-zinc-950/70"},Iw=ee({__name:"SlideOverDrawer",props:{modelValue:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},title:{default:"侧边抽屉面板"},description:{default:""},placement:{default:"right"},side:{default:void 0},width:{default:"max-w-md"},class:{}},emits:["update:modelValue","update:open","close"],setup(e,{emit:t}){const n=e,r=t,o=ie(()=>n.modelValue!==void 0?n.modelValue:n.open??!1),i=ie(()=>n.side||n.placement||"right");function l(){r("update:modelValue",!1),r("update:open",!1),r("close")}function a(c){o.value&&c.key==="Escape"&&(c.preventDefault(),l())}return Xe(()=>o.value,c=>{c?document.body.style.overflow="hidden":document.body.style.overflow=""}),Pe(()=>{window.addEventListener("keydown",a)}),Ee(()=>{window.removeEventListener("keydown",a),document.body.style.overflow=""}),(c,d)=>(f(),me(oi,{to:"body"},[k(et,{name:"drawer-fade"},{default:U(()=>[o.value?(f(),x("div",{key:0,class:"fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm",onClick:yt(l,["self"])},[s("div",{class:M(["fixed inset-y-0 flex max-w-full",i.value==="right"?"right-0 pl-10":"left-0 pr-10"])},[k(et,{name:i.value==="right"?"drawer-slide-right":"drawer-slide-left"},{default:U(()=>[o.value?(f(),x("div",{key:0,class:M(I(ne)("w-screen flex flex-col border-zinc-200/80 bg-white/95 shadow-2xl backdrop-blur-2xl dark:border-zinc-800/80 dark:bg-zinc-900/95",i.value==="right"?"border-l":"border-r",n.width,n.class))},[s("div",zw,[s("div",null,[s("h3",_w,A(n.title),1),n.description?(f(),x("p",Cw,A(n.description),1)):N("",!0)]),s("button",{type:"button",onClick:l,class:"rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer",title:"关闭面板 (Esc)"},[k(I(er),{class:"h-4 w-4"})])]),s("div",Sw,[Oe(c.$slots,"default",{},void 0,!0)]),c.$slots.footer?(f(),x("div",Mw,[Oe(c.$slots,"footer",{close:l},void 0,!0)])):N("",!0)],2)):N("",!0)]),_:3},8,["name"])],2)])):N("",!0)]),_:3})]))}}),Aw=Fe(Iw,[["__scopeId","data-v-cc220321"]]),$w=ee({__name:"FloatingPopover",props:{placement:{default:"bottom"},width:{default:"w-72"},arrow:{type:Boolean,default:!0},closeOnClickOutside:{type:Boolean,default:!0},class:{}},setup(e,{expose:t}){const n=e,r=P(!1),o=P(null);function i(){r.value=!r.value}function l(){r.value=!1}function a(c){n.closeOnClickOutside&&o.value&&!o.value.contains(c.target)&&l()}return Pe(()=>{window.addEventListener("click",a)}),Ee(()=>{window.removeEventListener("click",a)}),t({open:()=>{r.value=!0},close:l,toggle:i}),(c,d)=>(f(),x("div",{ref_key:"containerRef",ref:o,class:"relative inline-flex"},[s("div",{onClick:yt(i,["stop"]),class:"inline-flex cursor-pointer"},[Oe(c.$slots,"trigger",{isOpen:r.value,toggle:i},void 0,!0)]),k(et,{name:"popover-spring"},{default:U(()=>[r.value?(f(),x("div",{key:0,class:M(I(ne)("aura-popover popover-shadow absolute z-50 rounded-2xl border border-zinc-200/90 bg-white/95 p-4 backdrop-blur-2xl dark:border-zinc-800/90 dark:bg-zinc-900/95",n.width,n.placement==="bottom"&&"top-full left-1/2 -translate-x-1/2 mt-2.5",n.placement==="top"&&"bottom-full left-1/2 -translate-x-1/2 mb-2.5",n.placement==="left"&&"right-full top-1/2 -translate-y-1/2 mr-2.5",n.placement==="right"&&"left-full top-1/2 -translate-y-1/2 ml-2.5",n.class)),onClick:d[0]||(d[0]=yt(()=>{},["stop"]))},[n.arrow?(f(),x("div",{key:0,class:M(["absolute h-2 w-2 rotate-45 border border-zinc-200/90 bg-white dark:border-zinc-800/90 dark:bg-zinc-900 pointer-events-none",n.placement==="bottom"&&"-top-1 left-1/2 -translate-x-1/2 border-b-0 border-r-0",n.placement==="top"&&"-bottom-1 left-1/2 -translate-x-1/2 border-t-0 border-l-0",n.placement==="left"&&"-right-1 top-1/2 -translate-y-1/2 border-b-0 border-l-0",n.placement==="right"&&"-left-1 top-1/2 -translate-y-1/2 border-t-0 border-r-0"])},null,2)):N("",!0),Oe(c.$slots,"default",{},void 0,!0)],2)):N("",!0)]),_:3})],512))}}),Xa=Fe($w,[["__scopeId","data-v-656eab20"]]),Pw={key:0,class:"my-1 border-t border-zinc-200/80 dark:border-zinc-800/80"},Tw=["disabled","onClick"],Rw={class:"flex items-center gap-2"},Ew={key:0,class:"text-sm shrink-0"},Fw={key:0,class:"ml-2 font-mono text-[10px] text-zinc-400"},Lw=ee({__name:"ContextMenu",props:{items:{},class:{}},emits:["select"],setup(e,{emit:t}){const n=e,r=t,o=P(!1),i=P({x:0,y:0}),l=P(null);function a(u){u.preventDefault(),u.stopPropagation();const b=200,m=n.items.length*36;let h=u.clientX,g=u.clientY;h+b>window.innerWidth&&(h=window.innerWidth-b-12),g+m>window.innerHeight&&(g=window.innerHeight-m-12),i.value={x:h,y:g},o.value=!0}function c(u){u.disabled||u.separator||(r("select",u),u.onClick&&u.onClick(),o.value=!1)}function d(){o.value=!1}function p(u){l.value&&!l.value.contains(u.target)&&d()}return Pe(()=>{window.addEventListener("click",p),window.addEventListener("scroll",d,!0)}),Ee(()=>{window.removeEventListener("click",p),window.removeEventListener("scroll",d,!0)}),(u,b)=>(f(),x("div",{onContextmenu:a,class:M(I(ne)("relative inline-block",n.class))},[Oe(u.$slots,"default",{},void 0,!0),(f(),me(oi,{to:"body"},[k(et,{name:"ctx-pop"},{default:U(()=>[o.value?(f(),x("div",{key:0,ref_key:"menuRef",ref:l,class:"popover-shadow fixed z-50 w-52 rounded-xl border border-zinc-200/90 bg-white/95 p-1.5 backdrop-blur-2xl dark:border-zinc-800/90 dark:bg-zinc-900/95 shadow-xl select-none",style:fe({left:`${i.value.x}px`,top:`${i.value.y}px`}),onClick:b[0]||(b[0]=yt(()=>{},["stop"]))},[(f(!0),x(se,null,he(n.items,m=>(f(),x("div",{key:m.id},[m.separator||m.type==="separator"?(f(),x("div",Pw)):(f(),x("button",{key:1,type:"button",disabled:m.disabled,onClick:h=>c(m),class:M(["flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs font-medium transition-colors cursor-pointer outline-none focus:outline-none ring-0",m.disabled&&"opacity-40 pointer-events-none cursor-not-allowed",m.danger||m.destructive?"text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/40":"text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"])},[s("div",Rw,[typeof m.icon=="string"?(f(),x("span",Ew,A(m.icon),1)):m.icon?(f(),me(Je(m.icon),{key:1,class:"h-3.5 w-3.5"})):N("",!0),s("span",null,A(m.label),1)]),m.shortcut?(f(),x("kbd",Fw,A(m.shortcut),1)):N("",!0)],10,Tw))]))),128))],4)):N("",!0)]),_:1})]))],34))}}),Dw=Fe(Lw,[["__scopeId","data-v-7c1ccc7c"]]),Vw={class:"flex items-start gap-3"},Ow={class:"flex flex-col"},Bw={class:"text-xs font-bold text-zinc-900 dark:text-white"},jw={key:0,class:"mt-0.5 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400"},Nw=["onClick"],Hw=ee({__name:"ToastNotification",props:{toasts:{},position:{default:"bottom-right"},class:{}},emits:["dismiss"],setup(e,{emit:t}){const n=e,r=t,o={success:Rs,error:Ts,warning:ui,info:a0},i={success:"text-emerald-500 bg-emerald-500/10 border-emerald-500/20",error:"text-rose-500 bg-rose-500/10 border-rose-500/20",warning:"text-amber-500 bg-amber-500/10 border-amber-500/20",info:"text-blue-500 bg-blue-500/10 border-blue-500/20"};return(l,a)=>(f(),x("div",{class:M(I(ne)("pointer-events-none fixed z-50 flex flex-col gap-2.5 p-4 sm:p-6 select-none max-w-sm w-full",n.position==="bottom-right"&&"bottom-0 right-0",n.position==="bottom-center"&&"bottom-0 left-1/2 -translate-x-1/2 items-center",n.position==="top-right"&&"top-0 right-0",n.position==="top-center"&&"top-0 left-1/2 -translate-x-1/2 items-center",n.class))},[k(hc,{name:"toast-slide",tag:"div",class:"w-full flex flex-col gap-2.5"},{default:U(()=>[(f(!0),x(se,null,he(n.toasts,c=>(f(),x("div",{key:c.id,class:"popover-shadow pointer-events-auto relative flex w-full items-start justify-between gap-3 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 p-4 backdrop-blur-2xl dark:border-zinc-800/90 dark:bg-zinc-900/95 shadow-xl transition-all"},[s("div",Vw,[s("div",{class:M(["flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border",i[c.type||"info"]])},[(f(),me(Je(o[c.type||"info"]),{class:"h-4 w-4"}))],2),s("div",Ow,[s("h5",Bw,A(c.title),1),c.description?(f(),x("p",jw,A(c.description),1)):N("",!0)])]),s("button",{type:"button",onClick:d=>r("dismiss",c.id),class:"shrink-0 rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"},[k(I(er),{class:"h-3.5 w-3.5"})],8,Nw)]))),128))]),_:1})],2))}}),Gw=Fe(Hw,[["__scopeId","data-v-b93907ae"]]),Uw=["disabled"],qw={class:"py-0.5"},Xw={key:0,class:"h-px my-1 bg-neutral-100 dark:bg-neutral-800/80"},Ww={key:0,class:"px-2.5 py-1 text-[10px] font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 uppercase"},Yw={key:0,class:"h-px my-1 bg-neutral-100 dark:bg-neutral-800/80"},Kw=["onClick","disabled"],Zw={class:"flex items-center gap-2 truncate"},Qw={key:0,class:"w-3.5 h-3.5 flex items-center justify-center text-emerald-500"},Jw={key:0,class:"w-3.5 h-3.5",viewBox:"0 0 20 20",fill:"currentColor"},ek={key:1,class:"w-3.5 h-3.5 flex items-center justify-center"},tk={key:0,class:"w-1.5 h-1.5 rounded-full bg-emerald-500"},nk={key:2,class:"text-sm shrink-0"},rk={class:"truncate"},ok={key:0,class:"text-[10px] text-neutral-400 dark:text-neutral-500 font-mono tracking-tight shrink-0 pl-2"},sk={key:0,class:"h-px my-1 bg-neutral-100 dark:bg-neutral-800/80"},ik=["onClick","disabled"],ak={class:"flex items-center gap-2 truncate"},lk={key:0,class:"text-sm shrink-0"},ck={class:"truncate"},dk={key:0,class:"text-[10px] text-neutral-400 dark:text-neutral-500 font-mono tracking-tight shrink-0 pl-2"},Wa=ee({__name:"DropdownMenu",props:{items:{default:()=>[{id:"account",label:"Account",items:[{id:"profile",label:"My Profile",icon:"👤",shortcut:"⌘P"},{id:"settings",label:"Preferences",icon:"⚙️",shortcut:"⌘,"},{id:"notifications",label:"Notifications",icon:"🔔",type:"checkbox",checked:!0}]},{id:"view",label:"View Mode",items:[{id:"view-grid",label:"Grid View",type:"radio",value:"grid",checked:!0},{id:"view-list",label:"List View",type:"radio",value:"list",checked:!1}]},{id:"danger",items:[{id:"logout",label:"Sign Out",icon:"🚪",shortcut:"⇧⌘Q",destructive:!0}]}]},align:{default:"left"},triggerText:{default:"Options"},width:{default:"w-56"},disabled:{type:Boolean,default:!1}},emits:["select","toggle"],setup(e,{emit:t}){const n=e,r=t,o=P(!1),i=P(null),l=P(-1),a=ie(()=>{const h=[];return n.items.forEach(g=>{if("items"in g&&Array.isArray(g.items))g.items.forEach(z=>{z.type!=="separator"&&z.type!=="label"&&!z.disabled&&h.push(z)});else{const z=g;z.type!=="separator"&&z.type!=="label"&&!z.disabled&&h.push(z)}}),h}),c=()=>{n.disabled||(o.value=!o.value,r("toggle",o.value),o.value&&(l.value=-1))},d=()=>{o.value&&(o.value=!1,r("toggle",!1),l.value=-1)},p=h=>{h.disabled||(h.type==="checkbox"?h.checked=!h.checked:h.type==="radio"&&n.items.forEach(g=>{"items"in g&&Array.isArray(g.items)&&g.items.some(z=>z.id===h.id)&&g.items.forEach(z=>{z.type==="radio"&&(z.checked=z.id===h.id)})}),r("select",h),h.type!=="checkbox"&&h.type!=="radio"&&d())},u=h=>{if(!o.value){(h.key==="Enter"||h.key===" "||h.key==="ArrowDown")&&(h.preventDefault(),c());return}if(h.key==="Escape")h.preventDefault(),d();else if(h.key==="ArrowDown")h.preventDefault(),l.value=(l.value+1)%a.value.length;else if(h.key==="ArrowUp")h.preventDefault(),l.value=(l.value-1+a.value.length)%a.value.length;else if(h.key==="Enter"&&l.value>=0){h.preventDefault();const g=a.value[l.value];g&&p(g)}},b=h=>{i.value&&!i.value.contains(h.target)&&d()};Pe(()=>{document.addEventListener("click",b)}),Ee(()=>{document.removeEventListener("click",b)});const m=ie(()=>n.align==="right"?"right-0 origin-top-right":n.align==="center"?"left-1/2 -translate-x-1/2 origin-top":"left-0 origin-top-left");return(h,g)=>(f(),x("div",{ref_key:"containerRef",ref:i,class:"relative inline-block text-left",onKeydown:u},[Oe(h.$slots,"trigger",{open:o.value,toggle:c},()=>[s("button",{type:"button",onClick:c,disabled:e.disabled,class:"inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg border border-neutral-200/80 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-200 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30"},[s("span",null,A(e.triggerText),1),(f(),x("svg",{class:M(["w-3.5 h-3.5 text-neutral-400 transition-transform duration-200",{"rotate-180":o.value}]),viewBox:"0 0 20 20",fill:"currentColor"},[...g[0]||(g[0]=[s("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"},null,-1)])],2))],8,Uw)]),k(et,{"enter-active-class":"transition duration-150 ease-out","enter-from-class":"transform opacity-0 scale-95 -translate-y-1","enter-to-class":"transform opacity-100 scale-100 translate-y-0","leave-active-class":"transition duration-100 ease-in","leave-from-class":"transform opacity-100 scale-100 translate-y-0","leave-to-class":"transform opacity-0 scale-95 -translate-y-1"},{default:U(()=>[o.value?(f(),x("div",{key:0,class:M(["absolute z-50 mt-1.5 p-1 rounded-xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/90 shadow-xl dark:shadow-neutral-950/60 focus:outline-none select-none",[m.value,e.width]]),style:{"box-shadow":"0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.05)"}},[s("div",qw,[(f(!0),x(se,null,he(e.items,(z,_)=>(f(),x(se,{key:_},[_>0?(f(),x("div",Xw)):N("",!0),"items"in z&&Array.isArray(z.items)?(f(),x(se,{key:1},[z.label?(f(),x("div",Ww,A(z.label),1)):N("",!0),(f(!0),x(se,null,he(z.items,y=>{var C;return f(),x(se,{key:y.id},[y.type==="separator"?(f(),x("div",Yw)):(f(),x("button",{key:1,type:"button",onClick:w=>p(y),disabled:y.disabled,class:M(["w-full flex items-center justify-between gap-2 px-2.5 py-1.5 text-xs rounded-lg transition-colors group text-left font-normal",[y.disabled?"opacity-40 cursor-not-allowed":"cursor-pointer",y.destructive?"text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40":"text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80",((C=a.value[l.value])==null?void 0:C.id)===y.id?"bg-neutral-100 dark:bg-neutral-800":""]])},[s("div",Zw,[y.type==="checkbox"?(f(),x("span",Qw,[y.checked?(f(),x("svg",Jw,[...g[1]||(g[1]=[s("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule":"evenodd"},null,-1)])])):N("",!0)])):y.type==="radio"?(f(),x("span",ek,[y.checked?(f(),x("span",tk)):N("",!0)])):N("",!0),y.icon?(f(),x("span",nk,A(y.icon),1)):N("",!0),s("span",rk,A(y.label),1)]),y.shortcut?(f(),x("span",ok,A(y.shortcut),1)):N("",!0)],10,Kw))],64)}),128))],64)):(f(),x(se,{key:2},[z.type==="separator"?(f(),x("div",sk)):(f(),x("button",{key:1,type:"button",onClick:y=>p(z),disabled:z.disabled,class:M(["w-full flex items-center justify-between gap-2 px-2.5 py-1.5 text-xs rounded-lg transition-colors group text-left",[z.disabled?"opacity-40 cursor-not-allowed":"cursor-pointer",z.destructive?"text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40":"text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80"]])},[s("div",ak,[z.icon?(f(),x("span",lk,A(z.icon),1)):N("",!0),s("span",ck,A(z.label),1)]),z.shortcut?(f(),x("span",dk,A(z.shortcut),1)):N("",!0)],10,ik))],64))],64))),128))])],2)):N("",!0)]),_:1})],544))}}),uk=ee({__name:"Globe3D",props:{size:{default:380},markers:{default:()=>[{lat:39.9042,lng:116.4074,label:"北京",color:"#10b981"},{lat:31.2304,lng:121.4737,label:"上海",color:"#3b82f6"},{lat:37.7749,lng:-122.4194,label:"旧金山",color:"#8b5cf6"},{lat:51.5074,lng:-.1278,label:"伦敦",color:"#f59e0b"},{lat:35.6762,lng:139.6503,label:"东京",color:"#ec4899"},{lat:1.3521,lng:103.8198,label:"新加坡",color:"#06b6d4"},{lat:-33.8688,lng:151.2093,label:"悉尼",color:"#f43f5e"}]},arcs:{default:()=>[{from:[39.9042,116.4074],to:[37.7749,-122.4194],color:"#3b82f6"},{from:[31.2304,121.4737],to:[51.5074,-.1278],color:"#10b981"},{from:[35.6762,139.6503],to:[1.3521,103.8198],color:"#ec4899"}]},speed:{default:.003},class:{}},setup(e){const t=e,n=P(null);let r=null,o=.25,i=0,l=0,a=t.speed,c=!1,d=0,p=0;const u=[];function b(){u.length=0;for(let C=-80;C<=80;C+=4.5){const w=C*Math.PI/180,T=Math.max(12,Math.floor(64*Math.cos(w)));for(let F=0;F<T;F++){const D=-180+360/T*F,R=Math.sin(C*12.9898+D*78.233)*43758.5453;R-Math.floor(R)>.42&&u.push([C,D])}}}function m(C,w,T){const F=C*Math.PI/180,D=(w+180)*Math.PI/180+i;let R=T*Math.cos(F)*Math.sin(D),L=-T*Math.sin(F),Z=T*Math.cos(F)*Math.cos(D);const le=Math.cos(o),q=Math.sin(o),be=L*le-Z*q,_e=L*q+Z*le;return{x:R,y:be,z:_e,visible:_e>-10}}function h(){const C=n.value;if(!C)return;const w=C.getContext("2d");if(!w)return;const T=window.devicePixelRatio||1,F=C.width/T,D=C.height/T,R=F/2,L=D/2,Z=F*.4;w.clearRect(0,0,F,D),c||(i+=a,o+=l,l*=.95,Math.abs(a)<Math.abs(t.speed)?a+=(t.speed-a)*.05:a*=.98),o=Math.max(-.6,Math.min(.6,o));const le=document.documentElement.classList.contains("dark"),q=w.createRadialGradient(R,L,Z*.85,R,L,Z*1.25);q.addColorStop(0,le?"rgba(59, 130, 246, 0.15)":"rgba(59, 130, 246, 0.1)"),q.addColorStop(.6,le?"rgba(16, 185, 129, 0.06)":"rgba(16, 185, 129, 0.04)"),q.addColorStop(1,"rgba(0, 0, 0, 0)"),w.fillStyle=q,w.beginPath(),w.arc(R,L,Z*1.25,0,Math.PI*2),w.fill();const be=w.createRadialGradient(R-Z*.3,L-Z*.3,Z*.1,R,L,Z);le?(be.addColorStop(0,"rgba(30, 41, 59, 0.85)"),be.addColorStop(.7,"rgba(15, 23, 42, 0.95)"),be.addColorStop(1,"rgba(2, 6, 23, 0.98)")):(be.addColorStop(0,"rgba(241, 245, 249, 0.9)"),be.addColorStop(.7,"rgba(226, 232, 240, 0.95)"),be.addColorStop(1,"rgba(203, 213, 225, 0.98)")),w.save(),w.beginPath(),w.arc(R,L,Z,0,Math.PI*2),w.fillStyle=be,w.fill(),w.strokeStyle=le?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.08)",w.lineWidth=1.5,w.stroke(),w.clip(),w.strokeStyle=le?"rgba(255, 255, 255, 0.06)":"rgba(0, 0, 0, 0.04)",w.lineWidth=1;for(let ze=-60;ze<=60;ze+=30){w.beginPath();let Q=!0;for(let te=-180;te<=180;te+=10){const W=m(ze,te,Z);if(W.visible){const we=R+W.x,J=L+W.y;Q?(w.moveTo(we,J),Q=!1):w.lineTo(we,J)}else Q=!0}w.stroke()}for(let ze=0;ze<u.length;ze++){const[Q,te]=u[ze],W=m(Q,te,Z);if(W.visible&&W.z>0){const we=R+W.x,J=L+W.y,Re=Math.max(.1,W.z/Z*.8);w.fillStyle=le?`rgba(148, 163, 184, ${Re*.85})`:`rgba(71, 85, 105, ${Re*.75})`,w.beginPath(),w.arc(we,J,1.2,0,Math.PI*2),w.fill()}}const _e=Date.now()*.001;t.arcs.forEach(ze=>{const Q=m(ze.from[0],ze.from[1],Z),te=m(ze.to[0],ze.to[1],Z);if(Q.visible||te.visible){const W=R+Q.x,we=L+Q.y,J=R+te.x,Re=L+te.y,Me=(W+J)/2,ot=(we+Re)/2,Ue=Math.hypot(J-W,Re-we),Te=ot-Ue*.35;w.beginPath(),w.moveTo(W,we),w.quadraticCurveTo(Me,Te,J,Re),w.strokeStyle=ze.color||"#3b82f6",w.globalAlpha=.35,w.lineWidth=1.2,w.stroke();const Ce=_e*.6%1,O=1-Ce,ce=O*O*W+2*O*Ce*Me+Ce*Ce*J,X=O*O*we+2*O*Ce*Te+Ce*Ce*Re;w.globalAlpha=1,w.fillStyle=ze.color||"#3b82f6",w.beginPath(),w.arc(ce,X,2.5,0,Math.PI*2),w.fill()}}),t.markers.forEach(ze=>{const Q=m(ze.lat,ze.lng,Z);if(Q.visible&&Q.z>5){const te=R+Q.x,W=L+Q.y,we=ze.color||"#10b981",J=_e*1.5%1;w.globalAlpha=(1-J)*.6,w.strokeStyle=we,w.lineWidth=1.5,w.beginPath(),w.arc(te,W,3+J*8,0,Math.PI*2),w.stroke(),w.globalAlpha=1,w.fillStyle=we,w.beginPath(),w.arc(te,W,3,0,Math.PI*2),w.fill(),ze.label&&Q.z>25&&(w.font='10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',w.fillStyle=le?"rgba(255, 255, 255, 0.85)":"rgba(15, 23, 42, 0.85)",w.fillText(ze.label,te+6,W+3))}}),w.restore(),w.globalAlpha=1,r=requestAnimationFrame(h)}function g(C){c=!0,d=C.clientX,p=C.clientY,l=0,a=0}function z(C){if(!c)return;const w=C.clientX-d,T=C.clientY-p;d=C.clientX,p=C.clientY,a=w*.005,l=-T*.005,i+=a,o+=l}function _(){c=!1}function y(){const C=n.value;if(!C)return;const w=window.devicePixelRatio||1;C.width=t.size*w,C.height=t.size*w;const T=C.getContext("2d");T&&T.scale(w,w)}return Pe(()=>{b(),y(),window.addEventListener("resize",y),window.addEventListener("mousemove",z),window.addEventListener("mouseup",_),r=requestAnimationFrame(h)}),Ee(()=>{r&&cancelAnimationFrame(r),window.removeEventListener("resize",y),window.removeEventListener("mousemove",z),window.removeEventListener("mouseup",_)}),Xe(()=>t.size,y),(C,w)=>(f(),x("div",{class:M(I(ne)("relative inline-flex items-center justify-center select-none cursor-grab active:cursor-grabbing",t.class)),style:fe({width:`${t.size}px`,height:`${t.size}px`}),onMousedown:g},[s("canvas",{ref_key:"canvasRef",ref:n,style:fe({width:`${t.size}px`,height:`${t.size}px`}),class:"block pointer-events-auto"},null,4)],38))}}),pk=ee({__name:"Vortex",props:{particleCount:{default:280},rangeY:{default:100},baseSpeed:{default:.15},baseRadius:{default:1},rangeRadius:{default:2},backgroundColor:{default:"transparent"},particleColors:{default:()=>["#38bdf8","#818cf8","#c084fc","#e879f9","#22d3ee"]},class:{},containerClass:{}},setup(e){const t=e,n=P(null),r=P(null);let o=null;const i=[];let l=0,a=0,c=0,d=0;function p(g,z){i.length=0;const _=Math.hypot(g/2,z/2)*1.1;for(let y=0;y<t.particleCount;y++){const C=Math.random()*Math.PI*2,w=Math.random()*_,T=(t.baseSpeed+Math.random()*.4)*(.8+80/(w+60)),F=t.particleColors[Math.floor(Math.random()*t.particleColors.length)];i.push({x:0,y:0,radius:t.baseRadius+Math.random()*t.rangeRadius,angle:C,distance:w,speed:T,color:F,opacity:.1+Math.random()*.8})}}function u(){const g=r.value;if(!g)return;const z=g.getContext("2d");if(!z)return;const _=window.devicePixelRatio||1,y=g.width/_,C=g.height/_;l+=(c-l)*.05,a+=(d-a)*.05;const w=y/2+(l-y/2)*.25,T=C/2+(a-C/2)*.25;z.fillStyle="rgba(0, 0, 0, 0.12)",z.fillRect(0,0,y,C);const F=Math.hypot(y/2,C/2)*1.1;for(let D=0;D<i.length;D++){const R=i[D];R.angle+=R.speed*.02,R.distance-=R.speed*.8,R.distance<=10&&(R.distance=F*(.8+Math.random()*.2),R.angle=Math.random()*Math.PI*2);const L=w+Math.cos(R.angle)*R.distance,Z=T+Math.sin(R.angle)*R.distance;z.save(),z.beginPath(),z.arc(L,Z,R.radius,0,Math.PI*2),z.fillStyle=R.color,z.globalAlpha=R.opacity*Math.min(1,R.distance/120),z.shadowBlur=R.radius*3,z.shadowColor=R.color,z.fill(),z.restore()}o=requestAnimationFrame(u)}function b(){const g=n.value,z=r.value;if(!g||!z)return;const _=window.devicePixelRatio||1,y=g.getBoundingClientRect(),C=y.width||600,w=y.height||400;z.width=C*_,z.height=w*_;const T=z.getContext("2d");T&&T.scale(_,_),c=C/2,d=w/2,l=c,a=d,p(C,w)}function m(g){const z=n.value;if(!z)return;const _=z.getBoundingClientRect();c=g.clientX-_.left,d=g.clientY-_.top}function h(){const g=n.value;if(!g)return;const z=g.getBoundingClientRect();c=z.width/2,d=z.height/2}return Pe(()=>{b(),window.addEventListener("resize",b),o=requestAnimationFrame(u)}),Ee(()=>{o&&cancelAnimationFrame(o),window.removeEventListener("resize",b)}),(g,z)=>(f(),x("div",{ref_key:"containerRef",ref:n,class:M(I(ne)("relative h-full w-full overflow-hidden bg-black",t.containerClass)),onMousemove:m,onMouseleave:h},[s("canvas",{ref_key:"canvasRef",ref:r,class:"absolute inset-0 h-full w-full pointer-events-none"},null,512),s("div",{class:M(I(ne)("relative z-10",t.class))},[Oe(g.$slots,"default")],2)],34))}}),md=ee({__name:"SparklesCore",props:{id:{default:"tsparticles"},background:{default:"transparent"},minSize:{default:.6},maxSize:{default:1.8},particleDensity:{default:120},particleColor:{default:"#FFFFFF"},speed:{default:.8},class:{}},setup(e){const t=e,n=P(null);let r=null;const o=[];function i(c,d){o.length=0;const p=Math.floor(c*d/(1e4/t.particleDensity));for(let u=0;u<p;u++)o.push({x:Math.random()*c,y:Math.random()*d,size:t.minSize+Math.random()*(t.maxSize-t.minSize),opacity:Math.random(),targetOpacity:Math.random(),speedX:(Math.random()-.5)*.3*t.speed,speedY:-(.2+Math.random()*.5)*t.speed,color:t.particleColor})}function l(){const c=n.value;if(!c)return;const d=c.getContext("2d");if(!d)return;const p=window.devicePixelRatio||1,u=c.width/p,b=c.height/p;d.clearRect(0,0,u,b);for(let m=0;m<o.length;m++){const h=o[m];h.opacity+=(h.targetOpacity-h.opacity)*.03,Math.abs(h.targetOpacity-h.opacity)<.05&&(h.targetOpacity=Math.random()),h.x+=h.speedX,h.y+=h.speedY,h.y<0&&(h.y=b,h.x=Math.random()*u),h.x<0&&(h.x=u),h.x>u&&(h.x=0),d.save(),d.globalAlpha=h.opacity,d.fillStyle=h.color,d.shadowBlur=h.size*2,d.shadowColor=h.color,d.beginPath(),d.arc(h.x,h.y,h.size,0,Math.PI*2),d.fill(),d.restore()}r=requestAnimationFrame(l)}function a(){const c=n.value;if(!c)return;const d=c.parentElement;if(!d)return;const p=window.devicePixelRatio||1,u=d.clientWidth||300,b=d.clientHeight||200;c.width=u*p,c.height=b*p;const m=c.getContext("2d");m&&m.scale(p,p),i(u,b)}return Pe(()=>{a(),window.addEventListener("resize",a),r=requestAnimationFrame(l)}),Ee(()=>{r&&cancelAnimationFrame(r),window.removeEventListener("resize",a)}),Xe(()=>[t.particleDensity,t.particleColor,t.speed],()=>{a()}),(c,d)=>(f(),x("div",{class:M(I(ne)("relative h-full w-full overflow-hidden",t.class)),style:fe({background:t.background})},[s("canvas",{ref_key:"canvasRef",ref:n,class:"pointer-events-none absolute inset-0 h-full w-full"},null,512),Oe(c.$slots,"default")],6))}}),fk=["onMousedown"],mk={key:0,class:"text-base shrink-0"},bk={class:"truncate text-xs font-semibold text-zinc-800 dark:text-zinc-200"},xk=ee({__name:"GravityCards",props:{items:{default:()=>[{id:"1",label:"Vue 3.5+",icon:"⚡",color:"#10b981"},{id:"2",label:"Tailwind CSS",icon:"🎨",color:"#06b6d4"},{id:"3",label:"TypeScript",icon:"🔷",color:"#3b82f6"},{id:"4",label:"Vite 6",icon:"🚀",color:"#8b5cf6"},{id:"5",label:"Web Audio API",icon:"🔊",color:"#f59e0b"},{id:"6",label:"Canvas 2D / 3D",icon:"🌌",color:"#ec4899"},{id:"7",label:"Zero-Config SFC",icon:"📦",color:"#14b8a6"},{id:"8",label:"60fps 硬件加速",icon:"🏎️",color:"#f43f5e"}]},gravity:{default:.45},restitution:{default:.55},class:{}},setup(e){const t=e,n=P(null);let r=null;const o=P([]);let i=null,l=0,a=0,c=0,d=0;function p(){const z=n.value;if(!z)return;const _=z.clientWidth||600;o.value=t.items.map((y,C)=>{const F=30+C*110%(_-140-40),D=-40-C*55;return{id:y.id,label:y.label,icon:y.icon,color:y.color,x:F,y:D,vx:(Math.random()-.5)*4,vy:Math.random()*2,width:140,height:44,angle:(Math.random()-.5)*20,vAngle:(Math.random()-.5)*1.5}})}function u(){const z=n.value;if(!z)return;const _=z.clientWidth,y=z.clientHeight;for(let C=0;C<o.value.length;C++){const w=o.value[C];if(!(i&&i.id===w.id)){w.vy+=t.gravity,w.x+=w.vx,w.y+=w.vy,w.angle+=w.vAngle,w.vAngle*=.96,w.y+w.height>=y&&(w.y=y-w.height,w.vy=-w.vy*t.restitution,w.vx*=.94,w.vAngle=w.vx*.4,Math.abs(w.vy)<.6&&(w.vy=0)),w.x<=0?(w.x=0,w.vx=-w.vx*t.restitution):w.x+w.width>=_&&(w.x=_-w.width,w.vx=-w.vx*t.restitution);for(let T=C+1;T<o.value.length;T++){const F=o.value[T],D=w.x+w.width/2-(F.x+F.width/2),R=w.y+w.height/2-(F.y+F.height/2),L=(w.width+F.width)/2,Z=(w.height+F.height)/2;if(Math.abs(D)<L&&Math.abs(R)<Z){const le=L-Math.abs(D),q=Z-Math.abs(R);if(le<q){const be=D>0?1:-1;w.x+=le/2*be,F.x-=le/2*be;const _e=w.vx;w.vx=F.vx*t.restitution,F.vx=_e*t.restitution}else{const be=R>0?1:-1;w.y+=q/2*be,F.y-=q/2*be;const _e=w.vy;w.vy=F.vy*t.restitution,F.vy=_e*t.restitution}}}}}r=requestAnimationFrame(u)}function b(z,_){i=_;const y=n.value;if(!y)return;const C=y.getBoundingClientRect(),w=z.clientX-C.left,T=z.clientY-C.top;l=w-_.x,a=T-_.y,c=w,d=T}function m(z){if(!i||!n.value)return;const _=n.value.getBoundingClientRect(),y=z.clientX-_.left,C=z.clientY-_.top;i.vx=(y-c)*.8,i.vy=(C-d)*.8,i.x=y-l,i.y=C-a,c=y,d=C}function h(){i=null}function g(){p()}return Pe(()=>{p(),r=requestAnimationFrame(u),window.addEventListener("mousemove",m),window.addEventListener("mouseup",h)}),Ee(()=>{r&&cancelAnimationFrame(r),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",h)}),(z,_)=>(f(),x("div",{ref_key:"containerRef",ref:n,class:M(I(ne)("relative h-80 w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 backdrop-blur-sm select-none dark:border-zinc-800/80 dark:bg-zinc-950/70",t.class))},[s("button",{type:"button",onClick:g,class:"absolute top-3 right-3 z-30 inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-zinc-600 shadow-xs backdrop-blur-md hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-all cursor-pointer active:scale-95"},[..._[0]||(_[0]=[s("span",null,"↻",-1),s("span",null,"重新倾倒",-1)])]),_[1]||(_[1]=s("div",{class:"pointer-events-none absolute inset-0 flex items-center justify-center"},[s("span",{class:"text-xs font-mono text-zinc-400/60 dark:text-zinc-600/60"}," 抓起卡片扔出 · 体验刚体碰撞与重力弹跳 ")],-1)),(f(!0),x(se,null,he(o.value,y=>(f(),x("div",{key:y.id,style:fe({transform:`translate3d(${y.x}px, ${y.y}px, 0) rotate(${y.angle}deg)`,width:`${y.width}px`,height:`${y.height}px`}),onMousedown:yt(C=>b(C,y),["stop"]),class:"absolute top-0 left-0 z-20 flex items-center gap-2 rounded-xl border border-zinc-200/90 bg-white/95 px-3 py-2 shadow-md backdrop-blur-xl transition-shadow cursor-grab active:cursor-grabbing active:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/95"},[y.icon?(f(),x("span",mk,A(y.icon),1)):N("",!0),s("span",bk,A(y.label),1),y.color?(f(),x("div",{key:1,class:"ml-auto h-2 w-2 rounded-full shrink-0",style:fe({backgroundColor:y.color})},null,4)):N("",!0)],44,fk))),128))],2))}}),gk={class:"perspective-stage absolute inset-0 overflow-hidden pointer-events-none"},hk={class:"relative z-20 text-center px-4"},vk=ee({__name:"PerspectiveGrid",props:{gridColor:{},horizonColor:{},speed:{default:16},class:{}},setup(e){const t=e;return(n,r)=>(f(),x("div",{class:M(I(ne)("relative h-96 w-full overflow-hidden bg-zinc-950 flex flex-col items-center justify-center",t.class))},[r[0]||(r[0]=s("div",{class:"absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-full max-w-4xl rounded-full bg-gradient-to-r from-blue-600/20 via-purple-500/30 to-emerald-500/20 blur-3xl pointer-events-none"},null,-1)),r[1]||(r[1]=s("div",{class:"absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10"},null,-1)),s("div",gk,[s("div",{class:"grid-plane absolute inset-0",style:fe({animationDuration:`${t.speed}s`})},null,4)]),r[2]||(r[2]=s("div",{class:"absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950 pointer-events-none z-10"},null,-1)),s("div",hk,[Oe(n.$slots,"default",{},void 0,!0)])],2))}}),yk=Fe(vk,[["__scopeId","data-v-0938aa63"]]),wk=ee({__name:"FluidCursor",props:{colors:{default:()=>["#3b82f6","#60a5fa","#93c5fd","#38bdf8","#818cf8"]},particleCount:{default:2},trailLength:{default:20},class:{}},setup(e){const t=e,n=P(null),r=P(null);let o=null;const i=[];let l=0,a=0;function c(u){const b=n.value;if(!b)return;const m=b.getBoundingClientRect(),h=u.clientX-m.left,g=u.clientY-m.top,z=h-l,_=g-a,y=Math.hypot(z,_);for(let C=0;C<t.particleCount;C++){const w=Math.random()*Math.PI*2,T=Math.random()*(y*.2+2),F=t.colors[Math.floor(Math.random()*t.colors.length)];i.push({x:h+Math.cos(w)*T,y:g+Math.sin(w)*T,vx:(Math.random()-.5)*1.5-z*.05,vy:(Math.random()-.5)*1.5-_*.05,size:4+Math.random()*8+Math.min(y*.25,12),color:F,alpha:.65,maxLife:35+Math.random()*20,life:0})}l=h,a=g}function d(){const u=r.value;if(!u)return;const b=u.getContext("2d");if(!b)return;const m=window.devicePixelRatio||1,h=u.width/m,g=u.height/m;b.clearRect(0,0,h,g);for(let z=i.length-1;z>=0;z--){const _=i[z];_.life++,_.x+=_.vx,_.y+=_.vy,_.vx*=.96,_.vy*=.96;const y=_.life/_.maxLife,C=_.alpha*(1-y),w=_.size*(1+y*.6);if(y>=1){i.splice(z,1);continue}b.save(),b.globalAlpha=C,b.fillStyle=_.color,b.shadowBlur=w*2,b.shadowColor=_.color,b.beginPath(),b.arc(_.x,_.y,Math.max(.5,w),0,Math.PI*2),b.fill(),b.restore()}o=requestAnimationFrame(d)}function p(){const u=n.value,b=r.value;if(!u||!b)return;const m=window.devicePixelRatio||1,h=u.getBoundingClientRect(),g=h.width||400,z=h.height||300;b.width=g*m,b.height=z*m;const _=b.getContext("2d");_&&_.scale(m,m)}return Pe(()=>{p(),window.addEventListener("resize",p),o=requestAnimationFrame(d)}),Ee(()=>{o&&cancelAnimationFrame(o),window.removeEventListener("resize",p)}),(u,b)=>(f(),x("div",{ref_key:"containerRef",ref:n,class:M(I(ne)("relative h-full w-full overflow-hidden select-none",t.class)),onMousemove:c},[s("canvas",{ref_key:"canvasRef",ref:r,class:"pointer-events-none absolute inset-0 z-20 h-full w-full"},null,512),Oe(u.$slots,"default")],34))}}),kk=ee({__name:"TextGenerateEffect",props:{words:{default:"Vue 3 高阶动效原子代码库，无需复杂配置，单文件直接粘贴即用。"},duration:{default:.5},delay:{default:.06},class:{}},setup(e,{expose:t}){const n=e,r=P([]);function o(){const i=n.words,l=[];let a="";for(let c=0;c<i.length;c++){const d=i[c];/[a-zA-Z0-9_\-+]/.test(d)?a+=d:(a&&(l.push(a),a=""),l.push(d))}a&&l.push(a),r.value=l.map(c=>({text:c,visible:!1})),l.forEach((c,d)=>{setTimeout(()=>{r.value[d]&&(r.value[d].visible=!0)},d*(n.delay*1e3))})}return Pe(()=>{o()}),Xe(()=>n.words,()=>{o()}),t({replay:o}),(i,l)=>(f(),x("div",{class:M(I(ne)("font-sans font-bold leading-relaxed tracking-wide select-none",n.class))},[(f(!0),x(se,null,he(r.value,(a,c)=>(f(),x("span",{key:c,class:M(["inline-block transition-all ease-out",[a.text===" "?"w-1.5":"","text-zinc-900 dark:text-white"]]),style:fe({transitionDuration:`${n.duration}s`,opacity:a.visible?1:0,filter:a.visible?"blur(0px)":"blur(8px)",transform:a.visible?"translateY(0)":"translateY(6px)"})},A(a.text),7))),128))],2))}}),zk={class:"inline-block overflow-hidden py-1 align-baseline"},_k=ee({__name:"WordRotate",props:{words:{default:()=>["极速流畅","原生优雅","工业质感","开箱即用","零黑盒依赖"]},duration:{default:2500},class:{}},setup(e){const t=e,n=P(0);let r=null;function o(){n.value=(n.value+1)%t.words.length}return Pe(()=>{r=setInterval(o,t.duration)}),Ee(()=>{r&&clearInterval(r)}),(i,l)=>(f(),x("div",zk,[k(et,{name:"word-flip",mode:"out-in"},{default:U(()=>[(f(),x("span",{key:n.value,class:M(I(ne)("inline-block font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400",t.class))},A(t.words[n.value]),3))]),_:1})]))}}),bd=Fe(_k,[["__scopeId","data-v-a96f9012"]]),Ck={class:"inline-block relative overflow-hidden py-1"},Sk=ee({__name:"FlipWords",props:{words:{default:()=>["高性能","更美观","更直觉","零配置"]},duration:{default:3e3},class:{}},setup(e){const t=e,n=P(0),r=P(!0);let o=null;function i(){r.value=!1,setTimeout(()=>{n.value=(n.value+1)%t.words.length,r.value=!0},450)}return Pe(()=>{o=setInterval(i,t.duration)}),Ee(()=>{o&&clearInterval(o)}),(l,a)=>(f(),x("span",Ck,[(f(!0),x(se,null,he(t.words[n.value].split(""),(c,d)=>(f(),x("span",{key:`${n.value}-${d}`,class:M(["inline-block transition-all",I(ne)("font-extrabold text-neutral-900 dark:text-neutral-100",t.class)]),style:fe({transitionDuration:"0.4s",transitionDelay:`${d*.04}s`,transitionTimingFunction:"cubic-bezier(0.16, 1, 0.3, 1)",opacity:r.value?1:0,transform:r.value?"translateY(0) scale(1)":"translateY(12px) scale(0.9)",filter:r.value?"blur(0px)":"blur(4px)"})},A(c),7))),128))]))}}),Ya="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+",Mk=ee({__name:"HyperText",props:{text:{default:"AURA_DECRYPT_V1"},duration:{default:800},class:{},triggerOnHover:{type:Boolean,default:!0}},setup(e,{expose:t}){const n=e,r=P(n.text);let o=null;function i(){o&&clearInterval(o);const a=n.text;let c=0;const d=a.length,p=Math.max(25,n.duration/(d*2));o=setInterval(()=>{r.value=a.split("").map((u,b)=>u===" "?" ":b<c?a[b]:Ya[Math.floor(Math.random()*Ya.length)]).join(""),c>=d&&(o&&clearInterval(o),r.value=a),c+=1/2},p)}function l(){n.triggerOnHover&&i()}return Pe(()=>{i()}),Xe(()=>n.text,()=>{i()}),t({trigger:i}),(a,c)=>(f(),x("span",{class:M(I(ne)("inline-block font-mono font-bold tracking-wider select-none cursor-pointer transition-colors","text-zinc-900 dark:text-zinc-100 hover:text-emerald-500 dark:hover:text-emerald-400",n.class)),onMouseenter:l},A(r.value),35))}}),Ik={class:"flex justify-center space-x-1 select-none"},Ak=ee({__name:"GradualSpacing",props:{text:{default:"AURA MOTION SYSTEM"},duration:{default:.5},delayMultiple:{default:.04},class:{}},setup(e,{expose:t}){const n=e,r=P(!1);function o(){r.value=!1,setTimeout(()=>{r.value=!0},50)}return Pe(()=>{o()}),Xe(()=>n.text,o),t({replay:o}),(i,l)=>(f(),x("div",Ik,[(f(!0),x(se,null,he(n.text.split(""),(a,c)=>(f(),x("span",{key:c,class:M(["inline-block transition-all",I(ne)("font-extrabold tracking-tight text-zinc-900 dark:text-white",n.class)]),style:fe({transitionDuration:`${n.duration}s`,transitionDelay:`${c*n.delayMultiple}s`,transitionTimingFunction:"cubic-bezier(0.16, 1, 0.3, 1)",opacity:r.value?1:0,filter:r.value?"blur(0px)":"blur(10px)",transform:r.value?"translate3d(0, 0, 0)":"translate3d(-20px, 0, 0)",letterSpacing:r.value?"normal":"-0.5em"})},A(a===" "?" ":a),7))),128))]))}}),$k={class:"space-y-4"},Pk={class:"relative py-4 min-h-[72px] flex items-center"},Tk=ee({__name:"TextRevealCard",props:{text:{default:"你在寻找终极动效原子方案？"},revealText:{default:"Aura UI: 原生 Vue 3 的极致美学。"},class:{}},setup(e){const t=e,n=P(null),r=P({x:0,y:0}),o=P(!1);function i(c){const d=n.value;if(!d)return;const p=d.getBoundingClientRect();r.value={x:c.clientX-p.left,y:c.clientY-p.top}}function l(){o.value=!0}function a(){o.value=!1}return(c,d)=>(f(),x("div",{ref_key:"cardRef",ref:n,class:M(I(ne)("relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 p-8 shadow-lg backdrop-blur-xl select-none dark:border-zinc-800/90 dark:bg-zinc-950/95 cursor-crosshair transition-colors",t.class)),onMousemove:i,onMouseenter:l,onMouseleave:a},[s("div",$k,[d[0]||(d[0]=s("div",{class:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"},[s("span",null,"✦"),s("span",null,"光标划过刮开显影")],-1)),s("div",Pk,[s("p",{class:"text-xl sm:text-2xl font-bold text-zinc-400 dark:text-zinc-600 transition-opacity",style:fe(o.value?{maskImage:`radial-gradient(circle 90px at ${r.value.x}px ${r.value.y}px, transparent 100%, black 100%)`,WebkitMaskImage:`radial-gradient(circle 90px at ${r.value.x}px ${r.value.y}px, transparent 100%, black 100%)`}:void 0)},A(t.text),5),s("p",{class:"absolute inset-0 flex items-center text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 transition-opacity duration-150 pointer-events-none",style:fe({opacity:o.value?1:0,clipPath:`circle(90px at ${r.value.x}px ${r.value.y}px)`,WebkitClipPath:`circle(90px at ${r.value.x}px ${r.value.y}px)`})},A(t.revealText),5)]),d[1]||(d[1]=s("p",{class:"text-[11px] font-mono text-zinc-400"}," 移动光标体验类似探照灯透光与刮刮卡物理揭示质感 ",-1))])],34))}}),Rk=ee({__name:"MagneticButton",props:{strength:{default:.38},distance:{default:90},class:{}},setup(e){const t=e,n=P(null),r=P({x:0,y:0}),o=P({x:0,y:0}),i=P(!1);function l(c){const d=n.value;if(!d)return;const p=d.getBoundingClientRect(),u=p.left+p.width/2,b=p.top+p.height/2;if(Math.hypot(c.clientX-u,c.clientY-b)<t.distance){i.value=!0;const h=(c.clientX-u)*t.strength,g=(c.clientY-b)*t.strength;r.value={x:h,y:g},o.value={x:h*.45,y:g*.45}}else a()}function a(){i.value=!1,r.value={x:0,y:0},o.value={x:0,y:0}}return Pe(()=>{window.addEventListener("mousemove",l)}),Ee(()=>{window.removeEventListener("mousemove",l)}),(c,d)=>(f(),x("button",{ref_key:"buttonRef",ref:n,type:"button",class:M(I(ne)("relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-transform select-none cursor-pointer","bg-zinc-900 text-white shadow-md hover:shadow-xl dark:bg-white dark:text-zinc-900","border border-zinc-700/50 dark:border-zinc-300/50",t.class)),style:fe({transform:`translate3d(${r.value.x}px, ${r.value.y}px, 0)`,transitionDuration:i.value?"0.12s":"0.45s",transitionTimingFunction:i.value?"linear":"cubic-bezier(0.16, 1, 0.3, 1)"})},[s("span",{class:"inline-flex items-center gap-2 transition-transform",style:fe({transform:`translate3d(${o.value.x}px, ${o.value.y}px, 0)`,transitionDuration:i.value?"0.12s":"0.45s",transitionTimingFunction:i.value?"linear":"cubic-bezier(0.16, 1, 0.3, 1)"})},[Oe(c.$slots,"default",{},()=>[d[0]||(d[0]=s("span",null,"探索更多动效",-1)),d[1]||(d[1]=s("span",{class:"text-xs"},"↗",-1))])],4)],6))}}),Ek=ee({__name:"ElasticSlider",props:{modelValue:{default:50},min:{default:0},max:{default:100},step:{default:1},class:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,o=P(null),i=P(n.modelValue),l=P(!1),a=P(1),c=ie(()=>{const m=n.max-n.min;return Math.max(0,Math.min(100,(i.value-n.min)/m*100))});function d(m){const h=o.value;if(!h)return;const g=h.getBoundingClientRect(),_=(m.clientX-g.left)/g.width;_<0?a.value=1+Math.min(.25,Math.abs(_)*.4):_>1?a.value=1+Math.min(.25,(_-1)*.4):a.value=1;const y=Math.max(0,Math.min(1,_)),C=n.max-n.min;let w=n.min+y*C;w=Math.round(w/n.step)*n.step,i.value=w,r("update:modelValue",w)}function p(m){l.value=!0,d(m)}function u(m){l.value&&d(m)}function b(){l.value&&(l.value=!1,a.value=1)}return Pe(()=>{window.addEventListener("mousemove",u),window.addEventListener("mouseup",b)}),Ee(()=>{window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",b)}),(m,h)=>(f(),x("div",{class:M(I(ne)("relative w-full max-w-sm select-none py-4",n.class))},[s("div",{ref_key:"trackRef",ref:o,class:"relative h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 cursor-pointer transition-transform",style:fe({transform:`scaleX(${a.value})`,transitionTimingFunction:"cubic-bezier(0.16, 1, 0.3, 1)"}),onMousedown:p},[s("div",{class:"absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500",style:fe({width:`${c.value}%`})},null,4),s("div",{class:"absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none",style:fe({left:`${c.value}%`})},[s("div",{class:M(["h-5 w-5 rounded-full border-2 border-white bg-blue-600 shadow-md transition-transform dark:border-zinc-900",l.value?"scale-125":"hover:scale-110"])},null,2),s("div",{class:M(["absolute -top-8 px-2 py-0.5 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-[10px] font-mono font-bold shadow-md transition-all pointer-events-none",l.value?"opacity-100 -translate-y-1 scale-100":"opacity-0 scale-90"])},A(i.value),3)],4)],36)],2))}}),Fk={class:"flex items-center gap-2 overflow-hidden"},Lk={key:0,class:"text-zinc-400 select-none"},Dk={class:"truncate font-semibold text-zinc-800 dark:text-zinc-200"},Vk=["title"],Ok=ee({__name:"CopySnippet",props:{code:{default:"pnpm add aura-ui @vueuse/core"},prefix:{default:"$"},class:{}},setup(e){const t=e,n=P(!1);async function r(){try{await navigator.clipboard.writeText(t.code),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(o){console.error("Failed to copy",o)}}return(o,i)=>(f(),x("div",{class:M(I(ne)("group relative inline-flex items-center gap-3 rounded-xl border border-zinc-200/90 bg-white/90 px-4 py-2.5 font-mono text-xs shadow-xs backdrop-blur-xl transition-all hover:border-zinc-300 dark:border-zinc-800/90 dark:bg-zinc-950/90 dark:hover:border-zinc-700",t.class))},[s("div",Fk,[t.prefix?(f(),x("span",Lk,A(t.prefix),1)):N("",!0),s("span",Dk,A(t.code),1)]),s("button",{type:"button",onClick:r,class:"ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-zinc-50 text-zinc-500 shadow-xs transition-all hover:bg-zinc-100 hover:text-zinc-900 active:scale-90 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer",title:n.value?"已复制":"复制代码"},[k(et,{mode:"out-in",name:"copy-scale"},{default:U(()=>[n.value?(f(),me(I(wt),{key:0,class:"h-3.5 w-3.5 text-emerald-500"})):(f(),me(I(Rn),{key:1,class:"h-3.5 w-3.5"}))]),_:1})],8,Vk)],2))}}),Gs=Fe(Ok,[["__scopeId","data-v-f4f09427"]]),Ln=ee({__name:"KeyboardBadge",props:{keyName:{default:"⌘K"},shortcutKey:{},size:{default:"md"},class:{}},setup(e){const t=e,n=P(!1);function r(i){t.shortcutKey&&i.key.toLowerCase()===t.shortcutKey.toLowerCase()&&(n.value=!0)}function o(i){t.shortcutKey&&i.key.toLowerCase()===t.shortcutKey.toLowerCase()&&(n.value=!1)}return Pe(()=>{t.shortcutKey&&(window.addEventListener("keydown",r),window.addEventListener("keyup",o))}),Ee(()=>{t.shortcutKey&&(window.removeEventListener("keydown",r),window.removeEventListener("keyup",o))}),(i,l)=>(f(),x("kbd",{onMousedown:l[0]||(l[0]=a=>n.value=!0),onMouseup:l[1]||(l[1]=a=>n.value=!1),onMouseleave:l[2]||(l[2]=a=>n.value=!1),class:M(I(ne)("inline-flex items-center justify-center font-mono font-bold select-none cursor-pointer rounded-lg border transition-all duration-75","border-zinc-300 bg-linear-to-b from-white to-zinc-100 text-zinc-700 shadow-[0_3px_0_0_#d4d4d8,0_4px_6px_-1px_rgba(0,0,0,0.1)]","dark:border-zinc-700 dark:bg-linear-to-b dark:from-zinc-800 dark:to-zinc-900 dark:text-zinc-200 dark:shadow-[0_3px_0_0_#27272a,0_4px_6px_-1px_rgba(0,0,0,0.4)]",n.value&&"translate-y-[2px] shadow-[0_1px_0_0_#d4d4d8] dark:shadow-[0_1px_0_0_#27272a]",t.size==="sm"&&"h-6 min-w-[24px] px-1.5 text-[10px]",t.size==="md"&&"h-8 min-w-[32px] px-2.5 text-xs",t.size==="lg"&&"h-10 min-w-[40px] px-3.5 text-sm",t.class))},[Oe(i.$slots,"default",{},()=>[$e(A(t.keyName),1)])],34))}}),Bk={class:"flex items-center gap-2.5"},jk=["onClick","title"],Nk={class:"flex items-center justify-between border-t border-zinc-100 pt-2.5 dark:border-zinc-800/80"},Hk={class:"flex items-center gap-2"},Gk={class:"font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300"},Uk=ee({__name:"ColorPickerMorph",props:{modelValue:{default:"#3b82f6"},colors:{default:()=>["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ec4899","#06b6d4","#f43f5e","#18181b"]},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=P(n.modelValue),i=P(!1);function l(c){o.value=c,r("update:modelValue",c),r("change",c)}async function a(){try{await navigator.clipboard.writeText(o.value),i.value=!0,setTimeout(()=>{i.value=!1},1500)}catch(c){console.error("Failed to copy",c)}}return Xe(()=>n.modelValue,c=>{c&&(o.value=c)}),(c,d)=>(f(),x("div",{class:M(I(ne)("inline-flex flex-col gap-3 rounded-2xl border border-zinc-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-950/90 select-none",n.class))},[s("div",Bk,[(f(!0),x(se,null,he(n.colors,p=>(f(),x("button",{key:p,type:"button",onClick:u=>l(p),class:"group relative flex h-7 w-7 items-center justify-center rounded-full transition-transform active:scale-90 cursor-pointer",title:p},[s("span",{class:"absolute inset-0 rounded-full border-2 transition-all duration-300",style:fe({borderColor:o.value===p?p:"transparent",transform:o.value===p?"scale(1.22)":"scale(1)",opacity:o.value===p?1:0})},null,4),s("span",{class:"h-6 w-6 rounded-full shadow-inner transition-transform group-hover:scale-105",style:fe({backgroundColor:p})},null,4),o.value===p?(f(),me(I(wt),{key:0,class:"relative z-10 h-3.5 w-3.5 text-white drop-shadow-md"})):N("",!0)],8,jk))),128))]),s("div",Nk,[s("div",Hk,[s("span",{class:"h-3 w-3 rounded-full",style:fe({backgroundColor:o.value})},null,4),s("span",Gk,A(o.value.toUpperCase()),1)]),s("button",{type:"button",onClick:a,class:"inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-mono text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"},[i.value?(f(),me(I(wt),{key:0,class:"h-3 w-3 text-emerald-500"})):(f(),me(I(Rn),{key:1,class:"h-3 w-3"})),s("span",null,A(i.value?"已复制":"复制 HEX"),1)])])],2))}}),qk=["disabled","onClick","onMouseenter"],Xk={key:0,class:"absolute inset-0 rounded-full bg-amber-400/30 blur-sm pointer-events-none animate-ping"},Wk={class:"ml-2 font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400"},Yk=ee({__name:"StarRating",props:{modelValue:{default:4},maxStars:{default:5},readonly:{type:Boolean,default:!1},color:{default:"#f59e0b"},class:{}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,r=t,o=P(n.modelValue),i=P(null),l=P(null);function a(p){n.readonly||(o.value=p,l.value=p,r("update:modelValue",p),r("change",p),setTimeout(()=>{l.value=null},400))}function c(p){n.readonly||(i.value=p)}function d(){n.readonly||(i.value=null)}return Xe(()=>n.modelValue,p=>{p!==void 0&&(o.value=p)}),(p,u)=>(f(),x("div",{class:M(I(ne)("inline-flex items-center gap-1 select-none",n.class)),onMouseleave:d},[(f(!0),x(se,null,he(n.maxStars,b=>(f(),x("button",{key:b,type:"button",disabled:n.readonly,onClick:m=>a(b),onMouseenter:m=>c(b),class:M(["group relative flex items-center justify-center p-1 transition-transform",n.readonly?"cursor-default":"cursor-pointer active:scale-90",i.value!==null&&i.value>=b&&!n.readonly&&"scale-115",l.value===b&&"animate-star-burst"])},[l.value===b?(f(),x("span",Xk)):N("",!0),k(I(h0),{class:M(["h-5 w-5 transition-colors duration-150",[(i.value!==null?i.value>=b:o.value>=b)?"fill-amber-400 text-amber-400 drop-shadow-xs":"fill-transparent text-zinc-300 dark:text-zinc-700"]])},null,8,["class"])],42,qk))),128)),s("span",Wk,A((i.value!==null?i.value:o.value).toFixed(1)),1)],34))}}),Us=Fe(Yk,[["__scopeId","data-v-9b12b64b"]]),Kk={class:"relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center flex flex-col items-center"},Zk={class:"inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 backdrop-blur-md mb-6 hover:border-blue-500/40 transition-colors cursor-pointer"},Qk={class:"text-4xl sm:text-6xl font-black tracking-tight text-zinc-900 dark:text-white max-w-3xl leading-[1.15]"},Jk={class:"mt-6 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal"},e2={class:"mt-8 flex flex-wrap items-center justify-center gap-4"},t2={type:"button",class:"inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-all cursor-pointer"},n2={class:"mt-16 w-full max-w-4xl border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80"},r2=ee({__name:"HeroModern",props:{badgeText:{default:"Aura UI 2.0 现已全量重构上线"},titlePrefix:{default:"面向 AI 时代的"},rotateWords:{default:()=>["极致流畅","原生优雅","工业美学","零黑盒依赖"]},titleSuffix:{default:"动效代码库"},description:{default:"不妥协的 60fps 满帧性能，专为 AI 官网、SaaS 营销页打造。Zero-Config 单文件即拷即用。"},copyCommand:{default:"pnpm add aura-ui @vueuse/core"},class:{}},setup(e){const t=e,n=["OpenAI","Anthropic","Google Cloud","NVIDIA","DeepSeek","Vercel","Supabase","Stripe"];return(r,o)=>(f(),x("div",{class:M(I(ne)("relative w-full overflow-hidden py-16 sm:py-24 select-none",t.class))},[o[5]||(o[5]=s("div",{class:"pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-full max-w-5xl rounded-full bg-gradient-to-tr from-blue-600/15 via-purple-600/20 to-emerald-500/15 blur-3xl"},null,-1)),s("div",Kk,[s("div",Zk,[k(I(Le),{class:"h-3.5 w-3.5"}),s("span",null,A(t.badgeText),1),o[0]||(o[0]=s("span",{class:"text-xs"},"→",-1))]),s("h1",Qk,[s("span",null,A(t.titlePrefix),1),o[1]||(o[1]=s("br",{class:"hidden sm:inline"},null,-1)),k(bd,{words:t.rotateWords,class:"mx-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400"},null,8,["words"]),s("span",null,A(t.titleSuffix),1)]),s("p",Jk,A(t.description),1),s("div",e2,[s("button",t2,[o[2]||(o[2]=s("span",null,"立即浏览组件库",-1)),k(I(Pn),{class:"h-4 w-4"})]),k(Gs,{code:t.copyCommand,prefix:"$"},null,8,["code"])]),s("div",n2,[o[4]||(o[4]=s("p",{class:"text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase mb-5"}," 深受全球顶尖工程师与创新团队信赖 ",-1)),k(Tn,{"pause-on-hover":!0,speed:35,class:"py-2"},{default:U(()=>[(f(),x(se,null,he(n,i=>s("div",{key:i,class:"mx-6 flex items-center gap-2 text-sm font-black tracking-wider text-zinc-400 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-default"},[o[3]||(o[3]=s("span",null,"✦",-1)),s("span",null,A(i),1)])),64))]),_:1})])])],2))}}),o2={class:"mx-auto max-w-6xl px-4 sm:px-6"},s2={class:"text-center max-w-2xl mx-auto mb-12 space-y-3"},i2={class:"text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white"},a2={class:"text-sm text-zinc-500 leading-relaxed font-normal"},l2={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},c2={class:"md:col-span-2 relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-8 shadow-xs backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/90"},d2={class:"relative z-10 flex flex-col justify-between h-full space-y-6"},u2={class:"space-y-2 max-w-md"},p2={class:"h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400"},f2={class:"relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-8 shadow-xs backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/90"},m2={class:"space-y-3"},b2={class:"h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400"},x2={class:"relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-8 shadow-xs backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/90"},g2={class:"space-y-3"},h2={class:"h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400"},v2={class:"md:col-span-2 relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-8 shadow-xs backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/90"},y2={class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"},w2={class:"space-y-2 max-w-sm"},k2={class:"h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400"},z2=ee({__name:"FeatureBentoBlock",props:{title:{default:"专为极客与设计师打磨的架构体系"},subtitle:{default:"每一款组件均兼顾 60fps 满帧性能、无依赖纯净度与全套深浅色自适应"},class:{}},setup(e){const t=e;return(n,r)=>(f(),x("div",{class:M(I(ne)("w-full py-12 select-none",t.class))},[s("div",o2,[s("div",s2,[r[0]||(r[0]=s("span",{class:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"}," FEATURE HIGHLIGHTS ",-1)),s("h2",i2,A(t.title),1),s("p",a2,A(t.subtitle),1)]),s("div",l2,[s("div",c2,[k(Rr,{size:250,duration:8,"border-width":1.5,"color-from":"#3b82f6","color-to":"#10b981"}),s("div",d2,[s("div",u2,[s("div",p2,[k(I(tn),{class:"h-5 w-5"})]),r[1]||(r[1]=s("h3",{class:"text-xl font-bold text-zinc-900 dark:text-white"}," Zero-Config 单文件即拷即用 ",-1)),r[2]||(r[2]=s("p",{class:"text-xs text-zinc-500 leading-relaxed"}," 动画关键帧与流光路径由 <style scoped> 封装，无需修改任何外部配置文件，代码直接属于你的代码库。 ",-1))]),r[3]||(r[3]=mo('<div class="rounded-xl border border-zinc-200/80 bg-zinc-50 p-4 font-mono text-[11px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"><div class="flex items-center gap-1.5 mb-2"><span class="w-2.5 h-2.5 rounded-full bg-rose-500/60"></span><span class="w-2.5 h-2.5 rounded-full bg-amber-500/60"></span><span class="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></span><span class="ml-2 text-[10px] text-zinc-400">components/ui/BorderBeam.vue</span></div><code>&lt;BorderBeam :duration=&quot;8&quot; :border-width=&quot;1.5&quot; /&gt;</code></div>',1))])]),s("div",f2,[s("div",m2,[s("div",b2,[k(I(no),{class:"h-5 w-5"})]),r[4]||(r[4]=s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"}," 60fps 满帧性能 ",-1)),r[5]||(r[5]=s("p",{class:"text-xs text-zinc-500 leading-relaxed"}," 基于 GPU 合成层与 Canvas 2D 硬件加速，杜绝主线程阻塞与低端机型掉帧。 ",-1))])]),s("div",x2,[s("div",g2,[s("div",h2,[k(I(Ac),{class:"h-5 w-5"})]),r[6]||(r[6]=s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"}," 严苛 TypeScript ",-1)),r[7]||(r[7]=s("p",{class:"text-xs text-zinc-500 leading-relaxed"}," 所有 Props、Emits 与 Slots 均提供详尽完备的类型定义，IDE 智能提示丝滑无阻。 ",-1))])]),s("div",v2,[s("div",y2,[s("div",w2,[s("div",k2,[k(I(qn),{class:"h-5 w-5"})]),r[8]||(r[8]=s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"}," 真·纯净深浅双模自适应 ",-1)),r[9]||(r[9]=s("p",{class:"text-xs text-zinc-500 leading-relaxed"}," 白底模式下文字对比度与细线条纤毫毕现，暗黑模式下流光溢彩，支持全套设计 Tokens。 ",-1))]),r[10]||(r[10]=s("div",{class:"flex items-center gap-3"},[s("div",{class:"px-4 py-2.5 rounded-xl border border-zinc-200 bg-white shadow-xs text-xs font-semibold text-zinc-800"}," ☀️ 纯白设计 "),s("div",{class:"px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 shadow-xs text-xs font-semibold text-zinc-200"}," 🌙 科技暗黑 ")],-1))])])])])],2))}}),_2={class:"mx-auto max-w-6xl px-4 sm:px-6"},C2={class:"text-center max-w-2xl mx-auto mb-10 space-y-4"},S2={class:"text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white"},M2={class:"text-sm text-zinc-500 font-normal"},I2={class:"pt-2 flex items-center justify-center gap-3"},A2={class:"grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4"},$2={key:0,class:"absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-3.5 py-0.5 text-[11px] font-bold text-white shadow-md shadow-blue-500/25"},P2={class:"text-lg font-bold text-zinc-900 dark:text-white"},T2={class:"mt-1 text-xs text-zinc-500"},R2={class:"mt-6 flex items-baseline gap-1"},E2={class:"text-4xl font-black tracking-tight text-zinc-900 dark:text-white"},F2={key:0,class:"text-xs text-zinc-400"},L2={class:"mt-8 space-y-3 border-t border-zinc-100 pt-6 dark:border-zinc-800/80"},D2={class:"flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"},V2=ee({__name:"PricingSectionBlock",props:{title:{default:"透明且可预测的阶梯方案"},subtitle:{default:"所有套餐均包含全量动效组件源码与持续更新"},class:{}},setup(e){const t=e,n=P("annual"),r=[{id:"free",name:"开源社区版",desc:"适合个人博客与小型玩具项目",priceMonthly:"¥0",priceAnnual:"¥0",popular:!1,features:["包含基础 20 款动效组件","Zero-Config 单文件即用","社区 GitHub Discussions 支持","个人非商业项目许可"],buttonText:"免费开始使用"},{id:"pro",name:"专业开发者版",desc:"面向独立开发者与创新型创业团队",priceMonthly:"¥129",priceAnnual:"¥99",period:"月",popular:!0,badge:"最受欢迎",features:["解锁全量 82 款动效原子与 Blocks","商用无限制个人及客户授权","终身免费版本更新","Figma 设计规范文件包","优先邮件技术答疑支持"],buttonText:"立即升级专业版"},{id:"team",name:"企业团队版",desc:"面向大型团队与高频交付机构",priceMonthly:"¥499",priceAnnual:"¥399",period:"月",popular:!1,features:["全量 82 款组件及后续全部上新","不限成员席位商业授权","专属微信/飞书技术专家服务群","提供组件定制与性能调优建议","专属 SLA 极速响应保障"],buttonText:"联系企业顾问"}];return(o,i)=>(f(),x("div",{class:M(I(ne)("w-full py-12 select-none",t.class))},[s("div",_2,[s("div",C2,[s("h2",S2,A(t.title),1),s("p",M2,A(t.subtitle),1),s("div",I2,[k(Ns,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=l=>n.value=l),options:[{label:"按月付费",id:"monthly"},{label:"按年结算 (省 20%)",id:"annual"}]},null,8,["modelValue"])])]),s("div",A2,[(f(),x(se,null,he(r,l=>s("div",{key:l.id,class:M(["relative flex flex-col justify-between rounded-2xl p-8 backdrop-blur-xl transition-all duration-300",l.popular?"border-2 border-blue-500/80 bg-white shadow-xl dark:border-blue-500/80 dark:bg-zinc-900 md:-translate-y-2":"border border-zinc-200/90 bg-white/80 shadow-xs dark:border-zinc-800/90 dark:bg-zinc-950/80 hover:border-zinc-300 dark:hover:border-zinc-700"])},[l.popular?(f(),x("div",$2,[k(I(Le),{class:"h-3 w-3"}),s("span",null,A(l.badge),1)])):N("",!0),s("div",null,[s("h3",P2,A(l.name),1),s("p",T2,A(l.desc),1),s("div",R2,[s("span",E2,A(n.value==="annual"?l.priceAnnual:l.priceMonthly),1),l.period?(f(),x("span",F2," / "+A(l.period),1)):N("",!0)]),s("ul",L2,[(f(!0),x(se,null,he(l.features,a=>(f(),x("li",{key:a,class:"flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-300"},[s("div",D2,[k(I(wt),{class:"h-2.5 w-2.5"})]),s("span",null,A(a),1)]))),128))])]),s("button",{type:"button",class:M(["mt-8 w-full rounded-xl py-2.5 text-xs font-semibold shadow-xs transition-all active:scale-95 cursor-pointer",l.popular?"bg-blue-600 text-white hover:bg-blue-500 shadow-blue-500/25":"bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"])},A(l.buttonText),3)],2)),64))])])],2))}}),O2={class:"mx-auto max-w-6xl px-4 sm:px-6 mb-12 text-center space-y-3"},B2={class:"text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white"},j2={class:"text-sm text-zinc-500 max-w-xl mx-auto"},N2={class:"relative space-y-4"},H2={class:"flex items-center justify-between"},G2={class:"flex items-center gap-3"},U2={class:"flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-lg dark:bg-zinc-800"},q2={class:"flex items-center gap-1"},X2={class:"font-bold text-sm text-zinc-900 dark:text-white"},W2={class:"text-[11px] text-zinc-400"},Y2={class:"mt-4 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed"},K2={class:"flex items-center justify-between"},Z2={class:"flex items-center gap-3"},Q2={class:"flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-lg dark:bg-zinc-800"},J2={class:"flex items-center gap-1"},e5={class:"font-bold text-sm text-zinc-900 dark:text-white"},t5={class:"text-[11px] text-zinc-400"},n5={class:"mt-4 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed"},r5=ee({__name:"TestimonialMarqueeBlock",props:{title:{default:"来自全球顶级创造者的真实口碑"},subtitle:{default:"数十万开发者正在使用 Aura UI 构建下一代数字界面"},class:{}},setup(e){const t=e,n=[{author:"Alex Rivera",handle:"@alex_dev",avatar:"👨‍💻",role:"Staff Frontend Engineer at Vercel",content:"Aura UI 彻底改变了我们团队交付动效的方式，单文件拷过去即用，没有恶心的构建冲突。",stars:5},{author:"Sarah Jenkins",handle:"@sarah_design",avatar:"👩‍🎨",role:"Design Director at Linear",content:"触感阻尼与弹簧缓动做到了像素级的精致，这才是现代 Web 该有的交互水准。",stars:5},{author:"Michael Zhang",handle:"@mz_architect",avatar:"🧑‍🚀",role:"Founder at AI Agentic Studio",content:"AI 相关的 AgentStatus 与 思维手风琴组件太及时了，帮我们省下了至少两周的动效研发时间。",stars:5}],r=[{author:"Elena Rostova",handle:"@elena_tech",avatar:"👩‍🔬",role:"Lead Architect at Supercell",content:"完全不需要改 tailwind.config.js，所有动画关键帧内聚在单文件内部，优雅至极！",stars:5},{author:"David Kim",handle:"@dkim_codes",avatar:"🧑‍💻",role:"Senior Developer at Figma",content:"ScrubInput 和 HoldToConfirm 的手感简直跟原生桌面应用一模一样，强烈推荐。",stars:5},{author:"Chloe Dupont",handle:"@chloe_ux",avatar:"✨",role:"Product Lead at Stripe",content:"双模自适应在纯白背景下线条清晰干净，在暗色背景下流光溢彩，无可挑剔。",stars:5}];return(o,i)=>(f(),x("div",{class:M(I(ne)("relative w-full overflow-hidden py-16 select-none",t.class))},[s("div",O2,[i[0]||(i[0]=s("span",{class:"inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"}," WALL OF LOVE ",-1)),s("h2",B2,A(t.title),1),s("p",j2,A(t.subtitle),1)]),s("div",N2,[i[1]||(i[1]=s("div",{class:"pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10"},null,-1)),i[2]||(i[2]=s("div",{class:"pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10"},null,-1)),k(Tn,{"pause-on-hover":!0,speed:40},{default:U(()=>[(f(),x(se,null,he(n,l=>s("div",{key:l.handle,class:"mx-3 w-80 sm:w-96 rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-xs backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95"},[s("div",H2,[s("div",G2,[s("span",U2,A(l.avatar),1),s("div",null,[s("div",q2,[s("span",X2,A(l.author),1),k(I(la),{class:"h-3.5 w-3.5 text-blue-500"})]),s("span",W2,A(l.role),1)])]),k(Us,{"model-value":l.stars,readonly:!0},null,8,["model-value"])]),s("p",Y2," “"+A(l.content)+"” ",1)])),64))]),_:1}),k(Tn,{reverse:!0,"pause-on-hover":!0,speed:35},{default:U(()=>[(f(),x(se,null,he(r,l=>s("div",{key:l.handle,class:"mx-3 w-80 sm:w-96 rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-xs backdrop-blur-xl dark:border-zinc-800/90 dark:bg-zinc-900/95"},[s("div",K2,[s("div",Z2,[s("span",Q2,A(l.avatar),1),s("div",null,[s("div",J2,[s("span",e5,A(l.author),1),k(I(la),{class:"h-3.5 w-3.5 text-blue-500"})]),s("span",t5,A(l.role),1)])]),k(Us,{"model-value":l.stars,readonly:!0},null,8,["model-value"])]),s("p",n5," “"+A(l.content)+"” ",1)])),64))]),_:1})])],2))}}),o5={class:"mx-auto max-w-5xl px-4 sm:px-6"},s5={class:"relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-gradient-to-b from-zinc-900 to-black p-8 sm:p-16 text-center shadow-2xl dark:border-zinc-800"},i5={class:"relative z-10 max-w-2xl mx-auto space-y-6"},a5={class:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-cyan-300 border border-white/10 backdrop-blur-md"},l5={class:"text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight"},c5={class:"text-sm sm:text-base text-zinc-400 font-normal leading-relaxed"},d5={class:"pt-4 flex flex-wrap items-center justify-center gap-4"},u5={href:"#/docs",class:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold backdrop-blur-md transition-all active:scale-95"},p5=ee({__name:"CtaBannerBlock",props:{title:{default:"立即开启下一代数字界面的动效革命"},description:{default:"无需繁琐工程配置，单文件直接引入。零成本赋能你的业务与产品线。"},class:{}},setup(e){const t=e;function n(){console.log("Confirmed CTA!")}return(r,o)=>(f(),x("div",{class:M(I(ne)("w-full py-16 select-none",t.class))},[s("div",o5,[s("div",s5,[k(Rr,{size:300,duration:7,"border-width":1.5,"color-from":"#38bdf8","color-to":"#818cf8"}),k(md,{"particle-density":70,"particle-color":"#38bdf8","min-size":.6,"max-size":1.6,speed:.8,class:"absolute inset-0 pointer-events-none opacity-40"}),o[2]||(o[2]=s("div",{class:"pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-52 w-full max-w-lg rounded-full bg-cyan-500/20 blur-3xl"},null,-1)),s("div",i5,[s("div",a5,[k(I(yr),{class:"h-3.5 w-3.5"}),o[0]||(o[0]=s("span",null,"START BUILDING TODAY",-1))]),s("h2",l5,A(t.title),1),s("p",c5,A(t.description),1),s("div",d5,[k(oo,{text:"长按确认部署","completed-text":"✓ 部署环境已就绪",duration:1200,onConfirm:n}),s("a",u5,[o[1]||(o[1]=s("span",null,"查看全部文档",-1)),k(I(Pn),{class:"h-3.5 w-3.5"})])])])])])],2))}}),f5={class:"mx-auto max-w-4xl px-4 sm:px-6"},m5={class:"text-center max-w-xl mx-auto mb-10 space-y-3"},b5={class:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"},x5={class:"text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white"},g5={class:"text-sm text-zinc-500 font-normal"},h5={class:"space-y-3.5"},v5=["onClick"],y5={class:"font-bold text-sm sm:text-base text-zinc-800 dark:text-zinc-200"},w5={key:0,class:"px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-900"},k5=ee({__name:"FaqAccordionBlock",props:{title:{default:"常见问题解答 (FAQ)"},subtitle:{default:"关于组件架构、浏览器兼容性与商业使用的详细说明"},items:{default:()=>[{id:"zero-config",question:"什么是真正的 Zero-Config 单文件即用？",answer:"传统 UI 动效库通常要求你在 tailwind.config.js 中配置复杂的 keyframes、animation 与插件，一旦版本不匹配极易引发全局样式污染。Aura UI 坚持将所有动画关键帧与 CSS 变量全部封装在单文件的 <style scoped> 内，你只需将单个 .vue 文件拷贝到你的项目 src/components/ui/ 目录下，无需修改任何外部配置文件即可 100% 完整生效。"},{id:"performance",question:"如何确保在低配设备与移动端上保持 60fps？",answer:"所有动效组件严格遵循 GPU 硬件加速原则，仅在 transform、opacity、filter 与 Canvas 渲染层进行变换，杜绝引发重排（Reflow）的高开销属性。重度粒子类组件采用 requestAnimationFrame 与非线性阻尼衰减算法，并在离开视口或组件卸载时立即取消动画帧与事件监听，确保零内存泄漏。"},{id:"commercial",question:"Aura UI 可以直接商用或用于客户的外包项目吗？",answer:"完全可以！Aura UI 基于开源友好的 MIT 商业协议，你可以自由将组件拷贝进你的商业 SaaS 平台、内部中台、移动端 H5 或任何客户交付项目，没有任何限制与强制署名要求。"},{id:"typescript",question:"组件对 TypeScript 和 Vue 3.5+ 响应式特性的支持如何？",answer:'所有组件均采用 Vue 3.5+ 最新的 <script setup lang="ts"> 规范编写，Props、Emits、Slots 拥有完备严格的 TypeScript 泛型接口定义，并且在 defineProps 解构与默认值传递上原生满足 IDE 智能补全要求。'}]},multiple:{type:Boolean,default:!1},class:{}},setup(e){var o;const t=e,n=P([((o=t.items[0])==null?void 0:o.id)||"zero-config"]);function r(i){t.multiple?n.value.includes(i)?n.value=n.value.filter(l=>l!==i):n.value.push(i):n.value.includes(i)?n.value=[]:n.value=[i]}return(i,l)=>(f(),x("div",{class:M(I(ne)("w-full py-12 select-none",t.class))},[s("div",f5,[s("div",m5,[s("span",b5,[k(I(Jp),{class:"h-3.5 w-3.5"}),l[0]||(l[0]=s("span",null,"GOT QUESTIONS?",-1))]),s("h2",x5,A(t.title),1),s("p",g5,A(t.subtitle),1)]),s("div",h5,[(f(!0),x(se,null,he(t.items,a=>(f(),x("div",{key:a.id,class:"overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 backdrop-blur-xl transition-all dark:border-zinc-800/90 dark:bg-zinc-950/90"},[s("button",{type:"button",onClick:c=>r(a.id),class:"flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-zinc-50/80 dark:hover:bg-zinc-900/50 cursor-pointer"},[s("span",y5,A(a.question),1),s("span",{class:M(["ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 transition-transform duration-200",{"rotate-45 text-blue-500":n.value.includes(a.id)}])},[k(I(Sc),{class:"h-4 w-4"})],2)],8,v5),k(et,{name:"faq-collapse"},{default:U(()=>[n.value.includes(a.id)?(f(),x("div",w5,A(a.answer),1)):N("",!0)]),_:2},1024)]))),128))])])],2))}}),z5=Fe(k5,[["__scopeId","data-v-1ebb2996"]]),_5={class:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"},C5={class:"flex flex-col md:flex-row gap-8"},S5={class:"w-full md:w-64 shrink-0"},M5={class:"sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-xs backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70"},I5={class:"mb-3 px-2 flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider"},A5={class:"rounded bg-blue-100 dark:bg-blue-950/80 px-1.5 py-0.2 text-[10px] text-blue-600 dark:text-blue-400 font-bold"},$5={class:"space-y-4"},P5={class:"flex items-center justify-between px-2 py-1 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"},T5={class:"flex items-center gap-1.5"},R5={class:"text-zinc-800 dark:text-zinc-200 font-bold"},E5={class:"rounded bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.2 text-[9px] font-mono text-zinc-500 font-bold"},F5={class:"space-y-0.5"},L5={class:"truncate"},D5={class:"mt-6 border-t border-zinc-200 dark:border-zinc-800 pt-4 px-2"},V5={class:"flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100"},O5={class:"min-w-0 flex-1"},B5={class:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white mb-3 shadow-md shadow-blue-500/20"},j5={key:1,class:"w-full max-w-2xl"},N5={class:"flex h-full flex-col items-center justify-center p-6 text-center"},H5={key:5,class:"flex flex-col items-center gap-6 py-8"},G5={class:"text-center"},U5={class:"text-center mt-2"},q5={key:6,class:"flex flex-wrap items-center justify-center gap-4 py-8"},X5={class:"relative z-10 flex items-center justify-between"},W5={class:"relative z-10 flex flex-col items-center gap-3"},Y5={class:"flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30"},K5={key:10,class:"grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full max-w-3xl py-6"},Z5={class:"inline-flex items-baseline justify-center text-sky-500 dark:text-sky-400"},Q5={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},J5={class:"inline-flex items-baseline justify-center text-indigo-500 dark:text-indigo-400"},ez={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},tz={class:"inline-flex items-baseline justify-center text-emerald-500 dark:text-emerald-400"},nz={class:"text-xl sm:text-2xl xl:text-3xl font-black tracking-tight"},rz={key:12,class:"w-full"},oz={class:"relative z-10 text-center"},sz={class:"inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-900 dark:bg-zinc-900/80 dark:text-blue-400 mb-3"},iz={class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/30 text-white"},az={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-sky-500"},lz={class:"flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-emerald-500"},cz={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-indigo-500"},dz={class:"flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 shadow-md backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900 text-amber-500"},uz={class:"w-full max-w-xl h-72"},pz={class:"flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-white/80 p-1 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 shadow-xs"},fz=["onClick"],mz={class:"w-full max-w-xl"},bz={class:"w-full max-w-xl"},xz={class:"w-full max-w-xl"},gz={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-4 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},hz={class:"mt-1 text-sm font-bold text-blue-600 dark:text-blue-400 font-mono"},vz={class:"flex flex-wrap items-center justify-center gap-4"},yz={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},wz={key:0,class:"text-xs text-zinc-400 italic"},kz={key:1,class:"space-y-1"},zz={class:"flex flex-wrap items-center justify-center gap-4"},_z={class:"w-full max-w-lg rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},Cz={key:0,class:"text-xs text-zinc-400 italic"},Sz={key:1,class:"space-y-1"},Mz={class:"flex flex-wrap items-center justify-center gap-8"},Iz={class:"flex flex-col items-center gap-2"},Az={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},$z={class:"text-xs font-mono text-zinc-500 font-bold"},Pz={class:"flex flex-col items-center gap-2"},Tz={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Rz={class:"text-xs font-mono text-zinc-500 font-bold"},Ez={class:"flex flex-col items-center gap-2"},Fz={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Lz={class:"text-xs font-mono text-zinc-500 font-bold"},Dz={class:"flex flex-wrap items-center justify-center gap-3"},Vz={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2.5 text-xs font-mono text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Oz={class:"font-bold text-blue-600 dark:text-blue-400"},Bz={class:"flex flex-wrap items-center justify-center gap-6"},jz={class:"w-full max-w-md rounded-xl border border-zinc-200/80 bg-white/70 p-3.5 text-center dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-md"},Nz={class:"text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold"},Hz={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Gz={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},Uz={class:"flex flex-wrap items-center justify-center gap-4"},qz={class:"flex items-center justify-center p-4"},Xz={class:"w-full max-w-sm"},Wz={class:"w-full max-w-md"},Yz={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Kz={class:"font-bold text-blue-600 dark:text-blue-400"},Zz={class:"w-full max-w-sm"},Qz={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},Jz={class:"font-bold text-blue-600 dark:text-blue-400"},e4={class:"font-bold text-zinc-900 dark:text-white"},t4={class:"w-full max-w-md"},n4={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},r4={class:"font-bold text-blue-600 dark:text-blue-400"},o4={class:"w-full max-w-lg"},s4={class:"flex flex-col items-center gap-4"},i4={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},a4={class:"font-bold text-blue-600 dark:text-blue-400"},l4={class:"w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},c4={class:"w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},d4={class:"text-center"},u4={class:"mt-2 text-xs font-mono text-blue-600 dark:text-blue-400"},p4={class:"absolute bottom-8 right-10 z-20"},f4={class:"w-full flex justify-center"},m4={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},b4={class:"font-bold text-blue-600 dark:text-blue-400"},x4={class:"w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-center gap-4"},g4={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},h4={class:"font-bold text-blue-600 dark:text-blue-400"},v4={class:"flex items-center gap-8"},y4={class:"flex items-center gap-3"},w4={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},k4={class:"font-bold text-blue-600 dark:text-blue-400"},z4={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},_4={class:"flex items-start gap-3.5"},C4={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400"},S4={class:"flex items-start gap-3.5"},M4={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400"},I4={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl relative z-10"},A4={class:"flex items-start gap-3.5"},$4={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/40 text-blue-600 dark:bg-white/10 dark:text-blue-400 shadow-xs"},P4={class:"flex items-start gap-3.5"},T4={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/40 text-purple-600 dark:bg-white/10 dark:text-purple-400 shadow-xs"},R4={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},E4={class:"flex items-start gap-3.5"},F4={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400"},L4={class:"flex items-start gap-3.5"},D4={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400"},V4={class:"w-full max-w-sm flex justify-center"},O4={class:"flex flex-col items-center text-center p-2 [transform-style:preserve-3d]"},B4={class:"flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 [transform:translateZ(40px)]"},j4={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},N4={class:"font-bold text-blue-600 dark:text-blue-400"},H4={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},G4={class:"flex items-start gap-3.5"},U4={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400"},q4={class:"flex items-start gap-3.5"},X4={class:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"},W4={class:"flex flex-wrap items-center justify-center gap-8"},Y4={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-start gap-3"},K4={class:"rounded-2xl border border-zinc-200/80 bg-white/80 p-5 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80 flex flex-col items-start gap-3"},Z4={class:"flex flex-col items-center gap-3"},Q4={class:"text-4xl sm:text-5xl font-black"},J4={class:"flex items-center gap-3"},e3={class:"flex flex-wrap items-center justify-center gap-10"},t3={class:"flex items-center gap-3"},n3={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},r3={class:"font-bold text-blue-600 dark:text-blue-400"},o3={class:"w-full max-w-2xl rounded-2xl border border-zinc-200/80 bg-white/80 p-8 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},s3={class:"flex items-center gap-3"},i3=["disabled"],a3={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-1.5 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},l3={class:"font-bold text-blue-600 dark:text-blue-400"},c3=["disabled"],d3={class:"w-full max-w-3xl rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/80"},u3={class:"rounded-xl border border-zinc-200/80 bg-white/70 px-4 py-2 font-mono text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"},p3={class:"font-bold text-blue-600 dark:text-blue-400"},f3={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"},m3={class:"flex items-center gap-3"},b3={class:"flex items-center justify-end gap-2 w-full"},x3=["onClick"],g3=["onClick"],h3={class:"flex flex-wrap items-center justify-center gap-6"},v3={class:"w-full max-w-lg"},y3={class:"flex flex-wrap items-center justify-center gap-3"},w3={class:"flex items-center gap-6"},k3={class:"px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 text-xs font-mono text-zinc-600 dark:text-zinc-300"},z3={class:"h-80 w-full overflow-hidden rounded-2xl border border-zinc-800 shadow-xl"},_3={class:"relative h-72 w-full flex flex-col items-center justify-center bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl"},C3={class:"w-full max-w-2xl"},S3={class:"w-full overflow-hidden rounded-2xl border border-zinc-800 shadow-xl"},M3={class:"h-72 w-full max-w-xl rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-xl"},I3={class:"max-w-xl text-center p-6 rounded-2xl border border-zinc-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/80 shadow-sm"},A3={class:"text-2xl sm:text-4xl font-black text-zinc-900 dark:text-white flex flex-wrap items-center justify-center gap-3"},$3={class:"text-2xl sm:text-3xl font-extrabold text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-2"},P3={class:"flex flex-col items-center gap-4"},T3={class:"p-6 rounded-2xl bg-zinc-900 dark:bg-black border border-zinc-800 shadow-xl"},R3={class:"py-6"},E3={class:"p-12"},F3={class:"w-full max-w-sm flex flex-col items-center gap-4"},L3={class:"text-xs font-mono text-zinc-400"},D3={class:"flex flex-col sm:flex-row items-center gap-4"},V3={class:"flex items-center gap-4"},O3={class:"flex items-center gap-2"},B3={class:"flex items-center gap-1.5"},j3={class:"flex flex-col items-center gap-3"},N3=ee({__name:"DocsView",setup(e){const t=P(null),n=P(null),r=P(null),o=P(null),i=Kf(),l=ie(()=>i.params.id||"border-beam"),a=ie(()=>pn.find(Ke=>Ke.id===l.value)||pn[0]);function c(Ke){switch(Ke){case"forms-inputs":return $c;case"tactile-actions":return tn;case"ai-native":return Bn;case"interactive-nav":return Nn;case"space-3d":return qn;case"borders-cards":return Bt;case"kinetic-typography":return Le;default:return Le}}function d(Ke){return pn.filter(v=>v.suiteId===Ke)}const p=["OpenAI","Anthropic","Google","NVIDIA","DeepSeek","Vercel"],u=[{id:"home",label:"首页概览",icon:_c},{id:"explore",label:"模型广场",icon:Nn},{id:"agent",label:"AI 智能体",icon:Le},{id:"files",label:"知识库",icon:o0},{id:"notice",label:"消息通知",icon:Zp},{id:"settings",label:"偏好设置",icon:m0}],b=P("thinking"),m={thinking:"正在多模态解构视觉空间坐标与贝塞尔插值参数...",running:"并行编译并打包 Production Motion Primitives...",tool_call:"调用 Playwright 真实无头浏览器验证 60fps 动效性能...",success:"全套 28 项动效原子组件按 6 大主题套件落地完成！",error:"检测到底层渲染管道异常，正在启动自愈补偿重试..."},h=P(""),g=P(!1),z=P("deepseek-r1");function _(Ke){g.value=!0,setTimeout(()=>{g.value=!1,h.value=""},2200)}const y=P("preview"),C=[{id:"preview",label:"实时预览",icon:Le},{id:"code",label:"组件源码",icon:vr,badge:"SFC"},{id:"api",label:"API 文档",icon:fr},{id:"suites",label:"主题矩阵",icon:Bt,badge:"6 大套件"}],w=P([]);function T(){w.value.unshift(`[${new Date().toLocaleTimeString()}] 触发长按蓄力物理确认：危险操作已执行！`),w.value.length>3&&w.value.pop()}const F=P([]);function D(){F.value.unshift(`[${new Date().toLocaleTimeString()}] 就地确认执行成功：数据库缓存集群已清空`),F.value.length>3&&F.value.pop()}const R=P(!1),L=P(!1),Z=P(!1),le=P(!0),q=P(!1),be=P(42),_e=P("尚未触发操作");function ze(){_e.value=`[${new Date().toLocaleTimeString()}] 执行主操作：生产环境立即发布完成！`}function Q(Ke){_e.value=`[${new Date().toLocaleTimeString()}] 执行伴随动作：${Ke.label}`}const te=P(480),W=P(16),we=P(85),J=P("Aura$2026"),Re=P(6800),Me=P("CNY"),ot=P("13800138000"),Ue=P("CN"),Te=P(["Vue 3.5","TailwindCSS","Motion UI","TypeScript"]),Ce=P("嗨 @Aura Assistant ，请审查关于全套动效原子组件库的重构方案！"),O=P("preview"),ce=[{id:"preview",label:"实时渲染",icon:Le},{id:"code",label:"SFC 源码",icon:vr,badge:"Vue"},{id:"docs",label:"API 文档",icon:fr},{id:"disabled",label:"锁定",disabled:!0}],X=[{label:"智能云控制台"},{label:"亚太东北节点 (东京)"},{label:"Kubernetes 集群"},{label:"核心 Pod 拓扑"},{label:"Aura UI 动效服务"}],ge=P("未触发操作"),S=[{id:"bot",label:"呼起智能体 Agent",icon:Bn,color:"bg-purple-600",onClick:()=>{ge.value="已呼起 AI 智能体"}},{id:"sparkles",label:"生成动效代码",icon:Le,color:"bg-blue-600",onClick:()=>{ge.value="已生成动效代码"}},{id:"rocket",label:"全量编译部署",icon:yr,color:"bg-emerald-600",onClick:()=>{ge.value="已执行全量编译部署"}}],$=[{id:"solutions",label:"解决方案",children:[{title:"AI Agent 交互引擎",desc:"模拟 Token 打字机与 R1 思考链路手风琴",icon:Bn,badge:"爆款"},{title:"全景 3D 纵深矩阵",desc:"同心轨道公转、极光天灯与赛博复古网格",icon:qn},{title:"流光卡片便当盒",desc:"无缝跑马流光边框与聚光灯 Bento 卡片",icon:Bt}]},{id:"developers",label:"开发者生态",children:[{title:"Zero-Config 单文件",desc:"代码即用，单文件内聚无需配置 tailwind",icon:vr},{title:"TypeScript 完备",desc:"全量 Props、事件与插槽类型安全",icon:fr}]}],E=P("未选择"),V=P(3),B=P(72);function j(){B.value=(B.value+15)%105}const K=[{id:1,title:"物理动效原子引擎",description:"专为 Vue 3 构建的高性能单文件动效，60fps 满帧运行，零黑盒依赖。",tag:"Core",author:"Aura Team"},{id:2,title:"零配置单文件拷贝",description:"无黑盒依赖，复制即用，代码全由你掌控，极简可扩展。",tag:"Architecture",author:"Aura Architect"},{id:3,title:"全套对标 Arc UI",description:"包含 182 款组件与 109 款 Blocks 全套重构，设计规范一体化。",tag:"Ecosystem",author:"DeepMind"},{id:4,title:"高折射率物理质感",description:"亚克力磨砂、三维陀螺仪视差与全息反光遮罩，极致视觉体验。",tag:"Surfaces",author:"Aura UI"}],re=P("暂无划卡记录");function oe(Ke,v){re.value=`已向 ${v==="left"?"← 左":"右 →"} 划走：${Ke.title}`}const H=P([14,22,18,32,28,45,40,58,62,70,68,88]),ve=P(128450);function ae(Ke){ve.value=Math.max(0,ve.value+Ke)}const xe=P(68),ye=P(2),Ae=[{title:"环境检测",description:"Node/pnpm 就绪"},{title:"原子组件",description:"SFC 零配置拷贝"},{title:"工程构建",description:"vue-tsc 0 报错"},{title:"服务器部署",description:"Nginx 80 端口"}],Be=[{id:"free",name:"社区开源版",price:"¥0",ctaText:"免费克隆"},{id:"pro",name:"独立专业版",price:"¥199",period:"终身",popular:!0,badge:"最畅销",ctaText:"立即解锁"},{id:"team",name:"企业旗舰版",price:"¥699",period:"终身",ctaText:"企业采购"}],je=[{name:"182 款动效原子组件 (Zero-Config SFC)",values:{free:"核心 52 款",pro:!0,team:!0}},{name:"109 款高阶业务应用 Blocks 组合",values:{free:!1,pro:!0,team:!0}},{name:"Figma 原生高保真设计规范源文件",values:{free:!1,pro:!0,team:!0}},{name:"企业级独立技术支持与专属部署优化",values:{free:!1,pro:"邮件支持",team:"7×24h 专属"}}],Ye=P("pro"),tt=[28,36,32,48,44,62,70,89],kt=P(!1),pt=P(!1),qt=P("right"),Vr=[{id:"cut",label:"剪切项目",shortcut:"⌘X",icon:"✂️"},{id:"copy",label:"复制配置",shortcut:"⌘C",icon:"📋"},{id:"paste",label:"粘贴属性",shortcut:"⌘V",icon:"📌"},{id:"sep1",type:"separator"},{id:"share",label:"分享组件链接",shortcut:"⌘S",icon:"🔗"},{id:"sep2",type:"separator"},{id:"delete",label:"移入回收站",shortcut:"⌫",icon:"🗑️",destructive:!0}],st=P([{id:"init-toast",type:"success",title:"系统就绪",description:"Aura UI 弹窗与浮层套件加载完成。",duration:4e3}]);function ft(Ke){const v={success:"操作执行成功",error:"网络请求超时",warning:"内存占用较高",info:"发现新的组件更新"},No={success:"配置文件已同步至云端存储中心。",error:"请检查网络连接或稍后重试。",warning:"当前工作区有超过 50 个激活的微动组件。",info:"Aura UI 现已支持 58 款工业级动效组件。"};st.value.push({id:String(Date.now()),type:Ke,title:v[Ke],description:No[Ke],duration:3500})}function Or(Ke){st.value=st.value.filter(v=>v.id!==Ke)}const tr=P("暂无选择"),jo=P(65),gi=P("#3b82f6"),hi=P(4);function vi(Ke){tr.value=`选中: ${Ke.label} (${Ke.id})`}return(Ke,v)=>{const No=Lr("router-link");return f(),x("div",_5,[s("div",C5,[s("aside",S5,[s("div",M5,[s("div",I5,[v[49]||(v[49]=s("span",null,"主题套件矩阵",-1)),s("span",A5,A(I(Fs).length)+" 大套件 · "+A(I(pn).length)+" 组件 ",1)]),s("div",$5,[(f(!0),x(se,null,he(I(Fs),G=>(f(),x("div",{key:G.id,class:"space-y-1"},[s("div",P5,[s("div",T5,[(f(),me(Je(c(G.id)),{class:"h-3.5 w-3.5 text-blue-500"})),s("span",R5,A(G.name),1)]),s("span",E5,A(d(G.id).length),1)]),s("nav",F5,[(f(!0),x(se,null,he(d(G.id),Xt=>(f(),me(No,{key:Xt.id,to:`/docs/${Xt.id}`,class:M(["flex items-center justify-between rounded-xl px-2.5 py-1.5 text-xs font-medium transition-colors",l.value===Xt.id?"bg-blue-600 text-white font-semibold shadow-xs":"text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"])},{default:U(()=>[s("span",L5,A(Xt.name),1),s("span",{class:M(["text-[9px] rounded px-1.5 py-0.2 shrink-0 ml-1",l.value===Xt.id?"bg-blue-700/80 text-blue-100":"bg-zinc-100 dark:bg-zinc-900 text-zinc-400"])},A(Xt.category),3)]),_:2},1032,["to","class"]))),128))])]))),128))]),s("div",D5,[s("div",V5,[k(I(fr),{class:"h-3.5 w-3.5 text-blue-500"}),v[50]||(v[50]=s("span",null,"基础依赖安装",-1))]),v[51]||(v[51]=s("p",{class:"mt-1 text-[11px] text-zinc-400"},"组件依赖轻量样式与工具库：",-1)),v[52]||(v[52]=s("div",{class:"mt-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-300 break-all select-all"}," npm i @vueuse/core clsx tailwind-merge ",-1))])])]),s("main",O5,[(f(),me(Zx,{key:a.value.id,title:a.value.title,description:a.value.description,"component-code":a.value.componentCode,"usage-code":a.value.usageCode,"component-filename":a.value.componentFilename,"props-list":a.value.propsList},{default:U(({isDark:G})=>{var Xt,yi;return[a.value.id==="border-beam"?(f(),x("div",{key:0,class:M(["relative flex h-64 w-80 flex-col items-center justify-center rounded-2xl border p-6 shadow-md transition-colors duration-200",G?"border-zinc-800 bg-zinc-900 text-zinc-100 shadow-black/40":"border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/50"])},[s("div",B5,[k(I(Le),{class:"h-6 w-6"})]),s("h4",{class:M(["text-lg font-bold",G?"text-white":"text-zinc-900"])}," Border Beam Demo ",2),s("p",{class:M(["mt-1 text-center text-xs",G?"text-zinc-400":"text-zinc-500"])}," 流光平滑环绕圆角容器边缘 ",2),k(Rr,{size:180,duration:8,"color-from":"#38bdf8","color-to":"#a855f7"})],2)):a.value.id==="bento-grid"?(f(),x("div",j5,[k(id,{class:"auto-rows-[16rem]"},{default:U(()=>[k(bt,{name:"AI 向量引擎",description:"毫秒级生成多模态视觉理解",cta:"了解详情",href:"#",class:M(G?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900")},{icon:U(()=>[k(I(no),{class:"h-5 w-5 text-blue-500"})]),_:1},8,["class"]),k(bt,{name:"全球边缘节点加速",description:"降低网络抖动，就近命中就近计算",class:M(["md:col-span-2",G?"border-zinc-800 bg-zinc-900/90 text-zinc-100":"border-zinc-200 bg-white text-zinc-900"]),cta:"查看分布",href:"#"},{icon:U(()=>[k(I(tn),{class:"h-5 w-5 text-amber-500"})]),_:1},8,["class"])]),_:2},1024)])):a.value.id==="interactive-particles"?(f(),x("div",{key:2,class:M(["relative h-[360px] w-full rounded-2xl border overflow-hidden transition-colors duration-200",G?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[k(ld,{quantity:60,"mouse-radius":120,"connect-lines":!0,color:G?"255, 255, 255":"59, 130, 246"},{default:U(()=>[s("div",N5,[s("h3",{class:M(["text-2xl font-bold tracking-tight",G?"text-white":"text-zinc-900"])}," 移动光标体验引力感应 ",2),s("p",{class:M(["mt-2 text-xs",G?"text-zinc-400":"text-zinc-500"])}," Canvas 2D 60fps 满帧运行，动态引力排斥与光效连线 ",2)])]),_:2},1032,["color"])],2)):a.value.id==="retro-grid"?(f(),x("div",{key:3,class:M(["relative flex h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",G?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[s("span",{class:M(["z-10 text-4xl font-extrabold tracking-tighter",G?"text-white":"text-zinc-900"])}," Retro Synthwave Grid ",2),k(js,{angle:65,"dark-line-color":"#334155","light-line-color":"#cbd5e1"})],2)):a.value.id==="dot-pattern"?(f(),x("div",{key:4,class:M(["relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl border p-8 transition-colors duration-200",G?"border-zinc-800 bg-black text-white":"border-zinc-200 bg-white text-zinc-900"])},[s("p",{class:M(["z-10 text-xl font-bold",G?"text-white":"text-zinc-900"])}," SVG 矢量波点底纹 (含发光聚光灯) ",2),k(ad,{width:18,height:18,cr:1.2,glow:!0})],2)):a.value.id==="shiny-text"?(f(),x("div",H5,[s("div",{class:M(["rounded-full border px-5 py-2 text-xs font-medium shadow-sm transition-colors",G?"border-zinc-800 bg-zinc-900/90 text-zinc-300":"border-zinc-200 bg-zinc-100 text-zinc-700"])},[v[53]||(v[53]=$e(" ✨ ",-1)),k(zr,{text:"Aura UI v1.0 全新微光发布",duration:2.5})],2),s("div",G5,[k(zr,{text:"Next-Gen AI Intelligence",class:"text-4xl sm:text-5xl font-black tracking-tight",duration:2.5}),s("p",{class:M(["mt-2 text-xs sm:text-sm",G?"text-zinc-500":"text-zinc-400"])}," 持续流淌的宽幅金属微光，肉眼清晰可观赏，绝无突兀停滞 ",2)]),s("div",U5,[k(zr,{text:"Cyberpunk Motion Primitives",variant:"cyber",class:"text-3xl sm:text-4xl font-extrabold tracking-tight",duration:3}),s("p",{class:M(["mt-1 text-xs",G?"text-zinc-500":"text-zinc-400"])}," 赛博霓虹蓝紫粒子流光，高频荡漾 ",2)])])):a.value.id==="shimmer-button"?(f(),x("div",q5,[k(kr,{"shimmer-color":"#38bdf8"},{default:U(()=>[v[54]||(v[54]=s("span",null,"立即获取代码",-1)),k(I(Pn),{class:"h-4 w-4"})]),_:1}),k(kr,{"shimmer-color":"#ec4899","shimmer-duration":"3.5s"},{default:U(()=>[...v[55]||(v[55]=[s("span",null,"Pink Shimmer",-1)])]),_:1})])):a.value.id==="marquee"?(f(),x("div",{key:7,class:M(["relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border py-6 transition-colors duration-200",G?"border-zinc-800 bg-black/60":"border-zinc-200 bg-zinc-50/80"])},[k(Tn,{duration:20,"pause-on-hover":!0},{default:U(()=>[(f(),x(se,null,he(p,Y=>s("div",{key:Y,class:M(["flex h-12 items-center justify-center rounded-xl border px-6 font-bold text-xs shadow-xs transition-colors duration-200",G?"border-zinc-800 bg-zinc-900 text-zinc-200":"border-zinc-200 bg-white text-zinc-800"])},A(Y),3)),64))]),_:2},1024),s("div",{class:M(["pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r",G?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2),s("div",{class:M(["pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l",G?"from-black to-transparent":"from-zinc-50 to-transparent"])},null,2)],2)):a.value.id==="meteors"?(f(),x("div",{key:8,class:M(["relative flex h-80 w-full max-w-lg flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-2xl transition-colors duration-200",G?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-slate-900 text-white"])},[k(cd,{number:30}),s("div",X5,[v[56]||(v[56]=s("span",{class:"rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20"}," Meteor Shower ",-1)),k(I(Le),{class:"h-5 w-5 text-sky-400"})]),v[57]||(v[57]=s("div",{class:"relative z-10 space-y-2"},[s("h3",{class:"text-3xl font-black tracking-tight text-white"}," 赛博深空流星雨 "),s("p",{class:"text-xs text-zinc-400 leading-relaxed"}," 流星带有 50px 渐变光尾与随机延迟，全硬件加速流畅穿梭，卡片与 Hero 背景的氛围杀器。 ")],-1))],2)):a.value.id==="ripple"?(f(),x("div",{key:9,class:M(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",G?"border-zinc-800 bg-zinc-950 text-white":"border-zinc-200 bg-white text-zinc-900"])},[k(dd,{"main-circle-size":160,"num-circles":7}),s("div",W5,[s("div",Y5,[k(I(vo),{class:"h-7 w-7"})]),v[58]||(v[58]=s("div",{class:"rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-mono text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300"}," AI 智能语音拾音中... ",-1))])],2)):a.value.id==="number-ticker"?(f(),x("div",K5,[s("div",{class:M(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",G?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[s("div",Z5,[s("span",Q5,[k(ro,{value:99.99,"decimal-places":2})]),v[59]||(v[59]=s("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"%",-1))]),v[60]||(v[60]=s("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"SLA 生产高可用性",-1))],2),s("div",{class:M(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",G?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[s("div",J5,[s("span",ez,[k(ro,{value:1e7})]),v[61]||(v[61]=s("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"+",-1))]),v[62]||(v[62]=s("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"每日处理 Token 数量",-1))],2),s("div",{class:M(["rounded-2xl border px-3 sm:px-4 py-6 text-center shadow-xs transition-colors flex flex-col items-center justify-center",G?"border-zinc-800 bg-zinc-900/90":"border-zinc-200 bg-white"])},[s("div",tz,[s("span",nz,[k(ro,{value:12})]),v[63]||(v[63]=s("span",{class:"text-sm sm:text-base font-bold ml-0.5"},"ms",-1))]),v[64]||(v[64]=s("p",{class:"mt-2 text-xs font-medium text-zinc-500"},"端到端流式推理延迟",-1))],2)])):a.value.id==="animated-beam"?(f(),x("div",{key:11,class:M(["relative flex h-72 w-full max-w-xl items-center justify-between px-12 rounded-2xl border transition-colors duration-200",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"]),ref_key:"beamContainerRef",ref:t},[s("div",{ref_key:"beamUserRef",ref:n,class:M(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",G?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[k(I(Tc),{class:"h-6 w-6 text-blue-500"})],2),s("div",{ref_key:"beamAiRef",ref:r,class:"z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/40"},[k(I(Le),{class:"h-8 w-8"})],512),s("div",{ref_key:"beamDbRef",ref:o,class:M(["z-10 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-md",G?"border-zinc-700 bg-zinc-900 text-white":"border-zinc-200 bg-white text-zinc-800"])},[k(I(Es),{class:"h-6 w-6 text-indigo-500"})],2),k(wo,{"container-ref":t.value,"from-ref":n.value,"to-ref":r.value,duration:2.4},null,8,["container-ref","from-ref","to-ref"]),k(wo,{"container-ref":t.value,"from-ref":r.value,"to-ref":o.value,duration:2.4,delay:.6},null,8,["container-ref","from-ref","to-ref"])],2)):a.value.id==="lamp-effect"?(f(),x("div",rz,[k(ud,{class:"min-h-[420px]"},{default:U(()=>[...v[65]||(v[65]=[s("h2",{class:"bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-center text-3xl sm:text-5xl font-black tracking-tight text-transparent"}," Next-Gen AI Platform ",-1),s("p",{class:"mt-3 max-w-md text-xs sm:text-sm text-slate-400"}," 双向极光天灯破晓而下，为旗舰级 AI 与 SaaS 官网赋予大模型发布会视觉。 ",-1)])]),_:1})])):a.value.id==="flickering-grid"?(f(),x("div",{key:13,class:M(["relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl border p-6 transition-colors duration-200",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(pd,{"square-size":4,"grid-gap":5,"flicker-chance":.4,"max-opacity":.35,class:"absolute inset-0"}),s("div",oz,[s("div",sz,[k(I(Ps),{class:"h-3.5 w-3.5"}),v[66]||(v[66]=s("span",null,"Canvas 2D 智能矩阵",-1))]),s("h3",{class:M(["text-3xl font-black tracking-tight",G?"text-white":"text-zinc-900"])}," 呼吸噪波微光网格 ",2),s("p",{class:M(["mt-2 text-xs font-mono",G?"text-zinc-400":"text-zinc-500"])}," 微型粒子矩阵异步平滑呼吸闪烁，零 CPU 占用，极客感拉满 ",2)])],2)):a.value.id==="dock"?(f(),x("div",{key:14,class:M(["relative flex h-80 w-full items-end justify-center rounded-2xl border p-8 transition-colors duration-200",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[67]||(v[67]=s("div",{class:"absolute top-8 text-center"},[s("span",{class:"text-xs font-mono text-zinc-400"},"将鼠标在下方图标栏滑动，体验余弦高斯物理平滑放大与跟随 Tooltip")],-1)),k(tg,{items:u,"icon-size":44,"icon-magnification":68,"icon-distance":130})],2)):a.value.id==="orbit-logos"?(f(),x("div",{key:15,class:M(["relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",iz,[k(I(Le),{class:"h-8 w-8"})]),k(Zr,{radius:75,duration:16},{default:U(()=>[s("div",az,[k(I(no),{class:"h-4.5 w-4.5"})])]),_:1}),k(Zr,{radius:75,duration:16,delay:8},{default:U(()=>[s("div",lz,[k(I(tn),{class:"h-4.5 w-4.5"})])]),_:1}),k(Zr,{radius:135,duration:24,reverse:!0},{default:U(()=>[s("div",cz,[k(I(qn),{class:"h-5 w-5"})])]),_:1}),k(Zr,{radius:135,duration:24,delay:12,reverse:!0},{default:U(()=>[s("div",dz,[k(I(Es),{class:"h-5 w-5"})])]),_:1})],2)):a.value.id==="image-compare"?(f(),x("div",{key:16,class:M(["flex flex-col items-center justify-center w-full p-4 rounded-2xl border transition-colors duration-200",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",uz,[k(pg,{"before-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=70&sat=-100","after-image":"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=90","before-label":"原始黑白 (Raw)","after-label":"AI 智能全彩修复 (4K HDR)","initial-position":50,class:"h-full w-full shadow-2xl"})]),v[68]||(v[68]=s("p",{class:"mt-3 text-xs font-mono text-zinc-400"}," 按住中央手柄左右拖拽，体验基于 clip-path 视口裁切的双图前后对比 ",-1))],2)):a.value.id==="agent-status"?(f(),x("div",{key:17,class:M(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",pz,[(f(),x(se,null,he(["thinking","running","tool_call","success","error"],Y=>s("button",{key:Y,onClick:Br=>b.value=Y,class:M(["rounded-lg px-3 py-1.5 text-xs font-semibold transition-all capitalize",b.value===Y?"bg-blue-600 text-white shadow-xs":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"])},A(Y),11,fz)),64))]),k($g,{status:b.value,"agent-name":"DeepSeek R1 / Aura Reasoning","current-task":m[b.value]},null,8,["status","current-task"]),v[69]||(v[69]=s("p",{class:"text-xs font-mono text-zinc-400"}," 点击上方状态快速体验脉冲光环与徽标切换；点击卡片任意位置展开执行轨迹清单 ",-1))],2)):a.value.id==="typewriter-terminal"?(f(),x("div",{key:18,class:M(["flex flex-col items-center justify-center w-full p-6 rounded-2xl border transition-colors duration-200",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",mz,[k(Ug,{title:"zsh - aura-orchestrator:~ (80x24)","typing-speed":32,loop:!0})])],2)):a.value.id==="prompt-input"?(f(),x("div",{key:19,class:M(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",bz,[k(sh,{modelValue:h.value,"onUpdate:modelValue":v[0]||(v[0]=Y=>h.value=Y),loading:g.value,"selected-model":z.value,"onUpdate:selectedModel":v[1]||(v[1]=Y=>z.value=Y),placeholder:"向 Aura AI 提问、生成高阶动效代码，或输入 / 触发 Agent...",onSubmit:_,onStop:v[2]||(v[2]=Y=>g.value=!1)},null,8,["modelValue","loading","selected-model"])]),v[70]||(v[70]=s("p",{class:"text-xs font-mono text-zinc-400"}," 点击输入框体验聚焦顶部流光与高亮光晕，支持 Enter 发送、模拟 2.2s 思考生成态 ",-1))],2)):a.value.id==="thought-accordion"?(f(),x("div",{key:20,class:M(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-4",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",xz,[k(bh,{duration:"思考用时 8.2 秒",status:"complete","default-open":!0})]),v[71]||(v[71]=s("p",{class:"text-xs font-mono text-zinc-400"}," 对标 DeepSeek R1 / o1 思考链折叠机制，点击标题栏手风琴折叠收起，支持一键复制推演链路 ",-1))],2)):a.value.id==="fluid-tabs"?(f(),x("div",{key:21,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(gh,{modelValue:y.value,"onUpdate:modelValue":v[3]||(v[3]=Y=>y.value=Y),tabs:C},null,8,["modelValue"]),s("div",gz,[v[72]||(v[72]=s("div",{class:"text-xs font-mono text-zinc-500 dark:text-zinc-400"},"当前激活流体 Tab 项：",-1)),s("div",hz,A(y.value),1)]),v[73]||(v[73]=s("p",{class:"text-xs font-mono text-zinc-400"}," 鼠标在 Tab 间移动感受 Ghost 悬停幽灵胶囊；点击体验物理 Spring 平滑吸附 ",-1))],2)):a.value.id==="hold-to-confirm"?(f(),x("div",{key:22,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",vz,[k(oo,{variant:"danger",label:"长按以销毁生产集群",holdingLabel:"危险！保持按住不放...",confirmedLabel:"集群销毁指令已执行！",duration:1200,onConfirm:T}),k(oo,{variant:"warning",label:"长按重置 API 密钥",holdingLabel:"按住 1 秒重置...",confirmedLabel:"密钥已重置完成！",duration:1e3,onConfirm:T}),k(oo,{variant:"primary",label:"长按以极速同步",holdingLabel:"保持以连接网关...",confirmedLabel:"多云同步完成！",duration:800,onConfirm:T})]),s("div",yz,[v[74]||(v[74]=s("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 操作监听回执 ",-1)),w.value.length===0?(f(),x("div",wz," 按住上方任一按钮体验蓄力进度条，松手即取消，蓄满 100% 触发回执 ")):(f(),x("div",kz,[(f(!0),x(se,null,he(w.value,(Y,Br)=>(f(),x("div",{key:Br,class:"text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold"},A(Y),1))),128))]))]),v[75]||(v[75]=s("p",{class:"text-xs font-mono text-zinc-400"}," 具备 requestAnimationFrame 60fps 动态插值填充、松手平滑阻尼回退与成功态自动形变复位 ",-1))],2)):a.value.id==="confirm-morph"?(f(),x("div",{key:23,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",zz,[k(ds,{label:"彻底清空 Redis 缓存","confirm-text":"确认清空","cancel-text":"取消",variant:"danger",onConfirm:D}),k(ds,{label:"回滚至昨日版本","confirm-text":"确认回滚","cancel-text":"再想想",variant:"warning",onConfirm:D}),k(ds,{label:"切换主从节点","confirm-text":"立即切换","cancel-text":"取消",variant:"primary",onConfirm:D})]),s("div",_z,[v[76]||(v[76]=s("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5"}," 就地形变二次确认回执 ",-1)),F.value.length===0?(f(),x("div",Cz," 点击上方按钮原地分裂为确认和取消操作，零弹窗干扰心流 ")):(f(),x("div",Sz,[(f(!0),x(se,null,he(F.value,(Y,Br)=>(f(),x("div",{key:Br,class:"text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold"},A(Y),1))),128))]))]),v[77]||(v[77]=s("p",{class:"text-xs font-mono text-zinc-400"}," 内联原地形变布局（Inline FLIP Transition），无需全局遮罩即可实现安全防误触 ",-1))],2)):a.value.id==="icon-morph"?(f(),x("div",{key:24,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Mz,[s("div",Iz,[s("div",Az,[k(us,{modelValue:R.value,"onUpdate:modelValue":v[4]||(v[4]=Y=>R.value=Y),mode:"menu-close",size:28},null,8,["modelValue"])]),s("span",$z," Menu ↔ Close: "+A(R.value?"关闭":"展开"),1)]),s("div",Pz,[s("div",Tz,[k(us,{modelValue:L.value,"onUpdate:modelValue":v[5]||(v[5]=Y=>L.value=Y),mode:"play-pause",size:28},null,8,["modelValue"])]),s("span",Rz," Play ↔ Pause: "+A(L.value?"播放中":"暂停中"),1)]),s("div",Ez,[s("div",Fz,[k(us,{modelValue:Z.value,"onUpdate:modelValue":v[6]||(v[6]=Y=>Z.value=Y),mode:"plus-minus",size:28},null,8,["modelValue"])]),s("span",Lz," Plus ↔ Minus: "+A(Z.value?"已展开":"折叠"),1)])]),v[78]||(v[78]=s("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG 矢量几何坐标连续形变，硬件加速 60fps，零卡顿零抖动 ",-1))],2)):a.value.id==="action-button"?(f(),x("div",{key:25,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Dz,[k(lr,{icon:I(u0),active:le.value,tooltip:"钉选在首屏导航",onClick:v[7]||(v[7]=Y=>le.value=!le.value)},null,8,["icon","active"]),k(lr,{label:"生成动效代码",icon:I(Le),badge:"AI",tooltip:"一键生成 Vue 动效原子代码",onClick:v[8]||(v[8]=Y=>be.value++)},null,8,["icon"]),k(lr,{icon:I(Qp),active:q.value,tooltip:"收藏至组件集",onClick:v[9]||(v[9]=Y=>q.value=!q.value)},null,8,["icon","active"]),k(lr,{label:"大规格按钮",size:"lg",icon:I(ca),tooltip:"上传打包产物"},null,8,["icon"]),k(lr,{label:"禁用按钮",size:"sm",disabled:!0,tooltip:"当前权限不足"})]),s("div",Vz,[v[79]||(v[79]=$e(" AI 生成点击计数：",-1)),s("span",Oz,A(be.value),1),v[80]||(v[80]=$e(" 次 ",-1))]),v[81]||(v[81]=s("p",{class:"text-xs font-mono text-zinc-400"}," 配备精准物理弹簧缩放阻尼（active:scale-90）与微拟态悬停反馈 ",-1))],2)):a.value.id==="split-button"?(f(),x("div",{key:26,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Bz,[k(Oa,{label:"立即发布到生产环境",icon:I(yr),variant:"primary",onPrimaryClick:ze,onSelect:Q},null,8,["icon"]),k(Oa,{label:"导出代码包",icon:I(ca),variant:"secondary",items:[{id:"zip",label:"下载 ZIP 压缩包",description:"包含全部 SFC 组件与 CSS 变量"},{id:"git",label:"推送到 GitHub PR",description:"自动分支并创建协同审查"},{id:"npm",label:"发布至私有 NPM",description:"生成统一 Package 包"}],onPrimaryClick:ze,onSelect:Q},null,8,["icon"])]),s("div",jz,[v[82]||(v[82]=s("div",{class:"text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1"}," 分体按钮操作回执 ",-1)),s("div",Nz,A(_e.value),1)]),v[83]||(v[83]=s("p",{class:"text-xs font-mono text-zinc-400"}," 主操作与下拉伴随操作一体化，物理发丝分割线，自适应点击区域与弹簧菜单 ",-1))],2)):a.value.id==="reactions"?(f(),x("div",{key:27,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Hz,[k(Ba)]),s("div",Gz,[v[84]||(v[84]=s("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3"}," 自定义反应项展示： ",-1)),k(Ba,{items:[{id:"vue",emoji:"💚",count:1024,active:!0},{id:"speed",emoji:"⚡",count:512,active:!1},{id:"magic",emoji:"✨",count:888,active:!0},{id:"100",emoji:"💯",count:99,active:!1}]})]),v[85]||(v[85]=s("p",{class:"text-xs font-mono text-zinc-400"}," 点击任一表情体验 Spring 弹簧弹性放大与实时翻滚计数，支持添加自定义表情 ",-1))],2)):a.value.id==="scrub-input"?(f(),x("div",{key:28,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Uz,[k(ps,{modelValue:te.value,"onUpdate:modelValue":v[10]||(v[10]=Y=>te.value=Y),label:"宽度 (W)",min:120,max:640,suffix:"px"},null,8,["modelValue"]),k(ps,{modelValue:W.value,"onUpdate:modelValue":v[11]||(v[11]=Y=>W.value=Y),label:"圆角 (R)",min:0,max:48,suffix:"px"},null,8,["modelValue"]),k(ps,{modelValue:we.value,"onUpdate:modelValue":v[12]||(v[12]=Y=>we.value=Y),label:"不透明度 (A)",min:10,max:100,suffix:"%"},null,8,["modelValue"])]),s("div",qz,[s("div",{class:"flex h-24 items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-mono text-xs font-bold shadow-lg transition-all duration-75",style:fe({width:`${te.value/2}px`,borderRadius:`${W.value}px`,opacity:we.value/100})}," 实时微调形态: "+A(Math.round(te.value/2))+" × 96px ",5)]),v[86]||(v[86]=s("p",{class:"text-xs font-mono text-zinc-400"}," 按住 Label 左右横向拖动（按住 Shift 加速 10x，Alt 微调 0.1x），双击数值切换精准键盘输入 ",-1))],2)):a.value.id==="password-strength"?(f(),x("div",{key:29,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Xz,[k(ev,{modelValue:J.value,"onUpdate:modelValue":v[13]||(v[13]=Y=>J.value=Y)},null,8,["modelValue"])]),v[87]||(v[87]=s("p",{class:"text-xs font-mono text-zinc-400"}," 包含大写/小写/数字/特殊符号/长度 5 维动态校验，进度条平滑渐变与明暗文无缝切换 ",-1))],2)):a.value.id==="money-input"?(f(),x("div",{key:30,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Wz,[k(cv,{modelValue:Re.value,"onUpdate:modelValue":v[14]||(v[14]=Y=>Re.value=Y),currency:Me.value,"onUpdate:currency":v[15]||(v[15]=Y=>Me.value=Y)},null,8,["modelValue","currency"])]),s("div",Yz,[v[88]||(v[88]=$e(" 底层双向绑定数据：",-1)),s("span",Kz,A(Me.value)+" "+A(Re.value),1)]),v[89]||(v[89]=s("p",{class:"text-xs font-mono text-zinc-400"}," 金额过长时字号动态自适应缩放（text-4xl → text-xl），支持千分位格式化与一键药丸快捷填充 ",-1))],2)):a.value.id==="phone-input"?(f(),x("div",{key:31,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Zz,[k(kv,{modelValue:ot.value,"onUpdate:modelValue":v[16]||(v[16]=Y=>ot.value=Y),"country-code":Ue.value,"onUpdate:countryCode":v[17]||(v[17]=Y=>Ue.value=Y)},null,8,["modelValue","country-code"])]),s("div",Qz,[v[90]||(v[90]=$e(" 选中地区：",-1)),s("span",Jz,A(Ue.value),1),v[91]||(v[91]=$e(" · 输入号码：",-1)),s("span",e4,A(ot.value||"(未输入)"),1)]),v[92]||(v[92]=s("p",{class:"text-xs font-mono text-zinc-400"}," 支持中国 (### #### ####)、美国 ((###) ###-####) 等多国区号格式自适应与完成态对勾反馈 ",-1))],2)):a.value.id==="tag-input"?(f(),x("div",{key:32,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",t4,[k(Iv,{modelValue:Te.value,"onUpdate:modelValue":v[18]||(v[18]=Y=>Te.value=Y),"max-tags":8},null,8,["modelValue"])]),s("div",n4,[v[93]||(v[93]=$e(" 当前标签数组：",-1)),s("span",r4,A(JSON.stringify(Te.value)),1)]),v[94]||(v[94]=s("p",{class:"text-xs font-mono text-zinc-400"}," 回车/逗号自动生成标签胶囊，退格键按序反向删除，配备弹性进退场动效与最大数量上限 ",-1))],2)):a.value.id==="mention-input"?(f(),x("div",{key:33,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",o4,[k(Gv,{modelValue:Ce.value,"onUpdate:modelValue":v[19]||(v[19]=Y=>Ce.value=Y)},null,8,["modelValue"])]),v[95]||(v[95]=s("p",{class:"text-xs font-mono text-zinc-400"}," 键入 @ 呼出团队成员与 AI 智能体候选菜单，支持键盘上下光标漫游与 Tab/Enter 高亮注入 ",-1))],2)):a.value.id==="segmented-control"?(f(),x("div",{key:34,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",s4,[k(Ns,{modelValue:O.value,"onUpdate:modelValue":v[20]||(v[20]=Y=>O.value=Y),options:ce,size:"md"},null,8,["modelValue"]),k(Ns,{modelValue:O.value,"onUpdate:modelValue":v[21]||(v[21]=Y=>O.value=Y),options:[{id:"preview",label:"天"},{id:"code",label:"周"},{id:"docs",label:"月"}],size:"sm"},null,8,["modelValue"])]),s("div",i4,[v[96]||(v[96]=$e(" 当前激活项：",-1)),s("span",a4,A(O.value),1)]),v[97]||(v[97]=s("p",{class:"text-xs font-mono text-zinc-400"}," iOS / macOS 风格物理弹簧滑块，支持左右方向键键盘导航与尺寸自适应 ",-1))],2)):a.value.id==="breadcrumb-trail"?(f(),x("div",{key:35,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",l4,[v[98]||(v[98]=s("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-4"}," 折叠模式（最大显示 3 项，中间自动收纳为浮层气泡）： ",-1)),k(ja,{items:X,"max-items":3})]),s("div",c4,[v[99]||(v[99]=s("div",{class:"text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-4"}," 全展开模式： ",-1)),k(ja,{items:X,"max-items":10})]),v[100]||(v[100]=s("p",{class:"text-xs font-mono text-zinc-400"}," 层级过深时自动将中间路径收纳为省略号，点击呼出扩散柔和阴影下拉浮层 ",-1))],2)):a.value.id==="floating-action-menu"?(f(),x("div",{key:36,class:M(["relative flex flex-col items-center justify-center w-full min-h-[380px] p-10 rounded-2xl border transition-colors duration-200 gap-6 overflow-hidden",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",d4,[v[101]||(v[101]=s("div",{class:"text-sm font-bold text-zinc-800 dark:text-zinc-100"}," 点击右下角浮动动作药丸（FAB）体验交错弹簧飞出 ",-1)),s("div",u4," 最新触发："+A(ge.value),1)]),s("div",p4,[k(u1,{actions:S,tooltip:"快捷动效与部署工具箱"})]),v[102]||(v[102]=s("p",{class:"text-xs font-mono text-zinc-400"}," 135° 顺滑旋转切换图标，子动作级联平滑缩放飞入，配备毛玻璃浮动标签 ",-1))],2)):a.value.id==="navbar-hover"?(f(),x("div",{key:37,class:M(["flex flex-col items-center justify-start w-full min-h-[380px] p-10 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",f4,[k(z1,{items:$,onSelect:v[22]||(v[22]=Y=>E.value=Y.title)})]),s("div",m4,[v[103]||(v[103]=$e(" 选中的导航二级特性：",-1)),s("span",b4,A(E.value),1)]),v[104]||(v[104]=s("p",{class:"text-xs font-mono text-zinc-400"}," 对标 Stripe / Vercel 巨型悬浮下拉菜单，顶部箭头与卡片自适应尺寸平滑跟随 ",-1))],2)):a.value.id==="pagination-slider"?(f(),x("div",{key:38,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",x4,[k(E1,{modelValue:V.value,"onUpdate:modelValue":v[23]||(v[23]=Y=>V.value=Y),"total-pages":20,"show-slider":!0},null,8,["modelValue"])]),s("div",g4,[v[105]||(v[105]=$e(" 当前激活页码：第 ",-1)),s("span",h4,A(V.value),1),v[106]||(v[106]=$e(" 页 / 共 20 页 ",-1))]),v[107]||(v[107]=s("p",{class:"text-xs font-mono text-zinc-400"}," 传统分页按钮与触感快速拖动滑块合二为一，极大提升大跨度翻页效率 ",-1))],2)):a.value.id==="circular-progress-nav"?(f(),x("div",{key:39,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",v4,[k(fs,{progress:B.value,size:64,"stroke-width":5,onClick:j},null,8,["progress"]),k(fs,{progress:100,size:52,"stroke-width":4,tooltip:"进度已满"}),k(fs,{progress:35,size:48,"stroke-width":3.5,tooltip:"初始化 35%"})]),s("div",y4,[s("button",{type:"button",onClick:v[24]||(v[24]=Y=>B.value=Math.max(0,B.value-10)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"}," -10% "),s("div",w4,[v[108]||(v[108]=$e(" 当前进度：",-1)),s("span",k4,A(B.value)+"%",1)]),s("button",{type:"button",onClick:v[25]||(v[25]=Y=>B.value=Math.min(100,B.value+10)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"}," +10% ")]),v[109]||(v[109]=s("p",{class:"text-xs font-mono text-zinc-400"}," SVG 矢量环形进度指示器，支持平滑 stroke-dashoffset 阻尼形变与微拟态按压 ",-1))],2)):a.value.id==="glowing-card"?(f(),x("div",{key:40,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",z4,[k(Na,{duration:4,blur:20,class:"w-full"},{default:U(()=>[s("div",_4,[s("div",C4,[k(I(Le),{class:"h-5 w-5"})]),v[110]||(v[110]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"常驻流光卡片"),s("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 底层 360° 匀速旋转弥散光斑，顶层 1px 细微发丝发光轮廓贴合容器。 ")],-1))])]),_:1}),k(Na,{duration:3,blur:24,"hover-only":!0,"glow-color":"conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)",class:"w-full"},{default:U(()=>[s("div",S4,[s("div",M4,[k(I(yr),{class:"h-5 w-5"})]),v[111]||(v[111]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"悬停激发流光"),s("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 鼠标移入时瞬间唤醒炫彩流光外框，移出平滑消隐，极致节能。 ")],-1))])]),_:1})]),v[112]||(v[112]=s("p",{class:"text-xs font-mono text-zinc-400"}," 双层流光结构：底层空气感多层模糊扩散 + 顶层发丝剪裁遮罩 ",-1))],2)):a.value.id==="glass-card"?(f(),x("div",{key:41,class:M(["relative flex flex-col items-center justify-center w-full min-h-[360px] p-10 rounded-2xl border transition-colors duration-200 gap-6 overflow-hidden",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-100"])},[v[115]||(v[115]=s("div",{class:"absolute -top-10 -left-10 h-48 w-48 rounded-full bg-blue-500/30 blur-2xl pointer-events-none"},null,-1)),v[116]||(v[116]=s("div",{class:"absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-purple-500/30 blur-2xl pointer-events-none"},null,-1)),v[117]||(v[117]=s("div",{class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none"},null,-1)),s("div",I4,[k(Ha,{blur:16,saturation:180,class:"w-full"},{default:U(()=>[s("div",A4,[s("div",$4,[k(I(Bt),{class:"h-5 w-5"})]),v[113]||(v[113]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"磨砂亚克力玻璃"),s("p",{class:"mt-1 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed"}," 16px 硬件加速环境背板虚化，180% 鲜明色彩透光增益，顶部物理倒角高光线。 ")],-1))])]),_:1}),k(Ha,{blur:24,saturation:200,class:"w-full"},{default:U(()=>[s("div",P4,[s("div",T4,[k(I(no),{class:"h-5 w-5"})]),v[114]||(v[114]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"微拟态浮升反馈"),s("p",{class:"mt-1 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed"}," 悬停触发 -translate-y-1 与多层柔和深色阴影扩展，质感高级灵动。 ")],-1))])]),_:1})]),v[118]||(v[118]=s("p",{class:"text-xs font-mono text-zinc-400 relative z-10"}," 双层背板折射滤镜 + 顶部高折射率物理反光发丝线，完美抗锯齿 ",-1))],2)):a.value.id==="spotlight-card"?(f(),x("div",{key:42,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",R4,[k(Ga,{"spotlight-radius":280,"spotlight-color":"rgba(59, 130, 246, 0.18)",class:"w-full"},{default:U(()=>[s("div",E4,[s("div",F4,[k(I(tn),{class:"h-5 w-5"})]),v[119]||(v[119]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"极客蓝聚光灯"),s("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 鼠标在卡片上方滑行时，柔和径向聚光灯在卡片表面与 1px 发丝边框上同步聚焦漫射。 ")],-1))])]),_:1}),k(Ga,{"spotlight-radius":280,"spotlight-color":"rgba(168, 85, 247, 0.18)",class:"w-full"},{default:U(()=>[s("div",L4,[s("div",D4,[k(I(Nn),{class:"h-5 w-5"})]),v[120]||(v[120]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"幻境紫聚光灯"),s("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 边框与内表面联动感知光标相对坐标，移开卡片时光晕平滑消退。 ")],-1))])]),_:1})]),v[121]||(v[121]=s("p",{class:"text-xs font-mono text-zinc-400"}," 滑动光标在两张卡片间移动体验相对坐标实时动态漫反射追踪 ",-1))],2)):a.value.id==="tilt-card"?(f(),x("div",{key:43,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",V4,[k(W1,{"max-tilt":16,perspective:1e3,glare:!0,class:"w-full"},{default:U(()=>[s("div",O4,[s("div",B4,[k(I(Nn),{class:"h-7 w-7"})]),v[122]||(v[122]=s("h4",{class:"mt-4 text-base font-bold text-zinc-900 dark:text-white [transform:translateZ(30px)]"}," 3D 视差空间陀螺仪 ",-1)),v[123]||(v[123]=s("p",{class:"mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed [transform:translateZ(20px)]"}," 光标在卡片内部移动时计算精确三维旋转量，卡片表面覆盖全息反光遮罩（Glare Sheen），图标具备悬浮纵深感。 ",-1)),v[124]||(v[124]=s("div",{class:"mt-4 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 [transform:translateZ(25px)]"}," 移入并晃动光标体验视差 ",-1))])]),_:1})]),v[125]||(v[125]=s("p",{class:"text-xs font-mono text-zinc-400"}," 基于 CSS 3D 变换 rotateX / rotateY + 动态全息反光层 + 子元素 translateZ 纵深 ",-1))],2)):a.value.id==="card-stack"?(f(),x("div",{key:44,class:M(["flex flex-col items-center justify-center w-full min-h-[420px] p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(sy,{items:K,"max-visible":3,onSwipe:oe}),s("div",j4,[v[126]||(v[126]=$e(" 卡片划动监听：",-1)),s("span",N4,A(re.value),1)]),v[127]||(v[127]=s("p",{class:"text-xs font-mono text-zinc-400"}," 按住第一张卡片左右拖动划走（带旋转与阻尼），或使用下方按钮翻阅卡片 ",-1))],2)):a.value.id==="noise-card"?(f(),x("div",{key:45,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",H4,[k(Ua,{gradient:"linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(147, 51, 234, 0.16))","grain-opacity":.14,animated:!0,class:"w-full"},{default:U(()=>[s("div",G4,[s("div",U4,[k(I(r0),{class:"h-5 w-5"})]),v[128]||(v[128]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"电影胶片噪点"),s("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 纯原生 SVG 分形噪点算法，微动态颗粒感赋予深色表面温润触感。 ")],-1))])]),_:1}),k(Ua,{gradient:"linear-gradient(135deg, rgba(16, 185, 129, 0.16), rgba(245, 158, 11, 0.16))","grain-opacity":.16,animated:!0,class:"w-full"},{default:U(()=>[s("div",q4,[s("div",X4,[k(I(Le),{class:"h-5 w-5"})]),v[129]||(v[129]=s("div",null,[s("h4",{class:"font-bold text-zinc-900 dark:text-white"},"极光破晓噪点"),s("p",{class:"mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed"}," 绿橙渐变底色透过分形颗粒漫射，质感对标高端胶片暗房摄影美学。 ")],-1))])]),_:1})]),v[130]||(v[130]=s("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG feTurbulence 动态渲染分形噪点，0 外部图片依赖，体积超轻 ",-1))],2)):a.value.id==="sparkline"?(f(),x("div",{key:46,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",W4,[s("div",Y4,[v[131]||(v[131]=s("div",{class:"flex items-center justify-between w-full"},[s("span",{class:"text-xs font-bold text-zinc-500"},"API 吞吐请求量"),s("span",{class:"text-xs font-mono font-bold text-blue-500"},"+38.2%")],-1)),k(Hs,{data:H.value,width:280,height:80,color:"#3b82f6",fill:!0,"format-value":Y=>`${Y} k/s`},null,8,["data","format-value"])]),s("div",K4,[v[132]||(v[132]=s("div",{class:"flex items-center justify-between w-full"},[s("span",{class:"text-xs font-bold text-zinc-500"},"内存缓存命中率"),s("span",{class:"text-xs font-mono font-bold text-emerald-500"},"99.4%")],-1)),k(Hs,{data:[88,91,89,94,92,96,95,98,97,99],width:280,height:80,color:"#10b981",fill:!0,"format-value":Y=>`${Y}%`},null,8,["format-value"])])]),v[133]||(v[133]=s("p",{class:"text-xs font-mono text-zinc-400"}," 纯 SVG 贝塞尔曲线平滑插值路径，移动光标体验垂直辅助虚线、触点微缩放与数值浮层 ",-1))],2)):a.value.id==="animated-counter"?(f(),x("div",{key:47,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",Z4,[v[134]||(v[134]=s("span",{class:"text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider"}," 实时经常性收入 (MRR) ",-1)),s("div",Q4,[k(fd,{value:ve.value,prefix:"¥",decimals:0,duration:1200,"trend-color":!0},null,8,["value"])])]),s("div",J4,[s("button",{type:"button",onClick:v[26]||(v[26]=Y=>ae(-15e3)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," -15,000 "),s("button",{type:"button",onClick:v[27]||(v[27]=Y=>ae(-2500)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," -2,500 "),s("button",{type:"button",onClick:v[28]||(v[28]=Y=>ae(5e3)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," +5,000 "),s("button",{type:"button",onClick:v[29]||(v[29]=Y=>ae(32800)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-mono font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," +32,800 ")]),v[135]||(v[135]=s("p",{class:"text-xs font-mono text-zinc-400"}," 基于 requestAnimationFrame 非线性指数衰减缓动插值，点击数值体验红/绿涨跌高亮与千分位 ",-1))],2)):a.value.id==="radial-gauge"?(f(),x("div",{key:48,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",e3,[k(bs,{value:xe.value,"onUpdate:value":v[30]||(v[30]=Y=>xe.value=Y),label:"集群 CPU 负载",unit:"%",size:180,thresholds:!0,draggable:""},null,8,["value"]),k(bs,{value:94,label:"危险阈值 (红区)",unit:"%",size:150,thresholds:!0}),k(bs,{value:38,label:"健康阈值 (绿区)",unit:"%",size:150,thresholds:!0})]),s("div",t3,[s("button",{type:"button",onClick:v[31]||(v[31]=Y=>xe.value=Math.max(0,xe.value-15)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," -15% "),s("div",n3,[v[136]||(v[136]=$e(" 当前负载：",-1)),s("span",r3,A(xe.value)+"%",1)]),s("button",{type:"button",onClick:v[32]||(v[32]=Y=>xe.value=Math.min(100,xe.value+15)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," +15% ")]),v[137]||(v[137]=s("p",{class:"text-xs font-mono text-zinc-400"}," 240° 大弧度科技仪表盘，拖动末端圆点或点击轨道即可调节数值，跨越 75%/90% 临界点时自适应变色 ",-1))],2)):a.value.id==="progress-steps"?(f(),x("div",{key:49,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",o3,[k(jy,{"current-step":ye.value,"onUpdate:currentStep":v[33]||(v[33]=Y=>ye.value=Y),steps:Ae},null,8,["current-step"])]),s("div",s3,[s("button",{type:"button",disabled:ye.value<=1,onClick:v[34]||(v[34]=Y=>ye.value=Math.max(1,ye.value-1)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 disabled:opacity-40 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," 上一步 ",8,i3),s("div",a3,[v[138]||(v[138]=$e(" 当前阶段：",-1)),s("span",l3,"第 "+A(ye.value)+" 步（"+A((Xt=Ae[ye.value-1])==null?void 0:Xt.title)+"）",1)]),s("button",{type:"button",disabled:ye.value>=Ae.length,onClick:v[35]||(v[35]=Y=>ye.value=Math.min(Ae.length,ye.value+1)),class:"rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium hover:bg-zinc-100 disabled:opacity-40 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," 下一步 ",8,c3)]),v[139]||(v[139]=s("p",{class:"text-xs font-mono text-zinc-400"}," 完成节点弹性放大打勾形变，当前节点呼吸光晕，连接线渐变流动填充 ",-1))],2)):a.value.id==="comparison-matrix"?(f(),x("div",{key:50,class:M(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",d3,[k(nw,{modelValue:Ye.value,"onUpdate:modelValue":v[36]||(v[36]=Y=>Ye.value=Y),plans:Be,features:je},null,8,["modelValue"])]),s("div",u3,[v[140]||(v[140]=$e(" 当前选择：",-1)),s("span",p3,A((yi=Be.find(Y=>Y.id===Ye.value))==null?void 0:yi.name),1)]),v[141]||(v[141]=s("p",{class:"text-xs font-mono text-zinc-400"}," 点击套餐卡片切换高亮选中，整行悬停高亮，支持布尔值对勾/减号与自定义参数说明 ",-1))],2)):a.value.id==="stat-card"?(f(),x("div",{key:51,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",f3,[k(qa,{title:"分布式网关吞吐量",value:89240,suffix:" TPS",change:18.5,"change-period":"较昨日","trend-data":tt,icon:I(Ps),color:"#3b82f6",class:"w-full"},null,8,["icon"]),k(qa,{title:"活跃 Agent 会话数",value:14380,suffix:" 个",change:-2.4,"change-period":"较上周","trend-data":[65,58,62,54,49,52,48,44],icon:I(Bn),color:"#ec4899",class:"w-full"},null,8,["icon"])]),v[142]||(v[142]=s("p",{class:"text-xs font-mono text-zinc-400"}," 整合主标题、大字号平滑计数器、环比涨跌徽标与嵌入式 Mini Sparkline 趋势微图 ",-1))],2)):a.value.id==="command-dialog"?(f(),x("div",{key:52,class:M(["flex flex-col items-center justify-center w-full p-12 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[144]||(v[144]=s("div",{class:"text-center space-y-2"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"macOS / Raycast 仿生快捷命令浮层"),s("p",{class:"text-xs text-zinc-500 max-w-md"},[$e(" 按下键盘快捷键 "),s("kbd",{class:"px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 font-mono text-zinc-800 dark:text-zinc-200"},"⌘K"),$e(" 或 "),s("kbd",{class:"px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 font-mono text-zinc-800 dark:text-zinc-200"},"Ctrl+K"),$e("，或点击下方按钮呼出 ")])],-1)),s("button",{type:"button",onClick:v[37]||(v[37]=Y=>kt.value=!0),class:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"},[...v[143]||(v[143]=[s("span",null,"呼出快捷命令中心",-1),s("span",{class:"px-1.5 py-0.5 rounded bg-white/20 dark:bg-zinc-900/10 font-mono text-xs"},"⌘K",-1)])]),k(kw,{modelValue:kt.value,"onUpdate:modelValue":v[38]||(v[38]=Y=>kt.value=Y)},null,8,["modelValue"])],2)):a.value.id==="slide-over-drawer"?(f(),x("div",{key:53,class:M(["flex flex-col items-center justify-center w-full p-12 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[146]||(v[146]=s("div",{class:"text-center space-y-2"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"平滑弹力侧滑抽屉面板"),s("p",{class:"text-xs text-zinc-500 max-w-md"}," 支持从屏幕左侧或右侧优雅滑入，具备遮罩毛玻璃虚化、贝塞尔弹性曲线与键盘 ESC 快捷收起 ")],-1)),s("div",m3,[s("button",{type:"button",onClick:v[39]||(v[39]=Y=>{qt.value="right",pt.value=!0}),class:"px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium text-xs shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"}," 右侧滑出抽屉 (Right) "),s("button",{type:"button",onClick:v[40]||(v[40]=Y=>{qt.value="left",pt.value=!0}),class:"px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 font-medium text-xs hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all cursor-pointer"}," 左侧滑出抽屉 (Left) ")]),k(Aw,{modelValue:pt.value,"onUpdate:modelValue":v[41]||(v[41]=Y=>pt.value=Y),side:qt.value,title:"工作空间偏好设置",description:"自定义动效渲染引擎与交互行为参数"},{footer:U(({close:Y})=>[s("div",b3,[s("button",{type:"button",onClick:Y,class:"px-3.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"}," 取消 ",8,x3),s("button",{type:"button",onClick:Y,class:"px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs text-white font-medium shadow-md shadow-blue-500/20 transition-colors cursor-pointer"}," 保存设置 ",8,g3)])]),default:U(()=>[v[145]||(v[145]=s("div",{class:"space-y-4 text-xs text-zinc-600 dark:text-zinc-300"},[s("div",{class:"p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50"},[s("p",{class:"font-semibold text-zinc-900 dark:text-white mb-1"},"物理触感反馈"),s("p",{class:"text-zinc-500"},"开启后将激活微震动缓动曲线与 60fps 动量插值。")]),s("div",{class:"p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50"},[s("p",{class:"font-semibold text-zinc-900 dark:text-white mb-1"},"GPU 硬件加速层"),s("p",{class:"text-zinc-500"},"自动提升 transform 与 will-change 渲染层级。")])],-1))]),_:1},8,["modelValue","side"])],2)):a.value.id==="floating-popover"?(f(),x("div",{key:54,class:M(["flex flex-col items-center justify-center w-full p-16 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[151]||(v[151]=s("div",{class:"text-center space-y-2"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"微动浮动气泡浮层"),s("p",{class:"text-xs text-zinc-500 max-w-md"}," 多层扩散弥散投影（Diffuse Popover Shadow）、精细定位指针以及 Outside Click 智能点击闭合 ")],-1)),s("div",h3,[k(Xa,{placement:"bottom",width:"w-80"},{trigger:U(()=>[...v[147]||(v[147]=[s("button",{class:"px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"}," 向下弹出气泡 (Bottom) ▾ ",-1)])]),default:U(()=>[v[148]||(v[148]=s("div",{class:"space-y-2"},[s("div",{class:"flex items-center gap-2"},[s("span",{class:"w-2 h-2 rounded-full bg-emerald-500"}),s("h4",{class:"text-xs font-bold text-zinc-900 dark:text-white"},"节点集群状态正常")]),s("p",{class:"text-[11px] text-zinc-500 leading-relaxed"}," 当前延迟为 14ms，已成功连接至东亚边缘网关。点击浮层外部任何区域即可自动收起。 ")],-1))]),_:1}),k(Xa,{placement:"top",width:"w-72"},{trigger:U(()=>[...v[149]||(v[149]=[s("button",{class:"px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all cursor-pointer"}," 向上弹出提示 (Top) ▴ ",-1)])]),default:U(()=>[v[150]||(v[150]=s("div",{class:"space-y-1.5"},[s("h4",{class:"text-xs font-bold text-zinc-900 dark:text-white"},"微型信息摘要"),s("p",{class:"text-[11px] text-zinc-500"}," 支持四向对齐与极简无缝插槽定制。 ")],-1))]),_:1})])],2)):a.value.id==="context-menu"?(f(),x("div",{key:55,class:M(["flex flex-col items-center justify-center w-full p-10 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[153]||(v[153]=s("div",{class:"text-center space-y-2"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"桌面级右键上下文菜单"),s("p",{class:"text-xs text-zinc-500 max-w-md"}," 在下方热区中点击鼠标右键触发。具备屏幕视口边界碰撞贴边算法、快捷键徽标与危险项高亮 ")],-1)),s("div",v3,[k(Dw,{items:Vr},{default:U(()=>[...v[152]||(v[152]=[s("div",{class:"h-52 w-full flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 p-6 text-center select-none cursor-context-menu hover:border-emerald-500/50 transition-colors"},[s("div",{class:"w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-lg mb-3"}," 🖱️ "),s("span",{class:"text-sm font-semibold text-zinc-800 dark:text-zinc-200"}," 在此虚线区域内点击【鼠标右键】 "),s("span",{class:"text-xs text-zinc-400 mt-1 font-mono"}," 自动定位并计算视口边缘防溢出 ")],-1)])]),_:1})])],2)):a.value.id==="toast-notification"?(f(),x("div",{key:56,class:M(["flex flex-col items-center justify-center w-full p-12 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[154]||(v[154]=s("div",{class:"text-center space-y-2"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"物理堆叠浮动消息吐司"),s("p",{class:"text-xs text-zinc-500 max-w-md"}," 多状态反馈（Success / Error / Warning / Info），支持自动倒计时、平滑弹性动画与多通道堆叠排布 ")],-1)),s("div",y3,[s("button",{type:"button",onClick:v[42]||(v[42]=Y=>ft("success")),class:"px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold hover:bg-emerald-500/20 active:scale-95 transition-all cursor-pointer"}," ✓ 触发成功吐司 "),s("button",{type:"button",onClick:v[43]||(v[43]=Y=>ft("error")),class:"px-4 py-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-xs font-semibold hover:bg-rose-500/20 active:scale-95 transition-all cursor-pointer"}," ✕ 触发错误吐司 "),s("button",{type:"button",onClick:v[44]||(v[44]=Y=>ft("warning")),class:"px-4 py-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-semibold hover:bg-amber-500/20 active:scale-95 transition-all cursor-pointer"}," ⚠ 触发警告吐司 "),s("button",{type:"button",onClick:v[45]||(v[45]=Y=>ft("info")),class:"px-4 py-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-semibold hover:bg-blue-500/20 active:scale-95 transition-all cursor-pointer"}," ℹ 触发提示吐司 ")]),v[155]||(v[155]=s("p",{class:"text-xs font-mono text-zinc-400"}," 观察右下角的消息弹层堆叠效果（可手动点击关闭或悬停暂停） ",-1)),k(Gw,{toasts:st.value,position:"bottom-right",onClose:Or},null,8,["toasts"])],2)):a.value.id==="dropdown-menu"?(f(),x("div",{key:57,class:M(["flex flex-col items-center justify-center w-full p-16 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[156]||(v[156]=s("div",{class:"text-center space-y-2"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"高触感选项下拉菜单"),s("p",{class:"text-xs text-zinc-500 max-w-md"}," 支持单选 Radio、复选 Checkbox、分组标题、分割线、键盘上下箭头导航与全套深浅色自适应弥散阴影 ")],-1)),s("div",w3,[k(Wa,{"trigger-text":"工作空间操作",align:"left",width:"w-60",onSelect:vi}),k(Wa,{"trigger-text":"偏好与视图 ▾",align:"right",width:"w-56",onSelect:vi})]),s("div",k3," 最近交互："+A(tr.value),1)],2)):a.value.id==="globe-3d"?(f(),x("div",{key:58,class:M(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[157]||(v[157]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"Canvas 交互式数字孪生旋转地球仪"),s("p",{class:"text-xs text-zinc-500 font-mono"},"鼠标按住任意拖拽球面 · 惯性平滑阻尼 · 脉冲城市锚点与三维大圆流光飞线")],-1)),k(uk,{size:380})],2)):a.value.id==="vortex"?(f(),x("div",{key:59,class:M(["flex flex-col items-center justify-center w-full p-6 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",z3,[k(pk,{"particle-count":260,"base-speed":.16,class:"flex h-full flex-col items-center justify-center p-6 text-center"},{default:U(()=>[...v[158]||(v[158]=[s("h2",{class:"text-3xl font-black text-white tracking-wider drop-shadow-md"}," 引力涡旋时空曲率 ",-1),s("p",{class:"mt-2 text-xs font-mono text-zinc-300 max-w-sm"}," 移动鼠标扰动引力奇点中心，微粒随角速度向心衰减并留下拖尾光晕 ",-1)])]),_:1})])],2)):a.value.id==="sparkles-core"?(f(),x("div",{key:60,class:M(["flex flex-col items-center justify-center w-full p-6 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",_3,[k(md,{"particle-density":160,"particle-color":"#38bdf8","min-size":.6,"max-size":2,speed:1.2,class:"absolute inset-0"}),v[159]||(v[159]=s("div",{class:"relative z-10 text-center space-y-2 pointer-events-none"},[s("span",{class:"inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"}," AURA SPARKLES "),s("h2",{class:"text-3xl sm:text-4xl font-black text-white tracking-widest"}," 星芒晶体闪烁矩阵 "),s("p",{class:"text-xs font-mono text-zinc-400"}," 微型发光粒子升腾漂浮 · 明暗无级呼吸插值 ")],-1))])],2)):a.value.id==="gravity-cards"?(f(),x("div",{key:61,class:M(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[160]||(v[160]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"重力与物理碰撞掉落卡片沙盒"),s("p",{class:"text-xs text-zinc-500 font-mono"},"欧拉数值积分 · 自由落体加速度 · 刚体摩擦与反弹弹性恢复")],-1)),s("div",C3,[k(xk,{class:"h-80"})])],2)):a.value.id==="perspective-grid"?(f(),x("div",{key:62,class:M(["flex flex-col items-center justify-center w-full p-6 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[s("div",S3,[k(yk,{speed:14,class:"h-80"},{default:U(()=>[...v[161]||(v[161]=[s("div",{class:"space-y-3"},[s("h2",{class:"text-3xl sm:text-4xl font-black text-white tracking-widest drop-shadow-lg"}," CYBER HORIZON 3D "),s("p",{class:"text-xs font-mono text-cyan-300 max-w-md mx-auto"}," CSS 3D 透视视界与 Z 轴无级平滑循环推进，搭配顶部极光破晓霞光 ")],-1)])]),_:1})])],2)):a.value.id==="fluid-cursor"?(f(),x("div",{key:63,class:M(["flex flex-col items-center justify-center w-full p-8 rounded-2xl border transition-colors duration-200 gap-6",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[163]||(v[163]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"流体微粒光标跟随与粘性拖尾"),s("p",{class:"text-xs text-zinc-500 font-mono"},"移动速度感应动态扩散 · 自然发光与平滑衰减消融")],-1)),s("div",M3,[k(wk,{class:"flex h-full items-center justify-center p-6 text-center"},{default:U(()=>[...v[162]||(v[162]=[s("div",{class:"space-y-2 pointer-events-none select-none"},[s("div",{class:"w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400"}," ✦ "),s("h4",{class:"text-lg font-bold text-white"},"在此区域内挥动鼠标"),s("p",{class:"text-xs text-zinc-400 font-mono"},"微粒根据加速度生成流光水波拖尾")],-1)])]),_:1})])],2)):a.value.id==="text-generate-effect"?(f(),x("div",{key:64,class:M(["flex flex-col items-center justify-center w-full p-12 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[164]||(v[164]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"逐词高斯模糊平滑解冻流式生成"),s("p",{class:"text-xs text-zinc-500 font-mono"},"如同思维涌现 · 错峰延迟与贝塞尔弹性衰减")],-1)),s("div",I3,[k(kk,{words:"Aura UI 是专为 Vue 3 打造的高阶动效原子代码库，采用 Zero-Config 单文件架构，直接拷贝即可运行。",duration:.5,delay:.05,class:"text-xl sm:text-2xl font-bold"})])],2)):a.value.id==="word-rotate"?(f(),x("div",{key:65,class:M(["flex flex-col items-center justify-center w-full p-16 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[166]||(v[166]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"核心关键词 3D 纵深翻转轮播"),s("p",{class:"text-xs text-zinc-500 font-mono"},"SaaS 官网 Hero 标题利器 · 沿 3D X 轴弹簧阻尼循环交替")],-1)),s("div",A3,[v[165]||(v[165]=s("span",null,"让你的数字化产品",-1)),k(bd,{words:["极速流畅","原生优雅","工业质感","开箱即用","零黑盒依赖"],duration:2200})])],2)):a.value.id==="flip-words"?(f(),x("div",{key:66,class:M(["flex flex-col items-center justify-center w-full p-16 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[169]||(v[169]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"流体多词交替字母级翻牌动效"),s("p",{class:"text-xs text-zinc-500 font-mono"},"字母级错峰飞入 · 柔和弹性缩放与微模糊收拢")],-1)),s("div",$3,[v[167]||(v[167]=s("span",null,"打造",-1)),k(Sk,{words:["高性能","更美观","更直觉","零配置"],duration:2600,class:"text-emerald-500 dark:text-emerald-400"}),v[168]||(v[168]=s("span",null,"的现代化动效体系",-1))])],2)):a.value.id==="hyper-text"?(f(),x("div",{key:67,class:M(["flex flex-col items-center justify-center w-full p-14 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[171]||(v[171]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"赛博乱码解密乱序字符变换文字"),s("p",{class:"text-xs text-zinc-500 font-mono"},"鼠标悬停触发解密 · 高频随机字符快速迭代还原目标明文")],-1)),s("div",P3,[s("div",T3,[k(Mk,{text:"AURA_PROTOCOL_INITIALIZED",duration:700,class:"text-2xl sm:text-3xl font-mono text-emerald-400 tracking-widest"})]),v[170]||(v[170]=s("span",{class:"text-xs text-zinc-400 font-mono"},"（将鼠标悬停在上方文字上重新体验解密）",-1))])],2)):a.value.id==="gradual-spacing"?(f(),x("div",{key:68,class:M(["flex flex-col items-center justify-center w-full p-16 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[172]||(v[172]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"字间距弹性凝聚与扩散渐变文字"),s("p",{class:"text-xs text-zinc-500 font-mono"},"电影大片片头级字距聚合 · 阶梯式时间差向标准设计排版聚拢")],-1)),s("div",R3,[k(Ak,{text:"AURA MOTION SYSTEM",duration:.5,"delay-multiple":.04,class:"text-2xl sm:text-4xl font-black tracking-widest text-zinc-900 dark:text-white"})])],2)):a.value.id==="text-reveal-card"?(f(),x("div",{key:69,class:M(["flex flex-col items-center justify-center w-full p-12 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[173]||(v[173]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"光标划过遮罩刮刮乐式文字破晓显影卡片"),s("p",{class:"text-xs text-zinc-500 font-mono"},"类似探照灯透光显影 · 探索与揭示神秘底层流光文字")],-1)),k(Tk,{text:"你在寻找终极动效原子方案？","reveal-text":"Aura UI: 原生 Vue 3 的极致美学。"})],2)):a.value.id==="magnetic-button"?(f(),x("div",{key:70,class:M(["flex flex-col items-center justify-center w-full p-16 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[175]||(v[175]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"磁吸物理吸引悬浮按钮"),s("p",{class:"text-xs text-zinc-500 font-mono"},"光标靠近感应半径内非线性弹性吸引位移 · 移出柔和弹簧归位")],-1)),s("div",E3,[k(Rk,{strength:.38,distance:90},{default:U(()=>[...v[174]||(v[174]=[s("span",null,"探索 Aura 动效原子库",-1),s("span",{class:"text-xs"},"↗",-1)])]),_:1})])],2)):a.value.id==="elastic-slider"?(f(),x("div",{key:71,class:M(["flex flex-col items-center justify-center w-full p-16 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[176]||(v[176]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"果冻弹性边界拉伸滑动条"),s("p",{class:"text-xs text-zinc-500 font-mono"},"极限两端橡皮筋拉伸变形 · 松手高阻尼回弹震荡 · 动态数值气泡")],-1)),s("div",F3,[k(Ek,{modelValue:jo.value,"onUpdate:modelValue":v[46]||(v[46]=Y=>jo.value=Y),min:0,max:100},null,8,["modelValue"]),s("span",L3,"当前实时数值: "+A(jo.value)+"%",1)])],2)):a.value.id==="copy-snippet"?(f(),x("div",{key:72,class:M(["flex flex-col items-center justify-center w-full p-16 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[177]||(v[177]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"极速复制终端代码胶囊"),s("p",{class:"text-xs text-zinc-500 font-mono"},"一键写入剪贴板 · 对勾图标微缩放弹簧反馈 · 质感边框毛玻璃")],-1)),s("div",D3,[k(Gs,{code:"pnpm add aura-ui @vueuse/core",prefix:"$"}),k(Gs,{code:"npx aura-ui init",prefix:">"})])],2)):a.value.id==="keyboard-badge"?(f(),x("div",{key:73,class:M(["flex flex-col items-center justify-center w-full p-16 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[178]||(v[178]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"拟物机械键盘键帽按键反馈"),s("p",{class:"text-xs text-zinc-500 font-mono"},"高光立体斜角 · 点击或敲击物理键盘下沉反馈（试按键盘 K 键）")],-1)),s("div",V3,[s("div",O3,[k(Ln,{"key-name":"⌘",size:"lg"}),k(Ln,{"key-name":"K","shortcut-key":"k",size:"lg"})]),s("div",B3,[k(Ln,{"key-name":"Shift",size:"md"}),k(Ln,{"key-name":"Ctrl",size:"md"}),k(Ln,{"key-name":"C",size:"md"})]),k(Ln,{"key-name":"ESC",size:"sm"})])],2)):a.value.id==="color-picker-morph"?(f(),x("div",{key:74,class:M(["flex flex-col items-center justify-center w-full p-16 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[179]||(v[179]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"调色板流体色盘拾色器"),s("p",{class:"text-xs text-zinc-500 font-mono"},"流体弹性激活环包裹 · HEX 代码动态显示与一键复制")],-1)),k(Uk,{modelValue:gi.value,"onUpdate:modelValue":v[47]||(v[47]=Y=>gi.value=Y)},null,8,["modelValue"])],2)):a.value.id==="star-rating"?(f(),x("div",{key:75,class:M(["flex flex-col items-center justify-center w-full p-16 rounded-2xl border transition-colors duration-200 gap-8",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[v[181]||(v[181]=s("div",{class:"text-center space-y-1"},[s("h3",{class:"text-lg font-bold text-zinc-900 dark:text-white"},"高精度流体星星评分打分器"),s("p",{class:"text-xs text-zinc-500 font-mono"},"光标划过弹性微震颤 · 点击瞬间星芒微爆开光环")],-1)),s("div",j3,[k(Us,{modelValue:hi.value,"onUpdate:modelValue":v[48]||(v[48]=Y=>hi.value=Y),"max-stars":5},null,8,["modelValue"]),v[180]||(v[180]=s("span",{class:"text-xs font-mono text-zinc-400"},"体验悬停震颤与打分光环爆开",-1))])],2)):a.value.id==="hero-modern"?(f(),x("div",{key:76,class:M(["relative w-full rounded-2xl border transition-colors duration-200 overflow-hidden",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(r2)],2)):a.value.id==="feature-bento-block"?(f(),x("div",{key:77,class:M(["relative w-full rounded-2xl border transition-colors duration-200 overflow-hidden",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(z2)],2)):a.value.id==="pricing-section-block"?(f(),x("div",{key:78,class:M(["relative w-full rounded-2xl border transition-colors duration-200 overflow-hidden",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(V2)],2)):a.value.id==="testimonial-marquee-block"?(f(),x("div",{key:79,class:M(["relative w-full rounded-2xl border transition-colors duration-200 overflow-hidden",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(r5)],2)):a.value.id==="cta-banner-block"?(f(),x("div",{key:80,class:M(["relative w-full rounded-2xl border transition-colors duration-200 overflow-hidden",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(p5)],2)):a.value.id==="faq-accordion-block"?(f(),x("div",{key:81,class:M(["relative w-full rounded-2xl border transition-colors duration-200 overflow-hidden",G?"border-zinc-800 bg-zinc-950":"border-zinc-200 bg-zinc-50"])},[k(z5)],2)):N("",!0)]}),_:1},8,["title","description","component-code","usage-code","component-filename","props-list"]))])])])}}}),H3=Yf({history:Mf(),routes:[{path:"/",name:"home",component:yx},{path:"/docs/:id?",name:"docs",component:N3},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(e,t,n){return n||(e.name==="docs"&&t.name==="docs"?!1:{top:0})}}),xd=Up(N0);xd.use(H3);xd.mount("#app");
