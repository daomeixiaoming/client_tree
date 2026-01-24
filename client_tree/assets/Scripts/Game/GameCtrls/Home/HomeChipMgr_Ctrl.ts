import EventMgr from "../../../Framework/Managers/EventMgr";
import NodePoolMgr from "../../../Framework/Managers/NodePoolMgr";
import UIBase from "../../../Framework/Managers/UIBase";
import RandomUtils from "../../../Framework/Utils/RandomUtils";
import { EventKey } from "../../Config/EventCfg";
import { RewardResponse, SmashEggRes } from "../../Config/MsgCfg";
import { AbNames, UICfg } from "../../Config/ResCfg";
import { IPos, list10, list20, list5 } from "../../Data/GameData";
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
    listRes: SmashEggRes[] = [];
    /** 记录当前的那一组 */
    tempList: RewardResponse[] = [];
    /** 是否播放树的动画 */
    isPlayAddBetAni: boolean = true;
    /** 记录当前是第几组结果 */
    resIdx: number = 0;
    /**  */
    offsetXArr: number[] = [];
    offsetYArr: number[];
    mapNode: cc.Node;
    listNodes: cc.Node[] = [];
    /** 摇5下的位置 */
    posList5: IPos[][] = [];
    /** 摇10下的位置 */
    posList10: IPos[][] = [];
    /** 摇20下的位置 */
    posList20: IPos[][] = [];
    /** 当前的数据 */
    posCur: IPos[] = [];

    onLoad() {
        super.onLoad();
        this.initUI();
        this.registerEvent();
        this.initDate();
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
        this.mapNode = this.view["mapNode"] as cc.Node;

        this.getRandomArr();
    }

    private initDate() {
        this.posList5 = [].concat(list5);
        this.posList10 = [].concat(list10);
        this.posList20 = [].concat(list20);
    }

    private registerEvent() {
        EventMgr.Instance.AddEventListener(EventKey.UI_MSG_SMASHEGGRES, this, this.onAddBetRes);
    }

    private unRegisterEvent() {
        EventMgr.Instance.RemoveListenner(EventKey.UI_MSG_SMASHEGGRES, this, this.onAddBetRes);
    }

    private getRandomArr() {
        let startSize = this.mask1.getContentSize();
        let itemSize = cc.size(154, 140);
        this.offsetXArr = this.generateDispersedRandomSequence1(itemSize.width / 2, startSize.width - itemSize.width / 2, 20, 20);
        // console.log("===============HomeChipMgr_Ctrl.initUI1=============", this.offsetXArr);
    }

    private clearNode() {
        let count = this.mapNode.childrenCount;
        console.log("===============HomeChipMgr_Ctrl.clearNode=============", count);
        let pos = this.mask2.getPosition();
        for (let i = 0; i < this.listNodes.length; i++) {
            const item = this.listNodes[i];
            let itemPos = item.getPosition();
            let t = cc.tween;
            t(item)
                .parallel( // 0.75
                    t().to(0.75, { position: cc.v3(itemPos.x, pos.y, 0) }),
                    t().to(0.75, { opacity: 0 })
                )
                .call(() => {
                    NodePoolMgr.Instance.PutNodeInPool(AbNames.Prefabs, UICfg.HomeChip, item);
                })
                .start()
        }
    }

    /** 创建单个筹码动画 */
    /**
     * 
     * @param data 
     * @param idx 索引
     * @param num 筹码选项1 5 10 20
     */
    private createChip(data: RewardResponse, idx: number, num: number) {
        let pre = NodePoolMgr.Instance.GetNodeInPool(AbNames.Prefabs, UICfg.HomeChip);
        let item: cc.Node = cc.instantiate(pre);
        item.opacity = 0;
        item.addComponent(HomeChip_Ctrl);
        this.scheduleOnce(() => {
            item.emit("initChip", data);
        }, 0);
        this.node.addChild(item);
        this.listNodes.push(item);

        let areaSize = this.node.getContentSize();
        let startSize = this.mask1.getContentSize();
        let endSize = this.mask2.getContentSize();
        let itemSize = item.getContentSize();
        let offsetY = startSize.height - itemSize.height;
        let randomY = RandomUtils.getRandomInt(0, offsetY);
        let randomX = this.offsetXArr.shift();

        let endPos = this.mask2.getPosition();
        item.setPosition(randomX, randomY);
        let posStart = null;
        let posEnd = null;
        let temp = this.posCur.shift();
        let posCfg: IPos = null;
        if (num === 5) {
            posCfg = temp;
        } else if (num === 10) {
            posCfg = temp;
        } else if (num === 20) {
            posCfg = temp;
        }
        if (posCfg) {
            posStart = posCfg.posStart;
            posEnd = posCfg.posEnd;
            item.setPosition(posStart.x, posStart.y);
        }
        console.log("===================posCfg11212===============", posCfg);
        let itemPos = item.getPosition();
        let moveY = areaSize.height - startSize.height - endSize.height;
        let randomMoveY = RandomUtils.getRandomInt(moveY / 5 * 3, moveY / 5 * 4);
        let moveY2 = itemSize.height + randomY
        let t = cc.tween;
        let time1 = randomMoveY / 500;
        let time2 = (moveY - randomMoveY) / 500;

        let endP1 = cc.v3(itemPos.x, itemPos.y + randomMoveY, 0); // 起点到停留点
        let endP2 = cc.v3(itemPos.x, endPos.y - endSize.height / 2, 0); // 停留点到最上点
        let endP3 = cc.v3(itemPos.x, endPos.y, 0); // 最上点到消失

        let t1 = 0.25;
        let t2 = 0.25;
        let speed1 = 800;
        if (num === 5) {
            endP1 = posEnd;
            endP2 = cc.v3(endP1.x, endPos.y - endSize.height / 2, 0);
            endP3 = cc.v3(endP1.x, endPos.y, 0); // 最上点到消失
            t1 = (posEnd.y - posStart.y) / speed1;
            t2 = (endPos.y - posEnd.y) / speed1;
        } else if (num === 10) {
            endP1 = posEnd;
            endP2 = cc.v3(endP1.x, endPos.y - endSize.height / 2, 0)
            endP3 = cc.v3(endP1.x, endPos.y, 0); // 最上点到消失
            t1 = (posEnd.y - posStart.y) / speed1;
            t2 = (endPos.y - posEnd.y) / speed1;
        } else if (num === 20) {
            endP1 = posEnd;
            endP2 = cc.v3(endP1.x, endPos.y - endSize.height / 2, 0)
            endP3 = cc.v3(endP1.x, endPos.y, 0); // 最上点到消失
            t1 = (posEnd.y - posStart.y) / speed1;
            t2 = (endPos.y - posEnd.y) / speed1;
        }
        let times = {
            "1": 0.1,
            "5": 0.05,
            "10": 0.05,
            "20": 0.02,
        };
        let timeCur = times[num];
        console.log("================HomeChipMgr_Ctrl.createChip=================", time1, time2);
        cc.Tween.stopAllByTarget(item);
        t(item)
            .delay(idx * timeCur)
            .to(0.25, { opacity: 255 }) // 0.25
            .to(t1, { position: endP1 }) // 0.25
            .delay(1.5) // 1.5
            .to(t2, { position: endP2 }) // 0.25
            .parallel( // 0.75
                t().to(0.75, { position: endP3 }),
                t().to(0.75, { opacity: 0 })
            )
            .call(() => {
                NodePoolMgr.Instance.PutNodeInPool(AbNames.Prefabs, UICfg.HomeChip, item);
                let tempLen = this.tempList.length;
                console.error("============HomeChipMgr_Ctrl.createChip 結束============", tempLen, this.listRes.length, idx);
                if (tempLen - 1 === idx) {
                    EventMgr.Instance.Emit(EventKey.UI_STOPTREE, "");
                }
            })
            .start();
    }

    /**
     * 播放其中一组
     */
    private playOneGroup() {
        console.log("==============HomeChipMgr_Ctrl.playOneGroup=================", this.listRes.length);
        if (this.listRes.length > 0) {
            let temp: SmashEggRes = this.listRes.shift();

            this.tempList = temp.rewardList;
            console.log("==============playOneGroup000=================", this.tempList.length);
            if (this.tempList && this.tempList.length > 0) { //当前组有数据
                let num = temp.num;

                console.log("==============playOneGroup121212=================");
                // this.schedule(() => {
                //     console.log("==============playOneGroup111=================", num);
                //     const ele = this.tempList.shift();
                //     if (ele) {
                //         if (num === 1) {
                //             EventMgr.Instance.Emit(EventKey.UI_PLAYTREE, false);
                //         }
                //         this.createChip(ele);
                //     } else {
                //         console.log("===============playOneGroup333当前组结束===============");
                //         this.scheduleOnce(() => {
                //             // this.playOneGroup();
                //         }, 2);
                //     }
                // }, timeCur, this.tempList.length)
                let posCfg = null;
                if (num === 5) {
                    posCfg = RandomUtils.getRandomElement(this.posList5);
                } else if (num === 10) {
                    posCfg = RandomUtils.getRandomElement(this.posList10);
                } else if (num === 20) {
                    posCfg = RandomUtils.getRandomElement(this.posList20);
                }
                if (posCfg) {
                    this.posCur = [].concat(posCfg);
                    // RandomUtils.RandomArray(this.posCur);
                }

                console.log("===============playOneGroup333当前组结束===============", posCfg);
                for (let i = 0; i < this.tempList.length; i++) {
                    const element = this.tempList[i];
                    this.createChip(element, i, num);
                }
            } else {
                // 标记当前所有组结束
                this.isPlayAddBetAni = !this.isPlayAddBetAni;
                console.log("==============playOneGroup444444所有的加载完毕=================");
                // EventMgr.Instance.Emit(EventKey.UI_STOPTREE, "");
            }
        } else {
            console.log("==============playOneGroup444444所有的加载完毕1=================");
            this.scheduleOnce(() => {
                this.isPlayAddBetAni = !this.isPlayAddBetAni;
                EventMgr.Instance.Emit(EventKey.UI_STOPTREE, "");
            }, 0.5)
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
            this.listRes.push(udata);
            // console.log("=================HomeChipMgr_Ctrl.onAddBetRes2================", isFirst, this.listRes);
            // 生成一组x坐标
            this.getRandomArr();

            this.clearNode();

            this.playOneGroup();
            if (num !== 1) {
                EventMgr.Instance.Emit(EventKey.UI_PLAYTREE, true);
            } else {
                EventMgr.Instance.Emit(EventKey.UI_PLAYTREE, false);
            }

            // if (this.isPlayAddBetAni) {
            //     this.isPlayAddBetAni = !this.isPlayAddBetAni;
            //     this.playOneGroup();
            //     if (num !== 1) {
            //         console.log("=============HomeChipMgr_Ctrl.onAddBetRes3===================");
            //         EventMgr.Instance.Emit(EventKey.UI_PLAYTREE, true);
            //     }
            // }
        }
    }

    private generateDispersedRandomSequence1(min: number, max: number, minDiff: number, count: number): number[] {
        // 参数验证
        if (min >= max) throw new Error("最小值必须小于最大值");
        if (minDiff <= 0) throw new Error("最小差值必须大于0");
        if (count <= 0) throw new Error("数量必须大于0");

        // 计算理论最大可能数量
        const maxPossibleCount = Math.floor((max - min) / minDiff) + 1;
        if (count > maxPossibleCount) {
            throw new Error(`无法生成${count}个数，理论最大数量为${maxPossibleCount}`);
        }

        const result: number[] = [];
        let attempts = 0;
        const maxAttempts = count * 100; // 防止无限循环

        while (result.length < count && attempts < maxAttempts) {
            const candidate = Math.floor(Math.random() * (max - min + 1)) + min;

            // 检查与所有已生成数的差值
            const isValid = result.every(num => Math.abs(num - candidate) >= minDiff);

            if (isValid) {
                result.push(candidate);
            }

            attempts++;
        }

        if (result.length < count) {
            console.warn(`仅成功生成${result.length}个满足条件的随机数`);
        }

        return result;
    }
}
