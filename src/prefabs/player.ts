import { Projectile } from "./projectile";

export class Player extends Phaser.Physics.Arcade.Sprite {

	private jumpKey: Phaser.Input.Keyboard.Key;
	private rightKey: Phaser.Input.Keyboard.Key;
	private leftKey: Phaser.Input.Keyboard.Key;
	private shootKey: Phaser.Input.Keyboard.Key;
	private lastShoot: number;
	private projectiles: Phaser.GameObjects.Group;
	private _isDead: boolean;
	private health: number;
	private vx: number;
	private gravityY: number;
	private jumpVelocity: number;
	private bounce: number;
	private jumpSound: Phaser.Sound.BaseSound;

	public get isDead(): boolean {
		return this._isDead;
	}

	public set isDead(pDead: boolean) {
		this._isDead = pDead;
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
		this.isDead = false;
		this.health = 100;
	}

	private initShooting(): void {
		this.lastShoot = 0;
		this.projectiles = this.scene.add.group({
			runChildUpdate: true
		});
	}
	
	private initPhysics(): void {
		this.gravityY = 50;
		this.jumpVelocity = -600;
		this.vx = 150;
		this.bounce = 0.5;
	}

	private handlePhysics(): void {
		// Sets 'this.body' to not null (player body used in this.update)
		this.scene.physics.world.enable(this);
		this.setGravityY(this.gravityY);
		this.setBounce(this.bounce);
		this.setCollideWorldBounds(true);
	}

	private makeVisible(): void {
		this.scene.add.existing(this);
	}

	private initControls(params): void {
		this.jumpKey = this.scene.input.keyboard.addKey(params.controlKeys['jump']);
		this.rightKey = this.scene.input.keyboard.addKey(params.controlKeys['right']);
		this.leftKey = this.scene.input.keyboard.addKey(params.controlKeys['left']);
		this.shootKey = this.scene.input.keyboard.addKey(params.controlKeys['shoot']);
	}

	constructor(params) {
		super(params.scene, params.x, params.y, params.key, params.frame);

		this.jumpSound = this.scene.sound.add('jumpSound');

		this.initVitals();
		this.initShooting();
		this.initAnimations();
		this.initPhysics();
		this.handlePhysics();
		this.initControls(params);
		this.makeVisible();
	}

	private handleShooting(): void {
		if (this.shootKey.isDown && this.scene.time.now > this.lastShoot) {
			this.projectiles.add(
				new Projectile({
					scene: this.scene,
					x: this.x,
					y: this.y - this.height/2,
					key: "projectile"
				})
			);
			this.lastShoot = this.scene.time.now + 500;
		}
	}

	update(): void {
		if (this.leftKey.isDown || this.rightKey.isDown) {

			this.handleShooting();

			if (this.leftKey.isDown) {
				this.setVelocityX(-this.vx);
				this.anims.play('left', true);
			} else if (this.rightKey.isDown) {
				this.setVelocityX(this.vx);
				this.anims.play('right', true);
			}

		} else {
			this.setVelocityX(0);
			this.anims.play('turn');
		}

		if (this.jumpKey.isDown && this.body.touching.down) {
			this.setVelocityY(this.jumpVelocity);
			this.jumpSound.play();
		}
	}
}