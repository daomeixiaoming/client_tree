import EventMgr from "../../../Framework/Managers/EventMgr";
import NodePoolMgr from "../../../Framework/Managers/NodePoolMgr";
import { ResMgr } from "../../../Framework/Managers/ResMgr";
import { ResMgrAsync } from "../../../Framework/Managers/ResMgrAsync";
import SoundMgr from "../../../Framework/Managers/SoundMgr";
import UIBase from "../../../Framework/Managers/UIBase";
import DebugUtils from "../../../Framework/Utils/DebugUtils";
import GameUtils from "../../../Framework/Utils/GameUtils";
import RandomUtils from "../../../Framework/Utils/RandomUtils";
import { EventKey } from "../../Config/EventCfg";
import { RewardResponse, SmashEggRes } from "../../Config/MsgCfg";
import { AbNames, AtalsCfg, GuiCfg, SoundCfg, SpineCfg, UICfg } from "../../Config/ResCfg";
import UIViewMgr from "../../Data/UIViewMgr";
import GameApp from "../../GameApp";
import GameLogic from "../../GameLogic";
import Marquee_Ctrl from "../../Marquee_Ctrl";
import HomeChip_Ctrl from "./HomeChip_Ctrl";
import HomeChipMgr_Ctrl from "./HomeChipMgr_Ctrl";

const { ccclass, property } = cc._decorator;
/**
 * 大厅主页
 */
@ccclass
export default class Home_Ctrl extends UIBase {
    spAni: sp.Skeleton;
    light: cc.Node;
    chioiceType: number = 1;
    listlength: number;
    spPMD: cc.Node;
    labScore: cc.Label;

    onLoad() {
        super.onLoad();
        this.initUI();
        this.registerEvent();
    }

    start() {

    }

    protected onDestroy(): void {
        // 清理节点池
        NodePoolMgr.Instance.ClearAllNodeInPool(AbNames.Prefabs, UICfg.HomeChip);
        this.unRegisterEvent();
    }

    private initUI() {
        this.AddButtonListener("node/bg/btnClose", this, this.onBackClick);
        this.AddButtonListener("node/bg/btnMore", this, this.onMoreClick);
        this.AddButtonListener("node/bg/btnVoice", this, this.onVoiceClick);
        this.AddButtonListener("node/bg/addBets/btn1", this, this.onAddBet1Click); //下注筹码
        this.AddButtonListener("node/bg/addBets/btn2", this, this.onAddBet2Click); //
        this.AddButtonListener("node/bg/addBets/btn3", this, this.onAddBet3Click);
        this.AddButtonListener("node/bg/addBets/btn4", this, this.onAddBet4Click);

        // 动画
        this.spAni = this.ViewComponent("node/bg/spAni/spAni", sp.Skeleton) as sp.Skeleton;
        this.initAni();
        this.light = this.view["node/bg/spAni/spLight"] as cc.Node;
        this.light.active = false;
        let spLight = this.ViewComponent("node/bg/spAni/spLight", cc.Sprite) as cc.Sprite;
        GameUtils.SetSpByAtals(spLight, GuiCfg.sp_tree1);

        // 跑马灯
        this.spPMD = this.view["node/bg/spPMD"] as cc.Node;
        this.initPMD();

        // 初始化筹码管理器
        this.initChipMgr();

        // 分数
        this.labScore = this.ViewComponent("node/bg/spScoreBg/layout/lab", cc.Label) as cc.Label;
        this.updateScore();

        let spScoreBg = this.view["node/bg/spScoreBg"] as cc.Node;
        spScoreBg.active = true;

        // 初始化声音
        this.setBtnViceSp();

        //加载节点池
        NodePoolMgr.Instance.AddNodePool(AbNames.Prefabs, UICfg.HomeChip, 20);

        // 消息跑前面了
        // let cfg = GameLogic.Instance.gameCfg;
        // console.log("=========================Home_Ctrl.initUI=============================", cfg);
        // if (cfg) {
        //     GameApp.Instance.showNoticeStatus(cfg.pop || 0);
        // }
        this.onUINoticeRes("", "")
    }

