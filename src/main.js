import { createApp } from "vue";
import App from "./App.vue";
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
app.use(router); // Vue Router verwenden
app.mount("#app");
