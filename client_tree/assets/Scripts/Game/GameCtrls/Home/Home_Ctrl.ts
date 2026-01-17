import UIBase from "../../../Framework/Managers/UIBase";
import UIViewMgr from "../../Data/UIViewMgr";

const { ccclass, property } = cc._decorator;
/**
 * 大厅主页
 */
@ccclass
export default class Home_Ctrl extends UIBase {

    onLoad() {
        super.onLoad();
        this.initUI();
    }

    start() {

    }

    private initUI() {
        this.AddButtonListener("node/bg/btnClose", this, this.onBackClick);
        this.AddButtonListener("node/bg/btnMore", this, this.onMoreClick);
    }

    /**
     * 点击返回
     * @param button 
     */
    private onBackClick(button: cc.Button) {
        button.interactable = false;
        button.scheduleOnce(() => {
            button.interactable = true;
        }, 1);
    }

    /**
     * 点击菜单
     * @param button \
     */
    private onMoreClick(button: cc.Button) {
        button.interactable = false;
        button.scheduleOnce(() => {
            button.interactable = true;
        }, 1);

        UIViewMgr.Instance.showMenu();
    }
}
