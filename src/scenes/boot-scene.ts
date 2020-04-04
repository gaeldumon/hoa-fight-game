import { getGameWidth, getGameHeight, COLORS } from '../helpers';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Boot'
};


export class BootScene extends Phaser.Scene {

	constructor() {
		super(sceneConfig);
	}

	preload() {

	}

	create() {
		this.add.text(
			getGameWidth(this)/2 - 155, 
			getGameHeight(this)/2,
			'Boot',
			{
				fontSize: '40px',
				fontStyle: 'bold',
				fill: COLORS.white.string
			}
		);
	}

	update() {

	}
}