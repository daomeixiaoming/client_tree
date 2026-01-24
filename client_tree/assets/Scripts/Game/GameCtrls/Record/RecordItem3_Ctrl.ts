
import { ResMgr } from "../../../Framework/Managers/ResMgr";
import UIBase from "../../../Framework/Managers/UIBase";
import { LuckyEggRecordsResponse } from "../../Config/MsgCfg";
import { AbNames, UICfg } from "../../Config/ResCfg";
import RecordGift_Ctrl from "./RecordGift_Ctrl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RecordItem3_Ctrl extends UIBase {

    labScore: cc.Label;
    labTime: cc.Label;
    content: cc.Node;

    onLoad() {
        console.log("=============RecordItem2_Ctrl.onLoad===================");
        super.onLoad();
        this.initUI();
        this.node.on("initData", this.setData, this);
    }

    start() {

    }

    protected onDestroy(): void {
        this.node.off("initData", this.setData, this);
    }

    private initUI() {
        this.labTime = this.ViewComponent("labTime", cc.Label) as cc.Label;
        this.labScore = this.ViewComponent("labPrices/labNum", cc.Label) as cc.Label;
        this.setTime("");
        this.setScore(0);

        this.content = this.view["layout"] as cc.Node;
    }

    private setTime(time: string) {
        this.labTime.string = time;
    }

    private setScore(num: number) {
        this.labScore.string = `${num}`;
    }

    private setData(data: LuckyEggRecordsResponse) {
        console.log("=============RecordItem2_Ctrl.setData===================");
        let list = data.rewardList;
        if (list) {
            let pre = ResMgr.Instance.getAsset(AbNames.Prefabs, UICfg.RecordGift, cc.Prefab) as cc.Prefab;
            this.content.destroyAllChildren();
            let totalPrice = 0;
            for (let i = 0; i < list.length; i++) {
                let item = cc.instantiate(pre);
                this.content.addChild(item);
                item.addComponent(RecordGift_Ctrl);
                item.emit("initGift", list[i]);

                totalPrice += list[i].giftPrice;
            }
            this.setScore(totalPrice);
        }

        let time = data.time;
        if (time) {
            this.setTime(time);
        }
    }
}
