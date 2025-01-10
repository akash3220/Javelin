import EventEmitter from "./event-emitter"; // Import EventEmitter for event handling
import { Global } from "./global";
import { setScaleFactor } from "./scale_factor"; // Import function to set the scaling factor

export default class Ground extends Phaser.GameObjects.Group {
  constructor(scene) {
    super(scene);
    scene.add.existing(this);
  }
  setup() {
    setScaleFactor.call(this, false);
    this.emitter = EventEmitter.getObj();

    this.emitter.on("game:update", this.update.bind(this));
    this.racelineXValue = 0;
    // Global.groundPos.x;
    // console.log(Global.groundPos.x);
  }

  init() {
    this.addRaceLine();
  }

  addRaceLine() {
    this.raceLine = this.create(
      this.racelineXValue,
      Global.groundPos.y - 450 * this.scaleFact,
      `Items1`
    )
      .setFrame("border0000")
      .setData("nextAdded", false)
      .setScale(this.scaleFact * 1.5)
      .setOrigin(0, 1)
      .setDepth(1);

    Global.raceLinePos = this.raceLine;
  }

  update(delta) {
    this.children.entries.forEach((raceline, index) => {
      if (
        raceline.x + raceline.width * raceline.scaleX <
          this.scene.cameras.main.scrollX +
            this.scene.c_w +
            700 * this.scaleFact &&
        !raceline.getData("nextAdded")
      ) {
        raceline.setData("nextAdded", true);
        this.racelineXValue = raceline.x + raceline.width * raceline.scaleX - 5; // Update the last road X position
        this.addRaceLine();
      }
    });
  }
}
