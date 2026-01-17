import EventMgr from "../../Framework/Managers/EventMgr";
import CocosUtils from "../../Framework/Utils/CocosUtils";
import DebugUtils from "../../Framework/Utils/DebugUtils";
import { EventKey } from "../Config/EventCfg";
import { NetCfg } from "../Config/NetCfg";
import GameLogic from "../GameLogic";

const { ccclass, property } = cc._decorator;
/**
 * 处理所有的和app应用交互的
 */

window["_callbacks"] = {};

export interface NativeAppRes {
    action: string,
    params: {
        callbackId: string,
    }
}

export interface IBridgeResponse<T> {
    code: number;
    message: string;
    data: T;
}

export interface IUserInfo {
    appToken: string; // appToken
    authStatus: 0 | 1; // 实名状态：0->未实名，1->已实名
    avatar: string;
    emToken: string; // 环信emToken
    firstLogin: boolean;
    phoneNumber: string;
    registerType: 1 | 2 | 3 | 4; // 注册类型：1->手机登录注册，2->微信登录注册，3->苹果登录注册，4->QQ登录注册
    teenModeSwitch: 1 | 0;
    userId: number;
    userName: string;
    userType: 1 | 2; // 用户类型：1-用户，2-主播
}

/** App信息 */
export interface IAPPInfo {
    appKey: string,
    appVersion: string;
    clientType: string;
    clientVersion: string;
    deviceId: string;
    deviceName: string;
    navigationBarHeight: number;
    safeAreaInsetBottom: number; // 44
    statusBarHeight: number; // 34
}

export const NativeCfg = {
    /** 商城充值返回，更新金币 */
    NATIVE_SHOP_OVER: "native_shop_over", // 
}

@ccclass
export default class NativeMgr extends cc.Component {
    public static Instance: NativeMgr = null as unknown as NativeMgr
    onLoad(): void {
        if (NativeMgr.Instance === null) {
            NativeMgr.Instance = this;
        } else {
            this.destroy();
            return;
        }
    }

    public Init(): void {
        // DebugUtils.Log("========NativeMgr Init11==========");

        document.addEventListener("visibilitychange", () => {
            // DebugUtils.Log("==================NativeMgr.onHide1============================");
            if (document.visibilityState === "hidden") {
                this.onHide();
            } else {
                this.onShow();
            }
        });

        if (this.isBridgeReadyIos()) {
            console.log("=============监听IOS，app 调用 js=================");
            // 监听Token发生变化
            window["_callbacks"]["callbackId"] = (res) => {
                console.log("=============监听Token发生变化事假，完毕后刷新=================");
                this.getUserInfo();
            }
            window["_callbacks"]["walletDidRefreshed"] = (res) => {
                console.log("=============监听充值结束回调_IOS=================");
                EventMgr.Instance.Emit(NativeCfg.NATIVE_SHOP_OVER, "");
            }
        } else {
            console.log("=============监听Android，app 调用 js111=================");
            window["_callbacks"]["walletDidRefreshed"] = (res) => {
                console.log("=============监听充值结束回调_Android=================");
                EventMgr.Instance.Emit(NativeCfg.NATIVE_SHOP_OVER, "");
            }
        }
    }

    private onHide() {
        DebugUtils.Log("==================NativeMgr.onHide============================");
    }

    private onShow() {
        DebugUtils.Log("==================NativeMgr.onShow============================");
        this.updateGameInfo();
    }

    /**
     * android 使用的是 WebViewJavascriptBridge
     * @param methodName 消息名
     * @param params 参数对象
     * @param callback 回调
     */
    private callBridge(methodName: string, params, callback) {
        // console.warn("=================callBridge================", methodName);
        let WebViewJavascriptBridge = window["WebViewJavascriptBridge"];
        if (WebViewJavascriptBridge) {
            WebViewJavascriptBridge.callHandler(methodName, params, (res) => {
                callback(res);
            });
        }
    }

    /**
     *  IOS 使用
     * @param methodName 消息名
     * @param params 参数对象
     * @param callback 回调函数的ID
     */
    private callnativeBridge(methodName: string, params) {
        console.warn("=================callnativeBridge================", methodName);
        if (window["webkit"]) {
            let nativeBridge = window["webkit"]["messageHandlers"]["nativeBridge"];
            if (nativeBridge) {
                nativeBridge.postMessage({
                    action: methodName,
                    params: params
                }, '*',);
            }
        }
    }

