import{_ as S,k as _,c as i,d as c,e as t,F as f,f as b,n as a,g as m,t as x,p as $,j as k,h as w}from"./index-cfc634c0.js";const v=o=>($("data-v-fab1d1df"),o=o(),k(),o),B=["innerHTML"],F={class:"action-buttons"},H=v(()=>t("i",{class:"fas fa-arrow-up"},null,-1)),I=[H],E=v(()=>t("i",{class:"fas fa-arrow-down"},null,-1)),C=[E],L={__name:"Story",setup(o){let l="../../static/Story/";const n=[{title:"有你的日子",color:"#252E33",url:`${l}1.png`,msg:"我这个贪玩的孩子总是尽想着玩了，还是你让我懂得爱情是一起过日子，得学会一起吃苦，快乐的日子只是生活的点缀。<br/><br/>穿着拖鞋走在大街上就有种一起过日子的感觉，好像咱都已经一起生活好一段时间了，穿拖鞋出去也不嫌丢人哈哈哈哈。"},{title:"旅行",color:"#FFB866",url:`${l}2.png`,msg:"这三年我们也一起走过一些地方了，我们去了对方的城市，珠海和深圳，还去了广州，佛山，还去了桂林，开车带你游了阿西里西，真想多去一些像阿西里西一样漂亮的地方。<br/><br />不过还有一些答应带你去的还没去呢，还要一起去云南，一起去新疆，一起去五月天的演唱会..."},{title:"不想你先S",color:"#252E33",url:`${l}3.png`,msg:"你这憨憨跟我在一起后好像变得爱哭了，哭了好多次。那天啥事都没发生你却突然哭了，不知所措的我脑子里过了好几遍我哪里做错了。<br/><br/>结果你居然说：“我不想你先死”......你咋那么憨呀，好好好，那你先...不是，咱还是一起吧，干啥都一起，谁先抛下对方谁就是大傻子。"},{title:"异地",color:"#2A86BA",url:`${l}4.png`,msg:"后来我们在一起了，但不久也高中毕业了，幸运的是，我们并没有分隔太远，我们也开始了我们的异地恋旅程...<br/><br/>后来的故事有快乐，有忍不住掉下的眼泪，有不愉快的争吵，还有我们两个憨憨一起犯傻...<br/><br/>真的太快了，不知不觉我们一起走过了3年了，多希望能早早结束我们的异地恋，可以时刻陪在你身边。"},{title:"在一起",color:"#FFB866",url:`${l}5.png`,msg:"2019/6/21那天我约你出来看电影，但是你并不知道其实我当时对你图谋不轨哈哈哈哈，说是看电影，其实是想告诉你我想和你在一起。"}];let p=_(""),h=_(""),d=_(0);h.value=`${document.documentElement.clientHeight}`;let e=0;const g=u=>{let r=p.value.clientHeight;u==="down"?(e++,e>n.length-1&&(e=0)):u==="up"&&(e--,e<0&&(e=n.length-1)),d.value=e*r};return(u,r)=>(i(),c("div",{class:"slider-container",ref_key:"slider",ref:p},[t("div",{class:"right-slide",style:a({transform:"translateY(-"+m(d)+"px)"})},[(i(),c(f,null,b(n,(s,y)=>t("div",{style:a({backgroundImage:`url('${s.url}')`})},null,4)),64))],4),t("div",{class:"left-slide",style:a({transform:"translateY("+m(d)+"px)",top:-(n.length-1)*100+"vh"})},[(i(),c(f,null,b(n,(s,y)=>t("div",{style:a({backgroundColor:s.color})},[t("h1",null,x(s.title),1),t("p",{class:"msg",innerHTML:s.msg},null,8,B)],4)),64))],4),t("div",F,[t("button",{class:"up-button",onClick:r[0]||(r[0]=s=>g("up"))},I),t("button",{class:"down-button",onClick:r[1]||(r[1]=s=>g("down"))},C)])],512))}},A=S(L,[["__scopeId","data-v-fab1d1df"]]),N={__name:"story",setup(o){return(l,n)=>(i(),c("div",null,[w(A)]))}};export{N as default};
