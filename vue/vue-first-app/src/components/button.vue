<template>
  <div id="btn">
    <input type="button" @click="clickHandel" value="点击我">
  </div>
</template>
<script>
export default {
  methods: {
    clickHandel() {
      alert('你点击懒妞');
    },
  },
};
</script>
<style scoped>
/*scoped表示局部样式效果 只在当前组件中有效*/
#btn {
  background-color: deeppink;
}
</style>

