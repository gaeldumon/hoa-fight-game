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
import { Hud } from "./hud";

 export class WebsiteUser {
	private id: number;
	private score: number;
	private avatar: string;
	private _username: string;
	private _rank: number;
	private _characterChoice: string;
	private _playerInstance: Player;
	private _hudInstance: Hud;
	
	public get username(): string {
		return this._username;
	}
	
	public get rank(): number {
		return this._rank;
	}
	
	public get characterChoice(): string {
		return this._characterChoice;
	}
	
	public set characterChoice(v: string) {
		this._characterChoice = v;
	}

	public get playerInstance(): Player {
		return this._playerInstance;
	}

	public set playerInstance(v: Player) {
		this._playerInstance = v;
	}
	
	public get hudInstance(): Hud {
		return this._hudInstance;
	}
	
	public set hudInstance(v: Hud) {
		this._hudInstance = v;
	}
	
	constructor(params: { avatar: string; username: string; rank: number; id: number; score: number; }) {
		this.id = params.id;
		this._username = params.username;
		this._rank = params.rank;
		this.score = params.score;
		this.avatar = params.avatar;
	}
 }