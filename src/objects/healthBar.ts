export class HealthBar {

	private bar: Phaser.GameObjects.Graphics;
	private x: number;
	private y: number;
	private healthValue: number;
	private percentage: number;

    constructor(params: { scene: Phaser.Scene; x: number; y: number; }) {
        this.bar = new Phaser.GameObjects.Graphics(params.scene);
        this.x = params.x;
        this.y = params.y;
        this.healthValue = 100;
        this.percentage = 76/100;

        this.draw();

        params.scene.add.existing(this.bar);
    }

    public decrease(pAmount: number): boolean {
		this.healthValue -= pAmount;
		
		if (this.healthValue < 0) {
			this.healthValue = 0;
		}

        this.draw();

        return (this.healthValue === 0);
    }

    private draw(): void {
        this.bar.clear();

        // Responsible for the black borders
        this.bar.fillStyle(0x000000);
        this.bar.fillRect(this.x, this.y, 80, 16);

        // Responsible for the white background
        this.bar.fillStyle(0xffffff);
        this.bar.fillRect(this.x + 2, this.y + 2, 76, 12);

		// Coloring the health jauge based on how much health you have left
		// If your health is > 30 then the bar is green, if you have less it's red
		if (this.healthValue > 30) {
			this.bar.fillStyle(0x00ff00);
		} else {
			this.bar.fillStyle(0xff0000);
		}

        let healthWidth = Math.floor(this.percentage * this.healthValue);

		// The actual health jauge you see decreasing
        this.bar.fillRect(this.x + 2, this.y + 2, healthWidth, 12);
    }

}