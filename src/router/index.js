import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Confirmation from '../views/Confirmation';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: Confirmation,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
