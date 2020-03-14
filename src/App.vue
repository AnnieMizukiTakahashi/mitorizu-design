<template>
  <div id="app">
      <header class="hero is-fullheight">
          <nav class="navbar">
              <div class="navbar-brand">
                  <span class="navbar-burger burger has-text-white" data-target="navbarMenu" @click="toggleMenu" :class="{'is-active': isMenuActive}">
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
                            <router-link class="has-text-white" to="/">Top</router-link>
                          </li>
                          <li>
                            <router-link class="has-text-white" to="about">About</router-link>
                          </li>
                          <li>
                            <router-link class="has-text-white" to="learn">Learn</router-link>
                          </li>
                          <li>
                            <router-link class="has-text-white" to="theme">Theme</router-link>
                          </li>
                          <li>
                            <router-link class="has-text-white" to="academic">AcademicFild</router-link>
                          </li>
                        </ul>
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
@import "src/styles/_variables.scss";

#app {
  font-family:Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.navbar-brand{
  background-color: $main-color;
}
.navbar-menu {
  background-color: $main-color;
  margin: auto;
  padding: 0px;
}
.tabs{
  font-size: 20px;
  font-weight: bold;
  margin-right: 32px;
}
</style>
