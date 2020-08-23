<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="_id" label="ID"></el-table-column>
    <el-table-column prop="parent.name" label="分类"></el-table-column>
    <el-table-column prop="title" label="标题"></el-table-column>
    <el-table-column label="操作" align="right">
      <template slot-scope="scope">
        <el-button @click="$router.push(`/article/edit/${scope.row._id}`)">编辑</el-button>
        <el-button @click="del(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { fetchArticle, delArticle } from "@/api/article";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.fetchArticle();
  },
  methods: {
    async fetchArticle() {
      const data = await fetchArticle();
      this.tableData = data;
    },
    edit(row) {
      this.$router.push({
        path: "/article/edit",
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
          await delArticle({ id: id });
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.fetchArticle();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
