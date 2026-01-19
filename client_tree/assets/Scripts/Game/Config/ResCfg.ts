// 资源
// AB包名
export const AbNames = {
    // 预支体
    Prefabs: "Prefabs", // 
    /** 图集资源 */
    Atals: "Atals",
    /** spine动画资源 */
    Spines: "Spines",
    /** 声音资源 */
    Sounds: "Sounds",
    /** 散图 */
    Guis: "Guis",
};

/**
 * 图集
 * First路径是起步必须加载的，Second路径是二级加载的
 */
export const AtalsCfg = {
    Common: "First/Common",
    Home: "First/Home",
    Nan: "Second/Nan",
    Notice: "Second/Notice",
    Record: "Second/Record",
};

//-----------------------------------------------------------------------------------------------
// 延迟加载的资源
export const UICfg = {
    /** 起步必须加载的 */
    Home: "First/Home",
    Loading: "First/Loading",
    /** 大厅 */
    HomeChip: "First/HomeChip",
    HomeMenu: "First/HomeMenu",

    /** 提示条弹框 */
    Toast: "Second/Common/Toast",

    /**免打扰 */
    Agree: "Second/Notice/Agree",
    Notice: "Second/Notice/Notice",

    /** 帮助规则 */
    Help: "Second/Help",
    Nan: "Second/Nan",

    /** 记录 */
    Record: "Second/Record/Record",
    RecordGift: "Second/Record/RecordGift",
    RecordItem1: "Second/Record/RecordItem1",
    RecordItem2: "Second/Record/RecordItem2",


};

// spine动画资源
export const SpineCfg = {
    sp_yao: "sp_yao/sp_yao",
};

/** 声音资源 */
export const SoundCfg = {

}


/** 散图资源 */
export const GuiCfg = {
    /** 大厅背景 */
    bg_home: "bg_home",

    bg_common: "bg_common",

    bg_nan: "bg_nan",

    bg_notice: "bg_notice",
}

