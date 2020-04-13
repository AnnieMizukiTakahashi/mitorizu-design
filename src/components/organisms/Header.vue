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
              <div class="is-right is-flex-desktop">
                <router-link to="about">
                <a class="navbar-item">知の見取り図とは？</a>
                </router-link>
                <router-link to="category-detail">
                  <a class="navbar-item">うまく学習するには？</a>
                </router-link>
                <router-link to="theme">
                  <a class="navbar-item">テーマから記事を探す</a>
                </router-link>
                <router-link to="category">
                <a class="navbar-item">学術分野から記事を探す</a>
                </router-link>
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
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.32);
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
    @media (min-width: $desktop-max-width) {
      a {
        color: $white;
        display: flex;
        align-items: center;
        }
      a:hover {
        color: $white;
        background-color: $main-hover-color;
      }
    }

    @media (max-width: $desktop-max-width) {
      a {
        color: $text-dark-blue;
        font-weight: normal;
      }

      a:hover {
        color: $text-dark-blue;
        font-weight: bold;
      }
    }
  }
}

@media (min-width: $desktop-max-width) {
  .navbar {
    height: $header-height-desktop;
  }
    .subtitle-mobile {
    display: none;
  }
}

@media (max-width: $desktop-max-width){
  .subtitle {
    display: none;
  }
}

@media (max-width: $mobile-max-width){
  .subtitle-mobile {
    display: none;
  }
}

</style>
