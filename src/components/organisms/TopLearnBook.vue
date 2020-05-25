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
  data () {
    return {
      allArticle: [
        {
          id: 1,
          theme: 'いかに集中力を引き出すには',
          title: '即集中するための本',
          field: '学習法',
          tagColor: 'how-to-study-tag',
          img: 'static/sample_image_17.png'
        },
        {
          id: 2,
          theme: '人の忘却曲線に逆らうには',
          title: '記憶の定着に役立つ本',
          field: '学習法',
          tagColor: 'how-to-study-tag',
          img: 'static/sample_image_19.png'
        },
        {
          id: 3,
          theme: null,
          title: '独学するときの勉強法',
          field: '学習法',
          tagColor: 'how-to-study-tag',
          img: 'static/sample_image_18.png'
        }
      ]
    }
  }
}

</script>
