import router from '@/router';
//路由鉴权
import nprogress from 'nprogress';
import "nprogress/nprogress.css";
//引入进度条样式,这里的样式可以在node_modules\nprogress\nprogress.css的文件里更改

router.beforeEach((to: any, from: any, next: any) => {

    //to:你将要访问的路由
    console.log(223);
    //from：你从哪个路由来的
    nprogress.start();//访问前进度条出现
    next();
    //next：路由的放行函数

    //访问某一个路由之前的守卫
})
//全局前置守卫
router.afterEach((to: any, from: any, next: any) => {
    nprogress.done();//访问后进度条消失
});
//全局后置守卫
//全局守卫：项目当中任意路由切换都会触发的钩子

//第一个问题：任意路由切换实现进度条业务   nprogress