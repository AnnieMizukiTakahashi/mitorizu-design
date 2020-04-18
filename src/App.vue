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
import Header from './components/organisms/Header.vue'
import Footer from './components/organisms/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "./styles/_variables.scss";
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP|Sawarabi+Gothic&display=swap');

#app {
  font-family: 'Noto Sans JP', Helvetica, Arial, sans-serif;
}

body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $background-color;
}

///////////////////////
// Layouts
///////////////////////
.page-container{
  max-width: $desktop-max-width;
  margin: auto;
}

///////////////////////
// Color
///////////////////////
.default-text-color {
  color: $text-dark-blue;
}

.white-text-color {
  color: $white !important;
}

.main-text-color {
  color: $main-color;
}

.tag-sociology-color {
  color: $white;
  background-color: $orange;
}

.background-primary {
  background-color: $primary;
}

.background-success {
  background-color: $success;
}

///////////////////////
// Style
///////////////////////
.has-text-underline {
  text-decoration: underline
}

.has-header {
  margin-top: $header-height;

  @media (min-width: $desktop-max-width){
    margin-top: $header-height-desktop;
  }
}

.has-header-desktop {
  height: $header-height-desktop;
}

.ellipsis {
  display: block;
  display: -webkit-box;
  margin: 0 auto;
  line-height: 1.4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  &.is-ellipsis-1 {
    -webkit-line-clamp: 1;
  }

  &.is-ellipsis-2 {
    -webkit-line-clamp: 2;
  }

  &.is-ellipsis-3 {
    -webkit-line-clamp: 3;
  }

  &.is-ellipsis-4 {
    -webkit-line-clamp: 4;
  }
}

@media (min-width: $desktop-min-width){
  .ellipsis {
    &.is-ellipsis-1-pc {
      -webkit-line-clamp: 1;
    }

    &.is-ellipsis-2-pc {
      -webkit-line-clamp: 2;
    }

    &.is-ellipsis-3-pc {
      -webkit-line-clamp: 3;
    }
  }
}

//////////////////////////
// Margins
//////////////////////////
.mt-4{
  margin-top: 0.25rem;
}
.mt-6{
  margin-top: 0.375rem;
}
.mt-8{
  margin-top: 0.5rem;
}
.mt-12{
  margin-top: 0.75rem;
}
.mt-16{
  margin-top: 1rem;
}
.mt-24{
  margin-top: 1.5rem;
}
.mt-32{
  margin-top: 2rem;
}
.mt-48{
  margin-top: 3rem;
}
.mt-64{
  margin-top: 4rem;
}
.mt-80{
  margin-top: 5rem;
}
.mt-96{
  margin-top: 6rem;
}
.mt-128{
  margin-top: 8rem;
}

.mb-0{
  margin-bottom: 0 !important;
}
.mb-4{
  margin-bottom: 0.25rem;
}
.mb-8{
  margin-bottom: 0.5rem;
}
.mb-12{
  margin-bottom: 0.75rem;
}
.mb-16{
  margin-bottom: 1rem;
}
.mb-24{
  margin-bottom: 1.5rem;
}
.mb-32{
  margin-bottom: 2rem;
}
.mb-48{
  margin-bottom: 3rem;
}
.mb-64{
  margin-bottom: 4rem;
}

@media (min-width: $desktop-min-width){
  .mt-0-pc{
    margin-top: 0;
  }
  .mt-8-pc{
    margin-top: 0.5rem;
  }
  .mt-12-pc{
    margin-top: 0.75rem;
  }
  .mt-16-pc{
    margin-top: 1rem;
  }
  .mt-24-pc{
    margin-top: 1.5rem;
  }
  .mt-32-pc{
    margin-top: 2rem;
  }
  .mt-48-pc{
    margin-top: 3rem;
  }
  .mt-64-pc{
    margin-top: 4rem;
  }
  .mt-80-pc{
    margin-top: 5rem;
  }
  .mt-128-pc{
    margin-top: 8rem;
  }

  .mb-0-pc{
    margin-bottom: 0;
  }
  .mb-16-pc{
    margin-bottom: 1rem;
  }
  .mb-24-pc{
    margin-bottom: 1.5rem;
  }
  .mb-32-pc{
    margin-bottom: 2rem;
  }
  .mb-48-pc{
    margin-bottom: 3rem;
  }
  .mb-64-pc{
    margin-bottom: 4rem;
  }
}

.ml-4 {
  margin-left: 0.35rem;
}
.ml-8 {
  margin-left: 0.5rem;
}
.ml-12 {
  margin-left: 0.75rem;
}
.ml-16 {
  margin-left: 1rem;
}
.ml-24 {
  margin-left: 1.5rem;
}
.ml-32 {
  margin-left: 2rem;
}
.ml-48 {
  margin-left: 3rem;
}
.ml-80 {
  margin-left: 5rem;
}

