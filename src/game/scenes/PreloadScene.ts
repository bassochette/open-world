import "phaser";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: "PreloadScene" });
  }

  preload() {
    this.load.image("phaser-logo", "assets/images/phaser-logo.png");
  }

  create() {
    this.scene.start("MainScene");
  }
}
