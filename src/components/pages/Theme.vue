<template>
  <div class="page-container is-desktop hero is-fullheight has-header">
    <theme
    :allTheme="allTheme"/>
  </div>
</template>

<script>
import Theme from '@/components/templates/Theme.vue'
export default {
  components: {
    Theme
  },
  data () {
    return {
      loading: false,
      ended: false,
      page: 1,

      allTheme: [
        {
          id: 1,
          title: '生物学と芸術学と物理学の記事を内包しているテーマ',
          img: 'static/sample_image_6.png',
          tagProps: [
            {id: 1, field: '生物学', tagColor: 'green-study-tag'},
            {id: 2, field: '芸術学', tagColor: 'red-study-tag'},
            {id: 3, field: '物理学', tagColor: 'turquoise-study-tag'}
          ]
        },
        {
          id: 2,
          title: '宇宙科学と社会学の記事を内包しているテーマ',
          img: 'static/sample_image_7.png',
          tagProps: [
            {id: 1, field: '宇宙科学', tagColor: 'blue-study-tag'},
            {id: 2, field: '社会学', tagColor: 'orange-study-tag'},
            {id: 3, field: '物理学', tagColor: 'turquoise-study-tag'}
          ]
        },
        {
          id: 3,
          title: '芸術学と文学を記事を内包しているテーマ',
          img: 'static/sample_image_5.png',
          tagProps: [
            {id: 1, field: '芸術学', tagColor: 'red-study-tag'},
            {id: 2, field: '文学', tagColor: 'red-study-tag'}
          ]
        },
        {
          id: 4,
          title: '生物学と芸術学と物理学の記事を内包しているテーマ',
          img: 'static/sample_image_6.png',
          tagProps: [
            {id: 1, field: '生物学', tagColor: 'green-study-tag'},
            {id: 2, field: '芸術学', tagColor: 'red-study-tag'},
            {id: 3, field: '物理学', tagColor: 'turquoise-study-tag'}
          ]
        },
        {
          id: 5,
          title: '宇宙科学と社会学の記事を内包しているテーマ',
          img: 'static/sample_image_7.png',
          tagProps: [
            {id: 1, field: '宇宙科学', tagColor: 'blue-study-tag'},
            {id: 2, field: '社会学', tagColor: 'orange-study-tag'},
            {id: 3, field: '物理学', tagColor: 'turquoise-study-tag'}
          ]
        },
        {
          id: 6,
          title: '芸術学と文学を記事を内包しているテーマ',
          img: 'static/sample_image_5.png',
          tagProps: [
            {id: 1, field: '芸術学', tagColor: 'red-study-tag'},
            {id: 2, field: '文学', tagColor: 'red-study-tag'}
          ]
        },
        {
          id: 7,
          title: '生物学と芸術学と物理学の記事を内包しているテーマ',
          img: 'static/sample_image_6.png',
          tagProps: [
            {id: 1, field: '生物学', tagColor: 'green-study-tag'},
            {id: 2, field: '芸術学', tagColor: 'red-study-tag'},
            {id: 3, field: '物理学', tagColor: 'turquoise-study-tag'}
          ]
        },
        {
          id: 8,
          title: '宇宙科学と社会学の記事を内包しているテーマ',
          img: 'static/sample_image_7.png',
          tagProps: [
            {id: 1, field: '宇宙科学', tagColor: 'blue-study-tag'},
            {id: 2, field: '社会学', tagColor: 'orange-study-tag'},
            {id: 3, field: '物理学', tagColor: 'turquoise-study-tag'}
          ]
        },
        {
          id: 9,
          title: '芸術学と文学を記事を内包しているテーマ',
          img: 'static/sample_image_5.png',
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
