import * as Phaser from 'phaser';

/**
 * Return the width of the current scene.
 * Which is generally equal to the width of the "screen"/canvas but not always.
 * @param scene
 */
export const getGameWidth = (scene: Phaser.Scene) => {
	return scene.game.scale.width;
};

/**
 * Return the height of the current scene.
 * Which is generally equal to the height of the "screen"/canvas but not always.
 * @param scene
 */
export const getGameHeight = (scene: Phaser.Scene) => {
	return scene.game.scale.height;
};

/**
 * Load a file in ajax and return its response text.
 * @param pFilePath 
 */
export const loadFile = (pFilePath: string): string => {
	let rawFile = new XMLHttpRequest();
	let result: string;

	rawFile.onerror = function() {
		console.log("Impossible to load file.");
	}

	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status === 0) {
				result = rawFile.responseText;
			}
		}
	}

	rawFile.open("GET", pFilePath, false);
	rawFile.send(null);

	return result;
}

/**
 * Returns a 2d-array of strings from a whole text file given as input.
 * Works best if the input text is only composed of single chars and '\n'.
 * Each final array element would be one character of the text input.
 * @param pFilePath 
 */
export const loadStrings = (pFilePath: string): string[][] => {
	let rawGrid = this.loadFile(pFilePath);
	return rawGrid.split('\n').map(item => item.split(''));
}

export const COLORS = {
	customBlue: { string: '#4346f9', hex: 0x4346f9 },
	customGreen: { string:  '#76ea64', hex: 0x76ea64 },
	vibrantGreen: { string: '#25f945', hex: 0x25f945 },
	customRed: { string: '#ea2d23', hex: 0xea2d23 },
	white: { string: '#ffffff', hex: 0xffffff }
}

export const LEVEL_MIN = 1;
export const LEVEL_MAX = 1;
export const CHARACTER_MIN = 1;
export const CHARACTER_MAX = 6;