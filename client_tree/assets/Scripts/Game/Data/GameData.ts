// for (let i = 0; i < 20; i++) {
//     const temp: GiftItem = {
//         giftId: i,
//         giftName: "测试_" + i,
//         giftPrice: 100 + (i * 50),
//         image: "https://pic1.arkoo.com/56D0B40F99F841DF8A2425762AE2565D/picture/o_1i4qop009177v1tgf14db15he1iaj1is.jpg",
//         num: 10 + (i * 2)
//     }
//     data.list.push(temp);
// }

/** 游戏状态 */
export enum GameStatus {
    /** 准备中 */
    STATUS_READY = 1,
    /** 修仙中(下注阶段) */
    STATUS_BET,
    /** 聚气中(展示阶段) */
    STATUS_SHOW,
    /** 封神时刻(结算阶段) */
    STATUS_END,
}

/** 筹码类型 */
export const BetOptions = {
    /** 珍珠 */
    Chip1: 1,
    /** 玉珠 */
    Chip2: 2,
    /** 海珠 */
    Chip3: 3,
    /** 八宝袋 */
    Chip4: 4,
    /** 长生葫 */
    Chip5: 5,
}

/**
 * 输赢状态
 * / 0未参与 1赢 2输
 */
export const WinType = {
    /** 0未参与 */
    TypeNan: 0,
    /** 1赢  */
    TypeWin: 1,
    /** 2输 */
    TYpeLose: 2
}

/** 更新游戏状态 */
export interface IUpdateGameStatus {
    /** 游戏状态 */
    gameStatus: number,
    /** 时间 */
    time: number,
}

/** 下注返回*/
export interface IAddBetRes {
    /** 筹码类型 */
    chipType: number,
    /** 角色类型下注的区域， 八个区域 */
    roleType: number,
    /** 我自己的下注数量 */
    myBetnum: number,
}

/** 展示阶段的数据 */
export interface IGameShow {
    /** 索引数组，升序排序 */
    idxList: number[],
    /** 结果的索引 */
    resIdx: number,
}