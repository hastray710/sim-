
//单卡管理的接口
import request from "@/utils/request";
enum API {
    SINGLECARD_URL = ""
    //这里是接口地址
}
//单卡模块接口地址
export const reqSingleCard = (any) => request.get<any, any>(API.SINGLECARD_URL + `$()/$()`);
//获取单卡模块的接口方法,看具体有几个参数，举例page：获取第几页，括号里就写|limit：获取几个已有品牌的数据 ---》 page:nuember,limit:number