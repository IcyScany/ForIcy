<template>
  <div class="time-all">
    <div class="font0">{{ msg }}</div><br>
    <div class="title">感谢冰洁陪灿宇一起走过的</div>
    <div class="timer">
      <div v-for="(param, name) in count_time">
        <div class="title">{{ param }}</div>
        <div class="font1">{{ name }}</div>
      </div>
    </div>

    <p class="font2">&emsp;&emsp;这是灿宇和冰洁的小站,<br>在这里记录了我们一起走过的时光</p>
    <div class="btn-group">
      <div v-for="(page, index) in pages">
        <n-button :color=page.color size="large" @click="GotoPage(page)">
          <p class="font2">{{ page.name }}</p>
        </n-button>
      </div>
    </div>

    <div class="font1">
      powered by
      <n-icon size="20" color="#E91E63">
        <heart />
      </n-icon>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Heart } from "@vicons/ionicons5";
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

onMounted(() => {
  timer()
})

defineProps({
  msg: String,
})

let count_time = reactive({
  Days: 0,
  Hours: 0,
  Minutes: 0,
  Seconds: 0
})

const timer = () => {
  let time = setInterval(() => {
    let start_time = '2019/06/21 17:00:00';
    let now_time = new Date();
    let date3 = now_time.getTime() - new Date(start_time).getTime();
    count_time.Days = Math.floor(date3 / (24 * 3600 * 1000))
    let leave1 = date3 % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
    count_time.Hours = Math.floor(leave1 / (3600 * 1000))
    let leave2 = leave1 % (3600 * 1000)        //计算小时数后剩余的毫秒数
    count_time.Minutes = Math.floor(leave2 / (60 * 1000))
    let leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
    count_time.Seconds = Math.round(leave3 / 1000)
  }, 1000)
}

let pages = [
  { name: '我们的故事', color: "#E91E63", href: '/story' },
  { name: '我们的回忆', color: "", href: '/memory' }
]

const GotoPage = (page) => {
  router.push(page.href)
}

</script>

<style lang="scss" scoped>
.time-all {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
}

.timer {
  padding: 1em;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;

  div {
    margin: 0.2em 0.7em;
  }
}

.title {
  color: #fff;
  font-size: 3.6em;
  line-height: 30px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  margin: 1em 0px;
  letter-spacing: 2px;
  margin-top: 80px;
}

.btn-group {
  display: flex;
  justify-content: center;
  margin: 30px 0 70px 0;

  div {
    margin: 10px 20px;
  }
}
</style>
