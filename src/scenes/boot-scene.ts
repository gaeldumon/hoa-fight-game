import { getGameWidth, getGameHeight, GAMEDATA } from '../helpers';
import { User } from '../objects/user';
import { Gui } from '../objects/gui';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Boot'
};


export class BootScene extends Phaser.Scene {

	private users: Array<User>;

	private logo: Phaser.GameObjects.DOMElement;
	private btn: Phaser.GameObjects.DOMElement;
	private background: Phaser.GameObjects.Image;
	private musicTheme: Phaser.Sound.BaseSound;
	

	constructor() {
		super(sceneConfig);
	}

	init() {
		
		this.users = [
			new User({
				id: 1,
				username: 'Foo10',
				rank: 1,
				score: 10,
				avatar: '',
				isGuest: false
			}),

			new User({
				id: 2,
				username: 'Boo20',
				rank: 2,
				score: 1,
				avatar: '',
				isGuest: false
			})
		];

		this.data.set('users', this.users);

	}

	preload() {

		this.load.pack(
			"preload",
			"assets/pack.json",
			"preload"
		);
		
		// Preload all characters atlases : a json file that acts as
		// as a "map"/"link" to a png spritesheet.
		// Used for drawing PLayer texture and set animations.
		// Still outside pack.json for now cause I don't know how.
		for (let n = 0; n < GAMEDATA.CHARACTERS.NUMBER; n++) {
			this.load.atlas(
				`character${n}`,
				`assets/images/characters/character${n}/character${n}-spritesheet.png`,
				`assets/images/characters/character${n}/character${n}-atlas.json`
			);
		}
		
	}

	create() {

		this.musicTheme = this.sound.add('menuTheme');
		this.musicTheme.play();

		this.background = this.add.image(
			getGameWidth(this)/2, 
			getGameHeight(this)/2,
			'backgroundForGUIScenes'
		);

		Gui.title({ scene: this, text: "HOA FIGHT" });
		
		Gui.mainBtn({ 
			scene: this, 
			text: "Menu", 
			stopSounds: true,
			scenePlugin: this.scene,
			newSceneKey: 'Menu',
			sceneData: this.data.getAll()
		});
		
	}
}