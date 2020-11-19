/** @format */

import { getGameHeight } from "../helpers";
import { Trampoline } from "./Trampoline";

export class Tilemap {
    private map: Phaser.Tilemaps.Tilemap;
    private tileset: Phaser.Tilemaps.Tileset;
    private _mainLayer: Phaser.Tilemaps.StaticTilemapLayer;
	private subLayer: Phaser.Tilemaps.StaticTilemapLayer;
	private _trampoline: Trampoline;

    /**
     * Getter for the layer that collides: 'collides' set to true in Tiled.
     */
    get mainLayer(): Phaser.Tilemaps.StaticTilemapLayer {
        return this._mainLayer;
	}

	get trampoline(): Trampoline {
        return this._trampoline;
	}

    constructor(params: { scene: Phaser.Scene; id: number }) {

        this.map = params.scene.make.tilemap({
            key: `level${params.id}`,
        });

        this.tileset = this.map.addTilesetImage(
            `level${params.id}-tilesheet`,
            `level${params.id}Tilesheet`
		);
		
        this._mainLayer = this.map.createStaticLayer(
            "mainLayer",
            this.tileset,
            0,
            0
        );

        this._mainLayer.setCollisionByProperty({
            collides: true,
        });

        this.subLayer = this.map.createStaticLayer(
            "subLayer",
            this.tileset,
            0,
            0
		);

		this._trampoline = new Trampoline({
			scene: params.scene, 
			x: 400, 
			y: getGameHeight(params.scene) - this.tileset.tileHeight * 2.5
		});
    }
}
