<template>
  <div>
    <p>item details for {{ item }}</p>
  </div>
</template>

<script setup>
// item must match the [].vue page name here
const { item } = useRoute().params;

//adding the itemdetails.vue layout to these pages

definePageMeta({
  layout: 'itemdetails'
})

</script>

<style scoped></style>
