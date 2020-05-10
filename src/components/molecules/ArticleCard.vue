<template>
  <div class="card pd-16-pc pd-8 has-text-weight-bold white-text-color"
    :style='{ backgroundImage: "url(" + article.img + ")"}'>
    <tag
      class="study-tag"
      :field="article.field"
      :tag-color="article.tagColor"/>
    <figcaption class="card-title pt-4 pb-4 pr-8 pl-8">
      <p class="is-size-7">{{ article.theme }}</p>
      <p class="is-size-6">{{ article.title }}</p>
    </figcaption>
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
      type: Object
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
    background-color: rgba(6, 11, 26, 0.8);
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
  }
}

</style>
