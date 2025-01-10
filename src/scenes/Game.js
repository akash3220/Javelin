import { setScaleFactor } from "../objects/scale_factor";
import Ground from "../objects/Ground";
import Stadium from "../objects/Stadium";
import RaceLine from "../objects/RaceLine";
import Character from "../objects/Character";
import Line from "../objects/Line";
import { Global } from "../objects/global";
import EventEmitter from "../objects/event-emitter";
import Javelinstick from "../objects/Javelinstick";

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "Game" });
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
    this.objFollow = this.Character;


    // this.image = this.add.image(this.Character.x, this.Character.y, "Items1", "icon_meter0000");
    // this.image.setDepth(5);
    // this.image.setScale(1);
    // this.image.setOrigin(0.5, 0.5);


    // this.maskShape = this.make.graphics({ x: 0, y: 0, add: false });
    // this.maskShape.fillStyle(0xffffff, 1);
    // this.maskShape.fillRect(200, 200, 1, this.image.height);  // Starting size

    // this.mask = this.maskShape.createGeometryMask();
    // this.image.setMask(this.mask);

    // // Animate the mask
    // this.tweens.add({
    //   targets: this.maskShape,
    //   x: 1000,
    //   duration: 5000,
    //   ease: 'Linear',
    //   onUpdate: () => {
    //     this.maskShape.clear();
    //     this.maskShape.fillStyle(0xffffff, 1);
    //     this.maskShape.fillRect(200, 200, this.maskShape.x - 200, 400);
    //   }
    // });

    // this.add.text(400, 500, 'Loading...', {
    //   font: '20px Arial',
    //   fill: '#ffffff'
    // }).setOrigin(0.5);



    const border = this.add.graphics();
    border.lineStyle(20, 0x00ff00, 1); // Green border
    border.strokeRoundedRect(200, 200, 200, 200, 20); // Outer border (rounded rectangle)

    // Create a gradient graphics
    const gradientGraphics = this.add.graphics();
    gradientGraphics.lineStyle(20, 0xff0000, 1); // Initially red
    gradientGraphics.strokeRoundedRect(200, 200, 200, 200, 20);

    // Step 2: Create the mask
    const maskShape = this.make.graphics({ x: 0, y: 0, add: false });
    maskShape.fillStyle(0xffffff, 1); // White fill for masking
    maskShape.fillRect(200, 200, 1, 200); // Small rectangle for animation

    const mask = maskShape.createGeometryMask(); // Create the mask object
    gradientGraphics.setMask(mask); // Apply mask to the gradient graphics

    // Step 3: Animate the mask to reveal the gradient
    this.tweens.add({
      targets: maskShape,
      x: 400, // Move the mask to cover the whole gradient
      duration: 3000, // Animation duration in milliseconds
      ease: 'Linear',
      onUpdate: () => {
        maskShape.clear();
        maskShape.fillStyle(0xffffff, 1);
        maskShape.fillRect(200, 200, maskShape.x - 200, 200);
      },
      onComplete: () => {
        console.log('Loading complete!');
      }
    });



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
      -this.c_w * 0.32 + this.extraLeftPer,
      this.c_h * 0.39
    );

    this.runButton.on("pointerdown", () => {
      this.runButton.visible = false;
      this.startRunFlag = true;
      this.emitter.emit("game:startRun", this.startRunFlag);
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
  }





  update(time, delta) {

    this.emitter.emit("game:update", delta);

    if (this.startRunFlag) {
      this.throwButton.x += 0.8 * this.scaleFact * delta;
      this.elapsedTime += delta;
    }

    if (Global.characterPos.x >= 2600) {
      Global.groundCount = 1;
    }

    if (Global.characterPos.x >= 2600) {
      Global.lineCount = 1;
    }

    //for stoping
    if (Global.characterPos.x >= 5100) {
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



