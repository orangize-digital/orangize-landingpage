import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import WebsiteErstellen from "./views/WebsiteErstellen.vue";
import GoogleAds from "./views/GoogleAds.vue";
import BlogHome from "./views/BlogHome.vue";
import BlogPost from "./components/blog-posts/BlogPost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/website-erstellen-lassen",
    name: "WebsiteErstellen",
    component: WebsiteErstellen,
  },
  {
    path: "/google-ads",
    name: "GoogleAds",
    component: GoogleAds,
  },
  {
    path: "/blog",
    name: "BlogHome",
    component: BlogHome,
  },
  {
    path: "/blog/:slug",
    name: "BlogPost",
    component: BlogPost,
    props: true,
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
  // ✅ Catch-all route for 404s → redirects to homepage
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (like browser back/forward), use it
    if (savedPosition) {
      return savedPosition;
    }

    // If navigating to a hash anchor (like #section)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    // For all other navigation, scroll to top
    return { top: 0 };
  },
});

export default router;
