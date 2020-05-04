<template>
  <div class="page-container mb-32 mb-64-pc">
    <headding
    class=""
    :headding="'話題のテーマ'"/>
    <div class="columns is-multiline is-centered mt-16">
      <div
        class="column is-4-tablet is-mobile-6"
        v-for="theme in allTheme" :key="theme.id">
        <theme-card :theme="theme"/>
      </div>
    </div>
  </div>
</template>

<script>
import Headding from '../atoms/Headding.vue'
import ThemeCard from '../molecules/ThemeCard.vue'
export default {
  components: {
    Headding,
    ThemeCard
  },
  data () {
    return {
      allTheme: [
        {
          id: 1,
          title: '生物学と芸術学と物理学の記事を内包しているテーマ',
          field: {
            first: '生物学',
            second: '芸術学',
            third: '物理学'
          },
          tagColor: {
            first: 'green-study-tag',
            second: 'red-study-tag',
            third: 'blue-study-tag'
          }
        },
        {
          id: 2,
          title: '宇宙科学と社会学の記事を内包しているテーマ',
          field: {
            first: '宇宙科学',
            second: '社会学'
          },
          tagColor: {
            first: 'blue-study-tag',
            second: 'orange-study-tag'
          }
        },
        {
          id: 3,
          title: '芸術学と文学を記事を内包しているテーマ',
          field: {
            first: '芸術学',
            second: '文学'
          },
          tagColor: {
            first: 'red-study-tag',
            second: 'red-study-tag'
          }
        }
      ]
    }
  }
}
</script>
