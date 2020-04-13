<template>
  <div class="card pd-16-pc pd-8 has-text-weight-bold white-text-color main-text-color">
    <div class="card-box">
      <p class="card-subtitle is-size-7 mb-24">
        ヨーロッパにおける宗教と美術にはどんな関わりがあったのか</p>
      <p class="card-title is-size-6">
        Vol.2 絵画はキリスト教をいかに広く伝搬しえたのか</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

.card {
  position: relative;
  background-image: linear-gradient(rgba(40, 43, 51, .3), rgba(40, 43, 51, .3)), url(../../assets/sample/sample_image_2.png);
  background-size: cover;
}

@media (min-width: $desktop-min-width) {
  .card-title {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
  }

  .card-subtitle {
    position: absolute;
    left: 1rem;
    top: 1rem;
  }
}

  .card-title {
  @media (max-width: $tablet-max-width) {
    margin-top: 4rem;
  }

  @media (max-width: $mobile-max-width) {
    margin-top: 2.5rem;
  }
}

</style>
