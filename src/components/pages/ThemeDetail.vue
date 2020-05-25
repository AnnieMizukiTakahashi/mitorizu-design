<template>
  <div class="page-container is-desktop hero is-fullheight has-header">
    <theme-detail
    :allArticle="allArticle"
    :themeName="themeName"
    :themeDescription="themeDescription"
    :allBook="allBook"/>
  </div>
</template>

<script>
import ThemeDetail from '@/components/templates/ThemeDetail.vue'

export default {
  components: {
    ThemeDetail
  },
  data () {
    return {
      themeName: 'LGBT、SOGIというコンセプトはどのように社会実装されてきたか',
      themeDescription: '今回は、LGBT,SOGIの定義とあわせて誰もが生きやすい社会にしていくために活動している人について詳しくご紹介していきます。',
      allArticle:
        [
          {
            id: 1,
            theme: null,
            title: 'Vol.2インタビュー記事とおすすめ書籍',
            field: '医学',
            tagColor: 'turquoise-study-tag',
            img: 'static/sample_image_2.png'
          },
          {
            id: 2,
            theme: null,
            title: 'Vol.1 幸福な独身者たちから私たちが学ぶべきこととは。',
            field: '社会学',
            tagColor: 'orange-study-tag',
            img: 'static/sample_image_4.png'
          },
          {
            id: 3,
            theme: null,
            title: '哲学者は物理学者の本気の拳をどう受け止めるか…谷村省吾「一物理学者が観た哲学」を読んで',
            field: '物理学',
            tagColor: 'turquoise-study-tag',
            img: 'static/sample_image_3.png'
          }
        ],
      allBook: [
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
    }
  }
}
</script>
