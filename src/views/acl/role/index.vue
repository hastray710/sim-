<template>
  <div>
    <el-card class="box-card">
      <span>子账户管理</span>
      <el-form-item>
        <el-input v-model="input1" class="w-50 m-2" size="large " placeholder="用户名" />
        <el-input v-model="input1" class="w-50 m-2" size="large " placeholder="权限组名称" />
        <button>查询</button>
        <button>重置</button>
      </el-form-item>
      <!-- 卡片顶部搜索框 -->
    </el-card>
    <el-card class="box-card">
      <span>提示：子账户的登录名为以下列表中的用户名，而非用户名后缀。请在创建子账户前，提前在权限组管理菜单中创建权限组。</span>
      <el-form-item>
        <button>添加子账户</button>
      </el-form-item>
      <!-- 中部按钮 -->
    </el-card>

    <el-card class="box-card">
      <el-table border style="width: 100%">
        <el-table-column label="用户名" width="104px" fix='left'></el-table-column>
        <el-table-column label="组名称" width="235px" fix='left'></el-table-column>
        <el-table-column label="是否启用" width="160px"></el-table-column>
        <el-table-column label="编辑" width="120px"></el-table-column>
      </el-table>
      <!-- 表格组件。详细数据 -->
      <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[5, 10, 20, 30, 50]"
        :small="small" :disabled="disabled" :background="true" layout="total, sizes, prev,pager, next, jumper"
        :total="400" />
      <!-- @size-change="handleSizeChange" @current-change="handleCurrentChange" -->
      <!-- layou:可以调整分页器六个子组件的布局调整 -->
      <!-- 分页器 -->
    </el-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
