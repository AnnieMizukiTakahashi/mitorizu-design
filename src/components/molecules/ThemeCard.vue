<template>
  <div class="card pd-16-pc pd-8 has-text-weight-bold default-text-color"
  :class="cardBackground">
    <div class="card-title pr-16">
      <p class="is-size-6">{{ theme.title }}</p>
    </div>
    <div class="is-flex">
    <tag
      class="mr-8"
      :field="theme.field.first"
      :tag-color="theme.tagColor.first"/>
    <tag
      class="mr-8"
      :field="theme.field.second"
      :tag-color="theme.tagColor.second"/>
    <tag
      class="mr-8"
      :field="theme.field.third"
      :tag-color="theme.tagColor.third"/>
    </div>
  </div>
</template>

<script>
import Tag from '../atoms/Tag.vue'
export default {
  components: {
    Tag
  },
  props: {
    theme: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

.card {
  position: relative;
  height: 164px;

  .card-title {
    position: absolute;
    bottom: 1rem;
  }
}
@media (max-width: $tablet-max-width) {
  .card {
  position: relative;
  height: 104px;
  }
}

</style>