    private registerEvent() {
        EventMgr.Instance.AddEventListener(EventKey.UI_Notice, this, this.onUINoticeRes);
        EventMgr.Instance.AddEventListener(EventKey.UI_MSG_SMASHEGGRES, this, this.onAddBetRes);
        EventMgr.Instance.AddEventListener(EventKey.Update_Currency, this, this.onUpdateScore);
        EventMgr.Instance.AddEventListener(EventKey.UI_RESETGAME, this, this.onGameScoreNan);
        EventMgr.Instance.AddEventListener(EventKey.UI_PLAYTREE, this, this.onPlayTreeAni);
        EventMgr.Instance.AddEventListener(EventKey.UI_STOPTREE, this, this.onStopTreeAni);
    }

    private unRegisterEvent() {
        EventMgr.Instance.RemoveListenner(EventKey.UI_Notice, this, this.onUINoticeRes);
        EventMgr.Instance.RemoveListenner(EventKey.UI_MSG_SMASHEGGRES, this, this.onAddBetRes);
        EventMgr.Instance.RemoveListenner(EventKey.Update_Currency, this, this.onUpdateScore);
        EventMgr.Instance.RemoveListenner(EventKey.UI_RESETGAME, this, this.onGameScoreNan);
        EventMgr.Instance.RemoveListenner(EventKey.UI_PLAYTREE, this, this.onPlayTreeAni);
        EventMgr.Instance.RemoveListenner(EventKey.UI_STOPTREE, this, this.onStopTreeAni);
    }

    /**
     * 初始化树摇的动画
     */
    private initAni() {
        ResMgrAsync.Instance.IE_GetAsset(AbNames.Spines, SpineCfg.sp_tree, sp.SkeletonData).then((res: sp.SkeletonData) => {
            console.log("===========Home_Ctrl.showAni.initAni1===================", res, this.spAni);
            if (res) {
                this.spAni.skeletonData = res;
                this.spAni.loop = false;
                this.spAni.node.active = true;
                this.light.active = true;
            }

            // 动画播放结束事件
            // this.spAni.setCompleteListener(() => {
            //     // console.log("===========Home_Ctrl.showAni.setEndListener===================");
            // })
        })
    }

    /**
     * 播放树摇的动画
     */
    private showAni(loop: boolean) {
        console.log("=================Home_Ctrl.showAni================");
        this.spAni.paused = false;
        this.spAni.clearTrack(0); //清空轨道
        this.spAni.setAnimation(0, "animation", loop); // 播放动画
        this.light.active = false;
        GameLogic.Instance.PlayMusic(SoundCfg.coin);
    }

    /**
     * 关闭树摇的动画
     */
    private closeAni() {
        this.spAni.paused = true
        this.light.active = true;
        this.spAni.setToSetupPose();
    }

    /**
     * 初始化跑马灯
     */
    private initPMD() {
        let res = ResMgr.Instance.getAsset(AbNames.Prefabs, UICfg.Marquee, cc.Prefab) as cc.Prefab;
        let item = cc.instantiate(res);
        this.spPMD.addChild(item);
        item.addComponent(Marquee_Ctrl);
    }

    /**
     * 初始化筹码区域
     */
    private initChipMgr() {
        let chip = this.view["node/bg/chipArea"] as cc.Node;
        let res = ResMgr.Instance.getAsset(AbNames.Prefabs, UICfg.HomeChipMgr, cc.Prefab) as cc.Prefab;
        if (res) {
            let item = cc.instantiate(res);
            chip.addChild(item);
            item.addComponent(HomeChipMgr_Ctrl);
        } else {
            console.error("===========Home_Ctrl.initChipMgr error==============");
        }
    }

    /**
     * 更新金币
     */
    private updateScore() {
        if (this.labScore) {
            let score = GameLogic.Instance.getAppScore();
            this.labScore.string = `${score}`;
        }
    }

    /**
     * 显示按钮状态
     * @param active 
     */
    private setAddBetBtnStatus(active: boolean) {
        let item = this.view["node/bg/addBets"] as cc.Node;
        let btns = item.getComponentsInChildren(cc.Button);
        btns.forEach((btn: cc.Button) => {
            btn.interactable = active;
        })
    }

    /**
     * 点击返回
     * @param button 
     */
    private onBackClick(button: cc.Button) {
        button.interactable = false;
        button.scheduleOnce(() => {
            button.interactable = true;
        }, 1);
        GameApp.Instance.onExitGame();
    }

