<template>
  <div class="login_container">
    <el-row>
      <el-col :span="8" :xs="0"></el-col>
      <!-- 左侧部分 -->
      <el-col :span="8" :xs="24">
        <el-form class="login_form">
          <h1>SIM卡管理登录页面</h1>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <!-- 用户名输入框 -->
          <el-form-item>
            <el-input :prefix-icon="Lock" type="password" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <!-- 密码输入框 -->
          <el-form-item>
            <el-button :loading="loading" type="primary" size="default" @click="login">登录</el-button>
            <!-- 登录按钮 -->
          </el-form-item>
        </el-form>
      </el-col>
      <!-- 中间部分 -->
      <el-col :span="8" :xs="0"></el-col>
      <!-- 右侧部分 -->
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
//引入用户相关的小仓库
import { ErrorTypes, useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
//引入消息气窗的组件
let $router = useRouter()
//获取路由
let loading = ref(false);
//控制加载按钮效果
let useStore = useUserStore()
let loginForm = reactive({ username: 'admin', password: '111111' })
//收集账号与密码的数据
const login = async () => {
  loading.value = true;
  try {
    await useStore.userLogin(loginForm)
    //保证登录成功
    $router.push('/');
    //编程时导航跳转到展示数据首页
    ElNotification({
      type: 'success',
      message: '登录成功'
    });
    //登录成功的信息提示
    loading.value = false;
    //登录成功加载效果也消失
  } catch (error) {
    loading.value = false;
    //登录失败加载效果消失
    ElNotification({
      type: 'error',
      message: (error as Error).message
    })
  }
}
//登录按钮回调.
//通知仓库发登录请求
//请求成功->进入一级路由
//请求失败->弹出登录失败信息
</script>

<style scoped lang="scss">
h1 {
  font-size: 20px;
  color: white;
  font-weight: bold;
  margin: 20px 20px;
}

.login_container {
  width: 100%;
  height: 100dvh;
  background: url('@/assets/images/backguound.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 40%;
    top: 45vh;
    left: 200px;
  }
}
</style>
