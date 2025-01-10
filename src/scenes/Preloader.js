export default class PreLoader extends Phaser.Scene {
  constructor() {
    super({ key: "PreLoader" });
  }

  init() {}

  onProgress(v) {}

  preload() {}

  create() {
    this.scene.start("Loader");
  }
  update() {}
}
