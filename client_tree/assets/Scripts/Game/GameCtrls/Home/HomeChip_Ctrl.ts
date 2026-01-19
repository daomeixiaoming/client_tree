import UIBase from "../../../Framework/Managers/UIBase";
import CocosUtils from "../../../Framework/Utils/CocosUtils";

const { ccclass, property } = cc._decorator;
/**
 * 奖励筹码
 */
@ccclass
export default class HomeChip_Ctrl extends UIBase {
    spIcon: any;
    labPrice: cc.Label;
    onLoad() {
        super.onLoad();
        this.initUI();
    }

    start() {

    }

    private initUI() {
        this.spIcon = this.ViewComponent("mid/icon/sp", cc.Sprite) as cc.Label;
        this.labPrice = this.ViewComponent("spTxt/labPrice", cc.Label) as cc.Label;
    }

    private setPrice(des: number) {
        if (this.labPrice) {
            this.labPrice.string = des.toString();
        }
    }

    private setIcon(img: string) {
        if (this.labPrice) {
            CocosUtils.loadRemoteSprite(img, this.spIcon, () => {
                if (this.spIcon) {
                    let item = this.spIcon.node;
                    let item_size = item.getContentSize();
                    let parent_size = this.spIcon.node.parent.getContentSize();
                    item.setScale(parent_size.width / item_size.width)
                }
            })
        }
    }

    public setData(data: { price: number, icon: string }) {
        if (data) {
            if (data.icon) {
                this.setIcon(data.icon);
            }
            if (data.price) {
                this.setPrice(data.price);
            }
        }
    }
}
