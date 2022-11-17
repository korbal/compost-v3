<template>
  <div>

    <header>
      <nav>
      <NuxtLink to="/">Can I Compost it?</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/items">Items</NuxtLink></li>

        </ul>
      </nav>
    </header>

<!-- output page component -->
    <slot />

  </div>
</template>

<style scoped>

  .router-link-exact-active {
    color: #12b488
  }

</style>