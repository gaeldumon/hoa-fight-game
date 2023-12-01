import * as Phaser from "phaser";

export function gameWidth(scene: Phaser.Scene) {
    return scene.game.scale.width;
}

export function gameHeight(scene: Phaser.Scene) {
    return scene.game.scale.height;
}

export const COLORS = {
    customBlue: { string: "#4346f9", hex: 0x4346f9 },
    customGreen: { string: "#76ea64", hex: 0x76ea64 },
    vibrantGreen: { string: "#25f945", hex: 0x25f945 },
    customRed: { string: "#ea2d23", hex: 0xea2d23 },
    white: { string: "#ffffff", hex: 0xffffff },
    black: { string: "#000000", hex: 0x000000 }
};

export const CONTROL_P1 = {
    right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
    left: Phaser.Input.Keyboard.KeyCodes.LEFT,
    jump: Phaser.Input.Keyboard.KeyCodes.UP,
    shoot: Phaser.Input.Keyboard.KeyCodes.SHIFT
};

export const CONTROL_P2 = {
    right: Phaser.Input.Keyboard.KeyCodes.D,
    left: Phaser.Input.Keyboard.KeyCodes.Q,
    jump: Phaser.Input.Keyboard.KeyCodes.Z,
    shoot: Phaser.Input.Keyboard.KeyCodes.S
};

export const DEFAULT_FONT_FAMILIES = "Grobold, Marker Felt, fantasy, Comic Sans MS, Comic Sans, cursive";
