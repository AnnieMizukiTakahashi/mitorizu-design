<template>
  <div class="main-visual">
    <div class="columns is-gapless">
      <div class="column is-8">
        <main-visual-large class="main-visual-large mr-4-pc mb-4"/>
      </div>
      <div class="main-visual-card column">
        <div class="large-card-border"/>
        <top-card class="top-card"/>
        <div class="card-border"/>
        <top-book-card class="top-book-card"/>
      </div>
    </div>
  </div>
</template>

<script>
import MainVisualLarge from '../molecules/MainVisualLarge.vue'
import TopCard from '../molecules/TopCard.vue'
import TopBookCard from '../molecules/TopBookCard.vue'

export default {
  components: {
    MainVisualLarge,
    TopCard,
    TopBookCard
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/_variables.scss';

.top-card {
  height: 48.7%;
}
.top-book-card {
  height: 48.7%;
}

.card-border {
  height: 0.25rem;
  background-color: $white;
  width: 100%;
  border: none;
}

@media (max-width: $tablet-max-width) {
  .top-card {
    height: 100%;
  }
  .top-book-card {
    height: 100%;
  }
  .main-visual-card{
    display: flex;
    height: 10.25rem;
    width: auto;
  }
  .card-border {
    height: 100%;
    width: 0.25rem;
    border: none;
  }
}
</style>
