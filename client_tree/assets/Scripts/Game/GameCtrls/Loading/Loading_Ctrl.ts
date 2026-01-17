import EventMgr from "../../../Framework/Managers/EventMgr";
import UIBase from "../../../Framework/Managers/UIBase";
import { EventKey } from "../../Config/EventCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Loading_Ctrl extends UIBase {
    sp_bar: cc.Sprite;
    onLoad() {
        console.log("================Loading_Ctrl.onLoad================");
        super.onLoad();
        this.initUI()
    }

    start() {
        this.registerEvent()
    }

    protected onDestroy(): void {
        this.unRegisterEvent();
    }

    private initUI(): void {
        this.sp_bar = this.ViewComponent("node/bg/spBarBg/spBar", cc.Sprite) as cc.Sprite;
        this.updatePre(0);
    }

    private updatePre(pre: number): void {
        this.sp_bar.fillRange = pre;
    }

    private registerEvent(): void {
        EventMgr.Instance.AddEventListener(EventKey.UI_Loading, this, this.onUIEventLoading);
    }

    private unRegisterEvent(): void {
        EventMgr.Instance.RemoveListenner(EventKey.UI_Loading, this, this.onUIEventLoading);
    }

    // 显示加载进度
    private onUIEventLoading(uname: string, udata: number): void {
        this.updatePre(udata);
    }
}
