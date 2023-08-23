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

  <!-- top part -->

  <div>
    <div>
      <!-- if there is an image, use that, if not, use placeholder in background -->
      <div class="relative">
        <img
          v-if="myObj.image_url"
          :src="myObj.image_url"
          class="w-full rounded-xl"
          :alt="myObj.name"
        />
        <img
          v-else
          src="../assets/img/home-composting-bin.png"
          class="w-full rounded-xl"
          alt="A composting bin"
        />
        <h1
          class="absolute top-1 sm:top-1/4 transform text-white md:text-4xl sm:text-3xl text-2xl font-bold bg-gray-800 bg-opacity-70 rounded-xl p-4 m-4 text-center"
        >
          Can I put <span class="italic">{{ myObj.name }}</span> in my compost
          bin?
        </h1>
      </div>

      <br />
      <h2 class="answer md:text-8xl text-4xl text-center font-bold">
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
        It's complicated, whether you can put
        <span class="italic">{{ myObj.name }}</span> into your composting bin,
        so read on!
      </h3>
    </div>
    <!-- Whether it's compostable -->
    <!-- top part end -->

    <div class="text-center font-bold text-xl mb-4">Key info</div>

    <section class="">
      <!-- graphs  -->
      <div class="flex justify-around">
        <div
          class="w-72 h-24 bg-gray-500 rounded-lg mr-2 relative flex items-center justify-center"
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
          class="w-72 h-24 bg-blue-500 rounded-lg mr-2 relative flex items-center justify-center"
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
          class="w-72 h-24 bg-purple-500 rounded-lg relative flex items-center justify-center"
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

    <!-- banner embed -->
    <p
      class="mt-4 mb-0"
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
      Get the right balance of brown and green composting materials in your bin
      with our expert guide.<br />
      <a href="https://go.canicompostit.com/green-brown"
        ><button
          class="mt-4 bg-red-500 text-yellow-300 py-2 px-4 text-lg font-bold rounded-full cursor-pointer"
        >
          View Now
        </button>
      </a>
    </p>

    <!-- mailerlite embedded form with javascript. needs mailerlite snippet, that is in tag manager. but doesn't get rendered at build time as that is client side-->
    <div class="ml-embedded" data-form="XvWvSp"></div>
    <br />

    <!-- DESCRIPTION ...-->

    <div v-if="myObj.format">
      <div v-html="description"></div>
    </div>
    <div v-else>
      <p v-for="sentence in sentences">{{ sentence }}</p>
    </div>

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
              v-if="item.image_url"
              :src="item.image_url"
              class="w-full rounded-xl"
              :alt="item.name"
            />
            <img
              v-else
              src="../assets/img/home-composting-bin.png"
              class="w-full rounded-xl"
              alt="A composting bin"
            />
            <span class="mt-2 text-md text-gray-500 dark:text-gray-700">{{
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
</template>

<script setup>
let items = [];
const { item } = useRoute().params;
const { data } = await useAsyncData("items", () =>
  $fetch(
    "https://script.google.com/macros/s/AKfycbylLKlTRlulUb0x9r9j2Wvxa5W64g49NOT9kOsXR-N6LiPRamqA/exec?sheet=db_cici3"
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

// DESCRIPTION FORMATTING: if it's html, use description, if format cell empty, use sentences.

//TODO: temporary, if all descriptions are formatted html, you can remove this.
// splitting sentences into paragraphs for better reading. adding a "." at the end of each sentence to make it a proper sentence. " remove the last "." from the last sentence.

const sentences = myObj.description
  .split(".")
  .map((sentence) => sentence + ".");
sentences[sentences.length - 1] = sentences[sentences.length - 1].slice(0, -1);

const description = myObj.description;

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

definePageMeta({
  layout: "itemdetails",
});

useHead({
  script: [
    //sharethis.com javascript
    {
      type: "text/javascript",
      src: "https://platform-api.sharethis.com/js/sharethis.js#property=6391f7a98fb8b6001abbbcce&product=sop",
      async: "async",
    },
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
