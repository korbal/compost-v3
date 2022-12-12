<template>
  <div>
  
    <!-- sharethis.com code -->
    <!-- <div class="sharethis-inline-share-buttons mb-4"></div>   -->
    
    <!-- addthis.com code -->
    <div class="addthis_inline_share_toolbox container mx-auto flex justify-center my-4"></div>      
    <footer class="container mx-auto px-10 py-4 flex justify-around border-t-2 w-fit">
      <ul class="flex gap-4 text-gray-400">
          <li><NuxtLink to="/" active-class="active">Home</NuxtLink></li>
          <li><NuxtLink to="/about" active-class="active">About</NuxtLink></li>
          <li><NuxtLink to="/items" active-class="active">All Items</NuxtLink></li>

            
      </ul>

      
    </footer>

    


  </div>
</template>

<script setup>
 


import pinalog from '~/pinalog.js'
onBeforeMount(async () => {
  
  

// this sort of work but dunno why. usermaven seems to fire properly but GA doesn't. sharethis only fires once. abandoned this and went with google tag manager instead. in the plugins directory
//   useHead({
//   script: [
//     { 'src': 'https://t.usermaven.com/lib.js',
//     'data-key':"UMvfbf6vg2" ,
//     'data-tracking-host': 'https://events.usermaven.com',
//     'data-autocapture': 'true',
//     'defer': true,
//     'innerHTML':`window.usermaven = window.usermaven || (function(){(window.usermavenQ = window.usermavenQ || []).push(arguments);})
    
//     `},

//     { src: 'https://platform-api.sharethis.com/js/sharethis.js#property=6391f7a98fb8b6001abbbcce&product=sop', 
//     'type': 'text/javascript',
//     'async': true },


//     { 'src': 'https://www.googletagmanager.com/gtag/js?id=UA-3450053-63',
//     'async': true,
//     'innerHTML':`window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'UA-3450053-63');
    
//     `}
//   ],

// })
  
})






</script>

<style scoped>

.router-link-exact-active {
    color: #12b488
  }

</style>