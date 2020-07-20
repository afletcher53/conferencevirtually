<template>
  <section class="features">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 features-content">
          <h3 v-html="$store.state.project_features_three_title" />
          <p v-html="$store.state.project_features_three_strapline" />
          <a
            target="_blank"
            :href="$store.state.project_features_three_url"
            class="btn btn-primary"
          >Find out more</a>
        </div>

        <div class="col-lg-6 features-image">
          <img
            v-wow
            srcset="@/assets/img/home/logo/simplyvets/simplyvets.png 1x, @/assets/img/home/logo/simplyvets/simplyvets@2x.png 2x, @/assets/img/home/logo/simplyvets/simplyvets@3x.png 3x, @/assets/img/home/logo/simplyvets/simplyvets@4x.png 4x"
            alt="The Webinar Vet logo"
            class="wow fadeInUp hidden-large"
            data-wow-delay="0.6s"
            width="350px"
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
