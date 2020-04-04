import { getGameWidth, getGameHeight, COLORS } from '../helpers';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Gameover'
};


export class GameoverScene extends Phaser.Scene {

	constructor() {
		super(sceneConfig);
	}

	preload() {

	}

	create() {
		this.add.dom(
			getGameWidth(this)/2,
			50,
			'h3',
			'color: white; font-size: 45px; font-weight: bold; font-family: Grobold, Arial',
			"Fin de partie"
		);
	}

	update() {

	}
}