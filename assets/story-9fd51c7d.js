import{l as t,b as n,c as o,d as e,_ as l,j as r,a as s,F as a,e as c,n as i,f as u,t as d,g as p,o as w,r as k}from"./index-83e63ad8.js";import{a as h,b as g}from"./index-d9866f1f.js";const x={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},m=[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M112 268l144 144l144-144"},null,-1),e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M256 392V100"},null,-1)],v=t({name:"ArrowDown",render:function(t,e){return n(),o("svg",x,m)}}),f={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},b=[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M112 244l144-144l144 144"},null,-1),e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M256 120v292"},null,-1)],_=t({name:"ArrowUp",render:function(t,e){return n(),o("svg",f,b)}}),y=["innerHTML"],j={class:"action-buttons"},C=l({__name:"StoryList",props:{content:{title:"",text:"",url:"",color:""}},setup(t){const l=t;let w=r(""),k=r(0),h=0;const g=t=>{let n=w.value.clientHeight;"down"===t?(h++,h>l.content.length-1&&(h=0)):"up"===t&&(h--,h<0&&(h=l.content.length-1)),k.value=h*n};return(r,h)=>{const x=s("n-icon");return n(),o("div",{class:"slider-container",ref_key:"slider",ref:w},[e("div",{class:"left-slide",style:i({transform:"translateY(-"+u(k)+"px)"})},[(n(!0),o(a,null,c(l.content,((t,e)=>(n(),o("div",{style:i({backgroundImage:`url('${t.url}')`})},null,4)))),256))],4),e("div",{class:"right-slide",style:i({transform:"translateY("+u(k)+"px)",top:100*-(l.content.length-1)+"vh"})},[(n(!0),o(a,null,c(l.content,((r,s)=>(n(),o("div",{style:i({backgroundColor:l.content[t.content.length-s-1].color})},[e("h1",null,d(l.content[t.content.length-s-1].title),1),e("p",{class:"text",innerHTML:l.content[t.content.length-s-1].text},null,8,y)],4)))),256))],4),e("div",j,[e("button",{class:"up-button",onClick:h[0]||(h[0]=t=>g("up"))},[p(x,{component:u(_),size:"20",color:"black"},null,8,["component"])]),e("button",{class:"down-button",onClick:h[1]||(h[1]=t=>g("down"))},[p(x,{component:u(v),size:"20",color:"black"},null,8,["component"])])])],512)}}},[["__scopeId","data-v-474b7ed4"]]),M={class:"story"},H=l({__name:"story",setup(t){w((()=>{l()}));const e=k([]),l=async()=>{let{data:t}=await h();t.data.forEach(((t,n)=>{e[n]={title:t.title,url:g+t.url,text:t.text,color:t.color}}))};return(t,l)=>(n(),o("div",M,[p(C,{content:e},null,8,["content"])]))}},[["__scopeId","data-v-1a1fd3f9"]]);export{H as default};
