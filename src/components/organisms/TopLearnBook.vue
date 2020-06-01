<template>
  <div class="page-container">
    <second-headding
    :headding="'学習法の本棚'"
    :class="'how-to-study'"
    />
    <p class="is-size-6">勉強したいけど、どのように何を始めたらいいかわからない？ こちらの本を参考にしてください！</p>

    <div class="columns is-multiline is-centered mt-16">
      <div
      class="column is-4-tablet is-mobile-6"
      v-for="article in allLearnBook" :key="article.id">
      <article-card :article="article"/>
      </div>
    </div>
    <router-link :to="{ name: 'category-detail' }">
      <round-button
      class="mt-32-pc mt-16 mb-16"
      :title="'他の学習法を知る'"/>
    </router-link>
  </div>
</template>

<script>
import ArticleCard from '@/components/molecules/ArticleCard.vue'
import SecondHeadding from '@/components/atoms/SecondHeadding.vue'
import RoundButton from '@/components/atoms/RoundButton.vue'
export default {
  components: {
    ArticleCard,
    SecondHeadding,
    RoundButton
  },
  props: {
    allLearnBook: {
      type: Array,
      required: true
    }
  }
}

</script>
