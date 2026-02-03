export class Rect {
    constructor(pos, size) {
        this.pos = pos;
        this.size = size;
    }

    draw(renderer) {
        renderer.fillRect(this.pos, this.size);
    }
}

export class Line {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    draw(renderer) {
        renderer.drawLine(this.from, this.to);
    }
}