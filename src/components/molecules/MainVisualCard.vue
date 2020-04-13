<template>
  <div class="card pd-16-pc pd-8">
    <p class="card-subtitle is-size-7 has-text-weight-bold main-text-color mb-24">
      ヨーロッパにおける宗教と美術にはどんな関わりがあったのか</p>
    <p class="card-title is-size-6 has-text-weight-bold">
      Vol.2 絵画はキリスト教をいかに広く伝搬しえたのか</p>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

.card {
  height: 160px;
  position: relative;

  .card-title {
  @media (min-width: $tablet-max-width) {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
  }
  @media (max-width: $tablet-max-width) {
      position: absolute;
      left: 0.5rem;
      bottom: 0.5rem;
    }
  }
}
</style>
