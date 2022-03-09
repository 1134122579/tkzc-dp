import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      iskeeplive: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    meta: {
      iskeeplive: false,
    },
  },
  {
    path: "/list",
    name: "List",
    component: () => import(/* webpackChunkName: "about" */ "@/views/list.vue"),
    meta: {
      iskeeplive: false,
    },
  },

  {
    path: "/dtdetail",
    name: "Dtdetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/dtdetail.vue"),
    meta: {
      iskeeplive: false,
    },
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/design",
  routes,
});

export default router;
