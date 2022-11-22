
<template><!-- this is the items page which will be the sitemap -->
  <div class="grid grid-cols-4 gap-5">
    
    <div v-for="item in items.items">
      <NuxtLink :to="`${item.path}`">{{item.name}}</NuxtLink>
    </div>
    
  </div>
</template>

<script setup>


  //get json and destructure it into data AND rename it into items, so items can be used in the template...
  const { data: items } = await useFetch('https://script.google.com/macros/s/AKfycbylLKlTRlulUb0x9r9j2Wvxa5W64g49NOT9kOsXR-N6LiPRamqA/exec')

    

</script>

<style scoped>

</style>