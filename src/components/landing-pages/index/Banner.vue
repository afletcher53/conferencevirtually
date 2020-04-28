<script>


export default {
   name: 'Banner',
   data: function() {
return {
   socialmedia: [
        {class: "facebook", to: "/content"},
        {class: "twitter", to: "/content"},
            {class: "linkedin", to: "/content"},
              {class: "instagram", to: "/content"}

      ]
 };
},
 methods: {
   ready (event) {
     this.player = event.target
   },
 }
}
</script>


<template>
  <!-- Start IoT Main Banner -->
  <section class="coming-soon-area">
    <div>
      <div
        class="hosting-main-banner"
        style="padding-top: 0px;"
      >
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div
                class="row align-items-center min-vh-100"
              >
                <div
                  class="col-lg-3 col-md-12"
                >
                  <div
                    class="hosting-banner-content"
                    style="padding-top: 10vh;"
                  >
                    <h1 v-html="$store.state.project_name_expanded" />
                    <p v-html="$store.state.project_strap_line" />
                    <a
                      :href="'mailto:' + $store.state.project_email"
                      class="btn btn-primary"
                    >Find Out More?</a>
                  </div>
                </div>

                <div class="col-lg-6 col-md-12 hidden-sm">
                  <youtube-media
                    style="padding-top: 10vh; padding-left:50px;"
                    :player-vars="{
                      autoplay: 0,
                    }"
                    player-width="854"
                    player-height="480"
                    :video-id="$store.state.project_landing_video_id"
                  />
                </div>
                <div
                  class="animate-border hidden-sm"
                >
                  <span style="left:-25px; top: 75vh;" />
                  <span style="left:-25px; top: 75vh;" />
                  <span style="left:-25px; top: 75vh;" />
                  <span style="left:-25px; top: 75vh;" />
                </div>

                <div
                  class="animate-border  hidden-sm"
                >
                  <span style="left: 58vw !important;" />
                  <span style="left: 58vw;" />
                  <span style="left: 58vw;" />
                  <span style="left: 58vw;" />
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="agency-banner-content">
                    <ul class="social-list">
                      <li class="list-heading">
                        Follow me for updates:
                      </li>
                      <li
                        v-for="social in socialmedia"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End IoT Main Banner -->
</template>
