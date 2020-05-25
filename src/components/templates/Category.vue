<template>
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

    <div class="pt-16 pt-32-pc pb-8 pb-16-pc pl-16 pl-32-pc pr-16 pr-32-pc">
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
            :hasLargeTag="true"/>
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
  props: {
    allCategory: {
      type: Object,
      required: true
    }
  },
  computed: {
    categoryList () {
      return 'font-size: ' + '1rem'
    }
  }
}
</script>
