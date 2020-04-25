import { getGameWidth } from '../helpers';
import { Bomb } from '../objects/bomb';
import { Hud } from '../objects/hud';
import { Player } from '../objects/player';
import { HealthBar } from '../objects/healthBar';
import { Level } from '../objects/level';
import { User } from '../objects/user';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Game'
};


export class GameScene extends Phaser.Scene {
	
	private player1: Player;
	private player2: Player;
	private hud1: Hud;
	private hud2: Hud;
	private tilemap: Level["tilemap"];
	private bombs: Phaser.GameObjects.Group;
	private bombCreationEvent: Phaser.Time.TimerEvent;
	private newSceneTimedEvent: Phaser.Time.TimerEvent;
	private musicTheme: Phaser.Sound.BaseSound;


	private setColliders(): void {

		this.physics.add.collider(
			this.bombs,
			this.tilemap.mainLayer
		);

		this.physics.add.collider(
			this.bombs,
			this.player1,
			() => {
				this.bombs.getFirstAlive().destroy();
				this.player1.hurt();
			}
		);

		this.physics.add.collider(
			this.bombs,
			this.player2,
			() => {
				this.bombs.getFirstAlive().destroy();
				this.player2.hurt();
			}
		);

		this.physics.add.collider(
			this.player1,
			this.player2
		);

		this.physics.add.collider(
			[this.player1, this.player2], 
			this.tilemap.mainLayer
		);

		this.physics.add.collider(
			this.player1,
			this.player2.projectiles,
			() => { 
				this.player2.projectiles.getFirstAlive().destroy();
				this.player1.hurt();
				this.player1.setState(Player.States.HURT);
			}
		);

		this.physics.add.collider(
			this.player2,
			this.player1.projectiles,
			() => { 
				this.player1.projectiles.getFirstAlive().destroy();
				this.player2.hurt();
				this.player2.setState(Player.States.HURT);
			}
		);

	}


	constructor() {
		super(sceneConfig);
	}


	init(data) {
		console.log(data);
	}


	create(data) {

		data.users[0].levelInstance.create(this);

		this.tilemap = data.users[0].levelInstance.tilemap;

		this.bombs = this.add.group({
			runChildUpdate: true
		});
		
		this.bombCreationEvent = this.time.addEvent({
			delay: 10000,
			loop: true,
			callback: () => {
				this.bombs.add(
					new Bomb({
						scene: this, 
						x: Phaser.Math.Between(50, getGameWidth(this) - 50),
						y: 0,
						textureKey: 'bomb'
					})
				);
			},
			callbackScope: this
		});

		this.player1 = new Player({
			scene: this,
			x: 300,
			y: 300,
			textureKey: data.users[0].characterInstance.textureKey,
			controlKeys: {
				right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
				left: Phaser.Input.Keyboard.KeyCodes.LEFT,
				jump: Phaser.Input.Keyboard.KeyCodes.UP,
				shoot: Phaser.Input.Keyboard.KeyCodes.SHIFT
			},
			healthBar: new HealthBar({
				scene: this,
				x: 60,
				y: 40
			})
		});

		this.player2 = new Player({
			scene: this,
			x: 900,
			y: 300,
			textureKey: data.users[1].characterInstance.textureKey,
			controlKeys: {
				right: Phaser.Input.Keyboard.KeyCodes.D,
				left: Phaser.Input.Keyboard.KeyCodes.Q,
				jump: Phaser.Input.Keyboard.KeyCodes.S,
				shoot: Phaser.Input.Keyboard.KeyCodes.SPACE
			},
			healthBar: new HealthBar({
				scene: this,
				x: getGameWidth(this)-162,
				y: 40
			})
		});

		this.hud1 = new Hud({
			scene: this,
			user: data.users[0]
		});

		this.hud2 = new Hud({
			scene: this,
			user: data.users[1]
		});

		this.setColliders();

		data.users[0].playerInstance = this.player1;
		data.users[1].playerInstance = this.player2;

		this.data.set('users', data.users);
	}

	update() {

		this.player1.update();
		this.player2.update();

		if (this.player1.isDead() || this.player2.isDead()) {

			this.newSceneTimedEvent = this.time.addEvent({

				delay: 2000,
				callback: () => this.scene.start('Gameover', this.data.getAll())

			});
		}
		
	}
}
