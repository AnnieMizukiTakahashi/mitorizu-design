<template>
  <div class="page-contaner">
    <main-visual-large/>
    <main-visual-card/>
  </div>
</template>

<script>
import MainVisualLarge from '../molecules/MainVisualLarge.vue'
import MainVisualCard from '../molecules/MainVisualCard.vue'

export default {
  components: {
    MainVisualLarge,
    MainVisualCard
  }
}
</script>
<style lang="scss" scoped>
  @import '../../styles/_variables.scss';
</style>
