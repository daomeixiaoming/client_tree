import EventMgr from "../Framework/Managers/EventMgr";
import UIBase from "../Framework/Managers/UIBase";
import CocosUtils from "../Framework/Utils/CocosUtils";
import { client } from "../Proto/game_pb";
import { EventKey } from "./Config/EventCfg";
import { Lngs } from "./Config/LngCfg";


const { ccclass, property } = cc._decorator;
export interface IMarqueeItem {
    /** 用户名 */
    userName: string,
    /**  */
    list: client.money.tree.IGiftInfo[],
    /** 类型 1 是礼物 2 是V币 */
    type: number,
}

/** 跑马灯UI */
@ccclass
export default class Marquee_Ctrl extends UIBase {
    /** 文字宽度 */
    richWidth: number = 0;
    /** 外框宽度 */
    maskWidth: number = 0;
    tempPre: cc.Node = null!;

    /** 消息列表 */
    msgList: IMarqueeItem[] = [];
    idx: number = 0;
    /** 是否是第一条消息 */
    isFirstMsg: boolean = true;
    /** 父节点 */
    itemParent: cc.Node = null!;
    mask: cc.Node = null!;

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
        // this.labRich = this.ViewComponent("richText", cc.RichText) as cc.RichText;

        // let item = this.view["richText"] as cc.Node;
        let item = this.view["item"] as cc.Node;
        this.tempPre = cc.instantiate(item);
        item.destroy();

        this.itemParent = this.view["items"] as cc.Node;
        this.mask = this.view["mask"] as cc.Node;
        this.mask.active = false;

