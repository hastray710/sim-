import { createRouter, createWebHashHistory } from 'vue-router';
import { constantRoute } from './routes';

//通过vue-router插件实现模板路由配置

let router = createRouter({
    history: createWebHashHistory(),
    //路由模式为hash
    routes: constantRoute,
    scrollBehavior() {
        return{
            left: 0,
            top: 0
        }
    }
});
//创建路由器
export default router;
