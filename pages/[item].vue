<template>
  <div>
    <NuxtLink to="/">back to home</NuxtLink>
  {{ myObj.description }}
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
console.log(myObj);



definePageMeta({
  layout: 'itemdetails'
})

</script>

<style scoped></style>
