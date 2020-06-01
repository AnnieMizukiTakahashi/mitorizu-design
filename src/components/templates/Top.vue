<template>
  <div>
    <top-main-visual/>
    <top-first-user class="mt-24 ml-16 mr-16"/>
    <top-new-article class="mt-24 ml-16 mr-16"
    :allNewArticle="this.topMockData.allNewArticle"/>
    <top-featured class="mt-48 ml-16 mr-16"
    :allFeaturedTheme="this.topMockData.allFeaturedTheme"/>
    <top-selected-book class="mt-24 mt-32-pc ml-16 mr-16"
    :allSelectedBook="this.topMockData.allSelectedBook"/>
    <top-learn-book class="mt-48 ml-16 mr-16 mb-64"
    :allLearnBook="this.topMockData.allLearnBook"/>
  </div>
</template>

<script>
import TopMainVisual from '@/components/organisms/TopMainVisual.vue'
import TopFirstUser from '@/components/organisms/TopFirstUser.vue'
import TopNewArticle from '@/components/organisms/TopNewArticle.vue'
import TopFeatured from '@/components/organisms/TopFeatured.vue'
import TopSelectedBook from '@/components/organisms/TopSelectedBook.vue'
import TopLearnBook from '@/components/organisms/TopLearnBook.vue'

export default {
  components: {
    TopMainVisual,
    TopFirstUser,
    TopNewArticle,
    TopFeatured,
    TopSelectedBook,
    TopLearnBook
  },
  props: {
    topMockData: {
      type: Object,
      required: true
    }
  }
}
</script>
