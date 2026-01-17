import EventMgr from "./Framework/Managers/EventMgr";
import { NetMgr } from "./Framework/Managers/Net/NetMgr";
import NodePoolMgr from "./Framework/Managers/NodePoolMgr";
import { ResMgr } from "./Framework/Managers/ResMgr";
import { ResMgrAsync } from "./Framework/Managers/ResMgrAsync";
import SoundMgr from "./Framework/Managers/SoundMgr";
import UIMgr from "./Framework/Managers/UIMgr";
import { GameConfig } from "./Game/Config/GameConfig";
import GameApp from "./Game/GameApp";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLanch extends cc.Component {
  @property({
    tooltip: "是否使用webSocket",
  })
  isWebSocket: boolean = false;

  @property({
    tooltip: "是否开启debug模式",
  })
  isDebug: boolean = false;
  wsCom: NetMgr;

  onLoad() {
    GameConfig.isDebug = this.isDebug;

    // 资源管理模块
    this.node.addComponent(ResMgr);
    this.node.addComponent(ResMgrAsync);
    //声音管理模块
    this.node.addComponent(SoundMgr);
    //自定义事件的订阅与发布
    this.node.addComponent(EventMgr);
    // UI管理模块
    this.node.addComponent(UIMgr);
    // 节点池管理
    this.node.addComponent(NodePoolMgr).Init();
    //websocket 网络部分
    if (this.isWebSocket) {
      this.wsCom = this.node.addComponent(NetMgr);
    }
    //游戏逻辑
    this.node.addComponent(GameApp).Init();
  }

  start() {
    // 防止WebView透明穿透
    // this.fixWebViewTransparent();
    // 进入游戏里面去
    GameApp.Instance.EnterGame();
  }

  /**
   * 修复WebView 透明问题,注意：全屏游戏使用，半屏游戏不用
   */
  private fixWebViewTransparent(): void {
    // 设置全局背景
    document.documentElement.style.backgroundColor = '#000';

    // 获取Canvas并设置
    const canvas = document.getElementById('GameCanvas') as HTMLCanvasElement;
    if (canvas) {
      // 强制设置背景
      canvas.style.background = '#000';
      canvas.style.backgroundColor = '#000';

      // 防止事件穿透
      canvas.style.pointerEvents = 'auto';

      // 设置Canvas上下文不透明
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    // 在游戏渲染前清屏
    cc.director.on(cc.Director.EVENT_BEFORE_DRAW, () => {
      const ctx = cc.game.canvas.getContext('2d');
      if (ctx) {
        ctx.save();
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, cc.game.canvas.width, 1100);
        ctx.restore();
      }
    });
  }
}
