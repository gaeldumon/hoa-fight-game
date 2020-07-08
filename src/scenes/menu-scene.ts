import { getGameWidth, getGameHeight } from '../helpers';
import { Gui } from '../objects/gui';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Menu'
};


export class MenuScene extends Phaser.Scene {


	private levelThumb: Phaser.GameObjects.Image;
	private characterThumbs: Array<Phaser.GameObjects.Image>;
	private clickSound: Phaser.Sound.BaseSound;


	private drawBackground(): void {
		this.add.image(
			getGameWidth(this)/2, 
			getGameHeight(this)/2,
			'backgroundForGUIScenes'
		);
	}

	private initThumbnails(data): void {
		// Init the level thumbnail on the 1st level thumbnail (index 0)
		this.levelThumb = this.add.image(200, 300, data.values.levels[0].thumbnailKey);

		// Init the 2 characters thumbnails with the 1st character thumbnail.
		this.characterThumbs = [
			this.add.image(650, 300, data.values.characters[0].thumbnailKey),
			this.add.image(850, 300, data.values.characters[0].thumbnailKey)
		];
	}

	private printTitles(): void {
		Gui.title({ scene: this, text: "MENU" });
		Gui.sectionTitle({ scene: this, x: 200, y: 130, text: "Terrain" });
		Gui.sectionTitle({ scene: this, x: 750, y: 130, text: "Personnages" });
	}

	private printTexts(): void {
		Gui.customText({ scene: this, x: 650, y: 210, text: "Joueur 1" });
		Gui.customText({ scene: this, x: 850, y: 210, text: "Joueur 2" });
	}

	private initUsersChoices(data): void {
		for (const user of data.values.users) {
			user.levelInstance = data.values.levels[0];
			user.characterInstance = data.values.characters[0];
		}
	}


	constructor() {		
		super(sceneConfig);
	}

	init(bootSceneData) {

		if (bootSceneData.users !== undefined && 
		bootSceneData.characters !== undefined && 
		bootSceneData.levels !== undefined) {

			this.data.set('users',bootSceneData.users);
			this.data.set('characters', bootSceneData.characters);
			this.data.set('levels', bootSceneData.levels);

		} else {
			throw new Error("Error getting users, characters and levels data from Boot Scene");
		}

		this.initUsersChoices(this.data);
	}

	/**
	 * Scene's create callback.
	 * @param data Data object from the Boot Scene that belongs to the Data Manager.
	 * Here this data will be modified: characters (elements of data.characters) 
	 * and levels (elements of data.levels) instances will be attached to the 
	 * users instances (data.users).
	 */
	create() {
		
		this.drawBackground();
		this.initThumbnails(this.data);
		this.printTitles();
		this.printTexts();
		this.clickSound = this.sound.add('clickSound');

		// Slide button n°1. This is where User 1 & 2 choose their level. 
		// Modifies the level thumbnail texture (with texture keys) on click.
		Gui.slideBtn({ 
			scene: this, 
			x: 200, 
			y: 450, 
			text: "Suivant",
			clickSound: this.clickSound,
			img: this.levelThumb,
			textureKeys: this.data.values.levels.map(level => level.thumbnailKey),
			callback: () => {
				for (const level of this.data.values.levels) {
					if (level.thumbnailKey === this.levelThumb.texture.key) {
						this.data.values.users[0].levelInstance = level;
						this.data.values.users[1].levelInstance = level;
					}
				}
			}
		});

		
		// Slide button n°2. This is where User 1 choose its character. 
		// Modifies the texture of the character thumbnail n°1 on click.
		Gui.slideBtn({ 
			scene: this, 
			x: 650, 
			y: 370, 
			text: "Suivant",
			clickSound: this.clickSound,
			img: this.characterThumbs[0],
			textureKeys: this.data.values.characters.map(c => c.thumbnailKey),
			callback: () => {
				for (const c of this.data.values.characters) {
					if (c.thumbnailKey === this.characterThumbs[0].texture.key) {
						this.data.values.users[0].characterInstance = c;
					}
				}
			}
		});

		// Slide button n°3. This is where User 2 choose its character. 
		// Modifies the texture of the character thumbnail n°2 on click.
		Gui.slideBtn({ 
			scene: this, 
			x: 850, 
			y: 370, 
			text: "Suivant",
			clickSound: this.clickSound,
			img: this.characterThumbs[1],
			textureKeys: this.data.values.characters.map(c => c.thumbnailKey),
			callback: () => {
				for (const c of this.data.values.characters) {
					if (c.thumbnailKey === this.characterThumbs[1].texture.key) {
						this.data.values.users[1].characterInstance = c;
					}
				}
			}
		});


		// Set the MODIFIED users data from the boot scene to this actual scene.
		// Modified because level and characters instances has been linked to
		// each users thanks to the slide buttons callbacks and the thumbnails.
		this.data.set('users', this.data.values.users);


		Gui.mainBtn({
			scene: this,
			text: "START",
			clickSound: this.clickSound,
			stopSounds: true,
			scenePlugin: this.scene,
			newSceneKey: 'Game',
			// Sending this scene's data (= users) to the Game Scene.
			sceneData: this.data.getAll()
		});

	}

}