<template>
  <div class="card pd-16-pc pd-8 has-text-weight-bold default-text-color"
    :style='{ backgroundImage: "url(" + article.img + ")"}'>
    <tag
      class="study-tag"
      :field="article.field"
      :tag-color="article.tagColor"/>
    <div v-if="isIcon" class="card-title pt-4 pb-4 pr-8 pl-8">
      <p class="is-size-7">{{ article.theme }}</p>
      <figcaption class="is-flex">
        <img src="../../assets/ic_book_darkblue_24px.svg" class="book mr-8" alt="white book image">
        <p class="is-size-6">{{ article.title }}</p>
      </figcaption>
    </div>
    <div v-else>
      <figcaption class="card-title pt-4 pb-4 pr-8 pl-8">
        <p class="is-size-7">{{ article.theme }}</p>
        <p class="is-size-6">{{ article.title }}</p>
      </figcaption>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/atoms/Tag.vue'
export default {
  components: {
    Tag
  },
  props: {
    article: {
      type: Object,
      required: true
    },
    isIcon: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.card {
  position: relative;
  background-size: cover;
  height: 164px;

  .study-tag {
    position: absolute;
}

  .card-title {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.92);
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
  }
}

</style>
