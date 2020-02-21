import { Input } from 'phaser';
//import { Player } from '../prefabs/player.ts';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Game'
};

export class GameScene extends Phaser.Scene {
	
	private controlKeys: Phaser.Types.Input.Keyboard.CursorKeys;

	/******************** Player ***********************************/
	private player: Phaser.Physics.Arcade.Sprite;
	private playerBounce:number = 0.5;
	private jumpVelocity:number = -600;
	private playerGravityY:number = 50;
	private vx:number = 150;
	private jumpSound:any;

	/********************** Bombs **********************************/
	private bombs:any;
	private bombCreationInterval:number = 20 * 1000;

	/********************** Map ************************************/
	private ground:any;
	private grid:string[][] = [
		'00000000000000000000000000000000'.split(''),
		'00000000000000000000000000000000'.split(''),
		'00000000000000000000000000000000'.split(''),
		'10000000000000000000000000000000'.split(''),
		'10000000000000000000000000000000'.split(''),
		'10000000000000000000000000000000'.split(''),
		'11111110000000000000000000000000'.split(''),
		'00000000000000000000000000000000'.split(''),
		'00000000000000000000000000000000'.split(''),
		'00000000000000000000000000000000'.split(''),
		'00000001111100000000110000111111'.split(''),
		'00000000000000000000000000000000'.split(''),
		'00000000000000000000000000000000'.split(''),
		'00011100000000000011000000000000'.split(''),
		'00000000000000000000000000000000'.split(''),
		'00000000111000000000000000000000'.split(''),
		'00000000000000000000000000111111'.split(''),
		'00000000000000000000000000000000'.split(''),
		'11110000000000011110000000000000'.split(''),
		'00000000000000000000000000000000'.split(''),
		'11111111111111111111111111111111'.split('')
	];

	constructor() {
		super(sceneConfig);
	}

	public preload() {

		// Load out package
		this.load.pack(
			"preload",
			"assets/pack.json",
			"preload"
		);
		
	}

	public create() {

		this.controlKeys = this.input.keyboard.createCursorKeys();

		this.jumpSound = this.sound.add('jumpSound');

		/********************** Map ************************************/
		this.ground = this.physics.add.staticGroup();
		for (let line = 0; line < this.grid.length; line++) {
			for (let col = 0; col < this.grid[line].length; col++) {
				if (this.grid[line][col] !== '0') {
					this.ground.create(col*32+16, line*32-16, 'ground');
				}
			}
		}
		/***************************************************************/

		/******************** Player ***********************************/
		this.player = this.physics.add.sprite(100, 150, 'dude');
		this.player.setBounce(this.playerBounce);
		this.player.setCollideWorldBounds(true);
		this.player.setGravityY(this.playerGravityY);
		this.physics.add.collider(this.ground, this.player);

		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('dude', {
				start: 0,
				end: 3
			}),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key: 'turn',
			frames: [{
				key: 'dude',
				frame: 4
			}],
			frameRate: 20
		});

		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('dude', {
				start: 5,
				end: 8
			}),
			frameRate: 10,
			repeat: -1
		});
		/***************************************************************/

		/********************** Bombs **********************************/
		this.bombs = this.physics.add.group();
		this.physics.add.collider(this.bombs, this.ground);

		function createBomb(player, bombs) {
			let x = (player.x < 500) ? Phaser.Math.Between(500, 1000) : Phaser.Math.Between(0, 500);
			let bomb = bombs.create(x, 0, 'bomb');
			bomb.setBounce(1);
			bomb.setCollideWorldBounds(true);
			bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
			bomb.allowGravity = false;
		}
		window.setInterval(createBomb, this.bombCreationInterval, this.player, this.bombs);
		
		/***************************************************************/
	}

	public update() {

		if (this.controlKeys.left.isDown) {

			this.player.setVelocityX(-this.vx);
			this.player.anims.play('left', true);

		} else if (this.controlKeys.right.isDown) {

			this.player.setVelocityX(this.vx);
			this.player.anims.play('right', true);

		} else {

			this.player.setVelocityX(0);
			this.player.anims.play('turn');

		}

		if (this.controlKeys.space.isDown && this.player.body.touching.down) {
			this.player.setVelocityY(this.jumpVelocity);
			this.jumpSound.play();
		}

	}
}
