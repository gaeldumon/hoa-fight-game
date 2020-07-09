import { Player } from "./player";
import { Character } from "./character";
import { Level } from "./level";
import { Gui } from "../objects/gui";


export class User {


	private _id: string;
	private _username: string;
	private _ratio: string;
	private _rank: string;
	private _avatar: string;
	private _isGuest: boolean;
	private _screenSide: string;
	private _characterInstance: Character;
	private _playerInstance: Player;
	private _levelInstance: Level;

	
	/**
	 * User's id from DB.
	 */
	public get id(): string {
		return this._id;
	}
	
	/**
	 * User's username from DB.
	 */
	public get username(): string {
		return this._username;
	}

	/**
	 * User's ratio from DB.
	 */
	public get ratio(): string {
		return this._ratio;
	}
	
	/**
	 * User's rank from DB.
	 */
	public get rank(): string {
		return this._rank;
	}

	/**
	 * User's avatar filepath from DB.
	 */
	public get avatar(): string {
		return this._avatar;
	}

	/**
	 * Whether this user is a guest (created specificaly for the game) 
	 * or not (the user connected to the website, already exists in DB).
	 */
	public get isGuest(): boolean {
		return this._isGuest;
	}

	public get screenSide(): string {
		return this._screenSide;
	}

	/**
	 * Character the user has chosen in the Menu.
	 */
	public get characterInstance(): Character {
		return this._characterInstance;
	}

	/**
	 * Player created in Game Scene based on User's character choice.
	 */
	public get playerInstance(): Player {
		return this._playerInstance;
	}

	/**
	 * Level the user has chosen in the Menu, makes more sense when playing solo.
	 */
	public get levelInstance(): Level {
		return this._levelInstance;
	}

	public set characterInstance(v: Character) {
		this._characterInstance = v;
	}

	public set playerInstance(v: Player) {
		this._playerInstance = v;
	}

	public set levelInstance(v: Level) {
		this._levelInstance = v;
	}

	public set isGuest(v: boolean) {
		this._isGuest = v;
	}
	

	constructor(params: { 
		id: string; 
		username: string; 
		ratio: string;
		rank: string; 
		avatar: string;
		isGuest: boolean;
		screenSide: string;
	}) {

		this._id = params.id;
		this._username = params.username;
		this._ratio = params.ratio;
		this._rank = params.rank;
		this._avatar = params.avatar;
		this._isGuest = params.isGuest;
		this._screenSide = params.screenSide;

	}

}