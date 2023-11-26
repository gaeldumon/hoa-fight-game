import { COLORS, DEFAULT_FONT_FAMILIES, gameWidth } from "../helpers";
import { User } from "./user";

export class Hud {
    constructor(scene: Phaser.Scene, user: User) {
        if (user.screenSide === "left") {
            scene.add.image(0, 0, user.characterInstance.thumbnailKey).setOrigin(0, 0).setScale(0.40);

            scene.make.text({
                x: 74,
                y: 15,
                text: `${user.characterInstance.details.nickname} | ${user.username} | Ratio ${user.ratio}%`,
                style: {
                    fontSize: "18px",
                    fontFamily: DEFAULT_FONT_FAMILIES,
                    color: COLORS.white.string,
                },
            });

        } else if (user.screenSide === "right") {
            scene.add.image(gameWidth(scene), 0, user.characterInstance.thumbnailKey).setOrigin(1, 0).setScale(0.40);

            scene.make.text({
                x: gameWidth(scene) - 78,
                y: 15,
                text: `${user.characterInstance.details.nickname} | ${user.username} | Ratio ${user.ratio}%`,
                style: {
                    fontSize: "18px",
                    fontFamily: DEFAULT_FONT_FAMILIES,
                    color: COLORS.white.string,
                },
            }).setOrigin(1, 0);
        }
    }
}
