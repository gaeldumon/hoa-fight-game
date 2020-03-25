/**
 * This class will hold the website-user data and will be linked to 
 * a player instance.
 * The game will be hosted inside a website, the only way to play it will be
 * to first register into the website so the game can update your score, and
 * therefore your rank, inside the general ranking system of the website.
 * It's a 1v1, two players are mandatory to launch a game and play. 
 * To help distinguish players, one in-game HUD is created per player 
 * (or per user if you prefer). The HUD displays information like username,
 * avatar and ranking of the user. 
 * So we can distinguish 2 entities that will be linked together: 
 * the player (the actual sprite you see on screen) and the website-user.
 * The website user uses an instance of a player.
 * Player <=================> User
 * 	|=> health, 				|=> avatar,
 * 	|=> controls, 				|=> username,
 * 	|=> skin,					|=> rank
 * 	|=> win/lose(score)
 */

import { Player } from "./player";

 export class WebsiteUser {
	 
	private id: number;
	private avatar: string;
	private username: string;
	private rank: number;
	private score: number;
	private ratio: number;
	private playerInstance: Player;

	constructor(params) {
		this.id = params.id;
		this.avatar = params.avatar;
		this.username = params.username;
		this.rank = params.rank;
		this.score = params.score;
		this.ratio = params.ratio;
		this.playerInstance = params.playerInstance;
	}

 }