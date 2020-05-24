<template>
  <div class="card pd-16-pc pd-8  has-text-weight-bold white-text-color main-text-color">
    <tag
      class="study-tag"
      :field="article.field"
      :tagColor="article.tagColor"
      />
      <div class="pr-8 card-title">
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
  data () {
    return {
      article: {
        id: 1,
        theme: 'ヨーロッパにおける宗教と',
        title: 'Vol.2 絵画はキリスト教をいかに広く伝播したのか',
        field: '芸術学',
        tagColor: 'red-study-tag'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.card {
  position: relative;
  background-image: linear-gradient(to bottom, transparent, rgba(6, 11, 26, 0.8)),  url(../../../assets/sample/sample_image_2.png);
  background-size: cover;
}

@media (min-width: $desktop-min-width) {
  .card-title {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
  }

  .study-tag {
    position: absolute;
  }
}

@media (max-width: $tablet-max-width) {
  .card {
    display: table;
    height: 100%;
    width: 100%;
  }
  .card-title {
    display: table-cell;
    vertical-align: bottom;
  }
  .study-tag {
    position: absolute;
  }
}

  @media (max-width: $mobile-max-width) {
  .card-subtitle {
  margin-bottom: 2.5rem;
  }
}

</style>
