<template>
  <div class="page-container is-desktop hero is-fullheight has-header">
    <article-detail/>
    <article-detail-side-column/>
  </div>
</template>

<script>
import ArticleDetail from '@/components/templates/ArticleDetail.vue'
import ArticleDetailSideColumn from '@/components/templates/ArticleDetailSideColumn.vue'

export default {
  components: {
    ArticleDetail,
    ArticleDetailSideColumn
  },
  data () {
    return {
      allCategory: [
        {
          id: 1,
          title: '形式科学',
          tagColor: 'blue-study-tag',
          tagProps: [
            { id: 1, field: '数学', number: 5 },
            { id: 2, field: '統計学', number: 6 }
          ]
        },
        {
          id: 2,
          title: '自然科学',
          tagColor: 'green-study-tag',
          tagProps: [
            { id: 1, field: '物理学', number: 1 },
            { id: 2, field: '宇宙科学', number: 5 },
            { id: 3, field: '化学', number: 6 },
            { id: 4, field: '生物学', number: 0 }
          ]
        },
        {
          id: 3,
          title: '応用科学',
          tagColor: 'turquoise-study-tag',
          tagProps: [
            { id: 1, field: '工学', number: 1 },
            { id: 2, field: '建築学', number: 5 },
            { id: 3, field: 'デザイン学', number: 6 },
            { id: 4, field: '農学', number: 0 },
            { id: 5, field: '医学', number: 3 }
          ]
        },
        {
          id: 4,
          title: '社会科学',
          tagColor: 'orange-study-tag',
          tagProps: [
            { id: 1, field: '政治学', number: 1 },
            { id: 2, field: '法学', number: 0 },
            { id: 3, field: '経済学', number: 6 },
            { id: 4, field: '社会学', number: 2 },
            { id: 5, field: '教育学', number: 3 }
          ]
        },
        {
          id: 5,
          title: '人文学',
          tagColor: 'red-study-tag',
          tagProps: [
            { id: 1, field: '哲学', number: 1 },
            { id: 2, field: '宗教学', number: 0 },
            { id: 3, field: '言語学', number: 6 },
            { id: 4, field: '人類学/考古学', number: 2 },
            { id: 5, field: '文学', number: 3 },
            { id: 6, field: '芸術', number: 3 },
            { id: 7, field: '心理学', number: 3 },
            { id: 8, field: '歴史学', number: 3 },
            { id: 9, field: '地理学', number: 3 }
          ]
        }
      ],
      allBook: [
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
              img: 'static/sample_image_8.png'
            },
            {
              id: 2,
              theme: '睡眠について',
              title: '快適な睡眠のための本棚',
              field: '医学',
              tagColor: 'turquoise-study-tag',
              img: 'static/sample_image_9.png'
            },
            {
              id: 3,
              theme: null,
              title: '夜型、朝方どちらが良いかの決着についての本棚',
              field: '医学',
              tagColor: 'turquoise-study-tag',
              img: 'static/sample_image_10.png'
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
              img: 'static/sample_image_11.png'
            },
            {
              id: 2,
              theme: '数学2',
              title: 'Python＆AI・機械学習を学ぶための本棚',
              field: '数学',
              tagColor: 'blue-study-tag',
              img: 'static/sample_image_12.png'
            },
            {
              id: 3,
              theme: '数学3',
              title: '数学の中級者向け本棚',
              field: '数学',
              tagColor: 'blue-study-tag',
              img: 'static/sample_image_13.png'
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
              img: 'static/sample_image_14.png'
            },
            {
              id: 2,
              theme: '日本の地震について',
              title: '巨大地震に備えて読んでおくべき本',
              field: '地理学',
              tagColor: 'red-study-tag',
              img: 'static/sample_image_15.png'
            },
            {
              id: 3,
              theme: null,
              title: 'ヴァーチャル旅行気分になれる本',
              field: '地理学',
              tagColor: 'red-study-tag',
              img: 'static/sample_image_16.png'
            }
          ]
        },
        {
          id: 4,
          name: '心理学分野の本棚',
          color: 'red',
          allArticle: [
            {
              id: 1,
              theme: '国土地理院のオープンデータを楽しむ',
              title: '国土地理院発行の美しい地図たち',
              field: '心理学',
              tagColor: 'red-study-tag',
              img: 'static/sample_image_14.png'
            },
            {
              id: 2,
              theme: '日本の地震について',
              title: '巨大地震に備えて読んでおくべき本',
              field: '心理学',
              tagColor: 'red-study-tag',
              img: 'static/sample_image_15.png'
            },
            {
              id: 3,
              theme: null,
              title: 'ヴァーチャル旅行気分になれる本',
              field: '心理学',
              tagColor: 'red-study-tag',
              img: 'static/sample_image_16.png'
            }
          ]
        }
      ]
    }
  }
}
</script>
