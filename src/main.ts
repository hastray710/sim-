import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入element-plus插件与样式
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//配置element-plus国际化
//@ts-ignore
const app = createApp(App)
//获取应用实例对象
app.use(ElementPlus,{
    locale:zhCn//element-plus国际化配置
}
    );
//安装element-plus插件
import 'virtual:svg-icons-register'
//svg插件需要配置代码
app.mount('#app')
//将应用挂在到挂载点上