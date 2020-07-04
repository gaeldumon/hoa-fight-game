import { getGameWidth } from '../helpers';
import { User } from './user';

export class Hud {

	private avatar: Phaser.GameObjects.Image;
	private text: Phaser.GameObjects.DOMElement;
	private textStyle: string;

	constructor(params: { 
		scene: Phaser.Scene; 
		user: User;
	}) {

		this.textStyle = `
			font-family: Grobold, Arial; 
			margin: 0; 
			font-size: 18px; 
			color: #fff;
			padding: 10px
		`;

		if (params.user.screenSide === -1) {

			this.avatar = params.scene.add.image(
				0, 
				35, 
				params.user.characterInstance.thumbnailKey
			).setOrigin(0,0);
			
			this.text = params.scene.add.dom(
				0,
				0,
				'h5',
				this.textStyle,
				`${params.user.username} | Rang ${params.user.rank}`
			).setOrigin(0,0);

		} else if (params.user.screenSide === 1) {

			this.avatar = params.scene.add.image(
				getGameWidth(params.scene), 
				35, 
				params.user.characterInstance.thumbnailKey
			).setOrigin(1,0);
			
			this.text = params.scene.add.dom(
				getGameWidth(params.scene),
				0,
				'h5',
				this.textStyle,
				`${params.user.username} | Rang ${params.user.rank}`
			).setOrigin(1,0);

		}

	}

}