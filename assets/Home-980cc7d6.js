import{_ as a,u as e,a as s,o as t,r as l,b as o,c as n,d as r,e as c,t as i,F as u,f as v,g as d,h as m,w as p,i as g,p as f,j as _,k as h,n as y}from"./index-a6eae45a.js";import{H as b}from"./Heart-d36246a0.js";const M=a=>(f("data-v-a96da493"),a=a(),_(),a),H={class:"time-all"},T={class:"font0"},w=M((()=>c("br",null,null,-1))),B=M((()=>c("div",{class:"title"},"感谢冰洁陪灿宇一起走过的",-1))),D={class:"timer"},E={class:"title"},I={class:"font1"},S=M((()=>c("p",{class:"font2"},[g(" 这是灿宇和冰洁的小站,"),c("br"),g("这里记录了我们的美好瞬间")],-1))),j={class:"btn-group"},k={class:"font2"},x={class:"font1"},z=a({__name:"Timer",props:{msg:String},setup(a){const f=e();s(),t((()=>{h()}));let _=l({Days:0,Hours:0,Minutes:0,Seconds:0});const h=()=>{setInterval((()=>{let a=(new Date).getTime()-new Date("2019/06/21 17:00:00").getTime();_.Days=Math.floor(a/864e5);let e=a%864e5;_.Hours=Math.floor(e/36e5);let s=e%36e5;_.Minutes=Math.floor(s/6e4);let t=s%6e4;_.Seconds=Math.round(t/1e3)}),1e3)};let y=[{name:"我们的故事",color:"#E91E63",href:"/story"},{name:"我们的回忆",color:"",href:"/memory"}];return(e,s)=>{const t=o("n-button"),l=o("n-icon");return n(),r("div",H,[c("div",T,i(a.msg),1),w,B,c("div",D,[(n(!0),r(u,null,v(d(_),((a,e)=>(n(),r("div",null,[c("div",E,i(a),1),c("div",I,i(e),1)])))),256))]),S,c("div",j,[(n(!0),r(u,null,v(d(y),((a,e)=>(n(),r("div",null,[m(t,{color:a.color,size:"large",onClick:e=>(a=>{f.push(a.href)})(a)},{default:p((()=>[c("p",k,i(a.name),1)])),_:2},1032,["color","onClick"])])))),256))]),c("div",x,[g(" powered by "),m(l,{size:"20",color:"#E91E63"},{default:p((()=>[m(d(b))])),_:1})])])}}},[["__scopeId","data-v-a96da493"]]),C={class:"start-bg"},$=["src"],F=["src"],q=a({__name:"StartBg",setup(a){let e="./static/Bg/",s=h("./static/Bg/1.png"),l=h("./static/Bg/2.png"),o=h(1),i=h(0),u=h(1),v=h(0);t((()=>{m()}));const m=()=>{setTimeout((()=>{u.value=0,v.value=1}),9e3),setInterval((()=>{u.value=0,i.value=(i.value+1)%6+1,l=`${e+i.value}.png`,v.value=1,setTimeout((()=>{o.value=(o.value+1)%6+1,s=`${e+o.value}.png`,u.value=1,v.value=0}),6e3)}),12e3)};return(a,e)=>(n(),r("div",C,[c("img",{src:d(s),alt:"",style:y({opacity:d(u)})},null,12,$),c("img",{src:d(l),alt:"",style:y({opacity:d(v)})},null,12,F)]))}},[["__scopeId","data-v-f949b24e"]]),A={class:"all"},G={__name:"Home",setup:a=>(a,e)=>(n(),r("div",A,[m(q),m(z)]))};export{G as default};
