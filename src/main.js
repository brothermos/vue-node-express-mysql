import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// sweet alert2
import VueSweetalert2 from "vue-sweetalert2";
// sweet alert2 css
import "sweetalert2/dist/sweetalert2.min.css";

// fontawesome
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./style.css"; // main css file

const options = {
    confirmButtonColor: "#41b882",
    cancelButtonColor: "#ff7674",
};

createApp(App).use(store).use(router).use(VueSweetalert2, options).mount("#app");
