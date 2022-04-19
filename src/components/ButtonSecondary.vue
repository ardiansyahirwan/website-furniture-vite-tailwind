<template>
   <a href="#"
      class="border border-grey-primary-100 capitalized rounded-[5px] font-semibold bg-grey-primary-200 text-grey-primary-100 px-4 py-2 hover:bg-grey-primary-200 hover:text-black-primary">
      {{ textButton }}
   </a>
</template>

<script setup>
const props = defineProps( {
   textButton: String
} )
props.textButton
</script>