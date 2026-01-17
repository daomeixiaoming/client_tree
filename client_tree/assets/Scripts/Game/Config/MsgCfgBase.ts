// 基础部分数据

/**
 * 货币类型  1货币(金币购买货币) 2礼物 3兑换金币(货币兑换金币)
 */
export const CategoryType = {
    /** 1货币(金币购买货币) */
    Coin2Currency: 1,
    /** 2礼物 */
    Gift: 2,
    /** 3兑换金币(货币兑换金币) */
    Currency2Coin: 3,
};


// 兔打扰策略：0不弹 1每次 2每日 3每周 4每月
export enum PopType {
    Pop_Nan = 0, //不弹
    Pop_Always, // 每次打开弹
    Pop_Day, //每天一次
    Pop_Week, // 每周一次
    Pop_Month, // 每月一次
}

/** 进入大厅的必要条件 */
export interface IEnterGameCfg {
    /** 标记app信息是否获取成功 */
    appInfoOver: boolean,
    /** 标记用户数据是否获取成功 */
    userInfoOver: boolean,
    /** 标记直播间数据是否成功*/
    liveInfoOver: boolean,
    /** 标记起步必须的资源是否加载完毕 */
    loadResOver: boolean,
    /** WS长连接是否连接成功 */
    isConnectWs: boolean,
}

//-----------------------------------------------------------------------------------------
// 游戏内部数据 
export interface GameUserAccountInfo {
    /**
     * 用户id
     */
    userId: number;
    /**
     * 游戏id
     */
    gameId: number;
    /**
     * 账户类型
     */
    type: number;
    /**
     * 图标
     */
    icon: string;
    /**
     * 数量 龙币
     */
    num: number;
    /**
     * 总消费
     */
    consumeTotalNum: number;
    /**
     * 历史总数量
     */
    historyTotalNum: number;
    /**
    * 名称
     */
    name: string;
}

//-------------------------------------------------------------------------------------------------------------------------------
/**
 * 游戏免打扰策略
 */
export interface IGameCfg {
    /**
     * 	主键
     */
    id: number,
    /**
     * 	游戏id
     */
    gameId: number,
    /**
     * 排序
     */
    sort: number,
    /**
     * 	游戏名称
     */
    gameName: string,
    /**
     * 游戏地址
     */
    gameUrl: string,
    /**
     * 游戏图标
     */
    gameIcon: string,
    /**
     * 启动状态：0未启动、1启动
     */
    status: number,
    /**
     * 	游戏玩法：1押注、2概率
     */
    gameType: number,
    /**
     * 	游戏资源配置(app本地加载使用)
     */
    manifestUrl: string,
    /**
     * 免打扰策略：0不弹 1每次 2每日 3每周 4每月
     */
    pop: number,
    /**
     * 	围观背景图
     */
    image: string,
    /**
     * 	助手飘屏
     */
    helperImage: string,
    /**
     * 去除围观背景图
     */
    notLookImage: string,
    /**
     * 游戏规制
     */
    regulation: string,
    /**
     * 创建时间
     */
    createTime: string
}
//------------------------------------------------------------------------------------------------------------------------------

/**
 * 用户数据返回
 */
export interface PlayerInfoResp {
    /***
   * 用户id
   */
    userId: number,
    /**
     * 喵钻余额
     */
    diamondBalance: number,
    /**
     * 	喵贝余额
     */
    seashellBalance: number,
}

/** 游戏货币数据 */
export interface GameInfoResp {
    /** 用户id */
    userId: number,
    /** 游戏id */
    gameId: number,
    /** 账户类型 */
    type: number,
    /** 图标 */
    icon: string,
    /** 数量 */
    num: number,
    /** 总消费 */
    consumeTotalNum: number,
    /** 历史总数量 */
    historyTotalNum: number,
    /** 名称 */
    name: string,
}
// -----------------------------------------商城 start---------------------------------------------
export interface ShopRequest {
    /**
     * 商品分类id列表，支持传多个为空时查所有， 1货币(金币购买货币) 2礼物 3兑换金币(货币兑换金币)
     */
    categoryIds?: string;
    /**
     * 游戏id
     */
    gameId?: number;
    /**
     * 页码
     * 显示数
     */
    offset?: number;
    /**
     * 当前记录起始索引
     * 当前页
     */
    pageNum?: number;
    /**
     * 每页显示记录数
     * 显示数
     */
    pageSize?: number;
    [property: string]: any;
}

export interface ShopResponse {
    /**
     * 列表
     */
    list?: ShopItem[];
    /**
     * 总数
     */
    total?: number;
}

/**
 * 单个商品
 */
export interface ShopItem {
    /**
     * 主键
     */
    id?: number;
    /**
     * 游戏id
     */
    gameId?: number;
    /**
     * 分类id 1货币(金币购买货币) 2礼物 3兑换金币(货币兑换金币)
     */
    categoryId?: number;
    /**
     * 商品图标
     */
    icon?: string;
    /**
     * 商品名称
     */
    name?: string;
    /**
     * 商品数量
     */
    num?: number;
    /**
     * 商品规格id，如礼物id等
     */
    skuId?: number;
    /**
     * 备注
     */
    remark?: string;

    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 商品价格
     */
    price?: number;
    /**
     * 价格名称
     */
    priceName?: string;
    /**
     * 价格图标
     */
    priceIcon?: string;
    [property: string]: any;
}

// 购买商品
export interface RequestShopBuy {
    /**
     * 商品分类id
     */
    categoryId?: number;
    /**
     * 游戏id
     */
    gameId?: number;
    /**
     * 商品id
     */
    productId?: number;
    [property: string]: any;
}

/**
 * 商城兑换购、买返回
 * PlayerInfoResp
 */
export interface ResShopBuy {
    /** 用户id */
    userId: number;
    /** 游戏id */
    gameId: number;
    /** 账户类型 */
    type: number;
    /** 图标 */
    icon: string;
    /** 数量 */
    num: number;
    /** 总消费 */
    consumeTotalNum: number;
    /** 历史总数量 */
    historyTotalNum: number;
    /** 历史总数量 */
    name: string;
}

// -----------------------------------------商城 end---------------------------------------------