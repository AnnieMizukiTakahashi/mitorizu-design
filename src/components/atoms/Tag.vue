<template>
  <div v-if="hasEmptyArticle" class="is-flex">
    <div class="study-tag pl-8 pr-8 pt-4 pb-4 is-size-7">
      <p class="has-text-weight-bold has-text-centerd grey400-text-color"
      :style="tagCssStyle">{{ field }}</p>
    </div>
    <p class="is-size-6 grey400-text-color pl-8 pt-4 pb-4">0</p>
  </div>
  <div v-else-if="hasLargeTag" class="is-flex">
    <div class="study-tag pl-8 pr-8 pt-4 pb-4 is-size-7"
    :class="tagColor">
      <p class="has-text-weight-bold has-text-centerd"
      :style="tagCssStyle">{{ field }}</p>
    </div>
    <p class="is-size-6 has-text-weight-bold grey600-text-color pl-8 pt-4 pb-4"
    v-if="articleNumber">
      {{ articleNumber }}
    </p>
  </div>
  <div v-else class="study-tag pl-8 pr-8 pt-4 pb-4 is-size-7"
  :class="tagColor">
    <p class="has-text-weight-bold has-text-centerd"
    :style="tagCssStyle">{{ field }}</p>
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: String,
      required: true
    },
    tagColor: {
      type: String,
      required: true
    },
    tagCssStyle: {
      type: String,
      required: false
    },
    articleNumber: {
      type: Number,
      required: false
    },
    hasLargeTag: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    hasEmptyArticle () {
      return this.articleNumber === 0
    }
  }
}
</script>
