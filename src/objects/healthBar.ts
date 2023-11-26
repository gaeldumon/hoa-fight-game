import { COLORS, gameWidth } from "../helpers";

export class HealthBar {
    private bar: Phaser.GameObjects.Graphics;
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private healthValue: number;

    public decrease(pAmount: number): boolean {
        this.healthValue -= pAmount * 2;

        if (this.healthValue < 0) {
            this.healthValue = 0;
        }

        this.draw();

        return this.healthValue === 0;
    }

    private draw(): void {
        this.bar.clear();

        // Background
        this.bar.fillStyle(COLORS.white.hex);
        this.bar.fillRect(this.x, this.y, this.width, this.height);

        if (this.healthValue > 60) {
            this.bar.fillStyle(COLORS.customBlue.hex);
        } else {
            this.bar.fillStyle(COLORS.customRed.hex);
        }

        let healthWidth = Math.floor(this.healthValue);
        // The actual health jauge you see decreasing
        this.bar.fillRect(this.x, this.y, healthWidth, this.height);
    }

    constructor(params: { scene: Phaser.Scene; side: string }) {
        this.bar = params.scene.add.graphics();
        this.width = 200;
        this.height = 16;
        this.healthValue = 200;

        if (params.side === "left") {
            this.x = 74;
            this.y = 54;
        } else if (params.side === "right") {
            this.x = (gameWidth(params.scene)) - this.width - 78;
            this.y = 54;
        }

        this.draw();
    }
}
