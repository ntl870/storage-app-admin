import{i as u,aR as f,a as l,j as r,R as F,C as c,T as o,B as h,af as p}from"./index-825a6372.js";import{E as y}from"./index-1711b269.js";import{S as g,L as t,F as x}from"./index-04cd3063.js";const w=()=>{var n,a;const{searchParamsObject:d,navigate:i}=u(),{data:e,loading:m}=f({variables:{search:d.query},fetchPolicy:"cache-and-network"});return m?l("div",{className:"flex justify-center items-center h-full",children:l(g,{size:"large"})}):!((n=e==null?void 0:e.searchFilesAndFolders.files)!=null&&n.length)&&!((a=e==null?void 0:e.searchFilesAndFolders.folders)!=null&&a.length)?l("div",{className:"flex justify-center items-center h-full",children:l(y,{})}):r(F,{gutter:[16,16],className:"p-4 bg-white h-full",children:[r(c,{span:12,children:[l(o.Title,{children:"Folders"}),l(t,{itemLayout:"horizontal",dataSource:(e==null?void 0:e.searchFilesAndFolders.folders)??[],renderItem:s=>l(t.Item,{children:r(h,{type:"text",className:"w-full text-left",onClick:()=>i(`/folder/${s.ID}`),children:[l(x,{}),s.name]})})})]}),r(c,{span:12,children:[l(o.Title,{children:"Files"}),l(t,{itemLayout:"horizontal",dataSource:(e==null?void 0:e.searchFilesAndFolders.files)??[],renderItem:s=>l(t.Item,{children:r(h,{type:"text",className:"w-full text-left",onClick:()=>i(`/file/${s.ID}`),children:[l(p,{}),s.name]})})})]})]})};export{w as SearchPage};
