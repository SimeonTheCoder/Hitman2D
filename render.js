import * as VectorMath from './math.js';

export class Renderer {
	constructor(canvas, width, height, objectsToRender) {
		this.canvas = canvas;

		this.width = width;
		this.height = height;

		this.scene = objectsToRender;
	}

	fillRect(pos, size) {
		pos = VectorMath.uv(pos, this.width, this.height);
		size = VectorMath.uv(size, this.width, this.height);

		this.canvas.fillRect(
			pos.x - size.x / 2,
			pos.y - size.y / 2,
			size.x,
			size.y,
		);
	}

	drawLine(from, to) {
		from = VectorMath.uv(from, this.width, this.height);
		to = VectorMath.uv(to, this.width, this.height);

		this.canvas.beginPath();
		this.canvas.moveTo(from.x, from.y);
		this.canvas.lineTo(to.x, to.y);
		this.canvas.stroke();
	}

	render() {
		this.canvas.clearRect(0, 0, this.width, this.height);

		for (const obj of this.scene) {
			obj.draw(this);
		}
	}
}
