import { createRouter, createWebHashHistory } from "vue-router";

let routes = [
  { path: "/", component: () => import("../views/Home.vue") },
  {
    path: "/page",
    component: () => import("../views/Pages/page.vue"),
    children: [
      { path: "/story", component: () => import("../views/Pages/story.vue") },
      { path: "/memory", component: () => import("../views/Pages/memory.vue") },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { routes, router };
