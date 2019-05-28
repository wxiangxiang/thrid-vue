<template>
  <div class="home">
    <h1>我是个登录页</h1>
    <label>姓名</label>
    <input type="text" v-model="userName" value="姓名">
    <label>密码</label>
    <input type="text" v-model="userPassword" value="密码" @keyup.enter="clickHandel">
    <button @click="clickHandel">登陆</button>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      userName: "",
      userPassword: ""
    };
  },
  methods: {
    clickHandel() {
      if (this.userName == "admin" && this.userPassword == "admin") {
        localStorage.setItem("token", Date.now());
        this.$router.push({
          name: "User"
        });
      } else {
        alert("请输入正确的登陆信息");
      }
    }
  }
};
</script>