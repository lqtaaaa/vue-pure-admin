import{d as _,r as s,a2 as E,af as V,A as D,ag as b,ah as B,h as n,e as N,i as I,j as o,g as l,k as r,l as d,b as e,Z as T,ai as m}from"./index.cf20123f.js";import{u as w}from"./hooks.92b241f7.js";const M={class:"card-header"},R={class:"font-medium"},q=_({name:"MenuTree"}),U=_({...q,setup(z){const c=s("");let f=s({value:"uniqueId",children:"children"});const p=s();let h=E(V().wholeMenus),i=D(()=>b(h)),x=B(i.value);const k=t=>{p.value.filter(t)},v=(t,a)=>m(a.meta.title).indexOf(t)!==-1;return(t,a)=>{const F=n("el-link"),g=n("el-input"),y=n("el-tree-v2"),C=n("el-card");return N(),I(C,null,{header:o(()=>[l("div",M,[l("span",R,[r(" \u83DC\u5355\u6811\u7ED3\u6784\uFF08\u91C7\u7528element-plus\u7684 "),d(F,{href:"https://element-plus.gitee.io/zh-CN/component/tree-v2.html",target:"_blank",icon:e(w)("node-tree"),style:{"font-size":"16px",margin:"0 5px 4px 0"}},{default:o(()=>[r(" Tree V2 ")]),_:1},8,["icon"]),r(" \u7EC4\u4EF6\u5E76\u652F\u6301\u56FD\u9645\u5316\uFF09 ")])])]),default:o(()=>[d(g,{class:"mb-4",modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=u=>c.value=u),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u67E5\u627E",clearable:"",onInput:k},null,8,["modelValue"]),d(y,{ref_key:"treeRef",ref:p,data:e(i),props:e(f),"show-checkbox":"",height:500,"filter-method":v,"default-expanded-keys":e(x)},{default:o(({data:u})=>[l("span",null,T(e(m)(u.meta.title)),1)]),_:1},8,["data","props","default-expanded-keys"])]),_:1})}}});export{U as default};
