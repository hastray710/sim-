import router from '@/router';
//路由鉴权
import setting from './setting';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
//引入进度条样式,这里的样式可以在node_modules\nprogress\nprogress.css的文件里更改
import useUserStore from './store/modules/user';
//获取用户相关的小仓库内部token数据，去判断用户是否登录成功
import pinia from './store';
//记得引入大仓库，不然会报错
let userStore = useUserStore(pinia);
let username = userStore.username;
//获取用户名字
router.beforeEach(async (to: any, from: any, next: any) => {
  //to:你将要访问的路由 from：你从哪个路由来的 next：路由的放行函数
  document.title = `${setting.title} - ${to.meta.title}`
  //页面标题
  nprogress.start(); //访问前进度条出现
  let token = userStore.token;
  //获取token，去判断用户登录还是未登录
  if (token) {
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next();//放行
      } else {
        try {
          await userStore.userInfo();
          //获取用户信息
          next();
        } catch (error) {
          userStore.userLogout();
          next({ path: '/login', query: { redirect: to.path } })
          //token过期：获取不到用户信息了
          //用户手动修改本地存储token
          //退出登录-》用户相关的数据清空
        }
        //如果没有用户信息，在守卫这里发请求获取到了用户信息在放行
      }
    }
    //用户登录的判断,登录成功，访问login，不能访问，指向首页
  } else {
    if (to.path == '/login') {
      next();
    } else {
      next({ path: '/login', query: { redirect: to.path } });
    }
    //用户未登录的判断
  }
  //访问某一个路由之前的守卫
})
//全局前置守卫
router.afterEach((to: any, from: any, next: any) => {
  nprogress.done() //访问后进度条消失
})
//全局后置守卫
//全局守卫：项目当中任意路由切换都会触发的钩子

//第一个问题：任意路由切换实现进度条业务   nprogress.

//第二个问题：路由鉴权（路由组件访问权限的设置）
