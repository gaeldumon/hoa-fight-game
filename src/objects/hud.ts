/**
 * This hud class will display the player's information in-game: its health,
 * its avatar and rank (from website personal account).
 * Each HUD will be linked to its corresponding player (1 HUD instance per player).
 */
export class Hud {

	private opacity: number;
	private textSize: number;
	private textColor: string;
	private htmlStruct: string;

	constructor(params) {

		this.htmlStruct = `
			<ul>
				<li>${params.player.username}</li>
				<li>
					<img src="${params.player.avatar}">
				</li>
				<li>${params.player.rank}</li>
			</ul>
			<p>${params.player.health}</p>
		`;

		params.scene.add.dom().createFromHTML(this.htmlStruct, 'div');

	}
}