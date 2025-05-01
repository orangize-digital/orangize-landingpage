import { createApp } from "vue";
import App from "./App.vue";
import { createHead } from "@vueuse/head";
import router from "./router"; // Importiere den Router
import "./app.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 50,
});

const app = createApp(App);
const head = createHead();
app.use(head);
app.use(router); // Vue Router verwenden
app.mount("#app");
