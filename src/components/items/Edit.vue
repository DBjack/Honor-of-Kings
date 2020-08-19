<template>
  <div>
    <h2>{{ id ? "修改物品" : "新建物品" }}</h2>
    <el-form label-width="100px">
      <!-- <el-form-item label="上级分类">
        <el-select v-model="parent" @focus="fetch">
          <el-option
            v-for="item in options"
            :key="item._id"
            :value="item._id"
            :label="item.name"
            >{{ item.name }}</el-option
          >
        </el-select>
      </el-form-item> -->
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>

      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { fetch, edit, add } from "@/api/items";
export default {
  data() {
    return {
      model: {
        name: "",
      },
      options: [],
    };
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  created() {
    console.log(this.$http.defaults);
  },
  methods: {
    async fetch() {
      const data = await fetch();
      this.options = data;
    },
    async onSubmit() {
      // 编辑分类
      if (this.id) {
        this.model.id = this.id;
        await edit(this.model);
        this.$message.success("编辑成功");
      } else {
        // 添加分类
        await add(this.model);
        this.$message.success("添加成功");
      }
      this.$router.push("/items/list");
    },
    afterUpload(res) {
      this.$set(this.model, "icon", res.url);
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
