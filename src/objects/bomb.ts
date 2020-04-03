export class Bomb extends Phaser.Physics.Arcade.Image {
	constructor(params) {
		super(params.scene, params.x, params.y, params.textureKey);
		this.scene.physics.world.enable(this);
		this.scene.add.existing(this);
		this.setBounce(1);
		this.setCollideWorldBounds(true);
		this.setVelocity(Phaser.Math.Between(-200, 200), 20);
		this.setGravityY(1000);
	}
}