export interface IAPPInfo {
    appVersion: string;
    deviceId: string;
    deviceName: string;
    deviceType: number;
    systemVersion: string;
    statusBarHeight: number; // 34
    navigationBarHeight: number;
    safeAreaInsetBottom: number; // 44
}

export interface HttpResponse {
    code?: number;
    message?: string;
    result?: HomeResponse;
    [property: string]: any;
}

export interface BoxInfo {
    /**
     * 宝箱数量
     */
    num?: number;
    /**
     * 宝箱类型，1为钻石宝箱，2为黄金宝箱，3为白银宝箱
     */
    type?: number;
    [property: string]: any;
}

export interface AttackInfo {
    /**
     * 攻击消耗破魔卷
     */
    price?: number;
    /**
     * 攻击类型，1为500，2为2500，3为5000
     */
    type?: number;
    [property: string]: any;
}

export interface HomeResponse {
    /**
     * 宝箱信息
     */
    attackList?: AttackInfo[];
    /**
     * 当前血量
     */
    blood?: number;
    /**
     * 宝箱信息
     */
    boxList?: BoxInfo[];
    /**
     * 最大血量
     */
    maxBlood?: number;
    /**
     * 复活时间戳
     */
    respawnAt?: number;
    /**
     * 剩余复活时间
     */
    respawnTimer?: number;
    [property: string]: any;
}
//---------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------

/** 封神榜单条数据 */
export interface GodsRecoredItem {
    /** 排行 */
    lv?: number;
    /** 名字 */
    name?: string;
    /** 头像 */
    avator?: string;
    /** 用户标签 */
    tags?: string[];
    /** 龙币数 */
    scores?: number;
    /** 特殊标签 */
    type?: string;
    /** 标签有效天数 */
    days?: number;
}

//---------------------------------------------------------------个人记录 start---------------------------------------------------------------------
/**
 * 个人记录
 */
export interface RecordReq {
    /**
     * 当前分页 当前分页
     */
    pageNum: number;
    [property: string]: any;
}

export interface RecordRes {
    /**
     * 详情
     */
    list: PersonalRecord[];
    /**
     * 总页数
     */
    total: number;
}

export interface PersonalRecord {
    /**
     * 局号
     */
    bureau?: number;
    /**
     * 本局详情
     */
    details?: RecordDetails[];
    /**
     * 是否车主
     * 是否车主1是 0否
     */
    isIncCar?: number;
    /**
     * 开奖结果
     */
    itemId?: number;
    /**
     * 用户战绩
     */
    record?: number;
    /**
     * 房间ID
     */
    roomId?: number;
    /**
     * 房间名称
     */
    roomName?: string;
    /**
     * 开奖结果
     * 开奖时间
     */
    time?: number;
    /**
     * 胜负
     * 胜负【1赢 2输】
     */
    win?: number;
    [property: string]: any;
}

export interface RecordDetails {
    /**
     * 投入
     */
    bet?: number;
    /**
     * 收获魔法石
     */
    energy?: number;
    /**
     * 押注项ID
     */
    itemId?: number;
    /**
     * 胜负
     * 胜负【1赢 2输 】
     */
    win?: number;
    [property: string]: any;
}
//---------------------------------------------------------------个人记录 end---------------------------------------------------------------------


/**--------------------------------------------------------中奖记录请求 start------------------------------------------------------------------ */
export interface LuckyEggRecordsResponse {
    /**
     * 奖励列表
     */
    rewardList?: RewardResponse[];
    time?: string;
    [property: string]: any;
}
export interface GetRecordsRes {
    /**
     * 是否为空
     */
    emptyFlag?: boolean;
    /**
     * 结果集
     */
    list?: LuckyEggRecordsResponse[];
    /**
     * 其他属性对象
     */
    otherAttribute?: Object;
    /**
     * 当前页
     */
    pageNum?: number;
    /**
     * 总页数
     */
    pages?: number;
    /**
     * 每页的数量
     */
    pageSize?: number;
    /**
     * 总记录数
     */
    total?: number;
}
/**--------------------------------------------------------中奖记录请求 end------------------------------------------------------------------ */


/**--------------------------------------------------------配置请求------------------------------------------------------------------ */
/** 请求配置数据 */
export interface SmashCfgRes {
    code?: number;
    msg?: string;
    data?: SmashCfgItem[];
    [property: string]: any;
}
export interface SmashCfgItem {
    /**
     * 抽奖消耗
     */
    cost?: number;
    /**
     * 抽奖类型
     */
    type?: number;
    [property: string]: any;
}
/**--------------------------------------------------------配置请求 end------------------------------------------------------------------ */

/**--------------------------------------------------------砸蛋请求------------------------------------------------------------------ */
/** 砸蛋请求 */
export interface SmashEggReq {
    /** 蛋的类型 金 银 钻 */
    type: number,
    /** 点击类型 1次 5次 10次 */
    num: number,
    /** 房间ID */
    roomId: number,
}

export interface SmashEggItem {
    giftId: number,
    giftImage: string,
    giftName: string,
    giftPrice: number,
    id: number,
    num?: number,
}
/**
 * LuckyEggSmashResponse
 */
export interface SmashEggRes {
    /**
     * 奖励列表
     */
    rewardList?: SmashEggItem[];
    /**
     * 总金币
     */
    totalMoney?: number;
    /**
     * 当前操作的蛋
     */
    type?: number;
    /** 
     * 点击类型 1次 5次 10次
     */
    num?: number
    [property: string]: any;
}
/**--------------------------------------------------------砸蛋请求 end------------------------------------------------------------------ */

/**--------------------------------------------------------中奖记录请求------------------------------------------------------------------ */
/** 中奖记录请求 */
export interface GetRecordsReq {
    /**
     * 排序字段
     */
    column?: string;
    /**
     * true正序|false倒序,默认true
     */
    isAsc?: boolean;
    /**
     * 页码(不能为空)
     */
    pageNo: number;
    /**
     * 每页数量(不能为空)
     */
    pageSize: number;
    /**
     * 是否查询总条数
     */
    searchCount?: boolean;
    /**
     * 排序字段集合，注意参数名encodeURI
     */
    sortItemList?: SortItem[];
    [property: string]: any;
}
export interface SortItem {
    /**
     * 排序字段
     */
    column: string;
    /**
     * true正序|false倒序
     */
    isAsc: boolean;
    [property: string]: any;
}
export interface RewardResponse {
    /**
     * 中奖的礼物id
     */
    giftId?: number;
    /**
     * 礼物图标
     */
    giftImage?: string;
    /**
     * 礼物价值
     */
    giftPrice?: number;
    /**
     * 中奖的id
     */
    id?: number;
    /**
     * 数量
     */
    num?: number;
}
export interface LuckyEggRecordsResponse {
    /**
     * 奖励列表
     */
    rewardList?: RewardResponse[];
    time?: string;
}
export interface GetRecordsRes {
    /**
     * 是否为空
     */
    emptyFlag?: boolean;
    /**
     * 结果集
     */
    list?: LuckyEggRecordsResponse[];
    /**
     * 其他属性对象
     */
    otherAttribute?: Object;
    /**
     * 当前页
     */
    pageNum?: number;
    /**
     * 总页数
     */
    pages?: number;
    /**
     * 每页的数量
     */
    pageSize?: number;
    /**
     * 总记录数
     */
    total?: number;
}
/**--------------------------------------------------------中奖记录请求 end------------------------------------------------------------------ */