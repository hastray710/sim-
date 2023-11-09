export const constantRoute = [
  //对外暴露路由配置（常量路由）
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', //命名路由
    meta: {
      title: '登录', //菜单标题
      hidden: true, //此项为隐藏
    },
  },
  //登录路由
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '', //菜单标题
      hidden: false,
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页', //菜单标题
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  }, //登录成功后展示数据的路由
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404', //菜单标题
      hidden: true,
    },
  }, //地址错误的路由
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'screen',
    meta: {
      title: '数据大屏', //菜单标题
      hidden: false,
      icon: 'StarFilled',
    },
  },
  {
    path: '/card',
    component: () => import('@/layout/index.vue'),
    name: 'Card',
    meta: {
      title: '卡片管理', //菜单标题
      hidden: false,
      icon: 'StarFilled',
    },
    children: [
      {
        path: '/card/singlecard',
        component: () => import('@/views/card/singlecard/index.vue'),
        name: 'Singlecard',
        meta: {
          title: '单卡管理', //菜单标题
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/card/add',
        component: () => import('@/views/card/add/index.vue'),
        name: 'Add',
        meta: {
          title: '套餐新增', //菜单标题
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/card/datatraffic',
        component: () => import('@/views/card/datatraffic/index.vue'),
        name: 'Datatraffic',
        meta: {
          title: '流量池管理', //菜单标题
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/card/recharge',
        component: () => import('@/views/card/recharge/index.vue'),
        name: 'Recharge',
        meta: {
          title: '账户余额/充值', //菜单标题
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/card/total',
        component: () => import('@/views/card/total/index.vue'),
        name: 'Total',
        meta: {
          title: '流量年度报表', //菜单标题
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    meta: {
      title: '用户管理', //菜单标题
      hidden: false,
      icon: 'User',
    },
    children: [
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: '员工账号', //菜单标题
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/acl/custom',
        component: () => import('@/views/acl/custom/index.vue'),
        name: 'Custom',
        meta: {
          title: '客户账户', //菜单标题
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/order',
    component: () => import('@/views/order/index.vue'),
    name: 'Order',
    meta: {
      title: '订单管理', //菜单标题
      hidden: false,
      icon: 'StarFilled',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意', //菜单标题
      hidden: true,
    },
  }, //重定向到404
]
