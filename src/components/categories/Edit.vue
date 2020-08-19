<template>
  <div>
    <h2>{{ id ? "修改分类" : "新建分类" }}</h2>
    <el-form label-width="100px">
      <el-form-item label="上级分类">
        <el-select v-model="parent" @focus="fetchCategories">
          <el-option
            v-for="item in options"
            :key="item._id"
            :value="item._id"
            :label="item.name"
            >{{ item.name }}</el-option
          >
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  fetchCategories,
  editCategories,
  addCategories,
} from "@/api/categories";
export default {
  data() {
    return {
      parent: undefined,
      name: "",
      options: [],
    };
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },

  methods: {
    async fetchCategories() {
      const data = await fetchCategories();
      this.options = data;
    },
    async onSubmit() {
      // 编辑分类
      if (this.id) {
        await editCategories({
          id: this.id,
          name: this.name,
          parent: this.parent,
        });
        this.$message.success("编辑成功");
      } else {
        // 添加分类
        await addCategories({ name: this.name, parent: this.parent });
        this.$message.success("添加成功");
      }
      this.$router.push("/categories/list");
    },
  },
};
</script>

<style></style>
