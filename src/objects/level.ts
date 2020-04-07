import { getGameWidth, getGameHeight } from '../helpers';

export class Level {

	private background: Phaser.GameObjects.Image;
	private map: Phaser.Tilemaps.Tilemap;
	private tileset: Phaser.Tilemaps.Tileset;
	// _mainLayer is the layer that collides with its environment: players etc.
	private _mainLayer: Phaser.Tilemaps.StaticTilemapLayer;
	// subLayer is the "decorative" layer, cosmetic only
	private subLayer: Phaser.Tilemaps.StaticTilemapLayer

	/**
	 * Getter for the layer that collides: collides set to true in Tiled.
	 */
	get mainLayer(): Phaser.Tilemaps.StaticTilemapLayer {
		return this._mainLayer;
	}

	constructor(params: { scene: any; id: string; }) {

		this.background = params.scene.add.image(
			getGameWidth(params.scene)/2, 
			getGameHeight(params.scene)/2, 
			`level${params.id}Background`
		);

		this.map = params.scene.make.tilemap({ 
			key: `level${params.id}` 
		});

		this.tileset = this.map.addTilesetImage(
			`level${params.id}Tilesheet`, 
			`level${params.id}Tilesheet`
		);

		this._mainLayer = this.map.createStaticLayer(
			'mainLayer', 
			this.tileset, 0, 0
		);

		this._mainLayer.setCollisionByProperty({ 
			collides: true 
		});

		this.subLayer = this.map.createStaticLayer(
			'subLayer', 
			this.tileset, 0, 0
		);
		
		// Purpose of adding the tilemap to the scene?
		params.scene.add.existing(this);
	}
}