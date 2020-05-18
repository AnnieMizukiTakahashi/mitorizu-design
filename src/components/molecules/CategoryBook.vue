<template>
  <div class="page-container">
    <div class="level is-mobile">
      <div class="level-left">
        <second-headding
        :class="category.color"
        :headding="category.name"/>
      </div>
      <div class="level-right">
        <router-link
          class="is-size-6 has-text-weight-bold default-text-color mr-8"
          :to="{ name: 'category-detail' }">
          もっと見る
        </router-link>
        <router-link class="with-arrow" :to="{ name: 'category-detail' }"/>
      </div>
    </div>

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
