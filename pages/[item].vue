<template>
  <div>
    <NuxtLink to="/">back to home</NuxtLink>
  {{ myObj.description }}
 </div>
</template>

<script setup>
// item must match the [].vue page name here
// const { item } = useRoute().params;

// const {item } = defineProps(['item']);

//adding the itemdetails.vue layout to these pages

const {item} = useRoute().params;

const itemz = useNuxtApp().payload.data['items'];
const myArray = itemz.items;

const myObj = myArray.find((myObj) => myObj.path === item);
console.log(myObj);


definePageMeta({
  layout: 'itemdetails'
})

</script>

<style scoped></style>
