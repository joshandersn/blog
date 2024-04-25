<script lang="ts" setup>
const props = defineProps(['headerLabel'])
const items = [{
  label: props.headerLabel
}]
</script>
<template>
  <UAccordion :items="items">
    <template #item="{item}">
      <slot />
    </template>
  </UAccordion>
</template>


<style>

</style>