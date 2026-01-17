// 自定义消息的key;
export const EventKey = {
    Native_GetLiveInfo: "Native_GetLiveInfo", //获取主播信息
    Native_AppInfo: "Native_AppInfo", //获取app信息
    Native_UserInfo: "Native_UserInfo", //获取用户信息

    UI_Agree_True: "UI_Agree_True",
    UI_Notice_True: "UI_Notice_True",

    UI_Loading: "UI_Loading", //显示加载进度
    UI_LoadingEnd: "UI_LoadingEnd", //显示加载结束
    UI_GotoLogin: "UI_GotoLogin", //大厅返回到登录页

    /** 更新瞄钻和龙币数据 */
    Update_Currency: "Update_Currency",

    /** 获取破魔券商城列表 */
    Http_Res_GetShopMoneyList: "Http_Res_GetShopMoneyList",
    /** 获取伐魔商城列表 */
    Http_Res_GetShopList: "Http_Res_GetShopList",
    /** 购买 */
    Http_Msg_ShopBuyRes: "Http_Msg_ShopBuyRes",
    /** 点击筹码 */
    UI_CLICK_BET: "UI_CLICK_BET",
    /** 3圈阶段转动一圈结束，到达指定结果 */
    UI_ONECIRCLE: "UI_ONECIRCLE",
    /** 转圈阶段走一步结束 */
    UI_ONESTEP_OVER: "UI_ONESTEP_OVER",
    UI_ONESTEP_START: "UI_ONESTEP_START",
    /** 转圈结束，展示结果动画 */
    UI_ONECIRCLE_OVER: "UI_ONECIRCLE_OVER",
    /** 三选一开始 ，所有按钮置灰*/
    UI_CHOICEONE_ALLAN: "UI_CHOICEONE_ALLAN",
    /** 三选一结束 */
    UI_CHOICEONE_OVER: "UI_CHOICEONE_OVER",
    /** 移动起点 */
    UI_MOVE_START: "UI_MOVE_START",
    /** 移动终点 */
    UI_MOVE_END: "UI_MOVE_END",
    /** 3选一移动起点 */
    UI_MOVE_START3: "UI_MOVE_START3",
    /** 3选一移动终点 */
    UI_MOVE_END3: "UI_MOVE_END3",

    /** 展示中奖信息 */
    UI_START_END: "UI_START_END",
    /** 展示结算信息 */
    UI_END_INFO: "UI_END_INFO",
    /** 结算动画，具体的结算格子 */
    UI_SHOW_END_ANI: "UI_SHOW_END_ANI",
    /** 展示个人记录详情 */
    UI_RECORDDETIAL: "UI_RECORDDETIAL",
    /** 关闭个人记录详情 */
    UI_RECORDDETIAL_CLOSE: "UI_RECORDDETIAL_CLOSE",

    /** 更新大厅上面的记录 */
    UI_UPDATE_HOME_RECORD: "UI_UPDATE_HOME_RECORD",
    /** 初始化大厅上面的记录 */
    UI_INIT_HOME_RECORD: "UI_INIT_HOME_RECORD",
    /** 关闭大厅记录动画 */
    UI_CLOSE_HOME_RECORD: "UI_CLOSE_HOME_RECORD",

    /** 个人下注返回 */
    UI_ADDBET_RES: "UI_ADDBET_RES",
    /** 其他人下注的广播 */
    UI_OTHERBET_BCT: "UI_OTHERBET_BCT",
    /** 金币变更广播 */
    UI_GOLDUPDAte_BCT: "UI_GOLDUPDAte_BCT",
    /** 更新按钮的状态 */
    UI_UpadteBtnStatus: "UI_UpadteBtnStatus",
    /** 更新封神榜配置 */
    UI_UserRebateCfg: "UI_UserRebateCfg",
    /** UI层加入房间返回 */
    UI_WS_MSG_100: "UI_WS_MSG_100",
    /** UI层状态广播 */
    UI_WS_MSG_103: "UI_WS_MSG_103",

    /** 获取用户信息 瞄钻 */
    Http_Res_GetPlayerInfo: "Http_Res_GetPlayerInfo",
    /** 获取免打扰策略 */
    Http_Res_GetGameCfg: "Http_Res_GetGameCfg",
    /** 获取游戏货币 龙币 */
    Http_Res_GetAccountInfo: "Http_Res_GetAccountInfo",
    /** 获取中奖项结果数据*/
    Http_Res_GetResultList: "Http_Res_GetResultList",
    /** 获取个人记录 */
    Http_Res_GetRecordList: "Http_Res_GetRecordList",
    /** 获取筹码配置 */
    Http_Res_GetChipCfg: "Http_Res_GetChipCfg",
    /** 获取封神榜配置 */
    Http_Res_UserRebateConfig: "Http_Res_UserRebateConfig",
    /** 获取封神榜数据分页 */
    Http_Res_UserRebatePage: "Http_Res_UserRebatePage",
    /** 获得商城返利配置列表 */
    Http_Res_GetMallRebatesConf: "Http_Res_GetMallRebatesConf",
    /** 获得用户商城返利信息*/
    Http_Res_GetUserMallRebates: "Http_Res_GetUserMallRebates",

    /** 收到加入房间消息返回后去处理UI */
    WS_MSG_100: "WS_MSG_100",
    /** 收到消息，更新游戏状态 */
    WS_MSG_103: "WS_MSG_103",
    /** 中奖通知 */
    WS_MSG_105: "WS_MSG_105",
    /** 结算通知 */
    WS_MSG_106: "WS_MSG_106",

    WS_MSG_108: "WS_MSG_108",
    /** 金币发生变化 */
    WS_MSG_109: "WS_MSG_109",
};
