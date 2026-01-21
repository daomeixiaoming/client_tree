import EventMgr from "../../../Framework/Managers/EventMgr";
import NodePoolMgr from "../../../Framework/Managers/NodePoolMgr";
import { ResMgr } from "../../../Framework/Managers/ResMgr";
import { ResMgrAsync } from "../../../Framework/Managers/ResMgrAsync";
import SoundMgr from "../../../Framework/Managers/SoundMgr";
import UIBase from "../../../Framework/Managers/UIBase";
import CocosUtils from "../../../Framework/Utils/CocosUtils";
import DebugUtils from "../../../Framework/Utils/DebugUtils";
import GameUtils from "../../../Framework/Utils/GameUtils";
import RandomUtils from "../../../Framework/Utils/RandomUtils";
import { EventKey } from "../../Config/EventCfg";
import { RewardResponse, SmashEggRes } from "../../Config/MsgCfg";
import { AbNames, AtalsCfg, GuiCfg, SoundCfg, SpineCfg, UICfg } from "../../Config/ResCfg";
import NetHttpMgr from "../../Data/NetHttpMgr";
import UIViewMgr from "../../Data/UIViewMgr";
import GameApp from "../../GameApp";
import GameLogic from "../../GameLogic";
import Marquee_Ctrl from "../../Marquee_Ctrl";
import HomeChip_Ctrl from "./HomeChip_Ctrl";

const { ccclass, property } = cc._decorator;
/**
 * 大厅主页
 */
@ccclass
export default class Home_Ctrl extends UIBase {
    /** 筹码的区域 */
    chipArea: cc.Node = null;
    /** 筹码的起始区间 */
    mask1: cc.Node = null;
    mask2: cc.Node;
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

        this.chipArea = this.view["node/bg/chipArea"] as cc.Node;
        this.mask1 = this.view["node/bg/chipArea/spMask1"] as cc.Node;
        this.mask2 = this.view["node/bg/chipArea/spMask2"] as cc.Node;

        // 动画
        this.spAni = this.ViewComponent("node/bg/spAni/spAni", sp.Skeleton) as sp.Skeleton;
        this.initAni();
        this.light = this.view["node/bg/spAni/spLight"] as cc.Node;
        this.light.active = true;
        let spLight = this.ViewComponent("node/bg/spAni/spLight", cc.Sprite) as cc.Sprite;
        GameUtils.SetSpByAtals(spLight, GuiCfg.sp_tree);

        // 跑马灯
        this.spPMD = this.view["node/bg/spPMD"] as cc.Node;
        this.initPMD();

        // 分数
        this.labScore = this.ViewComponent("node/bg/spScoreBg/layout/lab", cc.Label) as cc.Label;
        this.updateScore();

        // 初始化声音
        this.setBtnViceSp();

        //加载节点池
        NodePoolMgr.Instance.AddNodePool(AbNames.Prefabs, UICfg.HomeChip, 20);

