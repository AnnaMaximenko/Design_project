<template>
  <section class="banner banner__project-details center"></section>
  <section class="project-details center">
    <div class="project-details__wrapper">
      <h2 class="project-details__title">{{ project.title }}</h2>
      <p class="project-details__text">{{ project.textOne }}</p>
      <p class="project-details__text">{{ project.textSecond }}</p>
    </div>
  </section>
  <div class="slider center">
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :zoom="true"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img
            src="@/assets/img/projectDetails_slider-1.jpg"
            class="slider__img"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img
            src="@/assets/img/projectDetails_slider-2.jpg"
            class="slider__img"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img
            src="@/assets/img/projectDetails_slider-3.jpg"
            class="slider__img"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Zoom, Navigation, Pagination } from "swiper/modules";
export default {
  computed: {
    ...mapState(["project"]),
    ...mapGetters(["partItem"]),
  },

  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
};
</script>

<style lang="scss" scoped></style>
