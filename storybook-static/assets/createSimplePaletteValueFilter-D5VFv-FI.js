import"./index-emeq7cRi.js";import{j as l}from"./jsx-runtime-D7bgWBpP.js";import{G as h,u as b,p as w,T as C,e as E,r as G,m as F,b as j,d as k}from"./memoTheme-CkIRWuDJ.js";function O(e){return e==null||Object.keys(e).length===0}function R(e){const{styles:t,defaultTheme:o={}}=e,n=typeof t=="function"?r=>t(O(r)?o:r):t;return l.jsx(h,{styles:n})}function M({styles:e,themeId:t,defaultTheme:o={}}){const n=b(o),r=typeof e=="function"?e(t&&n[t]||n):e;return l.jsx(R,{styles:r})}function V(e){return l.jsx(M,{...e,defaultTheme:w,themeId:C})}function N(e){return function(o){return l.jsx(V,{styles:typeof e=="function"?n=>e({theme:n,...o}):e})}}function W(){return E}function q(e,t){const{className:o,elementType:n,ownerState:r,externalForwardedProps:d,internalForwardedProps:u,...y}=t,{component:p,slots:a={[e]:void 0},slotProps:m={[e]:void 0},...S}=d,f=a[e]||n,s=G(m[e],r),{props:{component:i,...P},internalRef:x}=F({className:o,...y,externalForwardedProps:e==="root"?S:void 0,externalSlotProps:s}),g=j(x,s==null?void 0:s.ref,t.ref),c=e==="root"?i||p:i,T=k(f,{...e==="root"&&!p&&!a[e]&&u,...e!=="root"&&!a[e]&&u,...P,...c&&{as:c},ref:g},r);return[f,T]}function _(e){return typeof e.main=="string"}function $(e,t=[]){if(!_(e))return!1;for(const o of t)if(!e.hasOwnProperty(o)||typeof e[o]!="string")return!1;return!0}function v(e=[]){return([,t])=>t&&$(t,e)}export{v as c,N as g,W as i,q as u};
