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


	constructor() {		
		super(sceneConfig);
	}


	init(data) {}

	preload() {}

	/**
	 * Scene's create callback.
	 * @param data: data object from the Boot Scene that belongs to the Data Manager.
	 */
	create(data) {
		
		this.background();

		Gui.title({ scene: this, text: "MENU" });

		Gui.sectionTitle({ scene: this, x: 200, y: 130, text: "Terrain" });

		// Init the level thumbnail on the 1st level thumbnail
		this.levelThumb = this.add.image(
			200, 
			300, 
			data.levels[0].thumbnailKey
		);
		
		// Button that modifies the level thumbnail texture (with texture keys).
		Gui.slideBtn({ 
			scene: this, 
			x: 200, 
			y: 450, 
			text: "Suivant",
			img: this.levelThumb,
			textureKeys: data.levels.map(level => level.thumbnailKey)
		});

		// Appending users level instances. Have to make it asynchronous.
		for (const level of data.levels) {
			if (level.thumbnailKey === this.levelThumb.texture.key) {
				for (const user of data.users) {
					user.levelInstance = level;
				}
			}
		}

		Gui.sectionTitle({ scene: this, x: 750, y: 130, text: "Personnages" });

		Gui.customText({ scene: this, x: 650, y: 200, text: "Joueur 1" });
		Gui.customText({ scene: this, x: 850, y: 200, text: "Joueur 2" });

		// Init the 2 characters thumbnails on the 1st character thumbnail.
		this.characterThumbs = [
			this.add.image(650, 300, data.characters[0].avatarKey),
			this.add.image(850, 300, data.characters[0].avatarKey)
		];
		
		Gui.slideBtn({ 
			scene: this, 
			x: 650, 
			y: 400, 
			text: "Suivant",
			img: this.characterThumbs[0],
			textureKeys: data.characters.map(c => c.avatarKey),
			callback: () => console.log('click')
		});

		Gui.slideBtn({ 
			scene: this, 
			x: 850, 
			y: 400, 
			text: "Suivant",
			img: this.characterThumbs[1],
			textureKeys: data.characters.map(c => c.avatarKey)
		});

		// Appending user1 (index 0) player instances. Have to make it asynchronous.
		for (const character of data.characters) {
			if (character.avatarKey === this.characterThumbs[0].texture.key) {
				data.users[0].characterInstance = character;
			}
		}

		// Appending user2 (index 1) player instances. Have to make it asynchronous.
		for (const character of data.characters) {
			if (character.avatarKey === this.characterThumbs[1].texture.key) {
				data.users[1].characterInstance = character;
			}
		}

		Gui.mainBtn({
			scene: this,
			text: "START",
			stopSounds: false,
			scenePlugin: this.scene,
			newSceneKey: 'Game',
			sceneData: data
		});

	}

	update() {}

}