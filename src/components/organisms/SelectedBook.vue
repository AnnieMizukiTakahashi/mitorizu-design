<template>
  <div class="">
    <headding
    class=""
    :headding="'選書コーナー'"/>
    <div
      v-for="category in allCategory" :key="category.id">
      <category-book
      :category="category"
      :isIcon="true" class="mt-24 mt-32-pc"/>
    </div>
    <router-link :to="{ name: 'category' }">
      <round-button
      class="mt-32-pc mt-16 mb-16"
      :title="'他の学問分野/入門本棚も見る'"/>
    </router-link>
  </div>
</template>

<script>
import CategoryBook from '@/components/molecules/CategoryBook.vue'
import Headding from '@/components/atoms/Headding.vue'
import RoundButton from '@/components/atoms/RoundButton.vue'
export default {
  components: {
    CategoryBook,
    Headding,
    RoundButton
  },
  data () {
    return {
      allCategory: [
        {
          id: 1,
          name: '医学分野の本棚',
          color: 'turquoise',
          allArticle: [
            {
              id: 1,
              theme: 'コロナウイルスの最新研究より',
              title: '感染症研究の入門本棚',
              field: '医学',
              tagColor: 'turquoise-study-tag',
              img: 'static/sample_image_2.png'
            },
            {
              id: 2,
              theme: '睡眠について',
              title: '快適な睡眠のための本棚',
              field: '医学',
              tagColor: 'turquoise-study-tag',
              img: 'static/sample_image_4.png'
            },
            {
              id: 3,
              theme: null,
              title: '夜型、朝方どちらが良いかの決着についての本棚',
              field: '医学',
              tagColor: 'turquoise-study-tag',
              img: 'static/sample_image_3.png'
            }
          ]
        },
         {
          id: 2,
          name: '数学分野の本棚',
          color: 'blue',
          allArticle: [
            {
              id: 1,
              theme: null,
              title: '数学の入門本棚',
              field: '数学',
              tagColor: 'blue-study-tag',
              img: 'static/sample_image_2.png'
            },
            {
              id: 2,
              theme: '数学2',
              title: 'Python＆AI・機械学習を学ぶための本棚',
              field: '数学',
              tagColor: 'blue-study-tag',
              img: 'static/sample_image_4.png'
            },
            {
              id: 3,
              theme: '数学3',
              title: '数学の中級者向け本棚',
              field: '数学',
              tagColor: 'blue-study-tag',
              img: 'static/sample_image_3.png'
            }
          ]
        },
        {
          id: 3,
          name: '地理学分野の本棚',
          color: 'red',
          allArticle: [
            {
              id: 1,
              theme: '国土地理院のオープンデータを楽しむ',
              title: '国土地理院発行の美しい地図たち',
              field: '地理学',
              tagColor: 'red-study-tag',
              img: 'static/sample_image_2.png'
            },
            {
              id: 2,
              theme: '日本の地震について',
              title: '巨大地震に備えて読んでおくべき本',
              field: '地理学',
              tagColor: 'red-study-tag',
              img: 'static/sample_image_4.png'
            },
            {
              id: 3,
              theme: null,
              title: 'ヴァーチャル旅行気分になれる本',
              field: '地理学',
              tagColor: 'red-study-tag',
              img: 'static/sample_image_3.png'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
