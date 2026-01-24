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

export interface IPos {
    posStart: cc.Vec3,
    posEnd: cc.Vec3
}

export const list5 = [
    [
        { posStart: cc.v3(400, 0), posEnd: cc.v3(400, 230), },
        { posStart: cc.v3(250, 30), posEnd: cc.v3(250, 320), },
        { posStart: cc.v3(530, 8), posEnd: cc.v3(530, 360), },
        { posStart: cc.v3(440, 20), posEnd: cc.v3(440, 450), },
        { posStart: cc.v3(300, 20), posEnd: cc.v3(300, 500), },
    ],
    [
        { posStart: cc.v3(425, 0), posEnd: cc.v3(425, 230), },
        { posStart: cc.v3(140, 30), posEnd: cc.v3(140, 320), },
        { posStart: cc.v3(610, 8), posEnd: cc.v3(610, 360), },
        { posStart: cc.v3(370, 20), posEnd: cc.v3(370, 380), },
        { posStart: cc.v3(300, 20), posEnd: cc.v3(300, 540), },
    ],
    [
        { posStart: cc.v3(425, 0), posEnd: cc.v3(425, 230), },
        { posStart: cc.v3(140, 30), posEnd: cc.v3(140, 320), },
        { posStart: cc.v3(610, 8), posEnd: cc.v3(610, 360), },
        { posStart: cc.v3(300, 20), posEnd: cc.v3(300, 280), },
        { posStart: cc.v3(420, 20), posEnd: cc.v3(420, 400), },
    ],
    [
        { posStart: cc.v3(425, 0), posEnd: cc.v3(425, 560), },
        { posStart: cc.v3(175, 30), posEnd: cc.v3(175, 442), },
        { posStart: cc.v3(610, 8), posEnd: cc.v3(610, 360), },
        { posStart: cc.v3(238, 20), posEnd: cc.v3(238, 280), },
        { posStart: cc.v3(381, 20), posEnd: cc.v3(381, 400), },
    ],
    [
        { posStart: cc.v3(425, 0), posEnd: cc.v3(425, 436), },
        { posStart: cc.v3(174, 30), posEnd: cc.v3(174, 418), },
        { posStart: cc.v3(610, 8), posEnd: cc.v3(610, 301), },
        { posStart: cc.v3(238, 20), posEnd: cc.v3(238, 280), },
        { posStart: cc.v3(415, 20), posEnd: cc.v3(415, 273), },
    ],
    [
        { posStart: cc.v3(425, 0), posEnd: cc.v3(425, 570), },
        { posStart: cc.v3(247, 30), posEnd: cc.v3(247, 488), },
        { posStart: cc.v3(543, 8), posEnd: cc.v3(543, 431), },
        { posStart: cc.v3(210, 20), posEnd: cc.v3(210, 322), },
        { posStart: cc.v3(415, 20), posEnd: cc.v3(415, 361), },
    ],
]

export const list10 = [
    [
        { posStart: cc.v3(368, 0), posEnd: cc.v3(368, 556), },
        { posStart: cc.v3(619, 30), posEnd: cc.v3(619, 397), },
        { posStart: cc.v3(190, 8), posEnd: cc.v3(190, 488), },
        { posStart: cc.v3(483, 20), posEnd: cc.v3(483, 458), },
        { posStart: cc.v3(314, 20), posEnd: cc.v3(314, 396), },
        { posStart: cc.v3(415, 0), posEnd: cc.v3(415, 317), },
        { posStart: cc.v3(108, 30), posEnd: cc.v3(108, 335), },
        { posStart: cc.v3(543, 8), posEnd: cc.v3(543, 278), },
        { posStart: cc.v3(247, 20), posEnd: cc.v3(247, 247), },
        { posStart: cc.v3(425, 20), posEnd: cc.v3(425, 181), },
    ],
    [
        { posStart: cc.v3(378, 0), posEnd: cc.v3(378, 181), },
        { posStart: cc.v3(543, 20), posEnd: cc.v3(543, 229), },
        { posStart: cc.v3(294, 8), posEnd: cc.v3(294, 292), },
        { posStart: cc.v3(183, 10), posEnd: cc.v3(183, 380), },
        { posStart: cc.v3(415, 10), posEnd: cc.v3(415, 346), },
        { posStart: cc.v3(359, 0), posEnd: cc.v3(359, 473), },
        { posStart: cc.v3(619, 10), posEnd: cc.v3(619, 352), },
        { posStart: cc.v3(547, 8), posEnd: cc.v3(547, 448), },
        { posStart: cc.v3(237, 10), posEnd: cc.v3(237, 512), },
        { posStart: cc.v3(483, 10), posEnd: cc.v3(483, 547), },
    ],
    [
        { posStart: cc.v3(322, 0), posEnd: cc.v3(322, 181), },
        { posStart: cc.v3(515, 10), posEnd: cc.v3(515, 188), },
        { posStart: cc.v3(174, 8), posEnd: cc.v3(174, 257), },
        { posStart: cc.v3(263, 10), posEnd: cc.v3(263, 380), },
        { posStart: cc.v3(415, 10), posEnd: cc.v3(415, 300), },
        { posStart: cc.v3(359, 0), posEnd: cc.v3(359, 607), },
        { posStart: cc.v3(559, 20), posEnd: cc.v3(559, 352), },
        { posStart: cc.v3(409, 8), posEnd: cc.v3(409, 448), },
        { posStart: cc.v3(158, 15), posEnd: cc.v3(158, 470), },
        { posStart: cc.v3(548, 10), posEnd: cc.v3(548, 491), },
    ],
    [
        { posStart: cc.v3(519, 0), posEnd: cc.v3(519, 587), },
        { posStart: cc.v3(359, 10), posEnd: cc.v3(359, 614), },
        { posStart: cc.v3(226, 8), posEnd: cc.v3(226, 535), },
        { posStart: cc.v3(409, 10), posEnd: cc.v3(409, 491), },
        { posStart: cc.v3(559, 10), posEnd: cc.v3(559, 445), },

        { posStart: cc.v3(415, 0), posEnd: cc.v3(415, 348), },
        { posStart: cc.v3(263, 20), posEnd: cc.v3(263, 412), },
        { posStart: cc.v3(124, 8), posEnd: cc.v3(124, 406), },
        { posStart: cc.v3(606, 15), posEnd: cc.v3(606, 326), },
        { posStart: cc.v3(225, 10), posEnd: cc.v3(225, 305), },
    ],
    [
        { posStart: cc.v3(546, 0), posEnd: cc.v3(546, 546), },
        { posStart: cc.v3(359, 10), posEnd: cc.v3(359, 466), },
        { posStart: cc.v3(126, 8), posEnd: cc.v3(126, 405), },
        { posStart: cc.v3(469, 10), posEnd: cc.v3(469, 386), },
        { posStart: cc.v3(648, 10), posEnd: cc.v3(648, 331), },

        { posStart: cc.v3(415, 0), posEnd: cc.v3(415, 215), },
        { posStart: cc.v3(263, 20), posEnd: cc.v3(263, 330), },
        { posStart: cc.v3(65, 8), posEnd: cc.v3(65, 253), },
        { posStart: cc.v3(606, 15), posEnd: cc.v3(606, 178), },
        { posStart: cc.v3(225, 10), posEnd: cc.v3(225, 179), },
    ],
]

