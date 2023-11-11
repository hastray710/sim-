<template>
  <div>
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item
        v-for="(item, index) in $route.matched"
        :key="index"
        v-show="item.meta.title"
      >
        <!-- :to="item.path"  这个是增加路由点击,去掉即可 -->
        <el-icon style="margin: 0px 3px">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <!-- 这个是图标 -->
        <span>{{ item.meta.title }}</span>
        <!-- 上面是标题 -->
      </el-breadcrumb-item>
      <!-- 面包屑动态展示路由名字与标题 -->
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'

let $route = useRoute()
// const handler = () => {
//   console.log($route.matched)
// }     测试代码
</script>

<style scoped></style>
