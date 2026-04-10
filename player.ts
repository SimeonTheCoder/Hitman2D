import { Vec2 } from "./math.js";
import * as VectorMath from './math.js';
import { Rect } from "./geometry.js";
import { Entity } from "./entity.js";

export class Player extends Entity {
	mousePos: Vec2;
	mouseDir: Vec2;

	constructor(pos: Vec2, sprite: Rect) {
		super(pos, sprite);

		this.mousePos = new Vec2(0, 1);
		this.mouseDir = new Vec2(0, 1);
	}

	update(inputs: Map<string, number | boolean>) {
		this.handleInput(inputs);
		this.sprite.pos = Vec2.addVecs(this.pos, this.spriteOffset);

		if (this.requestedMoveDir.length() <= 0) return;

		Vec2.addTo(
			this.pos,
			Vec2.scaleVecs(
				this.requestedMoveDir.asUnit(),
				this.walkSpeed,
			),
		);

		this.requestedMoveDir = new Vec2(0, 0);
	}

	handleInput(inputs: Map<string, number | boolean | null | undefined>) {
		const mappings: Map<string, ((value: any) => void)> = new Map();

		mappings.set('left', this.left.bind(this));
		mappings.set('right', this.right.bind(this));
		mappings.set('up', this.up.bind(this));
		mappings.set('down', this.down.bind(this));

		mappings.set('mouseX', this.mouseX.bind(this));
		mappings.set('mouseY', this.mouseY.bind(this));

		for (let [bind, value] of inputs.entries()) {
			if (value === null || value === undefined) continue;
			(mappings.get(bind))!(value);
		}
	}

	left(value: any): void {
		const perpendicular = new Vec2(
			this.facingDir.y,
			-this.facingDir.x,
		);

		Vec2.addTo(this.requestedMoveDir, perpendicular);
	}

	right(value: any): void {
		const perpendicular = new Vec2(
			-this.facingDir.y,
			this.facingDir.x,
		);

		Vec2.addTo(this.requestedMoveDir, perpendicular);
	}

	up(value: any): void {
		this.updateFacingDir();

		Vec2.addTo(this.requestedMoveDir, this.facingDir);
	}

	down(value: any) {
		this.updateFacingDir();

		Vec2.addTo(
			this.requestedMoveDir,
			new Vec2(-this.mouseDir.x, -this.mouseDir.y),
		);
	}

	mouseX(value: number): void {
		this.mousePos.x = value;
		this.updateMouseDir();
	}

	mouseY(value: number): void {
		this.mousePos.y = value;
		this.updateMouseDir();
	}

	updateFacingDir() {
		Vec2.setTo(this.facingDir, this.mouseDir);
	}

	updateMouseDir() {
		const offset = Vec2.subVecs(this.mousePos, this.pos);
		Vec2.setTo(this.mouseDir, offset.asUnit());
	}
}
