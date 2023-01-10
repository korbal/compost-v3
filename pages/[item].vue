<template>

  <Head>
    <Title>Can I put {{ myObj.name }} in the compost bin? Find out here!</Title>
    <Meta name="description" :content="myObj.description.split('.').slice(0,1).join('.') + '. >> Tap here to find out more!'" />
    <Meta property="og:title" :content="'Can you put ' + myObj.name + ' in the compost bin? Find out here!'" />
    <Meta property="og:description" :content="myObj.description.split('.').slice(0,1).join('.') + '. >> Tap here to find out more!'" />
    <Meta property="og:url" :content="'https://canicompostit.com/' +  myObj.path" />
    <Meta property="og:image" content="../assets/img/composting-og.jpg" />
  </Head>

  <div>
    
    <!-- Whether it's compostable -->
    <h2 class="answer text-4xl text-center"> {{myObj.isCompostable}}</h2>
    <br>
    
    <!-- Subheading -->
    <h3 v-if="myObj.isCompostable === 'YES 🎉'" class="text-xl text-center">You can put <span class="italic">{{myObj.name}}</span> into your composting bin!</h3>

    <h3 v-else-if="myObj.isCompostable === 'NO ✋🏼'" class="text-xl text-center">You can't put <span class="italic">{{myObj.name}}</span> into your composting bin!</h3>

    <h3 v-else class="text-xl text-center">You probably shouldn't put <span class="italic">{{myObj.name}}</span> into your composting bin!</h3>

     <!-- convertkit form -->
      <!-- 
      <div class="convertkit mx-auto flex justify-center mt-4 font-bold underline italic text-xl border-red-500">
        <a  data-formkit-toggle="0a0a04ec56" href="https://ot-ev-ot-nyelv.ck.page/0a0a04ec56">Want better compost in no time?</a>
      </div> -->
      
      <!-- Mailerlite form -->
      <!-- <div class="convertkit mx-auto flex justify-center mt-4 font-bold underline italic text-xl border-red-500">
        <button class="ml-onclick-form" onclick="ml('show', 'XvWvSp', true)">Want better compost in no time?</button>
      </div > -->
      

      <div class="convertkit mx-auto flex justify-center mt-4 font-bold underline italic text-xl border-red-500">
        <button class="ml-onclick-form" onclick="ml('show', 'fp7jeX', true)">Want better compost in no time?</button>
      </div >

      <br>

      
  
<!-- DESCRIPTION ...-->
<!-- splitting sentences into paragraphs for better reading -->
    <p v-for="sentence in sentences"> {{ sentence }}</p>

<!-- DESCRIPTION END-->

      <!-- Related items' links -->
      <section>
        
        
          <div>

            <h2 class="mb-2 text-lg font-semibold text-gray-500 dark:text-white">Other items you might be interested in:</h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">fing
                <li>
                    At least 10 characters (and up to 100 characters)
                </li>
                <li>
                    At least one lowercase character
                </li>
                <li>
                    Inclusion of at least one special character, e.g., ! @ # ?
                </li>
            </ul>
          </div>


      </section>




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

    <!-- <div class="convertkit mx-auto flex justify-center mt-4 font-bold underline italic text-xl border-red-500">
      <a  data-formkit-toggle="0a0a04ec56" href="https://ot-ev-ot-nyelv.ck.page/0a0a04ec56">Want better compost in no time?</a>
    </div>
  
    <br> -->
    

    <!-- Addthis.com inline geci -->
    <!-- <div class="addthis_inline_share_toolbox container mx-auto flex justify-center my-4"></div> -->

    <!-- sharethis.com inline geci -->
    <div class="sharethis-inline-share-buttons"></div>

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

// DESCRIPTION FORMATTING
// splitting sentences into paragraphs for better reading. adding a "." at the end of each sentence to make it a proper sentence. " remove the last "." from the last sentence.
const sentences = myObj.description.split('.').map(sentence => sentence + '.')
sentences[sentences.length - 1] = sentences[sentences.length - 1].slice(0, -1)




definePageMeta({
  layout: 'itemdetails'
})


// JAVA SCRIPT SHIT


useHead({
  script: [
    // convertkit javascript

    
    {
      'async': true,
      'src': 'https://ot-ev-ot-nyelv.ck.page/0a0a04ec56/index.js',
      'data-uid': '0a0a04ec56'
    },
    //sharethis.com javascript
    {
      'type': 'text/javascript',
      'src': 'https://platform-api.sharethis.com/js/sharethis.js#property=6391f7a98fb8b6001abbbcce&product=sop',
      'async': 'async'
    },
    // addthis.com javascript
    // {
    //   'type': 'text/javascript',
    //   'src': '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6396f97748f3bf89',
    // }
  ],
})


</script>

<style scoped>

.brown {
  background-color: #5E2F00;
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
