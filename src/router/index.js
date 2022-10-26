import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/MyPrograms",
    name: "MyPrograms",
    component: () => import("@/views/MyPrograms.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})

export default router
