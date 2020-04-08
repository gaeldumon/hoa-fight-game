import { getGameWidth, SIDE } from '../helpers';

export class Hud {

	private avatar: Phaser.GameObjects.Image;
	private text: Phaser.GameObjects.DOMElement;
	private textStyle: string;

	constructor(params: { 
		scene: Phaser.Scene; 
		side: SIDE;
		avatarTextureKey: string; 
		username: string; 
		rank: number;
	}) {

		this.textStyle = `font-family: Grobold, Arial; 
		margin: 0; 
		font-size: 18px; 
		color: #fff;
		padding: 10px`;

		if (params.side === SIDE.LEFT) {

			this.avatar = params.scene.add.image(
				0, 
				35, 
				params.avatarTextureKey
			).setOrigin(0,0);
			
			this.text = params.scene.add.dom(
				0,
				0,
				'h5',
				this.textStyle,
				`${params.username} | Rang: ${params.rank}`
			).setOrigin(0,0);

		} else if (params.side === SIDE.RIGHT) {

			this.avatar = params.scene.add.image(
				getGameWidth(params.scene), 
				35, 
				params.avatarTextureKey
			).setOrigin(1,0);
			
			this.text = params.scene.add.dom(
				getGameWidth(params.scene),
				0,
				'h5',
				this.textStyle,
				`${params.username} | Rang: ${params.rank}`
			).setOrigin(1,0);

		}

	}

}