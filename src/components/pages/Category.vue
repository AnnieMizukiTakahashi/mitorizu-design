<template>
  <div class="page-container is-desktop hero is-fullheight has-header">
    <category
    :allCategory="allCategory"/>
  </div>
</template>

<script>
import Category from '@/components/templates/Category.vue'

export default {
  components: {
    Category
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
      ]
    }
  }
}
</script>
