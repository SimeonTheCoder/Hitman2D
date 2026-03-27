const inputs = new Map();
const mappings = {};

export function initKeyboard() {
	initKeyMappings();

	window.addEventListener('keydown', keyDown);
	window.addEventListener('keyup', keyUp);

	window.onmousemove = handleMouse;

	return inputs;
}

function handleMouse(e) {
	inputs.set('mouseX', e.clientX / window.innerHeight);
	inputs.set('mouseY', e.clientY / window.innerHeight);
}

function initKeyMappings() {
	mappings['a'] = 'left';
	mappings['d'] = 'right';
	mappings['w'] = 'up';
	mappings['s'] = 'down';

	for (let currKey in mappings) {
		inputs.set(mappings[currKey], false);
	}
}

function keyDown(e) {
	if (!mappings.hasOwnProperty(e.key)) return;
	inputs.set(mappings[e.key], true);
}

function keyUp(e) {
	if (!mappings.hasOwnProperty(e.key)) return;
	inputs.set(mappings[e.key], false);
}
