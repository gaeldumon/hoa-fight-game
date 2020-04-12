import { getGameWidth, getGameHeight } from '../helpers';

export class Gui {


	public static readonly mainBtnStyle = 
		`width: 150px; 
		height: 49px; 
		font-family: Grobold,Arial; 
		color: #000000; 
		font-size: 25px; 
		background-color: #d2d2d2; 
		border: none`
	;

	
	public static readonly secondaryBtnStyle = 
		`width: 100px; 
		height: 33px; 
		font-family: Grobold, Arial, sans-serif; 
		color: #000000; 
		font-size: 17px; 
		background-color: #d2d2d2; 
		border: none`
	;


	/**
	 * Create a stylized Button DOM Element with a click event listener attached
	 * to it. The event listener callback starts a new scene using the scene key
	 * passed in arguments and stops all sounds if stopSounds set to true.
	 */
	public static mainBtn(params: {
		 scene: Phaser.Scene; 
		 text: string; 
		 stopSounds: boolean; 
		 scenePlugin: Phaser.Scenes.ScenePlugin; 
		 newSceneKey: string;
		 sceneData?: object;
	}): void {

		params.scene.add.dom(

			getGameWidth(params.scene)/2,
			getGameHeight(params.scene)-50,
			'button',
			Gui.mainBtnStyle,
			params.text

		).addListener('click').on('click', () => {

			if (params.stopSounds) {
				params.scene.sound.stopAll();
			}

			params.scenePlugin.start(params.newSceneKey, params.sceneData);

		});
	}

	/**
	 * Controls an image that act as a container for other textures.
	 * On click it sets a new texture (from textures array) to this image.
	 * It mimics a slideshow. 
	 */
	public static slideBtn(params: { 
		scene: Phaser.Scene;
		x: number;
		y: number;
		text: string;
		img: Phaser.GameObjects.Image;
		textures: Array<string>;
	}): void {

		let i = 0;

		params.scene.add.dom(

			params.x,
			params.y,
			'button',
			Gui.secondaryBtnStyle,
			params.text

		).addListener('click').on('click', () => {

			(i < params.textures.length - 1) ? i++ : i = 0;
			params.img.setTexture(params.textures[i]);

		});

	}


	public static title(params: { 
		scene: Phaser.Scene; 
		text: string ;
	}): void {

		params.scene.add.dom(
			getGameWidth(params.scene)/2,
			24,
			'h3',
			`color: #ffffff; 
			font-size: 40px; 
			font-family: Grobold, Arial, sans-serif`,
			params.text
		);
	}


	public static sectionTitle(params: { 
		scene: Phaser.Scene; 
		x: number; 
		y: number; 
		text: string; 
	}): void {

		params.scene.add.dom(
			params.x,
			params.y,
			'h4',
			`color: #ffffff; 
			font-size: 30px; 
			font-family: Grobold, Arial, sans-serif`,
			params.text
		);
	}


	public static customText(params: { 
		scene: Phaser.Scene; 
		x: number; 
		y: number; 
		text: string; 
	}): void {

		params.scene.add.dom(
			params.x,
			params.y,
			'p',
			`color: #ffffff; 
			font-size: 20px; 
			text-align: center; 
			font-family: Grobold, Arial, sans-serif`,
			params.text
		);
	}


}