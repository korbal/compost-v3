<template>
  <div>

  <!-- add navbar component here --> 
  <Navbar />



<!-- output page component -->
    
    <div >
      <slot />
    </div>


    
  </div>
</template>

<style scoped>

  .router-link-exact-active {
    color: #12b488
  }

 

</style>