import{t as D,v as G,aq as N,w as z,r,y as M,cs as k,H as w,bT as L,bd as U,be as X,bf as B,b5 as K,ct as W,aQ as Y,bW as Q,as as q,bU as J,bX as T}from"./index-825a6372.js";const V=n=>{const{componentCls:e,iconCls:s,boxShadow:t,colorText:o,colorBgElevated:i,colorSuccess:p,colorError:C,colorWarning:a,colorInfo:l,fontSizeLG:d,motionEaseInOutCirc:u,motionDurationSlow:c,marginXS:g,paddingXS:m,borderRadiusLG:f,zIndexPopup:y,messageNoticeContentPadding:h}=n,b=new N("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:m,transform:"translateY(0)",opacity:1}}),O=new N("MessageMoveOut",{"0%":{maxHeight:n.height,padding:m,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}});return[{[e]:Object.assign(Object.assign({},z(n)),{color:o,position:"fixed",top:g,width:"100%",pointerEvents:"none",zIndex:y,[`${e}-move-up`]:{animationFillMode:"forwards"},[`
        ${e}-move-up-appear,
        ${e}-move-up-enter
      `]:{animationName:b,animationDuration:c,animationPlayState:"paused",animationTimingFunction:u},[`
        ${e}-move-up-appear${e}-move-up-appear-active,
        ${e}-move-up-enter${e}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${e}-move-up-leave`]:{animationName:O,animationDuration:c,animationPlayState:"paused",animationTimingFunction:u},[`${e}-move-up-leave${e}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[`${e}-notice`]:{padding:m,textAlign:"center",[`${e}-custom-content > ${s}`]:{verticalAlign:"text-bottom",marginInlineEnd:g,fontSize:d},[`${e}-notice-content`]:{display:"inline-block",padding:h,background:i,borderRadius:f,boxShadow:t,pointerEvents:"all"},[`${e}-success > ${s}`]:{color:p},[`${e}-error > ${s}`]:{color:C},[`${e}-warning > ${s}`]:{color:a},[`
        ${e}-info > ${s},
        ${e}-loading > ${s}`]:{color:l}}},{[`${e}-notice-pure-panel`]:{padding:0,textAlign:"start"}}]},_=D("Message",n=>{const e=G(n,{messageNoticeContentPadding:`${(n.controlHeightLG-n.fontSize*n.lineHeight)/2}px ${n.paddingSM}px`});return[V(e)]},n=>({height:150,zIndexPopup:n.zIndexPopupBase+10}));var Z=globalThis&&globalThis.__rest||function(n,e){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(s[t[o]]=n[t[o]]);return s};const ee={info:r.createElement(L,null),success:r.createElement(U,null),error:r.createElement(X,null),warning:r.createElement(B,null),loading:r.createElement(K,null)};function A(n){let{prefixCls:e,type:s,icon:t,children:o}=n;return r.createElement("div",{className:w(`${e}-custom-content`,`${e}-${s}`)},t||ee[s],r.createElement("span",null,o))}function ne(n){const{prefixCls:e,className:s,type:t,icon:o,content:i}=n,p=Z(n,["prefixCls","className","type","icon","content"]),{getPrefixCls:C}=r.useContext(M),a=e||C("message"),[,l]=_(a);return r.createElement(k,Object.assign({},p,{prefixCls:a,className:w(s,l,`${a}-notice-pure-panel`),eventKey:"pure",duration:null,content:r.createElement(A,{prefixCls:a,type:t,icon:o},i)}))}function te(n,e){return{motionName:e??`${n}-move-up`}}function S(n){let e;const s=new Promise(o=>{e=n(()=>{o(!0)})}),t=()=>{e==null||e()};return t.then=(o,i)=>s.then(o,i),t.promise=s,t}var oe=globalThis&&globalThis.__rest||function(n,e){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(s[t[o]]=n[t[o]]);return s};const se=8,re=3,ae=r.forwardRef((n,e)=>{const{top:s,prefixCls:t,getContainer:o,maxCount:i,duration:p=re,rtl:C,transitionName:a,onAllRemoved:l}=n,{getPrefixCls:d,getPopupContainer:u}=r.useContext(M),c=t||d("message"),[,g]=_(c),m=()=>({left:"50%",transform:"translateX(-50%)",top:s??se}),f=()=>w(g,C?`${c}-rtl`:""),y=()=>te(c,a),h=r.createElement("span",{className:`${c}-close-x`},r.createElement(Y,{className:`${c}-close-icon`})),[b,O]=W({prefixCls:c,style:m,className:f,motion:y,closable:!1,closeIcon:h,duration:p,getContainer:()=>(o==null?void 0:o())||(u==null?void 0:u())||document.body,maxCount:i,onAllRemoved:l});return r.useImperativeHandle(e,()=>Object.assign(Object.assign({},b),{prefixCls:c,hashId:g})),O});let j=0;function H(n){const e=r.useRef(null);return[r.useMemo(()=>{const t=a=>{var l;(l=e.current)===null||l===void 0||l.close(a)},o=a=>{if(!e.current){const E=()=>{};return E.then=()=>{},E}const{open:l,prefixCls:d,hashId:u}=e.current,c=`${d}-notice`,{content:g,icon:m,type:f,key:y,className:h,onClose:b}=a,O=oe(a,["content","icon","type","key","className","onClose"]);let $=y;return $==null&&(j+=1,$=`antd-message-${j}`),S(E=>(l(Object.assign(Object.assign({},O),{key:$,content:r.createElement(A,{prefixCls:d,type:f,icon:m},g),placement:"top",className:w(f&&`${c}-${f}`,u,h),onClose:()=>{b==null||b(),E()}})),()=>{t($)}))},p={open:o,destroy:a=>{var l;a!==void 0?t(a):(l=e.current)===null||l===void 0||l.destroy()}};return["info","success","warning","error","loading"].forEach(a=>{const l=(d,u,c)=>{let g;d&&typeof d=="object"&&"content"in d?g=d:g={content:d};let m,f;typeof u=="function"?f=u:(m=u,f=c);const y=Object.assign(Object.assign({onClose:f,duration:m},g),{type:a});return o(y)};p[a]=l}),p},[]),r.createElement(ae,Object.assign({key:"message-holder"},n,{ref:e}))]}function ie(n){return H(n)}let v=null,x=n=>n(),P=[],I={};function le(){const{prefixCls:n,getContainer:e,duration:s,rtl:t,maxCount:o,top:i}=I,p=n??T().getPrefixCls("message"),C=(e==null?void 0:e())||document.body;return{prefixCls:p,container:C,duration:s,rtl:t,maxCount:o,top:i}}const ce=r.forwardRef((n,e)=>{const s=()=>{const{prefixCls:u,container:c,maxCount:g,duration:m,rtl:f,top:y}=le();return{prefixCls:u,getContainer:()=>c,maxCount:g,duration:m,rtl:f,top:y}},[t,o]=r.useState(s),[i,p]=H(t),C=T(),a=C.getRootPrefixCls(),l=C.getIconPrefixCls(),d=()=>{o(s)};return r.useEffect(d,[]),r.useImperativeHandle(e,()=>{const u=Object.assign({},i);return Object.keys(u).forEach(c=>{u[c]=function(){return d(),i[c].apply(i,arguments)}}),{instance:u,sync:d}}),r.createElement(J,{prefixCls:a,iconPrefixCls:l},p)});function F(){if(!v){const n=document.createDocumentFragment(),e={fragment:n};v=e,x(()=>{Q(r.createElement(ce,{ref:s=>{const{instance:t,sync:o}=s||{};Promise.resolve().then(()=>{!e.instance&&t&&(e.instance=t,e.sync=o,F())})}}),n)});return}v.instance&&(P.forEach(n=>{const{type:e,skipped:s}=n;if(!s)switch(e){case"open":{x(()=>{const t=v.instance.open(Object.assign(Object.assign({},I),n.config));t==null||t.then(n.resolve),n.setCloseFn(t)});break}case"destroy":x(()=>{v==null||v.instance.destroy(n.key)});break;default:x(()=>{var t;const o=(t=v.instance)[e].apply(t,q(n.args));o==null||o.then(n.resolve),n.setCloseFn(o)})}}),P=[])}function ue(n){I=Object.assign(Object.assign({},I),n),x(()=>{var e;(e=v==null?void 0:v.sync)===null||e===void 0||e.call(v)})}function de(n){const e=S(s=>{let t;const o={type:"open",config:n,resolve:s,setCloseFn:i=>{t=i}};return P.push(o),()=>{t?x(()=>{t()}):o.skipped=!0}});return F(),e}function pe(n,e){const s=S(t=>{let o;const i={type:n,args:e,resolve:t,setCloseFn:p=>{o=p}};return P.push(i),()=>{o?x(()=>{o()}):i.skipped=!0}});return F(),s}function ge(n){P.push({type:"destroy",key:n}),F()}const fe=["success","info","warning","error","loading"],me={open:de,destroy:ge,config:ue,useMessage:ie,_InternalPanelDoNotUseOrYouWillBeFired:ne},R=me;fe.forEach(n=>{R[n]=function(){for(var e=arguments.length,s=new Array(e),t=0;t<e;t++)s[t]=arguments[t];return pe(n,s)}});const Ce=R;export{Ce as m};