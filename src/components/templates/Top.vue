<template>
  <div class="page-container is-desktop hero is-fullheight has-header">
    <main-visual/>
    <first-user class="mt-24 ml-16 mr-16"/>
    <new-article class="mt-24 ml-16 mr-16"/>
    <featured class="mt-48 ml-16 mr-16"/>
    <selected-book class="mt-24 mt-32-pc ml-16 mr-16"/>
    <learn-book class="mt-48 ml-16 mr-16 mb-64"/>
  </div>
</template>

<script>
import MainVisual from '@/components/organisms/MainVisual.vue'
import FirstUser from '@/components/organisms/FirstUser.vue'
import Headding from '@/components/atoms/Headding.vue'
import NewArticle from '@/components/organisms/NewArticle.vue'
import Featured from '@/components/organisms/Featured.vue'
import SelectedBook from '@/components/organisms/SelectedBook.vue'
import LearnBook from '@/components/organisms/LearnBook.vue'

export default {
  components: {
    MainVisual,
    FirstUser,
    Headding,
    NewArticle,
    Featured,
    SelectedBook,
    LearnBook
  }
}
</script>
