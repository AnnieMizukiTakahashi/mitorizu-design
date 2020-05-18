<template>
  <div v-if="hasEmptyArticle" class="is-flex">
    <div class="study-tag pl-8 pr-8 pt-4 pb-4 is-size-7">
      <p class="has-text-weight-bold has-text-centerd grey400-text-color"
      :style="tagCssStyle">{{ field }}</p>
    </div>
    <p class="is-size-6 grey400-text-color pl-8 pt-4 pb-4">0</p>
  </div>
  <div v-else-if="hasArticleNumber" class="is-flex">
    <div class="study-tag pl-8 pr-8 pt-4 pb-4 is-size-7"
    :class="tagColor">
      <p class="has-text-weight-bold has-text-centerd"
      :style="tagCssStyle">{{ field }}</p>
    </div>
    <p class="is-size-6 has-text-weight-bold grey600-text-color pl-8 pt-4 pb-4">
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
    hasArticleNumber: {
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

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
  .study-tag {
    color: $white;
    border-radius: 4px;
  }

  .orange-study-tag {
    background-color: $white;
    color: $orange; // sociology
  }
  .red-study-tag {
    background-color: $white;
    color: $red; // humanities
  }
  .turquoise-study-tag {
    background-color: $white;
    color: $turquoise; // science
  }
  .green-study-tag {
    background-color: $white;
    color: $green; //natural science
  }
  .blue-study-tag {
    background-color: $white;
    color: $blue; //formal science
  }
  .how-to-study-tag {
    background-color: $white;
    color: $main-color; //formal science
  }

</style>
