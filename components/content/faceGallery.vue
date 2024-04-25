  <script lang="ts" setup>
  defineProps(['img1', 'img2'])
  </script>
<template>
  <div style="display: flex; overflow:auto;">
    <img :src="`img/${img1}`">
    <img :src="`img/${img2}`">
  </div>
</template>


<style scoped>
img {
  border-radius: 5px;
  margin-right: 5px;
  max-height: 200px;
  margin-bottom: 10px;
}
</style>