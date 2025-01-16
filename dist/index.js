import{AnimatePresence as e,motion as t}from"framer-motion";import a,{useId as n}from"react";function r(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}function l(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=l(e[t]))&&(n&&(n+=" "),n+=a)}else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}function i(){for(var e,t,a=0,n="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=l(e))&&(n&&(n+=" "),n+=t);return n}"function"==typeof SuppressedError&&SuppressedError;const s=a.createContext(null);function o(e){var{children:t,className:l}=e,o=r(e,["children","className"]);const c=n(),d=`indicated-tab${c}`,m=`active-tab${c}`;return a.createElement(s.Provider,{value:{activeIndicatorId:d,activePillId:m}},a.createElement("div",Object.assign({role:"tablist","data-orientation":o["aria-orientation"],className:i("flex","vertical"===o["aria-orientation"]?"flex-col":"items-center",l)},o),t))}function c(n){const{activePillId:l,activeIndicatorId:o}=function(){const e=a.useContext(s);if(!e)throw new Error("useTabsContext cannot be used outside of the TabsProvider");return e}(),{children:c,isPillActive:d,className:m,isIndicatorActive:u}=n,p=r(n,["children","isPillActive","className","isIndicatorActive"]),f=d?"pill":u?"indicator":null;return a.createElement("button",Object.assign({role:"tab","data-active":f,className:i("relative flex items-center justify-center transition",m)},p),a.createElement(e,null,d&&a.createElement(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},layoutId:l,"data-active-pill":"",className:"absolute inset-0",transition:{type:"spring",bounce:.2,duration:.5}})),a.createElement("span",{className:"relative z-[1]"},c),a.createElement(e,null,u&&a.createElement(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},layoutId:o,"data-active-indicator":"",className:"absolute",transition:{type:"spring",bounce:.2,duration:.5}})))}const d=a.createContext(null);function m(e){const[t,n]=a.useState(!1),r=a.useId(),l=t?"open":"closed";return a.createElement(d.Provider,{value:{collapsed:t,state:l,collapse:function(){n((e=>!e))},collapseId:`collapse${r}`}},e.children)}function u(){const e=a.useContext(d);if(!e)throw new Error("useCollapseContext must be used within the CollapseProvider component.");return e}function p(e){const{children:t,className:n}=e,l=r(e,["children","className"]);return a.createElement(m,null,a.createElement("div",Object.assign({className:i("flex flex-col",n)},l),t))}function f(e){const{children:t,className:n,onClick:l}=e,s=r(e,["children","className","onClick"]),{collapse:o,collapseId:c,collapsed:d,state:m}=u();return a.createElement("button",Object.assign({"aria-controls":c,"aria-expanded":d,"data-state":m,type:"button",onClick:function(e){o(),null==l||l(e)},className:i("w-full flex items-center",n)},s),"function"==typeof t?t({state:m}):t)}function y(n){const{children:l,className:s}=n,o=r(n,["children","className"]),{collapsed:c,collapseId:d}=u();return a.createElement(e,null,c&&a.createElement(t.div,{initial:{opacity:0},exit:{opacity:0},animate:{opacity:1},transition:{duration:.3}},a.createElement("div",Object.assign({id:d,"data-state":c?"open":"closed",className:i(s)},o),l)))}function b({size:e=20}){return a.createElement("div",{"aria-hidden":!0,className:i("relative"),style:{width:e,height:e}},a.createElement("div",{className:"size-full absolute top-1/2 left-1/2"},a.createElement("div",{className:"h-[8%] w-[24%] absolute -left-[10%] -top-[3.9%] rounded-md bg-gray-700 animate-spinner",style:{transform:"rotate(0.0001deg) translate(146%)",animationDelay:"-1.2s"}}),a.createElement("div",{className:"h-[8%] w-[24%] absolute -left-[10%] -top-[3.9%] rounded-md bg-gray-700 animate-spinner",style:{transform:"rotate(30deg) translate(146%)",animationDelay:"-.1.1s"}}),a.createElement("div",{className:"h-[8%] w-[24%] absolute -left-[10%] -top-[3.9%] rounded-md bg-gray-700 animate-spinner",style:{transform:"rotate(60deg) translate(146%)",animationDelay:"-1s"}}),a.createElement("div",{className:"h-[8%] w-[24%] absolute -left-[10%] -top-[3.9%] rounded-md bg-gray-700 animate-spinner",style:{transform:"rotate(90deg) translate(146%)",animationDelay:"-.9s"}}),a.createElement("div",{className:"h-[8%] w-[24%] absolute -left-[10%] -top-[3.9%] rounded-md bg-gray-700 animate-spinner",style:{transform:"rotate(120deg) translate(146%)",animationDelay:"-.8s"}}),a.createElement("div",{className:"h-[8%] w-[24%] absolute -left-[10%] -top-[3.9%] rounded-md bg-gray-700 animate-spinner",style:{transform:"rotate(150deg) translate(146%)",animationDelay:"-.7s"}}),a.createElement("div",{className:"h-[8%] w-[24%] absolute -left-[10%] -top-[3.9%] rounded-md bg-gray-700 animate-spinner",style:{transform:"rotate(180deg) translate(146%)",animationDelay:"-.6s"}}),a.createElement("div",{className:"h-[8%] w-[24%] absolute -left-[10%] -top-[3.9%] rounded-md bg-gray-700 animate-spinner",style:{transform:"rotate(210deg) translate(146%)",animationDelay:"-.5s"}}),a.createElement("div",{className:"h-[8%] w-[24%] absolute -left-[10%] -top-[3.9%] rounded-md bg-gray-700 animate-spinner",style:{transform:"rotate(240deg) translate(146%)",animationDelay:"-.4s"}}),a.createElement("div",{className:"h-[8%] w-[24%] absolute -left-[10%] -top-[3.9%] rounded-md bg-gray-700 animate-spinner",style:{transform:"rotate(270deg) translate(146%)",animationDelay:"-.3s"}}),a.createElement("div",{className:"h-[8%] w-[24%] absolute -left-[10%] -top-[3.9%] rounded-md bg-gray-700 animate-spinner",style:{transform:"rotate(300deg) translate(146%)",animationDelay:"-.2s"}}),a.createElement("div",{className:"h-[8%] w-[24%] absolute -left-[10%] -top-[3.9%] rounded-md bg-gray-700 animate-spinner",style:{transform:"rotate(330deg) translate(146%)",animationDelay:"-.1s"}})))}export{p as Collapse,y as CollapseContent,f as CollapseTrigger,b as Spinner,c as Tab,o as Tabs};
//# sourceMappingURL=index.js.map
