
import { COLORS, getGameHeight, getGameWidth } from "../helpers";

export class LoadingBar {
	private scene: Phaser.Scene;

	private bar: Phaser.GameObjects.Graphics;
	private barX: number;
	private barY: number;
	private barWidth: number;
	private barHeight: number;
	private barColor: number;
	private barAlpha: number;

	private box: Phaser.GameObjects.Graphics;
	private boxX: number;
	private boxY: number;
	private boxWidth: number;
	private boxHeight: number;
	private boxColor: number;
	private boxAlpha: number;

	private text: Phaser.GameObjects.Text;
	private _progressText: Phaser.GameObjects.Text;

	public get progressText(): Phaser.GameObjects.Text {
		return this._progressText;
	}
	
    public draw(pValue): void {
		this.bar.clear();
		this.bar.fillStyle(this.barColor, this.barAlpha);
		this.bar.fillRect(this.barX, this.barY, this.barWidth * pValue, this.barHeight);
	}
	
	public destroy(): void {
		this.bar.destroy();
		this.box.destroy();
		this.text.destroy();
		this.progressText.destroy();
	}

    constructor(params: { scene: Phaser.Scene }) {
		this.scene = params.scene;

		this.bar = this.scene.add.graphics();
		this.barWidth = 400;
		this.barHeight = 30;
		this.barX = (getGameWidth(this.scene)/2) - (this.barWidth/2);
		this.barY = (getGameHeight(this.scene)/2) - (this.barHeight/2);
		this.barColor = COLORS.customBlue.hex;
		this.barAlpha = 0.8;
		
		this.box = this.scene.add.graphics();
		this.boxWidth = this.barWidth + 10;
		this.boxHeight = this.barHeight + 10;
		this.boxX = (getGameWidth(this.scene)/2) - (this.boxWidth/2);
		this.boxY = (getGameHeight(this.scene)/2) - (this.boxHeight/2);
		this.boxColor = COLORS.white.hex;
		this.boxAlpha = 0.3;
		
		this.box.fillStyle(this.boxColor, this.boxAlpha);
		this.box.fillRect(this.boxX, this.boxY, this.boxWidth, this.boxHeight);

		this.text = this.scene.make.text({
			x: getGameWidth(this.scene)/2,
			y: (getGameHeight(this.scene)/2) + 40,
			text: "Loading...",
			style: {
				font: '20px monospace',
				fill: COLORS.white.string
			}
		});
		this.text.setOrigin(0.5, 0.5);

		this._progressText = this.scene.make.text({
			x: (getGameWidth(this.scene)/2), 
			y: (getGameHeight(this.scene)/2),
			text: "0%",
			style: {
				font: '18px monospace',
				fill: COLORS.white.string
			}
		});
		this._progressText.setOrigin(0.5, 0.5);
    }
}
