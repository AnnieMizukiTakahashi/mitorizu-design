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
      v-for="article in allArticle" :key="article.id">
      <article-card :article="article"/>
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
  data () {
    return {
      allArticle: [
        {
          id: 1,
          theme: '国土地理院のオープンデータを楽しむ',
          title: '国土地理院発行の美しい地図たち',
          field: '学習法',
          tagColor: 'how-to-study-tag',
          img: 'static/sample_image_2.png'
        },
        {
          id: 2,
          theme: '日本の地震について',
          title: '巨大地震に備えて読んでおくべき本',
          field: '学習法',
          tagColor: 'how-to-study-tag',
          img: 'static/sample_image_4.png'
        },
        {
          id: 3,
          theme: null,
          title: 'ヴァーチャル旅行気分になれる本',
          field: '学習法',
          tagColor: 'how-to-study-tag',
          img: 'static/sample_image_3.png'
        }
      ]
    }
  }
}

</script>
