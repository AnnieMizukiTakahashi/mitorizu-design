<template>
  <div id="app">
    <header class="hero">
        <Header/>
    </header>
      <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "styles/_variables.scss";
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP|Sawarabi+Gothic&display=swap');

#app {
  font-family:'Sawarabi Gothic', 'Noto Sans JP', Helvetica, Arial, sans-serif;
}

</style>
