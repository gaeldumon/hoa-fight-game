import { getGameWidth, getGameHeight, COLORS } from '../helpers';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Menu'
};


export class MenuScene extends Phaser.Scene {

	private startBtn: Phaser.GameObjects.DOMElement;

	constructor() {
		super(sceneConfig);
	}

	preload() {

	}

	create() {
		this.add.dom(
			(getGameWidth(this)/2)-20,
			50,
			'h3',
			'color: white; font-size: 45px; font-weight: bold; font-family: Grobold, Arial',
			"Menu"
		);

		this.startBtn = this.add.dom(
			(getGameWidth(this)/2)-20,
			(getGameHeight(this)/2)-10,
			'button',
			'',
			"Start Game"
		).addListener('click').on('click', () => {
			this.scene.start('Game');
		});
	}

	update() {

	}
}