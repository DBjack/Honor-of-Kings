<template>
  <div>
    <h2>{{ id ? "修改物品" : "新建物品" }}</h2>
    <el-form label-width="100px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          icon="el-icon-plus"
          type="text"
          @click="model.advert.push({})"
          >添加广告位</el-button
        >
      </el-form-item>

      <el-row type="flex" style="flex-wrap:wrap">
        <el-col :md="12" v-for="(item, index) in model.advert" :key="index">
          <el-form-item label="图标">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :show-file-list="false"
              :on-success="(res) => $set(item, 'icon', res.url)"
            >
              <img v-if="item.icon" :src="item.icon" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="跳转链接">
            <el-input v-model="item.url">
              <template slot="prepend">
                <span>https://</span>
                <span>http://</span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="item.description" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="提示">
            <el-input v-model="item.tips"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="model.advert.splice(index, 1)"
              >删除</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { editAdvert, addAdvert, fetchSingle } from "@/api/advert";
import { fetchCategories } from "@/api/categories";
export default {
  data() {
    return {
      model: {
        advert: [],
      },
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
        await editAdvert(this.model);
        this.$message.success("编辑成功");
      } else {
        // 添加分类
        await addAdvert(this.model);
        this.$message.success("添加成功");
      }
      this.$router.push("/advert/list");
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
