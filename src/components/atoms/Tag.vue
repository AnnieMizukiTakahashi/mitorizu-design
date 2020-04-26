<template>
  <div class="study-tag pl-8 pr-8 pt-4 pb-4 is-size-7" v-bind:class="tagColor">
    <p class="text-color-white has-text-centerd">{{ field }}</p>
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: String,
      required: true
    },
    tagColor: {
      type: String,
      required: true
    }

  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';
  .study-tag {
    color: $white;
    border-radius: 16px;
  }
  .green-study-tag {
    background-color: $green; //natural science
  }
  .blue-study-tag {
    background-color: $blue; //formal science
  }
  .red-study-tag {
    background-color: $red; // humanities
  }

</style>
