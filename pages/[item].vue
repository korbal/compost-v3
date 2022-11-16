<template>
  <div>
    <p>item details for {{ item }}</p>
  </div>
</template>

<script setup>
// item must match the [].vue page name here.
  const { item } = useRoute().params

</script>

<style scoped>

</style>