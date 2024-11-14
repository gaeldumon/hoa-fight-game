import { CONTROL_P1, CONTROL_P2, gameWidth } from '../helpers';
import { Bomb } from '../objects/bomb';
import { Hud } from '../objects/hud';
import { Player } from '../objects/player';
import { HealthBar } from '../objects/healthBar';
import { Level } from '../objects/level';
import { User } from '../objects/user';
import { Animations } from '../Animations';
import { Character } from '../objects/character';
import { StoreGame } from '../types/store';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

/**
 * The Game Scene is where all the actions takes place.
 * Actors such as Player, Bombs and Bomb are instanciated.
 * Static elements such as HUDs and HealthBars (via Player) are instanciated.
 * Level is created (not instanciated), which basically means that Tilemap is
 * drawn. Colliders between actors are handled. Player animations are created.
 * It sets a Scene Winner when one of the users PLAYER INSTANCES is dead and
 * then start the new scene (Gameover Scene).
 * It takes the data object from the Menu Scene (composed of an array of users),
 * available here in the init() et create() callbacks.
 */
export class GameScene extends Phaser.Scene {
    private player1: Player;
    private player2: Player;
    private hud1: Hud;
    private hud2: Hud;
    private tilemap: Level['tilemap'];
    private bombs: Phaser.GameObjects.Group;
    private collectables: Phaser.Physics.Arcade.Group;
    private bombCreationEvent: Phaser.Time.TimerEvent;
    private newSceneTimedEvent: Phaser.Time.TimerEvent;
    private winner: User;
    private user1: User;
    private user2: User;
    private collectSound: Phaser.Sound.BaseSound;
    private currentGame: StoreGame;

    private setColliders(): void {
        this.physics.add.collider(this.bombs, this.tilemap.mainLayer);

        this.physics.add.collider(this.bombs, this.player1, (bomb) => {
            this.player1.hurt();
            bomb.destroy();
        });

        this.physics.add.collider(this.bombs, this.player2, (bomb) => {
            this.player2.hurt();
            bomb.destroy();
        });

        this.physics.add.collider(this.collectables, this.tilemap.mainLayer);

        this.physics.add.overlap([this.player1, this.player2], this.collectables, (player: Player, star) => {
            player.collectStuff();
            star.destroy();
            this.collectSound.play();
        });

        this.physics.add.collider(this.player1, this.player2);

        this.physics.add.collider([this.player1, this.player2], this.tilemap.mainLayer);

        this.physics.add.collider(this.player2.projectiles, this.player1, (projectile) => {
            this.player1.hurt();
            projectile.destroy();
        });

        this.physics.add.collider(this.player1.projectiles, this.player2, (projectile) => {
            this.player2.hurt();
            projectile.destroy();
        });

        this.physics.add.collider(this.player1.projectiles, this.tilemap.mainLayer, (projectile) => {
            projectile.destroy();
        });

        this.physics.add.collider(this.player2.projectiles, this.tilemap.mainLayer, (projectile) => {
            projectile.destroy();
        });
    }

    constructor() {
        super(sceneConfig);
    }

    init(menuSceneData: { user1: User; user2: User; characters: Character[]; levels: Level[] }) {
        this.user1 = menuSceneData.user1;
        this.user2 = menuSceneData.user2;

        Animations.createCharacterAnim(this, this.user1);
        Animations.createCharacterAnim(this, this.user2);

        this.currentGame = {
            winner: 'none',
            time: Date.now(),
            user1Collect: 0,
            user2Collect: 0,
        };
    }

    create() {
        this.user1.levelInstance.create(this);
        this.tilemap = this.user1.levelInstance.tilemap;

        this.collectSound = this.sound.add('collectSound');

        this.collectables = this.physics.add.group({
            key: 'diamondPurple',
            repeat: 11,
            bounceX: 0.4,
            bounceY: 0.4,
            allowGravity: true,
            gravityY: 300,
            setXY: {
                x: Math.floor(Math.random() * (150 - 15 + 1)) + 15,
                y: 0,
                stepX: 70,
            },
        });

        this.bombs = this.add.group({ runChildUpdate: true });

        this.bombCreationEvent = this.time.addEvent({
            delay: 5000,
            loop: true,
            callback: () => {
                this.bombs.add(
                    new Bomb({
                        scene: this,
                        x: Phaser.Math.Between(50, gameWidth(this) - 50),
                        y: 0,
                        textureKey: 'bomb',
                    })
                );
            },
            callbackScope: this,
        });

        this.player1 = new Player({
            scene: this,
            x: 300,
            y: 300,
            textureKey: this.user1.characterInstance.textureKey,
            controlKeys: CONTROL_P1,
            healthBar: new HealthBar({
                scene: this,
                side: 'left',
            }),
        });

        this.player2 = new Player({
            scene: this,
            x: 900,
            y: 300,
            textureKey: this.user2.characterInstance.textureKey,
            controlKeys: CONTROL_P2,
            healthBar: new HealthBar({
                scene: this,
                side: 'right',
            }),
        });

        this.hud1 = new Hud(this, this.user1);
        this.hud2 = new Hud(this, this.user2);

        this.setColliders();

        // This is where we have user<-->player concordance
        this.user1.playerInstance = this.player1;
        this.user2.playerInstance = this.player2;
    }

    update() {
        this.player1.update();
        this.player2.update();

        // Winner handling.
        // Enter winner handling mode if one of the player is dead.
        if (this.player1.isDead() || this.player2.isDead()) {
            // Make players invicible while waiting for the next scene to start.
            // This way we don't have to pause physics but the winner is not
            // killed by the bombs that are still falling.
            this.player1.makeBulletProof();
            this.player2.makeBulletProof();

            // Deciding which one is the winner (the one not dead).
            // Winners are users not players.
            if (this.player1.isDead() && !this.player2.isDead()) {
                this.winner = this.user2;
                this.currentGame.winner = 'user2';
            } else if (!this.player1.isDead() && this.player2.isDead()) {
                this.winner = this.user1;
                this.currentGame.winner = 'user1';
            } else if (this.player2.isDead() && this.player2.isDead()) {
                // Nulling the winner if there's no winner at all
                // Typically this shouldn't ever happen but who knows.
                // Check in next scene if winner is truthy, printing alt text
                // if not (like if null).
                this.winner = null;
                this.currentGame.winner = 'none';
            }

            this.currentGame.user1Collect = this.player1.collectedStuff;
            this.currentGame.user2Collect = this.player2.collectedStuff;

            this.data.set('winner', this.winner);
            this.data.set('user1', this.user1);
            this.data.set('user2', this.user2);
            this.data.set('currentGame', this.currentGame);

            // Three seconds delay before launching the next scene
            this.newSceneTimedEvent = this.time.addEvent({
                delay: 3000,
                callback: () => {
                    this.sound.stopAll();
                    this.scene.start('Gameover', this.data.getAll());
                },
            });
        }
    }
}
