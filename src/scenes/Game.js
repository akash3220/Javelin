import { setScaleFactor } from "../objects/scale_factor";
import Ground from "../objects/Ground";
import Stadium from "../objects/Stadium";
import RaceLine from "../objects/RaceLine";
import Character from "../objects/Character";
import Line from "../objects/Line";
import { Global } from "../objects/global";
import EventEmitter from "../objects/event-emitter";
import Javelinstick from "../objects/Javelinstick";
import MeterIcon from "../objects/MeterIcon";

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "Game" });

    this.graphics;
    this.maskShape;
    this.angle = 0;
    this.value = 360;
    this.camXValue = 0.32;
  }

  init() {
    this.num = 0;
    this.elapsedTime = 0;
    this.stickFlag = true;

  }

  create() {

    this.emitter = EventEmitter.getObj();
    setScaleFactor.call(this, true);
    this.ground = new Ground(this);
    this.ground.setup();
    this.ground.init();

    this.line = new Line(this);
    this.line.setup();
    this.line.init();

    this.RaceLine = new RaceLine(this);
    this.RaceLine.setup();
    this.RaceLine.init();

    this.Stadium = new Stadium(this);
    this.Stadium.setup();
    this.Stadium.init();



    this.Character = new Character(
      this,
      this.extraLeftPer + 150 * this.scaleFact,
      this.c_h - this.extraTop - 200 * this.scaleFact,
      "CharacterRunning1",
      "character0000"
    );

    this.Character.setup();
    this.Character.init();
    this.Character.emitterMeth();
    Global.characterPos = this.Character;


    // this.MeterIcon = new MeterIcon(this);
    // this.MeterIcon.setup();
    // this.MeterIcon.init();

    this.runButton = this.add
      .image(
        this.c_w * 0.85 - this.extraLeftPer,
        this.c_h * 0.9 - this.extraTop,
        `Items1`
      )
      .setFrame(`icon_run0000`)
      .setScale(this.scaleFact * 1.5)
      .setDepth(4)
      .setInteractive();

    this.throwButton = this.add
      .image(
        this.c_w * 0.85 - this.extraLeftPer,
        this.c_h * 0.9 - this.extraTop,
        `Items1`
      )
      .setFrame(`icon_throw0000`)
      .setScale(this.scaleFact * 1.5)
      .setDepth(3)
      .setInteractive();

    this.throwButton.visible = false;


    this.cameras.main.startFollow(
      this.Character,
      false,
      0.8,
      0,
      -this.c_w * this.camXValue + this.extraLeftPer,
      this.c_h * 0.39
    );

    this.runButton.on("pointerdown", () => {
      this.runButton.visible = false;
      this.startRunFlag = true;
      this.emitter.emit("game:startRun", this.startRunFlag);

      setTimeout(() => {

        // this.cameras.main.startFollow(
        //   this.Character,
        //   false,
        //   0.8,
        //   0,
        //   -this.c_w * 0.32 + this.extraLeftPer,
        //   this.c_h * 0.365
        // );

        // this.scene.tweens.add({
        //   targets: this.cameras.main,
        //   followOffsetX: {
        //     followOffsetX: {
        //       value: -this.c_w * 0.12 + this.extraLeftPer, // New offsetX value
        //     }
        //   },
        //   duration: 1800,
        //   ease: 'Linear',
        // });


      }, 500);


    });



    this.throwButton.on("pointerdown", () => {
      this.throwButton.visible = false;
      // this.emitter.emit("game:throw", this.throwFun);
      this.Character.visible = false;
      this.stickFlag = false;

      this.Character2 = new Character(
        this,
        this.Character.x,
        this.Character.y,
        "CharacterRunning2",
        "character20000"
      );
      this.Character2.setup();
      this.Character2.init();
      this.Character2.play("throw");

    });

    // this.Javelinstick = new Javelinstick(this);
    // this.Javelinstick.setup();

    // this.iconMeter = this.add
    //   .image(
    //     this.throwButton.x - 5,
    //     this.throwButton.y - 10,
    //     `Items1`
    //   )
    //   .setFrame(`icon_meter0000`)
    //   .setScale(1.5 * this.scaleFact)
    //   .setDepth(10);

    // this.maskShape = this.add.graphics();
    // this.mask = this.maskShape.createGeometryMask();
    // this.iconMeter.setMask(this.mask);

    // this.maskShape.clear();

    // this.maskShape.fillStyle(0xffffff, 0);
    // this.maskShape.slice(
    //   this.iconMeter.x,
    //   this.iconMeter.y,   // Center of the circle
    //   250,              // Radius
    //   Phaser.Math.DegToRad(this.angle),       // Start angle (in radians)
    //   Phaser.Math.DegToRad(this.angle + this.value),  // End angle (in radians)
    //   false                // Counter-clockwise
    // );
    // this.maskShape.fillPath();
    // this.value -= 2;

  }





  update(time, delta) {

    this.emitter.emit("game:update", delta);

    if (this.startRunFlag) {
      this.throwButton.x += 0.8 * this.scaleFact * delta;
      // this.iconMeter.x += 0.8 * this.scaleFact * delta;
      // this.maskShape.x += 0.8 * this.scaleFact * delta;
      this.elapsedTime += delta;
    }

    if (Global.characterPos.x >= 3400 * this.scaleFact) {
      Global.groundCount = 1;
    }

    if (Global.characterPos.x >= 2300 * this.scaleFact) {
      Global.lineCount = 1;
    }

    //for stoping
    if (Global.characterPos.x >= 4300 * this.scaleFact) {
      this.startRunFlag = false;
      this.throwButton.visible = true;
      this.emitter.emit("game:stopRun", this.startRunFlag);
    }

    if (this.stickFlag == false) {
      if (this.Character2.anims.currentFrame.index == 19) {
        console.log("StickThrow");
        this.stickFlag = true;
        this.Javelinstick = new Javelinstick(this);
        this.Javelinstick.setup();

      }
    }

  }

}



