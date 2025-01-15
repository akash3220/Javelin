import EventEmitter from "./event-emitter"; // Import EventEmitter for event handling
import { Global } from "./global";
import { setScaleFactor } from "./scale_factor"; // Import function to set the scaling factor

export default class MeterIcon extends Phaser.GameObjects.Group {
  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.meterlineXValue = Global.characterPos.x + 1000;

  }
  setup() {
    setScaleFactor.call(this, false);
    this.emitter = EventEmitter.getObj();
    this.emitter.on("game:update", this.update.bind(this));

  }

  init() {
    this.addMeterLine();
  }

  addMeterLine() {
    this.meterline = this.create(
      this.meterlineXValue,
      Global.groundPos.y * 0.68 * this.scaleFact,
      `Items1`
    )
      .setFrame("grassLine0000")
      .setData("nextAdded", false)
      .setScale(this.scaleFact * 2.3)
      .setOrigin(0, 1)
      .setDepth(2);

  }

  update(delta) {
    this.children.entries.forEach((meterline, index) => {
      if (
        meterline.x + meterline.width * meterline.scaleX <
        this.scene.cameras.main.scrollX +
        this.scene.c_w +
        700 * this.scaleFact &&
        !meterline.getData("nextAdded")
      ) {
        meterline.setData("nextAdded", true);
        this.meterlineXValue = meterline.x + meterline.width * meterline.scaleX * 2.5; // Update the last road X position
        this.addMeterLine();
      }
    });
  }
}
