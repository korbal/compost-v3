<template>
  <div>
  <div class="content">
    <div class="max-w-md mx-auto">
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden shadow">
      <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    <input
    id="searchbox"
     v-model="input"
     @input="input = $event.target.value"
     placeholder="start typing to find out..."
     type="text"
     class="rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
     
   />
  </div>
  <div
    
    v-show="input.length !=0"
    v-for="item in filteredList()"
    :key="item.id"
    class="item-class item-bg rounded-lg w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline drop-shadow-lg mb-1 mt-1"
  >

  <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden shadow px-10">
  
  <NuxtLink :to="`${data.items[`${item.id}`-1].path}`" :geci="items">
        <p>{{ item.name }}</p>
  </NuxtLink>
  </div>  
    
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

<style scoped>

.content {
  margin-top: 5vh
}

/* .item-bg {
  background-color: #f7fafc;
  border-radius: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  transition: all 0.2s ease-in-out;
  
} */

.item-bg:hover {
  /* background-color: #edf2f7; */
  cursor: pointer;
}

item-class {
  background-color: #f7fafc;
  border-radius: 0.25rem;
  margin-bottom: 10.5rem;
  padding: 05.rem;
  transition: all 0.2s ease-in-out;
  
}

</style>