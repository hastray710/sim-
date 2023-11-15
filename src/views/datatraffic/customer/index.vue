<template>
    <div>
        <el-card class="box-card">
            <el-form-item>
                <el-input v-model="input1" class="w-50 m-2" size="large " placeholder="所属公司" />
                <button>查找</button>
                <button>重置</button>
            </el-form-item>
            <!-- 卡片顶部搜索框 -->
        </el-card>

        <el-card class="box-card">
            <button>添加流量池</button>
            <!-- 左上按钮 -->
            <el-table border style="width: 100%">
                <el-table-column label="序号" width="104px" fix='left'></el-table-column>
                <el-table-column label="名称" width="235px" fix='left'></el-table-column>
                <el-table-column label="卡片总数" width="160px"></el-table-column>
                <el-table-column label="已激活卡数" width="120px"></el-table-column>
                <el-table-column label="总量（MB）" width="70px"></el-table-column>
                <el-table-column label="已用" width="185px"></el-table-column>
                <el-table-column label="百分比" width="100px"></el-table-column>
                <el-table-column label="剩余" width="100px"></el-table-column>
                <el-table-column label="单卡超流量停机（MB）" width="180px"></el-table-column>
                <el-table-column label="停机开关" width="120px"></el-table-column>
                <el-table-column label="报警阈值" width="180px"></el-table-column>
                <el-table-column label="报警邮箱" width="180px"></el-table-column>
                <el-table-column label="抄送邮箱" width="180px"></el-table-column>
                <el-table-column label="客户名称" width="180px"></el-table-column>
                <el-table-column label="操作" width="180px"></el-table-column>
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

<script setup lang="ts">

</script>

<style scoped></style>