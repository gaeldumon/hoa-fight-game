/** @format */

import { getGameWidth, getGameHeight } from "../helpers";

export class Projectile extends Phaser.Physics.Arcade.Sprite {
    private vx: number;
    private direction: number;

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

    private initAnimations(): void {
        this.scene.anims.create({
            key: "collisionEffect1",
            frames: this.scene.anims.generateFrameNumbers("collisionEffect1", {
                start: 0,
                end: 1,
            }),
            repeat: 1,
        });
    }

    constructor(params) {
        super(params.scene, params.x, params.y, params.textureKey);

        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);

        this.vx = 700;
        this.direction = params.direction;

        this.initAnimations();

        this.setVelocityX(this.direction * this.vx);
    }

    update(): void {
        if (this.isOut()) {
            this.destroy();
            console.log("Projectile destroyed cause out of world bounds");
        }
    }
}
