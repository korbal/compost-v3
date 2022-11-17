<template>
  <div>

    <header>
      <nav>
      <NuxtLink to="/items">Go back to Items (sitemap page)</NuxtLink>
        
      </nav>
    </header>

<!-- output page component -->
    <slot />

    <footer>
      <ul>
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