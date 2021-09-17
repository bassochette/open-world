import { Scene, Tilemaps } from "phaser";
import { FighterM } from "../objects/characters/FighterM";

export default class MainScene extends Scene {
  private player: FighterM;

  private map: Tilemaps.Tilemap;
  private tileset: Tilemaps.Tileset;
  private groundLayer: Tilemaps.TilemapLayer;

  constructor() {
    super("main-scene");
  }

  create() {
    console.log("running main scene");

    this.initMap();

    this.player = new FighterM(this, 526, 439);
    this.initCamera();

    this.physics.add.collider(this.player, this.groundLayer);
    this.groundLayer.setCollisionBetween(391, 392);
  }

  update() {
    this.player.update();
  }

  private initCamera() {
    this.cameras.main.setSize(this.game.scale.width, this.game.scale.height);
    this.cameras.main.startFollow(this.player, true, 0.09, 0.09);
    this.cameras.main.setZoom(2);
  }

  private initMap() {
    this.map = this.make.tilemap({
      key: "home",
      tileWidth: 32,
      tileHeight: 32,
    });
    this.tileset = this.map.addTilesetImage("terrain_atlas", "terrain");
    this.groundLayer = this.map.createLayer("ground", this.tileset, 0, 0);

    this.physics.world.setBounds(
      0,
      0,
      this.groundLayer.width,
      this.groundLayer.height
    );
  }
}
