<template>
    <div class="layout_container">
        <div class="layout_slider">
            <div></div>
            <!-- 预留一片空白区域 -->
            <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
            </ul>
            <!-- 滚动组件 -->
            <el-menu background-color="rgb(48, 65, 86)" text-color="white">
                <!-- 根据路由动态生成菜单 -->
                <el-menu-item index="1">账户总览</el-menu-item>
                <el-sub-menu index="2">
                    <template #title>
                        <span>单卡管理</span>
                    </template>
                    <el-menu-item index="2-1">单卡管理</el-menu-item>
                    <el-menu-item index="2-2">单卡管理</el-menu-item>
                    <el-menu-item index="2-3">单卡管理</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="3">短信管理</el-menu-item>
                <el-menu-item index="4">充值管理</el-menu-item>
                <el-menu-item index="5">批量停复机</el-menu-item>
                <el-menu-item index="6">语音白名单</el-menu-item>
                <el-menu-item index="7">账户管理</el-menu-item>
            </el-menu>
            <!-- 菜单组件 -->
        </div>
        <!-- 左侧菜单 -->
        <div class="layout_tabbar">456</div>
        <!-- 顶部导航 -->
        <div class="layout_middle">789</div>
        <!-- 顶部分页 -->
        <div class="layout_main">10 </div>
        <!-- 内容展示区域 -->
    </div>
</template>

<script setup lang="ts">
import Menu from './menu/index.vue'
</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background
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