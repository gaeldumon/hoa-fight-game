import * as Phaser from 'phaser';
import Scenes from './scenes';

const gameConfig: Phaser.Types.Core.GameConfig = {

	title: 'Hoa Fight',

	type: Phaser.AUTO,

	scale: {
		width: 1024,
		height: 640
	},

	input: {
		gamepad: true,
		keyboard: true
	},
	
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {
				y: 0
			},
			debug: false,
		},
	},

	dom: {
		createContainer: true
	},

	parent: 'game',
	
	scene: Scenes
};

export const game = new Phaser.Game(gameConfig);

//***************Mock up session storage set********************
// Coming from the website
const toStore = {
	mainUser: {
		id: 124,
		username: 'foofoo7',
		ratio: 75,
		rank: 14,
		sessionWins: 0
	},
	secondaryUser: {
		id: 0,
		username: 'SomeUser2',
		ratio: 0,
		rank: 0,
		sessionWins: 0
	}
};

sessionStorage.removeItem('hoafight');
sessionStorage.setItem('hoafight', JSON.stringify(toStore));
//**************************************************************