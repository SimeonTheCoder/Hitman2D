export class Vec2 {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        const l = this.length();
        
        this.x /= l;
        this.y /= l;
    }

    asUnit() {
        const l = this.length();
        return new Vec2(this.x / l, this.y / l);
    }

    toString() {
        return `(x: ${this.x}, y: ${this.y})`;
    }
}

export function parseInput(input) {
    if (input.constructor.name !== 'Vec2')
        return new Vec2(Number(input), Number(input));

    return input;
}

export function addVecs(a, b) {
    a = parseInput(a);
    b = parseInput(b);

    return new Vec2(a.x + b.x, a.y + b.y);
}

export function addTo(a, b) {
    a = parseInput(a);
    b = parseInput(b);

    a.x += b.x;
    a.y += b.y;
}

export function subVecs(a, b) {
    a = parseInput(a);
    b = parseInput(b);

    return new Vec2(a.x - b.x, a.y - b.y);
}

export function subFrom(a, b) {
    a = parseInput(a);
    b = parseInput(b);

    a.x -= b.x;
    a.y -= b.y;
}

export function scaleVecs(a, b) {
    a = parseInput(a);
    b = parseInput(b);

    return new Vec2(a.x * b.x, a.y * b.y);
}

export function scaleBy(a, b) {
    a = parseInput(a);
    b = parseInput(b);

    a.x *= b.x;
    a.y *= b.y;
}

export function setTo(a, b) {
    a = parseInput(a);
    b = parseInput(b);

    a.x = b.x;
    a.y = b.y;
}

export function uv(input, width, height) {
    return new Vec2(
        input.x * height,
        input.y * height
    );
}