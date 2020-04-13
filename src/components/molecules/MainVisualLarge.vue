<template>
  <section class="">
    <b-carousel
      v-model="carousel"
      :animated="animated"
      :has-drag="drag"
      :autoplay="autoPlay"
      :pause-hover="pauseHover"
      :pause-info="pauseInfo"
      :pause-info-type="pauseType"
      :interval="interval"
      :repeat="repeat"
      @change="info($event)">
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section :class="`hero is-medium is-${carousel.color}`">
        <div class="slide-container">
          <p class="main-title has-text-weight-bold is-size-5 is-size-4-pc">{{carousel.title}}</p>
        </div>
      </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  data () {
    return {
      carousel: 0,
      animated: 'slide',
      drag: false,
      autoPlay: true,
      pauseHover: false,
      pauseInfo: false,
      repeat: true,
      pauseType: 'is-primary',
      interval: 5000,
      carousels: [
        { title: 'Vol.1 LGBTの学生、将来の雇用主に望むもの', color: 'dark' },
        { title: 'LGBTQ 学びはじめの本棚', color: 'primary' },
        { title: 'Slide 3', color: 'info' },
        { title: 'Slide 4', color: 'success' },
        { title: 'Slide 5', color: 'warning' },
        { title: 'Slide 6', color: 'danger' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.slide-container {
  position: relative;

    .main-title {
      position: absolute;
      left: 1rem;
      bottom: 2rem;
  }
}

@import '../../styles/_variables.scss';
.slide-container {
  height: 324px;
}

@media (max-width: $mobile-max-width) {
  .slide-container {
    height: 158px;
  }
}

</style>
