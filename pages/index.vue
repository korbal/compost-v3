<template>
  <div>
    <Search />

    <div>
      <img
        src="../assets/img/home-composting-bin.png"
        alt="A home composting bin"
      />
    </div>

    <div class="tagline">
      The fastest way to find out if you can throw something in your
      <em>home composting bin</em>.
      <NuxtLink to="/about"
        ><span class="dotted-underline"><br />Learn more.</span></NuxtLink
      >
      <br />v3.8.6.14.
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
img {
  max-width: fit-content;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: auto;
  /* mix-blend-mode: luminosity; */
}
.tagline {
  text-align: center;
  /* margin-top: 5vh;
  margin-bottom: 5vh; */
  /* margin-left: auto;
  margin-right: auto; */

  margin-left: auto;
  margin-right: auto;
  width: 259px;
  height: 93px;
  left: 58px;
  top: 491px;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;

  text-align: center;
  font-feature-settings: "zero" on;
  color: #a6acb9;
}

.dotted-underline {
  border-bottom: 1px dotted #333;
}
</style>
