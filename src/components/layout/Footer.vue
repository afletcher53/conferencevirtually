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
                  srcset="../../assets/img/logos/logo-dark.png 1x, ../../assets/img/logos/logo-dark@2x.png 2x, ../../assets/img/logos/logo-dark@3x.png 3x, ../../assets/img/logos/logo-dark@4x.png 4x"
                  alt="Website Logo"
                  width="200px"
                >
              </a>
            </div>
            <p>{{ $store.state.project_strap_line_condensed }}</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget pl-5">
            <h3>Company</h3>
            <ul class="list">
              <li>
                <router-link
                  :to=" { name: 'About' }"
                >
                  About
                </router-link>
              </li>
              <li><a href="#Services">Services</a></li>
              <li><a href="#FunFacts">Statistics</a></li>
              <!-- <li>
                <router-link
                  :to=" { name: 'Videos' }"
                >
                  Videos
                </router-link>
              </li> -->
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h3>Support</h3>
            <ul class="list">
              <li><a href="about#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h3>Address</h3>

            <ul class="footer-contact-info">
              <li><feather type="map-pin" /> <a href="https://goo.gl/maps/yb5gAbtEgZ85AENh6">{{ $store.state.project_address }}</a></li>
              <li><feather type="mail" /> Email: <a :href="'mailto:' + $store.state.project_email">{{ $store.state.project_email }}</a></li>
              <li><feather type="phone-call" /> Phone:  <a :href="'tel:' + $store.state.project_telephone">{{ $store.state.project_telephone }}</a></li>
            </ul>
            <ul class="social-links">
              <li
                v-for="social in $store.state.project_social_media"
                :key="social.id"
              >
                <a
                  target="_blank"
                  :href="social.to"
                  :class="social.class"
                ><feather :type="social.class" /></a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-12 col-md-12">
          <div class="copyright-area">
            <p
              style="text-align: center;"
              v-html="$store.state.project_copywrite_slug "
            />
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
