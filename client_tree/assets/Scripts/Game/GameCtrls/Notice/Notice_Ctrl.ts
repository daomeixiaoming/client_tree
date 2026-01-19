import EventMgr from "../../../Framework/Managers/EventMgr";
import UIBase from "../../../Framework/Managers/UIBase";
import UIMgr, { UILayer } from "../../../Framework/Managers/UIMgr";
import CocosUtils from "../../../Framework/Utils/CocosUtils";
import DebugUtils from "../../../Framework/Utils/DebugUtils";
import GameUtils from "../../../Framework/Utils/GameUtils";
import { EventKey } from "../../Config/EventCfg";
import { Lngs } from "../../Config/LngCfg";
import { NetCfg } from "../../Config/NetCfg";
import { AbNames, GuiCfg, UICfg } from "../../Config/ResCfg";
import UIViewMgr from "../../Data/UIViewMgr";

const { ccclass, property } = cc._decorator;
/**
 * 玩法公告
 */
@ccclass
export default class Notice_Ctrl extends UIBase {
    agreeTog: cc.Toggle;
    todayTog: cc.Toggle;
    labContent: cc.Label;
    bgNode: cc.Node;
    lab1: cc.Label;
    lab2: cc.Label;
    lab3: cc.Label;
    onLoad() {
        console.log("================Notice_Ctrl.onLoad============");
        super.onLoad();
        this.initUI();
        this.initData();
        this.registerEvent();
    }

    protected start(): void {
        this.RunAnimation("node/bg");
    }

    private initUI(): void {
        // let spBg = this.ViewComponent("node/bg", cc.Sprite) as cc.Sprite;
        // GameUtils.SetSpByAtals(spBg, GuiCfg.bg_help);

        this.agreeTog = this.ViewComponent("node/bg/sp_bg/tog1", cc.Toggle) as cc.Toggle;
        this.todayTog = this.ViewComponent("node/bg/sp_bg/tog2", cc.Toggle) as cc.Toggle;
        this.labContent = this.ViewComponent("node/bg/sp_bg/lab", cc.Label) as cc.Label;
        this.lab1 = this.ViewComponent("node/bg/sp_bg/tog1/lab", cc.Label) as cc.Label;
        this.lab2 = this.ViewComponent("node/bg/sp_bg/tog1/lab2", cc.Label) as cc.Label;
        this.lab3 = this.ViewComponent("node/bg/sp_bg/tog2/lab", cc.Label) as cc.Label;

        this.bgNode = this.view["node"] as cc.Node;

        this.AddButtonListener("node/bg/sp_bg/btn2", this, this.onBtnAgreeClick);
        this.AddButtonListener("node/bg/sp_bg/btn1", this, this.onBtnNotAgree);
        this.AddButtonListener("node/bg/sp_bg/tog1/lab2", this, this.onBtnShowAgree);
    }

    private initData(): void {
        this.lab1.string = Lngs.Notice_Txt1;
        this.lab2.string = Lngs.Notice_Txt2;
        this.lab3.string = Lngs.Notice_Txt3;
        this.labContent.string = Lngs.Notice;

        let str = cc.sys.localStorage.getItem("agree_notice");
        if (str) {
            this.agreeTog.isChecked = true;
        }
        this.todayTog.isChecked = true;
    }

    private registerEvent(): void {
        EventMgr.Instance.AddEventListener(EventKey.UI_Agree_True, this, this.onEventAgreeTrue);
    }

    private unRegisterEvent(): void {
        EventMgr.Instance.RemoveListenner(EventKey.UI_Agree_True, this, this.onEventAgreeTrue);
    }

    protected onDestroy(): void {
        this.unRegisterEvent();
        let time = new Date().getTime();
        cc.sys.localStorage.setItem("agree_notice_pop", time);
    }

    private onEventAgreeTrue(uname: string, udata: any): void {
        this.agreeTog.isChecked = true;
    }

    // 点击同意
    private onBtnAgreeClick(): void {
        if (!this.agreeTog.isChecked) {
            cc.sys.localStorage.setItem("agree_notice", "0");
            CocosUtils.showToast(Lngs.AgreeNotice);
            return;
        }
        if (this.todayTog.isChecked) {
            let date = new Date();
            cc.sys.localStorage.setItem("agree_notice_today" + NetCfg.gameType, "" + date.getDate());
        } else {
            cc.sys.localStorage.setItem("agree_notice_today" + NetCfg.gameType, "0");
        }
        cc.sys.localStorage.setItem("agree_notice", "1");

        cc.Tween.stopAllByTarget(this.bgNode);
        cc.tween(this.bgNode)
            .to(0.2, { position: cc.v3(0, -1500, 0) })
            .call(() => {
                this.node.destroy();
            })
            .start();

        EventMgr.Instance.Emit(EventKey.UI_Notice_True, "");
    }

    // 点击不同意
    private onBtnNotAgree(): void {
        // NativeMgr.Instance.backToApp();
        // 返回大厅
        EventMgr.Instance.Emit(EventKey.UI_GotoLogin, "");
        this.node.destroy();
    }

    // 点击弹出玩法约定界面
    private onBtnShowAgree() {
        UIViewMgr.Instance.showNotice(2);
    }
}
