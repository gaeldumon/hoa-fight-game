import { getGameWidth, getGameHeight } from '../helpers';
import { Gui } from '../objects/gui';
import { GameScene } from './game-scene';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Gameover'
};


export class GameoverScene extends Phaser.Scene {


	constructor() {
		super(sceneConfig);
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
			text: `${GameScene.winner.username} est victorieux !`
		}); 

		Gui.customText({ 
			scene: this, 
			x: getGameWidth(this)/2, 
			y: 240,
			text: `
				ANCIEN SCORE : ${GameScene.winner.score} \n
				NOUVEAU SCORE : ${GameScene.winner.updateScore()} 
			`
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