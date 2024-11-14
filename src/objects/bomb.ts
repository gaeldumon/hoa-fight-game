import { gameWidth, gameHeight } from '../helpers';

export class Bomb extends Phaser.Physics.Arcade.Sprite {
    constructor(params: { scene: Phaser.Scene; x: number; y: number; textureKey: string }) {
        super(params.scene, params.x, params.y, params.textureKey);

        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);

        this.setBounce(1);
        this.setVelocity(Phaser.Math.Between(-200, 200), 20);
        this.setGravityY(1000);
    }

    private isOut(): boolean {
        return this.y > gameHeight(this.scene) || this.y < 0;
    }

    private handleReposition(): void {
        if (this.x > gameWidth(this.scene)) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = gameWidth(this.scene);
        }
    }

    update(): void {
        this.handleReposition();
        if (this.isOut()) this.destroy();
    }
}
