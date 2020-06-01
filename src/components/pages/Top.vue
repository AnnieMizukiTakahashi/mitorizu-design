<template>
  <div class="page-container is-desktop hero is-fullheight has-header">
    <top
    :topMockData="topMockData"/>
  </div>
</template>

<script>
import Top from '@/components/templates/Top.vue'

export default {
  components: {
    Top
  },
  data () {
    return {
      // TopNewArticle mock data
      topMockData: {
        allNewArticle: [
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
        // TopFeatured theme mock data
        allFeaturedTheme: [
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
          }
        ],
        // TopSelectedBook mock data
        allSelectedBook: [
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
          }
        ],
        // TopLearnBook mock data(学習法の本棚はデフォルトでTOPに表示)
        allLearnBook: [
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
}
</script>
