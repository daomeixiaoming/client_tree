import EventMgr from "../../Framework/Managers/EventMgr";
import { NetMgr, NetMsg } from "../../Framework/Managers/Net/NetMgr";
import CocosUtils from "../../Framework/Utils/CocosUtils";
import { client } from "../../Proto/game_pb";
import { EventKey } from "../Config/EventCfg";
import { NetCfg } from "../Config/NetCfg";

const { ccclass, property } = cc._decorator;
/**
 * 所有的ws 长链接处理写在这里
 */
@ccclass
export default class NetWsMgr extends cc.Component {
    public static Instance: NetWsMgr = null as unknown as NetWsMgr
    onLoad(): void {
        if (NetWsMgr.Instance === null) {
            NetWsMgr.Instance = this;
        } else {
            this.destroy();
            return;
        }
    }

    public Init(): void {
        // DebugUtils.Log("========NativeMgr Init==========");
        // 链接网络成功
        EventMgr.Instance.AddEventListener(NetMsg.NetConnect, this, this.onWsEventConnect);
        EventMgr.Instance.AddEventListener(NetMsg.NetMessage, this, this.onWsEventMsg);
        EventMgr.Instance.AddEventListener(NetMsg.NetDisconnect, this, this.onWsEventDisConnect);
    }

    public onDestroy(): void {
        EventMgr.Instance.RemoveListenner(NetMsg.NetConnect, this, this.onWsEventConnect);
        EventMgr.Instance.RemoveListenner(NetMsg.NetMessage, this, this.onWsEventMsg);
        EventMgr.Instance.RemoveListenner(NetMsg.NetDisconnect, this, this.onWsEventDisConnect);
    }

    /** 初始化网络 */
    public connectNet() {
        let url = NetCfg.wss + `?Authorization=${NetCfg.token}&bid=lucky-egg`;
        NetMgr.Instance.Init(url);
    }


    private onWsEventConnect(uanme: string, udata: any) {
        // CocosUtils.showToast("网络连接成功！", 0);
    }

    private onWsEventDisConnect(uanme: string, udata: any) {
        CocosUtils.showToast("网络断开！", 0);
    }
    /**
     * 收到数据
     * @param uname 
     * @param udata 
     */
    private onWsEventMsg(uname: string, udata: ArrayBuffer): void {
        const uint8Array = new Uint8Array(udata);
        let buf = client.lucky_egg.Response.decode(uint8Array);
        console.log("===========NetWsMgr.onWsEventMsg=========", udata);
        if (buf) {
            let ctype = buf.cmd;
            let body = buf.body;
            // DebugUtils.Log("========NetWsMgr onWsEventMsg==========", ctype);
            switch (ctype) {
                case client.lucky_egg.ResponseCode.LUCKY_EGG_REWARD: //跑马灯
                    this.onMarqueeInfo(body);
                    break;
            }
        }
    }

    // 跑马灯数据
    private onMarqueeInfo(data: client.lucky_egg.IResponseBody) {
        console.log("==============onMarqueeInfo============", data);
        if (data && data.rewardInfo) {
            const rewardInfo = data.rewardInfo;
            // MarqueeMgr.Instance.addNewData(rewardInfo);
            EventMgr.Instance.Emit(EventKey.MSG_NEW_MARQUEE, rewardInfo);
        }
        // 实时更新Boss数据
        // EventMgr.Instance.Emit(EventKey.WS_UpdateBoss, data);
    }
}
