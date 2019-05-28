import Vue from "vue";
import VueRouter from "vue-router";
import H from "./pages/Index";
import L from "./pages/List";
import D from "./pages/Detail";
import U from "./pages/User";
import UI from "./pages/user/UserInfo";
import UP from "./pages/user/UserPWD";
import AD from "./pages/user/UserAddress";
import log from "./pages/Login";

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
      path: "/list/:id/:name?", //路由传参，传递参数id, :?"表示可选参数
      component: D,
      name: "Detail"
    },
    {
      path: "/user", //路由地址,
      component: U,
      name: "User",
      meta: {
        needLogin: true
      },
      //通过children属性实现嵌套,可以嵌套很多级,
      //每一个children属性值是一个路由对象组成的数组
      //子路由内容显示在父路由对应的组件中的router-view节点中
      children: [
        //子路由,路由嵌套
        {
          path: "info",
          component: UI,
          name: "info"
        },
        {
          path: "pwd",
          component: UP,
          name: "pwd"
        },
        {
          path: "address",
          component: AD,
          name: "address"
        }
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: log
    }
  ]
});
router.beforeEach(function(to, from, next) {
  if (to.meta.needLogin) {
    if (localStorage.getItem("token")) {
      //本地存储中是否有token数据
      next(); //表示已经登陆
    } else {
      next({
        name: "Login"
      });
    }
  } else {
    next(); //继续往后面走
  }
});

export default router;
