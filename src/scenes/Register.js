export default class Register extends Phaser.Scene {
  constructor() {
    super({ key: "Register" });

    document
      .querySelector(".register_sec")
      .addEventListener("click", this.showScore.bind(this));
  }
  create() {
    document.querySelector(".register_sec").classList.add("active");
  }
  showScore() {
    // this.scene.start("Score")
  }
}
