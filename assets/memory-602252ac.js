import{_ as a,k as t,c as e,d as l,F as i,f as s,e as n,t as c,q as d,n as u,h as o}from"./index-40908ee6.js";const r={class:"container"},v=["onClick"],m=a({__name:"Album",setup(a){let o="../../static/Ablum/";const m=[{title:"Explore The World",actived:t(!0),img_url:`${o}1.png`},{title:"Wild Forest",actived:t(!1),img_url:`${o}2.png`},{title:"Sunny Beach",actived:t(!1),img_url:`${o}3.png`},{title:"City on Winter",actived:t(!1),img_url:`${o}4.png`},{title:"Mountains - Clouds",actived:t(!1),img_url:`${o}5.png`},{title:"Mountains - Clouds",actived:t(!1),img_url:`${o}6.png`}];return(a,t)=>(e(),l("div",r,[(e(),l(i,null,s(m,((a,t)=>n("div",{class:d(["panel",{active:a.actived.value}]),onClick:a=>(a=>{m.forEach(((a,t)=>{a.actived.value=!1})),m[a].actived.value=!0})(t),style:u({backgroundImage:`url(${a.img_url})`})},[n("h3",null,c(a.title),1)],14,v))),64))]))}},[["__scopeId","data-v-2f5cae20"]]),_={class:"all"},g=a({__name:"memory",setup:a=>(a,t)=>(e(),l("div",_,[o(m)]))},[["__scopeId","data-v-929d0ae0"]]);export{g as default};
