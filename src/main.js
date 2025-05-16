import { createApp } from "vue";
import VueDraggableResizable from "vue-draggable-resizable";
import App from "./App.vue";
import LotusDashboard from "./plugins/lotus-dashboard";
import router from "./router";
import store from "./store";

createApp(App)
.use(store)
.use(router)
  .use(LotusDashboard)
  .component("vue-draggable-resizable", VueDraggableResizable)
  .mount("#app");
