<template>
  <div>
    <router-link
      class="is-size-6 has-text-weight-bold default-text-color mr-8"
      :to="{ name: this.readMore.link }">
      {{this.readMore.title}}
    </router-link>
    <router-link class="with-arrow" :to="{ name: this.readMore.link }"/>
  </div>
</template>

<script>
export default {
  props: {
    readMore: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
