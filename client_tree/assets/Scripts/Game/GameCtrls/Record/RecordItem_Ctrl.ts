import UIBase from "../../../Framework/Managers/UIBase";

const { ccclass, property } = cc._decorator;
/** 
 *  历史记录的单个节点
 */
@ccclass
export default class RecordItem_Ctrl extends UIBase {
    labTime: cc.Label;
    labScore: cc.Label;
    content: cc.Node;
    onLoad() {
        super.onLoad();
        this.initUI();
    }

    start() {

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
}
