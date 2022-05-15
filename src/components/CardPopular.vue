<template>
   <div class="flex flex-col items-start p-7 md:p-10">
      <img :src="getImagesUrl(content.images)" alt="img-popular" class="md:w-auto md:h-auto rounded-xl">
      <p class="text-base pt-7 pb-3">{{ content.dueDate }}</p>
      <h1 class="text-[26px] font-bold capitalize pb-3">{{ content.title }}</h1>
      <p class="text-justify text-lg pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
         incidunt
         enim
         consequatur accusamus nisi
         commodi aut, sunt harum veniam illum quia mollitia dignissimos, aliquam ut!</p>
      <button-secondary textButton="See More >"></button-secondary>
   </div>
</template>

<script setup>
import ButtonSecondary from './ButtonSecondary.vue'

const props = defineProps( {
   content: Array
} )

const getImagesUrl = (images)=>{
    return new URL(`../assets/images/`+images, import.meta.url).href
}
</script>

<style lang="scss" scoped>
</style>