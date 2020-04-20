<template>
  <div class="is-flex">
    <button
      class="button has-main-color-button is-rounded is-height-48">
      <span class="has-text-weight-bold">{{title}}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss">
@import '../../styles/_variables.scss';
.button {
  margin: 0 auto;
}

</style>
