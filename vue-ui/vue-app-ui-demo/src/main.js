import Vue from "vue";
import "./cube-ui";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router, //router:router
  render: h => h(App)
}).$mount("#app");
