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

const toStore = {
	mainUser: {
		id: 124,
		username: 'foofoo7',
		ratio: 75,
		sessionWins: 0
	},
	secondaryUser: {
		id: 124,
		username: 'foofoo7',
		ratio: 75,
		sessionWins: 0
	}
}
sessionStorage.clear();
sessionStorage.setItem('hoafight', JSON.stringify(toStore));

function getParsedStorage() {
	const hf = sessionStorage.getItem('hoafight');
	const parsed = JSON.parse(hf);
	// Using optionnal chaining
	if (parsed?.mainUser && parsed?.secondaryUser) {
		return parsed;
	} else {
		throw new Error("Missing hoa fight session storage");
	}
}

console.log(getParsedStorage());