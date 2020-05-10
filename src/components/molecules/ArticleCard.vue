<template>
  <div class="card pd-16-pc pd-8 has-text-weight-bold white-text-color ">
    <tag
      class="study-tag"
      :field="article.field"
      :tag-color="article.tagColor"/>
      <div class="card-title pr-16">
        <p class="is-size-7">{{ article.theme }}</p>
        <p class="is-size-6">{{ article.title }}</p>
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
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>

.card {
  position: relative;
  background-image: linear-gradient(rgba(40, 43, 51, .3), rgba(40, 43, 51, .3)), url(../../assets/sample/sample_image_2.png);
  background-size: cover;
  height: 164px;

  .study-tag {
    position: absolute;
}

  .card-title {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
  }
}

</style>
