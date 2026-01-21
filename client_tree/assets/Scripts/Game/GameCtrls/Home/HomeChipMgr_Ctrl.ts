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
    /**记录奖励的结果 */
    listRes: RewardResponse[] = [];
    /** 是否播放树的动画 */
    isPlayAddBetAni: boolean = true;

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
    private createChip(data: RewardResponse, idx: number) {
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
                this.listRes.shift();
                NodePoolMgr.Instance.PutNodeInPool(AbNames.Prefabs, UICfg.HomeChip, item);
                this.listRes.length;
                if (this.listRes.length <= 0) {
                    console.error("============HomeChipMgr_Ctrl.createChip 結束============", this.listRes.length);
                    EventMgr.Instance.Emit(EventKey.UI_STOPTREE, "");
                }
            })
            .start();
    }

    /**
      * 下注返回
      * @param uname 
      * @param udata 
      */
    private onAddBetRes(uname: string, udata: SmashEggRes) {
        if (udata) {
            let list = udata.rewardList;
            this.listRes = this.listRes.concat(list);
            console.log("=================HomeChipMgr_Ctrl.onAddBetRes================", list.length);
            for (let i = 0; i < list.length; i++) {
                const ele = list[i];
                this.createChip(ele, i);
            }

            if (this.isPlayAddBetAni) {
                this.isPlayAddBetAni = !this.isPlayAddBetAni;
                EventMgr.Instance.Emit(EventKey.UI_PLAYTREE, "");
            }
        }
    }
}
