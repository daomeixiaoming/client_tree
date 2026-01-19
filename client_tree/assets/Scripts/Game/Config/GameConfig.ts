// 游戏配置
export const GameConfig = {
  isDebug: true, //是否是debug 模式
};

// itemId  1~8  角色ID
// 对应原型图位置是
// 5678
// 1234
/** 角色类型*/
export const RoleType = {
  /** 吕洞宾*/
  RoleLDB: 1,
  /** 铁拐李*/
  RoleTGL: 2,
  /** 汉钟离*/
  RoleHZL: 3,
  /** 张果老*/
  RoleZGL: 4,
  /** 何仙姑 */
  RoleHXG: 8,
  /** 蓝采和 */
  RoleLCH: 7,
  /** 韩湘子*/
  RoleHXX: 6,
  /** 曹国舅 */
  RoleCGJ: 5,
}

export type RoleTypeKey = {
  /**角色类型  RoleType*/
  type: number,
  /**角色名称 */
  name: string,
  /**图标小图 */
  iconImg: string,
  /**图标大图 */
  iconImg2: string,
  /**名称图片 */
  nameImg: string,
  /**角色类型 1是蓝色 2是黄色 */
  rTyepe: number,
  /** 索引值 0-8 */
  idx: number,
  /** 坐标 */
  pos: cc.Vec3,
  /** 赔率，从服务器获取后设置 */
  rate: number,
};

/** 大厅创建角色的配置 */
export const RoleList: RoleTypeKey[] = [
  {
    type: RoleType.RoleLDB, name: "吕洞宾",
    iconImg: `home_icon_${RoleType.RoleLDB}`,
    iconImg2: `home_icon_${RoleType.RoleLDB}_1`,
    nameImg: `home_txt_${RoleType.RoleLDB}`,
    rTyepe: 2,
    idx: 0,
    pos: cc.v3(-270, 161, 0),
    rate: 10,
  },
  {
    type: RoleType.RoleTGL, name: "铁拐李",
    iconImg: `home_icon_${RoleType.RoleTGL}`,
    iconImg2: `home_icon_${RoleType.RoleTGL}_1`,
    nameImg: `home_txt_${RoleType.RoleTGL}`,
    rTyepe: 2,
    idx: 1,
    pos: cc.v3(-90, 161, 0),
    rate: 40,
  },
  {
    type: RoleType.RoleHZL, name: "汉钟离",
    iconImg: `home_icon_${RoleType.RoleHZL}`,
    iconImg2: `home_icon_${RoleType.RoleHZL}_1`,
    nameImg: `home_txt_${RoleType.RoleHZL}`,
    rTyepe: 2,
    idx: 2,
    pos: cc.v3(90, 161, 0),
    rate: 30,
  },
  {
    type: RoleType.RoleZGL, name: "张果老",
    iconImg: `home_icon_${RoleType.RoleZGL}`,
    iconImg2: `home_icon_${RoleType.RoleZGL}_1`,
    nameImg: `home_txt_${RoleType.RoleZGL}`,
    rTyepe: 2,
    idx: 3,
    pos: cc.v3(270, 161, 0),
    rate: 20,
  },
  {
    type: RoleType.RoleCGJ, name: "曹国舅",
    iconImg: `home_icon_${RoleType.RoleCGJ}`,
    iconImg2: `home_icon_${RoleType.RoleCGJ}_1`,
    nameImg: `home_txt_${RoleType.RoleCGJ}`,
    rTyepe: 1,
    idx: 4,
    pos: cc.v3(270, -161, 0),
    rate: 5,
  },
  {
    type: RoleType.RoleHXX, name: "韩湘子",
    iconImg: `home_icon_${RoleType.RoleHXX}`,
    iconImg2: `home_icon_${RoleType.RoleHXX}_1`,
    nameImg: `home_txt_${RoleType.RoleHXX}`,
    rTyepe: 1,
    idx: 5,
    pos: cc.v3(90, -161, 0),
    rate: 5,
  },
  {
    type: RoleType.RoleLCH, name: "蓝采和",
    iconImg: `home_icon_${RoleType.RoleLCH}`,
    iconImg2: `home_icon_${RoleType.RoleLCH}_1`,
    nameImg: `home_txt_${RoleType.RoleLCH}`,
    rTyepe: 1,
    idx: 6,
    pos: cc.v3(-90, -161, 0),
    rate: 5,
  },
  {
    type: RoleType.RoleHXG, name: "何仙姑",
    iconImg: `home_icon_${RoleType.RoleHXG}`,
    iconImg2: `home_icon_${RoleType.RoleHXG}_1`,
    nameImg: `home_txt_${RoleType.RoleHXG}`,
    rTyepe: 1,
    idx: 7,
    pos: cc.v3(-270, -161, 0),
    rate: 5,
  },
];


/** 蛋的类型 
 * 1-银蛋，2-金蛋，3-钻石蛋
*/
export enum EggType {
  /** 银弹 */
  EggSilver = 1,
  /** 金蛋 */
  EggGold = 2,
  /** 钻石 */
  EggDrill = 3,
}

export interface EggCfg {
  /** 蛋的类型 */
  eggType: number,
  /** 当前蛋的价值 */
  numBet: number,
}

/** 蛋的资源配置 */
export const EggCfgs: EggCfg[] = [
  {
    eggType: EggType.EggGold,
    numBet: 0,
  },
  {
    eggType: EggType.EggDrill,
    numBet: 0,
  }, {
    eggType: EggType.EggSilver,
    numBet: 0,
  }
]