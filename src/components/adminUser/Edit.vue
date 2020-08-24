<template>
  <div>
    <h2>{{ id ? "修改物品" : "新建物品" }}</h2>
    <el-form label-width="100px">
      <el-form-item label="用户">
        <el-input v-model="model.username"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input show-password v-model="model.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { editAdminUser, addAdminUser, fetchSingle } from "@/api/adminUser";
export default {
  data() {
    return {
      model: {},
      categories: [],
      parent: "",
      select: "",
    };
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },

  created() {
    this.id && this.fetchSingle();
  },
  methods: {
    async fetchSingle() {
      const data = await fetchSingle({ id: this.id });
      this.model = data;
    },
    async onSubmit() {
      // 编辑分类
      if (this.id) {
        this.model.id = this.id;
        await editAdminUser(this.model);
        this.$message.success("编辑成功");
      } else {
        // 添加分类
        await addAdminUser(this.model);
        this.$message.success("添加成功");
      }
      this.$router.push("/adminUser/list");
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
  width: 68px;
  height: 68px;
  line-height: 68px;
  text-align: center;
}
.avatar {
  width: 68px;
  height: 68px;
  display: block;
}
</style>
