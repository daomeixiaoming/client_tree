import { ResMgr } from "./ResMgr";
import { ResMgrAsync } from "./ResMgrAsync";

const { ccclass, property } = cc._decorator;

/** 音乐音效管理器 */
@ccclass
export default class SoundMgr extends cc.Component {

    public static Instance: SoundMgr = null as unknown as SoundMgr;
    private static MAX_SOUNDS: number = 32; // 最大音效的数目

    private nowIndex: number = 0;
    private sounds: Array<cc.AudioSource> = [];
    private bgMusic: cc.AudioSource = null as unknown as cc.AudioSource;

    /** 是否背景音乐静音 */
    private isMusicMute: boolean = false;
    /** 是否音效静音 */
    private isSoundMute: boolean = false;

    onLoad(): void {
        if (SoundMgr.Instance === null) {
            SoundMgr.Instance = this;
        }
        else {
            this.destroy();
            return;
        }

        for (let i = 0; i < SoundMgr.MAX_SOUNDS; i++) {
            var as = this.node.addComponent(cc.AudioSource);
            this.sounds.push(as);
        }

        this.bgMusic = this.node.addComponent(cc.AudioSource) as cc.AudioSource;

        // 从本地存储里面把设置读出来, 0, 1, 1关闭声音 0是开启声音
        var value = localStorage.getItem("GAME_MUSIC_MUTE");
        console.log("=============GAME_MUSIC_MUTE=====================", value);
        if (value) {
            let v = parseInt(value);
            this.isMusicMute = (v === 1) ? true : false;
        } else {
            localStorage.setItem("GAME_MUSIC_MUTE", "1");
        }

        value = localStorage.getItem("GAME_SOUND_MUTE");
        console.log("=============GAME_SOUND_MUTE=====================", value);
        if (value) {
            let v = parseInt(value);
            this.isSoundMute = (v === 1) ? true : false;
        } else {
            localStorage.setItem("GAME_SOUND_MUTE", "1");
        }
    }

    // 播放背景音乐
    public playBgMusic(clip: cc.AudioClip, isLoop: boolean): void {
        this.bgMusic.clip = clip;
        this.bgMusic.loop = isLoop;
        this.bgMusic.volume = (this.isMusicMute) ? 0 : 1.0;
        this.bgMusic.play();
    }

    // 停止背景音乐
    public stopBgMusic(): void {
        this.bgMusic.stop();
    }

    /**
     * 播放音效
     * @param clip 
     * @returns 
     */
    public playSound(clip: cc.AudioClip, voice: number = 1): void {
        // console.log("=========playSound============", this.nowIndex);
        if (this.isSoundMute === true) {
            return;
        }

        var as = this.sounds[this.nowIndex];
        this.nowIndex++;
        if (this.nowIndex >= SoundMgr.MAX_SOUNDS) {
            this.nowIndex = 0;
        }

        as.clip = clip;
        as.loop = false;
        as.volume = voice;
        as.play();
    }

    public playSound2(clip: cc.AudioClip, voice: number): void {
        if (this.isSoundMute === true) {
            return;
        }

        let id = cc.audioEngine.playEffect(clip, false);
        cc.audioEngine.setVolume(id, voice)
    }

    public playSoundOneShot(clip: cc.AudioClip): void {
        var as = this.sounds[this.nowIndex];
        this.nowIndex++;
        if (this.nowIndex >= SoundMgr.MAX_SOUNDS) {
            this.nowIndex = 0;
        }

        as.clip = clip;
        as.loop = false;
        as.play();
    }

    /**
     * 设置背景音乐静音状态
     * @param isMute true是静音
     */
    public setMusicMute(isMute: boolean): void {
        this.isMusicMute = isMute;
        this.bgMusic.volume = (this.isMusicMute) ? 0 : 1.0;

        // localStorage
        let value = (isMute) ? 1 : 0;
        localStorage.setItem("GAME_MUSIC_MUTE", value.toString());
        // end
    }

    // 设置背音效静音状态
    public setSoundsMute(isMute: boolean): void {
        this.isSoundMute = isMute;

        // localStorage
        let value = (isMute) ? 1 : 0;
        localStorage.setItem("GAME_SOUND_MUTE", value.toString());

        for (let i = 0; i < this.sounds.length; i++) {
            let as: cc.AudioSource = this.sounds[i];
            as.mute = isMute;
        }
    }

    public getAudioClip(abName: string, path: string): cc.AudioClip | null {
        // let clip = ResMgrAsync.Instance.IE_GetAsset(abName, path, cc.AudioClip)  as cc.AudioClip;
        // return clip;
        return null;
    }

    // 停止所有的音效
    public stopAllAudio(): void {
        // DebugUtils.Log("==========stopAllAudio==========");
        cc.audioEngine.stopAll();
    }
}
