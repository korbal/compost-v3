<template>
  <Head>
    <Title
      >Can You put {{ myObj.name }} in the compost bin? Find out here!</Title
    >
    <Meta
      name="description"
      :content="
        myObj.description.split('.').slice(0, 1).join('.') +
        '. >> Tap here to find out more!'
      "
    />
    <Meta
      property="og:title"
      :content="
        'Can you put ' + myObj.name + ' in the compost bin? Find out here!'
      "
    />
    <Meta
      property="og:description"
      :content="
        myObj.description.split('.').slice(0, 1).join('.') +
        '. >> Tap here to find out more!'
      "
    />
    <Meta
      property="og:url"
      :content="'https://canicompostit.com/' + myObj.path"
    />
    <Meta property="og:image" content="../assets/img/composting-og.jpg" />
  </Head>

  <div>
    <!-- Whether it's compostable -->
    <h1 class="text-4xl text-center">
      Can I put <span class="italic">{{ myObj.name }}</span> in my compost bin?
    </h1>
    <br />
    <h2 class="answer text-4xl text-center font-bold">
      {{ myObj.isCompostable }}
    </h2>
    <br />

    <h3 v-if="myObj.isCompostable.includes('🎉')" class="text-xl text-center">
      You can put <span class="italic">{{ myObj.name }}</span> into your
      composting bin!
    </h3>

    <h3
      v-else-if="myObj.isCompostable.includes('✋🏼')"
      class="text-xl text-center"
    >
      You can't put <span class="italic">{{ myObj.name }}</span> into your
      composting bin!
    </h3>

    <h3 v-else class="text-xl text-center">
      You probably shouldn't put
      <span class="italic">{{ myObj.name }}</span> into your composting bin!
    </h3>

    <!-- banner embed -->
    <p
      style="
        background-color: #ffcc66;
        color: #ffffff;
        padding: 15px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        display: inline-block;
        border-radius: 10px;
      "
    >
      Tired of foul smells from your compost bin? Get our quick and easy guide
      to 5 natural odor-fighting recipes.<br />
      <a href="https://bit.ly/composting-tips"
        ><button
          style="
            background-color: #be0503;
            color: #ffcc66;
            padding: 10px 20px;
            font-size: 14px;
            font-weight: bold;
            border: none;
            border-radius: 20px;
            cursor: pointer;
          "
        >
          View Now
        </button></a
      >
    </p>

    <div class="text-center font-bold text-xl mb-4">Key info</div>

    <section class="">
      <!-- graphs  -->
      <div class="flex justify-center">
        <div
          class="w-48 h-24 bg-gray-500 rounded-lg mr-2 relative flex items-center justify-center"
        >
          <span class="text-white text-xl text-center mt-8">{{
            myObj.category
          }}</span>
          <span
            class="text-md absolute top-0 mt-2 text-white text-center hidden md:inline"
            alt="Folder emoji, representing the composting category: green, brown or no category."
            >📂 Category</span
          >
          <span
            class="text-md absolute top-0 mt-2 text-white text-center inline md:hidden"
            alt="Folder emoji, representing the composting category: green, brown or no category."
            >📂</span
          >
        </div>

        <div
          class="w-48 h-24 bg-blue-500 rounded-lg mr-2 relative flex items-center justify-center"
        >
          <span class="text-white text-xl text-center mt-8">{{
            myObj.decomposition_time
          }}</span>
          <span
            class="text-md absolute top-0 mt-2 text-white text-center hidden md:inline"
            alt="Hourglass emoji, representing the decomposition time for the item"
            >⏳ Decomposition</span
          >
          <span
            class="text-md absolute top-0 mt-2 text-white text-center inline md:hidden"
            alt="Hourglass emoji, representing the decomposition time for the item"
            >⏳</span
          >
        </div>
        <div
          class="w-48 h-24 bg-purple-500 rounded-lg relative flex items-center justify-center"
        >
          <span class="text-white text-xl text-center mt-8">{{
            myObj.cn_ratio
          }}</span>
          <span
            class="text-md absolute top-0 mt-2 text-white text-center hidden md:inline"
            alt="Scale emoji, representing the carbon:nitrogen ratio of the item"
            >⚖️ C:N Ratio</span
          >
          <span
            class="text-md absolute top-0 mt-2 text-white text-center inline md:hidden"
            alt="Scale emoji, representing the carbon:nitrogen ratio of the item"
            >⚖️</span
          >
        </div>
      </div>
    </section>

    <!-- mailerlite embedded form with javascript. needs mailerlite snippet, that is in tag manager. but doesn't get rendered at build time as that is client side-->
    <div class="ml-embedded" data-form="XvWvSp"></div>
    <br />

    <!-- DESCRIPTION ...-->
    <!-- splitting sentences into paragraphs for better reading -->
    <p v-for="sentence in sentences">{{ sentence }}</p>
    <!-- DESCRIPTION END-->

    <!-- Category and reference block -->

    <!-- <div class="relative flex w-full justify-between mt-3 text-gray-400 text-sm category ">
  <p>
    <div class="group relative inline-block  hover:text-red-500 duration-300">
      <span class="dotted-underline catref">Category:</span>
      
      <span
      class=" absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">Easiest to go for a 50%-50% ratio in volume. It's not perfect, but simple to manage.</span>
    </div>
    
    <span v-if="`${myObj.category}`==='green'" class="bg-green-400 text-white rounded-xl ml-1 px-2 pb-1">{{myObj.category}}</span>
    
    <span v-else-if="`${myObj.category}`==='brown'" class="brown text-white rounded-xl ml-1 px-2 pb-1">{{myObj.category}}</span>
    
    <span v-else class="bg-gray-400 text-white rounded-xl ml-1 px-2 pb-1">No category</span>
  </p>


  
 
  <p><div><NuxtLink v-if="myObj.reference" :to="`${myObj.reference}`" target="_blank" class="dotted-underline catref">Reference</NuxtLink></div></p>
