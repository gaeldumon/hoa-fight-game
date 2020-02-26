export class GameMap {

	private grid:string[];
	private tileWidth:number;
	private tileHeight:number;
	public tiles:Phaser.Physics.Arcade.Group;

	loadStrings(file:string) {
		let rawFile = new XMLHttpRequest();
		let result;

		rawFile.onerror = function() {
			console.log("Impossible de charger le niveau");
		}

		rawFile.onreadystatechange = function() {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					result = rawFile.responseText;
				}
			}
		}

		rawFile.open("GET", file, false);
		rawFile.send(null);

		return result;
	}

	constructor(params) {

		console.log(this.loadStrings('assets/levels/level1.txt'));

		this.grid = [
			'10000000000000000000000000000000',
			'10000000000000000000000000000000',
			'10000000000000000000000000000000',
			'10000000000000000000000000000000',
			'00000000000000000000000000000000',
			'00000000000000000000000000000000',
			'11111110000000000000000000000000',
			'00000000000000000000000000000000',
			'00000000000000000000000000000000',
			'00000000000000000000000000000000',
			'00000001111100000000001111100000',
			'00000000000000000000000000000000',
			'00000000000000001100000000000000',
			'00000000000000000000000000000000',
			'00000000000000000000000000000000',
			'01110000000000000000000000000011',
			'00000000000001100000000000111111',
			'00000000000011110000000000000000',
			'11000000000111111000000000000000',
			'11110000001111111100000000000000',
			'11111111111111111111111111111111'
		];
		
		this.tileWidth = 32;
		this.tileHeight = 32;
		this.tiles = params.scene.physics.add.staticGroup();

		for (let line = 0; line < this.grid.length; line++) {

			this.grid[line].split('');

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