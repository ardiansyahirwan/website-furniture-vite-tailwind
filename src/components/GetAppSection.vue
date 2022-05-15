<template>
   <div class="grid grid-cols-2 gap-5 relative h-[595px]" id="download">
      <div class="font-sans text-black-primary self-center absolute p-6 md:relative z-20 left-0 text-center">
         <h1 class="text-[34px] font-bold md:text-left">
            <span class="text-black-primary md:text-grey-primary-100">Download</span> furniture order app
            and get the bonus
         </h1>
         <p class="pt-4 mb-6 text-justify text-black-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, ratione possimus? Maxime aut cum vitae praesentium non dolorem adipisci pariatur?</p>
         <div class="flex flex-row justify-center md:justify-start">
            <img src="../assets/images/andoid 2.svg" alt="android">
            <img src="../assets/images/apple 2.svg" alt="apple">
         </div>
      </div>
      <div class="absolute p-6 md:relative z-20 text-center self-center">
         <h1 class="hidden md:flex font-sans font-extrabold text-xl md:text-[34px] md:text-white-primary leading-10 md:w-[250px] md:h-[138px] md:text-left md:absolute md:left-2/3 md:top-1/4">GET 40% OFF FOR EVERY PURCHASE!</h1>
         <div class="relative z-30 bottom-72 left-full md:top-0 md:left-0">
            <img src="../assets/images/hp.svg" class="w-1/2 md:w-auto" alt="handphone">
         </div>
      </div>
   </div>
</template>

<script setup>

</script>

<style scoped>
#download {
   background-image: url(../assets/images/backgroundTrapesium.svg);
   background-size: auto;
   background-repeat: no-repeat;
   background-position-x: right;
}
</style>
