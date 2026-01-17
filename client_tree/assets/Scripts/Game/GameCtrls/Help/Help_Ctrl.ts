import UIBase from "../../../Framework/Managers/UIBase";
import CocosUtils from "../../../Framework/Utils/CocosUtils";
import GameUtils from "../../../Framework/Utils/GameUtils";
import { GuiCfg } from "../../Config/ResCfg";
import GameLogic from "../../GameLogic";

const { ccclass, property } = cc._decorator;
/** 帮助界面 */
@ccclass
export default class Help_Ctrl extends UIBase {
    scrollView: cc.ScrollView;
    sp9Bg: cc.Node;

    onLoad() {
        super.onLoad();
        this.initUI();
    }

    start() {
        this.RunAnimation("node/bg");
    }

    private initUI() {
        let spBg = this.ViewComponent("node/bg", cc.Sprite) as cc.Sprite;
        // GameUtils.SetSpByAtals(spBg, GuiCfg.bg_help);

        this.AddButtonListener("node/bg/btnBack", this, this.onCloseBtn);

        // let sp_help = this.ViewComponent("node/bg/scrollView/view/content/item", cc.Sprite) as cc.Sprite;
        // let cfg = GameLogic.Instance.gameCfg;
        // if (cfg) {
        //     let paths = GameUtils.extractImgSrcWithRegex(cfg.regulation);
        //     if (paths.length > 0) {
        //         CocosUtils.loadRemoteSprite(paths[0], sp_help, () => { })
        //     }
        // }

        // this.sp9Bg = this.view["node/bg/scrollView/view/sp9Bg"] as cc.Node;

        // this.scrollView = this.ViewComponent("node/bg/scrollView", cc.ScrollView) as cc.ScrollView;
        // this.scrollView.node.on('scrolling', this.onScrolling, this);
        // this.scrollView.node.on('scroll-ended', this.onScrollEnded, this);
        // this.scrollView.node.on('scroll-to-bottom', this.onBounceBottom, this);
        // this.scrollView.node.on('bounce-top', this.onBounceTop, this);
    }

    // 滚动中
    private onScrolling(scrollView: cc.ScrollView) {
        this.checkScrollPosition();
    }

    // 滚动结束
    private onScrollEnded(scrollView: cc.ScrollView) {
        this.checkScrollPosition();
    }

    // 回弹到底部事件
    private onBounceBottom() {
        // console.log('回弹到底部');

    }

    // 回弹到顶部事件
    private onBounceTop() {
        // console.log('回弹到顶部');
    }

    // 获取当前滚动百分比 (0-1)
    private getScrollPercent(): number {
        const scrollView = this.scrollView;
        if (scrollView.vertical) {
            return scrollView.getScrollOffset().y / (scrollView.getMaxScrollOffset().y || 1);
        } else {
            return scrollView.getScrollOffset().x / (scrollView.getMaxScrollOffset().x || 1);
        }
    }


    // 检查滚动位置
    private checkScrollPosition() {
        const scrollView = this.scrollView;

        // 获取当前滚动百分比
        const currentPercent = this.getScrollPercent();

        // 检查是否滚动到底部
        if (this.isScrollToBottom()) {
            this.onScrollToBottom();
        }

        // 检查是否滚动到顶部
        if (this.isScrollToTop()) {
            this.onScrollToTop();
        }

        // 检查是否脱离底部
        if (this.isLeaveBottom()) {
            this.onLeaveBottom();
        }

        // 检查是否脱离顶部
        if (this.isLeaveTop()) {
            this.onLeaveTop();
        }
    }

    // 是否滚动到底部
    private isScrollToBottom(threshold: number = 0.01): boolean {
        return this.getScrollPercent() >= (1 - threshold);
    }

    // 是否滚动到顶部
    private isScrollToTop(threshold: number = 0.01): boolean {
        return this.getScrollPercent() <= threshold;
    }

    // 是否脱离底部（从底部向上滑动）
    private isLeaveBottom(threshold: number = 0.1): boolean {
        return this.getScrollPercent() < (1 - threshold);
    }

    // 是否脱离顶部（从顶部向下滑动）
    private isLeaveTop(threshold: number = 0.1): boolean {
        return this.getScrollPercent() > threshold;
    }

    // 滚动到底部时的回调
    private onScrollToBottom() {
        // console.log('滚动到底部');
        // 这里可以触发加载更多等操作
        this.sp9Bg.active = false;
    }

    // 滚动到顶部时的回调
    private onScrollToTop() {
        // console.log('滚动到顶部');
    }

    // 脱离底部时的回调
    private onLeaveBottom() {
        // console.log('脱离底部');
        this.sp9Bg.active = true;
    }

    // 脱离顶部时的回调
    private onLeaveTop() {
        // console.log('脱离顶部');
    }
}
