
<script>
import IOdometer from 'vue-odometer';
import 'odometer/themes/odometer-theme-default.css';

export default {
    name: 'Funfacts',
    components: {
        IOdometer
    },
    data() {
        return {   
            hours: this.$store.state.project_funfacts_certified_cpd_hours,
            conferences: this.$store.state.project_funfacts_conferences,
            customers: this.$store.state.project_funfacts_customers,
            webinars: 2076,
            email: this.$store.state.project_email,
          }
    },
    mounted() {
        const that = this;
        setInterval(function() {
            that.webinars += 1;
        }, 5000);
        setInterval(function() {
            that.hours += 1;
        }, 2000);
        setInterval(function() {
            that.conferences += 1;
        }, 200000);
        setInterval(function() {
            that.customers += 1;
        }, 2000);
    }
}
</script>


<template>
  <!-- Start Fun Facts Area -->
  <section id="FunFacts" class="funfacts-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>{{ $store.state.project_funfacts_title }}</h2>
        <div class="bar" />
        <p>{{ $store.state.project_funfacts_strapline }}</p>
      </div>

      <div class="row">
        <div class="col-lg-3 col-md-3 col-6 col-sm-3">
          <div class="funfact">
            <h3>
              {{webinars}}
              <!-- <span class="odometer">
                <IOdometer
                  class="odometer"
                  :value="webinars"
                  :duration="200"
                /> -->
              <!-- </span> -->
              +
            </h3>
            <p style="text-align: center;">Webinars Served</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-6 col-sm-3">
          <div class="funfact">
            <h3>
              {{hours}}+
              <!-- <span class="odometer">
                <IOdometer
                  class="odometer"
                  :value="hours"
                  :duration="200"
                />
              </span>+ -->
            </h3>
            <p style="text-align: center;">Certified CPD Hours</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-6 col-sm-3">
          <div class="funfact">
            <h3>
              <span class="odometer">
                <IOdometer
                  class="odometer"
                  :value="conferences"
                  :duration="200"
                />
              </span>+
            </h3>
            <p style="text-align: center;">Virtual Conferences Held</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-6 col-sm-3">
          <div class="funfact">
            <h3>
              {{customers}}+
              <!-- <span class="odometer">
                <IOdometer
                  class="odometer"
                  :value="customers"
                  :duration="200"
                />
              </span>+ -->
            </h3>
            <p style="text-align: center;">Customers</p>
          </div>
        </div>
      </div>

      <div class="contact-cta-box">
        <h3>Have any question about us?</h3>
        <p style="text-align: center;">Don't hesitate to contact us</p>
        <a
          :href="'mailto:' + email"
          class="btn btn-primary"
        >Contact Us</a>
      </div>

      <div class="map-bg">
        <img
          src="../../../assets/img/map.png"
          alt="map"
        >
      </div>
    </div>
  </section>
  <!-- End Fun Facts Area -->
</template>
