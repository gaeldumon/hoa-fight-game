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

/**
 * The Game Scene is where all the actions takes place.
 * Actors such as Player, Bombs and Bomb are instanciated. 
 * Static elements such as HUDs and HealthBars (via Player) are instanciated.
 * Level is created (not instanciated), which basically means that Tilemap is
 * drawn. Colliders between actors are handled. Player animations are created.
 * It sets a Scene Winner when one of the users PLAYER INSTANCES is dead and
 * then start the new scene (Gameover Scene).
 * It takes the data object from the Menu Scene (composed of an array of users),
 * available here in the init() et create() callbacks.
 */
export class GameScene extends Phaser.Scene {
	
	private player1: Player;
	private player2: Player;
	private hud1: Hud;
	private hud2: Hud;
	private tilemap: Level["tilemap"];
	private bombs: Phaser.GameObjects.Group;
	private bombCreationEvent: Phaser.Time.TimerEvent;
	private newSceneTimedEvent: Phaser.Time.TimerEvent;

	private winner: User;


	private setColliders(): void {
		this.physics.add.collider(
			this.bombs,
			this.tilemap.mainLayer
		);
		this.physics.add.collider(
			this.bombs,
			this.player1,
			() => {
				this.player1.hurt();
				this.bombs.getFirstAlive().destroy();
			}
		);
		this.physics.add.collider(
			this.bombs,
			this.player2,
			() => {
				this.player2.hurt();
				this.bombs.getFirstAlive().destroy();
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
				this.player1.hurt();
				this.player2.projectiles.getFirstAlive().destroy();
			}
		);
		this.physics.add.collider(
			this.player2,
			this.player1.projectiles,
			() => {
				this.player2.hurt();
				this.player1.projectiles.getFirstAlive().destroy();
			}
		);
	}


	constructor() {
		super(sceneConfig);
	}


	init(menuSceneData) {

		if (menuSceneData.users !== undefined) {
			this.data.set('users', menuSceneData.users);
		}
		
		// Animations creation
		for (const user of this.data.get('users')) {

			let tk = user.characterInstance.textureKey;

			this.anims.create({
				key: `${tk}WALK`,
				frames: this.anims.generateFrameNames(tk, {
					prefix: 'walk-side-armed',
					start: 1,
					end: 4,
					zeroPad: 2
				}),
				frameRate: 10,
				repeat: -1
			});
			this.anims.create({
				key: `${tk}WALK_SHOOT`,
				frames: this.anims.generateFrameNames(tk, {
					prefix: 'walk-side-shoot',
					start: 1,
					end: 4,
					zeroPad: 2
				}),
				repeat: -1
			});
			this.anims.create({
				key: `${tk}IDLE`,
				frames: this.anims.generateFrameNames(tk, {
					prefix: 'idle-front-armed',
					start: 1,
					end: 4,
					zeroPad: 2
				}),
				frameRate: 10,
				repeat: -1
			});
			this.anims.create({
				key: `${tk}IDLE_SHOOT`,
				frames: this.anims.generateFrameNames(tk, {
					prefix: 'idle-front-shoot',
					start: 1,
					end: 1,
					zeroPad: 2
				}),
				repeat: -1
			});
			this.anims.create({
				key: `${tk}HIT`,
				frames: this.anims.generateFrameNames(tk, {
					prefix: 'hit',
					start: 1,
					end: 1,
					zeroPad: 2,
				}),
				repeat: 1
			});
			this.anims.create({
				key: `${tk}DIE`,
				frames: this.anims.generateFrameNames(tk, {
					prefix: 'dead',
					start: 1,
					end: 1,
					zeroPad: 2,
				}),
				repeat: 1
			});
		}
	}

	create() {

		this.data.values.users[0].levelInstance.create(this);

		this.tilemap = this.data.values.users[0].levelInstance.tilemap;

		this.bombs = this.add.group({
			runChildUpdate: true
		});
		
		this.bombCreationEvent = this.time.addEvent({
			delay: 2000,
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
			textureKey: this.data.values.users[0].characterInstance.textureKey,
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
			textureKey: this.data.values.users[1].characterInstance.textureKey,
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
			user: this.data.values.users[0]
		});

		this.hud2 = new Hud({
			scene: this,
			user: this.data.values.users[1]
		});

		this.setColliders();

		this.data.values.users[0].playerInstance = this.player1;
		this.data.values.users[1].playerInstance = this.player2;

		this.data.set('users', this.data.values.users);
	}

	update() {

		this.player1.update();
		this.player2.update();

		// Winner handling.
		// All this is dangerous and not acceptable. The new scene start timed event 
		// is asynchronous so I don't have any certainty that a winner will be set
		// correctly before scene transfer. Basically right now it works cause
		// of the generous timeout of 5 seconds.
		if (this.player1.isDead() || this.player2.isDead()) {

			this.physics.pause();

			if (this.player1.isDead() && !this.player2.isDead()) {

				this.winner = this.data.values.users[1];

			} else if (!this.player1.isDead() && this.player2.isDead()) {

				this.winner = this.data.values.users[0];

			} else if (this.player2.isDead() && this.player2.isDead()) {

				// Should throw error
				this.winner = null;

			}

			this.data.set('winner', this.winner);
			
			this.newSceneTimedEvent = this.time.addEvent({
				delay: 5000,
				callback: () => {
					this.sound.stopAll();
					this.scene.start('Gameover', this.data.getAll());
				}
			});
			
		}
	}

}


