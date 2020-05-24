<template>
  <div class="mt-32">
    <headding
    class="mt-16 mt-32-pc"
    :headding="'テーマに関わる本棚'"/>
    <div class="columns is-multiline is-centered mt-8">
      <div
      class="column is-4-tablet is-mobile-6"
      v-for="book in allBook" :key="book.id">
      <article-card :article="book" :isIcon="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from '@/components/molecules/ArticleCard.vue'
import Headding from '@/components/atoms/Headding.vue'
import RoundButton from '@/components/atoms/RoundButton.vue'
export default {
  components: {
    ArticleCard,
    Headding,
    RoundButton
  },
  props: {
    allBook: {
      type: Object,
      required: true
    }
  }
}
</script>
