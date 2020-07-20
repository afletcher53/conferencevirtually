<template>
  <div>
    <!-- Start Page Title -->
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <h2>About Us</h2>
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
          src="@//assets/img/shape4.svg"
          alt="shape"
        >
      </div>
      <div class="shape7">
        <img
          src="@//assets/img/shape4.svg"
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
    <!-- End Page Title -->

    <!-- Start About Area -->
    <section class="about-area ptb-80">
      <div class="container">
        <h2 class="section-title">
          Our Founder
        </h2>
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="about-image">
              <img
                src="@/assets/img/ACProfile.jpg"
                alt="image"
                style="border-radius: 3px;"
              >
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="about-content">
              <div class="section-title">
                <p v-html="$store.state.project_about_strapline" />
              </div>
            </div>
          </div>

          <div class="about-inner-area">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="about-text">
                  <h3>{{ $store.state.project_about_us_history_title }}</h3>
                  <p v-html="$store.state.project_about_us_history" />
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="about-text">
                  <h3>{{ $store.state.project_about_us_mission_title }}</h3>
                  <p v-html="$store.state.project_about_us_mission" />
                </div>
              </div>

              <div
                class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3"
              >
                <div class="about-text">
                  <h3>{{ $store.state.project_about_us_who_we_are_title }}</h3>
                  <p v-html="$store.state.project_about_us_who_we_are" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Area -->

    <Team />

    <!-- Start Ready To Talk Area -->
    <section class="ready-to-talk">
      <div class="container">
        <h3>Ready to talk?</h3>
        <p>Our team is here to answer your questions</p>
        <a
          href="#contact"
          class="btn btn-primary"
        >Contact Us</a>
      </div>
    </section>
    <!-- End Ready To Talk Area -->
    <Partner />
    <Contact />
  </div>
</template>

<script>
import Contact from "@/components/landing-pages/Contact";
export default {
  name: "AboutStyleOne",
  components: {
    Contact,
  },
};
</script>
