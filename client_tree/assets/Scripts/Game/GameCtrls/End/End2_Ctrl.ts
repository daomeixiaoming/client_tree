import EventMgr from "../../../Framework/Managers/EventMgr";
import { ResMgr } from "../../../Framework/Managers/ResMgr";
import UIBase from "../../../Framework/Managers/UIBase";
import { EventKey } from "../../Config/EventCfg";
import { RewardResponse } from "../../Config/MsgCfg";
import { AbNames, UICfg } from "../../Config/ResCfg";
import EndItem_Ctrl from "./EndItem_Ctrl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class End2_Ctrl extends UIBase {
    layout: cc.Node;
    labPrice: cc.Label;
    onLoad() {
        super.onLoad();
        this.initUI();
        console.log("============End2_Ctrl.onLoad==================");
    }

    start() {
        this.RunAnimation("node/bg");
    }


    protected onDestroy(): void {
        EventMgr.Instance.Emit(EventKey.UI_STOPTREE, "");
    }

    private initUI() {
        this.AddButtonListener("node/bg/btnClose", this, this.onCloseBtn);
        this.layout = this.view["node/bg/layout2"] as cc.Node;
        this.labPrice = this.ViewComponent("node/bg/layout/labPrice", cc.Label) as cc.Label;
        this.labPrice.string = "";
    }

    public setData(data: RewardResponse[]) {
        let pre = ResMgr.Instance.getAsset(AbNames.Prefabs, UICfg.EndItem2, cc.Prefab) as cc.Prefab;
        if (data) {
            console.log("============End1_Ctrl.setData==================", data);
            let total = 0;
            for (let i = 0; i < data.length; i++) {
                const ele = data[i];
                let item = cc.instantiate(pre);
                item.addComponent(EndItem_Ctrl);
                this.layout.addChild(item);
                this.scheduleOnce(() => {
                    item.emit("initData", ele);
                })

                total += (ele.giftPrice * ele.num);
            }
            this.labPrice.string = `${total}`;
        }
    }
}
