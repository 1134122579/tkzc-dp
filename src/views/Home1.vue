<template>
  <div class="home">
    12
    <!-- <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="context">Slide 1</swiper-slide>
      <swiper-slide class="context">Slide 2</swiper-slide>
      <swiper-slide class="context">Slide 3</swiper-slide>
      <swiper-slide class="context">Slide 4</swiper-slide>
      <swiper-slide class="context">Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
  </div>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  background: burlywood;
  .context {
    background: burlywood;
  }
}
</style>
