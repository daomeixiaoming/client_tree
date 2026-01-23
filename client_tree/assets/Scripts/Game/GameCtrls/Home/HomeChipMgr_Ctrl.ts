import EventMgr from "../../../Framework/Managers/EventMgr";
import NodePoolMgr from "../../../Framework/Managers/NodePoolMgr";
import UIBase from "../../../Framework/Managers/UIBase";
import RandomUtils from "../../../Framework/Utils/RandomUtils";
import { EventKey } from "../../Config/EventCfg";
import { RewardResponse, SmashEggRes } from "../../Config/MsgCfg";
import { AbNames, UICfg } from "../../Config/ResCfg";
import HomeChip_Ctrl from "./HomeChip_Ctrl";

const { ccclass, property } = cc._decorator;
/**
 *  筹码管理
 */
@ccclass
export default class HomeChipMgr_Ctrl extends UIBase {
    chipArea: cc.Node;
    mask1: cc.Node;
    mask2: cc.Node;
    /**记录奖励的结果,多组 */
    listRes: RewardResponse[][] = [];
    /** 记录当前的那一组 */
    tempList: RewardResponse[] = [];
    /** 是否播放树的动画 */
    isPlayAddBetAni: boolean = true;
    /** 记录当前是第几组结果 */
    resIdx: number = 0;


    onLoad() {
        super.onLoad();
        this.initUI();
        this.registerEvent();
    }

    start() {

    }

    protected onDestroy(): void {
        this.unRegisterEvent();
    }

    private initUI() {
        this.chipArea = this.view["node/bg/chipArea"] as cc.Node;
        this.mask1 = this.view["spMask1"] as cc.Node;
        this.mask2 = this.view["spMask2"] as cc.Node;
    }

    private registerEvent() {
        EventMgr.Instance.AddEventListener(EventKey.UI_MSG_SMASHEGGRES, this, this.onAddBetRes);
    }

    private unRegisterEvent() {
        EventMgr.Instance.RemoveListenner(EventKey.UI_MSG_SMASHEGGRES, this, this.onAddBetRes);
    }

    /** 创建单个筹码动画 */
    private createChip(data: RewardResponse) {
        let pre = NodePoolMgr.Instance.GetNodeInPool(AbNames.Prefabs, UICfg.HomeChip);
        let item: cc.Node = cc.instantiate(pre);
        item.opacity = 0;
        item.addComponent(HomeChip_Ctrl);
        this.scheduleOnce(() => {
            item.emit("initChip", data);
        }, 0);
        this.node.addChild(item);

        let areaSize = this.node.getContentSize();
        let startSize = this.mask1.getContentSize();
        let endSize = this.mask2.getContentSize();
        let itemSize = item.getContentSize();
        let offsetY = startSize.height - itemSize.height;

        let randomY = RandomUtils.getRandomInt(0, offsetY);
        let randomX = RandomUtils.getRandomInt(0, startSize.width / 2 - itemSize.width);
        // console.log("================HomeChipMgr_Ctrl.createChip=================", randomX);
        let arr = [1, -1, 1, 1, -1, 1, 1, -1];
        let dir = Math.random() < 0.5 ? 1 : -1;
        dir = RandomUtils.getRandomElement(arr);
        item.setPosition(randomX * dir, randomY);

        let moveY = areaSize.height - startSize.height - endSize.height;
        let randomMoveY = RandomUtils.getRandomInt(moveY / 5 * 2, moveY / 5 * 3);
        console.log("================HomeChipMgr_Ctrl.createChip=================", randomMoveY);
        let moveY2 = itemSize.height + randomY
        cc.Tween.stopAllByTarget(item);
        let t = cc.tween;
        t(item)
            .to(0.25, { opacity: 255 })
            .by(0.5, { position: cc.v3(0, randomMoveY, 0) })
            .delay(1)
            .by(0.5, { position: cc.v3(0, moveY - randomMoveY, 0) })
            .parallel(
                t().by(0.75, { position: cc.v3(0, moveY2, 0) }),
                t().to(0.75, { opacity: 0 })
            )
            .call(() => {
                NodePoolMgr.Instance.PutNodeInPool(AbNames.Prefabs, UICfg.HomeChip, item);
                let tempLen = this.tempList.length;
                console.error("============HomeChipMgr_Ctrl.createChip 結束============", tempLen);
            })
            .start();
    }

    /**
     * 播放其中一组
     */
    private playOneGroup() {
        console.log("==============HomeChipMgr_Ctrl.playOneGroup=================", this.listRes.length);
        this.tempList = this.listRes.shift() || [];
        if (this.tempList && this.tempList.length > 0) { //当前组有数据
            console.log("==============playOneGroup000=================");
            this.schedule(() => {
                console.log("==============playOneGroup111=================", this.tempList.length);
                const ele = this.tempList.shift();
                if (ele) {
                    this.createChip(ele);
                } else {
                    console.log("===============playOneGroup333当前组结束===============");
                    this.scheduleOnce(() => {
                        this.playOneGroup();
                    }, 2);
                }
            }, 0.2, this.tempList.length)
            console.log("==============playOneGroup2222=================");
        } else {
            // 标记当前所有组结束
            this.isPlayAddBetAni = !this.isPlayAddBetAni;
            EventMgr.Instance.Emit(EventKey.UI_STOPTREE, "");
            console.log("==============playOneGroup444444所有的加载完毕=================");
        }
    }

    /**
      * 下注返回
      * @param uname 
      * @param udata 
      */
    private onAddBetRes(uname: string, udata: SmashEggRes) {
        if (udata) {
            let num = udata.num;
            console.log("=============HomeChipMgr_Ctrl.onAddBetRes1===================", this.listRes.length, num);
            let list = udata.rewardList;
            // 标记是否是第一组
            let isFirst = this.listRes.length === 0 ? true : false
            this.listRes.push(list);
            console.log("=================HomeChipMgr_Ctrl.onAddBetRes2================", isFirst, this.listRes);

            if (this.isPlayAddBetAni) {
                console.log("=================HomeChipMgr_Ctrl.onAddBetRes3================");
                this.isPlayAddBetAni = !this.isPlayAddBetAni;
                this.playOneGroup();
                if (num === 1) {
                    EventMgr.Instance.Emit(EventKey.UI_PLAYTREE, true);
                } else {
                    EventMgr.Instance.Emit(EventKey.UI_PLAYTREE, false);
                }
            }
        }
    }
}