        // this.setLabTex();
    }

    private registerEvent(): void {
        EventMgr.Instance.AddEventListener(EventKey.MSG_NEW_MARQUEE, this, this.onAddNewMarquee);
    }

    private unRegisterEvent(): void {
        EventMgr.Instance.RemoveListenner(EventKey.MSG_NEW_MARQUEE, this, this.onAddNewMarquee);
    }

    private getDataCur(): IMarqueeItem | null {
        let res = null;
        if (this.msgList.length > 0) {
            res = this.msgList[this.idx];

            this.idx++;
            this.idx = this.idx % this.msgList.length;
        }
        console.log("===========Marquee_Ctrl.getDataCur=============", res);
        return res;
    }

    /** 设置跑马灯数据 */
    public setLabTex(temp: cc.Node) {
        let desTitle = "";
        let desName = "";
        let desPrice = "";

        let data = this.getDataCur();

        let layout = temp.getChildByName("layout");
        let lab = temp.getChildByName("lab");
        let spIcon = temp.getChildByName("spIcon");

        let widthCur = 0;
        if (data) {
            let type = data.type;
            if (type == 1) { // V币
                this.mask.active = false;
                let labColor = "#ffffff";
                let labOpacity = 255 * 0.8;

                desTitle = Lngs.MarqueeDes1;
                desName = data.userName;
                desName = desName.slice(0, 4) + "..."; // 截取前六位
                let list = data.list;
                desPrice = `${desTitle} ${desName}${Lngs.MarqueeDes2}`;
                let labTitle = cc.instantiate(lab);
                labTitle.color = new cc.Color().fromHEX(labColor);
                labTitle.opacity = labOpacity;
                let title = labTitle.getComponent(cc.Label);
                title.string = desPrice;
                layout.addChild(labTitle);
                widthCur += labTitle.getContentSize().width;

                for (let i = 0; i < list.length; i++) {
                    // 礼物名称
                    const ele: client.money.tree.IGiftInfo = list[i];
                    let giftName = `${ele.giftName}`;
                    let labGift = cc.instantiate(lab);
                    let gift = labGift.getComponent(cc.Label);
                    gift.string = giftName;
                    layout.addChild(labGift);
                    labGift.color = new cc.Color().fromHEX(labColor);
                    labGift.opacity = labOpacity;
                    widthCur += labGift.getContentSize().width;

                    //礼物图标
                    let giftIcon = ele.icon || "";
                    let spGift = cc.instantiate(spIcon);
                    widthCur += spGift.getContentSize().width;
                    let sp = spGift.getChildByName("sp");
                    let icon = sp.getComponent(cc.Sprite);
                    CocosUtils.loadRemoteSprite(giftIcon, icon, () => {
                        let item = sp;
                        let item_size = item.getContentSize();
                        let parent_size = spGift.getContentSize();
                        item.setScale(parent_size.width / item_size.width)
                    })
                    layout.addChild(spGift);

                    // 礼物数量
                    let giftNum = `*${ele.num}  `;
                    let labNum = cc.instantiate(lab);
                    let num = labNum.getComponent(cc.Label);
                    num.string = giftNum;
                    layout.addChild(labNum);
                    labNum.color = new cc.Color().fromHEX(labColor);
                    labNum.opacity = labOpacity;
                    widthCur += labNum.getContentSize().width;

                    if (i < list.length - 1) {
                        let labEnd = cc.instantiate(lab);
                        let end = labEnd.getComponent(cc.Label);
                        labEnd.color = new cc.Color().fromHEX(labColor);
                        labEnd.opacity = labOpacity;
                        end.string = ", ";
                        layout.addChild(labEnd);
                        widthCur += labEnd.getContentSize().width;
                    }
                }

                let widget = layout.getComponent(cc.Widget);
                widget.updateAlignment();
            } else if (type == 2) { // 礼物
                this.mask.active = true;
                let labColor = "#FFEBB5E5"
                let labOpacity = 255 * 0.9;

                desTitle = Lngs.MarqueeDes1;
                desName = data.userName;
                desName = desName.slice(0, 4) + "..."; // 截取前六位
                let list = data.list;
                desPrice = `  ${desTitle} ${desName}${Lngs.MarqueeDes2}`;
                let labTitle = cc.instantiate(lab);
                labTitle.color = new cc.Color().fromHEX(labColor);
                labTitle.opacity = labOpacity;
                let title = labTitle.getComponent(cc.Label);
                title.string = desPrice;
                layout.addChild(labTitle);
                widthCur += labTitle.getContentSize().width;

                for (let i = 0; i < list.length; i++) {
                    const ele: client.money.tree.IGiftInfo = list[i];
                    let giftName = `${ele.giftName}*${ele.num}`;
                    let labGift = cc.instantiate(lab);
                    let gift = labGift.getComponent(cc.Label);
                    gift.string = giftName;
                    layout.addChild(labGift);
                    labGift.color = new cc.Color().fromHEX(labColor);
                    labGift.opacity = labOpacity;
                    widthCur += labGift.getContentSize().width;
                }
            }

            let maskSize = temp.parent.getContentSize();
            // console.log("========setTipAni============", maskSize.width, wwTotal);
            this.maskWidth = maskSize.width;
            this.richWidth = widthCur;
            console.log("===========Marquee_Ctrl.setLabTex=============", this.richWidth, this.maskWidth);
        }
    }

    // 跑马灯动画
    private async setTipAni() {
        let temp = cc.instantiate(this.tempPre);
        this.itemParent.destroyAllChildren();
        this.itemParent.addChild(temp);
        temp.y = -35;
        await this.setLabTex(temp);

        let t1 = cc.tween(temp).to(0, { opacity: 0 });
        let t2 = cc.tween(temp).by(0.5, { position: cc.v3(0, 35, 0), opacity: 255 }); //由下到中间
        let t3 = cc.tween(temp).delay(1);
        console.log("==========Marquee_Ctrl.setTipAni111===========", this.richWidth, this.maskWidth);
        if (this.richWidth > this.maskWidth) {
            let offsetX = this.richWidth - this.maskWidth + 30;
            console.log("==========setTipAni111===========", offsetX);
            let t31 = cc.tween(temp).by(offsetX / 200, { position: cc.v3(-offsetX, 0, 0) }); //由下到中间
            let t32 = cc.tween(temp).delay(1);
            t3 = cc.tween(temp).sequence(t31, t32);
        }
        let t4 = cc.tween(temp).by(0.5, { position: cc.v3(0, 35, 0), opacity: -255 }); //由中间到上
        let t6 = cc.tween(temp).by(0.1, { position: cc.v3(0, -70, 0) }); //由上移动到下
        let t8 = cc.tween(temp).call(() => {
            // 下一条
            this.setTipAni();
        });
        cc.Tween.stopAllByTarget(temp);
        cc.tween(temp).sequence(t1, t2, t3, t4, t6, t8)
            .removeSelf()
            .start();
    }

    /** 接受新的消息 */
    private onAddNewMarquee(uname: string, udata: client.money.tree.IRewardInfo) {
        let itme: IMarqueeItem = {
            userName: udata.nickname || "",
            list: [],
            type: 1
        }
        console.log("===========Marquee_Ctrl.onAddNewMarquee===============", udata);
        // 礼物数据
        let list = udata.reward || [];
        let temp: client.money.tree.IGiftInfo[] = [];
        if (list && list.length > 0) {
            itme.list = temp.concat(list);
            this.msgList.push(itme);
        }

        // V币数据
        // let payout = udata.payout || [];
        // if (payout.length > 0) {
        //     let itme2: IMarqueeItem = {
        //         userName: udata.nickname || "",
        //         list: [],
        //         type: 2
        //     }
        //     let itemV: client.money.tree.IGiftInfo = {
        //         giftName: "V币",
        //         num: 0,
        //     }
        //     payout.forEach((element) => {
        //         let reward = element.reward || 0;
        //         itemV.num += reward;
        //     });
        //     itme2.list.push(itemV);
        //     this.msgList.push(itme2);
        // }

        // 只保留最新的5条数据
        if (this.msgList.length > 5) {
            this.msgList.splice(0, this.msgList.length - 5);
        }
        this.idx = this.msgList.length - 1;
        console.log("===========Marquee_Ctrl.onAddNewMarquee1===============", this.msgList);
        // this.node.destroyAllChildren();
        if (this.isFirstMsg) {
            this.setTipAni();
        }
        this.isFirstMsg = false;
    }
}
