/** @format */

import { Projectile } from "./Projectile";
import { HealthBar } from "./HealthBar";
import { Character } from "./Character";

export class Player extends Phaser.Physics.Arcade.Sprite {
    private _projectiles: Phaser.GameObjects.Group;
    private healthBar: HealthBar;

    private rightKey: Phaser.Input.Keyboard.Key;
    private leftKey: Phaser.Input.Keyboard.Key;
    private jumpKey: Phaser.Input.Keyboard.Key;
    private shootKey: Phaser.Input.Keyboard.Key;
    private lastPressedKey: Phaser.Input.Keyboard.Key;

    private jumpSound: Phaser.Sound.BaseSound;
    private shootSound: Phaser.Sound.BaseSound;

    private lastShoot: number;
    private health: number;
    private vx: number;
    private gravityY: number;
    private jumpVelocity: number;
    private bounce: number;
    private bulletProof: boolean;

    private readonly STATES = {
        NORMAL: "NORMAL",
        HURT: "HURT",
        DEAD: "DEAD",
    };

    public get projectiles(): Phaser.GameObjects.Group {
        return this._projectiles;
    }

    public isDead(): boolean {
        return this.health <= 0;
    }

    public hurt(): void {
        if (this.bulletProof === false) {
            if (this.health > 0) {
                this.health -= 20;
                this.healthBar.decrease(20);

				if (this.state !== this.STATES.HURT) {
					this.setState(this.STATES.HURT);
				}
            }
        }
    }

    public makeBulletProof(): void {
        if (this.bulletProof === false) this.bulletProof = true;
    }

    private initSounds(): void {
        this.jumpSound = this.scene.sound.add("jumpSound");
        this.shootSound = this.scene.sound.add("shootSound");
    }

    private initVitals(): void {
        this.health = 100;
        this.bulletProof = false;
    }

    private initPhysics(): void {
        this.gravityY = 1000;
        this.jumpVelocity = -600;
        this.vx = 150;
        this.bounce = 0.5;
    }

    private applyPhysics(): void {
        this.scene.physics.world.enable(this);
        this.setGravityY(this.gravityY);
        this.setBounce(this.bounce);
        this.setCollideWorldBounds(true);
    }

    private initControls(pKeys): void {
        this.jumpKey = this.scene.input.keyboard.addKey(pKeys["jump"]);
        this.rightKey = this.scene.input.keyboard.addKey(pKeys["right"]);
        this.leftKey = this.scene.input.keyboard.addKey(pKeys["left"]);
        this.shootKey = this.scene.input.keyboard.addKey(pKeys["shoot"]);
    }

    private initHealthBar(pHealthBar: HealthBar): void {
        this.healthBar = pHealthBar;
    }

    private initShooting(): void {
        this.lastShoot = 0;
        this._projectiles = this.scene.add.group({
            runChildUpdate: true,
        });
    }

    private shoot(): void {
        if (this.scene.time.now > this.lastShoot) {
            this._projectiles.add(
                new Projectile({
                    scene: this.scene,
                    // Changing bullet starting point if sprite is flipped on X axis.
                    x: !this.flipX ? this.x + 20 : this.x - 20,
                    y: this.y + 11,
                    // Bullet direction (left/right) based on last pressed key
                    // (i.e direction of the player). Default: goes right.
                    direction: this.lastPressedKey === this.leftKey ? -1 : 1,
                    textureKey: "projectile",
                })
            );
            this.lastShoot = this.scene.time.now + 500;
            // Playing sound here ensures us it is played only once every shoot.
            this.shootSound.play();
        }
    }

    /**
     * Flipping the sprite on its X axis, depending on which direction you go.
     */
    private handleSpriteFlipping(): void {
        if (this.lastPressedKey === this.leftKey) {
            // Changed sprite orientation: facing left.
            this.flipX = true;
        } else if (this.lastPressedKey === this.rightKey) {
            // Original sprite orientation: facing right.
            this.flipX = false;
        } else {
            // Original sprite orientation: facing right.
            this.flipX = false;
        }
    }

    private handleJumping(): void {
        if (this.jumpKey.isDown) {
            if (this.body.blocked.down || this.body.touching.down) {
                this.setVelocityY(this.jumpVelocity);
                this.jumpSound.play();
            }
        }
    }

    /**
     * Handle idling (doing nothing) AND idling-shooting.
     * This includes animation playing, checking key press, setting velocity,
     * create shoots.
     */
    private handleIdling(): void {
        this.setVelocityX(0);
        this.anims.play(`${this.texture.key}IDLE`, true);

        // Idling-Shooting.
        if (this.shootKey.isDown) {
            this.anims.play(`${this.texture.key}IDLE_SHOOT`, true);
            this.shoot();
        }
    }

    /**
     * Handle walking AND walking-shooting.
     * This includes animation playing, checking key press, setting velocity,
     * create shoots and remembering last pressed key.
     */
    private handleWalking(): void {
        this.anims.play(`${this.texture.key}WALK`, true);

        // Walking : going right
        if (this.rightKey.isDown) {
            this.setVelocityX(this.vx);
            this.lastPressedKey = this.rightKey;
        }
        // Walking : going left
        if (this.leftKey.isDown) {
            this.setVelocityX(-this.vx);
            this.lastPressedKey = this.leftKey;
        }

        // Walking-Shooting
        if (this.shootKey.isDown) {
            this.anims.play(`${this.texture.key}WALK_SHOOT`, true);
            this.shoot();
        }
    }

    constructor(params: {
        scene: Phaser.Scene;
        x: number;
        y: number;
        textureKey: string;
        controlKeys: object;
        healthBar: HealthBar;
    }) {
        super(params.scene, params.x, params.y, params.textureKey);

        this.scene.add.existing(this);
        this.initPhysics();
        this.applyPhysics();
        this.initSounds();
        this.initVitals();
        this.initHealthBar(params.healthBar);
        this.initShooting();
        this.initControls(params.controlKeys);

        // Restrain the boundingBox
        this.setSize(20, 60);

		this.setState(this.STATES.NORMAL);
    }

    update(): void {
		if (this.isDead()) {
			this.state = this.STATES.DEAD;
		}

        if (this.state === this.STATES.NORMAL) {
            // This is detached from the other block because you can do anything
            // while jumping: walk/walk-shoot, idle/idle-shoot. So it isn't
            // dependant of whether you're pressing left or right or whatever.
            this.handleJumping();

            if (this.rightKey.isDown || this.leftKey.isDown) {
                this.handleWalking();
            } else {
                this.handleIdling();
            }

			this.handleSpriteFlipping();
			
        } else if (this.state === this.STATES.HURT) {
            this.anims.play(`${this.texture.key}HIT`, true);

            this.setVelocityX(0);

			// The only thing that make the player return to normal is time
            this.scene.time.addEvent({
                delay: 1000,
                loop: false,
                callback: () => {
                    this.setState(this.STATES.NORMAL);
                },
            });
        } else if (this.state === this.STATES.DEAD) {
            // We don't reset state to NORMAL cause it's end of the game
            this.anims.play(`${this.texture.key}DEAD`, true);
            this.setVelocityX(0);
        } else {
            throw new Error("Unknown Player State");
        }
    }
}
