/**
* Player (character) class (constructor)
* Animated : yes. Sprite: yes. Physics: yes.
* Number of instances expected in final game: 2.
**/

export class Player extends Phaser.Physics.Arcade.Sprite {

	private jumpKey:Phaser.Input.Keyboard.Key;
	private rightKey:Phaser.Input.Keyboard.Key;
	private leftKey:Phaser.Input.Keyboard.Key;

	private isDead:boolean;

	private vx:number;
	private gravityY:number;
	private jumpVelocity:number;
	private bounce:number;

	public getDead():boolean {
		return this.isDead;
	}

	public setDead(pDead:boolean):void {
		this.isDead = pDead;
	}

	constructor(params) {
		super(params.scene, params.x, params.y, params.key, params.frame);

		this.isDead = false;
		this.gravityY = 50;
		this.jumpVelocity = -600;
		this.vx = 150;
		this.bounce = 0.5;

		// Sets 'this.body' (player body) to not null
		this.scene.physics.world.enable(this);

		this.setGravityY(this.gravityY);
		this.setBounce(this.bounce);
		this.setCollideWorldBounds(true);
		/* map.tiles is the public staticGroup declared in the GameMap class 
		from where each tile texture is drawn (with create() : see map.ts) so 
		that's the group which is colliding with the player */
		params.scene.physics.add.collider(params.scene.map.tiles, this);

		this.jumpKey = this.scene.input.keyboard.addKey(
			params.controlKeys['jump']
		);
		this.rightKey = this.scene.input.keyboard.addKey(
			params.controlKeys['right']
		);
		this.leftKey = this.scene.input.keyboard.addKey(
			params.controlKeys['left']
		);

		params.scene.anims.create({
			key: 'left',
			frames: params.scene.anims.generateFrameNumbers('player', {
				start: 0,
				end: 3
			}),
			frameRate: 10,
			repeat: -1
		});

		params.scene.anims.create({
			key: 'turn',
			frames: [{
				key: 'player',
				frame: 4
			}],
			frameRate: 20
		});

		params.scene.anims.create({
			key: 'right',
			frames: params.scene.anims.generateFrameNumbers('player', {
				start: 5,
				end: 8
			}),
			frameRate: 10,
			repeat: -1
		});

		// Responsible for the sprite to be visible on screen
		this.scene.add.existing(this);
	}

	update():void {
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
		}
	}
}