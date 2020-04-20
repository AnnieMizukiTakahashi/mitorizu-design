<template>
  <div class="study-tag pl-8 pr-8 pt-4 pb-4 is-size-7" v-bind:style="{background: color}">
    <p class="text-color-white has-text-centerd">{{field}}</p>
  </div>
</template>

<script>
export default {
  props: {
    field: String,
    color: String
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';
  .study-tag {
    color: $white;
    border-radius: 16px;
  }
</style>
