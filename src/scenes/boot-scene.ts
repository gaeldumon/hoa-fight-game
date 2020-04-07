import { getGameWidth, getGameHeight } from '../helpers';
import { WebsiteUser } from '../objects/websiteUser';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Boot'
};


/**
 * This scene is the starting point of the whole game.
 * It loads everything the game needs (spritesheets, sounds...).
 * It creates instances of the WebsiteUser class which represents 2 users from 
 * the website that would start a game. For now I'm hard-coding fake users data 
 * directly into it but utimately I will "copy/import" real-world users data 
 * from the website into these instances. This Scene also provides a simple UI 
 * such as a logo and a Start Button that starts the Menu Scene, and later a
 * loading bar.
 */
export class BootScene extends Phaser.Scene {

	// I declare websiteUsers "public static" so I can access them and their
	// getters/setters through other Scenes using import. I'm aware it could be 
	// considered bad practice even if I know what static can imply: 
	// changes apply on all static refs accross the code, on Scene load these 
	// might not be cleared... But in the end, these will come from the website 
	// itself directly (through an API).
	public static websiteUser1: WebsiteUser;
	public static websiteUser2: WebsiteUser;

	private logo: Phaser.GameObjects.DOMElement;
	private btn: Phaser.GameObjects.DOMElement;
	private background: Phaser.GameObjects.Image;
	

	constructor() {
		super(sceneConfig);
	}

	preload() {
		// This is commented out for now, due to 'Scene testing' purposes.
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

		// Fake/mockup users.
		BootScene.websiteUser1 = new WebsiteUser({
			avatar: '',
			username: 'Stan45',
			rank: 1,
			id: 15,
			score: 20
		});

		BootScene.websiteUser2 = new WebsiteUser({
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
			`width:150px; height:45px; font-family:Grobold,Arial; 
			color:#000; font-size:25px; background-color:#d2d2d2; border:none`,
			"Menu"

		).addListener('click').on('click', () => {

			this.scene.start('Menu');

		});
	}
}