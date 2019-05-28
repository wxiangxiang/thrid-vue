<template>
  <!-- 表示模板 html -->
  <div id="app">
    <btn></btn>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 在单文件组件中可以使用这种驼峰的命名方式 -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
//js脚本
import HelloWorld from './components/HelloWorld.vue';
import btn from './components/button';

export default {
  name: 'app',
  components: {
    HelloWorld,
    btn,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
