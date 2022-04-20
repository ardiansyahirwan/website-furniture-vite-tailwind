<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import BackgroundHeader from './components/BackgroundHeader.vue'
import GallerySection from './components/GallerySection.vue'
</script>

<template>
   <header>
      <navbar></navbar>
      <background-header class="absolute top-0 md:right-0 z-0"></background-header>
      <hero class="relative md:bottom-10 z-10"></hero>
   </header>
   <main>
      <gallery-section></gallery-section>
   </main>
</template>
