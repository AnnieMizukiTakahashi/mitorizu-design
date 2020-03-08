<template>
  <div id="app" class="hero is-fullheight">
      <header>
          <nav class="navbar">
              <div class="container">
                  <div class="navbar-brand">
                      <span class="navbar-burger burger" data-target="navbarMenu" @click="toggleMenu" :class="{'is-active': isMenuActive}">
                      <span></span>
                      <span></span>
                      <span></span>
                      </span>
                  </div>
                  <div id="navbarMenu" class="navbar-menu" :class="{'is-active': isMenuActive}">
                      <div class="navbar-end">
                          <div class="tabs is-one-quarter-desktop is-right">
                            <ul>
                              <li>
                                <router-link to="/">Top</router-link>
                              </li>
                              <li>
                                <router-link to="about">About</router-link>
                              </li>
                              <li>
                                <router-link to="learn">learn</router-link>
                              </li>
                              <li>
                                <router-link to="theme">theme</router-link>
                              </li>
                              <li>
                                <router-link to="academic">academic</router-link>
                              </li>
                            </ul>                           
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
  font-family:Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
