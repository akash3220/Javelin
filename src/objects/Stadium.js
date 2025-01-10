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
    this.stadiumXValue = 0;
    // Global.raceLinePos.x * this.scaleFact;
    this.stadiumCount = 20;
  }

  init() {
    this.addStadium();
  }

  addStadium() {
    this.stadiumCount++;
    this.stadium = this.create(
      this.stadiumXValue,
      Global.raceLinePos.y - 150 * this.scaleFact,
      `stadium${(this.stadiumCount % 2) + 1}`
    )
      .setData("nextAdded", false)
      .setOrigin(0, 1)
      .setScale(this.scaleFact * 1);
    this.stadium.setDepth(-1);
    Global.stadiumPos = this.stadium;
  }

  update(delta) {
    this.children.entries.forEach((stadium, index) => {
      if (
        stadium.x + stadium.width * stadium.scaleX <
        this.scene.cameras.main.scrollX +
        this.scene.c_w +
        700 * this.scaleFact &&
        !stadium.getData("nextAdded")
      ) {

        // console.log("Stadium");
        stadium.setData("nextAdded", true);
        this.stadiumXValue = stadium.x + stadium.width * stadium.scaleX - 25; // Update the last road X position
        this.addStadium();
      }
    });
  }
}
