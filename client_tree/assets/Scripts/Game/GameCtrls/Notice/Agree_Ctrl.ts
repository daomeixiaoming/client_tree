import EventMgr from "../../../Framework/Managers/EventMgr";
import UIBase from "../../../Framework/Managers/UIBase";
import { EventKey } from "../../Config/EventCfg";
import { Lngs } from "../../Config/LngCfg";

const { ccclass, property } = cc._decorator;
/**
 * 玩法公约
 */
@ccclass
export default class Agree_Ctrl extends UIBase {
    labContent: cc.Label;
    notice_bg: cc.Node;
    onLoad() {
        super.onLoad();
        this.initUI();
    }

    private initUI(): void {
        this.AddButtonListener("content/notice_bg/btnClose", this, this.onBtnCloseClick);
        this.AddButtonListener("content/notice_bg/btnAgreeClose", this, this.onBtnClick);
        this.labContent = this.ViewComponent("content/notice_bg/ScrollView/view/content/Label", cc.Label) as cc.Label;

        this.notice_bg = this.view["content/notice_bg"] as cc.Node;
        this.notice_bg.y = -1362;
        cc.Tween.stopAllByTarget(this.notice_bg);
        cc.tween(this.notice_bg)
            .to(0.3, { position: cc.v3(0, -262, 0) }, { easing: 'quadOut' })
            .start();
    }

    protected start(): void {
        this.labContent.string = Lngs.Agree;
    }

    private onBtnClick(): void {
        cc.sys.localStorage.setItem("agree_notice", "1");
        EventMgr.Instance.Emit(EventKey.UI_Agree_True, "");
        this.onBtnCloseClick();
    }

    private onBtnCloseClick(): void {
        // 添加音效
        cc.Tween.stopAllByTarget(this.notice_bg);
        cc.tween(this.notice_bg).to(0.3, { position: cc.v3(0, -1362, 0) }).call(() => {
            this.node.destroy();
        }).start();
    }
}
