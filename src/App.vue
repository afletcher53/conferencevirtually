<template>
  <div>
    <Header />
    <PreLoader v-if="isLoading" />
    <router-view />
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'" />
    <Footer v-else />
  </div>
</template>

<script>

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PreLoader from './components/layout/PreLoader';
export default {
  name: 'App',
  components: {
     Header, Footer, PreLoader
  },

  data() {
    return {
      isLoading: true,
      currentUrl: ''
    }
  },

  watch: {
    '$route'(pathUrl){
      this.currentUrl = pathUrl.path;
      this.isLoading = true;
      setTimeout(() => { this.isLoading = false }, 1500);
    }
  },

  mounted() {
    this.currentUrl = window.location.pathname;
    setTimeout(() => {
      this.isLoading = false
    }, 2000);
  }
}
</script>
