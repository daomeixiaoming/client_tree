import UIBase from "../../../Framework/Managers/UIBase";

const { ccclass, property } = cc._decorator;
/**
 * 奖励筹码
 */
@ccclass
export default class HomeChip_Ctrl extends UIBase {
    spIcon: any;
    onLoad() {
        super.onLoad();
        this.initUI();
    }

    start() {

    }

    private initUI() {
        this.spIcon = this.ViewComponent("mid/icon/sp", cc.Sprite);

    }
}
