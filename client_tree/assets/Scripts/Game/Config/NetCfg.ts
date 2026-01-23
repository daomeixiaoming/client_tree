let IP = "192.168.3.225";
// 网络配置
const gameDebug = true;// true是debug false 是release
export const NetCfg = {
  IP: IP, //IP 本地127.0.0.1 本地测试10.0.0.151
  PORT: 6086, //端口
  // 长连接
  wss: gameDebug
    ? "wss://dev.jumiao.live/ws/ws"
    : "wss://api.vvzb.live/ws/ws",
  url: gameDebug
    ? "https://dev.jumiao.live/"
    : "https://api.vvzb.live/",
  /** 游戏id*/
  gameType: 122,
  /** 房间id */
  roomId: 1000008,
  /** 主播id */
  anchorId: 153,
  /** 校验token,网络请求需要 */
  token: "b02b896adf0b400da9b3fa898e9a41c5",
  /** ws长连接使用 */
  bid: "money-tree",
};

// api.vvzb.live 正式域名
// b02b896adf0b400da9b3fa898e9a41c5 15623252003  "userNum": 10009324, 10009324
// d2b9c188eb9843f39a919b09e603dcc6 15623252004  "userNum": 10002546, 瞄钻没了服务报错
// c011accad86748208d86f60ea7e57ba6 15623252001  "userNum": 10004119, 
