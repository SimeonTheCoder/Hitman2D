import { Vec2 } from "./math.js";
import { Renderer } from "./render.js";
export class Rect {
    pos;
    size;
    constructor(pos, size) {
        this.pos = pos;
        this.size = size;
    }
    color = 'black';
    draw(renderer) {
        renderer.setColor(this.color);
        renderer.fillRect(this.pos, this.size);
    }
}
export class Line {
    from;
    to;
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    draw(renderer) {
        renderer.drawLine(this.from, this.to);
    }
}
//# sourceMappingURL=geometry.js.map