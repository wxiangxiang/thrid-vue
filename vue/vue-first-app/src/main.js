import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App), //使用App组件在页面上进行
}).$mount('#app');
