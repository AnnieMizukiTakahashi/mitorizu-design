<template>
    <header>
        <div class="container is-desktop">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <router-link class="navbar-item logo" to="/">
                    <img src="@/assets/ic_logo_white.png" art="Logo" contain height="48"/>
                    </router-link>

                    <a role="button" class="navbar-burger burger is-white" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarMenu" class="navbar-menu">
                    <div class="navbar-end">
                        <div class="has-text-weight-semibold is-one-quarter-desktop is-right is-flex-desktop">
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

    $navbarBurgers.forEach( el => {
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

</style>
