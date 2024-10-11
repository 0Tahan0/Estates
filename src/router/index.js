// import { createMemoryHistory, createRouter } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
// import AboutView from "./AboutView.vue";
// import Home from "../pages/HomeView.vue";
const routes = [
  {
    path: "/",
    component: () => import("../pages/Home/HomeView.vue"),
    name: "Home",
  },
  {
    path: "/about",
    component: () => import("../pages/AboutView.vue"),
    name: "About",
  },
  //   { path: "/about", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
