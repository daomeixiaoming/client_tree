import EventMgr from "../../../Framework/Managers/EventMgr";
import { ResMgr } from "../../../Framework/Managers/ResMgr";
import UIBase from "../../../Framework/Managers/UIBase";
import { EventKey } from "../../Config/EventCfg";
import { GetRecordsReq, GetRecordsRes, LuckyEggRecordsResponse } from "../../Config/MsgCfg";
import { AbNames, UICfg } from "../../Config/ResCfg";
import { GameData } from "../../Data/GameTest";
import NetHttpMgr from "../../Data/NetHttpMgr";
import RecordItem1_Ctrl from "./RecordItem1_Ctrl";
import RecordItem2_Ctrl from "./RecordItem2_Ctrl";

const { ccclass, property } = cc._decorator;
/**
 * 我的记录页
 */
@ccclass
export default class Record_Ctrl extends UIBase {
    nanBg: cc.Node;
    scrollView: cc.ScrollView;
    /** 起始页 */
    startPage: number = 1;
    onLoad() {
        super.onLoad();
        this.initUI();
        this.registerEvent();
    }

    start() {
        // let data = GameData.record.data as GetRecordsRes;
        // this.onGetRecordListRes("", data);

        this.getListData();
    }

    protected onDestroy(): void {
        this.unRegisterEvent();
    }

    private initUI() {
        this.AddButtonListener("node/bg/btnBack", this, this.onCloseBtn);

        this.nanBg = this.view["node/bg/nanBg"] as cc.Node;
        this.setNanStatus(false);

        this.scrollView = this.ViewComponent("node/bg/scrollView", cc.ScrollView) as cc.ScrollView;
    }

    private registerEvent() {
        EventMgr.Instance.AddEventListener(EventKey.Http_Res_GetRecordList, this, this.onGetRecordListRes);
    }

    private unRegisterEvent() {
        EventMgr.Instance.RemoveListenner(EventKey.Http_Res_GetRecordList, this, this.onGetRecordListRes);
    }

    private setNanStatus(active: boolean) {
        this.nanBg.active = active;
    }

    // 请求数据
    private getListData() {
        let req: GetRecordsReq = {
            pageNo: this.startPage,
            pageSize: 10
        }
        NetHttpMgr.Instance.GetRecordListReq(req);
    }

    /**
  *  获取记录返回
  */
    private onGetRecordListRes(uname: string, udata: GetRecordsRes) {
        if (!udata) {
            return;
        }
        console.log("===============RecordView_Ctrl.onGetRecordListRes=============", udata);
        let list = udata.list;
        if (this.startPage === 1) {
            this.setNanStatus(list.length > 0 ? false : true);
        }
        this.startPage++;
        let pre1 = ResMgr.Instance.getAsset(AbNames.Prefabs, UICfg.RecordItem1, cc.Prefab) as cc.Prefab;
        let pre2 = ResMgr.Instance.getAsset(AbNames.Prefabs, UICfg.RecordItem2, cc.Prefab) as cc.Prefab;

        for (let i = 0; i < list.length; i++) {
            let itme: LuckyEggRecordsResponse = udata.list[i];
            let pre = itme.rewardList.length > 6 ? pre1 : pre2;

            let temp = cc.instantiate(pre);
            temp.parent = this.scrollView.content;
            let rewards = itme.rewardList;
            if (itme.rewardList.length > 6) {
                temp.addComponent(RecordItem1_Ctrl);
            } else {
                temp.addComponent(RecordItem2_Ctrl);
            }
            temp.emit("initData", itme);
        }
    }
}
