/**
 * This class will hold the website-user data and will be linked to 
 * a player instance and piped to a HUD.
 * 
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
	private playerInstance: Player;

	public getId(): number {
		return this.id;
	}

	public getAvatar(): string {
		return this.avatar;
	}

	public getUsername(): string {
		return this.username;
	}

	public getRank(): number {
		return this.rank;
	}

	public getPlayerInstance(): Player {
		return this.playerInstance;
	}

	constructor(params: { id: number; avatar: string; username: string; rank: number; score: number; ratio: number; playerInstance: Player; }) {
		this.id = params.id;
		this.avatar = params.avatar;
		this.username = params.username;
		this.rank = params.rank;
		this.playerInstance = params.playerInstance;
	}

 }