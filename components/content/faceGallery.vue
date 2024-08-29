  <script lang="ts" setup>
  defineProps(['img1'])
  </script>
<template>
  <div style="display: flex; overflow:none;">
    <img :src="`img/${img1}`">
  </div>
</template>


<style scoped>
img {
  border-radius: 5px;
  margin-right: 5px;
  max-height: 400px;
  margin-bottom: 20px;
  margin-top: 30px;
}
</style>