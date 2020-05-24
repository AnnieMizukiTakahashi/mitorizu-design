<template>
  <div class="page-container is-desktop hero is-fullheight has-header">
    <div class="container mb-48 ml-16 mr-16 ml-32-pc mr-32-pc mb-64">
      <nav class="breadcrumb has-arrow-separator mt-16" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link :to="{ name: 'top'}">
              <p class="has-text-underline main-text-color">トップページ</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'theme'}">
              <p class="has-text-underline main-text-color">テーマ一覧</p>
            </router-link>
          </li>
          <li class="is-active">
          </li>
        </ul>
      </nav>

      <headding
      class="mt-48"
      :headding="themeName"/>
      <p class="is-size-6 mt-16">{{ themeDescription }}</p>
      <theme-detail-list :allArticle="allArticle"/>
      <theme-detail-book
      class="mt-48"
      :allBook="allBook"/>

      <div class="mt-48 pt-16 pb-16 pl-16 pr-16">
        <headding
        :headding="'学問分野の理解を深める本棚はこちらから！'"/>
        <div class="columns is-mobile is-multiline mt-8">
          <tag
          class="column is-narrow"
          v-for="article in allArticle" :key="article.id"
          :field="article.field"
          :tag-color="article.tagColor"
          :tagCssStyle="categoryList"
          :hasLargeTag="true"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headding from '@/components/atoms/Headding.vue'
import ThemeDetailList from '@/components/organisms/theme_detail/ThemeDetailList.vue'
import ThemeDetailBook from '@/components/organisms/theme_detail/ThemeDetailBook.vue'
import Tag from '@/components/atoms/Tag.vue'

export default {
  components: {
    Headding,
    ThemeDetailList,
    ThemeDetailBook,
    Tag
  },
  data () {
    return {
      themeName: "LGBT、SOGIというコンセプトはどのように社会実装されてきたか",
      themeDescription: "今回は、LGBT,SOGIの定義とあわせて誰もが生きやすい社会にしていくために活動している人について詳しくご紹介していきます。",
      allArticle: [
        {
          id: 1,
          theme: null,
          title: 'Vol.2インタビュー記事とおすすめ書籍',
          field: '医学',
          tagColor: 'turquoise-study-tag',
          img: 'static/sample_image_2.png'
        },
        {
          id: 2,
          theme: null,
          title: 'Vol.1 幸福な独身者たちから私たちが学ぶべきこととは。',
          field: '社会学',
          tagColor: 'orange-study-tag',
          img: 'static/sample_image_4.png'
        },
        {
          id: 3,
          theme: null,
          title: '哲学者は物理学者の本気の拳をどう受け止めるか…谷村省吾「一物理学者が観た哲学」を読んで',
          field: '物理学',
          tagColor: 'turquoise-study-tag',
          img: 'static/sample_image_3.png'
        }
      ],
      allBook: [
        {
          id: 1,
          theme: 'コロナウイルスの最新研究より',
          title: '感染症研究の入門本棚',
          field: '医学',
          tagColor: 'turquoise-study-tag',
          img: 'static/sample_image_8.png'
        },
        {
          id: 2,
          theme: '睡眠について',
          title: '快適な睡眠のための本棚',
          field: '医学',
          tagColor: 'turquoise-study-tag',
          img: 'static/sample_image_9.png'
        },
        {
          id: 3,
          theme: null,
          title: '夜型、朝方どちらが良いかの決着についての本棚',
          field: '医学',
          tagColor: 'turquoise-study-tag',
          img: 'static/sample_image_10.png'
        }
      ]
    }
  },
  computed: {
    categoryList () {
      return 'font-size: ' + '1rem'
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/_variables.scss';
</style>
