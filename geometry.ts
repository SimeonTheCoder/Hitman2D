import { Vec2 } from "./math.js";
import { Renderer } from "./render.js";

export class Rect {
	pos: Vec2;
	size: Vec2;

	constructor(pos: Vec2, size: Vec2) {
		this.pos = pos;
		this.size = size;
	}

	color = 'black';

	draw(renderer: Renderer) {
		renderer.setColor(this.color);
		renderer.fillRect(this.pos, this.size);
	}
}

export class Line {
	from: Vec2;
	to: Vec2;

	constructor(from: Vec2, to: Vec2) {
		this.from = from;
		this.to = to;
	}

	draw(renderer: Renderer) {
		renderer.drawLine(this.from, this.to);
	}
}
