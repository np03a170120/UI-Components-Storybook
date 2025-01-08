var Pe=Object.defineProperty;var Ve=(t,e,n)=>e in t?Pe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ie=(t,e,n)=>Ve(t,typeof e!="symbol"?e+"":e,n);import{r as l,R as H}from"./index-emeq7cRi.js";import{y as Be,_ as Se,z as De,A as we,B as oe,c as x,g as ae,D as Q,i as Z,j as le,E as Le,h as je,b as se,F as _,k as ke}from"./memoTheme-CkIRWuDJ.js";import{j as $}from"./jsx-runtime-D7bgWBpP.js";function re(t){try{return t.matches(":focus-visible")}catch{}return!1}class G{constructor(){ie(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const e=Be(G.create).current,[n,a]=l.useState(!1);return e.shouldMount=n,e.setShouldMount=a,l.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=$e(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Ne(){return G.use()}function $e(){let t,e;const n=new Promise((a,i)=>{t=a,e=i});return n.resolve=t,n.reject=e,n}function Fe(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ee(t,e){var n=function(o){return e&&l.isValidElement(o)?e(o):o},a=Object.create(null);return t&&l.Children.map(t,function(i){return i}).forEach(function(i){a[i.key]=n(i)}),a}function ve(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var a=Object.create(null),i=[];for(var o in t)o in e?i.length&&(a[o]=i,i=[]):i.push(o);var s,p={};for(var u in e){if(a[u])for(s=0;s<a[u].length;s++){var f=a[u][s];p[a[u][s]]=n(f)}p[u]=n(u)}for(s=0;s<i.length;s++)p[i[s]]=n(i[s]);return p}function N(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Ie(t,e){return ee(t.children,function(n){return l.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:N(n,"appear",t),enter:N(n,"enter",t),exit:N(n,"exit",t)})})}function Ue(t,e,n){var a=ee(t.children),i=ve(e,a);return Object.keys(i).forEach(function(o){var s=i[o];if(l.isValidElement(s)){var p=o in e,u=o in a,f=e[o],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?i[o]=l.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:N(s,"exit",t),enter:N(s,"enter",t)}):!u&&p&&!d?i[o]=l.cloneElement(s,{in:!1}):u&&p&&l.isValidElement(f)&&(i[o]=l.cloneElement(s,{onExited:n.bind(null,s),in:f.props.in,exit:N(s,"exit",t),enter:N(s,"enter",t)}))}}),i}var ze=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Oe={component:"div",childFactory:function(e){return e}},te=function(t){Se(e,t);function e(a,i){var o;o=t.call(this,a,i)||this;var s=o.handleExited.bind(Fe(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(i,o){var s=o.children,p=o.handleExited,u=o.firstRender;return{children:u?Ie(i,p):Ue(i,s,p),firstRender:!1}},n.handleExited=function(i,o){var s=ee(this.props.children);i.key in s||(i.props.onExited&&i.props.onExited(o),this.mounted&&this.setState(function(p){var u=De({},p.children);return delete u[i.key],{children:u}}))},n.render=function(){var i=this.props,o=i.component,s=i.childFactory,p=we(i,["component","childFactory"]),u=this.state.contextValue,f=ze(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,o===null?H.createElement(oe.Provider,{value:u},f):H.createElement(oe.Provider,{value:u},H.createElement(o,p,f))},e}(H.Component);te.propTypes={};te.defaultProps=Oe;function Ae(t){const{className:e,classes:n,pulsate:a=!1,rippleX:i,rippleY:o,rippleSize:s,in:p,onExited:u,timeout:f}=t,[d,h]=l.useState(!1),M=x(e,n.ripple,n.rippleVisible,a&&n.ripplePulsate),V={width:s,height:s,top:-(s/2)+o,left:-(s/2)+i},b=x(n.child,d&&n.childLeaving,a&&n.childPulsate);return!p&&!d&&h(!0),l.useEffect(()=>{if(!p&&u!=null){const w=setTimeout(u,f);return()=>{clearTimeout(w)}}},[u,p,f]),$.jsx("span",{className:M,style:V,children:$.jsx("span",{className:b})})}const g=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Xe=80,Ye=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ke=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,We=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,He=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),_e=Z(Ae,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ye};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${Ke};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${We};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Ge=l.forwardRef(function(e,n){const a=le({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:o={},className:s,...p}=a,[u,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),V=Le(),b=l.useRef(null),w=l.useRef(null),C=l.useCallback(c=>{const{pulsate:y,rippleX:R,rippleY:I,rippleSize:L,cb:U}=c;f(E=>[...E,$.jsx(_e,{classes:{ripple:x(o.ripple,g.ripple),rippleVisible:x(o.rippleVisible,g.rippleVisible),ripplePulsate:x(o.ripplePulsate,g.ripplePulsate),child:x(o.child,g.child),childLeaving:x(o.childLeaving,g.childLeaving),childPulsate:x(o.childPulsate,g.childPulsate)},timeout:J,pulsate:y,rippleX:R,rippleY:I,rippleSize:L},d.current)]),d.current+=1,h.current=U},[o]),F=l.useCallback((c={},y={},R=()=>{})=>{const{pulsate:I=!1,center:L=i||y.pulsate,fakeElement:U=!1}=y;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const E=U?null:w.current,B=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,T,D;if(L||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)S=Math.round(B.width/2),T=Math.round(B.height/2);else{const{clientX:z,clientY:j}=c.touches&&c.touches.length>0?c.touches[0]:c;S=Math.round(z-B.left),T=Math.round(j-B.top)}if(L)D=Math.sqrt((2*B.width**2+B.height**2)/3),D%2===0&&(D+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-S),S)*2+2,j=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;D=Math.sqrt(z**2+j**2)}c!=null&&c.touches?b.current===null&&(b.current=()=>{C({pulsate:I,rippleX:S,rippleY:T,rippleSize:D,cb:R})},V.start(Xe,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:I,rippleX:S,rippleY:T,rippleSize:D,cb:R})},[i,C,V]),Y=l.useCallback(()=>{F({},{pulsate:!0})},[F]),v=l.useCallback((c,y)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{v(c,y)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=y},[V]);return l.useImperativeHandle(n,()=>({pulsate:Y,start:F,stop:v}),[Y,F,v]),$.jsx(He,{className:x(g.root,o.root,s),ref:w,...p,children:$.jsx(te,{component:null,exit:!0,children:u})})});function qe(t){return je("MuiButtonBase",t)}const Je=ae("MuiButtonBase",["root","disabled","focusVisible"]),Qe=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:a,classes:i}=t,s=ke({root:["root",e&&"disabled",n&&"focusVisible"]},qe,i);return n&&a&&(s.root+=` ${a}`),s},Ze=Z("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Je.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ot=l.forwardRef(function(e,n){const a=le({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:o=!1,children:s,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:w,onClick:C,onContextMenu:F,onDragLeave:Y,onFocus:v,onFocusVisible:c,onKeyDown:y,onKeyUp:R,onMouseDown:I,onMouseLeave:L,onMouseUp:U,onTouchEnd:E,onTouchMove:B,onTouchStart:S,tabIndex:T=0,TouchRippleProps:D,touchRippleRef:z,type:j,...O}=a,A=l.useRef(null),m=Ne(),ue=se(m.ref,z),[k,K]=l.useState(!1);f&&k&&K(!1),l.useImperativeHandle(i,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const ce=m.shouldMount&&!d&&!f;l.useEffect(()=>{k&&M&&!d&&m.pulsate()},[d,M,k,m]);const pe=P(m,"start",I,h),fe=P(m,"stop",F,h),de=P(m,"stop",Y,h),he=P(m,"stop",U,h),me=P(m,"stop",r=>{k&&r.preventDefault(),L&&L(r)},h),be=P(m,"start",S,h),ge=P(m,"stop",E,h),Me=P(m,"stop",B,h),Re=P(m,"stop",r=>{re(r.target)||K(!1),w&&w(r)},!1),ye=_(r=>{A.current||(A.current=r.currentTarget),re(r.target)&&(K(!0),c&&c(r)),v&&v(r)}),q=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Ee=_(r=>{M&&!r.repeat&&k&&r.key===" "&&m.stop(r,()=>{m.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),y&&y(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!f&&(r.preventDefault(),C&&C(r))}),xe=_(r=>{M&&r.key===" "&&k&&!r.defaultPrevented&&m.stop(r,()=>{m.pulsate(r)}),R&&R(r),C&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&C(r)});let W=u;W==="button"&&(O.href||O.to)&&(W=b);const X={};W==="button"?(X.type=j===void 0?"button":j,X.disabled=f):(!O.href&&!O.to&&(X.role="button"),f&&(X["aria-disabled"]=f));const Ce=se(n,A),ne={...a,centerRipple:o,component:u,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:k},Te=Qe(ne);return $.jsxs(Ze,{as:W,className:x(Te.root,p),ownerState:ne,onBlur:Re,onClick:C,onContextMenu:fe,onFocus:ye,onKeyDown:Ee,onKeyUp:xe,onMouseDown:pe,onMouseLeave:me,onMouseUp:he,onDragLeave:de,onTouchEnd:ge,onTouchMove:Me,onTouchStart:be,ref:Ce,tabIndex:f?-1:T,type:j,...X,...O,children:[s,ce?$.jsx(Ge,{ref:ue,center:o,...D}):null]})});function P(t,e,n,a=!1){return _(i=>(n&&n(i),a||t[e](i),!0))}export{ot as B,te as T};
