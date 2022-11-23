<template>
  <div>
    
    <input
    id="searchbox"
     v-model="input"
     @input="input = $event.target.value"
     placeholder="start typing to find out..."
     type="text"
   />
  <div
    
    v-show="input.length !=0"
    v-for="item in filteredList()"
    :key="item.id"
    class="item-class item-bg"
  >

  <NuxtLink :to="`${data.items[`${item.id}`-1].path}`" :geci="items">
        <p>{{ item.name }} {{item.id}}</p>
  </NuxtLink>
    
    
  </div>
  <div
    v-if="input &&!filteredList().length"
    class="item-bg error"
  >


  <NuxtLink :to="`/suggest`" :item="input">
       
      <p>No results found! Tap to suggest...</p>
    </NuxtLink>

    
  </div>

  </div>
</template>

<script setup>

let input = ref("");
let items = [];

const { data } = await useAsyncData('items', () =>
  $fetch(
    'https://script.google.com/macros/s/AKfycbylLKlTRlulUb0x9r9j2Wvxa5W64g49NOT9kOsXR-N6LiPRamqA/exec'
  )
);

items = data._value.items;

function filteredList() {
  return items.filter((item) =>
    item.name.toLowerCase().includes(input.value.toLowerCase())
  );
}

</script>

<style scoped></style>