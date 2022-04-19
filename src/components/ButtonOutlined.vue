<template>
   <a href="#"
      class="capitalized border rounded-[20px] border-white-primary md:border-brown-primary px-4 py-2 hover:bg-grey-primary-200 hover:text-black-primary">
      {{ text }}
   </a>
</template>

<script setup>
const props = defineProps( {
   text: String
} )
props.text
</script>