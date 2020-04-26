<template>
  <div class="page-container is-desktop hero is-fullheight has-header">
    <main-visual/>
    <first-user class="mt-32 mt-48-pc ml-16 mr-16"/>
    <new-article class="mt-24 mt-32-pc ml-16 mr-16"/>
    <featured class="mt-24 mt-32-pc ml-16 mr-16"/>
  </div>
</template>

<script>
import MainVisual from '../organisms/MainVisual.vue'
import FirstUser from '../organisms/FirstUser.vue'
import Headding from '../atoms/Headding.vue'
import NewArticle from '../organisms/NewArticle.vue'
import Featured from '../organisms/Featured.vue'

export default {
  components: {
    MainVisual,
    FirstUser,
    Headding,
    NewArticle,
    Featured
  }
}
</script>

<style lang="scss">
@import '../../styles/_variables.scss';

</style>
