/** @format */

import { getGameWidth, getGameHeight } from "../helpers";
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
	
	private displayReport() {
		let usernameX = (getGameWidth(this)/2) - 200;
		let usernameY = 280;
		let badgeX = 88;

		this.data.get("users").forEach(user => {
			Gui.customText({
				scene: this,
				x: usernameX,
				y: usernameY,
				text: user.username + " :",
			});
	
			user.games.forEach(game => {
				this.add.image(
					usernameX + badgeX,
					usernameY,
					(game.win === true) ? "star" : "tombstone"
				);
				badgeX += 40;
			});

			usernameY += 56;
			badgeX = 88;
		});
	}

    init(gameSceneData) {
		this.data.set("users", gameSceneData.users);

        if (gameSceneData.winner) {
            this.data.set("winner", gameSceneData.winner);
			this.mainMessage = `${this.data.get("winner").username} WON !`;

			if (this.data.get("winner").id === this.data.get("users")[0].id) {

				this.data.get("users")[0].games.push({ win: true });
				this.data.get("users")[1].games.push({ win: false });

			} else if (this.data.get("winner").id === this.data.get("users")[1].id) {

				this.data.get("users")[0].games.push({ win: false });
				this.data.get("users")[1].games.push({ win: true });

			}

		} else {
            this.mainMessage = "IT'S A DRAW !";
		}
		
		// DEBUG
		console.log("users games = ", this.data.get("users").games);
		// *****
    }

    create() {
        this.add.image(
            getGameWidth(this) / 2,
            getGameHeight(this) / 2,
            "backgroundForGUIScenes"
        );

        Gui.title({ scene: this, text: "END OF GAME" });

        Gui.customText({
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
