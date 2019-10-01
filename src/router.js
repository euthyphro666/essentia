import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Social from './views/Social.vue';
import Projects from './views/Projects.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/social',
      name: 'social',
      component: Social
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});
