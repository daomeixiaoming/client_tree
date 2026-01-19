import EventMgr from "../../Framework/Managers/EventMgr";
import CocosUtils from "../../Framework/Utils/CocosUtils";
import DebugUtils from "../../Framework/Utils/DebugUtils";
import HttpUtils from "../../Framework/Utils/HttpUtils";
import { EventKey } from "../Config/EventCfg";
import { Lngs } from "../Config/LngCfg";
import { GetRecordsReq, GetRecordsRes, HttpResponse, RecordReq, SmashEggReq, SmashEggRes } from "../Config/MsgCfg";
import { NetCfg } from "../Config/NetCfg";
import NetHttpBase, { NetStatus } from "./NetHttpBase";

const { ccclass, property } = cc._decorator;

/**
 * 游戏相关的短链接处理
 */
@ccclass
export default class NetHttpMgr extends NetHttpBase {
  public static Instance: NetHttpMgr = null as unknown as NetHttpMgr;

  onLoad(): void {
    if (NetHttpMgr.Instance === null) {
      NetHttpMgr.Instance = this;
    } else {
      this.destroy();
      return;
    }
  }

  public Init(): void {
    DebugUtils.Log("========NetHttpMgr Init==========");
    this.url = NetCfg.url;
    this.url = `${NetCfg.url}app-api/`;
  }

  //------------------------------------------------------------通用数据-------------------------------------------------------------
  /**
  * 砸蛋的请求 ok
  * Api文档: https://dev.jumiao.live/doc.html#/lucky-egg-server/%E7%94%A8%E6%88%B7%20App-%E7%A0%B8%E8%9B%8B/smash
  * @param req 
  */
  public SmashEggReq(data: SmashEggReq) {
    let url = this.url;
    url += "lucky-egg/smash";
    let body = data;
    HttpUtils.PostJson(url, null, JSON.stringify(body), (err, udata) => {
      let data: HttpResponse = JSON.parse(udata);
      let res = null;
      if (err) {
        console.error("=============NetHttpMgr.SmashEggReq.error============", data);
      } else {
        let code = data.code;
        let message = data.msg;
        let result = data.data as SmashEggRes;
        console.log("=============NetHttpMgr.SmashEggReq============", data);
        if (code === NetStatus.Normal && result) {
          res = result;
        } else {
          CocosUtils.showToast(message, 2);
        }
      }
      EventMgr.Instance.Emit(EventKey.MSG_SMASHEGGRES, res);
    });
  }

  /**
 * 获取记录 ok
 * Api文档：
 * @param pageNum 页数
 * @param pageSize 每页数量
 */
  public GetRecordListReq(data: GetRecordsReq) {
    let url = this.url;
    url += "lucky-egg/records";
    let body = data;
    HttpUtils.PostJson(url, null, JSON.stringify(body), (err, udata) => {
      let data: HttpResponse = JSON.parse(udata);
      let res = null;
      if (err) {
        console.error("=============GetRecordListReq.error============", data);
      } else {
        let code = data.code;
        let message = data.msg;
        let result = data.data as GetRecordsRes;
        console.log("=============GetRecordListReq============", data);
        if (code === NetStatus.Normal && result) {
          res = result;
        } else {
          CocosUtils.showToast(message, 2);
        }
      }
      EventMgr.Instance.Emit(EventKey.Http_Res_GetRecordList, res);
    });
  }


  /**
   * 获取个人记录 ok
   */
  public GetRecordList(page: number = 1) {
    let url = NetCfg.url;
    url += "app-api/sea/userRecord";
    let param: RecordReq = {
      pageNum: page
    };
    DebugUtils.Log("==========GetRecordList==========", url);
    HttpUtils.PostJson(url, null, JSON.stringify(param), (err, udata) => {
      let data: HttpResponse = JSON.parse(udata);
      if (err) {
        CocosUtils.showToast(Lngs.GetRecordErr, 2);
        DebugUtils.Log("==========GetRecordList1==========", url);
        EventMgr.Instance.Emit(EventKey.Http_Res_GetRecordList, null);
      } else {
        let code = data.code;
        let message = data.msg;
        let result = data.data;
        if (code === NetStatus.Normal) {
          DebugUtils.Log("==========GetRecordList2==========", result);
          EventMgr.Instance.Emit(EventKey.Http_Res_GetRecordList, result);
        } else {
          CocosUtils.showToast(message, 2);
          EventMgr.Instance.Emit(EventKey.Http_Res_GetRecordList, null);
        }
      }
    });
  }
}
