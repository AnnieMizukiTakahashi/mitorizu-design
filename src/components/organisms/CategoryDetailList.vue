<template>
  <div class="page-container mr-16 ml-16">
    <second-headding
    class="mt-32"
    :headding="'テーマ一覧'"/>

    <div class="columns is-multiline is-centered mt-8">
      <div
        class="column is-4-tablet is-mobile-6"
        v-for="theme in allCategoryDetailTheme" :key="theme.id">
        <theme-card :theme="theme"/>
      </div>
    </div>
  </div>
</template>

<script>
import SecondHeadding from '@/components/atoms/SecondHeadding.vue'
import ThemeCard from '@/components/molecules/ThemeCard.vue'
export default {
  components: {
    SecondHeadding,
    ThemeCard
  },
  props: {
    allCategoryDetailTheme: {
      type: Array,
      required: true
    }
  }
}
</script>
