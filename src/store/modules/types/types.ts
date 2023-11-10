import type { RouteRecordRaw } from 'vue-router'
export interface UserState {
  token: string | null;
  menuRoutes: RouteRecordRaw[],
  username: string,
}
//定义小仓库数据state类型
