import { Scene } from "phaser";

export class LoadingScene extends Scene {
  constructor() {
    super("loading-scene");
  }

  preload() {
    this.load.baseURL = "assets/";

    // Sprites
    this.load.spritesheet("fighter-m", "sprites/Fighter-M.png", {
      frameWidth: 24,
      frameHeight: 32,
    });

    // Maps
    this.load.image("terrain", "tilemaps/terrain_atlas.png");
    this.load.tilemapTiledJSON("map", "maps/main.json");
  }

  create(): void {
    console.log("running loading scene");
    this.scene.start("main-scene");
  }
}
