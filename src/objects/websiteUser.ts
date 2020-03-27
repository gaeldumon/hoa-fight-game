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

 export class WebsiteUser {
	
	private _avatar: string;
	private _username: string;
	private _rank: number;

	get avatar(): string {
		return this._avatar;
	}

	get username(): string {
		return this._username;
	}

	get rank(): number {
		return this._rank;
	}
	
	constructor(params: { avatar: string; username: string; rank: number; }) {
		this._avatar = params.avatar;
		this._username = params.username;
		this._rank = params.rank;
	}

 }