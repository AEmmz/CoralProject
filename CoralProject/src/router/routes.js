const routes = [
  {
    path: "/",
    component: () => import("pages/Home/HomePage.vue"),
  },
  {
    path: "/database",
    component: () => import("pages/TheDatabase/TheDatabase.vue"),
  },
  {
    path: "/about-us",
    component: () => import("pages/AboutUs/AboutUs.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
