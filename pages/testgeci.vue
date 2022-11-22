<template>
  <div>

  <div v-for="item in data.items">
   <NuxtLink>{{item.name}}</NuxtLink>
  </div>

  </div>
</template>

<script setup>

let itemArray = [];

// //get json and destructure it into data AND rename it into items, so items can be used in the template
const { data } = await useFetch('https://script.google.com/macros/s/AKfycbylLKlTRlulUb0x9r9j2Wvxa5W64g49NOT9kOsXR-N6LiPRamqA/exec')

const dataArray = data._value.items

for (const element of dataArray){
  itemArray.push(element)
}



</script>

<style scoped>

</style>