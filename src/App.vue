<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Background from './components/BackgroundHeader.vue'
</script>

<template>
<header>
   <navbar></navbar>
   <background class="absolute top-0 md:right-0 z-0"></background>
   <hero class="relative md:bottom-10 z-10"></hero>
</header>
</template>

<style>
</style>
