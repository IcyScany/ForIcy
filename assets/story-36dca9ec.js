import{_ as l,k as t,c as s,d as n,e,F as r,f as a,n as o,g as u,t as c,p as i,j as d,h as g}from"./index-9c737b62.js";const p=l=>(i("data-v-cdd43021"),l=l(),d(),l),b=["innerHTML"],m={class:"action-buttons"},v=[p((()=>e("i",{class:"fas fa-arrow-up"},null,-1)))],f=[p((()=>e("i",{class:"fas fa-arrow-down"},null,-1)))],h=l({__name:"Story",setup(l){let i="../static/Story/";const d=[{title:"有你的日子",color:"#252E33",url:`${i}1.png`,msg:"我这个贪玩的孩子总是尽想着玩了，还是你让我懂得爱情是一起过日子，得学会一起吃苦，快乐的日子只是生活的点缀。<br/><br/>穿着拖鞋走在大街上就有种一起过日子的感觉，好像咱都已经一起生活好一段时间了，穿拖鞋出去也不嫌丢人哈哈哈哈。"},{title:"旅行",color:"#FFB866",url:`${i}2.png`,msg:"这三年我们也一起走过一些地方了，我们去了对方的城市，珠海和深圳，还去了广州，佛山，还去了桂林，开车带你游了阿西里西，真想多去一些像阿西里西一样漂亮的地方。<br/><br />不过还有一些答应带你去的还没去呢，还要一起去云南，一起去新疆，一起去五月天的演唱会..."},{title:"不想你先S",color:"#252E33",url:`${i}3.png`,msg:"你这憨憨跟我在一起后好像变得爱哭了，哭了好多次。那天啥事都没发生你却突然哭了，不知所措的我脑子里过了好几遍我哪里做错了。<br/><br/>结果你居然说：“我不想你先死”......你咋那么憨呀，好好好，那你先...不是，咱还是一起吧，干啥都一起，谁先抛下对方谁就是大傻子。"},{title:"异地",color:"#2A86BA",url:`${i}4.png`,msg:"后来我们在一起了，但不久也高中毕业了，幸运的是，我们并没有分隔太远，我们也开始了我们的异地恋旅程...<br/><br/>后来的故事有快乐，有忍不住掉下的眼泪，有不愉快的争吵，还有我们两个憨憨一起犯傻...<br/><br/>真的太快了，不知不觉我们一起走过了3年了，多希望能早早结束我们的异地恋，可以时刻陪在你身边。"},{title:"在一起",color:"#FFB866",url:`${i}5.png`,msg:"2019/6/21那天我约你出来看电影，但是你并不知道其实我当时对你图谋不轨哈哈哈哈，说是看电影，其实是想告诉你我想和你在一起。"}];let g=t(""),p=t(""),h=t(0);p.value=`${document.documentElement.clientHeight}`;let y=0;const _=l=>{let t=g.value.clientHeight;"down"===l?(y++,y>d.length-1&&(y=0)):"up"===l&&(y--,y<0&&(y=d.length-1)),h.value=y*t};return(l,t)=>(s(),n("div",{class:"slider-container",ref_key:"slider",ref:g},[e("div",{class:"right-slide",style:o({transform:"translateY(-"+u(h)+"px)"})},[(s(),n(r,null,a(d,((l,t)=>e("div",{style:o({backgroundImage:`url('${l.url}')`})},null,4))),64))],4),e("div",{class:"left-slide",style:o({transform:"translateY("+u(h)+"px)",top:100*-(d.length-1)+"vh"})},[(s(),n(r,null,a(d,((l,t)=>e("div",{style:o({backgroundColor:l.color})},[e("h1",null,c(l.title),1),e("p",{class:"msg",innerHTML:l.msg},null,8,b)],4))),64))],4),e("div",m,[e("button",{class:"up-button",onClick:t[0]||(t[0]=l=>_("up"))},v),e("button",{class:"down-button",onClick:t[1]||(t[1]=l=>_("down"))},f)])],512))}},[["__scopeId","data-v-cdd43021"]]),y={__name:"story",setup:l=>(l,t)=>(s(),n("div",null,[g(h)]))};export{y as default};
