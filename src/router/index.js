import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/pages/Main';
import NotFound from '@/pages/NotFound';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
