import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router";

import "./assets/scss/style.scss";

createApp(App).use(store).use(router).mount("#app");
