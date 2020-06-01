<template>
  <div class="page-container is-desktop hero is-fullheight has-header">
    <category-detail
    :allCategoryTagStyle="categoryDetailMockData.allCategoryTagStyle"
    :allCategoryDetailArticle="categoryDetailMockData.allCategoryDetailArticle"
    :allCategoryDetailBook="categoryDetailMockData.allCategoryDetailBook"
    :allCategoryDetailTheme="categoryDetailMockData.allCategoryDetailTheme"/>
  </div>
</template>

<script>
import CategoryDetail from '@/components/templates/CategoryDetail.vue'

export default {
  components: {
    CategoryDetail
  },
  data () {
    return {
      categoryDetailMockData: {
        allCategoryTagStyle: [
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
        allCategoryDetailArticle: [
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
        ],
        allCategoryDetailBook: [
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
        ],
        allCategoryDetailTheme: [
          {
            id: 1,
            title: '生物学と芸術学と物理学の記事を内包しているテーマ',
            img: 'static/sample_image_6.png',
            tagProps: [
              {id: 1, field: '生物学', tagColor: 'green-study-tag'},
              {id: 2, field: '芸術学', tagColor: 'red-study-tag'},
              {id: 3, field: '物理学', tagColor: 'turquoise-study-tag'}
            ]
          },
          {
            id: 2,
            title: '宇宙科学と社会学の記事を内包しているテーマ',
            img: 'static/sample_image_7.png',
            tagProps: [
              {id: 1, field: '宇宙科学', tagColor: 'blue-study-tag'},
              {id: 2, field: '社会学', tagColor: 'orange-study-tag'},
              {id: 3, field: '物理学', tagColor: 'turquoise-study-tag'}
            ]
          },
          {
            id: 3,
            title: '芸術学と文学を記事を内包しているテーマ',
            img: 'static/sample_image_5.png',
            tagProps: [
              {id: 1, field: '芸術学', tagColor: 'red-study-tag'},
              {id: 2, field: '文学', tagColor: 'red-study-tag'}
            ]
          },
          {
            id: 4,
            title: '生物学と芸術学と物理学の記事を内包しているテーマ',
            img: 'static/sample_image_6.png',
            tagProps: [
              {id: 1, field: '生物学', tagColor: 'green-study-tag'},
              {id: 2, field: '芸術学', tagColor: 'red-study-tag'},
              {id: 3, field: '物理学', tagColor: 'turquoise-study-tag'}
            ]
          }
        ]
      }
    }
  }
}
</script>
