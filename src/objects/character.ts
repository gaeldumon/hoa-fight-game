/**
 * This class represent a Game Character, not to be confused with the "Player".
 * A Player integrates a Character. A Character is just about holding data :
 * texture keys, metadata, voices etc. Nothing to be controlled with your
 * keyboard here.
 *
 * @format
 */

export class Character {
    // Very important field, tightly linked to the keys you provide in pack.json
    private readonly id: number;
    private _details: object;
    private stats: object;
    // Fields built upon the Id provided at instanciation.
    private _textureKey: string;
    // Character's avatar
    private _thumbnailKey: string;
    private _soundKey: string;

    public get textureKey(): string {
        return this._textureKey;
    }

    public get thumbnailKey(): string {
        return this._thumbnailKey;
    }

    public get soundKey(): string {
        return this._soundKey;
	}
	
	public get details(): any {
		return this._details;
	}

    constructor(params: { id: number; details?: {nickname: string}; stats?: object }) {
        this.id = params.id;
        this._details = params.details;
        this.stats = params.stats;
        this._textureKey = `character${this.id}`;
        this._thumbnailKey = `character${this.id}Avatar`;
        this._soundKey = `character${this.id}Sound`;
    }
}
