import Vue from "vue";
import router from "./router/router";

import App from "./App.vue";

new Vue({
  el: "#app",
  router: router,
  render: h => h(App),
});
