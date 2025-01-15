import EventEmitter from "./event-emitter"; // Import EventEmitter for event handling
import { setScaleFactor } from "./scale_factor"; // Import function to set the scaling factor
import { Global } from "./global";

export default class Line extends Phaser.GameObjects.Group {
  constructor(scene) {
    super(scene);

    scene.add.existing(this);
  }
  setup() {
    setScaleFactor.call(this, false);
    this.emitter = EventEmitter.getObj();

    this.emitter.on("game:update", this.update.bind(this));
    this.lineXValue = 0;
    this.num = 1;
    this.lineFlag = true;

  }

  init() {
    this.addLine(this.lineXValue);
  }

  addLine(x) {
    if (Global.lineCount == 0) {
      this.frame = "line_default0000";

    } else {
      this.frame = "line_final0000";
      this.lineFlag = false;

    }

    this.Line = this.create(
      x,
      Global.groundPos.y - 200 * this.scaleFact,
      `Items1`
    )
      .setData("nextAdded", false)
      .setFrame(`${this.frame}`)
      .setScale(this.scaleFact * 2)
      .setOrigin(0, 1)
      .setDepth(1);

    // this.lineXValue += this.Line.width * this.Line.scaleX;
  }

  update(delta) {
    if (this.lineFlag == true) {
      this.children.entries.forEach((line) => {
        if (
          line.x + line.width * line.scaleX <
          this.scene.cameras.main.scrollX +
          this.scene.c_w &&
          !line.getData("nextAdded")
        ) {
          line.setData("nextAdded", true);
          this.lineXValue = line.x + line.width * line.scaleX * 0.975;
          this.addLine(this.lineXValue);
        }
      });
    }
  }
}


