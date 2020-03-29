import { Projectile } from './projectile';
import { HealthBar } from './healthBar';

export class Player extends Phaser.Physics.Arcade.Sprite {

	private _projectiles: Phaser.GameObjects.Group;
	private healthBar: HealthBar;

	private jumpKey: Phaser.Input.Keyboard.Key;
	private rightKey: Phaser.Input.Keyboard.Key;
	private leftKey: Phaser.Input.Keyboard.Key;
	private shootKey: Phaser.Input.Keyboard.Key;
	private lastPressedKey: Phaser.Input.Keyboard.Key;

	private jumpSound: Phaser.Sound.BaseSound;

	private lastShoot: number;
	private health: number;
	private vx: number;
	private gravityY: number;
	private jumpVelocity: number;
	private bounce: number;

	public get projectiles(): Phaser.GameObjects.Group {
		return this._projectiles;
	}

	public hurt(): void {
		this.health -= 10;
		this.healthBar.decrease(10);
	}

	private initAnimations(): void {
		this.scene.anims.create({
			key: 'running',
			frames: this.scene.anims.generateFrameNames('character1', {
				prefix: 'Run_',
				start: 0,
				end: 9,
				zeroPad: 3
			}),
			repeat: -1
		});

		this.scene.anims.create({
			key: 'idling',
			frames: this.scene.anims.generateFrameNames('character1', {
				prefix: 'Idle_',
				start: 0,
				end: 0,
				zeroPad: 3
			})
		});
	}

	private initVitals(): void {
		this.health = 100;
	}
	
	private initPhysics(): void {
		this.gravityY = 50;
		this.jumpVelocity = -600;
		this.vx = 150;
		this.bounce = 0.5;
	}

	private applyPhysics(): void {
		// Sets 'this.body' to not null
		this.scene.physics.world.enable(this);
		this.setGravityY(this.gravityY);
		this.setBounce(this.bounce);
		this.setCollideWorldBounds(true);
	}

	private initControls(params): void {
		this.jumpKey = this.scene.input.keyboard.addKey(params.controlKeys['jump']),
		this.rightKey = this.scene.input.keyboard.addKey(params.controlKeys['right']),
		this.leftKey = this.scene.input.keyboard.addKey(params.controlKeys['left']),
		this.shootKey = this.scene.input.keyboard.addKey(params.controlKeys['shoot'])
	}

	private initHealthBar(params): void {
		this.healthBar = params.healthBar;
	}

	private initShooting(): void {
		this.lastShoot = 0;
		this._projectiles = this.scene.add.group({
			runChildUpdate: true
		});
	}

	private handleShooting(): void {
		if (this.shootKey.isDown && this.scene.time.now > this.lastShoot) {
			this._projectiles.add(
				new Projectile({
					scene: this.scene,
					x: this.x,
					y: this.y,
					// Bullet direction (left/right) based on last pressed key
					// (i.e direction of the player). Default: goes right.
					direction: (this.lastPressedKey === this.leftKey) ? -1 : 1,
					textureKey: 'projectile'
				})
			);
			this.lastShoot = this.scene.time.now + 500;
		}
	}

	private handleJumping(): void {
		// Allowing jump only if jump key is pressed and if on a static body
		if (this.jumpKey.isDown && this.body.blocked.down) {
			this.setVelocityY(this.jumpVelocity);
			this.jumpSound.play();
		}	
	}

	constructor(params) {
		super(params.scene, params.x, params.y, params.textureKey, params.frame);
		this.jumpSound = this.scene.sound.add('jumpSound');
		this.initVitals();
		this.initHealthBar(params);
		this.initShooting();
		this.initAnimations();
		this.initPhysics();
		this.applyPhysics();
		this.initControls(params);
		this.scene.add.existing(this);
	}

	update(): void {
		this.handleShooting();
		this.handleJumping();
		
		if (this.leftKey.isDown || this.rightKey.isDown) {

			this.anims.play('running', true);

			if (this.leftKey.isDown) {
				this.lastPressedKey = this.leftKey;
				this.setVelocityX(-this.vx);

			} else if (this.rightKey.isDown) {
				this.lastPressedKey = this.rightKey;
				this.setVelocityX(this.vx);
			}

		} else {

			this.setVelocityX(0);
			this.anims.play('idling');

		}

		if (this.lastPressedKey === this.leftKey) {
			this.flipX = true;
		} else if (this.lastPressedKey === this.rightKey) {
			this.flipX = false;
		}
	}

}