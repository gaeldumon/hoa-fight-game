import { getGameWidth, getGameHeight, MENUSECTION } from '../helpers';

export class Gui {


	public static readonly mainBtnStyle = 
		`width: 150px; 
		height: 49px; 
		font-family: Grobold,Arial; 
		color: #000; 
		font-size:25px; 
		background-color: #d2d2d2; 
		border:none`
	;

	public static readonly secondaryBtnStyle = 
		`width: 100px; 
		height: 33px; 
		font-family: Grobold,Arial; 
		color: #000; 
		font-size: 17px; 
		background-color: #d2d2d2; 
		border:none`
	;


	public static mainBtn(params: {
		 scene: Phaser.Scene; 
		 text: string; 
		 stopSounds: boolean; 
		 scenePlugin: Phaser.Scenes.ScenePlugin; 
		 newSceneKey: string; 
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

			params.scenePlugin.start(params.newSceneKey);

		});
	}


	public static title(params: { scene: Phaser.Scene; text: string }): void {
		params.scene.add.dom(
			getGameWidth(params.scene)/2,
			24,
			'h3',
			'color:#fff; font-size: 40px; font-family: Grobold, Arial',
			params.text
		);
	}


	public static sectionTitle(params: { scene: Phaser.Scene; x: number; y: number; text: string; }): void {
		params.scene.add.dom(
			params.x,
			params.y,
			'h4',
			'color:#fff; font-size: 30px; font-family: Grobold, Arial',
			params.text
		);
	}


	public static customText(params: { scene: Phaser.Scene; x: number; y: number; text: string; }): void {
		params.scene.add.dom(
			params.x,
			params.y,
			'p',
			'color:#fff; font-size: 20px; font-family: Grobold, Arial',
			params.text
		);
	}

}