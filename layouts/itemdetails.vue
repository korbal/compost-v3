<template>
  <div >
<Navbar />

<!-- output page component -->
   <div class="container mx-auto px-10 py-4 max-w-xl">
    <slot />
   </div>
   
    <footer class="container mx-auto px-10 py-4 flex justify-around border-t-2 w-fit">
      <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/items">Items</NuxtLink></li>
      </ul>
    </footer>

  </div>
</template>

<style scoped>

  .router-link-exact-active {
    color: #12b488
  }

</style>