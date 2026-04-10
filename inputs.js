const inputs = new Map();
const mappings = new Map();
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
    mappings.set('a', 'left');
    mappings.set('d', 'right');
    mappings.set('w', 'up');
    mappings.set('s', 'down');
    for (let currKey in mappings) {
        inputs.set(mappings.get(currKey), false);
    }
}
function keyDown(e) {
    if (!mappings.hasOwnProperty(e.key))
        return;
    inputs.set(mappings.get(e.key), true);
}
function keyUp(e) {
    if (!mappings.hasOwnProperty(e.key))
        return;
    inputs.set(mappings.get(e.key), false);
}
//# sourceMappingURL=inputs.js.map