export const list20 = [
    [
        { posStart: cc.v3(425, 0), posEnd: cc.v3(425, 181), },
        { posStart: cc.v3(543, 30), posEnd: cc.v3(543, 229), },
        { posStart: cc.v3(294, 8), posEnd: cc.v3(294, 199), },
        { posStart: cc.v3(183, 20), posEnd: cc.v3(183, 258), },
        { posStart: cc.v3(415, 20), posEnd: cc.v3(415, 281), },

        { posStart: cc.v3(314, 0), posEnd: cc.v3(314, 309), },
        { posStart: cc.v3(619, 30), posEnd: cc.v3(619, 314), },
        { posStart: cc.v3(579, 8), posEnd: cc.v3(579, 406), },
        { posStart: cc.v3(102, 20), posEnd: cc.v3(102, 324), },
        { posStart: cc.v3(483, 20), posEnd: cc.v3(483, 349), },

        { posStart: cc.v3(218, 0), posEnd: cc.v3(218, 355), },
        { posStart: cc.v3(386, 30), posEnd: cc.v3(386, 392), },
        { posStart: cc.v3(303, 8), posEnd: cc.v3(303, 434), },
        { posStart: cc.v3(184, 20), posEnd: cc.v3(184, 453), },
        { posStart: cc.v3(473, 20), posEnd: cc.v3(473, 453), },

        { posStart: cc.v3(390, 0), posEnd: cc.v3(390, 506), },
        { posStart: cc.v3(284, 30), posEnd: cc.v3(284, 541), },
        { posStart: cc.v3(565, 8), posEnd: cc.v3(565, 513), },
        { posStart: cc.v3(474, 20), posEnd: cc.v3(474, 564), },
        { posStart: cc.v3(375, 20), posEnd: cc.v3(375, 609), },
    ],
    [
        { posStart: cc.v3(167, 0), posEnd: cc.v3(167, 154), },
        { posStart: cc.v3(555, 30), posEnd: cc.v3(555, 144), },
        { posStart: cc.v3(65, 8), posEnd: cc.v3(65, 235), },
        { posStart: cc.v3(284, 20), posEnd: cc.v3(284, 195), },
        { posStart: cc.v3(415, 20), posEnd: cc.v3(415, 415), },

        { posStart: cc.v3(648, 0), posEnd: cc.v3(648, 268), },
        { posStart: cc.v3(512, 30), posEnd: cc.v3(512, 285), },
        { posStart: cc.v3(369, 8), posEnd: cc.v3(369, 280), },
        { posStart: cc.v3(601, 20), posEnd: cc.v3(601, 385), },
        { posStart: cc.v3(84, 20), posEnd: cc.v3(84, 343), },

        { posStart: cc.v3(218, 0), posEnd: cc.v3(218, 286), },
        { posStart: cc.v3(386, 30), posEnd: cc.v3(386, 375), },
        { posStart: cc.v3(271, 8), posEnd: cc.v3(271, 374), },
        { posStart: cc.v3(184, 20), posEnd: cc.v3(184, 433), },
        { posStart: cc.v3(473, 20), posEnd: cc.v3(473, 415), },

        { posStart: cc.v3(346, 0), posEnd: cc.v3(346, 463), },
        { posStart: cc.v3(268, 30), posEnd: cc.v3(268, 524), },
        { posStart: cc.v3(543, 8), posEnd: cc.v3(543, 475), },
        { posStart: cc.v3(446, 20), posEnd: cc.v3(446, 528), },
        { posStart: cc.v3(356, 20), posEnd: cc.v3(356, 582), },
    ],
]