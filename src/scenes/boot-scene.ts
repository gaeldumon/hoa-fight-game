import { getGameWidth, getGameHeight, COLORS } from '../helpers';
import { WebsiteUser } from '../objects/websiteUser';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Boot'
};


export class BootScene extends Phaser.Scene {

	private websiteUser1: WebsiteUser;
	private websiteUser2: WebsiteUser;

	private title: Phaser.GameObjects.DOMElement;
	private btn: Phaser.GameObjects.DOMElement;
	private background: Phaser.GameObjects.Image;

	constructor() {
		super(sceneConfig);
	}

	preload() {
		/*this.load.pack(
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
		}*/
	}

	create() {

		this.websiteUser1 = new WebsiteUser({
			avatar: '',
			username: 'Stan45',
			rank: 1,
			id: 15,
			score: 20
		});

		this.websiteUser2 = new WebsiteUser({
			avatar: '',
			username: 'Beth347',
			rank: 2,
			id: 16,
			score: 18
		});

		/****************************************************/

		this.background = this.add.image(
			getGameWidth(this)/2, 
			getGameHeight(this)/2,
			'backgroundForGUIScenes'
		);

		this.title = this.add.dom(
			getGameWidth(this)/2,
			50,
			'h3',
			'color:#fff; font-size: 55px; font-family: Grobold, Arial',
			"HOA FIGHT"
		);

		this.btn = this.add.dom(
			(getGameWidth(this)/2),
			(getGameHeight(this)/2),
			'button',
			`width:150px; height:45px; font-family:Grobold,Arial; 
			color:#000; font-size:25px; background-color:#d2d2d2; border:none`,
			"Menu"
		).addListener('click').on('click', () => {
			this.scene.start('Menu');
		});
	}
}