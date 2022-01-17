import { RouteRecordRaw } from 'vue-router';
import About from '../views/about.vue';
import Home from '../views/home.vue';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
    name: 'Home',
  },
  {
    path: '/about',
    component: About,
    name: 'About',
  },
];
export default routes;
