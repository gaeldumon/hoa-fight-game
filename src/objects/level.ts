import { getGameWidth, getGameHeight } from '../helpers';

export class Level {

	private background: Phaser.GameObjects.Image;
	private map: Phaser.Tilemaps.Tilemap;
	private tileset: Phaser.Tilemaps.Tileset;
	// mainLayer is the layer that collides with its environment: players etc.
	private mainLayer: Phaser.Tilemaps.StaticTilemapLayer;
	// subLayer is the "decorative" layer, cosmetic only
	private subLayer: Phaser.Tilemaps.StaticTilemapLayer

	/**
	 * Getter for the layer that collides: collides set to true in Tiled.
	 */
	getMainLayer(): Phaser.Tilemaps.StaticTilemapLayer {
		return this.mainLayer;
	}

	constructor(params: { scene: any; id: string; }) {

		this.background = params.scene.add.image(
			getGameWidth(params.scene)/2, 
			getGameHeight(params.scene)/2, 
			`background${params.id}`
		);

		this.map = params.scene.make.tilemap({ 
			key: `level${params.id}` 
		});

		this.tileset = this.map.addTilesetImage(
			`tilesheet${params.id}-32x32`, 
			`tilesheet${params.id}`
		);

		this.mainLayer = this.map.createStaticLayer(
			'mainLayer', 
			this.tileset, 0, 0
		);

		this.mainLayer.setCollisionByProperty({ 
			collides: true 
		});

		this.subLayer = this.map.createStaticLayer(
			'subLayer', 
			this.tileset, 0, 0
		);
	}
}