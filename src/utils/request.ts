import axios from 'axios';
//进行axios二次封装：使用请求与响应拦截器
import { ElMessage } from 'element-plus';
//创建axios实例
import useUserStore from '@/store/modules/user';
//引入用户相关的仓库
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径上会携带/api
  timeout: 5000,
})
//利用axos对象的create方法，去创建axios实例（其他的配置：基础路径、超时时间）
//请求拦截器
request.interceptors.request.use((config) => {
  //config配置对象，headers属性请求头，经常给服务器端携带公共参数
  let userStore = useUserStore();
  if (userStore.token) {
    config.headers.token = userStore.token
  }
  //获取用户相关的小仓库：获取仓库内部token，登录成功后携带给服务器
  return config
})
//第二步：request实例添加请求与响应拦截器
request.interceptors.response.use(
  (response) => {
    //成功回调
    return response.data
  },
  (error) => {
    //处理网络错误
    //第三步，响应拦截器
    let msg = ''
    //定义一个变量：存储网络错误信息
    let status = error.response.status
    //http状态码
    switch (status) {
      case 401:
        msg = 'token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '网络出现问题'
    }
    ElMessage({
      type: 'error',
      message: msg,
    })
    return Promise.reject(error)
  },
)
export default request
//对外暴露
