import EventMgr from "../../Framework/Managers/EventMgr";
import CocosUtils from "../../Framework/Utils/CocosUtils";
import DebugUtils from "../../Framework/Utils/DebugUtils";
import HttpUtils from "../../Framework/Utils/HttpUtils";
import { EventKey } from "../Config/EventCfg";
import { Lngs } from "../Config/LngCfg";
import { HttpResponse } from "../Config/MsgCfg";
import { RequestShopBuy, ShopRequest } from "../Config/MsgCfgBase";
import { NetCfg } from "../Config/NetCfg";
import GameLogic from "../GameLogic";

const { ccclass, property } = cc._decorator;

// 网络状态code
export const NetStatus = {
    Normal: 0, //正常
    CURRENCY_NOT_ENOUGH: -232, //货币不够!
    NO_BOX: -231, //没有宝箱了!
    B0X_NOT_FOUND: -230, //宝箱不存在!
};
/** 通用部分写在这里，作为基类 */
@ccclass
export default class NetHttpBase extends cc.Component {
    public url: string; //url 地址
    onLoad() {
    }

    start() {

    }

    /**
     *  获取钱包信息 ，获取到游戏币 龙币 OK
     */
    public GetAccountInfo() {
        let url = NetCfg.url;
        url += "app-api/logic/game/userAccount/get";
        let param = {
            gameId: NetCfg.gameType,
        };
        DebugUtils.Log("==========GetAccountInfo==========", param);
        HttpUtils.PostJson(url, null, JSON.stringify(param), (err, udata) => {
            let data: HttpResponse = JSON.parse(udata);
            if (err) {
                CocosUtils.showToast(Lngs.GetAccountInfoErr, 2);
                EventMgr.Instance.Emit(EventKey.Http_Res_GetAccountInfo, null);
            } else {
                let code = data.code;
                let message = data.msg;
                let result = data.data;
                if (code === NetStatus.Normal) {
                    DebugUtils.Log("==========GetAccountInfo123123==========", result);
                    EventMgr.Instance.Emit(EventKey.Http_Res_GetAccountInfo, result);
                } else {
                    CocosUtils.showToast(message, 2);
                    EventMgr.Instance.Emit(EventKey.Http_Res_GetAccountInfo, null);
                }
            }
        });
    }

    /**
     * 获取免打扰策略 app-api/logic/game/Config/get ok
     * Api文档：https://dev.jumiao.live/doc.html#/logic-server/app%E6%9C%8D%E5%8A%A1%20-%20%E6%B8%B8%E6%88%8F%E5%85%A5%E5%8F%A3/getConfig
     */
    public GetGameInfo() {
        let url = NetCfg.url;
        url += "app-api/logic/game/Config/get";
        let body = {
            gameId: NetCfg.gameType,
        };
        console.log("==========GetGameInfo==========", url);
        HttpUtils.PostJson(url, null, JSON.stringify(body), (err, udata) => {
            let data: HttpResponse = JSON.parse(udata);
            if (err) {
                CocosUtils.showToast(Lngs.GetPlayerInfoErr, 2);
                EventMgr.Instance.Emit(EventKey.Http_Res_GetGameCfg, null);
            } else {
                let code = data.code;
                let message = data.msg;
                let result = data.data;
                if (code === NetStatus.Normal && result) {
                    console.log("==========GetGameInfo2==========", data);
                    EventMgr.Instance.Emit(EventKey.Http_Res_GetGameCfg, result);
                } else {
                    CocosUtils.showToast(message, 2);
                    EventMgr.Instance.Emit(EventKey.Http_Res_GetGameCfg, null);
                }
            }
        });
    }

    /**
        *获取玩家信息 ok,取到瞄钻数据 ok
    */
    public GetPlayerInfo() {
        let url = NetCfg.url;
        // let url = "https://gm.jumiao.live/";
        url += "app-api/asset/wallet/getWalletSimpleInfo";
        let body = {
            // gameType: NetCfg.gameType,
        };
        console.log("==========GetPlayerInfo==========", url);
        HttpUtils.PostJson(url, null, JSON.stringify(body), (err, udata) => {
            let data: HttpResponse = JSON.parse(udata);
            if (err) {
                CocosUtils.showToast(Lngs.GetPlayerInfoErr, 2);
                EventMgr.Instance.Emit(EventKey.Http_Res_GetPlayerInfo, null);
            } else {
                let code = data.code;
                let message = data.msg;
                let result = data.data;
                if (code === NetStatus.Normal && result) {
                    console.log("==========GetPlayerInfo2==========", data);
                    EventMgr.Instance.Emit(EventKey.Http_Res_GetPlayerInfo, result);
                } else {
                    CocosUtils.showToast(message, 2);
                    EventMgr.Instance.Emit(EventKey.Http_Res_GetPlayerInfo, null);
                }
            }
        });
    }

    /**
     * 
     * @param page 起始页 ok
     * @param size 每页数量
     * @param categoryIds 商品分类id列表 1货币(金币购买货币) 2礼物 3兑换金币(货币兑换金
     * @param type 
     */
    public GetShopList(page: number, size: number, categoryIds: string, type: number) {
        let url = NetCfg.url;
        url += "app-api/logic/game/mallProduct/page";
        let param: ShopRequest = {};
        param.pageNo = page;
        param.pageSize = size;
        param.categoryIds = categoryIds;
        param.gameId = NetCfg.gameType;
        DebugUtils.Log("=================GetShopList1==================", type);
        HttpUtils.PostJson(url, null, JSON.stringify(param), (err, udata) => {
            let res = null;
            let data: HttpResponse = JSON.parse(udata);
            if (err) {
                console.error("=============GetShopList.error============", data);
            } else {
                let code = data.code;
                let message = data.msg;
                let result = data.data;
                if (code === NetStatus.Normal && result) {
                    res = result;
                } else {
                    CocosUtils.showToast(message, 2);
                }
            }
            let msgKey = EventKey.Http_Res_GetShopList; //兑换商城
            if (type === 2) {
                msgKey = EventKey.Http_Res_GetShopMoneyList; //龙币商城列表
            }
            EventMgr.Instance.Emit(msgKey, res);
        });
    }

    /** 龙币商城购买 失败 */
    public GetShopBuy(categoryId: number, productId: number) {
        let url = NetCfg.url;
        url += "app-api/logic/game/userAccount/buy";
        let body = {
            categoryId: categoryId,
            productId: productId,
            gameId: NetCfg.gameType,
        };

        HttpUtils.PostJson(url, null, JSON.stringify(body), (err, udata) => {
            let data: HttpResponse = JSON.parse(udata);
            let res = null;
            if (err) {
                console.error("=============GetShopBuy.error============", data);
                // CocosUtils.showToast("购买商品失敗");
            } else {
                DebugUtils.Log("=============GetShopBuy============", data);
                let code = data.code;
                let message = data.msg;
                res = data.data; //PlayerInfoResp
                if (code !== NetStatus.Normal) {
                    CocosUtils.showToast(message + code, 2);
                }
            }
            EventMgr.Instance.Emit(EventKey.Http_Msg_ShopBuyRes, res);
        });
    }
}