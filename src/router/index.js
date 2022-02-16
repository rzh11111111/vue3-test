import { createWebHistory, createRouter } from "vue-router";

import home from '../views/home.vue'
import test1 from "../views/test1.vue";
import test2 from "../views/test2.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/datatype",
    name: "datatype",
    component: ()=>import('../views/datatype.vue'),
  },
  {
    path: "/life",
    name: "life",
    component: ()=>import('../views/life.vue'),
  },
  {
    path: "/ref",
    name: "ref",
    component: ()=>import('../views/ref.vue'),
  },
  {
    path: "/defineAsyncComponent",
    name: "defineAsyncComponent",
    component: ()=>import('../views/defineAsyncComponent.vue'),
  },
  {
    path: "/test1",
    name: "test1",
    component: test1,
  },
  {
    path: "/test2",
    name: "test2",
    component: test2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;