<template>
    <div>
        <el-card>
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="input1" clearable placeholder="MSIDSN"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="input2" clearable placeholder="ICCID"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="input3" clearable placeholder="IMSI"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="input4" clearable placeholder="批量卡号查询"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="input5" clearable placeholder="EID"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="input6" clearable placeholder="计费组代码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="value1" filterable clearable placeholder="--运营商--">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <!-- 此处是选择器筛选选项 -->
                <el-form-item>
                    <el-select v-model="value2" filterable clearable placeholder="--卡状态--">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="input7" clearable placeholder="标签"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="value3" filterable clearable placeholder="--套餐--">
                        <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-col :span="11">
                        <el-date-picker v-model="form.date1" type="date" placeholder="激活日期-起始" style="width: 100%" />
                    </el-col>
                    <el-col :span="2" class="text-center">
                        <span class="text-gray-500"> 至</span>
                    </el-col>
                    <el-col :span="11">
                        <el-date-picker v-model="form.date2" type="date" placeholder="激活日期-结束" style="width: 100%" />
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-col :span="11">
                        <el-date-picker v-model="form.date1" type="date" placeholder="计费结束日期-起始" style="width: 100%" />
                    </el-col>
                    <el-col :span="2" class="text-center">
                        <span class="text-gray-500"> 至</span>
                    </el-col>
                    <el-col :span="11">
                        <el-date-picker v-model="form.date1" type="date" placeholder="计费结束日期-结束" style="width: 100%" />
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-col :span="11">
                        <el-date-picker v-model="form.date1" type="date" placeholder="出库日期-起始" style="width: 100%" />
                    </el-col>
                    <el-col :span="2" class="text-center">
                        <span class="text-gray-500"> 至</span>
                    </el-col>
                    <el-col :span="11">
                        <el-date-picker v-model="form.date1" type="date" placeholder="出库日期-结束" style="width: 100%" />
                    </el-col>
                </el-form-item>
            </el-form>
            <!-- 卡片顶部搜索框 -->
            <el-form class="button1">
                <el-button type="primary">查询</el-button>
                <el-button>重置</el-button>
                <!-- 右侧按钮 -->
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const form = reactive({
    name: '',
    region: '',
    date1: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
});
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
const input5 = ref('')
const input6 = ref('')
const input7 = ref('')
// 选择器的响应
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const options1 = [
    {
        value: 'Option1',
        label: '中国移动',
    },
    {
        value: 'Option2',
        label: '中国联通',
    },
    {
        value: 'Option3',
        label: '中国电信',
    },
    {
        value: 'Option4',
        label: '桔猫',
    },
    {
        value: 'Option5',
        label: '国际漫游',
    },
    {
        value: 'Option6',
        label: '阿里联通',
    },
    {
        value: 'Option7',
        label: '全网',
    },
]
const options2 = [
    {
        value: 'Option1',
        label: '正使用',
    },
    {
        value: 'Option2',
        label: '沉默期',
    },
    {
        value: 'Option3',
        label: '销号',
    },
    {
        value: 'Option4',
        label: '测试期',
    },
    {
        value: 'Option5',
        label: '停机',
    },
]
const options3 = [
    {
        value: 'Option1',
        label: '网络5M/月',
    },
    {
        value: 'Option2',
        label: '网络10M/月',
    },
    {
        value: 'Option3',
        label: '网络30M/月',
    },
    {
        value: 'Option4',
        label: '网络30M/月-定向MO50分/月',
    },
    {
        value: 'Option5',
        label: 'NB30M/月',
    },
    {
        value: 'Option5',
        label: '网络50M/月',
    },
]
</script>

<style scoped>
.button1 {
    display: flex;
    justify-content: flex-end;
}
</style>