/** @format */

import { getGameWidth, getGameHeight, COLORS } from "../helpers";
import { Level } from "../objects/Level";
import { User } from "../objects/User";
import { Character } from "../objects/Character";
import { Gui } from "../objects/Gui";
import { LoadingBar } from "../objects/LoadingBar";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Boot",
};

export class BootScene extends Phaser.Scene {
    private levels: Array<Level>;
    private users: Array<User>;
    private characters: Array<Character>;

    private logo: Phaser.GameObjects.Image;
    private btn: Phaser.GameObjects.DOMElement;
    private background: Phaser.GameObjects.Image;
    private musicTheme: Phaser.Sound.BaseSound;
	private loadingBar: LoadingBar;

    constructor() {
        super(sceneConfig);
    }

    init() {
        this.levels = [
            new Level({
                id: 1,
                name: "Cimetiere",
            }),
            new Level({
                id: 2,
                name: "Prairie",
            }),
        ];

        this.users = [
            new User({
                id: 1,
                username: "PoolGhoul",
				ratio: 0,
				games: [],
                screenSide: "left",
            }),

            new User({
                id: 2,
                username: "JollyClever",
				ratio: 0,
				games: [],
                screenSide: "right",
            }),
		];
		
        this.characters = [
            new Character({
                id: 1,
                details: { nickname: "Stevie" },
                stats: {},
            }),
            new Character({
                id: 2,
                details: { nickname: "Caroline" },
                stats: {},
            }),
            new Character({
                id: 3,
                details: { nickname: "Kristof" },
                stats: {},
            }),
            new Character({
                id: 4,
                details: { nickname: "Kristy" },
                stats: {},
            }),
            new Character({
                id: 5,
                details: { nickname: "Oron" },
                stats: {},
            }),
            new Character({
                id: 6,
                details: { nickname: "Alexa" },
                stats: {},
            }),
        ];

        // Using the scene Data Manager to store data on a scene level.
        this.data.set("users", this.users);
        this.data.set("characters", this.characters);
        this.data.set("levels", this.levels);
    }

    preload() {
        this.load.pack("preload", "assets/pack.json", "preload");

        // Preload all characters atlases : a json file that acts as
        // as a "map"/"link" to a png spritesheet.
		// Used for drawing PLayer texture and set animations.
		const NUMBER_OF_CHARACTERS = 6;
        for (let n = 1; n <= NUMBER_OF_CHARACTERS; n++) {
            this.load.atlas(
                `character${n}`,
                `assets/images/characters/character${n}/character${n}-spritesheet.png`,
                `assets/images/characters/character${n}/character${n}-atlas.json`
            );
		}
		
		this.loadingBar = new LoadingBar({ scene: this });

        this.load.on("progress", (value) => {
			this.loadingBar.draw(value);
			this.loadingBar.progressText.setText((Math.floor(value*100)) + "%");
		});
		
        this.load.on("complete", () => {
			this.loadingBar.destroy();
		});

    }

    create() {
        this.musicTheme = this.sound.add("menuTheme");
        this.musicTheme.play();

        this.background = this.add.image(
            getGameWidth(this) / 2,
            getGameHeight(this) / 2,
            "backgroundForGUIScenes"
        );

        this.logo = this.add.image(
            getGameWidth(this) / 2,
            getGameHeight(this) / 2.5,
            "mainLogo"
        );

        Gui.simpleParagraph({
            scene: this,
            x: this.logo.x,
            y: this.logo.y + 90,
            text: "Welcome to the fight !",
		});

        Gui.mainBtn({
            scene: this,
            text: "Menu",
            stopSounds: false,
            scenePlugin: this.scene,
            newSceneKey: "Menu",
            // Passing this scene data to the menu scene.
            sceneData: this.data.getAll(),
        });
    }
}
