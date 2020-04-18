<template>
  <div class="card pd-16-pc pd-8 has-text-weight-bold white-text-color main-text-color">
    <tag-red class="study-tag"/>
      <div class="card-title pr-16">
        <p class="is-size-7">ヨーロッパにおける宗教と美術にはどんな関わりがあったのか</p>
        <p class="is-size-6">Vol.2 絵画はキリスト教をいかに広く伝搬しえたのか</p>
    </div>
  </div>
</template>

<script>
import TagRed from '../atoms/TagRed.vue';
export default {
  components: {
    TagRed
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