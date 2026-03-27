import * as VectorMath from './math.js';
import * as Rendering from './render.js';
import * as Primitives from './geometry.js';
import { Player } from './player.js';
import * as Keyboard from './inputs.js';
import { Enemy } from './enemy.js';

const height = window.innerHeight * 0.98;
const width = Math.floor((height * 16.0) / 9.0);

const inputs = Keyboard.initKeyboard();

function initCanvas() {
	const canvasDOM = document.getElementById('canvas');

	canvasDOM.width = width;
	canvasDOM.height = height;

	return canvasDOM.getContext('2d');
}

function createRect(pos, size) {
	return new Primitives.Rect(pos, size);
}

function createLine(from, to) {
	return new Primitives.Line(from, to);
}

const canvas = initCanvas();

const scene = [];

const playerSprite = createRect(
	new VectorMath.Vec2(0.5, 0.5),
	new VectorMath.Vec2(0.02, 0.02),
);
const player = new Player(new VectorMath.Vec2(0.5, 0.5), playerSprite);

const enemySprite = createRect(
	new VectorMath.Vec2(0.1, 0.1),
	new VectorMath.Vec2(0.02, 0.02),
);
const enemy = new Enemy(new VectorMath.Vec2(0.1, 0.1), enemySprite, [
	new VectorMath.Vec2(0.1, 0.1),
	new VectorMath.Vec2(0.9, 0.1),
	new VectorMath.Vec2(0.9, 0.9),
	new VectorMath.Vec2(0.1, 0.9),
]);

const mouseSprite = createRect(
	player.mousePos,
	new VectorMath.Vec2(0.02, 0.02),
);

scene.push(playerSprite);
scene.push(enemySprite);
scene.push(mouseSprite);

const renderer = new Rendering.Renderer(canvas, width, height, scene);

setInterval(() => {
	player.update(inputs);
	enemy.update();
	renderer.render();
}, 16);
