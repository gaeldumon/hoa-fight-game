import { Projectile } from "./projectile";

export class Player extends Phaser.Physics.Arcade.Sprite {

	private jumpKey: Phaser.Input.Keyboard.Key;
	private rightKey: Phaser.Input.Keyboard.Key;
	private leftKey: Phaser.Input.Keyboard.Key;
	private shootKey: Phaser.Input.Keyboard.Key;
	private lastPressedKey: Phaser.Input.Keyboard.Key;
	private lastShoot: number;
	private projectiles: Phaser.GameObjects.Group;
	private isDead: boolean;
	private health: number;
	private vx: number;
	private gravityY: number;
	private jumpVelocity: number;
	private bounce: number;
	private jumpSound: Phaser.Sound.BaseSound;

	public getProjectiles(): Phaser.GameObjects.Group {
		return this.projectiles;
	}

	public getIsDead(): boolean {
		return this.isDead;
	}

	public setIsDead(pDead: boolean): void {
		this.isDead = pDead;
	}

	private initAnimations(): void {
		this.scene.anims.create({
			key: 'left',
			frames: this.scene.anims.generateFrameNumbers('player', {
				start: 0,
				end: 3
			}),
			frameRate: 10,
			repeat: -1
		});

		this.scene.anims.create({
			key: 'turn',
			frames: [{
				key: 'player',
				frame: 4
			}],
			frameRate: 20
		});

		this.scene.anims.create({
			key: 'right',
			frames: this.scene.anims.generateFrameNumbers('player', {
				start: 5,
				end: 8
			}),
			frameRate: 10,
			repeat: -1
		});
	}

	private initVitals(): void {
		this.setIsDead(false);
		this.health = 100;
	}
	
	private initPhysics(): void {
		this.gravityY = 50;
		this.jumpVelocity = -600;
		this.vx = 150;
		this.bounce = 0.5;
	}

	private applyPhysics(): void {
		// Sets 'this.body' to not null (player body used in this.update)
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

	private initShooting(): void {
		this.lastShoot = 0;
		
		this.projectiles = this.scene.add.group({
			runChildUpdate: true
		});
	}

	private handleShooting(): void {
		if (this.shootKey.isDown && this.scene.time.now > this.lastShoot) {

			this.projectiles.add(
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
		// this.body.touching.down is used for physics body collision.
		// But here the ground is made of Tiles not physics bodies so we use
		// the more generic body.blocked.down, as the doc suggests.
		// The docs mention onFloor() which returns this.body.blocked.down
		// but it doesn't work here, it doesn't seem to belong to body
		// but it's in the arcade physics body Docs...
		if (this.jumpKey.isDown && this.body.blocked.down) {
			this.setVelocityY(this.jumpVelocity);
			this.jumpSound.play();
		}
	}

	constructor(params) {
		super(params.scene, params.x, params.y, params.textureKey, params.frame);
		this.jumpSound = this.scene.sound.add('jumpSound');
		this.initVitals();
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
		
		if (this.leftKey.isDown) {

			this.lastPressedKey = this.leftKey;
			this.setVelocityX(-this.vx);
			this.anims.play('left', true);

		} else if (this.rightKey.isDown) {

			this.lastPressedKey = this.rightKey;
			this.setVelocityX(this.vx);
			this.anims.play('right', true);

		} else {

			this.setVelocityX(0);
			if (this.lastPressedKey === this.leftKey) {
				this.anims.play('left');
			} else if (this.lastPressedKey === this.rightKey) {
				this.anims.play('right');
			} else {
				this.anims.play('turn');
			}
		}
	}
}