        // 消息跑前面了
        let cfg = GameLogic.Instance.gameCfg;
        if (cfg) {
            GameApp.Instance.showNoticeStatus(cfg.pop || 0);
        }
    }

    private registerEvent() {
        EventMgr.Instance.AddEventListener(EventKey.UI_MSG_SMASHEGGRES, this, this.onAddBetRes);
        EventMgr.Instance.AddEventListener(EventKey.Update_Currency, this, this.onUpdateScore);
        EventMgr.Instance.AddEventListener(EventKey.UI_RESETGAME, this, this.onGameScoreNan);
    }
    private unRegisterEvent() {
        EventMgr.Instance.RemoveListenner(EventKey.UI_MSG_SMASHEGGRES, this, this.onAddBetRes);
        EventMgr.Instance.RemoveListenner(EventKey.Update_Currency, this, this.onUpdateScore);
        EventMgr.Instance.RemoveListenner(EventKey.UI_RESETGAME, this, this.onGameScoreNan);
    }

    /**
     * 初始化树摇的动画
     */
    private initAni() {
        ResMgrAsync.Instance.IE_GetAsset(AbNames.Spines, SpineCfg.sp_tree, sp.SkeletonData).then((res: sp.SkeletonData) => {
            if (res) {
                this.spAni.skeletonData = res;
                this.spAni.loop = false;
            }

            // 动画播放结束事件
            this.spAni.setCompleteListener(() => {
                console.log("===========Home_Ctrl.showAni.setEndListener===================");
                // this.closeAni();
            })
        })
    }

    /**
     * 播放树摇的动画
     */
    private showAni() {
        this.spAni.paused = false;
        this.spAni.setAnimation(0, "animation", true);
        this.light.active = false;
        GameLogic.Instance.PlayMusic(SoundCfg.coin);
    }

    /**
     * 关闭树摇的动画
     */
    private closeAni() {
        this.spAni.paused = false
        this.light.active = true;
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
     * @param button \
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
        this.addBet(10);
    }

    /**
     * 
     * @param type 数量 
     */
    private addBet(type: number) {
        this.chioiceType = type;
        this.setAddBetBtnStatus(false);

        let scoreCur = GameLogic.Instance.getAppScore();
        let gameCfgs = GameLogic.Instance.gameCfgs;
        let cfg = gameCfgs.find(item => item.type === 1);
        let cost = type * cfg.cost;
        if (scoreCur >= cost) {
            GameLogic.Instance.sendAddBet(this.chioiceType);
            this.scheduleOnce(() => {
                this.showAni();
            }, 0.05)
        } else {
            GameApp.Instance.showCoinNan();
        }
    }

    private createChip(data: RewardResponse, idx: number) {
        let pre = NodePoolMgr.Instance.GetNodeInPool(AbNames.Prefabs, UICfg.HomeChip);
        let item: cc.Node = cc.instantiate(pre);
        item.opacity = 0;
        item.addComponent(HomeChip_Ctrl);
        this.scheduleOnce(() => {
            item.emit("initChip", data);
        })

        this.chipArea.addChild(item);
        let areaSize = this.chipArea.getContentSize();
        let startSize = this.mask1.getContentSize();
        let endSize = this.mask2.getContentSize();
        let itemSize = item.getContentSize();
        let offsetY = startSize.height - itemSize.height;

        let randomY = RandomUtils.getRandomInt(0, offsetY);
        let randomX = RandomUtils.getRandomInt(0, startSize.width / 2 - itemSize.width);
        // console.log("================createChip=================", randomX);
        let dir = Math.random() < 0.5 ? 1 : -1;
        item.setPosition(randomX * dir, randomY);

        let moveY = areaSize.height - startSize.height - endSize.height;
        let moveY2 = itemSize.height + randomY
        cc.Tween.stopAllByTarget(item);
        let t = cc.tween;
        t(item)
            .delay(0.35 * idx)
            .to(0.25, { opacity: 255 })
            .by(1, { position: cc.v3(0, moveY, 0) })
            .parallel(
                t().by(0.75, { position: cc.v3(0, moveY2, 0) }),
                t().to(0.75, { opacity: 0 })
            )
            .call(() => {
                NodePoolMgr.Instance.PutNodeInPool(AbNames.Prefabs, UICfg.HomeChip, item);
                this.listlength--;
                if (this.listlength <= 0) {
                    console.warn("============Home_Ctrl.createChip 結束============");
                    this.onAniEnd();
                }
            })
            .start();
    }

    private onAniEnd() {
        this.listlength = 0;
        this.setAddBetBtnStatus(true);

        this.spAni.paused = true;
        // this.spAni.clearTrack(0);
    }

    /**
     * 下注返回
     * @param uname 
     * @param udata 
     */
    private onAddBetRes(uname: string, udata: SmashEggRes) {
        console.log("=================Home_Ctrl.onAddBetRes================", udata);
        if (udata) {
            let list = udata.rewardList;
            this.listlength = list.length;
            for (let i = 0; i < list.length; i++) {
                this.createChip(list[i], i);
            }
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
}
