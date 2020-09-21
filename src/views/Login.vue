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
          <el-button type="primary" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { login, register } from "@/api/login";
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async login() {
      const { message, code } = await login(this.model);
      code === 1000
        ? this.$message.success(message)
        : this.$message.error(message);

      this.$router.push("/home");
    },
    async register() {
      const { code, msg } = await register(this.model);
      code === 1000 ? this.$message.success(msg) : this.$message.error(msg);
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
