/** @format */

import { Tilemap } from "./Tilemap";
import { getGameWidth, getGameHeight } from "../helpers";

/**
 * A Level consists of : a background + a music theme + a tilemap + a name +
 * a thumbnail.
 * It inits the different keys needed and creates/draw the background,
 * the tilemap (by instanciate it) and play the music theme.
 */
export class Level {
    private scene: Phaser.Scene;
    private readonly id: number;
    private _tilemap: Tilemap;
    private _name: string;
    private _thumbnailKey: string;
    private backgroundKey: string;
    private musicKey: string;

    public get tilemap(): Tilemap {
        return this._tilemap;
    }

    public get name(): string {
        return this._name;
    }

    public get thumbnailKey(): string {
        return this._thumbnailKey;
    }

    constructor(params: { id: number; name: string }) {
        this.id = params.id;
        this._name = params.name;
        this.backgroundKey = `level${this.id}Background`;
        this.musicKey = `level${this.id}Theme`;
        this._thumbnailKey = `level${this.id}Thumbnail`;
    }

    create(scene): void {
        this.scene = scene;

        this.scene.add.image(
            getGameWidth(this.scene) / 2,
            getGameHeight(this.scene) / 2,
            this.backgroundKey
        );

        this._tilemap = new Tilemap({
            scene: this.scene,
            id: this.id,
        });

        this.scene.sound.add(this.musicKey).play();
    }
}
