export class Player extends Phaser.Physics.Arcade.Sprite {

	private jumpKey: Phaser.Input.Keyboard.Key;
	private rightKey: Phaser.Input.Keyboard.Key;
	private leftKey: Phaser.Input.Keyboard.Key;
	private isDead: boolean;
	private health: number;
	private vx: number;
	private gravityY: number;
	private jumpVelocity: number;
	private bounce: number;
	private jumpSound: Phaser.Sound.BaseSound;

	public getDead(): boolean {
		return this.isDead;
	}

	public setDead(pDead: boolean): void {
		this.isDead = pDead;
	}


	constructor(params) {

		super(params.scene, params.x, params.y, params.key, params.frame);

		this.isDead = false;
		this.health = 100;
		this.gravityY = 50;
		this.jumpVelocity = -600;
		this.vx = 150;
		this.bounce = 0.5;
		this.jumpSound = this.scene.sound.add('jumpSound');

		// Sets 'this.body' (player body --> used in this.update) to not null
		this.scene.physics.world.enable(this);

		this.setGravityY(this.gravityY);
		this.setBounce(this.bounce);
		this.setCollideWorldBounds(true);

		this.jumpKey = this.scene.input.keyboard.addKey(params.controlKeys['jump']);
		this.rightKey = this.scene.input.keyboard.addKey(params.controlKeys['right']);
		this.leftKey = this.scene.input.keyboard.addKey(params.controlKeys['left']);

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

		// Responsible for the sprite to be visible on screen
		this.scene.add.existing(this);
	}

	update(): void {

		if (this.leftKey.isDown) {
			this.setVelocityX(-this.vx);
			this.anims.play('left', true);

		} else if (this.rightKey.isDown) {
			this.setVelocityX(this.vx);
			this.anims.play('right', true);
			
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