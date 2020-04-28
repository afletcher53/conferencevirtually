<script>
import communityImage from '@/assets/img/webinarvet/wv-logo-community.png'
import screenImage from '@/assets/img/webinarvet/wv-logo-screen.png'
import certImage from '@/assets/img/webinarvet/wv-logo-certifcate.png'
export default {
    name: 'Services',
    data (){
      return {
          serviceItems: [
                    {id: "2", name: "Certifcation", to: "home", text: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.", image: certImage, icon: "flaticon-software"},
            {id: "1", name: "Communities", to: "home", text: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.", image: communityImage, icon: "flaticon-software"},
                {id: "3", name: "Webinars", to: "home", text: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.", image: screenImage, icon: "flaticon-software"},
          ]
      }
    }
}
</script>

<template>
  <!-- Start IoT Services Area -->
  <section class="iot-services-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>What We Provide</h2>
        <div class="bar" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div class="row">
        <div
          v-for="item in serviceItems"
          :key="item.id"
          class="col-lg-4 col-md-6 col-sm-6"
        >
          <div class="single-iot-services">
            <img
              :src="item.image"
              alt="image"
            >
            <div class="content">
              <h3>
                <a
                  href="#"
                  class="text"
                > {{ item.name }}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End IoT Services Area -->
</template>
