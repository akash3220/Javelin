import EventEmitter from "./event-emitter"; // Import EventEmitter for event handling
import { setScaleFactor } from "./scale_factor"; // Import function to set the scaling factor
import { Global } from "./global";

export default class Javelinstick extends Phaser.GameObjects.Group {
  constructor(scene, x) {
    super(scene, x);

    scene.add.existing(this);


    // this.lengthValue = 5;
    this.lengthValue = x * Global.charSpeed;
    console.log(this.lengthValue);
    // this.lengthValue = 3000;
    // console.log(this.lengthValue);
    this.initialStickValue = { x: 0, y: 0 };



  }
  setup() {
    setScaleFactor.call(this, false);
    this.emitter = EventEmitter.getObj();
    this.Stick;


    this.graphics = this.scene.add.graphics();
    this.path = new Phaser.Curves.Path();
    this.path = new Phaser.Curves.Path(Global.characterPos.x, Global.characterPos.y);
    // this.path = new Phaser.Curves.Path(Global.characterPos.x + 100, Global.characterPos.y - 550);

    // this.path.ellipseTo(this.lengthValue, 400, 200, 5, false, 0);
    this.path.splineTo([
      Global.characterPos.x + 120 * (this.lengthValue / 30) * this.scaleFact,
      (Global.characterPos.y / this.lengthValue) * this.scaleFact,
      Global.characterPos.x + (200 * this.lengthValue * 10 * 3) * this.scaleFact,
      Global.characterPos.y - 400 + 200 * this.scaleFact]);

    this.graphics.setAlpha(1);

    this.emitter.on("game:update", this.update.bind(this));
    this.addStick();
  }

  init() {
  }

  addStick() {
    this.Stick = this.create(
      Global.characterPos.x,
      Global.characterPos.y - 200,
      `Items1`
    )
      .setFrame(`javelin0000`)
      .setOrigin(0.5, 0.5)
      .setScale(0.7)
      .setDepth(3);

    this.Stick.t = 0;
    this.Stick.vec = new Phaser.Math.Vector2();

    this.Stick.angle = 320;

    this.scene.tweens.add({
      targets: this.Stick,
      rotation: 0.785398 - 0.6,
      duration: 1800,
      ease: 'Linear',
      yoyo: false,
      onStart: () => {
      },
      onUpdate: (tween, target) => {
      },
      onComplete: () => {
      },
    });

    this.scene.tweens.add({
      targets: this.Stick,
      t: 1,
      ease: 'Sine.easeInOut',
      duration: 2000,
      yoyo: false,
      repeat: 0
    });

    this.scene.cameras.main.startFollow(
      this.Stick,
      false,
      0.8,
      0,
      -this.c_w * 0.245 + this.extraLeftPer,
      this.c_h * 0.3
    );
  }

  update(delta) {
    this.Stick.x += 0.8 * this.scaleFact * this.delta;
    this.graphics.clear();
    this.graphics.lineStyle(10, 0xffffff, 1);  //thicknessLine,color,aplha

    this.path.draw(this.graphics);

    this.path.getPoint(this.Stick.t, this.Stick.vec);
    this.Stick.setPosition(this.Stick.vec.x, this.Stick.vec.y);

    this.graphics.fillStyle(0xff0000, 1);
    this.graphics.fillCircle(this.Stick.vec.x, this.Stick.vec.y, 12);
  }
}
