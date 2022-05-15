<template>
   <div class="grid md:grid-cols-2 gap-4 md:gap-12 justify-center md:justify-evenly">
      <div>
         <image-galleries></image-galleries>
      </div>
      <div class="font-sans order-first md:order-none md:self-center">
         <h1 class="font-bold text-[34px] text-black-primary pb-3">How to we provides our <span
               class="text-grey-primary-100">services</span>
         </h1>
         <p class="text-base text-black-primary font-sans text-justify pb-3">Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
            Qui, placeat culpa facere nam non pariatur itaque fugit rem officia rerum, perferendis obcaecati corrupti
            nobis quas!</p>

         <div class="flex flex-row items-center gap-4 pb-2" v-for="  item   in   list   " :key=" item.id ">
            <div class="rounded-full bg-brown-primary w-3 h-3"></div>
            <p>{{ item.name }}</p>
         </div>
      </div>
   </div>
</template>

<script setup>
import ImageGalleries from './ImageGalleries.vue'
import { ref } from 'vue'
const list = ref( [
   { id: 1, name: 'Elegant' },
   { id: 2, name: 'Minimalist' },
   { id: 3, name: 'Stylish' },
] )
</script>