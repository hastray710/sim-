<template>
  <div class="layout_container">
    <div class="layout_slider">
      <div></div>
      <!-- 预留一片空白区域 -->
      <el-scrollbar class="scrollbar">
        <!-- 滚动组件 -->
        <el-menu background-color="rgb(48, 65, 86)" text-color="white">
          <!-- 根据路由动态生成菜单 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
        <!-- 菜单组件 -->
      </el-scrollbar>
    </div>
    <!-- 左侧菜单 -->
    <div class="layout_tabbar">456</div>
    <!-- 顶部导航 -->
    <div class="layout_middle">789</div>
    <!-- 顶部分页 -->
    <div class="layout_main">
      <Main></Main>
    </div>
    <!-- 内容展示区域 -->
  </div>
</template>

<script setup lang="ts">
import Menu from './menu/index.vue';
//引入菜单组件
import Main from './main/index.vue';
//右侧内容展示区域
import useUserStore from '@/store/modules/user';
//获取用户相关的小仓库
let userStore = useUserStore();
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;

    .scrollbar {
      width: 100%;
      height: 100vh;

      .el-menu {
        border-right: none;
      }

    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: white;
    top: 0px;
    left: $base-menu-width;
  }

  .layout_middle {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: $base-middle-height;
    background: rgb(0, 255, 115);
    left: $base-menu-width;
    top: $base-tabbar-height;
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-middle-height - $base-tabbar-height);
    background: blue;
    left: $base-menu-width;
    top: calc($base-tabbar-height + $base-middle-height);
    padding: 20px;
    overflow: auto;
  }
}
</style>
