import { Vec2 } from './math.js';
export class Renderer {
    width;
    height;
    canvas;
    scene;
    constructor(canvas, width, height, objectsToRender) {
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.scene = objectsToRender;
    }
    setColor(color) {
        this.canvas.fillStyle = color;
    }
    fillRect(pos, size) {
        pos = Vec2.uvToWorld(pos, this.width, this.height);
        size = Vec2.uvToWorld(size, this.width, this.height);
        this.canvas.fillRect(pos.x - size.x / 2, pos.y - size.y / 2, size.x, size.y);
    }
    drawLine(from, to) {
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
//# sourceMappingURL=render.js.map