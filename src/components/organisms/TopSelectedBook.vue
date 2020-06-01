<template>
  <div class="">
    <headding
    class="mb-32-pc mb-16"
    :headding="'選書コーナー'"/>
    <div
      v-for="category in allSelectedBook" :key="category.id">
      <category-book
      class="mb-48 mb-64-pc"
      :category="category"
      :isIcon="true"
      :readMore="{ title: category.name + '/記事を見る', link: 'category-detail'}"/>
    </div>
    <router-link :to="{ name: 'category' }">
      <round-button
      class="mt-32-pc mt-16 mb-16"
      :title="'他の学問分野の本棚も見る'"/>
    </router-link>
  </div>
</template>

<script>
import CategoryBook from '@/components/organisms/CategoryBook.vue'
import Headding from '@/components/atoms/Headding.vue'
import RoundButton from '@/components/atoms/RoundButton.vue'

export default {
  components: {
    CategoryBook,
    Headding,
    RoundButton
  },
  props: {
    allSelectedBook: {
      type: Array,
      required: true
    }
  }
}
</script>
