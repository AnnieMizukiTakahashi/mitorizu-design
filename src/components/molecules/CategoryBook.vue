<template>
  <div class="page-container">
    <second-headding
    :class="category.color"
    :headding="category.name"/>

    <div class="columns is-multiline is-centered mt-16">
      <div
      class="column is-4-tablet is-mobile-6"
      v-for="article in category.allArticle" :key="article.id">
      <article-card :article="article" :isIcon="isIcon"/>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from '@/components/molecules/ArticleCard.vue'
import SecondHeadding from '@/components/atoms/SecondHeadding.vue'
export default {
  components: {
    ArticleCard,
    SecondHeadding
  },
  props: {
    category: {
      type: Object,
      required: true
    },
    isIcon: {
      type: Boolean,
      default: false
    }
  }
}

</script>
