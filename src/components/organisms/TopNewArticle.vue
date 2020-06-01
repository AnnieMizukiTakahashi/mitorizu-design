<template>
  <div class="page-container">
    <headding
    class=""
    :headding="'新着記事'"/>

    <div class="columns is-multiline is-centered mt-16">
      <div
        class="column is-4-tablet is-mobile-6"
        v-for="article in allNewArticle" :key="article.id">
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
    allNewArticle: {
      type: Array,
      required: true
    }
  }
}

</script>
