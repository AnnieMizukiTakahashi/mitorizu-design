<template>
    <div class="page-container is-desktop hero is-fullheight has-header">
      <div class="container mb-48 ml-16 mr-16 ml-32-pc mr-32-pc">
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
            v-for="theme in allTheme" :key="theme.id">
            <theme-list-card :theme="theme"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ThemeListCard from '@/components/molecules/ThemeListCard.vue'
import Headding from '@/components/atoms/Headding.vue'
export default {
  components: {
    ThemeListCard,
    Headding
  },
  data () {
    return {
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

<style lang="scss">
@import '@/styles/_variables.scss';
</style>
