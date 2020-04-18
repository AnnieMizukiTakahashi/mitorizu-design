<template>
  <div class="card pd-16-pc pd-8 has-text-weight-bold white-text-color main-text-color">
            <tag class="study-tag"/>
      <p class="card-subtitle is-size-7">
        LGBT、SOGIというコンセプトはどのように社会実装されてきたか</p>
      <div class="card-title">
          <div class="container is-flex">
            <img src="../../assets/ic_book_white_24px.svg" class="book mr-8" alt="">
            <p class="is-size-6">LGBTQ 学びはじめの本棚</p>
        </div>
      </div>
  </div>
</template>

<script>
import Tag from '../atoms/Tag.vue';
export default {
  components: {
    Tag
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

.card {
  position: relative;
  background-image: linear-gradient(rgba(40, 43, 51, .3), rgba(40, 43, 51, .3)), url(../../assets/sample/sample_image_1.png);
  background-size: cover;
}

@media (min-width: $desktop-min-width) {
  .card-title {
    position: absolute;
    left: 1rem;
    bottom: 0.25rem;
  }

  .card-subtitle {
    position: absolute;
    left: 1rem;
    top: 1rem;
  }
  .study-tag {
    position: absolute;

  }
}

@media (max-width: $tablet-max-width) {
  .card-subtitle {
  margin-bottom: 4rem;
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
