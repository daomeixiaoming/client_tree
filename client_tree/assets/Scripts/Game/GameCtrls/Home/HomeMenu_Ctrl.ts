import UIBase from "../../../Framework/Managers/UIBase";
import UIMgr from "../../../Framework/Managers/UIMgr";
import UIViewMgr from "../../Data/UIViewMgr";

const { ccclass, property } = cc._decorator;

/**
 * 菜单页
 */
@ccclass
export default class HomeMenu_Ctrl extends UIBase {
    spBg: cc.Node;
    onLoad() {
        console.log("================HomeMenu_Ctrl.onLoad================");
        super.onLoad();
        this.initUI();
    }

    start() {

    }

    private initUI() {
        this.AddButtonListener("node/bg/spBg/btn1", this, this.onHelpClick);
        this.AddButtonListener("node/bg/spBg/btn2", this, this.onRecordClick);
        this.AddButtonListener("node/bg", this, this.onCloseClick);

        this.spBg = this.view["node/bg/spBg"] as cc.Node;
        this.spBg.scaleX = 0;

        cc.Tween.stopAllByTarget(this.spBg);
        cc.tween(this.spBg)
            .to(0.1, { scaleX: 1 }, { easing: "sineOut" })
            .start()
    }

    private onHelpClick(button: cc.Button) {
        button.interactable = false;
        button.scheduleOnce(() => {
            button.interactable = true;
        }, 1);

        UIViewMgr.Instance.showHelp();
    }

    private onRecordClick(button: cc.Button) {
        button.interactable = false;
        button.scheduleOnce(() => {
            button.interactable = true;
        }, 1);

        UIViewMgr.Instance.showReward();
    }

    private onCloseClick(button: cc.Button) {
        cc.Tween.stopAllByTarget(this.spBg);
        cc.tween(this.spBg)
            .to(0.1, { scaleX: 0 }, { easing: "sineIn" })
            .call(() => {
                this.node.destroy();
            })
            .start()
    }
}
