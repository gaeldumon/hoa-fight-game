export class Player extends Phaser.Physics.Arcade.Sprite {

	private jumpKey:Phaser.Input.Keyboard.Key;
	private rightKey:Phaser.Input.Keyboard.Key;
	private leftKey:Phaser.Input.Keyboard.Key;
	private isDead:boolean;
	private gravityY:number;
	private jumpVelocity:number;
	private vx:number;
	private bounce:number;

	public getDead():boolean {
		return this.isDead;
	}

	public setDead(pDead:boolean):void {
		this.isDead = pDead;
	}

	constructor(params) {
		super(params.scene, params.x, params.y, params.key);

		this.isDead = false;
		this.gravityY = 50;
		this.jumpVelocity = -600;
		this.vx = 150;
		this.bounce = 0.5;

		this.scene.physics.world.enable(this);
		this.body.setGravityY(this.gravityY);
		this.body.setBounce(this.bounce);
		this.body.setCollideWorldBounds(true);
		this.physics.add.collider(params.scene.ground, this.body);

		this.jumpKey = this.scene.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.SPACE
		);
		this.rightKey = this.scene.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.RIGHT
		);
		this.leftKey = this.scene.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.LEFT
		);

		this.scene.add.existing(this);
	}

	update():void {
		if (this.leftKey.isDown) {
			this.body.setVelocityX(-this.vx);
		} else if (this.rightKey.isDown) {
			this.body.setVelocityX(this.vx);
		} else {
			this.body.setVelocityX(0);
		}

		if (this.jumpKey.isDown && this.body.touching.down) {
			this.body.setVelocityY(this.jumpVelocity);
		}
	}
}