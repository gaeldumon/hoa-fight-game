import { getGameWidth, getGameHeight } from '../helpers';

export class Projectile extends Phaser.Physics.Arcade.Image {
	private speed: number;

	constructor(params) {
		super(params.scene, params.x, params.y, params.key);

		this.speed = 200;

		this.scene.physics.world.enable(this);
		
		this.setVelocityX(this.speed);

		//this.body.allowGravity = false;

		this.scene.add.existing(this);
	}

	update(): void {
		if (this.x > getGameWidth(this.scene) || this.x < 0 || this.y > getGameHeight(this.scene) || this.y < 0) {
			this.destroy();
			console.log('Projectile destroyed');
		}
	}
}