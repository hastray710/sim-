<template>
  <div>
    <div class="singlecard_card1">
      <Card1></Card1>
    </div>
    <!-- 搜索框部分card1 -->
    <el-card class="box-card">
      <el-radio-group v-model="radio1" size="large">
        <el-radio-button label="所有卡" />
        <el-radio-button label="超量卡" />
        <el-radio-button label="本月到期卡" />
      </el-radio-group>
      <el-form class="button2">
        <el-button>高级导出</el-button>
        <el-button>批量导出</el-button>
        <el-button>导出数据</el-button>
      </el-form>
      <!-- 右侧按钮 -->
      <el-table border style="width: 100%" :data="singlecardArr">
        <el-table-column label="MSISDN" min-width="104px" fixed='left' prop=""></el-table-column>
        <el-table-column label="计费组代码" min-width="235px" fixed='left' prop=""></el-table-column>
        <el-table-column label="ICCID" width="160px" prop=""></el-table-column>
        <el-table-column label="IMSI" width="120px" prop=""></el-table-column>
        <el-table-column label="运营商" width="70px" prop=""></el-table-column>
        <el-table-column label="套餐" width="185px" prop=""></el-table-column>
        <el-table-column label="激活日期" width="100px" prop=""></el-table-column>
        <el-table-column label="到期日期" width="100px" prop=""></el-table-column>
        <el-table-column label="当前周期流量使用情况" width="180px"></el-table-column>
        <template>
        </template>
        <el-table-column label="超出流量MB" width="120px" prop=""></el-table-column>
        <el-table-column label="当前周期语音使用情况" width="180px" prop=""></el-table-column>
        <el-table-column label="超出语音计费（分）" width="160px" prop=""></el-table-column>
        <el-table-column label="卡状态" width="80px"></el-table-column>
        <template>
        </template>
        <el-table-column label="智能诊断" width="80px"></el-table-column>
        <template>
        </template>
        <el-table-column label="短信操作" width="80px"></el-table-column>
        <template>
        </template>
        <el-table-column label="停机复机" width="80px"></el-table-column>
        <template>
        </template>
        <el-table-column label="出库日期" width="120px" prop=""></el-table-column>
        <el-table-column label="二维码" width="120px"></el-table-column>
        <template>
        </template>
      </el-table>
      <!-- 表格组件。详细数据 -->
      <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[5, 10, 20, 30, 50]"
        :small="small" :disabled="disabled" :background="true" layout="total, sizes, prev,pager, next, jumper"
        :total="totle" />
      <!-- @size-change="handleSizeChange" @current-change="handleCurrentChange" -->
      <!-- layou:可以调整分页器六个子组件的布局调整 -->
      <!-- 分页器 -->
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { reqSingleCard } from '@/api/card/singlecard'
import { tooltipEmits } from 'element-plus';

import Card1 from './card1/index.vue'
//引入搜索框card1组件
let pageNo = ref<number>(1);
//当前页码
let limit = ref<number>(10);
//每页展示的数据
let total = ref<number>(0);
//存储已有数据的总数，用于分页器显示总数据量
let singlecardArr = ref<ant>([]);
//存储单卡管理的数据
const radio1 = ref('所有卡')
const getSingleCard = async () => {
  let result = reqSingleCard();
  if (result.code == 200) {
    total.value = result.data.total;
    //存储单卡管理的数据条数的总个数，用于分页器
    singlecardArr.value = result.data.records;
  }
}
//获取单卡管理的接口封装为一个函数：在任何情况下想获取数据，调用此函数即可
onMounted(() => {
  getSingleCard();
}
)
//组件挂载完毕钩子---发一次请求,就获取响应的数据
</script>

<style scoped lang="scss">
.button2 {
  display: flex;
  justify-content: flex-end;
}

:deep(.el-input__wrapper) {
  position: relative;

  .el-input__inner {
    padding-right: 18px;
  }

  .el-input__suffix {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
}

// 此处强制改变输入框在增加claerable后的长度，使得输入框长度不改变
</style>
