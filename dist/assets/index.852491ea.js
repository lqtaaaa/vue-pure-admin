import{V as m}from"./styles.abb43936.js";import{d as c,t as f,y as l,h as d,e as w,i as _,j as a,g as u,k as t,l as n,b as F}from"./index.555bdc27.js";import"./vue.runtime.esm-bundler.520f894f.js";const g={class:"card-header"},b={class:"font-medium"},E={class:"font-medium"},v=c({name:"JsonEditor"}),N=c({...v,setup(C){const r={status:200,text:"",error:null,config:void 0,data:[{news_id:51184,title:"iPhone X Review: Innovative future with real black technology",source:"Netease phone"},{news_id:51183,title:"Traffic paradise: How to design streets for people and unmanned vehicles in the future?",source:"Netease smart",link:"http://netease.smart/traffic-paradise/1235"},{news_id:51182,title:"Teslamask's American Business Relations: The government does not pay billions to build factories",source:"AI Finance",members:["Daniel","Mike","John"]}]},e=f({val:JSON.stringify(r),data:r,showLine:!0,showLineNumber:!0,showDoubleQuotes:!0,showLength:!0,editable:!0,showIcon:!0,editableTrigger:"click",deep:3});return l(()=>e.val,s=>{try{e.data=JSON.parse(s)}catch{}}),l(()=>e.data,s=>{try{e.val=JSON.stringify(s)}catch{}}),(s,o)=>{const i=d("el-link"),h=d("el-card");return w(),_(h,null,{header:a(()=>[u("div",g,[u("span",b,[t(" JSON\u7F16\u8F91\u5668\u7EC4\u4EF6\uFF0C\u91C7\u7528\u5F00\u6E90\u7684 "),n(i,{href:"https://github.com/leezng/vue-json-pretty",target:"_blank",style:{"font-size":"16px",margin:"0 4px 5px"}},{default:a(()=>[t(" vue-json-pretty ")]),_:1}),t(" \uFF08\u652F\u6301\u5927\u6570\u636E\u91CF\uFF09\u3002 ")]),u("span",E,[t(" \u5F53\u7136\u6211\u4EEC\u8FD8\u6709\u4E00\u6B3E\u4EE3\u7801\u7F16\u8F91\u5668\u7EC4\u4EF6\u63A8\u8350\uFF08\u8FD9\u91CC\u5C31\u4E0D\u505A\u6F14\u793A\u4E86\uFF09\uFF0C\u91C7\u7528\u5F00\u6E90\u7684 "),n(i,{href:"https://github.com/surmon-china/vue-codemirror",target:"_blank",style:{"font-size":"16px",margin:"0 4px 5px"}},{default:a(()=>[t(" codemirror6 ")]),_:1})])])]),default:a(()=>[n(F(m),{data:e.data,"onUpdate:data":o[0]||(o[0]=p=>e.data=p),deep:e.deep,"show-double-quotes":e.showDoubleQuotes,"show-line":e.showLine,"show-length":e.showLength,"show-icon":e.showIcon,"show-line-number":e.showLineNumber,editable:e.editable,"editable-trigger":e.editableTrigger},null,8,["data","deep","show-double-quotes","show-line","show-length","show-icon","show-line-number","editable","editable-trigger"])]),_:1})}}});export{N as default};
