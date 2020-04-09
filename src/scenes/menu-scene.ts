import { getGameWidth, getGameHeight, GAMEDATA, MENUSECTION } from '../helpers';
import { Gui } from '../objects/gui';


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
	
	public static levelChoice = 0;
	public static characterChoicePlayer1 = 0;
	public static characterChoicePlayer2 = 0;


	private background(): void {
		this.add.image(
			getGameWidth(this)/2, 
			getGameHeight(this)/2,
			'backgroundForGUIScenes'
		);
	}


	private choosingBtn(
		px: number, 
		py: number, 
		pImg: Phaser.GameObjects.Image,
		pTextures: Array<string>,
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
		Gui.sectionTitle({ scene: this, x: 240, y: 170, text: "Terrain" });

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
		Gui.sectionTitle({ scene: this, x: getGameWidth(this)-240, y: 170, text: "Personnages" });

		Gui.customText({ scene: this, x: 700, y: 260, text: "Joueur 1" });
		Gui.customText({ scene: this, x: 850, y: 260, text: "Joueur2" });

		// Init thumbnails on 1st texture 
		this.characterThumbPlayer1 = this.add.image(700, 340, this.charactersAvatarsTextures[0]);
		this.characterThumbPlayer2 = this.add.image(850, 340, this.charactersAvatarsTextures[0]);

		this.choosingBtn(
			700,
			400,
			this.characterThumbPlayer1,
			this.charactersAvatarsTextures,
			MENUSECTION.USER1
		);

		this.choosingBtn(
			850,
			400,
			this.characterThumbPlayer2,
			this.charactersAvatarsTextures,
			MENUSECTION.USER2
		);
	}

	private storeThumbsTextures(): void {

		this.levelsThumbsTextures = [];
		this.charactersAvatarsTextures = [];

		for (let n = 0; n < GAMEDATA.LEVELS.NUMBER; n++) {
			this.levelsThumbsTextures.push(`level${n}Thumbnail`);
		}

		for (let n = 0; n < GAMEDATA.CHARACTERS.NUMBER; n++) {
			this.charactersAvatarsTextures.push(`character${n}Avatar`);
		}
	}

	constructor() {		
		super(sceneConfig);
	}

	create() {

		this.storeThumbsTextures();

		this.background();

		Gui.title({ scene: this, text: "MENU" });

		this.levelSection();

		this.charactersSection();
		
		Gui.mainBtn({ 
			scene: this,
			text: "Start",
			stopSounds: true,
			scenePlugin: this.scene,
			newSceneKey: 'Game'
		});
	
	}

}