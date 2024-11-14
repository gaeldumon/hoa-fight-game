import { Player } from './player';
import { Character } from './character';
import { Level } from './level';

export class User {
    private _id: number;
    private _username: string;
    private _ratio: number;
    private _screenSide: string;
    private _characterInstance: Character;
    private _playerInstance: Player;
    private _levelInstance: Level;

    constructor(params: { id: number; username: string; ratio: number; screenSide: string }) {
        this._id = params.id;
        this._username = params.username;
        this._ratio = params.ratio;
        this._screenSide = params.screenSide;
    }

    public get id(): number {
        return this._id;
    }

    public get username(): string {
        return this._username;
    }

    public get ratio(): number {
        return this._ratio;
    }

    public get screenSide(): string {
        return this._screenSide;
    }

    public get characterInstance(): Character {
        return this._characterInstance;
    }

    public get playerInstance(): Player {
        return this._playerInstance;
    }

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

    public set ratio(v: number) {
        this._ratio = v;
    }
}
