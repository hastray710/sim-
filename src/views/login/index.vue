<template>
    <div class="login_container">
        <el-row>
            <el-col :span="8" :xs="0"></el-col>
            <!-- 左侧部分 -->
            <el-col :span="8" :xs="24">
                <el-form class="login_form">
                    <h1>SIM卡管理登录页面</h1>
                    <el-form-item>
                        <el-input :prefix-icon="User"></el-input>
                    </el-form-item>
                    <!-- 用户名输入框 -->
                    <el-form-item>
                        <el-input :prefix-icon="Lock" type="password"></el-input>
                    </el-form-item>
                    <!-- 密码输入框 -->
                    <el-form-item>
                        <el-button type="primary" size="default">登录
                        </el-button>
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
import { User, Lock } from '@element-plus/icons-vue';
import { reactive } from 'vue';
let loginForm = reactive({username:'',password:''})
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