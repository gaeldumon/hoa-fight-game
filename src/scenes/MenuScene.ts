import { gameWidth, gameHeight, DEFAULT_FONT_FAMILIES, COLORS } from '../helpers';
import { Character } from '../objects/character';
import { Level } from '../objects/level';
import { User } from '../objects/user';
import { MenuPicker } from './../types/picker';
import { MenuTitleStyle } from './../types/style';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Menu',
};

/**
 * This scene is where the two players choose the terrain/map they will play on,
 * and the characters they will play with.
 * It mainly uses methods from the Gui class.
 */
export class MenuScene extends Phaser.Scene {
    private levelThumb: Phaser.GameObjects.Image;
    private clickSound: Phaser.Sound.BaseSound;
    private mapPicker: MenuPicker;
    private characterPickerUser1: MenuPicker;
    private characterPickerUser2: MenuPicker;
    private titleStyle: MenuTitleStyle;

    constructor() {
        super(sceneConfig);
    }

    init(bootSceneData: { user1: User; user2: User; characters: Character[]; levels: Level[] }) {
        this.mapPicker = {
            window: { x: 180, y: gameHeight(this) / 2 - 90 },
            title: { x: 180, y: gameHeight(this) / 2 - 184 },
            thumbnail: { x: 180, y: gameHeight(this) / 2 - 36 },
            button: { x: 180, y: gameHeight(this) / 2 + 95 },
        };

        this.characterPickerUser1 = {
            window: { x: gameWidth(this) / 2, y: gameHeight(this) / 2 - 90 },
            title: { x: gameWidth(this) / 2, y: gameHeight(this) / 2 - 184 },
            thumbnail: { x: gameWidth(this) / 2, y: gameHeight(this) / 2 - 32 },
            button: { x: gameWidth(this) / 2, y: gameHeight(this) / 2 + 95 },
        };

        this.characterPickerUser2 = {
            window: { x: gameWidth(this) - 180, y: gameHeight(this) / 2 - 90 },
            title: { x: gameWidth(this) - 180, y: gameHeight(this) / 2 - 184 },
            thumbnail: { x: gameWidth(this) - 180, y: gameHeight(this) / 2 - 32 },
            button: { x: gameWidth(this) - 180, y: gameHeight(this) / 2 + 95 },
        };

        this.titleStyle = {
            fontSize: '22px',
            fontFamily: DEFAULT_FONT_FAMILIES,
            align: 'center',
            color: COLORS.white.string,
        };

        // Loading boot scene data into this scene data manager
        this.data.set('user1', bootSceneData.user1);
        this.data.set('user2', bootSceneData.user2);
        this.data.set('characters', bootSceneData.characters);
        this.data.set('levels', bootSceneData.levels);

        // Setting up users defaults
        this.data.get('user1').levelInstance = this.data.get('levels').at(0);
        this.data.get('user1').characterInstance = this.data.get('characters').at(0);

        this.data.get('user2').levelInstance = this.data.get('levels').at(0);
        this.data.get('user2').characterInstance = this.data.get('characters').at(0);

        this.clickSound = this.sound.add('clickSound');
    }

