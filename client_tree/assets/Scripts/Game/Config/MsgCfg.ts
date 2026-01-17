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

// 礼物item数据
export interface GiftItem {
    /**礼物id */
    giftId?: number;
    /**礼物名字 */
    giftName?: string;
    /**礼物间隔 */
    giftPrice?: number;
    /**礼物图标 */
    image?: string;
    /**礼物数量 */
    num?: number;
    [property: string]: any;
}

//---------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------
export interface GameEnd {
    list: GiftItem[]
}

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

//---------------------------------------------------------------中奖记录 start---------------------------------------------------------------------
export interface ResultRes {
    code?: number;
    message?: string;
    result?: number[];
    [property: string]: any;
}
//---------------------------------------------------------------中奖记录 end---------------------------------------------------------------------

//---------------------------------------------------------------筹码配置 start---------------------------------------------------------------------
/** 筹码返回数据 */
export interface ChipConfigRes {
    /**
     * 筹码
     */
    chip: number;
    /**
     * 可选项ID
     */
    optionId: number;
}
//---------------------------------------------------------------筹码配置 end---------------------------------------------------------------------


//---------------------------------------------------------------封神榜 start---------------------------------------------------------------------
/** 返利配置返回item */
export interface IuserRebateConfig {
    no: string,
    rate: number,
}

export interface IUser {
    /** 类型 1-用户等级（财富），2-主播等级（明星），3-vip等级	 */
    type: number,
    /** 等级 */
    level: number,
    /** 图标 */
    icon: string,
    /** 标签名字 */
    name: string,
}

export interface IUser {
    /** 类型 1-用户等级（财富），2-主播等级（明星），3-vip等级	 */
    type: number,
    /** 等级 */
    level: number,
    /**图标 */
    icon: string,
    /** 标签名字 */
    name: string
}

/**
 * 返利数据分页item
 */
export interface IIuserRebatePageItem {
    /** 用户id */
    userId: number,
    /** 用户外显id */
    userNum: number,
    /** 用户类型 1-用户，2-主播 */
    userType: number,
    /** 用户昵称 */
    nickname: string,
    /** 头像 */
    avatar: string,
    /** 性别（1：男，2：女） */
    sex: number,
    /** 用户等级 */
    userLevel: number,
    /** 用户标签 */
    userLabelList: IUser[],
    /** 返利铭牌 */
    rebateLabel: IUser,
    /** 排名 */
    no: number,
    /** 返利魔法石 */
    rebateBet: number,
    /** 消耗魔法石*/
    totalBet: number,
    /** 返利比例‰ */
    rate: number,
    /** 返利时间 */
    rebateTime: string
}

/** 分页数据返回 */
export interface IIuserRebatePageRes {
    list: IIuserRebatePageItem[],
    total: number,
}

//---------------------------------------------------------------封神榜 end---------------------------------------------------------------------

//---------------------------------------------------------------商城返利 start---------------------------------------------------------------------
export interface IIGetMallRebatesCfg {
    /** 每日兑换礼物价值 */
    giftPrice: number,
    /** 平台返利，百分比 */
    rebates: number
}
/** 商城返利配置列表 */
export interface IGetMallRebatesConfRes {
    /** 活动开关 */
    activitySwitch: boolean,
    /** 活动开始时间 */
    startTime: string,
    /** 活动结束时间 */
    endTime: string,
    /** 配置 */
    items: IIGetMallRebatesCfg[],
}

export interface IgetUserMallRebates {
    /** 当前等级 */
    level: number,
    /** 最大等级 */
    maxLevel: number,
    /** 购买兑换礼物价值 */
    value: number,
    /** 与下一级的差距，如果是-1，表示没有下一级了 */
    need: number,
    /** 下一级的返利比例，如果是-1，表示没有下一级了 */
    next: number
}