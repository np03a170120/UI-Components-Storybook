import{r as pe}from"./index-emeq7cRi.js";import{g as ie,h as ae,i as ue,j as de,c as ce,k as me}from"./memoTheme-CkIRWuDJ.js";import{u as p}from"./createSimplePaletteValueFilter-D5VFv-FI.js";import{j as i}from"./jsx-runtime-D7bgWBpP.js";import{F as fe,a as xe}from"./FormHelperText-BjGaEdr6.js";import{u as Pe}from"./useId-WeTZet0C.js";import{I as Te,S as Ie,a as be,F as he,O as Fe}from"./Select-DVTmeR9w.js";function ye(s){return ae("MuiTextField",s)}ie("MuiTextField",["root"]);const Se={standard:be,filled:he,outlined:Fe},Ce=s=>{const{classes:l}=s;return me({root:["root"]},ye,l)},Le=ue(fe,{name:"MuiTextField",slot:"Root",overridesResolver:(s,l)=>l.root})({}),Ue=pe.forwardRef(function(l,P){const T=de({props:l,name:"MuiTextField"}),{autoComplete:R,autoFocus:I=!1,children:v,className:w,color:b="primary",defaultValue:g,disabled:h=!1,error:F=!1,FormHelperTextProps:M,fullWidth:u=!1,helperText:d,id:U,InputLabelProps:k,inputProps:E,InputProps:O,inputRef:N,label:r,maxRows:$,minRows:q,multiline:y=!1,name:A,onBlur:B,onChange:D,onFocus:V,placeholder:W,required:S=!1,rows:z,select:c=!1,SelectProps:m,slots:C={},slotProps:G={},type:J,value:L,variant:a="outlined",...K}=T,e={...T,autoFocus:I,color:b,disabled:h,error:F,fullWidth:u,multiline:y,required:S,select:c,variant:a},Q=Ce(e),t=Pe(U),f=d&&t?`${t}-helper-text`:void 0,j=r&&t?`${t}-label`:void 0,X=Se[a],o={slots:C,slotProps:{input:O,inputLabel:k,htmlInput:E,formHelperText:M,select:m,...G}},n={},x=o.slotProps.inputLabel;a==="outlined"&&(x&&typeof x.shrink<"u"&&(n.notched=x.shrink),n.label=r),c&&((!m||!m.native)&&(n.id=void 0),n["aria-describedby"]=void 0);const[Y,Z]=p("input",{elementType:X,externalForwardedProps:o,additionalProps:n,ownerState:e}),[_,ee]=p("inputLabel",{elementType:Te,externalForwardedProps:o,ownerState:e}),[te,oe]=p("htmlInput",{elementType:"input",externalForwardedProps:o,ownerState:e}),[se,le]=p("formHelperText",{elementType:xe,externalForwardedProps:o,ownerState:e}),[re,ne]=p("select",{elementType:Ie,externalForwardedProps:o,ownerState:e}),H=i.jsx(Y,{"aria-describedby":f,autoComplete:R,autoFocus:I,defaultValue:g,fullWidth:u,multiline:y,name:A,rows:z,maxRows:$,minRows:q,type:J,value:L,id:t,inputRef:N,onBlur:B,onChange:D,onFocus:V,placeholder:W,inputProps:oe,slots:{input:C.htmlInput?te:void 0},...Z});return i.jsxs(Le,{className:ce(Q.root,w),disabled:h,error:F,fullWidth:u,ref:P,required:S,color:b,variant:a,ownerState:e,...K,children:[r!=null&&r!==""&&i.jsx(_,{htmlFor:t,id:j,...ee,children:r}),c?i.jsx(re,{"aria-describedby":f,id:t,labelId:j,value:L,input:H,...ne,children:v}):H,d&&i.jsx(se,{id:f,...le,children:d})]})});export{Ue as T};