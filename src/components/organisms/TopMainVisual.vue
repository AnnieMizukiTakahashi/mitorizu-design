<template>
  <div class="main-visual">
    <div class="columns is-gapless">
      <div class="column is-8">
        <main-visual-large class="main-visual-large mr-4-pc mb-4"/>
      </div>
      <div class="main-card column">
        <div class="large-card-border"/>
        <main-visual-card class="main-visual-card"/>
        <div class="card-border"/>
        <main-visual-book-card class="main-visual-book-card"/>
      </div>
    </div>
  </div>
</template>

<script>
import MainVisualLarge from '@/components/molecules/TopMainVisualLarge.vue'
import MainVisualCard from '@/components/molecules/TopMainVisualCard.vue'
import MainVisualBookCard from '@/components/molecules/TopMainVisualBookCard.vue'

export default {
  components: {
    MainVisualLarge,
    MainVisualCard,
    MainVisualBookCard
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.main-visual-card {
  height: 48.7%;
}

.main-visual-book-card {
  height: 48.7%;
}

.card-border {
  height: 0.25rem;
  background-color: $white;
  width: 100%;
  border: none;
}

@media (max-width: $tablet-max-width) {
  .main-visual-card {
    height: 100%;
  }

  .main-visual-book-card {
    height: 100%;
  }

  .main-card{
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
