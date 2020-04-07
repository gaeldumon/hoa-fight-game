import { getGameWidth, getGameHeight, GAMEDATA } from '../helpers';
// To access the 2 public-static WebsiteUser instances of the Boot Scene.
import { BootScene } from './boot-scene';
// To declare expected "Choosing Buttons" argument type.
import { WebsiteUser } from '../objects/websiteUser';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Menu'
};

/**
 * This Scene is the Menu of the game, right before launching a match.
 * It provides the "tuning" of the match: users can choose a map and each can
 * choose a character. The Scene provides a Start Button with a callback action
 * that starts the Game Scene...
 */
export class MenuScene extends Phaser.Scene {

	private levelThumb: Phaser.GameObjects.Image;
	private levelsThumbsTextures: Array<string>;
	private characterThumbPlayer1: Phaser.GameObjects.Image;
	private characterThumbPlayer2: Phaser.GameObjects.Image;
	private charactersAvatarsTextures: Array<string>;
	
	// An id between 0 and GAMEDATA.LEVELS.NUMBER
	private _levelChoice: number;
	
	public get levelChoice() : number {
		return this._levelChoice;
	}
	
	/**
	 * Draws/Add the background (a Phaser Image)
	 */
	private background(): void {
		this.add.image(
			getGameWidth(this)/2, 
			getGameHeight(this)/2,
			'backgroundForGUIScenes'
		);
	}

	/**
	 * Add the logo (for now, a Phaser DOM Element)
	 */
	private logo(): void {
		this.add.dom(
			getGameWidth(this)/2,
			30,
			'h3',
			'color:#fff; font-size: 55px; font-family: Grobold, Arial',
			"HOA FIGHT"
		);
	}

	/**
	 * Add the h3 "scene title" (a Phaser DOM Element), for example here: "Menu"
	 */
	private title(): void {
		this.add.dom(
			getGameWidth(this)/2,
			24,
			'h3',
			'color:#fff; font-size: 40px; font-family: Grobold, Arial',
			"MENU"
		);
	}

	/**
	 * Add a h4 "section title" (a Phaser DOM Element), for example "Maps" or
	 * "Characters" : in short a section of the Menu GUI.
	 */
	private subTitle(x, y, text): void {
		this.add.dom(
			x,
			y,
			'h4',
			'color:#fff; font-size: 30px; font-family: Grobold, Arial',
			text
		);
	}

	/**
	 * Add some "Hoa" styled text (i.e Grobold font, black, kinda big etc)
	 */
	private hoaText(x, y, text): void {
		this.add.dom(
			x,
			y,
			'p',
			'color:#fff; font-size: 20px; font-family: Grobold, Arial',
			text
		);
	}

	/**
	 * The Start Button that starts the GameScene (and stops this one)
	 */
	private startBtn(): void {
		this.add.dom(
			getGameWidth(this)/2,
			getGameHeight(this)-50,
			'button',
			`width: 150px; 
			height: 49px; 
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

	/**
	 * Add a button in charge of SETTING A NEW TEXTURE of a Phaser image. 
	 * Like a slideshow when you click the button "next" to see the next image.
	 * On click it does 3 things: 
	 * 1) Incrementing an index to pass through textures keys of an array one by
	 * one until arrays's end is reached (then starting over).
	 * 2) Each time we increment, a new texture is set on the image passed as 
	 * argument based on the current texture key of the array.
	 * 3) Appends a "character choice" in the form of the current texture key
	 * to a websiteUser Instance (or field if declared public-static).
	 * @param x: horizontal position of the button.
	 * @param y: vertical position of the button.
	 * @param img: displayed image, which texture's will change on button click.
	 * @param textures: array composed of textures keys (see BootScene preload).
	 * @param websiteUser: user that will get its characterChoice SET on click.
	 */
	private choosingBtn(
		px: number, 
		py: number, 
		pImg: Phaser.GameObjects.Image, 
		pTextures: Array<string>,
		// If null that means this is the button for the level choosing.
		// If not that means this is a button for a character choosing.
		pWebsiteUser: WebsiteUser = null

	): void {

		let i = 0;

		this.add.dom(
			px,
			py,
			'button',
			`width: 100px; 
			height: 33px; 
			font-family: Grobold,Arial; 
			color: #000; 
			font-size: 17px; 
			background-color: #d2d2d2; 
			border:none`,
			"Suivant"
		).addListener('click').on('click', () => {
			// If we reach the end of the texture keys then going back to the
			// first texture key, if not then going to the next texture key.
			(i < pTextures.length - 1) ? i++ : i = 0;
			// Setting the current texture key to the image, which in the end,
			// acts as a container.
			pImg.setTexture(pTextures[i]);

			// Important piece of code. Appending a character choice to a user.
			// If i = 0, then characterChoice is 0, then the user's player 
			// instance will have the character0 (the red dude).
			if (pWebsiteUser !== null) {
				// An Id between 0 and GAMEDATA.CHARACTERS.NUMBER
				pWebsiteUser.characterChoice = i;

			} else {

				this._levelChoice = i;

			}

		});
	}

	constructor() {		
		super(sceneConfig);
	}

	preload() {

	}

	create() {

		// Putting all levels thumbnails TEXTURES KEYS inside an array, that
		// we will pass through with the "Choosing Buttons" help and its "i" 
		// index, on click. 
		// All these textures keys come from the pack.json file.
		this.levelsThumbsTextures = [];
		for (let nLevel = 0; nLevel < GAMEDATA.LEVELS.NUMBER; nLevel++) {
			this.levelsThumbsTextures.push(`level${nLevel}Thumbnail`);
		}

		// Same for characters avatars textures keys.
		this.charactersAvatarsTextures = [];
		for (let nCharacter = 0; nCharacter < GAMEDATA.CHARACTERS.NUMBER; nCharacter++) {
			this.charactersAvatarsTextures.push(`character${nCharacter}Avatar`);
		}

		this.background();
		this.title();
		this.startBtn();
		
		// Terrain/map/level choosing section.
		this.subTitle(240, 170, "Terrain");
		this.levelThumb = this.add.image(240, 340, this.levelsThumbsTextures[0]);
		this.choosingBtn(
			240, 
			470, 
			this.levelThumb,
			this.levelsThumbsTextures
		);
		
		// Characters choosing section, divided in 2 sub-sections (1 per user).
		this.subTitle(getGameWidth(this)-240, 170, "Personnages");
		this.hoaText(700, 260, "Joueur 1");
		this.characterThumbPlayer1 = this.add.image(700, 340, this.charactersAvatarsTextures[0]);
		this.choosingBtn(
			700,
			400,
			this.characterThumbPlayer1,
			this.charactersAvatarsTextures,
			BootScene.websiteUser1
		);

		this.hoaText(850, 260, "Joueur2");
		this.characterThumbPlayer2 = this.add.image(850, 340, this.charactersAvatarsTextures[0]);
		this.choosingBtn(
			850,
			400,
			this.characterThumbPlayer2,
			this.charactersAvatarsTextures,
			BootScene.websiteUser2
		);

	}

}