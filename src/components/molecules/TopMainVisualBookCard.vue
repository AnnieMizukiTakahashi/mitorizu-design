<template>
  <div class="card pd-16-pc pd-8  has-text-weight-bold white-text-color main-text-color">
    <tag
      class="study-tag"
      :field="article.field"
      :tagColor="article.tagColor"
      />
      <div class="pr-8 card-title">
        <p class="is-size-7">{{ article.theme }}</p>
        <div class="is-flex">
          <img src="../../assets/ic_book_white_24px.svg" class="book mr-8" alt="white book image">
          <p class="is-size-6">{{ article.title }}</p>
        </div>
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
        theme: 'LGBT、SOGIというコンセプトはどのように社会実装されてきたか',
        title: 'LGBTQ 学びはじめの本棚',
        field: '社会学',
        tagColor: 'orange-study-tag'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.card {
  position: relative;
  background-image: linear-gradient(to bottom, transparent, rgba(6, 11, 26, 0.8)), url(../../assets/sample/sample_image_1.png);
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
