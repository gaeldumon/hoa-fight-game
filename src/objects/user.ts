/** @format */

import { Player } from "./Player";
import { Character } from "./Character";
import { Level } from "./Level";
import { Gui } from "./Gui";

export class User {
    private _id: number;
    private _username: string;
    private _ratio: number;
    private _avatar: string;
    private _screenSide: string;
    private _characterInstance: Character;
    private _playerInstance: Player;
    private _levelInstance: Level;

    /**
     * User's id from DB.
     */
    public get id(): number {
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
    public get ratio(): number {
        return this._ratio;
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

    constructor(params: {
        id: number;
        username: string;
        ratio: number;
        screenSide: string;
    }) {
        this._id = params.id;
        this._username = params.username;
        this._ratio = params.ratio;
        this._screenSide = params.screenSide;
    }
}
