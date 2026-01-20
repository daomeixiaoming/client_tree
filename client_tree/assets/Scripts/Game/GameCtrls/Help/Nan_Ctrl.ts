import UIBase from "../../../Framework/Managers/UIBase";
import NativeMgr, { NativeCfg } from "../../Data/NativeMgr";

const { ccclass, property } = cc._decorator;

/**
 * 金币不足
 */
@ccclass
export default class Nan_Ctrl extends UIBase {
    onLoad() {
        super.onLoad();
        this.initUI();
    }

    start() {

    }

    private initUI() {
        this.AddButtonListener("node/bg/btnClose", this, this.onCloseBtn);
        this.AddButtonListener("node/bg/btnGet", this, this.onGotoShop);
    }

    private onGotoShop() {
        NativeMgr.Instance.gotoShop();
        this.node.destroy();
    }
}
