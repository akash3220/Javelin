// Character
import EventEmitter from "./event-emitter";
import { Global } from "./global";
import { setScaleFactor } from "./scale_factor";

export default class Character extends Phaser.GameObjects.Sprite {
  constructor(game, x, y, key, frame) {
    super(game, x, y, key, frame);
    this.scene.add.existing(this);
  }

  setup() {
    setScaleFactor.call(this, false);
    this.emitter = EventEmitter.getObj();
    this.startRunFlag = false;
    this.startFrame = 0;
    this.endFrame = 1;

  }

  emitterMeth() {
    this.emitter.on("game:update", this.update.bind(this));
    this.emitter.on("game:startRun", this.startRun.bind(this));
    this.emitter.on("game:stopRun", this.stopRunning.bind(this));
  }

  init() {
    this.anims.create({
      key: "running",
      frames: this.anims.generateFrameNames("CharacterRunning1", {
        prefix: "character",
        start: 0,
        end: 17,
        zeroPad: 4,
      }),
      repeat: -1,
      frameRate: 13,
    });

    this.anims.create({
      key: "throw",
      frames: this.anims.generateFrameNames("CharacterRunning2", {
        prefix: "character2",
        start: 0,
        end: 29,
        zeroPad: 4,
      }),
      repeat: 0,
      frameRate: 20,
    });

    // setTimeout(() => {
    //   this.play("throw");
    // }, 1000);

    this.setScale(this.scaleFact * 2)
      .setDepth(3)
      .setOrigin(0.5, 1);
  }

  startRun(startRunFlag) {
    this.startRunFlag = startRunFlag;
    this.play("running");
  }

  stopRunning(startRunFlag) {
    this.startRunFlag = startRunFlag;
    this.stop("running");
  }


  throwFun() {
    console.log("throing");
    this.play("throw");
    // console.log(this.throwAnimtion.isPlaying);
  }

  update(delta) {
    this.delta = delta;
    // console.log("this.delta " + this.frame.name);
    if (this.startRunFlag) {
      this.x += 0.8 * this.scaleFact * this.delta;
    }
  }
}
