import { createApp } from 'vue'

import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入element-plus插件与样式
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//配置element-plus国际化
//@ts-ignore
import 'virtual:svg-icons-register'
//svg插件需要配置代码
import globalComponent from '@/components'
//安装自定义插件
import '@/styles/index.scss'
//引入模板的全局样式
import router from './router'
//引入路由
import pinia from './store'
//引入仓库pinia
const app = createApp(App)
//获取应用实例对象
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})
//安装element-plus插件
app.use(globalComponent)
//安装自定义插件
app.use(router)
//注册模板路由
import './permisstion';
//引入路由鉴权文件
app.use(pinia)
//安装仓库pinia
app.mount('#app')
//将应用挂在到挂载点上
