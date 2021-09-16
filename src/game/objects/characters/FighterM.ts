import { Physics } from "phaser";

export class FighterM extends Physics.Arcade.Sprite {
  private keyW: Phaser.Input.Keyboard.Key;
  private keyA: Phaser.Input.Keyboard.Key;
  private keyS: Phaser.Input.Keyboard.Key;
  private keyD: Phaser.Input.Keyboard.Key;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "fighter-m");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.getBody().setCollideWorldBounds(true);

    // this.getBody().setSize(24, 32);

    this.initAnimations();

    // KEYS
    this.keyW = this.scene.input.keyboard.addKey("W");
    this.keyA = this.scene.input.keyboard.addKey("A");
    this.keyS = this.scene.input.keyboard.addKey("S");
    this.keyD = this.scene.input.keyboard.addKey("D");
  }

  public update() {
    this.getBody().setVelocity(0);

    if (this.keyW?.isDown) {
      this.body.velocity.y = -110;
      !this.anims.isPlaying && this.anims.play("up", true);
    }

    if (this.keyA?.isDown) {
      this.body.velocity.x = -110;
      !this.anims.isPlaying && this.anims.play("left", true);
    }

    if (this.keyS?.isDown) {
      this.body.velocity.y = 110;
      !this.anims.isPlaying && this.anims.play("down", true);
    }

    if (this.keyD?.isDown) {
      this.body.velocity.x = 110;
      !this.anims.isPlaying && this.anims.play("right", true);
    }
  }

  private initAnimations() {
    this.scene.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("fighter-m", {
        start: 0,
        end: 2,
      }),
      frameRate: 6,
      // repeat: -1,
    });

    this.scene.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("fighter-m", {
        start: 3,
        end: 5,
      }),
      frameRate: 6,
      // repeat: -1,
    });

    this.scene.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("fighter-m", {
        start: 6,
        end: 8,
      }),
      frameRate: 6,
      // repeat: -1,
    });

    this.scene.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("fighter-m", {
        start: 9,
        end: 11,
      }),
      frameRate: 6,
      // repeat: -1,
    });
  }

  protected getBody(): Physics.Arcade.Body {
    return this.body as Physics.Arcade.Body;
  }
}