.mr-4 {
  margin-right: 0.25rem;
}
.mr-8 {
  margin-right: 0.5rem;
}
.mr-12 {
  margin-right: 0.75rem;
}
.mr-16 {
  margin-right: 1rem;
}
.mr-24 {
  margin-right: 1.5rem;
}
.mr-32 {
  margin-right: 2rem;
}
.mr-48 {
  margin-right: 3rem;
}
.mr-64 {
  margin-right: 4rem;
}
.mr-negative-16 {
  margin-right: -1rem;
}

@media (min-width: $desktop-min-width){
  .ml-0-pc {
    margin-left: 0;
  }
  .ml-4-pc {
    margin-left: 0.35rem;
  }
  .ml-8-pc {
    margin-left: 0.5rem;
  }
  .ml-12-pc {
    margin-left: 0.75rem;
  }
  .ml-16-pc {
    margin-left: 1rem;
  }
  .ml-24-pc {
    margin-left: 1.5rem;
  }
  .ml-32-pc {
    margin-left: 2rem;
  }
  .ml-48-pc {
    margin-left: 3rem;
  }

  .mr-0-pc {
    margin-right: 0;
  }
  .mr-4-pc {
    margin-right: 0.25rem;
  }
  .mr-8-pc {
    margin-right: 0.5rem;
  }
  .mr-12-pc {
    margin-right: 0.75rem;
  }
  .mr-16-pc {
    margin-right: 1rem;
  }
  .mr-24-pc {
    margin-right: 1.5rem;
  }
  .mr-32-pc {
    margin-right: 2rem;
  }
  .mr-48-pc {
    margin-right: 3rem;
  }
  .mr-64-pc {
    margin-right: 4rem;
  }
}

.mt-minus-8{
  margin-top: -0.5rem;
}
.mt-minus-12{
  margin-top: -0.75rem;
}

@media (min-width: $desktop-max-width){
  .mt-8-desktop {
    margin-top: 8px;
  }
  .mt-16-desktop {
    margin-top: 16px;
  }
  .ml-16-desktop {
    margin-left: 16px;
  }
}

///////////////////////
// Paddings
///////////////////////
.pd-0{
  padding: 0px;
}
.pd-4{
  padding: 0.25rem;
}
.pd-8{
  padding: 0.5rem;
}
.pd-12{
  padding: 0.75rem;
}
.pd-16{
  padding: 1rem;
}
.pd-24{
  padding: 1.5rem;
}
.pd-32{
  padding: 2rem;
}
.pd-48{
  padding: 3rem;
}
.pl-8{
  padding-left: 0.5rem;
}
.pl-12{
  padding-left: 0.75rem;
}
.pl-16{
  padding-left: 1rem;
}
.pl-32{
  padding-left: 2rem;
}
.pl-48{
  padding-left: 3rem;
}
.pr-8{
  padding-right: 0.5rem;
}
.pr-12{
  padding-right: 0.75rem;
}
.pr-16{
  padding-right: 1rem;
}
.pr-32{
  padding-right: 2rem;
}
.pr-48{
  padding-right: 3rem;
}
.pt-4{
  padding-top: 0.25rem;
}
.pt-8{
  padding-top: 0.5rem;
}
.pt-16{
  padding-top: 1rem;
}
.pt-24{
  padding-top: 1.5rem;
}
.pt-32{
  padding-top: 2rem;
}
.pt-48{
  padding-top: 3rem;
}
.pb-4{
  padding-bottom: 0.25rem;
}
.pb-8{
  padding-bottom: 0.5rem;
}
.pb-16{
  padding-bottom: 1rem;
}
.pb-24{
  padding-bottom: 1.5rem;
}
.pb-32{
  padding-bottom: 2rem;
}
.pb-48{
  padding-bottom: 3rem;
}

@media (min-width: $desktop-min-width){
  .pd-0-pc{
    padding: 0px;
  }
  .pd-0-pc{
    padding: 1.35px;
  }
  .pt-8-pc {
    padding-top: 0.5rem;
  }
  .pt-16-pc {
    padding-top: 1rem;
  }
  .pt-32-pc {
    padding-top: 2rem;
  }
  .pt-48-pc {
    padding-top: 3rem;
  }
  .pt-64-pc {
    padding-top: 4rem;
  }
  .pl-8-pc {
    padding-left: 0.5rem;
  }
  .pl-16-pc {
    padding-left: 1rem;
  }
  .pl-32-pc {
    padding-left: 2rem;
  }
  .pl-48-pc {
    padding-left: 3rem;
  }
  .pl-64-pc {
    padding-left: 4rem;
  }

  .pr-8-pc {
    padding-right: 0.5rem;
  }
  .pr-16-pc {
    padding-right: 1rem;
  }
  .pr-32-pc {
    padding-right: 2rem;
  }
  .pr-48-pc {
    padding-right: 3rem;
  }
  .pr-64-pc {
    padding-right: 4rem;
  }
}

@media (min-width: $desktop-min-width) {
  .pd-8-pc {
    padding: 0.5rem;
  }
  .pd-16-pc {
    padding: 1rem;
  }
  .pd-32-pc {
    padding: 2rem;
  }
  .pd-48-pc {
    padding: 3rem;
  }
}

</style>
