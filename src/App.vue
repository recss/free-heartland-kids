<template>
  <div id="app">
    <header-prismic/>
    <router-view/>
    <footer-prismic/>
  </div>
</template>

<script>
import HeaderPrismic from './components/HeaderPrismic.vue'
import FooterPrismic from './components/FooterPrismic.vue'

export default {
  name: 'App',
  components: {
    HeaderPrismic, FooterPrismic
  }
}
</script>

<style>
@import "./assets/css/bell-reset.css";

#app {
  font-family: 'Lato', sans-serif;
  color: #333;
}

#app p,
#app li {
  max-width: 45em;
  margin-bottom: 1em;
}
</style>
