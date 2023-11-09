<template>
  <div class="layout_container">
    <div class="layout_slider" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <div> </div>
      <!-- 预留一片空白区域 -->
      <el-scrollbar class="scrollbar">
        <!-- 滚动组件 -->
        <el-menu :collapse="LayOutSettingStore.fold ? true : false" :default-active="$route.path"
          background-color="rgb(48, 65, 86)" text-color="white">
          <!-- 根据路由动态生成菜单 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
        <!-- 菜单组件 -->
      </el-scrollbar>
    </div>
    <!-- 左侧菜单 -->
    <div class="layout_tabbar" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <Tabbar></Tabbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_middle" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <Middle></Middle>
    </div>
    <!-- 顶部分页 -->
    <div class="layout_main" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <Main></Main>
    </div>
    <!-- 内容展示区域 -->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
//获取路由对象
import Menu from './menu/index.vue';
//引入菜单组件
import Main from './main/index.vue';
//右侧内容展示区域
import Tabbar from './tabbar/index.vue';
//引入顶部tabbar组件
import Middle from './middle/index.vue';
//引入顶部tabbar组件
import useUserStore from '@/store/modules/user';
//获取用户相关的小仓库
import useLayOutSettingStore from '@/store/modules/setting';

let userStore = useUserStore();
let LayOutSettingStore = useLayOutSettingStore();
//获取layout配置仓库
let $route = useRoute();
//获取路由对象
</script>

<script lang="ts">
export default {
  name: "Layout"
}
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;

    .scrollbar {
      width: 100%;
      height: 100vh;

      .el-menu {
        border-right: none;
      }
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0px;
    left: $base-menu-width;
    // background-color: red;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_middle {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: $base-middle-height;
    left: $base-menu-width;
    top: $base-tabbar-height;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
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
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
