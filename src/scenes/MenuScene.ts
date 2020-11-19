/** @format */

import { getGameWidth, getGameHeight, CONTROLKEYS } from "../helpers";
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

    // Initialized the choices on the 1st elements of the terrain and the
    // characters. This way if the players doesn't click on anything they still
    // have terrain and characters instances attached.
    private initUsersChoices(pUsers, pLevels, pCharacters): void {
        for (const user of pUsers) {
            user.levelInstance = pLevels[0];
            user.characterInstance = pCharacters[0];
        }
    }

    private makeTerrainSection(params: { x: number; y: number }): void {
		Gui.simpleParagraph({
            scene: this,
            x: params.x,
            y: params.y,
            text: "TERRAIN",
		});
		
        // Init the terrain thumbnail on the 1st level.
        this.levelThumb = this.add.image(
            params.x,
            params.y + 138,
            this.data.get("levels")[0].thumbnailKey
        );

        Gui.slideBtn({
            scene: this,
            x: params.x,
            y: params.y + 143 + 136,
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
    }

    private makeCharacterSection(params: {
        x: number;
        y: number;
        title: string;
        controlKeys: string;
        id: number;
    }): void {
        Gui.simpleParagraph({
            scene: this,
            x: params.x,
            y: params.y,
            text: params.title,
        });
        // Init character thumbnail to the 1st one
        this.characterThumbs.push(
            this.add.image(
                params.x,
                params.y + 70,
                this.data.get("characters")[0].thumbnailKey
            )
        );
        Gui.slideBtn({
            scene: this,
            x: params.x,
            y: params.y + 70 + 60,
            text: "NEXT",
            img: this.characterThumbs[params.id],
            textureKeys: this.data.get("characters").map((c) => c.thumbnailKey),
            callback: () => {
                for (const ch of this.data.get("characters")) {
                    if (
                        ch.thumbnailKey ===
                        this.characterThumbs[params.id].texture.key
                    ) {
                        this.data.get("users")[
                            params.id
                        ].characterInstance = ch;
                    }
                }
            },
        });
        Gui.simpleParagraph({
            scene: this,
            x: params.x,
            y: params.y + 70 + 60 + 72,
            text: params.controlKeys,
        });
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
		
		this.characterThumbs = [];
    }

    create() {
		Gui.title({ scene: this, text: "MENU" });

        this.drawBackground();

        this.makeTerrainSection({ 
			x: 200, 
			y: 192 
		});

        this.makeCharacterSection({
            x: 700,
            y: 192,
            title: "PLAYER 1",
            controlKeys: CONTROLKEYS.PLAYER.SET1.displayString,
            id: 0,
        });

        this.makeCharacterSection({
            x: 900,
            y: 192,
            title: "PLAYER 2",
            controlKeys: CONTROLKEYS.PLAYER.SET2.displayString,
            id: 1,
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
            sceneData: this.data.getAll(),
        });
    }
}
