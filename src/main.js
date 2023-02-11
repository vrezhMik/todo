import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
createApp(App).use(store).mount("#app");
