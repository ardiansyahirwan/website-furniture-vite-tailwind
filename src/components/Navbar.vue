<template>
   <nav class="bg-white text-white-primary md:text-brown-primary text-base font-semibold font-sans p-6 md:p-16 md:mx-4 mx-auto">
      <div class="container flex mx-auto justify-between items-center relative">

         <a href="#">
            <img src="../assets/images/logo.svg" width="97" class="w-28 sm:w-28 md:w-24 relative z-10" alt="logo">
         </a>
         <button class="flex md:hidden lg:hidden text-base absolute top-0 right-0 z-50" @click=" toggleMenu() ">
            <MenuAlt4Icon class="h-5 w-5 text-black-primary hover:text-black"></MenuAlt4Icon>
         </button>

         <div class="hidden flex-col md:flex md:flex-row gap-5 p-6 items-center absolute md:static inset-x-0 top-0 z-30 bg-grey-primary-100 md:bg-transparent opacity-90" ref="menuBar">
            <a href="#" class="capitalize md:mr-12"
               v-for="nav in  Navbar "
               :key=" nav.id ">
               {{ nav.item }}
            </a>
            <button-outlined text=' Download '></button-outlined>
         </div>
      </div>
   </nav>
</template>

<script setup>
import { ref } from 'vue'
import ButtonOutlined from './ButtonOutlined.vue'
import {MenuAlt4Icon} from '@heroicons/vue/solid'
const Navbar = ref( [
   { id: 1, item: 'Home' },
   { id: 1, item: 'Service' },
   { id: 1, item: 'Blog' },
] )

const menuBar = ref(null);
const toggleMenu = () =>
{
   menuBar.value.classList.toggle('hidden')
   menuBar.value.classList.toggle('flex')
}

</script>

<style scoped>
</style>