  <script lang="ts" setup>
  defineProps(['img1'])
  </script>
<template>
  <div style="display: flex; overflow:auto;">
    <img :src="`img/${img1}`">
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