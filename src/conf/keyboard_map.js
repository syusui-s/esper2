import { KeyboardMap } from '../model/keyboard_map.js';

/**
 * キーボード配列
 *
 * @typedef KeyboardMapObj
 * @prop {Map<String, KeyboardMap>} map
 */
export class KeyboardMaps {
  /**
   * @typedef {{ direct: string, shift: string }} KeyboardMapEntry
   *     direct: 直接入力時の入力文字
   *     shift: Shiftキー押下時の入力文字
   * @typedef {{ [keycode: string]: KeyboardMapEntry }} KeyboardMapsObject
   *     keycode: キーコード
   * @typedef {{ id: string, name: string, map: KeyboardMapsObject }[]} KeyboardMapsDefinition
   *     id   キーボード配列ID
   *     name キーボード配列名
   * @param {KeyboardMapsDefinition} keyboardMaps
   */
  constructor(keyboardMaps) {
    this.map = new Map();

    keyboardMaps.forEach(({ id, name, map }) => {
      this.map.set(id, KeyboardMap.fromMap(name, map));
    });
  }

  /**
   * @param {string} id
   */
  findById(id) {
    return this.map.get(id);
  }

  listIds() {
    return Array.from(this.map.keys());
  }
}

export default new KeyboardMaps([
  {
    id: 'qwerty_jis',
    name: 'QWERTY (JIS)',
    map: {
      KeyQ: { direct: 'q', shift: 'Q' },
      KeyW: { direct: 'w', shift: 'W' },
      KeyE: { direct: 'e', shift: 'E' },
      KeyR: { direct: 'r', shift: 'R' },
      KeyT: { direct: 't', shift: 'T' },
      KeyY: { direct: 'y', shift: 'Y' },
      KeyU: { direct: 'u', shift: 'U' },
      KeyI: { direct: 'i', shift: 'I' },
      KeyO: { direct: 'o', shift: 'O' },
      KeyP: { direct: 'p', shift: 'P' },
      BracketLeft: { direct: '[', shift: '{' },
      BracketRight: { direct: ']', shift: '}' },
      KeyA: { direct: 'a', shift: 'A' },
      KeyS: { direct: 's', shift: 'S' },
      KeyD: { direct: 'd', shift: 'D' },
      KeyF: { direct: 'f', shift: 'F' },
      KeyG: { direct: 'g', shift: 'G' },
      KeyH: { direct: 'h', shift: 'H' },
      KeyJ: { direct: 'j', shift: 'J' },
      KeyK: { direct: 'k', shift: 'K' },
      KeyL: { direct: 'l', shift: 'L' },
      Semicolon: { direct: ';', shift: ';' },
      Quote: { direct: ':', shift: ':' },
      Backslash: { direct: ']', shift: '}' },
      KeyZ: { direct: 'z', shift: 'Z' },
      KeyX: { direct: 'x', shift: 'X' },
      KeyC: { direct: 'c', shift: 'C' },
      KeyV: { direct: 'v', shift: 'V' },
      KeyB: { direct: 'b', shift: 'B' },
      KeyN: { direct: 'n', shift: 'N' },
      KeyM: { direct: 'm', shift: 'M' },
      Comma: { direct: ',', shift: ',' },
      Period: { direct: '.', shift: '.' },
      Slash: { direct: '/', shift: '/' },
      IntlRo: { direct: '\\', shift: '_' },
      Digit1: { direct: '1', shift: '!' },
      Digit2: { direct: '2', shift: '"' },
      Digit3: { direct: '3', shift: '#' },
      Digit4: { direct: '4', shift: '$' },
      Digit5: { direct: '5', shift: '%' },
      Digit6: { direct: '6', shift: '&' },
      Digit7: { direct: '7', shift: "'" },
      Digit8: { direct: '8', shift: '(' },
      Digit9: { direct: '9', shift: ')' },
      Digit0: { direct: '0', shift: '0' },
      Minus: { direct: '@', shift: '`' },
      Equal: { direct: '^', shift: '~' },
      IntlYen: { direct: '¥', shift: '|' },
    },
  },
  {
    id: 'dvorak_jp106',
    name: 'Dvorak JP106',
    map: {
      KeyQ: { direct: ':', shift: '*' },
      KeyW: { direct: ',', shift: '<' },
      KeyE: { direct: '.', shift: '>' },
      KeyR: { direct: 'p', shift: 'P' },
      KeyT: { direct: 'y', shift: 'Y' },
      KeyY: { direct: 'f', shift: 'F' },
      KeyU: { direct: 'g', shift: 'G' },
      KeyI: { direct: 'c', shift: 'C' },
      KeyO: { direct: 'r', shift: 'R' },
      KeyP: { direct: 'l', shift: 'L' },
      BracketLeft: { direct: '/', shift: '?' },
      BracketRight: { direct: '[', shift: '{' },
      KeyA: { direct: 'a', shift: 'A' },
      KeyS: { direct: 'o', shift: 'O' },
      KeyD: { direct: 'e', shift: 'E' },
      KeyF: { direct: 'u', shift: 'U' },
      KeyG: { direct: 'i', shift: 'I' },
      KeyH: { direct: 'd', shift: 'D' },
      KeyJ: { direct: 'h', shift: 'H' },
      KeyK: { direct: 't', shift: 'T' },
      KeyL: { direct: 'n', shift: 'N' },
      Semicolon: { direct: 's', shift: 'S' },
      Quote: { direct: '-', shift: '=' },
      Backslash: { direct: ']', shift: '}' },
      KeyZ: { direct: ';', shift: ';' },
      KeyX: { direct: 'q', shift: 'Q' },
      KeyC: { direct: 'j', shift: 'J' },
      KeyV: { direct: 'k', shift: 'K' },
      KeyB: { direct: 'x', shift: 'X' },
      KeyN: { direct: 'b', shift: 'B' },
      KeyM: { direct: 'm', shift: 'M' },
      Comma: { direct: 'w', shift: 'W' },
      Period: { direct: 'v', shift: 'V' },
      Slash: { direct: 'z', shift: 'Z' },
      IntlRo: { direct: '\\', shift: '_' },
      Digit1: { direct: '1', shift: '!' },
      Digit2: { direct: '2', shift: '"' },
      Digit3: { direct: '3', shift: '#' },
      Digit4: { direct: '4', shift: '$' },
      Digit5: { direct: '5', shift: '%' },
      Digit6: { direct: '6', shift: '&' },
      Digit7: { direct: '7', shift: "'" },
      Digit8: { direct: '8', shift: '(' },
      Digit9: { direct: '9', shift: ')' },
      Digit0: { direct: '0', shift: '0' },
      Minus: { direct: '@', shift: '`' },
      Equal: { direct: '^', shift: '~' },
      IntlYen: { direct: '¥', shift: '|' },
    },
  },
]);
