export const constantRoute = [
  //对外暴露路由配置（常量路由）
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', //命名路由
  },
  //登录路由
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
  }, //登录成功后展示数据的路由
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  }, //地址错误的路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  }, //重定向到404
]
