<template>
  <div class="page-container">
    <headding
    class=""
    :headding="'新着記事'"/>

    <div class="columns is-multiline is-centered mt-16">
      <div
        class="column is-4-tablet is-mobile-6"
        v-for="article in allArticle" :key="article.id">
        <article-card :article="article"/>
      </div>
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
  },
  data() {
    return {
      allArticle: [
      {
        id: 1,
        theme: '信頼するとはどういうことか信頼研究の最前線',
        title: 'Vol.2インタビュー記事とおすすめ書籍',
        field: '医学',
        tagColor: 'turquoise-study-tag',
        img: '../../assets/sample/sample_image_2.png'
      },
      {
        id: 2,
        theme: '信頼するとはどういうことか信頼研究の最前線',
        title: 'Vol.2インタビュー記事とおすすめ書籍',
        field: '社会学',
        tagColor: 'orange-study-tag',
        img: '../../assets/sample/sample_image_2.png'
      },
      {
        id: 3,
        theme: '信頼するとはどういうことか信頼研究の最前線',
        title: 'Vol.2インタビュー記事とおすすめ書籍',
        field: '物理学',
        tagColor: 'turquoise-study-tag',
        img: '../../assets/sample/sample_image_2.png'
      },
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

@media (max-width: $tablet-max-width){


}

</style>
