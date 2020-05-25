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
      :headding="this.themeName"/>
      <p class="is-size-6 mt-16">{{ this.themeDescription }}</p>
      <theme-detail-list :allArticle="this.allArticle"/>
      <theme-detail-book
      class="mt-48"
      :allBook="this.allBook"/>

      <div class="mt-48 pt-16 pb-16 pl-16 pr-16">
        <headding
        :headding="'学問分野の理解を深める本棚はこちらから！'"/>
        <div class="columns is-mobile is-multiline mt-8">
          <tag
          class="column is-narrow"
          v-for="article in this.allArticle" :key="article.id"
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
import ThemeDetailList from '@/components/organisms/ThemeDetailList.vue'
import ThemeDetailBook from '@/components/organisms/ThemeDetailBook.vue'
import Tag from '@/components/atoms/Tag.vue'

export default {
  components: {
    Headding,
    ThemeDetailList,
    ThemeDetailBook,
    Tag
  },
  props: {
    allArticle: {
      type: Object,
      required: true
    },
    themeName: {
      type: String,
      required: true
    },
    themeDescription: {
      type: String,
      required: true
    },
    allBook: {
      type: Object,
      required: true
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
