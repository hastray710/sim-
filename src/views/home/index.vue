<template>
  <div>
    <h1>一级路由成功</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
//引入组合式API函数之生命周期函数
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
//获取仓库
onMounted(() => {
  userStore.userInfo()
})
//目前首页挂在完毕发请求获取用户信息
</script>

<style scoped></style>
