<template>
  <!-- this is the items page which will be the sitemap -->
  <!-- <div class="grid grid-cols-4 gap-5">
    
    <div v-for="item in items.items">
      <NuxtLink :to="`${item.path}`">{{item.name}}</NuxtLink>
    </div>
    
  </div> -->

  <Head>
    <Title>Compostable Item Database | 400+ Items Listed | CanICompostIt.com</Title>
    <Meta name="description" content="Find out if your waste is compostable with our comprehensive searchable database of 400+ items. Check now at CanICompostIt.com >>" />
    <Meta property="og:title" content="Compostable Item Database | 400+ Items Listed | CanICompostIt.com" />
    <Meta property="og:description" content="Find out if your waste is compostable with our comprehensive searchable database of 400+ items. Check now at CanICompostIt.com >>" />
    <Meta property="og:url" content="https://canicompostit.com/items" />
    <Meta property="og:image" content="../assets/img/composting-og.jpg" />
  </Head>
  <div>
    <div class="overflow-y-auto max-w-md mx-auto">
      <h3 class="text-xl text-center">
        All the items in the database <br> (current number: {{ items.items.length }})
      </h3>
      <div
        v-for="item in items.items"
        class="flex items-center justify-between py-4 px-10 border-b-2"
      >
        <!-- {{ item.name }} -->

        <NuxtLink :to=" '/' + `${item.path}` + '/' " >
          <p>{{ item.name }}</p>
        </NuxtLink>
        
      </div>
    </div>
  </div>
</template>

<script setup>
//get json and destructure it into data AND rename it into items, so items can be used in the template...
const { data: items } = await useFetch(
  "https://script.google.com/macros/s/AKfycbylLKlTRlulUb0x9r9j2Wvxa5W64g49NOT9kOsXR-N6LiPRamqA/exec"
);
console.log(items);
</script>

<style scoped></style>
