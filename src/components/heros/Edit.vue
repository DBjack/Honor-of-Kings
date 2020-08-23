<template>
  <div>
    <h2>{{ id ? "修改物品" : "新建物品" }}</h2>
    <el-form label-width="100px">
      <el-tabs value="skill" type="border-card">
        <el-tab-pane label="基本信息" name="basic">
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
              >{{ item.name }}</el-option>
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

          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option v-for="item in items" :key="item._id" :value="item._id" :label="item.name">
                <div style="display:flex;align-items:center">
                  <img :src="item.icon" style="width:20px;margin-right:4px" />
                  {{ item.name }}
                </div>
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option v-for="item in items" :key="item._id" :value="item._id" :label="item.name">
                <div style="display:flex;align-items:center">
                  <img :src="item.icon" style="width:20px;margin-right:4px" />
                  {{ item.name }}
                </div>
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.useTips"></el-input>
          </el-form-item>

          <el-form-item label="对战技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>

          <el-form-item label="团队思路">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>

          <!-- <el-form-item label="英雄搭配">
        <el-select v-model="model.partnets.heros" multiple>
          <el-option
            v-for="hero in heros"
            :key="hero._id"
            :value="hero._id"
            :label="hero.name"
          >{{hero.name}}</el-option>
        </el-select>
        <el-input type="textarea" v-model="model.partnets.description"></el-input>
          </el-form-item>-->
        </el-tab-pane>
        <el-tab-pane label="技能信息" name="skill">
          <el-button icon="el-icon-plus" type="text" @click="model.skills.push({})">添加技能</el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(item,index) in model.skills" :key="index">
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/upload'"
                  :show-file-list="false"
                  :on-success="res=> $set(item,'icon',res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="名字">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="提示">
                <el-input v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="model.skills.splice(index,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>

      <el-button type="primary" style="margin-top:20px" @click="onSubmit">提交</el-button>
    </el-form>
  </div>
</template>

<script>
import { fetchSingleHeros, editHeros, addHeros, fetchHeros } from "@/api/heros";
import { fetchCategories } from "@/api/categories";
import { fetchItems } from "@/api/items";
export default {
  name: "EditHeros",
  data() {
    return {
      model: {
        scores: {},
        partnets: {},
        skills: [],
      },
      categories: [],
      items: [],
      heros: [],
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
    this.fetchHeros();
    this.fetchCategories();
    this.fetchItems();
    this.id && this.fetchSingleHeros();
  },
  methods: {
    async fetchHeros() {
      this.heros = await fetchHeros();
    },
    async fetchCategories() {
      this.categories = await fetchCategories();
    },
    async fetchItems() {
      this.items = await fetchItems();
    },
    async fetchSingleHeros() {
      const data = await fetchSingleHeros({
        id: this.id,
      });
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
      this.$router.push("/heros/list");
    },
    afterUpload(res) {
      this.$set(this.model, "avatar", res.url);
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
