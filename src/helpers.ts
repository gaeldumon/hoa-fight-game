/** @format */

import * as Phaser from "phaser";

/**
 * Return the width of the current scene.
 * Which is generally equal to the width of the "screen"/canvas but not always.
 * @param scene
 */
export const getGameWidth = (scene: Phaser.Scene) => {
    return scene.game.scale.width;
};

/**
 * Return the height of the current scene.
 * Which is generally equal to the height of the "screen"/canvas but not always.
 * @param scene
 */
export const getGameHeight = (scene: Phaser.Scene) => {
    return scene.game.scale.height;
};

export const COLORS = {
    customBlue: { string: "#4346f9", hex: 0x4346f9 },
    customGreen: { string: "#76ea64", hex: 0x76ea64 },
    vibrantGreen: { string: "#25f945", hex: 0x25f945 },
    customRed: { string: "#ea2d23", hex: 0xea2d23 },
    white: { string: "#ffffff", hex: 0xffffff },
    black: { string: "#000000", hex: 0x000000 }
};

export const CONTROLKEYS = {
    PLAYER: {
        SET1: {
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            jump: Phaser.Input.Keyboard.KeyCodes.UP,
            shoot: Phaser.Input.Keyboard.KeyCodes.SHIFT,
            displayString: `
				Right  : D
				Left   : Q
				Shoot  : S
				Jump   : SPACE
			`
        },

        SET2: {
            right: Phaser.Input.Keyboard.KeyCodes.D,
            left: Phaser.Input.Keyboard.KeyCodes.Q,
            jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
            shoot: Phaser.Input.Keyboard.KeyCodes.S,
            displayString: `
				Right  : →
				Left   : ←
				Shoot  : SHIFT
				Jump   : ↑
			`
        },
    },
};

export const DEFAULT_FONT_FAMILIES = "Grobold, monospace, Arial";
