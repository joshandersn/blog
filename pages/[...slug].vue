<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
const links = [{
  label: 'Home',
  to: '/',
  icon: 'i-heroicons-home'
},
{
  label: 'Blog',
  to: '/articles',
  icon: 'i-heroicons-information-circle'
},
{  
  label: 'About',
  to: '/about',
  icon: 'i-heroicons-information-circle'
}]
</script>

<template>
  <main>
    <UContainer>
      <UHorizontalNavigation :links="links">
        <template #default="{ link }">
          <span class="group-hover:text-primary relative">{{ link.label }}</span>
        </template>
      </UHorizontalNavigation>
      <UCard>
        <ContentDoc />
        <template #footer>
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          >
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
          </UButton>
        </template>
      </UCard>
    </UContainer>
    </main>
  </template>

<style>
a {
  color: #38bdf8;
}
h1 {
  font-weight: bold;
  font-size: 15pt;
  margin-bottom: 10pt;
}
p {
  margin-bottom: 5pt;
}
</style>