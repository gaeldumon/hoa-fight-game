import { getGameWidth } from '../helpers';
import { Bomb } from '../objects/bomb';
import { Hud } from '../objects/hud';
import { Player } from '../objects/player';
import { HealthBar } from '../objects/healthBar';


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
	private bombs: Phaser.GameObjects.Group;
	private bombCreationEvent: Phaser.Time.TimerEvent;
	private newSceneTimedEvent: Phaser.Time.TimerEvent;
	private musicTheme: Phaser.Sound.BaseSound;
	

	/*private setColliders(): void {

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

	}*/


	constructor() {
		super(sceneConfig);
	}


	create() {

		/*this.bombs = this.add.group({
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
		});*/


	}

	update() {

		/*this.player1.update();
		this.player2.update();

		if (this.player1.isDead() || this.player2.isDead()) {

			if (this.player1.isDead()) {


			} else if (this.player2.isDead()) {


			}

			this.newSceneTimedEvent = this.time.addEvent({

				delay: 2000,
				callback: () => this.scene.start('Gameover')

			});
		}*/
		
	}
}
