/**
 * This hud class will display the player's information in-game: its health,
 * its avatar and rank (from website personal account).
 * Each HUD will be linked to its corresponding player (1 HUD instance per player).
 */
export class Hud {

	private htmlStruct: string;

	constructor(params) {

		this.htmlStruct = `
			<ul>
				<li>${params.websiteUser.username}</li>
				<li>
					<img src="${params.websiteUser.avatar}">
				</li>
				<li>Rang: ${params.websiteUser.rank}</li>
			</ul>
			<style>
				ul {
					width: 90px;
					padding: 10px;
					border: 4px solid ${params.color};
					color: white;
					font-weight: bold;
					font-family: arial;
					list-style-type: none;
					text-align: center;
				}

				img {
					opacity: .5;
				}
			</style>
		`;

		// 2nd argument is where phaser will put the html in, it's the container. 
		// It's a div by default but I specify it anyway for clarity.
		params.scene.add.dom(params.x, params.y)
						.createFromHTML(this.htmlStruct, 'div');
	}
}