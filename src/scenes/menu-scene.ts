import { getGameWidth, getGameHeight, 
	LEVEL_MIN, LEVEL_MAX, 
	CHARACTER_MIN, CHARACTER_MAX } from '../helpers';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Menu'
};


export class MenuScene extends Phaser.Scene {


	private background(): void {
		this.add.image(
			getGameWidth(this)/2, 
			getGameHeight(this)/2,
			'backgroundForGUIScenes'
		);
	}

	private logo(): void {
		this.add.dom(
			getGameWidth(this)/2,
			30,
			'h3',
			'color:#fff; font-size: 55px; font-family: Grobold, Arial',
			"HOA FIGHT"
		);
	}

	private title(): void {
		this.add.dom(
			getGameWidth(this)/2,
			120,
			'h4',
			'color:#fff; font-size: 30px; font-family: Grobold, Arial',
			"Menu"
		);
	}

	private startBtn(): void {
		this.add.dom(
			getGameWidth(this)/2,
			getGameHeight(this)-50,
			'button',
			`width: 150px; 
			height: 45px; 
			font-family: Grobold,Arial; 
			color: #000; 
			font-size:25px; 
			background-color: #d2d2d2; 
			border:none`,
			"Start"
		).addListener('click').on('click', () => {
			//this.scene.start('Game');
		});
	}

	constructor() {		
		super(sceneConfig);
	}

	preload() {
		this.load.pack(
			"preload",
			"assets/pack.json",
			"preload"
		);

		for (let i = 1; i <= 6; i++) {
			this.load.atlas(
				`character${i}`,
				`assets/images/characters/character${i}-spritesheet.png`,
				`assets/images/characters/character${i}-atlas.json`
			);
		}
	}

	create() {

		this.background();
		this.logo();
		this.title();
		this.startBtn();

	}

	update() {

	}

}