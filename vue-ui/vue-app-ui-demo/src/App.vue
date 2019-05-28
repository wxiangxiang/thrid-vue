<template>
  <div id="app">
    <div>
      <router-link :to="{
        path:'/',
      }">【首页】</router-link>
      <router-link
        :to="{
        name:'List',
        query:{
          c:'mobile'
        }
      }"
      >
        <!--
        router-link最终会生成a标签用来做路由跳转
        每一个router-link必须要有一个属性叫to,表示跳转的路径
        在配置跳转路由的时候可以设置以下参数
        name
        路由表中中配置的路由名字(超级建议使用)
        path
        路由表中配置的url访问地址
        params
        路由访问地址中传递的参数,可以是任意形式的,但是如果参数想在页面刷新之后保留
        就必须在路由表配置的时候使用:参数名的形式设置
        query
        表示访问地址后面的url中传递的参数,使用?分割
        当使用了路由之后,在页面组件(配置在路由表中的组件)中会包含两个属性
        $router
        表示路由对象,可以在上面实现跳转和刷新等操作;push(路由对象或者url[建议使用路由对象])
        $route
        表示当前路由的数据
        包含有路径
        参数等信息-->
        【列表页】
      </router-link>
      <router-link
        :to="{
        name:'Detail',
        params:{
          id:'3',
          name:'小明',
          p:{
              name:'小智',
              age:18,
              pet:[
                {
                  name:'皮卡丘',
                  age:12
                },
                {name:'乌龟'},
                {name:'妙蛙种子'}
              ]
          }
        }
      }"
      >【详情页】</router-link>
      <router-link :to="{name:'address'}">收货地址</router-link>
      <router-view></router-view>
      <!--  router-view是用来显示内容，我们所有的配置在路由表（routes）中的组件都会出现在此容器内  -->
      <div class="main">
        <ANav></ANav>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import people from "./components/people.vue";
import ANav from "./components/ANav";

export default {
  name: "app",
  components: {
    people,
    ANav
  }
};
</script>
