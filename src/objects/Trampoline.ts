/** @format */

export class Trampoline extends Phaser.Physics.Arcade.Sprite {

    constructor(params: { scene: Phaser.Scene; x: number; y: number }) {
		super(params.scene, params.x, params.y, "trampoline");
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
    }
}