    /** Android判断 */
    public isBridgeReady() {
        let WebViewJavascriptBridge = window["WebViewJavascriptBridge"];
        console.log("===========isBridgeReady=============", WebViewJavascriptBridge);
        if (WebViewJavascriptBridge) {
            return true;
        }
        return false;
    }

    /** IOS平台判断 */
    public isBridgeReadyIos() {
        if (!window["webkit"]) {
            return false;
        }
        let nativeBridge = window["webkit"]["messageHandlers"]["nativeBridge"]; // IOS 使用 postMessage
        console.log("===========isBridgeReadyIos=============", nativeBridge);
        if (nativeBridge) {
            return true;
        }
        return false;
    }
    //-------------------------------------------------------------------------------------------------------------------------
    /*
     *  点击从游戏返回直播间 ok
     */
    public backToApp(): void {
        if (cc.sys.os === cc.sys.OS_WINDOWS) {
            DebugUtils.Log("当前运行在 Windows 系统上 backToApp");
        } else {
            DebugUtils.Log("当前不是 Windows 系统");
            if (this.isBridgeReady()) {
                this.callBridge("goBack", {}, () => { });
            } else if (this.isBridgeReadyIos()) {
                this.callnativeBridge("goBack", {});
            }
        }
    }

    /**
     * 跳转到个人中心商城 ok
     */
    public gotoShop(): void {
        if (cc.sys.os === cc.sys.OS_WINDOWS) {
            DebugUtils.Log("当前运行在 Windows 系统上 gotoShop");
            CocosUtils.showToast("跳转到商城，windows开发环境")
        } else {
            if (this.isBridgeReady()) {
                this.callBridge(
                    "navigateNativeRoute",
                    {
                        to: "toRechargeCenter",
                        isFloatRecharge: 1, // 0 是全屏 1是半屏 
                    },
                    (res) => { }
                );
            } else if (this.isBridgeReadyIos()) {
                this.callnativeBridge("navigateNativeRoute", {
                    callbackId: "navigateNativeRoute_back",
                    to: "toRechargeCenter",
                    isFloatRecharge: 1, // 0是全屏 1是半屏
                });

                // 回调
                window["_callbacks"]["navigateNativeRoute_back"] = (res) => {
                    DebugUtils.Log("===========gotoShop=1212121============", res);
                }
            }
        }
    }

    /** 获取App信息 OK*/
    public getAppInfo() {
        console.log("===========getAppInfo111=============");
        if (cc.sys.os === cc.sys.OS_WINDOWS) {
            DebugUtils.Log("当前运行在 Windows 系统上 getUserInfo");
            EventMgr.Instance.Emit(EventKey.Native_AppInfo, "");
        } else {
            if (this.isBridgeReady()) {
                console.log("===========getAppInfo2=============");
                this.callBridge("getAppInfo", {}, (res) => {
                    // console.log("================NativeMgr.getAppInfo2222===================", res);
                    let appInfo = res.data;
                    GameLogic.Instance.appInfo = appInfo;
                    // DebugUtils.Log("===========getAppInfo2=============");
                    EventMgr.Instance.Emit(EventKey.Native_AppInfo, "");
                });
            } else if (this.isBridgeReadyIos()) {
                this.callnativeBridge("getAppInfo", {
                    callbackId: "getAppInfo_back"
                });
                // 回调
                window["_callbacks"]["getAppInfo_back"] = (res) => {
                    let jsondata = JSON.parse(res);
                    const data = jsondata.data;
                    // console.log("================NativeMgr.getAppInfo111===================", data);
                    let appInfo = data;
                    GameLogic.Instance.appInfo = appInfo;
                    // console.log("================NativeMgr.getAppInfo111222===================", GameLogic.Instance.appInfo);
                    EventMgr.Instance.Emit(EventKey.Native_AppInfo, "");
                }
                // 监听Token发生变化
                window["_callbacks"]["callbackId"] = (res) => {
                    console.log("=============监听Token发生变化事假，完毕后刷新=================");
                    this.getUserInfo();
                }
            }
        }
    }

