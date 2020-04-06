import { getGameWidth, getGameHeight, GAMEDATA} from '../helpers';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Menu'
};


export class MenuScene extends Phaser.Scene {

	private levelThumb: Phaser.GameObjects.Image;
	private levelsThumbsTextures: Array<string>;
	private characterThumbPlayer1: Phaser.GameObjects.Image;
	private characterThumbPlayer2: Phaser.GameObjects.Image;
	private charactersAvatarsTextures: Array<string>;

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
	 * Add the scene title, for example: Menu (a Phaser DOM Element)
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

	private subTitle(x, y, text): void {
		this.add.dom(
			x,
			y,
			'h4',
			'color:#fff; font-size: 30px; font-family: Grobold, Arial',
			text
		);
	}

	
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
	 * Add the Start Button that starts the GameScene (and stops this one)
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

	private nextBtn(x, y, max, img: Phaser.GameObjects.Image, textures: Array<string>): void {
		let i = 0;
		this.add.dom(
			x,
			y,
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
			(i < max-1) ? i++ : i = 0;
			img.setTexture(textures[i]);
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

		this.levelsThumbsTextures = [];
		for (let nLevel = 1; nLevel <= GAMEDATA.LEVELS.MAX; nLevel++) {
			this.levelsThumbsTextures.push(`level${nLevel}Thumbnail`);
		}

		this.charactersAvatarsTextures = [];
		for (let nCharacter = 1; nCharacter <= GAMEDATA.CHARACTERS.MAX; nCharacter++) {
			this.charactersAvatarsTextures.push(`character${nCharacter}Avatar`);
		}

		this.background();
		//this.logo();
		this.title();
		this.startBtn();
		
		this.subTitle(240, 170, "Terrain");
		this.levelThumb = this.add.image(240, 340, this.levelsThumbsTextures[0]);
		this.nextBtn(
			240, 
			470, 
			GAMEDATA.LEVELS.MAX,
			this.levelThumb,
			this.levelsThumbsTextures
		);

		this.subTitle(getGameWidth(this)-240, 170, "Personnages");

		this.hoaText(700, 260, "Joueur 1");
		this.characterThumbPlayer1 = this.add.image(700, 340, this.charactersAvatarsTextures[0]);
		this.nextBtn(
			700,
			400,
			GAMEDATA.CHARACTERS.MAX,
			this.characterThumbPlayer1,
			this.charactersAvatarsTextures
		);

		this.hoaText(850, 260, "Joueur2");
		this.characterThumbPlayer2 = this.add.image(850, 340, this.charactersAvatarsTextures[0]);
		this.nextBtn(
			850,
			400,
			GAMEDATA.CHARACTERS.MAX,
			this.characterThumbPlayer2,
			this.charactersAvatarsTextures
		);

	}

}