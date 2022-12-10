<template>
  <div>

  <!-- add navbar component here --> 
  <Navbar />



<!-- output page component -->
    
    <div >
      <slot />
    </div>

<!-- footer -->

<Footer />
    
  </div>
</template>

<script setup>


</script>

<style scoped>

  .router-link-exact-active {
    color: #12b488
  }

 

</style>