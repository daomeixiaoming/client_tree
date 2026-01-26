import EventMgr from "../../../Framework/Managers/EventMgr";
import { ResMgr } from "../../../Framework/Managers/ResMgr";
import UIBase from "../../../Framework/Managers/UIBase";
import { EventKey } from "../../Config/EventCfg";
import { GetRecordsReq, GetRecordsRes, LuckyEggRecordsResponse, RewardResponse } from "../../Config/MsgCfg";
import { AbNames, UICfg } from "../../Config/ResCfg";
import { GameData } from "../../Data/GameTest";
import NetHttpMgr from "../../Data/NetHttpMgr";
import RecordItem1_Ctrl from "./RecordItem1_Ctrl";
import RecordItem2_Ctrl from "./RecordItem2_Ctrl";
import RecordItem3_Ctrl from "./RecordItem3_Ctrl";
import RecordItem4_Ctrl from "./RecordItem4_Ctrl";

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
        let pre3 = ResMgr.Instance.getAsset(AbNames.Prefabs, UICfg.RecordItem3, cc.Prefab) as cc.Prefab;
        let pre4 = ResMgr.Instance.getAsset(AbNames.Prefabs, UICfg.RecordItem4, cc.Prefab) as cc.Prefab;


        for (let i = 0; i < list.length; i++) {
            const ele = list[i];
            let rlist = ele.rewardList;
            let total = 0;
            for (let j = 0; j < rlist.length; j++) {
                const element = rlist[j];
                total += element.giftPrice;
            }
            console.log("=========RecordView_Ctrl.onGetRecordListRes==11===========", total);
        }

        // 整理数据
        let list2 = this.compositeData(list);
        for (let i = 0; i < list2.length; i++) {
            let itme: LuckyEggRecordsResponse = list2[i];
            let pre = itme.rewardList.length > 6 ? pre1 : pre2;

            let rewards = itme.rewardList;
            if (rewards.length > 6 && rewards.length <= 12) {
                pre = pre1;
                let temp = cc.instantiate(pre);
                temp.parent = this.scrollView.content;
                temp.addComponent(RecordItem1_Ctrl);
                temp.emit("initData", itme);
            } else if (rewards.length <= 6) {
                pre = pre2;
                let temp = cc.instantiate(pre);
                temp.parent = this.scrollView.content;
                temp.addComponent(RecordItem2_Ctrl);
                temp.emit("initData", itme);
            } else if (rewards.length > 12 && rewards.length <= 18) {
                pre = pre3;
                let temp = cc.instantiate(pre);
                temp.parent = this.scrollView.content;
                temp.addComponent(RecordItem3_Ctrl);
                temp.emit("initData", itme);
            } else {
                pre = pre4;
                let temp = cc.instantiate(pre);
                temp.parent = this.scrollView.content;
                temp.addComponent(RecordItem4_Ctrl);
                temp.emit("initData", itme);
            }
        }
    }

    /**
 * 整理数据，统计个数
 * @param list 
 */
    private compositeData(list: LuckyEggRecordsResponse[]): LuckyEggRecordsResponse[] {
        console.log("===========compositeData1=============", list);
        let res = [];
        for (let i = 0; i < list.length; i++) {
            const ele = list[i];
            const time = ele.time;
            const rewardList = ele.rewardList;
            let temp: LuckyEggRecordsResponse = {
                rewardList: [],
                time: time,
            };
            let tempList: RewardResponse[] = [];
            for (let j = 0; j < rewardList.length; j++) {
                const ele2: RewardResponse = rewardList[j];
                ele2.num = 1;
                let rwTemp = tempList.find(item => item.giftId == ele2.giftId);
                if (!rwTemp) {
                    tempList.push(ele2);
                } else {
                    rwTemp.num += 1;
                }
            }
            temp.rewardList = [...tempList];
            res.push(temp);
        }
        console.log("===========compositeData2=============", res);
        return res;
    }
}
