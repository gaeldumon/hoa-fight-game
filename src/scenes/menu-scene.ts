import { getGameWidth, getGameHeight, COLORS } from '../helpers';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Menu'
};


export class MenuScene extends Phaser.Scene {

	private startBtn: Phaser.GameObjects.DOMElement;
	private background: Phaser.GameObjects.Image;
	private title: Phaser.GameObjects.DOMElement;
	private sectionTitle: Phaser.GameObjects.DOMElement;
	private levelImage: Phaser.GameObjects.Image;
	private nextBtn: Phaser.GameObjects.DOMElement;

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
		
		this.background = this.add.image(
			getGameWidth(this)/2, 
			getGameHeight(this)/2,
			'background2'
		);

		this.title = this.add.dom(
			getGameWidth(this)/2,
			30,
			'h3',
			'color:#d2d2d2; font-size: 55px; font-family: Grobold, Arial',
			"HOA FIGHT"
		);

		this.sectionTitle = this.add.dom(
			getGameWidth(this)/2,
			120,
			'h4',
			'color:#d2d2d2; font-size: 30px; font-family: Grobold, Arial',
			"Menu"
		);

		this.levelImage = this.add.image(250, 350, 'background1Thumbnail');

		this.startBtn = this.add.dom(
			(getGameWidth(this)/2),
			(getGameHeight(this)-50),
			'button',
			`width:150px; height:45px; font-family:Grobold,Arial; 
			color:#000; font-size:25px; background-color:#d2d2d2; border:none`,
			"Start"
		).addListener('click').on('click', () => {
			this.scene.start('Game');
		});
	}

	update() {
	}
}