import { gameWidth, gameHeight, DEFAULT_FONT_FAMILIES, COLORS } from "../helpers";
import { Level } from "../objects/level";
import { User } from "../objects/user";
import { Character } from "../objects/character";
import { LoadingBar } from "../objects/loading";
import { getUserRatio } from "../storage";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Boot",
};

export class BootScene extends Phaser.Scene {
    private levels: Array<Level>;
    private user1: User;
    private user2: User;
    private characters: Array<Character>;
    private loadingBar: LoadingBar;

    constructor() {
        super(sceneConfig);
    }

    init() {
        this.user1 = new User({ 
            id: 1, 
            username: "Player 1", 
            ratio: getUserRatio("user1"), 
            screenSide: "left" 
        });

        this.user2 = new User({ 
            id: 2, 
            username: "Player 2", 
            ratio: getUserRatio("user2"), 
            screenSide: "right" 
        });

        this.levels = [
            new Level({ id: 1, name: "Cimetiere" }),
            new Level({ id: 2, name: "Prairie" }),
        ];

        this.characters = [
            new Character({ id: 1, details: { nickname: "Stew" }, stats: {} }),
            new Character({ id: 2, details: { nickname: "Caroline" }, stats: {} }),
            new Character({ id: 3, details: { nickname: "Kristof" }, stats: {} }),
            new Character({ id: 4, details: { nickname: "Claudia" }, stats: {} }),
            new Character({ id: 5, details: { nickname: "Steven" }, stats: {} }),
            new Character({ id: 6, details: { nickname: "Zoya" }, stats: {} }),
        ];

        // Using the scene Data Manager to store data on a scene level.
        this.data.set("user1", this.user1);
        this.data.set("user2", this.user2);
        this.data.set("characters", this.characters);
        this.data.set("levels", this.levels);
    }

    preload() {
        this.load.pack("preload", "assets/pack.json", "preload");

        for (let n = 1; n <= this.characters.length; n++) {
            this.load.atlas(
                `character${n}`,
                `assets/images/characters/character${n}/character${n}-spritesheet.png`,
                `assets/images/characters/character${n}/character${n}-atlas.json`
            );
        }

        this.load.bitmapFont(
            'Grobold',
            'assets/fonts/grobold/grobold.png',
            'assets/fonts/grobold/grobold.fnt'
        );

        this.loadingBar = new LoadingBar({ scene: this });

        this.load.on("progress", (value: number) => {
            this.loadingBar.draw(value);
            this.loadingBar.progressText.setText((Math.floor(value * 100)) + "%");
        });

        this.load.on("complete", () => {
            this.loadingBar.destroy();
        });
    }

    create() {
        this.sound.add("menuTheme").play();

        this.add.image(gameWidth(this) / 2, gameHeight(this) / 2, "backgroundMenu");
        this.add.image(gameWidth(this) / 2, (gameHeight(this) / 2) - 50, "mainLogo");
        this.add.image(gameWidth(this) / 2, 52, "borderTop");
        this.add.image(gameWidth(this) / 2, gameHeight(this) - 52, "borderBottom");

        const nextSceneButton = this.add.image(gameWidth(this) / 2, gameHeight(this) - 214, "textButtonWood")
            .setInteractive({ cursor: "pointer" })
            .on("pointerover", () => {
                nextSceneButton.setTexture("textButtonWoodSelected");
            })
            .on("pointerout", () => {
                nextSceneButton.setTexture("textButtonWood");
            })
            .on("pointerdown", () => {
                this.sound.add("clickSound").play();
                this.cameras.main.fadeOut();
                this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                    this.scene.start("Menu", this.data.getAll());
                });
            });

        // The text on main button
        this.make.text({
            x: gameWidth(this) / 2,
            y: gameHeight(this) - 214,
            text: "START",
            style: {
                fontSize: "32px",
                fontFamily: DEFAULT_FONT_FAMILIES,
                align: "center",
                color: COLORS.white.string,
            },
        }).setOrigin(0.5, 0.5);
    }
}
