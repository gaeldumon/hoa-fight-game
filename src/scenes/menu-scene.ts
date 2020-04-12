import { getGameWidth, getGameHeight, GAMEDATA } from '../helpers';
import { Gui } from '../objects/gui';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Menu'
};


export class MenuScene extends Phaser.Scene {


	private levelThumb: Phaser.GameObjects.Image;


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



	init(data) {
	}

	preload() {

	}

	// data is from the Boot Scene, it holds the users, characters and levels.
	create(data) {
		
		this.background();
		Gui.title({ scene: this, text: "MENU" });
		// Init the thumbnail on the 1st level thumbnail
		this.levelThumb = this.add.image(200, 300, data.levels[0].thumbnailKey);
		Gui.slideBtn({ 
			scene: this, 
			x: 200, 
			y: 450, 
			text: "Suivant",
			img: this.levelThumb,
			textures: data.levels.map(level => level.thumbnailKey)
		});
	}

	update() {

	}

}