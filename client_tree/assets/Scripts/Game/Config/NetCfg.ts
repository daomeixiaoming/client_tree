let IP = "192.168.3.225";
// 网络配置
const debug = true;// true是debug false 是release
export const NetCfg = {
  IP: IP, //IP 本地127.0.0.1 本地测试10.0.0.151
  PORT: 6086, //端口
  // 长连接
  wss: debug
    ? "wss://dev.jumiao.live/ws/ws"
    : "wss://api.vvzb.live/ws/ws",
  url: debug
    ? "https://dev.jumiao.live/"
    : "https://api.vvzb.live/",
  /** 游戏id*/
  gameType: 122,
  /** 房间id */
  roomId: 2,
  /** 主播id */
  anchorId: 10001397,
  /** 校验token,网络请求需要 */
  token: "3406367992b745569e285f96fe9ce7ad",
  /** ws长连接使用 */
  bid: "120",
};

// api.vvzb.live 正式域名
// 3406367992b745569e285f96fe9ce7ad 15623252003  "userNum": 10009324,
// 80bf8efa03594ec6afac0e99e3a49254 15623252004  "userNum": 10002546,