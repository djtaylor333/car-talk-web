(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function D_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var sf={exports:{}},sl={},of={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry;function uI(){if(Ry)return Pe;Ry=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function T(M){return M===null||typeof M!="object"?null:(M=E&&M[E]||M["@@iterator"],typeof M=="function"?M:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,z={};function L(M,Q,fe){this.props=M,this.context=Q,this.refs=z,this.updater=fe||k}L.prototype.isReactComponent={},L.prototype.setState=function(M,Q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Q,"setState")},L.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function G(){}G.prototype=L.prototype;function ee(M,Q,fe){this.props=M,this.context=Q,this.refs=z,this.updater=fe||k}var X=ee.prototype=new G;X.constructor=ee,j(X,L.prototype),X.isPureReactComponent=!0;var ie=Array.isArray,ve=Object.prototype.hasOwnProperty,_e={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(M,Q,fe){var Ae,Ce={},De=null,Me=null;if(Q!=null)for(Ae in Q.ref!==void 0&&(Me=Q.ref),Q.key!==void 0&&(De=""+Q.key),Q)ve.call(Q,Ae)&&!D.hasOwnProperty(Ae)&&(Ce[Ae]=Q[Ae]);var Fe=arguments.length-2;if(Fe===1)Ce.children=fe;else if(1<Fe){for(var He=Array(Fe),Tt=0;Tt<Fe;Tt++)He[Tt]=arguments[Tt+2];Ce.children=He}if(M&&M.defaultProps)for(Ae in Fe=M.defaultProps,Fe)Ce[Ae]===void 0&&(Ce[Ae]=Fe[Ae]);return{$$typeof:n,type:M,key:De,ref:Me,props:Ce,_owner:_e.current}}function P(M,Q){return{$$typeof:n,type:M.type,key:Q,ref:M.ref,props:M.props,_owner:M._owner}}function x(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function V(M){var Q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(fe){return Q[fe]})}var F=/\/+/g;function C(M,Q){return typeof M=="object"&&M!==null&&M.key!=null?V(""+M.key):Q.toString(36)}function Ye(M,Q,fe,Ae,Ce){var De=typeof M;(De==="undefined"||De==="boolean")&&(M=null);var Me=!1;if(M===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(M.$$typeof){case n:case e:Me=!0}}if(Me)return Me=M,Ce=Ce(Me),M=Ae===""?"."+C(Me,0):Ae,ie(Ce)?(fe="",M!=null&&(fe=M.replace(F,"$&/")+"/"),Ye(Ce,Q,fe,"",function(Tt){return Tt})):Ce!=null&&(x(Ce)&&(Ce=P(Ce,fe+(!Ce.key||Me&&Me.key===Ce.key?"":(""+Ce.key).replace(F,"$&/")+"/")+M)),Q.push(Ce)),1;if(Me=0,Ae=Ae===""?".":Ae+":",ie(M))for(var Fe=0;Fe<M.length;Fe++){De=M[Fe];var He=Ae+C(De,Fe);Me+=Ye(De,Q,fe,He,Ce)}else if(He=T(M),typeof He=="function")for(M=He.call(M),Fe=0;!(De=M.next()).done;)De=De.value,He=Ae+C(De,Fe++),Me+=Ye(De,Q,fe,He,Ce);else if(De==="object")throw Q=String(M),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Me}function Ke(M,Q,fe){if(M==null)return M;var Ae=[],Ce=0;return Ye(M,Ae,"","",function(De){return Q.call(fe,De,Ce++)}),Ae}function Ot(M){if(M._status===-1){var Q=M._result;Q=Q(),Q.then(function(fe){(M._status===0||M._status===-1)&&(M._status=1,M._result=fe)},function(fe){(M._status===0||M._status===-1)&&(M._status=2,M._result=fe)}),M._status===-1&&(M._status=0,M._result=Q)}if(M._status===1)return M._result.default;throw M._result}var Be={current:null},re={transition:null},me={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:re,ReactCurrentOwner:_e};function le(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Ke,forEach:function(M,Q,fe){Ke(M,function(){Q.apply(this,arguments)},fe)},count:function(M){var Q=0;return Ke(M,function(){Q++}),Q},toArray:function(M){return Ke(M,function(Q){return Q})||[]},only:function(M){if(!x(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Pe.Component=L,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=ee,Pe.StrictMode=i,Pe.Suspense=p,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Pe.act=le,Pe.cloneElement=function(M,Q,fe){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Ae=j({},M.props),Ce=M.key,De=M.ref,Me=M._owner;if(Q!=null){if(Q.ref!==void 0&&(De=Q.ref,Me=_e.current),Q.key!==void 0&&(Ce=""+Q.key),M.type&&M.type.defaultProps)var Fe=M.type.defaultProps;for(He in Q)ve.call(Q,He)&&!D.hasOwnProperty(He)&&(Ae[He]=Q[He]===void 0&&Fe!==void 0?Fe[He]:Q[He])}var He=arguments.length-2;if(He===1)Ae.children=fe;else if(1<He){Fe=Array(He);for(var Tt=0;Tt<He;Tt++)Fe[Tt]=arguments[Tt+2];Ae.children=Fe}return{$$typeof:n,type:M.type,key:Ce,ref:De,props:Ae,_owner:Me}},Pe.createContext=function(M){return M={$$typeof:c,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},Pe.createElement=S,Pe.createFactory=function(M){var Q=S.bind(null,M);return Q.type=M,Q},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(M){return{$$typeof:d,render:M}},Pe.isValidElement=x,Pe.lazy=function(M){return{$$typeof:_,_payload:{_status:-1,_result:M},_init:Ot}},Pe.memo=function(M,Q){return{$$typeof:y,type:M,compare:Q===void 0?null:Q}},Pe.startTransition=function(M){var Q=re.transition;re.transition={};try{M()}finally{re.transition=Q}},Pe.unstable_act=le,Pe.useCallback=function(M,Q){return Be.current.useCallback(M,Q)},Pe.useContext=function(M){return Be.current.useContext(M)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(M){return Be.current.useDeferredValue(M)},Pe.useEffect=function(M,Q){return Be.current.useEffect(M,Q)},Pe.useId=function(){return Be.current.useId()},Pe.useImperativeHandle=function(M,Q,fe){return Be.current.useImperativeHandle(M,Q,fe)},Pe.useInsertionEffect=function(M,Q){return Be.current.useInsertionEffect(M,Q)},Pe.useLayoutEffect=function(M,Q){return Be.current.useLayoutEffect(M,Q)},Pe.useMemo=function(M,Q){return Be.current.useMemo(M,Q)},Pe.useReducer=function(M,Q,fe){return Be.current.useReducer(M,Q,fe)},Pe.useRef=function(M){return Be.current.useRef(M)},Pe.useState=function(M){return Be.current.useState(M)},Pe.useSyncExternalStore=function(M,Q,fe){return Be.current.useSyncExternalStore(M,Q,fe)},Pe.useTransition=function(){return Be.current.useTransition()},Pe.version="18.3.1",Pe}var Cy;function lp(){return Cy||(Cy=1,of.exports=uI()),of.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py;function cI(){if(Py)return sl;Py=1;var n=lp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var _,E={},T=null,k=null;y!==void 0&&(T=""+y),p.key!==void 0&&(T=""+p.key),p.ref!==void 0&&(k=p.ref);for(_ in p)i.call(p,_)&&!a.hasOwnProperty(_)&&(E[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)E[_]===void 0&&(E[_]=p[_]);return{$$typeof:e,type:d,key:T,ref:k,props:E,_owner:o.current}}return sl.Fragment=t,sl.jsx=c,sl.jsxs=c,sl}var ky;function hI(){return ky||(ky=1,sf.exports=cI()),sf.exports}var R=hI(),O=lp();const up=D_(O);var fc={},af={exports:{}},rn={},lf={exports:{}},uf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny;function dI(){return Ny||(Ny=1,(function(n){function e(re,me){var le=re.length;re.push(me);e:for(;0<le;){var M=le-1>>>1,Q=re[M];if(0<o(Q,me))re[M]=me,re[le]=Q,le=M;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var me=re[0],le=re.pop();if(le!==me){re[0]=le;e:for(var M=0,Q=re.length,fe=Q>>>1;M<fe;){var Ae=2*(M+1)-1,Ce=re[Ae],De=Ae+1,Me=re[De];if(0>o(Ce,le))De<Q&&0>o(Me,Ce)?(re[M]=Me,re[De]=le,M=De):(re[M]=Ce,re[Ae]=le,M=Ae);else if(De<Q&&0>o(Me,le))re[M]=Me,re[De]=le,M=De;else break e}}return me}function o(re,me){var le=re.sortIndex-me.sortIndex;return le!==0?le:re.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],_=1,E=null,T=3,k=!1,j=!1,z=!1,L=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(re){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=re)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function ie(re){if(z=!1,X(re),!j)if(t(p)!==null)j=!0,Ot(ve);else{var me=t(y);me!==null&&Be(ie,me.startTime-re)}}function ve(re,me){j=!1,z&&(z=!1,G(S),S=-1),k=!0;var le=T;try{for(X(me),E=t(p);E!==null&&(!(E.expirationTime>me)||re&&!V());){var M=E.callback;if(typeof M=="function"){E.callback=null,T=E.priorityLevel;var Q=M(E.expirationTime<=me);me=n.unstable_now(),typeof Q=="function"?E.callback=Q:E===t(p)&&i(p),X(me)}else i(p);E=t(p)}if(E!==null)var fe=!0;else{var Ae=t(y);Ae!==null&&Be(ie,Ae.startTime-me),fe=!1}return fe}finally{E=null,T=le,k=!1}}var _e=!1,D=null,S=-1,P=5,x=-1;function V(){return!(n.unstable_now()-x<P)}function F(){if(D!==null){var re=n.unstable_now();x=re;var me=!0;try{me=D(!0,re)}finally{me?C():(_e=!1,D=null)}}else _e=!1}var C;if(typeof ee=="function")C=function(){ee(F)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,Ke=Ye.port2;Ye.port1.onmessage=F,C=function(){Ke.postMessage(null)}}else C=function(){L(F,0)};function Ot(re){D=re,_e||(_e=!0,C())}function Be(re,me){S=L(function(){re(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){j||k||(j=!0,Ot(ve))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(re){switch(T){case 1:case 2:case 3:var me=3;break;default:me=T}var le=T;T=me;try{return re()}finally{T=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,me){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var le=T;T=re;try{return me()}finally{T=le}},n.unstable_scheduleCallback=function(re,me,le){var M=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?M+le:M):le=M,re){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=le+Q,re={id:_++,callback:me,priorityLevel:re,startTime:le,expirationTime:Q,sortIndex:-1},le>M?(re.sortIndex=le,e(y,re),t(p)===null&&re===t(y)&&(z?(G(S),S=-1):z=!0,Be(ie,le-M))):(re.sortIndex=Q,e(p,re),j||k||(j=!0,Ot(ve))),re},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(re){var me=T;return function(){var le=T;T=me;try{return re.apply(this,arguments)}finally{T=le}}}})(uf)),uf}var xy;function fI(){return xy||(xy=1,lf.exports=dI()),lf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function pI(){if(Dy)return rn;Dy=1;var n=lp(),e=fI();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function T(r){return p.call(E,r)?!0:p.call(_,r)?!1:y.test(r)?E[r]=!0:(_[r]=!0,!1)}function k(r,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function j(r,s,l,h){if(s===null||typeof s>"u"||k(r,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(r,s,l,h,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new z(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function ee(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(G,ee);L[s]=new z(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(G,ee);L[s]=new z(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(G,ee);L[s]=new z(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function X(r,s,l,h){var f=L.hasOwnProperty(s)?L[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(j(s,l,f,h)&&(l=null),h||f===null?T(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):f.mustUseProperty?r[f.propertyName]=l===null?f.type===3?!1:"":l:(s=f.attributeName,h=f.attributeNamespace,l===null?r.removeAttribute(s):(f=f.type,l=f===3||f===4&&l===!0?"":""+l,h?r.setAttributeNS(h,s,l):r.setAttribute(s,l))))}var ie=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ve=Symbol.for("react.element"),_e=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),V=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),Ke=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),re=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var le=Object.assign,M;function Q(r){if(M===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);M=s&&s[1]||""}return`
`+M+r}var fe=!1;function Ae(r,s){if(!r||fe)return"";fe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(H){var h=H}Reflect.construct(r,[],s)}else{try{s.call()}catch(H){h=H}r.call(s.prototype)}else{try{throw Error()}catch(H){h=H}r()}}catch(H){if(H&&h&&typeof H.stack=="string"){for(var f=H.stack.split(`
`),g=h.stack.split(`
`),w=f.length-1,A=g.length-1;1<=w&&0<=A&&f[w]!==g[A];)A--;for(;1<=w&&0<=A;w--,A--)if(f[w]!==g[A]){if(w!==1||A!==1)do if(w--,A--,0>A||f[w]!==g[A]){var N=`
`+f[w].replace(" at new "," at ");return r.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",r.displayName)),N}while(1<=w&&0<=A);break}}}finally{fe=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?Q(r):""}function Ce(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case D:return"Fragment";case _e:return"Portal";case P:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case Ye:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case V:return(r.displayName||"Context")+".Consumer";case x:return(r._context.displayName||"Context")+".Provider";case F:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ke:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Ot:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function He(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Tt(r){var s=He(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Sr(r){r._valueTracker||(r._valueTracker=Tt(r))}function zs(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return r&&(h=He(r)?r.checked?"true":"false":r.value),r=h,r!==l?(s.setValue(r),!0):!1}function ii(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Yi(r,s){var l=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function $s(r,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Fe(s.value!=null?s.value:l),r._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ha(r,s){s=s.checked,s!=null&&X(r,"checked",s,!1)}function da(r,s){ha(r,s);var l=Fe(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Hs(r,s.type,l):s.hasOwnProperty("defaultValue")&&Hs(r,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Jl(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Hs(r,s,l){(s!=="number"||ii(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var Ar=Array.isArray;function Rr(r,s,l,h){if(r=r.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<r.length;l++)f=s.hasOwnProperty("$"+r[l].value),r[l].selected!==f&&(r[l].selected=f),f&&h&&(r[l].defaultSelected=!0)}else{for(l=""+Fe(l),s=null,f=0;f<r.length;f++){if(r[f].value===l){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function fa(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function qs(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Ar(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:Fe(l)}}function Ws(r,s){var l=Fe(s.value),h=Fe(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),h!=null&&(r.defaultValue=""+h)}function pa(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function mt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?mt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Cr,ma=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,l,h,f)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Cr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function si(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zi=["Webkit","ms","Moz","O"];Object.keys(Ji).forEach(function(r){Zi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ji[s]=Ji[r]})});function ga(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ji.hasOwnProperty(r)&&Ji[r]?(""+s).trim():s+"px"}function ya(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,f=ga(l,s[l],h);l==="float"&&(l="cssFloat"),h?r.setProperty(l,f):r[l]=f}}var va=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _a(r,s){if(s){if(va[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function wa(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var es=null;function Gs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ks=null,_n=null,nr=null;function Qs(r){if(r=Ha(r)){if(typeof Ks!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Pu(s),Ks(r.stateNode,r.type,s))}}function rr(r){_n?nr?nr.push(r):nr=[r]:_n=r}function Ea(){if(_n){var r=_n,s=nr;if(nr=_n=null,Qs(r),s)for(r=0;r<s.length;r++)Qs(s[r])}}function ts(r,s){return r(s)}function Ta(){}var Pr=!1;function Ia(r,s,l){if(Pr)return r(s,l);Pr=!0;try{return ts(r,s,l)}finally{Pr=!1,(_n!==null||nr!==null)&&(Ta(),Ea())}}function ot(r,s){var l=r.stateNode;if(l===null)return null;var h=Pu(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Xs=!1;if(d)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Xs=!1}function ns(r,s,l,h,f,g,w,A,N){var H=Array.prototype.slice.call(arguments,3);try{s.apply(l,H)}catch(J){this.onError(J)}}var rs=!1,Ys=null,On=!1,Sa=null,Dh={onError:function(r){rs=!0,Ys=r}};function Js(r,s,l,h,f,g,w,A,N){rs=!1,Ys=null,ns.apply(Dh,arguments)}function Zl(r,s,l,h,f,g,w,A,N){if(Js.apply(this,arguments),rs){if(rs){var H=Ys;rs=!1,Ys=null}else throw Error(t(198));On||(On=!0,Sa=H)}}function Ln(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function is(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Mn(r){if(Ln(r)!==r)throw Error(t(188))}function eu(r){var s=r.alternate;if(!s){if(s=Ln(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,h=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){l=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return Mn(f),r;if(g===h)return Mn(f),s;g=g.sibling}throw Error(t(188))}if(l.return!==h.return)l=f,h=g;else{for(var w=!1,A=f.child;A;){if(A===l){w=!0,l=f,h=g;break}if(A===h){w=!0,h=f,l=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===l){w=!0,l=g,h=f;break}if(A===h){w=!0,h=g,l=f;break}A=A.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function Aa(r){return r=eu(r),r!==null?Zs(r):null}function Zs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Zs(r);if(s!==null)return s;r=r.sibling}return null}var eo=e.unstable_scheduleCallback,Ra=e.unstable_cancelCallback,tu=e.unstable_shouldYield,bh=e.unstable_requestPaint,qe=e.unstable_now,nu=e.unstable_getCurrentPriorityLevel,ss=e.unstable_ImmediatePriority,oi=e.unstable_UserBlockingPriority,wn=e.unstable_NormalPriority,Ca=e.unstable_LowPriority,ru=e.unstable_IdlePriority,os=null,ln=null;function iu(r){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(os,r,void 0,(r.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:ou,Pa=Math.log,su=Math.LN2;function ou(r){return r>>>=0,r===0?32:31-(Pa(r)/su|0)|0}var to=64,no=4194304;function ai(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function as(r,s){var l=r.pendingLanes;if(l===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,w=l&268435455;if(w!==0){var A=w&~f;A!==0?h=ai(A):(g&=w,g!==0&&(h=ai(g)))}else w=l&~f,w!==0?h=ai(w):g!==0&&(h=ai(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)l=31-qt(s),f=1<<l,h|=r[l],s&=~f;return h}function Vh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kr(r,s){for(var l=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-qt(g),A=1<<w,N=f[w];N===-1?((A&l)===0||(A&h)!==0)&&(f[w]=Vh(A,s)):N<=s&&(r.expiredLanes|=A),g&=~A}}function un(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ls(){var r=to;return to<<=1,(to&4194240)===0&&(to=64),r}function li(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function ui(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-qt(s),r[s]=l}function ze(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<l;){var f=31-qt(l),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,l&=~g}}function ci(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var h=31-qt(l),f=1<<h;f&s|r[h]&s&&(r[h]|=s),l&=~f}}var xe=0;function hi(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var au,ro,lu,uu,cu,ka=!1,ir=[],Nt=null,Fn=null,Un=null,di=new Map,En=new Map,sr=[],Oh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(r,s){switch(r){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":di.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(s.pointerId)}}function Xt(r,s,l,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ha(s),s!==null&&ro(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function Lh(r,s,l,h,f){switch(s){case"focusin":return Nt=Xt(Nt,r,s,l,h,f),!0;case"dragenter":return Fn=Xt(Fn,r,s,l,h,f),!0;case"mouseover":return Un=Xt(Un,r,s,l,h,f),!0;case"pointerover":var g=f.pointerId;return di.set(g,Xt(di.get(g)||null,r,s,l,h,f)),!0;case"gotpointercapture":return g=f.pointerId,En.set(g,Xt(En.get(g)||null,r,s,l,h,f)),!0}return!1}function du(r){var s=fs(r.target);if(s!==null){var l=Ln(s);if(l!==null){if(s=l.tag,s===13){if(s=is(l),s!==null){r.blockedOn=s,cu(r.priority,function(){lu(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Nr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=io(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var h=new l.constructor(l.type,l);es=h,l.target.dispatchEvent(h),es=null}else return s=Ha(l),s!==null&&ro(s),r.blockedOn=l,!1;s.shift()}return!0}function us(r,s,l){Nr(r)&&l.delete(s)}function fu(){ka=!1,Nt!==null&&Nr(Nt)&&(Nt=null),Fn!==null&&Nr(Fn)&&(Fn=null),Un!==null&&Nr(Un)&&(Un=null),di.forEach(us),En.forEach(us)}function jn(r,s){r.blockedOn===s&&(r.blockedOn=null,ka||(ka=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fu)))}function Bn(r){function s(f){return jn(f,r)}if(0<ir.length){jn(ir[0],r);for(var l=1;l<ir.length;l++){var h=ir[l];h.blockedOn===r&&(h.blockedOn=null)}}for(Nt!==null&&jn(Nt,r),Fn!==null&&jn(Fn,r),Un!==null&&jn(Un,r),di.forEach(s),En.forEach(s),l=0;l<sr.length;l++)h=sr[l],h.blockedOn===r&&(h.blockedOn=null);for(;0<sr.length&&(l=sr[0],l.blockedOn===null);)du(l),l.blockedOn===null&&sr.shift()}var xr=ie.ReactCurrentBatchConfig,fi=!0;function Je(r,s,l,h){var f=xe,g=xr.transition;xr.transition=null;try{xe=1,Na(r,s,l,h)}finally{xe=f,xr.transition=g}}function Mh(r,s,l,h){var f=xe,g=xr.transition;xr.transition=null;try{xe=4,Na(r,s,l,h)}finally{xe=f,xr.transition=g}}function Na(r,s,l,h){if(fi){var f=io(r,s,l,h);if(f===null)Kh(r,s,h,cs,l),hu(r,h);else if(Lh(f,r,s,l,h))h.stopPropagation();else if(hu(r,h),s&4&&-1<Oh.indexOf(r)){for(;f!==null;){var g=Ha(f);if(g!==null&&au(g),g=io(r,s,l,h),g===null&&Kh(r,s,h,cs,l),g===f)break;f=g}f!==null&&h.stopPropagation()}else Kh(r,s,h,null,l)}}var cs=null;function io(r,s,l,h){if(cs=null,r=Gs(h),r=fs(r),r!==null)if(s=Ln(r),s===null)r=null;else if(l=s.tag,l===13){if(r=is(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return cs=r,null}function xa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nu()){case ss:return 1;case oi:return 4;case wn:case Ca:return 16;case ru:return 536870912;default:return 16}default:return 16}}var cn=null,so=null,Yt=null;function Da(){if(Yt)return Yt;var r,s=so,l=s.length,h,f="value"in cn?cn.value:cn.textContent,g=f.length;for(r=0;r<l&&s[r]===f[r];r++);var w=l-r;for(h=1;h<=w&&s[l-h]===f[g-h];h++);return Yt=f.slice(r,1<h?1-h:void 0)}function oo(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function or(){return!0}function ba(){return!1}function xt(r){function s(l,h,f,g,w){this._reactName=l,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(l=r[A],this[A]=l?l(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?or:ba,this.isPropagationStopped=ba,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),s}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=xt(zn),ar=le({},zn,{view:0,detail:0}),Fh=xt(ar),lo,Dr,pi,hs=le({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==pi&&(pi&&r.type==="mousemove"?(lo=r.screenX-pi.screenX,Dr=r.screenY-pi.screenY):Dr=lo=0,pi=r),lo)},movementY:function(r){return"movementY"in r?r.movementY:Dr}}),uo=xt(hs),Va=le({},hs,{dataTransfer:0}),pu=xt(Va),co=le({},ar,{relatedTarget:0}),ho=xt(co),mu=le({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),br=xt(mu),gu=le({},zn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),yu=xt(gu),vu=le({},zn,{data:0}),Oa=xt(vu),fo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=_u[r])?!!s[r]:!1}function lr(){return wu}var u=le({},ar,{key:function(r){if(r.key){var s=fo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=oo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Wt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lr,charCode:function(r){return r.type==="keypress"?oo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?oo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=xt(u),v=le({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=xt(v),U=le({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lr}),q=xt(U),ne=le({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=xt(ne),yt=le({},hs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),be=xt(yt),It=[9,13,27,32],ct=d&&"CompositionEvent"in window,Tn=null;d&&"documentMode"in document&&(Tn=document.documentMode);var hn=d&&"TextEvent"in window&&!Tn,ds=d&&(!ct||Tn&&8<Tn&&11>=Tn),po=" ",wm=!1;function Em(r,s){switch(r){case"keyup":return It.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var mo=!1;function oT(r,s){switch(r){case"compositionend":return Tm(s);case"keypress":return s.which!==32?null:(wm=!0,po);case"textInput":return r=s.data,r===po&&wm?null:r;default:return null}}function aT(r,s){if(mo)return r==="compositionend"||!ct&&Em(r,s)?(r=Da(),Yt=so=cn=null,mo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ds&&s.locale!=="ko"?null:s.data;default:return null}}var lT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Im(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!lT[r.type]:s==="textarea"}function Sm(r,s,l,h){rr(h),s=Au(s,"onChange"),0<s.length&&(l=new ao("onChange","change",null,l,h),r.push({event:l,listeners:s}))}var La=null,Ma=null;function uT(r){zm(r,0)}function Eu(r){var s=wo(r);if(zs(s))return r}function cT(r,s){if(r==="change")return s}var Am=!1;if(d){var Uh;if(d){var jh="oninput"in document;if(!jh){var Rm=document.createElement("div");Rm.setAttribute("oninput","return;"),jh=typeof Rm.oninput=="function"}Uh=jh}else Uh=!1;Am=Uh&&(!document.documentMode||9<document.documentMode)}function Cm(){La&&(La.detachEvent("onpropertychange",Pm),Ma=La=null)}function Pm(r){if(r.propertyName==="value"&&Eu(Ma)){var s=[];Sm(s,Ma,r,Gs(r)),Ia(uT,s)}}function hT(r,s,l){r==="focusin"?(Cm(),La=s,Ma=l,La.attachEvent("onpropertychange",Pm)):r==="focusout"&&Cm()}function dT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Eu(Ma)}function fT(r,s){if(r==="click")return Eu(s)}function pT(r,s){if(r==="input"||r==="change")return Eu(s)}function mT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var $n=typeof Object.is=="function"?Object.is:mT;function Fa(r,s){if($n(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var f=l[h];if(!p.call(s,f)||!$n(r[f],s[f]))return!1}return!0}function km(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Nm(r,s){var l=km(r);r=0;for(var h;l;){if(l.nodeType===3){if(h=r+l.textContent.length,r<=s&&h>=s)return{node:l,offset:s-r};r=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=km(l)}}function xm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?xm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Dm(){for(var r=window,s=ii();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=ii(r.document)}return s}function Bh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function gT(r){var s=Dm(),l=r.focusedElem,h=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&xm(l.ownerDocument.documentElement,l)){if(h!==null&&Bh(l)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=l.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=Nm(l,g);var w=Nm(l,h);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var yT=d&&"documentMode"in document&&11>=document.documentMode,go=null,zh=null,Ua=null,$h=!1;function bm(r,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;$h||go==null||go!==ii(h)||(h=go,"selectionStart"in h&&Bh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ua&&Fa(Ua,h)||(Ua=h,h=Au(zh,"onSelect"),0<h.length&&(s=new ao("onSelect","select",null,s,l),r.push({event:s,listeners:h}),s.target=go)))}function Tu(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var yo={animationend:Tu("Animation","AnimationEnd"),animationiteration:Tu("Animation","AnimationIteration"),animationstart:Tu("Animation","AnimationStart"),transitionend:Tu("Transition","TransitionEnd")},Hh={},Vm={};d&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function Iu(r){if(Hh[r])return Hh[r];if(!yo[r])return r;var s=yo[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Vm)return Hh[r]=s[l];return r}var Om=Iu("animationend"),Lm=Iu("animationiteration"),Mm=Iu("animationstart"),Fm=Iu("transitionend"),Um=new Map,jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(r,s){Um.set(r,s),a(s,[r])}for(var qh=0;qh<jm.length;qh++){var Wh=jm[qh],vT=Wh.toLowerCase(),_T=Wh[0].toUpperCase()+Wh.slice(1);mi(vT,"on"+_T)}mi(Om,"onAnimationEnd"),mi(Lm,"onAnimationIteration"),mi(Mm,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Fm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));function Bm(r,s,l){var h=r.type||"unknown-event";r.currentTarget=l,Zl(h,s,void 0,r),r.currentTarget=null}function zm(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var h=r[l],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var A=h[w],N=A.instance,H=A.currentTarget;if(A=A.listener,N!==g&&f.isPropagationStopped())break e;Bm(f,A,H),g=N}else for(w=0;w<h.length;w++){if(A=h[w],N=A.instance,H=A.currentTarget,A=A.listener,N!==g&&f.isPropagationStopped())break e;Bm(f,A,H),g=N}}}if(On)throw r=Sa,On=!1,Sa=null,r}function Qe(r,s){var l=s[ed];l===void 0&&(l=s[ed]=new Set);var h=r+"__bubble";l.has(h)||($m(s,r,2,!1),l.add(h))}function Gh(r,s,l){var h=0;s&&(h|=4),$m(l,r,h,s)}var Su="_reactListening"+Math.random().toString(36).slice(2);function Ba(r){if(!r[Su]){r[Su]=!0,i.forEach(function(l){l!=="selectionchange"&&(wT.has(l)||Gh(l,!1,r),Gh(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Su]||(s[Su]=!0,Gh("selectionchange",!1,s))}}function $m(r,s,l,h){switch(xa(s)){case 1:var f=Je;break;case 4:f=Mh;break;default:f=Na}l=f.bind(null,s,l,r),f=void 0,!Xs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,l,{capture:!0,passive:f}):r.addEventListener(s,l,!0):f!==void 0?r.addEventListener(s,l,{passive:f}):r.addEventListener(s,l,!1)}function Kh(r,s,l,h,f){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var A=h.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(w===4)for(w=h.return;w!==null;){var N=w.tag;if((N===3||N===4)&&(N=w.stateNode.containerInfo,N===f||N.nodeType===8&&N.parentNode===f))return;w=w.return}for(;A!==null;){if(w=fs(A),w===null)return;if(N=w.tag,N===5||N===6){h=g=w;continue e}A=A.parentNode}}h=h.return}Ia(function(){var H=g,J=Gs(l),Z=[];e:{var Y=Um.get(r);if(Y!==void 0){var oe=ao,ce=r;switch(r){case"keypress":if(oo(l)===0)break e;case"keydown":case"keyup":oe=m;break;case"focusin":ce="focus",oe=ho;break;case"focusout":ce="blur",oe=ho;break;case"beforeblur":case"afterblur":oe=ho;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=pu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=q;break;case Om:case Lm:case Mm:oe=br;break;case Fm:oe=je;break;case"scroll":oe=Fh;break;case"wheel":oe=be;break;case"copy":case"cut":case"paste":oe=yu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=I}var he=(s&4)!==0,at=!he&&r==="scroll",B=he?Y!==null?Y+"Capture":null:Y;he=[];for(var b=H,$;b!==null;){$=b;var te=$.stateNode;if($.tag===5&&te!==null&&($=te,B!==null&&(te=ot(b,B),te!=null&&he.push(za(b,te,$)))),at)break;b=b.return}0<he.length&&(Y=new oe(Y,ce,null,l,J),Z.push({event:Y,listeners:he}))}}if((s&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",Y&&l!==es&&(ce=l.relatedTarget||l.fromElement)&&(fs(ce)||ce[Vr]))break e;if((oe||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,oe?(ce=l.relatedTarget||l.toElement,oe=H,ce=ce?fs(ce):null,ce!==null&&(at=Ln(ce),ce!==at||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(oe=null,ce=H),oe!==ce)){if(he=uo,te="onMouseLeave",B="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(he=I,te="onPointerLeave",B="onPointerEnter",b="pointer"),at=oe==null?Y:wo(oe),$=ce==null?Y:wo(ce),Y=new he(te,b+"leave",oe,l,J),Y.target=at,Y.relatedTarget=$,te=null,fs(J)===H&&(he=new he(B,b+"enter",ce,l,J),he.target=$,he.relatedTarget=at,te=he),at=te,oe&&ce)t:{for(he=oe,B=ce,b=0,$=he;$;$=vo($))b++;for($=0,te=B;te;te=vo(te))$++;for(;0<b-$;)he=vo(he),b--;for(;0<$-b;)B=vo(B),$--;for(;b--;){if(he===B||B!==null&&he===B.alternate)break t;he=vo(he),B=vo(B)}he=null}else he=null;oe!==null&&Hm(Z,Y,oe,he,!1),ce!==null&&at!==null&&Hm(Z,at,ce,he,!0)}}e:{if(Y=H?wo(H):window,oe=Y.nodeName&&Y.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Y.type==="file")var de=cT;else if(Im(Y))if(Am)de=pT;else{de=dT;var ge=hT}else(oe=Y.nodeName)&&oe.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(de=fT);if(de&&(de=de(r,H))){Sm(Z,de,l,J);break e}ge&&ge(r,Y,H),r==="focusout"&&(ge=Y._wrapperState)&&ge.controlled&&Y.type==="number"&&Hs(Y,"number",Y.value)}switch(ge=H?wo(H):window,r){case"focusin":(Im(ge)||ge.contentEditable==="true")&&(go=ge,zh=H,Ua=null);break;case"focusout":Ua=zh=go=null;break;case"mousedown":$h=!0;break;case"contextmenu":case"mouseup":case"dragend":$h=!1,bm(Z,l,J);break;case"selectionchange":if(yT)break;case"keydown":case"keyup":bm(Z,l,J)}var ye;if(ct)e:{switch(r){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else mo?Em(r,l)&&(Te="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Te="onCompositionStart");Te&&(ds&&l.locale!=="ko"&&(mo||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&mo&&(ye=Da()):(cn=J,so="value"in cn?cn.value:cn.textContent,mo=!0)),ge=Au(H,Te),0<ge.length&&(Te=new Oa(Te,r,null,l,J),Z.push({event:Te,listeners:ge}),ye?Te.data=ye:(ye=Tm(l),ye!==null&&(Te.data=ye)))),(ye=hn?oT(r,l):aT(r,l))&&(H=Au(H,"onBeforeInput"),0<H.length&&(J=new Oa("onBeforeInput","beforeinput",null,l,J),Z.push({event:J,listeners:H}),J.data=ye))}zm(Z,s)})}function za(r,s,l){return{instance:r,listener:s,currentTarget:l}}function Au(r,s){for(var l=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=ot(r,l),g!=null&&h.unshift(za(r,g,f)),g=ot(r,s),g!=null&&h.push(za(r,g,f))),r=r.return}return h}function vo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Hm(r,s,l,h,f){for(var g=s._reactName,w=[];l!==null&&l!==h;){var A=l,N=A.alternate,H=A.stateNode;if(N!==null&&N===h)break;A.tag===5&&H!==null&&(A=H,f?(N=ot(l,g),N!=null&&w.unshift(za(l,N,A))):f||(N=ot(l,g),N!=null&&w.push(za(l,N,A)))),l=l.return}w.length!==0&&r.push({event:s,listeners:w})}var ET=/\r\n?/g,TT=/\u0000|\uFFFD/g;function qm(r){return(typeof r=="string"?r:""+r).replace(ET,`
`).replace(TT,"")}function Ru(r,s,l){if(s=qm(s),qm(r)!==s&&l)throw Error(t(425))}function Cu(){}var Qh=null,Xh=null;function Yh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Jh=typeof setTimeout=="function"?setTimeout:void 0,IT=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,ST=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(r){return Wm.resolve(null).then(r).catch(AT)}:Jh;function AT(r){setTimeout(function(){throw r})}function Zh(r,s){var l=s,h=0;do{var f=l.nextSibling;if(r.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(h===0){r.removeChild(f),Bn(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=f}while(l);Bn(s)}function gi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Gm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var _o=Math.random().toString(36).slice(2),ur="__reactFiber$"+_o,$a="__reactProps$"+_o,Vr="__reactContainer$"+_o,ed="__reactEvents$"+_o,RT="__reactListeners$"+_o,CT="__reactHandles$"+_o;function fs(r){var s=r[ur];if(s)return s;for(var l=r.parentNode;l;){if(s=l[Vr]||l[ur]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=Gm(r);r!==null;){if(l=r[ur])return l;r=Gm(r)}return s}r=l,l=r.parentNode}return null}function Ha(r){return r=r[ur]||r[Vr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function wo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Pu(r){return r[$a]||null}var td=[],Eo=-1;function yi(r){return{current:r}}function Xe(r){0>Eo||(r.current=td[Eo],td[Eo]=null,Eo--)}function We(r,s){Eo++,td[Eo]=r.current,r.current=s}var vi={},Lt=yi(vi),Jt=yi(!1),ps=vi;function To(r,s){var l=r.type.contextTypes;if(!l)return vi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in l)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Zt(r){return r=r.childContextTypes,r!=null}function ku(){Xe(Jt),Xe(Lt)}function Km(r,s,l){if(Lt.current!==vi)throw Error(t(168));We(Lt,s),We(Jt,l)}function Qm(r,s,l){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,Me(r)||"Unknown",f));return le({},l,h)}function Nu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||vi,ps=Lt.current,We(Lt,r),We(Jt,Jt.current),!0}function Xm(r,s,l){var h=r.stateNode;if(!h)throw Error(t(169));l?(r=Qm(r,s,ps),h.__reactInternalMemoizedMergedChildContext=r,Xe(Jt),Xe(Lt),We(Lt,r)):Xe(Jt),We(Jt,l)}var Or=null,xu=!1,nd=!1;function Ym(r){Or===null?Or=[r]:Or.push(r)}function PT(r){xu=!0,Ym(r)}function _i(){if(!nd&&Or!==null){nd=!0;var r=0,s=xe;try{var l=Or;for(xe=1;r<l.length;r++){var h=l[r];do h=h(!0);while(h!==null)}Or=null,xu=!1}catch(f){throw Or!==null&&(Or=Or.slice(r+1)),eo(ss,_i),f}finally{xe=s,nd=!1}}return null}var Io=[],So=0,Du=null,bu=0,In=[],Sn=0,ms=null,Lr=1,Mr="";function gs(r,s){Io[So++]=bu,Io[So++]=Du,Du=r,bu=s}function Jm(r,s,l){In[Sn++]=Lr,In[Sn++]=Mr,In[Sn++]=ms,ms=r;var h=Lr;r=Mr;var f=32-qt(h)-1;h&=~(1<<f),l+=1;var g=32-qt(s)+f;if(30<g){var w=f-f%5;g=(h&(1<<w)-1).toString(32),h>>=w,f-=w,Lr=1<<32-qt(s)+f|l<<f|h,Mr=g+r}else Lr=1<<g|l<<f|h,Mr=r}function rd(r){r.return!==null&&(gs(r,1),Jm(r,1,0))}function id(r){for(;r===Du;)Du=Io[--So],Io[So]=null,bu=Io[--So],Io[So]=null;for(;r===ms;)ms=In[--Sn],In[Sn]=null,Mr=In[--Sn],In[Sn]=null,Lr=In[--Sn],In[Sn]=null}var dn=null,fn=null,Ze=!1,Hn=null;function Zm(r,s){var l=Pn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function eg(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,dn=r,fn=gi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,dn=r,fn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ms!==null?{id:Lr,overflow:Mr}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Pn(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,dn=r,fn=null,!0):!1;default:return!1}}function sd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function od(r){if(Ze){var s=fn;if(s){var l=s;if(!eg(r,s)){if(sd(r))throw Error(t(418));s=gi(l.nextSibling);var h=dn;s&&eg(r,s)?Zm(h,l):(r.flags=r.flags&-4097|2,Ze=!1,dn=r)}}else{if(sd(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ze=!1,dn=r}}}function tg(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;dn=r}function Vu(r){if(r!==dn)return!1;if(!Ze)return tg(r),Ze=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Yh(r.type,r.memoizedProps)),s&&(s=fn)){if(sd(r))throw ng(),Error(t(418));for(;s;)Zm(r,s),s=gi(s.nextSibling)}if(tg(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){fn=gi(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}fn=null}}else fn=dn?gi(r.stateNode.nextSibling):null;return!0}function ng(){for(var r=fn;r;)r=gi(r.nextSibling)}function Ao(){fn=dn=null,Ze=!1}function ad(r){Hn===null?Hn=[r]:Hn.push(r)}var kT=ie.ReactCurrentBatchConfig;function qa(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var A=f.refs;w===null?delete A[g]:A[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Ou(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function rg(r){var s=r._init;return s(r._payload)}function ig(r){function s(B,b){if(r){var $=B.deletions;$===null?(B.deletions=[b],B.flags|=16):$.push(b)}}function l(B,b){if(!r)return null;for(;b!==null;)s(B,b),b=b.sibling;return null}function h(B,b){for(B=new Map;b!==null;)b.key!==null?B.set(b.key,b):B.set(b.index,b),b=b.sibling;return B}function f(B,b){return B=Ci(B,b),B.index=0,B.sibling=null,B}function g(B,b,$){return B.index=$,r?($=B.alternate,$!==null?($=$.index,$<b?(B.flags|=2,b):$):(B.flags|=2,b)):(B.flags|=1048576,b)}function w(B){return r&&B.alternate===null&&(B.flags|=2),B}function A(B,b,$,te){return b===null||b.tag!==6?(b=Jd($,B.mode,te),b.return=B,b):(b=f(b,$),b.return=B,b)}function N(B,b,$,te){var de=$.type;return de===D?J(B,b,$.props.children,te,$.key):b!==null&&(b.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Ot&&rg(de)===b.type)?(te=f(b,$.props),te.ref=qa(B,b,$),te.return=B,te):(te=sc($.type,$.key,$.props,null,B.mode,te),te.ref=qa(B,b,$),te.return=B,te)}function H(B,b,$,te){return b===null||b.tag!==4||b.stateNode.containerInfo!==$.containerInfo||b.stateNode.implementation!==$.implementation?(b=Zd($,B.mode,te),b.return=B,b):(b=f(b,$.children||[]),b.return=B,b)}function J(B,b,$,te,de){return b===null||b.tag!==7?(b=Ss($,B.mode,te,de),b.return=B,b):(b=f(b,$),b.return=B,b)}function Z(B,b,$){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Jd(""+b,B.mode,$),b.return=B,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ve:return $=sc(b.type,b.key,b.props,null,B.mode,$),$.ref=qa(B,null,b),$.return=B,$;case _e:return b=Zd(b,B.mode,$),b.return=B,b;case Ot:var te=b._init;return Z(B,te(b._payload),$)}if(Ar(b)||me(b))return b=Ss(b,B.mode,$,null),b.return=B,b;Ou(B,b)}return null}function Y(B,b,$,te){var de=b!==null?b.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return de!==null?null:A(B,b,""+$,te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case ve:return $.key===de?N(B,b,$,te):null;case _e:return $.key===de?H(B,b,$,te):null;case Ot:return de=$._init,Y(B,b,de($._payload),te)}if(Ar($)||me($))return de!==null?null:J(B,b,$,te,null);Ou(B,$)}return null}function oe(B,b,$,te,de){if(typeof te=="string"&&te!==""||typeof te=="number")return B=B.get($)||null,A(b,B,""+te,de);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case ve:return B=B.get(te.key===null?$:te.key)||null,N(b,B,te,de);case _e:return B=B.get(te.key===null?$:te.key)||null,H(b,B,te,de);case Ot:var ge=te._init;return oe(B,b,$,ge(te._payload),de)}if(Ar(te)||me(te))return B=B.get($)||null,J(b,B,te,de,null);Ou(b,te)}return null}function ce(B,b,$,te){for(var de=null,ge=null,ye=b,Te=b=0,Rt=null;ye!==null&&Te<$.length;Te++){ye.index>Te?(Rt=ye,ye=null):Rt=ye.sibling;var Le=Y(B,ye,$[Te],te);if(Le===null){ye===null&&(ye=Rt);break}r&&ye&&Le.alternate===null&&s(B,ye),b=g(Le,b,Te),ge===null?de=Le:ge.sibling=Le,ge=Le,ye=Rt}if(Te===$.length)return l(B,ye),Ze&&gs(B,Te),de;if(ye===null){for(;Te<$.length;Te++)ye=Z(B,$[Te],te),ye!==null&&(b=g(ye,b,Te),ge===null?de=ye:ge.sibling=ye,ge=ye);return Ze&&gs(B,Te),de}for(ye=h(B,ye);Te<$.length;Te++)Rt=oe(ye,B,Te,$[Te],te),Rt!==null&&(r&&Rt.alternate!==null&&ye.delete(Rt.key===null?Te:Rt.key),b=g(Rt,b,Te),ge===null?de=Rt:ge.sibling=Rt,ge=Rt);return r&&ye.forEach(function(Pi){return s(B,Pi)}),Ze&&gs(B,Te),de}function he(B,b,$,te){var de=me($);if(typeof de!="function")throw Error(t(150));if($=de.call($),$==null)throw Error(t(151));for(var ge=de=null,ye=b,Te=b=0,Rt=null,Le=$.next();ye!==null&&!Le.done;Te++,Le=$.next()){ye.index>Te?(Rt=ye,ye=null):Rt=ye.sibling;var Pi=Y(B,ye,Le.value,te);if(Pi===null){ye===null&&(ye=Rt);break}r&&ye&&Pi.alternate===null&&s(B,ye),b=g(Pi,b,Te),ge===null?de=Pi:ge.sibling=Pi,ge=Pi,ye=Rt}if(Le.done)return l(B,ye),Ze&&gs(B,Te),de;if(ye===null){for(;!Le.done;Te++,Le=$.next())Le=Z(B,Le.value,te),Le!==null&&(b=g(Le,b,Te),ge===null?de=Le:ge.sibling=Le,ge=Le);return Ze&&gs(B,Te),de}for(ye=h(B,ye);!Le.done;Te++,Le=$.next())Le=oe(ye,B,Te,Le.value,te),Le!==null&&(r&&Le.alternate!==null&&ye.delete(Le.key===null?Te:Le.key),b=g(Le,b,Te),ge===null?de=Le:ge.sibling=Le,ge=Le);return r&&ye.forEach(function(lI){return s(B,lI)}),Ze&&gs(B,Te),de}function at(B,b,$,te){if(typeof $=="object"&&$!==null&&$.type===D&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case ve:e:{for(var de=$.key,ge=b;ge!==null;){if(ge.key===de){if(de=$.type,de===D){if(ge.tag===7){l(B,ge.sibling),b=f(ge,$.props.children),b.return=B,B=b;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Ot&&rg(de)===ge.type){l(B,ge.sibling),b=f(ge,$.props),b.ref=qa(B,ge,$),b.return=B,B=b;break e}l(B,ge);break}else s(B,ge);ge=ge.sibling}$.type===D?(b=Ss($.props.children,B.mode,te,$.key),b.return=B,B=b):(te=sc($.type,$.key,$.props,null,B.mode,te),te.ref=qa(B,b,$),te.return=B,B=te)}return w(B);case _e:e:{for(ge=$.key;b!==null;){if(b.key===ge)if(b.tag===4&&b.stateNode.containerInfo===$.containerInfo&&b.stateNode.implementation===$.implementation){l(B,b.sibling),b=f(b,$.children||[]),b.return=B,B=b;break e}else{l(B,b);break}else s(B,b);b=b.sibling}b=Zd($,B.mode,te),b.return=B,B=b}return w(B);case Ot:return ge=$._init,at(B,b,ge($._payload),te)}if(Ar($))return ce(B,b,$,te);if(me($))return he(B,b,$,te);Ou(B,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,b!==null&&b.tag===6?(l(B,b.sibling),b=f(b,$),b.return=B,B=b):(l(B,b),b=Jd($,B.mode,te),b.return=B,B=b),w(B)):l(B,b)}return at}var Ro=ig(!0),sg=ig(!1),Lu=yi(null),Mu=null,Co=null,ld=null;function ud(){ld=Co=Mu=null}function cd(r){var s=Lu.current;Xe(Lu),r._currentValue=s}function hd(r,s,l){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===l)break;r=r.return}}function Po(r,s){Mu=r,ld=Co=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(en=!0),r.firstContext=null)}function An(r){var s=r._currentValue;if(ld!==r)if(r={context:r,memoizedValue:s,next:null},Co===null){if(Mu===null)throw Error(t(308));Co=r,Mu.dependencies={lanes:0,firstContext:r}}else Co=Co.next=r;return s}var ys=null;function dd(r){ys===null?ys=[r]:ys.push(r)}function og(r,s,l,h){var f=s.interleaved;return f===null?(l.next=l,dd(s)):(l.next=f.next,f.next=l),s.interleaved=l,Fr(r,h)}function Fr(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var wi=!1;function fd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ag(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Ur(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Ei(r,s,l){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Oe&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Fr(r,l)}return f=h.interleaved,f===null?(s.next=s,dd(h)):(s.next=f.next,f.next=s),h.interleaved=s,Fr(r,l)}function Fu(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,ci(r,l)}}function lg(r,s){var l=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?f=g=w:g=g.next=w,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Uu(r,s,l,h){var f=r.updateQueue;wi=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var N=A,H=N.next;N.next=null,w===null?g=H:w.next=H,w=N;var J=r.alternate;J!==null&&(J=J.updateQueue,A=J.lastBaseUpdate,A!==w&&(A===null?J.firstBaseUpdate=H:A.next=H,J.lastBaseUpdate=N))}if(g!==null){var Z=f.baseState;w=0,J=H=N=null,A=g;do{var Y=A.lane,oe=A.eventTime;if((h&Y)===Y){J!==null&&(J=J.next={eventTime:oe,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ce=r,he=A;switch(Y=s,oe=l,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){Z=ce.call(oe,Z,Y);break e}Z=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,Y=typeof ce=="function"?ce.call(oe,Z,Y):ce,Y==null)break e;Z=le({},Z,Y);break e;case 2:wi=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Y=f.effects,Y===null?f.effects=[A]:Y.push(A))}else oe={eventTime:oe,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},J===null?(H=J=oe,N=Z):J=J.next=oe,w|=Y;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);if(J===null&&(N=Z),f.baseState=N,f.firstBaseUpdate=H,f.lastBaseUpdate=J,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);ws|=w,r.lanes=w,r.memoizedState=Z}}function ug(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=l,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Wa={},cr=yi(Wa),Ga=yi(Wa),Ka=yi(Wa);function vs(r){if(r===Wa)throw Error(t(174));return r}function pd(r,s){switch(We(Ka,s),We(Ga,r),We(cr,Wa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:gt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=gt(s,r)}Xe(cr),We(cr,s)}function ko(){Xe(cr),Xe(Ga),Xe(Ka)}function cg(r){vs(Ka.current);var s=vs(cr.current),l=gt(s,r.type);s!==l&&(We(Ga,r),We(cr,l))}function md(r){Ga.current===r&&(Xe(cr),Xe(Ga))}var tt=yi(0);function ju(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var gd=[];function yd(){for(var r=0;r<gd.length;r++)gd[r]._workInProgressVersionPrimary=null;gd.length=0}var Bu=ie.ReactCurrentDispatcher,vd=ie.ReactCurrentBatchConfig,_s=0,nt=null,vt=null,St=null,zu=!1,Qa=!1,Xa=0,NT=0;function Mt(){throw Error(t(321))}function _d(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!$n(r[l],s[l]))return!1;return!0}function wd(r,s,l,h,f,g){if(_s=g,nt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Bu.current=r===null||r.memoizedState===null?VT:OT,r=l(h,f),Qa){g=0;do{if(Qa=!1,Xa=0,25<=g)throw Error(t(301));g+=1,St=vt=null,s.updateQueue=null,Bu.current=LT,r=l(h,f)}while(Qa)}if(Bu.current=qu,s=vt!==null&&vt.next!==null,_s=0,St=vt=nt=null,zu=!1,s)throw Error(t(300));return r}function Ed(){var r=Xa!==0;return Xa=0,r}function hr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?nt.memoizedState=St=r:St=St.next=r,St}function Rn(){if(vt===null){var r=nt.alternate;r=r!==null?r.memoizedState:null}else r=vt.next;var s=St===null?nt.memoizedState:St.next;if(s!==null)St=s,vt=r;else{if(r===null)throw Error(t(310));vt=r,r={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},St===null?nt.memoizedState=St=r:St=St.next=r}return St}function Ya(r,s){return typeof s=="function"?s(r):s}function Td(r){var s=Rn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=vt,f=h.baseQueue,g=l.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}h.baseQueue=f=g,l.pending=null}if(f!==null){g=f.next,h=h.baseState;var A=w=null,N=null,H=g;do{var J=H.lane;if((_s&J)===J)N!==null&&(N=N.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),h=H.hasEagerState?H.eagerState:r(h,H.action);else{var Z={lane:J,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};N===null?(A=N=Z,w=h):N=N.next=Z,nt.lanes|=J,ws|=J}H=H.next}while(H!==null&&H!==g);N===null?w=h:N.next=A,$n(h,s.memoizedState)||(en=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=N,l.lastRenderedState=h}if(r=l.interleaved,r!==null){f=r;do g=f.lane,nt.lanes|=g,ws|=g,f=f.next;while(f!==r)}else f===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Id(r){var s=Rn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);$n(g,s.memoizedState)||(en=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,h]}function hg(){}function dg(r,s){var l=nt,h=Rn(),f=s(),g=!$n(h.memoizedState,f);if(g&&(h.memoizedState=f,en=!0),h=h.queue,Sd(mg.bind(null,l,h,r),[r]),h.getSnapshot!==s||g||St!==null&&St.memoizedState.tag&1){if(l.flags|=2048,Ja(9,pg.bind(null,l,h,f,s),void 0,null),At===null)throw Error(t(349));(_s&30)!==0||fg(l,s,f)}return f}function fg(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function pg(r,s,l,h){s.value=l,s.getSnapshot=h,gg(s)&&yg(r)}function mg(r,s,l){return l(function(){gg(s)&&yg(r)})}function gg(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!$n(r,l)}catch{return!0}}function yg(r){var s=Fr(r,1);s!==null&&Kn(s,r,1,-1)}function vg(r){var s=hr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:r},s.queue=r,r=r.dispatch=bT.bind(null,nt,r),[s.memoizedState,r]}function Ja(r,s,l,h){return r={tag:r,create:s,destroy:l,deps:h,next:null},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(h=l.next,l.next=r,r.next=h,s.lastEffect=r)),r}function _g(){return Rn().memoizedState}function $u(r,s,l,h){var f=hr();nt.flags|=r,f.memoizedState=Ja(1|s,l,void 0,h===void 0?null:h)}function Hu(r,s,l,h){var f=Rn();h=h===void 0?null:h;var g=void 0;if(vt!==null){var w=vt.memoizedState;if(g=w.destroy,h!==null&&_d(h,w.deps)){f.memoizedState=Ja(s,l,g,h);return}}nt.flags|=r,f.memoizedState=Ja(1|s,l,g,h)}function wg(r,s){return $u(8390656,8,r,s)}function Sd(r,s){return Hu(2048,8,r,s)}function Eg(r,s){return Hu(4,2,r,s)}function Tg(r,s){return Hu(4,4,r,s)}function Ig(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Sg(r,s,l){return l=l!=null?l.concat([r]):null,Hu(4,4,Ig.bind(null,s,r),l)}function Ad(){}function Ag(r,s){var l=Rn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&_d(s,h[1])?h[0]:(l.memoizedState=[r,s],r)}function Rg(r,s){var l=Rn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&_d(s,h[1])?h[0]:(r=r(),l.memoizedState=[r,s],r)}function Cg(r,s,l){return(_s&21)===0?(r.baseState&&(r.baseState=!1,en=!0),r.memoizedState=l):($n(l,s)||(l=ls(),nt.lanes|=l,ws|=l,r.baseState=!0),s)}function xT(r,s){var l=xe;xe=l!==0&&4>l?l:4,r(!0);var h=vd.transition;vd.transition={};try{r(!1),s()}finally{xe=l,vd.transition=h}}function Pg(){return Rn().memoizedState}function DT(r,s,l){var h=Ai(r);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},kg(r))Ng(s,l);else if(l=og(r,s,l,h),l!==null){var f=Kt();Kn(l,r,h,f),xg(l,s,h)}}function bT(r,s,l){var h=Ai(r),f={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(kg(r))Ng(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,A=g(w,l);if(f.hasEagerState=!0,f.eagerState=A,$n(A,w)){var N=s.interleaved;N===null?(f.next=f,dd(s)):(f.next=N.next,N.next=f),s.interleaved=f;return}}catch{}finally{}l=og(r,s,f,h),l!==null&&(f=Kt(),Kn(l,r,h,f),xg(l,s,h))}}function kg(r){var s=r.alternate;return r===nt||s!==null&&s===nt}function Ng(r,s){Qa=zu=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function xg(r,s,l){if((l&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,ci(r,l)}}var qu={readContext:An,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},VT={readContext:An,useCallback:function(r,s){return hr().memoizedState=[r,s===void 0?null:s],r},useContext:An,useEffect:wg,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,$u(4194308,4,Ig.bind(null,s,r),l)},useLayoutEffect:function(r,s){return $u(4194308,4,r,s)},useInsertionEffect:function(r,s){return $u(4,2,r,s)},useMemo:function(r,s){var l=hr();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var h=hr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=DT.bind(null,nt,r),[h.memoizedState,r]},useRef:function(r){var s=hr();return r={current:r},s.memoizedState=r},useState:vg,useDebugValue:Ad,useDeferredValue:function(r){return hr().memoizedState=r},useTransition:function(){var r=vg(!1),s=r[0];return r=xT.bind(null,r[1]),hr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var h=nt,f=hr();if(Ze){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),At===null)throw Error(t(349));(_s&30)!==0||fg(h,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,wg(mg.bind(null,h,g,r),[r]),h.flags|=2048,Ja(9,pg.bind(null,h,g,l,s),void 0,null),l},useId:function(){var r=hr(),s=At.identifierPrefix;if(Ze){var l=Mr,h=Lr;l=(h&~(1<<32-qt(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=Xa++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=NT++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},OT={readContext:An,useCallback:Ag,useContext:An,useEffect:Sd,useImperativeHandle:Sg,useInsertionEffect:Eg,useLayoutEffect:Tg,useMemo:Rg,useReducer:Td,useRef:_g,useState:function(){return Td(Ya)},useDebugValue:Ad,useDeferredValue:function(r){var s=Rn();return Cg(s,vt.memoizedState,r)},useTransition:function(){var r=Td(Ya)[0],s=Rn().memoizedState;return[r,s]},useMutableSource:hg,useSyncExternalStore:dg,useId:Pg,unstable_isNewReconciler:!1},LT={readContext:An,useCallback:Ag,useContext:An,useEffect:Sd,useImperativeHandle:Sg,useInsertionEffect:Eg,useLayoutEffect:Tg,useMemo:Rg,useReducer:Id,useRef:_g,useState:function(){return Id(Ya)},useDebugValue:Ad,useDeferredValue:function(r){var s=Rn();return vt===null?s.memoizedState=r:Cg(s,vt.memoizedState,r)},useTransition:function(){var r=Id(Ya)[0],s=Rn().memoizedState;return[r,s]},useMutableSource:hg,useSyncExternalStore:dg,useId:Pg,unstable_isNewReconciler:!1};function qn(r,s){if(r&&r.defaultProps){s=le({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function Rd(r,s,l,h){s=r.memoizedState,l=l(h,s),l=l==null?s:le({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Wu={isMounted:function(r){return(r=r._reactInternals)?Ln(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var h=Kt(),f=Ai(r),g=Ur(h,f);g.payload=s,l!=null&&(g.callback=l),s=Ei(r,g,f),s!==null&&(Kn(s,r,f,h),Fu(s,r,f))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var h=Kt(),f=Ai(r),g=Ur(h,f);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=Ei(r,g,f),s!==null&&(Kn(s,r,f,h),Fu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Kt(),h=Ai(r),f=Ur(l,h);f.tag=2,s!=null&&(f.callback=s),s=Ei(r,f,h),s!==null&&(Kn(s,r,h,l),Fu(s,r,h))}};function Dg(r,s,l,h,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!Fa(l,h)||!Fa(f,g):!0}function bg(r,s,l){var h=!1,f=vi,g=s.contextType;return typeof g=="object"&&g!==null?g=An(g):(f=Zt(s)?ps:Lt.current,h=s.contextTypes,g=(h=h!=null)?To(r,f):vi),s=new s(l,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Wu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Vg(r,s,l,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==r&&Wu.enqueueReplaceState(s,s.state,null)}function Cd(r,s,l,h){var f=r.stateNode;f.props=l,f.state=r.memoizedState,f.refs={},fd(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=An(g):(g=Zt(s)?ps:Lt.current,f.context=To(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Rd(r,s,g,l),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Wu.enqueueReplaceState(f,f.state,null),Uu(r,l,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function No(r,s){try{var l="",h=s;do l+=Ce(h),h=h.return;while(h);var f=l}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function Pd(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function kd(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var MT=typeof WeakMap=="function"?WeakMap:Map;function Og(r,s,l){l=Ur(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Zu||(Zu=!0,Hd=h),kd(r,s)},l}function Lg(r,s,l){l=Ur(-1,l),l.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;l.payload=function(){return h(f)},l.callback=function(){kd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){kd(r,s),typeof h!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function Mg(r,s,l){var h=r.pingCache;if(h===null){h=r.pingCache=new MT;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(l)||(f.add(l),r=YT.bind(null,r,s,l),s.then(r,r))}function Fg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Ug(r,s,l,h,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Ur(-1,1),s.tag=2,Ei(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var FT=ie.ReactCurrentOwner,en=!1;function Gt(r,s,l,h){s.child=r===null?sg(s,null,l,h):Ro(s,r.child,l,h)}function jg(r,s,l,h,f){l=l.render;var g=s.ref;return Po(s,f),h=wd(r,s,l,h,g,f),l=Ed(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,jr(r,s,f)):(Ze&&l&&rd(s),s.flags|=1,Gt(r,s,h,f),s.child)}function Bg(r,s,l,h,f){if(r===null){var g=l.type;return typeof g=="function"&&!Yd(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,zg(r,s,g,h,f)):(r=sc(l.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var w=g.memoizedProps;if(l=l.compare,l=l!==null?l:Fa,l(w,h)&&r.ref===s.ref)return jr(r,s,f)}return s.flags|=1,r=Ci(g,h),r.ref=s.ref,r.return=s,s.child=r}function zg(r,s,l,h,f){if(r!==null){var g=r.memoizedProps;if(Fa(g,h)&&r.ref===s.ref)if(en=!1,s.pendingProps=h=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(en=!0);else return s.lanes=r.lanes,jr(r,s,f)}return Nd(r,s,l,h,f)}function $g(r,s,l){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Do,pn),pn|=l;else{if((l&1073741824)===0)return r=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(Do,pn),pn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:l,We(Do,pn),pn|=h}else g!==null?(h=g.baseLanes|l,s.memoizedState=null):h=l,We(Do,pn),pn|=h;return Gt(r,s,f,l),s.child}function Hg(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Nd(r,s,l,h,f){var g=Zt(l)?ps:Lt.current;return g=To(s,g),Po(s,f),l=wd(r,s,l,h,g,f),h=Ed(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,jr(r,s,f)):(Ze&&h&&rd(s),s.flags|=1,Gt(r,s,l,f),s.child)}function qg(r,s,l,h,f){if(Zt(l)){var g=!0;Nu(s)}else g=!1;if(Po(s,f),s.stateNode===null)Ku(r,s),bg(s,l,h),Cd(s,l,h,f),h=!0;else if(r===null){var w=s.stateNode,A=s.memoizedProps;w.props=A;var N=w.context,H=l.contextType;typeof H=="object"&&H!==null?H=An(H):(H=Zt(l)?ps:Lt.current,H=To(s,H));var J=l.getDerivedStateFromProps,Z=typeof J=="function"||typeof w.getSnapshotBeforeUpdate=="function";Z||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==h||N!==H)&&Vg(s,w,h,H),wi=!1;var Y=s.memoizedState;w.state=Y,Uu(s,h,w,f),N=s.memoizedState,A!==h||Y!==N||Jt.current||wi?(typeof J=="function"&&(Rd(s,l,J,h),N=s.memoizedState),(A=wi||Dg(s,l,A,h,Y,N,H))?(Z||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=N),w.props=h,w.state=N,w.context=H,h=A):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,ag(r,s),A=s.memoizedProps,H=s.type===s.elementType?A:qn(s.type,A),w.props=H,Z=s.pendingProps,Y=w.context,N=l.contextType,typeof N=="object"&&N!==null?N=An(N):(N=Zt(l)?ps:Lt.current,N=To(s,N));var oe=l.getDerivedStateFromProps;(J=typeof oe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==Z||Y!==N)&&Vg(s,w,h,N),wi=!1,Y=s.memoizedState,w.state=Y,Uu(s,h,w,f);var ce=s.memoizedState;A!==Z||Y!==ce||Jt.current||wi?(typeof oe=="function"&&(Rd(s,l,oe,h),ce=s.memoizedState),(H=wi||Dg(s,l,H,h,Y,ce,N)||!1)?(J||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,ce,N),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,ce,N)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ce),w.props=h,w.state=ce,w.context=N,h=H):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),h=!1)}return xd(r,s,l,h,g,f)}function xd(r,s,l,h,f,g){Hg(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return f&&Xm(s,l,!1),jr(r,s,g);h=s.stateNode,FT.current=s;var A=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=Ro(s,r.child,null,g),s.child=Ro(s,null,A,g)):Gt(r,s,A,g),s.memoizedState=h.state,f&&Xm(s,l,!0),s.child}function Wg(r){var s=r.stateNode;s.pendingContext?Km(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Km(r,s.context,!1),pd(r,s.containerInfo)}function Gg(r,s,l,h,f){return Ao(),ad(f),s.flags|=256,Gt(r,s,l,h),s.child}var Dd={dehydrated:null,treeContext:null,retryLane:0};function bd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Kg(r,s,l){var h=s.pendingProps,f=tt.current,g=!1,w=(s.flags&128)!==0,A;if((A=w)||(A=r!==null&&r.memoizedState===null?!1:(f&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),We(tt,f&1),r===null)return od(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=h.children,r=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=oc(w,h,0,null),r=Ss(r,h,l,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=bd(l),s.memoizedState=Dd,r):Vd(s,w));if(f=r.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return UT(r,s,w,h,A,f,l);if(g){g=h.fallback,w=s.mode,f=r.child,A=f.sibling;var N={mode:"hidden",children:h.children};return(w&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=N,s.deletions=null):(h=Ci(f,N),h.subtreeFlags=f.subtreeFlags&14680064),A!==null?g=Ci(A,g):(g=Ss(g,w,l,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=r.child.memoizedState,w=w===null?bd(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~l,s.memoizedState=Dd,h}return g=r.child,r=g.sibling,h=Ci(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=h,s.memoizedState=null,h}function Vd(r,s){return s=oc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Gu(r,s,l,h){return h!==null&&ad(h),Ro(s,r.child,null,l),r=Vd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function UT(r,s,l,h,f,g,w){if(l)return s.flags&256?(s.flags&=-257,h=Pd(Error(t(422))),Gu(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=oc({mode:"visible",children:h.children},f,0,null),g=Ss(g,f,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&Ro(s,r.child,null,w),s.child.memoizedState=bd(w),s.memoizedState=Dd,g);if((s.mode&1)===0)return Gu(r,s,w,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var A=h.dgst;return h=A,g=Error(t(419)),h=Pd(g,h,void 0),Gu(r,s,w,h)}if(A=(w&r.childLanes)!==0,en||A){if(h=At,h!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|w))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Fr(r,f),Kn(h,r,f,-1))}return Xd(),h=Pd(Error(t(421))),Gu(r,s,w,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=JT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,fn=gi(f.nextSibling),dn=s,Ze=!0,Hn=null,r!==null&&(In[Sn++]=Lr,In[Sn++]=Mr,In[Sn++]=ms,Lr=r.id,Mr=r.overflow,ms=s),s=Vd(s,h.children),s.flags|=4096,s)}function Qg(r,s,l){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),hd(r.return,s,l)}function Od(r,s,l,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=l,g.tailMode=f)}function Xg(r,s,l){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Gt(r,s,h.children,l),h=tt.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Qg(r,l,s);else if(r.tag===19)Qg(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(We(tt,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(l=s.child,f=null;l!==null;)r=l.alternate,r!==null&&ju(r)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),Od(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&ju(r)===null){s.child=f;break}r=f.sibling,f.sibling=l,l=f,f=r}Od(s,!0,l,null,g);break;case"together":Od(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ku(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function jr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),ws|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=Ci(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=Ci(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function jT(r,s,l){switch(s.tag){case 3:Wg(s),Ao();break;case 5:cg(s);break;case 1:Zt(s.type)&&Nu(s);break;case 4:pd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;We(Lu,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(We(tt,tt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Kg(r,s,l):(We(tt,tt.current&1),r=jr(r,s,l),r!==null?r.sibling:null);We(tt,tt.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(r.flags&128)!==0){if(h)return Xg(r,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),We(tt,tt.current),h)break;return null;case 22:case 23:return s.lanes=0,$g(r,s,l)}return jr(r,s,l)}var Yg,Ld,Jg,Zg;Yg=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ld=function(){},Jg=function(r,s,l,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,vs(cr.current);var g=null;switch(l){case"input":f=Yi(r,f),h=Yi(r,h),g=[];break;case"select":f=le({},f,{value:void 0}),h=le({},h,{value:void 0}),g=[];break;case"textarea":f=fa(r,f),h=fa(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=Cu)}_a(l,h);var w;l=null;for(H in f)if(!h.hasOwnProperty(H)&&f.hasOwnProperty(H)&&f[H]!=null)if(H==="style"){var A=f[H];for(w in A)A.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(o.hasOwnProperty(H)?g||(g=[]):(g=g||[]).push(H,null));for(H in h){var N=h[H];if(A=f!=null?f[H]:void 0,h.hasOwnProperty(H)&&N!==A&&(N!=null||A!=null))if(H==="style")if(A){for(w in A)!A.hasOwnProperty(w)||N&&N.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in N)N.hasOwnProperty(w)&&A[w]!==N[w]&&(l||(l={}),l[w]=N[w])}else l||(g||(g=[]),g.push(H,l)),l=N;else H==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,A=A?A.__html:void 0,N!=null&&A!==N&&(g=g||[]).push(H,N)):H==="children"?typeof N!="string"&&typeof N!="number"||(g=g||[]).push(H,""+N):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(o.hasOwnProperty(H)?(N!=null&&H==="onScroll"&&Qe("scroll",r),g||A===N||(g=[])):(g=g||[]).push(H,N))}l&&(g=g||[]).push("style",l);var H=g;(s.updateQueue=H)&&(s.flags|=4)}},Zg=function(r,s,l,h){l!==h&&(s.flags|=4)};function Za(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,h=0;if(s)for(var f=r.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=l,s}function BT(r,s,l){var h=s.pendingProps;switch(id(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return Zt(s.type)&&ku(),Ft(s),null;case 3:return h=s.stateNode,ko(),Xe(Jt),Xe(Lt),yd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Vu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Hn!==null&&(Gd(Hn),Hn=null))),Ld(r,s),Ft(s),null;case 5:md(s);var f=vs(Ka.current);if(l=s.type,r!==null&&s.stateNode!=null)Jg(r,s,l,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(r=vs(cr.current),Vu(s)){h=s.stateNode,l=s.type;var g=s.memoizedProps;switch(h[ur]=s,h[$a]=g,r=(s.mode&1)!==0,l){case"dialog":Qe("cancel",h),Qe("close",h);break;case"iframe":case"object":case"embed":Qe("load",h);break;case"video":case"audio":for(f=0;f<ja.length;f++)Qe(ja[f],h);break;case"source":Qe("error",h);break;case"img":case"image":case"link":Qe("error",h),Qe("load",h);break;case"details":Qe("toggle",h);break;case"input":$s(h,g),Qe("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Qe("invalid",h);break;case"textarea":qs(h,g),Qe("invalid",h)}_a(l,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var A=g[w];w==="children"?typeof A=="string"?h.textContent!==A&&(g.suppressHydrationWarning!==!0&&Ru(h.textContent,A,r),f=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&Ru(h.textContent,A,r),f=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&Qe("scroll",h)}switch(l){case"input":Sr(h),Jl(h,g,!0);break;case"textarea":Sr(h),pa(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=Cu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=mt(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(l,{is:h.is}):(r=w.createElement(l),l==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,l),r[ur]=s,r[$a]=h,Yg(r,s,!1,!1),s.stateNode=r;e:{switch(w=wa(l,h),l){case"dialog":Qe("cancel",r),Qe("close",r),f=h;break;case"iframe":case"object":case"embed":Qe("load",r),f=h;break;case"video":case"audio":for(f=0;f<ja.length;f++)Qe(ja[f],r);f=h;break;case"source":Qe("error",r),f=h;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),f=h;break;case"details":Qe("toggle",r),f=h;break;case"input":$s(r,h),f=Yi(r,h),Qe("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=le({},h,{value:void 0}),Qe("invalid",r);break;case"textarea":qs(r,h),f=fa(r,h),Qe("invalid",r);break;default:f=h}_a(l,f),A=f;for(g in A)if(A.hasOwnProperty(g)){var N=A[g];g==="style"?ya(r,N):g==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&ma(r,N)):g==="children"?typeof N=="string"?(l!=="textarea"||N!=="")&&si(r,N):typeof N=="number"&&si(r,""+N):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?N!=null&&g==="onScroll"&&Qe("scroll",r):N!=null&&X(r,g,N,w))}switch(l){case"input":Sr(r),Jl(r,h,!1);break;case"textarea":Sr(r),pa(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Fe(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?Rr(r,!!h.multiple,g,!1):h.defaultValue!=null&&Rr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Cu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(r&&s.stateNode!=null)Zg(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=vs(Ka.current),vs(cr.current),Vu(s)){if(h=s.stateNode,l=s.memoizedProps,h[ur]=s,(g=h.nodeValue!==l)&&(r=dn,r!==null))switch(r.tag){case 3:Ru(h.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Ru(h.nodeValue,l,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[ur]=s,s.stateNode=h}return Ft(s),null;case 13:if(Xe(tt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ze&&fn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)ng(),Ao(),s.flags|=98560,g=!1;else if(g=Vu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[ur]=s}else Ao(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ft(s),g=!1}else Hn!==null&&(Gd(Hn),Hn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(tt.current&1)!==0?_t===0&&(_t=3):Xd())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return ko(),Ld(r,s),r===null&&Ba(s.stateNode.containerInfo),Ft(s),null;case 10:return cd(s.type._context),Ft(s),null;case 17:return Zt(s.type)&&ku(),Ft(s),null;case 19:if(Xe(tt),g=s.memoizedState,g===null)return Ft(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)Za(g,!1);else{if(_t!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=ju(r),w!==null){for(s.flags|=128,Za(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)g=l,r=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return We(tt,tt.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>bo&&(s.flags|=128,h=!0,Za(g,!1),s.lanes=4194304)}else{if(!h)if(r=ju(w),r!==null){if(s.flags|=128,h=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Za(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Ze)return Ft(s),null}else 2*qe()-g.renderingStartTime>bo&&l!==1073741824&&(s.flags|=128,h=!0,Za(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(l=g.last,l!==null?l.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,l=tt.current,We(tt,h?l&1|2:l&1),s):(Ft(s),null);case 22:case 23:return Qd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(pn&1073741824)!==0&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function zT(r,s){switch(id(s),s.tag){case 1:return Zt(s.type)&&ku(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return ko(),Xe(Jt),Xe(Lt),yd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return md(s),null;case 13:if(Xe(tt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Ao()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Xe(tt),null;case 4:return ko(),null;case 10:return cd(s.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var Qu=!1,Ut=!1,$T=typeof WeakSet=="function"?WeakSet:Set,ue=null;function xo(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){st(r,s,h)}else l.current=null}function Md(r,s,l){try{l()}catch(h){st(r,s,h)}}var ey=!1;function HT(r,s){if(Qh=fi,r=Dm(),Bh(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var w=0,A=-1,N=-1,H=0,J=0,Z=r,Y=null;t:for(;;){for(var oe;Z!==l||f!==0&&Z.nodeType!==3||(A=w+f),Z!==g||h!==0&&Z.nodeType!==3||(N=w+h),Z.nodeType===3&&(w+=Z.nodeValue.length),(oe=Z.firstChild)!==null;)Y=Z,Z=oe;for(;;){if(Z===r)break t;if(Y===l&&++H===f&&(A=w),Y===g&&++J===h&&(N=w),(oe=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=oe}l=A===-1||N===-1?null:{start:A,end:N}}else l=null}l=l||{start:0,end:0}}else l=null;for(Xh={focusedElem:r,selectionRange:l},fi=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var ce=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,at=ce.memoizedState,B=s.stateNode,b=B.getSnapshotBeforeUpdate(s.elementType===s.type?he:qn(s.type,he),at);B.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var $=s.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){st(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return ce=ey,ey=!1,ce}function el(r,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&Md(s,l,g)}f=f.next}while(f!==h)}}function Xu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Fd(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function ty(r){var s=r.alternate;s!==null&&(r.alternate=null,ty(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[ur],delete s[$a],delete s[ed],delete s[RT],delete s[CT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function ny(r){return r.tag===5||r.tag===3||r.tag===4}function ry(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||ny(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ud(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Cu));else if(h!==4&&(r=r.child,r!==null))for(Ud(r,s,l),r=r.sibling;r!==null;)Ud(r,s,l),r=r.sibling}function jd(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(jd(r,s,l),r=r.sibling;r!==null;)jd(r,s,l),r=r.sibling}var Dt=null,Wn=!1;function Ti(r,s,l){for(l=l.child;l!==null;)iy(r,s,l),l=l.sibling}function iy(r,s,l){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(os,l)}catch{}switch(l.tag){case 5:Ut||xo(l,s);case 6:var h=Dt,f=Wn;Dt=null,Ti(r,s,l),Dt=h,Wn=f,Dt!==null&&(Wn?(r=Dt,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Dt.removeChild(l.stateNode));break;case 18:Dt!==null&&(Wn?(r=Dt,l=l.stateNode,r.nodeType===8?Zh(r.parentNode,l):r.nodeType===1&&Zh(r,l),Bn(r)):Zh(Dt,l.stateNode));break;case 4:h=Dt,f=Wn,Dt=l.stateNode.containerInfo,Wn=!0,Ti(r,s,l),Dt=h,Wn=f;break;case 0:case 11:case 14:case 15:if(!Ut&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&Md(l,s,w),f=f.next}while(f!==h)}Ti(r,s,l);break;case 1:if(!Ut&&(xo(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(A){st(l,s,A)}Ti(r,s,l);break;case 21:Ti(r,s,l);break;case 22:l.mode&1?(Ut=(h=Ut)||l.memoizedState!==null,Ti(r,s,l),Ut=h):Ti(r,s,l);break;default:Ti(r,s,l)}}function sy(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new $T),s.forEach(function(h){var f=ZT.bind(null,r,h);l.has(h)||(l.add(h),h.then(f,f))})}}function Gn(r,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var f=l[h];try{var g=r,w=s,A=w;e:for(;A!==null;){switch(A.tag){case 5:Dt=A.stateNode,Wn=!1;break e;case 3:Dt=A.stateNode.containerInfo,Wn=!0;break e;case 4:Dt=A.stateNode.containerInfo,Wn=!0;break e}A=A.return}if(Dt===null)throw Error(t(160));iy(g,w,f),Dt=null,Wn=!1;var N=f.alternate;N!==null&&(N.return=null),f.return=null}catch(H){st(f,s,H)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)oy(s,r),s=s.sibling}function oy(r,s){var l=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Gn(s,r),dr(r),h&4){try{el(3,r,r.return),Xu(3,r)}catch(he){st(r,r.return,he)}try{el(5,r,r.return)}catch(he){st(r,r.return,he)}}break;case 1:Gn(s,r),dr(r),h&512&&l!==null&&xo(l,l.return);break;case 5:if(Gn(s,r),dr(r),h&512&&l!==null&&xo(l,l.return),r.flags&32){var f=r.stateNode;try{si(f,"")}catch(he){st(r,r.return,he)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=l!==null?l.memoizedProps:g,A=r.type,N=r.updateQueue;if(r.updateQueue=null,N!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&ha(f,g),wa(A,w);var H=wa(A,g);for(w=0;w<N.length;w+=2){var J=N[w],Z=N[w+1];J==="style"?ya(f,Z):J==="dangerouslySetInnerHTML"?ma(f,Z):J==="children"?si(f,Z):X(f,J,Z,H)}switch(A){case"input":da(f,g);break;case"textarea":Ws(f,g);break;case"select":var Y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var oe=g.value;oe!=null?Rr(f,!!g.multiple,oe,!1):Y!==!!g.multiple&&(g.defaultValue!=null?Rr(f,!!g.multiple,g.defaultValue,!0):Rr(f,!!g.multiple,g.multiple?[]:"",!1))}f[$a]=g}catch(he){st(r,r.return,he)}}break;case 6:if(Gn(s,r),dr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(he){st(r,r.return,he)}}break;case 3:if(Gn(s,r),dr(r),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Bn(s.containerInfo)}catch(he){st(r,r.return,he)}break;case 4:Gn(s,r),dr(r);break;case 13:Gn(s,r),dr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||($d=qe())),h&4&&sy(r);break;case 22:if(J=l!==null&&l.memoizedState!==null,r.mode&1?(Ut=(H=Ut)||J,Gn(s,r),Ut=H):Gn(s,r),dr(r),h&8192){if(H=r.memoizedState!==null,(r.stateNode.isHidden=H)&&!J&&(r.mode&1)!==0)for(ue=r,J=r.child;J!==null;){for(Z=ue=J;ue!==null;){switch(Y=ue,oe=Y.child,Y.tag){case 0:case 11:case 14:case 15:el(4,Y,Y.return);break;case 1:xo(Y,Y.return);var ce=Y.stateNode;if(typeof ce.componentWillUnmount=="function"){h=Y,l=Y.return;try{s=h,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){st(h,l,he)}}break;case 5:xo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){uy(Z);continue}}oe!==null?(oe.return=Y,ue=oe):uy(Z)}J=J.sibling}e:for(J=null,Z=r;;){if(Z.tag===5){if(J===null){J=Z;try{f=Z.stateNode,H?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=Z.stateNode,N=Z.memoizedProps.style,w=N!=null&&N.hasOwnProperty("display")?N.display:null,A.style.display=ga("display",w))}catch(he){st(r,r.return,he)}}}else if(Z.tag===6){if(J===null)try{Z.stateNode.nodeValue=H?"":Z.memoizedProps}catch(he){st(r,r.return,he)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;J===Z&&(J=null),Z=Z.return}J===Z&&(J=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Gn(s,r),dr(r),h&4&&sy(r);break;case 21:break;default:Gn(s,r),dr(r)}}function dr(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(ny(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(si(f,""),h.flags&=-33);var g=ry(r);jd(r,g,f);break;case 3:case 4:var w=h.stateNode.containerInfo,A=ry(r);Ud(r,A,w);break;default:throw Error(t(161))}}catch(N){st(r,r.return,N)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function qT(r,s,l){ue=r,ay(r)}function ay(r,s,l){for(var h=(r.mode&1)!==0;ue!==null;){var f=ue,g=f.child;if(f.tag===22&&h){var w=f.memoizedState!==null||Qu;if(!w){var A=f.alternate,N=A!==null&&A.memoizedState!==null||Ut;A=Qu;var H=Ut;if(Qu=w,(Ut=N)&&!H)for(ue=f;ue!==null;)w=ue,N=w.child,w.tag===22&&w.memoizedState!==null?cy(f):N!==null?(N.return=w,ue=N):cy(f);for(;g!==null;)ue=g,ay(g),g=g.sibling;ue=f,Qu=A,Ut=H}ly(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,ue=g):ly(r)}}function ly(r){for(;ue!==null;){var s=ue;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ut||Xu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Ut)if(l===null)h.componentDidMount();else{var f=s.elementType===s.type?l.memoizedProps:qn(s.type,l.memoizedProps);h.componentDidUpdate(f,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&ug(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}ug(s,w,l)}break;case 5:var A=s.stateNode;if(l===null&&s.flags&4){l=A;var N=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&l.focus();break;case"img":N.src&&(l.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var H=s.alternate;if(H!==null){var J=H.memoizedState;if(J!==null){var Z=J.dehydrated;Z!==null&&Bn(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&Fd(s)}catch(Y){st(s,s.return,Y)}}if(s===r){ue=null;break}if(l=s.sibling,l!==null){l.return=s.return,ue=l;break}ue=s.return}}function uy(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ue=l;break}ue=s.return}}function cy(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Xu(4,s)}catch(N){st(s,l,N)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(N){st(s,f,N)}}var g=s.return;try{Fd(s)}catch(N){st(s,g,N)}break;case 5:var w=s.return;try{Fd(s)}catch(N){st(s,w,N)}}}catch(N){st(s,s.return,N)}if(s===r){ue=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ue=A;break}ue=s.return}}var WT=Math.ceil,Yu=ie.ReactCurrentDispatcher,Bd=ie.ReactCurrentOwner,Cn=ie.ReactCurrentBatchConfig,Oe=0,At=null,ht=null,bt=0,pn=0,Do=yi(0),_t=0,tl=null,ws=0,Ju=0,zd=0,nl=null,tn=null,$d=0,bo=1/0,Br=null,Zu=!1,Hd=null,Ii=null,ec=!1,Si=null,tc=0,rl=0,qd=null,nc=-1,rc=0;function Kt(){return(Oe&6)!==0?qe():nc!==-1?nc:nc=qe()}function Ai(r){return(r.mode&1)===0?1:(Oe&2)!==0&&bt!==0?bt&-bt:kT.transition!==null?(rc===0&&(rc=ls()),rc):(r=xe,r!==0||(r=window.event,r=r===void 0?16:xa(r.type)),r)}function Kn(r,s,l,h){if(50<rl)throw rl=0,qd=null,Error(t(185));ui(r,l,h),((Oe&2)===0||r!==At)&&(r===At&&((Oe&2)===0&&(Ju|=l),_t===4&&Ri(r,bt)),nn(r,h),l===1&&Oe===0&&(s.mode&1)===0&&(bo=qe()+500,xu&&_i()))}function nn(r,s){var l=r.callbackNode;kr(r,s);var h=as(r,r===At?bt:0);if(h===0)l!==null&&Ra(l),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(l!=null&&Ra(l),s===1)r.tag===0?PT(dy.bind(null,r)):Ym(dy.bind(null,r)),ST(function(){(Oe&6)===0&&_i()}),l=null;else{switch(hi(h)){case 1:l=ss;break;case 4:l=oi;break;case 16:l=wn;break;case 536870912:l=ru;break;default:l=wn}l=wy(l,hy.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function hy(r,s){if(nc=-1,rc=0,(Oe&6)!==0)throw Error(t(327));var l=r.callbackNode;if(Vo()&&r.callbackNode!==l)return null;var h=as(r,r===At?bt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=ic(r,h);else{s=h;var f=Oe;Oe|=2;var g=py();(At!==r||bt!==s)&&(Br=null,bo=qe()+500,Ts(r,s));do try{QT();break}catch(A){fy(r,A)}while(!0);ud(),Yu.current=g,Oe=f,ht!==null?s=0:(At=null,bt=0,s=_t)}if(s!==0){if(s===2&&(f=un(r),f!==0&&(h=f,s=Wd(r,f))),s===1)throw l=tl,Ts(r,0),Ri(r,h),nn(r,qe()),l;if(s===6)Ri(r,h);else{if(f=r.current.alternate,(h&30)===0&&!GT(f)&&(s=ic(r,h),s===2&&(g=un(r),g!==0&&(h=g,s=Wd(r,g))),s===1))throw l=tl,Ts(r,0),Ri(r,h),nn(r,qe()),l;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Is(r,tn,Br);break;case 3:if(Ri(r,h),(h&130023424)===h&&(s=$d+500-qe(),10<s)){if(as(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){Kt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Jh(Is.bind(null,r,tn,Br),s);break}Is(r,tn,Br);break;case 4:if(Ri(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var w=31-qt(h);g=1<<w,w=s[w],w>f&&(f=w),h&=~g}if(h=f,h=qe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*WT(h/1960))-h,10<h){r.timeoutHandle=Jh(Is.bind(null,r,tn,Br),h);break}Is(r,tn,Br);break;case 5:Is(r,tn,Br);break;default:throw Error(t(329))}}}return nn(r,qe()),r.callbackNode===l?hy.bind(null,r):null}function Wd(r,s){var l=nl;return r.current.memoizedState.isDehydrated&&(Ts(r,s).flags|=256),r=ic(r,s),r!==2&&(s=tn,tn=l,s!==null&&Gd(s)),r}function Gd(r){tn===null?tn=r:tn.push.apply(tn,r)}function GT(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var f=l[h],g=f.getSnapshot;f=f.value;try{if(!$n(g(),f))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ri(r,s){for(s&=~zd,s&=~Ju,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-qt(s),h=1<<l;r[l]=-1,s&=~h}}function dy(r){if((Oe&6)!==0)throw Error(t(327));Vo();var s=as(r,0);if((s&1)===0)return nn(r,qe()),null;var l=ic(r,s);if(r.tag!==0&&l===2){var h=un(r);h!==0&&(s=h,l=Wd(r,h))}if(l===1)throw l=tl,Ts(r,0),Ri(r,s),nn(r,qe()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Is(r,tn,Br),nn(r,qe()),null}function Kd(r,s){var l=Oe;Oe|=1;try{return r(s)}finally{Oe=l,Oe===0&&(bo=qe()+500,xu&&_i())}}function Es(r){Si!==null&&Si.tag===0&&(Oe&6)===0&&Vo();var s=Oe;Oe|=1;var l=Cn.transition,h=xe;try{if(Cn.transition=null,xe=1,r)return r()}finally{xe=h,Cn.transition=l,Oe=s,(Oe&6)===0&&_i()}}function Qd(){pn=Do.current,Xe(Do)}function Ts(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,IT(l)),ht!==null)for(l=ht.return;l!==null;){var h=l;switch(id(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&ku();break;case 3:ko(),Xe(Jt),Xe(Lt),yd();break;case 5:md(h);break;case 4:ko();break;case 13:Xe(tt);break;case 19:Xe(tt);break;case 10:cd(h.type._context);break;case 22:case 23:Qd()}l=l.return}if(At=r,ht=r=Ci(r.current,null),bt=pn=s,_t=0,tl=null,zd=Ju=ws=0,tn=nl=null,ys!==null){for(s=0;s<ys.length;s++)if(l=ys[s],h=l.interleaved,h!==null){l.interleaved=null;var f=h.next,g=l.pending;if(g!==null){var w=g.next;g.next=f,h.next=w}l.pending=h}ys=null}return r}function fy(r,s){do{var l=ht;try{if(ud(),Bu.current=qu,zu){for(var h=nt.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}zu=!1}if(_s=0,St=vt=nt=null,Qa=!1,Xa=0,Bd.current=null,l===null||l.return===null){_t=1,tl=s,ht=null;break}e:{var g=r,w=l.return,A=l,N=s;if(s=bt,A.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var H=N,J=A,Z=J.tag;if((J.mode&1)===0&&(Z===0||Z===11||Z===15)){var Y=J.alternate;Y?(J.updateQueue=Y.updateQueue,J.memoizedState=Y.memoizedState,J.lanes=Y.lanes):(J.updateQueue=null,J.memoizedState=null)}var oe=Fg(w);if(oe!==null){oe.flags&=-257,Ug(oe,w,A,g,s),oe.mode&1&&Mg(g,H,s),s=oe,N=H;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(N),s.updateQueue=he}else ce.add(N);break e}else{if((s&1)===0){Mg(g,H,s),Xd();break e}N=Error(t(426))}}else if(Ze&&A.mode&1){var at=Fg(w);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),Ug(at,w,A,g,s),ad(No(N,A));break e}}g=N=No(N,A),_t!==4&&(_t=2),nl===null?nl=[g]:nl.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var B=Og(g,N,s);lg(g,B);break e;case 1:A=N;var b=g.type,$=g.stateNode;if((g.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Ii===null||!Ii.has($)))){g.flags|=65536,s&=-s,g.lanes|=s;var te=Lg(g,A,s);lg(g,te);break e}}g=g.return}while(g!==null)}gy(l)}catch(de){s=de,ht===l&&l!==null&&(ht=l=l.return);continue}break}while(!0)}function py(){var r=Yu.current;return Yu.current=qu,r===null?qu:r}function Xd(){(_t===0||_t===3||_t===2)&&(_t=4),At===null||(ws&268435455)===0&&(Ju&268435455)===0||Ri(At,bt)}function ic(r,s){var l=Oe;Oe|=2;var h=py();(At!==r||bt!==s)&&(Br=null,Ts(r,s));do try{KT();break}catch(f){fy(r,f)}while(!0);if(ud(),Oe=l,Yu.current=h,ht!==null)throw Error(t(261));return At=null,bt=0,_t}function KT(){for(;ht!==null;)my(ht)}function QT(){for(;ht!==null&&!tu();)my(ht)}function my(r){var s=_y(r.alternate,r,pn);r.memoizedProps=r.pendingProps,s===null?gy(r):ht=s,Bd.current=null}function gy(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=BT(l,s,pn),l!==null){ht=l;return}}else{if(l=zT(l,s),l!==null){l.flags&=32767,ht=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{_t=6,ht=null;return}}if(s=s.sibling,s!==null){ht=s;return}ht=s=r}while(s!==null);_t===0&&(_t=5)}function Is(r,s,l){var h=xe,f=Cn.transition;try{Cn.transition=null,xe=1,XT(r,s,l,h)}finally{Cn.transition=f,xe=h}return null}function XT(r,s,l,h){do Vo();while(Si!==null);if((Oe&6)!==0)throw Error(t(327));l=r.finishedWork;var f=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=l.lanes|l.childLanes;if(ze(r,g),r===At&&(ht=At=null,bt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ec||(ec=!0,wy(wn,function(){return Vo(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=Cn.transition,Cn.transition=null;var w=xe;xe=1;var A=Oe;Oe|=4,Bd.current=null,HT(r,l),oy(l,r),gT(Xh),fi=!!Qh,Xh=Qh=null,r.current=l,qT(l),bh(),Oe=A,xe=w,Cn.transition=g}else r.current=l;if(ec&&(ec=!1,Si=r,tc=f),g=r.pendingLanes,g===0&&(Ii=null),iu(l.stateNode),nn(r,qe()),s!==null)for(h=r.onRecoverableError,l=0;l<s.length;l++)f=s[l],h(f.value,{componentStack:f.stack,digest:f.digest});if(Zu)throw Zu=!1,r=Hd,Hd=null,r;return(tc&1)!==0&&r.tag!==0&&Vo(),g=r.pendingLanes,(g&1)!==0?r===qd?rl++:(rl=0,qd=r):rl=0,_i(),null}function Vo(){if(Si!==null){var r=hi(tc),s=Cn.transition,l=xe;try{if(Cn.transition=null,xe=16>r?16:r,Si===null)var h=!1;else{if(r=Si,Si=null,tc=0,(Oe&6)!==0)throw Error(t(331));var f=Oe;for(Oe|=4,ue=r.current;ue!==null;){var g=ue,w=g.child;if((ue.flags&16)!==0){var A=g.deletions;if(A!==null){for(var N=0;N<A.length;N++){var H=A[N];for(ue=H;ue!==null;){var J=ue;switch(J.tag){case 0:case 11:case 15:el(8,J,g)}var Z=J.child;if(Z!==null)Z.return=J,ue=Z;else for(;ue!==null;){J=ue;var Y=J.sibling,oe=J.return;if(ty(J),J===H){ue=null;break}if(Y!==null){Y.return=oe,ue=Y;break}ue=oe}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var at=he.sibling;he.sibling=null,he=at}while(he!==null)}}ue=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,ue=w;else e:for(;ue!==null;){if(g=ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:el(9,g,g.return)}var B=g.sibling;if(B!==null){B.return=g.return,ue=B;break e}ue=g.return}}var b=r.current;for(ue=b;ue!==null;){w=ue;var $=w.child;if((w.subtreeFlags&2064)!==0&&$!==null)$.return=w,ue=$;else e:for(w=b;ue!==null;){if(A=ue,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Xu(9,A)}}catch(de){st(A,A.return,de)}if(A===w){ue=null;break e}var te=A.sibling;if(te!==null){te.return=A.return,ue=te;break e}ue=A.return}}if(Oe=f,_i(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(os,r)}catch{}h=!0}return h}finally{xe=l,Cn.transition=s}}return!1}function yy(r,s,l){s=No(l,s),s=Og(r,s,1),r=Ei(r,s,1),s=Kt(),r!==null&&(ui(r,1,s),nn(r,s))}function st(r,s,l){if(r.tag===3)yy(r,r,l);else for(;s!==null;){if(s.tag===3){yy(s,r,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ii===null||!Ii.has(h))){r=No(l,r),r=Lg(s,r,1),s=Ei(s,r,1),r=Kt(),s!==null&&(ui(s,1,r),nn(s,r));break}}s=s.return}}function YT(r,s,l){var h=r.pingCache;h!==null&&h.delete(s),s=Kt(),r.pingedLanes|=r.suspendedLanes&l,At===r&&(bt&l)===l&&(_t===4||_t===3&&(bt&130023424)===bt&&500>qe()-$d?Ts(r,0):zd|=l),nn(r,s)}function vy(r,s){s===0&&((r.mode&1)===0?s=1:(s=no,no<<=1,(no&130023424)===0&&(no=4194304)));var l=Kt();r=Fr(r,s),r!==null&&(ui(r,s,l),nn(r,l))}function JT(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),vy(r,l)}function ZT(r,s){var l=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(l=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),vy(r,l)}var _y;_y=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||Jt.current)en=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return en=!1,jT(r,s,l);en=(r.flags&131072)!==0}else en=!1,Ze&&(s.flags&1048576)!==0&&Jm(s,bu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Ku(r,s),r=s.pendingProps;var f=To(s,Lt.current);Po(s,l),f=wd(null,s,h,r,f,l);var g=Ed();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Zt(h)?(g=!0,Nu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,fd(s),f.updater=Wu,s.stateNode=f,f._reactInternals=s,Cd(s,h,r,l),s=xd(null,s,h,!0,g,l)):(s.tag=0,Ze&&g&&rd(s),Gt(null,s,f,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Ku(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=tI(h),r=qn(h,r),f){case 0:s=Nd(null,s,h,r,l);break e;case 1:s=qg(null,s,h,r,l);break e;case 11:s=jg(null,s,h,r,l);break e;case 14:s=Bg(null,s,h,qn(h.type,r),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:qn(h,f),Nd(r,s,h,f,l);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:qn(h,f),qg(r,s,h,f,l);case 3:e:{if(Wg(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,ag(r,s),Uu(s,h,null,l);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=No(Error(t(423)),s),s=Gg(r,s,h,l,f);break e}else if(h!==f){f=No(Error(t(424)),s),s=Gg(r,s,h,l,f);break e}else for(fn=gi(s.stateNode.containerInfo.firstChild),dn=s,Ze=!0,Hn=null,l=sg(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ao(),h===f){s=jr(r,s,l);break e}Gt(r,s,h,l)}s=s.child}return s;case 5:return cg(s),r===null&&od(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,Yh(h,f)?w=null:g!==null&&Yh(h,g)&&(s.flags|=32),Hg(r,s),Gt(r,s,w,l),s.child;case 6:return r===null&&od(s),null;case 13:return Kg(r,s,l);case 4:return pd(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=Ro(s,null,h,l):Gt(r,s,h,l),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:qn(h,f),jg(r,s,h,f,l);case 7:return Gt(r,s,s.pendingProps,l),s.child;case 8:return Gt(r,s,s.pendingProps.children,l),s.child;case 12:return Gt(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,We(Lu,h._currentValue),h._currentValue=w,g!==null)if($n(g.value,w)){if(g.children===f.children&&!Jt.current){s=jr(r,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){w=g.child;for(var N=A.firstContext;N!==null;){if(N.context===h){if(g.tag===1){N=Ur(-1,l&-l),N.tag=2;var H=g.updateQueue;if(H!==null){H=H.shared;var J=H.pending;J===null?N.next=N:(N.next=J.next,J.next=N),H.pending=N}}g.lanes|=l,N=g.alternate,N!==null&&(N.lanes|=l),hd(g.return,l,s),A.lanes|=l;break}N=N.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=l,A=w.alternate,A!==null&&(A.lanes|=l),hd(w,l,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Gt(r,s,f.children,l),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,Po(s,l),f=An(f),h=h(f),s.flags|=1,Gt(r,s,h,l),s.child;case 14:return h=s.type,f=qn(h,s.pendingProps),f=qn(h.type,f),Bg(r,s,h,f,l);case 15:return zg(r,s,s.type,s.pendingProps,l);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:qn(h,f),Ku(r,s),s.tag=1,Zt(h)?(r=!0,Nu(s)):r=!1,Po(s,l),bg(s,h,f),Cd(s,h,f,l),xd(null,s,h,!0,r,l);case 19:return Xg(r,s,l);case 22:return $g(r,s,l)}throw Error(t(156,s.tag))};function wy(r,s){return eo(r,s)}function eI(r,s,l,h){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(r,s,l,h){return new eI(r,s,l,h)}function Yd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function tI(r){if(typeof r=="function")return Yd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===F)return 11;if(r===Ke)return 14}return 2}function Ci(r,s){var l=r.alternate;return l===null?(l=Pn(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function sc(r,s,l,h,f,g){var w=2;if(h=r,typeof r=="function")Yd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case D:return Ss(l.children,f,g,s);case S:w=8,f|=8;break;case P:return r=Pn(12,l,s,f|2),r.elementType=P,r.lanes=g,r;case C:return r=Pn(13,l,s,f),r.elementType=C,r.lanes=g,r;case Ye:return r=Pn(19,l,s,f),r.elementType=Ye,r.lanes=g,r;case Be:return oc(l,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case x:w=10;break e;case V:w=9;break e;case F:w=11;break e;case Ke:w=14;break e;case Ot:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Pn(w,l,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function Ss(r,s,l,h){return r=Pn(7,r,h,s),r.lanes=l,r}function oc(r,s,l,h){return r=Pn(22,r,h,s),r.elementType=Be,r.lanes=l,r.stateNode={isHidden:!1},r}function Jd(r,s,l){return r=Pn(6,r,null,s),r.lanes=l,r}function Zd(r,s,l){return s=Pn(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function nI(r,s,l,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=li(0),this.expirationTimes=li(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=li(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ef(r,s,l,h,f,g,w,A,N){return r=new nI(r,s,l,A,N),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Pn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(g),r}function rI(r,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:h==null?null:""+h,children:r,containerInfo:s,implementation:l}}function Ey(r){if(!r)return vi;r=r._reactInternals;e:{if(Ln(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Zt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Zt(l))return Qm(r,l,s)}return s}function Ty(r,s,l,h,f,g,w,A,N){return r=ef(l,h,!0,r,f,g,w,A,N),r.context=Ey(null),l=r.current,h=Kt(),f=Ai(l),g=Ur(h,f),g.callback=s??null,Ei(l,g,f),r.current.lanes=f,ui(r,f,h),nn(r,h),r}function ac(r,s,l,h){var f=s.current,g=Kt(),w=Ai(f);return l=Ey(l),s.context===null?s.context=l:s.pendingContext=l,s=Ur(g,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=Ei(f,s,w),r!==null&&(Kn(r,f,w,g),Fu(r,f,w)),w}function lc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Iy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function tf(r,s){Iy(r,s),(r=r.alternate)&&Iy(r,s)}function iI(){return null}var Sy=typeof reportError=="function"?reportError:function(r){console.error(r)};function nf(r){this._internalRoot=r}uc.prototype.render=nf.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));ac(r,s,null,null)},uc.prototype.unmount=nf.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Es(function(){ac(null,r,null,null)}),s[Vr]=null}};function uc(r){this._internalRoot=r}uc.prototype.unstable_scheduleHydration=function(r){if(r){var s=uu();r={blockedOn:null,target:r,priority:s};for(var l=0;l<sr.length&&s!==0&&s<sr[l].priority;l++);sr.splice(l,0,r),l===0&&du(r)}};function rf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function cc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Ay(){}function sI(r,s,l,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var H=lc(w);g.call(H)}}var w=Ty(s,h,r,0,null,!1,!1,"",Ay);return r._reactRootContainer=w,r[Vr]=w.current,Ba(r.nodeType===8?r.parentNode:r),Es(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var A=h;h=function(){var H=lc(N);A.call(H)}}var N=ef(r,0,!1,null,null,!1,!1,"",Ay);return r._reactRootContainer=N,r[Vr]=N.current,Ba(r.nodeType===8?r.parentNode:r),Es(function(){ac(s,N,l,h)}),N}function hc(r,s,l,h,f){var g=l._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var A=f;f=function(){var N=lc(w);A.call(N)}}ac(s,w,r,f)}else w=sI(l,s,r,f,h);return lc(w)}au=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=ai(s.pendingLanes);l!==0&&(ci(s,l|1),nn(s,qe()),(Oe&6)===0&&(bo=qe()+500,_i()))}break;case 13:Es(function(){var h=Fr(r,1);if(h!==null){var f=Kt();Kn(h,r,1,f)}}),tf(r,1)}},ro=function(r){if(r.tag===13){var s=Fr(r,134217728);if(s!==null){var l=Kt();Kn(s,r,134217728,l)}tf(r,134217728)}},lu=function(r){if(r.tag===13){var s=Ai(r),l=Fr(r,s);if(l!==null){var h=Kt();Kn(l,r,s,h)}tf(r,s)}},uu=function(){return xe},cu=function(r,s){var l=xe;try{return xe=r,s()}finally{xe=l}},Ks=function(r,s,l){switch(s){case"input":if(da(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==r&&h.form===r.form){var f=Pu(h);if(!f)throw Error(t(90));zs(h),da(h,f)}}}break;case"textarea":Ws(r,l);break;case"select":s=l.value,s!=null&&Rr(r,!!l.multiple,s,!1)}},ts=Kd,Ta=Es;var oI={usingClientEntryPoint:!1,Events:[Ha,wo,Pu,rr,Ea,Kd]},il={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aI={bundleType:il.bundleType,version:il.version,rendererPackageName:il.rendererPackageName,rendererConfig:il.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Aa(r),r===null?null:r.stateNode},findFiberByHostInstance:il.findFiberByHostInstance||iI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{os=dc.inject(aI),ln=dc}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oI,rn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(s))throw Error(t(200));return rI(r,s,null,l)},rn.createRoot=function(r,s){if(!rf(r))throw Error(t(299));var l=!1,h="",f=Sy;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=ef(r,1,!1,null,null,l,!1,h,f),r[Vr]=s.current,Ba(r.nodeType===8?r.parentNode:r),new nf(s)},rn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Aa(s),r=r===null?null:r.stateNode,r},rn.flushSync=function(r){return Es(r)},rn.hydrate=function(r,s,l){if(!cc(s))throw Error(t(200));return hc(null,r,s,!0,l)},rn.hydrateRoot=function(r,s,l){if(!rf(r))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,f=!1,g="",w=Sy;if(l!=null&&(l.unstable_strictMode===!0&&(f=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=Ty(s,null,r,1,l??null,f,!1,g,w),r[Vr]=s.current,Ba(r),h)for(r=0;r<h.length;r++)l=h[r],f=l._getVersion,f=f(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,f]:s.mutableSourceEagerHydrationData.push(l,f);return new uc(s)},rn.render=function(r,s,l){if(!cc(s))throw Error(t(200));return hc(null,r,s,!1,l)},rn.unmountComponentAtNode=function(r){if(!cc(r))throw Error(t(40));return r._reactRootContainer?(Es(function(){hc(null,null,r,!1,function(){r._reactRootContainer=null,r[Vr]=null})}),!0):!1},rn.unstable_batchedUpdates=Kd,rn.unstable_renderSubtreeIntoContainer=function(r,s,l,h){if(!cc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return hc(r,s,l,!1,h)},rn.version="18.3.1-next-f1338f8080-20240426",rn}var by;function mI(){if(by)return af.exports;by=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),af.exports=pI(),af.exports}var Vy;function gI(){if(Vy)return fc;Vy=1;var n=mI();return fc.createRoot=n.createRoot,fc.hydrateRoot=n.hydrateRoot,fc}var yI=gI();const vI=D_(yI);/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Oy="popstate";function Ly(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function _I(n={}){function e(i,o){var y;let a=(y=o.state)==null?void 0:y.masked,{pathname:c,search:d,hash:p}=a||i.location;return Nf("",{pathname:c,search:d,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",a?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function t(i,o){return typeof o=="string"?o:wl(o)}return EI(e,t,null,n)}function et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Dn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wI(){return Math.random().toString(36).substring(2,10)}function My(n,e){return{usr:n.state,key:n.key,idx:e,masked:n.unstable_mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function Nf(n,e,t=null,i,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?ta(e):e,state:t,key:e&&e.key||i||wI(),unstable_mask:o}}function wl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function ta(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function EI(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,d="POP",p=null,y=_();y==null&&(y=0,c.replaceState({...c.state,idx:y},""));function _(){return(c.state||{idx:null}).idx}function E(){d="POP";let L=_(),G=L==null?null:L-y;y=L,p&&p({action:d,location:z.location,delta:G})}function T(L,G){d="PUSH";let ee=Ly(L)?L:Nf(z.location,L,G);y=_()+1;let X=My(ee,y),ie=z.createHref(ee.unstable_mask||ee);try{c.pushState(X,"",ie)}catch(ve){if(ve instanceof DOMException&&ve.name==="DataCloneError")throw ve;o.location.assign(ie)}a&&p&&p({action:d,location:z.location,delta:1})}function k(L,G){d="REPLACE";let ee=Ly(L)?L:Nf(z.location,L,G);y=_();let X=My(ee,y),ie=z.createHref(ee.unstable_mask||ee);c.replaceState(X,"",ie),a&&p&&p({action:d,location:z.location,delta:0})}function j(L){return TI(L)}let z={get action(){return d},get location(){return n(o,c)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Oy,E),p=L,()=>{o.removeEventListener(Oy,E),p=null}},createHref(L){return e(o,L)},createURL:j,encodeLocation(L){let G=j(L);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:T,replace:k,go(L){return c.go(L)}};return z}function TI(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),et(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:wl(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function b_(n,e,t="/"){return II(n,e,t,!1)}function II(n,e,t,i){let o=typeof e=="string"?ta(e):e,a=Qr(o.pathname||"/",t);if(a==null)return null;let c=V_(n);SI(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=OI(a);d=bI(c[p],y,i)}return d}function V_(n,e=[],t=[],i="",o=!1){let a=(c,d,p=o,y)=>{let _={relativePath:y===void 0?c.path||"":y,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(i)&&p)return;et(_.relativePath.startsWith(i),`Absolute route path "${_.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(i.length)}let E=pr([i,_.relativePath]),T=t.concat(_);c.children&&c.children.length>0&&(et(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),V_(c.children,e,T,E,p)),!(c.path==null&&!c.index)&&e.push({path:E,score:xI(E,c.index),routesMeta:T})};return n.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))a(c,d);else for(let y of O_(c.path))a(c,d,!0,y)}),e}function O_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=O_(i.join("/")),d=[];return d.push(...c.map(p=>p===""?a:[a,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function SI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:DI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var AI=/^:[\w-]+$/,RI=3,CI=2,PI=1,kI=10,NI=-2,Fy=n=>n==="*";function xI(n,e){let t=n.split("/"),i=t.length;return t.some(Fy)&&(i+=NI),e&&(i+=CI),t.filter(o=>!Fy(o)).reduce((o,a)=>o+(AI.test(a)?RI:a===""?PI:kI),i)}function DI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function bI(n,e,t=!1){let{routesMeta:i}=n,o={},a="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,_=a==="/"?e:e.slice(a.length)||"/",E=bc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},_),T=p.route;if(!E&&y&&t&&!i[i.length-1].route.index&&(E=bc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!E)return null;Object.assign(o,E.params),c.push({params:o,pathname:pr([a,E.pathname]),pathnameBase:UI(pr([a,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(a=pr([a,E.pathnameBase]))}return c}function bc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=VI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:_,isOptional:E},T)=>{if(_==="*"){let j=d[T]||"";c=a.slice(0,a.length-j.length).replace(/(.)\/+$/,"$1")}const k=d[T];return E&&!k?y[_]=void 0:y[_]=(k||"").replace(/%2F/g,"/"),y},{}),pathname:a,pathnameBase:c,pattern:n}}function VI(n,e=!1,t=!0){Dn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p,y,_)=>{if(i.push({paramName:d,isOptional:p!=null}),p){let E=_.charAt(y+c.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function OI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Dn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Qr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}var LI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function MI(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?ta(n):n,a;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?a=Uy(t.substring(1),"/"):a=Uy(t,e)):a=e,{pathname:a,search:jI(i),hash:BI(o)}}function Uy(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function cf(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function FI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function cp(n){let e=FI(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function nh(n,e,t,i=!1){let o;typeof n=="string"?o=ta(n):(o={...n},et(!o.pathname||!o.pathname.includes("?"),cf("?","pathname","search",o)),et(!o.pathname||!o.pathname.includes("#"),cf("#","pathname","hash",o)),et(!o.search||!o.search.includes("#"),cf("#","search","hash",o)));let a=n===""||o.pathname==="",c=a?"/":o.pathname,d;if(c==null)d=t;else{let E=e.length-1;if(!i&&c.startsWith("..")){let T=c.split("/");for(;T[0]==="..";)T.shift(),E-=1;o.pathname=T.join("/")}d=E>=0?e[E]:"/"}let p=MI(o,d),y=c&&c!=="/"&&c.endsWith("/"),_=(a||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||_)&&(p.pathname+="/"),p}var pr=n=>n.join("/").replace(/\/\/+/g,"/"),UI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),jI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,BI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,zI=class{constructor(n,e,t,i=!1){this.status=n,this.statusText=e||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function $I(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function HI(n){return n.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var L_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function M_(n,e){let t=n;if(typeof t!="string"||!LI.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let i=t,o=!1;if(L_)try{let a=new URL(window.location.href),c=t.startsWith("//")?new URL(a.protocol+t):new URL(t),d=Qr(c.pathname,e);c.origin===a.origin&&d!=null?t=d+c.search+c.hash:o=!0}catch{Dn(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var F_=["POST","PUT","PATCH","DELETE"];new Set(F_);var qI=["GET",...F_];new Set(qI);var na=O.createContext(null);na.displayName="DataRouter";var rh=O.createContext(null);rh.displayName="DataRouterState";var WI=O.createContext(!1),U_=O.createContext({isTransitioning:!1});U_.displayName="ViewTransition";var GI=O.createContext(new Map);GI.displayName="Fetchers";var KI=O.createContext(null);KI.displayName="Await";var vn=O.createContext(null);vn.displayName="Navigation";var bl=O.createContext(null);bl.displayName="Location";var bn=O.createContext({outlet:null,matches:[],isDataRoute:!1});bn.displayName="Route";var hp=O.createContext(null);hp.displayName="RouteError";var j_="REACT_ROUTER_ERROR",QI="REDIRECT",XI="ROUTE_ERROR_RESPONSE";function YI(n){if(n.startsWith(`${j_}:${QI}:{`))try{let e=JSON.parse(n.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function JI(n){if(n.startsWith(`${j_}:${XI}:{`))try{let e=JSON.parse(n.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new zI(e.status,e.statusText,e.data)}catch{}}function ZI(n,{relative:e}={}){et(ra(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=O.useContext(vn),{hash:o,pathname:a,search:c}=Vl(n,{relative:e}),d=a;return t!=="/"&&(d=a==="/"?t:pr([t,a])),i.createHref({pathname:d,search:c,hash:o})}function ra(){return O.useContext(bl)!=null}function Tr(){return et(ra(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(bl).location}var B_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function z_(n){O.useContext(vn).static||O.useLayoutEffect(n)}function tr(){let{isDataRoute:n}=O.useContext(bn);return n?mS():eS()}function eS(){et(ra(),"useNavigate() may be used only in the context of a <Router> component.");let n=O.useContext(na),{basename:e,navigator:t}=O.useContext(vn),{matches:i}=O.useContext(bn),{pathname:o}=Tr(),a=JSON.stringify(cp(i)),c=O.useRef(!1);return z_(()=>{c.current=!0}),O.useCallback((p,y={})=>{if(Dn(c.current,B_),!c.current)return;if(typeof p=="number"){t.go(p);return}let _=nh(p,JSON.parse(a),o,y.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:pr([e,_.pathname])),(y.replace?t.replace:t.push)(_,y.state,y)},[e,t,a,o,n])}var tS=O.createContext(null);function nS(n){let e=O.useContext(bn).outlet;return O.useMemo(()=>e&&O.createElement(tS.Provider,{value:n},e),[e,n])}function rS(){let{matches:n}=O.useContext(bn),e=n[n.length-1];return e?e.params:{}}function Vl(n,{relative:e}={}){let{matches:t}=O.useContext(bn),{pathname:i}=Tr(),o=JSON.stringify(cp(t));return O.useMemo(()=>nh(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function iS(n,e){return $_(n,e)}function $_(n,e,t){var L;et(ra(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=O.useContext(vn),{matches:o}=O.useContext(bn),a=o[o.length-1],c=a?a.params:{},d=a?a.pathname:"/",p=a?a.pathnameBase:"/",y=a&&a.route;{let G=y&&y.path||"";q_(d,!y||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let _=Tr(),E;if(e){let G=typeof e=="string"?ta(e):e;et(p==="/"||((L=G.pathname)==null?void 0:L.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${G.pathname}" was given in the \`location\` prop.`),E=G}else E=_;let T=E.pathname||"/",k=T;if(p!=="/"){let G=p.replace(/^\//,"").split("/");k="/"+T.replace(/^\//,"").split("/").slice(G.length).join("/")}let j=b_(n,{pathname:k});Dn(y||j!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Dn(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=uS(j&&j.map(G=>Object.assign({},G,{params:Object.assign({},c,G.params),pathname:pr([p,i.encodeLocation?i.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?p:pr([p,i.encodeLocation?i.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),o,t);return e&&z?O.createElement(bl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...E},navigationType:"POP"}},z):z}function sS(){let n=pS(),e=$I(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:a},"ErrorBoundary")," or"," ",O.createElement("code",{style:a},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),t?O.createElement("pre",{style:o},t):null,c)}var oS=O.createElement(sS,null),H_=class extends O.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const t=JI(n.digest);t&&(n=t)}let e=n!==void 0?O.createElement(bn.Provider,{value:this.props.routeContext},O.createElement(hp.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?O.createElement(aS,{error:n},e):e}};H_.contextType=WI;var hf=new WeakMap;function aS({children:n,error:e}){let{basename:t}=O.useContext(vn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=YI(e.digest);if(i){let o=hf.get(e);if(o)throw o;let a=M_(i.location,t);if(L_&&!hf.get(e))if(a.isExternal||i.reloadDocument)window.location.href=a.absoluteURL||a.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:i.replace}));throw hf.set(e,c),c}return O.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return n}function lS({routeContext:n,match:e,children:t}){let i=O.useContext(na);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),O.createElement(bn.Provider,{value:n},t)}function uS(n,e=[],t){let i=t==null?void 0:t.state;if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let o=n,a=i==null?void 0:i.errors;if(a!=null){let _=o.findIndex(E=>E.route.id&&(a==null?void 0:a[E.route.id])!==void 0);et(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,_+1))}let c=!1,d=-1;if(t&&i){c=i.renderFallback;for(let _=0;_<o.length;_++){let E=o[_];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(d=_),E.route.id){let{loaderData:T,errors:k}=i,j=E.route.loader&&!T.hasOwnProperty(E.route.id)&&(!k||k[E.route.id]===void 0);if(E.route.lazy||j){t.isStatic&&(c=!0),d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}}let p=t==null?void 0:t.onError,y=i&&p?(_,E)=>{var T,k;p(_,{location:i.location,params:((k=(T=i.matches)==null?void 0:T[0])==null?void 0:k.params)??{},unstable_pattern:HI(i.matches),errorInfo:E})}:void 0;return o.reduceRight((_,E,T)=>{let k,j=!1,z=null,L=null;i&&(k=a&&E.route.id?a[E.route.id]:void 0,z=E.route.errorElement||oS,c&&(d<0&&T===0?(q_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,L=null):d===T&&(j=!0,L=E.route.hydrateFallbackElement||null)));let G=e.concat(o.slice(0,T+1)),ee=()=>{let X;return k?X=z:j?X=L:E.route.Component?X=O.createElement(E.route.Component,null):E.route.element?X=E.route.element:X=_,O.createElement(lS,{match:E,routeContext:{outlet:_,matches:G,isDataRoute:i!=null},children:X})};return i&&(E.route.ErrorBoundary||E.route.errorElement||T===0)?O.createElement(H_,{location:i.location,revalidation:i.revalidation,component:z,error:k,children:ee(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:y}):ee()},null)}function dp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cS(n){let e=O.useContext(na);return et(e,dp(n)),e}function hS(n){let e=O.useContext(rh);return et(e,dp(n)),e}function dS(n){let e=O.useContext(bn);return et(e,dp(n)),e}function fp(n){let e=dS(n),t=e.matches[e.matches.length-1];return et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function fS(){return fp("useRouteId")}function pS(){var i;let n=O.useContext(hp),e=hS("useRouteError"),t=fp("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function mS(){let{router:n}=cS("useNavigate"),e=fp("useNavigate"),t=O.useRef(!1);return z_(()=>{t.current=!0}),O.useCallback(async(o,a={})=>{Dn(t.current,B_),t.current&&(typeof o=="number"?await n.navigate(o):await n.navigate(o,{fromRouteId:e,...a}))},[n,e])}var jy={};function q_(n,e,t){!e&&!jy[n]&&(jy[n]=!0,Dn(!1,t))}O.memo(gS);function gS({routes:n,future:e,state:t,isStatic:i,onError:o}){return $_(n,void 0,{state:t,isStatic:i,onError:o})}function Oo({to:n,replace:e,state:t,relative:i}){et(ra(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=O.useContext(vn);Dn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=O.useContext(bn),{pathname:c}=Tr(),d=tr(),p=nh(n,cp(a),c,i==="path"),y=JSON.stringify(p);return O.useEffect(()=>{d(JSON.parse(y),{replace:e,state:t,relative:i})},[d,y,i,e,t]),null}function yS(n){return nS(n.context)}function sn(n){et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vS({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1,unstable_useTransitions:c}){et(!ra(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=O.useMemo(()=>({basename:d,navigator:o,static:a,unstable_useTransitions:c,future:{}}),[d,o,a,c]);typeof t=="string"&&(t=ta(t));let{pathname:y="/",search:_="",hash:E="",state:T=null,key:k="default",unstable_mask:j}=t,z=O.useMemo(()=>{let L=Qr(y,d);return L==null?null:{location:{pathname:L,search:_,hash:E,state:T,key:k,unstable_mask:j},navigationType:i}},[d,y,_,E,T,k,i,j]);return Dn(z!=null,`<Router basename="${d}"> is not able to match the URL "${y}${_}${E}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:O.createElement(vn.Provider,{value:p},O.createElement(bl.Provider,{children:e,value:z}))}function _S({children:n,location:e}){return iS(xf(n),e)}function xf(n,e=[]){let t=[];return O.Children.forEach(n,(i,o)=>{if(!O.isValidElement(i))return;let a=[...e,o];if(i.type===O.Fragment){t.push.apply(t,xf(i.props.children,a));return}et(i.type===sn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),et(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=xf(i.props.children,a)),t.push(c)}),t}var Tc="get",Ic="application/x-www-form-urlencoded";function ih(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function wS(n){return ih(n)&&n.tagName.toLowerCase()==="button"}function ES(n){return ih(n)&&n.tagName.toLowerCase()==="form"}function TS(n){return ih(n)&&n.tagName.toLowerCase()==="input"}function IS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function SS(n,e){return n.button===0&&(!e||e==="_self")&&!IS(n)}function Df(n=""){return new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((e,t)=>{let i=n[t];return e.concat(Array.isArray(i)?i.map(o=>[t,o]):[[t,i]])},[]))}function AS(n,e){let t=Df(n);return e&&e.forEach((i,o)=>{t.has(o)||e.getAll(o).forEach(a=>{t.append(o,a)})}),t}var pc=null;function RS(){if(pc===null)try{new FormData(document.createElement("form"),0),pc=!1}catch{pc=!0}return pc}var CS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function df(n){return n!=null&&!CS.has(n)?(Dn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ic}"`),null):n}function PS(n,e){let t,i,o,a,c;if(ES(n)){let d=n.getAttribute("action");i=d?Qr(d,e):null,t=n.getAttribute("method")||Tc,o=df(n.getAttribute("enctype"))||Ic,a=new FormData(n)}else if(wS(n)||TS(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Qr(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Tc,o=df(n.getAttribute("formenctype"))||df(d.getAttribute("enctype"))||Ic,a=new FormData(d,n),!RS()){let{name:y,type:_,value:E}=n;if(_==="image"){let T=y?`${y}.`:"";a.append(`${T}x`,"0"),a.append(`${T}y`,"0")}else y&&a.append(y,E)}}else{if(ih(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Tc,i=null,o=Ic,c=n}return a&&o==="text/plain"&&(c=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function kS(n,e,t,i){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${i}`:o.pathname=`${o.pathname}.${i}`:o.pathname==="/"?o.pathname=`_root.${i}`:e&&Qr(o.pathname,e)==="/"?o.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${i}`,o}async function NS(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function DS(n,e,t){let i=await Promise.all(n.map(async o=>{let a=e.routes[o.route.id];if(a){let c=await NS(a,t);return c.links?c.links():[]}return[]}));return LS(i.flat(1).filter(xS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function By(n,e,t,i,o,a){let c=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var _;return t[y].pathname!==p.pathname||((_=t[y].route.path)==null?void 0:_.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,y)=>c(p,y)||d(p,y)):a==="data"?e.filter((p,y)=>{var E;let _=i.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(c(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let T=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((E=t[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function bS(n,e,{includeHydrateFallback:t}={}){return VS(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function VS(n){return[...new Set(n)]}function OS(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function LS(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let a=JSON.stringify(OS(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}function W_(){let n=O.useContext(na);return pp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function MS(){let n=O.useContext(rh);return pp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var mp=O.createContext(void 0);mp.displayName="FrameworkContext";function G_(){let n=O.useContext(mp);return pp(n,"You must render this element inside a <HydratedRouter> element"),n}function FS(n,e){let t=O.useContext(mp),[i,o]=O.useState(!1),[a,c]=O.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:_,onTouchStart:E}=e,T=O.useRef(null);O.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let z=G=>{G.forEach(ee=>{c(ee.isIntersecting)})},L=new IntersectionObserver(z,{threshold:.5});return T.current&&L.observe(T.current),()=>{L.disconnect()}}},[n]),O.useEffect(()=>{if(i){let z=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(z)}}},[i]);let k=()=>{o(!0)},j=()=>{o(!1),c(!1)};return t?n!=="intent"?[a,T,{}]:[a,T,{onFocus:ol(d,k),onBlur:ol(p,j),onMouseEnter:ol(y,k),onMouseLeave:ol(_,j),onTouchStart:ol(E,k)}]:[!1,T,{}]}function ol(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function US({page:n,...e}){let{router:t}=W_(),i=O.useMemo(()=>b_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?O.createElement(BS,{page:n,matches:i,...e}):null}function jS(n){let{manifest:e,routeModules:t}=G_(),[i,o]=O.useState([]);return O.useEffect(()=>{let a=!1;return DS(n,e,t).then(c=>{a||o(c)}),()=>{a=!0}},[n,e,t]),i}function BS({page:n,matches:e,...t}){let i=Tr(),{future:o,manifest:a,routeModules:c}=G_(),{basename:d}=W_(),{loaderData:p,matches:y}=MS(),_=O.useMemo(()=>By(n,e,y,a,i,"data"),[n,e,y,a,i]),E=O.useMemo(()=>By(n,e,y,a,i,"assets"),[n,e,y,a,i]),T=O.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let z=new Set,L=!1;if(e.forEach(ee=>{var ie;let X=a.routes[ee.route.id];!X||!X.hasLoader||(!_.some(ve=>ve.route.id===ee.route.id)&&ee.route.id in p&&((ie=c[ee.route.id])!=null&&ie.shouldRevalidate)||X.hasClientLoader?L=!0:z.add(ee.route.id))}),z.size===0)return[];let G=kS(n,d,o.unstable_trailingSlashAwareDataRequests,"data");return L&&z.size>0&&G.searchParams.set("_routes",e.filter(ee=>z.has(ee.route.id)).map(ee=>ee.route.id).join(",")),[G.pathname+G.search]},[d,o.unstable_trailingSlashAwareDataRequests,p,i,a,_,e,n,c]),k=O.useMemo(()=>bS(E,a),[E,a]),j=jS(E);return O.createElement(O.Fragment,null,T.map(z=>O.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...t})),k.map(z=>O.createElement("link",{key:z,rel:"modulepreload",href:z,...t})),j.map(({key:z,link:L})=>O.createElement("link",{key:z,nonce:t.nonce,...L,crossOrigin:L.crossOrigin??t.crossOrigin})))}function zS(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var $S=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$S&&(window.__reactRouterVersion="7.13.1")}catch{}function HS({basename:n,children:e,unstable_useTransitions:t,window:i}){let o=O.useRef();o.current==null&&(o.current=_I({window:i,v5Compat:!0}));let a=o.current,[c,d]=O.useState({action:a.action,location:a.location}),p=O.useCallback(y=>{t===!1?d(y):O.startTransition(()=>d(y))},[t]);return O.useLayoutEffect(()=>a.listen(p),[a,p]),O.createElement(vS,{basename:n,children:e,location:c.location,navigationType:c.action,navigator:a,unstable_useTransitions:t})}var K_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ol=O.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:c,unstable_mask:d,state:p,target:y,to:_,preventScrollReset:E,viewTransition:T,unstable_defaultShouldRevalidate:k,...j},z){let{basename:L,navigator:G,unstable_useTransitions:ee}=O.useContext(vn),X=typeof _=="string"&&K_.test(_),ie=M_(_,L);_=ie.to;let ve=ZI(_,{relative:o}),_e=Tr(),D=null;if(d){let Ke=nh(d,[],_e.unstable_mask?_e.unstable_mask.pathname:"/",!0);L!=="/"&&(Ke.pathname=Ke.pathname==="/"?L:pr([L,Ke.pathname])),D=G.createHref(Ke)}let[S,P,x]=FS(i,j),V=GS(_,{replace:c,unstable_mask:d,state:p,target:y,preventScrollReset:E,relative:o,viewTransition:T,unstable_defaultShouldRevalidate:k,unstable_useTransitions:ee});function F(Ke){e&&e(Ke),Ke.defaultPrevented||V(Ke)}let C=!(ie.isExternal||a),Ye=O.createElement("a",{...j,...x,href:(C?D:void 0)||ie.absoluteURL||ve,onClick:C?F:e,ref:zS(z,P),target:y,"data-discover":!X&&t==="render"?"true":void 0});return S&&!X?O.createElement(O.Fragment,null,Ye,O.createElement(US,{page:ve})):Ye});Ol.displayName="Link";var al=O.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:c,viewTransition:d,children:p,...y},_){let E=Vl(c,{relative:y.relative}),T=Tr(),k=O.useContext(rh),{navigator:j,basename:z}=O.useContext(vn),L=k!=null&&ZS(E)&&d===!0,G=j.encodeLocation?j.encodeLocation(E).pathname:E.pathname,ee=T.pathname,X=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;t||(ee=ee.toLowerCase(),X=X?X.toLowerCase():null,G=G.toLowerCase()),X&&z&&(X=Qr(X,z)||X);const ie=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let ve=ee===G||!o&&ee.startsWith(G)&&ee.charAt(ie)==="/",_e=X!=null&&(X===G||!o&&X.startsWith(G)&&X.charAt(G.length)==="/"),D={isActive:ve,isPending:_e,isTransitioning:L},S=ve?e:void 0,P;typeof i=="function"?P=i(D):P=[i,ve?"active":null,_e?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let x=typeof a=="function"?a(D):a;return O.createElement(Ol,{...y,"aria-current":S,className:P,ref:_,style:x,to:c,viewTransition:d},typeof p=="function"?p(D):p)});al.displayName="NavLink";var qS=O.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:c=Tc,action:d,onSubmit:p,relative:y,preventScrollReset:_,viewTransition:E,unstable_defaultShouldRevalidate:T,...k},j)=>{let{unstable_useTransitions:z}=O.useContext(vn),L=YS(),G=JS(d,{relative:y}),ee=c.toLowerCase()==="get"?"get":"post",X=typeof d=="string"&&K_.test(d),ie=ve=>{if(p&&p(ve),ve.defaultPrevented)return;ve.preventDefault();let _e=ve.nativeEvent.submitter,D=(_e==null?void 0:_e.getAttribute("formmethod"))||c,S=()=>L(_e||ve.currentTarget,{fetcherKey:e,method:D,navigate:t,replace:o,state:a,relative:y,preventScrollReset:_,viewTransition:E,unstable_defaultShouldRevalidate:T});z&&t!==!1?O.startTransition(()=>S()):S()};return O.createElement("form",{ref:j,method:ee,action:G,onSubmit:i?p:ie,...k,"data-discover":!X&&n==="render"?"true":void 0})});qS.displayName="Form";function WS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q_(n){let e=O.useContext(na);return et(e,WS(n)),e}function GS(n,{target:e,replace:t,unstable_mask:i,state:o,preventScrollReset:a,relative:c,viewTransition:d,unstable_defaultShouldRevalidate:p,unstable_useTransitions:y}={}){let _=tr(),E=Tr(),T=Vl(n,{relative:c});return O.useCallback(k=>{if(SS(k,e)){k.preventDefault();let j=t!==void 0?t:wl(E)===wl(T),z=()=>_(n,{replace:j,unstable_mask:i,state:o,preventScrollReset:a,relative:c,viewTransition:d,unstable_defaultShouldRevalidate:p});y?O.startTransition(()=>z()):z()}},[E,_,T,t,i,o,e,n,a,c,d,p,y])}function KS(n){Dn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=O.useRef(Df(n)),t=O.useRef(!1),i=Tr(),o=O.useMemo(()=>AS(i.search,t.current?null:e.current),[i.search]),a=tr(),c=O.useCallback((d,p)=>{const y=Df(typeof d=="function"?d(new URLSearchParams(o)):d);t.current=!0,a("?"+y,p)},[a,o]);return[o,c]}var QS=0,XS=()=>`__${String(++QS)}__`;function YS(){let{router:n}=Q_("useSubmit"),{basename:e}=O.useContext(vn),t=fS(),i=n.fetch,o=n.navigate;return O.useCallback(async(a,c={})=>{let{action:d,method:p,encType:y,formData:_,body:E}=PS(a,e);if(c.navigate===!1){let T=c.fetcherKey||XS();await i(T,t,c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:_,body:E,formMethod:c.method||p,formEncType:c.encType||y,flushSync:c.flushSync})}else await o(c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:_,body:E,formMethod:c.method||p,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[i,o,e,t])}function JS(n,{relative:e}={}){let{basename:t}=O.useContext(vn),i=O.useContext(bn);et(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...Vl(n||".",{relative:e})},c=Tr();if(n==null){a.search=c.search;let d=new URLSearchParams(a.search),p=d.getAll("index");if(p.some(_=>_==="")){d.delete("index"),p.filter(E=>E).forEach(E=>d.append("index",E));let _=d.toString();a.search=_?`?${_}`:""}}return(!n||n===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:pr([t,a.pathname])),wl(a)}function ZS(n,{relative:e}={}){let t=O.useContext(U_);et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Q_("useViewTransitionState"),o=Vl(n,{relative:e});if(!t.isTransitioning)return!1;let a=Qr(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Qr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return bc(o.pathname,c)!=null||bc(o.pathname,a)!=null}const eA=()=>{};var zy={};/**
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
 */const X_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},tA=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(a&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Y_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,_=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|y>>6,k=y&63;p||(k=64,c||(T=64)),i.push(t[_],t[E],t[T],t[k])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(X_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||y==null||E==null)throw new nA;const T=a<<2|d>>4;if(i.push(T),y!==64){const k=d<<4&240|y>>2;if(i.push(k),E!==64){const j=y<<6&192|E;i.push(j)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rA=function(n){const e=X_(n);return Y_.encodeByteArray(e,!0)},Vc=function(n){return rA(n).replace(/\./g,"")},J_=function(n){try{return Y_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sA=()=>iA().__FIREBASE_DEFAULTS__,oA=()=>{if(typeof process>"u"||typeof zy>"u")return;const n=zy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},aA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&J_(n[1]);return e&&JSON.parse(e)},sh=()=>{try{return eA()||sA()||oA()||aA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Z_=n=>{var e,t;return(t=(e=sh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},lA=n=>{const e=Z_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ew=()=>{var n;return(n=sh())===null||n===void 0?void 0:n.config},tw=n=>{var e;return(e=sh())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class uA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function ia(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function nw(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function cA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Vc(JSON.stringify(t)),Vc(JSON.stringify(c)),""].join(".")}const fl={};function hA(){const n={prod:[],emulator:[]};for(const e of Object.keys(fl))fl[e]?n.emulator.push(e):n.prod.push(e);return n}function dA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let $y=!1;function rw(n,e){if(typeof window>"u"||typeof document>"u"||!ia(window.location.host)||fl[n]===e||fl[n]||$y)return;fl[n]=e;function t(T){return`__firebase__banner__${T}`}const i="__firebase__banner",a=hA().prod.length>0;function c(){const T=document.getElementById(i);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,k){T.setAttribute("width","24"),T.setAttribute("id",k),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function y(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{$y=!0,c()},T}function _(T,k){T.setAttribute("id",k),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=dA(i),k=t("text"),j=document.getElementById(k)||document.createElement("span"),z=t("learnmore"),L=document.getElementById(z)||document.createElement("a"),G=t("preprendIcon"),ee=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const X=T.element;d(X),_(L,z);const ie=y();p(ee,G),X.append(ee,j,L,ie),document.body.appendChild(X)}a?(j.innerText="Preview backend disconnected.",ee.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ee.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,j.innerText="Preview backend running in this workspace."),j.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function pA(){var n;const e=(n=sh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vA(){const n=Ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _A(){return!pA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wA(){try{return typeof indexedDB=="object"}catch{return!1}}function EA(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const TA="FirebaseError";class Ir extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=TA,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?IA(a,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new Ir(o,d,i)}}function IA(n,e){return n.replace(SA,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const SA=/\{\$([^}]+)}/g;function AA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],c=e[o];if(Hy(a)&&Hy(c)){if(!Xr(a,c))return!1}else if(a!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Hy(n){return n!==null&&typeof n=="object"}/**
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
 */function Ll(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ll(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,a]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function ul(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function RA(n,e){const t=new CA(n,e);return t.subscribe.bind(t)}class CA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");PA(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=ff),o.error===void 0&&(o.error=ff),o.complete===void 0&&(o.complete=ff);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ff(){}/**
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
 */function Et(n){return n&&n._delegate?n._delegate:n}class Jn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class kA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new uA;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xA(e))try{this.getOrInitializeService({instanceIdentifier:As})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=As){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=As){return this.instances.has(e)}getOptions(e=As){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:NA(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=As){return this.component?this.component.multipleInstances?e:As:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NA(n){return n===As?void 0:n}function xA(n){return n.instantiationMode==="EAGER"}/**
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
 */class DA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const bA={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},VA=ke.INFO,OA={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},LA=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=OA[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gp{constructor(e){this.name=e,this._logLevel=VA,this._logHandler=LA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const MA=(n,e)=>e.some(t=>n instanceof t);let qy,Wy;function FA(){return qy||(qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UA(){return Wy||(Wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iw=new WeakMap,bf=new WeakMap,sw=new WeakMap,pf=new WeakMap,yp=new WeakMap;function jA(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(qr(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&iw.set(t,n)}).catch(()=>{}),yp.set(e,n),e}function BA(n){if(bf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});bf.set(n,e)}let Vf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return bf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||sw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zA(n){Vf=n(Vf)}function $A(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(mf(this),e,...t);return sw.set(i,e.sort?e.sort():[e]),qr(i)}:UA().includes(n)?function(...e){return n.apply(mf(this),e),qr(iw.get(this))}:function(...e){return qr(n.apply(mf(this),e))}}function HA(n){return typeof n=="function"?$A(n):(n instanceof IDBTransaction&&BA(n),MA(n,FA())?new Proxy(n,Vf):n)}function qr(n){if(n instanceof IDBRequest)return jA(n);if(pf.has(n))return pf.get(n);const e=HA(n);return e!==n&&(pf.set(n,e),yp.set(e,n)),e}const mf=n=>yp.get(n);function oh(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const c=indexedDB.open(n,e),d=qr(c);return i&&c.addEventListener("upgradeneeded",p=>{i(qr(c.result),p.oldVersion,p.newVersion,qr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}function gf(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),qr(t).then(()=>{})}const qA=["get","getKey","getAll","getAllKeys","count"],WA=["put","add","delete","clear"],yf=new Map;function Gy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(yf.get(e))return yf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=WA.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||qA.includes(t)))return;const a=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return yf.set(e,a),a}zA(n=>({...n,get:(e,t,i)=>Gy(e,t)||n.get(e,t,i),has:(e,t)=>!!Gy(e,t)||n.has(e,t)}));/**
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
 */class GA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(KA(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function KA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Of="@firebase/app",Ky="0.13.2";/**
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
 */const Yr=new gp("@firebase/app"),QA="@firebase/app-compat",XA="@firebase/analytics-compat",YA="@firebase/analytics",JA="@firebase/app-check-compat",ZA="@firebase/app-check",eR="@firebase/auth",tR="@firebase/auth-compat",nR="@firebase/database",rR="@firebase/data-connect",iR="@firebase/database-compat",sR="@firebase/functions",oR="@firebase/functions-compat",aR="@firebase/installations",lR="@firebase/installations-compat",uR="@firebase/messaging",cR="@firebase/messaging-compat",hR="@firebase/performance",dR="@firebase/performance-compat",fR="@firebase/remote-config",pR="@firebase/remote-config-compat",mR="@firebase/storage",gR="@firebase/storage-compat",yR="@firebase/firestore",vR="@firebase/ai",_R="@firebase/firestore-compat",wR="firebase",ER="11.10.0";/**
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
 */const Lf="[DEFAULT]",TR={[Of]:"fire-core",[QA]:"fire-core-compat",[YA]:"fire-analytics",[XA]:"fire-analytics-compat",[ZA]:"fire-app-check",[JA]:"fire-app-check-compat",[eR]:"fire-auth",[tR]:"fire-auth-compat",[nR]:"fire-rtdb",[rR]:"fire-data-connect",[iR]:"fire-rtdb-compat",[sR]:"fire-fn",[oR]:"fire-fn-compat",[aR]:"fire-iid",[lR]:"fire-iid-compat",[uR]:"fire-fcm",[cR]:"fire-fcm-compat",[hR]:"fire-perf",[dR]:"fire-perf-compat",[fR]:"fire-rc",[pR]:"fire-rc-compat",[mR]:"fire-gcs",[gR]:"fire-gcs-compat",[yR]:"fire-fst",[_R]:"fire-fst-compat",[vR]:"fire-vertex","fire-js":"fire-js",[wR]:"fire-js-all"};/**
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
 */const Oc=new Map,IR=new Map,Mf=new Map;function Qy(n,e){try{n.container.addComponent(e)}catch(t){Yr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _r(n){const e=n.name;if(Mf.has(e))return Yr.debug(`There were multiple attempts to register component ${e}.`),!1;Mf.set(e,n);for(const t of Oc.values())Qy(t,n);for(const t of IR.values())Qy(t,n);return!0}function Ml(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function kn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const SR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Oi=new Os("app","Firebase",SR);/**
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
 */class AR{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oi.create("app-deleted",{appName:this._name})}}/**
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
 */const sa=ER;function ow(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Lf,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Oi.create("bad-app-name",{appName:String(o)});if(t||(t=ew()),!t)throw Oi.create("no-options");const a=Oc.get(o);if(a){if(Xr(t,a.options)&&Xr(i,a.config))return a;throw Oi.create("duplicate-app",{appName:o})}const c=new DA(o);for(const p of Mf.values())c.addComponent(p);const d=new AR(t,i,c);return Oc.set(o,d),d}function aw(n=Lf){const e=Oc.get(n);if(!e&&n===Lf&&ew())return ow();if(!e)throw Oi.create("no-app",{appName:n});return e}function Nn(n,e,t){var i;let o=(i=TR[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yr.warn(d.join(" "));return}_r(new Jn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const RR="firebase-heartbeat-database",CR=1,El="firebase-heartbeat-store";let vf=null;function lw(){return vf||(vf=oh(RR,CR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(El)}catch(t){console.warn(t)}}}}).catch(n=>{throw Oi.create("idb-open",{originalErrorMessage:n.message})})),vf}async function PR(n){try{const t=(await lw()).transaction(El),i=await t.objectStore(El).get(uw(n));return await t.done,i}catch(e){if(e instanceof Ir)Yr.warn(e.message);else{const t=Oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yr.warn(t.message)}}}async function Xy(n,e){try{const i=(await lw()).transaction(El,"readwrite");await i.objectStore(El).put(e,uw(n)),await i.done}catch(t){if(t instanceof Ir)Yr.warn(t.message);else{const i=Oi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Yr.warn(i.message)}}}function uw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const kR=1024,NR=30;class xR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bR(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Yy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>NR){const c=VR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Yr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yy(),{heartbeatsToSend:i,unsentEntries:o}=DR(this._heartbeatsCache.heartbeats),a=Vc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Yr.warn(t),""}}}function Yy(){return new Date().toISOString().substring(0,10)}function DR(n,e=kR){const t=[];let i=n.slice();for(const o of n){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),Jy(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Jy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class bR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wA()?EA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await PR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Xy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Xy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Jy(n){return Vc(JSON.stringify({version:2,heartbeats:n})).length}function VR(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function OR(n){_r(new Jn("platform-logger",e=>new GA(e),"PRIVATE")),_r(new Jn("heartbeat",e=>new xR(e),"PRIVATE")),Nn(Of,Ky,n),Nn(Of,Ky,"esm2017"),Nn("fire-js","")}OR("");function vp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function cw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LR=cw,hw=new Os("auth","Firebase",cw());/**
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
 */const Lc=new gp("@firebase/auth");function MR(n,...e){Lc.logLevel<=ke.WARN&&Lc.warn(`Auth (${sa}): ${n}`,...e)}function Sc(n,...e){Lc.logLevel<=ke.ERROR&&Lc.error(`Auth (${sa}): ${n}`,...e)}/**
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
 */function Zn(n,...e){throw _p(n,...e)}function mr(n,...e){return _p(n,...e)}function dw(n,e,t){const i=Object.assign(Object.assign({},LR()),{[e]:t});return new Os("auth","Firebase",i).create(e,{appName:n.name})}function Wr(n){return dw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _p(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return hw.create(n,...e)}function we(n,e,...t){if(!n)throw _p(e,...t)}function $r(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Sc(e),new Error(e)}function Jr(n,e){n||$r(e)}/**
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
 */function Ff(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function FR(){return Zy()==="http:"||Zy()==="https:"}function Zy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function UR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FR()||gA()||"connection"in navigator)?navigator.onLine:!0}function jR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Fl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Jr(t>e,"Short delay should be less than long delay!"),this.isMobile=fA()||yA()}get(){return UR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wp(n,e){Jr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class fw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$R=new Fl(3e4,6e4);function Wi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Gi(n,e,t,i,o={}){return pw(n,o,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const d=Ll(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},a);return mA()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&ia(n.emulatorConfig.host)&&(y.credentials="include"),fw.fetch()(await mw(n,n.config.apiHost,t,d),y)})}async function pw(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},BR),e);try{const o=new qR(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw mc(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const d=a.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw mc(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw mc(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw mc(n,"user-disabled",c);const _=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw dw(n,_,y);Zn(n,_)}}catch(o){if(o instanceof Ir)throw o;Zn(n,"network-request-failed",{message:String(o)})}}async function Ul(n,e,t,i,o={}){const a=await Gi(n,e,t,i,o);return"mfaPendingCredential"in a&&Zn(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function mw(n,e,t,i){const o=`${e}${t}?${i}`,a=n,c=a.config.emulator?wp(n.config,o):`${n.config.apiScheme}://${o}`;return zR.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function HR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(mr(this.auth,"network-request-failed")),$R.get())})}}function mc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=mr(n,e,i);return o.customData._tokenResponse=t,o}function ev(n){return n!==void 0&&n.enterprise!==void 0}class WR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return HR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GR(n,e){return Gi(n,"GET","/v2/recaptchaConfig",Wi(n,e))}/**
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
 */async function KR(n,e){return Gi(n,"POST","/v1/accounts:delete",e)}async function Mc(n,e){return Gi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function pl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QR(n,e=!1){const t=Et(n),i=await t.getIdToken(e),o=Ep(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:pl(_f(o.auth_time)),issuedAtTime:pl(_f(o.iat)),expirationTime:pl(_f(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function _f(n){return Number(n)*1e3}function Ep(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Sc("JWT malformed, contained fewer than 3 sections"),null;try{const o=J_(t);return o?JSON.parse(o):(Sc("Failed to decode base64 JWT payload"),null)}catch(o){return Sc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function tv(n){const e=Ep(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Tl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ir&&XR(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function XR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class YR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function Fc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Tl(n,Mc(t,{idToken:i}));we(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?gw(a.providerUserInfo):[],d=ZR(n.providerData,c),p=n.isAnonymous,y=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),_=p?y:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Uf(a.createdAt,a.lastLoginAt),isAnonymous:_};Object.assign(n,E)}async function JR(n){const e=Et(n);await Fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZR(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function gw(n){return n.map(e=>{var{providerId:t}=e,i=vp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function eC(n,e){const t=await pw(n,{},async()=>{const i=Ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=await mw(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:i};return n.emulatorConfig&&ia(n.emulatorConfig.host)&&(p.credentials="include"),fw.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function tC(n,e){return Gi(n,"POST","/v2/accounts:revokeToken",Wi(n,e))}/**
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
 */class zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=tv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await eC(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,c=new zo;return i&&(we(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(we(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zo,this.toJSON())}_performRefresh(){return $r("not implemented")}}/**
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
 */function ki(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,a=vp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Uf(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Tl(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return QR(this,e)}reload(){return JR(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Fc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(Wr(this.auth));const e=await this.getIdToken();return await Tl(this,KR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,a,c,d,p,y,_;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,T=(o=t.email)!==null&&o!==void 0?o:void 0,k=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,j=(c=t.photoURL)!==null&&c!==void 0?c:void 0,z=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,G=(y=t.createdAt)!==null&&y!==void 0?y:void 0,ee=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:X,emailVerified:ie,isAnonymous:ve,providerData:_e,stsTokenManager:D}=t;we(X&&D,e,"internal-error");const S=zo.fromJSON(this.name,D);we(typeof X=="string",e,"internal-error"),ki(E,e.name),ki(T,e.name),we(typeof ie=="boolean",e,"internal-error"),we(typeof ve=="boolean",e,"internal-error"),ki(k,e.name),ki(j,e.name),ki(z,e.name),ki(L,e.name),ki(G,e.name),ki(ee,e.name);const P=new Qn({uid:X,auth:e,email:T,emailVerified:ie,displayName:E,isAnonymous:ve,photoURL:j,phoneNumber:k,tenantId:z,stsTokenManager:S,createdAt:G,lastLoginAt:ee});return _e&&Array.isArray(_e)&&(P.providerData=_e.map(x=>Object.assign({},x))),L&&(P._redirectEventId=L),P}static async _fromIdTokenResponse(e,t,i=!1){const o=new zo;o.updateFromServerResponse(t);const a=new Qn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Fc(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?gw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new zo;d.updateFromIdToken(i);const p=new Qn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Uf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,y),p}}/**
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
 */const nv=new Map;function Hr(n){Jr(n instanceof Function,"Expected a class definition");let e=nv.get(n);return e?(Jr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nv.set(n,e),e)}/**
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
 */class yw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yw.type="NONE";const rv=yw;/**
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
 */function Ac(n,e,t){return`firebase:${n}:${e}:${t}`}class $o{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=Ac(this.userKey,o.apiKey,a),this.fullPersistenceKey=Ac("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Mc(this.auth,{idToken:e}).catch(()=>{});return t?Qn._fromGetAccountInfoResponse(this.auth,t,e):null}return Qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new $o(Hr(rv),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=o[0]||Hr(rv);const c=Ac(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const _=await y._get(c);if(_){let E;if(typeof _=="string"){const T=await Mc(e,{idToken:_}).catch(()=>{});if(!T)break;E=await Qn._fromGetAccountInfoResponse(e,T,_)}else E=Qn._fromJSON(e,_);y!==a&&(d=E),a=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new $o(a,e,i):(a=p[0],d&&await a._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(c)}catch{}})),new $o(a,e,i))}}/**
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
 */function iv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ew(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Iw(e))return"Blackberry";if(Sw(e))return"Webos";if(_w(e))return"Safari";if((e.includes("chrome/")||ww(e))&&!e.includes("edge/"))return"Chrome";if(Tw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function vw(n=Ht()){return/firefox\//i.test(n)}function _w(n=Ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ww(n=Ht()){return/crios\//i.test(n)}function Ew(n=Ht()){return/iemobile/i.test(n)}function Tw(n=Ht()){return/android/i.test(n)}function Iw(n=Ht()){return/blackberry/i.test(n)}function Sw(n=Ht()){return/webos/i.test(n)}function Tp(n=Ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function nC(n=Ht()){var e;return Tp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rC(){return vA()&&document.documentMode===10}function Aw(n=Ht()){return Tp(n)||Tw(n)||Sw(n)||Iw(n)||/windows phone/i.test(n)||Ew(n)}/**
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
 */function Rw(n,e=[]){let t;switch(n){case"Browser":t=iv(Ht());break;case"Worker":t=`${iv(Ht())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${sa}/${i}`}/**
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
 */class iC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,d)=>{try{const p=e(a);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function sC(n,e={}){return Gi(n,"GET","/v2/passwordPolicy",Wi(n,e))}/**
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
 */const oC=6;class aC{constructor(e){var t,i,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:oC,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,a,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class lC{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sv(this),this.idTokenSubscription=new sv(this),this.beforeStateQueue=new iC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Hr(t)),this._initializationPromise=this.queue(async()=>{var i,o,a;if(!this._deleted&&(this.persistenceManager=await $o.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Mc(this,{idToken:e}),i=await Qn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(kn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(Wr(this));const t=e?Et(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(Wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(Wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sC(this),t=new aC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await tC(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Hr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await $o.create(this,[Hr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(d,this,"internal-error"),d.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&MR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ls(n){return Et(n)}class sv{constructor(e){this.auth=e,this.observer=null,this.addObserver=RA(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ah={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uC(n){ah=n}function Cw(n){return ah.loadJS(n)}function cC(){return ah.recaptchaEnterpriseScript}function hC(){return ah.gapiScript}function dC(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class fC{constructor(){this.enterprise=new pC}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class pC{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const mC="recaptcha-enterprise",Pw="NO_RECAPTCHA";class gC{constructor(e){this.type=mC,this.auth=Ls(e)}async verify(e="verify",t=!1){async function i(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,d)=>{GR(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new WR(p);return a.tenantId==null?a._agentRecaptchaConfig=y:a._tenantRecaptchaConfigs[a.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(a,c,d){const p=window.grecaptcha;ev(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(y=>{c(y)}).catch(()=>{c(Pw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fC().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{i(this.auth).then(d=>{if(!t&&ev(window.grecaptcha))o(d,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=cC();p.length!==0&&(p+=d),Cw(p).then(()=>{o(d,a,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function ov(n,e,t,i=!1,o=!1){const a=new gC(n);let c;if(o)c=Pw;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function jf(n,e,t,i,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await ov(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await ov(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
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
 */function yC(n,e){const t=Ml(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Xr(a,e??{}))return o;Zn(o,"already-initialized")}return t.initialize({options:e})}function vC(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Hr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function _C(n,e,t){const i=Ls(n);we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=kw(e),{host:c,port:d}=wC(e),p=d===null?"":`:${d}`,y={url:`${a}//${c}${p}/`},_=Object.freeze({host:c,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){we(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),we(Xr(y,i.config.emulator)&&Xr(_,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=_,i.settings.appVerificationDisabledForTesting=!0,ia(c)?(nw(`${a}//${c}${p}`),rw("Auth",!0)):EC()}function kw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function wC(n){const e=kw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:av(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:av(c)}}}function av(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function EC(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ip{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $r("not implemented")}_getIdTokenResponse(e){return $r("not implemented")}_linkToIdToken(e,t){return $r("not implemented")}_getReauthenticationResolver(e){return $r("not implemented")}}async function TC(n,e){return Gi(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function IC(n,e){return Ul(n,"POST","/v1/accounts:signInWithPassword",Wi(n,e))}/**
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
 */async function SC(n,e){return Ul(n,"POST","/v1/accounts:signInWithEmailLink",Wi(n,e))}async function AC(n,e){return Ul(n,"POST","/v1/accounts:signInWithEmailLink",Wi(n,e))}/**
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
 */class Il extends Ip{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Il(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Il(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jf(e,t,"signInWithPassword",IC);case"emailLink":return SC(e,{email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jf(e,i,"signUpPassword",TC);case"emailLink":return AC(e,{idToken:t,email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ho(n,e){return Ul(n,"POST","/v1/accounts:signInWithIdp",Wi(n,e))}/**
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
 */const RC="http://localhost";class Ps extends Ip{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,a=vp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Ps(i,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Ho(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ho(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ho(e,t)}buildRequest(){const e={requestUri:RC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ll(t)}return e}}/**
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
 */function CC(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PC(n){const e=ll(ul(n)).link,t=e?ll(ul(e)).deep_link_id:null,i=ll(ul(n)).deep_link_id;return(i?ll(ul(i)).link:null)||i||t||e||n}class Sp{constructor(e){var t,i,o,a,c,d;const p=ll(ul(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(i=p.oobCode)!==null&&i!==void 0?i:null,E=CC((o=p.mode)!==null&&o!==void 0?o:null);we(y&&_&&E,"argument-error"),this.apiKey=y,this.operation=E,this.code=_,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=PC(e);try{return new Sp(t)}catch{return null}}}/**
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
 */class oa{constructor(){this.providerId=oa.PROVIDER_ID}static credential(e,t){return Il._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Sp.parseLink(t);return we(i,"argument-error"),Il._fromEmailAndCode(e,i.code,i.tenantId)}}oa.PROVIDER_ID="password";oa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jl extends Nw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */async function kC(n,e){return Ul(n,"POST","/v1/accounts:signUp",Wi(n,e))}/**
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
 */class Uc extends Ir{constructor(e,t,i,o){var a;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Uc(e,t,i,o)}}function xw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(n,a,e,i):a})}async function NC(n,e,t=!1){const i=await Tl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ks._forOperation(n,"link",i)}/**
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
 */async function xC(n,e,t=!1){const{auth:i}=n;if(kn(i.app))return Promise.reject(Wr(i));const o="reauthenticate";try{const a=await Tl(n,xw(i,o,e,n),t);we(a.idToken,i,"internal-error");const c=Ep(a.idToken);we(c,i,"internal-error");const{sub:d}=c;return we(n.uid===d,i,"user-mismatch"),ks._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Zn(i,"user-mismatch"),a}}/**
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
 */async function Dw(n,e,t=!1){if(kn(n.app))return Promise.reject(Wr(n));const i="signIn",o=await xw(n,i,e),a=await ks._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}async function DC(n,e){return Dw(Ls(n),e)}/**
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
 */async function bw(n){const e=Ls(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bC(n,e,t){if(kn(n.app))return Promise.reject(Wr(n));const i=Ls(n),c=await jf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kC).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&bw(n),p}),d=await ks._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function VC(n,e,t){return kn(n.app)?Promise.reject(Wr(n)):DC(Et(n),oa.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&bw(n),i})}function OC(n,e,t,i){return Et(n).onIdTokenChanged(e,t,i)}function LC(n,e,t){return Et(n).beforeAuthStateChanged(e,t)}function MC(n,e,t,i){return Et(n).onAuthStateChanged(e,t,i)}function FC(n){return Et(n).signOut()}const jc="__sak";/**
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
 */class Vw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jc,"1"),this.storage.removeItem(jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const UC=1e3,jC=10;class Ow extends Vw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Aw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);rC()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,jC):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},UC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ow.type="LOCAL";const BC=Ow;/**
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
 */class Lw extends Vw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lw.type="SESSION";const Mw=Lw;/**
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
 */function zC(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new lh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,a)),p=await zC(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lh.receivers=[];/**
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
 */class $C{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((d,p)=>{const y=Ap("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(E){const T=E;if(T.data.eventId===y)switch(T.data.status){case"ack":clearTimeout(_),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(_),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function gr(){return window}function HC(n){gr().location.href=n}/**
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
 */function Fw(){return typeof gr().WorkerGlobalScope<"u"&&typeof gr().importScripts=="function"}async function qC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function GC(){return Fw()?self:null}/**
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
 */const Uw="firebaseLocalStorageDb",KC=1,Bc="firebaseLocalStorage",jw="fbase_key";class Bl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uh(n,e){return n.transaction([Bc],e?"readwrite":"readonly").objectStore(Bc)}function QC(){const n=indexedDB.deleteDatabase(Uw);return new Bl(n).toPromise()}function Bf(){const n=indexedDB.open(Uw,KC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Bc,{keyPath:jw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Bc)?e(i):(i.close(),await QC(),e(await Bf()))})})}async function uv(n,e,t){const i=uh(n,!0).put({[jw]:e,value:t});return new Bl(i).toPromise()}async function XC(n,e){const t=uh(n,!1).get(e),i=await new Bl(t).toPromise();return i===void 0?null:i.value}function cv(n,e){const t=uh(n,!0).delete(e);return new Bl(t).toPromise()}const YC=800,JC=3;class Bw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>JC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lh._getInstance(GC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await qC(),!this.activeServiceWorker)return;this.sender=new $C(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bf();return await uv(e,jc,"1"),await cv(e,jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>uv(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>XC(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>cv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=uh(o,!1).getAll();return new Bl(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bw.type="LOCAL";const ZC=Bw;new Fl(3e4,6e4);/**
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
 */function e1(n,e){return e?Hr(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Rp extends Ip{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function t1(n){return Dw(n.auth,new Rp(n),n.bypassAuthState)}function n1(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),xC(t,new Rp(n),n.bypassAuthState)}async function r1(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),NC(t,new Rp(n),n.bypassAuthState)}/**
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
 */class zw{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t1;case"linkViaPopup":case"linkViaRedirect":return r1;case"reauthViaPopup":case"reauthViaRedirect":return n1;default:Zn(this.auth,"internal-error")}}resolve(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const i1=new Fl(2e3,1e4);class jo extends zw{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,jo.currentPopupAction&&jo.currentPopupAction.cancel(),jo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Jr(this.filter.length===1,"Popup operations only handle one event");const e=Ap();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i1.get())};e()}}jo.currentPopupAction=null;/**
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
 */const s1="pendingRedirect",Rc=new Map;class o1 extends zw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Rc.get(this.auth._key());if(!e){try{const i=await a1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Rc.set(this.auth._key(),e)}return this.bypassAuthState||Rc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a1(n,e){const t=c1(e),i=u1(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function l1(n,e){Rc.set(n._key(),e)}function u1(n){return Hr(n._redirectPersistence)}function c1(n){return Ac(s1,n.config.apiKey,n.name)}async function h1(n,e,t=!1){if(kn(n.app))return Promise.reject(Wr(n));const i=Ls(n),o=e1(i,e),c=await new o1(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const d1=600*1e3;class f1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!$w(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(mr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d1&&this.cachedEventUids.clear(),this.cachedEventUids.has(hv(e))}saveEventToCache(e){this.cachedEventUids.add(hv(e)),this.lastProcessedEventTime=Date.now()}}function hv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $w({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $w(n);default:return!1}}/**
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
 */async function m1(n,e={}){return Gi(n,"GET","/v1/projects",e)}/**
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
 */const g1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y1=/^https?/;async function v1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await m1(n);for(const t of e)try{if(_1(t))return}catch{}Zn(n,"unauthorized-domain")}function _1(n){const e=Ff(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!y1.test(t))return!1;if(g1.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const w1=new Fl(3e4,6e4);function dv(){const n=gr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function E1(n){return new Promise((e,t)=>{var i,o,a;function c(){dv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dv(),t(mr(n,"network-request-failed"))},timeout:w1.get()})}if(!((o=(i=gr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=gr().gapi)===null||a===void 0)&&a.load)c();else{const d=dC("iframefcb");return gr()[d]=()=>{gapi.load?c():t(mr(n,"network-request-failed"))},Cw(`${hC()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Cc=null,e})}let Cc=null;function T1(n){return Cc=Cc||E1(n),Cc}/**
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
 */const I1=new Fl(5e3,15e3),S1="__/auth/iframe",A1="emulator/auth/iframe",R1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},C1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function P1(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wp(e,A1):`https://${n.config.authDomain}/${S1}`,i={apiKey:e.apiKey,appName:n.name,v:sa},o=C1.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${Ll(i).slice(1)}`}async function k1(n){const e=await T1(n),t=gr().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:P1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R1,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const c=mr(n,"network-request-failed"),d=gr().setTimeout(()=>{a(c)},I1.get());function p(){gr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{a(c)})}))}/**
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
 */const N1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x1=500,D1=600,b1="_blank",V1="http://localhost";class fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function O1(n,e,t,i=x1,o=D1){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},N1),{width:i.toString(),height:o.toString(),top:a,left:c}),y=Ht().toLowerCase();t&&(d=ww(y)?b1:t),vw(y)&&(e=e||V1,p.scrollbars="yes");const _=Object.entries(p).reduce((T,[k,j])=>`${T}${k}=${j},`,"");if(nC(y)&&d!=="_self")return L1(e||"",d),new fv(null);const E=window.open(e||"",d,_);we(E,n,"popup-blocked");try{E.focus()}catch{}return new fv(E)}function L1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const M1="__/auth/handler",F1="emulator/auth/handler",U1=encodeURIComponent("fac");async function pv(n,e,t,i,o,a){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:sa,eventId:o};if(e instanceof Nw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",AA(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,E]of Object.entries({}))c[_]=E}if(e instanceof jl){const _=e.getScopes().filter(E=>E!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const p=await n._getAppCheckToken(),y=p?`#${U1}=${encodeURIComponent(p)}`:"";return`${j1(n)}?${Ll(d).slice(1)}${y}`}function j1({config:n}){return n.emulator?wp(n,F1):`https://${n.authDomain}/${M1}`}/**
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
 */const wf="webStorageSupport";class B1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mw,this._completeRedirectFn=h1,this._overrideRedirectResult=l1}async _openPopup(e,t,i,o){var a;Jr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await pv(e,t,i,Ff(),o);return O1(e,c,Ap())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await pv(e,t,i,Ff(),o);return HC(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Jr(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await k1(e),i=new f1(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wf,{type:wf},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[wf];c!==void 0&&t(!!c),Zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=v1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Aw()||_w()||Tp()}}const z1=B1;var mv="@firebase/auth",gv="1.10.8";/**
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
 */class $1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function H1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function q1(n){_r(new Jn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;we(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rw(n)},y=new lC(i,o,a,p);return vC(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),_r(new Jn("auth-internal",e=>{const t=Ls(e.getProvider("auth").getImmediate());return(i=>new $1(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(mv,gv,H1(n)),Nn(mv,gv,"esm2017")}/**
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
 */const W1=300,G1=tw("authIdTokenMaxAge")||W1;let yv=null;const K1=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>G1)return;const o=t==null?void 0:t.token;yv!==o&&(yv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Q1(n=aw()){const e=Ml(n,"auth");if(e.isInitialized())return e.getImmediate();const t=yC(n,{popupRedirectResolver:z1,persistence:[ZC,BC,Mw]}),i=tw("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=K1(a.toString());LC(t,c,()=>c(t.currentUser)),OC(t,d=>c(d))}}const o=Z_("auth");return o&&_C(t,`http://${o}`),t}function X1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}uC({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=mr("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",X1().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});q1("Browser");var Y1="firebase",J1="11.10.0";/**
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
 */Nn(Y1,J1,"app");var vv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Li,Hw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function P(){}P.prototype=S.prototype,D.D=S.prototype,D.prototype=new P,D.prototype.constructor=D,D.C=function(x,V,F){for(var C=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)C[Ye-2]=arguments[Ye];return S.prototype[V].apply(x,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,S,P){P||(P=0);var x=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)x[V]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(V=0;16>V;++V)x[V]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=D.g[0],P=D.g[1],V=D.g[2];var F=D.g[3],C=S+(F^P&(V^F))+x[0]+3614090360&4294967295;S=P+(C<<7&4294967295|C>>>25),C=F+(V^S&(P^V))+x[1]+3905402710&4294967295,F=S+(C<<12&4294967295|C>>>20),C=V+(P^F&(S^P))+x[2]+606105819&4294967295,V=F+(C<<17&4294967295|C>>>15),C=P+(S^V&(F^S))+x[3]+3250441966&4294967295,P=V+(C<<22&4294967295|C>>>10),C=S+(F^P&(V^F))+x[4]+4118548399&4294967295,S=P+(C<<7&4294967295|C>>>25),C=F+(V^S&(P^V))+x[5]+1200080426&4294967295,F=S+(C<<12&4294967295|C>>>20),C=V+(P^F&(S^P))+x[6]+2821735955&4294967295,V=F+(C<<17&4294967295|C>>>15),C=P+(S^V&(F^S))+x[7]+4249261313&4294967295,P=V+(C<<22&4294967295|C>>>10),C=S+(F^P&(V^F))+x[8]+1770035416&4294967295,S=P+(C<<7&4294967295|C>>>25),C=F+(V^S&(P^V))+x[9]+2336552879&4294967295,F=S+(C<<12&4294967295|C>>>20),C=V+(P^F&(S^P))+x[10]+4294925233&4294967295,V=F+(C<<17&4294967295|C>>>15),C=P+(S^V&(F^S))+x[11]+2304563134&4294967295,P=V+(C<<22&4294967295|C>>>10),C=S+(F^P&(V^F))+x[12]+1804603682&4294967295,S=P+(C<<7&4294967295|C>>>25),C=F+(V^S&(P^V))+x[13]+4254626195&4294967295,F=S+(C<<12&4294967295|C>>>20),C=V+(P^F&(S^P))+x[14]+2792965006&4294967295,V=F+(C<<17&4294967295|C>>>15),C=P+(S^V&(F^S))+x[15]+1236535329&4294967295,P=V+(C<<22&4294967295|C>>>10),C=S+(V^F&(P^V))+x[1]+4129170786&4294967295,S=P+(C<<5&4294967295|C>>>27),C=F+(P^V&(S^P))+x[6]+3225465664&4294967295,F=S+(C<<9&4294967295|C>>>23),C=V+(S^P&(F^S))+x[11]+643717713&4294967295,V=F+(C<<14&4294967295|C>>>18),C=P+(F^S&(V^F))+x[0]+3921069994&4294967295,P=V+(C<<20&4294967295|C>>>12),C=S+(V^F&(P^V))+x[5]+3593408605&4294967295,S=P+(C<<5&4294967295|C>>>27),C=F+(P^V&(S^P))+x[10]+38016083&4294967295,F=S+(C<<9&4294967295|C>>>23),C=V+(S^P&(F^S))+x[15]+3634488961&4294967295,V=F+(C<<14&4294967295|C>>>18),C=P+(F^S&(V^F))+x[4]+3889429448&4294967295,P=V+(C<<20&4294967295|C>>>12),C=S+(V^F&(P^V))+x[9]+568446438&4294967295,S=P+(C<<5&4294967295|C>>>27),C=F+(P^V&(S^P))+x[14]+3275163606&4294967295,F=S+(C<<9&4294967295|C>>>23),C=V+(S^P&(F^S))+x[3]+4107603335&4294967295,V=F+(C<<14&4294967295|C>>>18),C=P+(F^S&(V^F))+x[8]+1163531501&4294967295,P=V+(C<<20&4294967295|C>>>12),C=S+(V^F&(P^V))+x[13]+2850285829&4294967295,S=P+(C<<5&4294967295|C>>>27),C=F+(P^V&(S^P))+x[2]+4243563512&4294967295,F=S+(C<<9&4294967295|C>>>23),C=V+(S^P&(F^S))+x[7]+1735328473&4294967295,V=F+(C<<14&4294967295|C>>>18),C=P+(F^S&(V^F))+x[12]+2368359562&4294967295,P=V+(C<<20&4294967295|C>>>12),C=S+(P^V^F)+x[5]+4294588738&4294967295,S=P+(C<<4&4294967295|C>>>28),C=F+(S^P^V)+x[8]+2272392833&4294967295,F=S+(C<<11&4294967295|C>>>21),C=V+(F^S^P)+x[11]+1839030562&4294967295,V=F+(C<<16&4294967295|C>>>16),C=P+(V^F^S)+x[14]+4259657740&4294967295,P=V+(C<<23&4294967295|C>>>9),C=S+(P^V^F)+x[1]+2763975236&4294967295,S=P+(C<<4&4294967295|C>>>28),C=F+(S^P^V)+x[4]+1272893353&4294967295,F=S+(C<<11&4294967295|C>>>21),C=V+(F^S^P)+x[7]+4139469664&4294967295,V=F+(C<<16&4294967295|C>>>16),C=P+(V^F^S)+x[10]+3200236656&4294967295,P=V+(C<<23&4294967295|C>>>9),C=S+(P^V^F)+x[13]+681279174&4294967295,S=P+(C<<4&4294967295|C>>>28),C=F+(S^P^V)+x[0]+3936430074&4294967295,F=S+(C<<11&4294967295|C>>>21),C=V+(F^S^P)+x[3]+3572445317&4294967295,V=F+(C<<16&4294967295|C>>>16),C=P+(V^F^S)+x[6]+76029189&4294967295,P=V+(C<<23&4294967295|C>>>9),C=S+(P^V^F)+x[9]+3654602809&4294967295,S=P+(C<<4&4294967295|C>>>28),C=F+(S^P^V)+x[12]+3873151461&4294967295,F=S+(C<<11&4294967295|C>>>21),C=V+(F^S^P)+x[15]+530742520&4294967295,V=F+(C<<16&4294967295|C>>>16),C=P+(V^F^S)+x[2]+3299628645&4294967295,P=V+(C<<23&4294967295|C>>>9),C=S+(V^(P|~F))+x[0]+4096336452&4294967295,S=P+(C<<6&4294967295|C>>>26),C=F+(P^(S|~V))+x[7]+1126891415&4294967295,F=S+(C<<10&4294967295|C>>>22),C=V+(S^(F|~P))+x[14]+2878612391&4294967295,V=F+(C<<15&4294967295|C>>>17),C=P+(F^(V|~S))+x[5]+4237533241&4294967295,P=V+(C<<21&4294967295|C>>>11),C=S+(V^(P|~F))+x[12]+1700485571&4294967295,S=P+(C<<6&4294967295|C>>>26),C=F+(P^(S|~V))+x[3]+2399980690&4294967295,F=S+(C<<10&4294967295|C>>>22),C=V+(S^(F|~P))+x[10]+4293915773&4294967295,V=F+(C<<15&4294967295|C>>>17),C=P+(F^(V|~S))+x[1]+2240044497&4294967295,P=V+(C<<21&4294967295|C>>>11),C=S+(V^(P|~F))+x[8]+1873313359&4294967295,S=P+(C<<6&4294967295|C>>>26),C=F+(P^(S|~V))+x[15]+4264355552&4294967295,F=S+(C<<10&4294967295|C>>>22),C=V+(S^(F|~P))+x[6]+2734768916&4294967295,V=F+(C<<15&4294967295|C>>>17),C=P+(F^(V|~S))+x[13]+1309151649&4294967295,P=V+(C<<21&4294967295|C>>>11),C=S+(V^(P|~F))+x[4]+4149444226&4294967295,S=P+(C<<6&4294967295|C>>>26),C=F+(P^(S|~V))+x[11]+3174756917&4294967295,F=S+(C<<10&4294967295|C>>>22),C=V+(S^(F|~P))+x[2]+718787259&4294967295,V=F+(C<<15&4294967295|C>>>17),C=P+(F^(V|~S))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(V+(C<<21&4294967295|C>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+F&4294967295}i.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var P=S-this.blockSize,x=this.B,V=this.h,F=0;F<S;){if(V==0)for(;F<=P;)o(this,D,F),F+=this.blockSize;if(typeof D=="string"){for(;F<S;)if(x[V++]=D.charCodeAt(F++),V==this.blockSize){o(this,x),V=0;break}}else for(;F<S;)if(x[V++]=D[F++],V==this.blockSize){o(this,x),V=0;break}}this.h=V,this.o+=S},i.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var P=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=P&255,P/=256;for(this.u(D),D=Array(16),S=P=0;4>S;++S)for(var x=0;32>x;x+=8)D[P++]=this.g[S]>>>x&255;return D};function a(D,S){var P=d;return Object.prototype.hasOwnProperty.call(P,D)?P[D]:P[D]=S(D)}function c(D,S){this.h=S;for(var P=[],x=!0,V=D.length-1;0<=V;V--){var F=D[V]|0;x&&F==S||(P[V]=F,x=!1)}this.g=P}var d={};function p(D){return-128<=D&&128>D?a(D,function(S){return new c([S|0],0>S?-1:0)}):new c([D|0],0>D?-1:0)}function y(D){if(isNaN(D)||!isFinite(D))return E;if(0>D)return L(y(-D));for(var S=[],P=1,x=0;D>=P;x++)S[x]=D/P|0,P*=4294967296;return new c(S,0)}function _(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return L(_(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=y(Math.pow(S,8)),x=E,V=0;V<D.length;V+=8){var F=Math.min(8,D.length-V),C=parseInt(D.substring(V,V+F),S);8>F?(F=y(Math.pow(S,F)),x=x.j(F).add(y(C))):(x=x.j(P),x=x.add(y(C)))}return x}var E=p(0),T=p(1),k=p(16777216);n=c.prototype,n.m=function(){if(z(this))return-L(this).m();for(var D=0,S=1,P=0;P<this.g.length;P++){var x=this.i(P);D+=(0<=x?x:4294967296+x)*S,S*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(j(this))return"0";if(z(this))return"-"+L(this).toString(D);for(var S=y(Math.pow(D,6)),P=this,x="";;){var V=ie(P,S).g;P=G(P,V.j(S));var F=((0<P.g.length?P.g[0]:P.h)>>>0).toString(D);if(P=V,j(P))return F+x;for(;6>F.length;)F="0"+F;x=F+x}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function j(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function z(D){return D.h==-1}n.l=function(D){return D=G(this,D),z(D)?-1:j(D)?0:1};function L(D){for(var S=D.g.length,P=[],x=0;x<S;x++)P[x]=~D.g[x];return new c(P,~D.h).add(T)}n.abs=function(){return z(this)?L(this):this},n.add=function(D){for(var S=Math.max(this.g.length,D.g.length),P=[],x=0,V=0;V<=S;V++){var F=x+(this.i(V)&65535)+(D.i(V)&65535),C=(F>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);x=C>>>16,F&=65535,C&=65535,P[V]=C<<16|F}return new c(P,P[P.length-1]&-2147483648?-1:0)};function G(D,S){return D.add(L(S))}n.j=function(D){if(j(this)||j(D))return E;if(z(this))return z(D)?L(this).j(L(D)):L(L(this).j(D));if(z(D))return L(this.j(L(D)));if(0>this.l(k)&&0>D.l(k))return y(this.m()*D.m());for(var S=this.g.length+D.g.length,P=[],x=0;x<2*S;x++)P[x]=0;for(x=0;x<this.g.length;x++)for(var V=0;V<D.g.length;V++){var F=this.i(x)>>>16,C=this.i(x)&65535,Ye=D.i(V)>>>16,Ke=D.i(V)&65535;P[2*x+2*V]+=C*Ke,ee(P,2*x+2*V),P[2*x+2*V+1]+=F*Ke,ee(P,2*x+2*V+1),P[2*x+2*V+1]+=C*Ye,ee(P,2*x+2*V+1),P[2*x+2*V+2]+=F*Ye,ee(P,2*x+2*V+2)}for(x=0;x<S;x++)P[x]=P[2*x+1]<<16|P[2*x];for(x=S;x<2*S;x++)P[x]=0;return new c(P,0)};function ee(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function X(D,S){this.g=D,this.h=S}function ie(D,S){if(j(S))throw Error("division by zero");if(j(D))return new X(E,E);if(z(D))return S=ie(L(D),S),new X(L(S.g),L(S.h));if(z(S))return S=ie(D,L(S)),new X(L(S.g),S.h);if(30<D.g.length){if(z(D)||z(S))throw Error("slowDivide_ only works with positive integers.");for(var P=T,x=S;0>=x.l(D);)P=ve(P),x=ve(x);var V=_e(P,1),F=_e(x,1);for(x=_e(x,2),P=_e(P,2);!j(x);){var C=F.add(x);0>=C.l(D)&&(V=V.add(P),F=C),x=_e(x,1),P=_e(P,1)}return S=G(D,V.j(S)),new X(V,S)}for(V=E;0<=D.l(S);){for(P=Math.max(1,Math.floor(D.m()/S.m())),x=Math.ceil(Math.log(P)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),F=y(P),C=F.j(S);z(C)||0<C.l(D);)P-=x,F=y(P),C=F.j(S);j(F)&&(F=T),V=V.add(F),D=G(D,C)}return new X(V,D)}n.A=function(D){return ie(this,D).h},n.and=function(D){for(var S=Math.max(this.g.length,D.g.length),P=[],x=0;x<S;x++)P[x]=this.i(x)&D.i(x);return new c(P,this.h&D.h)},n.or=function(D){for(var S=Math.max(this.g.length,D.g.length),P=[],x=0;x<S;x++)P[x]=this.i(x)|D.i(x);return new c(P,this.h|D.h)},n.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),P=[],x=0;x<S;x++)P[x]=this.i(x)^D.i(x);return new c(P,this.h^D.h)};function ve(D){for(var S=D.g.length+1,P=[],x=0;x<S;x++)P[x]=D.i(x)<<1|D.i(x-1)>>>31;return new c(P,D.h)}function _e(D,S){var P=S>>5;S%=32;for(var x=D.g.length-P,V=[],F=0;F<x;F++)V[F]=0<S?D.i(F+P)>>>S|D.i(F+P+1)<<32-S:D.i(F+P);return new c(V,D.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Hw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=_,Li=c}).apply(typeof vv<"u"?vv:typeof self<"u"?self:typeof window<"u"?window:{});var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qw,cl,Ww,Pc,zf,Gw,Kw,Qw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof gc=="object"&&gc];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var I=0;I<u.length-1;I++){var U=u[I];if(!(U in v))break e;v=v[U]}u=u[u.length-1],I=v[u],m=m(I),m!=I&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function a(u,m){u instanceof String&&(u+="");var v=0,I=!1,U={next:function(){if(!I&&v<u.length){var q=v++;return{value:m(q,u[q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return a(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,v){return u.call.apply(u.bind,arguments)}function E(u,m,v){if(!u)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,I),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function T(u,m,v){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:E,T.apply(null,arguments)}function k(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var I=v.slice();return I.push.apply(I,arguments),u.apply(this,I)}}function j(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(I,U,q){for(var ne=Array(arguments.length-2),je=2;je<arguments.length;je++)ne[je-2]=arguments[je];return m.prototype[U].apply(I,ne)}}function z(u){const m=u.length;if(0<m){const v=Array(m);for(let I=0;I<m;I++)v[I]=u[I];return v}return[]}function L(u,m){for(let v=1;v<arguments.length;v++){const I=arguments[v];if(p(I)){const U=u.length||0,q=I.length||0;u.length=U+q;for(let ne=0;ne<q;ne++)u[U+ne]=I[ne]}else u.push(I)}}class G{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ee(u){return/^[\s\xa0]*$/.test(u)}function X(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function ie(u){return ie[" "](u),u}ie[" "]=function(){};var ve=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function _e(u,m,v){for(const I in u)m.call(v,u[I],I,u)}function D(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function S(u){const m={};for(const v in u)m[v]=u[v];return m}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,m){let v,I;for(let U=1;U<arguments.length;U++){I=arguments[U];for(v in I)u[v]=I[v];for(let q=0;q<P.length;q++)v=P[q],Object.prototype.hasOwnProperty.call(I,v)&&(u[v]=I[v])}}function V(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function F(u){d.setTimeout(()=>{throw u},0)}function C(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Ye{constructor(){this.h=this.g=null}add(m,v){const I=Ke.get();I.set(m,v),this.h?this.h.next=I:this.g=I,this.h=I}}var Ke=new G(()=>new Ot,u=>u.reset());class Ot{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,re=!1,me=new Ye,le=()=>{const u=d.Promise.resolve(void 0);Be=()=>{u.then(M)}};var M=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(v){F(v)}var m=Ke;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}re=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};d.addEventListener("test",v,m),d.removeEventListener("test",v,m)}catch{}return u})();function Ce(u,m){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,I=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(ve){e:{try{ie(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}j(Ce,fe);var De={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function He(u,m,v,I,U){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!I,this.ha=U,this.key=++Fe,this.da=this.fa=!1}function Tt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Sr(u){this.src=u,this.g={},this.h=0}Sr.prototype.add=function(u,m,v,I,U){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var ne=ii(u,m,I,U);return-1<ne?(m=u[ne],v||(m.fa=!1)):(m=new He(m,this.src,q,!!I,U),m.fa=v,u.push(m)),m};function zs(u,m){var v=m.type;if(v in u.g){var I=u.g[v],U=Array.prototype.indexOf.call(I,m,void 0),q;(q=0<=U)&&Array.prototype.splice.call(I,U,1),q&&(Tt(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function ii(u,m,v,I){for(var U=0;U<u.length;++U){var q=u[U];if(!q.da&&q.listener==m&&q.capture==!!v&&q.ha==I)return U}return-1}var Yi="closure_lm_"+(1e6*Math.random()|0),$s={};function ha(u,m,v,I,U){if(Array.isArray(m)){for(var q=0;q<m.length;q++)ha(u,m[q],v,I,U);return null}return v=pa(v),u&&u[Me]?u.K(m,v,y(I)?!!I.capture:!1,U):da(u,m,v,!1,I,U)}function da(u,m,v,I,U,q){if(!m)throw Error("Invalid event type");var ne=y(U)?!!U.capture:!!U,je=qs(u);if(je||(u[Yi]=je=new Sr(u)),v=je.add(m,v,I,ne,q),v.proxy)return v;if(I=Jl(),v.proxy=I,I.src=u,I.listener=v,u.addEventListener)Ae||(U=ne),U===void 0&&(U=!1),u.addEventListener(m.toString(),I,U);else if(u.attachEvent)u.attachEvent(Rr(m.toString()),I);else if(u.addListener&&u.removeListener)u.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Jl(){function u(v){return m.call(u.src,u.listener,v)}const m=fa;return u}function Hs(u,m,v,I,U){if(Array.isArray(m))for(var q=0;q<m.length;q++)Hs(u,m[q],v,I,U);else I=y(I)?!!I.capture:!!I,v=pa(v),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],v=ii(q,v,I,U),-1<v&&(Tt(q[v]),Array.prototype.splice.call(q,v,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=qs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=ii(m,v,I,U)),(v=-1<u?m[u]:null)&&Ar(v))}function Ar(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])zs(m.i,u);else{var v=u.type,I=u.proxy;m.removeEventListener?m.removeEventListener(v,I,u.capture):m.detachEvent?m.detachEvent(Rr(v),I):m.addListener&&m.removeListener&&m.removeListener(I),(v=qs(m))?(zs(v,u),v.h==0&&(v.src=null,m[Yi]=null)):Tt(u)}}}function Rr(u){return u in $s?$s[u]:$s[u]="on"+u}function fa(u,m){if(u.da)u=!0;else{m=new Ce(m,this);var v=u.listener,I=u.ha||u.src;u.fa&&Ar(u),u=v.call(I,m)}return u}function qs(u){return u=u[Yi],u instanceof Sr?u:null}var Ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function pa(u){return typeof u=="function"?u:(u[Ws]||(u[Ws]=function(m){return u.handleEvent(m)}),u[Ws])}function mt(){Q.call(this),this.i=new Sr(this),this.M=this,this.F=null}j(mt,Q),mt.prototype[Me]=!0,mt.prototype.removeEventListener=function(u,m,v,I){Hs(this,u,m,v,I)};function gt(u,m){var v,I=u.F;if(I)for(v=[];I;I=I.F)v.push(I);if(u=u.M,I=m.type||m,typeof m=="string")m=new fe(m,u);else if(m instanceof fe)m.target=m.target||u;else{var U=m;m=new fe(I,u),x(m,U)}if(U=!0,v)for(var q=v.length-1;0<=q;q--){var ne=m.g=v[q];U=Cr(ne,I,!0,m)&&U}if(ne=m.g=u,U=Cr(ne,I,!0,m)&&U,U=Cr(ne,I,!1,m)&&U,v)for(q=0;q<v.length;q++)ne=m.g=v[q],U=Cr(ne,I,!1,m)&&U}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],I=0;I<v.length;I++)Tt(v[I]);delete u.g[m],u.h--}}this.F=null},mt.prototype.K=function(u,m,v,I){return this.i.add(String(u),m,!1,v,I)},mt.prototype.L=function(u,m,v,I){return this.i.add(String(u),m,!0,v,I)};function Cr(u,m,v,I){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,q=0;q<m.length;++q){var ne=m[q];if(ne&&!ne.da&&ne.capture==v){var je=ne.listener,yt=ne.ha||ne.src;ne.fa&&zs(u.i,ne),U=je.call(yt,I)!==!1&&U}}return U&&!I.defaultPrevented}function ma(u,m,v){if(typeof u=="function")v&&(u=T(u,v));else if(u&&typeof u.handleEvent=="function")u=T(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function si(u){u.g=ma(()=>{u.g=null,u.i&&(u.i=!1,si(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ji extends Q{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:si(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(u){Q.call(this),this.h=u,this.g={}}j(Zi,Q);var ga=[];function ya(u){_e(u.g,function(m,v){this.g.hasOwnProperty(v)&&Ar(m)},u),u.g={}}Zi.prototype.N=function(){Zi.aa.N.call(this),ya(this)},Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var va=d.JSON.stringify,_a=d.JSON.parse,wa=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function es(){}es.prototype.h=null;function Gs(u){return u.h||(u.h=u.i())}function Ks(){}var _n={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nr(){fe.call(this,"d")}j(nr,fe);function Qs(){fe.call(this,"c")}j(Qs,fe);var rr={},Ea=null;function ts(){return Ea=Ea||new mt}rr.La="serverreachability";function Ta(u){fe.call(this,rr.La,u)}j(Ta,fe);function Pr(u){const m=ts();gt(m,new Ta(m))}rr.STAT_EVENT="statevent";function Ia(u,m){fe.call(this,rr.STAT_EVENT,u),this.stat=m}j(Ia,fe);function ot(u){const m=ts();gt(m,new Ia(m,u))}rr.Ma="timingevent";function Xs(u,m){fe.call(this,rr.Ma,u),this.size=m}j(Xs,fe);function Vn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function ns(){this.g=!0}ns.prototype.xa=function(){this.g=!1};function rs(u,m,v,I,U,q){u.info(function(){if(u.g)if(q)for(var ne="",je=q.split("&"),yt=0;yt<je.length;yt++){var be=je[yt].split("=");if(1<be.length){var It=be[0];be=be[1];var ct=It.split("_");ne=2<=ct.length&&ct[1]=="type"?ne+(It+"="+be+"&"):ne+(It+"=redacted&")}}else ne=null;else ne=q;return"XMLHTTP REQ ("+I+") [attempt "+U+"]: "+m+`
`+v+`
`+ne})}function Ys(u,m,v,I,U,q,ne){u.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+U+"]: "+m+`
`+v+`
`+q+" "+ne})}function On(u,m,v,I){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Dh(u,v)+(I?" "+I:"")})}function Sa(u,m){u.info(function(){return"TIMEOUT: "+m})}ns.prototype.info=function(){};function Dh(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var I=v[u];if(!(2>I.length)){var U=I[1];if(Array.isArray(U)&&!(1>U.length)){var q=U[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ne=1;ne<U.length;ne++)U[ne]=""}}}}return va(v)}catch{return m}}var Js={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ln;function is(){}j(is,es),is.prototype.g=function(){return new XMLHttpRequest},is.prototype.i=function(){return{}},Ln=new is;function Mn(u,m,v,I){this.j=u,this.i=m,this.l=v,this.R=I||1,this.U=new Zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eu}function eu(){this.i=null,this.g="",this.h=!1}var Aa={},Zs={};function eo(u,m,v){u.L=1,u.v=ci(un(m)),u.m=v,u.P=!0,Ra(u,null)}function Ra(u,m){u.F=Date.now(),qe(u),u.A=un(u.v);var v=u.A,I=u.R;Array.isArray(I)||(I=[String(I)]),di(v.i,"t",I),u.C=0,v=u.j.J,u.h=new eu,u.g=vu(u.j,v?m:null,!u.m),0<u.O&&(u.M=new Ji(T(u.Y,u,u.g),u.O)),m=u.U,v=u.g,I=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(ga[0]=U.toString()),U=ga);for(var q=0;q<U.length;q++){var ne=ha(v,U[q],I||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Pr(),rs(u.i,u.u,u.A,u.l,u.R,u.m)}Mn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Yt(u)==3?m.j():this.Y(u)},Mn.prototype.Y=function(u){try{if(u==this.g)e:{const ct=Yt(this.g);var m=this.g.Ba();const Tn=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Da(this.g)))){this.J||ct!=4||m==7||(m==8||0>=Tn?Pr(3):Pr(2)),ss(this);var v=this.g.Z();this.X=v;t:if(tu(this)){var I=Da(this.g);u="";var U=I.length,q=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),oi(this);var ne="";break t}this.h.i=new d.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(I[m],{stream:!(q&&m==U-1)});I.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=v==200,Ys(this.i,this.u,this.A,this.l,this.R,ct,v),this.o){if(this.T&&!this.K){t:{if(this.g){var je,yt=this.g;if((je=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(je)){var be=je;break t}}be=null}if(v=be)On(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ca(this,v);else{this.o=!1,this.s=3,ot(12),wn(this),oi(this);break e}}if(this.P){v=!0;let hn;for(;!this.J&&this.C<ne.length;)if(hn=bh(this,ne),hn==Zs){ct==4&&(this.s=4,ot(14),v=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==Aa){this.s=4,ot(15),On(this.i,this.l,ne,"[Invalid Chunk]"),v=!1;break}else On(this.i,this.l,hn,null),Ca(this,hn);if(tu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||ne.length!=0||this.h.h||(this.s=1,ot(16),v=!1),this.o=this.o&&v,!v)On(this.i,this.l,ne,"[Invalid Chunked Response]"),wn(this),oi(this);else if(0<ne.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Va(It),It.M=!0,ot(11))}}else On(this.i,this.l,ne,null),Ca(this,ne);ct==4&&wn(this),this.o&&!this.J&&(ct==4?ho(this.j,this):(this.o=!1,qe(this)))}else oo(this.g),v==400&&0<ne.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),wn(this),oi(this)}}}catch{}finally{}};function tu(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function bh(u,m){var v=u.C,I=m.indexOf(`
`,v);return I==-1?Zs:(v=Number(m.substring(v,I)),isNaN(v)?Aa:(I+=1,I+v>m.length?Zs:(m=m.slice(I,I+v),u.C=I+v,m)))}Mn.prototype.cancel=function(){this.J=!0,wn(this)};function qe(u){u.S=Date.now()+u.I,nu(u,u.I)}function nu(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Vn(T(u.ba,u),m)}function ss(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Mn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Sa(this.i,this.A),this.L!=2&&(Pr(),ot(17)),wn(this),this.s=2,oi(this)):nu(this,this.S-u)};function oi(u){u.j.G==0||u.J||ho(u.j,u)}function wn(u){ss(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ya(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Ca(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||qt(v.h,u))){if(!u.K&&qt(v.h,u)&&v.G==3){try{var I=v.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var U=I;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)co(v),zn(v);else break e;uo(v),ot(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Vn(T(v.Za,v),6e3));if(1>=iu(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else br(v,11)}else if((u.K||v.g==u)&&co(v),!ee(m))for(U=v.Da.g.parse(m),m=0;m<U.length;m++){let be=U[m];if(v.T=be[0],be=be[1],v.G==2)if(be[0]=="c"){v.K=be[1],v.ia=be[2];const It=be[3];It!=null&&(v.la=It,v.j.info("VER="+v.la));const ct=be[4];ct!=null&&(v.Aa=ct,v.j.info("SVER="+v.Aa));const Tn=be[5];Tn!=null&&typeof Tn=="number"&&0<Tn&&(I=1.5*Tn,v.L=I,v.j.info("backChannelRequestTimeoutMs_="+I)),I=v;const hn=u.g;if(hn){const ds=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ds){var q=I.h;q.g||ds.indexOf("spdy")==-1&&ds.indexOf("quic")==-1&&ds.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Pa(q,q.h),q.h=null))}if(I.D){const po=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;po&&(I.ya=po,ze(I.I,I.D,po))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),I=v;var ne=u;if(I.qa=yu(I,I.J?I.ia:null,I.W),ne.K){su(I.h,ne);var je=ne,yt=I.L;yt&&(je.I=yt),je.B&&(ss(je),qe(je)),I.g=ne}else hs(I);0<v.i.length&&ar(v)}else be[0]!="stop"&&be[0]!="close"||br(v,7);else v.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?br(v,7):xt(v):be[0]!="noop"&&v.l&&v.l.ta(be),v.v=0)}}Pr(4)}catch{}}var ru=class{constructor(u,m){this.g=u,this.map=m}};function os(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ln(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function iu(u){return u.h?1:u.g?u.g.size:0}function qt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Pa(u,m){u.g?u.g.add(m):u.h=m}function su(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}os.prototype.cancel=function(){if(this.i=ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ou(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return z(u.i)}function to(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,I=0;I<v;I++)m.push(u[I]);return m}m=[],v=0;for(I in u)m[v++]=u[I];return m}function no(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const I in u)m[v++]=I;return m}}}function ai(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=no(u),I=to(u),U=I.length,q=0;q<U;q++)m.call(void 0,I[q],v&&v[q],u)}var as=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vh(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var I=u[v].indexOf("="),U=null;if(0<=I){var q=u[v].substring(0,I);U=u[v].substring(I+1)}else q=u[v];m(q,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function kr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof kr){this.h=u.h,ls(this,u.j),this.o=u.o,this.g=u.g,li(this,u.s),this.l=u.l;var m=u.i,v=new ir;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),ui(this,v),this.m=u.m}else u&&(m=String(u).match(as))?(this.h=!1,ls(this,m[1]||"",!0),this.o=xe(m[2]||""),this.g=xe(m[3]||"",!0),li(this,m[4]),this.l=xe(m[5]||"",!0),ui(this,m[6]||"",!0),this.m=xe(m[7]||"")):(this.h=!1,this.i=new ir(null,this.h))}kr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(hi(m,ro,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(hi(m,ro,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(hi(v,v.charAt(0)=="/"?uu:lu,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",hi(v,ka)),u.join("")};function un(u){return new kr(u)}function ls(u,m,v){u.j=v?xe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function li(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ui(u,m,v){m instanceof ir?(u.i=m,sr(u.i,u.h)):(v||(m=hi(m,cu)),u.i=new ir(m,u.h))}function ze(u,m,v){u.i.set(m,v)}function ci(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function hi(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,au),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function au(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ro=/[#\/\?@]/g,lu=/[#\?:]/g,uu=/[#\?]/g,cu=/[#\?@]/g,ka=/#/g;function ir(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Nt(u){u.g||(u.g=new Map,u.h=0,u.i&&Vh(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=ir.prototype,n.add=function(u,m){Nt(this),this.i=null,u=En(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function Fn(u,m){Nt(u),m=En(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Un(u,m){return Nt(u),m=En(u,m),u.g.has(m)}n.forEach=function(u,m){Nt(this),this.g.forEach(function(v,I){v.forEach(function(U){u.call(m,U,I,this)},this)},this)},n.na=function(){Nt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let I=0;I<m.length;I++){const U=u[I];for(let q=0;q<U.length;q++)v.push(m[I])}return v},n.V=function(u){Nt(this);let m=[];if(typeof u=="string")Un(this,u)&&(m=m.concat(this.g.get(En(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return Nt(this),this.i=null,u=En(this,u),Un(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function di(u,m,v){Fn(u,m),0<v.length&&(u.i=null,u.g.set(En(u,m),z(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var I=m[v];const q=encodeURIComponent(String(I)),ne=this.V(I);for(I=0;I<ne.length;I++){var U=q;ne[I]!==""&&(U+="="+encodeURIComponent(String(ne[I]))),u.push(U)}}return this.i=u.join("&")};function En(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function sr(u,m){m&&!u.j&&(Nt(u),u.i=null,u.g.forEach(function(v,I){var U=I.toLowerCase();I!=U&&(Fn(this,I),di(this,U,v))},u)),u.j=m}function Oh(u,m){const v=new ns;if(d.Image){const I=new Image;I.onload=k(Xt,v,"TestLoadImage: loaded",!0,m,I),I.onerror=k(Xt,v,"TestLoadImage: error",!1,m,I),I.onabort=k(Xt,v,"TestLoadImage: abort",!1,m,I),I.ontimeout=k(Xt,v,"TestLoadImage: timeout",!1,m,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=u}else m(!1)}function hu(u,m){const v=new ns,I=new AbortController,U=setTimeout(()=>{I.abort(),Xt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:I.signal}).then(q=>{clearTimeout(U),q.ok?Xt(v,"TestPingServer: ok",!0,m):Xt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Xt(v,"TestPingServer: error",!1,m)})}function Xt(u,m,v,I,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),I(v)}catch{}}function Lh(){this.g=new wa}function du(u,m,v){const I=v||"";try{ai(u,function(U,q){let ne=U;y(U)&&(ne=va(U)),m.push(I+q+"="+encodeURIComponent(ne))})}catch(U){throw m.push(I+"type="+encodeURIComponent("_badmap")),U}}function Nr(u){this.l=u.Ub||null,this.j=u.eb||!1}j(Nr,es),Nr.prototype.g=function(){return new us(this.l,this.j)},Nr.prototype.i=(function(u){return function(){return u}})({});function us(u,m){mt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(us,mt),n=us.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Bn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function fu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?jn(this):Bn(this),this.readyState==3&&fu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,jn(this))},n.Qa=function(u){this.g&&(this.response=u,jn(this))},n.ga=function(){this.g&&jn(this)};function jn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Bn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Bn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function xr(u){let m="";return _e(u,function(v,I){m+=I,m+=":",m+=v,m+=`\r
`}),m}function fi(u,m,v){e:{for(I in v){var I=!1;break e}I=!0}I||(v=xr(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):ze(u,m,v))}function Je(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(Je,mt);var Mh=/^https?$/i,Na=["POST","PUT"];n=Je.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ln.g(),this.v=this.o?Gs(this.o):Gs(Ln),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){cs(this,q);return}if(u=v||"",v=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var U in I)v.set(U,I[U]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const q of I.keys())v.set(q,I.get(q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),U=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Na,m,void 0))||I||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ne]of v)this.g.setRequestHeader(q,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{so(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){cs(this,q)}};function cs(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,io(u),cn(u)}function io(u){u.A||(u.A=!0,gt(u,"complete"),gt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,gt(this,"complete"),gt(this,"abort"),cn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cn(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?xa(this):this.bb())},n.bb=function(){xa(this)};function xa(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Yt(u)!=4||u.Z()!=2)){if(u.u&&Yt(u)==4)ma(u.Ea,0,u);else if(gt(u,"readystatechange"),Yt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var I;if(I=ne===0){var U=String(u.D).match(as)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),I=!Mh.test(U?U.toLowerCase():"")}v=I}if(v)gt(u,"complete"),gt(u,"success");else{u.m=6;try{var q=2<Yt(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",io(u)}}finally{cn(u)}}}}function cn(u,m){if(u.g){so(u);const v=u.g,I=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||gt(u,"ready");try{v.onreadystatechange=I}catch{}}}function so(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Yt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),_a(m)}};function Da(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function oo(u){const m={};u=(u.g&&2<=Yt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<u.length;I++){if(ee(u[I]))continue;var v=V(u[I]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=m[U]||[];m[U]=q,q.push(v)}D(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function or(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function ba(u){this.Aa=0,this.i=[],this.j=new ns,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=or("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=or("baseRetryDelayMs",5e3,u),this.cb=or("retryDelaySeedMs",1e4,u),this.Wa=or("forwardChannelMaxRetries",2,u),this.wa=or("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new os(u&&u.concurrentRequestLimit),this.Da=new Lh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ba.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,I){ot(0),this.W=u,this.H=m||{},v&&I!==void 0&&(this.H.OSID=v,this.H.OAID=I),this.F=this.X,this.I=yu(this,null,this.W),ar(this)};function xt(u){if(ao(u),u.G==3){var m=u.U++,v=un(u.I);if(ze(v,"SID",u.K),ze(v,"RID",m),ze(v,"TYPE","terminate"),Dr(u,v),m=new Mn(u,u.j,m),m.L=2,m.v=ci(un(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=m.v,v=!0),v||(m.g=vu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}gu(u)}function zn(u){u.g&&(Va(u),u.g.cancel(),u.g=null)}function ao(u){zn(u),u.u&&(d.clearTimeout(u.u),u.u=null),co(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function ar(u){if(!ln(u.h)&&!u.s){u.s=!0;var m=u.Ga;Be||le(),re||(Be(),re=!0),me.add(m,u),u.B=0}}function Fh(u,m){return iu(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Vn(T(u.Ga,u,m),mu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new Mn(this,this.j,u);let q=this.o;if(this.S&&(q?(q=S(q),x(q,this.S)):q=this.S),this.m!==null||this.O||(U.H=q,q=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var I=this.i[v];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=pi(this,U,m),v=un(this.I),ze(v,"RID",u),ze(v,"CVER",22),this.D&&ze(v,"X-HTTP-Session-Id",this.D),Dr(this,v),q&&(this.O?m="headers="+encodeURIComponent(String(xr(q)))+"&"+m:this.m&&fi(v,this.m,q)),Pa(this.h,U),this.Ua&&ze(v,"TYPE","init"),this.P?(ze(v,"$req",m),ze(v,"SID","null"),U.T=!0,eo(U,v,null)):eo(U,v,m),this.G=2}}else this.G==3&&(u?lo(this,u):this.i.length==0||ln(this.h)||lo(this))};function lo(u,m){var v;m?v=m.l:v=u.U++;const I=un(u.I);ze(I,"SID",u.K),ze(I,"RID",v),ze(I,"AID",u.T),Dr(u,I),u.m&&u.o&&fi(I,u.m,u.o),v=new Mn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=pi(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Pa(u.h,v),eo(v,I,m)}function Dr(u,m){u.H&&_e(u.H,function(v,I){ze(m,I,v)}),u.l&&ai({},function(v,I){ze(m,I,v)})}function pi(u,m,v){v=Math.min(u.i.length,v);var I=u.l?T(u.l.Na,u.l,u):null;e:{var U=u.i;let q=-1;for(;;){const ne=["count="+v];q==-1?0<v?(q=U[0].g,ne.push("ofs="+q)):q=0:ne.push("ofs="+q);let je=!0;for(let yt=0;yt<v;yt++){let be=U[yt].g;const It=U[yt].map;if(be-=q,0>be)q=Math.max(0,U[yt].g-100),je=!1;else try{du(It,ne,"req"+be+"_")}catch{I&&I(It)}}if(je){I=ne.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,I}function hs(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Be||le(),re||(Be(),re=!0),me.add(m,u),u.v=0}}function uo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Vn(T(u.Fa,u),mu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,pu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Vn(T(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),zn(this),pu(this))};function Va(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function pu(u){u.g=new Mn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=un(u.qa);ze(m,"RID","rpc"),ze(m,"SID",u.K),ze(m,"AID",u.T),ze(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(m,"TO",u.ja),ze(m,"TYPE","xmlhttp"),Dr(u,m),u.m&&u.o&&fi(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=ci(un(m)),v.m=null,v.P=!0,Ra(v,u)}n.Za=function(){this.C!=null&&(this.C=null,zn(this),uo(this),ot(19))};function co(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function ho(u,m){var v=null;if(u.g==m){co(u),Va(u),u.g=null;var I=2}else if(qt(u.h,m))v=m.D,su(u.h,m),I=1;else return;if(u.G!=0){if(m.o)if(I==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;I=ts(),gt(I,new Xs(I,v)),ar(u)}else hs(u);else if(U=m.s,U==3||U==0&&0<m.X||!(I==1&&Fh(u,m)||I==2&&uo(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),U){case 1:br(u,5);break;case 4:br(u,10);break;case 3:br(u,6);break;default:br(u,2)}}}function mu(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function br(u,m){if(u.j.info("Error code "+m),m==2){var v=T(u.fb,u),I=u.Xa;const U=!I;I=new kr(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ls(I,"https"),ci(I),U?Oh(I.toString(),v):hu(I.toString(),v)}else ot(2);u.G=0,u.l&&u.l.sa(m),gu(u),ao(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function gu(u){if(u.G=0,u.ka=[],u.l){const m=ou(u.h);(m.length!=0||u.i.length!=0)&&(L(u.ka,m),L(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function yu(u,m,v){var I=v instanceof kr?un(v):new kr(v);if(I.g!="")m&&(I.g=m+"."+I.g),li(I,I.s);else{var U=d.location;I=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var q=new kr(null);I&&ls(q,I),m&&(q.g=m),U&&li(q,U),v&&(q.l=v),I=q}return v=u.D,m=u.ya,v&&m&&ze(I,v,m),ze(I,"VER",u.la),Dr(u,I),I}function vu(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Je(new Nr({eb:v})):new Je(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oa(){}n=Oa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function fo(){}fo.prototype.g=function(u,m){return new Wt(u,m)};function Wt(u,m){mt.call(this),this.g=new ba(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!ee(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ee(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new lr(this)}j(Wt,mt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){xt(this.g)},Wt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=va(u),u=v);m.i.push(new ru(m.Ya++,u)),m.G==3&&ar(m)},Wt.prototype.N=function(){this.g.l=null,delete this.j,xt(this.g),delete this.g,Wt.aa.N.call(this)};function _u(u){nr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}j(_u,nr);function wu(){Qs.call(this),this.status=1}j(wu,Qs);function lr(u){this.g=u}j(lr,Oa),lr.prototype.ua=function(){gt(this.g,"a")},lr.prototype.ta=function(u){gt(this.g,new _u(u))},lr.prototype.sa=function(u){gt(this.g,new wu)},lr.prototype.ra=function(){gt(this.g,"b")},fo.prototype.createWebChannel=fo.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,Qw=function(){return new fo},Kw=function(){return ts()},Gw=rr,zf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Js.NO_ERROR=0,Js.TIMEOUT=8,Js.HTTP_ERROR=6,Pc=Js,Zl.COMPLETE="complete",Ww=Zl,Ks.EventType=_n,_n.OPEN="a",_n.CLOSE="b",_n.ERROR="c",_n.MESSAGE="d",mt.prototype.listen=mt.prototype.K,cl=Ks,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,qw=Je}).apply(typeof gc<"u"?gc:typeof self<"u"?self:typeof window<"u"?window:{});const _v="@firebase/firestore",wv="4.8.0";/**
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
 */let aa="11.10.0";/**
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
 */const Ns=new gp("@firebase/firestore");function Lo(){return Ns.logLevel}function ae(n,...e){if(Ns.logLevel<=ke.DEBUG){const t=e.map(Cp);Ns.debug(`Firestore (${aa}): ${n}`,...t)}}function Zr(n,...e){if(Ns.logLevel<=ke.ERROR){const t=e.map(Cp);Ns.error(`Firestore (${aa}): ${n}`,...t)}}function ei(n,...e){if(Ns.logLevel<=ke.WARN){const t=e.map(Cp);Ns.warn(`Firestore (${aa}): ${n}`,...t)}}function Cp(n){if(typeof n=="string")return n;try{/**
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
 */function Ee(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Xw(n,i,t)}function Xw(n,e,t){let i=`FIRESTORE (${aa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Zr(i),new Error(i)}function Ue(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Xw(e,o,i)}function Se(n,e){return n}/**
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
 */class Gr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Yw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Bt.UNAUTHENTICATED)))}shutdown(){}}class Z1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class eP{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let a=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Gr,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const p=a;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},d=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Gr)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string",31837,{l:i}),new Yw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Bt(e)}}class tP{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nP{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new tP(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ev{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rP{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const i=a=>{a.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,ae("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>i(a)))};const o=a=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ev(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ev(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function iP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function Zw(){return new TextEncoder}/**
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
 */class ch{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=iP(40);for(let a=0;a<o.length;++a)i.length<20&&o[a]<t&&(i+=e.charAt(o[a]%62))}return i}}function Re(n,e){return n<e?-1:n>e?1:0}function $f(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Re(i,o);{const a=Zw(),c=sP(a.encode(Tv(n,t)),a.encode(Tv(e,t)));return c!==0?c:Re(i,o)}}t+=i>65535?2:1}return Re(n.length,e.length)}function Tv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function sP(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Re(n[t],e[t]);return Re(n.length,e.length)}function Wo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const Iv="__name__";class fr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ee(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Ee(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return fr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const a=fr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Re(e.length,t.length)}static compareSegments(e,t){const i=fr.isNumericId(e),o=fr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?fr.extractNumericId(e).compare(fr.extractNumericId(t)):$f(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Li.fromString(e.substring(4,e.length-2))}}class Ge extends fr{construct(e,t,i){return new Ge(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new se(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ge(t)}static emptyPath(){return new Ge([])}}const oP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends fr{construct(e,t,i){return new Pt(e,t,i)}static isValidIdentifier(e){return oP.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Iv}static keyField(){return new Pt([Iv])}static fromServerFormat(e){const t=[];let i="",o=0;const a=()=>{if(i.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new se(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new se(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(a(),o++)}if(a(),c)throw new se(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Ge.fromString(e))}static fromName(e){return new pe(Ge.fromString(e).popFirst(5))}static empty(){return new pe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Ge(e.slice()))}}/**
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
 */function eE(n,e,t){if(!t)throw new se(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tE(n,e,t,i){if(e===!0&&i===!0)throw new se(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sv(n){if(!pe.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Av(n){if(pe.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function nE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function hh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee(12329,{type:typeof n})}function Qt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=hh(n);throw new se(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function pt(n,e){const t={typeString:n};return e&&(t.value=e),t}function zl(n,e){if(!nE(n))throw new se(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,a="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(a!==void 0&&c!==a.value){t=`Expected '${i}' field to equal '${a.value}'`;break}}if(t)throw new se(W.INVALID_ARGUMENT,t);return!0}/**
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
 */const Rv=-62135596800,Cv=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Cv);return new $e(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rv)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cv}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zl(e,$e._jsonSchema))return new $e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$e._jsonSchemaVersion="firestore/timestamp/1.0",$e._jsonSchema={type:pt("string",$e._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
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
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new $e(0,0))}static max(){return new Ie(new $e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Sl=-1;function aP(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new $e(t+1,0):new $e(t,i));return new Ui(o,pe.empty(),e)}function lP(n){return new Ui(n.readTime,n.key,Sl)}class Ui{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ui(Ie.min(),pe.empty(),Sl)}static max(){return new Ui(Ie.max(),pe.empty(),Sl)}}function uP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
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
 */const cP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function la(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==cP)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((i,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,i)=>{t(e)}))}static reject(e){return new K(((t,i)=>{i(e)}))}static waitFor(e){return new K(((t,i)=>{let o=0,a=0,c=!1;e.forEach((d=>{++o,d.next((()=>{++a,c&&a===o&&t()}),(p=>i(p)))})),c=!0,a===o&&t()}))}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next((o=>o?K.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,a)=>{i.push(t.call(this,o,a))})),this.waitFor(i)}static mapArray(e,t){return new K(((i,o)=>{const a=e.length,c=new Array(a);let d=0;for(let p=0;p<a;p++){const y=p;t(e[y]).next((_=>{c[y]=_,++d,d===a&&i(c)}),(_=>o(_)))}}))}static doWhile(e,t){return new K(((i,o)=>{const a=()=>{e()===!0?t().next((()=>{a()}),o):i()};a()}))}}function dP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ua(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const Pp=-1;function fh(n){return n==null}function zc(n){return n===0&&1/n==-1/0}function fP(n){return typeof n=="number"&&Number.isInteger(n)&&!zc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const rE="";function pP(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Pv(e)),e=mP(n.get(t),e);return Pv(e)}function mP(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case rE:t+="";break;default:t+=a}}return t}function Pv(n){return n+rE+""}/**
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
 */function kv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ki(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function iE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class it{constructor(e,t){this.comparator=e,this.root=t||Vt.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yc(this.root,e,this.comparator,!1)}getReverseIterator(){return new yc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yc(this.root,e,this.comparator,!0)}}class yc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Vt{constructor(e,t,i,o,a){this.key=e,this.value=t,this.color=i??Vt.RED,this.left=o??Vt.EMPTY,this.right=a??Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,a){return new Vt(e??this.key,t??this.value,i??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const a=i(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,i),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Vt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,t,i,o,a){return this}insert(e,t,i){return new Vt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new gn([])}unionWith(e){let t=new wt(Pt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new gn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class sE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new sE("Invalid base64 string: "+a):a}})(e);return new kt(t)}static fromUint8Array(e){const t=(function(o){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);return a})(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const gP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ji(n){if(Ue(!!n,39018),typeof n=="string"){let e=0;const t=gP.exec(n);if(Ue(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bi(n){return typeof n=="string"?kt.fromBase64String(n):kt.fromUint8Array(n)}/**
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
 */const oE="server_timestamp",aE="__type__",lE="__previous_value__",uE="__local_write_time__";function kp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[aE])===null||t===void 0?void 0:t.stringValue)===oE}function ph(n){const e=n.mapValue.fields[lE];return kp(e)?ph(e):e}function Al(n){const e=ji(n.mapValue.fields[uE].timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class yP{constructor(e,t,i,o,a,c,d,p,y,_){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=_}}const $c="(default)";class Go{constructor(e,t){this.projectId=e,this.database=t||$c}static empty(){return new Go("","")}get isDefaultDatabase(){return this.database===$c}isEqual(e){return e instanceof Go&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const cE="__type__",vP="__max__",vc={mapValue:{}},hE="__vector__",Hc="value";function zi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?kp(n)?4:wP(n)?9007199254740991:_P(n)?10:11:Ee(28295,{value:n})}function wr(n,e){if(n===e)return!0;const t=zi(n);if(t!==zi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Al(n).isEqual(Al(e));case 3:return(function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const c=ji(o.timestampValue),d=ji(a.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,a){return Bi(o.bytesValue).isEqual(Bi(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,a){return lt(o.geoPointValue.latitude)===lt(a.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(a.geoPointValue.longitude)})(n,e);case 2:return(function(o,a){if("integerValue"in o&&"integerValue"in a)return lt(o.integerValue)===lt(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const c=lt(o.doubleValue),d=lt(a.doubleValue);return c===d?zc(c)===zc(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return Wo(n.arrayValue.values||[],e.arrayValue.values||[],wr);case 10:case 11:return(function(o,a){const c=o.mapValue.fields||{},d=a.mapValue.fields||{};if(kv(c)!==kv(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!wr(c[p],d[p])))return!1;return!0})(n,e);default:return Ee(52216,{left:n})}}function Rl(n,e){return(n.values||[]).find((t=>wr(t,e)))!==void 0}function Ko(n,e){if(n===e)return 0;const t=zi(n),i=zi(e);if(t!==i)return Re(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return(function(a,c){const d=lt(a.integerValue||a.doubleValue),p=lt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return xv(n.timestampValue,e.timestampValue);case 4:return xv(Al(n),Al(e));case 5:return $f(n.stringValue,e.stringValue);case 6:return(function(a,c){const d=Bi(a),p=Bi(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(a,c){const d=a.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const _=Re(d[y],p[y]);if(_!==0)return _}return Re(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,c){const d=Re(lt(a.latitude),lt(c.latitude));return d!==0?d:Re(lt(a.longitude),lt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Dv(n.arrayValue,e.arrayValue);case 10:return(function(a,c){var d,p,y,_;const E=a.fields||{},T=c.fields||{},k=(d=E[Hc])===null||d===void 0?void 0:d.arrayValue,j=(p=T[Hc])===null||p===void 0?void 0:p.arrayValue,z=Re(((y=k==null?void 0:k.values)===null||y===void 0?void 0:y.length)||0,((_=j==null?void 0:j.values)===null||_===void 0?void 0:_.length)||0);return z!==0?z:Dv(k,j)})(n.mapValue,e.mapValue);case 11:return(function(a,c){if(a===vc.mapValue&&c===vc.mapValue)return 0;if(a===vc.mapValue)return 1;if(c===vc.mapValue)return-1;const d=a.fields||{},p=Object.keys(d),y=c.fields||{},_=Object.keys(y);p.sort(),_.sort();for(let E=0;E<p.length&&E<_.length;++E){const T=$f(p[E],_[E]);if(T!==0)return T;const k=Ko(d[p[E]],y[_[E]]);if(k!==0)return k}return Re(p.length,_.length)})(n.mapValue,e.mapValue);default:throw Ee(23264,{le:t})}}function xv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=ji(n),i=ji(e),o=Re(t.seconds,i.seconds);return o!==0?o:Re(t.nanos,i.nanos)}function Dv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const a=Ko(t[o],i[o]);if(a)return a}return Re(t.length,i.length)}function Qo(n){return Hf(n)}function Hf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=ji(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Bi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return pe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const a of t.values||[])o?o=!1:i+=",",i+=Hf(a);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const c of i)a?a=!1:o+=",",o+=`${c}:${Hf(t.fields[c])}`;return o+"}"})(n.mapValue):Ee(61005,{value:n})}function kc(n){switch(zi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ph(n);return e?16+kc(e):16;case 5:return 2*n.stringValue.length;case 6:return Bi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,a)=>o+kc(a)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Ki(i.fields,((a,c)=>{o+=a.length+kc(c)})),o})(n.mapValue);default:throw Ee(13486,{value:n})}}function bv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function qf(n){return!!n&&"integerValue"in n}function Np(n){return!!n&&"arrayValue"in n}function Vv(n){return!!n&&"nullValue"in n}function Ov(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Nc(n){return!!n&&"mapValue"in n}function _P(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[cE])===null||t===void 0?void 0:t.stringValue)===hE}function ml(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ki(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=ml(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ml(n.arrayValue.values[t]);return e}return Object.assign({},n)}function wP(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===vP}/**
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
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Nc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ml(t)}setAll(e){let t=Pt.emptyPath(),i={},o=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=ml(c):o.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,i,o)}delete(e){const t=this.field(e.popLast());Nc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Nc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ki(t,((o,a)=>e[o]=a));for(const o of i)delete e[o]}clone(){return new an(ml(this.value))}}function dE(n){const e=[];return Ki(n.fields,((t,i)=>{const o=new Pt([t]);if(Nc(i)){const a=dE(i.mapValue).fields;if(a.length===0)e.push(o);else for(const c of a)e.push(o.child(c))}else e.push(o)})),new gn(e)}/**
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
 */class zt{constructor(e,t,i,o,a,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=a,this.data=c,this.documentState=d}static newInvalidDocument(e){return new zt(e,0,Ie.min(),Ie.min(),Ie.min(),an.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Ie.min(),Ie.min(),an.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Ie.min(),Ie.min(),an.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qc{constructor(e,t){this.position=e,this.inclusive=t}}function Lv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const a=e[o],c=n.position[o];if(a.field.isKeyField()?i=pe.comparator(pe.fromName(c.referenceValue),t.key):i=Ko(c,t.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function Mv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!wr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Wc{constructor(e,t="asc"){this.field=e,this.dir=t}}function EP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class fE{}class ft extends fE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new IP(e,t,i):t==="array-contains"?new RP(e,i):t==="in"?new CP(e,i):t==="not-in"?new PP(e,i):t==="array-contains-any"?new kP(e,i):new ft(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new SP(e,i):new AP(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ko(t,this.value)):t!==null&&zi(this.value)===zi(t)&&this.matchesComparison(Ko(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class er extends fE{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new er(e,t)}matches(e){return pE(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function pE(n){return n.op==="and"}function mE(n){return TP(n)&&pE(n)}function TP(n){for(const e of n.filters)if(e instanceof er)return!1;return!0}function Wf(n){if(n instanceof ft)return n.field.canonicalString()+n.op.toString()+Qo(n.value);if(mE(n))return n.filters.map((e=>Wf(e))).join(",");{const e=n.filters.map((t=>Wf(t))).join(",");return`${n.op}(${e})`}}function gE(n,e){return n instanceof ft?(function(i,o){return o instanceof ft&&i.op===o.op&&i.field.isEqual(o.field)&&wr(i.value,o.value)})(n,e):n instanceof er?(function(i,o){return o instanceof er&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((a,c,d)=>a&&gE(c,o.filters[d])),!0):!1})(n,e):void Ee(19439)}function yE(n){return n instanceof ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${Qo(t.value)}`})(n):n instanceof er?(function(t){return t.op.toString()+" {"+t.getFilters().map(yE).join(" ,")+"}"})(n):"Filter"}class IP extends ft{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class SP extends ft{constructor(e,t){super(e,"in",t),this.keys=vE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class AP extends ft{constructor(e,t){super(e,"not-in",t),this.keys=vE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function vE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>pe.fromName(i.referenceValue)))}class RP extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Np(t)&&Rl(t.arrayValue,this.value)}}class CP extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Rl(this.value.arrayValue,t)}}class PP extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Rl(this.value.arrayValue,t)}}class kP extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Np(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Rl(this.value.arrayValue,i)))}}/**
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
 */class NP{constructor(e,t=null,i=[],o=[],a=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=a,this.startAt=c,this.endAt=d,this.Pe=null}}function Fv(n,e=null,t=[],i=[],o=null,a=null,c=null){return new NP(n,e,t,i,o,a,c)}function xp(n){const e=Se(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Wf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(a){return a.field.canonicalString()+a.dir})(i))).join(","),fh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Qo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Qo(i))).join(",")),e.Pe=t}return e.Pe}function Dp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!EP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Mv(n.startAt,e.startAt)&&Mv(n.endAt,e.endAt)}function Gf(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class $l{constructor(e,t=null,i=[],o=[],a=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=a,this.limitType=c,this.startAt=d,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function xP(n,e,t,i,o,a,c,d){return new $l(n,e,t,i,o,a,c,d)}function mh(n){return new $l(n)}function Uv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _E(n){return n.collectionGroup!==null}function gl(n){const e=Se(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new wt(Pt.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(d=d.add(y.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Wc(a,i))})),t.has(Pt.keyField().canonicalString())||e.Te.push(new Wc(Pt.keyField(),i))}return e.Te}function yr(n){const e=Se(n);return e.Ie||(e.Ie=DP(e,gl(n))),e.Ie}function DP(n,e){if(n.limitType==="F")return Fv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const a=o.dir==="desc"?"asc":"desc";return new Wc(o.field,a)}));const t=n.endAt?new qc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new qc(n.startAt.position,n.startAt.inclusive):null;return Fv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Kf(n,e){const t=n.filters.concat([e]);return new $l(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Qf(n,e,t){return new $l(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function gh(n,e){return Dp(yr(n),yr(e))&&n.limitType===e.limitType}function wE(n){return`${xp(yr(n))}|lt:${n.limitType}`}function Mo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>yE(o))).join(", ")}]`),fh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Qo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Qo(o))).join(",")),`Target(${i})`})(yr(n))}; limitType=${n.limitType})`}function yh(n,e){return e.isFoundDocument()&&(function(i,o){const a=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):pe.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)})(n,e)&&(function(i,o){for(const a of gl(i))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const a of i.filters)if(!a.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,d,p){const y=Lv(c,d,p);return c.inclusive?y<=0:y<0})(i.startAt,gl(i),o)||i.endAt&&!(function(c,d,p){const y=Lv(c,d,p);return c.inclusive?y>=0:y>0})(i.endAt,gl(i),o))})(n,e)}function bP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function EE(n){return(e,t)=>{let i=!1;for(const o of gl(n)){const a=VP(o,e,t);if(a!==0)return a;i=i||o.field.isKeyField()}return 0}}function VP(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):(function(a,c,d){const p=c.data.field(a),y=d.data.field(a);return p!==null&&y!==null?Ko(p,y):Ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ee(19790,{direction:n.dir})}}/**
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
 */class Ms{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,a]of i)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,((t,i)=>{for(const[o,a]of i)e(o,a)}))}isEmpty(){return iE(this.inner)}size(){return this.innerSize}}/**
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
 */const OP=new it(pe.comparator);function ti(){return OP}const TE=new it(pe.comparator);function hl(...n){let e=TE;for(const t of n)e=e.insert(t.key,t);return e}function IE(n){let e=TE;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Rs(){return yl()}function SE(){return yl()}function yl(){return new Ms((n=>n.toString()),((n,e)=>n.isEqual(e)))}const LP=new it(pe.comparator),MP=new wt(pe.comparator);function Ne(...n){let e=MP;for(const t of n)e=e.add(t);return e}const FP=new wt(Re);function UP(){return FP}/**
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
 */function bp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zc(e)?"-0":e}}function AE(n){return{integerValue:""+n}}function jP(n,e){return fP(e)?AE(e):bp(n,e)}/**
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
 */class vh{constructor(){this._=void 0}}function BP(n,e,t){return n instanceof Cl?(function(o,a){const c={fields:{[aE]:{stringValue:oE},[uE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&kp(a)&&(a=ph(a)),a&&(c.fields[lE]=a),{mapValue:c}})(t,e):n instanceof Xo?CE(n,e):n instanceof Yo?PE(n,e):(function(o,a){const c=RE(o,a),d=jv(c)+jv(o.Ee);return qf(c)&&qf(o.Ee)?AE(d):bp(o.serializer,d)})(n,e)}function zP(n,e,t){return n instanceof Xo?CE(n,e):n instanceof Yo?PE(n,e):t}function RE(n,e){return n instanceof Gc?(function(i){return qf(i)||(function(a){return!!a&&"doubleValue"in a})(i)})(e)?e:{integerValue:0}:null}class Cl extends vh{}class Xo extends vh{constructor(e){super(),this.elements=e}}function CE(n,e){const t=kE(e);for(const i of n.elements)t.some((o=>wr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class Yo extends vh{constructor(e){super(),this.elements=e}}function PE(n,e){let t=kE(e);for(const i of n.elements)t=t.filter((o=>!wr(o,i)));return{arrayValue:{values:t}}}class Gc extends vh{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function jv(n){return lt(n.integerValue||n.doubleValue)}function kE(n){return Np(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Vp{constructor(e,t){this.field=e,this.transform=t}}function $P(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof Xo&&o instanceof Xo||i instanceof Yo&&o instanceof Yo?Wo(i.elements,o.elements,wr):i instanceof Gc&&o instanceof Gc?wr(i.Ee,o.Ee):i instanceof Cl&&o instanceof Cl})(n.transform,e.transform)}class HP{constructor(e,t){this.version=e,this.transformResults=t}}class xn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _h{}function NE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Op(n.key,xn.none()):new Hl(n.key,n.data,xn.none());{const t=n.data,i=an.empty();let o=new wt(Pt.comparator);for(let a of e.fields)if(!o.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?i.delete(a):i.set(a,c),o=o.add(a)}return new Qi(n.key,i,new gn(o.toArray()),xn.none())}}function qP(n,e,t){n instanceof Hl?(function(o,a,c){const d=o.value.clone(),p=zv(o.fieldTransforms,a,c.transformResults);d.setAll(p),a.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Qi?(function(o,a,c){if(!xc(o.precondition,a))return void a.convertToUnknownDocument(c.version);const d=zv(o.fieldTransforms,a,c.transformResults),p=a.data;p.setAll(xE(o)),p.setAll(d),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(o,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function vl(n,e,t,i){return n instanceof Hl?(function(a,c,d,p){if(!xc(a.precondition,c))return d;const y=a.value.clone(),_=$v(a.fieldTransforms,p,c);return y.setAll(_),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Qi?(function(a,c,d,p){if(!xc(a.precondition,c))return d;const y=$v(a.fieldTransforms,p,c),_=c.data;return _.setAll(xE(a)),_.setAll(y),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,i):(function(a,c,d){return xc(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function WP(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),a=RE(i.transform,o||null);a!=null&&(t===null&&(t=an.empty()),t.set(i.field,a))}return t||null}function Bv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Wo(i,o,((a,c)=>$P(a,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hl extends _h{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Qi extends _h{constructor(e,t,i,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function xE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function zv(n,e,t){const i=new Map;Ue(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const a=n[o],c=a.transform,d=e.data.field(a.field);i.set(a.field,zP(c,d,t[o]))}return i}function $v(n,e,t){const i=new Map;for(const o of n){const a=o.transform,c=t.data.field(o.field);i.set(o.field,BP(a,c,e))}return i}class Op extends _h{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GP extends _h{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class KP{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&qP(a,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=vl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=vl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=SE();return this.mutations.forEach((o=>{const a=e.get(o.key),c=a.overlayedDocument;let d=this.applyToLocalView(c,a.mutatedFields);d=t.has(o.key)?null:d;const p=NE(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Wo(this.mutations,e.mutations,((t,i)=>Bv(t,i)))&&Wo(this.baseMutations,e.baseMutations,((t,i)=>Bv(t,i)))}}class Lp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return LP})();const a=e.mutations;for(let c=0;c<a.length;c++)o=o.insert(a[c].key,i[c].version);return new Lp(e,t,i,o)}}/**
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
 */class QP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var dt,Ve;function YP(n){switch(n){case W.OK:return Ee(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return Ee(15467,{code:n})}}function DE(n){if(n===void 0)return Zr("GRPC error has no .code"),W.UNKNOWN;switch(n){case dt.OK:return W.OK;case dt.CANCELLED:return W.CANCELLED;case dt.UNKNOWN:return W.UNKNOWN;case dt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case dt.INTERNAL:return W.INTERNAL;case dt.UNAVAILABLE:return W.UNAVAILABLE;case dt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case dt.NOT_FOUND:return W.NOT_FOUND;case dt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case dt.ABORTED:return W.ABORTED;case dt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case dt.DATA_LOSS:return W.DATA_LOSS;default:return Ee(39323,{code:n})}}(Ve=dt||(dt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const JP=new Li([4294967295,4294967295],0);function Hv(n){const e=Zw().encode(n),t=new Hw;return t.update(e),new Uint8Array(t.digest())}function qv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Li([t,i],0),new Li([o,a],0)]}class Mp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new dl(`Invalid padding: ${t}`);if(i<0)throw new dl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new dl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new dl(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Li.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Li.fromNumber(i)));return o.compare(JP)===1&&(o=new Li([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Hv(e),[i,o]=qv(t);for(let a=0;a<this.hashCount;a++){const c=this.pe(i,o,a);if(!this.ye(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new Mp(a,o,t);return i.forEach((d=>c.insert(d))),c}insert(e){if(this.fe===0)return;const t=Hv(e),[i,o]=qv(t);for(let a=0;a<this.hashCount;a++){const c=this.pe(i,o,a);this.we(c)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class dl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wh{constructor(e,t,i,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,ql.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new wh(Ie.min(),o,new it(Re),ti(),Ne())}}class ql{constructor(e,t,i,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ql(i,t,Ne(),Ne(),Ne())}}/**
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
 */class Dc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class bE{constructor(e,t){this.targetId=e,this.De=t}}class VE{constructor(e,t,i=kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Wv{constructor(){this.ve=0,this.Ce=Gv(),this.Fe=kt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ne(),t=Ne(),i=Ne();return this.Ce.forEach(((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ee(38017,{changeType:a})}})),new ql(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Gv()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ZP{constructor(e){this.We=e,this.Ge=new Map,this.ze=ti(),this.je=_c(),this.Je=_c(),this.He=new it(Re)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const a=o.target;if(Gf(a))if(i===0){const c=new pe(a.path);this.Xe(t,c,zt.newNoDocument(c,Ie.min()))}else Ue(i===1,20013,{expectedCount:i});else{const c=this.ot(t);if(c!==i){const d=this._t(e),p=d?this.ut(d,e,c):1;if(p!==0){this.rt(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=t;let c,d;try{c=Bi(i).toUint8Array()}catch(p){if(p instanceof sE)return ei("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Mp(c,o,a)}catch(p){return ei(p instanceof dl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.fe===0?null:d}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((a=>{const c=this.We.lt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((a,c)=>{const d=this.st(c);if(d){if(a.current&&Gf(d.target)){const p=new pe(d.target.path);this.Tt(p).has(c)||this.It(c,p)||this.Xe(c,p,zt.newNoDocument(p,e))}a.Ne&&(t.set(c,a.Le()),a.ke())}}));let i=Ne();this.Je.forEach(((a,c)=>{let d=!0;c.forEachWhile((p=>{const y=this.st(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(i=i.add(a))})),this.ze.forEach(((a,c)=>c.setReadTime(e)));const o=new wh(e,t,this.He,this.ze,i);return this.ze=ti(),this.je=_c(),this.Je=_c(),this.He=new it(Re),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Wv,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new wt(Re),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new wt(Re),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Wv),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function _c(){return new it(pe.comparator)}function Gv(){return new it(pe.comparator)}const ek={asc:"ASCENDING",desc:"DESCENDING"},tk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nk={and:"AND",or:"OR"};class rk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xf(n,e){return n.useProto3Json||fh(e)?e:{value:e}}function Kc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function OE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ik(n,e){return Kc(n,e.toTimestamp())}function vr(n){return Ue(!!n,49232),Ie.fromTimestamp((function(t){const i=ji(t);return new $e(i.seconds,i.nanos)})(n))}function Fp(n,e){return Yf(n,e).canonicalString()}function Yf(n,e){const t=(function(o){return new Ge(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function LE(n){const e=Ge.fromString(n);return Ue(BE(e),10190,{key:e.toString()}),e}function Jf(n,e){return Fp(n.databaseId,e.path)}function Ef(n,e){const t=LE(e);if(t.get(1)!==n.databaseId.projectId)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(FE(t))}function ME(n,e){return Fp(n.databaseId,e)}function sk(n){const e=LE(n);return e.length===4?Ge.emptyPath():FE(e)}function Zf(n){return new Ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function FE(n){return Ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Kv(n,e,t){return{name:Jf(n,e),fields:t.value.mapValue.fields}}function ok(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=(function(y,_){return y.useProto3Json?(Ue(_===void 0||typeof _=="string",58123),kt.fromBase64String(_||"")):(Ue(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),kt.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(y){const _=y.code===void 0?W.UNKNOWN:DE(y.code);return new se(_,y.message||"")})(c);t=new VE(i,o,a,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Ef(n,i.document.name),a=vr(i.document.updateTime),c=i.document.createTime?vr(i.document.createTime):Ie.min(),d=new an({mapValue:{fields:i.document.fields}}),p=zt.newFoundDocument(o,a,c,d),y=i.targetIds||[],_=i.removedTargetIds||[];t=new Dc(y,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Ef(n,i.document),a=i.readTime?vr(i.readTime):Ie.min(),c=zt.newNoDocument(o,a),d=i.removedTargetIds||[];t=new Dc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Ef(n,i.document),a=i.removedTargetIds||[];t=new Dc([],a,o,null)}else{if(!("filter"in e))return Ee(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:a}=i,c=new XP(o,a),d=i.targetId;t=new bE(d,c)}}return t}function ak(n,e){let t;if(e instanceof Hl)t={update:Kv(n,e.key,e.value)};else if(e instanceof Op)t={delete:Jf(n,e.key)};else if(e instanceof Qi)t={update:Kv(n,e.key,e.data),updateMask:gk(e.fieldMask)};else{if(!(e instanceof GP))return Ee(16599,{Rt:e.type});t={verify:Jf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(a,c){const d=c.transform;if(d instanceof Cl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Xo)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Yo)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Gc)return{fieldPath:c.field.canonicalString(),increment:d.Ee};throw Ee(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,a){return a.updateTime!==void 0?{updateTime:ik(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ee(27497)})(n,e.precondition)),t}function lk(n,e){return n&&n.length>0?(Ue(e!==void 0,14353),n.map((t=>(function(o,a){let c=o.updateTime?vr(o.updateTime):vr(a);return c.isEqual(Ie.min())&&(c=vr(a)),new HP(c,o.transformResults||[])})(t,e)))):[]}function uk(n,e){return{documents:[ME(n,e.path)]}}function ck(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=ME(n,o);const a=(function(y){if(y.length!==0)return jE(er.create(y,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const c=(function(y){if(y.length!==0)return y.map((_=>(function(T){return{field:Fo(T.field),direction:fk(T.dir)}})(_)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Xf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{Vt:t,parent:o}}function hk(n){let e=sk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let a=[];t.where&&(a=(function(E){const T=UE(E);return T instanceof er&&mE(T)?T.getFilters():[T]})(t.where));let c=[];t.orderBy&&(c=(function(E){return E.map((T=>(function(j){return new Wc(Uo(j.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(j.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let T;return T=typeof E=="object"?E.value:E,fh(T)?null:T})(t.limit));let p=null;t.startAt&&(p=(function(E){const T=!!E.before,k=E.values||[];return new qc(k,T)})(t.startAt));let y=null;return t.endAt&&(y=(function(E){const T=!E.before,k=E.values||[];return new qc(k,T)})(t.endAt)),xP(e,o,c,a,d,"F",p,y)}function dk(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function UE(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Uo(t.unaryFilter.field);return ft.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Uo(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Uo(t.unaryFilter.field);return ft.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Uo(t.unaryFilter.field);return ft.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ft.create(Uo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return er.create(t.compositeFilter.filters.map((i=>UE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(t.compositeFilter.op))})(n):Ee(30097,{filter:n})}function fk(n){return ek[n]}function pk(n){return tk[n]}function mk(n){return nk[n]}function Fo(n){return{fieldPath:n.canonicalString()}}function Uo(n){return Pt.fromServerFormat(n.fieldPath)}function jE(n){return n instanceof ft?(function(t){if(t.op==="=="){if(Ov(t.value))return{unaryFilter:{field:Fo(t.field),op:"IS_NAN"}};if(Vv(t.value))return{unaryFilter:{field:Fo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ov(t.value))return{unaryFilter:{field:Fo(t.field),op:"IS_NOT_NAN"}};if(Vv(t.value))return{unaryFilter:{field:Fo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fo(t.field),op:pk(t.op),value:t.value}}})(n):n instanceof er?(function(t){const i=t.getFilters().map((o=>jE(o)));return i.length===1?i[0]:{compositeFilter:{op:mk(t.op),filters:i}}})(n):Ee(54877,{filter:n})}function gk(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function BE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Vi{constructor(e,t,i,o,a=Ie.min(),c=Ie.min(),d=kt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yk{constructor(e){this.gt=e}}function vk(n){const e=hk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qf(e,e.limit,"L"):e}/**
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
 */class _k{constructor(){this.Dn=new wk}addToCollectionParentIndex(e,t){return this.Dn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Ui.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Ui.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class wk{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new wt(Ge.comparator),a=!o.has(i);return this.index[t]=o.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new wt(Ge.comparator)).toArray()}}/**
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
 */const Qv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zE=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(zE,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
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
 */const Xv="LruGarbageCollector",Ek=1048576;function Yv([n,e],[t,i]){const o=Re(n,t);return o===0?Re(e,i):o}class Tk{constructor(e){this.Tr=e,this.buffer=new wt(Yv),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Yv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ik{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ae(Xv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ua(t)?ae(Xv,"Ignoring IndexedDB error during garbage collection: ",t):await la(t)}await this.Rr(3e5)}))}}class Sk{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(dh.ue);const i=new Tk(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Qv)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qv):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,a,c,d,p,y;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,c=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(i=E,d=Date.now(),this.removeTargets(e,i,t)))).next((E=>(a=E,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((E=>(y=Date.now(),Lo()<=ke.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${a} targets in `+(p-d)+`ms
	Removed ${E} documents in `+(y-p)+`ms
Total Duration: ${y-_}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:E}))))}}function Ak(n,e){return new Sk(n,e)}/**
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
 */class Rk{constructor(){this.changes=new Ms((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ck{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Pk{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&vl(i.mutation,o,gn.empty(),$e.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ne()){const o=Rs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((a=>{let c=hl();return a.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=Rs();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ne())))}populateOverlays(e,t,i){const o=[];return i.forEach((a=>{t.has(a)||o.push(a)})),this.documentOverlayCache.getOverlays(e,o).next((a=>{a.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,i,o){let a=ti();const c=yl(),d=(function(){return yl()})();return t.forEach(((p,y)=>{const _=i.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof Qi)?a=a.insert(y.key,y):_!==void 0?(c.set(y.key,_.mutation.getFieldMask()),vl(_.mutation,y,_.mutation.getFieldMask(),$e.now())):c.set(y.key,gn.empty())})),this.recalculateAndSaveOverlays(e,a).next((p=>(p.forEach(((y,_)=>c.set(y,_))),t.forEach(((y,_)=>{var E;return d.set(y,new Ck(_,(E=c.get(y))!==null&&E!==void 0?E:null))})),d)))}recalculateAndSaveOverlays(e,t){const i=yl();let o=new it(((c,d)=>c-d)),a=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let _=i.get(p)||gn.empty();_=d.applyToLocalView(y,_),i.set(p,_);const E=(o.get(d.batchId)||Ne()).add(p);o=o.insert(d.batchId,E)}))})).next((()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,_=p.value,E=SE();_.forEach((T=>{if(!a.has(T)){const k=NE(t.get(T),i.get(T));k!==null&&E.set(T,k),a=a.add(T)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,E))}return K.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(c){return pe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_E(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((a=>{const c=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-a.size):K.resolve(Rs());let d=Sl,p=a;return c.next((y=>K.forEach(y,((_,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(_)?K.resolve():this.remoteDocumentCache.getEntry(e,_).next((T=>{p=p.insert(_,T)}))))).next((()=>this.populateOverlays(e,y,a))).next((()=>this.computeViews(e,p,y,Ne()))).next((_=>({batchId:d,changes:IE(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((i=>{let o=hl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const a=t.collectionGroup;let c=hl();return this.indexManager.getCollectionParents(e,a).next((d=>K.forEach(d,(p=>{const y=(function(E,T){return new $l(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((_=>{_.forEach(((E,T)=>{c=c.insert(E,T)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,o)))).next((c=>{a.forEach(((p,y)=>{const _=y.getKey();c.get(_)===null&&(c=c.insert(_,zt.newInvalidDocument(_)))}));let d=hl();return c.forEach(((p,y)=>{const _=a.get(p);_!==void 0&&vl(_.mutation,y,gn.empty(),$e.now()),yh(t,y)&&(d=d.insert(p,y))})),d}))}}/**
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
 */class kk{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return K.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:vr(o.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:vk(o.bundledQuery),readTime:vr(o.readTime)}})(t)),K.resolve()}}/**
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
 */class Nk{constructor(){this.overlays=new it(pe.comparator),this.kr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Rs();return K.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&i.set(o,a)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,a)=>{this.wt(e,t,a)})),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=Rs(),a=t.length+1,c=new pe(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===a&&p.largestBatchId>i&&o.set(p.getKey(),p)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let a=new it(((y,_)=>y-_));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let _=a.get(y.largestBatchId);_===null&&(_=Rs(),a=a.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const d=Rs(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,_)=>d.set(y,_))),!(d.size()>=o)););return K.resolve(d)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new QP(t,i));let a=this.kr.get(t);a===void 0&&(a=Ne(),this.kr.set(t,a)),this.kr.set(t,a.add(i.key))}}/**
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
 */class xk{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class Up{constructor(){this.qr=new wt(Ct.Qr),this.$r=new wt(Ct.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Ct(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Ct(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new pe(new Ge([])),i=new Ct(t,e),o=new Ct(t,e+1),a=[];return this.$r.forEachInRange([i,o],(c=>{this.Wr(c),a.push(c.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new Ge([])),i=new Ct(t,e),o=new Ct(t,e+1);let a=Ne();return this.$r.forEachInRange([i,o],(c=>{a=a.add(c.key)})),a}containsKey(e){const t=new Ct(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ct{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||Re(e.Hr,t.Hr)}static Ur(e,t){return Re(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
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
 */class Dk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new wt(Ct.Qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new KP(a,t,i,o);this.mutationQueue.push(c);for(const d of o)this.Yr=this.Yr.add(new Ct(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return K.resolve(c)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),a=o<0?0:o;return K.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?Pp:this.er-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([i,o],(c=>{const d=this.Zr(c.Hr);a.push(d)})),K.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new wt(Re);return t.forEach((o=>{const a=new Ct(o,0),c=new Ct(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,c],(d=>{i=i.add(d.Hr)}))})),K.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let a=i;pe.isDocumentKey(a)||(a=a.child(""));const c=new Ct(new pe(a),0);let d=new wt(Re);return this.Yr.forEachWhile((p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.Hr)),!0)}),c),K.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return K.forEach(t.mutations,(o=>{const a=new Ct(o.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Ct(t,0),o=this.Yr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class bk{constructor(e){this.ni=e,this.docs=(function(){return new it(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),a=o?o.size:0,c=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=ti();return t.forEach((o=>{const a=this.docs.get(o);i=i.insert(o,a?a.document.mutableCopy():zt.newInvalidDocument(o))})),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let a=ti();const c=t.path,d=new pe(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:_}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||uP(lP(_),i)<=0||(o.has(_.key)||yh(t,_))&&(a=a.insert(_.key,_.mutableCopy()))}return K.resolve(a)}getAllFromCollectionGroup(e,t,i,o){Ee(9500)}ri(e,t){return K.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new Vk(this)}getSize(e){return K.resolve(this.size)}}class Vk extends Rk{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),K.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class Ok{constructor(e){this.persistence=e,this.ii=new Ms((t=>xp(t)),Dp),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.si=0,this.oi=new Up,this.targetCount=0,this._i=Jo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),K.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Jo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.hr(t),K.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const a=[];return this.ii.forEach(((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.ii.delete(c),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),K.waitFor(a).next((()=>o))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach((c=>{a.push(o.markPotentiallyOrphaned(e,c))})),K.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.oi.containsKey(t))}}/**
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
 */class $E{constructor(e,t){this.ai={},this.overlays={},this.ui=new dh(0),this.ci=!1,this.ci=!0,this.li=new xk,this.referenceDelegate=e(this),this.hi=new Ok(this),this.indexManager=new _k,this.remoteDocumentCache=(function(o){return new bk(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new yk(t),this.Ti=new kk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Nk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new Dk(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new Lk(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((a=>this.referenceDelegate.di(o).next((()=>a)))).toPromise().then((a=>(o.raiseOnCommittedEvent(),a)))}Ei(e,t){return K.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class Lk extends hP{constructor(e){super(),this.currentSequenceNumber=e}}class jp{constructor(e){this.persistence=e,this.Ai=new Up,this.Ri=null}static Vi(e){return new jp(e)}get mi(){if(this.Ri)return this.Ri;throw Ee(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((a=>this.mi.add(a.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.mi,(i=>{const o=pe.fromPath(i);return this.fi(e,o).next((a=>{a||t.removeEntry(o,Ie.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return K.or([()=>K.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Qc{constructor(e,t){this.persistence=e,this.gi=new Ms((i=>pP(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=Ak(this,t)}static Vi(e,t){return new Qc(e,t)}Ii(){}di(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return K.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((a=>a?K.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ri(e,(c=>this.Sr(e,c,t).next((d=>{d||(i++,a.removeEntry(c,Ie.min()))})))).next((()=>a.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=kc(e.data.value)),t}Sr(e,t,i){return K.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Mk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Fk{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return _A()?8:dP(Ht())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const a={result:null};return this.ps(e,t).next((c=>{a.result=c})).next((()=>{if(!a.result)return this.ys(e,t,o,i).next((c=>{a.result=c}))})).next((()=>{if(a.result)return;const c=new Mk;return this.ws(e,t,c).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,c,d.size)}))})).next((()=>a.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Lo()<=ke.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Mo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(Lo()<=ke.DEBUG&&ae("QueryEngine","Query:",Mo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Lo()<=ke.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Mo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yr(t))):K.resolve())}ps(e,t){if(Uv(t))return K.resolve(null);let i=yr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Qf(t,null,"F"),i=yr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((a=>{const c=Ne(...a);return this.gs.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,i).next((p=>{const y=this.bs(t,d);return this.Ds(t,y,c,p.readTime)?this.ps(e,Qf(t,null,"F")):this.vs(e,y,t,p)}))))})))))}ys(e,t,i,o){return Uv(t)||o.isEqual(Ie.min())?K.resolve(null):this.gs.getDocuments(e,i).next((a=>{const c=this.bs(t,a);return this.Ds(t,c,i,o)?K.resolve(null):(Lo()<=ke.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Mo(t)),this.vs(e,c,t,aP(o,Sl)).next((d=>d)))}))}bs(e,t){let i=new wt(EE(e));return t.forEach(((o,a)=>{yh(e,a)&&(i=i.add(a))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ws(e,t,i){return Lo()<=ke.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Mo(t)),this.gs.getDocumentsMatchingQuery(e,t,Ui.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((a=>(t.forEach((c=>{a=a.insert(c.key,c)})),a)))}}/**
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
 */const zp="LocalStore",Uk=3e8;class jk{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new it(Re),this.Ms=new Ms((a=>xp(a)),Dp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pk(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Bk(n,e,t,i){return new jk(n,e,t,i)}async function HE(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((a=>(o=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((a=>{const c=[],d=[];let p=Ne();for(const y of o){c.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}for(const y of a){d.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(i,p).next((y=>({Bs:y,removedBatchIds:c,addedBatchIds:d})))}))}))}function zk(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,p,y,_){const E=y.batch,T=E.keys();let k=K.resolve();return T.forEach((j=>{k=k.next((()=>_.getEntry(p,j))).next((z=>{const L=y.docVersions.get(j);Ue(L!==null,48541),z.version.compareTo(L)<0&&(E.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),_.addEntry(z)))}))})),k.next((()=>d.mutationQueue.removeMutationBatch(p,E)))})(t,i,e,a).next((()=>a.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(d){let p=Ne();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function qE(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function $k(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const d=[];e.targetChanges.forEach(((_,E)=>{const T=o.get(E);if(!T)return;d.push(t.hi.removeMatchingKeys(a,_.removedDocuments,E).next((()=>t.hi.addMatchingKeys(a,_.addedDocuments,E))));let k=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?k=k.withResumeToken(kt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):_.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(_.resumeToken,i)),o=o.insert(E,k),(function(z,L,G){return z.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=Uk?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(T,k,_)&&d.push(t.hi.updateTargetData(a,k))}));let p=ti(),y=Ne();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,_))})),d.push(Hk(a,c,e.documentUpdates).next((_=>{p=_.Ls,y=_.ks}))),!i.isEqual(Ie.min())){const _=t.hi.getLastRemoteSnapshotVersion(a).next((E=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,i)));d.push(_)}return K.waitFor(d).next((()=>c.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,p,y))).next((()=>p))})).then((a=>(t.Fs=o,a)))}function Hk(n,e,t){let i=Ne(),o=Ne();return t.forEach((a=>i=i.add(a))),e.getEntries(n,i).next((a=>{let c=ti();return t.forEach(((d,p)=>{const y=a.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ae(zp,"Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)})),{Ls:c,ks:o}}))}function qk(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Pp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function Wk(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((a=>a?(o=a,K.resolve(o)):t.hi.allocateTargetId(i).next((c=>(o=new Vi(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function ep(n,e,t){const i=Se(n),o=i.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",a,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!ua(c))throw c;ae(zp,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function Jv(n,e,t){const i=Se(n);let o=Ie.min(),a=Ne();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,y,_){const E=Se(p),T=E.Ms.get(_);return T!==void 0?K.resolve(E.Fs.get(T)):E.hi.getTargetData(y,_)})(i,c,yr(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{a=p}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?a:Ne()))).next((d=>(Gk(i,bP(e),d),{documents:d,qs:a})))))}function Gk(n,e,t){let i=n.xs.get(e)||Ie.min();t.forEach(((o,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)})),n.xs.set(e,i)}class Zv{constructor(){this.activeTargetIds=UP()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kk{constructor(){this.Fo=new Zv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Zv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Qk{xo(e){}shutdown(){}}/**
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
 */const e_="ConnectivityMonitor";class t_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ae(e_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ae(e_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Tf="RestConnection",Xk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Yk{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===$c?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,a){const c=tp(),d=this.Go(e,t.toUriEncodedString());ae(Tf,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,a);const{host:y}=new URL(d),_=ia(y);return this.jo(e,d,p,i,_).then((E=>(ae(Tf,`Received RPC '${e}' ${c}: `,E),E)),(E=>{throw ei(Tf,`RPC '${e}' ${c} failed with error: `,E,"url: ",d,"request:",i),E}))}Jo(e,t,i,o,a,c){return this.Wo(e,t,i,o,a)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+aa})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,a)=>e[a]=o)),i&&i.headers.forEach(((o,a)=>e[a]=o))}Go(e,t){const i=Xk[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
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
 */class Jk{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const jt="WebChannelConnection";class Zk extends Yk{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,a){const c=tp();return new Promise(((d,p)=>{const y=new qw;y.setWithCredentials(!0),y.listenOnce(Ww.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Pc.NO_ERROR:const E=y.getResponseJson();ae(jt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(E)),d(E);break;case Pc.TIMEOUT:ae(jt,`RPC '${e}' ${c} timed out`),p(new se(W.DEADLINE_EXCEEDED,"Request time out"));break;case Pc.HTTP_ERROR:const T=y.getStatus();if(ae(jt,`RPC '${e}' ${c} failed with status:`,T,"response text:",y.getResponseText()),T>0){let k=y.getResponseJson();Array.isArray(k)&&(k=k[0]);const j=k==null?void 0:k.error;if(j&&j.status&&j.message){const z=(function(G){const ee=G.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ee)>=0?ee:W.UNKNOWN})(j.status);p(new se(z,j.message))}else p(new se(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new se(W.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{c_:e,streamId:c,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{ae(jt,`RPC '${e}' ${c} completed.`)}}));const _=JSON.stringify(o);ae(jt,`RPC '${e}' ${c} sending request:`,o),y.send(t,"POST",_,i,15)}))}P_(e,t,i){const o=tp(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Qw(),d=Kw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const _=a.join("");ae(jt,`Creating RPC '${e}' stream ${o}: ${_}`,p);const E=c.createWebChannel(_,p);this.T_(E);let T=!1,k=!1;const j=new Jk({Ho:L=>{k?ae(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(T||(ae(jt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),T=!0),ae(jt,`RPC '${e}' stream ${o} sending:`,L),E.send(L))},Yo:()=>E.close()}),z=(L,G,ee)=>{L.listen(G,(X=>{try{ee(X)}catch(ie){setTimeout((()=>{throw ie}),0)}}))};return z(E,cl.EventType.OPEN,(()=>{k||(ae(jt,`RPC '${e}' stream ${o} transport opened.`),j.s_())})),z(E,cl.EventType.CLOSE,(()=>{k||(k=!0,ae(jt,`RPC '${e}' stream ${o} transport closed`),j.__(),this.I_(E))})),z(E,cl.EventType.ERROR,(L=>{k||(k=!0,ei(jt,`RPC '${e}' stream ${o} transport errored. Name:`,L.name,"Message:",L.message),j.__(new se(W.UNAVAILABLE,"The operation could not be completed")))})),z(E,cl.EventType.MESSAGE,(L=>{var G;if(!k){const ee=L.data[0];Ue(!!ee,16349);const X=ee,ie=(X==null?void 0:X.error)||((G=X[0])===null||G===void 0?void 0:G.error);if(ie){ae(jt,`RPC '${e}' stream ${o} received error:`,ie);const ve=ie.status;let _e=(function(P){const x=dt[P];if(x!==void 0)return DE(x)})(ve),D=ie.message;_e===void 0&&(_e=W.INTERNAL,D="Unknown error status: "+ve+" with message "+ie.message),k=!0,j.__(new se(_e,D)),E.close()}else ae(jt,`RPC '${e}' stream ${o} received:`,ee),j.a_(ee)}})),z(d,Gw.STAT_EVENT,(L=>{L.stat===zf.PROXY?ae(jt,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===zf.NOPROXY&&ae(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{j.o_()}),0),j}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function If(){return typeof document<"u"?document:null}/**
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
 */function Eh(n){return new rk(n,!0)}/**
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
 */class WE{constructor(e,t,i=1e3,o=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const n_="PersistentStream";class GE{constructor(e,t,i,o,a,c,d,p){this.Fi=e,this.w_=i,this.S_=o,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new WE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Zr(t.toString()),Zr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new se(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ae(n_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ae(n_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class eN extends GE{constructor(e,t,i,o,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=ok(this.serializer,e),i=(function(a){if(!("targetChange"in a))return Ie.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?vr(c.readTime):Ie.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=Zf(this.serializer),t.addTarget=(function(a,c){let d;const p=c.target;if(d=Gf(p)?{documents:uk(a,p)}:{query:ck(a,p).Vt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=OE(a,c.resumeToken);const y=Xf(a,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=Kc(a,c.snapshotVersion.toTimestamp());const y=Xf(a,c.expectedCount);y!==null&&(d.expectedCount=y)}return d})(this.serializer,e);const i=dk(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=Zf(this.serializer),t.removeTarget=e,this.k_(t)}}class tN extends GE{constructor(e,t,i,o,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=lk(e.writeResults,e.commitTime),i=vr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=Zf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>ak(this.serializer,i)))};this.k_(t)}}/**
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
 */class nN{}class rN extends nN{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Wo(e,Yf(t,i),o,a,c))).catch((a=>{throw a.name==="FirebaseError"?(a.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new se(W.UNKNOWN,a.toString())}))}Jo(e,t,i,o,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Jo(e,Yf(t,i),o,c,d,a))).catch((c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new se(W.UNKNOWN,c.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class iN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Zr(t),this._a=!1):ae("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const xs="RemoteStore";class sN{constructor(e,t,i,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((c=>{i.enqueueAndForget((async()=>{Fs(this)&&(ae(xs,"Restarting streams for network reachability change."),await(async function(p){const y=Se(p);y.Ia.add(4),await Wl(y),y.Aa.set("Unknown"),y.Ia.delete(4),await Th(y)})(this))}))})),this.Aa=new iN(i,o)}}async function Th(n){if(Fs(n))for(const e of n.da)await e(!0)}async function Wl(n){for(const e of n.da)await e(!1)}function KE(n,e){const t=Se(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Wp(t)?qp(t):ca(t).x_()&&Hp(t,e))}function $p(n,e){const t=Se(n),i=ca(t);t.Ta.delete(e),i.x_()&&QE(t,e),t.Ta.size===0&&(i.x_()?i.B_():Fs(t)&&t.Aa.set("Unknown"))}function Hp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ca(n).H_(e)}function QE(n,e){n.Ra.$e(e),ca(n).Y_(e)}function qp(n){n.Ra=new ZP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ca(n).start(),n.Aa.aa()}function Wp(n){return Fs(n)&&!ca(n).M_()&&n.Ta.size>0}function Fs(n){return Se(n).Ia.size===0}function XE(n){n.Ra=void 0}async function oN(n){n.Aa.set("Online")}async function aN(n){n.Ta.forEach(((e,t)=>{Hp(n,e)}))}async function lN(n,e){XE(n),Wp(n)?(n.Aa.la(e),qp(n)):n.Aa.set("Unknown")}async function uN(n,e,t){if(n.Aa.set("Online"),e instanceof VE&&e.state===2&&e.cause)try{await(async function(o,a){const c=a.cause;for(const d of a.targetIds)o.Ta.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.Ta.delete(d),o.Ra.removeTarget(d))})(n,e)}catch(i){ae(xs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Xc(n,i)}else if(e instanceof Dc?n.Ra.Ye(e):e instanceof bE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ie.min()))try{const i=await qE(n.localStore);t.compareTo(i)>=0&&await(function(a,c){const d=a.Ra.Pt(c);return d.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const _=a.Ta.get(y);_&&a.Ta.set(y,_.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,y)=>{const _=a.Ta.get(p);if(!_)return;a.Ta.set(p,_.withResumeToken(kt.EMPTY_BYTE_STRING,_.snapshotVersion)),QE(a,p);const E=new Vi(_.target,p,y,_.sequenceNumber);Hp(a,E)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(i){ae(xs,"Failed to raise snapshot:",i),await Xc(n,i)}}async function Xc(n,e,t){if(!ua(e))throw e;n.Ia.add(1),await Wl(n),n.Aa.set("Offline"),t||(t=()=>qE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ae(xs,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Th(n)}))}function YE(n,e){return e().catch((t=>Xc(n,t,e)))}async function Ih(n){const e=Se(n),t=$i(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Pp;for(;cN(e);)try{const o=await qk(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,hN(e,o)}catch(o){await Xc(e,o)}JE(e)&&ZE(e)}function cN(n){return Fs(n)&&n.Pa.length<10}function hN(n,e){n.Pa.push(e);const t=$i(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function JE(n){return Fs(n)&&!$i(n).M_()&&n.Pa.length>0}function ZE(n){$i(n).start()}async function dN(n){$i(n).na()}async function fN(n){const e=$i(n);for(const t of n.Pa)e.X_(t.mutations)}async function pN(n,e,t){const i=n.Pa.shift(),o=Lp.from(i,e,t);await YE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Ih(n)}async function mN(n,e){e&&$i(n).Z_&&await(async function(i,o){if((function(c){return YP(c)&&c!==W.ABORTED})(o.code)){const a=i.Pa.shift();$i(i).N_(),await YE(i,(()=>i.remoteSyncer.rejectFailedWrite(a.batchId,o))),await Ih(i)}})(n,e),JE(n)&&ZE(n)}async function r_(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),ae(xs,"RemoteStore received new credentials");const i=Fs(t);t.Ia.add(3),await Wl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Th(t)}async function gN(n,e){const t=Se(n);e?(t.Ia.delete(2),await Th(t)):e||(t.Ia.add(2),await Wl(t),t.Aa.set("Unknown"))}function ca(n){return n.Va||(n.Va=(function(t,i,o){const a=Se(t);return a.ia(),new eN(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:oN.bind(null,n),e_:aN.bind(null,n),n_:lN.bind(null,n),J_:uN.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Wp(n)?qp(n):n.Aa.set("Unknown")):(await n.Va.stop(),XE(n))}))),n.Va}function $i(n){return n.ma||(n.ma=(function(t,i,o){const a=Se(t);return a.ia(),new tN(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:dN.bind(null,n),n_:mN.bind(null,n),ea:fN.bind(null,n),ta:pN.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Ih(n)):(await n.ma.stop(),n.Pa.length>0&&(ae(xs,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Gp{constructor(e,t,i,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=a,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,a){const c=Date.now()+i,d=new Gp(e,t,c,o,a);return d.start(i),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kp(n,e){if(Zr("AsyncQueue",`${e}: ${n}`),ua(n))return new se(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class qo{static emptySet(e){return new qo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=hl(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class i_{constructor(){this.fa=new it(pe.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ee(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Zo{constructor(e,t,i,o,a,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,a){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new Zo(e,t,qo.emptySet(t),c,i,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class yN{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class vN{constructor(){this.queries=s_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Se(t),a=o.queries;o.queries=s_(),a.forEach(((c,d)=>{for(const p of d.wa)p.onError(i)}))})(this,new se(W.ABORTED,"Firestore shutting down"))}}function s_(){return new Ms((n=>wE(n)),gh)}async function Qp(n,e){const t=Se(n);let i=3;const o=e.query;let a=t.queries.get(o);a?!a.Sa()&&e.ba()&&(i=2):(a=new yN,i=e.ba()?0:1);try{switch(i){case 0:a.ya=await t.onListen(o,!0);break;case 1:a.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=Kp(c,`Initialization of query '${Mo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Yp(t)}async function Xp(n,e){const t=Se(n),i=e.query;let o=3;const a=t.queries.get(i);if(a){const c=a.wa.indexOf(e);c>=0&&(a.wa.splice(c,1),a.wa.length===0?o=e.ba()?0:1:!a.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function _N(n,e){const t=Se(n);let i=!1;for(const o of e){const a=o.query,c=t.queries.get(a);if(c){for(const d of c.wa)d.Ca(o)&&(i=!0);c.ya=o}}i&&Yp(t)}function wN(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const a of o.wa)a.onError(t);i.queries.delete(e)}function Yp(n){n.Da.forEach((e=>{e.next()}))}var np,o_;(o_=np||(np={})).Fa="default",o_.Cache="cache";class Jp{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Zo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==np.Cache}}/**
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
 */class e0{constructor(e){this.key=e}}class t0{constructor(e){this.key=e}}class EN{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ne(),this.mutatedKeys=Ne(),this.Xa=EE(e),this.eu=new qo(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new i_,o=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,E)=>{const T=o.get(_),k=yh(this.query,E)?E:null,j=!!T&&this.mutatedKeys.has(T.key),z=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let L=!1;T&&k?T.data.isEqual(k.data)?j!==z&&(i.track({type:3,doc:k}),L=!0):this.iu(T,k)||(i.track({type:2,doc:k}),L=!0,(p&&this.Xa(k,p)>0||y&&this.Xa(k,y)<0)&&(d=!0)):!T&&k?(i.track({type:0,doc:k}),L=!0):T&&!k&&(i.track({type:1,doc:T}),L=!0,(p||y)&&(d=!0)),L&&(k?(c=c.add(k),a=z?a.add(_):a.delete(_)):(c=c.delete(_),a=a.delete(_)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),a=a.delete(_.key),i.track({type:1,doc:_})}return{eu:c,ru:i,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort(((_,E)=>(function(k,j){const z=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{At:L})}};return z(k)-z(j)})(_.type,E.type)||this.Xa(_.doc,E.doc))),this.su(i),o=o!=null&&o;const d=t&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,y=p!==this.Ya;return this.Ya=p,c.length!==0||y?{snapshot:new Zo(this.query,e.eu,a,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new i_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ne(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new t0(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new e0(i))})),t}uu(e){this.Ha=e.qs,this.Za=Ne();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Zo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Zp="SyncEngine";class TN{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class IN{constructor(e){this.key=e,this.lu=!1}}class SN{constructor(e,t,i,o,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new Ms((d=>wE(d)),gh),this.Tu=new Map,this.Iu=new Set,this.du=new it(pe.comparator),this.Eu=new Map,this.Au=new Up,this.Ru={},this.Vu=new Map,this.mu=Jo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function AN(n,e,t=!0){const i=a0(n);let o;const a=i.Pu.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.cu()):o=await n0(i,e,t,!0),o}async function RN(n,e){const t=a0(n);await n0(t,e,!0,!1)}async function n0(n,e,t,i){const o=await Wk(n.localStore,yr(e)),a=o.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let d;return i&&(d=await CN(n,e,a,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&KE(n.remoteStore,o),d}async function CN(n,e,t,i,o){n.gu=(E,T,k)=>(async function(z,L,G,ee){let X=L.view.nu(G);X.Ds&&(X=await Jv(z.localStore,L.query,!1).then((({documents:D})=>L.view.nu(D,X))));const ie=ee&&ee.targetChanges.get(L.targetId),ve=ee&&ee.targetMismatches.get(L.targetId)!=null,_e=L.view.applyChanges(X,z.isPrimaryClient,ie,ve);return l_(z,L.targetId,_e._u),_e.snapshot})(n,E,T,k);const a=await Jv(n.localStore,e,!0),c=new EN(e,a.qs),d=c.nu(a.documents),p=ql.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);l_(n,t,y._u);const _=new TN(e,t,c);return n.Pu.set(e,_),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function PN(n,e,t){const i=Se(n),o=i.Pu.get(e),a=i.Tu.get(o.targetId);if(a.length>1)return i.Tu.set(o.targetId,a.filter((c=>!gh(c,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await ep(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&$p(i.remoteStore,o.targetId),rp(i,o.targetId)})).catch(la)):(rp(i,o.targetId),await ep(i.localStore,o.targetId,!0))}async function kN(n,e){const t=Se(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),$p(t.remoteStore,i.targetId))}async function NN(n,e,t){const i=MN(n);try{const o=await(function(c,d){const p=Se(c),y=$e.now(),_=d.reduce(((k,j)=>k.add(j.key)),Ne());let E,T;return p.persistence.runTransaction("Locally write mutations","readwrite",(k=>{let j=ti(),z=Ne();return p.Os.getEntries(k,_).next((L=>{j=L,j.forEach(((G,ee)=>{ee.isValidDocument()||(z=z.add(G))}))})).next((()=>p.localDocuments.getOverlayedDocuments(k,j))).next((L=>{E=L;const G=[];for(const ee of d){const X=WP(ee,E.get(ee.key).overlayedDocument);X!=null&&G.push(new Qi(ee.key,X,dE(X.value.mapValue),xn.exists(!0)))}return p.mutationQueue.addMutationBatch(k,y,G,d)})).next((L=>{T=L;const G=L.applyToLocalDocumentSet(E,z);return p.documentOverlayCache.saveOverlays(k,L.batchId,G)}))})).then((()=>({batchId:T.batchId,changes:IE(E)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,d,p){let y=c.Ru[c.currentUser.toKey()];y||(y=new it(Re)),y=y.insert(d,p),c.Ru[c.currentUser.toKey()]=y})(i,o.batchId,t),await Gl(i,o.changes),await Ih(i.remoteStore)}catch(o){const a=Kp(o,"Failed to persist write");t.reject(a)}}async function r0(n,e){const t=Se(n);try{const i=await $k(t.localStore,e);e.targetChanges.forEach(((o,a)=>{const c=t.Eu.get(a);c&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.lu=!0:o.modifiedDocuments.size>0?Ue(c.lu,14607):o.removedDocuments.size>0&&(Ue(c.lu,42227),c.lu=!1))})),await Gl(t,i,e)}catch(i){await la(i)}}function a_(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((a,c)=>{const d=c.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(c,d){const p=Se(c);p.onlineState=d;let y=!1;p.queries.forEach(((_,E)=>{for(const T of E.wa)T.va(d)&&(y=!0)})),y&&Yp(p)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function xN(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),a=o&&o.key;if(a){let c=new it(pe.comparator);c=c.insert(a,zt.newNoDocument(a,Ie.min()));const d=Ne().add(a),p=new wh(Ie.min(),new Map,new it(Re),c,d);await r0(i,p),i.du=i.du.remove(a),i.Eu.delete(e),em(i)}else await ep(i.localStore,e,!1).then((()=>rp(i,e,t))).catch(la)}async function DN(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await zk(t.localStore,e);s0(t,i,null),i0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Gl(t,o)}catch(o){await la(o)}}async function bN(n,e,t){const i=Se(n);try{const o=await(function(c,d){const p=Se(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let _;return p.mutationQueue.lookupMutationBatch(y,d).next((E=>(Ue(E!==null,37113),_=E.keys(),p.mutationQueue.removeMutationBatch(y,E)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,_,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_))).next((()=>p.localDocuments.getDocuments(y,_)))}))})(i.localStore,e);s0(i,e,t),i0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Gl(i,o)}catch(o){await la(o)}}function i0(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function s0(n,e,t){const i=Se(n);let o=i.Ru[i.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function rp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||o0(n,i)}))}function o0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&($p(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),em(n))}function l_(n,e,t){for(const i of t)i instanceof e0?(n.Au.addReference(i.key,e),VN(n,i)):i instanceof t0?(ae(Zp,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||o0(n,i.key)):Ee(19791,{yu:i})}function VN(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(ae(Zp,"New document in limbo: "+t),n.Iu.add(i),em(n))}function em(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new pe(Ge.fromString(e)),i=n.mu.next();n.Eu.set(i,new IN(t)),n.du=n.du.insert(t,i),KE(n.remoteStore,new Vi(yr(mh(t.path)),i,"TargetPurposeLimboResolution",dh.ue))}}async function Gl(n,e,t){const i=Se(n),o=[],a=[],c=[];i.Pu.isEmpty()||(i.Pu.forEach(((d,p)=>{c.push(i.gu(p,e,t).then((y=>{var _;if((y||t)&&i.isPrimaryClient){const E=y?!y.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=Bp.Es(p.targetId,y);a.push(E)}})))})),await Promise.all(c),i.hu.J_(o),await(async function(p,y){const _=Se(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>K.forEach(y,(T=>K.forEach(T.Is,(k=>_.persistence.referenceDelegate.addReference(E,T.targetId,k))).next((()=>K.forEach(T.ds,(k=>_.persistence.referenceDelegate.removeReference(E,T.targetId,k)))))))))}catch(E){if(!ua(E))throw E;ae(zp,"Failed to update sequence numbers: "+E)}for(const E of y){const T=E.targetId;if(!E.fromCache){const k=_.Fs.get(T),j=k.snapshotVersion,z=k.withLastLimboFreeSnapshotVersion(j);_.Fs=_.Fs.insert(T,z)}}})(i.localStore,a))}async function ON(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){ae(Zp,"User change. New user:",e.toKey());const i=await HE(t.localStore,e);t.currentUser=e,(function(a,c){a.Vu.forEach((d=>{d.forEach((p=>{p.reject(new se(W.CANCELLED,c))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Gl(t,i.Bs)}}function LN(n,e){const t=Se(n),i=t.Eu.get(e);if(i&&i.lu)return Ne().add(i.key);{let o=Ne();const a=t.Tu.get(e);if(!a)return o;for(const c of a){const d=t.Pu.get(c);o=o.unionWith(d.view.tu)}return o}}function a0(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=r0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xN.bind(null,e),e.hu.J_=_N.bind(null,e.eventManager),e.hu.pu=wN.bind(null,e.eventManager),e}function MN(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bN.bind(null,e),e}class Yc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Eh(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Bk(this.persistence,new Fk,e.initialUser,this.serializer)}Du(e){return new $E(jp.Vi,this.serializer)}bu(e){return new Kk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yc.provider={build:()=>new Yc};class FN extends Yc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ue(this.persistence.referenceDelegate instanceof Qc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new Ik(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new $E((i=>Qc.Vi(i,t)),this.serializer)}}class ip{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>a_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ON.bind(null,this.syncEngine),await gN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vN})()}createDatastore(e){const t=Eh(e.databaseInfo.databaseId),i=(function(a){return new Zk(a)})(e.databaseInfo);return(function(a,c,d,p){return new rN(a,c,d,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,a,c,d){return new sN(i,o,a,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>a_(this.syncEngine,t,0)),(function(){return t_.C()?new t_:new Qk})())}createSyncEngine(e,t){return(function(o,a,c,d,p,y,_){const E=new SN(o,a,c,d,p,y);return _&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const a=Se(o);ae(xs,"RemoteStore shutting down."),a.Ia.add(5),await Wl(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ip.provider={build:()=>new ip};/**
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
 */const Hi="FirestoreClient";class UN{constructor(e,t,i,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=ch.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,(async c=>{ae(Hi,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(ae(Hi,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Kp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Sf(n,e){n.asyncQueue.verifyOperationInProgress(),ae(Hi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await HE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{ei("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ae("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{ei("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function u_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await jN(n);ae(Hi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>r_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>r_(e.remoteStore,o))),n._onlineComponents=e}async function jN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae(Hi,"Using user provided OfflineComponentProvider");try{await Sf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ei("Error using user provided cache. Falling back to memory cache: "+t),await Sf(n,new Yc)}}else ae(Hi,"Using default OfflineComponentProvider"),await Sf(n,new FN(void 0));return n._offlineComponents}async function l0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae(Hi,"Using user provided OnlineComponentProvider"),await u_(n,n._uninitializedComponentsProvider._online)):(ae(Hi,"Using default OnlineComponentProvider"),await u_(n,new ip))),n._onlineComponents}function BN(n){return l0(n).then((e=>e.syncEngine))}async function Jc(n){const e=await l0(n),t=e.eventManager;return t.onListen=AN.bind(null,e.syncEngine),t.onUnlisten=PN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kN.bind(null,e.syncEngine),t}function zN(n,e,t={}){const i=new Gr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,d,p,y){const _=new tm({next:T=>{_.Ou(),c.enqueueAndForget((()=>Xp(a,E)));const k=T.docs.has(d);!k&&T.fromCache?y.reject(new se(W.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&T.fromCache&&p&&p.source==="server"?y.reject(new se(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(T)},error:T=>y.reject(T)}),E=new Jp(mh(d.path),_,{includeMetadataChanges:!0,ka:!0});return Qp(a,E)})(await Jc(n),n.asyncQueue,e,t,i))),i.promise}function $N(n,e,t={}){const i=new Gr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,d,p,y){const _=new tm({next:T=>{_.Ou(),c.enqueueAndForget((()=>Xp(a,E))),T.fromCache&&p.source==="server"?y.reject(new se(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(T)},error:T=>y.reject(T)}),E=new Jp(d,_,{includeMetadataChanges:!0,ka:!0});return Qp(a,E)})(await Jc(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function u0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const c0="firestore.googleapis.com",h_=!0;class d_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new se(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=c0,this.ssl=h_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:h_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ek)throw new se(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new d_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new d_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Jw;switch(i.type){case"firstParty":return new nP(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new se(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=c_.get(t);i&&(ae("ComponentProvider","Removing Datastore"),c_.delete(t),i.terminate())})(this),Promise.resolve()}}function h0(n,e,t,i={}){var o;n=Qt(n,Sh);const a=ia(e),c=n._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;a&&(nw(`https://${p}`),rw("Firestore",!0)),c.host!==c0&&c.host!==p&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},c),{host:p,ssl:a,emulatorOptions:i});if(!Xr(y,d)&&(n._setSettings(y),i.mockUserToken)){let _,E;if(typeof i.mockUserToken=="string")_=i.mockUserToken,E=Bt.MOCK_USER;else{_=cA(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new se(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Bt(T)}n._authCredentials=new Z1(new Yw(_,E))}}/**
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
 */class Xi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Xi(this.firestore,e,this._query)}}class rt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(zl(t,rt._jsonSchema))return new rt(e,i||null,new pe(Ge.fromString(t.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:pt("string",rt._jsonSchemaVersion),referencePath:pt("string")};class Kr extends Xi{constructor(e,t,i){super(e,t,mh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new pe(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function qi(n,e,...t){if(n=Et(n),eE("collection","path",e),n instanceof Sh){const i=Ge.fromString(e,...t);return Av(i),new Kr(n,null,i)}{if(!(n instanceof rt||n instanceof Kr))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ge.fromString(e,...t));return Av(i),new Kr(n.firestore,null,i)}}function $t(n,e,...t){if(n=Et(n),arguments.length===1&&(e=ch.newId()),eE("doc","path",e),n instanceof Sh){const i=Ge.fromString(e,...t);return Sv(i),new rt(n,null,new pe(i))}{if(!(n instanceof rt||n instanceof Kr))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ge.fromString(e,...t));return Sv(i),new rt(n.firestore,n instanceof Kr?n.converter:null,new pe(i))}}/**
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
 */const f_="AsyncQueue";class p_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new WE(this,"async_queue_retry"),this.oc=()=>{const i=If();i&&ae(f_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=If();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=If();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Gr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ua(e))throw e;ae(f_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Zr("INTERNAL UNHANDLED ERROR: ",m_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Gp.createAndSchedule(this,e,t,i,(a=>this.lc(a)));return this.ec.push(o),o}ac(){this.tc&&Ee(47125,{hc:m_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function m_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function g_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of i)if(a in o&&typeof o[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Er extends Sh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new p_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new p_(e),this._firestoreClient=void 0,await e}}}function d0(n,e){const t=typeof n=="object"?n:aw(),i=typeof n=="string"?n:$c,o=Ml(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const a=lA("firestore");a&&h0(o,...a)}return o}function Kl(n){if(n._terminated)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||HN(n),n._firestoreClient}function HN(n){var e,t,i;const o=n._freezeSettings(),a=(function(d,p,y,_){return new yP(d,p,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,u0(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new UN(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}})(n._componentsProvider))}/**
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
 */class mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mn(kt.fromBase64String(e))}catch(t){throw new se(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mn(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:mn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zl(e,mn._jsonSchema))return mn.fromBase64String(e.bytes)}}mn._jsonSchemaVersion="firestore/bytes/1.0",mn._jsonSchema={type:pt("string",mn._jsonSchemaVersion),bytes:pt("string")};/**
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
 */class Xn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xn._jsonSchemaVersion}}static fromJSON(e){if(zl(e,Xn._jsonSchema))return new Xn(e.latitude,e.longitude)}}Xn._jsonSchemaVersion="firestore/geoPoint/1.0",Xn._jsonSchema={type:pt("string",Xn._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
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
 */class Yn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zl(e,Yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Yn(e.vectorValues);throw new se(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yn._jsonSchemaVersion="firestore/vectorValue/1.0",Yn._jsonSchema={type:pt("string",Yn._jsonSchemaVersion),vectorValues:pt("object")};/**
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
 */const qN=/^__.*__$/;class WN{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hl(e,this.data,t,this.fieldTransforms)}}class f0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function p0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ec:n})}}class Ah{constructor(e,t,i,o,a,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ah(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Zc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(p0(this.Ec)&&qN.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class GN{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Eh(e)}Dc(e,t,i,o=!1){return new Ah({Ec:e,methodName:t,bc:i,path:Pt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rh(n){const e=n._freezeSettings(),t=Eh(n._databaseId);return new GN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function m0(n,e,t,i,o,a={}){const c=n.Dc(a.merge||a.mergeFields?2:0,e,t,o);sm("Data must be an object, but it was:",c,i);const d=y0(i,c);let p,y;if(a.merge)p=new gn(c.fieldMask),y=c.fieldTransforms;else if(a.mergeFields){const _=[];for(const E of a.mergeFields){const T=sp(e,E,t);if(!c.contains(T))throw new se(W.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);_0(_,T)||_.push(T)}p=new gn(_),y=c.fieldTransforms.filter((E=>p.covers(E.field)))}else p=null,y=c.fieldTransforms;return new WN(new an(d),p,y)}class Ch extends Us{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ch}}function g0(n,e,t){return new Ah({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class nm extends Us{_toFieldTransform(e){return new Vp(e.path,new Cl)}isEqual(e){return e instanceof nm}}class rm extends Us{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=g0(this,e,!0),i=this.vc.map((a=>js(a,t))),o=new Xo(i);return new Vp(e.path,o)}isEqual(e){return e instanceof rm&&Xr(this.vc,e.vc)}}class im extends Us{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=g0(this,e,!0),i=this.vc.map((a=>js(a,t))),o=new Yo(i);return new Vp(e.path,o)}isEqual(e){return e instanceof im&&Xr(this.vc,e.vc)}}function KN(n,e,t,i){const o=n.Dc(1,e,t);sm("Data must be an object, but it was:",o,i);const a=[],c=an.empty();Ki(i,((p,y)=>{const _=om(e,p,t);y=Et(y);const E=o.gc(_);if(y instanceof Ch)a.push(_);else{const T=js(y,E);T!=null&&(a.push(_),c.set(_,T))}}));const d=new gn(a);return new f0(c,d,o.fieldTransforms)}function QN(n,e,t,i,o,a){const c=n.Dc(1,e,t),d=[sp(e,i,t)],p=[o];if(a.length%2!=0)throw new se(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(sp(e,a[T])),p.push(a[T+1]);const y=[],_=an.empty();for(let T=d.length-1;T>=0;--T)if(!_0(y,d[T])){const k=d[T];let j=p[T];j=Et(j);const z=c.gc(k);if(j instanceof Ch)y.push(k);else{const L=js(j,z);L!=null&&(y.push(k),_.set(k,L))}}const E=new gn(y);return new f0(_,E,c.fieldTransforms)}function XN(n,e,t,i=!1){return js(t,n.Dc(i?4:3,e))}function js(n,e){if(v0(n=Et(n)))return sm("Unsupported field value:",e,n),y0(n,e);if(n instanceof Us)return(function(i,o){if(!p0(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(o);a&&o.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const a=[];let c=0;for(const d of i){let p=js(d,o.yc(c));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),c++}return{arrayValue:{values:a}}})(n,e)}return(function(i,o){if((i=Et(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return jP(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=$e.fromDate(i);return{timestampValue:Kc(o.serializer,a)}}if(i instanceof $e){const a=new $e(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Kc(o.serializer,a)}}if(i instanceof Xn)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof mn)return{bytesValue:OE(o.serializer,i._byteString)};if(i instanceof rt){const a=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(a))throw o.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Fp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Yn)return(function(c,d){return{mapValue:{fields:{[cE]:{stringValue:hE},[Hc]:{arrayValue:{values:c.toArray().map((y=>{if(typeof y!="number")throw d.wc("VectorValues must only contain numeric values.");return bp(d.serializer,y)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${hh(i)}`)})(n,e)}function y0(n,e){const t={};return iE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(n,((i,o)=>{const a=js(o,e.Vc(i));a!=null&&(t[i]=a)})),{mapValue:{fields:t}}}function v0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof $e||n instanceof Xn||n instanceof mn||n instanceof rt||n instanceof Us||n instanceof Yn)}function sm(n,e,t){if(!v0(t)||!nE(t)){const i=hh(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function sp(n,e,t){if((e=Et(e))instanceof Ql)return e._internalPath;if(typeof e=="string")return om(n,e);throw Zc("Field path arguments must be of type string or ",n,!1,void 0,t)}const YN=new RegExp("[~\\*/\\[\\]]");function om(n,e,t){if(e.search(YN)>=0)throw Zc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ql(...e.split("."))._internalPath}catch{throw Zc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zc(n,e,t,i,o){const a=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(a||c)&&(p+=" (found",a&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new se(W.INVALID_ARGUMENT,d+n+p)}function _0(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class w0{constructor(e,t,i,o,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(am("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class JN extends w0{data(){return super.data()}}function am(n,e){return typeof e=="string"?om(n,e):e instanceof Ql?e._internalPath:e._delegate._internalPath}/**
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
 */function E0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lm{}class T0 extends lm{}function Pl(n,e,...t){let i=[];e instanceof lm&&i.push(e),i=i.concat(t),(function(a){const c=a.filter((p=>p instanceof Ph)).length,d=a.filter((p=>p instanceof Xl)).length;if(c>1||c>0&&d>0)throw new se(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class Xl extends T0{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Xl(e,t,i)}_apply(e){const t=this._parse(e);return I0(e._query,t),new Xi(e.firestore,e.converter,Kf(e._query,t))}_parse(e){const t=Rh(e.firestore);return(function(a,c,d,p,y,_,E){let T;if(y.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new se(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){v_(E,_);const j=[];for(const z of E)j.push(y_(p,a,z));T={arrayValue:{values:j}}}else T=y_(p,a,E)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||v_(E,_),T=XN(d,c,E,_==="in"||_==="not-in");return ft.create(y,_,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ea(n,e,t){const i=e,o=am("where",n);return Xl._create(o,i,t)}class Ph extends lm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ph(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:er.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,a){let c=o;const d=a.getFlattenedFilters();for(const p of d)I0(c,p),c=Kf(c,p)})(e._query,t),new Xi(e.firestore,e.converter,Kf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function y_(n,e,t){if(typeof(t=Et(t))=="string"){if(t==="")throw new se(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_E(e)&&t.indexOf("/")!==-1)throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ge.fromString(t));if(!pe.isDocumentKey(i))throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return bv(n,new pe(i))}if(t instanceof rt)return bv(n,t._key);throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hh(t)}.`)}function v_(n,e){if(!Array.isArray(n)||n.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function I0(n,e){const t=(function(o,a){for(const c of o)for(const d of c.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class S0{convertValue(e,t="none"){switch(zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ki(e,((o,a)=>{i[o]=this.convertValue(a,t)})),i}convertVectorValue(e){var t,i,o;const a=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[Hc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((c=>lt(c.doubleValue)));return new Yn(a)}convertGeoPoint(e){return new Xn(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=ph(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Al(e));default:return null}}convertTimestamp(e){const t=ji(e);return new $e(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ge.fromString(e);Ue(BE(i),9688,{name:e});const o=new Go(i.get(1),i.get(3)),a=new pe(i.popFirst(5));return o.isEqual(t)||Zr(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function A0(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class Bo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mi extends w0{constructor(e,t,i,o,a,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(am("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Mi._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Mi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mi._jsonSchema={type:pt("string",Mi._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class _l extends Mi{data(e={}){return super.data(e)}}class Fi{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Bo(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new _l(this._firestore,this._userDataWriter,i.key,i,new Bo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((d=>{const p=new _l(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Bo(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const p=new _l(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Bo(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,_=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),_=c.indexOf(d.doc.key)),{type:ZN(d.type),doc:p,oldIndex:y,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ch.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),i.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ZN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:n})}}/**
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
 */function ni(n){n=Qt(n,rt);const e=Qt(n.firestore,Er);return zN(Kl(e),n._key).then((t=>C0(e,n,t)))}Fi._jsonSchemaVersion="firestore/querySnapshot/1.0",Fi._jsonSchema={type:pt("string",Fi._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};class um extends S0{constructor(e){super(),this.firestore=e}convertBytes(e){return new mn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,t)}}function R0(n){n=Qt(n,Xi);const e=Qt(n.firestore,Er),t=Kl(e),i=new um(e);return E0(n._query),$N(t,n._query).then((o=>new Fi(e,i,n,o)))}function Ds(n,e,t){n=Qt(n,rt);const i=Qt(n.firestore,Er),o=A0(n.converter,e);return Yl(i,[m0(Rh(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,xn.none())])}function Bs(n,e,t,...i){n=Qt(n,rt);const o=Qt(n.firestore,Er),a=Rh(o);let c;return c=typeof(e=Et(e))=="string"||e instanceof Ql?QN(a,"updateDoc",n._key,e,t,i):KN(a,"updateDoc",n._key,e),Yl(o,[c.toMutation(n._key,xn.exists(!0))])}function ex(n){return Yl(Qt(n.firestore,Er),[new Op(n._key,xn.none())])}function cm(n,e){const t=Qt(n.firestore,Er),i=$t(n),o=A0(n.converter,e);return Yl(t,[m0(Rh(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,xn.exists(!1))]).then((()=>i))}function kl(n,...e){var t,i,o;n=Et(n);let a={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||g_(e[c])||(a=e[c++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(g_(e[c])){const E=e[c];e[c]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[c+1]=(i=E.error)===null||i===void 0?void 0:i.bind(E),e[c+2]=(o=E.complete)===null||o===void 0?void 0:o.bind(E)}let p,y,_;if(n instanceof rt)y=Qt(n.firestore,Er),_=mh(n._key.path),p={next:E=>{e[c]&&e[c](C0(y,n,E))},error:e[c+1],complete:e[c+2]};else{const E=Qt(n,Xi);y=Qt(E.firestore,Er),_=E._query;const T=new um(y);p={next:k=>{e[c]&&e[c](new Fi(y,T,E,k))},error:e[c+1],complete:e[c+2]},E0(n._query)}return(function(T,k,j,z){const L=new tm(z),G=new Jp(k,L,j);return T.asyncQueue.enqueueAndForget((async()=>Qp(await Jc(T),G))),()=>{L.Ou(),T.asyncQueue.enqueueAndForget((async()=>Xp(await Jc(T),G)))}})(Kl(y),_,d,p)}function Yl(n,e){return(function(i,o){const a=new Gr;return i.asyncQueue.enqueueAndForget((async()=>NN(await BN(i),o,a))),a.promise})(Kl(n),e)}function C0(n,e,t){const i=t.docs.get(e._key),o=new um(n);return new Mi(n,o,e._key,i,new Bo(t.hasPendingWrites,t.fromCache),e.converter)}function hm(){return new nm("serverTimestamp")}function P0(...n){return new rm("arrayUnion",n)}function k0(...n){return new im("arrayRemove",n)}(function(e,t=!0){(function(o){aa=o})(sa),_r(new Jn("firestore",((i,{instanceIdentifier:o,options:a})=>{const c=i.getProvider("app").getImmediate(),d=new Er(new eP(i.getProvider("auth-internal")),new rP(c,i.getProvider("app-check-internal")),(function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new se(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Go(y.options.projectId,_)})(c,o),c);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),Nn(_v,wv,e),Nn(_v,wv,"esm2017")})();const tx=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:S0,Bytes:mn,CollectionReference:Kr,DocumentReference:rt,DocumentSnapshot:Mi,FieldPath:Ql,FieldValue:Us,Firestore:Er,FirestoreError:se,GeoPoint:Xn,Query:Xi,QueryCompositeFilterConstraint:Ph,QueryConstraint:T0,QueryDocumentSnapshot:_l,QueryFieldFilterConstraint:Xl,QuerySnapshot:Fi,SnapshotMetadata:Bo,Timestamp:$e,VectorValue:Yn,_AutoId:ch,_ByteString:kt,_DatabaseId:Go,_DocumentKey:pe,_EmptyAuthCredentialsProvider:Jw,_FieldPath:Pt,_cast:Qt,_logWarn:ei,_validateIsNotUsedTogether:tE,addDoc:cm,arrayRemove:k0,arrayUnion:P0,collection:qi,connectFirestoreEmulator:h0,deleteDoc:ex,doc:$t,ensureFirestoreConfigured:Kl,executeWrite:Yl,getDoc:ni,getDocs:R0,getFirestore:d0,onSnapshot:kl,query:Pl,serverTimestamp:hm,setDoc:Ds,updateDoc:Bs,where:ea},Symbol.toStringTag,{value:"Module"})),N0="@firebase/installations",dm="0.6.18";/**
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
 */const x0=1e4,D0=`w:${dm}`,b0="FIS_v2",nx="https://firebaseinstallations.googleapis.com/v1",rx=3600*1e3,ix="installations",sx="Installations";/**
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
 */const ox={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},bs=new Os(ix,sx,ox);function V0(n){return n instanceof Ir&&n.code.includes("request-failed")}/**
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
 */function O0({projectId:n}){return`${nx}/projects/${n}/installations`}function L0(n){return{token:n.token,requestStatus:2,expiresIn:lx(n.expiresIn),creationTime:Date.now()}}async function M0(n,e){const i=(await e.json()).error;return bs.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function F0({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ax(n,{refreshToken:e}){const t=F0(n);return t.append("Authorization",ux(e)),t}async function U0(n){const e=await n();return e.status>=500&&e.status<600?n():e}function lx(n){return Number(n.replace("s","000"))}function ux(n){return`${b0} ${n}`}/**
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
 */async function cx({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=O0(n),o=F0(n),a=e.getImmediate({optional:!0});if(a){const y=await a.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:b0,appId:n.appId,sdkVersion:D0},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await U0(()=>fetch(i,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:L0(y.authToken)}}else throw await M0("Create Installation",p)}/**
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
 */function j0(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function hx(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const dx=/^[cdef][\w-]{21}$/,op="";function fx(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=px(n);return dx.test(t)?t:op}catch{return op}}function px(n){return hx(n).substr(0,22)}/**
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
 */const B0=new Map;function z0(n,e){const t=kh(n);$0(t,e),mx(t,e)}function $0(n,e){const t=B0.get(n);if(t)for(const i of t)i(e)}function mx(n,e){const t=gx();t&&t.postMessage({key:n,fid:e}),yx()}let Cs=null;function gx(){return!Cs&&"BroadcastChannel"in self&&(Cs=new BroadcastChannel("[Firebase] FID Change"),Cs.onmessage=n=>{$0(n.data.key,n.data.fid)}),Cs}function yx(){B0.size===0&&Cs&&(Cs.close(),Cs=null)}/**
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
 */const vx="firebase-installations-database",_x=1,Vs="firebase-installations-store";let Af=null;function fm(){return Af||(Af=oh(vx,_x,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Vs)}}})),Af}async function eh(n,e){const t=kh(n),o=(await fm()).transaction(Vs,"readwrite"),a=o.objectStore(Vs),c=await a.get(t);return await a.put(e,t),await o.done,(!c||c.fid!==e.fid)&&z0(n,e.fid),e}async function H0(n){const e=kh(n),i=(await fm()).transaction(Vs,"readwrite");await i.objectStore(Vs).delete(e),await i.done}async function Nh(n,e){const t=kh(n),o=(await fm()).transaction(Vs,"readwrite"),a=o.objectStore(Vs),c=await a.get(t),d=e(c);return d===void 0?await a.delete(t):await a.put(d,t),await o.done,d&&(!c||c.fid!==d.fid)&&z0(n,d.fid),d}/**
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
 */async function pm(n){let e;const t=await Nh(n.appConfig,i=>{const o=wx(i),a=Ex(n,o);return e=a.registrationPromise,a.installationEntry});return t.fid===op?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function wx(n){const e=n||{fid:fx(),registrationStatus:0};return q0(e)}function Ex(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(bs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Tx(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ix(n)}:{installationEntry:e}}async function Tx(n,e){try{const t=await cx(n,e);return eh(n.appConfig,t)}catch(t){throw V0(t)&&t.customData.serverCode===409?await H0(n.appConfig):await eh(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Ix(n){let e=await __(n.appConfig);for(;e.registrationStatus===1;)await j0(100),e=await __(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await pm(n);return i||t}return e}function __(n){return Nh(n,e=>{if(!e)throw bs.create("installation-not-found");return q0(e)})}function q0(n){return Sx(n)?{fid:n.fid,registrationStatus:0}:n}function Sx(n){return n.registrationStatus===1&&n.registrationTime+x0<Date.now()}/**
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
 */async function Ax({appConfig:n,heartbeatServiceProvider:e},t){const i=Rx(n,t),o=ax(n,t),a=e.getImmediate({optional:!0});if(a){const y=await a.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:D0,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await U0(()=>fetch(i,d));if(p.ok){const y=await p.json();return L0(y)}else throw await M0("Generate Auth Token",p)}function Rx(n,{fid:e}){return`${O0(n)}/${e}/authTokens:generate`}/**
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
 */async function mm(n,e=!1){let t;const i=await Nh(n.appConfig,a=>{if(!W0(a))throw bs.create("not-registered");const c=a.authToken;if(!e&&kx(c))return a;if(c.requestStatus===1)return t=Cx(n,e),a;{if(!navigator.onLine)throw bs.create("app-offline");const d=xx(a);return t=Px(n,d),d}});return t?await t:i.authToken}async function Cx(n,e){let t=await w_(n.appConfig);for(;t.authToken.requestStatus===1;)await j0(100),t=await w_(n.appConfig);const i=t.authToken;return i.requestStatus===0?mm(n,e):i}function w_(n){return Nh(n,e=>{if(!W0(e))throw bs.create("not-registered");const t=e.authToken;return Dx(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Px(n,e){try{const t=await Ax(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await eh(n.appConfig,i),t}catch(t){if(V0(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await H0(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await eh(n.appConfig,i)}throw t}}function W0(n){return n!==void 0&&n.registrationStatus===2}function kx(n){return n.requestStatus===2&&!Nx(n)}function Nx(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+rx}function xx(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Dx(n){return n.requestStatus===1&&n.requestTime+x0<Date.now()}/**
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
 */async function bx(n){const e=n,{installationEntry:t,registrationPromise:i}=await pm(e);return i?i.catch(console.error):mm(e).catch(console.error),t.fid}/**
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
 */async function Vx(n,e=!1){const t=n;return await Ox(t),(await mm(t,e)).token}async function Ox(n){const{registrationPromise:e}=await pm(n);e&&await e}/**
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
 */function Lx(n){if(!n||!n.options)throw Rf("App Configuration");if(!n.name)throw Rf("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Rf(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Rf(n){return bs.create("missing-app-config-values",{valueName:n})}/**
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
 */const G0="installations",Mx="installations-internal",Fx=n=>{const e=n.getProvider("app").getImmediate(),t=Lx(e),i=Ml(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Ux=n=>{const e=n.getProvider("app").getImmediate(),t=Ml(e,G0).getImmediate();return{getId:()=>bx(t),getToken:o=>Vx(t,o)}};function jx(){_r(new Jn(G0,Fx,"PUBLIC")),_r(new Jn(Mx,Ux,"PRIVATE"))}jx();Nn(N0,dm);Nn(N0,dm,"esm2017");/**
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
 */const Bx="/firebase-messaging-sw.js",zx="/firebase-cloud-messaging-push-scope",K0="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",$x="https://fcmregistrations.googleapis.com/v1",Q0="google.c.a.c_id",Hx="google.c.a.c_l",qx="google.c.a.ts",Wx="google.c.a.e",E_=1e4;var T_;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(T_||(T_={}));/**
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
 */function zr(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Gx(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let a=0;a<i.length;++a)o[a]=i.charCodeAt(a);return o}/**
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
 */const Cf="fcm_token_details_db",Kx=5,I_="fcm_token_object_Store";async function Qx(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(Cf))return null;let e=null;return(await oh(Cf,Kx,{upgrade:async(i,o,a,c)=>{var d;if(o<2||!i.objectStoreNames.contains(I_))return;const p=c.objectStore(I_),y=await p.index("fcmSenderId").get(n);if(await p.clear(),!!y){if(o===2){const _=y;if(!_.auth||!_.p256dh||!_.endpoint)return;e={token:_.fcmToken,createTime:(d=_.createTime)!==null&&d!==void 0?d:Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:zr(_.vapidKey)}}}else if(o===3){const _=y;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:zr(_.auth),p256dh:zr(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:zr(_.vapidKey)}}}else if(o===4){const _=y;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:zr(_.auth),p256dh:zr(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:zr(_.vapidKey)}}}}}})).close(),await gf(Cf),await gf("fcm_vapid_details_db"),await gf("undefined"),Xx(e)?e:null}function Xx(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Yx="firebase-messaging-database",Jx=1,xl="firebase-messaging-store";let Pf=null;function X0(){return Pf||(Pf=oh(Yx,Jx,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(xl)}}})),Pf}async function Zx(n){const e=Y0(n),i=await(await X0()).transaction(xl).objectStore(xl).get(e);if(i)return i;{const o=await Qx(n.appConfig.senderId);if(o)return await gm(n,o),o}}async function gm(n,e){const t=Y0(n),o=(await X0()).transaction(xl,"readwrite");return await o.objectStore(xl).put(e,t),await o.done,e}function Y0({appConfig:n}){return n.appId}/**
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
 */const eD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},yn=new Os("messaging","Messaging",eD);/**
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
 */async function tD(n,e){const t=await vm(n),i=J0(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let a;try{a=await(await fetch(ym(n.appConfig),o)).json()}catch(c){throw yn.create("token-subscribe-failed",{errorInfo:c==null?void 0:c.toString()})}if(a.error){const c=a.error.message;throw yn.create("token-subscribe-failed",{errorInfo:c})}if(!a.token)throw yn.create("token-subscribe-no-token");return a.token}async function nD(n,e){const t=await vm(n),i=J0(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let a;try{a=await(await fetch(`${ym(n.appConfig)}/${e.token}`,o)).json()}catch(c){throw yn.create("token-update-failed",{errorInfo:c==null?void 0:c.toString()})}if(a.error){const c=a.error.message;throw yn.create("token-update-failed",{errorInfo:c})}if(!a.token)throw yn.create("token-update-no-token");return a.token}async function rD(n,e){const i={method:"DELETE",headers:await vm(n)};try{const a=await(await fetch(`${ym(n.appConfig)}/${e}`,i)).json();if(a.error){const c=a.error.message;throw yn.create("token-unsubscribe-failed",{errorInfo:c})}}catch(o){throw yn.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function ym({projectId:n}){return`${$x}/projects/${n}/registrations`}async function vm({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function J0({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==K0&&(o.web.applicationPubKey=i),o}/**
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
 */const iD=10080*60*1e3;async function sD(n){const e=await aD(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:zr(e.getKey("auth")),p256dh:zr(e.getKey("p256dh"))},i=await Zx(n.firebaseDependencies);if(i){if(lD(i.subscriptionOptions,t))return Date.now()>=i.createTime+iD?oD(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await rD(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return S_(n.firebaseDependencies,t)}else return S_(n.firebaseDependencies,t)}async function oD(n,e){try{const t=await nD(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await gm(n.firebaseDependencies,i),t}catch(t){throw t}}async function S_(n,e){const i={token:await tD(n,e),createTime:Date.now(),subscriptionOptions:e};return await gm(n,i),i.token}async function aD(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Gx(e)})}function lD(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,a=e.p256dh===n.p256dh;return t&&i&&o&&a}/**
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
 */function A_(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return uD(e,n),cD(e,n),hD(e,n),e}function uD(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const a=e.notification.icon;a&&(n.notification.icon=a)}function cD(n,e){e.data&&(n.data=e.data)}function hD(n,e){var t,i,o,a,c;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const d=(o=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(a=e.notification)===null||a===void 0?void 0:a.click_action;d&&(n.fcmOptions.link=d);const p=(c=e.fcmOptions)===null||c===void 0?void 0:c.analytics_label;p&&(n.fcmOptions.analyticsLabel=p)}/**
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
 */function dD(n){return typeof n=="object"&&!!n&&Q0 in n}/**
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
 */function fD(n){if(!n||!n.options)throw kf("App Configuration Object");if(!n.name)throw kf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw kf(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function kf(n){return yn.create("missing-app-config-values",{valueName:n})}/**
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
 */class pD{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=fD(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function mD(n){try{n.swRegistration=await navigator.serviceWorker.register(Bx,{scope:zx}),n.swRegistration.update().catch(()=>{}),await gD(n.swRegistration)}catch(e){throw yn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function gD(n){return new Promise((e,t)=>{const i=setTimeout(()=>t(new Error(`Service worker not registered after ${E_} ms`)),E_),o=n.installing||n.waiting;n.active?(clearTimeout(i),e()):o?o.onstatechange=a=>{var c;((c=a.target)===null||c===void 0?void 0:c.state)==="activated"&&(o.onstatechange=null,clearTimeout(i),e())}:(clearTimeout(i),t(new Error("No incoming service worker found.")))})}/**
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
 */async function yD(n,e){if(!e&&!n.swRegistration&&await mD(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw yn.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function vD(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=K0)}/**
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
 */async function _D(n,e){if(!navigator)throw yn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw yn.create("permission-blocked");return await vD(n,e==null?void 0:e.vapidKey),await yD(n,e==null?void 0:e.serviceWorkerRegistration),sD(n)}/**
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
 */async function wD(n,e,t){const i=ED(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[Q0],message_name:t[Hx],message_time:t[qx],message_device_time:Math.floor(Date.now()/1e3)})}function ED(n){switch(n){case Nl.NOTIFICATION_CLICKED:return"notification_open";case Nl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function TD(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Nl.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(A_(t)):n.onMessageHandler.next(A_(t)));const i=t.data;dD(i)&&i[Wx]==="1"&&await wD(n,t.messageType,i)}const R_="@firebase/messaging",C_="0.12.22";/**
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
 */const ID=n=>{const e=new pD(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>TD(e,t)),e},SD=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>_D(e,i)}};function AD(){_r(new Jn("messaging",ID,"PUBLIC")),_r(new Jn("messaging-internal",SD,"PRIVATE")),Nn(R_,C_),Nn(R_,C_,"esm2017")}AD();const RD={apiKey:"AIzaSyAeNp0heXpZi_jpE9T3iyrAqSN5MoDPRQI",authDomain:"cartalk-app.firebaseapp.com",projectId:"cartalk-app",storageBucket:"cartalk-app.firebasestorage.app",messagingSenderId:"840131303273",appId:"1:840131303273:web:e2b43fbfcecb56e48c0ff8"},Z0=ow(RD),xh=Q1(Z0),ut=d0(Z0),CD=(n,e)=>bC(xh,n,e),PD=(n,e)=>VC(xh,n,e),kD=()=>FC(xh),ND=n=>MC(xh,n),eT=O.createContext({user:null,loading:!0}),xD=({children:n})=>{const[e,t]=O.useState(null),[i,o]=O.useState(!0);return O.useEffect(()=>ND(c=>{t(c),o(!1)}),[]),R.jsx(eT.Provider,{value:{user:e,loading:i},children:n})},ri=()=>O.useContext(eT),DD=()=>{const n=tr(),[e,t]=O.useState(""),[i,o]=O.useState(""),[a,c]=O.useState(""),[d,p]=O.useState(!1),y=async _=>{_.preventDefault(),c(""),p(!0);try{await PD(e,i),n("/inbox")}catch(E){c(E instanceof Error?E.message:"Sign-in failed")}finally{p(!1)}};return R.jsxs("div",{className:"page auth-page",children:[R.jsx("h1",{className:"page-title",children:"Car Talk"}),R.jsx("p",{className:"auth-subtitle",children:"Message drivers, anonymously."}),R.jsxs("form",{onSubmit:y,children:[R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"email",children:"Email"}),R.jsx("input",{id:"email",type:"email",value:e,onChange:_=>t(_.target.value),placeholder:"you@example.com",autoComplete:"email",required:!0})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"password",children:"Password"}),R.jsx("input",{id:"password",type:"password",value:i,onChange:_=>o(_.target.value),placeholder:"••••••••",autoComplete:"current-password",required:!0})]}),a&&R.jsx("p",{className:"error-text",role:"alert",children:a}),R.jsx("button",{className:"btn-primary",type:"submit",disabled:d||!e||!i,children:d?"Signing in…":"Sign In"})]}),R.jsxs("p",{className:"auth-link",children:["Don't have an account? ",R.jsx(Ol,{to:"/signup",children:"Sign Up"})]})]})},bD="modulepreload",VD=function(n){return"/car-talk-web/"+n},P_={},OD=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let c=function(y){return Promise.all(y.map(_=>Promise.resolve(_).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=c(t.map(y=>{if(y=VD(y),y in P_)return;P_[y]=!0;const _=y.endsWith(".css"),E=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${E}`))return;const T=document.createElement("link");if(T.rel=_?"stylesheet":bD,_||(T.as="script"),T.crossOrigin="",T.href=y,p&&T.setAttribute("nonce",p),document.head.appendChild(T),_)return new Promise((k,j)=>{T.addEventListener("load",k),T.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${y}`)))})}))}function a(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return o.then(c=>{for(const d of c||[])d.status==="rejected"&&a(d.reason);return e().catch(a)})};var Dl=(n=>(n.Pending="pending",n.Accepted="accepted",n.Declined="declined",n))(Dl||{});const ap=100,k_=[{name:"White",hex:"#F5F5F5"},{name:"Black",hex:"#1A1A1A"},{name:"Silver",hex:"#C0C0C0"},{name:"Grey",hex:"#808080"},{name:"Red",hex:"#D32F2F"},{name:"Blue",hex:"#1565C0"},{name:"Green",hex:"#2E7D32"},{name:"Yellow",hex:"#F9A825"},{name:"Orange",hex:"#E65100"},{name:"Brown",hex:"#4E342E"},{name:"Beige",hex:"#F5F5DC"},{name:"Gold",hex:"#FFC107"}],tT=200,nT=500,N_=5,th=3,LD=30,_m=async n=>{const e=await ni($t(ut,"users",n));return e.exists()?{uid:e.id,...e.data()}:null},MD=async(n,e)=>{const t=$t(ut,"users",n);(await ni(t)).exists()?await Bs(t,{...e}):await Ds(t,{...e,vehicles:[]})},FD=async(n,e)=>{const t=$t(ut,"users",n),i=await ni(t);if((i.exists()?i.data().vehicles??[]:[]).length>=th)throw new Error(`Maximum of ${th} vehicles allowed`);const a=e.licensePlate.toUpperCase().replace(/\s/g,""),c={...e,licensePlate:a};i.exists()?await Bs(t,{vehicles:P0(c)}):await Ds(t,{uid:n,vehicles:[c]}),await Ds($t(ut,"vehicleLookup",a),{userId:n,vehicleId:e.id,make:e.make,model:e.model,color:e.color,licensePlate:a})},UD=async(n,e)=>{const t=$t(ut,"users",n);await Bs(t,{vehicles:k0(e)});const i=e.licensePlate.toUpperCase().replace(/\s/g,""),{deleteDoc:o}=await OD(async()=>{const{deleteDoc:a}=await Promise.resolve().then(()=>tx);return{deleteDoc:a}},[]);await o($t(ut,"vehicleLookup",i))},jD=async n=>{const e=n.toUpperCase().replace(/\s/g,""),t=await ni($t(ut,"vehicleLookup",e));if(!t.exists())return null;const i=t.data();return{uid:i.userId,vehicles:[{id:i.vehicleId,licensePlate:i.licensePlate,make:i.make,model:i.model,color:i.color}]}},BD=()=>{const n=tr(),[e,t]=O.useState(""),[i,o]=O.useState(""),[a,c]=O.useState(""),[d,p]=O.useState(""),[y,_]=O.useState(!1),E=async T=>{T.preventDefault(),p(""),_(!0);try{const k=await CD(e,i);await MD(k.user.uid,{displayName:a,email:e}),n("/add-vehicle")}catch(k){p(k instanceof Error?k.message:"Registration failed")}finally{_(!1)}};return R.jsxs("div",{className:"page auth-page",children:[R.jsx("h1",{className:"page-title",children:"Create Account"}),R.jsxs("form",{onSubmit:E,children:[R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"name",children:"Display Name"}),R.jsx("input",{id:"name",type:"text",value:a,onChange:T=>c(T.target.value),placeholder:"Road Warrior",required:!0})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"email",children:"Email"}),R.jsx("input",{id:"email",type:"email",value:e,onChange:T=>t(T.target.value),placeholder:"you@example.com",autoComplete:"email",required:!0})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"password",children:"Password"}),R.jsx("input",{id:"password",type:"password",value:i,onChange:T=>o(T.target.value),placeholder:"Min. 6 characters",autoComplete:"new-password",minLength:6,required:!0})]}),d&&R.jsx("p",{className:"error-text",role:"alert",children:d}),R.jsx("button",{className:"btn-primary",type:"submit",disabled:y||!e||!i||!a,children:y?"Creating account…":"Create Account"})]}),R.jsxs("p",{className:"auth-link",children:["Already have an account? ",R.jsx(Ol,{to:"/login",children:"Sign In"})]})]})},rT={Acura:["ILX","Integra","MDX","NSX","RDX","RLX","TLX","ZDX"],"Alfa Romeo":["Giulia","Giulietta","Stelvio","Tonale"],"Aston Martin":["DB11","DB12","DBX","Vantage"],Audi:["A3","A4","A5","A6","A7","A8","e-tron","e-tron GT","e-tron S","Q3","Q4 e-tron","Q5","Q7","Q8","R8","RS3","RS5","RS6","RS7","RS e-tron GT","S3","S4","S5","S6","S7","S8","SQ5","SQ7","SQ8","TT"],Bentley:["Bentayga","Continental GT","Flying Spur","Mulsanne"],BMW:["1 Series","2 Series","3 Series","4 Series","5 Series","6 Series","7 Series","8 Series","i3","i4","i5","i7","iX","iX1","iX3","M2","M3","M4","M5","M8","X1","X2","X3","X4","X5","X6","X7","XM","Z4"],Buick:["Enclave","Encore","Encore GX","Envision","LaCrosse","Verano"],BYD:["Atto 3","Dolphin","Han","Seal","Seal U DM-i","Sealion 5","Sealion 6","Sealion 7","Shark","Tang"],Cadillac:["CT4","CT5","Escalade","Lyriq","XT4","XT5","XT6"],Chevrolet:["Blazer","Blazer EV","Bolt EUV","Bolt EV","Camaro","Colorado","Corvette","Equinox","Equinox EV","Express","Malibu","Silverado 1500","Silverado 2500HD","Silverado 3500HD","Silverado EV","Spark","Suburban","Tahoe","Trailblazer","Traverse","Trax"],Chrysler:["300","Pacifica","Voyager"],Citroën:["Berlingo","C1","C3","C3 Aircross","C4","C4 X","C5 Aircross","C5 X","Dispatch","ë-C3","ë-C4"],Cupra:["Ateca","Born","Formentor","Leon","Terramar"],Dacia:["Duster","Jogger","Logan","Sandero","Sandero Stepway","Spring"],Dodge:["Challenger","Charger","Durango","Hornet","Ram 1500"],Ferrari:["296 GTB","296 GTS","812 Superfast","F8 Tributo","Portofino","Purosangue","Roma","SF90 Stradale"],Fiat:["500","500L","500X","500e"],Ford:["Bronco","Bronco Sport","EcoSport","Edge","Escape","Expedition","Explorer","F-150","F-150 Lightning","Fusion","Galaxy","Maverick","Mustang","Mustang Mach-E","Puma","Ranger","Super Duty F-250","Super Duty F-350","Super Duty F-450","Territory","Transit","Transit Connect","Transit Custom"],Genesis:["GV60","GV70","GV80","G70","G80","G90"],GMC:["Acadia","Canyon","Envoy","Envoy XL","Sierra 1500","Sierra 2500HD","Sierra 3500HD","Terrain","Yukon","Yukon XL"],GWM:["Cannon","Cannon Alpha","Cannon X","Ora","Tank 300","Tank 500","Ute"],Haval:["Dargo","H2","H6","H9","Jolion","Raptor"],Holden:["Astra","Barina","Captiva","Colorado","Commodore","Cruze","Equinox","Spark","Trax","Trailblazer"],Honda:["Accord","City","Civic","CR-V","CR-Z","Crosstour","Element","Fit","HR-V","Insight","Jazz","Odyssey","Passport","Pilot","Prologue","Ridgeline","ZR-V"],Hyundai:["Accent","Azera","Elantra","Elantra GT","Elantra N","i20","i30","IONIQ","IONIQ 5","IONIQ 5 N","IONIQ 6","IONIQ 9","Kona","Kona Electric","Kona N","Nexo","Palisade","Santa Cruz","Santa Fe","Santa Fe PHEV","Sonata","Staria","Tucson","Tucson Plug-in Hybrid","Venue","Veloster"],Infiniti:["Q50","Q60","QX50","QX55","QX60","QX80"],Isuzu:["D-Max","MU-X"],Jaguar:["E-Pace","F-Pace","F-Type","I-Pace","XE","XF","XJ"],Jeep:["Cherokee","Compass","Gladiator","Grand Cherokee","Grand Cherokee L","Grand Wagoneer","Renegade","Wagoneer","Wrangler"],Kia:["Carnival","EV3","EV6","EV9","Forte","K5","Niro","Niro EV","Niro Plug-in","Picanto","Seltos","Sorento","Sorento PHEV","Soul","Sportage","Sportage PHEV","Stinger","Telluride"],"Land Rover":["Defender","Discovery","Discovery Sport","Freelander","Range Rover","Range Rover Evoque","Range Rover Sport","Range Rover Velar"],LDV:["D90","eDeliver 3","eDeliver 9","G10","Mifa 6","Mifa 9","T60","T60 Max","V80"],Lexus:["ES","GS","GX","IS","LC","LFA","LS","LX","NX","RC","RX","RX 450h","RZ","TX","UX"],Lincoln:["Aviator","Corsair","MKZ","Nautilus","Navigator"],Maserati:["Ghibli","GranTurismo","Grecale","Levante","MC20","Quattroporte"],Mazda:["CX-3","CX-30","CX-5","CX-50","CX-60","CX-70","CX-80","CX-90","Mazda2","Mazda3","Mazda6","MX-5 Miata","MX-30"],McLaren:["570S","600LT","620R","650S","675LT","720S","750S","Artura","GT"],"Mercedes-Benz":["A-Class","B-Class","C-Class","CLA-Class","CLS-Class","E-Class","EQA","EQB","EQC","EQE","EQE SUV","EQS","EQS SUV","G-Class","GLA-Class","GLB-Class","GLC-Class","GLE-Class","GLS-Class","S-Class","SL-Class","SLK-Class","Sprinter","V-Class"],MG:["3","4","5","Cyberster","Extender","HS","HS PHEV","HS Plus EV","MG4","MG4 XPower","RX5","RX8","ZS","ZS EV","ZST"],MINI:["Clubman","Convertible","Countryman","Coupe","Electric","Hardtop 2 Door","Hardtop 4 Door","Paceman","Roadster"],Mitsubishi:["ASX","ASX PHEV","Eclipse Cross","Eclipse Cross PHEV","Galant","L200","Lancer","Mirage","Mirage G4","Outlander","Outlander PHEV","Outlander Sport","Triton"],Nissan:["Altima","Ariya","Frontier","GT-R","Juke","Kicks","LEAF","Maxima","Murano","Navara","Pathfinder","Patrol","Qashqai","Rogue","Rogue Sport","Sentra","Titan","Titan XD","Versa","X-Trail","Z"],Peugeot:["108","208","308","408","508","2008","3008","5008","e-208","e-2008","e-308","Expert","Partner","Rifter"],Polestar:["Polestar 1","Polestar 2","Polestar 3","Polestar 4"],Porsche:["718 Boxster","718 Cayman","911","Cayenne","Macan","Panamera","Taycan"],Ram:["1500","2500","3500","ProMaster","ProMaster City"],Renault:["Arkana","Austral","Captur","Clio","Kangoo","Koleos","Mégane","Mégane E-Tech","Scenic E-Tech","Talisman","Triber","Zoe"],Rivian:["R1S","R1T"],"Rolls-Royce":["Cullinan","Dawn","Ghost","Phantom","Spectre","Wraith"],SEAT:["Arona","Ateca","Ibiza","Leon","Tarraco"],Škoda:["Enyaq iV","Fabia","Kamiq","Karoq","Kodiaq","Octavia","Scala","Superb"],"SsangYong / KGM":["Korando","Korando e-Motion","Musso","Rexton","Tivoli","Torres","Torres EVX"],Subaru:["Ascent","BRZ","Crosstrek","Forester","Impreza","Legacy","Outback","Solterra","WRX"],Suzuki:["Alto","Across","Baleno","Brezza","Celerio","Grand Vitara","Ignis","Jimny","S-Cross","Swift","Swift Sport","SX4","SX4 S-Cross","Vitara"],Tesla:["Cybertruck","Model 3","Model S","Model X","Model Y","Roadster"],Toyota:["4Runner","Avalon","Aygo","Aygo X","bZ4X","C-HR","Camry","Corolla","Corolla Cross","Crown","Fortuner","GR86","GR Corolla","GR Supra","HiAce","HiLux","Highlander","Kluger","Land Cruiser","Land Cruiser 70 Series","Land Cruiser 300","Mirai","Prado","Prius","Prius Prime","Prius v (V)","RAV4","RAV4 Prime","RAV4 Hybrid","Sequoia","Sienna","Supra","Tacoma","Tundra","Venza","Yaris","Yaris Cross"],Vauxhall:["Astra","Astra Sports Tourer","Combo","Corsa","Corsa-e","Crossland","Grandland","Mokka","Mokka-e","Vivaro"],Volkswagen:["Arteon","Atlas","Atlas Cross Sport","Golf","Golf GTI","Golf R","ID.3","ID.4","ID.5","ID.6","ID. Buzz","Jetta","Passat","Polo","Taigo","Taos","Tiguan","Touareg","T-Roc","Transporter"],Volvo:["C40 Recharge","EX30","EX40","EX90","S60","S90","V60","V90","XC40","XC40 Recharge","XC60","XC90"]},zD=Object.keys(rT).sort((n,e)=>n.localeCompare(e));function $D(n){return(rT[n]??[]).slice().sort((e,t)=>e.localeCompare(t))}const HD=()=>{const{user:n}=ri(),e=tr(),[t,i]=O.useState(""),[o,a]=O.useState(""),[c,d]=O.useState(""),[p,y]=O.useState(k_[0].name),[_,E]=O.useState([]),[T,k]=O.useState(""),[j,z]=O.useState(!1),[L,G]=O.useState(0);O.useEffect(()=>{n&&_m(n.uid).then(X=>{var ie;return G(((ie=X==null?void 0:X.vehicles)==null?void 0:ie.length)??0)})},[n]),O.useEffect(()=>{d(""),E(o?$D(o):[])},[o]);const ee=async X=>{if(X.preventDefault(),!!n){k(""),z(!0);try{const ie={id:`${n.uid}_${Date.now()}`,licensePlate:t,make:o,model:c,color:p};await FD(n.uid,ie),e("/profile")}catch(ie){k(ie instanceof Error?ie.message:"Failed to add vehicle")}finally{z(!1)}}};return L>=th?R.jsxs("div",{className:"page",children:[R.jsx("h1",{className:"page-title",children:"Add Vehicle"}),R.jsxs("p",{className:"error-text",children:["You have reached the maximum of ",th," vehicles."]}),R.jsx("button",{className:"btn-secondary",onClick:()=>e("/profile"),children:"Back to Profile"})]}):R.jsxs("div",{className:"page",children:[R.jsx("h1",{className:"page-title",children:"Add Vehicle"}),R.jsxs("form",{onSubmit:ee,children:[R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"plate",children:"License Plate"}),R.jsx("input",{id:"plate",type:"text",value:t,onChange:X=>i(X.target.value.toUpperCase()),placeholder:"ABC-1234",required:!0})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"make",children:"Make"}),R.jsxs("select",{id:"make",value:o,onChange:X=>a(X.target.value),required:!0,children:[R.jsx("option",{value:"",children:"Select make…"}),zD.map(X=>R.jsx("option",{value:X,children:X},X))]})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"model",children:"Model"}),R.jsxs("select",{id:"model",value:c,onChange:X=>d(X.target.value),required:!0,disabled:!o,children:[R.jsx("option",{value:"",children:"Select model…"}),_.map(X=>R.jsx("option",{value:X,children:X},X))]})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"color",children:"Color"}),R.jsx("select",{id:"color",value:p,onChange:X=>y(X.target.value),children:k_.map(X=>R.jsx("option",{value:X.name,children:X.name},X.name))})]}),T&&R.jsx("p",{className:"error-text",role:"alert",children:T}),R.jsx("button",{className:"btn-primary",type:"submit",disabled:j||!t||!o||!c,children:j?"Adding…":"Add Vehicle"})]})]})},qD=async(n,e,t,i,o)=>{if(o.length>ap)throw new Error(`Intro exceeds ${ap} characters`);await cm(qi(ut,"friendRequests"),{requesterId:n,requesterVehicleId:e,recipientUserId:t,recipientVehicleId:i,message:o,status:Dl.Pending,createdAt:hm()})},WD=async(n,e,t)=>{const i=$t(ut,"friendRequests",n),o=await ni(i);if(!o.exists())throw new Error("Friend request not found");const a=o.data(),c=e?Dl.Accepted:Dl.Declined;if(await Bs(i,{status:c}),e){const d={userId:a.requesterId,vehicleId:a.requesterVehicleId,nickname:null,since:new Date().toISOString()},p={userId:a.recipientUserId,vehicleId:a.recipientVehicleId,nickname:null,since:new Date().toISOString()};await Ds($t(ut,"users",a.recipientUserId,"friends",a.requesterId),d),await Ds($t(ut,"users",a.requesterId,"friends",a.recipientUserId),p)}},GD=(n,e)=>{const t=Pl(qi(ut,"friendRequests"),ea("recipientUserId","==",n),ea("status","==",Dl.Pending));return kl(t,i=>{const o=i.docs.map(a=>({id:a.id,...a.data()}));e(o)})},KD=async n=>(await R0(qi(ut,"users",n,"friends"))).docs.map(t=>t.data()),QD=async(n,e)=>(await ni($t(ut,"users",n,"friends",e))).exists(),XD={White:"f5f5f5",Black:"1a1a1a",Silver:"c0c0c0",Grey:"808080",Red:"cc0000",Blue:"1565c0",Green:"2d6a2d",Yellow:"ffd700",Orange:"ff6600",Brown:"7b3f00",Beige:"f5f0dc",Gold:"cfb53b"},YD={White:"#FFFFFF",Black:"#1A1A1A",Silver:"#C0C0C0",Grey:"#808080",Red:"#CC0000",Blue:"#0047AB",Green:"#2D6A2D",Yellow:"#FFD700",Orange:"#FF6600",Brown:"#7B3F00",Beige:"#F5F0DC",Gold:"#CFB53B"},x_=n=>n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),JD=(n,e,t)=>`https://cdn.imagin.studio/getimage?${new URLSearchParams({customer:"img",make:x_(n),modelFamily:x_(e),paintId:`colourpicker-${t}`,angle:"23",width:"400",zoomType:"fullscreen"}).toString()}`,ZD=({fill:n,stroke:e,width:t,height:i})=>R.jsxs("svg",{width:t,height:i,viewBox:"0 0 80 40",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[R.jsx("rect",{x:"4",y:"20",width:"72",height:"16",rx:"4",fill:n,stroke:e,strokeWidth:"1.5"}),R.jsx("path",{d:"M18 20 L24 8 L56 8 L62 20 Z",fill:n,stroke:e,strokeWidth:"1.5"}),R.jsx("path",{d:"M27 19 L30 9 L50 9 L53 19 Z",fill:"#AAD4F0",opacity:"0.7"}),R.jsx("path",{d:"M18 19 L23 9 L29 9 L24 19 Z",fill:"#AAD4F0",opacity:"0.5"}),R.jsx("circle",{cx:"60",cy:"36",r:"6",fill:"#333"}),R.jsx("circle",{cx:"60",cy:"36",r:"3",fill:"#999"}),R.jsx("circle",{cx:"22",cy:"36",r:"6",fill:"#333"}),R.jsx("circle",{cx:"22",cy:"36",r:"3",fill:"#999"}),R.jsx("rect",{x:"70",y:"24",width:"5",height:"4",rx:"1",fill:"#FFFAAA"}),R.jsx("rect",{x:"5",y:"24",width:"5",height:"4",rx:"1",fill:"#FF4444"})]}),iT=({color:n,make:e,model:t,size:i=80,className:o})=>{const[a,c]=O.useState(!1),[d,p]=O.useState(!1),y=XD[n]??"c0c0c0",_=YD[n]??n,E=n==="White"||n==="Beige"?"#888":"#222",T=i*2,k=i,j=e&&t&&!a;return R.jsxs("div",{className:o,style:{width:T,height:k,position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center"},"aria-label":`${n}${e?` ${e}`:""}${t?` ${t}`:""}`,role:"img",children:[j&&R.jsxs(R.Fragment,{children:[!d&&R.jsx("div",{style:{position:"absolute",inset:0,borderRadius:8,background:"linear-gradient(90deg, #e8e8e8 25%, #f4f4f4 50%, #e8e8e8 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.4s infinite"}}),R.jsx("img",{src:JD(e,t,y),alt:`${e} ${t} in ${n}`,onLoad:()=>p(!0),onError:()=>c(!0),style:{width:T,height:k,objectFit:"contain",borderRadius:8,opacity:d?1:0,transition:"opacity 0.3s ease"}})]}),!j&&R.jsx(ZD,{fill:_,stroke:E,width:T,height:k/1.2})]})},eb=()=>{var j;const{user:n}=ri(),e=tr(),[t,i]=O.useState(""),[o,a]=O.useState(void 0),[c,d]=O.useState(!1),[p,y]=O.useState(!1),[_,E]=O.useState(""),T=async z=>{if(z.preventDefault(),!!t.trim()){y(!0),E(""),a(void 0);try{const L=await jD(t.trim());if(a(L),L&&n){const G=await QD(n.uid,L.uid);d(G)}}catch{E("Search failed. Please try again.")}finally{y(!1)}}},k=(j=o==null?void 0:o.vehicles)==null?void 0:j.find(z=>z.licensePlate===t.toUpperCase().replace(/\s/g,""));return R.jsxs("div",{className:"page",children:[R.jsx("h1",{className:"page-title",children:"Search by Plate"}),R.jsxs("form",{onSubmit:T,children:[R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"search-plate",children:"License Plate"}),R.jsx("input",{id:"search-plate",type:"text",value:t,onChange:z=>i(z.target.value.toUpperCase()),placeholder:"ABC-1234",autoCapitalize:"characters","data-testid":"search-input"})]}),R.jsx("button",{className:"btn-primary",type:"submit",disabled:p||!t.trim(),"data-testid":"search-btn",children:p?"Searching...":"Search"})]}),_&&R.jsx("p",{className:"error-text",role:"alert",children:_}),o===null&&R.jsx("div",{className:"search-empty card","data-testid":"search-empty",children:R.jsxs("p",{children:["No vehicle found for plate ",R.jsx("strong",{children:t}),"."]})}),o&&k&&R.jsxs("div",{className:"card search-result","data-testid":"search-result",children:[R.jsx(iT,{color:k.color,size:100}),R.jsxs("div",{className:"search-result-info",children:[R.jsx("p",{className:"search-plate","data-testid":"search-plate-text",children:k.licensePlate}),R.jsxs("p",{className:"search-vehicle","data-testid":"search-vehicle-text",children:[k.make," ",k.model]}),R.jsx("p",{className:"search-color",children:k.color})]}),R.jsxs("div",{className:"search-actions",children:[R.jsx("button",{className:"btn-primary","data-testid":"search-send-btn",onClick:()=>e(`/compose?recipientId=${o.uid}&vehicleId=${k.id}&plate=${k.licensePlate}&isFriend=${c}`),children:"Send Message"}),!c&&R.jsx("button",{className:"btn-secondary","data-testid":"search-friend-btn",onClick:()=>e(`/compose?recipientId=${o.uid}&vehicleId=${k.id}&plate=${k.licensePlate}&friendRequest=true`),children:"Add as Friend"})]})]})]})};function tb(n,e){return[n,e].sort().join("_")}const nb=new Set(["fuck","shit","cunt","nigger","nigga","faggot","fag","bitch","ass","asshole","bastard","cock","dick","pussy","slut","whore","twat","wanker","bollocks","motherfucker","mf","stfu","wtf"]);function rb(n){const e=n.toLowerCase();return Array.from(nb).some(t=>new RegExp(`\\b${t}\\b`,"i").test(e))}const ib=async(n,e,t,i,o,a)=>{const c=a.isFriendMessage??!1,d=c?nT:tT;if(a.content.length>d)throw new Error(`Message exceeds ${d} characters`);if(rb(a.content))throw new Error("Message contains inappropriate language");c||await sb(n,e);const p=tb(e,o),y=$e.fromDate(new Date(Date.now()+LD*24*60*60*1e3));await cm(qi(ut,"messages"),{senderId:n,senderVehicleId:e,senderVehicleDisplay:t,recipientUserId:i,recipientVehicleId:o,threadId:p,content:a.content,isFriendMessage:c,isAnonymous:a.isAnonymous,isRead:!1,timestamp:hm(),expiresAt:y}),c||await ob(n,e)},sb=async(n,e)=>{const t=new Date().toISOString().split("T")[0],i=$t(ut,"messageCounts",`${n}_${e}_${t}`),o=await ni(i);if(o.exists()&&(o.data().count??0)>=N_)throw new Error(`Daily anonymous message limit of ${N_} reached`)},ob=async(n,e)=>{const t=new Date().toISOString().split("T")[0],i=$t(ut,"messageCounts",`${n}_${e}_${t}`),o=await ni(i);o.exists()?await Bs(i,{count:(o.data().count??0)+1}):await Ds(i,{userId:n,vehicleId:e,date:t,count:1})},ab=(n,e)=>{const t=Pl(qi(ut,"messages"),ea("recipientUserId","==",n));return kl(t,i=>{const o=new Date,a=i.docs.map(c=>({id:c.id,...c.data()})).filter(c=>!c.expiresAt||c.expiresAt.toDate()>o).sort((c,d)=>{var _,E,T,k,j,z;const p=((T=(E=(_=c.timestamp)==null?void 0:_.toDate)==null?void 0:E.call(_))==null?void 0:T.getTime())??0;return(((z=(j=(k=d.timestamp)==null?void 0:k.toDate)==null?void 0:j.call(k))==null?void 0:z.getTime())??0)-p});e(a)})},lb=(n,e,t)=>{let i=[],o=[];const a=()=>{const p=[...i,...o].sort((y,_)=>{var k,j,z,L,G,ee;const E=((z=(j=(k=y.timestamp)==null?void 0:k.toDate)==null?void 0:j.call(k))==null?void 0:z.getTime())??0,T=((ee=(G=(L=_.timestamp)==null?void 0:L.toDate)==null?void 0:G.call(L))==null?void 0:ee.getTime())??0;return E-T});t(p)},c=kl(Pl(qi(ut,"messages"),ea("recipientUserId","==",e)),p=>{i=p.docs.map(y=>({id:y.id,...y.data()})).filter(y=>y.threadId===n),a()}),d=kl(Pl(qi(ut,"messages"),ea("senderId","==",e)),p=>{o=p.docs.map(y=>({id:y.id,...y.data()})).filter(y=>y.threadId===n),a()});return()=>{c(),d()}},sT=async n=>{await Bs($t(ut,"messages",n),{isRead:!0})},ub=n=>{const[e,t]=O.useState([]),[i,o]=O.useState(!0);return O.useEffect(()=>{if(!n){o(!1);return}return o(!0),ab(n,d=>{t(d),o(!1)})},[n]),{messages:e,loading:i,markAsRead:async c=>{await sT(c)}}},cb=({msg:n})=>{var e;return R.jsxs(Ol,{to:`/thread/${n.threadId}`,className:`card message-row ${n.isRead?"":"unread"}`,"data-testid":"message-row",children:[R.jsxs("div",{className:"message-row-header",children:[R.jsx("span",{className:"message-plate",children:n.isAnonymous?"Anonymous":n.senderVehicleDisplay||n.senderVehicleId}),R.jsxs("div",{className:"message-row-meta",children:[n.isFriendMessage&&R.jsx("span",{className:"badge-friend",children:"Friend"}),n.isAnonymous&&R.jsx("span",{className:"badge-anon",children:"Anon"}),R.jsx("span",{className:"message-time",children:(e=n.timestamp)!=null&&e.toDate?new Date(n.timestamp.toDate()).toLocaleDateString():""})]})]}),R.jsxs("p",{className:"message-preview",children:[n.content.slice(0,80),n.content.length>80?"…":""]}),!n.isRead&&R.jsx("span",{className:"unread-dot","aria-label":"Unread"})]})},hb=()=>{const{user:n}=ri(),{messages:e,loading:t}=ub((n==null?void 0:n.uid)??null),[i,o]=O.useState("all"),a=e.filter(d=>i==="anonymous"?d.isAnonymous:i==="friends"?d.isFriendMessage:!0),c=e.filter(d=>!d.isRead).length;return t?R.jsx("div",{className:"loading-screen",children:"Loading inbox..."}):R.jsxs("div",{className:"page",children:[R.jsx("div",{className:"page-header",children:R.jsxs("h1",{className:"page-title",children:["Inbox ",c>0&&R.jsx("span",{className:"badge-count",children:c})]})}),R.jsx("div",{className:"filter-tabs",role:"tablist","aria-label":"Inbox filter",children:["all","anonymous","friends"].map(d=>R.jsx("button",{role:"tab","aria-selected":i===d,className:`filter-tab ${i===d?"active":""}`,onClick:()=>o(d),"data-testid":`tab-${d}`,children:d.charAt(0).toUpperCase()+d.slice(1)},d))}),a.length===0?R.jsxs("div",{className:"card empty-state",children:[R.jsxs("p",{children:["No ",i==="all"?"":i+" ","messages yet."]}),i==="all"&&R.jsx("p",{className:"empty-hint",children:"Search a licence plate to start a conversation."})]}):R.jsx("div",{className:"message-list",children:a.map(d=>R.jsx(cb,{msg:d},d.id))})]})},db=()=>{const{threadId:n}=rS(),{user:e}=ri(),t=tr(),[i,o]=O.useState([]),a=O.useRef(null),c=i.find(T=>T.senderId!==(e==null?void 0:e.uid)),d=(c==null?void 0:c.senderId)??"",p=(c==null?void 0:c.senderVehicleId)??"",y=(c==null?void 0:c.senderVehicleDisplay)??(c==null?void 0:c.senderVehicleId)??"",_=i.some(T=>T.isFriendMessage);O.useEffect(()=>!n||!(e!=null&&e.uid)?void 0:lb(n,e.uid,k=>{o(k),k.filter(j=>!j.isRead&&j.recipientUserId===(e==null?void 0:e.uid)).forEach(j=>sT(j.id))}),[n,e==null?void 0:e.uid]),O.useEffect(()=>{var T;(T=a.current)==null||T.scrollIntoView({behavior:"smooth"})},[i]);const E=()=>{const T=new URLSearchParams({recipientId:d,vehicleId:p,plate:y,..._?{isFriend:"true"}:{}});t(`/compose?${T.toString()}`)};return R.jsxs("div",{className:"thread-page",children:[R.jsxs("div",{className:"thread-header",children:[R.jsx("button",{className:"btn-back",onClick:()=>t("/inbox"),"aria-label":"Back to inbox",children:"←"}),R.jsx("span",{className:"thread-title",children:y||"Thread"})]}),R.jsxs("div",{className:"thread-messages",children:[i.map(T=>{var k;return R.jsxs("div",{className:`bubble ${T.senderId===(e==null?void 0:e.uid)?"bubble-mine":"bubble-theirs"}`,"data-testid":T.senderId===(e==null?void 0:e.uid)?"bubble-mine":"bubble-theirs",children:[!T.isAnonymous&&T.senderId!==(e==null?void 0:e.uid)&&R.jsx("span",{className:"bubble-vehicle",children:T.senderVehicleDisplay}),R.jsx("p",{className:"bubble-content",children:T.content}),R.jsx("span",{className:"bubble-time",children:(k=T.timestamp)!=null&&k.toDate?new Date(T.timestamp.toDate()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""})]},T.id)}),R.jsx("div",{ref:a})]}),c&&R.jsx("div",{className:"thread-footer",children:R.jsx("button",{className:"btn-primary",onClick:E,"data-testid":"reply-btn",children:"Reply"})})]})},fb=()=>{const{user:n}=ri(),e=tr(),[t]=KS(),i=t.get("recipientId")??"",o=t.get("vehicleId")??"",a=t.get("plate")??"",c=t.get("isFriend")==="true",d=t.get("friendRequest")==="true",[p,y]=O.useState(""),[_,E]=O.useState(!c),[T,k]=O.useState(null),[j,z]=O.useState(""),[L,G]=O.useState(!1),ee=d?ap:c?nT:tT;O.useEffect(()=>{n&&_m(n.uid).then(ie=>{var ve;(ve=ie==null?void 0:ie.vehicles)!=null&&ve.length&&k(ie.vehicles[0])})},[n]);const X=async ie=>{if(ie.preventDefault(),!(!n||!T)){z(""),G(!0);try{const ve=`${T.make} ${T.model} (${T.color})`;if(d)await qD(n.uid,T.id,i,o,p);else{const _e={content:p,isFriendMessage:c,isAnonymous:_};await ib(n.uid,T.id,ve,i,o,_e)}e("/inbox")}catch(ve){z(ve instanceof Error?ve.message:"Failed to send")}finally{G(!1)}}};return R.jsxs("div",{className:"page",children:[R.jsx("h1",{className:"page-title",children:d?"Friend Request":`Message to ${a}`}),!T&&R.jsxs("div",{className:"card empty-state",children:[R.jsx("p",{children:"You need to add a vehicle before messaging."}),R.jsx("a",{className:"btn-secondary",href:"/car-talk-web/add-vehicle",children:"Add Vehicle"})]}),R.jsxs("form",{onSubmit:X,children:[R.jsxs("div",{className:"form-group",children:[R.jsxs("label",{htmlFor:"content",children:[d?"Intro message":"Message"," (",p.length,"/",ee,")"]}),R.jsx("textarea",{id:"content",rows:4,value:p,onChange:ie=>y(ie.target.value.slice(0,ee)),placeholder:d?"Hi, we share the highway... (100 chars)":_?"Say something... (anonymous - recipient cannot see your identity)":"Say something... (recipient can see your vehicle make/model)"})]}),!d&&!c&&R.jsxs("div",{className:"form-group checkbox-group",children:[R.jsxs("label",{className:"checkbox-label","data-testid":"anon-toggle",children:[R.jsx("input",{type:"checkbox",checked:_,onChange:ie=>E(ie.target.checked),"data-testid":"anon-checkbox"}),R.jsx("span",{className:"checkbox-text",children:"Send anonymously"})]}),R.jsx("p",{className:"checkbox-hint",children:_?"Recipient cannot see your vehicle or identity":"Recipient can see your vehicle: "+(T?`${T.make} ${T.model}`:"")})]}),j&&R.jsx("p",{className:"error-text",role:"alert",children:j}),R.jsx("button",{className:"btn-primary",type:"submit",disabled:L||!p.trim()||!T,"data-testid":"send-btn",children:L?"Sending...":d?"Send Friend Request":"Send Message"})]})]})},pb=()=>{var y;const{user:n}=ri(),e=tr(),[t,i]=O.useState(null),[o,a]=O.useState(!0),c=async()=>{if(!n)return;a(!0);const _=await _m(n.uid);i(_),a(!1)};O.useEffect(()=>{c()},[n]);const d=async _=>{n&&confirm(`Remove ${_.licensePlate}?`)&&(await UD(n.uid,_),await c())},p=async()=>{await kD(),e("/login")};return o?R.jsx("div",{className:"loading-screen",children:"Loading…"}):R.jsxs("div",{className:"page",children:[R.jsx("h1",{className:"page-title",children:"Profile"}),R.jsxs("div",{className:"card profile-header",children:[R.jsx("p",{className:"profile-name",children:(t==null?void 0:t.displayName)??(n==null?void 0:n.email)}),R.jsx("p",{className:"profile-email",children:n==null?void 0:n.email})]}),R.jsx("h2",{className:"section-title",children:"My Vehicles"}),((t==null?void 0:t.vehicles)??[]).map(_=>R.jsxs("div",{className:"card vehicle-card",children:[R.jsx(iT,{color:_.color,make:_.make,model:_.model,size:80}),R.jsxs("div",{className:"vehicle-info",children:[R.jsx("p",{className:"vehicle-plate",children:_.licensePlate}),R.jsxs("p",{className:"vehicle-detail",children:[_.make," ",_.model," · ",_.color]})]}),R.jsx("button",{className:"btn-danger",onClick:()=>d(_),children:"Remove"})]},_.id)),(((y=t==null?void 0:t.vehicles)==null?void 0:y.length)??0)<3&&R.jsx("button",{className:"btn-secondary",onClick:()=>e("/add-vehicle"),children:"+ Add Vehicle"}),R.jsx("button",{className:"btn-secondary",style:{marginTop:16},onClick:()=>e("/friend-requests"),children:"Friend Requests"}),R.jsx("button",{className:"btn-secondary",style:{marginTop:8},onClick:p,children:"Sign Out"})]})},mb=n=>{const[e,t]=O.useState([]),[i,o]=O.useState([]),[a,c]=O.useState(!0);return O.useEffect(()=>{if(!n){c(!1);return}let d=!0;KD(n).then(y=>{d&&t(y)});const p=GD(n,y=>{d&&(o(y),c(!1))});return c(!1),()=>{d=!1,p()}},[n]),{friends:e,requests:i,loading:a}},gb=({req:n,onRespond:e})=>{const[t,i]=up.useState(!1),o=async a=>{i(!0),await WD(n.id,a,n.recipientUserId),e(),i(!1)};return R.jsxs("div",{className:"card friend-request-card",children:[R.jsxs("p",{className:"fr-plate",children:["From vehicle: ",n.requesterVehicleId]}),n.message&&R.jsxs("p",{className:"fr-intro",children:['"',n.message,'"']}),R.jsxs("div",{className:"fr-actions",children:[R.jsx("button",{className:"btn-primary",onClick:()=>o(!0),disabled:t,children:"Accept"}),R.jsx("button",{className:"btn-secondary",onClick:()=>o(!1),disabled:t,children:"Decline"})]})]})},yb=({friend:n})=>{const e=tr(),t=n.vehicleDisplay||n.vehicleId,i=()=>{const o=new URLSearchParams({recipientId:n.userId,vehicleId:n.vehicleId,plate:t,isFriend:"true"});e(`/compose?${o.toString()}`)};return R.jsxs("div",{className:"card friend-card",children:[R.jsxs("div",{className:"friend-card-info",children:[R.jsx("p",{className:"friend-vehicle",children:t}),n.nickname&&R.jsx("p",{className:"friend-nickname",children:n.nickname})]}),R.jsx("div",{className:"friend-actions",children:R.jsx("button",{className:"btn-primary",onClick:i,children:"Message"})})]})},vb=()=>{const{user:n}=ri(),{requests:e,friends:t,loading:i}=mb((n==null?void 0:n.uid)??null),[,o]=up.useReducer(a=>a+1,0);return i?R.jsx("div",{className:"loading-screen",children:"Loading…"}):R.jsxs("div",{className:"page",children:[R.jsx("h1",{className:"page-title",children:"Friends"}),R.jsxs("h2",{className:"section-title",children:["Pending Requests (",e.length,")"]}),e.length===0&&R.jsx("p",{className:"empty-state-text",children:"No pending requests."}),e.map(a=>R.jsx(gb,{req:a,onRespond:o},a.id)),R.jsxs("h2",{className:"section-title",style:{marginTop:24},children:["My Friends (",t.length,")"]}),t.length===0&&R.jsx("p",{className:"empty-state-text",children:'No friends yet. Search a plate and tap "Add as Friend".'}),t.map(a=>R.jsx(yb,{friend:a},a.userId))]})},_b=()=>R.jsxs("div",{className:"app-shell",children:[R.jsx("main",{className:"app-content",children:R.jsx(yS,{})}),R.jsxs("nav",{className:"bottom-nav","aria-label":"Main navigation",children:[R.jsxs(al,{to:"/search",className:({isActive:n})=>n?"nav-item active":"nav-item",children:[R.jsx("span",{className:"nav-icon",children:"🔍"}),R.jsx("span",{className:"nav-label",children:"Search"})]}),R.jsxs(al,{to:"/inbox",className:({isActive:n})=>n?"nav-item active":"nav-item",children:[R.jsx("span",{className:"nav-icon",children:"💬"}),R.jsx("span",{className:"nav-label",children:"Inbox"})]}),R.jsxs(al,{to:"/friends",className:({isActive:n})=>n?"nav-item active":"nav-item",children:[R.jsx("span",{className:"nav-icon",children:"👥"}),R.jsx("span",{className:"nav-label",children:"Friends"})]}),R.jsxs(al,{to:"/profile",className:({isActive:n})=>n?"nav-item active":"nav-item",children:[R.jsx("span",{className:"nav-icon",children:"🚗"}),R.jsx("span",{className:"nav-label",children:"Profile"})]})]})]}),Ec=({children:n})=>{const{user:e,loading:t}=ri();return t?R.jsx("div",{className:"loading-screen",children:"Loading…"}):e?R.jsx(R.Fragment,{children:n}):R.jsx(Oo,{to:"/login",replace:!0})};function wb(){const{user:n,loading:e}=ri();return e?R.jsx("div",{className:"loading-screen",children:"Loading…"}):R.jsxs(_S,{children:[R.jsx(sn,{path:"/login",element:n?R.jsx(Oo,{to:"/search",replace:!0}):R.jsx(DD,{})}),R.jsx(sn,{path:"/signup",element:n?R.jsx(Oo,{to:"/add-vehicle",replace:!0}):R.jsx(BD,{})}),R.jsxs(sn,{element:R.jsx(Ec,{children:R.jsx(_b,{})}),children:[R.jsx(sn,{path:"/search",element:R.jsx(eb,{})}),R.jsx(sn,{path:"/inbox",element:R.jsx(hb,{})}),R.jsx(sn,{path:"/friends",element:R.jsx(vb,{})}),R.jsx(sn,{path:"/profile",element:R.jsx(pb,{})})]}),R.jsx(sn,{path:"/add-vehicle",element:R.jsx(Ec,{children:R.jsx(HD,{})})}),R.jsx(sn,{path:"/thread/:threadId",element:R.jsx(Ec,{children:R.jsx(db,{})})}),R.jsx(sn,{path:"/compose",element:R.jsx(Ec,{children:R.jsx(fb,{})})}),R.jsx(sn,{path:"/friend-requests",element:R.jsx(Oo,{to:"/friends",replace:!0})}),R.jsx(sn,{path:"/",element:R.jsx(Oo,{to:n?"/search":"/login",replace:!0})}),R.jsx(sn,{path:"*",element:R.jsx(Oo,{to:n?"/search":"/login",replace:!0})})]})}function Eb(){return R.jsx(HS,{basename:"/car-talk-web",children:R.jsx(xD,{children:R.jsx(wb,{})})})}vI.createRoot(document.getElementById("root")).render(R.jsx(up.StrictMode,{children:R.jsx(Eb,{})}));
