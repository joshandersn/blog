<script setup>
defineProps(['id', 'img'])
</script>
<template>
    <UCard style="margin-bottom: 10px;">
        <NuxtLink :to="`/articles/${id}`">
        <div style="display: flex; align-items: center;">
            <div>
                    <slot />
                    <ContentQuery :path="`/articles/${id}`" find="one" v-slot="data">
                        <div style="font-size: 10pt; color: #FFFFFF55;">
                            {{ data.data.date }}
                        </div>
                    </ContentQuery>
                </div>
                <img :src="`img/${img}`" width="250" :alt="id" style="margin-left: auto; border-radius: 5px;" />
            </div>
        </NuxtLink>
    </Ucard>
</template>