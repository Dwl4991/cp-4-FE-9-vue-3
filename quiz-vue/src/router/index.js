import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quize",
      component: () => import("../views/Quize.vue"),
    },
    {},
  ],
});

export default router;
