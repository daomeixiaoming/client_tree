let IP = "192.168.3.225";
// 网络配置
const gameDebug = false; // true是debug false 是release
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
  roomId: gameDebug ? 1000008 : 10000228,
  /** 主播id */
  anchorId: gameDebug ? 153 : 1000686,
  /** 校验token,网络请求需要 */
  token: gameDebug ? "87508e1c6049469984016caaecd8d516" : "47ec2c47a7dc43d6bf36d52fbfabaeb7",
  /** ws长连接使用 */
  bid: "money-tree",
};

// api.vvzb.live 正式域名
// 87508e1c6049469984016caaecd8d516 15623252003  "userNum": 10009324, 10009324
// a8f68486a25545728d15074bca1ac007 15623252004  "userNum": 10002546, 瞄钻没了服务报错
// c011accad86748208d86f60ea7e57ba6 15623252001  "userNum": 10004119,
// f99daf42b48942669609730fe1ccf1c3 15623252005  "userNum": 10003375,