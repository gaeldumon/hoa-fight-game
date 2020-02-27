import { getGameWidth, getGameHeight } from '../helpers';

export class Bomb {

	static create(params): void {

		let x = Phaser.Math.Between(0, getGameWidth(params.scene));
		// The key 'bomb' must be the same as the one used in pack.json
		let bomb = params.group.create(x, 0, 'bomb');
		bomb.setBounce(1);
		bomb.setCollideWorldBounds(true);
		bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
		bomb.allowGravity = false;

	}

	static hit(player, bomb): void {
		bomb.disableBody(true, true);
	}
}