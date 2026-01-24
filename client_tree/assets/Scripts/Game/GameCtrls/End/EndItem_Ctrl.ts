import UIBase from "../../../Framework/Managers/UIBase";
import CocosUtils from "../../../Framework/Utils/CocosUtils";
import { RewardResponse, SmashEggItem } from "../../Config/MsgCfg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EndItem_Ctrl extends UIBase {
    spIcon: cc.Sprite;
    labNum: cc.Label;
    labName: cc.Label;
    labPrice: cc.Label;

    onLoad() {
        super.onLoad();
        this.initUI();
        this.node.on("initData", this.setData, this);
    }

    start() {

    }

    protected onDestroy(): void {
        this.node.off("initData", this.setData, this);
    }

    private initUI() {
        this.spIcon = this.ViewComponent("mid/icon/sp", cc.Sprite) as cc.Sprite;
        this.labNum = this.ViewComponent("mid/spTxt/labNum", cc.Label) as cc.Label;
        this.labName = this.ViewComponent("labName", cc.Label) as cc.Label;
        this.labPrice = this.ViewComponent("layout/labPrice", cc.Label) as cc.Label;
    }

    private setLabNum(num: number = 1) {
        if (this.labNum) {
            this.labNum.string = `X${num}`;
        }
    }


    private setLabName(name: string) {
        if (this.labName) {
            this.labName.string = name;
        }
    }

    private setLabPrice(price: number = 1) {
        if (this.labPrice) {
            this.labPrice.string = `${price}`;
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

    private setData(data: SmashEggItem) {
        if (data) {
            if (data.giftImage) {
                this.setIcon(data.giftImage);
            }
            if (data.giftPrice) {
                this.setLabPrice(data.giftPrice);
            }
            if (data.giftName) {
                this.setLabName(data.giftName);
            }
            let num = data.num || 1;
            this.setLabNum(num);
        }
    }
}
