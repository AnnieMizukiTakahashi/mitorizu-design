<template>
  <section>
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
      <section :class="`hero is-medium is-${carousel.color} is-bold`">
        <div class="hero-body has-text-centered">
          <h1 class="title">{{carousel.title}}</h1>
        </div>
      </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  data() {
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
        { title: 'Slide 1', color: 'dark' },
        { title: 'Slide 2', color: 'primary' },
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
  @import '../../styles/_variables.scss';

</style>
