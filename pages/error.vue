<template>
  <div class="mt-7 max-w-sm mx-auto text-center">
      <p class="mt-7 text-7xl font-bold">{{error.statusCode}}</p>
      <p class="mt-7 text-6xl"> Ooooopsss...</p>
      <p class="mt-7 text-2xl">{{error.message}}</p>
  </div>
</template>

<script setup>
defineProps(['error'])

</script>

<style scoped>

</style>