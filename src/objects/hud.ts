/**
 * This hud class will display the player's information in-game: its health,
 * its avatar and rank (from website personal account).
 * Each HUD will be linked to its corresponding player (1 HUD instance per player).
 */
export class Hud {

	private htmlStruct: string;

	constructor(params) {

		// I'm temporary including the health information here for now
		// but ultimately a health bar will be implemented in Player class.
		this.htmlStruct = `
			<ul>
				<li>${params.websiteUser.username}</li>
				<li>
					<img src="${params.websiteUser.avatar}">
				</li>
				<li>${params.websiteUser.rank}</li>
			</ul>
			<p>${params.player.health}</p>
		`;

		// 2nd argument is where phaser will put the html in, it's the container. 
		// It's a div by default but I specify it anyway for clarity.
		params.scene.add.dom().createFromHTML(this.htmlStruct, 'div');
	}
}