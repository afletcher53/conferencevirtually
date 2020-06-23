
<script>
export default {
    name: 'HeaderTwo',
    data(){
        return {
            isSticky: false,
            navItems: [
              {id: "1", name: "Home", to: "/"},
              {id: "3", name: "Videos", to: "videos"},
              {id: "4", name: "About", to: "about"}
            ]
        }
    },

    computed: {
        shoppingCart(){
            return this.$store.state.cart;
        }
    },

    mounted() {
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            // eslint-disable-next-line no-console
            if(scrollPos >= 300){
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        })
    }
}
</script>


<template>
  <!-- Start Navbar Area -->
  <header
    id="header"
    :class="['headroom navbar-style-two', {'is-sticky': isSticky}]"
  >
    <div class="startp-nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <router-link
            class="navbar-brand"
            to="/"
          >
            <img
              src="../../assets/img/logo.png"
              alt="logo"
              style="width: 200px;"
            >
          </router-link>

          <b-navbar-toggle target="navbarSupportedContent" />

          <b-collapse
            id="navbarSupportedContent"
            class="collapse navbar-collapse mean-menu"
            is-nav
          >
            <ul class="navbar-nav nav ml-auto">
              <li
                v-for="nav in navItems"
                :key="nav.id"
                class="nav-item"
              >
                <router-link
                  :to="nav.to"
                  class="nav-link"
                >
                  {{ nav.name }}
                </router-link>
              </li>
            </ul>
          </b-collapse>

          <div class="others-option">
            <a
              :href="'mailto:' + $store.state.project_email"
              class="btn btn-light"
            >Contact Us</a>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <!-- End Navbar Area -->
</template>