</div> -->

    <div class="text-center font-bold text-xl mb-4 mt-4">Search again?</div>
    <Search />
    <!-- Category and reference block end -->

    <section>
      <!-- Related items' links -->

      <!-- use the randomItemsObj and generate an unordered list with nuxtlinks. to='path' -->
      <div class="text-center font-bold text-xl mb-4 mt-4">Other items</div>
      <ul class="flex flex-wrap justify-center mt-3 px-3">
        <li
          v-for="item in randomItemsObj"
          :key="item.id"
          class="flex flex-col items-center justify-center w-1/2 sm:w-1/3"
        >
          <NuxtLink
            :to="'/' + `${item.path}` + '/'"
            class="flex flex-col items-center justify-center w-32 h-32 m-2 text-center bg-gray-100 rounded-lg shadow-md hover:bg-gray-200"
          >
            <img
              src="../assets/img/home-composting-bin.png"
              class="w-24 h-24"
              alt="item.name"
            />
            <span class="mt-2 text-sm text-gray-500 dark:text-gray-700">{{
              item.name
            }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>
    <!-- Related items end -->

    <!-- sharethis.com inline geci -->
    <div class="sharethis-inline-share-buttons"></div>
  </div>

  fingbaszás
</template>

<script setup>
let items = [];
const { item } = useRoute().params;
const { data } = await useAsyncData("items", () =>
  $fetch(
    "https://script.google.com/macros/s/AKfycbylLKlTRlulUb0x9r9j2Wvxa5W64g49NOT9kOsXR-N6LiPRamqA/exec"
  )
);

items = data._value.items;
//TODO: fix error handling. can't generate static pages.

// if(!data.description){
//   throw createError({
//     statusCode: 404,
//     message: 'This item does not exist'
//   })
// }

const itemz = useNuxtApp().payload.data["items"];
const myArray = itemz.items;

const myObj = myArray.find((myObj) => myObj.path === item);

// DESCRIPTION FORMATTING
// splitting sentences into paragraphs for better reading. adding a "." at the end of each sentence to make it a proper sentence. " remove the last "." from the last sentence.
const sentences = myObj.description
  .split(".")
  .map((sentence) => sentence + ".");
sentences[sentences.length - 1] = sentences[sentences.length - 1].slice(0, -1);

// pick 3 random items from myArray and put them in an object. use this object to generate the links to the other items. use only the path and name properties.

// const randomItems = Array.from({length: 3}, () => myArray[Math.floor(Math.random() * myArray.length)]);
const randomItems = Array.from(
  { length: 3 },
  () => myArray[Math.floor(Math.random() * myArray.length)]
);
const randomItemsObj = Object.assign(
  {},
  ...randomItems.map((item, i) => ({ [i]: item }))
);
console.log(randomItemsObj);

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
