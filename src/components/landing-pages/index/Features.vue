<template>
  <!-- Start IoT Features Area -->
  <section class="iot-features-area bg-f7fafd">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 iot-features-content">
          <h3>The Webinar Vet</h3>
          <p>The Webinar Vet was set up in 2010 by Anthony Chadwick (BVSC CertVD MRCVS), with the express wish of making veterinary education easier, more accessible and affordable for vets like you who have very busy lives.</p>
          <p>As a small animal vet for over 20 years, Anthony experienced first-hand the problems of travelling around to CPD meetings after a hard day's work. He knew there had to be a better and more efficient way to deliver CPD that would save vets time and money - The Webinar Vet was born.</p>
          <a
            href="http://www.TheWebinarVet.com"
            class="btn btn-primary"
          >Explore More</a>
        </div>

        <div class="col-lg-6 iot-features-image">
          <img
            v-wow
            src="@/assets/img/home/logo/webinar-vet-500x370.png"
            class="wow fadeInUp"
            data-wow-delay="0.6s"
            alt="image"
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
