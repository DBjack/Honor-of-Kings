4<template>
  <div class="content">
    <el-card class="card">
      <el-form label-width="140px">
        <el-form-item label="用户名">
          <el-input size="small" v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input size="small" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { login } from "@/api/login";
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async login() {
      const { token } = await login(this.model);

      localStorage.setItem("token", token);
    },
  },
};
</script>
<style lang="less">
.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  width: 500px;
  padding: 40px 20px;
}
</style>
