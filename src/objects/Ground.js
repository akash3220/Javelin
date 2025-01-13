import EventEmitter from "./event-emitter"; // Import EventEmitter for event handling
import { setScaleFactor } from "./scale_factor"; // Import function to set the scaling factor
import { Global } from "./global";

export default class Ground extends Phaser.GameObjects.Group {
  constructor(scene) {
    super(scene);


    scene.add.existing(this);
  }
  setup() {
    setScaleFactor.call(this, false);
    this.emitter = EventEmitter.getObj();

    this.emitter.on("game:update", this.update.bind(this));
    this.groundXValue = 0;
    // this.lines = [1, 2, 1];
    // this.c_w * 0.3;


  }

  init() {
    this.addGround();
  }

  addGround() {
    if (Global.groundCount == 0) {
      this.frame = "ground0000";
      this.scalevalue = 2;
      this.setPosValue = this.c_w * 0.02;
    } else {
      console.log("Adding Grass")
      this.frame = "grass0000";
      this.scalevalue = 2.2;
      this.setPosValue = this.c_w * 0.02;
    }

    this.ground = this.create(
      this.groundXValue,
      this.scene.c_h - this.extraTop * this.scaleFact,
      `Items1`
    )
      .setFrame(`${this.frame}`)
      .setScale(this.scaleFact * this.scalevalue)
      .setData("nextAdded", false)
      .setOrigin(0, 1)
      .setDepth(-1);

    Global.groundPos = this.ground;
  }

  update(delta) {
    this.children.entries.forEach((ground) => {
      if (
        ground.x + ground.width * ground.scaleX <
        this.scene.cameras.main.scrollX +
        this.c_w +
        700 * this.scaleFact &&
        !ground.getData("nextAdded")
      ) {
        ground.setData("nextAdded", true);
        this.groundXValue =
          ground.x + ground.width * ground.scaleX * 0.45 - this.setPosValue; // Update the last road X position

        this.addGround();
      }
    });
  }
}


