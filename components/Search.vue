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

  <NuxtLink :to="`${data.items[`${item.id}`-1].path}`">
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  padding: 0;
  padding-top: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

input {
  display: block;
  width: 350px;
  margin: 20px;
  padding: 10px 45px;
  background: white url("../assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item-bg {
  width: 350px;
  margin: 0 5px 5px 0px;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.item-class {
  /* background-color: rgb(97, 62, 252); */
  background-color: #5aab49;
  cursor: pointer;

}

a {
    color: white;
    text-decoration: none;
}

.error {
  background-color: tomato;
}

#searchbox {
  margin-top: 30vh;
  margin-right: auto;
  margin-left: auto;
  
}
</style>