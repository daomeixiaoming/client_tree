import EventMgr from "../Framework/Managers/EventMgr";
import { ResMgrAsync } from "../Framework/Managers/ResMgrAsync";
import SoundMgr from "../Framework/Managers/SoundMgr";
import { EventKey } from "./Config/EventCfg";
import { EggCfgs, RoleList, RoleType, RoleTypeKey } from "./Config/GameConfig";
import { IAPPInfo, SmashCfgItem, SmashEggReq, SmashEggRes } from "./Config/MsgCfg";
import { GameInfoResp, GameUserAccountInfo, IGameCfg, PlayerInfoResp } from "./Config/MsgCfgBase";
import { NetCfg } from "./Config/NetCfg";
import { AbNames } from "./Config/ResCfg";
import { BetOptions } from "./Data/GameData";
import { NativeCfg } from "./Data/NativeMgr";
import NetHttpMgr from "./Data/NetHttpMgr";
import GameApp from "./GameApp";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLogic extends cc.Component {
    appInfo: IAPPInfo = null;

    /** 游戏内的货币 */
    gameDataInfo: GameUserAccountInfo = {
        num: 0,
        userId: 0,
        gameId: 0,
        type: 0,
        icon: "",
        consumeTotalNum: 0,
        historyTotalNum: 0,
        name: ""
    };
    /** 通用数据 */
    appDataInfo: PlayerInfoResp = {
        userId: 0,
        diamondBalance: 0,
        seashellBalance: 0
    };

    roomId: number = NetCfg.roomId; //主播房间号
    anchorId: number = NetCfg.anchorId; //主播id
    userId: number = 0; //用户自己的uid
    /** 游戏状态 */
    gameStaue: number = -1;

    /** 大厅的记录*/
    public homeRecords: number[] = []
    /** 大厅延迟加载的图集 */
    public atalsHome2: cc.SpriteAtlas = null;

    /** 记录当前操作的筹码id */
    public optIdx: number = BetOptions.Chip1;

    public static Instance: GameLogic = null as unknown as GameLogic;

    /** 游戏配置数据 */
    gameCfg: IGameCfg = null;

    /** 标记105中奖的消息动画是否执行完毕 */
    msg106Last: boolean = false;
    /** 标记是否开启封神榜，默认是false */
    isOpenUserRebate: boolean = true;
    choiceEgg: number;
    /** 游戏的筹码配置 */
    chipCfgs: SmashCfgItem[] = [];


    onLoad(): void {
        if (GameLogic.Instance === null) {
            GameLogic.Instance = this;
        } else {
            this.destroy();
            return;
        }
    }

    public Init(): void {
        this.homeRecords = [];
        // 测试数据
        let list = [RoleType.RoleCGJ, RoleType.RoleHXG, RoleType.RoleHXX, RoleType.RoleHZL, RoleType.RoleLCH, RoleType.RoleLDB, RoleType.RoleTGL, RoleType.RoleZGL];
        // for (let i = 0; i < 3; i++) {
        //     const element = RandomUtils.getRandomElement(list);
        //     let item = list[i % list.length];
        //     this.homeRecords.unshift(item);
        // }
        console.log("=========GameLogic.Init.homeRecords=============", this.homeRecords);
        this.registerEvent();
    }

    protected onDestroy(): void {
        this.unRegisterEvent();
    }

    private registerEvent(): void {
        EventMgr.Instance.AddEventListener(NativeCfg.NATIVE_SHOP_OVER, this, this.onNativeShopOver);
        EventMgr.Instance.AddEventListener(EventKey.Http_Res_GetPlayerInfo, this, this.onGetPlayerInfoRes);
        EventMgr.Instance.AddEventListener(EventKey.Http_Res_GetAccountInfo, this, this.onGetAccountInfo);
        EventMgr.Instance.AddEventListener(EventKey.Http_Msg_ShopBuyRes, this, this.onShopBuyRes);
        EventMgr.Instance.AddEventListener(EventKey.Http_Res_GetGameCfg, this, this.onHttpGameCfgRes);
        EventMgr.Instance.AddEventListener(EventKey.MSG_SMASHEGGRES, this, this.onAddBetRes);
        EventMgr.Instance.AddEventListener(EventKey.MSG_SMASHECFG, this, this.onGameCfgRes);
    }

    private unRegisterEvent(): void {
        EventMgr.Instance.RemoveListenner(NativeCfg.NATIVE_SHOP_OVER, this, this.onNativeShopOver);
        EventMgr.Instance.RemoveListenner(EventKey.Http_Res_GetPlayerInfo, this, this.onGetPlayerInfoRes);
        EventMgr.Instance.RemoveListenner(EventKey.Http_Res_GetAccountInfo, this, this.onGetAccountInfo);
        EventMgr.Instance.RemoveListenner(EventKey.Http_Msg_ShopBuyRes, this, this.onShopBuyRes);
        EventMgr.Instance.RemoveListenner(EventKey.Http_Res_GetGameCfg, this, this.onHttpGameCfgRes);
        EventMgr.Instance.RemoveListenner(EventKey.MSG_SMASHEGGRES, this, this.onAddBetRes);
        EventMgr.Instance.RemoveListenner(EventKey.MSG_SMASHECFG, this, this.onGameCfgRes);
    }

    /**
     *  获取大厅的图集2
     * @returns 
     */
    public getHomeAtals2(callback: Function) {
        // ResMgrAsync.Instance.IE_GetAsset(AbNames.Atals, AtalsCfg.HomeSecond, cc.SpriteAtlas).then((res: cc.SpriteAtlas) => {
        //     this.atalsHome2 = res;
        //     callback(res);
        // });
    }

    /**
     * 获取App的货币瞄钻
     */
    public getAppScore() {
        return this.appDataInfo.diamondBalance;
    }

    /**
     * 根据索引，取出对应索引的角色类型
     * @param idx 索引
     * @returns
     */
    public getTypeByPath(idx: number): RoleTypeKey {
        const list = RoleList;
        const cfg = list.find((item) => item.idx == idx);
        return cfg;
    }

    /**
     * 
     * @param type 角色类型
     * @returns 
     */
    public getCfgByType(type: number): RoleTypeKey {
        const list = RoleList;
        const cfg = list.find((item) => item.type == type);
        return cfg;
    }

    // 重置相关数据
    public resetGameInfo() {
        // this.enterHome(); //场景数据
        // this.getPlayerInfo(); //用户数据

        // this.homeRecords = [];
    }

    //获取用户信息 ok
    public getPlayerInfo() {
        // 获取用户信息之前先加载 Notice 资源包
        NetHttpMgr.Instance.GetPlayerInfo();
    }

    /**
     *  播放音效
     * @param audioPath 音效路径
     */
    public PlayMusic(audioPath: string, voice: number = 1) {
        ResMgrAsync.Instance.IE_GetAsset(AbNames.Sounds, audioPath, cc.AudioClip).then((res: cc.AudioClip) => {
            if (res) {
                SoundMgr.Instance.playSound(res, voice)
            }
        })
    }

    /** 播放声音，使用  cc.audioEngine*/
    public PlayMusic2(audioPath: string, voice: number = 1) {
        ResMgrAsync.Instance.IE_GetAsset(AbNames.Sounds, audioPath, cc.AudioClip).then((res: cc.AudioClip) => {
            if (res) {
                SoundMgr.Instance.playSound2(res, voice);
            }
        })
    }

    /**
     * 点击下注
     */
    public sendAddBet(type: number) {
        let cfg = this.chipCfgs.find(item => item.type === 1);
        let cost = type * cfg.cost;
        console.log("===========onAddBet===========", cost);
        if (cost <= this.getAppScore()) {
            let req: SmashEggReq = {
                type: 1,
                num: type,
                roomId: GameLogic.Instance.roomId,
            }
            NetHttpMgr.Instance.SmashEggReq(req);
        } else {
            //     console.log("=======金币不足========");
            GameApp.Instance.showCoinNan();
            EventMgr.Instance.Emit(EventKey.UI_RESETGAME, "");
        }
    }

    // 更新金币和破魔石
    private updateGameInfo(): void {
        // DebugUtils.Log("==============updateGameInfo===================");
        // 更新金币
        EventMgr.Instance.Emit(EventKey.Update_Currency, "");
    }

    /**
     * 监听充值返回
     * @param uname 
     * @param udata 
     */
    private onNativeShopOver(uname: string, udata: any) {
        console.log("=============GameLogic.onNativeShopOver=================");
        this.getPlayerInfo();
    }

    /** 获取用户信息返回*/
    private onGetPlayerInfoRes(uname: string, udata: PlayerInfoResp): void {
        // DebugUtils.Log("=========GameLogic.getPlayerInfo==========", udata);
        if (udata) {
            this.appDataInfo.diamondBalance = udata.diamondBalance || 0;
            this.appDataInfo.seashellBalance = udata.seashellBalance || 0;
            this.appDataInfo.userId = udata.userId || 0;
            this.updateGameInfo();
        }
    }

    /** 游戏内部数据返回 */
    private onGetAccountInfo(uanme: string, udata: GameInfoResp) {
        // DebugUtils.Log("=========GameLogic.onGetAccountInfo==========");
        if (udata) {
            this.gameDataInfo.num = udata.num || 0;
            this.gameDataInfo.userId = udata.userId || 0;
            this.gameDataInfo.gameId = udata.gameId || 0;
            this.gameDataInfo.type = udata.type || 0;
            this.gameDataInfo.icon = udata.icon || "";
            this.gameDataInfo.consumeTotalNum = udata.consumeTotalNum || 0;
            this.gameDataInfo.historyTotalNum = udata.historyTotalNum || 0;
            this.gameDataInfo.name = udata.name || "";
            this.updateGameInfo();
        }
    }

    /** 龙币商城购买成功 */
    private onShopBuyRes(uname: string, udata: any) {
        if (udata) {
            // 获取玩家信息
            this.getPlayerInfo()
            // 获取游戏相关数据
            NetHttpMgr.Instance.GetAccountInfo();
        }
    }

    /**
  * 游戏配置
  * @param uname 
  * @param udata 
  */
    private onHttpGameCfgRes(uname: string, udata: IGameCfg) {
        if (udata) {
            this.gameCfg = udata;
        }
    }

    /**
     * 下注返回
     * @param uname 
     * @param udata 
     */
    private onAddBetRes(uname: string, udata: SmashEggRes) {
        if (udata) {
            let totalMoney = udata.totalMoney;
            if (totalMoney) {
                this.appDataInfo.diamondBalance = totalMoney;
            }
            EventMgr.Instance.Emit(EventKey.UI_MSG_SMASHEGGRES, udata);
        } else {
            console.error("==============GameLogic.onAddBetRes.error==========");
            EventMgr.Instance.Emit(EventKey.UI_RESETGAME, "");
        }
    }

    /**
     * 游戏的配置
     * @param uname 
     * @param udata 
     */
    private onGameCfgRes(uname: string, udata: SmashCfgItem[]) {
        if (udata) {
            this.chipCfgs = [].concat(udata);
        } else {
            console.error("==============GameLogic.onGameCfgRes.error==========");
        }
    }

    /**
     * 转路径
     * @param types 
     * @returns 返回 
     */
    public converPath(types: number[]): number[] {
        let res: number[] = [];
        let ldxs: number[][] = [[0, 1, 2], [1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7], [6, 7, 0], [7, 0, 1]];

        let idxs = [];
        types.forEach(item => {
            let cfgRes = GameLogic.Instance.getCfgByType(item);
            idxs.push(cfgRes.idx);
        })
        for (let i = 0; i < ldxs.length; i++) {
            const arr = ldxs[i];
            let arr1 = [].concat(arr);
            arr1.sort();
            idxs.sort();
            if (arr1.toString() === idxs.toString()) {
                res = [].concat(arr);
                break;
            }
        }
        return res;
    }
}
