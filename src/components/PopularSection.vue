<template>
   <div class="font-sans text-black-primary">
      <h1 class="font-bold text-[34px] text-center">Our Popular <span class="text-grey-primary-100">blog</span>
      </h1>

      <div class="flex flex-col md:flex-row justify-evenly">
         <card-popular v-for="content in popularContents"
            :key=" content.id " :content=" content ">
         </card-popular>
      </div>
   </div>

</template>

<script setup>
import CardPopular from './CardPopular.vue'
import { ref } from 'vue'

const popularContents = ref( [
   { id: 1, dueDate: '1 January 2022', title: 'Make Cozy Space in Your Home', images:'popular-1.svg' },
   { id: 2, dueDate: '21 February 2022', title: 'Story with Minimalist Furnitures', images:'popular-2.svg' }
] )


</script>

<style lang="scss" scoped>
</style>