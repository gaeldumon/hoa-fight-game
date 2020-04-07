export class Hud {

	private avatar: Phaser.GameObjects.Image;
	private username: Phaser.GameObjects.DOMElement;
	private rank: Phaser.GameObjects.DOMElement;

	constructor(params) {

		this.avatar = params.scene.add.image(
			params.x, 
			params.y, 
			params.textureKey
		);

		this.username = params.scene.add.dom(
			// Relative positioning with the avatar
			this.avatar.x + 10,
			this.avatar.y,
			'h5',
			`font-family: Grobold, Arial; font-size: 14px; color: #fff`,
			`${params.username} | `
		);

		this.rank = params.scene.add.dom(
			// Relative positioning with the username
			this.username.x + 50,
			this.username.y,
			'h5',
			`font-family: Grobold, Arial; font-size: 14px; color: #fff`,
			`Rang: ${params.rank}`
		);
	}
}