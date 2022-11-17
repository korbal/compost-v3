<template>
  <div>

    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/">Can I Compost it?</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/items" class="btn">Items</NuxtLink></li>

        </ul>
      </nav>
    </header>

<!-- output page component -->
    
    <div class="container mx-auto p-4">
      <slot />
    </div>
    
  </div>
</template>

<style scoped>

  .router-link-exact-active {
    color: #12b488
  }

</style>