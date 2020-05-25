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
import Headding from '@/components/atoms/Headding.vue'
import ArticleCard from '@/components/molecules/ArticleCard.vue'
export default {
  components: {
    Headding,
    ArticleCard
  },
  data () {
    return {
      allArticle: [
        {
          id: 1,
          theme: '信頼するとはどういうことか信頼研究の最前線',
          title: 'Vol.2インタビュー記事とおすすめ書籍',
          field: '医学',
          tagColor: 'turquoise-study-tag',
          img: 'static/sample_image_2.png'
        },
        {
          id: 2,
          theme: '社会学者が語る〈おひとりさま〉のススメ',
          title: 'Vol.1 幸福な独身者たちから私たちが学ぶべきこととは。',
          field: '社会学',
          tagColor: 'orange-study-tag',
          img: 'static/sample_image_4.png'
        },
        {
          id: 3,
          theme: '信頼するとはどういうことか信頼研究の最前線',
          title: '哲学者は物理学者の本気の拳をどう受け止めるか…谷村省吾「一物理学者が観た哲学」を読んで',
          field: '物理学',
          tagColor: 'turquoise-study-tag',
          img: 'static/sample_image_3.png'
        }
      ]
    }
  }
}

</script>
