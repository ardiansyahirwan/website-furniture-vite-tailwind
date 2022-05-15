<template>
   <div class="grid md:grid-cols-4 gap-5 md:gap-24 font-sans text-sm">
      <div>
         <img src="../assets/images/logo.svg" class="mb-5" alt="logo">
         <p>50 New Town Street, V2 5NW, Plastian, USA.</p>
         <p>Costumer Service : support@interior.com</p>
      </div>

      <div v-for="foo in footer" :key="foo.id">
         <h2 class="font-bold pb-3 text-base">{{ foo.title }}</h2>
         <div v-for="item in foo.items" :key="item.id">
            <p class="pb-[6px]">{{ item.item }}</p>
         </div>
      </div>

      <div>
         <h2 class="font-bold pb-3 text-base">Contact Us</h2>
         <div class="grid grid-cols-4 md:gap-4">
            <img src="../assets/images/icons/instagram.svg" alt="Instagram">
            <img src="../assets/images/icons/facebook.svg" alt="Facebook">
            <img src="../assets/images/icons/twitter.svg" alt="Twitter">
            <img src="../assets/images/icons/email.svg" alt="Email">
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";

const footer = ref([
   {
      id:1, title:'Support', items:[
         {
            id:1,
            item:'Privacy & Policy'
         },
         {
            id:2,
            item:'Term & Conditions'
         },
         {
            id:3,
            item:'Support System'
         },
      ]
   },
   {
      id:2, title:'Our Services', items:[
         {
            id:1,
            item:'About us'
         },
         {
            id:2,
            item:'Design Services'
         },
      ]
   }
])
</script>

<style scoped>
</style>