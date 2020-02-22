export class GameMap {

	private grid:string[][];
	private tileWidth:number;
	private tileHeight:number;
	public tiles:Phaser.Physics.Arcade.Group;

	constructor(params) {
		
		this.grid = [
			'00000000000000000000000000000000'.split(''),
			'00000000000000000000000000000000'.split(''),
			'00000000000000000000000000000000'.split(''),
			'10000000000000000000000000000000'.split(''),
			'10000000000000000000000000000000'.split(''),
			'10000000000000000000000000000000'.split(''),
			'11111110000000000000000000000000'.split(''),
			'00000000000000000000000000000000'.split(''),
			'00000000000000000000000000000000'.split(''),
			'00000000000000000000000000000000'.split(''),
			'00000001111100000000110000111111'.split(''),
			'00000000000000000000000000000000'.split(''),
			'00000000000000000000000000000000'.split(''),
			'00011100000000000011000000000000'.split(''),
			'00000000000000000000000000000000'.split(''),
			'00000000111000000000000000000000'.split(''),
			'00000000000000000000000000111111'.split(''),
			'00000000000000000000000000000000'.split(''),
			'11110000000000011110000000000000'.split(''),
			'00000000000000000000000000000000'.split(''),
			'11111111111111111111111111111111'.split('')
		];
		
		this.tileWidth = 32;
		this.tileHeight = 32;
		this.tiles = params.scene.physics.add.staticGroup();

		for (let line = 0; line < this.grid.length; line++) {

			for (let col = 0; col < this.grid[line].length; col++) {

				if (this.grid[line][col] !== '0') {

					this.tiles.create(
						col * this.tileWidth + (this.tileWidth / 2), 
						line * this.tileHeight - (this.tileHeight / 2), 
						'ground'
					);

				}
			}
		}
	}
}