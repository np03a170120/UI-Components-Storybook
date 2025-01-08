import{r as T}from"./index-emeq7cRi.js";import{h as B,g as C,i as j,l,n as S,j as w,c as W,k as M}from"./memoTheme-CkIRWuDJ.js";import{c as P,i as R}from"./createSimplePaletteValueFilter-D5VFv-FI.js";import{j as O}from"./jsx-runtime-D7bgWBpP.js";function U(r){return B("MuiTypography",r)}C("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const A={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},E=R(),$=r=>{const{align:e,gutterBottom:t,noWrap:a,paragraph:n,variant:s,classes:i}=r,o={root:["root",s,r.align!=="inherit"&&`align${l(e)}`,t&&"gutterBottom",a&&"noWrap",n&&"paragraph"]};return M(o,U,i)},D=j("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,t.variant&&e[t.variant],t.align!=="inherit"&&e[`align${l(t.align)}`],t.noWrap&&e.noWrap,t.gutterBottom&&e.gutterBottom,t.paragraph&&e.paragraph]}})(S(({theme:r})=>{var e;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(r.typography).filter(([t,a])=>t!=="inherit"&&a&&typeof a=="object").map(([t,a])=>({props:{variant:t},style:a})),...Object.entries(r.palette).filter(P()).map(([t])=>({props:{color:t},style:{color:(r.vars||r).palette[t].main}})),...Object.entries(((e=r.palette)==null?void 0:e.text)||{}).filter(([,t])=>typeof t=="string").map(([t])=>({props:{color:`text${l(t)}`},style:{color:(r.vars||r).palette.text[t]}})),{props:({ownerState:t})=>t.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:t})=>t.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:t})=>t.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:t})=>t.paragraph,style:{marginBottom:16}}]}})),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},F=T.forwardRef(function(e,t){const{color:a,...n}=w({props:e,name:"MuiTypography"}),s=!A[a],i=E({...n,...s&&{color:a}}),{align:o="inherit",className:g,component:h,gutterBottom:x=!1,noWrap:d=!1,paragraph:c=!1,variant:p="body1",variantMapping:y=f,...u}=i,m={...i,align:o,color:a,className:g,component:h,gutterBottom:x,noWrap:d,paragraph:c,variant:p,variantMapping:y},b=h||(c?"p":y[p]||f[p])||"span",v=$(m);return O.jsx(D,{as:b,ref:t,className:W(v.root,g),...u,ownerState:m,style:{...o!=="inherit"&&{"--Typography-textAlign":o},...u.style}})});export{F as T};
