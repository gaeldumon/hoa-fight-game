import { Projectile } from './projectile';
import { HealthBar } from './healthBar';
import { Character } from './character';

export class Player extends Phaser.Physics.Arcade.Sprite {

	private _projectiles: Phaser.GameObjects.Group;
	private healthBar: HealthBar;

	private rightKey: Phaser.Input.Keyboard.Key;
	private leftKey: Phaser.Input.Keyboard.Key;
	private jumpKey: Phaser.Input.Keyboard.Key;
	private shootKey: Phaser.Input.Keyboard.Key;
	private lastPressedKey: Phaser.Input.Keyboard.Key;

	private jumpSound: Phaser.Sound.BaseSound;
	private shootSound: Phaser.Sound.BaseSound;

	private lastShoot: number;
	private health: number;
	private vx: number;
	private gravityY: number;
	private jumpVelocity: number;
	private bounce: number;

	

	public static readonly States = {
		STANDING: 'STAND',
		HURT: 'HURT',
		DIE: 'DIE'
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
		// Debug
		console.log(`Health: ${this.health}`);
	}

	private initSounds(): void {
		this.jumpSound = this.scene.sound.add('jumpSound');
		this.shootSound = this.scene.sound.add('shootSound');
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
		this.scene.physics.world.enable(this);
		this.setGravityY(this.gravityY);
		this.setBounce(this.bounce);
		this.setCollideWorldBounds(true);
	}

	private initControls(pKeys): void {
		this.jumpKey = this.scene.input.keyboard.addKey(pKeys['jump']);
		this.rightKey = this.scene.input.keyboard.addKey(pKeys['right']);
		this.leftKey = this.scene.input.keyboard.addKey(pKeys['left']);
		this.shootKey = this.scene.input.keyboard.addKey(pKeys['shoot']);
	}

	private initHealthBar(pHealthBar: HealthBar): void {
		this.healthBar = pHealthBar;
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
			this.shootSound.play();
			this.lastShoot = this.scene.time.now + 500;
		}
	}

	constructor(params: { 
		scene: Phaser.Scene; 
		x: number; 
		y: number; 
		textureKey: string;
		controlKeys: object;
		healthBar: HealthBar;
	}) {

		super(params.scene, params.x, params.y, params.textureKey);

		this.scene.add.existing(this);

		this.initSounds();
		this.initVitals();
		this.initHealthBar(params.healthBar);
		this.initShooting();
		this.initPhysics();
		this.applyPhysics();
		this.initControls(params.controlKeys);

		// Restrain the boundingBox
		this.setSize(20, 60);

		this.setState(Player.States.STANDING);
	}

	update(): void {

		// Jumping
		if (this.jumpKey.isDown) {
			if (this.body.blocked.down || this.body.touching.down) {
				this.setVelocityY(this.jumpVelocity);
				this.jumpSound.play();
			}
		// Walking
		} else if (this.rightKey.isDown || this.leftKey.isDown) {
			// Shooting while walking => Warning: double state at once!
			if (this.shootKey.isDown) {
				this.anims.play(`${this.texture.key}WALK_SHOOT`, true);
				this.shoot();
			// Just walking
			} else {
				this.anims.play(`${this.texture.key}WALK`, true);
				// Okay now one state: only walking
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
				this.anims.play(`${this.texture.key}IDLE_SHOOT`, true);
				this.shoot();
			// Just not walking
			} else {
				this.anims.play(`${this.texture.key}IDLE`, true);
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