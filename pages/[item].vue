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
    <div class="relative flex w-full justify-between">
<p>Category: <span class="bg-green-600 p-1 rounded-xl">{{myObj.category}}</span></p>
<div>black</div>
    </div>
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
