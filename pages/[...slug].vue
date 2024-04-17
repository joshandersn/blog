<script lang="ts" setup>
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
      <img src="/img/logo.png" style="height: 70px; margin-top: 15px;" alt="joshandersn logo">
      <UHorizontalNavigation :links="links">
        <template #default="{ link }">
          <span class="group-hover:text-primary relative">{{ link.label }}</span>
        </template>
      </UHorizontalNavigation>
      <UCard>
        <ContentDoc >
          <template #not-found>
            sorry, no pages like that
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
hr {
  margin-top: 15pt;
  margin-bottom: 15pt;
  border-color: #ffffff22;
}
</style>