<template>
  <section class="">
    <b-carousel
      :pause-info="pauseInfo">
      <b-carousel-item v-for="(item, i) in 6" :key="i">
      <section class="">
        <div class="slide-container">
          <span class="image">
            <img class="background" :src="getImgUrl(i)">
          </span>
          <tag
            class="study-tag mb-16"
            :field="'社会学'"
            :tagColor="'orange-study-tag'"
            />
          <div class="main-title">
            <p class="is-size-6 is-size-5-pc has-text-weight-bold white-text-color mb-16-pc mb-8">LGBT、SOGIというコンセプトはどのように社会実装されてきたか</p>
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
import Tag from '@/components/atoms/Tag.vue'
export default {
  components: {
    Tag
  },
  data () {
    return {
      pauseInfo: false,
      interval: 3000
    }
  },
  methods: {
    getImgUrl (value) {
      return `https://picsum.photos/id/43${value}/680/324`
    }
  }
}
</script>

<style lang="scss" scoped>

@import '@/styles/_variables.scss';
.slide-container {
  height: 100%;
  position: relative;
}
.slide-container::after {
  background: linear-gradient(to bottom, transparent, rgba(6, 11, 26, 0.8));
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-title {
  z-index: 2;
  position: absolute;
  left: 1rem;
  bottom: 2rem;
}

.study-tag {
  z-index: 2;
  position: absolute;
  left: 1rem;
  top: 1rem;
}

</style>
