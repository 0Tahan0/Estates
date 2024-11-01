import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/Home/HomeView.vue"),
    name: "Home",
  },
  {
    path: "/About",
    component: () => import("../pages/AboutView.vue"),
    name: "About",
  },
  {
    path: "/Blogs",
    component: () => import("../pages/Blogs/BlogsView.vue"),
    name: "Blogs",
    children: [
      {
        path: "InsuranceServices",
        name: "InsuranceServices",
        // alias: "خدمات التأمين",
      },
      {
        path: "ObtainingCitizenship",
        name: "ObtainingCitizenship",
        // alias: "الحصول على الجنسية",
      },
      {
        path: "TurkishResidence",
        name: "TurkishResidence",
        // alias: "الإقامة التركية",
      },
      {
        path: "WorkPermit",
        name: "WorkPermit",
        // alias: "إقامة العمل",
      },
      {
        path: "CompaniesFormation",
        name: "CompaniesFormation",
        // alias: "تأسيس الشركات",
      },
      {
        path: "StudentServices",
        name: "StudentServices",
        // alias: "خدمات طلابية",
      },
      {
        path: "RealEstateService",
        name: "RealEstateService",
        // alias: "خدمة العقارات",
      },
    ],
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
      {
        path: "Generator",
        component: () => import("../pages/Esates/Generator/Generator.vue"),
        name: "Generator",
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
