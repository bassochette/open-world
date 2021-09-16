import "phaser";
import FpsText from "../objects/FpsText";

export default class MainScene extends Phaser.Scene {
  fpsText;

  constructor() {
    super({ key: "MainScene" });
  }

  create() {
    this.fpsText = new FpsText(this);
  }

  update() {
    this.fpsText.update();
  }
}
