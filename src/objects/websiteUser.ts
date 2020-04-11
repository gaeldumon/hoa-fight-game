 export class WebsiteUser {
	 
	private id: number;
	private _score: number;
	private _avatar: string;
	private _username: string;
	private _rank: number;
	
	public get username(): string {
		return this._username;
	}
	
	public get rank(): number {
		return this._rank;
	}

	public get avatar(): string {
		return this._avatar;
	}

	public get score(): number {
		return this._score;
	}

	public updateScore(): number {
		this._score = this.score + 1;
		return this._score;
	}
	
	constructor(params: { avatar: string; username: string; rank: number; id: number; score: number; }) {
		this.id = params.id;
		this._username = params.username;
		this._rank = params.rank;
		this._score = params.score;
		this._avatar = params.avatar;
	}
 }