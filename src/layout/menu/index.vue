<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item
        :index="item.path"
        v-if="!item.meta.hidden"
        @click="goRoute"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 没有子路由 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        :index="item.children[0].path"
        v-if="!item.children[0].meta.hidden"
        @click="goRoute"
      >
        <template #title>
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由，但是只有一个 -->
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 1"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
    <!-- 有子路由，但个数大于一个 -->
  </template>
</template>

<script setup lang="ts">
defineProps(['menuList'])
//获取父组件传递过来的全部路由数组
import { useRouter } from 'vue-router'
let $router = useRouter()
//获取路由对象
const goRoute = (vc: any) => {
  $router.push(vc.index)
  //路由跳转
}
//点击菜单的回调
</script>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<style scoped></style>
