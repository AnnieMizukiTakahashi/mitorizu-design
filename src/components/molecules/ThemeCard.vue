<template>
  <div class="card pd-16-pc pd-8 has-text-weight-bold white-text-color"
    :style='{ backgroundImage: "url(" + theme.img + ")"}'>
    <figcaption class="card-title pt-4 pb-4 pr-8 pl-8">
      <p class="is-size-6">{{ theme.title }}</p>
    </figcaption>
    <div class="is-flex">
    <tag
      class="mr-8"
      v-for="tagProp in theme.tagProps" :key="tagProp.id"
      :field="tagProp.field"
      :tagColor="tagProp.tagColor"/>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/atoms/Tag.vue'
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
@import '@/styles/_variables.scss';

.card {
  position: relative;
  background-size: cover;
  height: 164px;

  .card-title {
    position: absolute;
    background-color: rgba(6, 11, 26, 0.8);
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
  }
}
@media (max-width: $tablet-max-width) {
  .card {
  position: relative;
  height: 120px;
  }
}

</style>
