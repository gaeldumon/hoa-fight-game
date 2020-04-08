 export class WebsiteUser {
	 
	private id: number;
	private score: number;
	private avatar: string;
	private _username: string;
	private _rank: number;
	
	public get username(): string {
		return this._username;
	}
	
	public get rank(): number {
		return this._rank;
	}
	
	constructor(params: { avatar: string; username: string; rank: number; id: number; score: number; }) {
		this.id = params.id;
		this._username = params.username;
		this._rank = params.rank;
		this.score = params.score;
		this.avatar = params.avatar;
	}
 }