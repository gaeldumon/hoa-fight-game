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

	public static readonly States = {
		HIT: 'HIT',
		DIE: 'DIE',
		JUMPING: 'JUMPING',
		WALKING: 'WALKING',
		SHOOTING: 'SHOOTING',
		IDLING: 'IDLING'
	}

	public get projectiles(): Phaser.GameObjects.Group {
		return this._projectiles;
	}

	public isDead(): boolean {
		return this.health <= 0;
	}

	public hurt(): void {
		if (this.health > 0) {
			this.health -= 20;
			this.healthBar.decrease(20);
		}
		console.log(`Health: ${this.health}`);
	}

	private initAnimations(params): void {
		this.scene.anims.create({
			key: 'WALK',
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
			key: 'WALK_SHOOT',
			frames: this.scene.anims.generateFrameNames(params.textureKey, {
				prefix: 'walk-side-shoot',
				start: 1,
				end: 4,
				zeroPad: 2
			}),
			repeat: -1
		});

		this.scene.anims.create({
			key: 'IDLE',
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
			key: 'IDLE_SHOOT',
			frames: this.scene.anims.generateFrameNames(params.textureKey, {
				prefix: 'idle-front-shoot',
				start: 1,
				end: 1,
				zeroPad: 2
			}),
			repeat: -1
		});

		this.scene.anims.create({
			key: 'HIT',
			frames: this.scene.anims.generateFrameNames(params.textureKey, {
				prefix: 'hit',
				start: 1,
				end: 1,
				zeroPad: 2,
			}),
			repeat: -1
		});

		this.scene.anims.create({
			key: 'DIE',
			frames: this.scene.anims.generateFrameNames(params.textureKey, {
				prefix: 'dead',
				start: 1,
				end: 1,
				zeroPad: 2,
			}),
			repeat: 1
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

	private shoot(): void {
		if (this.scene.time.now > this.lastShoot) {
			this._projectiles.add(
				new Projectile({
					scene: this.scene,
					// Changing bullet starting point if sprite is flipped on X axis
					x: (!this.flipX) ? this.x + 20 : this.x - 20,
					y: this.y + 11,
					// Bullet direction (left/right) based on last pressed key
					// (i.e direction of the player). Default: goes right.
					direction: (this.lastPressedKey === this.leftKey) ? -1 : 1,
					textureKey: 'projectile'
				})
			);
			this.lastShoot = this.scene.time.now + 500;
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

	update(): void {

		// Jumping
		if (this.jumpKey.isDown) {
			if (this.body.blocked.down) {
				this.setVelocityY(this.jumpVelocity);
				this.jumpSound.play();
				this.setState(Player.States.JUMPING);
			}
		// Walking
		} else if (this.rightKey.isDown || this.leftKey.isDown) {
			// Shooting while walking => Warning: double state at once!
			if (this.shootKey.isDown) {
				this.anims.play('WALK_SHOOT', true);
				this.shoot();
			// Just walking
			} else {
				this.anims.play('WALK', true);
				// Okay now one state: only walking
				this.setState(Player.States.WALKING);
			}
			// Walking : going right
			if (this.rightKey.isDown) {
				this.lastPressedKey = this.rightKey;
				this.setVelocityX(this.vx);
			}
			// Walking : going left
			if (this.leftKey.isDown) {
				this.lastPressedKey = this.leftKey;
				this.setVelocityX(-this.vx);
			}
		// Not walking (idling)
		} else {
			this.setVelocityX(0);
			// Shooting while idling => Warning: double state at once!
			if (this.shootKey.isDown) {
				this.anims.play('IDLE_SHOOT', true);
				this.shoot();
			// Just not walking
			} else {
				this.anims.play('IDLE', true);
				this.setState(Player.States.IDLING);
			}
		}

		if (this.lastPressedKey === this.leftKey) {
			// Changed sprite orientation: facing left
			this.flipX = true;
		} else if (this.lastPressedKey === this.rightKey) {
			// Original sprite orientation: facing right
			this.flipX = false;
		} else {
			// Original sprite orientation: facing right
			this.flipX = false;
		}

	}

}