<template>
  <div class="page-container">
    <headding
    class=""
    :headding="'新着記事'"/>

    <div class="columns is-multiline is-centered mt-16">
      <div class="column is-4-tablet is-mobile-6"><article-card/></div>
      <div class="column is-4-tablet is-mobile-6"><article-card/></div>
      <div class="column is-4-tablet is-mobile-6"><article-card/></div>
    </div>

  </div>
</template>

<script>
import Headding from '../atoms/Headding.vue'
import ArticleCard from '../molecules/ArticleCard.vue'
export default {
  components: {
    Headding,
    ArticleCard
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

@media (max-width: $tablet-max-width){


}

</style>
