<template>
  <div class="all">
    <Album />
  </div>
</template>

<script setup>
import Album from '../../components/Album.vue'
</script>

<style lang="scss" scoped>
.all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>