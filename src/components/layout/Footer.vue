<script>
import BackToTop from 'vue-backtotop'
export default {
    name: 'Footer',
    components: { BackToTop },
}
</script>

<template>
  <!-- Start Footer Area -->
  <footer class="footer-area bg-f7fafd">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <div class="logo">
              <a href="/">
                <img
                  src="../../assets/img/logo.png"
                  alt="logo"
                >
              </a>
            </div>
            <p>{{ $store.state.project_strap_line }}</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget pl-5">
            <h3>Company</h3>
            <ul class="list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">FunFacts</a></li>
              <li><a href="#">Videos</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h3>Support</h3>
            <ul class="list">
              <li><a :href="'mailto:' + $store.state.project_email">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h3>Address</h3>

            <ul class="footer-contact-info">
              <li><feather type="map-pin" /> {{ $store.state.project_address }}</li>
              <li><feather type="mail" /> Email: <a :href="'mailto:' + $store.state.project_email">{{ $store.state.project_email }}</a></li>
              <li><feather type="phone-call" /> Phone:  <a :href="'tel:' + $store.state.project_telephone">{{ $store.state.project_telephone }}</a></li>
            </ul>
            <ul class="social-links">
              <li
                v-for="social in $store.state.project_social_media"
                :key="social.id"
              >
                <a
                  :href="social.to"
                  :class="social.class"
                ><feather :type="social.class" /></a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-12 col-md-12">
          <div class="copyright-area">
            <p v-html="$store.state.project_copywrite_slug " />
          </div>
        </div>
      </div>
    </div>

    <img
      src="../../assets/img/map.png"
      class="map"
      alt="map"
    >
    <div class="shape1">
      <img
        src="../../assets/img/shape1.png"
        alt="shape"
      >
    </div>
    <div class="shape8 rotateme">
      <img
        src="../../assets/img/shape2.svg"
        alt="shape"
      >
    </div>
    <!-- <div class="go-top"><feather type="arrow-up"></feather></div> -->

    <back-to-top
      bottom="50px"
      right="50px"
    >
      <div class="go-top">
        <feather type="arrow-up" />
      </div>
    </back-to-top>
  </footer>
  <!-- End Footer Area -->
</template>
