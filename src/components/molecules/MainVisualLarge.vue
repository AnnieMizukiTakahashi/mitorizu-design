<template>
  <section class="">
    <b-carousel
      :pause-info="pauseInfo"
      :interval="interval"
      @change="info($event)">
      <b-carousel-item v-for="(item, i) in 6" :key="i">
      <section class="">
        <div class="slide-container">
          <span class="image">
            <img class="background" :src="getImgUrl(i)">
          </span>
            <div class="cover"/>
            <div class="main-title">
              <p class="is-size-6 is-size-5-pc has-text-weight-bold white-text-color mb-16">LGBT、SOGIというコンセプトはどのように社会実装されてきたか</p>
              <p class="is-size-5 is-size-4-pc has-text-weight-bold white-text-color">
                LGBTの学生、将来の雇用主に望むもの</p>
            </div>
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
      pauseInfo: false,
      interval: 3000
      }
    },
    methods: {
    getImgUrl(value) {
        return `https://picsum.photos/id/43${value}/680/324`
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../styles/_variables.scss';
.slide-container {
  height: 100%;
  position: relative;
}

.main-title {
  position: absolute;
  left: 1rem;
  bottom: 2rem;
}

.image {
  background-color: $dark-blue;
}

.image img {
  display: block;
  opacity: 0.6;
}
</style>
