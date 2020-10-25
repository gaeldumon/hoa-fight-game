/** @format */

import { getGameWidth, getGameHeight } from "../helpers";

export class Bomb extends Phaser.Physics.Arcade.Image {
    private isOut(): boolean {
        if (
            this.x > getGameWidth(this.scene) ||
            this.y > getGameHeight(this.scene) ||
            this.x < 0 ||
            this.y < 0
        ) {
            return true;
        }
        return false;
    }

    constructor(params) {
        super(params.scene, params.x, params.y, params.textureKey);

        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);

        this.setBounce(1);
        this.setVelocity(Phaser.Math.Between(-200, 200), 20);
        this.setGravityY(1000);
    }

    update(): void {
        if (this.isOut()) {
            this.destroy();
            console.log("Bomb destroyed cause out of world bounds");
        }
    }
}
