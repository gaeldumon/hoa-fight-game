import { getGameWidth, getGameHeight } from '../helpers';

export class Level {

	private background: Phaser.GameObjects.Image;
	private map: Phaser.Tilemaps.Tilemap;
	private tileset: Phaser.Tilemaps.Tileset;
	public layer: Phaser.Tilemaps.StaticTilemapLayer;

	constructor(params: { scene: any; id: string; }) {

		this.background = params.scene.add.image(
			getGameWidth(params.scene)/2, 
			getGameHeight(params.scene)/2, 
			`background${params.id}`
		);

		this.map = params.scene.make.tilemap({
			key: `level${params.id}`,
			tileWidth: 32, 
			tileHeight: 32
		});

		this.tileset = this.map.addTilesetImage(`tilesheet${params.id}`);
		this.layer = this.map.createStaticLayer(0, this.tileset, 0, 0);
		this.layer.setCollisionBetween(0, 15);
	}
}