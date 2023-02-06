<template>
  <div class="start-bg">
    <img :src=img_url1 alt="" :style="{ opacity: opa1 }">
    <img :src=img_url2 alt="" :style="{ opacity: opa2 }">
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// let server_url = 'http://43.139.171.246:80/ForIcy/Bg/'
// let img_url1 = ref('http://43.139.171.246:80/ForIcy/Bg/1.png')
// let img_url2 = ref('http://43.139.171.246:80/ForIcy/Bg/2.png')
let server_url = './static/Bg/'
let img_url1 = ref('./static/Bg/1.png')
let img_url2 = ref('./static/Bg/2.png')

let img_num = 6
let index1 = ref(1)
let index2 = ref(0)
let opa1 = ref(1)
let opa2 = ref(0)

onMounted(() => {
  fun2()
})

const fun2 = () => {
  setTimeout(() => {
    opa1.value = 0
    opa2.value = 1
  }, 9000)

  let timer = setInterval(() => {
    opa1.value = 0
    index2.value = (index2.value + 1) % img_num + 1
    img_url2 = `${server_url + index2.value}.png`
    opa2.value = 1
    setTimeout(() => {
      index1.value = (index1.value + 1) % img_num + 1
      img_url1 = `${server_url + index1.value}.png`
      opa1.value = 1
      opa2.value = 0
    }, 6000)
  }, 12000)
}

</script>

<style lang="scss" scoped>
.start-bg {
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  min-height: 900px;
  overflow: hidden;
  position: fixed;
  z-index: -10;

  img {
    top: 0;
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
</style>