import { getGameWidth, getGameHeight, GAMEDATA } from '../helpers';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Boot'
};


export class BootScene extends Phaser.Scene {

	private logo: Phaser.GameObjects.DOMElement;
	private btn: Phaser.GameObjects.DOMElement;
	private background: Phaser.GameObjects.Image;
	

	constructor() {
		super(sceneConfig);
	}

	preload() {
		this.load.pack(
			"preload",
			"assets/pack.json",
			"preload"
		);

		for (let n = 0; n < GAMEDATA.CHARACTERS.NUMBER; n++) {
			this.load.atlas(
				`character${n}`,
				`assets/images/characters/character${n}/character${n}-spritesheet.png`,
				`assets/images/characters/character${n}/character${n}-atlas.json`
			);
		}
	}

	create() {

		this.background = this.add.image(
			getGameWidth(this)/2, 
			getGameHeight(this)/2,
			'backgroundForGUIScenes'
		);

		// For now, the logo is just some plain text added as a DOM Element.
		this.logo = this.add.dom(
			getGameWidth(this)/2,
			50,
			'h3',
			'color:#fff; font-size: 55px; font-family: Grobold, Arial',
			"HOA FIGHT"
		);
		
		// A DOM button responsible of starting the Menu Scene.
		this.btn = this.add.dom(
			(getGameWidth(this)/2),
			(getGameHeight(this)/2),
			'button',
			`width: 150px; 
			height: 45px; 
			font-family: Grobold,Arial; 
			color: #000; 
			font-size: 25px; 
			background-color: #d2d2d2; 
			border: none`,
			"Menu"

		).addListener('click').on('click', () => {

			this.scene.start('Menu');

		});
	}
}