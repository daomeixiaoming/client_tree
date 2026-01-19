import EventMgr from "../Framework/Managers/EventMgr";
import UIBase from "../Framework/Managers/UIBase";
import { client } from "../Proto/game_pb";
import { EventKey } from "./Config/EventCfg";
import { Lngs } from "./Config/LngCfg";


const { ccclass, property } = cc._decorator;
export interface IMarqueeItem {
    /** 用户名 */
    userName: string,
    /** 礼物名称 */
    priceName: string,
    /** 陆屋价值 */
    priceNum?: number,
}

/** 跑马灯UI */
@ccclass
export default class Marquee_Ctrl extends UIBase {
    /** 文字宽度 */
    richWidth: number;
    /** 外框宽度 */
    maskWidth: number;
    tempPre: cc.Node;

    /** 消息列表 */
    msgList: IMarqueeItem[] = [];
    idx: number = 0;
    /** 是否是第一条消息 */
    isFirstMsg: boolean = true;
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

        let item = this.view["richText"] as cc.Node;
        this.tempPre = cc.instantiate(item);
        item.destroy();

        // this.setLabTex();
    }

    private registerEvent(): void {
        EventMgr.Instance.AddEventListener(EventKey.MSG_NEW_MARQUEE, this, this.onAddNewMarquee);
    }

    private unRegisterEvent(): void {
        EventMgr.Instance.RemoveListenner(EventKey.MSG_NEW_MARQUEE, this, this.onAddNewMarquee);
    }

    private getDataCur() {
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
        // console.log("===========setLabTex=============", this.dataCur);
        let desTitle = "";
        let desName = "";
        let desPrice = "";

        let data = this.getDataCur();
        if (data) {
            desTitle = Lngs.MarqueeDes1;
            desName = data.userName;
            desPrice = Lngs.MarqueeDes2 + data.priceName;
        }
        let labRich = temp.getComponent(cc.RichText);
        // labRich.node.opacity = 255 * 0.8;
        // let color = labRich.node.color;
        // labRich.node.color = new cc.Color(color.r, color.g, color.b, 255 * 0.8);

        labRich.string = `<color=#ffffffcc>${desTitle}</c><color=#FFF3A7> ${desName} </color><color=#ffffff>${desPrice}</c>`;
        let wwTotal = temp.getContentSize().width;
        let maskSize = temp.parent.getContentSize();
        // console.log("========setTipAni============", maskSize.width, wwTotal);

        this.maskWidth = maskSize.width;
        this.richWidth = wwTotal;
    }

    // 跑马灯动画
    private setTipAni(): void {
        let temp = cc.instantiate(this.tempPre);
        this.node.destroyAllChildren();
        this.node.addChild(temp);
        temp.y = -35;
        this.setLabTex(temp);

        let t1 = cc.tween(temp).to(0, { opacity: 0 });
        let t2 = cc.tween(temp).by(0.5, { position: cc.v3(0, 35, 0), opacity: 255 }); //由下到中间
        let t3 = cc.tween(temp).delay(1);
        if (this.richWidth > this.maskWidth) {
            let offsetX = this.richWidth - this.maskWidth;
            // console.log("==========setTipAni111===========", offsetX);
            let t31 = cc.tween(temp).by(offsetX / 200, { position: cc.v3(-offsetX, 0, 0) }); //由下到中间
            let t32 = cc.tween(temp).delay(1);
            t3 = cc.tween(temp).sequence(t31, t32);
        }
        let t4 = cc.tween(temp).by(0.5, { position: cc.v3(0, 35, 0), opacity: -255 }); //由中间到上
        // let t5 = cc.tween(temp).delay(0.1);
        let t6 = cc.tween(temp).by(0.1, { position: cc.v3(0, -70, 0) }); //由上移动到下
        // let t7 = cc.tween(temp).delay(0.1);
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
    private onAddNewMarquee(uname: string, udata: client.lucky_egg.IRewardInfo) {
        let itme: IMarqueeItem = {
            userName: udata.nickname,
            priceName: ""
        }
        console.log("===========Marquee_Ctrl.onAddNewMarquee===============", udata);
        let list = udata.reward;
        list.forEach(ele => {
            itme.priceName += `${ele.giftName} x ${ele.num} `
        });
        this.msgList.push(itme);
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
