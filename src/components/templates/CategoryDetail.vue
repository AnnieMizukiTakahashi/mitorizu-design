<template>
  <div class="container mb-48 ml-16 mr-16 ml-32-pc mr-32-pc">
    <nav class="breadcrumb has-arrow-separator mt-16" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link :to="{ name: 'top'}">
            <p class="has-text-underline main-text-color">トップページ</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'category'}">
            <p class="has-text-underline main-text-color">学問分野から探す</p>
          </router-link>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">心理学</a>
        </li>
      </ul>
    </nav>
    <headding
    class="mt-48"
    :headding="'心理学の記事/本棚一覧'"/>
    <div class="columns mt-16">
      <div class="column">
        <tag
        :field="this.allCategory[4].tagProps[6].field"
        :tagColor="this.allCategory[4].tagColor"
        :tagCssStyle="categoryList"
        :hasLargeTag="true"/>
      </div>
      <p class="column is-10">
        心と行動の学問であり、科学的な手法によって研究されるそのアプローチとしては、行動主義のように行動や認知を客観的に観察しようとするものと、一方で、主観的な内面的な経験を理論的な基礎におくものとがある
      </p>
    </div>
    <category-book
    class="mt-48"
    :category="this.allBook[3]"
    :isIcon="true"
    :readMore="{ title: 'もっと見る', link: 'category-detail'}"/>
    <category-article
    class="mt-48"
    :readMore="{ title: 'もっと見る', link: 'category-detail'}"/>
    <div class="columns is-multiline is-centered mt-16">
      <div
        class="column is-4-tablet is-mobile-6 mb-32"
        v-for="theme in allTheme" :key="theme.id">
        <theme-list-card :theme="theme"/>
      </div>
      <category-detail-list/>
    </div>
  </div>
</template>

<script>
import Headding from '@/components/atoms/Headding.vue'
import Tag from '@/components/atoms/Tag.vue'
import CategoryBook from '@/components/organisms/CategoryBook.vue'
import CategoryArticle from '@/components/organisms/CategoryArticle.vue'
import CategoryDetailList from '@/components/organisms/CategoryDetailList.vue'

export default {
  components: {
    Headding,
    Tag,
    CategoryBook,
    CategoryArticle,
    CategoryDetailList
  },
  props: {
    allCategory: {
      type: Object,
      required: true
    },
    allBook: {
      type: Object,
      required: true
    }
  }
}
</script>
