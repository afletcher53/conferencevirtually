<template>
  <!-- Start ML Feedback Area -->
  <section class="ml-feedback-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>Don't just take our word for it!</h2>
        <div class="bar" />
      </div>

      <div class="ml-feedback-slides">
        <carousel 
          :autoplay="true"
          :loop="true"
          :smart-speed="10000"
          :autoplay-speed="true"
          :autoplay-timeout="10000"
          :adjustableHeight=true
          :autoplayHoverPause=true
          :per-page-custom="[[0, 1],[576, 1],[768, 1],[1024, 1], [1200, 1]]"
        >
          <slide
            v-for="item in reviewJson"
            :key="item.author"
            class="item"
          >
            <div class="single-ml-feedback-item">
              <div class="client-info"> <a :href="item.link">
                <img
                  :src="item.logo"
                  alt="image"
                ></a>
                <h3>{{ item.author }}</h3>
                <a :href="item.link"><span>{{ item.company }}</span></a>
              </div>
              <p>{{ item.text }}</p>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </section>
  <!-- End ML Feedback Area -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import json from '@/services/api/reviews.json'
export default {
    name: 'Feedback',
    components: { Carousel, Slide },
    data() {
          return {
              reviewJson: json.reviews,
          }
    }
}
</script>