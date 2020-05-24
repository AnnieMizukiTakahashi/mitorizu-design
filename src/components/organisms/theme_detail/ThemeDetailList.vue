<template>
  <div class="page-container">
    <headding
    class="mt-32"
    :headding="'記事一覧'"/>

    <div class="columns is-multiline is-centered mt-8">
      <div
        class="column is-4-tablet is-mobile-6"
        v-for="article in allArticle" :key="article.id">
        <article-card :article="article"/>
      </div>
    </div>

  </div>
</template>

<script>
import Headding from '@/components/atoms/Headding.vue'
import ArticleCard from '@/components/molecules/ArticleCard.vue'
export default {
  components: {
    Headding,
    ArticleCard
  },
  props: {
    allArticle: {
      type: Object,
      required: true
    }
  }
}
</script>
