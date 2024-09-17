<script setup>
defineProps(['route', 'img', 'written'])
</script>
<template>
    <UCard style="margin-bottom: 10px;">
        <NuxtLink :to="`/${route}`">
        <div style="display: flex; align-items: center;">
            <div>
                    <slot />
                    <div style="font-size: 10pt; color: #ffffff55;">
                        {{ written }}
                    </div>
                </div>
                <img :src="`img/${img}`" width="250" :alt="route" style="margin-left: auto; border-radius: 5px;" />
            </div>
        </NuxtLink>
    </Ucard>
</template>