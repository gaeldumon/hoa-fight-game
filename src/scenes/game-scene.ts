import { getGameWidth, SIDE } from '../helpers';
import { Bomb } from '../objects/bomb';
import { Level } from '../objects/level';
import { WebsiteUser } from '../objects/websiteUser';
import { Hud } from '../objects/hud';
import { Player } from '../objects/player';
import { HealthBar } from '../objects/healthBar';
// To get public-static levelChoice and characterChoices
import { MenuScene } from './menu-scene';


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
	private websiteUser1: WebsiteUser;
	private websiteUser2: WebsiteUser;
	private level: Level;
	private bombs: Phaser.GameObjects.Group;
	private bombCreationEvent: Phaser.Time.TimerEvent;
	private newSceneTimedEvent: Phaser.Time.TimerEvent;
	private musicTheme: Phaser.Sound.BaseSound;


	private setColliders(): void {

		this.physics.add.collider(
			this.bombs,
			this.level.mainLayer
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
			this.level.mainLayer
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


	preload() {
	}


	create() {

		this.musicTheme = this.sound.add(`level${MenuScene.levelChoice}Theme`);
		this.musicTheme.play();

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

		this.level = new Level( {scene: this, id: MenuScene.levelChoice} );

		/***********Users**********/
		this.websiteUser1 = new WebsiteUser({
			id: 1,
			username: 'Marco45',
			rank: 10,
			score: 6,
			avatar: ''
		});

		this.websiteUser2 = new WebsiteUser({
			id: 5,
			username: 'Hyperdestru',
			rank: 2,
			score: 26,
			avatar: ''
		});

		/***********HUDs**********/
		this.hud1 = new Hud({
			scene: this,
			side: SIDE.LEFT,
			avatarTextureKey: `character${MenuScene.characterChoicePlayer1}Avatar`,
			username: this.websiteUser1.username,
			rank: this.websiteUser1.rank
		});

		this.hud2 = new Hud({
			scene: this,
			side: SIDE.RIGHT,
			avatarTextureKey: `character${MenuScene.characterChoicePlayer2}Avatar`,
			username: this.websiteUser2.username,
			rank: this.websiteUser2.rank
		});

		/***********Players(+ healthBars)**********/
		this.player1 = new Player({
			scene: this,
			x: 750, 
			y: 450,
			textureKey: `character${MenuScene.characterChoicePlayer1}`,
			healthBar: new HealthBar({
				scene: this,
				x: 64,
				y: 40
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
			textureKey: `character${MenuScene.characterChoicePlayer2}`,
			healthBar: new HealthBar({
				scene: this,
				x: getGameWidth(this)-164,
				y: 40
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

		if (this.player1.isDead() || this.player2.isDead()) {

			this.newSceneTimedEvent = this.time.addEvent({

				delay: 5000,
				callback: () => this.scene.start('Gameover')

			});
		}
		
	}
}
