import { getGameWidth, getGameHeight } from '../helpers';

export class Projectile extends Phaser.Physics.Arcade.Image {
	private vx: number;
	private vy: number;

	private initPhysics(params): void {
		this.vx = params.vx;
		this.vy = params.vy;
	}

	private applyPhysics(): void {
		// Sets projectile body to not null
		this.scene.physics.world.enable(this);
		this.setVelocity(this.vx, this.vy);
	}

	constructor(params) {
		super(params.scene, params.x, params.y, params.textureKey);
		this.initPhysics(params);
		this.applyPhysics();
		this.scene.add.existing(this);
	}

	update(): void {
		if (this.x > getGameWidth(this.scene) || this.x < 0 || 
		this.y > getGameHeight(this.scene) || this.y < 0) {
			this.destroy();
			console.log('Projectile destroyed');
		}
	}
}