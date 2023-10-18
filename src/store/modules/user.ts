import { defineStore } from 'pinia'
//创建用户相关的小仓库
import { reqLogin } from '@/api/user'
//引入接口
import type { loginForm, loginResponseData } from '@/api/user/type'
//引入数据类型
import type { UserState } from './types/type';
//引入小仓库类型
import { SET_TOKEN, GET_TOKEN } from '@/utils/token';
//引入操作本地存储的工具方法
let useUserStore = defineStore('User', {
  state: (): UserState => {
    //小仓库存储数据的地方
    return {
      token: GET_TOKEN,
      //用户的唯一标识
    }
  },
  actions: {
    async userLogin(data: loginForm) {
      let result: loginResponseData = await reqLogin(data);
      //登录请求
      if (result.code == 200) {
        this.token = (result.data.token as string);
        //由于pinia|vuex存储数据其实利用js对象
        //localStorage.setItem('TOKEN', (result.data.token as string));
        SET_TOKEN((result.data.token as string));
        //本地存储持久化存储一分
        return 'ok';
        //即async函数返回一个成功的promise
      } else {
        return Promise.reject(new Error(result.data.message));
      }
      //登录成功，code200->获取token
      //登录失败，code201->弹出失败信息
    },
    //用户登录的方法
  },
  //异步/逻辑的地方
  getters: {},
  //计算属性
})
//创建用户小仓库
export default useUserStore
//对外暴露获取小仓库的方法
