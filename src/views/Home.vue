<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-active="$route.path" router unique-opened>
        <el-submenu index="1">
          <template slot="title">内容管理</template>
          <el-menu-item-group>
            <span slot="title">物品</span>
            <el-menu-item index="/items/edit">新建物品</el-menu-item>
            <el-menu-item index="/items/list">物品列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <span slot="title">英雄</span>
            <el-menu-item index="/heros/edit">新建英雄</el-menu-item>
            <el-menu-item index="/heros/list">英雄列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <span slot="title">文章</span>
            <el-menu-item index="/article/edit">新建文章</el-menu-item>
            <el-menu-item index="/article/list">英雄文章</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">运营管理</template>
          <el-menu-item-group>
            <span slot="title">广告</span>
            <el-menu-item index="/advert/edit">新建广告位</el-menu-item>
            <el-menu-item index="/advert/list">广告位列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">系统管理</template>
          <el-menu-item-group>
            <span slot="title">分类</span>
            <el-menu-item index="/categories/edit">新建分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <span slot="title">管理员</span>
            <el-menu-item index="/adminUser/edit">新建管理员</el-menu-item>
            <el-menu-item index="/adminUser/list">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>
              <div @click="logout">退出登录</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
  methods: {
    logout() {
      this.$confirm("是否退出当前用户？", "提示", {
        confirmButtonText: "退出",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出",
          });
        });
    },
  },
};
</script>
<style lang="less">
.el-menu {
  height: 100%;
}
</style>
