import EventMgr from "../Framework/Managers/EventMgr";
import { NetMsg } from "../Framework/Managers/Net/NetMgr";
import { ResMgr } from "../Framework/Managers/ResMgr";
import UIMgr from "../Framework/Managers/UIMgr";
import CocosUtils from "../Framework/Utils/CocosUtils";
import DebugUtils from "../Framework/Utils/DebugUtils";
import TimeUtils from "../Framework/Utils/TimeUtils";
import { EventKey } from "./Config/EventCfg";
import { IEnterGameCfg, IGameCfg, PopType } from "./Config/MsgCfgBase";
import { NetCfg } from "./Config/NetCfg";
import { AbNames, UICfg } from "./Config/ResCfg";
import { ResPkg_First, ResPkg_Second } from "./Config/ResPkgHome";
import NativeMgr from "./Data/NativeMgr";
import NetHttpMgr from "./Data/NetHttpMgr";
import NetWsMgr from "./Data/NetWsMgr";
import UIViewMgr from "./Data/UIViewMgr";
import GameLogic from "./GameLogic";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameApp extends cc.Component {
    callback_fh: Function = null;

    public static Instance: GameApp = null as unknown as GameApp;

    enterCfg: IEnterGameCfg = {
        appInfoOver: false,
        userInfoOver: false,
        liveInfoOver: false,
        loadResOver: false,
        isConnectWs: false
    };

    /** 标记App数据是否获取成功 */
    isAppInfoOver: boolean = false;

    onLoad(): void {
        if (GameApp.Instance === null) {
            GameApp.Instance = this;
        } else {
            this.destroy();
            return;
        }
    }

    public Init(): void {
        // 注册事件
        this.registerEvent();
        // 添加模块
        // 添加解释数据的类
        this.node.addComponent(GameLogic).Init();
        this.node.addComponent(NetHttpMgr).Init();
        this.node.addComponent(NativeMgr).Init();
        this.node.addComponent(NetWsMgr).Init();
        this.node.addComponent(UIViewMgr).Init();

        this.clearFHCallBack();
        // this.checkGotoHome();
        NativeMgr.Instance.getAppInfo();
        NativeMgr.Instance.getLiveRoomInfo();
        NativeMgr.Instance.getUserInfo();
        this.callback_fh = function () {
            GameApp.Instance.checkGotoHome();
        };
        this.schedule(this.callback_fh, 1);
    }

    private clearFHCallBack() {
        if (this.callback_fh) {
            this.unschedule(this.callback_fh);
            this.callback_fh = null;
        }
    }

    protected onDestroy(): void {
        DebugUtils.Log("=======GameApp.onDestroy===========");
        this.unRegisterEvent();
    }

    private registerEvent() {
        // 获取原生app数据 starrt
        EventMgr.Instance.AddEventListener(EventKey.Native_GetLiveInfo, this, this.onNativeLiveInfo);
        EventMgr.Instance.AddEventListener(EventKey.Native_AppInfo, this, this.onNativeAppInfo);
        EventMgr.Instance.AddEventListener(EventKey.Native_UserInfo, this, this.onNativeUserInfo);
        EventMgr.Instance.AddEventListener(NetMsg.NetConnect, this, this.onNetConnect);
        EventMgr.Instance.AddEventListener(NetMsg.NetDisconnect, this, this.onNetDisconnect);

        // 获取原生app数据 end
        EventMgr.Instance.AddEventListener(EventKey.UI_GotoLogin, this, this.onUIEventGotoLogin);
        EventMgr.Instance.AddEventListener(EventKey.Http_Res_GetGameCfg, this, this.onHttpGameCfgRes);
    }

    private unRegisterEvent() {
        EventMgr.Instance.RemoveListenner(EventKey.Native_GetLiveInfo, this, this.onNativeLiveInfo);
        EventMgr.Instance.RemoveListenner(EventKey.Native_AppInfo, this, this.onNativeAppInfo);
        EventMgr.Instance.RemoveListenner(EventKey.Native_UserInfo, this, this.onNativeUserInfo);
        EventMgr.Instance.RemoveListenner(NetMsg.NetConnect, this, this.onNetConnect);
        EventMgr.Instance.RemoveListenner(NetMsg.NetDisconnect, this, this.onNetDisconnect);
        EventMgr.Instance.RemoveListenner(EventKey.UI_GotoLogin, this, this.onUIEventGotoLogin);
        EventMgr.Instance.RemoveListenner(EventKey.Http_Res_GetGameCfg, this, this.onHttpGameCfgRes);
    }

    // 游戏逻辑入口
    public EnterGame(): void {
        DebugUtils.Log("===GameApp Enter Game ....!");
        // 加载资源
        this.LoadRes();
    }

    private LoadRes() {
        DebugUtils.Log("===========onUIEventEnterHome LoadRes=================");
        // 加在Home必须的资源
        ResMgr.Instance.preloadResPkg(
            ResPkg_First,
            (now: any, total: any) => {
                let num = now / total;
                DebugUtils.Log("onUIEventEnterHome num = ", num);
                EventMgr.Instance.Emit(EventKey.UI_Loading, num);
            },
            () => {
                DebugUtils.Log("===========onUIEventEnterHome LoadRes1=================");
                EventMgr.Instance.Emit(EventKey.UI_Loading, 1);
                this.goToHome();
            }
        );
    }

    // 检测进入游戏
    private checkGotoHome() {
        if (!this.enterCfg.appInfoOver) {
            console.warn("===========原生app数据未获取完毕============");
            NativeMgr.Instance.getAppInfo();
            return;
        }
        if (!this.enterCfg.liveInfoOver) {
            console.warn("===========原生直播间数据未获取完毕============");
            NativeMgr.Instance.getLiveRoomInfo();
            return;
        }
        if (!this.enterCfg.userInfoOver) {
            console.warn("===========原生user数据未获取完毕============");
            NativeMgr.Instance.getUserInfo();
            return;
        }
        console.warn("===========欢迎进入灵树赠礼游戏！============");
        this.clearFHCallBack();
    }

    // 获取App的相关数据成功
    private udateNativeStatuse() {
        if (!this.enterCfg.appInfoOver || !this.enterCfg.liveInfoOver || !this.enterCfg.userInfoOver) {
            return;
        }
        this.isAppInfoOver = true;
        // 连接网络
        console.log("step1: GameApp.udateNativeStatuse 获取App的相关数据成功==========");

        // 这些数据都是保存起来的的了，没有主动的修改UI
        // 获取玩家信息
        NetHttpMgr.Instance.GetPlayerInfo();
        // 获取游戏相关数据
        NetHttpMgr.Instance.GetAccountInfo();
        // 获取免打扰策略
        NetHttpMgr.Instance.GetGameInfo();
        // 请求筹码配置
        NetHttpMgr.Instance.GetChipCfg();
        // 获取封神榜配置
        NetHttpMgr.Instance.GetUserRebateConfig();
        // 链接网路
        // NetWsMgr.Instance.connectNet();
    }

    private goToHome() {
        DebugUtils.Log("===========goToHome=================");
        // 显示大厅界面
        UIMgr.Instance.ShowUIView(UICfg.Home, AbNames.Prefabs);

        // 加在二级资源
        ResMgr.Instance.preloadResPkg(
            ResPkg_Second,
            (now: any, total: any) => { },
            () => {
                DebugUtils.Log("===========二级资源加载完毕=================");
            }
        );
    }

    // 获取直播间数据成功 start
    private onNativeLiveInfo(uanme: string, udata: any): void {
        this.enterCfg.liveInfoOver = true;
        this.udateNativeStatuse();
    }
    // 获取app数据成功 start
    private onNativeAppInfo(uanme: string, udata: any): void {
        console.warn("===============GameApp.onNativeAppInfo================", udata);
        this.enterCfg.appInfoOver = true;
        this.udateNativeStatuse();
    }
    // 获取User数据成功 
    private onNativeUserInfo(uanme: string, udata: any): void {
        this.enterCfg.userInfoOver = true;
        this.udateNativeStatuse();
    }
    // 网络连接成功
    private onNetConnect(uname: string, udata: any) {
        console.log("==============GameApp.onNetConnect===========");
        this.enterCfg.isConnectWs = true;

        // 请求加入房间
        NetWsMgr.Instance.joinRoomReq(GameLogic.Instance.roomId, GameLogic.Instance.anchorId);
    }
    // 网络断开
    private onNetDisconnect(uanme: string, udata: any) {
        CocosUtils.showToast("Ws网络断开!", 0);
        this.enterCfg.isConnectWs = false;
    }

    /** 返回直播间App，退出游戏 */
    public onExitGame(): void {
        this.onDestroy();
        //返回 应用层
        NativeMgr.Instance.backToApp();
    }

    public updateBtnStatus() {
        // 更新按钮的状态
        EventMgr.Instance.Emit(EventKey.UI_UpadteBtnStatus, true);
    }

    // 获取app数据成功 end

    // 主场景home 返回登录
    private onUIEventGotoLogin(uname: string, udata: any): void {
        DebugUtils.Log(
            "=================GameApp.onUIEventGotoLogin=================="
        );
        // 直接关闭游戏
        this.onExitGame();

        // 更新按钮的状态
        EventMgr.Instance.Emit(EventKey.UI_UpadteBtnStatus, true);
    }

    /**
   * 游戏配置
   * @param uname 
   * @param udata 
   */
    private onHttpGameCfgRes(uname: string, udata: IGameCfg) {
        if (udata) {
            this.showNoticeStatus(udata.pop);
        }
    }

    // 显示玩法公告状态
    public showNoticeStatus(pop: number): void {
        // 测试
        // pop = PopType.Pop_Always;
        DebugUtils.Log("=================================showNoticeStatus=================================", pop);
        let todayTime = cc.sys.localStorage.getItem("agree_notice_today" + NetCfg.gameType);
        let date = new Date();
        let todayDay = date.getDate()
        // console.log("==========今日不在弹出1==========", todayTime, todayDay);
        if (todayTime !== undefined && Number(todayTime) === todayDay) {
            // console.log("==========今日不在弹出2==========");
            this.showNotice(false);
            return;
        }

        if (pop === PopType.Pop_Nan) {
            //不弹 0
            this.showNotice(false);
        }
        if (pop === PopType.Pop_Always) {
            //每次弹 1
            this.showNotice(true);
            // this.checkNotice(1);
        }
        if (pop === PopType.Pop_Day) {
            //每天弹一次 2
            this.checkNotice(2);
        }
        if (pop == PopType.Pop_Week) {
            //每周弹一次 3
            this.checkNotice(3);
        }
        if (pop == PopType.Pop_Month) {
            //每月弹一次 3
            this.checkNotice(4);
        }
    }

    private checkNotice(flag: number): void {
        let lastTime = cc.sys.localStorage.getItem("agree_notice_pop");
        let oldDate = null;
        if (lastTime) {
            oldDate = new Date(Number(lastTime));
        }
        DebugUtils.Log("====lastTime", lastTime, oldDate, flag);
        let date = new Date();
        if (flag == 1) {
            if (oldDate && date.getDate() == oldDate.getDate()) {
                this.showNotice(false);
                return;
            }
        }
        // 判断是否是同一天
        if (flag == 2) {
            if (oldDate && date.getDate() == oldDate.getDate()) {
                this.showNotice(false);
                return;
            }
        }
        if (flag == 3) {
            // 使用ISO周标准比较
            const dateWeek = TimeUtils.getISOWeek(date);
            const oldDateWeek = TimeUtils.getISOWeek(oldDate);
            if (
                dateWeek.year === oldDateWeek.year &&
                dateWeek.week === oldDateWeek.week
            ) {
                this.showNotice(false);
                return;
            }
        }
        //判断是否是同一月
        if (flag == 4) {
            if (oldDate && date.getMonth() == oldDate.getMonth()) {
                this.showNotice(false);
                return;
            }
        }

        // 成功
        this.showNotice(true);
    }

    /**
    * 展示玩法公告
    */
    private showNotice(isActive: boolean) {
        if (!isActive) {
            return;
        }
        //  加载玩法公告UI
        UIViewMgr.Instance.showNotice();
    }
}
