import { createRouter, createWebHistory } from "vue-router";

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
  {
    path: "/Blogs",
    component: () => import("../pages/Blogs/BlogsView.vue"),
    name: "Blogs",
  },
  {
    path: "/Estates",
    component: () => import("../pages/Esates/EstatesView.vue"),
    name: "Estates",
    children: [
      {
        path: ":id",
        component: () => import("../pages/Esates/EstateDetails.vue"),
        name: "EstateDetails",
        props: true,
      },
    ],
  },

  /*
  
  const routes = [
  // will match everything and put it under `route.params.pathMatch`
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // will match anything starting with `/user-` and put it under `route.params.afterUser`
  { path: '/user-:afterUser(.*)', component: UserGeneric },
]
  */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
