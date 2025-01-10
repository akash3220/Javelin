import { setScaleFactor } from "../objects/scale_factor"; // Import function to set the scaling factor for the game
export default class Loader extends Phaser.Scene {
  /**
   * Constructor for the Loader scene.
   */
  constructor() {
    super({ key: "Loader" }); // Set the key for this scene
  }

  init() {
    setScaleFactor.call(this, true);
    // alert("Loader");
  }

  onProgress() { }

  preload() {
    // Load images
    this.load.image("stadium1", "./assets/stadium1.png");
    this.load.image("stadium2", "./assets/stadium2.png");
    this.load.image("home_layer", "./assets/home_layer.png");

    // Load atlases for spriteSheet
    this.load.atlas(
      "CharacterRunning1",
      "./assets/character_running.png",
      "./assets/character_running.json"
    );
    this.load.atlas(
      "CharacterRunning2",
      "./assets/character_running2.png",
      "./assets/character_running2.json"
    );
    this.load.atlas("Items1", "./assets/items.png", "./assets/items.json");
    this.load.atlas("Items2", "./assets/items2.png", "./assets/items2.json");
  }

  create() {
    // Start the main game scene
    this.scene.start("Game");
    // this.scene.start("BackGroundPage");
    // this.scene.start("FirstPage");
  }
}
