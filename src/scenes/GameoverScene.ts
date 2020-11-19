/** @format */

import { getGameWidth, getGameHeight, COLORS } from "../helpers";
import { Gui } from "../objects/Gui";
import { Storage } from "../Storage";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Gameover",
};

export class GameoverScene extends Phaser.Scene {
    private mainMessage: string;

    constructor() {
        super(sceneConfig);
	}
	
	private displayReport():void {
		let usernameX = (getGameWidth(this)/2) - 200;
		let usernameY = 280;
		let badgeX = 100;
		const badgeSpacing = 40;
		const badgeLimit =  getGameWidth(this) - 80;
		const interline = 56;

		function resetBadgeX() {
			badgeX = 100;
		}

		this.data.get("users").forEach(user => {
			Gui.simpleParagraph({
				scene: this,
				x: usernameX,
				y: usernameY,
				text: user.username
			});
	
			user.games.forEach(game => {
				if (badgeX < badgeLimit){
					this.add.image(
						usernameX + badgeX,
						usernameY,
						(game.win === true) ? "star" : "tombstone"
					);
					badgeX += badgeSpacing;
				}
			});

			usernameY += interline;
			resetBadgeX();
		});
	}

	private setRatios():void {
		this.data.get("users").forEach(user => {
			let wonGames = user.games.filter(game => game.win === true).length;
			let totalGames = user.games.length;
			user.ratio = Math.floor((wonGames / totalGames) * 100);
		});
	}

	private logGame(): void {
		if (this.data.get("winner").id === this.data.get("users")[0].id) {
			this.data.get("users")[0].games.push({ win: true });
			this.data.get("users")[1].games.push({ win: false });
		} else if (this.data.get("winner").id === this.data.get("users")[1].id) {
			this.data.get("users")[0].games.push({ win: false });
			this.data.get("users")[1].games.push({ win: true });
		}
	}

    init(gameSceneData) {
		this.data.set("users", gameSceneData.users);

        if (gameSceneData.winner) {

			this.data.set("winner", gameSceneData.winner);
			this.mainMessage = `${this.data.get("winner").username} WON THIS GAME !`;
			this.logGame();
			this.setRatios();

		} else {
            this.mainMessage = "IT'S A DRAW !";
		}

    }

    create() {
        this.add.image(
            getGameWidth(this) / 2,
            getGameHeight(this) / 2,
            "backgroundForGUIScenes"
        );

        Gui.title({ scene: this, text: "END OF GAME" });

        Gui.simpleParagraph({
            scene: this,
            x: getGameWidth(this)/2,
            y: 200,
            text: this.mainMessage,
		});
		
		this.displayReport();

        Gui.mainBtn({
            scene: this,
            text: "PLAY AGAIN",
            stopSounds: false,
            scenePlugin: this.scene,
            newSceneKey: "Menu",
        });
    }
}
