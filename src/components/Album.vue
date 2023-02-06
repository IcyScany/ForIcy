<template>
  <div class="container">
    <img src="../../static/Ablum/13.jpg" alt="">
    <div class="panel" v-for="(items, index) in content" @click="show(index)" :class="{ 'active': items.actived.value }"
      :style="{ backgroundImage: `url(${items.img_url})` }">
      <h3>{{ items.title }}</h3>
    </div>
  </div>

  <div class="container">
    <img src="../../static/Ablum/14.jpg" alt="">
    <div class="panel" v-for="(items, index) in content2" @click="show2(index)" :class="{ 'active': items.actived.value }"
      :style="{ backgroundImage: `url(${items.img_url})` }">
      <h3>{{ items.title }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let server_url = './static/Ablum/'

const content = [
  { title: '一起坐在海边吹海风', actived: ref(true), img_url: `${server_url}1.jpg` },
  { title: '小兔子滴妈妈', actived: ref(false), img_url: `${server_url}2.jpg` },
  { title: '小兔子滴爸爸', actived: ref(false), img_url: `${server_url}3.jpg` },
  { title: '抱抱~', actived: ref(false), img_url: `${server_url}4.jpg` },
  { title: '在晴天的海边，一起爱的魔力转圈圈~', actived: ref(false), img_url: `${server_url}5.jpg` },
  { title: '亲亲~', actived: ref(false), img_url: `${server_url}6.jpg` },
]

const content2 = [
  { title: '光着脚丫感受大海', actived: ref(true), img_url: `${server_url}7.jpg` },
  { title: '两蜘蛛', actived: ref(false), img_url: `${server_url}8.jpg` },
  { title: '两个憨憨的迷惑行为', actived: ref(false), img_url: `${server_url}9.jpg` },
  { title: '阿西里西~阿西里西~', actived: ref(false), img_url: `${server_url}10.jpg` },
  { title: '赶地铁呀呀呀', actived: ref(false), img_url: `${server_url}11.jpg` },
  { title: '坐公交呀呀呀', actived: ref(false), img_url: `${server_url}12.jpg` },
]

const show = (index) => {
  content.forEach((items, index) => {
    items.actived.value = false
  })
  content[index].actived.value = true
}

const show2 = (index) => {
  content2.forEach((items, index) => {
    items.actived.value = false
  })
  content2[index].actived.value = true
}

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  width: 90vw;
  height: 100vh;

  img {
    // top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: bottom;
    transition: all 2.5s linear;
    filter: blur(2px); // 毛玻璃效果
  }
}

.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: all 700ms ease-in;
}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex: 5;
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}

@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
</style>