import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import WebsiteErstellen from "./views/WebsiteErstellen.vue";
import WebsiteErstellenHerford from "./views/WebsiteErstellenHerford.vue";
import WebsiteErstellenMinden from "./views/WebsiteErstellenMinden.vue";
import WebsiteErstellenBuende from "./views/WebsiteErstellenBuende.vue";
import WebsiteErstellenPortaWestfalica from "./views/WebsiteErstellenPortaWestfalica.vue";
import WebsiteErstellenBO from "./views/WebsiteErstellenBO.vue";
import WebsiteErstellenBielefeld from "./views/WebsiteErstellenBielefeld.vue";
import GoogleAds from "./views/GoogleAds.vue";
import GoogleAdsPortaWestfalica from "./views/GoogleAdsPortaWestfalica.vue";
import GoogleAdsBielefeld from "./views/GoogleAdsBielefeld.vue";
import GoogleAdsBuende from "./views/GoogleAdsBuende.vue";
import GoogleAdsHerford from "./views/GoogleAdsHerford.vue";
import GoogleAdsMinden from "./views/GoogleAdsMinden.vue";
import GoogleAdsAnalyse from "./views/GoogleAdsAnalyse.vue";
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
    path: "/website-erstellen-herford",
    name: "WebsiteErstellenHerford",
    component: WebsiteErstellenHerford,
  },
  {
    path: "/website-erstellen-minden",
    name: "WebsiteErstellenMinden",
    component: WebsiteErstellenMinden,
  },
  {
    path: "/website-erstellen-buende",
    name: "WebsiteErstellenBuende",
    component: WebsiteErstellenBuende,
  },
  {
    path: "/website-erstellen-porta-westfalica",
    name: "WebsiteErstellenPortaWestfalica",
    component: WebsiteErstellenPortaWestfalica,
  },
  {
    path: "/website-erstellen-bad-oeynhausen",
    name: "WebsiteErstellenBadOeynhausen",
    component: WebsiteErstellenBO,
  },
  {
    path: "/website-erstellen-bielefeld",
    name: "WebsiteErstellenBielefeld",
    component: WebsiteErstellenBielefeld,
  },
  {
    path: "/google-ads",
    name: "GoogleAds",
    component: GoogleAds,
  },
  {
    path: "/google-ads-porta-westfalica",
    name: "GoogleAdsPortaWestfalica",
    component: GoogleAdsPortaWestfalica,
  },
  {
    path: "/google-ads-bielefeld",
    name: "GoogleAdsBielefeld",
    component: GoogleAdsBielefeld,
  },
  {
    path: "/google-ads-buende",
    name: "GoogleAdsBuende",
    component: GoogleAdsBuende,
  },
  {
    path: "/google-ads-herford",
    name: "GoogleAdsHerford",
    component: GoogleAdsHerford,
  },
  {
    path: "/google-ads-minden",
    name: "GoogleAdsMinden",
    component: GoogleAdsMinden,
  },
  {
    path: "/google-ads-analyse",
    name: "GoogleAdsAnalyse",
    component: GoogleAdsAnalyse,
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
