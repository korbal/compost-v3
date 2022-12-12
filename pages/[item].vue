<template>

  <Head>
    <Title>Can I put {{ myObj.name }} in the compost bin?</Title>
    <Meta name="description" :content="myObj.description.split('.').slice(0,1).join('.') + '. >> Tap here to find out more!'" />
  </Head>

  <div>
    
    <!-- Whether it's compostable -->
    <h2 class="answer text-4xl text-center"> {{myObj.isCompostable}}</h2>
    <br>
    
    <!-- Subheading -->
    <h3 v-if="myObj.isCompostable === 'YES 🎉'" class="text-xl text-center">You can put <span class="italic">{{myObj.name}}</span> into your composting bin!</h3>

    <h3 v-else-if="myObj.isCompostable === 'NO ✋🏼'" class="text-xl text-center">You can't put <span class="italic">{{myObj.name}}</span> into your composting bin!</h3>

    <h3 v-else class="text-xl text-center">You probably shouldn't put <span class="italic">{{myObj.name}}</span> into your composting bin!</h3>
<!--     
    <h3 v-if="myObj.isCompostable === 'YES 🎉'">You can put</h3>
    <h3 v-else-if="myObj.isCompostable === 'NO ✋🏼'">You can't put</h3>
    <h3 v-else>You probably can't put</h3>

    {{myObj.name}} into your composting bin!
     -->
    <!-- Description of the item -->
    <br>
    <!-- <p class="text-gray-700">{{ myObj.description }}</p> -->
    <div v-html="myObj.description"></div>
  
    <!-- Category and reference block -->
    <!-- category -->
    <div class="relative flex w-full justify-between mt-3 text-gray-400 text-sm category ">
      <p>
        <div class="group relative inline-block  hover:text-red-500 duration-300">
            <span class="dotted-underline catref">Category:</span>
            <!-- Tooltip text here -->
            <span
                class=" absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">Easiest to go for a 50%-50% ratio in volume. It's not perfect, but simple to manage.</span>
        </div>
        
          <span v-if="`${myObj.category}`==='green'" class="bg-green-400 text-white rounded-xl ml-1 px-2 pb-1">{{myObj.category}}</span>

          <span v-else-if="`${myObj.category}`==='brown'" class="brown text-white rounded-xl ml-1 px-2 pb-1">{{myObj.category}}</span>

          <span v-else class="bg-gray-400 text-white rounded-xl ml-1 px-2 pb-1">No category</span>
          
          
    </p>
       

      <!-- category end -->
      <!-- only show reference link if there is one in the DB -->
        <p><div><NuxtLink v-if="myObj.reference" :to="`${myObj.reference}`" target="_blank" class="dotted-underline catref">Reference</NuxtLink></div></p>
    </div>
    <!-- Category and reference block end -->

    <!-- convertkit form -->
    <div class="mx-auto flex justify-center mt-4 font-bold underline italic">
      <a data-formkit-toggle="9746d57124" href="https://ot-ev-ot-nyelv.ck.page/9746d57124">Want better compost in no time?</a>
    </div>
    
 </div>
</template>

<script setup>



let items = [];
const {item} = useRoute().params;




const { data } = await useAsyncData('items', () =>
  $fetch(
    'https://script.google.com/macros/s/AKfycbylLKlTRlulUb0x9r9j2Wvxa5W64g49NOT9kOsXR-N6LiPRamqA/exec'
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

const itemz = useNuxtApp().payload.data['items'];
const myArray = itemz.items;

const myObj = myArray.find((myObj) => myObj.path === item);





definePageMeta({
  layout: 'itemdetails'
})





</script>

<style scoped>

.brown {
  background-color: #5E2F00;
}

.catref {
  font-size: 1rem;
}



</style>
