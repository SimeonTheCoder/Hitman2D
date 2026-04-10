export class Vec2 {
    x;
    y;
    constructor(x, y) {
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
    static parseInput(input) {
        if (input.constructor.name !== 'Vec2')
            return new Vec2(Number(input), Number(input));
        return input;
    }
    static addVecs(a, b) {
        a = Vec2.parseInput(a);
        b = Vec2.parseInput(b);
        return new Vec2(a.x + b.x, a.y + b.y);
    }
    static addTo(a, b) {
        a = Vec2.parseInput(a);
        b = Vec2.parseInput(b);
        a.x += b.x;
        a.y += b.y;
    }
    static subVecs(a, b) {
        a = Vec2.parseInput(a);
        b = Vec2.parseInput(b);
        return new Vec2(a.x - b.x, a.y - b.y);
    }
    static subFrom(a, b) {
        a = Vec2.parseInput(a);
        b = Vec2.parseInput(b);
        a.x -= b.x;
        a.y -= b.y;
    }
    static scaleVecs(a, b) {
        a = Vec2.parseInput(a);
        b = Vec2.parseInput(b);
        return new Vec2(a.x * b.x, a.y * b.y);
    }
    static scaleBy(a, b) {
        a = Vec2.parseInput(a);
        b = Vec2.parseInput(b);
        a.x *= b.x;
        a.y *= b.y;
    }
    static setTo(a, b) {
        a = Vec2.parseInput(a);
        b = Vec2.parseInput(b);
        a.x = b.x;
        a.y = b.y;
    }
    static uvToWorld(input, width, height) {
        return new Vec2(input.x * height, input.y * height);
    }
}
//# sourceMappingURL=math.js.map