<template>
  <div class="fixed-container">
    <header>
      <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <router-link class="logo mt-8 ml-8" to="/">
              <img src="@/assets/ic_logo_white.png" class="ml-16-desktop" alt="知の見取り図" contain width="136"/>
              <p class="subtitle is-size-7 white-text-color">わくわくするような未知の知との出会い</p>
              <span class="subtitle-mobile ml-16 is-size-7">わくわくするような未知の知との出会い</span>
            </router-link>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
              <div class="has-text-weight-semibold is-right is-flex-desktop">
                <li class="navbar-item">
                    <router-link class="has-text-white" to="about">知の見取り図とは？</router-link>
                </li>
                <li class="navbar-item">
                    <router-link class="has-text-white" to="category-detail">うまく学習するには？</router-link>
                </li>
                <li class="navbar-item">
                    <router-link class="has-text-white" to="theme">テーマから記事を探す</router-link>
                </li>
                <li class="navbar-item">
                    <router-link class="has-text-white" to="category">学術分野から記事を探す</router-link>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target
        const $target = document.getElementById(target)
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})

</script>

<style lang="scss">
@import '../../styles/_variables.scss';
.fixed-container {
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  // padding-left: 1rem;
  // .row {
  //   margin-right: auto;
  //   margin-left: auto;
  //   height: $header-height;
  // }
}

header {
  position: relative;
  background-color: $main-color;

  .navbar-brand{
    background-color: $main-color;

    span{
      color: $white;
    }
  }
  .navbar-menu {
    background-color: $main-color;
    margin: auto;
  }
}

@media (min-width: $desktop-min-width) {
  .navbar {
    height: $header-height-desktop;
  }
    .subtitle-mobile {
    display: none;
  }
}

@media (max-width: $desktop-min-width){
  .subtitle {
    display: none;
  }
}

@media (max-width: 500px){
  .subtitle-mobile {
    display: none;
  }
}

</style>
