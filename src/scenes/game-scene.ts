import { Input } from 'phaser';
import { Player } from '../prefabs/player';
import { Bomb } from '../prefabs/bomb';
import { GameMap } from '../prefabs/map';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Game'
};

export class GameScene extends Phaser.Scene {
	
	private bombs: any;
	private player1: Player;
	private player2: Player;
	private map: GameMap;

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

		this.bombs = this.physics.add.group();
		Bomb.create({scene: this, group: this.bombs});
		this.physics.add.collider(this.bombs, this.map.tiles);
		this.physics.add.collider(this.player1, this.bombs, Bomb.hit, null, this);

		// Creation of a bomb every 30 seconds
		// 3rd argument is the params for the createBomb() function
		window.setInterval(Bomb.create, 30*1000, {
			scene: this,
			group: this.bombs
		});
	}

	public update() {

		this.player1.update();
		this.player2.update();

	}
}
