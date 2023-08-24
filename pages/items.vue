<template>
  <!-- this is the items page which will be the sitemap -->
  <!-- <div class="grid grid-cols-4 gap-5">
    
    <div v-for="item in items.items">
      <NuxtLink :to="`${item.path}`">{{item.name}}</NuxtLink>
    </div>
    
  </div> -->

  <Head>
    <Title
      >Compostable Item Database | 400+ Items Listed | CanICompostIt.com</Title
    >
    <Meta
      name="description"
      content="Find out if your waste is compostable with our comprehensive searchable database of 400+ items. Check now at CanICompostIt.com >>"
    />
    <Meta
      property="og:title"
      content="Compostable Item Database | 400+ Items Listed | CanICompostIt.com"
    />
    <Meta
      property="og:description"
      content="Find out if your waste is compostable with our comprehensive searchable database of 400+ items. Check now at CanICompostIt.com >>"
    />
    <Meta property="og:url" content="https://canicompostit.com/items" />
    <Meta property="og:image" content="../assets/img/composting-og.jpg" />
  </Head>
  <div>
    <div class="overflow-y-auto max-w-md mx-auto">
      <h3 class="text-xl text-center">
        All the items in the database <br />
        (current number: {{ items.items.length }})
      </h3>
      <p class="text-center text-sm">
        Click on an item to find out more about it
      </p>
      <div
        class="flex flex-row items-center justify-between pt-4 px-10 border-b-2 font-bold"
      >
        <div>
          <p>Item</p>
        </div>
        <div>
          <p>Compostable?</p>
        </div>
      </div>

      <!-- loop through the items and display them -->

      <NuxtLink
        v-for="item in items.items"
        :to="'/' + `${item.path}` + '/'"
        class="block"
        key="item.id"
      >
        <div
          class="flex flex-row items-center justify-between px-10 pt-4 border-b-2 hover:bg-gray-100"
        >
          <div class="flex-grow">
            <p class="text-blue-500 hover:text-blue-700">{{ item.name }}</p>
          </div>
          <div>
            <p>{{ item.isCompostable }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
//get json and destructure it into data AND rename it into items, so items can be used in the template...
const { data: items } = await useFetch(
  "https://script.google.com/macros/s/AKfycbylLKlTRlulUb0x9r9j2Wvxa5W64g49NOT9kOsXR-N6LiPRamqA/exec?api_key=5eggFasz"
);
console.log(items);
</script>

<style scoped></style>
