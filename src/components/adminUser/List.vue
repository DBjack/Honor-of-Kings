<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="_id" label="ID"></el-table-column>
    <el-table-column prop="username" label="账号"></el-table-column>
    <el-table-column label="操作" align="right">
      <template slot-scope="scope">
        <el-button @click="$router.push(`/adminUser/edit/${scope.row._id}`)"
          >编辑</el-button
        >
        <el-button @click="del(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { fetchAdminUser, delAdminUser } from "@/api/adminUser";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.fetchAdminUser();
  },
  methods: {
    async fetchAdminUser() {
      const data = await fetchAdminUser();
      this.tableData = data;
    },
    edit(row) {
      this.$router.push({
        path: "/adminUser/edit",
        params: {
          row,
        },
      });
    },
    // 删除分类
    del(id) {
      this.$confirm("此操作将永久删除该分类, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await delAdminUser({ id: id });
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.fetchAdminUser();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
