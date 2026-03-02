(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function N_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var sf={exports:{}},il={},of={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry;function oI(){if(Ry)return Pe;Ry=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function T(M){return M===null||typeof M!="object"?null:(M=E&&M[E]||M["@@iterator"],typeof M=="function"?M:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,$={};function L(M,Q,me){this.props=M,this.context=Q,this.refs=$,this.updater=me||N}L.prototype.isReactComponent={},L.prototype.setState=function(M,Q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Q,"setState")},L.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function K(){}K.prototype=L.prototype;function Z(M,Q,me){this.props=M,this.context=Q,this.refs=$,this.updater=me||N}var ne=Z.prototype=new K;ne.constructor=Z,B(ne,L.prototype),ne.isPureReactComponent=!0;var ae=Array.isArray,te=Object.prototype.hasOwnProperty,de={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(M,Q,me){var Ae,Ce={},De=null,Me=null;if(Q!=null)for(Ae in Q.ref!==void 0&&(Me=Q.ref),Q.key!==void 0&&(De=""+Q.key),Q)te.call(Q,Ae)&&!D.hasOwnProperty(Ae)&&(Ce[Ae]=Q[Ae]);var Fe=arguments.length-2;if(Fe===1)Ce.children=me;else if(1<Fe){for(var qe=Array(Fe),Tt=0;Tt<Fe;Tt++)qe[Tt]=arguments[Tt+2];Ce.children=qe}if(M&&M.defaultProps)for(Ae in Fe=M.defaultProps,Fe)Ce[Ae]===void 0&&(Ce[Ae]=Fe[Ae]);return{$$typeof:n,type:M,key:De,ref:Me,props:Ce,_owner:de.current}}function C(M,Q){return{$$typeof:n,type:M.type,key:Q,ref:M.ref,props:M.props,_owner:M._owner}}function x(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function O(M){var Q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(me){return Q[me]})}var F=/\/+/g;function R(M,Q){return typeof M=="object"&&M!==null&&M.key!=null?O(""+M.key):Q.toString(36)}function Je(M,Q,me,Ae,Ce){var De=typeof M;(De==="undefined"||De==="boolean")&&(M=null);var Me=!1;if(M===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(M.$$typeof){case n:case e:Me=!0}}if(Me)return Me=M,Ce=Ce(Me),M=Ae===""?"."+R(Me,0):Ae,ae(Ce)?(me="",M!=null&&(me=M.replace(F,"$&/")+"/"),Je(Ce,Q,me,"",function(Tt){return Tt})):Ce!=null&&(x(Ce)&&(Ce=C(Ce,me+(!Ce.key||Me&&Me.key===Ce.key?"":(""+Ce.key).replace(F,"$&/")+"/")+M)),Q.push(Ce)),1;if(Me=0,Ae=Ae===""?".":Ae+":",ae(M))for(var Fe=0;Fe<M.length;Fe++){De=M[Fe];var qe=Ae+R(De,Fe);Me+=Je(De,Q,me,qe,Ce)}else if(qe=T(M),typeof qe=="function")for(M=qe.call(M),Fe=0;!(De=M.next()).done;)De=De.value,qe=Ae+R(De,Fe++),Me+=Je(De,Q,me,qe,Ce);else if(De==="object")throw Q=String(M),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Me}function Ge(M,Q,me){if(M==null)return M;var Ae=[],Ce=0;return Je(M,Ae,"","",function(De){return Q.call(me,De,Ce++)}),Ae}function Vt(M){if(M._status===-1){var Q=M._result;Q=Q(),Q.then(function(me){(M._status===0||M._status===-1)&&(M._status=1,M._result=me)},function(me){(M._status===0||M._status===-1)&&(M._status=2,M._result=me)}),M._status===-1&&(M._status=0,M._result=Q)}if(M._status===1)return M._result.default;throw M._result}var Be={current:null},ie={transition:null},ye={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ie,ReactCurrentOwner:de};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Ge,forEach:function(M,Q,me){Ge(M,function(){Q.apply(this,arguments)},me)},count:function(M){var Q=0;return Ge(M,function(){Q++}),Q},toArray:function(M){return Ge(M,function(Q){return Q})||[]},only:function(M){if(!x(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Pe.Component=L,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=Z,Pe.StrictMode=i,Pe.Suspense=p,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,Pe.act=ue,Pe.cloneElement=function(M,Q,me){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Ae=B({},M.props),Ce=M.key,De=M.ref,Me=M._owner;if(Q!=null){if(Q.ref!==void 0&&(De=Q.ref,Me=de.current),Q.key!==void 0&&(Ce=""+Q.key),M.type&&M.type.defaultProps)var Fe=M.type.defaultProps;for(qe in Q)te.call(Q,qe)&&!D.hasOwnProperty(qe)&&(Ae[qe]=Q[qe]===void 0&&Fe!==void 0?Fe[qe]:Q[qe])}var qe=arguments.length-2;if(qe===1)Ae.children=me;else if(1<qe){Fe=Array(qe);for(var Tt=0;Tt<qe;Tt++)Fe[Tt]=arguments[Tt+2];Ae.children=Fe}return{$$typeof:n,type:M.type,key:Ce,ref:De,props:Ae,_owner:Me}},Pe.createContext=function(M){return M={$$typeof:c,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},Pe.createElement=S,Pe.createFactory=function(M){var Q=S.bind(null,M);return Q.type=M,Q},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(M){return{$$typeof:d,render:M}},Pe.isValidElement=x,Pe.lazy=function(M){return{$$typeof:_,_payload:{_status:-1,_result:M},_init:Vt}},Pe.memo=function(M,Q){return{$$typeof:y,type:M,compare:Q===void 0?null:Q}},Pe.startTransition=function(M){var Q=ie.transition;ie.transition={};try{M()}finally{ie.transition=Q}},Pe.unstable_act=ue,Pe.useCallback=function(M,Q){return Be.current.useCallback(M,Q)},Pe.useContext=function(M){return Be.current.useContext(M)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(M){return Be.current.useDeferredValue(M)},Pe.useEffect=function(M,Q){return Be.current.useEffect(M,Q)},Pe.useId=function(){return Be.current.useId()},Pe.useImperativeHandle=function(M,Q,me){return Be.current.useImperativeHandle(M,Q,me)},Pe.useInsertionEffect=function(M,Q){return Be.current.useInsertionEffect(M,Q)},Pe.useLayoutEffect=function(M,Q){return Be.current.useLayoutEffect(M,Q)},Pe.useMemo=function(M,Q){return Be.current.useMemo(M,Q)},Pe.useReducer=function(M,Q,me){return Be.current.useReducer(M,Q,me)},Pe.useRef=function(M){return Be.current.useRef(M)},Pe.useState=function(M){return Be.current.useState(M)},Pe.useSyncExternalStore=function(M,Q,me){return Be.current.useSyncExternalStore(M,Q,me)},Pe.useTransition=function(){return Be.current.useTransition()},Pe.version="18.3.1",Pe}var Cy;function lp(){return Cy||(Cy=1,of.exports=oI()),of.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py;function aI(){if(Py)return il;Py=1;var n=lp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var _,E={},T=null,N=null;y!==void 0&&(T=""+y),p.key!==void 0&&(T=""+p.key),p.ref!==void 0&&(N=p.ref);for(_ in p)i.call(p,_)&&!a.hasOwnProperty(_)&&(E[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)E[_]===void 0&&(E[_]=p[_]);return{$$typeof:e,type:d,key:T,ref:N,props:E,_owner:o.current}}return il.Fragment=t,il.jsx=c,il.jsxs=c,il}var ky;function lI(){return ky||(ky=1,sf.exports=aI()),sf.exports}var P=lI(),V=lp();const up=N_(V);var fc={},af={exports:{}},rn={},lf={exports:{}},uf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny;function uI(){return Ny||(Ny=1,(function(n){function e(ie,ye){var ue=ie.length;ie.push(ye);e:for(;0<ue;){var M=ue-1>>>1,Q=ie[M];if(0<o(Q,ye))ie[M]=ye,ie[ue]=Q,ue=M;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var ye=ie[0],ue=ie.pop();if(ue!==ye){ie[0]=ue;e:for(var M=0,Q=ie.length,me=Q>>>1;M<me;){var Ae=2*(M+1)-1,Ce=ie[Ae],De=Ae+1,Me=ie[De];if(0>o(Ce,ue))De<Q&&0>o(Me,Ce)?(ie[M]=Me,ie[De]=ue,M=De):(ie[M]=Ce,ie[Ae]=ue,M=Ae);else if(De<Q&&0>o(Me,ue))ie[M]=Me,ie[De]=ue,M=De;else break e}}return ye}function o(ie,ye){var ue=ie.sortIndex-ye.sortIndex;return ue!==0?ue:ie.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],_=1,E=null,T=3,N=!1,B=!1,$=!1,L=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(ie){for(var ye=t(y);ye!==null;){if(ye.callback===null)i(y);else if(ye.startTime<=ie)i(y),ye.sortIndex=ye.expirationTime,e(p,ye);else break;ye=t(y)}}function ae(ie){if($=!1,ne(ie),!B)if(t(p)!==null)B=!0,Vt(te);else{var ye=t(y);ye!==null&&Be(ae,ye.startTime-ie)}}function te(ie,ye){B=!1,$&&($=!1,K(S),S=-1),N=!0;var ue=T;try{for(ne(ye),E=t(p);E!==null&&(!(E.expirationTime>ye)||ie&&!O());){var M=E.callback;if(typeof M=="function"){E.callback=null,T=E.priorityLevel;var Q=M(E.expirationTime<=ye);ye=n.unstable_now(),typeof Q=="function"?E.callback=Q:E===t(p)&&i(p),ne(ye)}else i(p);E=t(p)}if(E!==null)var me=!0;else{var Ae=t(y);Ae!==null&&Be(ae,Ae.startTime-ye),me=!1}return me}finally{E=null,T=ue,N=!1}}var de=!1,D=null,S=-1,C=5,x=-1;function O(){return!(n.unstable_now()-x<C)}function F(){if(D!==null){var ie=n.unstable_now();x=ie;var ye=!0;try{ye=D(!0,ie)}finally{ye?R():(de=!1,D=null)}}else de=!1}var R;if(typeof Z=="function")R=function(){Z(F)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,Ge=Je.port2;Je.port1.onmessage=F,R=function(){Ge.postMessage(null)}}else R=function(){L(F,0)};function Vt(ie){D=ie,de||(de=!0,R())}function Be(ie,ye){S=L(function(){ie(n.unstable_now())},ye)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){B||N||(B=!0,Vt(te))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(T){case 1:case 2:case 3:var ye=3;break;default:ye=T}var ue=T;T=ye;try{return ie()}finally{T=ue}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,ye){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var ue=T;T=ie;try{return ye()}finally{T=ue}},n.unstable_scheduleCallback=function(ie,ye,ue){var M=n.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?M+ue:M):ue=M,ie){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ue+Q,ie={id:_++,callback:ye,priorityLevel:ie,startTime:ue,expirationTime:Q,sortIndex:-1},ue>M?(ie.sortIndex=ue,e(y,ie),t(p)===null&&ie===t(y)&&($?(K(S),S=-1):$=!0,Be(ae,ue-M))):(ie.sortIndex=Q,e(p,ie),B||N||(B=!0,Vt(te))),ie},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ie){var ye=T;return function(){var ue=T;T=ye;try{return ie.apply(this,arguments)}finally{T=ue}}}})(uf)),uf}var xy;function cI(){return xy||(xy=1,lf.exports=uI()),lf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function hI(){if(Dy)return rn;Dy=1;var n=lp(),e=cI();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function T(r){return p.call(E,r)?!0:p.call(_,r)?!1:y.test(r)?E[r]=!0:(_[r]=!0,!1)}function N(r,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function B(r,s,l,h){if(s===null||typeof s>"u"||N(r,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(r,s,l,h,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new $(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function Z(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(K,Z);L[s]=new $(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(K,Z);L[s]=new $(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(K,Z);L[s]=new $(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function ne(r,s,l,h){var f=L.hasOwnProperty(s)?L[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(B(s,l,f,h)&&(l=null),h||f===null?T(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):f.mustUseProperty?r[f.propertyName]=l===null?f.type===3?!1:"":l:(s=f.attributeName,h=f.attributeNamespace,l===null?r.removeAttribute(s):(f=f.type,l=f===3||f===4&&l===!0?"":""+l,h?r.setAttributeNS(h,s,l):r.setAttribute(s,l))))}var ae=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,te=Symbol.for("react.element"),de=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ye(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var ue=Object.assign,M;function Q(r){if(M===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);M=s&&s[1]||""}return`
`+M+r}var me=!1;function Ae(r,s){if(!r||me)return"";me=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(q){var h=q}Reflect.construct(r,[],s)}else{try{s.call()}catch(q){h=q}r.call(s.prototype)}else{try{throw Error()}catch(q){h=q}r()}}catch(q){if(q&&h&&typeof q.stack=="string"){for(var f=q.stack.split(`
`),g=h.stack.split(`
`),w=f.length-1,A=g.length-1;1<=w&&0<=A&&f[w]!==g[A];)A--;for(;1<=w&&0<=A;w--,A--)if(f[w]!==g[A]){if(w!==1||A!==1)do if(w--,A--,0>A||f[w]!==g[A]){var k=`
`+f[w].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=w&&0<=A);break}}}finally{me=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?Q(r):""}function Ce(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case D:return"Fragment";case de:return"Portal";case C:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case Je:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case x:return(r._context.displayName||"Context")+".Provider";case F:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ge:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Vt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function qe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Tt(r){var s=qe(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Sr(r){r._valueTracker||(r._valueTracker=Tt(r))}function $s(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return r&&(h=qe(r)?r.checked?"true":"false":r.value),r=h,r!==l?(s.setValue(r),!0):!1}function ii(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ji(r,s){var l=s.checked;return ue({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function zs(r,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Fe(s.value!=null?s.value:l),r._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ca(r,s){s=s.checked,s!=null&&ne(r,"checked",s,!1)}function ha(r,s){ca(r,s);var l=Fe(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?qs(r,s.type,l):s.hasOwnProperty("defaultValue")&&qs(r,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Xl(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function qs(r,s,l){(s!=="number"||ii(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var Ar=Array.isArray;function Rr(r,s,l,h){if(r=r.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<r.length;l++)f=s.hasOwnProperty("$"+r[l].value),r[l].selected!==f&&(r[l].selected=f),f&&h&&(r[l].defaultSelected=!0)}else{for(l=""+Fe(l),s=null,f=0;f<r.length;f++){if(r[f].value===l){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function da(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Hs(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Ar(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:Fe(l)}}function Ws(r,s){var l=Fe(s.value),h=Fe(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),h!=null&&(r.defaultValue=""+h)}function fa(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function mt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?mt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Cr,pa=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,l,h,f)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Cr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function si(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zi=["Webkit","ms","Moz","O"];Object.keys(Xi).forEach(function(r){Zi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Xi[s]=Xi[r]})});function ma(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Xi.hasOwnProperty(r)&&Xi[r]?(""+s).trim():s+"px"}function ga(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,f=ma(l,s[l],h);l==="float"&&(l="cssFloat"),h?r.setProperty(l,f):r[l]=f}}var ya=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function va(r,s){if(s){if(ya[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function _a(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var es=null;function Ks(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Gs=null,_n=null,tr=null;function Qs(r){if(r=za(r)){if(typeof Gs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Pu(s),Gs(r.stateNode,r.type,s))}}function nr(r){_n?tr?tr.push(r):tr=[r]:_n=r}function wa(){if(_n){var r=_n,s=tr;if(tr=_n=null,Qs(r),s)for(r=0;r<s.length;r++)Qs(s[r])}}function ts(r,s){return r(s)}function Ea(){}var Pr=!1;function Ta(r,s,l){if(Pr)return r(s,l);Pr=!0;try{return ts(r,s,l)}finally{Pr=!1,(_n!==null||tr!==null)&&(Ea(),wa())}}function ot(r,s){var l=r.stateNode;if(l===null)return null;var h=Pu(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ys=!1;if(d)try{var On={};Object.defineProperty(On,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{Ys=!1}function ns(r,s,l,h,f,g,w,A,k){var q=Array.prototype.slice.call(arguments,3);try{s.apply(l,q)}catch(J){this.onError(J)}}var rs=!1,Js=null,Vn=!1,Ia=null,Dh={onError:function(r){rs=!0,Js=r}};function Xs(r,s,l,h,f,g,w,A,k){rs=!1,Js=null,ns.apply(Dh,arguments)}function Zl(r,s,l,h,f,g,w,A,k){if(Xs.apply(this,arguments),rs){if(rs){var q=Js;rs=!1,Js=null}else throw Error(t(198));Vn||(Vn=!0,Ia=q)}}function Ln(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function is(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Mn(r){if(Ln(r)!==r)throw Error(t(188))}function eu(r){var s=r.alternate;if(!s){if(s=Ln(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,h=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){l=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return Mn(f),r;if(g===h)return Mn(f),s;g=g.sibling}throw Error(t(188))}if(l.return!==h.return)l=f,h=g;else{for(var w=!1,A=f.child;A;){if(A===l){w=!0,l=f,h=g;break}if(A===h){w=!0,h=f,l=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===l){w=!0,l=g,h=f;break}if(A===h){w=!0,h=g,l=f;break}A=A.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function Sa(r){return r=eu(r),r!==null?Zs(r):null}function Zs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Zs(r);if(s!==null)return s;r=r.sibling}return null}var eo=e.unstable_scheduleCallback,Aa=e.unstable_cancelCallback,tu=e.unstable_shouldYield,bh=e.unstable_requestPaint,He=e.unstable_now,nu=e.unstable_getCurrentPriorityLevel,ss=e.unstable_ImmediatePriority,oi=e.unstable_UserBlockingPriority,wn=e.unstable_NormalPriority,Ra=e.unstable_LowPriority,ru=e.unstable_IdlePriority,os=null,an=null;function iu(r){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(os,r,void 0,(r.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:ou,Ca=Math.log,su=Math.LN2;function ou(r){return r>>>=0,r===0?32:31-(Ca(r)/su|0)|0}var to=64,no=4194304;function ai(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function as(r,s){var l=r.pendingLanes;if(l===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,w=l&268435455;if(w!==0){var A=w&~f;A!==0?h=ai(A):(g&=w,g!==0&&(h=ai(g)))}else w=l&~f,w!==0?h=ai(w):g!==0&&(h=ai(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)l=31-Ht(s),f=1<<l,h|=r[l],s&=~f;return h}function Oh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kr(r,s){for(var l=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-Ht(g),A=1<<w,k=f[w];k===-1?((A&l)===0||(A&h)!==0)&&(f[w]=Oh(A,s)):k<=s&&(r.expiredLanes|=A),g&=~A}}function ln(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ls(){var r=to;return to<<=1,(to&4194240)===0&&(to=64),r}function li(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function ui(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Ht(s),r[s]=l}function $e(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<l;){var f=31-Ht(l),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,l&=~g}}function ci(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var h=31-Ht(l),f=1<<h;f&s|r[h]&s&&(r[h]|=s),l&=~f}}var xe=0;function hi(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var au,ro,lu,uu,cu,Pa=!1,rr=[],Nt=null,Fn=null,Un=null,di=new Map,En=new Map,ir=[],Vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(r,s){switch(r){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":di.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(s.pointerId)}}function Yt(r,s,l,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=za(s),s!==null&&ro(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function Lh(r,s,l,h,f){switch(s){case"focusin":return Nt=Yt(Nt,r,s,l,h,f),!0;case"dragenter":return Fn=Yt(Fn,r,s,l,h,f),!0;case"mouseover":return Un=Yt(Un,r,s,l,h,f),!0;case"pointerover":var g=f.pointerId;return di.set(g,Yt(di.get(g)||null,r,s,l,h,f)),!0;case"gotpointercapture":return g=f.pointerId,En.set(g,Yt(En.get(g)||null,r,s,l,h,f)),!0}return!1}function du(r){var s=fs(r.target);if(s!==null){var l=Ln(s);if(l!==null){if(s=l.tag,s===13){if(s=is(l),s!==null){r.blockedOn=s,cu(r.priority,function(){lu(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Nr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=io(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var h=new l.constructor(l.type,l);es=h,l.target.dispatchEvent(h),es=null}else return s=za(l),s!==null&&ro(s),r.blockedOn=l,!1;s.shift()}return!0}function us(r,s,l){Nr(r)&&l.delete(s)}function fu(){Pa=!1,Nt!==null&&Nr(Nt)&&(Nt=null),Fn!==null&&Nr(Fn)&&(Fn=null),Un!==null&&Nr(Un)&&(Un=null),di.forEach(us),En.forEach(us)}function jn(r,s){r.blockedOn===s&&(r.blockedOn=null,Pa||(Pa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fu)))}function Bn(r){function s(f){return jn(f,r)}if(0<rr.length){jn(rr[0],r);for(var l=1;l<rr.length;l++){var h=rr[l];h.blockedOn===r&&(h.blockedOn=null)}}for(Nt!==null&&jn(Nt,r),Fn!==null&&jn(Fn,r),Un!==null&&jn(Un,r),di.forEach(s),En.forEach(s),l=0;l<ir.length;l++)h=ir[l],h.blockedOn===r&&(h.blockedOn=null);for(;0<ir.length&&(l=ir[0],l.blockedOn===null);)du(l),l.blockedOn===null&&ir.shift()}var xr=ae.ReactCurrentBatchConfig,fi=!0;function Xe(r,s,l,h){var f=xe,g=xr.transition;xr.transition=null;try{xe=1,ka(r,s,l,h)}finally{xe=f,xr.transition=g}}function Mh(r,s,l,h){var f=xe,g=xr.transition;xr.transition=null;try{xe=4,ka(r,s,l,h)}finally{xe=f,xr.transition=g}}function ka(r,s,l,h){if(fi){var f=io(r,s,l,h);if(f===null)Gh(r,s,h,cs,l),hu(r,h);else if(Lh(f,r,s,l,h))h.stopPropagation();else if(hu(r,h),s&4&&-1<Vh.indexOf(r)){for(;f!==null;){var g=za(f);if(g!==null&&au(g),g=io(r,s,l,h),g===null&&Gh(r,s,h,cs,l),g===f)break;f=g}f!==null&&h.stopPropagation()}else Gh(r,s,h,null,l)}}var cs=null;function io(r,s,l,h){if(cs=null,r=Ks(h),r=fs(r),r!==null)if(s=Ln(r),s===null)r=null;else if(l=s.tag,l===13){if(r=is(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return cs=r,null}function Na(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nu()){case ss:return 1;case oi:return 4;case wn:case Ra:return 16;case ru:return 536870912;default:return 16}default:return 16}}var un=null,so=null,Jt=null;function xa(){if(Jt)return Jt;var r,s=so,l=s.length,h,f="value"in un?un.value:un.textContent,g=f.length;for(r=0;r<l&&s[r]===f[r];r++);var w=l-r;for(h=1;h<=w&&s[l-h]===f[g-h];h++);return Jt=f.slice(r,1<h?1-h:void 0)}function oo(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function sr(){return!0}function Da(){return!1}function xt(r){function s(l,h,f,g,w){this._reactName=l,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(l=r[A],this[A]=l?l(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?sr:Da,this.isPropagationStopped=Da,this}return ue(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),s}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=xt($n),or=ue({},$n,{view:0,detail:0}),Fh=xt(or),lo,Dr,pi,hs=ue({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==pi&&(pi&&r.type==="mousemove"?(lo=r.screenX-pi.screenX,Dr=r.screenY-pi.screenY):Dr=lo=0,pi=r),lo)},movementY:function(r){return"movementY"in r?r.movementY:Dr}}),uo=xt(hs),ba=ue({},hs,{dataTransfer:0}),pu=xt(ba),co=ue({},or,{relatedTarget:0}),ho=xt(co),mu=ue({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),br=xt(mu),gu=ue({},$n,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),yu=xt(gu),vu=ue({},$n,{data:0}),Oa=xt(vu),fo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=_u[r])?!!s[r]:!1}function ar(){return wu}var u=ue({},or,{key:function(r){if(r.key){var s=fo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=oo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Wt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(r){return r.type==="keypress"?oo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?oo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=xt(u),v=ue({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=xt(v),U=ue({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar}),H=xt(U),re=ue({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=xt(re),yt=ue({},hs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),be=xt(yt),It=[9,13,27,32],ct=d&&"CompositionEvent"in window,Tn=null;d&&"documentMode"in document&&(Tn=document.documentMode);var cn=d&&"TextEvent"in window&&!Tn,ds=d&&(!ct||Tn&&8<Tn&&11>=Tn),po=" ",wm=!1;function Em(r,s){switch(r){case"keyup":return It.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var mo=!1;function rT(r,s){switch(r){case"compositionend":return Tm(s);case"keypress":return s.which!==32?null:(wm=!0,po);case"textInput":return r=s.data,r===po&&wm?null:r;default:return null}}function iT(r,s){if(mo)return r==="compositionend"||!ct&&Em(r,s)?(r=xa(),Jt=so=un=null,mo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ds&&s.locale!=="ko"?null:s.data;default:return null}}var sT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Im(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!sT[r.type]:s==="textarea"}function Sm(r,s,l,h){nr(h),s=Au(s,"onChange"),0<s.length&&(l=new ao("onChange","change",null,l,h),r.push({event:l,listeners:s}))}var Va=null,La=null;function oT(r){$m(r,0)}function Eu(r){var s=wo(r);if($s(s))return r}function aT(r,s){if(r==="change")return s}var Am=!1;if(d){var Uh;if(d){var jh="oninput"in document;if(!jh){var Rm=document.createElement("div");Rm.setAttribute("oninput","return;"),jh=typeof Rm.oninput=="function"}Uh=jh}else Uh=!1;Am=Uh&&(!document.documentMode||9<document.documentMode)}function Cm(){Va&&(Va.detachEvent("onpropertychange",Pm),La=Va=null)}function Pm(r){if(r.propertyName==="value"&&Eu(La)){var s=[];Sm(s,La,r,Ks(r)),Ta(oT,s)}}function lT(r,s,l){r==="focusin"?(Cm(),Va=s,La=l,Va.attachEvent("onpropertychange",Pm)):r==="focusout"&&Cm()}function uT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Eu(La)}function cT(r,s){if(r==="click")return Eu(s)}function hT(r,s){if(r==="input"||r==="change")return Eu(s)}function dT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var zn=typeof Object.is=="function"?Object.is:dT;function Ma(r,s){if(zn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var f=l[h];if(!p.call(s,f)||!zn(r[f],s[f]))return!1}return!0}function km(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Nm(r,s){var l=km(r);r=0;for(var h;l;){if(l.nodeType===3){if(h=r+l.textContent.length,r<=s&&h>=s)return{node:l,offset:s-r};r=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=km(l)}}function xm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?xm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Dm(){for(var r=window,s=ii();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=ii(r.document)}return s}function Bh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function fT(r){var s=Dm(),l=r.focusedElem,h=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&xm(l.ownerDocument.documentElement,l)){if(h!==null&&Bh(l)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=l.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=Nm(l,g);var w=Nm(l,h);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var pT=d&&"documentMode"in document&&11>=document.documentMode,go=null,$h=null,Fa=null,zh=!1;function bm(r,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;zh||go==null||go!==ii(h)||(h=go,"selectionStart"in h&&Bh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Fa&&Ma(Fa,h)||(Fa=h,h=Au($h,"onSelect"),0<h.length&&(s=new ao("onSelect","select",null,s,l),r.push({event:s,listeners:h}),s.target=go)))}function Tu(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var yo={animationend:Tu("Animation","AnimationEnd"),animationiteration:Tu("Animation","AnimationIteration"),animationstart:Tu("Animation","AnimationStart"),transitionend:Tu("Transition","TransitionEnd")},qh={},Om={};d&&(Om=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function Iu(r){if(qh[r])return qh[r];if(!yo[r])return r;var s=yo[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Om)return qh[r]=s[l];return r}var Vm=Iu("animationend"),Lm=Iu("animationiteration"),Mm=Iu("animationstart"),Fm=Iu("transitionend"),Um=new Map,jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(r,s){Um.set(r,s),a(s,[r])}for(var Hh=0;Hh<jm.length;Hh++){var Wh=jm[Hh],mT=Wh.toLowerCase(),gT=Wh[0].toUpperCase()+Wh.slice(1);mi(mT,"on"+gT)}mi(Vm,"onAnimationEnd"),mi(Lm,"onAnimationIteration"),mi(Mm,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Fm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function Bm(r,s,l){var h=r.type||"unknown-event";r.currentTarget=l,Zl(h,s,void 0,r),r.currentTarget=null}function $m(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var h=r[l],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var A=h[w],k=A.instance,q=A.currentTarget;if(A=A.listener,k!==g&&f.isPropagationStopped())break e;Bm(f,A,q),g=k}else for(w=0;w<h.length;w++){if(A=h[w],k=A.instance,q=A.currentTarget,A=A.listener,k!==g&&f.isPropagationStopped())break e;Bm(f,A,q),g=k}}}if(Vn)throw r=Ia,Vn=!1,Ia=null,r}function Qe(r,s){var l=s[ed];l===void 0&&(l=s[ed]=new Set);var h=r+"__bubble";l.has(h)||(zm(s,r,2,!1),l.add(h))}function Kh(r,s,l){var h=0;s&&(h|=4),zm(l,r,h,s)}var Su="_reactListening"+Math.random().toString(36).slice(2);function ja(r){if(!r[Su]){r[Su]=!0,i.forEach(function(l){l!=="selectionchange"&&(yT.has(l)||Kh(l,!1,r),Kh(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Su]||(s[Su]=!0,Kh("selectionchange",!1,s))}}function zm(r,s,l,h){switch(Na(s)){case 1:var f=Xe;break;case 4:f=Mh;break;default:f=ka}l=f.bind(null,s,l,r),f=void 0,!Ys||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,l,{capture:!0,passive:f}):r.addEventListener(s,l,!0):f!==void 0?r.addEventListener(s,l,{passive:f}):r.addEventListener(s,l,!1)}function Gh(r,s,l,h,f){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var A=h.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(w===4)for(w=h.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;w=w.return}for(;A!==null;){if(w=fs(A),w===null)return;if(k=w.tag,k===5||k===6){h=g=w;continue e}A=A.parentNode}}h=h.return}Ta(function(){var q=g,J=Ks(l),X=[];e:{var Y=Um.get(r);if(Y!==void 0){var oe=ao,he=r;switch(r){case"keypress":if(oo(l)===0)break e;case"keydown":case"keyup":oe=m;break;case"focusin":he="focus",oe=ho;break;case"focusout":he="blur",oe=ho;break;case"beforeblur":case"afterblur":oe=ho;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=pu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=H;break;case Vm:case Lm:case Mm:oe=br;break;case Fm:oe=je;break;case"scroll":oe=Fh;break;case"wheel":oe=be;break;case"copy":case"cut":case"paste":oe=yu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=I}var fe=(s&4)!==0,at=!fe&&r==="scroll",j=fe?Y!==null?Y+"Capture":null:Y;fe=[];for(var b=q,z;b!==null;){z=b;var ee=z.stateNode;if(z.tag===5&&ee!==null&&(z=ee,j!==null&&(ee=ot(b,j),ee!=null&&fe.push(Ba(b,ee,z)))),at)break;b=b.return}0<fe.length&&(Y=new oe(Y,he,null,l,J),X.push({event:Y,listeners:fe}))}}if((s&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",Y&&l!==es&&(he=l.relatedTarget||l.fromElement)&&(fs(he)||he[Or]))break e;if((oe||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,oe?(he=l.relatedTarget||l.toElement,oe=q,he=he?fs(he):null,he!==null&&(at=Ln(he),he!==at||he.tag!==5&&he.tag!==6)&&(he=null)):(oe=null,he=q),oe!==he)){if(fe=uo,ee="onMouseLeave",j="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(fe=I,ee="onPointerLeave",j="onPointerEnter",b="pointer"),at=oe==null?Y:wo(oe),z=he==null?Y:wo(he),Y=new fe(ee,b+"leave",oe,l,J),Y.target=at,Y.relatedTarget=z,ee=null,fs(J)===q&&(fe=new fe(j,b+"enter",he,l,J),fe.target=z,fe.relatedTarget=at,ee=fe),at=ee,oe&&he)t:{for(fe=oe,j=he,b=0,z=fe;z;z=vo(z))b++;for(z=0,ee=j;ee;ee=vo(ee))z++;for(;0<b-z;)fe=vo(fe),b--;for(;0<z-b;)j=vo(j),z--;for(;b--;){if(fe===j||j!==null&&fe===j.alternate)break t;fe=vo(fe),j=vo(j)}fe=null}else fe=null;oe!==null&&qm(X,Y,oe,fe,!1),he!==null&&at!==null&&qm(X,at,he,fe,!0)}}e:{if(Y=q?wo(q):window,oe=Y.nodeName&&Y.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Y.type==="file")var pe=aT;else if(Im(Y))if(Am)pe=hT;else{pe=uT;var ve=lT}else(oe=Y.nodeName)&&oe.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(pe=cT);if(pe&&(pe=pe(r,q))){Sm(X,pe,l,J);break e}ve&&ve(r,Y,q),r==="focusout"&&(ve=Y._wrapperState)&&ve.controlled&&Y.type==="number"&&qs(Y,"number",Y.value)}switch(ve=q?wo(q):window,r){case"focusin":(Im(ve)||ve.contentEditable==="true")&&(go=ve,$h=q,Fa=null);break;case"focusout":Fa=$h=go=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,bm(X,l,J);break;case"selectionchange":if(pT)break;case"keydown":case"keyup":bm(X,l,J)}var _e;if(ct)e:{switch(r){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else mo?Em(r,l)&&(Te="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Te="onCompositionStart");Te&&(ds&&l.locale!=="ko"&&(mo||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&mo&&(_e=xa()):(un=J,so="value"in un?un.value:un.textContent,mo=!0)),ve=Au(q,Te),0<ve.length&&(Te=new Oa(Te,r,null,l,J),X.push({event:Te,listeners:ve}),_e?Te.data=_e:(_e=Tm(l),_e!==null&&(Te.data=_e)))),(_e=cn?rT(r,l):iT(r,l))&&(q=Au(q,"onBeforeInput"),0<q.length&&(J=new Oa("onBeforeInput","beforeinput",null,l,J),X.push({event:J,listeners:q}),J.data=_e))}$m(X,s)})}function Ba(r,s,l){return{instance:r,listener:s,currentTarget:l}}function Au(r,s){for(var l=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=ot(r,l),g!=null&&h.unshift(Ba(r,g,f)),g=ot(r,s),g!=null&&h.push(Ba(r,g,f))),r=r.return}return h}function vo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function qm(r,s,l,h,f){for(var g=s._reactName,w=[];l!==null&&l!==h;){var A=l,k=A.alternate,q=A.stateNode;if(k!==null&&k===h)break;A.tag===5&&q!==null&&(A=q,f?(k=ot(l,g),k!=null&&w.unshift(Ba(l,k,A))):f||(k=ot(l,g),k!=null&&w.push(Ba(l,k,A)))),l=l.return}w.length!==0&&r.push({event:s,listeners:w})}var vT=/\r\n?/g,_T=/\u0000|\uFFFD/g;function Hm(r){return(typeof r=="string"?r:""+r).replace(vT,`
`).replace(_T,"")}function Ru(r,s,l){if(s=Hm(s),Hm(r)!==s&&l)throw Error(t(425))}function Cu(){}var Qh=null,Yh=null;function Jh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Xh=typeof setTimeout=="function"?setTimeout:void 0,wT=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,ET=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(r){return Wm.resolve(null).then(r).catch(TT)}:Xh;function TT(r){setTimeout(function(){throw r})}function Zh(r,s){var l=s,h=0;do{var f=l.nextSibling;if(r.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(h===0){r.removeChild(f),Bn(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=f}while(l);Bn(s)}function gi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Km(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var _o=Math.random().toString(36).slice(2),lr="__reactFiber$"+_o,$a="__reactProps$"+_o,Or="__reactContainer$"+_o,ed="__reactEvents$"+_o,IT="__reactListeners$"+_o,ST="__reactHandles$"+_o;function fs(r){var s=r[lr];if(s)return s;for(var l=r.parentNode;l;){if(s=l[Or]||l[lr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=Km(r);r!==null;){if(l=r[lr])return l;r=Km(r)}return s}r=l,l=r.parentNode}return null}function za(r){return r=r[lr]||r[Or],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function wo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Pu(r){return r[$a]||null}var td=[],Eo=-1;function yi(r){return{current:r}}function Ye(r){0>Eo||(r.current=td[Eo],td[Eo]=null,Eo--)}function We(r,s){Eo++,td[Eo]=r.current,r.current=s}var vi={},Lt=yi(vi),Xt=yi(!1),ps=vi;function To(r,s){var l=r.type.contextTypes;if(!l)return vi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in l)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Zt(r){return r=r.childContextTypes,r!=null}function ku(){Ye(Xt),Ye(Lt)}function Gm(r,s,l){if(Lt.current!==vi)throw Error(t(168));We(Lt,s),We(Xt,l)}function Qm(r,s,l){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,Me(r)||"Unknown",f));return ue({},l,h)}function Nu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||vi,ps=Lt.current,We(Lt,r),We(Xt,Xt.current),!0}function Ym(r,s,l){var h=r.stateNode;if(!h)throw Error(t(169));l?(r=Qm(r,s,ps),h.__reactInternalMemoizedMergedChildContext=r,Ye(Xt),Ye(Lt),We(Lt,r)):Ye(Xt),We(Xt,l)}var Vr=null,xu=!1,nd=!1;function Jm(r){Vr===null?Vr=[r]:Vr.push(r)}function AT(r){xu=!0,Jm(r)}function _i(){if(!nd&&Vr!==null){nd=!0;var r=0,s=xe;try{var l=Vr;for(xe=1;r<l.length;r++){var h=l[r];do h=h(!0);while(h!==null)}Vr=null,xu=!1}catch(f){throw Vr!==null&&(Vr=Vr.slice(r+1)),eo(ss,_i),f}finally{xe=s,nd=!1}}return null}var Io=[],So=0,Du=null,bu=0,In=[],Sn=0,ms=null,Lr=1,Mr="";function gs(r,s){Io[So++]=bu,Io[So++]=Du,Du=r,bu=s}function Xm(r,s,l){In[Sn++]=Lr,In[Sn++]=Mr,In[Sn++]=ms,ms=r;var h=Lr;r=Mr;var f=32-Ht(h)-1;h&=~(1<<f),l+=1;var g=32-Ht(s)+f;if(30<g){var w=f-f%5;g=(h&(1<<w)-1).toString(32),h>>=w,f-=w,Lr=1<<32-Ht(s)+f|l<<f|h,Mr=g+r}else Lr=1<<g|l<<f|h,Mr=r}function rd(r){r.return!==null&&(gs(r,1),Xm(r,1,0))}function id(r){for(;r===Du;)Du=Io[--So],Io[So]=null,bu=Io[--So],Io[So]=null;for(;r===ms;)ms=In[--Sn],In[Sn]=null,Mr=In[--Sn],In[Sn]=null,Lr=In[--Sn],In[Sn]=null}var hn=null,dn=null,Ze=!1,qn=null;function Zm(r,s){var l=Pn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function eg(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,hn=r,dn=gi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,hn=r,dn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ms!==null?{id:Lr,overflow:Mr}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Pn(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,hn=r,dn=null,!0):!1;default:return!1}}function sd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function od(r){if(Ze){var s=dn;if(s){var l=s;if(!eg(r,s)){if(sd(r))throw Error(t(418));s=gi(l.nextSibling);var h=hn;s&&eg(r,s)?Zm(h,l):(r.flags=r.flags&-4097|2,Ze=!1,hn=r)}}else{if(sd(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ze=!1,hn=r}}}function tg(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;hn=r}function Ou(r){if(r!==hn)return!1;if(!Ze)return tg(r),Ze=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Jh(r.type,r.memoizedProps)),s&&(s=dn)){if(sd(r))throw ng(),Error(t(418));for(;s;)Zm(r,s),s=gi(s.nextSibling)}if(tg(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){dn=gi(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}dn=null}}else dn=hn?gi(r.stateNode.nextSibling):null;return!0}function ng(){for(var r=dn;r;)r=gi(r.nextSibling)}function Ao(){dn=hn=null,Ze=!1}function ad(r){qn===null?qn=[r]:qn.push(r)}var RT=ae.ReactCurrentBatchConfig;function qa(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var A=f.refs;w===null?delete A[g]:A[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Vu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function rg(r){var s=r._init;return s(r._payload)}function ig(r){function s(j,b){if(r){var z=j.deletions;z===null?(j.deletions=[b],j.flags|=16):z.push(b)}}function l(j,b){if(!r)return null;for(;b!==null;)s(j,b),b=b.sibling;return null}function h(j,b){for(j=new Map;b!==null;)b.key!==null?j.set(b.key,b):j.set(b.index,b),b=b.sibling;return j}function f(j,b){return j=Ci(j,b),j.index=0,j.sibling=null,j}function g(j,b,z){return j.index=z,r?(z=j.alternate,z!==null?(z=z.index,z<b?(j.flags|=2,b):z):(j.flags|=2,b)):(j.flags|=1048576,b)}function w(j){return r&&j.alternate===null&&(j.flags|=2),j}function A(j,b,z,ee){return b===null||b.tag!==6?(b=Xd(z,j.mode,ee),b.return=j,b):(b=f(b,z),b.return=j,b)}function k(j,b,z,ee){var pe=z.type;return pe===D?J(j,b,z.props.children,ee,z.key):b!==null&&(b.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Vt&&rg(pe)===b.type)?(ee=f(b,z.props),ee.ref=qa(j,b,z),ee.return=j,ee):(ee=sc(z.type,z.key,z.props,null,j.mode,ee),ee.ref=qa(j,b,z),ee.return=j,ee)}function q(j,b,z,ee){return b===null||b.tag!==4||b.stateNode.containerInfo!==z.containerInfo||b.stateNode.implementation!==z.implementation?(b=Zd(z,j.mode,ee),b.return=j,b):(b=f(b,z.children||[]),b.return=j,b)}function J(j,b,z,ee,pe){return b===null||b.tag!==7?(b=Ss(z,j.mode,ee,pe),b.return=j,b):(b=f(b,z),b.return=j,b)}function X(j,b,z){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Xd(""+b,j.mode,z),b.return=j,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case te:return z=sc(b.type,b.key,b.props,null,j.mode,z),z.ref=qa(j,null,b),z.return=j,z;case de:return b=Zd(b,j.mode,z),b.return=j,b;case Vt:var ee=b._init;return X(j,ee(b._payload),z)}if(Ar(b)||ye(b))return b=Ss(b,j.mode,z,null),b.return=j,b;Vu(j,b)}return null}function Y(j,b,z,ee){var pe=b!==null?b.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return pe!==null?null:A(j,b,""+z,ee);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case te:return z.key===pe?k(j,b,z,ee):null;case de:return z.key===pe?q(j,b,z,ee):null;case Vt:return pe=z._init,Y(j,b,pe(z._payload),ee)}if(Ar(z)||ye(z))return pe!==null?null:J(j,b,z,ee,null);Vu(j,z)}return null}function oe(j,b,z,ee,pe){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return j=j.get(z)||null,A(b,j,""+ee,pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case te:return j=j.get(ee.key===null?z:ee.key)||null,k(b,j,ee,pe);case de:return j=j.get(ee.key===null?z:ee.key)||null,q(b,j,ee,pe);case Vt:var ve=ee._init;return oe(j,b,z,ve(ee._payload),pe)}if(Ar(ee)||ye(ee))return j=j.get(z)||null,J(b,j,ee,pe,null);Vu(b,ee)}return null}function he(j,b,z,ee){for(var pe=null,ve=null,_e=b,Te=b=0,Rt=null;_e!==null&&Te<z.length;Te++){_e.index>Te?(Rt=_e,_e=null):Rt=_e.sibling;var Le=Y(j,_e,z[Te],ee);if(Le===null){_e===null&&(_e=Rt);break}r&&_e&&Le.alternate===null&&s(j,_e),b=g(Le,b,Te),ve===null?pe=Le:ve.sibling=Le,ve=Le,_e=Rt}if(Te===z.length)return l(j,_e),Ze&&gs(j,Te),pe;if(_e===null){for(;Te<z.length;Te++)_e=X(j,z[Te],ee),_e!==null&&(b=g(_e,b,Te),ve===null?pe=_e:ve.sibling=_e,ve=_e);return Ze&&gs(j,Te),pe}for(_e=h(j,_e);Te<z.length;Te++)Rt=oe(_e,j,Te,z[Te],ee),Rt!==null&&(r&&Rt.alternate!==null&&_e.delete(Rt.key===null?Te:Rt.key),b=g(Rt,b,Te),ve===null?pe=Rt:ve.sibling=Rt,ve=Rt);return r&&_e.forEach(function(Pi){return s(j,Pi)}),Ze&&gs(j,Te),pe}function fe(j,b,z,ee){var pe=ye(z);if(typeof pe!="function")throw Error(t(150));if(z=pe.call(z),z==null)throw Error(t(151));for(var ve=pe=null,_e=b,Te=b=0,Rt=null,Le=z.next();_e!==null&&!Le.done;Te++,Le=z.next()){_e.index>Te?(Rt=_e,_e=null):Rt=_e.sibling;var Pi=Y(j,_e,Le.value,ee);if(Pi===null){_e===null&&(_e=Rt);break}r&&_e&&Pi.alternate===null&&s(j,_e),b=g(Pi,b,Te),ve===null?pe=Pi:ve.sibling=Pi,ve=Pi,_e=Rt}if(Le.done)return l(j,_e),Ze&&gs(j,Te),pe;if(_e===null){for(;!Le.done;Te++,Le=z.next())Le=X(j,Le.value,ee),Le!==null&&(b=g(Le,b,Te),ve===null?pe=Le:ve.sibling=Le,ve=Le);return Ze&&gs(j,Te),pe}for(_e=h(j,_e);!Le.done;Te++,Le=z.next())Le=oe(_e,j,Te,Le.value,ee),Le!==null&&(r&&Le.alternate!==null&&_e.delete(Le.key===null?Te:Le.key),b=g(Le,b,Te),ve===null?pe=Le:ve.sibling=Le,ve=Le);return r&&_e.forEach(function(sI){return s(j,sI)}),Ze&&gs(j,Te),pe}function at(j,b,z,ee){if(typeof z=="object"&&z!==null&&z.type===D&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case te:e:{for(var pe=z.key,ve=b;ve!==null;){if(ve.key===pe){if(pe=z.type,pe===D){if(ve.tag===7){l(j,ve.sibling),b=f(ve,z.props.children),b.return=j,j=b;break e}}else if(ve.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Vt&&rg(pe)===ve.type){l(j,ve.sibling),b=f(ve,z.props),b.ref=qa(j,ve,z),b.return=j,j=b;break e}l(j,ve);break}else s(j,ve);ve=ve.sibling}z.type===D?(b=Ss(z.props.children,j.mode,ee,z.key),b.return=j,j=b):(ee=sc(z.type,z.key,z.props,null,j.mode,ee),ee.ref=qa(j,b,z),ee.return=j,j=ee)}return w(j);case de:e:{for(ve=z.key;b!==null;){if(b.key===ve)if(b.tag===4&&b.stateNode.containerInfo===z.containerInfo&&b.stateNode.implementation===z.implementation){l(j,b.sibling),b=f(b,z.children||[]),b.return=j,j=b;break e}else{l(j,b);break}else s(j,b);b=b.sibling}b=Zd(z,j.mode,ee),b.return=j,j=b}return w(j);case Vt:return ve=z._init,at(j,b,ve(z._payload),ee)}if(Ar(z))return he(j,b,z,ee);if(ye(z))return fe(j,b,z,ee);Vu(j,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,b!==null&&b.tag===6?(l(j,b.sibling),b=f(b,z),b.return=j,j=b):(l(j,b),b=Xd(z,j.mode,ee),b.return=j,j=b),w(j)):l(j,b)}return at}var Ro=ig(!0),sg=ig(!1),Lu=yi(null),Mu=null,Co=null,ld=null;function ud(){ld=Co=Mu=null}function cd(r){var s=Lu.current;Ye(Lu),r._currentValue=s}function hd(r,s,l){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===l)break;r=r.return}}function Po(r,s){Mu=r,ld=Co=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(en=!0),r.firstContext=null)}function An(r){var s=r._currentValue;if(ld!==r)if(r={context:r,memoizedValue:s,next:null},Co===null){if(Mu===null)throw Error(t(308));Co=r,Mu.dependencies={lanes:0,firstContext:r}}else Co=Co.next=r;return s}var ys=null;function dd(r){ys===null?ys=[r]:ys.push(r)}function og(r,s,l,h){var f=s.interleaved;return f===null?(l.next=l,dd(s)):(l.next=f.next,f.next=l),s.interleaved=l,Fr(r,h)}function Fr(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var wi=!1;function fd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ag(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Ur(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Ei(r,s,l){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Ve&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Fr(r,l)}return f=h.interleaved,f===null?(s.next=s,dd(h)):(s.next=f.next,f.next=s),h.interleaved=s,Fr(r,l)}function Fu(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,ci(r,l)}}function lg(r,s){var l=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?f=g=w:g=g.next=w,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Uu(r,s,l,h){var f=r.updateQueue;wi=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var k=A,q=k.next;k.next=null,w===null?g=q:w.next=q,w=k;var J=r.alternate;J!==null&&(J=J.updateQueue,A=J.lastBaseUpdate,A!==w&&(A===null?J.firstBaseUpdate=q:A.next=q,J.lastBaseUpdate=k))}if(g!==null){var X=f.baseState;w=0,J=q=k=null,A=g;do{var Y=A.lane,oe=A.eventTime;if((h&Y)===Y){J!==null&&(J=J.next={eventTime:oe,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var he=r,fe=A;switch(Y=s,oe=l,fe.tag){case 1:if(he=fe.payload,typeof he=="function"){X=he.call(oe,X,Y);break e}X=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=fe.payload,Y=typeof he=="function"?he.call(oe,X,Y):he,Y==null)break e;X=ue({},X,Y);break e;case 2:wi=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Y=f.effects,Y===null?f.effects=[A]:Y.push(A))}else oe={eventTime:oe,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},J===null?(q=J=oe,k=X):J=J.next=oe,w|=Y;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);if(J===null&&(k=X),f.baseState=k,f.firstBaseUpdate=q,f.lastBaseUpdate=J,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);ws|=w,r.lanes=w,r.memoizedState=X}}function ug(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=l,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Ha={},ur=yi(Ha),Wa=yi(Ha),Ka=yi(Ha);function vs(r){if(r===Ha)throw Error(t(174));return r}function pd(r,s){switch(We(Ka,s),We(Wa,r),We(ur,Ha),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:gt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=gt(s,r)}Ye(ur),We(ur,s)}function ko(){Ye(ur),Ye(Wa),Ye(Ka)}function cg(r){vs(Ka.current);var s=vs(ur.current),l=gt(s,r.type);s!==l&&(We(Wa,r),We(ur,l))}function md(r){Wa.current===r&&(Ye(ur),Ye(Wa))}var tt=yi(0);function ju(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var gd=[];function yd(){for(var r=0;r<gd.length;r++)gd[r]._workInProgressVersionPrimary=null;gd.length=0}var Bu=ae.ReactCurrentDispatcher,vd=ae.ReactCurrentBatchConfig,_s=0,nt=null,vt=null,St=null,$u=!1,Ga=!1,Qa=0,CT=0;function Mt(){throw Error(t(321))}function _d(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!zn(r[l],s[l]))return!1;return!0}function wd(r,s,l,h,f,g){if(_s=g,nt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Bu.current=r===null||r.memoizedState===null?xT:DT,r=l(h,f),Ga){g=0;do{if(Ga=!1,Qa=0,25<=g)throw Error(t(301));g+=1,St=vt=null,s.updateQueue=null,Bu.current=bT,r=l(h,f)}while(Ga)}if(Bu.current=Hu,s=vt!==null&&vt.next!==null,_s=0,St=vt=nt=null,$u=!1,s)throw Error(t(300));return r}function Ed(){var r=Qa!==0;return Qa=0,r}function cr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?nt.memoizedState=St=r:St=St.next=r,St}function Rn(){if(vt===null){var r=nt.alternate;r=r!==null?r.memoizedState:null}else r=vt.next;var s=St===null?nt.memoizedState:St.next;if(s!==null)St=s,vt=r;else{if(r===null)throw Error(t(310));vt=r,r={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},St===null?nt.memoizedState=St=r:St=St.next=r}return St}function Ya(r,s){return typeof s=="function"?s(r):s}function Td(r){var s=Rn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=vt,f=h.baseQueue,g=l.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}h.baseQueue=f=g,l.pending=null}if(f!==null){g=f.next,h=h.baseState;var A=w=null,k=null,q=g;do{var J=q.lane;if((_s&J)===J)k!==null&&(k=k.next={lane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),h=q.hasEagerState?q.eagerState:r(h,q.action);else{var X={lane:J,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null};k===null?(A=k=X,w=h):k=k.next=X,nt.lanes|=J,ws|=J}q=q.next}while(q!==null&&q!==g);k===null?w=h:k.next=A,zn(h,s.memoizedState)||(en=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=k,l.lastRenderedState=h}if(r=l.interleaved,r!==null){f=r;do g=f.lane,nt.lanes|=g,ws|=g,f=f.next;while(f!==r)}else f===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Id(r){var s=Rn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);zn(g,s.memoizedState)||(en=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,h]}function hg(){}function dg(r,s){var l=nt,h=Rn(),f=s(),g=!zn(h.memoizedState,f);if(g&&(h.memoizedState=f,en=!0),h=h.queue,Sd(mg.bind(null,l,h,r),[r]),h.getSnapshot!==s||g||St!==null&&St.memoizedState.tag&1){if(l.flags|=2048,Ja(9,pg.bind(null,l,h,f,s),void 0,null),At===null)throw Error(t(349));(_s&30)!==0||fg(l,s,f)}return f}function fg(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function pg(r,s,l,h){s.value=l,s.getSnapshot=h,gg(s)&&yg(r)}function mg(r,s,l){return l(function(){gg(s)&&yg(r)})}function gg(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!zn(r,l)}catch{return!0}}function yg(r){var s=Fr(r,1);s!==null&&Gn(s,r,1,-1)}function vg(r){var s=cr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:r},s.queue=r,r=r.dispatch=NT.bind(null,nt,r),[s.memoizedState,r]}function Ja(r,s,l,h){return r={tag:r,create:s,destroy:l,deps:h,next:null},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(h=l.next,l.next=r,r.next=h,s.lastEffect=r)),r}function _g(){return Rn().memoizedState}function zu(r,s,l,h){var f=cr();nt.flags|=r,f.memoizedState=Ja(1|s,l,void 0,h===void 0?null:h)}function qu(r,s,l,h){var f=Rn();h=h===void 0?null:h;var g=void 0;if(vt!==null){var w=vt.memoizedState;if(g=w.destroy,h!==null&&_d(h,w.deps)){f.memoizedState=Ja(s,l,g,h);return}}nt.flags|=r,f.memoizedState=Ja(1|s,l,g,h)}function wg(r,s){return zu(8390656,8,r,s)}function Sd(r,s){return qu(2048,8,r,s)}function Eg(r,s){return qu(4,2,r,s)}function Tg(r,s){return qu(4,4,r,s)}function Ig(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Sg(r,s,l){return l=l!=null?l.concat([r]):null,qu(4,4,Ig.bind(null,s,r),l)}function Ad(){}function Ag(r,s){var l=Rn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&_d(s,h[1])?h[0]:(l.memoizedState=[r,s],r)}function Rg(r,s){var l=Rn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&_d(s,h[1])?h[0]:(r=r(),l.memoizedState=[r,s],r)}function Cg(r,s,l){return(_s&21)===0?(r.baseState&&(r.baseState=!1,en=!0),r.memoizedState=l):(zn(l,s)||(l=ls(),nt.lanes|=l,ws|=l,r.baseState=!0),s)}function PT(r,s){var l=xe;xe=l!==0&&4>l?l:4,r(!0);var h=vd.transition;vd.transition={};try{r(!1),s()}finally{xe=l,vd.transition=h}}function Pg(){return Rn().memoizedState}function kT(r,s,l){var h=Ai(r);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},kg(r))Ng(s,l);else if(l=og(r,s,l,h),l!==null){var f=Gt();Gn(l,r,h,f),xg(l,s,h)}}function NT(r,s,l){var h=Ai(r),f={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(kg(r))Ng(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,A=g(w,l);if(f.hasEagerState=!0,f.eagerState=A,zn(A,w)){var k=s.interleaved;k===null?(f.next=f,dd(s)):(f.next=k.next,k.next=f),s.interleaved=f;return}}catch{}finally{}l=og(r,s,f,h),l!==null&&(f=Gt(),Gn(l,r,h,f),xg(l,s,h))}}function kg(r){var s=r.alternate;return r===nt||s!==null&&s===nt}function Ng(r,s){Ga=$u=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function xg(r,s,l){if((l&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,ci(r,l)}}var Hu={readContext:An,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},xT={readContext:An,useCallback:function(r,s){return cr().memoizedState=[r,s===void 0?null:s],r},useContext:An,useEffect:wg,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,zu(4194308,4,Ig.bind(null,s,r),l)},useLayoutEffect:function(r,s){return zu(4194308,4,r,s)},useInsertionEffect:function(r,s){return zu(4,2,r,s)},useMemo:function(r,s){var l=cr();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var h=cr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=kT.bind(null,nt,r),[h.memoizedState,r]},useRef:function(r){var s=cr();return r={current:r},s.memoizedState=r},useState:vg,useDebugValue:Ad,useDeferredValue:function(r){return cr().memoizedState=r},useTransition:function(){var r=vg(!1),s=r[0];return r=PT.bind(null,r[1]),cr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var h=nt,f=cr();if(Ze){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),At===null)throw Error(t(349));(_s&30)!==0||fg(h,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,wg(mg.bind(null,h,g,r),[r]),h.flags|=2048,Ja(9,pg.bind(null,h,g,l,s),void 0,null),l},useId:function(){var r=cr(),s=At.identifierPrefix;if(Ze){var l=Mr,h=Lr;l=(h&~(1<<32-Ht(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=Qa++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=CT++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},DT={readContext:An,useCallback:Ag,useContext:An,useEffect:Sd,useImperativeHandle:Sg,useInsertionEffect:Eg,useLayoutEffect:Tg,useMemo:Rg,useReducer:Td,useRef:_g,useState:function(){return Td(Ya)},useDebugValue:Ad,useDeferredValue:function(r){var s=Rn();return Cg(s,vt.memoizedState,r)},useTransition:function(){var r=Td(Ya)[0],s=Rn().memoizedState;return[r,s]},useMutableSource:hg,useSyncExternalStore:dg,useId:Pg,unstable_isNewReconciler:!1},bT={readContext:An,useCallback:Ag,useContext:An,useEffect:Sd,useImperativeHandle:Sg,useInsertionEffect:Eg,useLayoutEffect:Tg,useMemo:Rg,useReducer:Id,useRef:_g,useState:function(){return Id(Ya)},useDebugValue:Ad,useDeferredValue:function(r){var s=Rn();return vt===null?s.memoizedState=r:Cg(s,vt.memoizedState,r)},useTransition:function(){var r=Id(Ya)[0],s=Rn().memoizedState;return[r,s]},useMutableSource:hg,useSyncExternalStore:dg,useId:Pg,unstable_isNewReconciler:!1};function Hn(r,s){if(r&&r.defaultProps){s=ue({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function Rd(r,s,l,h){s=r.memoizedState,l=l(h,s),l=l==null?s:ue({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Wu={isMounted:function(r){return(r=r._reactInternals)?Ln(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var h=Gt(),f=Ai(r),g=Ur(h,f);g.payload=s,l!=null&&(g.callback=l),s=Ei(r,g,f),s!==null&&(Gn(s,r,f,h),Fu(s,r,f))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var h=Gt(),f=Ai(r),g=Ur(h,f);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=Ei(r,g,f),s!==null&&(Gn(s,r,f,h),Fu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Gt(),h=Ai(r),f=Ur(l,h);f.tag=2,s!=null&&(f.callback=s),s=Ei(r,f,h),s!==null&&(Gn(s,r,h,l),Fu(s,r,h))}};function Dg(r,s,l,h,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!Ma(l,h)||!Ma(f,g):!0}function bg(r,s,l){var h=!1,f=vi,g=s.contextType;return typeof g=="object"&&g!==null?g=An(g):(f=Zt(s)?ps:Lt.current,h=s.contextTypes,g=(h=h!=null)?To(r,f):vi),s=new s(l,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Wu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Og(r,s,l,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==r&&Wu.enqueueReplaceState(s,s.state,null)}function Cd(r,s,l,h){var f=r.stateNode;f.props=l,f.state=r.memoizedState,f.refs={},fd(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=An(g):(g=Zt(s)?ps:Lt.current,f.context=To(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Rd(r,s,g,l),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Wu.enqueueReplaceState(f,f.state,null),Uu(r,l,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function No(r,s){try{var l="",h=s;do l+=Ce(h),h=h.return;while(h);var f=l}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function Pd(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function kd(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var OT=typeof WeakMap=="function"?WeakMap:Map;function Vg(r,s,l){l=Ur(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Zu||(Zu=!0,qd=h),kd(r,s)},l}function Lg(r,s,l){l=Ur(-1,l),l.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;l.payload=function(){return h(f)},l.callback=function(){kd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){kd(r,s),typeof h!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function Mg(r,s,l){var h=r.pingCache;if(h===null){h=r.pingCache=new OT;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(l)||(f.add(l),r=GT.bind(null,r,s,l),s.then(r,r))}function Fg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Ug(r,s,l,h,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Ur(-1,1),s.tag=2,Ei(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var VT=ae.ReactCurrentOwner,en=!1;function Kt(r,s,l,h){s.child=r===null?sg(s,null,l,h):Ro(s,r.child,l,h)}function jg(r,s,l,h,f){l=l.render;var g=s.ref;return Po(s,f),h=wd(r,s,l,h,g,f),l=Ed(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,jr(r,s,f)):(Ze&&l&&rd(s),s.flags|=1,Kt(r,s,h,f),s.child)}function Bg(r,s,l,h,f){if(r===null){var g=l.type;return typeof g=="function"&&!Jd(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,$g(r,s,g,h,f)):(r=sc(l.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var w=g.memoizedProps;if(l=l.compare,l=l!==null?l:Ma,l(w,h)&&r.ref===s.ref)return jr(r,s,f)}return s.flags|=1,r=Ci(g,h),r.ref=s.ref,r.return=s,s.child=r}function $g(r,s,l,h,f){if(r!==null){var g=r.memoizedProps;if(Ma(g,h)&&r.ref===s.ref)if(en=!1,s.pendingProps=h=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(en=!0);else return s.lanes=r.lanes,jr(r,s,f)}return Nd(r,s,l,h,f)}function zg(r,s,l){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Do,fn),fn|=l;else{if((l&1073741824)===0)return r=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(Do,fn),fn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:l,We(Do,fn),fn|=h}else g!==null?(h=g.baseLanes|l,s.memoizedState=null):h=l,We(Do,fn),fn|=h;return Kt(r,s,f,l),s.child}function qg(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Nd(r,s,l,h,f){var g=Zt(l)?ps:Lt.current;return g=To(s,g),Po(s,f),l=wd(r,s,l,h,g,f),h=Ed(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,jr(r,s,f)):(Ze&&h&&rd(s),s.flags|=1,Kt(r,s,l,f),s.child)}function Hg(r,s,l,h,f){if(Zt(l)){var g=!0;Nu(s)}else g=!1;if(Po(s,f),s.stateNode===null)Gu(r,s),bg(s,l,h),Cd(s,l,h,f),h=!0;else if(r===null){var w=s.stateNode,A=s.memoizedProps;w.props=A;var k=w.context,q=l.contextType;typeof q=="object"&&q!==null?q=An(q):(q=Zt(l)?ps:Lt.current,q=To(s,q));var J=l.getDerivedStateFromProps,X=typeof J=="function"||typeof w.getSnapshotBeforeUpdate=="function";X||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==h||k!==q)&&Og(s,w,h,q),wi=!1;var Y=s.memoizedState;w.state=Y,Uu(s,h,w,f),k=s.memoizedState,A!==h||Y!==k||Xt.current||wi?(typeof J=="function"&&(Rd(s,l,J,h),k=s.memoizedState),(A=wi||Dg(s,l,A,h,Y,k,q))?(X||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=k),w.props=h,w.state=k,w.context=q,h=A):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,ag(r,s),A=s.memoizedProps,q=s.type===s.elementType?A:Hn(s.type,A),w.props=q,X=s.pendingProps,Y=w.context,k=l.contextType,typeof k=="object"&&k!==null?k=An(k):(k=Zt(l)?ps:Lt.current,k=To(s,k));var oe=l.getDerivedStateFromProps;(J=typeof oe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==X||Y!==k)&&Og(s,w,h,k),wi=!1,Y=s.memoizedState,w.state=Y,Uu(s,h,w,f);var he=s.memoizedState;A!==X||Y!==he||Xt.current||wi?(typeof oe=="function"&&(Rd(s,l,oe,h),he=s.memoizedState),(q=wi||Dg(s,l,q,h,Y,he,k)||!1)?(J||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,he,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,he,k)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=he),w.props=h,w.state=he,w.context=k,h=q):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),h=!1)}return xd(r,s,l,h,g,f)}function xd(r,s,l,h,f,g){qg(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return f&&Ym(s,l,!1),jr(r,s,g);h=s.stateNode,VT.current=s;var A=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=Ro(s,r.child,null,g),s.child=Ro(s,null,A,g)):Kt(r,s,A,g),s.memoizedState=h.state,f&&Ym(s,l,!0),s.child}function Wg(r){var s=r.stateNode;s.pendingContext?Gm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Gm(r,s.context,!1),pd(r,s.containerInfo)}function Kg(r,s,l,h,f){return Ao(),ad(f),s.flags|=256,Kt(r,s,l,h),s.child}var Dd={dehydrated:null,treeContext:null,retryLane:0};function bd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Gg(r,s,l){var h=s.pendingProps,f=tt.current,g=!1,w=(s.flags&128)!==0,A;if((A=w)||(A=r!==null&&r.memoizedState===null?!1:(f&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),We(tt,f&1),r===null)return od(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=h.children,r=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=oc(w,h,0,null),r=Ss(r,h,l,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=bd(l),s.memoizedState=Dd,r):Od(s,w));if(f=r.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return LT(r,s,w,h,A,f,l);if(g){g=h.fallback,w=s.mode,f=r.child,A=f.sibling;var k={mode:"hidden",children:h.children};return(w&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=k,s.deletions=null):(h=Ci(f,k),h.subtreeFlags=f.subtreeFlags&14680064),A!==null?g=Ci(A,g):(g=Ss(g,w,l,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=r.child.memoizedState,w=w===null?bd(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~l,s.memoizedState=Dd,h}return g=r.child,r=g.sibling,h=Ci(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=h,s.memoizedState=null,h}function Od(r,s){return s=oc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Ku(r,s,l,h){return h!==null&&ad(h),Ro(s,r.child,null,l),r=Od(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function LT(r,s,l,h,f,g,w){if(l)return s.flags&256?(s.flags&=-257,h=Pd(Error(t(422))),Ku(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=oc({mode:"visible",children:h.children},f,0,null),g=Ss(g,f,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&Ro(s,r.child,null,w),s.child.memoizedState=bd(w),s.memoizedState=Dd,g);if((s.mode&1)===0)return Ku(r,s,w,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var A=h.dgst;return h=A,g=Error(t(419)),h=Pd(g,h,void 0),Ku(r,s,w,h)}if(A=(w&r.childLanes)!==0,en||A){if(h=At,h!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|w))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Fr(r,f),Gn(h,r,f,-1))}return Yd(),h=Pd(Error(t(421))),Ku(r,s,w,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=QT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,dn=gi(f.nextSibling),hn=s,Ze=!0,qn=null,r!==null&&(In[Sn++]=Lr,In[Sn++]=Mr,In[Sn++]=ms,Lr=r.id,Mr=r.overflow,ms=s),s=Od(s,h.children),s.flags|=4096,s)}function Qg(r,s,l){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),hd(r.return,s,l)}function Vd(r,s,l,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=l,g.tailMode=f)}function Yg(r,s,l){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Kt(r,s,h.children,l),h=tt.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Qg(r,l,s);else if(r.tag===19)Qg(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(We(tt,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(l=s.child,f=null;l!==null;)r=l.alternate,r!==null&&ju(r)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),Vd(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&ju(r)===null){s.child=f;break}r=f.sibling,f.sibling=l,l=f,f=r}Vd(s,!0,l,null,g);break;case"together":Vd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Gu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function jr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),ws|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=Ci(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=Ci(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function MT(r,s,l){switch(s.tag){case 3:Wg(s),Ao();break;case 5:cg(s);break;case 1:Zt(s.type)&&Nu(s);break;case 4:pd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;We(Lu,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(We(tt,tt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Gg(r,s,l):(We(tt,tt.current&1),r=jr(r,s,l),r!==null?r.sibling:null);We(tt,tt.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(r.flags&128)!==0){if(h)return Yg(r,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),We(tt,tt.current),h)break;return null;case 22:case 23:return s.lanes=0,zg(r,s,l)}return jr(r,s,l)}var Jg,Ld,Xg,Zg;Jg=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ld=function(){},Xg=function(r,s,l,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,vs(ur.current);var g=null;switch(l){case"input":f=Ji(r,f),h=Ji(r,h),g=[];break;case"select":f=ue({},f,{value:void 0}),h=ue({},h,{value:void 0}),g=[];break;case"textarea":f=da(r,f),h=da(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=Cu)}va(l,h);var w;l=null;for(q in f)if(!h.hasOwnProperty(q)&&f.hasOwnProperty(q)&&f[q]!=null)if(q==="style"){var A=f[q];for(w in A)A.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else q!=="dangerouslySetInnerHTML"&&q!=="children"&&q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&q!=="autoFocus"&&(o.hasOwnProperty(q)?g||(g=[]):(g=g||[]).push(q,null));for(q in h){var k=h[q];if(A=f!=null?f[q]:void 0,h.hasOwnProperty(q)&&k!==A&&(k!=null||A!=null))if(q==="style")if(A){for(w in A)!A.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in k)k.hasOwnProperty(w)&&A[w]!==k[w]&&(l||(l={}),l[w]=k[w])}else l||(g||(g=[]),g.push(q,l)),l=k;else q==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,A=A?A.__html:void 0,k!=null&&A!==k&&(g=g||[]).push(q,k)):q==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(q,""+k):q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&(o.hasOwnProperty(q)?(k!=null&&q==="onScroll"&&Qe("scroll",r),g||A===k||(g=[])):(g=g||[]).push(q,k))}l&&(g=g||[]).push("style",l);var q=g;(s.updateQueue=q)&&(s.flags|=4)}},Zg=function(r,s,l,h){l!==h&&(s.flags|=4)};function Xa(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,h=0;if(s)for(var f=r.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=l,s}function FT(r,s,l){var h=s.pendingProps;switch(id(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return Zt(s.type)&&ku(),Ft(s),null;case 3:return h=s.stateNode,ko(),Ye(Xt),Ye(Lt),yd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Ou(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,qn!==null&&(Kd(qn),qn=null))),Ld(r,s),Ft(s),null;case 5:md(s);var f=vs(Ka.current);if(l=s.type,r!==null&&s.stateNode!=null)Xg(r,s,l,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(r=vs(ur.current),Ou(s)){h=s.stateNode,l=s.type;var g=s.memoizedProps;switch(h[lr]=s,h[$a]=g,r=(s.mode&1)!==0,l){case"dialog":Qe("cancel",h),Qe("close",h);break;case"iframe":case"object":case"embed":Qe("load",h);break;case"video":case"audio":for(f=0;f<Ua.length;f++)Qe(Ua[f],h);break;case"source":Qe("error",h);break;case"img":case"image":case"link":Qe("error",h),Qe("load",h);break;case"details":Qe("toggle",h);break;case"input":zs(h,g),Qe("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Qe("invalid",h);break;case"textarea":Hs(h,g),Qe("invalid",h)}va(l,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var A=g[w];w==="children"?typeof A=="string"?h.textContent!==A&&(g.suppressHydrationWarning!==!0&&Ru(h.textContent,A,r),f=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&Ru(h.textContent,A,r),f=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&Qe("scroll",h)}switch(l){case"input":Sr(h),Xl(h,g,!0);break;case"textarea":Sr(h),fa(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=Cu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=mt(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(l,{is:h.is}):(r=w.createElement(l),l==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,l),r[lr]=s,r[$a]=h,Jg(r,s,!1,!1),s.stateNode=r;e:{switch(w=_a(l,h),l){case"dialog":Qe("cancel",r),Qe("close",r),f=h;break;case"iframe":case"object":case"embed":Qe("load",r),f=h;break;case"video":case"audio":for(f=0;f<Ua.length;f++)Qe(Ua[f],r);f=h;break;case"source":Qe("error",r),f=h;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),f=h;break;case"details":Qe("toggle",r),f=h;break;case"input":zs(r,h),f=Ji(r,h),Qe("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=ue({},h,{value:void 0}),Qe("invalid",r);break;case"textarea":Hs(r,h),f=da(r,h),Qe("invalid",r);break;default:f=h}va(l,f),A=f;for(g in A)if(A.hasOwnProperty(g)){var k=A[g];g==="style"?ga(r,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&pa(r,k)):g==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&si(r,k):typeof k=="number"&&si(r,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Qe("scroll",r):k!=null&&ne(r,g,k,w))}switch(l){case"input":Sr(r),Xl(r,h,!1);break;case"textarea":Sr(r),fa(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Fe(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?Rr(r,!!h.multiple,g,!1):h.defaultValue!=null&&Rr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Cu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(r&&s.stateNode!=null)Zg(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=vs(Ka.current),vs(ur.current),Ou(s)){if(h=s.stateNode,l=s.memoizedProps,h[lr]=s,(g=h.nodeValue!==l)&&(r=hn,r!==null))switch(r.tag){case 3:Ru(h.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Ru(h.nodeValue,l,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[lr]=s,s.stateNode=h}return Ft(s),null;case 13:if(Ye(tt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ze&&dn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)ng(),Ao(),s.flags|=98560,g=!1;else if(g=Ou(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[lr]=s}else Ao(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ft(s),g=!1}else qn!==null&&(Kd(qn),qn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(tt.current&1)!==0?_t===0&&(_t=3):Yd())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return ko(),Ld(r,s),r===null&&ja(s.stateNode.containerInfo),Ft(s),null;case 10:return cd(s.type._context),Ft(s),null;case 17:return Zt(s.type)&&ku(),Ft(s),null;case 19:if(Ye(tt),g=s.memoizedState,g===null)return Ft(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)Xa(g,!1);else{if(_t!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=ju(r),w!==null){for(s.flags|=128,Xa(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)g=l,r=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return We(tt,tt.current&1|2),s.child}r=r.sibling}g.tail!==null&&He()>bo&&(s.flags|=128,h=!0,Xa(g,!1),s.lanes=4194304)}else{if(!h)if(r=ju(w),r!==null){if(s.flags|=128,h=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Xa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Ze)return Ft(s),null}else 2*He()-g.renderingStartTime>bo&&l!==1073741824&&(s.flags|=128,h=!0,Xa(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(l=g.last,l!==null?l.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=He(),s.sibling=null,l=tt.current,We(tt,h?l&1|2:l&1),s):(Ft(s),null);case 22:case 23:return Qd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(fn&1073741824)!==0&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function UT(r,s){switch(id(s),s.tag){case 1:return Zt(s.type)&&ku(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return ko(),Ye(Xt),Ye(Lt),yd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return md(s),null;case 13:if(Ye(tt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Ao()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ye(tt),null;case 4:return ko(),null;case 10:return cd(s.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var Qu=!1,Ut=!1,jT=typeof WeakSet=="function"?WeakSet:Set,ce=null;function xo(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){st(r,s,h)}else l.current=null}function Md(r,s,l){try{l()}catch(h){st(r,s,h)}}var ey=!1;function BT(r,s){if(Qh=fi,r=Dm(),Bh(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var w=0,A=-1,k=-1,q=0,J=0,X=r,Y=null;t:for(;;){for(var oe;X!==l||f!==0&&X.nodeType!==3||(A=w+f),X!==g||h!==0&&X.nodeType!==3||(k=w+h),X.nodeType===3&&(w+=X.nodeValue.length),(oe=X.firstChild)!==null;)Y=X,X=oe;for(;;){if(X===r)break t;if(Y===l&&++q===f&&(A=w),Y===g&&++J===h&&(k=w),(oe=X.nextSibling)!==null)break;X=Y,Y=X.parentNode}X=oe}l=A===-1||k===-1?null:{start:A,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for(Yh={focusedElem:r,selectionRange:l},fi=!1,ce=s;ce!==null;)if(s=ce,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ce=r;else for(;ce!==null;){s=ce;try{var he=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var fe=he.memoizedProps,at=he.memoizedState,j=s.stateNode,b=j.getSnapshotBeforeUpdate(s.elementType===s.type?fe:Hn(s.type,fe),at);j.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var z=s.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){st(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,ce=r;break}ce=s.return}return he=ey,ey=!1,he}function Za(r,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&Md(s,l,g)}f=f.next}while(f!==h)}}function Yu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Fd(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function ty(r){var s=r.alternate;s!==null&&(r.alternate=null,ty(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[lr],delete s[$a],delete s[ed],delete s[IT],delete s[ST])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function ny(r){return r.tag===5||r.tag===3||r.tag===4}function ry(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||ny(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ud(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Cu));else if(h!==4&&(r=r.child,r!==null))for(Ud(r,s,l),r=r.sibling;r!==null;)Ud(r,s,l),r=r.sibling}function jd(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(jd(r,s,l),r=r.sibling;r!==null;)jd(r,s,l),r=r.sibling}var Dt=null,Wn=!1;function Ti(r,s,l){for(l=l.child;l!==null;)iy(r,s,l),l=l.sibling}function iy(r,s,l){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(os,l)}catch{}switch(l.tag){case 5:Ut||xo(l,s);case 6:var h=Dt,f=Wn;Dt=null,Ti(r,s,l),Dt=h,Wn=f,Dt!==null&&(Wn?(r=Dt,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Dt.removeChild(l.stateNode));break;case 18:Dt!==null&&(Wn?(r=Dt,l=l.stateNode,r.nodeType===8?Zh(r.parentNode,l):r.nodeType===1&&Zh(r,l),Bn(r)):Zh(Dt,l.stateNode));break;case 4:h=Dt,f=Wn,Dt=l.stateNode.containerInfo,Wn=!0,Ti(r,s,l),Dt=h,Wn=f;break;case 0:case 11:case 14:case 15:if(!Ut&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&Md(l,s,w),f=f.next}while(f!==h)}Ti(r,s,l);break;case 1:if(!Ut&&(xo(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(A){st(l,s,A)}Ti(r,s,l);break;case 21:Ti(r,s,l);break;case 22:l.mode&1?(Ut=(h=Ut)||l.memoizedState!==null,Ti(r,s,l),Ut=h):Ti(r,s,l);break;default:Ti(r,s,l)}}function sy(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new jT),s.forEach(function(h){var f=YT.bind(null,r,h);l.has(h)||(l.add(h),h.then(f,f))})}}function Kn(r,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var f=l[h];try{var g=r,w=s,A=w;e:for(;A!==null;){switch(A.tag){case 5:Dt=A.stateNode,Wn=!1;break e;case 3:Dt=A.stateNode.containerInfo,Wn=!0;break e;case 4:Dt=A.stateNode.containerInfo,Wn=!0;break e}A=A.return}if(Dt===null)throw Error(t(160));iy(g,w,f),Dt=null,Wn=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(q){st(f,s,q)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)oy(s,r),s=s.sibling}function oy(r,s){var l=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Kn(s,r),hr(r),h&4){try{Za(3,r,r.return),Yu(3,r)}catch(fe){st(r,r.return,fe)}try{Za(5,r,r.return)}catch(fe){st(r,r.return,fe)}}break;case 1:Kn(s,r),hr(r),h&512&&l!==null&&xo(l,l.return);break;case 5:if(Kn(s,r),hr(r),h&512&&l!==null&&xo(l,l.return),r.flags&32){var f=r.stateNode;try{si(f,"")}catch(fe){st(r,r.return,fe)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=l!==null?l.memoizedProps:g,A=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&ca(f,g),_a(A,w);var q=_a(A,g);for(w=0;w<k.length;w+=2){var J=k[w],X=k[w+1];J==="style"?ga(f,X):J==="dangerouslySetInnerHTML"?pa(f,X):J==="children"?si(f,X):ne(f,J,X,q)}switch(A){case"input":ha(f,g);break;case"textarea":Ws(f,g);break;case"select":var Y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var oe=g.value;oe!=null?Rr(f,!!g.multiple,oe,!1):Y!==!!g.multiple&&(g.defaultValue!=null?Rr(f,!!g.multiple,g.defaultValue,!0):Rr(f,!!g.multiple,g.multiple?[]:"",!1))}f[$a]=g}catch(fe){st(r,r.return,fe)}}break;case 6:if(Kn(s,r),hr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(fe){st(r,r.return,fe)}}break;case 3:if(Kn(s,r),hr(r),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Bn(s.containerInfo)}catch(fe){st(r,r.return,fe)}break;case 4:Kn(s,r),hr(r);break;case 13:Kn(s,r),hr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(zd=He())),h&4&&sy(r);break;case 22:if(J=l!==null&&l.memoizedState!==null,r.mode&1?(Ut=(q=Ut)||J,Kn(s,r),Ut=q):Kn(s,r),hr(r),h&8192){if(q=r.memoizedState!==null,(r.stateNode.isHidden=q)&&!J&&(r.mode&1)!==0)for(ce=r,J=r.child;J!==null;){for(X=ce=J;ce!==null;){switch(Y=ce,oe=Y.child,Y.tag){case 0:case 11:case 14:case 15:Za(4,Y,Y.return);break;case 1:xo(Y,Y.return);var he=Y.stateNode;if(typeof he.componentWillUnmount=="function"){h=Y,l=Y.return;try{s=h,he.props=s.memoizedProps,he.state=s.memoizedState,he.componentWillUnmount()}catch(fe){st(h,l,fe)}}break;case 5:xo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){uy(X);continue}}oe!==null?(oe.return=Y,ce=oe):uy(X)}J=J.sibling}e:for(J=null,X=r;;){if(X.tag===5){if(J===null){J=X;try{f=X.stateNode,q?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=X.stateNode,k=X.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,A.style.display=ma("display",w))}catch(fe){st(r,r.return,fe)}}}else if(X.tag===6){if(J===null)try{X.stateNode.nodeValue=q?"":X.memoizedProps}catch(fe){st(r,r.return,fe)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===r)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===r)break e;for(;X.sibling===null;){if(X.return===null||X.return===r)break e;J===X&&(J=null),X=X.return}J===X&&(J=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Kn(s,r),hr(r),h&4&&sy(r);break;case 21:break;default:Kn(s,r),hr(r)}}function hr(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(ny(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(si(f,""),h.flags&=-33);var g=ry(r);jd(r,g,f);break;case 3:case 4:var w=h.stateNode.containerInfo,A=ry(r);Ud(r,A,w);break;default:throw Error(t(161))}}catch(k){st(r,r.return,k)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function $T(r,s,l){ce=r,ay(r)}function ay(r,s,l){for(var h=(r.mode&1)!==0;ce!==null;){var f=ce,g=f.child;if(f.tag===22&&h){var w=f.memoizedState!==null||Qu;if(!w){var A=f.alternate,k=A!==null&&A.memoizedState!==null||Ut;A=Qu;var q=Ut;if(Qu=w,(Ut=k)&&!q)for(ce=f;ce!==null;)w=ce,k=w.child,w.tag===22&&w.memoizedState!==null?cy(f):k!==null?(k.return=w,ce=k):cy(f);for(;g!==null;)ce=g,ay(g),g=g.sibling;ce=f,Qu=A,Ut=q}ly(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,ce=g):ly(r)}}function ly(r){for(;ce!==null;){var s=ce;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ut||Yu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Ut)if(l===null)h.componentDidMount();else{var f=s.elementType===s.type?l.memoizedProps:Hn(s.type,l.memoizedProps);h.componentDidUpdate(f,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&ug(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}ug(s,w,l)}break;case 5:var A=s.stateNode;if(l===null&&s.flags&4){l=A;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var q=s.alternate;if(q!==null){var J=q.memoizedState;if(J!==null){var X=J.dehydrated;X!==null&&Bn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&Fd(s)}catch(Y){st(s,s.return,Y)}}if(s===r){ce=null;break}if(l=s.sibling,l!==null){l.return=s.return,ce=l;break}ce=s.return}}function uy(r){for(;ce!==null;){var s=ce;if(s===r){ce=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ce=l;break}ce=s.return}}function cy(r){for(;ce!==null;){var s=ce;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Yu(4,s)}catch(k){st(s,l,k)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(k){st(s,f,k)}}var g=s.return;try{Fd(s)}catch(k){st(s,g,k)}break;case 5:var w=s.return;try{Fd(s)}catch(k){st(s,w,k)}}}catch(k){st(s,s.return,k)}if(s===r){ce=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ce=A;break}ce=s.return}}var zT=Math.ceil,Ju=ae.ReactCurrentDispatcher,Bd=ae.ReactCurrentOwner,Cn=ae.ReactCurrentBatchConfig,Ve=0,At=null,ht=null,bt=0,fn=0,Do=yi(0),_t=0,el=null,ws=0,Xu=0,$d=0,tl=null,tn=null,zd=0,bo=1/0,Br=null,Zu=!1,qd=null,Ii=null,ec=!1,Si=null,tc=0,nl=0,Hd=null,nc=-1,rc=0;function Gt(){return(Ve&6)!==0?He():nc!==-1?nc:nc=He()}function Ai(r){return(r.mode&1)===0?1:(Ve&2)!==0&&bt!==0?bt&-bt:RT.transition!==null?(rc===0&&(rc=ls()),rc):(r=xe,r!==0||(r=window.event,r=r===void 0?16:Na(r.type)),r)}function Gn(r,s,l,h){if(50<nl)throw nl=0,Hd=null,Error(t(185));ui(r,l,h),((Ve&2)===0||r!==At)&&(r===At&&((Ve&2)===0&&(Xu|=l),_t===4&&Ri(r,bt)),nn(r,h),l===1&&Ve===0&&(s.mode&1)===0&&(bo=He()+500,xu&&_i()))}function nn(r,s){var l=r.callbackNode;kr(r,s);var h=as(r,r===At?bt:0);if(h===0)l!==null&&Aa(l),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(l!=null&&Aa(l),s===1)r.tag===0?AT(dy.bind(null,r)):Jm(dy.bind(null,r)),ET(function(){(Ve&6)===0&&_i()}),l=null;else{switch(hi(h)){case 1:l=ss;break;case 4:l=oi;break;case 16:l=wn;break;case 536870912:l=ru;break;default:l=wn}l=wy(l,hy.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function hy(r,s){if(nc=-1,rc=0,(Ve&6)!==0)throw Error(t(327));var l=r.callbackNode;if(Oo()&&r.callbackNode!==l)return null;var h=as(r,r===At?bt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=ic(r,h);else{s=h;var f=Ve;Ve|=2;var g=py();(At!==r||bt!==s)&&(Br=null,bo=He()+500,Ts(r,s));do try{WT();break}catch(A){fy(r,A)}while(!0);ud(),Ju.current=g,Ve=f,ht!==null?s=0:(At=null,bt=0,s=_t)}if(s!==0){if(s===2&&(f=ln(r),f!==0&&(h=f,s=Wd(r,f))),s===1)throw l=el,Ts(r,0),Ri(r,h),nn(r,He()),l;if(s===6)Ri(r,h);else{if(f=r.current.alternate,(h&30)===0&&!qT(f)&&(s=ic(r,h),s===2&&(g=ln(r),g!==0&&(h=g,s=Wd(r,g))),s===1))throw l=el,Ts(r,0),Ri(r,h),nn(r,He()),l;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Is(r,tn,Br);break;case 3:if(Ri(r,h),(h&130023424)===h&&(s=zd+500-He(),10<s)){if(as(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){Gt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Xh(Is.bind(null,r,tn,Br),s);break}Is(r,tn,Br);break;case 4:if(Ri(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var w=31-Ht(h);g=1<<w,w=s[w],w>f&&(f=w),h&=~g}if(h=f,h=He()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*zT(h/1960))-h,10<h){r.timeoutHandle=Xh(Is.bind(null,r,tn,Br),h);break}Is(r,tn,Br);break;case 5:Is(r,tn,Br);break;default:throw Error(t(329))}}}return nn(r,He()),r.callbackNode===l?hy.bind(null,r):null}function Wd(r,s){var l=tl;return r.current.memoizedState.isDehydrated&&(Ts(r,s).flags|=256),r=ic(r,s),r!==2&&(s=tn,tn=l,s!==null&&Kd(s)),r}function Kd(r){tn===null?tn=r:tn.push.apply(tn,r)}function qT(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var f=l[h],g=f.getSnapshot;f=f.value;try{if(!zn(g(),f))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ri(r,s){for(s&=~$d,s&=~Xu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-Ht(s),h=1<<l;r[l]=-1,s&=~h}}function dy(r){if((Ve&6)!==0)throw Error(t(327));Oo();var s=as(r,0);if((s&1)===0)return nn(r,He()),null;var l=ic(r,s);if(r.tag!==0&&l===2){var h=ln(r);h!==0&&(s=h,l=Wd(r,h))}if(l===1)throw l=el,Ts(r,0),Ri(r,s),nn(r,He()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Is(r,tn,Br),nn(r,He()),null}function Gd(r,s){var l=Ve;Ve|=1;try{return r(s)}finally{Ve=l,Ve===0&&(bo=He()+500,xu&&_i())}}function Es(r){Si!==null&&Si.tag===0&&(Ve&6)===0&&Oo();var s=Ve;Ve|=1;var l=Cn.transition,h=xe;try{if(Cn.transition=null,xe=1,r)return r()}finally{xe=h,Cn.transition=l,Ve=s,(Ve&6)===0&&_i()}}function Qd(){fn=Do.current,Ye(Do)}function Ts(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,wT(l)),ht!==null)for(l=ht.return;l!==null;){var h=l;switch(id(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&ku();break;case 3:ko(),Ye(Xt),Ye(Lt),yd();break;case 5:md(h);break;case 4:ko();break;case 13:Ye(tt);break;case 19:Ye(tt);break;case 10:cd(h.type._context);break;case 22:case 23:Qd()}l=l.return}if(At=r,ht=r=Ci(r.current,null),bt=fn=s,_t=0,el=null,$d=Xu=ws=0,tn=tl=null,ys!==null){for(s=0;s<ys.length;s++)if(l=ys[s],h=l.interleaved,h!==null){l.interleaved=null;var f=h.next,g=l.pending;if(g!==null){var w=g.next;g.next=f,h.next=w}l.pending=h}ys=null}return r}function fy(r,s){do{var l=ht;try{if(ud(),Bu.current=Hu,$u){for(var h=nt.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}$u=!1}if(_s=0,St=vt=nt=null,Ga=!1,Qa=0,Bd.current=null,l===null||l.return===null){_t=1,el=s,ht=null;break}e:{var g=r,w=l.return,A=l,k=s;if(s=bt,A.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var q=k,J=A,X=J.tag;if((J.mode&1)===0&&(X===0||X===11||X===15)){var Y=J.alternate;Y?(J.updateQueue=Y.updateQueue,J.memoizedState=Y.memoizedState,J.lanes=Y.lanes):(J.updateQueue=null,J.memoizedState=null)}var oe=Fg(w);if(oe!==null){oe.flags&=-257,Ug(oe,w,A,g,s),oe.mode&1&&Mg(g,q,s),s=oe,k=q;var he=s.updateQueue;if(he===null){var fe=new Set;fe.add(k),s.updateQueue=fe}else he.add(k);break e}else{if((s&1)===0){Mg(g,q,s),Yd();break e}k=Error(t(426))}}else if(Ze&&A.mode&1){var at=Fg(w);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),Ug(at,w,A,g,s),ad(No(k,A));break e}}g=k=No(k,A),_t!==4&&(_t=2),tl===null?tl=[g]:tl.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var j=Vg(g,k,s);lg(g,j);break e;case 1:A=k;var b=g.type,z=g.stateNode;if((g.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(Ii===null||!Ii.has(z)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=Lg(g,A,s);lg(g,ee);break e}}g=g.return}while(g!==null)}gy(l)}catch(pe){s=pe,ht===l&&l!==null&&(ht=l=l.return);continue}break}while(!0)}function py(){var r=Ju.current;return Ju.current=Hu,r===null?Hu:r}function Yd(){(_t===0||_t===3||_t===2)&&(_t=4),At===null||(ws&268435455)===0&&(Xu&268435455)===0||Ri(At,bt)}function ic(r,s){var l=Ve;Ve|=2;var h=py();(At!==r||bt!==s)&&(Br=null,Ts(r,s));do try{HT();break}catch(f){fy(r,f)}while(!0);if(ud(),Ve=l,Ju.current=h,ht!==null)throw Error(t(261));return At=null,bt=0,_t}function HT(){for(;ht!==null;)my(ht)}function WT(){for(;ht!==null&&!tu();)my(ht)}function my(r){var s=_y(r.alternate,r,fn);r.memoizedProps=r.pendingProps,s===null?gy(r):ht=s,Bd.current=null}function gy(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=FT(l,s,fn),l!==null){ht=l;return}}else{if(l=UT(l,s),l!==null){l.flags&=32767,ht=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{_t=6,ht=null;return}}if(s=s.sibling,s!==null){ht=s;return}ht=s=r}while(s!==null);_t===0&&(_t=5)}function Is(r,s,l){var h=xe,f=Cn.transition;try{Cn.transition=null,xe=1,KT(r,s,l,h)}finally{Cn.transition=f,xe=h}return null}function KT(r,s,l,h){do Oo();while(Si!==null);if((Ve&6)!==0)throw Error(t(327));l=r.finishedWork;var f=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=l.lanes|l.childLanes;if($e(r,g),r===At&&(ht=At=null,bt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ec||(ec=!0,wy(wn,function(){return Oo(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=Cn.transition,Cn.transition=null;var w=xe;xe=1;var A=Ve;Ve|=4,Bd.current=null,BT(r,l),oy(l,r),fT(Yh),fi=!!Qh,Yh=Qh=null,r.current=l,$T(l),bh(),Ve=A,xe=w,Cn.transition=g}else r.current=l;if(ec&&(ec=!1,Si=r,tc=f),g=r.pendingLanes,g===0&&(Ii=null),iu(l.stateNode),nn(r,He()),s!==null)for(h=r.onRecoverableError,l=0;l<s.length;l++)f=s[l],h(f.value,{componentStack:f.stack,digest:f.digest});if(Zu)throw Zu=!1,r=qd,qd=null,r;return(tc&1)!==0&&r.tag!==0&&Oo(),g=r.pendingLanes,(g&1)!==0?r===Hd?nl++:(nl=0,Hd=r):nl=0,_i(),null}function Oo(){if(Si!==null){var r=hi(tc),s=Cn.transition,l=xe;try{if(Cn.transition=null,xe=16>r?16:r,Si===null)var h=!1;else{if(r=Si,Si=null,tc=0,(Ve&6)!==0)throw Error(t(331));var f=Ve;for(Ve|=4,ce=r.current;ce!==null;){var g=ce,w=g.child;if((ce.flags&16)!==0){var A=g.deletions;if(A!==null){for(var k=0;k<A.length;k++){var q=A[k];for(ce=q;ce!==null;){var J=ce;switch(J.tag){case 0:case 11:case 15:Za(8,J,g)}var X=J.child;if(X!==null)X.return=J,ce=X;else for(;ce!==null;){J=ce;var Y=J.sibling,oe=J.return;if(ty(J),J===q){ce=null;break}if(Y!==null){Y.return=oe,ce=Y;break}ce=oe}}}var he=g.alternate;if(he!==null){var fe=he.child;if(fe!==null){he.child=null;do{var at=fe.sibling;fe.sibling=null,fe=at}while(fe!==null)}}ce=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,ce=w;else e:for(;ce!==null;){if(g=ce,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Za(9,g,g.return)}var j=g.sibling;if(j!==null){j.return=g.return,ce=j;break e}ce=g.return}}var b=r.current;for(ce=b;ce!==null;){w=ce;var z=w.child;if((w.subtreeFlags&2064)!==0&&z!==null)z.return=w,ce=z;else e:for(w=b;ce!==null;){if(A=ce,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Yu(9,A)}}catch(pe){st(A,A.return,pe)}if(A===w){ce=null;break e}var ee=A.sibling;if(ee!==null){ee.return=A.return,ce=ee;break e}ce=A.return}}if(Ve=f,_i(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(os,r)}catch{}h=!0}return h}finally{xe=l,Cn.transition=s}}return!1}function yy(r,s,l){s=No(l,s),s=Vg(r,s,1),r=Ei(r,s,1),s=Gt(),r!==null&&(ui(r,1,s),nn(r,s))}function st(r,s,l){if(r.tag===3)yy(r,r,l);else for(;s!==null;){if(s.tag===3){yy(s,r,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ii===null||!Ii.has(h))){r=No(l,r),r=Lg(s,r,1),s=Ei(s,r,1),r=Gt(),s!==null&&(ui(s,1,r),nn(s,r));break}}s=s.return}}function GT(r,s,l){var h=r.pingCache;h!==null&&h.delete(s),s=Gt(),r.pingedLanes|=r.suspendedLanes&l,At===r&&(bt&l)===l&&(_t===4||_t===3&&(bt&130023424)===bt&&500>He()-zd?Ts(r,0):$d|=l),nn(r,s)}function vy(r,s){s===0&&((r.mode&1)===0?s=1:(s=no,no<<=1,(no&130023424)===0&&(no=4194304)));var l=Gt();r=Fr(r,s),r!==null&&(ui(r,s,l),nn(r,l))}function QT(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),vy(r,l)}function YT(r,s){var l=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(l=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),vy(r,l)}var _y;_y=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||Xt.current)en=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return en=!1,MT(r,s,l);en=(r.flags&131072)!==0}else en=!1,Ze&&(s.flags&1048576)!==0&&Xm(s,bu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Gu(r,s),r=s.pendingProps;var f=To(s,Lt.current);Po(s,l),f=wd(null,s,h,r,f,l);var g=Ed();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Zt(h)?(g=!0,Nu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,fd(s),f.updater=Wu,s.stateNode=f,f._reactInternals=s,Cd(s,h,r,l),s=xd(null,s,h,!0,g,l)):(s.tag=0,Ze&&g&&rd(s),Kt(null,s,f,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Gu(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=XT(h),r=Hn(h,r),f){case 0:s=Nd(null,s,h,r,l);break e;case 1:s=Hg(null,s,h,r,l);break e;case 11:s=jg(null,s,h,r,l);break e;case 14:s=Bg(null,s,h,Hn(h.type,r),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Hn(h,f),Nd(r,s,h,f,l);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Hn(h,f),Hg(r,s,h,f,l);case 3:e:{if(Wg(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,ag(r,s),Uu(s,h,null,l);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=No(Error(t(423)),s),s=Kg(r,s,h,l,f);break e}else if(h!==f){f=No(Error(t(424)),s),s=Kg(r,s,h,l,f);break e}else for(dn=gi(s.stateNode.containerInfo.firstChild),hn=s,Ze=!0,qn=null,l=sg(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ao(),h===f){s=jr(r,s,l);break e}Kt(r,s,h,l)}s=s.child}return s;case 5:return cg(s),r===null&&od(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,Jh(h,f)?w=null:g!==null&&Jh(h,g)&&(s.flags|=32),qg(r,s),Kt(r,s,w,l),s.child;case 6:return r===null&&od(s),null;case 13:return Gg(r,s,l);case 4:return pd(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=Ro(s,null,h,l):Kt(r,s,h,l),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Hn(h,f),jg(r,s,h,f,l);case 7:return Kt(r,s,s.pendingProps,l),s.child;case 8:return Kt(r,s,s.pendingProps.children,l),s.child;case 12:return Kt(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,We(Lu,h._currentValue),h._currentValue=w,g!==null)if(zn(g.value,w)){if(g.children===f.children&&!Xt.current){s=jr(r,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){w=g.child;for(var k=A.firstContext;k!==null;){if(k.context===h){if(g.tag===1){k=Ur(-1,l&-l),k.tag=2;var q=g.updateQueue;if(q!==null){q=q.shared;var J=q.pending;J===null?k.next=k:(k.next=J.next,J.next=k),q.pending=k}}g.lanes|=l,k=g.alternate,k!==null&&(k.lanes|=l),hd(g.return,l,s),A.lanes|=l;break}k=k.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=l,A=w.alternate,A!==null&&(A.lanes|=l),hd(w,l,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Kt(r,s,f.children,l),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,Po(s,l),f=An(f),h=h(f),s.flags|=1,Kt(r,s,h,l),s.child;case 14:return h=s.type,f=Hn(h,s.pendingProps),f=Hn(h.type,f),Bg(r,s,h,f,l);case 15:return $g(r,s,s.type,s.pendingProps,l);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Hn(h,f),Gu(r,s),s.tag=1,Zt(h)?(r=!0,Nu(s)):r=!1,Po(s,l),bg(s,h,f),Cd(s,h,f,l),xd(null,s,h,!0,r,l);case 19:return Yg(r,s,l);case 22:return zg(r,s,l)}throw Error(t(156,s.tag))};function wy(r,s){return eo(r,s)}function JT(r,s,l,h){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(r,s,l,h){return new JT(r,s,l,h)}function Jd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function XT(r){if(typeof r=="function")return Jd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===F)return 11;if(r===Ge)return 14}return 2}function Ci(r,s){var l=r.alternate;return l===null?(l=Pn(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function sc(r,s,l,h,f,g){var w=2;if(h=r,typeof r=="function")Jd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case D:return Ss(l.children,f,g,s);case S:w=8,f|=8;break;case C:return r=Pn(12,l,s,f|2),r.elementType=C,r.lanes=g,r;case R:return r=Pn(13,l,s,f),r.elementType=R,r.lanes=g,r;case Je:return r=Pn(19,l,s,f),r.elementType=Je,r.lanes=g,r;case Be:return oc(l,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case x:w=10;break e;case O:w=9;break e;case F:w=11;break e;case Ge:w=14;break e;case Vt:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Pn(w,l,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function Ss(r,s,l,h){return r=Pn(7,r,h,s),r.lanes=l,r}function oc(r,s,l,h){return r=Pn(22,r,h,s),r.elementType=Be,r.lanes=l,r.stateNode={isHidden:!1},r}function Xd(r,s,l){return r=Pn(6,r,null,s),r.lanes=l,r}function Zd(r,s,l){return s=Pn(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function ZT(r,s,l,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=li(0),this.expirationTimes=li(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=li(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ef(r,s,l,h,f,g,w,A,k){return r=new ZT(r,s,l,A,k),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Pn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(g),r}function eI(r,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:h==null?null:""+h,children:r,containerInfo:s,implementation:l}}function Ey(r){if(!r)return vi;r=r._reactInternals;e:{if(Ln(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Zt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Zt(l))return Qm(r,l,s)}return s}function Ty(r,s,l,h,f,g,w,A,k){return r=ef(l,h,!0,r,f,g,w,A,k),r.context=Ey(null),l=r.current,h=Gt(),f=Ai(l),g=Ur(h,f),g.callback=s??null,Ei(l,g,f),r.current.lanes=f,ui(r,f,h),nn(r,h),r}function ac(r,s,l,h){var f=s.current,g=Gt(),w=Ai(f);return l=Ey(l),s.context===null?s.context=l:s.pendingContext=l,s=Ur(g,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=Ei(f,s,w),r!==null&&(Gn(r,f,w,g),Fu(r,f,w)),w}function lc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Iy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function tf(r,s){Iy(r,s),(r=r.alternate)&&Iy(r,s)}function tI(){return null}var Sy=typeof reportError=="function"?reportError:function(r){console.error(r)};function nf(r){this._internalRoot=r}uc.prototype.render=nf.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));ac(r,s,null,null)},uc.prototype.unmount=nf.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Es(function(){ac(null,r,null,null)}),s[Or]=null}};function uc(r){this._internalRoot=r}uc.prototype.unstable_scheduleHydration=function(r){if(r){var s=uu();r={blockedOn:null,target:r,priority:s};for(var l=0;l<ir.length&&s!==0&&s<ir[l].priority;l++);ir.splice(l,0,r),l===0&&du(r)}};function rf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function cc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Ay(){}function nI(r,s,l,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var q=lc(w);g.call(q)}}var w=Ty(s,h,r,0,null,!1,!1,"",Ay);return r._reactRootContainer=w,r[Or]=w.current,ja(r.nodeType===8?r.parentNode:r),Es(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var A=h;h=function(){var q=lc(k);A.call(q)}}var k=ef(r,0,!1,null,null,!1,!1,"",Ay);return r._reactRootContainer=k,r[Or]=k.current,ja(r.nodeType===8?r.parentNode:r),Es(function(){ac(s,k,l,h)}),k}function hc(r,s,l,h,f){var g=l._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var A=f;f=function(){var k=lc(w);A.call(k)}}ac(s,w,r,f)}else w=nI(l,s,r,f,h);return lc(w)}au=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=ai(s.pendingLanes);l!==0&&(ci(s,l|1),nn(s,He()),(Ve&6)===0&&(bo=He()+500,_i()))}break;case 13:Es(function(){var h=Fr(r,1);if(h!==null){var f=Gt();Gn(h,r,1,f)}}),tf(r,1)}},ro=function(r){if(r.tag===13){var s=Fr(r,134217728);if(s!==null){var l=Gt();Gn(s,r,134217728,l)}tf(r,134217728)}},lu=function(r){if(r.tag===13){var s=Ai(r),l=Fr(r,s);if(l!==null){var h=Gt();Gn(l,r,s,h)}tf(r,s)}},uu=function(){return xe},cu=function(r,s){var l=xe;try{return xe=r,s()}finally{xe=l}},Gs=function(r,s,l){switch(s){case"input":if(ha(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==r&&h.form===r.form){var f=Pu(h);if(!f)throw Error(t(90));$s(h),ha(h,f)}}}break;case"textarea":Ws(r,l);break;case"select":s=l.value,s!=null&&Rr(r,!!l.multiple,s,!1)}},ts=Gd,Ea=Es;var rI={usingClientEntryPoint:!1,Events:[za,wo,Pu,nr,wa,Gd]},rl={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iI={bundleType:rl.bundleType,version:rl.version,rendererPackageName:rl.rendererPackageName,rendererConfig:rl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Sa(r),r===null?null:r.stateNode},findFiberByHostInstance:rl.findFiberByHostInstance||tI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{os=dc.inject(iI),an=dc}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rI,rn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(s))throw Error(t(200));return eI(r,s,null,l)},rn.createRoot=function(r,s){if(!rf(r))throw Error(t(299));var l=!1,h="",f=Sy;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=ef(r,1,!1,null,null,l,!1,h,f),r[Or]=s.current,ja(r.nodeType===8?r.parentNode:r),new nf(s)},rn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Sa(s),r=r===null?null:r.stateNode,r},rn.flushSync=function(r){return Es(r)},rn.hydrate=function(r,s,l){if(!cc(s))throw Error(t(200));return hc(null,r,s,!0,l)},rn.hydrateRoot=function(r,s,l){if(!rf(r))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,f=!1,g="",w=Sy;if(l!=null&&(l.unstable_strictMode===!0&&(f=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=Ty(s,null,r,1,l??null,f,!1,g,w),r[Or]=s.current,ja(r),h)for(r=0;r<h.length;r++)l=h[r],f=l._getVersion,f=f(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,f]:s.mutableSourceEagerHydrationData.push(l,f);return new uc(s)},rn.render=function(r,s,l){if(!cc(s))throw Error(t(200));return hc(null,r,s,!1,l)},rn.unmountComponentAtNode=function(r){if(!cc(r))throw Error(t(40));return r._reactRootContainer?(Es(function(){hc(null,null,r,!1,function(){r._reactRootContainer=null,r[Or]=null})}),!0):!1},rn.unstable_batchedUpdates=Gd,rn.unstable_renderSubtreeIntoContainer=function(r,s,l,h){if(!cc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return hc(r,s,l,!1,h)},rn.version="18.3.1-next-f1338f8080-20240426",rn}var by;function dI(){if(by)return af.exports;by=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),af.exports=hI(),af.exports}var Oy;function fI(){if(Oy)return fc;Oy=1;var n=dI();return fc.createRoot=n.createRoot,fc.hydrateRoot=n.hydrateRoot,fc}var pI=fI();const mI=N_(pI);/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vy="popstate";function Ly(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function gI(n={}){function e(i,o){var y;let a=(y=o.state)==null?void 0:y.masked,{pathname:c,search:d,hash:p}=a||i.location;return Nf("",{pathname:c,search:d,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",a?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function t(i,o){return typeof o=="string"?o:wl(o)}return vI(e,t,null,n)}function et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Dn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yI(){return Math.random().toString(36).substring(2,10)}function My(n,e){return{usr:n.state,key:n.key,idx:e,masked:n.unstable_mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function Nf(n,e,t=null,i,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?ea(e):e,state:t,key:e&&e.key||i||yI(),unstable_mask:o}}function wl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function ea(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function vI(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,d="POP",p=null,y=_();y==null&&(y=0,c.replaceState({...c.state,idx:y},""));function _(){return(c.state||{idx:null}).idx}function E(){d="POP";let L=_(),K=L==null?null:L-y;y=L,p&&p({action:d,location:$.location,delta:K})}function T(L,K){d="PUSH";let Z=Ly(L)?L:Nf($.location,L,K);y=_()+1;let ne=My(Z,y),ae=$.createHref(Z.unstable_mask||Z);try{c.pushState(ne,"",ae)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;o.location.assign(ae)}a&&p&&p({action:d,location:$.location,delta:1})}function N(L,K){d="REPLACE";let Z=Ly(L)?L:Nf($.location,L,K);y=_();let ne=My(Z,y),ae=$.createHref(Z.unstable_mask||Z);c.replaceState(ne,"",ae),a&&p&&p({action:d,location:$.location,delta:0})}function B(L){return _I(L)}let $={get action(){return d},get location(){return n(o,c)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Vy,E),p=L,()=>{o.removeEventListener(Vy,E),p=null}},createHref(L){return e(o,L)},createURL:B,encodeLocation(L){let K=B(L);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:T,replace:N,go(L){return c.go(L)}};return $}function _I(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),et(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:wl(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function x_(n,e,t="/"){return wI(n,e,t,!1)}function wI(n,e,t,i){let o=typeof e=="string"?ea(e):e,a=Qr(o.pathname||"/",t);if(a==null)return null;let c=D_(n);EI(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=DI(a);d=NI(c[p],y,i)}return d}function D_(n,e=[],t=[],i="",o=!1){let a=(c,d,p=o,y)=>{let _={relativePath:y===void 0?c.path||"":y,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(i)&&p)return;et(_.relativePath.startsWith(i),`Absolute route path "${_.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(i.length)}let E=fr([i,_.relativePath]),T=t.concat(_);c.children&&c.children.length>0&&(et(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),D_(c.children,e,T,E,p)),!(c.path==null&&!c.index)&&e.push({path:E,score:PI(E,c.index),routesMeta:T})};return n.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))a(c,d);else for(let y of b_(c.path))a(c,d,!0,y)}),e}function b_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=b_(i.join("/")),d=[];return d.push(...c.map(p=>p===""?a:[a,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function EI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:kI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var TI=/^:[\w-]+$/,II=3,SI=2,AI=1,RI=10,CI=-2,Fy=n=>n==="*";function PI(n,e){let t=n.split("/"),i=t.length;return t.some(Fy)&&(i+=CI),e&&(i+=SI),t.filter(o=>!Fy(o)).reduce((o,a)=>o+(TI.test(a)?II:a===""?AI:RI),i)}function kI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function NI(n,e,t=!1){let{routesMeta:i}=n,o={},a="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,_=a==="/"?e:e.slice(a.length)||"/",E=bc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},_),T=p.route;if(!E&&y&&t&&!i[i.length-1].route.index&&(E=bc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!E)return null;Object.assign(o,E.params),c.push({params:o,pathname:fr([a,E.pathname]),pathnameBase:LI(fr([a,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(a=fr([a,E.pathnameBase]))}return c}function bc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=xI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:_,isOptional:E},T)=>{if(_==="*"){let B=d[T]||"";c=a.slice(0,a.length-B.length).replace(/(.)\/+$/,"$1")}const N=d[T];return E&&!N?y[_]=void 0:y[_]=(N||"").replace(/%2F/g,"/"),y},{}),pathname:a,pathnameBase:c,pattern:n}}function xI(n,e=!1,t=!0){Dn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p,y,_)=>{if(i.push({paramName:d,isOptional:p!=null}),p){let E=_.charAt(y+c.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function DI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Dn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Qr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}var bI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function OI(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?ea(n):n,a;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?a=Uy(t.substring(1),"/"):a=Uy(t,e)):a=e,{pathname:a,search:MI(i),hash:FI(o)}}function Uy(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function cf(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function VI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function cp(n){let e=VI(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function nh(n,e,t,i=!1){let o;typeof n=="string"?o=ea(n):(o={...n},et(!o.pathname||!o.pathname.includes("?"),cf("?","pathname","search",o)),et(!o.pathname||!o.pathname.includes("#"),cf("#","pathname","hash",o)),et(!o.search||!o.search.includes("#"),cf("#","search","hash",o)));let a=n===""||o.pathname==="",c=a?"/":o.pathname,d;if(c==null)d=t;else{let E=e.length-1;if(!i&&c.startsWith("..")){let T=c.split("/");for(;T[0]==="..";)T.shift(),E-=1;o.pathname=T.join("/")}d=E>=0?e[E]:"/"}let p=OI(o,d),y=c&&c!=="/"&&c.endsWith("/"),_=(a||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||_)&&(p.pathname+="/"),p}var fr=n=>n.join("/").replace(/\/\/+/g,"/"),LI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),MI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,FI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,UI=class{constructor(n,e,t,i=!1){this.status=n,this.statusText=e||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function jI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function BI(n){return n.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var O_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function V_(n,e){let t=n;if(typeof t!="string"||!bI.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let i=t,o=!1;if(O_)try{let a=new URL(window.location.href),c=t.startsWith("//")?new URL(a.protocol+t):new URL(t),d=Qr(c.pathname,e);c.origin===a.origin&&d!=null?t=d+c.search+c.hash:o=!0}catch{Dn(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var L_=["POST","PUT","PATCH","DELETE"];new Set(L_);var $I=["GET",...L_];new Set($I);var ta=V.createContext(null);ta.displayName="DataRouter";var rh=V.createContext(null);rh.displayName="DataRouterState";var zI=V.createContext(!1),M_=V.createContext({isTransitioning:!1});M_.displayName="ViewTransition";var qI=V.createContext(new Map);qI.displayName="Fetchers";var HI=V.createContext(null);HI.displayName="Await";var vn=V.createContext(null);vn.displayName="Navigation";var bl=V.createContext(null);bl.displayName="Location";var bn=V.createContext({outlet:null,matches:[],isDataRoute:!1});bn.displayName="Route";var hp=V.createContext(null);hp.displayName="RouteError";var F_="REACT_ROUTER_ERROR",WI="REDIRECT",KI="ROUTE_ERROR_RESPONSE";function GI(n){if(n.startsWith(`${F_}:${WI}:{`))try{let e=JSON.parse(n.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function QI(n){if(n.startsWith(`${F_}:${KI}:{`))try{let e=JSON.parse(n.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new UI(e.status,e.statusText,e.data)}catch{}}function YI(n,{relative:e}={}){et(na(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=V.useContext(vn),{hash:o,pathname:a,search:c}=Ol(n,{relative:e}),d=a;return t!=="/"&&(d=a==="/"?t:fr([t,a])),i.createHref({pathname:d,search:c,hash:o})}function na(){return V.useContext(bl)!=null}function Er(){return et(na(),"useLocation() may be used only in the context of a <Router> component."),V.useContext(bl).location}var U_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function j_(n){V.useContext(vn).static||V.useLayoutEffect(n)}function Tr(){let{isDataRoute:n}=V.useContext(bn);return n?dS():JI()}function JI(){et(na(),"useNavigate() may be used only in the context of a <Router> component.");let n=V.useContext(ta),{basename:e,navigator:t}=V.useContext(vn),{matches:i}=V.useContext(bn),{pathname:o}=Er(),a=JSON.stringify(cp(i)),c=V.useRef(!1);return j_(()=>{c.current=!0}),V.useCallback((p,y={})=>{if(Dn(c.current,U_),!c.current)return;if(typeof p=="number"){t.go(p);return}let _=nh(p,JSON.parse(a),o,y.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:fr([e,_.pathname])),(y.replace?t.replace:t.push)(_,y.state,y)},[e,t,a,o,n])}var XI=V.createContext(null);function ZI(n){let e=V.useContext(bn).outlet;return V.useMemo(()=>e&&V.createElement(XI.Provider,{value:n},e),[e,n])}function eS(){let{matches:n}=V.useContext(bn),e=n[n.length-1];return e?e.params:{}}function Ol(n,{relative:e}={}){let{matches:t}=V.useContext(bn),{pathname:i}=Er(),o=JSON.stringify(cp(t));return V.useMemo(()=>nh(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function tS(n,e){return B_(n,e)}function B_(n,e,t){var L;et(na(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=V.useContext(vn),{matches:o}=V.useContext(bn),a=o[o.length-1],c=a?a.params:{},d=a?a.pathname:"/",p=a?a.pathnameBase:"/",y=a&&a.route;{let K=y&&y.path||"";z_(d,!y||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let _=Er(),E;if(e){let K=typeof e=="string"?ea(e):e;et(p==="/"||((L=K.pathname)==null?void 0:L.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${K.pathname}" was given in the \`location\` prop.`),E=K}else E=_;let T=E.pathname||"/",N=T;if(p!=="/"){let K=p.replace(/^\//,"").split("/");N="/"+T.replace(/^\//,"").split("/").slice(K.length).join("/")}let B=x_(n,{pathname:N});Dn(y||B!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Dn(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=oS(B&&B.map(K=>Object.assign({},K,{params:Object.assign({},c,K.params),pathname:fr([p,i.encodeLocation?i.encodeLocation(K.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?p:fr([p,i.encodeLocation?i.encodeLocation(K.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:K.pathnameBase])})),o,t);return e&&$?V.createElement(bl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...E},navigationType:"POP"}},$):$}function nS(){let n=hS(),e=jI(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=V.createElement(V.Fragment,null,V.createElement("p",null,"💿 Hey developer 👋"),V.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",V.createElement("code",{style:a},"ErrorBoundary")," or"," ",V.createElement("code",{style:a},"errorElement")," prop on your route.")),V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),t?V.createElement("pre",{style:o},t):null,c)}var rS=V.createElement(nS,null),$_=class extends V.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const t=QI(n.digest);t&&(n=t)}let e=n!==void 0?V.createElement(bn.Provider,{value:this.props.routeContext},V.createElement(hp.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?V.createElement(iS,{error:n},e):e}};$_.contextType=zI;var hf=new WeakMap;function iS({children:n,error:e}){let{basename:t}=V.useContext(vn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=GI(e.digest);if(i){let o=hf.get(e);if(o)throw o;let a=V_(i.location,t);if(O_&&!hf.get(e))if(a.isExternal||i.reloadDocument)window.location.href=a.absoluteURL||a.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:i.replace}));throw hf.set(e,c),c}return V.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return n}function sS({routeContext:n,match:e,children:t}){let i=V.useContext(ta);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),V.createElement(bn.Provider,{value:n},t)}function oS(n,e=[],t){let i=t==null?void 0:t.state;if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let o=n,a=i==null?void 0:i.errors;if(a!=null){let _=o.findIndex(E=>E.route.id&&(a==null?void 0:a[E.route.id])!==void 0);et(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,_+1))}let c=!1,d=-1;if(t&&i){c=i.renderFallback;for(let _=0;_<o.length;_++){let E=o[_];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(d=_),E.route.id){let{loaderData:T,errors:N}=i,B=E.route.loader&&!T.hasOwnProperty(E.route.id)&&(!N||N[E.route.id]===void 0);if(E.route.lazy||B){t.isStatic&&(c=!0),d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}}let p=t==null?void 0:t.onError,y=i&&p?(_,E)=>{var T,N;p(_,{location:i.location,params:((N=(T=i.matches)==null?void 0:T[0])==null?void 0:N.params)??{},unstable_pattern:BI(i.matches),errorInfo:E})}:void 0;return o.reduceRight((_,E,T)=>{let N,B=!1,$=null,L=null;i&&(N=a&&E.route.id?a[E.route.id]:void 0,$=E.route.errorElement||rS,c&&(d<0&&T===0?(z_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,L=null):d===T&&(B=!0,L=E.route.hydrateFallbackElement||null)));let K=e.concat(o.slice(0,T+1)),Z=()=>{let ne;return N?ne=$:B?ne=L:E.route.Component?ne=V.createElement(E.route.Component,null):E.route.element?ne=E.route.element:ne=_,V.createElement(sS,{match:E,routeContext:{outlet:_,matches:K,isDataRoute:i!=null},children:ne})};return i&&(E.route.ErrorBoundary||E.route.errorElement||T===0)?V.createElement($_,{location:i.location,revalidation:i.revalidation,component:$,error:N,children:Z(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:y}):Z()},null)}function dp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function aS(n){let e=V.useContext(ta);return et(e,dp(n)),e}function lS(n){let e=V.useContext(rh);return et(e,dp(n)),e}function uS(n){let e=V.useContext(bn);return et(e,dp(n)),e}function fp(n){let e=uS(n),t=e.matches[e.matches.length-1];return et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function cS(){return fp("useRouteId")}function hS(){var i;let n=V.useContext(hp),e=lS("useRouteError"),t=fp("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function dS(){let{router:n}=aS("useNavigate"),e=fp("useNavigate"),t=V.useRef(!1);return j_(()=>{t.current=!0}),V.useCallback(async(o,a={})=>{Dn(t.current,U_),t.current&&(typeof o=="number"?await n.navigate(o):await n.navigate(o,{fromRouteId:e,...a}))},[n,e])}var jy={};function z_(n,e,t){!e&&!jy[n]&&(jy[n]=!0,Dn(!1,t))}V.memo(fS);function fS({routes:n,future:e,state:t,isStatic:i,onError:o}){return B_(n,void 0,{state:t,isStatic:i,onError:o})}function al({to:n,replace:e,state:t,relative:i}){et(na(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=V.useContext(vn);Dn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=V.useContext(bn),{pathname:c}=Er(),d=Tr(),p=nh(n,cp(a),c,i==="path"),y=JSON.stringify(p);return V.useEffect(()=>{d(JSON.parse(y),{replace:e,state:t,relative:i})},[d,y,i,e,t]),null}function pS(n){return ZI(n.context)}function pn(n){et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mS({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1,unstable_useTransitions:c}){et(!na(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=V.useMemo(()=>({basename:d,navigator:o,static:a,unstable_useTransitions:c,future:{}}),[d,o,a,c]);typeof t=="string"&&(t=ea(t));let{pathname:y="/",search:_="",hash:E="",state:T=null,key:N="default",unstable_mask:B}=t,$=V.useMemo(()=>{let L=Qr(y,d);return L==null?null:{location:{pathname:L,search:_,hash:E,state:T,key:N,unstable_mask:B},navigationType:i}},[d,y,_,E,T,N,i,B]);return Dn($!=null,`<Router basename="${d}"> is not able to match the URL "${y}${_}${E}" because it does not start with the basename, so the <Router> won't render anything.`),$==null?null:V.createElement(vn.Provider,{value:p},V.createElement(bl.Provider,{children:e,value:$}))}function gS({children:n,location:e}){return tS(xf(n),e)}function xf(n,e=[]){let t=[];return V.Children.forEach(n,(i,o)=>{if(!V.isValidElement(i))return;let a=[...e,o];if(i.type===V.Fragment){t.push.apply(t,xf(i.props.children,a));return}et(i.type===pn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),et(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=xf(i.props.children,a)),t.push(c)}),t}var Ec="get",Tc="application/x-www-form-urlencoded";function ih(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function yS(n){return ih(n)&&n.tagName.toLowerCase()==="button"}function vS(n){return ih(n)&&n.tagName.toLowerCase()==="form"}function _S(n){return ih(n)&&n.tagName.toLowerCase()==="input"}function wS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ES(n,e){return n.button===0&&(!e||e==="_self")&&!wS(n)}function Df(n=""){return new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((e,t)=>{let i=n[t];return e.concat(Array.isArray(i)?i.map(o=>[t,o]):[[t,i]])},[]))}function TS(n,e){let t=Df(n);return e&&e.forEach((i,o)=>{t.has(o)||e.getAll(o).forEach(a=>{t.append(o,a)})}),t}var pc=null;function IS(){if(pc===null)try{new FormData(document.createElement("form"),0),pc=!1}catch{pc=!0}return pc}var SS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function df(n){return n!=null&&!SS.has(n)?(Dn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Tc}"`),null):n}function AS(n,e){let t,i,o,a,c;if(vS(n)){let d=n.getAttribute("action");i=d?Qr(d,e):null,t=n.getAttribute("method")||Ec,o=df(n.getAttribute("enctype"))||Tc,a=new FormData(n)}else if(yS(n)||_S(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Qr(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Ec,o=df(n.getAttribute("formenctype"))||df(d.getAttribute("enctype"))||Tc,a=new FormData(d,n),!IS()){let{name:y,type:_,value:E}=n;if(_==="image"){let T=y?`${y}.`:"";a.append(`${T}x`,"0"),a.append(`${T}y`,"0")}else y&&a.append(y,E)}}else{if(ih(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ec,i=null,o=Tc,c=n}return a&&o==="text/plain"&&(c=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function RS(n,e,t,i){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${i}`:o.pathname=`${o.pathname}.${i}`:o.pathname==="/"?o.pathname=`_root.${i}`:e&&Qr(o.pathname,e)==="/"?o.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${i}`,o}async function CS(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function PS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function kS(n,e,t){let i=await Promise.all(n.map(async o=>{let a=e.routes[o.route.id];if(a){let c=await CS(a,t);return c.links?c.links():[]}return[]}));return bS(i.flat(1).filter(PS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function By(n,e,t,i,o,a){let c=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var _;return t[y].pathname!==p.pathname||((_=t[y].route.path)==null?void 0:_.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,y)=>c(p,y)||d(p,y)):a==="data"?e.filter((p,y)=>{var E;let _=i.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(c(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let T=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((E=t[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function NS(n,e,{includeHydrateFallback:t}={}){return xS(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function xS(n){return[...new Set(n)]}function DS(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function bS(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let a=JSON.stringify(DS(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}function q_(){let n=V.useContext(ta);return pp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function OS(){let n=V.useContext(rh);return pp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var mp=V.createContext(void 0);mp.displayName="FrameworkContext";function H_(){let n=V.useContext(mp);return pp(n,"You must render this element inside a <HydratedRouter> element"),n}function VS(n,e){let t=V.useContext(mp),[i,o]=V.useState(!1),[a,c]=V.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:_,onTouchStart:E}=e,T=V.useRef(null);V.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let $=K=>{K.forEach(Z=>{c(Z.isIntersecting)})},L=new IntersectionObserver($,{threshold:.5});return T.current&&L.observe(T.current),()=>{L.disconnect()}}},[n]),V.useEffect(()=>{if(i){let $=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout($)}}},[i]);let N=()=>{o(!0)},B=()=>{o(!1),c(!1)};return t?n!=="intent"?[a,T,{}]:[a,T,{onFocus:sl(d,N),onBlur:sl(p,B),onMouseEnter:sl(y,N),onMouseLeave:sl(_,B),onTouchStart:sl(E,N)}]:[!1,T,{}]}function sl(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function LS({page:n,...e}){let{router:t}=q_(),i=V.useMemo(()=>x_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?V.createElement(FS,{page:n,matches:i,...e}):null}function MS(n){let{manifest:e,routeModules:t}=H_(),[i,o]=V.useState([]);return V.useEffect(()=>{let a=!1;return kS(n,e,t).then(c=>{a||o(c)}),()=>{a=!0}},[n,e,t]),i}function FS({page:n,matches:e,...t}){let i=Er(),{future:o,manifest:a,routeModules:c}=H_(),{basename:d}=q_(),{loaderData:p,matches:y}=OS(),_=V.useMemo(()=>By(n,e,y,a,i,"data"),[n,e,y,a,i]),E=V.useMemo(()=>By(n,e,y,a,i,"assets"),[n,e,y,a,i]),T=V.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let $=new Set,L=!1;if(e.forEach(Z=>{var ae;let ne=a.routes[Z.route.id];!ne||!ne.hasLoader||(!_.some(te=>te.route.id===Z.route.id)&&Z.route.id in p&&((ae=c[Z.route.id])!=null&&ae.shouldRevalidate)||ne.hasClientLoader?L=!0:$.add(Z.route.id))}),$.size===0)return[];let K=RS(n,d,o.unstable_trailingSlashAwareDataRequests,"data");return L&&$.size>0&&K.searchParams.set("_routes",e.filter(Z=>$.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[K.pathname+K.search]},[d,o.unstable_trailingSlashAwareDataRequests,p,i,a,_,e,n,c]),N=V.useMemo(()=>NS(E,a),[E,a]),B=MS(E);return V.createElement(V.Fragment,null,T.map($=>V.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...t})),N.map($=>V.createElement("link",{key:$,rel:"modulepreload",href:$,...t})),B.map(({key:$,link:L})=>V.createElement("link",{key:$,nonce:t.nonce,...L,crossOrigin:L.crossOrigin??t.crossOrigin})))}function US(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var jS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jS&&(window.__reactRouterVersion="7.13.1")}catch{}function BS({basename:n,children:e,unstable_useTransitions:t,window:i}){let o=V.useRef();o.current==null&&(o.current=gI({window:i,v5Compat:!0}));let a=o.current,[c,d]=V.useState({action:a.action,location:a.location}),p=V.useCallback(y=>{t===!1?d(y):V.startTransition(()=>d(y))},[t]);return V.useLayoutEffect(()=>a.listen(p),[a,p]),V.createElement(mS,{basename:n,children:e,location:c.location,navigationType:c.action,navigator:a,unstable_useTransitions:t})}var W_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vl=V.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:c,unstable_mask:d,state:p,target:y,to:_,preventScrollReset:E,viewTransition:T,unstable_defaultShouldRevalidate:N,...B},$){let{basename:L,navigator:K,unstable_useTransitions:Z}=V.useContext(vn),ne=typeof _=="string"&&W_.test(_),ae=V_(_,L);_=ae.to;let te=YI(_,{relative:o}),de=Er(),D=null;if(d){let Ge=nh(d,[],de.unstable_mask?de.unstable_mask.pathname:"/",!0);L!=="/"&&(Ge.pathname=Ge.pathname==="/"?L:fr([L,Ge.pathname])),D=K.createHref(Ge)}let[S,C,x]=VS(i,B),O=qS(_,{replace:c,unstable_mask:d,state:p,target:y,preventScrollReset:E,relative:o,viewTransition:T,unstable_defaultShouldRevalidate:N,unstable_useTransitions:Z});function F(Ge){e&&e(Ge),Ge.defaultPrevented||O(Ge)}let R=!(ae.isExternal||a),Je=V.createElement("a",{...B,...x,href:(R?D:void 0)||ae.absoluteURL||te,onClick:R?F:e,ref:US($,C),target:y,"data-discover":!ne&&t==="render"?"true":void 0});return S&&!ne?V.createElement(V.Fragment,null,Je,V.createElement(LS,{page:te})):Je});Vl.displayName="Link";var Ic=V.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:c,viewTransition:d,children:p,...y},_){let E=Ol(c,{relative:y.relative}),T=Er(),N=V.useContext(rh),{navigator:B,basename:$}=V.useContext(vn),L=N!=null&&YS(E)&&d===!0,K=B.encodeLocation?B.encodeLocation(E).pathname:E.pathname,Z=T.pathname,ne=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(Z=Z.toLowerCase(),ne=ne?ne.toLowerCase():null,K=K.toLowerCase()),ne&&$&&(ne=Qr(ne,$)||ne);const ae=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let te=Z===K||!o&&Z.startsWith(K)&&Z.charAt(ae)==="/",de=ne!=null&&(ne===K||!o&&ne.startsWith(K)&&ne.charAt(K.length)==="/"),D={isActive:te,isPending:de,isTransitioning:L},S=te?e:void 0,C;typeof i=="function"?C=i(D):C=[i,te?"active":null,de?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let x=typeof a=="function"?a(D):a;return V.createElement(Vl,{...y,"aria-current":S,className:C,ref:_,style:x,to:c,viewTransition:d},typeof p=="function"?p(D):p)});Ic.displayName="NavLink";var $S=V.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:c=Ec,action:d,onSubmit:p,relative:y,preventScrollReset:_,viewTransition:E,unstable_defaultShouldRevalidate:T,...N},B)=>{let{unstable_useTransitions:$}=V.useContext(vn),L=GS(),K=QS(d,{relative:y}),Z=c.toLowerCase()==="get"?"get":"post",ne=typeof d=="string"&&W_.test(d),ae=te=>{if(p&&p(te),te.defaultPrevented)return;te.preventDefault();let de=te.nativeEvent.submitter,D=(de==null?void 0:de.getAttribute("formmethod"))||c,S=()=>L(de||te.currentTarget,{fetcherKey:e,method:D,navigate:t,replace:o,state:a,relative:y,preventScrollReset:_,viewTransition:E,unstable_defaultShouldRevalidate:T});$&&t!==!1?V.startTransition(()=>S()):S()};return V.createElement("form",{ref:B,method:Z,action:K,onSubmit:i?p:ae,...N,"data-discover":!ne&&n==="render"?"true":void 0})});$S.displayName="Form";function zS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function K_(n){let e=V.useContext(ta);return et(e,zS(n)),e}function qS(n,{target:e,replace:t,unstable_mask:i,state:o,preventScrollReset:a,relative:c,viewTransition:d,unstable_defaultShouldRevalidate:p,unstable_useTransitions:y}={}){let _=Tr(),E=Er(),T=Ol(n,{relative:c});return V.useCallback(N=>{if(ES(N,e)){N.preventDefault();let B=t!==void 0?t:wl(E)===wl(T),$=()=>_(n,{replace:B,unstable_mask:i,state:o,preventScrollReset:a,relative:c,viewTransition:d,unstable_defaultShouldRevalidate:p});y?V.startTransition(()=>$()):$()}},[E,_,T,t,i,o,e,n,a,c,d,p,y])}function HS(n){Dn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=V.useRef(Df(n)),t=V.useRef(!1),i=Er(),o=V.useMemo(()=>TS(i.search,t.current?null:e.current),[i.search]),a=Tr(),c=V.useCallback((d,p)=>{const y=Df(typeof d=="function"?d(new URLSearchParams(o)):d);t.current=!0,a("?"+y,p)},[a,o]);return[o,c]}var WS=0,KS=()=>`__${String(++WS)}__`;function GS(){let{router:n}=K_("useSubmit"),{basename:e}=V.useContext(vn),t=cS(),i=n.fetch,o=n.navigate;return V.useCallback(async(a,c={})=>{let{action:d,method:p,encType:y,formData:_,body:E}=AS(a,e);if(c.navigate===!1){let T=c.fetcherKey||KS();await i(T,t,c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:_,body:E,formMethod:c.method||p,formEncType:c.encType||y,flushSync:c.flushSync})}else await o(c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:_,body:E,formMethod:c.method||p,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[i,o,e,t])}function QS(n,{relative:e}={}){let{basename:t}=V.useContext(vn),i=V.useContext(bn);et(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...Ol(n||".",{relative:e})},c=Er();if(n==null){a.search=c.search;let d=new URLSearchParams(a.search),p=d.getAll("index");if(p.some(_=>_==="")){d.delete("index"),p.filter(E=>E).forEach(E=>d.append("index",E));let _=d.toString();a.search=_?`?${_}`:""}}return(!n||n===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:fr([t,a.pathname])),wl(a)}function YS(n,{relative:e}={}){let t=V.useContext(M_);et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=K_("useViewTransitionState"),o=Ol(n,{relative:e});if(!t.isTransitioning)return!1;let a=Qr(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Qr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return bc(o.pathname,c)!=null||bc(o.pathname,a)!=null}const JS=()=>{};var $y={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},XS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(a&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,_=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|y>>6,N=y&63;p||(N=64,c||(T=64)),i.push(t[_],t[E],t[T],t[N])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(G_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):XS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||y==null||E==null)throw new ZS;const T=a<<2|d>>4;if(i.push(T),y!==64){const N=d<<4&240|y>>2;if(i.push(N),E!==64){const B=y<<6&192|E;i.push(B)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ZS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eA=function(n){const e=G_(n);return Q_.encodeByteArray(e,!0)},Oc=function(n){return eA(n).replace(/\./g,"")},Y_=function(n){try{return Q_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=()=>tA().__FIREBASE_DEFAULTS__,rA=()=>{if(typeof process>"u"||typeof $y>"u")return;const n=$y.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},iA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Y_(n[1]);return e&&JSON.parse(e)},sh=()=>{try{return JS()||nA()||rA()||iA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},J_=n=>{var e,t;return(t=(e=sh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},sA=n=>{const e=J_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},X_=()=>{var n;return(n=sh())===null||n===void 0?void 0:n.config},Z_=n=>{var e;return(e=sh())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ew(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Oc(JSON.stringify(t)),Oc(JSON.stringify(c)),""].join(".")}const fl={};function lA(){const n={prod:[],emulator:[]};for(const e of Object.keys(fl))fl[e]?n.emulator.push(e):n.prod.push(e);return n}function uA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let zy=!1;function tw(n,e){if(typeof window>"u"||typeof document>"u"||!ra(window.location.host)||fl[n]===e||fl[n]||zy)return;fl[n]=e;function t(T){return`__firebase__banner__${T}`}const i="__firebase__banner",a=lA().prod.length>0;function c(){const T=document.getElementById(i);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,N){T.setAttribute("width","24"),T.setAttribute("id",N),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function y(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{zy=!0,c()},T}function _(T,N){T.setAttribute("id",N),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=uA(i),N=t("text"),B=document.getElementById(N)||document.createElement("span"),$=t("learnmore"),L=document.getElementById($)||document.createElement("a"),K=t("preprendIcon"),Z=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const ne=T.element;d(ne),_(L,$);const ae=y();p(Z,K),ne.append(Z,B,L,ae),document.body.appendChild(ne)}a?(B.innerText="Preview backend disconnected.",Z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function hA(){var n;const e=(n=sh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mA(){const n=qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gA(){return!hA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yA(){try{return typeof indexedDB=="object"}catch{return!1}}function vA(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="FirebaseError";class Ir extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=_A,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vs.prototype.create)}}class Vs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?wA(a,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new Ir(o,d,i)}}function wA(n,e){return n.replace(EA,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const EA=/\{\$([^}]+)}/g;function TA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],c=e[o];if(qy(a)&&qy(c)){if(!Yr(a,c))return!1}else if(a!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function qy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ll(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,a]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function ul(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function IA(n,e){const t=new SA(n,e);return t.subscribe.bind(t)}class SA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");AA(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=ff),o.error===void 0&&(o.error=ff),o.complete===void 0&&(o.complete=ff);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ff(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n){return n&&n._delegate?n._delegate:n}class Xn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new oA;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PA(e))try{this.getOrInitializeService({instanceIdentifier:As})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=As){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=As){return this.instances.has(e)}getOptions(e=As){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:CA(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=As){return this.component?this.component.multipleInstances?e:As:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CA(n){return n===As?void 0:n}function PA(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new RA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const NA={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},xA=ke.INFO,DA={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},bA=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=DA[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gp{constructor(e){this.name=e,this._logLevel=xA,this._logHandler=bA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const OA=(n,e)=>e.some(t=>n instanceof t);let Hy,Wy;function VA(){return Hy||(Hy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LA(){return Wy||(Wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nw=new WeakMap,bf=new WeakMap,rw=new WeakMap,pf=new WeakMap,yp=new WeakMap;function MA(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Hr(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&nw.set(t,n)}).catch(()=>{}),yp.set(e,n),e}function FA(n){if(bf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});bf.set(n,e)}let Of={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return bf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Hr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function UA(n){Of=n(Of)}function jA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(mf(this),e,...t);return rw.set(i,e.sort?e.sort():[e]),Hr(i)}:LA().includes(n)?function(...e){return n.apply(mf(this),e),Hr(nw.get(this))}:function(...e){return Hr(n.apply(mf(this),e))}}function BA(n){return typeof n=="function"?jA(n):(n instanceof IDBTransaction&&FA(n),OA(n,VA())?new Proxy(n,Of):n)}function Hr(n){if(n instanceof IDBRequest)return MA(n);if(pf.has(n))return pf.get(n);const e=BA(n);return e!==n&&(pf.set(n,e),yp.set(e,n)),e}const mf=n=>yp.get(n);function oh(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const c=indexedDB.open(n,e),d=Hr(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Hr(c.result),p.oldVersion,p.newVersion,Hr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}function gf(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),Hr(t).then(()=>{})}const $A=["get","getKey","getAll","getAllKeys","count"],zA=["put","add","delete","clear"],yf=new Map;function Ky(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(yf.get(e))return yf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=zA.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||$A.includes(t)))return;const a=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return yf.set(e,a),a}UA(n=>({...n,get:(e,t,i)=>Ky(e,t)||n.get(e,t,i),has:(e,t)=>!!Ky(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(HA(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function HA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vf="@firebase/app",Gy="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new gp("@firebase/app"),WA="@firebase/app-compat",KA="@firebase/analytics-compat",GA="@firebase/analytics",QA="@firebase/app-check-compat",YA="@firebase/app-check",JA="@firebase/auth",XA="@firebase/auth-compat",ZA="@firebase/database",eR="@firebase/data-connect",tR="@firebase/database-compat",nR="@firebase/functions",rR="@firebase/functions-compat",iR="@firebase/installations",sR="@firebase/installations-compat",oR="@firebase/messaging",aR="@firebase/messaging-compat",lR="@firebase/performance",uR="@firebase/performance-compat",cR="@firebase/remote-config",hR="@firebase/remote-config-compat",dR="@firebase/storage",fR="@firebase/storage-compat",pR="@firebase/firestore",mR="@firebase/ai",gR="@firebase/firestore-compat",yR="firebase",vR="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="[DEFAULT]",_R={[Vf]:"fire-core",[WA]:"fire-core-compat",[GA]:"fire-analytics",[KA]:"fire-analytics-compat",[YA]:"fire-app-check",[QA]:"fire-app-check-compat",[JA]:"fire-auth",[XA]:"fire-auth-compat",[ZA]:"fire-rtdb",[eR]:"fire-data-connect",[tR]:"fire-rtdb-compat",[nR]:"fire-fn",[rR]:"fire-fn-compat",[iR]:"fire-iid",[sR]:"fire-iid-compat",[oR]:"fire-fcm",[aR]:"fire-fcm-compat",[lR]:"fire-perf",[uR]:"fire-perf-compat",[cR]:"fire-rc",[hR]:"fire-rc-compat",[dR]:"fire-gcs",[fR]:"fire-gcs-compat",[pR]:"fire-fst",[gR]:"fire-fst-compat",[mR]:"fire-vertex","fire-js":"fire-js",[yR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=new Map,wR=new Map,Mf=new Map;function Qy(n,e){try{n.container.addComponent(e)}catch(t){Jr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vr(n){const e=n.name;if(Mf.has(e))return Jr.debug(`There were multiple attempts to register component ${e}.`),!1;Mf.set(e,n);for(const t of Vc.values())Qy(t,n);for(const t of wR.values())Qy(t,n);return!0}function Ml(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function kn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vi=new Vs("app","Firebase",ER);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=vR;function iw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Lf,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Vi.create("bad-app-name",{appName:String(o)});if(t||(t=X_()),!t)throw Vi.create("no-options");const a=Vc.get(o);if(a){if(Yr(t,a.options)&&Yr(i,a.config))return a;throw Vi.create("duplicate-app",{appName:o})}const c=new kA(o);for(const p of Mf.values())c.addComponent(p);const d=new TR(t,i,c);return Vc.set(o,d),d}function sw(n=Lf){const e=Vc.get(n);if(!e&&n===Lf&&X_())return iw();if(!e)throw Vi.create("no-app",{appName:n});return e}function Nn(n,e,t){var i;let o=(i=_R[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jr.warn(d.join(" "));return}vr(new Xn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="firebase-heartbeat-database",SR=1,El="firebase-heartbeat-store";let vf=null;function ow(){return vf||(vf=oh(IR,SR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(El)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vi.create("idb-open",{originalErrorMessage:n.message})})),vf}async function AR(n){try{const t=(await ow()).transaction(El),i=await t.objectStore(El).get(aw(n));return await t.done,i}catch(e){if(e instanceof Ir)Jr.warn(e.message);else{const t=Vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jr.warn(t.message)}}}async function Yy(n,e){try{const i=(await ow()).transaction(El,"readwrite");await i.objectStore(El).put(e,aw(n)),await i.done}catch(t){if(t instanceof Ir)Jr.warn(t.message);else{const i=Vi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Jr.warn(i.message)}}}function aw(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=1024,CR=30;class PR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new NR(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Jy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>CR){const c=xR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Jr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Jy(),{heartbeatsToSend:i,unsentEntries:o}=kR(this._heartbeatsCache.heartbeats),a=Oc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Jr.warn(t),""}}}function Jy(){return new Date().toISOString().substring(0,10)}function kR(n,e=RR){const t=[];let i=n.slice();for(const o of n){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),Xy(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Xy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class NR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yA()?vA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await AR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Xy(n){return Oc(JSON.stringify({version:2,heartbeats:n})).length}function xR(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(n){vr(new Xn("platform-logger",e=>new qA(e),"PRIVATE")),vr(new Xn("heartbeat",e=>new PR(e),"PRIVATE")),Nn(Vf,Gy,n),Nn(Vf,Gy,"esm2017"),Nn("fire-js","")}DR("");function vp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function lw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bR=lw,uw=new Vs("auth","Firebase",lw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new gp("@firebase/auth");function OR(n,...e){Lc.logLevel<=ke.WARN&&Lc.warn(`Auth (${ia}): ${n}`,...e)}function Sc(n,...e){Lc.logLevel<=ke.ERROR&&Lc.error(`Auth (${ia}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(n,...e){throw _p(n,...e)}function pr(n,...e){return _p(n,...e)}function cw(n,e,t){const i=Object.assign(Object.assign({},bR()),{[e]:t});return new Vs("auth","Firebase",i).create(e,{appName:n.name})}function Wr(n){return cw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _p(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return uw.create(n,...e)}function we(n,e,...t){if(!n)throw _p(e,...t)}function zr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Sc(e),new Error(e)}function Xr(n,e){n||zr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function VR(){return Zy()==="http:"||Zy()==="https:"}function Zy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VR()||fA()||"connection"in navigator)?navigator.onLine:!0}function MR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Xr(t>e,"Short delay should be less than long delay!"),this.isMobile=cA()||pA()}get(){return LR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(n,e){Xr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jR=new Fl(3e4,6e4);function Wi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ki(n,e,t,i,o={}){return dw(n,o,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const d=Ll(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},a);return dA()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&ra(n.emulatorConfig.host)&&(y.credentials="include"),hw.fetch()(await fw(n,n.config.apiHost,t,d),y)})}async function dw(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},FR),e);try{const o=new $R(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw mc(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const d=a.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw mc(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw mc(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw mc(n,"user-disabled",c);const _=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw cw(n,_,y);Zn(n,_)}}catch(o){if(o instanceof Ir)throw o;Zn(n,"network-request-failed",{message:String(o)})}}async function Ul(n,e,t,i,o={}){const a=await Ki(n,e,t,i,o);return"mfaPendingCredential"in a&&Zn(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function fw(n,e,t,i){const o=`${e}${t}?${i}`,a=n,c=a.config.emulator?wp(n.config,o):`${n.config.apiScheme}://${o}`;return UR.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function BR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $R{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(pr(this.auth,"network-request-failed")),jR.get())})}}function mc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=pr(n,e,i);return o.customData._tokenResponse=t,o}function ev(n){return n!==void 0&&n.enterprise!==void 0}class zR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return BR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qR(n,e){return Ki(n,"GET","/v2/recaptchaConfig",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(n,e){return Ki(n,"POST","/v1/accounts:delete",e)}async function Mc(n,e){return Ki(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WR(n,e=!1){const t=Et(n),i=await t.getIdToken(e),o=Ep(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:pl(_f(o.auth_time)),issuedAtTime:pl(_f(o.iat)),expirationTime:pl(_f(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function _f(n){return Number(n)*1e3}function Ep(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Sc("JWT malformed, contained fewer than 3 sections"),null;try{const o=Y_(t);return o?JSON.parse(o):(Sc("Failed to decode base64 JWT payload"),null)}catch(o){return Sc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function tv(n){const e=Ep(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ir&&KR(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function KR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pl(this.lastLoginAt),this.creationTime=pl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Tl(n,Mc(t,{idToken:i}));we(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?pw(a.providerUserInfo):[],d=YR(n.providerData,c),p=n.isAnonymous,y=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),_=p?y:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Uf(a.createdAt,a.lastLoginAt),isAnonymous:_};Object.assign(n,E)}async function QR(n){const e=Et(n);await Fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YR(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function pw(n){return n.map(e=>{var{providerId:t}=e,i=vp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(n,e){const t=await dw(n,{},async()=>{const i=Ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=await fw(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:i};return n.emulatorConfig&&ra(n.emulatorConfig.host)&&(p.credentials="include"),hw.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function XR(n,e){return Ki(n,"POST","/v2/accounts:revokeToken",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=tv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await JR(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,c=new Bo;return i&&(we(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(we(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bo,this.toJSON())}_performRefresh(){return zr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,a=vp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Uf(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Tl(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return WR(this,e)}reload(){return QR(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Fc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(Wr(this.auth));const e=await this.getIdToken();return await Tl(this,HR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,a,c,d,p,y,_;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,T=(o=t.email)!==null&&o!==void 0?o:void 0,N=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,B=(c=t.photoURL)!==null&&c!==void 0?c:void 0,$=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,K=(y=t.createdAt)!==null&&y!==void 0?y:void 0,Z=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:ne,emailVerified:ae,isAnonymous:te,providerData:de,stsTokenManager:D}=t;we(ne&&D,e,"internal-error");const S=Bo.fromJSON(this.name,D);we(typeof ne=="string",e,"internal-error"),ki(E,e.name),ki(T,e.name),we(typeof ae=="boolean",e,"internal-error"),we(typeof te=="boolean",e,"internal-error"),ki(N,e.name),ki(B,e.name),ki($,e.name),ki(L,e.name),ki(K,e.name),ki(Z,e.name);const C=new Qn({uid:ne,auth:e,email:T,emailVerified:ae,displayName:E,isAnonymous:te,photoURL:B,phoneNumber:N,tenantId:$,stsTokenManager:S,createdAt:K,lastLoginAt:Z});return de&&Array.isArray(de)&&(C.providerData=de.map(x=>Object.assign({},x))),L&&(C._redirectEventId=L),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new Bo;o.updateFromServerResponse(t);const a=new Qn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Fc(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?pw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new Bo;d.updateFromIdToken(i);const p=new Qn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Uf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=new Map;function qr(n){Xr(n instanceof Function,"Expected a class definition");let e=nv.get(n);return e?(Xr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nv.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mw.type="NONE";const rv=mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,e,t){return`firebase:${n}:${e}:${t}`}class $o{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=Ac(this.userKey,o.apiKey,a),this.fullPersistenceKey=Ac("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Mc(this.auth,{idToken:e}).catch(()=>{});return t?Qn._fromGetAccountInfoResponse(this.auth,t,e):null}return Qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new $o(qr(rv),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=o[0]||qr(rv);const c=Ac(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const _=await y._get(c);if(_){let E;if(typeof _=="string"){const T=await Mc(e,{idToken:_}).catch(()=>{});if(!T)break;E=await Qn._fromGetAccountInfoResponse(e,T,_)}else E=Qn._fromJSON(e,_);y!==a&&(d=E),a=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new $o(a,e,i):(a=p[0],d&&await a._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(c)}catch{}})),new $o(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_w(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ew(e))return"Blackberry";if(Tw(e))return"Webos";if(yw(e))return"Safari";if((e.includes("chrome/")||vw(e))&&!e.includes("edge/"))return"Chrome";if(ww(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function gw(n=qt()){return/firefox\//i.test(n)}function yw(n=qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vw(n=qt()){return/crios\//i.test(n)}function _w(n=qt()){return/iemobile/i.test(n)}function ww(n=qt()){return/android/i.test(n)}function Ew(n=qt()){return/blackberry/i.test(n)}function Tw(n=qt()){return/webos/i.test(n)}function Tp(n=qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ZR(n=qt()){var e;return Tp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eC(){return mA()&&document.documentMode===10}function Iw(n=qt()){return Tp(n)||ww(n)||Tw(n)||Ew(n)||/windows phone/i.test(n)||_w(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(n,e=[]){let t;switch(n){case"Browser":t=iv(qt());break;case"Worker":t=`${iv(qt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ia}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,d)=>{try{const p=e(a);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(n,e={}){return Ki(n,"GET","/v2/passwordPolicy",Wi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=6;class iC{constructor(e){var t,i,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:rC,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,a,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sv(this),this.idTokenSubscription=new sv(this),this.beforeStateQueue=new tC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qr(t)),this._initializationPromise=this.queue(async()=>{var i,o,a;if(!this._deleted&&(this.persistenceManager=await $o.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Mc(this,{idToken:e}),i=await Qn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(kn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(Wr(this));const t=e?Et(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(Wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(Wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nC(this),t=new iC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await XR(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await $o.create(this,[qr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(d,this,"internal-error"),d.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&OR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ls(n){return Et(n)}class sv{constructor(e){this.auth=e,this.observer=null,this.addObserver=IA(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ah={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oC(n){ah=n}function Aw(n){return ah.loadJS(n)}function aC(){return ah.recaptchaEnterpriseScript}function lC(){return ah.gapiScript}function uC(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class cC{constructor(){this.enterprise=new hC}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class hC{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const dC="recaptcha-enterprise",Rw="NO_RECAPTCHA";class fC{constructor(e){this.type=dC,this.auth=Ls(e)}async verify(e="verify",t=!1){async function i(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,d)=>{qR(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new zR(p);return a.tenantId==null?a._agentRecaptchaConfig=y:a._tenantRecaptchaConfigs[a.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(a,c,d){const p=window.grecaptcha;ev(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(y=>{c(y)}).catch(()=>{c(Rw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new cC().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{i(this.auth).then(d=>{if(!t&&ev(window.grecaptcha))o(d,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=aC();p.length!==0&&(p+=d),Aw(p).then(()=>{o(d,a,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function ov(n,e,t,i=!1,o=!1){const a=new fC(n);let c;if(o)c=Rw;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function jf(n,e,t,i,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await ov(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await ov(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(n,e){const t=Ml(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Yr(a,e??{}))return o;Zn(o,"already-initialized")}return t.initialize({options:e})}function mC(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(qr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function gC(n,e,t){const i=Ls(n);we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=Cw(e),{host:c,port:d}=yC(e),p=d===null?"":`:${d}`,y={url:`${a}//${c}${p}/`},_=Object.freeze({host:c,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){we(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),we(Yr(y,i.config.emulator)&&Yr(_,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=_,i.settings.appVerificationDisabledForTesting=!0,ra(c)?(ew(`${a}//${c}${p}`),tw("Auth",!0)):vC()}function Cw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yC(n){const e=Cw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:av(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:av(c)}}}function av(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function vC(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return zr("not implemented")}_getIdTokenResponse(e){return zr("not implemented")}_linkToIdToken(e,t){return zr("not implemented")}_getReauthenticationResolver(e){return zr("not implemented")}}async function _C(n,e){return Ki(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(n,e){return Ul(n,"POST","/v1/accounts:signInWithPassword",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(n,e){return Ul(n,"POST","/v1/accounts:signInWithEmailLink",Wi(n,e))}async function TC(n,e){return Ul(n,"POST","/v1/accounts:signInWithEmailLink",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends Ip{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Il(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Il(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jf(e,t,"signInWithPassword",wC);case"emailLink":return EC(e,{email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jf(e,i,"signUpPassword",_C);case"emailLink":return TC(e,{idToken:t,email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(n,e){return Ul(n,"POST","/v1/accounts:signInWithIdp",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="http://localhost";class Ps extends Ip{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,a=vp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Ps(i,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return zo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,zo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zo(e,t)}buildRequest(){const e={requestUri:IC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ll(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AC(n){const e=ll(ul(n)).link,t=e?ll(ul(e)).deep_link_id:null,i=ll(ul(n)).deep_link_id;return(i?ll(ul(i)).link:null)||i||t||e||n}class Sp{constructor(e){var t,i,o,a,c,d;const p=ll(ul(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(i=p.oobCode)!==null&&i!==void 0?i:null,E=SC((o=p.mode)!==null&&o!==void 0?o:null);we(y&&_&&E,"argument-error"),this.apiKey=y,this.operation=E,this.code=_,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=AC(e);try{return new Sp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.providerId=sa.PROVIDER_ID}static credential(e,t){return Il._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Sp.parseLink(t);return we(i,"argument-error"),Il._fromEmailAndCode(e,i.code,i.tenantId)}}sa.PROVIDER_ID="password";sa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Pw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends jl{constructor(){super("facebook.com")}static credential(e){return Ps._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ni.credential(e.oauthAccessToken)}catch{return null}}}Ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ni.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends jl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ps._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return xi.credential(t,i)}catch{return null}}}xi.GOOGLE_SIGN_IN_METHOD="google.com";xi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends jl{constructor(){super("github.com")}static credential(e){return Ps._fromParams({providerId:Di.PROVIDER_ID,signInMethod:Di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Di.credentialFromTaggedObject(e)}static credentialFromError(e){return Di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Di.credential(e.oauthAccessToken)}catch{return null}}}Di.GITHUB_SIGN_IN_METHOD="github.com";Di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends jl{constructor(){super("twitter.com")}static credential(e,t){return Ps._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return bi.credential(t,i)}catch{return null}}}bi.TWITTER_SIGN_IN_METHOD="twitter.com";bi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(n,e){return Ul(n,"POST","/v1/accounts:signUp",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const a=await Qn._fromIdTokenResponse(e,i,o),c=lv(i);return new ks({user:a,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=lv(i);return new ks({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function lv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends Ir{constructor(e,t,i,o){var a;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Uc(e,t,i,o)}}function kw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(n,a,e,i):a})}async function CC(n,e,t=!1){const i=await Tl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ks._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(n,e,t=!1){const{auth:i}=n;if(kn(i.app))return Promise.reject(Wr(i));const o="reauthenticate";try{const a=await Tl(n,kw(i,o,e,n),t);we(a.idToken,i,"internal-error");const c=Ep(a.idToken);we(c,i,"internal-error");const{sub:d}=c;return we(n.uid===d,i,"user-mismatch"),ks._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Zn(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(n,e,t=!1){if(kn(n.app))return Promise.reject(Wr(n));const i="signIn",o=await kw(n,i,e),a=await ks._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}async function kC(n,e){return Nw(Ls(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(n){const e=Ls(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function NC(n,e,t){if(kn(n.app))return Promise.reject(Wr(n));const i=Ls(n),c=await jf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RC).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&xw(n),p}),d=await ks._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function xC(n,e,t){return kn(n.app)?Promise.reject(Wr(n)):kC(Et(n),sa.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&xw(n),i})}function DC(n,e,t,i){return Et(n).onIdTokenChanged(e,t,i)}function bC(n,e,t){return Et(n).beforeAuthStateChanged(e,t)}function OC(n,e,t,i){return Et(n).onAuthStateChanged(e,t,i)}function VC(n){return Et(n).signOut()}const jc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jc,"1"),this.storage.removeItem(jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=1e3,MC=10;class bw extends Dw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);eC()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,MC):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},LC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bw.type="LOCAL";const FC=bw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow extends Dw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ow.type="SESSION";const Vw=Ow;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new lh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,a)),p=await UC(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((d,p)=>{const y=Ap("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(E){const T=E;if(T.data.eventId===y)switch(T.data.status){case"ack":clearTimeout(_),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(_),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(){return window}function BC(n){mr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(){return typeof mr().WorkerGlobalScope<"u"&&typeof mr().importScripts=="function"}async function $C(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function qC(){return Lw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="firebaseLocalStorageDb",HC=1,Bc="firebaseLocalStorage",Fw="fbase_key";class Bl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uh(n,e){return n.transaction([Bc],e?"readwrite":"readonly").objectStore(Bc)}function WC(){const n=indexedDB.deleteDatabase(Mw);return new Bl(n).toPromise()}function Bf(){const n=indexedDB.open(Mw,HC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Bc,{keyPath:Fw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Bc)?e(i):(i.close(),await WC(),e(await Bf()))})})}async function uv(n,e,t){const i=uh(n,!0).put({[Fw]:e,value:t});return new Bl(i).toPromise()}async function KC(n,e){const t=uh(n,!1).get(e),i=await new Bl(t).toPromise();return i===void 0?null:i.value}function cv(n,e){const t=uh(n,!0).delete(e);return new Bl(t).toPromise()}const GC=800,QC=3;class Uw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>QC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lh._getInstance(qC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $C(),!this.activeServiceWorker)return;this.sender=new jC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bf();return await uv(e,jc,"1"),await cv(e,jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>uv(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>KC(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>cv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=uh(o,!1).getAll();return new Bl(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uw.type="LOCAL";const YC=Uw;new Fl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(n,e){return e?qr(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp extends Ip{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function XC(n){return Nw(n.auth,new Rp(n),n.bypassAuthState)}function ZC(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),PC(t,new Rp(n),n.bypassAuthState)}async function e1(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),CC(t,new Rp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XC;case"linkViaPopup":case"linkViaRedirect":return e1;case"reauthViaPopup":case"reauthViaRedirect":return ZC;default:Zn(this.auth,"internal-error")}}resolve(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=new Fl(2e3,1e4);class Uo extends jw{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,Uo.currentPopupAction&&Uo.currentPopupAction.cancel(),Uo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Xr(this.filter.length===1,"Popup operations only handle one event");const e=Ap();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Uo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,t1.get())};e()}}Uo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="pendingRedirect",Rc=new Map;class r1 extends jw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Rc.get(this.auth._key());if(!e){try{const i=await i1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Rc.set(this.auth._key(),e)}return this.bypassAuthState||Rc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function i1(n,e){const t=a1(e),i=o1(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function s1(n,e){Rc.set(n._key(),e)}function o1(n){return qr(n._redirectPersistence)}function a1(n){return Ac(n1,n.config.apiKey,n.name)}async function l1(n,e,t=!1){if(kn(n.app))return Promise.reject(Wr(n));const i=Ls(n),o=JC(i,e),c=await new r1(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=600*1e3;class c1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!h1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Bw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(pr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=u1&&this.cachedEventUids.clear(),this.cachedEventUids.has(hv(e))}saveEventToCache(e){this.cachedEventUids.add(hv(e)),this.lastProcessedEventTime=Date.now()}}function hv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function h1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(n,e={}){return Ki(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,p1=/^https?/;async function m1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await d1(n);for(const t of e)try{if(g1(t))return}catch{}Zn(n,"unauthorized-domain")}function g1(n){const e=Ff(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!p1.test(t))return!1;if(f1.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=new Fl(3e4,6e4);function dv(){const n=mr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function v1(n){return new Promise((e,t)=>{var i,o,a;function c(){dv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dv(),t(pr(n,"network-request-failed"))},timeout:y1.get()})}if(!((o=(i=mr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=mr().gapi)===null||a===void 0)&&a.load)c();else{const d=uC("iframefcb");return mr()[d]=()=>{gapi.load?c():t(pr(n,"network-request-failed"))},Aw(`${lC()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Cc=null,e})}let Cc=null;function _1(n){return Cc=Cc||v1(n),Cc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=new Fl(5e3,15e3),E1="__/auth/iframe",T1="emulator/auth/iframe",I1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A1(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wp(e,T1):`https://${n.config.authDomain}/${E1}`,i={apiKey:e.apiKey,appName:n.name,v:ia},o=S1.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${Ll(i).slice(1)}`}async function R1(n){const e=await _1(n),t=mr().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:A1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I1,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const c=pr(n,"network-request-failed"),d=mr().setTimeout(()=>{a(c)},w1.get());function p(){mr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P1=500,k1=600,N1="_blank",x1="http://localhost";class fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D1(n,e,t,i=P1,o=k1){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},C1),{width:i.toString(),height:o.toString(),top:a,left:c}),y=qt().toLowerCase();t&&(d=vw(y)?N1:t),gw(y)&&(e=e||x1,p.scrollbars="yes");const _=Object.entries(p).reduce((T,[N,B])=>`${T}${N}=${B},`,"");if(ZR(y)&&d!=="_self")return b1(e||"",d),new fv(null);const E=window.open(e||"",d,_);we(E,n,"popup-blocked");try{E.focus()}catch{}return new fv(E)}function b1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="__/auth/handler",V1="emulator/auth/handler",L1=encodeURIComponent("fac");async function pv(n,e,t,i,o,a){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ia,eventId:o};if(e instanceof Pw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",TA(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,E]of Object.entries({}))c[_]=E}if(e instanceof jl){const _=e.getScopes().filter(E=>E!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const p=await n._getAppCheckToken(),y=p?`#${L1}=${encodeURIComponent(p)}`:"";return`${M1(n)}?${Ll(d).slice(1)}${y}`}function M1({config:n}){return n.emulator?wp(n,V1):`https://${n.authDomain}/${O1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="webStorageSupport";class F1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vw,this._completeRedirectFn=l1,this._overrideRedirectResult=s1}async _openPopup(e,t,i,o){var a;Xr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await pv(e,t,i,Ff(),o);return D1(e,c,Ap())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await pv(e,t,i,Ff(),o);return BC(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Xr(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await R1(e),i=new c1(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wf,{type:wf},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[wf];c!==void 0&&t(!!c),Zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=m1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Iw()||yw()||Tp()}}const U1=F1;var mv="@firebase/auth",gv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $1(n){vr(new Xn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;we(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sw(n)},y=new sC(i,o,a,p);return mC(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),vr(new Xn("auth-internal",e=>{const t=Ls(e.getProvider("auth").getImmediate());return(i=>new j1(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(mv,gv,B1(n)),Nn(mv,gv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=300,q1=Z_("authIdTokenMaxAge")||z1;let yv=null;const H1=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>q1)return;const o=t==null?void 0:t.token;yv!==o&&(yv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function W1(n=sw()){const e=Ml(n,"auth");if(e.isInitialized())return e.getImmediate();const t=pC(n,{popupRedirectResolver:U1,persistence:[YC,FC,Vw]}),i=Z_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=H1(a.toString());bC(t,c,()=>c(t.currentUser)),DC(t,d=>c(d))}}const o=J_("auth");return o&&gC(t,`http://${o}`),t}function K1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}oC({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=pr("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",K1().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$1("Browser");var G1="firebase",Q1="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(G1,Q1,"app");var vv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Li,$w;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function C(){}C.prototype=S.prototype,D.D=S.prototype,D.prototype=new C,D.prototype.constructor=D,D.C=function(x,O,F){for(var R=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)R[Je-2]=arguments[Je];return S.prototype[O].apply(x,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,S,C){C||(C=0);var x=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)x[O]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(O=0;16>O;++O)x[O]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=D.g[0],C=D.g[1],O=D.g[2];var F=D.g[3],R=S+(F^C&(O^F))+x[0]+3614090360&4294967295;S=C+(R<<7&4294967295|R>>>25),R=F+(O^S&(C^O))+x[1]+3905402710&4294967295,F=S+(R<<12&4294967295|R>>>20),R=O+(C^F&(S^C))+x[2]+606105819&4294967295,O=F+(R<<17&4294967295|R>>>15),R=C+(S^O&(F^S))+x[3]+3250441966&4294967295,C=O+(R<<22&4294967295|R>>>10),R=S+(F^C&(O^F))+x[4]+4118548399&4294967295,S=C+(R<<7&4294967295|R>>>25),R=F+(O^S&(C^O))+x[5]+1200080426&4294967295,F=S+(R<<12&4294967295|R>>>20),R=O+(C^F&(S^C))+x[6]+2821735955&4294967295,O=F+(R<<17&4294967295|R>>>15),R=C+(S^O&(F^S))+x[7]+4249261313&4294967295,C=O+(R<<22&4294967295|R>>>10),R=S+(F^C&(O^F))+x[8]+1770035416&4294967295,S=C+(R<<7&4294967295|R>>>25),R=F+(O^S&(C^O))+x[9]+2336552879&4294967295,F=S+(R<<12&4294967295|R>>>20),R=O+(C^F&(S^C))+x[10]+4294925233&4294967295,O=F+(R<<17&4294967295|R>>>15),R=C+(S^O&(F^S))+x[11]+2304563134&4294967295,C=O+(R<<22&4294967295|R>>>10),R=S+(F^C&(O^F))+x[12]+1804603682&4294967295,S=C+(R<<7&4294967295|R>>>25),R=F+(O^S&(C^O))+x[13]+4254626195&4294967295,F=S+(R<<12&4294967295|R>>>20),R=O+(C^F&(S^C))+x[14]+2792965006&4294967295,O=F+(R<<17&4294967295|R>>>15),R=C+(S^O&(F^S))+x[15]+1236535329&4294967295,C=O+(R<<22&4294967295|R>>>10),R=S+(O^F&(C^O))+x[1]+4129170786&4294967295,S=C+(R<<5&4294967295|R>>>27),R=F+(C^O&(S^C))+x[6]+3225465664&4294967295,F=S+(R<<9&4294967295|R>>>23),R=O+(S^C&(F^S))+x[11]+643717713&4294967295,O=F+(R<<14&4294967295|R>>>18),R=C+(F^S&(O^F))+x[0]+3921069994&4294967295,C=O+(R<<20&4294967295|R>>>12),R=S+(O^F&(C^O))+x[5]+3593408605&4294967295,S=C+(R<<5&4294967295|R>>>27),R=F+(C^O&(S^C))+x[10]+38016083&4294967295,F=S+(R<<9&4294967295|R>>>23),R=O+(S^C&(F^S))+x[15]+3634488961&4294967295,O=F+(R<<14&4294967295|R>>>18),R=C+(F^S&(O^F))+x[4]+3889429448&4294967295,C=O+(R<<20&4294967295|R>>>12),R=S+(O^F&(C^O))+x[9]+568446438&4294967295,S=C+(R<<5&4294967295|R>>>27),R=F+(C^O&(S^C))+x[14]+3275163606&4294967295,F=S+(R<<9&4294967295|R>>>23),R=O+(S^C&(F^S))+x[3]+4107603335&4294967295,O=F+(R<<14&4294967295|R>>>18),R=C+(F^S&(O^F))+x[8]+1163531501&4294967295,C=O+(R<<20&4294967295|R>>>12),R=S+(O^F&(C^O))+x[13]+2850285829&4294967295,S=C+(R<<5&4294967295|R>>>27),R=F+(C^O&(S^C))+x[2]+4243563512&4294967295,F=S+(R<<9&4294967295|R>>>23),R=O+(S^C&(F^S))+x[7]+1735328473&4294967295,O=F+(R<<14&4294967295|R>>>18),R=C+(F^S&(O^F))+x[12]+2368359562&4294967295,C=O+(R<<20&4294967295|R>>>12),R=S+(C^O^F)+x[5]+4294588738&4294967295,S=C+(R<<4&4294967295|R>>>28),R=F+(S^C^O)+x[8]+2272392833&4294967295,F=S+(R<<11&4294967295|R>>>21),R=O+(F^S^C)+x[11]+1839030562&4294967295,O=F+(R<<16&4294967295|R>>>16),R=C+(O^F^S)+x[14]+4259657740&4294967295,C=O+(R<<23&4294967295|R>>>9),R=S+(C^O^F)+x[1]+2763975236&4294967295,S=C+(R<<4&4294967295|R>>>28),R=F+(S^C^O)+x[4]+1272893353&4294967295,F=S+(R<<11&4294967295|R>>>21),R=O+(F^S^C)+x[7]+4139469664&4294967295,O=F+(R<<16&4294967295|R>>>16),R=C+(O^F^S)+x[10]+3200236656&4294967295,C=O+(R<<23&4294967295|R>>>9),R=S+(C^O^F)+x[13]+681279174&4294967295,S=C+(R<<4&4294967295|R>>>28),R=F+(S^C^O)+x[0]+3936430074&4294967295,F=S+(R<<11&4294967295|R>>>21),R=O+(F^S^C)+x[3]+3572445317&4294967295,O=F+(R<<16&4294967295|R>>>16),R=C+(O^F^S)+x[6]+76029189&4294967295,C=O+(R<<23&4294967295|R>>>9),R=S+(C^O^F)+x[9]+3654602809&4294967295,S=C+(R<<4&4294967295|R>>>28),R=F+(S^C^O)+x[12]+3873151461&4294967295,F=S+(R<<11&4294967295|R>>>21),R=O+(F^S^C)+x[15]+530742520&4294967295,O=F+(R<<16&4294967295|R>>>16),R=C+(O^F^S)+x[2]+3299628645&4294967295,C=O+(R<<23&4294967295|R>>>9),R=S+(O^(C|~F))+x[0]+4096336452&4294967295,S=C+(R<<6&4294967295|R>>>26),R=F+(C^(S|~O))+x[7]+1126891415&4294967295,F=S+(R<<10&4294967295|R>>>22),R=O+(S^(F|~C))+x[14]+2878612391&4294967295,O=F+(R<<15&4294967295|R>>>17),R=C+(F^(O|~S))+x[5]+4237533241&4294967295,C=O+(R<<21&4294967295|R>>>11),R=S+(O^(C|~F))+x[12]+1700485571&4294967295,S=C+(R<<6&4294967295|R>>>26),R=F+(C^(S|~O))+x[3]+2399980690&4294967295,F=S+(R<<10&4294967295|R>>>22),R=O+(S^(F|~C))+x[10]+4293915773&4294967295,O=F+(R<<15&4294967295|R>>>17),R=C+(F^(O|~S))+x[1]+2240044497&4294967295,C=O+(R<<21&4294967295|R>>>11),R=S+(O^(C|~F))+x[8]+1873313359&4294967295,S=C+(R<<6&4294967295|R>>>26),R=F+(C^(S|~O))+x[15]+4264355552&4294967295,F=S+(R<<10&4294967295|R>>>22),R=O+(S^(F|~C))+x[6]+2734768916&4294967295,O=F+(R<<15&4294967295|R>>>17),R=C+(F^(O|~S))+x[13]+1309151649&4294967295,C=O+(R<<21&4294967295|R>>>11),R=S+(O^(C|~F))+x[4]+4149444226&4294967295,S=C+(R<<6&4294967295|R>>>26),R=F+(C^(S|~O))+x[11]+3174756917&4294967295,F=S+(R<<10&4294967295|R>>>22),R=O+(S^(F|~C))+x[2]+718787259&4294967295,O=F+(R<<15&4294967295|R>>>17),R=C+(F^(O|~S))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,D.g[2]=D.g[2]+O&4294967295,D.g[3]=D.g[3]+F&4294967295}i.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var C=S-this.blockSize,x=this.B,O=this.h,F=0;F<S;){if(O==0)for(;F<=C;)o(this,D,F),F+=this.blockSize;if(typeof D=="string"){for(;F<S;)if(x[O++]=D.charCodeAt(F++),O==this.blockSize){o(this,x),O=0;break}}else for(;F<S;)if(x[O++]=D[F++],O==this.blockSize){o(this,x),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var C=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=C&255,C/=256;for(this.u(D),D=Array(16),S=C=0;4>S;++S)for(var x=0;32>x;x+=8)D[C++]=this.g[S]>>>x&255;return D};function a(D,S){var C=d;return Object.prototype.hasOwnProperty.call(C,D)?C[D]:C[D]=S(D)}function c(D,S){this.h=S;for(var C=[],x=!0,O=D.length-1;0<=O;O--){var F=D[O]|0;x&&F==S||(C[O]=F,x=!1)}this.g=C}var d={};function p(D){return-128<=D&&128>D?a(D,function(S){return new c([S|0],0>S?-1:0)}):new c([D|0],0>D?-1:0)}function y(D){if(isNaN(D)||!isFinite(D))return E;if(0>D)return L(y(-D));for(var S=[],C=1,x=0;D>=C;x++)S[x]=D/C|0,C*=4294967296;return new c(S,0)}function _(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return L(_(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(S,8)),x=E,O=0;O<D.length;O+=8){var F=Math.min(8,D.length-O),R=parseInt(D.substring(O,O+F),S);8>F?(F=y(Math.pow(S,F)),x=x.j(F).add(y(R))):(x=x.j(C),x=x.add(y(R)))}return x}var E=p(0),T=p(1),N=p(16777216);n=c.prototype,n.m=function(){if($(this))return-L(this).m();for(var D=0,S=1,C=0;C<this.g.length;C++){var x=this.i(C);D+=(0<=x?x:4294967296+x)*S,S*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(B(this))return"0";if($(this))return"-"+L(this).toString(D);for(var S=y(Math.pow(D,6)),C=this,x="";;){var O=ae(C,S).g;C=K(C,O.j(S));var F=((0<C.g.length?C.g[0]:C.h)>>>0).toString(D);if(C=O,B(C))return F+x;for(;6>F.length;)F="0"+F;x=F+x}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function B(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function $(D){return D.h==-1}n.l=function(D){return D=K(this,D),$(D)?-1:B(D)?0:1};function L(D){for(var S=D.g.length,C=[],x=0;x<S;x++)C[x]=~D.g[x];return new c(C,~D.h).add(T)}n.abs=function(){return $(this)?L(this):this},n.add=function(D){for(var S=Math.max(this.g.length,D.g.length),C=[],x=0,O=0;O<=S;O++){var F=x+(this.i(O)&65535)+(D.i(O)&65535),R=(F>>>16)+(this.i(O)>>>16)+(D.i(O)>>>16);x=R>>>16,F&=65535,R&=65535,C[O]=R<<16|F}return new c(C,C[C.length-1]&-2147483648?-1:0)};function K(D,S){return D.add(L(S))}n.j=function(D){if(B(this)||B(D))return E;if($(this))return $(D)?L(this).j(L(D)):L(L(this).j(D));if($(D))return L(this.j(L(D)));if(0>this.l(N)&&0>D.l(N))return y(this.m()*D.m());for(var S=this.g.length+D.g.length,C=[],x=0;x<2*S;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(var O=0;O<D.g.length;O++){var F=this.i(x)>>>16,R=this.i(x)&65535,Je=D.i(O)>>>16,Ge=D.i(O)&65535;C[2*x+2*O]+=R*Ge,Z(C,2*x+2*O),C[2*x+2*O+1]+=F*Ge,Z(C,2*x+2*O+1),C[2*x+2*O+1]+=R*Je,Z(C,2*x+2*O+1),C[2*x+2*O+2]+=F*Je,Z(C,2*x+2*O+2)}for(x=0;x<S;x++)C[x]=C[2*x+1]<<16|C[2*x];for(x=S;x<2*S;x++)C[x]=0;return new c(C,0)};function Z(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function ne(D,S){this.g=D,this.h=S}function ae(D,S){if(B(S))throw Error("division by zero");if(B(D))return new ne(E,E);if($(D))return S=ae(L(D),S),new ne(L(S.g),L(S.h));if($(S))return S=ae(D,L(S)),new ne(L(S.g),S.h);if(30<D.g.length){if($(D)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var C=T,x=S;0>=x.l(D);)C=te(C),x=te(x);var O=de(C,1),F=de(x,1);for(x=de(x,2),C=de(C,2);!B(x);){var R=F.add(x);0>=R.l(D)&&(O=O.add(C),F=R),x=de(x,1),C=de(C,1)}return S=K(D,O.j(S)),new ne(O,S)}for(O=E;0<=D.l(S);){for(C=Math.max(1,Math.floor(D.m()/S.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),F=y(C),R=F.j(S);$(R)||0<R.l(D);)C-=x,F=y(C),R=F.j(S);B(F)&&(F=T),O=O.add(F),D=K(D,R)}return new ne(O,D)}n.A=function(D){return ae(this,D).h},n.and=function(D){for(var S=Math.max(this.g.length,D.g.length),C=[],x=0;x<S;x++)C[x]=this.i(x)&D.i(x);return new c(C,this.h&D.h)},n.or=function(D){for(var S=Math.max(this.g.length,D.g.length),C=[],x=0;x<S;x++)C[x]=this.i(x)|D.i(x);return new c(C,this.h|D.h)},n.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),C=[],x=0;x<S;x++)C[x]=this.i(x)^D.i(x);return new c(C,this.h^D.h)};function te(D){for(var S=D.g.length+1,C=[],x=0;x<S;x++)C[x]=D.i(x)<<1|D.i(x-1)>>>31;return new c(C,D.h)}function de(D,S){var C=S>>5;S%=32;for(var x=D.g.length-C,O=[],F=0;F<x;F++)O[F]=0<S?D.i(F+C)>>>S|D.i(F+C+1)<<32-S:D.i(F+C);return new c(O,D.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,$w=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=_,Li=c}).apply(typeof vv<"u"?vv:typeof self<"u"?self:typeof window<"u"?window:{});var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zw,cl,qw,Pc,$f,Hw,Ww,Kw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof gc=="object"&&gc];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var I=0;I<u.length-1;I++){var U=u[I];if(!(U in v))break e;v=v[U]}u=u[u.length-1],I=v[u],m=m(I),m!=I&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function a(u,m){u instanceof String&&(u+="");var v=0,I=!1,U={next:function(){if(!I&&v<u.length){var H=v++;return{value:m(H,u[H]),done:!1}}return I=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return a(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,v){return u.call.apply(u.bind,arguments)}function E(u,m,v){if(!u)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,I),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function T(u,m,v){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:E,T.apply(null,arguments)}function N(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var I=v.slice();return I.push.apply(I,arguments),u.apply(this,I)}}function B(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(I,U,H){for(var re=Array(arguments.length-2),je=2;je<arguments.length;je++)re[je-2]=arguments[je];return m.prototype[U].apply(I,re)}}function $(u){const m=u.length;if(0<m){const v=Array(m);for(let I=0;I<m;I++)v[I]=u[I];return v}return[]}function L(u,m){for(let v=1;v<arguments.length;v++){const I=arguments[v];if(p(I)){const U=u.length||0,H=I.length||0;u.length=U+H;for(let re=0;re<H;re++)u[U+re]=I[re]}else u.push(I)}}class K{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Z(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function ae(u){return ae[" "](u),u}ae[" "]=function(){};var te=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function de(u,m,v){for(const I in u)m.call(v,u[I],I,u)}function D(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function S(u){const m={};for(const v in u)m[v]=u[v];return m}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,m){let v,I;for(let U=1;U<arguments.length;U++){I=arguments[U];for(v in I)u[v]=I[v];for(let H=0;H<C.length;H++)v=C[H],Object.prototype.hasOwnProperty.call(I,v)&&(u[v]=I[v])}}function O(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function F(u){d.setTimeout(()=>{throw u},0)}function R(){var u=ye;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Je{constructor(){this.h=this.g=null}add(m,v){const I=Ge.get();I.set(m,v),this.h?this.h.next=I:this.g=I,this.h=I}}var Ge=new K(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,ie=!1,ye=new Je,ue=()=>{const u=d.Promise.resolve(void 0);Be=()=>{u.then(M)}};var M=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(v){F(v)}var m=Ge;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};d.addEventListener("test",v,m),d.removeEventListener("test",v,m)}catch{}return u})();function Ce(u,m){if(me.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,I=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(te){e:{try{ae(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}B(Ce,me);var De={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function qe(u,m,v,I,U){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!I,this.ha=U,this.key=++Fe,this.da=this.fa=!1}function Tt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Sr(u){this.src=u,this.g={},this.h=0}Sr.prototype.add=function(u,m,v,I,U){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var re=ii(u,m,I,U);return-1<re?(m=u[re],v||(m.fa=!1)):(m=new qe(m,this.src,H,!!I,U),m.fa=v,u.push(m)),m};function $s(u,m){var v=m.type;if(v in u.g){var I=u.g[v],U=Array.prototype.indexOf.call(I,m,void 0),H;(H=0<=U)&&Array.prototype.splice.call(I,U,1),H&&(Tt(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function ii(u,m,v,I){for(var U=0;U<u.length;++U){var H=u[U];if(!H.da&&H.listener==m&&H.capture==!!v&&H.ha==I)return U}return-1}var Ji="closure_lm_"+(1e6*Math.random()|0),zs={};function ca(u,m,v,I,U){if(Array.isArray(m)){for(var H=0;H<m.length;H++)ca(u,m[H],v,I,U);return null}return v=fa(v),u&&u[Me]?u.K(m,v,y(I)?!!I.capture:!1,U):ha(u,m,v,!1,I,U)}function ha(u,m,v,I,U,H){if(!m)throw Error("Invalid event type");var re=y(U)?!!U.capture:!!U,je=Hs(u);if(je||(u[Ji]=je=new Sr(u)),v=je.add(m,v,I,re,H),v.proxy)return v;if(I=Xl(),v.proxy=I,I.src=u,I.listener=v,u.addEventListener)Ae||(U=re),U===void 0&&(U=!1),u.addEventListener(m.toString(),I,U);else if(u.attachEvent)u.attachEvent(Rr(m.toString()),I);else if(u.addListener&&u.removeListener)u.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Xl(){function u(v){return m.call(u.src,u.listener,v)}const m=da;return u}function qs(u,m,v,I,U){if(Array.isArray(m))for(var H=0;H<m.length;H++)qs(u,m[H],v,I,U);else I=y(I)?!!I.capture:!!I,v=fa(v),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&(H=u.g[m],v=ii(H,v,I,U),-1<v&&(Tt(H[v]),Array.prototype.splice.call(H,v,1),H.length==0&&(delete u.g[m],u.h--)))):u&&(u=Hs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=ii(m,v,I,U)),(v=-1<u?m[u]:null)&&Ar(v))}function Ar(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])$s(m.i,u);else{var v=u.type,I=u.proxy;m.removeEventListener?m.removeEventListener(v,I,u.capture):m.detachEvent?m.detachEvent(Rr(v),I):m.addListener&&m.removeListener&&m.removeListener(I),(v=Hs(m))?($s(v,u),v.h==0&&(v.src=null,m[Ji]=null)):Tt(u)}}}function Rr(u){return u in zs?zs[u]:zs[u]="on"+u}function da(u,m){if(u.da)u=!0;else{m=new Ce(m,this);var v=u.listener,I=u.ha||u.src;u.fa&&Ar(u),u=v.call(I,m)}return u}function Hs(u){return u=u[Ji],u instanceof Sr?u:null}var Ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function fa(u){return typeof u=="function"?u:(u[Ws]||(u[Ws]=function(m){return u.handleEvent(m)}),u[Ws])}function mt(){Q.call(this),this.i=new Sr(this),this.M=this,this.F=null}B(mt,Q),mt.prototype[Me]=!0,mt.prototype.removeEventListener=function(u,m,v,I){qs(this,u,m,v,I)};function gt(u,m){var v,I=u.F;if(I)for(v=[];I;I=I.F)v.push(I);if(u=u.M,I=m.type||m,typeof m=="string")m=new me(m,u);else if(m instanceof me)m.target=m.target||u;else{var U=m;m=new me(I,u),x(m,U)}if(U=!0,v)for(var H=v.length-1;0<=H;H--){var re=m.g=v[H];U=Cr(re,I,!0,m)&&U}if(re=m.g=u,U=Cr(re,I,!0,m)&&U,U=Cr(re,I,!1,m)&&U,v)for(H=0;H<v.length;H++)re=m.g=v[H],U=Cr(re,I,!1,m)&&U}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],I=0;I<v.length;I++)Tt(v[I]);delete u.g[m],u.h--}}this.F=null},mt.prototype.K=function(u,m,v,I){return this.i.add(String(u),m,!1,v,I)},mt.prototype.L=function(u,m,v,I){return this.i.add(String(u),m,!0,v,I)};function Cr(u,m,v,I){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,H=0;H<m.length;++H){var re=m[H];if(re&&!re.da&&re.capture==v){var je=re.listener,yt=re.ha||re.src;re.fa&&$s(u.i,re),U=je.call(yt,I)!==!1&&U}}return U&&!I.defaultPrevented}function pa(u,m,v){if(typeof u=="function")v&&(u=T(u,v));else if(u&&typeof u.handleEvent=="function")u=T(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function si(u){u.g=pa(()=>{u.g=null,u.i&&(u.i=!1,si(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Xi extends Q{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:si(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(u){Q.call(this),this.h=u,this.g={}}B(Zi,Q);var ma=[];function ga(u){de(u.g,function(m,v){this.g.hasOwnProperty(v)&&Ar(m)},u),u.g={}}Zi.prototype.N=function(){Zi.aa.N.call(this),ga(this)},Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ya=d.JSON.stringify,va=d.JSON.parse,_a=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function es(){}es.prototype.h=null;function Ks(u){return u.h||(u.h=u.i())}function Gs(){}var _n={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tr(){me.call(this,"d")}B(tr,me);function Qs(){me.call(this,"c")}B(Qs,me);var nr={},wa=null;function ts(){return wa=wa||new mt}nr.La="serverreachability";function Ea(u){me.call(this,nr.La,u)}B(Ea,me);function Pr(u){const m=ts();gt(m,new Ea(m))}nr.STAT_EVENT="statevent";function Ta(u,m){me.call(this,nr.STAT_EVENT,u),this.stat=m}B(Ta,me);function ot(u){const m=ts();gt(m,new Ta(m,u))}nr.Ma="timingevent";function Ys(u,m){me.call(this,nr.Ma,u),this.size=m}B(Ys,me);function On(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function ns(){this.g=!0}ns.prototype.xa=function(){this.g=!1};function rs(u,m,v,I,U,H){u.info(function(){if(u.g)if(H)for(var re="",je=H.split("&"),yt=0;yt<je.length;yt++){var be=je[yt].split("=");if(1<be.length){var It=be[0];be=be[1];var ct=It.split("_");re=2<=ct.length&&ct[1]=="type"?re+(It+"="+be+"&"):re+(It+"=redacted&")}}else re=null;else re=H;return"XMLHTTP REQ ("+I+") [attempt "+U+"]: "+m+`
`+v+`
`+re})}function Js(u,m,v,I,U,H,re){u.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+U+"]: "+m+`
`+v+`
`+H+" "+re})}function Vn(u,m,v,I){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Dh(u,v)+(I?" "+I:"")})}function Ia(u,m){u.info(function(){return"TIMEOUT: "+m})}ns.prototype.info=function(){};function Dh(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var I=v[u];if(!(2>I.length)){var U=I[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var re=1;re<U.length;re++)U[re]=""}}}}return ya(v)}catch{return m}}var Xs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ln;function is(){}B(is,es),is.prototype.g=function(){return new XMLHttpRequest},is.prototype.i=function(){return{}},Ln=new is;function Mn(u,m,v,I){this.j=u,this.i=m,this.l=v,this.R=I||1,this.U=new Zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eu}function eu(){this.i=null,this.g="",this.h=!1}var Sa={},Zs={};function eo(u,m,v){u.L=1,u.v=ci(ln(m)),u.m=v,u.P=!0,Aa(u,null)}function Aa(u,m){u.F=Date.now(),He(u),u.A=ln(u.v);var v=u.A,I=u.R;Array.isArray(I)||(I=[String(I)]),di(v.i,"t",I),u.C=0,v=u.j.J,u.h=new eu,u.g=vu(u.j,v?m:null,!u.m),0<u.O&&(u.M=new Xi(T(u.Y,u,u.g),u.O)),m=u.U,v=u.g,I=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(ma[0]=U.toString()),U=ma);for(var H=0;H<U.length;H++){var re=ca(v,U[H],I||m.handleEvent,!1,m.h||m);if(!re)break;m.g[re.key]=re}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Pr(),rs(u.i,u.u,u.A,u.l,u.R,u.m)}Mn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Jt(u)==3?m.j():this.Y(u)},Mn.prototype.Y=function(u){try{if(u==this.g)e:{const ct=Jt(this.g);var m=this.g.Ba();const Tn=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||xa(this.g)))){this.J||ct!=4||m==7||(m==8||0>=Tn?Pr(3):Pr(2)),ss(this);var v=this.g.Z();this.X=v;t:if(tu(this)){var I=xa(this.g);u="";var U=I.length,H=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),oi(this);var re="";break t}this.h.i=new d.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(I[m],{stream:!(H&&m==U-1)});I.length=0,this.h.g+=u,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,Js(this.i,this.u,this.A,this.l,this.R,ct,v),this.o){if(this.T&&!this.K){t:{if(this.g){var je,yt=this.g;if((je=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(je)){var be=je;break t}}be=null}if(v=be)Vn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ra(this,v);else{this.o=!1,this.s=3,ot(12),wn(this),oi(this);break e}}if(this.P){v=!0;let cn;for(;!this.J&&this.C<re.length;)if(cn=bh(this,re),cn==Zs){ct==4&&(this.s=4,ot(14),v=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==Sa){this.s=4,ot(15),Vn(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else Vn(this.i,this.l,cn,null),Ra(this,cn);if(tu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||re.length!=0||this.h.h||(this.s=1,ot(16),v=!1),this.o=this.o&&v,!v)Vn(this.i,this.l,re,"[Invalid Chunked Response]"),wn(this),oi(this);else if(0<re.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),ba(It),It.M=!0,ot(11))}}else Vn(this.i,this.l,re,null),Ra(this,re);ct==4&&wn(this),this.o&&!this.J&&(ct==4?ho(this.j,this):(this.o=!1,He(this)))}else oo(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),wn(this),oi(this)}}}catch{}finally{}};function tu(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function bh(u,m){var v=u.C,I=m.indexOf(`
`,v);return I==-1?Zs:(v=Number(m.substring(v,I)),isNaN(v)?Sa:(I+=1,I+v>m.length?Zs:(m=m.slice(I,I+v),u.C=I+v,m)))}Mn.prototype.cancel=function(){this.J=!0,wn(this)};function He(u){u.S=Date.now()+u.I,nu(u,u.I)}function nu(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=On(T(u.ba,u),m)}function ss(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Mn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ia(this.i,this.A),this.L!=2&&(Pr(),ot(17)),wn(this),this.s=2,oi(this)):nu(this,this.S-u)};function oi(u){u.j.G==0||u.J||ho(u.j,u)}function wn(u){ss(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ga(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Ra(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||Ht(v.h,u))){if(!u.K&&Ht(v.h,u)&&v.G==3){try{var I=v.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var U=I;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)co(v),$n(v);else break e;uo(v),ot(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=On(T(v.Za,v),6e3));if(1>=iu(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else br(v,11)}else if((u.K||v.g==u)&&co(v),!Z(m))for(U=v.Da.g.parse(m),m=0;m<U.length;m++){let be=U[m];if(v.T=be[0],be=be[1],v.G==2)if(be[0]=="c"){v.K=be[1],v.ia=be[2];const It=be[3];It!=null&&(v.la=It,v.j.info("VER="+v.la));const ct=be[4];ct!=null&&(v.Aa=ct,v.j.info("SVER="+v.Aa));const Tn=be[5];Tn!=null&&typeof Tn=="number"&&0<Tn&&(I=1.5*Tn,v.L=I,v.j.info("backChannelRequestTimeoutMs_="+I)),I=v;const cn=u.g;if(cn){const ds=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ds){var H=I.h;H.g||ds.indexOf("spdy")==-1&&ds.indexOf("quic")==-1&&ds.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Ca(H,H.h),H.h=null))}if(I.D){const po=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;po&&(I.ya=po,$e(I.I,I.D,po))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),I=v;var re=u;if(I.qa=yu(I,I.J?I.ia:null,I.W),re.K){su(I.h,re);var je=re,yt=I.L;yt&&(je.I=yt),je.B&&(ss(je),He(je)),I.g=re}else hs(I);0<v.i.length&&or(v)}else be[0]!="stop"&&be[0]!="close"||br(v,7);else v.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?br(v,7):xt(v):be[0]!="noop"&&v.l&&v.l.ta(be),v.v=0)}}Pr(4)}catch{}}var ru=class{constructor(u,m){this.g=u,this.map=m}};function os(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function an(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function iu(u){return u.h?1:u.g?u.g.size:0}function Ht(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Ca(u,m){u.g?u.g.add(m):u.h=m}function su(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}os.prototype.cancel=function(){if(this.i=ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ou(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return $(u.i)}function to(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,I=0;I<v;I++)m.push(u[I]);return m}m=[],v=0;for(I in u)m[v++]=u[I];return m}function no(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const I in u)m[v++]=I;return m}}}function ai(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=no(u),I=to(u),U=I.length,H=0;H<U;H++)m.call(void 0,I[H],v&&v[H],u)}var as=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oh(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var I=u[v].indexOf("="),U=null;if(0<=I){var H=u[v].substring(0,I);U=u[v].substring(I+1)}else H=u[v];m(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function kr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof kr){this.h=u.h,ls(this,u.j),this.o=u.o,this.g=u.g,li(this,u.s),this.l=u.l;var m=u.i,v=new rr;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),ui(this,v),this.m=u.m}else u&&(m=String(u).match(as))?(this.h=!1,ls(this,m[1]||"",!0),this.o=xe(m[2]||""),this.g=xe(m[3]||"",!0),li(this,m[4]),this.l=xe(m[5]||"",!0),ui(this,m[6]||"",!0),this.m=xe(m[7]||"")):(this.h=!1,this.i=new rr(null,this.h))}kr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(hi(m,ro,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(hi(m,ro,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(hi(v,v.charAt(0)=="/"?uu:lu,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",hi(v,Pa)),u.join("")};function ln(u){return new kr(u)}function ls(u,m,v){u.j=v?xe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function li(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ui(u,m,v){m instanceof rr?(u.i=m,ir(u.i,u.h)):(v||(m=hi(m,cu)),u.i=new rr(m,u.h))}function $e(u,m,v){u.i.set(m,v)}function ci(u){return $e(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function hi(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,au),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function au(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ro=/[#\/\?@]/g,lu=/[#\?:]/g,uu=/[#\?]/g,cu=/[#\?@]/g,Pa=/#/g;function rr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Nt(u){u.g||(u.g=new Map,u.h=0,u.i&&Oh(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=rr.prototype,n.add=function(u,m){Nt(this),this.i=null,u=En(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function Fn(u,m){Nt(u),m=En(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Un(u,m){return Nt(u),m=En(u,m),u.g.has(m)}n.forEach=function(u,m){Nt(this),this.g.forEach(function(v,I){v.forEach(function(U){u.call(m,U,I,this)},this)},this)},n.na=function(){Nt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let I=0;I<m.length;I++){const U=u[I];for(let H=0;H<U.length;H++)v.push(m[I])}return v},n.V=function(u){Nt(this);let m=[];if(typeof u=="string")Un(this,u)&&(m=m.concat(this.g.get(En(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return Nt(this),this.i=null,u=En(this,u),Un(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function di(u,m,v){Fn(u,m),0<v.length&&(u.i=null,u.g.set(En(u,m),$(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var I=m[v];const H=encodeURIComponent(String(I)),re=this.V(I);for(I=0;I<re.length;I++){var U=H;re[I]!==""&&(U+="="+encodeURIComponent(String(re[I]))),u.push(U)}}return this.i=u.join("&")};function En(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function ir(u,m){m&&!u.j&&(Nt(u),u.i=null,u.g.forEach(function(v,I){var U=I.toLowerCase();I!=U&&(Fn(this,I),di(this,U,v))},u)),u.j=m}function Vh(u,m){const v=new ns;if(d.Image){const I=new Image;I.onload=N(Yt,v,"TestLoadImage: loaded",!0,m,I),I.onerror=N(Yt,v,"TestLoadImage: error",!1,m,I),I.onabort=N(Yt,v,"TestLoadImage: abort",!1,m,I),I.ontimeout=N(Yt,v,"TestLoadImage: timeout",!1,m,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=u}else m(!1)}function hu(u,m){const v=new ns,I=new AbortController,U=setTimeout(()=>{I.abort(),Yt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:I.signal}).then(H=>{clearTimeout(U),H.ok?Yt(v,"TestPingServer: ok",!0,m):Yt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Yt(v,"TestPingServer: error",!1,m)})}function Yt(u,m,v,I,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),I(v)}catch{}}function Lh(){this.g=new _a}function du(u,m,v){const I=v||"";try{ai(u,function(U,H){let re=U;y(U)&&(re=ya(U)),m.push(I+H+"="+encodeURIComponent(re))})}catch(U){throw m.push(I+"type="+encodeURIComponent("_badmap")),U}}function Nr(u){this.l=u.Ub||null,this.j=u.eb||!1}B(Nr,es),Nr.prototype.g=function(){return new us(this.l,this.j)},Nr.prototype.i=(function(u){return function(){return u}})({});function us(u,m){mt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(us,mt),n=us.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Bn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function fu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?jn(this):Bn(this),this.readyState==3&&fu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,jn(this))},n.Qa=function(u){this.g&&(this.response=u,jn(this))},n.ga=function(){this.g&&jn(this)};function jn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Bn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Bn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function xr(u){let m="";return de(u,function(v,I){m+=I,m+=":",m+=v,m+=`\r
`}),m}function fi(u,m,v){e:{for(I in v){var I=!1;break e}I=!0}I||(v=xr(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):$e(u,m,v))}function Xe(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Xe,mt);var Mh=/^https?$/i,ka=["POST","PUT"];n=Xe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ln.g(),this.v=this.o?Ks(this.o):Ks(Ln),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){cs(this,H);return}if(u=v||"",v=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var U in I)v.set(U,I[U]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const H of I.keys())v.set(H,I.get(H));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),U=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ka,m,void 0))||I||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,re]of v)this.g.setRequestHeader(H,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{so(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){cs(this,H)}};function cs(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,io(u),un(u)}function io(u){u.A||(u.A=!0,gt(u,"complete"),gt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,gt(this,"complete"),gt(this,"abort"),un(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),un(this,!0)),Xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Na(this):this.bb())},n.bb=function(){Na(this)};function Na(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Jt(u)!=4||u.Z()!=2)){if(u.u&&Jt(u)==4)pa(u.Ea,0,u);else if(gt(u,"readystatechange"),Jt(u)==4){u.h=!1;try{const re=u.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var I;if(I=re===0){var U=String(u.D).match(as)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),I=!Mh.test(U?U.toLowerCase():"")}v=I}if(v)gt(u,"complete"),gt(u,"success");else{u.m=6;try{var H=2<Jt(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",io(u)}}finally{un(u)}}}}function un(u,m){if(u.g){so(u);const v=u.g,I=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||gt(u,"ready");try{v.onreadystatechange=I}catch{}}}function so(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Jt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),va(m)}};function xa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function oo(u){const m={};u=(u.g&&2<=Jt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<u.length;I++){if(Z(u[I]))continue;var v=O(u[I]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=m[U]||[];m[U]=H,H.push(v)}D(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function Da(u){this.Aa=0,this.i=[],this.j=new ns,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sr("baseRetryDelayMs",5e3,u),this.cb=sr("retryDelaySeedMs",1e4,u),this.Wa=sr("forwardChannelMaxRetries",2,u),this.wa=sr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new os(u&&u.concurrentRequestLimit),this.Da=new Lh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Da.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,I){ot(0),this.W=u,this.H=m||{},v&&I!==void 0&&(this.H.OSID=v,this.H.OAID=I),this.F=this.X,this.I=yu(this,null,this.W),or(this)};function xt(u){if(ao(u),u.G==3){var m=u.U++,v=ln(u.I);if($e(v,"SID",u.K),$e(v,"RID",m),$e(v,"TYPE","terminate"),Dr(u,v),m=new Mn(u,u.j,m),m.L=2,m.v=ci(ln(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=m.v,v=!0),v||(m.g=vu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),He(m)}gu(u)}function $n(u){u.g&&(ba(u),u.g.cancel(),u.g=null)}function ao(u){$n(u),u.u&&(d.clearTimeout(u.u),u.u=null),co(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function or(u){if(!an(u.h)&&!u.s){u.s=!0;var m=u.Ga;Be||ue(),ie||(Be(),ie=!0),ye.add(m,u),u.B=0}}function Fh(u,m){return iu(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=On(T(u.Ga,u,m),mu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new Mn(this,this.j,u);let H=this.o;if(this.S&&(H?(H=S(H),x(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var I=this.i[v];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=pi(this,U,m),v=ln(this.I),$e(v,"RID",u),$e(v,"CVER",22),this.D&&$e(v,"X-HTTP-Session-Id",this.D),Dr(this,v),H&&(this.O?m="headers="+encodeURIComponent(String(xr(H)))+"&"+m:this.m&&fi(v,this.m,H)),Ca(this.h,U),this.Ua&&$e(v,"TYPE","init"),this.P?($e(v,"$req",m),$e(v,"SID","null"),U.T=!0,eo(U,v,null)):eo(U,v,m),this.G=2}}else this.G==3&&(u?lo(this,u):this.i.length==0||an(this.h)||lo(this))};function lo(u,m){var v;m?v=m.l:v=u.U++;const I=ln(u.I);$e(I,"SID",u.K),$e(I,"RID",v),$e(I,"AID",u.T),Dr(u,I),u.m&&u.o&&fi(I,u.m,u.o),v=new Mn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=pi(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ca(u.h,v),eo(v,I,m)}function Dr(u,m){u.H&&de(u.H,function(v,I){$e(m,I,v)}),u.l&&ai({},function(v,I){$e(m,I,v)})}function pi(u,m,v){v=Math.min(u.i.length,v);var I=u.l?T(u.l.Na,u.l,u):null;e:{var U=u.i;let H=-1;for(;;){const re=["count="+v];H==-1?0<v?(H=U[0].g,re.push("ofs="+H)):H=0:re.push("ofs="+H);let je=!0;for(let yt=0;yt<v;yt++){let be=U[yt].g;const It=U[yt].map;if(be-=H,0>be)H=Math.max(0,U[yt].g-100),je=!1;else try{du(It,re,"req"+be+"_")}catch{I&&I(It)}}if(je){I=re.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,I}function hs(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Be||ue(),ie||(Be(),ie=!0),ye.add(m,u),u.v=0}}function uo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=On(T(u.Fa,u),mu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,pu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=On(T(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),$n(this),pu(this))};function ba(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function pu(u){u.g=new Mn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=ln(u.qa);$e(m,"RID","rpc"),$e(m,"SID",u.K),$e(m,"AID",u.T),$e(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&$e(m,"TO",u.ja),$e(m,"TYPE","xmlhttp"),Dr(u,m),u.m&&u.o&&fi(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=ci(ln(m)),v.m=null,v.P=!0,Aa(v,u)}n.Za=function(){this.C!=null&&(this.C=null,$n(this),uo(this),ot(19))};function co(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function ho(u,m){var v=null;if(u.g==m){co(u),ba(u),u.g=null;var I=2}else if(Ht(u.h,m))v=m.D,su(u.h,m),I=1;else return;if(u.G!=0){if(m.o)if(I==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;I=ts(),gt(I,new Ys(I,v)),or(u)}else hs(u);else if(U=m.s,U==3||U==0&&0<m.X||!(I==1&&Fh(u,m)||I==2&&uo(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),U){case 1:br(u,5);break;case 4:br(u,10);break;case 3:br(u,6);break;default:br(u,2)}}}function mu(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function br(u,m){if(u.j.info("Error code "+m),m==2){var v=T(u.fb,u),I=u.Xa;const U=!I;I=new kr(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ls(I,"https"),ci(I),U?Vh(I.toString(),v):hu(I.toString(),v)}else ot(2);u.G=0,u.l&&u.l.sa(m),gu(u),ao(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function gu(u){if(u.G=0,u.ka=[],u.l){const m=ou(u.h);(m.length!=0||u.i.length!=0)&&(L(u.ka,m),L(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function yu(u,m,v){var I=v instanceof kr?ln(v):new kr(v);if(I.g!="")m&&(I.g=m+"."+I.g),li(I,I.s);else{var U=d.location;I=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var H=new kr(null);I&&ls(H,I),m&&(H.g=m),U&&li(H,U),v&&(H.l=v),I=H}return v=u.D,m=u.ya,v&&m&&$e(I,v,m),$e(I,"VER",u.la),Dr(u,I),I}function vu(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Xe(new Nr({eb:v})):new Xe(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oa(){}n=Oa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function fo(){}fo.prototype.g=function(u,m){return new Wt(u,m)};function Wt(u,m){mt.call(this),this.g=new Da(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!Z(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Z(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ar(this)}B(Wt,mt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){xt(this.g)},Wt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=ya(u),u=v);m.i.push(new ru(m.Ya++,u)),m.G==3&&or(m)},Wt.prototype.N=function(){this.g.l=null,delete this.j,xt(this.g),delete this.g,Wt.aa.N.call(this)};function _u(u){tr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}B(_u,tr);function wu(){Qs.call(this),this.status=1}B(wu,Qs);function ar(u){this.g=u}B(ar,Oa),ar.prototype.ua=function(){gt(this.g,"a")},ar.prototype.ta=function(u){gt(this.g,new _u(u))},ar.prototype.sa=function(u){gt(this.g,new wu)},ar.prototype.ra=function(){gt(this.g,"b")},fo.prototype.createWebChannel=fo.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,Kw=function(){return new fo},Ww=function(){return ts()},Hw=nr,$f={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xs.NO_ERROR=0,Xs.TIMEOUT=8,Xs.HTTP_ERROR=6,Pc=Xs,Zl.COMPLETE="complete",qw=Zl,Gs.EventType=_n,_n.OPEN="a",_n.CLOSE="b",_n.ERROR="c",_n.MESSAGE="d",mt.prototype.listen=mt.prototype.K,cl=Gs,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,zw=Xe}).apply(typeof gc<"u"?gc:typeof self<"u"?self:typeof window<"u"?window:{});const _v="@firebase/firestore",wv="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new gp("@firebase/firestore");function Vo(){return Ns.logLevel}function le(n,...e){if(Ns.logLevel<=ke.DEBUG){const t=e.map(Cp);Ns.debug(`Firestore (${oa}): ${n}`,...t)}}function Zr(n,...e){if(Ns.logLevel<=ke.ERROR){const t=e.map(Cp);Ns.error(`Firestore (${oa}): ${n}`,...t)}}function ei(n,...e){if(Ns.logLevel<=ke.WARN){const t=e.map(Cp);Ns.warn(`Firestore (${oa}): ${n}`,...t)}}function Cp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Gw(n,i,t)}function Gw(n,e,t){let i=`FIRESTORE (${oa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Zr(i),new Error(i)}function Ue(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Gw(e,o,i)}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Ir{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Bt.UNAUTHENTICATED)))}shutdown(){}}class Y1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class J1{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let a=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Kr,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const p=a;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},d=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Kr)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string",31837,{l:i}),new Qw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Bt(e)}}class X1{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Z1{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new X1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ev{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eP{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const i=a=>{a.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,le("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>i(a)))};const o=a=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ev(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ev(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=tP(40);for(let a=0;a<o.length;++a)i.length<20&&o[a]<t&&(i+=e.charAt(o[a]%62))}return i}}function Re(n,e){return n<e?-1:n>e?1:0}function zf(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Re(i,o);{const a=Jw(),c=nP(a.encode(Tv(n,t)),a.encode(Tv(e,t)));return c!==0?c:Re(i,o)}}t+=i>65535?2:1}return Re(n.length,e.length)}function Tv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function nP(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Re(n[t],e[t]);return Re(n.length,e.length)}function Ho(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="__name__";class dr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ee(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Ee(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return dr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const a=dr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Re(e.length,t.length)}static compareSegments(e,t){const i=dr.isNumericId(e),o=dr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?dr.extractNumericId(e).compare(dr.extractNumericId(t)):zf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Li.fromString(e.substring(4,e.length-2))}}class Ke extends dr{construct(e,t,i){return new Ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new se(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const rP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends dr{construct(e,t,i){return new Pt(e,t,i)}static isValidIdentifier(e){return rP.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Iv}static keyField(){return new Pt([Iv])}static fromServerFormat(e){const t=[];let i="",o=0;const a=()=>{if(i.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new se(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new se(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(a(),o++)}if(a(),c)throw new se(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ke.fromString(e))}static fromName(e){return new ge(Ke.fromString(e).popFirst(5))}static empty(){return new ge(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ke(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(n,e,t){if(!t)throw new se(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Zw(n,e,t,i){if(e===!0&&i===!0)throw new se(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sv(n){if(!ge.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Av(n){if(ge.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function eE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function hh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee(12329,{type:typeof n})}function Qt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=hh(n);throw new se(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n,e){const t={typeString:n};return e&&(t.value=e),t}function $l(n,e){if(!eE(n))throw new se(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,a="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(a!==void 0&&c!==a.value){t=`Expected '${i}' field to equal '${a.value}'`;break}}if(t)throw new se(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=-62135596800,Cv=1e6;class ze{static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Cv);return new ze(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rv)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cv}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if($l(e,ze._jsonSchema))return new ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ze._jsonSchemaVersion="firestore/timestamp/1.0",ze._jsonSchema={type:pt("string",ze._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new ze(0,0))}static max(){return new Ie(new ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=-1;function iP(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new ze(t+1,0):new ze(t,i));return new Ui(o,ge.empty(),e)}function sP(n){return new Ui(n.readTime,n.key,Sl)}class Ui{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ui(Ie.min(),ge.empty(),Sl)}static max(){return new Ui(Ie.max(),ge.empty(),Sl)}}function oP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==aP)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((i,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,i)=>{t(e)}))}static reject(e){return new G(((t,i)=>{i(e)}))}static waitFor(e){return new G(((t,i)=>{let o=0,a=0,c=!1;e.forEach((d=>{++o,d.next((()=>{++a,c&&a===o&&t()}),(p=>i(p)))})),c=!0,a===o&&t()}))}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next((o=>o?G.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,a)=>{i.push(t.call(this,o,a))})),this.waitFor(i)}static mapArray(e,t){return new G(((i,o)=>{const a=e.length,c=new Array(a);let d=0;for(let p=0;p<a;p++){const y=p;t(e[y]).next((_=>{c[y]=_,++d,d===a&&i(c)}),(_=>o(_)))}}))}static doWhile(e,t){return new G(((i,o)=>{const a=()=>{e()===!0?t().next((()=>{a()}),o):i()};a()}))}}function uP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function la(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}dh.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=-1;function fh(n){return n==null}function $c(n){return n===0&&1/n==-1/0}function cP(n){return typeof n=="number"&&Number.isInteger(n)&&!$c(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="";function hP(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Pv(e)),e=dP(n.get(t),e);return Pv(e)}function dP(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case tE:t+="";break;default:t+=a}}return t}function Pv(n){return n+tE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function nE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.comparator=e,this.root=t||Ot.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ot.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yc(this.root,e,this.comparator,!1)}getReverseIterator(){return new yc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yc(this.root,e,this.comparator,!0)}}class yc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ot{constructor(e,t,i,o,a){this.key=e,this.value=t,this.color=i??Ot.RED,this.left=o??Ot.EMPTY,this.right=a??Ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,a){return new Ot(e??this.key,t??this.value,i??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const a=i(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,i),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ot.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}Ot.EMPTY=null,Ot.RED=!0,Ot.BLACK=!1;Ot.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,t,i,o,a){return this}insert(e,t,i){return new Ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nv(this.data.getIterator())}getIteratorFrom(e){return new Nv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class Nv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new gn([])}unionWith(e){let t=new wt(Pt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new gn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ho(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new rE("Invalid base64 string: "+a):a}})(e);return new kt(t)}static fromUint8Array(e){const t=(function(o){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);return a})(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const fP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ji(n){if(Ue(!!n,39018),typeof n=="string"){let e=0;const t=fP.exec(n);if(Ue(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bi(n){return typeof n=="string"?kt.fromBase64String(n):kt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="server_timestamp",sE="__type__",oE="__previous_value__",aE="__local_write_time__";function kp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[sE])===null||t===void 0?void 0:t.stringValue)===iE}function ph(n){const e=n.mapValue.fields[oE];return kp(e)?ph(e):e}function Al(n){const e=ji(n.mapValue.fields[aE].timestampValue);return new ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,t,i,o,a,c,d,p,y,_){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=_}}const zc="(default)";class Wo{constructor(e,t){this.projectId=e,this.database=t||zc}static empty(){return new Wo("","")}get isDefaultDatabase(){return this.database===zc}isEqual(e){return e instanceof Wo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="__type__",mP="__max__",vc={mapValue:{}},uE="__vector__",qc="value";function $i(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?kp(n)?4:yP(n)?9007199254740991:gP(n)?10:11:Ee(28295,{value:n})}function _r(n,e){if(n===e)return!0;const t=$i(n);if(t!==$i(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Al(n).isEqual(Al(e));case 3:return(function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const c=ji(o.timestampValue),d=ji(a.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,a){return Bi(o.bytesValue).isEqual(Bi(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,a){return lt(o.geoPointValue.latitude)===lt(a.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(a.geoPointValue.longitude)})(n,e);case 2:return(function(o,a){if("integerValue"in o&&"integerValue"in a)return lt(o.integerValue)===lt(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const c=lt(o.doubleValue),d=lt(a.doubleValue);return c===d?$c(c)===$c(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return Ho(n.arrayValue.values||[],e.arrayValue.values||[],_r);case 10:case 11:return(function(o,a){const c=o.mapValue.fields||{},d=a.mapValue.fields||{};if(kv(c)!==kv(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!_r(c[p],d[p])))return!1;return!0})(n,e);default:return Ee(52216,{left:n})}}function Rl(n,e){return(n.values||[]).find((t=>_r(t,e)))!==void 0}function Ko(n,e){if(n===e)return 0;const t=$i(n),i=$i(e);if(t!==i)return Re(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return(function(a,c){const d=lt(a.integerValue||a.doubleValue),p=lt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return xv(n.timestampValue,e.timestampValue);case 4:return xv(Al(n),Al(e));case 5:return zf(n.stringValue,e.stringValue);case 6:return(function(a,c){const d=Bi(a),p=Bi(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(a,c){const d=a.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const _=Re(d[y],p[y]);if(_!==0)return _}return Re(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,c){const d=Re(lt(a.latitude),lt(c.latitude));return d!==0?d:Re(lt(a.longitude),lt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Dv(n.arrayValue,e.arrayValue);case 10:return(function(a,c){var d,p,y,_;const E=a.fields||{},T=c.fields||{},N=(d=E[qc])===null||d===void 0?void 0:d.arrayValue,B=(p=T[qc])===null||p===void 0?void 0:p.arrayValue,$=Re(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((_=B==null?void 0:B.values)===null||_===void 0?void 0:_.length)||0);return $!==0?$:Dv(N,B)})(n.mapValue,e.mapValue);case 11:return(function(a,c){if(a===vc.mapValue&&c===vc.mapValue)return 0;if(a===vc.mapValue)return 1;if(c===vc.mapValue)return-1;const d=a.fields||{},p=Object.keys(d),y=c.fields||{},_=Object.keys(y);p.sort(),_.sort();for(let E=0;E<p.length&&E<_.length;++E){const T=zf(p[E],_[E]);if(T!==0)return T;const N=Ko(d[p[E]],y[_[E]]);if(N!==0)return N}return Re(p.length,_.length)})(n.mapValue,e.mapValue);default:throw Ee(23264,{le:t})}}function xv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=ji(n),i=ji(e),o=Re(t.seconds,i.seconds);return o!==0?o:Re(t.nanos,i.nanos)}function Dv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const a=Ko(t[o],i[o]);if(a)return a}return Re(t.length,i.length)}function Go(n){return qf(n)}function qf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=ji(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Bi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ge.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const a of t.values||[])o?o=!1:i+=",",i+=qf(a);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const c of i)a?a=!1:o+=",",o+=`${c}:${qf(t.fields[c])}`;return o+"}"})(n.mapValue):Ee(61005,{value:n})}function kc(n){switch($i(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ph(n);return e?16+kc(e):16;case 5:return 2*n.stringValue.length;case 6:return Bi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,a)=>o+kc(a)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Gi(i.fields,((a,c)=>{o+=a.length+kc(c)})),o})(n.mapValue);default:throw Ee(13486,{value:n})}}function bv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Hf(n){return!!n&&"integerValue"in n}function Np(n){return!!n&&"arrayValue"in n}function Ov(n){return!!n&&"nullValue"in n}function Vv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Nc(n){return!!n&&"mapValue"in n}function gP(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[lE])===null||t===void 0?void 0:t.stringValue)===uE}function ml(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Gi(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=ml(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ml(n.arrayValue.values[t]);return e}return Object.assign({},n)}function yP(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===mP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Nc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ml(t)}setAll(e){let t=Pt.emptyPath(),i={},o=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=ml(c):o.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,i,o)}delete(e){const t=this.field(e.popLast());Nc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _r(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Nc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Gi(t,((o,a)=>e[o]=a));for(const o of i)delete e[o]}clone(){return new on(ml(this.value))}}function cE(n){const e=[];return Gi(n.fields,((t,i)=>{const o=new Pt([t]);if(Nc(i)){const a=cE(i.mapValue).fields;if(a.length===0)e.push(o);else for(const c of a)e.push(o.child(c))}else e.push(o)})),new gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,i,o,a,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=a,this.data=c,this.documentState=d}static newInvalidDocument(e){return new $t(e,0,Ie.min(),Ie.min(),Ie.min(),on.empty(),0)}static newFoundDocument(e,t,i,o){return new $t(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new $t(e,2,t,Ie.min(),Ie.min(),on.empty(),0)}static newUnknownDocument(e,t){return new $t(e,3,t,Ie.min(),Ie.min(),on.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t){this.position=e,this.inclusive=t}}function Lv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const a=e[o],c=n.position[o];if(a.field.isKeyField()?i=ge.comparator(ge.fromName(c.referenceValue),t.key):i=Ko(c,t.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function Mv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_r(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t="asc"){this.field=e,this.dir=t}}function vP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{}class ft extends hE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new wP(e,t,i):t==="array-contains"?new IP(e,i):t==="in"?new SP(e,i):t==="not-in"?new AP(e,i):t==="array-contains-any"?new RP(e,i):new ft(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new EP(e,i):new TP(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ko(t,this.value)):t!==null&&$i(this.value)===$i(t)&&this.matchesComparison(Ko(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class er extends hE{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new er(e,t)}matches(e){return dE(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function dE(n){return n.op==="and"}function fE(n){return _P(n)&&dE(n)}function _P(n){for(const e of n.filters)if(e instanceof er)return!1;return!0}function Wf(n){if(n instanceof ft)return n.field.canonicalString()+n.op.toString()+Go(n.value);if(fE(n))return n.filters.map((e=>Wf(e))).join(",");{const e=n.filters.map((t=>Wf(t))).join(",");return`${n.op}(${e})`}}function pE(n,e){return n instanceof ft?(function(i,o){return o instanceof ft&&i.op===o.op&&i.field.isEqual(o.field)&&_r(i.value,o.value)})(n,e):n instanceof er?(function(i,o){return o instanceof er&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((a,c,d)=>a&&pE(c,o.filters[d])),!0):!1})(n,e):void Ee(19439)}function mE(n){return n instanceof ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${Go(t.value)}`})(n):n instanceof er?(function(t){return t.op.toString()+" {"+t.getFilters().map(mE).join(" ,")+"}"})(n):"Filter"}class wP extends ft{constructor(e,t,i){super(e,t,i),this.key=ge.fromName(i.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class EP extends ft{constructor(e,t){super(e,"in",t),this.keys=gE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class TP extends ft{constructor(e,t){super(e,"not-in",t),this.keys=gE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function gE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>ge.fromName(i.referenceValue)))}class IP extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Np(t)&&Rl(t.arrayValue,this.value)}}class SP extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Rl(this.value.arrayValue,t)}}class AP extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Rl(this.value.arrayValue,t)}}class RP extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Np(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Rl(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,t=null,i=[],o=[],a=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=a,this.startAt=c,this.endAt=d,this.Pe=null}}function Fv(n,e=null,t=[],i=[],o=null,a=null,c=null){return new CP(n,e,t,i,o,a,c)}function xp(n){const e=Se(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Wf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(a){return a.field.canonicalString()+a.dir})(i))).join(","),fh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Go(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Go(i))).join(",")),e.Pe=t}return e.Pe}function Dp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Mv(n.startAt,e.startAt)&&Mv(n.endAt,e.endAt)}function Kf(n){return ge.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t=null,i=[],o=[],a=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=a,this.limitType=c,this.startAt=d,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function PP(n,e,t,i,o,a,c,d){return new zl(n,e,t,i,o,a,c,d)}function mh(n){return new zl(n)}function Uv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yE(n){return n.collectionGroup!==null}function gl(n){const e=Se(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new wt(Pt.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(d=d.add(y.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Wc(a,i))})),t.has(Pt.keyField().canonicalString())||e.Te.push(new Wc(Pt.keyField(),i))}return e.Te}function gr(n){const e=Se(n);return e.Ie||(e.Ie=kP(e,gl(n))),e.Ie}function kP(n,e){if(n.limitType==="F")return Fv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const a=o.dir==="desc"?"asc":"desc";return new Wc(o.field,a)}));const t=n.endAt?new Hc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Hc(n.startAt.position,n.startAt.inclusive):null;return Fv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Gf(n,e){const t=n.filters.concat([e]);return new zl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Qf(n,e,t){return new zl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function gh(n,e){return Dp(gr(n),gr(e))&&n.limitType===e.limitType}function vE(n){return`${xp(gr(n))}|lt:${n.limitType}`}function Lo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>mE(o))).join(", ")}]`),fh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Go(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Go(o))).join(",")),`Target(${i})`})(gr(n))}; limitType=${n.limitType})`}function yh(n,e){return e.isFoundDocument()&&(function(i,o){const a=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):ge.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)})(n,e)&&(function(i,o){for(const a of gl(i))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const a of i.filters)if(!a.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,d,p){const y=Lv(c,d,p);return c.inclusive?y<=0:y<0})(i.startAt,gl(i),o)||i.endAt&&!(function(c,d,p){const y=Lv(c,d,p);return c.inclusive?y>=0:y>0})(i.endAt,gl(i),o))})(n,e)}function NP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _E(n){return(e,t)=>{let i=!1;for(const o of gl(n)){const a=xP(o,e,t);if(a!==0)return a;i=i||o.field.isKeyField()}return 0}}function xP(n,e,t){const i=n.field.isKeyField()?ge.comparator(e.key,t.key):(function(a,c,d){const p=c.data.field(a),y=d.data.field(a);return p!==null&&y!==null?Ko(p,y):Ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,a]of i)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Gi(this.inner,((t,i)=>{for(const[o,a]of i)e(o,a)}))}isEmpty(){return nE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=new it(ge.comparator);function ti(){return DP}const wE=new it(ge.comparator);function hl(...n){let e=wE;for(const t of n)e=e.insert(t.key,t);return e}function EE(n){let e=wE;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Rs(){return yl()}function TE(){return yl()}function yl(){return new Ms((n=>n.toString()),((n,e)=>n.isEqual(e)))}const bP=new it(ge.comparator),OP=new wt(ge.comparator);function Ne(...n){let e=OP;for(const t of n)e=e.add(t);return e}const VP=new wt(Re);function LP(){return VP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$c(e)?"-0":e}}function IE(n){return{integerValue:""+n}}function MP(n,e){return cP(e)?IE(e):bp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this._=void 0}}function FP(n,e,t){return n instanceof Cl?(function(o,a){const c={fields:{[sE]:{stringValue:iE},[aE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&kp(a)&&(a=ph(a)),a&&(c.fields[oE]=a),{mapValue:c}})(t,e):n instanceof Qo?AE(n,e):n instanceof Yo?RE(n,e):(function(o,a){const c=SE(o,a),d=jv(c)+jv(o.Ee);return Hf(c)&&Hf(o.Ee)?IE(d):bp(o.serializer,d)})(n,e)}function UP(n,e,t){return n instanceof Qo?AE(n,e):n instanceof Yo?RE(n,e):t}function SE(n,e){return n instanceof Kc?(function(i){return Hf(i)||(function(a){return!!a&&"doubleValue"in a})(i)})(e)?e:{integerValue:0}:null}class Cl extends vh{}class Qo extends vh{constructor(e){super(),this.elements=e}}function AE(n,e){const t=CE(e);for(const i of n.elements)t.some((o=>_r(o,i)))||t.push(i);return{arrayValue:{values:t}}}class Yo extends vh{constructor(e){super(),this.elements=e}}function RE(n,e){let t=CE(e);for(const i of n.elements)t=t.filter((o=>!_r(o,i)));return{arrayValue:{values:t}}}class Kc extends vh{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function jv(n){return lt(n.integerValue||n.doubleValue)}function CE(n){return Np(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t){this.field=e,this.transform=t}}function jP(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof Qo&&o instanceof Qo||i instanceof Yo&&o instanceof Yo?Ho(i.elements,o.elements,_r):i instanceof Kc&&o instanceof Kc?_r(i.Ee,o.Ee):i instanceof Cl&&o instanceof Cl})(n.transform,e.transform)}class BP{constructor(e,t){this.version=e,this.transformResults=t}}class xn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _h{}function PE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Vp(n.key,xn.none()):new ql(n.key,n.data,xn.none());{const t=n.data,i=on.empty();let o=new wt(Pt.comparator);for(let a of e.fields)if(!o.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?i.delete(a):i.set(a,c),o=o.add(a)}return new Qi(n.key,i,new gn(o.toArray()),xn.none())}}function $P(n,e,t){n instanceof ql?(function(o,a,c){const d=o.value.clone(),p=$v(o.fieldTransforms,a,c.transformResults);d.setAll(p),a.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Qi?(function(o,a,c){if(!xc(o.precondition,a))return void a.convertToUnknownDocument(c.version);const d=$v(o.fieldTransforms,a,c.transformResults),p=a.data;p.setAll(kE(o)),p.setAll(d),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(o,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function vl(n,e,t,i){return n instanceof ql?(function(a,c,d,p){if(!xc(a.precondition,c))return d;const y=a.value.clone(),_=zv(a.fieldTransforms,p,c);return y.setAll(_),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Qi?(function(a,c,d,p){if(!xc(a.precondition,c))return d;const y=zv(a.fieldTransforms,p,c),_=c.data;return _.setAll(kE(a)),_.setAll(y),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,i):(function(a,c,d){return xc(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function zP(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),a=SE(i.transform,o||null);a!=null&&(t===null&&(t=on.empty()),t.set(i.field,a))}return t||null}function Bv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Ho(i,o,((a,c)=>jP(a,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ql extends _h{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Qi extends _h{constructor(e,t,i,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function kE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function $v(n,e,t){const i=new Map;Ue(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const a=n[o],c=a.transform,d=e.data.field(a.field);i.set(a.field,UP(c,d,t[o]))}return i}function zv(n,e,t){const i=new Map;for(const o of n){const a=o.transform,c=t.data.field(o.field);i.set(o.field,FP(a,c,e))}return i}class Vp extends _h{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qP extends _h{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&$P(a,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=vl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=vl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=TE();return this.mutations.forEach((o=>{const a=e.get(o.key),c=a.overlayedDocument;let d=this.applyToLocalView(c,a.mutatedFields);d=t.has(o.key)?null:d;const p=PE(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Ho(this.mutations,e.mutations,((t,i)=>Bv(t,i)))&&Ho(this.baseMutations,e.baseMutations,((t,i)=>Bv(t,i)))}}class Lp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return bP})();const a=e.mutations;for(let c=0;c<a.length;c++)o=o.insert(a[c].key,i[c].version);return new Lp(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,Oe;function GP(n){switch(n){case W.OK:return Ee(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return Ee(15467,{code:n})}}function NE(n){if(n===void 0)return Zr("GRPC error has no .code"),W.UNKNOWN;switch(n){case dt.OK:return W.OK;case dt.CANCELLED:return W.CANCELLED;case dt.UNKNOWN:return W.UNKNOWN;case dt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case dt.INTERNAL:return W.INTERNAL;case dt.UNAVAILABLE:return W.UNAVAILABLE;case dt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case dt.NOT_FOUND:return W.NOT_FOUND;case dt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case dt.ABORTED:return W.ABORTED;case dt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case dt.DATA_LOSS:return W.DATA_LOSS;default:return Ee(39323,{code:n})}}(Oe=dt||(dt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=new Li([4294967295,4294967295],0);function qv(n){const e=Jw().encode(n),t=new $w;return t.update(e),new Uint8Array(t.digest())}function Hv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Li([t,i],0),new Li([o,a],0)]}class Mp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new dl(`Invalid padding: ${t}`);if(i<0)throw new dl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new dl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new dl(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Li.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Li.fromNumber(i)));return o.compare(QP)===1&&(o=new Li([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=qv(e),[i,o]=Hv(t);for(let a=0;a<this.hashCount;a++){const c=this.pe(i,o,a);if(!this.ye(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new Mp(a,o,t);return i.forEach((d=>c.insert(d))),c}insert(e){if(this.fe===0)return;const t=qv(e),[i,o]=Hv(t);for(let a=0;a<this.hashCount;a++){const c=this.pe(i,o,a);this.we(c)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class dl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t,i,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Hl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new wh(Ie.min(),o,new it(Re),ti(),Ne())}}class Hl{constructor(e,t,i,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Hl(i,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class xE{constructor(e,t){this.targetId=e,this.De=t}}class DE{constructor(e,t,i=kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Wv{constructor(){this.ve=0,this.Ce=Kv(),this.Fe=kt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ne(),t=Ne(),i=Ne();return this.Ce.forEach(((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ee(38017,{changeType:a})}})),new Hl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Kv()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class YP{constructor(e){this.We=e,this.Ge=new Map,this.ze=ti(),this.je=_c(),this.Je=_c(),this.He=new it(Re)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const a=o.target;if(Kf(a))if(i===0){const c=new ge(a.path);this.Xe(t,c,$t.newNoDocument(c,Ie.min()))}else Ue(i===1,20013,{expectedCount:i});else{const c=this.ot(t);if(c!==i){const d=this._t(e),p=d?this.ut(d,e,c):1;if(p!==0){this.rt(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=t;let c,d;try{c=Bi(i).toUint8Array()}catch(p){if(p instanceof rE)return ei("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Mp(c,o,a)}catch(p){return ei(p instanceof dl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.fe===0?null:d}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((a=>{const c=this.We.lt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((a,c)=>{const d=this.st(c);if(d){if(a.current&&Kf(d.target)){const p=new ge(d.target.path);this.Tt(p).has(c)||this.It(c,p)||this.Xe(c,p,$t.newNoDocument(p,e))}a.Ne&&(t.set(c,a.Le()),a.ke())}}));let i=Ne();this.Je.forEach(((a,c)=>{let d=!0;c.forEachWhile((p=>{const y=this.st(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(i=i.add(a))})),this.ze.forEach(((a,c)=>c.setReadTime(e)));const o=new wh(e,t,this.He,this.ze,i);return this.ze=ti(),this.je=_c(),this.Je=_c(),this.He=new it(Re),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Wv,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new wt(Re),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new wt(Re),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Wv),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function _c(){return new it(ge.comparator)}function Kv(){return new it(ge.comparator)}const JP={asc:"ASCENDING",desc:"DESCENDING"},XP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZP={and:"AND",or:"OR"};class ek{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yf(n,e){return n.useProto3Json||fh(e)?e:{value:e}}function Gc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function tk(n,e){return Gc(n,e.toTimestamp())}function yr(n){return Ue(!!n,49232),Ie.fromTimestamp((function(t){const i=ji(t);return new ze(i.seconds,i.nanos)})(n))}function Fp(n,e){return Jf(n,e).canonicalString()}function Jf(n,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function OE(n){const e=Ke.fromString(n);return Ue(UE(e),10190,{key:e.toString()}),e}function Xf(n,e){return Fp(n.databaseId,e.path)}function Ef(n,e){const t=OE(e);if(t.get(1)!==n.databaseId.projectId)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ge(LE(t))}function VE(n,e){return Fp(n.databaseId,e)}function nk(n){const e=OE(n);return e.length===4?Ke.emptyPath():LE(e)}function Zf(n){return new Ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function LE(n){return Ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Gv(n,e,t){return{name:Xf(n,e),fields:t.value.mapValue.fields}}function rk(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=(function(y,_){return y.useProto3Json?(Ue(_===void 0||typeof _=="string",58123),kt.fromBase64String(_||"")):(Ue(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),kt.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(y){const _=y.code===void 0?W.UNKNOWN:NE(y.code);return new se(_,y.message||"")})(c);t=new DE(i,o,a,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Ef(n,i.document.name),a=yr(i.document.updateTime),c=i.document.createTime?yr(i.document.createTime):Ie.min(),d=new on({mapValue:{fields:i.document.fields}}),p=$t.newFoundDocument(o,a,c,d),y=i.targetIds||[],_=i.removedTargetIds||[];t=new Dc(y,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Ef(n,i.document),a=i.readTime?yr(i.readTime):Ie.min(),c=$t.newNoDocument(o,a),d=i.removedTargetIds||[];t=new Dc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Ef(n,i.document),a=i.removedTargetIds||[];t=new Dc([],a,o,null)}else{if(!("filter"in e))return Ee(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:a}=i,c=new KP(o,a),d=i.targetId;t=new xE(d,c)}}return t}function ik(n,e){let t;if(e instanceof ql)t={update:Gv(n,e.key,e.value)};else if(e instanceof Vp)t={delete:Xf(n,e.key)};else if(e instanceof Qi)t={update:Gv(n,e.key,e.data),updateMask:fk(e.fieldMask)};else{if(!(e instanceof qP))return Ee(16599,{Rt:e.type});t={verify:Xf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(a,c){const d=c.transform;if(d instanceof Cl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Qo)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Yo)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Kc)return{fieldPath:c.field.canonicalString(),increment:d.Ee};throw Ee(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,a){return a.updateTime!==void 0?{updateTime:tk(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ee(27497)})(n,e.precondition)),t}function sk(n,e){return n&&n.length>0?(Ue(e!==void 0,14353),n.map((t=>(function(o,a){let c=o.updateTime?yr(o.updateTime):yr(a);return c.isEqual(Ie.min())&&(c=yr(a)),new BP(c,o.transformResults||[])})(t,e)))):[]}function ok(n,e){return{documents:[VE(n,e.path)]}}function ak(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=VE(n,o);const a=(function(y){if(y.length!==0)return FE(er.create(y,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const c=(function(y){if(y.length!==0)return y.map((_=>(function(T){return{field:Mo(T.field),direction:ck(T.dir)}})(_)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Yf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{Vt:t,parent:o}}function lk(n){let e=nk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let a=[];t.where&&(a=(function(E){const T=ME(E);return T instanceof er&&fE(T)?T.getFilters():[T]})(t.where));let c=[];t.orderBy&&(c=(function(E){return E.map((T=>(function(B){return new Wc(Fo(B.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let T;return T=typeof E=="object"?E.value:E,fh(T)?null:T})(t.limit));let p=null;t.startAt&&(p=(function(E){const T=!!E.before,N=E.values||[];return new Hc(N,T)})(t.startAt));let y=null;return t.endAt&&(y=(function(E){const T=!E.before,N=E.values||[];return new Hc(N,T)})(t.endAt)),PP(e,o,c,a,d,"F",p,y)}function uk(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ME(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Fo(t.unaryFilter.field);return ft.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Fo(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Fo(t.unaryFilter.field);return ft.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Fo(t.unaryFilter.field);return ft.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ft.create(Fo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return er.create(t.compositeFilter.filters.map((i=>ME(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(t.compositeFilter.op))})(n):Ee(30097,{filter:n})}function ck(n){return JP[n]}function hk(n){return XP[n]}function dk(n){return ZP[n]}function Mo(n){return{fieldPath:n.canonicalString()}}function Fo(n){return Pt.fromServerFormat(n.fieldPath)}function FE(n){return n instanceof ft?(function(t){if(t.op==="=="){if(Vv(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NAN"}};if(Ov(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vv(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NOT_NAN"}};if(Ov(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mo(t.field),op:hk(t.op),value:t.value}}})(n):n instanceof er?(function(t){const i=t.getFilters().map((o=>FE(o)));return i.length===1?i[0]:{compositeFilter:{op:dk(t.op),filters:i}}})(n):Ee(54877,{filter:n})}function fk(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function UE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,i,o,a=Ie.min(),c=Ie.min(),d=kt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Oi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.gt=e}}function mk(n){const e=lk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(){this.Dn=new yk}addToCollectionParentIndex(e,t){return this.Dn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Ui.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Ui.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class yk{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new wt(Ke.comparator),a=!o.has(i);return this.index[t]=o.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new wt(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jE=41943040;class sn{static withCacheSize(e){return new sn(e,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(jE,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Jo(0)}static ur(){return new Jo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="LruGarbageCollector",vk=1048576;function Jv([n,e],[t,i]){const o=Re(n,t);return o===0?Re(e,i):o}class _k{constructor(e){this.Tr=e,this.buffer=new wt(Jv),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Jv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class wk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){le(Yv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){la(t)?le(Yv,"Ignoring IndexedDB error during garbage collection: ",t):await aa(t)}await this.Rr(3e5)}))}}class Ek{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return G.resolve(dh.ue);const i=new _k(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Qv)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qv):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,a,c,d,p,y;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,c=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(i=E,d=Date.now(),this.removeTargets(e,i,t)))).next((E=>(a=E,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((E=>(y=Date.now(),Vo()<=ke.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${a} targets in `+(p-d)+`ms
	Removed ${E} documents in `+(y-p)+`ms
Total Duration: ${y-_}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:E}))))}}function Tk(n,e){return new Ek(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(){this.changes=new Ms((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&vl(i.mutation,o,gn.empty(),ze.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ne()){const o=Rs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((a=>{let c=hl();return a.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=Rs();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ne())))}populateOverlays(e,t,i){const o=[];return i.forEach((a=>{t.has(a)||o.push(a)})),this.documentOverlayCache.getOverlays(e,o).next((a=>{a.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,i,o){let a=ti();const c=yl(),d=(function(){return yl()})();return t.forEach(((p,y)=>{const _=i.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof Qi)?a=a.insert(y.key,y):_!==void 0?(c.set(y.key,_.mutation.getFieldMask()),vl(_.mutation,y,_.mutation.getFieldMask(),ze.now())):c.set(y.key,gn.empty())})),this.recalculateAndSaveOverlays(e,a).next((p=>(p.forEach(((y,_)=>c.set(y,_))),t.forEach(((y,_)=>{var E;return d.set(y,new Sk(_,(E=c.get(y))!==null&&E!==void 0?E:null))})),d)))}recalculateAndSaveOverlays(e,t){const i=yl();let o=new it(((c,d)=>c-d)),a=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let _=i.get(p)||gn.empty();_=d.applyToLocalView(y,_),i.set(p,_);const E=(o.get(d.batchId)||Ne()).add(p);o=o.insert(d.batchId,E)}))})).next((()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,_=p.value,E=TE();_.forEach((T=>{if(!a.has(T)){const N=PE(t.get(T),i.get(T));N!==null&&E.set(T,N),a=a.add(T)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,E))}return G.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(c){return ge.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((a=>{const c=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-a.size):G.resolve(Rs());let d=Sl,p=a;return c.next((y=>G.forEach(y,((_,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(_)?G.resolve():this.remoteDocumentCache.getEntry(e,_).next((T=>{p=p.insert(_,T)}))))).next((()=>this.populateOverlays(e,y,a))).next((()=>this.computeViews(e,p,y,Ne()))).next((_=>({batchId:d,changes:EE(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next((i=>{let o=hl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const a=t.collectionGroup;let c=hl();return this.indexManager.getCollectionParents(e,a).next((d=>G.forEach(d,(p=>{const y=(function(E,T){return new zl(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((_=>{_.forEach(((E,T)=>{c=c.insert(E,T)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,o)))).next((c=>{a.forEach(((p,y)=>{const _=y.getKey();c.get(_)===null&&(c=c.insert(_,$t.newInvalidDocument(_)))}));let d=hl();return c.forEach(((p,y)=>{const _=a.get(p);_!==void 0&&vl(_.mutation,y,gn.empty(),ze.now()),yh(t,y)&&(d=d.insert(p,y))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return G.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:yr(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:mk(o.bundledQuery),readTime:yr(o.readTime)}})(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.overlays=new it(ge.comparator),this.kr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Rs();return G.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&i.set(o,a)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,a)=>{this.wt(e,t,a)})),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=Rs(),a=t.length+1,c=new ge(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===a&&p.largestBatchId>i&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let a=new it(((y,_)=>y-_));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let _=a.get(y.largestBatchId);_===null&&(_=Rs(),a=a.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const d=Rs(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,_)=>d.set(y,_))),!(d.size()>=o)););return G.resolve(d)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new WP(t,i));let a=this.kr.get(t);a===void 0&&(a=Ne(),this.kr.set(t,a)),this.kr.set(t,a.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.qr=new wt(Ct.Qr),this.$r=new wt(Ct.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Ct(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Ct(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new ge(new Ke([])),i=new Ct(t,e),o=new Ct(t,e+1),a=[];return this.$r.forEachInRange([i,o],(c=>{this.Wr(c),a.push(c.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ge(new Ke([])),i=new Ct(t,e),o=new Ct(t,e+1);let a=Ne();return this.$r.forEachInRange([i,o],(c=>{a=a.add(c.key)})),a}containsKey(e){const t=new Ct(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ct{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ge.comparator(e.key,t.key)||Re(e.Hr,t.Hr)}static Ur(e,t){return Re(e.Hr,t.Hr)||ge.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new wt(Ct.Qr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new HP(a,t,i,o);this.mutationQueue.push(c);for(const d of o)this.Yr=this.Yr.add(new Ct(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return G.resolve(c)}lookupMutationBatch(e,t){return G.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),a=o<0?0:o;return G.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?Pp:this.er-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([i,o],(c=>{const d=this.Zr(c.Hr);a.push(d)})),G.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new wt(Re);return t.forEach((o=>{const a=new Ct(o,0),c=new Ct(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,c],(d=>{i=i.add(d.Hr)}))})),G.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let a=i;ge.isDocumentKey(a)||(a=a.child(""));const c=new Ct(new ge(a),0);let d=new wt(Re);return this.Yr.forEachWhile((p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.Hr)),!0)}),c),G.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return G.forEach(t.mutations,(o=>{const a=new Ct(o.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Ct(t,0),o=this.Yr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.ni=e,this.docs=(function(){return new it(ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),a=o?o.size:0,c=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():$t.newInvalidDocument(t))}getEntries(e,t){let i=ti();return t.forEach((o=>{const a=this.docs.get(o);i=i.insert(o,a?a.document.mutableCopy():$t.newInvalidDocument(o))})),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let a=ti();const c=t.path,d=new ge(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:_}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||oP(sP(_),i)<=0||(o.has(_.key)||yh(t,_))&&(a=a.insert(_.key,_.mutableCopy()))}return G.resolve(a)}getAllFromCollectionGroup(e,t,i,o){Ee(9500)}ri(e,t){return G.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new xk(this)}getSize(e){return G.resolve(this.size)}}class xk extends Ik{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),G.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.persistence=e,this.ii=new Ms((t=>xp(t)),Dp),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.si=0,this.oi=new Up,this.targetCount=0,this._i=Jo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),G.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Jo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.hr(t),G.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const a=[];return this.ii.forEach(((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.ii.delete(c),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),G.waitFor(a).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach((c=>{a.push(o.markPotentiallyOrphaned(e,c))})),G.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,t){this.ai={},this.overlays={},this.ui=new dh(0),this.ci=!1,this.ci=!0,this.li=new Pk,this.referenceDelegate=e(this),this.hi=new Dk(this),this.indexManager=new gk,this.remoteDocumentCache=(function(o){return new Nk(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new pk(t),this.Ti=new Rk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ck,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new kk(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){le("MemoryPersistence","Starting transaction:",e);const o=new bk(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((a=>this.referenceDelegate.di(o).next((()=>a)))).toPromise().then((a=>(o.raiseOnCommittedEvent(),a)))}Ei(e,t){return G.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class bk extends lP{constructor(e){super(),this.currentSequenceNumber=e}}class jp{constructor(e){this.persistence=e,this.Ai=new Up,this.Ri=null}static Vi(e){return new jp(e)}get mi(){if(this.Ri)return this.Ri;throw Ee(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((a=>this.mi.add(a.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.mi,(i=>{const o=ge.fromPath(i);return this.fi(e,o).next((a=>{a||t.removeEntry(o,Ie.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return G.or([()=>G.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Qc{constructor(e,t){this.persistence=e,this.gi=new Ms((i=>hP(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=Tk(this,t)}static Vi(e,t){return new Qc(e,t)}Ii(){}di(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return G.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((a=>a?G.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ri(e,(c=>this.Sr(e,c,t).next((d=>{d||(i++,a.removeEntry(c,Ie.min()))})))).next((()=>a.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),G.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=kc(e.data.value)),t}Sr(e,t,i){return G.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Ne(),o=Ne();for(const a of t.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new Bp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return gA()?8:uP(qt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const a={result:null};return this.ps(e,t).next((c=>{a.result=c})).next((()=>{if(!a.result)return this.ys(e,t,o,i).next((c=>{a.result=c}))})).next((()=>{if(a.result)return;const c=new Ok;return this.ws(e,t,c).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,c,d.size)}))})).next((()=>a.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Vo()<=ke.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",Lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(Vo()<=ke.DEBUG&&le("QueryEngine","Query:",Lo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Vo()<=ke.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",Lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gr(t))):G.resolve())}ps(e,t){if(Uv(t))return G.resolve(null);let i=gr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Qf(t,null,"F"),i=gr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((a=>{const c=Ne(...a);return this.gs.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,i).next((p=>{const y=this.bs(t,d);return this.Ds(t,y,c,p.readTime)?this.ps(e,Qf(t,null,"F")):this.vs(e,y,t,p)}))))})))))}ys(e,t,i,o){return Uv(t)||o.isEqual(Ie.min())?G.resolve(null):this.gs.getDocuments(e,i).next((a=>{const c=this.bs(t,a);return this.Ds(t,c,i,o)?G.resolve(null):(Vo()<=ke.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Lo(t)),this.vs(e,c,t,iP(o,Sl)).next((d=>d)))}))}bs(e,t){let i=new wt(_E(e));return t.forEach(((o,a)=>{yh(e,a)&&(i=i.add(a))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ws(e,t,i){return Vo()<=ke.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Lo(t)),this.gs.getDocumentsMatchingQuery(e,t,Ui.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((a=>(t.forEach((c=>{a=a.insert(c.key,c)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="LocalStore",Lk=3e8;class Mk{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new it(Re),this.Ms=new Ms((a=>xp(a)),Dp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ak(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Fk(n,e,t,i){return new Mk(n,e,t,i)}async function $E(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((a=>(o=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((a=>{const c=[],d=[];let p=Ne();for(const y of o){c.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}for(const y of a){d.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(i,p).next((y=>({Bs:y,removedBatchIds:c,addedBatchIds:d})))}))}))}function Uk(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,p,y,_){const E=y.batch,T=E.keys();let N=G.resolve();return T.forEach((B=>{N=N.next((()=>_.getEntry(p,B))).next(($=>{const L=y.docVersions.get(B);Ue(L!==null,48541),$.version.compareTo(L)<0&&(E.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),_.addEntry($)))}))})),N.next((()=>d.mutationQueue.removeMutationBatch(p,E)))})(t,i,e,a).next((()=>a.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(d){let p=Ne();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function zE(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function jk(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const d=[];e.targetChanges.forEach(((_,E)=>{const T=o.get(E);if(!T)return;d.push(t.hi.removeMatchingKeys(a,_.removedDocuments,E).next((()=>t.hi.addMatchingKeys(a,_.addedDocuments,E))));let N=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?N=N.withResumeToken(kt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):_.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(_.resumeToken,i)),o=o.insert(E,N),(function($,L,K){return $.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=Lk?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(T,N,_)&&d.push(t.hi.updateTargetData(a,N))}));let p=ti(),y=Ne();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,_))})),d.push(Bk(a,c,e.documentUpdates).next((_=>{p=_.Ls,y=_.ks}))),!i.isEqual(Ie.min())){const _=t.hi.getLastRemoteSnapshotVersion(a).next((E=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,i)));d.push(_)}return G.waitFor(d).next((()=>c.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,p,y))).next((()=>p))})).then((a=>(t.Fs=o,a)))}function Bk(n,e,t){let i=Ne(),o=Ne();return t.forEach((a=>i=i.add(a))),e.getEntries(n,i).next((a=>{let c=ti();return t.forEach(((d,p)=>{const y=a.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):le($p,"Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)})),{Ls:c,ks:o}}))}function $k(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Pp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function zk(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((a=>a?(o=a,G.resolve(o)):t.hi.allocateTargetId(i).next((c=>(o=new Oi(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function ep(n,e,t){const i=Se(n),o=i.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",a,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!la(c))throw c;le($p,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function Xv(n,e,t){const i=Se(n);let o=Ie.min(),a=Ne();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,y,_){const E=Se(p),T=E.Ms.get(_);return T!==void 0?G.resolve(E.Fs.get(T)):E.hi.getTargetData(y,_)})(i,c,gr(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{a=p}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?a:Ne()))).next((d=>(qk(i,NP(e),d),{documents:d,qs:a})))))}function qk(n,e,t){let i=n.xs.get(e)||Ie.min();t.forEach(((o,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)})),n.xs.set(e,i)}class Zv{constructor(){this.activeTargetIds=LP()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hk{constructor(){this.Fo=new Zv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Zv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="ConnectivityMonitor";class t_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){le(e_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){le(e_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc=null;function tp(){return wc===null?wc=(function(){return 268435456+Math.round(2147483648*Math.random())})():wc++,"0x"+wc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="RestConnection",Kk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Gk{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===zc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,a){const c=tp(),d=this.Go(e,t.toUriEncodedString());le(Tf,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,a);const{host:y}=new URL(d),_=ra(y);return this.jo(e,d,p,i,_).then((E=>(le(Tf,`Received RPC '${e}' ${c}: `,E),E)),(E=>{throw ei(Tf,`RPC '${e}' ${c} failed with error: `,E,"url: ",d,"request:",i),E}))}Jo(e,t,i,o,a,c){return this.Wo(e,t,i,o,a)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+oa})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,a)=>e[a]=o)),i&&i.headers.forEach(((o,a)=>e[a]=o))}Go(e,t){const i=Kk[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class Yk extends Gk{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,a){const c=tp();return new Promise(((d,p)=>{const y=new zw;y.setWithCredentials(!0),y.listenOnce(qw.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Pc.NO_ERROR:const E=y.getResponseJson();le(jt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(E)),d(E);break;case Pc.TIMEOUT:le(jt,`RPC '${e}' ${c} timed out`),p(new se(W.DEADLINE_EXCEEDED,"Request time out"));break;case Pc.HTTP_ERROR:const T=y.getStatus();if(le(jt,`RPC '${e}' ${c} failed with status:`,T,"response text:",y.getResponseText()),T>0){let N=y.getResponseJson();Array.isArray(N)&&(N=N[0]);const B=N==null?void 0:N.error;if(B&&B.status&&B.message){const $=(function(K){const Z=K.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(Z)>=0?Z:W.UNKNOWN})(B.status);p(new se($,B.message))}else p(new se(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new se(W.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{c_:e,streamId:c,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{le(jt,`RPC '${e}' ${c} completed.`)}}));const _=JSON.stringify(o);le(jt,`RPC '${e}' ${c} sending request:`,o),y.send(t,"POST",_,i,15)}))}P_(e,t,i){const o=tp(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Kw(),d=Ww(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const _=a.join("");le(jt,`Creating RPC '${e}' stream ${o}: ${_}`,p);const E=c.createWebChannel(_,p);this.T_(E);let T=!1,N=!1;const B=new Qk({Ho:L=>{N?le(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(T||(le(jt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),T=!0),le(jt,`RPC '${e}' stream ${o} sending:`,L),E.send(L))},Yo:()=>E.close()}),$=(L,K,Z)=>{L.listen(K,(ne=>{try{Z(ne)}catch(ae){setTimeout((()=>{throw ae}),0)}}))};return $(E,cl.EventType.OPEN,(()=>{N||(le(jt,`RPC '${e}' stream ${o} transport opened.`),B.s_())})),$(E,cl.EventType.CLOSE,(()=>{N||(N=!0,le(jt,`RPC '${e}' stream ${o} transport closed`),B.__(),this.I_(E))})),$(E,cl.EventType.ERROR,(L=>{N||(N=!0,ei(jt,`RPC '${e}' stream ${o} transport errored. Name:`,L.name,"Message:",L.message),B.__(new se(W.UNAVAILABLE,"The operation could not be completed")))})),$(E,cl.EventType.MESSAGE,(L=>{var K;if(!N){const Z=L.data[0];Ue(!!Z,16349);const ne=Z,ae=(ne==null?void 0:ne.error)||((K=ne[0])===null||K===void 0?void 0:K.error);if(ae){le(jt,`RPC '${e}' stream ${o} received error:`,ae);const te=ae.status;let de=(function(C){const x=dt[C];if(x!==void 0)return NE(x)})(te),D=ae.message;de===void 0&&(de=W.INTERNAL,D="Unknown error status: "+te+" with message "+ae.message),N=!0,B.__(new se(de,D)),E.close()}else le(jt,`RPC '${e}' stream ${o} received:`,Z),B.a_(Z)}})),$(d,Hw.STAT_EVENT,(L=>{L.stat===$f.PROXY?le(jt,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===$f.NOPROXY&&le(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{B.o_()}),0),B}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function If(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n){return new ek(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t,i=1e3,o=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="PersistentStream";class HE{constructor(e,t,i,o,a,c,d,p){this.Fi=e,this.w_=i,this.S_=o,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new qE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Zr(t.toString()),Zr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new se(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return le(n_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(le(n_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Jk extends HE{constructor(e,t,i,o,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=rk(this.serializer,e),i=(function(a){if(!("targetChange"in a))return Ie.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?yr(c.readTime):Ie.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=Zf(this.serializer),t.addTarget=(function(a,c){let d;const p=c.target;if(d=Kf(p)?{documents:ok(a,p)}:{query:ak(a,p).Vt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=bE(a,c.resumeToken);const y=Yf(a,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=Gc(a,c.snapshotVersion.toTimestamp());const y=Yf(a,c.expectedCount);y!==null&&(d.expectedCount=y)}return d})(this.serializer,e);const i=uk(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=Zf(this.serializer),t.removeTarget=e,this.k_(t)}}class Xk extends HE{constructor(e,t,i,o,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=sk(e.writeResults,e.commitTime),i=yr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=Zf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>ik(this.serializer,i)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{}class eN extends Zk{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Wo(e,Jf(t,i),o,a,c))).catch((a=>{throw a.name==="FirebaseError"?(a.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new se(W.UNKNOWN,a.toString())}))}Jo(e,t,i,o,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Jo(e,Jf(t,i),o,c,d,a))).catch((c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new se(W.UNKNOWN,c.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class tN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Zr(t),this._a=!1):le("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="RemoteStore";class nN{constructor(e,t,i,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((c=>{i.enqueueAndForget((async()=>{Fs(this)&&(le(xs,"Restarting streams for network reachability change."),await(async function(p){const y=Se(p);y.Ia.add(4),await Wl(y),y.Aa.set("Unknown"),y.Ia.delete(4),await Th(y)})(this))}))})),this.Aa=new tN(i,o)}}async function Th(n){if(Fs(n))for(const e of n.da)await e(!0)}async function Wl(n){for(const e of n.da)await e(!1)}function WE(n,e){const t=Se(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Wp(t)?Hp(t):ua(t).x_()&&qp(t,e))}function zp(n,e){const t=Se(n),i=ua(t);t.Ta.delete(e),i.x_()&&KE(t,e),t.Ta.size===0&&(i.x_()?i.B_():Fs(t)&&t.Aa.set("Unknown"))}function qp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ua(n).H_(e)}function KE(n,e){n.Ra.$e(e),ua(n).Y_(e)}function Hp(n){n.Ra=new YP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ua(n).start(),n.Aa.aa()}function Wp(n){return Fs(n)&&!ua(n).M_()&&n.Ta.size>0}function Fs(n){return Se(n).Ia.size===0}function GE(n){n.Ra=void 0}async function rN(n){n.Aa.set("Online")}async function iN(n){n.Ta.forEach(((e,t)=>{qp(n,e)}))}async function sN(n,e){GE(n),Wp(n)?(n.Aa.la(e),Hp(n)):n.Aa.set("Unknown")}async function oN(n,e,t){if(n.Aa.set("Online"),e instanceof DE&&e.state===2&&e.cause)try{await(async function(o,a){const c=a.cause;for(const d of a.targetIds)o.Ta.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.Ta.delete(d),o.Ra.removeTarget(d))})(n,e)}catch(i){le(xs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Yc(n,i)}else if(e instanceof Dc?n.Ra.Ye(e):e instanceof xE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ie.min()))try{const i=await zE(n.localStore);t.compareTo(i)>=0&&await(function(a,c){const d=a.Ra.Pt(c);return d.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const _=a.Ta.get(y);_&&a.Ta.set(y,_.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,y)=>{const _=a.Ta.get(p);if(!_)return;a.Ta.set(p,_.withResumeToken(kt.EMPTY_BYTE_STRING,_.snapshotVersion)),KE(a,p);const E=new Oi(_.target,p,y,_.sequenceNumber);qp(a,E)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(i){le(xs,"Failed to raise snapshot:",i),await Yc(n,i)}}async function Yc(n,e,t){if(!la(e))throw e;n.Ia.add(1),await Wl(n),n.Aa.set("Offline"),t||(t=()=>zE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{le(xs,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Th(n)}))}function QE(n,e){return e().catch((t=>Yc(n,t,e)))}async function Ih(n){const e=Se(n),t=zi(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Pp;for(;aN(e);)try{const o=await $k(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,lN(e,o)}catch(o){await Yc(e,o)}YE(e)&&JE(e)}function aN(n){return Fs(n)&&n.Pa.length<10}function lN(n,e){n.Pa.push(e);const t=zi(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function YE(n){return Fs(n)&&!zi(n).M_()&&n.Pa.length>0}function JE(n){zi(n).start()}async function uN(n){zi(n).na()}async function cN(n){const e=zi(n);for(const t of n.Pa)e.X_(t.mutations)}async function hN(n,e,t){const i=n.Pa.shift(),o=Lp.from(i,e,t);await QE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Ih(n)}async function dN(n,e){e&&zi(n).Z_&&await(async function(i,o){if((function(c){return GP(c)&&c!==W.ABORTED})(o.code)){const a=i.Pa.shift();zi(i).N_(),await QE(i,(()=>i.remoteSyncer.rejectFailedWrite(a.batchId,o))),await Ih(i)}})(n,e),YE(n)&&JE(n)}async function r_(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),le(xs,"RemoteStore received new credentials");const i=Fs(t);t.Ia.add(3),await Wl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Th(t)}async function fN(n,e){const t=Se(n);e?(t.Ia.delete(2),await Th(t)):e||(t.Ia.add(2),await Wl(t),t.Aa.set("Unknown"))}function ua(n){return n.Va||(n.Va=(function(t,i,o){const a=Se(t);return a.ia(),new Jk(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:rN.bind(null,n),e_:iN.bind(null,n),n_:sN.bind(null,n),J_:oN.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Wp(n)?Hp(n):n.Aa.set("Unknown")):(await n.Va.stop(),GE(n))}))),n.Va}function zi(n){return n.ma||(n.ma=(function(t,i,o){const a=Se(t);return a.ia(),new Xk(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:uN.bind(null,n),n_:dN.bind(null,n),ea:cN.bind(null,n),ta:hN.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Ih(n)):(await n.ma.stop(),n.Pa.length>0&&(le(xs,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t,i,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=a,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,a){const c=Date.now()+i,d=new Kp(e,t,c,o,a);return d.start(i),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gp(n,e){if(Zr("AsyncQueue",`${e}: ${n}`),la(n))return new se(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{static emptySet(e){return new qo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ge.comparator(t.key,i.key):(t,i)=>ge.comparator(t.key,i.key),this.keyedMap=hl(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new qo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.fa=new it(ge.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ee(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Xo{constructor(e,t,i,o,a,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,a){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new Xo(e,t,qo.emptySet(t),c,i,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class mN{constructor(){this.queries=s_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Se(t),a=o.queries;o.queries=s_(),a.forEach(((c,d)=>{for(const p of d.wa)p.onError(i)}))})(this,new se(W.ABORTED,"Firestore shutting down"))}}function s_(){return new Ms((n=>vE(n)),gh)}async function Qp(n,e){const t=Se(n);let i=3;const o=e.query;let a=t.queries.get(o);a?!a.Sa()&&e.ba()&&(i=2):(a=new pN,i=e.ba()?0:1);try{switch(i){case 0:a.ya=await t.onListen(o,!0);break;case 1:a.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=Gp(c,`Initialization of query '${Lo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Jp(t)}async function Yp(n,e){const t=Se(n),i=e.query;let o=3;const a=t.queries.get(i);if(a){const c=a.wa.indexOf(e);c>=0&&(a.wa.splice(c,1),a.wa.length===0?o=e.ba()?0:1:!a.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function gN(n,e){const t=Se(n);let i=!1;for(const o of e){const a=o.query,c=t.queries.get(a);if(c){for(const d of c.wa)d.Ca(o)&&(i=!0);c.ya=o}}i&&Jp(t)}function yN(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const a of o.wa)a.onError(t);i.queries.delete(e)}function Jp(n){n.Da.forEach((e=>{e.next()}))}var np,o_;(o_=np||(np={})).Fa="default",o_.Cache="cache";class Xp{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Xo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==np.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.key=e}}class ZE{constructor(e){this.key=e}}class vN{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ne(),this.mutatedKeys=Ne(),this.Xa=_E(e),this.eu=new qo(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new i_,o=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,E)=>{const T=o.get(_),N=yh(this.query,E)?E:null,B=!!T&&this.mutatedKeys.has(T.key),$=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let L=!1;T&&N?T.data.isEqual(N.data)?B!==$&&(i.track({type:3,doc:N}),L=!0):this.iu(T,N)||(i.track({type:2,doc:N}),L=!0,(p&&this.Xa(N,p)>0||y&&this.Xa(N,y)<0)&&(d=!0)):!T&&N?(i.track({type:0,doc:N}),L=!0):T&&!N&&(i.track({type:1,doc:T}),L=!0,(p||y)&&(d=!0)),L&&(N?(c=c.add(N),a=$?a.add(_):a.delete(_)):(c=c.delete(_),a=a.delete(_)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),a=a.delete(_.key),i.track({type:1,doc:_})}return{eu:c,ru:i,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort(((_,E)=>(function(N,B){const $=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{At:L})}};return $(N)-$(B)})(_.type,E.type)||this.Xa(_.doc,E.doc))),this.su(i),o=o!=null&&o;const d=t&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,y=p!==this.Ya;return this.Ya=p,c.length!==0||y?{snapshot:new Xo(this.query,e.eu,a,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new i_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ne(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new ZE(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new XE(i))})),t}uu(e){this.Ha=e.qs,this.Za=Ne();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Xo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Zp="SyncEngine";class _N{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class wN{constructor(e){this.key=e,this.lu=!1}}class EN{constructor(e,t,i,o,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new Ms((d=>vE(d)),gh),this.Tu=new Map,this.Iu=new Set,this.du=new it(ge.comparator),this.Eu=new Map,this.Au=new Up,this.Ru={},this.Vu=new Map,this.mu=Jo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function TN(n,e,t=!0){const i=s0(n);let o;const a=i.Pu.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.cu()):o=await e0(i,e,t,!0),o}async function IN(n,e){const t=s0(n);await e0(t,e,!0,!1)}async function e0(n,e,t,i){const o=await zk(n.localStore,gr(e)),a=o.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let d;return i&&(d=await SN(n,e,a,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&WE(n.remoteStore,o),d}async function SN(n,e,t,i,o){n.gu=(E,T,N)=>(async function($,L,K,Z){let ne=L.view.nu(K);ne.Ds&&(ne=await Xv($.localStore,L.query,!1).then((({documents:D})=>L.view.nu(D,ne))));const ae=Z&&Z.targetChanges.get(L.targetId),te=Z&&Z.targetMismatches.get(L.targetId)!=null,de=L.view.applyChanges(ne,$.isPrimaryClient,ae,te);return l_($,L.targetId,de._u),de.snapshot})(n,E,T,N);const a=await Xv(n.localStore,e,!0),c=new vN(e,a.qs),d=c.nu(a.documents),p=Hl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);l_(n,t,y._u);const _=new _N(e,t,c);return n.Pu.set(e,_),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function AN(n,e,t){const i=Se(n),o=i.Pu.get(e),a=i.Tu.get(o.targetId);if(a.length>1)return i.Tu.set(o.targetId,a.filter((c=>!gh(c,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await ep(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&zp(i.remoteStore,o.targetId),rp(i,o.targetId)})).catch(aa)):(rp(i,o.targetId),await ep(i.localStore,o.targetId,!0))}async function RN(n,e){const t=Se(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),zp(t.remoteStore,i.targetId))}async function CN(n,e,t){const i=ON(n);try{const o=await(function(c,d){const p=Se(c),y=ze.now(),_=d.reduce(((N,B)=>N.add(B.key)),Ne());let E,T;return p.persistence.runTransaction("Locally write mutations","readwrite",(N=>{let B=ti(),$=Ne();return p.Os.getEntries(N,_).next((L=>{B=L,B.forEach(((K,Z)=>{Z.isValidDocument()||($=$.add(K))}))})).next((()=>p.localDocuments.getOverlayedDocuments(N,B))).next((L=>{E=L;const K=[];for(const Z of d){const ne=zP(Z,E.get(Z.key).overlayedDocument);ne!=null&&K.push(new Qi(Z.key,ne,cE(ne.value.mapValue),xn.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,K,d)})).next((L=>{T=L;const K=L.applyToLocalDocumentSet(E,$);return p.documentOverlayCache.saveOverlays(N,L.batchId,K)}))})).then((()=>({batchId:T.batchId,changes:EE(E)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,d,p){let y=c.Ru[c.currentUser.toKey()];y||(y=new it(Re)),y=y.insert(d,p),c.Ru[c.currentUser.toKey()]=y})(i,o.batchId,t),await Kl(i,o.changes),await Ih(i.remoteStore)}catch(o){const a=Gp(o,"Failed to persist write");t.reject(a)}}async function t0(n,e){const t=Se(n);try{const i=await jk(t.localStore,e);e.targetChanges.forEach(((o,a)=>{const c=t.Eu.get(a);c&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.lu=!0:o.modifiedDocuments.size>0?Ue(c.lu,14607):o.removedDocuments.size>0&&(Ue(c.lu,42227),c.lu=!1))})),await Kl(t,i,e)}catch(i){await aa(i)}}function a_(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((a,c)=>{const d=c.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(c,d){const p=Se(c);p.onlineState=d;let y=!1;p.queries.forEach(((_,E)=>{for(const T of E.wa)T.va(d)&&(y=!0)})),y&&Jp(p)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function PN(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),a=o&&o.key;if(a){let c=new it(ge.comparator);c=c.insert(a,$t.newNoDocument(a,Ie.min()));const d=Ne().add(a),p=new wh(Ie.min(),new Map,new it(Re),c,d);await t0(i,p),i.du=i.du.remove(a),i.Eu.delete(e),em(i)}else await ep(i.localStore,e,!1).then((()=>rp(i,e,t))).catch(aa)}async function kN(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await Uk(t.localStore,e);r0(t,i,null),n0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Kl(t,o)}catch(o){await aa(o)}}async function NN(n,e,t){const i=Se(n);try{const o=await(function(c,d){const p=Se(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let _;return p.mutationQueue.lookupMutationBatch(y,d).next((E=>(Ue(E!==null,37113),_=E.keys(),p.mutationQueue.removeMutationBatch(y,E)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,_,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_))).next((()=>p.localDocuments.getDocuments(y,_)))}))})(i.localStore,e);r0(i,e,t),n0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Kl(i,o)}catch(o){await aa(o)}}function n0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function r0(n,e,t){const i=Se(n);let o=i.Ru[i.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function rp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||i0(n,i)}))}function i0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(zp(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),em(n))}function l_(n,e,t){for(const i of t)i instanceof XE?(n.Au.addReference(i.key,e),xN(n,i)):i instanceof ZE?(le(Zp,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||i0(n,i.key)):Ee(19791,{yu:i})}function xN(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(le(Zp,"New document in limbo: "+t),n.Iu.add(i),em(n))}function em(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ge(Ke.fromString(e)),i=n.mu.next();n.Eu.set(i,new wN(t)),n.du=n.du.insert(t,i),WE(n.remoteStore,new Oi(gr(mh(t.path)),i,"TargetPurposeLimboResolution",dh.ue))}}async function Kl(n,e,t){const i=Se(n),o=[],a=[],c=[];i.Pu.isEmpty()||(i.Pu.forEach(((d,p)=>{c.push(i.gu(p,e,t).then((y=>{var _;if((y||t)&&i.isPrimaryClient){const E=y?!y.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=Bp.Es(p.targetId,y);a.push(E)}})))})),await Promise.all(c),i.hu.J_(o),await(async function(p,y){const _=Se(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>G.forEach(y,(T=>G.forEach(T.Is,(N=>_.persistence.referenceDelegate.addReference(E,T.targetId,N))).next((()=>G.forEach(T.ds,(N=>_.persistence.referenceDelegate.removeReference(E,T.targetId,N)))))))))}catch(E){if(!la(E))throw E;le($p,"Failed to update sequence numbers: "+E)}for(const E of y){const T=E.targetId;if(!E.fromCache){const N=_.Fs.get(T),B=N.snapshotVersion,$=N.withLastLimboFreeSnapshotVersion(B);_.Fs=_.Fs.insert(T,$)}}})(i.localStore,a))}async function DN(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){le(Zp,"User change. New user:",e.toKey());const i=await $E(t.localStore,e);t.currentUser=e,(function(a,c){a.Vu.forEach((d=>{d.forEach((p=>{p.reject(new se(W.CANCELLED,c))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Kl(t,i.Bs)}}function bN(n,e){const t=Se(n),i=t.Eu.get(e);if(i&&i.lu)return Ne().add(i.key);{let o=Ne();const a=t.Tu.get(e);if(!a)return o;for(const c of a){const d=t.Pu.get(c);o=o.unionWith(d.view.tu)}return o}}function s0(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=t0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PN.bind(null,e),e.hu.J_=gN.bind(null,e.eventManager),e.hu.pu=yN.bind(null,e.eventManager),e}function ON(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NN.bind(null,e),e}class Jc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Eh(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Fk(this.persistence,new Vk,e.initialUser,this.serializer)}Du(e){return new BE(jp.Vi,this.serializer)}bu(e){return new Hk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jc.provider={build:()=>new Jc};class VN extends Jc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ue(this.persistence.referenceDelegate instanceof Qc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new wk(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new BE((i=>Qc.Vi(i,t)),this.serializer)}}class ip{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>a_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=DN.bind(null,this.syncEngine),await fN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new mN})()}createDatastore(e){const t=Eh(e.databaseInfo.databaseId),i=(function(a){return new Yk(a)})(e.databaseInfo);return(function(a,c,d,p){return new eN(a,c,d,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,a,c,d){return new nN(i,o,a,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>a_(this.syncEngine,t,0)),(function(){return t_.C()?new t_:new Wk})())}createSyncEngine(e,t){return(function(o,a,c,d,p,y,_){const E=new EN(o,a,c,d,p,y);return _&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const a=Se(o);le(xs,"RemoteStore shutting down."),a.Ia.add(5),await Wl(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ip.provider={build:()=>new ip};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Zr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="FirestoreClient";class LN{constructor(e,t,i,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=ch.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,(async c=>{le(qi,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(le(qi,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Gp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Sf(n,e){n.asyncQueue.verifyOperationInProgress(),le(qi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await $E(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{ei("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{le("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{ei("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function u_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await MN(n);le(qi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>r_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>r_(e.remoteStore,o))),n._onlineComponents=e}async function MN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le(qi,"Using user provided OfflineComponentProvider");try{await Sf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ei("Error using user provided cache. Falling back to memory cache: "+t),await Sf(n,new Jc)}}else le(qi,"Using default OfflineComponentProvider"),await Sf(n,new VN(void 0));return n._offlineComponents}async function o0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le(qi,"Using user provided OnlineComponentProvider"),await u_(n,n._uninitializedComponentsProvider._online)):(le(qi,"Using default OnlineComponentProvider"),await u_(n,new ip))),n._onlineComponents}function FN(n){return o0(n).then((e=>e.syncEngine))}async function Xc(n){const e=await o0(n),t=e.eventManager;return t.onListen=TN.bind(null,e.syncEngine),t.onUnlisten=AN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=IN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=RN.bind(null,e.syncEngine),t}function UN(n,e,t={}){const i=new Kr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,d,p,y){const _=new tm({next:T=>{_.Ou(),c.enqueueAndForget((()=>Yp(a,E)));const N=T.docs.has(d);!N&&T.fromCache?y.reject(new se(W.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&T.fromCache&&p&&p.source==="server"?y.reject(new se(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(T)},error:T=>y.reject(T)}),E=new Xp(mh(d.path),_,{includeMetadataChanges:!0,ka:!0});return Qp(a,E)})(await Xc(n),n.asyncQueue,e,t,i))),i.promise}function jN(n,e,t={}){const i=new Kr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,d,p,y){const _=new tm({next:T=>{_.Ou(),c.enqueueAndForget((()=>Yp(a,E))),T.fromCache&&p.source==="server"?y.reject(new se(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(T)},error:T=>y.reject(T)}),E=new Xp(d,_,{includeMetadataChanges:!0,ka:!0});return Qp(a,E)})(await Xc(n),n.asyncQueue,e,t,i))),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="firestore.googleapis.com",h_=!0;class d_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new se(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=l0,this.ssl=h_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:h_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vk)throw new se(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=a0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new d_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new d_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Yw;switch(i.type){case"firstParty":return new Z1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new se(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=c_.get(t);i&&(le("ComponentProvider","Removing Datastore"),c_.delete(t),i.terminate())})(this),Promise.resolve()}}function u0(n,e,t,i={}){var o;n=Qt(n,Sh);const a=ra(e),c=n._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;a&&(ew(`https://${p}`),tw("Firestore",!0)),c.host!==l0&&c.host!==p&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},c),{host:p,ssl:a,emulatorOptions:i});if(!Yr(y,d)&&(n._setSettings(y),i.mockUserToken)){let _,E;if(typeof i.mockUserToken=="string")_=i.mockUserToken,E=Bt.MOCK_USER;else{_=aA(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new se(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Bt(T)}n._authCredentials=new Y1(new Qw(_,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Yi(this.firestore,e,this._query)}}class rt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if($l(t,rt._jsonSchema))return new rt(e,i||null,new ge(Ke.fromString(t.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:pt("string",rt._jsonSchemaVersion),referencePath:pt("string")};class Gr extends Yi{constructor(e,t,i){super(e,t,mh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new ge(e))}withConverter(e){return new Gr(this.firestore,e,this._path)}}function Hi(n,e,...t){if(n=Et(n),Xw("collection","path",e),n instanceof Sh){const i=Ke.fromString(e,...t);return Av(i),new Gr(n,null,i)}{if(!(n instanceof rt||n instanceof Gr))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return Av(i),new Gr(n.firestore,null,i)}}function zt(n,e,...t){if(n=Et(n),arguments.length===1&&(e=ch.newId()),Xw("doc","path",e),n instanceof Sh){const i=Ke.fromString(e,...t);return Sv(i),new rt(n,null,new ge(i))}{if(!(n instanceof rt||n instanceof Gr))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return Sv(i),new rt(n.firestore,n instanceof Gr?n.converter:null,new ge(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="AsyncQueue";class p_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new qE(this,"async_queue_retry"),this.oc=()=>{const i=If();i&&le(f_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=If();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=If();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Kr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!la(e))throw e;le(f_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Zr("INTERNAL UNHANDLED ERROR: ",m_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Kp.createAndSchedule(this,e,t,i,(a=>this.lc(a)));return this.ec.push(o),o}ac(){this.tc&&Ee(47125,{hc:m_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function m_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of i)if(a in o&&typeof o[a]=="function")return!0;return!1})(n,["next","error","complete"])}class wr extends Sh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new p_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new p_(e),this._firestoreClient=void 0,await e}}}function c0(n,e){const t=typeof n=="object"?n:sw(),i=typeof n=="string"?n:zc,o=Ml(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const a=sA("firestore");a&&u0(o,...a)}return o}function Gl(n){if(n._terminated)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||BN(n),n._firestoreClient}function BN(n){var e,t,i;const o=n._freezeSettings(),a=(function(d,p,y,_){return new pP(d,p,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,a0(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new LN(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mn(kt.fromBase64String(e))}catch(t){throw new se(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mn(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:mn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if($l(e,mn._jsonSchema))return mn.fromBase64String(e.bytes)}}mn._jsonSchemaVersion="firestore/bytes/1.0",mn._jsonSchema={type:pt("string",mn._jsonSchemaVersion),bytes:pt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yn._jsonSchemaVersion}}static fromJSON(e){if($l(e,Yn._jsonSchema))return new Yn(e.latitude,e.longitude)}}Yn._jsonSchemaVersion="firestore/geoPoint/1.0",Yn._jsonSchema={type:pt("string",Yn._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if($l(e,Jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Jn(e.vectorValues);throw new se(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jn._jsonSchemaVersion="firestore/vectorValue/1.0",Jn._jsonSchema={type:pt("string",Jn._jsonSchemaVersion),vectorValues:pt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=/^__.*__$/;class zN{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms):new ql(e,this.data,t,this.fieldTransforms)}}class h0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function d0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ec:n})}}class Ah{constructor(e,t,i,o,a,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ah(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Zc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(d0(this.Ec)&&$N.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class qN{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Eh(e)}Dc(e,t,i,o=!1){return new Ah({Ec:e,methodName:t,bc:i,path:Pt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rh(n){const e=n._freezeSettings(),t=Eh(n._databaseId);return new qN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function f0(n,e,t,i,o,a={}){const c=n.Dc(a.merge||a.mergeFields?2:0,e,t,o);sm("Data must be an object, but it was:",c,i);const d=m0(i,c);let p,y;if(a.merge)p=new gn(c.fieldMask),y=c.fieldTransforms;else if(a.mergeFields){const _=[];for(const E of a.mergeFields){const T=sp(e,E,t);if(!c.contains(T))throw new se(W.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);y0(_,T)||_.push(T)}p=new gn(_),y=c.fieldTransforms.filter((E=>p.covers(E.field)))}else p=null,y=c.fieldTransforms;return new zN(new on(d),p,y)}class Ch extends Us{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ch}}function p0(n,e,t){return new Ah({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class nm extends Us{_toFieldTransform(e){return new Op(e.path,new Cl)}isEqual(e){return e instanceof nm}}class rm extends Us{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=p0(this,e,!0),i=this.vc.map((a=>js(a,t))),o=new Qo(i);return new Op(e.path,o)}isEqual(e){return e instanceof rm&&Yr(this.vc,e.vc)}}class im extends Us{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=p0(this,e,!0),i=this.vc.map((a=>js(a,t))),o=new Yo(i);return new Op(e.path,o)}isEqual(e){return e instanceof im&&Yr(this.vc,e.vc)}}function HN(n,e,t,i){const o=n.Dc(1,e,t);sm("Data must be an object, but it was:",o,i);const a=[],c=on.empty();Gi(i,((p,y)=>{const _=om(e,p,t);y=Et(y);const E=o.gc(_);if(y instanceof Ch)a.push(_);else{const T=js(y,E);T!=null&&(a.push(_),c.set(_,T))}}));const d=new gn(a);return new h0(c,d,o.fieldTransforms)}function WN(n,e,t,i,o,a){const c=n.Dc(1,e,t),d=[sp(e,i,t)],p=[o];if(a.length%2!=0)throw new se(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(sp(e,a[T])),p.push(a[T+1]);const y=[],_=on.empty();for(let T=d.length-1;T>=0;--T)if(!y0(y,d[T])){const N=d[T];let B=p[T];B=Et(B);const $=c.gc(N);if(B instanceof Ch)y.push(N);else{const L=js(B,$);L!=null&&(y.push(N),_.set(N,L))}}const E=new gn(y);return new h0(_,E,c.fieldTransforms)}function KN(n,e,t,i=!1){return js(t,n.Dc(i?4:3,e))}function js(n,e){if(g0(n=Et(n)))return sm("Unsupported field value:",e,n),m0(n,e);if(n instanceof Us)return(function(i,o){if(!d0(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(o);a&&o.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const a=[];let c=0;for(const d of i){let p=js(d,o.yc(c));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),c++}return{arrayValue:{values:a}}})(n,e)}return(function(i,o){if((i=Et(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return MP(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=ze.fromDate(i);return{timestampValue:Gc(o.serializer,a)}}if(i instanceof ze){const a=new ze(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Gc(o.serializer,a)}}if(i instanceof Yn)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof mn)return{bytesValue:bE(o.serializer,i._byteString)};if(i instanceof rt){const a=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(a))throw o.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Fp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Jn)return(function(c,d){return{mapValue:{fields:{[lE]:{stringValue:uE},[qc]:{arrayValue:{values:c.toArray().map((y=>{if(typeof y!="number")throw d.wc("VectorValues must only contain numeric values.");return bp(d.serializer,y)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${hh(i)}`)})(n,e)}function m0(n,e){const t={};return nE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gi(n,((i,o)=>{const a=js(o,e.Vc(i));a!=null&&(t[i]=a)})),{mapValue:{fields:t}}}function g0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ze||n instanceof Yn||n instanceof mn||n instanceof rt||n instanceof Us||n instanceof Jn)}function sm(n,e,t){if(!g0(t)||!eE(t)){const i=hh(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function sp(n,e,t){if((e=Et(e))instanceof Ql)return e._internalPath;if(typeof e=="string")return om(n,e);throw Zc("Field path arguments must be of type string or ",n,!1,void 0,t)}const GN=new RegExp("[~\\*/\\[\\]]");function om(n,e,t){if(e.search(GN)>=0)throw Zc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ql(...e.split("."))._internalPath}catch{throw Zc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zc(n,e,t,i,o){const a=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(a||c)&&(p+=" (found",a&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new se(W.INVALID_ARGUMENT,d+n+p)}function y0(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,t,i,o,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(am("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class QN extends v0{data(){return super.data()}}function am(n,e){return typeof e=="string"?om(n,e):e instanceof Ql?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lm{}class w0 extends lm{}function Pl(n,e,...t){let i=[];e instanceof lm&&i.push(e),i=i.concat(t),(function(a){const c=a.filter((p=>p instanceof Ph)).length,d=a.filter((p=>p instanceof Yl)).length;if(c>1||c>0&&d>0)throw new se(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class Yl extends w0{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Yl(e,t,i)}_apply(e){const t=this._parse(e);return E0(e._query,t),new Yi(e.firestore,e.converter,Gf(e._query,t))}_parse(e){const t=Rh(e.firestore);return(function(a,c,d,p,y,_,E){let T;if(y.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new se(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){v_(E,_);const B=[];for(const $ of E)B.push(y_(p,a,$));T={arrayValue:{values:B}}}else T=y_(p,a,E)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||v_(E,_),T=KN(d,c,E,_==="in"||_==="not-in");return ft.create(y,_,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Zo(n,e,t){const i=e,o=am("where",n);return Yl._create(o,i,t)}class Ph extends lm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ph(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:er.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,a){let c=o;const d=a.getFlattenedFilters();for(const p of d)E0(c,p),c=Gf(c,p)})(e._query,t),new Yi(e.firestore,e.converter,Gf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function y_(n,e,t){if(typeof(t=Et(t))=="string"){if(t==="")throw new se(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yE(e)&&t.indexOf("/")!==-1)throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ke.fromString(t));if(!ge.isDocumentKey(i))throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return bv(n,new ge(i))}if(t instanceof rt)return bv(n,t._key);throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hh(t)}.`)}function v_(n,e){if(!Array.isArray(n)||n.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function E0(n,e){const t=(function(o,a){for(const c of o)for(const d of c.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class T0{convertValue(e,t="none"){switch($i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Gi(e,((o,a)=>{i[o]=this.convertValue(a,t)})),i}convertVectorValue(e){var t,i,o;const a=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[qc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((c=>lt(c.doubleValue)));return new Jn(a)}convertGeoPoint(e){return new Yn(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=ph(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Al(e));default:return null}}convertTimestamp(e){const t=ji(e);return new ze(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ke.fromString(e);Ue(UE(i),9688,{name:e});const o=new Wo(i.get(1),i.get(3)),a=new ge(i.popFirst(5));return o.isEqual(t)||Zr(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class jo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mi extends v0{constructor(e,t,i,o,a,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(am("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Mi._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Mi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mi._jsonSchema={type:pt("string",Mi._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class _l extends Mi{data(e={}){return super.data(e)}}class Fi{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new jo(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new _l(this._firestore,this._userDataWriter,i.key,i,new jo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((d=>{const p=new _l(o._firestore,o._userDataWriter,d.doc.key,d.doc,new jo(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const p=new _l(o._firestore,o._userDataWriter,d.doc.key,d.doc,new jo(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,_=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),_=c.indexOf(d.doc.key)),{type:YN(d.type),doc:p,oldIndex:y,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ch.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),i.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function YN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(n){n=Qt(n,rt);const e=Qt(n.firestore,wr);return UN(Gl(e),n._key).then((t=>A0(e,n,t)))}Fi._jsonSchemaVersion="firestore/querySnapshot/1.0",Fi._jsonSchema={type:pt("string",Fi._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};class um extends T0{constructor(e){super(),this.firestore=e}convertBytes(e){return new mn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,t)}}function S0(n){n=Qt(n,Yi);const e=Qt(n.firestore,wr),t=Gl(e),i=new um(e);return _0(n._query),jN(t,n._query).then((o=>new Fi(e,i,n,o)))}function Ds(n,e,t){n=Qt(n,rt);const i=Qt(n.firestore,wr),o=I0(n.converter,e);return Jl(i,[f0(Rh(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,xn.none())])}function Bs(n,e,t,...i){n=Qt(n,rt);const o=Qt(n.firestore,wr),a=Rh(o);let c;return c=typeof(e=Et(e))=="string"||e instanceof Ql?WN(a,"updateDoc",n._key,e,t,i):HN(a,"updateDoc",n._key,e),Jl(o,[c.toMutation(n._key,xn.exists(!0))])}function JN(n){return Jl(Qt(n.firestore,wr),[new Vp(n._key,xn.none())])}function cm(n,e){const t=Qt(n.firestore,wr),i=zt(n),o=I0(n.converter,e);return Jl(t,[f0(Rh(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,xn.exists(!1))]).then((()=>i))}function kl(n,...e){var t,i,o;n=Et(n);let a={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||g_(e[c])||(a=e[c++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(g_(e[c])){const E=e[c];e[c]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[c+1]=(i=E.error)===null||i===void 0?void 0:i.bind(E),e[c+2]=(o=E.complete)===null||o===void 0?void 0:o.bind(E)}let p,y,_;if(n instanceof rt)y=Qt(n.firestore,wr),_=mh(n._key.path),p={next:E=>{e[c]&&e[c](A0(y,n,E))},error:e[c+1],complete:e[c+2]};else{const E=Qt(n,Yi);y=Qt(E.firestore,wr),_=E._query;const T=new um(y);p={next:N=>{e[c]&&e[c](new Fi(y,T,E,N))},error:e[c+1],complete:e[c+2]},_0(n._query)}return(function(T,N,B,$){const L=new tm($),K=new Xp(N,L,B);return T.asyncQueue.enqueueAndForget((async()=>Qp(await Xc(T),K))),()=>{L.Ou(),T.asyncQueue.enqueueAndForget((async()=>Yp(await Xc(T),K)))}})(Gl(y),_,d,p)}function Jl(n,e){return(function(i,o){const a=new Kr;return i.asyncQueue.enqueueAndForget((async()=>CN(await FN(i),o,a))),a.promise})(Gl(n),e)}function A0(n,e,t){const i=t.docs.get(e._key),o=new um(n);return new Mi(n,o,e._key,i,new jo(t.hasPendingWrites,t.fromCache),e.converter)}function hm(){return new nm("serverTimestamp")}function R0(...n){return new rm("arrayUnion",n)}function C0(...n){return new im("arrayRemove",n)}(function(e,t=!0){(function(o){oa=o})(ia),vr(new Xn("firestore",((i,{instanceIdentifier:o,options:a})=>{const c=i.getProvider("app").getImmediate(),d=new wr(new J1(i.getProvider("auth-internal")),new eP(c,i.getProvider("app-check-internal")),(function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new se(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wo(y.options.projectId,_)})(c,o),c);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),Nn(_v,wv,e),Nn(_v,wv,"esm2017")})();const XN=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:T0,Bytes:mn,CollectionReference:Gr,DocumentReference:rt,DocumentSnapshot:Mi,FieldPath:Ql,FieldValue:Us,Firestore:wr,FirestoreError:se,GeoPoint:Yn,Query:Yi,QueryCompositeFilterConstraint:Ph,QueryConstraint:w0,QueryDocumentSnapshot:_l,QueryFieldFilterConstraint:Yl,QuerySnapshot:Fi,SnapshotMetadata:jo,Timestamp:ze,VectorValue:Jn,_AutoId:ch,_ByteString:kt,_DatabaseId:Wo,_DocumentKey:ge,_EmptyAuthCredentialsProvider:Yw,_FieldPath:Pt,_cast:Qt,_logWarn:ei,_validateIsNotUsedTogether:Zw,addDoc:cm,arrayRemove:C0,arrayUnion:R0,collection:Hi,connectFirestoreEmulator:u0,deleteDoc:JN,doc:zt,ensureFirestoreConfigured:Gl,executeWrite:Jl,getDoc:ni,getDocs:S0,getFirestore:c0,onSnapshot:kl,query:Pl,serverTimestamp:hm,setDoc:Ds,updateDoc:Bs,where:Zo},Symbol.toStringTag,{value:"Module"})),P0="@firebase/installations",dm="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=1e4,N0=`w:${dm}`,x0="FIS_v2",ZN="https://firebaseinstallations.googleapis.com/v1",ex=3600*1e3,tx="installations",nx="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},bs=new Vs(tx,nx,rx);function D0(n){return n instanceof Ir&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0({projectId:n}){return`${ZN}/projects/${n}/installations`}function O0(n){return{token:n.token,requestStatus:2,expiresIn:sx(n.expiresIn),creationTime:Date.now()}}async function V0(n,e){const i=(await e.json()).error;return bs.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function L0({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ix(n,{refreshToken:e}){const t=L0(n);return t.append("Authorization",ox(e)),t}async function M0(n){const e=await n();return e.status>=500&&e.status<600?n():e}function sx(n){return Number(n.replace("s","000"))}function ox(n){return`${x0} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ax({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=b0(n),o=L0(n),a=e.getImmediate({optional:!0});if(a){const y=await a.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:x0,appId:n.appId,sdkVersion:N0},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await M0(()=>fetch(i,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:O0(y.authToken)}}else throw await V0("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=/^[cdef][\w-]{21}$/,op="";function cx(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=hx(n);return ux.test(t)?t:op}catch{return op}}function hx(n){return lx(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=new Map;function j0(n,e){const t=kh(n);B0(t,e),dx(t,e)}function B0(n,e){const t=U0.get(n);if(t)for(const i of t)i(e)}function dx(n,e){const t=fx();t&&t.postMessage({key:n,fid:e}),px()}let Cs=null;function fx(){return!Cs&&"BroadcastChannel"in self&&(Cs=new BroadcastChannel("[Firebase] FID Change"),Cs.onmessage=n=>{B0(n.data.key,n.data.fid)}),Cs}function px(){U0.size===0&&Cs&&(Cs.close(),Cs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="firebase-installations-database",gx=1,Os="firebase-installations-store";let Af=null;function fm(){return Af||(Af=oh(mx,gx,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Os)}}})),Af}async function eh(n,e){const t=kh(n),o=(await fm()).transaction(Os,"readwrite"),a=o.objectStore(Os),c=await a.get(t);return await a.put(e,t),await o.done,(!c||c.fid!==e.fid)&&j0(n,e.fid),e}async function $0(n){const e=kh(n),i=(await fm()).transaction(Os,"readwrite");await i.objectStore(Os).delete(e),await i.done}async function Nh(n,e){const t=kh(n),o=(await fm()).transaction(Os,"readwrite"),a=o.objectStore(Os),c=await a.get(t),d=e(c);return d===void 0?await a.delete(t):await a.put(d,t),await o.done,d&&(!c||c.fid!==d.fid)&&j0(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(n){let e;const t=await Nh(n.appConfig,i=>{const o=yx(i),a=vx(n,o);return e=a.registrationPromise,a.installationEntry});return t.fid===op?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function yx(n){const e=n||{fid:cx(),registrationStatus:0};return z0(e)}function vx(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(bs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=_x(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wx(n)}:{installationEntry:e}}async function _x(n,e){try{const t=await ax(n,e);return eh(n.appConfig,t)}catch(t){throw D0(t)&&t.customData.serverCode===409?await $0(n.appConfig):await eh(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function wx(n){let e=await __(n.appConfig);for(;e.registrationStatus===1;)await F0(100),e=await __(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await pm(n);return i||t}return e}function __(n){return Nh(n,e=>{if(!e)throw bs.create("installation-not-found");return z0(e)})}function z0(n){return Ex(n)?{fid:n.fid,registrationStatus:0}:n}function Ex(n){return n.registrationStatus===1&&n.registrationTime+k0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tx({appConfig:n,heartbeatServiceProvider:e},t){const i=Ix(n,t),o=ix(n,t),a=e.getImmediate({optional:!0});if(a){const y=await a.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:N0,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await M0(()=>fetch(i,d));if(p.ok){const y=await p.json();return O0(y)}else throw await V0("Generate Auth Token",p)}function Ix(n,{fid:e}){return`${b0(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(n,e=!1){let t;const i=await Nh(n.appConfig,a=>{if(!q0(a))throw bs.create("not-registered");const c=a.authToken;if(!e&&Rx(c))return a;if(c.requestStatus===1)return t=Sx(n,e),a;{if(!navigator.onLine)throw bs.create("app-offline");const d=Px(a);return t=Ax(n,d),d}});return t?await t:i.authToken}async function Sx(n,e){let t=await w_(n.appConfig);for(;t.authToken.requestStatus===1;)await F0(100),t=await w_(n.appConfig);const i=t.authToken;return i.requestStatus===0?mm(n,e):i}function w_(n){return Nh(n,e=>{if(!q0(e))throw bs.create("not-registered");const t=e.authToken;return kx(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ax(n,e){try{const t=await Tx(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await eh(n.appConfig,i),t}catch(t){if(D0(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await $0(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await eh(n.appConfig,i)}throw t}}function q0(n){return n!==void 0&&n.registrationStatus===2}function Rx(n){return n.requestStatus===2&&!Cx(n)}function Cx(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+ex}function Px(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function kx(n){return n.requestStatus===1&&n.requestTime+k0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nx(n){const e=n,{installationEntry:t,registrationPromise:i}=await pm(e);return i?i.catch(console.error):mm(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(n,e=!1){const t=n;return await Dx(t),(await mm(t,e)).token}async function Dx(n){const{registrationPromise:e}=await pm(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(n){if(!n||!n.options)throw Rf("App Configuration");if(!n.name)throw Rf("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Rf(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Rf(n){return bs.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="installations",Ox="installations-internal",Vx=n=>{const e=n.getProvider("app").getImmediate(),t=bx(e),i=Ml(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Lx=n=>{const e=n.getProvider("app").getImmediate(),t=Ml(e,H0).getImmediate();return{getId:()=>Nx(t),getToken:o=>xx(t,o)}};function Mx(){vr(new Xn(H0,Vx,"PUBLIC")),vr(new Xn(Ox,Lx,"PRIVATE"))}Mx();Nn(P0,dm);Nn(P0,dm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx="/firebase-messaging-sw.js",Ux="/firebase-cloud-messaging-push-scope",W0="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",jx="https://fcmregistrations.googleapis.com/v1",K0="google.c.a.c_id",Bx="google.c.a.c_l",$x="google.c.a.ts",zx="google.c.a.e",E_=1e4;var T_;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(T_||(T_={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Nl;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Nl||(Nl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function qx(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let a=0;a<i.length;++a)o[a]=i.charCodeAt(a);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="fcm_token_details_db",Hx=5,I_="fcm_token_object_Store";async function Wx(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(Cf))return null;let e=null;return(await oh(Cf,Hx,{upgrade:async(i,o,a,c)=>{var d;if(o<2||!i.objectStoreNames.contains(I_))return;const p=c.objectStore(I_),y=await p.index("fcmSenderId").get(n);if(await p.clear(),!!y){if(o===2){const _=y;if(!_.auth||!_.p256dh||!_.endpoint)return;e={token:_.fcmToken,createTime:(d=_.createTime)!==null&&d!==void 0?d:Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:$r(_.vapidKey)}}}else if(o===3){const _=y;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:$r(_.auth),p256dh:$r(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:$r(_.vapidKey)}}}else if(o===4){const _=y;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:$r(_.auth),p256dh:$r(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:$r(_.vapidKey)}}}}}})).close(),await gf(Cf),await gf("fcm_vapid_details_db"),await gf("undefined"),Kx(e)?e:null}function Kx(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx="firebase-messaging-database",Qx=1,xl="firebase-messaging-store";let Pf=null;function G0(){return Pf||(Pf=oh(Gx,Qx,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(xl)}}})),Pf}async function Yx(n){const e=Q0(n),i=await(await G0()).transaction(xl).objectStore(xl).get(e);if(i)return i;{const o=await Wx(n.appConfig.senderId);if(o)return await gm(n,o),o}}async function gm(n,e){const t=Q0(n),o=(await G0()).transaction(xl,"readwrite");return await o.objectStore(xl).put(e,t),await o.done,e}function Q0({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},yn=new Vs("messaging","Messaging",Jx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xx(n,e){const t=await vm(n),i=Y0(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let a;try{a=await(await fetch(ym(n.appConfig),o)).json()}catch(c){throw yn.create("token-subscribe-failed",{errorInfo:c==null?void 0:c.toString()})}if(a.error){const c=a.error.message;throw yn.create("token-subscribe-failed",{errorInfo:c})}if(!a.token)throw yn.create("token-subscribe-no-token");return a.token}async function Zx(n,e){const t=await vm(n),i=Y0(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let a;try{a=await(await fetch(`${ym(n.appConfig)}/${e.token}`,o)).json()}catch(c){throw yn.create("token-update-failed",{errorInfo:c==null?void 0:c.toString()})}if(a.error){const c=a.error.message;throw yn.create("token-update-failed",{errorInfo:c})}if(!a.token)throw yn.create("token-update-no-token");return a.token}async function eD(n,e){const i={method:"DELETE",headers:await vm(n)};try{const a=await(await fetch(`${ym(n.appConfig)}/${e}`,i)).json();if(a.error){const c=a.error.message;throw yn.create("token-unsubscribe-failed",{errorInfo:c})}}catch(o){throw yn.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function ym({projectId:n}){return`${jx}/projects/${n}/registrations`}async function vm({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function Y0({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==W0&&(o.web.applicationPubKey=i),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=10080*60*1e3;async function nD(n){const e=await iD(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:$r(e.getKey("auth")),p256dh:$r(e.getKey("p256dh"))},i=await Yx(n.firebaseDependencies);if(i){if(sD(i.subscriptionOptions,t))return Date.now()>=i.createTime+tD?rD(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await eD(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return S_(n.firebaseDependencies,t)}else return S_(n.firebaseDependencies,t)}async function rD(n,e){try{const t=await Zx(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await gm(n.firebaseDependencies,i),t}catch(t){throw t}}async function S_(n,e){const i={token:await Xx(n,e),createTime:Date.now(),subscriptionOptions:e};return await gm(n,i),i.token}async function iD(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:qx(e)})}function sD(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,a=e.p256dh===n.p256dh;return t&&i&&o&&a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return oD(e,n),aD(e,n),lD(e,n),e}function oD(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const a=e.notification.icon;a&&(n.notification.icon=a)}function aD(n,e){e.data&&(n.data=e.data)}function lD(n,e){var t,i,o,a,c;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const d=(o=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(a=e.notification)===null||a===void 0?void 0:a.click_action;d&&(n.fcmOptions.link=d);const p=(c=e.fcmOptions)===null||c===void 0?void 0:c.analytics_label;p&&(n.fcmOptions.analyticsLabel=p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(n){return typeof n=="object"&&!!n&&K0 in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(n){if(!n||!n.options)throw kf("App Configuration Object");if(!n.name)throw kf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw kf(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function kf(n){return yn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=cD(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(n){try{n.swRegistration=await navigator.serviceWorker.register(Fx,{scope:Ux}),n.swRegistration.update().catch(()=>{}),await fD(n.swRegistration)}catch(e){throw yn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function fD(n){return new Promise((e,t)=>{const i=setTimeout(()=>t(new Error(`Service worker not registered after ${E_} ms`)),E_),o=n.installing||n.waiting;n.active?(clearTimeout(i),e()):o?o.onstatechange=a=>{var c;((c=a.target)===null||c===void 0?void 0:c.state)==="activated"&&(o.onstatechange=null,clearTimeout(i),e())}:(clearTimeout(i),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(n,e){if(!e&&!n.swRegistration&&await dD(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw yn.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mD(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=W0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(n,e){if(!navigator)throw yn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw yn.create("permission-blocked");return await mD(n,e==null?void 0:e.vapidKey),await pD(n,e==null?void 0:e.serviceWorkerRegistration),nD(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(n,e,t){const i=vD(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[K0],message_name:t[Bx],message_time:t[$x],message_device_time:Math.floor(Date.now()/1e3)})}function vD(n){switch(n){case Nl.NOTIFICATION_CLICKED:return"notification_open";case Nl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _D(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Nl.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(A_(t)):n.onMessageHandler.next(A_(t)));const i=t.data;uD(i)&&i[zx]==="1"&&await yD(n,t.messageType,i)}const R_="@firebase/messaging",C_="0.12.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=n=>{const e=new hD(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>_D(e,t)),e},ED=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>gD(e,i)}};function TD(){vr(new Xn("messaging",wD,"PUBLIC")),vr(new Xn("messaging-internal",ED,"PRIVATE")),Nn(R_,C_),Nn(R_,C_,"esm2017")}TD();const ID={apiKey:"AIzaSyAeNp0heXpZi_jpE9T3iyrAqSN5MoDPRQI",authDomain:"cartalk-app.firebaseapp.com",projectId:"cartalk-app",storageBucket:"cartalk-app.firebasestorage.app",messagingSenderId:"840131303273",appId:"1:840131303273:web:e2b43fbfcecb56e48c0ff8"},J0=iw(ID),xh=W1(J0),ut=c0(J0),SD=(n,e)=>NC(xh,n,e),AD=(n,e)=>xC(xh,n,e),RD=()=>VC(xh),CD=n=>OC(xh,n),X0=V.createContext({user:null,loading:!0}),PD=({children:n})=>{const[e,t]=V.useState(null),[i,o]=V.useState(!0);return V.useEffect(()=>CD(c=>{t(c),o(!1)}),[]),P.jsx(X0.Provider,{value:{user:e,loading:i},children:n})},ri=()=>V.useContext(X0),kD=()=>{const n=Tr(),[e,t]=V.useState(""),[i,o]=V.useState(""),[a,c]=V.useState(""),[d,p]=V.useState(!1),y=async _=>{_.preventDefault(),c(""),p(!0);try{await AD(e,i),n("/inbox")}catch(E){c(E instanceof Error?E.message:"Sign-in failed")}finally{p(!1)}};return P.jsxs("div",{className:"page auth-page",children:[P.jsx("h1",{className:"page-title",children:"Car Talk"}),P.jsx("p",{className:"auth-subtitle",children:"Message drivers, anonymously."}),P.jsxs("form",{onSubmit:y,children:[P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"email",children:"Email"}),P.jsx("input",{id:"email",type:"email",value:e,onChange:_=>t(_.target.value),placeholder:"you@example.com",autoComplete:"email",required:!0})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"password",children:"Password"}),P.jsx("input",{id:"password",type:"password",value:i,onChange:_=>o(_.target.value),placeholder:"••••••••",autoComplete:"current-password",required:!0})]}),a&&P.jsx("p",{className:"error-text",role:"alert",children:a}),P.jsx("button",{className:"btn-primary",type:"submit",disabled:d||!e||!i,children:d?"Signing in…":"Sign In"})]}),P.jsxs("p",{className:"auth-link",children:["Don't have an account? ",P.jsx(Vl,{to:"/signup",children:"Sign Up"})]})]})},ND="modulepreload",xD=function(n){return"/car-talk-web/"+n},P_={},DD=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let c=function(y){return Promise.all(y.map(_=>Promise.resolve(_).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=c(t.map(y=>{if(y=xD(y),y in P_)return;P_[y]=!0;const _=y.endsWith(".css"),E=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${E}`))return;const T=document.createElement("link");if(T.rel=_?"stylesheet":ND,_||(T.as="script"),T.crossOrigin="",T.href=y,p&&T.setAttribute("nonce",p),document.head.appendChild(T),_)return new Promise((N,B)=>{T.addEventListener("load",N),T.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${y}`)))})}))}function a(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return o.then(c=>{for(const d of c||[])d.status==="rejected"&&a(d.reason);return e().catch(a)})};var Dl=(n=>(n.Pending="pending",n.Accepted="accepted",n.Declined="declined",n))(Dl||{});const ap=100,bD=[{name:"White",hex:"#F5F5F5"},{name:"Black",hex:"#1A1A1A"},{name:"Silver",hex:"#C0C0C0"},{name:"Grey",hex:"#808080"},{name:"Red",hex:"#D32F2F"},{name:"Blue",hex:"#1565C0"},{name:"Green",hex:"#2E7D32"},{name:"Yellow",hex:"#F9A825"},{name:"Orange",hex:"#E65100"},{name:"Brown",hex:"#4E342E"},{name:"Beige",hex:"#F5F5DC"},{name:"Gold",hex:"#FFC107"}],Z0=200,eT=500,k_=5,th=3,OD=30,_m=async n=>{const e=await ni(zt(ut,"users",n));return e.exists()?{uid:e.id,...e.data()}:null},VD=async(n,e)=>{const t=zt(ut,"users",n);(await ni(t)).exists()?await Bs(t,{...e}):await Ds(t,{...e,vehicles:[]})},LD=async(n,e)=>{const t=zt(ut,"users",n),i=await ni(t);if((i.exists()?i.data().vehicles??[]:[]).length>=th)throw new Error(`Maximum of ${th} vehicles allowed`);const a=e.licensePlate.toUpperCase().replace(/\s/g,""),c={...e,licensePlate:a};i.exists()?await Bs(t,{vehicles:R0(c)}):await Ds(t,{uid:n,vehicles:[c]}),await Ds(zt(ut,"vehicleLookup",a),{userId:n,vehicleId:e.id,make:e.make,model:e.model,color:e.color,licensePlate:a})},MD=async(n,e)=>{const t=zt(ut,"users",n);await Bs(t,{vehicles:C0(e)});const i=e.licensePlate.toUpperCase().replace(/\s/g,""),{deleteDoc:o}=await DD(async()=>{const{deleteDoc:a}=await Promise.resolve().then(()=>XN);return{deleteDoc:a}},[]);await o(zt(ut,"vehicleLookup",i))},FD=async n=>{const e=n.toUpperCase().replace(/\s/g,""),t=await ni(zt(ut,"vehicleLookup",e));if(!t.exists())return null;const i=t.data();return{uid:i.userId,vehicles:[{id:i.vehicleId,licensePlate:i.licensePlate,make:i.make,model:i.model,color:i.color}]}},UD=()=>{const n=Tr(),[e,t]=V.useState(""),[i,o]=V.useState(""),[a,c]=V.useState(""),[d,p]=V.useState(""),[y,_]=V.useState(!1),E=async T=>{T.preventDefault(),p(""),_(!0);try{const N=await SD(e,i);await VD(N.user.uid,{displayName:a,email:e}),n("/add-vehicle")}catch(N){p(N instanceof Error?N.message:"Registration failed")}finally{_(!1)}};return P.jsxs("div",{className:"page auth-page",children:[P.jsx("h1",{className:"page-title",children:"Create Account"}),P.jsxs("form",{onSubmit:E,children:[P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"name",children:"Display Name"}),P.jsx("input",{id:"name",type:"text",value:a,onChange:T=>c(T.target.value),placeholder:"Road Warrior",required:!0})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"email",children:"Email"}),P.jsx("input",{id:"email",type:"email",value:e,onChange:T=>t(T.target.value),placeholder:"you@example.com",autoComplete:"email",required:!0})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"password",children:"Password"}),P.jsx("input",{id:"password",type:"password",value:i,onChange:T=>o(T.target.value),placeholder:"Min. 6 characters",autoComplete:"new-password",minLength:6,required:!0})]}),d&&P.jsx("p",{className:"error-text",role:"alert",children:d}),P.jsx("button",{className:"btn-primary",type:"submit",disabled:y||!e||!i||!a,children:y?"Creating account…":"Create Account"})]}),P.jsxs("p",{className:"auth-link",children:["Already have an account? ",P.jsx(Vl,{to:"/login",children:"Sign In"})]})]})},jD="https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json",BD=()=>{const{user:n}=ri(),e=Tr(),[t,i]=V.useState(""),[o,a]=V.useState(""),[c,d]=V.useState(""),[p,y]=V.useState(""),[_,E]=V.useState([]),[T,N]=V.useState([]),[B,$]=V.useState(""),[L,K]=V.useState(!1),[Z,ne]=V.useState(0);V.useEffect(()=>{fetch(jD).then(te=>te.json()).then(te=>E(te.Results.map(de=>de.MakeName).sort())).catch(()=>{})},[]),V.useEffect(()=>{n&&_m(n.uid).then(te=>{var de;return ne(((de=te==null?void 0:te.vehicles)==null?void 0:de.length)??0)})},[n]),V.useEffect(()=>{if(!o){N([]);return}fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${encodeURIComponent(o)}?format=json`).then(te=>te.json()).then(te=>N(te.Results.map(de=>de.Model_Name).sort())).catch(()=>{})},[o]);const ae=async te=>{if(te.preventDefault(),!!n){$(""),K(!0);try{const de={id:`${n.uid}_${Date.now()}`,licensePlate:t,make:o,model:c,color:p};await LD(n.uid,de),e("/profile")}catch(de){$(de instanceof Error?de.message:"Failed to add vehicle")}finally{K(!1)}}};return Z>=th?P.jsxs("div",{className:"page",children:[P.jsx("h1",{className:"page-title",children:"Add Vehicle"}),P.jsxs("p",{className:"error-text",children:["You have reached the maximum of ",th," vehicles."]}),P.jsx("button",{className:"btn-secondary",onClick:()=>e("/profile"),children:"Back to Profile"})]}):P.jsxs("div",{className:"page",children:[P.jsx("h1",{className:"page-title",children:"Add Vehicle"}),P.jsxs("form",{onSubmit:ae,children:[P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"plate",children:"License Plate"}),P.jsx("input",{id:"plate",type:"text",value:t,onChange:te=>i(te.target.value.toUpperCase()),placeholder:"ABC-1234",required:!0})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"make",children:"Make"}),P.jsxs("select",{id:"make",value:o,onChange:te=>a(te.target.value),required:!0,children:[P.jsx("option",{value:"",children:"Select make…"}),_.map(te=>P.jsx("option",{value:te,children:te},te))]})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"model",children:"Model"}),P.jsxs("select",{id:"model",value:c,onChange:te=>d(te.target.value),required:!0,disabled:!o,children:[P.jsx("option",{value:"",children:"Select model…"}),T.map(te=>P.jsx("option",{value:te,children:te},te))]})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"color",children:"Color"}),P.jsx("select",{id:"color",value:p,onChange:te=>y(te.target.value),children:bD.map(te=>P.jsx("option",{value:te.name,children:te.name},te.name))})]}),B&&P.jsx("p",{className:"error-text",role:"alert",children:B}),P.jsx("button",{className:"btn-primary",type:"submit",disabled:L||!t||!o||!c,children:L?"Adding…":"Add Vehicle"})]})]})},$D=async(n,e,t,i,o)=>{if(o.length>ap)throw new Error(`Intro exceeds ${ap} characters`);await cm(Hi(ut,"friendRequests"),{requesterId:n,requesterVehicleId:e,recipientUserId:t,recipientVehicleId:i,message:o,status:Dl.Pending,createdAt:hm()})},zD=async(n,e,t)=>{const i=zt(ut,"friendRequests",n),o=await ni(i);if(!o.exists())throw new Error("Friend request not found");const a=o.data(),c=e?Dl.Accepted:Dl.Declined;if(await Bs(i,{status:c}),e){const d={userId:a.requesterId,vehicleId:a.requesterVehicleId,nickname:null,since:new Date().toISOString()},p={userId:a.recipientUserId,vehicleId:a.recipientVehicleId,nickname:null,since:new Date().toISOString()};await Ds(zt(ut,"users",a.recipientUserId,"friends",a.requesterId),d),await Ds(zt(ut,"users",a.requesterId,"friends",a.recipientUserId),p)}},qD=(n,e)=>{const t=Pl(Hi(ut,"friendRequests"),Zo("recipientUserId","==",n),Zo("status","==",Dl.Pending));return kl(t,i=>{const o=i.docs.map(a=>({id:a.id,...a.data()}));e(o)})},HD=async n=>(await S0(Hi(ut,"users",n,"friends"))).docs.map(t=>t.data()),WD=async(n,e)=>(await ni(zt(ut,"users",n,"friends",e))).exists(),KD={White:"#FFFFFF",Black:"#1A1A1A",Silver:"#C0C0C0",Grey:"#808080",Red:"#CC0000",Blue:"#0047AB",Green:"#2D6A2D",Yellow:"#FFD700",Orange:"#FF6600",Brown:"#7B3F00",Beige:"#F5F0DC",Gold:"#CFB53B"},tT=({color:n,size:e=80,className:t})=>{const i=KD[n]??n,o=n==="White"||n==="Beige"?"#888":"#222",a=e,c=e*.5;return P.jsxs("svg",{width:a,height:c,viewBox:"0 0 80 40",xmlns:"http://www.w3.org/2000/svg",className:t,"aria-label":`${n} vehicle`,role:"img",children:[P.jsx("rect",{x:"4",y:"20",width:"72",height:"16",rx:"4",fill:i,stroke:o,strokeWidth:"1.5"}),P.jsx("path",{d:"M18 20 L24 8 L56 8 L62 20 Z",fill:i,stroke:o,strokeWidth:"1.5"}),P.jsx("path",{d:"M27 19 L30 9 L50 9 L53 19 Z",fill:"#AAD4F0",opacity:"0.7"}),P.jsx("path",{d:"M18 19 L23 9 L29 9 L24 19 Z",fill:"#AAD4F0",opacity:"0.5"}),P.jsx("circle",{cx:"60",cy:"36",r:"6",fill:"#333"}),P.jsx("circle",{cx:"60",cy:"36",r:"3",fill:"#999"}),P.jsx("circle",{cx:"22",cy:"36",r:"6",fill:"#333"}),P.jsx("circle",{cx:"22",cy:"36",r:"3",fill:"#999"}),P.jsx("rect",{x:"70",y:"24",width:"5",height:"4",rx:"1",fill:"#FFFAAA"}),P.jsx("rect",{x:"5",y:"24",width:"5",height:"4",rx:"1",fill:"#FF4444"})]})},GD=()=>{var B;const{user:n}=ri(),e=Tr(),[t,i]=V.useState(""),[o,a]=V.useState(void 0),[c,d]=V.useState(!1),[p,y]=V.useState(!1),[_,E]=V.useState(""),T=async $=>{if($.preventDefault(),!!t.trim()){y(!0),E(""),a(void 0);try{const L=await FD(t.trim());if(a(L),L&&n){const K=await WD(n.uid,L.uid);d(K)}}catch{E("Search failed. Please try again.")}finally{y(!1)}}},N=(B=o==null?void 0:o.vehicles)==null?void 0:B.find($=>$.licensePlate===t.toUpperCase().replace(/\s/g,""));return P.jsxs("div",{className:"page",children:[P.jsx("h1",{className:"page-title",children:"Search by Plate"}),P.jsxs("form",{onSubmit:T,children:[P.jsxs("div",{className:"form-group",children:[P.jsx("label",{htmlFor:"search-plate",children:"License Plate"}),P.jsx("input",{id:"search-plate",type:"text",value:t,onChange:$=>i($.target.value.toUpperCase()),placeholder:"ABC-1234",autoCapitalize:"characters","data-testid":"search-input"})]}),P.jsx("button",{className:"btn-primary",type:"submit",disabled:p||!t.trim(),"data-testid":"search-btn",children:p?"Searching...":"Search"})]}),_&&P.jsx("p",{className:"error-text",role:"alert",children:_}),o===null&&P.jsx("div",{className:"search-empty card","data-testid":"search-empty",children:P.jsxs("p",{children:["No vehicle found for plate ",P.jsx("strong",{children:t}),"."]})}),o&&N&&P.jsxs("div",{className:"card search-result","data-testid":"search-result",children:[P.jsx(tT,{color:N.color,size:100}),P.jsxs("div",{className:"search-result-info",children:[P.jsx("p",{className:"search-plate","data-testid":"search-plate-text",children:N.licensePlate}),P.jsxs("p",{className:"search-vehicle","data-testid":"search-vehicle-text",children:[N.make," ",N.model]}),P.jsx("p",{className:"search-color",children:N.color})]}),P.jsxs("div",{className:"search-actions",children:[P.jsx("button",{className:"btn-primary","data-testid":"search-send-btn",onClick:()=>e(`/compose?recipientId=${o.uid}&vehicleId=${N.id}&plate=${N.licensePlate}&isFriend=${c}`),children:"Send Message"}),!c&&P.jsx("button",{className:"btn-secondary","data-testid":"search-friend-btn",onClick:()=>e(`/compose?recipientId=${o.uid}&vehicleId=${N.id}&plate=${N.licensePlate}&friendRequest=true`),children:"Add as Friend"})]})]})]})};function QD(n,e){return[n,e].sort().join("_")}const YD=new Set(["fuck","shit","cunt","nigger","nigga","faggot","fag","bitch","ass","asshole","bastard","cock","dick","pussy","slut","whore","twat","wanker","bollocks","motherfucker","mf","stfu","wtf"]);function JD(n){const e=n.toLowerCase();return Array.from(YD).some(t=>new RegExp(`\\b${t}\\b`,"i").test(e))}const XD=async(n,e,t,i,o,a)=>{const c=a.isFriendMessage??!1,d=c?eT:Z0;if(a.content.length>d)throw new Error(`Message exceeds ${d} characters`);if(JD(a.content))throw new Error("Message contains inappropriate language");c||await ZD(n,e);const p=QD(e,o),y=ze.fromDate(new Date(Date.now()+OD*24*60*60*1e3));await cm(Hi(ut,"messages"),{senderId:n,senderVehicleId:e,senderVehicleDisplay:t,recipientUserId:i,recipientVehicleId:o,threadId:p,content:a.content,isFriendMessage:c,isAnonymous:a.isAnonymous,isRead:!1,timestamp:hm(),expiresAt:y}),c||await eb(n,e)},ZD=async(n,e)=>{const t=new Date().toISOString().split("T")[0],i=zt(ut,"messageCounts",`${n}_${e}_${t}`),o=await ni(i);if(o.exists()&&(o.data().count??0)>=k_)throw new Error(`Daily anonymous message limit of ${k_} reached`)},eb=async(n,e)=>{const t=new Date().toISOString().split("T")[0],i=zt(ut,"messageCounts",`${n}_${e}_${t}`),o=await ni(i);o.exists()?await Bs(i,{count:(o.data().count??0)+1}):await Ds(i,{userId:n,vehicleId:e,date:t,count:1})},tb=(n,e)=>{const t=Pl(Hi(ut,"messages"),Zo("recipientUserId","==",n));return kl(t,i=>{const o=new Date,a=i.docs.map(c=>({id:c.id,...c.data()})).filter(c=>!c.expiresAt||c.expiresAt.toDate()>o).sort((c,d)=>{var _,E,T,N,B,$;const p=((T=(E=(_=c.timestamp)==null?void 0:_.toDate)==null?void 0:E.call(_))==null?void 0:T.getTime())??0;return((($=(B=(N=d.timestamp)==null?void 0:N.toDate)==null?void 0:B.call(N))==null?void 0:$.getTime())??0)-p});e(a)})},nb=(n,e,t)=>{let i=[],o=[];const a=()=>{const p=[...i,...o].sort((y,_)=>{var N,B,$,L,K,Z;const E=(($=(B=(N=y.timestamp)==null?void 0:N.toDate)==null?void 0:B.call(N))==null?void 0:$.getTime())??0,T=((Z=(K=(L=_.timestamp)==null?void 0:L.toDate)==null?void 0:K.call(L))==null?void 0:Z.getTime())??0;return E-T});t(p)},c=kl(Pl(Hi(ut,"messages"),Zo("recipientUserId","==",e)),p=>{i=p.docs.map(y=>({id:y.id,...y.data()})).filter(y=>y.threadId===n),a()}),d=kl(Pl(Hi(ut,"messages"),Zo("senderId","==",e)),p=>{o=p.docs.map(y=>({id:y.id,...y.data()})).filter(y=>y.threadId===n),a()});return()=>{c(),d()}},nT=async n=>{await Bs(zt(ut,"messages",n),{isRead:!0})},rb=n=>{const[e,t]=V.useState([]),[i,o]=V.useState(!0);return V.useEffect(()=>{if(!n){o(!1);return}return o(!0),tb(n,d=>{t(d),o(!1)})},[n]),{messages:e,loading:i,markAsRead:async c=>{await nT(c)}}},ib=({msg:n})=>{var e;return P.jsxs(Vl,{to:`/thread/${n.threadId}`,className:`card message-row ${n.isRead?"":"unread"}`,"data-testid":"message-row",children:[P.jsxs("div",{className:"message-row-header",children:[P.jsx("span",{className:"message-plate",children:n.isAnonymous?"Anonymous":n.senderVehicleDisplay||n.senderVehicleId}),P.jsxs("div",{className:"message-row-meta",children:[n.isFriendMessage&&P.jsx("span",{className:"badge-friend",children:"Friend"}),n.isAnonymous&&P.jsx("span",{className:"badge-anon",children:"Anon"}),P.jsx("span",{className:"message-time",children:(e=n.timestamp)!=null&&e.toDate?new Date(n.timestamp.toDate()).toLocaleDateString():""})]})]}),P.jsxs("p",{className:"message-preview",children:[n.content.slice(0,80),n.content.length>80?"…":""]}),!n.isRead&&P.jsx("span",{className:"unread-dot","aria-label":"Unread"})]})},sb=()=>{const{user:n}=ri(),{messages:e,loading:t}=rb((n==null?void 0:n.uid)??null),[i,o]=V.useState("all"),a=e.filter(d=>i==="anonymous"?d.isAnonymous:i==="friends"?d.isFriendMessage:!0),c=e.filter(d=>!d.isRead).length;return t?P.jsx("div",{className:"loading-screen",children:"Loading inbox..."}):P.jsxs("div",{className:"page",children:[P.jsx("div",{className:"page-header",children:P.jsxs("h1",{className:"page-title",children:["Inbox ",c>0&&P.jsx("span",{className:"badge-count",children:c})]})}),P.jsx("div",{className:"filter-tabs",role:"tablist","aria-label":"Inbox filter",children:["all","anonymous","friends"].map(d=>P.jsx("button",{role:"tab","aria-selected":i===d,className:`filter-tab ${i===d?"active":""}`,onClick:()=>o(d),"data-testid":`tab-${d}`,children:d.charAt(0).toUpperCase()+d.slice(1)},d))}),a.length===0?P.jsxs("div",{className:"card empty-state",children:[P.jsxs("p",{children:["No ",i==="all"?"":i+" ","messages yet."]}),i==="all"&&P.jsx("p",{className:"empty-hint",children:"Search a licence plate to start a conversation."})]}):P.jsx("div",{className:"message-list",children:a.map(d=>P.jsx(ib,{msg:d},d.id))})]})},ob=()=>{const{threadId:n}=eS(),{user:e}=ri(),t=Tr(),[i,o]=V.useState([]),a=V.useRef(null),c=i.find(T=>T.senderId!==(e==null?void 0:e.uid)),d=(c==null?void 0:c.senderId)??"",p=(c==null?void 0:c.senderVehicleId)??"",y=(c==null?void 0:c.senderVehicleDisplay)??(c==null?void 0:c.senderVehicleId)??"",_=i.some(T=>T.isFriendMessage);V.useEffect(()=>!n||!(e!=null&&e.uid)?void 0:nb(n,e.uid,N=>{o(N),N.filter(B=>!B.isRead&&B.recipientUserId===(e==null?void 0:e.uid)).forEach(B=>nT(B.id))}),[n,e==null?void 0:e.uid]),V.useEffect(()=>{var T;(T=a.current)==null||T.scrollIntoView({behavior:"smooth"})},[i]);const E=()=>{const T=new URLSearchParams({recipientId:d,vehicleId:p,plate:y,..._?{isFriend:"true"}:{}});t(`/compose?${T.toString()}`)};return P.jsxs("div",{className:"thread-page",children:[P.jsxs("div",{className:"thread-header",children:[P.jsx("button",{className:"btn-back",onClick:()=>t("/inbox"),"aria-label":"Back to inbox",children:"←"}),P.jsx("span",{className:"thread-title",children:y||"Thread"})]}),P.jsxs("div",{className:"thread-messages",children:[i.map(T=>{var N;return P.jsxs("div",{className:`bubble ${T.senderId===(e==null?void 0:e.uid)?"bubble-mine":"bubble-theirs"}`,"data-testid":T.senderId===(e==null?void 0:e.uid)?"bubble-mine":"bubble-theirs",children:[!T.isAnonymous&&T.senderId!==(e==null?void 0:e.uid)&&P.jsx("span",{className:"bubble-vehicle",children:T.senderVehicleDisplay}),P.jsx("p",{className:"bubble-content",children:T.content}),P.jsx("span",{className:"bubble-time",children:(N=T.timestamp)!=null&&N.toDate?new Date(T.timestamp.toDate()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""})]},T.id)}),P.jsx("div",{ref:a})]}),c&&P.jsx("div",{className:"thread-footer",children:P.jsx("button",{className:"btn-primary",onClick:E,"data-testid":"reply-btn",children:"Reply"})})]})},ab=()=>{const{user:n}=ri(),e=Tr(),[t]=HS(),i=t.get("recipientId")??"",o=t.get("vehicleId")??"",a=t.get("plate")??"",c=t.get("isFriend")==="true",d=t.get("friendRequest")==="true",[p,y]=V.useState(""),[_,E]=V.useState(!c),[T,N]=V.useState(null),[B,$]=V.useState(""),[L,K]=V.useState(!1),Z=d?ap:c?eT:Z0;V.useEffect(()=>{n&&_m(n.uid).then(ae=>{var te;(te=ae==null?void 0:ae.vehicles)!=null&&te.length&&N(ae.vehicles[0])})},[n]);const ne=async ae=>{if(ae.preventDefault(),!(!n||!T)){$(""),K(!0);try{const te=`${T.make} ${T.model} (${T.color})`;if(d)await $D(n.uid,T.id,i,o,p);else{const de={content:p,isFriendMessage:c,isAnonymous:_};await XD(n.uid,T.id,te,i,o,de)}e("/inbox")}catch(te){$(te instanceof Error?te.message:"Failed to send")}finally{K(!1)}}};return P.jsxs("div",{className:"page",children:[P.jsx("h1",{className:"page-title",children:d?"Friend Request":`Message to ${a}`}),!T&&P.jsxs("div",{className:"card empty-state",children:[P.jsx("p",{children:"You need to add a vehicle before messaging."}),P.jsx("a",{className:"btn-secondary",href:"/car-talk-web/add-vehicle",children:"Add Vehicle"})]}),P.jsxs("form",{onSubmit:ne,children:[P.jsxs("div",{className:"form-group",children:[P.jsxs("label",{htmlFor:"content",children:[d?"Intro message":"Message"," (",p.length,"/",Z,")"]}),P.jsx("textarea",{id:"content",rows:4,value:p,onChange:ae=>y(ae.target.value.slice(0,Z)),placeholder:d?"Hi, we share the highway... (100 chars)":_?"Say something... (anonymous - recipient cannot see your identity)":"Say something... (recipient can see your vehicle make/model)"})]}),!d&&!c&&P.jsxs("div",{className:"form-group checkbox-group",children:[P.jsxs("label",{className:"checkbox-label","data-testid":"anon-toggle",children:[P.jsx("input",{type:"checkbox",checked:_,onChange:ae=>E(ae.target.checked),"data-testid":"anon-checkbox"}),P.jsx("span",{className:"checkbox-text",children:"Send anonymously"})]}),P.jsx("p",{className:"checkbox-hint",children:_?"Recipient cannot see your vehicle or identity":"Recipient can see your vehicle: "+(T?`${T.make} ${T.model}`:"")})]}),B&&P.jsx("p",{className:"error-text",role:"alert",children:B}),P.jsx("button",{className:"btn-primary",type:"submit",disabled:L||!p.trim()||!T,"data-testid":"send-btn",children:L?"Sending...":d?"Send Friend Request":"Send Message"})]})]})},lb=()=>{var y;const{user:n}=ri(),e=Tr(),[t,i]=V.useState(null),[o,a]=V.useState(!0),c=async()=>{if(!n)return;a(!0);const _=await _m(n.uid);i(_),a(!1)};V.useEffect(()=>{c()},[n]);const d=async _=>{n&&confirm(`Remove ${_.licensePlate}?`)&&(await MD(n.uid,_),await c())},p=async()=>{await RD(),e("/login")};return o?P.jsx("div",{className:"loading-screen",children:"Loading…"}):P.jsxs("div",{className:"page",children:[P.jsx("h1",{className:"page-title",children:"Profile"}),P.jsxs("div",{className:"card profile-header",children:[P.jsx("p",{className:"profile-name",children:(t==null?void 0:t.displayName)??(n==null?void 0:n.email)}),P.jsx("p",{className:"profile-email",children:n==null?void 0:n.email})]}),P.jsx("h2",{className:"section-title",children:"My Vehicles"}),((t==null?void 0:t.vehicles)??[]).map(_=>P.jsxs("div",{className:"card vehicle-card",children:[P.jsx(tT,{color:_.color,size:80}),P.jsxs("div",{className:"vehicle-info",children:[P.jsx("p",{className:"vehicle-plate",children:_.licensePlate}),P.jsxs("p",{className:"vehicle-detail",children:[_.make," ",_.model," · ",_.color]})]}),P.jsx("button",{className:"btn-danger",onClick:()=>d(_),children:"Remove"})]},_.id)),(((y=t==null?void 0:t.vehicles)==null?void 0:y.length)??0)<3&&P.jsx("button",{className:"btn-secondary",onClick:()=>e("/add-vehicle"),children:"+ Add Vehicle"}),P.jsx("button",{className:"btn-secondary",style:{marginTop:16},onClick:()=>e("/friend-requests"),children:"Friend Requests"}),P.jsx("button",{className:"btn-secondary",style:{marginTop:8},onClick:p,children:"Sign Out"})]})},ub=n=>{const[e,t]=V.useState([]),[i,o]=V.useState([]),[a,c]=V.useState(!0);return V.useEffect(()=>{if(!n){c(!1);return}let d=!0;HD(n).then(y=>{d&&t(y)});const p=qD(n,y=>{d&&(o(y),c(!1))});return c(!1),()=>{d=!1,p()}},[n]),{friends:e,requests:i,loading:a}},cb=({req:n,onRespond:e})=>{const[t,i]=up.useState(!1),o=async a=>{i(!0),await zD(n.id,a,n.recipientUserId),e(),i(!1)};return P.jsxs("div",{className:"card friend-request-card",children:[P.jsxs("p",{className:"fr-plate",children:["From vehicle: ",n.requesterVehicleId]}),n.message&&P.jsxs("p",{className:"fr-intro",children:['"',n.message,'"']}),P.jsxs("div",{className:"fr-actions",children:[P.jsx("button",{className:"btn-primary",onClick:()=>o(!0),disabled:t,children:"Accept"}),P.jsx("button",{className:"btn-secondary",onClick:()=>o(!1),disabled:t,children:"Decline"})]})]})},hb=()=>{const{user:n}=ri(),{requests:e,friends:t,loading:i}=ub((n==null?void 0:n.uid)??null),[,o]=up.useReducer(a=>a+1,0);return i?P.jsx("div",{className:"loading-screen",children:"Loading…"}):P.jsxs("div",{className:"page",children:[P.jsx("h1",{className:"page-title",children:"Friends"}),P.jsxs("h2",{className:"section-title",children:["Pending Requests (",e.length,")"]}),e.length===0&&P.jsx("p",{className:"empty-state-text",children:"No pending requests."}),e.map(a=>P.jsx(cb,{req:a,onRespond:o},a.id)),P.jsxs("h2",{className:"section-title",style:{marginTop:24},children:["My Friends (",t.length,")"]}),t.length===0&&P.jsx("p",{className:"empty-state-text",children:"No friends yet."}),t.map(a=>P.jsxs("div",{className:"card friend-card",children:[P.jsx("p",{className:"friend-vehicle",children:a.vehicleId}),a.nickname&&P.jsx("p",{className:"friend-nickname",children:a.nickname})]},a.userId))]})},db=()=>P.jsxs("div",{className:"app-shell",children:[P.jsx("main",{className:"app-content",children:P.jsx(pS,{})}),P.jsxs("nav",{className:"bottom-nav","aria-label":"Main navigation",children:[P.jsxs(Ic,{to:"/search",className:({isActive:n})=>n?"nav-item active":"nav-item",children:[P.jsx("span",{className:"nav-icon",children:"🔍"}),P.jsx("span",{className:"nav-label",children:"Search"})]}),P.jsxs(Ic,{to:"/inbox",className:({isActive:n})=>n?"nav-item active":"nav-item",children:[P.jsx("span",{className:"nav-icon",children:"💬"}),P.jsx("span",{className:"nav-label",children:"Inbox"})]}),P.jsxs(Ic,{to:"/profile",className:({isActive:n})=>n?"nav-item active":"nav-item",children:[P.jsx("span",{className:"nav-icon",children:"🚗"}),P.jsx("span",{className:"nav-label",children:"Profile"})]})]})]}),ol=({children:n})=>{const{user:e,loading:t}=ri();return t?P.jsx("div",{className:"loading-screen",children:"Loading…"}):e?P.jsx(P.Fragment,{children:n}):P.jsx(al,{to:"/login",replace:!0})};function fb(){const{user:n,loading:e}=ri();return e?P.jsx("div",{className:"loading-screen",children:"Loading…"}):P.jsxs(gS,{children:[P.jsx(pn,{path:"/login",element:n?P.jsx(al,{to:"/search",replace:!0}):P.jsx(kD,{})}),P.jsx(pn,{path:"/signup",element:n?P.jsx(al,{to:"/add-vehicle",replace:!0}):P.jsx(UD,{})}),P.jsxs(pn,{element:P.jsx(ol,{children:P.jsx(db,{})}),children:[P.jsx(pn,{path:"/search",element:P.jsx(GD,{})}),P.jsx(pn,{path:"/inbox",element:P.jsx(sb,{})}),P.jsx(pn,{path:"/profile",element:P.jsx(lb,{})})]}),P.jsx(pn,{path:"/add-vehicle",element:P.jsx(ol,{children:P.jsx(BD,{})})}),P.jsx(pn,{path:"/thread/:threadId",element:P.jsx(ol,{children:P.jsx(ob,{})})}),P.jsx(pn,{path:"/compose",element:P.jsx(ol,{children:P.jsx(ab,{})})}),P.jsx(pn,{path:"/friend-requests",element:P.jsx(ol,{children:P.jsx(hb,{})})}),P.jsx(pn,{path:"/",element:P.jsx(al,{to:n?"/search":"/login",replace:!0})}),P.jsx(pn,{path:"*",element:P.jsx(al,{to:n?"/search":"/login",replace:!0})})]})}function pb(){return P.jsx(BS,{basename:"/car-talk-web",children:P.jsx(PD,{children:P.jsx(fb,{})})})}mI.createRoot(document.getElementById("root")).render(P.jsx(up.StrictMode,{children:P.jsx(pb,{})}));
