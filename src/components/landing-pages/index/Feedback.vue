<template>
  <!-- Start Feedback Area -->
  <section class="feedback-area ptb-80 bg-f7fafd">
    <div class="container">
      <div class="section-title">
        <h2>Don't just take our word for it!</h2>
        <div class="bar" />
      </div>

      <div class="feedback-slides">
        <div class="client-feedback">
          <div>
            <slick
              ref="slick"
              :options="slickOptions"
              :as-nav-for="$refs.slick2"
            >
              <div
                v-for="item in reviewJson"
                :key="item.author"
                class="item"
              >
                <div class="single-repair-feedback">
                  <h3>{{ item.author }}</h3>

                  <p style="width: 90%; padding-left: 10%; text-align: center; padding-top: 25px;" v-html="item.text" />
                </div>
              </div>
            </slick>
          </div>
        </div>
      </div>

      <div class="shape1">
        <img
          src="../../../assets/img/shape1.png"
          alt="shape"
        >
      </div>
      <div class="shape2 rotateme">
        <img
          src="../../../assets/img/shape2.svg"
          alt="shape"
        >
      </div>
      <div class="shape4">
        <img
          src="../../../assets/img/shape4.svg"
          alt="shape"
        >
      </div>
      <div class="shape5">
        <img
          src="../../../assets/img/shape5.png"
          alt="shape"
        >
      </div>
      <div class="shape6 rotateme">
        <img
          src="../../../assets/img/shape4.svg"
          alt="shape"
        >
      </div>
      <div class="shape7">
        <img
          src="../../../assets/img/shape4.svg"
          alt="shape"
        >
      </div>
      <div class="shape8 rotateme">
        <img
          src="../../../assets/img/shape2.svg"
          alt="shape"
        >
      </div>
    </div>
  </section>
  <!-- End Feedback Area -->
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel';
import Slick from 'vue-slick';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import json from '@/services/api/reviews.json'
export default {
    name: 'Feedback',
    components: { Slick },
    data() {
        return {
            reviewJson: json.reviews,
            slickOptions: {
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear',
                fade: true,
                autoplay: true,
                draggable: true,
                prevArrow: '.client-feedback .prev-arrow',
                nextArrow: '.client-feedback .next-arrow'
            },
            slickOptions2: {
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                cssEase: 'linear',
                autoplay: true,
                centerMode: true,
                draggable: false,
                focusOnSelect: true,
                prevArrow: '.client-thumbnails .prev-arrow',
                nextArrow: '.client-thumbnails .next-arrow',
            },
        };
    },

    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        }
    }
}
</script>
