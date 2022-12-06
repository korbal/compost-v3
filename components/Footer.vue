<template>
  <div>

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

</script>

<style scoped>

.router-link-exact-active {
    color: #12b488
  }

</style>