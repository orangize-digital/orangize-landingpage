import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue"; // Hier Home (App.vue) importieren

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/danke",
    name: "Danke",
    component: () => import("@/views/Danke.vue"),
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: () => import("@/views/Impressum.vue"),
  },
  {
    path: "/datenschutz",
    name: "Datenschutz",
    component: () => import("@/views/Datenschutz.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
