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
      >【列表页】</router-link>
      <router-link
        :to="{
        name:'Detail',
        params:{
          id:'3',
          name:'小明',
        }
      }"
      >【详情页】</router-link>
      <router-view></router-view>
    </div>

    <el-button type="primary">新增</el-button>
    <people></people>
  </div>
</template>

<script>
import people from "./components/people.vue";

export default {
  name: "app",
  components: {
    people
  }
};
</script>
