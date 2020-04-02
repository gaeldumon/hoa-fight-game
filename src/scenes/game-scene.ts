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

	private setColliders(): void {
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
				this.player2.projectiles.getFirstAlive().disableBody(true, true);
				//this.player2.projectiles.getFirstAlive().destroy(true);
				this.player1.hurt();
				this.player1.setState('HIT');
			}
		);

		this.physics.add.collider(
			this.player2,
			this.player1.projectiles,
			() => { 
				this.player1.projectiles.getFirstAlive().disableBody(true, true);
				//this.player1.projectiles.getFirstAlive().destroy(true);
				this.player2.hurt();
				this.player2.setState('HIT');
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

		this.hud1 = new Hud({
			scene: this,
			x: 70,
			y: 20,
			color: COLORS.customGreen.string,
			websiteUser: new WebsiteUser({
				avatar: 'assets/images/characters/character2-avatar.png',
				username: 'Marco45',
				rank: 14
			})
		});

		// The color of this HUD seems to override the first one
		// It's kind of the same issue I have with player's textures
		this.hud2 = new Hud({
			scene: this,
			x: getGameWidth(this) - 140,
			y: 20,
			color: COLORS.customBlue.string,
			websiteUser: new WebsiteUser({
				avatar: 'assets/images/characters/character2-avatar.png',
				username: 'Woopix12',
				rank: 47
			})
		});

		this.setColliders();

	}

	update() {

		this.player1.update();
		this.player2.update();
		
	}
}
