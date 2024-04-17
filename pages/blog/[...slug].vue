<script lang="ts" setup>
const links = [{
  label: 'Home',
  to: '/blog/',
  icon: 'i-heroicons-home'
},
{
  label: 'Blog',
  to: '/blog/articles',
  icon: 'i-heroicons-information-circle'
},
{  
  label: 'About',
  to: '/blog/about',
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
        <ContentDoc >
          <template #not-found>
            sorry no page like that
          </template>
        </ContentDoc>
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