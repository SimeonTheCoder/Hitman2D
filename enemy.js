import { Entity } from './entity.js';
import { Vec2 } from './math.js';
import { Rect } from './geometry.js';
export class Enemy extends Entity {
    currentPathNode;
    path;
    constructor(pos, sprite, path) {
        super(pos, sprite);
        this.currentPathNode = 0;
        this.path = path;
    }
    update() {
        this.sprite.pos = Vec2.addVecs(this.pos, this.spriteOffset);
        this.requestedMoveDir = Vec2.subVecs(this.path[this.currentPathNode], this.pos);
        const distance = this.requestedMoveDir.length();
        if (distance < 0.01) {
            this.currentPathNode++;
            this.currentPathNode = this.currentPathNode % this.path.length;
        }
        if (this.requestedMoveDir.length() <= 0)
            return;
        Vec2.addTo(this.pos, Vec2.scaleVecs(this.requestedMoveDir.asUnit(), this.walkSpeed));
        this.requestedMoveDir = new Vec2(0, 0);
    }
}
//# sourceMappingURL=enemy.js.map