import { getGameWidth, getGameHeight, GAMEDATA, MENUSECTION } from '../helpers';


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
	
	public static levelChoice = 0;
	public static characterChoicePlayer1 = 0;
	public static characterChoicePlayer2 = 0;


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
	private subTitle(px, py, pText): void {
		this.add.dom(
			px,
			py,
			'h4',
			'color:#fff; font-size: 30px; font-family: Grobold, Arial',
			pText
		);
	}

	/**
	 * Add some "Hoa" styled text (i.e Grobold font, black, kinda big etc)
	 */
	private hoaText(px, py, pText): void {
		this.add.dom(
			px,
			py,
			'p',
			'color:#fff; font-size: 20px; font-family: Grobold, Arial',
			pText
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

			// Stoping ALL previous music (Theme from the bootScene)
			this.sound.stopAll();

			this.scene.start('Game');

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
	 * 3) Appends a "character choice" --> the i index of the current texture key
	 * @param x: horizontal position of the button.
	 * @param y: vertical position of the button.
	 * @param img: displayed image, which texture's will change on button click.
	 * @param textures: array composed of textures keys (see BootScene preload).
	 * @param section: if type is "level" then 'i' will be put inside a certain
	 * property/field, if "user1" then in a different etc
	 */
	private choosingBtn(
		px: number, 
		py: number, 
		pImg: Phaser.GameObjects.Image, 
		pTextures: Array<string>,
		// What section the button is linked to: level, user1, user2
		// Use an interface for this?
		pSection: MENUSECTION

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
			
			if (pSection === MENUSECTION.LEVEL) {
				MenuScene.levelChoice = i;
			} else if (pSection === MENUSECTION.USER1) {
				MenuScene.characterChoicePlayer1 = i;
			} else if (pSection === MENUSECTION.USER2) {
				MenuScene.characterChoicePlayer2 = i;
			} 
		});
	}

	private levelSection(): void {
		// Terrain/map/level choosing section.
		this.subTitle(240, 170, "Terrain");
		this.levelThumb = this.add.image(240, 340, this.levelsThumbsTextures[0]);
		this.choosingBtn(
			240, 
			470, 
			this.levelThumb,
			this.levelsThumbsTextures,
			MENUSECTION.LEVEL
		);
	}

	private charactersSection(): void {
		// Characters choosing section, divided in 2 sub-sections (1 per user).
		this.subTitle(getGameWidth(this) - 240, 170, "Personnages");

		this.hoaText(700, 260, "Joueur 1");
		this.characterThumbPlayer1 = this.add.image(700, 340, this.charactersAvatarsTextures[0]);
		this.choosingBtn(
			700,
			400,
			this.characterThumbPlayer1,
			this.charactersAvatarsTextures,
			MENUSECTION.USER1
		);

		this.hoaText(850, 260, "Joueur2");
		this.characterThumbPlayer2 = this.add.image(850, 340, this.charactersAvatarsTextures[0]);
		this.choosingBtn(
			850,
			400,
			this.characterThumbPlayer2,
			this.charactersAvatarsTextures,
			MENUSECTION.USER2
		);
	}

	private storeThumbsTextures(): void {
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
	}

	constructor() {		
		super(sceneConfig);
	}

	create() {

		this.storeThumbsTextures();
		this.background();
		this.title();
		this.levelSection();
		this.charactersSection();
		this.startBtn();
	
	}

}