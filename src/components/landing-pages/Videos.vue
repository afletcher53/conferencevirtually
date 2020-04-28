<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>Videos</h2>
          </div>
        </div>
      </div>

      <div class="shape1">
        <img
          src="@/assets/img/shape1.png"
          alt="shape"
        >
      </div>
      <div class="shape2 rotateme">
        <img
          src="@/assets/img/shape2.svg"
          alt="shape"
        >
      </div>
      <div class="shape3">
        <img
          src="@/assets/img/shape3.svg"
          alt="shape"
        >
      </div>
      <div class="shape4">
        <img
          src="@/assets/img/shape4.svg"
          alt="shape"
        >
      </div>
      <div class="shape5">
        <img
          src="@/assets/img/shape5.png"
          alt="shape"
        >
      </div>
      <div class="shape6 rotateme">
        <img
          src="@/assets/img/shape4.svg"
          alt="shape"
        >
      </div>
      <div class="shape7">
        <img
          src="@/assets/img/shape4.svg"
          alt="shape"
        >
      </div>
      <div class="shape8 rotateme">
        <img
          src="@/assets/img/shape2.svg"
          alt="shape"
        >
      </div>
    </div>
    <!-- Start Page Title -->
    <div class="video-title-area">
      <div class="d-table" />
    </div>
    <!-- End Page Title -->
    <section class="blog-area ptb-80">
      <div class="container">
        <div class="row">
          <div
            v-for="item in videos"
            :key="item.etag"
            class="col-lg-4 col-md-6"
          >
            <div class="single-blog-post">
              <div class="blog-image">
                <a href="#">
                  <img
                    :src="item.snippet.thumbnails.high.url"
                    alt="image"
                  >
                </a>

                <div class="date">
                  <feather type="calendar" />     {{ format_date(item.snippet.publishedAt ) }}
                </div>
              </div>

              <div class="blog-post-content">
                <h3><a href="#"> {{ item.snippet.title }}</a></h3>

                <span>by <a href="http://www.TheWebinarVet.com">TheWebinarVet</a></span>
                <a
                  href="#"
                  class="read-more-btn"
                > Watch Now <feather type="arrow-right" /> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import moment from 'moment'
import getVideosApi from '@/services/api/vidoes.js'

export default {
    name: 'BlogGrid',
    data(){
        return {
          videos:[],
          base_url_youtube :'http://www.youtube.com/'
        }
    },
    created() {
      getVideosApi.getVideoes().then(data => this.videos = data.items)},
  methods: {
       format_date(value){
          if (value) {
            return moment(String(value)).format('DD-MM-YYYY')
           }
       },
    }
}
</script>
