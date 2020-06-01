<template>
  <div class="page-container">
    <div class="level is-mobile">
      <div class="level-left">
        <second-headding
        :headding="'記事一覧'"/>
      </div>
      <read-more-button
      class="level-right"
      :readMore="readMore"/>
    </div>
    <div class="columns is-multiline is-centered mt-16">
      <div
        class="column is-4-tablet is-mobile-6"
        v-for="article in allCategoryDetailArticle" :key="article.id">
        <article-card :article="article"/>
      </div>
    </div>
  </div>
</template>

<script>
import SecondHeadding from '@/components/atoms/SecondHeadding.vue'
import ArticleCard from '@/components/molecules/ArticleCard.vue'
import ReadMoreButton from '@/components/atoms/ReadMoreButton.vue'
export default {
  components: {
    SecondHeadding,
    ArticleCard,
    ReadMoreButton
  },
  props: {
    readMore: {
      type: Object,
      required: true
    },
    allCategoryDetailArticle: {
      type: Array,
      required: true
    }
  }
}
</script>
