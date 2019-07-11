/**
 * @param {KeyboardEvent | KeyboardEvent & {fromRet: boolean}} ev
 */
const handler = (ev) => {
  if ('fromRet' in ev) {
    return;
  }

  if (ev.key == " ") { return; }
  console.log(ev.type, ev, ev.target);

  const copied = Object.assign({}, ev);
  delete copied.isTrusted;

  copied.key = 'j';
  copied.code = 'keyJ';
  copied.data = 'j';

  copied.keyCode = 74;
  copied.which = 74;

  const newEvent = new ev.constructor(ev.type, copied);
  newEvent.fromRet = true;
  window.dispatchEvent(newEvent);

  console.log(ev.type, newEvent);
  ev.stopPropagation();

};

window.addEventListener('keypress', handler, true);
window.addEventListener('keydown', handler, true);
window.addEventListener('keyup', handler, true);