import * as VectorMath from './math.js';

export class Player {
	constructor(pos, sprite) {
		this.pos = pos;
		this.sprite = sprite;

		this.walkSpeed = 0.01;

		this.mousePos = new VectorMath.Vec2(0, 1);
		this.mouseDir = new VectorMath.Vec2(0, 1);

		this.facingDir = new VectorMath.Vec2(0, 1);

		this.requestedMoveDir = new VectorMath.Vec2(0, 1);

		this.spriteOffset = VectorMath.subVecs(this.sprite.pos, this.pos);
	}

	update(inputs) {
		this.handleInput(inputs);
		this.sprite.pos = VectorMath.addVecs(this.pos, this.spriteOffset);

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

	handleInput(inputs) {
		const mappings = {};

		mappings['left'] = this.left.bind(this);
		mappings['right'] = this.right.bind(this);
		mappings['up'] = this.up.bind(this);
		mappings['down'] = this.down.bind(this);

		mappings['mouseX'] = this.mouseX.bind(this);
		mappings['mouseY'] = this.mouseY.bind(this);

		for (let [bind, value] of inputs.entries()) {
			if (value === false) continue;
			mappings[bind](value);
		}
	}

	left(value) {
		const perpendicular = new VectorMath.Vec2(
			this.facingDir.y,
			-this.facingDir.x,
		);
		VectorMath.addTo(this.requestedMoveDir, perpendicular);
	}

	right(value) {
		const perpendicular = new VectorMath.Vec2(
			-this.facingDir.y,
			this.facingDir.x,
		);
		VectorMath.addTo(this.requestedMoveDir, perpendicular);
	}

	up(value) {
		this.updateFacingDir();

		VectorMath.addTo(this.requestedMoveDir, this.facingDir);
	}

	down(value) {
		this.updateFacingDir();

		VectorMath.addTo(
			this.requestedMoveDir,
			new VectorMath.Vec2(-this.mouseDir.x, -this.mouseDir.y),
		);
	}

	mouseX(value) {
		this.mousePos.x = value;
		this.updateMouseDir();
	}

	mouseY(value) {
		this.mousePos.y = value;
		this.updateMouseDir();
	}

	updateFacingDir() {
		VectorMath.setTo(this.facingDir, this.mouseDir);
	}

	updateMouseDir() {
		const offset = VectorMath.subVecs(this.mousePos, this.pos);
		VectorMath.setTo(this.mouseDir, offset.asUnit());
	}
}
