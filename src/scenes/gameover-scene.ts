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

		Gui.title({ scene: this, text: "Fin De Partie" });

		Gui.customText({ 
			scene: this, 
			x: getGameWidth(this)/2, 
			y: getGameHeight(this)/2 ,
			text: `${GameScene.winner.username} est victorieux !`
		});

	}

}