import { getGameWidth, getGameHeight } from '../helpers';

export class Projectile extends Phaser.Physics.Arcade.Image {
	private vx: number;
	private direction: number;

	private isOut(): boolean {
		if (this.x > getGameWidth(this.scene) || this.y > getGameHeight(this.scene) || this.x < 0 || this.y < 0) {
			return true;
		}
		return false;
	}

	constructor(params) {
		super(params.scene, params.x, params.y, params.textureKey);

		this.vx = 1500;
		this.direction = params.direction;

		this.scene.physics.world.enable(this);
		this.scene.add.existing(this);

		this.setVelocityX(this.direction * this.vx);
	}

	update(): void {
		// this.body.blocked collision check only works with static stuff, like
		// tiles, static bodies etc.
		if (this.isOut() || !this.body.blocked.none) {
			this.destroy(true);
			console.log("Projectile destroyed");
		}
	}
}