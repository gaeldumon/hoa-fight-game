import { Player } from '../objects/player';
import { Level } from '../objects/level';
import { Hud } from '../objects/hud';
import { HealthBar } from '../objects/healthBar';
import { WebsiteUser } from '../objects/websiteUser';
import { getGameWidth } from '../helpers';
import { COLORS } from '../helpers';


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

	setColliders() {
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
			(player, projectile) => { 
				this.player1.hurt();
				projectile.destroy();
			},
			null,
			this
		);
		
		this.physics.add.collider(
			this.player2, 
			this.player1.projectiles,
			(player, projectile) => { 
				this.player2.hurt();
				projectile.destroy();
			},
			null,
			this 
		);

		this.physics.add.collider(
			[this.player1.projectiles, this.player2.projectiles], 
			this.level.mainLayer
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

	}


	create() {

		this.level = new Level( {scene: this, id: '1'} );

		this.player1 = new Player({
			scene: this,
			x: 140, 
			y: 300,
			textureKey: 'player',
			healthBar: new HealthBar({
				scene: this,
				x: 25,
				y: 130
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
			textureKey: 'player',
			healthBar: new HealthBar({
				scene: this,
				x: getGameWidth(this) - 115,
				y: 130
			}),
			controlKeys: {
				right: Phaser.Input.Keyboard.KeyCodes.D,
				left: Phaser.Input.Keyboard.KeyCodes.Q,
				jump: Phaser.Input.Keyboard.KeyCodes.S,
				shoot: Phaser.Input.Keyboard.KeyCodes.SPACE
			}
		});

		this.hud1 = new Hud({
			scene: this,
			x: 70,
			y: 50,
			color: COLORS.customGreen.string,
			websiteUser: new WebsiteUser({
				avatar: 'assets/images/from-website/default-avatar.png',
				username: 'Marco45',
				rank: 0
			})
		});

		this.hud2 = new Hud({
			scene: this,
			x: getGameWidth(this) - 70,
			y: 50,
			color: COLORS.customBlue.string,
			websiteUser: new WebsiteUser({
				avatar: 'assets/images/from-website/default-avatar.png',
				username: 'Woopix12',
				rank: 0
			})
		});

		this.setColliders();

	}

	update() {

		this.player1.update();
		this.player2.update();
		
	}
}
