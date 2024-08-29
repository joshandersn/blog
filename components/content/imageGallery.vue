  <script lang="ts" setup>
  defineProps(['img1', 'img2', 'img3', 'img4'])
  const isOpen = ref(false)
  </script>
<template>
  <UCarousel v-slot="item" :items="[img1, img2, img3, img4]" arrows>
    <a target="_blank" :href="item.item">
      <img :src="item.item" height="500" draggable="false">
    </a>
  </UCarousel>
</template>


<style scoped>
img {
  border-radius: 5px;
  margin-right: 5px;
  max-height: 200px;
  margin-bottom: 30px;
  margin-top: 20px;
}
</style>