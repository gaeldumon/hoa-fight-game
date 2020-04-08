import { getGameWidth, SIDE } from '../helpers';

export class Hud {

	private avatar: Phaser.GameObjects.Image;
	private text: Phaser.GameObjects.DOMElement;
	private avatarX: number;
	private avatarY: number;
	private textX: number;
	private textY: number;

	constructor(params: { 
		scene: Phaser.Scene; 
		side: SIDE;
		avatarTextureKey: string; 
		username: string; 
		rank: number;

	}) {

		if (params.side === SIDE.LEFT) {

			this.avatarX = 40;
			this.avatarY = 40;
			this.textX = this.avatarX + 120;
			this.textY = this.avatarY - 44;

		} else if (params.side === SIDE.RIGHT) {

			this.avatarX = getGameWidth(params.scene) - 40;
			this.avatarY = 40;
			this.textX = this.avatarX - 120;
			this.textY = this.avatarY - 44;

		}

		this.avatar = params.scene.add.image(
			this.avatarX, 
			this.avatarY, 
			params.avatarTextureKey
		);

		this.text = params.scene.add.dom(
			this.textX,
			this.textY,
			'h5',
			'font-family: Grobold, Arial; font-size: 18px; color: #fff',
			`${params.username} | Rang: ${params.rank}`
		);
	}
}