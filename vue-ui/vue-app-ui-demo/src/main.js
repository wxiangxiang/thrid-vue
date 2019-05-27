import Vue from "vue";
import VueRouter from "vue-router";
import "./cube-ui";
import App from "./App.vue";
import "./plugins/element.js";
import H from "./pages/Index";
import L from "./pages/List";
import D from "./pages/Detail";

Vue.config.productionTip = false;
Vue.use(VueRouter);

//定义路由数据
const router = new VueRouter({
  routes: [
    {
      path: "/", //访问的地址 url中输入的内容
      component: H, //访问指定地址时显示的内容
      name: "Home" //路由的名字，在实际开发的时候强烈建议使用name属性实现跳转
    },
    {
      path: "/list",
      component: L,
      name: "List"
    },
    {
      path: "/list/:id", //路由传参，传递参数id
      component: D,
      name: "Detail"
    }
  ]
});

new Vue({
  router, //router:router
  render: h => h(App)
}).$mount("#app");
