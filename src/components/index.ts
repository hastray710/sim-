import SvgIcon from './SvgIcon/index.vue'
import Pagination from './SvgIcon/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入element-plus提供的全部图标组件
const allGloablComponent: any = { SvgIcon, Pagination };
export default {
  install(app: any) {
    Object.keys(allGloablComponent).forEach(key => {
      app.component(key, allGloablComponent[key])
    });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    //将Element-plus提供的图标注册为全局组件
  }
}
//对外暴露插件对象
