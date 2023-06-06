<template>
  <Head> </Head>

  <div>{{ item_from_api.description }}</div>
</template>

<script setup>
let items = [];
const { item } = useRoute().params;
const { data } = await useAsyncData("items", () =>
  $fetch(
    `https://script.google.com/macros/s/AKfycbylLKlTRlulUb0x9r9j2Wvxa5W64g49NOT9kOsXR-N6LiPRamqA/exec?itemName=${item}`
  )
);

console.log("datageci: ");
console.log(data._value.items);
items = data._value.items;

console.log("items geci:");
console.log(items);

const item_from_api = useNuxtApp().payload.data["items"];
console.log("itemzgeci: ");
console.log(item_from_api.name);

//const myObj = myArray.find((myObj) => myObj.path === item);

// DESCRIPTION FORMATTING
// splitting sentences into paragraphs for better reading. adding a "." at the end of each sentence to make it a proper sentence. " remove the last "." from the last sentence.
// const sentences = myObj.description
//   .split(".")
//   .map((sentence) => sentence + ".");
// sentences[sentences.length - 1] = sentences[sentences.length - 1].slice(0, -1);

// pick 3 random items from myArray and put them in an object. use this object to generate the links to the other items. use only the path and name properties.

// const randomItems = Array.from({length: 3}, () => myArray[Math.floor(Math.random() * myArray.length)]);

definePageMeta({
  layout: "itemdetails",
});

useHead({
  script: [
    // convertkit javascript

    {
      async: true,
      src: "https://ot-ev-ot-nyelv.ck.page/0a0a04ec56/index.js",
      "data-uid": "0a0a04ec56",
    },
    //sharethis.com javascript
    {
      type: "text/javascript",
      src: "https://platform-api.sharethis.com/js/sharethis.js#property=6391f7a98fb8b6001abbbcce&product=sop",
      async: "async",
    },
    // addthis.com javascript
    // {
    //   'type': 'text/javascript',
    //   'src': '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6396f97748f3bf89',
    // }
  ],
});
</script>

<style scoped>
.brown {
  background-color: #5e2f00;
}

.catref {
  font-size: 1rem;
}

.convertkit {
  /* add dashed border */
  border: 2px dashed #e53e3e;
  /* add rounded corners */
  border-radius: 0.25rem;
  /* add some padding */
  padding: 0.5rem 1rem;
}
</style>
