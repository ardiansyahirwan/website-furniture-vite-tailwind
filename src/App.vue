<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import BackgroundHeader from './components/BackgroundHeader.vue'
import GallerySection from './components/GallerySection.vue'
import PopularSection from './components/PopularSection.vue'
import GetAppSection from './components/GetAppSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
   <header>
      <navbar></navbar>
      <background-header class="absolute top-0 md:right-0 z-0"></background-header>
      <hero class="relative md:bottom-10 z-10"></hero>
   </header>
   <main>
      <gallery-section class="mx-auto p-6 md:px-16 md:py-44 md:mx-4"></gallery-section>
      <popular-section class="mx-auto p-6 md:px-16 md:pb-36 md:mx-4"></popular-section>
      <get-app-section class="mx-auto p-6 md:px-16 md:pb-10 md:mx-4 bg-grey-primary-200">
      </get-app-section>
   </main>
   <Footer class="mx-auto p-6 md:px-16 md:py-36 md:mx-4"></Footer>
</template>
