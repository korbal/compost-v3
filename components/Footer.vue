<template>
  <div>
    <div class="sharethis-inline-share-buttons mb-4"></div>  

    <footer class="container mx-auto px-10 py-4 flex justify-around border-t-2 w-fit">
      <ul class="flex gap-4 text-gray-400">
          <li><NuxtLink to="/" active-class="active">Home</NuxtLink></li>
          <li><NuxtLink to="/about" active-class="active">About</NuxtLink></li>
          <li><NuxtLink to="/items" active-class="active">All Items</NuxtLink></li>
          
      </ul>

      
    </footer>

    


  </div>
</template>

<script setup>

useHead({
  script: [
    { src: 'https://platform-api.sharethis.com/js/sharethis.js#property=6391df314c319700156560eb&product=inline-share-buttons&source=platform', 
    async: true },
  ],

})

</script>

<style scoped>

.router-link-exact-active {
    color: #12b488
  }

</style>