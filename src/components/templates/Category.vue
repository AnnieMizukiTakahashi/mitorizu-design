<template>
  <div class="page-container is-desktop hero is-fullheight has-header">
    <div class="container mb-48 ml-16 mr-16 ml-32-pc mr-32-pc">
      <nav class="breadcrumb has-arrow-separator mt-16" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link :to="{ name: 'top'}">
              <p class="has-text-underline main-text-color">トップページ</p>
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">学問分野から探す</a>
          </li>
        </ul>
      </nav>

      <headding
      class="mt-48"
      :headding="'学問分野から探す'"/>
      <div class="columns">
        <div class="column mt-16">
          <p>勉強法や学習マインドから知りたい方はこちら！</p>
        </div>
        <div class="column">
          <router-link :to="{ name: 'category-detail' }">
            <round-button
            class=""
            :title="'学習法についての記事・本棚'"/>
          </router-link>
        </div>
      </div>

      <div class="category-container pt-16 pt-32-pc pb-8 pb-16-pc pl-16 pl-32-pc pr-16 pr-32-pc">
        <div v-for="category in allCategory" :key="category.id">
          <p class="is-size-6 mb-8">
          {{ category.title }}
          </p>
          <div class="mb-24">
            <div class="columns is-mobile is-multiline mt-8">
            <tag
              class="column is-narrow mr-8"
              v-for="tagProp in category.tagProps" :key="tagProp.id"
              :field="tagProp.field"
              :tagColor="category.tagColor"
              :tagCssStyle="categoryList"
              :articleNumber="tagProp.number"
              :hasArticleNumber="true"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headding from '@/components/atoms/Headding.vue'
import RoundButton from '@/components/atoms/RoundButton.vue'
import Tag from '@/components/atoms/Tag.vue'
export default {
  components: {
    Headding,
    RoundButton,
    Tag
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
  },
  computed: {
    categoryList () {
      return 'font-size: ' + '1rem'
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/_variables.scss';

.category-container {
  background-color: $grey50;
}
</style>
