import { WebsiteUser } from '../objects/websiteUser';
import { getGameWidth, getGameHeight, COLORS } from '../helpers';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Menu'
};


export class MenuScene extends Phaser.Scene {

	constructor() {
		super(sceneConfig);
	}

	preload() {

	}

	create() {
		this.add.text(
			getGameWidth(this)/2 - 100, 
			getGameHeight(this)/2,
			'Menu',
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