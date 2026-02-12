// 自定义消息的key;
export const EventKey = {
    Native_GetLiveInfo: "Native_GetLiveInfo", //获取主播信息
    Native_AppInfo: "Native_AppInfo", //获取app信息
    Native_UserInfo: "Native_UserInfo", //获取用户信息

    UI_Agree_True: "UI_Agree_True",
    UI_Notice_True: "UI_Notice_True",
    /** 展示免打扰通知 */
    UI_Notice: "UI_Notice",

    UI_Loading: "UI_Loading", //显示加载进度
    UI_LoadingEnd: "UI_LoadingEnd", //显示加载结束
    UI_GotoLogin: "UI_GotoLogin", //大厅返回到登录页
    /** 继续摇树 */
    UI_Continue: "UI_Continue",

    /** 更新瞄钻和龙币数据 */
    Update_Currency: "Update_Currency",

    /** 获取破魔券商城列表 */
    Http_Res_GetShopMoneyList: "Http_Res_GetShopMoneyList",
    /** 获取伐魔商城列表 */
    Http_Res_GetShopList: "Http_Res_GetShopList",
    /** 购买 */
    Http_Msg_ShopBuyRes: "Http_Msg_ShopBuyRes",

    /** 更新按钮的状态 */
    UI_UpadteBtnStatus: "UI_UpadteBtnStatus",
    /** 获取用户信息 瞄钻 */
    Http_Res_GetPlayerInfo: "Http_Res_GetPlayerInfo",
    /** 获取免打扰策略 */
    Http_Res_GetGameCfg: "Http_Res_GetGameCfg",
    /** 获取游戏货币 龙币 */
    Http_Res_GetAccountInfo: "Http_Res_GetAccountInfo",

    /** 获取个人记录 */
    Http_Res_GetRecordList: "Http_Res_GetRecordList",

    //---------------------------------------------
    /** 个人记录返回 */
    MSG_GETRECORD_LIST: "MSG_GETRECORD_LIST",
    /** 砸蛋的配置 */
    MSG_SMASHECFG: "MSG_SMASHECFG",

    MSG_SMASHEGGRES: "MSG_SMASHEGGRES",
    /** 砸蛋返回 */
    UI_MSG_SMASHEGGRES: "UI_MSG_SMASHEGGRES",
    /** 接受新的跑马灯 */
    MSG_NEW_MARQUEE: "MSG_NEW_MARQUEE",
    /** 重置状态 */
    UI_RESETGAME: "UI_RESETGAME",
    /** 播放树的动画 */
    UI_PLAYTREE: "UI_PLAYTREE",
    /** 停止树的动画 */
    UI_STOPTREE: "UI_STOPTREE",
};
