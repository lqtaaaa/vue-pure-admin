import{d as _,r as s,A as C,af as E,ag as V,ah as b,h as n,e as B,i as D,j as o,g as l,k as r,l as d,b as e,Z as I,ai as m}from"./index.def343f7.js";import{u as N}from"./hooks.279ed583.js";const T={class:"card-header"},R={class:"font-medium"},q=_({name:"MenuTree"}),M=_({...q,setup(w){const c=s("");let f=s({value:"uniqueId",children:"children"});const p=s();let i=C(()=>E(V().menusTree)),h=b(i.value);const x=t=>{p.value.filter(t)},k=(t,a)=>m(a.meta.title).indexOf(t)!==-1;return(t,a)=>{const v=n("el-link"),F=n("el-input"),g=n("el-tree-v2"),y=n("el-card");return B(),D(y,null,{header:o(()=>[l("div",T,[l("span",R,[r(" \u83DC\u5355\u6811\u7ED3\u6784\uFF08\u91C7\u7528element-plus\u7684 "),d(v,{href:"https://element-plus.gitee.io/zh-CN/component/tree-v2.html",target:"_blank",icon:e(N)("node-tree"),style:{"font-size":"16px",margin:"0 5px 4px 0"}},{default:o(()=>[r(" Tree V2 ")]),_:1},8,["icon"]),r(" \u7EC4\u4EF6\u5E76\u652F\u6301\u56FD\u9645\u5316\uFF09 ")])])]),default:o(()=>[d(F,{class:"mb-4",modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=u=>c.value=u),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u67E5\u627E",clearable:"",onInput:x},null,8,["modelValue"]),d(g,{ref_key:"treeRef",ref:p,data:e(i),props:e(f),"show-checkbox":"",height:500,"filter-method":k,"default-expanded-keys":e(h)},{default:o(({data:u})=>[l("span",null,I(e(m)(u.meta.title)),1)]),_:1},8,["data","props","default-expanded-keys"])]),_:1})}}});export{M as default};