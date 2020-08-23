<template>
  <div>
    <h2>{{ id ? "修改物品" : "新建物品" }}</h2>
    <el-form label-width="100px">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option
            v-for="item in categories"
            :key="item._id"
            :value="item._id"
            :label="item.name"
            >{{ item.name }}</el-option
          >
        </el-select>
      </el-form-item>

      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>

      <el-form-item label="内容">
        <Vue-Editor
          v-model="model.content"
          useCustomImageHandler
          @image-added="handleImageAdded"
        ></Vue-Editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { editArticle, addArticle, fetchSingle } from "@/api/article";
import { fetchCategories } from "@/api/categories";
import { VueEditor } from "vue2-editor";
export default {
  data() {
    return {
      model: {},
      categories: [],
      parent: "",
    };
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  components: {
    VueEditor,
  },
  created() {
    this.fetchCategories();
    this.id && this.fetchSingle();
  },
  methods: {
    async fetchCategories() {
      const data = await fetchCategories();
      this.categories = data;
    },
    async fetchSingle() {
      const data = await fetchSingle({ id: this.id });
      this.model = data;
    },
    async onSubmit() {
      // 编辑分类
      if (this.id) {
        this.model.id = this.id;
        await editArticle(this.model);
        this.$message.success("编辑成功");
      } else {
        // 添加分类
        await addArticle(this.model);
        this.$message.success("添加成功");
      }
      this.$router.push("/article/list");
    },
    afterUpload(res) {
      this.$set(this.model, "icon", res.url);
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post("/upload", formData);

      Editor.insertEmbed(cursorLocation, "image", res.url);
      resetUploader();
    },
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
