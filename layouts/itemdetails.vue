<template>
  <div >
<Navbar />

<Search />


<!-- output page component -->
   <div class="container mx-auto px-10 py-4 max-w-xl">
    <slot />
   </div>
   
  <Footer />
  
  </div>
</template>

<style scoped>

  .router-link-exact-active {
    color: #12b488
  }


</style>