/** @format */

export class Animations {
    public static createCharactersAnims(params) {
        for (const user of params.users) {
            let tk = user.characterInstance.textureKey;

            params.scene.anims.create({
                key: `${tk}WALK`,
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: "walk-side-armed",
                    start: 1,
                    end: 4,
                    zeroPad: 2,
                }),
                frameRate: 10,
                repeat: -1,
            });

            params.scene.anims.create({
                key: `${tk}WALK_SHOOT`,
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: "walk-side-shoot",
                    start: 1,
                    end: 4,
                    zeroPad: 2,
                }),
                repeat: -1,
            });

            params.scene.anims.create({
                key: `${tk}IDLE`,
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: "idle-front-armed",
                    start: 1,
                    end: 4,
                    zeroPad: 2,
                }),
                frameRate: 10,
                repeat: -1,
            });

            params.scene.anims.create({
                key: `${tk}IDLE_SHOOT`,
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: "idle-front-shoot",
                    start: 1,
                    end: 1,
                    zeroPad: 2,
                }),
                repeat: -1,
            });

            params.scene.anims.create({
                key: `${tk}HIT`,
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: "hit",
                    start: 1,
                    end: 1,
                    zeroPad: 2,
                }),
                repeat: 1,
            });

            params.scene.anims.create({
                key: `${tk}DEAD`,
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: "dead",
                    start: 1,
                    end: 1,
                    zeroPad: 2,
                }),
                repeat: 1,
            });
        }
    }
}
