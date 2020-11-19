/** @format */

import { getGameWidth, getGameHeight, COLORS, DEFAULT_FONT_FAMILIES } from "../helpers";

/**
 * This class is used for GUI elements such as actions buttons and titles.
 * It relies on Phaser game objects DOM elements, so these GUI elements are
 * html and css.
 */
export class Gui {
    public static readonly mainBtnStyle = `
		height: 50px; 
		font-size: 25px; 
		border-radius: 4px;
		font-family: ${DEFAULT_FONT_FAMILIES}; 
		color: ${COLORS.black.string}; 
		background-color: ${COLORS.white.string}; 
		border: 2px solid ${COLORS.black.string}
	`;

    public static readonly secondaryBtnStyle = `
		width: 100px; 
		height: 33px; 
		font-size: 17px; 
		border-radius: 4px;
		font-family: ${DEFAULT_FONT_FAMILIES}; 
		color: ${COLORS.black.string}; 
		background-color: ${COLORS.white.string}; 
		border: 2px solid ${COLORS.black.string}
	`;

	public static readonly titleStyle = `
		font-size: 40px; 
		margin: 0;
		color: ${COLORS.white.string}; 
		font-family: ${DEFAULT_FONT_FAMILIES}`;

    public static readonly sectionTitleStyle = `
		font-size: 30px;
		margin: 0;
		color: ${COLORS.white.string}; 
		font-family: ${DEFAULT_FONT_FAMILIES}
	`;

    public static readonly basicTextStyle = `
		font-size: 20px; 
		margin: 0;
		color: ${COLORS.white.string}; 
		font-family: ${DEFAULT_FONT_FAMILIES}
	`;

    /**
     * Create a stylized Button DOM Element with a click event listener attached
     * to it. The event listener callback starts a new scene using the scene key
     * passed in arguments and stops all sounds if stopSounds set to true.
     */
    public static mainBtn(params: {
        scene: Phaser.Scene;
        text: string;
        stopSounds: boolean;
        scenePlugin: Phaser.Scenes.ScenePlugin;
        newSceneKey: string;
        sceneData?: object;
    }): void {
        params.scene.add
            .dom(
                getGameWidth(params.scene) / 2,
                getGameHeight(params.scene) - 90,
                "button",
                Gui.mainBtnStyle,
                params.text
            )
            .addListener("click")
            .on("click", () => {
                params.scene.sound.add("clickSound").play();

                if (params.stopSounds) {
                    params.scene.sound.stopAll();
                }

                params.scenePlugin.start(params.newSceneKey, params.sceneData);
            });
    }

    /**
     * Button that changes an image (img) texture with another (textures),
     * one by one. Like a slideshow.
     * @param img: a phaser game object image that act as a container in a way.
     * @param textures: the textures to append to img.
     */
    public static slideBtn(params: {
        scene: Phaser.Scene;
        x: number;
        y: number;
        text: string;
        img: Phaser.GameObjects.Image;
        textureKeys: Array<string>;
        callback?: Function;
    }): void {
        let currentIndex = 0;

        params.scene.add
            .dom(
                params.x,
                params.y,
                "button",
                Gui.secondaryBtnStyle,
                params.text
            )
            .addListener("click")
            .on("click", function () {
                params.scene.sound.add("clickSound").play();

                if (currentIndex < params.textureKeys.length - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }

                params.img.setTexture(params.textureKeys[currentIndex]);

                if (params.callback !== undefined) {
                    params.callback();
                }
            });
    }

    public static title(params: { scene: Phaser.Scene; text: string }): void {
        params.scene.add.dom(
            getGameWidth(params.scene) / 2,
            64,
            "h3",
            Gui.titleStyle,
            params.text
        );
    }

    public static sectionTitle(params: {
        scene: Phaser.Scene;
        x: number;
        y: number;
        text: string;
    }): void {
        params.scene.add.dom(
            params.x,
            params.y,
            "h4",
            Gui.sectionTitleStyle,
            params.text
        );
    }

    public static simpleParagraph(params: {
        scene: Phaser.Scene;
        x: number;
        y: number;
        text: string;
    }): void {
        params.scene.add.dom(
            params.x,
            params.y,
            "p",
            Gui.basicTextStyle,
            params.text
        );
    }
}
