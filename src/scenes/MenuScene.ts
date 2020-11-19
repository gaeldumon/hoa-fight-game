/** @format */

import { getGameWidth, getGameHeight } from "../helpers";
import { Gui } from "../objects/Gui";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Menu",
};

/**
 * This scene is where the two players choose the terrain/map they will play on,
 * and the characters they will play with.
 * It mainly uses methods from the Gui class.
 */
export class MenuScene extends Phaser.Scene {
    private levelThumb: Phaser.GameObjects.Image;
    private characterThumbs: Array<Phaser.GameObjects.Image>;

    private drawBackground(): void {
        this.add.image(
            getGameWidth(this) / 2,
            getGameHeight(this) / 2,
            "backgroundForGUIScenes"
        );
    }

    private initThumbnails(data): void {
        // Init the terrain thumbnail on the 1st level.
        this.levelThumb = this.add.image(
            200,
            300,
            data.values.levels[0].thumbnailKey
        );

        // Init the 2 characters thumbnails on the 1st character.
        this.characterThumbs = [
            this.add.image(650, 270, data.values.characters[0].thumbnailKey),
            this.add.image(850, 270, data.values.characters[0].thumbnailKey),
        ];
    }

    private printTitles(): void {
        Gui.title({ scene: this, text: "MENU" });
        Gui.sectionTitle({ scene: this, x: 200, y: 130, text: "TERRAIN" });
        Gui.sectionTitle({ scene: this, x: 750, y: 130, text: "CHARACTERS" });
    }

    private printTexts(): void {
        const player1Keys = `
			Right  : D
			Left   : Q
			Shoot  : E
			Jump   : SPACE
		`;
        const player2Keys = `
			Right  : →
			Left   : ←
			Shoot  : SHIFT
			Jump   : ↑
		`;
        Gui.customText({ scene: this, x: 650, y: 210, text: "PLAYER 1" });
        Gui.customText({ scene: this, x: 850, y: 210, text: "PLAYER 2" });
        Gui.customText({ scene: this, x: 650, y: 420, text: player1Keys });
        Gui.customText({ scene: this, x: 850, y: 420, text: player2Keys });
    }

    // Initialized the choices on the 1st elements of the terrain and the
    // characters. This way if the players doesn't click on anything they still
    // have terrain and characters instances attached.
    private initUsersChoices(pUsers, pLevels, pCharacters): void {
        for (const user of pUsers) {
            user.levelInstance = pLevels[0];
            user.characterInstance = pCharacters[0];
        }
    }

    constructor() {
        super(sceneConfig);
    }

    init(bootSceneData) {
        // Using ES2020 optionnal chaining (i.e the ?) to check if the data
        // object coming from the boot scene has users, characters and
        // levels fields.
        // Setting the data from the boot scene to this scene's data.
        this.data.set("users", bootSceneData?.users);
        this.data.set("characters", bootSceneData?.characters);
        this.data.set("levels", bootSceneData?.levels);

        this.initUsersChoices(
            this.data.get("users"),
            this.data.get("levels"),
            this.data.get("characters")
        );
    }

    create() {
        this.drawBackground();
        this.initThumbnails(this.data);
        this.printTitles();
        this.printTexts();

        // Slide button n°1. This is where User 1 or 2 choose the level.
        // Modifies the level thumbnail texture (with texture keys) on click.
        Gui.slideBtn({
            scene: this,
            x: 200,
            y: 450,
            text: "NEXT",
            img: this.levelThumb,
            textureKeys: this.data
                .get("levels")
                .map((level) => level.thumbnailKey),
            callback: () => {
                for (const level of this.data.get("levels")) {
                    if (level.thumbnailKey === this.levelThumb.texture.key) {
                        this.data.get("users")[0].levelInstance = level;
                        this.data.get("users")[1].levelInstance = level;
                    }
                }
            },
        });

        // Slide button n°2. This is where User 1 choose its character.
        // Modifies the texture of the character thumbnail n°1 on click.
        Gui.slideBtn({
            scene: this,
            x: 650,
            y: 330,
            text: "NEXT",
            img: this.characterThumbs[0],
            textureKeys: this.data.get("characters").map((c) => c.thumbnailKey),
            callback: () => {
                for (const ch of this.data.get("characters")) {
                    if (
                        ch.thumbnailKey === this.characterThumbs[0].texture.key
                    ) {
                        this.data.get("users")[0].characterInstance = ch;
                    }
                }
            },
        });

        // Slide button n°3. This is where User 2 choose its character.
        // Modifies the texture of the character thumbnail n°2 on click.
        Gui.slideBtn({
            scene: this,
            x: 850,
            y: 330,
            text: "NEXT",
            img: this.characterThumbs[1],
            textureKeys: this.data.get("characters").map((c) => c.thumbnailKey),
            callback: () => {
                for (const ch of this.data.get("characters")) {
                    if (
                        ch.thumbnailKey === this.characterThumbs[1].texture.key
                    ) {
                        this.data.get("users")[1].characterInstance = ch;
                    }
                }
            },
        });

        // Set the MODIFIED users data from the boot scene to this actual scene.
        // Modified, because level and characters instances has been linked to
        // each users thanks to the slide buttons callbacks and the thumbnails.
        this.data.set("users", this.data.get("users"));

        Gui.mainBtn({
            scene: this,
            text: "START",
            stopSounds: true,
            scenePlugin: this.scene,
            newSceneKey: "Game",
            // Sending this scene's data (= users) to the game scene.
            sceneData: this.data.getAll(),
        });
    }
}
