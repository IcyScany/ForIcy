import{l as n,b as e,c as o,d as l,_ as t,u as r,j as s,a,m as i,f as c,g as u,q as m,F as p,e as w,t as d}from"./index-23b7f854.js";import{H as h}from"./Heart-4afc9b5c.js";const k={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},v=[l("path",{d:"M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",fill:"currentColor"},null,-1)],f=n({name:"Close",render:function(n,l){return e(),o("svg",k,v)}}),x={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},g=[l("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 152h336"},null,-1),l("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 256h336"},null,-1),l("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 360h336"},null,-1)],C=n({name:"Menu",render:function(n,l){return e(),o("svg",x,g)}}),M={class:"circle-container"},_={class:"circle"},b=["onClick"],y=t({__name:"index",setup(n){const t=r();let k=s(!1);const v=[{name:"Home",href:"/"},{name:"Story",href:"/story"},{name:"Memory",href:"/memory"}];return(n,r)=>{const s=a("n-icon"),x=a("router-view");return e(),o(p,null,[l("div",{class:m(["pages",{"show-nav":c(k)}])},[l("div",M,[l("div",_,[l("button",{id:"close",onClick:r[0]||(r[0]=n=>i(k)?k.value=!c(k):k=!c(k))},[u(s,{component:c(f),color:"white"},null,8,["component"])]),l("button",{id:"open",onClick:r[1]||(r[1]=n=>i(k)?k.value=!c(k):k=!c(k))},[u(s,{component:c(C),color:"white"},null,8,["component"])])])]),u(x)],2),l("nav",null,[l("ul",null,[(e(),o(p,null,w(v,((n,e)=>l("li",null,[u(s,{component:c(h),size:"20",color:"#E91E63"},null,8,["component"]),l("a",{onClick:e=>{var o;i(k)?k.value=!1:k=!1,o=n,t.push(o.href)}},d(n.name),9,b)]))),64))])])],64)}}},[["__scopeId","data-v-534cbe04"]]);export{y as default};