    /*
    *  取用户信息 ok
    */
    public getUserInfo() {
        console.log("===========getUserInfo1=============");
        if (cc.sys.os === cc.sys.OS_WINDOWS) {
            DebugUtils.Log("当前运行在 Windows 系统上 getUserInfo");
            EventMgr.Instance.Emit(EventKey.Native_UserInfo, "");
        } else {
            if (this.isBridgeReady()) {
                this.callBridge("getUserInfo", {}, (res) => {
                    // console.log("===========getUserInfo2=============", res);
                    NetCfg.token = res.data.accessToken;
                    EventMgr.Instance.Emit(EventKey.Native_UserInfo, "");
                });
            } else if (this.isBridgeReadyIos()) {
                this.callnativeBridge("getUserInfo", {
                    callbackId: "getUserInfo_back"
                });

                // 回调
                window["_callbacks"]["getUserInfo_back"] = (res) => {
                    let jsondata = JSON.parse(res);
                    const data = jsondata.data;
                    NetCfg.token = data.accessToken;
                    // console.log("===========getUserInfo2=============", NetCfg.token, data.accessToken);
                    EventMgr.Instance.Emit(EventKey.Native_UserInfo, "");
                }
            }
        }
    }

    /**  取直播间信息 ok*/
    public getLiveRoomInfo() {
        console.log("================NativeMgr.getLiveRoomInfo1===================");
        if (cc.sys.os === cc.sys.OS_WINDOWS) {
            EventMgr.Instance.Emit(EventKey.Native_GetLiveInfo, "");
            DebugUtils.Log("当前运行在 Windows 系统上 getLiveRoomInfo");
        } else {
            if (this.isBridgeReady()) {
                this.callBridge("getLiveRoomInfo", {}, (res) => {
                    if (res.code == 0) {
                        let data = res.data;
                        if (data.roomInfo) {
                            NetCfg.roomId = data.roomInfo.roomId;
                            GameLogic.Instance.roomId = data.roomInfo.roomId;
                        }
                        if (data.anchorInfo) {
                            NetCfg.anchorId = data.anchorInfo.userId;
                            GameLogic.Instance.anchorId = data.anchorInfo.userId;
                        }
                        // console.log("================NativeMgr.getLiveRoomInfo222===================", GameLogic.Instance.roomId, GameLogic.Instance.anchorId, data.roomInfo.roomId, data.anchorInfo.userId);
                        EventMgr.Instance.Emit(EventKey.Native_GetLiveInfo, "");
                    }
                });
            } else if (this.isBridgeReadyIos()) {
                this.callnativeBridge("getLiveRoomInfo", {
                    callbackId: "getLiveRoomInfo_back"
                });
                // 回调
                window["_callbacks"]["getLiveRoomInfo_back"] = (res) => {
                    if (res) {
                        let jsondata = JSON.parse(res);
                        const data = jsondata.data;
                        if (data.roomInfo) {
                            NetCfg.roomId = data.roomInfo.roomId;
                            GameLogic.Instance.roomId = data.roomInfo.roomId;
                        }
                        if (data.anchorInfo) {
                            NetCfg.anchorId = data.anchorInfo.userId;
                            GameLogic.Instance.anchorId = data.anchorInfo.userId;
                        }
                        // console.log("================NativeMgr.getLiveRoomInfo2===================", GameLogic.Instance.roomId, GameLogic.Instance.anchorId);
                        // console.log("================NativeMgr.getLiveRoomInfo3===================", data.roomInfo.roomId, data.anchorInfo.userId);
                        EventMgr.Instance.Emit(EventKey.Native_GetLiveInfo, "");
                    } else {
                        console.error("================NativeMgr.onMsgSmasheCfgRes4===================", res);
                    }
                }
            }
        }
    }

    //更新数据
    public updateGameInfo(): void {
        //更新大厅数据
        GameLogic.Instance.resetGameInfo();
        this.callBridge("refreshAmount", {}, (res) => {
            // DebugUtils.Log("refreshAmount res", res);
            DebugUtils.Log("============updateGameInfo.refreshAmount============", res);
            if (res.code == 0) {
                // EventMgr.emit("onGetPlayerInfo", res.data);
            }
        });
    }
}
