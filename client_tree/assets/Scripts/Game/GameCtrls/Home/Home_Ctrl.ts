import NodePoolMgr from "../../../Framework/Managers/NodePoolMgr";
import UIBase from "../../../Framework/Managers/UIBase";
import { AbNames, UICfg } from "../../Config/ResCfg";
import UIViewMgr from "../../Data/UIViewMgr";

const { ccclass, property } = cc._decorator;
/**
 * 大厅主页
 */
@ccclass
export default class Home_Ctrl extends UIBase {
    /** 筹码的区域 */
    chipArea: cc.Node = null;
    /** 筹码的起始区间 */
    mask1: cc.Node = null;

    onLoad() {
        super.onLoad();
        this.initUI();
    }

    start() {

    }

    protected onDestroy(): void {
        // 清理节点池
        NodePoolMgr.Instance.ClearAllNodeInPool(AbNames.Prefabs, UICfg.HomeChip);
    }

    private initUI() {
        this.AddButtonListener("node/bg/btnClose", this, this.onBackClick);
        this.AddButtonListener("node/bg/btnMore", this, this.onMoreClick);
        this.AddButtonListener("node/bg/addBets/btn1", this, this.onAddBet1Click); //下注筹码
        this.AddButtonListener("node/bg/addBets/btn2", this, this.onAddBet2Click);
        this.AddButtonListener("node/bg/addBets/btn3", this, this.onAddBet3Click);
        this.AddButtonListener("node/bg/addBets/btn4", this, this.onAddBet4Click);

        this.chipArea = this.view["node/bg/chipArea"] as cc.Node;
        this.mask1 = this.view["node/bg/chipArea/spMask1"] as cc.Node;

        //加载节点池
        NodePoolMgr.Instance.AddNodePool(AbNames.Prefabs, UICfg.HomeChip, 20);
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

    private onAddBet1Click(button: cc.Button) {
        this.createChip();
    }

    private onAddBet2Click(button: cc.Button) {

    }

    private onAddBet3Click(button: cc.Button) {

    }

    private onAddBet4Click(button: cc.Button) {

    }

    private showRes() {

    }

    private getStart() {

    }

    private createChip() {
        let pre = NodePoolMgr.Instance.GetNodeInPool(AbNames.Prefabs, UICfg.HomeChip);
        let item = cc.instantiate(pre);
        item.setPosition(0, 0);
        this.chipArea.addChild(item);

        let startSize = this.mask1.getContentSize();

    }
}