    create() {
        this.cameras.main.fadeIn();

        this.add.image(gameWidth(this) / 2, gameHeight(this) / 2, 'backgroundMenu');

        //********************************************************************//
        //************************** CHOOSE MAP ******************************//
        //********************************************************************//

        // Container for the map thumbnails
        this.add.image(this.mapPicker.window.x, this.mapPicker.window.y, 'windowBlank').setScale(0.7, 0.7);

        // Map thumbnail
        this.levelThumb = this.add
            .image(this.mapPicker.thumbnail.x, this.mapPicker.thumbnail.y, this.data.get('levels').at(0).thumbnailKey)
            .setScale(0.7, 0.7);

        // Text indication
        this.make
            .text({
                x: this.mapPicker.title.x,
                y: this.mapPicker.title.y,
                text: 'TERRAIN',
                style: this.titleStyle,
            })
            .setOrigin(0.5, 0.5);

        // Next map button
        const nexMapButton = this.add
            .image(this.mapPicker.button.x, this.mapPicker.button.y, 'tabWood')
            .setInteractive({
                cursor: 'pointer',
            })
            .on('pointerover', () => {
                nexMapButton.setTexture('tabWoodSelected');
            })
            .on('pointerout', () => {
                nexMapButton.setTexture('tabWood');
            })
            .on('pointerdown', () => {
                this.clickSound.play();
                this.data.get('levels').push(this.data.get('levels').shift());
                this.levelThumb.setTexture(this.data.get('levels').at(0).thumbnailKey);
                this.data.get('user1').levelInstance = this.data.get('levels').at(0);
                this.data.get('user2').levelInstance = this.data.get('levels').at(0);
            });

        // New map button text
        this.make
            .text({
                x: this.mapPicker.button.x,
                y: this.mapPicker.button.y,
                text: 'NEXT',
                style: {
                    fontSize: '22px',
                    fontFamily: DEFAULT_FONT_FAMILIES,
                    align: 'center',
                    color: COLORS.white.string,
                },
            })
            .setOrigin(0.5, 0.5);

        //********************************************************************//
        //************************ CHOOSE CHARACTER 1 ************************//
        //********************************************************************//

        // Container for the character thumbnails of player 1
        this.add.image(this.characterPickerUser1.window.x, this.characterPickerUser1.window.y, 'windowBlank').setScale(0.7, 0.7);

        // Character of player 1 thumbnail
        const charThumbPlayer1 = this.add
            .image(this.characterPickerUser1.thumbnail.x, this.characterPickerUser1.thumbnail.y, this.data.get('characters').at(0).thumbnailKey)
            .setScale(0.8, 0.8);

        this.make
            .text({
                x: this.characterPickerUser1.title.x,
                y: this.characterPickerUser1.title.y,
                text: 'PLAYER 1',
                style: this.titleStyle,
            })
            .setOrigin(0.5, 0.5);

        // Next character button for player 1
        const nextCharPlayer1 = this.add
            .image(this.characterPickerUser1.button.x, this.characterPickerUser1.button.y, 'tabWood')
            .setInteractive({
                cursor: 'pointer',
            })
            .on('pointerover', () => {
                nextCharPlayer1.setTexture('tabWoodSelected');
            })
            .on('pointerout', () => {
                nextCharPlayer1.setTexture('tabWood');
            })
            .on('pointerdown', () => {
                this.clickSound.play();
                this.data.get('characters').push(this.data.get('characters').shift());
                charThumbPlayer1.setTexture(this.data.get('characters')[0].thumbnailKey);
                this.data.get('user1').characterInstance = this.data.get('characters')[0];
            });

        // New character button text
        this.make
            .text({
                x: this.characterPickerUser1.button.x,
                y: this.characterPickerUser1.button.y,
                text: 'NEXT',
                style: {
                    fontSize: '22px',
                    fontFamily: DEFAULT_FONT_FAMILIES,
                    align: 'center',
                    color: COLORS.white.string,
                },
            })
            .setOrigin(0.5, 0.5);

        //********************************************************************//
        //************************ CHOOSE CHARACTER 2 ************************//
        //********************************************************************//

        // Container for the character thumbnails of player 2
        this.add.image(this.characterPickerUser2.window.x, this.characterPickerUser2.window.y, 'windowBlank').setScale(0.7, 0.7);

        // Character of player 2 thumbnail
        const charThumbPlayer2 = this.add
            .image(this.characterPickerUser2.thumbnail.x, this.characterPickerUser2.thumbnail.y, this.data.get('characters').at(0).thumbnailKey)
            .setScale(0.8, 0.8);

        this.make
            .text({
                x: this.characterPickerUser2.title.x,
                y: this.characterPickerUser2.title.y,
                text: 'PLAYER 2',
                style: this.titleStyle,
            })
            .setOrigin(0.5, 0.5);

        // Next character button for player 1
        const nextCharPlayer2 = this.add
            .image(this.characterPickerUser2.button.x, this.characterPickerUser2.button.y, 'tabWood')
            .setInteractive({
                cursor: 'pointer',
            })
            .on('pointerover', () => {
                nextCharPlayer2.setTexture('tabWoodSelected');
            })
            .on('pointerout', () => {
                nextCharPlayer2.setTexture('tabWood');
            })
            .on('pointerdown', () => {
                this.clickSound.play();
                this.data.get('characters').push(this.data.get('characters').shift());
                charThumbPlayer2.setTexture(this.data.get('characters')[0].thumbnailKey);
                this.data.get('user1').characterInstance = this.data.get('characters')[0];
            });

        // New character button text
        this.make
            .text({
                x: this.characterPickerUser2.button.x,
                y: this.characterPickerUser2.button.y,
                text: 'NEXT',
                style: {
                    fontSize: '22px',
                    fontFamily: DEFAULT_FONT_FAMILIES,
                    align: 'center',
                    color: COLORS.white.string,
                },
            })
            .setOrigin(0.5, 0.5);

        //********************************************************************//
        //**************************** DATA **********************************//
        //********************************************************************//

        // Set the MODIFIED users data from the boot scene to this actual scene.
        // At this stage and not earlier, because level and characters instances has been linked to
        // each users thanks to the slide buttons callbacks and the thumbnails.
        this.data.set('user1', this.data.get('user1'));
        this.data.set('user2', this.data.get('user2'));

        //********************************************************************//
        //************************** START GAME ******************************//
        //********************************************************************//

        const nextSceneButton = this.add
            .image(gameWidth(this) / 2, gameHeight(this) - 100, 'textButtonWood')
            .setInteractive({
                cursor: 'pointer',
            })
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
                    this.sound.stopAll();
                    this.scene.start('Game', this.data.getAll());
                });
            });

        // The text on main button
        this.make
            .text({
                x: gameWidth(this) / 2,
                y: gameHeight(this) - 100,
                text: 'START',
                style: {
                    fontSize: '32px',
                    fontFamily: DEFAULT_FONT_FAMILIES,
                    align: 'center',
                    color: COLORS.white.string,
                },
            })
            .setOrigin(0.5, 0.5);
    }
}
