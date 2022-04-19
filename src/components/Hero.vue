<template>
   <div class="mx-auto p-6 md:px-16 md:mx-4 grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-32">
      <div class="font-sans text-black-primary self-center">
         <h1 class="text-4xl font-bold text-center md:text-left">
            Fill your <span class="text-grey-primary-100">space</span> at home
            with <span class="text-grey-primary-100">stylish furniture</span>
         </h1>
         <p class="pt-4 mb-8 text-justify text-black-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui obcaecati libero tenetur, autem aperiam, vel repellat aspernatur reprehenderit, ex illo fugit tempora mollitia praesentium dolorum consectetur neque ea rem soluta.</p>
         <button-secondary textButton="See More >"></button-secondary>
      </div>
      <div>
         <img src="../assets/images/hero.svg" class="w-full" alt="hero">
      </div>
   </div>
</template>

<script setup>
import ButtonSecondary from './ButtonSecondary.vue'
</script>