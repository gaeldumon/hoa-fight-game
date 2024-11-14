import { User } from './objects/user';

export class Animations {
    public static createCharacterAnim(scene: Phaser.Scene, user: User) {
        let tk = user.characterInstance.textureKey;

        scene.anims.create({
            key: `${tk}WALK`,
            frames: scene.anims.generateFrameNames(tk, {
                prefix: 'walk-side-armed',
                start: 1,
                end: 4,
                zeroPad: 2,
            }),
            frameRate: 10,
            repeat: -1,
        });

        scene.anims.create({
            key: `${tk}WALK_SHOOT`,
            frames: scene.anims.generateFrameNames(tk, {
                prefix: 'walk-side-shoot',
                start: 1,
                end: 4,
                zeroPad: 2,
            }),
            repeat: -1,
        });

        scene.anims.create({
            key: `${tk}IDLE`,
            frames: scene.anims.generateFrameNames(tk, {
                prefix: 'idle-front-armed',
                start: 1,
                end: 4,
                zeroPad: 2,
            }),
            frameRate: 10,
            repeat: -1,
        });

        scene.anims.create({
            key: `${tk}IDLE_SHOOT`,
            frames: scene.anims.generateFrameNames(tk, {
                prefix: 'idle-front-shoot',
                start: 1,
                end: 1,
                zeroPad: 2,
            }),
            repeat: -1,
        });

        scene.anims.create({
            key: `${tk}HIT`,
            frames: scene.anims.generateFrameNames(tk, {
                prefix: 'hit',
                start: 1,
                end: 1,
                zeroPad: 2,
            }),
            repeat: 1,
        });

        scene.anims.create({
            key: `${tk}DEAD`,
            frames: scene.anims.generateFrameNames(tk, {
                prefix: 'dead',
                start: 1,
                end: 1,
                zeroPad: 2,
            }),
            repeat: 1,
        });
    }
}
