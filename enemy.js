import * as VectorMath from './math.js';

export class Enemy {
	constructor(pos, sprite, path) {
		this.pos = pos;
		this.sprite = sprite;

		this.walkSpeed = 0.003;
		this.currentPathNode = 0;

		this.facingDir = new VectorMath.Vec2(0, 1);

		this.requestedMoveDir = new VectorMath.Vec2(0, 1);

		this.spriteOffset = VectorMath.subVecs(this.sprite.pos, this.pos);

		this.path = path;
	}

	update() {
		this.sprite.pos = VectorMath.addVecs(this.pos, this.spriteOffset);

		this.requestedMoveDir = VectorMath.subVecs(
			this.path[this.currentPathNode],
			this.pos,
		);
		const distance = this.requestedMoveDir.length();

		if (distance < 0.01) {
			this.currentPathNode++;
			this.currentPathNode = this.currentPathNode % this.path.length;
		}

		if (this.requestedMoveDir.length() <= 0) return;

		VectorMath.addTo(
			this.pos,
			VectorMath.scaleVecs(
				this.requestedMoveDir.asUnit(),
				this.walkSpeed,
			),
		);

		this.requestedMoveDir = new VectorMath.Vec2(0, 0);
	}
}
