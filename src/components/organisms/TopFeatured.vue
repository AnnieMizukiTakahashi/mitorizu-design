<template>
  <div class="page-container mb-32 mb-64-pc">
    <div class="level is-mobile">
      <div class="level-left">
        <headding
        :headding="'話題のテーマ'"/>
      </div>
      <div class="level-right">
        <router-link
          class="is-size-6 has-text-weight-bold default-text-color mr-8"
          :to="{ name: 'theme' }">
          もっと見る
        </router-link>
        <router-link class="with-arrow" :to="{ name: 'theme' }"/>
      </div>
    </div>
    <div class="columns is-multiline is-centered mt-16">
      <div
        class="column is-4-tablet is-mobile-6"
        v-for="theme in allFeaturedTheme" :key="theme.id">
        <theme-card :theme="theme"/>
      </div>
    </div>
  </div>
</template>

<script>
import Headding from '@/components/atoms/Headding.vue'
import ThemeCard from '@/components/molecules/ThemeCard.vue'
export default {
  components: {
    Headding,
    ThemeCard
  },
  props: {
    allFeaturedTheme: {
      type: Array,
      required: true
    }
  }
}
</script>
