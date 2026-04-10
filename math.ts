export class Vec2 {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	normalize(): void {
		const l = this.length();

		this.x /= l;
		this.y /= l;
	}

	asUnit(): Vec2 {
		const l = this.length();
		return new Vec2(this.x / l, this.y / l);
	}

	toString(): string {
		return `(x: ${this.x}, y: ${this.y})`;
	}

	static parseInput(input: number | Vec2): Vec2 {
		if (input.constructor.name !== 'Vec2')
			return new Vec2(Number(input), Number(input));

		return input as Vec2;
	}

	static addVecs(a: Vec2 | number, b: Vec2 | number): Vec2 {
		a = Vec2.parseInput(a);
		b = Vec2.parseInput(b);

		return new Vec2(a.x + b.x, a.y + b.y);
	}

	static addTo(a: Vec2 | number, b: Vec2 | number): void {
		a = Vec2.parseInput(a);
		b = Vec2.parseInput(b);

		a.x += b.x;
		a.y += b.y;
	}

	static subVecs(a: Vec2 | number, b: Vec2 | number): Vec2 {
		a = Vec2.parseInput(a);
		b = Vec2.parseInput(b);

		return new Vec2(a.x - b.x, a.y - b.y);
	}

	static subFrom(a: Vec2 | number, b: Vec2 | number): void {
		a = Vec2.parseInput(a);
		b = Vec2.parseInput(b);

		a.x -= b.x;
		a.y -= b.y;
	}

	static scaleVecs(a: Vec2 | number, b: Vec2 | number): Vec2 {
		a = Vec2.parseInput(a);
		b = Vec2.parseInput(b);

		return new Vec2(a.x * b.x, a.y * b.y);
	}

	static scaleBy(a: Vec2, b: Vec2): void {
		a = Vec2.parseInput(a);
		b = Vec2.parseInput(b);

		a.x *= b.x;
		a.y *= b.y;
	}

	static setTo(a:Vec2 | number, b:Vec2 | number): void {
		a = Vec2.parseInput(a);
		b = Vec2.parseInput(b);

		a.x = b.x;
		a.y = b.y;
	}

	static uvToWorld(input: Vec2, width: number, height:number): Vec2 {
		return new Vec2(input.x * height, input.y * height);
	}

}