<template>
  <section class="features">
    <div class="container">
      <div class="section-title">
        <h2>{{ $store.state.project_other_projects }}</h2>
        <div class="bar" />
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 features-content">
          <h3 v-html="$store.state.project_features_one_title" />
          <p v-html="$store.state.project_features_one_strapline" />
          <a
            target="_blank"
            :href="$store.state.project_features_one_url"
            class="btn btn-primary"
          >Find out more</a>
        </div>

        <div class="col-lg-6 features-image">
          <img
            v-wow
            srcset="@/assets/img/home/logo/webinarvet/webinarvetlogo.png 1x, @/assets/img/home/logo/webinarvet/webinarvetlogo@2x.png 2x, @/assets/img/home/logo/webinarvet/webinarvetlogo@3x.png 3x, @/assets/img/home/logo/webinarvet/webinarvetlogo@4x.png 4x"
            alt="The Webinar Vet logo"
             class="wow fadeInUp hidden-large"
            data-wow-delay="0.6s"
            width= "350px"
          >
        </div>
      </div>
    </div>
  </section>
  <!-- End IoT Features Area -->
</template>

<script>
export default {
    name: 'Features'
}
</script>
