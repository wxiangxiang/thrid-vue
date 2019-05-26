<template>
  <el-row>
    <el-col>
      <el-form>
        <el-form-item label="姓名">
          <el-input v-model="person.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="person.age"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="person.address"></el-input>
        </el-form-item>
        <el-button @click="saveHandel(person)">提交</el-button>
      </el-form>
    </el-col>
    <el-table :data="people" style="width: 100%" stripe border>
      <el-table-column label="序号">
        <!--scope.row可以获取当前行中的数据-->
        <template slot-scope="scope">
          <label>{{scope.$index+1}}</label>
          <!-- <p>{{scope.row}}</p> -->
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="ediHandel(scope.row)">修改</el-button>
          <el-button @click="delHandel(scope.row)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>

  <script>
import { getPeople, savePeople } from "../services/people";
export default {
  data() {
    return {
      people: [],
      person: {
        name: "",
        age: "",
        address: ""
      }
    };
  },
  methods: {
    ediHandel(item) {
      console.log("当前需要修改的数据为");
      console.log(item);
    },
    delHandel(item) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          //此处需要调用服务器端接口删除数据
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    async saveHandel(p) {
      if (p.name && p.age && p.address) {
        await savePeople({
          name: p.name,
          age: p.age,
          address: p.address
        });
        // savePeople({
        //   name: p.name,
        //   age: p.age,
        //   address: p.address
        // }).then(res => {
        //   (p.name = ""), (p.age = ""), (p.adress = "");
        //   getPeople().then(res => {
        //     this.people = res.data;
        //   });
        // });
        // const result = await getPeople();
        // this.people = result.data;
        this.loadData();
      } else {
        this.$message({
          type: "info",
          message: "请输入全部信息"
        });
      }
    },
    async loadData() {
      const result = await getPeople();
      this.people = result.data;
    }
  },
  created() {
    // getPeople().then(res => {
    //   this.people = res.data;
    // });
    // const result = await getPeople();
    // this.people = result.data;
    this.loadData();
  }
};
</script>
