<template>
  <div>
    <div class="card">
      <div class="card-image"
      :style='{ backgroundImage: "url(" + theme.img + ")"}'>
      </div>
      <div class="card-content">
        <figcaption class="card-title">
          <p class="is-size-6 has-text-weight-bold">{{ theme.title }}</p>
        </figcaption>
        <div class="content grey600-text-color mt-8">
          There detail Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div class="is-flex">
        <tag
          class="mr-8"
          v-for="tagProp in theme.tagProps" :key="tagProp.id"
          :field="tagProp.field"
          :tagColor="tagProp.tagColor"/>
        </div>
      </div>
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
@import "@/styles/_variables.scss";

.card-image {
  background-size: cover;
  height: 164px;
}

</style>
