/**
 * This hud class will display the player's information in-game: its health,
 * its avatar and rank (from website personal account).
 * Each HUD will be linked to its corresponding player (1 HUD instance per player).
 */

import { WebsiteUser } from './websiteUser';

export class Hud {

	private htmlStruct: string;

	constructor(params: { 
		scene: Phaser.Scene;
		x: number; 
		y: number; 
		color: string; 
		websiteUser: WebsiteUser	
	}) {

		this.htmlStruct = `
			<ul>
				<li><img src="${params.websiteUser.avatar}"></li>
				<li>${params.websiteUser.username} | Rang: ${params.websiteUser.rank}</li>
				
				
			</ul>
			<style>
				ul {
					font-size: 12px;
					padding: 5px;
					color: white;
					font-weight: bold;
					font-family: arial;
					list-style-type: none;
					text-align: center;
				}
				li {
					display: inline-block;
					vertical-align: middle;
				}
			</style>`;

		// 2nd argument is where phaser will put the html in, it's the container. 
		// It's a div by default but I specify it anyway for clarity.
		params.scene.add.dom(params.x, params.y)
		.createFromHTML(this.htmlStruct, 'div');
	}
}