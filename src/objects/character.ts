/**
 * This class represent a Game Character, not to be confused with the "Player".
 * A Player integrates a Character. A Character is just about holding data :
 * texture keys, metadata, voices etc. Nothing to be controlled with your
 * keyboard here.
 */
export class Character {

	// Very important field, tightly linked to the keys you provide in pack.json
	private readonly id: number;

	private details: object;
	private stats: object;

	// Fields built upon the Id provided at instanciation.
	private _textureKey: string;
	private _avatarKey: string;
	private _soundKey: string;


	public get textureKey(): string {
		return this._textureKey;
	}

	public get avatarKey(): string {
		return this._avatarKey;
	}

	public get soundKey(): string {
		return this._soundKey;
	}


	constructor(params: {
		id: number;
		details?: object;
		stats?: object;
	}) {

		this.id = params.id;
		this.details = params.details;
		this.stats = params.stats;

		this._textureKey = `character${this.id}`;
		this._avatarKey = `character${this.id}Avatar`;
		this._soundKey = `character${this.id}Sound`;
	}

}