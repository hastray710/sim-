import request from '@/utils/request'
//统一管理项目用户相关的接口
import type { loginForm, loginResponseData } from './type'
//引入接口类型
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}
//统一管理接口
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
//暴露请求函数
//登录接口方法
export const reqUserInfo = () =>
  request.get<any, loginResponseData>(API.USERINFO_URL)
//获取用户信息接口方法
