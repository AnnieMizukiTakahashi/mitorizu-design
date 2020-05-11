<template>
  <div class="study-tag pl-8 pr-8 pt-4 pb-4 is-size-7" :class="tagColor">
    <p class="has-text-weight-bold has-text-centerd">{{ field }}</p>
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
@import '@/styles/_variables.scss';
  .study-tag {
    color: $white;
    border-radius: 4px;
  }

  .orange-study-tag {
    background-color: $white;
    color: $orange; // sociology
  }
  .red-study-tag {
    background-color: $white;
    color: $red; // humanities
  }
  .turquoise-study-tag {
    background-color: $white;
    color: $turquoise; // science
  }
  .green-study-tag {
    background-color: $white;
    color: $green; //natural science
  }
  .blue-study-tag {
    background-color: $white;
    color: $blue; //formal science
  }
  .how-to-study-tag {
    background-color: $white;
    color: $main-color; //formal science
  }

</style>
