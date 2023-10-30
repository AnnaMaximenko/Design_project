import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";

import "./assets/scss/style.scss";

createApp(App).use(store).mount("#app");
