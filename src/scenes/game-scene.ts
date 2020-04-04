import { Player } from '../objects/player';
import { Bomb } from '../objects/bomb';
import { Level } from '../objects/level';
import { Hud } from '../objects/hud';
import { HealthBar } from '../objects/healthBar';
import { getGameWidth } from '../helpers';


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
	private level: Level;
	private bombs: Phaser.GameObjects.Group;
	private bombCreationEvent: Phaser.Time.TimerEvent;
	private newSceneTimedEvent: Phaser.Time.TimerEvent;

	// This is WAY too big, have to find a way to shorten this, maybe create a
	// player group or put some colliders inside 'its' classes... idk
	private setColliders(): void {

		this.physics.add.collider(
			this.bombs,
			this.level.mainLayer
		);

		this.physics.add.collider(
			this.bombs,
			this.player1,
			() => {
				this.bombs.getFirstAlive().destroy(true);
				this.player1.hurt();
			}
		);

		this.physics.add.collider(
			this.bombs,
			this.player2,
			() => {
				this.bombs.getFirstAlive().destroy(true);
				this.player2.hurt();
			}
		);

		this.physics.add.collider(
			this.player1,
			this.player2
		);

		this.physics.add.collider(
			[this.player1, this.player2], 
			this.level.mainLayer
		);

		this.physics.add.collider(
			this.player1,
			this.player2.projectiles,
			() => { 
				this.player2.projectiles.getFirstAlive().destroy(true);
				this.player1.hurt();
				this.player1.setState(Player.States.HIT);
			}
		);

		this.physics.add.collider(
			this.player2,
			this.player1.projectiles,
			() => { 
				this.player1.projectiles.getFirstAlive().destroy(true);
				this.player2.hurt();
				this.player2.setState(Player.States.HIT);
			}
		);

	}


	constructor() {
		super(sceneConfig);
	}


	preload() {

		this.load.pack(
			"preload",
			"assets/pack.json",
			"preload"
		);

		for (let i = 1; i <= 6; i++) {
			this.load.atlas(
				`character${i}`,
				`assets/images/characters/character${i}-spritesheet.png`,
				`assets/images/characters/character${i}-atlas.json`
			);
		}

	}


	create() {

		this.bombs = this.add.group();
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

		this.level = new Level( {scene: this, id: '1'} );

		// The texture key of this player seems to overrride the texture of
		// the other one. Here the character2 texture will be drawn for both players !
		// Can't it be TWO different textures ??
		this.player1 = new Player({
			scene: this,
			x: 750, 
			y: 450,
			textureKey: 'character2',
			healthBar: new HealthBar({
				scene: this,
				x: 86,
				y: 56
			}),
			controlKeys: {
				right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
				left: Phaser.Input.Keyboard.KeyCodes.LEFT,
				jump: Phaser.Input.Keyboard.KeyCodes.UP,
				shoot: Phaser.Input.Keyboard.KeyCodes.SHIFT
			}
		});

		this.player2 = new Player({
			scene: this,
			x: 600,
			y: 400,
			textureKey: 'character2',
			healthBar: new HealthBar({
				scene: this,
				x: getGameWidth(this) - 126,
				y: 56
			}),
			controlKeys: {
				right: Phaser.Input.Keyboard.KeyCodes.D,
				left: Phaser.Input.Keyboard.KeyCodes.Q,
				jump: Phaser.Input.Keyboard.KeyCodes.S,
				shoot: Phaser.Input.Keyboard.KeyCodes.SPACE
			}
		});

		this.setColliders();

	}

	update() {

		this.player1.update();
		this.player2.update();

		// Good idea to put this inside update() ?
		if (this.player1.isDead() || this.player2.isDead()) {
			this.newSceneTimedEvent = this.time.addEvent({
				delay: 2000,
				callback: () => this.scene.start('Gameover')
			});
		}
		
	}
}
