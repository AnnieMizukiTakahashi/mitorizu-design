<template>
  <div class="card pd-16-pc pd-8 has-text-weight-bold white-text-color">
    <tag
      class="study-tag"
      :field="'医学'"
      :color="'#44C0CB'"/>
      <div class="card-title pr-16">
        <p class="is-size-7">信頼するとはどういうことか信頼研究の最前線</p>
        <p class="is-size-6">Vol.2インタビュー記事とおすすめ書籍</p>
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
