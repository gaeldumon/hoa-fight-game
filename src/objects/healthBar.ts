/** @format */

import { COLORS } from "../helpers";

export class HealthBar {
    private bar: Phaser.GameObjects.Graphics;
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private healthValue: number;
    private percentage: number;

    public decrease(pAmount: number): boolean {
        this.healthValue -= pAmount;

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

        if (this.healthValue > 30) {
            this.bar.fillStyle(COLORS.customBlue.hex);
        } else {
            this.bar.fillStyle(COLORS.customRed.hex);
        }

        let healthWidth = Math.floor(this.percentage * this.healthValue);
        // The actual health jauge you see decreasing
        this.bar.fillRect(this.x, this.y, healthWidth, this.height);
    }

    constructor(params: { scene: Phaser.Scene; x: number; y: number }) {
        // Equivalent to this.bar = params.scene.add.graphics()
        this.bar = new Phaser.GameObjects.Graphics(params.scene);
        this.x = params.x;
        this.y = params.y;
        this.width = 100;
        this.height = 12;
        this.healthValue = 100;
        this.percentage = 100 / 100;

        this.draw();

        params.scene.add.existing(this.bar);
    }
}
