/** @format */

export class Tilemap {
    private map: Phaser.Tilemaps.Tilemap;
    private tileset: Phaser.Tilemaps.Tileset;
    private _mainLayer: Phaser.Tilemaps.StaticTilemapLayer;
    private subLayer: Phaser.Tilemaps.StaticTilemapLayer;

    /**
     * Getter for the layer that collides: 'collides' set to true in Tiled.
     */
    get mainLayer(): Phaser.Tilemaps.StaticTilemapLayer {
        return this._mainLayer;
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
    }
}
