<template>
  <div class="nav">
    <ul>
      <li @click="pageTo('Home')" :class="$route.name =='Home'? 'cur': ''">首页</li>
      <li @click="pageTo('List')" :class="$route.name =='List'? 'cur': ''">列表页</li>
      <li @click="pageTo('User')" :class="$route.name =='User'? 'cur': ''">个人中心页</li>
      <li @click="pageTo('pwd')" :class="$route.name =='pwd'? 'cur': ''">修改密码页</li>
      <li @click="pageTo('address')" :class="$route.name =='address'? 'cur': ''">收货地址</li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    pageTo(page) {
      this.$router.push({
        name: page
      });
    }
  }
};
</script>
<style>
.nav {
  width: 100%;
  height: 80px;
  background: deeppink;
}
.nav ul {
  width: 100%;
  height: 80px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.nav li {
  width: 120px;
  font-size: 22px;
  color: aliceblue;
  text-align: center;
}
.nav .cur {
  color: yellow;
}
</style>


