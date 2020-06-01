<template>
  <div class="container mb-64 ml-16 mr-16 ml-32-pc mr-32-pc">
    <nav class="breadcrumb has-arrow-separator mt-16" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link :to="{ name: 'top'}">
            <p class="has-text-underline main-text-color">トップページ</p>
          </router-link>
        </li>
        <li class="is-active">
          <a href="#" aria-current="theme">テーマ一覧</a>
        </li>
      </ul>
    </nav>
    <headding
    class="mt-48"
    :headding="'テーマ一覧'"/>
    <div class="columns is-multiline is-centered mt-16">
      <div
        class="column is-4-tablet is-mobile-6 mb-32"
        v-for="theme in this.allTheme" :key="theme.id">
        <theme-card :theme="theme"/>
      </div>
    </div>
    <!-- <p class="has-text-centered">
      <a
        class="button is-rounded is-outlined is-medium mt-32 has-main-color-outline-button"
        :class="{ 'is-loading': loading }"
        :href="'?page=' + page"
        @click.prevent.stop='loadArticle'
        v-if='!ended'>
        もっと見る
      </a>
    </p> -->
  </div>
</template>

<script>
import ThemeCard from '@/components/molecules/ThemeCard.vue'
import Headding from '@/components/atoms/Headding.vue'
export default {
  components: {
    ThemeCard,
    Headding
  },
  props: {
    allTheme: {
      type: Array,
      required: true
    }
  }
}
</script>
