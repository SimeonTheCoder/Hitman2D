import { Vec2 } from './math.js';

export class Renderer {
	width: number;
	height: number;

	canvas: CanvasRenderingContext2D;

	scene: any[];

	constructor(canvas: CanvasRenderingContext2D, width: number, height: number, objectsToRender: any[]) {
		this.canvas = canvas;

		this.width = width;
		this.height = height;

		this.scene = objectsToRender;
	}

	setColor(color: string) {
		this.canvas.fillStyle = color;
	}

	fillRect(pos: Vec2, size: Vec2): void {
		pos = Vec2.uvToWorld(pos, this.width, this.height);
		size = Vec2.uvToWorld(size, this.width, this.height);

		this.canvas.fillRect(
			pos.x - size.x / 2,
			pos.y - size.y / 2,
			size.x,
			size.y,
		);
	}

	drawLine(from: Vec2, to: Vec2) {
		from = Vec2.uvToWorld(from, this.width, this.height);
		to = Vec2.uvToWorld(to, this.width, this.height);

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
