<script setup>
defineProps(['id', 'img', 'written'])
</script>
<template>
    <UCard style="margin-bottom: 10px;">
        <NuxtLink :to="`/articles/${id}`">
        <div style="display: flex; align-items: center;">
            <div>
                    <slot />
                    <div style="font-size: 10pt; color: #FFFFFF55;">
                        {{ written }}
                    </div>
                </div>
                <img :src="`img/${img}`" width="250" :alt="id" style="margin-left: auto; border-radius: 5px;" />
            </div>
        </NuxtLink>
    </Ucard>
</template>