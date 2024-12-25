<script lang="ts" setup>
const links = [{
  label: 'Home',
  to: '/',
  icon: 'i-heroicons-information-circle'
},
{
  label: 'Blog',
  to: '/articles',
  icon: 'i-heroicons-newspaper'
},
{  
  label: 'Portfolio',
  to: '/portfolio',
  icon: 'i-heroicons-photo'
},
{  
  label: 'About',
  to: '/about',
  icon: 'i-heroicons-user'
}]
</script>

<template>
  <main>
    <UContainer>
      <img src="/img/KBlogo.png" style="max-height: 100px; margin-top: 15px;" alt="joshandersn logo">
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
        <template #footer>
          <span class="subtext">
            Kickbutton Games<br>
            kickbuttongames@gmail.com<br>
            +1 (580) 860-5495<br>
            Website made by yours truly.<br>
          </span>
        </template>
      </UCard>
    </UContainer>
    </main>
  </template>

<style>
a {
  color: #3b82f6;
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
  border-color: #00000022;
}
.subtext {
  font-size: 10pt;
  line-height: 15pt;
  color: #ffffff88;
  display: flex;
}
img[alt="my-face"] {
  max-width: 400px;
  border-radius: 5px;
}
</style>