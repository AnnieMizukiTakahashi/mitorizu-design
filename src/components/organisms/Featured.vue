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
          img: '../../assets/sample/sample_image_6.png',
          tagProps: [
            {id: 1, field: '生物学', tagColor: 'green-study-tag'},
            {id: 2, field: '芸術学', tagColor: 'red-study-tag'},
            {id: 3, field: '物理学', tagColor: 'turquoise-study-tag'}
          ]
        },
        {
          id: 2,
          title: '宇宙科学と社会学の記事を内包しているテーマ',
          img: '../../assets/sample/sample_image_7.png',
          tagProps: [
            {id: 1, field: '宇宙科学', tagColor: 'blue-study-tag'},
            {id: 2, field: '社会学', tagColor: 'orange-study-tag'},
            {id: 3, field: '物理学', tagColor: 'turquoise-study-tag'}
          ]
        },
        {
          id: 3,
          title: '芸術学と文学を記事を内包しているテーマ',
          img: '../../assets/sample/sample_image_5.png',
          tagProps: [
            {id: 1, field: '芸術学', tagColor: 'red-study-tag'},
            {id: 2, field: '文学', tagColor: 'red-study-tag'}
          ]
        }
      ]
    }
  }
}
</script>
