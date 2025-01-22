"use client";
import e from"react";import{AnimatePresence as r,motion as t}from"framer-motion";function n(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}"function"==typeof SuppressedError&&SuppressedError;var o,a={exports:{}},i={};var l,c={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?a.exports=function(){if(o)return i;o=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(r,t,n){var o=null;if(void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),"key"in t)for(var a in n={},t)"key"!==a&&(n[a]=t[a]);else n=t;return t=n.ref,{$$typeof:e,type:r,key:o,ref:void 0!==t?t:null,props:n}}return i.Fragment=r,i.jsx=t,i.jsxs=t,i}():a.exports=(l||(l=1,"production"!==process.env.NODE_ENV&&function(){function r(e){if(null==e)return null;if("function"==typeof e)return e.$$typeof===A?null:e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case x:return"Fragment";case O:return"Portal";case C:return"Profiler";case _:return"StrictMode";case E:return"Suspense";case P:return"SuspenseList"}if("object"==typeof e)switch("number"==typeof e.tag&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case R:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case D:return null!==(t=e.displayName||null)?t:r(e.type)||"Memo";case T:t=e._payload,e=e._init;try{return r(e(t))}catch(e){}}return null}function t(e){return""+e}function n(e){try{t(e);var r=!1}catch(e){r=!0}if(r){var n=(r=console).error,o="function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",o),t(e)}}function o(){}function a(e){if(void 0===J)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);J=r&&r[1]||"",X=-1<e.stack.indexOf("\n    at")?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+J+e+X}function i(e,r){if(!e||V)return"";var t,n=Y.get(e);if(void 0!==n)return n;V=!0,n=Error.prepareStackTrace,Error.prepareStackTrace=void 0,t=z.H,z.H=null,function(){if(0===H){m=console.log,b=console.info,v=console.warn,g=console.error,h=console.group,j=console.groupCollapsed,k=console.groupEnd;var e={configurable:!0,enumerable:!0,value:o,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}H++}();try{var i={DetermineComponentFrameRoot:function(){try{if(r){var t=function(){throw Error()};if(Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var n=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){n=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){n=e}(t=e())&&"function"==typeof t.catch&&t.catch((function(){}))}}catch(e){if(e&&n&&"string"==typeof e.stack)return[e.stack,n.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),s=c[0],f=c[1];if(s&&f){var u=s.split("\n"),p=f.split("\n");for(c=l=0;l<u.length&&!u[l].includes("DetermineComponentFrameRoot");)l++;for(;c<p.length&&!p[c].includes("DetermineComponentFrameRoot");)c++;if(l===u.length||c===p.length)for(l=u.length-1,c=p.length-1;1<=l&&0<=c&&u[l]!==p[c];)c--;for(;1<=l&&0<=c;l--,c--)if(u[l]!==p[c]){if(1!==l||1!==c)do{if(l--,0>--c||u[l]!==p[c]){var y="\n"+u[l].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),"function"==typeof e&&Y.set(e,y),y}}while(1<=l&&0<=c);break}}}finally{V=!1,z.H=t,function(){if(0==--H){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:U({},e,{value:m}),info:U({},e,{value:b}),warn:U({},e,{value:v}),error:U({},e,{value:g}),group:U({},e,{value:h}),groupCollapsed:U({},e,{value:j}),groupEnd:U({},e,{value:k})})}0>H&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=n}return u=(u=e?e.displayName||e.name:"")?a(u):"","function"==typeof e&&Y.set(e,u),u}function l(e){if(null==e)return"";if("function"==typeof e){var r=e.prototype;return i(e,!(!r||!r.isReactComponent))}if("string"==typeof e)return a(e);switch(e){case E:return a("Suspense");case P:return a("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case $:return i(e.render,!1);case D:return l(e.type);case T:r=e._payload,e=e._init;try{return l(e(r))}catch(e){}}return""}function s(){var e=z.A;return null===e?null:e.getOwner()}function f(){var e=r(this.type);return B[e]||(B[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),void 0!==(e=this.props.ref)?e:null}function u(e,t,o,a,i,l){if("string"==typeof e||"function"==typeof e||e===x||e===C||e===_||e===E||e===P||e===F||"object"==typeof e&&null!==e&&(e.$$typeof===T||e.$$typeof===D||e.$$typeof===R||e.$$typeof===N||e.$$typeof===$||e.$$typeof===L||void 0!==e.getModuleId)){var c=t.children;if(void 0!==c)if(a)if(W(c)){for(a=0;a<c.length;a++)p(c[a],e);Object.freeze&&Object.freeze(c)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else p(c,e)}else c="",(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(c+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),null===e?a="null":W(e)?a="array":void 0!==e&&e.$$typeof===S?(a="<"+(r(e.type)||"Unknown")+" />",c=" Did you accidentally export a JSX literal instead of a component?"):a=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",a,c);if(M.call(t,"key")){c=r(e);var u=Object.keys(t).filter((function(e){return"key"!==e}));a=0<u.length?"{key: someKey, "+u.join(": ..., ")+": ...}":"{key: someKey}",G[c+a]||(u=0<u.length?"{"+u.join(": ..., ")+": ...}":"{}",console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',a,c,u,c),G[c+a]=!0)}if(c=null,void 0!==o&&(n(o),c=""+o),function(e){if(M.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(t)&&(n(t.key),c=""+t.key),"key"in t)for(var y in o={},t)"key"!==y&&(o[y]=t[y]);else o=t;return c&&function(e,r){function t(){K||(K=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(o,"function"==typeof e?e.displayName||e.name||"Unknown":e),function(e,r,t,n,o,a){return t=a.ref,e={$$typeof:S,type:e,key:r,props:a,_owner:o},null!==(void 0!==t?t:null)?Object.defineProperty(e,"ref",{enumerable:!1,get:f}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}(e,c,l,0,s(),o)}function p(e,r){if("object"==typeof e&&e&&e.$$typeof!==q)if(W(e))for(var t=0;t<e.length;t++){var n=e[t];y(n)&&d(n,r)}else if(y(e))e._store&&(e._store.validated=1);else if("function"==typeof(t=null===e||"object"!=typeof e?null:"function"==typeof(t=I&&e[I]||e["@@iterator"])?t:null)&&t!==e.entries&&(t=t.call(e))!==e)for(;!(e=t.next()).done;)y(e.value)&&d(e.value,r)}function y(e){return"object"==typeof e&&null!==e&&e.$$typeof===S}function d(e,t){if(e._store&&!e._store.validated&&null==e.key&&(e._store.validated=1,t=function(e){var t="",n=s();return n&&(n=r(n.type))&&(t="\n\nCheck the render method of `"+n+"`."),t||(e=r(e))&&(t="\n\nCheck the top-level render call using <"+e+">."),t}(t),!Q[t])){Q[t]=!0;var n="";e&&null!=e._owner&&e._owner!==s()&&(n=null,"number"==typeof e._owner.tag?n=r(e._owner.type):"string"==typeof e._owner.name&&(n=e._owner.name),n=" It was passed a child from "+n+".");var o=z.getCurrentStack;z.getCurrentStack=function(){var r=l(e.type);return o&&(r+=o()||""),r},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,n),z.getCurrentStack=o}}var m,b,v,g,h,j,k,w=e,S=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),R=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),F=Symbol.for("react.offscreen"),I=Symbol.iterator,A=Symbol.for("react.client.reference"),z=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=Object.prototype.hasOwnProperty,U=Object.assign,L=Symbol.for("react.client.reference"),W=Array.isArray,H=0;o.__reactDisabledLog=!0;var J,X,K,V=!1,Y=new("function"==typeof WeakMap?WeakMap:Map),q=Symbol.for("react.client.reference"),B={},G={},Q={};c.Fragment=x,c.jsx=function(e,r,t,n,o){return u(e,r,t,!1,0,o)},c.jsxs=function(e,r,t,n,o){return u(e,r,t,!0,0,o)}}()),c);var s=a.exports;function f(e){var r,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(r=0;r<o;r++)e[r]&&(t=f(e[r]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function u(){for(var e,r,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(r=f(e))&&(n&&(n+=" "),n+=r);return n}const p=e.createContext(null);function y(r){const[t,n]=e.useState(!1),o=e.useId(),a=t?"open":"closed";return s.jsx(p.Provider,{value:{collapsed:t,state:a,collapse:function(){n((e=>!e))},collapseId:`collapse${o}`},children:r.children})}function d(){const r=e.useContext(p);if(!r)throw new Error("useCollapseContext must be used within the CollapseProvider component.");return r}function m(e){const{children:r,className:t}=e,o=n(e,["children","className"]);return s.jsx(y,{children:s.jsx("div",Object.assign({className:u("flex flex-col",t)},o,{children:r}))})}function b(e){const{children:r,className:t,onClick:o}=e,a=n(e,["children","className","onClick"]),{collapse:i,collapseId:l,collapsed:c,state:f}=d();return s.jsx("button",Object.assign({"aria-controls":l,"aria-expanded":c,"data-state":f,type:"button",onClick:function(e){i(),null==o||o(e)},className:u("w-full flex items-center",t)},a,{children:"function"==typeof r?r({state:f}):r}))}function v(e){const{children:o,className:a}=e,i=n(e,["children","className"]),{collapsed:l,collapseId:c}=d();return s.jsx(r,{children:l&&s.jsx(t.div,{initial:{opacity:0},exit:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:s.jsx("div",Object.assign({id:c,"data-state":l?"open":"closed",className:u(a)},i,{children:o}))})})}export{m as Collapse,v as CollapseContent,b as CollapseTrigger};
//# sourceMappingURL=index.mjs.map
