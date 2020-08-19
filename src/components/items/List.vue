<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="_id" label="ID"></el-table-column>
    <el-table-column prop="icon" label="图标">
      <template slot-scope="scope">
        <div>
          <img :src="scope.row.icon" style="width:40px" />
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="分类"></el-table-column>
    <el-table-column label="操作" align="right">
      <template slot-scope="scope">
        <el-button @click="$router.push(`/items/edit/${scope.row._id}`)">编辑</el-button>
        <el-button @click="del(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { fetch, delCategory } from "@/api/items";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const data = await fetch();
      this.tableData = data;
    },
    edit(row) {
      this.$router.push({
        path: "/items/edit",
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
          await delCategory({ id: id });
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.fetch();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
