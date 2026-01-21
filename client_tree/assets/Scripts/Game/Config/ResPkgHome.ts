import { AtalsCfg, GuiCfg, SoundCfg, SpineCfg, UICfg } from "./ResCfg";

// 游戏起步必须加载的的资源
export const ResPkg_First = {
    Atals: [
        {
            assetType: cc.SpriteAtlas,
            urls: [AtalsCfg.Common, AtalsCfg.Home, AtalsCfg.Notice],
        },
    ],
    Prefabs: [
        {
            assetType: cc.Prefab,
            urls: [
                UICfg.Home, UICfg.HomeChipMgr, UICfg.HomeChip, UICfg.HomeMenu, UICfg.Agree, UICfg.Notice, UICfg.Marquee,
            ],
        },
    ],
    Guis: [
        {
            assetType: cc.SpriteFrame,
            urls: [GuiCfg.bg_home, GuiCfg.bg_nan, GuiCfg.bg_notice, GuiCfg.sp_tree1],
        },
    ],
};

// 非起步必须加载的资源
export const ResPkg_Second = {
    // Atals: [
    //     {
    //         assetType: cc.SpriteAtlas,
    //         urls: [

    //         ],
    //     },
    // ],
    Prefabs: [
        {
            assetType: cc.Prefab,
            urls: [
                UICfg.Toast,
            ],
        },
    ],
    Spines: [
        {
            assetType: sp.SkeletonData,
            urls: [
                SpineCfg.sp_tree,
            ]
        }
    ],
    Sounds: [
        {
            assetType: cc.AudioClip,
            urls: [
                SoundCfg.coin,
            ]
        }
    ]
};

//-----------------------------------
/** 商城 */
export const ResPkg_Shop = {

};

/** 个人记录 */
export const ResPkg_Record = {
    Atals: [
        {
            assetType: cc.SpriteAtlas,
            urls: [AtalsCfg.Record],
        },
    ],
    Prefabs: [
        {
            assetType: cc.Prefab,
            urls: [UICfg.Record, UICfg.RecordItem1, UICfg.RecordItem2, UICfg.RecordGift],
        },
    ],
    Guis: [
        {
            assetType: cc.SpriteFrame,
            urls: [GuiCfg.bg_common],
        },
    ],
}

/** 游戏帮助 */
export const ResPkg_Help = {
    Prefabs: [
        {
            assetType: cc.Prefab,
            urls: [UICfg.Help],
        },
    ],
    Guis: [
        {
            assetType: cc.SpriteFrame,
            urls: [GuiCfg.bg_common],
        },
    ],
}

/** 游戏菜单 */
export const ResPkg_Menu = {
    Prefabs: [
        {
            assetType: cc.Prefab,
            urls: [UICfg.HomeMenu],
        },
    ]
}

/** 金币不足 */
export const ResPkg_Nan = {
    Prefabs: [
        {
            assetType: cc.Prefab,
            urls: [UICfg.Nan],
        },
    ],
    Guis: [
        {
            assetType: cc.SpriteFrame,
            urls: [GuiCfg.bg_nan],
        },
    ],
}

/** 免打扰通知 */
export const ResPkg_Nocice = {
    Prefabs: [
        {
            assetType: cc.Prefab,
            urls: [UICfg.Agree, UICfg.Notice,],
        },
    ],
    Guis: [
        {
            assetType: cc.SpriteFrame,
            urls: [GuiCfg.bg_notice],
        },
    ],
}