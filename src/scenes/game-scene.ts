import { Input } from 'phaser';
import { Player } from '../prefabs/player';
import { GameMap } from '../prefabs/map';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Game'
};

export class GameScene extends Phaser.Scene {
	
	private bombs:any;
	private player1: Player;
	private player2: Player;
	private map: GameMap;

	createBomb(params):void {
		let x = (params.player.x < 500) ? Phaser.Math.Between(500, 1000) : Phaser.Math.Between(0, 500);
		// The key 'bomb' must be the same as the one used in pack.json
		let bomb = params.group.create(x, 0, 'bomb');
		bomb.setBounce(1);
		bomb.setCollideWorldBounds(true);
		bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
		bomb.allowGravity = false;
	}

	constructor() {
		super(sceneConfig);
	}

	public preload() {

		this.load.pack(
			"preload",
			"assets/pack.json",
			"preload"
		);
		
	}

	public create() {

		this.map = new GameMap({
			scene: this
		});

		this.player1 = new Player({
			scene: this,
			x: 150, 
			y: 300,
			key: 'player',
			controlKeys: {
				right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
				left: Phaser.Input.Keyboard.KeyCodes.LEFT,
				jump: Phaser.Input.Keyboard.KeyCodes.UP
			}
		});

		this.player2 = new Player({
			scene: this,
			x: 600,
			y: 400,
			key: 'player',
			controlKeys: {
				right: Phaser.Input.Keyboard.KeyCodes.D,
				left: Phaser.Input.Keyboard.KeyCodes.Q,
				jump: Phaser.Input.Keyboard.KeyCodes.SPACE
			}
		});

		// Temporary collider between the 2 players (which are physics arcade sprites)
		this.physics.add.collider(this.player1, this.player2);

		this.bombs = this.physics.add.group();
		/* map.tiles is the public staticGroup declared in the GameMap class 
		from where each tile texture is drawn (with create() : see map.ts) so 
		that's the group which is colliding with the bombs */
		this.physics.add.collider(this.bombs, this.map.tiles);
		// Creation of a bomb every 30 seconds
		window.setInterval(this.createBomb, 30*1000, {
			player: this.player1, 
			group: this.bombs
		});
	}

	public update() {

		this.player1.update();
		this.player2.update();

	}
}
