import { gameWidth, gameHeight, COLORS, DEFAULT_FONT_FAMILIES } from '../helpers';
import { getLocalStorage, setLocalStorage, getUserRatio } from '../storage';

import { StoreGame } from '../types/store';
import { MenuPicker } from '../types/picker';
import { MenuTitleStyle } from '../types/style';

import { User } from '../objects/user';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Gameover',
};

export class GameoverScene extends Phaser.Scene {
    private games: StoreGame[];
    private characterPickerUser1: MenuPicker;
    private characterPickerUser2: MenuPicker;
    private titleStyle: MenuTitleStyle;
    private user1: User;
    private user2: User;
    private winner: User;

    constructor() {
        super(sceneConfig);
    }

    init(gameSceneData: { winner: User; user1: User; user2: User; currentGame: StoreGame }) {
        this.user1 = gameSceneData.user1;
        this.user2 = gameSceneData.user2;
        this.winner = gameSceneData.winner;

        // ******************************************************
        // ****** IMPORTANT - SETTING UP STORE DATA *************
        // ******************************************************
        // T-1 games
        const { games } = getLocalStorage();
        // Pushing the new game (not yet saved)
        games.push(gameSceneData.currentGame);
        // Saving the new game in the local storage
        setLocalStorage(games);
        // Saving the games in the scene (T-1 ones and new one)
        this.games = games;
        // ******************************************************

        this.characterPickerUser1 = {
            window: { x: 290, y: gameHeight(this) / 2 - 90 },
            title: { x: 290, y: gameHeight(this) / 2 - 184 },
            thumbnail: { x: 290, y: gameHeight(this) / 2 - 36 },
            button: { x: 290, y: gameHeight(this) / 2 + 86 },
        };

        this.characterPickerUser2 = {
            window: { x: gameWidth(this) - 290, y: gameHeight(this) / 2 - 90 },
            title: { x: gameWidth(this) - 290, y: gameHeight(this) / 2 - 184 },
            thumbnail: { x: gameWidth(this) - 290, y: gameHeight(this) / 2 - 36 },
            button: { x: gameWidth(this) - 290, y: gameHeight(this) / 2 + 86 },
        };

        this.titleStyle = {
            fontSize: '22px',
            fontFamily: DEFAULT_FONT_FAMILIES,
            align: 'center',
            color: COLORS.white.string,
        };
    }

    create() {
        this.cameras.main.fadeIn();

        this.add.image(gameWidth(this) / 2, gameHeight(this) / 2, 'backgroundMenu');
        this.add.image(gameWidth(this) / 2, 52, 'borderTop');
        this.add.image(gameWidth(this) / 2, gameHeight(this) - 52, 'borderBottom');

        // ******************************************************
        // ***************** FOR PLAYER/USER 1 ******************
        // ******************************************************

        this.add.image(this.characterPickerUser1.window.x, this.characterPickerUser1.window.y, 'windowBlank').setScale(0.7, 0.7);

        // Character of player 1 thumbnail
        const charThumbPlayer1 = this.add
            .image(this.characterPickerUser1.thumbnail.x, this.characterPickerUser1.thumbnail.y, this.user1.characterInstance.thumbnailKey)
            .setScale(0.8, 0.8);

        this.make
            .text({
                x: this.characterPickerUser1.title.x,
                y: this.characterPickerUser1.title.y,
                text: 'PLAYER 1',
                style: this.titleStyle,
            })
            .setOrigin(0.5, 0.5);

        this.add.image(this.characterPickerUser1.button.x, this.characterPickerUser1.button.y, 'tabWood');

        this.make
            .text({
                x: this.characterPickerUser1.button.x,
                y: this.characterPickerUser1.button.y,
                text: 'Ratio ' + getUserRatio('user1') + '%',
                style: {
                    fontSize: '22px',
                    fontFamily: DEFAULT_FONT_FAMILIES,
                    align: 'center',
                    color: COLORS.white.string,
                },
            })
            .setOrigin(0.5, 0.5);

        // ******************************************************
        // ***************** FOR PLAYER/USER 2 ******************
        // ******************************************************

        this.add.image(this.characterPickerUser2.window.x, this.characterPickerUser2.window.y, 'windowBlank').setScale(0.7, 0.7);

        // Character of player 2 thumbnail
        const charThumbPlayer2 = this.add
            .image(this.characterPickerUser2.thumbnail.x, this.characterPickerUser2.thumbnail.y, this.user2.characterInstance.thumbnailKey)
            .setScale(0.8, 0.8);

        this.make
            .text({
                x: this.characterPickerUser2.title.x,
                y: this.characterPickerUser2.title.y,
                text: 'PLAYER 2',
                style: this.titleStyle,
            })
            .setOrigin(0.5, 0.5);

        this.add.image(this.characterPickerUser2.button.x, this.characterPickerUser2.button.y, 'tabWood');

        this.make
            .text({
                x: this.characterPickerUser2.button.x,
                y: this.characterPickerUser2.button.y,
                text: 'Ratio ' + getUserRatio('user2') + '%',
                style: {
                    fontSize: '22px',
                    fontFamily: DEFAULT_FONT_FAMILIES,
                    align: 'center',
                    color: COLORS.white.string,
                },
            })
            .setOrigin(0.5, 0.5);

        // ******************************************************
        // ***************** FOR WINNER *************************
        // ******************************************************

        this.add
            .image(
                this.winner.id === this.user1.id ? this.characterPickerUser1.window.x : this.characterPickerUser2.window.x,
                gameHeight(this) / 2 - 142,
                'goldMedal'
            )
            .setScale(0.27, 0.27);

        // *******************************************************
        // ************** REGAME BUTTON **************************
        // *******************************************************

        const nextSceneButton = this.add
            .image(gameWidth(this) / 2, gameHeight(this) - 120, 'textButtonWood')
            .setScale(0.8, 0.8)
            .setInteractive({ cursor: 'pointer' })
            .on('pointerover', () => {
                nextSceneButton.setTexture('textButtonWoodSelected');
            })
            .on('pointerout', () => {
                nextSceneButton.setTexture('textButtonWood');
            })
            .on('pointerdown', () => {
                this.sound.add('clickSound').play();
                this.cameras.main.fadeOut();
                this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                    this.scene.start('Menu');
                });
            });

        // The text on menu scene button
        this.make
            .text({
                x: gameWidth(this) / 2,
                y: gameHeight(this) - 120,
                text: 'MENU',
                style: {
                    fontSize: '28px',
                    fontFamily: DEFAULT_FONT_FAMILIES,
                    align: 'center',
                    color: COLORS.white.string,
                },
            })
            .setOrigin(0.5, 0.5);
    }
}
