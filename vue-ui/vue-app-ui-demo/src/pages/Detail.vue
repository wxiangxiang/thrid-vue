<template>
  <div class="detail">
    <h1>我是详情页</h1>
  </div>
</template>
<script>
export default {
  name: "Detail",
  created() {
    console.log(this.$route.params);
    console.log(this.$route.query);
  }
};
</script>