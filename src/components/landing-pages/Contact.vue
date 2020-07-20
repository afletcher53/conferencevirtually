<template>
  <div>
    <!-- Start Contact Info Area -->
    <section class="contact-info-area ptb-80">
      <div
        id="contact"
        class="container"
      >
        <div class="section-title">
          <h2>Contact Us</h2>
          <div class="bar" />
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <a
              class="mailto"
              :href="'mailto:' + this.$store.state.project_email"
            >
              <div class="contact-info-box">
                <div class="icon">
                  <feather type="mail" />
                </div>
                <h3>Email Us</h3>
                <p>{{ this.$store.state.project_email }}</p>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <a
              class="mailto"
              :href="'tel:' + this.$store.state.project_telephone"
            >
              <div class="contact-info-box">
                <div class="icon">
                  <feather type="phone" />
                </div>
                <h3>Call Us</h3>
                <p><a :href="'tel:' + this.$store.state.project_telephone">{{ this.$store.state.project_telephone }}</a></p>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="contact-info-box">
              <div class="icon">
                <feather type="activity" />
              </div>
              <h3>Social Media</h3>
              <div class="single-footer-widget">
                <ul class="social-links">
                  <li
                    v-for="social in $store.state.project_social_media"
                    :key="social.id"
                  >
                    <a
                      target="_blank"
                      :href="social.to"
                      :class="social.class"
                    ><feather :type="social.icon" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Info Area -->

    <!-- End Contact Area -->
  </div>
</template>

<script>
export default {
    name: 'Contact',
     mounted() {
            var section=this.$router.currentRoute.hash.replace("#", "");
            if (section)
                this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
        },
}
</script>

