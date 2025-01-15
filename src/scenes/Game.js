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
    this.angle = -90;
    this.value = 0;
    this.camXValue = 0.32;
    this.throwingSpeedFlag = false;
    this.EndRunningFlag = false;
    this.StartThowingFlag = false;
    this.Character2;
    Global.charSpeed = 0.8;
    this.isTapping = false;
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


    this.runButtonFlag = true;
    this.runButton.on("pointerdown", () => {

      if (this.runButtonFlag) {
        this.runButtonFlag = false;
        this.startRunFlag = true;
        this.emitter.emit("game:startRun", this.startRunFlag);

      }


      this.isTapping = true;
    });
    this.runButton.on("pointerup", () => {
      this.isTapping = false;
    });



    this.throwButton.on("pointerdown", () => {
      // this.emitter.emit("game:throw", this.throwFun);
      // this.Character.visible = false;
      this.stickFlag = false;
      this.throwingSpeedFlag = false;

      this.Character2.play("throw");

    });


    this.iconMeter = this.add
      .image(
        this.throwButton.x - 5,
        this.throwButton.y - 10,
        `Items1`
      )
      .setFrame(`icon_meter0000`)
      .setScale(1.5 * this.scaleFact)
      .setDepth(150);

    this.maskShape = this.add.graphics();
    this.mask = this.maskShape.createGeometryMask();
    this.iconMeter.setMask(this.mask);

    this.maskShape.clear();

    this.maskShape.fillStyle(0xffffff, 0);

    this.maskShape.setDepth(150);

    // this.MeterIcon = new MeterIcon(this);
    // this.MeterIcon.setup();
    // this.MeterIcon.init();


    // this.Javelinstick = new Javelinstick(this, this.value);
    // this.Javelinstick.setup();


  }





  update(time, delta) {

    this.emitter.emit("game:update", delta);


    if (this.isTapping) {
      console.log("TapOn");
      Global.charSpeed += 0.01;
    } else {
      // console.log("TapOff");
      Global.charSpeed = Math.max(0.8, Global.charSpeed - 0.005);
    }



    if (this.throwingSpeedFlag == true) {
      this.maskShape.slice(
        this.iconMeter.x,
        this.iconMeter.y,   // Center of the circle
        250,              // Radius
        Phaser.Math.DegToRad(this.angle),       // Start angle (in radians)
        Phaser.Math.DegToRad(this.angle + this.value),  // End angle (in radians)
        false                // Counter-clockwise
      );

      this.maskShape.fillPath();
      this.value += 6;

      if (this.value > 360) {
        this.value = 0;
      }

    }



    if (this.startRunFlag) {
      this.throwButton.x += Global.charSpeed * this.scaleFact * delta;
      this.iconMeter.x += Global.charSpeed * this.scaleFact * delta;
      this.runButton.x += Global.charSpeed * this.scaleFact * delta;
      this.elapsedTime += delta;
    }

    if (Global.characterPos.x >= 3400 * 1.5 * this.scaleFact) {
      Global.groundCount = 1;
    }

    if (Global.characterPos.x >= 2300 * 1.8 * this.scaleFact) {
      Global.lineCount = 1;
    }




    //for stoping
    if (Global.characterPos.x >= (((4300 * 1.4) - 1000) * this.scaleFact)) {
      // if (Global.characterPos.x >= 1000 * this.scaleFact) {

      if (this.StartThowingFlag == false) {
        this.StartThowingFlag = true;

        this.Character.visible = false;
        this.Character2 = new Character(
          this,
          this.Character.x,
          this.Character.y,
          "CharacterRunning2",
          "character20000"
        );
        this.Character2.setup();
        this.Character2.init();
        this.Character2.emitterMeth();
        this.emitter.emit("game:startRun", this.startRunFlag);
        this.Character2.play("beforeThrow");

      }
    }


    if (Global.characterPos.x >= 4300 * 1.4 * this.scaleFact) {
      // if (Global.characterPos.x >= 1000 * this.scaleFact) {

      if (this.EndRunningFlag == false) {
        this.EndRunningFlag = true;
        console.log("EndOnce")
        this.startRunFlag = false;
        this.runButton.visible = false;
        this.throwButton.visible = true;
        this.throwingSpeedFlag = true;
        this.emitter.emit("game:stopRun", this.startRunFlag);
        // this.Character.visible = false;
        // this.Character2 = new Character(
        //   this,
        //   this.Character.x,
        //   this.Character.y,
        //   "CharacterRunning2",
        //   "character20000"
        // );
        // this.Character2.setup();
        // this.Character2.init();
        // this.Character2.play("beforeThrow");



      }
    }



    if (this.stickFlag == false) {

      if (this.Character2.anims.currentFrame.index == 2) {
        this.stickFlag = true;
        this.Javelinstick = new Javelinstick(this, this.value);
        this.Javelinstick.setup();

        this.throwButton.visible = false;
        this.iconMeter.visible = false;

        this.MeterIcon = new MeterIcon(this);
        this.MeterIcon.setup();
        this.MeterIcon.init();

      }
    }

  }

}



