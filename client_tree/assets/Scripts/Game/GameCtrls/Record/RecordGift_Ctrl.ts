
import UIBase from "../../../Framework/Managers/UIBase";
import CocosUtils from "../../../Framework/Utils/CocosUtils";
import { RewardResponse } from "../../Config/MsgCfg";

const { ccclass, property } = cc._decorator;
/**
 *  记录的单个礼物节点
 */
@ccclass
export default class RecordGift_Ctrl extends UIBase {
    spIcon: any;

    onLoad() {
        super.onLoad();
        this.initUI();
        this.node.on("initGift", this.setData, this);
    }

    start() {

    }

    protected onDestroy(): void {
        this.node.off("initGift", this.setData, this);
    }

    private initUI() {
        this.spIcon = this.ViewComponent("icon/sp", cc.Sprite);

    }

    public setData(data: RewardResponse) {

        let img = data.giftImage;
        if (img) {
            CocosUtils.loadRemoteSprite(img, this.spIcon, () => {
                if (this.spIcon) {
                    let item = this.spIcon.node;
                    let item_size = item.getContentSize();
                    let parent_size = this.spIcon.node.parent.getContentSize();
                    // item.scaleX = parent_size.width / item_size.width;
                    // item.scaleY = parent_size.height / item_size.height;
                    item.setScale(parent_size.width / item_size.width)
                }
            })
        }
    }
}
