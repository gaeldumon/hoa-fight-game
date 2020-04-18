import { getGameWidth, getGameHeight, GAMEDATA } from '../helpers';
import { Gui } from '../objects/gui';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Menu'
};


export class MenuScene extends Phaser.Scene {


	private levelThumb: Phaser.GameObjects.Image;
	private characterThumbs: Array<Phaser.GameObjects.Image>;


	private background(): void {
		this.add.image(
			getGameWidth(this)/2, 
			getGameHeight(this)/2,
			'backgroundForGUIScenes'
		);
	}


	private appendInstance(a: Array<any>, instanceSetter: Function, img: Phaser.GameObjects.Image) {
		for (const e of a) {
			if (e.thumbnailKey === img.texture.key) {
				instanceSetter = e;
			}
		}
	}


	constructor() {		
		super(sceneConfig);
	}


	/**
	 * Scene's create callback.
	 * @param data: data object from the Boot Scene that belongs to the Data Manager.
	 * Here this data will be modified: characters (elements of data.characters) 
	 * and levels (elements of data.levels) instances will be attached to the 
	 * users instances (data.users).
	 */
	create(data) {
		
		this.background();

		Gui.title({ scene: this, text: "MENU" });

		Gui.sectionTitle({ scene: this, x: 200, y: 130, text: "Terrain" });

		// Init the level thumbnail on the 1st level thumbnail (index 0)
		this.levelThumb = this.add.image(
			200,
			300, 
			data.levels[0].thumbnailKey
		);
		
		// Button that modifies the level thumbnail texture (with texture keys).
		// Append the level instance accordingly, only on User 1 because
		// we only need one instance of level (both players -> 1 level).
		// I attach it to User 1 for convenience, this way it is attached to
		// something and not in the air. I could attach it to User 2 it would
		// make no difference, I'm just gonna use the one I attached it to in 
		// the Game Scene.
		Gui.slideBtn({ 
			scene: this, 
			x: 200, 
			y: 450, 
			text: "Suivant",
			img: this.levelThumb,
			textureKeys: data.levels.map(level => level.thumbnailKey),
			callback: () => {
				this.appendInstance(
					data.levels, 
					data.users[0].levelInstance, 
					this.levelThumb
				);
			}
		});

		Gui.sectionTitle({ scene: this, x: 750, y: 130, text: "Personnages" });

		Gui.customText({ scene: this, x: 650, y: 200, text: "Joueur 1" });
		Gui.customText({ scene: this, x: 850, y: 200, text: "Joueur 2" });

		// Init the 2 characters thumbnails with the 1st character thumbnail (the red guy).
		this.characterThumbs = [
			this.add.image(650, 300, data.characters[0].thumbnailKey),
			this.add.image(850, 300, data.characters[0].thumbnailKey)
		];
		
		// Slide button n°1. This is where User 1 choose its character. 
		// Modifies the texture of the character thumbnail n°1 on click.
		// Append the character instance of user 1 accordingly.
		Gui.slideBtn({ 
			scene: this, 
			x: 650, 
			y: 400, 
			text: "Suivant",
			img: this.characterThumbs[0],
			textureKeys: data.characters.map(c => c.thumbnailKey),
			callback: () => {
				this.appendInstance(
					data.characters, 
					data.users[0].characterInstance, 
					this.characterThumbs[0]
				);
			}	
		});

		// Slide button n°1. This is where User 2 choose its character. 
		// Modifies the texture of the character thumbnail n°1 on click.
		// Append the character instance of user 2 accordingly.
		Gui.slideBtn({ 
			scene: this, 
			x: 850, 
			y: 400, 
			text: "Suivant",
			img: this.characterThumbs[1],
			textureKeys: data.characters.map(c => c.thumbnailKey),
			callback: () => {
				this.appendInstance(
					data.characters, 
					data.users[1].characterInstance, 
					this.characterThumbs[1]
				);
			}	
		});

		// Data (arg data) from the Boot Scene has been modified:
		// instances has been attached, so we set this modified data to this 
		// scene data and we pass THAT to the next scene. Here we only take
		// the users cause that is then only thing that's been modified and the 
		// only thing the Game Scene needs.
		this.data.set('users', data.users);

		Gui.mainBtn({
			scene: this,
			text: "START",
			stopSounds: false,
			scenePlugin: this.scene,
			newSceneKey: 'Game',
			// We send the users (now with their chosen character and level) to
			// the Game Scene.
			sceneData: this.data.get('users')
		});

	}

}