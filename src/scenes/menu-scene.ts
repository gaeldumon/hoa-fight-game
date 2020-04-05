import { getGameWidth, getGameHeight, LEVEL_MIN, LEVEL_MAX, 
CHARACTER_MIN, CHARACTER_MAX } from '../helpers';

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

	private currentLevelImg: Phaser.GameObjects.Image;
	private currentLevelId: number;

	private currentCharacterImg: Phaser.GameObjects.Image;
	private currentCharacterId: number;

	private levelsBtn: Phaser.GameObjects.DOMElement;
	private charactersBtn: Phaser.GameObjects.DOMElement;

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

	// Temporary code that will benefit a huge refactoring very soon
	create() {

		this.currentLevelId = LEVEL_MIN;
		this.currentCharacterId = CHARACTER_MIN;

		this.background = this.add.image(
			getGameWidth(this)/2, 
			getGameHeight(this)/2,
			'backgroundForGUIScenes'
		);

		this.title = this.add.dom(
			getGameWidth(this)/2,
			30,
			'h3',
			'color:#fff; font-size: 55px; font-family: Grobold, Arial',
			"HOA FIGHT"
		);

		this.sectionTitle = this.add.dom(
			getGameWidth(this)/2,
			120,
			'h4',
			'color:#fff; font-size: 30px; font-family: Grobold, Arial',
			"Menu"
		);

		this.currentLevelImg = this.add.image(
			250, 
			350, 
			`background${this.currentLevelId}Thumbnail`
		);

		this.levelsBtn = this.add.dom(250, 465, 'button', '', 'NEXT');
		this.levelsBtn.addListener('click').on('click', () => {
			if (this.currentLevelId < LEVEL_MAX) 
				this.currentLevelId++;
			else 
				this.currentLevelId = LEVEL_MIN;
			this.currentLevelImg.setTexture(`background${this.currentLevelId}Thumbnail`);
		});

		this.currentCharacterImg = this.add.image(
			650,
			350,
			`character${this.currentCharacterId}Avatar`
		);

		this.charactersBtn = this.add.dom(650, 460, 'button', '', 'NEXT');
		this.charactersBtn.addListener('click').on('click', () => {
			if (this.currentCharacterId < CHARACTER_MAX) 
				this.currentCharacterId++;
			else 
				this.currentCharacterId = CHARACTER_MIN;
			this.currentCharacterImg.setTexture(`character${this.currentCharacterId}Avatar`);
		});

		this.startBtn = this.add.dom(
			(getGameWidth(this)/2),
			(getGameHeight(this)-50),
			'button',
			`width:150px; height:45px; font-family:Grobold,Arial; 
			color:#000; font-size:25px; background-color:#d2d2d2; border:none`,
			"Start"

		).addListener('click').on('click', () => {

			//this.scene.start('Game');

		});
	}

	update() {
	}
}