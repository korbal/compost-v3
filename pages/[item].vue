<template>
  <div>
    
    <!-- Whether it's compostable -->
    <h2 class="answer text-4xl text-center"> {{myObj.isCompostable}}</h2>
    
    <!-- Subheading -->
    <h3 class="text-xl text-center">You can put <span class="italic">{{myObj.name}}</span> into your composting bin!</h3>
    
    <!-- Description of the item -->
    <br>
    <p class="text-gray-700">{{ myObj.description }}</p>
  
    <!-- Reference and category -->
    <div class="relative flex w-full justify-between mt-3 text-gray-400 text-sm">
      <p>
        <div class="group relative inline-block  hover:text-red-500 duration-300">
            Category:
            <!-- Tooltip text here -->
            <span
                class="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">You have to have a good balance of green and brown compostables. Learn more here.</span>
        </div>
        <span class="bg-green-400 text-white rounded-xl ml-1 px-2 pb-1">{{myObj.category}}</span></p>


        <div><NuxtLink :to="`${myObj.reference}`" target="_blank">Reference</NuxtLink></div>
    </div>
    <!-- Reference and category end -->

 </div>
</template>

<script setup>
let items = [];
const {item} = useRoute().params;



const { data } = await useAsyncData('items', () =>
  $fetch(
    'https://script.google.com/macros/s/AKfycbylLKlTRlulUb0x9r9j2Wvxa5W64g49NOT9kOsXR-N6LiPRamqA/exec'
  )
);

items = data._value.items;


const itemz = useNuxtApp().payload.data['items'];
const myArray = itemz.items;

const myObj = myArray.find((myObj) => myObj.path === item);




definePageMeta({
  layout: 'itemdetails'
})



</script>

<style scoped></style>
