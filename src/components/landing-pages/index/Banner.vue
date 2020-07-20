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
  <div>
    <section class="coming-soon-area">
      <div>
        <div
          class="home-main-banner"
        >
        
<div id="clouds">
	<div class="cloud x1"></div>
	<!-- Time for multiple clouds to dance around -->
	<div class="cloud x2"></div>
	<div class="cloud x3"></div>
	<div class="cloud x4"></div>
	<div class="cloud x5"></div>
</div>
          <div class="bird-container bird-container--one">
            <div class="bird bird--one" />
          </div>
	
          <div class="bird-container bird-container--two">
            <div class="bird bird--two" />
          </div>
	
          <div class="bird-container bird-container--three">
            <div class="bird bird--three" />
          </div>
	
          <div class="bird-container bird-container--four">
            <div class="bird bird--four" />
          </div>
	
          <div class="dot" />
          <div class="triangle" />
          <div class="triangle2 hidden-large"/>
          <div class="d-table">
            <div class="d-table-cell">
              <div class="container">
                <div
                  class="row align-items-center min-vh-100"
                >
                  <div
                    class="col-lg-4 col-md-12"
                  >
                    <div
                      class="home-banner-content"
                      style="padding-top: 10vh;"
                    >
                      <h1 v-html="$store.state.project_name_expanded" />
                      <p v-html="$store.state.project_strap_line" />
                      <a
                        :href="'mailto:' + $store.state.project_email"
                        class="btn btn-primary1"
                      >Find Out More?</a>
                    </div>
                  </div>

                  <div class="col-lg-5 col-md-12 hidden-large">
                    <youtube-media
                      class="youtubeviewer"
                      :player-vars="{
                        autoplay: 0,
                      }"
                      player-width="640"
                      player-height="385"
                      :video-id="$store.state.project_landing_video_id"
                    />
                  </div>
                  <div
                    class="animate-border hidden-large "
                  >
                    <span style="left:-25px; top: 75vh;" />
                    <span style="left:-25px; top: 75vh;" />
                    <span style="left:-25px; top: 75vh;" />
                    <span style="left:-25px; top: 75vh;" />
                  </div>

                  <div
                    class="animate-border  hidden-large"
                  >
                    <span style="left: 61vw !important;" />
                    <span style="left: 61vw;" />
                    <span style="left: 61vw;" />
                    <span style="left: 61vw;" />
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="agency-banner-content">
                      <ul class="social-list">
                        <li class="list-heading">
                          Follow us for updates:
                        </li>

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>