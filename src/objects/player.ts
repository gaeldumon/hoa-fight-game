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
		if (this.health > 0) {
			this.health -= 20;
		}
		this.healthBar.decrease(20);
		console.log(`Health: ${this.health}`);
	}

	private initAnimations(params): void {
		this.scene.anims.create({
			key: 'walking',
			frames: this.scene.anims.generateFrameNames(params.textureKey, {
				prefix: 'walk-side-armed',
				start: 1,
				end: 4,
				zeroPad: 2
			}),
			frameRate: 10,
			repeat: -1
		});

		this.scene.anims.create({
			key: 'walkingShooting',
			frames: this.scene.anims.generateFrameNames(params.textureKey, {
				prefix: 'walk-side-shoot',
				start: 1,
				end: 4,
				zeroPad: 2
			}),
			repeat: -1
		});

		this.scene.anims.create({
			key: 'idling',
			frames: this.scene.anims.generateFrameNames(params.textureKey, {
				prefix: 'idle-front-armed',
				start: 1,
				end: 4,
				zeroPad: 2
			}),
			frameRate: 10,
			repeat: -1
		});

		this.scene.anims.create({
			key: 'idlingShooting',
			frames: this.scene.anims.generateFrameNames(params.textureKey, {
				prefix: 'idle-front-shoot',
				start: 1,
				end: 1,
				zeroPad: 2
			}),
			repeat: -1
		});

	}

	private initVitals(): void {
		this.health = 100;
	}
	
	private initPhysics(): void {
		this.gravityY = 1000;
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
					x: this.x + 20,
					y: this.y + 11,
					// Bullet direction (left/right) based on last pressed key
					// (i.e direction of the player). Default: goes right.
					direction: (this.lastPressedKey === this.leftKey) ? -1 : 1,
					textureKey: 'projectile'
				})
			);
			this.lastShoot = this.scene.time.now + 1400;
		}
	}

	constructor(params) {
		super(params.scene, params.x, params.y, params.textureKey);
		this.jumpSound = this.scene.sound.add('jumpSound');
		this.initVitals();
		this.initHealthBar(params);
		this.initShooting();
		this.initAnimations(params);
		this.initPhysics();
		this.applyPhysics();
		this.initControls(params);

		// Restrain the boundingBox
		this.setSize(20, 60);

		this.scene.add.existing(this);
	}

	// Player's states (shooting, walking etc) will be subject to complete
	// refactoring by using the State Design Pattern. This is provisory.
	update(): void {
		this.handleShooting();

		// JUMPING STATE
		// Allowing jump only if jump key is pressed and if on a static body
		if (this.jumpKey.isDown && this.body.blocked.down) {
			this.setVelocityY(this.jumpVelocity);
			this.jumpSound.play();
		}

		// WALKING STATE
		if (this.leftKey.isDown || this.rightKey.isDown) {
			
			// SHOOTING STATE while walking
			if (this.shootKey.isDown) {
				this.anims.play('walkingShooting', true);
			} else {
				this.anims.play('walking', true);
			}

			if (this.leftKey.isDown) {
				this.lastPressedKey = this.leftKey;
				this.setVelocityX(-this.vx);

			} else if (this.rightKey.isDown) {
				this.lastPressedKey = this.rightKey;
				this.setVelocityX(this.vx);
			}

		// IDLING STATE
		} else {

			this.setVelocityX(0);
			
			// SHOOTING STATE while idling
			if (this.shootKey.isDown) {
				this.anims.play('idlingShooting', true)
			} else {
				this.anims.play('idling', true);
			}
			
		}

		if (this.lastPressedKey === this.leftKey) {
			this.flipX = true;
		} else if (this.lastPressedKey === this.rightKey) {
			this.flipX = false;
		} else {
			this.flipX = false;
		}
	}

}