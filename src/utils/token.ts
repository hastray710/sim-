//封装本地存储数据与读取数据的方法
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}

export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}
export const REMOVE_TOKEN = () => {
  localStorage.removeItem('TOKEN')
}
//本地存储数据删除的方法
