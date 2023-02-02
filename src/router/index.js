import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/layouts/Index';
import MainLayouts from '@/layouts/views/Index';
import Main from '@/views/Main';
import NotFound from '@/views/NotFound';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'base',
    component: Index,
  },
  {
    path: '/main',
    name: 'main-layout',
    component: MainLayouts,
    children: [
      {
        path: '/main',
        name: 'main',
        component: Main,
      },
    ],
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
