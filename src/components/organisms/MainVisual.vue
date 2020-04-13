<template>
  <div class="main-visual">
    <div class="columns is-gapless">
      <div class="column is-8">
        <main-visual-large class="main-visual-large mr-4-pc mb-4"/>
      </div>
      <div class="main-visual-card column">
        <div class="large-card-border"/>
        <main-visual-card class="background-success"/>
        <div class="card-border"/>
        <main-visual-card class="background-primary"/>
      </div>
    </div>
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

.main-visual-card {
  @media (max-width: $tablet-max-width) {
    display: flex;
  }
}

.card-border {
  height: 0.25rem;
  background-color: $white;
  width: 100%;
  border: none;

  @media (max-width: $tablet-max-width) {
    height: 100%;
    width: 0.25rem;
    border: none;

  }
}

</style>