    /**
     * 点击菜单
     * @param button
     */
    private onMoreClick(button: cc.Button) {
        button.interactable = false;
        button.scheduleOnce(() => {
            button.interactable = true;
        }, 1);
        UIViewMgr.Instance.showMenu();
    }

    /**
     * 点击声音
     * @param button 
     */
    private onVoiceClick(button: cc.Button) {
        let value = localStorage.getItem("GAME_SOUND_MUTE");
        let v = parseInt(value);
        let isOpen = v === 0 ? true : false;
        DebugUtils.Log("=====================onVoiceClick=====================", value, isOpen);
        SoundMgr.Instance.setSoundsMute(isOpen);
        SoundMgr.Instance.setMusicMute(isOpen);
        this.setBtnViceSp();
    }

    // 设置声音按钮的图片状态
    private setBtnViceSp(): void {
        let value = localStorage.getItem("GAME_SOUND_MUTE");
        // DebugUtils.Log("==========setBtnViceSp设置声音按钮的图片状态==============", value);
        let v = parseInt(value);
        let sp_voice = this.ViewComponent("node/bg/btnVoice/sp", cc.Sprite) as cc.Sprite;
        let path = v === 1 ? "home_btnvoice_close" : "home_btnvoice_open";
        GameUtils.SetSpData(AbNames.Atals, AtalsCfg.Home, path, sp_voice);
    }

    /**
     * 摇1次
     * @param button 
     */
    private onAddBet1Click(button: cc.Button) {
        this.addBet(1);
    }

    /**
     * 摇5次
     * @param button 
     */
    private onAddBet2Click(button: cc.Button) {
        this.addBet(5);
    }

    /**
     * 摇10次
     * @param button 
     */
    private onAddBet3Click(button: cc.Button) {
        this.addBet(10);
    }

    /**
     * 摇20次
     * @param button 
     */
    private onAddBet4Click(button: cc.Button) {
        this.addBet(20);
    }

    /**
     * 点击开始摇树
     * @param type 数量 
     */
    private addBet(type: number) {
        this.chioiceType = type;
        this.setAddBetBtnStatus(false);
        // GameApp.Instance.showCoinNan();
        let scoreCur = GameLogic.Instance.getAppScore();
        let chipCfgs = GameLogic.Instance.chipCfgs;
        let cfg = chipCfgs.find(item => item.type === 1);
        let cost = type * cfg.cost;
        if (scoreCur >= cost) {
            GameLogic.Instance.sendAddBet(this.chioiceType);
            this.scheduleOnce(() => {
                this.setAddBetBtnStatus(true);
            }, 0.25)
        } else {
            GameApp.Instance.showCoinNan();
            this.setAddBetBtnStatus(true);
        }
    }

    /** 停止动画 */
    private onAniEnd() {
        this.listlength = 0;
        this.setAddBetBtnStatus(true);
        this.closeAni();
    }

    /**
     * 展示免打扰通知
     * @param uname 
     * @param udata 
     */
    private onUINoticeRes(uname: string, udata: string) {
        let cfg = GameLogic.Instance.gameCfg;
        console.log("=========================Home_Ctrl.onUINoticeRes=============================", cfg);
        if (cfg) {
            GameApp.Instance.showNoticeStatus(cfg.pop || 0);
        }
    }

    /**
     * 下注返回
     * @param uname 
     * @param udata 
     */
    private onAddBetRes(uname: string, udata: SmashEggRes) {
        console.log("=================Home_Ctrl.onAddBetRes================", udata);
        if (udata) {
            this.updateScore();
        }
    }

    /**
     * 更新金币
     * @param uname 
     * @param udate 
     */
    private onUpdateScore(uname: string, udate: string) {
        this.updateScore();
    }

    /**
     * 用户金币不足
     * @param uname 
     * @param udate 
     */
    private onGameScoreNan(uname: string, udate: string) {
        this.setAddBetBtnStatus(true);
    }

    /**
     * 播放树的动画
     * @param uname 
     * @param udate 
     */
    private onPlayTreeAni(uname: string, udate: boolean) {
        console.log("=================Home_Ctrl.onPlayTreeAni================");
        this.showAni(udate);
    }

    /**
     * 停止树的动画
     * @param uname 
     * @param udate 
     */
    private onStopTreeAni(uname: string, udate: string) {
        this.onAniEnd();
    }
}
