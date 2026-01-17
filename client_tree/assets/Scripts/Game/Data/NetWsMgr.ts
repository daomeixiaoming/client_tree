import EventMgr from "../../Framework/Managers/EventMgr";
import { NetMgr, NetMsg } from "../../Framework/Managers/Net/NetMgr";
import CocosUtils from "../../Framework/Utils/CocosUtils";
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
        let url = NetCfg.wss + `?Authorization=${NetCfg.token}&bid=${NetCfg.bid}`;
        NetMgr.Instance.Init(url);
    }

    /**
     * 加入房间请求
     * @param _roomId 
     * @param _anchorId 
     */
    public joinRoomReq(_roomId: number, _anchorId: number) {
        // console.log("================joinRoomReq================", _roomId, _anchorId);
        // let msg = client.sea_game.JoinRoomRequest.create({
        //     roomId: _roomId,
        //     anchorId: _anchorId,
        // })
        // let req = client.sea_game.Request.create({
        //     cmd: client.sea_game.RequestCode.SEA_GAME_JOIN_ROOM_REQUEST,
        //     body: {
        //         seaGameJoinRoom: msg
        //     }
        // });

        // let buf = client.sea_game.Request.encode(req).finish();
        // NetMgr.Instance.send_data(buf);
    }

    /**
     * 下注请求
     * @param _itemId  角色id 1- 8
     * @param _optionId 筹码id 1- 5
     */
    public addBetReq(_itemId: number, _optionId: number) {
        // console.log("-------------NetWsMgr.addBetReq-----------------------------", _itemId, _optionId);
        // let msg = client.sea_game.BetRequest.create({
        //     itemId: _itemId,
        //     optionId: _optionId,
        // })
        // let req = client.sea_game.Request.create({
        //     cmd: client.sea_game.RequestCode.SEA_GAME_BET_REQUEST,
        //     body: {
        //         seaGameBet: msg
        //     }
        // });
        // let buf = client.sea_game.Request.encode(req).finish();
        // NetMgr.Instance.send_data(buf);
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
        // DebugUtils.Log("===========onWsEventMsg=========", udata);
        const uint8Array = new Uint8Array(udata);
        // let buf = client.sea_game.Response.decode(uint8Array);
        // if (buf) {
        //     let ctype = buf.cmd;
        //     let body = buf.body;
        //     console.log("========NetWsMgr onWsEventMsg==========", ctype);
        //     switch (ctype) {
        //         // case client.sea_game.ResponseCode.ERROR:
        //         //     this.onErrorMsg(body);
        //         //     break;
        //         default:
        //             let msg = body.error.msg;
        //             console.log("=======body===============", msg);
        //             CocosUtils.showToast(msg, 2);
        //             break;
        //     }
        // }
    }
}
