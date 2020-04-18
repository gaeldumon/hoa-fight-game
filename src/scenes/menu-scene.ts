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


	private appendInstance(
		a: Array<any>, 
		setter: Function, 
		img: Phaser.GameObjects.Image
	): void {

		for (const e of a) {
			if (e.thumbnailKey === img.texture.key) {
				setter = e;
			}
		}
	}


	constructor() {		
		super(sceneConfig);
	}

	init() {
	}

	preload() {
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
		Gui.slideBtn({ 
			scene: this, 
			x: 200, 
			y: 450, 
			text: "Suivant",
			img: this.levelThumb,
			textureKeys: data.levels.map(level => level.thumbnailKey),
			// So ugly and unmaintenable in so many ways.. *sigh*
			link: {
				owner: data.users[0],
				data: data,
				toLink: 'level'
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
		Gui.slideBtn({ 
			scene: this, 
			x: 650, 
			y: 400, 
			text: "Suivant",
			img: this.characterThumbs[0],
			textureKeys: data.characters.map(c => c.thumbnailKey),
			// So ugly and unmaintenable in so many ways.. *sigh*
			link: {
				owner: data.users[0],
				data: data,
				toLink: 'character'
			}
		});

		// Slide button n°1. This is where User 2 choose its character. 
		// Modifies the texture of the character thumbnail n°1 on click.
		Gui.slideBtn({ 
			scene: this, 
			x: 850, 
			y: 400, 
			text: "Suivant",
			img: this.characterThumbs[1],
			textureKeys: data.characters.map(c => c.thumbnailKey),
			// So ugly and unmaintenable in so many ways.. *sigh*
			link: {
				owner: data.users[1],
				data: data,
				toLink: 'character'
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
			sceneData: this.data.getAll()
		});

	}

}