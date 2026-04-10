import { Vec2 } from "./math.js";

import { Rect } from "./geometry.js";

export class Entity {
    pos: Vec2;
    
    walkSpeed: number;

    facingDir: Vec2;
    requestedMoveDir: Vec2;

    spriteOffset: Vec2;
    sprite: Rect;

    constructor(pos: Vec2, sprite: Rect) {
        this.pos = pos;
        this.sprite = sprite;

        this.walkSpeed = 0.01;

        this.facingDir = new Vec2(0, 1);

        this.requestedMoveDir = new Vec2(0, 1);

        this.spriteOffset = Vec2.subVecs(this.sprite.pos, this.pos);
    }
}
