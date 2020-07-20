import VueRouter from 'vue-router';

// Pages
// import Videos from './components/landing-pages/Videos';
import About from './components/landing-pages/About';
import Index from './components/landing-pages/Index'
import NotFound from './components/landing-pages/NotFound'


export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [
      { path: '/', component: Index, name: 'home' },
      // { path: '/videos', component: Videos, name: 'Videos' },
      { path: '/about', component: About, name: 'About' },
      { path: "*", component: NotFound, name: 'NotFound' }
    ]
});
