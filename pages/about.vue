<template>
  <div>
    
   
    
    about page

    {{gecisfasz}}

  </div>
</template>

<script setup>

// get data from internal server endpoint called fasz and destructure into gecisfasz
const { gecisfasz } = await $fetch('/api/fasz')

console.log(gecisfasz)


</script>

<style scoped>

</style>