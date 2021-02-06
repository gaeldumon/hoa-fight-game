/** @format */

import * as Phaser from "phaser";
import Scenes from "./scenes";

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: "Hoa Fight",

    type: Phaser.AUTO,

    scale: {
        width: 1024,
        height: 640,
    },

    input: {
        gamepad: true,
        keyboard: true,
    },

    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 0,
            },
            debug: false,
        },
    },

    dom: {
        createContainer: true,
    },

    parent: "game",

    scene: Scenes,
};

export const game = new Phaser.Game(gameConfig);
