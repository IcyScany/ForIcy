<template>
  <div class="slider-container" ref="slider">
    <!-- 左侧图 -->
    <div class="left-slide" :style="{ transform: 'translateY(-' + distance + 'px)' }">
      <div v-for="(item, index) in content" :style="{ backgroundImage: `url('${item.url}')` }"></div>
    </div>

    <!-- 右侧图 -->
    <div class="right-slide"
      :style="{ transform: 'translateY(' + distance + 'px)', top: -(content.length - 1) * 100 + 'vh' }">
      <div v-for="(item, index) in content" :style="{ backgroundColor: item.color }">
        <h1>{{ item.title }}</h1>
        <p class="msg" v-html="item.msg"></p>
      </div>
    </div>

    <div class="action-buttons">
      <button class="up-button" @click="changeSlide('up')">
        <i class="fas fa-arrow-up"></i>
      </button>
      <button class="down-button" @click="changeSlide('down')">
        <i class="fas fa-arrow-down"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

let server_url = './static/Story/'

const content = [
  { title: '平凡的一天', color: '#1e272e', url: `${server_url}1.png`, msg: 
  '&emsp;我这个贪玩的孩子总是尽想着玩了，跟你一起谈恋爱总是想着带你去哪好玩的地方耍。但爱情是一起过日子，得学会一起吃苦，一生有几十年呢，快乐的日子再多也不过是生活的点缀，咱大部分时间不过是穿着拖鞋游大街，而不是去哪个景点到处瞎逛。<br/><br/>&emsp;穿着拖鞋走在大街上有种一起过了好久日子的感觉，好像咱都已经在一起生活好长一段时间了（穿拖鞋出去也不嫌丢人哈哈哈哈），以后跟你过日子就是这个样子啊，我脸皮这么薄，怪不好意思的...<br/><br/>&emsp;期待与你度过平凡的每一天，每一天都与你虚度着年华^-^'
  },
  { title: '不想你先S', color: '#348ac7', url: `${server_url}2.png`, msg: 
    '&emsp;你这憨憨跟我在一起后好像变得爱哭了，哭了好多次，记得刚上大学每次去找你玩分开的时候你都会哭得稀里哗啦得（现在都不会了，都不会舍不得我了，哇呜呜呜）。<br/><br/>&emsp;有一天我们在一起，啥事都没发生，但是你却突然哭了，不知所措的我在脑子里过了好几遍：“我是不是又哪里没做好惹冰洁生气了？冰洁是不是又想起之前我做过的坏事了？是不是因为我......？待会该怎么哄她呀...”。<br/><br/>&emsp;想了半天，结果你居然说：“我不想你先死”......哈哈哈哈，你咋那么憨呀，好好好，那你先...不是，那咱还是一起吧，干啥都要一起，谁先抛下对方谁就是大傻子。'
  },
  { title: '旅行的意义', color: '#e8935b', url: `${server_url}3.png`, msg: 
  '&emsp;这三年我们一起走过了许多地方，我们去了对方的城市，珠海和深圳，看了日月贝，逛了水母馆...还去了广州去看了广州塔，游了北京街，去了佛山吃好吃的（鱼皮...踩坑了），还去桂林游山玩水（想起来就后悔没去阳朔...），还开车带你去阿西里西玩，我们的第一次自驾游真的好累呀，但真的很值得很开心，嘿嘿，真想多去一些像阿西里西一样漂亮的地方。<br/><br/>&emsp;还有一些答应带你去的还没去呢，还要一起去云南，一起去新疆，一起去看五月天的演唱会...之后的旅行一定会很快乐，很不一样的，至少旅行结束之后不再会是告别了。' 
  },
  { title: '异地', color: '#64b3e4', url: `${server_url}4.png`, msg: 
  '&emsp;后来我们在一起了，在校园里躲躲藏藏地谈了一年多的恋爱。不久我们迎来了高中毕业，幸运的是，我们并没有分隔太远，你在珠海，我在深圳。进入大学，也开始了我们的异地恋之旅...<br/><br/>&emsp;后来我们之间的故事有快乐的时候，有时候也会有忍不住掉下的眼泪，还有些不那么愉快的争吵，也有我们两个憨憨一起犯傻的时候...<br/><br/>&emsp;真的太快了，不知不觉我们一起走过了3年了，多希望能早早结束我们的异地恋，可以时刻陪在你身边，不想再一次次地靠近你，又一次次地远离你...' },
  { title: '在一起', color: '#4b79a1', url: `${server_url}5.png`, msg: 
  '&emsp;2019/6/21，那天我们约好一起去电影院看千与千寻，这也是我们第一次一起去看电影，但是你并不知道其实我对你“图谋不轨”哈哈哈哈。<br><br>&emsp;电影院里你看得很认真，但其实我的心思早就飞出动画了，我心里一直在预想着如何对你说，嘴笨的我最后还是选择了最直接的方式：冰洁，我们在一起吧！也不知道你当时是什么心情，没有吓到你吧...'
 },
]

let slider = ref('')
let clientHeight = ref('')
let distance = ref(0)
clientHeight.value = `${document.documentElement.clientHeight}`

let activeSlideIndex = 0

const changeSlide = (direction) => {
  let sliderHeight = slider.value.clientHeight

  if (direction === 'down') {
    activeSlideIndex++
    if (activeSlideIndex > content.length - 1) {
      activeSlideIndex = 0
    }
  } else if (direction === 'up') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = content.length - 1
    }
  }
  distance.value = activeSlideIndex * sliderHeight
  // top = `-${(content.length - 1) * 100}vh`
}
</script>

<style lang="scss" scoped>
.msg {
  margin: 0 50px;
  font-family: serif;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
}

.slider-container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.right-slide {
  height: 100%;
  left: 65%;
  width: 35%;
  position: absolute;
  top: 0;

  transition: transform 0.5s ease-in-out;
}

.right-slide>div {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.right-slide h1 {
  font-size: 40px;
  margin-bottom: 10px;
  margin-top: -30px;
}

.left-slide {
  height: 100%;
  position: absolute;
  top: 0;
  width: 65%;
  left: 0;
  transition: transform 0.5s ease-in-out;
}

.left-slide>div {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
}

button {
  background-color: #fff;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 16px;
  padding: 15px;
}

button:hover {
  color: #222;
}

button:focus {
  outline: none;
}

.slider-container .action-buttons button {
  position: absolute;
  left: 65%;
  top: 50%;
  z-index: 100;
}

.slider-container .action-buttons .down-button {
  transform: translateY(100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.slider-container .action-buttons .up-button {
  transform: translateX(-100%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>