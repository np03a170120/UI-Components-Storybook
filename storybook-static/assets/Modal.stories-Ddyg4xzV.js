import{j as e}from"./jsx-runtime-D7bgWBpP.js";import{r as d}from"./index-emeq7cRi.js";import{D as T,g as y,a as D,b as v,c as j}from"./DialogContent-D51WFn3l.js";import{i as M,j as O,c as q,k as _}from"./memoTheme-CkIRWuDJ.js";import{T as h}from"./Typography-BGPr_0gA.js";import{B as p}from"./Button-DTc0n_y2.js";import"./useTheme-CgCpmSsw.js";import"./Modal-COVtalsk.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSimplePaletteValueFilter-D5VFv-FI.js";import"./index-DzU3ksQY.js";import"./index-B3Y5PYdr.js";import"./useId-WeTZet0C.js";import"./ButtonBase-Bk2Tkm9R.js";const w=t=>{const{classes:o}=t;return _({root:["root"]},y,o)},R=M(h,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),S=d.forwardRef(function(o,n){const s=O({props:o,name:"MuiDialogTitle"}),{className:a,id:i,...c}=s,l=s,x=w(l),{titleId:C=i}=d.useContext(T);return e.jsx(R,{component:"h2",className:q(x.root,a),ownerState:l,ref:n,variant:"h6",id:i??C,...c})});function m({title:t,children:o,onClose:n,onConfirm:s,confirmText:a="Confirm",cancelText:i="Cancel",size:c="sm",...l}){return e.jsxs(D,{...l,onClose:n,fullWidth:!0,maxWidth:c,children:[e.jsx(S,{children:t}),e.jsx(v,{children:o}),e.jsxs(j,{children:[e.jsx(p,{onClick:n,color:"secondary",children:i}),s&&e.jsx(p,{onClick:s,color:"primary",children:a})]})]})}m.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Confirm"',computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Cancel"',computed:!1}},size:{required:!1,tsType:{name:'DialogProps["maxWidth"]',raw:'DialogProps["maxWidth"]'},description:"",defaultValue:{value:'"sm"',computed:!1}}},composes:["DialogProps"]};const H={title:"Modal",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else."}}},argTypes:{size:{description:"lg, md, sm, xl, xs"}}},r=()=>{const[t,o]=d.useState(!1),n=()=>o(!0),s=()=>o(!1),a=()=>{console.log("Confirmed!"),o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{variant:"contained",onClick:n,children:"Open Modal"}),e.jsx(m,{size:"sm",open:t,onClose:s,onConfirm:a,title:"Title of The Modal",confirmText:"Save",cancelText:"Cancel",children:e.jsx(h,{children:"Content for the modal"})})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var u,f,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = () => {
    console.log("Confirmed!");
    setOpen(false);
  };
  return <>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>

      <Modal size="sm" open={open} onClose={handleClose} onConfirm={handleConfirm} title="Title of The Modal" confirmText="Save" cancelText="Cancel">
        {/* Modal Content */}
        <Typography>Content for the modal</Typography>
        {/*  */}
      </Modal>
    </>;
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const J=["Default"];export{r as Default,J as __namedExportsOrder,H as default};
