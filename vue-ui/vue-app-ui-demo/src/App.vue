<template>
  <div id="app">
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
