import EventMgr from "../../Framework/Managers/EventMgr";
import CocosUtils from "../../Framework/Utils/CocosUtils";
import DebugUtils from "../../Framework/Utils/DebugUtils";
import HttpUtils from "../../Framework/Utils/HttpUtils";
import { EventKey } from "../Config/EventCfg";
import { Lngs } from "../Config/LngCfg";
import { HttpResponse, RecordReq } from "../Config/MsgCfg";
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
    this.url = `${NetCfg.url}demon-slaying-api/`;
  }

  //------------------------------------------------------------通用数据-------------------------------------------------------------
  /**
   * 获取筹码配置 ok
   * @param page 
   */
  public GetChipCfg() {
    let url = NetCfg.url;
    url += "app-api/sea/chipConfig";
    let param = {};
    DebugUtils.Log("==========GetChipCfg==========", url);
    HttpUtils.Get(url, param, (err, udata) => {
      let data: HttpResponse = JSON.parse(udata);
      if (err) {
        CocosUtils.showToast(Lngs.GetChipCfgErr, 2);
        // DebugUtils.Log("==========GetChipCfg1==========", url);
        EventMgr.Instance.Emit(EventKey.Http_Res_GetChipCfg, null);
      } else {
        let code = data.code;
        let message = data.msg;
        let result = data.data;
        if (code === NetStatus.Normal) {
          console.log("==========GetChipCfg2==========", result);
          EventMgr.Instance.Emit(EventKey.Http_Res_GetChipCfg, result);
        } else {
          CocosUtils.showToast(message, 2);
          EventMgr.Instance.Emit(EventKey.Http_Res_GetChipCfg, null);
        }
      }
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

  /**
   * 获取中奖项结果数据 ok
   */
  public GetResultList() {
    let url = NetCfg.url;
    url += "app-api/sea/lotteryResults";
    let param = {};
    DebugUtils.Log("==========GetResultList==========", url);
    HttpUtils.Get(url, param, (err, udata) => {
      let data: HttpResponse = JSON.parse(udata);
      if (err) {
        CocosUtils.showToast(Lngs.GetResouleErr, 2);
        // DebugUtils.Log("==========GetResultList==========", url);
        EventMgr.Instance.Emit(EventKey.Http_Res_GetResultList, null);
      } else {
        let code = data.code;
        let message = data.msg;
        let result = data.data;
        if (code === NetStatus.Normal) {
          EventMgr.Instance.Emit(EventKey.Http_Res_GetResultList, result);
        } else {
          console.error("==========GetResultList123123==========", message, code);
          CocosUtils.showToast(message, 2);
          EventMgr.Instance.Emit(EventKey.Http_Res_GetResultList, null);
        }
      }
    });
  }

  /**
   * 获得返利配置, 开有数据返回，关无数据返回(封神榜配置)
   */
  public GetUserRebateConfig() {
    let url = NetCfg.url;
    url += "app-api/sea/userRebateConfig";
    let param = {};
    DebugUtils.Log("==========GetUserRebateConfig==========", url);
    HttpUtils.PostJson(url, null, JSON.stringify(param), (err, udata) => {
      let data: HttpResponse = JSON.parse(udata);
      if (err) {
        CocosUtils.showToast(Lngs.GetRecordErr, 2);
        DebugUtils.Log("==========GetUserRebateConfig1==========", url);
        EventMgr.Instance.Emit(EventKey.Http_Res_UserRebateConfig, null);
      } else {
        let code = data.code;
        let message = data.msg;
        let result = data.data;
        if (code === NetStatus.Normal) {
          DebugUtils.Log("==========GetUserRebateConfig2==========", result);
          EventMgr.Instance.Emit(EventKey.Http_Res_UserRebateConfig, result);
        } else {
          CocosUtils.showToast(message, 2);
          EventMgr.Instance.Emit(EventKey.Http_Res_UserRebateConfig, null);
        }
      }
    });
  }

  /**
   * 获得封神榜返利分页
   */
  public GetUserRebatePage(start: number, size: number = 10) {
    let url = NetCfg.url;
    url += "app-api/sea/userRebate";
    let param = {
      pageNo: start,
      pageSize: size
    };
    DebugUtils.Log("==========GetUserRebatePage==========", url);
    HttpUtils.PostJson(url, null, JSON.stringify(param), (err, udata) => {
      let data: HttpResponse = JSON.parse(udata);
      if (err) {
        CocosUtils.showToast(Lngs.GetRecordErr, 2);
        DebugUtils.Log("==========GetUserRebatePage1==========", url);
        EventMgr.Instance.Emit(EventKey.Http_Res_UserRebatePage, null);
      } else {
        let code = data.code;
        let message = data.msg;
        let result = data.data;
        if (code === NetStatus.Normal) {
          DebugUtils.Log("==========GetUserRebatePage2==========", result);
          EventMgr.Instance.Emit(EventKey.Http_Res_UserRebatePage, result);
        } else {
          CocosUtils.showToast(message, 2);
          EventMgr.Instance.Emit(EventKey.Http_Res_UserRebatePage, null);
        }
      }
    });
  }

  /**
 *  获得用户商城返利信息
 */
  public GetUserMallRebates() {
    let url = NetCfg.url;
    url += "app-api/sea/getUserMallRebates";
    let param = {};
    DebugUtils.Log("==========GetUserMallRebates==========", url);
    HttpUtils.PostJson(url, null, JSON.stringify(param), (err, udata) => {
      let data: HttpResponse = JSON.parse(udata);
      if (err) {
        CocosUtils.showToast(Lngs.GetRecordErr, 2);
        DebugUtils.Log("==========GetUserMallRebates1==========", url);
        EventMgr.Instance.Emit(EventKey.Http_Res_GetUserMallRebates, null);
      } else {
        let code = data.code;
        let message = data.msg;
        let result = data.data;
        if (code === NetStatus.Normal) {
          DebugUtils.Log("==========GetUserMallRebates2==========", result);
          EventMgr.Instance.Emit(EventKey.Http_Res_GetUserMallRebates, result);
        } else {
          CocosUtils.showToast(message, 2);
          EventMgr.Instance.Emit(EventKey.Http_Res_GetUserMallRebates, null);
        }
      }
    });
  }

  /**
   *  获取商城返利配置
   */
  public GetMallRebatesConf() {
    let url = NetCfg.url;
    url += "app-api/sea/getMallRebatesConf";
    let param = {};
    DebugUtils.Log("==========GetMallRebatesConf==========", url);
    HttpUtils.PostJson(url, null, JSON.stringify(param), (err, udata) => {
      let data: HttpResponse = JSON.parse(udata);
      if (err) {
        CocosUtils.showToast(Lngs.GetRecordErr, 2);
        DebugUtils.Log("==========GetMallRebatesConf1==========", url);
        EventMgr.Instance.Emit(EventKey.Http_Res_GetMallRebatesConf, null);
      } else {
        let code = data.code;
        let message = data.msg;
        let result = data.data;
        if (code === NetStatus.Normal) {
          DebugUtils.Log("==========GetMallRebatesConf2==========", result);
          EventMgr.Instance.Emit(EventKey.Http_Res_GetMallRebatesConf, result);
        } else {
          CocosUtils.showToast(message, 2);
          EventMgr.Instance.Emit(EventKey.Http_Res_GetMallRebatesConf, null);
        }
      }
    });
  }
}
