import { gameWidth, gameHeight } from "../helpers";

export class Projectile extends Phaser.Physics.Arcade.Sprite {
    private vx: number;
    private direction: number;

    private isOut(): boolean {
        return (
            this.x > gameWidth(this.scene) ||
            this.y > gameHeight(this.scene) ||
            this.x < 0 ||
            this.y < 0
        );
    }

    constructor(params) {
        super(params.scene, params.x, params.y, params.textureKey);

        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);

        this.vx = 700;
        this.direction = params.direction;

        this.setVelocityX(this.direction * this.vx);
    }

    update(): void {
        if (this.isOut()) {
            this.destroy();
            console.log("Projectile destroyed cause out of world bounds");
        }
    }
}
