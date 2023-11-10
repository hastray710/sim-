<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <el-icon @click="changeIcon">
        <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'">
          <!-- 判断是否折叠来改变突变状态 -->
        </component>
      </el-icon>
    </div>
    <!-- 顶部左侧静态 -->
    <div class="tabbar_right">
      <span style="width: 640px; height: 24px; position: relative; top: 10%">
        共有卡24427张 ,正使用14908张 ,待激活7134张 ,本月到期782张 ,
        账户余额454.80元
      </span>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{ userStore.username }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="Plus" @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- 用户下拉菜单 -->
    </div>
  </div>
  <!-- 顶部右侧静态 -->
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import useLayOutSettingStore from '@/store/modules/setting';
//获取layout配置相关的仓库
import useUserStore from '@/store/modules/user';
//获取用户相关的小仓库
let LayOutSettingStore = useLayOutSettingStore();
let userStore = useUserStore();
let $router = useRouter();
const changeIcon = () => {
  //图标进行切换
  LayOutSettingStore.fold = !LayOutSettingStore.fold
};
//点击图标的方法
//定义一个响应式数据控制图标切换
const logout = () => {
  //第一件事：需要向服务器发请求【退出登录接口】，之后要加进来，调用接口
  userStore.userLogout();
  //第二件事：仓库中关于用于相关的数据清空【token|username|看情况具体可能还有别的东西】
  $router.push({ path: '/login' });
  //第三件事：跳转到登录页面

};
//退出登录点击回调
</script>
<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .tabbar_right {
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
