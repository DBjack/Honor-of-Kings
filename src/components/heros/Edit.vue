<template>
  <div>
    <h2>{{ id ? "修改物品" : "新建物品" }}</h2>
    <el-form label-width="100px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>

      <el-form-item label="称号">
        <el-input v-model="model.title"></el-input>
      </el-form-item>

      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.avatar" :src="model.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="分类">
        <el-select v-model="model.categories" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :value="item._id"
            :label="item.name"
            >{{ item.name }}</el-option
          >
        </el-select>
      </el-form-item>

      <el-form-item label="难度">
        <el-rate v-model="model.scores.difficult" :color="color"></el-rate>
      </el-form-item>

      <el-form-item label="技巧">
        <el-rate v-model="model.scores.skills" :color="color"></el-rate>
      </el-form-item>

      <el-form-item label="攻击">
        <el-rate v-model="model.scores.attack" :color="color"></el-rate>
      </el-form-item>

      <el-form-item label="生存" justify="center">
        <el-rate v-model="model.scores.survice" :color="color"></el-rate>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { fetchHeros, editHeros, addHeros } from "@/api/heros";
import { fetchCategories } from "@/api/categories";
export default {
  data() {
    return {
      model: {
        scores: {},
      },
      categories: [],
      color: ["#99A9BF", "#F7BA2A", "#FF9900"],
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
  },
  methods: {
    async fetchCategories() {
      this.categories = await fetchCategories();
      console.log(this.categories);
    },
    async fetchHeros() {
      const data = await fetchHeros();
      this.model = data;
    },
    async onSubmit() {
      // 编辑分类
      if (this.id) {
        this.model.id = this.id;
        await editHeros(this.model);
        this.$message.success("编辑成功");
      } else {
        // 添加分类
        await addHeros(this.model);
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
.el-rate {
  margin-top: 12px;
}
</style>
