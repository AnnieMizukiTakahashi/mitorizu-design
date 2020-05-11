<template>
  <div>
    <p class="pl-32 is-size-6 is-size-5-pc has-text-weight-bold"
      :class="Color">{{ headding }}</p>
  </div>
</template>

<script>
export default {
  props: {
    headding: String,
    required: true
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/_variables.scss';

  .orange {
    background: url(../../assets/ic_book_orange_24px.svg) no-repeat left center;
    // color: $orange; // sociology
  }
  .red {
    background: url(../../assets/ic_book_red_24px.svg) no-repeat left center;
    // color: $red; // humanities
  }
  .turquoise {
   background: url(../../assets/ic_book_turquoise_24px.svg) no-repeat left center;
    // color: $turquoise; // science
  }
  .green {
   background: url(../../assets/ic_book_green_24px.svg) no-repeat left center;
    // color: $green; //natural science
  }
  .blue {
   background: url(../../assets/ic_book_blue_24px.svg) no-repeat left center;
    // color: $blue; //formal science
  }
  .how-to-study {
   background: url(../../assets/ic_book_how_to_24px.svg) no-repeat left center;
    // color: $main-color; //how to study
  }

</style>
