import { getGameWidth, getGameHeight } from '../helpers';
import { Gui } from '../objects/gui';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Gameover'
};


export class GameoverScene extends Phaser.Scene {


	constructor() {
		super(sceneConfig);
	}

	init(gameSceneData) {

	}


	create() {

		this.add.image(
			getGameWidth(this)/2, 
			getGameHeight(this)/2, 
			'backgroundForGUIScenes'
		);

		Gui.title({ scene: this, text: "Fin De Partie" });

		Gui.customText({ 
			scene: this, 
			x: getGameWidth(this)/2, 
			y: 180,
			text: ""
		}); 

		Gui.customText({ 
			scene: this, 
			x: getGameWidth(this)/2, 
			y: 240,
			text: ""
		}); 

		Gui.mainBtn({
			scene: this,
			text: "REJOUER",
			stopSounds: true,
			scenePlugin: this.scene,
			newSceneKey: 'Menu'
		});

	}

}