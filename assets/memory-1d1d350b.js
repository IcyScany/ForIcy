import{l as e,b as t,c as a,d as n,_ as l,F as o,e as r,q as i,n as s,t as u,k as d,r as c,j as p,a as f,s as v,w as m,g,f as h,h as k,o as _,v as w}from"./index-83e63ad8.js";import{c as y,d as b,b as x}from"./index-d9866f1f.js";const j={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},C=[n("path",{d:"M80 152v256a40.12 40.12 0 0 0 40 40h272a40.12 40.12 0 0 0 40-40V152",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),n("rect",{x:"48",y:"64",width:"416",height:"80",rx:"28",ry:"28",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),n("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M320 304l-64 64l-64-64"},null,-1),n("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 345.89V224"},null,-1)],M=e({name:"ArchiveOutline",render:function(e,n){return t(),a("svg",j,C)}}),I={class:"album-container"},z=["onClick"],A=l({__name:"MemoryAlbum",props:{content:{title:"",actived:!1,url:""}},setup(e){const l=e;return(e,d)=>(t(),a("div",I,[(t(!0),a(o,null,r(l.content,((e,o)=>(t(),a("div",{class:i(["panel",{active:e.actived}]),onClick:e=>(e=>{l.content.forEach(((e,t)=>{e.actived=!1})),l.content[e].actived=!0})(o),style:s({backgroundImage:`url(${e.url})`})},[n("h3",null,u(e.title),1)],14,z)))),256))]))}},[["__scopeId","data-v-973bec40"]]),B={style:{"margin-bottom":"1vh"}},E=l({__name:"UploadTool",setup(e){const a=d(),l=c(new FormData),o=p(""),r=async e=>{let t=e.file.file.type;if(!("image/jpeg"===t||"image/png"===t||"image/jpg"===t||"image/gif"===t))return a.error("请上传jpeg/jpg/png/gif格式的图片!");return e.file.file.size/1024/1024<5?(l.append("file",e.file.file),!1):a.error("图片必须小于5M!")},i=async()=>{l.append("title",o.value);let{data:e}=await y(l);e.data?a.success(e.msg):a.error(e.msg),setTimeout((()=>{location.reload()}),2e3)};return(e,a)=>{const l=f("n-input"),s=f("n-form-item"),u=f("n-form"),d=f("n-icon"),c=f("n-text"),p=f("n-upload-dragger"),_=f("n-upload"),w=f("n-button"),y=f("n-card");return t(),v(y,{class:"upload-box",title:"上传数据"},{default:m((()=>[g(u,null,{default:m((()=>[g(s,{label:"标题"},{default:m((()=>[g(l,{value:o.value,"onUpdate:value":a[0]||(a[0]=e=>o.value=e),placeholder:"请输入标题","keydown.enter.prevent":""},null,8,["value"])])),_:1})])),_:1}),g(_,{"directory-dnd":"","default-upload":!1,onChange:r},{default:m((()=>[g(p,null,{default:m((()=>[n("div",B,[g(d,{size:"40",depth:3},{default:m((()=>[g(h(M))])),_:1})]),g(c,{style:{"font-size":"16px"}},{default:m((()=>[k(" 点击或者拖动图片到该区域来上传 ")])),_:1})])),_:1})])),_:1}),g(w,{disabled:!1,onClick:i},{default:m((()=>[k(" 确认上传 ")])),_:1})])),_:1})}}},[["__scopeId","data-v-5675c372"]]),O={class:"memory"},P=l({__name:"memory",setup(e){_((()=>{C()}));const n=d(),l=p("添加图片"),i=p(!1),s=c([]),y=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?3:6,j=()=>{i.value=!i.value,"添加图片"===l.value?l.value="关闭":l.value="添加图片"},C=async()=>{let{data:e}=await b();if(!e.data)return n.error(e.msg,e.data);e.data.forEach(((e,t)=>{s[t]={title:e.title,url:x+e.url,actived:t%y==0}}))};return(e,n)=>{const d=f("n-button");return t(),a("div",O,[(t(!0),a(o,null,r(parseInt(s.length/h(y))+1,(e=>(t(),v(A,{content:s.slice(h(y)*(e-1),h(y)*e)},null,8,["content"])))),256)),g(d,{size:"",color:"",onClick:j,style:{position:"fixed",right:"1vw",bottom:"1vh"}},{default:m((()=>[k(u(l.value),1)])),_:1}),i.value?(t(),v(E,{key:0})):w("",!0)])}}},[["__scopeId","data-v-39ef21b0"]]);export{P as default};
