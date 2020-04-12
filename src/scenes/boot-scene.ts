import { getGameWidth, getGameHeight, GAMEDATA } from '../helpers';
import { Level } from '../objects/level';
import { User } from '../objects/user';
import { Character } from '../objects/character';
import { Gui } from '../objects/gui';


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: 'Boot'
};


export class BootScene extends Phaser.Scene {

	private levels: Array<Level>
	private users: Array<User>;
	private characters: Array<Character>;

	private logo: Phaser.GameObjects.DOMElement;
	private btn: Phaser.GameObjects.DOMElement;
	private background: Phaser.GameObjects.Image;
	private musicTheme: Phaser.Sound.BaseSound;
	

	constructor() {
		super(sceneConfig);
	}

	init() {


		this.levels = [
			new Level({
				scene: this,
				id: 1,
				name: "Cimetiere"
			}),
			new Level({
				scene: this,
				id: 2,
				name: "Prairie"
			})
		];
		
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

		this.characters = [
			new Character({
				id: 1,
				details: { nickname: "Stevie" },
				stats: {}
			}),
			new Character({
				id: 2,
				details: { nickname: "Caroline" },
				stats: {}
			}),
			new Character({
				id: 3,
				details: { nickname: "Kristof" },
				stats: {}
			}),
			new Character({
				id: 4,
				details: { nickname: "Kristy" },
				stats: {}
			}),
			new Character({
				id: 5,
				details: { nickname: "Oron" },
				stats: {}
			}),
			new Character({
				id: 6,
				details: { nickname: "Alexa" },
				stats: {}
			})
		];

		// Using the scene Data Manager to store data on a scene level.
		this.data.set('users', this.users);
		this.data.set('characters', this.characters);
		this.data.set('levels', this.levels);

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
		for (let n = 1; n <= GAMEDATA.CHARACTERS.NUMBER; n++) {
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
			// Passing this scene data to the destination scene.
			sceneData: this.data.getAll()
		});
		
	}
}