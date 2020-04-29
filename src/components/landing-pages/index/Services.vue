<script>
export default {
    name: 'Services',
}
</script>

<template>
  <section class="iot-services-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>{{ $store.state.project_services_title }}</h2>
        <div class="bar" />
        <p>{{ $store.state.project_services_strapline }}</p>
      </div>

      <div class="row">
        <div
          v-for="item in $store.state.project_services"
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
                > {{ item.class }}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
