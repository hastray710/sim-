export interface loginForm {
  username: string
  password: string
}
interface dataType {
  token?: string //前面加问号是涵盖了无返回的情况，既字符串和空值
  message?: string
}
//登录接口需要携带参数ts类型
export interface loginResponseData {
  code: number
  data: dataType
}
//登录接口返回数据类型
interface userInfo {
  userId: number
  avatar: string //头像
  username: string
  password: string
  desc: string //身份
  roles: string[] //角色
  buttons: string[]
  routes: string[]
  token: string
}
//定义用户各种数据的类型
interface user {
  checkUser: userInfo
}
export interface userResponseData {
  code: number
  data: user
}
//定义服务器返回用户信息相关的数据类型
