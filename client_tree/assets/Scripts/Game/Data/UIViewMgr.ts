import { ResMgr } from "../../Framework/Managers/ResMgr";
import UIMgr, { UILayer } from "../../Framework/Managers/UIMgr";
import DebugUtils from "../../Framework/Utils/DebugUtils";
import { AbNames, UICfg } from "../Config/ResCfg";
import { ResPkg_Help, ResPkg_Menu, ResPkg_Nan, ResPkg_Nocice, ResPkg_Record, ResPkg_Shop } from "../Config/ResPkgHome";

const { ccclass, property } = cc._decorator;
/**
 * UI管理器
 */
@ccclass
export default class UIViewMgr extends cc.Component {
    atalsHomeSecond: cc.SpriteAtlas = null;

    public static Instance: UIViewMgr = null as unknown as UIViewMgr
    /** 加载完毕菜单 */
    isLoadMenu: boolean = false;
    /** 加载结算完毕 */
    isLoadEnd: boolean = false;
    /** 加载历史记录 */
    isLoadHistroyRecord: boolean = false;
    /** 加载Notice */
    isLoadNotice: boolean = false;
    /** 金币不足提示 */
    isLoadNan: boolean = false;
    /** 加载商城 */
    isLoadShop: boolean = false;
    /** 加载帮助 */
    isLoadHelp: boolean = false;
    /** 个人记录 */
    isLoadRecord: boolean = false;

    onLoad(): void {
        if (UIViewMgr.Instance === null) {
            UIViewMgr.Instance = this;
        } else {
            this.destroy();
            return;
        }
    }

    Init() {

    }

    /** 获取HomeSecond */
    public getHomeSecondAtals() {
        // ResMgrAsync.Instance.IE_GetAsset(AbNames.Atals, AtalsCfg.HomeSecond, cc.SpriteAtlas).then((res: cc.SpriteAtlas) => {
        //     this.atalsHome2 = res;
        //     callback(res);
        // });
    }

    /**
     * 展示个人记录 ok
     */
    public showReward() {
        if (this.isLoadRecord) {
            DebugUtils.Log("===========UIViewMgr.showReward2=================");
            UIMgr.Instance.ShowUIView(UICfg.Record, AbNames.Prefabs, UILayer.UI_Layer2);
        } else {
            ResMgr.Instance.preloadResPkg(ResPkg_Record, (now: any, total: any) => { },
                () => {
                    this.isLoadRecord = true;
                    DebugUtils.Log("===========UIViewMgr.showReward1=================");
                    UIMgr.Instance.ShowUIView(UICfg.Record, AbNames.Prefabs, UILayer.UI_Layer2);
                }
            );
        }
    }

    /**
     * 展示帮助 ok
     */
    public showHelp() {
        if (this.isLoadHelp) {
            DebugUtils.Log("===========UIViewMgr.showHelp1=================");
            UIMgr.Instance.ShowUIView(UICfg.Help, AbNames.Prefabs, UILayer.UI_Layer2);
        } else {
            ResMgr.Instance.preloadResPkg(ResPkg_Help, (now: any, total: any) => { },
                () => {
                    this.isLoadHelp = true;
                    DebugUtils.Log("===========UIViewMgr.showHelp2=================");
                    UIMgr.Instance.ShowUIView(UICfg.Help, AbNames.Prefabs, UILayer.UI_Layer2);
                }
            );
        }
    }

    /**
     * 展示菜单页 ok1
     */
    public showMenu() {
        if (this.isLoadMenu) {
            DebugUtils.Log("===========UIViewMgr.showMenu2=================");
            UIMgr.Instance.ShowUIView(UICfg.HomeMenu, AbNames.Prefabs, UILayer.UI_Layer2);
        } else {
            ResMgr.Instance.preloadResPkg(ResPkg_Menu, (now: any, total: any) => { },
                () => {
                    this.isLoadMenu = true;
                    DebugUtils.Log("===========UIViewMgr.showMenu=================");
                    UIMgr.Instance.ShowUIView(UICfg.HomeMenu, AbNames.Prefabs, UILayer.UI_Layer2);
                }
            );
        }
    }

    /**
     * 展示金币不足的提示
     */
    public showNan() {
        if (this.isLoadNan) {
            DebugUtils.Log("===========UIViewMgr.showNan2=================");
            UIMgr.Instance.ShowUIView(UICfg.Nan, AbNames.Prefabs, UILayer.UI_Layer2);
        } else {

            ResMgr.Instance.preloadResPkg(ResPkg_Nan, (now: any, total: any) => { },
                () => {
                    this.isLoadNan = true;
                    DebugUtils.Log("===========UIViewMgr.showNan1=================");
                    UIMgr.Instance.ShowUIView(UICfg.Nan, AbNames.Prefabs, UILayer.UI_Layer2);
                }
            );
        }
    }

    /**
     * 展示免打扰通知 ok
     * @param type 1 notice通知页 2 玩法公约页
     */
    public showNotice(type: number = 1) {
        if (this.isLoadNotice) {
            DebugUtils.Log("===========UIViewMgr.showNotice2=================");
            let path = type === 1 ? UICfg.Notice : UICfg.Agree;
            UIMgr.Instance.ShowUIView(path, AbNames.Prefabs, UILayer.UI_Layer2);
        } else {
            ResMgr.Instance.preloadResPkg(ResPkg_Nocice, (now: any, total: any) => { },
                () => {
                    DebugUtils.Log("===========UIViewMgr.showNotice2=================");
                    this.isLoadNotice = true;
                    let path = type === 1 ? UICfg.Notice : UICfg.Agree;
                    UIMgr.Instance.ShowUIView(path, AbNames.Prefabs, UILayer.UI_Layer2);
                }
            );
        }
    }

    /** 展示历史记录 ok */
    public showHistroyRecord() {
        // if (this.isLoadHistroyRecord) {
        //     DebugUtils.Log("===========UIViewMgr.showHistroyRecord1=================");
        //     UIMgr.Instance.ShowUIView(UICfg.HomeRecord, AbNames.Prefabs, UILayer.UI_Layer2);
        // } else {
        //     ResMgr.Instance.preloadResPkg(ResPkg_HistroyRecord, (now: any, total: any) => { },
        //         () => {
        //             this.isLoadHistroyRecord = true;
        //             DebugUtils.Log("===========UIViewMgr.showHistroyRecord2=================");
        //             UIMgr.Instance.ShowUIView(UICfg.HomeRecord, AbNames.Prefabs, UILayer.UI_Layer2);
        //         }
        //     );
        // }
    }
}
