import "phaser";
import { FighterM } from "../objects/characters/FighterM";

export default class MainScene extends Phaser.Scene {
  private player: FighterM;
  constructor() {
    super("main-scene");
    console.log("running main scene");
  }

  create() {
    this.player = new FighterM(this, 100, 100);
  }

  update() {
    this.player.update();
  }
}
