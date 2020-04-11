<template>
  <header>
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link class="logo mt-4 ml-8 mt-8-pc" to="/">
            <img src="@/assets/ic_logo_white.png" alt="知の見取り図" contain width="144"/>
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
header {
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

@media (min-width: $base-width) {
  .navbar {
    height: $header-height-pc;
  }
}

</style>
