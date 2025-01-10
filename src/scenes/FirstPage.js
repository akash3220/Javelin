import { setScaleFactor } from "../objects/scale_factor"; // Import function to set the scaling factor
import EventEmitter from "../objects/event-emitter";

export default class FirstPage extends Phaser.Scene {
  constructor() {
    super({ key: "FirstPage" }); // Set the key for this scene
  }

  init(data) {}

  create() {
    // Set the scale factor for the game
    setScaleFactor.call(this, true);

    const homeLayer = this.add
      .image(this.c_w / 2, this.c_h / 2, "home_layer")
      .setScale(1 * this.scaleFact);

    const title1 = this.add
      .image(
        this.c_w / 2 + this.extraLeftPer,
        this.c_h / 4 - this.extraTop,
        "Items1"
      )
      .setFrame("home_javelin0000")
      .setScale(1.1 * this.scaleFact);

    const title2 = this.add
      .image(
        this.c_w / 2 + this.extraLeftPer,
        this.c_h / 3 - this.extraTop,
        "Items1"
      )
      .setFrame("home_throw0000")
      .setScale(1.1 * this.scaleFact);

    const charFirstpage = this.add
      .image(
        this.c_w / 3 + this.extraLeftPer,
        this.c_h / 1.8 - this.extraTop,
        "Items1"
      )
      .setFrame("home_icon0000")
      .setScale(1.5 * this.scaleFact);

    const startButton = this.add
      .image(
        this.c_w / 2 + this.extraLeftPer,
        this.c_h / 1.15 - this.extraTop,
        "Items1"
      )
      .setFrame("startBtn0000")
      .setScale(1 * this.scaleFact);
  }

  update(time, delta) {}
}
